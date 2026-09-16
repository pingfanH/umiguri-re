// 模块: v_V1_27912
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_V1_27912(scope) {
  let v_n_28984 = void 0,
    v_i_28985 = 0,
    v_t_28986 = 0,
    v_e_28987 = 0;
  function v_r_28988() {
    v_i_28985 = 0, v_n_28984.Jt = !0, v_n_28984.i8(2), v_n_28984.i8(1), v_n_28984.e8(0), v_t_28986 = scope.v_uo_28102(() => {
      v_t_28986 = 0, v_n_28984.e8(2);
    }, 2e3);
  }
  return {
    ue: function (v_e_28989) {
      scope.v_Le_28076([v_i_28990 => {
        scope.languagePackages.it("ui/waitMessage.rsb", function (v_t_28991) {
          v_t_28991 ? (v_t_28991 = new scope.v_Dl_28181(v_t_28991), scope.renderer.nt(v_t_28991.rt(scope.renderer.p5()), v_t_28992 => {
            (v_n_28984 = v_t_28992).Jt = !1, scope.v_Me_28078(v_i_28990);
          })) : v_e_28989();
        });
      }, v_t_28993 => {
        scope.renderer.ut("sysCommonWaitMessage", v_n_28984, 980, () => {
          scope.v_Fe_28101(v_e_28989);
        });
      }, v_t_28994 => {
        scope.v_Fe_28101(v_e_28989);
      }]);
    },
    T0: function (v_t_28995) {
      v_i_28985 || (v_e_28987 && clearTimeout(v_e_28987), v_e_28987 = 0, v_i_28985 = scope.v_uo_28102(v_r_28988, v_t_28995));
    },
    XS: function () {
      v_i_28985 && clearTimeout(v_i_28985), v_i_28985 = 0, v_n_28984.Jt && (v_t_28986 && clearTimeout(v_t_28986), v_t_28986 = 0, v_n_28984.e8(1), v_e_28987 = scope.v_uo_28102(() => {
        v_e_28987 = 0, v_n_28984.Jt = !1;
      }, 900));
    }
  };
}
