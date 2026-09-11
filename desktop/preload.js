// preload.js - contextBridge 注入 umgr_elc(通过 ipcRenderer 调用主进程)
const { contextBridge, ipcRenderer } = require('electron');

// 握手配置(直接内联,避免序列化问题)
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

const umgr_elc = {
  enable: true,
  _: handshake,
  st: {
    zu: (p) => { const r = ipcRenderer.invoke('fs:list', p); r.then(res => { if (p.includes('extra') || p.includes('voices') || p.includes('nameplates')) console.log('[preload.zu]', p, '=>', JSON.stringify(res).slice(0,80)); }); return r; },
    sn: (p) => ipcRenderer.invoke('fs:file', p),
    _2: (p) => ipcRenderer.invoke('fs:size', p),
    xl: (p, offset, size) => ipcRenderer.invoke('fs:read', p, offset, size),
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

contextBridge.exposeInMainWorld('umgr_elc', umgr_elc);

// 键盘输入: 用 e.code(跨平台)映射到 Windows VK 码
const keyState = new Set();

// e.code -> Windows VK 码(跨平台,Linux/mac/Windows 一致)
function codeToVk(code) {
  if (!code) return 0;
  // KeyA-KeyZ -> 65-90
  if (code.startsWith('Key') && code.length === 4) return code.charCodeAt(3);
  // Digit0-Digit9 -> 48-57
  if (code.startsWith('Digit') && code.length === 6) return code.charCodeAt(5);
  // Numpad0-Numpad9
  if (code.startsWith('Numpad') && /^Numpad\d$/.test(code)) return 96 + parseInt(code.slice(6), 10);
  const map = {
    'ArrowLeft': 37, 'ArrowRight': 39, 'ArrowUp': 38, 'ArrowDown': 40,
    'Enter': 13, 'Escape': 27, 'Space': 32, 'Backspace': 8, 'Tab': 9,
    'ShiftLeft': 16, 'ShiftRight': 16, 'ControlLeft': 17, 'ControlRight': 17, 'AltLeft': 18, 'AltRight': 18,
    'F1': 112, 'F2': 113, 'F3': 114, 'F4': 115, 'F5': 116,
    'F6': 117, 'F7': 118, 'F8': 119, 'F9': 120, 'F10': 121, 'F11': 122, 'F12': 123,
    'Comma': 188, 'Period': 190, 'Semicolon': 186, 'Quote': 222, 'Slash': 191, 'Backslash': 220,
    'BracketLeft': 219, 'BracketRight': 221, 'Minus': 189, 'Equal': 187, 'Backquote': 192,
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

// kbdHeld(vk): 虚拟键码 vk(Windows VK 码)是否按住
function kbdHeld(vk) {
  return keyState.has(vk) ? 1 : 0;
}
// kbdUni2Virt(charCode): 字符码转 VK 码(游戏键盘映射,含符号键)
const CHAR_TO_VK = {
  59: 186, // ;  VK_OEM_1
  61: 187, // =  VK_OEM_PLUS
  44: 188, // ,  VK_OEM_COMMA
  45: 189, // -  VK_OEM_MINUS
  46: 190, // .  VK_OEM_PERIOD
  47: 191, // /  VK_OEM_2
  96: 192, // `  VK_OEM_3
  91: 219, // [  VK_OEM_4
  92: 220, // \\ VK_OEM_5
  93: 221, // ]  VK_OEM_6
  39: 222, // '  VK_OEM_7
};
function kbdUni2Virt(charCode) {
  if (charCode >= 48 && charCode <= 57) return charCode;       // 数字 0-9
  if (charCode >= 65 && charCode <= 90) return charCode;       // 大写 A-Z
  if (charCode >= 97 && charCode <= 122) return charCode - 32; // 小写转大写
  if (CHAR_TO_VK[charCode] !== undefined) return CHAR_TO_VK[charCode]; // 符号键
  return charCode;
}
function kbdStart(keys) { return 1; }
function kbdUpdate() { return 1; }

// evdev 键码 -> Windows VK 码 映射(Linux evdev 标准)
const EVDEV_TO_VK = {
  1: 27,   // ESC
  28: 13,  // ENTER
  57: 32,  // SPACE
  103: 38, // UP
  105: 37, // LEFT
  106: 39, // RIGHT
  108: 40, // DOWN
  2: 49, 3: 50, 4: 51, 5: 52, 6: 53, 7: 54, 8: 55, 9: 56, 10: 57, 11: 48, // 1-9,0
  16: 81, 17: 87, 18: 69, 19: 82, 20: 84, 21: 89, 22: 85, 23: 73, 24: 79, 25: 80, // QWERTYUIOP
  30: 65, 31: 83, 32: 68, 33: 70, 34: 71, 35: 72, 36: 74, 37: 75, 38: 76, // ASDFGHJKL
  44: 90, 45: 88, 46: 67, 47: 86, 48: 66, 49: 78, 50: 77, // ZXCVBNM
  59: 112, 60: 113, 61: 114, 62: 115, 63: 116, 64: 117, 65: 118, 66: 119, 67: 120, 68: 121, // F1-F10
  51: 188, // 逗号 ,
  52: 190, // 句点 .
  39: 186, // 分号 ;
  53: 191, // 斜杠 /
  12: 189, // 减号 -
  13: 187, // 等号 =
  41: 192, // 反引号 `
  26: 219, // 左方括号 [
  43: 220, // 反斜杠 \
  27: 221, // 右方括号 ]
  40: 222, // 单引号 '
};
// di8KbdHeld(evdev 键码): 映射到 VK 码检查
function di8KbdHeld(evdevKey) {
  const vk = EVDEV_TO_VK[evdevKey];
  return vk !== undefined && keyState.has(vk) ? 1 : 0;
}

contextBridge.exposeInMainWorld('getCurrentProcessId', () => 0);
contextBridge.exposeInMainWorld('kbdStart', kbdStart);
contextBridge.exposeInMainWorld('kbdUpdate', kbdUpdate);
contextBridge.exposeInMainWorld('kbdHeld', kbdHeld);
contextBridge.exposeInMainWorld('kbdUni2Virt', kbdUni2Virt);
// Di8 输入板: 返回 0(不存在),让前端走键盘分支
contextBridge.exposeInMainWorld('di8KbdStart', () => 0);
contextBridge.exposeInMainWorld('di8KbdUpdate', () => 0);
contextBridge.exposeInMainWorld('di8KbdHeld', di8KbdHeld);
contextBridge.exposeInMainWorld('di8KbdShutdown', () => 0);

// 串口 native 函数 mock(libugdev.dll),无真实串口时全部返回失败/空
contextBridge.exposeInMainWorld('ugSerialCreate', () => 1);          // 返回句柄
contextBridge.exposeInMainWorld('ugSerialOpen', () => false);        // 打开失败
contextBridge.exposeInMainWorld('ugSerialWrite', () => false);       // 写失败
contextBridge.exposeInMainWorld('ugSerialPop', () => null);          // 无数据
contextBridge.exposeInMainWorld('ugSerialClose', () => {});          // 关闭
contextBridge.exposeInMainWorld('ugSerialDestroy', () => {});        // 销毁
