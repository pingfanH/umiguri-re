// fix-missing-assets.js - 生成缺失的占位资源(本地数据模式)
// 游戏默认从服务器(reverie)下载某些资源,本地解包数据缺失这些文件。
// 用默认音效生成占位,消除 404 并让游戏回退到默认行为。
// 用法: node fix-missing-assets.js [UMIGURI_NEXT路径]
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || process.env.UMIGURI_DATA_DIR || path.join(__dirname, '..', 'UMIGURI_NEXT');
const SOUNDS = path.join(ROOT, 'core', 'sounds');

// 打击音变体(游戏 m_f0 列表: default/clap/rain/woodblock/bell/kick/shortclap/taiko/mai/ong)
const TAP_VARIANTS = ['clap', 'rain', 'woodblock', 'bell', 'kick', 'shortclap', 'taiko', 'mai', 'ong'];

function ensureFile(dst, src) {
  if (fs.existsSync(dst)) return;
  if (!fs.existsSync(src)) { console.warn('跳过(源不存在):', src); return; }
  fs.copyFileSync(src, dst);
  console.log('生成:', path.relative(ROOT, dst));
}

// 1. 打击音变体 -> 复制默认打击音
const tapDefault = path.join(SOUNDS, 'notes', 'Tap_default.wav');
for (const v of TAP_VARIANTS) {
  ensureFile(path.join(SOUNDS, 'notes', `Tap_${v}.wav`), tapDefault);
}

// 2. 截图音效 -> 复用菜单音效
ensureFile(path.join(SOUNDS, 'ui', 'Screenshot.wav'), path.join(SOUNDS, 'ui', 'MenuEnter.wav'));

// 3. license.xml(许可证文本,缺失时游戏跳过显示)
const licensePath = path.join(ROOT, 'license.xml');
if (!fs.existsSync(licensePath)) {
  fs.writeFileSync(licensePath, '<?xml version="1.0" encoding="UTF-8"?>\n<license>\n  <item>UMIGURI (c) 2025 inonote. Local data mode.</item>\n</license>\n');
  console.log('生成:', 'license.xml');
}

console.log('完成');
