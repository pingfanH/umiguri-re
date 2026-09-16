// [DIAG] 诊断: 同时输出到 console 与 Rust stderr(invoke('diag'))。
import { invoke } from './invoke.js';

export function diagLog(msg) {
  try {
    console.log('[DIAG]', msg);
    if (invoke) {
      invoke('diag', { msg: String(msg) }).catch(function () {});
    }
  } catch (e) {}
}

// 把 WebView 的 console(仅 [umg]/[DIAG]/error) 转发到 Rust stderr, 便于命令行抓日志。
export function installConsoleForwarding() {
  const T0 = performance.now();
  const forward = (msg) => {
    if (!invoke) return;
    try {
      invoke('diag', { msg: String(msg) }).catch(function () {});
    } catch (e) {}
  };
  const fmt = (args) => args.map((x) => (typeof x === 'string' ? x : (() => { try { return JSON.stringify(x); } catch (e) { return String(x); } })())).join(' ');
  const wrap = (name, always) => {
    const orig = console[name].bind(console);
    console[name] = function () {
      orig.apply(null, arguments);
      // 转发前只做「便宜的字符串检查」: 游戏会 console.log 巨大的对象(如整份乐谱),
      // 对它们 JSON.stringify 只为判断是否包含 [umg]/[DIAG] 是纯浪费(曲库大时非常明显)。
      if (!always) {
        let hit = false;
        for (let i = 0; i < arguments.length; i++) {
          const a = arguments[i];
          if (typeof a === 'string' && (a.indexOf('[umg]') >= 0 || a.indexOf('[DIAG]') >= 0)) {
            hit = true;
            break;
          }
        }
        if (!hit) return;
      }
      const m = fmt([].slice.call(arguments));
      forward('t+' + (performance.now() - T0).toFixed(0) + 'ms ' + name.toUpperCase() + ' ' + m);
    };
  };
  wrap('error', true);
  wrap('warn', true);
  wrap('log', false);
}

// 全局错误捕获 + 记录前端桥调用(来源 diag.js)。
// 需在 umgr_elc 定义之后调用(会包裹 st 的方法)。
export function installErrorDiagnostics() {
  window.addEventListener('error', (e) =>
    diagLog('JS ERROR ' + e.message + ' @ ' + (e.filename || '') + ':' + e.lineno)
  );
  window.addEventListener('unhandledrejection', (e) =>
    diagLog('REJECTION ' + (e.reason && (e.reason.message || e.reason)))
  );
  (function poll() {
    // NOTE: 原始逻辑为每秒采样,保留节流计时器;当前实现仅维持定时器。
    window.__diagCalls = window.__diagCalls || [];
    setTimeout(poll, 1000);
  })();

  // 逐调用埋点(每次 sn/xl/zu/_2 都 console + invoke('diag') = 2 次 IPC)开销可观:
  // 300+ 次调用 ≈ 600+ 次 IPC。默认关闭, 需要时 localStorage.umg_diag='1' 打开。
  let perCall = false;
  try {
    perCall = localStorage.getItem('umg_diag') === '1';
  } catch (e) {}
  if (perCall) diagLog('[umg][diag] 逐调用埋点已开启(umg_diag=1)');
  const st = perCall && window.umgr_elc && window.umgr_elc.st;
  if (st) {
    const wrap = (name) => {
      const orig = st[name];
      if (typeof orig !== 'function') return;
      st[name] = function () {
        const p = arguments[0];
        const key = name + ' ' + p;
        if (window.__diagSeen !== key) {
          window.__diagSeen = key;
          diagLog('CALL ' + key);
        }
        const t0 = performance.now();
        const r = orig.apply(this, arguments);
        if (r && r.then)
          r.then(
            function (x) {
              const ms = performance.now() - t0;
              if (ms >= 150) diagLog('[umg][slow] ' + key + ' ' + ms.toFixed(0) + 'ms');
              const s = x && x.status;
              if (s === 0) diagLog('OK ' + name + ' ' + p);
              else diagLog('FAIL ' + name + ' ' + p);
            },
            function (e) {
              diagLog('THROW ' + name + ' ' + p + ' ' + (e && e.message));
            }
          );
        return r;
      };
    };
    wrap('zu');
    wrap('sn');
    wrap('xl');
    wrap('_2');
  }
}

function compressedExtReport() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    const exts = gl ? gl.getSupportedExtensions() || [] : [];
    const comp = exts.filter((e) => /compress|s3tc|dxt|astc|etc|pvrtc|bptc/i.test(e));
    return { comp, version: gl ? gl.getParameter(gl.VERSION) : 'NO_GL', s3tc: !!(gl && gl.getExtension('WEBGL_compressed_texture_s3tc')) };
  } catch (e) {
    return { err: e && e.message };
  }
}

// 启动时立即报告(来源 diag.js,走 invoke('diag'))
export function reportGlExtensionsNow() {
  const r = compressedExtReport();
  if (r.err) return diagLog('GL_ERR ' + r.err);
  diagLog('GL_EXTS ' + r.comp.join(','));
  diagLog('GL_VER ' + r.version);
  diagLog('S3TC ' + (r.s3tc ? 'YES' : 'NO'));
}

// 延迟报告(来源 tauri-bridge.js,仅 console)
export function reportGlExtensionsDelayed(delayMs = 1500) {
  setTimeout(function () {
    const r = compressedExtReport();
    if (r.err) return console.log('[DIAG] GL_EXTS_ERR ' + r.err);
    console.log('[DIAG] GL_COMPRESSED_EXTS ' + r.comp.join(','));
    console.log('[DIAG] GL_VERSION ' + r.version);
    console.log('[DIAG] S3TC ' + (r.s3tc ? 'YES' : 'NO'));
  }, delayMs);
}
