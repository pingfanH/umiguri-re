// 模块: skillTrigger
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createSkillTrigger(scope) {
  let v_s_31191 = new Map(),
    v_r_31192 = new Map(),
    v_e_31193 = new Map();
  v_s_31191.set(v_bi_30304, []), v_s_31191.set(v_yi_30305, []), v_e_31193.set(v_bi_30304, 1), v_e_31193.set(v_yi_30305, 1), v_r_31192.set(v_bi_30304, [0, 1, 2, 3]), v_r_31192.set(v_yi_30305, [0, 1, 2, 3]);
  let v_a_31194 = [];
  function v_o_31195(v_t_31199) {
    return v_t_31199 === scope.v_ue_27682 || v_t_31199 === scope.v_t0_27693 ? v_yi_30305 : v_t_31199 === scope.v_ce_27678 || v_t_31199 === scope.v_le_27675 ? v_bi_30304 : 0;
  }
  function v_l_31196(v_t_31200) {
    return v_t_31200 === v_bi_30304 ? "slide" : v_t_31200 === v_yi_30305 ? "airhold" : "";
  }
  function v_c_31197(v_t_31201) {
    let v_i_31202;
    for (v_i_31202 of v_s_31191.get(v_t_31201)) v_i_31202.Rc || scope.v_Ae_27892.Mc(v_l_31196(v_t_31201) + "loop" + v_i_31202.id, function (v_t_31203, v_e_31204) {
      return 3 < (v_t_31203 = v_s_31191.get(v_t_31203).reduce(function (v_t_31205, v_i_31206) {
        return v_i_31206.Rc || v_i_31206.Pc != v_e_31204 ? v_t_31205 : v_t_31205 + 1;
      }, 0)) ? .55 : 3 === v_t_31203 ? .65 : 2 === v_t_31203 ? .8 : 1;
    }(v_t_31201, v_i_31202.Pc) * v_e_31193.get(v_t_31201));
  }
  function v_u_31198(v_i_31207, v_e_31208, v_n_31209) {
    (v_a_31194 = v_a_31194.filter(v_t_31210 => v_t_31210.Fi !== v_i_31207 || v_t_31210.Ae !== v_e_31208 || v_t_31210.Dc !== v_n_31209)).push({
      Fi: v_i_31207,
      Ae: v_e_31208,
      Dc: v_n_31209
    });
  }
  return {
    ri: function (v_i_31211) {
      if (!v_i_31211.qg) {
        var v_t_31212,
          v_e_31213 = v_o_31195(v_i_31211.Fi);
        if (null !== v_e_31213 && -1 === v_s_31191.get(v_e_31213).findIndex(v_t_31215 => v_t_31215.Gc === v_i_31211.Ae)) {
          if (4 <= v_s_31191.get(v_e_31213).length) for (; 4 <= v_s_31191.get(v_e_31213).length;) v_t_31212 = v_s_31191.get(v_e_31213).shift(), v_r_31192.get(v_e_31213).push(v_t_31212.id), v_u_31198(v_e_31213, v_t_31212.id, 2);
          var v_n_31214 = v_r_31192.get(v_e_31213).shift();
          void 0 !== v_n_31214 && (v_u_31198(v_e_31213, v_n_31214, 2), v_s_31191.get(v_e_31213).push({
            id: v_n_31214,
            Pc: v_i_31211.od,
            Gc: v_i_31211.Ae,
            Rc: !0
          }), v_u_31198(v_e_31213, v_n_31214, 1));
        }
      }
    },
    oe: function () {
      let v_t_31216;
      for (v_t_31216 of v_a_31194) 1 === v_t_31216.Dc ? scope.v_Ae_27892.dn(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae) : 2 === v_t_31216.Dc && (scope.v_Ae_27892.n6(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae, 0, 0, 0), scope.v_Ae_27892.Mc(v_l_31196(v_t_31216.Fi) + "loop " + v_t_31216.Ae, 0), scope.v_Ae_27892.i6(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae));
      v_c_31197(v_bi_30304), v_c_31197(v_yi_30305), v_a_31194 = [];
    },
    Nc: function (v_i_31217, v_t_31218) {
      var v_e_31219,
        v_n_31220,
        v_r_31221 = v_o_31195(v_i_31217.Fi);
      null !== v_r_31221 && (v_e_31219 = v_s_31191.get(v_r_31221).find(v_t_31222 => v_t_31222.Gc === v_i_31217.Ae)) && (v_n_31220 = v_l_31196(v_r_31221) + "loop" + v_e_31219.id, v_e_31219.Rc !== v_t_31218) && ((v_e_31219.Rc = v_t_31218) && scope.v_Ae_27892.n6(v_n_31220, null, 0, 375), v_c_31197(v_r_31221));
    },
    Xe: function (v_i_31223) {
      var v_t_31224, v_e_31225, v_n_31226;
      v_i_31223.qg || null !== (v_t_31224 = v_o_31195(v_i_31223.Fi)) && (v_i_31223.qg = !0, -1 !== (v_e_31225 = v_s_31191.get(v_t_31224).findIndex(v_t_31227 => v_t_31227.Gc === v_i_31223.Ae))) && (v_n_31226 = v_l_31196(v_t_31224) + "loop" + v_s_31191.get(v_t_31224)[v_e_31225].id, scope.v_Ae_27892.n6(v_n_31226, null, 0, 375), v_r_31192.get(v_t_31224).push(v_s_31191.get(v_t_31224)[v_e_31225].id), v_s_31191.get(v_t_31224).splice(v_e_31225, 1), v_c_31197(v_t_31224));
    },
    Mc: function (v_t_31228, v_i_31229) {
      if (void 0 === v_i_31229) return v_e_31193.get(v_t_31228);
      v_e_31193.set(v_t_31228, v_i_31229);
    },
    Mt: function () {
      let v_e_31230;
      v_s_31191.forEach(function (v_t_31231, v_i_31232) {
        for (; 0 < v_t_31231.length;) v_e_31230 = v_t_31231.pop(), v_r_31192.get(v_i_31232).push(v_e_31230.id), scope.v_Ae_27892.i6(v_l_31196(v_i_31232) + "loop" + v_e_31230.id);
      });
    }
  };
}
