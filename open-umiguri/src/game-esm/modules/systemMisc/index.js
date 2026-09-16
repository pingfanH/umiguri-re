// 模块: systemMisc
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createSystemMisc(scope) {
  let v_n_33327 = window.umgr_elc.si,
    v_e_33328 = getCurrentProcessId(),
    v_s_33329 = void 0;
  return v_n_33327.a4(function (v_t_33330, v_i_33331, v_e_33332, v_n_33333, v_r_33334) {
    v_s_33329 && v_s_33329(v_i_33331, v_e_33332, v_n_33333, v_r_33334);
  }), {
    Vu: async (v_t_33335, v_i_33336) => {
      v_n_33327.Vu(v_t_33335, v_i_33336), scope.v_R_27641 = v_t_33335 + "x" + v_i_33336;
    },
    w2: async () => {
      v_n_33327.w2();
    },
    b2: async v_t_33337 => {
      v_n_33327.se(v_t_33337);
    },
    m2: async v_t_33338 => {
      v_n_33327.sr(v_t_33338);
    },
    S2: async () => {
      v_n_33327.S2();
    },
    I2: async (v_t_33339, v_i_33340) => {
      v_n_33327.fc(v_t_33339, v_i_33340);
    },
    uv: async () => v_n_33327.sc(),
    O6: async (v_t_33341, v_i_33342, v_e_33343) => v_n_33327.jc(v_t_33341, v_i_33342, v_e_33343, 60),
    z6: async (v_t_33344, v_i_33345) => {
      await v_n_33327.ss(v_e_33328, v_t_33344, v_i_33345);
    },
    K6: async () => {
      await v_n_33327.so();
    },
    Fp: () => new Promise(v_e_33346 => {
      v_n_33327.xo(function (v_t_33347, v_i_33348) {
        v_e_33346(v_i_33348);
      });
    }),
    OR: (v_t_33349, v_i_33350) => {
      v_t_33349 ? v_n_33327.r4(v_i_33350) : v_n_33327.f4(v_i_33350);
    },
    kb: async v_t_33351 => v_n_33327.sp(v_t_33351),
    Xk: async v_t_33352 => {
      v_s_33329 = v_t_33352;
      v_t_33352 = await v_n_33327.op();
      return v_s_33329 = void 0, v_t_33352;
    },
    qk: () => {
      v_n_33327.t4();
    },
    cg: async v_t_33353 => {
      await v_n_33327.s4(v_t_33353);
    },
    ug: v_t_33354 => {
      v_n_33327.d4(v_t_33354);
    },
    t2: () => v_n_33327.t2(),
    sa: () => v_n_33327.sa()
  };
}
