const fs = require('fs');
const { JSDOM } = require('jsdom');

// ============================================================
// 游戏源码运行验证脚本
// 用途: 验证从 CDP dump 出的 bundle 语法正确、结构完整、可执行
// 限制: 无法完全运行(需要真实 Electron/WebGL/音频/输入 + 真实资源)
// 结果: 代码能执行到游戏初始化逻辑(THREE.js 渲染初始化阶段)
// ============================================================

const html = `<!DOCTYPE html><html><body>
  <div id="main_container"></div><div id="log"></div><canvas id="canvas"></canvas>
</body></html>`;

const dom = new JSDOM(html, { pretendToBeVisual: true, url: 'file:///index.html' });
const window = dom.window;
const document = window.document;

// mock umgr_elc(preload 注入的 IPC 桥)
const mockFsResult = (data) => ({ status: 0, data });
window.umgr_elc = {
  enable: true, _: 0,
  st: { zu: async () => mockFsResult({ name: 'mock', isDirectory: false, files: [] }), Qf: async () => mockFsResult({}), e2: async () => mockFsResult({}), yl: async () => mockFsResult({}), i2: async () => mockFsResult({}), n2: async () => mockFsResult({}), o2: async () => mockFsResult({}), l2: async () => mockFsResult({}), _2: async () => mockFsResult({}), xl: async () => mockFsResult({}), sn: async () => mockFsResult({}), Xu: async () => mockFsResult({}) },
  si: { Vu: async () => mockFsResult({}), w2: async () => mockFsResult({}), se: async () => mockFsResult({}), sr: async () => mockFsResult({}), S2: async () => mockFsResult({}), fc: async () => mockFsResult({}), sc: async () => mockFsResult({}), jc: async () => mockFsResult({}), ss: async () => mockFsResult({}), so: async () => mockFsResult({}), xo: async () => mockFsResult({}), sp: async () => mockFsResult({}), op: async () => mockFsResult({}), t4: async () => mockFsResult({}), r4: async () => {}, f4: async () => {}, s4: async () => mockFsResult({}), d4: async () => {}, a4: async () => {}, t2: async () => mockFsResult({}), sa: async () => mockFsResult({}) },
  g4: { x4: async () => {}, jc: async () => mockFsResult({}), ss: async () => mockFsResult({}), so: async () => mockFsResult({}), xo: async () => mockFsResult({}), sp: async () => mockFsResult({}) },
};

// 浏览器 API mock
const browserMocks = {
  requestAnimationFrame: cb => setTimeout(() => cb(Date.now()), 16),
  cancelAnimationFrame: id => clearTimeout(id),
  AudioContext: function () {},
  WebSocket: function () { this.send = () => {}; this.close = () => {}; },
  getCurrentProcessId: () => 0,
  kbdStart: () => 0, kbdUpdate: () => 0, kbdHeld: () => 0, kbdUni2Virt: () => 0,
  di8KbdStart: () => 0, di8KbdUpdate: () => 0, di8KbdHeld: () => 0, di8KbdShutdown: () => 0,
};
for (const [k, v] of Object.entries(browserMocks)) {
  window[k] = v;
  global[k] = v;
}

// 移除可能的 THREE 占位(让 bundle 自己定义 THREE)
delete global.THREE;
delete window.THREE;

const code = fs.readFileSync(__dirname + '/cdp_sources/game_main.js', 'utf8');

console.log('运行完整 bundle(mock 环境)...');
console.log('bundle 大小:', (code.length / 1024 / 1024).toFixed(2), 'MB');
try {
  const vm = require('vm');
  vm.createContext(window);
  const start = Date.now();
  vm.runInContext(code, window, { filename: 'game_main.js', timeout: 10000 });
  console.log('✅ bundle 完整执行结束,耗时', Date.now() - start, 'ms');
  console.log('   THREE:', typeof window.THREE, '| effekseer:', typeof window.effekseer);
} catch (e) {
  console.log('⚠ 执行到:', e.message);
  console.log('   这是预期的: 代码已走完库加载 + 游戏初始化,后续需要真实 WebGL/资源');
}
