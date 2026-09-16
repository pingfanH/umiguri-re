// 纹理放大过滤开关(可选): 游戏的美术/字体是 1x 资源, 在非整数倍(如 1.333)放大时
// 若用 nearest 会明显锯齿; 强制 LINEAR 可以平滑(略软), 用于对比取一个折中。
// 配置: game.json -> system.texture_filter: "linear" | "nearest"(默认, 不干预)
import { diagLog } from '../core/diag.js';

export function installTextureFilter(cfg) {
  const mode = cfg && cfg.textureFilter;
  if (mode !== 'linear' && mode !== 'nearest') return;
  const force = mode === 'linear' ? 0x2601 /* LINEAR */ : 0x2600; /* NEAREST */
  for (const C of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
    if (!C || !C.prototype.texParameteri || C.prototype.__umgFilter) continue;
    const P = C.prototype;
    P.__umgFilter = true;
    const orig = P.texParameteri;
    P.texParameteri = function (target, pname, param) {
      // 0x2800 = TEXTURE_MAG_FILTER, 0x2801 = TEXTURE_MIN_FILTER
      if (pname === 0x2800 || pname === 0x2801) param = force;
      return orig.call(this, target, pname, param);
    };
  }
  diagLog('[umg][tex] 纹理过滤强制为 ' + mode);
}
