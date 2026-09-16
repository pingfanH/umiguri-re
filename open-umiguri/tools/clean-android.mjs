#!/usr/bin/env node
// clean-android.mjs - 清理 Android 构建中间产物(资源/资产)。
// 资源形态变化(如 .una 由目录 -> 文件)后必须清理, 否则 AGP/tauri-build 用陈旧副本
// 会报 EISDIR / "Not a directory (os error 20)" / DataFile null。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = [
  'src-tauri/gen/android/app/build',
  'src-tauri/gen/android/app/src/main/assets/game_data',
  'src-tauri/gen/android/.gradle',
  'src-tauri/gen/android/local.properties',
  'src-tauri/target/aarch64-linux-android/debug/game_data',
  'src-tauri/target/armv7-linux-androideabi/debug/game_data',
  'src-tauri/target/i686-linux-android/debug/game_data',
  'src-tauri/target/x86_64-linux-android/debug/game_data',
];
let n = 0;
for (const t of targets) {
  const p = path.join(root, t);
  if (fs.existsSync(p)) {
    fs.rmSync(p, { recursive: true, force: true });
    console.log('removed ' + t);
    n++;
  }
}
console.log(`clean-android: ${n} 项已清理`);
