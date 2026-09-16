// 读取游戏自身配置(assets/core/config/*.json)并归一化, 供宿主层使用。
//
//   game.json    : game.player(name/level/rating), game.lang, keymap.current,
//                  devices.*(端口/密钥), system.*(窗口模式等)
//   startup.json : last_screen_mode / last_screen_size
//
// 路径经 umg:// -> PATH_MAP("config/" -> "core/config/")。
import { cachedFile } from '../core/protocol.js';

const dec = new TextDecoder('utf-8');

async function readJson(p) {
  try {
    const u8 = await cachedFile(p);
    return JSON.parse(dec.decode(u8));
  } catch (e) {
    return null;
  }
}

function pick(obj, path, fallback) {
  let cur = obj;
  for (const k of path.split('.')) {
    if (cur === null || cur === undefined || typeof cur !== 'object') return fallback;
    cur = cur[k];
  }
  return cur === undefined || cur === null ? fallback : cur;
}

// 归一化后的宿主配置(未配置项为 null, 调用方自行回退到内置默认值)
export let hostConfig = {
  playerName: null,
  playerLevel: null,
  playerRating: null,
  lang: null,
  keymap: null,
  ledPort: null,
  comMainPort: null,
  comIoPort: null,
  amreaderPort: null,
  amreaderKeyA: null,
  amreaderKeyB: null,
  resolution: null,
  windowMode: null,
  force120fps: null,
  hardwareAcceleration: null,
  bgThrottling: null,
  blockSleep: null,
  scalingQuality: null,
};

export async function loadHostConfig() {
  const game = (await readJson('/config/game.json')) || {};
  const startup = (await readJson('/config/startup.json')) || {};

  const keymap = pick(game, 'keymap.current', null);
  hostConfig = {
    playerName: pick(game, 'game.player.name', null),
    playerLevel: pick(game, 'game.player.level', null),
    playerRating: pick(game, 'game.player.rating', null),
    lang: pick(game, 'game.lang', null),
    // 游戏要求键位串长度 38, 不合法则视为未配置
    keymap: typeof keymap === 'string' && keymap.length === 38 ? keymap : null,
    ledPort: pick(game, 'devices.led_controller.port', null),
    comMainPort: pick(game, 'devices.com.port_maindev', null),
    comIoPort: pick(game, 'devices.com.port_umgrio', null),
    amreaderPort: pick(game, 'devices.amreader.port', null),
    amreaderKeyA: pick(game, 'devices.amreader.key_a', null),
    amreaderKeyB: pick(game, 'devices.amreader.key_b', null),
    resolution: pick(startup, 'last_screen_size', null),
    windowMode: pick(startup, 'last_screen_mode', null) || pick(game, 'system.wndmode', null),
    force120fps: pick(game, 'system.force_120fps', null),
    hardwareAcceleration: pick(game, 'system.hardware_acceleration', null),
    bgThrottling: pick(game, 'system.bg_throttling', null),
    blockSleep: pick(game, 'system.block_sleep', null),
    scalingQuality: pick(game, 'system.scaling_quality', null),
  };
  return hostConfig;
}
