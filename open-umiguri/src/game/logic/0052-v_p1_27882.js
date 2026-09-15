// game: 语句 52 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_p1_27882(v_t_28231) {
    var v_i_28232 = new v_Po_28121(),
      v_t_28231 = (v_i_28232.i3("utf-8"), v_i_28232.hg(v_ec_28201()), v_i_28232.hg(v_ec_28201()), v_i_28232.hg(256), v_i_28232.vg(v_t_28231.filename), v_i_28232.hg(v_ec_28201()), v_i_28232.Tg(v_t_28231.lineno), v_i_28232.Tg(v_t_28231.colno), v_i_28232.hg(v_ec_28201()), v_i_28232.vg(v_t_28231.message), v_ic_28200(v_i_28232.mg(), !0)),
      v_i_28232 = "ERROR REPORT\nToken:\n" + function (v_i_28233, v_e_28234) {
        let v_n_28235 = "";
        for (let v_t_28236 = 0; v_t_28236 < v_i_28233.byteLength; ++v_t_28236) !v_e_28234 || !v_t_28236 || 15 & v_t_28236 || (v_n_28235 += "\n"), v_n_28235 += v_Xa_28081(v_i_28233[v_t_28236].toString(16), 2, "0");
        return v_n_28235;
      }(v_t_28231, !0);
    v_Wi_27863(), v_Qr_27976.m2("----------------"), v_Qr_27976.m2(v_i_28232), alert(v_i_28232 + "\n\nthis report is saved in log.txt");
  }