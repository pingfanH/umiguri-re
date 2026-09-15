// game: 语句 208 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_rl_28150(v_t_34599, v_i_34600) {
    var v_e_34601 = v_oe_27649.Ox.find(v_t_34607 => v_t_34607.Ae === v_i_34600.nx);
    v_t_34599.ot("guestTitleText").Wt = v_i_34600.ox, v_t_34599.ot("guestTitlePlate").Je = "title" + v_ot_27785[v_i_34600.lx], v_t_34599.ot("guestPlayerName").Wt = v_i_34600.om, v_t_34599.ot("guestChara").zt = !0, v_t_34599.ot("guestChara").Xt = v_i_34600.ux, v_t_34599.ot("guestSkillName").Wt = v_i_34600.RC;
    let v_n_34602 = 0;
    switch (v_i_34600.MC) {
      case v_mt_27749:
        v_n_34602 = v_Wt_27759;
        break;
      case v_pt_27750:
        v_n_34602 = v_Kt_27760;
        break;
      case v_kt_27751:
        v_n_34602 = v_Yt_27761;
        break;
      case v_bt_27752:
      case v_yt_27753:
      case v_St_27754:
      case v_At_27755:
        v_n_34602 = v_qt_27762;
        break;
      case v_jt_27756:
      case v_Ot_27757:
      case v_Vt_27758:
        v_n_34602 = v_Zt_27763;
        break;
      default:
        v_n_34602 = v_gt_27748;
    }
    v_t_34599.ot("guestSkill").Je = (v_Wt_27759 <= v_n_34602 ? "indi" : "icon") + v_Q_27767[v_n_34602], v_e_34601 && (v_t_34599.ot("guestNameplate").Je = "namePlate_" + v_Q0_27805[v_e_34601.te], v_t_34599.ot("guestDiff").Je = "tagDiff_" + v_Q0_27805[v_e_34601.te]);
    var v_e_34601 = v_i_34600.lm,
      v_r_34603 = "" + v_ke_27824(v_e_34601 / 100),
      v_s_34604 = v_Xa_28081("" + v_e_34601 % 100, 2, "0"),
      v_a_34605 = v_Fi_27849(v_e_34601),
      v_e_34601 = v_Bi_27851(v_e_34601),
      v_o_34606 = v_t_34599.ot("guestRatingText"),
      v_t_34599 = v_t_34599.ot("guestRatingLabel");
    v_o_34606.Wt = v_r_34603 + "P" + v_s_34604, v_o_34606.Ak = "rating" + v_a_34605, v_o_34606.Qe(v_e_34601[0], v_e_34601[1], v_e_34601[2], v_e_34601[3]), v_t_34599.Je = "numRating" + v_a_34605 + "Rating", v_t_34599.Qe(v_e_34601[0], v_e_34601[1], v_e_34601[2], v_e_34601[3]);
  }