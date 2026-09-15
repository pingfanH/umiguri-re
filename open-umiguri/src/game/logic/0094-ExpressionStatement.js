// game: 语句 94 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Ur_27961.rt = function (v_t_33032, v_r_33033) {
    let v_s_33034 = new v_ds_27991(v_t_33032, 0, 2);
    v_s_33034.xl(function () {
      v_s_33034.E5("meta").then(function (v_t_33035) {
        if (null === v_t_33035) v_s_33034 = void 0, v_Fe_28101(() => v_r_33033(null));else {
          v_t_33035 = v_t_33035.replace(/\r\n/g, "\n").split("\n");
          let v_i_33036,
            v_e_33037 = "ja",
            v_n_33038 = new v_Ur_27961();
          v_De_28096(v_t_33035, function (v_t_33039) {
            (v_i_33036 = v_t_33039.split("\t")).length < 2 || ("TargetVer" === v_i_33036[0] ? "FirstPlay" === v_i_33036[1] ? v_n_33038.hi = !0 : v_n_33038.di.push(v_Pe_28064(v_i_33036[1])) : "Lang" === v_i_33036[0] ? v_e_33037 = v_i_33036[1] : "Page" === v_i_33036[0] && v_e_33037 === v_Hi_27855 && ((v_t_33039 = new v_Gr_27960()).ki = v_i_33036[1], v_t_33039.lf = v_i_33036[2], v_n_33038.vi.push(v_t_33039)));
          }), v_n_33038.gi = v_s_33034, v_Fe_28101(() => v_r_33033(v_n_33038));
        }
      });
    });
  };