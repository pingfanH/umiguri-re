// game: 语句 168 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Ua_28072.A8 = function (v_t_34163, v_i_34164) {
    return v_t_34163[0] >= v_i_34164[0] && v_t_34163[1] >= v_i_34164[1] && v_t_34163[0] + v_t_34163[2] <= v_i_34164[0] + v_i_34164[2] && v_t_34163[1] + v_t_34163[3] <= v_i_34164[1] + v_i_34164[3];
  }, v_Ua_28072.prototype = {
    I8: {
      C8: 0,
      T8: 1,
      L8: 2,
      M8: 3,
      E8: 4
    },
    P8: function (v_i_34165) {
      for (let v_t_34166 = 0; v_t_34166 < this.y8.length;) this.D8(this.y8[v_t_34166], v_i_34165) ? (this.y8[v_t_34166] = this.y8[this.y8.length - 1], this.y8.pop()) : ++v_t_34166;
      this.B8(), this.S8.push(v_i_34165);
    },
    G8: function (v_t_34167, v_i_34168, v_e_34169) {
      let v_n_34170 = [0, 0, 0, 0];
      switch (v_e_34169) {
        case this.I8.C8:
          v_n_34170 = this.N8(v_t_34167, v_i_34168);
          break;
        case this.I8.M8:
          v_n_34170 = this.j8(v_t_34167, v_i_34168);
          break;
        case this.I8.E8:
          v_n_34170 = this.U8(v_t_34167, v_i_34168);
          break;
        case this.I8.T8:
          v_n_34170 = this.H8(v_t_34167, v_i_34168);
          break;
        case this.I8.L8:
          v_n_34170 = this.V8(v_t_34167, v_i_34168);
      }
      return 0 !== v_n_34170[3] && this.P8(v_n_34170), v_n_34170;
    },
    j8: function (v_i_34171, v_e_34172) {
      var v_n_34173,
        v_r_34174 = [0, 0, 0, 0];
      let v_s_34175 = 1 / 0,
        v_a_34176 = 1 / 0;
      for (let v_t_34177 = 0; v_t_34177 < this.y8.length; ++v_t_34177) this.y8[v_t_34177][2] >= v_i_34171 && this.y8[v_t_34177][3] >= v_e_34172 && ((v_n_34173 = this.y8[v_t_34177][1] + v_e_34172) < v_s_34175 || v_n_34173 === v_s_34175 && this.y8[v_t_34177][0] < v_a_34176) && (v_r_34174[0] = this.y8[v_t_34177][0], v_r_34174[1] = this.y8[v_t_34177][1], v_r_34174[2] = v_i_34171, v_r_34174[3] = v_e_34172, v_s_34175 = v_n_34173, v_a_34176 = this.y8[v_t_34177][0]);
      return v_r_34174;
    },
    N8: function (v_i_34178, v_e_34179) {
      var v_n_34180,
        v_r_34181,
        v_s_34182,
        v_a_34183 = [0, 0, 0, 0];
      let v_o_34184 = 1 / 0,
        v_l_34185 = 1 / 0;
      for (let v_t_34186 = 0; v_t_34186 < this.y8.length; ++v_t_34186) this.y8[v_t_34186][2] >= v_i_34178 && this.y8[v_t_34186][3] >= v_e_34179 && (v_s_34182 = Math.abs(this.y8[v_t_34186][2] - v_i_34178), v_n_34180 = Math.abs(this.y8[v_t_34186][3] - v_e_34179), v_r_34181 = Math.min(v_s_34182, v_n_34180), v_s_34182 = Math.max(v_s_34182, v_n_34180), v_r_34181 < v_o_34184 || v_r_34181 === v_o_34184 && v_s_34182 < v_l_34185) && (v_a_34183[0] = this.y8[v_t_34186][0], v_a_34183[1] = this.y8[v_t_34186][1], v_a_34183[2] = v_i_34178, v_a_34183[3] = v_e_34179, v_o_34184 = v_r_34181, v_l_34185 = v_s_34182);
      return v_a_34183;
    },
    H8: function (v_i_34187, v_e_34188) {
      var v_n_34189,
        v_r_34190,
        v_s_34191,
        v_a_34192 = [0, 0, 0, 0];
      let v_o_34193 = 1 / 0,
        v_l_34194 = 1 / 0;
      for (let v_t_34195 = 0; v_t_34195 < this.y8.length; ++v_t_34195) this.y8[v_t_34195][2] >= v_i_34187 && this.y8[v_t_34195][3] >= v_e_34188 && (v_s_34191 = Math.abs(this.y8[v_t_34195][2] - v_i_34187), v_n_34189 = Math.abs(this.y8[v_t_34195][3] - v_e_34188), v_r_34190 = Math.min(v_s_34191, v_n_34189), (v_s_34191 = Math.max(v_s_34191, v_n_34189)) < v_l_34194 || v_s_34191 === v_l_34194 && v_r_34190 < v_o_34193) && (v_a_34192[0] = this.y8[v_t_34195][0], v_a_34192[1] = this.y8[v_t_34195][1], v_a_34192[2] = v_i_34187, v_a_34192[3] = v_e_34188, v_o_34193 = v_r_34190, v_l_34194 = v_s_34191);
      return v_a_34192;
    },
    V8: function (v_i_34196, v_e_34197) {
      var v_n_34198 = [0, 0, 0, 0];
      let v_r_34199 = 1 / 0,
        v_s_34200 = 1 / 0;
      for (let v_t_34204 = 0; v_t_34204 < this.y8.length; ++v_t_34204) {
        var v_a_34201,
          v_o_34202,
          v_l_34203 = this.y8[v_t_34204][2] * this.y8[v_t_34204][3] - v_i_34196 * v_e_34197;
        this.y8[v_t_34204][2] >= v_i_34196 && this.y8[v_t_34204][3] >= v_e_34197 && (v_o_34202 = Math.abs(this.y8[v_t_34204][2] - v_i_34196), v_a_34201 = Math.abs(this.y8[v_t_34204][3] - v_e_34197), v_o_34202 = Math.min(v_o_34202, v_a_34201), v_l_34203 < v_r_34199 || v_l_34203 === v_r_34199 && v_o_34202 < v_s_34200) && (v_n_34198[0] = this.y8[v_t_34204][0], v_n_34198[1] = this.y8[v_t_34204][1], v_n_34198[2] = v_i_34196, v_n_34198[3] = v_e_34197, v_s_34200 = v_o_34202, v_r_34199 = v_l_34203);
      }
      return v_n_34198;
    },
    J8: function (v_t_34205, v_i_34206, v_e_34207, v_n_34208) {
      return v_i_34206 < v_e_34207 || v_n_34208 < v_t_34205 ? 0 : Math.min(v_i_34206, v_n_34208) - Math.max(v_t_34205, v_e_34207);
    },
    O8(v_i_34209, v_e_34210, v_n_34211, v_r_34212) {
      let v_s_34213 = 0;
      0 !== v_i_34209 && v_i_34209 + v_n_34211 !== this.p8 || (v_s_34213 += v_r_34212), 0 !== v_e_34210 && v_e_34210 + v_r_34212 !== this.c5 || (v_s_34213 += v_n_34211);
      for (let v_t_34214 = 0; v_t_34214 < this.S8.length; ++v_t_34214) this.S8[v_t_34214][0] !== v_i_34209 + v_n_34211 && this.S8[v_t_34214][0] + this.S8[v_t_34214][2] !== v_i_34209 || (v_s_34213 += this.J8(this.S8[v_t_34214][1], this.S8[v_t_34214][1] + this.S8[v_t_34214][3], v_e_34210, v_e_34210 + v_r_34212)), this.S8[v_t_34214][1] != v_e_34210 + v_r_34212 && this.S8[v_t_34214][1] + this.S8[v_t_34214][3] != v_e_34210 || (v_s_34213 += this.J8(this.S8[v_t_34214][0], this.S8[v_t_34214][0] + this.S8[v_t_34214][2], v_i_34209, v_i_34209 + v_n_34211));
      return v_s_34213;
    },
    U8(v_i_34215, v_e_34216) {
      var v_n_34217,
        v_r_34218 = [0, 0, 0, 0];
      let v_s_34219 = -1;
      for (let v_t_34220 = 0; v_t_34220 < this.y8.length; ++v_t_34220) this.y8[v_t_34220][2] >= v_i_34215 && this.y8[v_t_34220][3] >= v_e_34216 && (v_n_34217 = this.O8(this.y8[v_t_34220][0], this.y8[v_t_34220][1], v_i_34215, v_e_34216)) > v_s_34219 && (v_r_34218[0] = this.y8[v_t_34220][0], v_r_34218[1] = this.y8[v_t_34220][1], v_r_34218[2] = v_i_34215, v_r_34218[3] = v_e_34216, v_s_34219 = v_n_34217);
      return v_r_34218;
    },
    D8(v_t_34221, v_i_34222) {
      var v_e_34223;
      return !(v_i_34222[0] >= v_t_34221[0] + v_t_34221[2] || v_i_34222[0] + v_i_34222[2] <= v_t_34221[0] || v_i_34222[1] >= v_t_34221[1] + v_t_34221[3] || v_i_34222[1] + v_i_34222[3] <= v_t_34221[1] || (this.k8 = this.b8.length, v_i_34222[0] < v_t_34221[0] + v_t_34221[2] && v_i_34222[0] + v_i_34222[2] > v_t_34221[0] && (v_i_34222[1] > v_t_34221[1] && v_i_34222[1] < v_t_34221[1] + v_t_34221[3] && ((v_e_34223 = v_t_34221.concat())[3] = v_i_34222[1] - v_e_34223[1], this.W8(v_e_34223)), v_i_34222[1] + v_i_34222[3] < v_t_34221[1] + v_t_34221[3]) && ((v_e_34223 = v_t_34221.concat())[1] = v_i_34222[1] + v_i_34222[3], v_e_34223[3] = v_t_34221[1] + v_t_34221[3] - (v_i_34222[1] + v_i_34222[3]), this.W8(v_e_34223)), v_i_34222[1] < v_t_34221[1] + v_t_34221[3] && v_i_34222[1] + v_i_34222[3] > v_t_34221[1] && (v_i_34222[0] > v_t_34221[0] && v_i_34222[0] < v_t_34221[0] + v_t_34221[2] && ((v_e_34223 = v_t_34221.concat())[2] = v_i_34222[0] - v_e_34223[0], this.W8(v_e_34223)), v_i_34222[0] + v_i_34222[2] < v_t_34221[0] + v_t_34221[2]) && ((v_e_34223 = v_t_34221.concat())[0] = v_i_34222[0] + v_i_34222[2], v_e_34223[2] = v_t_34221[0] + v_t_34221[2] - (v_i_34222[0] + v_i_34222[2]), this.W8(v_e_34223)), 0));
    },
    W8: function (v_i_34224) {
      v_i_34224[2] <= 0 || v_i_34224[3];
      for (let v_t_34225 = 0; v_t_34225 < this.k8;) {
        if (v_Ua_28072.A8(v_i_34224, this.b8[v_t_34225])) return;
        v_Ua_28072.A8(this.b8[v_t_34225], v_i_34224) ? (this.b8[v_t_34225] = this.b8[--this.k8], this.b8[this.k8] = this.b8[this.b8.length - 1], this.b8.pop()) : ++v_t_34225;
      }
      this.b8.push(v_i_34224);
    },
    B8: function () {
      for (let v_i_34226 = 0; v_i_34226 < this.y8.length; ++v_i_34226) for (let v_t_34227 = 0; v_t_34227 < this.b8.length;) v_Ua_28072.A8(this.b8[v_t_34227], this.y8[v_i_34226]) ? (this.b8[v_t_34227] = this.b8[this.b8.length - 1], this.b8.pop()) : ++v_t_34227;
      for (const v_t_34228 of this.b8) this.y8.push(v_t_34228);
      this.b8 = [];
    }
  }, v_ja_28075.prototype = {
    Uv: function (v_t_34229) {
      return Number.isFinite(v_t_34229) ? v_t_34229 : 0 < v_t_34229 ? 17976931348623157e292 : 5e-324;
    },
    Vv: function (v_t_34230) {
      return ((this.Iv * v_t_34230 + this.Av) * v_t_34230 + this.Tv) * v_t_34230;
    },
    Jv: function (v_t_34231) {
      return this.Uv(((this.Lv * v_t_34231 + this.Rv) * v_t_34231 + this.Ev) * v_t_34231);
    },
    Ov: function (v_t_34232) {
      return (3 * this.Iv * v_t_34232 + 2 * this.Av) * v_t_34232 + this.Tv;
    },
    Wv: function (v_t_34233) {
      return this.Uv(this.Uv(this.Uv(3 * this.Lv) * v_t_34233 + this.Uv(2 * this.Rv)) * v_t_34233 + this.Ev);
    },
    Gv: function (v_t_34234, v_i_34235, v_e_34236, v_n_34237) {
      this.Tv = 3 * v_t_34234, this.Av = 3 * (v_e_34236 - v_t_34234) - this.Tv, this.Iv = 1 - this.Tv - this.Av, this.Ev = this.Uv(3 * v_i_34235), this.Rv = this.Uv(3 * (v_n_34237 - v_i_34235) - this.Ev), this.Lv = this.Uv(1 - this.Ev - this.Rv);
    },
    Nv: function (v_t_34238, v_i_34239, v_e_34240, v_n_34241) {
      this.Bv = 0 < v_t_34238 ? v_i_34239 / v_t_34238 : !v_i_34239 && 0 < v_e_34240 ? v_n_34241 / v_e_34240 : v_i_34239 || v_n_34241 ? 0 : 1, this.Mv = v_e_34240 < 1 ? (v_n_34241 - 1) / (v_e_34240 - 1) : 1 === v_n_34241 && v_t_34238 < 1 ? (v_i_34239 - 1) / (v_t_34238 - 1) : 1 === v_n_34241 && 1 === v_i_34239 ? 1 : 0;
    },
    jv: function (v_r_34242, v_s_34243) {
      if (this.Fv = 0, this.Dv = 1, !(0 <= v_r_34242 && v_r_34242 < 1 && 0 <= v_s_34243 && v_s_34243 <= 1)) {
        var v_r_34242 = 3 * this.Lv,
          v_s_34243 = 2 * this.Rv,
          v_a_34244 = this.Ev;
        if (!(v_s1_27830(v_r_34242) < 1e-7 && v_s1_27830(v_s_34243) < 1e-7)) {
          let v_t_34245 = 0,
            v_i_34246 = 0;
          if (v_s1_27830(v_r_34242) < 1e-7) v_t_34245 = -v_a_34244 / v_s_34243;else {
            v_a_34244 = v_s_34243 * v_s_34243 - 4 * v_r_34242 * v_a_34244;
            if (v_a_34244 < 0) return;
            v_a_34244 = v_Si_27831(v_a_34244);
            v_t_34245 = (-v_s_34243 + v_a_34244) / (2 * v_r_34242), v_i_34246 = (-v_s_34243 - v_a_34244) / (2 * v_r_34242);
          }
          let v_e_34247 = 0,
            v_n_34248 = 0;
          0 < v_t_34245 && v_t_34245 < 1 && (v_e_34247 = this.Jv(v_t_34245)), 0 < v_i_34246 && v_i_34246 < 1 && (v_n_34248 = this.Jv(v_i_34246)), this.Fv = v_me_27822(this.Fv, v_e_34247, v_n_34248), this.Dv = v_pe_27823(this.Dv, v_e_34247, v_n_34248);
        }
      }
    },
    Hv: function () {
      var v_i_34249 = 1 / (this.Pv.length - 1);
      for (let v_t_34250 = 0; v_t_34250 < this.Pv.length; ++v_t_34250) this.Pv[v_t_34250] = this.Vv(v_t_34250 * v_i_34249);
    },
    Kv: function (v_t_34251, v_i_34252) {
      let v_e_34253 = 0,
        v_n_34254 = 0,
        v_r_34255 = v_t_34251,
        v_s_34256 = 0,
        v_a_34257,
        v_o_34258 = 0;
      var v_l_34259 = 1 / (this.Pv.length - 1);
      for (v_o_34258 = 1; v_o_34258 < this.Pv.length; ++v_o_34258) if (v_t_34251 <= this.Pv[v_o_34258]) {
        v_n_34254 = v_l_34259 * v_o_34258, v_e_34253 = v_n_34254 - v_l_34259, v_r_34255 = v_e_34253 + (v_n_34254 - v_e_34253) * (v_t_34251 - this.Pv[v_o_34258 - 1]) / (this.Pv[v_o_34258] - this.Pv[v_o_34258 - 1]);
        break;
      }
      var v_c_34260 = v_me_27822(1e-7, v_i_34252);
      for (v_o_34258 = 0; v_o_34258 < 4; ++v_o_34258) {
        if (v_s_34256 = this.Vv(v_r_34255) - v_t_34251, v_s1_27830(v_s_34256) < v_c_34260) return v_r_34255;
        if (v_a_34257 = this.Ov(v_r_34255), v_s1_27830(v_a_34257) < 1e-7) break;
        v_r_34255 -= v_s_34256 / v_a_34257;
      }
      if (!(v_s1_27830(v_s_34256) < v_i_34252)) for (; v_e_34253 < v_n_34254;) {
        if (v_s_34256 = this.Vv(v_r_34255), v_s1_27830(v_s_34256 - v_t_34251) < v_i_34252) return v_r_34255;
        v_t_34251 > v_s_34256 ? v_e_34253 = v_r_34255 : v_n_34254 = v_r_34255, v_r_34255 = .5 * (v_n_34254 + v_e_34253);
      }
      return v_r_34255;
    },
    Xv: function (v_t_34261, v_i_34262) {
      return v_t_34261 < 0 ? this.Uv(0 + this.Bv * v_t_34261) : 1 < v_t_34261 ? this.Uv(1 + this.Mv * (v_t_34261 - 1)) : this.Jv(this.Kv(v_t_34261, v_i_34262));
    },
    zv: function (v_t_34263) {
      return this.Xv(v_t_34263, 1e-7);
    },
    Yv: function (v_t_34264, v_i_34265) {
      v_t_34264 = this.Kv(v_me_27822(v_pe_27823(v_t_34264, 0), 1), v_i_34265), v_i_34265 = this.Ov(v_t_34264), v_t_34264 = this.Wv(v_t_34264);
      return v_i_34265 || v_t_34264 ? this.Uv(v_t_34264 / v_i_34265) : 0;
    },
    Zv: function (v_t_34266) {
      return this.Yv(v_t_34266, 1e-7);
    },
    qv: function () {
      return this.Tv / 3;
    },
    $v: function () {
      return this.Ev / 3;
    },
    Qv: function () {
      return (this.Av + this.Tv) / 3 + this.qv();
    },
    eg: function () {
      return (this.Rv + this.Tv) / 3 + this.$v();
    },
    tg: function () {
      return v_t_34267 => this.zv(v_t_34267);
    }
  }, v_Va_28079(void 0), v_Wa_28080(void 0);