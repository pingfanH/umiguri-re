// 触摸/鼠标指针输入: 圆形范围触发 + 功能键(电平保持)。
import { keysInCircle } from './hit.js';
import { touchPress, touchRelease } from './lanes.js';
import { setKeyActive } from '../keypanel/panel.js';
import { flashCircle } from '../keypanel/editor.js';

// 多指支持: 每个 pointerId 独立记录其命中(圆形范围)的按键, 取并集写入 touchState。
const activePointers = new Map();
let touchedKeys = new Set();

const navHold = new Map(); // nav 元素 -> 持有它的 pointerId 集合

// 功能键(nav): 电平保持 —— 按下期间持续为按下, 抬起才释放(不做 pulse)。
// 这样「Esc+Enter 同时按」等组合可靠, 且不会连续制造边沿刷乱菜单。
function pressNav(k, id) {
  let set = navHold.get(k);
  if (!set) {
    set = new Set();
    navHold.set(k, set);
    touchPress(+k.dataset.vk);
    setKeyActive(k, true);
  }
  set.add(id);
}

function releaseNavPointer(id) {
  for (const [k, set] of navHold) {
    if (set.delete(id) && set.size === 0) {
      navHold.delete(k);
      touchRelease(+k.dataset.vk);
      setKeyActive(k, false);
    }
  }
}

function clearTouch() {
  activePointers.clear();
  for (const k of [...navHold.keys()]) {
    navHold.delete(k);
    touchRelease(+k.dataset.vk);
    setKeyActive(k, false);
  }
  recomputeTouch();
}

// 合并所有指针命中的按键: 新命中 -> 按下, 不再命中 -> 抬起
function recomputeTouch() {
  const hit = new Set();
  for (const s of activePointers.values()) for (const k of s) hit.add(k);
  for (const k of touchedKeys) {
    if (!hit.has(k)) {
      touchRelease(+k.dataset.vk);
      setKeyActive(k, false);
    }
  }
  for (const k of hit) {
    if (!touchedKeys.has(k)) {
      touchPress(+k.dataset.vk);
      setKeyActive(k, true);
    }
  }
  touchedKeys = hit;
}

// isDown=true 仅用于「按下瞬间」: 功能键只在此刻触发(不支持划入触发)
function updatePointer(id, x, y, isDown) {
  const s = new Set();
  for (const k of keysInCircle(x, y)) {
    if (k.dataset.kind === 'nav') {
      if (isDown) pressNav(k, id);
    } else s.add(k);
  }
  activePointers.set(id, s);
  recomputeTouch();
}

export function installPointerHandlers() {
  document.addEventListener(
    'pointerdown',
    (e) => {
      // 触摸/触控笔: 阻止长按选择、拖拽默认行为; 鼠标不拦截(避免破坏桌面端 click)
      if (e.pointerType !== 'mouse' && e.cancelable) e.preventDefault();
      flashCircle(e.clientX, e.clientY); // 编辑器开启「实际触发可视化」时闪现圆
      updatePointer(e.pointerId, e.clientX, e.clientY, true);
    },
    { passive: false }
  );
  document.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'mouse' && !e.buttons) return;
      if (!activePointers.has(e.pointerId)) return;
      updatePointer(e.pointerId, e.clientX, e.clientY, false);
    },
    { passive: false }
  );
  document.addEventListener('pointerup', (e) => {
    releaseNavPointer(e.pointerId);
    activePointers.delete(e.pointerId);
    recomputeTouch();
  });
  document.addEventListener('pointercancel', (e) => {
    releaseNavPointer(e.pointerId);
    activePointers.delete(e.pointerId);
    recomputeTouch();
  });
  window.addEventListener('blur', clearTouch);
  // 长按不弹出选择/上下文菜单
  document.addEventListener('contextmenu', (e) => {
    if (e.target && e.target.closest && e.target.closest('#ugv_keys')) e.preventDefault();
  });
}
