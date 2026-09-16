// 模块: v_lr_27930
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_lr_27930(scope) {
  let v_n_31799 = void 0,
    v_r_31800 = void 0;
  function v_i_31801() {
    scope.menuSystem.St("no");
  }
  async function v_e_31802() {
    (await scope.v_Z1_27919.qA(1)) && (scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), v_n_31799.e8(1), await scope.v_fo_28103(scope.v_Ge_28204(30)), scope.menuSystem.dt(), v_t_31804(), scope.v_H1_27907.T0(), scope.handshake.Bm.Fm = 0, scope.playerInfoBoard.ti(), scope.v_nr_27925.T0());
  }
  async function v_s_31803() {
    await scope.v_Ns_28014.fA(), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), v_n_31799.e8(1), v_r_31800.Jt = !0, v_r_31800.e8(0), await scope.v_fo_28103(scope.v_Ge_28204(180)), scope.menuSystem.dt(), v_t_31804(), scope.v_N1_27904.T0(!0);
  }
  function v_t_31804() {
    scope.renderer._i("continue"), scope.renderer._i("gameover");
  }
  return {
    ue: function (v_e_31805) {
      scope.v_Le_28076([v_i_31806 => {
        scope.languagePackages.it("ui/continue.rsb", function (v_t_31807) {
          v_t_31807 ? (v_t_31807 = new scope.v_Dl_28181(v_t_31807), scope.renderer.nt(v_t_31807.rt(scope.renderer.p5()), v_t_31808 => {
            v_n_31799 = v_t_31808, scope.v_Me_28078(v_i_31806);
          })) : v_e_31805();
        });
      }, v_i_31809 => {
        scope.languagePackages.it("ui/gameover.rsb", function (v_t_31810) {
          v_t_31810 ? (v_t_31810 = new scope.v_Dl_28181(v_t_31810), scope.renderer.nt(v_t_31810.rt(scope.renderer.p5()), v_t_31811 => {
            v_r_31800 = v_t_31811, scope.v_Me_28078(v_i_31809);
          })) : v_e_31805();
        });
      }, v_t_31812 => {
        scope.v_Fe_28101(v_e_31805);
      }]);
    },
    T0: async function () {
      scope.playerInfoBoard.ii(), scope.sceneManager.ei(), await scope.v_fo_28103(scope.v_Ge_28204(30)), await new Promise(v_t_31813 => scope.v_Te_27911.Ai(scope.v_Ue_28209("dataSaved"), scope.v_ei_27773 | scope.v_it_27778 | scope.v_et_27779, 1500, v_t_31813)), await scope.v_fo_28103(scope.v_Ge_28204(30)), v_n_31799.Jt = !1, v_r_31800.Jt = !1, await new Promise(v_t_31814 => scope.renderer.ut("continue", v_n_31799, 51, v_t_31814)), await new Promise(v_t_31815 => scope.renderer.ut("gameover", v_r_31800, 50, v_t_31815)), v_n_31799.e8(0), v_n_31799.Jt = !0, scope.menuSystem.dt();
      for (const v_t_31816 of [["yes", "Yes", 0, 8, scope.v_W0_27791, v_e_31802], ["no", "No", 8, 8, scope.v_si_27792, v_s_31803]]) scope.menuSystem.vt(v_t_31816[0], v_t_31816[1], v_t_31816[2], v_t_31816[3], v_t_31816[4], !1, !1, !1, "", v_t_31816[5]);
      scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20)), scope.sceneManager.ft(new scope.v_M1_27898(v_i_31801, void 0)), scope.sceneManager.ri(30), scope.sceneManager.ti();
    }
  };
}
