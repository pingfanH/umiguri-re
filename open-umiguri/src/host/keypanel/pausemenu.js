// 游玩暂停菜单: 游玩中把左侧三个功能键替换为一个暂停按钮; 游玩中 Esc 也直接暂停。
// 点击/按键后暂停游戏并压暗背景; 菜单含 继续 / 重来 / 结算 / Test / Service;
// 重来与结算需二次确认; 继续先走 3 秒倒计时再恢复。
// 遮罩不覆盖虚拟键盘; 键盘下方显示与测试菜单同款的 ↓ ↑ ← → 決定 参考提示(不可点),
// 实际切换按虚拟键盘档位来 —— 与测试菜单 SliderZone 同一套区间:
//   ↓ = 档位 0..5   ↑ = 6..11   ← = 12..17   → = 18..23   決定 = 24..31
// 状态与控制经游戏侧注入的 globalThis.__umgPlay(tools/game-patches.mjs)。
import { setNavMode, setPauseButtonHandler, setNavHidden } from './panel.js';
import { touchPress, touchRelease, releaseAllTouch, addLaneTapHandler } from '../input/lanes.js';
import { addKeyInterceptor } from '../input/keyboard.js';
import { createHintRow, layoutHintRow, showHintRow, laneAction } from './navhint.js';

const DIM = 'rgba(0,0,0,0.55)';
const FONT = 'font-family:system-ui,-apple-system,"Segoe UI",sans-serif;';
const NAV_VKS = [27, 13, 37, 38, 39, 40];

let overlay = null;
let menuBox = null;
let confirmBox = null;
let confirmMsg = null;
let countdownEl = null;
let hintBox = null;
let phase = 'closed';
let countdownTimer = null;
let confirmAction = null;
let menuItems = [];
let confirmItems = [];
let sel = 0;
let testMenuOpen = false;
let reopenAfterTest = false;

function baseBtnStyle(el, primary, big) {
  const w = big ? 'min-width:10em;' : 'min-width:7em;';
  const pad = big ? '0.9em 2.4em;' : '0.75em 2em;';
  el.style.cssText =
    'display:flex;align-items:center;justify-content:center;' + w +
    'padding:' + pad + 'margin:0.3em;border-radius:0.6em;' +
    'color:#fff;' + FONT + 'font-weight:600;font-size:clamp(16px,3.4vmin,30px);line-height:1.2;' +
    'text-align:center;cursor:pointer;touch-action:none;box-sizing:border-box;' +
    'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;' +
    'background:rgba(255,255,255,' + (primary ? '0.22' : '0.1') + ');' +
    'border:1px solid rgba(255,255,255,' + (primary ? '0.6' : '0.35') + ');';
}

function paintBtn(el) {
  if (el.__style !== 'menu') return;
  const primary = !!el.__primary;
  const on = !!el.__sel;
  el.style.background = 'rgba(255,255,255,' + (on ? (primary ? 0.4 : 0.28) : (primary ? 0.22 : 0.1)) + ')';
  el.style.borderColor = 'rgba(255,255,255,' + (on ? 0.9 : (primary ? 0.6 : 0.35)) + ')';
}

function mkBtn(label, primary, onTap) {
  const b = document.createElement('div');
  b.textContent = label;
  b.__primary = !!primary;
  b.__sel = false;
  b.__style = 'menu';
  b.__tap = onTap || null;
  baseBtnStyle(b, primary, false);
  // 用 pointerdown 立即响应(触屏上 click 可能被双击缩放拦截逻辑吞掉)
  b.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (b.__tap) b.__tap();
  });
  return b;
}

function buildOverlay() {
  if (overlay) return;
  overlay = document.createElement('div');
  overlay.id = 'ugv_pausemenu';
  overlay.style.cssText =
    // z-index 低于虚拟键盘(99999), 保证键盘不被遮住、仍可操作
    'position:fixed;inset:0;z-index:50000;display:none;align-items:center;justify-content:center;' +
    'box-sizing:border-box;padding-bottom:38vh;' + // 内容上移, 避开底部虚拟键盘
    'background:' + DIM + ';pointer-events:auto;touch-action:none;' +
    'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;color:#fff;' + FONT;
  overlay.addEventListener('contextmenu', (e) => e.preventDefault());

  menuBox = document.createElement('div');
  menuBox.style.cssText =
    'display:flex;flex-direction:column;align-items:center;' +
    'padding:clamp(20px,4vmin,48px) clamp(24px,5vmin,64px);border-radius:1em;' +
    'background:rgba(18,18,18,0.92);border:1px solid rgba(255,255,255,0.18);box-shadow:0 0 2em rgba(0,0,0,0.6);';
  const title = document.createElement('div');
  title.textContent = '暂停';
  title.style.cssText = FONT + 'font-weight:700;font-size:clamp(20px,4vmin,36px);margin-bottom:0.6em;';
  menuBox.appendChild(title);

  menuItems = [];
  const resumeBtn = mkBtn('继续', true, () => startCountdown());
  const retryBtn = mkBtn('重来', false, () => askConfirm('确定要重来本曲吗?', () => {
    const api = window.__umgPlay;
    if (!api) return;
    api.retry();
    startCountdown();
  }));
  const settleBtn = mkBtn('结算', false, () => askConfirm('确定要立即结算吗?', () => {
    const api = window.__umgPlay;
    if (api) api.settle();
    closeAll();
  }));
  menuBox.appendChild(resumeBtn);
  menuBox.appendChild(retryBtn);
  menuBox.appendChild(settleBtn);
  menuItems.push(resumeBtn, retryBtn, settleBtn);

  const serviceRow = document.createElement('div');
  serviceRow.style.cssText = 'display:flex;flex-direction:row;margin-top:0.6em;';
  const testBtn = mkBtn('Test', false, () => pulseKey(27));
  const serviceBtn = mkBtn('Service', false, () => pulseKey(13));
  serviceRow.appendChild(testBtn);
  serviceRow.appendChild(serviceBtn);
  menuBox.appendChild(serviceRow);
  menuItems.push(testBtn, serviceBtn);
  overlay.appendChild(menuBox);

  confirmBox = document.createElement('div');
  confirmBox.style.cssText =
    'display:none;flex-direction:column;align-items:center;' +
    'padding:clamp(20px,4vmin,40px) clamp(24px,5vmin,56px);border-radius:1em;' +
    'background:rgba(18,18,18,0.94);border:1px solid rgba(255,255,255,0.18);box-shadow:0 0 2em rgba(0,0,0,0.6);';
  confirmMsg = document.createElement('div');
  confirmMsg.style.cssText = FONT + 'font-weight:600;font-size:clamp(16px,3.4vmin,28px);margin-bottom:0.8em;text-align:center;';
  confirmBox.appendChild(confirmMsg);
  const confirmRow = document.createElement('div');
  confirmRow.style.cssText = 'display:flex;flex-direction:row;';
  confirmItems = [];
  const okBtn = mkBtn('确定', true, () => {
    const fn = confirmAction;
    confirmAction = null;
    if (fn) fn();
  });
  const cancelBtn = mkBtn('取消', false, () => askConfirmCancel());
  confirmRow.appendChild(okBtn);
  confirmRow.appendChild(cancelBtn);
  confirmBox.appendChild(confirmRow);
  confirmItems.push(okBtn, cancelBtn);
  overlay.appendChild(confirmBox);

  countdownEl = document.createElement('div');
  countdownEl.style.cssText =
    'display:none;align-items:center;justify-content:center;' + FONT +
    'font-weight:800;font-size:clamp(72px,22vmin,220px);line-height:1;' +
    'text-shadow:0 0 0.3em rgba(0,0,0,0.9);';
  overlay.appendChild(countdownEl);

  // 虚拟键盘下方的按键提示(↓ ↑ ← → 決定, 与更新提示共用同一实现)
  hintBox = createHintRow();
  overlay.appendChild(hintBox);

  document.body.appendChild(overlay);
}

function activeList() {
  return phase === 'confirm' ? confirmItems : menuItems;
}

function renderSel() {
  const list = activeList();
  for (const el of menuItems.concat(confirmItems)) {
    el.__sel = false;
    paintBtn(el);
  }
  const it = list[sel];
  if (it) {
    it.__sel = true;
    paintBtn(it);
  }
}

function moveSel(d) {
  const list = activeList();
  if (!list.length) return;
  sel = (sel + d + list.length) % list.length;
  renderSel();
}

function activateSel() {
  const it = activeList()[sel];
  if (it && it.__tap) it.__tap();
}

function showHint(on) {
  showHintRow(hintBox, on);
}

function pulseKey(vk) {
  touchPress(vk);
  setTimeout(() => touchRelease(vk), 60);
}

// 虚拟键盘档位 -> 菜单操作(与更新提示共用 navhint 的区间映射)
function onLaneTap(lane) {
  if (phase !== 'menu' && phase !== 'confirm') return;
  const a = laneAction(lane);
  if (!a) return;
  if (a === 'ok') activateSel();
  else if (a === 'next') moveSel(1);
  else moveSel(-1);
}

function showMenu() {
  buildOverlay();
  phase = 'menu';
  confirmAction = null;
  sel = 0;
  overlay.style.display = 'flex';
  overlay.style.background = DIM;
  menuBox.style.display = 'flex';
  confirmBox.style.display = 'none';
  countdownEl.style.display = 'none';
  showHint(true);
  renderSel();
}

function askConfirm(msg, onOk) {
  buildOverlay();
  phase = 'confirm';
  confirmAction = onOk;
  sel = 0;
  overlay.style.display = 'flex';
  overlay.style.background = DIM;
  menuBox.style.display = 'none';
  countdownEl.style.display = 'none';
  confirmMsg.textContent = msg;
  confirmBox.style.display = 'flex';
  showHint(true);
  renderSel();
}

function askConfirmCancel() {
  showMenu();
}

function startCountdown() {
  buildOverlay();
  phase = 'countdown';
  confirmAction = null;
  menuBox.style.display = 'none';
  confirmBox.style.display = 'none';
  overlay.style.display = 'flex';
  overlay.style.background = 'transparent';
  countdownEl.style.display = 'flex';
  showHint(false);
  let n = 3;
  countdownEl.textContent = String(n);
  if (countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    n -= 1;
    if (n <= 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      const api = window.__umgPlay;
      if (api) {
        releaseAllTouch(); // 清掉倒计时期间误按的档位
        api.resume();
      }
      closeAll();
    } else {
      countdownEl.textContent = String(n);
    }
  }, 1000);
}

function closeAll() {
  phase = 'closed';
  confirmAction = null;
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  if (overlay) {
    overlay.style.display = 'none';
    overlay.style.background = DIM;
  }
  showHint(false);
}

// 游玩中触发暂停(暂停按钮 / Esc)
function onPausePressed() {
  const api = window.__umgPlay;
  if (!api) return;
  const st = api.state;
  if (!st || st.scene !== 'play' || st.practice) return;
  if (phase !== 'closed') return;
  if (st.playing) {
    api.pause();
    releaseAllTouch();
  }
  showMenu();
}

// 菜单内的方向/确认导航(物理键与底部按键共用)
function navKey(vk) {
  if (phase === 'closed' || phase === 'testmenu') return false;
  if (phase === 'countdown') return NAV_VKS.indexOf(vk) >= 0;
  if (vk === 27) {
    if (phase === 'confirm') showMenu();
    else startCountdown();
    return true;
  }
  if (vk === 13) { activateSel(); return true; }
  if (vk === 38 || vk === 37) { moveSel(-1); return true; }
  if (vk === 40 || vk === 39) { moveSel(1); return true; }
  return false;
}

function interceptKey(vk, e) {
  // 游戏内测试界面打开时: 按键全部交给游戏(含 Esc 关闭测试界面), 宿主不拦截
  if (testMenuOpen) return false;
  // 长按重复: 只吞掉导航键, 不重复触发动作(否则按住 Esc 会开了又立刻继续)
  if (e && e.repeat && NAV_VKS.indexOf(vk) >= 0) {
    if (e.cancelable) e.preventDefault();
    return true;
  }
  const handled = navKey(vk);
  if (handled) {
    if (e && e.cancelable) e.preventDefault();
    return true;
  }
  // 游玩中 Esc -> 暂停(不再交给游戏当 Test 键)
  if (vk === 27) {
    const api = window.__umgPlay;
    const st = api && api.state;
    if (st && st.scene === 'play' && !st.practice) {
      if (e && e.cancelable) e.preventDefault();
      onPausePressed();
      return true;
    }
  }
  return false;
}

// 进入游戏内测试界面: 暂时收起暂停界面(菜单/按键), 解除输入屏蔽, 让测试界面可用。
// 若之前正停在暂停菜单里, 顺带恢复游戏(测试界面里的输入/输出测试需要游戏在跑)。
function enterTestMenu() {
  reopenAfterTest = phase === 'menu' || phase === 'confirm';
  if (countdownTimer) {
    clearInterval(countdownTimer);
    countdownTimer = null;
  }
  if (overlay) overlay.style.display = 'none';
  showHint(false);
  phase = 'testmenu';
  const api = window.__umgPlay;
  if (reopenAfterTest && api) {
    api.resume();
    releaseAllTouch();
  }
  setNavHidden(true);
}

// 退出测试界面: 恢复暂停按钮; 若之前是从暂停菜单进来的, 重新打开暂停菜单。
function leaveTestMenu() {
  setNavHidden(false);
  if (reopenAfterTest) {
    reopenAfterTest = false;
    const api = window.__umgPlay;
    if (api) api.pause();
    releaseAllTouch();
    showMenu();
  } else {
    phase = 'closed';
  }
}

function poll() {
  const api = window.__umgPlay;
  const st = api && api.state;
  const tm = !!(st && st.testMenu);
  if (tm !== testMenuOpen) {
    testMenuOpen = tm;
    if (tm) enterTestMenu();
    else leaveTestMenu();
  }
  if (testMenuOpen) {
    setNavHidden(true);
    return;
  }
  const inPlay = !!(st && st.scene === 'play' && !st.practice);
  setNavMode(inPlay);
  if (!inPlay) {
    if (phase !== 'closed') closeAll();
    return;
  }
  // 游戏侧自行恢复(如物理按键)时收起菜单
  if (st.playing && (phase === 'menu' || phase === 'confirm')) closeAll();
}

export function installPauseMenu() {
  setPauseButtonHandler(onPausePressed);
  addKeyInterceptor(interceptKey);
  addLaneTapHandler(onLaneTap); // 虚拟键盘档位导航
  window.addEventListener('resize', () => { if (hintBox && hintBox.style.display !== 'none') layoutHintRow(hintBox); }, { passive: true });
  setInterval(poll, 200);
  poll();
}
