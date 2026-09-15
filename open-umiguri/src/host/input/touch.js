// 触摸/鼠标指针输入: 圆形范围触发 + 功能键长按重复。
import { keysInCircle } from './hit.js';
import { touchPress, touchRelease } from './lanes.js';
import { setKeyActive } from '../keypanel/panel.js';
import { flashCircle } from '../keypanel/editor.js';

// 多指支持: 每个 pointerId 独立记录其命中(圆形范围)的按键, 取并集写入 touchState。
const activePointers = new Map();
let touchedKeys = new Set();

// 功能键长按自动重复: 按住后先等待, 再周期性 pulse(松开->按下),
// 让游戏的「边沿触发」能把长按识别为连续触发, 而不是只当一次点击。
const NAV_REPEAT_DELAY = 450; // ms: 首次重复前等待
const NAV_REPEAT_INTERVAL = 110; // ms: 重复间隔
const NAV_PULSE_RELEASE = 35; // ms: 每次 pulse 的松开时长(≥2 帧, 保证被采样到)
const navTimers = new Map(); // nav 元素 -> { delayTimer, repeatTimer, pulseTimer }
const navHold = new Map(); // nav 元素 -> 持有它的 pointerId 集合

function startNavRepeat(k) {
  stopNavRepeat(k);
  const vk = +k.dataset.vk;
  const t = { delayTimer: null, repeatTimer: null, pulseTimer: null };
  t.delayTimer = setTimeout(() => {
    t.repeatTimer = setInterval(() => {
      if (!navHold.has(k)) return;
      touchRelease(vk);
      setKeyActive(k, false);
      t.pulseTimer = setTimeout(() => {
        if (!navHold.has(k)) return;
        touchPress(vk);
        setKeyActive(k, true);
      }, NAV_PULSE_RELEASE);
    }, NAV_REPEAT_INTERVAL);
  }, NAV_REPEAT_DELAY);
  navTimers.set(k, t);
}

function stopNavRepeat(k) {
  const t = navTimers.get(k);
  if (!t) return;
  clearTimeout(t.delayTimer);
  clearInterval(t.repeatTimer);
  clearTimeout(t.pulseTimer);
  navTimers.delete(k);
}

// 功能键(nav): 按下即锁定, 直到该手指抬起 —— 支持长按, 不受半径/抖动影响
function pressNav(k, id) {
  let set = navHold.get(k);
  if (!set) {
    set = new Set();
    navHold.set(k, set);
    touchPress(+k.dataset.vk);
    setKeyActive(k, true);
    startNavRepeat(k);
  }
  set.add(id);
}

function releaseNavPointer(id) {
  for (const [k, set] of navHold) {
    if (set.delete(id) && set.size === 0) {
      navHold.delete(k);
      stopNavRepeat(k);
      touchRelease(+k.dataset.vk);
      setKeyActive(k, false);
    }
  }
}

function clearTouch() {
  activePointers.clear();
  for (const k of [...navHold.keys()]) {
    navHold.delete(k);
    stopNavRepeat(k);
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

function updatePointer(id, x, y) {
  const s = new Set();
  for (const k of keysInCircle(x, y)) {
    if (k.dataset.kind === 'nav') pressNav(k, id);
    else s.add(k);
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
      updatePointer(e.pointerId, e.clientX, e.clientY);
    },
    { passive: false }
  );
  document.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType === 'mouse' && !e.buttons) return;
      if (!activePointers.has(e.pointerId)) return;
      updatePointer(e.pointerId, e.clientX, e.clientY);
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
