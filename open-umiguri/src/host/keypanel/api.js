// 虚拟按键参数 API: 供游戏内「测试菜单」调用。
import { PANEL_DEFAULTS, EDITOR_ROWS, panelCfg, savePanelCfg } from './config.js';
import { ensureKeyPanel, isPanelBuilt } from './panel.js';
import {
  openKeyPanelEditor,
  closeKeyPanelEditor,
  isEditorOpen,
  refreshEditor,
  ensureGuide,
  clearHits,
  setSettingsActive,
  setNativeSettings,
  setGuidePos,
  setRows,
  clearRows,
} from './editor.js';

export const keyPanelApi = {
  defaults() {
    return Object.assign({}, PANEL_DEFAULTS);
  },
  get() {
    return Object.assign({}, panelCfg);
  },
  set(patch) {
    for (const k of Object.keys(patch || {})) {
      if (k in PANEL_DEFAULTS) panelCfg[k] = patch[k];
    }
    savePanelCfg();
    ensureKeyPanel(); // 无条件重建, 保证参数调整立即生效
    refreshEditor();
    return Object.assign({}, panelCfg);
  },
  reset() {
    return keyPanelApi.set(Object.assign({}, PANEL_DEFAULTS));
  },
  radius() {
    return panelCfg.radius;
  },
  setRadius(px) {
    return keyPanelApi.set({ radius: Number(px) }).radius;
  },
  openEditor() {
    openKeyPanelEditor();
  },
  closeEditor() {
    closeKeyPanelEditor();
  },
  isEditorOpen() {
    return isEditorOpen();
  },
  // 原生设置页(游戏测试菜单)进入/离开: 只显示白色参考圆 + 命中可视化
  settingsBegin() {
    setNativeSettings(true);
    setSettingsActive(true);
    ensureGuide(true);
  },
  setViz(on) {
    return keyPanelApi.set({ showHit: !!on }).showHit;
  },
  setLanes(on) {
    return keyPanelApi.set({ showLanes: !!on }).showLanes;
  },
  // 由游戏传入「触发距离」行的容器坐标, 用于把白色参考圆摆到该文字右边
  setGuidePos(x, y, w, h) {
    return setGuidePos(x, y, w, h);
  },
  settingsEnd() {
    setNativeSettings(false);
    setSettingsActive(false);
    clearHits();
    ensureGuide(false);
    clearRows();
  },
  // 游戏上报设置页各行坐标与当前选中行
  setRows(rows, index) {
    return setRows(rows, index);
  },
  // 按步长循环调整某项(带 min/max 环绕), 供原生菜单的「决定」键调用
  cycle(key, dir) {
    const row = EDITOR_ROWS.find((r) => r.key === key);
    if (!row) return null;
    const step = row.step * (dir < 0 ? -1 : 1);
    let v = Number(panelCfg[key]) + step;
    if (v > row.max + 1e-9) v = row.min;
    if (v < row.min - 1e-9) v = row.max;
    return keyPanelApi.set({ [key]: +v.toFixed(3) })[key];
  },
};

export function installKeyPanelApi() {
  window.umgKeyPanel = keyPanelApi;
}
