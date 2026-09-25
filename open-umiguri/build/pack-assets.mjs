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

// 纯 JS 递归拷贝: 不用 fs.cpSync —— 某些环境(如 Node 25 + libc++ 的原生实现)在
// 目标已存在同名条目时会抛未捕获的 std::filesystem::create_directory 异常而 abort。
function copyTree(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyTree(s, d);
    else if (e.isSymbolicLink()) {
      try { fs.symlinkSync(fs.readlinkSync(s), d); } catch (err) { /* ignore */ }
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

fs.rmSync(outDir, { recursive: true, force: true, maxRetries: 3 });
fs.mkdirSync(outDir, { recursive: true });
copyTree(srcDir, outDir);

// 用户数据(存档)不属于资源: core/config/*.krtbl 由游戏写入「可写层」,
// 若误放进 assets 会被打进安装包, 于是新装的机器也会读到旧存档(可写层为空时
// 回退到只读资源)。这里直接剔除并提示。
const USER_DATA = [/^core\/config\/.*\.krtbl$/];
let skippedUserData = 0;
(function prune(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    const r = rel ? rel + '/' + e.name : e.name;
    if (e.isDirectory()) prune(p, r);
    else if (USER_DATA.some((re) => re.test(r))) {
      fs.rmSync(p, { force: true });
      skippedUserData++;
      console.log(`  跳过用户数据(不打进资源): ${r}`);
    }
  }
})(outDir, '');
if (skippedUserData) console.log(`pack-assets: 已剔除 ${skippedUserData} 个用户数据文件(存档)`);

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
