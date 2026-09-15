// game: 语句 75 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_pr_27941(v_t_32312) {
    let v_i_32313 = v_ke_27824(1024 * v_t_32312),
      v_e_32314 = 0,
      v_n_32315;
    return 0 == v_i_32313 ? [0, 4] : (1 == (v_n_32315 = 1024 / (v_e_32314 = function (v_t_32316, v_i_32317) {
      let v_e_32318;
      v_t_32316 < v_i_32317 && (v_e_32318 = v_i_32317, v_i_32317 = v_t_32316, v_t_32316 = v_e_32318);
      for (; v_t_32316 % v_i_32317 != 0;) v_e_32318 = v_i_32317, v_i_32317 = v_t_32316 % v_i_32317, v_t_32316 = v_e_32318;
      return v_i_32317;
    }(v_i_32313, 1024))) ? v_e_32314 /= 4 : 2 == v_n_32315 && (v_e_32314 /= 2), [v_ke_27824(v_i_32313 / v_e_32314), v_ke_27824(1024 / v_e_32314)]);
  }