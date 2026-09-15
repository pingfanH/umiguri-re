// game: 语句 91 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Br_27958 = function () {
      (v_t_32887 = new v_Fr_27957()).En = ":sys_none", v_t_32887.ct = "";
      let v_e_32886 = v_t_32887;
      var v_t_32887;
      return {
        ef: function (v_i_32888) {
          let v_s_32889 = [],
            v_a_32890;
          v_Le_28076([function (v_r_32891) {
            hostBridge.zu("/skills/", function (v_t_32892) {
              let v_n_32893;
              v_Fe_28101(() => function v_i_32895(v_e_32894) {
                if (0 === v_e_32894.length) return void v_Fe_28101(() => v_Me_28078(v_r_32891));
                v_n_32893 = v_e_32894.pop().name;
                if (!v_Da_28067(v_n_32893, "_0.ucsl")) return void v_Fe_28101(() => v_i_32895(v_e_32894));
                v_$r_27975.Ic("/skills/" + v_n_32893, function (v_t_32896) {
                  null !== v_t_32896 && (v_a_32890 = v_Nr_27959.rt(v_t_32896)).Vm !== v_gt_27748 && (v_a_32890.En = v_n_32893.substr(0, v_n_32893.length - 5), v_a_32890.Um = 0 < v_a_32890.Jm.length, v_s_32889.push(v_a_32890)), v_i_32895(v_e_32894);
                });
              }(v_t_32892));
            }, () => {
              v_Me_28078(v_r_32891);
            });
          }, function (v_t_32897) {
            v_s_32889.sort((v_t_32898, v_i_32899) => v_t_32898.En < v_i_32899.En ? -1 : v_t_32898.En > v_i_32899.En ? 1 : 0), v_s_32889.push(v_e_32886), v_s_32889.ak = function (v_i_32900) {
              return this.find(v_t_32901 => v_t_32901.En === v_i_32900);
            }, v_s_32889.ik = function (v_i_32902) {
              return this.findIndex(v_t_32903 => v_t_32903.En === v_i_32902);
            }, v_e_32886.ct = v_Ue_28209("skillNoSkill"), v_Fe_28101(() => v_i_32888(v_s_32889));
          }]);
        },
        rf: function () {
          return v_e_32886;
        }
      };
    }(),
    v_Nr_27959 = function () {
      const v_w_32904 = 20,
        v_g_32905 = 30,
        v_m_32906 = 31,
        v_p_32907 = 40,
        v_k_32908 = 0,
        v_b_32909 = 1001,
        v_y_32910 = 1003,
        v_S_32911 = 1004,
        v_A_32912 = 1005,
        v_x_32913 = 1006,
        v_C_32914 = 0,
        v_T_32915 = 1e3,
        v_I_32916 = 1001,
        v_P_32917 = 1002,
        v_R_32918 = 1003,
        v_L_32919 = 1004,
        v_M_32920 = 1005,
        v_E_32921 = 1006,
        v_D_32922 = 1010,
        v_F_32923 = 1011,
        v_B_32924 = 1012,
        v_N_32925 = 1013,
        v_G_32926 = 1020,
        v_U_32927 = 1021,
        v_H_32928 = 1022,
        v_J_32929 = 1023,
        v_j_32930 = 1024,
        v_O_32931 = 1025,
        v_V_32932 = 1026,
        v_W_32933 = 1027,
        v_X_32934 = 1028,
        v_z_32935 = 1029,
        v_$_32936 = 1030,
        v_Q_32937 = 1031,
        v_tt_32938 = 0,
        v_it_32939 = 1e3,
        v_et_32940 = 1001,
        v_nt_32941 = 1002,
        v_rt_32942 = 1003,
        v_st_32943 = 1004,
        v_at_32944 = 1005,
        v_K_32945 = 3,
        v_ot_32946 = {
          None: v_gt_27748,
          Match: v_mt_27749,
          Guard: v_pt_27750,
          Support: v_kt_27751,
          BNormal: v_bt_27752,
          BTarget: v_yt_27753,
          BTech: v_St_27754,
          BManiac: v_At_27755,
          DHard: v_jt_27756,
          DAbs: v_Ot_27757,
          DCat: v_Vt_27758
        },
        v_Y_32947 = {
          INMatch: v_Wt_27759,
          INGuard: v_Kt_27760,
          INSupport: v_Yt_27761,
          INBoost: v_qt_27762,
          IDanger: v_Zt_27763,
          IDMatch: 1006,
          IDGuard: 1007,
          IDSupport: 1008,
          IDBoost: 1009
        },
        v_q_32948 = {
          Tap: [v_Tn_27663],
          ExTap: [v_In_27664, v_Ln_27667, v_Mn_27668, v_En_27669, v_Dn_27670, v_Fn_27671, v_Bn_27672, v_Nn_27673],
          Damage: [v_Rn_27666],
          Flick: [v_Pn_27665],
          SlideB: [1283],
          SlideX: [1284],
          SlideS: [v_jn_27680],
          SlideE: [v_Jn_27679],
          SlideI: [4097],
          HoldB: [1281],
          HoldX: [1282],
          HoldE: [v_Un_27676],
          HoldI: [4098],
          Air: [v_Kn_27687, v_qn_27689, v_Zn_27690, v_Yn_27688, v_Qn_27692, v_$n_27691],
          AirU: [v_Kn_27687, v_qn_27689, v_Zn_27690],
          AirD: [v_Yn_27688, v_Qn_27692, v_$n_27691],
          AirH: [4099, v_Wn_27684, v_Vn_27683, v_e0_27695, v_i0_27694],
          AirA: [v_Wn_27684, v_Vn_27683, v_e0_27695, v_i0_27694],
          AirHI: [4099],
          AirC: [v_l0_27701]
        },
        v_Z_32949 = {
          CTap: [v_Tn_27663, v_In_27664, v_Ln_27667, v_Mn_27668, v_En_27669, v_Dn_27670, v_Fn_27671, v_Bn_27672, v_Nn_27673, v_Rn_27666, 1283, 1284, 1281, 1282],
          CFlick: [v_Pn_27665],
          CSlide: [v_jn_27680, 4097, v_Jn_27679],
          CHold: [4098, v_Un_27676],
          CAir: [v_Kn_27687, v_qn_27689, v_Zn_27690, v_Yn_27688, v_Qn_27692, v_$n_27691, 4099, v_Wn_27684, v_Vn_27683, v_e0_27695, v_i0_27694, v_l0_27701]
        },
        v_lt_32950 = {
          JC: v_fe_27716,
          J: v_w0_27717,
          A: v__e_27718,
          M: v_he_27719
        },
        v_ct_32951 = {
          Normal: v_B0_27742,
          Hard1: v__t_27743,
          Hard2: v_ht_27744,
          Hard3: v_wt_27747,
          HardAir: v_dt_27745,
          Hard2Air: v_vt_27746
        },
        v_ut_32952 = {
          Add: 1001,
          Mul: 1002
        };
      function v_l_32963(v_t_32955, v_i_32956, v_e_32957, v_n_32958) {
        var v_r_32959 = v_n_32958.split("\t");
        switch (v_i_32956) {
          case 10:
            var v_s_32960,
              v_a_32961,
              v_o_32962 = v_t_32955,
              v_l_32963 = v_e_32957,
              v_c_32964 = v_r_32959;
            switch (v_c_32964[0]) {
              case "Version":
                v_o_32962._v = v_Pe_28064(v_c_32964[1] || "");
                break;
              case "Lang":
                var v_u_32965 = v_c_32964[1] || "";
                "_" !== v_u_32965.substr(0, 1) && (v_l_32963.af = v_u_32965);
                break;
              case "Title":
                v_l_32963.sf[v_l_32963.af] || (v_l_32963.sf[v_l_32963.af] = {
                  ct: "",
                  if: []
                }), v_l_32963.sf[v_l_32963.af].ct = v_c_32964[1];
                break;
              case "Desc":
                v_l_32963.sf[v_l_32963.af] || (v_l_32963.sf[v_l_32963.af] = {
                  ct: "",
                  if: []
                }), v_l_32963.sf[v_l_32963.af].if.push(v_c_32964[1] || "");
                break;
              case "Attr":
                void 0 !== v_ot_32946[v_c_32964[1]] && (v_o_32962.Vm = v_ot_32946[v_c_32964[1]]);
                break;
              case "Indicator":
                for (let v_t_32971 = 1; v_t_32971 < v_c_32964.length; ++v_t_32971) void 0 !== v_Y_32947[v_c_32964[v_t_32971]] && v_o_32962.zm.push(v_Y_32947[v_c_32964[v_t_32971]]);
                break;
              case "CountDef":
                v_o_32962.Om = v_Pe_28064(v_c_32964[1]);
                break;
              case "TargetChara":
                for (let v_t_32972 = 1; v_t_32972 < v_c_32964.length; ++v_t_32972) 0 < v_c_32964[v_t_32972].length && (3 <= (v_s_32960 = v_c_32964[1].split("/")).length ? (v_a_32961 = v_s_32960[0] + "/" + v_s_32960[1], v_o_32962.Jm.push(v_a_32961), v_o_32962.Ym[v_a_32961] = v_Pe_28064(v_s_32960[2])) : 2 <= v_s_32960.length && (v_a_32961 = v_s_32960[0] + "/" + v_s_32960[1], v_o_32962.Jm.push(v_a_32961), v_o_32962.Ym[v_a_32961] = 0));
                break;
              case "JudgeMode":
                void 0 !== v_ct_32951[v_c_32964[1]] && (v_o_32962.h7 = v_ct_32951[v_c_32964[1]], v_o_32962.zm = v_o_32962.zm.filter(v_t_32973 => v_t_32973 !== v_$t_27764), v_o_32962.h7 !== v_B0_27742) && v_o_32962.zm.unshift(v_$t_27764);
            }
            break;
          case v_w_32904:
          case v_g_32905:
          case v_m_32906:
          case v_p_32907:
            var v_f_32966 = v_t_32955,
              v___32967 = v_i_32956,
              v_h_32968 = v_r_32959,
              v_d_32969 = {
                cmd: v_k_32908,
                prm: {}
              };
            switch (v_h_32968[0]) {
              case "Boost":
                v_h_32968.length < 4 || (v_d_32969.cmd = v_b_32909, v_d_32969.prm = {
                  indicator: v_Y_32947[v_h_32968[1]],
                  op: v_ut_32952[v_h_32968[2]],
                  val: v_Re_28066(v_h_32968[3])
                }, void 0 !== v_d_32969.prm.indicator && void 0 !== v_d_32969.prm.op && isFinite(v_d_32969.prm.val)) || (v_d_32969.cmd = v_k_32908);
                break;
              case "Kill":
                v_d_32969.cmd = v_y_32910;
                break;
              case "Counter":
                v_h_32968.length < 2 || (v_d_32969.cmd = v_S_32911, v_d_32969.prm = {
                  val: v_Pe_28064(v_h_32968[1])
                }, isFinite(v_d_32969.prm.val)) || (v_d_32969.cmd = v_k_32908);
                break;
              case "If":
                if (!(v_h_32968.length < 4)) {
                  if (v_d_32969.cmd = v_A_32912, v_d_32969.prm = {
                    tvar: v_C_32914,
                    prm: null,
                    op: v_tt_32938,
                    vals: []
                  }, "=" === v_h_32968[2]) v_d_32969.prm.op = v_it_32939;else if (">" === v_h_32968[2]) v_d_32969.prm.op = v_nt_32941;else if (">=" === v_h_32968[2]) v_d_32969.prm.op = v_st_32943;else if ("<" === v_h_32968[2]) v_d_32969.prm.op = v_rt_32942;else if ("<=" === v_h_32968[2]) v_d_32969.prm.op = v_at_32944;else {
                    if ("!=" !== v_h_32968[2]) {
                      v_d_32969.cmd = v_k_32908;
                      break;
                    }
                    v_d_32969.prm.op = v_et_32940;
                  }
                  switch (v_h_32968[1]) {
                    case "NoteCat":
                      v_d_32969.prm.tvar = v_T_32915;
                      for (let v_t_32974 = v_K_32945; v_t_32974 < v_h_32968.length; ++v_t_32974) void 0 !== v_Z_32949[v_h_32968[v_t_32974]] && v_d_32969.prm.vals.push(v_Z_32949[v_h_32968[v_t_32974]]);
                      v_d_32969.prm.vals = v_d_32969.prm.vals.flat();
                      break;
                    case "NoteType":
                      v_d_32969.prm.tvar = v_T_32915;
                      for (let v_t_32975 = v_K_32945; v_t_32975 < v_h_32968.length; ++v_t_32975) void 0 !== v_q_32948[v_h_32968[v_t_32975]] && v_d_32969.prm.vals.push(v_q_32948[v_h_32968[v_t_32975]]);
                      v_d_32969.prm.vals = v_d_32969.prm.vals.flat();
                      break;
                    case "Counter":
                      v_d_32969.prm.tvar = v_I_32916;
                      for (let v_t_32976 = v_K_32945; v_t_32976 < v_h_32968.length; ++v_t_32976) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32976]));
                      break;
                    case "Answer":
                      v_d_32969.prm.tvar = v_P_32917;
                      for (let v_t_32977 = v_K_32945; v_t_32977 < v_h_32968.length; ++v_t_32977) void 0 !== v_lt_32950[v_h_32968[v_t_32977]] && v_d_32969.prm.vals.push(v_lt_32950[v_h_32968[v_t_32977]]);
                      break;
                    case "Random":
                      v_d_32969.prm.tvar = v_R_32918;
                      for (let v_t_32978 = v_K_32945; v_t_32978 < v_h_32968.length; ++v_t_32978) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32978]));
                      break;
                    case "Gauge":
                      v_d_32969.prm.tvar = v_L_32919;
                      for (let v_t_32979 = v_K_32945; v_t_32979 < v_h_32968.length; ++v_t_32979) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32979]));
                      break;
                    case "GaugeRaw":
                      v_d_32969.prm.tvar = v_Q_32937;
                      for (let v_t_32980 = v_K_32945; v_t_32980 < v_h_32968.length; ++v_t_32980) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32980]));
                      break;
                    case "Prog":
                      v_d_32969.prm.tvar = v_M_32920;
                      for (let v_t_32981 = v_K_32945; v_t_32981 < v_h_32968.length; ++v_t_32981) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32981]));
                      break;
                    case "ProgTime":
                      v_d_32969.prm.tvar = v_E_32921;
                      for (let v_t_32982 = v_K_32945; v_t_32982 < v_h_32968.length; ++v_t_32982) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32982]));
                      break;
                    case "MCount":
                      v_d_32969.prm.tvar = v_D_32922;
                      for (let v_t_32983 = v_K_32945; v_t_32983 < v_h_32968.length; ++v_t_32983) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32983]));
                      break;
                    case "ACount":
                      v_d_32969.prm.tvar = v_F_32923;
                      for (let v_t_32984 = v_K_32945; v_t_32984 < v_h_32968.length; ++v_t_32984) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32984]));
                      break;
                    case "JCount":
                      v_d_32969.prm.tvar = v_B_32924;
                      for (let v_t_32985 = v_K_32945; v_t_32985 < v_h_32968.length; ++v_t_32985) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32985]));
                      break;
                    case "JCCount":
                      v_d_32969.prm.tvar = v_N_32925;
                      for (let v_t_32986 = v_K_32945; v_t_32986 < v_h_32968.length; ++v_t_32986) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32986]));
                      break;
                    case "Combo":
                      v_d_32969.prm.tvar = v_G_32926;
                      for (let v_t_32987 = v_K_32945; v_t_32987 < v_h_32968.length; ++v_t_32987) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32987]));
                      break;
                    case "MaxCombo":
                      v_d_32969.prm.tvar = v_H_32928;
                      for (let v_t_32988 = v_K_32945; v_t_32988 < v_h_32968.length; ++v_t_32988) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32988]));
                      break;
                    case "Score":
                      v_d_32969.prm.tvar = v_j_32930;
                      for (let v_t_32989 = v_K_32945; v_t_32989 < v_h_32968.length; ++v_t_32989) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32989]));
                      break;
                    case "BorderS":
                      v_d_32969.prm.tvar = v_O_32931;
                      for (let v_t_32990 = v_K_32945; v_t_32990 < v_h_32968.length; ++v_t_32990) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32990]));
                      break;
                    case "BorderSS":
                      v_d_32969.prm.tvar = v_V_32932;
                      for (let v_t_32991 = v_K_32945; v_t_32991 < v_h_32968.length; ++v_t_32991) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32991]));
                      break;
                    case "BorderSSS":
                      v_d_32969.prm.tvar = v_W_32933;
                      for (let v_t_32992 = v_K_32945; v_t_32992 < v_h_32968.length; ++v_t_32992) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32992]));
                      break;
                    case "AllJustice":
                      v_d_32969.prm.tvar = v_X_32934;
                      for (let v_t_32993 = v_K_32945; v_t_32993 < v_h_32968.length; ++v_t_32993) v_d_32969.prm.vals.push(v_ft_32954(v_h_32968[v_t_32993]));
                      break;
                    case "FullCombo":
                      v_d_32969.prm.tvar = v_z_32935;
                      for (let v_t_32994 = v_K_32945; v_t_32994 < v_h_32968.length; ++v_t_32994) v_d_32969.prm.vals.push(v_ft_32954(v_h_32968[v_t_32994]));
                      break;
                    default:
                      if (0 === v_h_32968[1].indexOf("ComboMod")) {
                        v_d_32969.prm.tvar = v_U_32927, v_d_32969.prm.prm = v_pe_27823(v_Pe_28064(v_h_32968[1].substr(8)), 1);
                        for (let v_t_32995 = v_K_32945; v_t_32995 < v_h_32968.length; ++v_t_32995) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32995]));
                      } else if (0 === v_h_32968[1].indexOf("MaxComboMod")) {
                        v_d_32969.prm.tvar = v_J_32929, v_d_32969.prm.prm = v_pe_27823(v_Pe_28064(v_h_32968[1].substr(11)), 1);
                        for (let v_t_32996 = v_K_32945; v_t_32996 < v_h_32968.length; ++v_t_32996) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32996]));
                      } else if (0 === v_h_32968[1].indexOf("Success")) {
                        var v_v_32970 = v_h_32968[1].substr(7),
                          v_v_32970 = v_q_32948[v_v_32970] || v_Z_32949[v_v_32970];
                        if (void 0 === v_v_32970) break;
                        v_d_32969.prm.prm = v_v_32970.flat(), v_d_32969.prm.tvar = v_$_32936;
                        for (let v_t_32997 = v_K_32945; v_t_32997 < v_h_32968.length; ++v_t_32997) v_d_32969.prm.vals.push(v_Pe_28064(v_h_32968[v_t_32997]));
                      }
                  }
                  v_d_32969.prm.tvar === v_C_32914 && (v_d_32969.cmd = v_k_32908);
                }
                break;
              case "ClearIf":
                v_d_32969.cmd = v_x_32913;
            }
            v_d_32969.cmd !== v_k_32908 && (v___32967 === v_w_32904 ? v_f_32966.Zm.push(v_d_32969) : v___32967 === v_g_32905 ? v_f_32966.qm.push(v_d_32969) : v___32967 === v_m_32906 ? v_f_32966.$m.push(v_d_32969) : v___32967 === v_p_32907 && v_f_32966.Qm.push(v_d_32969));
        }
      }
      function v_ft_32954(v_t_32998) {
        return "True" === v_t_32998;
      }
      return {
        rt: function (v_i_32999) {
          var v_e_33000 = new v_Fr_27957();
          let v_n_33001;
          var v_r_33002,
            v_s_33003,
            v_a_33004 = {
              af: "ja",
              sf: {}
            },
            v_o_33005 = v_i_32999.replace(/\r\n/g, "\n").split("\n");
          for (let v_t_33006 = 0; v_t_33006 < v_o_33005.length; ++v_t_33006) "" !== (v_r_33002 = v_o_33005[v_t_33006].trim()) && "#" !== v_r_33002[0] && (null === (v_s_33003 = "Meta:" === (v_s_33003 = v_r_33002) ? 10 : "OnStart:" === v_s_33003 ? v_w_32904 : "OnJudge:" === v_s_33003 ? v_g_32905 : "OnTimer:" === v_s_33003 ? v_m_32906 : "OnFinish:" === v_s_33003 ? v_p_32907 : null) ? v_l_32953(v_e_33000, v_n_33001, v_a_33004, v_r_33002) : v_n_33001 = v_s_33003);
          v_i_32999 = Object.keys(v_a_33004.sf);
          if (0 < v_i_32999.length) {
            let v_t_33007 = v_a_33004.sf[v_lc_28208(v_Hi_27855)];
            v_t_33007 = v_t_33007 || v_a_33004.sf[v_i_32999[0]], v_e_33000.ct = v_t_33007.ct, v_e_33000.if = v_t_33007.if.join("\n");
          }
          return v_e_33000;
        },
        Jc: function (v_i_33008, v_e_33009, v_t_33010, v_n_33011, v_r_33012) {
          let v_s_33013 = [];
          if (v_e_33009 === v_J0_27787) v_s_33013 = v_i_33008.Zm;else if (v_e_33009 === v_j0_27788) v_s_33013 = v_i_33008.qm;else if (v_e_33009 === v_O0_27789) v_s_33013 = v_i_33008.$m;else {
            if (v_e_33009 !== v_V0_27790) return null;
            v_s_33013 = v_i_33008.Qm;
          }
          v_e_33009 === v_J0_27787 && (v_i_33008.Km = v_i_33008.Om);
          let v_a_33014 = !1,
            v_o_33015 = v_t_33010;
          var v_l_33016,
            v_c_33017 = [];
          let v_u_33018 = !1,
            v_f_33019 = !1;
          var v___33020 = (v_i_33008._v < 2 ? v_i1_27825 : v_ke_27824)(100 * v_ge_27821());
          let v_h_33021, v_d_33022;
          for (let v_t_33023 = 0; v_t_33023 < v_s_33013.length; ++v_t_33023) if ((v_l_33016 = v_s_33013[v_t_33023]).cmd === v_x_32913) v_f_33019 = !1;else if (!v_f_33019) switch (v_l_33016.cmd) {
            case v_b_32909:
              v_h_33021 = v_l_33016.prm.val, 1001 === v_l_33016.prm.op ? (v_c_33017.push(v_l_33016.prm.indicator), v_o_33015 += v_h_33021, v_a_33014 = !0) : 1002 === v_l_33016.prm.op && (v_c_33017.push(v_l_33016.prm.indicator), v_o_33015 *= v_h_33021);
              break;
            case v_y_32910:
              v_u_33018 = !0;
              break;
            case v_S_32911:
              v_i_33008.Km = v_pe_27823(v_i_33008.Km + v_l_33016.prm.val, 0);
              break;
            case v_A_32912:
              switch (v_d_33022 = 0, v_l_33016.prm.tvar) {
                case v_T_32915:
                  v_n_33011 ? (v_d_33022 = v_n_33011.note_type, v_n_33011.note_type === v_c0_27703 ? v_n_33011.parent_note_type === v_ce_27678 ? v_d_33022 = 4097 : v_n_33011.parent_note_type === v_le_27675 ? v_d_33022 = 4098 : v_n_33011.parent_note_type !== v_ue_27682 && v_n_33011.parent_note_type !== v_t0_27693 || (v_d_33022 = 4099) : v_n_33011.note_type === v_le_27675 ? v_d_33022 = v_n_33011.parent_note_type === v_An_27660 ? 1281 : 1282 : v_n_33011.note_type === v_ce_27678 && (v_d_33022 = v_n_33011.parent_note_type === v_An_27660 ? 1283 : 1284)) : v_d_33022 = v_An_27660;
                  break;
                case v_I_32916:
                  v_d_33022 = v_i_33008.Km;
                  break;
                case v_P_32917:
                  v_n_33011 ? v_d_33022 = v_n_33011.judge_result : v_d_33022 = v_fe_27716;
                  break;
                case v_R_32918:
                  v_d_33022 = v___33020;
                  break;
                case v_L_32919:
                  v_d_33022 = v_r_33012.gauge;
                  break;
                case v_Q_32937:
                  v_d_33022 = v_i1_27825(v_r_33012.gauge_raw);
                  break;
                case v_M_32920:
                  v_d_33022 = v_r_33012.prog_note;
                  break;
                case v_E_32921:
                  v_d_33022 = v_r_33012.prog_time;
                  break;
                case v_D_32922:
                  v_d_33022 = v_r_33012.result.m;
                  break;
                case v_F_32923:
                  v_d_33022 = v_r_33012.result.a;
                  break;
                case v_B_32924:
                  v_d_33022 = v_r_33012.result.j;
                  break;
                case v_N_32925:
                  v_d_33022 = v_r_33012.result.jc;
                  break;
                case v_G_32926:
                  v_d_33022 = v_r_33012.result.combo;
                  break;
                case v_U_32927:
                  v_d_33022 = v_r_33012.result.combo % v_l_33016.prm.prm;
                  break;
                case v_H_32928:
                  v_d_33022 = v_r_33012.result.max_combo;
                  break;
                case v_J_32929:
                  v_d_33022 = v_r_33012.result.max_combo % v_l_33016.prm.prm;
                  break;
                case v_j_32930:
                  v_d_33022 = v_r_33012.result.score;
                  break;
                case v_O_32931:
                  v_d_33022 = v_ke_27824(v_r_33012.result.fore_score - 975e3);
                  break;
                case v_V_32932:
                  v_d_33022 = v_ke_27824(v_r_33012.result.fore_score - 1e6);
                  break;
                case v_W_32933:
                  v_d_33022 = v_ke_27824(v_r_33012.result.fore_score - 1007500);
                  break;
                case v_X_32934:
                  v_d_33022 = v_e_33009 === v_V0_27790 && v_r_33012.result.aj;
                  break;
                case v_z_32935:
                  v_d_33022 = v_e_33009 === v_V0_27790 && v_r_33012.result.fc;
                  break;
                case v_$_32936:
                  for (let v_t_33024 = v_d_33022 = 0; v_t_33024 < v_l_33016.prm.prm.length; ++v_t_33024) switch (v_l_33016.prm.prm[v_t_33024]) {
                    case v_Tn_27663:
                      v_d_33022 += v_r_33012.result.success.tap;
                      break;
                    case v_In_27664:
                      v_d_33022 += v_r_33012.result.success.extapu;
                      break;
                    case v_Ln_27667:
                      v_d_33022 += v_r_33012.result.success.extapc;
                      break;
                    case v_Mn_27668:
                      v_d_33022 += v_r_33012.result.success.extapd;
                      break;
                    case v_En_27669:
                      v_d_33022 += v_r_33012.result.success.extaprl;
                      break;
                    case v_Dn_27670:
                      v_d_33022 += v_r_33012.result.success.extaprr;
                      break;
                    case v_Fn_27671:
                      v_d_33022 += v_r_33012.result.success.extapsl;
                      break;
                    case v_Bn_27672:
                      v_d_33022 += v_r_33012.result.success.extapsr;
                      break;
                    case v_Nn_27673:
                      v_d_33022 += v_r_33012.result.success.extapio;
                      break;
                    case v_Rn_27666:
                      v_d_33022 += v_r_33012.result.success.damage;
                      break;
                    case v_Pn_27665:
                      v_d_33022 += v_r_33012.result.success.flick;
                      break;
                    case v_ce_27678:
                      v_d_33022 += v_r_33012.result.success.slideb;
                      break;
                    case v_jn_27680:
                      v_d_33022 += v_r_33012.result.success.slides;
                      break;
                    case v_Jn_27679:
                      v_d_33022 += v_r_33012.result.success.slidee;
                      break;
                    case 4097:
                      v_d_33022 += v_r_33012.result.success.slidei;
                      break;
                    case v_le_27675:
                      v_d_33022 += v_r_33012.result.success.holdb;
                      break;
                    case v_Un_27676:
                      v_d_33022 += v_r_33012.result.success.holde;
                      break;
                    case 4098:
                    case 4098:
                      v_d_33022 += v_r_33012.result.success.holdi;
                      break;
                    case v_Kn_27687:
                      v_d_33022 += v_r_33012.result.success.airuc;
                      break;
                    case v_qn_27689:
                      v_d_33022 += v_r_33012.result.success.airul;
                      break;
                    case v_Zn_27690:
                      v_d_33022 += v_r_33012.result.success.airur;
                      break;
                    case v_Yn_27688:
                      v_d_33022 += v_r_33012.result.success.airdc;
                      break;
                    case v_Qn_27692:
                      v_d_33022 += v_r_33012.result.success.airdl;
                      break;
                    case v_$n_27691:
                      v_d_33022 += v_r_33012.result.success.airdr;
                      break;
                    case v_Wn_27684:
                      v_d_33022 += v_r_33012.result.success.airhs;
                      break;
                    case v_Vn_27683:
                      v_d_33022 += v_r_33012.result.success.airhe;
                      break;
                    case v_e0_27695:
                      v_d_33022 += v_r_33012.result.success.airss;
                      break;
                    case v_i0_27694:
                      v_d_33022 += v_r_33012.result.success.airse;
                      break;
                    case v_l0_27701:
                      v_d_33022 += v_r_33012.result.success.airca;
                      break;
                    case 4099:
                      v_d_33022 += v_r_33012.result.success.airhi;
                  }
              }
              switch (v_f_33019 = !0, v_l_33016.prm.op) {
                case v_it_32939:
                  for (let v_t_33025 = 0; v_t_33025 < v_l_33016.prm.vals.length; ++v_t_33025) if (v_d_33022 === v_l_33016.prm.vals[v_t_33025]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                case v_et_32940:
                  for (let v_t_33026 = 0; v_t_33026 < v_l_33016.prm.vals.length; ++v_t_33026) if (v_d_33022 !== v_l_33016.prm.vals[v_t_33026]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                case v_nt_32941:
                  for (let v_t_33027 = 0; v_t_33027 < v_l_33016.prm.vals.length; ++v_t_33027) if (v_d_33022 > v_l_33016.prm.vals[v_t_33027]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                case v_st_32943:
                  for (let v_t_33028 = 0; v_t_33028 < v_l_33016.prm.vals.length; ++v_t_33028) if (v_d_33022 >= v_l_33016.prm.vals[v_t_33028]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                case v_rt_32942:
                  for (let v_t_33029 = 0; v_t_33029 < v_l_33016.prm.vals.length; ++v_t_33029) if (v_d_33022 < v_l_33016.prm.vals[v_t_33029]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                case v_at_32944:
                  for (let v_t_33030 = 0; v_t_33030 < v_l_33016.prm.vals.length; ++v_t_33030) if (v_d_33022 <= v_l_33016.prm.vals[v_t_33030]) {
                    v_f_33019 = !1;
                    break;
                  }
                  break;
                default:
                  v_f_33019 = !1;
              }
          }
          return {
            NP: v_a_33014,
            GP: v_o_33015,
            UP: v_c_33017,
            wr: v_u_33018
          };
        },
        _7: function (v_t_33031) {
          switch (v_t_33031) {
            case v__t_27743:
              return "judgeWindowsHard1";
            case v_ht_27744:
              return "judgeWindowsHard2";
            case v_wt_27747:
              return "judgeWindowsHard3";
            case v_dt_27745:
              return "judgeWindowsHardAir";
            case v_vt_27746:
              return "judgeWindowsHard2Air";
          }
          return "judgeWindows";
        }
      };
    }();