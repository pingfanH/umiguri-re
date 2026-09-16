// 模块: localization
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createLocalization(scope) {
  let v_a_28716 = void 0,
    v_s_28717 = 0,
    v_o_28718 = "Left",
    v_l_28719 = "Right",
    v_c_28720 = "Enter",
    v_u_28721 = "Next";
  function v_n_28722() {
    return new Promise(async v_i_28727 => {
      let v_e_28728 = ["ja-JP", "en-US", "zh-CN"],
        v_n_28729 = scope.mathMax(v_e_28728.indexOf(scope.currentLang), 0);
      v_a_28716.Jt = !0;
      for (const v_t_28732 of v_a_28716.lt.We) v_t_28732.Be = !1;
      let v_r_28730 = v_a_28716.lt.yk(0),
        v_s_28731 = v_a_28716.lt.yk(6);
      for (let v_t_28733 = 0; v_t_28733 < v_s_28731.We.length; ++v_t_28733) v_s_28731.We[v_t_28733].We[1].Be = !1;
      v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), scope.menuSystem.ft(), scope.menuSystem.vt("left", v_o_28718, 0, 3, scope.v_ai_27793, !0, !1, !1, "left", function (v_t_28734) {
        if ("down" === v_t_28734) {
          --v_n_28729 < 0 && (v_n_28729 = 0);
          for (let v_t_28735 = 0; v_t_28735 < v_s_28731.We.length; ++v_t_28735) v_s_28731.We[v_t_28735].We[1].Be = !1;
          v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), scope.menuSystem.kt("left", v_n_28729 <= 0), scope.menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1);
        }
      }), scope.menuSystem.vt("right", v_l_28719, 3, 3, scope.v_ai_27793, !0, !1, !1, "right", function (v_t_28736) {
        if ("down" === v_t_28736) {
          ++v_n_28729 >= v_e_28728.length && (v_n_28729 = v_e_28728.length - 1);
          for (let v_t_28737 = 0; v_t_28737 < v_s_28731.We.length; ++v_t_28737) v_s_28731.We[v_t_28737].We[1].Be = !1;
          v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), scope.menuSystem.kt("left", v_n_28729 <= 0), scope.menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1);
        }
      }), scope.menuSystem.vt("enter", v_c_28720, 6, 4, scope.v_W0_27791, !1, !1, !1, "enter", async function (v_t_28738) {
        "down" === v_t_28738 && (scope.menuSystem._t(), scope.currentLang = v_e_28728[v_n_28729], await scope.v_ts_27977.L4(scope.currentLang), await scope.v_fo_28103(scope.v_Ge_28204(20)), (v_t_28738 = v_a_28716.lt.yk(16)).Be = !0, v_a_28716.e8(2, v_t_28738), v_t_28738.yk(21).Je = "textLangSelect_" + scope.currentLang, await scope.v_fo_28103(scope.v_Ge_28204(30)), await scope.menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28738), v_a_28716.e8(1, v_r_28730), await scope.v_fo_28103(scope.v_Ge_28204(20)), v_i_28727());
      }), scope.menuSystem.kt("left", v_n_28729 <= 0), scope.menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1), v_r_28730.Be = !0, v_a_28716.e8(2, v_r_28730), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20));
    });
  }
  async function v_r_28723() {
    v_a_28716.Jt = !0;
    for (const v_i_28740 of v_a_28716.lt.We) v_i_28740.Be = !1;
    var v_t_28739 = v_a_28716.lt.yk(22);
    v_t_28739.yk(27).Je = "textAssetDL_" + scope.currentLang, v_t_28739.yk(28).Wt = (v_s_28717 / 1048576).toFixed(2).replaceAll(".", "C") + "U", v_t_28739.Be = !0, v_a_28716.e8(2, v_t_28739), await scope.v_fo_28103(scope.v_Ge_28204(30)), await scope.menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28739), await scope.v_fo_28103(scope.v_Ge_28204(20)), async function () {
      v_a_28716.Jt = !0;
      for (const v_r_28745 of v_a_28716.lt.We) v_r_28745.Be = !1;
      let v_t_28741 = v_a_28716.lt.yk(29),
        v_i_28742 = v_t_28741.yk(36),
        v_e_28743 = v_t_28741.yk(39),
        v_n_28744 = (v_t_28741.Be = !0, v_a_28716.e8(2, v_t_28741), v_t_28741.yk(35).Je = "textDownloading_" + scope.currentLang, v_i_28742.Wt = "0C00P", v_e_28743.ln(0), await scope.v_fo_28103(scope.v_Ge_28204(30)), await scope.v_ts_27977.u4(function (v_t_28746) {
          v_i_28742.Wt = (v_t_28746 / v_s_28717 * 100).toFixed(2).replaceAll(".", "C") + "P", v_e_28743.ln(v_t_28746 / v_s_28717);
        }));
      v_n_28744 ? (await scope.v_fo_28103(scope.v_Ge_28204(30)), v_t_28741.yk(35).Je = "textVerifying_" + scope.currentLang, v_i_28742.Wt = "0C00P", v_e_28743.ln(0), v_n_28744 = await scope.v_ts_27977._4(function (v_t_28747) {
        v_i_28742.Wt = (v_t_28747 / v_s_28717 * 100).toFixed(2).replaceAll(".", "C") + "P", v_e_28743.ln(v_t_28747 / v_s_28717);
      }), await scope.v_fo_28103(scope.v_Ge_28204(30)), v_a_28716.e8(1, v_t_28741), await scope.v_fo_28103(scope.v_Ge_28204(20)), await v_f_28724(v_n_28744)) : (v_a_28716.e8(1, v_t_28741), await scope.v_fo_28103(scope.v_Ge_28204(20)), await v_f_28724(!1));
    }();
  }
  async function v_f_28724(v_t_28748) {
    v_a_28716.Jt = !0;
    for (const v_e_28750 of v_a_28716.lt.We) v_e_28750.Be = !1;
    var v_i_28749 = v_a_28716.lt.yk(40);
    v_i_28749.yk(45).Je = v_t_28748 ? "textCompleteDL_" + scope.currentLang : "textFailedDL_" + scope.currentLang, v_i_28749.yk(46).Je = "textBackTitle_" + scope.currentLang, v_i_28749.Be = !0, v_a_28716.e8(2, v_i_28749), await scope.v_fo_28103(scope.v_Ge_28204(30)), await scope.menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_i_28749), await scope.v_fo_28103(scope.v_Ge_28204(20)), v_t_28748 ? await scope.v_ts_27977.v4() : location.reload();
  }
  async function v___28725() {
    v_a_28716.Jt = !0;
    for (const v_i_28752 of v_a_28716.lt.We) v_i_28752.Be = !1;
    var v_t_28751 = v_a_28716.lt.yk(47);
    v_t_28751.yk(52).Je = "textBackTitle_" + scope.currentLang, v_t_28751.Be = !0, v_a_28716.e8(2, v_t_28751), await scope.v_fo_28103(scope.v_Ge_28204(30)), await scope.menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28751), await scope.v_fo_28103(scope.v_Ge_28204(20)), location.reload();
  }
  function v_h_28726() {
    scope.renderer._i("assetDownload");
  }
  return {
    ue: function (v_e_28753) {
      scope.v_Le_28076([v_i_28754 => {
        scope.languagePackages.it("ui/assetDownload.rsb", function (v_t_28755) {
          v_t_28755 ? (v_t_28755 = new scope.v_Dl_28181(v_t_28755), scope.renderer.nt(v_t_28755.rt(scope.renderer.p5()), v_t_28756 => {
            v_a_28716 = v_t_28756, scope.v_Me_28078(v_i_28754);
          })) : v_e_28753();
        });
      }, v_t_28757 => {
        scope.v_Fe_28101(v_e_28753);
      }]);
    },
    T0: function (v_e_28758) {
      scope.v_Le_28076([async v_i_28759 => {
        v_u_28721 = scope.handshake.A4 ? (v_o_28718 = "LeftInt", v_l_28719 = "RightInt", v_c_28720 = "EnterInt", "NextInt") : (v_o_28718 = "Left", v_l_28719 = "Right", v_c_28720 = "Enter", "Next"), scope.handshake.A4 || (scope.v_Te_27911.W4(), await scope.v_ts_27977.m4(), scope.v_Te_27911.K4(), scope.v_ts_27977.S4()) ? (v_a_28716.Jt = !1, scope.renderer.ut("assetDownload", v_a_28716, 50, v_t_28760 => {
          scope.v_Me_28078(v_i_28759);
        })) : v_e_28758();
      }, async v_t_28761 => {
        if (await scope.v_fo_28103(scope.v_Ge_28204(20)), scope.handshake.A4) {
          var v_i_28762 = scope.currentLang;
          if (await v_n_28722(), scope.v_Te_27911.W4(), await scope.v_ts_27977.m4(), scope.v_Te_27911.K4(), !scope.v_ts_27977.S4()) return void (v_i_28762 !== scope.currentLang ? await v___28725() : (v_h_28726(), v_e_28758()));
        }
        v_s_28717 = scope.v_rc_28203(scope.v_ts_27977.w4(), v_t_28763 => v_t_28763.size), await v_r_28723();
      }]);
    },
    hv: function (v_e_28764) {
      scope.v_Le_28076([async v_i_28765 => {
        v_o_28718 = "LeftInt", v_l_28719 = "RightInt", v_c_28720 = "EnterInt", v_u_28721 = "NextInt", v_a_28716.Jt = !1, scope.renderer.ut("assetDownload", v_a_28716, 50, v_t_28766 => {
          scope.v_Me_28078(v_i_28765);
        });
      }, async v_t_28767 => {
        await scope.v_fo_28103(scope.v_Ge_28204(20));
        var v_i_28768 = scope.currentLang;
        await v_n_28722(), scope.v_Te_27911.W4(), await scope.v_ts_27977.m4(), scope.v_Te_27911.K4(), scope.v_ts_27977.S4() ? (v_s_28717 = scope.v_rc_28203(scope.v_ts_27977.w4(), v_t_28769 => v_t_28769.size), await v_r_28723()) : v_i_28768 !== scope.currentLang ? await v___28725() : (v_h_28726(), v_e_28764());
      }]);
    }
  };
}
