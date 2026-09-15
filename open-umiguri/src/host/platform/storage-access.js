// 「所有文件访问」权限检查。
// 未授予 MANAGE_EXTERNAL_STORAGE 时, 系统会在 readdir 中隐藏非本应用归属的
// 目录条目: 用户拷进 Documents/UMIGURI 的补丁文件夹里, 文件能按已知路径打开,
// 但目录列举为空 → 游戏扫描不到追加数据。
import { invoke } from '../core/invoke.js';

export function setupStorageAccessCheck() {
  if (!invoke) return;
  let banner = null;
  let pollTimer = null;

  function stopPolling() {
    if (pollTimer) {
      clearInterval(pollTimer);
      pollTimer = null;
    }
  }
  async function doRestart() {
    stopPolling();
    try {
      const r = await invoke('restart_app_cmd');
      if (!r) location.reload();
    } catch (e) {
      location.reload();
    }
  }
  function startPolling() {
    if (pollTimer) return;
    // 不依赖 focus/visibility 事件(从系统设置返回时不一定触发), 直接轮询
    pollTimer = setInterval(async function () {
      const ok = await check();
      if (ok) doRestart();
    }, 800);
  }
  function showBanner() {
    if (banner || document.getElementById('ugv_perm')) return;
    banner = document.createElement('div');
    banner.id = 'ugv_perm';
    banner.style.cssText =
      'position:fixed;left:50%;top:12px;transform:translateX(-50%);z-index:100003;' +
      'background:rgba(20,20,20,0.92);border:1px solid rgba(255,80,80,0.8);border-radius:8px;' +
      'padding:10px 14px;color:#fff;font:14px/1.5 system-ui;max-width:80vw;pointer-events:auto;' +
      'user-select:none;-webkit-user-select:none;';
    const txt = document.createElement('div');
    txt.textContent = '需要「所有文件访问」权限, 否则读取不到 Documents/UMIGURI 下的补丁数据 (目录列举为空)。授权后返回将自动重启。';
    const btn = document.createElement('button');
    btn.textContent = '去授权';
    btn.style.cssText =
      'margin-top:8px;padding:6px 14px;background:#2d6cdf;color:#fff;border:none;border-radius:5px;' +
      'font:14px system-ui;cursor:pointer;pointer-events:auto;';
    btn.addEventListener('click', function () {
      invoke('open_storage_access_settings').catch(function () {});
    });
    banner.appendChild(txt);
    banner.appendChild(btn);
    document.body.appendChild(banner);
    startPolling();
  }
  async function check() {
    try {
      const ok = await invoke('storage_access');
      if (ok) {
        stopPolling();
        if (banner) {
          banner.remove();
          banner = null;
        }
        return true;
      }
      showBanner();
      return false;
    } catch (e) {
      return true; // 桌面端无此命令
    }
  }
  check();
  window.addEventListener('focus', async function () {
    const wasMissing = !!banner;
    const ok = await check();
    if (wasMissing && ok) doRestart();
  });
  document.addEventListener('visibilitychange', async function () {
    if (document.visibilityState !== 'visible') return;
    const wasMissing = !!banner;
    const ok = await check();
    if (wasMissing && ok) doRestart();
  });
  window.umgStorageAccess = { check: check, granted: check };
}
