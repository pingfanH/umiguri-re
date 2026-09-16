#!/usr/bin/env node
// modularize-game.mjs - 把游戏主逻辑 IIFE 转成真正的 ES 模块工程(不依赖 manifest 拼接)。
//
// 背景: 游戏本体是单个 IIFE 闭包, 55 个模块 + 416 个顶层状态声明 + 189 个顶层辅助函数
//       共享 655 个闭包绑定, 且交错执行。要变成 ES 模块, 必须:
//         1) 把所有闭包绑定提成显式 scope 对象(依赖注入);
//         2) 每个模块 IIFE -> 工厂 export function createX(scope);
//         3) 顶层 function 声明 -> runtime/helpers.js(保持"提前可用"的 hoisting 语义);
//         4) 其余顶层语句(状态/表达式)按原顺序留在 index.js(bootstrap)。
//
// 产物:
//   src/game-esm/runtime/scope.js          export const scope = {}
//   src/game-esm/runtime/helpers.js        顶层辅助函数 + scope.fn = fn
//   src/game-esm/modules/<name>/index.js   export function create<Name>(scope)
//   src/game-esm/index.js                  入口: 按原顺序 bootstrap + 创建模块
//
// 用法: node tools/modularize-game.mjs [源bundle] [输出目录]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, traverse, generate, t, loadSymbols, applySymbols, loadProps, applyProps } from './lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const fixedSrc = path.join(root, 'dist/game_main.deobf.js');
const srcFile = process.argv[2] || (fs.existsSync(fixedSrc) ? fixedSrc : '/Users/pingfanh/project/umiguri-re/game_main.deobf.js');
const outDir = path.resolve(process.argv[3] || path.join(root, 'src/game-esm'));
const GEN_OPTS = { comments: true, compact: false, concise: false, retainLines: false, jsescOption: { minimal: true } };

// ---------- 读取 + 语义重命名 ----------
let code = fs.readFileSync(srcFile, 'utf8');
process.stderr.write(`解析 ${srcFile} (${(code.length / 1048576).toFixed(2)} MB)...\n`);
let ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
{
  const { conflicts } = applySymbols(ast, loadSymbols(path.join(root, 'tools/symbols.json')));
  if (conflicts.length) { console.error('命名冲突: ' + conflicts.join(', ')); process.exit(3); }
  applyProps(ast, loadProps(path.join(root, 'tools/prop-symbols.json')));
  code = generate(ast, GEN_OPTS, code).code;
  ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
}

// ---------- 定位 IIFE ----------
const gameStmt = ast.program.body.find((s) => code.slice(s.start, s.end).includes('umgr_elc'));
if (!gameStmt) throw new Error('未找到游戏主逻辑 IIFE');
const call = gameStmt.expression.argument; // CallExpression
const fn = call.callee; // FunctionExpression
const body = fn.body.body;
let fnPath = null;
traverse(ast, {
  FunctionExpression(p) {
    if (p.node === fn) fnPath = p;
  },
});
if (!fnPath) throw new Error('未找到游戏 IIFE 的作用域');
const iifeScope = fnPath.scope;

const bindingOf = new Map(); // name -> binding
for (const [name, b] of Object.entries(iifeScope.bindings)) bindingOf.set(name, b);
const iifeBindings = new Set(bindingOf.values());

const isModuleInit = (init) =>
  init &&
  ((init.type === 'CallExpression' && (init.callee.type === 'FunctionExpression' || init.callee.type === 'ArrowFunctionExpression')) ||
    (init.type === 'FunctionExpression' && init.loc.end.line - init.loc.start.line > 30));

// ---------- 收集模块声明 ----------
const modules = []; // { name, factory, init }
const moduleDeclaratorNodes = new Set();
traverse(ast, {
  VariableDeclarator(p) {
    const n = p.node;
    if (n.start < gameStmt.start || n.end > gameStmt.end) return;
    if (!n.id || n.id.type !== 'Identifier' || !isModuleInit(n.init)) return;
    modules.push({ name: n.id.name, factory: 'create' + n.id.name[0].toUpperCase() + n.id.name.slice(1), init: n.init });
    moduleDeclaratorNodes.add(n);
  },
});
const moduleNameOf = new Set(modules.map((m) => m.name));

// ---------- 改写: 所有指向 IIFE 绑定的引用 -> scope.<name> ----------
// 说明: 在原 AST(作用域完整)上就地替换; 声明 id 与模块 id 留待后续专门处理。
const scopeMember = (name) => t.memberExpression(t.identifier('scope'), t.identifier(name));
traverse(ast, {
  Identifier(p) {
    const name = p.node.name;
    const b = p.scope.getBinding(name);
    if (!b || !iifeBindings.has(b)) return;
    const par = p.parentPath;
    // 属性键 / 成员属性 / 标签 等非引用位置
    if (par.isMemberExpression() && par.node.property === p.node && !par.node.computed) return;
    if ((par.isObjectProperty() || par.isObjectMethod()) && par.node.key === p.node && !par.node.computed) return;
    if ((par.isClassMethod() || par.isClassProperty()) && par.node.key === p.node && !par.node.computed) return;
    if (par.isLabeledStatement() && par.node.label === p.node) return;
    if ((par.isBreakStatement() || par.isContinueStatement()) && par.node.label === p.node) return;
    // 绑定自身的声明位置: 交给专门处理(声明 -> 赋值 / 模块 -> 工厂)
    if (b.identifier === p.node) {
      if (par.isVariableDeclarator() && par.node.id === p.node) return;
      if (par.isFunctionDeclaration() && par.node.id === p.node) return;
      if (par.isClassDeclaration() && par.node.id === p.node) return;
      if (par.isFunctionExpression() && par.node.id === p.node) return;
    }
    p.replaceWith(scopeMember(name));
  },
});

// ---------- 生成各产物 ----------
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(path.join(outDir, 'runtime'), { recursive: true });
fs.mkdirSync(path.join(outDir, 'modules'), { recursive: true });

// 1) 模块工厂
const moduleImports = [];
for (const m of modules) {
  const init = m.init;
  let factoryBody;
  if (init.type === 'CallExpression') {
    const callee = init.callee;
    factoryBody = callee.body; // BlockStatement, 含原 return
  } else {
    // FunctionExpression 模块: 工厂返回该函数
    factoryBody = t.blockStatement([t.returnStatement(init)]);
  }
  const fnSrc = `export function ${m.factory}(scope) ${generate(factoryBody, GEN_OPTS).code}`;
  const dir = path.join(outDir, 'modules', m.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.js'),
    `// 模块: ${m.name}\n// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。\n` +
      `// 依赖通过 scope 注入(见 runtime/scope.js)。\n\n${fnSrc}\n`
  );
  moduleImports.push(`import { ${m.factory} } from './modules/${m.name}/index.js';`);
}

// 2) 顶层 function 声明 -> helpers.js
const helperFuncs = body.filter((s) => s.type === 'FunctionDeclaration' && s.id);
const helpersSrc = helperFuncs.map((s) => generate(s, GEN_OPTS).code).join('\n\n');
const helperAssigns = helperFuncs.map((s) => `scope.${s.id.name} = ${s.id.name};`).join('\n');
fs.writeFileSync(
  path.join(outDir, 'runtime/helpers.js'),
  `// 顶层辅助函数(原 IIFE 的 189 个 function 声明)。\n` +
    `// hoisting: 在本模块内声明, 并在模块末尾挂到 scope, 因此 index.js 的 bootstrap\n` +
    `// 以及各模块工厂都能通过 scope.fn 提前调用。\n` +
    `import { scope } from './scope.js';\n\n${helpersSrc}\n\n${helperAssigns}\n`
);

// 3) scope.js
fs.writeFileSync(
  path.join(outDir, 'runtime/scope.js'),
  `// 游戏运行时共享作用域: 原游戏 IIFE 的全部顶层绑定。\n` +
    `// 模块之间不直接 import(会形成大量循环依赖), 而是通过本对象互相引用:\n` +
    `//   scope.inputModule.oe() / scope.renderer / scope.keyCodes ...\n` +
    `export const scope = {};\n`
);

// 4) index.js: bootstrap(状态/表达式/模块创建, 保持原顺序)
const paramName = fn.params[0] && fn.params[0].name;
const lines = [];
lines.push(`import { scope } from './runtime/scope.js';`);
lines.push(`import './runtime/helpers.js'; // 载入并挂载顶层辅助函数`);
lines.push(...moduleImports);
lines.push('');
lines.push(`// ---- bootstrap(原游戏 IIFE 顶层语句, 保持原始执行顺序) ----`);
if (paramName) lines.push(`scope.${paramName} = window; // IIFE 参数 = window`);

const stripDecl = (stmt, out) => {
  if (stmt.type === 'FunctionDeclaration') return; // 已在 helpers.js
  if (stmt.type === 'VariableDeclaration') {
    for (const d of stmt.declarations) {
      if (moduleDeclaratorNodes.has(d)) {
        const m = modules.find((x) => x.init === d.init);
        out.push(`scope.${m.name} = ${m.factory}(scope);`);
        continue;
      }
      if (d.id.type === 'Identifier') {
        const rhs = d.init ? generate(d.init, GEN_OPTS).code : 'undefined';
        out.push(`scope.${d.id.name} = ${rhs};`);
      } else {
        // 解构声明: 保留局部声明再挂到 scope
        const patternCode = generate(d.id, GEN_OPTS).code;
        const names = [];
        (function collect(n) {
          if (!n) return;
          switch (n.type) {
            case 'Identifier': names.push(n.name); break;
            case 'ObjectPattern': for (const pr of n.properties) collect(pr.type === 'RestElement' ? pr.argument : pr.value); break;
            case 'ArrayPattern': for (const el of n.elements) collect(el); break;
            case 'AssignmentPattern': collect(n.left); break;
            case 'RestElement': collect(n.argument); break;
          }
        })(d.id);
        out.push(`{ const ${patternCode} = ${d.init ? generate(d.init, GEN_OPTS).code : 'undefined'}; ${names.map((n) => `scope.${n} = ${n};`).join(' ')} }`);
      }
    }
    return;
  }
  out.push(generate(stmt, GEN_OPTS).code);
};

for (const stmt of body) stripDecl(stmt, lines);
lines.push('');
fs.writeFileSync(path.join(outDir, 'index.js'), lines.join('\n') + '\n');

process.stderr.write(`模块工厂: ${modules.length} 个\n`);
process.stderr.write(`顶层辅助函数: ${helperFuncs.length} 个\n`);
process.stderr.write(`已写出 -> ${outDir}\n`);
