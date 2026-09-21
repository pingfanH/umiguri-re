// 打包产物 JS 混淆。仅在 release 打包时启用(命令行传 --obfuscate)，
// dev 构建(build:esm:dev)不带该参数，保持可读、便于调试。
//
// 选项刻意保守:
//   - renameGlobals: false —— 宿主与游戏通过 window 全局(umgr_elc/__umgLanes…)通信, 不能改名;
//   - 不开 controlFlowFlattening / deadCodeInjection / selfDefending / stringArrayEncoding:
//     体积与运行时开销大, 且容易破坏 WebGL/异步/定时逻辑;
//   - 只做标识符重命名 + 字符串数组抽取, 足以让逆向阅读成本大幅上升。
import JavaScriptObfuscator from 'javascript-obfuscator';

export const OBFUSCATE = process.argv.includes('--obfuscate');

const OPTIONS = {
  compact: true,
  target: 'browser',
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,
  stringArray: true,
  stringArrayThreshold: 0.75,
  rotateStringArray: true,
  stringArrayEncoding: [],
  selfDefending: false,
  debugProtection: false,
  controlFlowFlattening: false,
  deadCodeInjection: false,
  splitStrings: false,
  unicodeEscapeSequence: false,
  disableConsoleOutput: false,
  sourceMap: false,
};

export function obfuscate(code, label) {
  if (!OBFUSCATE) return code;
  const t0 = Date.now();
  const out = JavaScriptObfuscator.obfuscate(code, OPTIONS).getObfuscatedCode();
  console.log(
    `[obfuscate] ${label}: ${(code.length / 1048576).toFixed(2)}MB -> ${(out.length / 1048576).toFixed(2)}MB (${Date.now() - t0}ms)`
  );
  return out;
}
