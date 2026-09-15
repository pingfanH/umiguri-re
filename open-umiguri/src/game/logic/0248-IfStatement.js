// game: 语句 248 (IfStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  if (addEventListener("resize", v_m1_27881), addEventListener("unload", v_re_27878), addEventListener("focus", v_w1_27879), addEventListener("blur", v_g1_27880), addEventListener("beforeunload", v_t_35119 => {
    v_M_27644 && v_M_27644.V7(), v_E_27645 && v_E_27645.V7(), v_D_27646 && v_D_27646.V7(), v_F_27647 && v_F_27647.V7();
  }), v_y_27559.addEventListener("contextmenu", v_t_35120 => v_t_35120.preventDefault()), v_ee_27876(), v_y_27559.style.display = "block", v_Hl_28188 = umgr_elc._, handshake.rm.I4 = v_Hl_28188.I4, handshake.rm.am = v_Hl_28188.am, handshake.rm.om = v_Hl_28188.O.ct, handshake.rm.lm = v_Hl_28188.O.B, handshake.rm.um = v_Hl_28188.O.p9, handshake.rm.b7 = v_Hl_28188.I, handshake.rm.y7 = v_Hl_28188.R, handshake.rm.A7 = v_Hl_28188.j, handshake.rm.S7 = v_Hl_28188.M, handshake.rm.A9 = v_Hl_28188.L, handshake.rm.S9 = v_Hl_28188.U, handshake.rm.x9 = v_Hl_28188.P, handshake.rm.I9 = v_Hl_28188.G, handshake.rm.OA = v_Hl_28188.Y, handshake.rm.dm = v_Hl_28188.fe, handshake.rm.vm = v_Hl_28188.v1, handshake.rm.gm = v_Hl_28188.J, handshake.rm.u8 = v_Hl_28188.K, handshake.rm.wm = v_Hl_28188.W, handshake.rm.pm = v_Hl_28188.u1, handshake.rm.km = v_Hl_28188.H, handshake.rm.bm = v_Hl_28188.f1, handshake.rm.Sm = v_Hl_28188.h1.T, handshake.rm.xm = v_Hl_28188.h1.rr, handshake.rm.ym = v_Hl_28188.h1.C, handshake.rm.Cm = v_Hl_28188.h1.GA, handshake.rm.Im = v_Hl_28188.Z.X, handshake.rm.Am = v_Hl_28188.Z.a1, handshake.rm.Tm = v_Hl_28188.Z.d1, handshake.rm.Lm = v_Hl_28188.Z.t1, handshake.rm.Rm = v_Hl_28188.Z.s1, handshake.rm.gb = v_Hl_28188.g1, setInterval(v_A1_27887, 500), win.body.addEventListener("keydown", function (v_t_35121) {
    v_t_35121.repeat || ("Enter" !== v_t_35121.key || v_t_35121.shiftKey || v_t_35121.metaKey || !v_t_35121.altKey || v_t_35121.ctrlKey ? "F1" !== v_t_35121.key || !v_t_35121.shiftKey || v_t_35121.metaKey || v_t_35121.altKey || v_t_35121.ctrlKey || v_ur_27932.bb() : (systemMisc.w2(), v_t_35121.preventDefault()));
  }), v_Hi_27855 = handshake.rm.I4, v_h1_27859 = handshake.rm.Am, v_R_27641 = handshake.rm.pm, v_L_27642 = handshake.rm.km, v_bn_27637 = handshake.rm.vm || handshake.rm.gm, -1 === v_Ui_27854.indexOf(v_Hi_27855) && (handshake.A4 = !0, v_Hi_27855 = "ja-JP"), v_Ul_28187.has("errDisp")) {
    var v_Hl_28188 = v_Pe_28064(v_Ul_28187.get("errDisp"));
    let v_t_35122 = win.createElement("div"),
      v_i_35123 = (v_t_35122.setAttribute("style", "width: 1920px;height: 1080px;background: #000;font-family: system-ui;font-size: 16px;padding: 12px;z-index:99;"), win.createElement("div")),
      v_e_35124 = (v_i_35123.setAttribute("style", ""), v_t_35122.appendChild(v_i_35123), win.createElement("div")),
      v_n_35125 = (v_e_35124.setAttribute("style", "margin-left:24px"), v_t_35122.appendChild(v_e_35124), v_y_27559.appendChild(v_t_35122), v_i_35123.innerText = "FAITAL ERROR (0x" + v_Xa_28081(v_Hl_28188.toString(16), 4, "0") + ")", "");
    switch (v_Hl_28188) {
      case v_W_27705:
        v_n_35125 = "Failed to initialize graphics engine.";
        break;
      case v_X_27706:
      case v_z_27707:
        v_n_35125 = "Failed to load assets.";
        break;
      case v_K_27708:
        v_n_35125 = "Graphics engine error.";
    }
    v_n_35125 += "\n\n--- App Info ---\nVersion: " + v_U_27653 + "\nBuild Time: " + handshake.rm.Sm + " " + handshake.rm.xm + "\nBuild Hash: " + handshake.rm.ym + "\nBuild Conf: " + handshake.rm.Cm, v_e_35124.innerText = v_n_35125;
  } else if (v_Ul_28187.has("fix")) {
    let v_t_35126 = win.createElement("canvas"),
      v_e_35127 = (v_t_35126.width = v_yn_27656, v_t_35126.height = v_Sn_27657, v_y_27559.appendChild(v_t_35126), v_t_35126.getContext("2d", {
        alpha: !1
      })),
      v_n_35128 = v_G_27652 + " v" + v_U_27653 + " Build " + handshake.rm.Sm + " " + handshake.rm.xm + " (" + handshake.rm.ym + ") @" + handshake.rm.Cm,
      v_i_35129 = {
        "ja-JP": {
          ci: "問題の解決のため、ゲーム データを再ダウンロードします。",
          cn: "インターネットに接続した上で Enter キーを押下してください。",
          c3: "アセット データベースを読み込んでいます...",
          c1: "最新のアセットの取得...",
          ca: "検証中...",
          cc: "正常に完了しました。Enter キーで再起動します。",
          c2: "失敗。Enter キーで再起動します。",
          lf: "UMIGURI ゲーム データ修復モード"
        },
        "en-US": {
          ci: "Press ENTER to redownload the game data for resolve problems.",
          cn: "You should have an internet connection.",
          c3: "Fetching asset database...",
          c1: "Downloading latest assets...",
          ca: "Verifying...",
          cc: "Completed successfully. Press ENTER to restart.",
          c2: "Failed. Press ENTER to restart.",
          lf: "UMIGURI Game Data Repair Mode"
        },
        "zh-CN": {
          ci: "为解决该问题，将重新下载游戏数据。",
          cn: "请连接网络后按 Enter 键。",
          c3: "正在读取资源清单...",
          c1: "正在下载最新资源...",
          ca: "校验中...",
          cc: "已成功完成。按 Enter 键重启。",
          c2: "失败。按 Enter 键重启。",
          lf: "UMIGURI 游戏数据修复模式"
        }
      },
      v_r_35130 = [v_Jl_35131().ci, v_Jl_35131().cn];
    function v_Jl_35131() {
      return v_i_35129[v_Hi_27855] || v_i_35129["ja-JP"];
    }
    function v_jl_35132() {
      v_e_35127.clearRect(0, 0, v_yn_27656, v_Sn_27657), v_e_35127.fillStyle = "#fff", v_e_35127.strokeStyle = "#fff", v_e_35127.lineWidth = 5, v_e_35127.textBaseline = "top", v_e_35127.font = "normal 24px system-ui", v_e_35127.textAlign = "left", v_e_35127.fillText(v_n_35128, 20, 1040), v_e_35127.strokeRect(262, 152, 1395, 775), v_e_35127.textAlign = "center", v_e_35127.fillText(v_Jl_35131().lf, 960, 100), v_e_35127.textAlign = "left";
      let v_i_35134 = 0;
      for (let v_t_35135 = v_pe_27823(v_r_35130.length - 22, 0); v_t_35135 < v_r_35130.length; ++v_t_35135) v_e_35127.fillText(v_r_35130[v_t_35135], 410, 210 + v_i_35134), v_i_35134 += 30;
    }
    function v_Ol_35133() {
      return new Promise(v_i_35136 => {
        let v_e_35137 = v_t_35138 => {
          "Enter" === v_t_35138.key && (v_i_35136(), window.removeEventListener("keydown", v_e_35137));
        };
        window.addEventListener("keydown", v_e_35137);
      });
    }
    !async function () {
      v_jl_35132(), await v_Ol_35133(), v_r_35130 = [v_Jl_35131().c3], v_jl_35132(), await v_ts_27977.m4(!0);
      let v_i_35139 = v_rc_28203(v_ts_27977.w4(), v_t_35140 => v_t_35140.size);
      v_r_35130.push(v_Jl_35131().c1), v_jl_35132(), (await v_ts_27977.u4(function (v_t_35141) {
        v_r_35130[v_r_35130.length - 1] = v_Jl_35131().c1 + " (" + (v_t_35141 / v_i_35139 * 100).toFixed(0) + " %)", v_jl_35132();
      })) && (v_r_35130.push(v_Jl_35131().ca), v_jl_35132(), await v_ts_27977._4(function (v_t_35142) {
        v_r_35130[v_r_35130.length - 1] = v_Jl_35131().ca + " (" + (v_t_35142 / v_i_35139 * 100).toFixed(0) + " %)", v_jl_35132();
      })) ? v_r_35130.push(v_Jl_35131().cc) : v_r_35130.push(v_Jl_35131().c2), v_jl_35132(), await v_Ol_35133(), v_ts_27977.v4();
    }();
  } else {
    v_o1_27834 = new v_ja_28075(0, -.78, 1, .01).tg(), v_l1_27835 = [new v_ja_28075(.04, 1.18, .83, 1.12).tg(), new v_ja_28075(.04, 1.18, 1, 1).tg(), new v_ja_28075(.04, 1.18, 1, 1.3).tg(), new v_ja_28075(.19, 1.05, 1, 1).tg()], v_Na_28070();
    let v_i_35143 = handshake.rm.bm,
      v_r_35144 = void 0,
      v_e_35145 = void 0,
      v_n_35146 = void 0,
      v_s_35147,
      v_a_35148 = 0,
      v_o_35149 = 0,
      v_l_35150 = "",
      v_c_35151 = function (v_t_35152) {
        void 0 !== v_t_35152 && (v_l_35150 = v_t_35152), v_e_35145 && (v_e_35145.Wt = "(" + v_o_35149 + " / " + v_a_35148 + ") " + v_l_35150);
      };
    v_ie_27875(), v_Oa_28077(function (v_t_35153, v_i_35154) {
      "max" === v_t_35153 ? v_a_35148 = v_i_35154 : "upd" === v_t_35153 && (v_o_35149 = v_i_35154, v_c_35151());
    }, [function (v_t_35155) {
      !function () {
        try {
          v_se_27562 = glRuntime.create({
            stencil: !0,
            antialias: !1
          });
        } catch (v_t_35157) {
          return;
        }
        {
          var v_t_35156 = v_se_27562.getExtension("WEBGL_debug_renderer_info");
          systemMisc.b2({
            renderer: v_se_27562.getParameter(v_t_35156.UNMASKED_RENDERER_WEBGL),
            max_rend_buf_size: v_se_27562.getParameter(v_se_27562.MAX_RENDERBUFFER_SIZE),
            max_tex_units: v_se_27562.getParameter(v_se_27562.MAX_TEXTURE_IMAGE_UNITS),
            max_tex_size: v_se_27562.getParameter(v_se_27562.MAX_TEXTURE_SIZE)
          });
        }
        v_se_27562.getExtension("WEBGL_compressed_texture_s3tc"), v_se_27562.getExtension("WEBGL_depth_texture");
        return v_se_27562.enable(v_se_27562.BLEND), v_se_27562.blendFunc(v_se_27562.SRC_ALPHA, v_se_27562.ONE_MINUS_SRC_ALPHA), v_se_27562.canvas.width = v_yn_27656, v_se_27562.canvas.height = v_Sn_27657, v_y_27559.appendChild(v_se_27562.canvas), v_se_27562.viewport(0, 0, v_yn_27656, v_Sn_27657), v_se_27562.matrixMode(v_se_27562.MODELVIEW), v_se_27562.canvas.addEventListener("webglcontextlost", v_te_27874), v_y_27559.style.width = v_yn_27656 + "px", v_y_27559.style.height = v_Sn_27657 + "px", v_ee_27876(), 1;
      }() ? v_b1_27884(v_W_27705) : effekseer.initRuntime("effekseer.wasm", function () {
        v_Me_28078(v_t_35155);
      });
    }, function (v_t_35158) {
      languagePackages.ue(function () {
        v_Me_28078(v_t_35158);
      });
    }, function (v_i_35159) {
      languagePackages.Sb(function (v_t_35160) {
        v_t_35160 ? v_Me_28078(v_i_35159) : v_k1_27883();
      });
    }, function (v_t_35161) {
      v_Xr_27969._n(function () {
        v_Se_27889.ue(), v_ae_27643 = new v_Gl_28185(), v_Me_28078(v_t_35161);
      });
    }, function (v_t_35162) {
      v_ae_27643.Yt.h5(function () {
        v_Me_28078(v_t_35162);
      });
    }, function (v_t_35163) {
      v_ae_27643.Yt.y4("tables/stringTable.rvs", function () {
        v_Me_28078(v_t_35163);
      });
    }, function (v_i_35164) {
      languagePackages.it("ui/startup.rsb", function (v_t_35165) {
        v_t_35165 ? (v_t_35165 = new v_Dl_28181(v_t_35165), v_ae_27643.ut("startup", v_t_35165.rt(v_ae_27643.p5()), 0, v_t_35166 => {
          (v_r_35144 = v_t_35166).e8(1), v_r_35144.e8(0), v_e_35145 = v_r_35144.lt.yk(4), v_n_35146 = v_r_35144.lt.yk(5), v_s_35147 = v_r_35144.lt.yk(7), v_r_35144.lt.yk(17).Be = !1, v_n_35146.Be = !1, v_Me_28078(v_i_35164);
        })) : v_k1_27883();
      });
    }, function (v_t_35167) {
      v_Vi_27862(), window.addEventListener("error", v_p1_27882), v_Me_28078(v_t_35167);
    }, function (v_t_35168) {
      v_c_35151(v_Ue_28209("startupDatabase")), v_Ie_27966._n(function () {
        v_Me_28078(v_t_35168);
      });
    }, function (v_t_35169) {
      v_Wr_27968._n(function () {
        v_Me_28078(v_t_35169);
      });
    }, function (v_e_35170) {
      v_c_35151(v_Ue_28209("startupSavedata")), v_Le_28076([function (v_i_35171) {
        settingsTables.ue(function (v_t_35172) {
          v_Me_28078(!1 === v_t_35172 ? v_e_35170 : v_i_35171);
        });
      }, function (v_i_35173) {
        settingsTables._n(1003, function (v_t_35174) {
          v_t_35174 && (handshake.Dm = v_t_35174.loop_points || {}), v_Me_28078(v_i_35173);
        });
      }, function (v_t_35175) {
        v_Ns_28014.ue(), v_Me_28078(v_e_35170);
      }]);
    }, function (v_t_35176) {
      v_oe_27649 = new v_Hs_28017("d.umgr-serv.inonote.jp", 8101, v_Xt_27648), v_Me_28078(v_t_35176);
    }, function (v_t_35177) {
      v_c_35151(v_Ue_28209("startupResources")), v_Ae_27892.ue(function () {
        v_Ae_27892.Mc("move_cursor", .625), v_Ae_27892.Mc("menu_back", .625), v_Ae_27892.Mc("change_value", .625), v_Ae_27892.Mc("menu_enter", .625), v_Ae_27892.Mc("play_result_bgm", .75), v_Ae_27892.Mc("userbox_bgm", .75), v_Me_28078(v_t_35177);
      });
    }, function (v_t_35178) {
      v_J1_27908.ue(() => v_Me_28078(v_t_35178));
    }, function (v_t_35179) {
      v_j1_27909.ue(() => v_Me_28078(v_t_35179));
    }, function (v_t_35180) {
      sceneManager.ue(() => v_Me_28078(v_t_35180));
    }, function (v_t_35181) {
      v_Te_27911.ue(() => v_Me_28078(v_t_35181));
    }, function (v_t_35182) {
      playerInfoBoard.ue(() => v_Me_28078(v_t_35182));
    }, function (v_t_35183) {
      v_V1_27912.ue(() => v_Me_28078(v_t_35183));
    }, function (v_t_35184) {
      v_F1_27902.ue(() => v_Me_28078(v_t_35184));
    }, function (v_t_35185) {
      v_i_35143 ? v_Me_28078(v_t_35185) : v_nr_27925.ue(() => v_Me_28078(v_t_35185));
    }, function (v_t_35186) {
      v_i_35143 ? v_Me_28078(v_t_35186) : coopLobby.ue(() => v_Me_28078(v_t_35186));
    }, function (v_t_35187) {
      v_i_35143 ? v_Me_28078(v_t_35187) : uiComponentA.ue(() => v_Me_28078(v_t_35187));
    }, function (v_t_35188) {
      v_i_35143 ? v_Me_28078(v_t_35188) : v_Q1_27921.ue(() => v_Me_28078(v_t_35188));
    }, function (v_t_35189) {
      v_i_35143 ? v_Me_28078(v_t_35189) : uiComponentB.ue(() => v_Me_28078(v_t_35189));
    }, function (v_t_35190) {
      v_i_35143 ? v_Me_28078(v_t_35190) : uiComponentC.ue(() => v_Me_28078(v_t_35190));
    }, function (v_t_35191) {
      v_i_35143 ? v_Me_28078(v_t_35191) : v_$1_27920.ue(() => v_Me_28078(v_t_35191));
    }, function (v_t_35192) {
      testMenu.ue(() => v_Me_28078(v_t_35192));
    }, function (v_t_35193) {
      v_i_35143 ? v_Me_28078(v_t_35193) : v_N1_27904.ue(() => v_Me_28078(v_t_35193));
    }, function (v_t_35194) {
      v_i_35143 ? v_Me_28078(v_t_35194) : v_G1_27905.ue(() => v_Me_28078(v_t_35194));
    }, function (v_t_35195) {
      v_i_35143 ? v_Me_28078(v_t_35195) : localization.ue(() => v_Me_28078(v_t_35195));
    }, function (v_t_35196) {
      v_i_35143 ? v_Me_28078(v_t_35196) : v_O1_27910.ue(() => v_Me_28078(v_t_35196));
    }, function (v_t_35197) {
      v_i_35143 ? v_Me_28078(v_t_35197) : v_H1_27907.ue(() => v_Me_28078(v_t_35197));
    }, function (v_t_35198) {
      v_i_35143 ? v_Me_28078(v_t_35198) : v_U1_27906.ue(() => v_Me_28078(v_t_35198));
    }, function (v_t_35199) {
      v_i_35143 ? v_Me_28078(v_t_35199) : v_lr_27930.ue(() => v_Me_28078(v_t_35199));
    }, function (v_t_35200) {
      v_i_35143 ? v_Me_28078(v_t_35200) : v_Z1_27919.ue(() => v_Me_28078(v_t_35200));
    }, function (v_t_35201) {
      v_i_35143 ? v_Me_28078(v_t_35201) : v_X1_27914.ue(() => v_Me_28078(v_t_35201));
    }, function (v_t_35202) {
      v_i_35143 ? v_Me_28078(v_t_35202) : settingsStore.ue(() => v_Me_28078(v_t_35202));
    }, function (v_t_35203) {
      v_i_35143 ? v_Me_28078(v_t_35203) : audioFontHub.ue(() => v_Me_28078(v_t_35203));
    }, function (v_t_35204) {
      gameCore.ue(() => v_Me_28078(v_t_35204));
    }, async function (v_i_35205) {
      if (v_c_35151(v_Ue_28209("startupInitDevices")), inputModule.ue(), inputModule.fe(handshake.rm.dm), 1 === handshake.rm.b7) v_c_35151(v_Ue_28209("startupLedServer")), ledOutput.ue(function (v_t_35209) {
        0 === v_t_35209 ? v_Me_28078(v_i_35205) : (1 === v_t_35209 ? v_c_35151(v_Ue_28209("startupLedServerErrorCommunication")) : 2 === v_t_35209 && v_c_35151(v_Ue_28209("startupLedServerError")), v_ae_27643.W6(() => v_Me_28078(v_i_35205), 500));
      });else {
        if (2 === handshake.rm.b7) {
          v_r_35144.lt.yk(17).Be = !0, v_r_35144.e8(2);
          for (let v_t_35210 = 4; 0 <= v_t_35210; --v_t_35210) v_r_35144.lt.yk(21).Wt = v_Ba_28069(v_Ue_28209("sysMsgDevInit2"), [["TIME", v_t_35210]]), await v_ae_27643.C7(1e3);
          var v_t_35206 = new v_Ss_28000(handshake.rm.A7);
          if (await v_t_35206.ue()) {
            v_r_35144.lt.yk(21).Wt = v_Ue_28209("sysMsgDevInit2Ok"), (v_M_27644 = v_t_35206).BR(), v_M_27644.o9();
            var v_e_35207 = new v_As_28001(handshake.rm.S7);
            if (await v_e_35207.ue()) {
              if (v_r_35144.lt.yk(23).Wt = "GOOD", (v_E_27645 = v_e_35207).H9(), v_E_27645.o9(), handshake.rm.A9) {
                var v_n_35208 = new v_Rs_28007(handshake.rm.A9, handshake.rm.S9, handshake.rm.x9, handshake.rm.I9);
                if (!(await v_n_35208.ue())) return v_n_35208.V7(), v_M_27644.V7(), v_M_27644 = null, v_E_27645.V7(), v_E_27645 = null, v_r_35144.lt.yk(25).Wt = "BAD", await v_ae_27643.C7(2e3), void v_Me_28078(v_i_35205);
                if (v_r_35144.lt.yk(25).Wt = "GOOD", v_D_27646 = v_n_35208, handshake.rm.OA) {
                  v_n_35208 = new v_xs_28002(handshake.rm.OA);
                  if (!(await v_n_35208.ue())) return v_n_35208.V7(), v_r_35144.lt.yk(27).Wt = "BAD", await v_ae_27643.C7(2e3), void v_Me_28078(v_i_35205);
                  v_r_35144.lt.yk(27).Wt = "GOOD", v_F_27647 = v_n_35208, v_D_27646.HS(v_F_27647);
                }
              }
            } else v_e_35207.V7(), v_M_27644.V7(), v_M_27644 = null, v_r_35144.lt.yk(23).Wt = "BAD";
          } else v_t_35206.V7(), v_r_35144.lt.yk(21).Wt = "BAD";
          await v_ae_27643.C7(2e3);
        }
        v_Me_28078(v_i_35205);
      }
    }, function (v_t_35211) {
      v_D_27646 || (v_D_27646 = new v_Ls_28008()).ue(), v_r_35144.lt.yk(17).Be = !1, v_Me_28078(v_t_35211);
    }, function (v_t_35212) {
      menuSystem.ue(() => {
        v_Me_28078(v_t_35212);
      });
    }, function (v_t_35213) {
      handshake.l.p = [v_Ue_28209("sortReadingA"), v_Ue_28209("sortReadingH"), v_Ue_28209("sortReadingO"), v_Ue_28209("sortReadingV"), v_Ue_28209("sortReadingRa"), v_Ue_28209("sortReadingRk"), v_Ue_28209("sortReadingRs"), v_Ue_28209("sortReadingRt"), v_Ue_28209("sortReadingRn"), v_Ue_28209("sortReadingRh"), v_Ue_28209("sortReadingRm"), v_Ue_28209("sortReadingRy"), v_Ue_28209("sortReadingRr"), v_Ue_28209("sortReadingRw"), v_Ue_28209("sortReadingNums"), v_Ue_28209("sortReadingOthers")], handshake.l.k = [v_Ue_28209("sortVersionUmgr"), v_Ue_28209("sortVersionUmgrPlus"), v_Ue_28209("sortVersionUmgrNext")], v_ae_27643.W6(() => {
        v_ae_27643._i("startup"), v_r_35144 = void 0, v_Me_28078(v_t_35213);
      }, 500);
    }, function (v_t_35214) {
      v_R1_27896.ue(), testMenu.Ju(), v_D_27646.jS(), v_i_35143 ? v_F1_27902.T0(async () => {
        await v_Ns_28014.cA(), playerInfoBoard.N4(handshake.rm.om), playerInfoBoard.H4(handshake.On.$p), await playerInfoBoard.V4(handshake.On.qp), playerInfoBoard.U4(handshake.On.im), playerInfoBoard.J4(handshake.rm.lm, v_Ie_27966.D0("showRating")), playerInfoBoard.O4(handshake.rm.um, v_Ie_27966.D0("showLevel")), playerInfoBoard.ti(), v__s_27989.ue(), gameCore.lg();
      }) : (v_Se_27889.fn(.75), localization.T0(() => v_F1_27902.T0(() => {
        v_nr_27925.z0(), v_N1_27904.T0();
      })));
    }]);
  }