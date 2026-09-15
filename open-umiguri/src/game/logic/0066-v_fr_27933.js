// game: 语句 66 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_fr_27933() {
    this.Ae = 0, this.Fi = v_An_27660, this.Xg = 0, this.ou = 0, this.w = 0, this.h = 0, this.Lw = 0, this.Jg = 0, this.Yg = 0, this.We = [], this.od = 0, this.Pg = 0, this.Og = 0, this.Rw = 1, this.CL = 0, this.pw = !1, this.dw = v_An_27660, this.Vg = !1, this.gw = !1, this.jg = Array.from({
      length: 16
    }, () => 1 / 0), this.Hg = Array.from({
      length: 16
    }, () => -1 / 0), this.yw = 0, this.Gg = 0, this.Ng = 0, this.Iw = 0, this.n7 = Array.from({
      length: 16
    }, () => !1), this.Sw = null, this._k = !1, this.xw = 0, this.zg = 0, this.tw = !1, this.qg = !1, this.Qg = !1, this.Ug = v_v0_27715, this.nr = 0, this.mw = null, this.Kg = 0, this.ww = null;
    let v_u_31998 = this;
    this.Vw = function (v_t_31999) {
      v_u_31998.Fi = v_t_31999.Fi, v_u_31998.Xg = v_t_31999.Xg, v_u_31998.ou = v_t_31999.ou, v_u_31998.w = v_t_31999.w, v_u_31998.Lw = v_t_31999.Lw, v_u_31998.Jg = v_t_31999.Jg, v_u_31998.Yg = v_t_31999.Yg, v_u_31998.h = v_t_31999.h, v_u_31998.We = [], v_u_31998.Rw = v_t_31999.Rw, v_u_31998.CL = v_t_31999.CL, v_u_31998.dw = v_t_31999.dw, v_u_31998.Vg = v_t_31999.Vg, v_u_31998.gw = v_t_31999.gw;
      let v_i_32000;
      v_De_28096(v_t_31999.We, function (v_t_32001) {
        (v_i_32000 = new v_fr_27933()).Vw(v_t_32001), v_u_31998.We.push(v_i_32000);
      });
    }, this.Jw = function () {
      if (0 !== v_u_31998.We.length) return v_u_31998.We[0];
    }, this.Mw = function () {
      if (0 !== v_u_31998.We.length) return v_u_31998.We[v_u_31998.We.length - 1];
    }, this.Oc = function (v_i_32002) {
      if (0 === v_u_31998.We.length) return {
        rw: v_u_31998.ou,
        aw: v_u_31998.ou + v_u_31998.w,
        h: v_u_31998.h,
        cr: v_u_31998
      };
      let v_e_32003 = v_u_31998,
        v_n_32004 = v_u_31998,
        v_r_32005 = null;
      var v_s_32006,
        v_a_32007,
        v_o_32008 = v_u_31998.We;
      for (let v_t_32009 = 0; v_t_32009 < v_o_32008.length; ++v_t_32009) if ((v_s_32006 = v_o_32008[v_t_32009]).Fi !== v_c0_27703) {
        if (v_s_32006.od >= v_i_32002) {
          v_r_32005 = v_e_32003.ou === v_s_32006.ou && v_e_32003.w === v_s_32006.w ? (v_s_32006.Fi !== v_jn_27680 && v_s_32006.Fi !== v_Wn_27684 && v_s_32006.Fi !== v_e0_27695 || (v_n_32004 = v_s_32006), {
            rw: v_s_32006.ou,
            aw: v_s_32006.ou + v_s_32006.w,
            h: v_s_32006.h,
            cr: v_n_32004
          }) : (v_a_32007 = mathMin(mathMax((v_i_32002 - v_e_32003.od) / (v_s_32006.od - v_e_32003.od), 0), 1), {
            rw: mathRound(1e3 * v_Ee_28084(v_e_32003.ou, v_s_32006.ou, v_a_32007)) / 1e3,
            aw: mathRound(1e3 * v_Ee_28084(v_e_32003.ou + v_e_32003.w, v_s_32006.ou + v_s_32006.w, v_a_32007)) / 1e3,
            h: v_Ee_28084(v_e_32003.h, v_s_32006.h, v_a_32007),
            cr: v_n_32004
          });
          break;
        }
        (v_e_32003 = v_s_32006).Fi !== v_jn_27680 && v_s_32006.Fi !== v_Wn_27684 && v_s_32006.Fi !== v_e0_27695 || (v_n_32004 = v_s_32006);
      }
      return v_r_32005;
    }, this.i7 = function (v_i_32010, v_t_32011) {
      var v_e_32012 = mathMax(v_t_32011, this.od);
      let v_n_32013 = 16,
        v_r_32014 = 0,
        v_s_32015 = v_u_31998;
      var v_a_32016,
        v_o_32017 = v_u_31998.We;
      let v_l_32018 = !1;
      for (let v_t_32020 = 0; v_t_32020 < v_o_32017.length; ++v_t_32020) if ((v_a_32016 = v_o_32017[v_t_32020]).Fi !== v_c0_27703) {
        if (!v_l_32018 && v_a_32016.od >= v_e_32012 && (v_c_32019 = mathMin(mathMax((v_e_32012 - v_s_32015.od) / (v_a_32016.od - v_s_32015.od), 0), 1), v_n_32013 = v_Ee_28084(v_s_32015.ou, v_a_32016.ou, v_c_32019), v_r_32014 = v_Ee_28084(v_s_32015.ou + v_s_32015.w, v_a_32016.ou + v_a_32016.w, v_c_32019), v_l_32018 = !0), v_l_32018) {
          if (v_a_32016.od >= v_i_32010) {
            var v_c_32019 = mathMin(mathMax((v_i_32010 - v_s_32015.od) / (v_a_32016.od - v_s_32015.od), 0), 1);
            v_n_32013 = mathMin(v_n_32013, v_Ee_28084(v_s_32015.ou, v_a_32016.ou, v_c_32019)), v_r_32014 = mathMax(v_r_32014, v_Ee_28084(v_s_32015.ou + v_s_32015.w, v_a_32016.ou + v_a_32016.w, v_c_32019));
            break;
          }
          v_n_32013 = mathMin(v_n_32013, v_a_32016.ou), v_r_32014 = mathMax(v_r_32014, v_a_32016.ou + v_a_32016.w);
        }
        v_s_32015 = v_a_32016;
      }
      v_n_32013 = mathRound(v_n_32013), v_r_32014 = mathRound(v_r_32014);
      for (let v_t_32021 = 0; v_t_32021 < 16; v_t_32021++) this.n7[v_t_32021] = v_n_32013 <= v_t_32021 && v_r_32014 > v_t_32021;
    };
  }