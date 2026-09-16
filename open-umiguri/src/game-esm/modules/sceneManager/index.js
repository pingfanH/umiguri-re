// 模块: sceneManager
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createSceneManager(scope) {
  let v_n_28646 = void 0,
    v_r_28647 = void 0,
    v_s_28648 = void 0,
    v_a_28649 = void 0,
    v_o_28650 = void 0,
    v_l_28651 = void 0,
    v_i_28652 = [],
    v_e_28653 = void 0,
    v_t_28654 = void 0,
    v_c_28655 = 0,
    v_u_28656 = !1,
    v_f_28657 = 0;
  function v___28658() {
    v_f_28657 || 0 < v_i_28652.length && v_c_28655 < 1e3 && (v_u_28656 || (--v_c_28655 < 0 ? (v_u_28656 = !0, v_c_28655 = 0, v_t_28654 || (v_t_28654 = setInterval(v_h_28659, 250), v_h_28659())) : v_c_28655 <= 10 && scope.v_Ae_27892.dn("timer_warn")), v_d_28660());
  }
  function v_h_28659() {
    0 < v_i_28652.length && v_u_28656 && v_i_28652[v_i_28652.length - 1].Vt && v_i_28652[v_i_28652.length - 1].Vt();
  }
  function v_d_28660() {
    0 < v_i_28652.length && (v_v_28661(), v_i_28652[v_i_28652.length - 1].Ot) && v_i_28652[v_i_28652.length - 1].Ot(v_c_28655);
  }
  function v_v_28661() {
    v_c_28655 < 1e3 ? v_r_28647.Wt = v_c_28655 + "" : v_r_28647.Wt = "I", v_a_28649.Wt = "T" + (scope.handshake.Bm.Fm + 1);
  }
  return {
    ue: function (v_e_28662) {
      scope.v_Le_28076([v_i_28663 => {
        scope.languagePackages.it("ui/commonTimer.rsb", function (v_t_28664) {
          v_t_28664 ? (v_t_28664 = new scope.v_Dl_28181(v_t_28664), (v_n_28646 = v_t_28664.rt(scope.renderer.p5())).Jt = !0, v_r_28647 = v_n_28646.rsbTree.elementByIndex(5), v_a_28649 = v_n_28646.rsbTree.elementByIndex(3), v_s_28648 = v_n_28646.rsbTree.elementByIndex(2), v_o_28650 = v_n_28646.rsbTree.elementByIndex(6), (v_l_28651 = v_n_28646.rsbTree.elementByIndex(0)).visible = !1, v_n_28646.rsbTree.elementByIndex(1).visible = !1, scope.renderer.ut("sysTimer", v_n_28646, 4090, v_t_28665 => {
            scope.v_Me_28078(v_i_28663);
          })) : v_e_28662();
        });
      }, v_t_28666 => {
        scope.v_Fe_28101(v_e_28662);
      }]);
    },
    qt: function () {
      v_o_28650.visible = !0, v_s_28648.visible = !1, v_a_28649.visible = !0, v_r_28647.y = 55;
    },
    ei: function () {
      v_o_28650.visible = !1, v_s_28648.visible = !0, v_a_28649.visible = !1, v_r_28647.y = 35;
    },
    ti: function () {
      v_n_28646.rsbTree.elementByIndex(1).visible = !0, v_v_28661();
    },
    ii: function () {
      v_n_28646.rsbTree.elementByIndex(1).visible = !1;
    },
    ft: function (v_t_28667) {
      v_i_28652.push(v_t_28667);
    },
    _t: function () {
      v_i_28652.pop();
    },
    ni: function () {
      v_i_28652 = [], v_e_28653 && clearInterval(v_e_28653), v_t_28654 && clearInterval(v_t_28654), v_e_28653 = void 0, v_t_28654 = void 0, v_u_28656 = !1;
    },
    ri: function (v_t_28668) {
      void 0 === v_e_28653 && (v_c_28655 = void 0 !== v_t_28668 ? v_t_28668 : this.ai(), v_e_28653 = setInterval(v___28658, 1e3), v_v_28661());
    },
    et: function () {
      return v_u_28656;
    },
    oi: function () {
      if (0 < v_i_28652.length) return v_i_28652[v_i_28652.length - 1].Ot;
    },
    li: v_d_28660,
    ai: function () {
      return scope.handshake.rm.am <= 0 ? 1e3 : scope.mathMin(scope.handshake.rm.am, 999);
    },
    ui: function () {
      return scope.handshake.rm.am <= 0 ? 1e3 : 30;
    },
    Jk: function (v_t_28669) {
      v_t_28669 ? ++v_f_28657 : --v_f_28657;
    },
    JS: function (v_t_28670) {
      v_c_28655 = v_t_28670;
    },
    OS: function () {
      return v_c_28655;
    },
    VS: function () {
      return v_u_28656;
    },
    WS: function (v_t_28671) {
      v_t_28671 === scope.v_E1_27899 ? (v_l_28651.visible = !1, scope.playerInfoBoard._P(null), scope.playerInfoBoard.kL(null)) : (v_l_28651.visible = !0, v_t_28671 === scope.v_D1_27900 && (scope.playerInfoBoard._P(scope.v_oe_27649.sx()), scope.playerInfoBoard.kL(-1), v_l_28651.Je = "stateCoop"));
    }
  };
}
