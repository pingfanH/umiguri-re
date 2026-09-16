// 虚拟路径(/xxx) -> umg:// 自定义协议。
//   macOS/Linux/iOS: <scheme>://localhost
//   Windows/Android: http://<scheme>.localhost (默认)

export const UMG_ORIGIN = /Windows|Android/i.test(navigator.userAgent)
  ? 'http://umg.localhost'
  : 'umg://localhost';

export function umgUrl(p) {
  return UMG_ORIGIN + encodeURI(p.startsWith('/') ? p : '/' + p);
}

// 整文件缓存: .una 语言包/音频等被反复读,缓存避免重复读取
const fileCache = new Map();
// 同一路径的并发去重(预取与按需读取共用, 避免重复请求)
const inflight = new Map();

// 目录预取: 游戏倾向逐个 sn 同目录的小文件(如 /sounds/notes/*.wav),
// 每次请求 1-2ms 往返。列出目录后后台并行抓取小文件, 后续 sn 直接命中缓存。
const PREFETCH_MAX_FILE = 1 << 20; // 单文件 <= 1MB
const PREFETCH_MAX_TOTAL = 8 << 20; // 单目录合计 <= 8MB
const PREFETCH_MAX_COUNT = 64;
const PREFETCH_CONCURRENCY = 6;
const prefetchedDirs = new Set();

function fetchInto(key) {
  if (fileCache.has(key)) return Promise.resolve(fileCache.get(key));
  if (inflight.has(key)) return inflight.get(key);
  const pr = (async () => {
    const t0 = performance.now();
    const resp = await fetch(umgUrl(key));
    if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + key);
    const data = new Uint8Array(await resp.arrayBuffer());
    netTick(t0, data.length);
    fileCache.set(key, data);
    return data;
  })();
  inflight.set(key, pr);
  pr.catch(() => {}).finally(() => inflight.delete(key));
  return pr;
}

// 由 st.zu 的目录列表触发。entries: FileEntry[] (Rust 现在带 size)。
// 注意: 实测「并发预取」会让总网络时间变长(与主线程争抢 + 抓了用不到的文件),
// 因此默认关闭, 仅在 localStorage.umg_prefetch==='1' 时启用(实验开关)。
export function schedulePrefetch(dirPath, entries) {
  let on = false;
  try {
    on = localStorage.getItem('umg_prefetch') === '1';
  } catch (e) {}
  if (!on) return;
  if (!Array.isArray(entries) || !entries.length) return;
  const dirKey = String(dirPath).split('?')[0];
  if (prefetchedDirs.has(dirKey)) return;
  prefetchedDirs.add(dirKey);
  const picked = [];
  let total = 0;
  for (const e of entries) {
    if (!e || !e.isFile || !e.size) continue;
    if (e.size > PREFETCH_MAX_FILE) continue;
    if (/\.(una|arc|enc)$/i.test(e.name || '')) continue;
    if (total + e.size > PREFETCH_MAX_TOTAL) break;
    total += e.size;
    picked.push(String(e.fullPath).split('?')[0]);
    if (picked.length >= PREFETCH_MAX_COUNT) break;
  }
  if (!picked.length) return;
  let i = 0;
  const worker = async () => {
    while (i < picked.length) {
      const p = picked[i++];
      try {
        await fetchInto(p);
      } catch (e) {}
    }
  };
  for (let n = 0; n < Math.min(PREFETCH_CONCURRENCY, picked.length); n++) worker();
}

// 网络/传输统计(用于判断「搬 Rust」是否有收益)
const net = { calls: 0, bytes: 0, ms: 0, rangeCalls: 0 };
let netReporterOn = false;
function netTick(t0, n) {
  net.calls++;
  net.bytes += n;
  net.ms += performance.now() - t0;
  if (!netReporterOn) {
    netReporterOn = true;
    let lastMs = 0;
    let lastBytes = 0;
    let lastCalls = 0;
    setInterval(() => {
      const dMs = net.ms - lastMs;
      const dB = net.bytes - lastBytes;
      const dC = net.calls - lastCalls;
      lastMs = net.ms;
      lastBytes = net.bytes;
      lastCalls = net.calls;
      if (dC === 0) return; // 空闲不打印
      console.error(
        `[umg][net] +${dC} calls +${(dB / 1048576).toFixed(2)}MB in ${dMs.toFixed(0)}ms |` +
          ` total ${(net.bytes / 1048576).toFixed(2)}MB/${net.calls}calls/${net.ms.toFixed(0)}ms range=${net.rangeCalls}`
      );
    }, 2000);
  }
}

export async function cachedFile(p) {
  const key = String(p).split('?')[0];
  // 以 / 结尾是目录请求(某些 UI 面板引用了空纹理路径,如 m_Ne.ck("") -> /reverie/)。
  // 直接失败,不发 fetch,避免 404 报错,保持与「读不到」一致的 fallback 语义。
  if (key.endsWith('/')) throw new Error('is directory: ' + key);
  return fetchInto(key);
}

// 按范围读取(HTTP Range)。用于归档切片读取: 不再把整个 .una(可达 20MB+)
// 拉进 JS 内存, 只取需要的区间。
//
// 归档类文件(.una/.arc)在启动时会被解析器反复做「小范围读」(表 + 各文件),
// 每次 range 都是一次往返。这里做「块级预读缓存」: 把请求对齐到 BLOCK,
// 只抓缺失的块, 相邻读因此命中缓存, 往返数大幅下降。
const RANGE_BLOCK = 256 * 1024;
const RANGE_BLOCK_CACHE_MAX = 48 * 1024 * 1024; // 块缓存总上限
const blockCache = new Map(); // key -> Map(blockIdx -> Uint8Array)
let blockCacheBytes = 0;

function blockCacheGet(key, idx) {
  const m = blockCache.get(key);
  return m ? m.get(idx) : undefined;
}
function blockCachePut(key, idx, data) {
  let m = blockCache.get(key);
  if (!m) {
    m = new Map();
    blockCache.set(key, m);
  }
  if (!m.has(idx)) {
    m.set(idx, data);
    blockCacheBytes += data.length;
  }
  // LRU 驱逐(按插入顺序)
  while (blockCacheBytes > RANGE_BLOCK_CACHE_MAX && blockCache.size) {
    const oldestKey = blockCache.keys().next().value;
    if (oldestKey === key && blockCache.size === 1) break;
    const om = blockCache.get(oldestKey);
    blockCache.delete(oldestKey);
    for (const d of om.values()) blockCacheBytes -= d.length;
  }
}

async function fetchBlock(key, idx, total) {
  const hit = blockCacheGet(key, idx);
  if (hit) return hit;
  const start = idx * RANGE_BLOCK;
  if (total >= 0 && start >= total) return new Uint8Array(0);
  const end = total >= 0 ? Math.min(start + RANGE_BLOCK, total) - 1 : start + RANGE_BLOCK - 1;
  const t0 = performance.now();
  const resp = await fetch(umgUrl(key), { headers: { Range: `bytes=${start}-${end}` } });
  if (resp.status === 416) return new Uint8Array(0);
  if (!resp.ok && resp.status !== 206) throw new Error('HTTP ' + resp.status + ' ' + key);
  const data = new Uint8Array(await resp.arrayBuffer());
  netTick(t0, data.length);
  net.rangeCalls++;
  blockCachePut(key, idx, data);
  return data;
}

export async function rangeFile(p, offset, size) {
  const key = String(p).split('?')[0];
  if (key.endsWith('/')) throw new Error('is directory: ' + key);
  if (size <= 0) return { data: new Uint8Array(0), total: -1 };

  // 非归档大文件: 直接单次 range
  if (!/\.(una|arc)$/i.test(key) || size >= RANGE_BLOCK) {
    const end = offset + size - 1;
    const t0 = performance.now();
    const resp = await fetch(umgUrl(key), { headers: { Range: `bytes=${offset}-${end}` } });
    if (resp.status === 416) throw new Error('range not satisfiable: ' + key);
    if (!resp.ok && resp.status !== 206) throw new Error('HTTP ' + resp.status + ' ' + key);
    const data = new Uint8Array(await resp.arrayBuffer());
    netTick(t0, data.length);
    net.rangeCalls++;
    let total = -1;
    const cr = resp.headers.get('content-range');
    if (cr) {
      const m = /\/(\d+)\s*$/.exec(cr);
      if (m) total = Number(m[1]);
    }
    return { data, total };
  }

  // 归档: 块级预读
  let total = -1;
  // 先取一次头部块的 Content-Range 得知总长(若缓存里没有)
  const firstIdx = Math.floor(offset / RANGE_BLOCK);
  const lastIdx = Math.floor((offset + size - 1) / RANGE_BLOCK);
  if (blockCacheGet(key, firstIdx) === undefined) {
    const probe = await fetchBlock(key, firstIdx, -1);
    if (size > 0 && probe.length < RANGE_BLOCK) total = probe.length; // 文件尾即 EOF
  }
  const idxs = [];
  for (let i = firstIdx; i <= lastIdx; i++) if (blockCacheGet(key, i) === undefined) idxs.push(i);
  // 并发补齐缺失块(小并发, 避免与主线程争抢)
  for (let i = 0; i < idxs.length; i += 2) {
    await Promise.all(idxs.slice(i, i + 2).map((ix) => fetchBlock(key, ix, total).catch(() => {})));
  }
  const parts = [];
  let have = 0;
  for (let ix = firstIdx; ix <= lastIdx; ix++) {
    const b = blockCacheGet(key, ix) || new Uint8Array(0);
    parts.push(b);
    have += b.length;
  }
  const out = new Uint8Array(Math.min(size, Math.max(0, have - (offset - firstIdx * RANGE_BLOCK))));
  let w = 0;
  let skip = offset - firstIdx * RANGE_BLOCK;
  for (const b of parts) {
    if (skip >= b.length) {
      skip -= b.length;
      continue;
    }
    const src = b.subarray(skip);
    skip = 0;
    const n = Math.min(src.length, out.length - w);
    out.set(src.subarray(0, n), w);
    w += n;
    if (w >= out.length) break;
  }
  return { data: out.subarray(0, w), total };
}

// 把以单个 "/" 开头的虚拟路径转成 umg 协议地址(不处理 // 开头的绝对 URL)。
function toUmg(url) {
  if (typeof url === 'string' && url.indexOf('/') === 0 && url.indexOf('//') !== 0) {
    return UMG_ORIGIN + url;
  }
  return url;
}

// 安装 Image / XHR / fetch / iframe sandbox 的路径拦截。
// 必须在游戏脚本执行前调用。
export function installProtocolInterceptors() {
  // 拦截 Image.src 相对路径(封面 j.png 等)转成 umg protocol。
  const NativeImage = window.Image;
  const srcDesc =
    Object.getOwnPropertyDescriptor(NativeImage.prototype, 'src') ||
    Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  window.Image = function (w, h) {
    const img = new NativeImage(w, h);
    // 跨源加载(umg:// 协议),需标注 crossOrigin 以通过 WebGL canvas 的 CORS 检查
    img.crossOrigin = 'anonymous';
    if (srcDesc && srcDesc.set) {
      Object.defineProperty(img, 'src', {
        get: function () {
          return srcDesc.get.call(this);
        },
        set: function (value) {
          srcDesc.set.call(this, toUmg(value));
        },
        configurable: true,
      });
    }
    return img;
  };
  window.Image.prototype = NativeImage.prototype;

  // THREE.js GLTFLoader(FileLoader)用 XHR/fetch 读 /player_scenes/xxx/bg.glb 等 3D 模型。
  const origOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    return origOpen.apply(this, [method, toUmg(url)].concat([].slice.call(arguments, 2)));
  };
  const origFetch = window.fetch;
  window.fetch = function (url) {
    const rest = [].slice.call(arguments, 1);
    if (typeof url === 'string') url = toUmg(url);
    return origFetch.apply(this, [url].concat(rest));
  };

  // 利用規約(terms)iframe: 游戏用 sandbox="allow-popups" 但之后要访问 contentWindow,
  // WebKit 会因缺 allow-same-origin 抛 SecurityError。补上 allow-same-origin/allow-scripts。
  const iframeProto = HTMLIFrameElement.prototype;
  const sbDesc = Object.getOwnPropertyDescriptor(iframeProto, 'sandbox');
  if (sbDesc && sbDesc.set) {
    Object.defineProperty(iframeProto, 'sandbox', {
      get: function () {
        return sbDesc.get.call(this);
      },
      set: function (v) {
        const tokens = String(v).split(/\s+/).filter(Boolean);
        if (tokens.indexOf('allow-same-origin') < 0) tokens.push('allow-same-origin');
        if (tokens.indexOf('allow-scripts') < 0) tokens.push('allow-scripts');
        sbDesc.set.call(this, tokens.join(' '));
      },
      configurable: true,
    });
  }
}
