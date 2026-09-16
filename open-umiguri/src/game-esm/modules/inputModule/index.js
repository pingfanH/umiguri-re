// 模块: inputModule
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createInputModule(scope) {
  let laneKeyChars = ["1", "A", "Q", "Z", "2", "S", "W", "X", "3", "D", "E", "C", "4", "F", "R", "V", "5", "G", "T", "B", "6", "H", "Y", "N", "7", "J", "U", "M", "8", "K", "I", "9", "0", "O", "L", "P", ",", ".", "]"],
    laneState = laneKeyChars.map(mapCb => 0),
    laneVk = laneKeyChars.map(mapCb => 0),
    laneAnalog = laneKeyChars.map(mapCb => 0);
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
  function onPointerMove(evt) {
    pointerCallbacks.forEach(forEachCb => {
      forEachCb(1, evt.offsetX, evt.offsetY);
    });
  }
  function onPointerUp(evt) {
    pointerCallbacks.forEach(forEachCb => {
      forEachCb(2, evt.offsetX, evt.offsetY);
    });
  }
  function onPointerEnter(evt) {
    pointerCallbacks.forEach(forEachCb => {
      forEachCb(10, evt.offsetX, evt.offsetY);
    });
  }
  function onPointerLeave(evt) {
    pointerCallbacks.forEach(forEachCb => {
      forEachCb(11, evt.offsetX, evt.offsetY);
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
        for (let idx = 0; idx < keyBindings.length; ++idx) vkList.push(keyBindings[idx].rI);
        scope.kbdStartFn(vkList);
      }
    },
    tb: function (keyId, keyFn) {
      pointerCallbacks.set(keyId, keyFn);
    },
    eb: function (keyId) {
      pointerCallbacks.delete(keyId);
    },
    $I: function (keyId, keyFn) {
      keyEventCallbacks.set(keyId, keyFn);
    },
    ZI: function (keyId) {
      keyEventCallbacks.delete(keyId);
    },
    oe: function () {
      for (let idx = 0; idx < laneState.length; ++idx) laneState[idx] >>= 1;
      for (let idx = 0; idx < keyBindings.length; ++idx) keyBindings[idx].lu >>= 1;
      if ((useDirectInput ? scope.di8KbdUpdateFn : scope.kbdUpdateFn)(), scope.inputEnabled) if (useDirectInput) for (let idx = 0; idx < keyBindings.length; ++idx) keyBindings[idx].lu |= scope.di8KbdHeldFn(keyBindings[idx].sI) ? 2 : 0;else for (let idx = 0; idx < keyBindings.length; ++idx) keyBindings[idx].lu |= scope.kbdHeldFn(keyBindings[idx].rI) ? 2 : 0;
      if (scope.boardLanes && scope.boardAir) {
        var sensorLevels = scope.boardLanes.x7();
        for (let idx = 0; idx < 32; ++idx) laneState[idx] |= 20 <= sensorLevels[31 - idx] ? 2 : 0, laneAnalog[idx] = sensorLevels[31 - idx];
        var airSensor = scope.boardAir.I7();
        for (let idx = 0; idx < 6; ++idx) laneState[idx + 32] |= 63 < airSensor[idx] ? 2 : 0, laneAnalog[idx + 32] = airSensor[idx];
      } else if (scope.ledOutput.Q6()) {
        var ledValues = scope.ledOutput.ev();
        for (let idx = 0; idx < 32; ++idx) laneState[idx] |= 20 <= ledValues[idx] ? 2 : 0, laneAnalog[idx] = ledValues[idx];
        for (let idx = 32; idx < 38; ++idx) laneState[idx] |= 63 < ledValues[idx] ? 2 : 0, laneAnalog[idx] = ledValues[idx];
      } else {
        if (scope.inputEnabled) if (useDirectInput) {
          for (let idx = 0; idx < laneState.length; ++idx) laneState[idx] |= scope.di8KbdHeldFn(scope.keyCodes[laneKeyChars[idx]]) || window.__umgLanes && window.__umgLanes[idx] ? 2 : 0;
          for (let idx = 0; idx < keyBindings.length; ++idx) keyBindings[idx].lu |= scope.di8KbdHeldFn(keyBindings[idx].sI) ? 2 : 0;
        } else {
          for (let idx = 0; idx < laneState.length; ++idx) laneState[idx] |= scope.kbdHeldFn(laneVk[idx]) || window.__umgLanes && window.__umgLanes[idx] ? 2 : 0;
          for (let idx = 0; idx < keyBindings.length; ++idx) keyBindings[idx].lu |= scope.kbdHeldFn(keyBindings[idx].rI) ? 2 : 0;
        }
        for (let idx = 0; idx < 38; ++idx) laneAnalog[idx] = 2 & laneState[idx] ? 200 : 0;
      }
      if (keyEventCallbacks.size) for (let idx = 0; idx < keyBindings.length; ++idx) 2 === keyBindings[idx].lu && keyEventCallbacks.forEach(keyName => keyName(keyBindings[idx].Ae));
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
      return laneState.map(laneEntry => 2 & laneEntry);
    },
    lR: function () {
      return laneState.map(laneEntry => 1 === laneEntry);
    },
    cR: function () {
      return laneState.map(laneEntry => !1 & laneEntry);
    },
    uR: function () {
      for (let idx = 32; idx < 38; ++idx) if (2 & laneState[idx]) return !0;
      return !1;
    },
    fR: function () {
      for (let idx = 32; idx < 38; ++idx) if (1 & laneState[idx]) return !0;
      return !1;
    },
    _R: function () {
      for (let idx = 32; idx < 38; ++idx) if (2 === laneState[idx] || 1 === laneState[idx]) return !0;
      return !1;
    },
    hR: function () {
      if (this.uR() && this.fR()) for (let idx = 32; idx < 38; ++idx) if (2 === laneState[idx] || 1 === laneState[idx]) return !0;
      return !1;
    },
    dR: function () {
      var airPos = {
        y: 0,
        hand: !1
      };
      let airSum = 0,
        airCount = 0;
      for (let idx = 0; idx < 6; ++idx) 2 & laneState[idx + 32] && (airSum += idx / 5 * 2 - 1, ++airCount);
      return 0 < airCount && (airPos.y = airSum / airCount, airPos.hand = !0), airPos;
    },
    vR: function () {
      return keyBindings;
    }
  };
}
