// 模块: settingsTables
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createSettingsTables(scope) {
  let v_r_33048 = null,
    v_s_33049 = {
      1001: "user_settings.json",
      1002: "music_records.json",
      1004: "course_records.json",
      1003: "se.json"
    };
  return {
    ue: function (v_i_33050) {
      scope.hostBridge.zu(scope.v_J_27658, function (v_t_33051) {
        v_r_33048 = v_t_33051, scope.v_Fe_28101(() => v_i_33050(!0));
      }, () => scope.v_Fe_28101(() => v_i_33050(!1)));
    },
    _n: function (v_i_33052, v_e_33053) {
      var v_t_33054;
      null !== v_r_33048 && v_s_33049[v_i_33052] && (v_t_33054 = scope.v_J_27658 + v_s_33049[v_i_33052], -1 !== v_r_33048.findIndex(v_t_33055 => v_t_33055.name === v_s_33049[v_i_33052])) ? scope.v_$r_27975.Ic(v_t_33054, function (v_i_33056) {
        if (null === v_i_33056) v_e_33053(null);else {
          let v_t_33057 = null;
          try {
            v_t_33057 = JSON.parse(v_i_33056);
          } catch (v_t_33058) {}
          scope.v_Fe_28101(() => v_e_33053(v_t_33057));
        }
      }) : scope.v_Fe_28101(() => v_e_33053(null));
    },
    mi: function (v_t_33059, v_i_33060, v_e_33061, v_n_33062) {
      null !== v_r_33048 && v_s_33049[v_t_33059] ? (v_t_33059 = scope.v_J_27658 + v_s_33049[v_t_33059], scope.hostBridge.Xu(v_t_33059, v_n_33062 ? JSON.stringify(v_i_33060, null, 2) : JSON.stringify(v_i_33060), "application/json", () => v_e_33061(!0), () => v_e_33061(!1))) : scope.v_Fe_28101(() => v_e_33061(!1));
    }
  };
}
