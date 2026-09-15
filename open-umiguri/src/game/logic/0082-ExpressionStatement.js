// game: 语句 82 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_yr_27944.prototype = {
    yI: function (v_t_32671) {
      var v_i_32672 = v_be_27857.Pp.find(v_t_32673 => v_t_32673.w0 === this.ee);
      return !!v_i_32672 && null !== v_i_32672.meta[this.te] && (v_t_32671.yP.push({
        Pp: v_i_32672,
        p0: this.te
      }), !0);
    }
  }, v_Sr_27945.prototype = {
    yI: function (v_e_32674) {
      let v_n_32675 = 0;
      for (const v_s_32677 of v_be_27857.Pp) if (null === v_s_32677.meta[4]) for (let v_i_32678 = 0; v_i_32678 < 5; ++v_i_32678) v_e_32674.kI && -1 !== v_e_32674.yP.findIndex(v_t_32679 => v_t_32679.Pp.w0 === v_s_32677.w0 && v_t_32679.p0 === v_i_32678) || null !== v_s_32677.meta[v_i_32678] && v_s_32677.meta[v_i_32678].k5 === this.p9 && ++v_n_32675;
      if (v_n_32675) {
        var v_r_32676 = mathFloor(mathRandom() * v_n_32675);
        let v_t_32680 = 0;
        for (const v_a_32681 of v_be_27857.Pp) if (null === v_a_32681.meta[4]) for (let v_i_32682 = 0; v_i_32682 < 5; ++v_i_32682) if ((!v_e_32674.kI || -1 === v_e_32674.yP.findIndex(v_t_32683 => v_t_32683.Pp.w0 === v_a_32681.w0 && v_t_32683.p0 === v_i_32682)) && null !== v_a_32681.meta[v_i_32682] && v_a_32681.meta[v_i_32682].k5 === this.p9) {
          if (v_r_32676 === v_t_32680) return v_e_32674.yP.push({
            Pp: v_a_32681,
            p0: v_i_32682
          }), !0;
          ++v_t_32680;
        }
      }
      return !1;
    }
  }, v_Ar_27946.prototype = {
    yI: function (v_i_32684) {
      let v_e_32685 = 0;
      for (const v_r_32687 of this.V2) v_i_32684.kI && -1 !== v_i_32684.yP.findIndex(v_t_32688 => v_t_32688.Pp.w0 === v_r_32687.ee && v_t_32688.p0 === v_r_32687.te) || ++v_e_32685;
      if (v_e_32685) {
        var v_n_32686 = mathFloor(mathRandom() * v_e_32685);
        let v_t_32689 = 0;
        for (const v_s_32690 of this.V2) if (!v_i_32684.kI || -1 === v_i_32684.yP.findIndex(v_t_32691 => v_t_32691.Pp.w0 === v_s_32690.ee && v_t_32691.p0 === v_s_32690.te)) {
          if (v_n_32686 === v_t_32689) return v_s_32690.yI(v_i_32684);
          ++v_t_32689;
        }
      }
      return !1;
    }
  }, v_xr_27947.prototype = {
    _I: function () {
      this.yP = [];
      for (let v_t_32692 = 0; v_t_32692 < 3; ++v_t_32692) if (!this.hI[v_t_32692].yI(this)) return !1;
      return !0;
    }
  };