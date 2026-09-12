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
  function kbdHeld(vk) { return (keyState.has(vk) || touchState.has(vk)) ? 1 : 0; }
  function kbdUni2Virt(charCode) {
    if (charCode >= 48 && charCode <= 57) return charCode;
    if (charCode >= 65 && charCode <= 90) return charCode;
    if (charCode >= 97 && charCode <= 122) return charCode - 32;
    if (CHAR_TO_VK[charCode] !== undefined) return CHAR_TO_VK[charCode];
    return charCode;
  }

  // ============ 触摸输入(多指 + 鼠标) ============
  // 触摸驱动的按键: 用虚拟按键面板把 touch/click 映射到 VK 码。
  // keyState(物理键盘)与 touchState(触摸)合并供 kbdHeld 查询。
  const touchState = new Set();
  const touchPointers = new Map(); // pointerId -> Set<VK> (该触点按下的键)

  function vkToLabel(vk) {
    if (vk >= 65 && vk <= 90) return String.fromCharCode(vk);
    if (vk >= 48 && vk <= 57) return String.fromCharCode(vk);
    const map = {
      37: '←', 39: '→', 38: '↑', 40: '↓',
      13: 'OK', 27: '戻', 32: '␣', 16: 'Shift',
      186: ';', 187: '=', 188: ',', 189: '-', 190: '.', 191: '/',
      192: '`', 219: '[', 220: '\\', 221: ']', 222: "'",
    };
    if (map[vk]) return map[vk];
    if (vk >= 112 && vk <= 123) return 'F' + (vk - 111);
    return 'K' + vk;
  }
  function vkClassify(vk) {
    if (vk >= 65 && vk <= 90) return 'main';
    if (vk >= 48 && vk <= 57) return 'main';
    if (vk >= 186 && vk <= 192) return 'main';
    if (vk >= 219 && vk <= 222) return 'main';
    if (vk >= 37 && vk <= 40) return 'nav';
    if (vk === 13 || vk === 27 || vk === 32 || vk === 16) return 'nav';
    return 'hidden';
  }

  let keyPanel = null;
  function ensureKeyPanel(vks) {
    if (keyPanel) keyPanel.remove();
    keyPanel = document.createElement('div');
    keyPanel.id = 'ugv_keys';
    keyPanel.style.cssText =
      'position:fixed;left:0;right:0;bottom:0;z-index:99999;display:flex;flex-direction:column;' +
      'align-items:center;gap:4px;padding:6px;background:rgba(0,0,0,0.35);' +
      'pointer-events:none;user-select:none;-webkit-user-select:none;touch-action:none;';
    document.body.appendChild(keyPanel);

    const navs = vks.filter(v => vkClassify(v) === 'nav');
    const mains = vks.filter(v => vkClassify(v) === 'main');

    const navRow = mkKeyRow(navs, 'nav');
    const mainRow = mkKeyRow(mains, 'main');
    if (navRow) keyPanel.appendChild(navRow);
    if (mainRow) keyPanel.appendChild(mainRow);
  }

  function mkKeyRow(vks, kind) {
    if (!vks.length) return null;
    const row = document.createElement('div');
    row.style.cssText =
      'display:flex;gap:4px;justify-content:center;width:100%;flex-wrap:wrap;pointer-events:auto;';
    for (const vk of vks) {
      const b = document.createElement('div');
      const isMain = kind === 'main';
      b.textContent = vkToLabel(vk);
      b.dataset.vk = vk;
      b.style.cssText =
        (isMain ? 'min-width:44px;height:56px;' : 'min-width:48px;height:44px;') +
        'flex:1 1 auto;max-width:70px;display:flex;align-items:center;justify-content:center;' +
        'background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.35);' +
        'border-radius:8px;color:#fff;font:bold 16px/1 system-ui;cursor:pointer;touch-action:none;';
      bindKeyTouch(b, vk);
      row.appendChild(b);
    }
    return row;
  }

  function touchPress(vk) { touchState.add(vk); }
  function touchRelease(vk) { touchState.delete(vk); }

  function bindKeyTouch(el, vk) {
    const press = (e) => {
      if (e.button !== undefined && e.button !== 0) return; // 仅左键
      e.preventDefault();
      touchPress(vk);
      try { el.setPointerCapture && el.setPointerCapture(e.pointerId); } catch (err) {}
      el.style.background = 'rgba(255,220,80,0.55)';
      el.style.borderColor = '#ffd';
    };
    const release = () => {
      touchRelease(vk);
      el.style.background = 'rgba(255,255,255,0.12)';
      el.style.borderColor = 'rgba(255,255,255,0.35)';
    };
    el.addEventListener('pointerdown', press);
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
    el.addEventListener('pointerleave', release);
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
  // Tauri v2: core API 在 window.__TAURI__.core 命名空间下
  const invoke = window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.invoke;
  if (!invoke) {
    console.error('[tauri-bridge] window.__TAURI__.core.invoke 不可用');
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
  // Tauri v2 自定义协议 origin:
  //   macOS/Linux/iOS: <scheme>://localhost
  //   Windows/Android: http://<scheme>.localhost (默认)
  const UMG_ORIGIN = /Windows/i.test(navigator.userAgent)
    ? 'http://umg.localhost'
    : 'umg://localhost';
  function umgUrl(p) {
    return UMG_ORIGIN + encodeURI(p.startsWith('/') ? p : '/' + p);
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
    O: { ct: 'PINGFANH', B: 1650000, p9: 69 },
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
      x4: async (cb) => { console.log('[BRIDGE] g4.x4'); },
      jc: async (lang, force) => { console.log('[BRIDGE] g4.jc', lang, force); return []; },
      ss: async () => { console.log('[BRIDGE] g4.ss'); },
      so: async () => { console.log('[BRIDGE] g4.so'); },
      xo: async () => { console.log('[BRIDGE] g4.xo'); },
      sp: async () => { console.log('[BRIDGE] g4.sp'); },
    },
  };

  // 键盘函数
  window.getCurrentProcessId = () => 0;
  window.kbdStart = (keys) => {
    if (Array.isArray(keys) && keys.length) ensureKeyPanel(keys);
    return 1;
  };
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

  // 拦截 Image.src 相对路径(封面 j.png 等)转成 umg protocol
  const NativeImage = window.Image;
  const srcDesc = Object.getOwnPropertyDescriptor(NativeImage.prototype, 'src') ||
    Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  window.Image = function (w, h) {
    const img = new NativeImage(w, h);
    // 跨源加载(umg:// 协议),需标注 crossOrigin 以通过 WebGL canvas 的 CORS 检查
    img.crossOrigin = 'anonymous';
    if (srcDesc && srcDesc.set) {
      Object.defineProperty(img, 'src', {
        get: function () { return srcDesc.get.call(this); },
        set: function (value) {
          if (typeof value === 'string' && value.indexOf('/') === 0 && value.indexOf('//') !== 0) {
            value = UMG_ORIGIN + value;
          }
          srcDesc.set.call(this, value);
        },
        configurable: true,
      });
    }
    return img;
  };
  window.Image.prototype = NativeImage.prototype;

  // 利用規約(terms)iframe: 游戏用 sandbox="allow-popups" 但之后又要访问 contentWindow,
  // 在 WebKit 里会因缺 allow-same-origin 抛 SecurityError。此处补上 allow-same-origin/allow-scripts。
  (function () {
    const iframeProto = HTMLIFrameElement.prototype;
    const sbDesc = Object.getOwnPropertyDescriptor(iframeProto, 'sandbox');
    if (sbDesc && sbDesc.set) {
      Object.defineProperty(iframeProto, 'sandbox', {
        get: function () { return sbDesc.get.call(this); },
        set: function (v) {
          var tokens = String(v).split(/\s+/).filter(Boolean);
          if (tokens.indexOf('allow-same-origin') < 0) tokens.push('allow-same-origin');
          if (tokens.indexOf('allow-scripts') < 0) tokens.push('allow-scripts');
          sbDesc.set.call(this, tokens.join(' '));
        },
        configurable: true,
      });
    }
  })();
})();
