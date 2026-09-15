// game: 语句 95 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Hr_27962 = {
      ef: function (v_i_33040) {
        v_Le_28076([function (v_i_33041) {
          hostBridge.zu("/extra/n/", function (v_t_33042) {
            v_oo_28098(v_t_33042, function (v_i_33043, v_t_33044, v_e_33045) {
              if (!v_e_33045.isFile || !v_Da_28067(v_e_33045.name, ".arc")) return v_i_33043();
              v_Ur_27961.rt("/extra/n/" + v_e_33045.name, function (v_t_33046) {
                v_t_33046 && v_be_27857.Jp.push(v_t_33046), v_i_33043();
              });
            }, () => {
              v_Me_28078(v_i_33041);
            });
          }, () => v_Me_28078(v_i_33041));
        }, function (v_t_33047) {
          v_i_33040();
        }]);
      }
    },
    settingsTables = function () {
      let v_r_33048 = null,
        v_s_33049 = {
          1001: "user_settings.json",
          1002: "music_records.json",
          1004: "course_records.json",
          1003: "se.json"
        };
      return {
        ue: function (v_i_33050) {
          hostBridge.zu(v_J_27658, function (v_t_33051) {
            v_r_33048 = v_t_33051, v_Fe_28101(() => v_i_33050(!0));
          }, () => v_Fe_28101(() => v_i_33050(!1)));
        },
        _n: function (v_i_33052, v_e_33053) {
          var v_t_33054;
          null !== v_r_33048 && v_s_33049[v_i_33052] && (v_t_33054 = v_J_27658 + v_s_33049[v_i_33052], -1 !== v_r_33048.findIndex(v_t_33055 => v_t_33055.name === v_s_33049[v_i_33052])) ? v_$r_27975.Ic(v_t_33054, function (v_i_33056) {
            if (null === v_i_33056) v_e_33053(null);else {
              let v_t_33057 = null;
              try {
                v_t_33057 = JSON.parse(v_i_33056);
              } catch (v_t_33058) {}
              v_Fe_28101(() => v_e_33053(v_t_33057));
            }
          }) : v_Fe_28101(() => v_e_33053(null));
        },
        mi: function (v_t_33059, v_i_33060, v_e_33061, v_n_33062) {
          null !== v_r_33048 && v_s_33049[v_t_33059] ? (v_t_33059 = v_J_27658 + v_s_33049[v_t_33059], hostBridge.Xu(v_t_33059, v_n_33062 ? JSON.stringify(v_i_33060, null, 2) : JSON.stringify(v_i_33060), "application/json", () => v_e_33061(!0), () => v_e_33061(!1))) : v_Fe_28101(() => v_e_33061(!1));
        }
      };
    }(),
    recordsStore = function () {
      let v_k_33063, v_b_33064;
      let v_t_33065 = !1;
      function v_e_33066(v_t_33069, v_i_33070) {
        v_$r_27975.it("/config/" + v_t_33069 + ".krtbl", function (v_t_33071) {
          v_i_33070(v_t_33071);
        });
      }
      function v_n_33067(v_t_33072, v_i_33073, v_e_33074) {
        hostBridge.Xu("/config/" + v_t_33072 + ".krtbl", v_i_33073, "application/octet-stream", () => v_e_33074(!0), () => v_e_33074(!1));
      }
      function v_r_33068(v_i_33075, v_e_33076, v_t_33077) {
        if (v_t_33077) if ("music" === v_i_33075.K0) {
          if (v_i_33075.RL) v_k_33063.LL("music", [v_i_33075.ee, v_i_33075.te, 0, 0, 0, 0, 0]);else {
            let v_t_33078 = 0;
            v_e_33076.ni && (v_t_33078 |= 1), v_e_33076.R4 && (v_t_33078 |= 2), v_e_33076.B4 && (v_t_33078 |= 4), v_e_33076.M4 && (v_t_33078 |= 8), v_k_33063.gf("music", [v_i_33075.ee, v_i_33075.te, v_e_33076.Sr, v_t_33078, v_e_33076.G4 ? 1 : 0, v_e_33076.P4, v_e_33076.D4]);
          }
        } else if ("course" === v_i_33075.K0) if (v_i_33075.RL) v_k_33063.LL("course", [v_i_33075.lk, 0, 0, 0, 0, 0]);else {
          let v_t_33079 = 0;
          v_e_33076.ni && (v_t_33079 |= 1), v_e_33076.R4 && (v_t_33079 |= 2), v_e_33076.B4 && (v_t_33079 |= 4), v_k_33063.gf("course", [v_i_33075.lk, v_e_33076.Sr, v_t_33079, v_e_33076.G4 ? 1 : 0, v_e_33076.P4, v_e_33076.D4]);
        }
      }
      return {
        ue: function () {
          v_k_33063 = new v_ms_27995(), v_b_33064 = new v_ms_27995(), v_k_33063.cf("meta", [new v_ws_27993("key", 17), new v_ws_27993("val", 16)]), v_k_33063.cf("music", [new v_ws_27993("uid", 16), new v_ws_27993("diff", 6), new v_ws_27993("score", 2), new v_ws_27993("flag", 6), new v_ws_27993("is_played", 6), new v_ws_27993("play_count", 2), new v_ws_27993("updated_at", 17)], ["uid", "diff"]), v_k_33063.cf("course", [new v_ws_27993("uid", 16), new v_ws_27993("score", 2), new v_ws_27993("flag", 6), new v_ws_27993("is_played", 6), new v_ws_27993("play_count", 2), new v_ws_27993("updated_at", 17)], ["uid"]), v_b_33064.cf("meta", [new v_ws_27993("key", 17), new v_ws_27993("val", 16)]), v_b_33064.cf("settings", [new v_ws_27993("key", 17), new v_ws_27993("val", 16)]), v_b_33064.cf("chara_state", [new v_ws_27993("uid", 16), new v_ws_27993("rank", 2), new v_ws_27993("exp", 2), new v_ws_27993("trans_idx", 2), new v_ws_27993("skill_id", 16)]);
        },
        _n: function (v_i_33080) {
          v_t_33065 ? v_i_33080() : (v_t_33065 = !0, v_Le_28076([function (v_i_33081) {
            v_e_33066("records", function (v_t_33082) {
              v_t_33082 && v_k_33063.uf(v_t_33082), v_Me_28078(v_i_33081);
            });
          }, function (v_i_33083) {
            v_e_33066("player", function (v_t_33084) {
              v_t_33084 && v_b_33064.uf(v_t_33084), v_Me_28078(v_i_33083);
            });
          }, function (v_t_33085) {
            v_i_33080();
          }]));
        },
        bi: function (v_t_33086, v_e_33087) {
          switch (v_t_33086) {
            case "player":
              {
                var v_n_33088 = v_e_33087;
                let v_i_33101 = handshake.On;
                if (v_n_33088) {
                  var v_n_33088 = v_b_33064.ff("meta"),
                    v_r_33089 = (v_n_33088._f(), v_n_33088.df(["version", "10"]), v_b_33064.ff("settings"));
                  v_r_33089._f(), v_r_33089.df(["target_ver", 2e3]), v_r_33089.df(["termsAgreed", v_i_33101.Kp]), v_r_33089.df(["mscSel/uid", v_i_33101.q.ee]), v_r_33089.df(["mscSel/diff", v_i_33101.q.te]), v_r_33089.df(["mscSel/level", v_i_33101.q.ie]), v_r_33089.df(["mscSel/levelSelect", v_i_33101.q.ne ? 1 : 0]), v_r_33089.df(["mscSel/ultimaSelect", v_i_33101.q.HP ? 1 : 0]), v_r_33089.df(["mscSel/sortType", v_i_33101.q.pL]), v_r_33089.df(["playStg/preset", v_i_33101.re]), v_r_33089.df(["playStgCtm/scrollSpeed", v_i_33101.ae.scrollSpeed]), v_r_33089.df(["playStgCtm/mirror", v_i_33101.ae.mirror]), v_r_33089.df(["playStgCtm/jdgTimingA", v_i_33101.ae.jdgTimingA]), v_r_33089.df(["playStgCtm/jdgTimingB", v_i_33101.ae.jdgTimingB]), v_r_33089.df(["playStgCtm/jdgTimingAir", v_i_33101.ae.jdgTimingAir]), v_r_33089.df(["playStgCtm/showLevel", v_i_33101.ae.showLevel]), v_r_33089.df(["playStgCtm/showRating", v_i_33101.ae.showRating]), v_r_33089.df(["playStgCtm/showOverpower", 0]), v_r_33089.df(["playStgCtm/trackSkip", v_i_33101.ae.trackSkip]), v_r_33089.df(["playStgCtm/autoPlay", v_i_33101.ae.autoPlay]), v_r_33089.df(["playStgCtm/volGuide", v_i_33101.ae.volGuide]), v_r_33089.df(["playStgCtm/tapSe", v_i_33101.ae.tapSe]), v_r_33089.df(["playStgCtm/volTap", v_i_33101.ae.volTap]), v_r_33089.df(["playStgCtm/volExTap", v_i_33101.ae.volExTap]), v_r_33089.df(["playStgCtm/volSlide", v_i_33101.ae.volSlide]), v_r_33089.df(["playStgCtm/volAir", v_i_33101.ae.volAir]), v_r_33089.df(["playStgCtm/volFlick", v_i_33101.ae.volFlick]), v_r_33089.df(["playStgCtm/volSkill", v_i_33101.ae.volSkill]), v_r_33089.df(["playStgCtm/jTimingSeCond", v_i_33101.ae.jTimingSeCond]), v_r_33089.df(["playStgCtm/judgeAnsPos", v_i_33101.ae.judgeAnsPos]), v_r_33089.df(["playStgCtm/judgeAnsJcDetails", v_i_33101.ae.judgeAnsJcDetails]), v_r_33089.df(["playStgCtm/judgeAnsJDetails", v_i_33101.ae.judgeAnsJDetails]), v_r_33089.df(["playStgCtm/judgeAnsADetails", v_i_33101.ae.judgeAnsADetails]), v_r_33089.df(["playStgCtm/fieldLines", v_i_33101.ae.fieldLines]), v_r_33089.df(["playStgCtm/fieldColor", v_i_33101.ae.fieldColor]), v_r_33089.df(["playStgCtm/fieldWall", v_i_33101.ae.fieldWall]), v_r_33089.df(["playStgCtm/fieldInfo", v_i_33101.ae.fieldInfo]), v_r_33089.df(["playStg/masterVol", v_i_33101.Xp.Yp]), v_r_33089.df(["playStg/fieldScale", v_i_33101.Xp.Zp]), v_r_33089.df(["profile/nameplateId", v_i_33101.qp]), v_r_33089.df(["profile/titleId", v_i_33101.$p]), v_r_33089.df(["profile/sysvoiceId", v_i_33101.Qp]), v_r_33089.df(["profile/sysvoiceLong", v_i_33101.tm ? 1 : 0]), v_r_33089.df(["profile/charaId", v_i_33101.im]), v_r_33089.df(["profile/charaTransIdx", v_i_33101.nI]);
                  for (let v_t_33102 = 0; v_t_33102 < 20; ++v_t_33102) v_r_33089.df(["profile/chatId/" + v_t_33102, v_i_33101.iI[v_t_33102]]);
                  var v_s_33090 = v_b_33064.ff("chara_state");
                  v_s_33090._f();
                  for (const v_v_33103 in v_i_33101.nm) v_s_33090.df([v_v_33103, v_i_33101.nm[v_v_33103].Pm, v_i_33101.nm[v_v_33103].Gm, v_i_33101.nm[v_v_33103].jm, v_i_33101.nm[v_v_33103].En]);
                } else {
                  for (const v_w_33104 of v_b_33064.ff("settings").hf()) switch (v_w_33104[0]) {
                    case "target_ver":
                      v_i_33101.Wp = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "termsAgreed":
                      v_i_33101.Kp = v_Pe_28064(v_w_33104[1]), v_i_33101.zp = !v_i_33101.Kp;
                      break;
                    case "mscSel/uid":
                      v_i_33101.q.ee = v_w_33104[1];
                      break;
                    case "mscSel/diff":
                      v_i_33101.q.te = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "mscSel/level":
                      v_i_33101.q.ie = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "mscSel/levelSelect":
                      v_i_33101.q.ne = v_Ma_28063(v_w_33104[1]);
                      break;
                    case "mscSel/ultimaSelect":
                      v_i_33101.q.HP = v_Ma_28063(v_w_33104[1]);
                      break;
                    case "mscSel/sortType":
                      v_i_33101.q.pL = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStg/preset":
                      v_i_33101.re = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/scrollSpeed":
                      v_i_33101.ae.scrollSpeed = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/mirror":
                      v_i_33101.ae.mirror = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/jdgTimingA":
                      v_i_33101.ae.jdgTimingA = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/jdgTimingB":
                      v_i_33101.ae.jdgTimingB = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/jdgTimingAir":
                      v_i_33101.ae.jdgTimingAir = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/showLevel":
                      v_i_33101.ae.showLevel = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/showRating":
                      v_i_33101.ae.showRating = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/showOverpower":
                      v_i_33101.ae.showOverpower = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/trackSkip":
                      v_i_33101.ae.trackSkip = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/autoPlay":
                      v_i_33101.ae.autoPlay = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volGuide":
                      v_i_33101.ae.volGuide = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/tapSe":
                      v_i_33101.ae.tapSe = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volTap":
                      v_i_33101.ae.volTap = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volExTap":
                      v_i_33101.ae.volExTap = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volSlide":
                      v_i_33101.ae.volSlide = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volAir":
                      v_i_33101.ae.volAir = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volFlick":
                      v_i_33101.ae.volFlick = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/volSkill":
                      v_i_33101.ae.volSkill = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/jTimingSeCond":
                      v_i_33101.ae.jTimingSeCond = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/judgeAnsPos":
                      v_i_33101.ae.judgeAnsPos = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/judgeAnsJcDetails":
                      v_i_33101.ae.judgeAnsJcDetails = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/judgeAnsJDetails":
                      v_i_33101.ae.judgeAnsJDetails = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/judgeAnsADetails":
                      v_i_33101.ae.judgeAnsADetails = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/fieldLines":
                      v_i_33101.ae.fieldLines = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/fieldColor":
                      v_i_33101.ae.fieldColor = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/fieldWall":
                      v_i_33101.ae.fieldWall = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStgCtm/fieldInfo":
                      v_i_33101.ae.fieldInfo = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStg/masterVol":
                      v_i_33101.Xp.Yp = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "playStg/fieldScale":
                      v_i_33101.Xp.Zp = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/nameplateId":
                      v_i_33101.qp = v_w_33104[1];
                      break;
                    case "profile/titleId":
                      v_i_33101.$p = v_w_33104[1];
                      break;
                    case "profile/sysvoiceId":
                      v_i_33101.Qp = v_w_33104[1];
                      break;
                    case "profile/sysvoiceLong":
                      v_i_33101.tm = v_Ma_28063(v_w_33104[1]);
                      break;
                    case "profile/charaId":
                      v_i_33101.im = v_w_33104[1];
                      break;
                    case "profile/charaTransIdx":
                      v_i_33101.nI = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/0":
                      v_i_33101.iI[0] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/1":
                      v_i_33101.iI[1] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/2":
                      v_i_33101.iI[2] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/3":
                      v_i_33101.iI[3] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/4":
                      v_i_33101.iI[4] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/5":
                      v_i_33101.iI[5] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/6":
                      v_i_33101.iI[6] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/7":
                      v_i_33101.iI[7] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/8":
                      v_i_33101.iI[8] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/9":
                      v_i_33101.iI[9] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/10":
                      v_i_33101.iI[10] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/11":
                      v_i_33101.iI[11] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/12":
                      v_i_33101.iI[12] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/13":
                      v_i_33101.iI[13] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/14":
                      v_i_33101.iI[14] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/15":
                      v_i_33101.iI[15] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/16":
                      v_i_33101.iI[16] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/17":
                      v_i_33101.iI[17] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/18":
                      v_i_33101.iI[18] = v_Pe_28064(v_w_33104[1]);
                      break;
                    case "profile/chatId/19":
                      v_i_33101.iI[19] = v_Pe_28064(v_w_33104[1]);
                  }
                  var v_a_33091,
                    v_o_33092,
                    v_l_33093 = v_b_33064.ff("chara_state"),
                    v_n_33088 = v_l_33093.hf();
                  v_i_33101.nm = {};
                  for (const v_g_33105 of v_n_33088) v_a_33091 = v_l_33093.vf(v_g_33105), (v_o_33092 = new v_Mr_27954()).Pm = v_a_33091.rank, v_o_33092.Gm = v_a_33091.exp, v_o_33092.En = v_a_33091.skill_id, v_o_33092.jm = v_a_33091.trans_idx, v_i_33101.nm[v_a_33091.uid] = v_o_33092;
                  -1 === v_be_27857.Hp.findIndex(v_t_33106 => v_t_33106.id === v_i_33101.$p) && (v_i_33101.$p = "s_00000000");
                }
                return;
              }
            case "records":
              v_n_33088 = v_e_33087;
              if (!v_n_33088) {
                var v_i_33094,
                  v_c_33095 = v_k_33063.ff("music"),
                  v_n_33088 = v_c_33095.hf();
                handshake.Mm = new Map();
                for (const v_m_33107 of v_n_33088) {
                  var v_u_33096,
                    v_f_33097 = (v_u_33096 = v_c_33095.vf(v_m_33107)).uid.split("/").slice(-1)[0];
                  handshake.Mm.has(v_f_33097) || handshake.Mm.set(v_f_33097, new Map()), (v_i_33094 = new v_zr_27970()).Sr = v_me_27822(v_pe_27823(v_u_33096.score, 0), 101e4), v_i_33094.ni = 1 & v_u_33096.flag, v_i_33094.R4 = 2 & v_u_33096.flag, v_i_33094.B4 = 4 & v_u_33096.flag, v_i_33094.M4 = 8 & v_u_33096.flag, v_i_33094.D4 = v_u_33096.updated_at, v_i_33094.P4 = v_u_33096.play_count, v_i_33094.G4 = !!v_u_33096.is_played, handshake.Mm.get(v_f_33097).set(v_u_33096.diff, v_i_33094);
                }
                var v___33098,
                  v_h_33099,
                  v_d_33100 = v_k_33063.ff("course"),
                  v_n_33088 = v_d_33100.hf();
                handshake.Em = new Map();
                for (const v_p_33108 of v_n_33088) v___33098 = v_d_33100.vf(v_p_33108), (v_h_33099 = new v_zr_27970()).Sr = v_me_27822(v_pe_27823(v___33098.score, 0), 303e4), v_h_33099.ni = 1 & v___33098.flag, v_h_33099.R4 = 2 & v___33098.flag, v_h_33099.B4 = 4 & v___33098.flag, v_h_33099.D4 = v___33098.updated_at, v_h_33099.P4 = v___33098.play_count, v_h_33099.G4 = !!v___33098.is_played, handshake.Em.set(v___33098.uid, v_h_33099);
              }
              return;
          }
          return {};
        },
        W0: function (v_t_33109, v_i_33110, v_e_33111, v_n_33112) {
          return "records" === v_i_33110 ? v_r_33068(v_t_33109, v_e_33111, v_n_33112) : {};
        },
        mi: function (v_t_33113, v_i_33114) {
          switch (v_t_33113) {
            case "records":
              v_n_33067("records", v_k_33063.wf(), v_i_33114 || (() => {}));
              break;
            case "player":
              v_n_33067("player", v_b_33064.wf(), v_i_33114 || (() => {}));
          }
        }
      };
    }(),
    v_Or_27965 = function () {
      let v_o_33115 = !1,
        v_l_33116 = {
          result_rank_sssp: 0,
          result_rank_sss: 0,
          result_rank_ssp: 0,
          result_rank_ss: 0,
          result_rank_sp: 0,
          result_rank_s: 0,
          result_rank_aaa: 0,
          result_rank_aa: 0,
          result_rank_a: 0,
          result_rank_bbb: 0,
          result_rank_bb: 0,
          result_rank_b: 0,
          result_rank_c: 0,
          result_rank_d: 0,
          result_all_justice: 0,
          result_full_combo: 0,
          result_full_chain: 0,
          result_1000_chain: 0,
          result_2000_chain: 0,
          result_3000_chain: 0,
          result_4000_chain: 0,
          result_5000_chain: 0,
          result_new_record: 0,
          result_all_clear: 0,
          scene_select_mode: 0,
          scene_course_result: 0,
          scene_user_box_confirm: 0
        };
      function v_n_33117() {
        v_o_33115 = !1;
        for (const v_t_33119 in v_l_33116) v_Se_27889.e6(v_l_33116[v_t_33119]), v_l_33116[v_t_33119] = 0;
      }
      function v_e_33118(v_t_33120, v_i_33121) {
        v_Se_27889.i6(v_l_33116[v_t_33120]), v_Se_27889.dn(v_l_33116[v_t_33120]), v_i_33121 && v_uo_28102(v_i_33121, v_Se_27889.w6(v_l_33116[v_t_33120]));
      }
      return {
        _n: async function (v_i_33122, v_t_33123, v_r_33124) {
          let v_s_33125 = v_be_27857.Vp.find(v_t_33127 => v_t_33127.id === v_i_33122);
          if (v_s_33125) {
            let v_n_33128 = v_s_33125.has_long_voice && v_t_33123 ? [["result_rank_sssp", "result_rank_sssp_long"], ["result_rank_sss", "result_rank_sss_long"], ["result_rank_ssp", "result_rank_ssp_long"], ["result_rank_ss", "result_rank_ss_long"], ["result_rank_sp", "result_rank_sp_long"], ["result_rank_s", "result_rank_s_long"], ["result_rank_aaa", "result_rank_aaa_long"], ["result_rank_aa", "result_rank_aa_long"], ["result_rank_a", "result_rank_a_long"], ["result_rank_bbb", "result_rank_bbb_long"], ["result_rank_bb", "result_rank_bb_long"], ["result_rank_b", "result_rank_b_long"], ["result_rank_c", "result_rank_c_long"], ["result_rank_d", "result_rank_d_long"], ["result_all_justice", "result_all_justice"], ["result_full_combo", "result_full_combo"], ["result_full_chain", "result_full_chain"], ["result_1000_chain", "result_1000_chain"], ["result_2000_chain", "result_2000_chain"], ["result_3000_chain", "result_3000_chain"], ["result_4000_chain", "result_4000_chain"], ["result_5000_chain", "result_5000_chain"], ["result_new_record", "result_new_record"], ["result_all_clear", "result_all_clear"], ["scene_select_mode", "scene_select_mode"], ["scene_course_result", "scene_course_result"], ["scene_user_box_confirm", "scene_user_box_confirm"]] : [["result_rank_sssp", "result_rank_sssp"], ["result_rank_sss", "result_rank_sss"], ["result_rank_ssp", "result_rank_ssp"], ["result_rank_ss", "result_rank_ss"], ["result_rank_sp", "result_rank_sp"], ["result_rank_s", "result_rank_s"], ["result_rank_aaa", "result_rank_aaa"], ["result_rank_aa", "result_rank_aa"], ["result_rank_a", "result_rank_a"], ["result_rank_bbb", "result_rank_bbb"], ["result_rank_bb", "result_rank_bb"], ["result_rank_b", "result_rank_b"], ["result_rank_c", "result_rank_c"], ["result_rank_d", "result_rank_d"], ["result_all_justice", "result_all_justice"], ["result_full_combo", "result_full_combo"], ["result_full_chain", "result_full_chain"], ["result_1000_chain", "result_1000_chain"], ["result_2000_chain", "result_2000_chain"], ["result_3000_chain", "result_3000_chain"], ["result_4000_chain", "result_4000_chain"], ["result_5000_chain", "result_5000_chain"], ["result_new_record", "result_new_record"], ["result_all_clear", "result_all_clear"], ["scene_select_mode", "scene_select_mode"], ["scene_course_result", "scene_course_result"], ["scene_user_box_confirm", "scene_user_box_confirm"]];
            if (v_s_33125.arc) {
              let v_e_33129 = new v_vs_27992("/voices/" + v_i_33122 + "/data.arc", 0, 1);
              v_e_33129.xl(async function () {
                for (const v_i_33131 of v_n_33128) {
                  var v_t_33130 = await v_Se_27889.mv(await v_e_33129.pi(v_i_33131[1]));
                  (v_l_33116[v_i_33131[0]] = v_t_33130) && v_Se_27889.Mc(v_t_33130, v_s_33125.volume);
                }
                v_o_33115 = !0, v_r_33124(!0);
              });
            } else {
              for (const v_a_33132 of v_n_33128) {
                var v_e_33126 = await v_Se_27889.Q4("/voices/" + v_i_33122 + "/" + v_a_33132[1] + ".wav");
                (v_l_33116[v_a_33132[0]] = v_e_33126) && v_Se_27889.Mc(v_e_33126, v_s_33125.volume);
              }
              v_o_33115 = !0, v_r_33124(!0);
            }
          } else v_n_33117(), v_r_33124();
        },
        pf: v_n_33117,
        dn: v_e_33118,
        q4: function (v_t_33133, v_i_33134) {
          v_i_33134 ? v_e_33118("result_new_record", function () {
            v_e_33118("result_rank_" + v_xi_27836(v_t_33133));
          }) : v_e_33118("result_rank_" + v_xi_27836(v_t_33133));
        },
        X4: function () {
          v_e_33118("result_all_justice");
        },
        Z4: function () {
          v_e_33118("result_full_combo");
        },
        lC: function () {
          v_e_33118("result_full_chain");
        },
        cC: function (v_t_33135) {
          1 === v_t_33135 ? v_e_33118("result_1000_chain") : 2 === v_t_33135 ? v_e_33118("result_2000_chain") : 3 === v_t_33135 ? v_e_33118("result_3000_chain") : 4 === v_t_33135 && v_e_33118("result_4000_chain");
        },
        Y4: function () {
          for (const v_t_33136 in v_l_33116) v_Se_27889.i6(v_l_33116[v_t_33136]);
        }
      };
    }(),
    v_Ie_27966 = function () {
      let v_c_33137 = [],
        v_u_33138 = {},
        v_n_33139 = handshake.On.ae;
      return {
        _n: function (v_o_33140) {
          let v_l_33141 = new v_ms_27995();
          v_Le_28076([v_i_33142 => {
            languagePackages.it("tables/settingTable.krtbl", function (v_t_33143) {
              null === v_t_33143 ? v_o_33140(!1) : (v_l_33141.uf(v_t_33143), v_Me_28078(v_i_33142));
            });
          }, v_t_33144 => {
            var v_i_33145 = v_l_33141.ff("_entry");
            if (v_i_33145) {
              for (const v_r_33148 of v_i_33145.hf()) {
                var v_e_33146 = {
                  N0: v_r_33148[1],
                  Bi: []
                };
                for (const v_s_33149 of v_l_33141.ff("_cat" + v_r_33148[0]).hf()) {
                  var v_n_33147 = {
                    Ae: v_s_33149[0],
                    H0: v_s_33149[1],
                    Fi: 0 === v_s_33149[2] ? "binaly" : "updown",
                    R0: []
                  };
                  if ("updown" === v_n_33147.Fi) for (const v_a_33150 of v_l_33141.ff("_list" + v_s_33149[3]).hf()) v_n_33147.R0.push({
                    M0: 0 === v_a_33150[0],
                    Wt: v_a_33150[1],
                    Sf: v_a_33150[2]
                  });
                  v_e_33146.Bi.push(v_n_33147), v_u_33138[v_n_33147.Ae] = v_n_33147;
                }
                v_c_33137.push(v_e_33146);
              }
              v_o_33140(!0);
            } else v_o_33140(!1);
          }]);
        },
        j0: () => v_c_33137,
        F0: v_t_33151 => v_u_33138[v_t_33151],
        L0: function (v_t_33152, v_i_33153) {
          var v_e_33154 = v_u_33138[v_t_33152];
          if (!(void 0 === v_e_33154 || v_i_33153 < 0)) {
            if ("updown" === v_e_33154.Fi) {
              if (v_u_33138[v_t_33152].R0.length <= v_i_33153) return;
            } else if ("binaly" === v_e_33154.Fi && 1 < v_i_33153) return;
            void 0 !== v_n_33139[v_t_33152] && (v_n_33139[v_t_33152] = v_i_33153), "volJustice" === v_t_33152 && v_i_33153 <= 10 && (v_n_33139.volTap = v_i_33153, v_n_33139.volExTap = v_i_33153, v_n_33139.volSlide = v_i_33153, v_n_33139.volAir = v_i_33153, v_n_33139.volFlick = v_i_33153);
          }
        },
        E0: function (v_t_33155) {
          return void 0 === v_u_33138[v_t_33155] ? 0 : "volJustice" === v_t_33155 ? v_n_33139.volTap === v_n_33139.volExTap && v_n_33139.volTap === v_n_33139.volSlide && v_n_33139.volTap === v_n_33139.volAir && v_n_33139.volTap === v_n_33139.volFlick ? v_n_33139.volTap : 11 : v_n_33139[v_t_33155];
        },
        D0: function (v_t_33156) {
          return void 0 === v_u_33138[v_t_33156] ? 0 : "updown" === v_u_33138[v_t_33156].Fi ? v_u_33138[v_t_33156].R0[v_n_33139[v_t_33156]].Sf : !!v_n_33139[v_t_33156];
        },
        $c: function (v_t_33157) {
          if (void 0 === v_u_33138[v_t_33157]) return 0;
          let v_i_33158 = 0;
          return v_i_33158 = (handshake.On.re < 3 ? v_ji_27860[handshake.On.re] : v_n_33139)[v_t_33157], "updown" === v_u_33138[v_t_33157].Fi ? v_u_33138[v_t_33157].R0[v_i_33158].Sf : !!v_i_33158;
        },
        I0: function (v_t_33159) {
          var v_i_33160 = v_u_33138[v_t_33159];
          if (void 0 === v_i_33160) return !1;
          if ("volJustice" === v_t_33159) return this.E0(v_t_33159) < 10;
          if ("updown" === v_i_33160.Fi) {
            if (v_u_33138[v_t_33159].R0.length <= this.E0(v_t_33159) + 1) return !1;
          } else if ("binaly" === v_i_33160.Fi && 1 <= this.E0(v_t_33159)) return !1;
          return !0;
        },
        x0: function (v_t_33161) {
          return void 0 !== v_u_33138[v_t_33161] && 0 < this.E0(v_t_33161);
        }
      };
    }();