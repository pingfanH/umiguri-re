// game: 语句 63 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Ae_27892 = function () {
      let v_a_28315 = {},
        v_o_28316 = !1;
      return {
        ue: async function (v_t_28317) {
          if (!v_o_28316) {
            var v_i_28318 = [["guide", "notes/Guide.wav", !1, !1], ["attack", "notes/Attack.wav", !1, !1], ["miss", "notes/Miss.wav", !1, !1], ["air", "notes/Air.wav", !1, !1], ["airhold", "notes/AirHoldSuccess.wav", !1, !1], ["airaction", "notes/AirAction.wav", !1, !1], ["aircrush", "notes/AirCrush.wav", !1, !1], ["airdown", "notes/AirDown.wav", !1, !1], ["extap", "notes/ExTap.wav", !1, !1], ["flick", "notes/Flick.wav", !1, !1], ["metronome", "notes/Metronome.wav", !1, !1], ["slidestep", "notes/SlideStep.wav", !1, !1], ["damage", "notes/Damage.wav", !1, !1], ["skilltrigger2", "ui/SkillTriggerPlaying.wav", !1, !1], ["danger_kill", "ui/DangerKill.wav", !1, !1], ["skilltrigger", "ui/SkillTrigger.wav", !1, !1], ["slideloop0", "notes/SlideLoop.wav?v=0", !1, "slide"], ["slideloop1", "notes/SlideLoop.wav?v=1", !1, "slide"], ["slideloop2", "notes/SlideLoop.wav?v=2", !1, "slide"], ["slideloop3", "notes/SlideLoop.wav?v=3", !1, "slide"], ["airholdloop0", "notes/AirHoldLoop.wav?v=0", !1, "airhold"], ["airholdloop1", "notes/AirHoldLoop.wav?v=1", !1, "airhold"], ["airholdloop2", "notes/AirHoldLoop.wav?v=2", !1, "airhold"], ["airholdloop3", "notes/AirHoldLoop.wav?v=3", !1, "airhold"], ["play_result_gauge_clear", "ui/PlayResultGaugeClear.wav", !1, !1], ["play_result_gauge_failed", "ui/PlayResultGaugeFailed.wav", !1, !1], ["play_result_show_rank", "ui/PlayResultShowRank.wav", !1, !1], ["play_result_open_details", "ui/PlayResultOpenDetails.wav", !1, !1], ["play_result_bgm", "ui/PlayResultBGM3.mp3", !1, !0], ["userbox_bgm", "ui/UserBoxBGM.mp3", !1, !0], ["music_select", "ui/MusicSelect.mp3", !1, !0], ["move_cursor", "ui/MoveCursor.wav", !1, !1], ["menu_back", "ui/MenuBack.wav", !1, !1], ["menu_in", "ui/MenuIn.wav", !1, !1], ["timer_warn", "ui/TimerWarn.wav", !1, !1], ["change_value", "ui/SettingsChangeValue.wav", !1, !1], ["menu_enter", "ui/MenuEnter.wav", !1, !1], ["set_skill", "ui/SetSkill.wav", !1, !1], ["news_open", "ui/NewsOpen.wav", !1, !1], ["screenshot", "ui/Screenshot.wav", !1, !1], ["musicSelectDiffSelect0", "ui/MusicSelect_DiffSelect0.wav", !1, !1], ["musicSelectDiffSelect1", "ui/MusicSelect_DiffSelect1.wav", !1, !1], ["musicSelectDiffSelect2", "ui/MusicSelect_DiffSelect2.wav", !1, !1], ["musicSelectDiffSelect3", "ui/MusicSelect_DiffSelect3.wav", !1, !1], ["musicSelectDiffSelect5", "ui/MusicSelect_DiffSelect4.wav", !1, !1], ["musicSelectStart", "ui/MusicSelect_Start.wav", !1, !1], ["chat0", "ui/Chat0.wav", !1, !1], ["chat1", "ui/Chat1.wav", !1, !1], ["chat2", "ui/Chat2.wav", !1, !1], ["chat3", "ui/Chat3.wav", !1, !1], ["chat4", "ui/Chat4.wav", !1, !1], ["chat5", "ui/Chat5.wav", !1, !1], ["chat6", "ui/Chat6.wav", !1, !1], ["chat7", "ui/Chat7.wav", !1, !1], ["coop_lobby_bgm", "ui/CoopLobbyBgm.mp3", !1, !0]];
            for (const v_r_28321 of v_f0_27709) v_i_28318.push(["tap_" + v_r_28321, "notes/Tap_" + v_r_28321 + ".wav", !1, !1]);
            var v_e_28319 = handshake.Dm;
            for (const v_s_28322 of v_i_28318) {
              var v_n_28320 = await v_Se_27889.Q4("/sounds/" + v_s_28322[1]);
              v_n_28320 && (v_a_28315[v_s_28322[0]] = v_n_28320, "string" == typeof v_s_28322[3] && v_e_28319[v_s_28322[3]] ? v_Se_27889.u6(v_n_28320, !0, v_e_28319[v_s_28322[3]][0]) : v_Se_27889.u6(v_n_28320, !1 !== v_s_28322[3] && void 0 !== v_s_28322[3]));
            }
            await 0, v_o_28316 = !0, v_Fe_28101(v_t_28317);
          }
        },
        dn: function (v_t_28323) {
          v_Se_27889.i6(v_a_28315[v_t_28323]), v_Se_27889.dn(v_a_28315[v_t_28323]);
        },
        U6: function (v_t_28324, v_i_28325) {
          v_Se_27889.i6(v_a_28315[v_t_28324]), v_Se_27889.dn(v_a_28315[v_t_28324], v_i_28325);
        },
        q6: function (v_t_28326, v_i_28327) {
          v_Se_27889.dn(v_a_28315[v_t_28326], v_i_28327);
        },
        i6: function (v_t_28328) {
          v_Se_27889.i6(v_a_28315[v_t_28328]);
        },
        Mc: function (v_t_28329, v_i_28330) {
          v_Se_27889.Mc(v_a_28315[v_t_28329], v_i_28330);
        },
        n6: function (v_t_28331, v_i_28332, v_e_28333, v_n_28334) {
          null !== v_i_28332 && v_Se_27889.Mc(v_a_28315[v_t_28331], v_i_28332), v_Se_27889.n6(v_a_28315[v_t_28331], v_e_28333, v_n_28334);
        },
        o6: function (v_t_28335, v_i_28336) {
          v_Se_27889.o6(v_a_28315[v_t_28335], v_i_28336);
        },
        pd: function (v_t_28337) {
          return v_Se_27889.o1(v_a_28315[v_t_28337]);
        },
        EI: function (v_t_28338, v_i_28339, v_e_28340) {
          v_Se_27889.dn(v_a_28315[v_t_28338], 0), v_Se_27889.Mc(v_a_28315[v_t_28338], 0), v_Se_27889.n6(v_a_28315[v_t_28338], v_e_28340, v_i_28339);
        },
        DI: function (v_t_28341, v_i_28342) {
          v_Se_27889.n6(v_a_28315[v_t_28341], 0, v_i_28342), v_uo_28102(() => {
            v_Se_27889.i6(v_a_28315[v_t_28341], 0);
          }, v_i_28342);
        }
      };
    }(),
    inputModule = function () {
      let v_r_28343 = ["1", "A", "Q", "Z", "2", "S", "W", "X", "3", "D", "E", "C", "4", "F", "R", "V", "5", "G", "T", "B", "6", "H", "Y", "N", "7", "J", "U", "M", "8", "K", "I", "9", "0", "O", "L", "P", ",", ".", "]"],
        v_s_28344 = v_r_28343.map(v_t_28358 => 0),
        v_a_28345 = v_r_28343.map(v_t_28359 => 0),
        v_o_28346 = v_r_28343.map(v_t_28360 => 0);
      function v_t_28361(v_t_28361, v_i_28362, v_e_28363, v_n_28364) {
        this.Ae = v_t_28361, this.lu = v_i_28362, this.rI = v_e_28363, this.sI = v_n_28364;
      }
      let v_l_28348 = [new v_t_28347("left", 0, 37, v_mi_27816.ArrowLeft), new v_t_28347("right", 0, 39, v_mi_27816.ArrowRight), new v_t_28347("up", 0, 38, v_mi_27816.ArrowUp), new v_t_28347("down", 0, 40, v_mi_27816.ArrowDown), new v_t_28347("enter", 0, 13, v_mi_27816.Enter), new v_t_28347("esc", 0, 27, v_mi_27816.Escape), new v_t_28347("space", 0, 32, v_mi_27816.Space), new v_t_28347("shift", 0, 16, v_mi_27816.ShiftL), new v_t_28347("shift", 0, 16, v_mi_27816.ShiftR), new v_t_28347("f1", 0, 112, v_mi_27816.F1), new v_t_28347("f2", 0, 113, v_mi_27816.F2), new v_t_28347("f3", 0, 114, v_mi_27816.F3), new v_t_28347("f4", 0, 115, v_mi_27816.F4), new v_t_28347("f5", 0, 116, v_mi_27816.F5), new v_t_28347("f6", 0, 117, v_mi_27816.F6), new v_t_28347("f7", 0, 118, v_mi_27816.F7), new v_t_28347("f8", 0, 119, v_mi_27816.F8), new v_t_28347("f9", 0, 120, v_mi_27816.F9), new v_t_28347("f10", 0, 121, v_mi_27816.F10), new v_t_28347("f11", 0, 122, v_mi_27816.F11), new v_t_28347("f12", 0, 123, v_mi_27816.F12)],
        v_c_28349 = !0,
        v_i_28350 = !1,
        v_e_28351 = new Map(),
        v_u_28352 = new Map();
      function v_n_28353(v_i_28365) {
        glContext.canvas.setPointerCapture(v_i_28365.pointerId), v_e_28351.forEach(v_t_28366 => {
          v_t_28366(0, v_i_28365.offsetX, v_i_28365.offsetY);
        }), window.__umgPadAt && window.__umgPadAt(v_i_28365.offsetX, v_i_28365.offsetY);
      }
      function v_f_28354(v_i_28367) {
        v_e_28351.forEach(v_t_28368 => {
          v_t_28368(1, v_i_28367.offsetX, v_i_28367.offsetY);
        });
      }
      function v___28355(v_i_28369) {
        v_e_28351.forEach(v_t_28370 => {
          v_t_28370(2, v_i_28369.offsetX, v_i_28369.offsetY);
        });
      }
      function v_h_28356(v_i_28371) {
        v_e_28351.forEach(v_t_28372 => {
          v_t_28372(10, v_i_28371.offsetX, v_i_28371.offsetY);
        });
      }
      function v_d_28357(v_i_28373) {
        v_e_28351.forEach(v_t_28374 => {
          v_t_28374(11, v_i_28373.offsetX, v_i_28373.offsetY);
        });
      }
      return {
        ue: function () {
          v_i_28350 || (v_i_28350 = !0, glContext.canvas.addEventListener("pointerdown", v_n_28353), glContext.canvas.addEventListener("pointermove", v_f_28354), glContext.canvas.addEventListener("pointerup", v___28355), glContext.canvas.addEventListener("pointerenter", v_h_28356), glContext.canvas.addEventListener("pointerleave", v_d_28357), v_c_28349 = handshake.rm.wm, di8KbdStartFn());
        },
        ce: function () {
          di8KbdShutdownFn();
        },
        fe: function (v_t_28375) {
          if (38 === v_t_28375.length && (v_r_28343 = v_t_28375.split(""), !v_c_28349)) {
            for (let v_t_28377 = 0; v_t_28377 < 38; ++v_t_28377) v_a_28345[v_t_28377] = kbdUni2VirtFn(v_r_28343[v_t_28377].charCodeAt(0));
            v_t_28375 = v_a_28345;
            var v_i_28376 = Array.from(new Set(v_t_28375));
            for (let v_t_28378 = 0; v_t_28378 < v_l_28348.length; ++v_t_28378) v_i_28376.push(v_l_28348[v_t_28378].rI);
            kbdStartFn(v_i_28376);
          }
        },
        tb: function (v_t_28379, v_i_28380) {
          v_e_28351.set(v_t_28379, v_i_28380);
        },
        eb: function (v_t_28381) {
          v_e_28351.delete(v_t_28381);
        },
        $I: function (v_t_28382, v_i_28383) {
          v_u_28352.set(v_t_28382, v_i_28383);
        },
        ZI: function (v_t_28384) {
          v_u_28352.delete(v_t_28384);
        },
        oe: function () {
          for (let v_t_28388 = 0; v_t_28388 < v_s_28344.length; ++v_t_28388) v_s_28344[v_t_28388] >>= 1;
          for (let v_t_28389 = 0; v_t_28389 < v_l_28348.length; ++v_t_28389) v_l_28348[v_t_28389].lu >>= 1;
          if ((v_c_28349 ? di8KbdUpdateFn : kbdUpdateFn)(), v_P_27640) if (v_c_28349) for (let v_t_28390 = 0; v_t_28390 < v_l_28348.length; ++v_t_28390) v_l_28348[v_t_28390].lu |= di8KbdHeldFn(v_l_28348[v_t_28390].sI) ? 2 : 0;else for (let v_t_28391 = 0; v_t_28391 < v_l_28348.length; ++v_t_28391) v_l_28348[v_t_28391].lu |= kbdHeldFn(v_l_28348[v_t_28391].rI) ? 2 : 0;
          if (v_M_27644 && v_E_27645) {
            var v_i_28385 = v_M_27644.x7();
            for (let v_t_28392 = 0; v_t_28392 < 32; ++v_t_28392) v_s_28344[v_t_28392] |= 20 <= v_i_28385[31 - v_t_28392] ? 2 : 0, v_o_28346[v_t_28392] = v_i_28385[31 - v_t_28392];
            var v_e_28386 = v_E_27645.I7();
            for (let v_t_28393 = 0; v_t_28393 < 6; ++v_t_28393) v_s_28344[v_t_28393 + 32] |= 63 < v_e_28386[v_t_28393] ? 2 : 0, v_o_28346[v_t_28393 + 32] = v_e_28386[v_t_28393];
          } else if (ledOutput.Q6()) {
            var v_n_28387 = ledOutput.ev();
            for (let v_t_28394 = 0; v_t_28394 < 32; ++v_t_28394) v_s_28344[v_t_28394] |= 20 <= v_n_28387[v_t_28394] ? 2 : 0, v_o_28346[v_t_28394] = v_n_28387[v_t_28394];
            for (let v_t_28395 = 32; v_t_28395 < 38; ++v_t_28395) v_s_28344[v_t_28395] |= 63 < v_n_28387[v_t_28395] ? 2 : 0, v_o_28346[v_t_28395] = v_n_28387[v_t_28395];
          } else {
            if (v_P_27640) if (v_c_28349) {
              for (let v_t_28396 = 0; v_t_28396 < v_s_28344.length; ++v_t_28396) v_s_28344[v_t_28396] |= di8KbdHeldFn(v_mi_27816[v_r_28343[v_t_28396]]) || window.__umgLanes && window.__umgLanes[v_t_28396] ? 2 : 0;
              for (let v_t_28397 = 0; v_t_28397 < v_l_28348.length; ++v_t_28397) v_l_28348[v_t_28397].lu |= di8KbdHeldFn(v_l_28348[v_t_28397].sI) ? 2 : 0;
            } else {
              for (let v_t_28398 = 0; v_t_28398 < v_s_28344.length; ++v_t_28398) v_s_28344[v_t_28398] |= kbdHeldFn(v_a_28345[v_t_28398]) || window.__umgLanes && window.__umgLanes[v_t_28398] ? 2 : 0;
              for (let v_t_28399 = 0; v_t_28399 < v_l_28348.length; ++v_t_28399) v_l_28348[v_t_28399].lu |= kbdHeldFn(v_l_28348[v_t_28399].rI) ? 2 : 0;
            }
            for (let v_t_28400 = 0; v_t_28400 < 38; ++v_t_28400) v_o_28346[v_t_28400] = 2 & v_s_28344[v_t_28400] ? 200 : 0;
          }
          if (v_u_28352.size) for (let v_i_28401 = 0; v_i_28401 < v_l_28348.length; ++v_i_28401) 2 === v_l_28348[v_i_28401].lu && v_u_28352.forEach(v_t_28402 => v_t_28402(v_l_28348[v_i_28401].Ae));
        },
        he: 20,
        ve: function () {
          return v_s_28344;
        },
        sR: function () {
          return v_o_28346;
        },
        aR: function () {
          return v_s_28344.map(v_t_28403 => 2 === v_t_28403);
        },
        oR: function () {
          return v_s_28344.map(v_t_28404 => 2 & v_t_28404);
        },
        lR: function () {
          return v_s_28344.map(v_t_28405 => 1 === v_t_28405);
        },
        cR: function () {
          return v_s_28344.map(v_t_28406 => !1 & v_t_28406);
        },
        uR: function () {
          for (let v_t_28407 = 32; v_t_28407 < 38; ++v_t_28407) if (2 & v_s_28344[v_t_28407]) return !0;
          return !1;
        },
        fR: function () {
          for (let v_t_28408 = 32; v_t_28408 < 38; ++v_t_28408) if (1 & v_s_28344[v_t_28408]) return !0;
          return !1;
        },
        _R: function () {
          for (let v_t_28409 = 32; v_t_28409 < 38; ++v_t_28409) if (2 === v_s_28344[v_t_28409] || 1 === v_s_28344[v_t_28409]) return !0;
          return !1;
        },
        hR: function () {
          if (this.uR() && this.fR()) for (let v_t_28410 = 32; v_t_28410 < 38; ++v_t_28410) if (2 === v_s_28344[v_t_28410] || 1 === v_s_28344[v_t_28410]) return !0;
          return !1;
        },
        dR: function () {
          var v_t_28411 = {
            y: 0,
            hand: !1
          };
          let v_i_28412 = 0,
            v_e_28413 = 0;
          for (let v_t_28414 = 0; v_t_28414 < 6; ++v_t_28414) 2 & v_s_28344[v_t_28414 + 32] && (v_i_28412 += v_t_28414 / 5 * 2 - 1, ++v_e_28413);
          return 0 < v_e_28413 && (v_t_28411.y = v_i_28412 / v_e_28413, v_t_28411.hand = !0), v_t_28411;
        },
        vR: function () {
          return v_l_28348;
        }
      };
    }(),
    menuSystem = function () {
      const v_f_28415 = 1280,
        v_l_28416 = 250;
      function v___28417() {
        this.Ae = "", this.Te = 0, this.Le = 0, this.Ee = void 0, this.Fe = v_W0_27791, this.Be = !0, this.Me = !1, this.Re = !1, this.Pe = !1, this.De = "", this.Ge = void 0, this.tv = 0, this.je = !1, this.Ne = 0, this.He = 0, this.Ue = 0;
      }
      let v_h_28418 = [],
        v_e_28419 = [],
        v_d_28420 = void 0,
        v_v_28421 = void 0,
        v_c_28422 = void 0,
        v_w_28423 = {},
        v_u_28424 = 0,
        v_g_28425 = 0,
        v_m_28426 = !1,
        v_p_28427 = !1,
        v_k_28428 = 0;
      function v_i_28429() {}
      function v_b_28430(v_t_28433, v_i_28434, v_e_28435) {
        var v_n_28436;
        "down" === v_i_28434 && (0 !== v_t_28433.Le && ((v_n_28436 = v_d_28420.NA(47, 1, 320 + v_t_28433.Te / 16 * v_f_28415 + 2, 1080)).GA.Oe[0] = (v_t_28433.Le / 16 * v_f_28415 - 4) / 320, v_n_28436.GA.We[0].Je = "bg" + v_t_28433.Fe), v_t_28433.Ee) && v_t_28433.Ee.call(v_t_28433, v_i_28434, v_e_28435);
      }
      function v_y_28431(v_t_28437, v_i_28438) {
        var v_e_28439, v_n_28440;
        0 !== v_t_28437.Le ? (v_e_28439 = v_i_28438 || !v_t_28437.Be, v_n_28440 = v_t_28437.Me, v_t_28437.Ge.$e(void 0, v_e_28439 ? 200 : 0), v_t_28437.Pe || (v_n_28440 ? (v_t_28437.Ge.We[0].Nn = 1, v_t_28437.Ge.We[0].Qe(.25, .25, .25, 1), v_t_28437.Ge.We[1].qe = 1e-4, v_t_28437.Ge.We[2].Qe(.25, .25, .25, 1)) : (v_t_28437.Ge.We[0].Nn = 0, v_t_28437.Ge.We[0].Qe(1, 1, 1, 1), v_t_28437.Ge.We[0].Je = "bg" + v_t_28437.Fe, v_t_28437.Ge.We[1].qe = 1, v_t_28437.Ge.We[2].Qe(1, 1, 1, 1)))) : 0 === v_t_28437.Le && (v_e_28439 = v_i_28438 || !v_t_28437.Be, v_n_28440 = v_t_28437.Me, v_t_28437.Ge.Be = !v_e_28439, v_t_28437.Ge.Qe(1, 1, 1, v_n_28440 ? .375 : 1), v_p_28427 = !0);
      }
      function v_t_28441(v_t_28441, v_i_28442, v_e_28443) {
        if (!(v_t_28441 < v_k_28428) && 110 <= v_t_28441 - v_g_28425) {
          var v_s_28444 = v_u_28424 <= 0 && !sceneManager.et() && !testMenu.Gi();
          let v_i_28449 = inputModule.oR(),
            v_e_28450 = inputModule.aR(),
            v_n_28451 = !1;
          var v_a_28445 = inputModule.vR();
          let v_r_28452;
          for (v_r_28452 of v_h_28418) if (v_r_28452.Me || !v_r_28452.Be || v_r_28452.Pe) v_r_28452.je = !1;else {
            if (v_n_28451 = !1, v_r_28452.je) {
              if (0 !== v_r_28452.Le) for (let v_t_28453 = 0; v_t_28453 < 32; v_t_28453++) if (v_r_28452.Te <= mathFloor(v_t_28453 / 2) && v_r_28452.Te + v_r_28452.Le > mathFloor(v_t_28453 / 2) && v_i_28449[v_t_28453]) {
                v_n_28451 = !0;
                break;
              }
              if (!v_n_28451 && void 0 !== v_r_28452.De) for (let v_t_28454 = 0; v_t_28454 < v_a_28445.length; ++v_t_28454) if (v_a_28445[v_t_28454].Ae === v_r_28452.De && 2 & v_a_28445[v_t_28454].lu) {
                v_n_28451 = !0;
                break;
              }
            } else {
              if (0 !== v_r_28452.Le) for (let v_t_28455 = 0; v_t_28455 < 32; v_t_28455++) if (v_r_28452.Te <= mathFloor(v_t_28455 / 2) && v_r_28452.Te + v_r_28452.Le > mathFloor(v_t_28455 / 2) && v_e_28450[v_t_28455]) {
                v_n_28451 = !0;
                break;
              }
              if (!v_n_28451 && void 0 !== v_r_28452.De) for (let v_t_28456 = 0; v_t_28456 < v_a_28445.length; ++v_t_28456) if (v_a_28445[v_t_28456].Ae === v_r_28452.De && 2 == v_a_28445[v_t_28456].lu) {
                v_n_28451 = !0;
                break;
              }
            }
            if (v_s_28444) {
              if (v_n_28451) {
                if (!v_r_28452.je) {
                  v_r_28452.tv = 1, v_g_28425 = v_t_28441, v_r_28452.Ne = v_t_28441, v_r_28452.He = null, v_r_28452.je = v_n_28451, v_t_28441 - v_r_28452.Ue >= v_l_28416 && (v_r_28452.Ue = v_t_28441);
                  break;
                }
                v_r_28452.Re && (null === v_r_28452.He && 800 <= v_t_28441 - v_r_28452.Ne || null !== v_r_28452.He && 100 <= v_t_28441 - v_r_28452.He && 1600 <= v_t_28441 - v_r_28452.Ne || null !== v_r_28452.He && 200 <= v_t_28441 - v_r_28452.He && v_t_28441 - v_r_28452.Ne < 1600) && (v_r_28452.tv = v_t_28441 - v_r_28452.Ne < 1600 ? 2 : 3, (v_r_28452.He = v_t_28441) - v_r_28452.Ue >= v_l_28416) && (v_r_28452.Ue = v_t_28441);
              }
              v_r_28452.je = v_n_28451;
            } else v_n_28451 = !1;
          }
          for (v_r_28452 of v_h_28418) v_r_28452.Me || !v_r_28452.Be || v_r_28452.Pe || v_r_28452.tv && (v_b_28430(v_r_28452, "down", v_r_28452.tv - 1), v_r_28452.tv = 0);
          if (v_p_28427) {
            v_p_28427 = !1;
            let v_t_28457,
              v_i_28458 = 0,
              v_e_28459 = 0;
            for (v_t_28457 of v_h_28418) 0 === v_t_28457.Le && v_t_28457.Ge.Be && (v_e_28459 += 30);
            for (v_t_28457 of v_h_28418) 0 === v_t_28457.Le && v_t_28457.Ge.Be && (v_t_28457.Ge.Qt = 136 - v_e_28459 + v_i_28458, v_i_28458 += 30);
          }
        }
        var v_n_28446,
          v_r_28447,
          v_o_28448 = v_t_28441;
        if (0 !== v_h_28418.length) {
          if (v_m_28426) {
            let v_i_28461;
            for (v_i_28461 of v_h_28418) {
              if (0 === v_i_28461.Le) return;
              if (!v_i_28461.Be || v_i_28461.Pe) {
                for (let v_t_28462 = v_i_28461.Te; v_t_28462 < v_i_28461.Te + v_i_28461.Le; ++v_t_28462) ledOutput.Qe(v_z0_27799, v_t_28462, [0, 0, 0]);
                for (let v_t_28463 = v_i_28461.Te; v_t_28463 < v_i_28461.Te + v_i_28461.Le - 1; ++v_t_28463) ledOutput.Qe(v_K0_27800, v_t_28463, [0, 0, 0]);
              }
            }
          } else for (let v_t_28464 = 0; v_t_28464 < 16; ++v_t_28464) ledOutput.Qe(v_z0_27799, v_t_28464, [0, 0, 0]), v_t_28464 < 15 && ledOutput.Qe(v_K0_27800, v_t_28464, [0, 0, 0]);
          let v_i_28460;
          for (v_i_28460 of v_h_28418) if (v_i_28460.Be && !v_i_28460.Pe && 0 !== v_i_28460.Le) {
            v_n_28446 = [v_ct_27798[v_i_28460.Fe][0], v_ct_27798[v_i_28460.Fe][1], v_ct_27798[v_i_28460.Fe][2]], v_i_28460.Me ? (v_n_28446[0] *= .125, v_n_28446[1] *= .125, v_n_28446[2] *= .125) : 0 < (v_r_28447 = v_o_28448 - v_i_28460.Ue) && v_r_28447 < v_l_28416 && (v_r_28447 = v_Yl_28194(v_r_28447 / v_l_28416), v_n_28446[0] *= v_r_28447, v_n_28446[1] *= v_r_28447, v_n_28446[2] *= v_r_28447);
            for (let v_t_28465 = v_i_28460.Te; v_t_28465 < v_i_28460.Te + v_i_28460.Le; ++v_t_28465) ledOutput.Qe(v_z0_27799, v_t_28465, v_n_28446);
            for (let v_t_28466 = v_i_28460.Te; v_t_28466 < v_i_28460.Te + v_i_28460.Le - 1; ++v_t_28466) ledOutput.Qe(v_K0_27800, v_t_28466, v_n_28446);
          }
        }
      }
      return {
        ue: function (v_i_28467) {
          v_h_28418 = [], v_e_28419 = [], v_Le_28076([v_e_28468 => {
            languagePackages.it("ui/keyGuide.rsb", function (v_t_28469) {
              v_t_28469 ? (v_t_28469 = new v_Dl_28181(v_t_28469), renderer.nt(v_t_28469.rt(renderer.p5()), v_t_28470 => {
                v_d_28420 = v_t_28470, v_v_28421 = v_t_28470.lt.yk(0), v_c_28422 = v_t_28470.lt.yk(1);
                var v_i_28471 = v_t_28470.lt.yk(2);
                for (let v_t_28472 = 0; v_t_28472 < v_i_28471.We.length; ++v_t_28472) v_i_28471.We[v_t_28472].Be = !1, v_w_28423[v_i_28471.We[v_t_28472].ct] = v_i_28471.We[v_t_28472];
                v_Me_28078(v_e_28468);
              })) : v_i_28467();
            });
          }, v_i_28473 => {
            renderer.ut("sysKeyGuideLoop", new v_Tl_28174(v_t_28432), 5e3, v_t_28474 => {
              v_Me_28078(v_i_28473);
            });
          }, v_t_28475 => {
            renderer.ut("sysKeyGuide", v_d_28420, 5001, () => {
              v_Fe_28101(v_i_28467);
            });
          }]);
        },
        ft: function () {
          let v_t_28476;
          for (v_t_28476 of v_h_28418) v_y_28431(v_t_28476, !0);
          v_e_28419.push(v_h_28418), v_h_28418 = [];
        },
        _t: function () {
          this.dt();
          let v_t_28477;
          for (v_t_28477 of v_h_28418 = v_e_28419.pop()) v_y_28431(v_t_28477);
        },
        ht: function (v_t_28478, v_i_28479, v_e_28480, v_n_28481, v_r_28482, v_s_28483, v_a_28484, v_o_28485) {
          this.vt(v_t_28478, v_i_28479, v_e_28480, v_n_28481, v_r_28482, v_s_28483, !0, !1, v_a_28484, v_o_28485);
        },
        vt: function (v_t_28486, v_i_28487, v_e_28488, v_n_28489, v_r_28490, v_s_28491, v_a_28492, v_o_28493, v_l_28494, v_c_28495) {
          var v_u_28496;
          0 === v_n_28489 ? this.V6(v_t_28486, v_i_28487, v_s_28491, v_a_28492, v_o_28493, v_l_28494, v_c_28495) : ((v_u_28496 = new v___28417()).Ae = v_t_28486, v_u_28496.Te = v_e_28488, v_u_28496.Le = v_n_28489, v_u_28496.Ee = v_c_28495, v_u_28496.Fe = v_r_28490, v_u_28496.Re = v_s_28491, v_u_28496.Be = v_a_28492, v_u_28496.Me = v_o_28493, v_u_28496.De = v_l_28494, v_u_28496.Pe = "dummy" === v_i_28487, v_u_28496.Ge = v_w_28423.tab.Ve(!0), v_u_28496.Pe ? (v_u_28496.Ge.Te = v_e_28488 / 16 * v_f_28415, v_u_28496.Ge.We[0].Te = -1, v_u_28496.Ge.We[0].Le = v_n_28489 / 16 * v_f_28415 + 2, v_u_28496.Ge.We[0].Je = "bgWhite", v_u_28496.Ge.We[0].Qe(.5, .5, .5), v_u_28496.Ge.We[0].qe = .5, v_u_28496.Ge.We[1].Be = !1, v_u_28496.Ge.We[2].Be = !1) : (v_t_28486 = v_n_28489 / 16 * v_f_28415 - 4, v_c_28495 = "TouchSlider" === v_i_28487 ? 640 : 320, v_u_28496.Ge.Te = v_e_28488 / 16 * v_f_28415 + 2, v_u_28496.Ge.We[0].Le = v_t_28486, v_u_28496.Ge.We[0].Je = "bg" + v_r_28490, v_u_28496.Ge.We[1].Le = v_t_28486, v_u_28496.Ge.We[1].gt[2] = v_t_28486 / 80 * .75, v_u_28496.Ge.We[2].Te = v_t_28486 / 2 - v_c_28495 / 2, v_u_28496.Ge.We[2].Je = "msg" + v_i_28487), v_u_28496.Ge.Be = !0, v_u_28496.Pe ? v_v_28421.hn(v_u_28496.Ge, v_v_28421.We[0]) : v_v_28421.Ze(v_u_28496.Ge), v_u_28496.Pe || v_d_28420.e8(0, v_u_28496.Ge), v_y_28431(v_u_28496), v_h_28418.push(v_u_28496));
        },
        aI: function (v_t_28497, v_i_28498, v_e_28499, v_n_28500, v_r_28501, v_s_28502) {
          var v_a_28503,
            v_i_28498 = v_Wr_27968.oI(v_i_28498);
          v_i_28498 && ((v_a_28503 = new v___28417()).Ae = v_t_28497, v_a_28503.Te = v_e_28499, v_a_28503.Le = 2, v_a_28503.Ee = v_s_28502, v_a_28503.Fe = v_li_27796, v_a_28503.Re = !1, v_a_28503.Be = v_n_28500, v_a_28503.Me = v_r_28501, v_a_28503.Ge = v_w_28423["tabChat" + v_i_28498.lI].Ve(!0), v_t_28497 = .125 * v_f_28415 - 4, v_a_28503.Ge.Te = v_e_28499 / 16 * v_f_28415 + 2, v_a_28503.Ge.We[0].Le = v_t_28497, v_a_28503.Ge.We[1].Le = v_t_28497, v_a_28503.Ge.We[1].gt[2] = v_t_28497 / 80 * .75, v_sl_28151(v_a_28503.Ge, v_i_28498), v_a_28503.Ge.Be = !0, v_v_28421.Ze(v_a_28503.Ge), v_d_28420.e8(0, v_a_28503.Ge), v_y_28431(v_a_28503), v_h_28418.push(v_a_28503));
        },
        V6: function (v_t_28504, v_i_28505, v_e_28506, v_n_28507, v_r_28508, v_s_28509, v_a_28510) {
          var v_o_28511 = new v___28417();
          v_o_28511.Ae = v_t_28504, v_o_28511.Te = 0, v_o_28511.Le = 0, v_o_28511.Ee = v_a_28510, v_o_28511.Re = v_e_28506, v_o_28511.Be = v_n_28507, v_o_28511.Me = v_r_28508, v_o_28511.De = v_s_28509, v_o_28511.Ge = v_w_28423.key.Ve(!0), v_o_28511.Ge.We[0].Je = "keyF" + v_s_28509.substr(1), v_o_28511.Ge.We[1].Je = "text" + v_i_28505, v_c_28422.Ze(v_o_28511.Ge), v_y_28431(v_o_28511), v_h_28418.push(v_o_28511);
        },
        yv: function () {
          for (const v_t_28512 of [["dummy0003", "dummy", 0, 3], ["dummy0303", "dummy", 3, 3], ["dummy0604", "dummy", 6, 4], ["dummy1002", "dummy", 10, 2], ["dummy1202", "dummy", 12, 2], ["dummy1402", "dummy", 14, 2]]) this.vt(v_t_28512[0], v_t_28512[1], v_t_28512[2], v_t_28512[3], "", !1, !1, !1, "", v_i_28429);
        },
        dt: function () {
          let v_t_28513;
          for (v_t_28513 of v_h_28418) (0 === v_t_28513.Le ? v_c_28422 : v_v_28421).Ke(v_t_28513.Ge);
          v_h_28418 = [];
        },
        wt: function (v_i_28514, v_t_28515) {
          var v_e_28516 = v_h_28418.find(v_t_28517 => v_t_28517.Ae === v_i_28514);
          if (v_e_28516) {
            if (void 0 === v_t_28515) return v_e_28516.Be;
            v_e_28516.Be = !!v_t_28515, v_y_28431(v_e_28516), !v_e_28516.Me && v_e_28516.Be || (v_e_28516.je = !1, v_e_28516.Ne = 0, v_e_28516.Ue = 0, v_e_28516.He = null);
          }
        },
        kt: function (v_i_28518, v_t_28519) {
          var v_e_28520 = v_h_28418.find(v_t_28521 => v_t_28521.Ae === v_i_28518);
          if (v_e_28520) {
            if (void 0 === v_t_28519) return v_e_28520.Me;
            v_e_28520.Me = !!v_t_28519, v_y_28431(v_e_28520), !v_e_28520.Me && v_e_28520.Be || (v_e_28520.je = !1, v_e_28520.Ne = 0, v_e_28520.Ue = 0, v_e_28520.He = null);
          }
        },
        Cv: function (v_t_28522) {
          menuSystem.wt("dummy0003", v_t_28522), menuSystem.wt("dummy0303", v_t_28522), menuSystem.wt("dummy0604", v_t_28522), menuSystem.wt("dummy1002", v_t_28522), menuSystem.wt("dummy1202", v_t_28522), menuSystem.wt("dummy1402", v_t_28522);
        },
        bt: function (v_i_28523, v_t_28524) {
          var v_e_28525 = v_h_28418.find(v_t_28526 => v_t_28526.Ae === v_i_28523);
          v_e_28525 && (v_e_28525.Ee = v_t_28524);
        },
        St: function (v_e_28527) {
          raf(function () {
            var v_t_28528,
              v_i_28529 = v_h_28418.find(v_t_28530 => v_t_28530.Ae === v_e_28527);
            !v_i_28529 || v_i_28529.Me || !v_i_28529.Be || v_i_28529.Pe || 0 < v_u_28424 || (v_t_28528 = renderer.xt(), v_b_28430(v_i_28529, "down", 0), v_g_28425 = v_t_28528, v_i_28529.Ne = v_t_28528, v_i_28529.He = null, v_i_28529.je = !0, (0 === v_i_28529.Ue || v_t_28528 - v_i_28529.Ue >= v_l_28416) && (v_i_28529.Ue = v_t_28528));
          });
        },
        It: function (v_t_28531) {
          let v_i_28532;
          for (v_i_28532 of v_h_28418) v_i_28532.Be = !!v_t_28531, v_y_28431(v_i_28532);
        },
        yt: function (v_t_28533) {
          let v_i_28534;
          for (v_i_28534 of v_h_28418) v_i_28534.Me = !!v_t_28533, v_y_28431(v_i_28534);
        },
        T9: function (v_t_28535) {
          v_k_28428 = v_t_28535 ? renderer.xt() + v_t_28535 : 0;
        },
        Ct: function (v_t_28536) {
          v_t_28536 ? ++v_u_28424 : --v_u_28424;
        },
        QI: function () {
          v_u_28424 = 0;
        },
        T4: function (v_t_28537) {
          return new Promise(v_i_28538 => {
            menuSystem.ft(), menuSystem.vt("ok", void 0 === v_t_28537 ? "Next" : v_t_28537, 0, 16, v_W0_27791, !1, !1, !1, "", function (v_t_28539) {
              "down" === v_t_28539 && (menuSystem._t(), v_i_28538());
            }), menuSystem.wt("ok", !0);
          });
        }
      };
    }(),
    ledOutput = function () {
      let v_s_28540 = 0,
        v_n_28541 = new Array(16).fill([0, 0, 0]),
        v_r_28542 = new Array(15).fill([0, 0, 0]),
        v_a_28543 = new Array(6).fill([0, 0, 0]),
        v_i_28544 = new Array(102).fill(0),
        v_o_28545 = !1,
        v_e_28546 = Array.from({
          length: 38
        }).fill(0),
        v_l_28547,
        v_c_28548 = !1;
      const v_u_28549 = 1,
        v_f_28550 = 27,
        v___28551 = 40,
        v_h_28552 = 41;
      function v_t_28557(v_t_28557, v_i_28558) {
        v_c_28548 && !v_g_27563 && v_l_28547.send(Uint8Array.from([v_u_28549, v_t_28557, v_i_28558.length].concat(v_i_28558)));
      }
      function v_d_28554() {
        v_t_28553(16, [63].concat(v_i_28544));
      }
      function v_v_28555(v_t_28559) {
        var v_i_28560 = new Uint8Array(v_t_28559.data);
        if (!(v_i_28560.byteLength < 3 || v_i_28560[2] > v_i_28560.byteLength - 3)) if (v_i_28560[1] === v___28551) v_o_28545 = !0;else if (v_i_28560[1] === v_h_28552) v_o_28545 = !1;else if (v_i_28560[1] === v_f_28550 && v_o_28545) for (let v_t_28561 = 0; v_t_28561 < mathMin(v_i_28560.byteLength - 3, 38); ++v_t_28561) v_e_28546[v_t_28561] = v_i_28560[v_t_28561 + 3];
      }
      async function v_w_28556() {
        var v_t_28562, v_i_28563, v_r_28564;
        return !(v_s_28540 <= 0) && (await new Promise(v_i_28565 => {
          let v_e_28566 = !((v_l_28547 = new WebSocket("ws://localhost:" + v_s_28540)).binaryType = "arraybuffer"),
            v_n_28567 = v_uo_28102(() => {
              v_e_28566 || (v_c_28548 = !1, v_i_28565(!1));
            }, 2e3);
          v_l_28547.onopen = function (v_t_28568) {
            v_e_28566 || (v_l_28547.onopen = void 0, v_e_28566 = !0, clearTimeout(v_n_28567), v_i_28565(!0));
          }, v_l_28547.onerror = function (v_t_28569) {
            v_e_28566 || (v_l_28547.onopen = void 0, v_c_28548 = !1, clearTimeout(v_n_28567), v_i_28565(!1));
          }, v_l_28547.onclose = function (v_t_28570) {
            v_l_28547 = void 0, v_o_28545 = !1, v_c_28548 = !1, v_w_28556();
          };
        })) ? (await new Promise(v_i_28571 => {
          let v_e_28572 = mathRound(255 * mathRandom()),
            v_n_28573 = mathRound(255 * mathRandom()),
            v_r_28574 = mathRound(255 * mathRandom()),
            v_s_28575 = mathRound(255 * mathRandom()),
            v_a_28576 = null,
            v_t_28577 = 0;
          v_l_28547.onmessage = function (v_t_28578) {
            v_t_28578 = new Uint8Array(v_t_28578.data);
            v_t_28578[0] === v_u_28549 && 26 === v_t_28578[1] && 6 === v_t_28578[2] && v_t_28578[3] === v_e_28572 && v_t_28578[4] === v_n_28573 && v_t_28578[5] === v_r_28574 && v_t_28578[6] === v_s_28575 && 81 === v_t_28578[7] && 237 === v_t_28578[8] && (clearInterval(v_a_28576), v_l_28547.onmessage = void 0, v_i_28571(!0));
          }, v_a_28576 = setInterval(function () {
            10 < v_t_28577 ? (clearInterval(v_a_28576), v_l_28547.onmessage = void 0, v_l_28547.close(), v_i_28571(!1)) : (v_l_28547.send(Uint8Array.from([v_u_28549, 18, 4, v_e_28572, v_n_28573, v_r_28574, v_s_28575])), v_t_28577++);
          }, 500);
        })) ? (v_t_28562 = 17, v_i_28563 = [], v_r_28564 = 25, await new Promise(v_e_28579 => {
          v_l_28547.send(Uint8Array.from([v_u_28549, v_t_28562, v_i_28563.length].concat(v_i_28563)));
          let v_n_28580 = v_t_28581 => {
            v_l_28547.removeEventListener("message", v_n_28580);
            var v_i_28582 = new Uint8Array(v_t_28581.data);
            v_i_28582.byteLength < 3 || v_i_28582[2] > v_i_28582.byteLength - 3 || 0 < v_r_28564 && v_i_28582[1] !== v_r_28564 ? v_e_28579(null) : v_e_28579(new Uint8Array(v_t_28581.data));
          };
          v_l_28547.addEventListener("message", v_n_28580);
        }), v_c_28548 = !0, v_l_28547.addEventListener("message", v_v_28555), 0) : 1 : 2;
      }
      return {
        ue: async function (v_t_28583) {
          this.iv(), v_s_28540 = v_Pe_28064(handshake.rm.y7);
          var v_i_28584 = await v_w_28556();
          0 !== v_i_28584 ? v_t_28583(v_i_28584) : (setInterval(v_d_28554, 2 / 60 * 1e3), v_t_28583(0));
        },
        Qe: function (v_t_28585, v_i_28586, v_e_28587) {
          v_t_28585 === v_z0_27799 ? v_i_28586 < 0 || 15 < v_i_28586 || (v_n_28541[v_i_28586] = [mathMin(mathMax(mathRound(v_e_28587[0]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[1]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[2]), 0), 254)]) : v_t_28585 === v_K0_27800 ? v_i_28586 < 0 || 14 < v_i_28586 || (v_r_28542[v_i_28586] = [mathMin(mathMax(mathRound(v_e_28587[0]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[1]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[2]), 0), 254)]) : 2 !== v_t_28585 || v_i_28586 < 0 || 6 < v_i_28586 || (v_a_28543[v_i_28586] = [mathMin(mathMax(mathRound(v_e_28587[0]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[1]), 0), 254), mathMin(mathMax(mathRound(v_e_28587[2]), 0), 254)]);
        },
        iv: function (v_t_28588) {
          v_n_28541 = v_n_28541.fill([0, 0, 0]), v_r_28542 = v_r_28542.fill([0, 0, 0]), v_t_28588 && (v_a_28543 = v_a_28543.fill([0, 0, 0]));
        },
        oe: function () {
          if (v_M_27644) v_M_27644.T7(v_n_28541, v_r_28542), v_E_27645 && v_E_27645.d9(v_a_28543);else if (v_c_28548) {
            for (let v_t_28589 = 0; v_t_28589 < 16; ++v_t_28589) v_i_28544[3 * v_t_28589] = v_n_28541[v_t_28589][0], v_i_28544[3 * v_t_28589 + 1] = v_n_28541[v_t_28589][1], v_i_28544[3 * v_t_28589 + 2] = v_n_28541[v_t_28589][2];
            for (let v_t_28590 = 0; v_t_28590 < 15; ++v_t_28590) v_i_28544[48 + 3 * v_t_28590] = v_r_28542[v_t_28590][0], v_i_28544[48 + 3 * v_t_28590 + 1] = v_r_28542[v_t_28590][1], v_i_28544[48 + 3 * v_t_28590 + 2] = v_r_28542[v_t_28590][2];
            for (let v_t_28591 = 0; v_t_28591 < 3; ++v_t_28591) v_i_28544[93 + 3 * v_t_28591] = v_a_28543[v_t_28591][0], v_i_28544[93 + 3 * v_t_28591 + 1] = v_a_28543[v_t_28591][1], v_i_28544[93 + 3 * v_t_28591 + 2] = v_a_28543[v_t_28591][2];
          }
        },
        nv: function (v_t_28592) {
          return {
            main: v_n_28541,
            border: v_r_28542,
            side: v_a_28543
          };
        },
        rv: function (v_r_28593) {
          !v_c_28548 || v_g_27563 ? v_Fe_28101(() => v_r_28593(null)) : (v_l_28547.addEventListener("message", function v_t_28595(v_i_28594) {
            let v_n_28596 = new Uint8Array(v_i_28594.data);
            if (v_n_28596[0] === v_u_28549 && 216 === v_n_28596[1]) {
              v_l_28547.removeEventListener("message", v_t_28595);
              let v_i_28597 = "",
                v_e_28598 = "";
              for (let v_t_28599 = 0; v_t_28599 < 16 && void 0 !== v_n_28596[v_t_28599 + 3] && 0 !== v_n_28596[v_t_28599 + 3]; ++v_t_28599) v_i_28597 += String.fromCharCode(v_n_28596[v_t_28599 + 3]);
              for (let v_t_28600 = 0; v_t_28600 < 16 && void 0 !== v_n_28596[v_t_28600 + 25] && 0 !== v_n_28596[v_t_28600 + 25]; ++v_t_28600) v_e_28598 += String.fromCharCode(v_n_28596[v_t_28600 + 25]);
              v_Fe_28101(() => v_r_28593({
                av: v_i_28597,
                sv: [v_n_28596[20] << 8 | v_n_28596[19], v_n_28596[22] << 8 | v_n_28596[21]],
                ov: v_e_28598,
                cv: [v_n_28596[42] << 8 | v_n_28596[41], v_n_28596[44] << 8 | v_n_28596[43]]
              }));
            }
          }), v_t_28553(208, []));
        },
        Bt: function () {
          return v_c_28548;
        },
        Q6: function () {
          return v_o_28545;
        },
        ev: function () {
          return v_e_28546;
        }
      };
    }(),
    v_R1_27896 = function () {
      let v_t_28601 = 0,
        v_i_28602 = 0;
      function v_e_28603() {
        playerInfoBoard.VA(v_i_28602, v_t_28601);
      }
      function v_n_28604() {
        return !0;
      }
      return {
        ue: function () {
          playerInfoBoard.uP(!1), playerInfoBoard.VA(v_i_28602, v_t_28601);
        },
        WA: function () {
          1 <= ++v_t_28601 && (v_t_28601 = 0, 30 < ++v_i_28602) && (v_i_28602 = 30), v_e_28603();
        },
        XA: function (v_t_28605) {
          return !(!v_t_28605 || v_t_28605 < 1 || v_t_28605 > v_i_28602 || (v_i_28602 -= v_t_28605, v_e_28603(), 0));
        },
        zA: function (v_t_28606) {
          return !(!v_t_28606 || v_t_28606 < 1 || v_t_28606 > v_i_28602);
        },
        KA: () => 1,
        YA: () => v_t_28601,
        ZA: () => v_i_28602,
        fP: () => v_n_28604
      };
    }(),
    playerInfoBoard = function () {
      let v_r_28607 = void 0,
        v_n_28608 = void 0;
      return {
        ue: function (v_e_28609) {
          v_Le_28076([v_i_28610 => {
            languagePackages.it("ui/commonPlayerPlate.rsb", function (v_t_28611) {
              v_t_28611 ? (v_t_28611 = new v_Dl_28181(v_t_28611), renderer.ut("sysPlayerPlate", v_t_28611.rt(renderer.p5()), 1e3, v_t_28612 => {
                (v_r_28607 = v_t_28612).Jt = !1, v_Me_28078(v_i_28610);
              })) : v_e_28609();
            });
          }, v_i_28613 => {
            languagePackages.it("ui/commonIndicator.rsb", function (v_t_28614) {
              v_t_28614 ? (v_t_28614 = new v_Dl_28181(v_t_28614), renderer.ut("sysIndicator", v_t_28614.rt(renderer.p5()), 1001, v_t_28615 => {
                (v_n_28608 = v_t_28615).lt.yk(5).Be = !1, v_n_28608.lt.yk(2).Be = !1, v_n_28608.lt.yk(0).Be = !1, v_n_28608.lt.yk(3).Be = !1, v_n_28608.lt.yk(4).Be = !1, v_n_28608.lt.yk(1).Be = !1, v_Me_28078(v_i_28613);
              })) : v_e_28609();
            });
          }, v_t_28616 => {
            v_Fe_28101(v_e_28609);
          }]);
        },
        ti: function () {
          v_r_28607.Jt = !0;
        },
        ii: function () {
          v_r_28607.Jt = !1;
        },
        N4: function (v_t_28617) {
          v_r_28607.lt.yk(12).Wt = v_t_28617;
        },
        j4: function (v_t_28618, v_i_28619) {
          v_r_28607.lt.Kt(), v_r_28607.lt.yk(5).Je = "title" + v_ot_27785[v_i_28619], v_r_28607.lt.yk(11).Wt = v_t_28618;
        },
        H4: function (v_i_28620) {
          var v_t_28621 = v_be_27857.Hp.find(v_t_28622 => v_t_28622.id === v_i_28620);
          v_t_28621 ? this.j4(v_t_28621.text, v_t_28621.rarity) : this.j4("！！データベース参照エラー！！", 0);
        },
        U4: function (v_t_28623) {
          var v_i_28624;
          "string" == typeof v_t_28623 && (v_i_28624 = v_Dr_27956(v_t_28623), v_r_28607.lt.yk(10).zt = !0, v_r_28607.lt.yk(10).Xt = "chara:" + v_i_28624 + ":0:" + v_t_28623);
        },
        V4: function (v_n_28625) {
          return new Promise(async v_t_28626 => {
            var v_i_28627, v_e_28628;
            "string" == typeof v_n_28625 && -1 !== v_be_27857.Up.findIndex(v_t_28629 => v_t_28629.id === v_n_28625) && (v_i_28627 = await new Promise(v_t_28630 => v__o_28104("/nameplates/" + v_n_28625 + "/image.png", v_t_28630))) && (v_i_28627 = glRuntime.Texture.fromImage(v_i_28627, {
              noFlip: !0
            }), v_e_28628 = "cache:playerplate:nameplate", renderer.Yt.Zt[v_e_28628] && renderer.Yt.Zt[v_e_28628].free(), renderer.Yt.Zt[v_e_28628] = v_i_28627, v_r_28607.lt.yk(0).zt = !0, v_r_28607.lt.yk(0).Xt = v_e_28628), v_t_28626();
          });
        },
        J4: function (v_t_28631, v_i_28632) {
          var v_e_28633, v_n_28634;
          v_i_28632 ? (v_i_28632 = "" + mathFloor(v_t_28631 / 100), v_e_28633 = v_Xa_28081("" + v_t_28631 % 100, 2, "0"), v_n_28634 = ratingColorName(v_t_28631), v_t_28631 = ratingColorRgba(v_t_28631), v_r_28607.lt.yk(9).Wt = v_i_28632 + "P" + v_e_28633, v_r_28607.lt.yk(9).Ak = "rating" + v_n_28634, v_r_28607.lt.yk(9).Qe(v_t_28631[0], v_t_28631[1], v_t_28631[2], v_t_28631[3]), v_r_28607.lt.yk(8).Je = "numRating" + v_n_28634 + "Rating", v_r_28607.lt.yk(8).Qe(v_t_28631[0], v_t_28631[1], v_t_28631[2], v_t_28631[3])) : (v_r_28607.lt.yk(9).Wt = "N", v_r_28607.lt.yk(9).Ak = "ratingWt", v_r_28607.lt.yk(9).Qe(.825, .825, .825, 1), v_r_28607.lt.yk(8).Je = "numRatingWtRating", v_r_28607.lt.yk(8).Qe(.825, .825, .825, 1));
        },
        O4: function (v_t_28635, v_i_28636) {
          v_r_28607.lt.yk(7).Wt = v_i_28636 ? "" + mathMin(mathMax(v_t_28635, 1), 99) : "MM";
        },
        $t: function (v_t_28637) {
          v_n_28608.lt.yk(5).Be = !!v_t_28637;
        },
        VA: function (v_t_28638, v_i_28639) {
          v_n_28608.lt.yk(0).Wt = v_i_28639 ? "C" + v_i_28639 + "S" + v_t_28638 : "C" + v_t_28638;
        },
        uP: function (v_t_28640) {
          v_n_28608.lt.yk(0).Be = v_t_28640;
        },
        _P: function (v_t_28641) {},
        kL: function (v_t_28642) {
          v_n_28608.lt.yk(1).Be = null !== v_t_28642, v_n_28608.lt.yk(4).Be = null !== v_t_28642;
          v_t_28642 = -1 === v_t_28642 || null === v_t_28642 ? 999 : v_t_28642;
          v_n_28608.lt.yk(4).Wt = v_t_28642.toFixed(0) + " ms";
          let v_i_28643 = 0;
          v_t_28642 < 50 ? v_i_28643 = 2 : v_t_28642 < 100 && (v_i_28643 = 1), v_n_28608.lt.yk(1).Je = "iconNetwork" + v_i_28643;
        }
      };
    }(),
    v_M1_27898 = function (v_t_28644, v_i_28645) {
      this.Vt = v_t_28644, this.Ot = v_i_28645;
    },
    v_E1_27899 = 0,
    v_D1_27900 = 1,
    sceneManager = function () {
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
        v_f_28657 || 0 < v_i_28652.length && v_c_28655 < 1e3 && (v_u_28656 || (--v_c_28655 < 0 ? (v_u_28656 = !0, v_c_28655 = 0, v_t_28654 || (v_t_28654 = setInterval(v_h_28659, 250), v_h_28659())) : v_c_28655 <= 10 && v_Ae_27892.dn("timer_warn")), v_d_28660());
      }
      function v_h_28659() {
        0 < v_i_28652.length && v_u_28656 && v_i_28652[v_i_28652.length - 1].Vt && v_i_28652[v_i_28652.length - 1].Vt();
      }
      function v_d_28660() {
        0 < v_i_28652.length && (v_v_28661(), v_i_28652[v_i_28652.length - 1].Ot) && v_i_28652[v_i_28652.length - 1].Ot(v_c_28655);
      }
      function v_v_28661() {
        v_c_28655 < 1e3 ? v_r_28647.Wt = v_c_28655 + "" : v_r_28647.Wt = "I", v_a_28649.Wt = "T" + (handshake.Bm.Fm + 1);
      }
      return {
        ue: function (v_e_28662) {
          v_Le_28076([v_i_28663 => {
            languagePackages.it("ui/commonTimer.rsb", function (v_t_28664) {
              v_t_28664 ? (v_t_28664 = new v_Dl_28181(v_t_28664), (v_n_28646 = v_t_28664.rt(renderer.p5())).Jt = !0, v_r_28647 = v_n_28646.lt.yk(5), v_a_28649 = v_n_28646.lt.yk(3), v_s_28648 = v_n_28646.lt.yk(2), v_o_28650 = v_n_28646.lt.yk(6), (v_l_28651 = v_n_28646.lt.yk(0)).Be = !1, v_n_28646.lt.yk(1).Be = !1, renderer.ut("sysTimer", v_n_28646, 4090, v_t_28665 => {
                v_Me_28078(v_i_28663);
              })) : v_e_28662();
            });
          }, v_t_28666 => {
            v_Fe_28101(v_e_28662);
          }]);
        },
        qt: function () {
          v_o_28650.Be = !0, v_s_28648.Be = !1, v_a_28649.Be = !0, v_r_28647.Qt = 55;
        },
        ei: function () {
          v_o_28650.Be = !1, v_s_28648.Be = !0, v_a_28649.Be = !1, v_r_28647.Qt = 35;
        },
        ti: function () {
          v_n_28646.lt.yk(1).Be = !0, v_v_28661();
        },
        ii: function () {
          v_n_28646.lt.yk(1).Be = !1;
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
          return handshake.rm.am <= 0 ? 1e3 : mathMin(handshake.rm.am, 999);
        },
        ui: function () {
          return handshake.rm.am <= 0 ? 1e3 : 30;
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
          v_t_28671 === v_E1_27899 ? (v_l_28651.Be = !1, playerInfoBoard._P(null), playerInfoBoard.kL(null)) : (v_l_28651.Be = !0, v_t_28671 === v_D1_27900 && (playerInfoBoard._P(v_oe_27649.sx()), playerInfoBoard.kL(-1), v_l_28651.Je = "stateCoop"));
        }
      };
    }(),
    v_F1_27902 = function () {
      let v_r_28672 = void 0;
      async function v_e_28676() {
        v_r_28672.Jt = !0;
        for (const v_n_28677 of v_r_28672.lt.We) v_n_28677.Be = !1;
        var v_t_28674 = v_r_28672.lt.yk(0);
        let v_i_28675 = v_t_28674.yk(6),
          v_e_28676 = v_t_28674.yk(9);
        v_t_28674.Be = !0, v_r_28672.e8(2, v_t_28674), v_i_28675.Wt = "0C00P", v_e_28676.ln(0), await v_fo_28103(v_Ge_28204(30)), await function (v_r_28678) {
          let v_t_28679 = handshake.rm.bm,
            v_s_28680 = 0,
            v_a_28681 = 0;
          return new Promise(v_i_28682 => v_Oa_28077(function (v_t_28683, v_i_28684) {
            "max" === v_t_28683 ? v_s_28680 = v_i_28684 - 1 : "upd" === v_t_28683 && (v_a_28681 = v_i_28684 - 1, v_r_28678(v_a_28681 / v_s_28680));
          }, [function (v_n_28685) {
            v_t_28679 ? v_Me_28078(v_n_28685) : v_br_27943.Ku(function (v_t_28686, v_i_28687, v_e_28688) {
              v_be_27857.Pp = v_t_28686, handshake.l.u = v_i_28687, handshake.l.v = v_e_28688, v_Me_28078(v_n_28685);
            }, function (v_t_28689, v_i_28690, v_e_28691) {
              v_r_28678(v_a_28681 / v_s_28680 + (v_t_28689 / v_i_28690 / 2 + .5 * v_e_28691) / v_s_28680);
            });
          }, function (v_i_28692) {
            v_t_28679 ? v_Me_28078(v_i_28692) : v_Tr_27949.ef(function (v_t_28693) {
              v_be_27857.Gp = v_t_28693, v_Me_28078(v_i_28692);
            });
          }, function (v_e_28694) {
            dataLoader.ef(function (v_t_28695, v_i_28696) {
              v_be_27857.Np = v_t_28695, handshake.l.$ = v_i_28696, v_Me_28078(v_e_28694);
            });
          }, function (v_i_28697) {
            v_Br_27958.ef(function (v_t_28698) {
              v_be_27857.jp = v_t_28698, v_Me_28078(v_i_28697);
            });
          }, function (v_n_28699) {
            v_Rr_27952.ef(function (v_t_28700, v_i_28701, v_e_28702) {
              v_be_27857.Hp = v_t_28700, v_be_27857.Up = v_i_28701, v_be_27857.Vp = v_e_28702, v_Me_28078(v_n_28699);
            });
          }, function (v_i_28703) {
            v_Hr_27962.ef(function (v_t_28704) {
              v_Me_28078(v_i_28703);
            });
          }, function (v_t_28705) {
            v_i_28682();
          }]));
        }(function (v_t_28706) {
          v_i_28675.Wt = (100 * v_t_28706).toFixed(2).replaceAll(".", "C") + "P", v_e_28676.ln(v_t_28706);
        }), await v_fo_28103(v_Ge_28204(30)), v_r_28672.e8(1, v_t_28674), await v_fo_28103(v_Ge_28204(20));
      }
      return {
        ue: function (v_e_28707) {
          v_Le_28076([v_i_28708 => {
            languagePackages.it("ui/dataLoader.rsb", function (v_t_28709) {
              v_t_28709 ? (v_t_28709 = new v_Dl_28181(v_t_28709), renderer.nt(v_t_28709.rt(renderer.p5()), v_t_28710 => {
                v_r_28672 = v_t_28710, v_Me_28078(v_i_28708);
              })) : v_e_28707();
            });
          }, v_t_28711 => {
            v_Fe_28101(v_e_28707);
          }]);
        },
        T0: function (v_i_28712) {
          v_Le_28076([v_i_28713 => {
            v_r_28672.Jt = !1, renderer.ut("dataLoader", v_r_28672, 50, v_t_28714 => {
              v_Me_28078(v_i_28713);
            });
          }, v_t_28715 => {
            v_e_28673().then(() => {
              renderer._i("dataLoader"), v_i_28712();
            });
          }]);
        }
      };
    }(),
    localization = function () {
      let v_a_28716 = void 0,
        v_s_28717 = 0,
        v_o_28718 = "Left",
        v_l_28719 = "Right",
        v_c_28720 = "Enter",
        v_u_28721 = "Next";
      function v_n_28722() {
        return new Promise(async v_i_28727 => {
          let v_e_28728 = ["ja-JP", "en-US", "zh-CN"],
            v_n_28729 = mathMax(v_e_28728.indexOf(currentLang), 0);
          v_a_28716.Jt = !0;
          for (const v_t_28732 of v_a_28716.lt.We) v_t_28732.Be = !1;
          let v_r_28730 = v_a_28716.lt.yk(0),
            v_s_28731 = v_a_28716.lt.yk(6);
          for (let v_t_28733 = 0; v_t_28733 < v_s_28731.We.length; ++v_t_28733) v_s_28731.We[v_t_28733].We[1].Be = !1;
          v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), menuSystem.ft(), menuSystem.vt("left", v_o_28718, 0, 3, v_ai_27793, !0, !1, !1, "left", function (v_t_28734) {
            if ("down" === v_t_28734) {
              --v_n_28729 < 0 && (v_n_28729 = 0);
              for (let v_t_28735 = 0; v_t_28735 < v_s_28731.We.length; ++v_t_28735) v_s_28731.We[v_t_28735].We[1].Be = !1;
              v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), menuSystem.kt("left", v_n_28729 <= 0), menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1);
            }
          }), menuSystem.vt("right", v_l_28719, 3, 3, v_ai_27793, !0, !1, !1, "right", function (v_t_28736) {
            if ("down" === v_t_28736) {
              ++v_n_28729 >= v_e_28728.length && (v_n_28729 = v_e_28728.length - 1);
              for (let v_t_28737 = 0; v_t_28737 < v_s_28731.We.length; ++v_t_28737) v_s_28731.We[v_t_28737].We[1].Be = !1;
              v_s_28731.We[v_n_28729].We[1].Be = !0, v_a_28716.e8(3, v_s_28731.We[v_n_28729]), menuSystem.kt("left", v_n_28729 <= 0), menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1);
            }
          }), menuSystem.vt("enter", v_c_28720, 6, 4, v_W0_27791, !1, !1, !1, "enter", async function (v_t_28738) {
            "down" === v_t_28738 && (menuSystem._t(), currentLang = v_e_28728[v_n_28729], await v_ts_27977.L4(currentLang), await v_fo_28103(v_Ge_28204(20)), (v_t_28738 = v_a_28716.lt.yk(16)).Be = !0, v_a_28716.e8(2, v_t_28738), v_t_28738.yk(21).Je = "textLangSelect_" + currentLang, await v_fo_28103(v_Ge_28204(30)), await menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28738), v_a_28716.e8(1, v_r_28730), await v_fo_28103(v_Ge_28204(20)), v_i_28727());
          }), menuSystem.kt("left", v_n_28729 <= 0), menuSystem.kt("right", v_n_28729 >= v_e_28728.length - 1), v_r_28730.Be = !0, v_a_28716.e8(2, v_r_28730), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20));
        });
      }
      async function v_r_28723() {
        v_a_28716.Jt = !0;
        for (const v_i_28740 of v_a_28716.lt.We) v_i_28740.Be = !1;
        var v_t_28739 = v_a_28716.lt.yk(22);
        v_t_28739.yk(27).Je = "textAssetDL_" + currentLang, v_t_28739.yk(28).Wt = (v_s_28717 / 1048576).toFixed(2).replaceAll(".", "C") + "U", v_t_28739.Be = !0, v_a_28716.e8(2, v_t_28739), await v_fo_28103(v_Ge_28204(30)), await menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28739), await v_fo_28103(v_Ge_28204(20)), async function () {
          v_a_28716.Jt = !0;
          for (const v_r_28745 of v_a_28716.lt.We) v_r_28745.Be = !1;
          let v_t_28741 = v_a_28716.lt.yk(29),
            v_i_28742 = v_t_28741.yk(36),
            v_e_28743 = v_t_28741.yk(39),
            v_n_28744 = (v_t_28741.Be = !0, v_a_28716.e8(2, v_t_28741), v_t_28741.yk(35).Je = "textDownloading_" + currentLang, v_i_28742.Wt = "0C00P", v_e_28743.ln(0), await v_fo_28103(v_Ge_28204(30)), await v_ts_27977.u4(function (v_t_28746) {
              v_i_28742.Wt = (v_t_28746 / v_s_28717 * 100).toFixed(2).replaceAll(".", "C") + "P", v_e_28743.ln(v_t_28746 / v_s_28717);
            }));
          v_n_28744 ? (await v_fo_28103(v_Ge_28204(30)), v_t_28741.yk(35).Je = "textVerifying_" + currentLang, v_i_28742.Wt = "0C00P", v_e_28743.ln(0), v_n_28744 = await v_ts_27977._4(function (v_t_28747) {
            v_i_28742.Wt = (v_t_28747 / v_s_28717 * 100).toFixed(2).replaceAll(".", "C") + "P", v_e_28743.ln(v_t_28747 / v_s_28717);
          }), await v_fo_28103(v_Ge_28204(30)), v_a_28716.e8(1, v_t_28741), await v_fo_28103(v_Ge_28204(20)), await v_f_28724(v_n_28744)) : (v_a_28716.e8(1, v_t_28741), await v_fo_28103(v_Ge_28204(20)), await v_f_28724(!1));
        }();
      }
      async function v_f_28724(v_t_28748) {
        v_a_28716.Jt = !0;
        for (const v_e_28750 of v_a_28716.lt.We) v_e_28750.Be = !1;
        var v_i_28749 = v_a_28716.lt.yk(40);
        v_i_28749.yk(45).Je = v_t_28748 ? "textCompleteDL_" + currentLang : "textFailedDL_" + currentLang, v_i_28749.yk(46).Je = "textBackTitle_" + currentLang, v_i_28749.Be = !0, v_a_28716.e8(2, v_i_28749), await v_fo_28103(v_Ge_28204(30)), await menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_i_28749), await v_fo_28103(v_Ge_28204(20)), v_t_28748 ? await v_ts_27977.v4() : location.reload();
      }
      async function v___28725() {
        v_a_28716.Jt = !0;
        for (const v_i_28752 of v_a_28716.lt.We) v_i_28752.Be = !1;
        var v_t_28751 = v_a_28716.lt.yk(47);
        v_t_28751.yk(52).Je = "textBackTitle_" + currentLang, v_t_28751.Be = !0, v_a_28716.e8(2, v_t_28751), await v_fo_28103(v_Ge_28204(30)), await menuSystem.T4(v_u_28721), v_a_28716.e8(1, v_t_28751), await v_fo_28103(v_Ge_28204(20)), location.reload();
      }
      function v_h_28726() {
        renderer._i("assetDownload");
      }
      return {
        ue: function (v_e_28753) {
          v_Le_28076([v_i_28754 => {
            languagePackages.it("ui/assetDownload.rsb", function (v_t_28755) {
              v_t_28755 ? (v_t_28755 = new v_Dl_28181(v_t_28755), renderer.nt(v_t_28755.rt(renderer.p5()), v_t_28756 => {
                v_a_28716 = v_t_28756, v_Me_28078(v_i_28754);
              })) : v_e_28753();
            });
          }, v_t_28757 => {
            v_Fe_28101(v_e_28753);
          }]);
        },
        T0: function (v_e_28758) {
          v_Le_28076([async v_i_28759 => {
            v_u_28721 = handshake.A4 ? (v_o_28718 = "LeftInt", v_l_28719 = "RightInt", v_c_28720 = "EnterInt", "NextInt") : (v_o_28718 = "Left", v_l_28719 = "Right", v_c_28720 = "Enter", "Next"), handshake.A4 || (v_Te_27911.W4(), await v_ts_27977.m4(), v_Te_27911.K4(), v_ts_27977.S4()) ? (v_a_28716.Jt = !1, renderer.ut("assetDownload", v_a_28716, 50, v_t_28760 => {
              v_Me_28078(v_i_28759);
            })) : v_e_28758();
          }, async v_t_28761 => {
            if (await v_fo_28103(v_Ge_28204(20)), handshake.A4) {
              var v_i_28762 = currentLang;
              if (await v_n_28722(), v_Te_27911.W4(), await v_ts_27977.m4(), v_Te_27911.K4(), !v_ts_27977.S4()) return void (v_i_28762 !== currentLang ? await v___28725() : (v_h_28726(), v_e_28758()));
            }
            v_s_28717 = v_rc_28203(v_ts_27977.w4(), v_t_28763 => v_t_28763.size), await v_r_28723();
          }]);
        },
        hv: function (v_e_28764) {
          v_Le_28076([async v_i_28765 => {
            v_o_28718 = "LeftInt", v_l_28719 = "RightInt", v_c_28720 = "EnterInt", v_u_28721 = "NextInt", v_a_28716.Jt = !1, renderer.ut("assetDownload", v_a_28716, 50, v_t_28766 => {
              v_Me_28078(v_i_28765);
            });
          }, async v_t_28767 => {
            await v_fo_28103(v_Ge_28204(20));
            var v_i_28768 = currentLang;
            await v_n_28722(), v_Te_27911.W4(), await v_ts_27977.m4(), v_Te_27911.K4(), v_ts_27977.S4() ? (v_s_28717 = v_rc_28203(v_ts_27977.w4(), v_t_28769 => v_t_28769.size), await v_r_28723()) : v_i_28768 !== currentLang ? await v___28725() : (v_h_28726(), v_e_28764());
          }]);
        }
      };
    }(),
    v_N1_27904 = function () {
      let v_n_28770 = void 0,
        v_r_28771 = 0;
      function v_s_28772() {
        v_t_28777(), renderer.iy(v_r_28771), v_n_28770.e8(0), menuSystem.dt(), renderer.W6(async () => {
          v_n_28770.i8(0), v_i_28778();
          var v_t_28779 = !v_Xt_27648;
          v_G1_27905.T0(void 0, v_t_28779);
        }, v_Ge_28204(30));
      }
      function v_a_28773() {
        v_t_28777(), menuSystem.It(!1), localization.hv(() => {
          menuSystem.It(!0), v_c_28776();
        });
      }
      function v_o_28774() {
        v_t_28777(), v_U1_27906.T0(() => {
          v_c_28776();
        });
      }
      function v_l_28775() {
        renderer.iy(v_r_28771), v_n_28770.e8(1), v_r_28771 = renderer.W6(v_l_28775, 45000.09);
      }
      async function v_c_28776() {
        let v_t_28780 = await v_D_27646.R9();
        v_t_28780 !== v_Ts_28004 && (renderer.iy(v_r_28771), v_n_28770.e8(0), menuSystem.dt(), renderer.W6(async () => {
          v_n_28770.i8(0), v_i_28778(), v_G1_27905.T0(v_t_28780);
        }, v_Ge_28204(30)));
      }
      function v_t_28777() {
        v_D_27646.C9();
      }
      function v_i_28778() {
        renderer._i("advertise");
      }
      return {
        ue: function (v_e_28781) {
          v_Le_28076([v_i_28782 => {
            languagePackages.it("ui/advertise.rsb", function (v_t_28783) {
              v_t_28783 ? (v_t_28783 = new v_Dl_28181(v_t_28783), renderer.nt(v_t_28783.rt(renderer.p5()), v_t_28784 => {
                (v_n_28770 = v_t_28784).lt.yk(27).Wt = "Version " + v_nc_28202(), v_n_28770.lt.yk(28).Wt = "Build " + handshake.rm.Sm, v_Me_28078(v_i_28782);
              })) : v_e_28781();
            });
          }, v_t_28785 => {
            v_Fe_28101(v_e_28781);
          }]);
        },
        T0: function (v_e_28786) {
          v_Le_28076([v_i_28787 => {
            v_n_28770.Jt = !1, renderer.ut("advertise", v_n_28770, 20, v_t_28788 => {
              v_Me_28078(v_i_28787);
            });
          }, async v_t_28789 => {
            v_j1_27909.ti(), v_n_28770.Jt = !0, v_e_28786 ? (v_n_28770.e8(2), v_r_28771 = renderer.W6(v_l_28775, v_Ge_28204(900))) : v_l_28775(), menuSystem.dt();
            for (const v_i_28790 of [["ok", "TouchSlider", 0, 14, "Pink", v_s_28772, ""], ["licenses", "Licenses", 14, 2, v_X0_27795, v_o_28774, ""], ["language", "Language", 0, 0, "", v_a_28773, "f2"]]) menuSystem.vt(v_i_28790[0], v_i_28790[1], v_i_28790[2], v_i_28790[3], v_i_28790[4], !1, !1, !1, v_i_28790[6], v_i_28790[5]);
            menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), v_c_28776();
          }]);
        }
      };
    }(),
    v_G1_27905 = function () {
      const v_c_28791 = "cache:charaLg:",
        v_r_28792 = "cache:news";
      let v_u_28793 = void 0,
        v_f_28794 = void 0,
        v_n_28795 = void 0,
        v_s_28796 = void 0,
        v_a_28797 = void 0,
        v_o_28798 = void 0,
        v_l_28799 = void 0,
        v___28800 = void 0,
        v_h_28801 = void 0;
      function v_d_28802(v_t_28811) {
        v_f_28794.Be = v_f_28794 === v_t_28811, v_n_28795.Be = v_n_28795 === v_t_28811, v_s_28796.Be = v_s_28796 === v_t_28811, v_a_28797.Be = v_a_28797 === v_t_28811, v_o_28798.Be = v_o_28798 === v_t_28811, v_l_28799.Be = v_l_28799 === v_t_28811, v___28800.Be = v___28800 === v_t_28811, v_h_28801.Be = v_h_28801 === v_t_28811, v_u_28793.Jt = !0;
      }
      async function v_v_28803() {
        playerInfoBoard.N4(handshake.rm.om), playerInfoBoard.H4(handshake.On.$p), await playerInfoBoard.V4(handshake.On.qp), playerInfoBoard.U4(handshake.On.im), playerInfoBoard.J4(handshake.rm.lm, v_Ie_27966.D0("showRating")), playerInfoBoard.O4(handshake.rm.um, v_Ie_27966.D0("showLevel")), playerInfoBoard.ti(), v_nr_27925.T0();
      }
      function v_w_28804() {
        menuSystem.St("ok");
      }
      function v_g_28805() {
        menuSystem.St("no");
      }
      async function v_i_28806() {
        if (1 <= handshake.On.Kp || (await new Promise(async v_i_28812 => {
          v_d_28802(v_a_28797), v_u_28793.e8(4), await v_fo_28103(v_Ge_28204(20));
          let v_e_28813 = win.createElement("iframe");
          function v_n_28814(v_t_28816) {
            sceneManager.ni(), sceneManager.ii(), v_e_28813.contentWindow.removeEventListener("scroll", v_r_28815), menuSystem._t(), v_u_28793.e8(5), v_e_28813.parentElement.removeChild(v_e_28813), renderer.W6(() => {
              v_i_28812(v_t_28816);
            }, v_Ge_28204(30));
          }
          function v_r_28815() {
            menuSystem.kt("left", v_e_28813.contentWindow.scrollY <= 0);
            var v_t_28817 = v_e_28813.contentWindow.scrollY >= v_e_28813.contentDocument.documentElement.scrollHeight - v_e_28813.contentWindow.innerHeight;
            menuSystem.kt("right", v_t_28817), v_t_28817 && menuSystem.kt("agree", !1);
          }
          v_e_28813.src = "/terms/" + currentLang + ".html", v_e_28813.width = 780, v_e_28813.height = 420, v_e_28813.tabIndex = -1, v_e_28813.sandbox = "allow-popups", v_e_28813.style.left = "570px", v_e_28813.style.top = "410px", v_e_28813.style.position = "absolute", v_e_28813.style.border = "none", v_y_27559.appendChild(v_e_28813), menuSystem.ft(), menuSystem.vt("left", "Up", 0, 3, v_ai_27793, !0, !1, !1, "left", function (v_t_28818) {
            "down" === v_t_28818 && v_e_28813.contentWindow.scrollBy({
              top: -160,
              behavior: "smooth"
            });
          }), menuSystem.vt("right", "Down", 3, 3, v_ai_27793, !0, !1, !1, "right", function (v_t_28819) {
            "down" === v_t_28819 && v_e_28813.contentWindow.scrollBy({
              top: 160,
              behavior: "smooth"
            });
          }), menuSystem.vt("disagree", "Disagree", 10, 3, v_si_27792, !1, !1, !1, "", async function (v_t_28820) {
            "down" === v_t_28820 && v_n_28814(!1);
          }), menuSystem.vt("agree", "Agree", 13, 3, v_W0_27791, !1, !1, !0, "", async function (v_t_28821) {
            "down" === v_t_28821 && v_n_28814(!0);
          }), v_e_28813.onload = function () {
            v_r_28815(), v_e_28813.contentWindow.addEventListener("scroll", v_r_28815), v_e_28813.contentWindow.addEventListener("focus", function (v_t_28822) {
              v_uo_28102(() => v_e_28813.blur()), v_t_28822.preventDefault(), v_t_28822.stopPropagation();
            });
          }, await v_fo_28103(v_Ge_28204(20)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(() => {
            menuSystem.St("disagree");
          }, void 0)), sceneManager.ri(180), sceneManager.ti();
        }))) {
          handshake.On.Kp = 1, handshake.On.zp && v_Xt_27648 && (await new Promise(v_t_28823 => v_Te_27911.Ai(v_Ue_28209("entryCreateData"), v_ei_27773 | v_it_27778, 2e3, v_t_28823)), await renderer.C7(v_Ge_28204(30)), await new Promise(v_t_28824 => coopLobby.T0(v_t_28824)), await renderer.C7(v_Ge_28204(30))), await v_Ns_28014.uA();
          {
            let v_i_28825 = [];
            for (const v_t_28826 of v_be_27857.Jp) if ((handshake.On.zp || -1 !== v_t_28826.di.findIndex(v_t_28827 => v_t_28827 === handshake.On.Wp)) && (!handshake.On.zp || v_t_28826.hi)) for (const v_e_28828 of v_t_28826.vi) v_i_28825.push({
              gi: v_t_28826.gi,
              wi: v_e_28828
            });
            0 === v_i_28825.length ? (v_b_28810(), v_v_28803()) : (v_f_28794.Be = !1, v_n_28795.Be = !1, v_s_28796.Be = !1, menuSystem.dt(), menuSystem.vt("ok", "Next", 0, 16, v_W0_27791, !1, !1, !1, "", v_fc_28212), v_Le_28076([function (v_t_28829) {
              v_n_28795.Be = !0, v_u_28793.e8(13), renderer.W6(function () {
                v_n_28795.Be = !1, v_Me_28078(v_t_28829);
              }, v_Ge_28204(80));
            }, function (v_t_28830) {
              v_lo_28099(v_i_28825, function (v_i_28831, v_t_28832, v_e_28833) {
                v_e_28833.gi.pi(v_e_28833.wi.ki).then(function (v_t_28834) {
                  if (v_t_28834) {
                    let v_n_28835 = null;
                    v_Io_28120(v_t_28834.buffer, !1, (v_t_28836, v_i_28837, v_e_28838) => {
                      v_t_28836 === v_xo_28116 ? (v_n_28835 = new glRuntime.Texture(v_i_28837, v_e_28838, {
                        wrapS: glContext.CLAMP_TO_EDGE,
                        wrapT: glContext.CLAMP_TO_EDGE,
                        format: glContext.RGBA
                      }), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_28836 === v_Ao_28115 && (v_n_28835 = null);
                    }), v_n_28835 ? (renderer.Yt.Zt[v_r_28792] && renderer.Yt.Zt[v_r_28792].free(), renderer.Yt.Zt[v_r_28792] = v_n_28835, v_s_28796.yk(25).zt = !0, v_s_28796.yk(25).Xt = v_r_28792, v_Ae_27892.dn("news_open"), v_s_28796.Be = !0, v_u_28793.e8(12), renderer.W6(function () {
                      menuSystem.wt("ok", !0), sceneManager.ft(new v_M1_27898(v_w_28804, void 0)), sceneManager.ri(30), sceneManager.ti(), menuSystem.bt("ok", function (v_t_28839) {
                        "down" === v_t_28839 && (sceneManager.ni(), sceneManager.ii(), menuSystem.wt("ok", !1), v_Ae_27892.dn("change_value"), v_u_28793.e8(14), renderer.W6(function () {
                          renderer.Yt.Zt[v_r_28792] && renderer.Yt.Zt[v_r_28792].free(), v_i_28831();
                        }, v_Ge_28204(24)));
                      });
                    }, 1e3)) : v_i_28831();
                  } else v_i_28831();
                });
              }, function () {
                v_Me_28078(v_t_28830);
              });
            }, async function (v_t_28840) {
              menuSystem.dt(), v_b_28810(), await v_Ns_28014.uA(), v_v_28803();
            }]));
          }
        } else v_Ns_28014.fA(), v_b_28810(), v_N1_27904.T0(!0);
      }
      async function v_m_28807(v_t_28841) {
        handshake.Bm.Fm = 0, v_Ns_28014._A(), v_t_28841 ? await v_Xt_27648.Ey() : (v_Te_27911.W4(), await renderer.C7(v_Ge_28204(15)), await v_Ns_28014.cA(), await renderer.C7(v_Ge_28204(15)), v_Te_27911.K4()), v_i_28806();
      }
      async function v_p_28808(v_t_28842) {
        let v_n_28843 = !1,
          v_r_28844;
        if (void 0 === v_t_28842 && v_Xt_27648) v_Ns_28014.vA(), v_r_28844 = await v_Ns_28014.dA();else {
          var v_t_28842 = await v_Ns_28014.hA(v_Rs_28007.Py(v_t_28842));
          if (v_t_28842 === v_Fs_28012) return await new Promise(v_t_28850 => v_Te_27911.Ai(v_Ue_28209("errorDupLogin"), v_N0_27771 | v_U0_27775, 1500, v_t_28850)), void v_o_28849();
          if (v_t_28842 === v_Es_28010) return await new Promise(v_t_28851 => v_Te_27911.Ai(v_Ue_28209("errorNetworkError"), v_N0_27771 | v_U0_27775, 1500, v_t_28851)), void v_o_28849();
          if (v_r_28844 = await v_Ns_28014.dA(), v_Bs_28013.By(v_r_28844)) return ledOutput.iv(), await renderer.C7(v_Ge_28204(30)), v_d_28802(v_h_28801), v_u_28793.e8(10), await renderer.C7(2500), v_u_28793.e8(11), sceneManager.ft(new v_M1_27898()), sceneManager.ri(10), sceneManager.ti(), v_t_28842 = await new Promise(v_t_28852 => v_Te_27911.Ai(v_Ue_28209("entryNewCardConfirm"), v_G0_27772 | v_it_27778, 0, v_t_28852)), sceneManager.ni(), sceneManager.ii(), v_t_28842 !== v_H0_27781 ? void v_o_28849() : (await renderer.C7(v_Ge_28204(30)), void v_m_28807(!0));
        }
        await new Promise(v_e_28853 => {
          let v_i_28854 = v_r_28844.charaId;
          var v_t_28855 = v_be_27857.Np.find(v_t_28856 => v_t_28856.C0 === v_i_28854);
          v_t_28855 ? (v_n_28843 = v_t_28855.ub, dataLoader.Si(v_t_28855, v_r_28844.charaTransIdx, v_t_28857 => {
            var v_i_28858 = v_c_28791 + "0";
            renderer.Yt.Zt[v_i_28858] && renderer.Yt.Zt[v_i_28858].free(), renderer.Yt.Zt[v_i_28858] = v_t_28857, v_e_28853();
          })) : v_e_28853();
        });
        var v_t_28842 = v_f_28794.yk(6),
          v_e_28845 = v_f_28794.yk(17);
        v_t_28842.Be = !v_Ns_28014.wA(), v_e_28845.Be = v_Ns_28014.wA(), v_f_28794.yk(20).Wt = v_Ue_28209(v_Ns_28014.wA() ? "loginMessageGuest" : "loginMessage");
        {
          let v_i_28859 = v_r_28844.titleId;
          v_e_28845 = v_be_27857.Hp.find(v_t_28860 => v_t_28860.id === v_i_28859);
          v_e_28845 ? (v_t_28842.yk(15).Wt = v_e_28845.text, v_t_28842.yk(10).Je = "title" + v_ot_27785[v_e_28845.rarity]) : (v_t_28842.yk(15).Wt = "！！データベース参照エラー！！", v_t_28842.yk(10).Je = "title" + v_ot_27785[0]);
        }
        v_t_28842.yk(16).Wt = v_r_28844.playerName;
        var v_i_28846,
          v_s_28847,
          v_e_28845 = v_f_28794.yk(1),
          v_a_28848 = v_f_28794.yk(2),
          v_e_28845 = (renderer.Yt.Zt[v_c_28791 + "0"] && (v_n_28843 ? (v_e_28845.Be = !1, v_a_28848.Be = !0, v_a_28848.zt = !0, v_a_28848.Xt = v_c_28791 + "0") : (v_e_28845.Be = !0, v_a_28848.Be = !1, v_e_28845.zt = !0, v_e_28845.Xt = v_c_28791 + "0")), v_Ie_27966.D0("showRating") ? (v_a_28848 = v_r_28844.playerRating, v_e_28845 = "" + mathFloor(v_a_28848 / 100), v_i_28846 = v_Xa_28081("" + v_a_28848 % 100, 2, "0"), v_s_28847 = ratingColorName(v_a_28848), v_a_28848 = ratingColorRgba(v_a_28848), v_t_28842.yk(14).Wt = v_e_28845 + "P" + v_i_28846, v_t_28842.yk(14).Ak = "rating" + v_s_28847, v_t_28842.yk(14).Qe(v_a_28848[0], v_a_28848[1], v_a_28848[2], v_a_28848[3]), v_t_28842.yk(13).Je = "numRating" + v_s_28847 + "Rating", v_t_28842.yk(13).Qe(v_a_28848[0], v_a_28848[1], v_a_28848[2], v_a_28848[3])) : (v_t_28842.yk(14).Wt = "N", v_t_28842.yk(14).Ak = "ratingWt", v_t_28842.yk(14).Qe(.825, .825, .825, 1), v_t_28842.yk(13).Je = "numRatingWtRating", v_t_28842.yk(13).Qe(.825, .825, .825, 1)), v_Ie_27966.D0("showLevel") ? v_t_28842.yk(12).Wt = "" + mathMin(mathMax(v_r_28844.playerLevel, 1), 99) : v_t_28842.yk(12).Wt = "MM", v_d_28802(v_f_28794), v_u_28793.e8(6, void 0, 25), v_H1_27907.T0(), menuSystem.dt(), [["yes", "Yes", 0, 8, v_W0_27791, async function () {
            sceneManager.ni(), sceneManager.ri(30), menuSystem.It(!1), ((await v_Z1_27919.qA(1)) ? (menuSystem.kt("yes", !1), sceneManager.ni(), sceneManager.ii(), v_u_28793.e8(7, void 0, 0), await renderer.C7(v_Ge_28204(15)), menuSystem.dt(), v_m_28807) : v_o_28849)();
          }], ["no", "No", 8, 8, v_si_27792, v_o_28849]]);
        for (const v_l_28861 of v_e_28845) menuSystem.vt(v_l_28861[0], v_l_28861[1], v_l_28861[2], v_l_28861[3], v_l_28861[4], !1, !1, !1, "", v_l_28861[5]);
        async function v_o_28849() {
          v_Z1_27919.C9(), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_Ns_28014.fA(), v_H1_27907.T0(), v_u_28793.e8(7, void 0, 10), menuSystem.dt(), await renderer.C7(v_Ge_28204(30)), v_b_28810(), v_N1_27904.T0(!0);
        }
        await renderer.C7(v_Ge_28204(15)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(v_g_28805, void 0)), sceneManager.ri(30), sceneManager.ti();
      }
      async function v_k_28809(v_t_28862) {
        let v_i_28863 = v_t_28862;
        if (v_i_28863 && v_i_28863 !== v_Is_28005 && v_i_28863 !== v_Ts_28004) v_p_28808(v_t_28862);else {
          v_d_28802(v_o_28798), v_u_28793.e8(8, void 0, 25), menuSystem.dt();
          for (const v_n_28865 of [["guest", "GuestLogin", 0, 12, v_W0_27791, async function () {
            v_D_27646.C9(), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await renderer.C7(v_Ge_28204(15)), menuSystem.dt(), v_p_28808();
          }], ["accCode", "AccessCode", 12, 4, v_X0_27795, async function () {
            v_D_27646.C9(), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await renderer.C7(v_Ge_28204(15)), menuSystem.dt(), async function () {
              let v_t_28866 = 0;
              await new Promise(v_t_28869 => v_Te_27911.Ai(v_Ue_28209("loginAccessCodeMode"), v_ei_27773, 1500, v_t_28869)), v_d_28802(v_l_28799), v_u_28793.e8(0, void 0, 25), menuSystem.dt();
              for (const v_n_28870 of [["exit", "Cancel", 0, 16, v_si_27792, v_e_28868]]) menuSystem.vt(v_n_28870[0], v_n_28870[1], v_n_28870[2], v_n_28870[3], v_n_28870[4], !1, !1, !1, "", v_n_28870[5]);
              await renderer.C7(v_Ge_28204(15)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(v_e_28868, void 0)), sceneManager.ri(30), sceneManager.ti();
              var v_i_28867 = await v_D_27646.R9();
              if (v_i_28867 !== v_Ts_28004) if (v_i_28867 === v_Is_28005) await new Promise(v_t_28871 => v_Te_27911.Ai(v_Ue_28209("amReaderErrorFatal"), v_N0_27771 | v_U0_27775, 1500, v_t_28871)), v_e_28868();else {
                v_u_28793.e8(1, void 0, 10), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), await renderer.C7(v_Ge_28204(30)), menuSystem.dt(), v_t_28866++, v_d_28802(v___28800), v_u_28793.lt.yk(50).Wt = v_Rs_28007.E9(v_i_28867), v_u_28793.e8(2, void 0, 10);
                for (const v_r_28872 of [["exit", "Exit", 0, 16, v_W0_27791, v_e_28868]]) menuSystem.vt(v_r_28872[0], v_r_28872[1], v_r_28872[2], v_r_28872[3], v_r_28872[4], !1, !1, !1, "", v_r_28872[5]);
                await renderer.C7(v_Ge_28204(15)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(v_e_28868, void 0)), sceneManager.ri(30), sceneManager.ti();
              }
              async function v_e_28868() {
                switch (v_D_27646.C9(), sceneManager.ni(), sceneManager.ii(), v_t_28866) {
                  case 0:
                    v_u_28793.e8(1, void 0, 10);
                    break;
                  case 1:
                    v_u_28793.e8(3, void 0, 10);
                }
                menuSystem.dt(), await renderer.C7(v_Ge_28204(30)), v_b_28810(), v_N1_27904.T0(!0);
              }
            }();
          }]]) menuSystem.vt(v_n_28865[0], v_n_28865[1], v_n_28865[2], v_n_28865[3], v_n_28865[4], !1, !1, !1, "", v_n_28865[5]);
          for (await renderer.C7(v_Ge_28204(30)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(() => {
            v_D_27646.C9(), sceneManager.ni(), sceneManager.ii(), v_u_28793.e8(9, void 0, 10), menuSystem.dt(), renderer.W6(() => {
              v_b_28810(), v_N1_27904.T0(!0);
            }, v_Ge_28204(30));
          }, void 0)), sceneManager.ri(30), sceneManager.ti();;) {
            var v_e_28864 = v_i_28863 || (await v_D_27646.R9());
            if (v_i_28863 = void 0, v_e_28864 === v_Ts_28004) return;
            if (v_e_28864 !== v_Is_28005) {
              v_D_27646.C9(), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_u_28793.e8(9, void 0, 0), await renderer.C7(v_Ge_28204(15)), menuSystem.dt(), v_p_28808(v_e_28864);
              break;
            }
            await new Promise(v_t_28873 => v_Te_27911.Ai(v_Ue_28209("amReaderErrorFatal"), v_N0_27771 | v_U0_27775, 1500, v_t_28873));
          }
        }
      }
      function v_b_28810() {
        renderer._i("login"), v_O1_27910.ii();
      }
      return {
        ue: function (v_e_28874) {
          v_Le_28076([v_i_28875 => {
            languagePackages.it("ui/login.rsb", function (v_t_28876) {
              v_t_28876 ? (v_t_28876 = new v_Dl_28181(v_t_28876), renderer.nt(v_t_28876.rt(renderer.p5()), v_t_28877 => {
                v_u_28793 = v_t_28877, v_f_28794 = v_u_28793.lt.yk(0), v_n_28795 = v_u_28793.lt.yk(21), v_s_28796 = v_u_28793.lt.yk(23), v_a_28797 = v_u_28793.lt.yk(26), v_o_28798 = v_u_28793.lt.yk(36), v_l_28799 = v_u_28793.lt.yk(42), v___28800 = v_u_28793.lt.yk(47), v_h_28801 = v_u_28793.lt.yk(52), v_Me_28078(v_i_28875);
              })) : v_e_28874();
            });
          }, v_t_28878 => {
            v_Fe_28101(v_e_28874);
          }]);
        },
        T0: function (v_i_28879, v_e_28880) {
          v_Le_28076([v_i_28881 => {
            v_O1_27910.ti("Login"), v_u_28793.Jt = !1, renderer.ut("login", v_u_28793, 20, v_t_28882 => {
              v_Me_28078(v_i_28881);
            });
          }, v_t_28883 => {
            v_e_28880 ? v_p_28808() : v_k_28809(v_i_28879);
          }]);
        }
      };
    }(),
    v_U1_27906 = function () {
      function v_e_28884() {
        this.wi = 0, this.Ee = void 0;
      }
      let v_r_28885 = void 0,
        v_s_28886 = [],
        v_n_28887 = new v_e_28884();
      function v_a_28888() {
        --v_n_28887.wi, v_n_28887.wi < 0 && (v_n_28887.wi = 0), v_c_28891();
      }
      function v_o_28889() {
        ++v_n_28887.wi, v_n_28887.wi >= v_s_28886.length && (v_n_28887.wi = v_s_28886.length - 1), v_c_28891();
      }
      function v_l_28890() {
        v_r_28885.e8(0), menuSystem.It(!1), renderer.W6(v_t_28892, v_Ge_28204(30));
      }
      function v_c_28891() {
        v_r_28885.lt.yk(6).Wt = v_s_28886[v_n_28887.wi], v_r_28885.lt.yk(7).Wt = "Page " + (v_n_28887.wi + 1) + " / " + v_s_28886.length, menuSystem.kt("left", v_n_28887.wi <= 0), menuSystem.kt("right", v_n_28887.wi >= v_s_28886.length - 1), menuSystem.Cv(!0);
      }
      function v_t_28892() {
        menuSystem._t(), renderer._i("licenseText"), v_n_28887.Ee && v_n_28887.Ee();
      }
      return {
        ue: function (v_n_28893) {
          v_Le_28076([v_i_28894 => {
            languagePackages.it("ui/licenseText.rsb", function (v_t_28895) {
              v_t_28895 ? (v_t_28895 = new v_Dl_28181(v_t_28895), renderer.nt(v_t_28895.rt(renderer.p5()), v_t_28896 => {
                v_r_28885 = v_t_28896, v_Me_28078(v_i_28894);
              })) : v_n_28893();
            });
          }, v_e_28897 => {
            v_$r_27975.xi("/license.xml", function (v_t_28898) {
              if (v_t_28898) {
                for (const v_i_28899 of v_t_28898.documentElement.getElementsByTagName("item")) v_s_28886.push(v_i_28899.textContent);
                v_Me_28078(v_e_28897);
              } else v_n_28893();
            });
          }, v_t_28900 => {
            v_Fe_28101(v_n_28893);
          }]);
        },
        T0: function (v_t_28901) {
          v_Le_28076([v_i_28902 => {
            menuSystem.ft(), (v_n_28887 = new v_e_28884()).Ee = v_t_28901, v_r_28885.Jt = !1, renderer.ut("licenseText", v_r_28885, 20, v_t_28903 => {
              v_Me_28078(v_i_28902);
            });
          }, v_t_28904 => {
            v_r_28885.Jt = !0, v_r_28885.e8(1);
            for (const v_i_28905 of [["left", "Left", 0, 3, v_ai_27793, !0, v_a_28888], ["right", "Right", 3, 3, v_ai_27793, !0, v_o_28889], ["exit", "Exit", 14, 2, v_si_27792, !1, v_l_28890]]) menuSystem.vt(v_i_28905[0], v_i_28905[1], v_i_28905[2], v_i_28905[3], v_i_28905[4], v_i_28905[5], !1, !1, "", v_i_28905[6]);
            menuSystem.yv(), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), v_c_28891();
          }]);
        }
      };
    }(),
    v_H1_27907 = function () {
      let v_n_28906 = void 0;
      return {
        ue: function (v_e_28907) {
          v_Le_28076([v_i_28908 => {
            languagePackages.it("ui/commonTransition.rsb", function (v_t_28909) {
              v_t_28909 ? (v_t_28909 = new v_Dl_28181(v_t_28909), (v_n_28906 = v_t_28909.rt(renderer.p5())).Jt = !1, renderer.ut("sysTransition", v_n_28906, 4100, v_t_28910 => {
                v_Me_28078(v_i_28908);
              })) : v_e_28907();
            });
          }, v_t_28911 => {
            v_Fe_28101(v_e_28907);
          }]);
        },
        T0: function () {
          v_n_28906.Jt = !0, v_n_28906.e8(0);
        }
      };
    }(),
    v_J1_27908 = function () {
      let v_n_28912 = void 0;
      return {
        ue: function (v_e_28913) {
          v_Le_28076([v_i_28914 => {
            languagePackages.it("ui/filter.rsb", function (v_t_28915) {
              v_t_28915 ? (v_t_28915 = new v_Dl_28181(v_t_28915), (v_n_28912 = v_t_28915.rt(renderer.p5())).Jt = !1, renderer.ut("_filter", v_n_28912, 1e7, v_t_28916 => {
                v_Me_28078(v_i_28914);
              })) : v_e_28913();
            });
          }, v_t_28917 => {
            v_e_28913();
          }]);
        }
      };
    }(),
    v_j1_27909 = function () {
      let v_n_28918 = void 0;
      return {
        ue: function (v_e_28919) {
          v_Le_28076([v_i_28920 => {
            languagePackages.it("ui/commonBackground.rsb", function (v_t_28921) {
              v_t_28921 ? (v_t_28921 = new v_Dl_28181(v_t_28921), (v_n_28918 = v_t_28921.rt(renderer.p5())).Jt = !1, v_n_28918.e8(1), v_n_28918.e8(0), renderer.ut("sysBackground", v_n_28918, 0, v_t_28922 => {
                v_Me_28078(v_i_28920);
              })) : v_e_28919();
            });
          }, v_t_28923 => {
            v_e_28919();
          }]);
        },
        ti: function () {
          v_n_28918.Jt = !0;
        },
        ii: function () {
          v_n_28918.Jt = !1;
        }
      };
    }(),
    v_O1_27910 = function () {
      let v_n_28924 = void 0;
      return {
        ue: function (v_e_28925) {
          v_Le_28076([v_i_28926 => {
            languagePackages.it("ui/commonCaption.rsb", function (v_t_28927) {
              v_t_28927 ? (v_t_28927 = new v_Dl_28181(v_t_28927), (v_n_28924 = v_t_28927.rt(renderer.p5())).Jt = !1, renderer.ut("sysCaption", v_n_28924, 4110, v_t_28928 => {
                v_Me_28078(v_i_28926);
              })) : v_e_28925();
            });
          }, v_t_28929 => {
            v_Fe_28101(v_e_28925);
          }]);
        },
        ti: function (v_t_28930) {
          v_n_28924.Jt = !0, v_n_28924.lt.yk(2).Je = "text" + v_t_28930, v_n_28924.lt.yk(3).Wt = v_Ue_28209("header" + v_t_28930), v_n_28924.e8(0), sceneManager.ei();
        },
        ii: function () {
          v_n_28924.Jt = !1, sceneManager.qt();
        }
      };
    }(),
    v_Te_27911 = function () {
      function v_l_28931() {
        this.Ii = 0, this.yi = 0, this.Ee = void 0, this.Ci = void 0;
      }
      v_l_28931.prototype = {
        Ok: function (v_t_28944) {
          this.Ci.ot("dialogMessage").Wt = v_t_28944;
        },
        Wk: function (v_t_28945) {
          this.Ci.ot("progressDownloadBytes").Wt = v_t_28945;
        },
        zk: function (v_t_28946) {
          null === v_t_28946 ? (this.Ci.ot("progressBarFg").Oe[0] = 1, v_c_28932.e8(4, this.Ci)) : (v_c_28932.i8(4, this.Ci), this.Ci.ot("progressBarFg").Oe[0] = v_t_28946);
        }
      };
      let v_c_28932 = void 0,
        v_u_28933 = void 0,
        v_f_28934 = {},
        v___28935 = [];
      function v_h_28936(v_t_28947, v_i_28948) {
        "down" === v_t_28947 && (v_Ae_27892.dn("change_value"), v_r_28942(v_nt_27780));
      }
      function v_d_28937(v_t_28949, v_i_28950) {
        "down" === v_t_28949 && (v_Ae_27892.dn("change_value"), v_r_28942(v_H0_27781));
      }
      function v_v_28938(v_t_28951, v_i_28952) {
        "down" === v_t_28951 && (v_Ae_27892.dn("change_value"), v_r_28942(v_rt_27782));
      }
      function v_w_28939(v_t_28953, v_i_28954) {
        "down" === v_t_28953 && (v_Ae_27892.dn("change_value"), v_r_28942(v_st_27783));
      }
      function v_g_28940() {
        v_r_28942(v_at_27784);
      }
      function v_n_28958(v_t_28955, v_i_28956, v_e_28957, v_n_28958) {
        var v_r_28959 = new v_l_28931();
        let v_s_28960 = "dialogSingle";
        (61440 & v_i_28956) === v_U0_27775 && (v_s_28960 = "dialogWarn"), (3840 & v_i_28956) === v_ni_27774 && (v_s_28960 = "dialog"), 4 == (v_i_28956 & v_tt_27777) ? v_s_28960 = "dialogLoading" : 5 == (v_i_28956 & v_tt_27777) ? v_s_28960 = "dialogProgress" : 6 == (v_i_28956 & v_tt_27777) && (v_s_28960 = "dialogProgressBackground"), v_r_28959.Ci = v_f_28934[v_s_28960].Ve(!0), v_r_28959.Ci.Be = !0, v_r_28959.Ci.ot("dialogMessage").Wt = v_t_28955, v_u_28933.Ze(v_r_28959.Ci), v_c_28932.e8(2, v_r_28959.Ci), 4 == (v_i_28956 & v_tt_27777) && v_c_28932.e8(3, v_r_28959.Ci), v_i_28956 & v_it_27778 && (v_r_28959.Ci.ot("backdrop").Be = !1, v_r_28959.Ci.ot("overlay").Be = !1), v_r_28959.Ee = v_n_28958, v_e_28957 && (v_r_28959.yi = renderer.xt() + v_e_28957);
        var v_a_28961 = [];
        switch (v_i_28956 & v_tt_27777) {
          case v_N0_27771:
            v_a_28961.push(["ok", "Next", 0, 16, v_W0_27791, v_h_28936]);
            break;
          case v_G0_27772:
            v_a_28961.push(["yes", "Yes", 0, 8, v_W0_27791, v_d_28937]), v_a_28961.push(["no", "No", 8, 8, v_si_27792, v_v_28938]);
            break;
          case 2:
            v_a_28961.push(["cancel", "Cancel", 0, 16, v_W0_27791, v_w_28939]);
        }
        menuSystem.ft();
        for (const v_o_28962 of v_a_28961) menuSystem.vt(v_o_28962[0], v_o_28962[1], v_o_28962[2], v_o_28962[3], v_o_28962[4], !1, !1, !1, "", v_o_28962[5]);
        menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(v_g_28940, void 0)), ledOutput.iv(), 4 == (v_i_28956 & v_tt_27777) || 5 == (v_i_28956 & v_tt_27777) || 6 == (v_i_28956 & v_tt_27777) || v_i_28956 & v_et_27779 || v_Ae_27892.dn("news_open"), 5 != (v_i_28956 & v_tt_27777) && 6 != (v_i_28956 & v_tt_27777) || v_n_28958 && v_n_28958(-1, v_r_28959), v___28935.push(v_r_28959);
      }
      function v_r_28942(v_t_28963) {
        let v_i_28964 = v___28935.pop();
        v_c_28932.e8(1, v_i_28964.Ci), sceneManager._t(), menuSystem._t(), renderer.W6(function () {
          v_u_28933.Ke(v_i_28964.Ci);
        }, v_Ge_28204(20)), "function" == typeof v_i_28964.Ee && v_i_28964.Ee(v_t_28963);
      }
      function v_t_28965(v_t_28965, v_i_28966, v_e_28967) {
        0 < v___28935.length && 0 < v___28935[v___28935.length - 1].yi && v___28935[v___28935.length - 1].yi < v_t_28965 && v_r_28942();
      }
      return {
        ue: function (v_i_28968) {
          v_Le_28076([v_e_28969 => {
            languagePackages.it("ui/commonDialog.rsb", function (v_t_28970) {
              v_t_28970 ? (v_t_28970 = new v_Dl_28181(v_t_28970), renderer.nt(v_t_28970.rt(renderer.p5()), v_t_28971 => {
                v_c_28932 = v_t_28971, v_u_28933 = v_t_28971.lt.yk(0);
                var v_i_28972 = v_t_28971.lt.yk(1);
                for (let v_t_28973 = 0; v_t_28973 < v_i_28972.We.length; ++v_t_28973) v_i_28972.We[v_t_28973].Be = !1, v_f_28934[v_i_28972.We[v_t_28973].ct] = v_i_28972.We[v_t_28973];
                v_Me_28078(v_e_28969);
              })) : v_i_28968();
            });
          }, v_i_28974 => {
            renderer.ut("sysCommonDialogLoop", new v_Tl_28174(v_t_28943), 990, v_t_28975 => {
              v_Me_28078(v_i_28974);
            });
          }, v_t_28976 => {
            renderer.ut("sysCommonDialog", v_c_28932, 991, () => {
              v_Fe_28101(v_i_28968);
            });
          }, v_t_28977 => {
            v_Fe_28101(v_i_28968);
          }]);
        },
        Ai: v_n_28941,
        W4: function (v_t_28978) {
          v_n_28941(void 0 !== v_t_28978 ? v_t_28978 : "NOW LOADING...", 4, 0, void 0);
        },
        Kk: function (v_t_28979, v_i_28980) {
          let v_e_28981 = null;
          return v_n_28941(v_t_28979, v_i_28980 ? 6 : 5, 0, (v_t_28982, v_i_28983) => {
            -1 === v_t_28982 && (v_e_28981 = v_i_28983);
          }), v_e_28981;
        },
        K4: v_r_28942,
        Ti: function () {
          return v___28935.length;
        },
        Li: function () {
          for (; v___28935.length;) v_r_28942();
        }
      };
    }(),
    v_V1_27912 = function () {
      let v_n_28984 = void 0,
        v_i_28985 = 0,
        v_t_28986 = 0,
        v_e_28987 = 0;
      function v_r_28988() {
        v_i_28985 = 0, v_n_28984.Jt = !0, v_n_28984.i8(2), v_n_28984.i8(1), v_n_28984.e8(0), v_t_28986 = v_uo_28102(() => {
          v_t_28986 = 0, v_n_28984.e8(2);
        }, 2e3);
      }
      return {
        ue: function (v_e_28989) {
          v_Le_28076([v_i_28990 => {
            languagePackages.it("ui/waitMessage.rsb", function (v_t_28991) {
              v_t_28991 ? (v_t_28991 = new v_Dl_28181(v_t_28991), renderer.nt(v_t_28991.rt(renderer.p5()), v_t_28992 => {
                (v_n_28984 = v_t_28992).Jt = !1, v_Me_28078(v_i_28990);
              })) : v_e_28989();
            });
          }, v_t_28993 => {
            renderer.ut("sysCommonWaitMessage", v_n_28984, 980, () => {
              v_Fe_28101(v_e_28989);
            });
          }, v_t_28994 => {
            v_Fe_28101(v_e_28989);
          }]);
        },
        T0: function (v_t_28995) {
          v_i_28985 || (v_e_28987 && clearTimeout(v_e_28987), v_e_28987 = 0, v_i_28985 = v_uo_28102(v_r_28988, v_t_28995));
        },
        XS: function () {
          v_i_28985 && clearTimeout(v_i_28985), v_i_28985 = 0, v_n_28984.Jt && (v_t_28986 && clearTimeout(v_t_28986), v_t_28986 = 0, v_n_28984.e8(1), v_e_28987 = v_uo_28102(() => {
            v_e_28987 = 0, v_n_28984.Jt = !1;
          }, 900));
        }
      };
    }(),
    coopLobby = function () {
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
            v_e_29025 = mathMin(mathMax(v_e_29025, 0), v_s_29028.Bi.length - 1);
          if (v_e_29025 !== v_g_29009.Ni) {
            v_g_29009.Ui = !0;
            var v_a_29029 = v_g_29009.Ni;
            v_g_29009.Ni = v_e_29025, v_A_29019(0, v_s_29028.Bi[v_a_29029], v_g_29009.Ni, v_s_29028.Bi[v_g_29009.Ni]);
            let v_t_29030 = 6,
              v_i_29031 = v_ui_27806;
            v_n_29026 === v_gi_27815 ? (v_i_29031 = v_gi_27815, v_t_29030 = 0) : 1 === v_r_29027 ? (v_i_29031 = v_vi_27813, v_t_29030 = 3) : 1 < v_r_29027 && (v_i_29031 = v_gi_27815, v_t_29030 = 0), v_b_29016(v_i_29031), v_g_29009.Hi || v___29000.e8(12), v_t_29030 <= 0 ? v_g_29009.Ui = !1 : renderer.W6(() => {
              v_g_29009.Ui = !1;
            }, v_Ge_28204(6));
          }
        }
      }
      function v_k_29015(v_e_29032, v_n_29033, v_r_29034) {
        if (!v_o_29011()) {
          var v_s_29035 = v_qa_28086(v_e_29032, v_p_29012().length);
          let v_t_29036 = !1;
          if (void 0 !== v_n_29033 && (v_n_29033 & v_fi_27807 || v_n_29033 & v__i_27808) && (v_t_29036 = !0), v_g_29009.Hi ? v___29000.e8(2) : v___29000.e8(12), v_t_29036) {
            v_g_29009.a0.Zn = !0, v_g_29009.a0.Yn = v_n_29033, v_C_29021();
            v_e_29032 = v_g_29009.ji;
            v_g_29009.ji = v_s_29035;
            let v_t_29037 = 6,
              v_i_29038 = v_n_29033;
            v_g_29009.Hi ? 1 === v_r_29034 ? (v_i_29038 |= v_vi_27813, v_t_29037 = 3) : 1 < v_r_29034 && (v_i_29038 = v_gi_27815, v_t_29037 = 0) : (v_t_29037 = 54, menuSystem.T9(v_Ge_28204(v_t_29037))), v_y_29017(v_i_29038), !function v_r_29042(v_t_29039, v_s_29040, v_i_29041) {
              if (v_g_29009.i0) return v_g_29009.a0.Yn = v_i_29041, void (v_g_29009.a0.Zn = !0);
              v_g_29009.a0.Zn = !1;
              v_g_29009.i0 = !0;
              v_g_29009.a0.Yn = v_i_29041;
              let v_a_29043 = v_g_29009.a0;
              let v_o_29044 = v_p_29012()[v_t_29039];
              for (let v_t_29045 = 0; v_t_29045 < v_o_29044.Bi.length; ++v_t_29045) v_o_29044.Bi[v_t_29045].ze.nn(), v_o_29044.Bi[v_t_29045].ze.Be = !1;
              v_b_29016(v_ui_27806, v_t_29039, v_s_29040);
              v_b_29016(v_i_29041 & v_fi_27807 ? v_di_27810 : v_hi_27809, v_t_29039, v_s_29040);
              renderer.W6(() => {
                let v_t_29046 = v_g_29009.ji,
                  v_i_29047 = 0,
                  v_e_29048 = v_p_29012()[v_t_29046],
                  v_n_29049 = v_a_29043.Yn;
                v_n_29049 & v_fi_27807 && (v_i_29047 = v_e_29048.Bi.length - 1), v_g_29009.Ni = v_i_29047, v_a_29043.Zn = !1;
                for (let v_t_29050 = 0; v_t_29050 < v_e_29048.Bi.length; ++v_t_29050) v_e_29048.Bi[v_t_29050].ze.nn();
                v_b_29016(v_n_29049 & v_fi_27807 ? v_hi_27809 : v_di_27810, v_t_29046, v_i_29047), v_b_29016(v_wi_27814, v_t_29046, v_i_29047), renderer.W6(() => {
                  v_A_29019(0, v_o_29044.Bi[v_s_29040], v_i_29047, v_e_29048.Bi[v_i_29047]), v_g_29009.i0 = !1, v_C_29021(), v_a_29043.Zn && (v_t_29046 === v_g_29009.ji && v_n_29049 === v_a_29043.Yn ? v_g_29009.a0.Zn = !1 : v_r_29042(v_t_29046, v_i_29047, v_a_29043.Yn));
                }, v_Ge_28204(24));
              }, v_Ge_28204(30));
            }(v_e_29032, v_g_29009.Ni, v_n_29033), 0 < v_t_29037 && (v_g_29009.gn = !0, renderer.W6(() => {
              v_g_29009.gn = !1;
            }, v_Ge_28204(v_t_29037)));
          } else {
            v_g_29009.ji = v_s_29035;
            for (let v_t_29051 = 0; v_t_29051 < v_p_29012()[v_s_29035].Bi.length; ++v_t_29051) v_p_29012()[v_s_29035].Bi[v_t_29051].ze.Be = !1;
            v_y_29017(v_gi_27815), v_b_29016(v_gi_27815);
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
        var v_o_29059 = void 0 !== v_i_29052 && (v_i_29052 & v_hi_27809 || v_i_29052 & v_di_27810),
          v_l_29060 = void 0 !== v_wi_27814 && v_i_29052 & v_wi_27814,
          v_c_29061 = void 0 !== v_i_29052 && v_i_29052 & v_vi_27813 ? 3 : 6;
        for (let v_t_29062 = 0; v_t_29062 < v_r_29056 - 7; ++v_t_29062) v_s_29057.Bi[v_t_29062].ze.Be = !1;
        for (let v_t_29063 = v_r_29056 + 8; v_t_29063 < v_s_29057.Bi.length; ++v_t_29063) v_s_29057.Bi[v_t_29063].ze.Be = !1;
        for (let v_t_29064 = -7; v_t_29064 < 8; ++v_t_29064) (v_n_29055 = v_t_29064 + v_r_29056) < 0 || v_s_29057.Bi.length <= v_n_29055 || (0 === v_t_29064 ? v_a_29058 = 0 : (v_a_29058 = 140 * v_t_29064, v_a_29058 += 160 * (0 < v_a_29058 ? 1 : -1)), v_o_29059 && (v_i_29052 & v_hi_27809 ? v_a_29058 -= 310 * (4.5 + mathMin(v_s_29057.Bi.length - 1 - v_r_29056, 3)) : v_a_29058 += 310 * (4.5 + mathMin(v_r_29056, 3))), (!1 === (v_n_29055 = v_s_29057.Bi[v_n_29055].ze).Be || v_i_29052 & v_gi_27815) && v_n_29055.nn(), !v_o_29059 || -7 !== v_t_29064 && 7 !== v_t_29064 ? v_n_29055.Be = !0 : v_n_29055.Be = !1, (0 === v_t_29064 ? v_d_29003 : v_h_29001).Ze(v_n_29055), v_o_29059 || v_l_29060 ? v_n_29055.rn(v_Vo_28136, v_Jo_28133, 24, 0) : v_n_29055.rn(v_Vo_28136, v_jo_28134, v_c_29061, 0), v_l_29060 ? (v_n_29055.rn(v_Xo_28138, v_Jo_28133, 10, 14), v_n_29055.rn(v_zo_28139, v_Jo_28133, 10, 14)) : v_o_29059 ? (v_n_29055.rn(v_Xo_28138, v_Jo_28133, 6, 0), v_n_29055.rn(v_zo_28139, v_Jo_28133, 6, 0)) : (v_n_29055.rn(v_Xo_28138, v_jo_28134, v_c_29061, 0), v_n_29055.rn(v_zo_28139, v_jo_28134, v_c_29061, 0)), v_n_29055.$e(v_a_29058, 0), v_o_29059 || 0 !== v_t_29064 ? v_n_29055.ln(.5, .5) : v_n_29055.ln(1, 1));
      }
      function v_y_29017(v_i_29065, v_t_29066) {
        var v_e_29067,
          v_n_29068 = void 0 === v_t_29066 ? v_g_29009.ji : v_t_29066,
          v_r_29069 = void 0 !== v_i_29065 && v_i_29065 & v_vi_27813 ? 5 : 10;
        let v_s_29070 = 0,
          v_a_29071 = 0;
        var v_o_29072,
          v_l_29073 = void 0 !== v_i_29065 && (v_i_29065 & v_fi_27807 || v_i_29065 & v__i_27808);
        for (let v_t_29074 = -4; v_t_29074 < 5; ++v_t_29074) v_e_29067 = v_qa_28086(v_t_29074 + v_n_29068, v_p_29012().length), 0 === v_t_29074 ? v_s_29070 = 0 : (v_s_29070 = 250 * v_t_29074, v_s_29070 += 178 * (0 < v_s_29070 ? 1 : -1)), v_l_29073 && (0 === (v_o_29072 = v_t_29074 + (v_i_29065 & v_fi_27807 ? -1 : 1)) ? v_a_29071 = 0 : (v_a_29071 = 250 * v_o_29072, v_a_29071 += 178 * (0 < v_a_29071 ? 1 : -1))), (v_o_29072 = v_c_29008[v_t_29074 + 4]).We[0].Je = "catPanelCategory", v_o_29072.nn(), v_o_29072.rn(v_Xo_28138, v_jo_28134, v_r_29069, 0), v_o_29072.rn(v_zo_28139, v_jo_28134, v_r_29069, 0), v_o_29072.rn(v_Vo_28136, v_Ho_28132, v_r_29069, 0), v_l_29073 && (v_o_29072.$e(v_a_29071), v_t_29074 + (v_i_29065 & v_fi_27807 ? -1 : 1) === 0 ? v_o_29072.ln(1, 1) : v_o_29072.ln(.7, .7)), v_o_29072.Be = !0, v_o_29072.We[1].Wt = v_p_29012()[v_e_29067].Ei, 0 === v_t_29074 && v_o_29072.Kt(), v_o_29072.$e(v_s_29070), 0 === v_t_29074 ? v_o_29072.ln(1, 1) : v_o_29072.ln(.7, .7);
      }
      function v_S_29018(v_t_29075, v_i_29076) {
        v_o_29011() && !v_i_29076 || (v_g_29009.Ui = !0, v_v_29004.Oi.Be = !0, v_v_29004.Ji.Be = !0, v_t_29075 ? (v_v_29004.wn.$e(-20, -225), v_v_29004.pn.$e(20, -225), v_g_29009.Hi === v_t_29075 || v_i_29076 ? (v_v_29004.Oi.Be = !1, v___29000.e8(5), v_g_29009.Ui = !1) : (v___29000.e8(7), renderer.W6(() => {
          v_v_29004.Oi.Be = !1, v_g_29009.Ui = !1, v___29000.e8(5);
        }, 26 / 60 * 1e3))) : (v_v_29004.wn.$e(0, 0), v_v_29004.pn.$e(0, 0), v_g_29009.Hi === v_t_29075 || v_i_29076 ? (v_v_29004.Ji.Be = !1, v___29000.e8(5), v_g_29009.Ui = !1) : (v___29000.e8(8), v___29000.e8(rv.nameEntry_seq_panelBounce), renderer.W6(() => {
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
        v_n_29013() && (menuSystem.Cv(!0), v_t_29085 ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("backspace", !1), menuSystem.wt("exit", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.kt("endCatMode", !(!v_g_29009.i0 && !v_g_29009.a0.Zn))) : (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !0), menuSystem.wt("backspace", !0), menuSystem.wt("exit", !0), menuSystem.wt("startCatMode", !0), menuSystem.wt("endCatMode", !1)));
      }
      function v_T_29022(v_t_29086, v_i_29087) {
        if (!v_o_29011()) {
          var v_e_29088 = v_n_29013();
          switch (v_t_29086) {
            case "left":
              v_g_29009.Hi || v_g_29009.Ni <= 0 ? v_o_29011() || (v_Ae_27892.dn("move_cursor"), v_k_29015(v_g_29009.ji - 1, v_fi_27807, v_i_29087)) : v_o_29011() || (v_Ae_27892.dn("move_cursor"), v_l_29014(v_g_29009.Ni - 1, v_ui_27806, v_i_29087));
              break;
            case "right":
              v_g_29009.Hi || v_g_29009.Ni >= v_p_29012()[v_g_29009.ji].Bi.length - 1 ? v_o_29011() || (v_Ae_27892.dn("move_cursor"), v_k_29015(v_g_29009.ji + 1, v__i_27808, v_i_29087)) : v_o_29011() || (v_Ae_27892.dn("move_cursor"), v_l_29014(v_g_29009.Ni + 1, v_ui_27806, v_i_29087));
              break;
            case "select":
              v_Ae_27892.dn("menu_in"), 0 === v_e_29088.Gy ? async function () {
                v_g_29009.Ny.length || (v_g_29009.Ny = "ＵＭＩＧＵＲＩ");
                menuSystem.ft(), v_x_29020(!0), await renderer.C7(v_Ge_28204(30)), v_a_29006.Be = !0, v___29000.e8(4);
                var v_t_29089 = await new Promise(v_e_29090 => {
                  function v_n_29091(v_t_29092, v_i_29093) {
                    "down" === v_i_29093 && v_e_29090(v_t_29092);
                  }
                  menuSystem.vt("yes", "Yes", 0, 8, v_W0_27791, !1, !1, !1, "", (v_t_29094, v_i_29095) => v_n_29091(!0, v_t_29094)), menuSystem.vt("no", "No", 8, 8, v_si_27792, !1, !1, !1, "", (v_t_29096, v_i_29097) => v_n_29091(!1, v_t_29096)), menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20));
                });
                menuSystem._t(), v___29000.e8(3), await renderer.C7(v_Ge_28204(10)), v_t_29089 ? (menuSystem.dt(), v_b_29016(v_hi_27809), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v___29000.e8(9), await renderer.C7(v_Ge_28204(30)), v_P_29024()) : v_x_29020(!1);
              }() : v_g_29009.Ny.length < 8 && (v___29000.e8(6), v_g_29009.Ny += String.fromCodePoint(1 !== v_e_29088.Gy ? v_e_29088.Gy : 12288), v_x_29020(), 8 === v_g_29009.Ny.length) && v_l_29014(v_p_29012()[v_g_29009.ji].Bi.length - 1, v_gi_27815, 0);
              break;
            case "backspace":
              v_Ae_27892.dn("menu_out"), 0 < v_g_29009.Ny.length && (v_g_29009.Ny = v_g_29009.Ny.substr(0, v_g_29009.Ny.length - 1), v_x_29020());
              break;
            case "exit":
              v_Ae_27892.dn("menu_in"), v_l_29014(v_p_29012()[v_g_29009.ji].Bi.length - 1, v_gi_27815, 0);
              break;
            case "startCatMode":
              v_Ae_27892.dn("menu_in"), v_S_29018(!0);
              break;
            case "endCatMode":
              v_Ae_27892.dn("menu_back"), v_S_29018(!1);
          }
          v_C_29021();
        }
      }
      async function v_I_29023() {
        sceneManager.ni(), sceneManager.ii(), v_g_29009.Ny = "ＵＭＩＧＵＲＩ", menuSystem.dt(), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v_b_29016(v_hi_27809), v___29000.e8(9), await renderer.C7(v_Ge_28204(30)), v_P_29024();
      }
      function v_P_29024() {
        sceneManager.ni(), sceneManager.ii(), renderer._i("nameEntry"), menuSystem.dt(), handshake.rm.om = v_g_29009.Ny, v_g_29009.Ee && v_g_29009.Ee(), v_g_29009.Ee = void 0;
      }
      return {
        ue: function (v_e_29098) {
          v_Le_28076([v_i_29099 => {
            languagePackages.it("tables/nameEntryTable.krtbl", function (v_t_29100) {
              null === v_t_29100 ? v_e_29098() : ((v_m_29010 = new v_ms_27995()).uf(v_t_29100), v_Me_28078(v_i_29099));
            });
          }, v_n_29101 => {
            languagePackages.it("ui/nameEntry.rsb", function (v_t_29102) {
              v_t_29102 ? (v_t_29102 = new v_Dl_28181(v_t_29102), renderer.nt(v_t_29102.rt(renderer.p5()), v_t_29103 => {
                v___29000 = v_t_29103, v_h_29001 = v_t_29103.lt.yk(23), v_r_29002 = v_t_29103.lt.yk(22), v_d_29003 = v_t_29103.lt.yk(25), v_v_29004.Oi = v_t_29103.lt.yk(18), v_v_29004.Ji = v_t_29103.lt.yk(20), v_v_29004.wn = v_t_29103.lt.yk(28), v_v_29004.pn = v_t_29103.lt.yk(27), v_s_29005 = v_t_29103.lt.yk(36), v_a_29006 = v_t_29103.lt.yk(29);
                var v_i_29104 = v_t_29103.lt.yk(86);
                for (let v_t_29106 = 0; v_t_29106 < v_i_29104.We.length; ++v_t_29106) v_i_29104.We[v_t_29106].Be = !1, v_w_29007[v_i_29104.We[v_t_29106].ct] = v_i_29104.We[v_t_29106];
                for (let v_t_29107 = 0; v_t_29107 < 9; ++v_t_29107) {
                  var v_e_29105 = v_w_29007.catPanel.Ve(!0);
                  v_e_29105.Te = 0, v_e_29105.Qt = 0, v_e_29105.We[1].Nd = 4 === v_t_29107, v_c_29008.push(v_e_29105), v_r_29002.Ze(v_e_29105);
                }
                v_Me_28078(v_n_29101);
              })) : v_e_29098();
            });
          }, v_t_29108 => {
            v_Fe_28101(v_e_29098);
          }]);
        },
        T0: function (v_t_29109) {
          v_Le_28076([v_i_29110 => {
            (v_g_29009 = new v_e_28999()).Gi = !0, v_g_29009.Ee = v_t_29109, v_a_29006.Be = !1, v___29000.Jt = !1, renderer.ut("nameEntry", v___29000, 50, v_t_29111 => {
              v_Me_28078(v_i_29110);
            });
          }, async v_t_29112 => {
            v_j1_27909.ti(), menuSystem.dt(), v___29000.e8(5), v___29000.e8(1), v___29000.e8(rv.nameEntry_seq_sceneHide);
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
            for (const v_c_29121 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["select", "Select", 6, 4, v_oi_27794, !1, "enter"], ["backspace", "BackSpace", 10, 2, v_X0_27795, !1, ""], ["exit", "Exit", 12, 2, v_si_27792, !1, ""], ["startCatMode", "ChangeCategory", 14, 2, v_li_27796, !1, ""], ["endCatMode", "OkBack", 14, 2, v_W0_27791, !1, ""]]) menuSystem.vt(v_c_29121[0], v_c_29121[1], v_c_29121[2], v_c_29121[3], v_c_29121[4], v_c_29121[5], !1, !1, v_c_29121[6], function (v_t_29122, v_i_29123) {
              "down" === v_t_29122 && v_T_29022(this.Ae, v_i_29123);
            });
            menuSystem.yv(), menuSystem.T9(v_Ge_28204(24)), v_S_29018(!1, !0);
            for (let v_t_29124 = 0; v_t_29124 < v_p_29012()[v_g_29009.ji].Bi.length; ++v_t_29124) v_p_29012()[v_g_29009.ji].Bi[v_t_29124].ze.nn();
            v_b_29016(v_di_27810), v_b_29016(v_wi_27814), v_y_29017(), v_C_29021(), v_x_29020(), v___29000.e8(0), v_v_29004.wn.Be = !1, v_v_29004.pn.Be = !1, v_v_29004.Oi.Be = !1, v___29000.Jt = !0, renderer.W6(function () {
              v_O1_27910.ti("NameEntry"), v_v_29004.wn.Be = !0, v_v_29004.pn.Be = !0, v_v_29004.Oi.Be = !0, sceneManager.ft(new v_M1_27898(v_I_29023, void 0)), sceneManager.ri(100), sceneManager.ti();
            }, v_Ge_28204(24));
          }]);
        },
        Gi: () => v_g_29009.Gi
      };
    }(),
    v_X1_27914 = function () {
      const v_e_29125 = 6;
      function v_n_29126() {
        this.Gi = !1, this.zS = [0, 0, 0, 0, 0, 0], this.KS = 0, this.YS = null, this.qS = null;
      }
      let v_r_29127 = void 0,
        v_s_29128 = [],
        v_a_29129 = new v_n_29126();
      function v_o_29130(v_t_29136) {
        v_a_29129.KS = v_Qa_28089(v_t_29136, 0, v_e_29125 - 1);
        v_t_29136 = v_s_29128[v_a_29129.KS];
        v_r_29127.lt.yk(15).Te = v_t_29136.Te - 16, v_r_29127.e8(8);
      }
      function v_l_29131(v_i_29137, v_t_29138) {
        if (v_t_29138) for (let v_t_29139 = 0; v_t_29139 < v_e_29125; ++v_t_29139) v_s_29128[v_t_29139].Je = "numRoom" + v_a_29129.zS[v_t_29139];else {
          let v_t_29140 = v_a_29129.zS[v_a_29129.KS] + (v_i_29137 ? 1 : -1);
          v_t_29140 < 0 ? v_t_29140 = 9 : 9 < v_t_29140 && (v_t_29140 = 0), v_a_29129.zS[v_a_29129.KS] = v_t_29140, v_s_29128[v_a_29129.KS].Je = "numRoom" + v_t_29140, v_r_29127.e8(1 + v_a_29129.KS);
        }
      }
      function v_c_29132() {
        menuSystem.St("cancel");
      }
      function v_u_29133() {
        menuSystem.kt("left", v_a_29129.KS <= 0), menuSystem.kt("right", v_a_29129.KS >= v_e_29125 - 1), menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("changeDown", !0), menuSystem.wt("changeUp", !0), menuSystem.wt("cancel", !0), menuSystem.wt("enter", !0), menuSystem.Cv(!0);
      }
      function v_f_29134(v_t_29141) {
        switch (v_t_29141) {
          case "left":
            v_o_29130(v_a_29129.KS - 1);
            break;
          case "right":
            v_o_29130(v_a_29129.KS + 1);
            break;
          case "changeDown":
            v_l_29131(!1);
            break;
          case "changeUp":
            v_l_29131(!0);
            break;
          case "cancel":
            return void v_i_29135();
          case "enter":
            !async function () {
              menuSystem.It(!1), v_r_29127.lt.yk(30).Be = !1, v_r_29127.lt.yk(15).Be = !1;
              var v_t_29142 = !v_a_29129.YS || (await v_a_29129.YS(v_Pe_28064(v_a_29129.zS.join(""))));
              (v_t_29142 ? v_i_29135 : (v_r_29127.lt.yk(30).Be = !0, v_r_29127.lt.yk(15).Be = !0, v_u_29133))();
            }();
        }
        v_u_29133();
      }
      function v_i_29135() {
        sceneManager._t(), menuSystem.It(!1), v_r_29127.e8(7), v_r_29127.lt.yk(30).Be = !1, v_r_29127.lt.yk(15).Be = !1, renderer.W6(() => {
          menuSystem._t(), v_r_29127.i8(7), renderer._i("openCoop"), v_a_29129.Gi = !1, v_a_29129.qS && v_a_29129.qS(), v_a_29129.qS = void 0;
        }, 250);
      }
      return {
        ue: function (v_e_29143) {
          v_Le_28076([v_i_29144 => {
            languagePackages.it("ui/openCoop.rsb", function (v_t_29145) {
              v_t_29145 ? (v_t_29145 = new v_Dl_28181(v_t_29145), renderer.nt(v_t_29145.rt(renderer.p5()), v_t_29146 => {
                v_r_29127 = v_t_29146, v_s_29128.push(v_r_29127.lt.yk(19)), v_s_29128.push(v_r_29127.lt.yk(21)), v_s_29128.push(v_r_29127.lt.yk(23)), v_s_29128.push(v_r_29127.lt.yk(25)), v_s_29128.push(v_r_29127.lt.yk(27)), v_s_29128.push(v_r_29127.lt.yk(29)), v_Me_28078(v_i_29144);
              })) : v_e_29143();
            });
          }, v_t_29147 => {
            v_Fe_28101(v_e_29143);
          }]);
        },
        T0: async function (v_t_29148, v_i_29149) {
          (v_a_29129 = new v_n_29126()).Gi = !0, v_a_29129.YS = v_t_29148, v_a_29129.qS = v_i_29149, v_r_29127.Jt = !1, await new Promise(v_t_29150 => renderer.ut("openCoop", v_r_29127, 60, v_t_29150)), v_r_29127.lt.yk(30).Be = !0, v_r_29127.lt.yk(15).Be = !0, v_o_29130(0), v_l_29131(!1, !0), menuSystem.ft();
          for (const v_e_29151 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["changeDown", "ChangeMinus", 6, 2, v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, v_X0_27795, !0, "up"], ["cancel", "Cancel", 12, 2, v_si_27792, !1, ""], ["enter", "Enter", 14, 2, v_W0_27791, !1, "enter"]]) menuSystem.vt(v_e_29151[0], v_e_29151[1], v_e_29151[2], v_e_29151[3], v_e_29151[4], v_e_29151[5], !1, !1, v_e_29151[6], function (v_t_29152, v_i_29153) {
            "down" === v_t_29152 && v_f_29134(this.Ae);
          });
          menuSystem.yv(), menuSystem.Ct(!0), v_r_29127.Jt = !0, v_r_29127.e8(0), sceneManager.ft(new v_M1_27898(v_c_29132, void 0)), await renderer.C7(v_Ge_28204(30)), menuSystem.Ct(!1), v_u_29133();
        },
        Gi: () => v_a_29129.Gi
      };
    }(),
    v_z1_27915 = 0,
    v_K1_27916 = 1,
    settingsStore = function () {
      function v_s_29154() {
        this.Gi = !1, this.zS = 0, this.ZS = !0, this.qS = null, this.$S = [0, 0, 0];
      }
      let v___29155 = void 0,
        v_a_29156 = [],
        v_o_29157 = [],
        v_h_29158 = new v_s_29154(),
        v_n_29159;
      function v_l_29160() {
        v_g_29168(v_z1_27915);
      }
      function v_c_29161() {
        sceneManager.VS() ? v_oe_27649.QS(65535) : v_oe_27649.QS(sceneManager.OS());
      }
      async function v_i_29170(v_t_29169) {
        var v_i_29170 = handshake.On.iI[v_t_29169 + v_bi_27819],
          v_e_29171 = v_Wr_27968.oI(v_i_29170);
        v_e_29171 && (await v_oe_27649.cI(v_i_29170, "")) === v_Ms_28009 && (v_n_29159 && (v_n_29159.UA = 0), v_i_29170 = (v_n_29159 = v___29155.NA(107, 1, 320 + 2 * v_t_29169 * 80 + 80, 0)).GA.We[0], v_sl_28151(v_t_29169 = v_o_29157[v_e_29171.lI].Ve(!0), v_e_29171), v_i_29170.tn(), v_i_29170.Ze(v_t_29169), v_i_29170.Be = !0, v___29155.e8(2 + v_e_29171.lI, v_i_29170), v_Ae_27892.dn("chat" + v_e_29171.lI));
      }
      function v_u_29163() {
        menuSystem.wt("next", v_oe_27649.tx && 0 < v_oe_27649.ix.size), menuSystem.wt("cancel", 0 === v_oe_27649.ix.size || !v_oe_27649.tx), menuSystem.wt("changeDisplay", !0), menuSystem.wt("chat0", !0), menuSystem.wt("chat1", !0), menuSystem.wt("chat2", !0), menuSystem.wt("chat3", !0), menuSystem.Cv(!0);
      }
      async function v_f_29164(v_t_29172) {
        switch (v_t_29172) {
          case "next":
            return void (v_oe_27649.tx && (await new Promise(v_t_29173 => v_Te_27911.Ai(v_Ue_28209("copCloseInviteDialog"), v_G0_27772, 0, v_t_29173))) === v_H0_27781 && v_g_29168(v_z1_27915));
          case "cancel":
            return void ((await new Promise(v_t_29174 => v_Te_27911.Ai(v_oe_27649.tx ? v_Ue_28209("copCancelInvite") : v_Ue_28209("copCancelJoin"), v_G0_27772, 0, v_t_29174))) === v_H0_27781 && v_g_29168(v_K1_27916));
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
        v___29155.lt.yk(15).Wt = v_h_29158.ZS ? v_Xa_28081(v_h_29158.zS.toString(), 6, "0") : "AAAAAA";
      }
      function v_v_29166(v_t_29175) {
        let v_u_29176 = [34, 57, 80],
          v_f_29177 = [!1, !1, !1];
        for (let v_t_29179 = 0; v_t_29179 < 3; ++v_t_29179) v___29155.lt.yk(v_u_29176[v_t_29179]).Be = !1;
        if (!v_t_29175) {
          let v_c_29180 = 0;
          for (v_oe_27649.ix.forEach((v_t_29181, v_i_29182) => {
            var v_e_29183, v_n_29184, v_r_29185, v_s_29186, v_a_29187, v_o_29188, v_l_29189;
            v_t_29181.nx === v_oe_27649.sx() || 3 <= v_c_29180 || (v_a_29187 = v___29155.lt.yk(v_u_29176[v_c_29180]), v_e_29183 = v_a_29187.ot("playerInfo"), v_a_29187.Be = !0, v_f_29177[v_c_29180] = v_h_29158.$S[v_c_29180] !== v_t_29181.nx, v_h_29158.$S[v_c_29180] = v_t_29181.nx, v_a_29187 = v_t_29181, (v_l_29189 = v_e_29183).ot("guestTitleText").Wt = v_a_29187.ox, v_l_29189.ot("guestTitlePlate").Je = "title" + v_ot_27785[v_a_29187.lx], v_l_29189.ot("guestPlayerName").Wt = v_a_29187.om, v_l_29189.ot("guestChara").zt = !0, v_l_29189.ot("guestChara").Xt = v_a_29187.ux, v_a_29187 = v_a_29187.lm, v_n_29184 = "" + mathFloor(v_a_29187 / 100), v_r_29185 = v_Xa_28081("" + v_a_29187 % 100, 2, "0"), v_s_29186 = ratingColorName(v_a_29187), v_a_29187 = ratingColorRgba(v_a_29187), v_o_29188 = v_l_29189.ot("guestRatingText"), v_l_29189 = v_l_29189.ot("guestRatingLabel"), v_o_29188.Wt = v_n_29184 + "P" + v_r_29185, v_o_29188.Ak = "rating" + v_s_29186, v_o_29188.Qe(v_a_29187[0], v_a_29187[1], v_a_29187[2], v_a_29187[3]), v_l_29189.Je = "numRating" + v_s_29186 + "Rating", v_l_29189.Qe(v_a_29187[0], v_a_29187[1], v_a_29187[2], v_a_29187[3]), v_e_29183.ot("guestConnecting").Be = !v_oe_27649.uI(v_t_29181.nx), ++v_c_29180);
          }); v_c_29180 < 3; ++v_c_29180) v_h_29158.$S[v_c_29180] = 0;
          for (let v_t_29190 = 0; v_t_29190 < 3; ++v_t_29190) {
            var v_i_29178;
            v_f_29177[v_t_29190] && (v_i_29178 = v___29155.lt.yk(v_u_29176[v_t_29190]), v___29155.e8(11, v_i_29178));
          }
        }
      }
      function v_w_29167(v_t_29191, v_i_29192) {
        var v_e_29193, v_n_29194, v_r_29195, v_s_29196;
        v_t_29191 === v_js_28019 ? (v_v_29166(), v_u_29163(), 4 <= v_oe_27649.ix.size && v_g_29168(v_z1_27915)) : v_t_29191 === v_sa_28036 ? (v_v_29166(), v_u_29163()) : v_t_29191 === v_aa_28037 ? v_v_29166() : v_t_29191 === v_ia_28032 ? 0 <= (v_e_29193 = v_h_29158.$S.findIndex(v_t_29197 => v_t_29197 === v_i_29192.nx)) && (v_n_29194 = v_Wr_27968.oI(v_i_29192.fI)) && v_o_29157[v_n_29194.lI] && (v_r_29195 = v_a_29156[v_e_29193], v_sl_28151(v_s_29196 = v_o_29157[v_n_29194.lI].Ve(!0), v_n_29194), v_r_29195.tn(), v_r_29195.Ze(v_s_29196), v_r_29195.Be = !0, v___29155.e8(2 + v_n_29194.lI, v_a_29156[v_e_29193]), v_Ae_27892.dn("chat" + v_n_29194.lI)) : v_t_29191 !== v_$s_28029 || v_oe_27649.tx || (65535 === v_oe_27649._x ? v_g_29168(v_z1_27915) : sceneManager.JS(v_oe_27649._x));
      }
      async function v_g_29168(v_t_29198) {
        let v_i_29199 = v_t_29198;
        if (v_oe_27649.hx(v_w_29167), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_Te_27911.Li(), audioFontHub.XS(), v_i_29199 === v_z1_27915) if (v_oe_27649.ix.size) {
          for (v_oe_27649.Gi() && (await v_oe_27649.QS(65535), v_oe_27649.ix.size >= (v_oe_27649.tx ? 3 : 4) ? await new Promise(v_t_29200 => v_Te_27911.Ai(v_Ue_28209("copClosedInviteByMemberLimit"), v_ei_27773, 2e3, v_t_29200)) : v_oe_27649.tx || (await new Promise(v_t_29201 => v_Te_27911.Ai(v_Ue_28209("copClosedInviteByHost"), v_ei_27773, 2e3, v_t_29201)))), v_V1_27912.T0(500);;) {
            let v_e_29202 = !1;
            if (v_oe_27649.ix.forEach((v_t_29203, v_i_29204) => {
              v_t_29203.nx === v_oe_27649.sx() || v_oe_27649.uI(v_t_29203.nx) || (v_e_29202 = !0);
            }), !v_e_29202) break;
            await renderer.C7(v_Ge_28204(30));
          }
          v_V1_27912.XS(), await renderer.C7(v_Ge_28204(30)), v_V1_27912.T0(500), await v_oe_27649.tP(v_pa_28050), await v_oe_27649.iP(v_pa_28050), v_V1_27912.XS();
        } else v_i_29199 = v_K1_27916, await new Promise(v_t_29205 => v_Te_27911.Ai(v_Ue_28209("copClosedModeByNoGuests"), v_ei_27773 | v_ri_27776, 2e3, v_t_29205));
        v_Ae_27892.DI("coop_lobby_bgm", 50), v___29155.e8(10), v_n_29159 && (v_n_29159.UA = 0), renderer.W6(() => {
          menuSystem._t();
          for (const v_t_29206 of v_a_29156) v_t_29206.Be = !1;
          v___29155.i8(10), renderer._i("coopLobby"), v_h_29158.Gi = !1, v_h_29158.qS && v_h_29158.qS(v_i_29199), v_h_29158.qS = void 0;
        }, 250);
      }
      return {
        ue: function (v_e_29207) {
          v_Le_28076([v_i_29208 => {
            languagePackages.it("ui/coopLobby.rsb", function (v_t_29209) {
              v_t_29209 ? (v_t_29209 = new v_Dl_28181(v_t_29209), renderer.nt(v_t_29209.rt(renderer.p5()), v_t_29210 => {
                v___29155 = v_t_29210, v_a_29156 = [v___29155.lt.yk(103), v___29155.lt.yk(104), v___29155.lt.yk(105)], v_o_29157 = [v___29155.lt.yk(109), v___29155.lt.yk(113), v___29155.lt.yk(117), v___29155.lt.yk(121), v___29155.lt.yk(126), v___29155.lt.yk(130), v___29155.lt.yk(134), v___29155.lt.yk(138)], v_Me_28078(v_i_29208);
              })) : v_e_29207();
            });
          }, v_t_29211 => {
            v_Fe_28101(v_e_29207);
          }]);
        },
        T0: async function (v_t_29212, v_i_29213) {
          var v_e_29214 = await v_oe_27649.QS(100);
          if (65535 === v_e_29214) v_V1_27912.T0(500), await v_oe_27649.tP(v_pa_28050), await v_oe_27649.iP(v_pa_28050), v_V1_27912.XS(), v_i_29213 && v_i_29213(v_z1_27915);else {
            sceneManager.ni(), sceneManager.ii(), sceneManager.ei(), (v_h_29158 = new v_s_29154()).Gi = !0, v_h_29158.zS = v_t_29212, v_h_29158.qS = v_i_29213, v_h_29158.ZS = !1;
            for (const v_n_29215 of v_a_29156) v_n_29215.Be = !1;
            v___29155.Jt = !1, await new Promise(v_t_29216 => renderer.ut("coopLobby", v___29155, 60, v_t_29216)), v_oe_27649.vx(v_w_29167), v_d_29165(), v_v_29166(!0), menuSystem.ft();
            for (const v_r_29217 of [["changeDisplay", "ChangeDisplay", 12, 2, v_X0_27795, !1, ""], ["next", "Skip", 14, 2, v_W0_27791, !1, ""], ["cancel", "Cancel", 14, 2, v_si_27792, !1, ""]]) menuSystem.vt(v_r_29217[0], v_r_29217[1], v_r_29217[2], v_r_29217[3], v_r_29217[4], v_r_29217[5], !1, !1, v_r_29217[6], function (v_t_29218, v_i_29219) {
              "down" === v_t_29218 && v_f_29164(this.Ae);
            });
            for (let v_t_29220 = 0; v_t_29220 < 4; ++v_t_29220) menuSystem.aI("chat" + v_t_29220, handshake.On.iI[v_t_29220 + v_bi_27819], 2 * v_t_29220, !1, !1, function (v_t_29221, v_i_29222) {
              "down" === v_t_29221 && v_f_29164(this.Ae);
            });
            menuSystem.yv(), menuSystem.Ct(!0), v___29155.Jt = !0, v___29155.e8(0), sceneManager.ft(new v_M1_27898(v_l_29160, v_c_29161)), sceneManager.ri(null === v_e_29214 ? 100 : v_e_29214), sceneManager.ti(), await renderer.C7(v_Ge_28204(30)), menuSystem.Ct(!1), v_Ae_27892.EI("coop_lobby_bgm", 50, .75), audioFontHub.T0(), v_v_29166(), v_u_29163();
          }
        },
        Gi: () => v_h_29158.Gi
      };
    }(),
    audioFontHub = function () {
      function v_e_29238(v_t_29236, v_i_29237, v_e_29238, v_n_29239) {
        this.tL = v_t_29236, this.nx = v_i_29237, this.iL = v_e_29238, this.Wt = v_n_29239, this.hL = null;
      }
      function v_t_29224() {
        this.Gi = !1, this.eL = !1, this.nL = !1, this.rL = !1, this.sL = 0, this.aL = 0, this.dL = 0, this.oL = [];
      }
      let v_c_29225 = void 0,
        v_o_29226 = new v_t_29224(),
        v_n_29227 = win.createElement("input");
      function v_r_29228(v_t_29240) {
        v_c_29225 && (v_c_29225.lt.yk(17).Be = !v_n_29227.value.length);
      }
      async function v_i_29229(v_t_29241) {
        v_o_29226.Gi && "f3" === v_t_29241 && (await renderer.C7(v_Ge_28204(1)), v_u_29233(!v_o_29226.eL));
      }
      function v_s_29230(v_t_29242) {
        var v_i_29243;
        80 <= v_o_29226.oL.length && (v_i_29243 = v_o_29226.oL.shift()).hL && v_c_29225.lt.yk(11).Ke(v_i_29243.hL), v_t_29242.hL = function (v_t_29244) {
          var v_i_29245 = v_c_29225.lt.yk(11),
            v_e_29246 = v_c_29225.lt.yk(24),
            v_n_29247 = v_c_29225.lt.yk(33),
            v_r_29248 = v_c_29225.lt.yk(32),
            v_s_29249 = v_c_29225.Td[v_r_29248.jd];
          if (renderer.Yt.Dh.B3(), !v_s_29249) return null;
          renderer.Yt.Dh.P3(600), renderer.Yt.Dh.D3(600), renderer.Yt.Dh.N3(v_r_29248.w_), renderer.Yt.Dh.H3(v_r_29248.F_), renderer.Yt.Dh.U3(v_r_29248.B_, v_r_29248.M_);
          var v_a_29250 = v_t_29244.nx === v_oe_27649.sx(),
            v_n_29247 = (v_a_29250 ? v_n_29247 : v_e_29246).Ve(!0),
            v_e_29246 = v_n_29247.ot("chatItemBody"),
            v_o_29251 = v_n_29247.ot("chatItemBodyBg"),
            v_l_29252 = v_n_29247.ot("chatItemBodyText");
          v_n_29247.ot("chatItemInfo").Wt = v_a_29250 ? v_sc_28205(v_t_29244.iL) + " - " + v_f_29234(v_t_29244.nx) : v_f_29234(v_t_29244.nx) + " - " + v_sc_28205(v_t_29244.iL);
          v_n_29247.ot("chatItemIcon").zt = !0, v_n_29247.ot("chatItemIcon").Xt = function (v_t_29253) {
            if (v_t_29253 === v_oe_27649.sx()) return (v_i_29254 = v_Lr_27953()) ? "chara:" + v_i_29254.dC + ":0:" + v_i_29254.Q1.C0 : "";
            var v_i_29254 = v_oe_27649.ix.get(v_t_29253);
            return v_i_29254 ? v_i_29254.ux : "";
          }(v_t_29244.nx), v_s_29249.X3(v_t_29244.Wt, v_r_29248.Vd, v_r_29248.Od, v_r_29248.Tn), v_s_29249.Z3(), v_l_29252.Wt = v_t_29244.Wt, v_l_29252.Le = mathCeil(v_s_29249.z_), v_l_29252.G0 = mathCeil(v_s_29249.Z_), v_o_29251.Le = v_l_29252.Le + 30, v_o_29251.G0 = v_l_29252.G0 + 36, v_a_29250 && (v_e_29246.Te = 816 - v_o_29251.Le);
          return v_n_29247.G0 = v_o_29251.G0 + 28, v_n_29247.Te = 20, v_n_29247.Qt = v_i_29245.G0, v_i_29245.Ze(v_n_29247), v_n_29247.$e(0, 0), v_n_29247;
        }(v_t_29242), v_o_29226.oL.push(v_t_29242), v_o_29226.dL = 0, v_o_29226.rL = !v_o_29226.Gi, v_o_29226.Gi && (v_o_29226.eL ? (v_o_29226.sL = v_t_29242.tL, v_a_29232()) : v_l_29231(!0));
      }
      function v_l_29231(v_t_29255) {
        if (v_c_29225.lt.yk(19).Be = v_t_29255) {
          clearTimeout(v_o_29226.aL), v_o_29226.aL = v_uo_28102(() => {
            v_l_29231(!1);
          }, 4e3);
          let v_i_29258 = v_o_29226.oL.length,
            v_e_29259 = 0;
          for (let v_t_29262 = v_o_29226.oL.length - 1; 0 <= v_t_29262 && (v_o_29226.oL[v_t_29262].tL <= v_o_29226.sL || v_o_29226.oL[v_t_29262].nx === v_oe_27649.sx() || (v_i_29258 = v_t_29262, !(5 <= ++v_e_29259))); --v_t_29262);
          0 === v_e_29259 && v_l_29231(!1);
          let v_n_29260 = "",
            v_r_29261 = !0;
          for (let v_t_29263 = v_i_29258; v_t_29263 < v_o_29226.oL.length; ++v_t_29263) {
            var v_s_29256 = v_o_29226.oL[v_t_29263];
            v_s_29256.tL <= v_o_29226.sL || v_s_29256.nx === v_oe_27649.sx() || (v_r_29261 || (v_n_29260 += "\n"), v_n_29260 += `<#c:777>[${v_f_29234(v_s_29256.nx)}]<#r> ` + v_s_29256.Wt, v_r_29261 = !1);
          }
          var v_t_29255 = v_c_29225.lt.yk(22),
            v_a_29257 = (v_t_29255.Tn || (v_t_29255.Tn = new v_Bo_28128()), v_t_29255.Wt = v_t_29255.Tn.An(v_n_29260), 23 * v_e_29259 + 20);
          v_t_29255.G0 = v_a_29257 - 20, v_c_29225.lt.yk(20).G0 = v_a_29257, v_c_29225.lt.yk(21).G0 = v_a_29257, v_c_29225.lt.yk(19).G0 = v_a_29257, v_c_29225.lt.yk(19).Qt = 1010 - v_a_29257;
        } else clearTimeout(v_o_29226.aL), v_o_29226.aL = 0;
      }
      function v_a_29270() {
        let v_i_29264 = 0;
        var v_e_29265 = v_c_29225.lt.yk(11);
        for (let v_t_29271 = v_o_29226.oL.length - 1; 0 <= v_t_29271; --v_t_29271) {
          var v_n_29266 = v_o_29226.oL[v_t_29271];
          v_i_29264 += v_n_29266.hL.G0 - 8;
        }
        var v_t_29267 = v_i_29264 - v_e_29265.G0 + 20;
        v_o_29226.dL < 0 || v_e_29265.G0 >= v_i_29264 ? v_o_29226.dL = 0 : v_e_29265.G0 < v_i_29264 && v_o_29226.dL >= v_t_29267 && (v_o_29226.dL = v_t_29267);
        let v_r_29268 = v_o_29226.dL;
        for (let v_t_29272 = v_o_29226.oL.length - 1; 0 <= v_t_29272; --v_t_29272) {
          var v_s_29269 = v_o_29226.oL[v_t_29272];
          v_s_29269.hL.We[0].Be = v_r_29268 > -v_e_29265.G0 - 100 && v_r_29268 <= v_s_29269.hL.G0 + 100, v_s_29269.hL.$e(0, v_r_29268 - v_s_29269.hL.G0), v_r_29268 -= v_s_29269.hL.G0 - 8;
        }
        var v_a_29270 = v_c_29225.lt.yk(13);
        v_a_29270.$e(0, 460 * (1 - v_o_29226.dL / v_t_29267) * (1 - v_e_29265.G0 / v_i_29264)), v_a_29270.ln(1, v_e_29265.G0 / v_i_29264), v_a_29270.Be = v_e_29265.G0 < v_i_29264;
      }
      function v_u_29233(v_t_29273, v_i_29274) {
        var v_e_29275;
        (v_o_29226.Gi && v_o_29226.eL !== v_t_29273 || v_i_29274) && (v_o_29226.eL !== v_t_29273 && v_c_29225.e8(v_t_29273 ? 1 : 0), v_o_29226.eL = v_t_29273, v_c_29225.lt.yk(3).Be = !0, menuSystem.Ct(v_t_29273), v_i_29274 = v_c_29225.lt.yk(3).Te, v_e_29275 = v_c_29225.lt.yk(3).Qt, v_i_29274 += v_c_29225.lt.yk(6).Te, v_e_29275 += v_c_29225.lt.yk(6).Qt, v_i_29274 += v_c_29225.lt.yk(15).Te, v_e_29275 += v_c_29225.lt.yk(15).Qt, v_n_29227.tabIndex = -1, v_n_29227.style.width = v_c_29225.lt.yk(15).Le + "px", v_n_29227.style.height = "48px", v_n_29227.style.display = v_t_29273 ? "block" : "none", v_n_29227.style.position = "absolute", v_n_29227.style.border = "none", v_n_29227.style.outline = "none", v_n_29227.style.background = "transparent", v_n_29227.style.font = "500 24px system-ui", v_n_29227.style.padding = "0 20px", v_n_29227.style.zIndex = "1000", v_n_29227.style.left = v_i_29274 + "px", v_n_29227.style.top = v_e_29275 + "px", v_t_29273 ? (v_a_29232(), v_l_29231(!1), v_r_29228(), v_y_27559.appendChild(v_n_29227), v_n_29227.focus(), v_o_29226.rL = !1, v_o_29226.oL.length && (v_o_29226.sL = v_o_29226.oL[v_o_29226.oL.length - 1].tL), sceneManager.ft(new v_M1_27898(() => {
          v_u_29233(!1, !0);
        }, void 0))) : (v_n_29227.blur(), v_y_27559.removeChild(v_n_29227), sceneManager._t()));
      }
      function v_f_29234(v_t_29276) {
        return v_t_29276 === v_oe_27649.sx() ? handshake.rm.om : (v_t_29276 = v_oe_27649.ix.get(v_t_29276)) ? v_t_29276.om : "null";
      }
      async function v___29235(v_t_29277) {
        v_t_29277 = v_t_29277.trim();
        if (!v_t_29277.length) return !1;
        v_n_29227.disabled = !0;
        v_t_29277 = await v_oe_27649.lL(v_t_29277.substring(0, 500));
        return v_n_29227.disabled = !1, v_n_29227.focus(), v_t_29277 === v_Ms_28009 && (v_n_29227.value = "", v_r_29228(), !0);
      }
      return v_n_29227.addEventListener("keydown", function (v_i_29278) {
        if (v_o_29226.eL) {
          let v_t_29279 = !1;
          "Enter" === v_i_29278.key ? (v___29235(v_n_29227.value), v_t_29279 = !0) : "ArrowUp" === v_i_29278.key ? (v_o_29226.dL += 40, v_a_29232(), v_t_29279 = !0) : "ArrowDown" === v_i_29278.key && (v_o_29226.dL -= 40, v_a_29232(), v_t_29279 = !0), v_t_29279 && v_i_29278.preventDefault();
        }
      }), v_n_29227.addEventListener("input", v_r_29228), {
        ue: function (v_e_29280) {
          v_Le_28076([v_i_29281 => {
            languagePackages.it("ui/textChat.rsb", function (v_t_29282) {
              v_t_29282 ? (v_t_29282 = new v_Dl_28181(v_t_29282), renderer.nt(v_t_29282.rt(renderer.p5()), v_t_29283 => {
                (v_c_29225 = v_t_29283).Jt = !1, v_Me_28078(v_i_29281);
              })) : v_e_29280();
            });
          }, v_t_29284 => {
            renderer.ut("sysTextChat", v_c_29225, 5010, () => {
              v_Fe_28101(v_e_29280);
            });
          }, v_t_29285 => {
            v_Fe_28101(v_e_29280);
          }]);
        },
        T0: function () {
          v_o_29226.Gi || (v_o_29226.Gi = !0, v_c_29225.Jt = !0, v_c_29225.lt.yk(3).Be = !1, v_l_29231(v_o_29226.rL), v_o_29226.rL = !1, inputModule.$I("textChat", v_i_29229));
        },
        XS: function () {
          v_o_29226.Gi && (v_u_29233(!1), v_l_29231(!1), v_c_29225.lt.yk(3).Be = !1, v_o_29226.Gi = !1, v_c_29225.Jt = !1, inputModule.ZI("textChat"));
        },
        B3: function () {
          v_c_29225.lt.yk(11).tn(), v_o_29226 = new v_t_29224();
        },
        cL: function (v_t_29286, v_i_29287) {
          v_t_29286 === v_ea_28033 && v_s_29230(new v_e_29223(v_i_29287.tL, v_i_29287.nx, v_i_29287.iL, v_i_29287.MI));
        },
        uL: v_u_29233,
        lL: v___29235
      };
    }(),
    v_Z1_27919 = (window.w = audioFontHub, function () {
      function v_r_29288() {
        this.Gi = !1, this.$A = !1, this.QA = 0, this.tS = !1;
      }
      let v_s_29289 = void 0,
        v_a_29290 = new v_r_29288();
      async function v_o_29291() {
        for (v_D_27646.C9(); v_a_29290.tS;) await renderer.C7(500);
        for (v_a_29290.tS = !0; v_a_29290.QA;) v_D_27646.C9(), await renderer.C7(500);
        v_a_29290.tS = !1;
      }
      async function v_l_29292() {
        for (v_s_29289.lt.yk(15).Be = !0, v_s_29289.lt.yk(30).Be = !1, menuSystem.wt("payment", !1), menuSystem.wt("balance", !0), menuSystem.kt("balance", !0), menuSystem.kt("payment", !0), await v_o_29291(), menuSystem.kt("balance", !1), menuSystem.kt("payment", !1), v_D_27646.eS(100), ++v_a_29290.QA; !v_a_29290.tS;) {
          var v_t_29295 = await v_D_27646.iS();
          v_t_29295.nS && (v_D_27646.rS(100), await renderer.C7(v_Ge_28204(30)), v_D_27646.sS(), v_t_29295.aS(), await renderer.C7(3e3), v_D_27646.eS(100)), await renderer.C7(v_Ge_28204(30));
        }
        --v_a_29290.QA, v_D_27646.oS();
      }
      function v_c_29293(v_t_29296) {
        switch (v_t_29296) {
          case "left":
          case "right":
            break;
          case "balance":
            !async function () {
              for (v_s_29289.lt.yk(15).Be = !1, v_s_29289.lt.yk(30).Be = !0, menuSystem.wt("payment", !0), menuSystem.wt("balance", !1), menuSystem.kt("balance", !0), menuSystem.kt("payment", !0), await v_o_29291(), menuSystem.kt("balance", !1), menuSystem.kt("payment", !1), v_D_27646.lS(), ++v_a_29290.QA; !v_a_29290.tS;) {
                var v_t_29297,
                  v_i_29298 = await v_D_27646.iS();
                v_i_29298.nS && (null !== (v_t_29297 = await v_i_29298.cS()) ? v_D_27646.lS(v_t_29297) : v_D_27646.sS(), v_i_29298.aS(), await renderer.C7(2e3), v_D_27646.lS()), await renderer.C7(v_Ge_28204(30));
              }
              --v_a_29290.QA, v_D_27646.oS();
            }();
            break;
          case "payment":
            v_l_29292();
            break;
          case "cancel":
            v_u_29294(), menuSystem.yt(!0);
        }
      }
      function v_u_29294() {
        v_a_29290.Gi && (v_a_29290.$A = !0);
      }
      return {
        ue: function (v_e_29299) {
          v_Le_28076([v_i_29300 => {
            languagePackages.it("ui/paymentModal.rsb", function (v_t_29301) {
              v_t_29301 ? (v_t_29301 = new v_Dl_28181(v_t_29301), renderer.nt(v_t_29301.rt(renderer.p5()), v_t_29302 => {
                v_s_29289 = v_t_29302, v_Me_28078(v_i_29300);
              })) : v_e_29299();
            });
          }, v_t_29303 => {
            v_Fe_28101(v_e_29299);
          }]);
        },
        qA: async function (v_t_29304) {
          if (v_a_29290.Gi || v_t_29304 < 1) return !1;
          if (v_R1_27896.XA(v_t_29304)) return !0;
          if (v_R1_27896.fP()) return !0;
          (v_a_29290 = new v_r_29288()).Gi = !0;
          let v_i_29305 = v_s_29289.Jt = !1;
          sceneManager.ft(new v_M1_27898(() => {
            v_s_29289.Jt ? menuSystem.St("cancel") : (v_u_29294(), sceneManager._t());
          }, void 0)), v_l_29292(), await new Promise(v_t_29307 => renderer.ut("paymentModal", v_s_29289, 200, v_t_29307)), v_s_29289.Jt = !0, v_s_29289.e8(2), menuSystem.ft();
          for (const v_n_29308 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["balance", "EMoneyBalance", 10, 2, v_X0_27795, !1, ""], ["payment", "EMoneyPayment", 10, 2, v_X0_27795, !1, ""], ["cancel", "Cancel", 14, 2, v_si_27792, !1, ""]]) menuSystem.vt(v_n_29308[0], v_n_29308[1], v_n_29308[2], v_n_29308[3], v_n_29308[4], v_n_29308[5], !1, !1, v_n_29308[6], function (v_t_29309, v_i_29310) {
            "down" === v_t_29309 && v_c_29293(this.Ae);
          });
          menuSystem.It(!0), menuSystem.wt("payment", !1), menuSystem.T9(v_Ge_28204(20));
          var v_e_29306 = v_R1_27896.KA();
          for (v_s_29289.lt.yk(11).Wt = (v_e_29306 * v_t_29304).toString(), v_s_29289.lt.yk(14).Wt = v_t_29304.toString(); !v_a_29290.$A;) {
            if (v_R1_27896.XA(v_t_29304)) {
              v_i_29305 = !0;
              break;
            }
            v_s_29289.lt.yk(9).Wt = (v_R1_27896.YA() + mathMin(v_R1_27896.ZA(), v_t_29304) * v_e_29306).toString(), await renderer.C7(250);
          }
          return v_i_29305 && (v_s_29289.lt.yk(9).Wt = (v_e_29306 * v_t_29304).toString()), menuSystem.Ct(!0), menuSystem.It(!1), await v_o_29291(), v_s_29289.e8(1), await renderer.C7(v_Ge_28204(30)), renderer._i("paymentModal"), menuSystem.Ct(!1), menuSystem._t(), v_a_29290.Gi = !1, sceneManager._t(), v_i_29305;
        },
        C9: v_u_29294,
        Gi: () => v_a_29290.Gi
      };
    }()),
    v_$1_27920 = function () {
      const v_d_29311 = 10,
        v_v_29312 = 11,
        v_w_29313 = 12,
        v_g_29314 = 13;
      function v_m_29315() {
        this.Ei = "", this.Fi = 0, this.Bi = [], this.Mi = 0, this.Ri = 0;
      }
      function v_p_29316() {
        this.ze = [null, null], this.Pi = 0, this.Di = !1, this.Ae = "";
      }
      function v_e_29317() {
        this.Gi = !1, this.ji = 0, this.Ni = 0, this.Hi = !1, this.Ui = !1, this.Vi = !1, this.Ee = void 0;
      }
      let v_o_29318 = void 0,
        v_c_29319 = void 0,
        v_u_29320 = void 0,
        v_r_29321 = void 0,
        v_f_29322 = {
          Oi: void 0,
          Ji: void 0,
          Wi: void 0,
          Ki: void 0,
          zi: void 0,
          Xi: void 0,
          Zi: void 0,
          Yi: void 0,
          $i: void 0,
          qi: void 0,
          Qi: void 0,
          en: void 0,
          BI: void 0,
          bk: void 0,
          Sk: void 0
        },
        v_k_29323 = {},
        v___29324 = [],
        v_b_29325 = [],
        v_h_29326 = new v_e_29317();
      function v_l_29327() {
        return v_h_29326.Ui || !!v_h_29326.Vi;
      }
      function v_y_29328(v_t_29340) {
        var v_i_29341,
          v_e_29342 = v_b_29325[v_h_29326.ji].Bi,
          v_t_29340 = mathMin(mathMax(v_t_29340, 0), v_e_29342.length - 1);
        v_t_29340 !== v_h_29326.Ni && (v_h_29326.Ui = !0, v_i_29341 = v_h_29326.Ni, v_h_29326.Ni = v_t_29340, v_C_29334(0, v_e_29342[v_i_29341], v_h_29326.Ni, v_e_29342[v_h_29326.Ni]), v_a_29331(v_ui_27806), v_o_29318.e8(10), renderer.W6(() => {
          v_h_29326.Ui = !1;
        }, 100));
      }
      function v_S_29329(v_t_29343, v_i_29344) {
        v_l_29327() || v_h_29326.ji === v_t_29343 || v_t_29343 < 0 || v_t_29343 >= v_b_29325.length || (v_h_29326.Ui = !0, v_h_29326.ji = v_t_29343, v_h_29326.Ni = 0, v_o_29318.e8(2), v_o_29318.e8(1), v_n_29332(v_i_29344), renderer.W6(function () {
          var v_e_29345 = v_b_29325[v_h_29326.ji].Bi;
          for (let v_i_29346 = 0; v_i_29346 < v_e_29345.length; ++v_i_29346) for (let v_t_29347 = 0; v_t_29347 < 2; ++v_t_29347) v_e_29345[v_i_29346].ze[v_t_29347].Be = !1;
          v_a_29331(v_gi_27815), v_o_29318.e8(3), v_C_29334(0, void 0, v_h_29326.Ni, v_e_29345[v_h_29326.Ni]), renderer.W6(function () {
            v_h_29326.Ui = !1;
          }, v_Ge_28204(6));
        }, v_Ge_28204(6)));
      }
      function v_A_29330(v_r_29348, v_s_29349) {
        if (!v_l_29327()) {
          let v_t_29350 = null,
            v_i_29351 = 0,
            v_e_29352 = v_b_29325[v_h_29326.ji].Bi,
            v_n_29353 = v_h_29326.Ni;
          if (v_r_29348) {
            for (v_i_29351 = v_h_29326.Ni + 1; v_i_29351 < v_e_29352.length; ++v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
              v_t_29350 = v_i_29351;
              break;
            }
            if (null === v_t_29350) for (v_i_29351 = 0; v_i_29351 < v_h_29326.Ni; ++v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
              v_t_29350 = v_i_29351;
              break;
            }
          } else {
            for (v_i_29351 = v_h_29326.Ni - 1; 0 <= v_i_29351; --v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
              v_t_29350 = v_i_29351;
              break;
            }
            if (null === v_t_29350) for (v_i_29351 = v_e_29352.length - 1; v_i_29351 > v_h_29326.Ni; --v_i_29351) if (v_e_29352[v_i_29351].Di || v_s_29349) {
              v_t_29350 = v_i_29351;
              break;
            }
          }
          null !== v_t_29350 && (v_h_29326.Ui = !0, v_a_29331(v_r_29348 ? v_ft_27812 : v_ut_27811), v_o_29318.e8(9), renderer.W6(() => {
            for (let v_i_29354 = 0; v_i_29354 < v_e_29352.length; ++v_i_29354) for (let v_t_29355 = 0; v_t_29355 < 2; ++v_t_29355) v_e_29352[v_i_29354].ze[v_t_29355].Be = !1;
            v_h_29326.Ni = v_t_29350, v_a_29331(v_r_29348 ? v_ut_27811 : v_ft_27812), renderer.W6(() => {
              v_a_29331(), v_o_29318.e8(8), v_o_29318.e8(10), v_C_29334(v_n_29353, v_e_29352[v_n_29353], v_h_29326.Ni, v_e_29352[v_h_29326.Ni]), v_T_29335(), renderer.W6(() => {
                v_h_29326.Ui = !1;
              }, 167);
            }, 167);
          }, 167));
        }
      }
      function v_a_29362(v_t_29356) {
        v_c_29319.tn(), v_u_29320.tn();
        var v_e_29357,
          v_n_29358,
          v_r_29359 = v_b_29325[v_h_29326.ji].Bi;
        let v_s_29360 = 0;
        var v_i_29361,
          v_a_29362 = v_r_29359[v_h_29326.Ni].Pi,
          v_o_29363 = void 0 !== v_t_29356 && (v_t_29356 & v_ft_27812 || v_t_29356 & v_ut_27811);
        for (let v_i_29365 = -5; v_i_29365 < 6; ++v_i_29365) if (!((v_e_29357 = v_i_29365 + v_h_29326.Ni) < 0 || v_r_29359.length <= v_e_29357)) {
          0 === v_i_29365 ? v_s_29360 = 0 : (v_s_29360 = 100 * (v_r_29359[v_e_29357].Pi - v_a_29362), v_s_29360 += 12 * (0 < v_s_29360 ? 1 : -1)), v_o_29363 && (v_t_29356 & v_ft_27812 ? v_s_29360 -= 200 : v_s_29360 += 200);
          for (let v_t_29366 = 0; v_t_29366 < 2; ++v_t_29366) !1 === (v_n_29358 = v_r_29359[v_e_29357].ze[v_t_29366]).Be && v_n_29358.nn(), !v_o_29363 || -5 !== v_i_29365 && 5 !== v_i_29365 ? v_n_29358.Be = !0 : v_n_29358.Be = !1, (0 === v_i_29365 ? v_u_29320 : v_c_29319).Ze(v_n_29358), v_n_29358.rn(v_Vo_28136, v_jo_28134, v_o_29363 ? 10 : 6, 0), v_n_29358.rn(v_Wo_28137, v_jo_28134, v_o_29363 ? 10 : 6, 0), v_n_29358.$e(.577350269 * v_s_29360, v_s_29360);
          0 !== v_i_29365 || v_o_29363 ? (v_r_29359[v_e_29357].ze[0].rn(v_Ko_28140, v_Oo_28135, 6, 0), v_r_29359[v_e_29357].ze[0].an(0), v_r_29359[v_e_29357].ze[1].rn(v_Ko_28140, v_Oo_28135, 3, 6), v_r_29359[v_e_29357].ze[1].an(1)) : (v_r_29359[v_e_29357].ze[0].rn(v_Ko_28140, v_Oo_28135, 3, 6), v_r_29359[v_e_29357].ze[0].an(1), v_r_29359[v_e_29357].ze[1].rn(v_Ko_28140, v_Oo_28135, 6, 0), v_r_29359[v_e_29357].ze[1].an(0));
        }
        var v_l_29364 = v_b_29325[v_h_29326.ji].Bi;
        0 < v_l_29364.length ? (v_f_29322.Wi.Wt = mathMin(mathMax(v_h_29326.Ni + 1, 1), 9999).toString(), v_f_29322.Ki.Wt = "S" + mathMin(mathMax(v_l_29364.length, 0), 9999).toString()) : (v_f_29322.Wi.Wt = "0", v_f_29322.Ki.Wt = "S0"), 0 < v_l_29364.length ? (v_i_29361 = mathMax(1 / v_l_29364.length, .04), v_f_29322.zi.Be = !0, v_f_29322.zi.Oe[0] = v_i_29361, 1 === v_l_29364.length ? v_f_29322.zi.on[0] = 0 : v_f_29322.zi.on[0] = v_h_29326.Ni / (v_l_29364.length - 1) * (1 - v_i_29361) * 690) : v_f_29322.zi.Be = !1;
      }
      function v_n_29370(v_i_29367, v_t_29368) {
        var v_e_29369,
          v_n_29370 = void 0 === v_t_29368 ? v_h_29326.ji : v_t_29368,
          v_r_29371 = void 0 !== v_i_29367 && v_i_29367 & v_vi_27813 ? 5 : 10;
        let v_s_29372 = 0,
          v_a_29373 = 0;
        var v_o_29374,
          v_l_29375 = void 0 !== v_i_29367 && (v_i_29367 & v_fi_27807 || v_i_29367 & v__i_27808);
        for (let v_t_29376 = -4; v_t_29376 < 5; ++v_t_29376) v_t_29376 + v_n_29370 < 0 || v_t_29376 + v_n_29370 >= v_b_29325.length ? v___29324[v_t_29376 + 4].Be = !1 : (v_e_29369 = v_qa_28086(v_t_29376 + v_n_29370, v_b_29325.length), 0 === v_t_29376 ? v_s_29372 = 0 : (v_s_29372 = 250 * v_t_29376, v_s_29372 += 178 * (0 < v_s_29372 ? 1 : -1)), v_l_29375 && (0 === (v_o_29374 = v_t_29376 + (v_i_29367 & v_fi_27807 ? -1 : 1)) ? v_a_29373 = 0 : (v_a_29373 = 250 * v_o_29374, v_a_29373 += 178 * (0 < v_a_29373 ? 1 : -1))), (v_o_29374 = v___29324[v_t_29376 + 4]).Be = !0, v_o_29374.We[0].Je = "catPanelCategory", v_o_29374.nn(), v_o_29374.rn(v_Xo_28138, v_jo_28134, v_r_29371, 0), v_o_29374.rn(v_zo_28139, v_jo_28134, v_r_29371, 0), v_o_29374.rn(v_Vo_28136, v_Ho_28132, v_r_29371, 0), v_l_29375 && (v_o_29374.$e(v_a_29373), v_t_29376 + (v_i_29367 & v_fi_27807 ? -1 : 1) === 0 ? v_o_29374.ln(1, 1) : v_o_29374.ln(.7, .7)), v_o_29374.Be = !0, v_o_29374.We[1].Wt = v_b_29325[v_e_29369].Ei, 0 === v_t_29376 && v_o_29374.Kt(), v_o_29374.$e(v_s_29372), 0 === v_t_29376 ? v_o_29374.ln(1, 1) : v_o_29374.ln(.7, .7));
      }
      function v_x_29333(v_t_29377, v_i_29378) {
        v_l_29327() && !v_i_29378 || (v_h_29326.Ui = !0, v_f_29322.Oi.Be = !0, v_f_29322.Ji.Be = !0, v_t_29377 ? v_h_29326.Hi === v_t_29377 || v_i_29378 ? (v_f_29322.Oi.Be = !1, v_o_29318.e8(4), v_h_29326.Ui = !1) : (v_o_29318.e8(5), renderer.W6(() => {
          v_f_29322.Oi.Be = !1, v_h_29326.Ui = !1, v_o_29318.e8(4);
        }, 26 / 60 * 1e3)) : v_h_29326.Hi === v_t_29377 || v_i_29378 ? (v_f_29322.Ji.Be = !1, v_o_29318.e8(4), v_h_29326.Ui = !1) : (v_o_29318.e8(6), renderer.W6(() => {
          v_f_29322.Ji.Be = !1, v_h_29326.Ui = !1, v_o_29318.e8(4);
        }, 26 / 60 * 1e3)), v_h_29326.Hi = v_t_29377);
      }
      function v_C_29334(v_t_29379, v_i_29380, v_e_29381, v_n_29382) {
        v_i_29380 && v_n_29382 && v_i_29380.ze[0] === v_n_29382.ze[0] || (v_i_29380 && (v_i_29380.ze[0].un = !0), v_n_29382 && (v_n_29382.ze[0].un = !1, v_n_29382.ze[0].Kt())), v_P_29338();
      }
      function v_T_29335() {
        var v_t_29383 = v_b_29325[v_h_29326.ji];
        if (v_h_29326.Hi ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.kt("left", v_h_29326.ji <= 0), menuSystem.kt("right", v_h_29326.ji >= v_b_29325.length - 1)) : (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", v_t_29383.Fi !== v_g_29314), menuSystem.wt("nextGroup", !0), menuSystem.wt("startCatMode", !0), menuSystem.wt("endCatMode", !1), menuSystem.wt("backMusicSelect", !0), menuSystem.wt("changeDown", v_t_29383.Fi === v_g_29314), menuSystem.wt("changeUp", v_t_29383.Fi === v_g_29314), menuSystem.kt("left", !1), menuSystem.kt("right", !1)), menuSystem.kt("enter", v_t_29383.Mi === v_h_29326.Ni), menuSystem.kt("nextGroup", v_t_29383.Ri <= 1), v_t_29383.Fi === v_g_29314) {
          let v_i_29385 = v_t_29383.Bi[v_h_29326.Ni].Ae;
          var v_t_29383 = v_i_29385 >> 2,
            v_t_29383 = v_Wr_27968.NI(v_t_29383),
            v_e_29384 = v_t_29383.findIndex(v_t_29386 => v_t_29386 === handshake.On.iI[v_i_29385]);
          menuSystem.kt("changeUp", v_e_29384 >= v_t_29383.length - 1), menuSystem.kt("changeDown", v_e_29384 <= 0);
        }
        menuSystem.Cv(!0);
      }
      function v_s_29336() {
        v_l_29327() || (v_h_29326.Hi ? menuSystem.St("endCatMode") : menuSystem.St("backMusicSelect"));
      }
      function v_I_29337(v_t_29387) {
        if (!v_l_29327()) {
          var v_i_29388 = v_b_29325[v_h_29326.ji],
            v_e_29389 = v_i_29388.Bi;
          switch (v_t_29387) {
            case "left":
              v_h_29326.Hi && 0 <= v_h_29326.ji ? (v_Ae_27892.dn("move_cursor"), v_S_29329(v_h_29326.ji - 1, v_fi_27807)) : (v_Ae_27892.dn("move_cursor"), v_h_29326.Ni <= 0 ? v_A_29330(!1, !0) : v_y_29328(v_h_29326.Ni - 1));
              break;
            case "right":
              v_h_29326.Hi && v_h_29326.ji < v_b_29325.length ? (v_Ae_27892.dn("move_cursor"), v_S_29329(v_h_29326.ji + 1, v__i_27808)) : (v_Ae_27892.dn("move_cursor"), v_h_29326.Ni >= v_e_29389.length - 1 ? v_A_29330(!0, !0) : v_y_29328(v_h_29326.Ni + 1));
              break;
            case "nextGroup":
              v_Ae_27892.dn("move_cursor"), v_A_29330(!0);
              break;
            case "startCatMode":
              v_Ae_27892.dn("menu_in"), v_x_29333(!0);
              break;
            case "endCatMode":
              v_Ae_27892.dn("menu_back"), v_x_29333(!1);
              break;
            case "enter":
              v_e_29389[v_i_29388.Mi].ze[0].ot("listItemBadgeSetBg").Be = !1, v_e_29389[v_i_29388.Mi].ze[1].ot("listItemBadgeSetBg").Be = !1, v_i_29388.Mi = v_h_29326.Ni, v_e_29389[v_h_29326.Ni].ze[0].ot("listItemBadgeSetBg").Be = !0, v_e_29389[v_h_29326.Ni].ze[1].ot("listItemBadgeSetBg").Be = !0, v_o_29318.e8(11, v_e_29389[v_h_29326.Ni].ze[0]);
              var v_n_29390 = v_i_29388.Fi,
                v_r_29391 = v_e_29389[v_h_29326.Ni];
              switch (v_n_29390) {
                case v_d_29311:
                  playerInfoBoard.H4(v_r_29391.Ae), handshake.On.$p = v_r_29391.Ae;
                  break;
                case v_v_29312:
                  playerInfoBoard.V4(v_r_29391.Ae), handshake.On.qp = v_r_29391.Ae;
                  break;
                case v_w_29313:
                  handshake.On.Qp = v_r_29391.Ae, v_h_29326.Vi = !0, menuSystem.Ct(!0), v_Or_27965._n(handshake.On.Qp, !0 === handshake.On.tm, function (v_t_29394) {
                    v_Or_27965.dn("scene_user_box_confirm"), menuSystem.Ct(!1), v_h_29326.Vi = !1;
                  });
              }
              v_Ae_27892.dn("set_skill");
              break;
            case "changeUp":
              if (v_Ae_27892.dn("change_value"), v_i_29388.Fi === v_g_29314) {
                let v_i_29395 = v_e_29389[v_h_29326.Ni].Ae;
                var v_n_29390 = v_i_29395 >> 2,
                  v_s_29392 = v_Wr_27968.NI(v_n_29390),
                  v_a_29393 = v_s_29392.findIndex(v_t_29396 => v_t_29396 === handshake.On.iI[v_i_29395]);
                v_a_29393 < v_s_29392.length - 1 && (handshake.On.iI[v_i_29395] = v_s_29392[v_a_29393 + 1], v_P_29338());
              }
              break;
            case "changeDown":
              if (v_Ae_27892.dn("change_value"), v_i_29388.Fi === v_g_29314) {
                let v_i_29397 = v_e_29389[v_h_29326.Ni].Ae;
                v_s_29392 = v_i_29397 >> 2, v_a_29393 = v_Wr_27968.NI(v_s_29392), v_s_29392 = v_a_29393.findIndex(v_t_29398 => v_t_29398 === handshake.On.iI[v_i_29397]);
                1 <= v_s_29392 && (handshake.On.iI[v_i_29397] = v_a_29393[v_s_29392 - 1], v_P_29338());
              }
              break;
            case "backMusicSelect":
              return v_Ae_27892.dn("menu_back"), void async function () {
                sceneManager._t(), menuSystem._t(), menuSystem.It(!1), v_o_29318.e8(7), await renderer.C7(250), v_o_29318.i8(7), renderer._i("userBox"), v_O1_27910.ii(), await v_Ns_28014.uA(), await v_fo_28103(v_Ge_28204(30)), await new Promise(v_t_29399 => v_Te_27911.Ai(v_Ue_28209("dataSaved"), v_ei_27773 | v_it_27778 | v_et_27779, 1500, v_t_29399)), await v_fo_28103(v_Ge_28204(30)), v_h_29326.Ee && v_h_29326.Ee(v_ii_27770);
              }();
          }
          v_T_29335();
        }
      }
      function v_P_29338() {
        let v_i_29400 = v_b_29325[v_h_29326.ji].Bi[v_h_29326.Ni];
        switch (v_b_29325[v_h_29326.ji].Fi) {
          case v_d_29311:
            v_f_29322.Yi.Be = !1, v_f_29322.Zi.Be = !1, v_f_29322.bk.Be = !1, v_f_29322.qi.Be = !0, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !1, v_f_29322.qi.Kt();
            var v_t_29401 = v_be_27857.Hp.find(v_t_29402 => v_t_29402.id === v_i_29400.Ae);
            v_t_29401 ? (v_f_29322.qi.We[0].Je = "title" + v_ot_27785[v_t_29401.rarity], v_f_29322.qi.We[1].Wt = v_t_29401.text, v_f_29322.$i.Wt = v_t_29401.desc) : (v_f_29322.qi.We[0].Je = "titleNormal", v_f_29322.qi.We[1].Wt = "Invalid", v_f_29322.$i.Wt = "Invalid");
            break;
          case v_v_29312:
            v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.bk.Be = !1, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !0, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !1;
            v_t_29401 = v_be_27857.Up.find(v_t_29403 => v_t_29403.id === v_i_29400.Ae);
            v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", v_h_29326.Vi = !0, v__o_28104("/nameplates/" + v_i_29400.Ae + "/image.png", function (v_t_29404) {
              var v_i_29405;
              v_h_29326.Vi = !1, v_t_29404 ? (v_t_29404 = glRuntime.Texture.fromImage(v_t_29404, {
                noFlip: !0
              }), v_i_29405 = "cache:userbox:nameplate", renderer.Yt.Zt[v_i_29405] && renderer.Yt.Zt[v_i_29405].free(), renderer.Yt.Zt[v_i_29405] = v_t_29404, v_f_29322.Qi.zt = !0, v_f_29322.Qi.Xt = v_i_29405) : (v_f_29322.Qi.Xt = "txDummyNameplate", v_f_29322.Qi.zt = !1);
            })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.Qi.Xt = "txDummyNameplate", v_f_29322.Qi.zt = !1);
            break;
          case v_w_29313:
            v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !0, v_f_29322.BI.Be = !1;
            v_t_29401 = v_be_27857.Vp.find(v_t_29406 => v_t_29406.id === v_i_29400.Ae);
            v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", "" === v_t_29401.notice ? v_f_29322.bk.Be = !1 : (v_f_29322.bk.Be = !0, v_f_29322.Sk.Wt = v_t_29401.notice), v_h_29326.Vi = !0, v__o_28104("/voices/" + v_i_29400.Ae + "/image.png", function (v_t_29407) {
              var v_i_29408;
              v_h_29326.Vi = !1, v_t_29407 ? (v_t_29407 = glRuntime.Texture.fromImage(v_t_29407, {
                noFlip: !0
              }), v_i_29408 = "cache:userbox:voice", renderer.Yt.Zt[v_i_29408] && renderer.Yt.Zt[v_i_29408].free(), renderer.Yt.Zt[v_i_29408] = v_t_29407, v_f_29322.en.zt = !0, v_f_29322.en.Xt = v_i_29408) : (v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1);
            })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1, v_f_29322.bk.Be = !1);
            break;
          case v_w_29313:
            v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !0, v_f_29322.BI.Be = !1;
            v_t_29401 = v_be_27857.Vp.find(v_t_29409 => v_t_29409.id === v_i_29400.Ae);
            v_t_29401 ? (v_f_29322.Yi.Wt = v_t_29401.text, v_f_29322.$i.Wt = "-", "" === v_t_29401.notice ? v_f_29322.bk.Be = !1 : (v_f_29322.bk.Be = !0, v_f_29322.Sk.Wt = v_t_29401.notice), v_h_29326.Vi = !0, v__o_28104("/voices/" + v_i_29400.Ae + "/image.png", function (v_t_29410) {
              var v_i_29411;
              v_h_29326.Vi = !1, v_t_29410 ? (v_t_29410 = glRuntime.Texture.fromImage(v_t_29410, {
                noFlip: !0
              }), v_i_29411 = "cache:userbox:voice", renderer.Yt.Zt[v_i_29411] && renderer.Yt.Zt[v_i_29411].free(), renderer.Yt.Zt[v_i_29411] = v_t_29410, v_f_29322.en.zt = !0, v_f_29322.en.Xt = v_i_29411) : (v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1);
            })) : (v_f_29322.Yi.Wt = "Invalid", v_f_29322.$i.Wt = "", v_f_29322.en.Xt = "txDummyVoice", v_f_29322.en.zt = !1, v_f_29322.bk.Be = !1);
            break;
          case v_g_29314:
            v_f_29322.Yi.Be = !0, v_f_29322.Zi.Be = !0, v_f_29322.qi.Be = !1, v_f_29322.Qi.Be = !1, v_f_29322.en.Be = !1, v_f_29322.BI.Be = !0;
            v_t_29401 = v_Wr_27968.oI(handshake.On.iI[v_i_29400.Ae]);
            v_t_29401 && v_sl_28151(v_f_29322.BI, v_t_29401, 0), v_f_29322.Yi.Wt = "", v_f_29322.$i.Wt = "-", v_f_29322.bk.Be = !1;
        }
      }
      function v_R_29339() {
        if (!v_b_29325.length) {
          {
            var v_s_29412 = new v_m_29315();
            v_s_29412.Ei = v_Ue_28209("userBoxTitle"), v_s_29412.Fi = v_d_29311;
            let v_t_29423 = -1,
              v_i_29424 = !0,
              v_e_29425 = 0,
              v_n_29426,
              v_r_29427;
            for (v_r_29427 of v_be_27857.Hp) if (!(v_r_29427.rarity < 7)) {
              var v_a_29413 = new v_p_29316();
              for (let v_t_29428 = 0; v_t_29428 < 2; ++v_t_29428) 0 === v_t_29428 ? v_a_29413.ze[v_t_29428] = v_k_29323.listItemActiveTitle.Ve(!0) : 1 === v_t_29428 && (v_a_29413.ze[v_t_29428] = v_k_29323.listItemInactiveTitle.Ve(!0)), v_a_29413.ze[v_t_29428].Te = 0, v_a_29413.ze[v_t_29428].Qt = 0, v_a_29413.ze[v_t_29428].Be = !1, v_a_29413.ze[v_t_29428].ot("listItemLabel").Wt = v_r_29427.text, v_a_29413.ze[v_t_29428].ot("listItemTitleBg").Je = "title" + v_ot_27785[v_r_29427.rarity], handshake.On.$p !== v_r_29427.id ? v_a_29413.ze[v_t_29428].ot("listItemBadgeSetBg").Be = !1 : v_s_29412.Mi = v_s_29412.Bi.length, v_i_29424 && (0 === v_t_29428 ? v_n_29426 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29428 && (v_n_29426 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29426.Be = !0, v_n_29426.ot("listItemHeaderImg").Je = "vertListTabTitle", v_a_29413.ze[v_t_29428].hn(v_n_29426, v_a_29413.ze[v_t_29428].We[0]));
              v_i_29424 && ++v_e_29425, v_a_29413.Ae = v_r_29427.id, v_a_29413.Pi = v_e_29425, (v_a_29413.Di = v_i_29424) && ++v_s_29412.Ri, v_s_29412.Bi.push(v_a_29413), v_i_29424 = !1, ++v_e_29425;
            }
            for (v_r_29427 of v_be_27857.Hp) if (!(7 <= v_r_29427.rarity)) {
              var v_o_29414 = new v_p_29316();
              v_i_29424 = v_t_29423 !== v_r_29427.rarity, v_t_29423 = v_r_29427.rarity;
              for (let v_t_29429 = 0; v_t_29429 < 2; ++v_t_29429) 0 === v_t_29429 ? v_o_29414.ze[v_t_29429] = v_k_29323.listItemActiveTitle.Ve(!0) : 1 === v_t_29429 && (v_o_29414.ze[v_t_29429] = v_k_29323.listItemInactiveTitle.Ve(!0)), v_o_29414.ze[v_t_29429].Te = 0, v_o_29414.ze[v_t_29429].Qt = 0, v_o_29414.ze[v_t_29429].Be = !1, v_o_29414.ze[v_t_29429].ot("listItemLabel").Wt = v_r_29427.text, v_o_29414.ze[v_t_29429].ot("listItemTitleBg").Je = "title" + v_ot_27785[v_r_29427.rarity], handshake.On.$p !== v_r_29427.id ? v_o_29414.ze[v_t_29429].ot("listItemBadgeSetBg").Be = !1 : v_s_29412.Mi = v_s_29412.Bi.length, v_i_29424 && (0 === v_t_29429 ? v_n_29426 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29429 && (v_n_29426 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29426.Be = !0, v_n_29426.ot("listItemHeaderImg").Je = "vertListTabTitle" + v_ot_27785[v_r_29427.rarity], v_o_29414.ze[v_t_29429].hn(v_n_29426, v_o_29414.ze[v_t_29429].We[0]));
              v_i_29424 && ++v_e_29425, v_o_29414.Ae = v_r_29427.id, v_o_29414.Pi = v_e_29425, (v_o_29414.Di = v_i_29424) && ++v_s_29412.Ri, v_s_29412.Bi.push(v_o_29414), ++v_e_29425;
            }
            v_b_29325.push(v_s_29412);
          }
          {
            var v_r_29415 = new v_m_29315();
            v_r_29415.Ei = v_Ue_28209("userBoxNameplate"), v_r_29415.Fi = v_v_29312;
            let v_i_29430 = !0,
              v_t_29431 = 0,
              v_e_29432,
              v_n_29433;
            for (v_n_29433 of v_be_27857.Up) {
              var v_l_29416 = new v_p_29316();
              for (let v_t_29434 = 0; v_t_29434 < 2; ++v_t_29434) 0 === v_t_29434 ? v_l_29416.ze[v_t_29434] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29434 && (v_l_29416.ze[v_t_29434] = v_k_29323.listItemInactive.Ve(!0)), v_l_29416.ze[v_t_29434].Te = 0, v_l_29416.ze[v_t_29434].Qt = 0, v_l_29416.ze[v_t_29434].Be = !1, v_l_29416.ze[v_t_29434].ot("listItemLabel").Wt = v_n_29433.text, handshake.On.qp !== v_n_29433.id ? v_l_29416.ze[v_t_29434].ot("listItemBadgeSetBg").Be = !1 : v_r_29415.Mi = v_r_29415.Bi.length, v_i_29430 && (0 === v_t_29434 ? v_e_29432 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29434 && (v_e_29432 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_e_29432.Be = !0, v_e_29432.ot("listItemHeaderImg").Je = "vertListTabNameplate", v_l_29416.ze[v_t_29434].hn(v_e_29432, v_l_29416.ze[v_t_29434].We[0]));
              v_i_29430 && ++v_t_29431, v_l_29416.Ae = v_n_29433.id, v_l_29416.Pi = v_t_29431, (v_l_29416.Di = v_i_29430) && ++v_r_29415.Ri, v_r_29415.Bi.push(v_l_29416), ++v_t_29431, v_i_29430 = !1;
            }
            v_b_29325.push(v_r_29415);
          }
          {
            var v_c_29417 = new v_m_29315();
            v_c_29417.Ei = v_Ue_28209("userBoxVoice"), v_c_29417.Fi = v_w_29313;
            let v_i_29435 = !0,
              v_t_29436 = 0,
              v_e_29437,
              v_n_29438;
            for (v_n_29438 of v_be_27857.Vp) {
              var v_u_29418 = new v_p_29316();
              for (let v_t_29439 = 0; v_t_29439 < 2; ++v_t_29439) 0 === v_t_29439 ? v_u_29418.ze[v_t_29439] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29439 && (v_u_29418.ze[v_t_29439] = v_k_29323.listItemInactive.Ve(!0)), v_u_29418.ze[v_t_29439].Te = 0, v_u_29418.ze[v_t_29439].Qt = 0, v_u_29418.ze[v_t_29439].Be = !1, v_u_29418.ze[v_t_29439].ot("listItemLabel").Wt = v_n_29438.text, handshake.On.Qp !== v_n_29438.id ? v_u_29418.ze[v_t_29439].ot("listItemBadgeSetBg").Be = !1 : v_c_29417.Mi = v_c_29417.Bi.length, v_i_29435 && (0 === v_t_29439 ? v_e_29437 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29439 && (v_e_29437 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_e_29437.Be = !0, v_e_29437.ot("listItemHeaderImg").Je = "vertListTabVoice", v_u_29418.ze[v_t_29439].hn(v_e_29437, v_u_29418.ze[v_t_29439].We[0]));
              v_i_29435 && ++v_t_29436, v_u_29418.Ae = v_n_29438.id, v_u_29418.Pi = v_t_29436, (v_u_29418.Di = v_i_29435) && ++v_c_29417.Ri, v_c_29417.Bi.push(v_u_29418), ++v_t_29436, v_i_29435 = !1;
            }
            v_b_29325.push(v_c_29417);
          }
          {
            var v_f_29419,
              v___29420 = new v_m_29315(),
              v_i_29421 = (v___29420.Ei = "チャット", v___29420.Fi = v_g_29314, [[v_bi_27819, "プレイヤー募集中"], [v_t1_27820, "リザルト画面"]]);
            let v_e_29440 = !1,
              v_t_29441 = 0,
              v_n_29442;
            for (v_f_29419 of v_i_29421) for (let v_i_29443 = 0; v_i_29443 < 4; ++v_i_29443) {
              var v_h_29422 = new v_p_29316();
              for (let v_t_29444 = 0; v_t_29444 < 2; ++v_t_29444) 0 === v_t_29444 ? v_h_29422.ze[v_t_29444] = v_k_29323.listItemActive.Ve(!0) : 1 === v_t_29444 && (v_h_29422.ze[v_t_29444] = v_k_29323.listItemInactive.Ve(!0)), v_h_29422.ze[v_t_29444].Te = 0, v_h_29422.ze[v_t_29444].Qt = 0, v_h_29422.ze[v_t_29444].Be = !1, v_h_29422.ze[v_t_29444].ot("listItemLabel").Wt = v_f_29419[1] + "／チャット" + (v_i_29443 + 1), v_h_29422.ze[v_t_29444].ot("listItemBadgeSetBg").Be = !1, v_e_29440 && (0 === v_t_29444 ? v_n_29442 = v_k_29323.listItemHeaderActive.Ve(!0) : 1 === v_t_29444 && (v_n_29442 = v_k_29323.listItemHeaderInactive.Ve(!0)), v_n_29442.Be = !0, v_n_29442.ot("listItemHeaderImg").Je = "vertListTabVoice", v_h_29422.ze[v_t_29444].hn(v_n_29442, v_h_29422.ze[v_t_29444].We[0]));
              v_e_29440 && ++v_t_29441, v_h_29422.Ae = v_f_29419[0] + v_i_29443, v_h_29422.Pi = v_t_29441, (v_h_29422.Di = v_e_29440) && ++v___29420.Ri, v___29420.Bi.push(v_h_29422), ++v_t_29441, v_e_29440 = !1;
            }
            v_b_29325.push(v___29420);
          }
        }
      }
      return {
        ue: function (v_i_29445) {
          v_Le_28076([v_n_29446 => {
            languagePackages.it("ui/userBox.rsb", function (v_t_29447) {
              v_t_29447 ? (v_t_29447 = new v_Dl_28181(v_t_29447), renderer.nt(v_t_29447.rt(renderer.p5()), v_t_29448 => {
                v_o_29318 = v_t_29448, v_c_29319 = v_t_29448.lt.yk(39), v_u_29320 = v_t_29448.lt.yk(42), v_r_29321 = v_t_29448.lt.yk(71), v_f_29322.Oi = v_t_29448.lt.yk(41), v_f_29322.Ji = v_t_29448.lt.yk(69), v_f_29322.Wi = v_t_29448.lt.yk(33), v_f_29322.Ki = v_t_29448.lt.yk(34), v_f_29322.zi = v_t_29448.lt.yk(37), v_f_29322.Xi = v_t_29448.lt.yk(36), v_f_29322.Zi = v_t_29448.lt.yk(47), v_f_29322.Yi = v_t_29448.lt.yk(60), v_f_29322.$i = v_t_29448.lt.yk(62), v_f_29322.qi = v_t_29448.lt.yk(52), v_f_29322.Qi = v_t_29448.lt.yk(55), v_f_29322.en = v_t_29448.lt.yk(56), v_f_29322.BI = v_t_29448.lt.yk(57), v_f_29322.bk = v_t_29448.lt.yk(48), v_f_29322.Sk = v_t_29448.lt.yk(51);
                var v_i_29449 = v_t_29448.lt.yk(72);
                for (let v_t_29451 = 0; v_t_29451 < v_i_29449.We.length; ++v_t_29451) v_i_29449.We[v_t_29451].Be = !1, v_k_29323[v_i_29449.We[v_t_29451].ct] = v_i_29449.We[v_t_29451];
                for (let v_t_29452 = 0; v_t_29452 < 9; ++v_t_29452) {
                  var v_e_29450 = v_k_29323.catPanel.Ve(!0);
                  v_e_29450.Te = 0, v_e_29450.Qt = 0, v_e_29450.We[1].Nd = 4 === v_t_29452, v___29324.push(v_e_29450), v_r_29321.Ze(v_e_29450);
                }
                v_Me_28078(v_n_29446);
              })) : v_i_29445();
            });
          }, v_t_29453 => {
            v_Fe_28101(v_i_29445);
          }]);
        },
        T0: function (v_t_29454) {
          v_Le_28076([v_i_29455 => {
            menuSystem.ft(), (v_h_29326 = new v_e_29317()).Ee = v_t_29454, v_h_29326.Gi = !0, v_o_29318.Jt = !1, renderer.ut("userBox", v_o_29318, 60, v_t_29456 => {
              v_Me_28078(v_i_29455);
            }), v_O1_27910.ti("UserBox");
          }, v_t_29457 => {
            v_R_29339();
            for (let v_i_29458 = 0; v_i_29458 < v_b_29325[v_h_29326.ji].Bi.length; ++v_i_29458) for (let v_t_29459 = 0; v_t_29459 < 2; ++v_t_29459) v_b_29325[v_h_29326.ji].Bi[v_i_29458].ze[v_t_29459].Be = !1;
            v_a_29331(), v_n_29332(), v_P_29338();
            for (const v_i_29460 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"], ["nextGroup", "NextGroup", 10, 2, v_X0_27795, !0, "down"], ["startCatMode", "ChangeCategory", 12, 2, v_li_27796, !1, ""], ["endCatMode", "OkBack", 14, 2, v_W0_27791, !1, ""], ["backMusicSelect", "BackMusicSelect", 14, 2, v_si_27792, !1, ""], ["changeDown", "ChangeMinus", 6, 2, v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, v_X0_27795, !0, "up"]]) menuSystem.vt(v_i_29460[0], v_i_29460[1], v_i_29460[2], v_i_29460[3], v_i_29460[4], v_i_29460[5], !1, !1, v_i_29460[6], function (v_t_29461, v_i_29462) {
              "down" === v_t_29461 && v_I_29337(this.Ae);
            });
            menuSystem.yv(), v_T_29335(), sceneManager.ft(new v_M1_27898(v_s_29336, void 0)), v_o_29318.Jt = !0, v_o_29318.e8(4), v_o_29318.e8(0), menuSystem.Ct(!0), renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(30));
          }]);
        },
        Gi: () => v_h_29326.Gi
      };
    }(),
    v_Q1_27921 = function () {
      const v_s_29463 = [1, 2, 3, 4, 5, 6, 99];
      function v_a_29464() {
        this.ze = null, this.vn = void 0;
      }
      function v_o_29465() {
        this.Bi = [];
      }
      function v_e_29466() {
        this.Gi = !1, this.ji = 0, this.Ni = 0, this.Ui = !1, this.gn = !1, this.Ee = void 0;
      }
      let v_l_29467 = void 0,
        v_c_29468 = void 0,
        v_u_29469 = {
          Oi: void 0,
          Wi: void 0,
          Ki: void 0,
          zi: void 0,
          Xi: void 0,
          wn: void 0,
          pn: void 0,
          kn: void 0,
          bn: void 0,
          mn: void 0,
          Sn: void 0,
          xn: void 0,
          In: void 0,
          yn: void 0,
          Cn: void 0
        },
        v_f_29470 = {},
        v___29471 = [],
        v_h_29472 = new v_e_29466();
      function v_d_29473() {
        return v_h_29472.gn || !!v_h_29472.Ui;
      }
      function v_i_29485(v_t_29484) {
        var v_i_29485, v_e_29486;
        v_d_29473() || (v_i_29485 = v___29471[v_h_29472.ji], (v_t_29484 = mathMin(mathMax(v_t_29484, 0), v_i_29485.Bi.length - 1)) !== v_h_29472.Ni && (v_h_29472.Ui = !0, v_e_29486 = v_h_29472.Ni, v_h_29472.Ni = v_t_29484, v_w_29477(0, v_i_29485.Bi[v_e_29486], v_h_29472.Ni, v_i_29485.Bi[v_h_29472.Ni]), v_v_29476(v_ui_27806), v_l_29467.e8(2), renderer.W6(() => {
          v_h_29472.Ui = !1;
        }, 100)));
      }
      function v_n_29487(v_n_29487, v_r_29488) {
        if (!v_d_29473()) {
          let v_i_29489 = v_h_29472.ji,
            v_e_29490 = mathMin(mathMax(v_h_29472.ji + (v_n_29487 ? 1 : -1), 0), v___29471.length - 1);
          if (v_i_29489 !== v_e_29490) {
            v_h_29472.Ui = !0, v_v_29476(v_n_29487 ? v_ft_27812 : v_ut_27811), v_l_29467.e8(5);
            let v_t_29491 = v_h_29472.Ni;
            v_h_29472.ji = v_e_29490, v_h_29472.Ni = void 0 !== v_r_29488 ? v_r_29488 : v_n_29487 ? 0 : v___29471[v_e_29490].Bi.length - 1, renderer.W6(() => {
              v_v_29476(v_gi_27815), v_l_29467.e8(4), v_l_29467.e8(2), v_w_29477(v_t_29491, v___29471[v_i_29489].Bi[v_t_29491], v_h_29472.Ni, v___29471[v_e_29490].Bi[v_h_29472.Ni]), renderer.W6(() => {
                v_h_29472.Ui = !1;
              }, 167);
            }, 167);
          }
        }
      }
      function v_v_29476(v_i_29492) {
        v_c_29468.tn();
        var v_e_29493;
        let v_n_29494 = 0;
        var v_t_29495,
          v_r_29496 = void 0 !== v_i_29492 && (v_i_29492 & v_ft_27812 || v_i_29492 & v_ut_27811),
          v_s_29497 = v___29471[v_h_29472.ji];
        for (let v_t_29499 = -5; v_t_29499 < 6; ++v_t_29499) (v_e_29493 = v_t_29499 + v_h_29472.Ni) < 0 || v_s_29497.Bi.length <= v_e_29493 || (0 === v_t_29499 ? v_n_29494 = 0 : (v_n_29494 = 182 * v_t_29499, v_n_29494 += 102 * (0 < v_n_29494 ? 1 : -1)), v_r_29496 && (v_i_29492 & v_ft_27812 ? v_n_29494 -= v_i_29492 & v_vi_27813 ? 250 : 500 : v_n_29494 += v_i_29492 & v_vi_27813 ? 250 : 500), (!1 === (v_e_29493 = v_s_29497.Bi[v_e_29493].ze).Be || v_i_29492 & v_gi_27815) && v_e_29493.nn(), !v_r_29496 || -5 !== v_t_29499 && 5 !== v_t_29499 ? v_e_29493.Be = !0 : v_e_29493.Be = !1, v_c_29468.Ze(v_e_29493), v_e_29493.rn(v_Vo_28136, v_jo_28134, v_r_29496 ? 10 : 6, 0), v_r_29496 ? (v_e_29493.rn(v_Xo_28138, v_Jo_28133, 6, 0), v_e_29493.rn(v_zo_28139, v_Jo_28133, 6, 0)) : (v_e_29493.rn(v_Xo_28138, v_jo_28134, 6, 0), v_e_29493.rn(v_zo_28139, v_jo_28134, 6, 0)), v_e_29493.$e(v_n_29494), v_r_29496 || 0 !== v_t_29499 ? v_e_29493.ln(.7, .7) : v_e_29493.ln(1, 1));
        var v_a_29498 = v___29471[v_h_29472.ji];
        0 < v_a_29498.Bi.length ? (v_u_29469.Wi.Wt = mathMin(mathMax(v_h_29472.Ni + 1, 1), 9999).toString(), v_u_29469.Ki.Wt = "S" + mathMin(mathMax(v_a_29498.Bi.length, 0), 9999).toString()) : (v_u_29469.Wi.Wt = "0", v_u_29469.Ki.Wt = "S0"), 0 < v_a_29498.Bi.length ? (v_t_29495 = mathMax(1 / v_a_29498.Bi.length, .04), v_u_29469.zi.Be = !0, v_u_29469.zi.Oe[0] = v_t_29495, 1 === v_a_29498.Bi.length ? v_u_29469.zi.on[0] = 0 : v_u_29469.zi.on[0] = v_h_29472.Ni / (v_a_29498.Bi.length - 1) * (1 - v_t_29495) * 690) : v_u_29469.zi.Be = !1;
      }
      function v_w_29477(v_t_29500, v_i_29501, v_e_29502, v_n_29503) {
        v_i_29501 && v_n_29503 && v_i_29501.ze[0] === v_n_29503.ze[0] || (v_i_29501 && (v_i_29501.ze.un = !0), v_n_29503 && (v_n_29503.ze.un = !1, v_n_29503.ze.Kt())), v_p_29481();
      }
      function v_r_29478() {
        v_d_29473() || menuSystem.St("backMusicSelect");
      }
      function v_g_29479() {
        menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", !0), menuSystem.wt("prevGroup", !0), menuSystem.wt("nextGroup", !0), menuSystem.wt("backMusicSelect", !0), menuSystem.wt("deleteRecord", v___29471[v_h_29472.ji].Bi.length), menuSystem.kt("left", v_h_29472.ji <= 0 && v_h_29472.Ni <= 0), menuSystem.kt("right", v_h_29472.ji >= v___29471.length - 1 && v_h_29472.Ni >= v___29471[v_h_29472.ji].Bi.length - 1), menuSystem.kt("enter", 0 === v___29471[v_h_29472.ji].Bi.length), menuSystem.kt("prevGroup", v_h_29472.ji <= 0), menuSystem.kt("nextGroup", v_h_29472.ji >= v___29471.length - 1), menuSystem.Cv(!0);
      }
      function v_m_29480(v_t_29504) {
        switch (v_t_29504) {
          case "left":
            v_Ae_27892.dn("move_cursor"), v_h_29472.Ni <= 0 ? v_n_29475(!1) : v_i_29474(v_h_29472.Ni - 1, v_ui_27806);
            break;
          case "right":
            v_Ae_27892.dn("move_cursor"), v_h_29472.Ni >= v___29471[v_h_29472.ji].Bi.length - 1 ? v_n_29475(!0) : v_i_29474(v_h_29472.Ni + 1, v_ui_27806);
            break;
          case "prevGroup":
            v_Ae_27892.dn("move_cursor"), v_n_29475(!1, 0);
            break;
          case "nextGroup":
            v_Ae_27892.dn("move_cursor"), v_n_29475(!0, 0);
            break;
          case "enter":
            return void v_Te_27911.Ai(v_Ue_28209("courseSelectConfirm"), v_G0_27772, 0, function (v_i_29505) {
              if (v_i_29505 === v_H0_27781 || v_i_29505 === v_at_27784) {
                let v_t_29506 = null;
                v_i_29505 = v___29471[v_h_29472.ji];
                (v_t_29506 = 0 < v_i_29505.Bi.length ? v_i_29505.Bi[v_h_29472.Ni].vn : v_t_29506) && (v_t_29506._I() ? v_b_29483(v_t_29506) : v_Te_27911.Ai(v_Ue_28209("musicSelectNoSongsFound"), v_N0_27771, 5e3, function (v_t_29507) {}));
              }
            });
          case "backMusicSelect":
            return v_Ae_27892.dn("menu_back"), void v_b_29483(!1);
          case "deleteRecord":
            return void v_Te_27911.Ai(v_Ue_28209("musicSelectConfirmDeleteRecord"), v_G0_27772, 0, function (v_t_29508) {
              v_t_29508 === v_H0_27781 && (v_t_29508 = (v_t_29508 = v___29471[v_h_29472.ji]) ? v_t_29508.Bi[v_h_29472.Ni] : void 0) && (v_Ns_28014.Uy(v_t_29508.vn.Ae), v_k_29482(), v_v_29476(), v_p_29481());
            });
        }
        v_g_29479();
      }
      function v_p_29481() {
        v_u_29469.kn.Je = v_u_29469.bn.Je = "bg" + v_s_29463[v_h_29472.ji];
        for (let v_t_29513 = 0; v_t_29513 < v_s_29463.length; ++v_t_29513) v_u_29469.yn.ot("classTab" + v_s_29463[v_t_29513]).Be = v_t_29513 === v_h_29472.ji;
        var v_t_29509 = v___29471[v_h_29472.ji];
        if (0 < v_t_29509.Bi.length) {
          let v_n_29514 = v_t_29509.Bi[v_h_29472.Ni].vn;
          v_u_29469.mn.Kt(), v_u_29469.Sn.Wt = v_n_29514.lf, v_u_29469.xn.Wt = v_n_29514.bP.toString(), v_u_29469.In.Wt = v_u_29469.In.Tn.An(v_Tr_27949.Ln(v_n_29514));
          let v_r_29515, v_s_29516;
          for (let v_e_29517 = 0; v_e_29517 < v_u_29469.Cn.We.length; ++v_e_29517) {
            var v_a_29510 = v_n_29514.hI[v_e_29517].Fi;
            let v_t_29518 = null,
              v_i_29519 = 0;
            v_a_29510 === v_yr_27944 && (v_t_29518 = v_be_27857.Pp.find(v_t_29520 => v_t_29520.w0 === v_n_29514.hI[v_e_29517].ee), v_i_29519 = v_n_29514.hI[v_e_29517].te, v_t_29518) && (v_s_29516 = v_t_29518.meta[v_i_29519]);
            var v_o_29511 = (v_r_29515 = v_u_29469.Cn.We[v_e_29517]).ot("musicItemLevel"),
              v_l_29512 = v_r_29515.ot("musicItemLevelWe"),
              v_a_29510 = (v_t_29518 && v_s_29516 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_" + v_Q0_27805[v_i_29519], renderer.Yt.Zt["jkt:" + v_t_29518.w0] ? (v_r_29515.ot("musicItemJacket").zt = !0, v_r_29515.ot("musicItemJacket").Xt = "jkt:" + v_t_29518.w0) : (v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txDummyJacket"), v_r_29515.ot("musicItemTitle").Wt = v_t_29518.lf, v_r_29515.ot("musicItemLevelBg").Je = 4 !== v_i_29519 ? "panelPartLevel" : "panelPartLevelWe", 4 !== v_i_29519 ? (v_o_29511.Be = !0, v_l_29512.Be = !1, v_o_29511.ot("musicItemLevelNum").Wt = v_s_29516.k5.replace(/\+/g, ""), v_o_29511.ot("musicItemLevelPlus").Be = -1 !== v_s_29516.k5.indexOf("+")) : (v_o_29511.Be = !1, v_l_29512.Be = !0, v_l_29512.ot("musicItemWeLevelNum").Wt = "r".repeat(v_Qa_28089(v_Pe_28064(v_s_29516.k5), 1, 5)), v_l_29512.ot("musicItemWeAttr").Wt = v_s_29516.b5)) : v_a_29510 === v_Sr_27945 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_RND0", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket", v_r_29515.ot("musicItemTitle").Wt = "", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.Be = !0, v_l_29512.Be = !1, v_o_29511.ot("musicItemLevelNum").Wt = v_n_29514.hI[v_e_29517].p9.replace(/\+/g, ""), v_o_29511.ot("musicItemLevelPlus").Be = -1 !== v_n_29514.hI[v_e_29517].p9.indexOf("+")) : (v_a_29510 === v_Ar_27946 ? (v_r_29515.ot("musicItemBg").Je = "musicFrame_RND1", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket1", v_r_29515.ot("musicItemTitle").Wt = "", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.ot("musicItemLevelNum").Wt = "M") : (v_r_29515.ot("musicItemBg").Je = "musicFrame_BAS", v_r_29515.ot("musicItemJacket").zt = !1, v_r_29515.ot("musicItemJacket").Xt = "txRandomJacket", v_r_29515.ot("musicItemTitle").Wt = "(Not Found)", v_r_29515.ot("musicItemLevelBg").Je = "panelPartLevel", v_o_29511.ot("musicItemLevelNum").Wt = "Q"), v_o_29511.ot("musicItemLevelPlus").Be = !1, v_o_29511.Be = !0, v_l_29512.Be = !1), v_Ns_28014.gA(v_n_29514.Ae));
            v_u_29469.mn.yk(55).Be = v_a_29510.ni, (v_r_29515 = v_u_29469.mn.yk(56)).Je = "badge" + rankLabel(v_a_29510.Sr / 3), v_r_29515.Be = v_a_29510.G4, v_r_29515 = v_u_29469.mn.yk(57), v_a_29510.B4 ? v_r_29515.Je = "badgeAj" : v_a_29510.R4 && (v_r_29515.Je = "badgeFc"), v_r_29515.Be = v_a_29510.G4 && (v_a_29510.B4 || v_a_29510.R4), v_u_29469.mn.yk(54).Wt = v_a_29510.Sr.toLocaleString("ja").replaceAll(",", "C");
          }
          v_u_29469.mn.Be = !0, v_u_29469.wn.Be = !0, v_u_29469.pn.Be = !0, v_u_29469.Oi.Be = !0;
        } else v_u_29469.mn.Be = !1, v_u_29469.wn.Be = !1, v_u_29469.pn.Be = !1, v_u_29469.Oi.Be = !1;
      }
      function v_k_29482() {
        v___29471 = [];
        for (let v_t_29525 = 0; v_t_29525 < v_s_29463.length; ++v_t_29525) v___29471.push(new v_o_29465());
        let v_i_29521;
        var v_e_29522;
        for (let v_t_29526 = 0; v_t_29526 < v_be_27857.Gp.length; ++v_t_29526) {
          var v_n_29523 = v_s_29463.indexOf(v_be_27857.Gp[v_t_29526].cls);
          for (v_i_29521 of v_be_27857.Gp[v_t_29526].items) {
            (v_e_29522 = new v_a_29464()).vn = v_i_29521, v_e_29522.ze = v_f_29470.listItem.Ve(!0), v_e_29522.ze.ot("listItemBg").Je = "cousePanel" + v_i_29521.AP, v_e_29522.ze.ot("listItemTitle").Wt = v_i_29521.lf, v_e_29522.ze.ot("listItemBgDisabled").Be = !1, v_i_29521.hI[0].Fi === v_yr_27944 && renderer.Yt.Zt["jkt:" + v_i_29521.hI[0].ee] ? (v_e_29522.ze.ot("listItemJacket").zt = !0, v_e_29522.ze.ot("listItemJacket").Xt = "jkt:" + v_i_29521.hI[0].ee) : v_i_29521.hI[0].Fi === v_Sr_27945 ? (v_e_29522.ze.ot("listItemJacket").zt = !1, v_e_29522.ze.ot("listItemJacket").Xt = "txRandomJacket") : v_i_29521.hI[0].Fi === v_Ar_27946 && (v_e_29522.ze.ot("listItemJacket").zt = !1, v_e_29522.ze.ot("listItemJacket").Xt = "txRandomJacket1");
            var v_r_29524 = v_Ns_28014.gA(v_i_29521.Ae);
            let v_t_29527;
            v_e_29522.ze.ot("listItemBadgeClear").Be = v_r_29524.ni, (v_t_29527 = v_e_29522.ze.ot("listItemBadgeRank")).Je = "badgeSm" + rankLabel(v_r_29524.Sr / 3), v_t_29527.Be = v_r_29524.G4, v_t_29527 = v_e_29522.ze.ot("listItemBadgeFc"), v_r_29524.B4 ? v_t_29527.Je = "badgeSmAj" : v_r_29524.R4 && (v_t_29527.Je = "badgeSmFc"), v_t_29527.Be = v_r_29524.G4 && (v_r_29524.B4 || v_r_29524.R4), v___29471[v_n_29523].Bi.push(v_e_29522);
          }
        }
      }
      function v_b_29483(v_t_29528) {
        v_h_29472.Ui = !0, menuSystem._t(), menuSystem.It(!1), v_l_29467.e8(3), renderer.W6(() => {
          v_h_29472.Gi = !1, renderer._i("courseSelect"), v_O1_27910.ii(), renderer.W6(() => {
            v_h_29472.Ee && v_h_29472.Ee(v_ii_27770, v_t_29528), sceneManager._t();
          }, 500);
        }, 250);
      }
      return {
        ue: function (v_i_29529) {
          v_Le_28076([v_e_29530 => {
            languagePackages.it("ui/courseSelect.rsb", function (v_t_29531) {
              v_t_29531 ? (v_t_29531 = new v_Dl_28181(v_t_29531), renderer.nt(v_t_29531.rt(renderer.p5()), v_t_29532 => {
                v_l_29467 = v_t_29532, v_c_29468 = v_t_29532.lt.yk(22), v_u_29469.Oi = v_t_29532.lt.yk(21), v_u_29469.Wi = v_t_29532.lt.yk(17), v_u_29469.Ki = v_t_29532.lt.yk(18), v_u_29469.zi = v_t_29532.lt.yk(16), v_u_29469.Xi = v_t_29532.lt.yk(15), v_u_29469.wn = v_t_29532.lt.yk(26), v_u_29469.pn = v_t_29532.lt.yk(24), v_u_29469.kn = v_t_29532.lt.yk(47), v_u_29469.bn = v_t_29532.lt.yk(50), v_u_29469.mn = v_t_29532.lt.yk(52), v_u_29469.Sn = v_t_29532.lt.yk(98), v_u_29469.xn = v_t_29532.lt.yk(59), v_u_29469.In = v_t_29532.lt.yk(99), v_u_29469.yn = v_t_29532.lt.yk(38), v_u_29469.Cn = v_t_29532.lt.yk(61);
                var v_i_29533 = v_t_29532.lt.yk(100);
                for (let v_t_29534 = 0; v_t_29534 < v_i_29533.We.length; ++v_t_29534) v_i_29533.We[v_t_29534].Be = !1, v_f_29470[v_i_29533.We[v_t_29534].ct] = v_i_29533.We[v_t_29534];
                v_Me_28078(v_e_29530);
              })) : v_i_29529();
            });
          }, v_t_29535 => {
            v_Fe_28101(v_i_29529);
          }]);
        },
        T0: function (v_t_29536) {
          v_Le_28076([v_i_29537 => {
            menuSystem.ft(), (v_h_29472 = new v_e_29466()).Ee = v_t_29536, v_h_29472.Gi = !0, v_l_29467.Jt = !1, renderer.ut("courseSelect", v_l_29467, 60, v_t_29538 => {
              v_Me_28078(v_i_29537);
            }), v_O1_27910.ti("CourseSelect");
          }, v_t_29539 => {
            v_k_29482(), v_v_29476(), v_p_29481();
            for (const v_i_29540 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"], ["prevGroup", "ClassMinus", 10, 2, v_X0_27795, !0, "up"], ["nextGroup", "ClassPlus", 12, 2, v_X0_27795, !0, "down"], ["backMusicSelect", "BackMusicSelect", 14, 2, v_si_27792, !1, ""], ["deleteRecord", "DeleteRecord", 0, 0, "", !1, "f8"]]) menuSystem.vt(v_i_29540[0], v_i_29540[1], v_i_29540[2], v_i_29540[3], v_i_29540[4], v_i_29540[5], !1, !1, v_i_29540[6], function (v_t_29541, v_i_29542) {
              "down" === v_t_29541 && v_m_29480(this.Ae);
            });
            menuSystem.yv(), renderer.W6(function () {
              v_Me_28078(v_t_29539);
            }, v_Ge_28204(30));
          }, v_t_29543 => {
            v_g_29479(), sceneManager.ft(new v_M1_27898(v_r_29478, void 0)), v_l_29467.Jt = !0, v_l_29467.e8(0), v_l_29467.e8(2), v_l_29467.e8(1), menuSystem.Ct(!0), renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(30));
          }]);
        },
        Gi: () => v_h_29472.Gi
      };
    }(),
    uiComponentA = function () {
      const v_e_29544 = 0,
        v_n_29545 = 1,
        v_r_29546 = "cache:charaLg:";
      function v_c_29547() {
        this.ze = [null, null], this.Pi = 0, this.Di = !1, this.En = "";
      }
      function v_o_29548() {
        this.n1 = v_e_29544, this.Fn = [], this.Bn = void 0, this.Mn = void 0, this.Gi = !1, this.Ni = 0, this.Mi = 0, this.Ui = !1, this.Ee = void 0;
      }
      let v_u_29549 = void 0,
        v_l_29550 = void 0,
        v_f_29551 = void 0,
        v___29552 = {
          Oi: void 0,
          Wi: void 0,
          Ki: void 0,
          zi: void 0,
          Xi: void 0,
          Rn: void 0,
          fb: void 0,
          B5: void 0,
          _b: void 0,
          Pn: void 0,
          Dn: void 0
        },
        v_h_29553 = {},
        v_d_29554 = [],
        v_v_29555 = new v_o_29548();
      function v_s_29556() {
        v_el_28148(v_u_29549.lt.yk(70), v_v_29555.Bn, !0);
      }
      function v_a_29557() {
        return !!v_v_29555.Ui;
      }
      function v_w_29558(v_t_29566) {
        var v_i_29567;
        v_a_29557() || (v_t_29566 = mathMin(mathMax(v_t_29566, 0), v_d_29554.length - 1)) !== v_v_29555.Ni && (v_v_29555.Ui = !0, v_i_29567 = v_v_29555.Ni, v_v_29555.Ni = v_t_29566, v_p_29561(0, v_d_29554[v_i_29567], v_v_29555.Ni, v_d_29554[v_v_29555.Ni]), v_m_29560(v_ui_27806), v_u_29549.e8(7), renderer.W6(() => {
          v_v_29555.Ui = !1;
        }, 100));
      }
      function v_g_29559(v_n_29568, v_r_29569) {
        if (!v_a_29557()) {
          let v_t_29570 = null,
            v_i_29571 = 0,
            v_e_29572 = v_v_29555.Ni;
          if (v_n_29568) {
            for (v_i_29571 = v_v_29555.Ni + 1; v_i_29571 < v_d_29554.length; ++v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
              v_t_29570 = v_i_29571;
              break;
            }
            if (null === v_t_29570) for (v_i_29571 = 0; v_i_29571 < v_v_29555.Ni; ++v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
              v_t_29570 = v_i_29571;
              break;
            }
          } else {
            for (v_i_29571 = v_v_29555.Ni - 1; 0 <= v_i_29571; --v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
              v_t_29570 = v_i_29571;
              break;
            }
            if (null === v_t_29570) for (v_i_29571 = v_d_29554.length - 1; v_i_29571 > v_v_29555.Ni; --v_i_29571) if (v_d_29554[v_i_29571].Di || v_r_29569) {
              v_t_29570 = v_i_29571;
              break;
            }
          }
          null !== v_t_29570 && (v_v_29555.Ui = !0, v_m_29560(v_n_29568 ? v_ft_27812 : v_ut_27811), v_u_29549.e8(6), renderer.W6(() => {
            for (let v_i_29573 = 0; v_i_29573 < v_d_29554.length; ++v_i_29573) for (let v_t_29574 = 0; v_t_29574 < 2; ++v_t_29574) v_d_29554[v_i_29573].ze[v_t_29574].Be = !1;
            v_v_29555.Ni = v_t_29570, v_m_29560(v_n_29568 ? v_ut_27811 : v_ft_27812), renderer.W6(() => {
              v_m_29560(), v_u_29549.e8(5), v_u_29549.e8(7), v_p_29561(v_e_29572, v_d_29554[v_e_29572], v_v_29555.Ni, v_d_29554[v_v_29555.Ni]), renderer.W6(() => {
                v_v_29555.Ui = !1;
              }, 167);
            }, 167);
          }, 167));
        }
      }
      function v_m_29560(v_t_29575) {
        v_f_29551.tn(), v_l_29550.tn();
        var v_e_29576, v_n_29577;
        let v_r_29578 = 0;
        var v_i_29579,
          v_s_29580 = v_d_29554[v_v_29555.Ni].Pi,
          v_a_29581 = void 0 !== v_t_29575 && (v_t_29575 & v_ft_27812 || v_t_29575 & v_ut_27811);
        for (let v_i_29582 = -5; v_i_29582 < 6; ++v_i_29582) if (!((v_e_29576 = v_i_29582 + v_v_29555.Ni) < 0 || v_d_29554.length <= v_e_29576)) {
          0 === v_i_29582 ? v_r_29578 = 0 : (v_r_29578 = 100 * (v_d_29554[v_e_29576].Pi - v_s_29580), v_r_29578 += 12 * (0 < v_r_29578 ? 1 : -1)), v_a_29581 && (v_t_29575 & v_ft_27812 ? v_r_29578 -= 200 : v_r_29578 += 200);
          for (let v_t_29583 = 0; v_t_29583 < 2; ++v_t_29583) !1 === (v_n_29577 = v_d_29554[v_e_29576].ze[v_t_29583]).Be && v_n_29577.nn(), !v_a_29581 || -5 !== v_i_29582 && 5 !== v_i_29582 ? v_n_29577.Be = !0 : v_n_29577.Be = !1, (0 === v_i_29582 ? v_f_29551 : v_l_29550).Ze(v_n_29577), v_n_29577.rn(v_Vo_28136, v_jo_28134, v_a_29581 ? 10 : 6, 0), v_n_29577.rn(v_Wo_28137, v_jo_28134, v_a_29581 ? 10 : 6, 0), v_n_29577.$e(.577350269 * v_r_29578, v_r_29578);
          0 !== v_i_29582 || v_a_29581 ? (v_d_29554[v_e_29576].ze[0].rn(v_Ko_28140, v_Oo_28135, 6, 0), v_d_29554[v_e_29576].ze[0].an(0), v_d_29554[v_e_29576].ze[1].rn(v_Ko_28140, v_Oo_28135, 3, 6), v_d_29554[v_e_29576].ze[1].an(1)) : (v_d_29554[v_e_29576].ze[0].rn(v_Ko_28140, v_Oo_28135, 3, 6), v_d_29554[v_e_29576].ze[0].an(1), v_d_29554[v_e_29576].ze[1].rn(v_Ko_28140, v_Oo_28135, 6, 0), v_d_29554[v_e_29576].ze[1].an(0));
        }
        0 < v_d_29554.length ? (v___29552.Wi.Wt = mathMin(mathMax(v_v_29555.Ni + 1, 1), 9999).toString(), v___29552.Ki.Wt = "S" + mathMin(mathMax(v_d_29554.length, 0), 9999).toString()) : (v___29552.Wi.Wt = "0", v___29552.Ki.Wt = "S0"), 0 < v_d_29554.length ? (v_i_29579 = mathMax(1 / v_d_29554.length, .04), v___29552.zi.Be = !0, v___29552.zi.Oe[0] = v_i_29579, 1 === v_d_29554.length ? v___29552.zi.on[0] = 0 : v___29552.zi.on[0] = v_v_29555.Ni / (v_d_29554.length - 1) * (1 - v_i_29579) * 690) : v___29552.zi.Be = !1;
      }
      function v_p_29561(v_t_29584, v_i_29585, v_e_29586, v_n_29587) {
        v_i_29585 && v_n_29587 && v_i_29585.ze[0] === v_n_29587.ze[0] || (v_i_29585 && (v_i_29585.ze[0].un = !0), v_n_29587 && (v_n_29587.ze[0].un = !1, v_n_29587.ze[0].Kt())), v_S_29565();
      }
      function v_k_29562() {
        v_v_29555.n1 === v_e_29544 ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", !0), menuSystem.wt("prevGroup", !0), menuSystem.wt("nextGroup", !0), menuSystem.wt("exceedLimit", !0), menuSystem.Cv(!0)) : v_v_29555.n1 === v_n_29545 && (menuSystem.wt("changeDown", !0), menuSystem.wt("changeUp", !0), menuSystem.wt("enter", !0), menuSystem.kt("changeDown", v_v_29555.Bn.Pm <= 1), menuSystem.kt("changeUp", 50 <= v_v_29555.Bn.Pm));
      }
      function v_b_29563() {
        v_a_29557() || menuSystem.St("enter");
      }
      function v_y_29564(v_t_29588) {
        if (v_v_29555.n1 === v_e_29544) switch (v_t_29588) {
          case "left":
            v_Ae_27892.dn("move_cursor"), v_v_29555.Ni <= 0 ? v_g_29559(!1, !0) : v_w_29558(v_v_29555.Ni - 1);
            break;
          case "right":
            v_Ae_27892.dn("move_cursor"), v_v_29555.Ni >= v_d_29554.length - 1 ? v_g_29559(!0, !0) : v_w_29558(v_v_29555.Ni + 1);
            break;
          case "prevGroup":
            v_Ae_27892.dn("move_cursor"), v_g_29559(!1);
            break;
          case "nextGroup":
            v_Ae_27892.dn("move_cursor"), v_g_29559(!0);
            break;
          case "enter":
            return v_Ae_27892.dn("set_skill"), sceneManager._t(), menuSystem._t(), menuSystem.It(!1), v_d_29554[v_v_29555.Mi].ze[0].ot("listItemBadgeSetBg").Be = !1, v_d_29554[v_v_29555.Mi].ze[1].ot("listItemBadgeSetBg").Be = !1, v_v_29555.Mi = v_v_29555.Ni, v_d_29554[v_v_29555.Mi].ze[0].ot("listItemBadgeSetBg").Be = !0, v_u_29549.e8(8, v_d_29554[v_v_29555.Mi].ze[0]), void renderer.W6(() => {
              v_v_29555.Ee && v_v_29555.Ee(v_ti_27769, v_d_29554[v_v_29555.Ni].En, v_v_29555.Bn), renderer.W6(() => {
                v_u_29549.e8(4), renderer.W6(() => {
                  renderer._i("skillSelect"), v_v_29555.Ee && v_v_29555.Ee(v_ii_27770, v_d_29554[v_v_29555.Ni].En, v_v_29555.Bn);
                }, 250);
              }, 250);
            }, 250);
          case "exceedLimit":
            v_Ae_27892.dn("menu_in"), v_v_29555.n1 = v_n_29545, menuSystem.ft();
            for (const v_i_29589 of [["changeDown", "ChangeMinus", 6, 2, v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, v_X0_27795, !0, "up"], ["enter", "Enter", 14, 2, v_W0_27791, !1, "enter"]]) menuSystem.vt(v_i_29589[0], v_i_29589[1], v_i_29589[2], v_i_29589[3], v_i_29589[4], v_i_29589[5], !1, !1, v_i_29589[6], function (v_t_29590, v_i_29591) {
              "down" === v_t_29590 && v_y_29564(this.Ae);
            });
            return v_k_29562(), v_s_29556(), v_u_29549.lt.yk(64).Be = !0, v_u_29549.e8(9), menuSystem.Ct(!0), void renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(30));
        } else if (v_v_29555.n1 === v_n_29545) switch (v_t_29588) {
          case "changeDown":
            v_Ae_27892.dn("change_value"), 1 < v_v_29555.Bn.Pm && --v_v_29555.Bn.Pm, v_s_29556();
            break;
          case "changeUp":
            v_Ae_27892.dn("change_value"), v_v_29555.Bn.Pm < 50 && ++v_v_29555.Bn.Pm, v_u_29549.e8(1), v_s_29556();
            break;
          case "enter":
            return v_Ae_27892.dn("menu_in"), menuSystem._t(), v_v_29555.n1 = v_e_29544, v_u_29549.e8(3), v_el_28148(v_u_29549.lt.yk(44), v_v_29555.Bn, !0), menuSystem.Ct(!0), void renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(30));
        }
        v_k_29562();
      }
      function v_S_29565() {
        var v_t_29592 = v_Er_27955(v_v_29555.Mn, v_v_29555.Fn[v_v_29555.Ni], v_v_29555.Bn ? v_v_29555.Bn.jm : 0);
        v___29552.Rn.Be = v___29552.B5.Be = !v_v_29555.Mn.ub, v___29552.fb.Be = v___29552._b.Be = v_v_29555.Mn.ub, renderer.Yt.Zt[v_r_29546 + v_t_29592] && (v_v_29555.Mn.ub ? (v___29552.fb.zt = !0, v___29552.fb.Xt = v_r_29546 + v_t_29592, v___29552._b.zt = !0, v___29552._b.Xt = v_r_29546 + v_t_29592) : (v___29552.Rn.zt = !0, v___29552.Rn.Xt = v_r_29546 + v_t_29592, v___29552.B5.zt = !0, v___29552.B5.Xt = v_r_29546 + v_t_29592)), v___29552.Pn.Be = !!v_v_29555.Bn && 0 < v_v_29555.Bn.jm, v_nl_28149(v___29552.Dn, v_v_29555.Fn[v_v_29555.Ni]);
      }
      return {
        ue: function (v_i_29593) {
          v_Le_28076([v_e_29594 => {
            languagePackages.it("ui/skillSelect.rsb", function (v_t_29595) {
              v_t_29595 ? (v_t_29595 = new v_Dl_28181(v_t_29595), renderer.nt(v_t_29595.rt(renderer.p5()), v_t_29596 => {
                v_u_29549 = v_t_29596, v_l_29550 = v_t_29596.lt.yk(40), v_f_29551 = v_t_29596.lt.yk(43), v___29552.Oi = v_t_29596.lt.yk(42), v___29552.Wi = v_t_29596.lt.yk(34), v___29552.Ki = v_t_29596.lt.yk(35), v___29552.zi = v_t_29596.lt.yk(38), v___29552.Xi = v_t_29596.lt.yk(37), v___29552.Rn = v_t_29596.lt.yk(31), v___29552.fb = v_t_29596.lt.yk(32), v___29552.B5 = v_t_29596.lt.yk(68), v___29552._b = v_t_29596.lt.yk(69), v___29552.Pn = v_t_29596.lt.yk(50), v___29552.Dn = v_t_29596.lt.yk(51);
                var v_i_29597 = v_t_29596.lt.yk(80);
                for (let v_t_29598 = 0; v_t_29598 < v_i_29597.We.length; ++v_t_29598) v_i_29597.We[v_t_29598].Be = !1, v_h_29553[v_i_29597.We[v_t_29598].ct] = v_i_29597.We[v_t_29598];
                v_Me_28078(v_e_29594);
              })) : v_i_29593();
            });
          }, v_t_29599 => {
            v_Fe_28101(v_i_29593);
          }]);
        },
        T0: function (v_s_29600, v_a_29601, v_t_29602) {
          v_Le_28076([v_i_29603 => {
            menuSystem.ft(), (v_v_29555 = new v_o_29548()).Ee = v_t_29602, v_v_29555.Gi = !0, v_u_29549.Jt = !1, renderer.ut("skillSelect", v_u_29549, 60, v_t_29604 => {
              v_Me_28078(v_i_29603);
            });
          }, v_t_29605 => {
            let v_n_29606;
            v_co_28100(0, v_s_29600.Hm, (v_i_29607, v_t_29608, v_e_29609) => {
              dataLoader.Si(v_s_29600, v_e_29609, v_t_29610 => {
                v_n_29606 = v_r_29546 + v_e_29609, renderer.Yt.Zt[v_n_29606] && renderer.Yt.Zt[v_n_29606].free(), renderer.Yt.Zt[v_n_29606] = v_t_29610, v_i_29607();
              });
            }, () => v_Me_28078(v_t_29605));
          }, v_t_29611 => {
            v_v_29555.Mn = v_s_29600, v_v_29555.Bn = v_a_29601, v_v_29555.Bn || (v_v_29555.Bn = new v_Mr_27954()), v_v_29555.Fn = v_Ga_28071(v_be_27857.jp).sort((v_t_29617, v_i_29618) => v_t_29617.Um === v_i_29618.Um ? v_t_29617.Vm - v_i_29618.Vm : v_t_29617.Um && !v_i_29618.Um ? -1 : !v_t_29617.Um && v_i_29618.Um ? 1 : 0).filter(v_t_29619 => !(0 < v_t_29619.Jm.length && -1 === v_t_29619.Jm.indexOf(v_s_29600.C0)));
            let v_i_29612 = v_be_27857.jp.ik(":sys_none");
            var v_e_29613 = v_be_27857.jp.ik(v_a_29601 ? v_a_29601.En : v_s_29600.Nm);
            -1 !== v_e_29613 && (!(v_o_29615 = v_be_27857.jp[v_e_29613]).Um || 0 < v_o_29615.Jm.length && -1 !== v_o_29615.Jm.indexOf(v_s_29600.C0)) && (v_i_29612 = v_e_29613);
            let v_n_29614 = v_be_27857.jp[v_i_29612].En;
            v_v_29555.Mi = v_v_29555.Ni = mathMax(v_v_29555.Fn.findIndex(v_t_29620 => v_t_29620.En === v_n_29614), 0);
            {
              var v_o_29615 = v_v_29555.Fn;
              let v_t_29621 = -1,
                v_i_29622 = !1,
                v_e_29623 = !1,
                v_n_29624 = 0,
                v_r_29625;
              v_d_29554 = [];
              let v_s_29626,
                v_a_29627 = 0;
              for (v_s_29626 of v_o_29615) {
                var v_l_29616 = new v_c_29547();
                v_i_29622 = v_s_29626.Um ? (v_e_29623 = !v_i_29622, !0) : (v_e_29623 = v_t_29621 !== v_s_29626.Vm || v_i_29622, v_t_29621 = v_s_29626.Vm, !1);
                for (let v_t_29628 = 0; v_t_29628 < 2; ++v_t_29628) v_s_29626.Um ? 0 === v_t_29628 ? v_l_29616.ze[v_t_29628] = v_h_29553.listItemActiveSp.Ve(!0) : 1 === v_t_29628 && (v_l_29616.ze[v_t_29628] = v_h_29553.listItemInactiveSp.Ve(!0)) : 0 === v_t_29628 ? v_l_29616.ze[v_t_29628] = v_h_29553.listItemActive.Ve(!0) : 1 === v_t_29628 && (v_l_29616.ze[v_t_29628] = v_h_29553.listItemInactive.Ve(!0)), v_l_29616.ze[v_t_29628].Te = 0, v_l_29616.ze[v_t_29628].Qt = 0, v_l_29616.ze[v_t_29628].Be = !1, v_l_29616.ze[v_t_29628].ot("listItemLabel").Wt = v_s_29626.ct, null === v_s_29626.Om ? (v_l_29616.ze[v_t_29628].ot("listItemIcon").Je = "icon" + v_Q_27767[v_s_29626.Vm], v_l_29616.ze[v_t_29628].ot("charaSkillCount").Be = !1) : (v_l_29616.ze[v_t_29628].ot("listItemIcon").Je = "icon" + v_Q_27767[v_s_29626.Vm] + "C", v_l_29616.ze[v_t_29628].ot("charaSkillCount").Be = !0, v_l_29616.ze[v_t_29628].ot("charaSkillCount").Wt = v_Qa_28089(v_s_29626.Om, 0, 999).toString()), v_v_29555.Mi !== v_a_29627 && (v_l_29616.ze[v_t_29628].ot("listItemBadgeSetBg").Be = !1), v_s_29626.Um && v_e_29623 ? (0 === v_t_29628 ? v_r_29625 = v_h_29553.listItemHeaderActive.Ve(!0) : 1 === v_t_29628 && (v_r_29625 = v_h_29553.listItemHeaderInactive.Ve(!0)), v_r_29625.Be = !0, v_r_29625.ot("listItemHeaderImg").Je = "vertListTabSp", v_l_29616.ze[v_t_29628].hn(v_r_29625, v_l_29616.ze[v_t_29628].We[0])) : v_e_29623 && v_s_29626.Vm !== v_gt_27748 && (0 === v_t_29628 ? v_r_29625 = v_h_29553.listItemHeaderActive.Ve(!0) : 1 === v_t_29628 && (v_r_29625 = v_h_29553.listItemHeaderInactive.Ve(!0)), v_r_29625.Be = !0, v_r_29625.ot("listItemHeaderImg").Je = "vertListTabSkill" + v_Q_27767[v_s_29626.Vm], v_l_29616.ze[v_t_29628].hn(v_r_29625, v_l_29616.ze[v_t_29628].We[0]));
                v_e_29623 && ++v_n_29624, v_l_29616.En = v_s_29626.En, v_l_29616.Pi = v_n_29624, v_l_29616.Di = v_e_29623, v_d_29554.push(v_l_29616), ++v_n_29624, ++v_a_29627;
              }
            }
            v_m_29560(), v_S_29565(), v_el_28148(v_u_29549.lt.yk(44), v_a_29601, !0);
            for (const v_r_29629 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"], ["prevGroup", "PrevGroup", 10, 2, v_X0_27795, !0, "up"], ["nextGroup", "NextGroup", 12, 2, v_X0_27795, !0, "down"], ["exceedLimit", "ExceedLimit", 14, 2, v_ci_27797, !1, ""]]) menuSystem.vt(v_r_29629[0], v_r_29629[1], v_r_29629[2], v_r_29629[3], v_r_29629[4], v_r_29629[5], !1, !1, v_r_29629[6], function (v_t_29630, v_i_29631) {
              "down" === v_t_29630 && v_y_29564(this.Ae);
            });
            menuSystem.yv(), v_k_29562(), sceneManager.ft(new v_M1_27898(v_b_29563, void 0)), v_u_29549.lt.yk(64).Be = !1, v_u_29549.Jt = !0, v_u_29549.e8(2), v_u_29549.e8(0), menuSystem.Ct(!0), renderer.W6(() => {
              v_v_29555.Ee && v_v_29555.Ee(v_Qt_27768, 0), menuSystem.Ct(!1);
            }, v_Ge_28204(30));
          }]);
        },
        Gi: () => v_v_29555.Gi
      };
    }(),
    uiComponentB = function () {
      const v_r_29632 = "cache:charaLg:";
      function v_c_29633() {
        this.ze = null;
      }
      function v_e_29634() {
        this.Bn = void 0, this.Mn = void 0, this.Gn = void 0, this.Gi = !1, this.Ni = 0, this.Mi = 0, this.Ui = !1, this.Ee = void 0;
      }
      let v_u_29635 = void 0,
        v_f_29636 = void 0,
        v_n_29637 = {
          Oi: void 0,
          jn: [],
          charaInfoName: void 0,
          charaInfoIllustrator: void 0
        },
        v___29638 = {},
        v_h_29639 = [],
        v_d_29640 = new v_e_29634();
      function v_s_29641() {
        return !!v_d_29640.Ui;
      }
      function v_i_29649(v_t_29648) {
        var v_i_29649;
        v_s_29641() || (v_t_29648 = mathMin(mathMax(v_t_29648, 0), v_h_29639.length - 1)) !== v_d_29640.Ni && (v_d_29640.Ui = !0, v_i_29649 = v_d_29640.Ni, v_d_29640.Ni = v_t_29648, v_h_29639[v_i_29649], v_d_29640.Ni, v_h_29639[v_d_29640.Ni], v_p_29647(), v_v_29643(), renderer.W6(() => {
          v_d_29640.Ui = !1;
        }, 100));
      }
      function v_v_29643() {
        var v_t_29650 = -(142 * v_h_29639.length - 42) / 2;
        v_n_29637.Oi.rn(v_Vo_28136, v_jo_28134, 6, 0), v_n_29637.Oi.$e(v_t_29650 + 142 * v_d_29640.Ni + 50);
      }
      function v_w_29644() {
        menuSystem.kt("left", v_d_29640.Ni <= 0), menuSystem.kt("right", v_d_29640.Ni >= v_h_29639.length - 1), menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", !0), menuSystem.Cv(!0);
      }
      function v_g_29645() {
        v_s_29641() || menuSystem.St("enter");
      }
      function v_m_29646(v_t_29651) {
        switch (v_t_29651) {
          case "left":
            v_Ae_27892.dn("move_cursor"), v_i_29642(v_d_29640.Ni - 1);
            break;
          case "right":
            v_Ae_27892.dn("move_cursor"), v_i_29642(v_d_29640.Ni + 1);
            break;
          case "enter":
            return v_Ae_27892.dn("set_skill"), sceneManager._t(), menuSystem._t(), menuSystem.It(!1), v_h_29639[v_d_29640.Mi].ze.ot("listItemBadgeSetBg").Be = !1, v_d_29640.Mi = v_d_29640.Ni, v_h_29639[v_d_29640.Mi].ze.ot("listItemBadgeSetBg").Be = !0, v_u_29635.e8(3, v_h_29639[v_d_29640.Mi].ze), void renderer.W6(() => {
              v_d_29640.Ee && v_d_29640.Ee(v_ti_27769, v_d_29640.Mi), v_u_29635.e8(2), renderer.W6(() => {
                renderer._i("transformSelect"), v_d_29640.Ee && v_d_29640.Ee(v_ii_27770, v_d_29640.Mi);
              }, 250);
            }, 500);
        }
        v_w_29644();
      }
      function v_p_29647() {
        var v_t_29652 = v_Er_27955(v_d_29640.Mn, v_d_29640.Gn, v_d_29640.Ni);
        v_n_29637.charaInfoName.Wt = v_d_29640.Mn.ct[v_t_29652], v_n_29637.charaInfoIllustrator.Wt = v_d_29640.Mn.tf[v_t_29652];
        let v_i_29653;
        for (v_i_29653 of v_n_29637.jn) renderer.Yt.Zt[v_r_29632 + v_t_29652] && (v_i_29653.zt = !0, v_i_29653.Xt = v_r_29632 + v_t_29652);
        for (let v_t_29654 = 0; v_t_29654 < v_h_29639.length; ++v_t_29654) v_h_29639[v_t_29654].ze.ot("listItemActiveOverlay").Be = v_t_29654 === v_d_29640.Ni;
        v_u_29635.e8(1);
      }
      return {
        ue: function (v_i_29655) {
          v_Le_28076([v_e_29656 => {
            languagePackages.it("ui/transformSelect.rsb", function (v_t_29657) {
              v_t_29657 ? (v_t_29657 = new v_Dl_28181(v_t_29657), renderer.nt(v_t_29657.rt(renderer.p5()), v_t_29658 => {
                v_u_29635 = v_t_29658, v_f_29636 = v_t_29658.lt.yk(25), v_n_29637.Oi = v_t_29658.lt.yk(24), v_n_29637.jn = v_t_29658.lt.Yc("charaImg"), v_n_29637.jn = v_n_29637.jn.concat(v_t_29658.lt.Yc("charaImgFrontShadowFx")), v_n_29637.charaInfoName = v_t_29658.lt.yk(20), v_n_29637.charaInfoIllustrator = v_t_29658.lt.yk(21);
                var v_i_29659 = v_t_29658.lt.yk(26);
                for (let v_t_29660 = 0; v_t_29660 < v_i_29659.We.length; ++v_t_29660) v_i_29659.We[v_t_29660].Be = !1, v___29638[v_i_29659.We[v_t_29660].ct] = v_i_29659.We[v_t_29660];
                v_Me_28078(v_e_29656);
              })) : v_i_29655();
            });
          }, v_t_29661 => {
            v_Fe_28101(v_i_29655);
          }]);
        },
        T0: function (v_a_29662, v_o_29663, v_l_29664, v_t_29665) {
          v_Le_28076([v_i_29666 => {
            menuSystem.ft(), (v_d_29640 = new v_e_29634()).Ee = v_t_29665, v_d_29640.Gi = !0, v_u_29635.Jt = !1, renderer.ut("transformSelect", v_u_29635, 60, v_t_29667 => {
              v_Me_28078(v_i_29666);
            });
          }, v_t_29668 => {
            let v_n_29669;
            v_co_28100(0, v_a_29662.Hm, (v_i_29670, v_t_29671, v_e_29672) => {
              dataLoader.Si(v_a_29662, v_e_29672, v_t_29673 => {
                v_n_29669 = v_r_29632 + v_e_29672, renderer.Yt.Zt[v_n_29669] && renderer.Yt.Zt[v_n_29669].free(), renderer.Yt.Zt[v_n_29669] = v_t_29673, v_i_29670();
              });
            }, () => v_Me_28078(v_t_29668));
          }, v_t_29674 => {
            v_d_29640.Mn = v_a_29662, v_d_29640.Bn = v_o_29663, v_d_29640.Gn = v_l_29664, v_d_29640.Mi = v_d_29640.Ni = v_o_29663 ? v_o_29663.jm : 0, v_u_29635.lt.yk(9).Be = !v_a_29662.ub, v_u_29635.lt.yk(13).Be = v_a_29662.ub;
            var v_i_29675 = v_a_29662.Hm,
              v_e_29676 = (v_h_29639 = [], v_f_29636.tn(), 1 < v_i_29675 ? -(142 * (v_i_29675 + 1) - 42) / 2 : -50),
              v_n_29677 = new v_c_29633();
            if (v_n_29677.ze = v___29638.listItemDefault.Ve(!0), v_n_29677.ze.Te = 50 + v_e_29676, v_n_29677.ze.Qt = 0, v_n_29677.ze.Be = !0, 0 !== v_d_29640.Mi && (v_n_29677.ze.ot("listItemBadgeSetBg").Be = !1), v_h_29639.push(v_n_29677), v_f_29636.Ze(v_n_29677.ze), 1 < v_i_29675) for (let v_t_29679 = 0; v_t_29679 < v_i_29675; ++v_t_29679) {
              var v_r_29678 = new v_c_29633();
              v_r_29678.ze = v___29638.listItem.Ve(!0), v_r_29678.ze.Te = v_e_29676 + 142 * (v_t_29679 + 1) + 50, v_r_29678.ze.Qt = 0, v_r_29678.ze.Be = !0, v_r_29678.ze.ot("listItemCharaImg").zt = !0, v_r_29678.ze.ot("listItemCharaImg").Xt = "chara:" + v_t_29679 + ":0:" + v_d_29640.Mn.C0, v_d_29640.Mi !== v_t_29679 + 1 && (v_r_29678.ze.ot("listItemBadgeSetBg").Be = !1), v_r_29678.ze.ot("listItemActiveOverlay").Be = v_t_29679 === v_d_29640.Ni, v_h_29639.push(v_r_29678), v_f_29636.Ze(v_r_29678.ze);
            }
            v_v_29643(), v_p_29647();
            for (const v_s_29680 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"]]) menuSystem.vt(v_s_29680[0], v_s_29680[1], v_s_29680[2], v_s_29680[3], v_s_29680[4], v_s_29680[5], !1, !1, v_s_29680[6], function (v_t_29681, v_i_29682) {
              "down" === v_t_29681 && v_m_29646(this.Ae);
            });
            menuSystem.yv(), v_w_29644(), sceneManager.ft(new v_M1_27898(v_g_29645, void 0)), v_u_29635.Jt = !0, v_u_29635.e8(0), menuSystem.Ct(!0), renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(30));
          }]);
        },
        Gi: () => v_d_29640.Gi
      };
    }(),
    uiComponentC = function () {
      function v_n_29683() {
        this.Gi = !1, this.Ni = 0, this.Ee = void 0;
      }
      let v_r_29684 = void 0,
        v_s_29685 = new v_n_29683(),
        v_a_29686 = [];
      function v_o_29687(v_t_29692) {
        v_t_29692 = mathMin(mathMax(v_t_29692, 0), v_a_29686.length - 1);
        v_t_29692 !== v_s_29685.Ni && (v_s_29685.Ni = v_t_29692, v_l_29688());
      }
      function v_l_29688() {
        for (let v_t_29693 = 0; v_t_29693 < v_a_29686.length; ++v_t_29693) v_a_29686[v_t_29693].Nn = v_s_29685.Ni === v_t_29693 ? 0 : 1;
        v_r_29684.lt.yk(6).Te = v_a_29686[v_s_29685.Ni].Te - 30;
      }
      function v_c_29689() {
        menuSystem.St("cancel");
      }
      function v_u_29690() {
        menuSystem.kt("left", v_s_29685.Ni <= 0), menuSystem.kt("right", v_s_29685.Ni >= v_a_29686.length - 1), menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("enter", !0), menuSystem.wt("cancel", !0), menuSystem.Cv(!0);
      }
      function v_f_29691(v_t_29694) {
        sceneManager._t(), menuSystem._t(), menuSystem.It(!1), v_r_29684.e8(v_t_29694 ? 1 : 0), renderer.W6(() => {
          renderer._i("musicSelectSort"), v_s_29685.Ee && v_s_29685.Ee("exit", v_t_29694 ? v_s_29685.Ni : null);
        }, v_Ge_28204(20));
      }
      return {
        ue: function (v_e_29695) {
          v_Le_28076([v_i_29696 => {
            languagePackages.it("ui/musicSort.rsb", function (v_t_29697) {
              v_t_29697 ? (v_t_29697 = new v_Dl_28181(v_t_29697), renderer.nt(v_t_29697.rt(renderer.p5()), v_t_29698 => {
                v_r_29684 = v_t_29698, v_a_29686 = [v_r_29684.lt.yk(7), v_r_29684.lt.yk(8), v_r_29684.lt.yk(9)], v_Me_28078(v_i_29696);
              })) : v_e_29695();
            });
          }, v_t_29699 => {
            v_Fe_28101(v_e_29695);
          }]);
        },
        T0: function (v_e_29700, v_t_29701) {
          v_Le_28076([v_i_29702 => {
            menuSystem.ft(), menuSystem.Ct(!0), (v_s_29685 = new v_n_29683()).Ee = v_t_29701, v_s_29685.Gi = !0, v_r_29684.Jt = !1, renderer.ut("musicSelectSort", v_r_29684, 60, v_t_29703 => {
              v_Me_28078(v_i_29702);
            });
          }, v_t_29704 => {
            v_s_29685.Ni = v_e_29700, v_l_29688();
            for (const v_i_29705 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"], ["cancel", "Cancel", 10, 2, v_si_27792, !1, ""]]) menuSystem.vt(v_i_29705[0], v_i_29705[1], v_i_29705[2], v_i_29705[3], v_i_29705[4], v_i_29705[5], !1, !1, v_i_29705[6], function (v_t_29706, v_i_29707) {
              if ("down" === v_t_29706) {
                switch (this.Ae) {
                  case "left":
                    v_Ae_27892.dn("move_cursor"), v_o_29687(v_s_29685.Ni - 1);
                    break;
                  case "right":
                    v_Ae_27892.dn("move_cursor"), v_o_29687(v_s_29685.Ni + 1);
                    break;
                  case "enter":
                    return void !(v_Ae_27892.dn("change_value"), v_f_29691(!0));
                  case "cancel":
                    return void !(v_Ae_27892.dn("menu_back"), v_f_29691(!1));
                }
                v_u_29690();
              }
            });
            menuSystem.yv(), v_u_29690(), sceneManager.ft(new v_M1_27898(v_c_29689, void 0)), v_r_29684.Jt = !0, v_r_29684.e8(2), renderer.W6(() => {
              menuSystem.Ct(!1);
            }, v_Ge_28204(10));
          }]);
        },
        Gi: () => v_s_29685.Gi
      };
    }(),
    v_nr_27925 = function () {
      const v_V_29708 = 1,
        v_W_29709 = 2,
        v_y_29710 = 10,
        v_m_29711 = 11,
        v_p_29712 = 15,
        v_k_29713 = 16,
        v_X_29714 = 17,
        v_z_29715 = 20,
        v_K_29716 = 21,
        v_b_29717 = 22,
        v_S_29718 = 10,
        v_A_29719 = 11,
        v_Y_29720 = 12,
        v_q_29721 = 20;
      const v_x_29722 = 23,
        v_C_29723 = 40,
        v_Z_29724 = 50,
        v_$_29725 = 51,
        v_Q_29726 = 60,
        v_tt_29727 = 61,
        v_it_29728 = 62,
        v_et_29729 = 70,
        v_nt_29730 = 71,
        v_rt_29731 = 75,
        v_st_29732 = ":/_s0",
        v_at_29733 = ":/_s1",
        v_ot_29734 = ":/_s2",
        v_lt_29735 = ":/_s3",
        v_ct_29736 = ":/_s5",
        v_ut_29737 = ":/_s6",
        v_ft_29738 = ":/_s7",
        v__t_29739 = ":/_s8/";
      const v_T_29740 = ["1", "2", "3", "4", "5", "6", "7", "7+", "8", "8+", "9", "9+", "10", "10+", "11", "11+", "12", "12+", "13", "13+", "14", "14+", "15", "15+"];
      function v_I_29741() {
        this.Ei = "", this.Fi = 0, this.Hn = 0, this.Bi = [];
      }
      function v_P_29742() {
        this.Fi = 0, this.ze = null, this.Un = 0, this.Vn = 0, this.On = {};
      }
      function v_R_29743() {
        this.Jn = [], this.Wn = 0, this.Kn = 0, this.zn = !0, this.Xn = !0, this.Zn = !1, this.Yn = 0, this.$n = void 0, this.qn = void 0, this.OP = void 0, this.Qn = void 0, this.e0 = void 0, this.t0 = void 0, this.wx = void 0, this.yR = void 0;
      }
      function v_e_29744() {
        this.Gi = !1, this.ji = 0, this.Ni = 0, this.Hi = !1, this.Ui = !1, this.gn = !1, this.i0 = !1, this.n0 = !1, this.r0 = "", this.a0 = null, this.o0 = 0, this.l0 = 3, this.ie = 0, this.u0 = !1, this.f0 = 0, this._0 = null;
      }
      let v_L_29745 = void 0,
        v_c_29746 = void 0,
        v___29747 = void 0,
        v_r_29748 = void 0,
        v_h_29749 = void 0,
        v_M_29750 = {
          Oi: void 0,
          Ji: void 0,
          wR: void 0,
          Wi: void 0,
          Ki: void 0,
          zi: void 0,
          Xi: void 0,
          o4: void 0,
          l4: void 0,
          wn: void 0,
          pn: void 0,
          h0: void 0,
          v0: void 0,
          g0: void 0,
          gx: void 0,
          VP: void 0,
          mL: void 0
        },
        v_E_29751 = {},
        v_ht_29752 = [],
        v_D_29753 = {},
        v_dt_29754 = {},
        v_vt_29755 = [],
        v_F_29756 = {},
        v_B_29757 = {
          w0: "",
          p0: 0,
          kx: 0
        },
        v_N_29758 = {
          w0: "UMIGURI/uni"
        },
        v_wt_29759 = !1,
        v_u_29760 = {
          k0: !1,
          J6: !1
        },
        v_gt_29761 = [],
        v_G_29762 = new v_e_29744();
      const v_mt_29763 = function () {
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
          0 < v_u_29815 || (v_o_29811 = !1, v_g_29822(), v_v_29820 && renderer.iy(v_v_29820), v_l_29813 && (v_f_29816 ? (v_Ae_27892.n6("music_select", null, 0, v_d_29819), v_f_29816 = !1) : v_c_29814 && v_Se_27889.n6(v_c_29814, 0, v_d_29819)), v_s_29809 = null, v_l_29813 = !1, v_uo_28102(function () {
            v_c_29814 && v_Se_27889.e6(v_c_29814), v_c_29814 = 0, v_m_29823(), v_t_29826();
          }, v_d_29819 + 5));
        }
        function v_k_29825(v_i_29827) {
          var v_t_29828;
          0 < v_u_29815 || (v_a_29810 = !1, (null === v_r_29808 || (v_t_29828 = v_r_29808.m5 || 0, (v_r_29808.S5 || 0) - v_t_29828 < 5) || "" === v_r_29808.nk) && v_f_29816) || v_Le_28076([function (v_t_29829) {
            if (v_i_29827 || !v_l_29813) return v_Me_28078(v_t_29829);
            v_p_29824(function () {
              v_Me_28078(v_t_29829);
            });
          }, function (v_t_29830) {
            var v_i_29831,
              v_e_29832 = function () {};
            if (!(0 < v_u_29815)) v_l_29813 = !0, null === v_r_29808 || (v_i_29831 = v_r_29808.m5 || 0, (v_r_29808.S5 || 0) - v_i_29831 < 5) ? v_n_29833() : (v_g_29822(), v_s_29809 = v_r_29808, v_r_29808 = null, v_br_27943.b0(v_s_29809.rk, v_s_29809.nk, function (v_t_29834) {
              v_t_29834 ? v_Se_27889.Sv(v_t_29834).then(v_t_29835 => {
                v_t_29835 ? (v_c_29814 = v_t_29835, function v_t_29836() {
                  v_Se_27889.i6(v_c_29814), v_Se_27889.o6(v_c_29814, v_s_29809.m5), v_Se_27889.Mc(v_c_29814, 0), v_Se_27889.n6(v_c_29814, v_h_29818, v_d_29819), v_Se_27889.dn(v_c_29814), v_v_29820 = renderer.W6(function () {
                    v_o_29811 ? v_p_29824(function () {}) : (v_Se_27889.n6(v_c_29814, 0, v_d_29819), v_v_29820 = renderer.W6(function () {
                      v_o_29811 || (v_a_29810 ? v_k_29825(!0) : v_t_29836());
                    }, v_d_29819 + 1));
                  }, 1e3 * (v_s_29809.S5 - v_s_29809.m5) - v_d_29819);
                }(), renderer.W6(function () {
                  v_m_29823(), v_e_29832();
                }, v_d_29819 + 1)) : (v_w_29821[v_s_29809.w0] = !0, v_m_29823(), v_n_29833());
              }) : (v_w_29821[v_s_29809.w0] = !0, v_m_29823(), v_n_29833());
            }));
            function v_n_29833() {
              v_g_29822(), v_s_29809 = null, v_f_29816 = !0, v___29817 || (v_Ae_27892.dn("music_select"), v___29817 = !0), v_Ae_27892.n6("music_select", 0, v_h_29818, v_d_29819), v_uo_28102(function () {
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
              v_Ae_27892.i6("music_select"), v___29817 = !1;
            });
          }
        };
      }();
      let v_s_29764 = 0;
      function v_pt_29765() {
        v_s_29764 && clearInterval(v_s_29764), v_s_29764 = 0;
      }
      function v_l_29766() {
        return v_G_29762.gn || v_G_29762.Ui || !!v_G_29762.n0;
      }
      function v_n_29767() {
        return !v_G_29762.i0 && !v_G_29762.a0.Zn;
      }
      function v_d_29768() {
        return null === v_G_29762.a0 ? [] : v_G_29762.a0.Jn;
      }
      function v_f_29769() {
        return null === v_G_29762.a0 ? null : v_G_29762.a0.Jn[v_G_29762.ji].Bi[v_G_29762.Ni];
      }
      function v_kt_29770(v_e_29838, v_n_29839, v_r_29840) {
        if (!v_l_29766()) {
          var v_s_29841 = v_d_29768()[v_G_29762.ji],
            v_e_29838 = mathMin(mathMax(v_e_29838, 0), v_s_29841.Bi.length - 1);
          if (v_e_29838 !== v_G_29762.Ni) {
            v_G_29762.Ui = !0;
            var v_a_29842 = v_G_29762.Ni;
            v_G_29762.Ni = v_e_29838, v_H_29781(0, v_s_29841.Bi[v_a_29842], v_G_29762.Ni, v_s_29841.Bi[v_G_29762.Ni]), v_G_29762.a0.t0 && v_G_29762.a0.t0.call(v_G_29762.a0, v_a_29842, v_s_29841.Bi[v_a_29842], v_G_29762.Ni, v_s_29841.Bi[v_G_29762.Ni]);
            let v_t_29843 = 6,
              v_i_29844 = v_ui_27806;
            v_n_29839 === v_gi_27815 ? (v_i_29844 = v_gi_27815, v_t_29843 = 0) : 1 === v_r_29840 ? (v_i_29844 = v_vi_27813, v_t_29843 = 3) : 1 < v_r_29840 && (v_i_29844 = v_gi_27815, v_t_29843 = 0), v_v_29772(v_i_29844), v_G_29762.Hi || v_L_29745.e8(8), v_t_29843 <= 0 ? v_G_29762.Ui = !1 : renderer.W6(() => {
              v_G_29762.Ui = !1;
            }, v_Ge_28204(6));
          }
        }
      }
      function v_bt_29771(v_e_29845, v_n_29846, v_r_29847) {
        if (!v_l_29766()) {
          var v_s_29848 = v_qa_28086(v_e_29845, v_d_29768().length);
          let v_t_29849 = !1;
          if (void 0 !== v_n_29846 && (v_n_29846 & v_fi_27807 || v_n_29846 & v__i_27808) && (v_t_29849 = !0), v_G_29762.Hi ? v_L_29745.e8(2) : v_L_29745.e8(8), v_t_29849) {
            v_G_29762.a0.Zn = !0, v_G_29762.a0.Yn = v_n_29846, v_J_29784();
            v_e_29845 = v_G_29762.ji;
            v_G_29762.ji = v_s_29848;
            let v_t_29850 = 6,
              v_i_29851 = v_n_29846;
            v_G_29762.Hi ? 1 === v_r_29847 ? (v_i_29851 |= v_vi_27813, v_t_29850 = 3) : 1 < v_r_29847 && (v_i_29851 = v_gi_27815, v_t_29850 = 0) : (v_t_29850 = 54, menuSystem.T9(v_Ge_28204(v_t_29850))), v_yt_29773(v_i_29851), !function v_r_29855(v_t_29852, v_s_29853, v_i_29854) {
              if (v_G_29762.i0) return v_G_29762.a0.Yn = v_i_29854, void (v_G_29762.a0.Zn = !0);
              v_G_29762.a0.Zn = !1;
              v_G_29762.i0 = !0;
              v_G_29762.a0.Yn = v_i_29854;
              let v_a_29856 = v_G_29762.a0;
              let v_o_29857 = v_d_29768()[v_t_29852];
              v_a_29856.wx && v_a_29856.wx.call(v_a_29856);
              for (let v_t_29858 = 0; v_t_29858 < v_o_29857.Bi.length; ++v_t_29858) v_o_29857.Bi[v_t_29858].ze.nn(), v_o_29857.Bi[v_t_29858].ze.Be = !1;
              v_v_29772(v_ui_27806, v_t_29852, v_s_29853);
              v_v_29772(v_i_29854 & v_fi_27807 ? v_di_27810 : v_hi_27809, v_t_29852, v_s_29853);
              renderer.W6(() => {
                let v_t_29859 = v_G_29762.ji,
                  v_i_29860 = 0,
                  v_e_29861 = v_d_29768()[v_t_29859],
                  v_n_29862 = v_a_29856.Yn;
                v_n_29862 & v_fi_27807 && (v_i_29860 = v_e_29861.Bi.length - 1), v_G_29762.Ni = v_i_29860, v_a_29856.Zn = !1;
                for (let v_t_29863 = 0; v_t_29863 < v_e_29861.Bi.length; ++v_t_29863) v_e_29861.Bi[v_t_29863].ze.nn();
                v_v_29772(v_n_29862 & v_fi_27807 ? v_hi_27809 : v_di_27810, v_t_29859, v_i_29860 + (v_n_29862 & v_fi_27807 ? 1 : -1), !0), v_v_29772(v_wi_27814, v_t_29859, v_i_29860 + (v_n_29862 & v_fi_27807 ? 1 : -1), !0), renderer.W6(() => {
                  v_v_29772(v_wi_27814, v_t_29859, v_i_29860);
                }, v_Ge_28204(9.5)), renderer.W6(() => {
                  v_H_29781(0, v_o_29857.Bi[v_s_29853], v_i_29860, v_e_29861.Bi[v_i_29860]), v_a_29856.yR && v_a_29856.yR.call(v_a_29856), v_a_29856.t0 && v_a_29856.t0.call(v_a_29856, v_s_29853, v_o_29857.Bi[v_s_29853], v_i_29860, v_e_29861.Bi[v_i_29860]), v_G_29762.i0 = !1, v_J_29784(), v_a_29856.Zn && (v_t_29859 === v_G_29762.ji && v_n_29862 === v_a_29856.Yn ? v_G_29762.a0.Zn = !1 : v_r_29855(v_t_29859, v_i_29860, v_a_29856.Yn));
                }, v_Ge_28204(24));
              }, v_Ge_28204(30));
            }(v_e_29845, v_G_29762.Ni, v_n_29846), 0 < v_t_29850 && (v_G_29762.gn = !0, renderer.W6(() => {
              v_G_29762.gn = !1;
            }, v_Ge_28204(v_t_29850)));
          } else {
            v_G_29762.ji = v_s_29848;
            for (let v_t_29864 = 0; v_t_29864 < v_d_29768()[v_s_29848].Bi.length; ++v_t_29864) v_d_29768()[v_s_29848].Bi[v_t_29864].ze.Be = !1;
            v_yt_29773(v_gi_27815), v_v_29772(v_gi_27815);
          }
        }
      }
      function v_v_29772(v_i_29865, v_t_29866, v_e_29867, v_n_29868) {
        v___29747.tn(), v_h_29749.tn();
        var v_r_29869,
          v_s_29870 = void 0 === v_t_29866 ? v_G_29762.ji : v_t_29866,
          v_a_29871 = void 0 === v_e_29867 ? v_G_29762.Ni : v_e_29867,
          v_o_29872 = v_d_29768()[v_s_29870];
        let v_l_29873 = 0;
        var v_c_29874 = void 0 !== v_i_29865 && (v_i_29865 & v_hi_27809 || v_i_29865 & v_di_27810),
          v_u_29875 = void 0 !== v_i_29865 && v_i_29865 & v_wi_27814,
          v_f_29876 = void 0 !== v_i_29865 && v_i_29865 & v_vi_27813 ? 3 : 6;
        for (let v_t_29877 = -4; v_t_29877 < 5; ++v_t_29877) (v_r_29869 = v_t_29877 + v_a_29871) < 0 || v_o_29872.Bi.length <= v_r_29869 || (0 === v_t_29877 ? v_l_29873 = 0 : (v_l_29873 = 310 * v_t_29877, v_l_29873 += 120 * (0 < v_l_29873 ? 1 : -1)), v_c_29874 && (v_i_29865 & v_hi_27809 ? v_l_29873 -= 310 * (4.7 + mathMin(v_o_29872.Bi.length - 1 - v_a_29871, 3)) : v_l_29873 += 310 * (4.7 + mathMin(v_a_29871, 3))), (!1 === (v_r_29869 = v_o_29872.Bi[v_r_29869].ze).Be || v_i_29865 & v_gi_27815) && v_r_29869.nn(), !v_c_29874 || -4 !== v_t_29877 && 4 !== v_t_29877 ? v_r_29869.Be = !0 : v_r_29869.Be = !1, (0 === v_t_29877 ? v_h_29749 : v___29747).Ze(v_r_29869), v_c_29874 ? (v_r_29869.rn(v_Vo_28136, v_Uo_28131, 24, 0), v_r_29869.rn(v_Wo_28137, v_Uo_28131, 10, 0), v_r_29869.rn(v_Xo_28138, v_Uo_28131, 10, 0), v_r_29869.rn(v_zo_28139, v_Uo_28131, 10, 0)) : v_u_29875 ? (v_r_29869.rn(v_Vo_28136, v_Uo_28131, 10, 0), v_r_29869.rn(v_Wo_28137, v_Uo_28131, 10, 0), v_r_29869.rn(v_Xo_28138, v_Uo_28131, 10, 0), v_r_29869.rn(v_zo_28139, v_Uo_28131, 10, 0)) : (v_r_29869.rn(v_Xo_28138, v_jo_28134, v_f_29876, 0), v_r_29869.rn(v_zo_28139, v_jo_28134, v_f_29876, 0), v_r_29869.rn(v_Vo_28136, v_jo_28134, v_f_29876, 0), v_r_29869.rn(v_Wo_28137, v_jo_28134, v_f_29876, 0)), v_r_29869.$e(v_l_29873, v_c_29874 || 0 !== v_t_29877 ? 26 : 0), v_c_29874 || 0 !== v_t_29877 ? v_r_29869.ln(.7, .7) : v_r_29869.ln(1, 1));
        v_n_29868 || (v_s_29870 = v_e_29867, v_n_29868 = void 0 === (v_n_29868 = v_t_29866) ? v_G_29762.ji : v_n_29868, v_s_29870 = void 0 === v_s_29870 ? v_G_29762.Ni : v_s_29870, v_G_29762.a0.Xn ? (v_M_29750.Wi.Be = !0, v_M_29750.Ki.Be = !0, v_M_29750.Xi.Be = !0, 0 < (v_n_29868 = v_d_29768()[v_n_29868]).Bi.length ? (v_M_29750.Wi.Wt = mathMin(mathMax(v_s_29870 + 1, 1), 9999).toString(), v_M_29750.Ki.Wt = "S" + mathMin(mathMax(v_n_29868.Bi.length, 0), 9999).toString()) : (v_M_29750.Wi.Wt = "0", v_M_29750.Ki.Wt = "S0"), 0 < v_n_29868.Bi.length ? (v_e_29867 = mathMax(1 / v_n_29868.Bi.length, .04), v_M_29750.zi.Be = !0, v_M_29750.zi.Oe[0] = v_e_29867, 1 === v_n_29868.Bi.length ? v_M_29750.zi.on[0] = 0 : v_M_29750.zi.on[0] = v_s_29870 / (v_n_29868.Bi.length - 1) * (1 - v_e_29867) * 690) : v_M_29750.zi.Be = !1) : (v_M_29750.Wi.Be = !1, v_M_29750.Ki.Be = !1, v_M_29750.zi.Be = !1, v_M_29750.Xi.Be = !1));
      }
      function v_yt_29773(v_n_29878, v_t_29879) {
        var v_r_29880 = void 0 === v_t_29879 ? v_G_29762.ji : v_t_29879,
          v_s_29881 = void 0 !== v_n_29878 && v_n_29878 & v_vi_27813 ? 5 : 10;
        if (v_G_29762.a0.zn) {
          v_M_29750.l4.Be = !0, v_M_29750.o4.Be = !0;
          var v_a_29882, v_o_29883;
          let v_i_29886 = 0,
            v_e_29887 = 0;
          var v_l_29884,
            v_c_29885 = void 0 !== v_n_29878 && (v_n_29878 & v_fi_27807 || v_n_29878 & v__i_27808);
          for (let v_t_29888 = -4; v_t_29888 < 5; ++v_t_29888) {
            switch (v_a_29882 = v_qa_28086(v_t_29888 + v_r_29880, v_d_29768().length), 0 === v_t_29888 ? v_i_29886 = 0 : (v_i_29886 = 250 * v_t_29888, v_i_29886 += 178 * (0 < v_i_29886 ? 1 : -1)), v_c_29885 && (0 === (v_l_29884 = v_t_29888 + (v_n_29878 & v_fi_27807 ? -1 : 1)) ? v_e_29887 = 0 : (v_e_29887 = 250 * v_l_29884, v_e_29887 += 178 * (0 < v_e_29887 ? 1 : -1))), v_o_29883 = v_ht_29752[v_t_29888 + 4], v_d_29768()[v_a_29882].Fi) {
              case v_p_29712:
                v_o_29883.We[0].Je = "catPanelLevel";
                break;
              case v_k_29713:
                v_o_29883.We[0].Je = "catPanelUltima";
                break;
              case v_X_29714:
                v_o_29883.We[0].Je = "catPanelWorldsEnd";
                break;
              case v_z_29715:
                v_o_29883.We[0].Je = "catPanelClass";
                break;
              case v_K_29716:
                v_o_29883.We[0].Je = "catPanelUserBox";
                break;
              case v_b_29717:
                v_o_29883.We[0].Je = "catPanelCoop";
                break;
              default:
                v_o_29883.We[0].Je = "catPanelCategory";
            }
            v_o_29883.nn(), v_o_29883.rn(v_Xo_28138, v_jo_28134, v_s_29881, 0), v_o_29883.rn(v_zo_28139, v_jo_28134, v_s_29881, 0), v_o_29883.rn(v_Vo_28136, v_Ho_28132, v_s_29881, 0), v_c_29885 && (v_o_29883.$e(v_e_29887), v_t_29888 + (v_n_29878 & v_fi_27807 ? -1 : 1) === 0 ? v_o_29883.ln(1, 1) : v_o_29883.ln(.7, .7)), v_o_29883.Be = !0, v_o_29883.We[1].Wt = v_d_29768()[v_a_29882].Ei, 0 === v_t_29888 && v_o_29883.Kt(), v_o_29883.$e(v_i_29886), 0 === v_t_29888 ? v_o_29883.ln(1, 1) : v_o_29883.ln(.7, .7);
          }
        } else {
          for (let v_t_29889 = 0; v_t_29889 < 9; ++v_t_29889) v_ht_29752[v_t_29889].Be = !1;
          v_M_29750.l4.Be = !1, v_M_29750.o4.Be = !1;
        }
      }
      function v_St_29774(v_t_29890, v_i_29891) {
        v_l_29766() && !v_i_29891 || (v_G_29762.Ui = !0, v_M_29750.Oi.Be = !0, v_M_29750.Ji.Be = !0, v_t_29890 ? (v_M_29750.wn.$e(60, -348), v_M_29750.pn.$e(-60, -348), v_G_29762.Hi === v_t_29890 || v_i_29891 ? (v_M_29750.Oi.Be = !1, v_L_29745.e8(5), v_L_29745.e8(0), v_G_29762.Ui = !1) : (v_L_29745.e8(0, void 0, 26), v_L_29745.e8(6), renderer.W6(() => {
          v_M_29750.Oi.Be = !1, v_G_29762.Ui = !1, v_L_29745.e8(5);
        }, 26 / 60 * 1e3))) : (v_M_29750.wn.$e(0, 0), v_M_29750.pn.$e(0, 0), v_G_29762.Hi === v_t_29890 || v_i_29891 ? (v_M_29750.Ji.Be = !1, v_L_29745.e8(5), v_L_29745.e8(0), v_G_29762.Ui = !1) : (v_L_29745.e8(0, void 0, 26), v_L_29745.e8(7), v_L_29745.e8(13), renderer.W6(() => {
          v_M_29750.Ji.Be = !1, v_G_29762.Ui = !1, v_L_29745.e8(5);
        }, 26 / 60 * 1e3))), v_G_29762.Hi = v_t_29890);
      }
      const v_At_29775 = 0,
        v_w_29776 = 1,
        v_g_29777 = 2,
        v_xt_29778 = 3,
        v_i_29779 = 4;
      function v_U_29780(v_o_29892, v_t_29893) {
        if (!v_l_29766()) {
          let v_e_29894 = -1,
            v_n_29895 = -1,
            v_r_29896 = (v_t_29893 === v_w_29776 ? (v_e_29894 = 23, v_n_29895 = 21) : v_t_29893 === v_i_29779 ? v_e_29894 = 27 : v_t_29893 === v_g_29777 ? (v_e_29894 = 26, v_n_29895 = 22) : v_t_29893 === v_xt_29778 && (v_e_29894 = 24), v_G_29762.r0),
            v_s_29897 = v_G_29762.ji,
            v_a_29898 = v_G_29762.Ni;
          v_G_29762.n0 = !0, v_Le_28076([v_i_29899 => {
            var v_t_29900;
            null === v_G_29762.a0 ? (menuSystem.Ct(!0), v_Me_28078(v_i_29899)) : (v_G_29762.a0.Wn = v_G_29762.ji, v_G_29762.a0.Kn = v_G_29762.Ni, v_M_29750.wn.Be = !1, v_M_29750.pn.Be = !1, v_M_29750.Ji.Be = !1, v_M_29750.Oi.Be = !1, v_G_29762.a0.t0 && v_G_29762.a0.t0.call(v_G_29762.a0, v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni], -1, null), v_t_29900 = v_G_29762.a0, menuSystem.Ct(!0), v_M_29750.wR.Be = !1, v_t_29900.$n && v_t_29900.$n.call(v_t_29900), v_L_29745.e8(v_e_29894), renderer.W6(() => {
              var v_t_29901;
              (v_t_29901 = v_G_29762.a0).qn && v_t_29901.qn.call(v_t_29901), "" !== v_o_29892 ? v_Me_28078(v_i_29899) : (v_L_29745.Jt = !1, v_G_29762.n0 = !1, menuSystem.Ct(!1));
            }, v_Ge_28204(20)));
          }, v_t_29902 => {
            v_L_29745.Jt = !0, v_G_29762.r0 = v_o_29892, v_G_29762.a0 = v_F_29756[v_o_29892];
            var v_i_29903 = v_G_29762.a0;
            v_i_29903.OP && v_i_29903.OP.call(v_i_29903), v_M_29750.VP.Be = !1, v_M_29750.mL.Be = !1, v_G_29762.ji = v_G_29762.a0.Wn, v_G_29762.Ni = v_G_29762.a0.Kn, v_i_29903 = v_G_29762.a0, v_M_29750.wR.Be = !0, v_i_29903.Qn && v_i_29903.Qn.call(v_i_29903), v_St_29774(!1, !0), v_M_29750.wn.Be = !0, v_M_29750.pn.Be = !0;
            for (let v_t_29904 = 0; v_t_29904 < v_d_29768()[v_G_29762.ji].Bi.length; ++v_t_29904) v_d_29768()[v_G_29762.ji].Bi[v_t_29904].ze.nn();
            v_v_29772(), v_yt_29773(), v_L_29745.e8(v_n_29895), v_L_29745.lt.yk(29).Be = !1, v_J_29784(), "" !== v_r_29896 ? v_H_29781(v_a_29898, v_F_29756[v_r_29896].Jn[v_s_29897].Bi[v_a_29898], v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni]) : v_H_29781(0, null, v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni]), renderer.W6(() => {
              v_L_29745.lt.yk(29).Be = !0, v_L_29745.e8(5), v_L_29745.e8(0);
              var v_t_29905 = v_G_29762.a0;
              v_t_29905.e0 && v_t_29905.e0.call(v_t_29905), menuSystem.Ct(!1), v_G_29762.a0.t0 && v_G_29762.a0.t0.call(v_G_29762.a0, -1, null, v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni]), v_G_29762.n0 = !1;
            }, v_Ge_28204(20));
          }]);
        }
      }
      function v_H_29781(v_t_29906, v_i_29907, v_e_29908, v_n_29909) {
        if (v_M_29750.wn.qe = v_a_29782() ? 1 : 1e-4, v_M_29750.pn.qe = v_o_29783() ? 1 : 1e-4, v_i_29907 && v_n_29909 && v_i_29907.ze === v_n_29909.ze || (v_i_29907 && (v_i_29907.ze.un = !0), v_n_29909 && (v_n_29909.ze.un = !1, v_n_29909.ze.Kt())), v_n_29909 && (v_M_29750.g0.Be = v_G_29762._0 && "ready" === v_G_29762.r0 && v_n_29909.Fi === v_S_29718), v_G_29762.gn) v_pt_29765();else {
          let v_i_29910 = v_f_29769(),
            v_t_29911;
          if (v_i_29910) {
            if (v_i_29910.Fi === v_S_29718) v_t_29911 = v_be_27857.Pp.find(v_t_29912 => v_t_29912.w0 === v_i_29910.On.w0);else if (v_i_29910.Fi === v_A_29719 || v_i_29910.Fi === v_Y_29720) v_t_29911 = void 0;else if ("music" !== v_G_29762.r0) return;
            v_s_29764 = v_t_29911 ? (v_s_29764 || v_mt_29763.dn(v_t_29911), v_pt_29765(), setInterval(function () {
              v_G_29762.gn || v_mt_29763.dn(v_t_29911);
            }, 500)) : (v_s_29764 || v_mt_29763.dn(null), v_pt_29765(), setInterval(function () {
              v_G_29762.gn || v_mt_29763.dn(null);
            }, 500));
          }
        }
      }
      function v_a_29782() {
        return v_G_29762.a0.zn || v_G_29762.Hi || 0 < v_G_29762.Ni;
      }
      function v_o_29783() {
        return v_G_29762.a0.zn || v_G_29762.Hi || v_G_29762.Ni < v_d_29768()[v_G_29762.ji].Bi.length - 1;
      }
      function v_J_29784() {
        var v_t_29913,
          v_i_29914 = v_G_29762.Hi,
          v_e_29915 = v_f_29769();
        if (v_e_29915) switch (menuSystem.kt("left", !v_a_29782()), menuSystem.kt("right", !v_o_29783()), menuSystem.wt("editorMode", !v_G_29762._0 && !v_oe_27649.Gi()), menuSystem.wt("videoCaptTurnOn", !v_u_29760.J6 && !v_oe_27649.Gi()), menuSystem.wt("videoCaptTurnOff", v_u_29760.J6 && !v_oe_27649.Gi()), menuSystem.Cv(!0), v_G_29762.r0) {
          case "music":
            v_i_29914 ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !0), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", !1), menuSystem.kt("sort", !v_n_29767()), menuSystem.kt("endCatMode", !v_n_29767())) : ((v_t_29913 = v_G_29762.a0.Jn[v_G_29762.ji].Fi) === v_y_29710 || v_t_29913 === v_b_29717 && v_e_29915.Fi === v_S_29718 ? (menuSystem.kt("levelDown", v_G_29762.l0 <= 0), menuSystem.kt("levelUp", 5 <= v_G_29762.l0), menuSystem.kt("select", v_e_29915.On.S0 || v_e_29915.Fi === v_A_29719)) : v_t_29913 === v_m_29711 ? (menuSystem.kt("levelDown", v_G_29762.l0 <= 0), menuSystem.kt("levelUp", 5 <= v_G_29762.l0), menuSystem.kt("select", !1)) : v_t_29913 === v_p_29712 ? (menuSystem.kt("levelDown", v_G_29762.ie <= 0), menuSystem.kt("levelUp", v_G_29762.ie >= v_T_29740.length - 1), menuSystem.kt("select", v_e_29915.On.S0 || v_e_29915.Fi === v_A_29719)) : (menuSystem.kt("levelDown", !0), menuSystem.kt("levelUp", !0), menuSystem.kt("select", v_e_29915.Fi === v_A_29719)), menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !0), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !0), menuSystem.wt("levelUp", !0), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !0), menuSystem.wt("endCatMode", !1), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", v_e_29915.Fi === v_S_29718 && !v_oe_27649.Gi()));
            break;
          case "ready":
            menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", v_e_29915.Fi === v_C_29723 || v_e_29915.Fi >= v_q_29721 && v_e_29915.Fi <= v_x_29722), menuSystem.wt("enter", v_e_29915.Fi === v_S_29718), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", v_e_29915.Fi === v_$_29725), menuSystem.wt("levelDown", v_e_29915.Fi === v_S_29718), menuSystem.wt("levelUp", v_e_29915.Fi === v_S_29718), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !1), menuSystem.wt("backMusicSelect", !v_oe_27649.Gi()), menuSystem.wt("cancel", v_oe_27649.Gi()), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", v_e_29915.Fi === v_S_29718 && !v_oe_27649.Gi()), menuSystem.kt("backMusicSelect", !!v_G_29762._0), menuSystem.kt("cancel", !1), menuSystem.kt("editSettings", !1), v_G_29762._0 ? (menuSystem.kt("levelDown", !0), menuSystem.kt("levelUp", !0)) : (menuSystem.kt("levelDown", v_B_29757.p0 <= 0 || 4 === v_B_29757.p0), menuSystem.kt("levelUp", 5 <= v_B_29757.p0 || 4 === v_B_29757.p0)), menuSystem.kt("enter", v_e_29915.On.S0);
            break;
          case "chara":
            v_i_29914 ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", !1), menuSystem.kt("endCatMode", !v_n_29767())) : (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !0), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !0), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !0), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", !1), menuSystem.kt("endCatMode", !1));
            break;
          case "presets":
            menuSystem.kt("editSettings", v_e_29915.Fi !== v_x_29722), menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !0), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", !1);
            break;
          case "settings":
            menuSystem.kt("changeDown", !v_Ie_27966.x0(v_e_29915.On.w0)), menuSystem.kt("changeUp", !v_Ie_27966.I0(v_e_29915.On.w0)), v_i_29914 ? (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !1), menuSystem.wt("changeUp", !1), menuSystem.wt("deleteRecord", !1), menuSystem.kt("endCatMode", !v_n_29767())) : (menuSystem.wt("left", !0), menuSystem.wt("right", !0), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !0), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !0), menuSystem.wt("changeUp", !0), menuSystem.wt("deleteRecord", !1), menuSystem.kt("endCatMode", !1));
            break;
          case "masvol":
            menuSystem.wt("left", !1), menuSystem.wt("right", !1), menuSystem.wt("select", !1), menuSystem.wt("enter", !1), menuSystem.wt("customize", !1), menuSystem.wt("editSettings", !1), menuSystem.wt("levelDown", !1), menuSystem.wt("levelUp", !1), menuSystem.wt("prevGroup", !1), menuSystem.wt("nextGroup", !1), menuSystem.wt("classDown", !1), menuSystem.wt("classUp", !1), menuSystem.wt("transform", !1), menuSystem.wt("sort", !1), menuSystem.wt("startCatModeGroup", !1), menuSystem.wt("startCatModeLeft", !1), menuSystem.wt("startCatMode", !1), menuSystem.wt("endCatMode", !0), menuSystem.wt("backMusicSelect", !1), menuSystem.wt("cancel", !1), menuSystem.wt("changeDown", !0), menuSystem.wt("changeUp", !0), menuSystem.wt("deleteRecord", !1), menuSystem.kt("changeDown", handshake.On.Xp.Yp <= 0), menuSystem.kt("changeUp", 100 <= handshake.On.Xp.Yp);
        }
      }
      function v_Ct_29785(v_t_29916, v_i_29917) {
        if (!v_l_29766()) {
          let v_s_29921 = v_f_29769();
          switch (v_t_29916) {
            case "left":
              v_G_29762.a0.zn && (v_G_29762.Hi || v_G_29762.Ni <= 0) ? v_l_29766() || (v_Ae_27892.dn("move_cursor"), v_bt_29771(v_G_29762.ji - 1, v_fi_27807, v_i_29917)) : v_l_29766() || (v_Ae_27892.dn("move_cursor"), v_kt_29770(v_G_29762.Ni - 1, v_ui_27806, v_i_29917));
              break;
            case "right":
              v_G_29762.a0.zn && (v_G_29762.Hi || v_G_29762.Ni >= v_d_29768()[v_G_29762.ji].Bi.length - 1) ? v_l_29766() || (v_Ae_27892.dn("move_cursor"), v_bt_29771(v_G_29762.ji + 1, v__i_27808, v_i_29917)) : v_l_29766() || (v_Ae_27892.dn("move_cursor"), v_kt_29770(v_G_29762.Ni + 1, v_ui_27806, v_i_29917));
              break;
            case "levelDown":
              "music" === v_G_29762.r0 ? (v_e_29918 = v_G_29762.a0.Jn[v_G_29762.ji].Fi) === v_y_29710 || v_e_29918 === v_m_29711 || v_e_29918 === v_b_29717 ? (--v_G_29762.l0, 4 === v_G_29762.l0 ? v_G_29762.l0 = 3 : v_G_29762.l0 < 0 && (v_G_29762.l0 = 0), v_M_29750.VP.Je = "diffTag_" + v_Q0_27805[v_G_29762.l0], v_Ae_27892.dn("musicSelectDiffSelect" + v_G_29762.l0), v_j_29799()) : v_e_29918 === v_p_29712 && (--v_G_29762.ie, v_G_29762.ie < 0 && (v_G_29762.ie = 0), v_Ae_27892.dn("change_value"), v_j_29799()) : "ready" === v_G_29762.r0 && 4 !== v_B_29757.p0 && (--v_B_29757.p0, 4 === v_B_29757.p0 && (v_B_29757.p0 = 3), v_B_29757.p0 < 0 ? v_B_29757.p0 = 0 : (v_Ae_27892.dn("musicSelectDiffSelect" + v_B_29757.p0), (v_e_29918 = v_F_29756.music.Jn[v_F_29756.music.Wn].Fi) !== v_y_29710 && v_e_29918 !== v_m_29711 && v_e_29918 !== v_b_29717 || (v_G_29762.u0 = !0, v_G_29762.l0 = v_B_29757.p0, v_M_29750.VP.Je = "diffTag_" + v_Q0_27805[v_G_29762.l0]), v_s_29921.On.bx ? v_j_29799() : v_F_29756.ready.$n(), v_F_29756.ready.Qn(), v_v_29772(v_gi_27815), v_H_29781(0, v_s_29921, 0, v_f_29769())));
              break;
            case "levelUp":
              var v_e_29918;
              "music" === v_G_29762.r0 ? (v_e_29918 = v_G_29762.a0.Jn[v_G_29762.ji].Fi) === v_y_29710 || v_e_29918 === v_m_29711 || v_e_29918 === v_b_29717 ? (++v_G_29762.l0, (4 === v_G_29762.l0 || 5 < v_G_29762.l0) && (v_G_29762.l0 = 5), v_M_29750.VP.Je = "diffTag_" + v_Q0_27805[v_G_29762.l0], v_Ae_27892.dn("musicSelectDiffSelect" + v_G_29762.l0), v_j_29799()) : v_e_29918 === v_p_29712 && (++v_G_29762.ie, v_G_29762.ie > v_T_29740.length - 1 && (v_G_29762.ie = v_T_29740.length - 1), v_Ae_27892.dn("change_value"), v_j_29799()) : "ready" === v_G_29762.r0 && 4 !== v_B_29757.p0 && (++v_B_29757.p0, 4 === v_B_29757.p0 && (v_B_29757.p0 = 5), 5 < v_B_29757.p0 ? v_B_29757.p0 = 5 : (v_Ae_27892.dn("musicSelectDiffSelect" + v_B_29757.p0), (v_e_29918 = v_F_29756.music.Jn[v_F_29756.music.Wn].Fi) !== v_y_29710 && v_e_29918 !== v_m_29711 && v_e_29918 !== v_b_29717 || (v_G_29762.u0 = !0, v_G_29762.l0 = v_B_29757.p0, v_M_29750.VP.Je = "diffTag_" + v_Q0_27805[v_G_29762.l0]), v_s_29921.On.bx ? v_j_29799() : v_F_29756.ready.$n(), v_F_29756.ready.Qn(), v_v_29772(v_gi_27815), v_H_29781(0, v_s_29921, 0, v_f_29769())));
              break;
            case "select":
            case "enter":
            case "customize":
            case "editSettings":
              switch (v_G_29762.r0) {
                case "music":
                  if (v_s_29921.Fi === v_S_29718) {
                    if (!v_s_29921.On.S0) {
                      v_B_29757.w0 = v_s_29921.On.w0;
                      var v_n_29919 = v_F_29756.music.Jn[v_G_29762.ji].Fi;
                      v_n_29919 === v_p_29712 || v_s_29921.On.bx ? v_B_29757.p0 = v_s_29921.On.te : v_n_29919 === v_k_29713 ? v_B_29757.p0 = 5 : v_n_29919 === v_X_29714 ? v_B_29757.p0 = 4 : v_B_29757.p0 = v_G_29762.l0, v_B_29757.kx = v_s_29921.On.bx ? v_s_29921.On.yx : 0, v_F_29756.ready.Wn = 0, v_F_29756.ready.Kn = 2;
                      let v_t_29922 = v_B_29757.kx,
                        v_i_29923 = v_B_29757.w0,
                        v_e_29924 = v_s_29921.On.te;
                      v_Fe_28101(async () => {
                        if (v_oe_27649.Gi()) if (v_t_29922) {
                          if (!(await async function (v_t_29925, v_i_29926) {
                            if (!v_oe_27649.Gi()) return !0;
                            menuSystem.Ct(!0);
                            v_t_29925 = await v_oe_27649.Sx(v_t_29925, v_i_29926);
                            menuSystem.Ct(!1), v_O_29802(), v_t_29925 !== v_Ms_28009 ? await new Promise(v_t_29927 => v_Te_27911.Ai(v_Ue_28209("errorNetworkError"), v_ei_27773 | v_U0_27775, 2e3, v_t_29927)) : await new Promise(v_t_29928 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionJoined"), v_N0_27771, 5e3, v_t_29928));
                            return v_t_29925 === v_Ms_28009;
                          }(v_t_29922, v_e_29924))) return;
                        } else if (!(await v_Pt_29788(v_i_29923, v_e_29924))) return;
                        v_t_29922 && !v_oe_27649.Ix.has(v_t_29922) || (v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("ready", v_w_29776));
                      });
                    }
                  } else if (v_s_29921.Fi === v_Y_29720) {
                    let v_t_29929 = 0,
                      v_i_29930 = 0;
                    for (const v_a_29931 of v_be_27857.Pp) null !== v_a_29931.meta[v_G_29762.l0] && null === v_a_29931.meta[4] && ++v_t_29929;
                    if (v_t_29929 <= 0) v_Te_27911.Ai(v_Ue_28209("musicSelectNoSongsFound"), v_N0_27771, 5e3, function (v_t_29932) {});else {
                      var v_r_29920 = mathFloor(mathRandom() * v_t_29929);
                      for (const v_o_29933 of v_be_27857.Pp) if (null !== v_o_29933.meta[v_G_29762.l0] && null === v_o_29933.meta[4]) {
                        if (v_r_29920 == v_i_29930) {
                          v_B_29757.w0 = v_o_29933.w0, v_B_29757.p0 = v_G_29762.l0, v_B_29757.kx = 0;
                          break;
                        }
                        ++v_i_29930;
                      }
                      v_F_29756.ready.Wn = 0, v_F_29756.ready.Kn = 2, v_Fe_28101(async () => {
                        v_oe_27649.Gi() && !(await v_Pt_29788(v_B_29757.w0, v_B_29757.p0)) || (v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("ready", v_w_29776));
                      });
                    }
                  } else v_s_29921.Fi === v_tt_29727 ? 0 === v_be_27857.Gp.length ? v_Te_27911.Ai(v_Ue_28209("courseSelectNoClasses"), v_N0_27771 | v_ri_27776, 5e3, function (v_t_29934) {}) : (v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("", v_xt_29778), v_Q1_27921.T0((v_t_29935, v_i_29936) => {
                    v_G_29762.r0 = "", v_G_29762.a0 = null, v_i_29936 ? v_Vt_29806(v_i_29936) : v_U_29780("music", v_g_29777);
                  })) : v_s_29921.Fi === v_it_29728 ? (v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("", v_xt_29778), v_$1_27920.T0(() => {
                    v_G_29762.r0 = "", v_G_29762.a0 = null, v_U_29780("music", v_g_29777);
                  })) : v_s_29921.Fi === v_et_29729 ? v_Fe_28101(async () => {
                    (await v_It_29787()) && (v_Wt_29807(), await renderer.C7(v_Ge_28204(20)), (await new Promise(v_t_29937 => settingsStore.T0(v_oe_27649.zS, v_t_29937))) === v_K1_27916 && v_oe_27649.Gi() && (await v_It_29787()), v_nr_27925.T0());
                  }) : v_s_29921.Fi === v_nt_29730 ? v_Fe_28101(async () => {
                    v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("", v_xt_29778), await new Promise(v_t_29938 => v_X1_27914.T0(async v_t_29939 => 0 !== v_t_29939 && v_It_29787(v_t_29939), v_t_29938)), v_oe_27649.Gi() ? (v_Wt_29807(), (await new Promise(v_t_29940 => settingsStore.T0(v_oe_27649.zS, v_t_29940))) === v_K1_27916 && v_oe_27649.Gi() && (await v_It_29787()), v_nr_27925.T0()) : (v_G_29762.r0 = "", v_G_29762.a0 = null, v_U_29780("music", v_g_29777));
                  }) : v_s_29921.Fi === v_rt_29731 && v_Fe_28101(async () => {
                    (await new Promise(v_t_29941 => v_Te_27911.Ai(v_Ue_28209("copExitFromRoomDialog"), v_G0_27772, 0, v_t_29941))) === v_H0_27781 && (v_It_29787(), await new Promise(v_t_29942 => v_Te_27911.Ai(v_Ue_28209("copExitedFromRoom"), v_N0_27771, 5e3, v_t_29942)));
                  });
                  break;
                case "ready":
                  if (v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_s_29921.Fi >= v_q_29721 && v_s_29921.Fi <= v_x_29722) v_U_29780("presets", v_w_29776);else if (1 === v_G_29762.Ni) v_U_29780("chara", v_w_29776);else if (4 === v_G_29762.Ni) v_U_29780("masvol", v_w_29776);else if (v_s_29921.Fi === v_S_29718) return void (v_s_29921.On.S0 || async function () {
                    let v_t_29943 = v_F_29756.ready.Jn[0].Bi[2].On.te,
                      v_i_29944 = v_oe_27649.Gi();
                    if (v_i_29944) if (v_oe_27649.Ix.get(v_oe_27649.Px).Mx && v_oe_27649.Ox.length <= 1) {
                      if ((await new Promise(v_t_29952 => v_Te_27911.Ai(v_Ue_28209("copPlayConfirmNoGuests"), v_G0_27772, 0, v_t_29952))) !== v_H0_27781) return;
                      v_i_29944 = !1, await v_oe_27649.Dx(), v_O_29802();
                    }
                    if (v_i_29944) {
                      menuSystem.ft(), menuSystem.vt("cancel", "Cancel", 14, 2, v_si_27792, !1, !1, !1, "", function (v_t_29953, v_i_29954) {
                        "down" === v_t_29953 && (v_oe_27649.xx(!1, 0), v_oe_27649.Cx(v_ha_28044));
                      }), v_V1_27912.T0(100), menuSystem.wt("cancel", !0), await v_oe_27649.xx(!0, v_t_29943);
                      var v_e_29945 = await v_oe_27649.Tx(v_ha_28044);
                      if (v_V1_27912.XS(), menuSystem.wt("cancel", !1), menuSystem._t(), !v_e_29945) return;
                    }
                    v_Ae_27892.dn("musicSelectStart"), v_oe_27649.hx(v_Rt_29789), v_c_29746.e8(0), v_c_29746.Jt = !0, v_v_29772(v_gi_27815);
                    let v_n_29946 = v_h_29749.We[0];
                    v_h_29749.tn();
                    let v_r_29947;
                    for (let v_t_29955 = 0; v_t_29955 < v___29747.We.length; ++v_t_29955) (v_r_29947 = v___29747.We[v_t_29955]).rn(v_Vo_28136, v_Uo_28131, 20, 0), v_r_29947.rn(v_Wo_28137, v_Uo_28131, 20, 0), v_r_29947.rn(v_Xo_28138, v_Uo_28131, 20, 0), v_r_29947.rn(v_zo_28139, v_Uo_28131, 20, 0), v_r_29947.rn(v_Ko_28140, v_Uo_28131, 20, 0), v_r_29947.$e(0, -104), v_r_29947.ln(1, 1), v_r_29947.nn(v_Ko_28140), v_r_29947.an(1), v_r_29947.an(0), v_h_29749.Ze(v_r_29947);
                    v___29747.tn(), v_h_29749.Ze(v_n_29946), v_n_29946.rn(v_Vo_28136, v_Uo_28131, 20, 0), v_n_29946.rn(v_Wo_28137, v_Uo_28131, 20, 0), v_n_29946.$e(0, -104), v_M_29750.g0.Be = !1, playerInfoBoard.ii(), v_M_29750.wn.Be = !1, v_M_29750.pn.Be = !1, v_M_29750.Ji.Be = !1, v_M_29750.Oi.Be = !1, v_L_29745.e8(27), v_L_29745.e8(12, v_M_29750.h0), menuSystem.It(!1), sceneManager.ni(), sceneManager.ii(), handshake.On.q.ee = v_B_29757.w0, handshake.On.q.te = v_G_29762.l0, handshake.On.q.ie = v_G_29762.ie, handshake.On.q.ne = v_F_29756.music.Jn[v_F_29756.music.Wn].Fi === v_p_29712, handshake.On.q.HP = v_F_29756.music.Jn[v_F_29756.music.Wn].Fi === v_k_29713, handshake.On.im = v_N_29758.w0, handshake.On.nI = v_Dr_27956(handshake.On.im), v_Ns_28014.uA(), v_Ns_28014.pA();
                    let v_s_29948 = new v_ar_27928();
                    v_s_29948.ee = v_B_29757.w0, v_s_29948.AR = v_B_29757.w0, v_s_29948.te = v_t_29943, v_s_29948._0 = v_G_29762._0, v_s_29948.k0 = v_u_29760.k0 && !v_u_29760.J6, v_s_29948.J6 = v_u_29760.J6, v_s_29948.y0 = v_Ns_28014.mA(v_s_29948.ee, v_s_29948.te), v_i_29944 && v_oe_27649.Px && (v_e_29945 = v_oe_27649.Ix.get(v_oe_27649.Px), v_s_29948.Rx = v_oe_27649.Px, v_s_29948.k0 = !1, v_s_29948.J6 = !1, v_s_29948.bx = !v_e_29945.Mx, v_s_29948.AR = v_e_29945.ng.w0);
                    v_s_29948._0 && (v_s_29948._0.Qu |= v_Ie_27966.$c("autoPlay"));
                    v_s_29948.C0 = v_N_29758.w0;
                    var v_a_29949 = v_be_27857.Np.find(v_t_29956 => v_t_29956.C0 === v_s_29948.C0),
                      v_o_29950 = handshake.On.nm[v_s_29948.C0];
                    v_s_29948.En = v_o_29950 ? v_o_29950.En : v_a_29949.Nm;
                    let v_l_29951;
                    v_s_29948.Ee = async function (v_t_29957, v_i_29958) {
                      v_t_29957 === v_rr_27926 ? v_s_29948.Rx && ((v_l_29951 = v_l_29951 || v_Te_27911.Kk("", !0)).Ok(v_Ue_28209("copDownloadingData")), v_l_29951.Wk((100 * v_i_29958).toFixed(2) + "%"), v_l_29951.zk(v_i_29958)) : v_t_29957 === v_sr_27927 && (v_s_29948.Rx && (await v_oe_27649.Lx(v_da_28045), v_l_29951) && v_Te_27911.K4(), renderer.W6(function () {
                        playerInfoBoard.ti(), v_j1_27909.ii(), v_c_29746.e8(1), v_n_29946.rn(v_Xo_28138, v_jo_28134, 12, 0), v_n_29946.rn(v_zo_28139, v_jo_28134, 12, 0), v_n_29946.rn(v_Ko_28140, v_jo_28134, 12, 0), v_n_29946.nn(v_Ko_28140), v_n_29946.ln(1.1, 1.1), v_n_29946.an(1), v_n_29946.an(0), v_pt_29765(), v_mt_29763.m0(), renderer.W6(function () {
                          gameCore.ri();
                          for (let v_t_29959 = 0; v_t_29959 < v_h_29749.We.length; ++v_t_29959) (v_r_29947 = v_h_29749.We[v_t_29959]).nn(), v_r_29947.an(1);
                          v_v_29772(), v_U_29780("", v_At_29775), v_Wt_29807();
                        }, 1e3);
                      }, 3e3)), v_s_29948.A0 = function () {
                        ++handshake.Bm.Fm, v_nr_27925.T0(v_s_29948._0);
                      };
                    }, menuSystem.dt(), renderer.W6(function () {
                      gameCore.T0(v_s_29948);
                    }, 1e3);
                  }());
                  break;
                case "presets":
                  v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("settings", v_w_29776);
                  break;
                case "chara":
                  v_s_29921.Fi === v_C_29723 && (v_N_29758.w0 = v_s_29921.On.w0), handshake.On.im = v_N_29758.w0, handshake.On.nI = v_Dr_27956(handshake.On.im), playerInfoBoard.U4(v_N_29758.w0);
                  for (let v_t_29960 = 0; v_t_29960 < 9; ++v_t_29960) v_ht_29752[v_t_29960].Be = !1;
                  v_M_29750.l4.Be = !1, v_M_29750.o4.Be = !1;
                  {
                    let v_r_29961 = v_be_27857.Np.find(v_t_29962 => v_t_29962.C0 === v_N_29758.w0);
                    v_n_29919 = handshake.On.nm[v_N_29758.w0];
                    v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), uiComponentA.T0(v_r_29961, v_n_29919, (v_t_29963, v_i_29964, v_e_29965) => {
                      var v_n_29966;
                      v_t_29963 === v_Qt_27768 ? v_L_29745.Jt = !1 : v_t_29963 === v_ti_27769 ? (v_e_29965.En = v_i_29964, handshake.On.nm[v_N_29758.w0] = v_e_29965, v_i_29964 = v_be_27857.jp.ak(v_i_29964), v_n_29966 = v_Er_27955(v_r_29961, v_i_29964, v_e_29965.jm), renderer.Yt.Zt["chara:" + v_n_29966 + ":1:" + v_r_29961.C0] && (v_s_29921.ze.ot("charaPanellImg").Xt = "chara:" + v_n_29966 + ":1:" + v_r_29961.C0), v_s_29921.ze.ot("charaPanelName").Wt = v_r_29961.ct[v_n_29966], v_s_29921.ze.ot("charaPanelIllustrator").Wt = v_r_29961.tf[v_n_29966], handshake.On.im = v_N_29758.w0, handshake.On.nI = v_n_29966, playerInfoBoard.U4(v_N_29758.w0), v_nl_28149(v_s_29921.ze.ot("charaPanelSkill"), v_i_29964), v_el_28148(v_s_29921.ze, v_e_29965, !1), v_Ns_28014.kA(v_N_29758.w0), v_oe_27649.Gi() && v_oe_27649.WP(), "chara" === v_G_29762.r0 && v_U_29780("ready", v_g_29777)) : v_t_29963 === v_ii_27770 && v_J_29784();
                    });
                  }
              }
              break;
            case "sort":
              "music" === v_G_29762.r0 && (v_Ae_27892.dn("change_value"), uiComponentC.T0(v_G_29762.o0, function (v_t_29967, v_e_29968) {
                if (null !== v_e_29968) {
                  v_G_29762.o0 = v_e_29968, handshake.On.q.pL = v_G_29762.o0;
                  let v_i_29970 = v_F_29756.music.Jn[v_G_29762.ji].Fi;
                  var v_e_29968 = v_s_29921.Fi === v_S_29718 ? {
                      ee: v_s_29921.On.w0,
                      te: v_s_29921.On.te,
                      ne: v_i_29970 === v_p_29712,
                      HP: v_i_29970 === v_k_29713
                    } : null,
                    v_n_29969 = v_f_29769();
                  v_Ht_29800(), v_e_29968 ? (v_Jt_29801(v_e_29968), v_G_29762.Ni = v_F_29756.music.Kn, v_G_29762.ji = v_F_29756.music.Wn) : v_G_29762.ji = v_F_29756.music.Jn.findIndex(v_t_29971 => v_t_29971.Fi === v_i_29970), v_v_29772(v_gi_27815), v_yt_29773(v_ui_27806), v_H_29781(0, v_n_29969, 0, v_f_29769()), v_G_29762.a0.t0.call(v_G_29762.a0, -1, null, v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni]);
                }
                v_J_29784();
              }));
              break;
            case "transform":
              if ("chara" === v_G_29762.r0) if (v_s_29921.Fi === v_C_29723) {
                let v_e_29972 = v_be_27857.Np.find(v_t_29975 => v_t_29975.C0 === v_s_29921.On.w0),
                  v_n_29973 = handshake.On.nm[v_s_29921.On.w0],
                  v_r_29974;
                -1 === (v_r_29974 = v_n_29973 ? v_be_27857.jp.ik(v_n_29973.En) : v_be_27857.jp.ik(v_e_29972.Nm)) && (v_r_29974 = v_be_27857.jp.ik(":sys_none")), v_Ae_27892.dn("change_value"), uiComponentB.T0(v_e_29972, v_n_29973, v_be_27857.jp[v_r_29974], (v_t_29976, v_i_29977) => {
                  v_t_29976 === v_ti_27769 ? (v_n_29973 || (v_n_29973 = new v_Mr_27954(), handshake.On.nm[v_s_29921.On.w0] = v_n_29973), v_n_29973.jm = v_i_29977, v_i_29977 = v_Er_27955(v_e_29972, v_be_27857.jp[v_r_29974], v_n_29973.jm), v_s_29921.ze.ot("charaPanellImg").Xt = "chara:" + v_i_29977 + ":1:" + v_e_29972.C0, v_s_29921.ze.ot("charaPanelName").Wt = v_e_29972.ct[v_i_29977], v_s_29921.ze.ot("charaPanelIllustrator").Wt = v_e_29972.tf[v_i_29977], v_s_29921.ze.ot("charaTransformIcon").Be = 0 < v_n_29973.jm, handshake.On.im = v_N_29758.w0, handshake.On.nI = v_i_29977, playerInfoBoard.U4(v_N_29758.w0), v_Ns_28014.kA(v_N_29758.w0), v_oe_27649.Gi() && v_oe_27649.WP()) : v_t_29976 === v_ii_27770 && v_J_29784();
                });
              }
              break;
            case "startCatModeGroup":
            case "startCatModeLeft":
            case "startCatMode":
              v_Ae_27892.dn("menu_in"), v_St_29774(!0);
              break;
            case "changeDown":
              v_Ae_27892.dn("change_value"), v_s_29921.Fi === v_Z_29724 ? (v_Ie_27966.L0(v_s_29921.On.w0, v_Ie_27966.E0(v_s_29921.On.w0) - 1), v_jt_29803(v_s_29921, !1), v_Ot_29804()) : v_s_29921.Fi === v_$_29725 && (handshake.On.Xp.Yp = mathMax(handshake.On.Xp.Yp - 5, 0), v_Se_27889.fn(handshake.On.Xp.Yp / 100), v_Ot_29804());
              break;
            case "changeUp":
              v_Ae_27892.dn("change_value"), v_s_29921.Fi === v_Z_29724 ? (v_Ie_27966.L0(v_s_29921.On.w0, v_Ie_27966.E0(v_s_29921.On.w0) + 1), v_jt_29803(v_s_29921, !0), v_Ot_29804()) : v_s_29921.Fi === v_$_29725 && (handshake.On.Xp.Yp = mathMin(handshake.On.Xp.Yp + 5, 100), v_Se_27889.fn(handshake.On.Xp.Yp / 100), v_Ot_29804());
              break;
            case "endCatMode":
              v_Ae_27892.dn("menu_back"), "presets" !== v_G_29762.r0 && "settings" !== v_G_29762.r0 || v_G_29762.Hi ? "chara" !== v_G_29762.r0 || v_G_29762.Hi ? "masvol" === v_G_29762.r0 ? v_U_29780("ready", v_g_29777) : v_St_29774(!1) : (v_s_29921.Fi === v_C_29723 && (v_N_29758.w0 = v_s_29921.On.w0, handshake.On.im = v_N_29758.w0, handshake.On.nI = v_Dr_27956(handshake.On.im), playerInfoBoard.U4(v_N_29758.w0), v_Ns_28014.kA(v_N_29758.w0), v_oe_27649.Gi()) && v_oe_27649.WP(), v_U_29780("ready", v_g_29777)) : ("settings" === v_G_29762.r0 ? handshake.On.re = 3 : "presets" === v_G_29762.r0 && (handshake.On.re = v_G_29762.Ni), v_U_29780("ready", v_g_29777));
              break;
            case "backMusicSelect":
              v_oe_27649.Gi() || (v_Ae_27892.dn("menu_back"), v_U_29780("music", v_g_29777));
              break;
            case "cancel":
              v_oe_27649.Gi() && v_Fe_28101(async () => {
                if (v_B_29757.kx) {
                  if (!(await async function () {
                    if (v_oe_27649.Gi()) {
                      if ((await new Promise(v_t_29978 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionCancelDialog"), v_G0_27772, 0, v_t_29978))) !== v_H0_27781) return !1;
                      menuSystem.Ct(!0), await v_oe_27649.Ex(), menuSystem.Ct(!1), v_O_29802(), await new Promise(v_t_29979 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionCanceled"), v_N0_27771, 5e3, v_t_29979));
                    }
                    return !0;
                  }())) return;
                } else if (!(await async function () {
                  if (v_oe_27649.Gi()) {
                    if ((await new Promise(v_t_29980 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionCloseDialog"), v_G0_27772, 0, v_t_29980))) !== v_H0_27781) return !1;
                    menuSystem.Ct(!0), await v_oe_27649.Dx(), menuSystem.Ct(!1), v_O_29802(), await new Promise(v_t_29981 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionClosed"), v_N0_27771, 5e3, v_t_29981));
                  }
                  return !0;
                }())) return;
                v_Ae_27892.dn("menu_back"), v_U_29780("music", v_g_29777);
              });
              break;
            case "editorMode":
              v_G_29762._0 ? v_Te_27911.Ai(v_Ue_28209("editorModeCourseError"), v_N0_27771 | v_ri_27776, 5e3, function (v_t_29982) {}) : (v_u_29760.k0 ? (v_u_29760.k0 = !1, v_Te_27911.Ai(v_Ue_28209("editorModeExit"), v_N0_27771 | v_ni_27774, 5e3, function (v_t_29983) {})) : (v_u_29760.k0 = !0, v_Te_27911.Ai(v_Ue_28209("editorModeEnter"), v_N0_27771 | v_ni_27774, 5e3, function (v_t_29984) {})), playerInfoBoard.$t(v_u_29760.k0));
              break;
            case "deleteRecord":
              v_Te_27911.Ai(v_Ue_28209("musicSelectConfirmDeleteRecord"), v_G0_27772, 0, function (v_t_29985) {
                v_t_29985 !== v_H0_27781 || v_s_29921.Fi !== v_S_29718 || v_s_29921.On.S0 || (v_Ns_28014.Hy(v_s_29921.On.w0, v_s_29921.On.te), v_Gt_29797());
              });
              break;
            case "videoCaptTurnOff":
              v_u_29760.J6 = !1;
              break;
            case "videoCaptTurnOn":
              menuSystem.Ct(!0), systemMisc.uv().then(v_t_29986 => {
                menuSystem.Ct(!1), v_t_29986 ? v_u_29760.J6 = !0 : v_Te_27911.Ai(v_Ue_28209("cptError"), v_G0_27772, 0, async v_t_29987 => {
                  if (v_t_29987 === v_H0_27781) {
                    sceneManager.Jk(!0);
                    let v_r_29988 = v_Te_27911.Kk("");
                    v_t_29987 = await systemMisc.Xk((v_t_29989, v_i_29990, v_e_29991, v_n_29992) => {
                      "copy" === v_t_29989 ? (v_r_29988.Wk(""), v_r_29988.zk(null), v_r_29988.Ok(v_Ue_28209("cptDownloadCopying") + v_i_29990)) : "unzip" === v_t_29989 ? (v_r_29988.Wk(""), v_r_29988.zk(null), v_r_29988.Ok(v_Ue_28209("cptDownlaodExpanding") + v_i_29990)) : "dl" === v_t_29989 && (0 < v_n_29992 ? (v_r_29988.Wk((v_e_29991 / v_n_29992 * 100).toFixed(2) + "%"), v_r_29988.zk(v_e_29991 / v_n_29992)) : (v_r_29988.Wk(""), v_r_29988.zk(null)), v_r_29988.Ok(v_Ue_28209("cptDownloadDownloading") + v_i_29990));
                    });
                    v_Te_27911.K4(), sceneManager.Jk(!1), 0 === v_t_29987 ? v_Te_27911.Ai(v_Ue_28209("cptDownloadSuccess"), v_N0_27771, 0) : 2 === v_t_29987 ? v_Te_27911.Ai(v_Ue_28209("cptDownloadFailedDownload"), v_N0_27771 | v_U0_27775, 0) : 3 === v_t_29987 && v_Te_27911.Ai(v_Ue_28209("cptDownloadFailedExpandFile"), v_N0_27771 | v_U0_27775, 0);
                  }
                }), v_J_29784();
              });
          }
          v_J_29784();
        }
      }
      function v_Tt_29786() {
        if (!v_l_29766()) if (v_G_29762.Hi) menuSystem.St("endCatMode");else {
          var v_t_29993 = v_f_29769();
          switch (v_G_29762.r0) {
            case "music":
              if (v_t_29993.Fi !== v_S_29718 || v_t_29993.On.bx) v_bt_29771(0);else {
                v_B_29757.w0 = v_t_29993.On.w0, v_B_29757.p0 = v_t_29993.On.te, v_B_29757.kx = 0;
                var v_e_29994 = v_be_27857.Pp.find(v_t_29995 => v_t_29995.w0 === v_B_29757.w0);
                if (v_e_29994 && !v_e_29994.meta[v_B_29757.p0]) {
                  let v_i_29996 = !1;
                  for (let v_t_29997 = 0; v_t_29997 < 6; ++v_t_29997) if (v_e_29994.meta[v_t_29997]) {
                    v_B_29757.p0 = v_t_29997, v_i_29996 = !0;
                    break;
                  }
                  v_i_29996 || window.reload();
                }
                v_F_29756.ready.Wn = 0, v_F_29756.ready.Kn = 2, v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("ready", v_w_29776);
              }
              break;
            case "ready":
              2 !== v_G_29762.Ni ? (v_kt_29770(2, v_gi_27815, 0), v_J_29784()) : menuSystem.St("enter");
              break;
            case "chara":
            case "presets":
            case "settings":
            case "masvol":
              v_F_29756.ready.Wn = 0, v_F_29756.ready.Kn = 2, menuSystem.St("endCatMode");
          }
        }
      }
      async function v_It_29787(v_e_29998) {
        if (v_oe_27649.Gi()) return v_oe_27649.hx(v_Rt_29789), await v_oe_27649.Gx(), sceneManager.WS(v_E1_27899), v_j_29799(!0), v_O_29802(), audioFontHub.XS(), !0;
        {
          v_Te_27911.W4(v_Ue_28209("netCommunicating")), await renderer.C7(v_Ge_28204(15));
          let v_i_29999 = await systemMisc.sa();
          if (null === v_i_29999 || 0 !== v_i_29999.status) return v_Te_27911.K4(), v_i_29999 && v_i_29999.message && v_i_29999.message[currentLang] ? await new Promise(v_t_30001 => v_Te_27911.Ai("" + v_i_29999.message[currentLang], v_N0_27771, 0, v_t_30001)) : await new Promise(v_t_30002 => v_Te_27911.Ai(v_Ue_28209("errorNetworkError"), v_N0_27771 | v_U0_27775, 0, v_t_30002)), await renderer.C7(v_Ge_28204(15)), !1;
          let v_t_30000 = 0;
          return v_t_30000 = void 0 === v_e_29998 ? await v_oe_27649.Fx() : await v_oe_27649.Bx(v_e_29998), await renderer.C7(v_Ge_28204(15)), v_Te_27911.K4(), v_t_30000 === v_Ms_28009 && (sceneManager.WS(v_D1_27900), audioFontHub.T0()), v_t_30000 !== v_Ms_28009 ? v_t_30000 === v_Ds_28011 ? await new Promise(v_t_30003 => v_Te_27911.Ai(v_Ue_28209("copRequireLatestVersion"), v_ei_27773 | v_U0_27775, 2e3, v_t_30003)) : void 0 === v_e_29998 ? await new Promise(v_t_30004 => v_Te_27911.Ai(v_Ue_28209("copRoomFailedCreate"), v_ei_27773 | v_U0_27775, 2e3, v_t_30004)) : await new Promise(v_t_30005 => v_Te_27911.Ai(v_Ue_28209("copRoomNotFound"), v_ei_27773 | v_U0_27775, 2e3, v_t_30005)) : v_oe_27649.tx || (await new Promise(v_t_30006 => v_Te_27911.Ai(v_Ue_28209("copRoomJoined"), v_N0_27771, 5e3, v_t_30006))), v_t_30000 === v_Ms_28009;
        }
      }
      async function v_Pt_29788(v_t_30007, v_i_30008) {
        if (!v_oe_27649.Gi() || null !== v_oe_27649.Nx) return !0;
        menuSystem.Ct(!0);
        v_t_30007 = await v_oe_27649.Ux(v_t_30007, v_i_30008);
        return menuSystem.Ct(!1), v_O_29802(), v_t_30007 !== v_Ms_28009 ? await new Promise(v_t_30009 => v_Te_27911.Ai(v_Ue_28209("errorNetworkError"), v_ei_27773 | v_U0_27775, 2e3, v_t_30009)) : await new Promise(v_t_30010 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionOpened"), v_N0_27771, 5e3, v_t_30010)), v_t_30007 === v_Ms_28009;
      }
      async function v_Rt_29789(v_t_30011, v_i_30012) {
        var v_e_30013, v_n_30014;
        v_t_30011 === v_Js_28018 ? (sceneManager.WS(v_E1_27899), v_O_29802(), v_j_29799(), await new Promise(v_t_30015 => v_Te_27911.Ai(v_Ue_28209("copClosedByHost"), v_N0_27771, 5e3, v_t_30015)), "music" !== v_G_29762.r0 && (v_Ae_27892.dn("menu_back"), v_U_29780("music", v_g_29777)), v_J_29784()) : v_t_30011 === v_Vs_28021 ? v_i_30012.nx !== v_oe_27649.sx() && (v_Nt_29796(v_i_30012.nx, v_Et_29792), v_j_29799(), v_J_29784()) : v_t_30011 === v_Ws_28022 ? (v_e_30013 = v_i_30012.yx, (v_n_30014 = v_oe_27649.Ix.get(v_e_30013)) && !v_n_30014.Mx && (v_Fe_28101(() => {
          v_j_29799(), v_J_29784();
        }), v_B_29757.kx) && v_e_30013 === v_B_29757.kx && v_oe_27649.Px && (v_oe_27649.Cx(v_ha_28044), v_Te_27911.Li(), await new Promise(v_t_30016 => v_Te_27911.Ai(v_Ue_28209("copPlaySessionClosedByHost"), v_N0_27771 | v_U0_27775, 5e3, v_t_30016)), "music" !== v_G_29762.r0) && (v_Ae_27892.dn("menu_back"), v_U_29780("music", v_g_29777))) : v_t_30011 === v_js_28019 ? v_i_30012.Hx.nx !== v_oe_27649.sx() && v_Nt_29796(v_i_30012.Hx.nx, v_Ft_29794) : v_t_30011 === v_Os_28020 ? v_i_30012.nx !== v_oe_27649.sx() && v_Nt_29796(v_i_30012.nx, v_Dt_29793) : v_t_30011 === v_Xs_28023 ? v_i_30012.nx !== v_oe_27649.sx() && (v_Nt_29796(v_i_30012.nx, v_Mt_29791), v_O_29802()) : v_t_30011 === v_zs_28024 ? (v_Nt_29796(v_i_30012.nx, v_Lt_29790), v_O_29802()) : v_t_30011 !== v_Zs_28028 && v_t_30011 !== v_ta_28031 || v_O_29802();
      }
      const v_Lt_29790 = 0,
        v_Mt_29791 = 1,
        v_Et_29792 = 2,
        v_Dt_29793 = 3,
        v_Ft_29794 = 4,
        v_Bt_29795 = ["Exit", "Join", "Recruit", "RoomExit", "RoomJoin"];
      function v_Nt_29796(v_t_30017, v_i_30018) {
        var v_e_30019,
          v_t_30017 = v_oe_27649.ix.get(v_t_30017);
        v_t_30017 && ((v_e_30019 = v_L_29745.NA(300, 3, 0, 356)).GA.ot("coopNotificationChara").zt = !0, v_e_30019.GA.ot("coopNotificationChara").Xt = v_t_30017.ux, v_e_30019.GA.ot("coopNotificationPlayerName").Wt = v_t_30017.om, (v_t_30017 = v_e_30019.GA.ot("coopNotificationMessage")).We[0].Je = "coopPlayerNotify" + v_Bt_29795[v_i_30018] + "0", v_t_30017.We[1].Je = "coopPlayerNotify" + v_Bt_29795[v_i_30018] + "1", v_Ae_27892.dn("news_open"));
      }
      function v_Gt_29797() {
        var v_t_30020, v_i_30021;
        let v_e_30022;
        for (const v_n_30023 in v_D_29753) (v_t_30020 = v_D_29753[v_n_30023]).Fi === v_S_29718 && (v_i_30021 = v_Ns_28014.mA(v_t_30020.On.w0, v_t_30020.On.te), v_e_30022 = v_t_30020.ze.ot("musicPanelBadgeClear"), v_i_30021.ni ? v_e_30022.Je = "badgeClear" : v_e_30022.Je = "badgeFailed", v_e_30022.Be = v_i_30021.G4, (v_e_30022 = v_t_30020.ze.ot("musicPanelBadgeRank")).Je = "badge" + rankLabel(v_i_30021.Sr), v_e_30022.Be = v_i_30021.G4, v_e_30022 = v_t_30020.ze.ot("musicPanelBadgeFc"), v_i_30021.B4 ? v_e_30022.Je = "badgeAj" : v_i_30021.R4 && (v_e_30022.Je = "badgeFc"), v_e_30022.Be = v_i_30021.G4 && (v_i_30021.B4 || v_i_30021.R4), v_e_30022 = v_t_30020.ze.ot("musicPanelBadgeFch"), 2 === v_i_30021.M4 ? v_e_30022.Je = "badgeFch2" : v_i_30021.M4 && (v_e_30022.Je = "badgeFch"), v_e_30022.Be = v_i_30021.G4 && v_i_30021.M4, (v_e_30022 = v_t_30020.ze.ot("musicPanelScore")).Wt = v_i_30021.Sr.toLocaleString("ja").replaceAll(",", "C"));
      }
      function v_Ut_29798() {
        let v_i_30024;
        var v_t_30025,
          v_e_30026 = v_be_27857.jp.ik(":sys_none");
        let v_n_30027, v_r_30028, v_s_30029;
        for (const v_a_30030 in v_dt_29754) (v_i_30024 = v_dt_29754[v_a_30030]).Fi === v_C_29723 && (v_t_30025 = v_be_27857.Np.find(v_t_30031 => v_t_30031.C0 === v_i_30024.On.w0), v_n_30027 = handshake.On.nm[v_t_30025.C0], -1 === (v_r_30028 = v_n_30027 ? v_be_27857.jp.ik(v_n_30027.En) : v_be_27857.jp.ik(v_t_30025.Nm)) && (v_r_30028 = v_e_30026), v_s_30029 = v_Er_27955(v_t_30025, v_be_27857.jp[v_r_30028], v_n_30027 ? v_n_30027.jm : 0), v_i_30024.ze.ot("charaPanelName").Wt = v_t_30025.ct[v_s_30029], v_i_30024.ze.ot("charaPanelIllustrator").Wt = v_t_30025.tf[v_s_30029], v_i_30024.ze.ot("charaTransformIcon").Be = v_n_30027 && 0 < v_n_30027.jm, renderer.Yt.Zt["chara:" + v_s_30029 + ":1:" + v_t_30025.C0] && (v_i_30024.ze.ot("charaPanellImg").zt = !0, v_i_30024.ze.ot("charaPanellImg").Xt = "chara:" + v_s_30029 + ":1:" + v_t_30025.C0), v_G_29762._0 || v_nl_28149(v_i_30024.ze.ot("charaPanelSkill"), v_be_27857.jp[v_r_30028]), v_i_30024.ze.ot("charaPanelSkill").Be = !v_G_29762._0, v_i_30024.ze.ot("charaPanelSkillDisabled").Be = !!v_G_29762._0, v_el_28148(v_i_30024.ze, v_n_30027, !1));
      }
      function v_j_29799(v_t_30032) {
        let v_i_30033 = null;
        if ("music" === v_G_29762.r0 && (v_i_30033 = v_f_29769()), v_Ht_29800(), "music" === v_G_29762.r0) {
          var v_e_30034 = v_t_30032 ? 0 : v_G_29762.a0.Jn[v_G_29762.ji].Fi;
          !v_t_30032 && v_e_30034 !== v_p_29712 || (v_G_29762.Ni = 0, v_F_29756.music.Kn = 0), v_t_30032 && (v_G_29762.ji = 0, v_F_29756.music.Wn = 0), v_F_29756.music.Kn = v_G_29762.Ni = v_Qa_28089(v_G_29762.Ni, 0, v_G_29762.a0.Jn[v_G_29762.ji].Bi.length - 1);
          for (let v_t_30035 = 0; v_t_30035 < v_d_29768()[v_G_29762.ji].Bi.length; ++v_t_30035) v_d_29768()[v_G_29762.ji].Bi[v_t_30035].ze.Be = !1;
          v_v_29772(v_gi_27815), v_yt_29773(v_ui_27806), v_H_29781(0, v_i_30033, 0, v_f_29769()), v_G_29762.a0.t0.call(v_G_29762.a0, -1, null, v_G_29762.Ni, v_d_29768()[v_G_29762.ji].Bi[v_G_29762.Ni]);
        } else {
          v_e_30034 = v_t_30032 ? 0 : v_F_29756.music.Jn[v_F_29756.music.Wn].Fi;
          !v_t_30032 && v_e_30034 !== v_p_29712 || (v_F_29756.music.Kn = 0), v_t_30032 && (v_F_29756.music.Wn = 0), v_F_29756.music.Kn = v_Qa_28089(v_F_29756.music.Kn, 0, v_F_29756.music.Jn[v_F_29756.music.Wn].Bi.length - 1);
        }
      }
      function v_Ht_29800() {
        var v_t_30036 = v_F_29756.music || new v_R_29743(),
          v_i_30037 = (v_t_30036.t0 = function (v_t_30052, v_i_30053, v_e_30054, v_n_30055) {
            v_M_29750.gx.Be = !1, v_n_30055 && v_n_30055.On.bx && "music" === v_G_29762.r0 && ((v_n_30055 = (v_n_30055 = v_oe_27649.Ix.get(v_n_30055.On.yx)) ? v_oe_27649.ix.get(v_n_30055.nx) : void 0) ? (v_L_29745.lt.yk(55).zt = !0, v_L_29745.lt.yk(55).Xt = v_n_30055.ux, v_L_29745.lt.yk(57).Wt = v_n_30055.om, v_L_29745.e8(4, v_M_29750.gx), v_M_29750.gx.Be = !0) : v_M_29750.gx.Be = !1);
          }, v_t_30036.yR = v_t_30036.wx = function () {
            var v_t_30056 = v_G_29762.a0.Jn[v_G_29762.ji].Fi;
            v_M_29750.VP.Be = v_t_30056 === v_y_29710 || v_t_30056 === v_m_29711 || v_t_30056 === v_b_29717, v_M_29750.mL.Be = v_t_30056 === v_b_29717, v_M_29750.gx.Be = !1;
          }, {}),
          v_e_30038 = new v_I_29741(),
          v_n_30039 = new v_I_29741(),
          v_r_30040 = new v_I_29741(),
          v_s_30041 = new v_I_29741(),
          v_a_30042 = new v_I_29741(),
          v_o_30043 = new v_I_29741();
        let v_l_30044 = new v_I_29741(),
          v_c_30045,
          v_u_30046,
          v_f_30047 = 0;
        var v___30048, v_h_30049;
        v_t_30036.Qn = function () {
          v_G_29762.u0 && v_j_29799(v_G_29762.u0 = !1);
        }, v_t_30036.e0 = function () {
          var v_t_30057 = v_G_29762.a0.Jn[v_G_29762.ji].Fi;
          v_M_29750.VP.Be = v_t_30057 === v_y_29710 || v_t_30057 === v_m_29711 || v_t_30057 === v_b_29717, v_M_29750.VP.Je = "diffTag_" + v_Q0_27805[v_G_29762.l0], v_M_29750.mL.Be = v_t_30057 === v_b_29717;
        }, v_t_30036.$n = function () {
          v_M_29750.VP.Be = !1, v_M_29750.mL.Be = !1;
        }, v_t_30036.Jn = [];
        let v_d_30050 = "";
        for (const v_w_30058 of v_be_27857.Pp) if (v___30048 = null !== v_w_30058.meta[4], v_h_30049 = null !== v_w_30058.meta[5], v___30048) v_s_30041.Bi.push(v_D_29753[v_w_30058.w0 + "/4"]);else if (v_h_30049 && v_r_30040.Bi.push(v_D_29753[v_w_30058.w0 + "/5"]), void 0 !== (v_u_30046 = void 0 === (v_u_30046 = v_D_29753[v_w_30058.w0 + "/" + v_G_29762.l0]) && 5 === v_G_29762.l0 ? v_D_29753[v_w_30058.w0 + "/3"] : v_u_30046)) {
          switch (v_u_30046.Vn = handshake.l.v.get(v_w_30058.w0), void 0 === v_u_30046.Vn && (v_u_30046.Vn = 99999), v_G_29762.o0) {
            case v_W_29709:
              v_d_30050 = function (v_t_30059) {
                v_t_30059 = v_t_30059.charCodeAt(0);
                let v_i_30060 = 0;
                return v_i_30060 = 65 <= v_t_30059 && v_t_30059 < 72 ? 0 : 72 <= v_t_30059 && v_t_30059 < 79 ? 1 : 79 <= v_t_30059 && v_t_30059 < 86 ? 2 : 86 <= v_t_30059 && v_t_30059 <= 90 ? 3 : 12450 <= v_t_30059 && v_t_30059 < 12459 ? 4 : 12459 <= v_t_30059 && v_t_30059 < 12469 ? 5 : 12469 <= v_t_30059 && v_t_30059 < 12479 ? 6 : 12479 <= v_t_30059 && v_t_30059 < 12490 ? 7 : 12490 <= v_t_30059 && v_t_30059 < 12495 ? 8 : 12495 <= v_t_30059 && v_t_30059 < 12510 ? 9 : 12510 <= v_t_30059 && v_t_30059 < 12516 ? 10 : 12516 <= v_t_30059 && v_t_30059 < 12521 ? 11 : 12521 <= v_t_30059 && v_t_30059 < 12527 ? 12 : 12527 <= v_t_30059 && v_t_30059 <= 12531 ? 13 : 48 <= v_t_30059 && v_t_30059 <= 57 ? 14 : 15, handshake.l.p[v_i_30060];
              }(("" === v_w_30058.x5 ? v_w_30058.lf : v_w_30058.x5).toUpperCase().normalize("NFKD").replace(/[\u3099\u309A]/gu, "").replace(/[ぁ-ん]/g, function (v_t_30061) {
                return String.fromCharCode(v_t_30061.charCodeAt(0) + 96);
              }).replace(/[ーァィゥェォッャュョ]/g, function (v_t_30062) {
                return {
                  "ー": "ウ",
                  "ァ": "ア",
                  "ィ": "イ",
                  "ゥ": "ウ",
                  "ェ": "エ",
                  "ォ": "オ",
                  "ッ": "ツ",
                  "ャ": "ヤ",
                  "ュ": "ユ",
                  "ョ": "ヨ",
                  "ヮ": "ワ"
                }[v_t_30062];
              })), v_u_30046.Un = v_w_30058.x5;
              break;
            case v_V_29708:
              v_d_30050 = function (v_t_30063) {
                let v_i_30064 = 0;
                return v_i_30064 = v_t_30063 < 20220625 ? 0 : v_t_30063 < 20221011 ? 1 : 2, handshake.l.k[v_i_30064];
              }(v_w_30058.I5), v_u_30046.Un = v_w_30058.I5;
              break;
            default:
              v_d_30050 = v_w_30058.y5, v_u_30046.Un = v_u_30046.Vn;
          }
          for (void 0 === (v_c_30045 = v_i_30037[v_d_30050]) && ((v_c_30045 = new v_I_29741()).Fi = v_y_29710, v_c_30045.Ei = v_d_30050, v_G_29762.o0 === v_W_29709 ? v_c_30045.Hn = handshake.l.p.indexOf(v_d_30050) : v_G_29762.o0 === v_V_29708 ? v_c_30045.Hn = handshake.l.k.indexOf(v_d_30050) : v_c_30045.Hn = handshake.l.u.indexOf(v_d_30050), -1 === v_c_30045.Hn && (v_c_30045.Hn = 99999), v_i_30037[v_d_30050] = v_c_30045, v_t_30036.Jn.push(v_c_30045)), v_c_30045.Bi.push(v_u_30046), v_f_30047 = 0; v_f_30047 < (v_h_30049 ? 6 : 5); ++v_f_30047) 4 !== v_f_30047 && null !== v_w_30058.meta[v_f_30047] && v_w_30058.meta[v_f_30047].k5 === v_T_29740[v_G_29762.ie] && v_n_30039.Bi.push(v_D_29753[v_w_30058.w0 + "/" + v_f_30047]);
        }
        v_t_30036.Jn.sort(function (v_t_30065, v_i_30066) {
          return v_t_30065.Hn - v_i_30066.Hn;
        });
        for (const v_g_30067 of v_t_30036.Jn) v_g_30067.Bi.sort(function (v_t_30068, v_i_30069) {
          return "string" == typeof v_t_30068.Un ? v_t_30068.Un.localeCompare(v_i_30069.Un) : v_t_30068.Un - v_i_30069.Un;
        });
        if (v_e_30038.Fi = v_m_29711, v_e_30038.Ei = v_Ue_28209("musicSelectCategoryRandom"), v_e_30038.Bi.push(v_D_29753[v_lt_29735 + "/" + v_G_29762.l0]), v_t_30036.Jn.push(v_e_30038), v_n_30039.Fi = v_p_29712, v_n_30039.Ei = "LEVEL " + v_T_29740[v_G_29762.ie], 0 === v_n_30039.Bi.length && v_n_30039.Bi.push(v_D_29753[v_st_29732]), v_n_30039.Bi.sort(function (v_t_30070, v_i_30071) {
          return v_t_30070.On.te !== v_i_30071.On.te ? v_t_30070.On.te - v_i_30071.On.te : v_t_30070.Vn - v_i_30071.Vn;
        }), v_t_30036.Jn.push(v_n_30039), 0 < v_r_30040.Bi.length && (v_r_30040.Fi = v_k_29713, v_t_30036.Jn.push(v_r_30040)), 0 < v_s_30041.Bi.length && (v_s_30041.Fi = v_X_29714, v_t_30036.Jn.push(v_s_30041)), v_oe_27649.Gi() || (v_a_30042.Fi = v_z_29715, v_a_30042.Ei = "", v_a_30042.Bi.push(v_D_29753[v_at_29733]), v_t_30036.Jn.push(v_a_30042), v_o_30043.Fi = v_K_29716, v_o_30043.Ei = "", v_o_30043.Bi.push(v_D_29753[v_ot_29734]), v_t_30036.Jn.push(v_o_30043)), v_zt_27655) {
          v_l_30044.Fi = v_b_29717, v_l_30044.Ei = "";
          for (var v_v_30051 of v_gt_29761) v_D_29753[v_gt_29761] && delete v_D_29753[v_gt_29761];
          v_gt_29761 = [], v_oe_27649.Gi() ? (v_l_30044.Bi.push(v_D_29753[v_ft_29738]), v_oe_27649.Ix.size || v_l_30044.Bi.push(v_D_29753[v__t_29739]), v_oe_27649.Ix.forEach((v_e_30072, v_n_30073) => {
            if (!v_e_30072.Mx) {
              var v_r_30074 = v_oe_27649.jx(v_e_30072.yx),
                v_s_30075 = v_e_30072.ng,
                v_a_30076 = null !== v_s_30075.meta[4],
                v_o_30077 = null !== v_s_30075.meta[5];
              let v_t_30078 = v_G_29762.l0;
              v_a_30076 ? v_t_30078 = 4 : 5 !== v_G_29762.l0 || v_o_30077 || (v_t_30078 = 3);
              v_a_30076 = new v_P_29742(), v_o_30077 = (v_a_30076.Fi = v_S_29718, v_a_30076.ze = v_E_29751.musicPanel.Ve(!0), v_a_30076.ze.Te = 0, v_a_30076.ze.Qt = 0, v_a_30076.ze.Be = !1, v_a_30076.ze.un = !0, v_a_30076.ze.ot("musicPanelTitle").Wt = v_s_30075.lf, v_a_30076.ze.ot("musicPanelArtist").Wt = v_s_30075.C5, v_a_30076.ze.ot("musicPanelBpm").Wt = "" + mathFloor(v_s_30075.A5).toFixed(0), v_a_30076.ze.ot("musicPanelBg").Je = "panel_" + v_Q0_27805[v_t_30078], v_a_30076.ze.ot("musicPanelScore").Wt = "0", v_a_30076.ze.ot("musicPanelJacket").zt = !0, v_a_30076.ze.ot("musicPanelJacket").Xt = v_e_30072.Jx, v_a_30076.On = {
                S0: null === v_s_30075.meta[v_t_30078],
                w0: v_r_30074,
                te: v_t_30078,
                bx: !0,
                yx: v_n_30073
              }, v_Ns_28014.mA(v_s_30075.w0, v_t_30078));
              let v_i_30079 = v_a_30076.ze.ot("musicPanelBadgeClear");
              v_o_30077.ni ? v_i_30079.Je = "badgeClear" : v_i_30079.Je = "badgeFailed", v_i_30079.Be = v_o_30077.G4, (v_i_30079 = v_a_30076.ze.ot("musicPanelBadgeRank")).Je = "badge" + rankLabel(v_o_30077.Sr), v_i_30079.Be = v_o_30077.G4, v_i_30079 = v_a_30076.ze.ot("musicPanelBadgeFc"), v_o_30077.B4 ? v_i_30079.Je = "badgeAj" : v_o_30077.R4 && (v_i_30079.Je = "badgeFc"), v_i_30079.Be = v_o_30077.G4 && (v_o_30077.B4 || v_o_30077.R4), v_i_30079 = v_a_30076.ze.ot("musicPanelBadgeFch"), 2 === v_o_30077.M4 ? v_i_30079.Je = "badgeFch2" : v_o_30077.M4 && (v_i_30079.Je = "badgeFch"), v_i_30079.Be = v_o_30077.G4 && v_o_30077.M4, (v_i_30079 = v_a_30076.ze.ot("musicPanelScore")).Wt = v_o_30077.Sr.toLocaleString("ja").replaceAll(",", "C"), null === v_s_30075.meta[v_t_30078] ? (v_a_30076.ze.ot("musicPanelLevel").Be = !1, v_a_30076.ze.ot("musicPanelDesigner").Wt = "", v_a_30076.ze.Ze(v_E_29751.noChartOverlay.Ve(!0)).Be = !0) : (v_a_30076.ze.ot("musicPanelDesigner").Wt = v_s_30075.meta[v_t_30078].T5, v_a_30076.ze.ot("musicPanelLevelBg").Je = 4 !== v_t_30078 ? "panelPartLevel" : "panelPartLevelWe", v_e_30072 = v_a_30076.ze.ot("musicPanelLevel"), v_n_30073 = v_a_30076.ze.ot("musicPanelLevelWe"), 4 !== v_t_30078 ? (v_e_30072.Be = !0, v_n_30073.Be = !1, v_e_30072.ot("numLevel").Wt = v_s_30075.meta[v_t_30078].k5.replace(/\+/g, ""), v_e_30072.ot("numLevelPlus").Be = -1 !== v_s_30075.meta[v_t_30078].k5.indexOf("+")) : (v_e_30072.Be = !1, v_n_30073.Be = !0, v_n_30073.ot("musicPanelWeLevelNum").Wt = "r".repeat(v_Qa_28089(v_Pe_28064(v_s_30075.meta[v_t_30078].k5), 1, 5)), v_n_30073.ot("musicPanelWeAttr").Wt = v_s_30075.meta[v_t_30078].b5));
              v_o_30077 = v_r_30074 + "/" + v_t_30078;
              v_D_29753[v_o_30077] = v_a_30076, v_gt_29761.push(v_o_30077), v_l_30044.Bi.push(v_a_30076);
            }
          })) : (v_l_30044.Bi.push(v_D_29753[v_ct_29736]), v_l_30044.Bi.push(v_D_29753[v_ut_29737])), v_t_30036.Jn.push(v_l_30044);
        }
        v_F_29756.music = v_t_30036;
      }
      function v_Jt_29801(v_t_30080) {
        let v_e_30081 = v_t_30080;
        var v_n_30082,
          v_r_30083 = (v_e_30081 = v_e_30081 || {
            ee: handshake.On.q.ee,
            ne: handshake.On.q.ne,
            te: handshake.On.q.te,
            HP: handshake.On.q.HP
          }).ee,
          v_s_30084 = v_F_29756.music;
        let v_a_30085 = !1;
        for (let v_i_30086 = 0; v_i_30086 < v_s_30084.Jn.length; ++v_i_30086) if (((v_n_30082 = v_s_30084.Jn[v_i_30086]).Fi === v_p_29712 || v_n_30082.Fi === v_X_29714 || v_n_30082.Fi === v_k_29713 || v_n_30082.Fi === v_y_29710) && !(v_e_30081.ne && v_n_30082.Fi !== v_p_29712 || 4 === v_e_30081.te && v_n_30082.Fi !== v_X_29714 || v_e_30081.HP && v_n_30082.Fi !== v_k_29713)) {
          for (let v_t_30087 = 0; v_t_30087 < v_n_30082.Bi.length; ++v_t_30087) if (v_n_30082.Bi[v_t_30087].Fi === v_S_29718 && v_n_30082.Bi[v_t_30087].On.w0 === v_r_30083) {
            v_s_30084.Wn = v_i_30086, v_s_30084.Kn = v_t_30087, v_a_30085 = !0;
            break;
          }
          if (v_a_30085) break;
        }
        v_a_30085 || (v_s_30084.Wn = v_Qa_28089(v_s_30084.Wn, 0, v_s_30084.Jn.length - 1), v_s_30084.Kn = v_Qa_28089(v_s_30084.Kn, 0, v_s_30084.Jn[v_s_30084.Wn].Bi.length - 1));
      }
      function v_O_29802() {
        var v_e_30088 = v_F_29756.ready;
        if (v_e_30088) {
          v_e_30088 = v_e_30088.Jn[0];
          if (v_e_30088) {
            var v_n_30089 = v_e_30088.Bi[0].ze.ot("matchingPanelDisabled"),
              v_e_30088 = v_e_30088.Bi[0].ze.ot("matchingPanelPlayersBox");
            if (v_oe_27649.Gi() && null !== v_oe_27649.Px) {
              v_n_30089.Be = !1, v_e_30088.Be = !0, v_e_30088.ot("matchingPanelPlayersBoxStatus").Be = !1;
              var v_r_30090,
                v_s_30091,
                v_a_30092,
                v_o_30093,
                v_l_30094 = v_e_30088.ot("matchingPanelPlayersBoxPlayers");
              for (v_r_30090 of v_l_30094.We) v_r_30090.Be = !1;
              let v_t_30095 = 0,
                v_i_30096 = 1 < v_oe_27649.Ox.length;
              for (v_s_30091 of v_oe_27649.Ox) v_s_30091.Ae !== v_oe_27649.sx() && ((v_o_30093 = v_s_30091.ru & v_oa_28038) || (v_i_30096 = !1), (v_a_30092 = v_l_30094.We[v_t_30095]).Be = !0, v_a_30092.ot("matchingPanelPlayersBoxPlayerStatusReady").Be = v_o_30093, v_a_30092.ot("matchingPanelPlayersBoxPlayerStatusPreparing").Be = !v_o_30093, v_o_30093 ? v_L_29745.e8(1, v_a_30092) : v_L_29745.e8(9, v_a_30092), (v_o_30093 = v_oe_27649.ix.get(v_s_30091.Ae)) && v_rl_28150(v_a_30092, v_o_30093), ++v_t_30095);
              (v_e_30088.ot("matchingPanelPlayersBoxStatus").Be = v_i_30096) && v_L_29745.e8(1, v_e_30088.ot("matchingPanelPlayersBoxStatus"));
            } else v_n_30089.Be = !0, v_e_30088.Be = !1;
          }
        }
      }
      function v_jt_29803(v_t_30097, v_i_30098) {
        "updown" === v_Ie_27966.F0(v_t_30097.On.w0).Fi && (v_i_30098 ? (v_L_29745.e8(20, v_t_30097.ze), v_t_30097.ze.ot("settingPanelUpDownPlusFx").Be = !0) : (v_L_29745.e8(17, v_t_30097.ze), v_t_30097.ze.ot("settingPanelUpDownMinusFx").Be = !0), v_L_29745.e8(16, v_t_30097.ze)), "showRating" === v_t_30097.On.w0 ? playerInfoBoard.J4(handshake.rm.lm, v_Ie_27966.D0("showRating")) : "showLevel" === v_t_30097.On.w0 && playerInfoBoard.O4(handshake.rm.um, v_Ie_27966.D0("showLevel")), "tapSe" === v_t_30097.On.w0 && (v_Ae_27892.i6("change_value"), v_Ae_27892.dn("tap_" + v_f0_27709[v_Ie_27966.D0("tapSe")]));
      }
      function v_Ot_29804() {
        let v_i_30099, v_e_30100;
        for (let v_t_30115 = 0; v_t_30115 < v_vt_29755.length; ++v_t_30115) {
          v_i_30099 = v_vt_29755[v_t_30115], v_e_30100 = v_Ie_27966.F0(v_i_30099.On.w0);
          var v_n_30101,
            v_r_30102,
            v_s_30103,
            v_a_30104,
            v_o_30105 = v_Ie_27966.E0(v_i_30099.On.w0);
          "binaly" === v_e_30100.Fi ? v_i_30099.On.B0 !== v_o_30105 && (0 === v_o_30105 ? v_L_29745.e8(18, v_i_30099.ze) : v_L_29745.e8(19, v_i_30099.ze), v_i_30099.On.B0 = v_o_30105) : "updown" === v_e_30100.Fi ? (v_s_30103 = v_i_30099.ze.ot("settingPanelValueText"), v_n_30101 = v_i_30099.ze.ot("settingPanelValueImg"), v_r_30102 = v_i_30099.ze.ot("settingPanelValue"), v_e_30100.R0[v_o_30105].M0 ? (v_s_30103.Be = !0, v_r_30102.Be = !1, v_n_30101.Be = !1, v_s_30103.Wt = v_e_30100.R0[v_o_30105].Wt) : (v_a_30104 = "@" === v_e_30100.R0[v_o_30105].Wt.substr(0, 1), v_s_30103.Be = !1, v_r_30102.Be = !v_a_30104, (v_n_30101.Be = v_a_30104) ? v_n_30101.Je = "msgVal" + v_e_30100.R0[v_o_30105].Wt.substr(1) : v_r_30102.Je = "msgVal" + v_e_30100.R0[v_o_30105].Wt)) : "binaly" === v_e_30100.Fi && (v_i_30099.ze.ot("settingPanelToggleOff").Be = 0 === v_o_30105, v_i_30099.ze.ot("settingPanelToggleOffD").Be = 1 === v_o_30105, v_i_30099.ze.ot("settingPanelToggleOn").Be = 1 === v_o_30105, v_i_30099.ze.ot("settingPanelToggleOnD").Be = 0 === v_o_30105), "field" === v_i_30099.On.P0 ? (v_i_30099.ze.ot("settingPanelPreviewFieldBg").qe = 1 - v_Ie_27966.D0("fieldColor") / 5 * .75, 0 === (v_s_30103 = v_Ie_27966.E0("fieldLines")) ? (v_i_30099.ze.ot("settingPanelPreviewFieldLinesLeft").Be = !1, v_i_30099.ze.ot("settingPanelPreviewFieldLinesRight").Be = !1) : (v_i_30099.ze.ot("settingPanelPreviewFieldLinesLeft").Je = "previewFieldLines" + (v_s_30103 - 1), v_i_30099.ze.ot("settingPanelPreviewFieldLinesLeft").Be = !0, v_i_30099.ze.ot("settingPanelPreviewFieldLinesRight").Je = "previewFieldLines" + (v_s_30103 - 1), v_i_30099.ze.ot("settingPanelPreviewFieldLinesRight").Be = !0), "judgeAnsPos" === v_i_30099.On.w0 && (v_i_30099.ze.ot("settingPanelPreviewFieldJudge").Je = "previewFieldJudge" + v_o_30105), "fieldWall" === v_i_30099.On.w0 && (v_a_30104 = v_i_30099.ze.ot("settingPanelPreviewFieldWall"), 0 === v_o_30105 && (v_a_30104.G0 = 0, v_a_30104.Oe[0] = .214814815), 1 === v_o_30105 && (v_a_30104.G0 = 4, v_a_30104.Oe[0] = .231345029), 2 === v_o_30105 && (v_a_30104.G0 = 7, v_a_30104.Oe[0] = .24374269), 3 === v_o_30105 && (v_a_30104.G0 = 10, v_a_30104.Oe[0] = .256140351), 4 === v_o_30105 && (v_a_30104.G0 = 14, v_a_30104.Oe[0] = .272670565), 5 === v_o_30105 && (v_a_30104.G0 = 19, v_a_30104.Oe[0] = .293333333), 6 === v_o_30105 && (v_a_30104.G0 = 25, v_a_30104.Oe[0] = .318128655), 7 === v_o_30105 && (v_a_30104.G0 = 30, v_a_30104.Oe[0] = .338791423), 8 === v_o_30105 && (v_a_30104.G0 = 38, v_a_30104.Oe[0] = .371851852), 9 === v_o_30105 && (v_a_30104.G0 = 45, v_a_30104.Oe[0] = .400779727), 10 === v_o_30105 && (v_a_30104.G0 = 56, v_a_30104.Oe[0] = .446237817), 11 === v_o_30105 && (v_a_30104.G0 = 68, v_a_30104.Oe[0] = .49582846), 12 === v_o_30105 && (v_a_30104.G0 = 85, v_a_30104.Oe[0] = .566081871), 13 === v_o_30105 && (v_a_30104.G0 = 106, v_a_30104.Oe[0] = .652865497), 14 === v_o_30105 && (v_a_30104.G0 = 134, v_a_30104.Oe[0] = .768576998), 15 === v_o_30105 && (v_a_30104.G0 = 172, v_a_30104.Oe[0] = .925614035), 16 === v_o_30105) && (v_a_30104.G0 = 190, v_a_30104.Oe[0] = 1), v_s_30103 = v_Ie_27966.D0("fieldInfo"), v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Be = 0 !== v_s_30103, 1 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldCombo"), 2 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldScoreP"), 3 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldScoreN"), 10 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankS"), 11 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankSp"), 12 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankSs"), 13 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankSsp"), 14 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankSss"), 15 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldRankSssp"), 20 === v_s_30103 && (v_i_30099.ze.ot("settingPanelPreviewFieldInfo").Je = "previewFieldMybest")) : "judge" === v_i_30099.On.P0 && (v_i_30099.ze.ot("settingPanelPreviewJudgeAnswerJust").qe = 0 === v_o_30105 || 1 === v_o_30105 ? 1 : .1875, v_i_30099.ze.ot("settingPanelPreviewJudgeAnswerFast").qe = 1 === v_o_30105 || 2 === v_o_30105 ? 1 : .1875, v_i_30099.ze.ot("settingPanelPreviewJudgeAnswerLate").qe = 1 === v_o_30105 || 2 === v_o_30105 ? 1 : .1875);
        }
        var v_t_30106 = v_F_29756.presets.Jn[0].Bi[3].ze.ot("presetPanelMasWindow"),
          v_l_30107 = v_F_29756.presets.Jn[0].Bi[3].ze.ot("presetPanelMasView");
        let v_c_30108, v_u_30109, v_f_30110;
        v_c_30108 = v_Ie_27966.E0("scrollSpeed");
        var v___30111 = "Sonic" === (v_e_30100 = v_Ie_27966.F0("scrollSpeed")).R0[v_c_30108].Wt,
          v_h_30112 = v_l_30107.ot("presetPanelMasViewValSpeed"),
          v_d_30113 = v_l_30107.ot("presetPanelMasViewValSpeedSonic"),
          v_v_30114 = v_t_30106.ot("presetPanelMasWindowNum"),
          v_t_30106 = v_t_30106.ot("presetPanelMasWindowSonic"),
          v_d_30113 = (v_h_30112.Be = !v___30111, v_d_30113.Be = v___30111, v_h_30112.Wt = v_e_30100.R0[v_c_30108].Wt, v_v_30114.Be = !v___30111, v_t_30106.Be = v___30111, v_v_30114.Wt = v_e_30100.R0[v_c_30108].Wt, v_c_30108 = v_Ie_27966.E0("mirror"), v_l_30107.ot("presetPanelMasViewValMirror").Je = 0 === v_c_30108 ? "msgValOff" : "msgValOn", v_c_30108 = v_Ie_27966.E0("jdgTimingA"), v_e_30100 = v_Ie_27966.F0("jdgTimingA"), v_l_30107.ot("presetPanelMasViewValTimingA").Wt = v_e_30100.R0[v_c_30108].Wt, v_c_30108 = v_Ie_27966.E0("jdgTimingB"), v_e_30100 = v_Ie_27966.F0("jdgTimingB"), v_l_30107.ot("presetPanelMasViewValTimingB").Wt = v_e_30100.R0[v_c_30108].Wt, v_c_30108 = v_Ie_27966.E0("volJustice"), v_e_30100 = v_Ie_27966.F0("volJustice"), v_u_30109 = v_l_30107.ot("presetPanelMasViewValTapSe"), v_f_30110 = v_l_30107.ot("presetPanelMasViewValTapSeSp"), v_e_30100.R0[v_c_30108].M0 ? (v_u_30109.Be = !0, v_f_30110.Be = !1, v_u_30109.Wt = v_e_30100.R0[v_c_30108].Wt) : (v_u_30109.Be = !1, v_f_30110.Be = !0, v_f_30110.Je = "msgVal" + v_e_30100.R0[v_c_30108].Wt), v_c_30108 = v_Ie_27966.E0("volGuide"), v_e_30100 = v_Ie_27966.F0("volGuide"), v_u_30109 = v_l_30107.ot("presetPanelMasViewValGuideSe"), v_f_30110 = v_l_30107.ot("presetPanelMasViewValGuideSeSp"), v_e_30100.R0[v_c_30108].M0 ? (v_u_30109.Be = !0, v_f_30110.Be = !1, v_u_30109.Wt = v_e_30100.R0[v_c_30108].Wt) : (v_u_30109.Be = !1, v_f_30110.Be = !0, v_f_30110.Je = "msgVal" + v_e_30100.R0[v_c_30108].Wt), v_c_30108 = v_Ie_27966.E0("fieldWall"), v_e_30100 = v_Ie_27966.F0("fieldWall"), v_l_30107.ot("presetPanelMasViewValFieldWall").Wt = v_e_30100.R0[v_c_30108].Wt, v_c_30108 = v_Ie_27966.E0("fieldInfo"), v_e_30100 = v_Ie_27966.F0("fieldInfo"), v_l_30107.ot("presetPanelMasViewValFieldInfo").Je = "msgVal" + v_e_30100.R0[v_c_30108].Wt, v_c_30108 = v_Ie_27966.E0("trackSkip"), v_e_30100 = v_Ie_27966.F0("trackSkip"), v_l_30107.ot("presetPanelMasViewValTrackSkip").Je = "msgVal" + v_e_30100.R0[v_c_30108].Wt, v_F_29756.masvol.Jn[0].Bi[0].ze),
          v_h_30112 = handshake.On.Xp.Yp / 100;
        v_d_30113.ot("masterVolPanelFg").ln(.95356 * v_h_30112 + .02321), v_d_30113.ot("masterVolPanelFg").gt[2] = .95356 * v_h_30112 + .02321, v_d_30113.ot("masterVolPanelThumb").$e(308 * v_h_30112);
      }
      function v_t_30123() {
        if (!v_wt_29759) {
          v_wt_29759 = !0;
          {
            let v_t_30135 = 0,
              v_i_30136 = -1;
            var v_n_30116, v_r_30117, v_s_30118, v_a_30119;
            let v_e_30137;
            for (const v_p_30138 of v_be_27857.Pp) {
              for (v_n_30116 = null !== v_p_30138.meta[4], v_r_30117 = null !== v_p_30138.meta[5], v_i_30136 = -1, v_t_30135 = 5; 0 <= v_t_30135; --v_t_30135) if (null !== v_p_30138.meta[v_t_30135]) {
                v_i_30136 = v_t_30135;
                break;
              }
              if (-1 !== v_i_30136) for (v_t_30135 = 0; v_t_30135 < (v_r_30117 ? 6 : 5); ++v_t_30135) v_n_30116 ^ 4 === v_t_30135 || ((v_e_30137 = new v_P_29742()).Fi = v_S_29718, v_e_30137.ze = v_E_29751.musicPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_e_30137.ze.un = !0, v_e_30137.ze.ot("musicPanelTitle").Wt = v_p_30138.lf, v_e_30137.ze.ot("musicPanelArtist").Wt = v_p_30138.C5, v_e_30137.ze.ot("musicPanelBpm").Wt = "" + mathFloor(v_p_30138.A5).toFixed(0), v_e_30137.ze.ot("musicPanelBg").Je = "panel_" + v_Q0_27805[v_t_30135], v_e_30137.ze.ot("musicPanelScore").Wt = "0", renderer.Yt.Zt["jkt:" + v_p_30138.w0] && (v_e_30137.ze.ot("musicPanelJacket").zt = !0, v_e_30137.ze.ot("musicPanelJacket").Xt = "jkt:" + v_p_30138.w0), v_e_30137.On = {
                S0: null === v_p_30138.meta[v_t_30135],
                w0: v_p_30138.w0,
                te: v_t_30135,
                bx: !1
              }, null === v_p_30138.meta[v_t_30135] ? (v_e_30137.ze.ot("musicPanelLevel").Be = !1, v_e_30137.ze.ot("musicPanelDesigner").Wt = "", v_e_30137.ze.Ze(v_E_29751.noChartOverlay.Ve(!0)).Be = !0) : (v_e_30137.ze.ot("musicPanelDesigner").Wt = v_p_30138.meta[v_t_30135].T5, v_e_30137.ze.ot("musicPanelLevelBg").Je = 4 !== v_t_30135 ? "panelPartLevel" : "panelPartLevelWe", v_s_30118 = v_e_30137.ze.ot("musicPanelLevel"), v_a_30119 = v_e_30137.ze.ot("musicPanelLevelWe"), 4 !== v_t_30135 ? (v_s_30118.Be = !0, v_a_30119.Be = !1, v_s_30118.ot("numLevel").Wt = v_p_30138.meta[v_t_30135].k5.replace(/\+/g, ""), v_s_30118.ot("numLevelPlus").Be = -1 !== v_p_30138.meta[v_t_30135].k5.indexOf("+")) : (v_s_30118.Be = !1, v_a_30119.Be = !0, v_a_30119.ot("musicPanelWeLevelNum").Wt = "r".repeat(v_Qa_28089(v_Pe_28064(v_p_30138.meta[v_t_30135].k5), 1, 5)), v_a_30119.ot("musicPanelWeAttr").Wt = v_p_30138.meta[v_t_30135].b5)), v_D_29753[v_p_30138.w0 + "/" + v_t_30135] = v_e_30137);
            }
            (v_e_30137 = new v_P_29742()).Fi = v_A_29719, v_e_30137.ze = v_E_29751.musicPanelNoData.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_st_29732] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_tt_29727, v_e_30137.ze = v_E_29751.courseSelectPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_at_29733] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_it_29728, v_e_30137.ze = v_E_29751.userBoxPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_ot_29734] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_et_29729, v_e_30137.ze = v_E_29751.matchingPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_ct_29736] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_nt_29730, v_e_30137.ze = v_E_29751.joinMatchingPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_ut_29737] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_rt_29731, v_e_30137.ze = v_E_29751.exitMatchingPanel.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v_ft_29738] = v_e_30137, (v_e_30137 = new v_P_29742()).Fi = v_A_29719, v_e_30137.ze = v_E_29751.matchingNoMusic.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_D_29753[v__t_29739] = v_e_30137;
            for (let v_t_30139 = 0; v_t_30139 < 6; ++v_t_30139) 4 !== v_t_30139 && ((v_e_30137 = new v_P_29742()).Fi = v_Y_29720, v_e_30137.ze = v_E_29751.musicPanelRandom.Ve(!0), v_e_30137.ze.Te = 0, v_e_30137.ze.Qt = 0, v_e_30137.ze.Be = !1, v_e_30137.ze.ot("musicPanelBg").Je = "panel_" + v_Q0_27805[v_t_30139], v_D_29753[v_lt_29735 + "/" + v_t_30139] = v_e_30137);
          }
          {
            var v_i_30120;
            let v_t_30140;
            for (v_t_30140 of v_be_27857.Np) {
              (v_i_30120 = new v_P_29742()).Fi = v_C_29723, v_i_30120.ze = v_E_29751.charaPanel.Ve(!0), v_i_30120.ze.Te = 0, v_i_30120.ze.Qt = 0, v_i_30120.ze.Be = !1, v_i_30120.ze.un = !0;
              var v_e_30121 = v_i_30120.ze.ot("charaPanellImg"),
                v_o_30122 = v_i_30120.ze.ot("charaPanellImg_sq");
              v_e_30121.Be = !v_t_30140.ub, v_o_30122.Be = v_t_30140.ub, v_t_30140.ub && (v_e_30121.ct = "charaPanellImg_", v_o_30122.ct = "charaPanellImg"), v_i_30120.On = {
                w0: v_t_30140.C0
              }, v_dt_29754[v_t_30140.C0] = v_i_30120;
            }
          }
          var v_t_30123 = v_Ie_27966.j0(),
            v_l_30124 = new v_R_29743();
          v_l_30124.Xn = !1, v_l_30124.OP = function () {
            this.Wn = 0, this.Kn = 0;
          };
          for (const v_k_30141 of v_t_30123) {
            var v_c_30125 = new v_I_29741();
            v_c_30125.Ei = v_k_30141.N0;
            for (const v_b_30142 of v_k_30141.Bi) {
              var v_u_30126 = new v_P_29742();
              v_u_30126.Fi = v_Z_29724, "updown" === v_b_30142.Fi ? v_u_30126.ze = v_E_29751.settingPanelUpDown.Ve(!0) : v_u_30126.ze = v_E_29751.settingPanelToggle.Ve(!0), v_u_30126.ze.ot("settingPanelTitle").Je = "msgTitle" + v_b_30142.H0, v_u_30126.ze.ot("settingPanelDesc").Je = "msgDesc" + v_b_30142.H0, v_u_30126.ze.Te = 0, v_u_30126.ze.Qt = 0, v_u_30126.ze.Be = !1, "updown" === v_b_30142.Fi && (v_u_30126.ze.ot("settingPanelUpDownPlusFx").Be = !1, v_u_30126.ze.ot("settingPanelUpDownMinusFx").Be = !1);
              let v_t_30143 = "",
                v_i_30144;
              switch (v_b_30142.Ae) {
                case "judgeAnsPos":
                case "fieldLines":
                case "fieldColor":
                case "fieldWall":
                case "fieldInfo":
                  (v_i_30144 = v_E_29751.settingPanelPreviewField.Ve(!0)).Be = !0, "judgeAnsPos" !== v_b_30142.Ae && (v_i_30144.ot("settingPanelPreviewFieldJudge").Be = !1), "fieldWall" !== v_b_30142.Ae && (v_i_30144.ot("settingPanelPreviewFieldWall").Be = !1), v_u_30126.ze.Ze(v_i_30144), v_t_30143 = "field";
                  break;
                case "judgeAnsJcDetails":
                case "judgeAnsADetails":
                case "judgeAnsJDetails":
                  (v_i_30144 = v_E_29751.settingPanelPreviewJudgeAnswer.Ve(!0)).Be = !0, "judgeAnsJcDetails" === v_b_30142.Ae ? v_i_30144.ot("settingPanelPreviewJudgeAnswerJust").Je = "previewJudgeJc" : "judgeAnsJDetails" === v_b_30142.Ae ? v_i_30144.ot("settingPanelPreviewJudgeAnswerJust").Je = "previewJudgeJ" : "judgeAnsADetails" === v_b_30142.Ae && (v_i_30144.ot("settingPanelPreviewJudgeAnswerJust").Je = "previewJudgeA"), v_u_30126.ze.Ze(v_i_30144), v_t_30143 = "judge";
                  break;
                case "volGuide":
                case "volJustice":
                case "volTap":
                case "volExTap":
                case "volSlide":
                case "volAir":
                case "volFlick":
                case "volSkill":
                  (v_i_30144 = v_E_29751.settingPanelPreviewSound.Ve(!0)).Be = !0, v_u_30126.ze.Ze(v_i_30144), v_t_30143 = "sound";
                  break;
                case "jTimingSeCond":
                  (v_i_30144 = v_E_29751.settingPanelPreviewSound.Ve(!0)).Be = !0, v_u_30126.ze.Ze(v_i_30144);
              }
              v_u_30126.On = {
                w0: v_b_30142.Ae,
                P0: v_t_30143,
                B0: null
              }, v_c_30125.Bi.push(v_u_30126), v_vt_29755.push(v_u_30126);
            }
            v_l_30124.Jn.push(v_c_30125);
          }
          v_F_29756.settings = v_l_30124;
          {
            var v_t_30123 = new v_R_29743(),
              v_f_30127 = (v_t_30123.zn = !1, v_t_30123.Xn = !1, v_t_30123.OP = function () {
                this.Kn = handshake.On.re;
              }, new v_I_29741());
            let v_i_30145;
            for (let v_t_30146 = 0; v_t_30146 < 3; ++v_t_30146) (v_i_30145 = new v_P_29742()).Fi = v_q_29721 + v_t_30146, v_i_30145.ze = v_E_29751.presetPanel.Ve(!0), v_i_30145.ze.ot("presetPanelBg").Je = "panelPreset" + ["Bas", "Adv", "Exp"][v_t_30146], v_i_30145.ze.Te = 0, v_i_30145.ze.Qt = 0, v_i_30145.ze.Be = !1, v_f_30127.Bi.push(v_i_30145);
            (v_i_30145 = new v_P_29742()).Fi = v_x_29722, v_i_30145.ze = v_E_29751.presetPanelMas.Ve(!0), v_i_30145.ze.Te = 0, v_i_30145.ze.Qt = 0, v_i_30145.ze.Be = !1, v_L_29745.e8(15, v_i_30145.ze), v_f_30127.Bi.push(v_i_30145), v_t_30123.t0 = function (v_t_30147, v_i_30148, v_e_30149, v_n_30150) {
              -1 !== v_t_30147 && v_i_30148.Fi === v_x_29722 && v_L_29745.e8(15, v_i_30148.ze), -1 !== v_e_30149 && v_n_30150.Fi === v_x_29722 && "presets" === v_G_29762.r0 && v_L_29745.e8(14, v_n_30150.ze);
            }, v_t_30123.Jn.push(v_f_30127), v_F_29756.presets = v_t_30123;
          }
          {
            var v___30128,
              v_h_30129 = new v_R_29743(),
              v_d_30130 = {};
            let v_t_30151, v_i_30152;
            for (v_i_30152 of v_be_27857.Np) void 0 !== (v___30128 = v_dt_29754[v_i_30152.C0]) && (void 0 === (v_t_30151 = v_d_30130[v_i_30152.Wm]) && ((v_t_30151 = new v_I_29741()).Fi = v_y_29710, v_t_30151.Ei = v_i_30152.Wm, v_d_30130[v_i_30152.Wm] = v_t_30151, v_h_30129.Jn.push(v_t_30151)), v_t_30151.Bi.push(v___30128));
            v_F_29756.chara = v_h_30129;
          }
          (v_t_30123 = new v_R_29743()).zn = !1, v_t_30123.Xn = !1, v_w_30132 = new v_I_29741(), (v_v_30131 = new v_P_29742()).Fi = v_$_29725, v_v_30131.ze = v_E_29751.masterVolPanel.Ve(!0), v_v_30131.ze.Te = 0, v_v_30131.ze.Qt = 0, v_v_30131.ze.Be = !1, v_w_30132.Bi.push(v_v_30131), v_t_30123.Jn.push(v_w_30132), v_F_29756.masvol = v_t_30123;
          var v_v_30131 = new v_R_29743(),
            v_w_30132 = (v_v_30131.zn = !1, v_v_30131.Xn = !1, v_v_30131.Qn = function () {
              this.Jn[0].Bi[1] = v_dt_29754[v_N_29758.w0], this.Jn[0].Bi[2] = v_D_29753[v_B_29757.w0 + "/" + v_B_29757.p0], 5 !== v_B_29757.p0 || this.Jn[0].Bi[2] || (this.Jn[0].Bi[2] = v_D_29753[v_B_29757.w0 + "/3"]), this.Jn[0].Bi[2] || (this.Jn[0].Bi[2] = v_D_29753[v_st_29732]), this.Jn[0].Bi[3] = v_F_29756.presets.Jn[0].Bi[handshake.On.re], this.Jn[0].Bi[2].ze.Ze(v_M_29750.h0), this.Jn[0].Bi[2].ze.hn(v_M_29750.v0, this.Jn[0].Bi[2].ze.We[0]), v_L_29745.e8(10, v_M_29750.v0), v_L_29745.e8(11, v_M_29750.h0), v_L_29745.i8(12, v_M_29750.h0), v_M_29750.v0.Be = !0, v_M_29750.h0.Be = !0;
            }, v_v_30131.$n = function () {
              this.Jn[0].Bi[2] && (this.Jn[0].Bi[2].ze.Ke(v_M_29750.h0), this.Jn[0].Bi[2].ze.Ke(v_M_29750.v0));
            }, new v_I_29741()),
            v_g_30133 = [];
          for (let v_t_30153 = 0; v_t_30153 < 1; ++v_t_30153) {
            var v_m_30134 = new v_P_29742();
            v_m_30134.Fi = v_A_29719, v_m_30134.ze = v_E_29751.dummyPanel.Ve(!0), v_m_30134.ze.Te = 0, v_m_30134.ze.Qt = 0, v_m_30134.ze.Be = !1, v_g_30133.push(v_m_30134);
          }
          v_t_30123 = new v_P_29742();
          v_t_30123.Fi = v_Q_29726, v_t_30123.ze = v_E_29751.matchingPanelInfo.Ve(!0), v_t_30123.ze.Te = 0, v_t_30123.ze.Qt = 0, v_t_30123.ze.Be = !1, v_w_30132.Bi.push(v_t_30123), v_w_30132.Bi.push(v_g_30133[0]), v_w_30132.Bi.push(v_D_29753[v_st_29732]), v_w_30132.Bi.push(v_F_29756.presets.Jn[0].Bi[0]), v_w_30132.Bi.push(v_F_29756.masvol.Jn[0].Bi[0]), v_v_30131.Jn.push(v_w_30132), v_F_29756.ready = v_v_30131;
        }
      }
      function v_Vt_29806(v_t_30154) {
        if (v_G_29762._0) {
          if (++v_G_29762._0.U0, 3 <= v_G_29762._0.U0 || v_G_29762._0.V0 <= 0) {
            var v_e_30155 = new v_zr_27970();
            let v_t_30157 = !0,
              v_i_30158 = !0;
            for (const v_n_30159 of v_G_29762._0.O0) v_e_30155.Sr += v_n_30159.Sr, v_t_30157 = v_t_30157 && v_n_30159.R4, v_i_30158 = v_i_30158 && v_n_30159.B4;
            v_e_30155.ni = v_G_29762._0.V0, v_e_30155.R4 = v_t_30157, v_e_30155.B4 = v_i_30158, v_e_30155.D4 = new Date().getUTCDate(), v_e_30155.P4 = v_G_29762._0.J0 ? v_G_29762._0.J0.P4 + 1 : 1, v_G_29762._0.Qu || v_Ns_28014.jy(v_G_29762._0.vn.Ae, v_e_30155), sceneManager.WS(v_E1_27899), v_G_29762._0 = null;
          }
        } else v_G_29762._0 = new v_Cr_27948(), v_G_29762._0.vn = v_t_30154, v_G_29762._0.V0 = v_t_30154.bP, v_G_29762._0.J0 = v_Ns_28014.gA(v_t_30154.Ae), handshake.Bm.Fm = 0, v_u_29760.k0 = !1, playerInfoBoard.$t(v_u_29760.k0);
        var v_i_30156;
        if (v_G_29762._0) return 0 < (v_t_30154 = v_G_29762._0.vn).SP && 0 < v_G_29762._0.U0 && (v_G_29762._0.V0 = mathMin(v_G_29762._0.V0 + v_t_30154.SP, v_t_30154.bP)), v_M_29750.g0.Kt(), v_M_29750.g0.yk(66).Je = "tabActive" + v_t_30154.AP, v_M_29750.g0.yk(62).Je = "bg" + v_t_30154.AP, v_M_29750.g0.yk(69).Wt = v_G_29762._0.V0.toString(), v_M_29750.g0.yk(70).Wt = "s" + v_t_30154.bP, v_M_29750.g0.yk(71).Wt = v_t_30154.lf, (v_i_30156 = v_M_29750.g0.yk(72)).Wt = v_i_30156.Tn.An(v_Tr_27949.Ln(v_t_30154)), v_B_29757.w0 = v_t_30154.yP[v_G_29762._0.U0].Pp.w0, v_B_29757.p0 = v_t_30154.yP[v_G_29762._0.U0].p0, v_B_29757.kx = 0, v_F_29756.ready.Wn = 0, v_F_29756.ready.Kn = 2, v_Ae_27892.dn("menu_back"), v_Ae_27892.dn("menu_enter"), v_U_29780("ready", v_g_29777), v_Ut_29798(), 1;
      }
      function v_Wt_29807() {
        v_oe_27649.Gi() && audioFontHub.XS(), renderer._i("musicSelect"), renderer._i("musicSelectPlayStartBg"), menuSystem.dt(), v_pt_29765(), v_mt_29763.m0();
      }
      return {
        ue: function (v_e_30160) {
          v_Le_28076([v_n_30161 => {
            languagePackages.it("ui/musicSelect.rsb", function (v_t_30162) {
              v_t_30162 ? (v_t_30162 = new v_Dl_28181(v_t_30162), renderer.nt(v_t_30162.rt(renderer.p5()), v_t_30163 => {
                v_L_29745 = v_t_30163, v___29747 = v_t_30163.lt.yk(34), v_r_29748 = v_t_30163.lt.yk(33), v_h_29749 = v_t_30163.lt.yk(36), v_M_29750.Oi = v_t_30163.lt.yk(29), v_M_29750.Ji = v_t_30163.lt.yk(31), v_M_29750.wR = v_t_30163.lt.yk(42), v_M_29750.Wi = v_t_30163.lt.yk(45), v_M_29750.Ki = v_t_30163.lt.yk(46), v_M_29750.zi = v_t_30163.lt.yk(44), v_M_29750.Xi = v_t_30163.lt.yk(43), v_M_29750.l4 = v_t_30163.lt.yk(27), v_M_29750.o4 = v_t_30163.lt.yk(28), v_M_29750.wn = v_t_30163.lt.yk(40), v_M_29750.pn = v_t_30163.lt.yk(38), v_M_29750.g0 = v_t_30163.lt.yk(58), v_M_29750.gx = v_t_30163.lt.yk(52), v_M_29750.VP = v_t_30163.lt.yk(48), v_M_29750.mL = v_t_30163.lt.yk(49), v_M_29750.g0.Be = !1, v_M_29750.gx.Be = !1;
                var v_i_30164 = v_t_30163.lt.yk(73);
                for (let v_t_30166 = 0; v_t_30166 < v_i_30164.We.length; ++v_t_30166) v_i_30164.We[v_t_30166].Be = !1, v_E_29751[v_i_30164.We[v_t_30166].ct] = v_i_30164.We[v_t_30166];
                v_M_29750.v0 = v_E_29751.musicPanelStartBg.Ve(!0), v_M_29750.h0 = v_E_29751.musicPanelStartFg.Ve(!0);
                for (let v_t_30167 = 0; v_t_30167 < 9; ++v_t_30167) {
                  var v_e_30165 = v_E_29751.catPanel.Ve(!0);
                  v_e_30165.Te = 0, v_e_30165.Qt = 0, v_e_30165.We[1].Nd = 4 === v_t_30167, v_ht_29752.push(v_e_30165), v_r_29748.Ze(v_e_30165);
                }
                v_Me_28078(v_n_30161);
              })) : v_e_30160();
            });
          }, v_i_30168 => {
            languagePackages.it("ui/commonBackgroundPlayStart.rsb", function (v_t_30169) {
              v_t_30169 ? (v_t_30169 = new v_Dl_28181(v_t_30169), renderer.nt(v_t_30169.rt(renderer.p5()), v_t_30170 => {
                v_c_29746 = v_t_30170, v_Me_28078(v_i_30168);
              })) : v_e_30160();
            });
          }, v_t_30171 => {
            v_Fe_28101(v_e_30160);
          }]);
        },
        T0: async function (v_t_30172) {
          if (v_Xt_27648 && 2 < handshake.Bm.Fm) sceneManager.WS(v_E1_27899), v_oe_27649.Gi() && (await v_oe_27649.Gx()), v_lr_27930.T0();else {
            v_c_29746.Jt = !1, await new Promise(v_t_30176 => renderer.ut("musicSelectPlayStartBg", v_c_29746, 45, v_t_30176)), (v_G_29762 = new v_e_29744()).Gi = !0, v_G_29762.l0 = mathMin(mathMax(handshake.On.q.te, 0), 5), 4 === v_G_29762.l0 && (v_G_29762.l0 = 3), v_G_29762.ie = mathMin(mathMax(handshake.On.q.ie, 0), v_T_29740.length - 1), v_G_29762.o0 = handshake.On.q.pL, v_L_29745.Jt = !1, await new Promise(v_t_30177 => renderer.ut("musicSelect", v_L_29745, 50, v_t_30177)), v_j1_27909.ti(), menuSystem.dt(), v_L_29745.e8(5), v_L_29745.e8(0), v_L_29745.e8(25), v_Ht_29800(), v_Gt_29797(), v_Ut_29798(), v_Jt_29801();
            {
              var v_n_30173,
                v_r_30174 = handshake.On.im,
                v_s_30175 = v_F_29756.chara;
              let v_e_30178 = !1;
              for (let v_i_30179 = 0; v_i_30179 < v_s_30175.Jn.length; ++v_i_30179) if ((v_n_30173 = v_s_30175.Jn[v_i_30179]).Fi === v_y_29710) {
                for (let v_t_30180 = 0; v_t_30180 < v_n_30173.Bi.length; ++v_t_30180) if (v_n_30173.Bi[v_t_30180].Fi === v_C_29723 && v_n_30173.Bi[v_t_30180].On.w0 === v_r_30174) {
                  v_s_30175.Wn = v_i_30179, v_s_30175.Kn = v_t_30180, v_N_29758.w0 = v_r_30174, v_e_30178 = !0;
                  break;
                }
                if (v_e_30178) break;
              }
            }
            v_Ot_29804(), v_O_29802(), v_oe_27649.Gi() && v_oe_27649.vx(v_Rt_29789);
            for (const v_i_30181 of [["left", "Left", 0, 3, v_ai_27793, !0, "left"], ["right", "Right", 3, 3, v_ai_27793, !0, "right"], ["select", "Select", 6, 4, v_oi_27794, !1, "enter"], ["enter", "Enter", 6, 4, v_W0_27791, !1, "enter"], ["customize", "Customize", 6, 4, v_oi_27794, !1, "enter"], ["editSettings", "EditSettings", 6, 4, v_ci_27797, !1, "enter"], ["levelDown", "LevelMinus", 10, 2, v_X0_27795, !0, "down"], ["levelUp", "LevelPlus", 12, 2, v_X0_27795, !0, "up"], ["prevGroup", "PrevGroup", 10, 2, v_X0_27795, !0, "up"], ["nextGroup", "NextGroup", 12, 2, v_X0_27795, !0, "down"], ["classDown", "ClassMinus", 10, 2, v_X0_27795, !0, "down"], ["classUp", "ClassPlus", 12, 2, v_X0_27795, !0, "up"], ["transform", "Transform", 10, 2, v_ci_27797, !1, ""], ["sort", "MusicSort", 10, 2, v_X0_27795, !1, ""], ["startCatModeGroup", "ChangeGroup", 12, 2, v_li_27796, !1, ""], ["startCatModeLeft", "ChangeCategory", 12, 2, v_li_27796, !1, ""], ["startCatMode", "ChangeCategory", 14, 2, v_li_27796, !1, ""], ["endCatMode", "OkBack", 14, 2, v_W0_27791, !1, ""], ["backMusicSelect", "BackMusicSelect", 14, 2, v_si_27792, !1, ""], ["cancel", "Cancel", 14, 2, v_si_27792, !1, ""], ["changeDown", "ChangeMinus", 6, 2, v_X0_27795, !0, "down"], ["changeUp", "ChangePlus", 8, 2, v_X0_27795, !0, "up"], ["videoCaptTurnOff", "VideoRecordOff", 0, 0, "", !1, "f3"], ["videoCaptTurnOn", "VideoCaptTurnOn", 0, 0, "", !1, "f3"], ["editorMode", "EditorMode", 0, 0, "", !1, "f4"], ["deleteRecord", "DeleteRecord", 0, 0, "", !1, "f8"]]) menuSystem.vt(v_i_30181[0], v_i_30181[1], v_i_30181[2], v_i_30181[3], v_i_30181[4], v_i_30181[5], !1, !1, v_i_30181[6], function (v_t_30182, v_i_30183) {
              "down" === v_t_30182 && v_Ct_29785(this.Ae, v_i_30183);
            });
            menuSystem.yv(), await renderer.C7(500), v_L_29745.Jt = !0, (v_G_29762._0 = v_t_30172) && v_Vt_29806() || v_U_29780("music", v_w_29776), sceneManager.qt(), sceneManager.ft(new v_M1_27898(v_Tt_29786, void 0)), sceneManager.ri(), sceneManager.ti(), v_oe_27649.Gi() && audioFontHub.T0();
          }
        },
        Gi: () => v_G_29762.Gi,
        z0: function () {
          v_t_29805();
        }
      };
    }(),
    v_rr_27926 = 1,
    v_sr_27927 = 9;