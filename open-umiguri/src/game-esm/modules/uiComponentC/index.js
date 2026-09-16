// 模块: uiComponentC
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createUiComponentC(scope) {
  function v_n_29683() {
    this.Gi = !1, this.Ni = 0, this.Ee = void 0;
  }
  let v_r_29684 = void 0,
    v_s_29685 = new v_n_29683(),
    v_a_29686 = [];
  function v_o_29687(v_t_29692) {
    v_t_29692 = scope.mathMin(scope.mathMax(v_t_29692, 0), v_a_29686.length - 1);
    v_t_29692 !== v_s_29685.Ni && (v_s_29685.Ni = v_t_29692, v_l_29688());
  }
  function v_l_29688() {
    for (let v_t_29693 = 0; v_t_29693 < v_a_29686.length; ++v_t_29693) v_a_29686[v_t_29693].Nn = v_s_29685.Ni === v_t_29693 ? 0 : 1;
    v_r_29684.rsbTree.elementByIndex(6).x = v_a_29686[v_s_29685.Ni].x - 30;
  }
  function v_c_29689() {
    scope.menuSystem.St("cancel");
  }
  function v_u_29690() {
    scope.menuSystem.kt("left", v_s_29685.Ni <= 0), scope.menuSystem.kt("right", v_s_29685.Ni >= v_a_29686.length - 1), scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.wt("cancel", !0), scope.menuSystem.Cv(!0);
  }
  function v_f_29691(v_t_29694) {
    scope.sceneManager._t(), scope.menuSystem._t(), scope.menuSystem.It(!1), v_r_29684.e8(v_t_29694 ? 1 : 0), scope.renderer.W6(() => {
      scope.renderer._i("musicSelectSort"), v_s_29685.Ee && v_s_29685.Ee("exit", v_t_29694 ? v_s_29685.Ni : null);
    }, scope.v_Ge_28204(20));
  }
  return {
    ue: function (v_e_29695) {
      scope.v_Le_28076([v_i_29696 => {
        scope.languagePackages.it("ui/musicSort.rsb", function (v_t_29697) {
          v_t_29697 ? (v_t_29697 = new scope.v_Dl_28181(v_t_29697), scope.renderer.nt(v_t_29697.rt(scope.renderer.p5()), v_t_29698 => {
            v_r_29684 = v_t_29698, v_a_29686 = [v_r_29684.rsbTree.elementByIndex(7), v_r_29684.rsbTree.elementByIndex(8), v_r_29684.rsbTree.elementByIndex(9)], scope.v_Me_28078(v_i_29696);
          })) : v_e_29695();
        });
      }, v_t_29699 => {
        scope.v_Fe_28101(v_e_29695);
      }]);
    },
    T0: function (v_e_29700, v_t_29701) {
      scope.v_Le_28076([v_i_29702 => {
        scope.menuSystem.ft(), scope.menuSystem.Ct(!0), (v_s_29685 = new v_n_29683()).Ee = v_t_29701, v_s_29685.Gi = !0, v_r_29684.Jt = !1, scope.renderer.ut("musicSelectSort", v_r_29684, 60, v_t_29703 => {
          scope.v_Me_28078(v_i_29702);
        });
      }, v_t_29704 => {
        v_s_29685.Ni = v_e_29700, v_l_29688();
        for (const v_i_29705 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, scope.v_W0_27791, !1, "enter"], ["cancel", "Cancel", 10, 2, scope.v_si_27792, !1, ""]]) scope.menuSystem.vt(v_i_29705[0], v_i_29705[1], v_i_29705[2], v_i_29705[3], v_i_29705[4], v_i_29705[5], !1, !1, v_i_29705[6], function (v_t_29706, v_i_29707) {
          if ("down" === v_t_29706) {
            switch (this.Ae) {
              case "left":
                scope.v_Ae_27892.dn("move_cursor"), v_o_29687(v_s_29685.Ni - 1);
                break;
              case "right":
                scope.v_Ae_27892.dn("move_cursor"), v_o_29687(v_s_29685.Ni + 1);
                break;
              case "enter":
                return void !(scope.v_Ae_27892.dn("change_value"), v_f_29691(!0));
              case "cancel":
                return void !(scope.v_Ae_27892.dn("menu_back"), v_f_29691(!1));
            }
            v_u_29690();
          }
        });
        scope.menuSystem.yv(), v_u_29690(), scope.sceneManager.ft(new scope.v_M1_27898(v_c_29689, void 0)), v_r_29684.Jt = !0, v_r_29684.e8(2), scope.renderer.W6(() => {
          scope.menuSystem.Ct(!1);
        }, scope.v_Ge_28204(10));
      }]);
    },
    Gi: () => v_s_29685.Gi
  };
}
