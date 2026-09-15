#!/usr/bin/env node
// rename-symbols.mjs - 按 symbols.json 对反混淆 bundle 做「作用域安全」的语义重命名, 输出可读 bundle。
//
// 只改变量绑定名, 不改逻辑。冲突则中止。
//
// 用法: node tools/rename-symbols.mjs <in.js> <out.js> [--symbols tools/symbols.json]
//
// 注: 常规流程无需单独运行——tools/split-game.mjs 会在拆分前自动应用同一套符号。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, generate, loadSymbols, applySymbols } from './lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const inFile = args[0];
const outFile = args[1];
const symbolsFile = args.includes('--symbols') ? args[args.indexOf('--symbols') + 1] : path.join(root, 'tools/symbols.json');
if (!inFile || !outFile) {
  console.error('用法: node tools/rename-symbols.mjs <in.js> <out.js> [--symbols tools/symbols.json]');
  process.exit(1);
}

const map = loadSymbols(symbolsFile);
const code = fs.readFileSync(inFile, 'utf8');
process.stderr.write(`解析 ${inFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
const ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });

const { conflicts, renamed, missing } = applySymbols(ast, map);
if (conflicts.length) {
  console.error('存在命名冲突, 已中止: ' + conflicts.join(', '));
  process.exit(3);
}
if (missing && missing.length) process.stderr.write(`未找到绑定(跳过): ${missing.join(', ')}\n`);

const out = generate(ast, { comments: true, compact: false, concise: false, retainLines: false, jsescOption: { minimal: true } }, code);
fs.writeFileSync(outFile, out.code);
process.stderr.write(`已改名绑定: ${renamed} -> ${outFile} (${(out.code.length / 1048576).toFixed(2)} MB)\n`);
