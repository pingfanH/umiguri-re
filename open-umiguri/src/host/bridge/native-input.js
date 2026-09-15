// 游戏期望的原生输入 / 串口全局 API(宿主层实现/桩)。
import { kbdHeld, kbdUni2Virt, di8KbdHeld } from '../input/keyboard.js';
import { ensureKeyPanel } from '../keypanel/panel.js';

// NOTE: 原始桥中定义但未被引用, 为保持还原度保留。
export const NAV_KEYS = [
  [27, 'Esc'],
  [112, 'F1'],
  [113, 'F2'],
  [114, 'F3'],
  [115, 'F4'],
  [116, 'F5'],
  [13, 'Enter'],
];

export function installNativeInput() {
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
}
