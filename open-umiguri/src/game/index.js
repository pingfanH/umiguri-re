// open-umiguri 游戏本体入口(说明性)
// 真正的装配由 build/assemble-game.mjs 读取 manifest.json 完成。
// vendor/: 第三方库与字形数据;逻辑与顺序见 manifest.json。
export const GAME_SOURCE = new URL('./manifest.json', import.meta.url);
