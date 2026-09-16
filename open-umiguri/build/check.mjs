// 语法校验构建产物(不需要浏览器)。
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = ['dist/www/tauri-bridge.js', 'dist/main.js', 'dist/main.esm.js'];
let failed = 0;
for (const t of targets) {
  const f = path.join(root, t);
  if (!fs.existsSync(f)) {
    console.error(`缺失: ${t}(先运行 npm run build)`);
    failed++;
    continue;
  }
  try {
    execFileSync(process.execPath, ['--check', f], { stdio: 'pipe' });
    console.log(`OK   ${t}`);
  } catch (e) {
    console.error(`FAIL ${t}\n${e.stderr}`);
    failed++;
  }
}
process.exit(failed ? 1 : 0);
