// game: 语句 260 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_ic_28200(v_i_35226, v_e_35227) {
    var v_n_35228 = v_y1_27885.length,
      v_t_35229 = v_i_35226.byteLength,
      v_r_35230 = new Uint8Array(v_t_35229),
      v_s_35231 = v_y1_27885.map(v_t_35236 => 90 ^ v_t_35236);
    let v_a_35232 = 0,
      v_o_35233 = 0,
      v_l_35234 = 0;
    for (let v_t_35237 = 0; v_t_35237 < v_i_35226.length; ++v_t_35237) {
      v_o_35233 = (v_o_35233 + v_s_35231[v_a_35232 = (v_a_35232 + 1) % v_n_35228]) % v_n_35228;
      var v_c_35235 = v_s_35231[v_a_35232 % v_n_35228],
        v_c_35235 = (v_s_35231[v_a_35232 % v_n_35228] = v_s_35231[v_o_35233], v_s_35231[v_o_35233] = v_c_35235, v_s_35231[(v_s_35231[v_a_35232] + v_s_35231[v_o_35233]) % v_n_35228]);
      v_r_35230[v_t_35237] = v_c_35235 ^ v_i_35226[v_t_35237] ^ 211 & v_l_35234, v_l_35234 = v_l_35234 + ((v_e_35227 ? v_r_35230 : v_i_35226)[v_t_35237] + v_s_35231[v_t_35237]) & 255;
    }
    return v_r_35230;
  }