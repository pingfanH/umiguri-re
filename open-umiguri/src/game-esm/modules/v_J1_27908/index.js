// 模块: v_J1_27908
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_J1_27908(scope) {
  let v_n_28912 = void 0;
  return {
    ue: function (v_e_28913) {
      scope.v_Le_28076([v_i_28914 => {
        scope.languagePackages.it("ui/filter.rsb", function (v_t_28915) {
          v_t_28915 ? (v_t_28915 = new scope.v_Dl_28181(v_t_28915), (v_n_28912 = v_t_28915.rt(scope.renderer.p5())).Jt = !1, scope.renderer.ut("_filter", v_n_28912, 1e7, v_t_28916 => {
            scope.v_Me_28078(v_i_28914);
          })) : v_e_28913();
        });
      }, v_t_28917 => {
        v_e_28913();
      }]);
    }
  };
}
