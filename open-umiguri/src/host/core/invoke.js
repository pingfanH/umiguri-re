// Tauri invoke 封装。Tauri v2: core API 在 window.__TAURI__.core 下。

export const invoke =
  window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.invoke
    ? window.__TAURI__.core.invoke
    : undefined;

if (!invoke) {
  console.error('[tauri-bridge] window.__TAURI__.core.invoke 不可用');
}

// 带兜底的调用: 失败时返回 fallback 而不是抛出(游戏桥大量使用 status=-1 语义)。
export async function tryInvoke(cmd, args, fallback) {
  if (!invoke) return fallback;
  try {
    return await invoke(cmd, args);
  } catch (e) {
    return fallback;
  }
}
