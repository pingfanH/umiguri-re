// RVST 字符串表(stringTable.rvs)
// 布局: "RVST" | u32 version | u32 count | count × (u16 keyLen, key, u16 valLen, val)
const dec = new TextDecoder('utf-8');
const enc = new TextEncoder();

export function parseStringTable(u8) {
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  if (dec.decode(u8.subarray(0, 4)) !== 'RVST') throw new Error('不是 RVST 字符串表');
  const version = dv.getUint32(4, true);
  const count = dv.getUint32(8, true);
  let off = 12;
  const entries = [];
  for (let i = 0; i < count; i++) {
    const kl = dv.getUint16(off, true);
    off += 2;
    const key = dec.decode(u8.subarray(off, off + kl));
    off += kl;
    const vl = dv.getUint16(off, true);
    off += 2;
    const val = dec.decode(u8.subarray(off, off + vl));
    off += vl;
    entries.push({ key, val });
  }
  return { version, entries, tail: u8.subarray(off) };
}

export function buildStringTable(version, entries, tail) {
  const chunks = [];
  const head = new Uint8Array(12);
  const hv = new DataView(head.buffer);
  head.set(enc.encode('RVST'), 0);
  hv.setUint32(4, version >>> 0, true);
  hv.setUint32(8, entries.length >>> 0, true);
  chunks.push(head);
  for (const e of entries) {
    const kb = enc.encode(e.key);
    const vb = enc.encode(e.val);
    const lens = new Uint8Array(4);
    const lv = new DataView(lens.buffer);
    lv.setUint16(0, kb.length, true);
    lv.setUint16(2, vb.length, true);
    chunks.push(lens.subarray(0, 2), kb, lens.subarray(2, 4), vb);
  }
  if (tail && tail.length) chunks.push(tail);
  let total = 0;
  for (const c of chunks) total += c.length;
  const out = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) {
    out.set(c, off);
    off += c.length;
  }
  return out;
}

// 便捷: 取某个键的值
export function stringTableGet(table, key) {
  const e = table.entries.find((x) => x.key === key);
  return e ? e.val : undefined;
}
