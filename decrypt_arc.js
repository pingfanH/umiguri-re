// .arc/.una 解密器 —— 完整算法(从渲染端反混淆代码提取)
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// rotate right (m_$a)
function rotr(state, shift) {
  return state >>> shift | (state & -1 >>> 32 - shift) << 32 - shift;
}

const VA_TABLE = [168,220,89,53,219,151,160,26,53,145,237,161,148,35,123,1,157,54,121,110,229,160,93,18,129,35,179,28,127,161,220,148,112,95,35,237,192,127,26,71,50,224,1,60,41,28,247,220,71,208,54,75,75,179,151,193,236,1,95,121,18,121,245,95];
const WA_TABLE = [252,113,113,161,156,129,155,251,255,156,249,43,162,156,245,100,242,193,193,117,75,117,10,129,214,113,144,179,43,100,144,100,203,88,251,161,210,245,71,144,100,249,247,255,124,245,53,10,14,155,113,113,152,255,245,179,148,225,178,251,179,71,154,242];

function mNa(buf) {
  let v = 250, e = 0, n = 0, r;
  for (let t = 0; t < buf.length; ++t) {
    r = n; n = buf[t];
    if (t % 5 === 0) buf[t] ^= 105;
    else if (t % 19 === 0) buf[t] ^= 209;
    else if (t % 83 === 0) buf[t] ^= 72;
    else if (t % 97 === 0) buf[t] ^= 2;
    else buf[t] ^= v;
    buf[t] ^= (117 & r) | (72 & e);
    v -= t % 3;
    if (v < 0) v = 255;
    e = buf[t];
  }
}

function decryptHeader(arc) {
  const dv = new DataView(arc.buffer, arc.byteOffset, arc.byteLength);
  const magic = 281266680; // 0x10C3C9F8
  let offset = -1 - ((magic ^ dv.getUint32(5, true)) | 0) + 5;
  let t = 3125038119, e = 452525368, n = 3518972124, r = 1813668011;
  const files = [];
  while (offset < dv.byteLength) {
    t = rotr(t, 2); e = rotr(e, 3); n = rotr(n, 5);
    const fileOffset = (dv.getUint32(offset, true) ^ t) >>> 0;
    const fileSize = (dv.getUint32(offset + 4, true) ^ e) >>> 0;
    const nameLen = dv.getUint8(offset + 8) ^ (255 & n);
    offset += 9;
    let name = "";
    for (let i = 0; i < nameLen && i + offset < dv.byteLength; ++i) {
      r = rotr(r, 3);
      name += String.fromCharCode(dv.getUint8(i + offset) ^ (255 & r));
    }
    offset += nameLen;
    files.push({ name, fileOffset, fileSize });
  }
  return files;
}

// 根据内容推断扩展名
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
  if (buf.length >= 4 && buf[0] === 0x00 && buf[1] === 0x00 && buf[2] === 0x00 && buf[3] === 0x00) return '.bin';
  // 文本检测
  let printable = 0;
  for (let i = 0; i < Math.min(buf.length, 64); i++) {
    const c = buf[i];
    if ((c >= 0x20 && c < 0x7f) || c === 0x0a || c === 0x0d || c === 0x09) printable++;
  }
  if (printable > 0.5 * Math.min(buf.length, 64)) {
    // JS 检测(// 或 /* 开头)
    const head = Buffer.from(buf.slice(0, 32)).toString('latin1');
    if (head.includes('//') || head.includes('function') || head.includes('window.') || head.includes('var ') || head.includes('rv.')) return '.js';
    return '.txt';
  }
  return '.bin';
}

function decryptArcFile(arcPath, outDir, P2 = 1) {
  const arcBuffer = fs.readFileSync(arcPath);
  const arc = new Uint8Array(arcBuffer);
  const M2 = !!(1 & arc[4]);

  const files = decryptHeader(arc);
  const results = [];
  for (const { name, fileOffset, fileSize } of files) {
    const start = fileOffset + 5;
    let buf = Uint8Array.from(arc.slice(start, start + fileSize));
    if (buf.length < fileSize) { results.push({ name, ok: false }); continue; }

    const table = P2 === 0 ? VA_TABLE : WA_TABLE;
    for (let i = fileOffset; i < buf.length + fileOffset; ++i) {
      buf[i - fileOffset] ^= table[(31 & i) << 1];
    }
    mNa(buf);

    if (M2) {
      try {
        buf = zlib.gunzipSync(buf.subarray(1));
      } catch (e) {
        results.push({ name, ok: false, err: 'gzip: ' + e.message });
        continue;
      }
    }
    if (P2 === 2) buf = buf.subarray(1);

    const ext = guessExt(buf);
    const finalName = name + ext;
    results.push({ name: finalName, ok: true, data: buf });
  }
  return results;
}

// 递归查找所有 .arc/.una
function findArchives(dir, exts) {
  const results = [];
  function walk(d) {
    let entries;
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (exts.includes(path.extname(e.name).toLowerCase())) results.push(p);
    }
  }
  walk(dir);
  return results;
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('用法:');
    console.log('  单个: node decrypt_arc.js <data.arc> [输出目录] [P2]');
    console.log('  批量: node decrypt_arc.js --batch <根目录> [输出目录] [P2]');
    return;
  }

  const P2 = parseInt(args.find(a => /^\d+$/.test(a)) || '1', 10);

  if (args[0] === '--batch') {
    const root = args[1];
    const outRoot = args[2] || path.join(root, '_extracted');
    const archives = findArchives(root, ['.arc', '.una']);
    console.log('找到', archives.length, '个归档');
    let totalFiles = 0, totalOk = 0;
    for (const arc of archives) {
      const rel = path.relative(root, arc);
      const outDir = path.join(outRoot, rel);
      // 统一 P2=1(已验证: DDS/KRSM/RVST/RGF0 魔数都正确)
      const p2 = 1;
      console.log('\n解密', rel, '(P2=' + p2 + ')');
      try {
        const results = decryptArcFile(arc, outDir, p2);
        fs.mkdirSync(outDir, { recursive: true });
        for (const r of results) {
          if (!r.ok) { console.log('  ✗', r.name, r.err || ''); continue; }
          const out = path.join(outDir, r.name);
          fs.mkdirSync(path.dirname(out), { recursive: true });
          fs.writeFileSync(out, r.data);
          totalOk++;
        }
        totalFiles += results.length;
      } catch (e) {
        console.log('  ✗ 解密失败:', e.message);
      }
    }
    console.log('\n完成:', totalOk + '/' + totalFiles, '->', outRoot);
  } else {
    const arcPath = args[0];
    const outDir = args[1] || (arcPath + '.extracted');
    console.log('解密', arcPath);
    const results = decryptArcFile(arcPath, outDir, P2);
    fs.mkdirSync(outDir, { recursive: true });
    for (const r of results) {
      if (!r.ok) { console.log('  ✗', r.name, r.err || ''); continue; }
      const out = path.join(outDir, r.name);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, r.data);
      console.log('  ✓', r.name, '(' + r.data.length + 'B)');
    }
  }
}

main();
