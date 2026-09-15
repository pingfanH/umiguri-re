// base64 <-> 二进制 编码工具。
// Rust 端 fs_file / fs_read 返回 base64, fs_write 接收 base64。

export function b64ToU8(b64) {
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}

export function u8ToB64(u8) {
  let bin = '';
  const chunk = 0x8000;
  for (let i = 0; i < u8.length; i += chunk) {
    bin += String.fromCharCode.apply(null, u8.subarray(i, i + chunk));
  }
  return btoa(bin);
}

export function strToB64(s) {
  return btoa(unescape(encodeURIComponent(s)));
}

// 任意可写数据 -> base64(原桥 Xu 的分支逻辑)
export function toB64(data) {
  if (data instanceof Uint8Array) return u8ToB64(data);
  if (typeof data === 'string') return strToB64(data);
  if (data && data.buffer) {
    return u8ToB64(
      new Uint8Array(data.buffer, data.byteOffset || 0, data.byteLength || data.buffer.byteLength)
    );
  }
  return '';
}
