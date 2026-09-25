// 测试菜单白色 UI 的触摸区 -> 菜单输入位脉冲。
import { PAD_RECTS } from '../keypanel/config.js';
import { isInputSuppressed } from './lanes.js';

window.__umgPad = 0; // 一帧脉冲(游戏侧 g() 消费后清零)
let padStamp = 0;

window.__umgPadAt = function (cx, cy) {
  if (isInputSuppressed()) return 0; // 宿主弹窗独占输入时不产生游戏输入
  const mc = document.getElementById('main_container');
  const mr = mc ? mc.getBoundingClientRect() : null;
  const scale = mr && mr.width ? mr.width / 1920 : 1;
  const x = cx / scale;
  const y = cy / scale;
  if (y < 940 || y > 1070) return 0;
  for (const r of PAD_RECTS) {
    if (x >= r.x && x < r.x + r.w) {
      window.__umgPad = r.bit;
      padStamp = performance.now();
      return r.bit;
    }
  }
  return 0;
};

window.__umgPadTake = function () {
  if (isInputSuppressed()) {
    window.__umgPad = 0;
    return 0;
  }
  if (window.__umgPad && performance.now() - padStamp < 250) {
    const b = window.__umgPad;
    window.__umgPad = 0;
    return b;
  }
  window.__umgPad = 0;
  return 0;
};
