// 模块: v_mt_29763
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_mt_29763(scope) {
  let v_r_29808 = null,
    v_s_29809 = null,
    v_a_29810 = !1,
    v_o_29811 = !1,
    v_i_29812 = !0,
    v_l_29813 = !1,
    v_c_29814 = 0,
    v_u_29815 = 0,
    v_f_29816 = !1,
    v___29817 = !1,
    v_h_29818 = .8,
    v_d_29819 = 250,
    v_v_29820 = null,
    v_w_29821 = {};
  function v_g_29822() {
    ++v_u_29815;
  }
  function v_m_29823() {
    --v_u_29815;
  }
  function v_p_29824(v_t_29826) {
    0 < v_u_29815 || (v_o_29811 = !1, v_g_29822(), v_v_29820 && scope.renderer.iy(v_v_29820), v_l_29813 && (v_f_29816 ? (scope.v_Ae_27892.n6("music_select", null, 0, v_d_29819), v_f_29816 = !1) : v_c_29814 && scope.v_Se_27889.n6(v_c_29814, 0, v_d_29819)), v_s_29809 = null, v_l_29813 = !1, scope.v_uo_28102(function () {
      v_c_29814 && scope.v_Se_27889.e6(v_c_29814), v_c_29814 = 0, v_m_29823(), v_t_29826();
    }, v_d_29819 + 5));
  }
  function v_k_29825(v_i_29827) {
    var v_t_29828;
    0 < v_u_29815 || (v_a_29810 = !1, (null === v_r_29808 || (v_t_29828 = v_r_29808.m5 || 0, (v_r_29808.S5 || 0) - v_t_29828 < 5) || "" === v_r_29808.nk) && v_f_29816) || scope.v_Le_28076([function (v_t_29829) {
      if (v_i_29827 || !v_l_29813) return scope.v_Me_28078(v_t_29829);
      v_p_29824(function () {
        scope.v_Me_28078(v_t_29829);
      });
    }, function (v_t_29830) {
      var v_i_29831,
        v_e_29832 = function () {};
      if (!(0 < v_u_29815)) v_l_29813 = !0, null === v_r_29808 || (v_i_29831 = v_r_29808.m5 || 0, (v_r_29808.S5 || 0) - v_i_29831 < 5) ? v_n_29833() : (v_g_29822(), v_s_29809 = v_r_29808, v_r_29808 = null, scope.v_br_27943.b0(v_s_29809.rk, v_s_29809.nk, function (v_t_29834) {
        v_t_29834 ? scope.v_Se_27889.Sv(v_t_29834).then(v_t_29835 => {
          v_t_29835 ? (v_c_29814 = v_t_29835, function v_t_29836() {
            scope.v_Se_27889.i6(v_c_29814), scope.v_Se_27889.o6(v_c_29814, v_s_29809.m5), scope.v_Se_27889.Mc(v_c_29814, 0), scope.v_Se_27889.n6(v_c_29814, v_h_29818, v_d_29819), scope.v_Se_27889.dn(v_c_29814), v_v_29820 = scope.renderer.W6(function () {
              v_o_29811 ? v_p_29824(function () {}) : (scope.v_Se_27889.n6(v_c_29814, 0, v_d_29819), v_v_29820 = scope.renderer.W6(function () {
                v_o_29811 || (v_a_29810 ? v_k_29825(!0) : v_t_29836());
              }, v_d_29819 + 1));
            }, 1e3 * (v_s_29809.S5 - v_s_29809.m5) - v_d_29819);
          }(), scope.renderer.W6(function () {
            v_m_29823(), v_e_29832();
          }, v_d_29819 + 1)) : (v_w_29821[v_s_29809.w0] = !0, v_m_29823(), v_n_29833());
        }) : (v_w_29821[v_s_29809.w0] = !0, v_m_29823(), v_n_29833());
      }));
      function v_n_29833() {
        v_g_29822(), v_s_29809 = null, v_f_29816 = !0, v___29817 || (scope.v_Ae_27892.dn("music_select"), v___29817 = !0), scope.v_Ae_27892.n6("music_select", 0, v_h_29818, v_d_29819), scope.v_uo_28102(function () {
          v_m_29823(), v_e_29832();
        }, v_d_29819 + 1);
      }
    }]);
  }
  return {
    dn: function (v_t_29837) {
      v_r_29808 = null === v_t_29837 || v_w_29821[v_t_29837.w0] ? null : {
        w0: v_t_29837.w0,
        rk: v_t_29837.dir,
        nk: v_t_29837.res_info.wave,
        m5: v_t_29837.m5,
        S5: v_t_29837.S5
      }, (!v_s_29809 || null !== v_s_29809 && null === v_r_29808 || v_s_29809.w0 !== v_t_29837.w0 || v_i_29812) && (v_a_29810 = !0, v_k_29825()), v_i_29812 = !1;
    },
    m0: function () {
      v_o_29811 = !0, v_i_29812 = !0, v_r_29808 = null, v_p_29824(function () {
        scope.v_Ae_27892.i6("music_select"), v___29817 = !1;
      });
    }
  };
}
