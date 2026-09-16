// 虚拟按键参数(由测试菜单的编辑器实时调整, 持久化到 localStorage)。
// 单位说明:
//   容器 px —— 面板在缩放过的 #main_container 内, 桌面 1:1, 手机约 0.33(1920 宽缩到 ~630)
//   视口 px —— 触摸坐标(getBoundingClientRect / clientX), 与屏幕像素一致

const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export const PANEL_DEFAULTS = {
  rowH: 192, // 按钮高度
  colGap: 0, // 每列间距(整体宽度固定 -> 间距变大则按钮变窄)
  airH: 64, // air 条高度
  airGap: 16, // air 区与按键区(button)的距离: 0 = 紧贴
  airRowGap: 0, // air 各判定区(横条)之间的间距
  bottomInset: 30, // 按键区距屏幕底边距离(视口 px, 用于避开手势条)
  radius: IS_MOBILE ? 10 : 25, // 范围触发圆半径(视口 px)
  alpha: 1, // 整体不透明度
  label: 0.6, // 字色透明度
  bg: 0.08, // 面板底色透明度
  showGuide: true, // 显示「参考圆」
  showHit: false, // 高亮「范围触发」实际命中的键(由设置页的开关控制)
  showLanes: true, // 显示虚拟键盘主体(air 条 + 32 个按键); 关闭后仅保留功能键
};

export const panelCfg = Object.assign({}, PANEL_DEFAULTS);
try {
  Object.assign(panelCfg, JSON.parse(localStorage.getItem('umg_kbd_cfg') || '{}'));
} catch (e) {}

export function savePanelCfg() {
  try {
    localStorage.setItem('umg_kbd_cfg', JSON.stringify(panelCfg));
  } catch (e) {}
}

export function touchRadius() {
  return panelCfg.radius;
}

// 与游戏一致的视口缩放比: 游戏布局用 min(body宽/1920, body高/1080)。
// 面板尺寸以容器单位表示, 换算成视口像素时用这个(不依赖容器 rect, 更稳)。
export function viewportScale() {
  const w = window.innerWidth || 1920;
  const h = window.innerHeight || 1080;
  const k = Math.min(w / 1920, h / 1080);
  return k > 0 ? k : 1;
}

// #main_container 的缩放比(1 单位容器 px = 多少视口 px)
export function panelScale() {
  const mc = document.getElementById('main_container');
  const r = mc ? mc.getBoundingClientRect() : null;
  return r && r.width ? r.width / 1920 : 1;
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

// 主键布局(音游 16 键: 上排 front 字母, 下排 back 数字/符号)
//   来源: 真机握手 dump frontend/handshake_full.json 的 fe 字段(38 键):
//     A1 B2 C3 D4 E5 F6 G7 H8 I9 J0 K; L' M, N. O/ P-  +  air  R S T U W Y
export const MAIN_FRONT = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
export const MAIN_BACK = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ';', "'", ',', '.', '/', '-'];
export const AIR_KEYS = ['R', 'S', 'T', 'U', 'W', 'Y'];
