// 按 manifest.json 顺序拼接游戏本体源码 -> dist/game.raw.js(未压缩经典脚本)。
// 拼接结果就是原 bundle(片段由 tools/split-game.mjs 逐字节校验)。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gameDir = path.join(root, 'src/game');
const manifest = JSON.parse(fs.readFileSync(path.join(gameDir, 'manifest.json'), 'utf8'));

const out = [];
for (const piece of manifest.pieces) {
  out.push(fs.readFileSync(path.join(gameDir, piece.file), 'utf8'));
}

const outDir = path.join(root, 'dist');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'game.raw.js');
fs.writeFileSync(outFile, out.join('\n'));
console.log(`[assemble-game] ${manifest.pieces.length} 片段 -> ${outFile} (${(fs.statSync(outFile).size / 1048576).toFixed(2)} MB)`);
