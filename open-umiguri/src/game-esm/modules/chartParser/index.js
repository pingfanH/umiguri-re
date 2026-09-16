// 模块: chartParser
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createChartParser(scope) {
  function v_g_32319() {
    this.Fi = scope.v_An_27660, this.mp = 0, this.yp = 0, this.Xg = 0, this.ou = 0, this.w = 0, this.h = 0, this.Lw = 0, this.Jg = 0, this.Yg = 0, this.Sp = 0, this.We = [], this.Rw = 1, this.CL = 0, this.dw = scope.v_An_27660, this.Vg = !1, this.gw = !1, this.xk = 0, this.Ty = 0, this.xp = 0;
  }
  let v_v_32320 = [1, 2, 3, 4, 6, 8, 16];
  let v_w_32321 = null;
  function v_m_32322(v_t_32325) {
    if (v_w_32321) {
      if (!(v_w_32321.We.length < 1)) {
        var v_i_32326 = v_w_32321.We[v_w_32321.We.length - 1];
        switch (v_w_32321.Fi) {
          case scope.v_ce_27678:
            v_i_32326.Fi = scope.v_Jn_27679;
            break;
          case scope.v_le_27675:
            if (v_i_32326.Fi = scope.v_Un_27676, 1 < v_w_32321.We.length) return void (v_w_32321 = null);
            break;
          case scope.v_ue_27682:
            v_i_32326.Fi = v_i_32326.Fi === scope.v_Xn_27685 ? scope.v_Xn_27685 : scope.v_Vn_27683;
            for (let v_t_32328 = 0; v_t_32328 < v_w_32321.We.length - 1; ++v_t_32328) v_w_32321.We[v_t_32328].Fi = scope.v_Wn_27684;
            break;
          case scope.v_t0_27693:
            v_i_32326.Fi = v_i_32326.Fi === scope.v_n0_27696 ? scope.v_r0_27697 : scope.v_i0_27694;
            break;
          case scope.v_s0_27698:
            if (0 === v_i_32326.w) return void (v_w_32321 = null);
            v_i_32326.Fi === scope.v_l0_27701 && (v_i_32326.Jg = scope.v_h0_27711), v_i_32326.Fi = scope.v_o0_27700;
            {
              var v_e_32327 = v_w_32321.We;
              let v_t_32329 = [],
                v_n_32330 = v_w_32321,
                v_r_32331 = v_w_32321.yp;
              scope.v_De_28096(v_e_32327, function (v_e_32332) {
                if (v_e_32332.Fi === scope.v_l0_27701) v_t_32329.push(v_e_32332);else {
                  let v_i_32333;
                  scope.v_De_28096(v_t_32329, function (v_t_32334) {
                    v_i_32333 = scope.v_Ya_28085(v_n_32330.yp - v_r_32331, v_e_32332.yp - v_r_32331, v_t_32334.yp - v_r_32331), v_t_32334.ou = scope.v_Ee_28084(v_n_32330.ou, v_e_32332.ou, v_i_32333), v_t_32334.h = scope.v_Ee_28084(v_n_32330.h, v_e_32332.h, v_i_32333), v_t_32334.w = scope.v_Ee_28084(v_n_32330.w, v_e_32332.w, v_i_32333);
                  }), v_t_32329 = [], v_n_32330 = v_e_32332;
                }
              });
            }
            break;
          case scope.v_V_27702:
            v_w_32321.Fi = scope.v_s0_27698, scope.v_De_28096(v_w_32321.We, function (v_t_32335) {
              v_t_32335.Fi = scope.v_a0_27699;
            }), v_i_32326.Fi = scope.v_o0_27700;
        }
        v_t_32325.$w.fp.push(v_w_32321);
      }
      v_w_32321 = null;
    }
  }
  function v_p_32323(v_v_32336) {
    let v_w_32337;
    if (scope.v_De_28096(v_v_32336.$w.Ip, function (v_t_32351) {
      v_v_32336.yc.qw.push({
        Xg: v_k_32324(v_v_32336, v_t_32351.mp, v_t_32351.yp),
        ip: v_t_32351.ip
      });
    }), v_v_32336.Zu.zw) {
      var v_i_32338 = function (v_t_32352, v_i_32353) {
          let v_e_32354 = 1;
          return scope.v_De_28096(v_t_32352.$w.up, function (v_t_32355) {
            if (v_t_32355.mp > v_i_32353) return 1;
            v_e_32354 = v_t_32355.Jg;
          }), v_e_32354;
        }(v_v_32336, 0),
        v_e_32339 = 0 < v_v_32336.$w.Ap ? scope.mathMin(v_v_32336.$w.Ap, v_i_32338 * v_v_32336.$w.Tp) : v_i_32338 * v_v_32336.$w.Tp;
      for (let v_t_32356 = 0; v_t_32356 < v_e_32339; ++v_t_32356) {
        var v_n_32340 = new v_g_32319();
        v_n_32340.Fi = 161, v_n_32340.Xg = v_k_32324(v_v_32336, v_v_32336.Zu.Xw ? 0 : -1, scope.mathFloor(scope.v_de_27728 * v_i_32338 * v_t_32356 / (v_i_32338 * v_v_32336.$w.Tp))), v_v_32336.$w.fp.push(v_n_32340);
      }
      v_v_32336.Zu.fw = v_v_32336.ep(v_k_32324(v_v_32336, v_v_32336.Zu.Xw ? 0 : -1, 0), 0);
    }
    scope.v_ao_28097(v_v_32336.yc.Zw, function (v_t_32357) {
      scope.v_De_28096(v_t_32357, function (v_t_32358) {
        v_t_32358.od = v_v_32336.ep(v_t_32358.Xg);
      });
    }), v_v_32336.Fw && scope.v_De_28096(v_v_32336.Fw, function (v_t_32359) {
      v_t_32359.od = v_v_32336.ep(v_t_32359.Xg);
    });
    let v_c_32341;
    scope.v_De_28096(v_v_32336.$w.fp, function (v_n_32360) {
      if (((v_c_32341 = v_n_32360.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_c_32341 === scope.v_zn_27686 || v_n_32360.Fi === scope.v_ce_27678 || v_n_32360.Fi === scope.v_le_27675 || v_n_32360.Fi === scope.v_ue_27682 || v_n_32360.Fi === scope.v_t0_27693 || v_n_32360.Fi === scope.v_s0_27698 || v_n_32360.Fi === scope.v_l0_27701 || 161 === v_n_32360.Fi || 3 === v_n_32360.Fi || v_n_32360.Fi === scope.v_u0_27704) && (v_n_32360.Fi !== scope.v_ce_27678 && v_n_32360.Fi !== scope.v_le_27675 && v_n_32360.Fi !== scope.v_ue_27682 && v_n_32360.Fi !== scope.v_t0_27693 && v_n_32360.Fi !== scope.v_s0_27698 || 0 !== v_n_32360.We.length)) {
        if ((v_w_32337 = new scope.v_fr_27933()).Vw(v_n_32360), v_w_32337.od = v_v_32336.ep(v_n_32360.Xg), v_w_32337.Kg = v_v_32336.Tw(v_w_32337.od, v_v_32336.Zu.Wg, 1), scope.v_De_28096(v_w_32337.We, function (v_t_32366) {
          v_t_32366.od = v_v_32336.ep(v_t_32366.Xg), v_t_32366.Kg = v_v_32336.Tw(v_t_32366.od, v_v_32336.Zu.Wg, 1);
        }), v_v_32336.yc.$g.push(v_w_32337), v_n_32360.Fi === scope.v_ce_27678) {
          let v_h_32367 = v_w_32337,
            v_d_32368 = [v_w_32337];
          scope.v_De_28096(v_w_32337.We, function (v_t_32369) {
            if (52 !== v_t_32369.Fi) {
              if (2 <= v_d_32368.length) {
                let v_i_32375 = [],
                  v_e_32376 = [],
                  v_n_32377 = v_d_32368[0].Xg,
                  v_r_32378 = v_d_32368[0].w,
                  v_s_32379 = v_t_32369.w,
                  v_a_32380 = v_t_32369.Xg - v_n_32377,
                  v_o_32381;
                scope.v_De_28096(v_d_32368, function (v_t_32382) {
                  v_o_32381 = (v_t_32382.Xg - v_n_32377) / v_a_32380, v_i_32375.push([v_t_32382.ou + v_t_32382.w / 2 - scope.v_Ee_28084(v_r_32378, v_s_32379, v_o_32381) / 2, v_o_32381]), v_e_32376.push([v_t_32382.ou + v_t_32382.w / 2 + scope.v_Ee_28084(v_r_32378, v_s_32379, v_o_32381) / 2, v_o_32381]);
                }), v_i_32375.push([v_t_32369.ou, 1]), v_e_32376.push([v_t_32369.ou + v_t_32369.w, 1]);
                var v_l_32370,
                  v_c_32371,
                  v_u_32372,
                  v_f_32373 = scope.v_Ja_28074(v_i_32375),
                  v___32374 = scope.v_Ja_28074(v_e_32376);
                for (let v_t_32383 = 30; v_t_32383 < v_a_32380; v_t_32383 += 30) v_l_32370 = v_f_32373.at(v_t_32383 / v_a_32380), v_c_32371 = v___32374.at(v_t_32383 / v_a_32380), (v_u_32372 = new scope.v_fr_27933()).Fi = scope.v_On_27681, v_u_32372.ou = scope.mathMin(scope.mathMax(v_l_32370[0], 0), 16), v_u_32372.w = scope.mathMin(scope.mathMax(v_c_32371[0] - v_u_32372.ou, 1), 16 - v_u_32372.ou), v_u_32372.Lw = v_h_32367.Lw, v_u_32372.Xg = scope.mathFloor(v_n_32377 + v_a_32380 * v_l_32370[1]), v_u_32372.od = v_v_32336.ep(v_u_32372.Xg), v_u_32372.Kg = v_v_32336.Tw(v_u_32372.od, v_u_32372.Lw, 1), v_w_32337.We.push(v_u_32372);
              }
              v_d_32368 = [];
            }
            v_d_32368.push(v_t_32369);
          }), v_w_32337.We = v_w_32337.We.filter(v_t_32384 => 52 !== v_t_32384.Fi), v_w_32337.We.sort((v_t_32385, v_i_32386) => v_t_32385.Xg - v_i_32386.Xg);
        } else v_n_32360.Fi !== scope.v_le_27675 && v_n_32360.Fi !== scope.v_ue_27682 || scope.v_De_28096(v_w_32337.We, function (v_t_32387) {
          v_t_32387.ou = v_n_32360.ou, v_t_32387.w = v_n_32360.w, v_t_32387.h = v_n_32360.h;
        });
        if (v_n_32360.Fi === scope.v_ue_27682 && 8 !== v_w_32337.h && (v_w_32337.Fi = scope.v_t0_27693, scope.v_De_28096(v_w_32337.We, function (v_t_32388) {
          v_t_32388.Fi === scope.v_Wn_27684 ? v_t_32388.Fi = scope.v_e0_27695 : v_t_32388.Fi === scope.v_Vn_27683 ? v_t_32388.Fi = scope.v_i0_27694 : v_t_32388.Fi === scope.v_Xn_27685 && (v_t_32388.Fi = scope.v_r0_27697);
        })), v_n_32360.Fi === scope.v_s0_27698) {
          var v_r_32361 = v_w_32337.Mw();
          if (v_v_32336.$w._v < 8 && v_r_32361.Jg === scope.v_h0_27711 && (v_r_32361.Fi = scope.v_l0_27701, v_r_32361.Jg = 0), 0 < v_n_32360.Ty) {
            let v_i_32389 = v_n_32360,
              v_e_32390 = v_n_32360.Xg + v_n_32360.Ty;
            var v_s_32362 = [];
            for (let v_t_32391 = 0; v_t_32391 < v_n_32360.We.length; ++v_t_32391) {
              for (var v_a_32363 = v_n_32360.We[v_t_32391]; v_e_32390 <= v_a_32363.Xg; v_e_32390 += v_n_32360.Ty) {
                var v_o_32364 = scope.v_Ya_28085(v_i_32389.Xg, v_a_32363.Xg, v_e_32390),
                  v_l_32365 = v_r_32361.Xg === v_e_32390 ? v_r_32361 : new scope.v_fr_27933();
                v_l_32365.Fi = scope.v_l0_27701, v_l_32365.Xg = v_e_32390, v_l_32365.ou = scope.v_Ee_28084(v_i_32389.ou, v_a_32363.ou, v_o_32364), v_l_32365.w = scope.v_Ee_28084(v_i_32389.w, v_a_32363.w, v_o_32364), v_l_32365.h = scope.v_Ee_28084(v_i_32389.h, v_a_32363.h, v_o_32364), v_l_32365.Lw = v_n_32360.Lw, v_l_32365.od = v_v_32336.ep(v_e_32390), v_l_32365.Kg = v_v_32336.Tw(v_l_32365.od, v_v_32336.Zu.Wg, 1), v_r_32361.Xg > v_e_32390 && v_s_32362.push(v_l_32365);
              }
              v_i_32389 = v_a_32363;
            }
            scope.arrayPush.apply(v_w_32337.We, v_s_32362), v_w_32337.We.sort((v_t_32392, v_i_32393) => v_t_32392.Xg - v_i_32393.Xg);
          }
          v_w_32337.Jg === scope.v_h0_27711 && (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
          for (let v_t_32394 = 0; v_t_32394 < v_w_32337.We.length; ++v_t_32394) v_w_32337.We[v_t_32394].Fi === scope.v_l0_27701 && (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
        }
        v_c_32341 !== scope.v_Cn_27662 && v_c_32341 !== scope.v_zn_27686 && v_n_32360.Fi !== scope.v_ce_27678 && v_n_32360.Fi !== scope.v_le_27675 || v_v_32336.Zu.kr++, v_c_32341 !== scope.v_Cn_27662 && v_n_32360.Fi !== scope.v_ce_27678 && v_n_32360.Fi !== scope.v_le_27675 || v_v_32336.Zu.nw++, v_n_32360.Fi === scope.v_Tn_27663 || scope.v__0_27710(v_n_32360.Fi) || v_n_32360.Fi === scope.v_Rn_27666 || v_n_32360.Fi === scope.v_ce_27678 || v_n_32360.Fi === scope.v_le_27675 ? v_v_32336.Zu.ew.Ra++ : (v_n_32360.Fi & scope.v_xn_27661) === scope.v_zn_27686 ? v_v_32336.Zu.ew.Ga++ : v_n_32360.Fi === scope.v_Pn_27665 && v_v_32336.Zu.ew.ja++;
      }
    });
    {
      let v_e_32395 = 1,
        v_n_32396 = 0,
        v_r_32397 = v_v_32336.$w.Lp,
        v_s_32398 = [];
      if ((v_r_32397.length || v_v_32336.$w.PL.length) && (v_s_32398 = v_v_32336.yc.$g.concat(), scope.v_De_28096(v_v_32336.yc.$g, v_t_32399 => {
        scope.arrayPush.apply(v_s_32398, v_t_32399.We);
      }), (v_s_32398 = v_s_32398.filter(v_t_32400 => {
        return (v_t_32400 = v_t_32400.Fi) === scope.v_Tn_27663 || v_t_32400 === scope.v_In_27664 || v_t_32400 === scope.v_Pn_27665 || v_t_32400 === scope.v_Rn_27666 || v_t_32400 === scope.v_Ln_27667 || v_t_32400 === scope.v_Mn_27668 || v_t_32400 === scope.v_En_27669 || v_t_32400 === scope.v_Dn_27670 || v_t_32400 === scope.v_Fn_27671 || v_t_32400 === scope.v_Bn_27672 || v_t_32400 === scope.v_Nn_27673 || v_t_32400 === scope.v_le_27675 || v_t_32400 === scope.v_Un_27676 || v_t_32400 === scope.v_ce_27678 || v_t_32400 === scope.v_Jn_27679 || v_t_32400 === scope.v_jn_27680 || v_t_32400 === scope.v_On_27681 || v_t_32400 === scope.v_ue_27682 || v_t_32400 === scope.v_Vn_27683 || v_t_32400 === scope.v_Wn_27684 || v_t_32400 === scope.v_Xn_27685 || v_t_32400 === scope.v_Kn_27687 || v_t_32400 === scope.v_Yn_27688 || v_t_32400 === scope.v_qn_27689 || v_t_32400 === scope.v_Zn_27690 || v_t_32400 === scope.v_$n_27691 || v_t_32400 === scope.v_Qn_27692 || v_t_32400 === scope.v_t0_27693 || v_t_32400 === scope.v_i0_27694 || v_t_32400 === scope.v_e0_27695 || v_t_32400 === scope.v_n0_27696 || v_t_32400 === scope.v_r0_27697 || v_t_32400 === scope.v_s0_27698 || v_t_32400 === scope.v_a0_27699 || v_t_32400 === scope.v_o0_27700 || v_t_32400 === scope.v_l0_27701;
      })).sort((v_t_32401, v_i_32402) => v_t_32401.Xg - v_i_32402.Xg)), v_r_32397.length) {
        let v_i_32403 = v_k_32324(v_v_32336, v_r_32397[0].mp, v_r_32397[0].yp);
        scope.v_De_28096(v_s_32398, function (v_t_32404) {
          for (; v_t_32404.Xg >= v_i_32403;) v_e_32395 = v_r_32397[v_n_32396].tp, ++v_n_32396, v_i_32403 = v_n_32396 >= v_r_32397.length ? 1 / 0 : v_k_32324(v_v_32336, v_r_32397[v_n_32396].mp, v_r_32397[v_n_32396].yp);
          v_t_32404.Rw = v_e_32395;
        });
      }
      if (console.log(v_v_32336.$w.PL), v_v_32336.$w.PL.length) for (var v_t_32342 of v_v_32336.$w.PL) {
        var v_a_32343,
          v_o_32344 = v_k_32324(v_v_32336, v_t_32342.mp, v_t_32342.yp),
          v_l_32345 = v_o_32344 + v_t_32342.H2;
        for (v_a_32343 of v_s_32398) {
          if (v_a_32343.Xg >= v_l_32345) break;
          v_a_32343.Xg >= v_o_32344 && v_a_32343.ou >= v_t_32342.ou && v_a_32343.ou + v_a_32343.w <= v_t_32342.ou + v_t_32342.w && (v_a_32343.CL = v_t_32342.Ae), console.log(v_a_32343.CL);
        }
      }
    }
    scope.v_De_28096(v_v_32336.yc.$g, function (v_t_32405, v_i_32406) {
      v_t_32405.Ae = v_i_32406 + 1;
    });
    let v_r_32346 = null,
      v_s_32347 = 0,
      v_u_32348 = (scope.v_De_28096(v_v_32336.yc.$g, function (v_t_32407) {
        (v_c_32341 = v_t_32407.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_c_32341 === scope.v_zn_27686 || v_t_32407.Fi === scope.v_l0_27701 ? (v_r_32346 = null === v_r_32346 ? v_t_32407.od : scope.mathMin(v_r_32346, v_t_32407.od), v_s_32347 = scope.mathMax(v_s_32347, v_t_32407.od)) : v_c_32341 !== scope.v_Hn_27677 && v_c_32341 !== scope.v_Gn_27674 && 64 !== v_c_32341 && 256 !== v_c_32341 || (v_r_32346 = null === v_r_32346 ? v_t_32407.od : scope.mathMin(v_r_32346, v_t_32407.od), v_s_32347 = scope.mathMax(v_s_32347, v_t_32407.od), 0 < v_t_32407.We.length && (v_s_32347 = scope.mathMax(v_s_32347, v_t_32407.We[v_t_32407.We.length - 1].od)));
      }), v_v_32336.Zu.ow = v_r_32346, v_v_32336.Zu.yi = v_s_32347, scope.handshake.rm.u8 || v_v_32336.$w.dk ? scope.v_De_28096(v_v_32336.yc.$g, function (v_a_32408) {
        switch (v_a_32408.Fi) {
          case scope.v_ce_27678:
          case scope.v_le_27675:
            {
              if (0 === v_a_32408.We.length) break;
              let v_e_32411 = v_a_32408.Mw(),
                v_n_32412 = v_e_32411.Xg;
              if (v_e_32411.Vg) {
                let v_t_32416 = v_a_32408;
                var v_o_32409 = v_a_32408.We.length - 2;
                0 <= v_o_32409 && (v_t_32416 = v_a_32408.We[v_o_32409]), v_n_32412 = v_e_32411.Xg - scope.v_de_27728 / v___32350(v_v_32336.np(v_t_32416.Xg - scope.v_de_27728 / 4));
              }
              let v_r_32413 = [],
                v_s_32414 = v_a_32408,
                v_i_32415;
              scope.v_De_28096(v_a_32408.We, function (v_i_32417) {
                if (v_i_32417.Fi !== scope.v_On_27681) {
                  v_e_32411.Vg && v_i_32417.Xg > v_n_32412 ? v_i_32417.pw = !0 : (v_v_32336.Zu.kr++, v_v_32336.Zu.nw++, v_a_32408.Fi === scope.v_ce_27678 ? v_v_32336.Zu.ew.Da++ : v_v_32336.Zu.ew.iw++);
                  for (let v_t_32418 = v_s_32414.Xg; v_t_32418 < v_i_32417.Xg;) (v_t_32418 += scope.v_de_27728 / v___32350(v_v_32336.np(v_t_32418))) < v_i_32417.Xg && v_t_32418 <= v_n_32412 && v_r_32413.push(v_t_32418);
                  v_s_32414.Iw = v_v_32336.ep(v_s_32414.Xg + 2 * scope.v_de_27728 / v___32350(v_v_32336.np(v_s_32414.Xg))), v_s_32414 = v_i_32417;
                }
              }), v_v_32336.Zu.Bw && v_e_32411.Vg || (scope.v_De_28096(v_r_32413, function (v_t_32419) {
                v_v_32336.Zu.Bw && 0 == v_v_32336.Ew(v_t_32419, v_a_32408.Lw) || ((v_i_32415 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_i_32415.Xg = v_t_32419, v_i_32415.od = v_v_32336.ep(v_t_32419), v_a_32408.We.push(v_i_32415), v_v_32336.Zu.kr++, v_v_32336.Zu.nw++, v_a_32408.Fi === scope.v_ce_27678 ? v_v_32336.Zu.ew.Da++ : v_v_32336.Zu.ew.iw++);
              }), v_a_32408.We.sort((v_t_32420, v_i_32421) => v_t_32420.Xg - v_i_32421.Xg)), v_r_32413 = [];
            }
            break;
          case scope.v_ue_27682:
          case scope.v_t0_27693:
            {
              if (0 === v_a_32408.We.length) break;
              v_o_32409 = v_a_32408.Mw();
              let v_e_32422 = v_o_32409.Xg;
              if (v_o_32409.Fi === scope.v_Xn_27685 || v_o_32409.Fi === scope.v_r0_27697) {
                let v_t_32427 = v_a_32408;
                var v_l_32410 = v_a_32408.We.length - 2;
                0 <= v_l_32410 && (v_t_32427 = v_a_32408.We[v_l_32410]), v_e_32422 = v_o_32409.Xg - scope.v_de_27728 / v___32350(v_v_32336.np(v_t_32427.Xg - scope.v_de_27728 / 4));
              }
              let v_n_32423 = [],
                v_r_32424 = v_a_32408,
                v_i_32425,
                v_s_32426 = !1;
              scope.v_De_28096(v_a_32408.We, function (v_i_32428) {
                if (v_i_32428.Fi !== scope.v_n0_27696) {
                  v_s_32426 = !0;
                  for (let v_t_32429 = v_r_32424.Xg; v_t_32429 < v_i_32428.Xg;) (v_t_32429 += scope.v_de_27728 / v___32350(v_v_32336.np(v_t_32429))) < v_i_32428.Xg && v_t_32429 <= v_e_32422 && v_n_32423.push({
                    Xg: v_t_32429,
                    Cp: v_s_32426
                  }), v_s_32426 = !1;
                  (v_r_32424 = v_i_32428).Fi !== scope.v_Xn_27685 && v_i_32428.Fi !== scope.v_r0_27697 && (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
                }
              }), scope.v_De_28096(v_n_32423, function (v_t_32430) {
                v_v_32336.Zu.Bw && 0 == v_v_32336.Ew(v_t_32430.Xg, v_a_32408.Lw) || ((v_i_32425 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_i_32425.Xg = v_t_32430.Xg, v_i_32425.od = v_v_32336.ep(v_t_32430.Xg), v_i_32425.Jg = v_t_32430.Cp ? 1 : 0, v_a_32408.We.push(v_i_32425), v_t_32430.Cp) || (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
              }), v_a_32408.We.sort((v_t_32431, v_i_32432) => v_t_32431.Xg - v_i_32432.Xg), v_n_32423 = [];
            }
        }
      }) : scope.v_De_28096(v_v_32336.yc.$g, function (v_l_32433) {
        switch (v_l_32433.Fi) {
          case scope.v_ce_27678:
          case scope.v_le_27675:
            {
              if (0 === v_l_32433.We.length) break;
              let v_i_32435 = null,
                v_e_32436 = v_l_32433.Mw();
              if (v_e_32436.Vg) {
                let v_t_32442 = v_l_32433;
                var v_c_32434 = v_l_32433.We.length - 2;
                0 <= v_c_32434 && (v_t_32442 = v_l_32433.We[v_c_32434]), v_i_32435 = v_e_32436.Xg - scope.v_de_27728 / v___32350(v_v_32336.np(v_t_32442.Xg));
              }
              let v_n_32437 = [],
                v_r_32438 = v_l_32433,
                v_s_32439,
                v_a_32440 = 0,
                v_o_32441;
              scope.v_De_28096(v_l_32433.We, function (v_t_32443) {
                if (v_t_32443.Fi !== scope.v_On_27681) {
                  v_s_32439 = v___32350(v_v_32336.np(v_r_32438.Xg)), v_e_32436.Vg && v_t_32443.Xg > v_i_32435 ? (v_t_32443.pw = !0, v_a_32440 = scope.mathMax(scope.mathFloor((scope.mathMax(v_t_32443.Xg, v_i_32435) - v_r_32438.Xg) / (scope.v_de_27728 / v_s_32439)) - 1, 0)) : (v_a_32440 = scope.mathMax(scope.mathCeil((v_t_32443.Xg - v_r_32438.Xg) / (scope.v_de_27728 / v_s_32439)) - 1, 0), v_v_32336.Zu.kr++, v_v_32336.Zu.nw++, v_l_32433.Fi === scope.v_ce_27678 ? v_v_32336.Zu.ew.Da++ : v_v_32336.Zu.ew.iw++);
                  for (let v_t_32444 = 0; v_t_32444 < v_a_32440; ++v_t_32444) v_n_32437.push(v_r_32438.Xg + (v_t_32444 + 1) * scope.v_de_27728 / v_s_32439);
                  v_r_32438.Iw = v_v_32336.ep(v_r_32438.Xg + 2 * scope.v_de_27728 / v_s_32439), v_r_32438 = v_t_32443;
                }
              }), v_v_32336.Zu.Bw && v_e_32436.Vg || (scope.v_De_28096(v_n_32437, function (v_t_32445) {
                v_v_32336.Zu.Bw && 0 == v_v_32336.Ew(v_t_32445, v_l_32433.Lw) || ((v_o_32441 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_o_32441.Xg = v_t_32445, v_o_32441.od = v_v_32336.ep(v_t_32445), v_l_32433.We.push(v_o_32441), v_v_32336.Zu.kr++, v_v_32336.Zu.nw++, v_l_32433.Fi === scope.v_ce_27678 ? v_v_32336.Zu.ew.Da++ : v_v_32336.Zu.ew.iw++);
              }), v_l_32433.We.sort((v_t_32446, v_i_32447) => v_t_32446.Xg - v_i_32447.Xg)), v_n_32437 = [];
            }
            break;
          case scope.v_ue_27682:
          case scope.v_t0_27693:
            {
              if (0 === v_l_32433.We.length) break;
              let v_i_32448 = [],
                v_e_32449 = v_l_32433,
                v_n_32450,
                v_r_32451,
                v_s_32452;
              scope.v_De_28096(v_l_32433.We, function (v_t_32453) {
                if (v_t_32453.Fi !== scope.v_n0_27696) {
                  v_n_32450 = v___32350(v_v_32336.np(v_e_32449.Xg)), v_r_32451 = scope.mathMax(scope.mathCeil((v_t_32453.Xg - v_e_32449.Xg) / (scope.v_de_27728 / v_n_32450)) - 1, 0);
                  for (let v_t_32454 = 0; v_t_32454 < v_r_32451; ++v_t_32454) v_i_32448.push({
                    Xg: v_e_32449.Xg + (v_t_32454 + 1) * scope.v_de_27728 / v_n_32450,
                    Cp: 0 === v_t_32454
                  });
                  (v_e_32449 = v_t_32453).Fi !== scope.v_Xn_27685 && v_t_32453.Fi !== scope.v_r0_27697 && (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
                }
              }), scope.v_De_28096(v_i_32448, function (v_t_32455) {
                v_v_32336.Zu.Bw && 0 == v_v_32336.Ew(v_t_32455.Xg, v_l_32433.Lw) || ((v_s_32452 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_s_32452.Xg = v_t_32455.Xg, v_s_32452.od = v_v_32336.ep(v_t_32455.Xg), v_s_32452.Jg = v_t_32455.Cp ? 1 : 0, v_l_32433.We.push(v_s_32452), v_t_32455.Cp) || (v_v_32336.Zu.kr++, v_v_32336.Zu.ew.Ga++);
              }), v_l_32433.We.sort((v_t_32456, v_i_32457) => v_t_32456.Xg - v_i_32457.Xg), v_i_32448 = [];
            }
        }
      }), scope.v_De_28096(v_v_32336.yc.$g, function (v_r_32458) {
        if (v_r_32458.Fi === scope.v_ce_27678) {
          let v_e_32459 = v_r_32458.Xg,
            v_n_32460 = v_r_32458.zg = 0,
            v_t_32461 = [];
          scope.v_De_28096(v_r_32458.We, function (v_i_32462) {
            v_i_32462.Fi !== scope.v_c0_27703 && (v_i_32462.Fi === scope.v_jn_27680 || v_i_32462.Fi === scope.v_Jn_27679 ? (v_i_32462.Xg > v_e_32459 && scope.v_De_28096(v_t_32461, function (v_t_32463) {
              v_t_32463.zg = (v_t_32463.Xg - v_e_32459) / (v_i_32462.Xg - v_e_32459) + v_n_32460;
            }), v_t_32461 = [], v_n_32460 += 1, v_i_32462.zg = v_n_32460, v_e_32459 = v_i_32462.Xg) : v_t_32461.push(v_i_32462));
          });
        } else if (v_r_32458.Fi === scope.v_le_27675) v_r_32458.zg = 0, v_r_32458.Mw().zg = 1;else if (v_r_32458.Fi === scope.v_s0_27698) {
          let v_i_32464 = v_r_32458.Mw().Xg - v_r_32458.Xg;
          v_r_32458.zg = 0, scope.v_De_28096(v_r_32458.We, function (v_t_32465) {
            v_t_32465.zg = (v_t_32465.Xg - v_r_32458.Xg) / v_i_32464;
          });
        }
      }), v_s_32347 - v_r_32346),
      v_f_32349 = 0;
    function v___32350(v_t_32466) {
      return v_t_32466 < 60 ? 32 : v_t_32466 < 120 ? 16 : v_t_32466 < 240 ? 8 : v_t_32466 < 480 ? 4 : v_t_32466 < 960 ? 2 : 1;
    }
    scope.v_De_28096(v_v_32336.yc.$g, function (v_t_32467) {
      (v_c_32341 = v_t_32467.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_c_32341 === scope.v_zn_27686 || v_t_32467.Fi === scope.v_l0_27701 ? (v_f_32349 = scope.mathMin(scope.mathFloor((v_t_32467.od - v_r_32346) / v_u_32348 * 120), 119), v_v_32336.Zu.sw[v_f_32349]++) : v_c_32341 !== scope.v_Hn_27677 && v_c_32341 !== scope.v_Gn_27674 && 64 !== v_c_32341 && 256 !== v_c_32341 || (v_t_32467.Fi !== scope.v_ue_27682 && v_t_32467.Fi !== scope.v_t0_27693 && (v_f_32349 = scope.mathMin(scope.mathFloor((v_t_32467.od - v_r_32346) / v_u_32348 * 120), 119), v_v_32336.Zu.sw[v_f_32349]++), scope.v_De_28096(v_t_32467.We, function (v_t_32468) {
        v_t_32468.Fi !== scope.v_jn_27680 && (v_t_32468.Fi !== scope.v_c0_27703 || 1 === v_t_32468.Jg) && v_t_32468.Fi !== scope.v_Jn_27679 && v_t_32468.Fi !== scope.v_Un_27676 && v_t_32468.Fi !== scope.v_Wn_27684 && v_t_32468.Fi !== scope.v_Vn_27683 && v_t_32468.Fi !== scope.v_e0_27695 && v_t_32468.Fi !== scope.v_i0_27694 || v_t_32468.pw || (v_f_32349 = scope.mathMin(scope.mathFloor((v_t_32468.od - v_r_32346) / v_u_32348 * 120), 119), v_v_32336.Zu.sw[v_f_32349]++);
      }));
    });
  }
  function v_k_32324(v_t_32469, v_i_32470, v_e_32471) {
    let v_n_32472 = 0,
      v_r_32473 = 0,
      v_s_32474 = 1,
      v_a_32475 = scope.mathMax(v_i_32470, 0);
    return scope.v_De_28096(v_t_32469.$w.up, function (v_t_32476) {
      if (v_t_32476.mp > v_a_32475) return 1;
      v_n_32472 += (v_t_32476.mp - v_r_32473) * scope.v_de_27728 * v_s_32474, v_s_32474 = v_t_32476.Jg, v_r_32473 = v_t_32476.mp;
    }), v_n_32472 += (v_i_32470 - v_r_32473) * scope.v_de_27728 * v_s_32474, scope.mathFloor(v_n_32472 + v_e_32471);
  }
  return {
    rt: function (v_t_32477, v_i_32478, v_e_32479) {
      let v_a_32480 = new scope.v_dr_27936(),
        v_o_32481 = (v_a_32480.$w = {
          _v: 0,
          Ip: [],
          cp: {},
          up: [],
          fp: [],
          _p: [],
          hp: 0,
          vp: 0,
          gp: !1,
          wp: !1,
          pp: !0,
          Tp: 4,
          Ap: 0,
          Rp: scope.v_An_27660,
          Ep: !1,
          oy: !1,
          Mp: !1,
          Lp: [],
          dk: !1,
          hk: !1,
          kP: !0,
          PL: []
        }, 0);
      var v_n_32482,
        v_r_32483,
        v_s_32484,
        v_l_32485,
        v_c_32486 = v_t_32477.replace(/\r\n/g, "\n").split("\n");
      for (let v_t_32492 = 0; v_t_32492 < v_c_32486.length && ("" === (v_n_32482 = v_c_32486[v_t_32492].trimEnd()) || ("@" === (v_r_32483 = v_n_32482.substr(0, 1)) ? function (v_t_32493, v_i_32494) {
        switch (v_i_32494[0]) {
          case "VER":
            return 2 <= v_i_32494.length && (v_t_32493.$w._v = scope.v_Pe_28064(v_i_32494[1]));
          case "EXVER":
            return 2 <= v_i_32494.length && 0 < scope.v_Pe_28064(v_i_32494[1]) && (v_t_32493.$w.dk = !0);
          case "TITLE":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.lf = v_i_32494[1]);
          case "SORT":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.x5 = v_i_32494[1]);
          case "RLDATE":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.I5 = scope.v_Pe_28064(v_i_32494[1]));
          case "ARTIST":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.C5 = v_i_32494[1]);
          case "GENRE":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.y5 = v_i_32494[1]);
          case "DESIGN":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.T5 = v_i_32494[1]);
          case "DIFF":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.te = scope.v_Pe_28064(v_i_32494[1]));
          case "WEATTR":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.te = 4, v_t_32493.Zu.b5 = v_i_32494[1].substr(0, 1));
          case "LEVEL":
            return 2 <= v_i_32494.length && "" !== v_i_32494[1] && 0 < scope.v_Pe_28064(v_i_32494[1]) && (v_t_32493.Zu.k5 = v_i_32494[1]);
          case "SONGID":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.ee = v_i_32494[1]);
          case "BGM":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Gw = v_i_32494[1]);
          case "BGMOFS":
            return 2 <= v_i_32494.length && (v_t_32493.Zu._w = scope.v_Re_28066(v_i_32494[1]));
          case "JACKET":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Ow = v_i_32494[1]);
          case "BGIMG":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.jw = v_i_32494[1]);
          case "BGSCENE":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Hw = v_i_32494[1]);
          case "BGMODE":
            return 3 <= v_i_32494.length && "PASSIVE" === v_i_32494[1] && (v_t_32493.Zu.hw = scope.v_La_28062(v_i_32494[2]));
          case "FLDIMG":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Ww = v_i_32494[1]);
          case "FLDSCENE":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Nw = v_i_32494[1]);
          case "FLDCOL":
            return 2 <= v_i_32494.length && (v_t_32493.$w._v < 7 ? v_t_32493.Zu.Uw = v_i_32494[1] : v_t_32493.Zu.ey = scope.v_Pe_28064(v_i_32494[1]));
          case "TICKS":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.Kw = 4 * scope.v_Pe_28064(v_i_32494[1]));
          case "BPM":
            return 3 <= v_i_32494.length && (v_e_32495 = v_i_32494[1].split("'"), v_t_32493.$w.Ip.push({
              mp: scope.v_Pe_28064(v_e_32495[0]),
              yp: scope.v_Pe_28064(v_e_32495[1]),
              ip: scope.v_Re_28066(v_i_32494[2])
            }), v_t_32493.$w.vp = scope.mathMax(v_t_32493.$w.vp, scope.v_Pe_28064(v_e_32495[0])));
          case "MAINBPM":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.A5 = scope.v_Re_28066(v_i_32494[1]));
          case "BEAT":
            return 4 <= v_i_32494.length && (v_e_32495 = scope.v_Pe_28064(v_i_32494[1]), v_n_32496 = scope.v_Pe_28064(v_i_32494[3]), v_t_32493.$w.up.push({
              mp: v_e_32495,
              Jg: scope.v_Pe_28064(v_i_32494[2]) / v_n_32496,
              cb: scope.v_Pe_28064(v_i_32494[2])
            }), 0 === v_e_32495 && (v_t_32493.$w.Tp = v_n_32496), v_e_32495 <= 0 && (v_t_32493.$w.hk = !0), v_t_32493.$w.vp = scope.mathMax(v_t_32493.$w.vp, v_e_32495));
          case "TIL":
            return 4 <= v_i_32494.length && (v_n_32496 = v_i_32494[2].split("'"), v_e_32495 = scope.v_Pe_28064(v_i_32494[1]), void 0 === v_t_32493.$w.cp[v_e_32495] && (v_t_32493.$w.cp[v_e_32495] = []), v_t_32493.$w.cp[v_e_32495].push({
              mp: scope.v_Pe_28064(v_n_32496[0]),
              yp: scope.v_Pe_28064(v_n_32496[1]),
              tp: scope.v_Re_28066(v_i_32494[3])
            }), v_t_32493.$w.vp = scope.mathMax(v_t_32493.$w.vp, scope.v_Pe_28064(v_n_32496[0])));
          case "SPDMOD":
            return 3 <= v_i_32494.length && (v_e_32495 = v_i_32494[1].split("'"), v_t_32493.$w.Lp.push({
              mp: scope.v_Pe_28064(v_e_32495[0]),
              yp: scope.v_Pe_28064(v_e_32495[1]),
              tp: scope.v_Re_28066(v_i_32494[2])
            }), v_t_32493.$w.vp = scope.mathMax(v_t_32493.$w.vp, scope.v_Pe_28064(v_e_32495[0])));
          case "SPDDEF":
            return 4 <= v_i_32494.length && 0 < (v_n_32496 = scope.v_Pe_28064(v_i_32494[1])) && ((v_e_32495 = v_t_32493.yc.IL.get(v_n_32496) || []).push(new scope.v__r_27934(scope.v_Pe_28064(v_i_32494[2]), scope.v_Re_28066(v_i_32494[3]))), v_t_32493.yc.IL.set(v_n_32496, v_e_32495));
          case "SPDFLD":
            var v_e_32495;
            return 6 <= v_i_32494.length && 0 < (v_n_32496 = scope.v_Pe_28064(v_i_32494[1])) && (v_e_32495 = v_i_32494[2].split("'"), v_t_32493.$w.PL.push({
              Ae: v_n_32496,
              mp: scope.v_Pe_28064(v_e_32495[0]),
              yp: scope.v_Pe_28064(v_e_32495[1]),
              ou: scope.v_Pe_28064(v_i_32494[3]),
              w: scope.v_Pe_28064(v_i_32494[4]),
              H2: scope.v_Pe_28064(v_i_32494[5])
            }));
          case "USETIL":
            return 2 <= v_i_32494.length && (v_t_32493.$w.hp = scope.v_Pe_28064(v_i_32494[1]), -1 === v_t_32493.Zu.uw.indexOf(v_t_32493.$w.hp)) && v_t_32493.Zu.uw.push(v_t_32493.$w.hp);
          case "MAINTIL":
            var v_n_32496;
            return 2 <= v_i_32494.length && (v_n_32496 = scope.v_Pe_28064(v_i_32494[1]), void 0 !== v_t_32493.$w.cp[v_n_32496]) && (v_t_32493.Zu.Wg = v_n_32496);
          case "BGMPRV":
            return 3 <= v_i_32494.length && (v_t_32493.Zu.Yw = [scope.v_Re_28066(v_i_32494[1]), scope.v_Re_28066(v_i_32494[2])]);
          case "INTROVID":
            return 2 <= v_i_32494.length && (v_t_32493.Zu.pI = v_i_32494[1]);
          case "CLKCNT":
            return 2 <= v_i_32494.length && (v_t_32493.$w.Ap = scope.v_Pe_28064(v_i_32494[1]));
          case "FLAG":
            if (3 <= v_i_32494.length) switch (v_i_32494[1]) {
              case "DIFFTTL":
                v_t_32493.Zu.Bw = scope.v_La_28062(v_i_32494[2]), v_t_32493.Zu.Bw && v_t_32493.Zu.zw && (v_t_32493.Zu.zw = !1);
                break;
              case "SOFFSET":
                v_t_32493.Zu.Xw = !scope.v_La_28062(v_i_32494[2]), v_t_32493.Zu.Xw && (v_t_32493.Zu.zw = !0);
                break;
              case "CLICK":
                v_t_32493.Zu.zw = scope.v_La_28062(v_i_32494[2]);
                break;
              case "EXLONG":
                v_t_32493.$w.Ep = scope.v_La_28062(v_i_32494[2]);
                break;
              case "BGMWCMP":
                v_t_32493.Zu.c4 = scope.v_La_28062(v_i_32494[2]);
                break;
              case "HIPRECISION":
                v_t_32493.$w.oy = scope.v_La_28062(v_i_32494[2]);
            }
            return;
          case "ENDHEAD":
            v_t_32493.$w.Mp = !0;
        }
      }(v_a_32480, v_n_32482.substr(1).split("\t")) : "#" !== v_r_32483 || v_i_32478 || 4 <= v_a_32480.$w._v && function (v_n_32497, v_r_32498) {
        if (v_r_32498 = v_r_32498[0].match(/^([0-9']+)([:>])([\S]*)$/)) {
          var v_s_32499 = ">" === v_r_32498[2],
            v_a_32500 = v_r_32498[3].substr(0, 1),
            v_o_32501 = v_r_32498[3].substr(1);
          let v_e_32502 = [0, 0];
          if (v_s_32499 || !((v_e_32502 = v_r_32498[1].split("'")).length < 2)) {
            let v_t_32503 = new v_g_32319(),
              v_i_32504 = !1;
            if (v_s_32499 || v_m_32322(v_n_32497), v_s_32499) {
              if (!v_w_32321) return;
              if (v_w_32321.Fi === scope.v_ce_27678) {
                if (v_o_32501.length < 2) return;
                v_t_32503.Fi = "c" === v_a_32500 ? scope.v_On_27681 : "v" === v_a_32500 ? 52 : scope.v_jn_27680, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36);
              } else if (v_w_32321.Fi === scope.v_le_27675) v_t_32503.Fi = scope.v_Un_27676, v_t_32503.ou = v_w_32321.ou, v_t_32503.w = v_w_32321.w;else if (v_w_32321.Fi === scope.v_ue_27682) v_t_32503.Fi = "c" === v_a_32500 ? scope.v_Xn_27685 : scope.v_Wn_27684, v_t_32503.ou = v_w_32321.ou, v_t_32503.w = v_w_32321.w, v_t_32503.h = v_w_32321.h;else if (v_w_32321.Fi === scope.v_t0_27693) {
                if (v_o_32501.length < 3) return;
                if (v_t_32503.Fi = "c" === v_a_32500 ? scope.v_n0_27696 : scope.v_e0_27695, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                  if (v_o_32501.length < 4) return;
                  v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                  v_t_32503.h = v_s_32499 / 10;
                } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36);
              } else if (v_w_32321.Fi === scope.v_s0_27698) {
                if ("c" === v_a_32500 || 8 <= v_n_32497.$w._v ? v_t_32503.Fi = scope.v_a0_27699 : (v_t_32503.Fi = scope.v_l0_27701, v_t_32503.Jg = scope.v_h0_27711), 3 <= v_o_32501.length) if (v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                  if (v_o_32501.length < 4) return;
                  v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                  v_t_32503.h = v_s_32499 / 10;
                } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36);
              } else if (v_w_32321.Fi === scope.v_V_27702) {
                if (v_o_32501.length < 3) return;
                if (v_t_32503.Fi = 1026, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                  if (v_o_32501.length < 4) return;
                  v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                  v_t_32503.h = v_s_32499 / 10;
                } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36);
              }
              return v_t_32503.Fi === scope.v_An_27660 || !v_n_32497.$w.dk && v_t_32503.Fi !== scope.v_Un_27676 && v_t_32503.Fi !== scope.v_jn_27680 && v_t_32503.Fi !== scope.v_On_27681 && 52 !== v_t_32503.Fi && v_t_32503.Fi !== scope.v_Wn_27684 && v_t_32503.Fi !== scope.v_Vn_27683 && v_t_32503.Fi !== scope.v_Xn_27685 && v_t_32503.Fi !== scope.v_n0_27696 && v_t_32503.Fi !== scope.v_l0_27701 && v_t_32503.Fi !== scope.v_a0_27699 && 1026 !== v_t_32503.Fi && -1 === v_v_32320.indexOf(v_t_32503.w) || (v_t_32503.mp = v_w_32321.mp, v_t_32503.yp = v_w_32321.yp + scope.v_Pe_28064(v_r_32498[1]), v_t_32503.Lw = v_n_32497.$w.hp, v_n_32497.$w.Rp = v_t_32503.Fi, v_n_32497.$w.vp = scope.mathMax(v_n_32497.$w.vp, scope.v_Pe_28064(v_e_32502[0])), v_w_32321.We.push(v_t_32503));
            }
            if ("t" === v_a_32500) {
              if (v_o_32501.length < 2) return;
              v_t_32503.Fi = scope.v_Tn_27663, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36);
            } else if ("x" === v_a_32500) {
              if (v_o_32501.length < 3) return;
              switch (v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_o_32501.substr(2, 1)) {
                case "D":
                  v_t_32503.Fi = scope.v_Mn_27668;
                  break;
                case "O":
                case "C":
                  v_t_32503.Fi = scope.v_Ln_27667;
                  break;
                case "A":
                  v_t_32503.Fi = scope.v_En_27669;
                  break;
                case "W":
                  v_t_32503.Fi = scope.v_Dn_27670;
                  break;
                case "L":
                  v_t_32503.Fi = scope.v_Fn_27671;
                  break;
                case "R":
                  v_t_32503.Fi = scope.v_Bn_27672;
                  break;
                case "I":
                  v_t_32503.Fi = scope.v_Nn_27673;
                  break;
                default:
                  v_t_32503.Fi = scope.v_In_27664;
              }
            } else if ("f" === v_a_32500) {
              if (v_o_32501.length < 3) return;
              switch (v_t_32503.Fi = scope.v_Pn_27665, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_o_32501.substr(2, 1)) {
                case "L":
                  v_t_32503.Jg = 1;
                  break;
                case "R":
                  v_t_32503.Jg = 2;
              }
            } else if ("d" === v_a_32500) {
              if (v_o_32501.length < 2) return;
              v_t_32503.Fi = scope.v_Rn_27666, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36);
            } else if ("c" === v_a_32500) v_t_32503.Fi = 161;else if ("a" === v_a_32500) {
              if (v_o_32501.length < 5) return;
              switch (v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_o_32501.substr(2, 2)) {
                case "DC":
                  v_t_32503.Fi = scope.v_Yn_27688;
                  break;
                case "UL":
                  v_t_32503.Fi = scope.v_qn_27689;
                  break;
                case "UR":
                  v_t_32503.Fi = scope.v_Zn_27690;
                  break;
                case "DL":
                  v_t_32503.Fi = scope.v_$n_27691;
                  break;
                case "DR":
                  v_t_32503.Fi = scope.v_Qn_27692;
                  break;
                default:
                  v_t_32503.Fi = scope.v_Kn_27687;
              }
              "I" === v_o_32501.substr(4) && (v_t_32503.Jg = 1), v_t_32503.dw = v_n_32497.$w.Rp, v_t_32503.h = 8;
            } else if ("s" === v_a_32500) {
              if (v_o_32501.length < 2) return;
              v_t_32503.Fi = scope.v_ce_27678, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_i_32504 = !0;
            } else if ("h" === v_a_32500) {
              if (v_o_32501.length < 2) return;
              v_t_32503.Fi = scope.v_le_27675, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_i_32504 = !0;
            } else if ("S" === v_a_32500) {
              if (5 <= v_n_32497.$w._v) {
                if (v_o_32501.length < 4) return;
                if (v_t_32503.Fi = scope.v_Kn_27687, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_i_32504 && (v_w_32321 = null), !v_n_32497.$w.dk && -1 === v_v_32320.indexOf(v_t_32503.w)) return;
                v_t_32503.mp = scope.v_Pe_28064(v_e_32502[0]), v_t_32503.yp = scope.v_Pe_28064(v_e_32502[1]), v_t_32503.Lw = v_n_32497.$w.hp, "I" === v_o_32501.substr(v_n_32497.$w.oy ? 4 : 3) && (v_t_32503.Jg = 1), v_t_32503.dw = v_n_32497.$w.Rp, v_t_32503.h = 8, v_t_32503.Sp = 5, v_n_32497.$w.Rp = v_t_32503.Fi, v_n_32497.$w.fp.push(v_t_32503), v_t_32503 = new v_g_32319();
              } else if (v_o_32501.length < 3) return;
              if (v_t_32503.Fi = scope.v_t0_27693, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                if (v_o_32501.length < 4) return;
                v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                v_t_32503.h = v_s_32499 / 10;
              } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36);
              v_i_32504 = !0;
            } else if ("H" === v_a_32500) {
              if (8 <= v_n_32497.$w._v) {
                if (v_t_32503.Fi = scope.v_Kn_27687, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_i_32504 && (v_w_32321 = null), !v_n_32497.$w.dk && -1 === v_v_32320.indexOf(v_t_32503.w)) return;
                v_t_32503.mp = scope.v_Pe_28064(v_e_32502[0]), v_t_32503.yp = scope.v_Pe_28064(v_e_32502[1]), v_t_32503.Lw = v_n_32497.$w.hp, "I" === v_o_32501.substr(2, 1) && (v_t_32503.Jg = 1), v_t_32503.dw = v_n_32497.$w.Rp, v_t_32503.h = 8, v_t_32503.Sp = 5, v_n_32497.$w.Rp = v_t_32503.Fi, v_n_32497.$w.fp.push(v_t_32503), (v_t_32503 = new v_g_32319()).Fi = scope.v_ue_27682, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_t_32503.h = 8;
              } else {
                if (5 <= v_n_32497.$w._v) {
                  if (v_o_32501.length < 4) return;
                  if (v_t_32503.Fi = scope.v_Kn_27687, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_i_32504 && (v_w_32321 = null), !v_n_32497.$w.dk && -1 === v_v_32320.indexOf(v_t_32503.w)) return;
                  v_t_32503.mp = scope.v_Pe_28064(v_e_32502[0]), v_t_32503.yp = scope.v_Pe_28064(v_e_32502[1]), v_t_32503.Lw = v_n_32497.$w.hp, "I" === v_o_32501.substr(v_n_32497.$w.oy ? 4 : 3) && (v_t_32503.Jg = 1), v_t_32503.dw = v_n_32497.$w.Rp, v_t_32503.h = 8, v_t_32503.Sp = 5, v_n_32497.$w.Rp = v_t_32503.Fi, v_n_32497.$w.fp.push(v_t_32503), v_t_32503 = new v_g_32319();
                } else if (v_o_32501.length < 3) return;
                if (v_t_32503.Fi = scope.v_ue_27682, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                  if (v_o_32501.length < 4) return;
                  var v_r_32498 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                  v_t_32503.h = v_r_32498 / 10;
                } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36);
              }
              v_i_32504 = !0;
            } else if ("C" === v_a_32500) {
              if (v_o_32501.length < 4) return;
              if (v_t_32503.Fi = scope.v_s0_27698, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_t_32503.Jg = scope.v_h0_27711, v_n_32497.$w.oy) {
                if (v_o_32501.length < 4) return;
                v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                v_t_32503.h = v_s_32499 / 10, v_t_32503.Yg = parseInt(v_o_32501.substr(4, 1), 36);
              } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36), v_t_32503.Yg = parseInt(v_o_32501.substr(3, 1), 36);
              4 === v_n_32497.$w._v ? (11 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg ? v_t_32503.Yg = 0 : v_t_32503.Yg = scope.v_Y_27712[v_t_32503.Yg] : 5 === v_n_32497.$w._v ? (13 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg ? v_t_32503.Yg = 0 : v_t_32503.Yg = scope.v_q_27713[v_t_32503.Yg] : (14 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg && 34 !== v_t_32503.Yg && (v_t_32503.Yg = 0), 8 <= v_n_32497.$w._v && (v_r_32498 = v_o_32501.substr(v_n_32497.$w.oy ? 6 : 5), v_t_32503.Ty = "$" === v_r_32498 ? 2147483647 : scope.v_Pe_28064(v_r_32498), 0 === v_t_32503.Ty) && (v_t_32503.Jg = 0), v_i_32504 = !0;
            } else if ("T" === v_a_32500) {
              if (v_o_32501.length < 4 || 8 <= v_n_32497.$w._v) return;
              if (v_t_32503.Fi = scope.v_V_27702, v_t_32503.ou = parseInt(v_o_32501.substr(0, 1), 36), v_t_32503.w = parseInt(v_o_32501.substr(1, 1), 36), v_n_32497.$w.oy) {
                if (v_o_32501.length < 4) return;
                v_s_32499 = 36 * parseInt(v_o_32501.substr(2, 1), 36) + parseInt(v_o_32501.substr(3, 1), 36);
                v_t_32503.h = v_s_32499 / 10, v_t_32503.Yg = parseInt(v_o_32501.substr(4, 1), 36);
              } else v_t_32503.h = parseInt(v_o_32501.substr(2, 1), 36), v_t_32503.Yg = parseInt(v_o_32501.substr(3, 1), 36);
              4 === v_n_32497.$w._v ? (11 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg ? v_t_32503.Yg = 0 : v_t_32503.Yg = scope.v_Y_27712[v_t_32503.Yg] : 5 === v_n_32497.$w._v ? (13 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg ? v_t_32503.Yg = 0 : v_t_32503.Yg = scope.v_q_27713[v_t_32503.Yg] : (14 < v_t_32503.Yg || v_t_32503.Yg < 0) && 35 !== v_t_32503.Yg && 34 !== v_t_32503.Yg && (v_t_32503.Yg = 0), v_i_32504 = !0;
            }
            v_t_32503.Fi !== scope.v_An_27660 && (v_i_32504 && (v_w_32321 = null), v_t_32503.mp = scope.v_Pe_28064(v_e_32502[0]), v_t_32503.yp = scope.v_Pe_28064(v_e_32502[1]), v_t_32503.Lw = v_n_32497.$w.hp, !v_n_32497.$w.dk && v_t_32503.Fi !== scope.v_Un_27676 && v_t_32503.Fi !== scope.v_jn_27680 && v_t_32503.Fi !== scope.v_On_27681 && 52 !== v_t_32503.Fi && v_t_32503.Fi !== scope.v_Wn_27684 && v_t_32503.Fi !== scope.v_Vn_27683 && v_t_32503.Fi !== scope.v_Xn_27685 && v_t_32503.Fi !== scope.v_n0_27696 && v_t_32503.Fi !== scope.v_l0_27701 && v_t_32503.Fi !== scope.v_a0_27699 && 1026 !== v_t_32503.Fi && 161 !== v_t_32503.Fi && -1 === v_v_32320.indexOf(v_t_32503.w) || ((v_t_32503.Fi & scope.v_xn_27661) === scope.v_zn_27686 && (v_t_32503.Sp = 5, v_t_32503.h = 8), v_n_32497.$w.Rp = v_t_32503.Fi, v_i_32504 ? v_w_32321 = v_t_32503 : v_n_32497.$w.fp.push(v_t_32503), v_n_32497.$w.vp = scope.mathMax(v_n_32497.$w.vp, scope.v_Pe_28064(v_e_32502[0]))));
          }
        }
      }(v_a_32480, v_n_32482.substr(1).split("\t")), !v_a_32480.$w.Mp) || !v_i_32478); ++v_t_32492);
      4 <= v_a_32480.$w._v && v_m_32322(v_a_32480), v_a_32480.$w.hk || (v_a_32480.$w.up.push({
        mp: 0,
        Jg: 1,
        cb: 4
      }), v_a_32480.$w.Tp = 4), v_a_32480.$w.up.sort((v_t_32505, v_i_32506) => v_t_32505.mp - v_i_32506.mp), scope.v_ao_28097(v_a_32480.$w.cp, function (v_t_32507, v_i_32508) {
        let v_e_32509 = [];
        scope.v_De_28096(v_t_32507, function (v_t_32510) {
          v_e_32509.push({
            Xg: v_k_32324(v_a_32480, v_t_32510.mp, v_t_32510.yp * scope.v_de_27728 / v_a_32480.Zu.Kw),
            tp: v_t_32510.tp,
            od: 0
          });
        }), v_a_32480.yc.Zw[v_i_32508] = v_e_32509, v_a_32480.yc.Zw[v_i_32508].sort((v_t_32511, v_i_32512) => v_t_32511.Xg - v_i_32512.Xg);
      }), scope.v_De_28096(v_a_32480.$w.fp, function (v_t_32513) {
        v_t_32513.Xg = v_k_32324(v_a_32480, v_t_32513.mp, v_t_32513.yp * scope.v_de_27728 / v_a_32480.Zu.Kw), v_o_32481 = scope.mathMax(v_o_32481, v_t_32513.Xg), scope.v_De_28096(v_t_32513.We, function (v_t_32514) {
          v_t_32514.Xg = v_k_32324(v_a_32480, v_t_32514.mp, v_t_32514.yp * scope.v_de_27728 / v_a_32480.Zu.Kw), v_o_32481 = scope.mathMax(v_o_32481, v_t_32514.Xg);
        });
      }), v_a_32480.$w.fp.reverse(), v_a_32480.$w.fp.sort((v_t_32515, v_i_32516) => v_t_32515.Xg === v_i_32516.Xg ? v_i_32516.Sp - v_t_32515.Sp : v_t_32515.Xg - v_i_32516.Xg);
      {
        var v_u_32487 = v_a_32480,
          v_f_32488 = v_o_32481;
        let v_t_32517 = 1;
        for (;;) {
          if (v_f_32488 < (v_l_32485 = v_k_32324(v_u_32487, v_t_32517, 0))) break;
          (v_s_32484 = new v_g_32319()).Fi = scope.v_u0_27704, v_s_32484.Xg = v_l_32485, v_s_32484.Jg = v_t_32517, v_u_32487.$w.fp.push(v_s_32484), ++v_t_32517;
        }
      }
      if (v_e_32479) {
        var v___32489 = v_a_32480;
        var v_h_32490 = v_o_32481;
        let v_i_32518 = 0,
          v_e_32519 = 0,
          v_n_32520 = 0,
          v_r_32521 = 0,
          v_s_32522 = (v___32489.Fw = [], scope.v_De_28096(v___32489.$w.up, function (v_t_32523) {
            v_e_32519 = v_i_32518, v_i_32518 += (v_t_32523.mp - v_r_32521) * scope.v_de_27728 * v_n_32520;
            for (let v_i_32524 = v_r_32521; v_i_32524 < v_t_32523.meas; ++v_i_32524) for (let v_t_32525 = 0; v_t_32525 < 8; ++v_t_32525) v___32489.Fw.push({
              Dw: (0 === v_t_32525 ? 1 : 0) + (v_t_32525 % 4 == 0 ? 1 : 0) + (v_t_32525 % 2 == 0 ? 1 : 0),
              Xg: v_e_32519 + v_i_32524 * scope.v_de_27728 * v_n_32520,
              od: 0
            });
            v_n_32520 = v_t_32523.Jg, v_r_32521 = v_t_32523.mp;
          }), !0);
        for (let v_i_32526 = v_r_32521; v_s_32522; ++v_i_32526) for (let v_t_32527 = 0; v_t_32527 < 8; ++v_t_32527) v___32489.Fw.push({
          Dw: (0 === v_t_32527 ? 1 : 0) + (v_t_32527 % 4 == 0 ? 1 : 0) + (v_t_32527 % 2 == 0 ? 1 : 0),
          Xg: v_e_32519 + (v_i_32526 + v_t_32527 / 8) * scope.v_de_27728 * v_n_32520,
          od: 0
        }), v_s_32522 = v_e_32519 + v_i_32526 * scope.v_de_27728 * v_n_32520 < v_h_32490;
      }
      v_a_32480.$w.fp.sort((v_t_32528, v_i_32529) => v_t_32528.Xg === v_i_32529.Xg ? v_i_32529.Sp - v_t_32528.Sp : v_t_32528.Xg - v_i_32529.Xg);
      var v_d_32491 = v_a_32480;
      if (scope.v_De_28096(v_d_32491.$w.fp, function (v_r_32530) {
        if ((v_r_32530.Fi & scope.v_xn_27661) === scope.v_zn_27686) {
          let v_n_32531 = !1;
          scope.v_De_28096(v_d_32491.$w.fp, function (v_e_32532) {
            if (v_r_32530.Xg === v_e_32532.Xg && v_r_32530.ou === v_e_32532.ou && v_r_32530.w === v_e_32532.w && v_r_32530.dw === v_e_32532.Fi && (v_e_32532.Fi & scope.v_xn_27661) === scope.v_Cn_27662 && !v_e_32532.Vg) return v_e_32532.Vg = !0, v_r_32530.dw = v_e_32532.Fi, v_r_32530.Lw = v_e_32532.Lw, v_n_32531 = !0;
            if ((v_r_32530.dw & scope.v_xn_27661) === scope.v_Gn_27674 && v_e_32532.Fi === scope.v_le_27675 || (v_r_32530.dw & scope.v_xn_27661) === scope.v_Hn_27677 && v_e_32532.Fi === scope.v_ce_27678) {
              let v_i_32533 = null,
                v_t_32534 = v_e_32532.Fi === scope.v_le_27675;
              for (let v_t_32535 = v_e_32532.We.length - 1; 0 <= v_t_32535; --v_t_32535) if (v_e_32532.We[v_t_32535].Fi == scope.v_Un_27676 || v_e_32532.We[v_t_32535].Fi == scope.v_Jn_27679) {
                v_i_32533 = v_e_32532.We[v_t_32535];
                break;
              }
              return v_i_32533 && v_r_32530.Xg === v_i_32533.Xg && v_r_32530.ou === (v_t_32534 ? v_e_32532 : v_i_32533).ou && v_r_32530.w === (v_t_32534 ? v_e_32532 : v_i_32533).w && !v_i_32533.Vg ? (v_i_32533.Vg = !0, v_r_32530.dw = v_i_32533.Fi, v_r_32530.Lw = v_i_32533.Lw, v_n_32531 = !0) : void 0;
            }
          }), v_n_32531 || (v_r_32530.Fi = scope.v_An_27660);
        }
      }), scope.v_De_28096(v_d_32491.$w.fp, function (v_i_32536) {
        v_i_32536.Fi !== scope.v_Kn_27687 || v_i_32536.gw || scope.v_De_28096(v_d_32491.$w.fp, function (v_t_32537) {
          return !(v_i_32536.Xg !== v_t_32537.Xg || v_i_32536.ou !== v_t_32537.ou || v_i_32536.w !== v_t_32537.w || v_t_32537.Fi !== scope.v_ue_27682 && v_t_32537.Fi !== scope.v_t0_27693 || v_t_32537.Vg) && (v_t_32537.Vg = !0, v_i_32536.gw = !0, v_i_32536.h = v_t_32537.h, v_t_32537.Jg = v_i_32536.Jg, v_t_32537.Lw = v_i_32536.Lw, 1);
        });
      }), scope.v_De_28096(v_d_32491.$w.fp, function (v_i_32538) {
        if (v_i_32538.Fi !== scope.v_ue_27682 && v_i_32538.Fi !== scope.v_t0_27693 || v_i_32538.Vg || (v_i_32538.Fi = scope.v_An_27660), 16 < v_i_32538.ou + v_i_32538.w) v_d_32491.$w.kP = !1;else for (let v_t_32539 = 0; v_t_32539 < v_i_32538.We.length; ++v_t_32539) if (16 < scope.mathRound(v_i_32538.We[v_t_32539].ou + v_i_32538.We[v_t_32539].w)) return void (v_d_32491.$w.kP = !1);
      }), v_d_32491.$w.Ep || v_d_32491.$w.dk) {
        let v_e_32540 = !1;
        scope.v_De_28096(v_d_32491.$w.fp, function (v_i_32541) {
          scope.v__0_27710(v_i_32541.Fi) && !v_i_32541.Vg && (v_e_32540 = !1, scope.v_De_28096(v_d_32491.$w.fp, function (v_t_32542) {
            v_i_32541.Xg !== v_t_32542.Xg || v_i_32541.ou !== v_t_32542.ou || v_i_32541.w !== v_t_32542.w || v_t_32542.Fi !== scope.v_le_27675 && v_t_32542.Fi !== scope.v_ce_27678 || 1 === v_t_32542.Jg || (v_t_32542.Jg = 1, v_t_32542.Yg = v_i_32541.Fi, v_e_32540 = !0);
          }), v_e_32540) && (v_i_32541.Fi = scope.v_An_27660);
        });
      }
      return scope.v_De_28096(v_d_32491.$w.fp, function (v_e_32543) {
        if (scope.v__0_27710(v_e_32543.Fi)) {
          let v_i_32544 = scope.v_cc_28210(v_e_32543.ou, v_e_32543.w);
          scope.v_De_28096(v_d_32491.$w.fp, function (v_t_32545) {
            v_e_32543.Xg !== v_t_32545.Xg || v_t_32545.Fi !== scope.v_le_27675 && v_t_32545.Fi !== scope.v_ce_27678 || 1 === v_t_32545.Jg || (v_t_32545.xk |= v_i_32544);
          });
        }
      }), scope.v_De_28096(v_d_32491.$w.fp, function (v_e_32546) {
        scope.v__0_27710(v_e_32546.Fi) && scope.v_De_28096(v_d_32491.$w.fp, function (v_t_32547) {
          var v_i_32548 = scope.v_cc_28210(v_t_32547.ou, v_t_32547.w);
          v_t_32547.Fi !== scope.v_le_27675 && v_t_32547.Fi !== scope.v_ce_27678 || 1 === v_t_32547.Jg || v_t_32547.Xg !== v_e_32546.Xg || (v_t_32547.xk & v_i_32548) !== v_i_32548 || (v_t_32547.Jg = 1, v_t_32547.Yg = v_e_32546.Fi);
        });
      }), v_a_32480.$w.kP || (v_a_32480.$w.fp = []), v_p_32323(v_a_32480), null === v_a_32480.Zu.A5 && (v_a_32480.Zu.A5 = v_a_32480.np(0)), v_e_32479 && (v_a_32480.lb = v_a_32480.$w.up), v_a_32480.$w = void 0, v_a_32480.yc.$g.sort((v_t_32549, v_i_32550) => v_t_32549.od - v_i_32550.od), console.log(v_a_32480), v_a_32480;
    }
  };
}
