#!/usr/bin/env node
// patch-ios.mjs - 把 iOS 原生补丁拿到生成的 Xcode 工程里并重新生成(幂等)。
// 若 src-tauri/gen/apple 不存在(iOS 未初始化)则直接跳过。
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const appleDir = path.join(root, 'src-tauri/gen/apple');
if (!fs.existsSync(appleDir)) {
  process.exit(0);
}
const srcDir = path.join(root, 'ios');
const dstDir = path.join(appleDir, 'Sources/umiguri');
if (!fs.existsSync(dstDir)) {
  process.exit(0);
}

let copied = 0;
for (const f of fs.readdirSync(srcDir)) {
  if (!/\.(mm|m|swift)$/.test(f)) continue;
  const src = path.join(srcDir, f);
  const dst = path.join(dstDir, f);
  const a = fs.existsSync(dst) ? fs.readFileSync(dst) : null;
  const b = fs.readFileSync(src);
  if (!a || !a.equals(b)) {
    fs.writeFileSync(dst, b);
    copied++;
  }
}

// 重新生成 xcodeproj 以纳入新增源文件(tauri ios init 也会用 xcodegen)
try {
  execFileSync('xcodegen', ['generate'], { cwd: appleDir, stdio: 'ignore' });
} catch (e) {
  console.warn('[patch-ios] xcodegen 未执行(可忽略): ' + e.message);
}
console.log(`[patch-ios] ${copied} 个原生补丁更新 -> ${path.relative(root, dstDir)}`);
