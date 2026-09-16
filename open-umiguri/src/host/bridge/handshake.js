// 握手数据(window.umgr_elc._): 游戏启动时读取。
// 可由 assets/core/config/*.json 覆盖(见 bridge/host-config.js + applyHostConfig)。
export function savedLang() {
  try {
    return localStorage.getItem('umg_lang') || null;
  } catch (e) {
    return null;
  }
}

// 内置默认值(配置缺失时使用; 来源于真机握手 dump)
export const DEFAULTS = {
  playerName: 'PINGFANH',
  playerRating: 1650000,
  playerLevel: 69,
  lang: 'ja-JP',
  fe: 'A1B2C3D4E5F6G7H8I9J0K;L\'M,N.O/P-RSTUWY',
  ledPort: 8090,
  comMainPort: 1,
  amreaderPort: 3,
  amreaderKeyA: '00 00 00 00 00 00',
  amreaderKeyB: '00 00 00 00 00 00',
  resolution: '1920x1080',
};

// 该对象被 umgr-elc.js 引用, 因此用「就地赋值」方式应用配置。
export const handshake = {
  O: { ct: DEFAULTS.playerName, B: DEFAULTS.playerRating, p9: DEFAULTS.playerLevel },
  I: 0,
  R: DEFAULTS.ledPort, // devices.led_controller.port
  j: DEFAULTS.comMainPort, // devices.com.port_maindev
  M: DEFAULTS.amreaderPort, // devices.amreader.port
  L: 0, U: false,
  P: DEFAULTS.amreaderKeyA, // devices.amreader.key_a
  G: DEFAULTS.amreaderKeyB, // devices.amreader.key_b
  Y: 0,
  fe: DEFAULTS.fe, // keymap.current
  I4: savedLang() || DEFAULTS.lang, // game.lang / localStorage
  am: 0, W: true, H: 1, J: true, K: true,
  // Z.X -> rm.Im: 游戏自带的乐曲列表缓存(/caches/music.json)。开启后暖启动跳过逐曲
  // 扫描(实测曲库多时省数秒); 失效由宿主 core/music-cache.js 负责, 封面由补丁补载。
  Z: { X: true, a1: false, d1: false, t1: false, s1: false },
  u1: DEFAULTS.resolution, // startup.last_screen_size
  v1: false,
  h1: { T: '2025/05/24', rr: '16:51:06', C: '9f4d448', GA: 'Release', Ph: false },
  f1: false,
  g1: [
    { name: 'ja-JP', version: 6, packageName: 'hiiragi.una' },
    { name: 'en-US', version: 6, packageName: 'sakuragi.una' },
    { name: 'exField', version: 6, packageName: 'natsukawa.una' },
    { name: 'zh-CN', version: 6, packageName: 'zh-CN.una' },
  ],
};

// 用 host-config 归一化结果覆盖握手(未配置项保持默认/现有值)
export function applyHostConfig(cfg) {
  if (!cfg) return handshake;
  const num = (v, d) => (typeof v === 'number' && isFinite(v) ? v : d);
  const str = (v, d) => (typeof v === 'string' && v.length ? v : d);
  handshake.O.ct = str(cfg.playerName, handshake.O.ct);
  handshake.O.B = num(cfg.playerRating, handshake.O.B);
  handshake.O.p9 = num(cfg.playerLevel, handshake.O.p9);
  handshake.fe = str(cfg.keymap, handshake.fe);
  handshake.R = num(cfg.ledPort, handshake.R);
  handshake.j = num(cfg.comMainPort, handshake.j);
  handshake.M = num(cfg.amreaderPort, handshake.M);
  handshake.P = str(cfg.amreaderKeyA, handshake.P);
  handshake.G = str(cfg.amreaderKeyB, handshake.G);
  handshake.u1 = str(cfg.resolution, handshake.u1);
  handshake.I4 = savedLang() || str(cfg.lang, handshake.I4);
  return handshake;
}
