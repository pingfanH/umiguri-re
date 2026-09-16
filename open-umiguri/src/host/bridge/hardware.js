// 手台(串口控制器) + LED 控制桥。Rust 实现在 src-tauri/src/hardware/(移植自 chu2board)。
//
//   - 输入: Rust 端轮询手台(0xB1, 32 触摸 + 6 air), 有变化时发 `umg-lanes` 事件;
//     这里直接写进游戏每帧读取的 window.__umgLanes, 不经过键位映射。
//   - 灯光: Rust 端起 WebSocket 服务端(游戏自带 ledOutput 会连 ws://localhost:<port>),
//     收到 SetLED 后转成手台 0xB2 帧写串口。
import { tryInvoke } from '../core/invoke.js';
import { diagLog } from '../core/diag.js';
import { handshake } from './handshake.js';

const IS_MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

let lastLanes = '';

function applyLanes(payload) {
  const arr = window.__umgLanes;
  if (!arr || !payload) return;
  const n = Math.min(arr.length, payload.length);
  for (let i = 0; i < n; i++) arr[i] = payload[i] ? 1 : 0;
  // 便于确认手台是否真的在喂档位(默认开; localStorage.umg_hw_debug='0' 可关)
  let dbg = true;
  try {
    dbg = localStorage.getItem('umg_hw_debug') !== '0';
  } catch (e) {}
  if (!dbg) return;
  let s = '';
  for (let i = 0; i < n; i++) if (payload[i]) s += (s ? ',' : '') + i;
  if (s !== lastLanes) {
    lastLanes = s;
    diagLog('[umg][hw] lanes=[' + s + ']');
  }
}

function installListeners() {
  const ev = window.__TAURI__ && window.__TAURI__.event;
  if (!ev || !ev.listen) return;
  ev.listen('umg-lanes', (e) => applyLanes(e && e.payload)).catch(() => {});
  ev.listen('umg-hw-status', (e) => diagLog('[umg][hw] ' + JSON.stringify(e && e.payload))).catch(() => {});
}

export function installHardwareApi() {
  window.umgHardware = {
    status: () => tryInvoke('hw_status', {}, null),
    ports: () => tryInvoke('hw_list_ports', {}, []),
    connect: (port) => tryInvoke('hw_connect', { port: port || null }, null),
    disconnect: () => tryInvoke('hw_disconnect', {}, null),
    init: (opts) => tryInvoke('hw_init', opts || {}, null),
  };
}

// 启动时接入: 起 LED 服务端(必需, 游戏随后会连), 桌面默认自动探测手台。
export async function setupHardware(cfg) {
  if (!(window.__TAURI__ && window.__TAURI__.core)) {
    diagLog('[umg][hw] 无 Tauri 环境, 跳过硬件的初始化');
    return;
  }
  installListeners();
  installHardwareApi();
  const hw = (cfg && cfg.hardware) || {};
  const ledPort = (cfg && cfg.ledPort) || handshake.R || 8090;
  const autoConnect = hw.autoConnect === undefined ? !IS_MOBILE : !!hw.autoConnect;
  const ok = await tryInvoke(
    'hw_init',
    { ledPort, ledOrder: hw.ledOrder || null, autoConnect },
    null
  );
  // 指定端口(如 /dev/cu.usbmodem103 或 COM3)时显式连接, 否则走自动探测
  if (hw.port) {
    const st = await tryInvoke('hw_connect', { port: hw.port }, null);
    diagLog('[umg][hw] 指定端口连接: ' + JSON.stringify(st));
  }
  diagLog(
    `[umg][hw] init led=${ledPort} autoConnect=${autoConnect} ${ok ? 'ok' : 'led 服务端未启动'}`
  );
}
