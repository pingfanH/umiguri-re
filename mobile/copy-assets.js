// copy-assets.js - 把游戏资源打包进 www/assets(移动端构建前运行)
// 用法: node copy-assets.js [UMIGURI_NEXT路径]
const fs = require('fs');
const path = require('path');

const SRC_ROOT = process.argv[2] || process.env.UMIGURI_DATA_DIR || path.join(__dirname, '..', 'assets');
const DST_ROOT = path.join(__dirname, 'www', 'assets');

// 需要复制的目录(与桌面端 Tauri 的 assets/ 结构一致)
const COPY_DIRS = [
  ['data', 'data'],
  ['core', 'core'],
  ['terms', 'terms'],
];

function copyDir(src, dst) {
  if (!fs.existsSync(src)) {
    console.warn('  跳过(不存在):', src);
    return 0;
  }
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  const before = fs.existsSync(dst);
  if (before) fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(src, dst, { recursive: true });
  const size = (() => {
    let s = 0;
    for (const f of walk(dst)) s += fs.statSync(f).size;
    return s;
  })();
  console.log('  复制:', src, '->', dst, `(${(size / 1048576).toFixed(1)} MB)`);
  return size;
}

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

console.log('资源根目录:', SRC_ROOT);
console.log('目标目录:', DST_ROOT);

fs.mkdirSync(DST_ROOT, { recursive: true });
let total = 0;
for (const [src, dst] of COPY_DIRS) {
  total += copyDir(path.join(SRC_ROOT, src), path.join(DST_ROOT, dst));
}

// 生成目录清单 manifest.json(移动端 zu 目录列表依赖,WebView 无法读打包目录)
generateManifest();
console.log('完成, 总大小:', (total / 1048576).toFixed(1), 'MB');

// 虚拟路径映射(游戏 zu 枚举的目录)
function generateManifest() {
  const VIRTUAL_MAP = [
    ['data/characters/', '/chara/'],
    ['data/music/', '/music/'],
    ['data/voices/', '/voices/'],
    ['data/skills/', '/skills/'],
    ['data/courses/', '/courses/'],
    ['data/player_scenes/', '/player_scenes/'],
    ['data/nameplates/', '/nameplates/'],
    ['data/titles/', '/titles/'],
    ['core/extra/', '/extra/'],
    ['core/config/', '/config/'],
  ];
  const manifest = {};

  function collect(dir, virtDir) {
    let dirents;
    try { dirents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    manifest[virtDir] = dirents.map(e => ({
      name: e.name,
      isDirectory: e.isDirectory(),
      isFile: e.isFile(),
      fullPath: virtDir + e.name,
    }));
    for (const e of dirents) {
      if (e.isDirectory()) collect(path.join(dir, e.name), virtDir + e.name + '/');
    }
  }

  for (const [real, virt] of VIRTUAL_MAP) {
    const realDir = path.join(DST_ROOT, real);
    if (fs.existsSync(realDir)) collect(realDir, virt);
  }
  fs.writeFileSync(path.join(DST_ROOT, 'manifest.json'), JSON.stringify(manifest));
  console.log('  生成 manifest.json:', Object.keys(manifest).length, '个目录');
}
