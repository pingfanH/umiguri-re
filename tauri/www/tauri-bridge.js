// tauri-bridge.js - Tauri 前端桥接(umgr_elc + 键盘输入)
(function () {
  'use strict';

  // ============ 键盘输入(e.code -> VK 码, 跨平台) ============
  const keyState = new Set();
  function codeToVk(code) {
    if (!code) return 0;
    if (code.startsWith('Key') && code.length === 4) return code.charCodeAt(3);
    if (code.startsWith('Digit') && code.length === 6) return code.charCodeAt(5);
    const map = {
      'ArrowLeft': 37, 'ArrowRight': 39, 'ArrowUp': 38, 'ArrowDown': 40,
      'Enter': 13, 'Escape': 27, 'Space': 32, 'Backspace': 8, 'Tab': 9,
      'ShiftLeft': 16, 'ShiftRight': 16, 'ControlLeft': 17, 'ControlRight': 17,
      'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115, 'F5': 116,
      'F6': 117, 'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121,
      'Comma': 188, 'Period': 190, 'Semicolon': 186, 'Quote': 222, 'Slash': 191,
      'Backslash': 220, 'BracketLeft': 219, 'BracketRight': 221, 'Minus': 189,
      'Equal': 187, 'Backquote': 192,
    };
    return map[code] !== undefined ? map[code] : 0;
  }
  window.addEventListener('keydown', (e) => {
    const vk = codeToVk(e.code) || e.keyCode;
    keyState.add(vk);
    if (!e.repeat) keyState.add('down:' + vk);
  });
  window.addEventListener('keyup', (e) => {
    const vk = codeToVk(e.code) || e.keyCode;
    keyState.delete(vk);
  });
  window.addEventListener('blur', () => keyState.clear());

  const CHAR_TO_VK = {
    59: 186, 61: 187, 44: 188, 45: 189, 46: 190, 47: 191, 96: 192,
    91: 219, 92: 220, 93: 221, 39: 222,
  };
  function kbdHeld(vk) { return keyState.has(vk) ? 1 : 0; }
  function kbdUni2Virt(charCode) {
    if (charCode >= 48 && charCode <= 57) return charCode;
    if (charCode >= 65 && charCode <= 90) return charCode;
    if (charCode >= 97 && charCode <= 122) return charCode - 32;
    if (CHAR_TO_VK[charCode] !== undefined) return CHAR_TO_VK[charCode];
    return charCode;
  }

  // DirectInput(DIK) 键码 -> Windows VK 码(游戏 m_mi 使用 DIK 键码)
  // 注意: 方向键是 DIK_UP=200/LEFT=203/RIGHT=205/DOWN=208,不是 evdev 的 103/105/106/108
  const DIK_TO_VK = {
    1: 27,    // Escape
    2: 49, 3: 50, 4: 51, 5: 52, 6: 53, 7: 54, 8: 55, 9: 56, 10: 57, 11: 48, // 1-0
    12: 189, 13: 187, 14: 8, 15: 9, // - = Backspace Tab
    16: 81, 17: 87, 18: 69, 19: 82, 20: 84, 21: 89, 22: 85, 23: 73, 24: 79, 25: 80, // Q-P
    26: 219, 27: 221, 28: 13, 29: 17, // [ ] Enter CtrlL
    30: 65, 31: 83, 32: 68, 33: 70, 34: 71, 35: 72, 36: 74, 37: 75, 38: 76, // A-L
    39: 186, 40: 222, 41: 192, 42: 16, 43: 220, // ; ' ` ShiftL \
    44: 90, 45: 88, 46: 67, 47: 86, 48: 66, 49: 78, 50: 77, // Z-M
    51: 188, 52: 190, 53: 191, 54: 16, // , . / ShiftR
    57: 32, // Space
    59: 112, 60: 113, 61: 114, 62: 115, 63: 116, 64: 117, 65: 118, 66: 119, 67: 120, 68: 121, // F1-F10
    87: 122, 88: 123, // F11-F12
    200: 38, 203: 37, 205: 39, 208: 40, // ArrowUp/Left/Right/Down (DIK)
  };
  function di8KbdHeld(dik) {
    const vk = DIK_TO_VK[dik];
    return vk !== undefined && keyState.has(vk) ? 1 : 0;
  }

  // ============ umgr_elc(Tauri invoke 调 Rust command) ============
  const invoke = window.__TAURI__ && window.__TAURI__.invoke;
  if (!invoke) {
    console.error('[tauri-bridge] window.__TAURI__ 不可用');
  }

  // base64 -> Uint8Array(Rust 端 fs_file/fs_read 返回 base64)
  function b64ToU8(b64) {
    const bin = atob(b64);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
    return u8;
  }

  // 整文件缓存: .una 语言包/音频等被反复读,缓存避免重复读取
  const fileCache = new Map();
  function umgUrl(p) {
    return 'https://umg.localhost' + (p.startsWith('/') ? p : '/' + p);
  }
  async function cachedFile(p) {
    const key = String(p).split('?')[0];
    if (fileCache.has(key)) return fileCache.get(key);
    const resp = await fetch(umgUrl(key));
    if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + key);
    const data = new Uint8Array(await resp.arrayBuffer());
    fileCache.set(key, data);
    return data;
  }

  const handshake = {
    O: { ct: 'DEV_MOCK', B: 1650000, p9: 69 },
    I: 0, R: 8090, j: 1, M: 3, L: 0, U: false,
    P: '00 00 00 00 00 00', G: '00 00 00 00 00 00', Y: 0,
    fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY',
    I4: 'ja-JP', am: 0, W: true, H: 1, J: true, K: true,
    Z: { X: false, a1: false, d1: false, t1: false, s1: false },
    u1: '1920x1080', v1: false,
    h1: { T: '2025/05/24', rr: '16:51:06', C: '9f4d448', GA: 'Release', Ph: false },
    f1: false,
    g1: [
      { name: 'ja-JP', version: 6, packageName: 'hiiragi.una' },
      { name: 'en-US', version: 6, packageName: 'sakuragi.una' },
      { name: 'exField', version: 6, packageName: 'natsukawa.una' },
    ],
  };

  window.umgr_elc = {
    enable: true,
    _: handshake,
    st: {
      zu: (p) => invoke('fs_list', { path: p }),
      sn: (p) => cachedFile(p).then(data => ({ status: 0, data })).catch(() => ({ status: -1 })),
      _2: (p) => invoke('fs_size', { path: p }).then(r => ({ status: r.status, data: { val: r.data } })).catch(() => ({ status: -1 })),
      xl: (p, offset, size) => cachedFile(p).then(buf => ({ status: 0, data: { buf: buf.slice(offset, offset + size), br: Math.min(size, Math.max(0, buf.length - offset)) } })).catch(() => ({ status: -1 })),
      Qf: async () => ({ status: 0, data: { used: 0, free: 1000000000, cap: 1000000000 } }),
      e2: async () => ({ status: -1 }),
      yl: async () => ({ status: -1 }),
      i2: async () => ({ status: -1 }),
      n2: async () => ({ status: -1 }),
      o2: async () => ({ status: -1 }),
      l2: async () => ({ status: -1 }),
      Xu: async () => ({ status: -1, data: { entry: null, writer: null } }),
    },
    si: {
      Vu: async () => ({}), w2: async () => ({}), se: async () => ({}),
      sr: async () => ({}), S2: async () => ({}), fc: async () => ({}),
      sc: async () => false, jc: async () => ({}), ss: async () => ({}),
      so: async () => ({}), xo: async () => {}, sp: async () => ({}),
      op: async () => ({}), t4: async () => ({}), r4: async () => {},
      f4: async () => {}, s4: async () => ({}), d4: async () => {}, a4: async () => {},
      t2: async () => false, sa: async () => null,
    },
    g4: {
      x4: async () => {}, jc: async () => ({}), ss: async () => ({}),
      so: async () => ({}), xo: async () => ({}), sp: async () => ({}),
    },
  };

  // 键盘函数
  window.getCurrentProcessId = () => 0;
  window.kbdStart = () => 1;
  window.kbdUpdate = () => 1;
  window.kbdHeld = kbdHeld;
  window.kbdUni2Virt = kbdUni2Virt;
  window.di8KbdStart = () => 0;
  window.di8KbdUpdate = () => 0;
  window.di8KbdHeld = di8KbdHeld;
  window.di8KbdShutdown = () => 0;
  // 串口 mock
  window.ugSerialCreate = () => 1;
  window.ugSerialOpen = () => false;
  window.ugSerialWrite = () => false;
  window.ugSerialPop = () => null;
  window.ugSerialClose = () => {};
  window.ugSerialDestroy = () => {};

  // 窗口拖动时暂停渲染,缓解 WebView2 拖动卡顿
  if (window.__TAURI__ && window.__TAURI__.event && window.__TAURI__.event.listen) {
    let moving = false;
    const pending = [];
    const realRAF = window.requestAnimationFrame.bind(window);
    window.__TAURI__.event.listen('umg-moving', function (e) {
      moving = !!e.payload;
      if (!moving) {
        // 恢复: 触发积压的 RAF
        const q = pending.splice(0);
        for (const cb of q) realRAF(cb);
      }
    });
    window.requestAnimationFrame = function (cb) {
      if (moving) {
        pending.push(cb);
        return 0;
      }
      return realRAF(cb);
    };
  }
})();
