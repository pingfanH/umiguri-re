// 模块: v_Ie_27966
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createV_Ie_27966(scope) {
  let v_c_33137 = [],
    v_u_33138 = {},
    v_n_33139 = scope.handshake.On.ae;
  return {
    _n: function (v_o_33140) {
      let v_l_33141 = new scope.v_ms_27995();
      scope.v_Le_28076([v_i_33142 => {
        scope.languagePackages.it("tables/settingTable.krtbl", function (v_t_33143) {
          null === v_t_33143 ? v_o_33140(!1) : (v_l_33141.uf(v_t_33143), scope.v_Me_28078(v_i_33142));
        });
      }, v_t_33144 => {
        var v_i_33145 = v_l_33141.ff("_entry");
        if (v_i_33145) {
          for (const v_r_33148 of v_i_33145.hf()) {
            var v_e_33146 = {
              N0: v_r_33148[1],
              Bi: []
            };
            for (const v_s_33149 of v_l_33141.ff("_cat" + v_r_33148[0]).hf()) {
              var v_n_33147 = {
                Ae: v_s_33149[0],
                H0: v_s_33149[1],
                Fi: 0 === v_s_33149[2] ? "binaly" : "updown",
                R0: []
              };
              if ("updown" === v_n_33147.Fi) for (const v_a_33150 of v_l_33141.ff("_list" + v_s_33149[3]).hf()) v_n_33147.R0.push({
                M0: 0 === v_a_33150[0],
                Wt: v_a_33150[1],
                Sf: v_a_33150[2]
              });
              v_e_33146.Bi.push(v_n_33147), v_u_33138[v_n_33147.Ae] = v_n_33147;
            }
            v_c_33137.push(v_e_33146);
          }
          v_o_33140(!0);
        } else v_o_33140(!1);
      }]);
    },
    j0: () => v_c_33137,
    F0: v_t_33151 => v_u_33138[v_t_33151],
    L0: function (v_t_33152, v_i_33153) {
      var v_e_33154 = v_u_33138[v_t_33152];
      if (!(void 0 === v_e_33154 || v_i_33153 < 0)) {
        if ("updown" === v_e_33154.Fi) {
          if (v_u_33138[v_t_33152].R0.length <= v_i_33153) return;
        } else if ("binaly" === v_e_33154.Fi && 1 < v_i_33153) return;
        void 0 !== v_n_33139[v_t_33152] && (v_n_33139[v_t_33152] = v_i_33153), "volJustice" === v_t_33152 && v_i_33153 <= 10 && (v_n_33139.volTap = v_i_33153, v_n_33139.volExTap = v_i_33153, v_n_33139.volSlide = v_i_33153, v_n_33139.volAir = v_i_33153, v_n_33139.volFlick = v_i_33153);
      }
    },
    E0: function (v_t_33155) {
      return void 0 === v_u_33138[v_t_33155] ? 0 : "volJustice" === v_t_33155 ? v_n_33139.volTap === v_n_33139.volExTap && v_n_33139.volTap === v_n_33139.volSlide && v_n_33139.volTap === v_n_33139.volAir && v_n_33139.volTap === v_n_33139.volFlick ? v_n_33139.volTap : 11 : v_n_33139[v_t_33155];
    },
    D0: function (v_t_33156) {
      return void 0 === v_u_33138[v_t_33156] ? 0 : "updown" === v_u_33138[v_t_33156].Fi ? v_u_33138[v_t_33156].R0[v_n_33139[v_t_33156]].Sf : !!v_n_33139[v_t_33156];
    },
    $c: function (v_t_33157) {
      if (void 0 === v_u_33138[v_t_33157]) return 0;
      let v_i_33158 = 0;
      return v_i_33158 = (scope.handshake.On.re < 3 ? scope.v_ji_27860[scope.handshake.On.re] : v_n_33139)[v_t_33157], "updown" === v_u_33138[v_t_33157].Fi ? v_u_33138[v_t_33157].R0[v_i_33158].Sf : !!v_i_33158;
    },
    I0: function (v_t_33159) {
      var v_i_33160 = v_u_33138[v_t_33159];
      if (void 0 === v_i_33160) return !1;
      if ("volJustice" === v_t_33159) return this.E0(v_t_33159) < 10;
      if ("updown" === v_i_33160.Fi) {
        if (v_u_33138[v_t_33159].R0.length <= this.E0(v_t_33159) + 1) return !1;
      } else if ("binaly" === v_i_33160.Fi && 1 <= this.E0(v_t_33159)) return !1;
      return !0;
    },
    x0: function (v_t_33161) {
      return void 0 !== v_u_33138[v_t_33161] && 0 < this.E0(v_t_33161);
    }
  };
}
