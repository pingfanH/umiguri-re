// 移动端/桌面: 禁用双指缩放 / 页面滑动拖拽 / 双击缩放 / Ctrl+滚轮缩放。
export function preventViewportGestures() {
  const stop = (e) => {
    if (e.cancelable) e.preventDefault();
  };
  // iOS 手势缩放
  ['gesturestart', 'gesturechange', 'gestureend'].forEach((t) =>
    document.addEventListener(t, stop, { passive: false })
  );
  // 触摸拖动/多指缩放: 一律阻止浏览器默认(滚动、缩放)行为
  document.addEventListener('touchmove', stop, { passive: false });
  // 双击缩放
  let lastTouchEnd = 0;
  document.addEventListener(
    'touchend',
    (e) => {
      const now = Date.now();
      if (now - lastTouchEnd < 300 && e.touches.length === 0) stop(e);
      lastTouchEnd = now;
    },
    { passive: false }
  );
  // 桌面/触控板 Ctrl+滚轮、Ctrl +/- 缩放
  window.addEventListener('wheel', (e) => { if (e.ctrlKey) stop(e); }, { passive: false });
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && ['+', '-', '=', '0'].includes(e.key)) stop(e);
  });
}
