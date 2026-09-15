// game: 语句 122 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Cs_28003.prototype = {
    ue: async function () {
      return !(!this.Z7.qu() || !(await this.Z7.vS(new Uint8Array([0, 0, 0, 98, 0]))) || !(await this.Z7.vS(new Uint8Array([0, 8, 0, 245, 0]))) || (this.T7(0, 0, 0), 0));
    },
    V7: function () {
      this.Z7.V7();
    },
    T7: function (v_t_33658, v_i_33659, v_e_33660) {
      this.Z7.Xu(new Uint8Array([0, 8, 0, 129, 3, v_t_33658, v_i_33659, v_e_33660]));
    },
    U9: async function (v_t_33661, v_i_33662) {
      let v_e_33663;
      switch (v_t_33661) {
        case 1:
          v_e_33663 = await this.Z7.q7(new Uint8Array([0, 0, 0, 84, 6, v_i_33662[0], v_i_33662[1], v_i_33662[2], v_i_33662[3], v_i_33662[4], v_i_33662[5]]));
          break;
        case 0:
          v_e_33663 = await this.Z7.q7(new Uint8Array([0, 0, 0, 80, 6, v_i_33662[0], v_i_33662[1], v_i_33662[2], v_i_33662[3], v_i_33662[4], v_i_33662[5]]));
      }
      return v_e_33663 && 0 === v_e_33663[4];
    },
    j9: async function (v_t_33664) {
      v_t_33664 = await this.Z7.vS(new Uint8Array([0, 0, 0, 64, 1, v_t_33664]));
      return v_t_33664 && 0 === v_t_33664[4];
    },
    J9: async function () {
      var v_t_33665 = await this.Z7.vS(new Uint8Array([0, 0, 0, 65, 0]));
      return v_t_33665 && 0 === v_t_33665[4];
    },
    PS: async function () {
      var v_t_33666 = await this.Z7.vS(new Uint8Array([0, 0, 0, 68, 0]));
      return v_t_33666 && 0 === v_t_33666[4];
    },
    O9: async function () {
      var v_t_33667 = await this.Z7.q7(new Uint8Array([0, 0, 0, 66, 0]), 350);
      return v_t_33667 ? 0 !== v_t_33667[4] ? 10001 : 7 === v_t_33667[5] ? {
        Fi: 1,
        w0: [v_t_33667[9], v_t_33667[10], v_t_33667[11], v_t_33667[12]]
      } : 19 === v_t_33667[5] ? {
        Fi: 2,
        w0: [v_t_33667[9], v_t_33667[10], v_t_33667[11], v_t_33667[12], v_t_33667[13], v_t_33667[14], v_t_33667[15], v_t_33667[16]],
        V9: [v_t_33667[17], v_t_33667[18], v_t_33667[19], v_t_33667[20], v_t_33667[21], v_t_33667[22], v_t_33667[23], v_t_33667[24]]
      } : 0 : 0;
    },
    W9: async function (v_t_33668) {
      var v_i_33669;
      return 0 === v_t_33668 ? null : 1 === v_t_33668.Fi ? (v_i_33669 = await this.Z7.q7(new Uint8Array([0, 0, 0, 85, 5, v_t_33668.w0[0], v_t_33668.w0[1], v_t_33668.w0[2], v_t_33668.w0[3], 3]))) && 0 === v_i_33669[4] && (v_i_33669 = await this.Z7.q7(new Uint8Array([0, 0, 0, 82, 5, v_t_33668.w0[0], v_t_33668.w0[1], v_t_33668.w0[2], v_t_33668.w0[3], 2]))) && 0 === v_i_33669[4] ? v_Cs_28003.X9(v_i_33669.subarray(6, 22)) : null : 2 === v_t_33668.Fi && null === (await this.DS(v_t_33668)) && (v_i_33669 = await this.vC(v_t_33668, 11, 0)) ? v_Cs_28003.z9(v_i_33669.yc) : null;
    },
    BS: async function (v_i_33670) {
      var v_t_33671;
      return 2 === v_i_33670.Fi && (v_t_33671 = await this.DS(v_i_33670)) && v_t_33671.includes(3) ? {
        nS: v_i_33670,
        cS: async () => {
          var v_t_33672 = await this.vC(v_i_33670, 139, 0);
          return v_t_33672 ? v_t_33672.yc[12] << 8 | v_t_33672.yc[11] : null;
        },
        aS: async () => {
          await this.PS(), await this.J9();
        }
      } : null;
    },
    wC: async function (v_t_33673, v_i_33674, v_e_33675) {
      var v_n_33676 = v_e_33675 ? v_e_33675.length : 0,
        v_r_33677 = new Uint8Array(23 + v_n_33676),
        v_i_33674 = (v_r_33677[0] = 0, v_r_33677[1] = 0, v_r_33677[2] = 0, v_r_33677[3] = 113, v_r_33677[4] = 18 + v_n_33676, v_r_33677[5] = v_t_33673[0], v_r_33677[6] = v_t_33673[1], v_r_33677[7] = v_t_33673[2], v_r_33677[8] = v_t_33673[3], v_r_33677[9] = v_t_33673[4], v_r_33677[10] = v_t_33673[5], v_r_33677[11] = v_t_33673[6], v_r_33677[12] = v_t_33673[7], v_r_33677[13] = 10 + v_n_33676, v_r_33677[14] = v_i_33674, v_r_33677[15] = v_t_33673[0], v_r_33677[16] = v_t_33673[1], v_r_33677[17] = v_t_33673[2], v_r_33677[18] = v_t_33673[3], v_r_33677[19] = v_t_33673[4], v_r_33677[20] = v_t_33673[5], v_r_33677[21] = v_t_33673[6], v_r_33677[22] = v_t_33673[7], v_n_33676 && v_r_33677.set(v_e_33675, 23), await this.Z7.q7(v_r_33677));
      return v_i_33674 && 0 === v_i_33674[4] ? {
        gC: v_i_33674[7],
        yc: v_i_33674.subarray(16)
      } : null;
    },
    mC: async function (v_t_33678) {
      var v_t_33678 = await this.Z7.q7(new Uint8Array([0, 0, 0, 113, 14, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, v_t_33678 >> 8, 255 & v_t_33678, 1, 15]), 400);
      return v_t_33678 && 0 === v_t_33678[4] ? {
        pC: (v_t_33678 = v_t_33678.subarray(8))[16] << 8 | v_t_33678[17],
        w0: [v_t_33678[0], v_t_33678[1], v_t_33678[2], v_t_33678[3], v_t_33678[4], v_t_33678[5], v_t_33678[6], v_t_33678[7]],
        V9: [v_t_33678[8], v_t_33678[9], v_t_33678[10], v_t_33678[11], v_t_33678[12], v_t_33678[13], v_t_33678[14], v_t_33678[15]]
      } : 0;
    },
    vC: async function (v_t_33679, v_i_33680, v_e_33681) {
      var v_n_33682 = await this.wC(v_t_33679.w0, 6, new Uint8Array([1, 255 & v_i_33680, v_i_33680 >> 8 & 255, 1, 128, v_e_33681]));
      if (!v_n_33682) return null;
      if (v_n_33682.yc[0] || v_n_33682.yc[1]) return null;
      var v_r_33683 = v_n_33682.yc[0],
        v_s_33684 = [];
      for (let v_t_33685 = 0; v_t_33685 < v_r_33683; ++v_t_33685) v_s_33684.push(v_n_33682.yc[1 + 2 * v_t_33685] << 8 | v_n_33682.yc[2 + 2 * v_t_33685]);
      return {
        kC: v_n_33682.yc[0],
        bC: v_n_33682.yc[1],
        yc: v_n_33682.yc.subarray(3, 3 + 16 * v_n_33682.yc[2])
      };
    },
    yC: async function (v_t_33686, v_i_33687, v_e_33688, v_n_33689) {
      var v_r_33690;
      return 16 === v_n_33689.byteLength && ((v_r_33690 = new Uint8Array(22))[0] = 1, v_r_33690[1] = 255 & v_i_33687, v_r_33690[2] = v_i_33687 >> 8 & 255, v_r_33690[3] = 1, v_r_33690[4] = 128, v_r_33690[5] = v_e_33688, v_r_33690.set(v_n_33689, 6), printBuffer(v_r_33690), !!(v_i_33687 = await this.wC(v_t_33686.w0, 8, v_r_33690))) && !v_i_33687.yc[0] && !v_i_33687.yc[1];
    },
    AC: async function (v_t_33691, v_i_33692) {
      v_t_33691 = await this.wC(v_t_33691.w0, 10, new Uint8Array([255 & v_i_33692, v_i_33692 >> 8 & 255]));
      return v_t_33691 ? v_t_33691.yc[1] << 8 | v_t_33691.yc[0] : null;
    },
    DS: async function (v_t_33693) {
      var v_i_33694 = await this.wC(v_t_33693.w0, 12);
      if (!v_i_33694) return null;
      var v_e_33695 = v_i_33694.yc[0],
        v_n_33696 = [];
      for (let v_t_33697 = 0; v_t_33697 < v_e_33695; ++v_t_33697) v_n_33696.push(v_i_33694.yc[1 + 2 * v_t_33697] << 8 | v_i_33694.yc[2 + 2 * v_t_33697]);
      return v_n_33696;
    },
    SC: async function (v_t_33698) {
      var v_i_33699 = [];
      let v_e_33700 = 0;
      for (;;) {
        if (99 < v_e_33700) break;
        var v_n_33701 = await this.AC(v_t_33698, ++v_e_33700);
        null !== v_n_33701 && 65535 !== v_n_33701 && 62 & v_n_33701 && v_i_33699.push(v_n_33701);
      }
      return v_i_33699;
    }
  }, v_Cs_28003.X9 = function (v_t_33702) {
    return v_t_33702 && v_t_33702.buffer && 16 === v_t_33702.byteLength ? new Uint8Array([v_t_33702[6], v_t_33702[7], v_t_33702[8], v_t_33702[9], v_t_33702[10], v_t_33702[11], v_t_33702[12], v_t_33702[13], v_t_33702[14], v_t_33702[15]]) : null;
  }, v_Cs_28003.z9 = function (v_e_33703) {
    if (!v_e_33703 || !v_e_33703.buffer || 16 !== v_e_33703.byteLength) return null;
    for (let v_t_33707 = 0; v_t_33707 < v_e_33703.byteLength; ++v_t_33707) v_e_33703[v_t_33707] = 165 ^ v_pi_27817[2048 + v_e_33703[v_t_33707]];
    var v_i_33704 = 7 + (v_e_33703[15] >>> 4);
    let v_n_33705 = v_e_33703[15] + 5 * v_i_33704;
    for (let v_t_33708 = 0; v_t_33708 < v_i_33704; ++v_t_33708) {
      v_n_33705 -= 5;
      let v_i_33709 = v_e_33703[14];
      for (let v_t_33710 = 0; v_t_33710 < 15; ++v_t_33710) {
        var v_r_33706 = v_e_33703[v_t_33710];
        v_e_33703[v_t_33710] = v_e_33703[v_t_33710] >>> 5 | (31 & v_i_33709) << 3, v_i_33709 = v_r_33706;
      }
      for (let v_t_33711 = 0; v_t_33711 < 15; ++v_t_33711) v_e_33703[v_t_33711] = 165 ^ v_pi_27817[v_n_33705 % 8 * 256 + v_e_33703[v_t_33711]];
    }
    return new Uint8Array([v_e_33703[6], v_e_33703[7], v_e_33703[8], v_e_33703[9], v_e_33703[10], v_e_33703[11], v_e_33703[12], v_e_33703[13], v_e_33703[14], v_e_33703[15]]);
  };