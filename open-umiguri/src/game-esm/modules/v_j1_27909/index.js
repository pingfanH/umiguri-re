// 模块: v_j1_27909
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_j1_27909(scope) {
  let v_n_28918 = void 0;
  return {
    ue: function (v_e_28919) {
      scope.v_Le_28076([v_i_28920 => {
        scope.languagePackages.it("ui/commonBackground.rsb", function (v_t_28921) {
          v_t_28921 ? (v_t_28921 = new scope.v_Dl_28181(v_t_28921), (v_n_28918 = v_t_28921.rt(scope.renderer.p5())).Jt = !1, v_n_28918.e8(1), v_n_28918.e8(0), scope.renderer.ut("sysBackground", v_n_28918, 0, v_t_28922 => {
            scope.v_Me_28078(v_i_28920);
          })) : v_e_28919();
        });
      }, v_t_28923 => {
        v_e_28919();
      }]);
    },
    ti: function () {
      v_n_28918.Jt = !0;
    },
    ii: function () {
      v_n_28918.Jt = !1;
    }
  };
}
