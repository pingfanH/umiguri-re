// 模块: menuSystem
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createMenuSystem(scope) {
  const v_f_28415 = 1280,
    v_l_28416 = 250;
  function v___28417() {
    this.Ae = "", this.x = 0, this.w = 0, this.Ee = void 0, this.Fe = scope.v_W0_27791, this.visible = !0, this.Me = !1, this.Re = !1, this.Pe = !1, this.De = "", this.Ge = void 0, this.tv = 0, this.je = !1, this.Ne = 0, this.He = 0, this.Ue = 0;
  }
  let v_h_28418 = [],
    v_e_28419 = [],
    v_d_28420 = void 0,
    v_v_28421 = void 0,
    v_c_28422 = void 0,
    v_w_28423 = {},
    v_u_28424 = 0,
    v_g_28425 = 0,
    v_m_28426 = !1,
    v_p_28427 = !1,
    v_k_28428 = 0;
  function v_i_28429() {}
  function v_b_28430(v_t_28433, v_i_28434, v_e_28435) {
    var v_n_28436;
    "down" === v_i_28434 && (0 !== v_t_28433.w && ((v_n_28436 = v_d_28420.NA(47, 1, 320 + v_t_28433.x / 16 * v_f_28415 + 2, 1080)).GA.Oe[0] = (v_t_28433.w / 16 * v_f_28415 - 4) / 320, v_n_28436.GA.We[0].Je = "bg" + v_t_28433.Fe), v_t_28433.Ee) && v_t_28433.Ee.call(v_t_28433, v_i_28434, v_e_28435);
  }
  function v_y_28431(v_t_28437, v_i_28438) {
    var v_e_28439, v_n_28440;
    0 !== v_t_28437.w ? (v_e_28439 = v_i_28438 || !v_t_28437.visible, v_n_28440 = v_t_28437.Me, v_t_28437.Ge.$e(void 0, v_e_28439 ? 200 : 0), v_t_28437.Pe || (v_n_28440 ? (v_t_28437.Ge.We[0].Nn = 1, v_t_28437.Ge.We[0].Qe(.25, .25, .25, 1), v_t_28437.Ge.We[1].qe = 1e-4, v_t_28437.Ge.We[2].Qe(.25, .25, .25, 1)) : (v_t_28437.Ge.We[0].Nn = 0, v_t_28437.Ge.We[0].Qe(1, 1, 1, 1), v_t_28437.Ge.We[0].Je = "bg" + v_t_28437.Fe, v_t_28437.Ge.We[1].qe = 1, v_t_28437.Ge.We[2].Qe(1, 1, 1, 1)))) : 0 === v_t_28437.w && (v_e_28439 = v_i_28438 || !v_t_28437.visible, v_n_28440 = v_t_28437.Me, v_t_28437.Ge.visible = !v_e_28439, v_t_28437.Ge.Qe(1, 1, 1, v_n_28440 ? .375 : 1), v_p_28427 = !0);
  }
  function v_t_28432(v_t_28441, v_i_28442, v_e_28443) {
    if (!(v_t_28441 < v_k_28428) && 110 <= v_t_28441 - v_g_28425) {
      var v_s_28444 = v_u_28424 <= 0 && !scope.sceneManager.et() && !scope.testMenu.Gi();
      let v_i_28449 = scope.inputModule.oR(),
        v_e_28450 = scope.inputModule.aR(),
        v_n_28451 = !1;
      var v_a_28445 = scope.inputModule.vR();
      let v_r_28452;
      for (v_r_28452 of v_h_28418) if (v_r_28452.Me || !v_r_28452.visible || v_r_28452.Pe) v_r_28452.je = !1;else {
        if (v_n_28451 = !1, v_r_28452.je) {
          if (0 !== v_r_28452.w) for (let v_t_28453 = 0; v_t_28453 < 32; v_t_28453++) if (v_r_28452.x <= scope.mathFloor(v_t_28453 / 2) && v_r_28452.x + v_r_28452.w > scope.mathFloor(v_t_28453 / 2) && v_i_28449[v_t_28453]) {
            v_n_28451 = !0;
            break;
          }
          if (!v_n_28451 && void 0 !== v_r_28452.De) for (let v_t_28454 = 0; v_t_28454 < v_a_28445.length; ++v_t_28454) if (v_a_28445[v_t_28454].Ae === v_r_28452.De && 2 & v_a_28445[v_t_28454].lu) {
            v_n_28451 = !0;
            break;
          }
        } else {
          if (0 !== v_r_28452.w) for (let v_t_28455 = 0; v_t_28455 < 32; v_t_28455++) if (v_r_28452.x <= scope.mathFloor(v_t_28455 / 2) && v_r_28452.x + v_r_28452.w > scope.mathFloor(v_t_28455 / 2) && v_e_28450[v_t_28455]) {
            v_n_28451 = !0;
            break;
          }
          if (!v_n_28451 && void 0 !== v_r_28452.De) for (let v_t_28456 = 0; v_t_28456 < v_a_28445.length; ++v_t_28456) if (v_a_28445[v_t_28456].Ae === v_r_28452.De && 2 == v_a_28445[v_t_28456].lu) {
            v_n_28451 = !0;
            break;
          }
        }
        if (v_s_28444) {
          if (v_n_28451) {
            if (!v_r_28452.je) {
              v_r_28452.tv = 1, v_g_28425 = v_t_28441, v_r_28452.Ne = v_t_28441, v_r_28452.He = null, v_r_28452.je = v_n_28451, v_t_28441 - v_r_28452.Ue >= v_l_28416 && (v_r_28452.Ue = v_t_28441);
              break;
            }
            v_r_28452.Re && (null === v_r_28452.He && 800 <= v_t_28441 - v_r_28452.Ne || null !== v_r_28452.He && 100 <= v_t_28441 - v_r_28452.He && 1600 <= v_t_28441 - v_r_28452.Ne || null !== v_r_28452.He && 200 <= v_t_28441 - v_r_28452.He && v_t_28441 - v_r_28452.Ne < 1600) && (v_r_28452.tv = v_t_28441 - v_r_28452.Ne < 1600 ? 2 : 3, (v_r_28452.He = v_t_28441) - v_r_28452.Ue >= v_l_28416) && (v_r_28452.Ue = v_t_28441);
          }
          v_r_28452.je = v_n_28451;
        } else v_n_28451 = !1;
      }
      for (v_r_28452 of v_h_28418) v_r_28452.Me || !v_r_28452.visible || v_r_28452.Pe || v_r_28452.tv && (v_b_28430(v_r_28452, "down", v_r_28452.tv - 1), v_r_28452.tv = 0);
      if (v_p_28427) {
        v_p_28427 = !1;
        let v_t_28457,
          v_i_28458 = 0,
          v_e_28459 = 0;
        for (v_t_28457 of v_h_28418) 0 === v_t_28457.w && v_t_28457.Ge.visible && (v_e_28459 += 30);
        for (v_t_28457 of v_h_28418) 0 === v_t_28457.w && v_t_28457.Ge.visible && (v_t_28457.Ge.y = 136 - v_e_28459 + v_i_28458, v_i_28458 += 30);
      }
    }
    var v_n_28446,
      v_r_28447,
      v_o_28448 = v_t_28441;
    if (0 !== v_h_28418.length) {
      if (v_m_28426) {
        let v_i_28461;
        for (v_i_28461 of v_h_28418) {
          if (0 === v_i_28461.w) return;
          if (!v_i_28461.visible || v_i_28461.Pe) {
            for (let v_t_28462 = v_i_28461.x; v_t_28462 < v_i_28461.x + v_i_28461.w; ++v_t_28462) scope.ledOutput.Qe(scope.v_z0_27799, v_t_28462, [0, 0, 0]);
            for (let v_t_28463 = v_i_28461.x; v_t_28463 < v_i_28461.x + v_i_28461.w - 1; ++v_t_28463) scope.ledOutput.Qe(scope.v_K0_27800, v_t_28463, [0, 0, 0]);
          }
        }
      } else for (let v_t_28464 = 0; v_t_28464 < 16; ++v_t_28464) scope.ledOutput.Qe(scope.v_z0_27799, v_t_28464, [0, 0, 0]), v_t_28464 < 15 && scope.ledOutput.Qe(scope.v_K0_27800, v_t_28464, [0, 0, 0]);
      let v_i_28460;
      for (v_i_28460 of v_h_28418) if (v_i_28460.visible && !v_i_28460.Pe && 0 !== v_i_28460.w) {
        v_n_28446 = [scope.v_ct_27798[v_i_28460.Fe][0], scope.v_ct_27798[v_i_28460.Fe][1], scope.v_ct_27798[v_i_28460.Fe][2]], v_i_28460.Me ? (v_n_28446[0] *= .125, v_n_28446[1] *= .125, v_n_28446[2] *= .125) : 0 < (v_r_28447 = v_o_28448 - v_i_28460.Ue) && v_r_28447 < v_l_28416 && (v_r_28447 = scope.v_Yl_28194(v_r_28447 / v_l_28416), v_n_28446[0] *= v_r_28447, v_n_28446[1] *= v_r_28447, v_n_28446[2] *= v_r_28447);
        for (let v_t_28465 = v_i_28460.x; v_t_28465 < v_i_28460.x + v_i_28460.w; ++v_t_28465) scope.ledOutput.Qe(scope.v_z0_27799, v_t_28465, v_n_28446);
        for (let v_t_28466 = v_i_28460.x; v_t_28466 < v_i_28460.x + v_i_28460.w - 1; ++v_t_28466) scope.ledOutput.Qe(scope.v_K0_27800, v_t_28466, v_n_28446);
      }
    }
  }
  return {
    ue: function (v_i_28467) {
      v_h_28418 = [], v_e_28419 = [], scope.v_Le_28076([v_e_28468 => {
        scope.languagePackages.it("ui/keyGuide.rsb", function (v_t_28469) {
          v_t_28469 ? (v_t_28469 = new scope.v_Dl_28181(v_t_28469), scope.renderer.nt(v_t_28469.rt(scope.renderer.p5()), v_t_28470 => {
            v_d_28420 = v_t_28470, v_v_28421 = v_t_28470.rsbTree.elementByIndex(0), v_c_28422 = v_t_28470.rsbTree.elementByIndex(1);
            var v_i_28471 = v_t_28470.rsbTree.elementByIndex(2);
            for (let v_t_28472 = 0; v_t_28472 < v_i_28471.We.length; ++v_t_28472) v_i_28471.We[v_t_28472].visible = !1, v_w_28423[v_i_28471.We[v_t_28472].ct] = v_i_28471.We[v_t_28472];
            scope.v_Me_28078(v_e_28468);
          })) : v_i_28467();
        });
      }, v_i_28473 => {
        scope.renderer.ut("sysKeyGuideLoop", new scope.v_Tl_28174(v_t_28432), 5e3, v_t_28474 => {
          scope.v_Me_28078(v_i_28473);
        });
      }, v_t_28475 => {
        scope.renderer.ut("sysKeyGuide", v_d_28420, 5001, () => {
          scope.v_Fe_28101(v_i_28467);
        });
      }]);
    },
    ft: function () {
      let v_t_28476;
      for (v_t_28476 of v_h_28418) v_y_28431(v_t_28476, !0);
      v_e_28419.push(v_h_28418), v_h_28418 = [];
    },
    _t: function () {
      this.dt();
      let v_t_28477;
      for (v_t_28477 of v_h_28418 = v_e_28419.pop()) v_y_28431(v_t_28477);
    },
    ht: function (v_t_28478, v_i_28479, v_e_28480, v_n_28481, v_r_28482, v_s_28483, v_a_28484, v_o_28485) {
      this.vt(v_t_28478, v_i_28479, v_e_28480, v_n_28481, v_r_28482, v_s_28483, !0, !1, v_a_28484, v_o_28485);
    },
    vt: function (v_t_28486, v_i_28487, v_e_28488, v_n_28489, v_r_28490, v_s_28491, v_a_28492, v_o_28493, v_l_28494, v_c_28495) {
      var v_u_28496;
      0 === v_n_28489 ? this.V6(v_t_28486, v_i_28487, v_s_28491, v_a_28492, v_o_28493, v_l_28494, v_c_28495) : ((v_u_28496 = new v___28417()).Ae = v_t_28486, v_u_28496.x = v_e_28488, v_u_28496.w = v_n_28489, v_u_28496.Ee = v_c_28495, v_u_28496.Fe = v_r_28490, v_u_28496.Re = v_s_28491, v_u_28496.visible = v_a_28492, v_u_28496.Me = v_o_28493, v_u_28496.De = v_l_28494, v_u_28496.Pe = "dummy" === v_i_28487, v_u_28496.Ge = v_w_28423.tab.Ve(!0), v_u_28496.Pe ? (v_u_28496.Ge.x = v_e_28488 / 16 * v_f_28415, v_u_28496.Ge.We[0].x = -1, v_u_28496.Ge.We[0].w = v_n_28489 / 16 * v_f_28415 + 2, v_u_28496.Ge.We[0].Je = "bgWhite", v_u_28496.Ge.We[0].Qe(.5, .5, .5), v_u_28496.Ge.We[0].qe = .5, v_u_28496.Ge.We[1].visible = !1, v_u_28496.Ge.We[2].visible = !1) : (v_t_28486 = v_n_28489 / 16 * v_f_28415 - 4, v_c_28495 = "TouchSlider" === v_i_28487 ? 640 : 320, v_u_28496.Ge.x = v_e_28488 / 16 * v_f_28415 + 2, v_u_28496.Ge.We[0].w = v_t_28486, v_u_28496.Ge.We[0].Je = "bg" + v_r_28490, v_u_28496.Ge.We[1].w = v_t_28486, v_u_28496.Ge.We[1].gt[2] = v_t_28486 / 80 * .75, v_u_28496.Ge.We[2].x = v_t_28486 / 2 - v_c_28495 / 2, v_u_28496.Ge.We[2].Je = "msg" + v_i_28487), v_u_28496.Ge.visible = !0, v_u_28496.Pe ? v_v_28421.hn(v_u_28496.Ge, v_v_28421.We[0]) : v_v_28421.Ze(v_u_28496.Ge), v_u_28496.Pe || v_d_28420.e8(0, v_u_28496.Ge), v_y_28431(v_u_28496), v_h_28418.push(v_u_28496));
    },
    aI: function (v_t_28497, v_i_28498, v_e_28499, v_n_28500, v_r_28501, v_s_28502) {
      var v_a_28503,
        v_i_28498 = scope.v_Wr_27968.oI(v_i_28498);
      v_i_28498 && ((v_a_28503 = new v___28417()).Ae = v_t_28497, v_a_28503.x = v_e_28499, v_a_28503.w = 2, v_a_28503.Ee = v_s_28502, v_a_28503.Fe = scope.v_li_27796, v_a_28503.Re = !1, v_a_28503.visible = v_n_28500, v_a_28503.Me = v_r_28501, v_a_28503.Ge = v_w_28423["tabChat" + v_i_28498.lI].Ve(!0), v_t_28497 = .125 * v_f_28415 - 4, v_a_28503.Ge.x = v_e_28499 / 16 * v_f_28415 + 2, v_a_28503.Ge.We[0].w = v_t_28497, v_a_28503.Ge.We[1].w = v_t_28497, v_a_28503.Ge.We[1].gt[2] = v_t_28497 / 80 * .75, scope.v_sl_28151(v_a_28503.Ge, v_i_28498), v_a_28503.Ge.visible = !0, v_v_28421.Ze(v_a_28503.Ge), v_d_28420.e8(0, v_a_28503.Ge), v_y_28431(v_a_28503), v_h_28418.push(v_a_28503));
    },
    V6: function (v_t_28504, v_i_28505, v_e_28506, v_n_28507, v_r_28508, v_s_28509, v_a_28510) {
      var v_o_28511 = new v___28417();
      v_o_28511.Ae = v_t_28504, v_o_28511.x = 0, v_o_28511.w = 0, v_o_28511.Ee = v_a_28510, v_o_28511.Re = v_e_28506, v_o_28511.visible = v_n_28507, v_o_28511.Me = v_r_28508, v_o_28511.De = v_s_28509, v_o_28511.Ge = v_w_28423.key.Ve(!0), v_o_28511.Ge.We[0].Je = "keyF" + v_s_28509.substr(1), v_o_28511.Ge.We[1].Je = "text" + v_i_28505, v_c_28422.Ze(v_o_28511.Ge), v_y_28431(v_o_28511), v_h_28418.push(v_o_28511);
    },
    yv: function () {
      for (const v_t_28512 of [["dummy0003", "dummy", 0, 3], ["dummy0303", "dummy", 3, 3], ["dummy0604", "dummy", 6, 4], ["dummy1002", "dummy", 10, 2], ["dummy1202", "dummy", 12, 2], ["dummy1402", "dummy", 14, 2]]) this.vt(v_t_28512[0], v_t_28512[1], v_t_28512[2], v_t_28512[3], "", !1, !1, !1, "", v_i_28429);
    },
    dt: function () {
      let v_t_28513;
      for (v_t_28513 of v_h_28418) (0 === v_t_28513.w ? v_c_28422 : v_v_28421).Ke(v_t_28513.Ge);
      v_h_28418 = [];
    },
    wt: function (v_i_28514, v_t_28515) {
      var v_e_28516 = v_h_28418.find(v_t_28517 => v_t_28517.Ae === v_i_28514);
      if (v_e_28516) {
        if (void 0 === v_t_28515) return v_e_28516.visible;
        v_e_28516.visible = !!v_t_28515, v_y_28431(v_e_28516), !v_e_28516.Me && v_e_28516.visible || (v_e_28516.je = !1, v_e_28516.Ne = 0, v_e_28516.Ue = 0, v_e_28516.He = null);
      }
    },
    kt: function (v_i_28518, v_t_28519) {
      var v_e_28520 = v_h_28418.find(v_t_28521 => v_t_28521.Ae === v_i_28518);
      if (v_e_28520) {
        if (void 0 === v_t_28519) return v_e_28520.Me;
        v_e_28520.Me = !!v_t_28519, v_y_28431(v_e_28520), !v_e_28520.Me && v_e_28520.visible || (v_e_28520.je = !1, v_e_28520.Ne = 0, v_e_28520.Ue = 0, v_e_28520.He = null);
      }
    },
    Cv: function (v_t_28522) {
      scope.menuSystem.wt("dummy0003", v_t_28522), scope.menuSystem.wt("dummy0303", v_t_28522), scope.menuSystem.wt("dummy0604", v_t_28522), scope.menuSystem.wt("dummy1002", v_t_28522), scope.menuSystem.wt("dummy1202", v_t_28522), scope.menuSystem.wt("dummy1402", v_t_28522);
    },
    bt: function (v_i_28523, v_t_28524) {
      var v_e_28525 = v_h_28418.find(v_t_28526 => v_t_28526.Ae === v_i_28523);
      v_e_28525 && (v_e_28525.Ee = v_t_28524);
    },
    St: function (v_e_28527) {
      scope.raf(function () {
        var v_t_28528,
          v_i_28529 = v_h_28418.find(v_t_28530 => v_t_28530.Ae === v_e_28527);
        !v_i_28529 || v_i_28529.Me || !v_i_28529.visible || v_i_28529.Pe || 0 < v_u_28424 || (v_t_28528 = scope.renderer.xt(), v_b_28430(v_i_28529, "down", 0), v_g_28425 = v_t_28528, v_i_28529.Ne = v_t_28528, v_i_28529.He = null, v_i_28529.je = !0, (0 === v_i_28529.Ue || v_t_28528 - v_i_28529.Ue >= v_l_28416) && (v_i_28529.Ue = v_t_28528));
      });
    },
    It: function (v_t_28531) {
      let v_i_28532;
      for (v_i_28532 of v_h_28418) v_i_28532.visible = !!v_t_28531, v_y_28431(v_i_28532);
    },
    yt: function (v_t_28533) {
      let v_i_28534;
      for (v_i_28534 of v_h_28418) v_i_28534.Me = !!v_t_28533, v_y_28431(v_i_28534);
    },
    T9: function (v_t_28535) {
      v_k_28428 = v_t_28535 ? scope.renderer.xt() + v_t_28535 : 0;
    },
    Ct: function (v_t_28536) {
      v_t_28536 ? ++v_u_28424 : --v_u_28424;
    },
    QI: function () {
      v_u_28424 = 0;
    },
    T4: function (v_t_28537) {
      return new Promise(v_i_28538 => {
        scope.menuSystem.ft(), scope.menuSystem.vt("ok", void 0 === v_t_28537 ? "Next" : v_t_28537, 0, 16, scope.v_W0_27791, !1, !1, !1, "", function (v_t_28539) {
          "down" === v_t_28539 && (scope.menuSystem._t(), v_i_28538());
        }), scope.menuSystem.wt("ok", !0);
      });
    }
  };
}
