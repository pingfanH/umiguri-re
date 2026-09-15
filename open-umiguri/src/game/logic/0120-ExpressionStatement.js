// game: 语句 120 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_As_28001.prototype = {
    ue: async function () {
      return !!this.Z7.qu() && null !== (await this.Z7.q7(new Uint8Array([16, 0]))) && (setInterval(() => {
        this.n9();
      }, 4 / 60 * 1e3), !0);
    },
    V7: function () {
      this.Z7.V7();
    },
    n9: function () {
      this.i9 && this.Z7.Xu(this.f9);
    },
    H9: function () {
      this.Z7.Xu(new Uint8Array([3, 0]));
    },
    N9: function () {
      this.Z7.Xu(new Uint8Array([4, 0]));
    },
    o9: function () {
      this.i9 = !0;
    },
    l9: function () {
      this.i9 = !1;
    },
    CR: function () {
      return new Promise(v_t_33627 => {
        this.Z7.q7(new Uint8Array([240, 0])).then(v_i_33628 => {
          if (!v_i_33628) return v_t_33627({
            bd_num: "----",
            fw: 0
          });
          clearTimeout(0);
          let v_e_33629 = "";
          for (let v_t_33630 = 2; v_t_33630 < 10; ++v_t_33630) v_e_33629 += String.fromCharCode(v_i_33628[v_t_33630]);
          v_t_33627({
            bd_num: v_e_33629,
            fw: v_i_33628[17]
          });
        });
      });
    },
    I7: function () {
      return this.c9;
    },
    d9: function (v_i_33631) {
      for (let v_t_33632 = 0; v_t_33632 < 6; ++v_t_33632) void 0 === v_i_33631[v_t_33632] ? (this.f9[3 + 3 * v_t_33632] = 0, this.f9[3 + 3 * v_t_33632 + 1] = 0, this.f9[3 + 3 * v_t_33632 + 2] = 0) : (this.f9[3 + 3 * v_t_33632] = mathRound(v_i_33631[v_t_33632][2] / 255 * 254), this.f9[3 + 3 * v_t_33632 + 1] = mathRound(v_i_33631[v_t_33632][0] / 255 * 254), this.f9[3 + 3 * v_t_33632 + 2] = mathRound(v_i_33631[v_t_33632][1] / 255 * 254));
    }
  }, v_xs_28002.prototype = {
    ue: async function () {
      return !!this.M7.qu(this.P7, {
        N7: 115200,
        H7: 8,
        U7: 0,
        j7: 0,
        J7: !1
      }) && (setInterval(() => {
        for (; this.M7._t(););
      }, 1e3), this.Mt(), !0);
    },
    V7: function () {
      this.M7.V7();
    },
    gS: function (v_t_33633) {
      return window.t.o(v_t_33633);
    },
    pS: function (v_t_33634) {
      this.M7.Xu(this.gS(v_t_33634));
    },
    Mt: function () {
      this.M7.Xu(new Uint8Array([27, 11]));
    },
    mS: function () {
      this.M7.Xu(new Uint8Array([27, 12]));
    },
    kS: function (v_t_33635) {
      this.M7.Xu(new Uint8Array([27, 32, v_t_33635]));
    },
    bS: function (v_t_33636) {
      this.M7.Xu(new Uint8Array([27, 33, v_t_33636 ? 1 : 0]));
    },
    yS: function (v_t_33637) {
      this.M7.Xu(new Uint8Array([27, 34, v_t_33637 >> 8, v_t_33637]));
    },
    AS: function (v_t_33638, v_i_33639) {
      this.M7.Xu(new Uint8Array([27, 48, v_t_33638 >> 8, v_t_33638, v_i_33639 >> 3]));
    },
    SS: function (v_t_33640, v_i_33641, v_e_33642, v_n_33643) {
      this.M7.Xu(new Uint8Array([27, 64, v_t_33640 >> 8, v_t_33640, v_i_33641 >> 3, v_e_33642 >> 8, v_e_33642, v_n_33643 >> 3]));
    },
    xS: function (v_t_33644) {
      this.M7.Xu(new Uint8Array([27, 65, v_t_33644]));
    },
    TS: function (v_t_33645) {
      let v_i_33646 = this.gS(v_t_33645);
      128 < v_i_33646.byteLength && (v_i_33646 = v_i_33646.subarray(0, 80));
      v_t_33645 = new Uint8Array(v_i_33646.byteLength + 3);
      v_t_33645[0] = 27, v_t_33645[1] = 80, v_t_33645[2] = v_i_33646.byteLength, v_t_33645.set(v_i_33646, 3), this.M7.Xu(v_t_33645);
    },
    CS: function () {
      this.M7.Xu(new Uint8Array([27, 81]));
    },
    RS: function () {
      this.M7.Xu(new Uint8Array([27, 82]));
    },
    IS: function (v_t_33647, v_i_33648, v_e_33649, v_n_33650, v_r_33651) {
      var v_s_33652 = v_r_33651.byteLength + 8;
      this.wS && this.wS.byteLength === v_s_33652 || (this.wS = new Uint8Array(v_s_33652)), v_i_33648 % 8 || v_n_33650 % 8 || (this.wS[0] = 27, this.wS[1] = 46, this.wS[2] = v_t_33647 >> 8, this.wS[3] = v_t_33647, this.wS[4] = v_i_33648 >> 3, this.wS[5] = v_e_33649 >> 8, this.wS[6] = v_e_33649, this.wS[7] = (v_i_33648 >> 3) + (v_n_33650 >> 3) - 1, this.wS.set(v_r_33651, 8), this.M7.Xu(this.wS));
    },
    Ok: function (v_i_33653) {
      if (v_i_33653) {
        this.mS(), this.RS(), 1 !== v_i_33653.MS && 2 !== v_i_33653.MS ? (this.SS(0, 0, 0, 0), this.TS("")) : (this.SS(0, 16 * v_i_33653.MS - 16, 160, 16 * v_i_33653.MS), this.TS(v_i_33653.ES[v_i_33653.MS - 1] || ""));
        for (let v_t_33654 = 1; v_t_33654 < 3; ++v_t_33654) v_i_33653.MS !== v_t_33654 && (this.AS(0, 16 * v_t_33654 - 16), this.pS(v_i_33653.ES[v_t_33654 - 1] || ""));
        this.CS();
      } else this.mS(), this.SS(0, 0, 0, 0), this.TS("");
    },
    LS: function () {
      this.mS(), this.IS(0, 0, 160, 32, new Uint8Array(640).fill(255));
    }
  };