// 全屏相关: 拦掉 Esc 的默认行为, 避免它退出全屏。
//
// 全屏是原生窗口状态(Tauri apply_window_config -> set_fullscreen), 页面无法读取/控制。
// 曾尝试「发现掉出全屏就自动恢复」, 但实测:
//   - window.is_fullscreen() 在桌面恒为 false;
//   - 窗口尺寸在启动/全屏切换期间会变(曾记录到过渡态的 2560x731),
// 结果每 2s 调一次 set_fullscreen(true) -> 窗口反复 resize -> 卡顿/掉帧/画面发糊。
// 因此只保留「拦 Esc 默认行为」这一件事(不影响游戏读键, 它走宿主桥)。
import { diagLog } from '../core/diag.js';

const IS_MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let want = false;

export function setFullscreenDesired(v) {
  want = !!v;
}

export function installFullscreenGuard() {
  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        if (want && !IS_MOBILE) e.preventDefault();
      }
    },
    true
  );
  diagLog('[umg][fullscreen] guard installed (want=' + want + ')');
}
