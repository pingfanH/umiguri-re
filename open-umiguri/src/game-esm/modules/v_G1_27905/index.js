// 模块: v_G1_27905
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_G1_27905(scope) {
  const v_c_28791 = "cache:charaLg:",
    v_r_28792 = "cache:news";
  let v_u_28793 = void 0,
    v_f_28794 = void 0,
    v_n_28795 = void 0,
    v_s_28796 = void 0,
    v_a_28797 = void 0,
    v_o_28798 = void 0,
    v_l_28799 = void 0,
    v___28800 = void 0,
    v_h_28801 = void 0;
  function v_d_28802(v_t_28811) {
    v_f_28794.Be = v_f_28794 === v_t_28811, v_n_28795.Be = v_n_28795 === v_t_28811, v_s_28796.Be = v_s_28796 === v_t_28811, v_a_28797.Be = v_a_28797 === v_t_28811, v_o_28798.Be = v_o_28798 === v_t_28811, v_l_28799.Be = v_l_28799 === v_t_28811, v___28800.Be = v___28800 === v_t_28811, v_h_28801.Be = v_h_28801 === v_t_28811, v_u_28793.Jt = !0;
  }
  async function v_v_28803() {
    scope.playerInfoBoard.N4(scope.handshake.rm.om), scope.playerInfoBoard.H4(scope.handshake.On.$p), await scope.playerInfoBoard.V4(scope.handshake.On.qp), scope.playerInfoBoard.U4(scope.handshake.On.im), scope.playerInfoBoard.J4(scope.handshake.rm.lm, scope.v_Ie_27966.D0("showRating")), scope.playerInfoBoard.O4(scope.handshake.rm.um, scope.v_Ie_27966.D0("showLevel")), scope.playerInfoBoard.ti(), scope.v_nr_27925.T0();
  }
  function v_w_28804() {
    scope.menuSystem.St("ok");
  }
  function v_g_28805() {
    scope.menuSystem.St("no");
  }
  async function v_i_28806() {
    if (1 <= scope.handshake.On.Kp || (await new Promise(async v_i_28812 => {
      v_d_28802(v_a_28797), v_u_28793.e8(4), await scope.v_fo_28103(scope.v_Ge_28204(20));
      let v_e_28813 = scope.doc.createElement("iframe");
      function v_n_28814(v_t_28816) {
        scope.sceneManager.ni(), scope.sceneManager.ii(), v_e_28813.contentWindow.removeEventListener("scroll", v_r_28815), scope.menuSystem._t(), v_u_28793.e8(5), v_e_28813.parentElement.removeChild(v_e_28813), scope.renderer.W6(() => {
          v_i_28812(v_t_28816);
        }, scope.v_Ge_28204(30));
      }
      function v_r_28815() {
        scope.menuSystem.kt("left", v_e_28813.contentWindow.scrollY <= 0);
        var v_t_28817 = v_e_28813.contentWindow.scrollY >= v_e_28813.contentDocument.documentElement.scrollHeight - v_e_28813.contentWindow.innerHeight;
        scope.menuSystem.kt("right", v_t_28817), v_t_28817 && scope.menuSystem.kt("agree", !1);
      }
      v_e_28813.src = "/terms/" + scope.currentLang + ".html", v_e_28813.width = 780, v_e_28813.height = 420, v_e_28813.tabIndex = -1, v_e_28813.sandbox = "allow-popups", v_e_28813.style.left = "570px", v_e_28813.style.top = "410px", v_e_28813.style.position = "absolute", v_e_28813.style.border = "none", scope.v_y_27559.appendChild(v_e_28813), scope.menuSystem.ft(), scope.menuSystem.vt("left", "Up", 0, 3, scope.v_ai_27793, !0, !1, !1, "left", function (v_t_28818) {
        "down" === v_t_28818 && v_e_28813.contentWindow.scrollBy({
          top: -160,
          behavior: "smooth"
        });
      }), scope.menuSystem.vt("right", "Down", 3, 3, scope.v_ai_27793, !0, !1, !1, "right", function (v_t_28819) {
        "down" === v_t_28819 && v_e_28813.contentWindow.scrollBy({
          top: 160,
          behavior: "smooth"
        });
      }), scope.menuSystem.vt("disagree", "Disagree", 10, 3, scope.v_si_27792, !1, !1, !1, "", async function (v_t_28820) {
        "down" === v_t_28820 && v_n_28814(!1);
      }), scope.menuSystem.vt("agree", "Agree", 13, 3, scope.v_W0_27791, !1, !1, !0, "", async function (v_t_28821) {
        "down" === v_t_28821 && v_n_28814(!0);
      }), v_e_28813.onload = function () {
        v_r_28815(), v_e_28813.contentWindow.addEventListener("scroll", v_r_28815), v_e_28813.contentWindow.addEventListener("focus", function (v_t_28822) {
          scope.v_uo_28102(() => v_e_28813.blur()), v_t_28822.preventDefault(), v_t_28822.stopPropagation();
        });
      }, await scope.v_fo_28103(scope.v_Ge_28204(20)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(() => {
        scope.menuSystem.St("disagree");
      }, void 0)), scope.sceneManager.ri(180), scope.sceneManager.ti();
    }))) {
      scope.handshake.On.Kp = 1, scope.handshake.On.zp && scope.v_Xt_27648 && (await new Promise(v_t_28823 => scope.v_Te_27911.Ai(scope.v_Ue_28209("entryCreateData"), scope.v_ei_27773 | scope.v_it_27778, 2e3, v_t_28823)), await scope.renderer.C7(scope.v_Ge_28204(30)), await new Promise(v_t_28824 => scope.coopLobby.T0(v_t_28824)), await scope.renderer.C7(scope.v_Ge_28204(30))), await scope.v_Ns_28014.uA();
      {
        let v_i_28825 = [];
        for (const v_t_28826 of scope.v_be_27857.Jp) if ((scope.handshake.On.zp || -1 !== v_t_28826.di.findIndex(v_t_28827 => v_t_28827 === scope.handshake.On.Wp)) && (!scope.handshake.On.zp || v_t_28826.hi)) for (const v_e_28828 of v_t_28826.vi) v_i_28825.push({
          gi: v_t_28826.gi,
          wi: v_e_28828
        });
        0 === v_i_28825.length ? (v_b_28810(), v_v_28803()) : (v_f_28794.Be = !1, v_n_28795.Be = !1, v_s_28796.Be = !1, scope.menuSystem.dt(), scope.menuSystem.vt("ok", "Next", 0, 16, scope.v_W0_27791, !1, !1, !1, "", scope.v_fc_28212), scope.v_Le_28076([function (v_t_28829) {
          v_n_28795.Be = !0, v_u_28793.e8(13), scope.renderer.W6(function () {
            v_n_28795.Be = !1, scope.v_Me_28078(v_t_28829);
          }, scope.v_Ge_28204(80));
        }, function (v_t_28830) {
          scope.v_lo_28099(v_i_28825, function (v_i_28831, v_t_28832, v_e_28833) {
            v_e_28833.gi.pi(v_e_28833.wi.ki).then(function (v_t_28834) {
              if (v_t_28834) {
                let v_n_28835 = null;
                scope.v_Io_28120(v_t_28834.buffer, !1, (v_t_28836, v_i_28837, v_e_28838) => {
                  v_t_28836 === scope.v_xo_28116 ? (v_n_28835 = new glRuntime.Texture(v_i_28837, v_e_28838, {
                    wrapS: scope.glContext.CLAMP_TO_EDGE,
                    wrapT: scope.glContext.CLAMP_TO_EDGE,
                    format: scope.glContext.RGBA
                  }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_28836 === scope.v_Ao_28115 && (v_n_28835 = null);
                }), v_n_28835 ? (scope.renderer.Yt.Zt[v_r_28792] && scope.renderer.Yt.Zt[v_r_28792].free(), scope.renderer.Yt.Zt[v_r_28792] = v_n_28835, v_s_28796.yk(25).zt = !0, v_s_28796.yk(25).Xt = v_r_28792, scope.v_Ae_27892.dn("news_open"), v_s_28796.Be = !0, v_u_28793.e8(12), scope.renderer.W6(function () {
                  scope.menuSystem.wt("ok", !0), scope.sceneManager.ft(new scope.v_M1_27898(v_w_28804, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti(), scope.menuSystem.bt("ok", function (v_t_28839) {
                    "down" === v_t_28839 && (scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.wt("ok", !1), scope.v_Ae_27892.dn("change_value"), v_u_28793.e8(14), scope.renderer.W6(function () {
                      scope.renderer.Yt.Zt[v_r_28792] && scope.renderer.Yt.Zt[v_r_28792].free(), v_i_28831();
                    }, scope.v_Ge_28204(24)));
                  });
                }, 1e3)) : v_i_28831();
              } else v_i_28831();
            });
          }, function () {
            scope.v_Me_28078(v_t_28830);
          });
        }, async function (v_t_28840) {
          scope.menuSystem.dt(), v_b_28810(), await scope.v_Ns_28014.uA(), v_v_28803();
        }]));
      }
    } else scope.v_Ns_28014.fA(), v_b_28810(), scope.v_N1_27904.T0(!0);
  }
  async function v_m_28807(v_t_28841) {
    scope.handshake.Bm.Fm = 0, scope.v_Ns_28014._A(), v_t_28841 ? await scope.v_Xt_27648.Ey() : (scope.v_Te_27911.W4(), await scope.renderer.C7(scope.v_Ge_28204(15)), await scope.v_Ns_28014.cA(), await scope.renderer.C7(scope.v_Ge_28204(15)), scope.v_Te_27911.K4()), v_i_28806();
  }
  async function v_p_28808(v_t_28842) {
    let v_n_28843 = !1,
      v_r_28844;
    if (void 0 === v_t_28842 && scope.v_Xt_27648) scope.v_Ns_28014.vA(), v_r_28844 = await scope.v_Ns_28014.dA();else {
      var v_t_28842 = await scope.v_Ns_28014.hA(scope.v_Rs_28007.Py(v_t_28842));
      if (v_t_28842 === scope.v_Fs_28012) return await new Promise(v_t_28850 => scope.v_Te_27911.Ai(scope.v_Ue_28209("errorDupLogin"), scope.v_N0_27771 | scope.v_U0_27775, 1500, v_t_28850)), void v_o_28849();
      if (v_t_28842 === scope.v_Es_28010) return await new Promise(v_t_28851 => scope.v_Te_27911.Ai(scope.v_Ue_28209("errorNetworkError"), scope.v_N0_27771 | scope.v_U0_27775, 1500, v_t_28851)), void v_o_28849();
      if (v_r_28844 = await scope.v_Ns_28014.dA(), scope.v_Bs_28013.By(v_r_28844)) return scope.ledOutput.iv(), await scope.renderer.C7(scope.v_Ge_28204(30)), v_d_28802(v_h_28801), v_u_28793.e8(10), await scope.renderer.C7(2500), v_u_28793.e8(11), scope.sceneManager.ft(new scope.v_M1_27898()), scope.sceneManager.ri(10), scope.sceneManager.ti(), v_t_28842 = await new Promise(v_t_28852 => scope.v_Te_27911.Ai(scope.v_Ue_28209("entryNewCardConfirm"), scope.v_G0_27772 | scope.v_it_27778, 0, v_t_28852)), scope.sceneManager.ni(), scope.sceneManager.ii(), v_t_28842 !== scope.v_H0_27781 ? void v_o_28849() : (await scope.renderer.C7(scope.v_Ge_28204(30)), void v_m_28807(!0));
    }
    await new Promise(v_e_28853 => {
      let v_i_28854 = v_r_28844.charaId;
      var v_t_28855 = scope.v_be_27857.Np.find(v_t_28856 => v_t_28856.C0 === v_i_28854);
      v_t_28855 ? (v_n_28843 = v_t_28855.ub, scope.dataLoader.Si(v_t_28855, v_r_28844.charaTransIdx, v_t_28857 => {
        var v_i_28858 = v_c_28791 + "0";
        scope.renderer.Yt.Zt[v_i_28858] && scope.renderer.Yt.Zt[v_i_28858].free(), scope.renderer.Yt.Zt[v_i_28858] = v_t_28857, v_e_28853();
      })) : v_e_28853();
    });
    var v_t_28842 = v_f_28794.yk(6),
      v_e_28845 = v_f_28794.yk(17);
    v_t_28842.Be = !scope.v_Ns_28014.wA(), v_e_28845.Be = scope.v_Ns_28014.wA(), v_f_28794.yk(20).Wt = scope.v_Ue_28209(scope.v_Ns_28014.wA() ? "loginMessageGuest" : "loginMessage");
    {
      let v_i_28859 = v_r_28844.titleId;
      v_e_28845 = scope.v_be_27857.Hp.find(v_t_28860 => v_t_28860.id === v_i_28859);
      v_e_28845 ? (v_t_28842.yk(15).Wt = v_e_28845.text, v_t_28842.yk(10).Je = "title" + scope.v_ot_27785[v_e_28845.rarity]) : (v_t_28842.yk(15).Wt = "！！データベース参照エラー！！", v_t_28842.yk(10).Je = "title" + scope.v_ot_27785[0]);
    }
    v_t_28842.yk(16).Wt = v_r_28844.playerName;
    var v_i_28846,
      v_s_28847,
      v_e_28845 = v_f_28794.yk(1),
      v_a_28848 = v_f_28794.yk(2),
      v_e_28845 = (scope.renderer.Yt.Zt[v_c_28791 + "0"] && (v_n_28843 ? (v_e_28845.Be = !1, v_a_28848.Be = !0, v_a_28848.zt = !0, v_a_28848.Xt = v_c_28791 + "0") : (v_e_28845.Be = !0, v_a_28848.Be = !1, v_e_28845.zt = !0, v_e_28845.Xt = v_c_28791 + "0")), scope.v_Ie_27966.D0("showRating") ? (v_a_28848 = v_r_28844.playerRating, v_e_28845 = "" + scope.mathFloor(v_a_28848 / 100), v_i_28846 = scope.v_Xa_28081("" + v_a_28848 % 100, 2, "0"), v_s_28847 = scope.ratingColorName(v_a_28848), v_a_28848 = scope.ratingColorRgba(v_a_28848), v_t_28842.yk(14).Wt = v_e_28845 + "P" + v_i_28846, v_t_28842.yk(14).Ak = "rating" + v_s_28847, v_t_28842.yk(14).Qe(v_a_28848[0], v_a_28848[1], v_a_28848[2], v_a_28848[3]), v_t_28842.yk(13).Je = "numRating" + v_s_28847 + "Rating", v_t_28842.yk(13).Qe(v_a_28848[0], v_a_28848[1], v_a_28848[2], v_a_28848[3])) : (v_t_28842.yk(14).Wt = "N", v_t_28842.yk(14).Ak = "ratingWt", v_t_28842.yk(14).Qe(.825, .825, .825, 1), v_t_28842.yk(13).Je = "numRatingWtRating", v_t_28842.yk(13).Qe(.825, .825, .825, 1)), scope.v_Ie_27966.D0("showLevel") ? v_t_28842.yk(12).Wt = "" + scope.mathMin(scope.mathMax(v_r_28844.playerLevel, 1), 99) : v_t_28842.yk(12).Wt = "MM", v_d_28802(v_f_28794), v_u_28793.e8(6, void 0, 25), scope.v_H1_27907.T0(), scope.menuSystem.dt(), [["yes", "Yes", 0, 8, scope.v_W0_27791, async function () {
        scope.sceneManager.ni(), scope.sceneManager.ri(30), scope.menuSystem.It(!1), ((await scope.v_Z1_27919.qA(1)) ? (scope.menuSystem.kt("yes", !1), scope.sceneManager.ni(), scope.sceneManager.ii(), v_u_28793.e8(7, void 0, 0), await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.dt(), v_m_28807) : v_o_28849)();
      }], ["no", "No", 8, 8, scope.v_si_27792, v_o_28849]]);
    for (const v_l_28861 of v_e_28845) scope.menuSystem.vt(v_l_28861[0], v_l_28861[1], v_l_28861[2], v_l_28861[3], v_l_28861[4], !1, !1, !1, "", v_l_28861[5]);
    async function v_o_28849() {
      scope.v_Z1_27919.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), scope.v_Ns_28014.fA(), scope.v_H1_27907.T0(), v_u_28793.e8(7, void 0, 10), scope.menuSystem.dt(), await scope.renderer.C7(scope.v_Ge_28204(30)), v_b_28810(), scope.v_N1_27904.T0(!0);
    }
    await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(v_g_28805, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti();
  }
  async function v_k_28809(v_t_28862) {
    let v_i_28863 = v_t_28862;
    if (v_i_28863 && v_i_28863 !== scope.v_Is_28005 && v_i_28863 !== scope.v_Ts_28004) v_p_28808(v_t_28862);else {
      v_d_28802(v_o_28798), v_u_28793.e8(8, void 0, 25), scope.menuSystem.dt();
      for (const v_n_28865 of [["guest", "GuestLogin", 0, 12, scope.v_W0_27791, async function () {
        scope.v_D_27646.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.dt(), v_p_28808();
      }], ["accCode", "AccessCode", 12, 4, scope.v_X0_27795, async function () {
        scope.v_D_27646.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.dt(), async function () {
          let v_t_28866 = 0;
          await new Promise(v_t_28869 => scope.v_Te_27911.Ai(scope.v_Ue_28209("loginAccessCodeMode"), scope.v_ei_27773, 1500, v_t_28869)), v_d_28802(v_l_28799), v_u_28793.e8(0, void 0, 25), scope.menuSystem.dt();
          for (const v_n_28870 of [["exit", "Cancel", 0, 16, scope.v_si_27792, v_e_28868]]) scope.menuSystem.vt(v_n_28870[0], v_n_28870[1], v_n_28870[2], v_n_28870[3], v_n_28870[4], !1, !1, !1, "", v_n_28870[5]);
          await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(v_e_28868, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti();
          var v_i_28867 = await scope.v_D_27646.R9();
          if (v_i_28867 !== scope.v_Ts_28004) if (v_i_28867 === scope.v_Is_28005) await new Promise(v_t_28871 => scope.v_Te_27911.Ai(scope.v_Ue_28209("amReaderErrorFatal"), scope.v_N0_27771 | scope.v_U0_27775, 1500, v_t_28871)), v_e_28868();else {
            v_u_28793.e8(1, void 0, 10), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.menuSystem.dt(), v_t_28866++, v_d_28802(v___28800), v_u_28793.lt.yk(50).Wt = scope.v_Rs_28007.E9(v_i_28867), v_u_28793.e8(2, void 0, 10);
            for (const v_r_28872 of [["exit", "Exit", 0, 16, scope.v_W0_27791, v_e_28868]]) scope.menuSystem.vt(v_r_28872[0], v_r_28872[1], v_r_28872[2], v_r_28872[3], v_r_28872[4], !1, !1, !1, "", v_r_28872[5]);
            await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(v_e_28868, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti();
          }
          async function v_e_28868() {
            switch (scope.v_D_27646.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), v_t_28866) {
              case 0:
                v_u_28793.e8(1, void 0, 10);
                break;
              case 1:
                v_u_28793.e8(3, void 0, 10);
            }
            scope.menuSystem.dt(), await scope.renderer.C7(scope.v_Ge_28204(30)), v_b_28810(), scope.v_N1_27904.T0(!0);
          }
        }();
      }]]) scope.menuSystem.vt(v_n_28865[0], v_n_28865[1], v_n_28865[2], v_n_28865[3], v_n_28865[4], !1, !1, !1, "", v_n_28865[5]);
      for (await scope.renderer.C7(scope.v_Ge_28204(30)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(() => {
        scope.v_D_27646.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), v_u_28793.e8(9, void 0, 10), scope.menuSystem.dt(), scope.renderer.W6(() => {
          v_b_28810(), scope.v_N1_27904.T0(!0);
        }, scope.v_Ge_28204(30));
      }, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti();;) {
        var v_e_28864 = v_i_28863 || (await scope.v_D_27646.R9());
        if (v_i_28863 = void 0, v_e_28864 === scope.v_Ts_28004) return;
        if (v_e_28864 !== scope.v_Is_28005) {
          scope.v_D_27646.C9(), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await scope.renderer.C7(scope.v_Ge_28204(15)), scope.menuSystem.dt(), v_p_28808(v_e_28864);
          break;
        }
        await new Promise(v_t_28873 => scope.v_Te_27911.Ai(scope.v_Ue_28209("amReaderErrorFatal"), scope.v_N0_27771 | scope.v_U0_27775, 1500, v_t_28873));
      }
    }
  }
  function v_b_28810() {
    scope.renderer._i("login"), scope.v_O1_27910.ii();
  }
  return {
    ue: function (v_e_28874) {
      scope.v_Le_28076([v_i_28875 => {
        scope.languagePackages.it("ui/login.rsb", function (v_t_28876) {
          v_t_28876 ? (v_t_28876 = new scope.v_Dl_28181(v_t_28876), scope.renderer.nt(v_t_28876.rt(scope.renderer.p5()), v_t_28877 => {
            v_u_28793 = v_t_28877, v_f_28794 = v_u_28793.lt.yk(0), v_n_28795 = v_u_28793.lt.yk(21), v_s_28796 = v_u_28793.lt.yk(23), v_a_28797 = v_u_28793.lt.yk(26), v_o_28798 = v_u_28793.lt.yk(36), v_l_28799 = v_u_28793.lt.yk(42), v___28800 = v_u_28793.lt.yk(47), v_h_28801 = v_u_28793.lt.yk(52), scope.v_Me_28078(v_i_28875);
          })) : v_e_28874();
        });
      }, v_t_28878 => {
        scope.v_Fe_28101(v_e_28874);
      }]);
    },
    T0: function (v_i_28879, v_e_28880) {
      scope.v_Le_28076([v_i_28881 => {
        scope.v_O1_27910.ti("Login"), v_u_28793.Jt = !1, scope.renderer.ut("login", v_u_28793, 20, v_t_28882 => {
          scope.v_Me_28078(v_i_28881);
        });
      }, v_t_28883 => {
        v_e_28880 ? v_p_28808() : v_k_28809(v_i_28879);
      }]);
    }
  };
}
