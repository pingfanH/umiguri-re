// game: 语句 180 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_oo_28098(v_i_34312, v_e_34313, v_n_34314) {
    if (0 === v_i_34312.length) v_Fe_28101(v_n_34314);else {
      let v_t_34315 = v_i_34312.shift();
      v_Fe_28101(function () {
        v_e_34313(function () {
          v_oo_28098(v_i_34312, v_e_34313, v_n_34314);
        }, v_n_34314, v_t_34315);
      });
    }
  }