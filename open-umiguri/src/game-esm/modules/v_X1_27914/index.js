// 模块: v_X1_27914
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_X1_27914(scope) {
  const v_e_29125 = 6;
  function v_n_29126() {
    this.Gi = !1, this.zS = [0, 0, 0, 0, 0, 0], this.KS = 0, this.YS = null, this.qS = null;
  }
  let v_r_29127 = void 0,
    v_s_29128 = [],
    v_a_29129 = new v_n_29126();
  function v_o_29130(v_t_29136) {
    v_a_29129.KS = scope.v_Qa_28089(v_t_29136, 0, v_e_29125 - 1);
    v_t_29136 = v_s_29128[v_a_29129.KS];
    v_r_29127.lt.yk(15).Te = v_t_29136.Te - 16, v_r_29127.e8(8);
  }
  function v_l_29131(v_i_29137, v_t_29138) {
    if (v_t_29138) for (let v_t_29139 = 0; v_t_29139 < v_e_29125; ++v_t_29139) v_s_29128[v_t_29139].Je = "numRoom" + v_a_29129.zS[v_t_29139];else {
      let v_t_29140 = v_a_29129.zS[v_a_29129.KS] + (v_i_29137 ? 1 : -1);
      v_t_29140 < 0 ? v_t_29140 = 9 : 9 < v_t_29140 && (v_t_29140 = 0), v_a_29129.zS[v_a_29129.KS] = v_t_29140, v_s_29128[v_a_29129.KS].Je = "numRoom" + v_t_29140, v_r_29127.e8(1 + v_a_29129.KS);
    }
  }
  function v_c_29132() {
    scope.menuSystem.St("cancel");
  }
  function v_u_29133() {
    scope.menuSystem.kt("left", v_a_29129.KS <= 0), scope.menuSystem.kt("right", v_a_29129.KS >= v_e_29125 - 1), scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("changeDown", !0), scope.menuSystem.wt("changeUp", !0), scope.menuSystem.wt("cancel", !0), scope.menuSystem.wt("enter", !0), scope.menuSystem.Cv(!0);
  }
  function v_f_29134(v_t_29141) {
    switch (v_t_29141) {
      case "left":
        v_o_29130(v_a_29129.KS - 1);
        break;
      case "right":
        v_o_29130(v_a_29129.KS + 1);
        break;
      case "changeDown":
        v_l_29131(!1);
        break;
      case "changeUp":
        v_l_29131(!0);
        break;
      case "cancel":
        return void v_i_29135();
      case "enter":
        !async function () {
          scope.menuSystem.It(!1), v_r_29127.lt.yk(30).Be = !1, v_r_29127.lt.yk(15).Be = !1;
          var v_t_29142 = !v_a_29129.YS || (await v_a_29129.YS(scope.v_Pe_28064(v_a_29129.zS.join(""))));
          (v_t_29142 ? v_i_29135 : (v_r_29127.lt.yk(30).Be = !0, v_r_29127.lt.yk(15).Be = !0, v_u_29133))();
        }();
    }
    v_u_29133();
  }
  function v_i_29135() {
    scope.sceneManager._t(), scope.menuSystem.It(!1), v_r_29127.e8(7), v_r_29127.lt.yk(30).Be = !1, v_r_29127.lt.yk(15).Be = !1, scope.renderer.W6(() => {
      scope.menuSystem._t(), v_r_29127.i8(7), scope.renderer._i("openCoop"), v_a_29129.Gi = !1, v_a_29129.qS && v_a_29129.qS(), v_a_29129.qS = void 0;
    }, 250);
  }
  return {
    ue: function (v_e_29143) {
      scope.v_Le_28076([v_i_29144 => {
        scope.languagePackages.it("ui/openCoop.rsb", function (v_t_29145) {
          v_t_29145 ? (v_t_29145 = new scope.v_Dl_28181(v_t_29145), scope.renderer.nt(v_t_29145.rt(scope.renderer.p5()), v_t_29146 => {
            v_r_29127 = v_t_29146, v_s_29128.push(v_r_29127.lt.yk(19)), v_s_29128.push(v_r_29127.lt.yk(21)), v_s_29128.push(v_r_29127.lt.yk(23)), v_s_29128.push(v_r_29127.lt.yk(25)), v_s_29128.push(v_r_29127.lt.yk(27)), v_s_29128.push(v_r_29127.lt.yk(29)), scope.v_Me_28078(v_i_29144);
          })) : v_e_29143();
        });
      }, v_t_29147 => {
        scope.v_Fe_28101(v_e_29143);
      }]);
    },
    T0: async function (v_t_29148, v_i_29149) {
      (v_a_29129 = new v_n_29126()).Gi = !0, v_a_29129.YS = v_t_29148, v_a_29129.qS = v_i_29149, v_r_29127.Jt = !1, await new Promise(v_t_29150 => scope.renderer.ut("openCoop", v_r_29127, 60, v_t_29150)), v_r_29127.lt.yk(30).Be = !0, v_r_29127.lt.yk(15).Be = !0, v_o_29130(0), v_l_29131(!1, !0), scope.menuSystem.ft();
      for (const v_e_29151 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["changeDown", "ChangeMinus", 6, 2, scope.v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, scope.v_X0_27795, !0, "up"], ["cancel", "Cancel", 12, 2, scope.v_si_27792, !1, ""], ["enter", "Enter", 14, 2, scope.v_W0_27791, !1, "enter"]]) scope.menuSystem.vt(v_e_29151[0], v_e_29151[1], v_e_29151[2], v_e_29151[3], v_e_29151[4], v_e_29151[5], !1, !1, v_e_29151[6], function (v_t_29152, v_i_29153) {
        "down" === v_t_29152 && v_f_29134(this.Ae);
      });
      scope.menuSystem.yv(), scope.menuSystem.Ct(!0), v_r_29127.Jt = !0, v_r_29127.e8(0), scope.sceneManager.ft(new scope.v_M1_27898(v_c_29132, void 0)), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.menuSystem.Ct(!1), v_u_29133();
    },
    Gi: () => v_a_29129.Gi
  };
}
