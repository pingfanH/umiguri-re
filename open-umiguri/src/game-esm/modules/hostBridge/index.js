// 模块: hostBridge
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createHostBridge(scope) {
  let v_s_33263 = window.umgr_elc.st;
  function v_a_33264(v_t_33265) {
    return "function" == typeof v_t_33265 && v_t_33265(), !1;
  }
  return {
    ue: async (v_t_33266, v_i_33267) => {
      v_t_33266();
    },
    zu: async (v_t_33268, v_i_33269, v_e_33270) => {
      v_t_33268 = await v_s_33263.zu(v_t_33268);
      if (0 !== v_t_33268.status) return v_a_33264(v_e_33270);
      v_i_33269(v_t_33268.data);
    },
    Qf: async (v_t_33271, v_i_33272) => {
      var v_e_33273 = await v_s_33263.Qf();
      if (0 !== v_e_33273.status) return v_a_33264(v_i_33272);
      v_t_33271(v_e_33273.data.used, v_e_33273.data.free, v_e_33273.data.cap);
    },
    e2: async (v_t_33274, v_i_33275, v_e_33276) => {
      v_t_33274 = await v_s_33263.e2(v_t_33274);
      if (0 !== v_t_33274.status) return v_a_33264(v_e_33276);
      v_i_33275(v_t_33274.data);
    },
    yl: async (v_t_33277, v_i_33278, v_e_33279, v_n_33280) => {
      v_t_33277 = await v_s_33263.yl(v_t_33277, v_i_33278);
      if (0 !== v_t_33277.status) return v_a_33264(v_n_33280);
      v_e_33279(v_t_33277.data);
    },
    i2: async (v_t_33281, v_i_33282, v_e_33283, v_n_33284) => {
      v_t_33281 = await v_s_33263.i2(v_t_33281, v_i_33282);
      if (0 !== v_t_33281.status) return v_a_33264(v_n_33284);
      v_e_33283(v_t_33281.data);
    },
    n2: async (v_t_33285, v_i_33286, v_e_33287) => {
      v_t_33285 = await v_s_33263.n2(v_t_33285);
      if (0 !== v_t_33285.status) return v_a_33264(v_e_33287);
      v_i_33286(v_t_33285.data);
    },
    o2: async (v_t_33288, v_i_33289, v_e_33290, v_n_33291, v_r_33292) => {
      v_t_33288 = await v_s_33263.o2(v_t_33288, v_i_33289, v_e_33290);
      if (0 !== v_t_33288.status) return v_a_33264(v_r_33292);
      v_n_33291(v_t_33288.data);
    },
    l2: async (v_t_33293, v_i_33294, v_e_33295, v_n_33296, v_r_33297) => {
      v_t_33293 = await v_s_33263.l2(v_t_33293, v_i_33294, v_e_33295);
      if (0 !== v_t_33293.status) return v_a_33264(v_r_33297);
      v_n_33296(v_t_33293.data);
    },
    _2: async (v_t_33298, v_i_33299, v_e_33300) => {
      v_t_33298 = await v_s_33263._2(v_t_33298);
      if (0 !== v_t_33298.status) return v_a_33264(v_e_33300);
      v_i_33299(v_t_33298.data.val);
    },
    qu: async (v_t_33301, v_i_33302, v_e_33303) => {
      v_t_33301 = await v_s_33263.sn(v_t_33301);
      if (0 !== v_t_33301.status) return v_a_33264(v_e_33303);
      v_i_33302(new Blob([v_t_33301.data], {
        type: "application/octet-stream"
      }));
    },
    xl: async (v_t_33304, v_i_33305, v_e_33306, v_n_33307, v_r_33308) => {
      v_t_33304 = await v_s_33263.xl(v_t_33304, v_i_33305, v_e_33306);
      if (0 !== v_t_33304.status) return v_a_33264(v_r_33308);
      v_n_33307(v_t_33304.data);
    },
    Xu: async (v_t_33309, v_i_33310, v_e_33311, v_n_33312, v_r_33313) => {
      v_t_33309 = await v_s_33263.Xu(v_t_33309, v_i_33310);
      if (0 !== v_t_33309.status) return v_a_33264(v_r_33313);
      v_n_33312(v_t_33309.data.entry, v_t_33309.data.writer);
    }
  };
}
