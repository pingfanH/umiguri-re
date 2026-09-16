#!/usr/bin/env node
// startup-defer.mjs - 让「不阻塞进主页」的重活改到后台加载。
//
// 背景: 游戏启动任务队列是串行 await 的, 音频预加载(约 21MB, 含 4 首 BGM)
// 与数据库构建会把「进主页」拖后。这里在生成 index.js 之后做两处改写:
//   1) 音频任务 `scope.v_Ae_27892.ue(cb)` -> 立刻推进队列 + setTimeout 后台加载
//      (并去掉 cb 里重复的队列推进, 否则会跳过一个任务)
//   2) 数据库 `await scope.v_Ns_28014.cA()` -> `scope.v_Ns_28014.cA().catch(()=>{})`
// UMG_NO_DEFER=1 可关闭。
import { parser, traverse, t, generate } from './lib/symbols.mjs';

const DEFER_CALLS = [{ obj: 'v_Ae_27892', method: 'ue' }]; // 音频(SE + BGM)
const DEFER_AWAITS = [{ obj: 'v_Ns_28014', method: 'cA' }]; // 数据库构建

const scopeMember = (name) => t.memberExpression(t.identifier('scope'), t.identifier(name));

function isScopeCall(node, obj, method) {
  return (
    t.isCallExpression(node) &&
    t.isMemberExpression(node.callee) &&
    !node.callee.computed &&
    t.isIdentifier(node.callee.property, { name: method }) &&
    t.isMemberExpression(node.callee.object) &&
    !node.callee.object.computed &&
    t.isIdentifier(node.callee.object.property, { name: obj })
  );
}
// 是否 `scope.v_Me_28078(P)` 调用
function isQueueAdvance(node, pName) {
  return (
    t.isCallExpression(node) &&
    t.isMemberExpression(node.callee) &&
    !node.callee.computed &&
    t.isIdentifier(node.callee.property, { name: 'v_Me_28078' }) &&
    node.arguments.length === 1 &&
    t.isIdentifier(node.arguments[0], { name: pName })
  );
}

export function deferStartup(code) {
  if (process.env.UMG_NO_DEFER) return code;
  const ast = parser.parse(code, { sourceType: 'module', errorRecovery: true });
  const callJobs = [];
  const awaitJobs = [];
  let changed = 0;

  traverse(ast, {
    CallExpression(p) {
      if (DEFER_CALLS.some((r) => isScopeCall(p.node, r.obj, r.method))) callJobs.push(p);
    },
    AwaitExpression(p) {
      if (DEFER_AWAITS.some((r) => isScopeCall(p.node.argument, r.obj, r.method))) awaitJobs.push(p);
    },
  });

  for (const p of callJobs) {
    // 所属任务函数(单参数 FunctionExpression)
    let fn = p.getFunctionParent();
    while (fn && !(t.isFunctionExpression(fn.node) && fn.node.params.length === 1)) fn = fn.getFunctionParent();
    if (!fn) continue;
    const pName = fn.node.params[0].name;

    // 去掉回调里重复的队列推进(块语句里直接删; 复合表达式里跳过)
    const cb = p.node.arguments[0];
    if (cb && t.isFunction(cb) && t.isBlockStatement(cb.body)) {
      cb.body.body = cb.body.body.filter((st) => !(t.isExpressionStatement(st) && isQueueAdvance(st.expression, pName)));
    }

    const call = t.cloneNode(p.node, true);
    p.replaceWith(
      t.sequenceExpression([
        t.callExpression(scopeMember('v_Me_28078'), [t.identifier(pName)]),
        t.callExpression(t.identifier('setTimeout'), [t.arrowFunctionExpression([], call), t.numericLiteral(0)]),
      ])
    );
    changed++;
  }

  for (const p of awaitJobs) {
    const arg = p.node.argument;
    p.replaceWith(t.callExpression(t.memberExpression(arg, t.identifier('catch')), [t.arrowFunctionExpression([], t.blockStatement([]))]));
    changed++;
  }

  if (!changed) return code;
  return generate(ast, { comments: true, concise: false, jsescOption: { minimal: true } }, code).code;
}
