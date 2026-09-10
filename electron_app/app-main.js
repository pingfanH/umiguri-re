const { app, BrowserWindow, ipcMain, protocol, net } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

const ROOT = 'D:/project/umgr-re/UMIGURI_NEXT';

const PATH_MAP = [
  ['/chara/', 'data/characters/'],
  ['/music/', 'data/music/'],
  ['/voices/', 'data/voices/'],
  ['/skills/', 'data/skills/'],
  ['/courses/', 'data/courses/'],
  ['/player_scenes/', 'data/player_scenes/'],
  ['/nameplates/', 'data/nameplates/'],
  ['/titles/', 'data/titles/'],
  ['/textures/', 'core/textures/'],
  ['/una/', 'core/una/'],
  ['/sounds/', 'core/sounds/'],
  ['/config/', 'core/config/'],
  ['/extra/', 'core/extra/'],
];

function virtualToReal(vpath) {
  // Windows 绝对路径: 直接返回(前端会用 fullPath 继续列子目录)
  if (/^[a-zA-Z]:[\\/]/.test(vpath)) return vpath;
  for (const [v, r] of PATH_MAP) {
    if (vpath.startsWith(v)) return path.join(ROOT, r + vpath.slice(v.length));
  }
  return path.join(ROOT, vpath.replace(/^\//, ''));
}

// 握手配置
const handshake = {
  O: { ct: 'DEV_MOCK', B: 1650000, p9: 69 },
  I: 0, R: 8090, j: 1, M: 3, L: 0, U: false,
  P: '00 00 00 00 00 00', G: '00 00 00 00 00 00', Y: 0,
  fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY',
  I4: 'ja-JP', am: 0, W: true, H: 1, J: true, K: true,
  Z: { X: false, a1: false, d1: false, t1: false, s1: false },
  u1: '1920x1080', v1: false,
  h1: { T: '2025/05/24', rr: '16:51:06', C: '9f4d448', GA: 'Release', Ph: false },
  f1: false,
  g1: [
    { name: 'ja-JP', version: 6, packageName: 'hiiragi.una' },
    { name: 'en-US', version: 6, packageName: 'sakuragi.una' },
    { name: 'exField', version: 6, packageName: 'natsukawa.una' },
  ],
};

// IPC handler
ipcMain.handle('handshake', () => handshake);

ipcMain.handle('fs:list', (e, p) => {
  try {
    const real = virtualToReal(p);
    const entries = fs.readdirSync(real, { withFileTypes: true });
    return { status: 0, data: entries.map(x => ({ fullPath: path.join(real, x.name), isDirectory: x.isDirectory(), isFile: x.isFile(), name: x.name })) };
  } catch (err) {
    return { status: -1, data: [] };
  }
});

ipcMain.handle('fs:file', (e, p) => {
  try {
    const data = fs.readFileSync(virtualToReal(p));
    return { status: 0, data };
  } catch (err) {
    return { status: -1 };
  }
});

ipcMain.handle('fs:size', (e, p) => {
  try {
    const st = fs.statSync(virtualToReal(p));
    return { status: 0, data: { val: st.size } };
  } catch (err) {
    return { status: -1 };
  }
});

ipcMain.handle('fs:read', (e, p, offset, size) => {
  try {
    const fd = fs.openSync(virtualToReal(p), 'r');
    const buf = Buffer.alloc(size);
    const br = fs.readSync(fd, buf, 0, size, offset);
    fs.closeSync(fd);
    return { status: 0, data: { buf: new Uint8Array(buf.slice(0, br)), br } };
  } catch (err) {
    return { status: -1 };
  }
});

app.whenReady().then(() => {
  // 拦截 file:// 请求,把虚拟路径(/nameplates/ 等)映射到真实文件系统
  const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.dds': 'application/octet-stream',
    '.wav': 'audio/wav',
    '.json': 'application/json; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8',
    '.wasm': 'application/wasm',
    '.mp3': 'audio/mpeg',
    '.xml': 'text/xml; charset=utf-8',
  };
  protocol.handle('file', (request) => {
    const url = new URL(request.url);
    let vpath = decodeURIComponent(url.pathname);
    // 去掉盘符前缀 /D: 等,得到 /xxx
    let drive = '';
    const m = vpath.match(/^\/[a-zA-Z]:(.*)$/);
    if (m) {
      drive = vpath.slice(1, 3); // D:
      vpath = m[1];              // /xxx
    }
    // 判断是否虚拟路径(/nameplates/ 等)
    const isVirtual = PATH_MAP.some(([v]) => vpath.startsWith(v));
    let real;
    if (isVirtual) {
      real = virtualToReal(vpath);   // 虚拟路径 -> 真实文件
    } else {
      real = drive + vpath;          // 完整路径(盘符+路径)
    }
    try {
      if (fs.existsSync(real) && fs.statSync(real).isFile()) {
        const data = fs.readFileSync(real);
        const ext = path.extname(real).toLowerCase();
        return new Response(data, { headers: { 'Content-Type': MIME[ext] || 'application/octet-stream' } });
      }
    } catch (e) {}
    return new Response('Not found: ' + vpath, { status: 404 });
  });

  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    useContentSize: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile('index.html');
  win.webContents.openDevTools({ mode: 'detach' });
});

app.on('window-all-closed', () => {
  app.quit();
});
