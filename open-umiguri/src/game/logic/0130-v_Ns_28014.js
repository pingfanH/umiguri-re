// game: 语句 130 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Ns_28014 = function () {
    let v_r_33807 = !1;
    return {
      ue: function () {
        v_r_33807 = !1, v_jr_27964.ue();
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
        await new Promise(v_t_33810 => v_jr_27964._n(function () {
          v_jr_27964.bi("player", !1), v_jr_27964.bi("records", !1), v_t_33810();
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
          charaId: v_ye_27858.On.im,
          charaTransIdx: v_ye_27858.On.nI,
          nameplateId: v_ye_27858.On.qp,
          titleId: v_ye_27858.On.$p,
          voiceId: v_ye_27858.On.Qp,
          voiceLong: v_ye_27858.On.tm,
          readNewsIdx: 0,
          lastMusicId: v_ye_27858.On.q.ee,
          lastMusicDiff: v_ye_27858.On.q.te,
          lastActivePlayLevel: v_ye_27858.On.q.ie,
          lastActiveLevelSelect: v_ye_27858.On.q.ne,
          lastActiveUltimaSelect: v_ye_27858.On.q.HP,
          musicListSort: v_ye_27858.On.q.pL,
          chatIds: v_ye_27858.On.iI
        };
      },
      cA: async function () {
        var v_t_33811;
        v_ye_27858.On.Mm = new Map(), v_ye_27858.On.Em = new Map(), v_r_33807 ? (v_t_33811 = await this.dA(), v_ye_27858.On.Wp = v_t_33811.targetVersion, v_ye_27858.On.zp = !1, v_ye_27858.On.Kp = v_t_33811.termsAgreed, v_ye_27858.rm.om = v_t_33811.playerName, v_ye_27858.rm.um = v_t_33811.playerLevel, v_ye_27858.rm.lm = v_t_33811.playerRating, v_ye_27858.On.im = v_t_33811.charaId, v_ye_27858.On.nI = v_t_33811.charaTransIdx, v_ye_27858.On.qp = v_t_33811.nameplateId, v_ye_27858.On.$p = v_t_33811.titleId, v_ye_27858.On.Qp = v_t_33811.voiceId, v_ye_27858.On.tm = v_t_33811.voiceLong, v_ye_27858.On.q.ee = v_t_33811.lastMusicId, v_ye_27858.On.q.te = v_t_33811.lastMusicDiff, v_ye_27858.On.q.ie = v_t_33811.lastActivePlayLevel, v_ye_27858.On.q.ne = v_t_33811.lastActiveLevelSelect, v_ye_27858.On.q.HP = v_t_33811.lastActiveUltimaSelect, v_ye_27858.On.q.pL = v_t_33811.musicListSort, v_ye_27858.On.iI = v_t_33811.chatIds) : (v_Xt_27648 ? (await v_Xt_27648.Ly(), await v_Xt_27648.My(), await v_Xt_27648.CA(), await v_Xt_27648.EA(), await v_Xt_27648.MA()) : await new Promise(v_t_33812 => v_jr_27964._n(function () {
          v_jr_27964.bi("player", !1), v_jr_27964.bi("records", !1), v_t_33812();
        })), v_t_33811 = void 0 === v_ye_27858.On.Xp.Yp ? 100 : v_ye_27858.On.Xp.Yp, v_Se_27889.fn(v_t_33811 / 100), await new Promise(v_t_33813 => v_Or_27965._n(v_ye_27858.On.Qp, !!v_ye_27858.On.tm, v_t_33813)));
      },
      _A: function () {
        v_ye_27858.On.re = 0, v_ye_27858.On.ae.scrollSpeed = v_ji_27860[0].scrollSpeed, v_ye_27858.On.ae.mirror = v_ji_27860[0].mirror, v_ye_27858.On.ae.jdgTimingA = v_ji_27860[0].jdgTimingA, v_ye_27858.On.ae.jdgTimingB = v_ji_27860[0].jdgTimingB, v_ye_27858.On.ae.jdgTimingAir = v_ji_27860[0].jdgTimingAir, v_ye_27858.On.ae.showLevel = v_ji_27860[0].showLevel, v_ye_27858.On.ae.showRating = v_ji_27860[0].showRating, v_ye_27858.On.ae.showOverpower = v_ji_27860[0].showOverpower, v_ye_27858.On.ae.trackSkip = v_ji_27860[0].trackSkip, v_ye_27858.On.ae.autoPlay = v_ji_27860[0].autoPlay, v_ye_27858.On.ae.volGuide = v_ji_27860[0].volGuide, v_ye_27858.On.ae.tapSe = v_ji_27860[0].tapSe, v_ye_27858.On.ae.volTap = v_ji_27860[0].volTap, v_ye_27858.On.ae.volExTap = v_ji_27860[0].volExTap, v_ye_27858.On.ae.volSlide = v_ji_27860[0].volSlide, v_ye_27858.On.ae.volAir = v_ji_27860[0].volAir, v_ye_27858.On.ae.volFlick = v_ji_27860[0].volFlick, v_ye_27858.On.ae.volSkill = v_ji_27860[0].volSkill, v_ye_27858.On.ae.jTimingSeCond = v_ji_27860[0].jTimingSeCond, v_ye_27858.On.ae.judgeAnsPos = v_ji_27860[0].judgeAnsPos, v_ye_27858.On.ae.judgeAnsJcDetails = v_ji_27860[0].judgeAnsJcDetails, v_ye_27858.On.ae.judgeAnsJDetails = v_ji_27860[0].judgeAnsJDetails, v_ye_27858.On.ae.judgeAnsADetails = v_ji_27860[0].judgeAnsADetails, v_ye_27858.On.ae.fieldLines = v_ji_27860[0].fieldLines, v_ye_27858.On.ae.fieldColor = v_ji_27860[0].fieldColor, v_ye_27858.On.ae.fieldWall = v_ji_27860[0].fieldWall, v_ye_27858.On.ae.fieldInfo = v_ji_27860[0].fieldInfo, v_ye_27858.On.Xp.Yp = 100;
      },
      uA: async function () {
        v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.TA() : (v_jr_27964.bi("player", !0), await new Promise(v_t_33814 => v_jr_27964.mi("player", v_t_33814))));
      },
      pA: async function () {
        v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.lA() : (v_jr_27964.bi("player", !0), await new Promise(v_t_33815 => v_jr_27964.mi("player", v_t_33815))));
      },
      mA: function (v_t_33816, v_i_33817) {
        var v_e_33818 = new v_zr_27970();
        return v_ye_27858.Mm.has(v_t_33816) && v_ye_27858.Mm.get(v_t_33816).has(v_i_33817) && (v_t_33816 = v_ye_27858.Mm.get(v_t_33816).get(v_i_33817), v_e_33818.Sr = v_me_27822(v_pe_27823(v_t_33816.Sr, 0), 101e4), v_e_33818.ni = !!v_t_33816.ni, v_e_33818.R4 = !!v_t_33816.R4, v_e_33818.B4 = !!v_t_33816.B4, v_e_33818.M4 = v_t_33816.M4, v_e_33818.D4 = v_t_33816.D4, v_e_33818.P4 = v_t_33816.P4, v_e_33818.G4 = v_t_33816.G4), v_e_33818;
      },
      zy: async function (v_t_33819, v_i_33820, v_e_33821) {
        v_ye_27858.Mm.has(v_t_33819) || v_ye_27858.Mm.set(v_t_33819, new Map()), v_ye_27858.Mm.get(v_t_33819).has(v_i_33820) || v_ye_27858.Mm.get(v_t_33819).set(v_i_33820, new v_zr_27970());
        var v_n_33822 = v_ye_27858.Mm.get(v_t_33819).get(v_i_33820);
        v_n_33822.Sr = v_me_27822(v_pe_27823(v_n_33822.Sr, v_e_33821.Sr, 0), 101e4), v_n_33822.ni = v_e_33821.ni || v_n_33822.ni, v_n_33822.R4 = v_e_33821.R4 || v_n_33822.R4, v_n_33822.B4 = v_e_33821.B4 || v_n_33822.B4, v_n_33822.M4 = v_e_33821.M4 || v_n_33822.M4, v_n_33822.D4 = v_e_33821.D4, v_n_33822.P4 = v_pe_27823(v_n_33822.P4, v_e_33821.P4), v_n_33822.G4 = !0, v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.yA(v_t_33819, v_i_33820, v_n_33822.Sr, v_Bs_28013.PA(v_n_33822.ni, v_n_33822.R4, v_n_33822.B4, v_n_33822.M4), v_n_33822.P4, v_n_33822.D4) : (v_jr_27964.W0({
          K0: "music",
          ee: v_t_33819,
          te: v_i_33820
        }, "records", v_n_33822, !0), await new Promise(v_t_33823 => v_jr_27964.mi("records", v_t_33823))));
      },
      Hy: async function (v_t_33824, v_i_33825) {
        v_ye_27858.Mm.has(v_t_33824) && (v_ye_27858.Mm.get(v_t_33824).delete(v_i_33825), v_r_33807 || v_Xt_27648 || (v_jr_27964.W0({
          K0: "music",
          ee: v_t_33824,
          te: v_i_33825,
          RL: !0
        }, "records", {}, !0), await new Promise(v_t_33826 => v_jr_27964.mi("records", v_t_33826))));
      },
      gA: function (v_t_33827) {
        var v_i_33828 = new v_zr_27970();
        return v_ye_27858.Em.has(v_t_33827) && (v_t_33827 = v_ye_27858.Em.get(v_t_33827), v_i_33828.Sr = v_me_27822(v_pe_27823(v_t_33827.Sr, 0), 303e4), v_i_33828.ni = !!v_t_33827.ni, v_i_33828.R4 = !!v_t_33827.R4, v_i_33828.B4 = !!v_t_33827.B4, v_i_33828.D4 = v_t_33827.D4, v_i_33828.P4 = v_t_33827.P4, v_i_33828.G4 = v_t_33827.G4), v_i_33828;
      },
      jy: async function (v_t_33829, v_i_33830) {
        v_ye_27858.Em.has(v_t_33829) || v_ye_27858.Em.set(v_t_33829, new v_zr_27970());
        var v_e_33831 = v_ye_27858.Em.get(v_t_33829);
        v_e_33831.Sr = v_me_27822(v_pe_27823(v_e_33831.Sr, v_i_33830.Sr, 0), 303e4), v_e_33831.ni = v_i_33830.ni || v_e_33831.ni, v_e_33831.R4 = v_i_33830.R4 || v_e_33831.R4, v_e_33831.B4 = v_i_33830.B4 || v_e_33831.B4, v_e_33831.D4 = v_i_33830.D4, v_e_33831.P4 = v_pe_27823(v_e_33831.P4, v_i_33830.P4), v_e_33831.G4 = !0, v_r_33807 || (v_Xt_27648 ? await v_Xt_27648.AA(musicId, musicDiff, v_e_33831.Sr, v_Bs_28013.PA(v_e_33831.ni, v_e_33831.R4, v_e_33831.B4, 0), v_e_33831.P4, v_e_33831.D4) : (v_jr_27964.W0({
          K0: "course",
          lk: v_t_33829
        }, "records", v_e_33831, !0), await new Promise(v_t_33832 => v_jr_27964.mi("records", v_t_33832))));
      },
      Uy: async function (v_t_33833) {
        v_ye_27858.Em.has(v_t_33833) && (v_ye_27858.Em.delete(v_t_33833), v_r_33807 || v_Xt_27648 || (v_jr_27964.W0({
          K0: "course",
          lk: v_t_33833,
          RL: !0
        }, "records", {}, !0), await new Promise(v_t_33834 => v_jr_27964.mi("records", v_t_33834))));
      },
      kA: async function (v_t_33835) {
        var v_i_33836;
        v_r_33807 || v_Xt_27648 && (v_i_33836 = v_ye_27858.On.nm[v_t_33835]) && (await v_Xt_27648.xA(v_t_33835, v_i_33836.Pm, v_i_33836.Gm, v_i_33836.En, v_i_33836.jm));
      }
    };
  }();