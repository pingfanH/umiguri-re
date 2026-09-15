// game: 语句 83 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Tr_27949 = {
    ef: function (v_i_32693) {
      let v_e_32694 = [],
        v_n_32695 = {};
      v_Le_28076([function (v_i_32696) {
        hostBridge.zu("/courses/", function (v_t_32697) {
          v_oo_28098(v_t_32697, function (v_i_32698, v_t_32699, v_e_32700) {
            if (!v_Da_28067(v_e_32700.name, ".ugr")) return v_i_32698();
            v_$r_27975.Ic("/courses/" + v_e_32700.name, function (v_t_32701) {
              null !== v_t_32701 && (v_t_32701 = function (v_t_32702) {
                var v_i_32703,
                  v_e_32704,
                  v_t_32702 = v_t_32702.replace(/\r\n/g, "\n").split("\n");
                let v_n_32705,
                  v_r_32706 = {
                    AP: 0,
                    BP: new v_xr_27947()
                  };
                if (v_De_28096(v_t_32702, function (v_t_32707) {
                  if (!((v_n_32705 = v_t_32707.split("\t")).length < 2)) switch (v_n_32705[1] = v_n_32705[1].trim(), v_n_32705[0]) {
                    case "CRSID":
                      v_r_32706.BP.Ae = v_n_32705[1];
                      break;
                    case "GROUP":
                      "1" === v_n_32705[1] ? v_r_32706.AP = 1 : "2" === v_n_32705[1] ? v_r_32706.AP = 2 : "3" === v_n_32705[1] ? v_r_32706.AP = 3 : "4" === v_n_32705[1] ? v_r_32706.AP = 4 : "5" === v_n_32705[1] ? v_r_32706.AP = 5 : "INF" === v_n_32705[1] ? v_r_32706.AP = 6 : "SP" !== v_n_32705[1] && "EX" !== v_n_32705[1] || (v_r_32706.AP = 99);
                      break;
                    case "TITLE":
                      v_r_32706.BP.lf = v_n_32705[1];
                      break;
                    case "LIFE":
                      v_r_32706.BP.bP = v_pe_27823(v_Pe_28064(v_n_32705[1]), 0);
                      break;
                    case "DAMAGE":
                      "J" === v_n_32705[1] ? v_r_32706.BP.zb = v_w0_27717 : "A" === v_n_32705[1] ? v_r_32706.BP.zb = v__e_27718 : "M" === v_n_32705[1] && (v_r_32706.BP.zb = v_he_27719), v_n_32705[2] && (v_r_32706.BP.TP = v_pe_27823(v_Pe_28064(v_n_32705[2]), 1));
                      break;
                    case "HEAL":
                      v_r_32706.BP.SP = v_pe_27823(v_Pe_28064(v_n_32705[1]), 0);
                      break;
                    case "HEALJDG":
                      v_r_32706.BP.EP = v_pe_27823(v_Pe_28064(v_n_32705[1]), 0), "C" === v_n_32705[2] ? v_r_32706.BP.LP = v_fe_27716 : "J" === v_n_32705[2] ? v_r_32706.BP.LP = v_w0_27717 : "A" === v_n_32705[2] && (v_r_32706.BP.LP = v__e_27718);
                      break;
                    case "MUSIC1":
                      v_r_32706.BP.hI[0] = new v_yr_27944(v_n_32705[1], v_Q0_27805.indexOf(v_n_32705[2]));
                      break;
                    case "MUSIC2":
                      v_r_32706.BP.hI[1] = new v_yr_27944(v_n_32705[1], v_Q0_27805.indexOf(v_n_32705[2]));
                      break;
                    case "MUSIC3":
                      v_r_32706.BP.hI[2] = new v_yr_27944(v_n_32705[1], v_Q0_27805.indexOf(v_n_32705[2]));
                      break;
                    case "TRACK":
                      var v_i_32708 = v_Pe_28064(v_n_32705[1]);
                      v_i_32708 < 0 || 2 < v_i_32708 || ("CHART" === v_n_32705[2] ? v_r_32706.BP.hI[v_i_32708] = new v_yr_27944(v_n_32705[3], v_Q0_27805.indexOf(v_n_32705[4])) : "LEVEL" === v_n_32705[2] ? v_r_32706.BP.hI[v_i_32708] = new v_Sr_27945(v_n_32705[3]) : "RANDOM" === v_n_32705[2] && (v_r_32706.BP.hI[v_i_32708] && v_r_32706.BP.hI[v_i_32708].Fi === v_Ar_27946 || (v_r_32706.BP.hI[v_i_32708] = new v_Ar_27946()), v_r_32706.BP.hI[v_i_32708].V2.push(new v_yr_27944(v_n_32705[3], v_Q0_27805.indexOf(v_n_32705[4])))));
                      break;
                    case "REWRITE":
                      if ("SPEED" === v_n_32705[1]) {
                        v_i_32708 = v_Re_28066(v_n_32705[2]);
                        if (!isNaN(v_i_32708)) {
                          let v_t_32709 = 100;
                          v_t_32709 = v_i_32708 < 1500 ? v_ke_27824(4 * v_i_32708) / .04 : v_ke_27824(2 * v_i_32708) / .02, v_r_32706.BP.CP.DP = v_me_27822(v_pe_27823(v_t_32709, 100), 2e3);
                        }
                      } else if ("FIELDWALL" === v_n_32705[1]) v_r_32706.BP.CP.Hs = v_La_28062(v_n_32705[2]);else if ("SKILL" === v_n_32705[1]) switch (v_Ra_28061(v_n_32705[2])) {
                        case "hard1":
                          v_r_32706.BP.CP.Ar = v__t_27743;
                          break;
                        case "hardair":
                          v_r_32706.BP.CP.Ar = v_dt_27745;
                          break;
                        case "hard2":
                          v_r_32706.BP.CP.Ar = v_ht_27744;
                          break;
                        case "hard2air":
                          v_r_32706.BP.CP.Ar = v_vt_27746;
                          break;
                        case "hard3":
                          v_r_32706.BP.CP.Ar = v_wt_27747;
                          break;
                        default:
                          v_r_32706.BP.CP.Ar = v_B0_27742;
                      }
                      break;
                    case "FIELDWALL":
                      "INIT" === v_n_32705[1] ? (v_i_32708 = v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.ue = v_i_32708)) : "FAR" === v_n_32705[1] ? (v_i_32708 = v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.IP = v_Qa_28089(v_i_32708, 0, 15))) : "NEAR" === v_n_32705[1] ? (v_i_32708 = v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.MP = v_Qa_28089(v_i_32708, 0, 15))) : "STEP_S" === v_n_32705[1] ? (v_i_32708 = v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.FP = v_i_32708)) : "STEP_F" === v_n_32705[1] && (v_i_32708 = v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.PP = v_i_32708));
                      break;
                    case "NODUP":
                      v_r_32706.BP.kI = v_La_28062(v_n_32705[1]);
                      break;
                    case "HIDERECORD":
                      v_r_32706.BP.bI = v_La_28062(v_n_32705[1]);
                  }
                }), 0 === v_r_32706.AP || "" === v_r_32706.BP.Ae || 0 === v_r_32706.BP.bP || 0 === v_r_32706.BP.zb) return null;
                v_r_32706.BP.CP.Hs && ((v_i_32703 = (v_t_32702 = v_r_32706.BP.CP.RP).MP) < (v_e_32704 = v_t_32702.IP) && (v_r_32706.BP.CP.Hs = !1), v_t_32702.ue = v_Qa_28089(v_t_32702.ue, v_e_32704, v_i_32703)), v_r_32706.BP.AP = v_r_32706.AP;
                for (let v_t_32710 = 0; v_t_32710 < 3; ++v_t_32710) if (!v_r_32706.BP.hI[v_t_32710]) return null;
                return v_r_32706;
              }(v_t_32701)) && (v_n_32695[v_t_32701.AP] || (v_n_32695[v_t_32701.AP] = []), v_n_32695[v_t_32701.AP].push(v_t_32701.BP)), v_i_32698();
            });
          }, () => {
            v_Me_28078(v_i_32696);
          });
        }, () => {
          v_Me_28078(v_i_32696);
        });
      }, function (v_t_32711) {
        v_De_28096([1, 2, 3, 4, 5, 6, 99], function (v_t_32712) {
          v_n_32695[v_t_32712] && v_e_32694.push({
            cls: v_t_32712,
            items: v_n_32695[v_t_32712]
          });
        }), v_Fe_28101(() => v_i_32693(v_e_32694));
      }]);
    },
    Ln: function (v_i_32713) {
      var v_e_32714 = [];
      switch (null !== v_i_32713.CP.DP && v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleForceSpeed"), [["SPEED", (v_i_32713.CP.DP / 100).toFixed(2)]])), v_i_32713.CP.Hs && v_e_32714.push(v_Ue_28209("courseRuleFieldWall")), v_i_32713.CP.Ar) {
        case v__t_27743:
          v_e_32714.push(v_Ue_28209("courseRuleJdgHard1"));
          break;
        case v_dt_27745:
          v_e_32714.push(v_Ue_28209("courseRuleJdgHardAir"));
          break;
        case v_ht_27744:
          v_e_32714.push(v_Ue_28209("courseRuleJdgHard2"));
          break;
        case v_vt_27746:
          v_e_32714.push(v_Ue_28209("courseRuleJdgHard2Air"));
          break;
        case v_wt_27747:
          v_e_32714.push(v_Ue_28209("courseRuleJdgHard3"));
      }
      if (v_i_32713.zb === v_he_27719) v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleDmgJudgeMiss"), [["DMG_AMOUNT", "-" + v_i_32713.TP]]));else {
        let v_t_32715 = "";
        v_i_32713.zb === v_fe_27716 ? v_t_32715 = "<#c:ff0>JUSTICE CRITICAL<#r>" : v_i_32713.zb === v_w0_27717 ? v_t_32715 = "<#c:f70>JUSTICE<#r>" : v_i_32713.zb === v__e_27718 && (v_t_32715 = "<#c:0f0>ATTACK<#r>"), v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleDmgJudge"), [["JUDGE_RESULT", v_t_32715], ["DMG_AMOUNT", "-" + v_i_32713.TP]]));
      }
      if (0 < v_i_32713.SP && v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleHealEnd"), [["HEAL_AMOUNT", "+" + v_i_32713.SP]])), 0 < v_i_32713.EP && 0 < v_i_32713.LP) if (v_i_32713.LP === v_fe_27716) v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleHealJudgeJc"), [["HEAL_AMOUNT", "+" + v_i_32713.EP]]));else {
        let v_t_32716 = "";
        v_t_32716 = v_i_32713.LP === v_w0_27717 ? "<#c:f70>JUSTICE<#r>" : v_i_32713.LP === v__e_27718 ? "<#c:0f0>ATTACK<#r>" : "MISS", v_e_32714.push(v_Ba_28069(v_Ue_28209("courseRuleHealJudge"), [["JUDGE_RESULT", v_t_32716], ["HEAL_AMOUNT", "+" + v_i_32713.EP]]));
      }
      return v_e_32714.join("\n");
    },
    Kc(v_t_32717, v_i_32718) {
      return v_pe_27823(v_ke_27824(.2 * v_i_32718), 10) <= v_t_32717;
    }
  };