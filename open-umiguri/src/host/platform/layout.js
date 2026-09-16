// 布局诊断(默认关闭, localStorage.umg_layout_debug='1' 时输出)。
//
// 注意: 这里【不做】容器位置补偿。游戏自身会用
//   scale(s) translate((W-1920*s)/2s, (H-1080*s)/2s)
// 在它的视口里居中; 之前尝试"补偿"时, 用了 transform 尚未应用时的过期测量值,
// 反而把画面推偏。iOS 上的偏心是 WKWebView 视口被安全区内缩导致(原生解决),
// JS 无法也不应补偿。
export function installLayoutDiagnostics() {
  function readEnvInsets() {
    const probe = document.createElement('div');
    probe.style.cssText =
      'position:fixed;left:0;top:0;visibility:hidden;width:0;height:0;' +
      'padding-top:env(safe-area-inset-top);padding-right:env(safe-area-inset-right);' +
      'padding-bottom:env(safe-area-inset-bottom);padding-left:env(safe-area-inset-left);';
    document.body.appendChild(probe);
    const cs = getComputedStyle(probe);
    const v = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].join(',');
    probe.remove();
    return v;
  }

  function diag() {
    try {
      let dbg = false;
      try {
        dbg = localStorage.getItem('umg_layout_debug') === '1';
      } catch (e) {}
      if (!dbg) return;
      const mc = document.getElementById('main_container');
      const r = mc && mc.getBoundingClientRect();
      console.error(
        '[umg][layout] ' +
          JSON.stringify({
            vp: [innerWidth, innerHeight],
            body: [document.body.clientWidth, document.body.clientHeight],
            screen: [screen.width, screen.height],
            dpr: devicePixelRatio,
            orient: (screen.orientation && screen.orientation.type) || '',
            safe: readEnvInsets(),
            dpr2: window.devicePixelRatio,
            rect: r ? [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)] : null,
            mc: mc ? { transform: mc.style.transform } : null,
            native: window.__umgNative || null,
          })
      );
    } catch (e) {}
  }
  setInterval(diag, 2000);
  // 临时: 回报游戏侧测试菜单的输入位
  setInterval(() => {
    try { if (window.__umgTu) console.error('[umg][tu] ' + JSON.stringify(window.__umgTu)); } catch (e) {}
  }, 1000);
}
