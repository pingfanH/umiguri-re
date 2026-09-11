// diag.js - 诊断脚本: 验证 Tauri 桥接 + 解密 + 游戏加载
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

  window.addEventListener('error', function (e) {
    log('WINDOW_ERROR: ' + (e.message || e.error) + ' @ ' + (e.filename || '') + ':' + (e.lineno || ''));
  });
  window.addEventListener('unhandledrejection', function (e) {
    log('UNHANDLED_REJECTION: ' + (e.reason && e.reason.message ? e.reason.message : e.reason));
  });

  log('=== DIAG START ===');
  log('__TAURI__ type: ' + typeof window.__TAURI__ + ', invoke: ' + (window.__TAURI__ ? typeof window.__TAURI__.invoke : 'n/a'));

  window.addEventListener('load', async function () {
    log('=== DIAG onload ===');
    if (window.__TAURI__ && window.__TAURI__.invoke) {
      try {
        var hs = await window.__TAURI__.invoke('handshake');
        log('handshake OK: ' + JSON.stringify(hs).slice(0, 80));
      } catch (e) { log('handshake ERR: ' + e); }
    }
    log('umgr_elc type: ' + typeof window.umgr_elc);
    if (window.umgr_elc && window.umgr_elc.st) {
      try {
        var r = await window.umgr_elc.st.zu('/una/');
        log('fs_list /una/ status=' + r.status + ' count=' + (r.data ? r.data.length : 0));
      } catch (e) { log('fs_list ERR: ' + e); }
    }
    try {
      var resp = await fetch('main.js.enc');
      var buf = await resp.arrayBuffer();
      log('fetch main.js.enc: status=' + resp.status + ' bytes=' + buf.byteLength);
    } catch (e) { log('fetch main.js.enc ERR: ' + e); }

    // 延迟检查游戏渲染
    setTimeout(function () {
      var canvas = document.querySelectorAll('canvas');
      var container = document.getElementById('main_container');
      log('=== DIAG render check (5s) ===');
      log('canvas count: ' + canvas.length);
      if (canvas.length) {
        log('canvas[0] size: ' + canvas[0].width + 'x' + canvas[0].height);
      }
      log('main_container children: ' + (container ? container.children.length : -1));
      log('body innerHTML len: ' + document.body.innerHTML.length);
      log('=== DIAG END ===');
    }, 5000);
  });
})();
