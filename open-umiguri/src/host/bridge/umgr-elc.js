// window.umgr_elc: 游戏 -> 宿主(Tauri)桥。
import { invoke, tryInvoke } from '../core/invoke.js';
import { cachedFile, rangeFile } from '../core/protocol.js';
import { toB64 } from '../core/encoding.js';
import { handshake } from './handshake.js';

const notImplementedStatus = async () => ({ status: -1 });

export const umgrElc = {
  enable: true,
  _: handshake,
  st: {
    zu: (p) => invoke('fs_list', { path: p }),
    sn: (p) => cachedFile(p).then((data) => ({ status: 0, data })).catch(() => ({ status: -1 })),
    _2: (p) =>
      invoke('fs_size', { path: p })
        .then((r) => ({ status: r.status, data: { val: r.data } }))
        .catch(() => ({ status: -1 })),
    xl: (p, offset, size) =>
      rangeFile(p, offset, size)
        .then(({ data }) => ({
          status: 0,
          data: { buf: data, br: data.length },
        }))
        .catch(() => ({ status: -1 })),
    Qf: async () => ({ status: 0, data: { used: 0, free: 1000000000, cap: 1000000000 } }),
    e2: notImplementedStatus,
    yl: notImplementedStatus,
    i2: notImplementedStatus,
    n2: notImplementedStatus,
    o2: notImplementedStatus,
    l2: notImplementedStatus,
    Xu: (p, data) =>
      invoke('fs_write', { path: p, data: toB64(data) })
        .then(() => ({ status: 0, data: { entry: null, writer: null } }))
        .catch(() => ({ status: -1, data: { entry: null, writer: null } })),
  },
  si: {
    Vu: async () => ({}),
    w2: async () => ({}),
    se: async () => ({}),
    sr: async () => ({}),
    S2: async () => ({}),
    fc: async () => ({}),
    sc: async () => false,
    jc: async () => ({}),
    ss: async () => ({}),
    so: async () => ({}),
    xo: async () => {},
    sp: async () => ({}),
    op: async () => ({}),
    t4: async () => ({}),
    r4: async () => {},
    f4: async () => {},
    s4: async () => ({}),
    d4: async () => {},
    a4: async () => {},
    t2: async () => false,
    sa: async () => null,
  },
  g4: {
    x4: async (cb) => {
      console.log('[BRIDGE] g4.x4');
    },
    jc: async (lang, force) => {
      console.log('[BRIDGE] g4.jc', lang, force);
      return [];
    },
    ss: async () => {
      console.log('[BRIDGE] g4.ss');
    },
    so: async () => {
      console.log('[BRIDGE] g4.so');
    },
    xo: async () => {
      console.log('[BRIDGE] g4.xo');
    },
    sp: async (lang) => {
      try {
        localStorage.setItem('umg_lang', lang);
      } catch (e) {}
    },
  },
};

export function installUmgrElc() {
  window.umgr_elc = umgrElc;
}

export { tryInvoke };
