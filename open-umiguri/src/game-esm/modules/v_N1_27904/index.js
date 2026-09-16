// 模块: v_N1_27904
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_N1_27904(scope) {
  let v_n_28770 = void 0,
    v_r_28771 = 0;
  function v_s_28772() {
    v_t_28777(), scope.renderer.iy(v_r_28771), v_n_28770.e8(0), scope.menuSystem.dt(), scope.renderer.W6(async () => {
      v_n_28770.i8(0), v_i_28778();
      var v_t_28779 = !scope.v_Xt_27648;
      scope.v_G1_27905.T0(void 0, v_t_28779);
    }, scope.v_Ge_28204(30));
  }
  function v_a_28773() {
    v_t_28777(), scope.menuSystem.It(!1), scope.localization.hv(() => {
      scope.menuSystem.It(!0), v_c_28776();
    });
  }
  function v_o_28774() {
    v_t_28777(), scope.v_U1_27906.T0(() => {
      v_c_28776();
    });
  }
  function v_l_28775() {
    scope.renderer.iy(v_r_28771), v_n_28770.e8(1), v_r_28771 = scope.renderer.W6(v_l_28775, 45000.09);
  }
  async function v_c_28776() {
    let v_t_28780 = await scope.v_D_27646.R9();
    v_t_28780 !== scope.v_Ts_28004 && (scope.renderer.iy(v_r_28771), v_n_28770.e8(0), scope.menuSystem.dt(), scope.renderer.W6(async () => {
      v_n_28770.i8(0), v_i_28778(), scope.v_G1_27905.T0(v_t_28780);
    }, scope.v_Ge_28204(30)));
  }
  function v_t_28777() {
    scope.v_D_27646.C9();
  }
  function v_i_28778() {
    scope.renderer._i("advertise");
  }
  return {
    ue: function (v_e_28781) {
      scope.v_Le_28076([v_i_28782 => {
        scope.languagePackages.it("ui/advertise.rsb", function (v_t_28783) {
          v_t_28783 ? (v_t_28783 = new scope.v_Dl_28181(v_t_28783), scope.renderer.nt(v_t_28783.rt(scope.renderer.p5()), v_t_28784 => {
            (v_n_28770 = v_t_28784).rsbTree.elementByIndex(27).Wt = "Version " + scope.v_nc_28202(), v_n_28770.rsbTree.elementByIndex(28).Wt = "Build " + scope.handshake.rm.Sm, scope.v_Me_28078(v_i_28782);
          })) : v_e_28781();
        });
      }, v_t_28785 => {
        scope.v_Fe_28101(v_e_28781);
      }]);
    },
    T0: function (v_e_28786) {
      scope.v_Le_28076([v_i_28787 => {
        v_n_28770.Jt = !1, scope.renderer.ut("advertise", v_n_28770, 20, v_t_28788 => {
          scope.v_Me_28078(v_i_28787);
        });
      }, async v_t_28789 => {
        scope.v_j1_27909.ti(), v_n_28770.Jt = !0, v_e_28786 ? (v_n_28770.e8(2), v_r_28771 = scope.renderer.W6(v_l_28775, scope.v_Ge_28204(900))) : v_l_28775(), scope.menuSystem.dt();
        for (const v_i_28790 of [["ok", "TouchSlider", 0, 14, "Pink", v_s_28772, ""], ["licenses", "Licenses", 14, 2, scope.v_X0_27795, v_o_28774, ""], ["language", "Language", 0, 0, "", v_a_28773, "f2"]]) scope.menuSystem.vt(v_i_28790[0], v_i_28790[1], v_i_28790[2], v_i_28790[3], v_i_28790[4], !1, !1, !1, v_i_28790[6], v_i_28790[5]);
        scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), v_c_28776();
      }]);
    }
  };
}
