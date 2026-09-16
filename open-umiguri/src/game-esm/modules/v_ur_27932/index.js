// 模块: v_ur_27932
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_ur_27932(scope) {
  let v_s_31982 = scope.win.getElementById("screenshot_list"),
    v_a_31983 = [];
  function v_o_31984(v_t_31986) {
    var v_i_31987 = v_a_31983.shift();
    URL.revokeObjectURL(v_i_31987.pb), v_t_31986 && clearTimeout(v_i_31987.mb), clearTimeout(v_i_31987.timerPosition), v_i_31987.timerPosition = 0, v_i_31987.mb = 0, v_i_31987.ze.parentElement.removeChild(v_i_31987.ze), v_l_31985();
  }
  function v_l_31985() {
    var v_i_31988 = performance.now();
    for (let v_t_31989 = 0; v_t_31989 < v_a_31983.length; ++v_t_31989) v_a_31983[v_t_31989].fw + 2625 < v_i_31988 || v_a_31983[v_t_31989].fw + 500 > v_i_31988 || (v_a_31983[v_t_31989].ze.style.transform = "translateX(" + 20 * v_t_31989 + "px)");
  }
  return {
    bb: async function () {
      let v_e_31990 = await (!!scope.v_qi_27868 || (await new Promise(v_t_31995 => {
        scope.v_qi_27868 = v_t_31995;
      })) || null);
      var v_t_31991, v_i_31992, v_n_31993, v_r_31994;
      null === v_e_31990 ? scope.v_x1_27888("Failed to capture screenshot") : !0 !== v_e_31990 && (v_t_31991 = await new Promise(v_t_31996 => {
        let v_i_31997 = new FileReader();
        v_i_31997.onload = () => v_t_31996(v_i_31997.result), v_i_31997.onerror = () => v_t_31996(null), v_i_31997.readAsArrayBuffer(v_e_31990);
      })) && (scope.v_x1_27888("Screenshot saved: " + (await scope.systemMisc.kb(new Uint8Array(v_t_31991)))), v_t_31991 = v_e_31990, 3 <= v_a_31983.length && v_o_31984(!0), v_t_31991 = URL.createObjectURL(v_t_31991), (v_i_31992 = scope.win.createElement("div")).classList.add("screenshot-item-parent"), (v_n_31993 = scope.win.createElement("div")).setAttribute("data-index", v_a_31983.length), v_n_31993.classList.add("screenshot-item"), v_n_31993.style.backgroundImage = "url(" + v_t_31991 + ")", v_s_31982.appendChild(v_i_31992), v_i_31992.appendChild(v_n_31993), v_n_31993 = scope.v_uo_28102(v_l_31985, 500), v_r_31994 = scope.v_uo_28102(v_o_31984, 3e3), v_a_31983.push({
        pb: v_t_31991,
        ze: v_i_31992,
        mb: v_r_31994,
        xb: v_n_31993,
        fw: performance.now()
      }), v_l_31985(), scope.v_Ae_27892.dn("screenshot"));
    }
  };
}
