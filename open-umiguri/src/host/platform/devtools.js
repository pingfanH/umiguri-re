// DevTools 快捷键: 不在启动时自动打开, 改为 F12 / Ctrl(Cmd)+Shift+I 手动切换。
// 调用 Rust 端 toggle_devtools(见 src-tauri/src/lib.rs)。
import { tryInvoke } from '../core/invoke.js';

export function installDevtoolsShortcut() {
  window.addEventListener(
    'keydown',
    (e) => {
      const isF12 = e.code === 'F12' || e.keyCode === 123;
      const isCombo =
        (e.ctrlKey || e.metaKey) && e.shiftKey && (e.code === 'KeyI' || e.key === 'I' || e.key === 'i');
      if (!isF12 && !isCombo) return;
      if (e.repeat) return;
      // 捕获阶段拦截: 不让游戏/输入层收到该按键
      e.preventDefault();
      e.stopPropagation();
      tryInvoke('toggle_devtools', {}, false);
    },
    true
  );
}
