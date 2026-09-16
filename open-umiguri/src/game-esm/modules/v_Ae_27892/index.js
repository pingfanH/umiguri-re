// 模块: v_Ae_27892
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Ae_27892(scope) {
  let v_a_28315 = {},
    v_o_28316 = !1;
  return {
    ue: async function (v_t_28317) {
      if (!v_o_28316) {
        var v_i_28318 = [["guide", "notes/Guide.wav", !1, !1], ["attack", "notes/Attack.wav", !1, !1], ["miss", "notes/Miss.wav", !1, !1], ["air", "notes/Air.wav", !1, !1], ["airhold", "notes/AirHoldSuccess.wav", !1, !1], ["airaction", "notes/AirAction.wav", !1, !1], ["aircrush", "notes/AirCrush.wav", !1, !1], ["airdown", "notes/AirDown.wav", !1, !1], ["extap", "notes/ExTap.wav", !1, !1], ["flick", "notes/Flick.wav", !1, !1], ["metronome", "notes/Metronome.wav", !1, !1], ["slidestep", "notes/SlideStep.wav", !1, !1], ["damage", "notes/Damage.wav", !1, !1], ["skilltrigger2", "ui/SkillTriggerPlaying.wav", !1, !1], ["danger_kill", "ui/DangerKill.wav", !1, !1], ["skilltrigger", "ui/SkillTrigger.wav", !1, !1], ["slideloop0", "notes/SlideLoop.wav?v=0", !1, "slide"], ["slideloop1", "notes/SlideLoop.wav?v=1", !1, "slide"], ["slideloop2", "notes/SlideLoop.wav?v=2", !1, "slide"], ["slideloop3", "notes/SlideLoop.wav?v=3", !1, "slide"], ["airholdloop0", "notes/AirHoldLoop.wav?v=0", !1, "airhold"], ["airholdloop1", "notes/AirHoldLoop.wav?v=1", !1, "airhold"], ["airholdloop2", "notes/AirHoldLoop.wav?v=2", !1, "airhold"], ["airholdloop3", "notes/AirHoldLoop.wav?v=3", !1, "airhold"], ["play_result_gauge_clear", "ui/PlayResultGaugeClear.wav", !1, !1], ["play_result_gauge_failed", "ui/PlayResultGaugeFailed.wav", !1, !1], ["play_result_show_rank", "ui/PlayResultShowRank.wav", !1, !1], ["play_result_open_details", "ui/PlayResultOpenDetails.wav", !1, !1], ["play_result_bgm", "ui/PlayResultBGM3.mp3", !1, !0], ["userbox_bgm", "ui/UserBoxBGM.mp3", !1, !0], ["music_select", "ui/MusicSelect.mp3", !1, !0], ["move_cursor", "ui/MoveCursor.wav", !1, !1], ["menu_back", "ui/MenuBack.wav", !1, !1], ["menu_in", "ui/MenuIn.wav", !1, !1], ["timer_warn", "ui/TimerWarn.wav", !1, !1], ["change_value", "ui/SettingsChangeValue.wav", !1, !1], ["menu_enter", "ui/MenuEnter.wav", !1, !1], ["set_skill", "ui/SetSkill.wav", !1, !1], ["news_open", "ui/NewsOpen.wav", !1, !1], ["screenshot", "ui/Screenshot.wav", !1, !1], ["musicSelectDiffSelect0", "ui/MusicSelect_DiffSelect0.wav", !1, !1], ["musicSelectDiffSelect1", "ui/MusicSelect_DiffSelect1.wav", !1, !1], ["musicSelectDiffSelect2", "ui/MusicSelect_DiffSelect2.wav", !1, !1], ["musicSelectDiffSelect3", "ui/MusicSelect_DiffSelect3.wav", !1, !1], ["musicSelectDiffSelect5", "ui/MusicSelect_DiffSelect4.wav", !1, !1], ["musicSelectStart", "ui/MusicSelect_Start.wav", !1, !1], ["chat0", "ui/Chat0.wav", !1, !1], ["chat1", "ui/Chat1.wav", !1, !1], ["chat2", "ui/Chat2.wav", !1, !1], ["chat3", "ui/Chat3.wav", !1, !1], ["chat4", "ui/Chat4.wav", !1, !1], ["chat5", "ui/Chat5.wav", !1, !1], ["chat6", "ui/Chat6.wav", !1, !1], ["chat7", "ui/Chat7.wav", !1, !1], ["coop_lobby_bgm", "ui/CoopLobbyBgm.mp3", !1, !0]];
        for (const v_r_28321 of scope.v_f0_27709) v_i_28318.push(["tap_" + v_r_28321, "notes/Tap_" + v_r_28321 + ".wav", !1, !1]);
        var v_e_28319 = scope.handshake.Dm;
        for (const v_s_28322 of v_i_28318) {
          var v_n_28320 = await scope.v_Se_27889.Q4("/sounds/" + v_s_28322[1]);
          v_n_28320 && (v_a_28315[v_s_28322[0]] = v_n_28320, "string" == typeof v_s_28322[3] && v_e_28319[v_s_28322[3]] ? scope.v_Se_27889.u6(v_n_28320, !0, v_e_28319[v_s_28322[3]][0]) : scope.v_Se_27889.u6(v_n_28320, !1 !== v_s_28322[3] && void 0 !== v_s_28322[3]));
        }
        await 0, v_o_28316 = !0, scope.v_Fe_28101(v_t_28317);
      }
    },
    dn: function (v_t_28323) {
      scope.v_Se_27889.i6(v_a_28315[v_t_28323]), scope.v_Se_27889.dn(v_a_28315[v_t_28323]);
    },
    U6: function (v_t_28324, v_i_28325) {
      scope.v_Se_27889.i6(v_a_28315[v_t_28324]), scope.v_Se_27889.dn(v_a_28315[v_t_28324], v_i_28325);
    },
    q6: function (v_t_28326, v_i_28327) {
      scope.v_Se_27889.dn(v_a_28315[v_t_28326], v_i_28327);
    },
    i6: function (v_t_28328) {
      scope.v_Se_27889.i6(v_a_28315[v_t_28328]);
    },
    Mc: function (v_t_28329, v_i_28330) {
      scope.v_Se_27889.Mc(v_a_28315[v_t_28329], v_i_28330);
    },
    n6: function (v_t_28331, v_i_28332, v_e_28333, v_n_28334) {
      null !== v_i_28332 && scope.v_Se_27889.Mc(v_a_28315[v_t_28331], v_i_28332), scope.v_Se_27889.n6(v_a_28315[v_t_28331], v_e_28333, v_n_28334);
    },
    o6: function (v_t_28335, v_i_28336) {
      scope.v_Se_27889.o6(v_a_28315[v_t_28335], v_i_28336);
    },
    pd: function (v_t_28337) {
      return scope.v_Se_27889.o1(v_a_28315[v_t_28337]);
    },
    EI: function (v_t_28338, v_i_28339, v_e_28340) {
      scope.v_Se_27889.dn(v_a_28315[v_t_28338], 0), scope.v_Se_27889.Mc(v_a_28315[v_t_28338], 0), scope.v_Se_27889.n6(v_a_28315[v_t_28338], v_e_28340, v_i_28339);
    },
    DI: function (v_t_28341, v_i_28342) {
      scope.v_Se_27889.n6(v_a_28315[v_t_28341], 0, v_i_28342), scope.v_uo_28102(() => {
        scope.v_Se_27889.i6(v_a_28315[v_t_28341], 0);
      }, v_i_28342);
    }
  };
}
