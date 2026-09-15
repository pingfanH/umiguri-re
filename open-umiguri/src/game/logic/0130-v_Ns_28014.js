// game: 语句 130 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Ns_28014 = function () {
    let v_r_33807 = !1;
    return {
      ue: function () {
        v_r_33807 = !1, recordsStore.ue();
      },
      hA: async function (v_t_33808) {
        return v_Xt_27648 ? v_Xt_27648.Fy(v_t_33808) : v_Ms_28009;
      },
      vA: function () {
        return v_r_33807 = !0, v_Ms_28009;
      },
      fA: async function () {
        return v_r_33807 ? (v_r_33807 = !1, v_Ms_28009) : v_Xt_27648 ? v_Xt_27648.Ry() : v_Ms_28009;
      },
      wA: function () {
        return v_r_33807;
      },
      sx: function () {
        return v_Xt_27648.nx;
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
        if (v_Xt_27648) return v_Xt_27648.Dy();
        await new Promise(v_t_33810 => recordsStore._n(function () {
          recordsStore.bi("player", !1), recordsStore.bi("records", !1), v_t_33810();
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
          charaId: handshake.On.im,
          charaTransIdx: handshake.On.nI,
          nameplateId: handshake.On.qp,
          titleId: handshake.On.$p,
          voiceId: handshake.On.Qp,
          voiceLong: handshake.On.tm,
          readNewsIdx: 0,
          lastMusicId: handshake.On.q.ee,
          lastMusicDiff: handshake.On.q.te,
          lastActivePlayLevel: handshake.On.q.ie,
          lastActiveLevelSelect: handshake.On.q.ne,
          lastActiveUltimaSelect: handshake.On.q.HP,
          musicListSort: handshake.On.q.pL,
          chatIds: handshake.On.iI
        };
      },
      cA: async function () {
        var v_t_33811;
        handshake.On.Mm = new Map(), handshake.On.Em = new Map(), v_r_33807 ? (v_t_33811 = await this.dA(), handshake.On.Wp = v_t_33811.targetVersion, handshake.On.zp = !1, handshake.On.Kp = v_t_33811.termsAgreed, handshake.rm.om = v_t_33811.playerName, handshake.rm.um = v_t_33811.playerLevel, handshake.rm.lm = v_t_33811.playerRating, handshake.On.im = v_t_33811.charaId, handshake.On.nI = v_t_33811.charaTransIdx, handshake.On.qp = v_t_33811.nameplateId, handshake.On.$p = v_t_33811.titleId, handshake.On.Qp = v_t_33811.voiceId, handshake.On.tm = v_t_33811.voiceLong, handshake.On.q.ee = v_t_33811.lastMusicId, handshake.On.q.te = v_t_33811.lastMusicDiff, handshake.On.q.ie = v_t_33811.lastActivePlayLevel, handshake.On.q.ne = v_t_33811.lastActiveLevelSelect, handshake.On.q.HP = v_t_33811.lastActiveUltimaSelect, handshake.On.q.pL = v_t_33811.musicListSort, handshake.On.iI = v_t_33811.chatIds) : (v_Xt_27648 ? (await v_Xt_27648.Ly(), await v_Xt_27648.My(), await v_Xt_27648.CA(), await v_Xt_27648.EA(), await v_Xt_27648.MA()) : await new Promise(v_t_33812 => recordsStore._n(function () {
          recordsStore.bi("player", !1), recordsStore.bi("records", !1), v_t_33812();
        })), v_t_33811 = void 0 === handshake.On.Xp.Yp ? 100 : handshake.On.Xp.Yp, v_Se_27889.fn(v_t_33811 / 100), await new Promise(v_t_33813 => v_Or_27965._n(handshake.On.Qp, !!handshake.On.tm, v_t_33813)));
      },
      _A: function () {
        handshake.On.re = 0, handshake.On.ae.scrollSpeed = v_ji_27860[0].scrollSpeed, handshake.On.ae.mirror = v_ji_27860[0].mirror, handshake.On.ae.jdgTimingA = v_ji_27860[0].jdgTimingA, handshake.On.ae.jdgTimingB = v_ji_27860[0].jdgTimingB, handshake.On.ae.jdgTimingAir = v_ji_27860[0].jdgTimingAir, handshake.On.ae.showLevel = v_ji_27860[0].showLevel, handshake.On.ae.showRating = v_ji_27860[0].showRating, handshake.On.ae.showOverpower = v_ji_27860[0].showOverpower, handshake.On.ae.trackSkip = v_ji_27860[0].trackSkip, handshake.On.ae.autoPlay = v_ji_27860[0].autoPlay, handshake.On.ae.volGuide = v_ji_27860[0].volGuide, handshake.On.ae.tapSe = v_ji_27860[0].tapSe, handshake.On.ae.volTap = v_ji_27860[0].volTap, handshake.On.ae.volExTap = v_ji_27860[0].volExTap, handshake.On.ae.volSlide = v_ji_27860[0].volSlide, handshake.On.ae.volAir = v_ji_27860[0].volAir, handshake.On.ae.volFlick = v_ji_27860[0].volFlick, handshake.On.ae.volSkill = v_ji_27860[0].volSkill, handshake.On.ae.jTimingSeCond = v_ji_27860[0].jTimingSeCond, handshake.On.ae.judgeAnsPos = v_ji_27860[0].judgeAnsPos, handshake.On.ae.judgeAnsJcDetails = v_ji_27860[0].judgeAnsJcDetails, handshake.On.ae.judgeAnsJDetails = v_ji_27860[0].judgeAnsJDetails, handshake.On.ae.judgeAnsADetails = v_ji_27860[0].judgeAnsADetails, handshake.On.ae.fieldLines = v_ji_27860[0].fieldLines, handshake.On.ae.fieldColor = v_ji_27860[0].fieldColor, handshake.On.ae.fieldWall = v_ji_27860[0].fieldWall, handshake.On.ae.fieldInfo = v_ji_27860[0].fieldInfo, handshake.On.Xp.Yp = 100;
      },
      uA: async function () {
        v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.TA() : (recordsStore.bi("player", !0), await new Promise(v_t_33814 => recordsStore.mi("player", v_t_33814))));
      },
      pA: async function () {
        v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.lA() : (recordsStore.bi("player", !0), await new Promise(v_t_33815 => recordsStore.mi("player", v_t_33815))));
      },
      mA: function (v_t_33816, v_i_33817) {
        var v_e_33818 = new v_zr_27970();
        return handshake.Mm.has(v_t_33816) && handshake.Mm.get(v_t_33816).has(v_i_33817) && (v_t_33816 = handshake.Mm.get(v_t_33816).get(v_i_33817), v_e_33818.Sr = mathMin(mathMax(v_t_33816.Sr, 0), 101e4), v_e_33818.ni = !!v_t_33816.ni, v_e_33818.R4 = !!v_t_33816.R4, v_e_33818.B4 = !!v_t_33816.B4, v_e_33818.M4 = v_t_33816.M4, v_e_33818.D4 = v_t_33816.D4, v_e_33818.P4 = v_t_33816.P4, v_e_33818.G4 = v_t_33816.G4), v_e_33818;
      },
      zy: async function (v_t_33819, v_i_33820, v_e_33821) {
        handshake.Mm.has(v_t_33819) || handshake.Mm.set(v_t_33819, new Map()), handshake.Mm.get(v_t_33819).has(v_i_33820) || handshake.Mm.get(v_t_33819).set(v_i_33820, new v_zr_27970());
        var v_n_33822 = handshake.Mm.get(v_t_33819).get(v_i_33820);
        v_n_33822.Sr = mathMin(mathMax(v_n_33822.Sr, v_e_33821.Sr, 0), 101e4), v_n_33822.ni = v_e_33821.ni || v_n_33822.ni, v_n_33822.R4 = v_e_33821.R4 || v_n_33822.R4, v_n_33822.B4 = v_e_33821.B4 || v_n_33822.B4, v_n_33822.M4 = v_e_33821.M4 || v_n_33822.M4, v_n_33822.D4 = v_e_33821.D4, v_n_33822.P4 = mathMax(v_n_33822.P4, v_e_33821.P4), v_n_33822.G4 = !0, v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.yA(v_t_33819, v_i_33820, v_n_33822.Sr, v_Bs_28013.PA(v_n_33822.ni, v_n_33822.R4, v_n_33822.B4, v_n_33822.M4), v_n_33822.P4, v_n_33822.D4) : (recordsStore.W0({
          K0: "music",
          ee: v_t_33819,
          te: v_i_33820
        }, "records", v_n_33822, !0), await new Promise(v_t_33823 => recordsStore.mi("records", v_t_33823))));
      },
      Hy: async function (v_t_33824, v_i_33825) {
        handshake.Mm.has(v_t_33824) && (handshake.Mm.get(v_t_33824).delete(v_i_33825), v_r_33807 || v_Xt_27648 || (recordsStore.W0({
          K0: "music",
          ee: v_t_33824,
          te: v_i_33825,
          RL: !0
        }, "records", {}, !0), await new Promise(v_t_33826 => recordsStore.mi("records", v_t_33826))));
      },
      gA: function (v_t_33827) {
        var v_i_33828 = new v_zr_27970();
        return handshake.Em.has(v_t_33827) && (v_t_33827 = handshake.Em.get(v_t_33827), v_i_33828.Sr = mathMin(mathMax(v_t_33827.Sr, 0), 303e4), v_i_33828.ni = !!v_t_33827.ni, v_i_33828.R4 = !!v_t_33827.R4, v_i_33828.B4 = !!v_t_33827.B4, v_i_33828.D4 = v_t_33827.D4, v_i_33828.P4 = v_t_33827.P4, v_i_33828.G4 = v_t_33827.G4), v_i_33828;
      },
      jy: async function (v_t_33829, v_i_33830) {
        handshake.Em.has(v_t_33829) || handshake.Em.set(v_t_33829, new v_zr_27970());
        var v_e_33831 = handshake.Em.get(v_t_33829);
        v_e_33831.Sr = mathMin(mathMax(v_e_33831.Sr, v_i_33830.Sr, 0), 303e4), v_e_33831.ni = v_i_33830.ni || v_e_33831.ni, v_e_33831.R4 = v_i_33830.R4 || v_e_33831.R4, v_e_33831.B4 = v_i_33830.B4 || v_e_33831.B4, v_e_33831.D4 = v_i_33830.D4, v_e_33831.P4 = mathMax(v_e_33831.P4, v_i_33830.P4), v_e_33831.G4 = !0, v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.AA(musicId, musicDiff, v_e_33831.Sr, v_Bs_28013.PA(v_e_33831.ni, v_e_33831.R4, v_e_33831.B4, 0), v_e_33831.P4, v_e_33831.D4) : (recordsStore.W0({
          K0: "course",
          lk: v_t_33829
        }, "records", v_e_33831, !0), await new Promise(v_t_33832 => recordsStore.mi("records", v_t_33832))));
      },
      Uy: async function (v_t_33833) {
        handshake.Em.has(v_t_33833) && (handshake.Em.delete(v_t_33833), v_r_33807 || v_Xt_27648 || (recordsStore.W0({
          K0: "course",
          lk: v_t_33833,
          RL: !0
        }, "records", {}, !0), await new Promise(v_t_33834 => recordsStore.mi("records", v_t_33834))));
      },
      kA: async function (v_t_33835) {
        var v_i_33836;
        v_r_33807 || v_Xt_27648 && (v_i_33836 = handshake.On.nm[v_t_33835]) && (await v_Xt_27648.xA(v_t_33835, v_i_33836.Pm, v_i_33836.Gm, v_i_33836.En, v_i_33836.jm));
      }
    };
  }();