// AES-256-CBC 加解密(与 desktop/encrypt.js、tools/umg.js 兼容)。
// 用法: node build/encrypt.mjs <in> <out> [key] [iv]
//       node build/encrypt.mjs --decrypt <in> <out> [key] [iv]
import crypto from 'node:crypto';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export const DEFAULT_KEY = 'umiguri-2025-inonote-16bytes-key';
export const DEFAULT_IV = 'umiguri-iv-16byt';

export function aesEncrypt(input, output, key = DEFAULT_KEY, iv = DEFAULT_IV) {
  const data = fs.readFileSync(input);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  const enc = Buffer.concat([cipher.update(data), cipher.final()]);
  fs.writeFileSync(output, enc);
  return { plain: data.length, enc: enc.length };
}

export function aesDecrypt(input, output, key = DEFAULT_KEY, iv = DEFAULT_IV) {
  const data = fs.readFileSync(input);
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  fs.writeFileSync(output, Buffer.concat([decipher.update(data), decipher.final()]));
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const decrypt = args[0] === '--decrypt';
  const [inp, outp, key, iv] = decrypt ? args.slice(1) : args;
  if (!inp || !outp) {
    console.error('用法: node build/encrypt.mjs [--decrypt] <in> <out> [key] [iv]');
    process.exit(1);
  }
  const r = decrypt ? aesDecrypt(inp, outp, key, iv) : aesEncrypt(inp, outp, key, iv);
  if (r) console.log(`加密完成: ${inp} -> ${outp} (${r.plain} -> ${r.enc} 字节)`);
  else console.log(`解密完成: ${inp} -> ${outp}`);
}
