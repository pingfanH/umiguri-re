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
import { installErrorDiagnostics, installConsoleForwarding, reportGlExtensionsNow, reportGlExtensionsDelayed, diagLog } from './core/diag.js';
import { prefetchTree, prefetchPacks } from './core/protocol.js';
import { setupMusicCache } from './core/music-cache.js';
import { installFullscreenGuard, setFullscreenDesired } from './platform/fullscreen.js';
import { setupHardware } from './bridge/hardware.js';
import { installTextureFilter } from './platform/texture-filter.js';
import { setupWindowDragPause } from './platform/window-drag.js';
import { installDxtSoftwareDecode } from './platform/textures-dxt.js';
import { setupStorageAccessCheck } from './platform/storage-access.js';
import { installLayoutDiagnostics } from './platform/layout.js';
import { loadMain } from './loader/decrypt-loader.js';
import { loadHostConfig } from './bridge/host-config.js';
import { applyHostConfig, handshake } from './bridge/handshake.js';
import { tryInvoke } from './core/invoke.js';
import { rebuildLaneMap } from './input/lanes.js';
import { setKeyLayoutFromFe } from './keypanel/config.js';
import { refreshKeyPanelLayout } from './keypanel/panel.js';

// Tauri v2 在 csp:null 时会拦截「页面加载阶段」的 IPC(fetch ipc://localhost),
// 见 tauri#14707 / #15216。因此凡会触发 invoke 的初始化(含游戏启动)一律推迟到
// load 之后的宏任务执行, 避开该阶段。
function whenPageReady(fn) {
  const run = () => setTimeout(fn, 0);
  if (document.readyState === 'complete') run();
  else window.addEventListener('load', run, { once: true });
}

// ---- 立即执行(不触发 IPC) ----
diagLog('[umg][nav] ' + location.href); // 埋点: 区分 ?fix(修复模式)/?errDisp(错误页)
preventViewportGestures(); // 手势/页面缩放拦截
installKeyboardListeners(); // 键盘监听
installPanelShortcut(); // 虚拟按键面板快捷键
installPanelResizeHook(); // 窗口/方向变化时重建面板
installFullscreenGuard(); // 不让 Esc 等退出全屏(掉出即恢复)
installPointerHandlers(); // 指针输入
installProtocolInterceptors(); // 虚拟路径协议拦截(Image/XHR/fetch/iframe)
installUmgrElc(); // window.umgr_elc
installNativeInput(); // kbd*/di8Kbd*/串口桩
installKeyPanelApi(); // window.umgKeyPanel
setupWindowDragPause(); // 拖动暂停 RAF
installDxtSoftwareDecode(); // DXT 软解

// ---- 页面加载完成后再执行(会触发 IPC 的部分) ----
whenPageReady(async () => {
  installConsoleForwarding();
  // 读取游戏自身配置(assets/core/config/*.json)并应用到握手/窗口
  let cfg = null;
  try {
    cfg = await loadHostConfig();
    applyHostConfig(cfg);
    if (cfg.windowMode || cfg.resolution) {
      setFullscreenDesired(cfg.windowMode === 'fullscreen');
      await tryInvoke('apply_window_config', { mode: cfg.windowMode, size: cfg.resolution }, false);
    }
    // 键位布局与档位映射统一以握手 fe 为准
    rebuildLaneMap(handshake.fe);
    setKeyLayoutFromFe(handshake.fe);
    refreshKeyPanelLayout();
    console.error('[umg][handshake] ' + JSON.stringify({
      ct: handshake.O.ct, B: handshake.O.B, p9: handshake.O.p9, I4: handshake.I4,
      fe: handshake.fe, R: handshake.R, j: handshake.j, M: handshake.M, u1: handshake.u1,
      windowMode: cfg.windowMode, Z: handshake.Z,
      // 诊断「糊/掉帧」用: dpr=1 说明整个窗口按 1x 渲染(会被系统放大 -> 糊)
      dpr: devicePixelRatio, win: innerWidth + 'x' + innerHeight,
      screen: screen.width + 'x' + screen.height,
    }));
  } catch (e) {}
  installErrorDiagnostics(); // 包裹 umgr_elc.st(内部会 invoke('diag'))
  // 帧率探针(每 3s): WebView 实际合成帧率, 用于判断「帧率低」是渲染还是逻辑
  (function fpsProbe() {
    let frames = 0;
    let t0 = performance.now();
    const tick = () => {
      frames++;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    let on = false;
    try {
      on = localStorage.getItem('umg_perf_debug') === '1';
    } catch (e) {}
    if (!on) return;
    setInterval(() => {
      const now = performance.now();
      const fps = (frames * 1000) / (now - t0);
      frames = 0;
      t0 = now;
      diagLog(`[umg][fps] ${fps.toFixed(1)} (dpr=${devicePixelRatio}, ${innerWidth}x${innerHeight})`);
    }, 3000);
  })();
  reportGlExtensionsNow();
  setupStorageAccessCheck();
  reportGlExtensionsDelayed(1500);
  // 纹理过滤(可选): 1x 资源非整数倍放大时 nearest 会锯齿, 可切 linear 对比
  try {
    installTextureFilter(cfg);
  } catch (e) {}

  // 手台 + LED: 先起 LED 服务端(游戏的 ledOutput 启动时就会连), 桌面默认自动探测手台
  try {
    await setupHardware(cfg);
  } catch (e) {
    diagLog('[umg][hw] 初始化失败: ' + ((e && e.message) || e));
  }

  // 批量预取: 一次 IPC 取回整棵子树, 消除逐文件往返延迟(单次往返 10~30ms, 启动约 300 次)。
  // 分两组:
  //   小数据树(曲库/角色/各种表, 几 MB): 启动前 await, 之后全部命中内存;
  //   启动热区(语言包内 UI/纹理/字体、core 纹理、UI 音效, 数十 MB): await 一次取回,
  //   上限内跳过超大文件(它们本来就必须读, 往返次数不多)。
  // /music 的批量预取顺带回带曲库签名(同一次遍历), 用于判断游戏自带的列表缓存是否失效
  let musicSig = null;
  try {
    const r = await prefetchTree('/music');
    musicSig = r && r.sig;
  } catch (e) {}
  try {
    await setupMusicCache('/music', musicSig);
  } catch (e) {}
  for (const root of ['/chara', '/skills', '/nameplates', '/titles', '/courses']) {
    try {
      await prefetchTree(root);
    } catch (e) {}
  }
  // 上限: 桌面内存宽裕, 把 >6MB 的大贴图/字体也一次带回(省掉它们的单次往返);
  // 移动端收紧, 避免几十 MB 常驻。
  const mobile = /Android|iPhone|iPad/i.test(navigator.userAgent);
  const caps = mobile ? { maxFile: 8 << 20, maxTotal: 48 << 20 } : { maxFile: 20 << 20, maxTotal: 112 << 20 };
  try {
    await prefetchPacks(caps);
  } catch (e) {}
  try {
    await prefetchTree('/textures', caps);
  } catch (e) {}

  loadMain(); // 解密并执行游戏前端(main.js.enc)

  // iOS 横屏: 启动阶段(方向/安全区未稳定)算出的缩放可能不准且后续不再重算。
  // 主动触发几次 resize, 让游戏按最终尺寸重算布局。
  let n = 0;
  const t = setInterval(() => {
    try {
      window.dispatchEvent(new Event('resize'));
    } catch (e) {}
    if (++n >= 4) clearInterval(t);
  }, 600);
  installLayoutDiagnostics(); // 布局诊断(默认关闭, 见 localStorage.umg_layout_debug)



});
