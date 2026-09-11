// gen_icon.js - 生成占位图标(纯色 PNG)
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function makePng(size, r, g, b) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);      // width
  ihdr.writeUInt32BE(size, 4);      // height
  ihdr[8] = 8;                       // bit depth
  ihdr[9] = 6;                       // color type RGBA
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  // 像素数据(每行: filter byte 0 + RGBA)
  const rowLen = size * 4;
  const raw = Buffer.alloc((rowLen + 1) * size);
  for (let y = 0; y < size; y++) {
    const rowStart = y * (rowLen + 1);
    raw[rowStart] = 0; // filter
    for (let x = 0; x < size; x++) {
      const p = rowStart + 1 + x * 4;
      raw[p] = r; raw[p + 1] = g; raw[p + 2] = b; raw[p + 3] = 255;
    }
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crc = Buffer.alloc(4);
    const crcInput = Buffer.concat([typeBuf, data]);
    crc.writeUInt32BE(crc32(crcInput), 0);
    return Buffer.concat([len, typeBuf, data, crc]);
  }

  function crc32(buf) {
    let c = ~0;
    for (let i = 0; i < buf.length; i++) {
      c ^= buf[i];
      for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
    }
    return ~c >>> 0;
  }

  const ihdrChunk = chunk('IHDR', ihdr);
  const idatChunk = chunk('IDAT', zlib.deflateSync(raw));
  const iendChunk = chunk('IEND', Buffer.alloc(0));
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.join(__dirname, 'src-tauri', 'icons');
fs.mkdirSync(outDir, { recursive: true });
// 深蓝色图标
fs.writeFileSync(outDir + '/32x32.png', makePng(32, 0x1a, 0x1a, 0x2e));
fs.writeFileSync(outDir + '/128x128.png', makePng(128, 0x1a, 0x1a, 0x2e));
fs.writeFileSync(outDir + '/128x128@2x.png', makePng(256, 0x1a, 0x1a, 0x2e));
// 生成 icon.ico(用 128x128 PNG 作为占位,实际上 ico 需要特殊格式)
console.log('占位图标已生成(32x32, 128x128, 128x128@2x PNG)');
console.log('注意: icon.ico/icon.icns 需用 cargo tauri icon 正式生成');
