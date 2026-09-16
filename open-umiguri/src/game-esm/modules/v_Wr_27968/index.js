// 模块: v_Wr_27968
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Wr_27968(scope) {
  let v_a_33170 = new Map(),
    v_n_33171 = new Map();
  function v_o_33172(v_t_33173, v_i_33174) {
    let v_e_33175 = v_n_33171.get(v_t_33173);
    v_e_33175 || (v_e_33175 = [], v_n_33171.set(v_t_33173, v_e_33175)), v_e_33175.push(v_i_33174);
  }
  return {
    _n: function (v_r_33176) {
      let v_s_33177 = new scope.v_ms_27995();
      scope.v_Le_28076([v_i_33178 => {
        scope.languagePackages.it("tables/coopChatTable.krtbl", function (v_t_33179) {
          null === v_t_33179 ? v_r_33176(!1) : (v_s_33177.uf(v_t_33179), scope.v_Me_28078(v_i_33178));
        });
      }, v_t_33180 => {
        var v_i_33181 = v_s_33177.ff("_root");
        if (v_i_33181) {
          for (const v_n_33183 of v_i_33181.hf()) {
            var v_e_33182 = new scope.v_Vr_27967(v_n_33183[0], v_n_33183[1], v_n_33183[2], v_n_33183[3], v_n_33183[4], v_n_33183[5], v_n_33183[6], v_n_33183[7]);
            v_a_33170.set(v_e_33182.fI, v_e_33182), v_e_33182.SI && v_o_33172(0, v_e_33182.fI), v_e_33182.AI && v_o_33172(1, v_e_33182.fI), v_e_33182.xI && v_o_33172(2, v_e_33182.fI), v_e_33182.CI && v_o_33172(3, v_e_33182.fI), v_e_33182.TI && v_o_33172(4, v_e_33182.fI);
          }
          v_r_33176(!0);
        } else v_r_33176(!1);
      }]);
    },
    oI: v_t_33184 => v_a_33170.get(v_t_33184),
    NI: v_t_33185 => v_n_33171.get(v_t_33185)
  };
}
