// 模块: v_ts_27977
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_ts_27977(scope) {
  let v_i_33355 = window.umgr_elc.g4,
    v_e_33356 = [],
    v_n_33357 = void 0;
  return v_i_33355.x4(function (v_t_33358, v_i_33359) {
    v_n_33357 && v_n_33357(v_i_33359);
  }), {
    m4: async v_t_33360 => {
      v_e_33356 = await v_i_33355.jc(scope.currentLang, v_t_33360);
    },
    u4: async v_t_33361 => (v_n_33357 = v_t_33361, v_i_33355.ss()),
    _4: async v_t_33362 => (v_n_33357 = v_t_33362, v_i_33355.so()),
    v4: async () => {
      await v_i_33355.xo();
    },
    w4: () => v_e_33356,
    S4: () => 0 < v_e_33356.length,
    L4: async v_t_33363 => {
      await v_i_33355.sp(v_t_33363);
    }
  };
}
