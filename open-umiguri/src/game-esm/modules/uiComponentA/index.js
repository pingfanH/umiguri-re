// 模块: uiComponentA
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createUiComponentA(scope) {
  const v_e_29544 = 0,
    v_n_29545 = 1,
    v_r_29546 = "cache:charaLg:";
  function v_c_29547() {
    this.ze = [null, null], this.Pi = 0, this.Di = !1, this.En = "";
  }
  function v_o_29548() {
    this.n1 = v_e_29544, this.Fn = [], this.Bn = void 0, this.Mn = void 0, this.Gi = !1, this.Ni = 0, this.Mi = 0, this.Ui = !1, this.Ee = void 0;
  }
  let v_u_29549 = void 0,
    v_l_29550 = void 0,
    v_f_29551 = void 0,
    v___29552 = {
      Oi: void 0,
      Wi: void 0,
      Ki: void 0,
      zi: void 0,
      Xi: void 0,
      Rn: void 0,
      fb: void 0,
      B5: void 0,
      _b: void 0,
      Pn: void 0,
      Dn: void 0
    },
    v_h_29553 = {},
    v_d_29554 = [],
    v_v_29555 = new v_o_29548();
  function v_s_29556() {
    scope.v_el_28148(v_u_29549.rsbTree.elementByIndex(70), v_v_29555.Bn, !0);
  }
  function v_a_29557() {
    return !!v_v_29555.Ui;
  }
  function v_w_29558(v_t_29566) {
    var v_i_29567;
    v_a_29557() || (v_t_29566 = scope.mathMin(scope.mathMax(v_t_29566, 0), v_d_29554.length - 1)) !== v_v_29555.Ni && (v_v_29555.Ui = !0, v_i_29567 = v_v_29555.Ni, v_v_29555.Ni = v_t_29566, v_p_29561(0, v_d_29554[v_i_29567], v_v_29555.Ni, v_d_29554[v_v_29555.Ni]), v_m_29560(scope.v_ui_27806), v_u_29549.e8(7), scope.renderer.W6(() => {
      v_v_29555.Ui = !1;
    }, 100));
  }
  function v_g_29559(v_n_29568, v_r_29569) {
    if (!v_a_29557()) {
      let v_t_29570 = null,
        v_i_29571 = 0,
        v_e_29572 = v_v_29555.Ni;
      if (v_n_29568) {
        for (v_i_29571 = v_v_29555.Ni + 1; v_i_29571 < v_d_29554.length; ++v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
          v_t_29570 = v_i_29571;
          break;
        }
        if (null === v_t_29570) for (v_i_29571 = 0; v_i_29571 < v_v_29555.Ni; ++v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
          v_t_29570 = v_i_29571;
          break;
        }
      } else {
        for (v_i_29571 = v_v_29555.Ni - 1; 0 <= v_i_29571; --v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
          v_t_29570 = v_i_29571;
          break;
        }
        if (null === v_t_29570) for (v_i_29571 = v_d_29554.length - 1; v_i_29571 > v_v_29555.Ni; --v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
          v_t_29570 = v_i_29571;
          break;
        }
      }
      null !== v_t_29570 && (v_v_29555.Ui = !0, v_m_29560(v_n_29568 ? scope.v_ft_27812 : scope.v_ut_27811), v_u_29549.e8(6), scope.renderer.W6(() => {
        for (let v_i_29573 = 0; v_i_29573 < v_d_29554.length; ++v_i_29573) for (let v_t_29574 = 0; v_t_29574 < 2; ++v_t_29574) v_d_29554[v_i_29573].ze[v_t_29574].visible = !1;
        v_v_29555.Ni = v_t_29570, v_m_29560(v_n_29568 ? scope.v_ut_27811 : scope.v_ft_27812), scope.renderer.W6(() => {
          v_m_29560(), v_u_29549.e8(5), v_u_29549.e8(7), v_p_29561(v_e_29572, v_d_29554[v_e_29572], v_v_29555.Ni, v_d_29554[v_v_29555.Ni]), scope.renderer.W6(() => {
            v_v_29555.Ui = !1;
          }, 167);
        }, 167);
      }, 167));
    }
  }
  function v_m_29560(v_t_29575) {
    v_f_29551.tn(), v_l_29550.tn();
    var v_e_29576, v_n_29577;
    let v_r_29578 = 0;
    var v_i_29579,
      v_s_29580 = v_d_29554[v_v_29555.Ni].Pi,
      v_a_29581 = void 0 !== v_t_29575 && (v_t_29575 & scope.v_ft_27812 || v_t_29575 & scope.v_ut_27811);
    for (let v_i_29582 = -5; v_i_29582 < 6; ++v_i_29582) if (!((v_e_29576 = v_i_29582 + v_v_29555.Ni) < 0 || v_d_29554.length <= v_e_29576)) {
      0 === v_i_29582 ? v_r_29578 = 0 : (v_r_29578 = 100 * (v_d_29554[v_e_29576].Pi - v_s_29580), v_r_29578 += 12 * (0 < v_r_29578 ? 1 : -1)), v_a_29581 && (v_t_29575 & scope.v_ft_27812 ? v_r_29578 -= 200 : v_r_29578 += 200);
      for (let v_t_29583 = 0; v_t_29583 < 2; ++v_t_29583) !1 === (v_n_29577 = v_d_29554[v_e_29576].ze[v_t_29583]).visible && v_n_29577.nn(), !v_a_29581 || -5 !== v_i_29582 && 5 !== v_i_29582 ? v_n_29577.visible = !0 : v_n_29577.visible = !1, (0 === v_i_29582 ? v_f_29551 : v_l_29550).Ze(v_n_29577), v_n_29577.rn(scope.v_Vo_28136, scope.v_jo_28134, v_a_29581 ? 10 : 6, 0), v_n_29577.rn(scope.v_Wo_28137, scope.v_jo_28134, v_a_29581 ? 10 : 6, 0), v_n_29577.$e(.577350269 * v_r_29578, v_r_29578);
      0 !== v_i_29582 || v_a_29581 ? (v_d_29554[v_e_29576].ze[0].rn(scope.v_Ko_28140, scope.v_Oo_28135, 6, 0), v_d_29554[v_e_29576].ze[0].an(0), v_d_29554[v_e_29576].ze[1].rn(scope.v_Ko_28140, scope.v_Oo_28135, 3, 6), v_d_29554[v_e_29576].ze[1].an(1)) : (v_d_29554[v_e_29576].ze[0].rn(scope.v_Ko_28140, scope.v_Oo_28135, 3, 6), v_d_29554[v_e_29576].ze[0].an(1), v_d_29554[v_e_29576].ze[1].rn(scope.v_Ko_28140, scope.v_Oo_28135, 6, 0), v_d_29554[v_e_29576].ze[1].an(0));
    }
    0 < v_d_29554.length ? (v___29552.Wi.Wt = scope.mathMin(scope.mathMax(v_v_29555.Ni + 1, 1), 9999).toString(), v___29552.Ki.Wt = "S" + scope.mathMin(scope.mathMax(v_d_29554.length, 0), 9999).toString()) : (v___29552.Wi.Wt = "0", v___29552.Ki.Wt = "S0"), 0 < v_d_29554.length ? (v_i_29579 = scope.mathMax(1 / v_d_29554.length, .04), v___29552.zi.visible = !0, v___29552.zi.Oe[0] = v_i_29579, 1 === v_d_29554.length ? v___29552.zi.on[0] = 0 : v___29552.zi.on[0] = v_v_29555.Ni / (v_d_29554.length - 1) * (1 - v_i_29579) * 690) : v___29552.zi.visible = !1;
  }
  function v_p_29561(v_t_29584, v_i_29585, v_e_29586, v_n_29587) {
    v_i_29585 && v_n_29587 && v_i_29585.ze[0] === v_n_29587.ze[0] || (v_i_29585 && (v_i_29585.ze[0].un = !0), v_n_29587 && (v_n_29587.ze[0].un = !1, v_n_29587.ze[0].Kt())), v_S_29565();
  }
  function v_k_29562() {
    v_v_29555.n1 === v_e_29544 ? (scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.wt("prevGroup", !0), scope.menuSystem.wt("nextGroup", !0), scope.menuSystem.wt("exceedLimit", !0), scope.menuSystem.Cv(!0)) : v_v_29555.n1 === v_n_29545 && (scope.menuSystem.wt("changeDown", !0), scope.menuSystem.wt("changeUp", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.kt("changeDown", v_v_29555.Bn.Pm <= 1), scope.menuSystem.kt("changeUp", 50 <= v_v_29555.Bn.Pm));
  }
  function v_b_29563() {
    v_a_29557() || scope.menuSystem.St("enter");
  }
  function v_y_29564(v_t_29588) {
    if (v_v_29555.n1 === v_e_29544) switch (v_t_29588) {
      case "left":
        scope.v_Ae_27892.dn("move_cursor"), v_v_29555.Ni <= 0 ? v_g_29559(!1, !0) : v_w_29558(v_v_29555.Ni - 1);
        break;
      case "right":
        scope.v_Ae_27892.dn("move_cursor"), v_v_29555.Ni >= v_d_29554.length - 1 ? v_g_29559(!0, !0) : v_w_29558(v_v_29555.Ni + 1);
        break;
      case "prevGroup":
        scope.v_Ae_27892.dn("move_cursor"), v_g_29559(!1);
        break;
      case "nextGroup":
        scope.v_Ae_27892.dn("move_cursor"), v_g_29559(!0);
        break;
      case "enter":
        return scope.v_Ae_27892.dn("set_skill"), scope.sceneManager._t(), scope.menuSystem._t(), scope.menuSystem.It(!1), v_d_29554[v_v_29555.Mi].ze[0].elementByName("listItemBadgeSetBg").visible = !1, v_d_29554[v_v_29555.Mi].ze[1].elementByName("listItemBadgeSetBg").visible = !1, v_v_29555.Mi = v_v_29555.Ni, v_d_29554[v_v_29555.Mi].ze[0].elementByName("listItemBadgeSetBg").visible = !0, v_u_29549.e8(8, v_d_29554[v_v_29555.Mi].ze[0]), void scope.renderer.W6(() => {
          v_v_29555.Ee && v_v_29555.Ee(scope.v_ti_27769, v_d_29554[v_v_29555.Ni].En, v_v_29555.Bn), scope.renderer.W6(() => {
            v_u_29549.e8(4), scope.renderer.W6(() => {
              scope.renderer._i("skillSelect"), v_v_29555.Ee && v_v_29555.Ee(scope.v_ii_27770, v_d_29554[v_v_29555.Ni].En, v_v_29555.Bn);
            }, 250);
          }, 250);
        }, 250);
      case "exceedLimit":
        scope.v_Ae_27892.dn("menu_in"), v_v_29555.n1 = v_n_29545, scope.menuSystem.ft();
        for (const v_i_29589 of [["changeDown", "ChangeMinus", 6, 2, scope.v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, scope.v_X0_27795, !0, "up"], ["enter", "Enter", 14, 2, scope.v_W0_27791, !1, "enter"]]) scope.menuSystem.vt(v_i_29589[0], v_i_29589[1], v_i_29589[2], v_i_29589[3], v_i_29589[4], v_i_29589[5], !1, !1, v_i_29589[6], function (v_t_29590, v_i_29591) {
          "down" === v_t_29590 && v_y_29564(this.Ae);
        });
        return v_k_29562(), v_s_29556(), v_u_29549.rsbTree.elementByIndex(64).visible = !0, v_u_29549.e8(9), scope.menuSystem.Ct(!0), void scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
    } else if (v_v_29555.n1 === v_n_29545) switch (v_t_29588) {
      case "changeDown":
        scope.v_Ae_27892.dn("change_value"), 1 < v_v_29555.Bn.Pm && --v_v_29555.Bn.Pm, v_s_29556();
        break;
      case "changeUp":
        scope.v_Ae_27892.dn("change_value"), v_v_29555.Bn.Pm < 50 && ++v_v_29555.Bn.Pm, v_u_29549.e8(1), v_s_29556();
        break;
      case "enter":
        return scope.v_Ae_27892.dn("menu_in"), scope.menuSystem._t(), v_v_29555.n1 = v_e_29544, v_u_29549.e8(3), scope.v_el_28148(v_u_29549.rsbTree.elementByIndex(44), v_v_29555.Bn, !0), scope.menuSystem.Ct(!0), void scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
    }
    v_k_29562();
  }
  function v_S_29565() {
    var v_t_29592 = scope.v_Er_27955(v_v_29555.Mn, v_v_29555.Fn[v_v_29555.Ni], v_v_29555.Bn ? v_v_29555.Bn.jm : 0);
    v___29552.Rn.visible = v___29552.B5.visible = !v_v_29555.Mn.ub, v___29552.fb.visible = v___29552._b.visible = v_v_29555.Mn.ub, scope.renderer.Yt.Zt[v_r_29546 + v_t_29592] && (v_v_29555.Mn.ub ? (v___29552.fb.zt = !0, v___29552.fb.Xt = v_r_29546 + v_t_29592, v___29552._b.zt = !0, v___29552._b.Xt = v_r_29546 + v_t_29592) : (v___29552.Rn.zt = !0, v___29552.Rn.Xt = v_r_29546 + v_t_29592, v___29552.B5.zt = !0, v___29552.B5.Xt = v_r_29546 + v_t_29592)), v___29552.Pn.visible = !!v_v_29555.Bn && 0 < v_v_29555.Bn.jm, scope.v_nl_28149(v___29552.Dn, v_v_29555.Fn[v_v_29555.Ni]);
  }
  return {
    ue: function (v_i_29593) {
      scope.v_Le_28076([v_e_29594 => {
        scope.languagePackages.it("ui/skillSelect.rsb", function (v_t_29595) {
          v_t_29595 ? (v_t_29595 = new scope.v_Dl_28181(v_t_29595), scope.renderer.nt(v_t_29595.rt(scope.renderer.p5()), v_t_29596 => {
            v_u_29549 = v_t_29596, v_l_29550 = v_t_29596.rsbTree.elementByIndex(40), v_f_29551 = v_t_29596.rsbTree.elementByIndex(43), v___29552.Oi = v_t_29596.rsbTree.elementByIndex(42), v___29552.Wi = v_t_29596.rsbTree.elementByIndex(34), v___29552.Ki = v_t_29596.rsbTree.elementByIndex(35), v___29552.zi = v_t_29596.rsbTree.elementByIndex(38), v___29552.Xi = v_t_29596.rsbTree.elementByIndex(37), v___29552.Rn = v_t_29596.rsbTree.elementByIndex(31), v___29552.fb = v_t_29596.rsbTree.elementByIndex(32), v___29552.B5 = v_t_29596.rsbTree.elementByIndex(68), v___29552._b = v_t_29596.rsbTree.elementByIndex(69), v___29552.Pn = v_t_29596.rsbTree.elementByIndex(50), v___29552.Dn = v_t_29596.rsbTree.elementByIndex(51);
            var v_i_29597 = v_t_29596.rsbTree.elementByIndex(80);
            for (let v_t_29598 = 0; v_t_29598 < v_i_29597.We.length; ++v_t_29598) v_i_29597.We[v_t_29598].visible = !1, v_h_29553[v_i_29597.We[v_t_29598].ct] = v_i_29597.We[v_t_29598];
            scope.v_Me_28078(v_e_29594);
          })) : v_i_29593();
        });
      }, v_t_29599 => {
        scope.v_Fe_28101(v_i_29593);
      }]);
    },
    T0: function (v_s_29600, v_a_29601, v_t_29602) {
      scope.v_Le_28076([v_i_29603 => {
        scope.menuSystem.ft(), (v_v_29555 = new v_o_29548()).Ee = v_t_29602, v_v_29555.Gi = !0, v_u_29549.Jt = !1, scope.renderer.ut("skillSelect", v_u_29549, 60, v_t_29604 => {
          scope.v_Me_28078(v_i_29603);
        });
      }, v_t_29605 => {
        let v_n_29606;
        scope.v_co_28100(0, v_s_29600.Hm, (v_i_29607, v_t_29608, v_e_29609) => {
          scope.dataLoader.Si(v_s_29600, v_e_29609, v_t_29610 => {
            v_n_29606 = v_r_29546 + v_e_29609, scope.renderer.Yt.Zt[v_n_29606] && scope.renderer.Yt.Zt[v_n_29606].free(), scope.renderer.Yt.Zt[v_n_29606] = v_t_29610, v_i_29607();
          });
        }, () => scope.v_Me_28078(v_t_29605));
      }, v_t_29611 => {
        v_v_29555.Mn = v_s_29600, v_v_29555.Bn = v_a_29601, v_v_29555.Bn || (v_v_29555.Bn = new scope.v_Mr_27954()), v_v_29555.Fn = scope.v_Ga_28071(scope.v_be_27857.jp).sort((v_t_29617, v_i_29618) => v_t_29617.Um === v_i_29618.Um ? v_t_29617.Vm - v_i_29618.Vm : v_t_29617.Um && !v_i_29618.Um ? -1 : !v_t_29617.Um && v_i_29618.Um ? 1 : 0).filter(v_t_29619 => !(0 < v_t_29619.Jm.length && -1 === v_t_29619.Jm.indexOf(v_s_29600.C0)));
        let v_i_29612 = scope.v_be_27857.jp.ik(":sys_none");
        var v_e_29613 = scope.v_be_27857.jp.ik(v_a_29601 ? v_a_29601.En : v_s_29600.Nm);
        -1 !== v_e_29613 && (!(v_o_29615 = scope.v_be_27857.jp[v_e_29613]).Um || 0 < v_o_29615.Jm.length && -1 !== v_o_29615.Jm.indexOf(v_s_29600.C0)) && (v_i_29612 = v_e_29613);
        let v_n_29614 = scope.v_be_27857.jp[v_i_29612].En;
        v_v_29555.Mi = v_v_29555.Ni = scope.mathMax(v_v_29555.Fn.findIndex(v_t_29620 => v_t_29620.En === v_n_29614), 0);
        {
          var v_o_29615 = v_v_29555.Fn;
          let v_t_29621 = -1,
            v_i_29622 = !1,
            v_e_29623 = !1,
            v_n_29624 = 0,
            v_r_29625;
          v_d_29554 = [];
          let v_s_29626,
            v_a_29627 = 0;
          for (v_s_29626 of v_o_29615) {
            var v_l_29616 = new v_c_29547();
            v_i_29622 = v_s_29626.Um ? (v_e_29623 = !v_i_29622, !0) : (v_e_29623 = v_t_29621 !== v_s_29626.Vm || v_i_29622, v_t_29621 = v_s_29626.Vm, !1);
            for (let v_t_29628 = 0; v_t_29628 < 2; ++v_t_29628) v_s_29626.Um ? 0 === v_t_29628 ? v_l_29616.ze[v_t_29628] = v_h_29553.listItemActiveSp.Ve(!0) : 1 === v_t_29628 && (v_l_29616.ze[v_t_29628] = v_h_29553.listItemInactiveSp.Ve(!0)) : 0 === v_t_29628 ? v_l_29616.ze[v_t_29628] = v_h_29553.listItemActive.Ve(!0) : 1 === v_t_29628 && (v_l_29616.ze[v_t_29628] = v_h_29553.listItemInactive.Ve(!0)), v_l_29616.ze[v_t_29628].x = 0, v_l_29616.ze[v_t_29628].y = 0, v_l_29616.ze[v_t_29628].visible = !1, v_l_29616.ze[v_t_29628].elementByName("listItemLabel").Wt = v_s_29626.ct, null === v_s_29626.Om ? (v_l_29616.ze[v_t_29628].elementByName("listItemIcon").Je = "icon" + scope.v_Q_27767[v_s_29626.Vm], v_l_29616.ze[v_t_29628].elementByName("charaSkillCount").visible = !1) : (v_l_29616.ze[v_t_29628].elementByName("listItemIcon").Je = "icon" + scope.v_Q_27767[v_s_29626.Vm] + "C", v_l_29616.ze[v_t_29628].elementByName("charaSkillCount").visible = !0, v_l_29616.ze[v_t_29628].elementByName("charaSkillCount").Wt = scope.v_Qa_28089(v_s_29626.Om, 0, 999).toString()), v_v_29555.Mi !== v_a_29627 && (v_l_29616.ze[v_t_29628].elementByName("listItemBadgeSetBg").visible = !1), v_s_29626.Um && v_e_29623 ? (0 === v_t_29628 ? v_r_29625 = v_h_29553.listItemHeaderActive.Ve(!0) : 1 === v_t_29628 && (v_r_29625 = v_h_29553.listItemHeaderInactive.Ve(!0)), v_r_29625.visible = !0, v_r_29625.elementByName("listItemHeaderImg").Je = "vertListTabSp", v_l_29616.ze[v_t_29628].hn(v_r_29625, v_l_29616.ze[v_t_29628].We[0])) : v_e_29623 && v_s_29626.Vm !== scope.v_gt_27748 && (0 === v_t_29628 ? v_r_29625 = v_h_29553.listItemHeaderActive.Ve(!0) : 1 === v_t_29628 && (v_r_29625 = v_h_29553.listItemHeaderInactive.Ve(!0)), v_r_29625.visible = !0, v_r_29625.elementByName("listItemHeaderImg").Je = "vertListTabSkill" + scope.v_Q_27767[v_s_29626.Vm], v_l_29616.ze[v_t_29628].hn(v_r_29625, v_l_29616.ze[v_t_29628].We[0]));
            v_e_29623 && ++v_n_29624, v_l_29616.En = v_s_29626.En, v_l_29616.Pi = v_n_29624, v_l_29616.Di = v_e_29623, v_d_29554.push(v_l_29616), ++v_n_29624, ++v_a_29627;
          }
        }
        v_m_29560(), v_S_29565(), scope.v_el_28148(v_u_29549.rsbTree.elementByIndex(44), v_a_29601, !0);
        for (const v_r_29629 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, scope.v_W0_27791, !1, "enter"], ["prevGroup", "PrevGroup", 10, 2, scope.v_X0_27795, !0, "up"], ["nextGroup", "NextGroup", 12, 2, scope.v_X0_27795, !0, "down"], ["exceedLimit", "ExceedLimit", 14, 2, scope.v_ci_27797, !1, ""]]) scope.menuSystem.vt(v_r_29629[0], v_r_29629[1], v_r_29629[2], v_r_29629[3], v_r_29629[4], v_r_29629[5], !1, !1, v_r_29629[6], function (v_t_29630, v_i_29631) {
          "down" === v_t_29630 && v_y_29564(this.Ae);
        });
        scope.menuSystem.yv(), v_k_29562(), scope.sceneManager.ft(new scope.v_M1_27898(v_b_29563, void 0)), v_u_29549.rsbTree.elementByIndex(64).visible = !1, v_u_29549.Jt = !0, v_u_29549.e8(2), v_u_29549.e8(0), scope.menuSystem.Ct(!0), scope.renderer.W6(() => {
          v_v_29555.Ee && v_v_29555.Ee(scope.v_Qt_27768, 0), scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
      }]);
    },
    Gi: () => v_v_29555.Gi
  };
}
