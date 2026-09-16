// 模块: v_li_30290
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_li_30290(scope) {
  let v_s_31170 = {
    0: null,
    1: null
  };
  return {
    Ec: function (v_t_31171, v_i_31172, v_e_31173) {
      v_t_31171 = "/player_scenes/" + v_t_31171.replaceAll(/[/\\:*?"|<>"]/g, "_") + "/";
      let v_n_31174 = new scope.v_Yr_27972(),
        v_r_31175 = "";
      if (0 === v_i_31172) v_r_31175 = "bg";else {
        if (v_i_31172 !== v_oi_30289) return;
        v_r_31175 = "field";
      }
      v_n_31174.read(v_t_31171 + v_r_31175 + ".upm", v_t_31171, function (v_t_31176) {
        v_t_31176 && (v_s_31170[v_i_31172] = v_n_31174), v_e_31173(v_t_31176);
      });
    },
    le: function (v_t_31177) {
      v_s_31170[v_t_31177] && 0 !== v_t_31177 && v_t_31177 === v_oi_30289 && (scope.glContext.enable(scope.glContext.STENCIL_TEST), scope.glContext.stencilFunc(scope.glContext.ALWAYS, 1, 0), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.REPLACE, scope.glContext.REPLACE), v_s_31170[v_t_31177].draw(), scope.glContext.disable(scope.glContext.STENCIL_TEST));
    },
    Fc: function () {
      v_s_31170[0] && (v_s_31170[0].free(), v_s_31170[0] = null), v_s_31170[v_oi_30289] && (v_s_31170[v_oi_30289].free(), v_s_31170[v_oi_30289] = null);
    }
  };
}
