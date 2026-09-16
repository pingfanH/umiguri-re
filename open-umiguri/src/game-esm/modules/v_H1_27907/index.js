// 模块: v_H1_27907
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_H1_27907(scope) {
  let v_n_28906 = void 0;
  return {
    ue: function (v_e_28907) {
      scope.v_Le_28076([v_i_28908 => {
        scope.languagePackages.it("ui/commonTransition.rsb", function (v_t_28909) {
          v_t_28909 ? (v_t_28909 = new scope.v_Dl_28181(v_t_28909), (v_n_28906 = v_t_28909.rt(scope.renderer.p5())).Jt = !1, scope.renderer.ut("sysTransition", v_n_28906, 4100, v_t_28910 => {
            scope.v_Me_28078(v_i_28908);
          })) : v_e_28907();
        });
      }, v_t_28911 => {
        scope.v_Fe_28101(v_e_28907);
      }]);
    },
    T0: function () {
      v_n_28906.Jt = !0, v_n_28906.e8(0);
    }
  };
}
