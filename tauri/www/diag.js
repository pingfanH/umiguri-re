// diag.js - 诊断失败加载
(function () {
  'use strict';
  function log(msg) {
    try {
      console.log('[DIAG]', msg);
      if (window.__TAURI__ && window.__TAURI__.invoke) {
        window.__TAURI__.invoke('diag', { msg: String(msg) }).catch(function () {});
      }
    } catch (e) {}
  }
  const st = window.umgr_elc && window.umgr_elc.st;
  if (st) {
    const osn = st.sn;
    st.sn = function () {
      const p = arguments[0];
      const r = osn.apply(this, arguments);
      if (r && r.then) r.then(function (x) { if (x.status !== 0) log('FAIL sn ' + p); });
      return r;
    };
  }
})();
