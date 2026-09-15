// game: 语句 73 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_gr_27939(v_t_32300, v_i_32301, v_e_32302) {
    let v_n_32303 = 0,
      v_r_32304 = 0,
      v_s_32305 = 1,
      v_a_32306 = v_pe_27823(v_i_32301, 0);
    return v_De_28096(v_t_32300.$w.up, function (v_t_32307) {
      if (v_t_32307.mp > v_a_32306) return 1;
      v_n_32303 += (v_t_32307.mp - v_r_32304) * v_de_27728 * v_s_32305, v_s_32305 = v_t_32307.Jg, v_r_32304 = v_t_32307.mp;
    }), v_n_32303 += (v_i_32301 - v_r_32304) * v_de_27728 * v_s_32305, v_ke_27824(v_n_32303 + v_e_32302);
  }