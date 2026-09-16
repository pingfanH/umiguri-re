// 渲染倍率: 让游戏画布背衬匹配窗口物理像素(默认), 消除 1920x1080 设计空间被非整数放大的发虚。
//
// 游戏内部固定 1920x1080(投影/布局都在这个空间), 容器由 CSS transform 缩放到窗口;
// 游戏在初始化时把 canvas.width/height、viewport、readPixels 乘上 window.__umgPixelScale
// (见 tools/game-patches.mjs 的渲染倍率补丁), 设计空间保持不变。
// 倍率 = 窗口缩放比 × devicePixelRatio, 即「1 设计像素 = 1 物理像素」。
import { diagLog } from '../core/diag.js';
import { handshake } from '../bridge/handshake.js';

const DESIGN_W = 1920;
const DESIGN_H = 1080;

const DESIGN_CSS = { w: DESIGN_W + 'px', h: DESIGN_H + 'px' };

// 画布按背衬尺寸做内在尺寸 -> CSS 里会溢出容器(游戏本身依赖 canvas.width == CSS 尺寸)。
// 因此把画布 CSS 尺寸固定回设计空间, 缩放交给容器的 transform。
export function lockCanvasCssSize() {
  const c = document.querySelector('#main_container > canvas');
  if (!c) return false;
  // CSS 尺寸锁回设计空间(画布自身按背衬尺寸会溢出容器)
  c.style.width = DESIGN_CSS.w;
  c.style.height = DESIGN_CSS.h;
  // 背衬 = 设计空间 × 倍率, 并用同一个 GL context 校正 viewport。
  // 必须在这里做: 游戏自带的 glRuntime 会在窗口 resize 时把画布按窗口尺寸重置
  // (canvas.width = window.innerWidth - ...), 会覆盖掉初始倍率。
  const k = window.__umgPixelScale || 1;
  const w = Math.round(DESIGN_W * k);
  const h = Math.round(DESIGN_H * k);
  if (c.width !== w || c.height !== h) {
    c.width = w;
    c.height = h;
    try {
      const gl = c.getContext('webgl2') || c.getContext('webgl');
      if (gl) gl.viewport(0, 0, w, h);
    } catch (e) {}
  }
  return true;
}

export function setupRenderScale(cfg) {
  const raw = cfg && cfg.renderScale;
  let k;
  if (typeof raw === 'number' && raw > 0) {
    k = raw;
  } else if (typeof raw === 'string' && /^\d+(\.\d+)?$/.test(raw)) {
    k = parseFloat(raw);
  } else {
    // 「和屏幕一样」: 全屏时窗口即屏幕(且此时代码可能还没拿到最终窗口尺寸),
    // 因此以屏幕尺寸为基准; 窗口化时以窗口尺寸为基准。
    const fullscreen = (cfg && cfg.windowMode) === 'fullscreen';
    const w = fullscreen ? screen.width : window.innerWidth;
    const h = fullscreen ? screen.height : window.innerHeight;
    const fit = Math.min(w / DESIGN_W, h / DESIGN_H);
    k = fit * (window.devicePixelRatio || 1);
  }
  // 限幅(避免 4K×2 之类的超大背衬); 不做取整 —— 取整会让背衬与窗口物理像素对不齐
  k = Math.min(2, Math.max(0.5, k));
  window.__umgPixelScale = k;
  // 超采样(背衬 > 窗口物理像素)时, 浏览器/WebView 会把它降采样回窗口 ->
  // 这时需要平滑过滤(H=2)才能把锯齿抹平; 若仍是就近过滤会有锯齿。
  // 纯放大(不超采样)时反之, 平滑会发糊, 因此只在 k>=1.5 且用户未显式指定时切换。
  const userSet = cfg && cfg.scalingQuality !== null && cfg.scalingQuality !== undefined;
  if (k >= 1.5 && !userSet) {
    handshake.H = 2;
    diagLog('[umg][render] 超采样 %s, 画布过滤切换为 high-quality', k.toFixed(2));
  }
  diagLog(
    `[umg][render] pixelScale=${k} (screen=${screen.width}x${screen.height} win=${window.innerWidth}x${window.innerHeight} dpr=${devicePixelRatio}, cfg=${raw === undefined || raw === null ? 'auto' : raw})`
  );
}
