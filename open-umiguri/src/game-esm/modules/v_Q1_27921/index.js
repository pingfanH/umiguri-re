// 模块: v_Q1_27921
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Q1_27921(scope) {
  const v_s_29463 = [1, 2, 3, 4, 5, 6, 99];
  function v_a_29464() {
    this.ze = null, this.vn = void 0;
  }
  function v_o_29465() {
    this.Bi = [];
  }
  function v_e_29466() {
    this.Gi = !1, this.ji = 0, this.Ni = 0, this.Ui = !1, this.gn = !1, this.Ee = void 0;
  }
  let v_l_29467 = void 0,
    v_c_29468 = void 0,
    v_u_29469 = {
      Oi: void 0,
      Wi: void 0,
      Ki: void 0,
      zi: void 0,
      Xi: void 0,
      wn: void 0,
      pn: void 0,
      kn: void 0,
      bn: void 0,
      mn: void 0,
      Sn: void 0,
      xn: void 0,
      In: void 0,
      yn: void 0,
      Cn: void 0
    },
    v_f_29470 = {},
    v___29471 = [],
    v_h_29472 = new v_e_29466();
  function v_d_29473() {
    return v_h_29472.gn || !!v_h_29472.Ui;
  }
  function v_i_29474(v_t_29484) {
    var v_i_29485, v_e_29486;
    v_d_29473() || (v_i_29485 = v___29471[v_h_29472.ji], (v_t_29484 = scope.mathMin(scope.mathMax(v_t_29484, 0), v_i_29485.Bi.length - 1)) !== v_h_29472.Ni && (v_h_29472.Ui = !0, v_e_29486 = v_h_29472.Ni, v_h_29472.Ni = v_t_29484, v_w_29477(0, v_i_29485.Bi[v_e_29486], v_h_29472.Ni, v_i_29485.Bi[v_h_29472.Ni]), v_v_29476(scope.v_ui_27806), v_l_29467.e8(2), scope.renderer.W6(() => {
      v_h_29472.Ui = !1;
    }, 100)));
  }
  function v_n_29475(v_n_29487, v_r_29488) {
    if (!v_d_29473()) {
      let v_i_29489 = v_h_29472.ji,
        v_e_29490 = scope.mathMin(scope.mathMax(v_h_29472.ji + (v_n_29487 ? 1 : -1), 0), v___29471.length - 1);
      if (v_i_29489 !== v_e_29490) {
        v_h_29472.Ui = !0, v_v_29476(v_n_29487 ? scope.v_ft_27812 : scope.v_ut_27811), v_l_29467.e8(5);
        let v_t_29491 = v_h_29472.Ni;
        v_h_29472.ji = v_e_29490, v_h_29472.Ni = void 0 !== v_r_29488 ? v_r_29488 : v_n_29487 ? 0 : v___29471[v_e_29490].Bi.length - 1, scope.renderer.W6(() => {
          v_v_29476(scope.v_gi_27815), v_l_29467.e8(4), v_l_29467.e8(2), v_w_29477(v_t_29491, v___29471[v_i_29489].Bi[v_t_29491], v_h_29472.Ni, v___29471[v_e_29490].Bi[v_h_29472.Ni]), scope.renderer.W6(() => {
            v_h_29472.Ui = !1;
          }, 167);
        }, 167);
      }
    }
  }
  function v_v_29476(v_i_29492) {
    v_c_29468.tn();
    var v_e_29493;
    let v_n_29494 = 0;
    var v_t_29495,
      v_r_29496 = void 0 !== v_i_29492 && (v_i_29492 & scope.v_ft_27812 || v_i_29492 & scope.v_ut_27811),
      v_s_29497 = v___29471[v_h_29472.ji];
    for (let v_t_29499 = -5; v_t_29499 < 6; ++v_t_29499) (v_e_29493 = v_t_29499 + v_h_29472.Ni) < 0 || v_s_29497.Bi.length <= v_e_29493 || (0 === v_t_29499 ? v_n_29494 = 0 : (v_n_29494 = 182 * v_t_29499, v_n_29494 += 102 * (0 < v_n_29494 ? 1 : -1)), v_r_29496 && (v_i_29492 & scope.v_ft_27812 ? v_n_29494 -= v_i_29492 & scope.v_vi_27813 ? 250 : 500 : v_n_29494 += v_i_29492 & scope.v_vi_27813 ? 250 : 500), (!1 === (v_e_29493 = v_s_29497.Bi[v_e_29493].ze).Be || v_i_29492 & scope.v_gi_27815) && v_e_29493.nn(), !v_r_29496 || -5 !== v_t_29499 && 5 !== v_t_29499 ? v_e_29493.Be = !0 : v_e_29493.Be = !1, v_c_29468.Ze(v_e_29493), v_e_29493.rn(scope.v_Vo_28136, scope.v_jo_28134, v_r_29496 ? 10 : 6, 0), v_r_29496 ? (v_e_29493.rn(scope.v_Xo_28138, scope.v_Jo_28133, 6, 0), v_e_29493.rn(scope.v_zo_28139, scope.v_Jo_28133, 6, 0)) : (v_e_29493.rn(scope.v_Xo_28138, scope.v_jo_28134, 6, 0), v_e_29493.rn(scope.v_zo_28139, scope.v_jo_28134, 6, 0)), v_e_29493.$e(v_n_29494), v_r_29496 || 0 !== v_t_29499 ? v_e_29493.ln(.7, .7) : v_e_29493.ln(1, 1));
    var v_a_29498 = v___29471[v_h_29472.ji];
    0 < v_a_29498.Bi.length ? (v_u_29469.Wi.Wt = scope.mathMin(scope.mathMax(v_h_29472.Ni + 1, 1), 9999).toString(), v_u_29469.Ki.Wt = "S" + scope.mathMin(scope.mathMax(v_a_29498.Bi.length, 0), 9999).toString()) : (v_u_29469.Wi.Wt = "0", v_u_29469.Ki.Wt = "S0"), 0 < v_a_29498.Bi.length ? (v_t_29495 = scope.mathMax(1 / v_a_29498.Bi.length, .04), v_u_29469.zi.Be = !0, v_u_29469.zi.Oe[0] = v_t_29495, 1 === v_a_29498.Bi.length ? v_u_29469.zi.on[0] = 0 : v_u_29469.zi.on[0] = v_h_29472.Ni / (v_a_29498.Bi.length - 1) * (1 - v_t_29495) * 690) : v_u_29469.zi.Be = !1;
  }
  function v_w_29477(v_t_29500, v_i_29501, v_e_29502, v_n_29503) {
    v_i_29501 && v_n_29503 && v_i_29501.ze[0] === v_n_29503.ze[0] || (v_i_29501 && (v_i_29501.ze.un = !0), v_n_29503 && (v_n_29503.ze.un = !1, v_n_29503.ze.Kt())), v_p_29481();
  }
  function v_r_29478() {
    v_d_29473() || scope.menuSystem.St("backMusicSelect");
  }
  function v_g_29479() {
    scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.wt("prevGroup", !0), scope.menuSystem.wt("nextGroup", !0), scope.menuSystem.wt("backMusicSelect", !0), scope.menuSystem.wt("deleteRecord", v___29471[v_h_29472.ji].Bi.length), scope.menuSystem.kt("left", v_h_29472.ji <= 0 && v_h_29472.Ni <= 0), scope.menuSystem.kt("right", v_h_29472.ji >= v___29471.length - 1 && v_h_29472.Ni >= v___29471[v_h_29472.ji].Bi.length - 1), scope.menuSystem.kt("enter", 0 === v___29471[v_h_29472.ji].Bi.length), scope.menuSystem.kt("prevGroup", v_h_29472.ji <= 0), scope.menuSystem.kt("nextGroup", v_h_29472.ji >= v___29471.length - 1), scope.menuSystem.Cv(!0);
  }
  function v_m_29480(v_t_29504) {
    switch (v_t_29504) {
      case "left":
        scope.v_Ae_27892.dn("move_cursor"), v_h_29472.Ni <= 0 ? v_n_29475(!1) : v_i_29474(v_h_29472.Ni - 1, scope.v_ui_27806);
        break;
      case "right":
        scope.v_Ae_27892.dn("move_cursor"), v_h_29472.Ni >= v___29471[v_h_29472.ji].Bi.length - 1 ? v_n_29475(!0) : v_i_29474(v_h_29472.Ni + 1, scope.v_ui_27806);
        break;
      case "prevGroup":
        scope.v_Ae_27892.dn("move_cursor"), v_n_29475(!1, 0);
        break;
      case "nextGroup":
        scope.v_Ae_27892.dn("move_cursor"), v_n_29475(!0, 0);
        break;
      case "enter":
        return void scope.v_Te_27911.Ai(scope.v_Ue_28209("courseSelectConfirm"), scope.v_G0_27772, 0, function (v_i_29505) {
          if (v_i_29505 === scope.v_H0_27781 || v_i_29505 === scope.v_at_27784) {
            let v_t_29506 = null;
            v_i_29505 = v___29471[v_h_29472.ji];
            (v_t_29506 = 0 < v_i_29505.Bi.length ? v_i_29505.Bi[v_h_29472.Ni].vn : v_t_29506) && (v_t_29506._I() ? v_b_29483(v_t_29506) : scope.v_Te_27911.Ai(scope.v_Ue_28209("musicSelectNoSongsFound"), scope.v_N0_27771, 5e3, function (v_t_29507) {}));
          }
        });
      case "backMusicSelect":
        return scope.v_Ae_27892.dn("menu_back"), void v_b_29483(!1);
      case "deleteRecord":
        return void scope.v_Te_27911.Ai(scope.v_Ue_28209("musicSelectConfirmDeleteRecord"), scope.v_G0_27772, 0, function (v_t_29508) {
          v_t_29508 === scope.v_H0_27781 && (v_t_29508 = (v_t_29508 = v___29471[v_h_29472.ji]) ? v_t_29508.Bi[v_h_29472.Ni] : void 0) && (scope.v_Ns_28014.Uy(v_t_29508.vn.Ae), v_k_29482(), v_v_29476(), v_p_29481());
        });
    }
    v_g_29479();
  }
  function v_p_29481() {
    v_u_29469.kn.Je = v_u_29469.bn.Je = "bg" + v_s_29463[v_h_29472.ji];
    for (let v_t_29513 = 0; v_t_29513 < v_s_29463.length; ++v_t_29513) v_u_29469.yn.ot("classTab" + v_s_29463[v_t_29513]).Be = v_t_29513 === v_h_29472.ji;
    var v_t_29509 = v___29471[v_h_29472.ji];
    if (0 < v_t_29509.Bi.length) {
      let v_n_29514 = v_t_29509.Bi[v_h_29472.Ni].vn;
      v_u_29469.mn.Kt(), v_u_29469.Sn.Wt = v_n_29514.lf, v_u_29469.xn.Wt = v_n_29514.bP.toString(), v_u_29469.In.Wt = v_u_29469.In.Tn.An(scope.v_Tr_27949.Ln(v_n_29514));
      let v_r_29515, v_s_29516;
      for (let v_e_29517 = 0; v_e_29517 < v_u_29469.Cn.We.length; ++v_e_29517) {
        var v_a_29510 = v_n_29514.hI[v_e_29517].Fi;
        let v_t_29518 = null,
          v_i_29519 = 0;
        v_a_29510 === scope.v_yr_27944 && (v_t_29518 = scope.v_be_27857.Pp.find(v_t_29520 => v_t_29520.w0 === v_n_29514.hI[v_e_29517].ee), v_i_29519 = v_n_29514.hI[v_e_29517].te, v_t_29518) && (v_s_29516 = v_t_29518.meta[v_i_29519]);
        var v_o_29511 = (v_r_29515 = v_u_29469.Cn.We[v_e_29517]).ot("musicItemLevel"),
          v_l_29512 = v_r_29515.ot("musicItemLevelWe"),
          v_a_29510 = (v_t_29518 && v_s_29516 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_" + scope.v_Q0_27805[v_i_29519], scope.renderer.Yt.Zt["jkt:" + v_t_29518.w0] ? (v_r_29515.ot("musicItemJacket").zt = !0, v_r_29515.ot("musicItemJacket").Xt = "jkt:" + v_t_29518.w0) : (v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txDummyJacket"), v_r_29515.ot("musicItemTitle").Wt = v_t_29518.lf, v_r_29515.ot("musicItemLevelBg").Je = 4 !== v_i_29519 ? "panelPartLevel" : "panelPartLevelWe", 4 !== v_i_29519 ? (v_o_29511.Be = !0, v_l_29512.Be = !1, v_o_29511.ot("musicItemLevelNum").Wt = v_s_29516.k5.replace(/\+/g, ""), v_o_29511.ot("musicItemLevelPlus").Be = -1 !== v_s_29516.k5.indexOf("+")) : (v_o_29511.Be = !1, v_l_29512.Be = !0, v_l_29512.ot("musicItemWeLevelNum").Wt = "r".repeat(scope.v_Qa_28089(scope.v_Pe_28064(v_s_29516.k5), 1, 5)), v_l_29512.ot("musicItemWeAttr").Wt = v_s_29516.b5)) : v_a_29510 === scope.v_Sr_27945 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_RND0", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket", v_r_29515.ot("musicItemTitle").Wt = "", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.Be = !0, v_l_29512.Be = !1, v_o_29511.ot("musicItemLevelNum").Wt = v_n_29514.hI[v_e_29517].p9.replace(/\+/g, ""), v_o_29511.ot("musicItemLevelPlus").Be = -1 !== v_n_29514.hI[v_e_29517].p9.indexOf("+")) : (v_a_29510 === scope.v_Ar_27946 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_RND1", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket1", v_r_29515.ot("musicItemTitle").Wt = "", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.ot("musicItemLevelNum").Wt = "M") : (v_r_29515.ot("musicItemBg").Je = "musicFrame_BAS", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket", v_r_29515.ot("musicItemTitle").Wt = "(Not Found)", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.ot("musicItemLevelNum").Wt = "Q"), v_o_29511.ot("musicItemLevelPlus").Be = !1, v_o_29511.Be = !0, v_l_29512.Be = !1), scope.v_Ns_28014.gA(v_n_29514.Ae));
        v_u_29469.mn.yk(55).Be = v_a_29510.ni, (v_r_29515 = v_u_29469.mn.yk(56)).Je = "badge" + scope.rankLabel(v_a_29510.Sr / 3), v_r_29515.Be = v_a_29510.G4, v_r_29515 = v_u_29469.mn.yk(57), v_a_29510.B4 ? v_r_29515.Je = "badgeAj" : v_a_29510.R4 && (v_r_29515.Je = "badgeFc"), v_r_29515.Be = v_a_29510.G4 && (v_a_29510.B4 || v_a_29510.R4), v_u_29469.mn.yk(54).Wt = v_a_29510.Sr.toLocaleString("ja").replaceAll(",", "C");
      }
      v_u_29469.mn.Be = !0, v_u_29469.wn.Be = !0, v_u_29469.pn.Be = !0, v_u_29469.Oi.Be = !0;
    } else v_u_29469.mn.Be = !1, v_u_29469.wn.Be = !1, v_u_29469.pn.Be = !1, v_u_29469.Oi.Be = !1;
  }
  function v_k_29482() {
    v___29471 = [];
    for (let v_t_29525 = 0; v_t_29525 < v_s_29463.length; ++v_t_29525) v___29471.push(new v_o_29465());
    let v_i_29521;
    var v_e_29522;
    for (let v_t_29526 = 0; v_t_29526 < scope.v_be_27857.Gp.length; ++v_t_29526) {
      var v_n_29523 = v_s_29463.indexOf(scope.v_be_27857.Gp[v_t_29526].cls);
      for (v_i_29521 of scope.v_be_27857.Gp[v_t_29526].items) {
        (v_e_29522 = new v_a_29464()).vn = v_i_29521, v_e_29522.ze = v_f_29470.listItem.Ve(!0), v_e_29522.ze.ot("listItemBg").Je = "cousePanel" + v_i_29521.AP, v_e_29522.ze.ot("listItemTitle").Wt = v_i_29521.lf, v_e_29522.ze.ot("listItemBgDisabled").Be = !1, v_i_29521.hI[0].Fi === scope.v_yr_27944 && scope.renderer.Yt.Zt["jkt:" + v_i_29521.hI[0].ee] ? (v_e_29522.ze.ot("listItemJacket").zt = !0, v_e_29522.ze.ot("listItemJacket").Xt = "jkt:" + v_i_29521.hI[0].ee) : v_i_29521.hI[0].Fi === scope.v_Sr_27945 ? (v_e_29522.ze.ot("listItemJacket").zt = !1, v_e_29522.ze.ot("listItemJacket").Xt = "txRandomJacket") : v_i_29521.hI[0].Fi === scope.v_Ar_27946 && (v_e_29522.ze.ot("listItemJacket").zt = !1, v_e_29522.ze.ot("listItemJacket").Xt = "txRandomJacket1");
        var v_r_29524 = scope.v_Ns_28014.gA(v_i_29521.Ae);
        let v_t_29527;
        v_e_29522.ze.ot("listItemBadgeClear").Be = v_r_29524.ni, (v_t_29527 = v_e_29522.ze.ot("listItemBadgeRank")).Je = "badgeSm" + scope.rankLabel(v_r_29524.Sr / 3), v_t_29527.Be = v_r_29524.G4, v_t_29527 = v_e_29522.ze.ot("listItemBadgeFc"), v_r_29524.B4 ? v_t_29527.Je = "badgeSmAj" : v_r_29524.R4 && (v_t_29527.Je = "badgeSmFc"), v_t_29527.Be = v_r_29524.G4 && (v_r_29524.B4 || v_r_29524.R4), v___29471[v_n_29523].Bi.push(v_e_29522);
      }
    }
  }
  function v_b_29483(v_t_29528) {
    v_h_29472.Ui = !0, scope.menuSystem._t(), scope.menuSystem.It(!1), v_l_29467.e8(3), scope.renderer.W6(() => {
      v_h_29472.Gi = !1, scope.renderer._i("courseSelect"), scope.v_O1_27910.ii(), scope.renderer.W6(() => {
        v_h_29472.Ee && v_h_29472.Ee(scope.v_ii_27770, v_t_29528), scope.sceneManager._t();
      }, 500);
    }, 250);
  }
  return {
    ue: function (v_i_29529) {
      scope.v_Le_28076([v_e_29530 => {
        scope.languagePackages.it("ui/courseSelect.rsb", function (v_t_29531) {
          v_t_29531 ? (v_t_29531 = new scope.v_Dl_28181(v_t_29531), scope.renderer.nt(v_t_29531.rt(scope.renderer.p5()), v_t_29532 => {
            v_l_29467 = v_t_29532, v_c_29468 = v_t_29532.lt.yk(22), v_u_29469.Oi = v_t_29532.lt.yk(21), v_u_29469.Wi = v_t_29532.lt.yk(17), v_u_29469.Ki = v_t_29532.lt.yk(18), v_u_29469.zi = v_t_29532.lt.yk(16), v_u_29469.Xi = v_t_29532.lt.yk(15), v_u_29469.wn = v_t_29532.lt.yk(26), v_u_29469.pn = v_t_29532.lt.yk(24), v_u_29469.kn = v_t_29532.lt.yk(47), v_u_29469.bn = v_t_29532.lt.yk(50), v_u_29469.mn = v_t_29532.lt.yk(52), v_u_29469.Sn = v_t_29532.lt.yk(98), v_u_29469.xn = v_t_29532.lt.yk(59), v_u_29469.In = v_t_29532.lt.yk(99), v_u_29469.yn = v_t_29532.lt.yk(38), v_u_29469.Cn = v_t_29532.lt.yk(61);
            var v_i_29533 = v_t_29532.lt.yk(100);
            for (let v_t_29534 = 0; v_t_29534 < v_i_29533.We.length; ++v_t_29534) v_i_29533.We[v_t_29534].Be = !1, v_f_29470[v_i_29533.We[v_t_29534].ct] = v_i_29533.We[v_t_29534];
            scope.v_Me_28078(v_e_29530);
          })) : v_i_29529();
        });
      }, v_t_29535 => {
        scope.v_Fe_28101(v_i_29529);
      }]);
    },
    T0: function (v_t_29536) {
      scope.v_Le_28076([v_i_29537 => {
        scope.menuSystem.ft(), (v_h_29472 = new v_e_29466()).Ee = v_t_29536, v_h_29472.Gi = !0, v_l_29467.Jt = !1, scope.renderer.ut("courseSelect", v_l_29467, 60, v_t_29538 => {
          scope.v_Me_28078(v_i_29537);
        }), scope.v_O1_27910.ti("CourseSelect");
      }, v_t_29539 => {
        v_k_29482(), v_v_29476(), v_p_29481();
        for (const v_i_29540 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, scope.v_W0_27791, !1, "enter"], ["prevGroup", "ClassMinus", 10, 2, scope.v_X0_27795, !0, "up"], ["nextGroup", "ClassPlus", 12, 2, scope.v_X0_27795, !0, "down"], ["backMusicSelect", "BackMusicSelect", 14, 2, scope.v_si_27792, !1, ""], ["deleteRecord", "DeleteRecord", 0, 0, "", !1, "f8"]]) scope.menuSystem.vt(v_i_29540[0], v_i_29540[1], v_i_29540[2], v_i_29540[3], v_i_29540[4], v_i_29540[5], !1, !1, v_i_29540[6], function (v_t_29541, v_i_29542) {
          "down" === v_t_29541 && v_m_29480(this.Ae);
        });
        scope.menuSystem.yv(), scope.renderer.W6(function () {
          scope.v_Me_28078(v_t_29539);
        }, scope.v_Ge_28204(30));
      }, v_t_29543 => {
        v_g_29479(), scope.sceneManager.ft(new scope.v_M1_27898(v_r_29478, void 0)), v_l_29467.Jt = !0, v_l_29467.e8(0), v_l_29467.e8(2), v_l_29467.e8(1), scope.menuSystem.Ct(!0), scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
      }]);
    },
    Gi: () => v_h_29472.Gi
  };
}
