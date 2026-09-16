// DDS 贴图: 头部解析 + DXT1/3/5 软件解码(供缺 S3TC 的 WebKit 使用)。
// 头部: "DDS " | u32 size(124) | u32 flags | u32 height@12 | u32 width@16 |
//       ... | u32 mipMapCount@28 | pixelformat(fourCC@84)
// fourCC: DXT1 / DXT3 / DXT5 (另见 WebGL 常量 33776/33778/33779)

export function parseDdsHeader(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (dv.getUint32(0, true) !== 0x20534444) return null; // 'DDS '
  const height = dv.getUint32(12, true);
  const width = dv.getUint32(16, true);
  const mipMapCount = dv.getUint32(28, true);
  const fourCC = String.fromCharCode(u8[84], u8[85], u8[86], u8[87]);
  const format = fourCC === 'DXT1' ? 33776 : fourCC === 'DXT3' ? 33778 : fourCC === 'DXT5' ? 33779 : 0;
  return { width, height, mipMapCount, fourCC, format, dataOffset: 128 };
}

// DXT 块 -> RGBA。format: 33776(DXT1) / 33778(DXT3) / 33779(DXT5)。
export function decodeDxt(data, format, width, height) {
  const out = new Uint8Array(width * height * 4);
  const bw = Math.max(1, (width + 3) >> 2);
  const bh = Math.max(1, (height + 3) >> 2);
  let p = 0;
  const to255 = (e) => [(e[0] * 255 / 31) | 0, (e[1] * 255 / 63) | 0, (e[2] * 255 / 31) | 0];
  const rgb565 = (c) => [(c >> 11) & 0x1f, (c >> 5) & 0x3f, c & 0x1f];
  for (let by = 0; by < bh; by++) {
    for (let bx = 0; bx < bw; bx++) {
      let alpha = null, i;
      if (format === 33778) {
        alpha = new Uint8Array(16);
        for (i = 0; i < 16; i++) alpha[i] = ((data[p + (i >> 1)] >> ((i & 1) << 2)) & 0xf) * 17;
        p += 8;
      } else if (format === 33779) {
        const a0 = data[p], a1 = data[p + 1];
        const ab = [a0, a1];
        if (a0 > a1) {
          for (i = 1; i <= 6; i++) ab.push((((7 - i) * a0 + i * a1) / 7) | 0);
        } else {
          for (i = 1; i <= 4; i++) ab.push((((5 - i) * a0 + i * a1) / 5) | 0);
          ab.push(0);
          ab.push(255);
        }
        alpha = new Uint8Array(16);
        for (i = 0; i < 16; i++) {
          const bit = i * 3;
          const byte = p + 2 + (bit >> 3);
          const sh = bit & 7;
          const v = (data[byte] | (data[byte + 1] << 8) | (data[byte + 2] << 16) | (data[byte + 3] << 24)) >>> sh;
          alpha[i] = ab[v & 7];
        }
        p += 8;
      }
      const c0 = data[p] | (data[p + 1] << 8);
      const c1 = data[p + 2] | (data[p + 3] << 8);
      p += 4;
      const cols = [to255(rgb565(c0)), to255(rgb565(c1))];
      if (c0 > c1 || format !== 33776) {
        cols.push([
          ((2 * cols[0][0] + cols[1][0]) / 3) | 0,
          ((2 * cols[0][1] + cols[1][1]) / 3) | 0,
          ((2 * cols[0][2] + cols[1][2]) / 3) | 0,
        ]);
        cols.push([
          ((cols[0][0] + 2 * cols[1][0]) / 3) | 0,
          ((cols[0][1] + 2 * cols[1][1]) / 3) | 0,
          ((cols[0][2] + 2 * cols[1][2]) / 3) | 0,
        ]);
      } else {
        cols.push([
          ((cols[0][0] + cols[1][0]) / 2) | 0,
          ((cols[0][1] + cols[1][1]) / 2) | 0,
          ((cols[0][2] + cols[1][2]) / 2) | 0,
        ]);
        cols.push([0, 0, 0]);
      }
      const bits = (data[p] | (data[p + 1] << 8) | (data[p + 2] << 16) | (data[p + 3] << 24)) >>> 0;
      p += 4;
      for (i = 0; i < 16; i++) {
        const cx = (bx << 2) + (i & 3);
        const cy = (by << 2) + (i >> 2);
        if (cx >= width || cy >= height) continue;
        const ci = (bits >> (i << 1)) & 3;
        const col = cols[ci];
        const o = (cy * width + cx) << 2;
        out[o] = col[0];
        out[o + 1] = col[1];
        out[o + 2] = col[2];
        out[o + 3] = alpha ? alpha[i] : 255;
      }
    }
  }
  return out;
}

// 一步: DDS 字节 -> { header, rgba }(非 DXT 返回 rgba=null)
export function decodeDds(u8) {
  const header = parseDdsHeader(u8);
  if (!header) return null;
  const rgba = header.format ? decodeDxt(u8.subarray(header.dataOffset), header.format, header.width, header.height) : null;
  return { header, rgba };
}
