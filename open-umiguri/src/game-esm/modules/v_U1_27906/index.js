// 模块: v_U1_27906
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_U1_27906(scope) {
  function v_e_28884() {
    this.wi = 0, this.Ee = void 0;
  }
  let v_r_28885 = void 0,
    v_s_28886 = [],
    v_n_28887 = new v_e_28884();
  function v_a_28888() {
    --v_n_28887.wi, v_n_28887.wi < 0 && (v_n_28887.wi = 0), v_c_28891();
  }
  function v_o_28889() {
    ++v_n_28887.wi, v_n_28887.wi >= v_s_28886.length && (v_n_28887.wi = v_s_28886.length - 1), v_c_28891();
  }
  function v_l_28890() {
    v_r_28885.e8(0), scope.menuSystem.It(!1), scope.renderer.W6(v_t_28892, scope.v_Ge_28204(30));
  }
  function v_c_28891() {
    v_r_28885.rsbTree.elementByIndex(6).Wt = v_s_28886[v_n_28887.wi], v_r_28885.rsbTree.elementByIndex(7).Wt = "Page " + (v_n_28887.wi + 1) + " / " + v_s_28886.length, scope.menuSystem.kt("left", v_n_28887.wi <= 0), scope.menuSystem.kt("right", v_n_28887.wi >= v_s_28886.length - 1), scope.menuSystem.Cv(!0);
  }
  function v_t_28892() {
    scope.menuSystem._t(), scope.renderer._i("licenseText"), v_n_28887.Ee && v_n_28887.Ee();
  }
  return {
    ue: function (v_n_28893) {
      scope.v_Le_28076([v_i_28894 => {
        scope.languagePackages.it("ui/licenseText.rsb", function (v_t_28895) {
          v_t_28895 ? (v_t_28895 = new scope.v_Dl_28181(v_t_28895), scope.renderer.nt(v_t_28895.rt(scope.renderer.p5()), v_t_28896 => {
            v_r_28885 = v_t_28896, scope.v_Me_28078(v_i_28894);
          })) : v_n_28893();
        });
      }, v_e_28897 => {
        scope.v_$r_27975.xi("/license.xml", function (v_t_28898) {
          if (v_t_28898) {
            for (const v_i_28899 of v_t_28898.documentElement.getElementsByTagName("item")) v_s_28886.push(v_i_28899.textContent);
            scope.v_Me_28078(v_e_28897);
          } else v_n_28893();
        });
      }, v_t_28900 => {
        scope.v_Fe_28101(v_n_28893);
      }]);
    },
    T0: function (v_t_28901) {
      scope.v_Le_28076([v_i_28902 => {
        scope.menuSystem.ft(), (v_n_28887 = new v_e_28884()).Ee = v_t_28901, v_r_28885.Jt = !1, scope.renderer.ut("licenseText", v_r_28885, 20, v_t_28903 => {
          scope.v_Me_28078(v_i_28902);
        });
      }, v_t_28904 => {
        v_r_28885.Jt = !0, v_r_28885.e8(1);
        for (const v_i_28905 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, v_a_28888], ["right", "Right", 3, 3, scope.v_ai_27793, !0, v_o_28889], ["exit", "Exit", 14, 2, scope.v_si_27792, !1, v_l_28890]]) scope.menuSystem.vt(v_i_28905[0], v_i_28905[1], v_i_28905[2], v_i_28905[3], v_i_28905[4], v_i_28905[5], !1, !1, "", v_i_28905[6]);
        scope.menuSystem.yv(), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), v_c_28891();
      }]);
    }
  };
}
