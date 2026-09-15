// 虚拟按键可视化编辑器 + 白色参考圆 + 命中高亮(测试菜单入口)。
import { panelCfg, PANEL_DEFAULTS, EDITOR_ROWS, panelScale, touchRadius } from './config.js';
import { keysInCircle } from '../input/hit.js';
import { ensureKeyPanel, setPanelRebuildHook } from './panel.js';

let editorEl = null;
let guideEl = null;
let editorRowsEl = null;
let guidePos = null; // 「触发距离」行坐标(容器坐标)
let panelRows = null; // 设置页各行坐标(容器坐标) [{x,y,w,h}]
let panelRowIndex = 0; // 当前选中行
let rowCursorEl = null;

let settingsActive = false; // 原生设置页/编辑器开启时为 true: 启用命中可视化
let nativeSettings = false; // 原生测试页模式: 强制显示白圈与命中可视化(不受持久化开关影响)
let lastHits = [];

export function isEditorOpen() {
  return !!editorEl;
}

export function clearHits() {
  for (const k of lastHits) k.style.outline = '';
  lastHits = [];
}

export function updateHits(x, y) {
  clearHits();
  if (!settingsActive || !panelCfg.showHit) return;
  lastHits = keysInCircle(x, y);
  for (const k of lastHits) {
    k.style.outline = '2px solid #ffd400';
    k.style.outlineOffset = '-1px';
  }
}

// 真实触摸处的「实际触发圆」(短暂闪现, 便于对照参考圆)
export function flashCircle(x, y) {
  if (!settingsActive || !panelCfg.showHit) return;
  const d = document.createElement('div');
  const r = touchRadius();
  d.style.cssText =
    'position:fixed;left:' + (x - r) + 'px;top:' + (y - r) + 'px;width:' + (2 * r) + 'px;height:' + (2 * r) +
    'px;border:1px solid rgba(255,212,0,0.9);border-radius:50%;pointer-events:none;z-index:100002;transition:opacity .5s;';
  document.body.appendChild(d);
  setTimeout(() => {
    d.style.opacity = '0';
  }, 250);
  setTimeout(() => {
    d.remove();
  }, 800);
}

// 白色空心圆: 仅作「范围触发距离」的尺寸参考, 显示在旁边(不参与交互)
export function ensureGuide(on) {
  if (!on) {
    if (guideEl) {
      guideEl.remove();
      guideEl = null;
    }
    return;
  }
  if (!guideEl) {
    guideEl = document.createElement('div');
    guideEl.id = 'ugv_guide';
    guideEl.style.cssText =
      'position:fixed;border:2px solid #fff;border-radius:50%;box-sizing:border-box;' +
      'pointer-events:none;z-index:100002;opacity:.9;';
    document.body.appendChild(guideEl);
  }
  const r = touchRadius();
  const mc = document.getElementById('main_container');
  const mr = mc
    ? mc.getBoundingClientRect()
    : { left: 0, top: 0, right: innerWidth, bottom: innerHeight, width: innerWidth };
  // 放在「设置选项下方」: 左对齐, 紧贴虚拟按键面板上沿之上
  const scale = mr.width ? mr.width / 1920 : 1;
  let left, top;
  if (guidePos) {
    // 放在「触发距离」文字右边, 垂直居中于该行
    left = mr.left + (guidePos.x + (guidePos.w || 0) + 10) * scale;
    top = mr.top + (guidePos.y + (guidePos.h || 0) / 2) * scale - r;
  } else {
    const kp = document.getElementById('ugv_keys');
    const kr = kp ? kp.getBoundingClientRect() : null;
    const panelTop = kr && kr.height ? kr.top : mr.bottom;
    left = mr.left + 16;
    top = Math.max(mr.top + 8, panelTop - 2 * r - 14);
  }
  guideEl.style.width = 2 * r + 'px';
  guideEl.style.height = 2 * r + 'px';
  guideEl.style.left = Math.round(left) + 'px';
  guideEl.style.top = Math.round(top) + 'px';
}

export function refreshEditor() {
  if (!editorEl) return;
  for (const row of EDITOR_ROWS) {
    const v = editorEl.querySelector('[data-v="' + row.key + '"]');
    if (v) v.textContent = Number(panelCfg[row.key]).toFixed(row.fixed || 0);
  }
  clearHits();
  ensureGuide(panelCfg.showGuide);
}

// 选中行指示: 箭头「▶」+ (最后一行)「返回」项
export function updateRowCursor() {
  if (!panelRows || !panelRows.length) {
    if (rowCursorEl) {
      rowCursorEl.remove();
      rowCursorEl = null;
    }
    return;
  }
  const mc = document.getElementById('main_container');
  const mr = mc ? mc.getBoundingClientRect() : null;
  const scale = mr && mr.width ? mr.width / 1920 : 1;
  const ox = mr ? mr.left : 0;
  const oy = mr ? mr.top : 0;
  if (!rowCursorEl) {
    rowCursorEl = document.createElement('div');
    rowCursorEl.id = 'ugv_rowcur';
    rowCursorEl.style.cssText = 'position:fixed;left:0;top:0;pointer-events:none;z-index:100000;color:#fff;';
    document.body.appendChild(rowCursorEl);
  }
  const n = panelRows.length;
  const r0 = panelRows[0];
  const rowh = n > 1 ? panelRows[1].y - panelRows[0].y : 30;
  const onBack = panelRowIndex >= n;
  const rowY = onBack ? r0.y + rowh * n : panelRows[Math.max(0, Math.min(panelRowIndex, n - 1))].y;
  const h = r0.h || rowh;
  rowCursorEl.innerHTML = '';
  const arrow = document.createElement('div');
  arrow.textContent = '▶';
  arrow.style.cssText =
    'position:absolute;font:700 16px system-ui,sans-serif;color:#fff;' +
    'left:' + Math.round(ox + (r0.x - 26) * scale) + 'px;' +
    'top:' + Math.round(oy + (rowY + h / 2) * scale - 9) + 'px;';
  rowCursorEl.appendChild(arrow);
  if (onBack) {
    const t = document.createElement('div');
    t.textContent = '返回';
    t.style.cssText =
      'position:absolute;font:700 18px system-ui,sans-serif;color:#fff;' +
      'left:' + Math.round(ox + r0.x * scale) + 'px;' +
      'top:' + Math.round(oy + (rowY + h / 2) * scale - 11) + 'px;';
    rowCursorEl.appendChild(t);
  }
}

export function closeKeyPanelEditor() {
  settingsActive = false;
  clearHits();
  ensureGuide(false);
  if (editorEl) {
    editorEl.remove();
    editorEl = null;
    guideEl = null;
    editorRowsEl = null;
  }
}

export function openKeyPanelEditor() {
  nativeSettings = false;
  settingsActive = true;
  if (editorEl) {
    refreshEditor();
    return;
  }
  editorEl = document.createElement('div');
  editorEl.id = 'ugv_editor';
  editorEl.style.cssText =
    'position:fixed;left:0;right:0;top:0;bottom:0;z-index:100001;pointer-events:none;' +
    'font:13px/1.5 system-ui,sans-serif;color:#fff;user-select:none;-webkit-user-select:none;';
  document.body.appendChild(editorEl);

  // 控件面板(左上)
  const box = document.createElement('div');
  box.style.cssText =
    'position:absolute;left:10px;top:10px;width:300px;max-height:calc(100% - 20px);overflow:auto;pointer-events:auto;' +
    'background:rgba(0,0,0,0.78);border:1px solid rgba(255,255,255,0.25);border-radius:8px;padding:10px;';
  box.appendChild(
    Object.assign(document.createElement('div'), {
      textContent: '虚拟按键设置',
      style: 'font-weight:700;font-size:15px;margin-bottom:6px;',
    })
  );
  box.appendChild(
    Object.assign(document.createElement('div'), {
      textContent: '旁边白圈 = 范围触发距离(直径)。页面上直接触摸面板可看实际命中。',
      style: 'font-size:11px;opacity:.75;margin-bottom:8px;',
    })
  );

  editorRowsEl = document.createElement('div');
  for (const row of EDITOR_ROWS) {
    const line = document.createElement('div');
    line.style.cssText = 'display:flex;align-items:center;gap:6px;margin:3px 0;';
    line.appendChild(
      Object.assign(document.createElement('span'), {
        textContent: row.label,
        style: 'flex:1;font-size:12px;opacity:.9;',
      })
    );
    const mk = (txt) => {
      const b = document.createElement('button');
      b.textContent = txt;
      b.style.cssText =
        'width:26px;height:24px;background:#333;color:#fff;border:1px solid #666;border-radius:4px;cursor:pointer;pointer-events:auto;';
      return b;
    };
    const dec = mk('−');
    const inc = mk('+');
    const val = Object.assign(document.createElement('span'), {
      textContent: '0',
      style: 'width:46px;text-align:right;font-variant-numeric:tabular-nums;',
    });
    val.dataset.v = row.key;
    dec.addEventListener('click', () => {
      window.umgKeyPanel.set({ [row.key]: +(Number(panelCfg[row.key]) - row.step).toFixed(3) });
    });
    inc.addEventListener('click', () => {
      window.umgKeyPanel.set({ [row.key]: +(Number(panelCfg[row.key]) + row.step).toFixed(3) });
    });
    val.addEventListener('click', () => {
      // 点数值可循环回默认
      window.umgKeyPanel.set({ [row.key]: PANEL_DEFAULTS[row.key] });
    });
    line.appendChild(dec);
    line.appendChild(val);
    line.appendChild(inc);
    editorRowsEl.appendChild(line);
  }
  box.appendChild(editorRowsEl);

  const mkToggle = (label, key) => {
    const l = document.createElement('label');
    l.style.cssText = 'display:flex;align-items:center;gap:6px;margin:6px 0;cursor:pointer;';
    const c = document.createElement('input');
    c.type = 'checkbox';
    c.checked = !!panelCfg[key];
    c.addEventListener('change', () => window.umgKeyPanel.set({ [key]: c.checked }));
    l.appendChild(c);
    l.appendChild(Object.assign(document.createElement('span'), { textContent: label, style: 'font-size:12px;' }));
    return l;
  };
  box.appendChild(mkToggle('显示参考圆(半径)', 'showGuide'));
  box.appendChild(mkToggle('高亮实际命中的键 + 触摸圆圈', 'showHit'));

  const btns = document.createElement('div');
  btns.style.cssText = 'display:flex;gap:8px;margin-top:10px;';
  const mkBtn = (label, fn) => {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText =
      'flex:1;padding:7px 8px;background:#2d6cdf;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:12px;pointer-events:auto;';
    b.addEventListener('click', fn);
    return b;
  };
  btns.appendChild(mkBtn('恢复默认', () => window.umgKeyPanel.reset()));
  btns.appendChild(mkBtn('关闭', () => closeKeyPanelEditor()));
  box.appendChild(btns);
  editorEl.appendChild(box);

  // 白色空心圆: 放在控件面板旁边, 直径 = 范围触发距离(视口 px)
  guideEl = document.createElement('div');
  guideEl.id = 'ugv_guide';
  guideEl.style.cssText =
    'position:absolute;left:330px;top:24px;border:2px solid #fff;border-radius:50%;pointer-events:none;' +
    'box-sizing:border-box;opacity:.9;';
  const glabel = document.createElement('div');
  glabel.textContent = '触发圆';
  glabel.style.cssText =
    'position:absolute;left:0;right:0;bottom:-16px;text-align:center;font-size:11px;color:#fff;opacity:.8;';
  guideEl.appendChild(glabel);
  editorEl.appendChild(guideEl);

  refreshEditor();
}

// ---- 供 umgKeyPanel API 使用的状态访问 ----
export function setSettingsActive(on) {
  settingsActive = on;
}
export function setNativeSettings(on) {
  nativeSettings = on;
}
export function isNativeSettings() {
  return nativeSettings;
}
export function setGuidePos(x, y, w, h) {
  guidePos = { x: x, y: y, w: w, h: h };
  if (guideEl) ensureGuide(true);
  return guidePos;
}
export function setRows(rows, index) {
  panelRows = Array.isArray(rows) ? rows : null;
  panelRowIndex = Number(index) || 0;
  updateRowCursor();
  return panelRows ? panelRows.length : 0;
}
export function clearRows() {
  if (rowCursorEl) {
    rowCursorEl.remove();
    rowCursorEl = null;
  }
  panelRows = null;
}

// 面板重建后旧的命中引用失效
setPanelRebuildHook(clearHits);

export { ensureKeyPanel };
