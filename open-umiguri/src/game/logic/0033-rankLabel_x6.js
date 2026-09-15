// game: 语句 33 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const raf = requestAnimationFrame,
    kbdStartFn = kbdStart,
    kbdUpdateFn = kbdUpdate,
    kbdHeldFn = kbdHeld,
    kbdUni2VirtFn = kbdUni2Virt,
    di8KbdStartFn = di8KbdStart,
    di8KbdUpdateFn = di8KbdUpdate,
    di8KbdHeldFn = di8KbdHeld,
    di8KbdShutdownFn = di8KbdShutdown,
    rankLabel = function (v_t_28215) {
      return 1009e3 <= v_t_28215 ? "Sssp" : 1007500 <= v_t_28215 ? "Sss" : 1005e3 <= v_t_28215 ? "Ssp" : 1e6 <= v_t_28215 ? "Ss" : 99e4 <= v_t_28215 ? "Sp" : 975e3 <= v_t_28215 ? "S" : 95e4 <= v_t_28215 ? "Aaa" : 925e3 <= v_t_28215 ? "Aa" : 9e5 <= v_t_28215 ? "A" : 8e5 <= v_t_28215 ? "Bbb" : 7e5 <= v_t_28215 ? "Bb" : 6e5 <= v_t_28215 ? "B" : 5e5 <= v_t_28215 ? "C" : "D";
    },
    rankLevel = function (v_t_28216) {
      return 1009e3 <= v_t_28216 ? 13 : 1007500 <= v_t_28216 ? 12 : 1005e3 <= v_t_28216 ? 11 : 1e6 <= v_t_28216 ? 10 : 99e4 <= v_t_28216 ? 9 : 975e3 <= v_t_28216 ? 8 : 95e4 <= v_t_28216 ? 7 : 925e3 <= v_t_28216 ? 6 : 9e5 <= v_t_28216 ? 5 : 8e5 <= v_t_28216 ? 4 : 7e5 <= v_t_28216 ? 3 : 6e5 <= v_t_28216 ? 2 : 5e5 <= v_t_28216 ? 1 : 0;
    },
    rankGrade = function (v_t_28217) {
      return 975e3 <= v_t_28217 ? "S" : 9e5 <= v_t_28217 ? "A" : 6e5 <= v_t_28217 ? "B" : 5e5 <= v_t_28217 ? "C" : "D";
    },
    ratingColorName = function (v_t_28218) {
      return v_t_28218 < 400 || v_t_28218 < 700 || v_t_28218 < 1e3 || v_t_28218 < 1200 ? "Wt" : v_t_28218 < 1325 ? "Cp" : v_t_28218 < 1450 ? "Sv" : v_t_28218 < 1525 ? "Gd" : v_t_28218 < 1600 ? "Pt" : "Rb";
    },
    ratingColorName2 = function (v_t_28219) {
      return v_t_28219 < 400 ? "Gr" : v_t_28219 < 700 ? "Og" : v_t_28219 < 1e3 ? "Rd" : v_t_28219 < 1200 ? "Pp" : v_t_28219 < 1325 ? "Cp" : v_t_28219 < 1450 ? "Sv" : v_t_28219 < 1525 ? "Gd" : v_t_28219 < 1600 ? "Pt" : "Rb";
    },
    ratingColorRgba = function (v_t_28220) {
      return v_t_28220 < 400 ? [89 / 255, .8, 37 / 255, 1] : v_t_28220 < 700 ? [253 / 255, 158 / 255, 52 / 255, 1] : v_t_28220 < 1e3 ? [253 / 255, 82 / 255, 52 / 255, 1] : v_t_28220 < 1200 ? [180 / 255, 52 / 255, 253 / 255, 1] : [1, 1, 1, 1];
    },
    arrayPush = Array.prototype.push,
    v_Gi_27853 = [v_Va_28079, v_Wa_28080, v_Wa_28080],
    supportedLangs = ["ja-JP", "en-US", "zh-CN"];