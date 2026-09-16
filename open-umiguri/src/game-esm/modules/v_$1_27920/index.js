// 模块: v_$1_27920
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_$1_27920(scope) {
  const v_d_29311 = 10,
    v_v_29312 = 11,
    v_w_29313 = 12,
    v_g_29314 = 13;
  function v_m_29315() {
    this.Ei = "", this.Fi = 0, this.Bi = [], this.Mi = 0, this.Ri = 0;
  }
  function v_p_29316() {
    this.ze = [null, null], this.Pi = 0, this.Di = !1, this.Ae = "";
  }
  function v_e_29317() {
    this.Gi = !1, this.ji = 0, this.Ni = 0, this.Hi = !1, this.Ui = !1, this.Vi = !1, this.Ee = void 0;
  }
  let v_o_29318 = void 0,
    v_c_29319 = void 0,
    v_u_29320 = void 0,
    v_r_29321 = void 0,
    v_f_29322 = {
      Oi: void 0,
      Ji: void 0,
      Wi: void 0,
      Ki: void 0,
      zi: void 0,
      Xi: void 0,
      Zi: void 0,
      Yi: void 0,
      $i: void 0,
      qi: void 0,
      Qi: void 0,
      en: void 0,
      BI: void 0,
      bk: void 0,
      Sk: void 0
    },
    v_k_29323 = {},
    v___29324 = [],
    v_b_29325 = [],
    v_h_29326 = new v_e_29317();
  function v_l_29327() {
    return v_h_29326.Ui || !!v_h_29326.Vi;
  }
  function v_y_29328(v_t_29340) {
    var v_i_29341,
      v_e_29342 = v_b_29325[v_h_29326.ji].Bi,
      v_t_29340 = scope.mathMin(scope.mathMax(v_t_29340, 0), v_e_29342.length - 1);
    v_t_29340 !== v_h_29326.Ni && (v_h_29326.Ui = !0, v_i_29341 = v_h_29326.Ni, v_h_29326.Ni = v_t_29340, v_C_29334(0, v_e_29342[v_i_29341], v_h_29326.Ni, v_e_29342[v_h_29326.Ni]), v_a_29331(scope.v_ui_27806), v_o_29318.e8(10), scope.renderer.W6(() => {
      v_h_29326.Ui = !1;
    }, 100));
  }
  function v_S_29329(v_t_29343, v_i_29344) {
    v_l_29327() || v_h_29326.ji === v_t_29343 || v_t_29343 < 0 || v_t_29343 >= v_b_29325.length || (v_h_29326.Ui = !0, v_h_29326.ji = v_t_29343, v_h_29326.Ni = 0, v_o_29318.e8(2), v_o_29318.e8(1), v_n_29332(v_i_29344), scope.renderer.W6(function () {
      var v_e_29345 = v_b_29325[v_h_29326.ji].Bi;
      for (let v_i_29346 = 0; v_i_29346 < v_e_29345.length; ++v_i_29346) for (let v_t_29347 = 0; v_t_29347 < 2; ++v_t_29347) v_e_29345[v_i_29346].ze[v_t_29347].Be = !1;
      v_a_29331(scope.v_gi_27815), v_o_29318.e8(3), v_C_29334(0, void 0, v_h_29326.Ni, v_e_29345[v_h_29326.Ni]), scope.renderer.W6(function () {
        v_h_29326.Ui = !1;
      }, scope.v_Ge_28204(6));
    }, scope.v_Ge_28204(6)));
  }
  function v_A_29330(v_r_29348, v_s_29349) {
    if (!v_l_29327()) {
      let v_t_29350 = null,
        v_i_29351 = 0,
        v_e_29352 = v_b_29325[v_h_29326.ji].Bi,
        v_n_29353 = v_h_29326.Ni;
      if (v_r_29348) {
        for (v_i_29351 = v_h_29326.Ni + 1; v_i_29351 < v_e_29352.length; ++v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
          v_t_29350 = v_i_29351;
          break;
        }
        if (null === v_t_29350) for (v_i_29351 = 0; v_i_29351 < v_h_29326.Ni; ++v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
          v_t_29350 = v_i_29351;
          break;
        }
      } else {
        for (v_i_29351 = v_h_29326.Ni - 1; 0 <= v_i_29351; --v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
          v_t_29350 = v_i_29351;
          break;
        }
        if (null === v_t_29350) for (v_i_29351 = v_e_29352.length - 1; v_i_29351 > v_h_29326.Ni; --v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
          v_t_29350 = v_i_29351;
          break;
        }
      }
      null !== v_t_29350 && (v_h_29326.Ui = !0, v_a_29331(v_r_29348 ? scope.v_ft_27812 : scope.v_ut_27811), v_o_29318.e8(9), scope.renderer.W6(() => {
        for (let v_i_29354 = 0; v_i_29354 < v_e_29352.length; ++v_i_29354) for (let v_t_29355 = 0; v_t_29355 < 2; ++v_t_29355) v_e_29352[v_i_29354].ze[v_t_29355].Be = !1;
        v_h_29326.Ni = v_t_29350, v_a_29331(v_r_29348 ? scope.v_ut_27811 : scope.v_ft_27812), scope.renderer.W6(() => {
          v_a_29331(), v_o_29318.e8(8), v_o_29318.e8(10), v_C_29334(v_n_29353, v_e_29352[v_n_29353], v_h_29326.Ni, v_e_29352[v_h_29326.Ni]), v_T_29335(), scope.renderer.W6(() => {
            v_h_29326.Ui = !1;
          }, 167);
        }, 167);
      }, 167));
    }
  }
  function v_a_29331(v_t_29356) {
    v_c_29319.tn(), v_u_29320.tn();
    var v_e_29357,
      v_n_29358,
      v_r_29359 = v_b_29325[v_h_29326.ji].Bi;
    let v_s_29360 = 0;
    var v_i_29361,
      v_a_29362 = v_r_29359[v_h_29326.Ni].Pi,
      v_o_29363 = void 0 !== v_t_29356 && (v_t_29356 & scope.v_ft_27812 || v_t_29356 & scope.v_ut_27811);
    for (let v_i_29365 = -5; v_i_29365 < 6; ++v_i_29365) if (!((v_e_29357 = v_i_29365 + v_h_29326.Ni) < 0 || v_r_29359.length <= v_e_29357)) {
      0 === v_i_29365 ? v_s_29360 = 0 : (v_s_29360 = 100 * (v_r_29359[v_e_29357].Pi - v_a_29362), v_s_29360 += 12 * (0 < v_s_29360 ? 1 : -1)), v_o_29363 && (v_t_29356 & scope.v_ft_27812 ? v_s_29360 -= 200 : v_s_29360 += 200);
      for (let v_t_29366 = 0; v_t_29366 < 2; ++v_t_29366) !1 === (v_n_29358 = v_r_29359[v_e_29357].ze[v_t_29366]).Be && v_n_29358.nn(), !v_o_29363 || -5 !== v_i_29365 && 5 !== v_i_29365 ? v_n_29358.Be = !0 : v_n_29358.Be = !1, (0 === v_i_29365 ? v_u_29320 : v_c_29319).Ze(v_n_29358), v_n_29358.rn(scope.v_Vo_28136, scope.v_jo_28134, v_o_29363 ? 10 : 6, 0), v_n_29358.rn(scope.v_Wo_28137, scope.v_jo_28134, v_o_29363 ? 10 : 6, 0), v_n_29358.$e(.577350269 * v_s_29360, v_s_29360);
      0 !== v_i_29365 || v_o_29363 ? (v_r_29359[v_e_29357].ze[0].rn(scope.v_Ko_28140, scope.v_Oo_28135, 6, 0), v_r_29359[v_e_29357].ze[0].an(0), v_r_29359[v_e_29357].ze[1].rn(scope.v_Ko_28140, scope.v_Oo_28135, 3, 6), v_r_29359[v_e_29357].ze[1].an(1)) : (v_r_29359[v_e_29357].ze[0].rn(scope.v_Ko_28140, scope.v_Oo_28135, 3, 6), v_r_29359[v_e_29357].ze[0].an(1), v_r_29359[v_e_29357].ze[1].rn(scope.v_Ko_28140, scope.v_Oo_28135, 6, 0), v_r_29359[v_e_29357].ze[1].an(0));
    }
    var v_l_29364 = v_b_29325[v_h_29326.ji].Bi;
    0 < v_l_29364.length ? (v_f_29322.Wi.Wt = scope.mathMin(scope.mathMax(v_h_29326.Ni + 1, 1), 9999).toString(), v_f_29322.Ki.Wt = "S" + scope.mathMin(scope.mathMax(v_l_29364.length, 0), 9999).toString()) : (v_f_29322.Wi.Wt = "0", v_f_29322.Ki.Wt = "S0"), 0 < v_l_29364.length ? (v_i_29361 = scope.mathMax(1 / v_l_29364.length, .04), v_f_29322.zi.Be = !0, v_f_29322.zi.Oe[0] = v_i_29361, 1 === v_l_29364.length ? v_f_29322.zi.on[0] = 0 : v_f_29322.zi.on[0] = v_h_29326.Ni / (v_l_29364.length - 1) * (1 - v_i_29361) * 690) : v_f_29322.zi.Be = !1;
  }
  function v_n_29332(v_i_29367, v_t_29368) {
    var v_e_29369,
      v_n_29370 = void 0 === v_t_29368 ? v_h_29326.ji : v_t_29368,
      v_r_29371 = void 0 !== v_i_29367 && v_i_29367 & scope.v_vi_27813 ? 5 : 10;
    let v_s_29372 = 0,
      v_a_29373 = 0;
    var v_o_29374,
      v_l_29375 = void 0 !== v_i_29367 && (v_i_29367 & scope.v_fi_27807 || v_i_29367 & scope.v__i_27808);
    for (let v_t_29376 = -4; v_t_29376 < 5; ++v_t_29376) v_t_29376 + v_n_29370 < 0 || v_t_29376 + v_n_29370 >= v_b_29325.length ? v___29324[v_t_29376 + 4].Be = !1 : (v_e_29369 = scope.v_qa_28086(v_t_29376 + v_n_29370, v_b_29325.length), 0 === v_t_29376 ? v_s_29372 = 0 : (v_s_29372 = 250 * v_t_29376, v_s_29372 += 178 * (0 < v_s_29372 ? 1 : -1)), v_l_29375 && (0 === (v_o_29374 = v_t_29376 + (v_i_29367 & scope.v_fi_27807 ? -1 : 1)) ? v_a_29373 = 0 : (v_a_29373 = 250 * v_o_29374, v_a_29373 += 178 * (0 < v_a_29373 ? 1 : -1))), (v_o_29374 = v___29324[v_t_29376 + 4]).Be = !0, v_o_29374.We[0].Je = "catPanelCategory", v_o_29374.nn(), v_o_29374.rn(scope.v_Xo_28138, scope.v_jo_28134, v_r_29371, 0), v_o_29374.rn(scope.v_zo_28139, scope.v_jo_28134, v_r_29371, 0), v_o_29374.rn(scope.v_Vo_28136, scope.v_Ho_28132, v_r_29371, 0), v_l_29375 && (v_o_29374.$e(v_a_29373), v_t_29376 + (v_i_29367 & scope.v_fi_27807 ? -1 : 1) === 0 ? v_o_29374.ln(1, 1) : v_o_29374.ln(.7, .7)), v_o_29374.Be = !0, v_o_29374.We[1].Wt = v_b_29325[v_e_29369].Ei, 0 === v_t_29376 && v_o_29374.Kt(), v_o_29374.$e(v_s_29372), 0 === v_t_29376 ? v_o_29374.ln(1, 1) : v_o_29374.ln(.7, .7));
  }
  function v_x_29333(v_t_29377, v_i_29378) {
    v_l_29327() && !v_i_29378 || (v_h_29326.Ui = !0, v_f_29322.Oi.Be = !0, v_f_29322.Ji.Be = !0, v_t_29377 ? v_h_29326.Hi === v_t_29377 || v_i_29378 ? (v_f_29322.Oi.Be = !1, v_o_29318.e8(4), v_h_29326.Ui = !1) : (v_o_29318.e8(5), scope.renderer.W6(() => {
      v_f_29322.Oi.Be = !1, v_h_29326.Ui = !1, v_o_29318.e8(4);
    }, 26 / 60 * 1e3)) : v_h_29326.Hi === v_t_29377 || v_i_29378 ? (v_f_29322.Ji.Be = !1, v_o_29318.e8(4), v_h_29326.Ui = !1) : (v_o_29318.e8(6), scope.renderer.W6(() => {
      v_f_29322.Ji.Be = !1, v_h_29326.Ui = !1, v_o_29318.e8(4);
    }, 26 / 60 * 1e3)), v_h_29326.Hi = v_t_29377);
  }
  function v_C_29334(v_t_29379, v_i_29380, v_e_29381, v_n_29382) {
    v_i_29380 && v_n_29382 && v_i_29380.ze[0] === v_n_29382.ze[0] || (v_i_29380 && (v_i_29380.ze[0].un = !0), v_n_29382 && (v_n_29382.ze[0].un = !1, v_n_29382.ze[0].Kt())), v_P_29338();
  }
  function v_T_29335() {
    var v_t_29383 = v_b_29325[v_h_29326.ji];
    if (v_h_29326.Hi ? (scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", !1), scope.menuSystem.wt("nextGroup", !1), scope.menuSystem.wt("startCatMode", !1), scope.menuSystem.wt("endCatMode", !0), scope.menuSystem.wt("backMusicSelect", !1), scope.menuSystem.wt("changeDown", !1), scope.menuSystem.wt("changeUp", !1), scope.menuSystem.kt("left", v_h_29326.ji <= 0), scope.menuSystem.kt("right", v_h_29326.ji >= v_b_29325.length - 1)) : (scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", v_t_29383.Fi !== v_g_29314), scope.menuSystem.wt("nextGroup", !0), scope.menuSystem.wt("startCatMode", !0), scope.menuSystem.wt("endCatMode", !1), scope.menuSystem.wt("backMusicSelect", !0), scope.menuSystem.wt("changeDown", v_t_29383.Fi === v_g_29314), scope.menuSystem.wt("changeUp", v_t_29383.Fi === v_g_29314), scope.menuSystem.kt("left", !1), scope.menuSystem.kt("right", !1)), scope.menuSystem.kt("enter", v_t_29383.Mi === v_h_29326.Ni), scope.menuSystem.kt("nextGroup", v_t_29383.Ri <= 1), v_t_29383.Fi === v_g_29314) {
      let v_i_29385 = v_t_29383.Bi[v_h_29326.Ni].Ae;
      var v_t_29383 = v_i_29385 >> 2,
        v_t_29383 = scope.v_Wr_27968.NI(v_t_29383),
        v_e_29384 = v_t_29383.findIndex(v_t_29386 => v_t_29386 === scope.handshake.On.iI[v_i_29385]);
      scope.menuSystem.kt("changeUp", v_e_29384 >= v_t_29383.length - 1), scope.menuSystem.kt("changeDown", v_e_29384 <= 0);
    }
    scope.menuSystem.Cv(!0);
  }
  function v_s_29336() {
    v_l_29327() || (v_h_29326.Hi ? scope.menuSystem.St("endCatMode") : scope.menuSystem.St("backMusicSelect"));
  }
  function v_I_29337(v_t_29387) {
    if (!v_l_29327()) {
      var v_i_29388 = v_b_29325[v_h_29326.ji],
        v_e_29389 = v_i_29388.Bi;
      switch (v_t_29387) {
        case "left":
          v_h_29326.Hi && 0 <= v_h_29326.ji ? (scope.v_Ae_27892.dn("move_cursor"), v_S_29329(v_h_29326.ji - 1, scope.v_fi_27807)) : (scope.v_Ae_27892.dn("move_cursor"), v_h_29326.Ni <= 0 ? v_A_29330(!1, !0) : v_y_29328(v_h_29326.Ni - 1));
          break;
        case "right":
          v_h_29326.Hi && v_h_29326.ji < v_b_29325.length ? (scope.v_Ae_27892.dn("move_cursor"), v_S_29329(v_h_29326.ji + 1, scope.v__i_27808)) : (scope.v_Ae_27892.dn("move_cursor"), v_h_29326.Ni >= v_e_29389.length - 1 ? v_A_29330(!0, !0) : v_y_29328(v_h_29326.Ni + 1));
          break;
        case "nextGroup":
          scope.v_Ae_27892.dn("move_cursor"), v_A_29330(!0);
          break;
        case "startCatMode":
          scope.v_Ae_27892.dn("menu_in"), v_x_29333(!0);
          break;
        case "endCatMode":
          scope.v_Ae_27892.dn("menu_back"), v_x_29333(!1);
          break;
        case "enter":
          v_e_29389[v_i_29388.Mi].ze[0].ot("listItemBadgeSetBg").Be = !1, v_e_29389[v_i_29388.Mi].ze[1].ot("listItemBadgeSetBg").Be = !1, v_i_29388.Mi = v_h_29326.Ni, v_e_29389[v_h_29326.Ni].ze[0].ot("listItemBadgeSetBg").Be = !0, v_e_29389[v_h_29326.Ni].ze[1].ot("listItemBadgeSetBg").Be = !0, v_o_29318.e8(11, v_e_29389[v_h_29326.Ni].ze[0]);
          var v_n_29390 = v_i_29388.Fi,
            v_r_29391 = v_e_29389[v_h_29326.Ni];
          switch (v_n_29390) {
            case v_d_29311:
              scope.playerInfoBoard.H4(v_r_29391.Ae), scope.handshake.On.$p = v_r_29391.Ae;
              break;
            case v_v_29312:
              scope.playerInfoBoard.V4(v_r_29391.Ae), scope.handshake.On.qp = v_r_29391.Ae;
              break;
            case v_w_29313:
              scope.handshake.On.Qp = v_r_29391.Ae, v_h_29326.Vi = !0, scope.menuSystem.Ct(!0), scope.v_Or_27965._n(scope.handshake.On.Qp, !0 === scope.handshake.On.tm, function (v_t_29394) {
                scope.v_Or_27965.dn("scene_user_box_confirm"), scope.menuSystem.Ct(!1), v_h_29326.Vi = !1;
              });
          }
          scope.v_Ae_27892.dn("set_skill");
          break;
        case "changeUp":
          if (scope.v_Ae_27892.dn("change_value"), v_i_29388.Fi === v_g_29314) {
            let v_i_29395 = v_e_29389[v_h_29326.Ni].Ae;
            var v_n_29390 = v_i_29395 >> 2,
              v_s_29392 = scope.v_Wr_27968.NI(v_n_29390),
              v_a_29393 = v_s_29392.findIndex(v_t_29396 => v_t_29396 === scope.handshake.On.iI[v_i_29395]);
            v_a_29393 < v_s_29392.length - 1 && (scope.handshake.On.iI[v_i_29395] = v_s_29392[v_a_29393 + 1], v_P_29338());
          }
          break;
        case "changeDown":
          if (scope.v_Ae_27892.dn("change_value"), v_i_29388.Fi === v_g_29314) {
            let v_i_29397 = v_e_29389[v_h_29326.Ni].Ae;
            v_s_29392 = v_i_29397 >> 2, v_a_29393 = scope.v_Wr_27968.NI(v_s_29392), v_s_29392 = v_a_29393.findIndex(v_t_29398 => v_t_29398 === scope.handshake.On.iI[v_i_29397]);
            1 <= v_s_29392 && (scope.handshake.On.iI[v_i_29397] = v_a_29393[v_s_29392 - 1], v_P_29338());
          }
          break;
        case "backMusicSelect":
          return scope.v_Ae_27892.dn("menu_back"), void async function () {
            scope.sceneManager._t(), scope.menuSystem._t(), scope.menuSystem.It(!1), v_o_29318.e8(7), await scope.renderer.C7(250), v_o_29318.i8(7), scope.renderer._i("userBox"), scope.v_O1_27910.ii(), await scope.v_Ns_28014.uA(), await scope.v_fo_28103(scope.v_Ge_28204(30)), await new Promise(v_t_29399 => scope.v_Te_27911.Ai(scope.v_Ue_28209("dataSaved"), scope.v_ei_27773 | scope.v_it_27778 | scope.v_et_27779, 1500, v_t_29399)), await scope.v_fo_28103(scope.v_Ge_28204(30)), v_h_29326.Ee && v_h_29326.Ee(scope.v_ii_27770);
          }();
      }
      v_T_29335();
    }
  }
  function v_P_29338() {
    let v_i_29400 = v_b_29325[v_h_29326.ji].Bi[v_h_29326.Ni];
    switch (v_b_29325[v_h_29326.ji].Fi) {
      case v_d_29311:
        v_f_29322.Yi.Be = !1, v_f_29322.Zi.Be = !1, v_f_29322.bk.Be = !1, v_f_29322.qi.Be = !0, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !1, v_f_29322.qi.Kt();
        var v_t_29401 = scope.v_be_27857.Hp.find(v_t_29402 => v_t_29402.id === v_i_29400.Ae);
        v_t_29401 ? (v_f_29322.qi.We[0].Je = "title" + scope.v_ot_27785[v_t_29401.rarity], v_f_29322.qi.We[1].Wt = v_t_29401.text, v_f_29322.$i.Wt = v_t_29401.desc) : (v_f_29322.qi.We[0].Je = "titleNormal", v_f_29322.qi.We[1].Wt = "Invalid", v_f_29322.$i.Wt = "Invalid");
        break;
      case v_v_29312:
        v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.bk.Be = !1, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !0, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !1;
        v_t_29401 = scope.v_be_27857.Up.find(v_t_29403 => v_t_29403.id === v_i_29400.Ae);
        v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", v_h_29326.Vi = !0, scope.v__o_28104("/nameplates/" + v_i_29400.Ae + "/image.png", function (v_t_29404) {
          var v_i_29405;
          v_h_29326.Vi = !1, v_t_29404 ? (v_t_29404 = glRuntime.Texture.fromImage(v_t_29404, {
            noFlip: !0
          }), v_i_29405 = "cache:userbox:nameplate", scope.renderer.Yt.Zt[v_i_29405] && scope.renderer.Yt.Zt[v_i_29405].free(), scope.renderer.Yt.Zt[v_i_29405] = v_t_29404, v_f_29322.Qi.zt = !0, v_f_29322.Qi.Xt = v_i_29405) : (v_f_29322.Qi.Xt = "txDummyNameplate", v_f_29322.Qi.zt = !1);
        })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.Qi.Xt = "txDummyNameplate", v_f_29322.Qi.zt = !1);
        break;
      case v_w_29313:
        v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !0, v_f_29322.BI.Be = !1;
        v_t_29401 = scope.v_be_27857.Vp.find(v_t_29406 => v_t_29406.id === v_i_29400.Ae);
        v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", "" === v_t_29401.notice ? v_f_29322.bk.Be = !1 : (v_f_29322.bk.Be = !0, v_f_29322.Sk.Wt = v_t_29401.notice), v_h_29326.Vi = !0, scope.v__o_28104("/voices/" + v_i_29400.Ae + "/image.png", function (v_t_29407) {
          var v_i_29408;
          v_h_29326.Vi = !1, v_t_29407 ? (v_t_29407 = glRuntime.Texture.fromImage(v_t_29407, {
            noFlip: !0
          }), v_i_29408 = "cache:userbox:voice", scope.renderer.Yt.Zt[v_i_29408] && scope.renderer.Yt.Zt[v_i_29408].free(), scope.renderer.Yt.Zt[v_i_29408] = v_t_29407, v_f_29322.en.zt = !0, v_f_29322.en.Xt = v_i_29408) : (v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1);
        })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1, v_f_29322.bk.Be = !1);
        break;
      case v_w_29313:
        v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !0, v_f_29322.BI.Be = !1;
        v_t_29401 = scope.v_be_27857.Vp.find(v_t_29409 => v_t_29409.id === v_i_29400.Ae);
        v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", "" === v_t_29401.notice ? v_f_29322.bk.Be = !1 : (v_f_29322.bk.Be = !0, v_f_29322.Sk.Wt = v_t_29401.notice), v_h_29326.Vi = !0, scope.v__o_28104("/voices/" + v_i_29400.Ae + "/image.png", function (v_t_29410) {
          var v_i_29411;
          v_h_29326.Vi = !1, v_t_29410 ? (v_t_29410 = glRuntime.Texture.fromImage(v_t_29410, {
            noFlip: !0
          }), v_i_29411 = "cache:userbox:voice", scope.renderer.Yt.Zt[v_i_29411] && scope.renderer.Yt.Zt[v_i_29411].free(), scope.renderer.Yt.Zt[v_i_29411] = v_t_29410, v_f_29322.en.zt = !0, v_f_29322.en.Xt = v_i_29411) : (v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1);
        })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1, v_f_29322.bk.Be = !1);
        break;
      case v_g_29314:
        v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !0;
        v_t_29401 = scope.v_Wr_27968.oI(scope.handshake.On.iI[v_i_29400.Ae]);
        v_t_29401 && scope.v_sl_28151(v_f_29322.BI, v_t_29401, 0), v_f_29322.Yi.Wt = "", v_f_29322.$i.Wt = "-", v_f_29322.bk.Be = !1;
    }
  }
  function v_R_29339() {
    if (!v_b_29325.length) {
      {
        var v_s_29412 = new v_m_29315();
        v_s_29412.Ei = scope.v_Ue_28209("userBoxTitle"), v_s_29412.Fi = v_d_29311;
        let v_t_29423 = -1,
          v_i_29424 = !0,
          v_e_29425 = 0,
          v_n_29426,
          v_r_29427;
        for (v_r_29427 of scope.v_be_27857.Hp) if (!(v_r_29427.rarity < 7)) {
          var v_a_29413 = new v_p_29316();
          for (let v_t_29428 = 0; v_t_29428 < 2; ++v_t_29428) 0 === v_t_29428 ? v_a_29413.ze[v_t_29428] = v_k_29323.listItemActiveTitle.Ve(!0) : 1 === v_t_29428 && (v_a_29413.ze[v_t_29428] = v_k_29323.listItemInactiveTitle.Ve(!0)), v_a_29413.ze[v_t_29428].Te = 0, v_a_29413.ze[v_t_29428].Qt = 0, v_a_29413.ze[v_t_29428].Be = !1, v_a_29413.ze[v_t_29428].ot("listItemLabel").Wt = v_r_29427.text, v_a_29413.ze[v_t_29428].ot("listItemTitleBg").Je = "title" + scope.v_ot_27785[v_r_29427.rarity], scope.handshake.On.$p !== v_r_29427.id ? v_a_29413.ze[v_t_29428].ot("listItemBadgeSetBg").Be = !1 : v_s_29412.Mi = v_s_29412.Bi.length, v_i_29424 && (0 === v_t_29428 ? v_n_29426 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29428 && (v_n_29426 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29426.Be = !0, v_n_29426.ot("listItemHeaderImg").Je = "vertListTabTitle", v_a_29413.ze[v_t_29428].hn(v_n_29426, v_a_29413.ze[v_t_29428].We[0]));
          v_i_29424 && ++v_e_29425, v_a_29413.Ae = v_r_29427.id, v_a_29413.Pi = v_e_29425, (v_a_29413.Di = v_i_29424) && ++v_s_29412.Ri, v_s_29412.Bi.push(v_a_29413), v_i_29424 = !1, ++v_e_29425;
        }
        for (v_r_29427 of scope.v_be_27857.Hp) if (!(7 <= v_r_29427.rarity)) {
          var v_o_29414 = new v_p_29316();
          v_i_29424 = v_t_29423 !== v_r_29427.rarity, v_t_29423 = v_r_29427.rarity;
          for (let v_t_29429 = 0; v_t_29429 < 2; ++v_t_29429) 0 === v_t_29429 ? v_o_29414.ze[v_t_29429] = v_k_29323.listItemActiveTitle.Ve(!0) : 1 === v_t_29429 && (v_o_29414.ze[v_t_29429] = v_k_29323.listItemInactiveTitle.Ve(!0)), v_o_29414.ze[v_t_29429].Te = 0, v_o_29414.ze[v_t_29429].Qt = 0, v_o_29414.ze[v_t_29429].Be = !1, v_o_29414.ze[v_t_29429].ot("listItemLabel").Wt = v_r_29427.text, v_o_29414.ze[v_t_29429].ot("listItemTitleBg").Je = "title" + scope.v_ot_27785[v_r_29427.rarity], scope.handshake.On.$p !== v_r_29427.id ? v_o_29414.ze[v_t_29429].ot("listItemBadgeSetBg").Be = !1 : v_s_29412.Mi = v_s_29412.Bi.length, v_i_29424 && (0 === v_t_29429 ? v_n_29426 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29429 && (v_n_29426 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29426.Be = !0, v_n_29426.ot("listItemHeaderImg").Je = "vertListTabTitle" + scope.v_ot_27785[v_r_29427.rarity], v_o_29414.ze[v_t_29429].hn(v_n_29426, v_o_29414.ze[v_t_29429].We[0]));
          v_i_29424 && ++v_e_29425, v_o_29414.Ae = v_r_29427.id, v_o_29414.Pi = v_e_29425, (v_o_29414.Di = v_i_29424) && ++v_s_29412.Ri, v_s_29412.Bi.push(v_o_29414), ++v_e_29425;
        }
        v_b_29325.push(v_s_29412);
      }
      {
        var v_r_29415 = new v_m_29315();
        v_r_29415.Ei = scope.v_Ue_28209("userBoxNameplate"), v_r_29415.Fi = v_v_29312;
        let v_i_29430 = !0,
          v_t_29431 = 0,
          v_e_29432,
          v_n_29433;
        for (v_n_29433 of scope.v_be_27857.Up) {
          var v_l_29416 = new v_p_29316();
          for (let v_t_29434 = 0; v_t_29434 < 2; ++v_t_29434) 0 === v_t_29434 ? v_l_29416.ze[v_t_29434] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29434 && (v_l_29416.ze[v_t_29434] = v_k_29323.listItemInactive.Ve(!0)), v_l_29416.ze[v_t_29434].Te = 0, v_l_29416.ze[v_t_29434].Qt = 0, v_l_29416.ze[v_t_29434].Be = !1, v_l_29416.ze[v_t_29434].ot("listItemLabel").Wt = v_n_29433.text, scope.handshake.On.qp !== v_n_29433.id ? v_l_29416.ze[v_t_29434].ot("listItemBadgeSetBg").Be = !1 : v_r_29415.Mi = v_r_29415.Bi.length, v_i_29430 && (0 === v_t_29434 ? v_e_29432 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29434 && (v_e_29432 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_e_29432.Be = !0, v_e_29432.ot("listItemHeaderImg").Je = "vertListTabNameplate", v_l_29416.ze[v_t_29434].hn(v_e_29432, v_l_29416.ze[v_t_29434].We[0]));
          v_i_29430 && ++v_t_29431, v_l_29416.Ae = v_n_29433.id, v_l_29416.Pi = v_t_29431, (v_l_29416.Di = v_i_29430) && ++v_r_29415.Ri, v_r_29415.Bi.push(v_l_29416), ++v_t_29431, v_i_29430 = !1;
        }
        v_b_29325.push(v_r_29415);
      }
      {
        var v_c_29417 = new v_m_29315();
        v_c_29417.Ei = scope.v_Ue_28209("userBoxVoice"), v_c_29417.Fi = v_w_29313;
        let v_i_29435 = !0,
          v_t_29436 = 0,
          v_e_29437,
          v_n_29438;
        for (v_n_29438 of scope.v_be_27857.Vp) {
          var v_u_29418 = new v_p_29316();
          for (let v_t_29439 = 0; v_t_29439 < 2; ++v_t_29439) 0 === v_t_29439 ? v_u_29418.ze[v_t_29439] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29439 && (v_u_29418.ze[v_t_29439] = v_k_29323.listItemInactive.Ve(!0)), v_u_29418.ze[v_t_29439].Te = 0, v_u_29418.ze[v_t_29439].Qt = 0, v_u_29418.ze[v_t_29439].Be = !1, v_u_29418.ze[v_t_29439].ot("listItemLabel").Wt = v_n_29438.text, scope.handshake.On.Qp !== v_n_29438.id ? v_u_29418.ze[v_t_29439].ot("listItemBadgeSetBg").Be = !1 : v_c_29417.Mi = v_c_29417.Bi.length, v_i_29435 && (0 === v_t_29439 ? v_e_29437 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29439 && (v_e_29437 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_e_29437.Be = !0, v_e_29437.ot("listItemHeaderImg").Je = "vertListTabVoice", v_u_29418.ze[v_t_29439].hn(v_e_29437, v_u_29418.ze[v_t_29439].We[0]));
          v_i_29435 && ++v_t_29436, v_u_29418.Ae = v_n_29438.id, v_u_29418.Pi = v_t_29436, (v_u_29418.Di = v_i_29435) && ++v_c_29417.Ri, v_c_29417.Bi.push(v_u_29418), ++v_t_29436, v_i_29435 = !1;
        }
        v_b_29325.push(v_c_29417);
      }
      {
        var v_f_29419,
          v___29420 = new v_m_29315(),
          v_i_29421 = (v___29420.Ei = "チャット", v___29420.Fi = v_g_29314, [[scope.v_bi_27819, "プレイヤー募集中"], [scope.v_t1_27820, "リザルト画面"]]);
        let v_e_29440 = !1,
          v_t_29441 = 0,
          v_n_29442;
        for (v_f_29419 of v_i_29421) for (let v_i_29443 = 0; v_i_29443 < 4; ++v_i_29443) {
          var v_h_29422 = new v_p_29316();
          for (let v_t_29444 = 0; v_t_29444 < 2; ++v_t_29444) 0 === v_t_29444 ? v_h_29422.ze[v_t_29444] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29444 && (v_h_29422.ze[v_t_29444] = v_k_29323.listItemInactive.Ve(!0)), v_h_29422.ze[v_t_29444].Te = 0, v_h_29422.ze[v_t_29444].Qt = 0, v_h_29422.ze[v_t_29444].Be = !1, v_h_29422.ze[v_t_29444].ot("listItemLabel").Wt = v_f_29419[1] + "／チャット" + (v_i_29443 + 1), v_h_29422.ze[v_t_29444].ot("listItemBadgeSetBg").Be = !1, v_e_29440 && (0 === v_t_29444 ? v_n_29442 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29444 && (v_n_29442 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29442.Be = !0, v_n_29442.ot("listItemHeaderImg").Je = "vertListTabVoice", v_h_29422.ze[v_t_29444].hn(v_n_29442, v_h_29422.ze[v_t_29444].We[0]));
          v_e_29440 && ++v_t_29441, v_h_29422.Ae = v_f_29419[0] + v_i_29443, v_h_29422.Pi = v_t_29441, (v_h_29422.Di = v_e_29440) && ++v___29420.Ri, v___29420.Bi.push(v_h_29422), ++v_t_29441, v_e_29440 = !1;
        }
        v_b_29325.push(v___29420);
      }
    }
  }
  return {
    ue: function (v_i_29445) {
      scope.v_Le_28076([v_n_29446 => {
        scope.languagePackages.it("ui/userBox.rsb", function (v_t_29447) {
          v_t_29447 ? (v_t_29447 = new scope.v_Dl_28181(v_t_29447), scope.renderer.nt(v_t_29447.rt(scope.renderer.p5()), v_t_29448 => {
            v_o_29318 = v_t_29448, v_c_29319 = v_t_29448.lt.yk(39), v_u_29320 = v_t_29448.lt.yk(42), v_r_29321 = v_t_29448.lt.yk(71), v_f_29322.Oi = v_t_29448.lt.yk(41), v_f_29322.Ji = v_t_29448.lt.yk(69), v_f_29322.Wi = v_t_29448.lt.yk(33), v_f_29322.Ki = v_t_29448.lt.yk(34), v_f_29322.zi = v_t_29448.lt.yk(37), v_f_29322.Xi = v_t_29448.lt.yk(36), v_f_29322.Zi = v_t_29448.lt.yk(47), v_f_29322.Yi = v_t_29448.lt.yk(60), v_f_29322.$i = v_t_29448.lt.yk(62), v_f_29322.qi = v_t_29448.lt.yk(52), v_f_29322.Qi = v_t_29448.lt.yk(55), v_f_29322.en = v_t_29448.lt.yk(56), v_f_29322.BI = v_t_29448.lt.yk(57), v_f_29322.bk = v_t_29448.lt.yk(48), v_f_29322.Sk = v_t_29448.lt.yk(51);
            var v_i_29449 = v_t_29448.lt.yk(72);
            for (let v_t_29451 = 0; v_t_29451 < v_i_29449.We.length; ++v_t_29451) v_i_29449.We[v_t_29451].Be = !1, v_k_29323[v_i_29449.We[v_t_29451].ct] = v_i_29449.We[v_t_29451];
            for (let v_t_29452 = 0; v_t_29452 < 9; ++v_t_29452) {
              var v_e_29450 = v_k_29323.catPanel.Ve(!0);
              v_e_29450.Te = 0, v_e_29450.Qt = 0, v_e_29450.We[1].Nd = 4 === v_t_29452, v___29324.push(v_e_29450), v_r_29321.Ze(v_e_29450);
            }
            scope.v_Me_28078(v_n_29446);
          })) : v_i_29445();
        });
      }, v_t_29453 => {
        scope.v_Fe_28101(v_i_29445);
      }]);
    },
    T0: function (v_t_29454) {
      scope.v_Le_28076([v_i_29455 => {
        scope.menuSystem.ft(), (v_h_29326 = new v_e_29317()).Ee = v_t_29454, v_h_29326.Gi = !0, v_o_29318.Jt = !1, scope.renderer.ut("userBox", v_o_29318, 60, v_t_29456 => {
          scope.v_Me_28078(v_i_29455);
        }), scope.v_O1_27910.ti("UserBox");
      }, v_t_29457 => {
        v_R_29339();
        for (let v_i_29458 = 0; v_i_29458 < v_b_29325[v_h_29326.ji].Bi.length; ++v_i_29458) for (let v_t_29459 = 0; v_t_29459 < 2; ++v_t_29459) v_b_29325[v_h_29326.ji].Bi[v_i_29458].ze[v_t_29459].Be = !1;
        v_a_29331(), v_n_29332(), v_P_29338();
        for (const v_i_29460 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, scope.v_W0_27791, !1, "enter"], ["nextGroup", "NextGroup", 10, 2, scope.v_X0_27795, !0, "down"], ["startCatMode", "ChangeCategory", 12, 2, scope.v_li_27796, !1, ""], ["endCatMode", "OkBack", 14, 2, scope.v_W0_27791, !1, ""], ["backMusicSelect", "BackMusicSelect", 14, 2, scope.v_si_27792, !1, ""], ["changeDown", "ChangeMinus", 6, 2, scope.v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, scope.v_X0_27795, !0, "up"]]) scope.menuSystem.vt(v_i_29460[0], v_i_29460[1], v_i_29460[2], v_i_29460[3], v_i_29460[4], v_i_29460[5], !1, !1, v_i_29460[6], function (v_t_29461, v_i_29462) {
          "down" === v_t_29461 && v_I_29337(this.Ae);
        });
        scope.menuSystem.yv(), v_T_29335(), scope.sceneManager.ft(new scope.v_M1_27898(v_s_29336, void 0)), v_o_29318.Jt = !0, v_o_29318.e8(4), v_o_29318.e8(0), scope.menuSystem.Ct(!0), scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
      }]);
    },
    Gi: () => v_h_29326.Gi
  };
}
