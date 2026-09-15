// game: 语句 117 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Ss_28000.prototype = {
    ue: async function () {
      return !!this.Z7.qu() && null !== (await this.Z7.q7(new Uint8Array([16, 0]))) && (setInterval(() => {
        this.n9();
      }, 2 / 60 * 1e3), !0);
    },
    V7: function () {
      this.Z7.V7();
    },
    TR: function (v_t_33611) {
      this.ER = !!v_t_33611, this.DR = 0, this.FR = 0, this.PR = 0, this.RR = 0;
    },
    n9: function () {
      this.i9 && this.Z7.Xu(this.e9);
    },
    BR: async function () {
      await this.Z7.q7(new Uint8Array([3, 0]));
    },
    GR: async function () {
      await this.Z7.q7(new Uint8Array([4, 0]));
    },
    m9: async function (v_t_33612) {
      await this.Z7.q7(new Uint8Array([9, 2, 255 & v_t_33612, v_t_33612 >>> 8 & 255]));
    },
    b9: async function (v_t_33613) {
      await this.Z7.q7(new Uint8Array([10, 1, v_t_33613]));
    },
    o9: function () {
      this.i9 = !0;
    },
    l9: function () {
      this.i9 = !1;
    },
    CR: function () {
      return new Promise(v_t_33614 => {
        let v_n_33615 = 0;
        this.Z7.X7(240).then(v_i_33616 => {
          clearTimeout(v_n_33615);
          let v_e_33617 = "";
          for (let v_t_33618 = 2; v_t_33618 < 10; ++v_t_33618) v_e_33617 += String.fromCharCode(v_i_33616[v_t_33618]);
          v_t_33614({
            bd_num: v_e_33617,
            fw: v_i_33616[17]
          });
        }), v_n_33615 = setInterval(() => {
          this.Z7.Xu(new Uint8Array([240, 0]));
        }, 100);
      });
    },
    x7: function () {
      return this.Q7;
    },
    T7: function (v_i_33619, v_e_33620) {
      for (let v_t_33621 = 0; v_t_33621 < 16; ++v_t_33621) void 0 === v_i_33619[15 - v_t_33621] ? (this.e9[3 + 2 * v_t_33621 * 3] = 0, this.e9[3 + 2 * v_t_33621 * 3 + 1] = 0, this.e9[3 + 2 * v_t_33621 * 3 + 2] = 0) : (this.e9[3 + 2 * v_t_33621 * 3] = v_i1_27825(v_i_33619[15 - v_t_33621][2] / 255 * 254), this.e9[3 + 2 * v_t_33621 * 3 + 1] = v_i1_27825(v_i_33619[15 - v_t_33621][0] / 255 * 254), this.e9[3 + 2 * v_t_33621 * 3 + 2] = v_i1_27825(v_i_33619[15 - v_t_33621][1] / 255 * 254));
      for (let v_t_33622 = 0; v_t_33622 < 15; ++v_t_33622) void 0 === v_e_33620[14 - v_t_33622] ? (this.e9[3 + 3 * (2 * v_t_33622 + 1)] = 0, this.e9[3 + 3 * (2 * v_t_33622 + 1) + 1] = 0, this.e9[3 + 3 * (2 * v_t_33622 + 1) + 2] = 0) : (this.e9[3 + 3 * (2 * v_t_33622 + 1)] = v_i1_27825(v_e_33620[14 - v_t_33622][2] / 255 * 254), this.e9[3 + 3 * (2 * v_t_33622 + 1) + 1] = v_i1_27825(v_e_33620[14 - v_t_33622][0] / 255 * 254), this.e9[3 + 3 * (2 * v_t_33622 + 1) + 2] = v_i1_27825(v_e_33620[14 - v_t_33622][1] / 255 * 254));
    }
  };