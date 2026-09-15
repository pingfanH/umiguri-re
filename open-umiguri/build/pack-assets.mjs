// 打包资源: open-umiguri/assets(解密/解包态) -> dist/game_data(运行时态)
//
//   *.una 目录   -> <同名>.una 归档  (P2=2, M2=true)
//   *.arc 目录   -> <同名>.arc 归档  (P2=1, M2=true)
//   其他明文文件 -> 原样复制
//
// 这就是「解密呈现、打包时自动加密」的落点。
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const umg = require('../tools/umg.cjs');

const srcDir = path.resolve(process.argv[2] || path.join(root, 'assets'));
const outDir = path.resolve(process.argv[3] || path.join(root, 'dist', 'game_data'));

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
fs.cpSync(srcDir, outDir, { recursive: true });

// 收集需要打包的归档目录(名字以 .una/.arc 结尾的目录)
const dirs = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) {
      if (e.name.endsWith('.una') || e.name.endsWith('.arc')) dirs.push(p);
      else walk(p);
    }
  }
})(outDir);

let n = 0;
for (const dir of dirs) {
  const name = path.basename(dir);
  const p2 = name.endsWith('.una') ? 2 : 1;
  const tmp = dir + '.packtmp';
  const r = umg.packDir(dir, tmp, { p2, m2: true });
  fs.rmSync(dir, { recursive: true, force: true });
  fs.renameSync(tmp, dir);
  console.log(`  pack ${path.relative(outDir, dir)} (p2=${p2}) -> ${r.size} bytes`);
  n++;
}
console.log(`pack-assets done: ${n} 个归档 -> ${outDir}`);
