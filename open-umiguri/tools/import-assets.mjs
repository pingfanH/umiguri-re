#!/usr/bin/env node
// import-assets.mjs - 把上游 ../assets(打包/加密态) 导入为 open-umiguri/assets(解密/解包态)。
//
//   *.una  -> 目录(含解包后的松散文件)  P2=2
//   *.arc  -> 目录                      P2=1
//   其他   -> 原样复制(明文)
//
// 打包时由 build/pack-assets.mjs 依据扩展名重新加密成 .una/.arc。
//
// 用法: node tools/import-assets.mjs [源assets目录] [目标目录]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const umg = require('./umg.cjs');

const src = path.resolve(process.argv[2] || path.join(root, '..', 'assets'));
const dst = path.resolve(process.argv[3] || path.join(root, 'assets'));

const P2_OF = (name) => (name.endsWith('.una') ? 2 : 1);
let packed = 0;
let copied = 0;

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const s = path.join(dir, e.name);
    const rel = path.relative(src, s);
    const d = path.join(dst, rel);
    if (e.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      walk(s);
      continue;
    }
    if (/\.(una|arc)$/i.test(e.name)) {
      const p2 = P2_OF(e.name);
      const { m2, files } = umg.unpack(fs.readFileSync(s), p2);
      fs.mkdirSync(d, { recursive: true });
      for (const f of files) {
        const out = path.join(d, f.name + umg.guessExt(f.data));
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.writeFileSync(out, f.data);
      }
      console.log(`  unpack ${rel} (p2=${p2}, M2=${m2}) -> ${files.length} files`);
      packed++;
    } else {
      fs.mkdirSync(path.dirname(d), { recursive: true });
      fs.copyFileSync(s, d);
      copied++;
    }
  }
}

fs.mkdirSync(dst, { recursive: true });
walk(src);
console.log(`import-assets done: ${packed} 个归档解包, ${copied} 个明文文件复制 -> ${dst}`);
