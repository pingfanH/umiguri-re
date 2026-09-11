// diag.js - 诊断资源加载失败
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
    ['sn', '_2', 'xl'].forEach(function (k) {
      const orig = st[k];
      if (typeof orig !== 'function') return;
      st[k] = function () {
        const p = arguments[0];
        const r = orig.apply(this, arguments);
        if (r && r.then) {
          r.then(function (x) {
            if (x && x.status !== 0) log('FAIL ' + k + ' ' + p + ' => ' + x.status);
          });
        }
        return r;
      };
    });
  }
})();
