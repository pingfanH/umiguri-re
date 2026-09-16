// 键盘输入: 物理键盘 -> VK 码, 以及 DirectInput(DIK) 查询接口。
import { codeToVk, kbdUni2Virt, charToVk } from './vk.js';
import { touchState } from './lanes.js';

export { codeToVk, kbdUni2Virt, charToVk };

// 物理键盘按下的 VK 集合(含 'down:<vk>' 一次性边沿标记)
export const keyState = new Set();

export function installKeyboardListeners() {
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
}

export function kbdHeld(vk) {
  return keyState.has(vk) || touchState.has(vk) ? 1 : 0;
}

// DirectInput(DIK) 键码 -> Windows VK 码(游戏使用 DIK 键码)
// 注意: 方向键是 DIK_UP=200/LEFT=203/RIGHT=205/DOWN=208,不是 evdev 的 103/105/106/108
export const DIK_TO_VK = {
  1: 27, // Escape
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

// 惰性采集回调: W=true(街机板模式)下游戏不调用 kbdStart,
// 而是每帧低频查询 di8KbdHeld; 这里把游戏查询到的 VK 上报给面板构建逻辑。
let touchKeyCollector = null;
export function setTouchKeyCollector(fn) {
  touchKeyCollector = fn;
}

// 临时诊断: DIK 查询计数
const dikStat = { calls: 0, ret1: 0, escQ: 0, esc1: 0 };
let dikReporterOn = false;
function dikReporter() {
  if (dikReporterOn) return;
  dikReporterOn = true;
  setInterval(() => {
    if (!dikStat.calls) return;
    try {
      console.error('[umg][dik] calls=' + dikStat.calls + ' ret1=' + dikStat.ret1 + ' escQ=' + dikStat.escQ + ' esc1=' + dikStat.esc1);
    } catch (e) {}
    dikStat.calls = 0; dikStat.ret1 = 0; dikStat.escQ = 0; dikStat.esc1 = 0;
  }, 2000);
}
export function di8KbdHeld(dik) {
  const vk = DIK_TO_VK[dik];
  if (vk !== undefined && touchKeyCollector) touchKeyCollector(vk);
  const on = vk !== undefined && (keyState.has(vk) || touchState.has(vk)) ? 1 : 0;
  dikStat.calls++;
  if (on) dikStat.ret1++;
  if (vk === 27) { dikStat.escQ++; if (on) dikStat.esc1++; }
  dikReporter();
  return on;
}
