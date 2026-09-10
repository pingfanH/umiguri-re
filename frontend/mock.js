// mock.js - 模拟 umgr_elc IPC 桥(通过 HTTP 访问真实文件系统)
(function () {
  'use strict';

  // 握手配置(来自真实游戏)
  const handshake = {
    O: { ct: 'DEV_MOCK', B: 1650000, p9: 69 },
    I: 0, R: 8090, j: 1, M: 3, L: 0, U: false,
    P: '00 00 00 00 00 00', G: '00 00 00 00 00 00', Y: 0,
    fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY',
    I4: 'ja-JP', am: 0, W: true, H: 1, J: true, K: true,
    Z: { X: false, a1: false, d1: false, t1: false, s1: false },
    u1: '1920x1080',
    v1: false,
    h1: { T: '2025/05/24', rr: '16:51:06', C: '9f4d448', GA: 'Release', Ph: false },
    f1: false,
    g1: [
      { name: 'ja-JP', version: 6, packageName: 'hiiragi.una' },
      { name: 'en-US', version: 6, packageName: 'sakuragi.una' },
      { name: 'exField', version: 6, packageName: 'natsukawa.una' },
    ],
  };

  // HTTP 文件系统访问
  async function fsList(path) {
    try {
      const r = await fetch('/fs/list?path=' + encodeURIComponent(path));
      return await r.json();
    } catch (e) { return { status: -1, data: [] }; }
  }

  async function fsFile(path) {
    try {
      const r = await fetch('/fs/file?path=' + encodeURIComponent(path));
      if (!r.ok) return null;
      const ab = await r.arrayBuffer();
      return new Uint8Array(ab);
    } catch (e) { return null; }
  }

  async function fsSize(path) {
    try {
      const r = await fetch('/fs/size?path=' + encodeURIComponent(path));
      return await r.json();
    } catch (e) { return { status: -1 }; }
  }

  async function fsRead(path, offset, size) {
    try {
      const r = await fetch('/fs/read?path=' + encodeURIComponent(path) + '&offset=' + offset + '&size=' + size);
      if (!r.ok) return null;
      const ab = await r.arrayBuffer();
      return new Uint8Array(ab);
    } catch (e) { return null; }
  }

  // 模拟 umgr_elc
  let callLog = [];
  function logCall(method, ...args) {
    const msg = 'umgr.' + method + '(' + args.map(a => typeof a === 'string' ? a : JSON.stringify(a).slice(0,50)).join(',') + ')';
    callLog.push(msg);
    if (callLog.length > 200) callLog.shift();
    if (method !== 'zu' || callLog.length % 10 === 0) console.log('[umgr]', msg);
  }

  const mock = {
    enable: true,
    _: handshake,
    st: {
      // 列目录
      zu: async (path) => { logCall('zu', path); const r = await fsList(path); return r; },
      // 读整个文件
      sn: async (path) => {
        logCall('sn', path);
        const data = await fsFile(path);
        if (data == null) return { status: -1 };
        return { status: 0, data };
      },
      // 归档 header(文件大小)
      _2: async (path) => { logCall('_2', path); return fsSize(path); },
      // 归档数据(读 offset/size)
      xl: async (path, offset, size) => {
        logCall('xl', path, offset, size);
        const buf = await fsRead(path, offset, size);
        if (buf == null) return { status: -1 };
        return { status: 0, data: { buf, br: buf.length } };
      },
      // 其他方法(磁盘空间等)
      Qf: async () => ({ status: 0, data: { used: 0, free: 1000000000, cap: 1000000000 } }),
      e2: async (p) => ({ status: -1 }),
      yl: async (p, n) => ({ status: -1 }),
      i2: async (p, n) => ({ status: -1 }),
      n2: async (p) => ({ status: -1 }),
      o2: async (p, n, t) => ({ status: -1 }),
      l2: async (p, n, t) => ({ status: -1 }),
      Xu: async (p, n) => ({ status: -1, data: { entry: null, writer: null } }),
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

  window.umgr_elc = mock;
  window.__umgrCallLog = callLog;  // 暴露日志供调试

  // 输入函数(街机硬件)
  window.getCurrentProcessId = () => 0;
  window.kbdStart = () => 0;
  window.kbdUpdate = () => 0;
  window.kbdHeld = () => 0;
  window.kbdUni2Virt = () => 0;
  window.di8KbdStart = () => 0;
  window.di8KbdUpdate = () => 0;
  window.di8KbdHeld = () => 0;
  window.di8KbdShutdown = () => 0;

  console.log('[mock] umgr_elc 已注入(真实文件系统)');
})();
