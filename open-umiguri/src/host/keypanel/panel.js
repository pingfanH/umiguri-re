// 虚拟按键面板: DOM 构建与显隐。
import { panelCfg, MAIN_FRONT, MAIN_BACK, AIR_KEYS } from './config.js';
import { charToVk } from '../input/vk.js';
import { touchPress, touchRelease } from '../input/lanes.js';
import { setTouchKeyCollector } from '../input/keyboard.js';

let keyPanel = null;
let panelVisible = true;
let rebuiltHook = null;

export function setPanelRebuildHook(fn) {
  rebuiltHook = fn;
}

export function panelElement() {
  return keyPanel;
}

export function isPanelBuilt() {
  return !!keyPanel;
}

export function setPanelVisible(v) {
  panelVisible = v;
  if (keyPanel) keyPanel.style.display = v ? '' : 'none';
}

export function togglePanel() {
  setPanelVisible(!panelVisible);
}

export function vkToLabel(vk) {
  if (vk >= 65 && vk <= 90) return String.fromCharCode(vk);
  if (vk >= 48 && vk <= 57) return String.fromCharCode(vk);
  const map = {
    37: '←', 39: '→', 38: '↑', 40: '↓',
    13: 'OK', 27: '戻', 32: '␣', 16: 'Shift',
    186: ';', 187: '=', 188: ',', 189: '-', 190: '.', 191: '/',
    192: '`', 219: '[', 220: '\\', 221: ']', 222: "'",
  };
  if (map[vk]) return map[vk];
  if (vk >= 112 && vk <= 123) return 'F' + (vk - 111);
  return 'K' + vk;
}

// 导航键显示名(戻/OK 按用户习惯显示为 Test/Service)
export function navLabel(vk) {
  if (vk === 27) return 'Test';
  if (vk === 13) return 'Service';
  return vkToLabel(vk);
}

function mkKey(vk, kind) {
  const b = document.createElement('div');
  b.dataset.vk = vk;
  b.dataset.kind = kind;
  const NOSEL =
    'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-user-drag:none;';
  const st = panelCfg;
  if (kind === 'air') {
    // air 横条: 判定线(横线)在判定区中间,更透明
    b.style.cssText =
      'position:relative;width:100%;height:' + st.airH + 'px;cursor:pointer;box-sizing:border-box;' + NOSEL;
    const bar = document.createElement('div');
    bar.className = 'ugv-bar';
    bar.style.cssText =
      'position:absolute;left:0;right:0;top:50%;height:3px;transform:translateY(-50%);' +
      'background:rgba(128,128,128,0.3);';
    b.appendChild(bar);
  } else if (kind === 'cell') {
    // 按钮单元格(与 panel.html 一致): grid 均分,共享边框
    b.textContent = vkToLabel(vk);
    b.style.cssText =
      'display:flex;align-items:center;justify-content:center;' +
      'border-right:1px solid rgba(128,128,128,0.4);border-bottom:1px solid rgba(128,128,128,0.4);' +
      'color:rgba(255,255,255,' + st.label + ');font:bold 14px/1 system-ui;cursor:pointer;touch-action:none;' +
      'box-sizing:border-box;' + NOSEL;
  } else {
    // 功能键: 灰色半透明
    b.textContent = navLabel(vk);
    b.style.cssText =
      'min-width:64px;height:176px;display:flex;align-items:center;justify-content:center;' +
      'background:rgba(128,128,128,0.15);border:1px solid rgba(128,128,128,0.4);' +
      'color:rgba(255,255,255,' + st.label + ');font:bold 15px/1 system-ui;cursor:pointer;touch-action:none;' +
      'box-sizing:border-box;' + NOSEL;
  }
  b.style.opacity = String(st.alpha);
  return b;
}

export function setKeyActive(el, active) {
  if (el.dataset.kind === 'air') {
    const bar = el.querySelector('.ugv-bar');
    if (bar) bar.style.background = active ? 'rgba(255,255,255,0.9)' : 'rgba(128,128,128,0.3)';
  } else {
    el.style.color = active ? '#fff' : 'rgba(255,255,255,0.6)';
    el.style.background = active
      ? 'rgba(128,128,128,0.25)'
      : el.dataset.kind === 'cell'
        ? ''
        : 'rgba(128,128,128,0.15)';
  }
}

// 底部安全距离: 避开 Android 手势条/导航栏(移动端最下一排曾被系统手势截走)。
// 面板在缩放过的 #main_container 内, 故需按容器缩放换算成容器坐标。
// 面板直接固定在视口(屏幕坐标), 与游戏的 #main_container transform 解耦:
// 后者在 iOS 上可能被安全区/约束搞偏, 牵连面板。
function panelBottomInset() {
  return Math.round(panelCfg.bottomInset);
}

export function ensureKeyPanel() {
  if (rebuiltHook) rebuiltHook(); // 面板重建后旧的命中引用失效
  if (keyPanel) keyPanel.remove();
  keyPanel = document.createElement('div');
  keyPanel.id = 'ugv_keys';
  keyPanel.style.cssText =
    'position:fixed;left:0;right:0;top:0;bottom:0;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;' +
    'pointer-events:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:none;';
  keyPanel.style.paddingBottom = panelBottomInset() + 'px';
  document.body.appendChild(keyPanel);

  // AIR 区域: 宽度占满游戏窗口(100vw),横条竖排,判定线在中间
  // (始终构建; showLanes=false 时只设为不可见, 不销毁、不影响触摸)
  const airBox = document.createElement('div');
  airBox.style.cssText = 'width:100%;display:flex;flex-direction:column;pointer-events:auto;';
  const airVks = AIR_KEYS.map(charToVk);
  airVks.forEach((vk, i) => {
    const el = mkKey(vk, 'air');
    if (panelCfg.airRowGap > 0 && i < airVks.length - 1) el.style.marginBottom = panelCfg.airRowGap + 'px';
    airBox.appendChild(el);
  });
  keyPanel.appendChild(airBox);

  // 主键区域: 固定 16 列 × 2 行, 位置严格对应配置顺序(MAIN_FRONT / MAIN_BACK)
  const grid = document.createElement('div');
  const st = panelCfg;
  grid.style.cssText =
    'margin:' + st.airGap + 'px auto 0;display:grid;grid-template-columns:repeat(16,1fr);column-gap:' + st.colGap + 'px;' +
    'grid-template-rows:repeat(2,' + st.rowH + 'px);' +
    'width:66.6667%;background:rgba(128,128,128,' + st.bg + ');' +
    'border:1px solid rgba(128,128,128,0.4);pointer-events:auto;box-sizing:border-box;';
  MAIN_FRONT.concat(MAIN_BACK).map(charToVk).forEach((vk, i) => {
    const c = mkKey(vk, 'cell');
    if ((i + 1) % 16 === 0) c.style.borderRight = 'none';
    if (i >= 16) c.style.borderBottom = 'none';
    grid.appendChild(c);
  });
  keyPanel.appendChild(grid);

  // 「显示虚拟键盘」关闭: 仅不可见(元素保留, 布局与触摸命中不变)
  if (!panelCfg.showLanes) {
    airBox.style.opacity = '0';
    grid.style.opacity = '0';
  }

  // 功能键: 左上角, 三个横向排列 (Test/Esc, Service/Enter, FN)
  //   FN 点击后在下一行横向展开 F1-F5; 点任一功能键或再点 FN 收回
  const navBox = document.createElement('div');
  navBox.style.cssText =
    'position:absolute;left:8px;top:112px;display:flex;flex-direction:column;gap:6px;pointer-events:auto;align-items:flex-start;';
  function barStyle(b, w, h) {
    b.style.minWidth = '0';
    b.style.width = w + 'px';
    b.style.height = h + 'px';
    return b;
  }
  function mkFnBtn(label) {
    const b = document.createElement('div');
    b.textContent = label;
    b.style.cssText =
      'display:flex;align-items:center;justify-content:center;' +
      'background:rgba(128,128,128,0.15);border:1px solid rgba(128,128,128,0.4);' +
      'color:rgba(255,255,255,0.6);font:bold 15px/1 system-ui;cursor:pointer;touch-action:none;' +
      'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;box-sizing:border-box;';
    return b;
  }
  const navRow = document.createElement('div');
  navRow.style.cssText = 'display:flex;flex-direction:row;gap:6px;';
  for (const vk of [27, 13]) navRow.appendChild(barStyle(mkKey(vk, 'nav'), 200, 46));
  const fnBtn = barStyle(mkFnBtn('FN'), 200, 46);
  navRow.appendChild(fnBtn);
  navBox.appendChild(navRow);
  // F1-F5 弹层: 功能键行下方, 横向
  const fWrap = document.createElement('div');
  fWrap.style.cssText = 'display:none;flex-direction:row;gap:4px;';
  for (const vk of [112, 113, 114, 115, 116]) {
    const b = barStyle(mkKey(vk, 'nav'), 117, 46);
    b.addEventListener('pointerdown', function () { fWrap.style.display = 'none'; }, true);
    fWrap.appendChild(b);
  }
  fnBtn.addEventListener('pointerdown', function (e) {
    e.preventDefault();
    fWrap.style.display = fWrap.style.display === 'none' ? 'flex' : 'none';
  });
  navBox.appendChild(fWrap);
  keyPanel.appendChild(navBox);

  keyPanel.style.display = panelVisible ? '' : 'none';
}

// 惰性采集: W=true(街机板模式)下游戏不调用 kbdStart,而是在每帧低频查询 di8KbdHeld。
// 这里累积游戏实际查询到的 VK 键,去重后一次性构建触摸面板。
let collectedVks = new Set();
let collectScheduled = false;
let panelBuilt = false;
export function collectTouchKey(vk) {
  if (panelBuilt || collectedVks.has(vk)) return;
  collectedVks.add(vk);
  if (!collectScheduled) {
    collectScheduled = true;
    setTimeout(() => {
      collectScheduled = false;
      if (collectedVks.size) {
        ensureKeyPanel();
        panelBuilt = true;
        collectedVks = new Set();
      }
    }, 300);
  }
}

// 把面板构建回调注册给键盘模块(di8KbdHeld 惰性采集)
setTouchKeyCollector(collectTouchKey);

// 快捷键开关触摸面板 UI: Cmd/Ctrl+Shift+H
export function installPanelShortcut() {
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.code === 'KeyH' || e.key === 'H' || e.key === 'h')) {
      e.preventDefault();
      togglePanel();
    }
  });
}

// 供 touch.js 在面板重建后重置缓存状态
export function markPanelBuilt() {
  panelBuilt = true;
}

export { touchPress, touchRelease };
