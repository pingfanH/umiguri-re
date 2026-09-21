// 模块: v_Ns_28014
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Ns_28014(scope) {
  let v_r_33807 = !1;
  return {
    ue: function () {
      v_r_33807 = !1, scope.recordsStore.ue();
    },
    hA: async function (v_t_33808) {
      return scope.v_Xt_27648 ? scope.v_Xt_27648.Fy(v_t_33808) : scope.v_Ms_28009;
    },
    vA: function () {
      return v_r_33807 = !0, scope.v_Ms_28009;
    },
    fA: async function () {
      return v_r_33807 ? (v_r_33807 = !1, scope.v_Ms_28009) : scope.v_Xt_27648 ? scope.v_Xt_27648.Ry() : scope.v_Ms_28009;
    },
    wA: function () {
      return v_r_33807;
    },
    sx: function () {
      return scope.v_Xt_27648.nx;
    },
    dA: async function () {
      if (v_r_33807) return {
        result: "ok",
        targetVersion: 1101,
        termsAgreed: !0,
        playerName: "ＵＭＩＧＵＲＩ",
        playerLevel: 1,
        playerRating: 0,
        playerMaxRating: 0,
        charaId: "UMIGURI/uni",
        charaTransIdx: 0,
        nameplateId: "_0000000_sys_default",
        titleId: "s_00000000",
        voiceId: "_0000000_sys_silence",
        voiceLong: !1,
        readNewsIdx: 0,
        lastMusicId: "",
        lastMusicDiff: 0,
        lastActivePlayLevel: 0,
        lastActiveLevelSelect: !1
      };
      if (scope.v_Xt_27648) return scope.v_Xt_27648.Dy();
      await new Promise(v_t_33810 => scope.recordsStore._n(function () {
        scope.recordsStore.bi("player", !1), scope.recordsStore.bi("records", !1), v_t_33810();
      }));
      var v_t_33809 = umgr_elc._;
      return {
        result: "ok",
        targetVersion: 1101,
        termsAgreed: !0,
        playerName: v_t_33809.O.ct,
        playerLevel: v_t_33809.O.p9,
        playerRating: v_t_33809.O.B,
        playerMaxRating: v_t_33809.O.B,
        charaId: scope.handshake.On.im,
        charaTransIdx: scope.handshake.On.nI,
        nameplateId: scope.handshake.On.qp,
        titleId: scope.handshake.On.$p,
        voiceId: scope.handshake.On.Qp,
        voiceLong: scope.handshake.On.tm,
        readNewsIdx: 0,
        lastMusicId: scope.handshake.On.q.ee,
        lastMusicDiff: scope.handshake.On.q.te,
        lastActivePlayLevel: scope.handshake.On.q.ie,
        lastActiveLevelSelect: scope.handshake.On.q.ne,
        lastActiveUltimaSelect: scope.handshake.On.q.HP,
        musicListSort: scope.handshake.On.q.pL,
        chatIds: scope.handshake.On.iI
      };
    },
    cA: async function () {
      var v_t_33811;
      scope.handshake.On.Mm = new Map(), scope.handshake.On.Em = new Map(), v_r_33807 ? (v_t_33811 = await this.dA(), scope.handshake.On.Wp = v_t_33811.targetVersion, scope.handshake.On.zp = !1, scope.handshake.On.Kp = v_t_33811.termsAgreed, scope.handshake.rm.om = window.__umgForceProfile["name"] || v_t_33811.playerName, scope.handshake.rm.um = window.__umgForceProfile["level"] || v_t_33811.playerLevel, scope.handshake.rm.lm = window.__umgForceProfile["rating"] || v_t_33811.playerRating, scope.handshake.On.im = v_t_33811.charaId, scope.handshake.On.nI = v_t_33811.charaTransIdx, scope.handshake.On.qp = v_t_33811.nameplateId, scope.handshake.On.$p = v_t_33811.titleId, scope.handshake.On.Qp = v_t_33811.voiceId, scope.handshake.On.tm = v_t_33811.voiceLong, scope.handshake.On.q.ee = v_t_33811.lastMusicId, scope.handshake.On.q.te = v_t_33811.lastMusicDiff, scope.handshake.On.q.ie = v_t_33811.lastActivePlayLevel, scope.handshake.On.q.ne = v_t_33811.lastActiveLevelSelect, scope.handshake.On.q.HP = v_t_33811.lastActiveUltimaSelect, scope.handshake.On.q.pL = v_t_33811.musicListSort, scope.handshake.On.iI = v_t_33811.chatIds) : (scope.v_Xt_27648 ? (await scope.v_Xt_27648.Ly(), await scope.v_Xt_27648.My(), await scope.v_Xt_27648.CA(), await scope.v_Xt_27648.EA(), await scope.v_Xt_27648.MA()) : await new Promise(v_t_33812 => scope.recordsStore._n(function () {
        scope.recordsStore.bi("player", !1), scope.recordsStore.bi("records", !1), v_t_33812();
      })), v_t_33811 = void 0 === scope.handshake.On.Xp.Yp ? 100 : scope.handshake.On.Xp.Yp, scope.v_Se_27889.fn(v_t_33811 / 100), await new Promise(v_t_33813 => scope.v_Or_27965._n(scope.handshake.On.Qp, !!scope.handshake.On.tm, v_t_33813)));
    },
    _A: function () {
      scope.handshake.On.re = 0, scope.handshake.On.ae.scrollSpeed = scope.v_ji_27860[0].scrollSpeed, scope.handshake.On.ae.mirror = scope.v_ji_27860[0].mirror, scope.handshake.On.ae.jdgTimingA = scope.v_ji_27860[0].jdgTimingA, scope.handshake.On.ae.jdgTimingB = scope.v_ji_27860[0].jdgTimingB, scope.handshake.On.ae.jdgTimingAir = scope.v_ji_27860[0].jdgTimingAir, scope.handshake.On.ae.showLevel = scope.v_ji_27860[0].showLevel, scope.handshake.On.ae.showRating = scope.v_ji_27860[0].showRating, scope.handshake.On.ae.showOverpower = scope.v_ji_27860[0].showOverpower, scope.handshake.On.ae.trackSkip = scope.v_ji_27860[0].trackSkip, scope.handshake.On.ae.autoPlay = scope.v_ji_27860[0].autoPlay, scope.handshake.On.ae.volGuide = scope.v_ji_27860[0].volGuide, scope.handshake.On.ae.tapSe = scope.v_ji_27860[0].tapSe, scope.handshake.On.ae.volTap = scope.v_ji_27860[0].volTap, scope.handshake.On.ae.volExTap = scope.v_ji_27860[0].volExTap, scope.handshake.On.ae.volSlide = scope.v_ji_27860[0].volSlide, scope.handshake.On.ae.volAir = scope.v_ji_27860[0].volAir, scope.handshake.On.ae.volFlick = scope.v_ji_27860[0].volFlick, scope.handshake.On.ae.volSkill = scope.v_ji_27860[0].volSkill, scope.handshake.On.ae.jTimingSeCond = scope.v_ji_27860[0].jTimingSeCond, scope.handshake.On.ae.judgeAnsPos = scope.v_ji_27860[0].judgeAnsPos, scope.handshake.On.ae.judgeAnsJcDetails = scope.v_ji_27860[0].judgeAnsJcDetails, scope.handshake.On.ae.judgeAnsJDetails = scope.v_ji_27860[0].judgeAnsJDetails, scope.handshake.On.ae.judgeAnsADetails = scope.v_ji_27860[0].judgeAnsADetails, scope.handshake.On.ae.fieldLines = scope.v_ji_27860[0].fieldLines, scope.handshake.On.ae.fieldColor = scope.v_ji_27860[0].fieldColor, scope.handshake.On.ae.fieldWall = scope.v_ji_27860[0].fieldWall, scope.handshake.On.ae.fieldInfo = scope.v_ji_27860[0].fieldInfo, scope.handshake.On.Xp.Yp = 100;
    },
    uA: async function () {
      v_r_33807 || (scope.v_Xt_27648 ? await scope.v_Xt_27648.TA() : (scope.recordsStore.bi("player", !0), await new Promise(v_t_33814 => scope.recordsStore.mi("player", v_t_33814))));
    },
    pA: async function () {
      v_r_33807 || (scope.v_Xt_27648 ? await scope.v_Xt_27648.lA() : (scope.recordsStore.bi("player", !0), await new Promise(v_t_33815 => scope.recordsStore.mi("player", v_t_33815))));
    },
    mA: function (v_t_33816, v_i_33817) {
      var v_e_33818 = new scope.v_zr_27970();
      return scope.handshake.Mm.has(v_t_33816) && scope.handshake.Mm.get(v_t_33816).has(v_i_33817) && (v_t_33816 = scope.handshake.Mm.get(v_t_33816).get(v_i_33817), v_e_33818.Sr = scope.mathMin(scope.mathMax(v_t_33816.Sr, 0), 101e4), v_e_33818.ni = !!v_t_33816.ni, v_e_33818.R4 = !!v_t_33816.R4, v_e_33818.B4 = !!v_t_33816.B4, v_e_33818.M4 = v_t_33816.M4, v_e_33818.D4 = v_t_33816.D4, v_e_33818.P4 = v_t_33816.P4, v_e_33818.G4 = v_t_33816.G4), v_e_33818;
    },
    zy: async function (v_t_33819, v_i_33820, v_e_33821) {
      scope.handshake.Mm.has(v_t_33819) || scope.handshake.Mm.set(v_t_33819, new Map()), scope.handshake.Mm.get(v_t_33819).has(v_i_33820) || scope.handshake.Mm.get(v_t_33819).set(v_i_33820, new scope.v_zr_27970());
      var v_n_33822 = scope.handshake.Mm.get(v_t_33819).get(v_i_33820);
      v_n_33822.Sr = scope.mathMin(scope.mathMax(v_n_33822.Sr, v_e_33821.Sr, 0), 101e4), v_n_33822.ni = v_e_33821.ni || v_n_33822.ni, v_n_33822.R4 = v_e_33821.R4 || v_n_33822.R4, v_n_33822.B4 = v_e_33821.B4 || v_n_33822.B4, v_n_33822.M4 = v_e_33821.M4 || v_n_33822.M4, v_n_33822.D4 = v_e_33821.D4, v_n_33822.P4 = scope.mathMax(v_n_33822.P4, v_e_33821.P4), v_n_33822.G4 = !0, v_r_33807 || (scope.v_Xt_27648 ? await scope.v_Xt_27648.yA(v_t_33819, v_i_33820, v_n_33822.Sr, scope.v_Bs_28013.PA(v_n_33822.ni, v_n_33822.R4, v_n_33822.B4, v_n_33822.M4), v_n_33822.P4, v_n_33822.D4) : (scope.recordsStore.W0({
        K0: "music",
        ee: v_t_33819,
        te: v_i_33820
      }, "records", v_n_33822, !0), await new Promise(v_t_33823 => scope.recordsStore.mi("records", v_t_33823))));
    },
    Hy: async function (v_t_33824, v_i_33825) {
      scope.handshake.Mm.has(v_t_33824) && (scope.handshake.Mm.get(v_t_33824).delete(v_i_33825), v_r_33807 || scope.v_Xt_27648 || (scope.recordsStore.W0({
        K0: "music",
        ee: v_t_33824,
        te: v_i_33825,
        RL: !0
      }, "records", {}, !0), await new Promise(v_t_33826 => scope.recordsStore.mi("records", v_t_33826))));
    },
    gA: function (v_t_33827) {
      var v_i_33828 = new scope.v_zr_27970();
      return scope.handshake.Em.has(v_t_33827) && (v_t_33827 = scope.handshake.Em.get(v_t_33827), v_i_33828.Sr = scope.mathMin(scope.mathMax(v_t_33827.Sr, 0), 303e4), v_i_33828.ni = !!v_t_33827.ni, v_i_33828.R4 = !!v_t_33827.R4, v_i_33828.B4 = !!v_t_33827.B4, v_i_33828.D4 = v_t_33827.D4, v_i_33828.P4 = v_t_33827.P4, v_i_33828.G4 = v_t_33827.G4), v_i_33828;
    },
    jy: async function (v_t_33829, v_i_33830) {
      scope.handshake.Em.has(v_t_33829) || scope.handshake.Em.set(v_t_33829, new scope.v_zr_27970());
      var v_e_33831 = scope.handshake.Em.get(v_t_33829);
      v_e_33831.Sr = scope.mathMin(scope.mathMax(v_e_33831.Sr, v_i_33830.Sr, 0), 303e4), v_e_33831.ni = v_i_33830.ni || v_e_33831.ni, v_e_33831.R4 = v_i_33830.R4 || v_e_33831.R4, v_e_33831.B4 = v_i_33830.B4 || v_e_33831.B4, v_e_33831.D4 = v_i_33830.D4, v_e_33831.P4 = scope.mathMax(v_e_33831.P4, v_i_33830.P4), v_e_33831.G4 = !0, v_r_33807 || (scope.v_Xt_27648 ? await scope.v_Xt_27648.AA(musicId, musicDiff, v_e_33831.Sr, scope.v_Bs_28013.PA(v_e_33831.ni, v_e_33831.R4, v_e_33831.B4, 0), v_e_33831.P4, v_e_33831.D4) : (scope.recordsStore.W0({
        K0: "course",
        lk: v_t_33829
      }, "records", v_e_33831, !0), await new Promise(v_t_33832 => scope.recordsStore.mi("records", v_t_33832))));
    },
    Uy: async function (v_t_33833) {
      scope.handshake.Em.has(v_t_33833) && (scope.handshake.Em.delete(v_t_33833), v_r_33807 || scope.v_Xt_27648 || (scope.recordsStore.W0({
        K0: "course",
        lk: v_t_33833,
        RL: !0
      }, "records", {}, !0), await new Promise(v_t_33834 => scope.recordsStore.mi("records", v_t_33834))));
    },
    kA: async function (v_t_33835) {
      var v_i_33836;
      v_r_33807 || scope.v_Xt_27648 && (v_i_33836 = scope.handshake.On.nm[v_t_33835]) && (await scope.v_Xt_27648.xA(v_t_33835, v_i_33836.Pm, v_i_33836.Gm, v_i_33836.En, v_i_33836.jm));
    }
  };
}
