// game: 语句 206 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_el_28148(v_t_34588, v_i_34589, v_e_34590) {
    let v_n_34591 = 1,
      v_r_34592 = 0;
    let v_s_34593 = "Normal";
    v_i_34589 && (50 <= v_i_34589.Pm ? v_s_34593 = "Rainbow" : 25 <= v_i_34589.Pm ? v_s_34593 = "Platinum" : 15 <= v_i_34589.Pm ? v_s_34593 = "Gold" : 10 <= v_i_34589.Pm ? v_s_34593 = "Silver" : 5 <= v_i_34589.Pm && (v_s_34593 = "Copper"), v_n_34591 = v_me_27822(v_pe_27823(v_i_34589.Pm, 1), 50), v_r_34592 = v_n_34591 < 50 ? v_me_27822(v_pe_27823(v_i_34589.Gm / v_lt_27786[v_n_34591], 0), 1) : 1), v_e_34590 ? v_t_34588.ot("charaRankBg").Je = "charaRank" + v_s_34593 : v_t_34588.ot("charaPanelBg").Je = "panelChara" + v_s_34593, v_t_34588.ot("charaRankNum").Wt = "" + v_n_34591, v_t_34588.ot("charaRankMax").Be = 50 === v_n_34591, v_t_34588.ot("charaRankGauge").ln(v_r_34592);
  }