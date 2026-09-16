#!/usr/bin/env node
// game-patches.mjs - 对游戏逻辑做可复现的小补丁(在 modularize 生成前作用于 AST)。
//
// 目前:
//   测试菜单 OutputTest 页的「Back」行只认 左(8)/右(16)/BTN_SERVICE, 不认
//   「確定」(BTN_ENTER)。补一条守卫: 当 au===7(Back) 且按下 BTN_ENTER 时也返回。
import { traverse, t } from './lib/symbols.mjs';

const isThisProp = (node, prop) =>
  node && t.isMemberExpression(node) && !node.computed && t.isThisExpression(node.object) && t.isIdentifier(node.property, { name: prop });

export function applyGamePatches(ast) {
  const applied = [];

  traverse(ast, {
    IfStatement(path) {
      const test = path.node.test;
      if (!t.isBinaryExpression(test) || test.operator !== '===') return;
      // 匹配 this.au === 7  (测试菜单 OutputTest 的 Back 行)
      if (!isThisProp(test.left, 'au') || !t.isNumericLiteral(test.right, { value: 7 })) return;
      const fn = path.getFunctionParent();
      if (!fn || !fn.node.params.length) return;
      const body = fn.node.body;
      if (!t.isBlockStatement(body)) return;
      // 幂等: 函数体开头若已有同类守卫则跳过
      const first = body.body[0];
      if (first && t.isIfStatement(first) && JSON.stringify(first).includes('BTN_ENTER')) return;
      const maskName = fn.node.params[0].name;
      // 注意: 必须放在函数最开头 —— 后面的 dirSign 链在非 左/右/Service 时会提前 return
      const guard = t.ifStatement(
        t.logicalExpression('&&', t.cloneNode(test, true), t.binaryExpression('&', t.identifier(maskName), t.identifier('BTN_ENTER'))),
        t.blockStatement([
          t.expressionStatement(t.callExpression(t.identifier('switchPage'), [t.stringLiteral('Root')])),
          t.returnStatement(),
        ])
      );
      body.body.unshift(guard);
      applied.push('OutputTest: Back 行接受 BTN_ENTER');
    },
  });

  // 去掉游戏里遗留的调试 console.log。
  // 这些日志本身无害, 但代价很大: 宿主会把每次 log 交给转发钩子(逐调用 JSON.stringify),
  // 而 chartParser.rt() 结尾就打印整份解析结果 —— 每解析一首曲子都要序列化一个巨大的
  // 乐谱对象, 曲库一大就明显拖慢加载。
  let removedLogs = 0;
  traverse(ast, {
    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isMemberExpression(callee) || callee.computed) return;
      if (!t.isIdentifier(callee.object, { name: 'console' })) return;
      if (!t.isIdentifier(callee.property, { name: 'log' })) return;
      // 表达式位置用 void 0 占位, 保持逗号表达式/条件判断的语义
      if (path.parentPath.isExpressionStatement()) path.parentPath.remove();
      else path.replaceWith(t.unaryExpression('void', t.numericLiteral(0)));
      removedLogs++;
    },
  });
  if (removedLogs) applied.push(`去掉遗留调试 console.log ×${removedLogs}`);

  return applied;
}
