// 模块: judgeSound
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createJudgeSound(scope) {
  let v_n_31178 = new Map(),
    v_r_31179 = scope.v_f0_27709[0],
    v_s_31180 = !1;
  return {
    Zg: function (v_t_31181) {
      v_s_31180 = v_t_31181;
    },
    jR: function (v_t_31182) {
      v_r_31179 = (v_r_31179 = scope.v_f0_27709[v_t_31182]) || scope.v_f0_27709[0];
    },
    dn: function (v_t_31183) {
      v_n_31178.set(v_t_31183, !0);
    },
    oe: function () {
      let v_e_31184 = "";
      v_n_31178.forEach(function (v_t_31185, v_i_31186) {
        if (v_t_31185 && (v_n_31178.set(v_i_31186, !1), !v_s_31180)) {
          switch (v_i_31186) {
            case v_ci_30291:
              v_e_31184 = "air";
              break;
            case v_ui_30292:
              v_e_31184 = "airdown";
              break;
            case v_fi_30293:
              v_e_31184 = "airaction";
              break;
            case v_Si_30306:
              v_e_31184 = "airhold";
              break;
            case v__i_30294:
              v_e_31184 = "aircrush";
              break;
            case v_V_30295:
              break;
            case v_hi_30296:
              v_e_31184 = "extap";
              break;
            case v_di_30297:
              v_e_31184 = "flick";
              break;
            case v_vi_30298:
              v_e_31184 = "guide";
              break;
            case v_wi_30299:
              v_e_31184 = "attack";
              break;
            case v_gi_30300:
              v_e_31184 = "miss";
              break;
            case v_mi_30301:
              v_e_31184 = "damage";
              break;
            case 11:
              v_e_31184 = "metronome";
              break;
            case v_pi_30302:
              v_e_31184 = "slidestep";
              break;
            case v_ki_30303:
              v_e_31184 = "skilltrigger2";
              break;
            default:
              return;
          }
          v_i_31186 === v_V_30295 ? scope.v_Ae_27892.dn("tap_" + v_r_31179) : scope.v_Ae_27892.dn(v_e_31184);
        }
      }), v_s_31180 = !1;
    },
    Mc: function (v_t_31187, v_i_31188) {
      let v_e_31189 = "";
      switch (v_t_31187) {
        case v_ci_30291:
          v_e_31189 = "air";
          break;
        case v_ui_30292:
          v_e_31189 = "airdown";
          break;
        case v_fi_30293:
          v_e_31189 = "airaction";
          break;
        case v_Si_30306:
          v_e_31189 = "airhold";
          break;
        case v__i_30294:
          v_e_31189 = "aircrush";
          break;
        case v_V_30295:
          break;
        case v_hi_30296:
          v_e_31189 = "extap";
          break;
        case v_di_30297:
          v_e_31189 = "flick";
          break;
        case v_vi_30298:
          v_e_31189 = "guide";
          break;
        case v_wi_30299:
          v_e_31189 = "attack";
          break;
        case v_gi_30300:
          v_e_31189 = "miss";
          break;
        case v_mi_30301:
          v_e_31189 = "damage";
          break;
        case 11:
          v_e_31189 = "metronome";
          break;
        case v_pi_30302:
          v_e_31189 = "slidestep";
          break;
        case v_ki_30303:
          v_e_31189 = "skilltrigger2";
          break;
        default:
          return;
      }
      if (v_t_31187 === v_V_30295) for (const v_n_31190 of scope.v_f0_27709) scope.v_Ae_27892.Mc("tap_" + v_n_31190, v_i_31188);else scope.v_Ae_27892.Mc(v_e_31189, v_i_31188);
    }
  };
}
