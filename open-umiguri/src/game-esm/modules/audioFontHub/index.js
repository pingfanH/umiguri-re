// 模块: audioFontHub
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createAudioFontHub(scope) {
  function v_e_29223(v_t_29236, v_i_29237, v_e_29238, v_n_29239) {
    this.tL = v_t_29236, this.nx = v_i_29237, this.iL = v_e_29238, this.Wt = v_n_29239, this.hL = null;
  }
  function v_t_29224() {
    this.Gi = !1, this.eL = !1, this.nL = !1, this.rL = !1, this.sL = 0, this.aL = 0, this.dL = 0, this.oL = [];
  }
  let v_c_29225 = void 0,
    v_o_29226 = new v_t_29224(),
    v_n_29227 = scope.doc.createElement("input");
  function v_r_29228(v_t_29240) {
    v_c_29225 && (v_c_29225.rsbTree.elementByIndex(17).visible = !v_n_29227.value.length);
  }
  async function v_i_29229(v_t_29241) {
    v_o_29226.Gi && "f3" === v_t_29241 && (await scope.renderer.C7(scope.v_Ge_28204(1)), v_u_29233(!v_o_29226.eL));
  }
  function v_s_29230(v_t_29242) {
    var v_i_29243;
    80 <= v_o_29226.oL.length && (v_i_29243 = v_o_29226.oL.shift()).hL && v_c_29225.rsbTree.elementByIndex(11).Ke(v_i_29243.hL), v_t_29242.hL = function (v_t_29244) {
      var v_i_29245 = v_c_29225.rsbTree.elementByIndex(11),
        v_e_29246 = v_c_29225.rsbTree.elementByIndex(24),
        v_n_29247 = v_c_29225.rsbTree.elementByIndex(33),
        v_r_29248 = v_c_29225.rsbTree.elementByIndex(32),
        v_s_29249 = v_c_29225.Td[v_r_29248.jd];
      if (scope.renderer.Yt.Dh.B3(), !v_s_29249) return null;
      scope.renderer.Yt.Dh.P3(600), scope.renderer.Yt.Dh.D3(600), scope.renderer.Yt.Dh.N3(v_r_29248.w_), scope.renderer.Yt.Dh.H3(v_r_29248.F_), scope.renderer.Yt.Dh.U3(v_r_29248.B_, v_r_29248.M_);
      var v_a_29250 = v_t_29244.nx === scope.v_oe_27649.sx(),
        v_n_29247 = (v_a_29250 ? v_n_29247 : v_e_29246).Ve(!0),
        v_e_29246 = v_n_29247.elementByName("chatItemBody"),
        v_o_29251 = v_n_29247.elementByName("chatItemBodyBg"),
        v_l_29252 = v_n_29247.elementByName("chatItemBodyText");
      v_n_29247.elementByName("chatItemInfo").Wt = v_a_29250 ? scope.v_sc_28205(v_t_29244.iL) + " - " + v_f_29234(v_t_29244.nx) : v_f_29234(v_t_29244.nx) + " - " + scope.v_sc_28205(v_t_29244.iL);
      v_n_29247.elementByName("chatItemIcon").zt = !0, v_n_29247.elementByName("chatItemIcon").Xt = function (v_t_29253) {
        if (v_t_29253 === scope.v_oe_27649.sx()) return (v_i_29254 = scope.v_Lr_27953()) ? "chara:" + v_i_29254.dC + ":0:" + v_i_29254.Q1.C0 : "";
        var v_i_29254 = scope.v_oe_27649.ix.get(v_t_29253);
        return v_i_29254 ? v_i_29254.ux : "";
      }(v_t_29244.nx), v_s_29249.X3(v_t_29244.Wt, v_r_29248.Vd, v_r_29248.Od, v_r_29248.Tn), v_s_29249.Z3(), v_l_29252.Wt = v_t_29244.Wt, v_l_29252.w = scope.mathCeil(v_s_29249.z_), v_l_29252.h = scope.mathCeil(v_s_29249.Z_), v_o_29251.w = v_l_29252.w + 30, v_o_29251.h = v_l_29252.h + 36, v_a_29250 && (v_e_29246.x = 816 - v_o_29251.w);
      return v_n_29247.h = v_o_29251.h + 28, v_n_29247.x = 20, v_n_29247.y = v_i_29245.h, v_i_29245.Ze(v_n_29247), v_n_29247.$e(0, 0), v_n_29247;
    }(v_t_29242), v_o_29226.oL.push(v_t_29242), v_o_29226.dL = 0, v_o_29226.rL = !v_o_29226.Gi, v_o_29226.Gi && (v_o_29226.eL ? (v_o_29226.sL = v_t_29242.tL, v_a_29232()) : v_l_29231(!0));
  }
  function v_l_29231(v_t_29255) {
    if (v_c_29225.rsbTree.elementByIndex(19).visible = v_t_29255) {
      clearTimeout(v_o_29226.aL), v_o_29226.aL = scope.v_uo_28102(() => {
        v_l_29231(!1);
      }, 4e3);
      let v_i_29258 = v_o_29226.oL.length,
        v_e_29259 = 0;
      for (let v_t_29262 = v_o_29226.oL.length - 1; 0 <= v_t_29262 && (v_o_29226.oL[v_t_29262].tL <= v_o_29226.sL || v_o_29226.oL[v_t_29262].nx === scope.v_oe_27649.sx() || (v_i_29258 = v_t_29262, !(5 <= ++v_e_29259))); --v_t_29262);
      0 === v_e_29259 && v_l_29231(!1);
      let v_n_29260 = "",
        v_r_29261 = !0;
      for (let v_t_29263 = v_i_29258; v_t_29263 < v_o_29226.oL.length; ++v_t_29263) {
        var v_s_29256 = v_o_29226.oL[v_t_29263];
        v_s_29256.tL <= v_o_29226.sL || v_s_29256.nx === scope.v_oe_27649.sx() || (v_r_29261 || (v_n_29260 += "\n"), v_n_29260 += `<#c:777>[${v_f_29234(v_s_29256.nx)}]<#r> ` + v_s_29256.Wt, v_r_29261 = !1);
      }
      var v_t_29255 = v_c_29225.rsbTree.elementByIndex(22),
        v_a_29257 = (v_t_29255.Tn || (v_t_29255.Tn = new scope.v_Bo_28128()), v_t_29255.Wt = v_t_29255.Tn.An(v_n_29260), 23 * v_e_29259 + 20);
      v_t_29255.h = v_a_29257 - 20, v_c_29225.rsbTree.elementByIndex(20).h = v_a_29257, v_c_29225.rsbTree.elementByIndex(21).h = v_a_29257, v_c_29225.rsbTree.elementByIndex(19).h = v_a_29257, v_c_29225.rsbTree.elementByIndex(19).y = 1010 - v_a_29257;
    } else clearTimeout(v_o_29226.aL), v_o_29226.aL = 0;
  }
  function v_a_29232() {
    let v_i_29264 = 0;
    var v_e_29265 = v_c_29225.rsbTree.elementByIndex(11);
    for (let v_t_29271 = v_o_29226.oL.length - 1; 0 <= v_t_29271; --v_t_29271) {
      var v_n_29266 = v_o_29226.oL[v_t_29271];
      v_i_29264 += v_n_29266.hL.h - 8;
    }
    var v_t_29267 = v_i_29264 - v_e_29265.h + 20;
    v_o_29226.dL < 0 || v_e_29265.h >= v_i_29264 ? v_o_29226.dL = 0 : v_e_29265.h < v_i_29264 && v_o_29226.dL >= v_t_29267 && (v_o_29226.dL = v_t_29267);
    let v_r_29268 = v_o_29226.dL;
    for (let v_t_29272 = v_o_29226.oL.length - 1; 0 <= v_t_29272; --v_t_29272) {
      var v_s_29269 = v_o_29226.oL[v_t_29272];
      v_s_29269.hL.We[0].visible = v_r_29268 > -v_e_29265.h - 100 && v_r_29268 <= v_s_29269.hL.h + 100, v_s_29269.hL.$e(0, v_r_29268 - v_s_29269.hL.h), v_r_29268 -= v_s_29269.hL.h - 8;
    }
    var v_a_29270 = v_c_29225.rsbTree.elementByIndex(13);
    v_a_29270.$e(0, 460 * (1 - v_o_29226.dL / v_t_29267) * (1 - v_e_29265.h / v_i_29264)), v_a_29270.ln(1, v_e_29265.h / v_i_29264), v_a_29270.visible = v_e_29265.h < v_i_29264;
  }
  function v_u_29233(v_t_29273, v_i_29274) {
    var v_e_29275;
    (v_o_29226.Gi && v_o_29226.eL !== v_t_29273 || v_i_29274) && (v_o_29226.eL !== v_t_29273 && v_c_29225.e8(v_t_29273 ? 1 : 0), v_o_29226.eL = v_t_29273, v_c_29225.rsbTree.elementByIndex(3).visible = !0, scope.menuSystem.Ct(v_t_29273), v_i_29274 = v_c_29225.rsbTree.elementByIndex(3).x, v_e_29275 = v_c_29225.rsbTree.elementByIndex(3).y, v_i_29274 += v_c_29225.rsbTree.elementByIndex(6).x, v_e_29275 += v_c_29225.rsbTree.elementByIndex(6).y, v_i_29274 += v_c_29225.rsbTree.elementByIndex(15).x, v_e_29275 += v_c_29225.rsbTree.elementByIndex(15).y, v_n_29227.tabIndex = -1, v_n_29227.style.width = v_c_29225.rsbTree.elementByIndex(15).w + "px", v_n_29227.style.height = "48px", v_n_29227.style.display = v_t_29273 ? "block" : "none", v_n_29227.style.position = "absolute", v_n_29227.style.border = "none", v_n_29227.style.outline = "none", v_n_29227.style.background = "transparent", v_n_29227.style.font = "500 24px system-ui", v_n_29227.style.padding = "0 20px", v_n_29227.style.zIndex = "1000", v_n_29227.style.left = v_i_29274 + "px", v_n_29227.style.top = v_e_29275 + "px", v_t_29273 ? (v_a_29232(), v_l_29231(!1), v_r_29228(), scope.v_y_27559.appendChild(v_n_29227), v_n_29227.focus(), v_o_29226.rL = !1, v_o_29226.oL.length && (v_o_29226.sL = v_o_29226.oL[v_o_29226.oL.length - 1].tL), scope.sceneManager.ft(new scope.v_M1_27898(() => {
      v_u_29233(!1, !0);
    }, void 0))) : (v_n_29227.blur(), scope.v_y_27559.removeChild(v_n_29227), scope.sceneManager._t()));
  }
  function v_f_29234(v_t_29276) {
    return v_t_29276 === scope.v_oe_27649.sx() ? scope.handshake.rm.om : (v_t_29276 = scope.v_oe_27649.ix.get(v_t_29276)) ? v_t_29276.om : "null";
  }
  async function v___29235(v_t_29277) {
    v_t_29277 = v_t_29277.trim();
    if (!v_t_29277.length) return !1;
    v_n_29227.disabled = !0;
    v_t_29277 = await scope.v_oe_27649.lL(v_t_29277.substring(0, 500));
    return v_n_29227.disabled = !1, v_n_29227.focus(), v_t_29277 === scope.v_Ms_28009 && (v_n_29227.value = "", v_r_29228(), !0);
  }
  return v_n_29227.addEventListener("keydown", function (v_i_29278) {
    if (v_o_29226.eL) {
      let v_t_29279 = !1;
      "Enter" === v_i_29278.key ? (v___29235(v_n_29227.value), v_t_29279 = !0) : "ArrowUp" === v_i_29278.key ? (v_o_29226.dL += 40, v_a_29232(), v_t_29279 = !0) : "ArrowDown" === v_i_29278.key && (v_o_29226.dL -= 40, v_a_29232(), v_t_29279 = !0), v_t_29279 && v_i_29278.preventDefault();
    }
  }), v_n_29227.addEventListener("input", v_r_29228), {
    ue: function (v_e_29280) {
      scope.v_Le_28076([v_i_29281 => {
        scope.languagePackages.it("ui/textChat.rsb", function (v_t_29282) {
          v_t_29282 ? (v_t_29282 = new scope.v_Dl_28181(v_t_29282), scope.renderer.nt(v_t_29282.rt(scope.renderer.p5()), v_t_29283 => {
            (v_c_29225 = v_t_29283).Jt = !1, scope.v_Me_28078(v_i_29281);
          })) : v_e_29280();
        });
      }, v_t_29284 => {
        scope.renderer.ut("sysTextChat", v_c_29225, 5010, () => {
          scope.v_Fe_28101(v_e_29280);
        });
      }, v_t_29285 => {
        scope.v_Fe_28101(v_e_29280);
      }]);
    },
    T0: function () {
      v_o_29226.Gi || (v_o_29226.Gi = !0, v_c_29225.Jt = !0, v_c_29225.rsbTree.elementByIndex(3).visible = !1, v_l_29231(v_o_29226.rL), v_o_29226.rL = !1, scope.inputModule.$I("textChat", v_i_29229));
    },
    XS: function () {
      v_o_29226.Gi && (v_u_29233(!1), v_l_29231(!1), v_c_29225.rsbTree.elementByIndex(3).visible = !1, v_o_29226.Gi = !1, v_c_29225.Jt = !1, scope.inputModule.ZI("textChat"));
    },
    B3: function () {
      v_c_29225.rsbTree.elementByIndex(11).tn(), v_o_29226 = new v_t_29224();
    },
    cL: function (v_t_29286, v_i_29287) {
      v_t_29286 === scope.v_ea_28033 && v_s_29230(new v_e_29223(v_i_29287.tL, v_i_29287.nx, v_i_29287.iL, v_i_29287.MI));
    },
    uL: v_u_29233,
    lL: v___29235
  };
}
