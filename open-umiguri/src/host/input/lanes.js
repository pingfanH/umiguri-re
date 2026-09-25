// 直接档位映射: 面板按键 -> 游戏档位序号, 绕过 VK/DIK 间接层。
// 档位序号 = 握手 fe 串里的字符位置(游戏 I1 模块的 s[t])。
// 游戏侧在输入刷新时读取 window.__umgLanes[t], 因此面板按下即等同于该档位按下。
import { kbdUni2Virt } from './vk.js';

// 档位映射以握手 fe 为准(可与配置 keymap.current 不同), 顺序 = 游戏档位序号
export const DEFAULT_FE_KEYMAP = 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY';
export const VK_LANE = new Map();
export function rebuildLaneMap(fe) {
  const s = typeof fe === 'string' && fe.length === 38 ? fe : DEFAULT_FE_KEYMAP;
  VK_LANE.clear();
  s.split('').forEach((c, i) => VK_LANE.set(kbdUni2Virt(c.charCodeAt(0)), i));
}
rebuildLaneMap(DEFAULT_FE_KEYMAP);

window.__umgLanes = new Uint8Array(40);

// 触摸状态独立于物理键盘 keyState: 避免触摸面板干扰/清空键盘按键状态。
export const touchState = new Set();

export function laneForVk(vk) {
  return VK_LANE.get(vk);
}

// 虚拟键盘档位按下的回调(边沿): 供暂停菜单/更新提示等按档位导航
// (与游戏测试菜单的 SliderZone 同一套档位区间)。支持多个订阅者。
const laneTapHandlers = [];
export function addLaneTapHandler(fn) {
  if (typeof fn === 'function' && laneTapHandlers.indexOf(fn) < 0) laneTapHandlers.push(fn);
}
export function setLaneTapHandler(fn) {
  laneTapHandlers.length = 0;
  if (typeof fn === 'function') laneTapHandlers.push(fn);
}

const lanePressAt = new Map();

// 输入抑制: 当更新提示等宿主弹窗打开时, 档位/触摸只交给宿主订阅者(导航),
// 不再写入 __umgLanes / touchState —— 游戏完全收不到输入。
let inputSuppressed = false;
export function setInputSuppressed(on) {
  inputSuppressed = !!on;
}
export function isInputSuppressed() {
  return inputSuppressed;
}

export function touchPress(vk) {
  const isNew = !touchState.has(vk);
  const lane = VK_LANE.get(vk);
  if (inputSuppressed) {
    // 抑制期只把档位按下交给导航订阅者, 不产生任何游戏输入
    if (lane !== undefined && isNew && laneTapHandlers.length) {
      for (const h of laneTapHandlers) {
        try { h(lane); } catch (e) {}
      }
    }
    return;
  }
  touchState.add(vk);
  if (lane !== undefined) {
    if (isNew && !lanePressAt.has(vk)) lanePressAt.set(vk, performance.now());
    window.__umgLanes[lane] = 1;
    if (isNew && laneTapHandlers.length) {
      for (const h of laneTapHandlers) {
        try { h(lane); } catch (e) {}
      }
    }
  }
}

export function touchRelease(vk) {
  if (inputSuppressed) return;
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

// 释放所有触摸档位(进暂停菜单等场景): 清 touchState 并复位 __umgLanes,
// 避免玩家按住档位时点暂停导致该档位卡住。
export function releaseAllTouch() {
  for (const vk of [...touchState]) {
    const lane = VK_LANE.get(vk);
    if (lane !== undefined) window.__umgLanes[lane] = 0;
  }
  touchState.clear();
  lanePressAt.clear();
}
