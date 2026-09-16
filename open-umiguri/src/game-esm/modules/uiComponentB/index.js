// 模块: uiComponentB
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createUiComponentB(scope) {
  const v_r_29632 = "cache:charaLg:";
  function v_c_29633() {
    this.ze = null;
  }
  function v_e_29634() {
    this.Bn = void 0, this.Mn = void 0, this.Gn = void 0, this.Gi = !1, this.Ni = 0, this.Mi = 0, this.Ui = !1, this.Ee = void 0;
  }
  let v_u_29635 = void 0,
    v_f_29636 = void 0,
    v_n_29637 = {
      Oi: void 0,
      jn: [],
      charaInfoName: void 0,
      charaInfoIllustrator: void 0
    },
    v___29638 = {},
    v_h_29639 = [],
    v_d_29640 = new v_e_29634();
  function v_s_29641() {
    return !!v_d_29640.Ui;
  }
  function v_i_29642(v_t_29648) {
    var v_i_29649;
    v_s_29641() || (v_t_29648 = scope.mathMin(scope.mathMax(v_t_29648, 0), v_h_29639.length - 1)) !== v_d_29640.Ni && (v_d_29640.Ui = !0, v_i_29649 = v_d_29640.Ni, v_d_29640.Ni = v_t_29648, v_h_29639[v_i_29649], v_d_29640.Ni, v_h_29639[v_d_29640.Ni], v_p_29647(), v_v_29643(), scope.renderer.W6(() => {
      v_d_29640.Ui = !1;
    }, 100));
  }
  function v_v_29643() {
    var v_t_29650 = -(142 * v_h_29639.length - 42) / 2;
    v_n_29637.Oi.rn(scope.v_Vo_28136, scope.v_jo_28134, 6, 0), v_n_29637.Oi.$e(v_t_29650 + 142 * v_d_29640.Ni + 50);
  }
  function v_w_29644() {
    scope.menuSystem.kt("left", v_d_29640.Ni <= 0), scope.menuSystem.kt("right", v_d_29640.Ni >= v_h_29639.length - 1), scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.Cv(!0);
  }
  function v_g_29645() {
    v_s_29641() || scope.menuSystem.St("enter");
  }
  function v_m_29646(v_t_29651) {
    switch (v_t_29651) {
      case "left":
        scope.v_Ae_27892.dn("move_cursor"), v_i_29642(v_d_29640.Ni - 1);
        break;
      case "right":
        scope.v_Ae_27892.dn("move_cursor"), v_i_29642(v_d_29640.Ni + 1);
        break;
      case "enter":
        return scope.v_Ae_27892.dn("set_skill"), scope.sceneManager._t(), scope.menuSystem._t(), scope.menuSystem.It(!1), v_h_29639[v_d_29640.Mi].ze.ot("listItemBadgeSetBg").Be = !1, v_d_29640.Mi = v_d_29640.Ni, v_h_29639[v_d_29640.Mi].ze.ot("listItemBadgeSetBg").Be = !0, v_u_29635.e8(3, v_h_29639[v_d_29640.Mi].ze), void scope.renderer.W6(() => {
          v_d_29640.Ee && v_d_29640.Ee(scope.v_ti_27769, v_d_29640.Mi), v_u_29635.e8(2), scope.renderer.W6(() => {
            scope.renderer._i("transformSelect"), v_d_29640.Ee && v_d_29640.Ee(scope.v_ii_27770, v_d_29640.Mi);
          }, 250);
        }, 500);
    }
    v_w_29644();
  }
  function v_p_29647() {
    var v_t_29652 = scope.v_Er_27955(v_d_29640.Mn, v_d_29640.Gn, v_d_29640.Ni);
    v_n_29637.charaInfoName.Wt = v_d_29640.Mn.ct[v_t_29652], v_n_29637.charaInfoIllustrator.Wt = v_d_29640.Mn.tf[v_t_29652];
    let v_i_29653;
    for (v_i_29653 of v_n_29637.jn) scope.renderer.Yt.Zt[v_r_29632 + v_t_29652] && (v_i_29653.zt = !0, v_i_29653.Xt = v_r_29632 + v_t_29652);
    for (let v_t_29654 = 0; v_t_29654 < v_h_29639.length; ++v_t_29654) v_h_29639[v_t_29654].ze.ot("listItemActiveOverlay").Be = v_t_29654 === v_d_29640.Ni;
    v_u_29635.e8(1);
  }
  return {
    ue: function (v_i_29655) {
      scope.v_Le_28076([v_e_29656 => {
        scope.languagePackages.it("ui/transformSelect.rsb", function (v_t_29657) {
          v_t_29657 ? (v_t_29657 = new scope.v_Dl_28181(v_t_29657), scope.renderer.nt(v_t_29657.rt(scope.renderer.p5()), v_t_29658 => {
            v_u_29635 = v_t_29658, v_f_29636 = v_t_29658.lt.yk(25), v_n_29637.Oi = v_t_29658.lt.yk(24), v_n_29637.jn = v_t_29658.lt.Yc("charaImg"), v_n_29637.jn = v_n_29637.jn.concat(v_t_29658.lt.Yc("charaImgFrontShadowFx")), v_n_29637.charaInfoName = v_t_29658.lt.yk(20), v_n_29637.charaInfoIllustrator = v_t_29658.lt.yk(21);
            var v_i_29659 = v_t_29658.lt.yk(26);
            for (let v_t_29660 = 0; v_t_29660 < v_i_29659.We.length; ++v_t_29660) v_i_29659.We[v_t_29660].Be = !1, v___29638[v_i_29659.We[v_t_29660].ct] = v_i_29659.We[v_t_29660];
            scope.v_Me_28078(v_e_29656);
          })) : v_i_29655();
        });
      }, v_t_29661 => {
        scope.v_Fe_28101(v_i_29655);
      }]);
    },
    T0: function (v_a_29662, v_o_29663, v_l_29664, v_t_29665) {
      scope.v_Le_28076([v_i_29666 => {
        scope.menuSystem.ft(), (v_d_29640 = new v_e_29634()).Ee = v_t_29665, v_d_29640.Gi = !0, v_u_29635.Jt = !1, scope.renderer.ut("transformSelect", v_u_29635, 60, v_t_29667 => {
          scope.v_Me_28078(v_i_29666);
        });
      }, v_t_29668 => {
        let v_n_29669;
        scope.v_co_28100(0, v_a_29662.Hm, (v_i_29670, v_t_29671, v_e_29672) => {
          scope.dataLoader.Si(v_a_29662, v_e_29672, v_t_29673 => {
            v_n_29669 = v_r_29632 + v_e_29672, scope.renderer.Yt.Zt[v_n_29669] && scope.renderer.Yt.Zt[v_n_29669].free(), scope.renderer.Yt.Zt[v_n_29669] = v_t_29673, v_i_29670();
          });
        }, () => scope.v_Me_28078(v_t_29668));
      }, v_t_29674 => {
        v_d_29640.Mn = v_a_29662, v_d_29640.Bn = v_o_29663, v_d_29640.Gn = v_l_29664, v_d_29640.Mi = v_d_29640.Ni = v_o_29663 ? v_o_29663.jm : 0, v_u_29635.lt.yk(9).Be = !v_a_29662.ub, v_u_29635.lt.yk(13).Be = v_a_29662.ub;
        var v_i_29675 = v_a_29662.Hm,
          v_e_29676 = (v_h_29639 = [], v_f_29636.tn(), 1 < v_i_29675 ? -(142 * (v_i_29675 + 1) - 42) / 2 : -50),
          v_n_29677 = new v_c_29633();
        if (v_n_29677.ze = v___29638.listItemDefault.Ve(!0), v_n_29677.ze.Te = 50 + v_e_29676, v_n_29677.ze.Qt = 0, v_n_29677.ze.Be = !0, 0 !== v_d_29640.Mi && (v_n_29677.ze.ot("listItemBadgeSetBg").Be = !1), v_h_29639.push(v_n_29677), v_f_29636.Ze(v_n_29677.ze), 1 < v_i_29675) for (let v_t_29679 = 0; v_t_29679 < v_i_29675; ++v_t_29679) {
          var v_r_29678 = new v_c_29633();
          v_r_29678.ze = v___29638.listItem.Ve(!0), v_r_29678.ze.Te = v_e_29676 + 142 * (v_t_29679 + 1) + 50, v_r_29678.ze.Qt = 0, v_r_29678.ze.Be = !0, v_r_29678.ze.ot("listItemCharaImg").zt = !0, v_r_29678.ze.ot("listItemCharaImg").Xt = "chara:" + v_t_29679 + ":0:" + v_d_29640.Mn.C0, v_d_29640.Mi !== v_t_29679 + 1 && (v_r_29678.ze.ot("listItemBadgeSetBg").Be = !1), v_r_29678.ze.ot("listItemActiveOverlay").Be = v_t_29679 === v_d_29640.Ni, v_h_29639.push(v_r_29678), v_f_29636.Ze(v_r_29678.ze);
        }
        v_v_29643(), v_p_29647();
        for (const v_s_29680 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, scope.v_W0_27791, !1, "enter"]]) scope.menuSystem.vt(v_s_29680[0], v_s_29680[1], v_s_29680[2], v_s_29680[3], v_s_29680[4], v_s_29680[5], !1, !1, v_s_29680[6], function (v_t_29681, v_i_29682) {
          "down" === v_t_29681 && v_m_29646(this.Ae);
        });
        scope.menuSystem.yv(), v_w_29644(), scope.sceneManager.ft(new scope.v_M1_27898(v_g_29645, void 0)), v_u_29635.Jt = !0, v_u_29635.e8(0), scope.menuSystem.Ct(!0), scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(30));
      }]);
    },
    Gi: () => v_d_29640.Gi
  };
}
