// gen_ico.js - 生成 icon.ico(嵌入 PNG)
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function makePng(size, r, g, b) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  const rowLen = size * 4;
  const raw = Buffer.alloc((rowLen + 1) * size);
  for (let y = 0; y < size; y++) {
    const rs = y * (rowLen + 1);
    raw[rs] = 0;
    for (let x = 0; x < size; x++) {
      const p = rs + 1 + x * 4;
      raw[p] = r; raw[p+1] = g; raw[p+2] = b; raw[p+3] = 255;
    }
  }
  function crc32(buf) {
    let c = ~0;
    for (let i = 0; i < buf.length; i++) { c ^= buf[i]; for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1)); }
    return ~c >>> 0;
  }
  function chunk(type, data) {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
    const t = Buffer.from(type);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(Buffer.concat([t, data])), 0);
    return Buffer.concat([len, t, data, crc]);
  }
  const sig = Buffer.from([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a]);
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

function makeIco(pngs) {
  // ICO 文件头
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);   // 保留
  header.writeUInt16LE(1, 2);   // 类型 1=ico
  header.writeUInt16LE(pngs.length, 4); // 图像数
  // 目录项(16 字节每个)
  const entries = [];
  let offset = 6 + pngs.length * 16;
  for (const [size, png] of pngs) {
    const e = Buffer.alloc(16);
    e[0] = size >= 256 ? 0 : size;  // 宽(256 -> 0)
    e[1] = size >= 256 ? 0 : size;  // 高
    e[2] = 0; e[3] = 0;             // 调色板, 保留
    e.writeUInt16LE(1, 4);          // 平面
    e.writeUInt16LE(32, 6);         // 位深
    e.writeUInt32LE(png.length, 8); // 大小
    e.writeUInt32LE(offset, 12);    // 偏移
    entries.push(e);
    offset += png.length;
  }
  const parts = [header, ...entries];
  for (const [, png] of pngs) parts.push(png);
  return Buffer.concat(parts);
}

const png32 = makePng(32, 0x1a, 0x1a, 0x2e);
const png128 = makePng(128, 0x1a, 0x1a, 0x2e);
const png256 = makePng(256, 0x1a, 0x1a, 0x2e);
const ico = makeIco([[32, png32], [128, png128], [256, png256]]);
fs.writeFileSync(path.join(__dirname, 'src-tauri', 'icons', 'icon.ico'), ico);
console.log('icon.ico 已生成, 大小', ico.length, '字节');
