#!/usr/bin/env node
// split-game.mjs - 把 game_main.deobf.js 拆成 open-umiguri 的模块化源码。
//
// 策略(行为零改动):
//   1) 顶层非游戏语句 -> src/game/vendor/<NN>-<slug>.js(THREE/Effekseer/字形数据等)
//   2) 游戏主逻辑 IIFE -> src/game/logic/
//        entry.preamble.js   `!function (window) {`
//        <NN>-<name>.js      IIFE 体内的每个顶层语句(模块 IIFE 独立成文件)
//        entry.footer.js     IIFE 尾部
//        entry.postamble.js  `}(window);`
//   3) 生成 src/game/manifest.json 记录拼接顺序。
//
// 关键保证: preamble + 所有 body 片段 + footer + postamble
//           === 原 bundle 中该 IIFE 的原始文本(逐字节), 由 --verify 断言。
//
// 用法:
//   node tools/split-game.mjs [源文件] [输出目录]
//   默认: /Users/pingfanh/project/umiguri-re/game_main.deobf.js  ->  ./src/game
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcFile = process.argv[2] || process.env.GAME_SRC || '/Users/pingfanh/project/umiguri-re/game_main.deobf.js';
const outDir = path.resolve(process.argv[3] || path.join(root, 'src/game'));

function loadParser() {
  const candidates = [root, '/tmp/deobf'];
  for (const base of candidates) {
    try {
      const req = createRequire(path.join(base, 'noop.js'));
      return req('@babel/parser');
    } catch (e) {}
  }
  console.error('缺少 @babel/parser。请 npm install 或设置 NODE_PATH=/tmp/deobf/node_modules');
  process.exit(2);
}
const parser = loadParser();

const code = fs.readFileSync(srcFile, 'utf8');
process.stderr.write(`解析 ${srcFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
const ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
const top = ast.program.body;

const gameStmt = top.find((s) => code.slice(s.start, s.end).includes('umgr_elc'));
if (!gameStmt) throw new Error('未找到游戏主逻辑 IIFE(umgr_elc)');
const callee = gameStmt.expression.argument; // UnaryExpression(!)
const fn = callee.callee; // FunctionExpression
const body = fn.body.body;
const bodyStart = fn.body.start; // '{'
const bodyEnd = fn.body.end; // after '}'

// ---------- 工具 ----------
const sanitize = (s) => s.replace(/[^A-Za-z0-9_$.]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
const isFnInit = (n) =>
  n &&
  (n.type === 'FunctionExpression' ||
    n.type === 'ArrowFunctionExpression' ||
    (n.type === 'CallExpression' &&
      (n.callee.type === 'FunctionExpression' || n.callee.type === 'ArrowFunctionExpression')));
// 模块 IIFE 的声明名列表
function moduleDeclarators(stmt) {
  const out = [];
  if (stmt.type === 'VariableDeclaration') {
    for (const d of stmt.declarations) {
      if (d.id && d.id.type === 'Identifier' && isFnInit(d.init)) out.push(d.id.name);
    }
  }
  return out;
}
function slugOf(stmt) {
  const mods = moduleDeclarators(stmt);
  if (mods.length) return sanitize(mods[0]) + (mods.length > 1 ? `_x${mods.length}` : '');
  if (stmt.type === 'VariableDeclaration') {
    const names = stmt.declarations.filter((d) => d.id && d.id.name).map((d) => sanitize(d.id.name));
    if (names.length) return names[0] + (names.length > 1 ? `_x${names.length}` : '');
  }
  if (stmt.type === 'FunctionDeclaration' && stmt.id) return sanitize(stmt.id.name);
  return stmt.type;
}
const pad = (n) => String(n).padStart(4, '0');
const banner = (title, src) => `// ${title}\n// 自动生成: tools/split-game.mjs\n// 来源: ${path.basename(src)}\n// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。\n`;

// ---------- 清空输出 ----------
for (const sub of ['vendor', 'logic']) {
  fs.rmSync(path.join(outDir, sub), { recursive: true, force: true });
  fs.mkdirSync(path.join(outDir, sub), { recursive: true });
}

const pieces = []; // { file, kind, bytes }

// ---------- 1) 顶层 vendor 语句 ----------
// 每个片段包含「上一片段结束 -> 本语句结束」的原始文本(保留语句间 trivia)
let cursor = 0;
let vi = 0;
for (const stmt of top) {
  if (stmt === gameStmt) break;
  const text = code.slice(cursor, stmt.end);
  cursor = stmt.end;
  const slug = slugOf(stmt);
  const name = `${pad(vi++)}-${slug}.js`;
  const rel = `vendor/${name}`;
  fs.writeFileSync(path.join(outDir, rel), banner(`vendor: ${slug}`, srcFile) + text);
  pieces.push({ file: rel, kind: 'vendor', bytes: text.length });
}

// ---------- 2) 游戏逻辑 IIFE ----------
// 把上一条顶层语句结束到 IIFE 开头之间的 trivia 归入 preamble, 保证逐字节可重建。
const gamePreambleStart = cursor;
const preamble = code.slice(gamePreambleStart, bodyStart + 1);
fs.writeFileSync(path.join(outDir, 'logic/entry.preamble.js'), banner('game: IIFE 开头', srcFile) + preamble);
pieces.push({ file: 'logic/entry.preamble.js', kind: 'logic', role: 'preamble', bytes: preamble.length });

let bc = bodyStart + 1;
const bodyTexts = [];
const mapRows = [];
body.forEach((stmt, idx) => {
  const text = code.slice(bc, stmt.end);
  bc = stmt.end;
  bodyTexts.push(text);
  const name = `logic/${pad(idx)}-${slugOf(stmt)}.js`;
  fs.writeFileSync(path.join(outDir, name), banner(`game: 语句 ${idx} (${stmt.type})`, srcFile) + text);
  pieces.push({ file: name, kind: 'logic', role: 'body', index: idx, type: stmt.type, bytes: text.length });

  const mods = [];
  if (stmt.type === 'VariableDeclaration') {
    for (const d of stmt.declarations) {
      if (d.id && d.id.type === 'Identifier' && isFnInit(d.init)) {
        mods.push(`${d.id.name} (${d.loc.start.line}–${d.loc.end.line})`);
      }
    }
  }
  mapRows.push(
    `| \`${name}\` | ${stmt.loc.start.line}–${stmt.loc.end.line} | ${stmt.type} | ${mods.join(', ') || ''} |`
  );
});

fs.writeFileSync(
  path.join(outDir, 'logic/MODULE_MAP.md'),
  `# 游戏逻辑片段索引(自动生成)\n\n` +
    `> 由 \`tools/split-game.mjs\` 生成。片段按 manifest.json 顺序拼接, 共享同一 IIFE 闭包作用域。\n` +
    `> 行号对应反混淆源 \`${path.basename(srcFile)}\`。\n\n` +
    `| 片段文件 | 行号 | 语句类型 | 内含模块 IIFE |\n|---|---:|---|---|\n` +
    mapRows.join('\n') +
    '\n'
);

const footer = code.slice(bc, bodyEnd);
fs.writeFileSync(path.join(outDir, 'logic/entry.footer.js'), banner('game: IIFE 结尾', srcFile) + footer);
pieces.push({ file: 'logic/entry.footer.js', kind: 'logic', role: 'footer', bytes: footer.length });

const postamble = code.slice(bodyEnd, gameStmt.end);
fs.writeFileSync(path.join(outDir, 'logic/entry.postamble.js'), banner('game: IIFE 调用', srcFile) + postamble);
pieces.push({ file: 'logic/entry.postamble.js', kind: 'logic', role: 'postamble', bytes: postamble.length });

// ---------- 3) 校验(逐字节) ----------
// 从内存重建「整个 bundle 到游戏 IIFE 结束」, 与原文件对应区间逐字节比较。
const gameReassembled = preamble + bodyTexts.join('') + footer + postamble;
let vendorAcc = '';
let vc = 0;
for (const stmt of top) {
  if (stmt === gameStmt) break;
  vendorAcc += code.slice(vc, stmt.end);
  vc = stmt.end;
}
const overallOk = vendorAcc + gameReassembled === code.slice(0, gameStmt.end);
const vendorOk = vc === gamePreambleStart;

// ---------- 4) manifest ----------
const manifest = {
  generatedBy: 'tools/split-game.mjs',
  source: path.relative(root, srcFile),
  note: '按顺序拼接 pieces[].file 即得到完整 bundle;logic 片段共享同一 IIFE 闭包作用域。',
  pieces,
};
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

fs.writeFileSync(
  path.join(outDir, 'index.js'),
  `// open-umiguri 游戏本体入口(说明性)\n` +
    `// 真正的装配由 build/assemble-game.mjs 读取 manifest.json 完成。\n` +
    `// vendor/: 第三方库与字形数据;逻辑与顺序见 manifest.json。\n` +
    `export const GAME_SOURCE = new URL('./manifest.json', import.meta.url);\n`
);

process.stderr.write(`vendor 片段: ${pieces.filter((p) => p.kind === 'vendor').length}\n`);
process.stderr.write(`logic 片段: ${pieces.filter((p) => p.kind === 'logic').length}\n`);
process.stderr.write(`校验 vendor: ${vendorOk ? 'OK' : 'FAIL'} | bundle 逐字节重建: ${overallOk ? 'OK' : 'FAIL'}\n`);
if (!overallOk || !vendorOk) process.exit(3);
process.stderr.write(`已写出 -> ${outDir}\n`);
