// 模块: v_R1_27896
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_R1_27896(scope) {
  let v_t_28601 = 0,
    v_i_28602 = 0;
  function v_e_28603() {
    scope.playerInfoBoard.VA(v_i_28602, v_t_28601);
  }
  function v_n_28604() {
    return !0;
  }
  return {
    ue: function () {
      scope.playerInfoBoard.uP(!1), scope.playerInfoBoard.VA(v_i_28602, v_t_28601);
    },
    WA: function () {
      1 <= ++v_t_28601 && (v_t_28601 = 0, 30 < ++v_i_28602) && (v_i_28602 = 30), v_e_28603();
    },
    XA: function (v_t_28605) {
      return !(!v_t_28605 || v_t_28605 < 1 || v_t_28605 > v_i_28602 || (v_i_28602 -= v_t_28605, v_e_28603(), 0));
    },
    zA: function (v_t_28606) {
      return !(!v_t_28606 || v_t_28606 < 1 || v_t_28606 > v_i_28602);
    },
    KA: () => 1,
    YA: () => v_t_28601,
    ZA: () => v_i_28602,
    fP: () => v_n_28604
  };
}
