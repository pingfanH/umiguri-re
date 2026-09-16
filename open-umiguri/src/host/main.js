// open-umiguri 宿主层入口(打包为 tauri-bridge.js, 经典脚本, 先于游戏执行)。
import { preventViewportGestures } from './platform/gestures.js';
import { installKeyboardListeners } from './input/keyboard.js';
import { installProtocolInterceptors } from './core/protocol.js';
import { installPointerHandlers } from './input/touch.js';
import './input/pad.js';
import { installPanelShortcut, installPanelResizeHook } from './keypanel/panel.js';
import { installKeyPanelApi } from './keypanel/api.js';
import { installUmgrElc } from './bridge/umgr-elc.js';
import { installNativeInput } from './bridge/native-input.js';
import { installErrorDiagnostics, installConsoleForwarding, reportGlExtensionsNow, reportGlExtensionsDelayed } from './core/diag.js';
import { setupWindowDragPause } from './platform/window-drag.js';
import { installDxtSoftwareDecode } from './platform/textures-dxt.js';
import { setupStorageAccessCheck } from './platform/storage-access.js';
import { installLayoutDiagnostics } from './platform/layout.js';
import { loadMain } from './loader/decrypt-loader.js';

// Tauri v2 在 csp:null 时会拦截「页面加载阶段」的 IPC(fetch ipc://localhost),
// 见 tauri#14707 / #15216。因此凡会触发 invoke 的初始化(含游戏启动)一律推迟到
// load 之后的宏任务执行, 避开该阶段。
function whenPageReady(fn) {
  const run = () => setTimeout(fn, 0);
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
}

// ---- 立即执行(不触发 IPC) ----
preventViewportGestures(); // 手势/页面缩放拦截
installKeyboardListeners(); // 键盘监听
installPanelShortcut(); // 虚拟按键面板快捷键
installPanelResizeHook(); // 窗口/方向变化时重建面板
installPointerHandlers(); // 指针输入
installProtocolInterceptors(); // 虚拟路径协议拦截(Image/XHR/fetch/iframe)
installUmgrElc(); // window.umgr_elc
installNativeInput(); // kbd*/di8Kbd*/串口桩
installKeyPanelApi(); // window.umgKeyPanel
setupWindowDragPause(); // 拖动暂停 RAF
installDxtSoftwareDecode(); // DXT 软解

// ---- 页面加载完成后再执行(会触发 IPC 的部分) ----
whenPageReady(() => {
  installConsoleForwarding();
  installErrorDiagnostics(); // 包裹 umgr_elc.st(内部会 invoke('diag'))
  reportGlExtensionsNow();
  setupStorageAccessCheck();
  reportGlExtensionsDelayed(1500);
  loadMain(); // 解密并执行游戏前端(main.js.enc)
  installLayoutDiagnostics(); // 布局诊断(默认关闭, 见 localStorage.umg_layout_debug)

  // iOS 横屏: 启动阶段(方向/安全区未稳定)算出的缩放可能不准且后续不再重算。
  // 主动触发几次 resize, 让游戏按最终尺寸重算布局。
  let n = 0;
  const t = setInterval(() => {
    try {
      window.dispatchEvent(new Event('resize'));
    } catch (e) {}
    if (++n >= 4) clearInterval(t);
  }, 600);

});
