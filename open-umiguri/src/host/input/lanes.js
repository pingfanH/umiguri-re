// 直接档位映射: 面板按键 -> 游戏档位序号, 绕过 VK/DIK 间接层。
// 档位序号 = 握手 fe 串里的字符位置(游戏 I1 模块的 s[t])。
// 游戏侧在输入刷新时读取 window.__umgLanes[t], 因此面板按下即等同于该档位按下。
import { kbdUni2Virt } from './vk.js';

export const FE_KEYMAP = 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY';

export const VK_LANE = new Map();
FE_KEYMAP.split('').forEach((c, i) => VK_LANE.set(kbdUni2Virt(c.charCodeAt(0)), i));

window.__umgLanes = new Uint8Array(40);

// 触摸状态独立于物理键盘 keyState: 避免触摸面板干扰/清空键盘按键状态。
export const touchState = new Set();

export function laneForVk(vk) {
  return VK_LANE.get(vk);
}

const lanePressAt = new Map();
export function touchPress(vk) {
  touchState.add(vk);
  const lane = VK_LANE.get(vk);
  if (lane !== undefined && !lanePressAt.has(vk)) lanePressAt.set(vk, performance.now());
  if (lane !== undefined) window.__umgLanes[lane] = 1;
}

export function touchRelease(vk) {
  const lane = VK_LANE.get(vk);
  if (lane !== undefined) {
    const t0 = lanePressAt.get(vk);
    if (t0 !== undefined) {
      lanePressAt.delete(vk);
      try { console.error('[umg][lane] vk=' + vk + ' lane=' + lane + ' held=' + Math.round(performance.now() - t0) + 'ms'); } catch (e) {}
    }
  }
  touchState.delete(vk);
  if (lane !== undefined) window.__umgLanes[lane] = 0;
}

export function clearTouchState() {
  touchState.clear();
}
