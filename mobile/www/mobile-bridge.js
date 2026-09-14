// mobile-bridge.js - 移动端桥接: 触摸输入 + umgr_elc 文件系统 + 串口 mock
// 移动端无物理键盘/Di8 街机板,用触摸屏驱动 kbdHeld(VK 码)
(function () {
  'use strict';

  // 拦截 alert: WKWebView 在首帧前弹 alert 会导致页面 blank,转为 console.error
  window.addEventListener('error', function (e) { console.error('[UMG]', e.message); });
  window.addEventListener('unhandledrejection', function (e) { console.error('[UMG]', e.reason); });
  window.alert = function (m) { console.error('[UMG ALERT]', m); };

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

  // ============ 触摸驱动的键盘输入 ============
  // 触摸状态: Map<VK码, Set<pointerId>>(多点触控)
  const touchState = new Map();
  const keyDown = new Set();

  // VK 码 -> 显示标签
  function vkToLabel(vk) {
    if (vk >= 65 && vk <= 90) return String.fromCharCode(vk);        // A-Z
    if (vk >= 48 && vk <= 57) return String.fromCharCode(vk);        // 0-9
    const map = {
      37: '←', 39: '→', 38: '↑', 40: '↓',
      13: 'OK', 27: '戻', 32: '␣', 16: 'Shift',
      186: ';', 187: '=', 188: ',', 189: '-', 190: '.', 191: '/',
      192: '`', 219: '[', 220: '\\', 221: ']', 222: "'",
    };
    if (map[vk]) return map[vk];
    if (vk >= 112 && vk <= 123) return 'F' + (vk - 111);             // F1-F12
    return 'K' + vk;
  }

  // VK 码 -> 分类: main(音游字符键) / nav(导航功能键) / hidden(不绘制)
  function vkClassify(vk) {
    if (vk >= 65 && vk <= 90) return 'main';
    if (vk >= 48 && vk <= 57) return 'main';
    if (vk >= 186 && vk <= 192) return 'main';
    if (vk >= 219 && vk <= 222) return 'main';
    if (vk >= 37 && vk <= 40) return 'nav';
    if (vk === 13 || vk === 27 || vk === 32 || vk === 16) return 'nav';
    return 'hidden'; // F1-F12 等调试键
  }

  // kbdStart(keys): 记录按键并绘制虚拟按键面板
  function kbdStart(keys) {
    const vks = Array.from(new Set(Array.isArray(keys) ? keys : []));
    buildKeyPanel(vks);
    return 1;
  }
  function kbdUpdate() { return 1; }
  function kbdHeld(vk) { return keyDown.has(vk) ? 1 : 0; }

  // kbdUni2Virt(charCode): 字符码 -> VK 码(与桌面端一致)
  const CHAR_TO_VK = {
    59: 186, 61: 187, 44: 188, 45: 189, 46: 190, 47: 191, 96: 192,
    91: 219, 92: 220, 93: 221, 39: 222,
  };
  function kbdUni2Virt(charCode) {
    if (charCode >= 48 && charCode <= 57) return charCode;
    if (charCode >= 65 && charCode <= 90) return charCode;
    if (charCode >= 97 && charCode <= 122) return charCode - 32;
    if (CHAR_TO_VK[charCode] !== undefined) return CHAR_TO_VK[charCode];
    return charCode;
  }

  // Di8 街机输入板: 移动端不存在,全部返回 0
  function di8KbdStart() { return 0; }
  function di8KbdUpdate() { return 0; }
  function di8KbdHeld() { return 0; }
  function di8KbdShutdown() { return 0; }

  // ============ 虚拟按键面板(触摸) ============
  let panel = null;
  function buildKeyPanel(vks) {
    if (panel) panel.remove();
    panel = document.createElement('div');
    panel.id = 'ugv_keys';
    panel.style.cssText =
      'position:absolute;top:auto;left:0;right:0;bottom:0;z-index:99999;display:flex;flex-wrap:wrap;' +
      'justify-content:center;align-items:flex-end;gap:4px;padding:6px;' +
      'background:rgba(0,0,0,0.35);pointer-events:none;user-select:none;' +
      '-webkit-user-select:none;touch-action:none;';
    (document.getElementById('main_container') || document.body).appendChild(panel);

    // 分组: nav 放第一行,main 放第二行
    const navs = vks.filter(v => vkClassify(v) === 'nav');
    const mains = vks.filter(v => vkClassify(v) === 'main');

    const navRow = mkRow(navs, 'nav');
    const mainRow = mkRow(mains, 'main');
    if (navRow) panel.appendChild(navRow);
    if (mainRow) panel.appendChild(mainRow);
  }

  function mkRow(vks, kind) {
    if (!vks.length) return null;
    const row = document.createElement('div');
    row.style.cssText =
      'display:flex;gap:4px;justify-content:center;width:100%;flex-wrap:wrap;pointer-events:auto;';
    const btnCount = vks.length;
    for (let i = 0; i < btnCount; i++) {
      const vk = vks[i];
      const b = document.createElement('div');
      const isMain = kind === 'main';
      b.textContent = vkToLabel(vk);
      b.dataset.vk = vk;
      b.style.cssText =
        (isMain
          ? 'min-width:44px;height:56px;'
          : 'min-width:48px;height:44px;') +
        'flex:1 1 auto;max-width:70px;display:flex;align-items:center;justify-content:center;' +
        'background:rgba(255,255,255,0.12);border:1px solid rgba(255,255,255,0.35);' +
        'border-radius:8px;color:#fff;font:bold 16px/1 system-ui;cursor:pointer;' +
        'touch-action:none;';
      bindTouch(b, vk);
      row.appendChild(b);
    }
    return row;
  }

  function bindTouch(el, vk) {
    const press = (e) => {
      e.preventDefault();
      keyDown.add(vk);
      el.style.background = 'rgba(255,220,80,0.55)';
      el.style.borderColor = '#ffd';
      try { el.setPointerCapture && el.setPointerCapture(e.pointerId); } catch (err) {}
    };
    const release = (e) => {
      keyDown.delete(vk);
      el.style.background = 'rgba(255,255,255,0.12)';
      el.style.borderColor = 'rgba(255,255,255,0.35)';
    };
    el.addEventListener('pointerdown', press);
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);
    el.addEventListener('pointerleave', release);
  }

  // ============ umgr_elc(文件系统 + 握手) ============
  // 语言持久化
  function savedLang() {
    try { return localStorage.getItem('umg_lang') || 'ja-JP'; } catch (e) { return 'ja-JP'; }
  }

  // 移动端: 资源打包进 www/assets/,用 fetch 读;握手 W=false(键盘模式)
  const handshake = {
    O: { ct: 'DEV_MOCK', B: 1650000, p9: 69 },
    I: 0, R: 8090, j: 1, M: 3, L: 0, U: false,
    P: '00 00 00 00 00 00', G: '00 00 00 00 00 00', Y: 0,
    fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY',
    I4: savedLang(), am: 0, W: false, H: 1, J: true, K: true,
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

  // 虚拟路径 -> 打包资源路径(www/assets 下)
  const PATH_MAP = [
    ['/reverie/', 'assets/core/una/hiiragi.una/'],
    ['/reverie_exField/', 'assets/core/una/natsukawa.una/'],
    ['/reverie_en-US/', 'assets/core/una/sakuragi.una/'],
    ['/reverie_zh-CN/', 'assets/core/una/zh-CN.una/'],
    ['/una/', 'assets/core/una/'],
    ['/chara/', 'assets/data/characters/'],
    ['/music/', 'assets/data/music/'],
    ['/voices/', 'assets/data/voices/'],
    ['/skills/', 'assets/data/skills/'],
    ['/courses/', 'assets/data/courses/'],
    ['/player_scenes/', 'assets/data/player_scenes/'],
    ['/nameplates/', 'assets/data/nameplates/'],
    ['/titles/', 'assets/data/titles/'],
    ['/textures/', 'assets/core/textures/'],
    ['/sounds/', 'assets/core/sounds/'],
    ['/config/', 'assets/core/config/'],
    ['/extra/', 'assets/core/extra/'],
    ['/terms/', 'assets/terms/'],
    ['/caches/', 'assets/caches/'],
  ];
  function virtualToAsset(vpath) {
    // .rsb 内纹理引用使用 Windows 反斜杠,归一化
    const p = String(vpath).replace(/\\/g, '/');
    for (const [v, r] of PATH_MAP) {
      if (p.startsWith(v)) return r + p.slice(v.length).replace(/^\//, '');
    }
    return 'assets' + (p.startsWith('/') ? p : '/' + p);
  }

  async function fsFetch(path) {
    let url = virtualToAsset(path);
    // Capacitor iOS scheme handler 特殊行为:
    //  - 有扩展名但文件不存在 -> didFailWithError -> fetch reject("Load failed"),不是 404
    //  - 无扩展名路径 -> SPA fallback 返回 index.html(假成功)
    //  - 媒体文件(.wav/.mp3) -> 返回 URLResponse(非 HTTP),resp.ok=false 但数据已传输
    // 因此: 优先尝试变体路径(双扩展名/.txt),且不检查 resp.ok,直接读 arrayBuffer。
    let candidates = [];
    if (!path.includes('?')) {
      if (/\.[^.]+$/.test(url)) {
        candidates.push(url + url.slice(url.lastIndexOf('.')));
        candidates.push(url);
      } else {
        candidates.push(url + '.txt');
        candidates.push(url);
      }
    } else {
      candidates.push(url);
    }
    for (const c of candidates) {
      try {
        const resp = await fetch(c);
        return new Uint8Array(await resp.arrayBuffer());
      } catch (e) { /* reject(Load failed) -> 尝试下一个 */ }
    }
    throw new Error('all fetch failed: ' + path);
  }

  // 目录清单(manifest.json): WebView 无法 readdir 打包资源,用构建时生成的清单实现 zu
  let manifestCache = null;
  async function loadManifest() {
    if (manifestCache) return manifestCache;
    try {
      const resp = await fetch('assets/manifest.json');
      manifestCache = JSON.parse(await resp.text());
    } catch (e) {
      manifestCache = {};
    }
    return manifestCache;
  }

  window.umgr_elc = {
    enable: true,
    _: handshake,
    st: {
      zu: async (p) => {
        const m = await loadManifest();
        const key = String(p).endsWith('/') ? p : p + '/';
        return { status: 0, data: m[key] || [] };
      },
      sn: async (p) => {
        try { return { status: 0, data: await fsFetch(p) }; }
        catch (e) { return { status: -1 }; }
      },
      _2: async (p) => {
        try { const d = await fsFetch(p); return { status: 0, data: { val: d.length } }; }
        catch (e) { return { status: -1 }; }
      },
      xl: async (p, offset, size) => {
        try {
          const d = await fsFetch(p);
          const buf = d.slice(offset, offset + size);
          return { status: 0, data: { buf, br: buf.length } };
        } catch (e) { return { status: -1 }; }
      },
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
      so: async () => ({}), xo: async () => {}, sp: async (lang) => { try { localStorage.setItem('umg_lang', lang); } catch (e) {} },
    },
  };

  // ============ 全局键盘/串口函数 ============
  window.getCurrentProcessId = () => 0;
  window.kbdStart = kbdStart;
  window.kbdUpdate = kbdUpdate;
  window.kbdHeld = kbdHeld;
  window.kbdUni2Virt = kbdUni2Virt;
  window.di8KbdStart = di8KbdStart;
  window.di8KbdUpdate = di8KbdUpdate;
  window.di8KbdHeld = di8KbdHeld;
  window.di8KbdShutdown = di8KbdShutdown;
  // 串口 mock(无街机硬件)
  window.ugSerialCreate = () => 1;
  window.ugSerialOpen = () => false;
  window.ugSerialWrite = () => false;
  window.ugSerialPop = () => null;
  window.ugSerialClose = () => {};
  window.ugSerialDestroy = () => {};

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
