// AES-256-CBC(main.js.enc)。使用 WebCrypto, 浏览器与 Node18+ 通用。
import { AES_KEY, AES_IV } from './constants.js';

const enc = new TextEncoder();

async function importKey(key, usage) {
  return crypto.subtle.importKey('raw', enc.encode(key), 'AES-CBC', false, [usage]);
}

export async function aesDecrypt(u8, key = AES_KEY, iv = AES_IV) {
  const k = await importKey(key, 'decrypt');
  const plain = await crypto.subtle.decrypt({ name: 'AES-CBC', iv: enc.encode(iv) }, k, u8);
  return new Uint8Array(plain);
}

export async function aesEncrypt(u8, key = AES_KEY, iv = AES_IV) {
  const k = await importKey(key, 'encrypt');
  const cipher = await crypto.subtle.encrypt({ name: 'AES-CBC', iv: enc.encode(iv) }, k, u8);
  return new Uint8Array(cipher);
}
