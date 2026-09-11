// copy-assets.js - 把游戏资源打包进 www/assets(移动端构建前运行)
// 用法: node copy-assets.js [UMIGURI_NEXT路径]
const fs = require('fs');
const path = require('path');

const SRC_ROOT = process.argv[2] || process.env.UMIGURI_DATA_DIR || path.join(__dirname, '..', '..', 'UMIGURI_NEXT');
const DST_ROOT = path.join(__dirname, 'www', 'assets');

// 需要复制的目录(排除 core/bin 的 Electron 运行时 ~206MB)
const COPY_DIRS = [
  ['data', 'data'],
  ['core/textures', 'core/textures'],
  ['core/una', 'core/una'],
  ['core/sounds', 'core/sounds'],
  ['core/config', 'core/config'],
  ['core/extra', 'core/extra'],
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
console.log('完成, 总大小:', (total / 1048576).toFixed(1), 'MB');
