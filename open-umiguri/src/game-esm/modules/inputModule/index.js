// 模块: inputModule
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createInputModule(scope) {
  let laneKeyChars = ["1", "A", "Q", "Z", "2", "S", "W", "X", "3", "D", "E", "C", "4", "F", "R", "V", "5", "G", "T", "B", "6", "H", "Y", "N", "7", "J", "U", "M", "8", "K", "I", "9", "0", "O", "L", "P", ",", ".", "]"],
    laneState = laneKeyChars.map(mapCb => 0),
    laneVk = laneKeyChars.map(mapCb_2 => 0),
    laneAnalog = laneKeyChars.map(mapCb_3 => 0);
  function KeyBinding(keyName, stateBits, vkCode, dikCode) {
    this.Ae = keyName, this.lu = stateBits, this.rI = vkCode, this.sI = dikCode;
  }
  let keyBindings = [new KeyBinding("left", 0, 37, scope.keyCodes.ArrowLeft), new KeyBinding("right", 0, 39, scope.keyCodes.ArrowRight), new KeyBinding("up", 0, 38, scope.keyCodes.ArrowUp), new KeyBinding("down", 0, 40, scope.keyCodes.ArrowDown), new KeyBinding("enter", 0, 13, scope.keyCodes.Enter), new KeyBinding("esc", 0, 27, scope.keyCodes.Escape), new KeyBinding("space", 0, 32, scope.keyCodes.Space), new KeyBinding("shift", 0, 16, scope.keyCodes.ShiftL), new KeyBinding("shift", 0, 16, scope.keyCodes.ShiftR), new KeyBinding("f1", 0, 112, scope.keyCodes.F1), new KeyBinding("f2", 0, 113, scope.keyCodes.F2), new KeyBinding("f3", 0, 114, scope.keyCodes.F3), new KeyBinding("f4", 0, 115, scope.keyCodes.F4), new KeyBinding("f5", 0, 116, scope.keyCodes.F5), new KeyBinding("f6", 0, 117, scope.keyCodes.F6), new KeyBinding("f7", 0, 118, scope.keyCodes.F7), new KeyBinding("f8", 0, 119, scope.keyCodes.F8), new KeyBinding("f9", 0, 120, scope.keyCodes.F9), new KeyBinding("f10", 0, 121, scope.keyCodes.F10), new KeyBinding("f11", 0, 122, scope.keyCodes.F11), new KeyBinding("f12", 0, 123, scope.keyCodes.F12)],
    useDirectInput = !0,
    pointerListenersReady = !1,
    pointerCallbacks = new Map(),
    keyEventCallbacks = new Map();
  function onPointerDown(evt) {
    scope.glContext.canvas.setPointerCapture(evt.pointerId), pointerCallbacks.forEach(forEachCb => {
      forEachCb(0, evt.offsetX, evt.offsetY);
    }), window.__umgPadAt && window.__umgPadAt(evt.offsetX, evt.offsetY);
  }
  function onPointerMove(evt_2) {
    pointerCallbacks.forEach(forEachCb_2 => {
      forEachCb_2(1, evt_2.offsetX, evt_2.offsetY);
    });
  }
  function onPointerUp(evt_3) {
    pointerCallbacks.forEach(forEachCb_3 => {
      forEachCb_3(2, evt_3.offsetX, evt_3.offsetY);
    });
  }
  function onPointerEnter(evt_4) {
    pointerCallbacks.forEach(forEachCb_4 => {
      forEachCb_4(10, evt_4.offsetX, evt_4.offsetY);
    });
  }
  function onPointerLeave(evt_5) {
    pointerCallbacks.forEach(forEachCb_5 => {
      forEachCb_5(11, evt_5.offsetX, evt_5.offsetY);
    });
  }
  return {
    ue: function () {
      pointerListenersReady || (pointerListenersReady = !0, scope.glContext.canvas.addEventListener("pointerdown", onPointerDown), scope.glContext.canvas.addEventListener("pointermove", onPointerMove), scope.glContext.canvas.addEventListener("pointerup", onPointerUp), scope.glContext.canvas.addEventListener("pointerenter", onPointerEnter), scope.glContext.canvas.addEventListener("pointerleave", onPointerLeave), useDirectInput = scope.handshake.rm.wm, scope.di8KbdStartFn());
    },
    ce: function () {
      scope.di8KbdShutdownFn();
    },
    fe: function (keyString) {
      if (38 === keyString.length && (laneKeyChars = keyString.split(""), !useDirectInput)) {
        for (let idx = 0; idx < 38; ++idx) laneVk[idx] = scope.kbdUni2VirtFn(laneKeyChars[idx].charCodeAt(0));
        keyString = laneVk;
        var vkList = Array.from(new Set(keyString));
        for (let idx_2 = 0; idx_2 < keyBindings.length; ++idx_2) vkList.push(keyBindings[idx_2].rI);
        scope.kbdStartFn(vkList);
      }
    },
    tb: function (keyId, keyFn) {
      pointerCallbacks.set(keyId, keyFn);
    },
    eb: function (keyId_2) {
      pointerCallbacks.delete(keyId_2);
    },
    $I: function (keyId_3, keyFn_2) {
      keyEventCallbacks.set(keyId_3, keyFn_2);
    },
    ZI: function (keyId_4) {
      keyEventCallbacks.delete(keyId_4);
    },
    oe: function () {
      for (let idx_3 = 0; idx_3 < laneState.length; ++idx_3) laneState[idx_3] >>= 1;
      for (let idx_4 = 0; idx_4 < keyBindings.length; ++idx_4) keyBindings[idx_4].lu >>= 1;
      if ((useDirectInput ? scope.di8KbdUpdateFn : scope.kbdUpdateFn)(), scope.inputEnabled) if (useDirectInput) for (let idx_5 = 0; idx_5 < keyBindings.length; ++idx_5) keyBindings[idx_5].lu |= scope.di8KbdHeldFn(keyBindings[idx_5].sI) ? 2 : 0;else for (let idx_6 = 0; idx_6 < keyBindings.length; ++idx_6) keyBindings[idx_6].lu |= scope.kbdHeldFn(keyBindings[idx_6].rI) ? 2 : 0;
      if (scope.boardLanes && scope.boardAir) {
        var sensorLevels = scope.boardLanes.x7();
        for (let idx_7 = 0; idx_7 < 32; ++idx_7) laneState[idx_7] |= 20 <= sensorLevels[31 - idx_7] ? 2 : 0, laneAnalog[idx_7] = sensorLevels[31 - idx_7];
        var airSensor = scope.boardAir.I7();
        for (let idx_8 = 0; idx_8 < 6; ++idx_8) laneState[idx_8 + 32] |= 63 < airSensor[idx_8] ? 2 : 0, laneAnalog[idx_8 + 32] = airSensor[idx_8];
      } else if (scope.ledOutput.Q6()) {
        var ledValues = scope.ledOutput.ev();
        for (let idx_9 = 0; idx_9 < 32; ++idx_9) laneState[idx_9] |= 20 <= ledValues[idx_9] ? 2 : 0, laneAnalog[idx_9] = ledValues[idx_9];
        for (let idx_10 = 32; idx_10 < 38; ++idx_10) laneState[idx_10] |= 63 < ledValues[idx_10] ? 2 : 0, laneAnalog[idx_10] = ledValues[idx_10];
      } else {
        if (scope.inputEnabled) if (useDirectInput) {
          for (let idx_11 = 0; idx_11 < laneState.length; ++idx_11) laneState[idx_11] |= scope.di8KbdHeldFn(scope.keyCodes[laneKeyChars[idx_11]]) || window.__umgLanes && window.__umgLanes[idx_11] ? 2 : 0;
          for (let idx_12 = 0; idx_12 < keyBindings.length; ++idx_12) keyBindings[idx_12].lu |= scope.di8KbdHeldFn(keyBindings[idx_12].sI) ? 2 : 0;
        } else {
          for (let idx_13 = 0; idx_13 < laneState.length; ++idx_13) laneState[idx_13] |= scope.kbdHeldFn(laneVk[idx_13]) || window.__umgLanes && window.__umgLanes[idx_13] ? 2 : 0;
          for (let idx_14 = 0; idx_14 < keyBindings.length; ++idx_14) keyBindings[idx_14].lu |= scope.kbdHeldFn(keyBindings[idx_14].rI) ? 2 : 0;
        }
        for (let idx_15 = 0; idx_15 < 38; ++idx_15) laneAnalog[idx_15] = 2 & laneState[idx_15] ? 200 : 0;
      }
      if (keyEventCallbacks.size) for (let idx_16 = 0; idx_16 < keyBindings.length; ++idx_16) 2 === keyBindings[idx_16].lu && keyEventCallbacks.forEach(keyName_2 => keyName_2(keyBindings[idx_16].Ae));
    },
    he: 20,
    ve: function () {
      return laneState;
    },
    sR: function () {
      return laneAnalog;
    },
    aR: function () {
      return laneState.map(laneEntry => 2 === laneEntry);
    },
    oR: function () {
      return laneState.map(laneEntry_2 => 2 & laneEntry_2);
    },
    lR: function () {
      return laneState.map(laneEntry_3 => 1 === laneEntry_3);
    },
    cR: function () {
      return laneState.map(laneEntry_4 => !1 & laneEntry_4);
    },
    uR: function () {
      for (let idx_17 = 32; idx_17 < 38; ++idx_17) if (2 & laneState[idx_17]) return !0;
      return !1;
    },
    fR: function () {
      for (let idx_18 = 32; idx_18 < 38; ++idx_18) if (1 & laneState[idx_18]) return !0;
      return !1;
    },
    _R: function () {
      for (let idx_19 = 32; idx_19 < 38; ++idx_19) if (2 === laneState[idx_19] || 1 === laneState[idx_19]) return !0;
      return !1;
    },
    hR: function () {
      if (this.uR() && this.fR()) for (let idx_20 = 32; idx_20 < 38; ++idx_20) if (2 === laneState[idx_20] || 1 === laneState[idx_20]) return !0;
      return !1;
    },
    dR: function () {
      var airPos = {
        y: 0,
        hand: !1
      };
      let airSum = 0,
        airCount = 0;
      for (let idx_21 = 0; idx_21 < 6; ++idx_21) 2 & laneState[idx_21 + 32] && (airSum += idx_21 / 5 * 2 - 1, ++airCount);
      return 0 < airCount && (airPos.y = airSum / airCount, airPos.hand = !0), airPos;
    },
    vR: function () {
      return keyBindings;
    }
  };
}
