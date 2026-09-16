// 模块: testMenu
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createTestMenu(scope) {
  const BTN_DOWN = 1,
    BTN_UP = 2,
    BTN_ENTER = 4,
    BTN_TEST = 268435456,
    BTN_SERVICE = 536870912;
  function MenuState() {
    this.Gi = !1, this.r0 = "", this.a0 = null, this.Qc = !1, this.eu = 0, this.tu = 0, this.ve = [new SliderZone(0, 3, BTN_DOWN), new SliderZone(3, 3, BTN_UP), new SliderZone(6, 3, 8), new SliderZone(9, 3, 16), new SliderZone(12, 4, BTN_ENTER)], this.iu = {
      nu: !1,
      ru: 0,
      au: 0,
      su: 0,
      Ee: void 0
    };
  }
  function SliderZone(colStart, colWidth, action) {
    this.ou = colStart, this.Le = colWidth, this.lu = 0, this.Ae = action;
  }
  function MenuPage() {
    this.cu = "", this.uu = void 0, this.fu = void 0, this._u = void 0, this.du = void 0, this.hu = void 0, this.vu = void 0, this.au = 0, this.gu = [], this.wu = BTN_DOWN | BTN_UP | BTN_ENTER, this.On = {};
  }
  MenuPage.prototype = {
    pu: function (btnMask, heldMask) {
      return btnMask & (BTN_DOWN | BTN_SERVICE) && 0 < this.gu.length ? (this.au = scope.v_qa_28086(this.au + 1, this.gu.length), this.vu && this.vu(), !0) : !!(btnMask & BTN_UP && 0 < this.gu.length) && (this.au = scope.v_qa_28086(this.au - 1, this.gu.length), this.vu && this.vu(), !0);
    },
    ku: function (itemName) {
      return this.uu.ot("textMenu" + itemName);
    },
    bu: function () {
      return this.ku(this.gu[this.au]);
    }
  }, MenuPage.Vc = function (pageName) {
    var pageObj = new MenuPage();
    return pageObj.cu = pageName, pageObj.uu = currentRsb.lt.ot("page" + pageName), pages[pageName] = pageObj;
  };
  let currentRsb = void 0,
    menuState = new MenuState(),
    guideElements = {
      mu: void 0,
      Su: void 0,
      xu: void 0,
      Iu: void 0,
      yu: void 0,
      Cu: void 0,
      Au: void 0,
      Tu: void 0,
      Lu: void 0
    },
    pages = {};
  function handleDialogInput(buttons) {
    if (buttons & (BTN_DOWN | BTN_SERVICE) && 1 < menuState.iu.su && (menuState.iu.au = scope.v_qa_28086(menuState.iu.au + 1, menuState.iu.su), positionDialogCursor()), buttons & BTN_UP && 1 < menuState.iu.su && (menuState.iu.au = scope.v_qa_28086(menuState.iu.au - 1, menuState.iu.su), positionDialogCursor()), buttons & (BTN_ENTER | BTN_TEST)) {
      if (menuState.iu.Ee) switch (menuState.iu.ru & scope.v_tt_27777) {
        case scope.v_N0_27771:
          menuState.iu.Ee(scope.v_nt_27780);
          break;
        case scope.v_G0_27772:
          0 === menuState.iu.au ? menuState.iu.Ee(scope.v_H0_27781) : menuState.iu.Ee(scope.v_rt_27782);
      }
      menuState.iu.nu = !1, menuState.iu.ru = 0, menuState.iu.Ee = void 0, guideElements.Iu.Be = !1;
    }
  }
  function positionDialogCursor() {
    switch (menuState.iu.ru & scope.v_tt_27777) {
      case scope.v_N0_27771:
        guideElements.Cu.Qt = guideElements.Au.Qt;
        break;
      case scope.v_G0_27772:
        0 === menuState.iu.au ? guideElements.Cu.Qt = guideElements.Tu.Qt : guideElements.Cu.Qt = guideElements.Lu.Qt;
    }
  }
  function confirmDialog(dialogMsg, dialogType, dialogCb) {
    if (!menuState.iu.nu) {
      switch (menuState.iu.nu = !0, menuState.iu.au = 0, menuState.iu.ru = dialogType, menuState.iu.Ee = dialogCb, menuState.iu.ru & scope.v_tt_27777) {
        case scope.v_N0_27771:
          menuState.iu.su = 1, guideElements.Au.Be = !0, guideElements.Tu.Be = !1, guideElements.Lu.Be = !1;
          break;
        case scope.v_G0_27772:
          menuState.iu.su = 2, guideElements.Au.Be = !1, guideElements.Tu.Be = !0, guideElements.Lu.Be = !0;
      }
      guideElements.yu.Wt = dialogMsg, positionDialogCursor(), guideElements.Iu.Be = !0;
    }
  }
  function switchPage(pageName_2) {
    menuState.a0 && (menuState.a0.uu.Be = !1, menuState.a0._u && menuState.a0._u(), menuState.Qc = !0), menuState.r0 = pageName_2, menuState.a0 = pages[pageName_2], menuState.a0.fu && menuState.a0.fu(), menuState.a0.vu && menuState.a0.vu(), menuState.a0.uu.Be = !0;
  }
  function buildPages() {
    let pageObj_2;
    var fillCount, fillValue;
    function DelayEntry() {
      this.lr = !1, this.xR = 0;
    }
    (pageObj_2 = MenuPage.Vc("Root")) && (pageObj_2.gu = ["InputTest", "OutputTest", "Graphics", "HardwareInfo", "AmReaderTest", "VfdTest", "InputDelayTest", "DataState", "VideoExportTest", "Reboot", "Shutdown", "Exit"], pageObj_2.au = pageObj_2.gu.indexOf("Exit"), pageObj_2.fu = function () {}, pageObj_2.du = function (btnMask_2, heldMask_2) {
      if (!this.pu(btnMask_2, heldMask_2) && btnMask_2 & (BTN_ENTER | BTN_TEST)) switch (this.gu[this.au]) {
        case "InputTest":
          switchPage("InputTest");
          break;
        case "OutputTest":
          switchPage("OutputTest");
          break;
        case "Graphics":
          switchPage("Graphics");
          break;
        case "HardwareInfo":
          switchPage("HardwareInfo");
          break;
        case "AmReaderTest":
          switchPage("AmReaderTest");
          break;
        case "VfdTest":
          switchPage("VfdTest");
          break;
        case "InputDelayTest":
          switchPage("InputDelayTest");
          break;
        case "DataState":
          switchPage("DataState");
          break;
        case "VideoExportTest":
          switchPage("VideoExportTest");
          break;
        case "SystemConfig":
          confirmDialog(scope.v_Ue_28209("svcMenuShutdownMessage"), scope.v_G0_27772, function (dialogResult) {
            dialogResult === scope.v_H0_27781 && (location.href = "/sysconf.html");
          });
          break;
        case "Reboot":
          confirmDialog(scope.v_Ue_28209("svcMenuRebootMessage"), scope.v_G0_27772, function (dialogResult_2) {
            dialogResult_2 === scope.v_H0_27781 && location.reload();
          });
          break;
        case "Shutdown":
          confirmDialog(scope.v_Ue_28209("svcMenuShutdownMessage"), scope.v_G0_27772, function (dialogResult_3) {
            dialogResult_3 === scope.v_H0_27781 && window.close();
          });
          break;
        case "Exit":
          scope.sceneManager.Jk(!1), scope.renderer.v9(-1), scope.renderer._i("sysTestMenu"), scope.v_D_27646.oS(), menuState.Gi = !1;
      }
    }, pageObj_2.vu = function () {
      this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
    }), (pageObj_2 = MenuPage.Vc("InputTest")) && (pageObj_2.wu = 0, pageObj_2.On = {
      Eu: pageObj_2.uu.ot("textGeneralInputState"),
      Fu: [pageObj_2.uu.ot("textMainInputState0"), pageObj_2.uu.ot("textMainInputState1")],
      Bu: pageObj_2.uu.ot("textSideInputState"),
      Mu: (fillCount = 32, fillValue = 0, Array.from({
        length: fillCount
      }, () => fillValue))
    }, pageObj_2.On.Eu.Tn || (pageObj_2.On.Eu.Tn = new scope.v_Bo_28128()), pageObj_2.On.Fu[0].Tn || (pageObj_2.On.Fu[0].Tn = new scope.v_Bo_28128()), pageObj_2.On.Fu[1].Tn || (pageObj_2.On.Fu[1].Tn = new scope.v_Bo_28128()), pageObj_2.On.Bu.Tn || (pageObj_2.On.Bu.Tn = new scope.v_Bo_28128()), pageObj_2.fu = function () {
      this.On.Mu.fill(0);
    }, pageObj_2.hu = function () {
      var analogValues = scope.inputModule.sR();
      let textBuf = "";
      textBuf = (textBuf += (menuState.tu & BTN_TEST ? "<#c:62cbf5>ON<#r>" : "OFF") + "\n") + (menuState.tu & BTN_SERVICE ? "<#c:62cbf5>ON<#r>" : "OFF"), this.On.Eu.Wt = this.On.Eu.Tn.An(textBuf);
      for (let halfIdx = 0; halfIdx < 2; ++halfIdx) {
        textBuf = "";
        for (let laneIdx = 16 * halfIdx; laneIdx < 16 * halfIdx + 16; ++laneIdx) {
          this.On.Mu[31 - laneIdx] < analogValues[31 - laneIdx] && (this.On.Mu[31 - laneIdx] = analogValues[31 - laneIdx]);
          var isOn = analogValues[31 - laneIdx] >= scope.inputModule.he;
          textBuf += (isOn ? "<#c:62cbf5>ON  " : "OFF ") + scope.v_Xa_28081("" + analogValues[31 - laneIdx], 3, " ") + "/" + scope.v_Xa_28081("" + this.On.Mu[31 - laneIdx], 3, " ") + "<#r>\n";
        }
        this.On.Fu[halfIdx].Wt = this.On.Fu[halfIdx].Tn.An(textBuf);
      }
      textBuf = "";
      for (let airIdx = 32; airIdx < 38; ++airIdx) textBuf += 63 <= analogValues[airIdx] ? "<#c:62cbf5>ON<#r>\n" : "OFF\n";
      this.On.Bu.Wt = this.On.Bu.Tn.An(textBuf);
    }, pageObj_2.du = function (btnMask_3, heldMask_3) {
      this.pu(btnMask_3, heldMask_3) || btnMask_3 & (BTN_TEST | BTN_SERVICE) && heldMask_3 & BTN_TEST && heldMask_3 & BTN_SERVICE && switchPage("Root");
    }), (pageObj_2 = MenuPage.Vc("OutputTest")) && (pageObj_2.wu = BTN_UP | BTN_DOWN | BTN_ENTER, pageObj_2.gu = ["OutputTest0", "OutputTest1", "OutputTest2", "OutputTest3", "OutputTest4", "OutputTest5", "OutputTest6", "Back"], pageObj_2.au = 0, pageObj_2.K = function () {
      try {
        var guideLeftEl = currentRsb && currentRsb.lt && currentRsb.lt.ot("keyGuideLeft"),
          guideRightEl = currentRsb && currentRsb.lt && currentRsb.lt.ot("keyGuideRight");
        if (guideLeftEl) {
          guideLeftEl.Be = !0;
          for (var idx_22 = 0; idx_22 < guideLeftEl.We.length; ++idx_22) guideLeftEl.We[idx_22].Be = !0;
        }
        if (guideRightEl) {
          guideRightEl.Be = !0;
          for (var idx_23 = 0; idx_23 < guideRightEl.We.length; ++idx_23) guideRightEl.We[idx_23].Be = !0;
        }
        var panelCfg = window.umgKeyPanel && window.umgKeyPanel.get();
        if (!panelCfg) return;
        var pageRootEl = this.uu;
        var rows = [["textMenuOutputTest0Value", panelCfg.rowH], ["textMenuOutputTest1Value", panelCfg.colGap], ["textMenuOutputTest2Value", panelCfg.airGap], ["textMenuOutputTest3Value", panelCfg.airRowGap], ["textMenuOutputTest4Value", panelCfg.bottomInset], ["textMenuOutputTest5Value", panelCfg.radius], ["textMenuOutputTest6Value", panelCfg.showLanes ? "ON" : "OFF"]];
        for (var idx_24 = 0; idx_24 < rows.length; ++idx_24) {
          var valueEl = pageRootEl.ot(rows[idx_24][0]);
          if (valueEl) valueEl.Wt = "" + rows[idx_24][1];
        }
        var radiusEl = pageRootEl.ot("textMenuOutputTest5Value");
        if (radiusEl && window.umgKeyPanel) window.umgKeyPanel.setGuidePos((pageRootEl.Te || 0) + radiusEl.Te, (pageRootEl.Qt || 0) + radiusEl.Qt, radiusEl.Le, radiusEl.G0);
      } catch (catchErr) {}
    }, pageObj_2.fu = function () {
      try {
        window.umgKeyPanel && (window.umgKeyPanel.settingsBegin(), this.K());
      } catch (v_e_31876) {}
    }, pageObj_2._u = function () {
      try {
        var v_glL_31877 = currentRsb && currentRsb.lt && currentRsb.lt.ot("keyGuideLeft"),
          v_glR_31878 = currentRsb && currentRsb.lt && currentRsb.lt.ot("keyGuideRight");
        if (v_glL_31877) v_glL_31877.Be = !1;
        if (v_glR_31878) v_glR_31878.Be = !1;
        window.umgKeyPanel && window.umgKeyPanel.settingsEnd();
      } catch (catchErr_2) {}
    }, pageObj_2.du = function (btnMask_4, heldMask_4) {
      if (this.au === 7 && btnMask_4 & BTN_ENTER) {
        switchPage("Root");
        return;
      }
      try {
        if (btnMask_4 & BTN_UP) {
          var itemCount = this.gu.length,
            prevIdx = this.au - 1;
          this.au = prevIdx < 0 ? itemCount - 1 : prevIdx;
          this.vu();
          this.K();
          return;
        }
        if (btnMask_4 & BTN_DOWN) {
          var itemCount2 = this.gu.length,
            nextIdx = this.au + 1;
          this.au = nextIdx >= itemCount2 ? 0 : nextIdx;
          this.vu();
          this.K();
          return;
        }
        if (btnMask_4 & BTN_TEST) {
          switchPage("Root");
          return;
        }
        var keys = ["rowH", "colGap", "airGap", "airRowGap", "bottomInset", "radius", "showLanes", null],
          dirSign = 0;
        if (btnMask_4 & 16) dirSign = 1;else if (btnMask_4 & 8) dirSign = -1;else if (btnMask_4 & BTN_SERVICE) dirSign = 1;else return;
        if (this.au === 7) {
          switchPage("Root");
          return;
        }
        var cfgKey = keys[this.au];
        if (!cfgKey) {
          return;
        }
        if (cfgKey === "showLanes") {
          window.umgKeyPanel && window.umgKeyPanel.setLanes(!window.umgKeyPanel.get().showLanes);
        } else {
          window.umgKeyPanel && window.umgKeyPanel.cycle(cfgKey, dirSign);
        }
        this.K();
      } catch (catchErr_3) {}
    }, pageObj_2.vu = function () {
      try {
        var cursorEl = this.uu && this.uu.ot("textMenuCursor"),
          targetEl = this.bu();
        if (cursorEl && targetEl) cursorEl.Qt = targetEl.Qt;
      } catch (catchErr_4) {}
    }), (pageObj_2 = MenuPage.Vc("Graphics")) && (pageObj_2.gu = ["Resolution", "FpsLimit", "ShowStat", "Back"], pageObj_2.au = pageObj_2.gu.indexOf("Back"), pageObj_2.On = {
      Ru: [["640x360", "640 X 360", 640, 360], ["960x540", "960 X 540", 960, 540], ["1280x720", "1280 X 720", 1280, 720], ["1920x1080", "1920 X 1080 (DEFAULT)", 1920, 1080], ["2560x1440", "2560 X 1440", 2560, 1440]],
      Pu: [[0, "OFF"], [1, "30 fps"], [2, "60 fps"]]
    }, pageObj_2.fu = function () {
      this.Du(), this.Gu(), this.ju();
    }, pageObj_2.du = function (btnMask_5, heldMask_5) {
      if (!this.pu(btnMask_5, heldMask_5) && btnMask_5 & (BTN_ENTER | BTN_TEST)) switch (this.gu[this.au]) {
        case "Resolution":
          this.Nu();
          break;
        case "FpsLimit":
          this.Hu();
          break;
        case "ShowStat":
          this.Uu();
          break;
        case "Back":
          switchPage("Root");
      }
    }, pageObj_2.vu = function () {
      this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
    }, pageObj_2.Du = function () {
      let resIndex = this.On.Ru.findIndex(resEntry => resEntry[0] === scope.v_R_27641);
      -1 === resIndex && (resIndex = 2), this.uu.ot("textMenuResolutionValue").Wt = this.On.Ru[resIndex][1];
    }, pageObj_2.Nu = function () {
      let resIndex_2 = this.On.Ru.findIndex(resEntry_2 => resEntry_2[0] === scope.v_R_27641);
      var nextIndex = scope.v_qa_28086((resIndex_2 = -1 === resIndex_2 ? 2 : resIndex_2) + 1, this.On.Ru.length);
      scope.systemMisc.Vu(this.On.Ru[nextIndex][2], this.On.Ru[nextIndex][3]), this.Du();
    }, pageObj_2.Gu = function () {
      let fpsIndex = this.On.Pu.findIndex(fpsEntry => fpsEntry[0] === scope.v_p_27572);
      -1 === fpsIndex && (fpsIndex = 0), this.uu.ot("textMenuFpsLimitValue").Wt = this.On.Pu[fpsIndex][1];
    }, pageObj_2.Hu = function () {
      var nextIndex_2 = scope.v_qa_28086(this.On.Pu.findIndex(fpsEntry_2 => fpsEntry_2[0] === scope.v_p_27572) + 1, this.On.Pu.length);
      scope.v_p_27572 = this.On.Pu[nextIndex_2][0], this.Gu();
    }, pageObj_2.ju = function () {
      this.uu.ot("textMenuShowStatValue").Wt = scope.v_k_27573 ? "ON" : "OFF";
    }, pageObj_2.Uu = function () {
      scope.v_k_27573 = !scope.v_k_27573, this.ju();
    }), (pageObj_2 = MenuPage.Vc("HardwareInfo")) && (pageObj_2.wu = 0, pageObj_2.On = {
      Ou: !1
    }, pageObj_2.fu = async function () {
      let menuSelf = this;
      this.wu = 0, this.On.Ou = !1, this.uu.ot("loadingDialog").Be = !0, currentRsb.e8(0, this.uu.ot("loadingDialog"));
      var infoResult = "----";
      let inputModeText = "KEYBOARD EMULATION",
        outputModeText = infoResult,
        serverName = infoResult,
        serverVersion = infoResult,
        hardwareName = infoResult,
        hardwareVersion = infoResult,
        comPort = infoResult,
        boardNumber = infoResult,
        firmwareVersion = infoResult,
        ioPort = infoResult,
        ioBoardNumber = infoResult,
        ioFirmwareVersion = infoResult;
      function applyInfo(infoDone) {
        menuSelf.uu.ot("textMenuMainDeviceInputMode").Wt = inputModeText, menuSelf.uu.ot("textMenuMainDeviceOutputMode").Wt = outputModeText, menuSelf.uu.ot("textMenuMainDeviceServerName").Wt = serverName, menuSelf.uu.ot("textMenuMainDeviceServerVersion").Wt = serverVersion, menuSelf.uu.ot("textMenuMainDeviceHardwareName").Wt = hardwareName, menuSelf.uu.ot("textMenuMainDeviceHardwareVersion").Wt = hardwareVersion, menuSelf.uu.ot("textMenuMainDevicePort").Wt = comPort, menuSelf.uu.ot("textMenuMainDeviceBoardNumber").Wt = boardNumber, menuSelf.uu.ot("textMenuMainDeviceFirmwareVersion").Wt = firmwareVersion, menuSelf.uu.ot("textMenuUmgrIoPort").Wt = ioPort, menuSelf.uu.ot("textMenuUmgrIoBoardNumber").Wt = ioBoardNumber, menuSelf.uu.ot("textMenuUmgrIoFirmwareVersion").Wt = ioFirmwareVersion, infoDone && (menuSelf.wu = BTN_ENTER, menuSelf.On.Ou = !0, menuSelf.uu.ot("loadingDialog").Be = !1);
      }
      applyInfo(), scope.boardLanes && (inputModeText = "COM", outputModeText = "COM", comPort = "COM" + scope.handshake.rm.A7, infoResult = await scope.boardLanes.CR(), boardNumber = "837-" + infoResult.bd_num, firmwareVersion = "" + infoResult.fw), scope.ledOutput.Bt() && (outputModeText = "WebSocket (" + scope.v_Pe_28064(scope.handshake.rm.y7) + ")", infoResult = await new Promise(promiseResolve => scope.ledOutput.rv(promiseResolve))) && (serverName = infoResult.av, serverVersion = infoResult.sv[0] + "." + infoResult.sv[1], hardwareName = infoResult.ov, hardwareVersion = infoResult.cv[0] + "." + infoResult.cv[1]), applyInfo(), scope.boardAir && (ioPort = "COM" + scope.handshake.rm.S7, infoResult = await scope.boardAir.CR(), ioBoardNumber = "000-" + infoResult.bd_num, ioFirmwareVersion = "" + infoResult.fw), applyInfo(!0);
    }, pageObj_2.du = function (btnMask_6, heldMask_6) {
      this.On.Ou && btnMask_6 & (BTN_ENTER | BTN_TEST) && switchPage("Root");
    }), (pageObj_2 = MenuPage.Vc("AmReaderTest")) && (pageObj_2.gu = ["AmReaderTestReader", "AmReaderTestLed", "Back"], pageObj_2.au = pageObj_2.gu.indexOf("Back"), pageObj_2.On = {
      w9: 0,
      uS: !1
    }, pageObj_2.fu = function () {
      this.On.w9 = 0, this.fS(), this.uu.ot("textMenuAmReaderStateValue").Wt = "----", this.uu.ot("textMenuAmReaderResultValue").Wt = "----", this.uu.ot("textMenuAmReaderTimeValue").Wt = "----";
    }, pageObj_2._u = function () {
      scope.v_D_27646._S(0), scope.v_D_27646.C9();
    }, pageObj_2.du = function (btnMask_7, heldMask_7) {
      if (!this.On.uS && !this.pu(btnMask_7, heldMask_7) && btnMask_7 & (BTN_ENTER | BTN_TEST)) switch (this.gu[this.au]) {
        case "AmReaderTestReader":
          this.On.uS = !0, this.On.w9 = 0, this.fS(), this.uu.ot("textMenuAmReaderStateValue").Wt = scope.v_Ue_28209("svcMenuAmReaderStateInit"), this.uu.ot("textMenuAmReaderResultValue").Wt = "----", this.uu.ot("textMenuAmReaderTimeValue").Wt = "----", currentRsb.e8(1, this.uu), scope.v_Fe_28101(async () => {
            let startTimeMs = 0,
              endTimeMs = 0;
            var timeoutId = scope.v_uo_28102(() => {
                scope.v_D_27646.C9();
              }, 1e4),
              readResult = await scope.v_D_27646.R9(stateCb => {
                currentRsb.e8(1, this.uu), 1 === stateCb ? startTimeMs = performance.now() : 2 === stateCb && (endTimeMs = performance.now()), this.uu.ot("textMenuAmReaderStateValue").Wt = scope.v_Ue_28209(["svcMenuAmReaderStateIdling", "svcMenuAmReaderStatePolling", "svcMenuAmReaderStateDone"][stateCb]);
              }),
              timeoutId = (clearTimeout(timeoutId), 0 === endTimeMs && (this.uu.ot("textMenuAmReaderStateValue").Wt = scope.v_Ue_28209("svcMenuAmReaderStateTimedout")), readResult === scope.v_Ts_28004 || readResult === scope.v_Is_28005);
            currentRsb.i8(1, this.uu), this.uu.ot("textMenuAmReaderResultValue").Wt = timeoutId ? "BAD" : "GOOD", this.uu.ot("textMenuAmReaderTimeValue").Wt = timeoutId ? "----" : (endTimeMs - startTimeMs).toFixed(2) + "ms", this.On.uS = !1;
          });
          break;
        case "AmReaderTestLed":
          this.On.w9 = (this.On.w9 + 1) % 5, scope.v_D_27646._S(this.On.w9), this.fS();
          break;
        case "Back":
          switchPage("Root");
      }
    }, pageObj_2.fS = function () {
      this.uu.ot("textMenuAmReaderLedValue").Wt = this.On.w9 ? "ON" : "OFF";
    }, pageObj_2.vu = function () {
      this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
    }), (pageObj_2 = MenuPage.Vc("VfdTest")) && (pageObj_2.wu = BTN_ENTER, pageObj_2.fu = function () {
      scope.v_D_27646.hS();
    }, pageObj_2._u = function () {
      scope.v_D_27646.dS();
    }, pageObj_2.du = function (btnMask_8, heldMask_8) {
      btnMask_8 & (BTN_ENTER | BTN_TEST) && switchPage("Root");
    }), (pageObj_2 = MenuPage.Vc("InputDelayTest")) && (pageObj_2.wu = BTN_ENTER, pageObj_2.fu = function () {
      let delayEl = this.uu.ot("textMenuDelayValue"),
        intervalEl = this.uu.ot("textMenuAutoScanIntervalValue"),
        intervalMaxEl = this.uu.ot("textMenuAutoScanIntervalValueMax"),
        noteEl = (delayEl.Wt = "----", intervalEl.Wt = "----", intervalMaxEl.Wt = "----", this.uu.ot("inputDelayTestNote")),
        delayBarEl = this.uu.ot("inputDelayTestDelay"),
        delayStart = (delayBarEl.Be = !1, performance.now()),
        nextTick = 0,
        prevTick = 0,
        lastDelay = 0,
        tickInterval = 500,
        delayList = new scope.v_ps_27996(DelayEntry, 1);
      function updateDelay() {
        let itemCount_2 = 0,
          sum = 0;
        for (var entry of delayList.Zl()) entry.lr && (++itemCount_2, sum += entry.xR);
        delayBarEl.Be = !0, delayBarEl.Qt = sum / itemCount_2 / tickInterval * 512 + 255, delayEl.Wt = 0 === itemCount_2 ? "----" : (sum / itemCount_2).toFixed(2);
      }
      scope.boardLanes && scope.boardLanes.TR(!0), scope.v_Fe_28101(() => {
        scope.renderer.ut("InputDelayTest", new scope.v_Tl_28174((tickTime, tickArg2, tickArg3) => {
          scope.boardLanes && (intervalEl.Wt = scope.boardLanes.PR.toFixed(2), intervalMaxEl.Wt = scope.boardLanes.RR.toFixed(2)), tickTime >= nextTick && (prevTick = nextTick, scope.v_Ae_27892.dn("guide"), nextTick = delayStart + Math.floor((tickTime - delayStart) / tickInterval) * tickInterval + tickInterval), noteEl.Qt = (tickTime - delayStart + .5 * tickInterval) % tickInterval / tickInterval * 512;
          let heldArr = scope.inputModule.aR(),
            anyHeld = !1;
          for (let laneIdx_2 = 0; laneIdx_2 < 32; laneIdx_2++) if (heldArr[laneIdx_2]) {
            anyHeld = !0;
            break;
          }
          var entry_2;
          anyHeld && (lastDelay = tickTime >= nextTick - tickInterval / 2 ? (lastDelay !== prevTick && lastDelay !== nextTick && ((entry_2 = delayList.Vc()).lr = !0, entry_2.xR = tickTime - nextTick, updateDelay()), nextTick) : (lastDelay !== prevTick && ((entry_2 = delayList.Vc()).lr = !0, entry_2.xR = tickTime - prevTick, updateDelay()), prevTick));
        }), 400, sceneCfg => {
          sceneCfg.p9 = 10;
        });
      });
    }, pageObj_2._u = function () {
      scope.boardLanes && scope.boardLanes.TR(!1), scope.v_Fe_28101(() => scope.renderer._i("InputDelayTest"));
    }, pageObj_2.du = function (btnMask_9, heldMask_9) {
      btnMask_9 & (BTN_ENTER | BTN_TEST) && switchPage("Root");
    }), (pageObj_2 = MenuPage.Vc("DataState")) && (pageObj_2.wu = BTN_ENTER, pageObj_2.fu = function () {
      let itemCount_3 = 0;
      this.uu.ot("textMenuSongsValue").Wt = "" + scope.v_be_27857.Pp.length, itemCount_3 = 0;
      for (const group of scope.v_be_27857.Gp) itemCount_3 += group.items.length;
      this.uu.ot("textMenuCoursesValue").Wt = "" + itemCount_3, this.uu.ot("textMenuCharaValue").Wt = "" + scope.v_be_27857.Np.length, this.uu.ot("textMenuTitlesValue").Wt = "" + scope.v_be_27857.Hp.length, this.uu.ot("textMenuNameplatesValue").Wt = "" + scope.v_be_27857.Up.length, this.uu.ot("textMenuVoicesValue").Wt = "" + scope.v_be_27857.Vp.length;
    }, pageObj_2.du = function (btnMask_10, heldMask_10) {
      btnMask_10 & (BTN_ENTER | BTN_TEST) && switchPage("Root");
    }), (pageObj_2 = MenuPage.Vc("VideoExportTest")) && (pageObj_2.wu = 0, pageObj_2.fu = async function () {
      this.uu.ot("testPattern0").Be = !1;
      var exportResult = await scope.systemMisc.O6(scope.v_Se_27889.y6(), scope.v_yn_27656 * scope.v_Sn_27657 * 4, scope.v_Se_27889.dv());
      exportResult.ok ? (this.uu.ot("testPattern0").Be = !0, scope.v_Se_27889.p6(), scope.v_d1_27871(), await scope.renderer.C7(scope.v_Ge_28204(120)), scope.v_v1_27872(), scope.v_Se_27889.C6(), scope.systemMisc.K6(), await scope.systemMisc.Fp(), scope.v_ie_27875(), confirmDialog("Video exported successfully", scope.v_N0_27771, function () {
        switchPage("Root");
      })) : confirmDialog("Video Exporter Error\n" + exportResult.msg, scope.v_N0_27771, function () {
        switchPage("Root");
      });
    });
  }
  function menuLoop(btnMask_11, heldMask_11, frameArg) {
    if (menuState.Gi) {
      if (menuState.a0) {
        menuState.iu.nu ? (guideElements.mu.Be = 1 < menuState.iu.su, guideElements.Su.Be = 1 < menuState.iu.su, guideElements.xu.Be = !0) : (guideElements.mu.Be = !!(menuState.a0.wu & BTN_DOWN), guideElements.Su.Be = !!(menuState.a0.wu & BTN_UP), guideElements.xu.Be = !!(menuState.a0.wu & BTN_ENTER));
        {
          var heldArr_2 = scope.inputModule.oR(),
            keyBindings_2 = scope.inputModule.vR();
          let edgeMask = 0,
            heldButtons = 0;
          for (let idx_25 = 0; idx_25 < keyBindings_2.length; ++idx_25) switch (keyBindings_2[idx_25].Ae) {
            case "esc":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= BTN_TEST), 2 === keyBindings_2[idx_25].lu && (edgeMask |= BTN_TEST);
              break;
            case "enter":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= BTN_SERVICE), 2 === keyBindings_2[idx_25].lu && (edgeMask |= BTN_SERVICE);
              break;
            case "up":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= BTN_UP), 2 === keyBindings_2[idx_25].lu && (edgeMask |= BTN_UP);
              break;
            case "down":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= BTN_DOWN), 2 === keyBindings_2[idx_25].lu && (edgeMask |= BTN_DOWN);
              break;
            case "left":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= 8), 2 === keyBindings_2[idx_25].lu && (edgeMask |= 8);
              break;
            case "right":
              2 & keyBindings_2[idx_25].lu && (heldButtons |= 16), 2 === keyBindings_2[idx_25].lu && (edgeMask |= 16);
          }
          for (const zone of menuState.ve) {
            zone.lu >>= 1;
            for (let laneIdx_3 = 0; laneIdx_3 < 32; ++laneIdx_3) if (heldArr_2[laneIdx_3] && laneIdx_3 >= 2 * zone.ou && laneIdx_3 < 2 * (zone.ou + zone.Le)) {
              zone.lu |= 2;
              break;
            }
            2 & zone.lu && (heldButtons |= zone.Ae), 2 === zone.lu && (edgeMask |= zone.Ae);
          }
          menuState.tu = heldButtons, menuState.eu = edgeMask, window.__umgPadTake && (menuState.eu |= window.__umgPadTake(), menuState.tu = menuState.eu);
        }
        menuState.iu.nu ? handleDialogInput(menuState.eu, menuState.tu) : (!menuState.Qc && menuState.a0.du && menuState.a0.du(menuState.eu, menuState.tu), !menuState.Qc && menuState.a0.hu && menuState.a0.hu()), menuState.Qc = !1;
      }
    } else {
      var keyBindingsAlt = scope.inputModule.vR();
      for (let idx_26 = 0; idx_26 < keyBindingsAlt.length; ++idx_26) "esc" === keyBindingsAlt[idx_26].Ae ? 2 === keyBindingsAlt[idx_26].lu && openTestMenu() : "enter" === keyBindingsAlt[idx_26].Ae && 2 === keyBindingsAlt[idx_26].lu && scope.v_R1_27896.WA();
    }
  }
  function openTestMenu() {
    scope.v_Le_28076([taskDone => {
      scope.renderer.v9(9), scope.sceneManager.Jk(!0), scope.ledOutput.iv(!0), scope.v_D_27646.C9(), scope.v_D_27646.dS(), (menuState = new MenuState()).Gi = !0, scope.renderer.ut("sysTestMenu", currentRsb, 9001, sceneCfg_2 => {
        scope.v_Me_28078(taskDone);
      });
    }, afterLoad => {
      currentRsb.lt.yk(2).Wt = `${scope.v_G_27652} v${scope.v_nc_28202()} Build ${scope.handshake.rm.Sm} ${scope.handshake.rm.xm} (${scope.handshake.rm.ym}) @` + scope.handshake.rm.Cm, switchPage("Root");
    }]);
  }
  return {
    ue: function (onReady) {
      scope.v_Le_28076([taskDone_2 => {
        scope.languagePackages.it("ui/testMenu.rsb", function (rsbBuf) {
          rsbBuf ? (rsbBuf = new scope.v_Dl_28181(rsbBuf), scope.renderer.nt(rsbBuf.rt(scope.renderer.p5()), sceneRef => {
            (currentRsb = sceneRef).p9 = 10, guideElements.mu = currentRsb.lt.yk(182), guideElements.Su = currentRsb.lt.yk(186), guideElements.xu = currentRsb.lt.yk(190), guideElements.Iu = currentRsb.lt.yk(172), guideElements.yu = guideElements.Iu.yk(176), guideElements.Cu = guideElements.Iu.yk(177), guideElements.Au = guideElements.Iu.yk(178), guideElements.Tu = guideElements.Iu.yk(179), guideElements.Lu = guideElements.Iu.yk(180), buildPages(), scope.v_Me_28078(taskDone_2);
          })) : onReady();
        });
      }, onFail => {
        scope.v_Fe_28101(onReady);
      }]);
    },
    Ju: function () {
      scope.renderer.ut("sysTestMenuLoop", new scope.v_Tl_28174(menuLoop), 9e3, sceneCfg_3 => {
        sceneCfg_3.p9 = 10;
      });
    },
    T0: openTestMenu,
    Gi: () => menuState.Gi
  };
}
