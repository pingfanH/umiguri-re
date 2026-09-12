// diag.js - 诊断失败加载
(function () {
  'use strict';
  function log(msg) {
    try {
      console.log('[DIAG]', msg);
      if (window.__TAURI__ && window.__TAURI__.core && window.__TAURI__.core.invoke) {
        window.__TAURI__.core.invoke('diag', { msg: String(msg) }).catch(function () {});
      }
    } catch (e) {}
  }
  window.addEventListener('error', (e) => log('JS ERROR ' + e.message + ' @ ' + (e.filename || '') + ':' + e.lineno));
  window.addEventListener('unhandledrejection', (e) => log('REJECTION ' + (e.reason && (e.reason.message || e.reason))));
  (function poll() {
    // 每秒采样: 若事件循环活着并发生新的 zu/sn/xl/_2,记录节流后的同步调用
    window.__diagCalls = window.__diagCalls || [];
    setTimeout(poll, 1000);
  })();
  const st = window.umgr_elc && window.umgr_elc.st;
  if (st) {
    const wrap = (name) => {
      const orig = st[name];
      if (typeof orig !== 'function') return;
      st[name] = function () {
        const p = arguments[0];
        // 调用即记录(节流: 仅记录不同 path 的首次调用)
        const key = name + ' ' + p;
        if (window.__diagSeen !== key) {
          window.__diagSeen = key;
          log('CALL ' + key);
        }
        const r = orig.apply(this, arguments);
        if (r && r.then) r.then(function (x) {
          const s = x && x.status;
          if (s === 0) log('OK ' + name + ' ' + p);
          else log('FAIL ' + name + ' ' + p);
        }, function (e) {
          log('THROW ' + name + ' ' + p + ' ' + (e && e.message));
        });
        return r;
      };
    };
    wrap('zu');
    wrap('sn');
    wrap('xl');
    wrap('_2');
  }
})();
