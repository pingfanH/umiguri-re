// server.js - 前端 + 虚拟文件系统服务器
// 提供: 1. 前端静态文件  2. /fs/ 端点(映射游戏虚拟路径到真实文件系统)
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = 'D:/project/umgr-re/UMIGURI_NEXT'; // 游戏根目录
const FRONTEND = __dirname; // 前端文件目录
const PORT = 8080;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.wasm': 'application/wasm',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.dds': 'application/octet-stream',
  '.wav': 'audio/wav',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'text/xml; charset=utf-8',
};

// 虚拟路径 -> 真实路径映射(从真实游戏探测)
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
  ['/captures/', 'captures/'],
  ['/reverie/', 'reverie/'],
];

function virtualToReal(vpath) {
  for (const [v, r] of PATH_MAP) {
    if (vpath.startsWith(v)) return path.join(ROOT, r + vpath.slice(v.length));
  }
  // 默认: 直接拼到根目录
  return path.join(ROOT, vpath.replace(/^\//, ''));
}

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = decodeURIComponent(url.pathname);

  // /fs/list?path=/chara/ -> 列目录
  if (pathname === '/fs/list') {
    const vpath = url.searchParams.get('path') || '/';
    const real = virtualToReal(vpath);
    try {
      const entries = fs.readdirSync(real, { withFileTypes: true });
      const data = entries.map(e => ({
        fullPath: path.join(real, e.name),
        isDirectory: e.isDirectory(),
        isFile: e.isFile(),
        name: e.name,
      }));
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 0, data }));
    } catch (e) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: -1, data: [] }));
    }
    return;
  }

  // /fs/file?path=/xxx -> 读整个文件
  if (pathname === '/fs/file') {
    const vpath = url.searchParams.get('path') || '/';
    const real = virtualToReal(vpath);
    fs.readFile(real, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: -1 }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
        res.end(data);
      }
    });
    return;
  }

  // /fs/size?path=/xxx -> 文件大小
  if (pathname === '/fs/size') {
    const vpath = url.searchParams.get('path') || '/';
    const real = virtualToReal(vpath);
    try {
      const st = fs.statSync(real);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 0, data: { val: st.size } }));
    } catch (e) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: -1 }));
    }
    return;
  }

  // /fs/read?path=/xxx&offset=0&size=20 -> 读文件部分字节
  if (pathname === '/fs/read') {
    const vpath = url.searchParams.get('path') || '/';
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);
    const size = parseInt(url.searchParams.get('size') || '0', 10);
    const real = virtualToReal(vpath);
    try {
      const fd = fs.openSync(real, 'r');
      const buf = Buffer.alloc(size);
      const br = fs.readSync(fd, buf, 0, size, offset);
      fs.closeSync(fd);
      res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
      res.end(buf.slice(0, br));
    } catch (e) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: -1 }));
    }
    return;
  }

  // 前端静态文件
  let filePath = pathname === '/' ? '/index.html' : pathname;
  filePath = path.join(FRONTEND, filePath);
  if (!filePath.startsWith(FRONTEND)) { res.writeHead(403); res.end('Forbidden'); return; }

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('404: ' + pathname); return; }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log('服务器: http://localhost:' + PORT);
  console.log('前端: http://localhost:' + PORT + '/');
  console.log('文件系统根: ' + ROOT);
});
