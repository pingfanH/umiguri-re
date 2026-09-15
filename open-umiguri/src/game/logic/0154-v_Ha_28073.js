// game: 语句 154 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_Ha_28073(v_t_34112) {
    this._points = v_t_34112;
    let v_s_34113 = this,
      v_r_34114 = null;
    function v_a_34115(v_i_34116) {
      let v_e_34117 = v_s_34113.points,
        v_n_34118;
      for (; 1 < v_e_34117.length;) {
        v_n_34118 = [];
        for (let v_t_34119 = 0; v_t_34119 < v_e_34117.length - 1; ++v_t_34119) v_n_34118.push([v_Ee_28084(v_e_34117[v_t_34119][0], v_e_34117[v_t_34119 + 1][0], v_i_34116), v_Ee_28084(v_e_34117[v_t_34119][1], v_e_34117[v_t_34119 + 1][1], v_i_34116)]);
        v_e_34117 = v_n_34118;
      }
      return [v_e_34117[0][0], v_e_34117[0][1]];
    }
    this.at = v_a_34115, this.at_eq = function (v_i_34120) {
      let v_e_34121 = 0,
        v_n_34122 = v_s_34113.points[0],
        v_r_34123;
      for (let v_t_34124 = 0; v_t_34124 <= 1 && (v_n_34122 = v_a_34115(v_t_34124), !(v_r_34123 && (v_e_34121 += mathSqrt((v_n_34122[0] - v_r_34123[0]) * (v_n_34122[0] - v_r_34123[0]) + (v_n_34122[1] - v_r_34123[1]) * (v_n_34122[1] - v_r_34123[1]))) >= v_i_34120)); v_t_34124 += .001) v_r_34123 = v_n_34122;
      return v_n_34122;
    }, Object.defineProperties(this, {
      points: {
        get: () => this._points
      },
      length: {
        get: () => {
          if (null === v_r_34114) {
            let v_i_34125 = 0,
              v_e_34126,
              v_n_34127;
            for (let v_t_34128 = 0; v_t_34128 <= 1; v_t_34128 += .001) v_e_34126 = v_a_34115(v_t_34128), v_n_34127 && (v_i_34125 += mathSqrt((v_e_34126[0] - v_n_34127[0]) * (v_e_34126[0] - v_n_34127[0]) + (v_e_34126[1] - v_n_34127[1]) * (v_e_34126[1] - v_n_34127[1]))), v_n_34127 = v_e_34126;
            v_r_34114 = v_i_34125;
          }
          return v_r_34114;
        }
      }
    });
  }