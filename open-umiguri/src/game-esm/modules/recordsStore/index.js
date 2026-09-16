// 模块: recordsStore
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createRecordsStore(scope) {
  let v_k_33063, v_b_33064;
  let v_t_33065 = !1;
  function v_e_33066(v_t_33069, v_i_33070) {
    scope.v_$r_27975.it("/config/" + v_t_33069 + ".krtbl", function (v_t_33071) {
      v_i_33070(v_t_33071);
    });
  }
  function v_n_33067(v_t_33072, v_i_33073, v_e_33074) {
    scope.hostBridge.Xu("/config/" + v_t_33072 + ".krtbl", v_i_33073, "application/octet-stream", () => v_e_33074(!0), () => v_e_33074(!1));
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
      v_k_33063 = new scope.v_ms_27995(), v_b_33064 = new scope.v_ms_27995(), v_k_33063.cf("meta", [new scope.v_ws_27993("key", 17), new scope.v_ws_27993("val", 16)]), v_k_33063.cf("music", [new scope.v_ws_27993("uid", 16), new scope.v_ws_27993("diff", 6), new scope.v_ws_27993("score", 2), new scope.v_ws_27993("flag", 6), new scope.v_ws_27993("is_played", 6), new scope.v_ws_27993("play_count", 2), new scope.v_ws_27993("updated_at", 17)], ["uid", "diff"]), v_k_33063.cf("course", [new scope.v_ws_27993("uid", 16), new scope.v_ws_27993("score", 2), new scope.v_ws_27993("flag", 6), new scope.v_ws_27993("is_played", 6), new scope.v_ws_27993("play_count", 2), new scope.v_ws_27993("updated_at", 17)], ["uid"]), v_b_33064.cf("meta", [new scope.v_ws_27993("key", 17), new scope.v_ws_27993("val", 16)]), v_b_33064.cf("settings", [new scope.v_ws_27993("key", 17), new scope.v_ws_27993("val", 16)]), v_b_33064.cf("chara_state", [new scope.v_ws_27993("uid", 16), new scope.v_ws_27993("rank", 2), new scope.v_ws_27993("exp", 2), new scope.v_ws_27993("trans_idx", 2), new scope.v_ws_27993("skill_id", 16)]);
    },
    _n: function (v_i_33080) {
      v_t_33065 ? v_i_33080() : (v_t_33065 = !0, scope.v_Le_28076([function (v_i_33081) {
        v_e_33066("records", function (v_t_33082) {
          v_t_33082 && v_k_33063.uf(v_t_33082), scope.v_Me_28078(v_i_33081);
        });
      }, function (v_i_33083) {
        v_e_33066("player", function (v_t_33084) {
          v_t_33084 && v_b_33064.uf(v_t_33084), scope.v_Me_28078(v_i_33083);
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
            let v_i_33101 = scope.handshake.On;
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
                  v_i_33101.Wp = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "termsAgreed":
                  v_i_33101.Kp = scope.v_Pe_28064(v_w_33104[1]), v_i_33101.zp = !v_i_33101.Kp;
                  break;
                case "mscSel/uid":
                  v_i_33101.q.ee = v_w_33104[1];
                  break;
                case "mscSel/diff":
                  v_i_33101.q.te = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "mscSel/level":
                  v_i_33101.q.ie = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "mscSel/levelSelect":
                  v_i_33101.q.ne = scope.v_Ma_28063(v_w_33104[1]);
                  break;
                case "mscSel/ultimaSelect":
                  v_i_33101.q.HP = scope.v_Ma_28063(v_w_33104[1]);
                  break;
                case "mscSel/sortType":
                  v_i_33101.q.pL = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStg/preset":
                  v_i_33101.re = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/scrollSpeed":
                  v_i_33101.ae.scrollSpeed = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/mirror":
                  v_i_33101.ae.mirror = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/jdgTimingA":
                  v_i_33101.ae.jdgTimingA = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/jdgTimingB":
                  v_i_33101.ae.jdgTimingB = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/jdgTimingAir":
                  v_i_33101.ae.jdgTimingAir = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/showLevel":
                  v_i_33101.ae.showLevel = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/showRating":
                  v_i_33101.ae.showRating = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/showOverpower":
                  v_i_33101.ae.showOverpower = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/trackSkip":
                  v_i_33101.ae.trackSkip = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/autoPlay":
                  v_i_33101.ae.autoPlay = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volGuide":
                  v_i_33101.ae.volGuide = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/tapSe":
                  v_i_33101.ae.tapSe = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volTap":
                  v_i_33101.ae.volTap = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volExTap":
                  v_i_33101.ae.volExTap = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volSlide":
                  v_i_33101.ae.volSlide = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volAir":
                  v_i_33101.ae.volAir = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volFlick":
                  v_i_33101.ae.volFlick = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/volSkill":
                  v_i_33101.ae.volSkill = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/jTimingSeCond":
                  v_i_33101.ae.jTimingSeCond = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/judgeAnsPos":
                  v_i_33101.ae.judgeAnsPos = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/judgeAnsJcDetails":
                  v_i_33101.ae.judgeAnsJcDetails = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/judgeAnsJDetails":
                  v_i_33101.ae.judgeAnsJDetails = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/judgeAnsADetails":
                  v_i_33101.ae.judgeAnsADetails = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/fieldLines":
                  v_i_33101.ae.fieldLines = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/fieldColor":
                  v_i_33101.ae.fieldColor = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/fieldWall":
                  v_i_33101.ae.fieldWall = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStgCtm/fieldInfo":
                  v_i_33101.ae.fieldInfo = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStg/masterVol":
                  v_i_33101.Xp.Yp = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "playStg/fieldScale":
                  v_i_33101.Xp.Zp = scope.v_Pe_28064(v_w_33104[1]);
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
                  v_i_33101.tm = scope.v_Ma_28063(v_w_33104[1]);
                  break;
                case "profile/charaId":
                  v_i_33101.im = v_w_33104[1];
                  break;
                case "profile/charaTransIdx":
                  v_i_33101.nI = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/0":
                  v_i_33101.iI[0] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/1":
                  v_i_33101.iI[1] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/2":
                  v_i_33101.iI[2] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/3":
                  v_i_33101.iI[3] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/4":
                  v_i_33101.iI[4] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/5":
                  v_i_33101.iI[5] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/6":
                  v_i_33101.iI[6] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/7":
                  v_i_33101.iI[7] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/8":
                  v_i_33101.iI[8] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/9":
                  v_i_33101.iI[9] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/10":
                  v_i_33101.iI[10] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/11":
                  v_i_33101.iI[11] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/12":
                  v_i_33101.iI[12] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/13":
                  v_i_33101.iI[13] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/14":
                  v_i_33101.iI[14] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/15":
                  v_i_33101.iI[15] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/16":
                  v_i_33101.iI[16] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/17":
                  v_i_33101.iI[17] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/18":
                  v_i_33101.iI[18] = scope.v_Pe_28064(v_w_33104[1]);
                  break;
                case "profile/chatId/19":
                  v_i_33101.iI[19] = scope.v_Pe_28064(v_w_33104[1]);
              }
              var v_a_33091,
                v_o_33092,
                v_l_33093 = v_b_33064.ff("chara_state"),
                v_n_33088 = v_l_33093.hf();
              v_i_33101.nm = {};
              for (const v_g_33105 of v_n_33088) v_a_33091 = v_l_33093.vf(v_g_33105), (v_o_33092 = new scope.v_Mr_27954()).Pm = v_a_33091.rank, v_o_33092.Gm = v_a_33091.exp, v_o_33092.En = v_a_33091.skill_id, v_o_33092.jm = v_a_33091.trans_idx, v_i_33101.nm[v_a_33091.uid] = v_o_33092;
              -1 === scope.v_be_27857.Hp.findIndex(v_t_33106 => v_t_33106.id === v_i_33101.$p) && (v_i_33101.$p = "s_00000000");
            }
            return;
          }
        case "records":
          v_n_33088 = v_e_33087;
          if (!v_n_33088) {
            var v_i_33094,
              v_c_33095 = v_k_33063.ff("music"),
              v_n_33088 = v_c_33095.hf();
            scope.handshake.Mm = new Map();
            for (const v_m_33107 of v_n_33088) {
              var v_u_33096,
                v_f_33097 = (v_u_33096 = v_c_33095.vf(v_m_33107)).uid.split("/").slice(-1)[0];
              scope.handshake.Mm.has(v_f_33097) || scope.handshake.Mm.set(v_f_33097, new Map()), (v_i_33094 = new scope.v_zr_27970()).Sr = scope.mathMin(scope.mathMax(v_u_33096.score, 0), 101e4), v_i_33094.ni = 1 & v_u_33096.flag, v_i_33094.R4 = 2 & v_u_33096.flag, v_i_33094.B4 = 4 & v_u_33096.flag, v_i_33094.M4 = 8 & v_u_33096.flag, v_i_33094.D4 = v_u_33096.updated_at, v_i_33094.P4 = v_u_33096.play_count, v_i_33094.G4 = !!v_u_33096.is_played, scope.handshake.Mm.get(v_f_33097).set(v_u_33096.diff, v_i_33094);
            }
            var v___33098,
              v_h_33099,
              v_d_33100 = v_k_33063.ff("course"),
              v_n_33088 = v_d_33100.hf();
            scope.handshake.Em = new Map();
            for (const v_p_33108 of v_n_33088) v___33098 = v_d_33100.vf(v_p_33108), (v_h_33099 = new scope.v_zr_27970()).Sr = scope.mathMin(scope.mathMax(v___33098.score, 0), 303e4), v_h_33099.ni = 1 & v___33098.flag, v_h_33099.R4 = 2 & v___33098.flag, v_h_33099.B4 = 4 & v___33098.flag, v_h_33099.D4 = v___33098.updated_at, v_h_33099.P4 = v___33098.play_count, v_h_33099.G4 = !!v___33098.is_played, scope.handshake.Em.set(v___33098.uid, v_h_33099);
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
}
