// tauri-bridge.js - Tauri 前端桥接(umgr_elc + 键盘输入)
(function () {
  'use strict';

  // ============ 移动端: 禁用双指缩放 / 页面滑动拖拽 / 双击缩放 ============
  (function preventViewportGestures() {
    const stop = (e) => { if (e.cancelable) e.preventDefault(); };
    // iOS 手势缩放
    ['gesturestart', 'gesturechange', 'gestureend'].forEach((t) =>
      document.addEventListener(t, stop, { passive: false }));
    // 触摸拖动/多指缩放: 一律阻止浏览器默认(滚动、缩放)行为
    document.addEventListener('touchmove', stop, { passive: false });
    // 双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTouchEnd < 300 && e.touches.length === 0) stop(e);
      lastTouchEnd = now;
    }, { passive: false });
    // 桌面/触控板 Ctrl+滚轮、Ctrl +/- 缩放
    window.addEventListener('wheel', (e) => { if (e.ctrlKey) stop(e); }, { passive: false });
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].includes(e.key)) stop(e);
    });
  })();

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
  // 触摸驱动的按键: 用虚拟按键面板把 touch/click 映射到 VK 码,统一写进 keyState。
  // 物理键盘(keydown)与触摸面板都写 VK 码:
  //   - W=false 时游戏走 kbdHeld(vk) 查询
  //   - W=true 时游戏走 di8KbdHeld(dik),内部对 DIK 反查 VK 再查 keyState
  // 因此两套输入共用 keyState,同时兼容键盘与触摸。

  // 主键布局(音游 16 键: 上排 front 字母, 下排 back 数字/符号):
  //   front(上排16): A B C D E F G H I J K L M N O P
  //   back(下排16):  1 2 3 4 5 6 7 8 9 ; - ' , . / ]
  const MAIN_FRONT = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'];
  const MAIN_BACK =  ['1','2','3','4','5','6','7','8','9',';','-',"'",',','.','/',']'];
  const AIR_KEYS =  ['R','S','T','U','W','Y'];
  const AIR_H = 64; // air 横条高度(间隔),可调

  function charToVk(c) {
    return kbdUni2Virt(c.charCodeAt(0));
  }

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

  // 功能键(导航/系统),放在左上
  const NAV_KEYS = [
    [27, 'Esc'], [112, 'F1'], [113, 'F2'], [114, 'F3'],
    [115, 'F4'], [116, 'F5'], [13, 'Enter'],
  ];

  // 触摸状态独立于物理键盘 keyState: 避免触摸面板干扰/清空键盘按键状态。
  const touchState = new Set();

  // 虚拟按键面板 UI 开关(默认显示)。用快捷键 Cmd/Ctrl+Shift+H 切换显隐,
  // 便于接 chu2board 手台/物理键盘时隐藏触摸面板,只保留真实输入。
  let panelVisible = true;
  function setPanelVisible(v) {
    panelVisible = v;
    if (keyPanel) keyPanel.style.display = v ? '' : 'none';
  }
  function togglePanel() { setPanelVisible(!panelVisible); }

  let keyPanel = null;

  // 快捷键开关触摸面板 UI: Cmd/Ctrl+Shift+H
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.code === 'KeyH' || e.key === 'H' || e.key === 'h')) {
      e.preventDefault();
      togglePanel();
    }
  });

  function mkKey(vk, kind) {
    const b = document.createElement('div');
    b.dataset.vk = vk;
    b.dataset.kind = kind;
    const NOSEL = 'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;';
    if (kind === 'air') {
      // air 横条: 判定线(横线)在判定区中间,更透明
      b.style.cssText =
        'position:relative;width:100%;height:' + AIR_H + 'px;cursor:pointer;box-sizing:border-box;' + NOSEL;
      const bar = document.createElement('div');
      bar.className = 'ugv-bar';
      bar.style.cssText =
        'position:absolute;left:0;right:0;top:50%;height:3px;transform:translateY(-50%);' +
        'background:rgba(128,128,128,0.3);';
      b.appendChild(bar);
    } else if (kind === 'cell') {
      // 按钮单元格(与 panel.html 一致): grid 均分,共享边框
      b.textContent = vkToLabel(vk);
      b.style.cssText =
        'display:flex;align-items:center;justify-content:center;' +
        'border-right:1px solid rgba(128,128,128,0.4);border-bottom:1px solid rgba(128,128,128,0.4);' +
        'color:rgba(255,255,255,0.6);font:bold 14px/1 system-ui;cursor:pointer;touch-action:none;' +
        'box-sizing:border-box;' + NOSEL;
    } else {
      // 功能键: 灰色半透明
      b.textContent = vkToLabel(vk);
      b.style.cssText =
        'min-width:64px;height:176px;display:flex;align-items:center;justify-content:center;' +
        'background:rgba(128,128,128,0.15);border:1px solid rgba(128,128,128,0.4);' +
        'color:rgba(255,255,255,0.6);font:bold 15px/1 system-ui;cursor:pointer;touch-action:none;' +
        'box-sizing:border-box;' + NOSEL;
    }
    return b;
  }

  function touchPress(vk) { touchState.add(vk); }
  function touchRelease(vk) { touchState.delete(vk); }

  // 范围触发: 手指按下为一个原点(圆心),以半径为范围,凡与圆接触的按钮/air 都触发
  const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const TOUCH_RADIUS = IS_MOBILE ? 10 : 25; // 触摸原点半径(px),移动端更小

  // 多指支持: 每个 pointerId 独立记录其命中(圆形范围)的按键, 取并集写入 touchState。
  // 单指滑动切换按键、多指同时按不同键都能正确工作。
  const activePointers = new Map();
  let touchedKeys = new Set();

  function setKeyActive(el, active) {
    if (el.dataset.kind === 'air') {
      const bar = el.querySelector('.ugv-bar');
      if (bar) bar.style.background = active ? 'rgba(255,255,255,0.9)' : 'rgba(128,128,128,0.3)';
    } else {
      el.style.color = active ? '#fff' : 'rgba(255,255,255,0.6)';
      el.style.background = active ? 'rgba(128,128,128,0.25)' : (el.dataset.kind === 'cell' ? '' : 'rgba(128,128,128,0.15)');
    }
  }

  function keysInCircle(x, y) {
    const keys = document.querySelectorAll('[data-vk]');
    const result = [];
    for (const k of keys) {
      const r = k.getBoundingClientRect();
      const cx = Math.max(r.left, Math.min(x, r.right));
      const cy = Math.max(r.top, Math.min(y, r.bottom));
      const dx = x - cx, dy = y - cy;
      if (dx * dx + dy * dy <= TOUCH_RADIUS * TOUCH_RADIUS) {
        result.push(k);
      }
    }
    return result;
  }

  function clearTouch() {
    activePointers.clear();
    recomputeTouch();
  }

  // 合并所有指针命中的按键: 新命中 -> 按下, 不再命中 -> 抬起
  function recomputeTouch() {
    const hit = new Set();
    for (const s of activePointers.values()) for (const k of s) hit.add(k);
    for (const k of touchedKeys) {
      if (!hit.has(k)) { touchRelease(+k.dataset.vk); setKeyActive(k, false); }
    }
    for (const k of hit) {
      if (!touchedKeys.has(k)) { touchPress(+k.dataset.vk); setKeyActive(k, true); }
    }
    touchedKeys = hit;
  }

  function updatePointer(id, x, y) {
    activePointers.set(id, new Set(keysInCircle(x, y)));
    recomputeTouch();
  }

  document.addEventListener('pointerdown', (e) => {
    // 触摸/触控笔: 阻止长按选择、拖拽默认行为; 鼠标不拦截(避免破坏桌面端 click)
    if (e.pointerType !== 'mouse' && e.cancelable) e.preventDefault();
    updatePointer(e.pointerId, e.clientX, e.clientY);
  }, { passive: false });
  document.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'mouse' && !e.buttons) return;
    if (!activePointers.has(e.pointerId)) return;
    updatePointer(e.pointerId, e.clientX, e.clientY);
  }, { passive: false });
  document.addEventListener('pointerup', (e) => {
    activePointers.delete(e.pointerId);
    recomputeTouch();
  });
  document.addEventListener('pointercancel', (e) => {
    activePointers.delete(e.pointerId);
    recomputeTouch();
  });
  window.addEventListener('blur', clearTouch);
  // 长按不弹出选择/上下文菜单
  document.addEventListener('contextmenu', (e) => {
    if (e.target && e.target.closest && e.target.closest('#ugv_keys')) e.preventDefault();
  });

  function ensureKeyPanel() {
    if (keyPanel) keyPanel.remove();
    keyPanel = document.createElement('div');
    keyPanel.id = 'ugv_keys';
    keyPanel.style.cssText =
      'position:absolute;left:0;right:0;top:0;bottom:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;' +
      'pointer-events:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:none;';
    (document.getElementById('main_container') || document.body).appendChild(keyPanel);

    // AIR 区域: 宽度占满游戏窗口(100vw),横条竖排,判定线在中间
    // 始终按配置(AIR_KEYS)渲染全部 air 键,不做运行时过滤,保证与配置一致
    const airBox = document.createElement('div');
    airBox.style.cssText = 'width:100%;display:flex;flex-direction:column;pointer-events:auto;';
    for (const vk of AIR_KEYS.map(charToVk)) airBox.appendChild(mkKey(vk, 'air'));
    keyPanel.appendChild(airBox);

    // 主键区域: 固定 16 列 × 2 行, 位置严格对应配置顺序(MAIN_FRONT / MAIN_BACK),
    // 不按运行时采集结果过滤,避免按键缺失导致整体错位。
    const grid = document.createElement('div');
    grid.style.cssText =
      'margin:16px auto 0;display:grid;grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(2,192px);' +
      'width:66.6667%;background:rgba(128,128,128,0.08);' +
      'border:1px solid rgba(128,128,128,0.4);pointer-events:auto;box-sizing:border-box;';
    MAIN_FRONT.concat(MAIN_BACK).map(charToVk).forEach((vk, i) => {
      const c = mkKey(vk, 'cell');
      if ((i + 1) % 16 === 0) c.style.borderRight = 'none';
      if (i >= 16) c.style.borderBottom = 'none';
      grid.appendChild(c);
    });
    keyPanel.appendChild(grid);

    // 功能键: 左上角
    //   第一行(横向): Esc, Enter
    //   第二行: [FN] 按钮, 点击横向弹出 F1-F5, 再点收回
    const navBox = document.createElement('div');
    navBox.style.cssText =
      'position:absolute;left:8px;top:112px;display:flex;flex-direction:column;gap:6px;pointer-events:auto;';
    function navRow() {
      const r = document.createElement('div');
      r.style.cssText = 'display:flex;flex-direction:row;gap:4px;';
      return r;
    }
    function mkFnBtn(label) {
      const b = document.createElement('div');
      b.textContent = label;
      b.style.cssText =
        'min-width:64px;height:176px;display:flex;align-items:center;justify-content:center;' +
        'background:rgba(128,128,128,0.15);border:1px solid rgba(128,128,128,0.4);' +
        'color:rgba(255,255,255,0.6);font:bold 15px/1 system-ui;cursor:pointer;touch-action:none;' +
        'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;box-sizing:border-box;';
      return b;
    }
    // 第一行: Esc / Enter
    const row1 = navRow();
    for (const vk of [27, 13]) row1.appendChild(mkKey(vk, 'nav'));
    navBox.appendChild(row1);
    // 第二行: FN + 可展开的 F1-F5
    const row2 = navRow();
    const fnBtn = mkFnBtn('FN');
    const fWrap = document.createElement('div');
    fWrap.style.cssText = 'display:none;flex-direction:row;gap:4px;';
    for (const vk of [112, 113, 114, 115, 116]) fWrap.appendChild(mkKey(vk, 'nav'));
    fnBtn.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      fWrap.style.display = (fWrap.style.display === 'none') ? 'flex' : 'none';
    });
    row2.appendChild(fnBtn);
    row2.appendChild(fWrap);
    navBox.appendChild(row2);
    keyPanel.appendChild(navBox);
  }

  // 惰性采集: W=true(街机板模式)下游戏不调用 kbdStart,而是在每帧低频查询 di8KbdHeld。
  // 这里累积游戏实际查询到的 VK 键,去重后一次性构建触摸面板。
  let collectedVks = new Set();
  let collectScheduled = false;
  let panelBuilt = false;
  function collectTouchKey(vk) {
    if (panelBuilt || collectedVks.has(vk)) return;
    collectedVks.add(vk);
    if (!collectScheduled) {
      collectScheduled = true;
      setTimeout(() => {
        collectScheduled = false;
        if (collectedVks.size) {
          ensureKeyPanel();
          panelBuilt = true;
          collectedVks = new Set();
        }
      }, 300);
    }
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
    // 惰性采集游戏查询到的键,在 W=true(街机板模式)下构建触摸面板(kbdStart 不被调用)
    if (vk !== undefined) collectTouchKey(vk);
    return vk !== undefined && (keyState.has(vk) || touchState.has(vk)) ? 1 : 0;
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
  // Uint8Array -> base64(写文件用)
  function u8ToB64(u8) {
    let bin = '';
    const chunk = 0x8000;
    for (let i = 0; i < u8.length; i += chunk) {
      bin += String.fromCharCode.apply(null, u8.subarray(i, i + chunk));
    }
    return btoa(bin);
  }
  // string -> base64(JSON 等文本写文件用)
  function strToB64(s) {
    return btoa(unescape(encodeURIComponent(s)));
  }

  // 整文件缓存: .una 语言包/音频等被反复读,缓存避免重复读取
  const fileCache = new Map();
  // Tauri v2 自定义协议 origin:
  //   macOS/Linux/iOS: <scheme>://localhost
  //   Windows/Android: http://<scheme>.localhost (默认)
  const UMG_ORIGIN = /Windows|Android/i.test(navigator.userAgent)
    ? 'http://umg.localhost'
    : 'umg://localhost';
  function umgUrl(p) {
    return UMG_ORIGIN + encodeURI(p.startsWith('/') ? p : '/' + p);
  }
  async function cachedFile(p) {
    const key = String(p).split('?')[0];
    // 以 / 结尾是目录请求(游戏某些 UI 面板引用了空纹理路径,如 m_Ne.ck("") -> /reverie/),
    // 直接失败,不发 fetch,避免 404 报错,保持与"读不到"一致的 fallback 语义。
    if (key.endsWith('/')) throw new Error('is directory: ' + key);
    if (fileCache.has(key)) return fileCache.get(key);
    const resp = await fetch(umgUrl(key));
    if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + key);
    const data = new Uint8Array(await resp.arrayBuffer());
    fileCache.set(key, data);
    return data;
  }

  // 语言持久化: g4.sp 保存语言到 localStorage,启动时从 localStorage 读回
  function savedLang() {
    try { return localStorage.getItem('umg_lang') || 'ja-JP'; } catch (e) { return 'ja-JP'; }
  }

  const handshake = {
    O: { ct: 'PINGFANH', B: 1650000, p9: 69 },
    I: 0, R: 8090, j: 1, M: 3, L: 0, U: false,
    P: '00 00 00 00 00 00', G: '00 00 00 00 00 00', Y: 0,
    fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY]',
    I4: savedLang(), am: 0, W: true, H: 1, J: true, K: true,
    Z: { X: false, a1: false, d1: false, t1: false, s1: false },
    u1: '1920x1080', v1: false,
    h1: { T: '2025/05/24', rr: '16:51:06', C: '9f4d448', GA: 'Release', Ph: false },
    f1: false,
    g1: [
      { name: 'ja-JP', version: 6, packageName: 'hiiragi.una' },
      { name: 'en-US', version: 6, packageName: 'sakuragi.una' },
      { name: 'exField', version: 6, packageName: 'natsukawa.una' },
      { name: 'zh-CN', version: 6, packageName: 'zh-CN.una' },
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
      Xu: (p, data) => {
        let b64 = '';
        if (data instanceof Uint8Array) b64 = u8ToB64(data);
        else if (typeof data === 'string') b64 = strToB64(data);
        else if (data && data.buffer) b64 = u8ToB64(new Uint8Array(data.buffer, data.byteOffset || 0, data.byteLength || data.buffer.byteLength));
        return invoke('fs_write', { path: p, data: b64 })
          .then(() => ({ status: 0, data: { entry: null, writer: null } }))
          .catch(() => ({ status: -1, data: { entry: null, writer: null } }));
      },
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
      sp: async (lang) => { try { localStorage.setItem('umg_lang', lang); } catch (e) {} },
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

  // [诊断] 报告 WebGL 压缩纹理扩展(iOS 常缺 S3TC/DXT)
  setTimeout(function () {
    try {
      var c = document.createElement('canvas');
      var gl = c.getContext('webgl2') || c.getContext('webgl');
      var exts = gl ? (gl.getSupportedExtensions() || []) : [];
      var comp = exts.filter(function (e) { return /compress|s3tc|dxt|etc|astc|pvrtc|bptc/i.test(e); });
      console.log('[DIAG] GL_COMPRESSED_EXTS ' + comp.join(','));
      console.log('[DIAG] GL_VERSION ' + (gl ? gl.getParameter(gl.VERSION) : 'NO_GL'));
      var e3 = gl && gl.getExtension('WEBGL_compressed_texture_s3tc');
      console.log('[DIAG] S3TC ' + (e3 ? 'YES' : 'NO'));
    } catch (e) { console.log('[DIAG] GL_EXTS_ERR ' + (e && e.message)); }
  }, 1500);

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

  // 拦截 XHR/fetch 的虚拟路径(/xxx)转 umg:// 协议。
  // THREE.js GLTFLoader(FileLoader)用 XHR/fetch 读 /player_scenes/xxx/bg.glb 等 3D 模型,
  // 若不拦截会解析成 tauri://localhost/xxx(无 handler)导致加载失败 -> 相机为空 -> 渲染报错。
  (function () {
    function toUmg(url) {
      if (typeof url === 'string' && url.indexOf('/') === 0 && url.indexOf('//') !== 0) {
        return UMG_ORIGIN + url;
      }
      return url;
    }
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url) {
      return origOpen.apply(this, [method, toUmg(url)].concat([].slice.call(arguments, 2)));
    };
    const origFetch = window.fetch;
    window.fetch = function (url) {
      const rest = [].slice.call(arguments, 1);
      if (typeof url === 'string') url = toUmg(url);
      return origFetch.apply(this, [url].concat(rest));
    };
  })();

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

  // ============ WebKit(iOS) 不支持 S3TC/DXT 压缩纹理 -> 软件解码为 RGBA ============
  // 桌面 WebView 有 WEBGL_compressed_texture_s3tc；iOS 只有 astc/etc。缺 S3TC 时
  // 游戏上传 DXT1/3/5 会失败(iOS 上所有 .dds 贴图都不显示)。这里拦截
  // compressedTexImage2D，把 DXT 解成 RGBA 再用 texImage2D 上传。
  (function () {
    function hasS3TC() {
      try {
        var c = document.createElement('canvas');
        var g = c.getContext('webgl2') || c.getContext('webgl');
        return !!(g && g.getExtension('WEBGL_compressed_texture_s3tc'));
      } catch (e) { return true; }
    }
    if (hasS3TC()) return;

    function decodeBC(data, format, width, height) {
      var out = new Uint8Array(width * height * 4);
      var bw = Math.max(1, (width + 3) >> 2), bh = Math.max(1, (height + 3) >> 2), p = 0;
      function to255(e) { return [(e[0] * 255 / 31) | 0, (e[1] * 255 / 63) | 0, (e[2] * 255 / 31) | 0]; }
      function rgb565(c) { return [(c >> 11) & 0x1F, (c >> 5) & 0x3F, c & 0x1F]; }
      for (var by = 0; by < bh; by++) for (var bx = 0; bx < bw; bx++) {
        var alpha = null, i;
        if (format === 33778) {
          alpha = new Uint8Array(16);
          for (i = 0; i < 16; i++) alpha[i] = (((data[p + (i >> 1)] >> ((i & 1) << 2)) & 0xF) * 17);
          p += 8;
        } else if (format === 33779) {
          var a0 = data[p], a1 = data[p + 1], ab = [a0, a1];
          if (a0 > a1) { for (i = 1; i <= 6; i++) ab.push((((7 - i) * a0 + i * a1) / 7) | 0); }
          else { for (i = 1; i <= 4; i++) ab.push((((5 - i) * a0 + i * a1) / 5) | 0); ab.push(0); ab.push(255); }
          alpha = new Uint8Array(16);
          for (i = 0; i < 16; i++) {
            var bit = i * 3, byte = p + 2 + (bit >> 3), sh = bit & 7;
            var v = (data[byte] | (data[byte + 1] << 8) | (data[byte + 2] << 16) | (data[byte + 3] << 24)) >>> sh;
            alpha[i] = ab[v & 7];
          }
          p += 8;
        }
        var c0 = data[p] | (data[p + 1] << 8), c1 = data[p + 2] | (data[p + 3] << 8);
        p += 4;
        var cols = [to255(rgb565(c0)), to255(rgb565(c1))];
        if (c0 > c1 || format !== 33776) {
          cols.push([((2 * cols[0][0] + cols[1][0]) / 3) | 0, ((2 * cols[0][1] + cols[1][1]) / 3) | 0, ((2 * cols[0][2] + cols[1][2]) / 3) | 0]);
          cols.push([((cols[0][0] + 2 * cols[1][0]) / 3) | 0, ((cols[0][1] + 2 * cols[1][1]) / 3) | 0, ((cols[0][2] + 2 * cols[1][2]) / 3) | 0]);
        } else {
          cols.push([((cols[0][0] + cols[1][0]) / 2) | 0, ((cols[0][1] + cols[1][1]) / 2) | 0, ((cols[0][2] + cols[1][2]) / 2) | 0]);
          cols.push([0, 0, 0]);
        }
        var bits = (data[p] | (data[p + 1] << 8) | (data[p + 2] << 16) | (data[p + 3] << 24)) >>> 0;
        p += 4;
        for (i = 0; i < 16; i++) {
          var cx = (bx << 2) + (i & 3), cy = (by << 2) + (i >> 2);
          if (cx >= width || cy >= height) continue;
          var ci = (bits >> (i << 1)) & 3, col = cols[ci], o = (cy * width + cx) << 2;
          out[o] = col[0]; out[o + 1] = col[1]; out[o + 2] = col[2];
          out[o + 3] = alpha ? alpha[i] : 255;
        }
      }
      return out;
    }

    function wrap(orig) {
      return function (target, level, internalformat, width, height, border, data) {
        if ((internalformat === 33776 || internalformat === 33778 || internalformat === 33779) && data && data.length) {
          try {
            // 压缩纹理不受 UNPACK_FLIP_Y_WEBGL 影响,但 RGBA 上传会。临时关闭避免精灵图翻转/位移。
            var _flip = true, _premul = false, _align = 4;
            try {
              _flip = this.getParameter(this.UNPACK_FLIP_Y_WEBGL);
              _premul = this.getParameter(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
              _align = this.getParameter(this.UNPACK_ALIGNMENT);
              this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, false);
              this.pixelStorei(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
              this.pixelStorei(this.UNPACK_ALIGNMENT, 1);
            } catch (e0) {}
            var rgba = decodeBC(data, internalformat, width, height);
            var rc = this.texImage2D(target, level, this.RGBA, width, height, 0, this.RGBA, this.UNSIGNED_BYTE, rgba);
            try {
              this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, _flip);
              this.pixelStorei(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _premul);
              this.pixelStorei(this.UNPACK_ALIGNMENT, _align);
            } catch (e1) {}
            return rc;
          } catch (e) { try { console.log('[DIAG] DXT_DECODE_ERR ' + (e && e.message)); } catch (e2) {} }
        }
        return orig.apply(this, arguments);
      };
    }
    [window.WebGLRenderingContext, window.WebGL2RenderingContext].forEach(function (C) {
      if (!C) return;
      var P = C.prototype;
      if (P.compressedTexImage2D && !P.__ugvDxt) { P.__ugvDxt = true; P.compressedTexImage2D = wrap(P.compressedTexImage2D); }
    });
    console.log('[DIAG] DXT_SOFTWARE_DECODE enabled');
  })();

})();
