// 虚拟按键面板: DOM 构建与显隐。
import { panelCfg, panelScale, MAIN_FRONT, MAIN_BACK, AIR_KEYS } from './config.js';
import { charToVk } from '../input/vk.js';
import { touchPress, touchRelease } from '../input/lanes.js';
import { setTouchKeyCollector } from '../input/keyboard.js';

let keyPanel = null;
// 面板参数以容器单位(1920x1080 设计稿)表示; 现在面板固定在视口, 需按游戏缩放比换算。
const ux = (v) => v * panelScale(); // 容器单位 -> 视口像素
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
      'position:relative;width:100%;height:' + ux(st.airH) + 'px;cursor:pointer;box-sizing:border-box;' + NOSEL;
    const bar = document.createElement('div');
    bar.className = 'ugv-bar';
    bar.style.cssText =
      'position:absolute;left:0;right:0;top:50%;height:' + Math.max(1, ux(3)) + 'px;transform:translateY(-50%);' +
      'background:rgba(128,128,128,0.3);';
    b.appendChild(bar);
  } else if (kind === 'cell') {
    // 按钮单元格(与 panel.html 一致): grid 均分,共享边框
    b.textContent = vkToLabel(vk);
    b.style.cssText =
      'display:flex;align-items:center;justify-content:center;' +
      'border-right:1px solid rgba(128,128,128,0.4);border-bottom:1px solid rgba(128,128,128,0.4);' +
      'color:rgba(255,255,255,' + st.label + ');font:bold ' + Math.round(ux(14)) + 'px/1 system-ui;cursor:pointer;touch-action:none;' +
      'box-sizing:border-box;' + NOSEL;
  } else {
    // 功能键: 灰色半透明
    b.textContent = navLabel(vk);
    b.style.cssText =
      'min-width:' + ux(64) + 'px;height:' + ux(176) + 'px;display:flex;align-items:center;justify-content:center;' +
      'background:rgba(128,128,128,0.15);border:1px solid rgba(128,128,128,0.4);' +
      'color:rgba(255,255,255,' + st.label + ');font:bold ' + Math.round(ux(15)) + 'px/1 system-ui;cursor:pointer;touch-action:none;' +
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
// bottomInset 语义是"距屏幕底边"(视口 px); 面板盒按视口尺寸定位, 直接用
function panelBottomInset() {
  return Math.round(panelCfg.bottomInset);
}

export function ensureKeyPanel() {
  if (rebuiltHook) rebuiltHook(); // 面板重建后旧的命中引用失效
  if (keyPanel) keyPanel.remove();
  keyPanel = document.createElement('div');
  keyPanel.id = 'ugv_keys';
  // 覆盖在 #main_container 的可视矩形上(fixed), 与容器 transform 解耦
  const mc = document.getElementById('main_container');
  const mr = mc ? mc.getBoundingClientRect() : null;
  if (mr && (mr.width < 40 || mr.height < 40)) {
    // 容器尚未布局完成(退化矩形): 先不建, 稍后重试
    scheduleRebuild();
    return;
  }
  keyPanel.style.cssText =
    'position:fixed;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;' +
    'pointer-events:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;touch-action:none;';
  if (mr) {
    // 宽度对齐游戏画面(与赛道一致), 高度延伸到视口底边(避免画面下方"悬空")
    keyPanel.style.left = Math.round(mr.left) + 'px';
    keyPanel.style.top = Math.round(mr.top) + 'px';
    keyPanel.style.width = Math.round(mr.width) + 'px';
    keyPanel.style.height = Math.max(0, Math.round(window.innerHeight - mr.top)) + 'px';
  } else {
    keyPanel.style.left = '0px';
    keyPanel.style.top = '0px';
    keyPanel.style.width = '100vw';
    keyPanel.style.height = '100vh';
  }
  keyPanel.style.paddingBottom = panelBottomInset() + 'px';
  try {
    console.error('[umg][panel] rebuild scale=' + panelScale().toFixed(3) + ' vp=' + innerWidth + 'x' + innerHeight +
      ' rect=' + (mr ? [Math.round(mr.left), Math.round(mr.top), Math.round(mr.width), Math.round(mr.height)].join(',') : 'null') +
      ' rowH=' + panelCfg.rowH + ' bottomInset=' + panelCfg.bottomInset + ' pad=' + panelBottomInset());
  } catch (e) {}
  document.body.appendChild(keyPanel);

  // 临时调试: 画面板盒边框 + 数值(便于截图定位)
  try {
    keyPanel.style.outline = '2px solid #f00';
    const dbg = document.createElement('div');
    dbg.style.cssText =
      'position:absolute;left:0;bottom:0;z-index:100000;pointer-events:none;background:rgba(0,0,0,.75);' +
      'color:#f66;font:10px/1.3 ui-monospace,monospace;padding:1px 3px;white-space:pre;';
    dbg.textContent =
      'box ' + keyPanel.style.left + ',' + keyPanel.style.top + ' ' + keyPanel.style.width + 'x' + keyPanel.style.height +
      '\npad ' + keyPanel.style.paddingBottom + '  bottomInset ' + panelCfg.bottomInset + '  rowH ' + panelCfg.rowH;
    keyPanel.appendChild(dbg);
  } catch (e) {}

  // 临时几何日志: 面板盒 / air 区 / 网格 / 底边空隙
  requestAnimationFrame(() => {
    try {
      const kb = keyPanel.getBoundingClientRect();
      const ab = airBox.getBoundingClientRect();
      const gb = grid.getBoundingClientRect();
      const kk = keyPanel.querySelectorAll('[data-vk]');
      const first = kk[0] && kk[0].getBoundingClientRect();
      const last = kk[kk.length - 1] && kk[kk.length - 1].getBoundingClientRect();
      console.error('[umg][panel-geo] box=' + [kb.left, kb.top, kb.width, kb.height].map(Math.round).join(',') +
        ' air=' + [ab.top, ab.height].map(Math.round).join(',') +
        ' grid=' + [gb.top, gb.height].map(Math.round).join(',') +
        ' content=' + (first ? Math.round(first.top) : '?') + '..' + (last ? Math.round(last.bottom) : '?') +
        ' gapBelow=' + Math.round(kb.bottom - (last ? last.bottom : kb.bottom)) +
        ' pad=' + keyPanel.style.paddingBottom);
    } catch (e) {}
  });

  // AIR 区域: 宽度占满游戏窗口(100vw),横条竖排,判定线在中间
  // (始终构建; showLanes=false 时只设为不可见, 不销毁、不影响触摸)
  const airBox = document.createElement('div');
  airBox.style.cssText = 'width:100%;display:flex;flex-direction:column;pointer-events:auto;';
  const airVks = AIR_KEYS.map(charToVk);
  airVks.forEach((vk, i) => {
    const el = mkKey(vk, 'air');
    if (panelCfg.airRowGap > 0 && i < airVks.length - 1) el.style.marginBottom = ux(panelCfg.airRowGap) + 'px';
    airBox.appendChild(el);
  });
  keyPanel.appendChild(airBox);

  // 主键区域: 固定 16 列 × 2 行, 位置严格对应配置顺序(MAIN_FRONT / MAIN_BACK)
  const grid = document.createElement('div');
  const st = panelCfg;
  grid.style.cssText =
    'margin:' + ux(st.airGap) + 'px auto 0;display:grid;grid-template-columns:repeat(16,1fr);column-gap:' + ux(st.colGap) + 'px;' +
    'grid-template-rows:repeat(2,' + ux(st.rowH) + 'px);' +
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
    'position:absolute;left:' + ux(8) + 'px;top:' + Math.round(ux(112)) + 'px;display:flex;flex-direction:column;gap:' + Math.round(ux(6)) + 'px;pointer-events:auto;align-items:flex-start;';
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
  navRow.style.cssText = 'display:flex;flex-direction:row;gap:' + Math.round(ux(6)) + 'px;';
  for (const vk of [27, 13]) navRow.appendChild(barStyle(mkKey(vk, 'nav'), ux(200), ux(46)));
  const fnBtn = barStyle(mkFnBtn('FN'), ux(200), ux(46));
  navRow.appendChild(fnBtn);
  navBox.appendChild(navRow);
  // F1-F5 弹层: 功能键行下方, 横向
  const fWrap = document.createElement('div');
  fWrap.style.cssText = 'display:none;flex-direction:row;gap:4px;';
  for (const vk of [112, 113, 114, 115, 116]) {
    const b = barStyle(mkKey(vk, 'nav'), ux(117), ux(46));
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

// 视口/窗口变化时重建面板, 使其跟随容器矩形
let resizeTimer = null;
function scheduleRebuild() {
  if (!keyPanel) return;
  if (resizeTimer) clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { resizeTimer = null; try { ensureKeyPanel(); } catch (e) {} }, 200);
}
export function installPanelResizeHook() {
  window.addEventListener('resize', scheduleRebuild, { passive: true });
  window.addEventListener('orientationchange', scheduleRebuild, { passive: true });
  if (window.visualViewport) window.visualViewport.addEventListener('resize', scheduleRebuild, { passive: true });
  // 容器的尺寸/transform/display 变化都要跟随
  const mc = document.getElementById('main_container');
  if (mc && 'ResizeObserver' in window) {
    try {
      new ResizeObserver(scheduleRebuild).observe(mc);
    } catch (e) {}
  }
  // 启动阶段容器会经历 hidden -> 布局 -> transform, 定时同步一段时间
  let n = 0;
  const t = setInterval(() => {
    if (keyPanel) ensureKeyPanel();
    if (++n >= 40) clearInterval(t);
  }, 400);
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
