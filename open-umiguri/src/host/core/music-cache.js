// 乐曲列表缓存失效: 配合游戏自带的 /caches/music.json(握手 rm.Im -> Z.X=true)。
//
// 游戏在曲库扫描后会写一份列表缓存, 暖启动直接读它、跳过逐曲扫描(解析元数据/谱面)。
// 代价是缓存不会自己失效, 所以要宿主来判断: 对 /music 子树取「路径+大小+mtime」签名
// (Rust 侧一次遍历, 不读文件内容), 与上次记录的签名不一致时把缓存写成空文件——
// 游戏 JSON.parse 失败后会自动重新扫描并重写缓存。
import { tryInvoke } from './invoke.js';
import { cachedFile } from './protocol.js';
import { diagLog } from './diag.js';
import { toB64 } from './encoding.js';

const SIG_PATH = '/caches/music.sig';
const CACHE_PATH = '/caches/music.json';

// sig 可由调用方传入(prefetchTree 的同一次遍历顺带算出), 省掉真机上昂贵的第二次遍历。
export async function setupMusicCache(root = '/music', sig = null) {
  const t0 = performance.now();
  try {
    if (!sig) sig = await tryInvoke('fs_tree_sig', { root }, null);
    if (!sig) return;
    let prev = null;
    try {
      prev = new TextDecoder().decode(await cachedFile(SIG_PATH));
    } catch (e) {}
    if (prev === sig) return;
    // 曲库有变化: 作废列表缓存(空内容 -> JSON.parse 抛错 -> 游戏重新扫描并重写)
    await tryInvoke('fs_write', { path: CACHE_PATH, data: toB64(new Uint8Array(0)) }, null);
    await tryInvoke('fs_write', { path: SIG_PATH, data: toB64(new TextEncoder().encode(sig)) }, null);
    diagLog(`[umg][musiccache] 曲库变化 → 已作废列表缓存 ${sig} (${(performance.now() - t0).toFixed(0)}ms)`);
  } catch (e) {
    diagLog('[umg][musiccache] 失败 ' + ((e && e.message) || e));
  }
}
