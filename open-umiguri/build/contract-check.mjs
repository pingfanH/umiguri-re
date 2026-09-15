// 静态契约检查: 游戏包引用的宿主全局, 必须在宿主桥里有定义。
// 这不是运行时验证, 但能抓住「改名/上游替换把桥接口弄丢」这类明显回归。
//
// 依赖 dist/main.js 与 dist/www/tauri-bridge.js(先 npm run build)。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gameFile = path.join(root, 'dist/main.js');
const hostFile = path.join(root, 'dist/www/tauri-bridge.js');

// 宿主桥对外提供的全局(见 src/host/**)
const CONTRACT = [
  'umgr_elc', 'kbdStart', 'kbdUpdate', 'kbdHeld', 'kbdUni2Virt',
  'di8KbdStart', 'di8KbdUpdate', 'di8KbdHeld', 'di8KbdShutdown',
  'ugSerialCreate', 'ugSerialOpen', 'ugSerialWrite', 'ugSerialPop', 'ugSerialClose', 'ugSerialDestroy',
  'getCurrentProcessId', '__umgLanes', '__umgPadAt', '__umgPadTake', 'umgKeyPanel', 'umgStorageAccess',
];

const game = fs.readFileSync(gameFile, 'utf8');
const host = fs.readFileSync(hostFile, 'utf8');

let fail = 0;
for (const name of CONTRACT) {
  const word = new RegExp(`\\b${name.replace(/\$/g, '\\$')}\\b`);
  const inGame = word.test(game);
  // 宿主定义形式: window.X = 或 X: (umgr_elc 等)
  const defined = new RegExp(`window\\.${name.replace(/\$/g, '\\$')}\\s*=`).test(host) || new RegExp(`\\b${name}\\b`).test(host);
  if (inGame && !defined) {
    console.error(`FAIL 游戏引用但宿主未定义: ${name}`);
    fail++;
  } else if (!inGame) {
    console.log(`SKIP 游戏未引用: ${name}`);
  } else {
    console.log(`OK   ${name}`);
  }
}

// 反向: 桥命令名必须存在于 Rust 命令表
const rustLib = fs.readFileSync(path.join(root, 'src-tauri/src/lib.rs'), 'utf8');
for (const cmd of ['fs_list', 'fs_file', 'fs_size', 'fs_read', 'fs_write', 'handshake', 'diag', 'storage_access']) {
  const invoked = host.includes(`'${cmd}'`) || host.includes(`"${cmd}"`);
  const registered = rustLib.includes(cmd);
  if (invoked && !registered) {
    console.error(`FAIL 宿主调用但 Rust 未注册命令: ${cmd}`);
    fail++;
  }
}

console.log(fail ? `\n契约检查失败: ${fail}` : '\n契约检查通过');
process.exit(fail ? 1 : 0);
