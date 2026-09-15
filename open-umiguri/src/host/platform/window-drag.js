// 窗口拖动时暂停渲染,缓解 WebView2 拖动卡顿。
export function setupWindowDragPause() {
  if (window.__TAURI__ && window.__TAURI__.event && window.__TAURI__.event.listen) {
    let moving = false;
    const pending = [];
    const realRAF = window.requestAnimationFrame.bind(window);
    window.__TAURI__.event.listen('umg-moving', function (e) {
      moving = !!e.payload;
      if (!moving) {
        // 恢复: 触发积压的 RAF
        const q = pending.splice(0);
        for (const cb of q) realRAF(cb);
      }
    });
    window.requestAnimationFrame = function (cb) {
      if (moving) {
        pending.push(cb);
        return 0;
      }
      return realRAF(cb);
    };
  }
}
