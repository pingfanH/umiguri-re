// WebKit(iOS) 不支持 S3TC/DXT 压缩纹理 -> 软件解码为 RGBA。
// 桌面 WebView 有 WEBGL_compressed_texture_s3tc; iOS 只有 astc/etc。缺 S3TC 时
// 游戏上传 DXT1/3/5 会失败(iOS 上所有 .dds 贴图都不显示)。这里拦截
// compressedTexImage2D, 把 DXT 解成 RGBA 再用 texImage2D 上传。

function hasS3TC() {
  try {
    const c = document.createElement('canvas');
    const g = c.getContext('webgl2') || c.getContext('webgl');
    return !!(g && g.getExtension('WEBGL_compressed_texture_s3tc'));
  } catch (e) {
    return true;
  }
}

function decodeBC(data, format, width, height) {
  const out = new Uint8Array(width * height * 4);
  const bw = Math.max(1, (width + 3) >> 2);
  const bh = Math.max(1, (height + 3) >> 2);
  let p = 0;
  function to255(e) {
    return [(e[0] * 255 / 31) | 0, (e[1] * 255 / 63) | 0, (e[2] * 255 / 31) | 0];
  }
  function rgb565(c) {
    return [(c >> 11) & 0x1f, (c >> 5) & 0x3f, c & 0x1f];
  }
  for (let by = 0; by < bh; by++)
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
  return out;
}

function wrap(orig) {
  return function (target, level, internalformat, width, height, border, data) {
    if ((internalformat === 33776 || internalformat === 33778 || internalformat === 33779) && data && data.length) {
      try {
        // 压缩纹理不受 UNPACK_FLIP_Y_WEBGL 影响,但 RGBA 上传会。临时关闭避免精灵图翻转/位移。
        let _flip = true, _premul = false, _align = 4;
        try {
          _flip = this.getParameter(this.UNPACK_FLIP_Y_WEBGL);
          _premul = this.getParameter(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
          _align = this.getParameter(this.UNPACK_ALIGNMENT);
          this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, false);
          this.pixelStorei(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
          this.pixelStorei(this.UNPACK_ALIGNMENT, 1);
        } catch (e0) {}
        const rgba = decodeBC(data, internalformat, width, height);
        const rc = this.texImage2D(target, level, this.RGBA, width, height, 0, this.RGBA, this.UNSIGNED_BYTE, rgba);
        try {
          this.pixelStorei(this.UNPACK_FLIP_Y_WEBGL, _flip);
          this.pixelStorei(this.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _premul);
          this.pixelStorei(this.UNPACK_ALIGNMENT, _align);
        } catch (e1) {}
        return rc;
      } catch (e) {
        try {
          console.log('[DIAG] DXT_DECODE_ERR ' + (e && e.message));
        } catch (e2) {}
      }
    }
    return orig.apply(this, arguments);
  };
}

export function installDxtSoftwareDecode() {
  if (hasS3TC()) return;
  [window.WebGLRenderingContext, window.WebGL2RenderingContext].forEach(function (C) {
    if (!C) return;
    const P = C.prototype;
    if (P.compressedTexImage2D && !P.__ugvDxt) {
      P.__ugvDxt = true;
      P.compressedTexImage2D = wrap(P.compressedTexImage2D);
    }
  });
  console.log('[DIAG] DXT_SOFTWARE_DECODE enabled');
}
