#!/usr/bin/env node
// 给 Android 工程接入 release 签名(可复现)。
//
// src-tauri/gen/ 不入库(Tauri 会重新生成), 因此签名配置必须用脚本重放:
//   1) 生成密钥 <gen/android>/umiguri-release.jks(不存在时; 可用环境变量覆盖口令)
//   2) 写 <gen/android>/keystore.properties
//   3) 幂等改写 app/build.gradle.kts: 顶部 import + signingConfigs + release 条件签名
//
// 用法: node tools/patch-android-sign.mjs
//   口令: UMG_KEYSTORE_PASS(默认 umiguri-release; 正式发布请自行更换并妥善保管密钥)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const androidDir = path.join(root, 'src-tauri', 'gen', 'android');
if (!fs.existsSync(androidDir)) {
  console.log('patch-android-sign: 没有 gen/android(先跑一次 tauri android init), 跳过');
  process.exit(0);
}

const pass = process.env.UMG_KEYSTORE_PASS || 'umiguri-release';
const alias = process.env.UMG_KEYSTORE_ALIAS || 'umiguri';
const jksName = 'umiguri-release.jks';
const jks = path.join(androidDir, jksName);

if (!fs.existsSync(jks)) {
  console.log('patch-android-sign: 生成密钥 ' + jksName);
  execFileSync(
    'keytool',
    [
      '-genkeypair', '-keystore', jks, '-alias', alias, '-keyalg', 'RSA', '-keysize', '2048',
      '-validity', '10000', '-storepass', pass, '-keypass', pass,
      '-dname', 'CN=UMIGURI, OU=umgr-re, O=umiguri-re, L=Tokyo, ST=Tokyo, C=JP',
    ],
    { stdio: 'inherit' }
  );
}

const propsPath = path.join(androidDir, 'keystore.properties');
if (!fs.existsSync(propsPath)) {
  fs.writeFileSync(propsPath, `storeFile=${jksName}\nkeyAlias=${alias}\npassword=${pass}\n`);
  console.log('patch-android-sign: 写入 keystore.properties');
}

const gradle = path.join(androidDir, 'app', 'build.gradle.kts');
let g = fs.readFileSync(gradle, 'utf8');
let changed = false;

// 逐个补 import: 新模板本身可能已含 java.util.Properties(其签名模板用到了),
// 若按「缺 Properties 才补两个」的条件会漏掉 FileInputStream。
for (const imp of ['import java.io.FileInputStream', 'import java.util.Properties']) {
  if (!g.includes(imp)) {
    g = imp + '\n' + g;
    changed = true;
  }
}
if (!g.includes('signingConfigs {')) {
  g = g.replace(
    '    buildTypes {',
    `    signingConfigs {
        create("release") {
            val keystoreProperties = Properties()
            val keystorePropertiesFile = rootProject.file("keystore.properties")
            if (keystorePropertiesFile.exists()) {
                keystoreProperties.load(FileInputStream(keystorePropertiesFile))
            }
            storeFile = rootProject.file(keystoreProperties.getProperty("storeFile") ?: "${jksName}")
            storePassword = keystoreProperties.getProperty("password")
            keyAlias = keystoreProperties.getProperty("keyAlias")
            keyPassword = keystoreProperties.getProperty("password")
        }
    }
    buildTypes {`
  );
  changed = true;
}
if (!g.includes('signingConfig = signingConfigs.getByName("release")')) {
  g = g.replace(
    '        getByName("release") {',
    `        getByName("release") {
            // 有密钥才签名(keystore.properties / jks 不入库); 没有则产出未签名 APK
            val ksProps = Properties()
            val ksFile = rootProject.file("keystore.properties")
            if (ksFile.exists()) ksProps.load(FileInputStream(ksFile))
            val ksPath = rootProject.file(ksProps.getProperty("storeFile") ?: "${jksName}")
            if (ksPath.exists()) signingConfig = signingConfigs.getByName("release")`
  );
  changed = true;
}
if (changed) {
  fs.writeFileSync(gradle, g);
  console.log('patch-android-sign: 已改写 app/build.gradle.kts');
} else {
  console.log('patch-android-sign: 已是目标状态');
}
