// 模块: coopLobby
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createCoopLobby(scope) {
  function v_u_28996() {
    this.Ei = "", this.Bi = [];
  }
  function v_f_28997() {
    this.ze = null, this.Gy = 0;
  }
  function v_t_28998() {
    this.Jn = [], this.Zn = !1, this.Yn = 0;
  }
  function v_e_28999() {
    this.Gi = !1, this.ji = 0, this.Ni = 0, this.Hi = !1, this.Ui = !1, this.gn = !1, this.i0 = !1, this.a0 = new v_t_28998(), this.Ny = "", this.Ee = void 0;
  }
  let v___29000 = void 0,
    v_h_29001 = void 0,
    v_r_29002 = void 0,
    v_d_29003 = void 0,
    v_v_29004 = {
      Oi: void 0,
      Ji: void 0,
      wn: void 0,
      pn: void 0
    },
    v_s_29005 = void 0,
    v_a_29006 = void 0,
    v_w_29007 = {},
    v_c_29008 = [],
    v_g_29009 = new v_e_28999(),
    v_m_29010;
  function v_o_29011() {
    return v_g_29009.gn || !!v_g_29009.Ui;
  }
  function v_p_29012() {
    return null === v_g_29009.a0 ? [] : v_g_29009.a0.Jn;
  }
  function v_n_29013() {
    return null === v_g_29009.a0 ? null : v_g_29009.a0.Jn[v_g_29009.ji].Bi[v_g_29009.Ni];
  }
  function v_l_29014(v_e_29025, v_n_29026, v_r_29027) {
    if (!v_o_29011()) {
      var v_s_29028 = v_p_29012()[v_g_29009.ji],
        v_e_29025 = scope.mathMin(scope.mathMax(v_e_29025, 0), v_s_29028.Bi.length - 1);
      if (v_e_29025 !== v_g_29009.Ni) {
        v_g_29009.Ui = !0;
        var v_a_29029 = v_g_29009.Ni;
        v_g_29009.Ni = v_e_29025, v_A_29019(0, v_s_29028.Bi[v_a_29029], v_g_29009.Ni, v_s_29028.Bi[v_g_29009.Ni]);
        let v_t_29030 = 6,
          v_i_29031 = scope.v_ui_27806;
        v_n_29026 === scope.v_gi_27815 ? (v_i_29031 = scope.v_gi_27815, v_t_29030 = 0) : 1 === v_r_29027 ? (v_i_29031 = scope.v_vi_27813, v_t_29030 = 3) : 1 < v_r_29027 && (v_i_29031 = scope.v_gi_27815, v_t_29030 = 0), v_b_29016(v_i_29031), v_g_29009.Hi || v___29000.e8(12), v_t_29030 <= 0 ? v_g_29009.Ui = !1 : scope.renderer.W6(() => {
          v_g_29009.Ui = !1;
        }, scope.v_Ge_28204(6));
      }
    }
  }
  function v_k_29015(v_e_29032, v_n_29033, v_r_29034) {
    if (!v_o_29011()) {
      var v_s_29035 = scope.v_qa_28086(v_e_29032, v_p_29012().length);
      let v_t_29036 = !1;
      if (void 0 !== v_n_29033 && (v_n_29033 & scope.v_fi_27807 || v_n_29033 & scope.v__i_27808) && (v_t_29036 = !0), v_g_29009.Hi ? v___29000.e8(2) : v___29000.e8(12), v_t_29036) {
        v_g_29009.a0.Zn = !0, v_g_29009.a0.Yn = v_n_29033, v_C_29021();
        v_e_29032 = v_g_29009.ji;
        v_g_29009.ji = v_s_29035;
        let v_t_29037 = 6,
          v_i_29038 = v_n_29033;
        v_g_29009.Hi ? 1 === v_r_29034 ? (v_i_29038 |= scope.v_vi_27813, v_t_29037 = 3) : 1 < v_r_29034 && (v_i_29038 = scope.v_gi_27815, v_t_29037 = 0) : (v_t_29037 = 54, scope.menuSystem.T9(scope.v_Ge_28204(v_t_29037))), v_y_29017(v_i_29038), !function v_r_29042(v_t_29039, v_s_29040, v_i_29041) {
          if (v_g_29009.i0) return v_g_29009.a0.Yn = v_i_29041, void (v_g_29009.a0.Zn = !0);
          v_g_29009.a0.Zn = !1;
          v_g_29009.i0 = !0;
          v_g_29009.a0.Yn = v_i_29041;
          let v_a_29043 = v_g_29009.a0;
          let v_o_29044 = v_p_29012()[v_t_29039];
          for (let v_t_29045 = 0; v_t_29045 < v_o_29044.Bi.length; ++v_t_29045) v_o_29044.Bi[v_t_29045].ze.nn(), v_o_29044.Bi[v_t_29045].ze.Be = !1;
          v_b_29016(scope.v_ui_27806, v_t_29039, v_s_29040);
          v_b_29016(v_i_29041 & scope.v_fi_27807 ? scope.v_di_27810 : scope.v_hi_27809, v_t_29039, v_s_29040);
          scope.renderer.W6(() => {
            let v_t_29046 = v_g_29009.ji,
              v_i_29047 = 0,
              v_e_29048 = v_p_29012()[v_t_29046],
              v_n_29049 = v_a_29043.Yn;
            v_n_29049 & scope.v_fi_27807 && (v_i_29047 = v_e_29048.Bi.length - 1), v_g_29009.Ni = v_i_29047, v_a_29043.Zn = !1;
            for (let v_t_29050 = 0; v_t_29050 < v_e_29048.Bi.length; ++v_t_29050) v_e_29048.Bi[v_t_29050].ze.nn();
            v_b_29016(v_n_29049 & scope.v_fi_27807 ? scope.v_hi_27809 : scope.v_di_27810, v_t_29046, v_i_29047), v_b_29016(scope.v_wi_27814, v_t_29046, v_i_29047), scope.renderer.W6(() => {
              v_A_29019(0, v_o_29044.Bi[v_s_29040], v_i_29047, v_e_29048.Bi[v_i_29047]), v_g_29009.i0 = !1, v_C_29021(), v_a_29043.Zn && (v_t_29046 === v_g_29009.ji && v_n_29049 === v_a_29043.Yn ? v_g_29009.a0.Zn = !1 : v_r_29042(v_t_29046, v_i_29047, v_a_29043.Yn));
            }, scope.v_Ge_28204(24));
          }, scope.v_Ge_28204(30));
        }(v_e_29032, v_g_29009.Ni, v_n_29033), 0 < v_t_29037 && (v_g_29009.gn = !0, scope.renderer.W6(() => {
          v_g_29009.gn = !1;
        }, scope.v_Ge_28204(v_t_29037)));
      } else {
        v_g_29009.ji = v_s_29035;
        for (let v_t_29051 = 0; v_t_29051 < v_p_29012()[v_s_29035].Bi.length; ++v_t_29051) v_p_29012()[v_s_29035].Bi[v_t_29051].ze.Be = !1;
        v_y_29017(scope.v_gi_27815), v_b_29016(scope.v_gi_27815);
      }
    }
  }
  function v_b_29016(v_i_29052, v_t_29053, v_e_29054) {
    v_h_29001.tn(), v_d_29003.tn();
    var v_n_29055,
      v_t_29053 = void 0 === v_t_29053 ? v_g_29009.ji : v_t_29053,
      v_r_29056 = void 0 === v_e_29054 ? v_g_29009.Ni : v_e_29054,
      v_s_29057 = v_p_29012()[v_t_29053];
    let v_a_29058 = 0;
    var v_o_29059 = void 0 !== v_i_29052 && (v_i_29052 & scope.v_hi_27809 || v_i_29052 & scope.v_di_27810),
      v_l_29060 = void 0 !== scope.v_wi_27814 && v_i_29052 & scope.v_wi_27814,
      v_c_29061 = void 0 !== v_i_29052 && v_i_29052 & scope.v_vi_27813 ? 3 : 6;
    for (let v_t_29062 = 0; v_t_29062 < v_r_29056 - 7; ++v_t_29062) v_s_29057.Bi[v_t_29062].ze.Be = !1;
    for (let v_t_29063 = v_r_29056 + 8; v_t_29063 < v_s_29057.Bi.length; ++v_t_29063) v_s_29057.Bi[v_t_29063].ze.Be = !1;
    for (let v_t_29064 = -7; v_t_29064 < 8; ++v_t_29064) (v_n_29055 = v_t_29064 + v_r_29056) < 0 || v_s_29057.Bi.length <= v_n_29055 || (0 === v_t_29064 ? v_a_29058 = 0 : (v_a_29058 = 140 * v_t_29064, v_a_29058 += 160 * (0 < v_a_29058 ? 1 : -1)), v_o_29059 && (v_i_29052 & scope.v_hi_27809 ? v_a_29058 -= 310 * (4.5 + scope.mathMin(v_s_29057.Bi.length - 1 - v_r_29056, 3)) : v_a_29058 += 310 * (4.5 + scope.mathMin(v_r_29056, 3))), (!1 === (v_n_29055 = v_s_29057.Bi[v_n_29055].ze).Be || v_i_29052 & scope.v_gi_27815) && v_n_29055.nn(), !v_o_29059 || -7 !== v_t_29064 && 7 !== v_t_29064 ? v_n_29055.Be = !0 : v_n_29055.Be = !1, (0 === v_t_29064 ? v_d_29003 : v_h_29001).Ze(v_n_29055), v_o_29059 || v_l_29060 ? v_n_29055.rn(scope.v_Vo_28136, scope.v_Jo_28133, 24, 0) : v_n_29055.rn(scope.v_Vo_28136, scope.v_jo_28134, v_c_29061, 0), v_l_29060 ? (v_n_29055.rn(scope.v_Xo_28138, scope.v_Jo_28133, 10, 14), v_n_29055.rn(scope.v_zo_28139, scope.v_Jo_28133, 10, 14)) : v_o_29059 ? (v_n_29055.rn(scope.v_Xo_28138, scope.v_Jo_28133, 6, 0), v_n_29055.rn(scope.v_zo_28139, scope.v_Jo_28133, 6, 0)) : (v_n_29055.rn(scope.v_Xo_28138, scope.v_jo_28134, v_c_29061, 0), v_n_29055.rn(scope.v_zo_28139, scope.v_jo_28134, v_c_29061, 0)), v_n_29055.$e(v_a_29058, 0), v_o_29059 || 0 !== v_t_29064 ? v_n_29055.ln(.5, .5) : v_n_29055.ln(1, 1));
  }
  function v_y_29017(v_i_29065, v_t_29066) {
    var v_e_29067,
      v_n_29068 = void 0 === v_t_29066 ? v_g_29009.ji : v_t_29066,
      v_r_29069 = void 0 !== v_i_29065 && v_i_29065 & scope.v_vi_27813 ? 5 : 10;
    let v_s_29070 = 0,
      v_a_29071 = 0;
    var v_o_29072,
      v_l_29073 = void 0 !== v_i_29065 && (v_i_29065 & scope.v_fi_27807 || v_i_29065 & scope.v__i_27808);
    for (let v_t_29074 = -4; v_t_29074 < 5; ++v_t_29074) v_e_29067 = scope.v_qa_28086(v_t_29074 + v_n_29068, v_p_29012().length), 0 === v_t_29074 ? v_s_29070 = 0 : (v_s_29070 = 250 * v_t_29074, v_s_29070 += 178 * (0 < v_s_29070 ? 1 : -1)), v_l_29073 && (0 === (v_o_29072 = v_t_29074 + (v_i_29065 & scope.v_fi_27807 ? -1 : 1)) ? v_a_29071 = 0 : (v_a_29071 = 250 * v_o_29072, v_a_29071 += 178 * (0 < v_a_29071 ? 1 : -1))), (v_o_29072 = v_c_29008[v_t_29074 + 4]).We[0].Je = "catPanelCategory", v_o_29072.nn(), v_o_29072.rn(scope.v_Xo_28138, scope.v_jo_28134, v_r_29069, 0), v_o_29072.rn(scope.v_zo_28139, scope.v_jo_28134, v_r_29069, 0), v_o_29072.rn(scope.v_Vo_28136, scope.v_Ho_28132, v_r_29069, 0), v_l_29073 && (v_o_29072.$e(v_a_29071), v_t_29074 + (v_i_29065 & scope.v_fi_27807 ? -1 : 1) === 0 ? v_o_29072.ln(1, 1) : v_o_29072.ln(.7, .7)), v_o_29072.Be = !0, v_o_29072.We[1].Wt = v_p_29012()[v_e_29067].Ei, 0 === v_t_29074 && v_o_29072.Kt(), v_o_29072.$e(v_s_29070), 0 === v_t_29074 ? v_o_29072.ln(1, 1) : v_o_29072.ln(.7, .7);
  }
  function v_S_29018(v_t_29075, v_i_29076) {
    v_o_29011() && !v_i_29076 || (v_g_29009.Ui = !0, v_v_29004.Oi.Be = !0, v_v_29004.Ji.Be = !0, v_t_29075 ? (v_v_29004.wn.$e(-20, -225), v_v_29004.pn.$e(20, -225), v_g_29009.Hi === v_t_29075 || v_i_29076 ? (v_v_29004.Oi.Be = !1, v___29000.e8(5), v_g_29009.Ui = !1) : (v___29000.e8(7), scope.renderer.W6(() => {
      v_v_29004.Oi.Be = !1, v_g_29009.Ui = !1, v___29000.e8(5);
    }, 26 / 60 * 1e3))) : (v_v_29004.wn.$e(0, 0), v_v_29004.pn.$e(0, 0), v_g_29009.Hi === v_t_29075 || v_i_29076 ? (v_v_29004.Ji.Be = !1, v___29000.e8(5), v_g_29009.Ui = !1) : (v___29000.e8(8), v___29000.e8(rv.nameEntry_seq_panelBounce), scope.renderer.W6(() => {
      v_v_29004.Ji.Be = !1, v_g_29009.Ui = !1, v___29000.e8(5);
    }, 26 / 60 * 1e3))), v_g_29009.Hi = v_t_29075);
  }
  function v_A_29019(v_t_29077, v_i_29078, v_e_29079, v_n_29080) {
    v_i_29078 && v_n_29080 && v_i_29078.ze === v_n_29080.ze || (v_i_29078 && (v_i_29078.ze.un = !0), v_n_29080 && (v_n_29080.ze.un = !1, v_n_29080.ze.Kt()));
  }
  function v_x_29020(v_i_29081) {
    for (let v_t_29084 = 0; v_t_29084 < 8; ++v_t_29084) {
      var v_e_29082 = v_s_29005.ot("charCell" + v_t_29084),
        v_n_29083 = (v_e_29082.ot("charCellCursor").Be = v_t_29084 <= v_g_29009.Ny.length && !v_i_29081, v_g_29009.Ny.length === v_t_29084 && v___29000.e8(10, v_e_29082), v_e_29082.ot("charCellChar"));
      v_t_29084 < v_g_29009.Ny.length ? (v_n_29083.Be || v_i_29081 || v___29000.e8(11, v_e_29082), v_n_29083.Be = !0, v_e_29082.ot("charCellCharText").Wt = v_g_29009.Ny[v_t_29084]) : v_n_29083.Be = !1;
    }
  }
  function v_C_29021() {
    var v_t_29085 = v_g_29009.Hi;
    v_n_29013() && (scope.menuSystem.Cv(!0), v_t_29085 ? (scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("select", !1), scope.menuSystem.wt("backspace", !1), scope.menuSystem.wt("exit", !1), scope.menuSystem.wt("startCatMode", !1), scope.menuSystem.wt("endCatMode", !0), scope.menuSystem.kt("endCatMode", !(!v_g_29009.i0 && !v_g_29009.a0.Zn))) : (scope.menuSystem.wt("left", !0), scope.menuSystem.wt("right", !0), scope.menuSystem.wt("select", !0), scope.menuSystem.wt("backspace", !0), scope.menuSystem.wt("exit", !0), scope.menuSystem.wt("startCatMode", !0), scope.menuSystem.wt("endCatMode", !1)));
  }
  function v_T_29022(v_t_29086, v_i_29087) {
    if (!v_o_29011()) {
      var v_e_29088 = v_n_29013();
      switch (v_t_29086) {
        case "left":
          v_g_29009.Hi || v_g_29009.Ni <= 0 ? v_o_29011() || (scope.v_Ae_27892.dn("move_cursor"), v_k_29015(v_g_29009.ji - 1, scope.v_fi_27807, v_i_29087)) : v_o_29011() || (scope.v_Ae_27892.dn("move_cursor"), v_l_29014(v_g_29009.Ni - 1, scope.v_ui_27806, v_i_29087));
          break;
        case "right":
          v_g_29009.Hi || v_g_29009.Ni >= v_p_29012()[v_g_29009.ji].Bi.length - 1 ? v_o_29011() || (scope.v_Ae_27892.dn("move_cursor"), v_k_29015(v_g_29009.ji + 1, scope.v__i_27808, v_i_29087)) : v_o_29011() || (scope.v_Ae_27892.dn("move_cursor"), v_l_29014(v_g_29009.Ni + 1, scope.v_ui_27806, v_i_29087));
          break;
        case "select":
          scope.v_Ae_27892.dn("menu_in"), 0 === v_e_29088.Gy ? async function () {
            v_g_29009.Ny.length || (v_g_29009.Ny = "ＵＭＩＧＵＲＩ");
            scope.menuSystem.ft(), v_x_29020(!0), await scope.renderer.C7(scope.v_Ge_28204(30)), v_a_29006.Be = !0, v___29000.e8(4);
            var v_t_29089 = await new Promise(v_e_29090 => {
              function v_n_29091(v_t_29092, v_i_29093) {
                "down" === v_i_29093 && v_e_29090(v_t_29092);
              }
              scope.menuSystem.vt("yes", "Yes", 0, 8, scope.v_W0_27791, !1, !1, !1, "", (v_t_29094, v_i_29095) => v_n_29091(!0, v_t_29094)), scope.menuSystem.vt("no", "No", 8, 8, scope.v_si_27792, !1, !1, !1, "", (v_t_29096, v_i_29097) => v_n_29091(!1, v_t_29096)), scope.menuSystem.It(!0), scope.menuSystem.T9(scope.v_Ge_28204(20));
            });
            scope.menuSystem._t(), v___29000.e8(3), await scope.renderer.C7(scope.v_Ge_28204(10)), v_t_29089 ? (scope.menuSystem.dt(), v_b_29016(scope.v_hi_27809), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v___29000.e8(9), await scope.renderer.C7(scope.v_Ge_28204(30)), v_P_29024()) : v_x_29020(!1);
          }() : v_g_29009.Ny.length < 8 && (v___29000.e8(6), v_g_29009.Ny += String.fromCodePoint(1 !== v_e_29088.Gy ? v_e_29088.Gy : 12288), v_x_29020(), 8 === v_g_29009.Ny.length) && v_l_29014(v_p_29012()[v_g_29009.ji].Bi.length - 1, scope.v_gi_27815, 0);
          break;
        case "backspace":
          scope.v_Ae_27892.dn("menu_out"), 0 < v_g_29009.Ny.length && (v_g_29009.Ny = v_g_29009.Ny.substr(0, v_g_29009.Ny.length - 1), v_x_29020());
          break;
        case "exit":
          scope.v_Ae_27892.dn("menu_in"), v_l_29014(v_p_29012()[v_g_29009.ji].Bi.length - 1, scope.v_gi_27815, 0);
          break;
        case "startCatMode":
          scope.v_Ae_27892.dn("menu_in"), v_S_29018(!0);
          break;
        case "endCatMode":
          scope.v_Ae_27892.dn("menu_back"), v_S_29018(!1);
      }
      v_C_29021();
    }
  }
  async function v_I_29023() {
    scope.sceneManager.ni(), scope.sceneManager.ii(), v_g_29009.Ny = "ＵＭＩＧＵＲＩ", scope.menuSystem.dt(), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v_b_29016(scope.v_hi_27809), v___29000.e8(9), await scope.renderer.C7(scope.v_Ge_28204(30)), v_P_29024();
  }
  function v_P_29024() {
    scope.sceneManager.ni(), scope.sceneManager.ii(), scope.renderer._i("nameEntry"), scope.menuSystem.dt(), scope.handshake.rm.om = window.__umgForceProfile["name"] || v_g_29009.Ny, v_g_29009.Ee && v_g_29009.Ee(), v_g_29009.Ee = void 0;
  }
  return {
    ue: function (v_e_29098) {
      scope.v_Le_28076([v_i_29099 => {
        scope.languagePackages.it("tables/nameEntryTable.krtbl", function (v_t_29100) {
          null === v_t_29100 ? v_e_29098() : ((v_m_29010 = new scope.v_ms_27995()).uf(v_t_29100), scope.v_Me_28078(v_i_29099));
        });
      }, v_n_29101 => {
        scope.languagePackages.it("ui/nameEntry.rsb", function (v_t_29102) {
          v_t_29102 ? (v_t_29102 = new scope.v_Dl_28181(v_t_29102), scope.renderer.nt(v_t_29102.rt(scope.renderer.p5()), v_t_29103 => {
            v___29000 = v_t_29103, v_h_29001 = v_t_29103.lt.yk(23), v_r_29002 = v_t_29103.lt.yk(22), v_d_29003 = v_t_29103.lt.yk(25), v_v_29004.Oi = v_t_29103.lt.yk(18), v_v_29004.Ji = v_t_29103.lt.yk(20), v_v_29004.wn = v_t_29103.lt.yk(28), v_v_29004.pn = v_t_29103.lt.yk(27), v_s_29005 = v_t_29103.lt.yk(36), v_a_29006 = v_t_29103.lt.yk(29);
            var v_i_29104 = v_t_29103.lt.yk(86);
            for (let v_t_29106 = 0; v_t_29106 < v_i_29104.We.length; ++v_t_29106) v_i_29104.We[v_t_29106].Be = !1, v_w_29007[v_i_29104.We[v_t_29106].ct] = v_i_29104.We[v_t_29106];
            for (let v_t_29107 = 0; v_t_29107 < 9; ++v_t_29107) {
              var v_e_29105 = v_w_29007.catPanel.Ve(!0);
              v_e_29105.Te = 0, v_e_29105.Qt = 0, v_e_29105.We[1].Nd = 4 === v_t_29107, v_c_29008.push(v_e_29105), v_r_29002.Ze(v_e_29105);
            }
            scope.v_Me_28078(v_n_29101);
          })) : v_e_29098();
        });
      }, v_t_29108 => {
        scope.v_Fe_28101(v_e_29098);
      }]);
    },
    T0: function (v_t_29109) {
      scope.v_Le_28076([v_i_29110 => {
        (v_g_29009 = new v_e_28999()).Gi = !0, v_g_29009.Ee = v_t_29109, v_a_29006.Be = !1, v___29000.Jt = !1, scope.renderer.ut("nameEntry", v___29000, 50, v_t_29111 => {
          scope.v_Me_28078(v_i_29110);
        });
      }, async v_t_29112 => {
        scope.v_j1_27909.ti(), scope.menuSystem.dt(), v___29000.e8(5), v___29000.e8(1), v___29000.e8(rv.nameEntry_seq_sceneHide);
        var v_i_29113 = v_g_29009.a0,
          v_e_29114 = v_m_29010.ff("_entry");
        if (v_e_29114) {
          var v_n_29115 = {
            upperAlphabets: "ABC...",
            lowerAlphabets: "abc...",
            numbers: "012...",
            symbols: "#@&..."
          };
          for (const v_a_29118 of v_e_29114.hf()) for (const v_o_29119 of v_m_29010.ff("_cat" + v_a_29118[0]).hf()) {
            var v_r_29116 = new v_u_28996();
            if (v_r_29116.Ei = v_n_29115[v_o_29119[1]], 1 === v_o_29119[2]) {
              for (const v_l_29120 of v_m_29010.ff("_list" + v_o_29119[3]).hf()) {
                var v_s_29117 = new v_f_28997();
                0 === v_l_29120[2] ? v_s_29117.ze = v_w_29007.charItemPanelEnd.Ve(!0) : 1 === v_l_29120[2] ? v_s_29117.ze = v_w_29007.charItemPanelSpace.Ve(!0) : (v_s_29117.ze = v_w_29007.charItemPanel.Ve(!0), v_s_29117.ze.We[1].Wt = String.fromCodePoint(v_l_29120[2])), v_s_29117.ze.Te = 0, v_s_29117.ze.Qt = 0, v_s_29117.ze.Be = !1, v_s_29117.Gy = v_l_29120[2], v_r_29116.Bi.push(v_s_29117);
              }
              v_i_29113.Jn.push(v_r_29116);
            }
          }
        }
        for (const v_c_29121 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["select", "Select", 6, 4, scope.v_oi_27794, !1, "enter"], ["backspace", "BackSpace", 10, 2, scope.v_X0_27795, !1, ""], ["exit", "Exit", 12, 2, scope.v_si_27792, !1, ""], ["startCatMode", "ChangeCategory", 14, 2, scope.v_li_27796, !1, ""], ["endCatMode", "OkBack", 14, 2, scope.v_W0_27791, !1, ""]]) scope.menuSystem.vt(v_c_29121[0], v_c_29121[1], v_c_29121[2], v_c_29121[3], v_c_29121[4], v_c_29121[5], !1, !1, v_c_29121[6], function (v_t_29122, v_i_29123) {
          "down" === v_t_29122 && v_T_29022(this.Ae, v_i_29123);
        });
        scope.menuSystem.yv(), scope.menuSystem.T9(scope.v_Ge_28204(24)), v_S_29018(!1, !0);
        for (let v_t_29124 = 0; v_t_29124 < v_p_29012()[v_g_29009.ji].Bi.length; ++v_t_29124) v_p_29012()[v_g_29009.ji].Bi[v_t_29124].ze.nn();
        v_b_29016(scope.v_di_27810), v_b_29016(scope.v_wi_27814), v_y_29017(), v_C_29021(), v_x_29020(), v___29000.e8(0), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v___29000.Jt = !0, scope.renderer.W6(function () {
          scope.v_O1_27910.ti("NameEntry"), v_v_29004.wn.Be = !0, v_v_29004.pn.Be = !0, v_v_29004.Oi.Be = !0, scope.sceneManager.ft(new scope.v_M1_27898(v_I_29023, void 0)), scope.sceneManager.ri(100), scope.sceneManager.ti();
        }, scope.v_Ge_28204(24));
      }]);
    },
    Gi: () => v_g_29009.Gi
  };
}
