// 模块: v_Or_27965
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Or_27965(scope) {
  let v_o_33115 = !1,
    v_l_33116 = {
      result_rank_sssp: 0,
      result_rank_sss: 0,
      result_rank_ssp: 0,
      result_rank_ss: 0,
      result_rank_sp: 0,
      result_rank_s: 0,
      result_rank_aaa: 0,
      result_rank_aa: 0,
      result_rank_a: 0,
      result_rank_bbb: 0,
      result_rank_bb: 0,
      result_rank_b: 0,
      result_rank_c: 0,
      result_rank_d: 0,
      result_all_justice: 0,
      result_full_combo: 0,
      result_full_chain: 0,
      result_1000_chain: 0,
      result_2000_chain: 0,
      result_3000_chain: 0,
      result_4000_chain: 0,
      result_5000_chain: 0,
      result_new_record: 0,
      result_all_clear: 0,
      scene_select_mode: 0,
      scene_course_result: 0,
      scene_user_box_confirm: 0
    };
  function v_n_33117() {
    v_o_33115 = !1;
    for (const v_t_33119 in v_l_33116) scope.v_Se_27889.e6(v_l_33116[v_t_33119]), v_l_33116[v_t_33119] = 0;
  }
  function v_e_33118(v_t_33120, v_i_33121) {
    scope.v_Se_27889.i6(v_l_33116[v_t_33120]), scope.v_Se_27889.dn(v_l_33116[v_t_33120]), v_i_33121 && scope.v_uo_28102(v_i_33121, scope.v_Se_27889.w6(v_l_33116[v_t_33120]));
  }
  return {
    _n: async function (v_i_33122, v_t_33123, v_r_33124) {
      let v_s_33125 = scope.v_be_27857.Vp.find(v_t_33127 => v_t_33127.id === v_i_33122);
      if (v_s_33125) {
        let v_n_33128 = v_s_33125.has_long_voice && v_t_33123 ? [["result_rank_sssp", "result_rank_sssp_long"], ["result_rank_sss", "result_rank_sss_long"], ["result_rank_ssp", "result_rank_ssp_long"], ["result_rank_ss", "result_rank_ss_long"], ["result_rank_sp", "result_rank_sp_long"], ["result_rank_s", "result_rank_s_long"], ["result_rank_aaa", "result_rank_aaa_long"], ["result_rank_aa", "result_rank_aa_long"], ["result_rank_a", "result_rank_a_long"], ["result_rank_bbb", "result_rank_bbb_long"], ["result_rank_bb", "result_rank_bb_long"], ["result_rank_b", "result_rank_b_long"], ["result_rank_c", "result_rank_c_long"], ["result_rank_d", "result_rank_d_long"], ["result_all_justice", "result_all_justice"], ["result_full_combo", "result_full_combo"], ["result_full_chain", "result_full_chain"], ["result_1000_chain", "result_1000_chain"], ["result_2000_chain", "result_2000_chain"], ["result_3000_chain", "result_3000_chain"], ["result_4000_chain", "result_4000_chain"], ["result_5000_chain", "result_5000_chain"], ["result_new_record", "result_new_record"], ["result_all_clear", "result_all_clear"], ["scene_select_mode", "scene_select_mode"], ["scene_course_result", "scene_course_result"], ["scene_user_box_confirm", "scene_user_box_confirm"]] : [["result_rank_sssp", "result_rank_sssp"], ["result_rank_sss", "result_rank_sss"], ["result_rank_ssp", "result_rank_ssp"], ["result_rank_ss", "result_rank_ss"], ["result_rank_sp", "result_rank_sp"], ["result_rank_s", "result_rank_s"], ["result_rank_aaa", "result_rank_aaa"], ["result_rank_aa", "result_rank_aa"], ["result_rank_a", "result_rank_a"], ["result_rank_bbb", "result_rank_bbb"], ["result_rank_bb", "result_rank_bb"], ["result_rank_b", "result_rank_b"], ["result_rank_c", "result_rank_c"], ["result_rank_d", "result_rank_d"], ["result_all_justice", "result_all_justice"], ["result_full_combo", "result_full_combo"], ["result_full_chain", "result_full_chain"], ["result_1000_chain", "result_1000_chain"], ["result_2000_chain", "result_2000_chain"], ["result_3000_chain", "result_3000_chain"], ["result_4000_chain", "result_4000_chain"], ["result_5000_chain", "result_5000_chain"], ["result_new_record", "result_new_record"], ["result_all_clear", "result_all_clear"], ["scene_select_mode", "scene_select_mode"], ["scene_course_result", "scene_course_result"], ["scene_user_box_confirm", "scene_user_box_confirm"]];
        if (v_s_33125.arc) {
          let v_e_33129 = new scope.v_vs_27992("/voices/" + v_i_33122 + "/data.arc", 0, 1);
          v_e_33129.xl(async function () {
            for (const v_i_33131 of v_n_33128) {
              var v_t_33130 = await scope.v_Se_27889.mv(await v_e_33129.pi(v_i_33131[1]));
              (v_l_33116[v_i_33131[0]] = v_t_33130) && scope.v_Se_27889.Mc(v_t_33130, v_s_33125.volume);
            }
            v_o_33115 = !0, v_r_33124(!0);
          });
        } else {
          for (const v_a_33132 of v_n_33128) {
            var v_e_33126 = await scope.v_Se_27889.Q4("/voices/" + v_i_33122 + "/" + v_a_33132[1] + ".wav");
            (v_l_33116[v_a_33132[0]] = v_e_33126) && scope.v_Se_27889.Mc(v_e_33126, v_s_33125.volume);
          }
          v_o_33115 = !0, v_r_33124(!0);
        }
      } else v_n_33117(), v_r_33124();
    },
    pf: v_n_33117,
    dn: v_e_33118,
    q4: function (v_t_33133, v_i_33134) {
      v_i_33134 ? v_e_33118("result_new_record", function () {
        v_e_33118("result_rank_" + scope.rankName(v_t_33133));
      }) : v_e_33118("result_rank_" + scope.rankName(v_t_33133));
    },
    X4: function () {
      v_e_33118("result_all_justice");
    },
    Z4: function () {
      v_e_33118("result_full_combo");
    },
    lC: function () {
      v_e_33118("result_full_chain");
    },
    cC: function (v_t_33135) {
      1 === v_t_33135 ? v_e_33118("result_1000_chain") : 2 === v_t_33135 ? v_e_33118("result_2000_chain") : 3 === v_t_33135 ? v_e_33118("result_3000_chain") : 4 === v_t_33135 && v_e_33118("result_4000_chain");
    },
    Y4: function () {
      for (const v_t_33136 in v_l_33116) scope.v_Se_27889.i6(v_l_33116[v_t_33136]);
    }
  };
}
