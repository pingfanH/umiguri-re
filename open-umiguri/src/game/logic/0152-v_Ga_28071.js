// game: 语句 152 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_Ga_28071(v_e_34106) {
    if (void 0 !== v_e_34106) {
      if (null === v_e_34106) return null;
      let v_i_34108 = new v_e_34106.constructor();
      var v_n_34107 = Object.keys(v_e_34106);
      if ("string" == typeof v_e_34106 || "boolean" == typeof v_e_34106 || "number" == typeof v_e_34106) v_i_34108 = v_e_34106;else if (0 < v_n_34107.length) for (let v_t_34109 = 0; v_t_34109 < v_n_34107.length; ++v_t_34109) v_i_34108[v_n_34107[v_t_34109]] = v_Ga_28071(v_e_34106[v_n_34107[v_t_34109]]);else Array.isArray(v_e_34106) || (v_i_34108 = v_e_34106);
      return v_i_34108;
    }
  }