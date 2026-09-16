#!/usr/bin/env node
// game-patches.mjs - 对游戏逻辑做可复现的小补丁(在 modularize 生成前作用于 AST)。
//
// 目前:
//   测试菜单 OutputTest 页的「Back」行只认 左(8)/右(16)/BTN_SERVICE, 不认
//   「確定」(BTN_ENTER)。补一条守卫: 当 au===7(Back) 且按下 BTN_ENTER 时也返回。
import { traverse, t, parser } from './lib/symbols.mjs';

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

  // 乐曲列表缓存命中后补载封面。
  // 游戏自带 /caches/music.json 列表缓存(rm.Im)会跳过逐曲扫描, 但缓存里只有数据、
  // 没有 GL 纹理 —— 不补的话选曲列表所有封面都会退化成 dummy。这里在缓存解析之后、
  // 收尾回调之前插入一段「按缓存条目补载封面」的循环(逻辑与建表循环里的封面加载一致)。
  traverse(ast, {
    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isMemberExpression(callee) || !t.isIdentifier(callee.property, { name: 'Ic' })) return;
      const arg0 = path.node.arguments[0];
      if (!t.isStringLiteral(arg0) || arg0.value !== '/caches/music.json') return;
      const cb = path.node.arguments[1];
      if (!cb || !t.isBlockStatement(cb.body)) return;
      if (JSON.stringify(cb.body).includes('__umgJkt')) return; // 幂等
      const snippet = parser.parse(JACKET_PRELOAD, { sourceType: 'script' }).program.body;
      cb.body.body.splice(cb.body.body.length - 1, 0, ...snippet);
      applied.push('列表缓存命中后补载封面');
    },
  });

  traverse(ast, {
    // 列表就绪标记: 乐曲列表交付回调(v_i_32551, 冷/暖两条路都会经过)之后打点,
    // 便于比较「扫描建表」与「读缓存」两条路的启动耗时。
    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isIdentifier(callee, { name: 'v_i_32551' })) return;
      if (path.node.arguments.length !== 3) return;
      const stmt = path.getStatementParent();
      if (!stmt || stmt.node.__umgTimed) return;
      stmt.node.__umgTimed = true;
      const log = parser.parse(
        'console.log("[DIAG] [umg][jkt] 列表就绪 n=" + v_l_32557.length + " " + (v_o_32561 ? "缓存" : "扫描"));'
      ).program.body[0];
      stmt.insertAfter(log);
      applied.push('列表就绪标记');
    },
  });

  // 渲染倍率: 游戏内部固定 1920x1080 设计空间, 容器再由 CSS scale 放大到窗口 ->
  // 非整数倍时插值发虚。这里只放大「画布背衬」(canvas.width/height + viewport +
  // readPixels), 投影/设计空间保持 1920x1080, 于是背衬 = 窗口物理像素时 1:1 清晰。
  // 倍率由宿主在载入游戏前写入 window.__umgPixelScale(默认 1)。
  const scaleExpr = () =>
    t.logicalExpression('||', t.memberExpression(t.identifier('window'), t.identifier('__umgPixelScale')), t.numericLiteral(1));
  const wrapScale = (node) => t.binaryExpression('*', node, scaleExpr());
  // 注意: 补丁阶段这些量还是裸标识符(v_yn_27656), `scope.` 是后续模块生成时补的
  const nameOf = (n) =>
    t.isIdentifier(n) ? n.name : t.isMemberExpression(n) && t.isIdentifier(n.property) ? n.property.name : null;
  const isVyn = (n) => nameOf(n) === 'v_yn_27656';
  const isVsn = (n) => nameOf(n) === 'v_Sn_27657';
  let scaled = 0;
  traverse(ast, {
    AssignmentExpression(path) {
      const left = path.node.left;
      if (!t.isMemberExpression(left) || !t.isThisExpression(left.object) && !t.isMemberExpression(left.object)) return;
      if (!t.isIdentifier(left.property) || (left.property.name !== 'width' && left.property.name !== 'height')) return;
      // 仅处理 <某物>.canvas.width/.height = v_yn/v_Sn 形式
      if (!t.isMemberExpression(left.object) || !t.isIdentifier(left.object.property, { name: 'canvas' })) return;
      if (isVyn(path.node.right) || isVsn(path.node.right)) {
        path.node.right = wrapScale(path.node.right);
        scaled++;
      }
    },
    CallExpression(path) {
      const callee = path.node.callee;
      if (!t.isMemberExpression(callee) || !t.isIdentifier(callee.property)) return;
      const name = callee.property.name;
      if (name !== 'viewport' && name !== 'readPixels') return;
      const args = path.node.arguments;
      const base = name === 'viewport' ? 2 : 2;
      if (args.length < base + 2) return;
      if (isVyn(args[base]) && isVsn(args[base + 1])) {
        args[base] = wrapScale(args[base]);
        args[base + 1] = wrapScale(args[base + 1]);
        scaled++;
      }
    },
  });
  if (scaled) applied.push(`渲染倍率(画布背衬 ×__umgPixelScale) ×${scaled}`);

  return applied;
}

// 与建表循环里的封面加载等价(dds 走 it+软件/硬件解码, 其它走 Image)
const JACKET_PRELOAD = `
let __umgJktN = 0;
if (v_o_32561) for (const __umgJkt of v_l_32557) {
  if (!__umgJkt || !__umgJkt.res_info || void 0 === __umgJkt.res_info.jacket) continue;
  ++__umgJktN;
  if (void 0 !== scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0]) continue;
  const __umgJktPath = "/music/" + __umgJkt.dir + "/" + __umgJkt.res_info.jacket;
  if (scope.v_Da_28067(__umgJkt.res_info.jacket, ".dds")) {
    scope.v_$r_27975.it(__umgJktPath, function (__umgJktBuf) {
      if (null === __umgJktBuf) return;
      let __umgJktTex = null;
      scope.v_Io_28120(__umgJktBuf, !1, function (__umgJktStatus, __umgJktW, __umgJktH) {
        if (__umgJktStatus === scope.v_xo_28116) {
          __umgJktTex = new glRuntime.Texture(__umgJktW, __umgJktH, {
            wrapS: scope.glContext.CLAMP_TO_EDGE,
            wrapT: scope.glContext.CLAMP_TO_EDGE,
            format: scope.glContext.RGB
          });
          scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1);
        } else if (__umgJktStatus === scope.v_Ao_28115) {
          __umgJktTex = null;
        }
      });
      if (__umgJktTex) scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0] = __umgJktTex;
    });
  } else {
    scope.v__o_28104(__umgJktPath, function (__umgJktImg) {
      if (__umgJktImg) scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0] = glRuntime.Texture.fromImage(__umgJktImg, v_c_32558);
    });
  }
}
console.log("[DIAG] [umg][jkt] 列表缓存命中, 补载封面 " + __umgJktN);
`;
