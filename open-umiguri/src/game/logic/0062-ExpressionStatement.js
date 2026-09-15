// game: 语句 62 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_T1_27891.prototype = {
    m6: function () {
      this.D6 += this.B6;
    },
    dn: function (v_i_28298) {
      -1 === this.P6.findIndex(v_t_28299 => v_t_28299 === v_i_28298) && this.P6.push(v_i_28298), v_i_28298.o1 = !0, v_i_28298.A6 = this.D6;
    },
    i6: function (v_t_28300) {
      v_t_28300.o1 = !1, v_t_28300.n6 = !1;
    },
    Mc: function (v_t_28301, v_i_28302) {
      v_t_28301.Mc = v_i_28302;
    },
    n6: function (v_t_28303, v_i_28304, v_e_28305) {
      v_e_28305 <= 0 ? (v_t_28303.n6 = !1, v_t_28303.Mc = v_i_28304) : (v_t_28303.n6 = !0, v_t_28303.T6 = this.D6, v_t_28303.L6 = v_e_28305 * this.E6 / 1e3, v_t_28303.R6 = v_i_28304);
    },
    u6: function (v_t_28306, v_i_28307, v_e_28308) {
      v_t_28306._6 = v_i_28307 ? mathFloor((v_e_28308 || 0) * this.E6 / 1e3) : -1;
    },
    b6: function () {
      this.N6.fill(0);
      for (let v_n_28310 = 0; v_n_28310 < this.B6; ++v_n_28310) {
        var v_t_28309 = this.D6 + v_n_28310;
        for (const v_r_28311 of this.P6) if (v_r_28311.o1 && v_r_28311.I6) {
          let v_e_28312 = v_t_28309 - v_r_28311.A6 + v_r_28311.l6;
          if (!((v_e_28312 = 0 <= v_r_28311._6 && v_e_28312 > v_r_28311._6 ? (v_e_28312 - v_r_28311._6) % (v_r_28311.I6.length - v_r_28311._6) + v_r_28311._6 : v_e_28312) >= v_r_28311.I6.length)) {
            v_e_28312 = mathFloor(v_e_28312 * v_r_28311.b1);
            let v_i_28313 = v_r_28311.Mc;
            v_r_28311.n6 && (v_i_28313 = mathMin((v_t_28309 - v_r_28311.T6) / v_r_28311.L6, 1) * (v_r_28311.R6 - v_r_28311.Mc) + v_r_28311.Mc);
            for (let v_t_28314 = 0; v_t_28314 < this.G6; ++v_t_28314) this.N6[v_n_28310 * this.G6 + v_t_28314] = v_Qa_28089(this.N6[v_n_28310 * this.G6 + v_t_28314] + v_r_28311.I6.getChannelData(mathMin(v_t_28314, v_r_28311.I6.numberOfChannels - 1))[v_e_28312] * v_i_28313 * 32767, -32768, 32767);
          }
        }
      }
    },
    H6: function () {
      return this.N6;
    },
    S6: function () {
      return this.j6;
    }
  };