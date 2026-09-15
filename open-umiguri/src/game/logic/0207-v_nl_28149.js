// game: 语句 207 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_nl_28149(v_i_34594, v_e_34595, v_n_34596) {
    let v_r_34597;
    (v_r_34597 = v_i_34594.ot("skillName")).Wt = v_e_34595.ct, v_r_34597.q3.rr = 0, (v_r_34597 = v_i_34594.ot("skillDesc")).Tn || (v_r_34597.Tn = new v_Bo_28128()), v_r_34597.Wt = v_r_34597.Tn.An(v_e_34595.if), v_r_34597.q3.rr = 0, null === v_e_34595.Om ? v_i_34594.ot("charaSkillIcon").Je = "icon" + v_Q_27767[v_e_34595.Vm] : (v_i_34594.ot("charaSkillIcon").Je = "icon" + v_Q_27767[v_e_34595.Vm] + "C", v_i_34594.ot("charaSkillCount").Wt = v_Qa_28089(v_e_34595.Om, 0, 999).toString()), v_i_34594.ot("charaSkillCount").Be = null !== v_e_34595.Om, v_i_34594.ot("charaSkillIconSp").Be = v_e_34595.Um;
    for (let v_t_34598 = 0; v_t_34598 < 5; ++v_t_34598) v_r_34597 = v_i_34594.ot("skillIndi" + v_t_34598), v_t_34598 >= v_e_34595.zm.length ? (v_r_34597.Be = !1, v_n_34596 && (v_i_34594.ot("skillIndiFx" + v_t_34598).Be = !1, v_i_34594.ot("skillIndiFlash" + v_t_34598).Be = !1)) : (v_r_34597.Be = !0, v_r_34597.Je = "indi" + v_Q_27767[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]], (v_r_34597 = v_i_34594.ot("skillIndiFx" + v_t_34598)) && (v_r_34597.Be = !0, v_r_34597.Je = "indiFx" + v_Q_27767[v_$_27766[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]]]), (v_r_34597 = v_i_34594.ot("skillIndiFlash" + v_t_34598)) && (v_r_34597.Be = v_$_27766[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]] !== v_Z_27765));
  }