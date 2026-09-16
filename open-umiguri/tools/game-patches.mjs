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
      const maskName = fn.node.params[0].name;
      // 若已存在同样守卫则跳过(幂等)
      const prev = path.getPrevSibling();
      if (prev && t.isIfStatement(prev.node)) {
        const s = JSON.stringify(prev.node).slice(0, 200);
        if (s.includes('BTN_ENTER')) return;
      }
      const guard = t.ifStatement(
        t.logicalExpression('&&', t.cloneNode(test, true), t.binaryExpression('&', t.identifier(maskName), t.identifier('BTN_ENTER'))),
        t.blockStatement([
          t.expressionStatement(t.callExpression(t.identifier('switchPage'), [t.stringLiteral('Root')])),
          t.returnStatement(),
        ])
      );
      path.insertBefore(guard);
      applied.push('OutputTest: Back 行接受 BTN_ENTER');
    },
  });

  return applied;
}
