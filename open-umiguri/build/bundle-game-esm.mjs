// 构建「ES 模块版」游戏本体:
//   vendor/*.js(经典片段, 按文件名数字前缀 = 原顺序)  +  esbuild(src/game-esm/index.js)
// 不再依赖 manifest.json 拼接游戏模块。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build, transform } from 'esbuild';
import { aesEncrypt } from './encrypt.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const esmDir = path.join(root, 'src/game-esm');
const vendorDir = path.join(root, 'src/game/vendor');
const distDir = path.join(root, 'dist');
const wwwDir = path.join(distDir, 'www');

// 1) vendor 经典片段(文件名前缀即顺序) + vendor-upstream 覆盖文件由 split-game 已写入 vendor/
const vendorFiles = fs
  .readdirSync(vendorDir)
  .filter((f) => f.endsWith('.js'))
  .sort();
const vendorCode = vendorFiles.map((f) => fs.readFileSync(path.join(vendorDir, f), 'utf8')).join('\n');
fs.mkdirSync(distDir, { recursive: true });
const vendorOut = path.join(distDir, 'game.vendor.js');
fs.writeFileSync(vendorOut, vendorCode);
console.log(`[build:game-esm] vendor: ${vendorFiles.length} 片段 -> dist/game.vendor.js (${(vendorCode.length / 1048576).toFixed(2)} MB)`);

// 2) esbuild 打包 ES 模块入口 -> IIFE
const bundleOut = path.join(distDir, 'game.esm.bundle.js');
await build({
  entryPoints: [path.join(esmDir, 'index.js')],
  outfile: bundleOut,
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: ['chrome80', 'safari14', 'firefox78'],
  charset: 'utf8',
  legalComments: 'none',
  logLevel: 'warning',
});
console.log(`[build:game-esm] ES 模块 -> dist/game.esm.bundle.js (${(fs.statSync(bundleOut).size / 1048576).toFixed(2)} MB)`);

// 3) 合并 + 压缩
const raw = vendorCode + '\n;\n' + fs.readFileSync(bundleOut, 'utf8');
const minify = !process.argv.includes('--no-minify');
const result = await transform(raw, {
  loader: 'js',
  minify,
  target: ['chrome80', 'safari14', 'firefox78'],
  legalComments: 'none',
  charset: 'utf8',
});
const plainFile = path.join(distDir, 'main.esm.js');
fs.writeFileSync(plainFile, result.code);
// 另存未压缩版便于 freevar 检查
fs.writeFileSync(path.join(distDir, 'game.esm.raw.js'), raw);
console.log(`[build:game-esm] 合并+压缩 -> dist/main.esm.js (${(raw.length / 1048576).toFixed(2)} -> ${(result.code.length / 1048576).toFixed(2)} MB, minify=${minify})`);

// 4) 加密到 www(与默认构建同名; 用 --esm 时替换 main.js.enc)
const encFile = path.join(wwwDir, 'main.js.enc');
fs.mkdirSync(wwwDir, { recursive: true });
const r = aesEncrypt(plainFile, encFile);
console.log(`[build:game-esm] 加密 -> dist/www/main.js.enc (${r.enc} 字节)`);
