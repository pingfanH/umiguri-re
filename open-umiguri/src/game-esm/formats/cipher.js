// 归档逐文件加密: 位置相关 XOR 表 + Na 流密码。
// 与 tools/umg.cjs 一致(正向 Na = 解密; naInv = 加密)。
import { VA_TABLE, WA_TABLE } from './constants.js';

export function rotr(state, shift) {
  return (state >>> shift) | ((state & (-1 >>> (32 - shift))) << (32 - shift));
}

// 位置相关 XOR 表(base = 归档内绝对位置)
export function xorTable(buf, base, p2) {
  const table = p2 === 0 ? VA_TABLE : WA_TABLE;
  for (let i = base; i < buf.length + base; ++i) {
    buf[i - base] ^= table[(31 & i) << 1];
  }
}

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

// Na 正向(解密): cipher[t] = plain[t] ^ K1(t) ^ ((117 & plain[t-1]) | (72 & cipher[t-1]))
export function na(buf) {
  let v = 250, e = 0, n = 0, r;
  for (let t = 0; t < buf.length; ++t) {
    r = n;
    n = buf[t];
    buf[t] ^= k1At(t, v);
    buf[t] ^= (117 & r) | (72 & e);
    v -= t % 3;
    if (v < 0) v = 255;
    e = buf[t];
  }
}

// Na 逆向(加密)
export function naInv(buf) {
  const vs = vSequence(buf.length);
  let pPrev = 0, cPrev = 0;
  for (let t = 0; t < buf.length; ++t) {
    const c = buf[t];
    const p = c ^ k1At(t, vs[t]) ^ ((117 & pPrev) | (72 & cPrev));
    buf[t] = p;
    pPrev = p;
    cPrev = c;
  }
}
