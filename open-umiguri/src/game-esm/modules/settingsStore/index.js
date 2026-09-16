// 模块: settingsStore
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createSettingsStore(scope) {
  function v_s_29154() {
    this.Gi = !1, this.zS = 0, this.ZS = !0, this.qS = null, this.$S = [0, 0, 0];
  }
  let v___29155 = void 0,
    v_a_29156 = [],
    v_o_29157 = [],
    v_h_29158 = new v_s_29154(),
    v_n_29159;
  function v_l_29160() {
    v_g_29168(scope.v_z1_27915);
  }
  function v_c_29161() {
    scope.sceneManager.VS() ? scope.v_oe_27649.QS(65535) : scope.v_oe_27649.QS(scope.sceneManager.OS());
  }
  async function v_i_29162(v_t_29169) {
    var v_i_29170 = scope.handshake.On.iI[v_t_29169 + scope.v_bi_27819],
      v_e_29171 = scope.v_Wr_27968.oI(v_i_29170);
    v_e_29171 && (await scope.v_oe_27649.cI(v_i_29170, "")) === scope.v_Ms_28009 && (v_n_29159 && (v_n_29159.UA = 0), v_i_29170 = (v_n_29159 = v___29155.NA(107, 1, 320 + 2 * v_t_29169 * 80 + 80, 0)).GA.We[0], scope.v_sl_28151(v_t_29169 = v_o_29157[v_e_29171.lI].Ve(!0), v_e_29171), v_i_29170.tn(), v_i_29170.Ze(v_t_29169), v_i_29170.visible = !0, v___29155.e8(2 + v_e_29171.lI, v_i_29170), scope.v_Ae_27892.dn("chat" + v_e_29171.lI));
  }
  function v_u_29163() {
    scope.menuSystem.wt("next", scope.v_oe_27649.tx && 0 < scope.v_oe_27649.ix.size), scope.menuSystem.wt("cancel", 0 === scope.v_oe_27649.ix.size || !scope.v_oe_27649.tx), scope.menuSystem.wt("changeDisplay", !0), scope.menuSystem.wt("chat0", !0), scope.menuSystem.wt("chat1", !0), scope.menuSystem.wt("chat2", !0), scope.menuSystem.wt("chat3", !0), scope.menuSystem.Cv(!0);
  }
  async function v_f_29164(v_t_29172) {
    switch (v_t_29172) {
      case "next":
        return void (scope.v_oe_27649.tx && (await new Promise(v_t_29173 => scope.v_Te_27911.Ai(scope.v_Ue_28209("copCloseInviteDialog"), scope.v_G0_27772, 0, v_t_29173))) === scope.v_H0_27781 && v_g_29168(scope.v_z1_27915));
      case "cancel":
        return void ((await new Promise(v_t_29174 => scope.v_Te_27911.Ai(scope.v_oe_27649.tx ? scope.v_Ue_28209("copCancelInvite") : scope.v_Ue_28209("copCancelJoin"), scope.v_G0_27772, 0, v_t_29174))) === scope.v_H0_27781 && v_g_29168(scope.v_K1_27916));
      case "changeDisplay":
        v_h_29158.ZS = !v_h_29158.ZS, v_d_29165();
        break;
      case "chat0":
        v_i_29162(0);
        break;
      case "chat1":
        v_i_29162(1);
        break;
      case "chat2":
        v_i_29162(2);
        break;
      case "chat3":
        v_i_29162(3);
    }
    v_u_29163();
  }
  function v_d_29165() {
    v___29155.rsbTree.elementByIndex(15).Wt = v_h_29158.ZS ? scope.v_Xa_28081(v_h_29158.zS.toString(), 6, "0") : "AAAAAA";
  }
  function v_v_29166(v_t_29175) {
    let v_u_29176 = [34, 57, 80],
      v_f_29177 = [!1, !1, !1];
    for (let v_t_29179 = 0; v_t_29179 < 3; ++v_t_29179) v___29155.rsbTree.elementByIndex(v_u_29176[v_t_29179]).visible = !1;
    if (!v_t_29175) {
      let v_c_29180 = 0;
      for (scope.v_oe_27649.ix.forEach((v_t_29181, v_i_29182) => {
        var v_e_29183, v_n_29184, v_r_29185, v_s_29186, v_a_29187, v_o_29188, v_l_29189;
        v_t_29181.nx === scope.v_oe_27649.sx() || 3 <= v_c_29180 || (v_a_29187 = v___29155.rsbTree.elementByIndex(v_u_29176[v_c_29180]), v_e_29183 = v_a_29187.elementByName("playerInfo"), v_a_29187.visible = !0, v_f_29177[v_c_29180] = v_h_29158.$S[v_c_29180] !== v_t_29181.nx, v_h_29158.$S[v_c_29180] = v_t_29181.nx, v_a_29187 = v_t_29181, (v_l_29189 = v_e_29183).elementByName("guestTitleText").Wt = v_a_29187.ox, v_l_29189.elementByName("guestTitlePlate").Je = "title" + scope.v_ot_27785[v_a_29187.lx], v_l_29189.elementByName("guestPlayerName").Wt = v_a_29187.om, v_l_29189.elementByName("guestChara").zt = !0, v_l_29189.elementByName("guestChara").Xt = v_a_29187.ux, v_a_29187 = v_a_29187.lm, v_n_29184 = "" + scope.mathFloor(v_a_29187 / 100), v_r_29185 = scope.v_Xa_28081("" + v_a_29187 % 100, 2, "0"), v_s_29186 = scope.ratingColorName(v_a_29187), v_a_29187 = scope.ratingColorRgba(v_a_29187), v_o_29188 = v_l_29189.elementByName("guestRatingText"), v_l_29189 = v_l_29189.elementByName("guestRatingLabel"), v_o_29188.Wt = v_n_29184 + "P" + v_r_29185, v_o_29188.Ak = "rating" + v_s_29186, v_o_29188.Qe(v_a_29187[0], v_a_29187[1], v_a_29187[2], v_a_29187[3]), v_l_29189.Je = "numRating" + v_s_29186 + "Rating", v_l_29189.Qe(v_a_29187[0], v_a_29187[1], v_a_29187[2], v_a_29187[3]), v_e_29183.elementByName("guestConnecting").visible = !scope.v_oe_27649.uI(v_t_29181.nx), ++v_c_29180);
      }); v_c_29180 < 3; ++v_c_29180) v_h_29158.$S[v_c_29180] = 0;
      for (let v_t_29190 = 0; v_t_29190 < 3; ++v_t_29190) {
        var v_i_29178;
        v_f_29177[v_t_29190] && (v_i_29178 = v___29155.rsbTree.elementByIndex(v_u_29176[v_t_29190]), v___29155.e8(11, v_i_29178));
      }
    }
  }
  function v_w_29167(v_t_29191, v_i_29192) {
    var v_e_29193, v_n_29194, v_r_29195, v_s_29196;
    v_t_29191 === scope.v_js_28019 ? (v_v_29166(), v_u_29163(), 4 <= scope.v_oe_27649.ix.size && v_g_29168(scope.v_z1_27915)) : v_t_29191 === scope.v_sa_28036 ? (v_v_29166(), v_u_29163()) : v_t_29191 === scope.v_aa_28037 ? v_v_29166() : v_t_29191 === scope.v_ia_28032 ? 0 <= (v_e_29193 = v_h_29158.$S.findIndex(v_t_29197 => v_t_29197 === v_i_29192.nx)) && (v_n_29194 = scope.v_Wr_27968.oI(v_i_29192.fI)) && v_o_29157[v_n_29194.lI] && (v_r_29195 = v_a_29156[v_e_29193], scope.v_sl_28151(v_s_29196 = v_o_29157[v_n_29194.lI].Ve(!0), v_n_29194), v_r_29195.tn(), v_r_29195.Ze(v_s_29196), v_r_29195.visible = !0, v___29155.e8(2 + v_n_29194.lI, v_a_29156[v_e_29193]), scope.v_Ae_27892.dn("chat" + v_n_29194.lI)) : v_t_29191 !== scope.v_$s_28029 || scope.v_oe_27649.tx || (65535 === scope.v_oe_27649._x ? v_g_29168(scope.v_z1_27915) : scope.sceneManager.JS(scope.v_oe_27649._x));
  }
  async function v_g_29168(v_t_29198) {
    let v_i_29199 = v_t_29198;
    if (scope.v_oe_27649.hx(v_w_29167), scope.sceneManager.ni(), scope.sceneManager.ii(), scope.menuSystem.It(!1), scope.v_Te_27911.Li(), scope.audioFontHub.XS(), v_i_29199 === scope.v_z1_27915) if (scope.v_oe_27649.ix.size) {
      for (scope.v_oe_27649.Gi() && (await scope.v_oe_27649.QS(65535), scope.v_oe_27649.ix.size >= (scope.v_oe_27649.tx ? 3 : 4) ? await new Promise(v_t_29200 => scope.v_Te_27911.Ai(scope.v_Ue_28209("copClosedInviteByMemberLimit"), scope.v_ei_27773, 2e3, v_t_29200)) : scope.v_oe_27649.tx || (await new Promise(v_t_29201 => scope.v_Te_27911.Ai(scope.v_Ue_28209("copClosedInviteByHost"), scope.v_ei_27773, 2e3, v_t_29201)))), scope.v_V1_27912.T0(500);;) {
        let v_e_29202 = !1;
        if (scope.v_oe_27649.ix.forEach((v_t_29203, v_i_29204) => {
          v_t_29203.nx === scope.v_oe_27649.sx() || scope.v_oe_27649.uI(v_t_29203.nx) || (v_e_29202 = !0);
        }), !v_e_29202) break;
        await scope.renderer.C7(scope.v_Ge_28204(30));
      }
      scope.v_V1_27912.XS(), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.v_V1_27912.T0(500), await scope.v_oe_27649.tP(scope.v_pa_28050), await scope.v_oe_27649.iP(scope.v_pa_28050), scope.v_V1_27912.XS();
    } else v_i_29199 = scope.v_K1_27916, await new Promise(v_t_29205 => scope.v_Te_27911.Ai(scope.v_Ue_28209("copClosedModeByNoGuests"), scope.v_ei_27773 | scope.v_ri_27776, 2e3, v_t_29205));
    scope.v_Ae_27892.DI("coop_lobby_bgm", 50), v___29155.e8(10), v_n_29159 && (v_n_29159.UA = 0), scope.renderer.W6(() => {
      scope.menuSystem._t();
      for (const v_t_29206 of v_a_29156) v_t_29206.visible = !1;
      v___29155.i8(10), scope.renderer._i("coopLobby"), v_h_29158.Gi = !1, v_h_29158.qS && v_h_29158.qS(v_i_29199), v_h_29158.qS = void 0;
    }, 250);
  }
  return {
    ue: function (v_e_29207) {
      scope.v_Le_28076([v_i_29208 => {
        scope.languagePackages.it("ui/coopLobby.rsb", function (v_t_29209) {
          v_t_29209 ? (v_t_29209 = new scope.v_Dl_28181(v_t_29209), scope.renderer.nt(v_t_29209.rt(scope.renderer.p5()), v_t_29210 => {
            v___29155 = v_t_29210, v_a_29156 = [v___29155.rsbTree.elementByIndex(103), v___29155.rsbTree.elementByIndex(104), v___29155.rsbTree.elementByIndex(105)], v_o_29157 = [v___29155.rsbTree.elementByIndex(109), v___29155.rsbTree.elementByIndex(113), v___29155.rsbTree.elementByIndex(117), v___29155.rsbTree.elementByIndex(121), v___29155.rsbTree.elementByIndex(126), v___29155.rsbTree.elementByIndex(130), v___29155.rsbTree.elementByIndex(134), v___29155.rsbTree.elementByIndex(138)], scope.v_Me_28078(v_i_29208);
          })) : v_e_29207();
        });
      }, v_t_29211 => {
        scope.v_Fe_28101(v_e_29207);
      }]);
    },
    T0: async function (v_t_29212, v_i_29213) {
      var v_e_29214 = await scope.v_oe_27649.QS(100);
      if (65535 === v_e_29214) scope.v_V1_27912.T0(500), await scope.v_oe_27649.tP(scope.v_pa_28050), await scope.v_oe_27649.iP(scope.v_pa_28050), scope.v_V1_27912.XS(), v_i_29213 && v_i_29213(scope.v_z1_27915);else {
        scope.sceneManager.ni(), scope.sceneManager.ii(), scope.sceneManager.ei(), (v_h_29158 = new v_s_29154()).Gi = !0, v_h_29158.zS = v_t_29212, v_h_29158.qS = v_i_29213, v_h_29158.ZS = !1;
        for (const v_n_29215 of v_a_29156) v_n_29215.visible = !1;
        v___29155.Jt = !1, await new Promise(v_t_29216 => scope.renderer.ut("coopLobby", v___29155, 60, v_t_29216)), scope.v_oe_27649.vx(v_w_29167), v_d_29165(), v_v_29166(!0), scope.menuSystem.ft();
        for (const v_r_29217 of [["changeDisplay", "ChangeDisplay", 12, 2, scope.v_X0_27795, !1, ""], ["next", "Skip", 14, 2, scope.v_W0_27791, !1, ""], ["cancel", "Cancel", 14, 2, scope.v_si_27792, !1, ""]]) scope.menuSystem.vt(v_r_29217[0], v_r_29217[1], v_r_29217[2], v_r_29217[3], v_r_29217[4], v_r_29217[5], !1, !1, v_r_29217[6], function (v_t_29218, v_i_29219) {
          "down" === v_t_29218 && v_f_29164(this.Ae);
        });
        for (let v_t_29220 = 0; v_t_29220 < 4; ++v_t_29220) scope.menuSystem.aI("chat" + v_t_29220, scope.handshake.On.iI[v_t_29220 + scope.v_bi_27819], 2 * v_t_29220, !1, !1, function (v_t_29221, v_i_29222) {
          "down" === v_t_29221 && v_f_29164(this.Ae);
        });
        scope.menuSystem.yv(), scope.menuSystem.Ct(!0), v___29155.Jt = !0, v___29155.e8(0), scope.sceneManager.ft(new scope.v_M1_27898(v_l_29160, v_c_29161)), scope.sceneManager.ri(null === v_e_29214 ? 100 : v_e_29214), scope.sceneManager.ti(), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.menuSystem.Ct(!1), scope.v_Ae_27892.EI("coop_lobby_bgm", 50, .75), scope.audioFontHub.T0(), v_v_29166(), v_u_29163();
      }
    },
    Gi: () => v_h_29158.Gi
  };
}
