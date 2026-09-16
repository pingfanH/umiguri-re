// 模块: v_O1_27910
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_O1_27910(scope) {
  let v_n_28924 = void 0;
  return {
    ue: function (v_e_28925) {
      scope.v_Le_28076([v_i_28926 => {
        scope.languagePackages.it("ui/commonCaption.rsb", function (v_t_28927) {
          v_t_28927 ? (v_t_28927 = new scope.v_Dl_28181(v_t_28927), (v_n_28924 = v_t_28927.rt(scope.renderer.p5())).Jt = !1, scope.renderer.ut("sysCaption", v_n_28924, 4110, v_t_28928 => {
            scope.v_Me_28078(v_i_28926);
          })) : v_e_28925();
        });
      }, v_t_28929 => {
        scope.v_Fe_28101(v_e_28925);
      }]);
    },
    ti: function (v_t_28930) {
      v_n_28924.Jt = !0, v_n_28924.rsbTree.elementByIndex(2).Je = "text" + v_t_28930, v_n_28924.rsbTree.elementByIndex(3).Wt = scope.v_Ue_28209("header" + v_t_28930), v_n_28924.e8(0), scope.sceneManager.ei();
    },
    ii: function () {
      v_n_28924.Jt = !1, scope.sceneManager.qt();
    }
  };
}
