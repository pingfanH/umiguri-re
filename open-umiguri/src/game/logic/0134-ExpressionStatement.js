// game: 语句 134 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Hs_28017.prototype = {
    sx: function () {
      return this.nx;
    },
    Fx: async function () {
      this.zS = null, this.tx = !0;
      var v_t_33840 = await this.NC();
      return v_t_33840 !== v_Ms_28009 ? (this.zS = null, this.tx = !1, this.Nx = null, v_t_33840) : v_Ms_28009;
    },
    Bx: async function (v_t_33841) {
      this.zS = v_t_33841, this.tx = !1;
      v_t_33841 = await this.NC();
      return v_t_33841 !== v_Ms_28009 ? (this.zS = null, this.tx = !1, this.Nx = null, v_t_33841) : v_Ms_28009;
    },
    Gx: async function () {
      if (!this.Gi()) return v_Es_28010;
      for (this.zS = null, this.tx = !1, this.Nx = null, this.Ox = [], this.ix.clear(), this.Ix.clear(), this._x = 100, this.sP = v__a_28043, this.aP = v_ma_28049; this.BC.length;) this.BC.pop().aS();
      await this.LC.UC();
      return this.LC.aS(), this.LC = null, v_Ms_28009;
    },
    Ux: async function (v_t_33842, v_i_33843) {
      return !this.Gi() || (this.Nx = null, await this.LC.HC(v_t_33842, v_i_33843)) ? v_Es_28010 : (this.Nx = v_t_33842, this.jC(), v_Ms_28009);
    },
    Dx: async function () {
      return !this.Gi() || (this.Nx = null, await this.LC.OC()) ? v_Es_28010 : (this.Px = 0, v_Ms_28009);
    },
    Sx: async function (v_t_33844, v_i_33845) {
      return !this.Gi() || (await this.LC.VC(v_t_33844, v_i_33845)) ? v_Es_28010 : (this.jC(), v_Ms_28009);
    },
    Ex: async function () {
      return !this.Gi() || (await this.LC.WC()) ? v_Es_28010 : (this.Px = 0, v_Ms_28009);
    },
    xx: async function (v_t_33846, v_i_33847) {
      return !this.Gi() || (await this.LC.XC(v_t_33846 ? v_ha_28044 : v__a_28043, v_i_33847)) ? v_Es_28010 : v_Ms_28009;
    },
    Lx: async function (v_t_33848) {
      return !this.Gi() || (await this.LC.XC(v_t_33848, 0)) ? v_Es_28010 : v_Ms_28009;
    },
    tP: async function (v_t_33849) {
      return !this.Gi() || (await this.LC.oP(v_t_33849)) ? v_Es_28010 : v_Ms_28009;
    },
    sC: function (v_t_33850, v_i_33851, v_e_33852, v_n_33853) {
      return this.Gi() ? (this.LC.zC(v_t_33850, v_i_33851, v_e_33852, v_n_33853), v_Ms_28009) : v_Es_28010;
    },
    rC: function (v_t_33854, v_i_33855) {
      return this.Gi() ? (this.LC.zC(4294967295, v_t_33854, v_i_33855, []), v_Ms_28009) : v_Es_28010;
    },
    QS: async function (v_t_33856) {
      return !this.Gi() || 65534 === (v_t_33856 = await this.LC.KC(v_t_33856)) ? null : (this._x = v_t_33856, this._x);
    },
    WP: async function () {
      return this.Gi() ? (await this.LC.tR(), v_Ms_28009) : v_Es_28010;
    },
    cI: async function (v_t_33857, v_i_33858) {
      var v_e_33859;
      return this.Gi() ? (v_e_33859 = performance.now(), this.RI + 1e3 > v_e_33859 ? -12 : (this.RI = v_e_33859, await this.LC.II(this.Px, v_t_33857, v_i_33858), v_Ms_28009)) : v_Es_28010;
    },
    lL: async function (v_t_33860) {
      var v_i_33861;
      return this.Gi() ? (v_i_33861 = performance.now(), this.RI + 1e3 > v_i_33861 ? -12 : (this.RI = v_i_33861, await this.LC.fL(this.Px, v_t_33860), v_Ms_28009)) : v_Es_28010;
    },
    fC: async function (v_i_33862) {
      await v_fo_28103(100 * mathRandom() + 16);
      let v_t_33863 = this.BC.find(v_t_33864 => v_t_33864.YC === v_i_33862);
      return v_t_33863 ? (await v_t_33863.qu()) ? v_t_33863 : null : (await (v_t_33863 = this.qC(v_i_33862, !1)).qu()) ? v_t_33863 : null;
    },
    uI: function (v_i_33865) {
      return -1 !== this.BC.findIndex(v_t_33866 => v_t_33866.YC === v_i_33865);
    },
    uC: function (v_t_33867) {
      v_t_33867 ? this.GC = this.Px : this.GC && (v_t_33867 = this.GC, this.GC = 0, this.ZC(v_t_33867));
    },
    qC: function (v_i_33868, v_t_33869) {
      v_t_33869 = new v_Ia_28059(this.LC, v_i_33868, v_t_33869);
      return v_t_33869.$C = (v_i_33870 => {
        this.BC = this.BC.filter(v_t_33871 => v_t_33871 !== v_i_33870);
      }).bind(this), this.BC.push(v_t_33869), v_t_33869.PT.push(v_t_33872 => {
        v_t_33872 && this.iT(v_aa_28037, {
          nx: v_i_33868
        });
      }), v_t_33869;
    },
    NC: async function () {
      if (this.LC = new v_Pa_28060(), v_Bs_28013.By(await this.LC.qu(this.Yy, this.P7, !1))) return this.QC();
      let v_t_33873;
      return (v_t_33873 = this.IC ? await this.LC.tT(this.IC.qy, this.IC.Zy, this.zS || 0) : await this.LC.tT("", "", this.zS || 0)).wP ? 1 === v_t_33873.wP ? this.QC(v_Ds_28011) : 16 === v_t_33873.wP ? this.QC(-11) : 17 === v_t_33873.wP ? this.QC(v_Fs_28012) : this.QC() : (this.zS = v_t_33873.zS || 0, this.nx = v_t_33873.nx || 0, this.LC.vx(this.iT.bind(this)), audioFontHub.B3(), v_Ms_28009);
    },
    QC: function (v_t_33874) {
      return this.LC && this.LC.aS(), this.LC = null, v_t_33874 || v_Es_28010;
    },
    iR: async function (v_t_33875) {
      v_t_33875 = this.ix.get(v_t_33875);
      if (!v_t_33875) return !1;
      if (this.o1) return !(v_t_33875.QP = !0);
      v_t_33875.QP = !1, v_t_33875.ux = "cchara:" + v_t_33875.nx;
      var v_i_33876,
        v_e_33877 = await v_oe_27649.fC(v_t_33875.nx);
      return !!v_e_33877 && !!(v_e_33877 = await v_e_33877._C(v_ba_28052)) && ((v_i_33876 = v_ae_27643.Yt.Zt[v_t_33875.ux]) && (delete v_ae_27643.Yt.Zt[v_t_33875.ux], v_i_33876.free()), v_ae_27643.Yt.Zt[v_t_33875.ux] = await v_To_28118(v_e_33877.Yu, v_e_33877.eT & v_xa_28056, !0), !0);
    },
    eR: async function (v_t_33878) {
      v_t_33878 = this.Ix.get(v_t_33878);
      if (!v_t_33878) return !1;
      if (this.o1) return !(v_t_33878.$P = !0);
      v_t_33878.$P = !1;
      var v_i_33879 = await v_oe_27649.fC(v_t_33878.nx);
      return !!v_i_33879 && !!(v_i_33879 = await v_i_33879._C(v_Sa_28054)) && (v_ae_27643.Yt.Zt[v_t_33878.Jx] = await v_To_28118(v_i_33879.Yu, v_i_33879.eT & v_xa_28056, !1), !0);
    },
    iT: function (v_i_33880, v_e_33881) {
      if (v_i_33880 === v_js_28019) {
        var v_t_33882 = v_e_33881.Hx;
        this.ix.set(v_e_33881.Hx.nx, v_t_33882), this.qC(v_e_33881.Hx.nx, !1), v_e_33881.Hx.nx !== v_oe_27649.sx() && v_Ia_28059.LI(v_e_33881.Hx.nx) && v_Fe_28101(async () => {
          for (let v_t_33893 = 0; v_t_33893 < 10 && !this.fC(v_e_33881.Hx.nx); ++v_t_33893) await v_fo_28103(500);
        });
      } else if (v_i_33880 === v_aa_28037) v_e_33881.nx !== v_oe_27649.sx() && this.iR(v_e_33881.nx);else if (v_i_33880 === v_Vs_28021) {
        v_t_33882 = new v_Gs_28015();
        v_t_33882.nx = v_e_33881.nx, v_t_33882.yx = v_e_33881.yx, v_t_33882.ng = v_e_33881.ng, v_t_33882.Jx = "cjkt:" + v_t_33882.yx, v_t_33882.Mx = v_e_33881.nx === v_oe_27649.sx(), this.Ix.set(v_t_33882.yx, v_t_33882), v_e_33881.nx === v_oe_27649.sx() ? (this.Px = v_e_33881.yx, this.jC(), this.nT(v_t_33882.nx)) : (v_ae_27643.Yt.Zt[v_t_33882.Jx] = v_ae_27643.Yt.Mf["textures\\txDummyJacket.dds"], this.eR(v_t_33882.yx));
      } else if (v_i_33880 === v_Xs_28023) this.GC !== v_e_33881.yx && (this.nT(v_e_33881.nx), this.rT(v_e_33881.nx, v_e_33881.ru, v_e_33881.te), v_e_33881.nx === v_oe_27649.sx()) && (this.Px = v_e_33881.yx);else if (v_i_33880 === v_zs_28024) this.GC !== v_e_33881.yx && this.sT(v_e_33881.nx);else if (v_i_33880 === v_Zs_28028) this.rT(v_e_33881.nx, v_e_33881.ru, v_e_33881.te);else if (v_i_33880 === v_Ys_28026) this.sP = v_e_33881.n1, this.DC === v_e_33881.n1 && (v_e_33881.n1 === v_ha_28044 && this.aT(), this.FC) && (this.FC(!0), this.FC = void 0);else if (v_i_33880 === v_Qs_28030) this.aP = v_e_33881.n1, this.nP === v_e_33881.n1 && this.rP && (this.rP(!0), this.rP = void 0);else if (v_i_33880 === v_qs_28027) {
        this.aC = v_e_33881.oT;
        for (var v_n_33883 of v_e_33881.lT) {
          var v_r_33884 = this.tC(v_n_33883.nx);
          v_r_33884 && (v_r_33884.Sr = v_n_33883.Sr, v_r_33884.ru = v_n_33883.ru);
        }
        if (2 <= this.Ox.length) {
          var v_s_33885 = this.Ox.concat();
          v_s_33885.sort((v_t_33898, v_i_33899) => v_i_33899.Sr - v_t_33898.Sr);
          let v_i_33894 = 0;
          for (let v_t_33900 = 0; v_t_33900 < v_s_33885.length; ++v_t_33900) v_t_33900 && v_s_33885[v_t_33900 - 1].Sr !== v_s_33885[v_t_33900].Sr && (v_i_33894 = v_t_33900), v_s_33885[v_t_33900].iC = v_i_33894;
          let v_e_33895 = 0,
            v_n_33896 = 0,
            v_r_33897 = 0;
          for (let v_t_33901 = 0; v_t_33901 < v_s_33885.length; ++v_t_33901) v_e_33895 !== v_s_33885[v_t_33901].iC && (v_r_33897 = v_n_33896, v_n_33896 = v_t_33901, v_e_33895 = v_s_33885[v_t_33901].iC), 0 === v_t_33901 ? (v_s_33885[v_t_33901].nC = v_s_33885[v_t_33901].Sr - v_s_33885[v_t_33901 + 1].Sr, v_s_33885[v_t_33901].eC = v_s_33885[v_t_33901 + 1].iC) : (v_s_33885[v_t_33901].nC = v_s_33885[v_r_33897].Sr - v_s_33885[v_t_33901].Sr, v_s_33885[v_t_33901].eC = v_s_33885[v_r_33897].iC);
        }
      } else if (v_i_33880 === v_Ks_28025) {
        this.oC = v_e_33881.cT;
        for (var v_a_33886 of v_e_33881.lT) {
          var v_o_33887 = this.tC(v_a_33886.nx);
          v_o_33887 && (v_o_33887.Sr = v_a_33886.Sr);
        }
      } else if (v_i_33880 === v_$s_28029) this._x = v_e_33881.uT;else if (v_i_33880 === v_na_28034) {
        let v_t_33902 = !1;
        var v_l_33888,
          v_c_33889 = v_e_33881.fT;
        for (v_l_33888 of this.BC) if (v_l_33888.OI(v_i_33880, v_c_33889)) {
          v_t_33902 = !0;
          break;
        }
        if (!v_t_33902) return;
      } else if (v_i_33880 === v_ra_28035) {
        var v_u_33890,
          v_f_33891 = v_e_33881.fT;
        for (v_u_33890 of this.BC) if (v_u_33890.OI(v_i_33880, v_f_33891)) break;
      } else v_i_33880 === v_ta_28031 ? (v_t_33882 = v_e_33881.Hx).nx !== v_oe_27649.sx() && (v___33892 = this.ix.get(v_t_33882.nx)) && (v___33892.TC = v_t_33882.TC, v___33892.MC = v_t_33882.MC, v___33892.RC = v_t_33882.RC, this.iR(v_t_33882.nx)) : v_i_33880 === v_Js_28018 ? this.Gx() : v_i_33880 === v_ea_28033 && audioFontHub.cL(v_i_33880, v_e_33881);
      var v___33892;
      this.EC && this.EC(v_i_33880, v_e_33881), v_i_33880 === v_Ws_28022 ? this.ZC(v_e_33881.yx) : v_i_33880 === v_Os_28020 && ((v___33892 = this.ix.get(v_e_33881.nx)) && (v_t_33882 = v_ae_27643.Yt.Zt[v___33892.ux]) && (delete v_ae_27643.Yt.Zt[v___33892.ux], v_t_33882.free()), this.ix.delete(v_e_33881.nx), this.GC) && (v___33892 = this.Ox.find(v_t_33903 => v_t_33903.Ae === v_e_33881.nx)) && (v___33892.eP = !0), this.EC && this.EC(v_sa_28036, {
        nx: v_e_33881.nx
      });
    },
    ZC: function (v_t_33904) {
      var v_i_33905, v_e_33906;
      this.GC !== v_t_33904 && ((v_i_33905 = this.Ix.get(v_t_33904)) && (v_e_33906 = v_ae_27643.Yt.Zt[v_i_33905.Jx]) && (delete v_ae_27643.Yt.Zt[v_i_33905.Jx], v_e_33906 !== v_ae_27643.Yt.Mf["textures\\txDummyJacket.dds"]) && v_e_33906.free(), this.Ix.delete(v_t_33904), this.Px === v_t_33904) && (this.Px = 0, this.Nx = null, this.sP = v__a_28043);
    },
    Gi: function () {
      return null !== this.zS;
    },
    vx: function (v_t_33907) {
      v_t_33907 && (this.EC = v_t_33907);
    },
    hx: function (v_t_33908) {
      v_t_33908 && this.EC === v_t_33908 && (this.EC = void 0);
    },
    jx: function (v_t_33909) {
      v_t_33909 = this.Ix.get(v_t_33909);
      return v_t_33909 ? ":/m" + v_t_33909.nx + "/" + v_t_33909.ng.w0 : null;
    },
    ZP: function (v_t_33910) {
      var v_i_33911 = this.o1;
      this.o1 = !!v_t_33910, v_i_33911 && !this.o1 && (this.ix.forEach((v_t_33912, v_i_33913) => {
        v_t_33912.QP && this.iR(v_t_33912.nx);
      }), this.Ix.forEach((v_t_33914, v_i_33915) => {
        v_t_33914.$P && this.eR(v_t_33914.yx);
      }));
    },
    Tx: function (v_t_33916) {
      return this.sP >= v_t_33916 || (this.DC = v_t_33916, new Promise(v_t_33917 => {
        this.FC = v_t_33917;
      }));
    },
    Cx: function (v_t_33918) {
      v_t_33918 === this.DC && (this.FC && this.FC(!1), this.FC = void 0);
    },
    iP: function (v_t_33919) {
      return this.aP >= v_t_33919 || (this.nP = v_t_33919, new Promise(v_t_33920 => {
        this.rP = v_t_33920;
      }));
    },
    lP: function (v_t_33921) {
      v_t_33921 === this.nP && (this.rP && this.rP(!1), this.rP = void 0);
    },
    aT: function () {
      this.aC = 0, this.oC = 0;
    },
    jC: function (v_t_33922) {
      this.Ox = [];
    },
    nT: function (v_t_33923) {
      this.Ox.push({
        Ae: v_t_33923,
        te: 0,
        Sr: 0,
        ru: 0,
        iC: 0,
        nC: 0,
        eC: 0,
        eP: !1
      });
    },
    sT: function (v_i_33924) {
      this.Ox = this.Ox.filter(v_t_33925 => v_t_33925.Ae !== v_i_33924);
    },
    rT: function (v_i_33926, v_t_33927, v_e_33928) {
      var v_n_33929 = this.Ox.find(v_t_33930 => v_t_33930.Ae === v_i_33926);
      v_n_33929 && (v_n_33929.ru = v_t_33927, v_n_33929.te = v_e_33928);
    },
    tC: function (v_i_33931) {
      return this.Ox.find(v_t_33932 => v_t_33932.Ae === v_i_33931);
    }
  };