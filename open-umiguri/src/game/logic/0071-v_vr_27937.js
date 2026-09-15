// game: 语句 71 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_vr_27937 = {
    rt: function (v_t_32106, v_i_32107, v_e_32108) {
      let v_a_32109 = new v_dr_27936();
      v_a_32109.$w = {
        ap: !1,
        lp: {},
        cp: {},
        up: [],
        fp: [],
        _p: [],
        hp: 0,
        dp: 0,
        vp: 0,
        gp: !1,
        wp: !1,
        pp: !0,
        kP: !0
      };
      var v_n_32110,
        v_r_32111,
        v_s_32112 = v_t_32106.replace(/\r\n/g, "\n").split("\n");
      for (let v_t_32120 = 0; v_t_32120 < v_s_32112.length; ++v_t_32120) "" !== (v_n_32110 = v_s_32112[v_t_32120].trimEnd()) && (null === (v_n_32110 = "#" === (v_n_32110 = v_n_32110)[0] && (v_n_32110 = v_n_32110.match(/^#([a-zA-Z0-9]+)([ :])\s*(([\s\S])*)$/)) ? [v_n_32110[1], '"' === (v_n_32110 = v_n_32110[3])[0] && '"' === v_n_32110[v_n_32110.length - 1] ? v_n_32110.substring(1, v_n_32110.length - 1) : v_n_32110] : null) || function (v_n_32121, v_t_32122) {
        switch (v_t_32122[0]) {
          case "TITLE":
            return v_n_32121.Zu.lf = v_t_32122[1], 1;
          case "ARTIST":
            return v_n_32121.Zu.C5 = v_t_32122[1], 1;
          case "DESIGNER":
            return v_n_32121.Zu.T5 = v_t_32122[1], 1;
          case "DIFFICULTY":
            return 0 <= v_t_32122[1].indexOf(":") ? (v_i_32123 = v_t_32122[1].split(":"), v_n_32121.Zu.te = 4, v_n_32121.Zu.b5 = v_i_32123[1].substr(0, 1), v_n_32121.Zu.k5 = v_i_32123[0]) : v_n_32121.Zu.te = v_Pe_28064(v_t_32122[1]), 1;
          case "PLAYLEVEL":
            return "" !== v_t_32122[1] && 0 < v_Pe_28064(v_t_32122[1]) && (v_n_32121.Zu.k5 = v_t_32122[1]), 1;
          case "SONGID":
            return v_n_32121.Zu.ee = v_t_32122[1], 1;
          case "WAVE":
            return v_n_32121.Zu.Gw = v_t_32122[1], 1;
          case "WAVEOFFSET":
            return v_n_32121.Zu._w = v_Re_28066(v_t_32122[1]), 1;
          case "JACKET":
            return v_n_32121.Zu.Ow = v_t_32122[1], 1;
          case "BACKGROUND":
            return v_n_32121.Zu.jw = v_t_32122[1], 1;
          case "FIELDBACKGROUND":
            return v_n_32121.Zu.Ww = v_t_32122[1], 1;
          case "DIVLINECOLOR":
            return v_n_32121.Zu.Uw = v_t_32122[1], 1;
          case "BASEBPM":
            return v_n_32121.Zu.A5 = v_Re_28066(v_t_32122[1]), 1;
          case "REQUEST":
            var v_i_32123 = v_t_32122[1].split(" "),
              v_e_32124 = v_i_32123.slice(1).join(" ").trim();
            switch (v_i_32123[0]) {
              case "ticks_per_beat":
                v_n_32121.Zu.Kw = 4 * v_Pe_28064(v_e_32124);
                break;
              case "metronome":
                v_n_32121.Zu.zw = v_La_28062(v_e_32124);
                break;
              case "enable_priority":
              case "enable_moving_lane":
              case "segments_per_second":
                break;
              case "x_ug_ext":
                v_n_32121.$w.ap = v_La_28062(v_e_32124);
                break;
              case "x_ug_tutorial":
                v_n_32121.Zu.Bw = v_La_28062(v_e_32124), v_n_32121.Zu.Bw && v_n_32121.Zu.zw && (v_n_32121.Zu.zw = !1);
                break;
              case "x_ug_autoplay":
                v_De_28096(v_e_32124.split(","), function (v_t_32126) {
                  v_t_32126 = v_t_32126.match(/([\d]+)[\s]*?'[\s]*([\d]+)[\s]*?:[\s]*?([\d]+)[\s]*?'[\s]*([\d]+)/);
                  !v_t_32126 || v_t_32126.length < 5 || v_n_32121.$w._p.push({
                    meas: v_Pe_28064(v_t_32126[1]),
                    stick: v_Pe_28064(v_t_32126[2]),
                    flag: !0
                  }, {
                    meas: v_Pe_28064(v_t_32126[3]),
                    stick: v_Pe_28064(v_t_32126[4]),
                    flag: !1
                  });
                });
                break;
              case "enable_just_begin_metronome":
              case "x_ug_enable_just_begin_metronome":
                v_n_32121.Zu.Xw = v_La_28062(v_e_32124), v_n_32121.Zu.Xw && (v_n_32121.Zu.zw = !0);
                break;
              case "preview_range":
              case "x_ug_preview_range":
                var v_r_32125 = v_e_32124.split(",");
                2 <= v_r_32125.length && (v_n_32121.Zu.Yw = v_r_32125.map(v_t_32127 => v_Re_28066(v_t_32127)));
            }
            return 1;
        }
        if (0 === v_t_32122[0].indexOf("BPM")) return v_n_32121.$w.lp[parseInt(v_t_32122[0].substr(3, 2), 36)] = v_Re_28066(v_t_32122[1]), 1;
        if (0 === v_t_32122[0].indexOf("TIL")) {
          let v_i_32128 = [],
            v_e_32129;
          return v_De_28096(v_t_32122[1].split(","), function (v_t_32130) {
            !(v_e_32129 = v_t_32130.match(/([\d]+)[\s]*?'[\s]*([\d]+)[\s]*?:[\s]*?(-?[\d]+(\.[\d]+)?)/)) || v_e_32129.length < 4 || (v_i_32128.push({
              mp: v_Pe_28064(v_e_32129[1]),
              yp: v_Pe_28064(v_e_32129[2]),
              tp: v_Re_28066(v_e_32129[3])
            }), v_n_32121.$w.vp = v_pe_27823(v_n_32121.$w.vp, v_Pe_28064(v_e_32129[1])));
          }), v_n_32121.$w.cp[parseInt(v_t_32122[0].substr(3, 2), 36)] = v_i_32128, 1;
        }
      }(v_a_32109, v_n_32110) || (v_i_32107 ? function (v_i_32131, v_e_32132) {
        switch (v_e_32132[0]) {
          case "HISPEED":
          case "NOSPEED":
          case "MEASUREBS":
          case "MEASUREHS":
            return;
          default:
            if (!isNaN(v_Pe_28064(v_e_32132[0].substr(0, 3)))) {
              var v_n_32133 = v_Pe_28064(v_e_32132[0].substr(0, 3)) + v_i_32131.$w.dp,
                v_r_32134 = parseInt(v_e_32132[0].substr(4, 1), 36),
                v_s_32135 = parseInt(v_e_32132[0].substr(3, 1), 36) << 4;
              if (2 == (v_s_32135 | v_r_32134)) {
                var v_t_32136 = new v_wr_27938();
                v_t_32136.Fi = 2, v_t_32136.mp = v_n_32133, v_t_32136.kp = 0, v_t_32136.bp = 1, v_t_32136.Jg = v_Re_28066(v_e_32132[1]) / 4, v_t_32136.Sp = 20, v_i_32131.$w.up.push(v_t_32136);
              } else {
                var v_a_32137,
                  v_o_32138,
                  v_l_32139 = v_ke_27824(v_e_32132[1].length / 2);
                for (let v_t_32140 = 0; v_t_32140 < v_l_32139; ++v_t_32140) "00" !== (v_o_32138 = v_e_32132[1].substr(2 * v_t_32140, 2)) && 8 == (v_s_32135 | v_r_32134) && ((v_a_32137 = new v_wr_27938()).mp = v_n_32133, v_a_32137.kp = v_t_32140, v_a_32137.bp = v_l_32139, v_a_32137.Fi = 1, v_a_32137.Jg = parseInt(v_o_32138, 36), v_i_32131.$w.fp.push(v_a_32137));
              }
              v_i_32131.$w.vp = v_pe_27823(v_i_32131.$w.vp, v_n_32133);
            }
        }
      } : function (v_s_32141, v_a_32142) {
        switch (v_a_32142[0]) {
          case "HISPEED":
            return v_s_32141.$w.hp = parseInt(v_a_32142[1], 36), -1 === v_s_32141.Zu.uw.indexOf(v_s_32141.$w.hp) && v_s_32141.Zu.uw.push(v_s_32141.$w.hp);
          case "NOSPEED":
            return;
          case "MEASUREBS":
            return v_s_32141.$w.dp = v_pe_27823(v_Pe_28064(v_a_32142[1]), 0);
          case "MEASUREHS":
            var v_t_32143 = v_pe_27823(v_Pe_28064(v_a_32142[1]), 0);
            return void 0 !== v_s_32141.$w.cp[v_t_32143] && (v_s_32141.Zu.Wg = v_t_32143);
          default:
            if (!isNaN(v_Pe_28064(v_a_32142[0].substr(0, 3)))) {
              let v_i_32147 = v_Pe_28064(v_a_32142[0].substr(0, 3)) + v_s_32141.$w.dp,
                v_e_32148 = parseInt(v_a_32142[0].substr(4, 1), 36),
                v_n_32149 = parseInt(v_a_32142[0].substr(3, 1), 36) << 4,
                v_r_32150 = 0;
              if (v_n_32149 !== v_Hn_27677 && v_n_32149 !== v_Gn_27674 && 64 != v_n_32149 || (v_r_32150 = parseInt(v_a_32142[0].substr(5, 1), 36)), 2 == (v_n_32149 | v_e_32148)) {
                v_t_32143 = new v_wr_27938();
                v_t_32143.Fi = 2, v_t_32143.mp = v_i_32147, v_t_32143.kp = 0, v_t_32143.bp = 1, v_t_32143.Jg = v_Re_28066(v_a_32142[1]) / 4, v_t_32143.Sp = 20, v_s_32141.$w.up.push(v_t_32143);
              } else {
                var v_o_32144,
                  v_l_32145,
                  v_c_32146 = v_ke_27824(v_a_32142[1].length / 2);
                for (let v_t_32151 = 0; v_t_32151 < v_c_32146; ++v_t_32151) "00" !== (v_l_32145 = v_a_32142[1].substr(2 * v_t_32151, 2)) && ((v_o_32144 = new v_wr_27938()).mp = v_i_32147, v_o_32144.kp = v_t_32151, v_o_32144.bp = v_c_32146, 8 == (v_n_32149 | v_e_32148) ? (v_o_32144.Fi = 1, v_o_32144.Jg = parseInt(v_l_32145, 36)) : (v_o_32144.Fi = v_n_32149 | parseInt(v_l_32145[0], 36), v_o_32144.ou = v_e_32148, v_o_32144.Le = parseInt(v_l_32145[1], 36), v_o_32144.xp = v_r_32150), v_o_32144.Lw = v_s_32141.$w.hp, v_o_32144.Fi !== v_Jn_27679 && v_o_32144.Fi !== v_Un_27676 && v_o_32144.Fi !== v_Vn_27683 || (v_o_32144.Sp = 10), (v_o_32144.Fi & v_xn_27661) === v_zn_27686 ? (v_o_32144.Sp = 5, v_o_32144.G0 = 8) : 64 == (v_o_32144.Fi & v_xn_27661) && (v_o_32144.G0 = 8), v_s_32141.$w.fp.push(v_o_32144));
              }
              v_s_32141.$w.vp = v_pe_27823(v_s_32141.$w.vp, v_i_32147);
            }
        }
      })(v_a_32109, v_n_32110));
      v_a_32109.$w.up.sort((v_t_32152, v_i_32153) => v_t_32152.mp - v_i_32153.mp), v_ao_28097(v_a_32109.$w.cp, function (v_t_32154, v_i_32155) {
        let v_e_32156 = [];
        v_De_28096(v_t_32154, function (v_t_32157) {
          v_e_32156.push({
            Xg: v_gr_27939(v_a_32109, v_t_32157.mp, v_t_32157.yp * v_de_27728 / v_a_32109.Zu.Kw),
            tp: v_t_32157.tp,
            od: 0
          });
        }), v_a_32109.yc.Zw[v_i_32155] = v_e_32156, v_a_32109.yc.Zw[v_i_32155].sort((v_t_32158, v_i_32159) => v_t_32158.Xg - v_i_32159.Xg);
      }), v_De_28096(v_a_32109.$w.fp, function (v_t_32160) {
        v_t_32160.Xg = v_gr_27939(v_a_32109, v_t_32160.mp, v_de_27728 * v_mr_27940(v_a_32109, v_t_32160.mp) * v_t_32160.kp / v_t_32160.bp);
      }), v_a_32109.$w.fp.sort((v_t_32161, v_i_32162) => v_t_32161.Xg === v_i_32162.Xg ? v_i_32162.Sp - v_t_32161.Sp : v_t_32161.Xg - v_i_32162.Xg);
      var v_o_32113 = v_a_32109;
      for (let v_t_32163 = v_o_32113.Zu.Xw ? 1 : 0; v_t_32163 < v_o_32113.$w.vp + 1; ++v_t_32163) (v_r_32111 = new v_wr_27938()).Fi = v_u0_27704, v_r_32111.Xg = v_gr_27939(v_o_32113, v_t_32163, 0), v_r_32111.Jg = v_t_32163, v_o_32113.$w.fp.push(v_r_32111);
      if (v_e_32108) {
        var v_l_32114 = v_a_32109;
        let v_i_32164 = 0,
          v_e_32165 = 0,
          v_n_32166 = 0,
          v_r_32167 = 0;
        v_l_32114.Fw = [], v_De_28096(v_l_32114.$w.up, function (v_t_32168) {
          v_e_32165 = v_i_32164, v_i_32164 += (v_t_32168.mp - v_r_32167) * v_de_27728 * v_n_32166;
          for (let v_i_32169 = v_r_32167; v_i_32169 < v_t_32168.mp; ++v_i_32169) for (let v_t_32170 = 0; v_t_32170 < 8; ++v_t_32170) v_l_32114.Fw.push({
            Dw: (0 === v_t_32170 ? 1 : 0) + (v_t_32170 % 4 == 0 ? 1 : 0) + (v_t_32170 % 2 == 0 ? 1 : 0),
            Xg: v_e_32165 + v_i_32169 * v_de_27728 * v_n_32166,
            od: 0
          });
          v_n_32166 = v_t_32168.Jg, v_r_32167 = v_t_32168.mp;
        });
        for (let v_i_32171 = v_r_32167; v_i_32171 < v_l_32114.$w.vp + 1; ++v_i_32171) for (let v_t_32172 = 0; v_t_32172 < 8; ++v_t_32172) v_l_32114.Fw.push({
          Dw: (0 === v_t_32172 ? 1 : 0) + (v_t_32172 % 4 == 0 ? 1 : 0) + (v_t_32172 % 2 == 0 ? 1 : 0),
          Xg: v_e_32165 + (v_i_32171 + v_t_32172 / 8) * v_de_27728 * v_n_32166,
          od: 0
        });
      }
      v_a_32109.$w.fp.sort((v_t_32173, v_i_32174) => v_t_32173.Xg === v_i_32174.Xg ? v_i_32174.Sp - v_t_32173.Sp : v_t_32173.Xg - v_i_32174.Xg);
      {
        var v_c_32115 = v_a_32109;
        let v_n_32175 = {},
          v_r_32176 = {},
          v_s_32177 = {};
        v_De_28096(v_c_32115.$w.fp, function (v_t_32178, v_i_32179) {
          switch (v_t_32178.Fi) {
            case v_ce_27678:
              v_n_32175[v_t_32178.xp] = v_i_32179;
              break;
            case v_jn_27680:
            case v_On_27681:
            case 52:
            case v_Jn_27679:
              "number" == typeof v_n_32175[v_t_32178.xp] && v_c_32115.$w.fp[v_n_32175[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === v_Jn_27679 && (v_n_32175[v_t_32178.xp] = null);
              break;
            case v_le_27675:
              v_r_32176[v_t_32178.xp] = v_i_32179;
              break;
            case v_Un_27676:
              var v_e_32180;
              "number" == typeof v_r_32176[v_t_32178.xp] && v_c_32115.$w.fp[v_r_32176[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === v_Un_27676 && (v_e_32180 = v_c_32115.$w.fp[v_r_32176[v_t_32178.xp]], v_t_32178.ou = v_e_32180.ou, v_t_32178.Le = v_e_32180.Le, v_r_32176[v_t_32178.xp] = null);
              break;
            case v_ue_27682:
              v_s_32177[v_t_32178.xp] = v_i_32179;
              break;
            case v_Wn_27684:
            case v_Vn_27683:
              "number" == typeof v_s_32177[v_t_32178.xp] && v_c_32115.$w.fp[v_s_32177[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === v_Vn_27683 && (v_s_32177[v_t_32178.xp] = null);
          }
        });
      }
      {
        var v_u_32116 = v_a_32109;
        v_De_28096(v_u_32116.$w.fp, function (v_i_32184) {
          (v_i_32184.Fi & v_xn_27661) === v_zn_27686 && v_i_32184.dw === v_An_27660 && v_De_28096(v_u_32116.$w.fp, function (v_t_32185) {
            return !(v_i_32184.Xg !== v_t_32185.Xg || v_i_32184.ou !== v_t_32185.ou || v_i_32184.Le !== v_t_32185.Le || (v_t_32185.Fi & v_xn_27661) !== v_Cn_27662 && v_t_32185.Fi !== v_Jn_27679 && v_t_32185.Fi !== v_Un_27676 || v_t_32185.Vg) && (v_t_32185.Vg = !0, v_i_32184.dw = v_t_32185.Fi, v_i_32184.Lw = v_t_32185.Lw, 1);
          });
        }), v_De_28096(v_u_32116.$w.fp, function (v_i_32186) {
          (v_i_32186.Fi & v_xn_27661) !== v_zn_27686 || v_i_32186.gw || v_De_28096(v_u_32116.$w.fp, function (v_t_32187) {
            return v_i_32186.Xg === v_t_32187.Xg && v_i_32186.ou === v_t_32187.ou && v_i_32186.Le === v_t_32187.Le && v_t_32187.Fi === v_ue_27682 && !v_t_32187.Vg && (v_t_32187.Vg = !0, v_i_32186.gw = !0, v_i_32186.Fi = v_Kn_27687, v_t_32187.Lw = v_i_32186.Lw, 1);
          });
        });
        let v_e_32181 = [1, 2, 3, 4, 6, 8, 16],
          v_t_32182,
          v_n_32183;
        v_De_28096(v_u_32116.$w.fp, function (v_i_32188) {
          if (((v_t_32182 = v_i_32188.Fi & v_xn_27661) === v_zn_27686 || v_t_32182 === v_ue_27682 || v_i_32188.Fi === v_Pn_27665 || v_i_32188.Vg || v_i_32188.gw) && -1 === v_e_32181.indexOf(v_i_32188.Le)) {
            v_n_32183 = v_i_32188.Le;
            for (let v_t_32189 = 0; v_t_32189 < v_e_32181.length; ++v_t_32189) if (v_e_32181[v_t_32189] > v_n_32183) {
              v_i_32188.Le = v_e_32181[v_pe_27823(v_t_32189 - 1, 0)];
              break;
            }
          }
        }), v_De_28096(v_u_32116.$w.fp, function (v_i_32190) {
          if (v_i_32190.Fi !== v_ue_27682 && v_i_32190.Fi !== v_t0_27693 || v_i_32190.Vg || (v_i_32190.Fi = v_An_27660), 16 < v_i_32190.ou + v_i_32190.Le) v_u_32116.$w.kP = !1;else for (let v_t_32191 = 0; v_t_32191 < v_i_32190.We.length; ++v_t_32191) if (16 < v_i_32190.We[v_t_32191].ou + v_i_32190.We[v_t_32191].Le) return void (v_u_32116.$w.kP = !1);
        }), v_De_28096(v_u_32116.$w.fp, function (v_e_32192) {
          if (v__0_27710(v_e_32192.Fi)) {
            let v_i_32193 = v_cc_28210(v_e_32192.ou, v_e_32192.Le);
            v_De_28096(v_u_32116.$w.fp, function (v_t_32194) {
              v_e_32192.Xg !== v_t_32194.Xg || v_t_32194.Fi !== v_le_27675 && v_t_32194.Fi !== v_ce_27678 || 1 === v_t_32194.Jg || (v_t_32194.xk |= v_i_32193);
            });
          }
        }), v_De_28096(v_u_32116.$w.fp, function (v_e_32195) {
          v__0_27710(v_e_32195.Fi) && v_De_28096(v_u_32116.$w.fp, function (v_t_32196) {
            var v_i_32197 = v_cc_28210(v_t_32196.ou, v_t_32196.Le);
            v_t_32196.Fi !== v_le_27675 && v_t_32196.Fi !== v_ce_27678 || 1 === v_t_32196.Jg || v_t_32196.Xg !== v_e_32195.Xg || (v_t_32196.xk & v_i_32197) !== v_i_32197 || (v_t_32196.Jg = 1, v_t_32196.Yg = v_e_32195.Fi);
          });
        });
      }
      v_a_32109.$w.kP || (v_a_32109.$w.fp = []);
      {
        var v_w_32117 = v_a_32109;
        let v_v_32198;
        if (v_De_28096(v_w_32117.$w.fp, function (v_t_32205) {
          1 === v_t_32205.Fi && void 0 !== v_w_32117.$w.lp[v_t_32205.Jg] && v_w_32117.yc.qw.push({
            Xg: v_t_32205.Xg,
            ip: v_w_32117.$w.lp[v_t_32205.Jg]
          });
        }), v_w_32117.Zu.zw) {
          var v_f_32118 = v_mr_27940(v_w_32117, 0);
          for (let v_t_32206 = 0; v_t_32206 < 4 * v_mr_27940(v_w_32117, 0); ++v_t_32206) {
            var v___32119 = new v_wr_27938();
            v___32119.Fi = 161, v___32119.Xg = v_gr_27939(v_w_32117, v_w_32117.Zu.Xw ? 0 : -1, v_ke_27824(v_de_27728 * v_f_32118 * v_t_32206 / (4 * v_f_32118))), v_w_32117.$w.fp.push(v___32119);
          }
          v_w_32117.Zu.fw = v_w_32117.ep(v_gr_27939(v_w_32117, v_w_32117.Zu.Xw ? 0 : -1, 0), 0);
        }
        v_ao_28097(v_w_32117.$w._p, function (v_t_32207) {
          var v_i_32208 = new v_wr_27938();
          v_i_32208.Fi = 3, v_i_32208.Xg = v_gr_27939(v_w_32117, v_t_32207.meas, v_t_32207.stick * v_de_27728 / v_w_32117.Zu.Kw), v_i_32208.Jg = v_t_32207.flag, v_w_32117.$w.fp.push(v_i_32208);
        }), v_ao_28097(v_w_32117.yc.Zw, function (v_t_32209) {
          v_De_28096(v_t_32209, function (v_t_32210) {
            v_t_32210.od = v_w_32117.ep(v_t_32210.Xg);
          });
        }), v_w_32117.Fw && v_De_28096(v_w_32117.Fw, function (v_t_32211) {
          v_t_32211.od = v_w_32117.ep(v_t_32211.Xg);
        }), v_w_32117.$w.ap && v_De_28096(v_w_32117.$w.fp, function (v_i_32212) {
          113 !== v_i_32212.Fi && 114 !== v_i_32212.Fi || v_De_28096(v_w_32117.$w.fp, function (v_t_32213) {
            return v_i_32212.Xg === v_t_32213.Xg && v_i_32212.ou === v_t_32213.ou && v_i_32212.Le === v_t_32213.Le && v_t_32213.Fi === v_Pn_27665 && 0 === v_t_32213.Jg && (v_t_32213.Jg = 113 === v_i_32212.Fi ? 1 : 2, 1);
          });
        });
        let v_e_32199,
          v_i_32200 = (v_De_28096(v_w_32117.$w.fp, function (v_i_32214) {
            if (((v_e_32199 = v_i_32214.Fi & v_xn_27661) === v_Cn_27662 || v_e_32199 === v_zn_27686 || v_i_32214.Fi === v_ce_27678 || v_i_32214.Fi === v_le_27675 || v_i_32214.Fi === v_ue_27682 || 161 === v_i_32214.Fi || 3 === v_i_32214.Fi || v_i_32214.Fi === v_u0_27704) && (v_i_32214.Fi !== v_ce_27678 && v_i_32214.Fi !== v_le_27675 && v_i_32214.Fi !== v_ue_27682 || 0 !== v_i_32214.We.length)) {
              if ((v_v_32198 = new v_fr_27933()).Vw(v_i_32214), v_v_32198.od = v_w_32117.ep(v_i_32214.Xg), v_v_32198.Kg = v_w_32117.Tw(v_v_32198.od, v_w_32117.Zu.Wg, 1), v_De_28096(v_v_32198.We, function (v_t_32215) {
                v_t_32215.od = v_w_32117.ep(v_t_32215.Xg), v_t_32215.Kg = v_w_32117.Tw(v_t_32215.od, v_w_32117.Zu.Wg, 1);
              }), v_w_32117.yc.$g.push(v_v_32198), v_i_32214.Fi === v_ce_27678) {
                let v_h_32216 = v_v_32198,
                  v_d_32217 = [v_v_32198];
                v_De_28096(v_v_32198.We, function (v_t_32218) {
                  if (52 !== v_t_32218.Fi) {
                    if (2 <= v_d_32217.length) {
                      let v_i_32224 = [],
                        v_e_32225 = [],
                        v_n_32226 = v_d_32217[0].Xg,
                        v_r_32227 = v_d_32217[0].Le,
                        v_s_32228 = v_t_32218.Le,
                        v_a_32229 = v_t_32218.Xg - v_n_32226,
                        v_o_32230;
                      v_De_28096(v_d_32217, function (v_t_32231) {
                        v_o_32230 = (v_t_32231.Xg - v_n_32226) / v_a_32229, v_i_32224.push([v_t_32231.ou + v_t_32231.Le / 2 - v_Ee_28084(v_r_32227, v_s_32228, v_o_32230) / 2, v_o_32230]), v_e_32225.push([v_t_32231.ou + v_t_32231.Le / 2 + v_Ee_28084(v_r_32227, v_s_32228, v_o_32230) / 2, v_o_32230]);
                      }), v_i_32224.push([v_t_32218.ou, 1]), v_e_32225.push([v_t_32218.ou + v_t_32218.Le, 1]);
                      var v_l_32219,
                        v_c_32220,
                        v_u_32221,
                        v_f_32222 = v_Ja_28074(v_i_32224),
                        v___32223 = v_Ja_28074(v_e_32225);
                      for (let v_t_32232 = 30; v_t_32232 < v_a_32229; v_t_32232 += 30) v_l_32219 = v_f_32222.at(v_t_32232 / v_a_32229), v_c_32220 = v___32223.at(v_t_32232 / v_a_32229), (v_u_32221 = new v_fr_27933()).Fi = v_On_27681, v_u_32221.ou = v_me_27822(v_pe_27823(v_l_32219[0], 0), 16), v_u_32221.Le = v_me_27822(v_pe_27823(v_c_32220[0] - v_u_32221.ou, 1), 16 - v_u_32221.ou), v_u_32221.Lw = v_h_32216.Lw, v_u_32221.Xg = v_ke_27824(v_n_32226 + v_a_32229 * v_l_32219[1]), v_u_32221.od = v_w_32117.ep(v_u_32221.Xg), v_u_32221.Kg = v_w_32117.Tw(v_u_32221.od, v_u_32221.Lw, 1), v_v_32198.We.push(v_u_32221);
                    }
                    v_d_32217 = [];
                  }
                  v_d_32217.push(v_t_32218);
                }), v_v_32198.We = v_v_32198.We.filter(v_t_32233 => 52 !== v_t_32233.Fi), v_v_32198.We.sort((v_t_32234, v_i_32235) => v_t_32234.Xg - v_i_32235.Xg);
              } else v_i_32214.Fi !== v_le_27675 && v_i_32214.Fi !== v_ue_27682 || v_De_28096(v_v_32198.We, function (v_t_32236) {
                v_t_32236.ou = v_i_32214.ou, v_t_32236.Le = v_i_32214.Le;
              });
              v_e_32199 !== v_Cn_27662 && v_e_32199 !== v_zn_27686 && v_i_32214.Fi !== v_ce_27678 && v_i_32214.Fi !== v_le_27675 || v_w_32117.Zu.kr++, v_e_32199 !== v_Cn_27662 && v_i_32214.Fi !== v_ce_27678 && v_i_32214.Fi !== v_le_27675 || v_w_32117.Zu.nw++, v_i_32214.Fi === v_Tn_27663 || v__0_27710(v_i_32214.Fi) || v_i_32214.Fi === v_Rn_27666 || v_i_32214.Fi === v_ce_27678 || v_i_32214.Fi === v_le_27675 ? v_w_32117.Zu.ew.Ra++ : (v_i_32214.Fi & v_xn_27661) === v_zn_27686 ? v_w_32117.Zu.ew.Ga++ : v_i_32214.Fi === v_Pn_27665 && v_w_32117.Zu.ew.ja++;
            }
          }), v_De_28096(v_w_32117.yc.$g, function (v_t_32237, v_i_32238) {
            v_t_32237.Ae = v_i_32238 + 1;
          }), v_ye_27858.rm.u8 || v_w_32117.$w.dk ? v_De_28096(v_w_32117.yc.$g, function (v_a_32239) {
            switch (v_a_32239.Fi) {
              case v_ce_27678:
              case v_le_27675:
                {
                  if (0 === v_a_32239.We.length) break;
                  let v_e_32241 = v_a_32239.Mw(),
                    v_n_32242 = v_e_32241.Xg;
                  if (v_e_32241.Vg) {
                    let v_t_32246 = v_a_32239;
                    var v_o_32240 = v_a_32239.We.length - 2;
                    0 <= v_o_32240 && (v_t_32246 = v_a_32239.We[v_o_32240]), v_n_32242 = v_e_32241.Xg - v_de_27728 / v_h_32204(v_w_32117.np(v_t_32246.Xg - v_de_27728 / 4));
                  }
                  let v_r_32243 = [],
                    v_s_32244 = v_a_32239,
                    v_i_32245;
                  v_De_28096(v_a_32239.We, function (v_i_32247) {
                    if (v_i_32247.Fi !== v_On_27681) {
                      v_e_32241.Vg && v_i_32247.Xg > v_n_32242 ? v_i_32247.pw = !0 : (v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_a_32239.Fi === v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                      for (let v_t_32248 = v_s_32244.Xg; v_t_32248 < v_i_32247.Xg;) (v_t_32248 += v_de_27728 / v_h_32204(v_w_32117.np(v_t_32248))) < v_i_32247.Xg && v_t_32248 <= v_n_32242 && v_r_32243.push(v_t_32248);
                      v_s_32244.Iw = v_w_32117.ep(v_s_32244.Xg + 2 * v_de_27728 / v_h_32204(v_w_32117.np(v_s_32244.Xg))), v_s_32244 = v_i_32247;
                    }
                  }), v_w_32117.Zu.Bw && v_e_32241.Vg || (v_De_28096(v_r_32243, function (v_t_32249) {
                    v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(v_t_32249, v_a_32239.Lw) || ((v_i_32245 = new v_fr_27933()).Fi = v_c0_27703, v_i_32245.Xg = v_t_32249, v_i_32245.od = v_w_32117.ep(v_t_32249), v_a_32239.We.push(v_i_32245), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_a_32239.Fi === v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                  }), v_a_32239.We.sort((v_t_32250, v_i_32251) => v_t_32250.Xg - v_i_32251.Xg)), v_r_32243 = [];
                }
                break;
              case v_ue_27682:
                {
                  if (0 === v_a_32239.We.length) break;
                  let v_i_32252 = [],
                    v_e_32253 = v_a_32239,
                    v_n_32254,
                    v_r_32255,
                    v_s_32256;
                  v_De_28096(v_a_32239.We, function (v_t_32257) {
                    v_n_32254 = v_h_32204(v_w_32117.np(v_e_32253.Xg)), v_r_32255 = v_pe_27823(v_e1_27826((v_t_32257.Xg - v_e_32253.Xg) / (v_de_27728 / v_n_32254)) - 1, 0);
                    for (let v_t_32258 = 0; v_t_32258 < v_r_32255; ++v_t_32258) v_i_32252.push({
                      Xg: v_e_32253.Xg + (v_t_32258 + 1) * v_de_27728 / v_n_32254,
                      Cp: 0 === v_t_32258
                    });
                    v_e_32253 = v_t_32257, v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++;
                  }), v_De_28096(v_i_32252, function (v_t_32259) {
                    v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(tick, v_a_32239.Lw) || ((v_s_32256 = new v_fr_27933()).Fi = v_c0_27703, v_s_32256.Xg = v_t_32259.Xg, v_s_32256.od = v_w_32117.ep(v_t_32259.Xg), v_s_32256.Jg = v_t_32259.Cp ? 1 : 0, v_a_32239.We.push(v_s_32256), v_t_32259.Cp) || (v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++);
                  }), v_a_32239.We.sort((v_t_32260, v_i_32261) => v_t_32260.Xg - v_i_32261.Xg), v_i_32252 = [];
                }
            }
          }) : v_De_28096(v_w_32117.yc.$g, function (v_l_32262) {
            switch (v_l_32262.Fi) {
              case v_ce_27678:
              case v_le_27675:
                {
                  if (0 === v_l_32262.We.length) break;
                  let v_i_32264 = null,
                    v_e_32265 = v_l_32262.Mw();
                  if (v_e_32265.Vg) {
                    let v_t_32271 = v_l_32262;
                    var v_c_32263 = v_l_32262.We.length - 2;
                    0 <= v_c_32263 && (v_t_32271 = v_l_32262.We[v_c_32263]), v_i_32264 = v_e_32265.Xg - v_de_27728 / v_h_32204(v_w_32117.np(v_t_32271.Xg));
                  }
                  let v_n_32266 = [],
                    v_r_32267 = v_l_32262,
                    v_s_32268,
                    v_a_32269 = 0,
                    v_o_32270;
                  v_De_28096(v_l_32262.We, function (v_t_32272) {
                    if (v_t_32272.Fi !== v_On_27681) {
                      v_s_32268 = v_h_32204(v_w_32117.np(v_r_32267.Xg)), v_e_32265.Vg && v_t_32272.Xg > v_i_32264 ? (v_t_32272.pw = !0, v_a_32269 = v_pe_27823(v_ke_27824((v_pe_27823(v_t_32272.Xg, v_i_32264) - v_r_32267.Xg) / (v_de_27728 / v_s_32268)) - 1, 0)) : (v_a_32269 = v_pe_27823(v_e1_27826((v_t_32272.Xg - v_r_32267.Xg) / (v_de_27728 / v_s_32268)) - 1, 0), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_l_32262.Fi === v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                      for (let v_t_32273 = 0; v_t_32273 < v_a_32269; ++v_t_32273) v_n_32266.push(v_r_32267.Xg + (v_t_32273 + 1) * v_de_27728 / v_s_32268);
                      v_r_32267.Iw = v_w_32117.ep(v_r_32267.Xg + 2 * v_de_27728 / v_s_32268), v_r_32267 = v_t_32272;
                    }
                  }), v_w_32117.Zu.Bw && v_e_32265.Vg || (v_De_28096(v_n_32266, function (v_t_32274) {
                    v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(v_t_32274, v_l_32262.Lw) || ((v_o_32270 = new v_fr_27933()).Fi = v_c0_27703, v_o_32270.Xg = v_t_32274, v_o_32270.od = v_w_32117.ep(v_t_32274), v_l_32262.We.push(v_o_32270), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_l_32262.Fi === v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                  }), v_l_32262.We.sort((v_t_32275, v_i_32276) => v_t_32275.Xg - v_i_32276.Xg)), v_n_32266 = [];
                }
                break;
              case v_ue_27682:
                {
                  if (0 === v_l_32262.We.length) break;
                  let v_i_32277 = [],
                    v_e_32278 = v_l_32262,
                    v_n_32279,
                    v_r_32280,
                    v_s_32281;
                  v_De_28096(v_l_32262.We, function (v_t_32282) {
                    v_n_32279 = v_h_32204(v_w_32117.np(v_e_32278.Xg)), v_r_32280 = v_pe_27823(v_e1_27826((v_t_32282.Xg - v_e_32278.Xg) / (v_de_27728 / v_n_32279)) - 1, 0);
                    for (let v_t_32283 = 0; v_t_32283 < v_r_32280; ++v_t_32283) v_i_32277.push({
                      Xg: v_e_32278.Xg + (v_t_32283 + 1) * v_de_27728 / v_n_32279,
                      Cp: 0 === v_t_32283
                    });
                    v_e_32278 = v_t_32282, v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++;
                  }), v_De_28096(v_i_32277, function (v_t_32284) {
                    v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(tick, v_l_32262.Lw) || ((v_s_32281 = new v_fr_27933()).Fi = v_c0_27703, v_s_32281.Xg = v_t_32284.Xg, v_s_32281.od = v_w_32117.ep(v_t_32284.Xg), v_s_32281.Jg = v_t_32284.Cp ? 1 : 0, v_l_32262.We.push(v_s_32281), v_t_32284.Cp) || (v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++);
                  }), v_l_32262.We.sort((v_t_32285, v_i_32286) => v_t_32285.Xg - v_i_32286.Xg), v_i_32277 = [];
                }
            }
          }), v_De_28096(v_w_32117.yc.$g, function (v_i_32287) {
            if (v_i_32287.Fi === v_ce_27678) {
              let v_e_32288 = v_i_32287.Xg,
                v_n_32289 = v_i_32287.zg = 0,
                v_t_32290 = [];
              v_De_28096(v_i_32287.We, function (v_i_32291) {
                v_i_32291.Fi !== v_c0_27703 && (v_i_32291.Fi === v_jn_27680 || v_i_32291.Fi === v_Jn_27679 ? (v_i_32291.Xg > v_e_32288 && v_De_28096(v_t_32290, function (v_t_32292) {
                  v_t_32292.zg = (v_t_32292.Xg - v_e_32288) / (v_i_32291.Xg - v_e_32288) + v_n_32289;
                }), v_t_32290 = [], v_n_32289 += 1, v_i_32291.zg = v_n_32289, v_e_32288 = v_i_32291.Xg) : v_t_32290.push(v_i_32291));
              });
            } else v_i_32287.Fi === v_le_27675 && (v_i_32287.zg = 0, v_i_32287.Mw().zg = 1);
          }), null),
          v_n_32201 = 0,
          v_r_32202 = (v_De_28096(v_w_32117.yc.$g, function (v_t_32293) {
            (v_e_32199 = v_t_32293.Fi & v_xn_27661) === v_Cn_27662 || v_e_32199 === v_zn_27686 ? (v_i_32200 = null === v_i_32200 ? v_t_32293.od : v_me_27822(v_i_32200, v_t_32293.od), v_n_32201 = v_pe_27823(v_n_32201, v_t_32293.od)) : v_e_32199 !== v_Hn_27677 && v_e_32199 !== v_Gn_27674 && 64 !== v_e_32199 || (v_i_32200 = null === v_i_32200 ? v_t_32293.od : v_me_27822(v_i_32200, v_t_32293.od), v_n_32201 = v_pe_27823(v_n_32201, v_t_32293.od), 0 < v_t_32293.We.length && (v_n_32201 = v_pe_27823(v_n_32201, v_t_32293.We[v_t_32293.We.length - 1].od)));
          }), v_w_32117.Zu.ow = v_i_32200, (v_w_32117.Zu.yi = v_n_32201) - v_i_32200),
          v_s_32203 = 0;
        function v_h_32204(v_t_32294) {
          return v_t_32294 < 60 ? 32 : v_t_32294 < 120 ? 16 : v_t_32294 < 240 ? 8 : v_t_32294 < 480 ? 4 : v_t_32294 < 960 ? 2 : 1;
        }
        v_De_28096(v_w_32117.yc.$g, function (v_t_32295) {
          (v_e_32199 = v_t_32295.Fi & v_xn_27661) === v_Cn_27662 || v_e_32199 === v_zn_27686 ? (v_s_32203 = v_me_27822(v_ke_27824((v_t_32295.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++) : v_e_32199 !== v_Hn_27677 && v_e_32199 !== v_Gn_27674 && 64 !== v_e_32199 || (v_t_32295.Fi !== v_ue_27682 && (v_s_32203 = v_me_27822(v_ke_27824((v_t_32295.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++), v_De_28096(v_t_32295.We, function (v_t_32296) {
            v_t_32296.Fi !== v_jn_27680 && (v_t_32296.Fi !== v_c0_27703 || 1 === v_t_32296.Jg) && v_t_32296.Fi !== v_Jn_27679 && v_t_32296.Fi !== v_Un_27676 && v_t_32296.Fi !== v_Wn_27684 && v_t_32296.Fi !== v_Vn_27683 || v_t_32296.pw || (v_s_32203 = v_me_27822(v_ke_27824((v_t_32296.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++);
          }));
        });
      }
      if (null === v_a_32109.Zu.A5 && (v_a_32109.Zu.A5 = v_a_32109.np(0)), v_e_32108) {
        v_a_32109.lb = [];
        for (const v_d_32297 of v_a_32109.$w.up) v_a_32109.lb.push({
          mp: v_d_32297.mp,
          Jg: v_d_32297.Jg,
          cb: v_pr_27941(v_d_32297.Jg)[0]
        });
      }
      return v_a_32109.$w = void 0, v_a_32109.yc.$g.sort((v_t_32298, v_i_32299) => v_t_32298.od - v_i_32299.od), v_a_32109;
    }
  };