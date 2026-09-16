// 归档解析/打包(.una / .arc)。
// 头部: byte[4] 位0=M2(文件体 gzip), 位1=R2(有表头, 必须=1);
//       u32le@5 = MAGIC ^ (4 - tableOffset)
// 表项(尾部): u32le(off)^t, u32le(off+4)^e, u8(off+8)^(255&n), name[i]^(255&r),
//             t,e,n,r 每项前 rotr 2/3/5/3, 初值为常量种子。
// 文件体: XOR 表 -> Na -> [gzip(buf[1:])] -> [P2=2 去首字节]
import { MAGIC, SEED_T, SEED_E, SEED_N, SEED_R, HEADER } from './constants.js';
import { rotr, xorTable, na, naInv } from './cipher.js';
import { gunzip, gzip } from './gzip.js';

const view = (u8) => new DataView(u8.buffer, u8.byteOffset, u8.byteLength);

// 解析尾部表 -> [{name,fileOffset,fileSize}]
export function decryptHeader(arc) {
  const dv = view(arc);
  const len = dv.byteLength;
  const tableOffset = -1 - ((MAGIC ^ dv.getUint32(5, true)) | 0) + 5;
  let offset = tableOffset;
  let t = SEED_T, e = SEED_E, n = SEED_N, r = SEED_R;
  const raw = [];
  let limit = Infinity;
  while (offset + 9 <= len) {
    if (offset >= limit) break;
    const pos = offset;
    t = rotr(t, 2);
    e = rotr(e, 3);
    n = rotr(n, 5);
    const fileOffset = (dv.getUint32(offset, true) ^ t) >>> 0;
    const fileSize = (dv.getUint32(offset + 4, true) ^ e) >>> 0;
    const nameLen = dv.getUint8(offset + 8) ^ (255 & n);
    offset += 9;
    let name = '';
    for (let i = 0; i < nameLen && i + offset < len; ++i) {
      r = rotr(r, 3);
      name += String.fromCharCode(dv.getUint8(i + offset) ^ (255 & r));
    }
    offset += nameLen;
    raw.push({ name, fileOffset, fileSize, pos });
    if (limit === Infinity) {
      const dataStart = fileOffset + HEADER;
      if (dataStart > offset) limit = dataStart;
    }
  }
  if (!raw.length) return [];
  const dataFirst = raw[0].fileOffset + HEADER < raw[0].pos;
  return raw
    .filter((x) => {
      const s = x.fileOffset + HEADER;
      if (x.fileSize <= 0 || s + x.fileSize > len) return false;
      return dataFirst ? s + x.fileSize <= raw[0].pos : true;
    })
    .map(({ name, fileOffset, fileSize }) => ({ name, fileOffset, fileSize }));
}

// 读取单个文件体(解密)。
export async function readFileData(arc, { fileOffset, fileSize }, p2, m2) {
  const start = fileOffset + HEADER;
  if (start + fileSize > arc.length) return null;
  let buf = Uint8Array.from(arc.subarray(start, start + fileSize));
  xorTable(buf, fileOffset, p2);
  na(buf);
  if (m2) {
    try {
      buf = await gunzip(buf.subarray(1));
    } catch (e) {
      return null;
    }
  }
  if (p2 === 2) buf = buf.subarray(1);
  return buf;
}

// 解包整个归档 -> { m2, files: [{name,data}] }(P2: .una=2 / data.arc=1)
export async function unpack(arc, p2) {
  const m2 = !!(1 & arc[4]);
  const r2 = !!((arc[4] >> 1) & 1);
  if (!r2) throw new Error('archive has no table (R2 flag = 0)');
  const out = [];
  for (const ent of decryptHeader(arc)) {
    if (ent.fileOffset === 0 && ent.fileSize === 0) continue;
    const data = await readFileData(arc, ent, p2, m2);
    if (data) out.push({ name: ent.name, data });
  }
  return { m2, files: out };
}

// 打包: 采用游戏原始布局(9 字节头 + 数据区 + 尾部表), 加密方向 = gzip/前缀 -> naInv -> XOR。
export async function buildArchive(files, { p2 = 2, m2 = false } = {}) {
  const bodies = [];
  for (const f of files) {
    let p = Uint8Array.from(f.data);
    if (p2 === 2) p = concat(new Uint8Array([0]), p);
    if (m2) p = concat(new Uint8Array([0]), await gzip(p));
    naInv(p);
    bodies.push(p);
  }
  const HEADSIZE = HEADER + 4;
  let cursor = HEADSIZE;
  const entries = files.map((f, i) => {
    const fileOffset = cursor - HEADER;
    const body = bodies[i];
    cursor += body.length;
    return { name: f.name, fileOffset, fileSize: body.length, body };
  });
  const tableOffset = cursor;
  let tableLen = 0;
  for (const e of entries) tableLen += 9 + latin1(e.name).length;
  const out = new Uint8Array(tableOffset + tableLen);
  const dv = view(out);
  out[4] = (m2 ? 1 : 0) | 2;
  dv.setUint32(5, ((MAGIC ^ (4 - tableOffset)) | 0) >>> 0, true);
  for (const e of entries) {
    const body = Uint8Array.from(e.body);
    xorTable(body, e.fileOffset, p2);
    out.set(body, e.fileOffset + HEADER);
  }
  let off = tableOffset;
  let t = SEED_T, e2 = SEED_E, n = SEED_N, r = SEED_R;
  for (const ent of entries) {
    t = rotr(t, 2);
    e2 = rotr(e2, 3);
    n = rotr(n, 5);
    dv.setUint32(off, (ent.fileOffset ^ t) >>> 0, true);
    dv.setUint32(off + 4, (ent.fileSize ^ e2) >>> 0, true);
    const nameBuf = latin1(ent.name);
    dv.setUint8(off + 8, (nameBuf.length ^ (255 & n)) & 0xff);
    off += 9;
    for (let i = 0; i < nameBuf.length; ++i) {
      r = rotr(r, 3);
      out[off + i] = nameBuf[i] ^ (255 & r);
    }
    off += nameBuf.length;
  }
  return out;
}

// 名称还原: 解包时给每个文件追加了一次 guessExt, 打包时去掉最后一层扩展名。
export function stripGuessedExt(name) {
  const base = name.split('/').pop();
  const idx = base.lastIndexOf('.');
  if (idx <= 0) return name;
  return name.slice(0, name.lastIndexOf('.'));
}

// 内容识别扩展名(与原 decrypt_arc.js / umg.js 一致)
export function guessExt(buf) {
  if (buf.length >= 4 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return '.png';
  if (buf.length >= 4 && buf[0] === 0x44 && buf[1] === 0x44 && buf[2] === 0x53 && buf[3] === 0x20) return '.dds';
  if (buf.length >= 4 && buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46) return '.wav';
  if (buf.length >= 4 && buf[0] === 0x52 && buf[1] === 0x47 && buf[2] === 0x46 && buf[3] === 0x30) return '.rgf';
  if (buf.length >= 4 && buf[0] === 0x4b && buf[1] === 0x52 && buf[2] === 0x53 && buf[3] === 0x4d) return '.krtbl';
  if (buf.length >= 4 && buf[0] === 0x52 && buf[1] === 0x56 && buf[2] === 0x53 && buf[3] === 0x54) return '.rvs';
  if (buf.length >= 4 && buf[0] === 0x52 && buf[1] === 0x53 && buf[2] === 0x42 && buf[3] === 0x46) return '.rsb';
  if (buf.length >= 2 && buf[0] === 0xff && buf[1] === 0xd8) return '.jpg';
  if (buf.length >= 3 && buf[0] === 0x1f && buf[1] === 0x8b) return '.gz';
  if (buf.length >= 4 && buf[0] === 0x67 && buf[1] === 0x6c && buf[2] === 0x54 && buf[3] === 0x46) return '.glb';
  if (buf.length >= 4 && buf[0] === 0x4f && buf[1] === 0x67 && buf[2] === 0x67 && buf[3] === 0x53) return '.ogg';
  let printable = 0;
  const n = Math.min(buf.length, 64);
  for (let i = 0; i < n; i++) {
    const c = buf[i];
    if ((c >= 0x20 && c < 0x7f) || c === 0x0a || c === 0x0d || c === 0x09) printable++;
  }
  if (printable > 0.5 * n) {
    const head = latin1ToString(buf.subarray(0, Math.min(buf.length, 32)));
    if (head.includes('//') || head.includes('function') || head.includes('window.') || head.includes('var ') || head.includes('rv.')) return '.js';
    return '.txt';
  }
  return '.bin';
}

// ---- 内部: 字节工具 ----
function concat(a, b) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a, 0);
  out.set(b, a.length);
  return out;
}
function latin1(str) {
  const out = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) out[i] = str.charCodeAt(i) & 0xff;
  return out;
}
function latin1ToString(u8) {
  let s = '';
  for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
  return s;
}
