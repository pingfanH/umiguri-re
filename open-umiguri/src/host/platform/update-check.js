// 更新检查: 启动时从远程拉取 umgr-check-update(JSON), 有新版本则弹提示。
// 清单格式(与上游一致):
//   { "version": "2.0.3", "date": "...", "description": "更新日志…", "url": "下载/说明链接" }
// 提示界面与暂停菜单同款: 选项在上方(可触摸), 底部一排 ↓ ↑ ← → 決定 按键提示,
// 切换同样按虚拟键盘档位(与测试菜单 SliderZone 一致)。
import { invoke } from '../core/invoke.js';
import { diagLog } from '../core/diag.js';
import { hostConfig } from '../bridge/host-config.js';
import { addLaneTapHandler, setInputSuppressed, releaseAllTouch } from '../input/lanes.js';
import { addKeyInterceptor } from '../input/keyboard.js';
import { createHintRow, showHintRow, laneAction } from '../keypanel/navhint.js';
// 未在 game.json 配 system.update_url 时的默认清单地址
const DEFAULT_URL = 'https://phira.pingfanh.top/umgr-check-update';
const FONT = 'font-family:system-ui,-apple-system,"Segoe UI",sans-serif;';

// 「忽略此版本」只在本次网页会话内有效(不写 localStorage):
// 刷新/重启网页后会再次提示, 直到真的更新到该版本为止。
let ignoredVersionSession = '';

let overlay = null;
let hintBox = null;
let open = false;
let items = [];
let sel = 0;
let handlersInstalled = false;

function parseVersion(v) {
  return String(v || '')
    .split('.')
    .map((n) => parseInt(n, 10) || 0);
}

function isNewer(remote, current) {
  const a = parseVersion(remote);
  const b = parseVersion(current);
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) {
    const x = a[i] || 0;
    const y = b[i] || 0;
    if (x !== y) return x > y;
  }
  return false;
}

function ignoredVersion() {
  return ignoredVersionSession;
}

function ignoreVersion(v) {
  ignoredVersionSession = String(v || '');
}

function openUrl(url) {
  if (!url) return;
  invoke('open_url', { url: String(url) }).catch(() => {});
}

function baseBtnStyle(el, primary) {
  el.style.cssText =
    'display:flex;align-items:center;justify-content:center;' +
    'min-width:7em;padding:0.75em 2em;margin:0.3em;border-radius:0.6em;' +
    'color:#fff;' + FONT + 'font-weight:600;font-size:clamp(16px,3.4vmin,30px);line-height:1.2;' +
    'text-align:center;cursor:pointer;touch-action:none;box-sizing:border-box;' +
    'user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;' +
    'background:rgba(255,255,255,' + (primary ? '0.22' : '0.1') + ');' +
    'border:1px solid rgba(255,255,255,' + (primary ? '0.6' : '0.35') + ');';
}

function paint(el) {
  const primary = !!el.__primary;
  const on = !!el.__sel;
  el.style.background = 'rgba(255,255,255,' + (on ? (primary ? 0.4 : 0.28) : (primary ? 0.22 : 0.1)) + ')';
  el.style.borderColor = 'rgba(255,255,255,' + (on ? 0.9 : (primary ? 0.6 : 0.35)) + ')';
}

function mkBtn(label, primary, onTap) {
  const b = document.createElement('div');
  b.textContent = label;
  b.__primary = !!primary;
  b.__sel = false;
  b.__tap = onTap || null;
  baseBtnStyle(b, primary);
  paint(b);
  b.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (b.__tap) b.__tap();
  });
  return b;
}

function renderSel() {
  for (const el of items) {
    el.__sel = false;
    paint(el);
  }
  const it = items[sel];
  if (it) {
    it.__sel = true;
    paint(it);
  }
}

function moveSel(d) {
  if (!items.length) return;
  sel = (sel + d + items.length) % items.length;
  renderSel();
}

function activateSel() {
  const it = items[sel];
  if (it && it.__tap) it.__tap();
}

function closeDialog() {
  open = false;
  setInputSuppressed(false);
  if (overlay) overlay.style.display = 'none';
  showHintRow(hintBox, false);
}

function onLaneTap(lane) {
  if (!open) return;
  const a = laneAction(lane);
  if (!a) return;
  if (a === 'ok') activateSel();
  else if (a === 'next') moveSel(1);
  else moveSel(-1);
}

function interceptKey(vk, e) {
  if (!open) return false;
  // 弹窗独占输入: 所有按键都不给游戏(游戏收不到 keyState), 这里只做导航
  if (e && e.cancelable) e.preventDefault();
  if (e && e.repeat) return true;
  if (vk === 27) { closeDialog(); return true; } // Esc = 关闭
  if (vk === 13) { activateSel(); return true; }
  if (vk === 38 || vk === 37) { moveSel(-1); return true; }
  if (vk === 40 || vk === 39) { moveSel(1); return true; }
  return true; // 其余按键也吞掉
}

function ensureHandlers() {
  if (handlersInstalled) return;
  handlersInstalled = true;
  addKeyInterceptor(interceptKey);
  addLaneTapHandler(onLaneTap);
}

function showDialog(info) {
  ensureHandlers();
  const box = document.createElement('div');
  box.style.cssText =
    'display:flex;flex-direction:column;align-items:center;max-width:min(680px,86vw);max-height:60vh;overflow:auto;' +
    'padding:clamp(20px,4vmin,40px);border-radius:1em;background:rgba(18,18,18,0.96);' +
    'border:1px solid rgba(255,255,255,0.18);box-shadow:0 0 2em rgba(0,0,0,0.6);pointer-events:auto;';

  const title = document.createElement('div');
  title.textContent = '发现新版本 ' + (info.version || '');
  title.style.cssText = FONT + 'font-weight:700;font-size:clamp(18px,3.6vmin,30px);margin-bottom:0.3em;';
  box.appendChild(title);

  if (info.date) {
    const date = document.createElement('div');
    date.textContent = info.date;
    date.style.cssText = 'font-size:clamp(12px,2vmin,16px);opacity:.6;margin-bottom:0.8em;';
    box.appendChild(date);
  }

  const desc = document.createElement('div');
  desc.textContent = info.description || '';
  desc.style.cssText =
    'white-space:pre-line;font-size:clamp(14px,2.4vmin,18px);line-height:1.5;margin-bottom:1em;opacity:.95;';
  box.appendChild(desc);

  items = [];
  sel = 0;
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;';
  const goBtn = mkBtn('前往更新', true, () => { openUrl(info.url); closeDialog(); });
  const ignoreBtn = mkBtn('忽略此版本', false, () => { ignoreVersion(info.version); closeDialog(); });
  const closeBtn = mkBtn('关闭', false, () => closeDialog());
  row.appendChild(goBtn);
  row.appendChild(ignoreBtn);
  row.appendChild(closeBtn);
  box.appendChild(row);
  items.push(goBtn, ignoreBtn, closeBtn);

  // 遮罩置于虚拟键盘之上, 但根节点 pointer-events:none: 弹窗内容可点(touch),
  // 根节点透明处的触摸会穿透到下层虚拟键盘 —— 因此底部按键提示/档位切换照常可用。
  overlay = document.createElement('div');
  overlay.id = 'umg_update';
  overlay.style.cssText =
    'position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;' +
    'box-sizing:border-box;padding-bottom:38vh;background:rgba(0,0,0,0.55);color:#fff;' + FONT +
    'pointer-events:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;';
  overlay.appendChild(box);

  hintBox = createHintRow();
  overlay.appendChild(hintBox);
  document.body.appendChild(overlay);
  showHintRow(hintBox, true);
  renderSel();
  setInputSuppressed(true); // 弹窗独占输入: 游戏收不到键盘/档位/触摸
  releaseAllTouch(); // 清掉弹窗打开前按住的档位
  open = true;
}

// 启动后延迟调用; 失败静默(不影响游戏启动)
export async function checkUpdate() {
  try {
    const url = (hostConfig && hostConfig.updateUrl) || DEFAULT_URL;
    if (!url) return;
    // 由 Rust 侧拉取(不受 WebView 跨源/CORS 限制)。命令不可用(旧二进制)才退回 WebView fetch。
    let info = null;
    if (invoke) {
      try {
        const text = await invoke('fetch_text', { url });
        if (typeof text === 'string' && text.length) info = JSON.parse(text);
        else diagLog('[umg][update] fetch_text 返回空');
      } catch (e) {
        diagLog('[umg][update] fetch_text 失败: ' + ((e && e.message) || e));
      }
    }
    if (!info) {
      const bust = url + (url.indexOf('?') >= 0 ? '&' : '?') + 't=' + Date.now();
      const resp = await fetch(bust);
      if (!resp.ok) {
        diagLog('[umg][update] HTTP ' + resp.status + ' ' + url);
        return;
      }
      info = await resp.json();
    }
    if (!info || !info.version) return;
    const current = await invoke('app_version').catch(() => null);
    if (ignoredVersion() === String(info.version)) return;
    if (!isNewer(info.version, current)) return;
    diagLog('[umg][update] 有新版本 ' + info.version + ' (当前 ' + current + ')');
    showDialog(info);
  } catch (e) {
    diagLog('[umg][update] 检查失败: ' + ((e && e.message) || e));
  }
}
