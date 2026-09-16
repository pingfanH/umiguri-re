// gzip 解/压缩(浏览器与 Node18+ 通用的 Web Streams)。
// 归档的 M2 标志表示文件体 gzip, 解密时按需调用。

async function pump(readable, writable, input) {
  const writer = writable.getWriter();
  writer.write(input);
  writer.close();
  const chunks = [];
  const reader = readable.getReader();
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    total += value.length;
  }
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) {
    out.set(c, off);
    off += c.length;
  }
  return out;
}

export async function gunzip(u8) {
  if (typeof DecompressionStream === 'undefined') throw new Error('DecompressionStream 不可用');
  const ds = new DecompressionStream('gzip');
  return pump(ds.readable, ds.writable, u8);
}

export async function gzip(u8) {
  if (typeof CompressionStream === 'undefined') throw new Error('CompressionStream 不可用');
  const cs = new CompressionStream('gzip');
  return pump(cs.readable, cs.writable, u8);
}
