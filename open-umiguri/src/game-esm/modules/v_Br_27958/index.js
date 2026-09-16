// 模块: v_Br_27958
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Br_27958(scope) {
  (v_t_32887 = new scope.v_Fr_27957()).En = ":sys_none", v_t_32887.ct = "";
  let v_e_32886 = v_t_32887;
  var v_t_32887;
  return {
    ef: function (v_i_32888) {
      let v_s_32889 = [],
        v_a_32890;
      scope.v_Le_28076([function (v_r_32891) {
        scope.hostBridge.zu("/skills/", function (v_t_32892) {
          let v_n_32893;
          scope.v_Fe_28101(() => function v_i_32895(v_e_32894) {
            if (0 === v_e_32894.length) return void scope.v_Fe_28101(() => scope.v_Me_28078(v_r_32891));
            v_n_32893 = v_e_32894.pop().name;
            if (!scope.v_Da_28067(v_n_32893, "_0.ucsl")) return void scope.v_Fe_28101(() => v_i_32895(v_e_32894));
            scope.v_$r_27975.Ic("/skills/" + v_n_32893, function (v_t_32896) {
              null !== v_t_32896 && (v_a_32890 = scope.v_Nr_27959.rt(v_t_32896)).Vm !== scope.v_gt_27748 && (v_a_32890.En = v_n_32893.substr(0, v_n_32893.length - 5), v_a_32890.Um = 0 < v_a_32890.Jm.length, v_s_32889.push(v_a_32890)), v_i_32895(v_e_32894);
            });
          }(v_t_32892));
        }, () => {
          scope.v_Me_28078(v_r_32891);
        });
      }, function (v_t_32897) {
        v_s_32889.sort((v_t_32898, v_i_32899) => v_t_32898.En < v_i_32899.En ? -1 : v_t_32898.En > v_i_32899.En ? 1 : 0), v_s_32889.push(v_e_32886), v_s_32889.ak = function (v_i_32900) {
          return this.find(v_t_32901 => v_t_32901.En === v_i_32900);
        }, v_s_32889.ik = function (v_i_32902) {
          return this.findIndex(v_t_32903 => v_t_32903.En === v_i_32902);
        }, v_e_32886.ct = scope.v_Ue_28209("skillNoSkill"), scope.v_Fe_28101(() => v_i_32888(v_s_32889));
      }]);
    },
    rf: function () {
      return v_e_32886;
    }
  };
}
