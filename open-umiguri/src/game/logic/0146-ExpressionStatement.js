// game: 语句 146 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Ia_28059.prototype = {
    qu: function () {
      return new Promise(v_i_33949 => {
        this.L7 ? v_i_33949(!0) : this.PT.push(v_t_33950 => {
          v_i_33949(v_t_33950);
        });
      });
    },
    NT: async function (v_t_33951) {
      v_t_33951 = await this._C(v_t_33951);
      return v_t_33951 ? v_t_33951.Yu : null;
    },
    _C: function (v_n_33952, v_r_33953) {
      return new Promise(async v_i_33954 => {
        var v_t_33955 = ++this.IT;
        let v_e_33956 = new v_Ca_28057(v_t_33955, v_n_33952, v_t_33957 => v_i_33954(v_t_33957.Yu ? v_t_33957 : null));
        v_e_33956.gT = v_r_33953, this.MT.set(v_t_33955, v_e_33956), this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(10), this.AT.GT.hg(v_t_33955), this.AT.GT.Ag(v_n_33952), (await this.AT.HT()) ? (this.MT.delete(v_t_33955), v_i_33954(null)) : v_uo_28102(() => {
          v_e_33956.jP || (this.rR(v_e_33956), v_e_33956.A0 && v_e_33956.A0(v_e_33956));
        }, 5e3);
      });
    },
    rR: function (v_t_33958) {
      this.MT.has(v_t_33958.hT) && (this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(11), this.AT.GT.hg(v_t_33958.hT), this.MT.delete(v_t_33958.hT));
    },
    aS: function () {
      this.VI && this.kT.close();
    },
    WI: function () {
      this.VI && (this.kT = new RTCPeerConnection({
        iceServers: [{
          urls: "stun:stun.l.google.com:19302"
        }, {
          urls: "stun:stun1.l.google.com:19302"
        }, {
          urls: "stun:stun2.l.google.com:19302"
        }]
      }), this.bT = this.kT.createDataChannel("dat"), this.yT(), this.kT.onicecandidate = this.ST.bind(this), this.kT.onconnectionstatechange = this.xT.bind(this), this.kT.ondatachannel = this.CT.bind(this), this.kT.onnegotiationneeded = this.TT.bind(this));
    },
    TT: async function () {
      if (this.VI) try {
        this.RT = !0, await this.kT.setLocalDescription(), await this.jT();
      } catch (v_t_33959) {} finally {
        this.RT = !1;
      }
    },
    yT: function () {
      this.VI && (this.bT.onopen = this.JT.bind(this), this.bT.onclose = this.OT.bind(this), this.bT.onmessage = this.VT.bind(this));
    },
    jT: async function () {
      if (this.VI) return !!this.kT.localDescription && (this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(v_ka_28051), this.AT.GT.i3("utf-8"), this.AT.GT.gg(this.kT.localDescription.type), this.AT.GT.gg(this.kT.localDescription.sdp), !(await this.AT.HT()));
    },
    WT: async function (v_t_33960) {
      if (this.VI) return this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(2), this.AT.GT.i3("utf-8"), this.AT.GT.gg(JSON.stringify(v_t_33960)), !(await this.AT.HT());
    },
    ST: function (v_t_33961) {
      this.VI && v_t_33961.candidate && this.WT(v_t_33961.candidate);
    },
    xT: function (v_t_33962) {
      this.VI && this.kT;
    },
    pP: function () {
      !this.VI || this.L7 || (v_uo_28102(() => {
        if (this.PT.length) {
          for (var v_t_33963 of this.PT) v_t_33963(!0);
          this.PT = [];
        }
        this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(4), this.AT.HT();
      }, 250), this.L7 = !0);
    },
    CT: function (v_t_33964) {
      this.VI && this.kT && (this.bT = v_t_33964.channel, this.yT());
    },
    JT: function (v_t_33965) {
      this.VI && this.pP();
    },
    OT: function (v_t_33966) {
      if (this.VI && (this.bT = null, this.kT = null, this.$C)) {
        if (this.PT.length) {
          for (var v_i_33967 of this.PT) v_i_33967(!1);
          this.PT = [];
        }
        this.$C(this), this.$C = null;
      }
    },
    VT: async function (v_t_33968) {
      this.VI && this.XI(v_t_33968.data, 0);
    },
    _T: function (v_t_33969, v_e_33970) {
      if (v_e_33970.v3() !== this.YC) return v_e_33970.y3(-4), !1;
      if (this.kT) {
        var v_i_33971 = v_e_33970.o3();
        if (v_i_33971 === v_ka_28051) {
          v_e_33970.i3("utf-8");
          let v_t_33975 = v_e_33970.fg();
          var v_n_33972 = v_e_33970.fg(),
            v_r_33973 = "stable" === this.kT.signalingState || "have-local-offer" === this.kT.signalingState && this.cP,
            v_s_33974 = v_oe_27649.sx() < this.YC;
          if ("offer" === v_t_33975 && !v_s_33974 && (this.RT || !v_r_33973)) return !0;
          this.cP = "answer" === v_t_33975, this.kT.setRemoteDescription({
            type: v_t_33975,
            sdp: v_n_33972
          }).then(async () => {
            this.cP = !1, "offer" === v_t_33975 && (await this.kT.setLocalDescription(), this.jT());
          });
        } else if (2 === v_i_33971) {
          v_e_33970.i3("utf-8");
          v_s_33974 = function (v_t_33976) {
            try {
              return JSON.parse(v_t_33976);
            } catch (v_t_33977) {
              return null;
            }
          }(v_e_33970.fg());
          if (v_s_33974) try {
            this.kT.addIceCandidate(new RTCIceCandidate(v_s_33974));
          } catch (v_t_33978) {
            "stable" !== this.kT.signalingState && "have-local-offer" === this.kT.signalingState && this.cP;
            v_r_33973 = v_oe_27649.sx() < this.YC;
            "offer" !== type || v_r_33973 || this.RT;
          }
        } else if (10 === v_i_33971) {
          v_n_33972 = v_e_33970.v3(), v_s_33974 = v_e_33970.o3();
          this.ET.push(new v_Ta_28058(v_n_33972, v_s_33974)), this.XT();
        } else if (11 === v_i_33971) {
          let v_i_33979 = v_e_33970.v3();
          v_r_33973 = this.ET.find(v_t_33980 => v_t_33980.hT === v_i_33979);
          v_r_33973 && (v_r_33973.nR = !0);
        } else 4 === v_i_33971 && v_uo_28102(() => {
          this.XT();
        }, 250);
      }
      return !0;
    },
    OI: function (v_t_33981, v_e_33982) {
      if (v_t_33981 === v_na_28034) {
        if (this.VI) return this._T(v_t_33981, v_e_33982);
        if (v_e_33982.v3() !== this.YC) return v_e_33982.y3(-4), !1;
        var v_i_33983 = v_e_33982.o3();
        if (10 === v_i_33983) {
          var v_n_33984 = v_e_33982.v3(),
            v_r_33985 = v_e_33982.o3();
          this.ET.push(new v_Ta_28058(v_n_33984, v_r_33985)), this.XT();
        } else if (11 === v_i_33983) {
          let v_i_33986 = v_e_33982.v3();
          v_n_33984 = this.ET.find(v_t_33987 => v_t_33987.hT === v_i_33986);
          v_n_33984 && (v_n_33984.nR = !0);
        } else 4 === v_i_33983 && v_uo_28102(() => {
          this.XT();
        }, 250);
        return !0;
      }
      if (v_t_33981 === v_ra_28035) {
        if (v_e_33982.v3() !== this.YC) return v_e_33982.y3(-4), !1;
        this.XI(v_e_33982.Bp(), v_e_33982.U2);
      }
      return !1;
    },
    XI: async function (v_t_33988, v_i_33989) {
      if (void 0 !== v_t_33988.byteLength) {
        var v_e_33990 = new v_Po_28121(v_t_33988),
          v_n_33991 = (v_e_33990.y3(v_i_33989), v_e_33990.v3()),
          v_r_33992 = v_e_33990.v3(),
          v_s_33993 = this.MT.get(v_n_33991);
        if (v_s_33993) {
          if (2 & v_r_33992) {
            if (!v_s_33993.jP) return void this.rR(v_s_33993);
            v_s_33993.wT.push(new Uint8Array(v_t_33988).subarray(8 + v_i_33989));
          } else 4 & v_r_33992 && (v_s_33993.jP = !0, v_e_33990.i3("utf-8"), v_s_33993.E3 = v_e_33990.v3(), v_s_33993.vT = v_e_33990.v3(), v_s_33993.eT = v_e_33990.v3(), v_s_33993.hC = v_e_33990.fg());
          v_s_33993.gT && v_s_33993.gT(v_s_33993.wT.length / v_s_33993.vT), 1 & v_r_33992 && (2 & v_r_33992 && (v_s_33993.Yu = new Blob(v_s_33993.wT, {
            type: "application/octet-stream"
          })), v_s_33993.Yu && 2 & v_s_33993.eT && (v_t_33988 = new v_tc_28199(v_s_33993.Yu), v_s_33993.Yu = await v_t_33988.gR()), v_s_33993.wT = [], this.MT.delete(v_n_33991), v_s_33993.A0) && v_s_33993.A0(v_s_33993);
        }
      }
    },
    XT: async function () {
      this.VI && "open" !== this.bT.readyState || (await this.zT(), this.LT = !1);
    },
    zT: async function () {
      if (!this.LT && (this.LT = !0, this.ET.length)) {
        let v_t_33998 = 8200;
        this.VI || (v_t_33998 += 6);
        var v_n_33994,
          v_r_33995 = new v_Po_28121(new Uint8Array(v_t_33998));
        for (v_r_33995.i3("utf-8"); this.ET.length;) {
          let v_i_33999 = this.ET[0],
            v_e_34000 = !1;
          if (v_i_33999.nR) ;else {
            if (null === v_i_33999.ed) v_e_34000 = !0;else if (null === v_i_33999.th) {
              let v_t_34001 = null;
              (v_t_34001 = v_i_33999.gi ? await v_i_33999.gi.pi(v_i_33999.ed) : await new Promise(v_t_34002 => v_$r_27975.it(v_i_33999.ed, v_t_34002))) ? (16384 <= v_t_34001.byteLength && v_i_33999.mR ? (v_n_33994 = await new v_tc_28199(new Uint8Array(v_t_34001)).pR(), v_i_33999.th = v_n_33994, v_i_33999.eT |= 2) : v_i_33999.th = new Uint8Array(v_t_34001), v_i_33999.vT = v_e1_27826(v_i_33999.th.byteLength / 8192), this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(4), v_r_33995.hg(v_i_33999.th.byteLength), v_r_33995.hg(v_i_33999.vT), v_r_33995.hg(v_i_33999.eT), v_r_33995.gg(v_Fa_28068(v_i_33999.ed)), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995)) : v_e_34000 = !0;
            }
            if (v_e_34000) this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(1), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995);else if (!v_i_33999.nR) for (; v_i_33999.mT < v_i_33999.vT;) {
              if (this.VI && this.bT.bufferedAmount > this.bT.bufferedAmountLowThreshold) return void (this.bT.onbufferedamountlow = () => {
                this.bT.onbufferedamountlow = null, this.XT();
              });
              var v_s_33996 = 8192 * v_i_33999.mT,
                v_a_33997 = v_me_27822(8192 + v_s_33996, v_i_33999.th.byteLength);
              this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(2 | (v_a_33997 >= v_i_33999.th.byteLength ? 1 : 0)), v_r_33995.Mg(v_i_33999.th.subarray(v_s_33996, v_a_33997)), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995), ++v_i_33999.mT;
            }
          }
          this.ET.shift();
        }
      }
    }
  }, v_Ia_28059.LI = function (v_t_34003) {
    return v_oe_27649.sx() < v_t_34003;
  }, v_Ia_28059.pT = function (v_i_34004, v_e_34005) {
    if (v_e_34005 === v_ba_28052) {
      var v_n_34006 = v_Lr_27953();
      v_n_34006 && (v_n_34006.Q1.gi ? (v_i_34004.ed = "image_" + v_n_34006.dC + "_sm", v_i_34004.gi = v_n_34006.Q1.gi, v_i_34004.eT |= v_xa_28056, v_i_34004.mR = !0) : v_n_34006.Q1.vb ? (v_i_34004.ed = "/chara/" + v_n_34006.Q1.C0 + "/dds_" + v_n_34006.dC + "_sm.dds", v_i_34004.eT |= v_xa_28056, v_i_34004.mR = !0) : v_i_34004.ed = "/chara/" + v_n_34006.Q1.C0 + "/image_" + v_n_34006.dC + "_sm.png");
    } else if (v_e_34005 === v_Sa_28054 || v_e_34005 === v_ya_28053 || v_e_34005 >= v_Aa_28055 && v_e_34005 <= 13) {
      v_n_34006 = 0 === v_oe_27649.Px ? void 0 : v_oe_27649.Ix.get(v_oe_27649.Px);
      if (v_oe_27649.Gi() && v_n_34006 && v_n_34006.Mx && null !== v_oe_27649.Nx) {
        let v_t_34008 = void 0;
        var v_r_34007 = v_be_27857.Pp.find(v_t_34009 => v_t_34009.w0 === v_oe_27649.Nx);
        if (v_r_34007) {
          switch (v_e_34005) {
            case v_Sa_28054:
              v_t_34008 = v_r_34007.res_info.jacket;
              break;
            case v_ya_28053:
              v_t_34008 = v_r_34007.res_info.wave;
              break;
            case v_Aa_28055:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
              v_t_34008 = v_r_34007.L5[v_e_34005 - v_Aa_28055];
          }
          void 0 !== v_t_34008 && (v_n_34006 = v_Fa_28068(v_t_34008), v_i_34004.mR = -1 !== v_ki_27818.indexOf(v_n_34006), v_e_34005 === v_Sa_28054 && ".dds" === v_n_34006 && (v_i_34004.eT |= v_xa_28056), v_i_34004.ed = "/music/" + v_r_34007.dir + "/" + v_t_34008);
        }
      }
    }
  }, v_Pa_28060.prototype = {
    qu: async function (v_t_34010, v_i_34011, v_e_34012) {
      let v_n_34013 = new WebSocket((v_e_34012 ? "wss" : "ws") + "://" + v_t_34010 + ":" + v_i_34011 + "/sock");
      v_n_34013.binaryType = "arraybuffer";
      v_e_34012 = await new Promise(v_t_34014 => {
        v_n_34013.onopen = () => v_t_34014(!0), v_n_34013.onerror = () => v_t_34014(!1);
      });
      return v_n_34013.onopen = void 0, v_n_34013.onerror = void 0, v_e_34012 ? (v_n_34013.onmessage = v_t_34015 => {
        var v_i_34016 = performance.now(),
          v_e_34017 = new v_Po_28121(v_ic_28200(new Uint8Array(v_t_34015.data), !1));
        if (!(v_t_34015.data.byteLength < 8)) {
          v_e_34017.v3();
          var v_n_34018 = v_e_34017.o3(),
            v_r_34019 = v_e_34017.o3();
          if (128 <= v_n_34018) this.iT(v_n_34018, v_e_34017);else {
            var v_s_34020 = v_e_34017.u3();
            for (const v_a_34021 of this.G7) if (v_a_34021.KT && v_n_34018 === v_a_34021.KT && v_r_34019 === v_a_34021.YT) {
              v_a_34021.KT = 0, 1 === v_n_34018 && (this.bL = v_i_34016 - v_a_34021.rr), v_a_34021.gP ? v_a_34021.gP({
                wP: v_s_34020,
                fT: v_e_34017
              }) : v_a_34021.K7 && v_a_34021.K7(v_s_34020);
              break;
            }
            this.G7.length && (this.G7 = this.G7.filter(v_t_34022 => v_t_34022.KT));
          }
        }
      }, v_n_34013.onclose = () => {
        this.SL && clearInterval(this.SL), this.SL = 0, this.DT && (alert("occurred network error"), location.reload());
      }, this.DT = v_n_34013, this.SL = setInterval(async () => {
        if (!this.yL) {
          this.bL = -1;
          for (const v_t_34023 of this.G7) 1 === v_t_34023.KT && (v_t_34023.KT = 0);
        }
        this.yL = !1, await this.AL(), this.yL = !0, v_L1_27897.kL(this.bL);
      }, 2e3), v_Ms_28009) : v_Es_28010;
    },
    aS: function () {
      var v_t_34024;
      this.DT && (v_t_34024 = this.DT, this.DT = null, v_t_34024.close());
    },
    UT: function (v_t_34025) {
      254 < ++this.FT && (this.FT = 0), this.BT = v_t_34025, this.GT.ni(), this.GT.hg(v_ec_28201()), this.GT.Ag(this.BT), this.GT.Ag(this.FT);
    },
    rg: function () {
      this.DT.send(v_ic_28200(this.GT.mg(), !0));
    },
    HT: async function () {
      return new Promise(v_t_34026 => {
        this.G7.push({
          KT: this.BT,
          YT: this.FT,
          rr: performance.now(),
          K7: v_t_34026
        }), this.rg();
      });
    },
    mP: async function () {
      return new Promise(v_t_34027 => {
        this.G7.push({
          KT: this.BT,
          YT: this.FT,
          rr: performance.now(),
          gP: v_t_34027
        }), this.rg();
      });
    },
    zI: function (v_t_34028, v_i_34029) {
      254 < ++this.FT && (this.FT = 0), this.BT = v_t_34028, v_i_34029.ni(), v_i_34029.hg(v_ec_28201()), v_i_34029.Ag(this.BT), v_i_34029.Ag(this.FT);
    },
    KI: function (v_i_34030) {
      return new Promise(v_t_34031 => {
        this.G7.push({
          KT: this.BT,
          YT: this.FT,
          rr: performance.now(),
          K7: v_t_34031
        }), this.DT.send(v_ic_28200(v_i_34030.mg(), !0));
      });
    },
    iT: function (v_t_34032, v_i_34033) {
      if (this.EC) if (v_t_34032 === v_Js_28018) {
        var v_e_34034 = v_i_34033.v3();
        this.EC(v_t_34032, {
          ZT: v_e_34034
        });
      } else if (v_t_34032 === v_Vs_28021) {
        var v_e_34034 = v_i_34033.v3(),
          v_n_34035 = v_i_34033.v3(),
          v_r_34036 = v_Pa_28060.qT(v_i_34033);
        this.EC(v_t_34032, {
          yx: v_e_34034,
          nx: v_n_34035,
          ng: v_r_34036
        });
      } else if (v_t_34032 === v_Ws_28022) {
        v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
        this.EC(v_t_34032, {
          yx: v_e_34034,
          ZT: v_n_34035
        });
      } else if (v_t_34032 === v_js_28019) {
        v_r_34036 = new v_Us_28016();
        v_i_34033.i3("utf-8"), v_r_34036.nx = v_i_34033.v3(), v_r_34036.om = v_i_34033.Ic(), v_r_34036.lm = v_i_34033.u3(), v_r_34036.CC = v_i_34033.u3(), v_r_34036.lx = v_i_34033.u3(), v_r_34036.ox = v_i_34033.Ic(), v_r_34036.TC = v_i_34033.Ic(), v_r_34036.MC = v_i_34033.u3(), v_r_34036.RC = v_i_34033.Ic(), this.EC(v_t_34032, {
          Hx: v_r_34036
        });
      } else if (v_t_34032 === v_Os_28020) {
        v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
        this.EC(v_t_34032, {
          nx: v_e_34034,
          ZT: v_n_34035
        });
      } else if (v_t_34032 === v_Xs_28023) {
        var v_r_34036 = v_i_34033.v3(),
          v_e_34034 = v_i_34033.v3(),
          v_n_34035 = v_i_34033.o3(),
          v_s_34037 = v_i_34033.o3();
        this.EC(v_t_34032, {
          yx: v_r_34036,
          nx: v_e_34034,
          ru: v_n_34035,
          te: v_s_34037
        });
      } else if (v_t_34032 === v_zs_28024) {
        v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
        this.EC(v_t_34032, {
          yx: v_r_34036,
          nx: v_e_34034,
          ZT: v_n_34035
        });
      } else if (v_t_34032 === v_Zs_28028) {
        v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.o3(), v_n_34035 = v_i_34033.o3();
        this.EC(v_t_34032, {
          yx: v_s_34037,
          nx: v_r_34036,
          ru: v_e_34034,
          te: v_n_34035
        });
      } else if (v_t_34032 === v_Ys_28026) {
        v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.u3();
        this.EC(v_t_34032, {
          yx: v_s_34037,
          n1: v_r_34036
        });
      } else if (v_t_34032 === v_qs_28027) {
        v_i_34033.v3();
        var v_e_34034 = v_i_34033.v3(),
          v_a_34038 = v_i_34033.v3(),
          v_o_34039 = {
            oT: v_e_34034,
            lT: []
          };
        for (let v_t_34049 = 0; v_t_34049 < v_a_34038; ++v_t_34049) {
          var v_l_34040 = v_i_34033.v3(),
            v_c_34041 = v_i_34033.v3(),
            v_u_34042 = v_i_34033.v3();
          v_o_34039.lT.push({
            nx: v_l_34040,
            Sr: v_c_34041,
            ru: v_u_34042
          });
        }
        this.EC(v_t_34032, v_o_34039);
      } else if (v_t_34032 === v_Ks_28025) {
        v_i_34033.v3();
        var v_n_34035 = v_i_34033.v3(),
          v_f_34043 = v_i_34033.v3(),
          v___34044 = {
            cT: v_n_34035,
            lT: []
          };
        for (let v_t_34050 = 0; v_t_34050 < v_f_34043; ++v_t_34050) {
          var v_h_34045 = v_i_34033.v3(),
            v_d_34046 = v_i_34033.v3();
          v___34044.lT.push({
            nx: v_h_34045,
            Sr: v_d_34046
          });
        }
        this.EC(v_t_34032, v___34044);
      } else {
        var v_v_34047, v_w_34048;
        v_t_34032 === v_$s_28029 ? (v_s_34037 = v_i_34033.u3(), this.EC(v_t_34032, {
          uT: v_s_34037
        })) : v_t_34032 === v_na_28034 || v_t_34032 === v_ra_28035 ? this.EC(v_t_34032, {
          fT: v_i_34033
        }) : v_t_34032 === v_Qs_28030 ? (v_r_34036 = v_i_34033.u3(), this.EC(v_t_34032, {
          n1: v_r_34036
        })) : v_t_34032 === v_ta_28031 ? (v_e_34034 = new v_Us_28016(), v_i_34033.i3("utf-8"), v_e_34034.nx = v_i_34033.v3(), v_e_34034.TC = v_i_34033.Ic(), v_e_34034.MC = v_i_34033.u3(), v_e_34034.RC = v_i_34033.Ic(), this.EC(v_t_34032, {
          Hx: v_e_34034
        })) : v_t_34032 === v_ia_28032 ? (v_i_34033.i3("utf-8"), v_n_34035 = v_i_34033.v3(), v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.Ic(), this.EC(v_t_34032, {
          nx: v_n_34035,
          yx: v_s_34037,
          fI: v_r_34036,
          MI: v_e_34034
        })) : v_t_34032 === v_ea_28033 && (v_i_34033.i3("utf-8"), v_n_34035 = v_i_34033.v3(), v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.v3(), v_v_34047 = v_i_34033.b3(), v_w_34048 = v_i_34033.Ic(), this.EC(v_t_34032, {
          tL: v_n_34035,
          nx: v_s_34037,
          yx: v_r_34036,
          _L: v_e_34034,
          iL: v_v_34047,
          MI: v_w_34048
        }));
      }
    },
    AL: async function () {
      this.UT(1), await this.HT();
    },
    tT: async function (v_t_34051, v_i_34052, v_e_34053) {
      var v_n_34054 = v_Lr_27953();
      let v_r_34055 = v_ye_27858.On.$p;
      var v_s_34056 = v_be_27857.Hp.find(v_t_34057 => v_t_34057.id === v_r_34055),
        v_e_34053 = (this.UT(2), this.GT._g(20), this.GT.hg(v_e_34053), this.GT.vg(v_t_34051), this.GT.vg(v_i_34052), this.GT.vg(v_ye_27858.rm.om), this.GT._g(v_ye_27858.rm.lm), this.GT._g(v_ye_27858.rm.lm), this.GT._g(v_s_34056 ? v_s_34056.rarity : 0), this.GT.vg(v_s_34056 ? v_s_34056.text : "NEW COMER"), this.GT.vg(v_n_34054 ? v_n_34054.Q1.ct[v_n_34054.dC] : "？？？"), this.GT._g(v_n_34054 ? v_n_34054.Ar.Vm : v_gt_27748), this.GT.vg(v_n_34054 ? v_n_34054.Ar.ct : "？？？"), await this.mP());
      return v_e_34053.wP ? {
        wP: v_e_34053.wP
      } : (v_t_34051 = v_e_34053.fT.v3(), v_i_34052 = v_e_34053.fT.v3(), {
        wP: v_e_34053.wP,
        nx: v_t_34051,
        zS: v_i_34052
      });
    },
    UC: async function () {
      return this.UT(3), this.GT._g(0), this.HT();
    },
    HC: async function (v_i_34058, v_t_34059) {
      var v_e_34060 = v_be_27857.Pp.find(v_t_34061 => v_t_34061.w0 === v_i_34058);
      return this.UT(4), this.GT._g(0), this.GT._g(v_t_34059), v_Pa_28060.$T(this.GT, v_e_34060), this.HT();
    },
    OC: async function () {
      return this.UT(5), this.GT._g(0), this.HT();
    },
    VC: async function (v_t_34062, v_i_34063) {
      return this.UT(6), this.GT.hg(v_t_34062), this.GT._g(0), this.GT._g(v_i_34063), this.HT();
    },
    WC: async function () {
      return this.UT(7), this.GT._g(0), this.HT();
    },
    XC: async function (v_t_34064, v_i_34065) {
      return this.UT(19), this.GT._g(v_t_34064), this.GT._g(v_i_34065 || 0), this.HT();
    },
    oP: async function (v_t_34066) {
      return this.UT(22), this.GT._g(v_t_34066), this.HT();
    },
    zC: function (v_t_34067, v_e_34068, v_n_34069, v_r_34070) {
      if (v_r_34070.length) for (let v_i_34071 = 0; v_i_34071 < v_r_34070.length; v_i_34071 += 64) {
        this.UT(20), this.GT.hg(v_t_34067), this.GT.hg(v_i_34071 + 64 >= v_r_34070.length), this.GT.hg(v_e_34068), this.GT.hg(v_n_34069), this.GT.hg(v_me_27822(64, v_r_34070.length - v_i_34071));
        for (let v_t_34072 = v_i_34071; v_t_34072 < v_i_34071 + 64 && v_t_34072 < v_r_34070.length; ++v_t_34072) this.GT.Lg(v_r_34070[v_t_34072][0]), this.GT.Ag(v_r_34070[v_t_34072][1] ? 1 : 0);
        this.rg();
      } else this.UT(20), this.GT.hg(v_t_34067), this.GT.hg(1), this.GT.hg(v_e_34068), this.GT.hg(v_n_34069), this.GT.hg(0), this.rg();
    },
    KC: async function (v_t_34073) {
      return this.UT(21), this.GT._g(v_t_34073), this.HT();
    },
    tR: async function () {
      var v_t_34074 = v_Lr_27953();
      return this.UT(23), this.GT.vg(v_t_34074 ? v_t_34074.Q1.ct[v_t_34074.dC] : "？？？"), this.GT._g(v_t_34074 ? v_t_34074.Ar.Vm : v_gt_27748), this.GT.vg(v_t_34074 ? v_t_34074.Ar.ct : "？？？"), this.HT();
    },
    II: async function (v_t_34075, v_i_34076, v_e_34077) {
      return this.UT(24), this.GT.hg(v_t_34075), this.GT.hg(v_i_34076), this.GT.vg(v_e_34077), this.HT();
    },
    fL: async function (v_t_34078, v_i_34079) {
      return this.UT(25), this.GT.hg(v_t_34078), this.GT.hg(0), this.GT.vg(v_i_34079), this.HT();
    },
    vx: function (v_t_34080) {
      this.EC = v_t_34080;
    }
  }, v_Pa_28060.$T = function (v_i_34081, v_e_34082) {
    var v_n_34083 = null !== v_e_34082.meta[4];
    let v_t_34084 = 0;
    if (v_n_34083) v_t_34084 = 1;else for (var v_r_34085 of v_e_34082.meta) v_r_34085 && ++v_t_34084;
    v_i_34081.vg(v_e_34082.w0), v_i_34081.vg(v_e_34082.lf), v_i_34081.vg(v_e_34082.C5), v_i_34081.vg(v_e_34082.y5), v_i_34081.dg(v_e_34082.m5), v_i_34081.dg(v_e_34082.S5), v_i_34081.Tg(v_e_34082.A5), v_i_34081.Ag(v_t_34084);
    for (let v_t_34086 = 0; v_t_34086 < v_e_34082.meta.length; ++v_t_34086) !v_e_34082.meta[v_t_34086] || v_n_34083 && 4 !== v_t_34086 || (v_i_34081.Ag(0), v_i_34081.Ag(v_t_34086), v_i_34081.vg(v_e_34082.meta[v_t_34086].b5), v_i_34081.vg(v_e_34082.meta[v_t_34086].k5), v_i_34081.vg(v_e_34082.meta[v_t_34086].T5));
  }, v_Pa_28060.qT = function (v_i_34087) {
    v_i_34087.i3("utf-8");
    var v_e_34088 = {
        w0: "",
        y5: "",
        lf: "",
        x5: "",
        I5: "",
        C5: "",
        A5: 0,
        dir: "",
        L5: ["", "", "", "", "", ""],
        meta: [null, null, null, null, null, null],
        res_info: {},
        m5: 0,
        S5: 0,
        QT: !0
      },
      v_n_34089 = (v_e_34088.w0 = v_i_34087.Ic(), v_e_34088.lf = v_i_34087.Ic(), v_e_34088.C5 = v_i_34087.Ic(), v_e_34088.y5 = v_i_34087.Ic(), v_e_34088.m5 = v_i_34087.b3(), v_e_34088.S5 = v_i_34087.b3(), v_e_34088.A5 = v_i_34087._3(), v_i_34087.o3());
    for (let v_t_34092 = 0; v_t_34092 < v_n_34089; ++v_t_34092) {
      var v_r_34090 = new v_hr_27935(),
        v_s_34091 = (v_i_34087.o3(), v_i_34087.o3());
      v_r_34090.b5 = v_i_34087.Ic(), v_r_34090.k5 = v_i_34087.Ic(), v_r_34090.T5 = v_i_34087.Ic(), v_e_34088.meta[v_s_34091] = v_r_34090;
    }
    return v_e_34088;
  };