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

export async function cachedFile(p) {
  const key = String(p).split('?')[0];
  // 以 / 结尾是目录请求(某些 UI 面板引用了空纹理路径,如 m_Ne.ck("") -> /reverie/)。
  // 直接失败,不发 fetch,避免 404 报错,保持与「读不到」一致的 fallback 语义。
  if (key.endsWith('/')) throw new Error('is directory: ' + key);
  if (fileCache.has(key)) return fileCache.get(key);
  const resp = await fetch(umgUrl(key));
  if (!resp.ok) throw new Error('HTTP ' + resp.status + ' ' + key);
  const data = new Uint8Array(await resp.arrayBuffer());
  fileCache.set(key, data);
  return data;
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
