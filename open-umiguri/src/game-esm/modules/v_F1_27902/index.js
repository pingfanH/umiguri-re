// 模块: v_F1_27902
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_F1_27902(scope) {
  let v_r_28672 = void 0;
  async function v_e_28673() {
    v_r_28672.Jt = !0;
    for (const v_n_28677 of v_r_28672.lt.We) v_n_28677.Be = !1;
    var v_t_28674 = v_r_28672.lt.yk(0);
    let v_i_28675 = v_t_28674.yk(6),
      v_e_28676 = v_t_28674.yk(9);
    v_t_28674.Be = !0, v_r_28672.e8(2, v_t_28674), v_i_28675.Wt = "0C00P", v_e_28676.ln(0), await scope.v_fo_28103(scope.v_Ge_28204(30)), await function (v_r_28678) {
      let v_t_28679 = scope.handshake.rm.bm,
        v_s_28680 = 0,
        v_a_28681 = 0;
      return new Promise(v_i_28682 => scope.v_Oa_28077(function (v_t_28683, v_i_28684) {
        "max" === v_t_28683 ? v_s_28680 = v_i_28684 - 1 : "upd" === v_t_28683 && (v_a_28681 = v_i_28684 - 1, v_r_28678(v_a_28681 / v_s_28680));
      }, [function (v_n_28685) {
        v_t_28679 ? scope.v_Me_28078(v_n_28685) : scope.v_br_27943.Ku(function (v_t_28686, v_i_28687, v_e_28688) {
          scope.v_be_27857.Pp = v_t_28686, scope.handshake.l.u = v_i_28687, scope.handshake.l.v = v_e_28688, scope.v_Me_28078(v_n_28685);
        }, function (v_t_28689, v_i_28690, v_e_28691) {
          v_r_28678(v_a_28681 / v_s_28680 + (v_t_28689 / v_i_28690 / 2 + .5 * v_e_28691) / v_s_28680);
        });
      }, function (v_i_28692) {
        v_t_28679 ? scope.v_Me_28078(v_i_28692) : scope.v_Tr_27949.ef(function (v_t_28693) {
          scope.v_be_27857.Gp = v_t_28693, scope.v_Me_28078(v_i_28692);
        });
      }, function (v_e_28694) {
        scope.dataLoader.ef(function (v_t_28695, v_i_28696) {
          scope.v_be_27857.Np = v_t_28695, scope.handshake.l.$ = v_i_28696, scope.v_Me_28078(v_e_28694);
        });
      }, function (v_i_28697) {
        scope.v_Br_27958.ef(function (v_t_28698) {
          scope.v_be_27857.jp = v_t_28698, scope.v_Me_28078(v_i_28697);
        });
      }, function (v_n_28699) {
        scope.v_Rr_27952.ef(function (v_t_28700, v_i_28701, v_e_28702) {
          scope.v_be_27857.Hp = v_t_28700, scope.v_be_27857.Up = v_i_28701, scope.v_be_27857.Vp = v_e_28702, scope.v_Me_28078(v_n_28699);
        });
      }, function (v_i_28703) {
        scope.v_Hr_27962.ef(function (v_t_28704) {
          scope.v_Me_28078(v_i_28703);
        });
      }, function (v_t_28705) {
        v_i_28682();
      }]));
    }(function (v_t_28706) {
      v_i_28675.Wt = (100 * v_t_28706).toFixed(2).replaceAll(".", "C") + "P", v_e_28676.ln(v_t_28706);
    }), await scope.v_fo_28103(scope.v_Ge_28204(30)), v_r_28672.e8(1, v_t_28674), await scope.v_fo_28103(scope.v_Ge_28204(20));
  }
  return {
    ue: function (v_e_28707) {
      scope.v_Le_28076([v_i_28708 => {
        scope.languagePackages.it("ui/dataLoader.rsb", function (v_t_28709) {
          v_t_28709 ? (v_t_28709 = new scope.v_Dl_28181(v_t_28709), scope.renderer.nt(v_t_28709.rt(scope.renderer.p5()), v_t_28710 => {
            v_r_28672 = v_t_28710, scope.v_Me_28078(v_i_28708);
          })) : v_e_28707();
        });
      }, v_t_28711 => {
        scope.v_Fe_28101(v_e_28707);
      }]);
    },
    T0: function (v_i_28712) {
      scope.v_Le_28076([v_i_28713 => {
        v_r_28672.Jt = !1, scope.renderer.ut("dataLoader", v_r_28672, 50, v_t_28714 => {
          scope.v_Me_28078(v_i_28713);
        });
      }, v_t_28715 => {
        v_e_28673().then(() => {
          scope.renderer._i("dataLoader"), v_i_28712();
        });
      }]);
    }
  };
}
