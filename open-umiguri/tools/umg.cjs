#!/usr/bin/env node
// umg.js - UMIGURI 资源格式统一命令行工具
//
// 覆盖本项目涉及的全部「原本就是加密文件」的格式:
//   1) .arc / .una 归档(表头 + 逐文件流加密 + 可选 gzip)  -> unpack / pack / list
//   2) main.js.enc 前端包(AES-256-CBC)                     -> main-encrypt / main-decrypt
//
// 归档算法来源: 渲染端反混淆代码(game_main.original.js 中 Va/Wa/Na/vs.*)
//   头部: byte[4] 位0=M2(文件体是否 gzip), 位1=R2(是否有表头, 必须为1)
//         u32le@5 = magic ^ (4 - tableOffset),  magic = 0x10C3C9F8
//   表项: u32le(off)^t, u32le(off+4)^e, u8(off+8)^(255&n), name[i]^(255&r)
//         t,e,n,r 每个表项前 rotate-right 2,3,5,3; 初值见下
//   文件体: 从 fileOffset+5 开始, 长度 fileSize
//         XOR 表(P2=0 用 Va, P2=1/2 用 Wa, 位置相关) -> Na -> [gzip(buf[1:])] -> [P2=2 去首字节]
//
// 用法:
//   node tools/umg.js list   <archive>
//   node tools/umg.js unpack <archive> <outDir> [--p2 0|1|2]
//   node tools/umg.js pack   <inDir>   <archive> [--p2 0|1|2] [--m2] [--keep-ext] [--manifest f.json]
//   node tools/umg.js roundtrip <archive> [--p2 0|1|2]
//   node tools/umg.js unpack-all <rootDir> [outRoot]
//   node tools/umg.js pack-una   <assetsDir> [--m2]      # core/una/*.una 目录 -> 归档文件
//   node tools/umg.js unpack-una <assetsDir>             # core/una/*.una 归档文件 -> 目录
//   node tools/umg.js main-encrypt <in> <out> [key] [iv]
//   node tools/umg.js main-decrypt <in> <out> [key] [iv]
//
// P2 约定(与游戏调用一致):
//   .una            -> 2   (new ds(path,0,2))
//   data.arc(角色)  -> 1   (new ds(path,0,1))
//   data.arc(语音)  -> 1   (new vs(path,0,1))

'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

// ---------- 归档常量 ----------
const MAGIC = 281266680; // 0x10C3C9F8
const SEED_T = 3125038119;
const SEED_E = 452525368;
const SEED_N = 3518972124;
const SEED_R = 1813668011;
const HEADER = 5; // 表项中 fileOffset 与真实数据起点相差 5

// Va 表(P2=0)。索引 = (absPos & 31) << 1, 实际只用到偶数下标。
const VA_TABLE = [168, 220, 89, 53, 219, 151, 160, 26, 53, 145, 237, 161, 148, 35, 123, 1, 157, 54, 121, 110, 229, 160, 93, 18, 129, 35, 179, 28, 127, 161, 220, 148, 112, 95, 35, 237, 192, 127, 26, 71, 50, 224, 1, 60, 41, 28, 247, 220, 71, 208, 54, 75, 75, 179, 151, 193, 236, 1, 95, 121, 18, 121, 245, 95];
// Wa 表(P2=1/2)
const WA_TABLE = [252, 113, 113, 161, 156, 129, 155, 251, 255, 156, 249, 43, 162, 156, 245, 100, 242, 193, 193, 117, 75, 117, 10, 129, 214, 113, 144, 179, 43, 100, 144, 100, 203, 88, 251, 161, 210, 245, 71, 144, 100, 249, 247, 255, 124, 245, 53, 10, 14, 155, 113, 113, 152, 255, 245, 179, 148, 225, 178, 251, 179, 71, 154, 242];

function rotr(state, shift) {
  return (state >>> shift) | ((state & (-1 >>> (32 - shift))) << (32 - shift));
}
function xorTable(buf, base, p2) {
  const table = p2 === 0 ? VA_TABLE : WA_TABLE;
  for (let i = base; i < buf.length + base; ++i) {
    buf[i - base] ^= table[(31 & i) << 1];
  }
}

// Na: 逐字节流密码(含前字节反馈)。解密与加密方向相反。
// 正向: cipher[t] = plain[t] ^ K1(t) ^ ((117 & plain[t-1]) | (72 & cipher[t-1]))
function k1At(t, v) {
  if (t % 5 === 0) return 105;
  if (t % 19 === 0) return 209;
  if (t % 83 === 0) return 72;
  if (t % 97 === 0) return 2;
  return v;
}
function vSequence(len) {
  const vs = new Array(len);
  let v = 250;
  for (let t = 0; t < len; ++t) {
    vs[t] = v;
    v -= t % 3;
    if (v < 0) v = 255;
  }
  return vs;
}
function na(buf) { // 正向(=Na), 原地
  let v = 250, e = 0, n = 0, r;
  for (let t = 0; t < buf.length; ++t) {
    r = n; n = buf[t];
    buf[t] ^= k1At(t, v);
    buf[t] ^= (117 & r) | (72 & e);
    v -= t % 3;
    if (v < 0) v = 255;
    e = buf[t];
  }
}
function naInv(buf) { // 逆向
  const vs = vSequence(buf.length);
  let pPrev = 0, cPrev = 0;
  for (let t = 0; t < buf.length; ++t) {
    const c = buf[t];
    const p = c ^ k1At(t, vs[t]) ^ ((117 & pPrev) | (72 & cPrev));
    buf[t] = p;
    pPrev = p; cPrev = c;
  }
}

// ---------- 表头 ----------
function decryptHeader(arc) {
  const dv = new DataView(arc.buffer, arc.byteOffset, arc.byteLength);
  const len = dv.byteLength;
  const tableOffset = -1 - ((MAGIC ^ dv.getUint32(5, true)) | 0) + 5;
  let offset = tableOffset;
  let t = SEED_T, e = SEED_E, n = SEED_N, r = SEED_R;
  const raw = [];
  // 两种真实布局:
  //   A) 数据在前、表在尾部(游戏原始归档): tableOffset 接近文件尾, 首项 fileOffset≈4
  //   B) 表在前、数据在后(本工具旧版产物): 首项 fileOffset+5 即数据区起点
  // B 布局: 进入数据区即停止; A 布局: 解析到文件尾, 再用「数据必须落在表之前」过滤。
  let limit = Infinity;
  while (offset + 9 <= len) {
    if (offset >= limit) break;
    const pos = offset;
    t = rotr(t, 2); e = rotr(e, 3); n = rotr(n, 5);
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
      if (dataStart > offset) limit = dataStart; // 布局 B
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

function readFileData(arc, { fileOffset, fileSize }, p2, m2) {
  const start = fileOffset + HEADER;
  if (start + fileSize > arc.length) return null;
  let buf = Buffer.from(arc.subarray(start, start + fileSize));
  xorTable(buf, fileOffset, p2);
  na(buf);
  if (m2) {
    try { buf = zlib.gunzipSync(buf.subarray(1)); } catch (e) { return null; }
  }
  if (p2 === 2) buf = buf.subarray(1);
  return buf;
}

function unpack(arc, p2) {
  const m2 = !!(1 & arc[4]);
  const r2 = !!((arc[4] >> 1) & 1);
  if (!r2) throw new Error('archive has no table (R2 flag = 0)');
  const out = [];
  for (const ent of decryptHeader(arc)) {
    if (ent.fileOffset === 0 && ent.fileSize === 0) continue;
    const data = readFileData(arc, ent, p2, m2);
    if (data) out.push({ name: ent.name, data });
  }
  return { m2, files: out };
}

// ---------- 打包 ----------
// 打包: 采用游戏原始布局 —— 9 字节头(0..3 前缀 / 4 标志 / 5..8 magic 字) + 数据区 + 表(尾部)
function buildArchive(files, { p2 = 2, m2 = false } = {}) {
  // 1) 逐文件体(加密: 反向 gzip/前缀 -> naInv -> XOR 表)
  const bodies = files.map((f) => {
    let p = Buffer.from(f.data);
    if (p2 === 2) p = Buffer.concat([Buffer.from([0]), p]);
    if (m2) p = Buffer.concat([Buffer.from([0]), zlib.gzipSync(p)]);
    naInv(p);
    return p;
  });
  // 2) 数据区从 9 开始顺序排布
  const HEADSIZE = HEADER + 4; // 9
  let cursor = HEADSIZE;
  const entries = files.map((f, i) => {
    const fileOffset = cursor - HEADER;
    const body = bodies[i];
    cursor += body.length;
    return { name: f.name, fileOffset, fileSize: body.length, body };
  });
  const tableOffset = cursor;
  let tableLen = 0;
  for (const e of entries) tableLen += 9 + Buffer.byteLength(e.name, 'latin1');
  const out = Buffer.alloc(tableOffset + tableLen);
  out[4] = (m2 ? 1 : 0) | 2; // M2 + R2
  out.writeUInt32LE(((MAGIC ^ (4 - tableOffset)) | 0) >>> 0, 5);
  // 3) 写数据区(加密: XOR 表, 位置相关)
  for (const e of entries) {
    const body = Buffer.from(e.body);
    xorTable(body, e.fileOffset, p2);
    body.copy(out, e.fileOffset + HEADER);
  }
  // 4) 写表(尾部)
  let off = tableOffset;
  let t = SEED_T, e2 = SEED_E, n = SEED_N, r = SEED_R;
  for (const ent of entries) {
    t = rotr(t, 2); e2 = rotr(e2, 3); n = rotr(n, 5);
    out.writeUInt32LE((ent.fileOffset ^ t) >>> 0, off);
    out.writeUInt32LE((ent.fileSize ^ e2) >>> 0, off + 4);
    const nameBuf = Buffer.from(ent.name, 'latin1');
    out.writeUInt8((nameBuf.length ^ (255 & n)) & 0xff, off + 8);
    off += 9;
    for (let i = 0; i < nameBuf.length; ++i) {
      r = rotr(r, 3);
      out[off + i] = nameBuf[i] ^ (255 & r);
    }
    off += nameBuf.length;
  }
  return out;
}

// 名称还原: 解包时脚本对每个文件追加了一次 guessExt, 打包时去掉最后一层扩展名。
// 以点开头的名字(如 .DS_Store)不处理, 且打包时整体跳过。
function stripGuessedExt(name) {
  const base = name.split('/').pop();
  const idx = base.lastIndexOf('.');
  if (idx <= 0) return name;
  return name.slice(0, name.lastIndexOf('.'));
}

function walkDir(dir, root = dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue; // 跳过 .DS_Store / ._* 等
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkDir(p, root, acc);
    else if (e.isFile()) acc.push(path.relative(root, p));
  }
  return acc;
}

function packDir(inDir, outPath, opts = {}) {
  const manifest = opts.manifest ? JSON.parse(fs.readFileSync(opts.manifest, 'utf8')) : null;
  const rels = walkDir(inDir).sort();
  const files = rels.map((rel) => {
    const norm = rel.split(path.sep).join('/');
    const name = manifest && manifest[norm] !== undefined
      ? manifest[norm]
      : (opts.keepExt ? norm : stripGuessedExt(norm));
    return { name, data: fs.readFileSync(path.join(inDir, rel)) };
  });
  const arc = buildArchive(files, opts);
  fs.writeFileSync(outPath, arc);
  return { count: files.length, size: arc.length };
}

// ---------- RVST 字符串表(stringTable.rvs) ----------
// 布局: "RVST" | u32 version | u32 count | count × (u16 keyLen, key, u16 valLen, val)
function rvsParse(buf) {
  if (buf.toString('latin1', 0, 4) !== 'RVST') throw new Error('不是 RVST 字符串表');
  const version = buf.readUInt32LE(4);
  const count = buf.readUInt32LE(8);
  let off = 12;
  const entries = [];
  for (let i = 0; i < count; i++) {
    const kl = buf.readUInt16LE(off); off += 2;
    const key = buf.toString('utf8', off, off + kl); off += kl;
    const vl = buf.readUInt16LE(off); off += 2;
    const val = buf.toString('utf8', off, off + vl); off += vl;
    entries.push({ key, val });
  }
  return { version, entries, tail: Buffer.from(buf.subarray(off)) };
}
function rvsBuild(version, entries, tail) {
  const head = Buffer.alloc(12);
  head.write('RVST', 0, 'latin1');
  head.writeUInt32LE(version >>> 0, 4);
  head.writeUInt32LE(entries.length >>> 0, 8);
  const chunks = [head];
  for (const e of entries) {
    const kb = Buffer.from(e.key, 'utf8');
    const vb = Buffer.from(e.val, 'utf8');
    const klen = Buffer.alloc(2); klen.writeUInt16LE(kb.length, 0);
    const vlen = Buffer.alloc(2); vlen.writeUInt16LE(vb.length, 0);
    chunks.push(klen, kb, vlen, vb);
  }
  if (tail && tail.length) chunks.push(tail);
  return Buffer.concat(chunks);
}

// ---------- AES (main.js.enc) ----------
const DEFAULT_KEY = 'umiguri-2025-inonote-16bytes-key';
const DEFAULT_IV = 'umiguri-iv-16byt';
function aesEncrypt(inp, outp, key = DEFAULT_KEY, iv = DEFAULT_IV) {
  const data = fs.readFileSync(inp);
  const c = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  fs.writeFileSync(outp, Buffer.concat([c.update(data), c.final()]));
  return { plain: data.length };
}
function aesDecrypt(inp, outp, key = DEFAULT_KEY, iv = DEFAULT_IV) {
  const data = fs.readFileSync(inp);
  const d = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  fs.writeFileSync(outp, Buffer.concat([d.update(data), d.final()]));
  return { enc: data.length };
}

// 内容识别扩展名(与原 decrypt_arc.js 一致, 供 unpack 落盘命名)
function guessExt(buf) {
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
    const head = buf.subarray(0, Math.min(buf.length, 32)).toString('latin1');
    if (head.includes('//') || head.includes('function') || head.includes('window.') || head.includes('var ') || head.includes('rv.')) return '.js';
    return '.txt';
  }
  return '.bin';
}

// ---------- CLI ----------
function argVal(args, name, def) {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] !== undefined ? args[i + 1] : def;
}
function parseP2(args) {
  const v = argVal(args, '--p2', null);
  return v === null ? 2 : parseInt(v, 10);
}
function usage() {
  const lines = fs.readFileSync(__filename, 'utf8').split('\n').slice(0, 32).filter((l) => l.startsWith('//'));
  console.log(lines.map((l) => l.replace(/^\/\/ ?/, '')).join('\n'));
}

function need(args, n, usageLine) {
  if (args.length < n || args.slice(0, n).some((a) => a === undefined || a === '' || a.startsWith('--'))) {
    console.error('参数不足: ' + usageLine);
    process.exit(2);
  }
}

function readArc(p) {
  if (!fs.existsSync(p)) {
    console.error('找不到文件: ' + p);
    process.exit(2);
  }
  return fs.readFileSync(p);
}

function main() {
  const [cmd, ...args] = process.argv.slice(2);
  if (!cmd || cmd === '-h' || cmd === '--help') return usage();

  if (cmd === 'list') {
    need(args, 1, 'node tools/umg.js list <archive>');
    const arc = readArc(args[0]);
    const m2 = !!(1 & arc[4]), r2 = !!((arc[4] >> 1) & 1);
    console.log(`${args[0]}  size=${arc.length}  M2=${m2}  R2=${r2}`);
    for (const e of decryptHeader(arc)) {
      if (e.fileOffset === 0 && e.fileSize === 0) continue;
      console.log(`  ${String(e.fileSize).padStart(10)}  @${String(e.fileOffset).padStart(9)}  ${e.name}`);
    }
    return;
  }

  if (cmd === 'unpack') {
    need(args, 2, 'node tools/umg.js unpack <archive> <outDir> [--p2 0|1|2]');
    const [arcPath, outDir] = args;
    const p2 = parseP2(args);
    const arc = readArc(arcPath);
    const { m2, files } = unpack(arc, p2);
    console.log(`unpack ${arcPath} (p2=${p2}, M2=${m2}) -> ${files.length} files`);
    let n = 0;
    for (const f of files) {
      const finalName = f.name + guessExt(f.data);
      const out = path.join(outDir, finalName);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, f.data);
      n++;
    }
    console.log(`  wrote ${n} files -> ${outDir}`);
    return;
  }

  if (cmd === 'pack') {
    need(args, 2, 'node tools/umg.js pack <inDir> <archive> [--p2 0|1|2] [--m2]');
    const [inDir, outPath] = args;
    if (!fs.existsSync(inDir) || !fs.statSync(inDir).isDirectory()) {
      console.error('不是目录: ' + inDir);
      process.exit(2);
    }
    const p2 = parseP2(args);
    const m2 = args.includes('--m2');
    const opts = { p2, m2, keepExt: args.includes('--keep-ext'), manifest: argVal(args, '--manifest', null) };
    const r = packDir(inDir, outPath, opts);
    console.log(`pack ${inDir} (p2=${p2}, M2=${m2}) -> ${outPath}: ${r.count} files, ${r.size} bytes`);
    return;
  }

  if (cmd === 'roundtrip') {
    need(args, 1, 'node tools/umg.js roundtrip <archive> [--p2 0|1|2]');
    const arcPath = args[0];
    const p2 = parseP2(args);
    const src = readArc(arcPath);
    const { m2, files } = unpack(src, p2);
    // 打包时用解包出的「原始名」(去掉 guessExt)
    const packed = buildArchive(files, { p2, m2 });
    // 再解一遍并逐文件比对
    const again = unpack(packed, p2);
    if (again.files.length !== files.length) throw new Error(`file count mismatch ${again.files.length} != ${files.length}`);
    for (let i = 0; i < files.length; ++i) {
      if (again.files[i].name !== files[i].name) throw new Error(`name mismatch ${again.files[i].name} != ${files[i].name}`);
      if (!again.files[i].data.equals(files[i].data)) throw new Error(`data mismatch ${files[i].name}`);
    }
    console.log(`roundtrip OK: ${files.length} files, p2=${p2}, M2=${m2}, in=${src.length}B out=${packed.length}B`);
    return;
  }

  if (cmd === 'unpack-all') {
    need(args, 1, 'node tools/umg.js unpack-all <rootDir> [outRoot]');
    const root = args[0];
    const outRoot = args[1] || root + '_extracted';
    const p2 = parseP2(args);
    const found = [];
    (function walk(d) {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(arc|una)$/i.test(e.name)) found.push(p);
      }
    })(root);
    for (const arc of found) {
      const rel = path.relative(root, arc);
      const { files } = unpack(fs.readFileSync(arc), p2);
      const outDir = path.join(outRoot, rel);
      for (const f of files) {
        const out = path.join(outDir, f.name + guessExt(f.data));
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, f.data);
      }
      console.log(`  ${rel}: ${files.length} files -> ${outDir}`);
    }
    console.log(`unpack-all done: ${found.length} archives (p2=${p2})`);
    return;
  }

  if (cmd === 'pack-una' || cmd === 'unpack-una') {
    const usageLine = `node tools/umg.js ${cmd} <assetsDir>${cmd === 'pack-una' ? ' [--m2]' : ''}`;
    need(args, 1, usageLine);
    const unaRoot = path.join(args[0], 'core', 'una');
    if (!fs.existsSync(unaRoot)) {
      console.error('找不到目录: ' + unaRoot);
      process.exit(2);
    }
    const ents = fs.readdirSync(unaRoot, { withFileTypes: true });
    let n = 0;
    if (cmd === 'pack-una') {
      const m2 = args.includes('--m2');
      for (const e of ents) {
        if (!e.isDirectory() || !e.name.endsWith('.una')) continue;
        const dir = path.join(unaRoot, e.name);
        const tmp = dir + '.packtmp';
        const r = packDir(dir, tmp, { p2: 2, m2 });
        fs.rmSync(dir, { recursive: true, force: true });
        fs.renameSync(tmp, dir);
        console.log(`  ${e.name}: ${r.count} files -> ${r.size} bytes`);
        n++;
      }
      console.log(`pack-una done: ${n} packages (p2=2, M2=${m2}) -> 归档文件`);
    } else {
      for (const e of ents) {
        if (!e.isFile() || !e.name.endsWith('.una')) continue;
        const arcPath = path.join(unaRoot, e.name);
        const { files: out } = unpack(fs.readFileSync(arcPath), 2);
        const tmp = arcPath + '.unpacktmp';
        for (const f of out) {
          const dst = path.join(tmp, f.name + guessExt(f.data));
          fs.mkdirSync(path.dirname(dst), { recursive: true });
          fs.writeFileSync(dst, f.data);
        }
        fs.rmSync(arcPath, { force: true });
        fs.renameSync(tmp, arcPath);
        console.log(`  ${e.name}: ${out.length} files -> 目录`);
        n++;
      }
      console.log(`unpack-una done: ${n} packages -> 目录`);
    }
    return;
  }

  if (cmd === 'strtable') {
    need(args, 2, 'node tools/umg.js strtable <file.rvs> list|get <key>|set <key> <value> [--out f]');
    const file = args[0];
    const sub = args[1];
    const buf = readArc(file);
    const t = rvsParse(buf);
    if (sub === 'list') {
      console.log(`${file}  version=${t.version}  entries=${t.entries.length}`);
      for (const e of t.entries) console.log(`  ${e.key} = ${JSON.stringify(e.val)}`);
      return;
    }
    if (sub === 'get') {
      need(args, 3, 'node tools/umg.js strtable <file> get <key>');
      const e = t.entries.find((x) => x.key === args[2]);
      console.log(e ? e.val : '(未找到)');
      return e ? 0 : 1;
    }
    if (sub === 'set') {
      need(args, 4, 'node tools/umg.js strtable <file> set <key> <value> [--out f]');
      const key = args[2];
      const val = args[3];
      const e = t.entries.find((x) => x.key === key);
      if (!e) {
        console.error('未找到键: ' + key);
        process.exit(1);
      }
      const old = e.val;
      e.val = val;
      fs.writeFileSync(argVal(args, '--out', file), rvsBuild(t.version, t.entries, t.tail));
      console.log(`set ${key}: ${JSON.stringify(old)} -> ${JSON.stringify(val)}  (${file})`);
      return;
    }
    console.error('strtable 子命令: list | get | set');
    process.exit(2);
  }

  if (cmd === 'main-encrypt' || cmd === 'main-decrypt') {
    need(args, 2, `node tools/umg.js ${cmd} <in> <out> [key] [iv]`);
    const [inp, outp, key, iv] = args;
    const r = cmd === 'main-encrypt' ? aesEncrypt(inp, outp, key, iv) : aesDecrypt(inp, outp, key, iv);
    console.log(`${cmd}: ${inp} -> ${outp}`, r);
    return;
  }

  console.error('未知命令: ' + cmd);
  usage();
  process.exit(1);
}

if (require.main === module) main();

module.exports = {
  MAGIC, VA_TABLE, WA_TABLE, rotr, xorTable, na, naInv,
  decryptHeader, readFileData, unpack, buildArchive,
  stripGuessedExt, packDir, guessExt, aesEncrypt, aesDecrypt,
  rvsParse, rvsBuild,
};
