// 底部按键提示行(↓ ↑ ← → 決定) + 档位导航映射。
// 供暂停菜单、更新提示等复用, 保证两者外观/操作完全一致:
//   整行宽度 = 虚拟键盘主键区(16 键, 占容器 2/3), 每个箭头 3 键宽, 決定 4 键宽;
//   不可点(pointer-events:none), 实际切换按虚拟键盘档位(见 laneAction, 与测试菜单 SliderZone 一致)。
const FONT = 'font-family:system-ui,-apple-system,"Segoe UI",sans-serif;';

// 与 testMenu 的 SliderZone 一致的档位区间
const R_OK = [24, 31]; // 決定
const R_RIGHT = [18, 23]; // →
const R_NEXT = [0, 5]; // ↓
const R_LEFT = [12, 17]; // ←
const R_PREV = [6, 11]; // ↑

// 档位 -> 动作: 'ok' | 'next' | 'prev' | null
export function laneAction(lane) {
  if (lane >= R_OK[0] && lane <= R_OK[1]) return 'ok';
  if (lane >= R_RIGHT[0] && lane <= R_RIGHT[1]) return 'next';
  if (lane >= R_NEXT[0] && lane <= R_NEXT[1]) return 'next';
  if (lane >= R_LEFT[0] && lane <= R_LEFT[1]) return 'prev';
  if (lane >= R_PREV[0] && lane <= R_PREV[1]) return 'prev';
  return null;
}

function chip(label, grow, last) {
  const b = document.createElement('div');
  b.textContent = label;
  b.style.cssText =
    'display:flex;align-items:center;justify-content:center;flex:' + grow + ' 1 0;min-width:0;' +
    'height:clamp(18px,3.6vmin,30px);background:rgba(255,255,255,0.92);color:#111;' +
    (last ? '' : 'border-right:1px solid rgba(0,0,0,0.35);') +
    FONT + 'font-weight:800;font-size:clamp(12px,2.6vmin,22px);line-height:1;' +
    'box-sizing:border-box;box-shadow:0 0.08em 0.3em rgba(0,0,0,0.4);overflow:hidden;' +
    'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;';
  return b;
}

export function createHintRow() {
  const row = document.createElement('div');
  row.className = 'umg-navhint';
  row.style.cssText =
    'position:absolute;bottom:0;display:none;align-items:flex-end;gap:0;pointer-events:none;overflow:hidden;';
  row.appendChild(chip('↓', 3, false));
  row.appendChild(chip('↑', 3, false));
  row.appendChild(chip('←', 3, false));
  row.appendChild(chip('→', 3, false));
  row.appendChild(chip('決定', 4, true));
  return row;
}

// 宽度对齐虚拟键盘主键区(16 键, 占容器 2/3)并水平居中
export function layoutHintRow(row) {
  if (!row) return;
  const mc = document.getElementById('main_container');
  const mr = mc ? mc.getBoundingClientRect() : null;
  const vw = mr && mr.width ? mr.width : window.innerWidth;
  const left0 = mr ? mr.left : 0;
  const total = vw * (2 / 3);
  row.style.left = Math.round(left0 + (vw - total) / 2) + 'px';
  row.style.width = Math.round(total) + 'px';
  row.style.right = 'auto';
}

export function showHintRow(row, on) {
  if (!row) return;
  if (on) layoutHintRow(row);
  row.style.display = on ? 'flex' : 'none';
}
