// 虚拟按键参数(由测试菜单的编辑器实时调整, 持久化到 localStorage)。
// 单位说明:
//   容器 px —— 面板在缩放过的 #main_container 内, 桌面 1:1, 手机约 0.33(1920 宽缩到 ~630)
//   视口 px —— 触摸坐标(getBoundingClientRect / clientX), 与屏幕像素一致

export const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 共享默认值(两端一致的部分)
const BASE_DEFAULTS = {
  rowH: 192, // 按钮高度
  colGap: 0, // 每列间距(整体宽度固定 -> 间距变大则按钮变窄)
  airH: 64, // air 条高度
  airGap: 16, // air 区与按键区的距离: 0 = 紧贴
  airRowGap: 0, // air 各判定区(横条)之间的间距
  bottomInset: 30, // 按键区距屏幕底边距离(视口 px)
  alpha: 1, // 整体不透明度
  label: 0.6, // 字色透明度
  bg: 0.08, // 面板底色透明度
  showGuide: true, // 显示「参考圆」
  showHit: false, // 高亮「范围触发」实际命中的键
  showLanes: true, // 显示虚拟键盘主体(air 条 + 32 键)
};

// 移动端默认值(覆盖/新增 BASE_DEFAULTS 的项)
const MOBILE_DEFAULTS = {
  radius: 10, // 范围触发圆半径(视口 px), 触屏手指更粗 -> 更小
  bottomInset: 36, // 避开 Android 手势条
  airGap: 0,
};

// 桌面端默认值
const DESKTOP_DEFAULTS = {
  radius: 25,
  showLanes: false,
  airRowGap: 10,
};

// 最终默认值(按平台合并)
export const PANEL_DEFAULTS = Object.assign({}, BASE_DEFAULTS, IS_MOBILE ? MOBILE_DEFAULTS : DESKTOP_DEFAULTS);

// 持久化键按平台分开(互不干扰); 首次读不到时兼容旧的 umg_kbd_cfg
export const CFG_STORAGE_KEY = IS_MOBILE ? 'umg_kbd_cfg_mobile' : 'umg_kbd_cfg_desktop';
const LEGACY_CFG_KEY = 'umg_kbd_cfg';

export const panelCfg = Object.assign({}, PANEL_DEFAULTS);
try {
  const raw = localStorage.getItem(CFG_STORAGE_KEY) || localStorage.getItem(LEGACY_CFG_KEY);
  if (raw) Object.assign(panelCfg, JSON.parse(raw));
} catch (e) {}

export function savePanelCfg() {
  try {
    localStorage.setItem(CFG_STORAGE_KEY, JSON.stringify(panelCfg));
  } catch (e) {}
}

export function touchRadius() {
  return panelCfg.radius;
}

// 游戏的设计空间(排版坐标系)。默认 1920x1080; 实验开关 system.design_resolution
// 可把它改成屏幕尺寸(见 host/main.js 写入的 window.__umgDesignW/H)。
// 面板的尺寸参数都按「设计单位」配置, 因此换算时必须除以当前设计空间宽度,
// 否则设计空间一变(如 2560), 面板就会显得变小。
export function designSize() {
  const w = window.__umgDesignW || 1920;
  const h = window.__umgDesignH || 1080;
  return [w > 0 ? w : 1920, h > 0 ? h : 1080];
}

// 与游戏一致的视口缩放比: 游戏布局用 min(body宽/设计宽, body高/设计高)。
export function viewportScale() {
  const [dw, dh] = designSize();
  const w = window.innerWidth || dw;
  const h = window.innerHeight || dh;
  const k = Math.min(w / dw, h / dh);
  return k > 0 ? k : 1;
}

// #main_container 的缩放比(1 设计单位 = 多少视口 px)
export function panelScale() {
  const [dw] = designSize();
  const mc = document.getElementById('main_container');
  const r = mc ? mc.getBoundingClientRect() : null;
  return r && r.width ? r.width / dw : 1;
}

export const EDITOR_ROWS = [
  { key: 'rowH', label: '按钮高度', min: 40, max: 400, step: 8 },
  { key: 'colGap', label: '每列间距', min: -60, max: 60, step: 2 },
  { key: 'airH', label: 'air 条高度', min: 16, max: 140, step: 4 },
  { key: 'airGap', label: 'air 距底边', min: -200, max: 300, step: 4 },
  { key: 'airRowGap', label: 'air 间距', min: -100, max: 100, step: 2 },
  { key: 'bottomInset', label: '距屏幕底边', min: -300, max: 400, step: 4, unit: 'px' },
  { key: 'radius', label: '范围触发半径', min: 0, max: 60, step: 1, unit: 'px' },
  { key: 'showLanes', label: '显示虚拟键盘(0/1)', min: 0, max: 1, step: 1 },
  { key: 'alpha', label: '整体不透明度', min: 0.2, max: 1, step: 0.05, fixed: 2 },
  { key: 'bg', label: '底色透明度', min: 0, max: 0.4, step: 0.02, fixed: 2 },
  { key: 'label', label: '字色透明度', min: 0.2, max: 1, step: 0.05, fixed: 2 },
];

// 测试菜单白色 UI 的触摸区(容器坐标) -> 菜单输入位
//   ↓(320) ↑(560) 左(800) 右(1040) 決定(1280), 每个 240 宽, y=950..1060
export const PAD_RECTS = [
  { x: 320, w: 240, bit: 1 }, // ↓
  { x: 560, w: 240, bit: 2 }, // ↑
  { x: 800, w: 240, bit: 8 }, // ← 数值 −
  { x: 1040, w: 240, bit: 16 }, // → 数值 +
  { x: 1280, w: 320, bit: 536870912 }, // Service(決定)
];

// 主键布局(音游 16 档: 每档两个键 —— 上排 front 字母, 下排 back 数字/符号)
//   来源: 握手 fe(38 个输入槽)。主键 32 个按「每档两个键」交替排列:
//     fe[2i]   = 第 i 档的上排键(字母)
//     fe[2i+1] = 第 i 档的下排键(数字/符号)
//     fe[32..37] = air 6 键
//   档位序号 = fe 中字符位置(与游戏 inputModule 的 laneVk/laneState 一致)。
//   ⚠ 不能按「前 16 / 后 16」连续切分: 那样上排会显示成 A 1 B 2 C 3 …(读配置后按键错位)。
export const DEFAULT_FE = 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY';
function splitFe(fe) {
  const c = String(fe).split('');
  if (c.length !== 38) return null;
  const front = [];
  const back = [];
  for (let i = 0; i < 32; i += 2) {
    front.push(c[i]);
    back.push(c[i + 1]);
  }
  return { front, back, air: c.slice(32, 38) };
}
let keyLayout = splitFe(DEFAULT_FE) || { front: [], back: [], air: [] };
export function setKeyLayoutFromFe(fe) {
  const l = typeof fe === 'string' ? splitFe(fe) : null;
  if (l) keyLayout = l;
  return keyLayout;
}
export function getKeyLayout() {
  return keyLayout;
}
