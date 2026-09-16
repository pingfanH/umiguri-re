// 全屏保持: 不要让 Esc(以及系统/浏览器行为)退出全屏。
//
// 全屏是原生窗口状态(Tauri set_fullscreen, 见 apply_window_config), 不由页面控制,
// 因此 JS 只能: 1) 拦掉 Esc 的默认行为(浏览器/WebView 层); 2) 一旦发现掉出全屏就立刻恢复。
import { tryInvoke } from '../core/invoke.js';
import { diagLog } from '../core/diag.js';

const IS_MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let want = false;
let restoring = false;

export function setFullscreenDesired(v) {
  want = !!v;
}

async function restore() {
  if (!want || restoring || IS_MOBILE) return; // 移动端全屏由 manifest/主题决定, 无需恢复
  restoring = true;
  try {
    const fs = await tryInvoke('window_fullscreen', {}, null);
    if (fs === false) {
      diagLog('[umg][fullscreen] 掉出全屏, 恢复');
      await tryInvoke('apply_window_config', { mode: 'fullscreen' }, null);
    }
  } finally {
    restoring = false;
  }
}

export function installFullscreenGuard() {
  // Esc: 阻止默认行为(部分平台会用它退出全屏); 游戏读键走宿主桥, 不受影响。
  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) e.preventDefault();
    },
    true
  );
  if (IS_MOBILE) return;
  for (const ev of ['focus', 'resize', 'visibilitychange', 'fullscreenchange']) {
    window.addEventListener(ev, () => setTimeout(restore, 400));
  }
  setInterval(restore, 2000);
}
