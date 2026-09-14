#!/usr/bin/env node
// deobfuscate.js - 作用域安全的 JS 反混淆器(基于 Babel AST)
//
// 做两件事(都不改变语义, 只改绑定名与格式):
//   1) 把 terser 风格的单字母/短变量名重命名为可读名:
//        顶层(Program/函数体顶层) -> m_<原名>_<序号>
//        局部(函数内)           -> v_<原名>_<序号>
//      改名按「绑定(binding)」进行, 因此遮蔽/重名都安全。
//   2) 美化输出(缩进 + 保留注释), 便于阅读与打补丁。
//
// 注意: terser 的 property mangling(对象属性名, 如 .Fi/.Le)不可逆, 这里原样保留,
//       只改「变量绑定」。
//
// 用法:
//   node tools/deobfuscate.js <in.js> <out.js> [--map rename-map.json] [--compact]
//
// 依赖: @babel/parser @babel/traverse @babel/generator
//   (环境里没有时: cd /tmp/deobf && npm i @babel/parser @babel/traverse @babel/generator
//    然后 NODE_PATH=/tmp/deobf/node_modules node tools/deobfuscate.js ...)

'use strict';
const fs = require('fs');

function req(name) {
  try { return require(name); } catch (e) {
    console.error(`缺少依赖 ${name}，请先安装(见文件头注释)`);
    process.exit(2);
  }
}
const parser = req('@babel/parser');
const traverse = req('@babel/traverse').default;
const generate = req('@babel/generator').default;

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('用法: node tools/deobfuscate.js <in.js> <out.js> [--map m.json] [--compact]');
  process.exit(1);
}
const inFile = args[0];
const outFile = args[1];
const mapFile = args.includes('--map') ? args[args.indexOf('--map') + 1] : null;
const compact = args.includes('--compact');

// 需要改名的名字: 1-3 字符(terser 默认风格), 且不是已有前缀
const SHORT = /^[A-Za-z_$][A-Za-z0-9_$]{0,2}$/;

const code = fs.readFileSync(inFile, 'utf8');
process.stderr.write(`解析 ${inFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
const ast = parser.parse(code, {
  sourceType: 'script',
  allowReturnOutsideFunction: true,
  allowAwaitOutsideFunction: true,
  allowSuperOutsideMethod: true,
  errorRecovery: true,
  plugins: [],
});

// 1) 收集绑定 -> 新名
const newNameOf = new Map(); // binding -> newName
const mapping = {};          // 原名 -> 新名(可能多个同名绑定, 用序号区分)
let seq = 0;
traverse(ast, {
  Scopable(path) {
    const bindings = path.scope.bindings;
    for (const name of Object.keys(bindings)) {
      const binding = bindings[name];
      if (!binding || newNameOf.has(binding)) continue;
      if (name.startsWith('m_') || name.startsWith('v_')) continue;
      if (!SHORT.test(name)) continue;
      const top = !path.scope.parent; // 仅 Program 顶层用 m_, 其余用 v_
      const prefix = top ? 'm_' : 'v_';
      const nn = prefix + name + '_' + (seq++);
      newNameOf.set(binding, nn);
      (mapping[name] = mapping[name] || []).push(nn);
    }
  },
});
process.stderr.write(`待改名绑定: ${newNameOf.size}\n`);

// 2) 原地改名(只改绑定的声明与引用)
let renamed = 0;
traverse(ast, {
  Identifier(path) {
    const node = path.node;
    if (!node || !node.name) return;
    // 标签(label)不是变量绑定, 不能改名: `i: for(...){ break i }`
    const pp = path.parentPath;
    if (pp) {
      if (pp.isLabeledStatement() && pp.node.label === node) return;
      if ((pp.isBreakStatement() || pp.isContinueStatement()) && pp.node.label === node) return;
    }
    if (!path.isReferencedIdentifier() && !path.isBindingIdentifier()) return;
    const binding = path.scope.getBinding(node.name);
    if (!binding) return;
    const nn = newNameOf.get(binding);
    if (nn && nn !== node.name) { node.name = nn; renamed++; }
  },
});
process.stderr.write(`已改名引用: ${renamed}\n`);

// 3) 输出
const out = generate(ast, {
  comments: true,
  compact,
  concise: false,
  retainLines: false,
  jsescOption: { minimal: true },
}, code);
fs.writeFileSync(outFile, out.code);
process.stderr.write(`已写出 ${outFile} (${(out.code.length / 1048576).toFixed(2)} MB)\n`);

if (mapFile) {
  fs.writeFileSync(mapFile, JSON.stringify(mapping, null, 1));
  process.stderr.write(`映射表 -> ${mapFile}\n`);
}
