#!/usr/bin/env node
// deobf_index.js - 为反混淆后的 bundle 生成「模块行号索引」
//
// 用法: NODE_PATH=/tmp/deobf/node_modules node tools/deobf_index.js <deobf.js> [out.md]
//
// 输出:
//   - 顶层语句(THREE/Effekseer/游戏逻辑 IIFE …)的行号与大小
//   - 游戏逻辑 IIFE 内部各模块(IIFE 形式: const X = function(){...}())
//     的行号、大小、以及若干「特征字符串」用于判断模块用途
//   - 具名函数清单

'use strict';
const fs = require('fs');

function req(n) {
  try { return require(n); } catch (e) { console.error('缺少依赖 ' + n); process.exit(2); }
}
const parser = req('@babel/parser');
const traverse = req('@babel/traverse').default;

const inFile = process.argv[2];
const outFile = process.argv[3] || 'js.md';
const code = fs.readFileSync(inFile, 'utf8');
process.stderr.write(`解析 ${inFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
const ast = parser.parse(code, {
  sourceType: 'script',
  allowReturnOutsideFunction: true,
  allowAwaitOutsideFunction: true,
  errorRecovery: true,
});

function loc(node) {
  return node && node.loc ? [node.loc.start.line, node.loc.end.line] : [0, 0];
}
function lines(n) { const [a, b] = loc(n); return b - a + 1; }

// 提取某节点源码文本里的字符串字面量(不遍历 AST, 避免非 Program 节点报错)
function hints(node, limit) {
  const s = code.slice(node.start, node.end);
  const set = new Set();
  const re = /"((?:[^"\\]|\\.){3,40})"|'((?:[^'\\]|\\.){3,40})'/g;
  let m;
  while ((m = re.exec(s))) {
    const v = m[1] || m[2];
    if (!v) continue;
    if (/^[\d\s.,:\/_-]+$/.test(v)) continue;
    if (/^[A-Za-z]{1,2}$/.test(v)) continue;
    if (/^[A-Fa-f0-9]{16,}$/.test(v)) continue;
    set.add(v);
    if (set.size > 400) break;
  }
  return Array.from(set).slice(0, limit || 8);
}

// 找每个模块最能说明用途的关键词
const KEYWORDS = [
  ['audio', /AudioContext|createGain|decodeAudioData|playBgm|se\b|Audio/i],
  ['input', /di8Kbd|kbdHeld|pointerdown|ArrowUp|Escape/i],
  ['package(.una)', /una|\.arc|_VERSION|packageName/i],
  ['rsb/ui-engine', /page|ot\(|textMenu|layerDialog|keyGuide|RSB|rsb/i],
  ['render(three)', /WebGL|THREE|shader|gl_Vertex|drawBuffers/i],
  ['texture(dds)', /dds|DXT|compressedTex|Texture/i],
  ['save(krtbl)', /krtbl|records|player|settingTable/i],
  ['test-menu', /sysTestMenu|svcMenu|testMenu/i],
  ['lang/string', /ja-JP|en-US|zh-CN|stringTable/i],
  ['font(rgf)', /rgf|font|glyph/i],
  ['network', /WebSocket|http|login|umgr-serv/i],
];

function classify(node, name) {
  const hs = hints(node, 25).join(' ');
  const hits = [];
  for (const [label, re] of KEYWORDS) if (re.test(hs) || re.test(name)) hits.push(label);
  return hits;
}

const out = [];
out.push(`# \`game_main.deobf.js\` 模块行号索引`);
out.push('');
out.push(`> 由 \`tools/deobf_index.js\` 生成。行号对应该文件；改名规则 \`m_<原名>_<序号>\`(顶层) / \`v_<原名>_<序号>\`(局部)。`);
out.push('');

// ---------- 顶层语句 ----------
out.push('## 顶层语句');
out.push('');
out.push('| 行号 | 行数 | 说明 |');
out.push('|---|---:|---|');
const top = ast.program.body;
const gameIdx = top.findIndex((s) => code.slice(s.start, s.end).includes('umgr_elc'));
for (let i = 0; i < top.length; i++) {
  const s = top[i];
  const [a, b] = loc(s);
  let desc;
  if (i === 0) desc = '前导 `;`';
  else if (i === 1) desc = 'THREE.js r137 (UMD)';
  else if (i === gameIdx) desc = '**游戏主逻辑 IIFE**';
  else if (i === top.length - 1) desc = '收尾(`window.umgr_elc` 等赋值)';
  else {
    const hs = hints(s, 3);
    desc = (s.type || '') + (hs.length ? ' — ' + hs.join(' / ') : '');
  }
  out.push(`| ${a}–${b} | ${b - a + 1} | ${desc} |`);
}
out.push('');

// ---------- 游戏逻辑内部模块 ----------
const gameStmt = top[gameIdx];
out.push('## 游戏逻辑 IIFE 内部模块');
out.push('');
out.push('| 起始行 | 行数 | 变量名 | 用途线索 |');
out.push('|---:|---:|---|---|');
const mods = [];
if (gameStmt) {
  // 单次遍历 Program, 收集落在游戏逻辑 IIFE 范围内的模块声明
  traverse(ast, {
    VariableDeclarator(p) {
      const n = p.node;
      if (!n.init || n.start < gameStmt.start || n.end > gameStmt.end) return;
      const init = n.init;
      const isIIFE =
        (init.type === 'CallExpression' &&
          (init.callee.type === 'FunctionExpression' || init.callee.type === 'ArrowFunctionExpression')) ||
        (init.type === 'FunctionExpression' && lines(init) > 30);
      if (!isIIFE) return;
      const name = n.id && n.id.name;
      if (!name) return;
      const [a, b] = loc(n);
      mods.push({ name, a, len: b - a + 1, node: init, kind: init.type === 'CallExpression' ? 'IIFE' : 'fn' });
    },
  });
  mods.sort((x, y) => x.a - y.a);
  for (const m of mods) {
    const cls = classify(m.node, m.name);
    out.push(`| ${m.a} | ${m.len} | \`${m.name}\` (${m.kind}) | ${cls.join(', ') || ''} |`);
  }
}
out.push('');

// ---------- 顶层具名函数 ----------
out.push('## 顶层具名函数(游戏逻辑外)');
out.push('');
out.push('| 行号 | 行数 | 名称 |');
out.push('|---:|---:|---|');
traverse(ast, {
  FunctionDeclaration(p) {
    const [a, b] = loc(p.node);
    if (b - a + 1 < 25) return;
    out.push(`| ${a} | ${b - a + 1} | \`${p.node.id.name}\` |`);
  },
});
out.push('');

fs.writeFileSync(outFile, out.join('\n'));
process.stderr.write(`模块数: ${mods.length}\n已写出 ${outFile}\n`);
