// game: 语句 129 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Bs_28013.prototype = {
    Qy: async function (v_t_33752, v_i_33753, v_e_33754) {
      v_x1_27888("UmgrNetworkClient: " + v_i_33753);
      try {
        return await (await fetch("http://" + this.Yy + ":" + this.P7 + v_i_33753, {
          method: v_t_33752,
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
            "X-cli": v_G_27652,
            "X-cliver": v_U_27653,
            "X-clitest": "false"
          },
          body: JSON.stringify(v_e_33754)
        })).json();
      } catch (v_t_33755) {
        return {
          result: "bad"
        };
      }
    },
    tA: function () {},
    Fy: async function (v_t_33756) {
      v_t_33756 = await this.Qy("POST", "/1/user/login", {
        code: v_t_33756,
        nw_token: this.qy
      });
      return "ok" === v_t_33756.result ? (this.Zy = v_t_33756.token, this.nx = v_t_33756.user_id, v_Ms_28009) : "card_dup_login" === v_t_33756.result ? v_Fs_28012 : v_Es_28010;
    },
    Ry: async function () {
      return this.Zy ? (await this.Qy("POST", "/1/user/logout", {
        token: this.Zy,
        nw_token: this.qy
      }), this.Zy = null, v_Ms_28009) : v_Es_28010;
    },
    eA: function (v_t_33757, v_i_33758) {},
    Dy: async function () {
      var v_t_33759;
      return this.Zy ? "ok" === (v_t_33759 = await this.Qy("POST", "/1/umiguri/getProfile", {
        token: this.Zy,
        nw_token: this.qy
      })).result ? v_t_33759 : "card_not_found" === v_t_33759.result ? -11 : v_Es_28010 : v_Es_28010;
    },
    bA: async function (v_t_33760) {
      return this.Zy && "ok" === (v_t_33760 = await this.Qy("POST", "/1/umiguri/setProfile", {
        token: this.Zy,
        nw_token: this.qy,
        data: v_t_33760
      })).result ? v_t_33760 : v_Es_28010;
    },
    iA: async function () {
      var v_t_33761;
      return this.Zy ? "ok" === (v_t_33761 = await this.Qy("POST", "/1/umiguri/getOptions", {
        token: this.Zy,
        nw_token: this.qy
      })).result ? v_t_33761 : "card_not_found" === v_t_33761.result ? -11 : v_Es_28010 : v_Es_28010;
    },
    nA: async function (v_t_33762) {
      return this.Zy && "ok" === (v_t_33762 = await this.Qy("POST", "/1/umiguri/setOptions", {
        token: this.Zy,
        nw_token: this.qy,
        data: v_t_33762
      })).result ? v_t_33762 : v_Es_28010;
    },
    rA: async function () {
      var v_t_33763;
      return this.Zy ? "ok" === (v_t_33763 = await this.Qy("POST", "/1/umiguri/getRecords", {
        token: this.Zy,
        nw_token: this.qy
      })).result ? v_t_33763 : "card_not_found" === v_t_33763.result ? -11 : v_Es_28010 : v_Es_28010;
    },
    yA: async function (v_t_33764, v_i_33765, v_e_33766, v_n_33767, v_r_33768, v_s_33769) {
      return this.Zy && "ok" === (v_t_33764 = await this.Qy("POST", "/1/umiguri/setRecord", {
        token: this.Zy,
        nw_token: this.qy,
        data: {
          musicId: v_t_33764,
          musicDiff: v_i_33765,
          score: v_e_33766,
          flags: v_n_33767,
          playCount: v_r_33768,
          updatedAt: v_s_33769
        }
      })).result ? v_t_33764 : v_Es_28010;
    },
    sA: async function () {
      var v_t_33770;
      return this.Zy ? "ok" === (v_t_33770 = await this.Qy("POST", "/1/umiguri/getCourseRecords", {
        token: this.Zy,
        nw_token: this.qy
      })).result ? v_t_33770 : "card_not_found" === v_t_33770.result ? -11 : v_Es_28010 : v_Es_28010;
    },
    AA: async function (v_t_33771, v_i_33772, v_e_33773, v_n_33774, v_r_33775) {
      return this.Zy && "ok" === (v_t_33771 = await this.Qy("POST", "/1/umiguri/setRecord", {
        token: this.Zy,
        nw_token: this.qy,
        data: {
          courseId: v_t_33771,
          score: v_i_33772,
          flags: v_e_33773,
          playCount: v_n_33774,
          updatedAt: v_r_33775
        }
      })).result ? v_t_33771 : v_Es_28010;
    },
    SA: async function () {
      var v_t_33776;
      return this.Zy ? "ok" === (v_t_33776 = await this.Qy("POST", "/1/umiguri/getCharaStates", {
        token: this.Zy,
        nw_token: this.qy
      })).result ? v_t_33776 : "card_not_found" === v_t_33776.result ? -11 : v_Es_28010 : v_Es_28010;
    },
    xA: async function (v_t_33777, v_i_33778, v_e_33779, v_n_33780, v_r_33781) {
      return this.Zy && "ok" === (v_t_33777 = await this.Qy("POST", "/1/umiguri/setCharaState", {
        token: this.Zy,
        nw_token: this.qy,
        data: {
          charaId: v_t_33777,
          rank: v_i_33778,
          exp: v_e_33779,
          skillId: v_n_33780,
          transIdx: v_r_33781
        }
      })).result ? v_t_33777 : v_Es_28010;
    },
    Ly: async function () {
      var v_i_33782 = await this.Dy();
      if (v_Bs_28013.By(v_i_33782)) return !1;
      handshake.On.Wp = v_i_33782.targetVersion, handshake.On.zp = !1, handshake.On.Kp = v_i_33782.termsAgreed, handshake.rm.om = v_i_33782.playerName, handshake.rm.um = v_i_33782.playerLevel, handshake.rm.lm = v_i_33782.playerRating, handshake.On.im = v_i_33782.charaId, handshake.On.nI = v_i_33782.charaTransIdx, handshake.On.qp = v_i_33782.nameplateId, handshake.On.$p = v_i_33782.titleId, handshake.On.Qp = v_i_33782.voiceId, handshake.On.tm = v_i_33782.voiceLong, handshake.On.q.ee = v_i_33782.lastMusicId, handshake.On.q.te = v_i_33782.lastMusicDiff, handshake.On.q.ie = v_i_33782.lastActivePlayLevel, handshake.On.q.ne = v_i_33782.lastActiveLevelSelect, handshake.On.q.HP = v_i_33782.lastActiveUltimaSelect, handshake.On.q.pL = v_i_33782.musicListSort;
      for (let v_t_33783 = 0; v_t_33783 < 20; ++v_t_33783) handshake.On.iI[v_t_33783] = v_i_33782.chatIds[v_t_33783];
      return !0;
    },
    Ey: async function () {
      return handshake.On.Wp = 1101, handshake.On.zp = !0, handshake.On.Kp = !1, handshake.rm.om = "ＵＭＩＧＵＲＩ", handshake.rm.um = 1, handshake.rm.lm = 0, handshake.On.im = "UMIGURI/uni", handshake.On.nI = 0, handshake.On.qp = "_0000000_sys_default", handshake.On.$p = "s_00000000", handshake.On.Qp = "_0000000_sys_silence", handshake.On.tm = !1, handshake.On.q.ee = "", handshake.On.q.te = 0, handshake.On.q.ie = 0, handshake.On.q.ne = !1, handshake.On.q.HP = !1, handshake.On.q.pL = 0, handshake.On.iI = v_Ji_27856.concat(), !0;
    },
    TA: async function () {
      var v_t_33784 = {
        targetVersion: handshake.On.Wp,
        termsAgreed: handshake.On.Kp,
        playerName: handshake.rm.om,
        playerLevel: handshake.rm.um,
        playerRating: handshake.rm.lm,
        playerMaxRating: 0,
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
      return v_Bs_28013.By(await this.bA(v_t_33784));
    },
    My: async function () {
      var v_t_33785 = await this.iA();
      return !v_Bs_28013.By(v_t_33785) && (handshake.On.re = v_Pe_28064(v_t_33785.optionPreset), handshake.On.ae.scrollSpeed = v_Pe_28064(v_t_33785.scrollSpeed), handshake.On.ae.mirror = v_Pe_28064(v_t_33785.mirror), handshake.On.ae.jdgTimingA = v_Pe_28064(v_t_33785.jdgTimingA), handshake.On.ae.jdgTimingB = v_Pe_28064(v_t_33785.jdgTimingB), handshake.On.ae.jdgTimingAir = v_Pe_28064(v_t_33785.jdgTimingAir), handshake.On.ae.showLevel = v_Pe_28064(v_t_33785.showLevel), handshake.On.ae.showRating = v_Pe_28064(v_t_33785.showRating), handshake.On.ae.showOverpower = v_Pe_28064(v_t_33785.showOverpower), handshake.On.ae.trackSkip = v_Pe_28064(v_t_33785.trackSkip), handshake.On.ae.autoPlay = v_Pe_28064(v_t_33785.autoPlay), handshake.On.ae.volGuide = v_Pe_28064(v_t_33785.volGuide), handshake.On.ae.tapSe = v_Pe_28064(v_t_33785.tapSe), handshake.On.ae.volTap = v_Pe_28064(v_t_33785.volTap), handshake.On.ae.volExTap = v_Pe_28064(v_t_33785.volExTap), handshake.On.ae.volSlide = v_Pe_28064(v_t_33785.volSlide), handshake.On.ae.volAir = v_Pe_28064(v_t_33785.volAir), handshake.On.ae.volFlick = v_Pe_28064(v_t_33785.volFlick), handshake.On.ae.volSkill = v_Pe_28064(v_t_33785.volSkill), handshake.On.ae.jTimingSeCond = v_Pe_28064(v_t_33785.jTimingSeCond), handshake.On.ae.judgeAnsPos = v_Pe_28064(v_t_33785.judgeAnsPos), handshake.On.ae.judgeAnsJcDetails = v_Pe_28064(v_t_33785.judgeAnsJcDetails), handshake.On.ae.judgeAnsJDetails = v_Pe_28064(v_t_33785.judgeAnsJDetails), handshake.On.ae.judgeAnsADetails = v_Pe_28064(v_t_33785.judgeAnsADetails), handshake.On.ae.fieldLines = v_Pe_28064(v_t_33785.fieldLines), handshake.On.ae.fieldColor = v_Pe_28064(v_t_33785.fieldColor), handshake.On.ae.fieldWall = v_Pe_28064(v_t_33785.fieldWall), handshake.On.ae.fieldInfo = v_Pe_28064(v_t_33785.fieldInfo), handshake.On.Xp.Yp = v_Pe_28064(v_t_33785.masterVolume), !0);
    },
    lA: async function () {
      var v_t_33786 = {
        optionPreset: handshake.On.re,
        scrollSpeed: handshake.On.ae.scrollSpeed,
        mirror: handshake.On.ae.mirror,
        jdgTimingA: handshake.On.ae.jdgTimingA,
        jdgTimingB: handshake.On.ae.jdgTimingB,
        jdgTimingAir: handshake.On.ae.jdgTimingAir,
        showLevel: handshake.On.ae.showLevel,
        showRating: handshake.On.ae.showRating,
        showOverpower: handshake.On.ae.showOverpower,
        trackSkip: handshake.On.ae.trackSkip,
        autoPlay: handshake.On.ae.autoPlay,
        volGuide: handshake.On.ae.volGuide,
        tapSe: handshake.On.ae.tapSe,
        volTap: handshake.On.ae.volTap,
        volExTap: handshake.On.ae.volExTap,
        volSlide: handshake.On.ae.volSlide,
        volAir: handshake.On.ae.volAir,
        volFlick: handshake.On.ae.volFlick,
        volSkill: handshake.On.ae.volSkill,
        jTimingSeCond: handshake.On.ae.jTimingSeCond,
        judgeAnsPos: handshake.On.ae.judgeAnsPos,
        judgeAnsJcDetails: handshake.On.ae.judgeAnsJcDetails,
        judgeAnsJDetails: handshake.On.ae.judgeAnsJDetails,
        judgeAnsADetails: handshake.On.ae.judgeAnsADetails,
        fieldLines: handshake.On.ae.fieldLines,
        fieldColor: handshake.On.ae.fieldColor,
        fieldWall: handshake.On.ae.fieldWall,
        fieldInfo: handshake.On.ae.fieldInfo,
        masterVolume: handshake.On.Xp.Yp
      };
      return v_Bs_28013.By(await this.nA(v_t_33786));
    },
    CA: async function () {
      handshake.Mm.clear();
      var v_t_33787 = await this.rA();
      if (v_Bs_28013.By(v_t_33787)) return !1;
      for (const v_n_33790 of v_t_33787.table) {
        handshake.Mm.has(v_n_33790.musicId) || handshake.Mm.set(v_n_33790.musicId, new Map());
        var v_i_33788 = new v_zr_27970(),
          v_e_33789 = (v_i_33788.Sr = v_me_27822(v_pe_27823(v_Pe_28064(v_n_33790.score), 0), 101e4), v_Pe_28064(v_n_33790.flags));
        v_i_33788.ni = v_Bs_28013.RA(v_e_33789), v_i_33788.R4 = v_Bs_28013.RA(v_e_33789), v_i_33788.B4 = v_Bs_28013.LA(v_e_33789), v_i_33788.M4 = v_Bs_28013.IA(v_e_33789), v_i_33788.D4 = v_n_33790.updatedAt, v_i_33788.P4 = v_n_33790.playCount, v_i_33788.G4 = !0, handshake.Mm.get(v_n_33790.musicId).set(v_n_33790.musicDiff, v_i_33788);
      }
    },
    EA: async function () {
      handshake.Em.clear();
      var v_t_33791 = await this.sA();
      if (v_Bs_28013.By(v_t_33791)) return !1;
      for (const v_n_33794 of v_t_33791.table) {
        var v_i_33792 = new v_zr_27970(),
          v_e_33793 = (v_i_33792.Sr = v_me_27822(v_pe_27823(v_Pe_28064(v_n_33794.score), 0), 303e4), v_Pe_28064(v_n_33794.flags));
        v_i_33792.ni = v_Bs_28013.RA(v_e_33793), v_i_33792.R4 = v_Bs_28013.RA(v_e_33793), v_i_33792.B4 = v_Bs_28013.LA(v_e_33793), v_i_33792.D4 = v_n_33794.updatedAt, v_i_33792.P4 = v_n_33794.playCount, v_i_33792.G4 = !0, handshake.Em.set(v_n_33794.courseId, v_i_33792);
      }
    },
    MA: async function () {
      handshake.On.nm = {};
      var v_t_33795 = await this.SA();
      if (v_Bs_28013.By(v_t_33795)) return !1;
      for (const v_e_33797 of v_t_33795.table) {
        var v_i_33796 = new v_Mr_27954();
        v_i_33796.Pm = v_Pe_28064(v_e_33797.rank), v_i_33796.Gm = v_Pe_28064(v_e_33797.exp), v_i_33796.En = v_e_33797.skillId, v_i_33796.jm = v_Pe_28064(v_e_33797.transIdx), handshake.On.nm[v_e_33797.charaId] = v_i_33796;
      }
    }
  }, v_Bs_28013.By = function (v_t_33798) {
    return "number" == typeof v_t_33798 && v_t_33798 !== v_Ms_28009;
  }, v_Bs_28013.PA = function (v_t_33799, v_i_33800, v_e_33801, v_n_33802) {
    return (v_t_33799 ? 1 : 0) | (v_i_33800 ? 2 : 0) | (v_e_33801 ? 4 : 0) | (15 & v_n_33802) << 16;
  }, v_Bs_28013.FA = function (v_t_33803) {
    return 1 & v_t_33803;
  }, v_Bs_28013.RA = function (v_t_33804) {
    return 2 & v_t_33804;
  }, v_Bs_28013.LA = function (v_t_33805) {
    return 4 & v_t_33805;
  }, v_Bs_28013.IA = function (v_t_33806) {
    return v_t_33806 >> 16 & 15;
  };