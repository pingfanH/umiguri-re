// 模块: v_Te_27911
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Te_27911(scope) {
  function v_l_28931() {
    this.Ii = 0, this.yi = 0, this.Ee = void 0, this.Ci = void 0;
  }
  v_l_28931.prototype = {
    Ok: function (v_t_28944) {
      this.Ci.elementByName("dialogMessage").Wt = v_t_28944;
    },
    Wk: function (v_t_28945) {
      this.Ci.elementByName("progressDownloadBytes").Wt = v_t_28945;
    },
    zk: function (v_t_28946) {
      null === v_t_28946 ? (this.Ci.elementByName("progressBarFg").Oe[0] = 1, v_c_28932.e8(4, this.Ci)) : (v_c_28932.i8(4, this.Ci), this.Ci.elementByName("progressBarFg").Oe[0] = v_t_28946);
    }
  };
  let v_c_28932 = void 0,
    v_u_28933 = void 0,
    v_f_28934 = {},
    v___28935 = [];
  function v_h_28936(v_t_28947, v_i_28948) {
    "down" === v_t_28947 && (scope.v_Ae_27892.dn("change_value"), v_r_28942(scope.v_nt_27780));
  }
  function v_d_28937(v_t_28949, v_i_28950) {
    "down" === v_t_28949 && (scope.v_Ae_27892.dn("change_value"), v_r_28942(scope.v_H0_27781));
  }
  function v_v_28938(v_t_28951, v_i_28952) {
    "down" === v_t_28951 && (scope.v_Ae_27892.dn("change_value"), v_r_28942(scope.v_rt_27782));
  }
  function v_w_28939(v_t_28953, v_i_28954) {
    "down" === v_t_28953 && (scope.v_Ae_27892.dn("change_value"), v_r_28942(scope.v_st_27783));
  }
  function v_g_28940() {
    v_r_28942(scope.v_at_27784);
  }
  function v_n_28941(v_t_28955, v_i_28956, v_e_28957, v_n_28958) {
    var v_r_28959 = new v_l_28931();
    let v_s_28960 = "dialogSingle";
    (61440 & v_i_28956) === scope.v_U0_27775 && (v_s_28960 = "dialogWarn"), (3840 & v_i_28956) === scope.v_ni_27774 && (v_s_28960 = "dialog"), 4 == (v_i_28956 & scope.v_tt_27777) ? v_s_28960 = "dialogLoading" : 5 == (v_i_28956 & scope.v_tt_27777) ? v_s_28960 = "dialogProgress" : 6 == (v_i_28956 & scope.v_tt_27777) && (v_s_28960 = "dialogProgressBackground"), v_r_28959.Ci = v_f_28934[v_s_28960].Ve(!0), v_r_28959.Ci.visible = !0, v_r_28959.Ci.elementByName("dialogMessage").Wt = v_t_28955, v_u_28933.Ze(v_r_28959.Ci), v_c_28932.e8(2, v_r_28959.Ci), 4 == (v_i_28956 & scope.v_tt_27777) && v_c_28932.e8(3, v_r_28959.Ci), v_i_28956 & scope.v_it_27778 && (v_r_28959.Ci.elementByName("backdrop").visible = !1, v_r_28959.Ci.elementByName("overlay").visible = !1), v_r_28959.Ee = v_n_28958, v_e_28957 && (v_r_28959.yi = scope.renderer.xt() + v_e_28957);
    var v_a_28961 = [];
    switch (v_i_28956 & scope.v_tt_27777) {
      case scope.v_N0_27771:
        v_a_28961.push(["ok", "Next", 0, 16, scope.v_W0_27791, v_h_28936]);
        break;
      case scope.v_G0_27772:
        v_a_28961.push(["yes", "Yes", 0, 8, scope.v_W0_27791, v_d_28937]), v_a_28961.push(["no", "No", 8, 8, scope.v_si_27792, v_v_28938]);
        break;
      case 2:
        v_a_28961.push(["cancel", "Cancel", 0, 16, scope.v_W0_27791, v_w_28939]);
    }
    scope.menuSystem.ft();
    for (const v_o_28962 of v_a_28961) scope.menuSystem.vt(v_o_28962[0], v_o_28962[1], v_o_28962[2], v_o_28962[3], v_o_28962[4], !1, !1, !1, "", v_o_28962[5]);
    scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(v_g_28940, void 0)), scope.ledOutput.iv(), 4 == (v_i_28956 & scope.v_tt_27777) || 5 == (v_i_28956 & scope.v_tt_27777) || 6 == (v_i_28956 & scope.v_tt_27777) || v_i_28956 & scope.v_et_27779 || scope.v_Ae_27892.dn("news_open"), 5 != (v_i_28956 & scope.v_tt_27777) && 6 != (v_i_28956 & scope.v_tt_27777) || v_n_28958 && v_n_28958(-1, v_r_28959), v___28935.push(v_r_28959);
  }
  function v_r_28942(v_t_28963) {
    let v_i_28964 = v___28935.pop();
    v_c_28932.e8(1, v_i_28964.Ci), scope.sceneManager._t(), scope.menuSystem._t(), scope.renderer.W6(function () {
      v_u_28933.Ke(v_i_28964.Ci);
    }, scope.v_Ge_28204(20)), "function" == typeof v_i_28964.Ee && v_i_28964.Ee(v_t_28963);
  }
  function v_t_28943(v_t_28965, v_i_28966, v_e_28967) {
    0 < v___28935.length && 0 < v___28935[v___28935.length - 1].yi && v___28935[v___28935.length - 1].yi < v_t_28965 && v_r_28942();
  }
  return {
    ue: function (v_i_28968) {
      scope.v_Le_28076([v_e_28969 => {
        scope.languagePackages.it("ui/commonDialog.rsb", function (v_t_28970) {
          v_t_28970 ? (v_t_28970 = new scope.v_Dl_28181(v_t_28970), scope.renderer.nt(v_t_28970.rt(scope.renderer.p5()), v_t_28971 => {
            v_c_28932 = v_t_28971, v_u_28933 = v_t_28971.rsbTree.elementByIndex(0);
            var v_i_28972 = v_t_28971.rsbTree.elementByIndex(1);
            for (let v_t_28973 = 0; v_t_28973 < v_i_28972.We.length; ++v_t_28973) v_i_28972.We[v_t_28973].visible = !1, v_f_28934[v_i_28972.We[v_t_28973].ct] = v_i_28972.We[v_t_28973];
            scope.v_Me_28078(v_e_28969);
          })) : v_i_28968();
        });
      }, v_i_28974 => {
        scope.renderer.ut("sysCommonDialogLoop", new scope.v_Tl_28174(v_t_28943), 990, v_t_28975 => {
          scope.v_Me_28078(v_i_28974);
        });
      }, v_t_28976 => {
        scope.renderer.ut("sysCommonDialog", v_c_28932, 991, () => {
          scope.v_Fe_28101(v_i_28968);
        });
      }, v_t_28977 => {
        scope.v_Fe_28101(v_i_28968);
      }]);
    },
    Ai: v_n_28941,
    W4: function (v_t_28978) {
      v_n_28941(void 0 !== v_t_28978 ? v_t_28978 : "NOW LOADING...", 4, 0, void 0);
    },
    Kk: function (v_t_28979, v_i_28980) {
      let v_e_28981 = null;
      return v_n_28941(v_t_28979, v_i_28980 ? 6 : 5, 0, (v_t_28982, v_i_28983) => {
        -1 === v_t_28982 && (v_e_28981 = v_i_28983);
      }), v_e_28981;
    },
    K4: v_r_28942,
    Ti: function () {
      return v___28935.length;
    },
    Li: function () {
      for (; v___28935.length;) v_r_28942();
    }
  };
}
