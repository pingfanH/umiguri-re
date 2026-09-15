// game: 语句 126 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Rs_28007.prototype = {
    ue: async function () {
      if (!(await this.M7.ue())) return !1;
      await this.M7.U9(0, this.K9), await this.M7.U9(1, this.Y9);
      let v_l_33716 = 0,
        v_c_33717 = !1;
      const v_u_33718 = async () => {
        let v_i_33719 = 0,
          v_e_33720 = 0,
          v_n_33721 = 0,
          v_r_33722 = !1;
        for (var v_t_33723 = performance.now(); this.Z9;) {
          var v_s_33724 = this.Z9,
            v_a_33725 = (v_n_33721 = 1 === this.US ? (v_i_33719 = 0, v_e_33720 = 0, 1 & v_l_33716 ? 0 : 255) : (v_i_33719 = 255, v_e_33720 = 255), await this.M7.O9());
          if (this.Z9 !== v_s_33724) break;
          if (0 === v_a_33725) break;
          if (10001 === v_a_33725) {
            await this.M7.PS(), 1 === this.US ? await this.M7.j9(2) : await this.M7.j9(3);
            break;
          }
          if (2 === v_a_33725.Fi) {
            var v_o_33726 = await this.M7.mC(1 === this.US ? 3 : 34996);
            if (!v_o_33726) break;
            v_a_33725.w0 = v_o_33726.w0, v_a_33725.V9 = v_o_33726.V9;
          }
          this.GS && this.GS(1), this.M7.T7(0, 0, 0);
          let v_t_33727 = null;
          if (1 === this.US ? v_t_33727 = await this.M7.BS(v_a_33725) : this.US === v_Ps_28006 && (v_t_33727 = await this.M7.W9(v_a_33725)), this.Z9 !== v_s_33724) break;
          this.GS && this.GS(2), v_r_33722 = !0, v_n_33721 = null === v_t_33727 ? (this.Z9(v_Is_28005), v_i_33719 = 255, v_e_33720 = 0) : (this.Z9(v_t_33727), v_i_33719 = 0, v_e_33720 = 0, 255), this.Z9 = void 0, this.GS = void 0, this.US === v_Ps_28006 && (await this.M7.PS(), await this.M7.J9());
          break;
        }
        this.xC && (await this.M7.J9(), this.xC = !1);
        v_t_33723 = performance.now() - v_t_33723;
        (!v_c_33717 || v_i_33719 || v_e_33720 || v_n_33721) && this.M7.T7(v_i_33719, v_e_33720, v_n_33721), v_c_33717 = 0 === v_i_33719 && 0 === v_e_33720 && 0 === v_n_33721, ++v_l_33716, v_uo_28102(v_u_33718, (v_r_33722 ? 2e3 : 500) - v_t_33723);
      };
      return v_uo_28102(v_u_33718, 500), !0;
    },
    V7: function () {
      this.M7.V7();
    },
    HS: function (v_t_33728) {
      this.NS = v_t_33728;
    },
    jS: function () {
      this.NS && (this.NS.bS(!0), this.NS.kS(4), this.oS());
    },
    oS: function () {
      this.NS && this.NS.Ok({
        ES: ["電子決済使えません", "交通系     "],
        MS: 2
      });
    },
    eS: function (v_t_33729) {
      this.NS && this.NS.Ok({
        ES: ["カードをタッチしてください     ", "交通系 支払  ¥" + v_t_33729],
        MS: 1
      });
    },
    rS: function (v_t_33730) {
      this.NS && this.NS.Ok({
        ES: ["交通系支払処理中…", "交通系 支払  ¥" + v_t_33730],
        MS: 0
      });
    },
    sS: function () {
      this.NS && this.NS.Ok({
        ES: ["", "このカードはご利用できません     "],
        MS: 2
      });
    },
    lS: function (v_t_33731) {
      this.NS && (this.NS.mS(), this.NS.RS(), void 0 !== v_t_33731 ? this.NS.Ok({
        ES: ["", "交通系 残高  ¥" + v_t_33731],
        MS: 0
      }) : this.NS.Ok({
        ES: ["交通系 残高照会  カードをタッチしてください     ", ""],
        MS: 1
      }));
    },
    dS: function () {
      this.NS && this.NS.Ok();
    },
    hS: function () {
      this.NS && this.NS.LS();
    },
    _S: function (v_t_33732) {
      switch (v_t_33732) {
        case 1:
          this.M7.T7(255, 0, 0);
          break;
        case 2:
          this.M7.T7(0, 255, 0);
          break;
        case 3:
          this.M7.T7(0, 0, 255);
          break;
        case 4:
          this.M7.T7(255, 255, 255);
          break;
        default:
          this.M7.T7(0, 0, 0);
      }
    },
    R9: async function (v_t_33733) {
      return this._itn_isWaitingCard && this.C9(), this.GS = v_t_33733, this.US = v_Ps_28006, (await this.M7.j9(3)) ? (this.GS && this.GS(0), new Promise(v_t_33734 => {
        this.Z9 = v_t_33734;
      })) : v_Is_28005;
    },
    iS: async function (v_t_33735) {
      return this._itn_isWaitingCard && this.C9(), this.US = 1, this.GS = v_t_33735, (await this.M7.j9(2)) ? (this.GS && this.GS(0), new Promise(v_t_33736 => {
        this.Z9 = v_t_33736;
      })) : v_Is_28005;
    },
    C9: function () {
      this.Z9 && !this.xC && (this.GS && this.GS(2), this.Z9(v_Ts_28004), this.Z9 = void 0, this.GS = void 0, this.xC = !0);
    }
  }, v_Rs_28007.Q9 = "0000-0000-0000-0000-0000", v_Rs_28007.Ky = "00000000000000000000", v_Rs_28007.q9 = function (v_t_33737) {
    v_t_33737 = v_t_33737.replace(/\s/g, "");
    return 12 !== v_t_33737.length ? new Uint8Array([0, 0, 0, 0, 0, 0]) : new Uint8Array([v_Ea_28065(v_t_33737.substr(0, 2)), v_Ea_28065(v_t_33737.substr(2, 2)), v_Ea_28065(v_t_33737.substr(4, 2)), v_Ea_28065(v_t_33737.substr(6, 2)), v_Ea_28065(v_t_33737.substr(8, 2)), v_Ea_28065(v_t_33737.substr(10, 2))]);
  }, v_Rs_28007.E9 = function (v_t_33738, v_i_33739) {
    return v_t_33738 && v_t_33738.buffer && 10 === v_t_33738.byteLength ? v_i_33739 ? v_Xa_28081(v_t_33738[0].toString(16), 2, "0") + v_Xa_28081(v_t_33738[1].toString(16), 2, "0") + "-" + v_Xa_28081(v_t_33738[2].toString(16), 2, "0") + v_Xa_28081(v_t_33738[3].toString(16), 2, "0") + "-XXXX-XXXX-XXXX" : v_Xa_28081(v_t_33738[0].toString(16), 2, "0") + v_Xa_28081(v_t_33738[1].toString(16), 2, "0") + "-" + v_Xa_28081(v_t_33738[2].toString(16), 2, "0") + v_Xa_28081(v_t_33738[3].toString(16), 2, "0") + "-" + v_Xa_28081(v_t_33738[4].toString(16), 2, "0") + v_Xa_28081(v_t_33738[5].toString(16), 2, "0") + "-" + v_Xa_28081(v_t_33738[6].toString(16), 2, "0") + v_Xa_28081(v_t_33738[7].toString(16), 2, "0") + "-" + v_Xa_28081(v_t_33738[8].toString(16), 2, "0") + v_Xa_28081(v_t_33738[9].toString(16), 2, "0") : v_Rs_28007.Q9;
  }, v_Rs_28007.Py = function (v_t_33740) {
    return v_t_33740 && v_t_33740.buffer && 10 === v_t_33740.byteLength ? v_Xa_28081(v_t_33740[0].toString(16), 2, "0") + v_Xa_28081(v_t_33740[1].toString(16), 2, "0") + v_Xa_28081(v_t_33740[2].toString(16), 2, "0") + v_Xa_28081(v_t_33740[3].toString(16), 2, "0") + v_Xa_28081(v_t_33740[4].toString(16), 2, "0") + v_Xa_28081(v_t_33740[5].toString(16), 2, "0") + v_Xa_28081(v_t_33740[6].toString(16), 2, "0") + v_Xa_28081(v_t_33740[7].toString(16), 2, "0") + v_Xa_28081(v_t_33740[8].toString(16), 2, "0") + v_Xa_28081(v_t_33740[9].toString(16), 2, "0") : v_Rs_28007.Ky;
  }, v_Ls_28008.prototype = {
    ue: async function () {
      return addEventListener("keydown", v_t_33741 => {
        v_t_33741.ctrlKey && 120 <= v_t_33741.keyCode && v_t_33741.keyCode <= 124 && this.Z9 && this.US === v_Ps_28006 && (v_t_33741 = v_t_33741.keyCode - 120, this.Z9(this.ty[v_t_33741]), this.Z9 = void 0);
      }), !0;
    },
    V7: function () {},
    HS: function (v_t_33742) {},
    jS: function () {},
    oS: function () {},
    eS: function (v_t_33743) {},
    rS: function (v_t_33744) {},
    sS: function () {},
    lS: function (v_t_33745) {},
    dS: function () {},
    hS: function () {},
    _S: function (v_t_33746) {},
    R9: async function () {
      return this.US = v_Ps_28006, new Promise(v_t_33747 => {
        this.Z9 = v_t_33747;
      });
    },
    iS: async function () {
      return this.US = 1, new Promise(v_t_33748 => {
        this.Z9 = v_t_33748;
      });
    },
    C9: function () {
      this.Z9 && (this.Z9(v_Ts_28004), this.Z9 = void 0);
    }
  };