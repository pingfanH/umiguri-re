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

  // 应用名: 游戏里 v_G_27652 = "UMIGURI" 会用于 document.title 与错误/修复页标题。
  // 允许宿主用 window.__umgAppName 覆盖(默认取 Tauri 的 productName), 便于改名(如 OpenUmiguri)。
  let appNamePatched = 0;
  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id, { name: 'v_G_27652' })) return;
      if (!t.isStringLiteral(path.node.init)) return;
      path.node.init = t.logicalExpression(
        '||',
        t.memberExpression(t.identifier('window'), t.identifier('__umgAppName')),
        t.stringLiteral('OpenUmiguri')
      );
      appNamePatched++;
    },
  });
  if (appNamePatched) applied.push(`应用名可由宿主覆盖 ×${appNamePatched}`);

  // 版本号: 登陆页显示 "Version " + v_U_27653。允许宿主用 window.__umgAppVersion 覆盖
  // (取 Tauri 的 app_version = tauri.conf.json 的 version), 避免与 package/安装包版本脱节。
  let appVersionPatched = 0;
  traverse(ast, {
    VariableDeclarator(path) {
      if (!t.isIdentifier(path.node.id, { name: 'v_U_27653' })) return;
      if (!t.isStringLiteral(path.node.init)) return;
      path.node.init = t.logicalExpression(
        '||',
        t.memberExpression(t.identifier('window'), t.identifier('__umgAppVersion')),
        path.node.init
      );
      appVersionPatched++;
    },
  });
  if (appVersionPatched) applied.push(`版本号可由宿主覆盖 ×${appVersionPatched}`);

  // 配置文件优先: 游戏读档时会把存档里的玩家信息写回握手
  // (scope.handshake.rm.om/um/lm = 存档的 name/level/rating)。
  // 宿主可用 window.__umgForceProfile 下发"强制值"(只含配置里确实写了的字段),
  // 这里把三处赋值改为「强制值优先, 否则沿用存档值」——于是配置文件始终优先,
  // 同时不会把用户没在配置里指定的字段顶掉。
  let forceProfile = 0;
  const FORCE_PROFILE_KEYS = { om: 'name', um: 'level', lm: 'rating' };
  traverse(ast, {
    AssignmentExpression(path) {
      const left = path.node.left;
      if (!t.isMemberExpression(left) || !t.isIdentifier(left.property)) return;
      const key = FORCE_PROFILE_KEYS[left.property.name];
      if (!key) return;
      // 形状必须是 <握手对象>.rm.<om|um|lm>(补丁阶段握手对象还是短名, 如 v_ye_27858)
      const rm = left.object;
      if (!t.isMemberExpression(rm) || !t.isIdentifier(rm.property, { name: 'rm' })) return;
      const rhs = path.node.right;
      if (JSON.stringify(rhs).includes('__umgForceProfile')) return; // 幂等
      path.node.right = t.logicalExpression(
        '||',
        t.memberExpression(
          t.memberExpression(t.identifier('window'), t.identifier('__umgForceProfile')),
          t.stringLiteral(key),
          true
        ),
        rhs
      );
      forceProfile++;
    },
  });
  if (forceProfile) applied.push(`配置优先: 玩家信息(姓名/等级/rating) ×${forceProfile}`);

  // 设计空间(实验): 让 v_yn_27656/v_Sn_27657 可由宿主提供(默认仍是 1920x1080),
  // 用于验证「游戏 UI 布局是否随设计空间等比缩放」(rsb 坐标是相对还是绝对像素)。
  let designPatched = 0;
  traverse(ast, {
    VariableDeclarator(path) {
      const id = path.node.id;
      if (!t.isIdentifier(id) || !t.isNumericLiteral(path.node.init)) return;
      if (id.name === 'v_yn_27656') {
        path.node.init = t.logicalExpression(
          '||',
          t.memberExpression(t.identifier('window'), t.identifier('__umgDesignW')),
          t.numericLiteral(1920)
        );
        designPatched++;
      } else if (id.name === 'v_Sn_27657') {
        path.node.init = t.logicalExpression(
          '||',
          t.memberExpression(t.identifier('window'), t.identifier('__umgDesignH')),
          t.numericLiteral(1080)
        );
        designPatched++;
      }
    },
  });
  if (designPatched) applied.push(`设计空间可由宿主覆盖 ×${designPatched}`);

  // 游玩状态/控制桥: 游玩会话(v_U_30262)是 gameCore 模块内的局部变量, 宿主读不到。
  // 在 gameCore 工厂 `return { ue, T0, lg, ri }` 之前挂一个 globalThis.__umgPlay:
  //   state  只读状态(主界面/加载/游玩/结算, 是否暂停, 进度/分数等)
  //   pause/resume/retry/settle/exit 对应游戏自身的暂停、继续、(seek 0)重来、立即结算
  // 供宿主暂停菜单(host/keypanel/pausemenu.js)使用。
  traverse(ast, {
    ReturnStatement(path) {
      const arg = path.node.argument;
      if (!t.isObjectExpression(arg)) return;
      const isGameCoreReturn = arg.properties.some(
        (p) =>
          t.isObjectProperty(p) &&
          t.isIdentifier(p.key, { name: 'ri' }) &&
          t.isIdentifier(p.value, { name: 'v_ji_30334' })
      );
      if (!isGameCoreReturn) return;
      if (JSON.stringify(arg).includes('__umgPlay')) return; // 幂等
      path.insertBefore(parser.parse(UMG_PLAY_BRIDGE, { sourceType: 'script' }).program.body);
      applied.push('游玩状态/控制桥 __umgPlay');
    },
  });

  return applied;
}

// gameCore 私有的游玩状态/控制桥(注入在模块 return 之前; 名字在该模块作用域内可见)。
const UMG_PLAY_BRIDGE = `
globalThis.__umgPlay = {
  get state() {
    var s = v_U_30262;
    var tm = !!(scope.testMenu && scope.testMenu.Gi && scope.testMenu.Gi());
    if (!s) return { scene: "menu", playing: false, paused: false, testMenu: tm };
    var inPlay = s.n1 === v_S_30187;
    return {
      scene: inPlay ? "play" : s.n1 >= v_B_30188 ? "result" : "loading",
      playing: inPlay && s.o1 === true,
      paused: inPlay && s.o1 === false,
      testMenu: tm,
      failed: !!s.J1,
      practice: !!(s.Y1 && s.Y1.k0),
      progress: s.rr,
      length: s.q1 ? s.q1.Zu._w : 0,
      speed: s.b1,
      difficulty: s.Y1 ? s.Y1.te : null,
      score: s.Ta ? s.Ta.Sr : 0
    };
  },
  pause: function () {
    if (v_U_30262 && v_U_30262.i1 && v_U_30262.n1 === v_S_30187 && v_U_30262.o1) v_Wi_30337();
  },
  resume: function () {
    if (v_U_30262 && v_U_30262.i1 && v_U_30262.n1 === v_S_30187 && !v_U_30262.o1) v_Vi_30336();
  },
  retry: function () {
    if (!v_U_30262 || v_U_30262.n1 !== v_S_30187) return;
    v_Yi_30341(0);
  },
  settle: function () {
    if (!v_U_30262 || v_U_30262.n1 !== v_S_30187) return;
    v_Hi_30330();
  },
  exit: function () {
    if (v_U_30262) v_Oi_30335();
  }
};
`;

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
