// 模块: playerInfoBoard
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createPlayerInfoBoard(scope) {
  let v_r_28607 = void 0,
    v_n_28608 = void 0;
  return {
    ue: function (v_e_28609) {
      scope.v_Le_28076([v_i_28610 => {
        scope.languagePackages.it("ui/commonPlayerPlate.rsb", function (v_t_28611) {
          v_t_28611 ? (v_t_28611 = new scope.v_Dl_28181(v_t_28611), scope.renderer.ut("sysPlayerPlate", v_t_28611.rt(scope.renderer.p5()), 1e3, v_t_28612 => {
            (v_r_28607 = v_t_28612).Jt = !1, scope.v_Me_28078(v_i_28610);
          })) : v_e_28609();
        });
      }, v_i_28613 => {
        scope.languagePackages.it("ui/commonIndicator.rsb", function (v_t_28614) {
          v_t_28614 ? (v_t_28614 = new scope.v_Dl_28181(v_t_28614), scope.renderer.ut("sysIndicator", v_t_28614.rt(scope.renderer.p5()), 1001, v_t_28615 => {
            (v_n_28608 = v_t_28615).rsbTree.elementByIndex(5).visible = !1, v_n_28608.rsbTree.elementByIndex(2).visible = !1, v_n_28608.rsbTree.elementByIndex(0).visible = !1, v_n_28608.rsbTree.elementByIndex(3).visible = !1, v_n_28608.rsbTree.elementByIndex(4).visible = !1, v_n_28608.rsbTree.elementByIndex(1).visible = !1, scope.v_Me_28078(v_i_28613);
          })) : v_e_28609();
        });
      }, v_t_28616 => {
        scope.v_Fe_28101(v_e_28609);
      }]);
    },
    ti: function () {
      v_r_28607.Jt = !0;
    },
    ii: function () {
      v_r_28607.Jt = !1;
    },
    N4: function (v_t_28617) {
      v_r_28607.rsbTree.elementByIndex(12).Wt = v_t_28617;
    },
    j4: function (v_t_28618, v_i_28619) {
      v_r_28607.rsbTree.Kt(), v_r_28607.rsbTree.elementByIndex(5).Je = "title" + scope.v_ot_27785[v_i_28619], v_r_28607.rsbTree.elementByIndex(11).Wt = v_t_28618;
    },
    H4: function (v_i_28620) {
      var v_t_28621 = scope.v_be_27857.Hp.find(v_t_28622 => v_t_28622.id === v_i_28620);
      v_t_28621 ? this.j4(v_t_28621.text, v_t_28621.rarity) : this.j4("！！データベース参照エラー！！", 0);
    },
    U4: function (v_t_28623) {
      var v_i_28624;
      "string" == typeof v_t_28623 && (v_i_28624 = scope.v_Dr_27956(v_t_28623), v_r_28607.rsbTree.elementByIndex(10).zt = !0, v_r_28607.rsbTree.elementByIndex(10).Xt = "chara:" + v_i_28624 + ":0:" + v_t_28623);
    },
    V4: function (v_n_28625) {
      return new Promise(async v_t_28626 => {
        var v_i_28627, v_e_28628;
        "string" == typeof v_n_28625 && -1 !== scope.v_be_27857.Up.findIndex(v_t_28629 => v_t_28629.id === v_n_28625) && (v_i_28627 = await new Promise(v_t_28630 => scope.v__o_28104("/nameplates/" + v_n_28625 + "/image.png", v_t_28630))) && (v_i_28627 = glRuntime.Texture.fromImage(v_i_28627, {
          noFlip: !0
        }), v_e_28628 = "cache:playerplate:nameplate", scope.renderer.Yt.Zt[v_e_28628] && scope.renderer.Yt.Zt[v_e_28628].free(), scope.renderer.Yt.Zt[v_e_28628] = v_i_28627, v_r_28607.rsbTree.elementByIndex(0).zt = !0, v_r_28607.rsbTree.elementByIndex(0).Xt = v_e_28628), v_t_28626();
      });
    },
    J4: function (v_t_28631, v_i_28632) {
      var v_e_28633, v_n_28634;
      v_i_28632 ? (v_i_28632 = "" + scope.mathFloor(v_t_28631 / 100), v_e_28633 = scope.v_Xa_28081("" + v_t_28631 % 100, 2, "0"), v_n_28634 = scope.ratingColorName(v_t_28631), v_t_28631 = scope.ratingColorRgba(v_t_28631), v_r_28607.rsbTree.elementByIndex(9).Wt = v_i_28632 + "P" + v_e_28633, v_r_28607.rsbTree.elementByIndex(9).Ak = "rating" + v_n_28634, v_r_28607.rsbTree.elementByIndex(9).Qe(v_t_28631[0], v_t_28631[1], v_t_28631[2], v_t_28631[3]), v_r_28607.rsbTree.elementByIndex(8).Je = "numRating" + v_n_28634 + "Rating", v_r_28607.rsbTree.elementByIndex(8).Qe(v_t_28631[0], v_t_28631[1], v_t_28631[2], v_t_28631[3])) : (v_r_28607.rsbTree.elementByIndex(9).Wt = "N", v_r_28607.rsbTree.elementByIndex(9).Ak = "ratingWt", v_r_28607.rsbTree.elementByIndex(9).Qe(.825, .825, .825, 1), v_r_28607.rsbTree.elementByIndex(8).Je = "numRatingWtRating", v_r_28607.rsbTree.elementByIndex(8).Qe(.825, .825, .825, 1));
    },
    O4: function (v_t_28635, v_i_28636) {
      v_r_28607.rsbTree.elementByIndex(7).Wt = v_i_28636 ? "" + scope.mathMin(scope.mathMax(v_t_28635, 1), 99) : "MM";
    },
    $t: function (v_t_28637) {
      v_n_28608.rsbTree.elementByIndex(5).visible = !!v_t_28637;
    },
    VA: function (v_t_28638, v_i_28639) {
      v_n_28608.rsbTree.elementByIndex(0).Wt = v_i_28639 ? "C" + v_i_28639 + "S" + v_t_28638 : "C" + v_t_28638;
    },
    uP: function (v_t_28640) {
      v_n_28608.rsbTree.elementByIndex(0).visible = v_t_28640;
    },
    _P: function (v_t_28641) {},
    kL: function (v_t_28642) {
      v_n_28608.rsbTree.elementByIndex(1).visible = null !== v_t_28642, v_n_28608.rsbTree.elementByIndex(4).visible = null !== v_t_28642;
      v_t_28642 = -1 === v_t_28642 || null === v_t_28642 ? 999 : v_t_28642;
      v_n_28608.rsbTree.elementByIndex(4).Wt = v_t_28642.toFixed(0) + " ms";
      let v_i_28643 = 0;
      v_t_28642 < 50 ? v_i_28643 = 2 : v_t_28642 < 100 && (v_i_28643 = 1), v_n_28608.rsbTree.elementByIndex(1).Je = "iconNetwork" + v_i_28643;
    }
  };
}
