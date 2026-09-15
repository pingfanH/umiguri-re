#!/usr/bin/env node
// deobfuscate-fixed.mjs - 修正版反混淆器。
//
// 与原 tools/deobfuscate.js 的差别(修复其核心 bug):
//   原版改名时对每个 Identifier 现场调用 path.scope.getBinding(node.name),
//   而它在遍历中已就地改过声明名, 导致部分引用解析到错误/失效的绑定,
//   产出「有引用、无声明」的名字(如 v_t_28347, 原 bundle 里是函数 t)。
//
// 本版改为两遍:
//   1) 一遍遍历: Scopable 处分配 binding -> 新名; 同时把每个 Identifier 节点
//      映射到其 binding 的新名(记录 node -> newName, 不改名, 无过期查询)。
//   2) 一遍遍历: 仅按映射设置 node.name。
//
// 命名规则与原版一致: 顶层 m_<原名>_<seq>, 其余 v_<原名>_<seq>。
//
// 用法: node tools/deobfuscate-fixed.mjs <in.js> <out.js>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, traverse, generate } from './lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const inFile = args[0] || path.join(root, '..', '..', '..', 'game_main.original.js');
const outFile = args[1];
if (!inFile || !outFile) {
  console.error('用法: node tools/deobfuscate-fixed.mjs <in.js> <out.js>');
  process.exit(1);
}

const SHORT = /^[A-Za-z_$][A-Za-z0-9_$]{0,2}$/;
const code = fs.readFileSync(inFile, 'utf8');
process.stderr.write(`解析 ${inFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
const ast = parser.parse(code, {
  sourceType: 'script',
  allowReturnOutsideFunction: true,
  allowAwaitOutsideFunction: true,
  allowSuperOutsideMethod: true,
  errorRecovery: true,
});

const newNameOf = new Map(); // binding -> newName
const nodeNames = new Map(); // Identifier node -> newName
let seq = 0;

traverse(ast, {
  Scopable(p) {
    const bindings = p.scope.bindings;
    for (const name of Object.keys(bindings)) {
      const b = bindings[name];
      if (!b || newNameOf.has(b)) continue;
      if (name.startsWith('m_') || name.startsWith('v_')) continue;
      if (!SHORT.test(name)) continue;
      const prefix = !p.scope.parent ? 'm_' : 'v_';
      newNameOf.set(b, prefix + name + '_' + seq++);
    }
  },
  Identifier(p) {
    const node = p.node;
    if (!node || !node.name) return;
    const pp = p.parentPath;
    if (pp) {
      if (pp.isLabeledStatement() && pp.node.label === node) return;
      if ((pp.isBreakStatement() || pp.isContinueStatement()) && pp.node.label === node) return;
    }
    if (!p.isReferencedIdentifier() && !p.isBindingIdentifier()) return;
    // 关键修正: 函数/类声明的名字标识符, Babel 会把它解析到「函数自身作用域」里
    // 的同名绑定(如形参), 而不是声明在外层作用域的绑定。必须用外层作用域查询,
    // 否则会出现 function v_t_5(...) 但引用是 new v_t_2(...) 的断裂。
    const par = p.parentPath;
    const b =
      par && (par.isFunctionDeclaration() || par.isClassDeclaration()) && par.node.id === node
        ? par.parentPath.scope.getBinding(node.name)
        : p.scope.getBinding(node.name);
    if (!b) return;
    const nn = newNameOf.get(b);
    if (nn) nodeNames.set(node, nn);
  },
});
process.stderr.write(`绑定: ${newNameOf.size} | 待改名节点: ${nodeNames.size}\n`);

let applied = 0;
traverse(ast, {
  Identifier(p) {
    const nn = nodeNames.get(p.node);
    if (nn) {
      p.node.name = nn;
      applied++;
    }
  },
});
process.stderr.write(`已改名节点: ${applied}\n`);

const out = generate(ast, { comments: true, compact: false, concise: false, retainLines: false, jsescOption: { minimal: true } }, code);
fs.writeFileSync(outFile, out.code);
process.stderr.write(`已写出 ${outFile} (${(out.code.length / 1048576).toFixed(2)} MB)\n`);
