// WebCrypto AES-CBC 解密 main.js.enc 并执行游戏前端。
const KEY = 'umiguri-2025-inonote-16bytes-key'; // 32 字节
const IV = 'umiguri-iv-16byt'; // 16 字节

export async function loadMain() {
  try {
    const enc = await fetch('main.js.enc', { cache: 'no-store' }).then((r) => r.arrayBuffer());
    const keyBytes = new TextEncoder().encode(KEY);
    const ivBytes = new TextEncoder().encode(IV);
    const key = await crypto.subtle.importKey('raw', keyBytes, 'AES-CBC', false, ['decrypt']);
    const plain = await crypto.subtle.decrypt({ name: 'AES-CBC', iv: ivBytes }, key, enc);
    const code = new TextDecoder().decode(plain);
    // 执行解密后的 main.js(游戏前端)
    (0, eval)(code);
  } catch (e) {
    console.error('[decrypt-loader] 解密失败:', e);
  }
}
