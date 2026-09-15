// 触摸命中检测。
import { touchRadius } from '../keypanel/config.js';

// 命中检测: 以手指为圆心、touchRadius 为半径, 凡与该圆相交的键都触发。
// 一次触摸可同时触发多个相邻档位 —— 这是刻意行为(手指覆盖多键)。
// 跳过 display:none 的 0×0 隐藏键(否则会误判左上角)。
export function keysInCircle(x, y) {
  const result = [];
  const R = touchRadius();
  for (const k of document.querySelectorAll('[data-vk]')) {
    const r = k.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    if (k.dataset.kind === 'air') {
      // air 横条: 精确命中(不套用半径) —— 一条只触发一个 air
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) result.push(k);
      continue;
    }
    const cx = Math.max(r.left, Math.min(x, r.right));
    const cy = Math.max(r.top, Math.min(y, r.bottom));
    const dx = x - cx;
    const dy = y - cy;
    if (dx * dx + dy * dy <= R * R) result.push(k);
  }
  return result;
}
