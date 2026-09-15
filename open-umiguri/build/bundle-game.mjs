// 构建游戏本体: 按 manifest 拼接 -> esbuild 压缩 -> dist/main.js
// 之后用 build/encrypt.mjs 加密为 dist/www/main.js.enc(默认一并执行)。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { transform } from 'esbuild';
import { aesEncrypt } from './encrypt.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gameDir = path.join(root, 'src/game');
const manifest = JSON.parse(fs.readFileSync(path.join(gameDir, 'manifest.json'), 'utf8'));

const parts = manifest.pieces.map((p) => fs.readFileSync(path.join(gameDir, p.file), 'utf8'));
const raw = parts.join('\n');

const minify = !process.argv.includes('--no-minify');
const result = await transform(raw, {
  loader: 'js',
  minify,
  target: ['chrome80', 'safari14', 'firefox78'],
  legalComments: 'none',
  charset: 'utf8',
});

const distDir = path.join(root, 'dist');
const wwwDir = path.join(distDir, 'www');
fs.mkdirSync(wwwDir, { recursive: true });
const plainFile = path.join(distDir, 'main.js');
fs.writeFileSync(plainFile, result.code);
console.log(
  `[build:game] ${manifest.pieces.length} 片段 -> dist/main.js ` +
    `(${(raw.length / 1048576).toFixed(2)} MB -> ${(result.code.length / 1048576).toFixed(2)} MB, minify=${minify})`
);

const encFile = path.join(wwwDir, 'main.js.enc');
const r = aesEncrypt(plainFile, encFile);
console.log(`[build:game] 加密 -> dist/www/main.js.enc (${r.enc} 字节)`);
