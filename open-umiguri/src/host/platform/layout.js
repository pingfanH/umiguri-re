// iOS(及一般情况)容器居中补偿。
//
// 游戏用 JS 给 #main_container 设 transform: scale(s) translate(..) 来做缩放+居中,
// 其基准是 document.body.clientWidth/Height。在 WKWebView 上这两个值可能因安全区
// 内缩而与可见视口不一致, 导致整体偏心(常见: 靠左/靠上)。虚拟键盘面板挂在容器内部,
// 因此也跟着偏。
//
// 这里不去猜游戏公式, 而是直接测量容器的渲染矩形, 计算它相对可见视口中心的偏移,
// 用 position:relative + left/top 补偿(容器因 transform 已是包含块, 不影响子元素锚定)。
export function installLayoutFix() {
  let timer = null;

  function visualViewportBox() {
    const vv = window.visualViewport;
    return vv
      ? { x: vv.offsetLeft, y: vv.offsetTop, w: vv.width, h: vv.height }
      : { x: 0, y: 0, w: window.innerWidth, h: window.innerHeight };
  }

  function fix() {
    const mc = document.getElementById('main_container');
    if (!mc) return;
    // 先清零上次补偿再测量
    mc.style.position = 'relative';
    mc.style.left = '0px';
    mc.style.top = '0px';
    const r = mc.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const v = visualViewportBox();
    const dx = v.x + v.w / 2 - (r.left + r.width / 2);
    const dy = v.y + v.h / 2 - (r.top + r.height / 2);
    if (Math.abs(dx) > 1) mc.style.left = Math.round(dx) + 'px';
    if (Math.abs(dy) > 1) mc.style.top = Math.round(dy) + 'px';
  }

  function schedule() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      try {
        fix();
      } catch (e) {}
    }, 150);
  }

  window.addEventListener('resize', schedule, { passive: true });
  window.addEventListener('orientationchange', schedule, { passive: true });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', schedule, { passive: true });
    window.visualViewport.addEventListener('scroll', schedule, { passive: true });
  }
  // 启动阶段尺寸/方向会变化几次, 多补几次
  [300, 800, 1500, 3000].forEach((t) => setTimeout(fix, t));

  function diag() {
    try {
      const mc = document.getElementById('main_container');
      const r = mc && mc.getBoundingClientRect();
      const v = visualViewportBox();
      console.error(
        '[umg][layout] ' +
          JSON.stringify({
            vp: [Math.round(v.w), Math.round(v.h)],
            off: [v.x, v.y],
            body: [document.body.clientWidth, document.body.clientHeight],
            inner: [innerWidth, innerHeight],
            dpr: devicePixelRatio,
            rect: r ? [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)] : null,
            mc: mc ? { left: mc.style.left, top: mc.style.top, transform: mc.style.transform } : null,
          })
      );
    } catch (e) {}
  }
  setTimeout(diag, 3200);
}
