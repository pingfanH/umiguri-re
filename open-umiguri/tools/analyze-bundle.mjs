#!/usr/bin/env node
// analyze-bundle.mjs - 分析游戏主逻辑 IIFE 内各模块对「闭包外层变量」的引用数量。
//
// 用途: 判断哪些模块可以安全地抽成独立 ES 模块。外层引用越多, 直接抽取时
// 需要把闭包变量提升为显式 scope 对象的改造就越大。
//
// 用法: node tools/analyze-bundle.mjs [源文件] [输出.md]
//   默认源: /Users/pingfanh/project/umiguri-re/game_main.deobf.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, traverse, generate, loadSymbols, applySymbols } from './lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixedSrc = path.join(root, 'dist/game_main.deobf.js');
const srcFile =
  process.argv[2] ||
  process.env.GAME_SRC ||
  (fs.existsSync(fixedSrc) ? fixedSrc : '/Users/pingfanh/project/umiguri-re/game_main.deobf.js');
const outFile = process.argv[3] || path.join(root, 'src/game/logic/COUPLING.md');

let code = fs.readFileSync(srcFile, 'utf8');
let ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });

// 与 split-game 一致: 先应用语义重命名, 保证报告里的名字是可读名。
if (!process.argv.includes('--no-rename')) {
  const map = loadSymbols(path.join(root, 'tools/symbols.json'));
  const { conflicts } = applySymbols(ast, map);
  if (conflicts.length) {
    console.error('命名冲突: ' + conflicts.join(', '));
    process.exit(3);
  }
  code = generate(ast, { retainLines: false, jsescOption: { minimal: true } }, code).code;
  ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
}

const gameStmt = ast.program.body.find((s) => code.slice(s.start, s.end).includes('umgr_elc'));

const inside = (node, container) => node && node.start >= container.start && node.end <= container.end;
const isIifeInit = (init) =>
  init &&
  ((init.type === 'CallExpression' &&
    (init.callee.type === 'FunctionExpression' || init.callee.type === 'ArrowFunctionExpression')) ||
    (init.type === 'FunctionExpression' && init.loc.end.line - init.loc.start.line > 30));

const rows = [];

traverse(ast, {
  VariableDeclarator(p) {
    const n = p.node;
    if (n.start < gameStmt.start || n.end > gameStmt.end) return;
    if (!n.init || !n.id || !isIifeInit(n.init)) return;
    const init = n.init;
    const outer = new Set();
    p.get('init').traverse({
      Identifier(ip) {
        if (!ip.isReferencedIdentifier()) return;
        const name = ip.node.name;
        const b = ip.scope.getBinding(name);
        if (!b) return;
        if (!inside(b.path.node, init)) outer.add(name);
      },
    });
    rows.push({
      name: n.id.name,
      line: n.loc.start.line,
      lines: n.loc.end.line - n.loc.start.line + 1,
      outer: outer.size,
      sample: [...outer].slice(0, 12),
    });
  },
});

rows.sort((a, b) => a.line - b.line);
const md = [
  '# 游戏逻辑模块耦合分析(自动生成)',
  '',
  `> 由 \`tools/analyze-bundle.mjs\` 生成。源: \`${path.basename(srcFile)}\`。`,
  '> `外层引用` = 该模块引用的、声明在其自身之外(游戏 IIFE 闭包内)的绑定数量。',
  '> 直接抽取为独立 ES 模块需把这些绑定提升为显式 scope 对象;数值越大改造越大。',
  '',
  '| 模块 | 行号 | 行数 | 外层引用 | 示例 |',
  '|---|---:|---:|---:|---|',
  ...rows.map((r) => `| \`${r.name}\` | ${r.line} | ${r.lines} | ${r.outer} | ${r.sample.join(', ')} |`),
  '',
  `合计 ${rows.length} 个模块, 外层引用 ${rows.reduce((a, b) => a + b.outer, 0)} 处。`,
  '',
].join('\n');
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, md);
console.error(`模块 ${rows.length} 个 -> ${outFile}`);
