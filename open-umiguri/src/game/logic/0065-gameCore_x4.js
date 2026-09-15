// game: 语句 65 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const gameCore = function () {
      const v_l_30184 = 0,
        v_D_30185 = 1;
      const v_F_30186 = 3,
        v_S_30187 = 10,
        v_B_30188 = 20,
        v_N_30189 = 21,
        v_G_30190 = 25,
        v_q_30191 = 26,
        v_Z_30192 = 27,
        v_A_30193 = 31,
        v_$_30194 = 40,
        v_Q_30195 = 41,
        v_tt_30196 = 90,
        v_e_30197 = 10,
        v_n_30198 = 11,
        v_r_30199 = 20,
        v_u_30200 = 30,
        v_f_30201 = 30,
        v___30202 = 30,
        v_v_30203 = 35,
        v_w_30204 = 40,
        v_it_30205 = 41,
        v_et_30206 = 43,
        v_nt_30207 = 45,
        v_rt_30208 = 46,
        v_st_30209 = 47,
        v_at_30210 = "playerBackground",
        v_ot_30211 = "playerCharaPanel",
        v_lt_30212 = "playerField",
        v_ct_30213 = "playerSkillTrigger",
        v_ut_30214 = "playerHeader",
        v_ft_30215 = "playerReady",
        v__t_30216 = "fullComboText",
        v_ht_30217 = "playerDebugger",
        v_dt_30218 = "playerAirGuide",
        v_vt_30219 = "playerResult",
        v_wt_30220 = "playerCourseResult",
        v_gt_30221 = "playerDanger",
        v_mt_30222 = "playerTrackSkip",
        v_pt_30223 = "cache:charaLg:",
        v_kt_30224 = 1,
        v_bt_30225 = 20,
        v_yt_30226 = 0,
        v_St_30227 = 1,
        v_At_30228 = 2,
        v_xt_30229 = 3,
        v_Ct_30230 = 4,
        v_Tt_30231 = 5,
        v_It_30232 = 6,
        v_Pt_30233 = 20;
      const v_Rt_30234 = 7,
        v_Lt_30235 = 8,
        v_Mt_30236 = [[1, 1, 1, 1], [171 / 255, 70 / 255, 84 / 255, 1], [177 / 255, 114 / 255, 49 / 255, 1], [206 / 255, 203 / 255, 92 / 255, 1], [159 / 255, 203 / 255, 100 / 255, 1], [68 / 255, 172 / 255, 68 / 255, 1], [95 / 255, 178 / 255, 161 / 255, 1], [44 / 255, 99 / 255, 150 / 255, 1], [121 / 255, 15 / 255, 168 / 255, 1]],
        v_s_30237 = [[v_oc_28207(4294967295), v_oc_28207(4294967295)], [v_oc_28207(4286088447), v_oc_28207(4281877759)], [v_oc_28207(4289331455), v_oc_28207(4285661439)], [v_oc_28207(4294902015), v_oc_28207(4294639871)], [v_oc_28207(3573448191), v_oc_28207(2986229247)], [v_oc_28207(184488703), v_oc_28207(98044415)], [v_oc_28207(2097151999), v_oc_28207(1056691711)], [v_oc_28207(11927551), v_oc_28207(8519679)], [v_oc_28207(3774939135), v_oc_28207(3321954303)]];
      let v_Et_30238 = null;
      function v_Dt_30239(v_t_30350, v_i_30351, v_e_30352) {
        if (v_Et_30238 = v_Et_30238 || Array.from({
          length: v_Mt_30236.length
        }, (v_t_30356, v_i_30357) => {
          return v_ac_28206([255 * v_Mt_30236[v_i_30357][0], 255 * v_Mt_30236[v_i_30357][1], 255 * v_Mt_30236[v_i_30357][2]])[0];
        }), .784 < v_t_30350 && .784 < v_i_30351 && .784 < v_e_30352) return 0;
        var v_n_30353 = v_ac_28206([255 * v_t_30350, 255 * v_i_30351, 255 * v_e_30352]);
        let v_r_30354 = 1 / 0,
          v_s_30355 = 0;
        for (let v_i_30358 = 1; v_i_30358 < v_Et_30238.length; ++v_i_30358) {
          let v_t_30359 = mathAbs(v_n_30353[0] - v_Et_30238[v_i_30358]);
          (v_t_30359 = 180 < v_t_30359 ? 360 - v_t_30359 : v_t_30359) < v_r_30354 && (v_r_30354 = v_t_30359, v_s_30355 = v_i_30358);
        }
        return v_s_30355;
      }
      function v_Ft_30240() {
        this.Fi = v_An_27660, this.ir = 0, this.Le = 0, this.G0 = 0, this.nr = 0, this.rr = 0, this.ar = null, this.lr = !1;
      }
      function v_Bt_30241() {
        this.cr = void 0, this.rr = 0, this.lr = !1;
      }
      function v_Nt_30242() {
        this.Fi = v_An_27660, this.rr = 0, this.w8 = 0, this.ar = null, this.lr = !1;
      }
      function v_Gt_30243() {
        this.Fi = 0, this.ur = !1, this._r = !1, this.ir = 0, this.G0 = 0, this.rr = 0, this.lr = !1;
      }
      function v_Ut_30244() {
        this.Fe = v_y0_27725, this.rr = -1 / 0;
      }
      function v_Ht_30245() {
        this.Fi = v_y0_27725, this.rr = 0;
      }
      function v_Jt_30246() {
        this.cr = null, this.rr = 0;
      }
      function v_jt_30247() {
        this.vr = 0, this.gr = 0, this.wr = !1, this.pr = 0, this.kr = 0, this.br = 0, this.mr = 0, this.Sr = 0, this.Ir = 101e4, this.yr = {
          Cr: 0,
          Ar: 0
        }, this.Tr = {
          Lr: 0,
          Er: 0,
          Fr: 0,
          Br: 0
        }, this.Mr = {
          Rr: 0,
          Pr: 0,
          Dr: 0,
          Gr: 0,
          jr: 0,
          Nr: 0,
          Hr: 0,
          Ur: 0,
          Vr: 0,
          Or: 0
        }, this.R5 = {
          M5: 0,
          D5: 0,
          P5: 0,
          G5: 0,
          N5: 0,
          j5: 0,
          H5: 0,
          U5: 0,
          V5: 0,
          J5: 0,
          O5: 0,
          W5: 0,
          K5: 0,
          z5: 0,
          X5: 0,
          Z5: 0,
          Y5: 0,
          q5: 0,
          Q5: 0,
          e4: 0
        }, this.Jr = {
          Wr: 0,
          Kr: 0,
          zr: 0,
          Xr: 0,
          Zr: 0,
          Yr: 0,
          $r: 0,
          qr: 0,
          Qr: 0
        }, this.e1 = {
          tap: 0,
          extapu: 0,
          extapc: 0,
          extapd: 0,
          extaprl: 0,
          extaprr: 0,
          extapsl: 0,
          extapsr: 0,
          extapio: 0,
          extapoi: 0,
          damage: 0,
          flick: 0,
          slideb: 0,
          slides: 0,
          slidee: 0,
          slidei: 0,
          holdb: 0,
          holde: 0,
          holdi: 0,
          airuc: 0,
          airul: 0,
          airur: 0,
          airdc: 0,
          airdl: 0,
          airdr: 0,
          airhs: 0,
          airhe: 0,
          airhi: 0,
          airss: 0,
          airse: 0,
          airca: 0
        };
      }
      function v_Ot_30248() {
        this.tv = 0, this.je = !1, this.Ne = 0, this.He = 0;
      }
      function v_Vt_30249() {
        this.i1 = !1, this.n1 = v_l_30184, this.o1 = !1, this.l1 = 0, this.rr = 0, this.vk = null, this._1 = !1, this.w1 = 0, this.b1 = 1, this.m1 = 0, this.S1 = 0, this.I1 = 0, this.dI = 0, this.C1 = 0, this.A1 = !0, this.T1 = 2, this.L1 = !1, this.E1 = 0, this.B1 = v_yt_30226, this.xP = 0, this.M1 = .85, this.R1 = 0, this.P1 = 0, this.D1 = 0, this.vL = 0, this.G1 = v_p0_27722, this.j1 = v_p0_27722, this.N1 = v_p0_27722, this.H1 = -30, this.U1 = 10, this.V1 = 0, this.O1 = 3, this.h7 = v_B0_27742, this.Eb = null, this.J1 = !1, this.W1 = 0, this.K1 = !1, this.z1 = void 0, this.X1 = !1, this.Z1 = !1, this.Y1 = void 0, this.q1 = void 0, this.Q1 = void 0, this.Ar = void 0, this.ng = void 0, this.ea = [], this.ta = 0, this.ia = [], this.na = 0, this.aa = Array.from({
          length: 16
        }, () => 1 / 0), this.m7 = Array.from({
          length: 32
        }, () => !1), this.la = Array.from({
          length: 32
        }, () => !1), this.ua = Array.from({
          length: 16
        }, () => new v_Ut_30244()), this.fa = Array.from({
          length: 16
        }, () => new v_Ht_30245()), this.p7 = Array.from({
          length: 16
        }, () => new v_Jt_30246()), this._a = new v_ps_27996(v_Ft_30240, 32), this.da = new v_ps_27996(v_Bt_30241, 16), this.ha = new v_ps_27996(v_Nt_30242, 6), this.va = new v_ps_27996(v_Gt_30243, 16), this.ga = [], this.wa = {}, this.ey = 0, this.ka = !0, this.ba = !0, this.ma = !0, this.Sa = !0, this.xa = 0, this.Vx = 0, this.Wx = [], this.Ia = -1 / 0, this.ib = !1, this.Aa = !1, this.nb = !1, this.rb = 0, this.ab = 0, this.c6 = new Map(), this.Ta = new v_jt_30247(), this.La = new v_zr_27970(), this.Ea = new v_zr_27970(), this.Cy = 0, this.Fa = "", this.lv = !1, this.kk = 0, this.vI = !1, this.wI = [], this.Ba = {
          W1: .8,
          JR: 0,
          Ma: .3,
          Ra: .8,
          Pa: .8,
          Da: .5,
          Ga: .5,
          ja: .5,
          Ar: 0
        }, this.Na = {
          Ha: 0,
          Ua: 0,
          Va: {
            Oa: new v_ks_27997(10 / 60, v_Wl_28190),
            qe: new v_ks_27997(.5, v_t_30360 => v_t_30360)
          },
          Ja: 0
        };
      }
      v_Ft_30240.prototype.ue = function () {
        this.rr = renderer.xt(), this.ar = null, this.lr = !0;
      }, v_Bt_30241.prototype.ue = function () {
        this.rr = renderer.xt(), this.lr = !0;
      }, v_Nt_30242.prototype.ue = function () {
        this.rr = renderer.xt(), this.ar = null, this.lr = !0;
      }, v_Gt_30243.prototype.ue = function () {
        this.rr = renderer.xt(), this.lr = !0;
      }, v_Ot_30248.prototype = {
        oe: function (v_t_30361, v_i_30362) {
          v_t_30361 && (this.je ? (null === this.He && 800 <= v_i_30362 - this.Ne || null !== this.He && 50 <= v_i_30362 - this.He && 1600 <= v_i_30362 - this.Ne || null !== this.He && 200 <= v_i_30362 - this.He && v_i_30362 - this.Ne < 1600) && (this.tv = v_i_30362 - this.Ne < 1600 ? 2 : 3, this.He = v_i_30362) : (this.tv = 1, this.Ne = v_i_30362, this.He = null, this.je = !0)), this.je = v_t_30361;
        }
      }, v_Vt_30249.prototype = {
        Wa: function () {
          return this.Ta.vr >= this.q1.Zu.kr && 0 < this.q1.Zu.kr && 0 === this.Ta.Tr.Br && 0 === this.Ta.Tr.Fr;
        },
        Ka: function () {
          return this.Ta.vr >= this.q1.Zu.kr && 0 < this.q1.Zu.kr && 0 === this.Ta.Tr.Br;
        },
        Xx: function () {
          let v_t_30363 = 0;
          for (var v_i_30364 of v_oe_27649.Ox) (v_i_30364.ru & v_la_28039 || v_i_30364.ru & v_ca_28040) && ++v_t_30363;
          if (v_t_30363 !== v_oe_27649.Ox.length) return 0;
          let v_e_30365 = 8;
          for (const v_n_30366 of v_oe_27649.Ox) v_e_30365 > v_n_30366.te && (v_e_30365 = v_n_30366.te);
          return v_e_30365 === v_U_30262.Y1.te ? 2 : 1;
        },
        za: function () {
          var v_t_30367 = this.q1.Zu.kr;
          return mathFloor(101e4 * v_U_30262.Ta.Tr.Lr / v_t_30367 + 1e6 * v_U_30262.Ta.Tr.Er / v_t_30367 + 5e5 * v_U_30262.Ta.Tr.Fr / v_t_30367);
        },
        Xa: function () {
          var v_t_30368 = this.q1.Zu.kr;
          return mathFloor(101e4 * (this.Ta.Tr.Lr + v_t_30368 - this.Ta.vr) / v_t_30368 + 1e6 * this.Ta.Tr.Er / v_t_30368 + 5e5 * this.Ta.Tr.Fr / v_t_30368);
        }
      };
      let v_x_30250 = void 0,
        v_C_30251 = void 0,
        v_c_30252 = void 0,
        v_T_30253 = void 0,
        v_I_30254 = void 0,
        v_P_30255 = void 0,
        v_m_30256 = void 0,
        v_Wt_30257 = void 0,
        v_o_30258 = void 0,
        v_Xt_30259 = void 0,
        v_zt_30260 = void 0,
        v_R_30261 = {
          DA: void 0,
          BA: void 0,
          Ya: void 0,
          $a: void 0,
          qa: void 0,
          Qa: void 0,
          es: void 0,
          ts: void 0,
          ns: void 0,
          rs: void 0,
          os: void 0,
          ls: void 0,
          cs: void 0,
          us: void 0,
          fs: void 0,
          _s: void 0,
          ds: void 0,
          hs: void 0,
          vs: void 0,
          gs: void 0,
          ws: void 0,
          ps: void 0,
          ks: void 0,
          Ss: void 0,
          xs: void 0,
          Is: void 0,
          ys: void 0,
          gk: void 0,
          wk: void 0,
          pk: void 0,
          mk: void 0,
          Cs: void 0,
          As: void 0,
          Ts: void 0,
          Ls: void 0,
          Es: void 0,
          Fs: void 0,
          Bs: void 0,
          hb: void 0,
          Ms: void 0,
          Rs: void 0,
          zx: void 0,
          Kx: void 0,
          Yx: void 0,
          qx: [],
          Zx: [],
          gI: [],
          mI: []
        },
        v_U_30262 = new v_Vt_30249(),
        v_i_30263 = new v_Ft_30240(),
        v_p_30264 = (v_i_30263.Fi = 11, v_i_30263.ir = 0, v_i_30263.Le = 4, v_i_30263.nr = v_fe_27716, v_i_30263.G0 = 8, v_i_30263.Dg = 0, v_i_30263.ar = null, v_i_30263.pd = !1, v_i_30263.lr = !0, new v_Nt_30242()),
        v_H_30265 = (v_p_30264.Fi = v_In_27664, v_p_30264.rr = 0, v_p_30264.w8 = 0, v_p_30264.ar = null, v_p_30264.lr = !0, {
          Ps: void 0,
          Ds: void 0,
          Gs: void 0,
          js: void 0,
          Uo: [],
          Hs: void 0,
          by: void 0,
          Os: void 0,
          Js: void 0,
          Ws: void 0,
          Ks: void 0,
          yy: void 0,
          Ay: void 0,
          Sy: void 0,
          xy: void 0,
          zs: void 0,
          Xs: void 0,
          Zs: void 0,
          Ys: void 0,
          $s: void 0,
          qs: void 0,
          Qs: void 0,
          eo: void 0,
          _y: void 0,
          uy: void 0,
          hy: void 0,
          vy: void 0,
          py: void 0,
          ky: void 0,
          gy: void 0,
          ro: void 0,
          Iy: void 0,
          ao: void 0,
          $x: void 0,
          oo: void 0,
          lo: void 0,
          co: void 0,
          uo: void 0,
          fo: void 0,
          _o: void 0,
          do: void 0,
          ho: void 0,
          vo: void 0,
          wo: void 0,
          po: void 0,
          ko: void 0,
          bo: void 0,
          mo: void 0,
          So: void 0,
          gL: void 0,
          Io: void 0,
          yo: void 0,
          Co: void 0,
          Ao: void 0,
          To: void 0,
          Lo: void 0,
          Eo: void 0,
          Va: void 0,
          Fo: void 0,
          wL: void 0,
          Po: void 0,
          Do: void 0
        }),
        v_J_30266 = {
          Go: void 0,
          jo: void 0,
          No: void 0,
          Ho: void 0,
          Hs: void 0,
          Uo: [void 0, void 0, void 0, void 0],
          js: void 0,
          Vo: void 0,
          Oo: void 0,
          Jo: new Map(),
          Wo: new Map(),
          Ko: new Map(),
          zo: new Map(),
          Xo: new Map(),
          Zo: new Map(),
          io: new Map(),
          Yo: new Map(),
          $o: void 0,
          qo: void 0,
          vo: void 0,
          _o: void 0,
          Qo: void 0,
          po: void 0,
          el: void 0,
          tl: void 0,
          Io: void 0,
          il: void 0,
          So: void 0,
          nl: void 0,
          rl: void 0,
          al: void 0,
          sl: void 0,
          ol: new Map(),
          ll: new Map(),
          cl: new Map(),
          ul: new Map(),
          fl: [],
          _l: [],
          dl: {},
          Qx: {},
          hl: void 0,
          vl: void 0,
          gl: void 0,
          wl: void 0,
          pl: void 0,
          kl: void 0,
          bl: void 0,
          ml: void 0
        },
        v_L_30267 = 2048;
      const v_Kt_30268 = [0, .4, .5, .63, .69, .7, .7, .73, .75, .765, .78, .795, .81, .825, .84, .855, .87],
        v_Yt_30269 = 1024 * v_Kt_30268[16],
        v_qt_30270 = 512 * v_Kt_30268[8],
        v_Zt_30271 = .58778525229,
        v_$t_30272 = v_Kt_30268.map((v_t_30369, v_i_30370) => 64 * v_i_30370 * mathMin(v_t_30369, .734375)),
        v_M_30273 = v_Kt_30268.map((v_t_30371, v_i_30372) => 64 * v_i_30372 * .734375),
        v_j_30274 = v_t_30373 => v_D0_27740 / v_M0_27738 * v_t_30373,
        v_O_30275 = v_t_30374 => -100 / v_M0_27738 * v_t_30374;
      let v_h_30276 = new Map();
      v_h_30276.set(0 | v_fe_27716, [8, 405, 260, 116]), v_h_30276.set(v_fe_27716 | v_m0_27721, [284, 140, 260, 116]), v_h_30276.set(v_fe_27716 | v_g0_27720, [284, 272, 260, 117]), v_h_30276.set(0 | v_w0_27717, [284, 405, 260, 116]), v_h_30276.set(v_w0_27717 | v_m0_27721, [8, 272, 260, 116]), v_h_30276.set(v_w0_27717 | v_g0_27720, [284, 8, 260, 116]), v_h_30276.set(0 | v__e_27718, [8, 8, 260, 116]), v_h_30276.set(v__e_27718 | v_m0_27721, [560, 8, 260, 116]), v_h_30276.set(v__e_27718 | v_g0_27720, [560, 140, 260, 116]), v_h_30276.set(v_he_27719, [8, 140, 260, 116]), v_h_30276.set(v_m0_27721, [8, 537, 260, 116]), v_h_30276.set(v_g0_27720, [284, 537, 260, 116]), v_h_30276.set(65536 | v_fe_27716, [560, 272, 176, 146]), v_h_30276.set(65536 | v_fe_27716 | v_m0_27721, [392, 669, 176, 146]), v_h_30276.set(65536 | v_fe_27716 | v_g0_27720, [584, 596, 176, 146]), v_h_30276.set(65536 | v_w0_27717, [200, 831, 176, 146]), v_h_30276.set(65536 | v_w0_27717 | v_m0_27721, [8, 669, 176, 146]), v_h_30276.set(65536 | v_w0_27717 | v_g0_27720, [200, 669, 176, 146]), v_h_30276.set(65536 | v__e_27718, [836, 170, 176, 146]), v_h_30276.set(65536 | v__e_27718 | v_m0_27721, [836, 8, 176, 146]), v_h_30276.set(65536 | v__e_27718 | v_g0_27720, [560, 434, 176, 146]), v_h_30276.set(65536 | v_he_27719, [8, 831, 176, 146]), v_h_30276.set(65536 | v_m0_27721, [392, 831, 176, 146]), v_h_30276.set(65536 | v_g0_27720, [584, 758, 176, 146]);
      const v_Qt_30277 = {
          0: [8, 8, 177, 133],
          1: [201, 8, 177, 133],
          2: [394, 8, 177, 133],
          3: [587, 8, 177, 133],
          4: [780, 8, 177, 133],
          5: [8, 157, 177, 133],
          6: [201, 157, 177, 133],
          7: [394, 157, 177, 133],
          8: [587, 157, 177, 133],
          9: [780, 157, 177, 133],
          b: [8, 306, 89, 67],
          c: [113, 306, 89, 67],
          m: [218, 306, 89, 67],
          o: [323, 306, 89, 67],
          "s,": [428, 306, 67, 50],
          s0: [511, 306, 67, 50],
          s1: [594, 306, 67, 50],
          s2: [677, 306, 67, 50],
          s3: [760, 306, 67, 50],
          s4: [843, 306, 67, 50],
          s5: [926, 306, 67, 50],
          s6: [428, 372, 67, 50],
          s7: [8, 389, 67, 50],
          s8: [91, 389, 67, 50],
          s9: [174, 389, 67, 50],
          sa: [257, 389, 67, 50],
          sb: [340, 389, 67, 50],
          sc: [511, 372, 67, 50],
          se: [594, 372, 67, 50],
          sh: [677, 372, 67, 50],
          si: [760, 372, 67, 50],
          sk: [843, 372, 67, 50],
          sm: [926, 372, 67, 50],
          sn: [423, 438, 67, 50],
          so: [506, 438, 67, 50],
          sp: [589, 438, 67, 50],
          sr: [672, 438, 67, 50],
          ss: [755, 438, 67, 50],
          st: [838, 438, 67, 50],
          sy: [921, 438, 67, 50]
        },
        v_ti_30278 = {
          0: [2, 2, 177, 133],
          a: [2, 139, 89, 67],
          c: [95, 139, 89, 67],
          1: [183, 2, 177, 133],
          h: [188, 139, 89, 67],
          i: [281, 139, 89, 67],
          2: [364, 2, 177, 133],
          n: [374, 139, 89, 67],
          3: [545, 2, 177, 133],
          4: [726, 2, 177, 133],
          5: [907, 2, 177, 133],
          6: [1088, 2, 177, 133],
          7: [1269, 2, 177, 133],
          8: [1450, 2, 177, 133],
          9: [1631, 2, 177, 133]
        },
        v_ii_30279 = [[0], [-.2734375, .2734375], [-.53, 0, .53], [-.75, -.25, .25, .75], [-1, -.5, 0, .5, 1]],
        v_ei_30280 = {
          pr: [-.46875, -.2421875, 0, .2265625, .4375],
          br: [-.41375, -.1821875, .055, .2315625, .4125]
        };
      let v_g_30281 = {};
      const v_ni_30282 = [0, 1, 2, 3, 4, 6, 6, 8, 8, 8, 8, 16, 16, 16, 16, 16, 16];
      var v_ri_30283 = {
        a16: [8, 8, 1024],
        a8: [1048, 8, 512],
        a6: [1576, 8, 384],
        a1: [1976, 8, 64],
        d16: [8, 88, 1024],
        d8: [1048, 88, 512],
        d6: [1576, 88, 384],
        d1: [1976, 88, 64],
        f16: [8, 168, 1024],
        f8: [1048, 168, 512],
        f6: [1576, 168, 384],
        f1: [1976, 168, 64],
        g16: [8, 248, 1024],
        g8: [1048, 248, 512],
        g6: [1576, 248, 384],
        g1: [1976, 248, 64],
        h16: [8, 328, 1024],
        h8: [1048, 328, 512],
        h6: [1576, 328, 384],
        h1: [1976, 328, 64],
        r16: [8, 408, 1024],
        s16: [8, 488, 1024],
        t16: [8, 568, 1024],
        x16: [8, 648, 1024],
        r8: [8, 728, 512],
        s8: [8, 808, 512],
        t8: [8, 888, 512],
        x8: [536, 728, 512],
        r6: [536, 808, 384],
        s6: [536, 888, 384],
        t6: [936, 808, 384],
        x6: [936, 888, 384],
        a4: [1336, 888, 256],
        d4: [1608, 408, 256],
        f4: [1336, 408, 256],
        g4: [1064, 408, 256],
        a2: [1880, 408, 128],
        h4: [1048, 488, 256],
        r4: [1048, 568, 256],
        s4: [1048, 648, 256],
        t4: [1064, 728, 256],
        x4: [1336, 728, 256],
        a3: [1608, 728, 192],
        d3: [1336, 808, 192],
        f3: [1544, 808, 192],
        g3: [1816, 488, 192],
        h3: [1816, 568, 192],
        r3: [1320, 648, 192],
        s3: [1528, 648, 192],
        t3: [1736, 648, 192],
        x3: [1816, 728, 192],
        r1: [1944, 648, 64],
        d2: [1608, 888, 128],
        f2: [1320, 488, 128],
        g2: [1320, 568, 128],
        h2: [1464, 488, 128],
        r2: [1464, 568, 128],
        s2: [1608, 488, 128],
        t2: [1608, 568, 128],
        x2: [1752, 808, 128],
        s1: [1752, 888, 64],
        t1: [1832, 888, 64],
        x1: [1896, 808, 64]
      };
      for (const v_re_30375 in v_ri_30283) {
        let v_t_30376 = v_An_27660;
        switch (v_re_30375.substr(0, 1)) {
          case "t":
            v_t_30376 = v_Tn_27663;
            break;
          case "x":
            v_t_30376 = v_In_27664;
            break;
          case "f":
            v_t_30376 = v_Pn_27665;
            break;
          case "h":
            v_t_30376 = v_le_27675;
            break;
          case "g":
            v_t_30376 = v_Un_27676;
            break;
          case "s":
            v_t_30376 = v_ce_27678;
            break;
          case "r":
            v_t_30376 = v_Jn_27679;
            break;
          case "d":
            v_t_30376 = v_Rn_27666;
            break;
          case "a":
            v_t_30376 = v_Kn_27687;
        }
        void 0 === v_g_30281[v_t_30376] && (v_g_30281[v_t_30376] = {
          1: void 0,
          2: void 0,
          3: void 0,
          4: void 0,
          6: void 0,
          8: void 0,
          16: void 0
        }), v_g_30281[v_t_30376][v_Pe_28064(v_re_30375.substr(1))] = [v_ri_30283[v_re_30375][0] / 2048, (v_ri_30283[v_re_30375][1] + 1) / 1024, (v_ri_30283[v_re_30375][0] + v_ri_30283[v_re_30375][2]) / 2048, (v_ri_30283[v_re_30375][1] + 64) / 1024];
      }
      function v_d_30284(v_t_30377) {
        return -.25 * v_t_30377 + 1;
      }
      function v_si_30285(v_t_30378) {
        return 16 === v_t_30378 ? -.02 : (15 - v_t_30378) / 15 * .8;
      }
      const v_ai_30286 = [10, 6, 3, 9, 14, 3, 10, 13, 8, 2, 4, 6, 12, 0, 13, 13],
        v_k_30287 = {
          Sl: async function (v_t_30379) {
            var v_i_30380 = {
                wrapS: glContext.CLAMP_TO_EDGE,
                wrapT: glContext.CLAMP_TO_EDGE,
                format: glContext.RGBA
              },
              v_e_30381 = {
                wrapS: glContext.REPEAT,
                wrapT: glContext.REPEAT,
                format: glContext.RGBA
              },
              v_n_30382 = {
                wrapS: glContext.REPEAT,
                wrapT: glContext.CLAMP_TO_EDGE,
                format: glContext.RGBA
              },
              v_r_30383 = {
                wrapS: glContext.CLAMP_TO_EDGE,
                wrapT: glContext.REPEAT,
                format: glContext.RGBA
              },
              v_s_30384 = {
                wrapS: glContext.MIRRORED_REPEAT,
                wrapT: glContext.REPEAT,
                format: glContext.RGBA
              },
              v_a_30385 = (glContext.MIRRORED_REPEAT, glContext.MIRRORED_REPEAT, glContext.RGBA, v_H_30265.Ps = new glRuntime.Texture(1920, 1080, {
                format: glContext.RGBA,
                noFlip: !0
              }), v_H_30265.Ds = new glRuntime.Texture(854, 480, {
                format: glContext.RGBA,
                noFlip: !0
              }), v_H_30265.Gs = new glRuntime.Texture(1024, 1024, {
                format: glContext.RGBA
              }), "field/textures/");
            v_H_30265.js = v_Be_28119(await languagePackages.ck(v_a_30385 + "txJudgeLine.dds"), !1, v_i_30380), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineWhite.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineRed.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineOrange.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineYellow.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineLime.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineGreen.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineSkyblue.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLineBlue.dds"), !1, v_i_30380)), v_H_30265.Uo.push(v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldLinePurple.dds"), !1, v_i_30380)), v_H_30265.Hs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txFieldWall.dds"), !1, v_e_30381), v_H_30265.by = v_Be_28119(await languagePackages.ck(v_a_30385 + "txTap.dds"), !1, v_i_30380), v_H_30265.Os = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirUp.dds"), !1, v_s_30384), v_H_30265.Js = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirUpR.dds"), !1, v_s_30384), v_H_30265.Ws = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirDown.dds"), !1, v_s_30384), v_H_30265.Ks = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirDownR.dds"), !1, v_s_30384), v_H_30265.yy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirUpFx.dds"), !1, v_s_30384), v_H_30265.Ay = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirUpFxR.dds"), !1, v_s_30384), v_H_30265.Sy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirDownFx.dds"), !1, v_s_30384), v_H_30265.xy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirDownFxR.dds"), !1, v_s_30384), v_H_30265.zs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txSlideBg.dds"), !1, v_e_30381), v_H_30265.Xs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txHoldBg.dds"), !1, v_e_30381), v_H_30265.Zs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txSlideActive.dds"), !1, v_i_30380), v_H_30265.Ys = v_Be_28119(await languagePackages.ck(v_a_30385 + "txSlideCenter.dds"), !1, v_i_30380), v_H_30265.$s = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldCenter.dds"), !1, v_i_30380), v_H_30265.qs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldCenterR.dds"), !1, v_i_30380), v_H_30265.Qs = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldCover.dds"), !1, v_e_30381), v_H_30265.eo = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldCoverR.dds"), !1, v_e_30381), v_H_30265._y = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirActionBox.dds"), !1, v_i_30380), v_H_30265.uy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirActionEffectTop.dds"), !1, v_r_30383), v_H_30265.hy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirActionEffectBottom.dds"), !1, v_r_30383), v_H_30265.vy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirCrushBox.dds"), !1, v_i_30380), v_H_30265.py = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirCrushTop0.dds"), !1, v_i_30380), v_H_30265.ky = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirCrushTop1.dds"), !1, v_i_30380), v_H_30265.gy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirCrushEffect.dds"), !1, v_i_30380), v_H_30265.ro = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirTrace.dds"), !1, v_i_30380), v_H_30265.Iy = v_Be_28119(await languagePackages.ck(v_a_30385 + "txExTapEffect.dds"), !1, v_r_30383), v_H_30265.ao = v_Be_28119(await languagePackages.ck(v_a_30385 + "txComboFont.dds"), !1, v_i_30380), v_H_30265.$x = v_Be_28119(await languagePackages.ck(v_a_30385 + "txComboChainFont.dds"), !1, v_i_30380), v_H_30265.oo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxBall.dds"), !1, v_i_30380), v_H_30265.lo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAir.dds"), !1, v_i_30380), v_H_30265.co = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirAurora.dds"), !1, v_n_30382), v_H_30265.uo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirAuroraColor.dds"), !1, v_i_30380), v_H_30265.fo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxSlideThunder.dds"), !1, v_i_30380), v_H_30265._o = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxTapRing.dds"), !1, v_i_30380), v_H_30265.do = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxTapCore.dds"), !1, v_i_30380), v_H_30265.ho = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxTapWave.dds"), !1, v_i_30380), v_H_30265.vo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxTapBg.dds"), !1, v_i_30380), v_H_30265.wo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxTapGlowing.dds"), !1, v_i_30380), v_H_30265.po = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxExTapFront.dds"), !1, v_i_30380), v_H_30265.ko = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxDamage.dds"), !1, v_i_30380), v_H_30265.bo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxDamageFront.dds"), !1, v_i_30380), v_H_30265.mo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirActionRing.dds"), !1, v_i_30380), v_H_30265.So = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirActionEnd.dds"), !1, v_i_30380), v_H_30265.gL = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirActionEndBlur.dds"), !1, v_i_30380), v_H_30265.Io = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirActionFeedback.dds"), !1, v_i_30380), v_H_30265.yo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirCrush.dds"), !1, v_i_30380), v_H_30265.Co = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxAirCrushBreak.dds"), !1, v_i_30380), v_H_30265.Ao = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxFlick.dds"), !1, v_i_30380), v_H_30265.To = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxStar.dds"), !1, v_i_30380), v_H_30265.Lo = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxDamageThunder.dds"), !1, v_i_30380), v_H_30265.Eo = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldJudgeLine.dds"), !1, v_i_30380), v_H_30265.Va = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldPositionLine.dds"), !1, v_i_30380), v_H_30265.wL = v_Be_28119(await languagePackages.ck(v_a_30385 + "txAirHoldGrid.dds"), !1, v_i_30380), v_H_30265.Po = v_Be_28119(await languagePackages.ck(v_a_30385 + "txJudgeAnswer.dds"), !1, v_i_30380), v_H_30265.Do = v_Be_28119(await languagePackages.ck(v_a_30385 + "fxExTapBgLine.dds"), !1, v_i_30380), v_t_30379();
          },
          Il: function () {
            function v_t_30403(v_t_30403, v_i_30404, v_e_30405) {
              var v_n_30406 = new glRuntime.Mesh({
                  coords: !0,
                  colors: !0
                }),
                v_r_30407 = 64 * v_t_30403 * v_Kt_30268[v_t_30403] / 2,
                v_t_30403 = (8 < v_t_30403 ? v_Ee_28084(v_Zt_30271, .30901699437, v_Ya_28085(8, 16, v_t_30403)) : v_Zt_30271) * v_r_30407 / v_M0_27738,
                v_s_30408 = v_Zt_30271 * v_qt_30270 / 2 / v_M0_27738 - v_t_30403,
                v_a_30409 = v_i_30404 === v_Zn_27690 || v_i_30404 === v_$n_27691 ? 150 : v_i_30404 === v_qn_27689 || v_i_30404 === v_Qn_27692 ? -150 : 0,
                v_o_30410 = v_i_30404 === v_Zn_27690 || v_i_30404 === v_$n_27691 || v_i_30404 === v_qn_27689 || v_i_30404 === v_Qn_27692 ? 16 : 0,
                v_l_30411 = -v_r_30407,
                v_c_30412 = v_a_30409 / 900 * v_r_30407 * (v_i_30404 === v_$n_27691 || v_i_30404 === v_Qn_27692 ? -1 : 1),
                v_u_30413 = (v_M0_27738 + v_o_30410) * v_e_30405,
                v_o_30410 = v_o_30410 * v_e_30405;
              return v_n_30406.vertices = [[v_l_30411 + v_a_30409, v_u_30413, 0], [v_c_30412 + v_a_30409, v_u_30413, 0], [v_l_30411, v_o_30410, 0], [v_c_30412, v_o_30410, 0], [v_c_30412 + v_a_30409, v_u_30413, 0], [v_r_30407 + v_a_30409, v_u_30413, 0], [v_c_30412, v_o_30410, 0], [v_r_30407, v_o_30410, 0]], v_n_30406.coords = [[0, 1], [(v_c_30412 - v_l_30411) / (v_Yt_30269 / 2), 1], [0, 0], [(v_c_30412 - v_l_30411) / (v_Yt_30269 / 2), 0], [(v_r_30407 - v_c_30412) / (v_Yt_30269 / 2), 1], [0, 1], [(v_r_30407 - v_c_30412) / (v_Yt_30269 / 2), 0], [0, 0]], v_i_30404 === v_Yn_27688 || v_i_30404 === v_Qn_27692 || v_i_30404 === v_$n_27691 ? v_n_30406.colors = [[v_t_30403, v_s_30408, 1, v_s_30408], [v_t_30403, v_s_30408, 0, v_s_30408], [v_t_30403, v_s_30408, 1, v_s_30408], [v_t_30403, v_s_30408, 0, v_s_30408], [v_t_30403, v_s_30408, 0, v_s_30408], [v_t_30403, v_s_30408, 1, v_s_30408], [v_t_30403, v_s_30408, 0, v_s_30408], [v_t_30403, v_s_30408, 1, v_s_30408]] : v_n_30406.colors = [[v_t_30403, v_s_30408, 0, 0], [v_t_30403, v_s_30408, 1, 0], [v_t_30403, v_s_30408, 0, 0], [v_t_30403, v_s_30408, 1, 0], [v_t_30403, v_s_30408, 1, 0], [v_t_30403, v_s_30408, 0, 0], [v_t_30403, v_s_30408, 1, 0], [v_t_30403, v_s_30408, 0, 0]], v_n_30406.triangles = [[0, 1, 2], [2, 1, 3], [4, 5, 6], [6, 5, 7]], v_n_30406.compile(), v_n_30406;
            }
            function v_i_30414(v_i_30414) {
              var v_e_30415 = new glRuntime.Mesh({
                coords: !0,
                colors: !0
              });
              let v_n_30416 = 0,
                v_r_30417,
                v_s_30418 = [],
                v_a_30419 = 80,
                v_o_30420,
                v_l_30421,
                v_c_30422,
                v_u_30423,
                v_f_30424,
                v___30425,
                v_h_30426,
                v_d_30427,
                v_v_30428,
                v_w_30429,
                v_g_30430,
                v_m_30431,
                v_p_30432,
                v_k_30433;
              for (let v_t_30434 = 0; v_t_30434 < 500; ++v_t_30434) {
                0 < v_a_30419 ? (v_r_30417 = mathRandom(), v_s_30418 = v_r_30417 < .125 ? [.5, .875, 1] : v_r_30417 < .25 ? [1, .5, .875] : v_r_30417 < .5 ? [.25, 1, .25] : v_r_30417 < .75 ? [0, 0, 1] : [1, .25, 1], v_a_30419--) : v_s_30418 = [1, 1, 1], v_w_30429 = 360 * mathRandom() * 2 - 90, v_d_30427 = 400 - 1800 * mathRandom() - 8 * v_w_30429, v_v_30428 = 100 * mathRandom(), v_l_30421 = 10 + 30 * mathRandom(), v_g_30430 = 1200 + v_v_30428 - 70, v_m_30431 = 1200 + v_v_30428 + 70, v_o_30420 = mathFloor(.5 * v_l_30421);
                for (let v_t_30435 = 0; v_t_30435 < v_o_30420 - 1; ++v_t_30435) v_c_30422 = v_t_30435 / (v_o_30420 - 1), v_u_30423 = (v_c_30422 * v_l_30421 + v_w_30429) / 360 * 2 * mathPI, v___30425 = mathCos(v_u_30423), v_h_30426 = mathSin(v_u_30423), v_p_30432 = v_no_28093(v_g_30430, 0, v___30425, v_h_30426), v_k_30433 = v_no_28093(v_m_30431, 0, v___30425, v_h_30426), v_e_30415.vertices.push([v_p_30432[0], v_p_30432[1], v_d_30427], [v_k_30433[0], v_k_30433[1], v_d_30427]), v_e_30415.coords.push([0, v_c_30422], [1, v_c_30422]), v_f_30424 = .875 * (v_i_30414 === v_Dn_27670 ? 1 - v_c_30422 : v_c_30422) + .125, v_e_30415.colors.push([v_s_30418[0], v_s_30418[1], v_s_30418[2], v_f_30424], [v_s_30418[0], v_s_30418[1], v_s_30418[2], v_f_30424]), v_e_30415.triangles.push([2 * v_t_30435 + v_n_30416, 2 * v_t_30435 + 1 + v_n_30416, 2 * v_t_30435 + 2 + v_n_30416], [2 * v_t_30435 + 2 + v_n_30416, 2 * v_t_30435 + 1 + v_n_30416, 2 * v_t_30435 + 3 + v_n_30416]);
                v_u_30423 = (v_l_30421 + v_w_30429) / 360 * 2 * mathPI, v___30425 = mathCos(v_u_30423), v_h_30426 = mathSin(v_u_30423), v_p_30432 = v_no_28093(v_g_30430, 0, v___30425, v_h_30426), v_k_30433 = v_no_28093(v_m_30431, 0, v___30425, v_h_30426), v_e_30415.vertices.push([v_p_30432[0], v_p_30432[1], v_d_30427], [v_k_30433[0], v_k_30433[1], v_d_30427]), v_e_30415.coords.push([0, 1], [1, 1]), v_f_30424 = v_i_30414 === v_Dn_27670 ? .125 : .875, v_e_30415.colors.push([v_s_30418[0], v_s_30418[1], v_s_30418[2], v_f_30424], [v_s_30418[0], v_s_30418[1], v_s_30418[2], v_f_30424]), v_n_30416 += 2 * v_o_30420;
              }
              return v_e_30415.compile(), v_e_30415;
            }
            let v_a_30388 = 0,
              v_o_30389 = 0;
            v_J_30266.Go = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.Go.vertices = [[-1, 1, 0], [1, 1, 0], [-1, -1, 0], [1, -1, 0]], v_J_30266.Go.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], v_J_30266.Go.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Go.compile(), v_J_30266.jo = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.jo.vertices = [[-1, 1, 0], [1, 1, 0], [-1, -1, 0], [1, -1, 0]], v_J_30266.jo.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], v_J_30266.jo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.jo.compile(), v_J_30266.No = new glRuntime.Mesh({
              colors: !0
            }), v_J_30266.No.vertices = [[-v_we_27734, 0, v_T0_27732], [v_we_27734, 0, v_T0_27732], [-v_we_27734, 0, v_I0_27733], [v_we_27734, 0, v_I0_27733]], v_J_30266.No.colors = [[0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1], [0, 0, 0, 1]], v_J_30266.No.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.No.compile(), v_J_30266.Ho = new glRuntime.Mesh({
              colors: !0,
              coords: !0
            }), v_J_30266.Ho.vertices = [[-v_P0_27735, 0, v_I0_27733], [-v_we_27734, 0, v_I0_27733], [-v_P0_27735, 0, v_T0_27732], [-v_we_27734, 0, v_T0_27732], [-v_we_27734, 0, v_I0_27733], [v_we_27734, 0, v_I0_27733], [-v_we_27734, 0, v_T0_27732], [v_we_27734, 0, v_T0_27732], [v_we_27734, 0, v_I0_27733], [v_P0_27735, 0, v_I0_27733], [v_we_27734, 0, v_T0_27732], [v_P0_27735, 0, v_T0_27732]], v_J_30266.Ho.colors = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], v_J_30266.Ho.coords = [[0, 1], [.0625, 1], [0, 0], [.0625, 0], [.0625, 1], [.9375, 1], [.0625, 0], [.9375, 0], [.9375, 1], [1, 1], [.9375, 0], [1, 0]], v_J_30266.Ho.triangles = [[0, 1, 2], [2, 1, 3], [4, 5, 6], [6, 5, 7], [8, 9, 10], [10, 9, 11]], v_J_30266.Ho.compile(), v_J_30266.Hs = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.Hs.vertices = [[-v_P0_27735, v_C0_27730, v_j_30274(v_C0_27730)], [v_P0_27735, v_C0_27730, v_j_30274(v_C0_27730)], [-v_P0_27735, 0, 0], [v_P0_27735, 0, 0]], v_J_30266.Hs.coords = [[0, 0], [5.33333, 0], [0, 5.33333], [5.33333, 5.33333]], v_J_30266.Hs.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Hs.compile(), v_De_28096([2, 4, 8, 16], function (v_i_30436, v_t_30437) {
              v_J_30266.Uo[v_t_30437] = new glRuntime.Mesh({
                colors: !0,
                coords: !0
              });
              var v_e_30438 = [],
                v_n_30439 = [],
                v_r_30440 = [],
                v_s_30441 = [];
              for (let v_t_30442 = 0; v_t_30442 <= v_i_30436; v_t_30442++) v_a_30388 = -v_we_27734 + v_x0_27729 / v_i_30436 * v_t_30442, v_o_30389 = 16 === v_i_30436 ? 1.25 : 8 === v_i_30436 ? 1.75 : 2, v_e_30438.push([v_a_30388 - v_o_30389, 0, 100], [v_a_30388 + v_o_30389, 0, 100], [v_a_30388 - v_o_30389, 0, -3840], [v_a_30388 + v_o_30389, 0, -3840]), v_n_30439.push([1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]), v_s_30441.push([0, 1], [1, 1], [0, 0], [1, 0]), v_r_30440.push([0 + 4 * v_t_30442, 1 + 4 * v_t_30442, 2 + 4 * v_t_30442], [2 + 4 * v_t_30442, 1 + 4 * v_t_30442, 3 + 4 * v_t_30442]);
              v_J_30266.Uo[v_t_30437].vertices = v_e_30438, v_J_30266.Uo[v_t_30437].colors = v_n_30439, v_J_30266.Uo[v_t_30437].triangles = v_r_30440, v_J_30266.Uo[v_t_30437].coords = v_s_30441, v_J_30266.Uo[v_t_30437].compile();
            }), v_J_30266.js = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.js.vertices = [[-v_we_27734, 0, -30], [v_we_27734, 0, -30], [-v_we_27734, 0, 30], [v_we_27734, 0, 30]], v_J_30266.js.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.js.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.js.compile(), v_J_30266.Oo = new glRuntime.Mesh({
              colors: !0
            }), v_J_30266.Oo.vertices = [[-v_we_27734, 0, -960], [-448, 0, -960], [-v_we_27734, 0, 90], [-448, 0, 90]], v_J_30266.Oo.colors = [[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, .5], [1, 1, 1, .5]], v_J_30266.Oo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Oo.compile(), v_J_30266.Vo = new glRuntime.Mesh({
              colors: !0
            }), v_J_30266.Vo.vertices = [[-v_we_27734, 0, -960], [-448, 0, -960], [-v_we_27734, 0, 0], [-448, 0, 0]], v_J_30266.Vo.colors = [[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, .5], [1, 1, 1, .5]], v_J_30266.Vo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Vo.compile(), v_ao_28097(v_Qt_30277, function (v_t_30443, v_i_30444) {
              var v_e_30445 = new glRuntime.Mesh({
                coords: !0
              });
              v_e_30445.vertices = [[-v_t_30443[2] / 2, 0, -v_t_30443[3] / .7], [v_t_30443[2] / 2, 0, -v_t_30443[3] / .7], [-v_t_30443[2] / 2, 0, 0], [v_t_30443[2] / 2, 0, 0]], v_e_30445.coords = [[v_t_30443[0] / 1024, 1 - v_t_30443[1] / 512], [(v_t_30443[0] + v_t_30443[2] - 1) / 1024, 1 - v_t_30443[1] / 512], [v_t_30443[0] / 1024, 1 - (v_t_30443[1] + v_t_30443[3] - 1) / 512], [(v_t_30443[0] + v_t_30443[2] - 1) / 1024, 1 - (v_t_30443[1] + v_t_30443[3] - 1) / 512]], v_e_30445.triangles = [[0, 1, 2], [2, 1, 3]], v_e_30445.compile(), v_J_30266.dl[v_i_30444] = v_e_30445;
            }), v_ao_28097(v_ti_30278, function (v_t_30446, v_i_30447) {
              var v_e_30448 = new glRuntime.Mesh({
                coords: !0
              });
              v_e_30448.vertices = [[-v_t_30446[2] / 2, 0, -v_t_30446[3] / .7], [v_t_30446[2] / 2, 0, -v_t_30446[3] / .7], [-v_t_30446[2] / 2, 0, 0], [v_t_30446[2] / 2, 0, 0]], v_e_30448.coords = [[v_t_30446[0] / 1810, 1 - v_t_30446[1] / 208], [(v_t_30446[0] + v_t_30446[2] - 1) / 1810, 1 - v_t_30446[1] / 208], [v_t_30446[0] / 1810, 1 - (v_t_30446[1] + v_t_30446[3] - 1) / 208], [(v_t_30446[0] + v_t_30446[2] - 1) / 1810, 1 - (v_t_30446[1] + v_t_30446[3] - 1) / 208]], v_e_30448.triangles = [[0, 1, 2], [2, 1, 3]], v_e_30448.compile(), v_J_30266.Qx[v_i_30447] = v_e_30448;
            });
            var v_e_30390 = {
              1: [712, 68, 776, 132],
              2: [648, 136, 776, 200],
              3: [516, 68, 708, 132],
              4: [388, 136, 644, 200],
              6: [0, 136, 384, 200],
              8: [0, 68, 512, 132],
              16: [0, 0, 1024, 64]
            };
            for (let v_i_30449 = 1; v_i_30449 < 17; ++v_i_30449) {
              v_J_30266.Jo.set(v_i_30449, v_t_30386(v_i_30449, v_Kn_27687, 1)), v_J_30266.Wo.set(v_i_30449, v_t_30386(v_i_30449, v_qn_27689, 1)), v_J_30266.Ko.set(v_i_30449, v_t_30386(v_i_30449, v_Zn_27690, 1)), v_J_30266.zo.set(v_i_30449, v_t_30386(v_i_30449, v_Yn_27688, 1)), v_J_30266.Xo.set(v_i_30449, v_t_30386(v_i_30449, v_Qn_27692, 1)), v_J_30266.Zo.set(v_i_30449, v_t_30386(v_i_30449, v_$n_27691, 1));
              {
                let v_t_30450 = new glRuntime.Mesh({
                  coords: !0
                });
                var v_n_30391 = 64 * v_i_30449 - 8,
                  v_r_30392 = -508,
                  v_s_30393 = 245.00006,
                  v_l_30394 = 227.00006,
                  v_c_30395 = v_n_30391 * v_Kt_30268[v_i_30449],
                  v_u_30396 = v_ni_30282[v_i_30449],
                  v_f_30397 = v_e_30390[v_u_30396][0] / 1024,
                  v___30398 = v_e_30390[v_u_30396][1] / 256,
                  v_h_30399 = v_e_30390[v_u_30396][2] / 1024,
                  v_u_30396 = v_e_30390[v_u_30396][3] / 256,
                  v_d_30400 = 6 / 1024,
                  v_v_30401 = 6 / 256;
                (v_t_30450 = new glRuntime.Mesh({
                  coords: !0
                })).vertices = [[v_r_30392, v_s_30393, -40], [v_r_30392, v_s_30393, 40], [v_r_30392, v_l_30394, -40], [v_r_30392, v_l_30394, 40], [v_r_30392 + v_n_30391, v_s_30393, -40], [v_r_30392 + v_n_30391, v_s_30393, 40], [v_r_30392 + v_n_30391, v_l_30394, -40], [v_r_30392 + v_n_30391, v_l_30394, 40], [v_r_30392, v_s_30393, 40], [v_r_30392 + v_n_30391, v_s_30393, 40], [v_r_30392, v_l_30394, 40], [v_r_30392 + v_n_30391, v_l_30394, 40], [v_r_30392, v_s_30393, -40], [v_r_30392 + v_n_30391, v_s_30393, -40], [v_r_30392, v_s_30393, 40], [v_r_30392 + v_n_30391, v_s_30393, 40]], v_t_30450.coords = [[v_f_30397 + v_d_30400, v___30398], [v_f_30397 + v_d_30400, v_u_30396 - v_v_30401], [v_f_30397, v___30398], [v_f_30397, v_u_30396 - v_v_30401], [v_h_30399 - v_d_30400, v___30398], [v_h_30399 - v_d_30400, v_u_30396 - v_v_30401], [v_h_30399, v___30398], [v_h_30399, v_u_30396 - v_v_30401], [v_f_30397 + v_d_30400, v_u_30396 - v_v_30401], [v_h_30399 - v_d_30400, v_u_30396 - v_v_30401], [v_f_30397 + v_d_30400, v_u_30396], [v_h_30399 - v_d_30400, v_u_30396], [v_f_30397 + v_d_30400, v___30398], [v_h_30399 - v_d_30400, v___30398], [v_f_30397 + v_d_30400, v_u_30396 - v_v_30401], [v_h_30399 - v_d_30400, v_u_30396 - v_v_30401]], v_t_30450.triangles = [[0, 1, 2], [2, 1, 3], [4, 5, 6], [6, 5, 7], [8, 9, 10], [10, 9, 11], [12, 13, 14], [14, 13, 15]], v_t_30450.compile(), v_J_30266.io.set(v_i_30449, v_t_30450), (v_t_30450 = new glRuntime.Mesh({
                  coords: !0,
                  colors: !0
                })).vertices = [[-502, 20 + v_s_30393, -34], [v_r_30392 + v_n_30391 - 6, 20 + v_s_30393, -34], [-502, v_s_30393, -34], [v_r_30392 + v_n_30391 - 6, v_s_30393, -34], [-502, 20 + v_s_30393, -34], [-502, 20 + v_s_30393, 34], [-502, v_s_30393, -34], [-502, v_s_30393, 34], [v_r_30392 + v_n_30391 - 6, 20 + v_s_30393, -34], [v_r_30392 + v_n_30391 - 6, 20 + v_s_30393, 34], [v_r_30392 + v_n_30391 - 6, v_s_30393, -34], [v_r_30392 + v_n_30391 - 6, v_s_30393, 34], [-502, 20 + v_s_30393, 34], [v_r_30392 + v_n_30391 - 6, 20 + v_s_30393, 34], [-502, v_s_30393, 34], [v_r_30392 + v_n_30391 - 6, v_s_30393, 34]], v_t_30450.coords = [[0, 0], [1, 0], [0, .5], [1, .5], [0, 0], [1, 0], [0, .5], [1, .5], [0, 0], [1, 0], [0, .5], [1, .5], [0, 0], [1, 0], [0, .5], [1, .5]], v_t_30450.colors = [[1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 0], [1, 1, 1, 1], [1, 1, 1, 1]], v_t_30450.triangles = [[0, 1, 2], [2, 1, 3], [4, 5, 6], [6, 5, 7], [8, 9, 10], [10, 9, 11], [12, 13, 14], [14, 13, 15]], v_t_30450.compile(), v_J_30266.cl.set(v_i_30449, v_t_30450), (v_t_30450 = new glRuntime.Mesh({
                  coords: !0,
                  colors: !0
                })).vertices = [[v_r_30392, v_l_30394, 0], [v_r_30392 + v_n_30391, v_l_30394, 0], [v_r_30392 + (v_n_30391 - v_c_30395) / 2, 0, 0], [v_r_30392 + v_n_30391 - (v_n_30391 - v_c_30395) / 2, 0, 0]], v_t_30450.coords = [[0, 2], [1, 2], [0, 0], [1, 0]], v_t_30450.triangles = [[0, 1, 2], [2, 1, 3]], v_t_30450.colors = [[1, 1, 1, .375], [1, 1, 1, .375], [1, 1, 1, .0625], [1, 1, 1, .0625]], v_t_30450.compile(), v_J_30266.ul.set(v_i_30449, v_t_30450);
              }
              v___30398 = 64 * v_i_30449 * (1 - v_Kt_30268[v_i_30449]) / 2, v_f_30397 = new glRuntime.Mesh({
                colors: !0
              });
              v_f_30397.vertices = [[-v_we_27734 + v___30398, 0, -23], [-v_we_27734 + 64 * v_i_30449 - v___30398, 0, -23], [-v_we_27734 + v___30398, 0, 23], [-v_we_27734 + 64 * v_i_30449 - v___30398, 0, 23]], v_f_30397.colors = [[0, 0, 0, .75], [0, 0, 0, .75], [0, 0, 0, .75], [0, 0, 0, .75]], v_f_30397.triangles = [[0, 1, 2], [2, 1, 3]], v_f_30397.compile(), v_J_30266.Yo.set(v_i_30449, v_f_30397);
            }
            v_J_30266.$o = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.$o.vertices = [[-546, 0, 0], [-478, 0, 0], [-546, v_M0_27738, 0], [-478, v_M0_27738, 0]], v_J_30266.$o.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.$o.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.$o.compile(), v_o_30389 = 256, v_J_30266.qo = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.qo.vertices = [[-v_o_30389 / 2, 0, -v_o_30389 / 2], [-v_o_30389 / 2 + v_o_30389, 0, -v_o_30389 / 2], [-v_o_30389 / 2, 0, v_o_30389 / 2], [-v_o_30389 / 2 + v_o_30389, 0, v_o_30389 / 2]], v_J_30266.qo.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.qo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.qo.compile(), v_o_30389 = 352, v_J_30266.vo = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.vo.vertices = [[-v_o_30389 / 2, 0, -80], [-v_o_30389 / 2 + v_o_30389, 0, -80], [-v_o_30389 / 2, 0, 80], [-v_o_30389 / 2 + v_o_30389, 0, 80]], v_J_30266.vo.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.vo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.vo.compile();
            {
              v_J_30266._o = new glRuntime.Mesh({
                coords: !0
              });
              let v_i_30451 = 0,
                v_e_30452,
                v_n_30453,
                v_r_30454,
                v_s_30455,
                v_a_30456,
                v_o_30457,
                v_l_30458,
                v_c_30459;
              let v_u_30460 = 0;
              for (let v_t_30461 = 0; v_t_30461 < 16; ++v_t_30461) {
                v_u_30460 = mathFloor(v_t_30461 / 2) / 8 * 360, v_t_30461 % 2 == 0 && (v_u_30460 += 30), 0;
                for (let v_t_30462 = 0; v_t_30462 < 49; ++v_t_30462) v_e_30452 = v_t_30462 / 49, v_n_30453 = (120 * v_e_30452 + v_u_30460) / 360 * 2 * mathPI, v_a_30456 = 90 * (1 - .225 * v_e_30452) - 10, v_o_30457 = 90 * (1 - .225 * v_e_30452) + 10, v_r_30454 = mathCos(v_n_30453), v_s_30455 = mathSin(v_n_30453), v_l_30458 = v_ro_28094(v_a_30456, 0, 0, 0, -0, -0, v_r_30454, v_s_30455), v_c_30459 = v_ro_28094(v_o_30457, 0, 0, 0, -0, -0, v_r_30454, v_s_30455), v_J_30266._o.vertices.push([v_l_30458[0], 16 - 16 * v_e_30452, -v_l_30458[1]], [v_c_30459[0], 16 - 16 * v_e_30452, -v_c_30459[1]]), v_J_30266._o.coords.push([0, 1 - v_e_30452], [1, 1 - v_e_30452]), v_J_30266._o.triangles.push([2 * v_t_30462 + v_i_30451, 2 * v_t_30462 + 1 + v_i_30451, 2 * v_t_30462 + 2 + v_i_30451], [2 * v_t_30462 + 2 + v_i_30451, 2 * v_t_30462 + 1 + v_i_30451, 2 * v_t_30462 + 3 + v_i_30451]);
                v_n_30453 = (120 + v_u_30460) / 360 * 2 * mathPI, v_r_30454 = mathCos(v_n_30453), v_s_30455 = mathSin(v_n_30453), v_l_30458 = v_ro_28094(v_a_30456, 0, 0, 0, -0, -0, v_r_30454, v_s_30455), v_c_30459 = v_ro_28094(v_o_30457, 0, 0, 0, -0, -0, v_r_30454, v_s_30455), v_J_30266._o.vertices.push([v_l_30458[0], 0, -v_l_30458[1]], [v_c_30459[0], 0, -v_c_30459[1]]), v_J_30266._o.coords.push([0, 0], [1, 0]), v_i_30451 += 100;
              }
              v_J_30266._o.compile();
            }
            v_o_30389 = 512, v_J_30266.Qo = new glRuntime.Mesh({
              coords: !0,
              colors: !0
            }), v_J_30266.Qo.vertices = [[-v_o_30389 / 2, 0, -192], [v_o_30389 / 2, 0, -192], [-v_o_30389 / 2, 0, 192], [v_o_30389 / 2, 0, 192]], v_J_30266.Qo.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.Qo.colors = [[.71765, .10588, .56078, 1], [.71765, .10588, .56078, 1], [.71765, .10588, .56078, 1], [.71765, .10588, .56078, 1]], v_J_30266.Qo.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Qo.compile(), v_o_30389 = 60, v_J_30266.po = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.po.vertices = [[-v_o_30389, 700, v_O_30275(700)], [v_o_30389, 700, v_O_30275(700)], [-v_o_30389, 0, 0], [v_o_30389, 0, 0]], v_J_30266.po.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.po.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.po.compile(), v_o_30389 = 130, v_J_30266.el = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.el.vertices = [[-v_o_30389, 280, v_O_30275(280)], [v_o_30389, 280, v_O_30275(280)], [-v_o_30389, 0, 0], [v_o_30389, 0, 0]], v_J_30266.el.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], v_J_30266.el.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.el.compile(), v_o_30389 = v_x0_27729, v_J_30266.tl = new glRuntime.Mesh({
              coords: !0,
              colors: !0
            }), v_J_30266.tl.vertices = [[-v_o_30389 / 2, 0, -320], [v_o_30389 / 2, 0, -320], [-v_o_30389 / 2, 0, 320], [v_o_30389 / 2, 0, 320]], v_J_30266.tl.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.tl.colors = [[.09804, .27059, .54118, 1], [.09804, .27059, .54118, 1], [.09804, .27059, .54118, 1], [.09804, .27059, .54118, 1]], v_J_30266.tl.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.tl.compile(), v_J_30266.Io = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.Io.vertices = [[-64, v_M0_27738, -575], [64, v_M0_27738, -575], [-64, v_M0_27738, 425], [64, v_M0_27738, 425]], v_J_30266.Io.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.Io.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.Io.compile(), v_o_30389 = 400, v_J_30266.il = new glRuntime.Mesh({
              coords: !0,
              colors: !0
            }), v_J_30266.il.vertices = [[-v_o_30389, v_M0_27738 + v_o_30389, v_j_30274(v_M0_27738 + v_o_30389) + 8], [v_o_30389, v_M0_27738 + v_o_30389, v_j_30274(v_M0_27738 + v_o_30389) + 8], [-v_o_30389, v_M0_27738 - v_o_30389, v_j_30274(v_M0_27738 - v_o_30389) + 8], [v_o_30389, v_M0_27738 - v_o_30389, v_j_30274(v_M0_27738 - v_o_30389) + 8]], v_J_30266.il.colors = [[.10588, 1, .13725, 1], [.10588, 1, .13725, 1], [.10588, 1, .13725, 1], [.10588, 1, .13725, 1]], v_J_30266.il.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.il.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.il.compile(), v_o_30389 = 240, v_J_30266.So = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.So.vertices = [[-v_o_30389, v_M0_27738 + v_o_30389, v_j_30274(v_M0_27738 + v_o_30389) + 8], [v_o_30389, v_M0_27738 + v_o_30389, v_j_30274(v_M0_27738 + v_o_30389) + 8], [-v_o_30389, v_M0_27738 - v_o_30389, v_j_30274(v_M0_27738 - v_o_30389) + 8], [v_o_30389, v_M0_27738 - v_o_30389, v_j_30274(v_M0_27738 - v_o_30389) + 8]], v_J_30266.So.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], v_J_30266.So.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.So.compile(), v_o_30389 = 50, v_J_30266.nl = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.nl.vertices = [[-v_o_30389, 6, v_j_30274(6) - 500], [v_o_30389, 6, v_j_30274(6) - 500], [-v_o_30389, -6, v_j_30274(-6) - 500], [v_o_30389, -6, v_j_30274(-6) - 500]], v_J_30266.nl.coords = [[0, 1], [1, 1], [0, .75], [1, .75]], v_J_30266.nl.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.nl.compile(), v_o_30389 = 5, v_J_30266.rl = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.rl.vertices = [[-v_o_30389, 280, v_j_30274(280) - 500], [v_o_30389, 280, v_j_30274(280) - 500], [-v_o_30389, -280, v_j_30274(-280) - 500], [v_o_30389, -280, v_j_30274(-280) - 500]], v_J_30266.rl.coords = [[1, .125], [1, 0], [0, .125], [0, 0]], v_J_30266.rl.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.rl.compile();
            for (let v_t_30463 = 0; v_t_30463 < 6; ++v_t_30463) v_J_30266.fl.push(v_i_30387(v_En_27669)), v_J_30266._l.push(v_i_30387(v_Dn_27670));
            v_J_30266.al = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.al.vertices = [[-900, v_M0_27738, -111], [900, v_M0_27738, -111], [-900, v_M0_27738, -39], [900, v_M0_27738, -39]], v_J_30266.al.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], v_J_30266.al.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.al.compile(), v_J_30266.sl = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.sl.vertices = [[-v_we_27734, 0, -28], [v_we_27734, 0, -28], [-v_we_27734, 0, 28], [v_we_27734, 0, 28]], v_J_30266.sl.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], v_J_30266.sl.triangles = [[0, 1, 2], [2, 1, 3]], v_J_30266.sl.compile();
            {
              let v_e_30464 = [[27 / 64, 59 / 64], [22 / 64, 58 / 64], [18 / 64, 57 / 64], [13 / 64, 55 / 64], [.125, .8125], [4.5 / 64, .75], [4.5 / 64, .25], [.125, .1875], [13 / 64, 9 / 64], [18 / 64, 7 / 64], [22 / 64, 6 / 64], [27 / 64, 5 / 64]];
              v_De_28096([1, 2, 3, 4, 6, 8, 16], function (v_t_30465) {
                v_o_30389 = 64 * v_t_30465;
                v_ni_30282;
                let v_i_30466 = new glRuntime.Mesh({
                  coords: !0,
                  colors: !0
                });
                for (let v_t_30467 = 0; v_t_30467 < v_e_30464.length; ++v_t_30467) v_i_30466.vertices.push([-v_we_27734 + 64 * v_e_30464[v_t_30467][0], 0, (v_e_30464[v_t_30467][1] - .5) * -v_R0_27736]), v_i_30466.vertices.push([-v_we_27734 + 64 * v_e_30464[v_t_30467][0], 36, (v_e_30464[v_t_30467][1] - .5) * -v_R0_27736 + v_j_30274(36)]), v_i_30466.coords.push([.5, .5]), v_i_30466.coords.push([.5, .68]), v_i_30466.colors.push([1, 1, 1, 1], [1, 1, 1, 0]);
                for (let v_t_30468 = v_e_30464.length - 1; 0 <= v_t_30468; --v_t_30468) v_i_30466.vertices.push([-v_we_27734 + 64 * (1 - v_e_30464[v_t_30468][0]) + v_o_30389 - 64, 0, (v_e_30464[v_t_30468][1] - .5) * -v_R0_27736]), v_i_30466.vertices.push([-v_we_27734 + 64 * (1 - v_e_30464[v_t_30468][0]) + v_o_30389 - 64, 36, (v_e_30464[v_t_30468][1] - .5) * -v_R0_27736 + v_j_30274(36)]), v_i_30466.coords.push([.5, .5]), v_i_30466.coords.push([.5, .68]), v_i_30466.colors.push([1, 1, 1, 1], [1, 1, 1, 0]);
                for (let v_t_30469 = 0; v_t_30469 < v_i_30466.vertices.length / 2 - 2; ++v_t_30469) v_t_30469 === v_i_30466.vertices.length / 2 - 3 ? v_i_30466.triangles.push([2 * v_t_30469, 2 * v_t_30469 + 1, 0], [0, 2 * v_t_30469 + 1, 1]) : v_i_30466.triangles.push([2 * v_t_30469, 2 * v_t_30469 + 1, 2 * v_t_30469 + 2], [2 * v_t_30469 + 2, 2 * v_t_30469 + 1, 2 * v_t_30469 + 3]);
                v_i_30466.compile(), v_J_30266.ol.set(v_t_30465, v_i_30466), v_i_30466 = new glRuntime.Mesh({
                  coords: !0,
                  colors: !0
                });
                for (let v_t_30470 = 0; v_t_30470 < v_e_30464.length; ++v_t_30470) v_i_30466.vertices.push([-v_we_27734 + 64 * v_e_30464[v_t_30470][0], 0, (v_e_30464[v_t_30470][1] - .5) * -v_L0_27737]), v_i_30466.vertices.push([-v_we_27734 + 64 * v_e_30464[v_t_30470][0], 36, (v_e_30464[v_t_30470][1] - .5) * -v_L0_27737 + v_j_30274(36)]), v_i_30466.coords.push([.5, .5]), v_i_30466.coords.push([.5, .68]), v_i_30466.colors.push([1, 1, 1, 1], [1, 1, 1, 0]);
                for (let v_t_30471 = v_e_30464.length - 1; 0 <= v_t_30471; --v_t_30471) v_i_30466.vertices.push([-v_we_27734 + 64 * (1 - v_e_30464[v_t_30471][0]) + v_o_30389 - 64, 0, (v_e_30464[v_t_30471][1] - .5) * -v_L0_27737]), v_i_30466.vertices.push([-v_we_27734 + 64 * (1 - v_e_30464[v_t_30471][0]) + v_o_30389 - 64, 36, (v_e_30464[v_t_30471][1] - .5) * -v_L0_27737 + v_j_30274(36)]), v_i_30466.coords.push([.5, .5]), v_i_30466.coords.push([.5, .68]), v_i_30466.colors.push([1, 1, 1, 1], [1, 1, 1, 0]);
                for (let v_t_30472 = 0; v_t_30472 < v_i_30466.vertices.length / 2; ++v_t_30472) v_t_30472 === v_i_30466.vertices.length / 2 - 1 ? v_i_30466.triangles.push([2 * v_t_30472, 2 * v_t_30472 + 1, 0], [0, 2 * v_t_30472 + 1, 1]) : v_i_30466.triangles.push([2 * v_t_30472, 2 * v_t_30472 + 1, 2 * v_t_30472 + 2], [2 * v_t_30472 + 2, 2 * v_t_30472 + 1, 2 * v_t_30472 + 3]);
                v_i_30466.compile(), v_J_30266.ll.set(v_t_30465, v_i_30466);
              });
            }
            v_J_30266.hl = new glRuntime.Mesh({
              coords: !0,
              colors: !0
            }), v_J_30266.hl.vertices = new Float32Array(3072).buffer, v_J_30266.hl.colors = new Float32Array(4096).buffer, v_J_30266.hl.coords = new Float32Array(2048).buffer, v_J_30266.hl.triangles = new Uint16Array(3072).buffer, v_J_30266.hl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              colors: 4,
              coords: 2,
              triangles: 3
            }), v_J_30266.vl = new glRuntime.Mesh({
              coords: !0,
              colors: !0,
              triangles: !1
            }), v_J_30266.gl = new glRuntime.Mesh({
              coords: !0
            });
            for (let v_t_30473 = 0; v_t_30473 < v_L_30267; ++v_t_30473) v_J_30266.vl.vertices.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_J_30266.vl.coords.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_J_30266.vl.colors.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_J_30266.gl.vertices.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_J_30266.gl.coords.push(0, 0, 1, 0, 0, 1, 1, 1), v_J_30266.gl.triangles.push(4 * v_t_30473, 4 * v_t_30473 + 1, 4 * v_t_30473 + 2, 4 * v_t_30473 + 2, 4 * v_t_30473 + 1, 4 * v_t_30473 + 3);
            v_J_30266.vl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              colors: 4,
              coords: 2
            }), v_J_30266.gl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              coords: 2,
              triangles: 3
            }), v_J_30266.wl = new glRuntime.Mesh({
              coords: !0,
              colors: !0
            }), v_J_30266.pl = new glRuntime.Mesh(), v_J_30266.kl = new glRuntime.Mesh({
              coords: !0
            });
            for (let v_t_30474 = 0; v_t_30474 < 1024; ++v_t_30474) v_J_30266.wl.coords.push(0, 1, 1, 1, 0, 0, 1, 0), v_J_30266.wl.triangles.push(4 * v_t_30474, 4 * v_t_30474 + 1, 4 * v_t_30474 + 2, 4 * v_t_30474 + 2, 4 * v_t_30474 + 1, 4 * v_t_30474 + 3), v_J_30266.pl.triangles.push(4 * v_t_30474, 4 * v_t_30474 + 1, 4 * v_t_30474 + 2, 4 * v_t_30474 + 2, 4 * v_t_30474 + 1, 4 * v_t_30474 + 3), v_J_30266.kl.coords.push(0, 1, 1, 1, 0, 0, 1, 0), v_J_30266.kl.triangles.push(4 * v_t_30474, 4 * v_t_30474 + 1, 4 * v_t_30474 + 2, 4 * v_t_30474 + 2, 4 * v_t_30474 + 1, 4 * v_t_30474 + 3);
            v_J_30266.wl.vertices = new Float32Array(12288).buffer, v_J_30266.wl.colors = new Float32Array(16384).buffer, v_J_30266.pl.vertices = new Float32Array(12288).buffer, v_J_30266.kl.vertices = new Float32Array(12288).buffer, v_J_30266.wl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              coords: 2,
              colors: 4,
              triangles: 3
            }), v_J_30266.pl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              triangles: 3
            }), v_J_30266.kl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              coords: 2,
              triangles: 3
            }), v_J_30266.bl = new glRuntime.Mesh({
              coords: !0
            }), v_J_30266.bl.vertices = new Float32Array(6144).buffer, v_J_30266.bl.coords = new Float32Array(4096).buffer, v_J_30266.bl.triangles = new Uint16Array(6144).buffer, v_J_30266.bl.compilef(glContext.DYNAMIC_DRAW, {
              vertices: 3,
              coords: 2,
              triangles: 3
            }), v_J_30266.ml = new MeshBuffer({
              vertices: 61440,
              coords: 40960,
              colors: 81920
            });
            var v_w_30402 = [];
            for (let v_t_30475 = 0; v_t_30475 < 5120; ++v_t_30475) v_w_30402.push(4 * v_t_30475, 4 * v_t_30475 + 1, 4 * v_t_30475 + 2, 4 * v_t_30475 + 2, 4 * v_t_30475 + 1, 4 * v_t_30475 + 3);
            v_J_30266.ml.yl({
              triangles: v_w_30402
            }, {
              vertices: 3,
              coords: 2,
              triangles: 3,
              colors: 4
            });
          },
          Cl: function (v_t_30476, v_i_30477) {
            glContext.activeTexture(glContext.TEXTURE0), glContext.bindTexture(glContext.TEXTURE_2D, v_t_30476), (1 === v_i_30477 ? v_hn_27603 : v_dn_27604).uniforms(v_vn_27625).draw(v_J_30266.jo);
          },
          Al: function () {
            v_H_30265.Ps.bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Go);
          },
          Tl: function (v_t_30478) {
            var v_i_30479 = v_H_30265.Ps;
            glContext.bindTexture(glContext.TEXTURE_2D, v_i_30479.id), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !0), glContext.texImage2D(glContext.TEXTURE_2D, 0, v_i_30479.format, v_i_30479.format, v_i_30479.type, v_t_30478);
          },
          Ll: function () {
            v_H_30265.Ds.bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Go);
          },
          El: function (v_t_30480) {
            var v_i_30481 = v_H_30265.Ds;
            glContext.bindTexture(glContext.TEXTURE_2D, v_i_30481.id), glContext.texImage2D(glContext.TEXTURE_2D, 0, v_i_30481.format, v_i_30481.format, v_i_30481.type, v_t_30480);
          },
          Fl: function () {
            v_wn_27627.opacity = v_U_30262.P1, v_je_27575.uniforms(v_wn_27627).draw(v_J_30266.No);
          },
          Bl: function (v_t_30482) {
            var v_i_30483 = v_H_30265.Gs;
            glContext.bindTexture(glContext.TEXTURE_2D, v_i_30483.id), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !0), glContext.texImage2D(glContext.TEXTURE_2D, 0, v_i_30483.format, v_i_30483.format, v_i_30483.type, v_t_30482);
          },
          Ml: function (v_t_30484) {
            return v_H_30265.Gs.id;
          },
          Rl: function () {
            glContext.enable(glContext.STENCIL_TEST), glContext.stencilFunc(glContext.ALWAYS, 1, 0), glContext.stencilOp(glContext.KEEP, glContext.REPLACE, glContext.REPLACE), v_H_30265.Gs.bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Ho), glContext.disable(glContext.STENCIL_TEST);
          },
          Pl: function () {
            0 < v_U_30262.R1 && (v_H_30265.Uo[v_U_30262.ey].bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Uo[v_U_30262.R1 - 1]));
          },
          Dl: function () {
            var v_i_30485,
              v_e_30486 = v_J_30266.ml.Gl("vertices"),
              v_n_30487 = v_J_30266.ml.Gl("colors");
            let v_r_30488 = 0;
            for (let v_t_30489 = 0; v_t_30489 < v_U_30262.ta && !((v_i_30485 = v_U_30262.ea[v_t_30489]).Fi === v_u0_27704 && (v_e_30486[3 * v_r_30488 + 0] = -v_we_27734, v_e_30486[3 * v_r_30488 + 1] = 0, v_e_30486[3 * v_r_30488 + 2] = -v_i_30485.Pg * v_ve_27731, v_e_30486[3 * v_r_30488 + 3] = 0, v_e_30486[3 * v_r_30488 + 4] = 0, v_e_30486[3 * v_r_30488 + 5] = -v_i_30485.Pg * v_ve_27731, v_e_30486[3 * v_r_30488 + 6] = 0, v_e_30486[3 * v_r_30488 + 7] = 0, v_e_30486[3 * v_r_30488 + 8] = -v_i_30485.Pg * v_ve_27731, v_e_30486[3 * v_r_30488 + 9] = v_we_27734, v_e_30486[3 * v_r_30488 + 10] = 0, v_e_30486[3 * v_r_30488 + 11] = -v_i_30485.Pg * v_ve_27731, v_n_30487[4 * v_r_30488 + 0] = v_s_30237[v_U_30262.ey][0][0], v_n_30487[4 * v_r_30488 + 1] = v_s_30237[v_U_30262.ey][0][1], v_n_30487[4 * v_r_30488 + 2] = v_s_30237[v_U_30262.ey][0][2], v_n_30487[4 * v_r_30488 + 3] = v_s_30237[v_U_30262.ey][0][3], v_n_30487[4 * v_r_30488 + 4] = v_s_30237[v_U_30262.ey][1][0], v_n_30487[4 * v_r_30488 + 5] = v_s_30237[v_U_30262.ey][1][1], v_n_30487[4 * v_r_30488 + 6] = v_s_30237[v_U_30262.ey][1][2], v_n_30487[4 * v_r_30488 + 7] = v_s_30237[v_U_30262.ey][1][3], v_n_30487[4 * v_r_30488 + 8] = v_s_30237[v_U_30262.ey][1][0], v_n_30487[4 * v_r_30488 + 9] = v_s_30237[v_U_30262.ey][1][1], v_n_30487[4 * v_r_30488 + 10] = v_s_30237[v_U_30262.ey][1][2], v_n_30487[4 * v_r_30488 + 11] = v_s_30237[v_U_30262.ey][1][3], v_n_30487[4 * v_r_30488 + 12] = v_s_30237[v_U_30262.ey][0][0], v_n_30487[4 * v_r_30488 + 13] = v_s_30237[v_U_30262.ey][0][1], v_n_30487[4 * v_r_30488 + 14] = v_s_30237[v_U_30262.ey][0][2], v_n_30487[4 * v_r_30488 + 15] = v_s_30237[v_U_30262.ey][0][3], 5120 <= (v_r_30488 += 4))); ++v_t_30489);
            0 < v_r_30488 && (v_J_30266.ml.jl("vertices", 3 * v_r_30488), v_J_30266.ml.jl("colors", 4 * v_r_30488), glContext.lineWidth(1), v_Je_27574.drawBuffers(v_J_30266.ml.Nl(), void 0, glContext.LINES, v_r_30488));
          },
          Hl: function () {
            glContext.pushMatrix(), glContext.translate(0, 0, -v_U_30262.M1 * v_ve_27731), v_H_30265.Hs.bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Hs), glContext.popMatrix();
          },
          Ul: function () {
            v_H_30265.js.bind(0), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.js);
          },
          Vl: function () {
            v_U_30262.Na.Ha = renderer.xt();
          },
          Ol: function () {
            if (0 !== v_U_30262.D1) {
              var v_r_30490 = 0 < v_U_30262.Y1.Rx,
                v_u_30491 = v_r_30490 ? v_U_30262.Ta.br : v_U_30262.Ta.pr,
                v_s_30492 = mathMax(mathMin(v_u_30491, 99999), 0).toString();
              if ((v_r_30490 ? 20 : 5) <= v_u_30491) {
                (v_r_30490 ? v_H_30265.$x : v_H_30265.ao).bind(0);
                var v_a_30493 = v_r_30490 ? "chain" : "combo",
                  v_o_30494 = v_r_30490 ? v_J_30266.Qx : v_J_30266.dl;
                for (let v_t_30500 = 0; v_t_30500 < 5; ++v_t_30500) glContext.pushMatrix(), v_r_30490 ? glContext.translate(v_ei_30280.br[v_t_30500] * v_we_27734, 0, -920) : glContext.translate(v_ei_30280.pr[v_t_30500] * v_we_27734, 0, -920), glContext.scale(1.45, 0, 2), v_Ve_27579.uniforms(v_vn_27625).draw(v_o_30494[v_a_30493[v_t_30500]]), glContext.popMatrix();
                let v_i_30497 = 1,
                  v_e_30498 = 1,
                  v_n_30499 = 0;
                var v_u_30491 = (renderer.xt() - v_U_30262.Na.Ha) / 1e3;
                v_u_30491 <= .2 && (v_u_30491 = v_u_30491 < .1 ? v_Xl_28191(10 * v_u_30491) : 1 - v_Xl_28191(10 * v_u_30491 - 1), v_i_30497 = 1 + .1 * v_u_30491, v_e_30498 = 1 + .15 * v_u_30491, v_n_30499 = 18 * -v_u_30491);
                for (let v_t_30501 = 0; v_t_30501 < v_s_30492.length; ++v_t_30501) glContext.pushMatrix(), glContext.translate(v_ii_30279[v_s_30492.length - 1][v_t_30501] * v_we_27734, 0, -640 + v_n_30499 + 40), glContext.scale(1.98 * v_i_30497, 0, 1.3 * v_e_30498), v_Ve_27579.uniforms(v_vn_27625).draw(v_o_30494[v_s_30492[v_t_30501]]), glContext.popMatrix();
              }
              if (v_U_30262.D1 > v_kt_30224 || v_U_30262.D1 === v_kt_30224 && v_r_30490) {
                let v_o_30502 = "",
                  v_l_30503 = "",
                  v_c_30504 = 64;
                let v_t_30505 = !1;
                switch (v_H_30265.ao.bind(0), v_U_30262.D1) {
                  case v_kt_30224:
                    5 <= v_U_30262.Ta.pr && v_r_30490 && (v_o_30502 = "combo", v_l_30503 = v_U_30262.Ta.pr.toString(), v_t_30505 = !0);
                    break;
                  case 2:
                    v_o_30502 = "score", v_l_30503 = v_U_30262.Ta.Sr.toLocaleString("ja");
                    break;
                  case 3:
                    v_o_30502 = "score", v_l_30503 = v_U_30262.Ta.Ir.toLocaleString("ja");
                    break;
                  case 10:
                    0 <= v_U_30262.Ta.Ir - 975e3 && (v_o_30502 = "rank s", v_l_30503 = (v_U_30262.Ta.Ir - 975e3).toLocaleString("ja"));
                    break;
                  case 11:
                    0 <= v_U_30262.Ta.Ir - 99e4 && (v_o_30502 = "rank sp", v_l_30503 = (v_U_30262.Ta.Ir - 99e4).toLocaleString("ja"));
                    break;
                  case 12:
                    0 <= v_U_30262.Ta.Ir - 1e6 && (v_o_30502 = "rank ss", v_l_30503 = (v_U_30262.Ta.Ir - 1e6).toLocaleString("ja"));
                    break;
                  case 13:
                    0 <= v_U_30262.Ta.Ir - 1005e3 && (v_o_30502 = "rank ssp", v_l_30503 = (v_U_30262.Ta.Ir - 1005e3).toLocaleString("ja"), v_c_30504 = 57.6);
                    break;
                  case 14:
                    0 <= v_U_30262.Ta.Ir - 1007500 && (v_o_30502 = "rank sss", v_l_30503 = (v_U_30262.Ta.Ir - 1007500).toLocaleString("ja"), v_c_30504 = 57.6);
                    break;
                  case 15:
                    0 <= v_U_30262.Ta.Ir - 1009e3 && (v_o_30502 = "rank sssp", v_l_30503 = (v_U_30262.Ta.Ir - 1009e3).toLocaleString("ja"), v_c_30504 = 57.6);
                    break;
                  case v_bt_30225:
                    v_U_30262.Y1.y0.G4 ? 0 <= v_U_30262.Ta.Ir - v_U_30262.Y1.y0.Sr && (v_o_30502 = "my best", v_l_30503 = (v_U_30262.Ta.Ir - v_U_30262.Y1.y0.Sr).toLocaleString("ja")) : (v_o_30502 = "my best", v_l_30503 = v_U_30262.Ta.Ir.toLocaleString("ja")), v_c_30504 = 51.2;
                }
                if (v_U_30262.Fa !== v_l_30503 && (v_U_30262.Na.Ua = renderer.xt(), v_U_30262.Fa = v_l_30503), "" !== v_l_30503) {
                  let v_i_30506 = 0,
                    v_e_30507 = !1;
                  v_u_30491 = -v_we_27734 + 1.25 * v_c_30504;
                  v_i_30506 = v_u_30491;
                  for (let v_t_30512 = 0; v_t_30512 < v_o_30502.length; ++v_t_30512) v_e_30507 = "," === v_o_30502[v_t_30512] || " " === v_o_30502[v_t_30512], v_J_30266.dl["s" + v_o_30502[v_t_30512]] && (glContext.pushMatrix(), glContext.translate(v_i_30506, 0, -1330), glContext.scale(1.1, 0, 1.375), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.dl["s" + v_o_30502[v_t_30512]]), glContext.popMatrix()), v_i_30506 += v_e_30507 ? v_c_30504 / 2 : v_c_30504;
                  var v_f_30495 = 64 * (v_t_30505 ? 2 : 1.125);
                  let v_n_30508 = 0;
                  for (let v_t_30513 = 0; v_t_30513 < v_l_30503.length; ++v_t_30513) "v" === v_l_30503[v_t_30513] || " " === v_l_30503[v_t_30513] ? v_n_30508 += v_f_30495 / 2 : v_n_30508 += v_f_30495;
                  var v_u_30491 = 256 - v_n_30508 / 2,
                    v___30496 = (renderer.xt() - v_U_30262.Na.Ua) / 1e3;
                  let v_r_30509 = v_t_30505 ? 1.75 : 1,
                    v_s_30510 = v_t_30505 ? 1.25 : 1,
                    v_a_30511 = 0;
                  v___30496 <= .2 && (v___30496 = v___30496 < .1 ? v_Xl_28191(10 * v___30496) : 1 - v_Xl_28191(10 * v___30496 - 1), v_r_30509 += .066375 * v___30496, v_s_30510 += .109375 * v___30496, v_a_30511 = 24 * -v___30496), v_i_30506 = v_u_30491;
                  for (let v_t_30514 = 0; v_t_30514 < v_l_30503.length; ++v_t_30514) v_e_30507 = "," === v_l_30503[v_t_30514] || " " === v_l_30503[v_t_30514], v_J_30266.dl["s" + v_l_30503[v_t_30514]] && (glContext.pushMatrix(), glContext.translate(v_i_30506 - (v_e_30507 ? v_f_30495 / 4 : 0), 0, -1330 + v_a_30511), glContext.scale(1.4 * v_r_30509, 0, 1.575 * v_s_30510), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.dl["s" + v_l_30503[v_t_30514]]), glContext.popMatrix()), v_i_30506 += v_e_30507 ? v_f_30495 / 2 : v_f_30495;
                }
              }
            }
          },
          Jl: function (v_t_30515) {
            v_t_30515 && (glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Eo.bind(0), v_gn_27628.opacity = .625, v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.al), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
          },
          Wl: function (v_t_30516, v_i_30517, v_e_30518) {
            v_U_30262.Na.Va.Oa.oe(renderer.xt() / 1e3), v_U_30262.Na.Va.qe.oe(renderer.xt() / 1e3), v_i_30517.hand && v_U_30262.Na.Va.Oa.Kl(v_i_30517.y), v_U_30262.Na.Va.qe.Kl(v_t_30516 ? 1 : 0);
            var v_n_30519 = v_U_30262.Na.Va.qe.pi();
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), glContext.enable(glContext.DEPTH_TEST), glContext.depthMask(!1);
            let v_r_30520 = [!1, !1, !1, !1, !1],
              v_s_30521,
              v_a_30522 = v_i_30517.y;
            if (v_e_30518 || (v_a_30522 = v_U_30262.Na.Va.Oa.pi()), 0 < v_n_30519 && (glContext.pushMatrix(), v_s_30521 = v_a_30522, glContext.translate(0, 100 * v_s_30521 + v_M0_27738, v_j_30274(100 * v_s_30521 + v_M0_27738)), v_s_30521 < 0 ? (v_pn_27630.col[0] = .75, v_pn_27630.col[1] = .16, v_pn_27630.col[2] = 0) : (v_pn_27630.col[0] = .16, v_pn_27630.col[1] = .75, v_pn_27630.col[2] = .35), v_pn_27630.col[3] = v_n_30519, v_H_30265.Va.bind(0), v_Ke_27583.uniforms(v_pn_27630).draw(v_J_30266.sl), glContext.popMatrix(), -1 <= v_s_30521 && v_s_30521 < -0 && (v_r_30520[0] = !0), -1 <= v_s_30521 && v_s_30521 < 0 && (v_r_30520[1] = !0), -.25 <= v_s_30521 && v_s_30521 < .25 && (v_r_30520[2] = !0), 0 < v_s_30521 && v_s_30521 <= 1 && (v_r_30520[3] = !0), 0 < v_s_30521) && v_s_30521 <= 1 && (v_r_30520[4] = !0), glContext.disable(glContext.DEPTH_TEST), glContext.depthMask(!0), v_t_30516) for (let v_t_30523 = 0; v_t_30523 < 5; ++v_t_30523) v_r_30520[v_t_30523] && (glContext.pushMatrix(), v_s_30521 = v_t_30523 - 2, v_pn_27630.col[0] = 0, v_pn_27630.col[1] = 0, v_pn_27630.col[2] = .25, v_t_30523 < 2 ? v_pn_27630.col[0] = 1 : 2 === v_t_30523 ? v_pn_27630.col[1] = 1 : (v_pn_27630.col[0] = .12, v_pn_27630.col[1] = .5, v_pn_27630.col[2] = 1), v_pn_27630.col[3] = 1.25 * mathMax(1 - mathAbs(v_a_30522 - v_s_30521 / 2) / .6, 0), glContext.translate(0, 50 * v_s_30521 + v_M0_27738, v_j_30274(50 * v_s_30521 + v_M0_27738)), glContext.scale(1.25, 1, 1.25), v_H_30265.wL.bind(0), v_Ke_27583.uniforms(v_pn_27630).draw(v_J_30266.sl), glContext.popMatrix());
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          zl: function () {
            var v_i_30524 = v_U_30262.rr;
            for (let v_t_30527 = 0; v_t_30527 < 16; ++v_t_30527) {
              var v_e_30525 = v_U_30262.ua[v_t_30527].rr,
                v_n_30526 = v_U_30262.ua[v_t_30527].Fe;
              v_n_30526 !== v_y0_27725 && (glContext.pushMatrix(), glContext.translate(64 * v_t_30527, 0, 0), 1 === v_n_30526 ? (v_wn_27627.opacity = v_e_30525 === -1 / 0 ? 0 : mathMin((v_i_30524 - v_e_30525) / .05, 1), v_je_27575.uniforms(v_wn_27627).draw(v_J_30266.Oo)) : v_Ze_27586.uniforms({
                r: v_A0_27727[v_n_30526][0],
                g: v_A0_27727[v_n_30526][1],
                b: v_A0_27727[v_n_30526][2],
                a: v_e_30525 === -1 / 0 ? 0 : mathMin((v_i_30524 - v_e_30525) / .05, 1)
              }).draw(v_J_30266.Vo), glContext.popMatrix());
            }
          },
          Xl: function () {
            let v_i_30528 = v_J_30266.ml.Gl("vertices"),
              v_e_30529 = v_J_30266.ml.Gl("coords"),
              v_n_30530 = v_J_30266.ml.Gl("colors"),
              v_r_30531 = 0,
              v_s_30532 = 0,
              v_a_30533 = 0,
              v_o_30534 = 0,
              v_l_30535 = 0,
              v_c_30536 = 0,
              v_u_30537,
              v_f_30538 = 0,
              v_t_30539;
            for (v_t_30539 of v_U_30262.va.Zl()) v_t_30539.lr && v_t_30539.ur && v_t_30539._r && v___30540(v_t_30539);
            for (v_t_30539 of v_U_30262.va.Zl()) v_t_30539.lr && !v_t_30539.ur && v_t_30539._r && v___30540(v_t_30539);
            for (v_t_30539 of v_U_30262.va.Zl()) v_t_30539.lr && v_t_30539.ur && !v_t_30539._r && v___30540(v_t_30539);
            for (v_t_30539 of v_U_30262.va.Zl()) !v_t_30539.lr || v_t_30539.ur || v_t_30539._r || v___30540(v_t_30539);
            function v___30540(v_t_30541) {
              if (0 != v_t_30541.Fi) if (30 <= (v_r_30531 = (renderer.xt() - v_t_30541.rr) / 1e3 * 60) || 5120 <= v_f_30538) v_t_30541.lr = !1;else {
                v_u_30537 = v_t_30541.ur ? (v_l_30535 = v_r_30531 <= 8 ? 123 + 120 * v_Ql_28198(v_r_30531 / 8) : 19 <= v_r_30531 ? 243 + 80 * v_zl_28192((v_r_30531 - 19) / 10) : 243, v_c_30536 = v_r_30531 <= 10 ? v_Ql_28198(v_r_30531 / 10) : 21 <= v_r_30531 ? 1 - v_ql_28195((v_r_30531 - 21) / 8) : 1, v_s_30532 = 158.4, v_a_30533 = 131.069 * .85, v_o_30534 = -160 - (v_t_30541._r ? 120 : 0) + v_U_30262.H1, v_h_30276.get(65536 | v_t_30541.Fi)) : (v_l_30535 = 113 * v_Ql_28198(v_r_30531 / 30) + 120, v_c_30536 = v_r_30531 <= 20 ? v_Ql_28198(v_r_30531 / 20) : 1 - v_Ql_28198((v_r_30531 - 20) / 9), v_s_30532 = 175.5, v_a_30533 = 78.3 * .85, v_o_30534 = -(v_t_30541._r ? 280 : 0) + v_U_30262.H1, v_h_30276.get(v_t_30541.Fi)), v_l_30535 += v_E0_27739 * v_t_30541.G0 / 16 * .5, v_i_30528[3 * v_f_30538 + 0] = v_t_30541.ir - v_s_30532 / 2, v_i_30528[3 * v_f_30538 + 1] = v_l_30535 + v_a_30533 / 2, v_i_30528[3 * v_f_30538 + 2] = v_O_30275(v_l_30535 + v_a_30533 / 2) + v_o_30534, v_i_30528[3 * v_f_30538 + 3] = v_t_30541.ir + v_s_30532 / 2, v_i_30528[3 * v_f_30538 + 4] = v_l_30535 + v_a_30533 / 2, v_i_30528[3 * v_f_30538 + 5] = v_O_30275(v_l_30535 + v_a_30533 / 2) + v_o_30534, v_i_30528[3 * v_f_30538 + 6] = v_t_30541.ir - v_s_30532 / 2, v_i_30528[3 * v_f_30538 + 7] = v_l_30535 - v_a_30533 / 2, v_i_30528[3 * v_f_30538 + 8] = v_O_30275(v_l_30535 - v_a_30533 / 2) + v_o_30534, v_i_30528[3 * v_f_30538 + 9] = v_t_30541.ir + v_s_30532 / 2, v_i_30528[3 * v_f_30538 + 10] = v_l_30535 - v_a_30533 / 2, v_i_30528[3 * v_f_30538 + 11] = v_O_30275(v_l_30535 - v_a_30533 / 2) + v_o_30534, v_e_30529[2 * v_f_30538 + 0] = v_u_30537[0] / 1024, v_e_30529[2 * v_f_30538 + 1] = v_u_30537[1] / 1024, v_e_30529[2 * v_f_30538 + 2] = (v_u_30537[0] + v_u_30537[2]) / 1024, v_e_30529[2 * v_f_30538 + 3] = v_u_30537[1] / 1024, v_e_30529[2 * v_f_30538 + 4] = v_u_30537[0] / 1024, v_e_30529[2 * v_f_30538 + 5] = (v_u_30537[1] + v_u_30537[3]) / 1024, v_e_30529[2 * v_f_30538 + 6] = (v_u_30537[0] + v_u_30537[2]) / 1024, v_e_30529[2 * v_f_30538 + 7] = (v_u_30537[1] + v_u_30537[3]) / 1024;
                for (let v_t_30542 = 0; v_t_30542 < 4; ++v_t_30542) v_n_30530[4 * v_f_30538 + 0 + 4 * v_t_30542] = 1, v_n_30530[4 * v_f_30538 + 1 + 4 * v_t_30542] = 1, v_n_30530[4 * v_f_30538 + 2 + 4 * v_t_30542] = 1, v_n_30530[4 * v_f_30538 + 3 + 4 * v_t_30542] = v_c_30536;
                v_f_30538 += 4;
              }
            }
            0 < v_f_30538 && (v_J_30266.ml.jl("vertices", 3 * v_f_30538), v_J_30266.ml.jl("colors", 4 * v_f_30538), v_J_30266.ml.jl("coords", 2 * v_f_30538), v_H_30265.Po.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_f_30538 / 2 * 3));
          },
          z4: function () {
            var v_i_30543 = v_J_30266.ml.Gl("vertices"),
              v_e_30544 = v_J_30266.ml.Gl("colors");
            let v_n_30545,
              v_r_30546 = 0,
              v_s_30547,
              v_a_30548,
              v_o_30549,
              v_l_30550,
              v_c_30551;
            for (let v_t_30552 = 0; v_t_30552 < v_U_30262.ta && !(5120 <= v_r_30546); ++v_t_30552) if ((v_n_30545 = v_U_30262.ea[v_t_30552]).Fi === v_Tn_27663 || v_n_30545.Fi === v_ce_27678 || v_n_30545.Fi === v_le_27675 || v__0_27710(v_n_30545.Fi) || v_n_30545.Fi === v_Pn_27665) {
              v_l_30550 = v_n_30545.Gg * -v_ve_27731, v_c_30551 = v_n_30545.Ng * -v_ve_27731;
              for (let v_t_30553 = v_n_30545.ou; v_t_30553 < v_n_30545.ou + v_n_30545.Le; ++v_t_30553) {
                v_s_30547 = 64 * v_t_30553 - v_we_27734, v_a_30548 = mathMin(v_n_30545.jg[v_t_30553], v_U_30262.Eb.Ra.Mb), v_o_30549 = mathMax(v_n_30545.Hg[v_t_30553], v_U_30262.Eb.Ra.Pb), v_i_30543[3 * v_r_30546 + 0] = v_s_30547, v_i_30543[3 * v_r_30546 + 1] = 0, v_i_30543[3 * v_r_30546 + 2] = v_l_30550, v_i_30543[3 * v_r_30546 + 3] = 64 + v_s_30547, v_i_30543[3 * v_r_30546 + 4] = 0, v_i_30543[3 * v_r_30546 + 5] = v_l_30550, v_i_30543[3 * v_r_30546 + 6] = v_s_30547, v_i_30543[3 * v_r_30546 + 7] = 0, v_i_30543[3 * v_r_30546 + 8] = v_c_30551, v_i_30543[3 * v_r_30546 + 9] = 64 + v_s_30547, v_i_30543[3 * v_r_30546 + 10] = 0, v_i_30543[3 * v_r_30546 + 11] = v_c_30551;
                for (let v_t_30554 = 0; v_t_30554 < 4; ++v_t_30554) v_e_30544[4 * (v_r_30546 + v_t_30554) + 0] = v_t_30554 < 2 ? 0 : 1, v_e_30544[4 * (v_r_30546 + v_t_30554) + 1] = v_a_30548 / .1, v_e_30544[4 * (v_r_30546 + v_t_30554) + 2] = -v_o_30549 / .1, v_e_30544[4 * (v_r_30546 + v_t_30554) + 3] = .5;
                v_r_30546 += 4;
              }
            }
            0 < v_r_30546 && (v_J_30266.ml.jl("vertices", 3 * v_r_30546), v_J_30266.ml.jl("colors", 4 * v_r_30546), v_fn_27601.drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_r_30546 / 2 * 3));
          },
          $l: function () {
            let v_s_30555,
              v_a_30556,
              v_o_30557,
              v_l_30558,
              v_c_30559,
              v_u_30560 = 0,
              v_f_30561 = 0,
              v___30562 = new Float32Array(v_J_30266.hl.vertices),
              v_h_30563 = new Float32Array(v_J_30266.hl.coords),
              v_d_30564 = new Uint16Array(v_J_30266.hl.triangles),
              v_i_30565 = 0,
              v_e_30566 = 0,
              v_n_30567,
              v_r_30568;
            for (v_H_30265.by.bind(0), v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30571 = 0; v_t_30571 < v_U_30262.ta; ++v_t_30571) if (v_U_30262.ea[v_t_30571].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30571]).Fi === v_le_27675) for (v_e_30566 = 0; v_e_30566 < v_n_30567.We.length; ++v_e_30566) (v_r_30568 = v_n_30567.We[v_e_30566]).Fi !== v_Un_27676 || 5 === v_r_30568.Ug || v_r_30568.Vg || v_v_30569(v_r_30568.ou, v_r_30568.Pg, v_r_30568.Le, v_r_30568.Fi === v_Un_27676 ? v_Un_27676 : v_Jn_27679, v_bn_27637);
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30572 = 0; v_t_30572 < v_U_30262.ta; ++v_t_30572) if (v_U_30262.ea[v_t_30572].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30572]).Fi === v_ce_27678) for (v_e_30566 = 0; v_e_30566 < v_n_30567.We.length; ++v_e_30566) (v_r_30568 = v_n_30567.We[v_e_30566]).Fi !== v_jn_27680 && v_r_30568.Fi !== v_Jn_27679 || 5 === v_r_30568.Ug || v_r_30568.Vg || v_v_30569(v_r_30568.ou, v_r_30568.Pg, v_r_30568.Le, v_r_30568.Fi === v_Un_27676 ? v_Un_27676 : v_Jn_27679, v_bn_27637);
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30573 = 0; v_t_30573 < v_U_30262.ta; ++v_t_30573) if (v_U_30262.ea[v_t_30573].Le === v_i_30565 && ((v_n_30567 = v_U_30262.ea[v_t_30573]).Fi === v_ce_27678 || v_n_30567.Fi === v_le_27675)) for (v_e_30566 = 0; v_e_30566 < v_n_30567.We.length; ++v_e_30566) ((v_r_30568 = v_n_30567.We[v_e_30566]).Fi === v_Jn_27679 || v_r_30568.Fi === v_Un_27676) && 5 !== v_r_30568.Ug && v_r_30568.od >= v_U_30262.C1 && v_r_30568.Vg && v_v_30569(v_r_30568.ou, v_r_30568.Pg, v_r_30568.Le, v_Kn_27687, v_bn_27637);
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) {
              for (let v_t_30574 = 0; v_t_30574 < v_U_30262.ta; ++v_t_30574) v_U_30262.ea[v_t_30574].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30574]).Fi === v_le_27675 && 1 !== v_n_30567.Jg && v_n_30567.Ug === v_v0_27715 && v_v_30569(v_n_30567.ou, v_n_30567.od >= v_U_30262.C1 ? v_n_30567.Pg : v_n_30567.Og, v_n_30567.Le, v_n_30567.Fi, v_bn_27637);
              for (let v_t_30575 = 0; v_t_30575 < v_U_30262.ta; ++v_t_30575) v_U_30262.ea[v_t_30575].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30575]).Fi === v_ce_27678 && 1 !== v_n_30567.Jg && v_n_30567.Ug === v_v0_27715 && v_v_30569(v_n_30567.ou, v_n_30567.od >= v_U_30262.C1 ? v_n_30567.Pg : v_n_30567.Og, v_n_30567.Le, v_n_30567.Fi, v_bn_27637);
            }
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30576 = 0; v_t_30576 < v_U_30262.ta; ++v_t_30576) v_U_30262.ea[v_t_30576].Le !== v_i_30565 || (v_n_30567 = v_U_30262.ea[v_t_30576]).Fi !== v_Tn_27663 && v_n_30567.Fi !== v_Pn_27665 || v_v_30569(v_n_30567.ou, v_n_30567.od >= v_U_30262.C1 ? v_n_30567.Pg : v_n_30567.Og, v_n_30567.Le, v_n_30567.Fi, v_bn_27637);
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30577 = 0; v_t_30577 < v_U_30262.ta; ++v_t_30577) v_U_30262.ea[v_t_30577].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30577], v__0_27710(v_n_30567.Fi) || (v_n_30567.Fi === v_ce_27678 || v_n_30567.Fi === v_le_27675) && 1 === v_n_30567.Jg && v_n_30567.Ug === v_v0_27715) && v_v_30569(v_n_30567.ou, v_n_30567.od >= v_U_30262.C1 ? v_n_30567.Pg : v_n_30567.Og, v_n_30567.Le, v_In_27664, v_bn_27637);
            for (v_i_30565 = 16; 0 < v_i_30565; --v_i_30565) for (let v_t_30578 = 0; v_t_30578 < v_U_30262.ta; ++v_t_30578) v_U_30262.ea[v_t_30578].Le === v_i_30565 && (v_n_30567 = v_U_30262.ea[v_t_30578]).Fi === v_Rn_27666 && v_v_30569(v_n_30567.ou, v_n_30567.od >= v_U_30262.C1 ? v_n_30567.Pg : v_n_30567.Og, v_n_30567.Le, v_Rn_27666, v_bn_27637);
            function v_v_30569(v_t_30579, v_i_30580, v_e_30581, v_n_30582, v_r_30583) {
              v_i_30580 <= -.0625 || .84 <= v_i_30580 || (v_a_30556 = 64 * v_t_30579 - v_we_27734, v_l_30558 = v_r_30583 ? (v_o_30557 = -v_ve_27731 * v_i_30580 - v_L0_27737 / 2, -v_ve_27731 * v_i_30580 + v_L0_27737 / 2) : (v_o_30557 = -v_ve_27731 * v_i_30580 - v_R0_27736 / 2, -v_ve_27731 * v_i_30580 + v_R0_27736 / 2), v_s_30555 = 64 * v_e_30581, 1024 <= v_u_30560 + 4 && v_w_30570(), v_c_30559 = v_ni_30282[v_e_30581], v___30562[3 * v_u_30560 + 0] = v_a_30556, v___30562[3 * v_u_30560 + 2] = v_o_30557, v___30562[3 * v_u_30560 + 3] = v_a_30556 + v_s_30555, v___30562[3 * v_u_30560 + 5] = v_o_30557, v___30562[3 * v_u_30560 + 6] = v_a_30556, v___30562[3 * v_u_30560 + 8] = v_l_30558, v___30562[3 * v_u_30560 + 9] = v_a_30556 + v_s_30555, v___30562[3 * v_u_30560 + 11] = v_l_30558, v_h_30563[2 * v_u_30560 + 0] = v_g_30281[v_n_30582][v_c_30559][0], v_h_30563[2 * v_u_30560 + 1] = v_g_30281[v_n_30582][v_c_30559][1], v_h_30563[2 * v_u_30560 + 2] = v_g_30281[v_n_30582][v_c_30559][2], v_h_30563[2 * v_u_30560 + 3] = v_g_30281[v_n_30582][v_c_30559][1], v_h_30563[2 * v_u_30560 + 4] = v_g_30281[v_n_30582][v_c_30559][0], v_h_30563[2 * v_u_30560 + 5] = v_g_30281[v_n_30582][v_c_30559][3], v_h_30563[2 * v_u_30560 + 6] = v_g_30281[v_n_30582][v_c_30559][2], v_h_30563[2 * v_u_30560 + 7] = v_g_30281[v_n_30582][v_c_30559][3], v_d_30564[3 * v_f_30561 + 0] = v_u_30560 + 0, v_d_30564[3 * v_f_30561 + 1] = v_u_30560 + 1, v_d_30564[3 * v_f_30561 + 2] = v_u_30560 + 2, v_d_30564[3 * v_f_30561 + 3] = v_u_30560 + 2, v_d_30564[3 * v_f_30561 + 4] = v_u_30560 + 1, v_d_30564[3 * v_f_30561 + 5] = v_u_30560 + 3, v_u_30560 += 4, v_f_30561 += 2);
            }
            function v_w_30570() {
              0 !== v_u_30560 && (v_J_30266.hl.subdata("gl_Vertex", new Float32Array(v___30562, 0, 3 * v_u_30560)), v_J_30266.hl.subdata("gl_TexCoord", new Float32Array(v_h_30563, 0, 2 * v_u_30560)), v_J_30266.hl.subdata_i("triangles", new Uint16Array(v_d_30564, 0, 3 * v_f_30561)), v_Ve_27579.uniforms(v_vn_27625).drawBuffers(v_J_30266.hl.vertexBuffers, v_J_30266.hl.indexBuffers.triangles, glContext.TRIANGLES, 3 * v_f_30561), v_u_30560 = 0, v_f_30561 = 0);
            }
            v_w_30570();
          },
          ql: function () {
            var v_i_30584,
              v_e_30585,
              v_n_30586 = -1.25 * v_U_30262.wa[v_U_30262.q1.Zu.Wg];
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Iy.bind(0);
            for (let v_t_30587 = 0; v_t_30587 < v_U_30262.ta; ++v_t_30587) v_i_30584 = v_U_30262.ea[v_t_30587], !v__0_27710(v_i_30584.Fi) && (v_i_30584.Fi !== v_ce_27678 && v_i_30584.Fi !== v_le_27675 || 1 !== v_i_30584.Jg || v_i_30584.Ug !== v_v0_27715) || (v_e_30585 = v_ni_30282[v_i_30584.Le], v_i_30584.Le === v_e_30585 ? v_nn_27592.uniforms({
              texture: 0,
              transX: 64 * v_i_30584.ou,
              transY: 0,
              transZ: -(v_i_30584.od >= v_U_30262.C1 ? v_i_30584.Pg : v_i_30584.Og) * v_ve_27731,
              roll: v_n_30586
            }).uniforms().draw((v_bn_27637 ? v_J_30266.ll : v_J_30266.ol).get(v_e_30585)) : (glContext.pushMatrix(), glContext.scale(v_i_30584.Le / v_e_30585, 1, 1), v_nn_27592.uniforms({
              texture: 0,
              transX: v_we_27734 - 64 * v_e_30585 / 2 + 64 * (v_i_30584.ou + v_i_30584.Le / 2 - 8) * (v_e_30585 / v_i_30584.Le),
              transY: 0,
              transZ: -(v_i_30584.od >= v_U_30262.C1 ? v_i_30584.Pg : v_i_30584.Og) * v_ve_27731,
              roll: v_n_30586
            }).draw((v_bn_27637 ? v_J_30266.ll : v_J_30266.ol).get(v_e_30585)), glContext.popMatrix()));
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          Ql: function () {
            var v_i_30588,
              v_e_30589 = v_J_30266.ml.Gl("vertices"),
              v_n_30590 = v_J_30266.ml.Gl("coords");
            let v_r_30591 = 0,
              v_s_30592,
              v_a_30593,
              v_o_30594,
              v_l_30595,
              v_c_30596,
              v_u_30597,
              v_f_30598;
            for (let v_t_30599 = v_U_30262.ta - 1; 0 <= v_t_30599; --v_t_30599) if ((v_i_30588 = v_U_30262.ea[v_t_30599]).Fi === v_Rn_27666) {
              v_a_30593 = (v_s_30592 = 64 * v_i_30588.ou - v_we_27734 + 10) + 64 * v_i_30588.Le - 20, v_o_30594 = -v_i_30588.Pg * v_ve_27731, v_l_30595 = (v_u_30597 = mathFloor(30 * (renderer.xt() / 1e3 + v_i_30588.od)) % 8) / 8, v_c_30596 = (1 + v_u_30597) / 8, v_e_30589[3 * v_r_30591 + 0] = v_s_30592, v_e_30589[3 * v_r_30591 + 1] = 60, v_e_30589[3 * v_r_30591 + 2] = v_o_30594 - 20, v_e_30589[3 * v_r_30591 + 3] = v_a_30593, v_e_30589[3 * v_r_30591 + 4] = 60, v_e_30589[3 * v_r_30591 + 5] = v_o_30594 - 20, v_e_30589[3 * v_r_30591 + 6] = v_s_30592, v_e_30589[3 * v_r_30591 + 7] = 2, v_e_30589[3 * v_r_30591 + 8] = v_o_30594 + 92 / 3, v_e_30589[3 * v_r_30591 + 9] = v_a_30593, v_e_30589[3 * v_r_30591 + 10] = 2, v_e_30589[3 * v_r_30591 + 11] = v_o_30594 + 92 / 3, v_n_30590[2 * v_r_30591 + 0] = v_l_30595, v_n_30590[2 * v_r_30591 + 1] = .5, v_n_30590[2 * v_r_30591 + 2] = v_c_30596, v_n_30590[2 * v_r_30591 + 3] = .5, v_n_30590[2 * v_r_30591 + 4] = v_l_30595, v_n_30590[2 * v_r_30591 + 5] = 0, v_n_30590[2 * v_r_30591 + 6] = v_c_30596, v_n_30590[2 * v_r_30591 + 7] = 0, v_r_30591 += 4, v_u_30597 = mathFloor(30 * (renderer.xt() / 1e3 + v_i_30588.od));
              for (let v_t_30600 = 0; v_t_30600 < v_i_30588.Le; ++v_t_30600) 7 < (v_f_30598 = (v_u_30597 + v_ai_30286[v_t_30600]) % 16) || (v_l_30595 = v_f_30598 / 16, v_c_30596 = (1 + v_f_30598) / 16, v_a_30593 = 64 + (v_s_30592 = 64 * (v_i_30588.ou + v_t_30600) - v_we_27734), v_e_30589[3 * v_r_30591 + 0] = v_s_30592, v_e_30589[3 * v_r_30591 + 1] = 60, v_e_30589[3 * v_r_30591 + 2] = v_o_30594 - 20, v_e_30589[3 * v_r_30591 + 3] = v_a_30593, v_e_30589[3 * v_r_30591 + 4] = 60, v_e_30589[3 * v_r_30591 + 5] = v_o_30594 - 20, v_e_30589[3 * v_r_30591 + 6] = v_s_30592, v_e_30589[3 * v_r_30591 + 7] = 20, v_e_30589[3 * v_r_30591 + 8] = v_o_30594 + 92 / 3, v_e_30589[3 * v_r_30591 + 9] = v_a_30593, v_e_30589[3 * v_r_30591 + 10] = 20, v_e_30589[3 * v_r_30591 + 11] = v_o_30594 + 92 / 3, v_n_30590[2 * v_r_30591 + 0] = v_l_30595, v_n_30590[2 * v_r_30591 + 1] = 1, v_n_30590[2 * v_r_30591 + 2] = v_c_30596, v_n_30590[2 * v_r_30591 + 3] = 1, v_n_30590[2 * v_r_30591 + 4] = v_l_30595, v_n_30590[2 * v_r_30591 + 5] = .75, v_n_30590[2 * v_r_30591 + 6] = v_c_30596, v_n_30590[2 * v_r_30591 + 7] = .75, v_r_30591 += 4);
            }
            0 < v_r_30591 && (v_J_30266.ml.jl("vertices", 3 * v_r_30591), v_J_30266.ml.jl("coords", 2 * v_r_30591), v_H_30265.Lo.bind(0), v_Ve_27579.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_r_30591 / 2 * 3));
          },
          ec: function (v_o_30601) {
            var v_n_30602 = v_o_30601.Ug !== v_v0_27715 && (1 === v_o_30601.Ug || null !== v_o_30601.Sw && v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1 + v_U_30262.dI - v_o_30601.Sw <= v_U_30262.Eb.Fb.Db),
              v_l_30603 = v_U_30262.C1,
              v_r_30604 = v_U_30262.wa[v_U_30262.q1.Zu.Wg] - v_o_30601.Kg;
            let v_s_30605 = 0;
            {
              let v_i_30623,
                v_e_30624 = v_o_30601;
              for (let v_t_30625 = 0; v_t_30625 < v_o_30601.We.length; ++v_t_30625) (v_i_30623 = v_o_30601.We[v_t_30625]).Fi !== v_c0_27703 && (v_e_30624 = (!(v_i_30623.od > v_l_30603 && v_e_30624.od <= v_l_30603) && (v_i_30623.od >= v_l_30603 && (v_i_30623.Pg < -.0625 && v_e_30624.Pg < -.0625 || .84 < v_i_30623.Pg && .84 < v_e_30624.Pg) || v_i_30623.od < v_l_30603 && (v_i_30623.Pg < 0 && v_e_30624.Og < 0 || .84 < v_i_30623.Pg && .84 < v_e_30624.Og)) || v_i_30623.od < v_l_30603 && v_e_30624.od < v_l_30603 || v_i_30623.Xg === v_e_30624.Xg || ++v_s_30605, v_i_30623));
              if (v_e_30624 = v_o_30601, !v_n_30602) for (let v_t_30626 = 0; v_t_30626 < v_o_30601.We.length; ++v_t_30626) (v_i_30623 = v_o_30601.We[v_t_30626]).Fi !== v_c0_27703 && (v_e_30624 = (v_i_30623.Og < -.0625 && v_e_30624.Og < -.0625 || 0 < v_i_30623.Og && 0 < v_e_30624.Og || v_i_30623.od >= v_l_30603 && v_e_30624.od >= v_l_30603 || v_i_30623.Xg === v_e_30624.Xg || ++v_s_30605, v_i_30623));
            }
            var v_c_30606 = v_o_30601.Fi === v_ce_27678,
              v_u_30607 = [],
              v_f_30608 = [],
              v___30609 = [],
              v_h_30610 = [];
            for (let v_t_30627 = 0; v_t_30627 < v_s_30605; v_t_30627 += v_L_30267) {
              var v_i_30611 = mathMin(v_L_30267, v_s_30605 - v_t_30627);
              v_u_30607.push(new Float32Array(6 * v_i_30611 * 3)), v_f_30608.push(new Float32Array(6 * v_i_30611 * 2)), v___30609.push(new Float32Array(6 * v_i_30611 * 4)), v_c_30606 && v_h_30610.push(new Float32Array(4 * v_i_30611 * 3));
            }
            let v_d_30612 = v_u_30607[0],
              v_v_30613 = v_f_30608[0],
              v_w_30614 = v___30609[0],
              v_g_30615 = v_h_30610[0],
              v_m_30616 = 0,
              v_p_30617 = 0,
              v_k_30618,
              v_b_30619 = 0,
              v_y_30620 = 0,
              v_S_30621,
              v_A_30622;
            {
              let v_i_30628 = v_o_30601,
                v_e_30629,
                v_n_30630,
                v_r_30631,
                v_s_30632,
                v_a_30633;
              for (let v_t_30634 = 0; v_t_30634 < v_o_30601.We.length; ++v_t_30634) (v_S_30621 = v_o_30601.We[v_t_30634]).Fi !== v_c0_27703 && (!(v_S_30621.od > v_l_30603 && v_i_30628.od <= v_l_30603) && (v_S_30621.od >= v_l_30603 && (v_S_30621.Pg < -.0625 && v_i_30628.Pg < -.0625 || .84 < v_S_30621.Pg && .84 < v_i_30628.Pg) || v_S_30621.od < v_l_30603 && (v_S_30621.Pg < 0 && v_i_30628.Og < 0 || .84 < v_S_30621.Pg && .84 < v_i_30628.Og)) || v_S_30621.od < v_l_30603 && v_i_30628.od < v_l_30603 || v_S_30621.Xg === v_i_30628.Xg ? v_i_30628 = v_S_30621 : (v_i_30628.od < v_l_30603 ? (v_e_30629 = (v_l_30603 - v_i_30628.od) / (v_S_30621.od - v_i_30628.od), v_n_30630 = v_o_30601.Fi === v_ce_27678 ? 64 * v_Ee_28084(v_i_30628.ou, v_S_30621.ou, v_e_30629) : 64 * v_i_30628.ou, v_r_30631 = v_e_30629 * (v_S_30621.zg - v_i_30628.zg) + v_i_30628.zg, v_k_30618 = [[64 * v_S_30621.ou - v_we_27734, -v_S_30621.Pg * v_ve_27731], [64 * v_S_30621.ou - v_we_27734 + 64 * v_S_30621.Le, -v_S_30621.Pg * v_ve_27731], [v_n_30630 - v_we_27734, 0], [v_n_30630 - v_we_27734 + 64 * v_Ee_28084(v_i_30628.Le, v_S_30621.Le, v_e_30629), 0]], v_c_30606 && (v_s_30632 = 64 * (v_S_30621.ou + v_S_30621.Le / 2) - v_we_27734, v_a_30633 = v_n_30630 - v_we_27734 + 64 * v_Ee_28084(v_i_30628.Le, v_S_30621.Le, v_e_30629) / 2, v_A_30622 = 3 * v_y_30620, v_g_30615[v_A_30622 + 0] = v_s_30632 - 34, v_g_30615[v_A_30622 + 2] = v_g_30615[v_A_30622 + 5] = -v_S_30621.Pg * v_ve_27731, v_g_30615[v_A_30622 + 3] = v_s_30632 + 34, v_g_30615[v_A_30622 + 6] = v_a_30633 - 34, v_g_30615[v_A_30622 + 8] = v_g_30615[v_A_30622 + 11] = 0, v_g_30615[v_A_30622 + 9] = v_a_30633 + 34)) : (v_r_30631 = v_i_30628.zg, v_k_30618 = [[64 * v_S_30621.ou - v_we_27734, -v_S_30621.Pg * v_ve_27731], [64 * v_S_30621.ou - v_we_27734 + 64 * v_S_30621.Le, -v_S_30621.Pg * v_ve_27731], [64 * v_i_30628.ou - v_we_27734, -v_i_30628.Pg * v_ve_27731], [64 * v_i_30628.ou - v_we_27734 + 64 * v_i_30628.Le, -v_i_30628.Pg * v_ve_27731]], v_c_30606 && (v_s_30632 = 64 * (v_S_30621.ou + v_S_30621.Le / 2) - v_we_27734, v_a_30633 = 64 * (v_i_30628.ou + v_i_30628.Le / 2) - v_we_27734, v_A_30622 = 3 * v_y_30620, v_g_30615[v_A_30622 + 0] = v_s_30632 - 34, v_g_30615[v_A_30622 + 2] = v_g_30615[v_A_30622 + 5] = -v_S_30621.Pg * v_ve_27731, v_g_30615[v_A_30622 + 3] = v_s_30632 + 34, v_g_30615[v_A_30622 + 6] = v_a_30633 - 34, v_g_30615[v_A_30622 + 8] = v_g_30615[v_A_30622 + 11] = -v_i_30628.Pg * v_ve_27731, v_g_30615[v_A_30622 + 9] = v_a_30633 + 34)), v_A_30622 = 3 * v_b_30619, v_d_30612[v_A_30622 + 0] = v_k_30618[0][0], v_d_30612[v_A_30622 + 2] = v_k_30618[0][1], v_d_30612[v_A_30622 + 3] = v_k_30618[1][0], v_d_30612[v_A_30622 + 5] = v_k_30618[1][1], v_d_30612[v_A_30622 + 6] = v_k_30618[2][0], v_d_30612[v_A_30622 + 8] = v_k_30618[2][1], v_d_30612[v_A_30622 + 9] = v_k_30618[2][0], v_d_30612[v_A_30622 + 11] = v_k_30618[2][1], v_d_30612[v_A_30622 + 12] = v_k_30618[1][0], v_d_30612[v_A_30622 + 14] = v_k_30618[1][1], v_d_30612[v_A_30622 + 15] = v_k_30618[3][0], v_d_30612[v_A_30622 + 17] = v_k_30618[3][1], v_A_30622 = 2 * v_b_30619, v_v_30613[v_A_30622 + 2] = 1, v_v_30613[v_A_30622 + 8] = 1, v_v_30613[v_A_30622 + 10] = 1, v_v_30613[v_A_30622 + 5] = v_r_30631, v_v_30613[v_A_30622 + 7] = v_r_30631, v_v_30613[v_A_30622 + 11] = v_r_30631, v_v_30613[v_A_30622 + 1] = v_S_30621.zg, v_v_30613[v_A_30622 + 3] = v_S_30621.zg, v_v_30613[v_A_30622 + 9] = v_S_30621.zg, v_s_30632 = v_k_30618[1][0] - v_k_30618[0][0], v_a_30633 = v_k_30618[3][0] - v_k_30618[2][0], v_A_30622 = 4 * v_b_30619, v_w_30614[v_A_30622 + 0] = v_s_30632, v_w_30614[v_A_30622 + 1] = v_a_30633, v_w_30614[v_A_30622 + 2] = 0, v_w_30614[v_A_30622 + 3] = 0, v_w_30614[v_A_30622 + 4] = v_s_30632, v_w_30614[v_A_30622 + 5] = v_a_30633, v_w_30614[v_A_30622 + 6] = 0, v_w_30614[v_A_30622 + 7] = 0, v_w_30614[v_A_30622 + 8] = v_s_30632, v_w_30614[v_A_30622 + 9] = v_a_30633, v_w_30614[v_A_30622 + 10] = 0, v_w_30614[v_A_30622 + 11] = 1, v_w_30614[v_A_30622 + 12] = v_a_30633, v_w_30614[v_A_30622 + 13] = v_s_30632, v_w_30614[v_A_30622 + 14] = 1, v_w_30614[v_A_30622 + 15] = 0, v_w_30614[v_A_30622 + 16] = v_a_30633, v_w_30614[v_A_30622 + 17] = v_s_30632, v_w_30614[v_A_30622 + 18] = 1, v_w_30614[v_A_30622 + 19] = 1, v_w_30614[v_A_30622 + 20] = v_a_30633, v_w_30614[v_A_30622 + 21] = v_s_30632, v_w_30614[v_A_30622 + 22] = 1, v_w_30614[v_A_30622 + 23] = 0, v_b_30619 += 6, v_c_30606 && (v_y_30620 += 4), v_i_30628 = v_S_30621, ++v_m_30616 >= v_L_30267 && (v_m_30616 = 0, ++v_p_30617, v_d_30612 = v_u_30607[v_p_30617], v_v_30613 = v_f_30608[v_p_30617], v_w_30614 = v___30609[v_p_30617], v_c_30606 && (v_g_30615 = v_h_30610[v_p_30617]), v_b_30619 = 0, v_y_30620 = 0)));
            }
            if (!v_n_30602) {
              let v_i_30635 = v_o_30601,
                v_e_30636,
                v_n_30637,
                v_r_30638,
                v_s_30639,
                v_a_30640;
              for (let v_t_30641 = 0; v_t_30641 < v_o_30601.We.length; ++v_t_30641) (v_S_30621 = v_o_30601.We[v_t_30641]).Fi !== v_c0_27703 && (v_S_30621.Og < -.0625 && v_i_30635.Og < -.0625 || 0 < v_S_30621.Og && 0 < v_i_30635.Og || v_S_30621.od >= v_l_30603 && v_i_30635.od >= v_l_30603 || v_S_30621.Xg === v_i_30635.Xg ? v_i_30635 = v_S_30621 : (v_S_30621.od >= v_l_30603 ? (v_e_30636 = (v_l_30603 - v_i_30635.od) / (v_S_30621.od - v_i_30635.od), v_n_30637 = v_o_30601.Fi === v_ce_27678 ? 64 * v_Ee_28084(v_i_30635.ou, v_S_30621.ou, v_e_30636) : 64 * v_i_30635.ou, v_r_30638 = v_e_30636 * (v_S_30621.zg - v_i_30635.zg) + v_i_30635.zg, v_k_30618 = [[v_n_30637 - v_we_27734, 0], [v_n_30637 - v_we_27734 + 64 * v_Ee_28084(v_i_30635.Le, v_S_30621.Le, v_e_30636), 0], [64 * v_i_30635.ou - v_we_27734, -v_i_30635.Og * v_ve_27731], [64 * v_i_30635.ou - v_we_27734 + 64 * v_i_30635.Le, -v_i_30635.Og * v_ve_27731]], v_c_30606 && (v_s_30639 = v_n_30637 - v_we_27734 + 64 * v_Ee_28084(v_i_30635.Le, v_S_30621.Le, v_e_30636) / 2, v_a_30640 = 64 * (v_i_30635.ou + v_i_30635.Le / 2) - v_we_27734, v_A_30622 = 3 * v_y_30620, v_g_30615[v_A_30622 + 0] = v_s_30639 - 34, v_g_30615[v_A_30622 + 2] = v_g_30615[v_A_30622 + 5] = 0, v_g_30615[v_A_30622 + 3] = v_s_30639 + 34, v_g_30615[v_A_30622 + 6] = v_a_30640 - 34, v_g_30615[v_A_30622 + 8] = v_g_30615[v_A_30622 + 11] = -v_i_30635.Og * v_ve_27731, v_g_30615[v_A_30622 + 9] = v_a_30640 + 34)) : (v_r_30638 = v_S_30621.zg, v_k_30618 = [[64 * v_S_30621.ou - v_we_27734, -v_S_30621.Og * v_ve_27731], [64 * v_S_30621.ou - v_we_27734 + 64 * v_S_30621.Le, -v_S_30621.Og * v_ve_27731], [64 * v_i_30635.ou - v_we_27734, -v_i_30635.Og * v_ve_27731], [64 * v_i_30635.ou - v_we_27734 + 64 * v_i_30635.Le, -v_i_30635.Og * v_ve_27731]], v_c_30606 && (v_s_30639 = 64 * (v_S_30621.ou + v_S_30621.Le / 2) - v_we_27734, v_a_30640 = 64 * (v_i_30635.ou + v_i_30635.Le / 2) - v_we_27734, v_A_30622 = 3 * v_y_30620, v_g_30615[v_A_30622 + 0] = v_s_30639 - 34, v_g_30615[v_A_30622 + 2] = v_g_30615[v_A_30622 + 5] = -v_S_30621.Og * v_ve_27731, v_g_30615[v_A_30622 + 3] = v_s_30639 + 34, v_g_30615[v_A_30622 + 6] = v_a_30640 - 34, v_g_30615[v_A_30622 + 8] = v_g_30615[v_A_30622 + 11] = -v_i_30635.Og * v_ve_27731, v_g_30615[v_A_30622 + 9] = v_a_30640 + 34)), v_A_30622 = 3 * v_b_30619, v_d_30612[v_A_30622 + 0] = v_k_30618[0][0], v_d_30612[v_A_30622 + 2] = v_k_30618[0][1], v_d_30612[v_A_30622 + 3] = v_k_30618[1][0], v_d_30612[v_A_30622 + 5] = v_k_30618[1][1], v_d_30612[v_A_30622 + 6] = v_k_30618[2][0], v_d_30612[v_A_30622 + 8] = v_k_30618[2][1], v_d_30612[v_A_30622 + 9] = v_k_30618[2][0], v_d_30612[v_A_30622 + 11] = v_k_30618[2][1], v_d_30612[v_A_30622 + 12] = v_k_30618[1][0], v_d_30612[v_A_30622 + 14] = v_k_30618[1][1], v_d_30612[v_A_30622 + 15] = v_k_30618[3][0], v_d_30612[v_A_30622 + 17] = v_k_30618[3][1], v_A_30622 = 2 * v_b_30619, v_v_30613[v_A_30622 + 2] = 1, v_v_30613[v_A_30622 + 8] = 1, v_v_30613[v_A_30622 + 10] = 1, v_v_30613[v_A_30622 + 1] = v_r_30638, v_v_30613[v_A_30622 + 3] = v_r_30638, v_v_30613[v_A_30622 + 9] = v_r_30638, v_v_30613[v_A_30622 + 5] = v_i_30635.zg, v_v_30613[v_A_30622 + 7] = v_i_30635.zg, v_v_30613[v_A_30622 + 11] = v_i_30635.zg, v_s_30639 = v_k_30618[1][0] - v_k_30618[0][0], v_a_30640 = v_k_30618[3][0] - v_k_30618[2][0], v_A_30622 = 4 * v_b_30619, v_w_30614[v_A_30622 + 0] = v_s_30639, v_w_30614[v_A_30622 + 1] = v_a_30640, v_w_30614[v_A_30622 + 2] = 0, v_w_30614[v_A_30622 + 3] = 0, v_w_30614[v_A_30622 + 4] = v_s_30639, v_w_30614[v_A_30622 + 5] = v_a_30640, v_w_30614[v_A_30622 + 6] = 0, v_w_30614[v_A_30622 + 7] = 0, v_w_30614[v_A_30622 + 8] = v_s_30639, v_w_30614[v_A_30622 + 9] = v_a_30640, v_w_30614[v_A_30622 + 10] = 0, v_w_30614[v_A_30622 + 11] = 1, v_w_30614[v_A_30622 + 12] = v_a_30640, v_w_30614[v_A_30622 + 13] = v_s_30639, v_w_30614[v_A_30622 + 14] = 1, v_w_30614[v_A_30622 + 15] = 0, v_w_30614[v_A_30622 + 16] = v_a_30640, v_w_30614[v_A_30622 + 17] = v_s_30639, v_w_30614[v_A_30622 + 18] = 1, v_w_30614[v_A_30622 + 19] = 1, v_w_30614[v_A_30622 + 20] = v_a_30640, v_w_30614[v_A_30622 + 21] = v_s_30639, v_w_30614[v_A_30622 + 22] = 1, v_w_30614[v_A_30622 + 23] = 0, v_b_30619 += 6, v_c_30606 && (v_y_30620 += 4), v_i_30635 = v_S_30621, ++v_m_30616 >= v_L_30267 && (v_m_30616 = 0, ++v_p_30617, v_d_30612 = v_u_30607[v_p_30617], v_v_30613 = v_f_30608[v_p_30617], v_w_30614 = v___30609[v_p_30617], v_c_30606 && (v_g_30615 = v_h_30610[v_p_30617]), v_b_30619 = 0, v_y_30620 = 0)));
            }
            if (0 < v_s_30605) {
              let v_i_30642,
                v_e_30643 = (v_i_30642 = v_n_30602 ? 1 : 3 === v_o_30601.Ug || 2 === v_o_30601.Ug ? .375 : v_o_30601.Ug === v_v0_27715 ? 1 : 0, 0);
              glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), (v_o_30601.Fi === v_ce_27678 ? v_H_30265.zs : v_H_30265.Xs).bind(0);
              for (let v_t_30644 = 0; v_t_30644 < v_u_30607.length; ++v_t_30644) v_e_30643 = mathMin(v_L_30267, v_s_30605 - v_t_30644 * v_L_30267), v_J_30266.vl.subdata("gl_Vertex", v_u_30607[v_t_30644]), v_J_30266.vl.subdata("gl_Color", v___30609[v_t_30644]), v_J_30266.vl.subdata("gl_TexCoord", v_f_30608[v_t_30644]), v_cn_27599.uniforms({
                texture: 0,
                add_level: v_n_30602 ? .25 * mathSin(v_r_30604 * mathPI * 5 - mathPI / 2) + 1.5 : 1,
                opacity: v_i_30642
              }).drawBuffers(v_J_30266.vl.vertexBuffers, void 0, glContext.TRIANGLES, 6 * v_e_30643);
              if (glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), v_o_30601.Fi === v_ce_27678 && v_n_30602) {
                v_H_30265.Zs.bind(0);
                for (let v_t_30645 = 0; v_t_30645 < v_u_30607.length; ++v_t_30645) v_e_30643 = mathMin(v_L_30267, v_s_30605 - v_t_30645 * v_L_30267), v_J_30266.vl.subdata("gl_Vertex", v_u_30607[v_t_30645]), v_J_30266.vl.subdata("gl_Color", v___30609[v_t_30645]), v_J_30266.vl.subdata("gl_TexCoord", v_f_30608[v_t_30645]), v_Ve_27579.uniforms(v_vn_27625).drawBuffers(v_J_30266.vl.vertexBuffers, void 0, glContext.TRIANGLES, 6 * v_e_30643);
              }
              if (v_c_30606) {
                v_H_30265.Ys.bind(0);
                for (let v_t_30646 = 0; v_t_30646 < v_u_30607.length; ++v_t_30646) v_e_30643 = mathMin(v_L_30267, v_s_30605 - v_t_30646 * v_L_30267), v_J_30266.gl.subdata("gl_Vertex", v_h_30610[v_t_30646]), v_Ve_27579.uniforms(v_vn_27625).drawBuffers(v_J_30266.gl.vertexBuffers, v_J_30266.gl.indexBuffers.triangles, glContext.TRIANGLES, 6 * v_e_30643);
              }
            }
          },
          tc: function (v_i_30647) {
            var v_e_30648,
              v_n_30649,
              v_r_30650 = v_U_30262.C1;
            let v_s_30651 = 0,
              v_a_30652;
            v_H_30265._y.bind(0);
            for (let v_t_30653 = 0; v_t_30653 < v_i_30647.length; ++v_t_30653) if ((v_e_30648 = v_i_30647[v_t_30653]).Fi === v_ue_27682 || v_e_30648.Fi === v_t0_27693) for (v_s_30651 = v_e_30648.We.length - 1; 0 <= v_s_30651; --v_s_30651) (v_n_30649 = v_e_30648.We[v_s_30651]).Fi !== v_Wn_27684 && v_n_30649.Fi !== v_Vn_27683 && v_n_30649.Fi !== v_e0_27695 && v_n_30649.Fi !== v_i0_27694 || 5 === v_n_30649.Ug || (v_a_30652 = v_n_30649.od >= v_r_30650 ? v_n_30649.Pg : v_n_30649.Og) < -.0625 || .84 < v_a_30652 || v_en_27591.uniforms({
              texture: 0,
              transX: 64 * v_n_30649.ou,
              transY: v_n_30649.G0 / 16 * 2 * v_M0_27738 - v_M0_27738,
              transZ: -v_a_30652 * v_ve_27731
            }).draw(v_J_30266.io.get(v_n_30649.Le));
          },
          ic: function (v_i_30654) {
            var v_e_30655,
              v_n_30656,
              v_r_30657 = v_U_30262.wa[v_U_30262.q1.Zu.Wg],
              v_s_30658 = v_U_30262.C1;
            let v_a_30659 = 0,
              v_o_30660;
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.uy.bind(0);
            for (let v_t_30661 = 0; v_t_30661 < v_i_30654.length; ++v_t_30661) if ((v_e_30655 = v_i_30654[v_t_30661]).Fi === v_ue_27682 || v_e_30655.Fi === v_t0_27693) for (v_a_30659 = v_e_30655.We.length - 1; 0 <= v_a_30659; --v_a_30659) (v_n_30656 = v_e_30655.We[v_a_30659]).Fi !== v_Wn_27684 && v_n_30656.Fi !== v_Vn_27683 && v_n_30656.Fi !== v_e0_27695 && v_n_30656.Fi !== v_i0_27694 || 5 === v_n_30656.Ug || (v_o_30660 = v_n_30656.od >= v_s_30658 ? v_n_30656.Pg : v_n_30656.Og) < -.0625 || .84 < v_o_30660 || v_nn_27592.uniforms({
              texture: 0,
              transX: 64 * v_n_30656.ou,
              transY: v_n_30656.G0 / 16 * 2 * v_M0_27738 - v_M0_27738,
              transZ: v_o_30660 * -v_ve_27731,
              roll: 2.5 * v_r_30657
            }).draw(v_J_30266.cl.get(v_n_30656.Le));
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          nc: function (v_i_30662) {
            var v_e_30663,
              v_n_30664,
              v_r_30665 = v_U_30262.wa[v_U_30262.q1.Zu.Wg],
              v_s_30666 = v_U_30262.C1;
            let v_a_30667 = 0,
              v_o_30668;
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.hy.bind(0);
            for (let v_t_30669 = 0; v_t_30669 < v_i_30662.length; ++v_t_30669) if ((v_e_30663 = v_i_30662[v_t_30669]).Fi === v_ue_27682 || v_e_30663.Fi === v_t0_27693) for (v_a_30667 = v_e_30663.We.length - 1; 0 <= v_a_30667; --v_a_30667) (v_n_30664 = v_e_30663.We[v_a_30667]).Fi !== v_Wn_27684 && v_n_30664.Fi !== v_Vn_27683 && v_n_30664.Fi !== v_e0_27695 && v_n_30664.Fi !== v_i0_27694 || 5 === v_n_30664.Ug || (v_o_30668 = v_n_30664.od >= v_s_30666 ? v_n_30664.Pg : v_n_30664.Og) < -.0625 || .84 < v_o_30668 || v_ln_27597.uniforms({
              texture: 0,
              transX: 64 * v_n_30664.ou,
              transZ: v_o_30668 * -v_ve_27731,
              h: v_n_30664.G0 / 16 * 2,
              roll: -v_r_30665 / 2
            }).draw(v_J_30266.ul.get(v_n_30664.Le));
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          rc: function (v_i_30670) {
            var v_e_30671,
              v_n_30672,
              v_r_30673 = v_U_30262.C1;
            let v_s_30674 = 0,
              v_a_30675;
            for (let v_t_30676 = 0; v_t_30676 < v_i_30670.length; ++v_t_30676) if ((v_e_30671 = v_i_30670[v_t_30676]).Fi === v_ue_27682 || v_e_30671.Fi === v_t0_27693) for (v_s_30674 = v_e_30671.We.length - 1; 0 <= v_s_30674; --v_s_30674) (v_n_30672 = v_e_30671.We[v_s_30674]).Fi !== v_Wn_27684 && v_n_30672.Fi !== v_Vn_27683 && v_n_30672.Fi !== v_e0_27695 && v_n_30672.Fi !== v_i0_27694 || 5 === v_n_30672.Ug || (v_a_30675 = v_n_30672.od >= v_r_30673 ? v_n_30672.Pg : v_n_30672.Og) < -.0625 || .84 < v_a_30675 || (glContext.pushMatrix(), glContext.translate(64 * v_n_30672.ou, 0, -v_a_30675 * v_ve_27731), v_Je_27574.draw(v_J_30266.Yo.get(v_n_30672.Le)), glContext.popMatrix());
          },
          ac: function (v_t_30677) {
            var v_i_30678 = v_U_30262.C1;
            let v_e_30679 = new Float32Array(v_J_30266.bl.vertices),
              v_n_30680 = new Float32Array(v_J_30266.bl.coords),
              v_r_30681 = new Uint16Array(v_J_30266.bl.triangles),
              v_s_30682,
              v_a_30683,
              v_o_30684 = 1,
              v_l_30685 = 0,
              v_c_30686 = 0,
              v_u_30687,
              v_f_30688,
              v___30689,
              v_h_30690,
              v_d_30691,
              v_v_30692;
            if (glContext.enable(glContext.CULL_FACE), glContext.cullFace(glContext.FRONT), 1 === v_t_30677) {
              v_H_30265.vy.bind(0);
              for (let v_t_30694 = 0; v_t_30694 < v_U_30262.ta; ++v_t_30694) if (v_U_30262.ea[v_t_30694].Fi === v_s0_27698 && v_U_30262.ea[v_t_30694].Jg === v_h0_27711) {
                v_s_30682 = v_U_30262.ea[v_t_30694];
                for (let v_t_30695 = -1; v_t_30695 < v_s_30682.We.length; ++v_t_30695) v_a_30683 = -1 === v_t_30695 ? v_s_30682 : v_s_30682.We[v_t_30695], 0 <= v_t_30695 && v_a_30683.Fi !== v_l0_27701 || v_a_30683.Ug > v_v0_27715 || (v_f_30688 = 64 * v_a_30683.Le - 8, v___30689 = (v_a_30683.od >= v_i_30678 ? v_a_30683.Pg : v_a_30683.Og) * v_ve_27731, v_h_30690 = 64 * v_a_30683.ou - 508, v_d_30691 = v_E0_27739 * v_a_30683.G0 / 16 + 5.33336, v_v_30692 = v_E0_27739 * v_a_30683.G0 / 16 - 2.66664, 2048 <= v_l_30685 + 28 && v_w_30693(), v_u_30687 = 3 * v_l_30685, v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690, v_d_30691, -40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, -40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688, v_d_30691, -40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688, v_d_30691, 40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, 40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690, v_d_30691, 40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690, v_d_30691, 40 - v___30689 - 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690, v_v_30692, -40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690, v_v_30692, 40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688, v_v_30692, 40 - v___30689), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688, v_v_30692, -40 - v___30689), v_u_30687 = 2 * v_l_30685, v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 6 / 64, 0), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .1875, 0), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 58 / 64, 0), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 58 / 64, 6 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 58 / 64, 58 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .8125, 58 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 6 / 64, 58 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 6 / 64, .8125), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .1875, 6 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .8125, 6 / 64), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .8125, .8125), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, .1875, .8125), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 0, 0), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 0, 1), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 1, 1), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 0, 1), v_u_30687 = 3 * v_c_30686, v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 0, 1, 11, 7), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 1, 2, 3, 8), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 9, 3, 4, 5), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 7, 10, 5, 6), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 12, 0, 6, 13), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 2, 15, 14, 4), v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 13, 6, 4, 14), v_l_30685 += 16, v_c_30686 += 14);
              }
            } else if (2 === v_t_30677) {
              v_H_30265.ky.bind(0);
              for (let v_t_30696 = 0; v_t_30696 < v_U_30262.ta; ++v_t_30696) if (v_U_30262.ea[v_t_30696].Fi === v_s0_27698 && v_U_30262.ea[v_t_30696].Jg === v_h0_27711) {
                v_s_30682 = v_U_30262.ea[v_t_30696];
                for (let v_t_30697 = 0; v_t_30697 < v_s_30682.We.length; ++v_t_30697) (v_a_30683 = v_s_30682.We[v_t_30697]).Fi !== v_l0_27701 || v_a_30683.Ug > v_v0_27715 || (v_f_30688 = 64 * v_a_30683.Le - 8, v___30689 = (v_a_30683.od >= v_i_30678 ? v_a_30683.Pg : v_a_30683.Og) * v_ve_27731, v_h_30690 = 64 * v_a_30683.ou - 508, v_d_30691 = v_E0_27739 * v_a_30683.G0 / 16 + 5.33336, 2048 <= v_l_30685 + 4 && v_w_30693(), v_u_30687 = 3 * v_l_30685, v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = 2 * v_l_30685, v_u_30687 = v_io_28091(v_n_30680, v_u_30687, -.125 * v_a_30683.Le, .09375), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 1 + .125 * v_a_30683.Le, .09375), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 1 + .125 * v_a_30683.Le, .8125), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, -.125 * v_a_30683.Le, .8125), v_u_30687 = 3 * v_c_30686, v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 0, 1, 2, 3), v_l_30685 += 4, v_c_30686 += 2);
              }
              v_o_30684 = .75;
            } else if (5 === v_t_30677) {
              v_H_30265.py.bind(0);
              for (let v_t_30698 = 0; v_t_30698 < v_U_30262.ta; ++v_t_30698) v_U_30262.ea[v_t_30698].Fi !== v_s0_27698 || v_U_30262.ea[v_t_30698].Jg !== v_h0_27711 || v_U_30262.ea[v_t_30698].Ug > v_v0_27715 || (v_s_30682 = v_U_30262.ea[v_t_30698], v_f_30688 = 64 * v_s_30682.Le - 8, v___30689 = (v_s_30682.od >= v_i_30678 ? v_s_30682.Pg : v_s_30682.Og) * v_ve_27731, v_h_30690 = 64 * v_s_30682.ou - 508, v_d_30691 = v_E0_27739 * v_s_30682.G0 / 16 + 5.33336, 2048 <= v_l_30685 + 4 && v_w_30693(), v_u_30687 = 3 * v_l_30685, v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, -40 - v___30689 + 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + v_f_30688 - 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = v_to_28090(v_e_30679, v_u_30687, v_h_30690 + 5, v_d_30691, 40 - v___30689 - 5), v_u_30687 = 2 * v_l_30685, v_u_30687 = v_io_28091(v_n_30680, v_u_30687, -.125 * v_s_30682.Le, .09375), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 1 + .125 * v_s_30682.Le, .09375), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, 1 + .125 * v_s_30682.Le, .8125), v_u_30687 = v_io_28091(v_n_30680, v_u_30687, -.125 * v_s_30682.Le, .8125), v_u_30687 = 3 * v_c_30686, v_u_30687 = v_eo_28092(v_r_30681, v_u_30687, v_l_30685, 0, 1, 2, 3), v_l_30685 += 4, v_c_30686 += 2);
            }
            function v_w_30693() {
              0 !== v_l_30685 && (v_J_30266.bl.subdata("gl_Vertex", new Float32Array(v_e_30679, 0, 3 * v_l_30685)), v_J_30266.bl.subdata("gl_TexCoord", new Float32Array(v_n_30680, 0, 2 * v_l_30685)), v_J_30266.bl.subdata_i("triangles", new Uint16Array(v_r_30681, 0, 3 * v_c_30686)), v_Qe_27589.uniforms({
                texture: 0,
                opacity: v_o_30684
              }).drawBuffers(v_J_30266.bl.vertexBuffers, v_J_30266.bl.indexBuffers.triangles, glContext.TRIANGLES, 3 * v_c_30686), v_c_30686 = 0, v_l_30685 = 0);
            }
            v_w_30693(), glContext.disable(glContext.CULL_FACE);
          },
          oc: function () {
            var v_i_30699,
              v_e_30700,
              v_n_30701,
              v_r_30702,
              v_s_30703 = v_U_30262.C1;
            let v_a_30704 = new Float32Array(v_J_30266.bl.vertices),
              v_o_30705 = new Float32Array(v_J_30266.bl.coords),
              v_l_30706 = new Uint16Array(v_J_30266.bl.triangles),
              v_t_30707 = .125 * mathSin(v_U_30262.wa[v_U_30262.q1.Zu.Wg] * mathPI * 5 - mathPI / 2) + 1;
            let v_c_30708 = 0,
              v_u_30709 = 0,
              v_f_30710;
            v_H_30265.gy.bind(0), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE);
            for (let v_t_30712 = 0; v_t_30712 < v_U_30262.ta; ++v_t_30712) v_U_30262.ea[v_t_30712].Fi !== v_s0_27698 || v_U_30262.ea[v_t_30712].Jg !== v_h0_27711 || v_U_30262.ea[v_t_30712].Ug > v_v0_27715 || (v_r_30702 = v_U_30262.ea[v_t_30712], 2048 <= v_c_30708 + 4 && v___30711(), v_i_30699 = 64 * v_r_30702.Le - 8, v_e_30700 = -v_we_27734 + 64 * v_r_30702.ou + 4, v_n_30701 = v_E0_27739 * v_r_30702.G0 / 16 + 6.6667, v_r_30702 = -(v_r_30702.od >= v_s_30703 ? v_r_30702.Pg : v_r_30702.Og) * v_ve_27731, v_f_30710 = 3 * v_c_30708, v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 - 10, 10 + v_n_30701, v_j_30274(10 + v_n_30701) - 40 - 225 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 + v_i_30699 + 10, 10 + v_n_30701, v_j_30274(10 + v_n_30701) - 40 - 225 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 + v_i_30699 + 10, 10 + v_n_30701, v_j_30274(10 + v_n_30701) + 40 + 20 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 - 10, 10 + v_n_30701, v_j_30274(10 + v_n_30701) + 40 + 20 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, 5 + v_e_30700, v_n_30701, v_j_30274(v_n_30701) - 40 + 5 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 + v_i_30699 - 5, v_n_30701, v_j_30274(v_n_30701) - 40 + 5 + v_r_30702), v_f_30710 = v_to_28090(v_a_30704, v_f_30710, v_e_30700 + v_i_30699 - 5, v_n_30701, v_j_30274(v_n_30701) + 40 - 5 + v_r_30702), v_to_28090(v_a_30704, v_f_30710, 5 + v_e_30700, v_n_30701, v_j_30274(v_n_30701) + 40 - 5 + v_r_30702), v_f_30710 = 2 * v_c_30708, v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .25, 0), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .75, 0), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .25, 0), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .75, 0), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .25, .75), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .75, .75), v_f_30710 = v_io_28091(v_o_30705, v_f_30710, .25, .75), v_io_28091(v_o_30705, v_f_30710, .75, .75), v_f_30710 = 3 * v_u_30709, v_f_30710 = v_eo_28092(v_l_30706, v_f_30710, v_c_30708, 0, 1, 5, 4), v_f_30710 = v_eo_28092(v_l_30706, v_f_30710, v_c_30708, 1, 2, 6, 5), v_f_30710 = v_eo_28092(v_l_30706, v_f_30710, v_c_30708, 2, 3, 7, 6), v_eo_28092(v_l_30706, v_f_30710, v_c_30708, 3, 0, 4, 7), v_c_30708 += 8, v_u_30709 += 8);
            function v___30711() {
              0 !== v_c_30708 && (v_J_30266.bl.subdata("gl_Vertex", new Float32Array(v_a_30704, 0, 3 * v_c_30708)), v_J_30266.bl.subdata("gl_TexCoord", new Float32Array(v_o_30705, 0, 2 * v_c_30708)), v_J_30266.bl.subdata_i("triangles", new Uint16Array(v_l_30706, 0, 3 * v_u_30709)), v__n_27602.uniforms({
                texture: 0,
                add_level: v_t_30707,
                opacity: 1
              }).drawBuffers(v_J_30266.bl.vertexBuffers, v_J_30266.bl.indexBuffers.triangles, glContext.TRIANGLES, 3 * v_u_30709), v_c_30708 = 0);
            }
            v___30711(), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          lc: function (v_i_30713) {
            let v_e_30714, v_n_30715, v_r_30716, v_s_30717;
            var v_a_30718,
              v_o_30719 = 2 * v_U_30262.wa[v_U_30262.q1.Zu.Wg],
              v_l_30720 = {
                texture: 0,
                roll: 0,
                bottom_opacity: 0,
                h: 0,
                transX: 0,
                transZ: 0
              };
            for (let v_t_30721 = 0; v_t_30721 < v_i_30713.length; ++v_t_30721) (v_i_30713[v_t_30721].Fi & v_xn_27661) !== v_zn_27686 || v_i_30713[v_t_30721].G0 <= 0 || v_U_30262.M1 < v_i_30713[v_t_30721].Pg || (v_n_30715 = (v_a_30718 = v_i_30713[v_t_30721]).Fi, v_e_30714 = (v_n_30715 === v_Kn_27687 ? v_J_30266.Jo : v_a_30718.Fi === v_Yn_27688 ? v_J_30266.zo : v_a_30718.Fi === v_qn_27689 ? v_J_30266.Wo : v_a_30718.Fi === v_Zn_27690 ? v_J_30266.Ko : v_a_30718.Fi === v_Qn_27692 ? v_J_30266.Xo : v_a_30718.Fi === v_$n_27691 ? v_J_30266.Zo : v_J_30266.Jo).get(v_a_30718.Le), v_r_30716 = v_n_30715 === v_Yn_27688 || v_n_30715 === v_Qn_27692 || v_n_30715 === v_$n_27691, v_s_30717 = v_n_30715 === v_qn_27689 || v_n_30715 === v_Zn_27690 || v_n_30715 === v_Qn_27692 || v_n_30715 === v_$n_27691, v_l_30720.roll = 1024 * v_o_30719 % 16777216 / 1024 / (v_r_30716 ? 1.9 : -.8), v_l_30720.bottom_opacity = v_s_30717 ? 0 : 1, v_l_30720.h = v_a_30718.G0 / 16 * 2, v_l_30720.transX = 64 * (v_a_30718.ou + v_a_30718.Le / 2) - v_we_27734, v_l_30720.transZ = -v_a_30718.Pg * v_ve_27731, glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), (1 === v_a_30718.Jg ? v_r_30716 ? v_H_30265.Js : v_H_30265.Ks : v_r_30716 ? v_H_30265.Ws : v_H_30265.Os).bind(0), v_$e_27588.uniforms(v_l_30720).draw(v_e_30714), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), (1 === v_a_30718.Jg ? v_r_30716 ? v_H_30265.Ay : v_H_30265.xy : v_r_30716 ? v_H_30265.Sy : v_H_30265.yy).bind(0), v_$e_27588.uniforms(v_l_30720).draw(v_e_30714));
            glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
          },
          uc: function (v_i_30722) {
            var v_e_30723;
            for (let v_t_30724 = 0; v_t_30724 < v_i_30722.length; ++v_t_30724) v_i_30722[v_t_30724].Fi !== v_ue_27682 && v_i_30722[v_t_30724].Fi !== v_t0_27693 || ((1 === (v_e_30723 = v_i_30722[v_t_30724]).Jg ? v_H_30265.qs : v_H_30265.$s).bind(0), v_sn_27594.uniforms({
              texture: 0,
              transX: 64 * (v_e_30723.ou + v_e_30723.Le / 2),
              transZ: (v_e_30723.od >= v_U_30262.C1 ? v_e_30723.Pg : v_e_30723.Og) * -v_ve_27731,
              h: v_e_30723.G0 / 16 * 2
            }).draw(v_J_30266.$o));
          },
          _c: function (v_d_30725) {
            var v_v_30726 = v_U_30262.C1;
            let v_t_30727, v_i_30728;
            var v_e_30729 = v_d_30725.od < v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1 + v_U_30262.dI && v_d_30725.Ug === v_v0_27715 ? 3 : v_d_30725.Ug,
              v_w_30730 = (v_i_30728 = v_d_30725.Fi === v_t0_27693 ? 1 === v_e_30729 || 2 === v_e_30729 ? (v_t_30727 = .35, 1) : 3 === v_e_30729 ? (v_t_30727 = 0, .5) : v_e_30729 === v_v0_27715 ? (v_t_30727 = .125, 1) : v_t_30727 = 0 : 1 === v_d_30725.Ug || null !== v_d_30725.Sw && v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1 + v_U_30262.dI - v_d_30725.Sw <= v_U_30262.Eb.t7.Db ? (v_t_30727 = .35, 1) : 3 === v_e_30729 || 2 === v_e_30729 ? (v_t_30727 = 0, .5) : v_e_30729 === v_v0_27715 ? (v_t_30727 = .125, 1) : v_t_30727 = 0, (1 === v_d_30725.Jg ? (v_H_30265.eo.bind(0), v_H_30265.qs) : (v_H_30265.Qs.bind(0), v_H_30265.$s)).bind(1), v_d_30725.Fi === v_t0_27693 ? v_M_30273 : v_$t_30272);
            let v_g_30731 = new Float32Array(v_J_30266.wl.vertices),
              v_m_30732 = new Float32Array(v_J_30266.wl.colors),
              v_p_30733 = new Float32Array(v_J_30266.kl.vertices),
              v_k_30734 = 0,
              v_b_30735,
              v_y_30736;
            {
              let v_i_30738 = v_d_30725,
                v_e_30739,
                v_n_30740,
                v_r_30741,
                v_s_30742,
                v_a_30743,
                v_o_30744,
                v_l_30745,
                v_c_30746,
                v_u_30747,
                v_f_30748,
                v___30749,
                v_h_30750;
              for (let v_t_30751 = 0; v_t_30751 < v_d_30725.We.length; ++v_t_30751) if ((v_b_30735 = v_d_30725.We[v_t_30751]).Fi !== v_c0_27703) if (!(v_b_30735.od > v_v_30726 && v_i_30738.od <= v_v_30726) && (v_b_30735.od >= v_v_30726 && (v_b_30735.Pg < -.25 && v_i_30738.Pg < -.25 || .84 < v_b_30735.Pg && .84 < v_i_30738.Pg) || v_b_30735.od < v_v_30726 && (v_b_30735.Pg < 0 && v_i_30738.Og < 0 || .84 < v_b_30735.Pg && .84 < v_i_30738.Og)) || v_b_30735.od < v_v_30726 && v_i_30738.od < v_v_30726 || v_b_30735.Xg === v_i_30738.Xg) v_i_30738 = v_b_30735;else {
                if (v_i_30738.od < v_v_30726) {
                  if (v_e_30739 = (v_v_30726 - v_i_30738.od) / (v_b_30735.od - v_i_30738.od), v_n_30740 = v_d_30725.Fi === v_t0_27693 ? 64 * v_Ee_28084(v_i_30738.ou, v_b_30735.ou, v_e_30739) : 64 * v_i_30738.ou, v_l_30745 = v_E0_27739 * v_b_30735.G0 / 16, v_c_30746 = v_E0_27739 * v_Ee_28084(v_i_30738.G0, v_b_30735.G0, v_e_30739) / 16, v_u_30747 = v_b_30735.Le, v_f_30748 = v_Ee_28084(v_i_30738.Le, v_b_30735.Le, v_e_30739), v_a_30743 = v_w_30730[v_b_30735.Le], v_o_30744 = v_Ee_28084(v_w_30730[v_i_30738.Le], v_w_30730[v_b_30735.Le], v_e_30739), v_r_30741 = (64 * v_u_30747 - v_a_30743) / 2, v_s_30742 = (64 * v_f_30748 - v_o_30744) / 2, v_y_30736 = 3 * v_k_30734, v_g_30731[v_y_30736 + 0] = 64 * v_b_30735.ou - v_we_27734 + v_r_30741, v_g_30731[v_y_30736 + 1] = v_l_30745, v_g_30731[v_y_30736 + 2] = -v_b_30735.Pg * v_ve_27731, v_g_30731[v_y_30736 + 3] = 64 * v_b_30735.ou - v_we_27734 + v_r_30741 + v_a_30743, v_g_30731[v_y_30736 + 4] = v_l_30745, v_g_30731[v_y_30736 + 5] = -v_b_30735.Pg * v_ve_27731, v_g_30731[v_y_30736 + 6] = v_n_30740 - v_we_27734 + v_s_30742, v_g_30731[v_y_30736 + 7] = v_c_30746, v_g_30731[v_y_30736 + 8] = 0, v_g_30731[v_y_30736 + 9] = v_n_30740 - v_we_27734 + v_s_30742 + v_o_30744, v_g_30731[v_y_30736 + 10] = v_c_30746, v_g_30731[v_y_30736 + 11] = 0, v_a_30743 = 64 * v_b_30735.ou + 64 * v_u_30747 / 2 - v_we_27734, v_o_30744 = v_n_30740 + 64 * v_f_30748 / 2 - v_we_27734, v_p_30733[v_y_30736 + 0] = v_a_30743 - 34, v_p_30733[v_y_30736 + 1] = v_l_30745, v_p_30733[v_y_30736 + 2] = -v_b_30735.Pg * v_ve_27731, v_p_30733[v_y_30736 + 3] = v_a_30743 + 34, v_p_30733[v_y_30736 + 4] = v_l_30745, v_p_30733[v_y_30736 + 5] = -v_b_30735.Pg * v_ve_27731, v_p_30733[v_y_30736 + 6] = v_o_30744 - 34, v_p_30733[v_y_30736 + 7] = v_c_30746, v_p_30733[v_y_30736 + 8] = 0, v_p_30733[v_y_30736 + 9] = v_o_30744 + 34, v_p_30733[v_y_30736 + 10] = v_c_30746, v_p_30733[v_y_30736 + 11] = 0, v_i_30738.Fi === v_ue_27682) {
                    v___30749 = mathMax(.25 - v_e_30739, 1e-5), v_h_30750 = mathMin(v_e_30739 / .25, 1), v_y_30736 = 4 * v_k_30734;
                    for (let v_t_30752 = 0; v_t_30752 < 4; ++v_t_30752) v_m_30732[v_y_30736 + 4 * v_t_30752 + 0] = v___30749, v_m_30732[v_y_30736 + 4 * v_t_30752 + 1] = v_h_30750, v_m_30732[v_y_30736 + 4 * v_t_30752 + 2] = 1, v_m_30732[v_y_30736 + 4 * v_t_30752 + 3] = 1;
                  }
                } else if (v_l_30745 = v_E0_27739 * v_b_30735.G0 / 16, v_c_30746 = v_E0_27739 * v_i_30738.G0 / 16, v_u_30747 = v_b_30735.Le, v_f_30748 = v_i_30738.Le, v_a_30743 = v_w_30730[v_b_30735.Le], v_o_30744 = v_w_30730[v_i_30738.Le], v_r_30741 = (64 * v_u_30747 - v_a_30743) / 2, v_s_30742 = (64 * v_f_30748 - v_o_30744) / 2, v_y_30736 = 3 * v_k_30734, v_g_30731[v_y_30736 + 0] = 64 * v_b_30735.ou - v_we_27734 + v_r_30741, v_g_30731[v_y_30736 + 1] = v_l_30745, v_g_30731[v_y_30736 + 2] = -v_b_30735.Pg * v_ve_27731, v_g_30731[v_y_30736 + 3] = 64 * v_b_30735.ou - v_we_27734 + v_r_30741 + v_a_30743, v_g_30731[v_y_30736 + 4] = v_l_30745, v_g_30731[v_y_30736 + 5] = -v_b_30735.Pg * v_ve_27731, v_g_30731[v_y_30736 + 6] = 64 * v_i_30738.ou - v_we_27734 + v_s_30742, v_g_30731[v_y_30736 + 7] = v_c_30746, v_g_30731[v_y_30736 + 8] = -v_i_30738.Pg * v_ve_27731, v_g_30731[v_y_30736 + 9] = 64 * v_i_30738.ou - v_we_27734 + v_s_30742 + v_o_30744, v_g_30731[v_y_30736 + 10] = v_c_30746, v_g_30731[v_y_30736 + 11] = -v_i_30738.Pg * v_ve_27731, v_a_30743 = 64 * v_b_30735.ou + 64 * v_u_30747 / 2 - v_we_27734, v_o_30744 = 64 * v_i_30738.ou + 64 * v_f_30748 / 2 - v_we_27734, v_p_30733[3 * v_k_30734 + 0] = v_a_30743 - 34, v_p_30733[3 * v_k_30734 + 1] = v_l_30745, v_p_30733[3 * v_k_30734 + 2] = -v_b_30735.Pg * v_ve_27731, v_p_30733[3 * v_k_30734 + 3] = v_a_30743 + 34, v_p_30733[3 * v_k_30734 + 4] = v_l_30745, v_p_30733[3 * v_k_30734 + 5] = -v_b_30735.Pg * v_ve_27731, v_p_30733[3 * v_k_30734 + 6] = v_o_30744 - 34, v_p_30733[3 * v_k_30734 + 7] = v_c_30746, v_p_30733[3 * v_k_30734 + 8] = -v_i_30738.Pg * v_ve_27731, v_p_30733[3 * v_k_30734 + 9] = v_o_30744 + 34, v_p_30733[3 * v_k_30734 + 10] = v_c_30746, v_p_30733[3 * v_k_30734 + 11] = -v_i_30738.Pg * v_ve_27731, v_i_30738.Fi === v_ue_27682) {
                  v_y_30736 = 4 * v_k_30734;
                  for (let v_t_30753 = 0; v_t_30753 < 4; ++v_t_30753) v_m_30732[v_y_30736 + 4 * v_t_30753 + 0] = .25, v_m_30732[v_y_30736 + 4 * v_t_30753 + 1] = 0, v_m_30732[v_y_30736 + 4 * v_t_30753 + 2] = 1, v_m_30732[v_y_30736 + 4 * v_t_30753 + 3] = 1;
                }
                if (v_i_30738.Fi !== v_ue_27682) {
                  v_y_30736 = 4 * v_k_30734;
                  for (let v_t_30754 = 0; v_t_30754 < 4; ++v_t_30754) v_m_30732[v_y_30736 + 4 * v_t_30754 + 0] = .5, v_m_30732[v_y_30736 + 4 * v_t_30754 + 1] = 1, v_m_30732[v_y_30736 + 4 * v_t_30754 + 2] = 1, v_m_30732[v_y_30736 + 4 * v_t_30754 + 3] = 1;
                }
                v_k_30734 += 4, v_i_30738 = v_b_30735, 4096 <= v_k_30734 && v_S_30737();
              }
            }
            {
              let v_i_30755 = v_d_30725,
                v_e_30756,
                v_n_30757,
                v_r_30758,
                v_s_30759,
                v_a_30760,
                v_o_30761,
                v_l_30762,
                v_c_30763,
                v_u_30764,
                v_f_30765,
                v___30766,
                v_h_30767;
              for (let v_t_30768 = 0; v_t_30768 < v_d_30725.We.length; ++v_t_30768) if ((v_b_30735 = v_d_30725.We[v_t_30768]).Fi !== v_c0_27703) if (v_b_30735.Og < -.25 && v_i_30755.Og < -.25 || 0 < v_b_30735.Og && 0 < v_i_30755.Og || v_b_30735.od >= v_v_30726 && v_i_30755.od >= v_v_30726 || v_b_30735.Xg === v_i_30755.Xg) v_i_30755 = v_b_30735;else {
                if (v_b_30735.od >= v_v_30726) {
                  if (v_e_30756 = (v_v_30726 - v_i_30755.od) / (v_b_30735.od - v_i_30755.od), v_n_30757 = v_d_30725.Fi === v_t0_27693 ? 64 * v_Ee_28084(v_i_30755.ou, v_b_30735.ou, v_e_30756) : 64 * v_i_30755.ou, v_l_30762 = v_E0_27739 * v_Ee_28084(v_i_30755.G0, v_b_30735.G0, v_e_30756) / 16, v_c_30763 = v_E0_27739 * v_i_30755.G0 / 16, v_u_30764 = v_Ee_28084(v_i_30755.Le, v_b_30735.Le, v_e_30756), v_f_30765 = v_i_30755.Le, v_a_30760 = v_Ee_28084(v_w_30730[v_i_30755.Le], v_w_30730[v_b_30735.Le], v_e_30756), v_o_30761 = v_w_30730[v_i_30755.Le], v_r_30758 = (64 * v_u_30764 - v_a_30760) / 2, v_s_30759 = (64 * v_f_30765 - v_o_30761) / 2, v_y_30736 = 3 * v_k_30734, v_g_30731[v_y_30736 + 0] = v_n_30757 - v_we_27734 + v_r_30758, v_g_30731[v_y_30736 + 1] = v_l_30762, v_g_30731[v_y_30736 + 2] = 0, v_g_30731[v_y_30736 + 3] = v_n_30757 - v_we_27734 + v_r_30758 + v_a_30760, v_g_30731[v_y_30736 + 4] = v_l_30762, v_g_30731[v_y_30736 + 5] = 0, v_g_30731[v_y_30736 + 6] = 64 * v_i_30755.ou - v_we_27734 + v_s_30759, v_g_30731[v_y_30736 + 7] = v_c_30763, v_g_30731[v_y_30736 + 8] = -v_i_30755.Og * v_ve_27731, v_g_30731[v_y_30736 + 9] = 64 * v_i_30755.ou - v_we_27734 + v_s_30759 + v_o_30761, v_g_30731[v_y_30736 + 10] = v_c_30763, v_g_30731[v_y_30736 + 11] = -v_i_30755.Og * v_ve_27731, v_a_30760 = v_n_30757 - v_we_27734 + 64 * v_Ee_28084(v_i_30755.Le, v_b_30735.Le, v_e_30756) / 2, v_o_30761 = 64 * (v_i_30755.ou + v_i_30755.Le / 2) - v_we_27734, v_p_30733[v_y_30736 + 0] = v_a_30760 - 34, v_p_30733[v_y_30736 + 1] = v_l_30762, v_p_30733[v_y_30736 + 2] = 0, v_p_30733[v_y_30736 + 3] = v_a_30760 + 34, v_p_30733[v_y_30736 + 4] = v_l_30762, v_p_30733[v_y_30736 + 5] = 0, v_p_30733[v_y_30736 + 6] = v_o_30761 - 34, v_p_30733[v_y_30736 + 7] = v_c_30763, v_p_30733[v_y_30736 + 8] = -v_i_30755.Og * v_ve_27731, v_p_30733[v_y_30736 + 9] = v_o_30761 + 34, v_p_30733[v_y_30736 + 10] = v_c_30763, v_p_30733[v_y_30736 + 11] = -v_i_30755.Og * v_ve_27731, v_i_30755.Fi === v_ue_27682) {
                    v___30766 = mathMin(.25 / v_e_30756, .99999), v_h_30767 = mathMin(v_e_30756 / .25, 1), v_y_30736 = 4 * v_k_30734;
                    for (let v_t_30769 = 0; v_t_30769 < 4; ++v_t_30769) v_m_30732[v_y_30736 + 4 * v_t_30769 + 0] = v___30766, v_m_30732[v_y_30736 + 4 * v_t_30769 + 1] = 0, v_m_30732[v_y_30736 + 4 * v_t_30769 + 2] = v_h_30767, v_m_30732[v_y_30736 + 4 * v_t_30769 + 3] = 1;
                  }
                } else if (v_l_30762 = v_E0_27739 * v_b_30735.G0 / 16, v_c_30763 = v_E0_27739 * v_i_30755.G0 / 16, v_u_30764 = v_b_30735.Le, v_f_30765 = v_i_30755.Le, v_a_30760 = v_w_30730[v_b_30735.Le], v_o_30761 = v_w_30730[v_i_30755.Le], v_r_30758 = (64 * v_u_30764 - v_a_30760) / 2, v_s_30759 = (64 * v_f_30765 - v_o_30761) / 2, v_y_30736 = 3 * v_k_30734, v_g_30731[v_y_30736 + 0] = 64 * v_b_30735.ou - v_we_27734 + v_r_30758, v_g_30731[v_y_30736 + 1] = v_l_30762, v_g_30731[v_y_30736 + 2] = -v_b_30735.Og * v_ve_27731, v_g_30731[v_y_30736 + 3] = 64 * v_b_30735.ou - v_we_27734 + v_r_30758 + v_a_30760, v_g_30731[v_y_30736 + 4] = v_l_30762, v_g_30731[v_y_30736 + 5] = -v_b_30735.Og * v_ve_27731, v_g_30731[v_y_30736 + 6] = 64 * v_i_30755.ou - v_we_27734 + v_s_30759, v_g_30731[v_y_30736 + 7] = v_c_30763, v_g_30731[v_y_30736 + 8] = -v_i_30755.Og * v_ve_27731, v_g_30731[v_y_30736 + 9] = 64 * v_i_30755.ou - v_we_27734 + v_s_30759 + v_o_30761, v_g_30731[v_y_30736 + 10] = v_c_30763, v_g_30731[v_y_30736 + 11] = -v_i_30755.Og * v_ve_27731, v_a_30760 = 64 * v_b_30735.ou + 64 * v_u_30764 / 2 - v_we_27734, v_o_30761 = 64 * v_i_30755.ou + 64 * v_f_30765 / 2 - v_we_27734, v_p_30733[v_y_30736 + 0] = v_a_30760 - 34, v_p_30733[v_y_30736 + 1] = v_l_30762, v_p_30733[v_y_30736 + 2] = -v_b_30735.Og * v_ve_27731, v_p_30733[v_y_30736 + 3] = v_a_30760 + 34, v_p_30733[v_y_30736 + 4] = v_l_30762, v_p_30733[v_y_30736 + 5] = -v_b_30735.Og * v_ve_27731, v_p_30733[v_y_30736 + 6] = v_o_30761 - 34, v_p_30733[v_y_30736 + 7] = v_c_30763, v_p_30733[v_y_30736 + 8] = -v_i_30755.Og * v_ve_27731, v_p_30733[v_y_30736 + 9] = v_o_30761 + 34, v_p_30733[v_y_30736 + 10] = v_c_30763, v_p_30733[v_y_30736 + 11] = -v_i_30755.Og * v_ve_27731, v_i_30755.Fi === v_ue_27682) {
                  v_y_30736 = 4 * v_k_30734;
                  for (let v_t_30770 = 0; v_t_30770 < 4; ++v_t_30770) v_m_30732[v_y_30736 + 4 * v_t_30770 + 0] = .25, v_m_30732[v_y_30736 + 4 * v_t_30770 + 1] = 0, v_m_30732[v_y_30736 + 4 * v_t_30770 + 2] = 1, v_m_30732[v_y_30736 + 4 * v_t_30770 + 3] = 1;
                }
                if (v_i_30755.Fi !== v_ue_27682) {
                  v_y_30736 = 4 * v_k_30734;
                  for (let v_t_30771 = 0; v_t_30771 < 4; ++v_t_30771) v_m_30732[v_y_30736 + 4 * v_t_30771 + 0] = .5, v_m_30732[v_y_30736 + 4 * v_t_30771 + 1] = 1, v_m_30732[v_y_30736 + 4 * v_t_30771 + 2] = 1, v_m_30732[v_y_30736 + 4 * v_t_30771 + 3] = 1;
                }
                v_k_30734 += 4, v_i_30755 = v_b_30735, 4096 <= v_k_30734 && v_S_30737();
              }
            }
            function v_S_30737() {
              0 !== v_k_30734 && (v_J_30266.wl.subdata("gl_Vertex", v_g_30731), v_J_30266.wl.subdata("gl_Color", v_m_30732), v_J_30266.kl.subdata("gl_Vertex", v_p_30733), v_d_30725.Fi === v_t0_27693 ? (glContext.enable(glContext.CULL_FACE), glContext.cullFace(glContext.FRONT), v_on_27596.uniforms({
                texture: 0,
                opacity: v_t_30727
              }).drawBuffers(v_J_30266.wl.vertexBuffers, v_J_30266.wl.indexBuffers.triangles, glContext.TRIANGLES, v_k_30734 / 2 * 3), glContext.disable(glContext.CULL_FACE), v_an_27595.uniforms({
                texture: 1,
                opacity: v_i_30728
              }).drawBuffers(v_J_30266.kl.vertexBuffers, v_J_30266.kl.indexBuffers.triangles, glContext.TRIANGLES, v_k_30734 / 2 * 3)) : (v_an_27595.uniforms({
                texture: 1,
                opacity: v_i_30728
              }).drawBuffers(v_J_30266.kl.vertexBuffers, v_J_30266.kl.indexBuffers.triangles, glContext.TRIANGLES, v_k_30734 / 2 * 3), v_on_27596.uniforms({
                texture: 0,
                opacity: v_t_30727
              }).drawBuffers(v_J_30266.wl.vertexBuffers, v_J_30266.wl.indexBuffers.triangles, glContext.TRIANGLES, v_k_30734 / 2 * 3)), v_k_30734 = 0);
            }
            v_S_30737();
          },
          dc: function (v_o_30772) {
            var v_l_30773 = v_U_30262.C1;
            let v_c_30774 = new Float32Array(v_J_30266.pl.vertices),
              v_u_30775 = 0,
              v_f_30776,
              v___30777;
            {
              let v_i_30779 = v_o_30772,
                v_e_30780,
                v_n_30781,
                v_r_30782,
                v_s_30783,
                v_a_30784;
              for (let v_t_30785 = 0; v_t_30785 < v_o_30772.We.length; ++v_t_30785) (v___30777 = v_o_30772.We[v_t_30785]).Fi !== v_c0_27703 && (!(v___30777.od > v_l_30773 && v_i_30779.od <= v_l_30773) && (v___30777.od >= v_l_30773 && (v___30777.Pg < -.0625 && v_i_30779.Pg < -.0625 || 1 < v___30777.Pg && 1 < v_i_30779.Pg) || v___30777.od < v_l_30773 && (v___30777.Pg < 0 && v_i_30779.Og < 0 || 1 < v___30777.Pg && 1 < v_i_30779.Og)) || v___30777.od < v_l_30773 && v_i_30779.od < v_l_30773 || v___30777.Xg === v_i_30779.Xg ? v_i_30779 = v___30777 : (v_i_30779.od < v_l_30773 ? (v_e_30780 = (v_l_30773 - v_i_30779.od) / (v___30777.od - v_i_30779.od), v_r_30782 = v_o_30772.Fi === v_t0_27693 ? (v_n_30781 = 64 * v_Ee_28084(v_i_30779.ou + v_i_30779.Le / 2, v___30777.ou + v___30777.Le / 2, v_e_30780), v_Ee_28084(v_M_30273[v_i_30779.Le], v_M_30273[v___30777.Le], v_e_30780) * v_d_30284(v_Ee_28084(v_i_30779.G0, v___30777.G0, v_e_30780) / 16) * .5) : (v_n_30781 = 64 * (v_i_30779.ou + v_i_30779.Le / 2), v_M_30273[v_i_30779.Le] * v_d_30284(v_i_30779.G0 / 16) * .5), v_s_30783 = 64 * (v___30777.ou + v___30777.Le / 2), v_a_30784 = v_M_30273[v___30777.Le] * v_d_30284(v___30777.G0 / 16) * .5, v_f_30776 = 3 * v_u_30775, v_c_30774[v_f_30776 + 0] = v_s_30783 - v_a_30784 - v_we_27734, v_c_30774[v_f_30776 + 2] = -v___30777.Pg * v_ve_27731, v_c_30774[v_f_30776 + 3] = v_s_30783 + v_a_30784 - v_we_27734, v_c_30774[v_f_30776 + 5] = -v___30777.Pg * v_ve_27731, v_c_30774[v_f_30776 + 6] = v_n_30781 - v_r_30782 - v_we_27734, v_c_30774[v_f_30776 + 8] = 0, v_c_30774[v_f_30776 + 9] = v_n_30781 + v_r_30782 - v_we_27734, v_c_30774[v_f_30776 + 11] = 0) : (v_n_30781 = 64 * (v_i_30779.ou + v_i_30779.Le / 2), v_r_30782 = v_M_30273[v_i_30779.Le] * v_d_30284(v_i_30779.G0 / 16) * .5, v_s_30783 = 64 * (v___30777.ou + v___30777.Le / 2), v_a_30784 = v_M_30273[v___30777.Le] * v_d_30284(v___30777.G0 / 16) * .5, v_f_30776 = 3 * v_u_30775, v_c_30774[v_f_30776 + 0] = v_s_30783 - v_a_30784 - v_we_27734, v_c_30774[v_f_30776 + 2] = -v___30777.Pg * v_ve_27731, v_c_30774[v_f_30776 + 3] = v_s_30783 + v_a_30784 - v_we_27734, v_c_30774[v_f_30776 + 5] = -v___30777.Pg * v_ve_27731, v_c_30774[v_f_30776 + 6] = v_n_30781 - v_r_30782 - v_we_27734, v_c_30774[v_f_30776 + 8] = -v_i_30779.Pg * v_ve_27731, v_c_30774[v_f_30776 + 9] = v_n_30781 + v_r_30782 - v_we_27734, v_c_30774[v_f_30776 + 11] = -v_i_30779.Pg * v_ve_27731), v_u_30775 += 4, v_i_30779 = v___30777, 4096 <= v_u_30775 && v_h_30778()));
            }
            {
              let v_i_30786 = v_o_30772,
                v_e_30787,
                v_n_30788,
                v_r_30789,
                v_s_30790,
                v_a_30791;
              for (let v_t_30792 = 0; v_t_30792 < v_o_30772.We.length; ++v_t_30792) (v___30777 = v_o_30772.We[v_t_30792]).Fi !== v_c0_27703 && (v___30777.Og < -.0625 && v_i_30786.Og < -.0625 || 0 < v___30777.Og && 0 < v_i_30786.Og || v___30777.od >= v_l_30773 && v_i_30786.od >= v_l_30773 || v___30777.Xg === v_i_30786.Xg ? v_i_30786 = v___30777 : (v___30777.od >= v_l_30773 ? (v_e_30787 = (v_l_30773 - v_i_30786.od) / (v___30777.od - v_i_30786.od), v_a_30791 = v_o_30772.Fi === v_t0_27693 ? (v_s_30790 = 64 * v_Ee_28084(v_i_30786.ou + v_i_30786.Le / 2, v___30777.ou + v___30777.Le / 2, v_e_30787), v_Ee_28084(v_M_30273[v_i_30786.Le], v_M_30273[v___30777.Le], v_e_30787) * v_d_30284(v_Ee_28084(v_i_30786.G0, v___30777.G0, v_e_30787) / 16) * .5) : (v_s_30790 = 64 * (v_i_30786.ou + v_i_30786.Le / 2), v_M_30273[v_i_30786.Le] * v_d_30284(v_i_30786.G0 / 16) * .5), v_n_30788 = 64 * (v_i_30786.ou + v_i_30786.Le / 2), v_r_30789 = v_M_30273[v_i_30786.Le] * v_d_30284(v_i_30786.G0 / 16) * .5, v_f_30776 = 3 * v_u_30775, v_c_30774[v_f_30776 + 0] = v_s_30790 - v_a_30791 - v_we_27734, v_c_30774[v_f_30776 + 2] = 0, v_c_30774[v_f_30776 + 3] = v_s_30790 + v_a_30791 - v_we_27734, v_c_30774[v_f_30776 + 5] = 0) : (v_n_30788 = 64 * (v_i_30786.ou + v_i_30786.Le / 2), v_r_30789 = v_M_30273[v_i_30786.Le] * v_d_30284(v_i_30786.G0 / 16) * .5, v_s_30790 = 64 * (v___30777.ou + v___30777.Le / 2), v_a_30791 = v_M_30273[v___30777.Le] * v_d_30284(v___30777.G0 / 16) * .5, v_f_30776 = 3 * v_u_30775, v_c_30774[v_f_30776 + 0] = v_s_30790 - v_a_30791 - v_we_27734, v_c_30774[v_f_30776 + 2] = -v___30777.Og * v_ve_27731, v_c_30774[v_f_30776 + 3] = v_s_30790 + v_a_30791 - v_we_27734, v_c_30774[v_f_30776 + 5] = -v___30777.Og * v_ve_27731), v_c_30774[v_f_30776 + 6] = v_n_30788 - v_r_30789 - v_we_27734, v_c_30774[v_f_30776 + 8] = -v_i_30786.Og * v_ve_27731, v_c_30774[v_f_30776 + 9] = v_n_30788 + v_r_30789 - v_we_27734, v_c_30774[v_f_30776 + 11] = -v_i_30786.Og * v_ve_27731, v_u_30775 += 4, v_i_30786 = v___30777, 4096 <= v_u_30775 && v_h_30778()));
            }
            function v_h_30778() {
              0 < v_u_30775 && (v_J_30266.pl.subdata("gl_Vertex", new Float32Array(v_c_30774, 0, 3 * v_u_30775)), v_rn_27593.drawBuffers(v_J_30266.pl.vertexBuffers, v_J_30266.pl.indexBuffers.triangles, glContext.TRIANGLES, v_u_30775 / 2 * 3)), v_u_30775 = 0;
            }
            v_h_30778();
          },
          hc: function (v_u_30793) {
            if (35 !== v_u_30793.Yg) {
              var v_f_30794 = v_U_30262.C1,
                v___30795 = v_J_30266.ml.Gl("vertices"),
                v_h_30796 = v_J_30266.ml.Gl("coords");
              let v_l_30799 = 0,
                v_c_30800;
              var v_d_30797 = 0 !== v_u_30793.Yg ? 7 : 14,
                v_v_30798 = (v_H_30265.ro.bind(0), 34 === v_u_30793.Yg ? .96875 : 1 - v_u_30793.Yg / 16 - .03125);
              {
                let v_i_30802 = v_u_30793,
                  v_e_30803,
                  v_n_30804,
                  v_r_30805,
                  v_s_30806,
                  v_a_30807,
                  v_o_30808;
                for (let v_t_30809 = 0; v_t_30809 < v_u_30793.We.length; ++v_t_30809) !((v_c_30800 = v_u_30793.We[v_t_30809]).od > v_f_30794 && v_i_30802.od <= v_f_30794) && (v_c_30800.od >= v_f_30794 && (v_c_30800.Pg < -.25 && v_i_30802.Pg < -.25 || .84 < v_c_30800.Pg && .84 < v_i_30802.Pg) || v_c_30800.od < v_f_30794 && (v_c_30800.Pg < 0 && v_i_30802.Og < 0 || .84 < v_c_30800.Pg && .84 < v_i_30802.Og)) || v_c_30800.od < v_f_30794 && v_i_30802.od < v_f_30794 || v_c_30800.Xg === v_i_30802.Xg ? v_i_30802 = v_c_30800 : (v_i_30802.od < v_f_30794 ? (v_e_30803 = (v_f_30794 - v_i_30802.od) / (v_c_30800.od - v_i_30802.od), v_n_30804 = v_u_30793.Fi === v_s0_27698 ? 64 * v_Ee_28084(v_i_30802.ou, v_c_30800.ou, v_e_30803) : 64 * v_i_30802.ou, v_a_30807 = v_E0_27739 * v_c_30800.G0 / 16, v_o_30808 = v_E0_27739 * v_Ee_28084(v_i_30802.G0, v_c_30800.G0, v_e_30803) / 16, v_r_30805 = 64 * v_c_30800.ou + 64 * v_c_30800.Le / 2 - v_we_27734, v_s_30806 = v_n_30804 + 64 * v_Ee_28084(v_i_30802.Le, v_c_30800.Le, v_e_30803) / 2 - v_we_27734, v___30795[3 * v_l_30799 + 0] = v_r_30805 - v_d_30797, v___30795[3 * v_l_30799 + 1] = v_a_30807, v___30795[3 * v_l_30799 + 2] = -v_c_30800.Pg * v_ve_27731, v___30795[3 * v_l_30799 + 3] = v_r_30805 + v_d_30797, v___30795[3 * v_l_30799 + 4] = v_a_30807, v___30795[3 * v_l_30799 + 5] = -v_c_30800.Pg * v_ve_27731, v___30795[3 * v_l_30799 + 6] = v_s_30806 - v_d_30797, v___30795[3 * v_l_30799 + 7] = v_o_30808, v___30795[3 * v_l_30799 + 8] = 0, v___30795[3 * v_l_30799 + 9] = v_s_30806 + v_d_30797, v___30795[3 * v_l_30799 + 10] = v_o_30808, v___30795[3 * v_l_30799 + 11] = 0) : (v_a_30807 = v_E0_27739 * v_c_30800.G0 / 16, v_o_30808 = v_E0_27739 * v_i_30802.G0 / 16, v_r_30805 = 64 * v_c_30800.ou + 64 * v_c_30800.Le / 2 - v_we_27734, v_s_30806 = 64 * v_i_30802.ou + 64 * v_i_30802.Le / 2 - v_we_27734, v___30795[3 * v_l_30799 + 0] = v_r_30805 - v_d_30797, v___30795[3 * v_l_30799 + 1] = v_a_30807, v___30795[3 * v_l_30799 + 2] = -v_c_30800.Pg * v_ve_27731, v___30795[3 * v_l_30799 + 3] = v_r_30805 + v_d_30797, v___30795[3 * v_l_30799 + 4] = v_a_30807, v___30795[3 * v_l_30799 + 5] = -v_c_30800.Pg * v_ve_27731, v___30795[3 * v_l_30799 + 6] = v_s_30806 - v_d_30797, v___30795[3 * v_l_30799 + 7] = v_o_30808, v___30795[3 * v_l_30799 + 8] = -v_i_30802.Pg * v_ve_27731, v___30795[3 * v_l_30799 + 9] = v_s_30806 + v_d_30797, v___30795[3 * v_l_30799 + 10] = v_o_30808, v___30795[3 * v_l_30799 + 11] = -v_i_30802.Pg * v_ve_27731), v_h_30796[2 * v_l_30799 + 0] = 0, v_h_30796[2 * v_l_30799 + 1] = v_v_30798, v_h_30796[2 * v_l_30799 + 2] = 1, v_h_30796[2 * v_l_30799 + 3] = v_v_30798, v_h_30796[2 * v_l_30799 + 4] = 0, v_h_30796[2 * v_l_30799 + 5] = v_v_30798, v_h_30796[2 * v_l_30799 + 6] = 1, v_h_30796[2 * v_l_30799 + 7] = v_v_30798, v_l_30799 += 4, v_i_30802 = v_c_30800, 20480 <= v_l_30799 && v_w_30801());
              }
              {
                let v_i_30810 = v_u_30793,
                  v_e_30811,
                  v_n_30812,
                  v_r_30813,
                  v_s_30814,
                  v_a_30815,
                  v_o_30816;
                for (let v_t_30817 = 0; v_t_30817 < v_u_30793.We.length; ++v_t_30817) (v_c_30800 = v_u_30793.We[v_t_30817]).Og < -.25 && v_i_30810.Og < -.25 || 0 < v_c_30800.Og && 0 < v_i_30810.Og || v_c_30800.od >= v_f_30794 && v_i_30810.od >= v_f_30794 || v_c_30800.Xg === v_i_30810.Xg ? v_i_30810 = v_c_30800 : (v_c_30800.od >= v_f_30794 ? (v_e_30811 = (v_f_30794 - v_i_30810.od) / (v_c_30800.od - v_i_30810.od), v_n_30812 = v_u_30793.Fi === v_s0_27698 ? 64 * v_Ee_28084(v_i_30810.ou, v_c_30800.ou, v_e_30811) : 64 * v_i_30810.ou, v_a_30815 = v_E0_27739 * v_Ee_28084(v_i_30810.G0, v_c_30800.G0, v_e_30811) / 16, v_o_30816 = v_E0_27739 * v_i_30810.G0 / 16, v_r_30813 = v_n_30812 - v_we_27734 + 64 * v_Ee_28084(v_i_30810.Le, v_c_30800.Le, v_e_30811) / 2, v_s_30814 = 64 * (v_i_30810.ou + v_i_30810.Le / 2) - v_we_27734, v___30795[3 * v_l_30799 + 0] = v_r_30813 - v_d_30797, v___30795[3 * v_l_30799 + 1] = v_a_30815, v___30795[3 * v_l_30799 + 2] = 0, v___30795[3 * v_l_30799 + 3] = v_r_30813 + v_d_30797, v___30795[3 * v_l_30799 + 4] = v_a_30815, v___30795[3 * v_l_30799 + 5] = 0) : (v_a_30815 = v_E0_27739 * v_c_30800.G0 / 16, v_o_30816 = v_E0_27739 * v_i_30810.G0 / 16, v_r_30813 = 64 * v_c_30800.ou + 64 * v_c_30800.Le / 2 - v_we_27734, v_s_30814 = 64 * v_i_30810.ou + 64 * v_i_30810.Le / 2 - v_we_27734, v___30795[3 * v_l_30799 + 0] = v_r_30813 - v_d_30797, v___30795[3 * v_l_30799 + 1] = v_a_30815, v___30795[3 * v_l_30799 + 2] = -v_c_30800.Og * v_ve_27731, v___30795[3 * v_l_30799 + 3] = v_r_30813 + v_d_30797, v___30795[3 * v_l_30799 + 4] = v_a_30815, v___30795[3 * v_l_30799 + 5] = -v_c_30800.Og * v_ve_27731), v___30795[3 * v_l_30799 + 6] = v_s_30814 - v_d_30797, v___30795[3 * v_l_30799 + 7] = v_o_30816, v___30795[3 * v_l_30799 + 8] = -v_i_30810.Og * v_ve_27731, v___30795[3 * v_l_30799 + 9] = v_s_30814 + v_d_30797, v___30795[3 * v_l_30799 + 10] = v_o_30816, v___30795[3 * v_l_30799 + 11] = -v_i_30810.Og * v_ve_27731, v_h_30796[2 * v_l_30799 + 0] = 0, v_h_30796[2 * v_l_30799 + 1] = v_v_30798, v_h_30796[2 * v_l_30799 + 2] = 1, v_h_30796[2 * v_l_30799 + 3] = v_v_30798, v_h_30796[2 * v_l_30799 + 4] = 0, v_h_30796[2 * v_l_30799 + 5] = v_v_30798, v_h_30796[2 * v_l_30799 + 6] = 1, v_h_30796[2 * v_l_30799 + 7] = v_v_30798, v_l_30799 += 4, v_i_30810 = v_c_30800, 20480 <= v_l_30799 && v_w_30801());
              }
              function v_w_30801() {
                0 !== v_l_30799 && (v_J_30266.ml.jl("vertices", 3 * v_l_30799), v_J_30266.ml.jl("coords", 2 * v_l_30799), v_an_27595.uniforms({
                  texture: 0,
                  opacity: 1
                }).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_l_30799 / 2 * 3), v_l_30799 = 0);
              }
              v_w_30801();
            }
          },
          vc: function (v_h_30818, v_d_30819, v_v_30820, v_w_30821, v_g_30822, v_m_30823, v_i_30824) {
            switch (v_h_30818) {
              case v_d0_27714:
                if (!(v_g_30822 < 30)) return !0;
                if (null === v_m_30823) {
                  v_m_30823 = {
                    particles: function () {
                      var v_i_30857 = [];
                      for (let v_t_30858 = 0; v_t_30858 < 8; ++v_t_30858) v_i_30857.push({
                        x: 80 * mathRandom() - 40,
                        y: 480 * mathRandom() + 30,
                        size: 0,
                        mx: 0,
                        ease: 0
                      });
                      return v_i_30857;
                    }(),
                    lines: []
                  };
                  for (let v_t_30859 = 0; v_t_30859 < 45; ++v_t_30859) v_m_30823.lines.push({
                    t: 15 * mathRandom() / 30,
                    x: 140 * mathRandom() - 70,
                    sy: 60 * mathRandom()
                  });
                }
                if (glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_g_30822 < 15) {
                  let v_t_30860 = 0;
                  v_t_30860 = v_g_30822 < 3 ? v_g_30822 / 3 : 1 - (v_g_30822 - 3) / 12, glContext.pushMatrix(), v_H_30265.oo.bind(0), glContext.translate(v_d_30819, 0, 0), v_mn_27629.opacity = v_t_30860, v_Xe_27581.uniforms(v_mn_27629).draw(v_J_30266.Qo), glContext.popMatrix();
                }
                {
                  let v_i_30861 = v_g_30822 / 30,
                    v_t_30862,
                    v_e_30863,
                    v_n_30864,
                    v_r_30865;
                  var v_a_30825 = v_J_30266.ml.Gl("vertices"),
                    v_o_30826 = v_J_30266.ml.Gl("colors"),
                    v_l_30827 = v_J_30266.ml.Gl("coords");
                  let v_s_30866 = 0;
                  if (v_g_30822 < 15) {
                    v_t_30862 = v_Ee_28084(60, 140, 2 * v_i_30861), v_e_30863 = 1 - v_Vl_28189(2 * v_i_30861), v_a_30825[3 * v_s_30866 + 0] = v_d_30819 - v_t_30862 / 2, v_a_30825[3 * v_s_30866 + 1] = 700, v_a_30825[3 * v_s_30866 + 2] = v_O_30275(700), v_a_30825[3 * v_s_30866 + 3] = v_d_30819 + v_t_30862 / 2, v_a_30825[3 * v_s_30866 + 4] = 700, v_a_30825[3 * v_s_30866 + 5] = v_O_30275(700), v_a_30825[3 * v_s_30866 + 6] = v_d_30819 - v_t_30862 / 2, v_a_30825[3 * v_s_30866 + 7] = 0, v_a_30825[3 * v_s_30866 + 8] = 0, v_a_30825[3 * v_s_30866 + 9] = v_d_30819 + v_t_30862 / 2, v_a_30825[3 * v_s_30866 + 10] = 0;
                    for (let v_t_30867 = v_a_30825[3 * v_s_30866 + 11] = 0; v_t_30867 < 4; ++v_t_30867) v_o_30826[4 * v_s_30866 + 0 + 4 * v_t_30867] = 1, v_o_30826[4 * v_s_30866 + 1 + 4 * v_t_30867] = 1, v_o_30826[4 * v_s_30866 + 2 + 4 * v_t_30867] = 1, v_o_30826[4 * v_s_30866 + 3 + 4 * v_t_30867] = v_e_30863;
                    v_l_30827[2 * v_s_30866 + 0] = 0, v_l_30827[2 * v_s_30866 + 1] = 1, v_l_30827[2 * v_s_30866 + 2] = .5, v_l_30827[2 * v_s_30866 + 3] = 1, v_l_30827[2 * v_s_30866 + 4] = 0, v_l_30827[2 * v_s_30866 + 5] = 0, v_l_30827[2 * v_s_30866 + 6] = .5, v_l_30827[2 * v_s_30866 + 7] = 0, v_s_30866 += 4;
                  }
                  for (let v_t_30868 = 0; v_t_30868 < v_m_30823.lines.length; ++v_t_30868) if (!(v_m_30823.lines[v_t_30868].t > v_i_30861 || v_m_30823.lines[v_t_30868].t + .5 < v_i_30861)) {
                    v_n_30864 = v_m_30823.lines[v_t_30868].x + v_d_30819, v_r_30865 = v_m_30823.lines[v_t_30868].sy + 2 * (v_i_30861 - v_m_30823.lines[v_t_30868].t) * 800, v_e_30863 = 1 - v_Wl_28190(2 * (v_i_30861 - v_m_30823.lines[v_t_30868].t)), v_a_30825[3 * v_s_30866 + 0] = v_n_30864 - 3.5, v_a_30825[3 * v_s_30866 + 1] = v_r_30865 + 350, v_a_30825[3 * v_s_30866 + 2] = v_O_30275(v_r_30865 + 350), v_a_30825[3 * v_s_30866 + 3] = v_n_30864 + 3.5, v_a_30825[3 * v_s_30866 + 4] = v_r_30865 + 350, v_a_30825[3 * v_s_30866 + 5] = v_O_30275(v_r_30865 + 350), v_a_30825[3 * v_s_30866 + 6] = v_n_30864 - 3.5, v_a_30825[3 * v_s_30866 + 7] = v_r_30865, v_a_30825[3 * v_s_30866 + 8] = v_O_30275(v_r_30865), v_a_30825[3 * v_s_30866 + 9] = v_n_30864 + 3.5, v_a_30825[3 * v_s_30866 + 10] = v_r_30865, v_a_30825[3 * v_s_30866 + 11] = v_O_30275(v_r_30865);
                    for (let v_t_30869 = 0; v_t_30869 < 4; ++v_t_30869) v_o_30826[4 * v_s_30866 + 0 + 4 * v_t_30869] = 1, v_o_30826[4 * v_s_30866 + 1 + 4 * v_t_30869] = 1, v_o_30826[4 * v_s_30866 + 2 + 4 * v_t_30869] = 1, v_o_30826[4 * v_s_30866 + 3 + 4 * v_t_30869] = v_e_30863;
                    v_l_30827[2 * v_s_30866 + 0] = .9375, v_l_30827[2 * v_s_30866 + 1] = 1, v_l_30827[2 * v_s_30866 + 2] = 1, v_l_30827[2 * v_s_30866 + 3] = 1, v_l_30827[2 * v_s_30866 + 4] = .9375, v_l_30827[2 * v_s_30866 + 5] = 0, v_l_30827[2 * v_s_30866 + 6] = 1, v_l_30827[2 * v_s_30866 + 7] = 0, v_s_30866 += 4;
                  }
                  0 < v_s_30866 && (v_J_30266.ml.jl("vertices", 3 * v_s_30866), v_J_30266.ml.jl("colors", 4 * v_s_30866), v_J_30266.ml.jl("coords", 2 * v_s_30866), v_H_30265.po.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_s_30866 / 2 * 3));
                }
                glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), v_G_30856(v_g_30822, v_d_30819);
                {
                  var v_c_30828 = v_m_30823.particles,
                    v_B_30829 = v_d_30819,
                    v_N_30830 = 0;
                  let v_i_30870,
                    v_e_30871,
                    v_n_30872,
                    v_r_30873 = v_g_30822 / 30,
                    v_s_30874 = v_J_30266.ml.Gl("vertices"),
                    v_a_30875 = v_J_30266.ml.Gl("colors"),
                    v_o_30876 = v_J_30266.ml.Gl("coords"),
                    v_l_30877 = 0;
                  for (let v_t_30878 = 0; v_t_30878 < v_c_30828.length; ++v_t_30878) {
                    v_i_30870 = v_B_30829 + v_c_30828[v_t_30878].x, v_e_30871 = v_c_30828[v_t_30878].y + v_N_30830 + 20 * v_r_30873, v_n_30872 = .1875 * (1 - v_Yl_28194(v_r_30873)), v_s_30874[3 * v_l_30877 + 0] = v_i_30870 - 16, v_s_30874[3 * v_l_30877 + 1] = v_e_30871 + 16, v_s_30874[3 * v_l_30877 + 2] = v_j_30274(v_e_30871 + 16) + 8, v_s_30874[3 * v_l_30877 + 3] = v_i_30870 + 16, v_s_30874[3 * v_l_30877 + 4] = v_e_30871 + 16, v_s_30874[3 * v_l_30877 + 5] = v_j_30274(v_e_30871 + 16) + 8, v_s_30874[3 * v_l_30877 + 6] = v_i_30870 - 16, v_s_30874[3 * v_l_30877 + 7] = v_e_30871 - 16, v_s_30874[3 * v_l_30877 + 8] = v_j_30274(v_e_30871 - 16) + 8, v_s_30874[3 * v_l_30877 + 9] = v_i_30870 + 16, v_s_30874[3 * v_l_30877 + 10] = v_e_30871 - 16, v_s_30874[3 * v_l_30877 + 11] = v_j_30274(v_e_30871 - 16) + 8;
                    for (let v_t_30879 = 0; v_t_30879 < 4; ++v_t_30879) v_a_30875[4 * v_l_30877 + 0 + 4 * v_t_30879] = 1, v_a_30875[4 * v_l_30877 + 1 + 4 * v_t_30879] = 1, v_a_30875[4 * v_l_30877 + 2 + 4 * v_t_30879] = 1, v_a_30875[4 * v_l_30877 + 3 + 4 * v_t_30879] = v_n_30872;
                    v_o_30876[2 * v_l_30877 + 0] = .625, v_o_30876[2 * v_l_30877 + 1] = 1, v_o_30876[2 * v_l_30877 + 2] = .75, v_o_30876[2 * v_l_30877 + 3] = 1, v_o_30876[2 * v_l_30877 + 4] = .625, v_o_30876[2 * v_l_30877 + 5] = .875, v_o_30876[2 * v_l_30877 + 6] = .75, v_o_30876[2 * v_l_30877 + 7] = .875, v_l_30877 += 4;
                  }
                  0 < v_l_30877 && (v_J_30266.ml.jl("vertices", 3 * v_l_30877), v_J_30266.ml.jl("colors", 4 * v_l_30877), v_J_30266.ml.jl("coords", 2 * v_l_30877), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.po.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_l_30877 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
                }
                break;
              case 1:
                if (!(v_g_30822 < 30)) return !0;
                null === v_m_30823 && (v_m_30823 = {
                  particles: v_r_30854()
                }), v_G_30856(v_g_30822, v_d_30819), v_s_30855(v_m_30823.particles, v_d_30819, v_w_30821, v_g_30822, 0);
                break;
              case 6:
                if (!(v_g_30822 < 30)) return !0;
                v_s_30855((v_m_30823 = null === v_m_30823 ? {
                  particles: v_r_30854()
                } : v_m_30823).particles, v_d_30819, v_w_30821, v_g_30822, 0);
                break;
              case 3:
              case 4:
                if (!(v_g_30822 < 60)) return !0;
                {
                  var v_u_30831 = 4 === v_h_30818 ? [v_d_30819 - 60, v_d_30819 - 20, v_d_30819 + 20, v_d_30819 + 60] : [v_d_30819 + 60, v_d_30819 + 20, v_d_30819 - 20, v_d_30819 - 60];
                  let v_e_30880,
                    v_n_30881,
                    v_r_30882 = 80,
                    v_i_30883,
                    v_s_30884,
                    v_a_30885,
                    v_o_30886,
                    v_l_30887,
                    v_c_30888 = 0;
                  var v_f_30832 = v_J_30266.ml.Gl("vertices"),
                    v___30833 = v_J_30266.ml.Gl("colors"),
                    v_p_30834 = v_J_30266.ml.Gl("coords");
                  if (null === v_m_30823) {
                    v_m_30823 = {
                      YI: []
                    };
                    for (let v_i_30889 = 0; v_i_30889 < 4; ++v_i_30889) {
                      v_n_30881 = 2 * (3 * (3 - v_i_30889) + 9);
                      for (let v_t_30890 = 0; v_t_30890 < 12; ++v_t_30890) v_m_30823.YI.push({
                        begin_t: v_n_30881 + mathFloor(12 * mathRandom()),
                        x: v_u_30831[v_i_30889] + mathRandom() * v_r_30882 - v_r_30882 / 2,
                        y: 12 * mathRandom(),
                        speed: .5 * mathRandom() + .5
                      });
                    }
                    for (let v_t_30891 = 0; v_t_30891 < 12; ++v_t_30891) v_m_30823.YI.push({
                      begin_t: 18 + mathFloor(12 * mathRandom()),
                      x: v_u_30831[0] + mathRandom() * v_r_30882 / 2 - v_r_30882 / 4,
                      y: 12 * mathRandom(),
                      speed: .5 * mathRandom() + 1
                    });
                  }
                  for (let v_t_30892 = 0; v_t_30892 < 4; ++v_t_30892) if (v_n_30881 = 3 * v_t_30892, v_g_30822 >= v_n_30881 && v_g_30822 < v_n_30881 + 30) {
                    v_e_30880 = (v_g_30822 - v_n_30881) / 30, v_i_30883 = 160 - 40 * v_$l_28197(v_e_30880), v_a_30885 = v_O_30275(v_i_30883), v_f_30832[3 * v_c_30888 + 0] = v_u_30831[v_t_30892] - v_r_30882 / 2, v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 3] = v_u_30831[v_t_30892] + v_r_30882 / 2, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885, v_f_30832[3 * v_c_30888 + 6] = v_u_30831[v_t_30892] - v_r_30882 / 2, v_f_30832[3 * v_c_30888 + 7] = 0, v_f_30832[3 * v_c_30888 + 8] = 0, v_f_30832[3 * v_c_30888 + 9] = v_u_30831[v_t_30892] + v_r_30882 / 2, v_f_30832[3 * v_c_30888 + 10] = 0, v_f_30832[3 * v_c_30888 + 11] = 0, v_l_30887 = 1 - v_e_30880;
                    for (let v_t_30893 = 0; v_t_30893 < 4; ++v_t_30893) v___30833[4 * v_c_30888 + 0 + 4 * v_t_30893] = 1, v___30833[4 * v_c_30888 + 1 + 4 * v_t_30893] = 1, v___30833[4 * v_c_30888 + 2 + 4 * v_t_30893] = 1, v___30833[4 * v_c_30888 + 3 + 4 * v_t_30893] = v_l_30887;
                    v_p_30834[2 * v_c_30888 + 0] = 1, v_p_30834[2 * v_c_30888 + 1] = .2421875, v_p_30834[2 * v_c_30888 + 2] = 0, v_p_30834[2 * v_c_30888 + 3] = .2421875, v_p_30834[2 * v_c_30888 + 4] = 1, v_p_30834[2 * v_c_30888 + 5] = 0, v_p_30834[2 * v_c_30888 + 6] = 0, v_p_30834[2 * v_c_30888 + 7] = 0, v_c_30888 += 4;
                  }
                  if (v_g_30822 < 30) {
                    v_i_30883 = 50, v_a_30885 = v_O_30275(v_i_30883), v_l_30887 = 1 - v_$l_28197(v_g_30822 / 25);
                    for (let v_t_30894 = 0; v_t_30894 < 2; ++v_t_30894) {
                      4 === v_h_30818 ? (v_s_30884 = v_Ee_28084(v_u_30831[0] + 10, v_u_30831[3] + v_r_30882 / 2, mathMin(v_g_30822 / 15, 1)), v_f_30832[3 * v_c_30888 + 0] = v_u_30831[0] - 30, v_f_30832[3 * v_c_30888 + 3] = v_s_30884 - 30, v_f_30832[3 * v_c_30888 + 6] = v_u_30831[0], v_f_30832[3 * v_c_30888 + 9] = v_s_30884) : (v_s_30884 = v_Ee_28084(v_u_30831[0] - 10, v_u_30831[3] - v_r_30882 / 2, mathMin(v_g_30822 / 15, 1)), v_f_30832[3 * v_c_30888 + 0] = v_s_30884 + 30, v_f_30832[3 * v_c_30888 + 3] = v_u_30831[0] + 30, v_f_30832[3 * v_c_30888 + 6] = v_s_30884, v_f_30832[3 * v_c_30888 + 9] = v_u_30831[0]), 0 === v_t_30894 ? (v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885) : (v_f_30832[3 * v_c_30888 + 1] = .5 * -v_i_30883, v_f_30832[3 * v_c_30888 + 2] = .5 * -v_a_30885, v_f_30832[3 * v_c_30888 + 4] = .5 * -v_i_30883, v_f_30832[3 * v_c_30888 + 5] = .5 * -v_a_30885), v_f_30832[3 * v_c_30888 + 7] = 0, v_f_30832[3 * v_c_30888 + 8] = 0, v_f_30832[3 * v_c_30888 + 10] = 0;
                      for (let v_t_30895 = v_f_30832[3 * v_c_30888 + 11] = 0; v_t_30895 < 4; ++v_t_30895) v___30833[4 * v_c_30888 + 0 + 4 * v_t_30895] = 1, v___30833[4 * v_c_30888 + 1 + 4 * v_t_30895] = 1, v___30833[4 * v_c_30888 + 2 + 4 * v_t_30895] = 1, v___30833[4 * v_c_30888 + 3 + 4 * v_t_30895] = v_t_30895 < 2 ? 0 : v_l_30887;
                      4 === v_h_30818 ? (v_p_30834[2 * v_c_30888 + 0] = 1, v_p_30834[2 * v_c_30888 + 1] = .7421875, v_p_30834[2 * v_c_30888 + 2] = 0, v_p_30834[2 * v_c_30888 + 3] = .7421875, v_p_30834[2 * v_c_30888 + 4] = 1, v_p_30834[2 * v_c_30888 + 5] = 1, v_p_30834[2 * v_c_30888 + 6] = 0) : (v_p_30834[2 * v_c_30888 + 0] = 0, v_p_30834[2 * v_c_30888 + 1] = .7421875, v_p_30834[2 * v_c_30888 + 2] = 1, v_p_30834[2 * v_c_30888 + 3] = .7421875, v_p_30834[2 * v_c_30888 + 4] = 0, v_p_30834[2 * v_c_30888 + 5] = 1, v_p_30834[2 * v_c_30888 + 6] = 1), v_p_30834[2 * v_c_30888 + 7] = 1, v_c_30888 += 4;
                      for (let v_t_30896 = 0; v_t_30896 < 2; ++v_t_30896) {
                        v_i_30883 = 40 + 40 * v_t_30896, v_a_30885 = v_O_30275(v_i_30883), v_s_30884 = v_Ee_28084(v_u_30831[0], v_u_30831[3], mathMin(v_e_30880, 1)), v_o_30886 = .125 * mathAbs(v_s_30884 - v_u_30831[0]), 4 === v_h_30818 ? (v_f_30832[3 * v_c_30888 + 0] = v_u_30831[0] - 90 - v_o_30886, v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 3] = v_s_30884 + 90, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885, v_f_30832[3 * v_c_30888 + 6] = v_u_30831[0] - 90 - v_o_30886, v_f_30832[3 * v_c_30888 + 7] = -v_i_30883, v_f_30832[3 * v_c_30888 + 8] = -v_a_30885, v_f_30832[3 * v_c_30888 + 9] = v_s_30884 + 90) : (v_f_30832[3 * v_c_30888 + 0] = v_s_30884 - 90, v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 3] = v_u_30831[0] + 90 + v_o_30886, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885, v_f_30832[3 * v_c_30888 + 6] = v_s_30884 - 90, v_f_30832[3 * v_c_30888 + 7] = -v_i_30883, v_f_30832[3 * v_c_30888 + 8] = -v_a_30885, v_f_30832[3 * v_c_30888 + 9] = v_u_30831[0] + 90 + v_o_30886), v_f_30832[3 * v_c_30888 + 10] = -v_i_30883, v_f_30832[3 * v_c_30888 + 11] = -v_a_30885;
                        for (let v_t_30897 = 0; v_t_30897 < 4; ++v_t_30897) v___30833[4 * v_c_30888 + 0 + 4 * v_t_30897] = 1, v___30833[4 * v_c_30888 + 1 + 4 * v_t_30897] = 1, v___30833[4 * v_c_30888 + 2 + 4 * v_t_30897] = 1, v___30833[4 * v_c_30888 + 3 + 4 * v_t_30897] = .5 * v_l_30887;
                        v_p_30834[2 * v_c_30888 + 0] = 0, v_p_30834[2 * v_c_30888 + 1] = .4921875, v_p_30834[2 * v_c_30888 + 2] = 1, v_p_30834[2 * v_c_30888 + 3] = .4921875, v_p_30834[2 * v_c_30888 + 4] = 0, v_p_30834[2 * v_c_30888 + 5] = .25, v_p_30834[2 * v_c_30888 + 6] = 1, v_p_30834[2 * v_c_30888 + 7] = .25, v_c_30888 += 4;
                      }
                    }
                    v_i_30883 = 110, v_a_30885 = v_O_30275(v_i_30883), v_o_30886 = .125 * mathAbs(v_s_30884 - v_u_30831[0]), 4 === v_h_30818 ? (v_f_30832[3 * v_c_30888 + 0] = v_u_30831[0] - 110 - v_o_30886, v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 3] = v_s_30884 + 110, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885, v_f_30832[3 * v_c_30888 + 6] = v_u_30831[0] - 110 - v_o_30886, v_f_30832[3 * v_c_30888 + 7] = -v_i_30883, v_f_30832[3 * v_c_30888 + 8] = -v_a_30885, v_f_30832[3 * v_c_30888 + 9] = v_s_30884 + 110) : (v_f_30832[3 * v_c_30888 + 0] = v_s_30884 - 110, v_f_30832[3 * v_c_30888 + 1] = v_i_30883, v_f_30832[3 * v_c_30888 + 2] = v_a_30885, v_f_30832[3 * v_c_30888 + 3] = v_u_30831[0] + 110 + v_o_30886, v_f_30832[3 * v_c_30888 + 4] = v_i_30883, v_f_30832[3 * v_c_30888 + 5] = v_a_30885, v_f_30832[3 * v_c_30888 + 6] = v_s_30884 - 110, v_f_30832[3 * v_c_30888 + 7] = -v_i_30883, v_f_30832[3 * v_c_30888 + 8] = -v_a_30885, v_f_30832[3 * v_c_30888 + 9] = v_u_30831[0] + 110 + v_o_30886), v_f_30832[3 * v_c_30888 + 10] = -v_i_30883, v_f_30832[3 * v_c_30888 + 11] = -v_a_30885, v_l_30887 = .75 < v_e_30880 ? .75 * (1 - (v_e_30880 - .75) / .25) : .75;
                    for (let v_t_30898 = 0; v_t_30898 < 4; ++v_t_30898) v___30833[4 * v_c_30888 + 0 + 4 * v_t_30898] = 0, v___30833[4 * v_c_30888 + 1 + 4 * v_t_30898] = 0, v___30833[4 * v_c_30888 + 2 + 4 * v_t_30898] = 1, v___30833[4 * v_c_30888 + 3 + 4 * v_t_30898] = v_l_30887;
                    v_p_30834[2 * v_c_30888 + 0] = 0, v_p_30834[2 * v_c_30888 + 1] = .4921875, v_p_30834[2 * v_c_30888 + 2] = 1, v_p_30834[2 * v_c_30888 + 3] = .4921875, v_p_30834[2 * v_c_30888 + 4] = 0, v_p_30834[2 * v_c_30888 + 5] = .25, v_p_30834[2 * v_c_30888 + 6] = 1, v_p_30834[2 * v_c_30888 + 7] = .25, v_c_30888 += 4;
                  }
                  0 < v_c_30888 && (v_J_30266.ml.jl("vertices", 3 * v_c_30888), v_J_30266.ml.jl("colors", 4 * v_c_30888), v_J_30266.ml.jl("coords", 2 * v_c_30888), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Ao.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_c_30888 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), v_c_30888 = 0), v_r_30882 = 90;
                  for (let v_i_30899 = 0; v_i_30899 < 4; ++v_i_30899) {
                    v_n_30881 = 3 * v_i_30899, v_a_30885 = v_Wl_28190(v_e_30880);
                    for (let v_t_30900 = 0; v_t_30900 < 4; ++v_t_30900) {
                      v_e_30880 = v_Qa_28089(v_Ya_28085(v_n_30881 + 4 * v_t_30900, v_n_30881 + 30 + 4 * v_t_30900, v_g_30822), 0, 1), v_o_30886 = 1.5 * v_ql_28195(v_e_30880), v_l_30887 = 1 - v_zl_28192(v_e_30880), v_f_30832[3 * v_c_30888 + 0] = v_u_30831[v_i_30899] - v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 1] = 0, v_f_30832[3 * v_c_30888 + 2] = -v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 3] = v_u_30831[v_i_30899] + v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 4] = 0, v_f_30832[3 * v_c_30888 + 5] = -v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 6] = v_u_30831[v_i_30899] - v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 7] = 0, v_f_30832[3 * v_c_30888 + 8] = v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 9] = v_u_30831[v_i_30899] + v_r_30882 / 2 * v_o_30886, v_f_30832[3 * v_c_30888 + 10] = 0, v_f_30832[3 * v_c_30888 + 11] = v_r_30882 / 2 * v_o_30886;
                      for (let v_t_30901 = 0; v_t_30901 < 4; ++v_t_30901) v___30833[4 * v_c_30888 + 0 + 4 * v_t_30901] = 1, v___30833[4 * v_c_30888 + 1 + 4 * v_t_30901] = 1, v___30833[4 * v_c_30888 + 2 + 4 * v_t_30901] = 1, v___30833[4 * v_c_30888 + 3 + 4 * v_t_30901] = 2 * v_l_30887;
                      v_p_30834[2 * v_c_30888 + 0] = 0, v_p_30834[2 * v_c_30888 + 1] = 0, v_p_30834[2 * v_c_30888 + 2] = 1, v_p_30834[2 * v_c_30888 + 3] = 0, v_p_30834[2 * v_c_30888 + 4] = 0, v_p_30834[2 * v_c_30888 + 5] = 1, v_p_30834[2 * v_c_30888 + 6] = 1, v_p_30834[2 * v_c_30888 + 7] = 1, v_c_30888 += 4;
                    }
                  }
                  0 < v_c_30888 && (v_J_30266.ml.jl("vertices", 3 * v_c_30888), v_J_30266.ml.jl("colors", 4 * v_c_30888), v_J_30266.ml.jl("coords", 2 * v_c_30888), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.ho.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_c_30888 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), v_c_30888 = 0);
                  var v_k_30835 = v_ql_28195(v_g_30822 / 30);
                  if (v_gn_27628.opacity = v_g_30822 < 4 ? v_g_30822 / 4 : 1 - (v_g_30822 - 4) / 26, glContext.pushMatrix(), v_H_30265.vo.bind(0), glContext.translate(v_d_30819, 0, 0), glContext.scale(1.25 * v_k_30835, 1, .875 * v_k_30835), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.vo), glContext.popMatrix(), v_g_30822 < 15 && (glContext.pushMatrix(), v_H_30265.wo.bind(0), glContext.translate(v_d_30819, 0, 0), glContext.scale(1, 1, 1), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_gn_27628.opacity = 1 - v_Vl_28189(v_g_30822 / 15), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.el), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix()), v_m_30823.YI) {
                    var v_b_30836,
                      v_y_30837,
                      v_S_30838,
                      v_A_30839 = v_J_30266.ml.Gl("vertices"),
                      v_x_30840 = v_J_30266.ml.Gl("colors"),
                      v_C_30841 = v_J_30266.ml.Gl("coords");
                    let v_i_30902 = 0;
                    for (let v_t_30903 = 0; v_t_30903 < v_m_30823.YI.length; ++v_t_30903) if (v_S_30838 = v_m_30823.YI[v_t_30903], !(v_g_30822 < v_S_30838.begin_t || v_g_30822 >= v_S_30838.begin_t + 30)) {
                      v_e_30880 = (v_g_30822 - v_S_30838.begin_t) / 30, v_b_30836 = v_S_30838.x, v_S_30838 = v_Ee_28084(0, -80, v_e_30880) * v_S_30838.speed + 30 - v_S_30838.y, v_y_30837 = .75 * (1 - v_Yl_28194(v_e_30880)), v_A_30839[3 * v_i_30902 + 0] = v_b_30836 - 10, v_A_30839[3 * v_i_30902 + 1] = 10 + v_S_30838, v_A_30839[3 * v_i_30902 + 2] = v_j_30274(10 + v_S_30838), v_A_30839[3 * v_i_30902 + 3] = v_b_30836 + 10, v_A_30839[3 * v_i_30902 + 4] = 10 + v_S_30838, v_A_30839[3 * v_i_30902 + 5] = v_j_30274(10 + v_S_30838), v_A_30839[3 * v_i_30902 + 6] = v_b_30836 - 10, v_A_30839[3 * v_i_30902 + 7] = v_S_30838 - 10, v_A_30839[3 * v_i_30902 + 8] = v_j_30274(v_S_30838 - 10), v_A_30839[3 * v_i_30902 + 9] = v_b_30836 + 10, v_A_30839[3 * v_i_30902 + 10] = v_S_30838 - 10, v_A_30839[3 * v_i_30902 + 11] = v_j_30274(v_S_30838 - 10);
                      for (let v_t_30904 = 0; v_t_30904 < 4; ++v_t_30904) v_x_30840[4 * v_i_30902 + 0 + 4 * v_t_30904] = .25, v_x_30840[4 * v_i_30902 + 1 + 4 * v_t_30904] = .75, v_x_30840[4 * v_i_30902 + 2 + 4 * v_t_30904] = 1, v_x_30840[4 * v_i_30902 + 3 + 4 * v_t_30904] = v_y_30837;
                      v_C_30841[2 * v_i_30902 + 0] = 0, v_C_30841[2 * v_i_30902 + 1] = 1, v_C_30841[2 * v_i_30902 + 2] = 1, v_C_30841[2 * v_i_30902 + 3] = 1, v_C_30841[2 * v_i_30902 + 4] = 0, v_C_30841[2 * v_i_30902 + 5] = 0, v_C_30841[2 * v_i_30902 + 6] = 1, v_C_30841[2 * v_i_30902 + 7] = 0, v_i_30902 += 4;
                    }
                    0 < v_i_30902 && (v_J_30266.ml.jl("vertices", 3 * v_i_30902), v_J_30266.ml.jl("colors", 4 * v_i_30902), v_J_30266.ml.jl("coords", 2 * v_i_30902), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.To.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_i_30902 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
                  }
                }
                break;
              case 7:
              case 8:
                if (!(v_g_30822 < 30)) return !0;
                {
                  var v_T_30842 = 64 * v_v_30820 * .95;
                  let v_i_30905 = v_d_30819 - v_T_30842 / 2,
                    v_t_30906 = v_d_30819 + v_T_30842 / 2,
                    v_e_30907,
                    v_n_30908,
                    v_r_30909,
                    v_s_30910,
                    v_a_30911,
                    v_o_30912,
                    v_l_30913,
                    v_c_30914,
                    v_u_30915 = 0;
                  var v_I_30843 = v_g_30822 / 30,
                    v_P_30844 = v_zl_28192(v_I_30843),
                    v_R_30845 = v_J_30266.ml.Gl("vertices"),
                    v_L_30846 = v_J_30266.ml.Gl("colors"),
                    v_M_30847 = v_J_30266.ml.Gl("coords");
                  let v_f_30916 = [1, 1, .125],
                    v___30917 = [1, 1, 0];
                  v_w_30821 === v_w0_27717 ? v_f_30916 = v_A0_27727[3] : v_w_30821 === v__e_27718 && (v_f_30916 = [.1098, .6, 1]), v_w_30821 === v_w0_27717 ? v___30917 = v_A0_27727[3] : v_w_30821 === v__e_27718 && (v___30917 = v_A0_27727[4]);
                  var v_E_30848 = 1 - v_Wl_28190(v_I_30843),
                    v_D_30849 = 1 - v_Wl_28190(mathMin(mathMax(v_I_30843 / .6 - .375, 0), 1));
                  if (null === v_m_30823) {
                    v_m_30823 = {
                      lines: [],
                      orbs: [],
                      stars: []
                    };
                    let v_i_30918 = 8 * mathMin(mathMax(v_v_30820, 3), 14);
                    for (let v_t_30919 = 0; v_t_30919 < v_i_30918; ++v_t_30919) v_e_30907 = mathRandom() * v_T_30842, 7 === v_h_30818 ? v_m_30823.lines.push({
                      t: 10 * mathRandom() / 30 + 4 / 30,
                      x: v_e_30907,
                      sy: -.25 * mathRandom() * 466,
                      my: .5 * mathRandom() * 466,
                      mh: .375 * mathRandom() * 466,
                      w: 1.5 * mathRandom() + 1
                    }) : v_m_30823.lines.push({
                      t: 10 * mathRandom() / 30 + 8 / 30,
                      x: v_e_30907,
                      sy: -.375 * mathRandom() * 466,
                      my: 466 * (.25 * mathRandom() + .125),
                      mh: 466 * (.25 * mathRandom() + .25),
                      w: 1.5 * mathRandom() + 1
                    }), v_m_30823.orbs.push({
                      x: v_e_30907,
                      y: 466 * mathRandom() * .46875
                    });
                    v_i_30918 = 3 * v_v_30820;
                    for (let v_t_30920 = 0; v_t_30920 < v_i_30918; ++v_t_30920) v_m_30823.stars.push({
                      t: .125 * mathRandom(),
                      x: mathRandom() * v_T_30842,
                      y: 466 * mathRandom() * .125,
                      mx: 12 * mathRandom(),
                      my: 466 * (.5 * mathRandom() + .0625)
                    });
                  }
                  glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_c_30914 = v_v_30820 / 4, v_n_30908 = 7 === v_h_30818 ? v_ql_28195(v_I_30843) * v_M0_27738 * 1.6 : 466 * v_P_30844, v_R_30845[3 * v_u_30915 + 0] = v_i_30905, v_R_30845[3 * v_u_30915 + 1] = v_n_30908, v_R_30845[3 * v_u_30915 + 2] = v_O_30275(v_n_30908), v_R_30845[3 * v_u_30915 + 3] = v_t_30906, v_R_30845[3 * v_u_30915 + 4] = v_n_30908, v_R_30845[3 * v_u_30915 + 5] = v_O_30275(v_n_30908), v_R_30845[3 * v_u_30915 + 6] = v_i_30905, v_R_30845[3 * v_u_30915 + 7] = .375 * -v_n_30908, v_R_30845[3 * v_u_30915 + 8] = v_O_30275(.375 * -v_n_30908), v_R_30845[3 * v_u_30915 + 9] = v_t_30906, v_R_30845[3 * v_u_30915 + 10] = .375 * -v_n_30908, v_R_30845[3 * v_u_30915 + 11] = v_O_30275(.375 * -v_n_30908);
                  for (let v_t_30921 = 0; v_t_30921 < 4; ++v_t_30921) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30921] = v_f_30916[0] * v_D_30849, v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30921] = v_f_30916[1] * v_D_30849, v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30921] = v_f_30916[2] * v_D_30849, v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30921] = .45;
                  if (v_M_30847[2 * v_u_30915 + 0] = 0, v_M_30847[2 * v_u_30915 + 1] = 1, v_M_30847[2 * v_u_30915 + 2] = v_c_30914, v_M_30847[2 * v_u_30915 + 3] = 1, v_M_30847[2 * v_u_30915 + 4] = 0, v_M_30847[2 * v_u_30915 + 5] = 0, v_M_30847[2 * v_u_30915 + 6] = v_c_30914, (v_M_30847[2 * v_u_30915 + 7] = 0) < (v_u_30915 += 4) && (v_J_30266.ml.jl("vertices", 3 * v_u_30915), v_J_30266.ml.jl("coords", 2 * v_u_30915), v_J_30266.ml.jl("colors", 4 * v_u_30915), v_H_30265.co.bind(0), v_H_30265.uo.bind(1), v_tn_27590.uniforms({
                    tex0: 0,
                    tex1: 1,
                    w: v_c_30914,
                    xo: .25 * v_I_30843
                  }).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_u_30915 / 2 * 3), v_u_30915 = 0), 8 === v_h_30818 && .125 <= v_I_30843) {
                    v_r_30909 = 291.25, v_k_30835 = (v_I_30843 - .125) / .875, v_n_30908 = (1 - v_Zl_28196(mathMin(4 * v_I_30843, 1))) * v_r_30909 - .1875 * v_r_30909, v_l_30913 = v_k_30835 < .125 ? .625 * v_Vl_28189(v_k_30835 / .125) : .625 * (1 - v_Vl_28189(mathMin((v_k_30835 - .125) / .25, 1))), v_R_30845[3 * v_u_30915 + 0] = v_i_30905, v_R_30845[3 * v_u_30915 + 1] = v_r_30909, v_R_30845[3 * v_u_30915 + 2] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 3] = v_t_30906, v_R_30845[3 * v_u_30915 + 4] = v_r_30909, v_R_30845[3 * v_u_30915 + 5] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 6] = v_i_30905, v_R_30845[3 * v_u_30915 + 7] = v_n_30908, v_R_30845[3 * v_u_30915 + 8] = v_O_30275(v_n_30908), v_R_30845[3 * v_u_30915 + 9] = v_t_30906, v_R_30845[3 * v_u_30915 + 10] = v_n_30908, v_R_30845[3 * v_u_30915 + 11] = v_O_30275(v_n_30908);
                    for (let v_t_30922 = 0; v_t_30922 < 4; ++v_t_30922) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30922] = v_f_30916[0], v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30922] = v_f_30916[1], v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30922] = v_f_30916[2], v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30922] = v_l_30913;
                    v_M_30847[2 * v_u_30915 + 0] = 0, v_M_30847[2 * v_u_30915 + 1] = 1, v_M_30847[2 * v_u_30915 + 2] = .248046875, v_M_30847[2 * v_u_30915 + 3] = 1, v_M_30847[2 * v_u_30915 + 4] = 0, v_M_30847[2 * v_u_30915 + 5] = 0, v_M_30847[2 * v_u_30915 + 6] = .248046875, v_M_30847[2 * v_u_30915 + 7] = 0, v_u_30915 += 4;
                  }
                  for (let v_t_30923 = 0; v_t_30923 < v_m_30823.lines.length; ++v_t_30923) if (!(v_m_30823.lines[v_t_30923].t > v_I_30843)) {
                    if (v_e_30907 = v_m_30823.lines[v_t_30923].x + v_i_30905, v_o_30912 = v_m_30823.lines[v_t_30923].sy + v_m_30823.lines[v_t_30923].my * v_Kl_28193(v_I_30843), v_a_30911 = v_o_30912 + v_m_30823.lines[v_t_30923].mh * v_Kl_28193(v_I_30843) + 90, v_a_30911 = mathMax(v_a_30911, 0), v_o_30912 = mathMax(v_o_30912, 0), v_s_30910 = 7 === v_h_30818 ? (v_r_30909 = v_a_30911, v_o_30912) : (v_l_30913 *= mathMin(v_I_30843 / .25, 1), v_r_30909 = 145.625 - v_m_30823.lines[v_t_30923].sy - v_m_30823.lines[v_t_30923].my * v_P_30844, v_s_30910 = v_r_30909 - v_m_30823.lines[v_t_30923].mh * v_P_30844, v_r_30909 = mathMax(v_r_30909, 0), mathMax(v_s_30910, 0)), v_a_30911 += 10, v_R_30845[3 * v_u_30915 + 0] = v_e_30907 - 3 * v_m_30823.lines[v_t_30923].w, v_R_30845[3 * v_u_30915 + 1] = v_r_30909, v_R_30845[3 * v_u_30915 + 2] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 3] = v_e_30907 + 3 * v_m_30823.lines[v_t_30923].w, v_R_30845[3 * v_u_30915 + 4] = v_r_30909, v_R_30845[3 * v_u_30915 + 5] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 6] = v_e_30907 - 3 * v_m_30823.lines[v_t_30923].w, v_R_30845[3 * v_u_30915 + 7] = v_s_30910, v_R_30845[3 * v_u_30915 + 8] = v_O_30275(v_s_30910), v_R_30845[3 * v_u_30915 + 9] = v_e_30907 + 3 * v_m_30823.lines[v_t_30923].w, v_R_30845[3 * v_u_30915 + 10] = v_s_30910, v_R_30845[3 * v_u_30915 + 11] = v_O_30275(v_s_30910), 7 === v_h_30818) for (let v_t_30924 = 0; v_t_30924 < 4; ++v_t_30924) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30924] = v___30917[0], v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30924] = v___30917[1], v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30924] = v___30917[2], v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30924] = 1.25 * v_E_30848;else for (let v_t_30925 = 0; v_t_30925 < 4; ++v_t_30925) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30925] = v___30917[0], v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30925] = v___30917[1], v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30925] = v___30917[2], v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30925] = v_t_30925 < 2 ? .25 * v_E_30848 : 1.5 * v_E_30848;
                    v_M_30847[2 * v_u_30915 + 0] = .501953125, v_M_30847[2 * v_u_30915 + 1] = 1, v_M_30847[2 * v_u_30915 + 2] = .748046875, v_M_30847[2 * v_u_30915 + 3] = 1, v_M_30847[2 * v_u_30915 + 4] = .501953125, v_M_30847[2 * v_u_30915 + 5] = 0, v_M_30847[2 * v_u_30915 + 6] = .748046875, v_M_30847[2 * v_u_30915 + 7] = 0, v_u_30915 += 4;
                  }
                  v_a_30911 = 466 * v_P_30844 * .46875;
                  for (let v_t_30926 = 0; v_t_30926 < v_m_30823.orbs.length; ++v_t_30926) if (v_e_30907 = v_m_30823.orbs[v_t_30926].x + v_i_30905, !((v_n_30908 = v_m_30823.orbs[v_t_30926].y) > v_a_30911)) {
                    v_r_30909 = v_n_30908 + 46, v_s_30910 = v_n_30908 - 48, v_R_30845[3 * v_u_30915 + 0] = v_e_30907 - 40, v_R_30845[3 * v_u_30915 + 1] = v_r_30909, v_R_30845[3 * v_u_30915 + 2] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 3] = v_e_30907 + 40, v_R_30845[3 * v_u_30915 + 4] = v_r_30909, v_R_30845[3 * v_u_30915 + 5] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 6] = v_e_30907 - 40, v_R_30845[3 * v_u_30915 + 7] = v_s_30910, v_R_30845[3 * v_u_30915 + 8] = v_O_30275(v_s_30910), v_R_30845[3 * v_u_30915 + 9] = v_e_30907 + 40, v_R_30845[3 * v_u_30915 + 10] = v_s_30910, v_R_30845[3 * v_u_30915 + 11] = v_O_30275(v_s_30910);
                    for (let v_t_30927 = 0; v_t_30927 < 4; ++v_t_30927) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30927] = v___30917[0], v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30927] = v___30917[1], v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30927] = v___30917[2], v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30927] = .75 * v_D_30849;
                    v_M_30847[2 * v_u_30915 + 0] = .251953125, v_M_30847[2 * v_u_30915 + 1] = 1, v_M_30847[2 * v_u_30915 + 2] = .498046875, v_M_30847[2 * v_u_30915 + 3] = 1, v_M_30847[2 * v_u_30915 + 4] = .251953125, v_M_30847[2 * v_u_30915 + 5] = 0, v_M_30847[2 * v_u_30915 + 6] = .498046875, v_M_30847[2 * v_u_30915 + 7] = 0, v_u_30915 += 4;
                  }
                  if (v_I_30843 < .75 && 1 < v_g_30822) {
                    v_l_30913 = 1 - v_Wl_28190(v_I_30843 / .75);
                    for (let v_t_30928 = 0; v_t_30928 < v_m_30823.stars.length; ++v_t_30928) if (!(v_m_30823.stars[v_t_30928].t > v_I_30843)) {
                      v_e_30907 = v_m_30823.stars[v_t_30928].x + v_m_30823.stars[v_t_30928].mx * v_I_30843 + v_i_30905, v_n_30908 = v_m_30823.stars[v_t_30928].y + v_m_30823.stars[v_t_30928].my * v_I_30843, v_r_30909 = v_n_30908 + 28, v_s_30910 = v_n_30908 - 28, v_R_30845[3 * v_u_30915 + 0] = v_e_30907 - 24, v_R_30845[3 * v_u_30915 + 1] = v_r_30909, v_R_30845[3 * v_u_30915 + 2] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 3] = v_e_30907 + 24, v_R_30845[3 * v_u_30915 + 4] = v_r_30909, v_R_30845[3 * v_u_30915 + 5] = v_O_30275(v_r_30909), v_R_30845[3 * v_u_30915 + 6] = v_e_30907 - 24, v_R_30845[3 * v_u_30915 + 7] = v_s_30910, v_R_30845[3 * v_u_30915 + 8] = v_O_30275(v_s_30910), v_R_30845[3 * v_u_30915 + 9] = v_e_30907 + 24, v_R_30845[3 * v_u_30915 + 10] = v_s_30910, v_R_30845[3 * v_u_30915 + 11] = v_O_30275(v_s_30910);
                      for (let v_t_30929 = 0; v_t_30929 < 4; ++v_t_30929) v_L_30846[4 * v_u_30915 + 0 + 4 * v_t_30929] = v___30917[0], v_L_30846[4 * v_u_30915 + 1 + 4 * v_t_30929] = v___30917[1], v_L_30846[4 * v_u_30915 + 2 + 4 * v_t_30929] = v___30917[2], v_L_30846[4 * v_u_30915 + 3 + 4 * v_t_30929] = v_l_30913;
                      v_M_30847[2 * v_u_30915 + 0] = .751953125, v_M_30847[2 * v_u_30915 + 1] = 1, v_M_30847[2 * v_u_30915 + 2] = 1, v_M_30847[2 * v_u_30915 + 3] = 1, v_M_30847[2 * v_u_30915 + 4] = .751953125, v_M_30847[2 * v_u_30915 + 5] = 0, v_M_30847[2 * v_u_30915 + 6] = 1, v_M_30847[2 * v_u_30915 + 7] = 0, v_u_30915 += 4;
                    }
                  }
                  0 < v_u_30915 && (v_J_30266.ml.jl("vertices", 3 * v_u_30915), v_J_30266.ml.jl("colors", 4 * v_u_30915), v_J_30266.ml.jl("coords", 2 * v_u_30915), v_H_30265.lo.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_u_30915 / 2 * 3)), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                }
                break;
              case 10:
                if (v_g_30822 < 30) {
                  if (null === v_m_30823) {
                    v_m_30823 = {
                      objs: []
                    };
                    let v_i_30942 = 12,
                      v_e_30943 = 0;
                    for (let v_t_30944 = 0; v_t_30944 < 50; ++v_t_30944) {
                      var v_F_30850;
                      v_e_30943 += mathRandom() * mathPI * .25 + (mathRandom() * mathPI * .125 + .125), v_i_30942 <= 0 ? v_m_30823.objs.push({
                        start: mathFloor(15 * mathRandom()),
                        rad: v_e_30943,
                        length_coef: .75 * mathRandom() + .25,
                        pos_coef: 0,
                        col: mathRandom() < .75 ? [0, 1, 0] : [.75, 1, .5]
                      }) : (v_F_30850 = .5 * (.75 * mathRandom() + .25), v_m_30823.objs.push({
                        start: mathFloor(15 * mathRandom()),
                        rad: v_e_30943,
                        length_coef: v_F_30850,
                        pos_coef: -60,
                        col: mathRandom() < .75 ? [0, 1, 0] : [.75, 1, .5]
                      }), --v_i_30942);
                    }
                  }
                  let v_e_30930 = v_J_30266.ml.Gl("vertices"),
                    v_n_30931 = v_J_30266.ml.Gl("colors"),
                    v_t_30932 = v_J_30266.ml.Gl("coords"),
                    v_r_30933 = v_E0_27739 * v_i_30824 / 16,
                    v_s_30934 = 0,
                    v_a_30935,
                    v_o_30936,
                    v_l_30937,
                    v_c_30938,
                    v_u_30939,
                    v_f_30940 = v_g_30822 / 30,
                    v___30941 = 1 - v_f_30940;
                  v_De_28096(v_m_30823.objs, function (v_i_30945) {
                    v_c_30938 = mathCos(v_i_30945.rad), v_u_30939 = mathSin(v_i_30945.rad), v_o_30936 = 140 * v_Vl_28189(v_f_30940) * v_i_30945.length_coef + v_i_30945.pos_coef, v_l_30937 = mathMax(260 * v_Wl_28190(mathMin(1.75 * v_f_30940 + .25, 1)) * v_i_30945.length_coef, v_o_30936), v_a_30935 = [v_no_28093(v_o_30936, 20, v_c_30938, v_u_30939), v_no_28093(v_l_30937, 20, v_c_30938, v_u_30939), v_no_28093(v_o_30936, -20, v_c_30938, v_u_30939), v_no_28093(v_l_30937, -20, v_c_30938, v_u_30939)];
                    for (let v_t_30946 = 0; v_t_30946 < 4; ++v_t_30946) v_e_30930[3 * (v_s_30934 + v_t_30946) + 0] = v_a_30935[v_t_30946][0] + v_d_30819, v_e_30930[3 * (v_s_30934 + v_t_30946) + 1] = v_a_30935[v_t_30946][1] + v_r_30933, v_e_30930[3 * (v_s_30934 + v_t_30946) + 2] = v_j_30274(v_e_30930[3 * (v_s_30934 + v_t_30946) + 1]) + 2;
                    for (let v_t_30947 = 0; v_t_30947 < 4; ++v_t_30947) v_n_30931[4 * v_s_30934 + 0 + 4 * v_t_30947] = v_i_30945.col[0], v_n_30931[4 * v_s_30934 + 1 + 4 * v_t_30947] = v_i_30945.col[1], v_n_30931[4 * v_s_30934 + 2 + 4 * v_t_30947] = v_i_30945.col[2], v_n_30931[4 * v_s_30934 + 3 + 4 * v_t_30947] = v___30941;
                    v_t_30932[2 * v_s_30934 + 0] = 1, v_t_30932[2 * v_s_30934 + 1] = 1, v_t_30932[2 * v_s_30934 + 2] = 1, v_t_30932[2 * v_s_30934 + 3] = 0, v_t_30932[2 * v_s_30934 + 4] = 0, v_t_30932[2 * v_s_30934 + 5] = 1, v_t_30932[2 * v_s_30934 + 6] = 0, v_t_30932[2 * v_s_30934 + 7] = 0, v_s_30934 += 4;
                  }), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), 0 < v_s_30934 && (v_J_30266.ml.jl("vertices", 3 * v_s_30934), v_J_30266.ml.jl("colors", 4 * v_s_30934), v_J_30266.ml.jl("coords", 2 * v_s_30934), v_H_30265.So.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_s_30934 / 2 * 3)), glContext.pushMatrix(), v_H_30265.gL.bind(0), glContext.translate(v_d_30819, v_r_30933 - v_M0_27738, v_j_30274(v_r_30933 - v_M0_27738)), v_pn_27630.col[0] = .5, v_pn_27630.col[1] = .87, v_pn_27630.col[2] = .4, v_pn_27630.col[3] = 1 - v_Wl_28190(v_g_30822 / 30), v_Ke_27583.uniforms(v_pn_27630).draw(v_J_30266.So), glContext.popMatrix(), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                }
              case 9:
                if (v_g_30822 < 30) {
                  var v_k_30835 = v_E0_27739 * v_i_30824 / 16 - v_M0_27738,
                    v_e_30851 = v_ql_28195(v_g_30822 / 30);
                  let v_t_30948;
                  if (v_t_30948 = v_g_30822 < 6 ? .75 * v_Wl_28190(v_g_30822 / 5) : .75 * v_Yl_28194((30 - v_g_30822) / 25), glContext.pushMatrix(), v_H_30265.mo.bind(0), glContext.translate(v_d_30819, v_M0_27738 + v_k_30835, v_D0_27740 + v_j_30274(v_k_30835)), glContext.scale(v_v_30820 / 4 * (8 < v_v_30820 ? .75 : .875) * v_e_30851, 1, .625 * v_e_30851), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_gn_27628.opacity = v_t_30948, v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.qo), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix(), v_g_30822 < 11) {
                    let v_t_30949 = 1;
                    v_t_30949 = v_g_30822 < 6 ? .25 * v_Wl_28190(v_g_30822 / 5) : .25 * v_Yl_28194((10 - v_g_30822) / 5), glContext.pushMatrix(), v_H_30265.oo.bind(0), glContext.translate(v_d_30819, v_k_30835, v_j_30274(v_k_30835)), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_mn_27629.opacity = v_t_30949, v_Xe_27581.uniforms(v_mn_27629).draw(v_J_30266.il), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix();
                  }
                }
                if (!(v_g_30822 < 60)) return !0;
                glContext.pushMatrix(), v_H_30265.Io.bind(0), glContext.translate(v_d_30819, 0, -v_g_30822 / 45 * v_ve_27731), v_Ve_27579.uniforms(v_vn_27625).draw(v_J_30266.Io), glContext.popMatrix();
                break;
              case 11:
                if (!(v_g_30822 < 30)) return !0;
                v_s_30855((v_m_30823 = null === v_m_30823 ? {
                  particles: v_r_30854()
                } : v_m_30823).particles, v_d_30819, v_w_30821, v_g_30822, v_M0_27738 * v_i_30824 / 8);
                break;
              case 13:
                if (!(v_g_30822 < 15)) return !0;
                var v_t_30852,
                  v_n_30853,
                  v_e_30851 = v_E0_27739 * v_i_30824 / 16 * .75,
                  v_k_30835 = (null === v_m_30823 && (v_m_30823 = {
                    crush_rotate_offset: 40 * mathRandom(),
                    crush_offset_x: 80 * mathRandom() - 40,
                    crush_offset_y: 80 * mathRandom() + 40
                  }), mathFloor(2.66667 * v_g_30822)),
                  v_k_30835 = (glContext.pushMatrix(), v_H_30265.yo.bind(0), glContext.translate(v_d_30819, v_e_30851 - 200, v_j_30274(v_e_30851 - 200) - 500), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_Oe_27576.uniforms({
                    texture: 0,
                    u1: v_k_30835 % 8 / 8 + .001,
                    v1: 1 - mathFloor(v_k_30835 / 8) / 5 - .001,
                    u2: (v_k_30835 % 8 + 1) / 8 - .001,
                    v2: 1 - mathFloor(v_k_30835 / 8 + 1) / 5 + .001
                  }).draw(v_J_30266.So), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix(), v_H_30265.Co.bind(0), v_g_30822 / 15);
                v_gn_27628.opacity = .75 * (1 - v_Vl_28189(v_k_30835)), glContext.pushMatrix(), v_t_30852 = v_d_30819 - 150 * v_Wl_28190(v_k_30835) - v_m_30823.crush_offset_x, v_n_30853 = v_e_30851 + 500 * v_Wl_28190(v_k_30835) + v_m_30823.crush_offset_y, glContext.translate(v_t_30852, v_n_30853, v_j_30274(v_n_30853)), glContext.rotate(10 * -v_g_30822 - 40 - v_m_30823.crush_rotate_offset, 0, 0, 1), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.nl), glContext.popMatrix(), glContext.pushMatrix(), v_t_30852 = v_d_30819 + 150 * v_Wl_28190(v_k_30835) + v_m_30823.crush_offset_x, v_n_30853 = v_e_30851 + 500 * v_Wl_28190(v_k_30835) + v_m_30823.crush_offset_y, glContext.translate(v_t_30852, v_n_30853, v_j_30274(v_n_30853)), glContext.rotate(40 + 10 * v_g_30822 + v_m_30823.crush_rotate_offset, 0, 0, 1), glContext.scale(-1, 1, 1), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.nl), glContext.popMatrix(), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), glContext.pushMatrix(), v_t_30852 = v_d_30819 + v_m_30823.crush_offset_x + 60, v_n_30853 = v_e_30851 + 500 * v_k_30835 + v_m_30823.crush_offset_y, glContext.translate(v_t_30852, v_n_30853, v_j_30274(v_n_30853)), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.rl), glContext.popMatrix(), glContext.pushMatrix(), v_t_30852 = v_d_30819 - v_m_30823.crush_offset_x - 60, v_n_30853 = v_e_30851 + 500 * v_k_30835 + v_m_30823.crush_offset_y, glContext.translate(v_t_30852, v_n_30853, v_j_30274(v_n_30853)), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.rl), glContext.popMatrix(), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                break;
              case 5:
                if (!(v_g_30822 < 60)) return !0;
                v_e_30851 = mathFloor(v_g_30822 % 30);
                if (glContext.pushMatrix(), glContext.translate(v_d_30819, 0, 0), glContext.scale(1.25, 1, .85), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.fo.bind(0), v_Oe_27576.uniforms({
                  texture: 0,
                  u1: v_e_30851 % 6 / 6 + .001,
                  v1: 1 - mathFloor(v_e_30851 / 6) / 5 - .001,
                  u2: (v_e_30851 % 6 + 1) / 6 - .001,
                  v2: 1 - mathFloor(v_e_30851 / 6 + 1) / 5 + .001
                }).draw(v_J_30266.qo), glContext.popMatrix(), v_mn_27629.opacity = v_g_30822 < 6 ? v_Yl_28194(v_g_30822 / 6) : 1 - v_Wl_28190((v_g_30822 - 6) / 54), glContext.pushMatrix(), glContext.translate(v_d_30819, 0, 0), v_H_30265.oo.bind(0), v_Xe_27581.uniforms(v_mn_27629).draw(v_J_30266.tl), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix(), 59 === v_g_30822) return !0;
                break;
              case 12:
                if (!(v_g_30822 < 30)) return !0;
                glContext.pushMatrix(), v_H_30265.bo.bind(0), glContext.translate(v_d_30819, -20, 0), glContext.scale(1.625, 1, 1), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_Oe_27576.uniforms({
                  texture: 0,
                  u1: mathFloor(v_g_30822) % 15 / 15 + .00048828125,
                  v1: 1 - mathFloor(v_g_30822 / 15) / 2 + .00048828125,
                  u2: (mathFloor(v_g_30822) % 15 + 1) / 15 - .00048828125,
                  v2: 1 - mathFloor(v_g_30822 / 15 + 1) / 2 - .00048828125
                }).draw(v_J_30266.po), glContext.popMatrix(), v_g_30822 < 15 && (v_mn_27629.opacity = v_g_30822 < 3 ? v_g_30822 / 3 * .5 : .5 * (1 - (v_g_30822 - 3) / 12), glContext.pushMatrix(), v_H_30265.oo.bind(0), glContext.translate(v_d_30819, 0, 0), v_Xe_27581.uniforms(v_mn_27629).draw(v_J_30266.Qo), glContext.popMatrix()), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                break;
              default:
                return !0;
            }
            function v_r_30854() {
              var v_i_30950 = [];
              for (let v_t_30951 = 0; v_t_30951 < 40; ++v_t_30951) v_i_30950.push({
                x: 130 * mathRandom() - 65,
                y: 210 * mathRandom() + 90,
                size: v_t_30951 < 15 ? 0 : v_t_30951 < 25 ? 1 : 2,
                mx: 20 * mathRandom() - 10,
                ease: mathFloor(3 * mathRandom()),
                qI: (.25 * mathRandom() + .25) * mathPI
              });
              return v_i_30950;
            }
            function v_s_30957(v_i_30952, v_e_30953, v_t_30954, v_n_30955, v_r_30956) {
              let v_s_30957, v_a_30958, v_o_30959, v_l_30960, v_c_30961;
              var v_u_30962 = v_n_30955 / 30,
                v_f_30963 = v_J_30266.ml.Gl("vertices"),
                v___30964 = v_J_30266.ml.Gl("colors"),
                v_h_30965 = v_J_30266.ml.Gl("coords");
              let v_d_30966 = 0,
                v_v_30967 = [1, 1, 1];
              v_t_30954 === v_w0_27717 ? v_v_30967 = v_A0_27727[3] : v_t_30954 === v__e_27718 && (v_v_30967 = v_A0_27727[4]);
              var v_w_30968, v_g_30969, v_m_30970;
              for (let v_t_30971 = 0; v_t_30971 < v_i_30952.length; ++v_t_30971) {
                v_s_30957 = v_e_30953 + v_i_30952[v_t_30971].x + v_Yl_28194(v_u_30962) * v_i_30952[v_t_30971].mx, v_a_30958 = v_l1_27835[v_i_30952[v_t_30971].ease](v_u_30962) * v_i_30952[v_t_30971].y + v_r_30956, v_g_30969 = mathCos(v_i_30952[v_t_30971].qI), v_m_30970 = mathSin(v_i_30952[v_t_30971].qI), v_l_30960 = v_o_30959 = 0 === v_i_30952[v_t_30971].size ? 4 : 1 === v_i_30952[v_t_30971].size ? 7 : 12, v_c_30961 = 1.25 * (1 - v_Yl_28194(v_u_30962)), v_w_30968 = [v_no_28093(-v_o_30959, -v_l_30960, v_g_30969, v_m_30970), v_no_28093(v_o_30959, -v_l_30960, v_g_30969, v_m_30970), v_no_28093(-v_o_30959, v_l_30960, v_g_30969, v_m_30970), v_no_28093(v_o_30959, v_l_30960, v_g_30969, v_m_30970)];
                for (let v_t_30972 = 0; v_t_30972 < 4; ++v_t_30972) v_f_30963[3 * (v_d_30966 + v_t_30972) + 0] = v_w_30968[v_t_30972][0] + v_s_30957, v_f_30963[3 * (v_d_30966 + v_t_30972) + 1] = v_w_30968[v_t_30972][1] + v_a_30958, v_f_30963[3 * (v_d_30966 + v_t_30972) + 2] = v_j_30274(v_f_30963[3 * (v_d_30966 + v_t_30972) + 1]) + 8;
                for (let v_t_30973 = 0; v_t_30973 < 4; ++v_t_30973) v___30964[4 * v_d_30966 + 0 + 4 * v_t_30973] = v_v_30967[0], v___30964[4 * v_d_30966 + 1 + 4 * v_t_30973] = v_v_30967[1], v___30964[4 * v_d_30966 + 2 + 4 * v_t_30973] = v_v_30967[2], v___30964[4 * v_d_30966 + 3 + 4 * v_t_30973] = v_c_30961;
                v_h_30965[2 * v_d_30966 + 0] = 0, v_h_30965[2 * v_d_30966 + 1] = 1, v_h_30965[2 * v_d_30966 + 2] = 1, v_h_30965[2 * v_d_30966 + 3] = 1, v_h_30965[2 * v_d_30966 + 4] = 0, v_h_30965[2 * v_d_30966 + 5] = 0, v_h_30965[2 * v_d_30966 + 6] = 1, v_h_30965[2 * v_d_30966 + 7] = 0, v_d_30966 += 4;
              }
              0 < v_d_30966 && (v_J_30266.ml.jl("vertices", 3 * v_d_30966), v_J_30266.ml.jl("colors", 4 * v_d_30966), v_J_30266.ml.jl("coords", 2 * v_d_30966), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.To.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_d_30966 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
            }
            function v_G_30856(v_r_30974, v_s_30975) {
              glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE);
              var v_t_30976 = v_ql_28195(v_r_30974 / 30);
              v_gn_27628.opacity = v_r_30974 < 4 ? v_r_30974 / 4 : 1 - (v_r_30974 - 4) / 26, glContext.pushMatrix(), v_H_30265.vo.bind(0), glContext.translate(v_s_30975, 0, 0), glContext.scale(1.25 * v_t_30976, 1, .875 * v_t_30976), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.vo), glContext.popMatrix();
              {
                let v_t_30977,
                  v_i_30978,
                  v_e_30979,
                  v_n_30980 = [1, 1, 1];
                v_w_30821 === v_w0_27717 ? v_n_30980 = v_A0_27727[3] : v_w_30821 === v__e_27718 && (v_n_30980 = v_A0_27727[4]), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265._o.bind(0), glContext.pushMatrix(), v_i_30978 = .6 * v_zl_28192(v_t_30977 = mathMin(v_r_30974 / 26, 1)) + .5, v_e_30979 = v_r_30974 < .4 ? 1 : 1 - v_zl_28192((v_t_30977 - .4) / .6), glContext.translate(v_s_30975, 0, 0), glContext.scale(v_i_30978, v_i_30978, .65 * v_i_30978), glContext.rotate(120 * v_t_30977, 0, 1, 0), v_un_27600.uniforms({
                  texture: 0,
                  r: v_n_30980[0],
                  g: v_n_30980[1],
                  b: v_n_30980[2],
                  a: v_e_30979,
                  t: v_Wl_28190(v_t_30977)
                }).draw(v_J_30266._o), glContext.popMatrix(), glContext.pushMatrix(), v_H_30265.ho.bind(0), glContext.translate(v_s_30975, 4, 0), v_i_30978 = .6 * v_zl_28192(v_t_30977) + .5, glContext.scale(.5 * v_i_30978, 1, .75 * v_i_30978), v_ze_27582.uniforms({
                  texture: 0,
                  r: v_n_30980[0],
                  g: v_n_30980[1],
                  b: v_n_30980[2],
                  a: 1.5 * v_e_30979
                }).draw(v_J_30266.vo), glContext.popMatrix(), v_e_30979 = v_r_30974 < .4 ? 1 : 1 - v_zl_28192((v_r_30974 / 30 - .4) / .6), glContext.pushMatrix(), v_H_30265.do.bind(0), glContext.translate(v_s_30975, 0, 0), glContext.scale(.875, 1, 1.25), v_gn_27628.opacity = 2 * v_e_30979, v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.vo), glContext.popMatrix(), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
              }
              v_r_30974 < 12 && (glContext.pushMatrix(), v_H_30265.wo.bind(0), glContext.translate(v_s_30975, 0, 0), v_t_30976 = v_ql_28195(mathMin(v_r_30974 / 4, 1)), glContext.scale(v_t_30976, v_t_30976, v_t_30976), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_gn_27628.opacity = 1 - v_Yl_28194(v_r_30974 / 12), v_Ye_27584.uniforms(v_gn_27628).draw(v_J_30266.el), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.popMatrix()), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
            }
            return glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), v_m_30823;
          },
          gc: function (v___30981, v_h_30982, v_d_30983) {
            switch (v___30981) {
              case v_In_27664:
              case v_Mn_27668:
                if (!(v_d_30983 < 30)) return !0;
                {
                  if (null === v_h_30982) {
                    v_h_30982 = {
                      objs: []
                    };
                    let v_i_30997,
                      v_e_30998 = [],
                      v_n_30999,
                      v_r_31000 = [20, 20];
                    for (let v_t_31001 = 0; v_t_31001 < 220; ++v_t_31001) {
                      v_n_30999 = v_t_31001 < 110, 0 < v_r_31000[v_n_30999 ? 0 : 1] ? (v_i_30997 = mathRandom(), v_e_30998 = v_i_30997 < .125 ? [.5, .875, 1] : v_i_30997 < .25 ? [1, .5, .875] : v_i_30997 < .5 ? [.25, 1, .25] : v_i_30997 < .75 ? [0, 0, 1] : [1, .25, 1], v_r_31000[v_n_30999 ? 0 : 1]--) : v_e_30998 = [1, 1, 1];
                      var v_v_30984 = mathFloor(200 * mathRandom());
                      v_h_30982.objs.push({
                        start: mathFloor(18 * mathRandom()),
                        y_coef: mathFloor(100 * mathRandom()),
                        h_coef: mathFloor(200 * mathRandom()) + 700,
                        x: v_n_30999 ? -532 - v_v_30984 : 532 + v_v_30984,
                        y: mathFloor(200 * mathRandom()) + (v___30981 === v_Mn_27668 ? -v_v_30984 / 2 : v_v_30984 / 2),
                        z: 150 - mathFloor(1920 * mathRandom()),
                        left_side: v_n_30999,
                        color: v_e_30998
                      });
                    }
                  }
                  let v_t_30986 = v_J_30266.ml.Gl("vertices"),
                    v_e_30987 = v_J_30266.ml.Gl("colors"),
                    v_n_30988 = v_J_30266.ml.Gl("coords"),
                    v_r_30989 = 0,
                    v_s_30990,
                    v_a_30991,
                    v_o_30992,
                    v_l_30993,
                    v_c_30994,
                    v_u_30995,
                    v_f_30996;
                  v_De_28096(v_h_30982.objs, function (v_i_31002) {
                    if (!(v_d_30983 < v_i_31002.start || v_d_30983 >= v_i_31002.start + 15)) {
                      v_f_30996 = (v_d_30983 - v_i_31002.start) / 15, v_l_30993 = 1 - v_Vl_28189(v_f_30996), v_u_30995 = v___30981 === v_Mn_27668 ? (v_o_30992 = 450 - (v_i_31002.y_coef * v_Yl_28194(v_f_30996) + v_i_31002.y), v_a_30991 = v_o_30992 - v_i_31002.h_coef * v_f_30996, v_s_30990 = v_i_31002.left_side ? v_i_31002.x - 60 * (1 - v_f_30996) - 200 : v_i_31002.x + 60 * (1 - v_f_30996) + 200, .9375 * (v_c_30994 = v_l_30993)) : (v_a_30991 = v_i_31002.y_coef * v_Yl_28194(v_f_30996) + v_i_31002.y - 110, v_o_30992 = v_a_30991 + v_i_31002.h_coef * v_f_30996, v_s_30990 = v_i_31002.left_side ? v_i_31002.x - 80 * v_f_30996 - 50 : v_i_31002.x + 80 * v_f_30996 + 50, v_c_30994 = .9375 * v_l_30993, v_l_30993), v_t_30986[3 * v_r_30989 + 0] = v_s_30990 - 34, v_t_30986[3 * v_r_30989 + 1] = v_o_30992, v_t_30986[3 * v_r_30989 + 2] = v_O_30275(v_o_30992) + v_i_31002.z, v_t_30986[3 * v_r_30989 + 3] = v_s_30990 + 34, v_t_30986[3 * v_r_30989 + 4] = v_o_30992, v_t_30986[3 * v_r_30989 + 5] = v_O_30275(v_o_30992) + v_i_31002.z, v_t_30986[3 * v_r_30989 + 6] = v_s_30990 - 34, v_t_30986[3 * v_r_30989 + 7] = v_a_30991, v_t_30986[3 * v_r_30989 + 8] = v_O_30275(v_a_30991) + v_i_31002.z, v_t_30986[3 * v_r_30989 + 9] = v_s_30990 + 34, v_t_30986[3 * v_r_30989 + 10] = v_a_30991, v_t_30986[3 * v_r_30989 + 11] = v_O_30275(v_a_30991) + v_i_31002.z;
                      for (let v_t_31003 = 0; v_t_31003 < 4; ++v_t_31003) v_e_30987[4 * v_r_30989 + 0 + 4 * v_t_31003] = v_i_31002.color[0], v_e_30987[4 * v_r_30989 + 1 + 4 * v_t_31003] = v_i_31002.color[1], v_e_30987[4 * v_r_30989 + 2 + 4 * v_t_31003] = v_i_31002.color[2], v_e_30987[4 * v_r_30989 + 3 + 4 * v_t_31003] = v_t_31003 < 2 ? v_c_30994 : v_u_30995;
                      v_n_30988[2 * v_r_30989 + 0] = 0, v_n_30988[2 * v_r_30989 + 1] = 0, v_n_30988[2 * v_r_30989 + 2] = 1, v_n_30988[2 * v_r_30989 + 3] = 0, v_n_30988[2 * v_r_30989 + 4] = 0, v_n_30988[2 * v_r_30989 + 5] = 1, v_n_30988[2 * v_r_30989 + 6] = 1, v_n_30988[2 * v_r_30989 + 7] = 1, v_r_30989 += 4;
                    }
                  }), 0 < v_r_30989 && (v_J_30266.ml.jl("vertices", 3 * v_r_30989), v_J_30266.ml.jl("colors", 4 * v_r_30989), v_J_30266.ml.jl("coords", 2 * v_r_30989), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Do.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_r_30989 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
                }
                break;
              case v_Ln_27667:
                if (!(v_d_30983 < 30)) return !0;
                {
                  if (null === v_h_30982) {
                    v_h_30982 = {
                      objs: []
                    };
                    let v_i_31015,
                      v_e_31016,
                      v_n_31017 = [],
                      v_r_31018 = 150;
                    for (let v_t_31019 = 0; v_t_31019 < 400; ++v_t_31019) 0 < v_r_31018 ? (v_i_31015 = mathRandom(), v_n_31017 = v_i_31015 < .125 ? [.5, .875, 1] : v_i_31015 < .25 ? [1, .5, .875] : v_i_31015 < .5 ? [.25, 1, .25] : v_i_31015 < .75 ? [0, 0, 1] : [1, .25, 1], v_r_31018--) : v_n_31017 = [1, 1, 1], v_i_31015 = mathRandom(), v_e_31016 = v_i_31015 < .5 ? 2 * v_i_31015 * mathPI * .5833333 - .25 * mathPI : 2 * (v_i_31015 - .5) * mathPI * .5833333 + .6666667 * mathPI, v_h_30982.objs.push({
                      start: mathFloor(15 * mathRandom()),
                      rad: v_e_31016,
                      pos: 1 - .5 * mathRandom(),
                      length_coef: 1e3 * mathRandom() + 250,
                      pos_coef: .25 * mathRandom(),
                      color: v_n_31017
                    });
                  }
                  let v_e_31004 = v_J_30266.ml.Gl("vertices"),
                    v_n_31005 = v_J_30266.ml.Gl("colors"),
                    v_t_31006 = v_J_30266.ml.Gl("coords"),
                    v_r_31007 = 0,
                    v_s_31008,
                    v_a_31009,
                    v_o_31010,
                    v_l_31011,
                    v_c_31012,
                    v_u_31013,
                    v_f_31014;
                  v_De_28096(v_h_30982.objs, function (v_i_31020) {
                    if (!(v_d_30983 < v_i_31020.start || v_d_30983 >= v_i_31020.start + 15)) {
                      v_f_31014 = (v_d_30983 - v_i_31020.start) / 15, v_a_31009 = mathMin(v_Ee_28084(2, .25, v_f_31014), 1), v_c_31012 = mathCos(v_i_31020.rad), v_u_31013 = mathSin(v_i_31020.rad), v_l_31011 = 2200 * (v_i_31020.pos - v_zl_28192(v_f_31014) * v_i_31020.pos_coef), v_o_31010 = v_l_31011 - v_zl_28192(v_f_31014) * v_i_31020.length_coef, v_s_31008 = [v_no_28093(v_o_31010, 40, v_c_31012, v_u_31013), v_no_28093(v_l_31011, 40, v_c_31012, v_u_31013), v_no_28093(v_o_31010, -40, v_c_31012, v_u_31013), v_no_28093(v_l_31011, -40, v_c_31012, v_u_31013)];
                      for (let v_t_31021 = 0; v_t_31021 < 4; ++v_t_31021) v_e_31004[3 * (v_r_31007 + v_t_31021) + 0] = v_s_31008[v_t_31021][0], v_e_31004[3 * (v_r_31007 + v_t_31021) + 1] = v_s_31008[v_t_31021][1], v_e_31004[3 * (v_r_31007 + v_t_31021) + 2] = v_j_30274(v_s_31008[v_t_31021][1]) - 1280;
                      for (let v_t_31022 = 0; v_t_31022 < 4; ++v_t_31022) v_n_31005[4 * v_r_31007 + 0 + 4 * v_t_31022] = v_i_31020.color[0], v_n_31005[4 * v_r_31007 + 1 + 4 * v_t_31022] = v_i_31020.color[1], v_n_31005[4 * v_r_31007 + 2 + 4 * v_t_31022] = v_i_31020.color[2], v_n_31005[4 * v_r_31007 + 3 + 4 * v_t_31022] = v_a_31009;
                      v_t_31006[2 * v_r_31007 + 0] = 1, v_t_31006[2 * v_r_31007 + 1] = 1, v_t_31006[2 * v_r_31007 + 2] = 1, v_t_31006[2 * v_r_31007 + 3] = 0, v_t_31006[2 * v_r_31007 + 4] = 0, v_t_31006[2 * v_r_31007 + 5] = 1, v_t_31006[2 * v_r_31007 + 6] = 0, v_t_31006[2 * v_r_31007 + 7] = 0, v_r_31007 += 4;
                    }
                  }), 0 < v_r_31007 && (v_J_30266.ml.jl("vertices", 3 * v_r_31007), v_J_30266.ml.jl("colors", 4 * v_r_31007), v_J_30266.ml.jl("coords", 2 * v_r_31007), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Do.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_r_31007 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
                }
                break;
              case v_En_27669:
              case v_Dn_27670:
                if (!(v_d_30983 < 30)) return !0;
                var v_u_30985 = v_d_30983 / 30;
                null === v_h_30982 && (v_h_30982 = {
                  num: mathFloor(6 * mathRandom()),
                  z: -300 * mathRandom()
                }), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Do.bind(0), v_qe_27585.uniforms({
                  texture: 0,
                  opacity: 1 - v_Yl_28194(v_u_30985),
                  rotate2: (v___30981 === v_Dn_27670 ? -3.14159 : 3.14159) * v_u_30985,
                  transY: 190,
                  transZ: 1400 * -v_o1_27834(v_u_30985) + v_h_30982.z
                }).draw((v___30981 === v_Dn_27670 ? v_J_30266._l : v_J_30266.fl)[v_h_30982.num]), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                break;
              case v_Fn_27671:
              case v_Bn_27672:
              case v_Nn_27673:
                if (!(v_d_30983 < 30)) return !0;
                {
                  if (null === v_h_30982) {
                    v_h_30982 = {
                      objs: []
                    };
                    let v_i_31033,
                      v_e_31034 = [],
                      v_n_31035,
                      v_r_31036 = [20, 20];
                    for (let v_t_31037 = 0; v_t_31037 < 170; ++v_t_31037) v_n_31035 = v_t_31037 < 85, 0 < v_r_31036[v_n_31035 ? 0 : 1] ? (v_i_31033 = mathRandom(), v_e_31034 = v_i_31033 < .125 ? [.5, .875, 1] : v_i_31033 < .25 ? [1, .5, .875] : v_i_31033 < .5 ? [.25, 1, .25] : v_i_31033 < .75 ? [0, 0, 1] : [1, .25, 1], v_r_31036[v_n_31035 ? 0 : 1]--) : v_e_31034 = [1, 1, 1], v_h_30982.objs.push({
                      start: mathFloor(10 * mathRandom()),
                      y_coef: mathFloor(100 * mathRandom()),
                      h_coef: mathFloor(600 * mathRandom()) + 1800,
                      x: v_n_31035 ? -1712 - mathFloor(400 * mathRandom()) : v_we_27734 + mathFloor(400 * mathRandom()) - 350,
                      y: mathFloor(300 * mathRandom()) + 100,
                      z: -mathFloor(3840 * mathRandom()),
                      left_side: v_n_31035,
                      color: v_e_31034
                    });
                  }
                  let v_t_31023 = v_J_30266.ml.Gl("vertices"),
                    v_e_31024 = v_J_30266.ml.Gl("colors"),
                    v_n_31025 = v_J_30266.ml.Gl("coords"),
                    v_r_31026 = 0,
                    v_s_31027,
                    v_a_31028,
                    v_o_31029,
                    v_l_31030,
                    v_c_31031,
                    v_u_31032;
                  v_De_28096(v_h_30982.objs, function (v_i_31038) {
                    if (!(v_d_30983 < v_i_31038.start || v_d_30983 >= v_i_31038.start + 20)) {
                      if (v_u_31032 = (v_d_30983 - v_i_31038.start) / 20, v_o_31029 = mathMin(v_Ee_28084(2, .25, v_u_31032), 1), v___30981 === v_Fn_27671 || v___30981 === v_Nn_27673 && v_i_31038.left_side) v_s_31027 = -v_i_31038.y_coef * v_u_31032 + v_i_31038.y + 1200, v_a_31028 = v_s_31027 + -v_i_31038.h_coef * v_u_31032;else {
                        if (v___30981 !== v_Bn_27672 && (v___30981 !== v_Nn_27673 || v_i_31038.left_side)) return;
                        v_s_31027 = v_i_31038.y_coef * v_u_31032 + v_i_31038.y - 200, v_a_31028 = v_s_31027 + v_i_31038.h_coef * v_u_31032;
                      }
                      v_l_31030 = .5 * v_o_31029, v_c_31031 = v_o_31029, v_t_31023[3 * v_r_31026 + 0] = v_a_31028 + v_i_31038.x, v_t_31023[3 * v_r_31026 + 1] = -45, v_t_31023[3 * v_r_31026 + 2] = v_i_31038.z, v_t_31023[3 * v_r_31026 + 3] = v_s_31027 + v_i_31038.x, v_t_31023[3 * v_r_31026 + 4] = -45, v_t_31023[3 * v_r_31026 + 5] = v_i_31038.z, v_t_31023[3 * v_r_31026 + 6] = v_a_31028 + v_i_31038.x, v_t_31023[3 * v_r_31026 + 7] = 45, v_t_31023[3 * v_r_31026 + 8] = v_i_31038.z, v_t_31023[3 * v_r_31026 + 9] = v_s_31027 + v_i_31038.x, v_t_31023[3 * v_r_31026 + 10] = 45, v_t_31023[3 * v_r_31026 + 11] = v_i_31038.z;
                      for (let v_t_31039 = 0; v_t_31039 < 4; ++v_t_31039) v_e_31024[4 * v_r_31026 + 0 + 4 * v_t_31039] = v_i_31038.color[0], v_e_31024[4 * v_r_31026 + 1 + 4 * v_t_31039] = v_i_31038.color[1], v_e_31024[4 * v_r_31026 + 2 + 4 * v_t_31039] = v_i_31038.color[2], v_e_31024[4 * v_r_31026 + 3 + 4 * v_t_31039] = v_t_31039 < 2 ? v_l_31030 : v_c_31031;
                      v_n_31025[2 * v_r_31026 + 0] = 1, v_n_31025[2 * v_r_31026 + 1] = 1, v_n_31025[2 * v_r_31026 + 2] = 1, v_n_31025[2 * v_r_31026 + 3] = 0, v_n_31025[2 * v_r_31026 + 4] = 0, v_n_31025[2 * v_r_31026 + 5] = 1, v_n_31025[2 * v_r_31026 + 6] = 0, v_n_31025[2 * v_r_31026 + 7] = 0, v_r_31026 += 4;
                    }
                  }), 0 < v_r_31026 && (v_J_30266.ml.jl("vertices", 3 * v_r_31026), v_J_30266.ml.jl("colors", 4 * v_r_31026), v_J_30266.ml.jl("coords", 2 * v_r_31026), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), v_H_30265.Do.bind(0), v_We_27580.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_r_31026 / 2 * 3), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA));
                }
                break;
              case v_Rn_27666:
                if (!(v_d_30983 < 15)) return !0;
                {
                  if (null === v_h_30982) {
                    v_h_30982 = {
                      frames: []
                    };
                    let v_e_31050, v_n_31051;
                    for (let v_i_31052 = 0; v_i_31052 < 15; ++v_i_31052) {
                      v_h_30982.frames.push([]);
                      for (let v_t_31053 = 0; v_t_31053 < 2; ++v_t_31053) v_e_31050 = mathRandom(), v_n_31051 = v_e_31050 < .5 ? 2 * v_e_31050 * mathPI * .5833333 - .25 * mathPI : 2 * (v_e_31050 - .5) * mathPI * .5833333 + .6666667 * mathPI, v_h_30982.frames[v_i_31052].push({
                        rad: v_n_31051,
                        i: mathRound(4 * mathRandom()),
                        long: .375 < mathRandom()
                      });
                    }
                  }
                  let v_i_31040 = v_J_30266.ml.Gl("vertices"),
                    v_e_31041 = v_J_30266.ml.Gl("coords"),
                    v_n_31042 = 0,
                    v_r_31043,
                    v_s_31044,
                    v_a_31045,
                    v_o_31046,
                    v_l_31047,
                    v_c_31048;
                  v_u_30985 = mathFloor(v_d_30983);
                  v_De_28096(v_h_30982.frames[v_u_30985], function (v_t_31054) {
                    v_s_31044 = mathMin(NaN, 1), v_l_31047 = mathCos(v_t_31054.rad), v_c_31048 = mathSin(v_t_31054.rad), v_a_31045 = v_t_31054.long ? (v_o_31046 = 2200, 260) : (v_o_31046 = 1800, 500), v_r_31043 = [v_no_28093(v_a_31045, 300, v_l_31047, v_c_31048), v_no_28093(v_o_31046, 300, v_l_31047, v_c_31048), v_no_28093(v_a_31045, -300, v_l_31047, v_c_31048), v_no_28093(v_o_31046, -300, v_l_31047, v_c_31048)];
                    for (let v_t_31055 = 0; v_t_31055 < 4; ++v_t_31055) v_i_31040[3 * (v_n_31042 + v_t_31055) + 0] = v_r_31043[v_t_31055][0], v_i_31040[3 * (v_n_31042 + v_t_31055) + 1] = v_r_31043[v_t_31055][1], v_i_31040[3 * (v_n_31042 + v_t_31055) + 2] = v_j_30274(v_r_31043[v_t_31055][1]) - 1280;
                    v_e_31041[2 * v_n_31042 + 0] = v_t_31054.i / 5, v_e_31041[2 * v_n_31042 + 1] = 0, v_e_31041[2 * v_n_31042 + 2] = v_t_31054.i / 5, v_e_31041[2 * v_n_31042 + 3] = 1, v_e_31041[2 * v_n_31042 + 4] = (v_t_31054.i + 1) / 5, v_e_31041[2 * v_n_31042 + 5] = 0, v_e_31041[2 * v_n_31042 + 6] = (v_t_31054.i + 1) / 5, v_e_31041[2 * v_n_31042 + 7] = 1, v_n_31042 += 4;
                  }), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE), 0 < v_n_31042 && (v_J_30266.ml.jl("vertices", 3 * v_n_31042), v_J_30266.ml.jl("coords", 2 * v_n_31042), v_H_30265.ko.bind(0), v_Ve_27579.uniforms(v_vn_27625).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, v_n_31042 / 2 * 3)), v_r_31043 = [[-1800, 1300], [1800, 1300], [-1800, -1900], [1800, -1900]];
                  for (let v_t_31056 = 0; v_t_31056 < 4; ++v_t_31056) v_i_31040[3 * v_t_31056 + 0] = v_r_31043[v_t_31056][0], v_i_31040[3 * v_t_31056 + 1] = v_r_31043[v_t_31056][1], v_i_31040[3 * v_t_31056 + 2] = v_j_30274(v_r_31043[v_t_31056][1]) - 1280;
                  v_e_31041[0] = 0, v_e_31041[1] = 0, v_e_31041[2] = 0, v_e_31041[3] = 1, v_e_31041[4] = 1, v_e_31041[5] = 0, v_e_31041[6] = 1, v_e_31041[7] = 1, v_J_30266.ml.jl("vertices", 12), v_J_30266.ml.jl("coords", 8), v_H_30265.oo.bind(0);
                  let v_t_31049 = 0;
                  v_t_31049 = v_d_30983 < 3 ? v_d_30983 / 3 : 1 - (v_d_30983 - 3) / 12, v_pn_27630.col[0] = .71765, v_pn_27630.col[1] = .10588, v_pn_27630.col[2] = .56078, v_pn_27630.col[3] = .375 * v_t_31049, v_Ke_27583.uniforms(v_pn_27630).drawBuffers(v_J_30266.ml.Nl(), v_J_30266.ml.Yl(), glContext.TRIANGLES, 6), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA);
                }
                break;
              default:
                return !0;
            }
            return v_h_30982;
          }
        },
        backgroundRenderer = function () {
          let v_B_31057 = null,
            v_v_31058 = null,
            v_i_31059 = null,
            v_N_31060 = [],
            v_G_31061 = [],
            v_w_31062 = null,
            v_g_31063 = null,
            v_U_31064 = null,
            v_H_31065 = !1,
            v_J_31066 = "",
            v_j_31067 = "",
            v_O_31068 = {},
            v_V_31069 = 0;
          let v_W_31070 = {
              wc: 0,
              kc: 0,
              bc: 0,
              XP: 0
            },
            v_m_31071 = null;
          return {
            ue: function () {
              var v_t_31072, v_i_31073;
              v_B_31057 = new THREE.WebGL1Renderer({
                canvas: glContext.canvas,
                context: glContext,
                alpha: !0
              }), v_v_31058 = new THREE.WebGLRenderTarget(v_yn_27656, v_Sn_27657, {
                depthBuffer: !0,
                stencilBuffer: !1,
                magFilter: THREE.NearestFilter,
                minFilter: THREE.NearestFilter,
                wrapS: THREE.ClampToEdgeWrapping,
                wrapT: THREE.ClampToEdgeWrapping
              }), v_B_31057.autoClear = !1, v_B_31057.autoClearColor = !1, v_B_31057.autoClearDepth = !1, v_B_31057.autoClearStencil = !1, v_B_31057.setSize(v_yn_27656, v_Sn_27657), v_w_31062 = (v_t_31072 = new THREE.Scene(), (v_i_31073 = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1), new THREE.MeshBasicMaterial())).scale.set(0, 1, 1), v_t_31072.add(v_i_31073), v_t_31072), v_g_31063 = new THREE.PerspectiveCamera(75, v_yn_27656 / v_Sn_27657, .1, 3e3);
            },
            Ec: function (v_i_31074, v_e_31075) {
              if (v_O_31068 = {}, v_j_31067 = v_i_31074, v_H_31065 = !1, v_kn_27636 = [0, 0, 0], "_default_1" === v_i_31074) {
                v_V_31069 = 330549, v_J_31066 = "_default_1", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
                  PLANES_COLS: 24,
                  PLANES_ROWS: 24,
                  PLANE_WIDTH: 55,
                  PLANE_HEIGHT: 55,
                  PLANE_OUTER_WIDTH: 60,
                  PLANE_OUTER_HEIGHT: 60,
                  PLANE_AREA_X: 0,
                  PLANE_AREA_Z: 0,
                  planes: new THREE.BufferGeometry(),
                  planes_anim_data: [],
                  sky_rays: []
                }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, v_yn_27656 / v_Sn_27657, .1, 3e3));
                var v_n_31076,
                  v_t_31077 = new THREE.MeshStandardMaterial({
                    color: 3423353,
                    vertexColors: !0,
                    transparent: !0
                  }),
                  v_r_31078 = [],
                  v_s_31079 = [],
                  v_a_31080 = [],
                  v_o_31081 = v_O_31068.PLANE_WIDTH,
                  v_l_31082 = v_O_31068.PLANE_HEIGHT;
                for (let v_t_31110 = 0; v_t_31110 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31110) v_n_31076 = v_t_31110 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_o_31081 / 2, v_r_31078.push(v_n_31076 - v_o_31081 / 2, 0, v_l_31082 / 2, v_n_31076 + v_o_31081 / 2, 0, v_l_31082 / 2, v_n_31076 - v_o_31081 / 2, 0, -v_l_31082 / 2, v_n_31076 + v_o_31081 / 2, 0, -v_l_31082 / 2), v_n_31076 = .75 - .75 * mathAbs(v_t_31110 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1), v_s_31079.push(1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076), v_a_31080.push(4 * v_t_31110, 1 + 4 * v_t_31110, 2 + 4 * v_t_31110, 2 + 4 * v_t_31110, 1 + 4 * v_t_31110, 3 + 4 * v_t_31110), v_O_31068.planes_anim_data.push({
                  offset_t: 5e3 * mathRandom(),
                  offset_y: 4 * mathRandom() - 2,
                  speed: mathRandom() + 1,
                  move: mathRandom() < .75
                });
                v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_a_31080), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_r_31078), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_s_31079), 4)), v_O_31068.planes.setDrawRange(0, v_a_31080.length);
                v_t_31077 = new THREE.Mesh(v_O_31068.planes, v_t_31077), v_t_31077 = (v_N_31060[0].add(v_t_31077), new THREE.DirectionalLight(16777215, 1)), v_t_31077 = (v_t_31077.position.set(0, 300, -800), v_N_31060[0].add(v_t_31077), new THREE.AmbientLight(16777215, 1));
                v_N_31060[0].add(v_t_31077), v_H_31065 = !0, v_Fe_28101(v_e_31075);
              } else if ("_default_umiguri_new" === v_i_31074) {
                v_V_31069 = 0, v_J_31066 = "_default_umiguri_new", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
                  PLANES_COLS: 24,
                  PLANES_ROWS: 24,
                  PLANE_WIDTH: 55,
                  PLANE_HEIGHT: 55,
                  PLANE_OUTER_WIDTH: 60,
                  PLANE_OUTER_HEIGHT: 60,
                  PLANE_AREA_X: 0,
                  PLANE_AREA_Z: 0,
                  planes: new THREE.BufferGeometry(),
                  planes_anim_data: [],
                  bg_plates: []
                }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.OrthographicCamera(-v_yn_27656 / 2, v_yn_27656 / 2, v_Sn_27657 / 2, -v_Sn_27657 / 2)), v_G_31061[0].position.set(0, 0, v_Sn_27657 / 2);
                var v_t_31077 = new THREE.BufferGeometry(),
                  v_c_31083 = new THREE.MeshBasicMaterial({
                    color: 16777215,
                    vertexColors: !0,
                    transparent: !0,
                    side: THREE.DoubleSide,
                    depthWrite: !1,
                    depthTest: !1
                  }),
                  v_u_31084 = [-960, 540, 0, 960, 540, 0, -960, -540, 0, 960, -540, 0],
                  v_f_31085 = [46 / 255, 24 / 255, 104 / 255, 1, 139 / 255, 22 / 255, 93 / 255, 1, 85 / 255, 43 / 255, 61 / 255, 1, 248 / 255, 149 / 255, 49 / 255, 1],
                  v___31086 = [0, 1, 2, 2, 1, 3],
                  v_u_31084 = (v_t_31077.setIndex(new THREE.BufferAttribute(new Uint32Array(v___31086), 1)), v_t_31077.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_u_31084), 3)), v_t_31077.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_f_31085), 4)), v_t_31077.setDrawRange(0, v___31086.length), new THREE.Mesh(v_t_31077, v_c_31083));
                v_N_31060[0].add(v_u_31084);
                for (let v_t_31111 = 0; v_t_31111 < 8; ++v_t_31111) {
                  var v_h_31087 = new THREE.BufferGeometry(),
                    v_d_31088 = new THREE.MeshBasicMaterial({
                      color: 16777215,
                      vertexColors: !0,
                      transparent: !0,
                      side: THREE.DoubleSide,
                      depthWrite: !1,
                      depthTest: !1
                    }),
                    v_v_31089 = 135 * v_t_31111,
                    v_w_31090 = 135 * (v_t_31111 + 1),
                    v_v_31089 = [-960, 540 - v_v_31089, 0, 960, 540 - v_v_31089, 0, -960, 540 - v_w_31090, 0, 960, 540 - v_w_31090, 0],
                    v_w_31090 = [138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, 1, 138 / 255, 26 / 255, 176 / 255, 1],
                    v_g_31091 = [0, 1, 2, 2, 1, 3],
                    v_v_31089 = (v_h_31087.setIndex(new THREE.BufferAttribute(new Uint32Array(v_g_31091), 1)), v_h_31087.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_v_31089), 3)), v_h_31087.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_w_31090), 4)), v_h_31087.setDrawRange(0, v_g_31091.length), new THREE.Mesh(v_h_31087, v_d_31088));
                  v_N_31060[0].add(v_v_31089), v_O_31068.bg_plates.push(v_v_31089);
                }
                v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, v_yn_27656 / v_Sn_27657, .1, 3e3));
                var v_m_31092,
                  v_f_31085 = new THREE.MeshStandardMaterial({
                    color: 7284382,
                    vertexColors: !0,
                    transparent: !0
                  }),
                  v_p_31093 = [],
                  v_k_31094 = [],
                  v_b_31095 = [],
                  v_y_31096 = v_O_31068.PLANE_WIDTH,
                  v_S_31097 = v_O_31068.PLANE_HEIGHT;
                for (let v_t_31112 = 0; v_t_31112 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31112) v_m_31092 = v_t_31112 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_y_31096 / 2, v_p_31093.push(v_m_31092 - v_y_31096 / 2, 0, v_S_31097 / 2, v_m_31092 + v_y_31096 / 2, 0, v_S_31097 / 2, v_m_31092 - v_y_31096 / 2, 0, -v_S_31097 / 2, v_m_31092 + v_y_31096 / 2, 0, -v_S_31097 / 2), v_m_31092 = .125 - .125 * mathAbs(v_t_31112 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1), v_k_31094.push(1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092), v_b_31095.push(4 * v_t_31112, 1 + 4 * v_t_31112, 2 + 4 * v_t_31112, 2 + 4 * v_t_31112, 1 + 4 * v_t_31112, 3 + 4 * v_t_31112), v_O_31068.planes_anim_data.push({
                  offset_t: 5e3 * mathRandom(),
                  offset_y: 4 * mathRandom() - 2,
                  speed: mathRandom() + 1,
                  move: mathRandom() < .75
                });
                v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_b_31095), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_p_31093), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_k_31094), 4)), v_O_31068.planes.setDrawRange(0, v_b_31095.length);
                v___31086 = new THREE.Mesh(v_O_31068.planes, v_f_31085), v_t_31077 = (v_N_31060[1].add(v___31086), new THREE.DirectionalLight(16777215, 1)), v_c_31083 = (v_t_31077.position.set(0, 300, -800), v_N_31060[1].add(v_t_31077), new THREE.AmbientLight(16777215, 1));
                v_N_31060[1].add(v_c_31083), v_H_31065 = !0, v_Fe_28101(v_e_31075);
              } else if ("_default_we" === v_i_31074) {
                v_V_31069 = 0, v_J_31066 = "_default_we", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
                  PLANES_COLS: 24,
                  PLANES_ROWS: 24,
                  PLANE_WIDTH: 55,
                  PLANE_HEIGHT: 55,
                  PLANE_OUTER_WIDTH: 60,
                  PLANE_OUTER_HEIGHT: 60,
                  PLANE_AREA_X: 0,
                  PLANE_AREA_Z: 0,
                  planes: new THREE.BufferGeometry(),
                  planes_anim_data: [],
                  bg_plates: []
                }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.OrthographicCamera(-v_yn_27656 / 2, v_yn_27656 / 2, v_Sn_27657 / 2, -v_Sn_27657 / 2)), v_G_31061[0].position.set(0, 0, v_Sn_27657 / 2);
                v_u_31084 = new THREE.BufferGeometry(), v_f_31085 = new THREE.MeshBasicMaterial({
                  color: 16777215,
                  vertexColors: !0,
                  transparent: !0,
                  side: THREE.DoubleSide,
                  depthWrite: !1,
                  depthTest: !1
                }), v___31086 = [-960, 540, 0, 960, 540, 0, -960, -540, 0, 960, -540, 0], v_t_31077 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], v_c_31083 = [0, 1, 2, 2, 1, 3], v___31086 = (v_u_31084.setIndex(new THREE.BufferAttribute(new Uint32Array(v_c_31083), 1)), v_u_31084.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v___31086), 3)), v_u_31084.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_t_31077), 4)), v_u_31084.setDrawRange(0, v_c_31083.length), new THREE.Mesh(v_u_31084, v_f_31085));
                v_N_31060[0].add(v___31086);
                for (let v_t_31113 = 0; v_t_31113 < 0; ++v_t_31113) {
                  var v_A_31098 = new THREE.BufferGeometry(),
                    v_x_31099 = new THREE.MeshBasicMaterial({
                      color: 16777215,
                      vertexColors: !0,
                      transparent: !0,
                      side: THREE.DoubleSide,
                      depthWrite: !1,
                      depthTest: !1
                    }),
                    v_C_31100 = 135 * v_t_31113,
                    v_T_31101 = 135 * (v_t_31113 + 1),
                    v_C_31100 = [-960, 540 - v_C_31100, 0, 960, 540 - v_C_31100, 0, -960, 540 - v_T_31101, 0, 960, 540 - v_T_31101, 0],
                    v_T_31101 = [138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, 1, 138 / 255, 26 / 255, 176 / 255, 1],
                    v_I_31102 = [0, 1, 2, 2, 1, 3],
                    v_C_31100 = (v_A_31098.setIndex(new THREE.BufferAttribute(new Uint32Array(v_I_31102), 1)), v_A_31098.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_C_31100), 3)), v_A_31098.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_T_31101), 4)), v_A_31098.setDrawRange(0, v_I_31102.length), new THREE.Mesh(v_A_31098, v_x_31099));
                  v_N_31060[0].add(v_C_31100), v_O_31068.bg_plates.push(v_C_31100);
                }
                v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, v_yn_27656 / v_Sn_27657, .1, 3e3));
                var v_t_31077 = new THREE.MeshStandardMaterial({
                    color: 7284382,
                    vertexColors: !0,
                    transparent: !0
                  }),
                  v_P_31103 = [],
                  v_R_31104 = [],
                  v_L_31105 = [],
                  v_M_31106 = v_O_31068.PLANE_WIDTH,
                  v_E_31107 = v_O_31068.PLANE_HEIGHT;
                for (let v_t_31114 = 0; v_t_31114 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31114) {
                  var v_D_31108,
                    v_F_31109 = v_t_31114 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_M_31106 / 2;
                  mathRandom() < .75 ? v_P_31103.push(v_F_31109 - v_M_31106 / 2 + 20 * mathRandom() - 10, 0, v_E_31107 / 2 + 20 * mathRandom() - 10, v_F_31109 + v_M_31106 / 2 + 40 * mathRandom() - 20, 0, v_E_31107 / 2 + 20 * mathRandom() - 10, v_F_31109 - v_M_31106 / 2 + 36 * mathRandom() - 18, 0, -v_E_31107 / 2 + 20 * mathRandom() - 10, v_F_31109 + v_M_31106 / 2 + 20 * mathRandom() - 10, 0, -v_E_31107 / 2 + 20 * mathRandom() - 10) : v_P_31103.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_F_31109 = .25 - .25 * mathAbs(v_t_31114 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1) + .25 * mathRandom(), mathRandom() < .75 ? v_R_31104.push(1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109) : (v_D_31108 = function (v_t_31115) {
                    let v_i_31116 = v_t_31115[0] / 60,
                      v_e_31117 = v_t_31115[1],
                      v_n_31118 = v_t_31115[2],
                      v_r_31119 = v_n_31118 + v_e_31117 * (1 - mathAbs(2 * v_n_31118 - 1)) / 2,
                      v_s_31120 = v_n_31118 - v_e_31117 * (1 - mathAbs(2 * v_n_31118 - 1)) / 2,
                      v_a_31121,
                      v_o_31122 = mathFloor(v_i_31116);
                    0 === v_o_31122 || 6 === v_o_31122 ? v_a_31121 = [v_r_31119, v_s_31120 + (v_r_31119 - v_s_31120) * v_i_31116, v_s_31120] : 1 === v_o_31122 ? v_a_31121 = [v_s_31120 + (v_r_31119 - v_s_31120) * (120 - v_i_31116), v_r_31119, v_s_31120] : 2 === v_o_31122 ? v_a_31121 = [v_s_31120, v_r_31119, v_s_31120 + (v_r_31119 - v_s_31120) * (v_i_31116 - 2)] : 3 === v_o_31122 ? v_a_31121 = [v_s_31120, v_s_31120 + (v_r_31119 - v_s_31120) * (240 - v_i_31116), v_r_31119] : 4 === v_o_31122 ? v_a_31121 = [v_s_31120 + (v_r_31119 - v_s_31120) * (v_i_31116 - 4), v_s_31120, v_r_31119] : 5 === v_o_31122 && (v_a_31121 = [v_r_31119, v_s_31120, v_s_31120 + (v_r_31119 - v_s_31120) * (360 - v_i_31116)]);
                    return [mathCeil(255 * v_a_31121[0]), mathCeil(255 * v_a_31121[1]), mathCeil(255 * v_a_31121[2])];
                  }([360 * mathRandom(), .6, .5]), v_R_31104.push(v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109)), v_L_31105.push(4 * v_t_31114, 1 + 4 * v_t_31114, 2 + 4 * v_t_31114, 2 + 4 * v_t_31114, 1 + 4 * v_t_31114, 3 + 4 * v_t_31114), v_O_31068.planes_anim_data.push({
                    offset_t: 5e3 * mathRandom(),
                    offset_y: 4 * mathRandom() - 2,
                    speed: mathRandom() + 1,
                    move: mathRandom() < .75
                  });
                }
                v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_L_31105), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_P_31103), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_R_31104), 4)), v_O_31068.planes.setDrawRange(0, v_L_31105.length);
                v_c_31083 = new THREE.Mesh(v_O_31068.planes, v_t_31077), v_u_31084 = (v_N_31060[1].add(v_c_31083), new THREE.DirectionalLight(16777215, 1)), v_f_31085 = (v_u_31084.position.set(0, 300, -800), v_N_31060[1].add(v_u_31084), new THREE.AmbientLight(16777215, 1));
                v_N_31060[1].add(v_f_31085), v_H_31065 = !0, v_Fe_28101(v_e_31075);
              } else if (0 === v_i_31074.indexOf("model:")) {
                v_J_31066 = "user", v_V_31069 = 0, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, v_yn_27656 / v_Sn_27657, .1, 3e3)), v_W_31070.wc = THREE.ACESFilmicToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, (v_U_31064 = effekseer.createContext()).init(v_B_31057.getContext()), v_U_31064.setRestorationOfStatesFlag(!1);
                let v_t_31123 = new THREE.GLTFLoader(),
                  v_s_31124 = {
                    Sc: "bg.glb",
                    xc: [],
                    Jy: 0,
                    Oy: {
                      Vy: !(v_O_31068 = {
                        init: !1,
                        mixer: null,
                        is_first_frame: !0,
                        xc: []
                      }),
                      Wy: 0,
                      Xy: 0,
                      Xe: 0
                    },
                    NR: 16777215,
                    UR: 1
                  },
                  v_n_31125 = "/player_scenes/" + v_i_31074.substr(6).replaceAll(/[/\\:*?"|<>"]/g, "_") + "/";
                v_Le_28076([function (v_t_31126) {
                  v_$r_27975.Ic(v_n_31125 + "bg_conf.txt", function (v_e_31127) {
                    if (null !== v_e_31127) {
                      let v_t_31128 = v_e_31127.replace(/\r\n/g, "\n").split("\n"),
                        v_i_31129;
                      v_De_28096(v_t_31128, function (v_t_31130) {
                        0 !== (v_i_31129 = v_t_31130.split("\t")).length && ("Model" === v_i_31129[0] ? v_i_31129.length < 2 || (v_s_31124.Sc = v_i_31129[1]) : "Layer" === v_i_31129[0] ? v_i_31129.length < 3 || "EFK" === v_i_31129[1] && v_s_31124.xc.push({
                          Fi: 1,
                          ct: v_i_31129[2]
                        }) : "Ambient" === v_i_31129[0] ? v_i_31129.length < 3 || (v_s_31124.NR = v_Ea_28065(v_i_31129[1]), v_s_31124.UR = v_Re_28066(v_i_31129[2])) : "PhysLight" === v_i_31129[0] ? v_i_31129.length < 2 || (v_W_31070.kc = v_La_28062(v_i_31129[1])) : "PostFx" === v_i_31129[0] ? v_i_31129.length < 2 || ("BlurUp" === v_i_31129[1] ? v_s_31124.Jy = 1 : v_s_31124.Jy = 0) : "Fog" !== v_i_31129[0] || v_i_31129.length < 5 || (v_s_31124.Oy.Vy = v_La_28062(v_i_31129[1]), v_s_31124.Oy.Wy = v_Ea_28065(v_i_31129[2]), v_s_31124.Oy.Xy = v_Re_28066(v_i_31129[3]), v_s_31124.Oy.Xe = v_Re_28066(v_i_31129[4])));
                      });
                    }
                    v_Me_28078(v_t_31126);
                  });
                }, function (v_r_31131) {
                  "" === v_s_31124.Sc ? v_Me_28078(v_r_31131) : v_t_31123.load(v_n_31125 + v_s_31124.Sc, function (v_i_31132) {
                    v_O_31068.init = !0;
                    var v_t_31133 = v_i_31132.scene;
                    if (v_t_31133.position.set(0, 0, 0), v_i_31132.cameras[0] && (v_G_31061[v_G_31061.length - 1] = v_i_31132.cameras[0]), v_i_31132.animations && v_i_31132.animations.length) {
                      var v_e_31134 = new THREE.AnimationMixer(v_i_31132.scene);
                      for (let v_t_31136 = 0; v_t_31136 < v_i_31132.animations.length; ++v_t_31136) {
                        var v_n_31135 = v_e_31134.clipAction(v_i_31132.animations[v_t_31136]);
                        v_n_31135.clampWhenFinished = !0, v_n_31135.play();
                      }
                      v_O_31068.mixer = v_e_31134;
                    }
                    v_N_31060[0].add(v_t_31133), v_N_31060[0].add(new THREE.AmbientLight(v_s_31124.NR, v_s_31124.UR)), v_N_31060[0].matrixWorldNeedsUpdate = !0, glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !0), v_Me_28078(v_r_31131);
                  }, function () {}, function () {
                    v_Me_28078(v_r_31131);
                  });
                }, function (v_t_31137) {
                  v_lo_28099(v_s_31124.xc, function (v_i_31138, v_t_31139, v_e_31140) {
                    if (1 === v_e_31140.Fi) {
                      let v_t_31141 = v_U_31064.loadEffect(v_n_31125 + v_e_31140.ct, 1, function () {
                        v_O_31068.xc.push({
                          Fi: 1,
                          yc: v_t_31141
                        }), v_i_31138();
                      });
                    } else v_i_31138();
                  }, function () {
                    v_Me_28078(v_t_31137);
                  });
                }, function (v_t_31142) {
                  v_De_28096(v_O_31068.xc, function (v_t_31143) {
                    1 === v_t_31143.Fi && v_U_31064.play(v_t_31143.yc);
                  }), v_W_31070.XP = v_s_31124.Jy, v_s_31124.Oy.Vy && (v_N_31060[0].fog = new THREE.Fog(v_s_31124.Oy.Wy, v_s_31124.Oy.Xy, v_s_31124.Oy.Xe)), v_H_31065 = !0, v_Fe_28101(v_e_31075);
                }]);
              } else v_kn_27636 = [0, 0, 0], v_H_31065 = !0, v_Fe_28101(v_e_31075);
              for (let v_t_31144 = 0; v_t_31144 < v_N_31060.length; ++v_t_31144) v_N_31060[v_t_31144].matrixWorldNeedsUpdate = !0;
              glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !0);
            },
            le: function (v_e_31145) {
              if (v_H_31065) {
                let v_t_31158 = 0;
                if (v_t_31158 = null === v_m_31071 ? 0 : (v_e_31145 - v_m_31071) / 1e3, v_m_31071 = v_e_31145, v_B_31057.resetState(), v_B_31057.toneMapping = v_W_31070.wc, v_B_31057.physicallyCorrectLights = v_W_31070.kc, v_B_31057.outputEncoding = v_W_31070.bc, v_B_31057.setRenderTarget(v_v_31058), v_B_31057.setClearColor(v_V_31069, 1), v_B_31057.clear(!0, !0, !1), "_default_1" === v_J_31066) {
                  v_G_31061[0].position.set(0, 200, 700), v_G_31061[0].lookAt(new THREE.Vector3(0, 0, 470));
                  var v_n_31146,
                    v_r_31147,
                    v_s_31148,
                    v_a_31149 = v_O_31068.planes.attributes.position.array;
                  for (let v_i_31159 = 0; v_i_31159 < v_O_31068.PLANES_ROWS; ++v_i_31159) for (let v_t_31160 = 0; v_t_31160 < v_O_31068.PLANES_COLS; ++v_t_31160) v_n_31146 = 3 * (v_r_31147 = v_i_31159 * v_O_31068.PLANES_COLS + v_t_31160) * 4, v_r_31147 = (v_r_31147 = v_O_31068.planes_anim_data[v_r_31147]).move ? 4 * mathSin((v_e_31145 / 1e3 + v_r_31147.offset_t) / v_r_31147.speed * mathPI / 2) + v_r_31147.offset_y : 0, v_s_31148 = v_Za_28087(v_e_31145 / 40 + v_i_31159 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_a_31149[0 + v_n_31146 + 1] = v_a_31149[3 + v_n_31146 + 1] = v_a_31149[6 + v_n_31146 + 1] = v_a_31149[9 + v_n_31146 + 1] = v_r_31147, v_a_31149[0 + v_n_31146 + 2] = v_a_31149[3 + v_n_31146 + 2] = v_s_31148 + v_O_31068.PLANE_WIDTH / 2, v_a_31149[6 + v_n_31146 + 2] = v_a_31149[9 + v_n_31146 + 2] = v_s_31148 - v_O_31068.PLANE_WIDTH / 2;
                  v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
                } else if ("_default_umiguri_new" === v_J_31066) {
                  for (let v_t_31161 = 0; v_t_31161 < v_O_31068.bg_plates.length; ++v_t_31161) v_O_31068.bg_plates[v_t_31161].material.opacity = mathMax(1 - v_Za_28087(v_e_31145 / 1e3 - .5 * v_t_31161, 4) / 2, 0) * (1 - v_t_31161 / 8) * .75;
                  v_G_31061[1].position.set(0, 200, 700), v_G_31061[1].lookAt(new THREE.Vector3(0, 0, 470));
                  var v_o_31150,
                    v_l_31151,
                    v_c_31152,
                    v_u_31153 = v_O_31068.planes.attributes.position.array;
                  for (let v_i_31162 = 0; v_i_31162 < v_O_31068.PLANES_ROWS; ++v_i_31162) for (let v_t_31163 = 0; v_t_31163 < v_O_31068.PLANES_COLS; ++v_t_31163) v_o_31150 = 3 * (v_l_31151 = v_i_31162 * v_O_31068.PLANES_COLS + v_t_31163) * 4, v_l_31151 = (v_l_31151 = v_O_31068.planes_anim_data[v_l_31151]).move ? 4 * mathSin((v_e_31145 / 1e3 + v_l_31151.offset_t) / v_l_31151.speed * mathPI / 2) + v_l_31151.offset_y : 0, v_c_31152 = v_Za_28087(v_e_31145 / 40 + v_i_31162 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_u_31153[0 + v_o_31150 + 1] = v_u_31153[3 + v_o_31150 + 1] = v_u_31153[6 + v_o_31150 + 1] = v_u_31153[9 + v_o_31150 + 1] = v_l_31151, v_u_31153[0 + v_o_31150 + 2] = v_u_31153[3 + v_o_31150 + 2] = v_c_31152 + v_O_31068.PLANE_WIDTH / 2, v_u_31153[6 + v_o_31150 + 2] = v_u_31153[9 + v_o_31150 + 2] = v_c_31152 - v_O_31068.PLANE_WIDTH / 2;
                  v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
                } else if ("_default_we" === v_J_31066) {
                  v_G_31061[1].position.set(0, 200, 700), v_G_31061[1].lookAt(new THREE.Vector3(0, 0, 470));
                  var v_f_31154,
                    v___31155,
                    v_h_31156,
                    v_d_31157 = v_O_31068.planes.attributes.position.array;
                  for (let v_i_31164 = 0; v_i_31164 < v_O_31068.PLANES_ROWS; ++v_i_31164) for (let v_t_31165 = 0; v_t_31165 < v_O_31068.PLANES_COLS; ++v_t_31165) v_f_31154 = 3 * (v___31155 = v_i_31164 * v_O_31068.PLANES_COLS + v_t_31165) * 4, v___31155 = (v___31155 = v_O_31068.planes_anim_data[v___31155]).move ? 4 * mathSin((v_e_31145 / 1e3 + v___31155.offset_t) / v___31155.speed * mathPI / 2) + v___31155.offset_y : 0, v_h_31156 = v_Za_28087(v_e_31145 / 40 + v_i_31164 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_d_31157[0 + v_f_31154 + 1] = v_d_31157[3 + v_f_31154 + 1] = v_d_31157[6 + v_f_31154 + 1] = v_d_31157[9 + v_f_31154 + 1] = v___31155, v_d_31157[0 + v_f_31154 + 2] = v_d_31157[3 + v_f_31154 + 2] = v_h_31156 + v_O_31068.PLANE_WIDTH / 2, v_d_31157[6 + v_f_31154 + 2] = v_d_31157[9 + v_f_31154 + 2] = v_h_31156 - v_O_31068.PLANE_WIDTH / 2;
                  v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
                } else "user" === v_J_31066 && v_O_31068.init && v_O_31068.mixer && v_O_31068.mixer.update(v_t_31158);
                if ("user" === v_J_31066) {
                  v_O_31068.is_first_frame ? (v_U_31064.update(14400), v_O_31068.is_first_frame = !1) : v_U_31064.update(60 * v_t_31158), v_G_31061[0] && (v_U_31064.setProjectionMatrix(v_G_31061[0].projectionMatrix.elements), v_U_31064.setCameraMatrix(v_G_31061[0].matrixWorldInverse.elements));
                  for (let v_t_31166 = 0; v_t_31166 < v_N_31060.length; ++v_t_31166) v_G_31061[v_t_31166] && v_B_31057.render(v_N_31060[v_t_31166], v_G_31061[v_t_31166]);
                  v_U_31064.draw();
                } else for (let v_t_31167 = 0; v_t_31167 < v_N_31060.length; ++v_t_31167) v_G_31061[v_t_31167] && v_B_31057.render(v_N_31060[v_t_31167], v_G_31061[v_t_31167]);
                v_B_31057.render(v_w_31062, v_g_31063), renderer.Yt.Cc(1), v_i_31059 = v_i_31059 || v_B_31057.properties.get(v_v_31058.texture).__webglTexture;
              }
            },
            zP: function () {
              for (let v_t_31168 = 0; v_t_31168 < v_N_31060.length; ++v_t_31168) v_N_31060[v_t_31168].remove.apply(v_N_31060[v_t_31168], v_N_31060[v_t_31168].children);
              v_N_31060 = [], v_G_31061 = [], v_U_31064 && (v_U_31064.stopAll(), "user" === v_J_31066 && v_De_28096(v_O_31068.xc, function (v_t_31169) {
                1 === v_t_31169.Fi && v_U_31064.releaseEffect(v_t_31169.yc);
              }), effekseer.releaseContext(v_U_31064), v_U_31064 = null), v_O_31068 = {}, v_kn_27636 = [0, 0, 0], v_m_31071 = null, v_J_31066 = "", v_j_31067 = "";
            },
            KP: function () {
              return v_i_31059;
            },
            YP: function () {
              return "user" === v_J_31066;
            },
            HR: function () {
              return v_j_31067;
            },
            qP: function () {
              return v_W_31070.XP;
            }
          };
        }(),
        v_oi_30289 = 1,
        v_li_30290 = function () {
          let v_s_31170 = {
            0: null,
            1: null
          };
          return {
            Ec: function (v_t_31171, v_i_31172, v_e_31173) {
              v_t_31171 = "/player_scenes/" + v_t_31171.replaceAll(/[/\\:*?"|<>"]/g, "_") + "/";
              let v_n_31174 = new v_Yr_27972(),
                v_r_31175 = "";
              if (0 === v_i_31172) v_r_31175 = "bg";else {
                if (v_i_31172 !== v_oi_30289) return;
                v_r_31175 = "field";
              }
              v_n_31174.read(v_t_31171 + v_r_31175 + ".upm", v_t_31171, function (v_t_31176) {
                v_t_31176 && (v_s_31170[v_i_31172] = v_n_31174), v_e_31173(v_t_31176);
              });
            },
            le: function (v_t_31177) {
              v_s_31170[v_t_31177] && 0 !== v_t_31177 && v_t_31177 === v_oi_30289 && (glContext.enable(glContext.STENCIL_TEST), glContext.stencilFunc(glContext.ALWAYS, 1, 0), glContext.stencilOp(glContext.KEEP, glContext.REPLACE, glContext.REPLACE), v_s_31170[v_t_31177].draw(), glContext.disable(glContext.STENCIL_TEST));
            },
            Fc: function () {
              v_s_31170[0] && (v_s_31170[0].free(), v_s_31170[0] = null), v_s_31170[v_oi_30289] && (v_s_31170[v_oi_30289].free(), v_s_31170[v_oi_30289] = null);
            }
          };
        }(),
        v_ci_30291 = 0,
        v_ui_30292 = 1,
        v_fi_30293 = 2,
        v__i_30294 = 3,
        v_V_30295 = 4,
        v_hi_30296 = 5,
        v_di_30297 = 6,
        v_vi_30298 = 7,
        v_wi_30299 = 8,
        v_gi_30300 = 9,
        v_mi_30301 = 10,
        v_pi_30302 = 12,
        v_ki_30303 = 13,
        v_bi_30304 = 14,
        v_yi_30305 = 15,
        v_Si_30306 = 16,
        judgeSound = function () {
          let v_n_31178 = new Map(),
            v_r_31179 = v_f0_27709[0],
            v_s_31180 = !1;
          return {
            Zg: function (v_t_31181) {
              v_s_31180 = v_t_31181;
            },
            jR: function (v_t_31182) {
              v_r_31179 = (v_r_31179 = v_f0_27709[v_t_31182]) || v_f0_27709[0];
            },
            dn: function (v_t_31183) {
              v_n_31178.set(v_t_31183, !0);
            },
            oe: function () {
              let v_e_31184 = "";
              v_n_31178.forEach(function (v_t_31185, v_i_31186) {
                if (v_t_31185 && (v_n_31178.set(v_i_31186, !1), !v_s_31180)) {
                  switch (v_i_31186) {
                    case v_ci_30291:
                      v_e_31184 = "air";
                      break;
                    case v_ui_30292:
                      v_e_31184 = "airdown";
                      break;
                    case v_fi_30293:
                      v_e_31184 = "airaction";
                      break;
                    case v_Si_30306:
                      v_e_31184 = "airhold";
                      break;
                    case v__i_30294:
                      v_e_31184 = "aircrush";
                      break;
                    case v_V_30295:
                      break;
                    case v_hi_30296:
                      v_e_31184 = "extap";
                      break;
                    case v_di_30297:
                      v_e_31184 = "flick";
                      break;
                    case v_vi_30298:
                      v_e_31184 = "guide";
                      break;
                    case v_wi_30299:
                      v_e_31184 = "attack";
                      break;
                    case v_gi_30300:
                      v_e_31184 = "miss";
                      break;
                    case v_mi_30301:
                      v_e_31184 = "damage";
                      break;
                    case 11:
                      v_e_31184 = "metronome";
                      break;
                    case v_pi_30302:
                      v_e_31184 = "slidestep";
                      break;
                    case v_ki_30303:
                      v_e_31184 = "skilltrigger2";
                      break;
                    default:
                      return;
                  }
                  v_i_31186 === v_V_30295 ? v_Ae_27892.dn("tap_" + v_r_31179) : v_Ae_27892.dn(v_e_31184);
                }
              }), v_s_31180 = !1;
            },
            Mc: function (v_t_31187, v_i_31188) {
              let v_e_31189 = "";
              switch (v_t_31187) {
                case v_ci_30291:
                  v_e_31189 = "air";
                  break;
                case v_ui_30292:
                  v_e_31189 = "airdown";
                  break;
                case v_fi_30293:
                  v_e_31189 = "airaction";
                  break;
                case v_Si_30306:
                  v_e_31189 = "airhold";
                  break;
                case v__i_30294:
                  v_e_31189 = "aircrush";
                  break;
                case v_V_30295:
                  break;
                case v_hi_30296:
                  v_e_31189 = "extap";
                  break;
                case v_di_30297:
                  v_e_31189 = "flick";
                  break;
                case v_vi_30298:
                  v_e_31189 = "guide";
                  break;
                case v_wi_30299:
                  v_e_31189 = "attack";
                  break;
                case v_gi_30300:
                  v_e_31189 = "miss";
                  break;
                case v_mi_30301:
                  v_e_31189 = "damage";
                  break;
                case 11:
                  v_e_31189 = "metronome";
                  break;
                case v_pi_30302:
                  v_e_31189 = "slidestep";
                  break;
                case v_ki_30303:
                  v_e_31189 = "skilltrigger2";
                  break;
                default:
                  return;
              }
              if (v_t_31187 === v_V_30295) for (const v_n_31190 of v_f0_27709) v_Ae_27892.Mc("tap_" + v_n_31190, v_i_31188);else v_Ae_27892.Mc(v_e_31189, v_i_31188);
            }
          };
        }(),
        skillTrigger = function () {
          let v_s_31191 = new Map(),
            v_r_31192 = new Map(),
            v_e_31193 = new Map();
          v_s_31191.set(v_bi_30304, []), v_s_31191.set(v_yi_30305, []), v_e_31193.set(v_bi_30304, 1), v_e_31193.set(v_yi_30305, 1), v_r_31192.set(v_bi_30304, [0, 1, 2, 3]), v_r_31192.set(v_yi_30305, [0, 1, 2, 3]);
          let v_a_31194 = [];
          function v_o_31195(v_t_31199) {
            return v_t_31199 === v_ue_27682 || v_t_31199 === v_t0_27693 ? v_yi_30305 : v_t_31199 === v_ce_27678 || v_t_31199 === v_le_27675 ? v_bi_30304 : 0;
          }
          function v_l_31196(v_t_31200) {
            return v_t_31200 === v_bi_30304 ? "slide" : v_t_31200 === v_yi_30305 ? "airhold" : "";
          }
          function v_c_31197(v_t_31201) {
            let v_i_31202;
            for (v_i_31202 of v_s_31191.get(v_t_31201)) v_i_31202.Rc || v_Ae_27892.Mc(v_l_31196(v_t_31201) + "loop" + v_i_31202.id, function (v_t_31203, v_e_31204) {
              return 3 < (v_t_31203 = v_s_31191.get(v_t_31203).reduce(function (v_t_31205, v_i_31206) {
                return v_i_31206.Rc || v_i_31206.Pc != v_e_31204 ? v_t_31205 : v_t_31205 + 1;
              }, 0)) ? .55 : 3 === v_t_31203 ? .65 : 2 === v_t_31203 ? .8 : 1;
            }(v_t_31201, v_i_31202.Pc) * v_e_31193.get(v_t_31201));
          }
          function v_u_31198(v_i_31207, v_e_31208, v_n_31209) {
            (v_a_31194 = v_a_31194.filter(v_t_31210 => v_t_31210.Fi !== v_i_31207 || v_t_31210.Ae !== v_e_31208 || v_t_31210.Dc !== v_n_31209)).push({
              Fi: v_i_31207,
              Ae: v_e_31208,
              Dc: v_n_31209
            });
          }
          return {
            ri: function (v_i_31211) {
              if (!v_i_31211.qg) {
                var v_t_31212,
                  v_e_31213 = v_o_31195(v_i_31211.Fi);
                if (null !== v_e_31213 && -1 === v_s_31191.get(v_e_31213).findIndex(v_t_31215 => v_t_31215.Gc === v_i_31211.Ae)) {
                  if (4 <= v_s_31191.get(v_e_31213).length) for (; 4 <= v_s_31191.get(v_e_31213).length;) v_t_31212 = v_s_31191.get(v_e_31213).shift(), v_r_31192.get(v_e_31213).push(v_t_31212.id), v_u_31198(v_e_31213, v_t_31212.id, 2);
                  var v_n_31214 = v_r_31192.get(v_e_31213).shift();
                  void 0 !== v_n_31214 && (v_u_31198(v_e_31213, v_n_31214, 2), v_s_31191.get(v_e_31213).push({
                    id: v_n_31214,
                    Pc: v_i_31211.od,
                    Gc: v_i_31211.Ae,
                    Rc: !0
                  }), v_u_31198(v_e_31213, v_n_31214, 1));
                }
              }
            },
            oe: function () {
              let v_t_31216;
              for (v_t_31216 of v_a_31194) 1 === v_t_31216.Dc ? v_Ae_27892.dn(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae) : 2 === v_t_31216.Dc && (v_Ae_27892.n6(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae, 0, 0, 0), v_Ae_27892.Mc(v_l_31196(v_t_31216.Fi) + "loop " + v_t_31216.Ae, 0), v_Ae_27892.i6(v_l_31196(v_t_31216.Fi) + "loop" + v_t_31216.Ae));
              v_c_31197(v_bi_30304), v_c_31197(v_yi_30305), v_a_31194 = [];
            },
            Nc: function (v_i_31217, v_t_31218) {
              var v_e_31219,
                v_n_31220,
                v_r_31221 = v_o_31195(v_i_31217.Fi);
              null !== v_r_31221 && (v_e_31219 = v_s_31191.get(v_r_31221).find(v_t_31222 => v_t_31222.Gc === v_i_31217.Ae)) && (v_n_31220 = v_l_31196(v_r_31221) + "loop" + v_e_31219.id, v_e_31219.Rc !== v_t_31218) && ((v_e_31219.Rc = v_t_31218) && v_Ae_27892.n6(v_n_31220, null, 0, 375), v_c_31197(v_r_31221));
            },
            Xe: function (v_i_31223) {
              var v_t_31224, v_e_31225, v_n_31226;
              v_i_31223.qg || null !== (v_t_31224 = v_o_31195(v_i_31223.Fi)) && (v_i_31223.qg = !0, -1 !== (v_e_31225 = v_s_31191.get(v_t_31224).findIndex(v_t_31227 => v_t_31227.Gc === v_i_31223.Ae))) && (v_n_31226 = v_l_31196(v_t_31224) + "loop" + v_s_31191.get(v_t_31224)[v_e_31225].id, v_Ae_27892.n6(v_n_31226, null, 0, 375), v_r_31192.get(v_t_31224).push(v_s_31191.get(v_t_31224)[v_e_31225].id), v_s_31191.get(v_t_31224).splice(v_e_31225, 1), v_c_31197(v_t_31224));
            },
            Mc: function (v_t_31228, v_i_31229) {
              if (void 0 === v_i_31229) return v_e_31193.get(v_t_31228);
              v_e_31193.set(v_t_31228, v_i_31229);
            },
            Mt: function () {
              let v_e_31230;
              v_s_31191.forEach(function (v_t_31231, v_i_31232) {
                for (; 0 < v_t_31231.length;) v_e_31230 = v_t_31231.pop(), v_r_31192.get(v_i_31232).push(v_e_31230.id), v_Ae_27892.i6(v_l_31196(v_i_31232) + "loop" + v_e_31230.id);
              });
            }
          };
        }();
      function v_E_30309() {
        return !!v_U_30262.Y1.Rx;
      }
      function v_Ai_30310(v_t_31233) {
        let v_i_31234 = 0,
          v_e_31235 = 0,
          v_n_31236 = mathRound(v_t_31233),
          v_r_31237;
        for (v_r_31237 of v_F0_27741) {
          if (v_n_31236 < v_i_31234 + v_r_31237) break;
          v_e_31235++, v_i_31234 += v_r_31237;
        }
        return {
          Hc: v_e_31235,
          Uc: mathMax(mathRound(v_t_31233 - v_i_31234), 0)
        };
      }
      function v_xi_30311(v_t_31238) {
        var v_i_31239 = v_U_30262.q1.Tw(v_t_31238.od, v_t_31238.Lw, v_t_31238.Rw),
          v_e_31240 = v_U_30262.q1.Tw(v_U_30262.C1, v_t_31238.Lw, v_t_31238.Rw, v_t_31238.od);
        return v_U_30262.q1.xL(v_i_31239, v_i_31239, v_t_31238.CL) - v_U_30262.q1.xL(v_i_31239, v_e_31240, v_t_31238.CL);
      }
      function v_Ci_30312(v_i_31241) {
        let v_s_31242 = v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1,
          v_a_31243 = 0,
          v_o_31244 = 0,
          v_l_31245 = 0,
          v_e_31246 = 0,
          v_c_31247 = !1,
          v_u_31248 = !1;
        var v_f_31249 = inputModule.aR(),
          v___31250 = inputModule.oR(),
          v_n_31251 = inputModule.lR(),
          v_h_31252 = v_f_31249.concat(),
          v_r_31253 = v___31250.concat();
        let v_d_31254;
        for (let v_t_31279 = 0; v_t_31279 < 16; ++v_t_31279) v_U_30262.aa[v_t_31279] !== 1 / 0 && v_U_30262.aa[v_t_31279] > v_U_30262.rr && (v_h_31252[2 * v_t_31279] = !1, v_h_31252[2 * v_t_31279 + 1] = !1, v_r_31253[2 * v_t_31279] = !1, v_r_31253[2 * v_t_31279 + 1] = !1);
        let v_v_31255 = inputModule._R(),
          v_w_31256 = inputModule.hR();
        var v_g_31257 = inputModule.uR();
        for (let v_t_31280 = 0; v_t_31280 < 32; ++v_t_31280) v___31250[v_t_31280] || (v_U_30262.m7[v_t_31280] = !1);
        for (let v_t_31281 = 0; v_t_31281 < 32; ++v_t_31281) v_f_31249[v_t_31281] && (v_U_30262.la[v_t_31281] = v_s_31242);
        v_U_30262.na = 0;
        let v_m_31258,
          v_p_31259 = v_U_30262.q1.yc.$g,
          v_k_31260;
        for (let v_t_31282 = 0; v_t_31282 < v_p_31259.length; ++v_t_31282) 5 !== (v_k_31260 = v_p_31259[v_t_31282]).Ug && (v_m_31258 = v_k_31260.Fi & v_xn_27661, v_a_31243 = v_k_31260.od - v_s_31242, v_m_31258 === v_Cn_27662 && v_k_31260.Fi !== v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.Ra.Mb || v_k_31260.Fi === v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.ja.Xb || (v_k_31260.Fi === v_ce_27678 || v_k_31260.Fi === v_le_27675) && v_a_31243 <= v_U_30262.Eb.Ra.Mb || (v_k_31260.Fi === v_Kn_27687 || v_k_31260.Fi === v_qn_27689 || v_k_31260.Fi === v_Zn_27690 || v_k_31260.Fi === v_ue_27682 || v_k_31260.Fi === v_t0_27693) && v_k_31260.dw !== v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.Hb.Mb || (v_k_31260.Fi === v_Kn_27687 || v_k_31260.Fi === v_qn_27689 || v_k_31260.Fi === v_Zn_27690 || v_k_31260.Fi === v_ue_27682 || v_k_31260.Fi === v_t0_27693) && v_k_31260.dw === v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.Hb.Mb || (v_k_31260.Fi === v_Yn_27688 || v_k_31260.Fi === v_Qn_27692 || v_k_31260.Fi === v_$n_27691) && v_k_31260.dw !== v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.Ub.Mb || (v_k_31260.Fi === v_Yn_27688 || v_k_31260.Fi === v_Qn_27692 || v_k_31260.Fi === v_$n_27691) && v_k_31260.dw === v_Pn_27665 && v_a_31243 <= v_U_30262.Eb.jb.Mb || v_k_31260.Fi === v_s0_27698 && v_a_31243 <= v_U_30262.Eb.Jb.Mb) && (v_U_30262.ia.length > v_U_30262.na ? v_U_30262.ia[v_U_30262.na] = v_k_31260 : v_U_30262.ia.push(v_k_31260), ++v_U_30262.na);
        if (v_h1_27859) {
          for (let v_t_31283 = 0; v_t_31283 < v_U_30262.na; ++v_t_31283) if (v_k_31260 = v_U_30262.ia[v_t_31283], v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, !(v_k_31260.od > v_s_31242)) switch (v_k_31260.Fi) {
            case v_Kn_27687:
            case v_Yn_27688:
            case v_qn_27689:
            case v_Zn_27690:
            case v_Qn_27692:
            case v_$n_27691:
              switch (v_k_31260.Ug = 5, v_k_31260.nr = v_fe_27716, v_Y_30317(v_k_31260.Fi, v_An_27660, v_fe_27716, 0), v_k_31260.Fi) {
                case v_Kn_27687:
                case v_qn_27689:
                case v_Zn_27690:
                  judgeSound.dn(v_ci_30291), v_z_30314(7, v_e_31246, v_k_31260.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !0, v_k_31260.gw, v_e_31246);
                  break;
                case v_Yn_27688:
                case v_Qn_27692:
                case v_$n_27691:
                  judgeSound.dn(v_ui_30292), v_z_30314(8, v_e_31246, v_k_31260.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !0, v_k_31260.gw, v_e_31246);
              }
              break;
            case v_ue_27682:
            case v_t0_27693:
              v_k_31260.Ug === v_v0_27715 && (v_k_31260.Ug = 1, skillTrigger.Nc(v_k_31260, !1), judgeSound.dn(v_Si_30306)), v_De_28096(v_k_31260.We, function (v_i_31284) {
                if (5 !== v_i_31284.Ug && v_i_31284.Fi !== v_n0_27696) if (v_i_31284.Fi === v_Xn_27685 || v_i_31284.Fi === v_r0_27697) v_i_31284.od <= v_s_31242 && (v_k_31260.Ug = 5);else if (v_i_31284.Fi === v_Vn_27683 || v_i_31284.Fi === v_i0_27694) v_i_31284.od <= v_s_31242 && (v_k_31260.Ug = 5, judgeSound.dn(v_fi_30293), v_z_30314(10, v_e_31246 = 64 * (v_i_31284.ou + v_i_31284.Le / 2) - v_we_27734, v_i_31284.Le, v_fe_27716, v_i_31284.G0), v_K_30316(v_fe_27716, 0, !0, !0, v_e_31246), v_i_31284.pw || (v_i_31284.Ug = 5, v_i_31284.nr = v_fe_27716, v_Y_30317(v_i_31284.Fi, v_k_31260.Fi, v_fe_27716, 0)));else if (v_i_31284.od <= v_s_31242) if (v_i_31284.Ug = 5, v_i_31284.nr = v_fe_27716, v_e_31246 = 64 * (v_i_31284.ou + v_i_31284.Le / 2) - v_we_27734, v_i_31284.Fi === v_Wn_27684 || v_i_31284.Fi === v_e0_27695) judgeSound.dn(v_fi_30293), v_z_30314(9, v_e_31246, v_i_31284.Le, v_fe_27716, v_i_31284.G0), v_K_30316(v_fe_27716, 0, !0, !0, v_e_31246), v_z_30314(11, v_e_31246, v_i_31284.Le, v_fe_27716, v_i_31284.G0), v_i_31284.pw || v_Y_30317(v_i_31284.Fi, v_k_31260.Fi, v_fe_27716, 0);else if (v_i_31284.Fi !== v_c0_27703 || 1 !== v_i_31284.Jg) {
                  let v_t_31285 = v_k_31260.Oc(v_i_31284.od);
                  null === v_t_31285 && (v_t_31285 = {
                    rw: v_k_31260.ou,
                    aw: v_k_31260.ou + v_k_31260.Le,
                    G0: v_k_31260.G0
                  }), v_K_30316(v_fe_27716, 0, !1, !0, 64 * (v_t_31285.rw + (v_t_31285.aw - v_t_31285.rw) / 2) - v_we_27734), v_k_31260.Fi === v_ue_27682 && v_z_30314(11, 64 * (v_t_31285.rw + (v_t_31285.aw - v_t_31285.rw) / 2) - v_we_27734, v_t_31285.aw - v_t_31285.rw, v_fe_27716, v_t_31285.G0), v_i_31284.pw || v_Y_30317(v_i_31284.Fi, v_k_31260.Fi, v_fe_27716, 0);
                }
              });
              break;
            case v_s0_27698:
              v_k_31260.Ug === v_v0_27715 && (v_k_31260.Ug = 1, v_k_31260.Jg === v_h0_27711) && (v_k_31260.nr = v_fe_27716, v_Y_30317(v_k_31260.Fi, v_An_27660, v_fe_27716, 0), judgeSound.dn(v__i_30294), v_z_30314(13, v_e_31246, v_k_31260.Le, v_fe_27716, v_k_31260.G0), v_K_30316(v_fe_27716, 0, !1, !0, v_e_31246, v_k_31260.G0));
              for (let v_t_31286 = 0; v_t_31286 < v_k_31260.We.length; ++v_t_31286) {
                var v_b_31261 = v_k_31260.We[v_t_31286];
                5 !== v_b_31261.Ug && v_b_31261.od <= v_s_31242 && (v_b_31261.Fi === v_l0_27701 && (v_e_31246 = 64 * (v_b_31261.ou + v_b_31261.Le / 2) - v_we_27734, v_b_31261.Ug = 5, v_b_31261.nr = v_fe_27716, v_Y_30317(v_b_31261.Fi, v_An_27660, v_fe_27716, 0), judgeSound.dn(v__i_30294), v_z_30314(13, v_e_31246, v_b_31261.Le, v_fe_27716, v_b_31261.G0), v_K_30316(v_fe_27716, 0, !1, !0, v_e_31246, v_b_31261.G0)), v_t_31286 === v_k_31260.We.length - 1) && (v_k_31260.Ug = 5);
              }
          }
        } else for (let v_t_31287 = 0; v_t_31287 < v_U_30262.na; ++v_t_31287) switch (v_k_31260 = v_U_30262.ia[v_t_31287], v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, v_a_31243 = v_k_31260.od - v_s_31242 + v_U_30262.dI, v_k_31260.Fi) {
          case v_Kn_27687:
          case v_qn_27689:
          case v_Zn_27690:
            v_o_31244 = 0, v_l_31245 = 0, v_d_31254 = v_k_31260.dw === v_Pn_27665 ? v_U_30262.Eb.Vb : v_U_30262.Eb.Hb, v_w_31256 && !v_k_31260.mw && (v_k_31260.mw = {
              bw: v_he_27719,
              od: v_g0_27720,
              kw: !1
            }), v_a_31243 < v_d_31254.Pb ? v_l_31245 = v_k_31260.mw && v_k_31260.mw.kw ? (v_o_31244 = v_k_31260.mw.bw, v_k_31260.mw.od) : (v_o_31244 = v_he_27719, 0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Xb ? (v_k_31260.mw.bw = v__e_27718, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Kb ? (v_k_31260.mw.bw = v_w0_27717, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.qb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && 0 < v_a_31243 ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = 0, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_k_31260.mw.kw && v_k_31260.mw.bw === v_fe_27716 && v_a_31243 <= 0 ? (v_o_31244 = v_k_31260.mw.bw, v_l_31245 = v_k_31260.mw.od) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && (v_k_31260.nr = v_o_31244, v_k_31260.Ug = 5, v_K_30316(v_o_31244, v_l_31245, !0, v_k_31260.gw, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 !== v_he_27719) && (v_z_30314(7, v_e_31246, v_k_31260.Le, v_o_31244), v_o_31244 !== v__e_27718) && judgeSound.dn(v_ci_30291);
            break;
          case v_Yn_27688:
          case v_Qn_27692:
          case v_$n_27691:
            v_o_31244 = 0, v_l_31245 = 0, v_d_31254 = v_k_31260.dw === v_Pn_27665 ? v_U_30262.Eb.jb : v_U_30262.Eb.Ub, v_w_31256 && !v_k_31260.mw && (v_k_31260.mw = {
              bw: v_he_27719,
              od: v_g0_27720,
              kw: !1
            }), v_a_31243 < v_d_31254.Pb ? v_l_31245 = v_k_31260.mw && v_k_31260.mw.kw ? (v_o_31244 = v_k_31260.mw.bw, v_k_31260.mw.od) : (v_o_31244 = v_he_27719, 0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Xb ? (v_k_31260.mw.bw = v__e_27718, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Kb ? (v_k_31260.mw.bw = v_w0_27717, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.qb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && 0 < v_a_31243 ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = 0, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_k_31260.mw.kw && v_k_31260.mw.bw === v_fe_27716 && v_a_31243 <= 0 ? (v_o_31244 = v_k_31260.mw.bw, v_l_31245 = v_k_31260.mw.od) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && (v_k_31260.nr = v_o_31244, v_k_31260.Ug = 5, v_K_30316(v_o_31244, v_l_31245, !0, v_k_31260.gw, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 !== v_he_27719) && (v_z_30314(8, v_e_31246, v_k_31260.Le, v_o_31244), v_o_31244 !== v__e_27718) && judgeSound.dn(v_ui_30292);
            break;
          case v_s0_27698:
            for (let v_t_31288 = -1; v_t_31288 < v_k_31260.We.length; ++v_t_31288) {
              var v_y_31262 = -1 === v_t_31288 ? v_k_31260 : v_k_31260.We[v_t_31288];
              v_y_31262.Ug > v_v0_27715 || v_y_31262.od - v_s_31242 + v_U_30262.dI > v_U_30262.Eb.Jb.Mb || (v_y_31262.Fi === v_s0_27698 && v_k_31260.Jg === v_h0_27711 || v_y_31262.Fi === v_l0_27701 ? (v_o_31244 = 0, v_l_31245 = 0, v_a_31243 = v_y_31262.od - v_s_31242 + v_U_30262.dI, v_w_31256 && !v_y_31262.mw && (v_y_31262.mw = {
                bw: v_he_27719,
                od: v_g0_27720,
                kw: !1
              }), v_a_31243 < v_U_30262.Eb.Jb.Pb ? v_l_31245 = v_y_31262.mw && v_y_31262.mw.kw ? (v_o_31244 = v_y_31262.mw.bw, v_y_31262.mw.od) : (v_o_31244 = v_he_27719, 0) : v_y_31262.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Jb.Xb ? (v_y_31262.mw.bw = v__e_27718, v_y_31262.mw.od = v_g0_27720, v_y_31262.mw.kw = !0) : v_y_31262.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Jb.Kb ? (v_y_31262.mw.bw = v_w0_27717, v_y_31262.mw.od = v_g0_27720, v_y_31262.mw.kw = !0) : v_y_31262.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Jb.qb ? (v_y_31262.mw.bw = v_fe_27716, v_y_31262.mw.od = v_g0_27720, v_y_31262.mw.kw = !0) : v_y_31262.mw && v_v_31255 && 0 < v_a_31243 ? (v_y_31262.mw.bw = v_fe_27716, v_y_31262.mw.od = 0, v_y_31262.mw.kw = !0) : v_y_31262.mw && v_y_31262.mw.kw && v_y_31262.mw.bw === v_fe_27716 && v_a_31243 <= 0 ? (v_o_31244 = v_y_31262.mw.bw, v_l_31245 = v_y_31262.mw.od) : v_y_31262.mw && v_v_31255 && v_a_31243 >= v_U_30262.Eb.Jb.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_y_31262.mw && v_v_31255 && v_a_31243 >= v_U_30262.Eb.Jb.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_y_31262.mw && v_v_31255 && v_a_31243 >= v_U_30262.Eb.Jb.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_y_31262.mw && v_v_31255 && v_a_31243 >= v_U_30262.Eb.Jb.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && (v_e_31246 = 64 * (v_y_31262.ou + v_y_31262.Le / 2) - v_we_27734, v_y_31262.nr = v_o_31244, v_y_31262.Ug = -1 === v_t_31288 ? 1 : 5, v_K_30316(v_o_31244, v_l_31245, !1, !0, v_e_31246, v_y_31262.G0), v_Y_30317(v_y_31262.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 !== v_he_27719 && (v_z_30314(13, v_e_31246, v_y_31262.Le, v_o_31244, v_y_31262.G0), v_o_31244 !== v__e_27718) && judgeSound.dn(v__i_30294), v_t_31288 === v_k_31260.We.length - 1) && v_k_31260.Ug !== v_v0_27715 && (v_k_31260.Ug = 4)) : v_y_31262.od <= v_s_31242 + v_U_30262.dI && (v_y_31262.Ug = -1 === v_t_31288 ? 1 : 5));
            }
            if (v_k_31260.Ug > v_v0_27715) {
              let v_i_31289 = !0;
              for (let v_t_31290 = 0; v_t_31290 < v_k_31260.We.length; ++v_t_31290) if (5 !== v_k_31260.We[v_t_31290].Ug) {
                v_i_31289 = !1;
                break;
              }
              v_i_31289 && (v_k_31260.Ug = 5);
            }
            break;
          case v_ue_27682:
          case v_t0_27693:
            if (v_k_31260.Ug === v_v0_27715) v_o_31244 = 0, v_d_31254 = v_k_31260.dw === v_Pn_27665 ? v_U_30262.Eb.Vb : v_U_30262.Eb.Hb, v_w_31256 && !v_k_31260.mw && (v_k_31260.mw = {
              bw: v_he_27719,
              od: v_g0_27720,
              kw: !1
            }), v_a_31243 < v_d_31254.Pb ? v_l_31245 = v_k_31260.mw && v_k_31260.mw.kw ? (v_o_31244 = v_k_31260.mw.bw, v_k_31260.mw.od) : (v_o_31244 = v_he_27719, 0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Xb ? (v_k_31260.mw.bw = v__e_27718, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.Kb ? (v_k_31260.mw.bw = v_w0_27717, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && v_a_31243 > v_d_31254.qb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = v_g0_27720, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_v_31255 && 0 < v_a_31243 ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = 0, v_k_31260.mw.kw = !0) : v_k_31260.mw && v_k_31260.mw.kw && v_k_31260.mw.bw === v_fe_27716 && v_a_31243 <= 0 ? (v_o_31244 = v_k_31260.mw.bw, v_l_31245 = v_k_31260.mw.od) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_k_31260.mw && v_v_31255 && v_a_31243 >= v_d_31254.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && ((v_k_31260.nr = v_o_31244) === v_he_27719 ? v_k_31260.Ug = 3 : (v_k_31260.Sw = v_s_31242 + v_U_30262.dI, v_k_31260.Ug = 1, skillTrigger.Nc(v_k_31260, 3 === v_k_31260.Ug), v_o_31244 < v__e_27718 && judgeSound.dn(v_Si_30306)));else {
              var v_S_31263 = v_k_31260.Ug;
              3 === v_k_31260.Ug ? v_k_31260.Ug = v_v_31255 ? 1 : 3 : v_k_31260.Ug = v_g_31257 ? 1 : 2, v_k_31260.Fi === v_t0_27693 ? 3 !== v_S_31263 != (3 !== v_k_31260.Ug) && skillTrigger.Nc(v_k_31260, 3 === v_k_31260.Ug) : skillTrigger.Nc(v_k_31260, !(v_k_31260.Ug !== v_v0_27715 && (1 === v_k_31260.Ug || null !== v_k_31260.Sw && v_s_31242 + v_U_30262.dI - v_k_31260.Sw <= v_U_30262.Eb.t7.Db))), 1 === v_k_31260.Ug ? (v_k_31260.Sw = v_s_31242 + v_U_30262.dI, v_k_31260._k = !0) : v_k_31260.xw += v_i_31241;
              let v_t_31291 = !1;
              v_De_28096(v_k_31260.We, function (v_e_31292) {
                if (5 !== v_e_31292.Ug && v_e_31292.Fi !== v_n0_27696 && v_e_31292.od - v_s_31242 + v_U_30262.dI <= v_U_30262.Eb.Ob.Mb) {
                  if (v_o_31244 = 0, v_l_31245 = 0, v_a_31243 = v_e_31292.od - v_s_31242 + v_U_30262.dI, v_e_31292.Fi === v_Xn_27685 || v_e_31292.Fi === v_r0_27697) {
                    if (v_a_31243 <= 0) {
                      v_k_31260.Ug = 5;
                      let v_i_31293, v_e_31294;
                      v_De_28096(v_k_31260.We, function (v_t_31295) {
                        5 !== v_t_31295.Ug && v_t_31295.Fi !== v_Xn_27685 && v_t_31295.Fi !== v_n0_27696 && v_t_31295.Fi !== v_r0_27697 && (v_t_31295.nr = v_he_27719, v_t_31295.Ug = 5, null === (v_i_31293 = v_k_31260.Oc(v_t_31295.od)) && (v_i_31293 = {
                          rw: v_t_31295.ou,
                          aw: v_t_31295.ou + v_t_31295.Le
                        }), v_e_31294 = 64 * (v_i_31293.rw + (v_i_31293.aw - v_i_31293.rw) / 2) - v_we_27734, v_K_30316(v_he_27719, 0, v_t_31295.Fi !== v_c0_27703, !0, v_e_31294), v_Y_30317(v_t_31295.Fi, v_k_31260.Fi, v_he_27719, 0));
                      });
                    }
                  } else v_e_31292.Fi === v_c0_27703 ? v_a_31243 <= 0 && (v_o_31244 = 0, v_l_31245 = 0, v_o_31244 = null === v_k_31260.Sw || v_k_31260.xw > v_U_30262.Eb.t7.Qb ? v_he_27719 : v_k_31260.xw <= v_U_30262.Eb.t7.Db ? v_fe_27716 : v_k_31260.xw <= v_U_30262.Eb.t7.e7 ? v_w0_27717 : v__e_27718, v_t_31291 = !0) : (v_w_31256 && !v_e_31292.mw && (v_e_31292.mw = {
                    bw: v_he_27719,
                    od: v_g0_27720,
                    kw: !1
                  }), v_a_31243 < v_U_30262.Eb.Ob.Pb ? v_l_31245 = v_e_31292.mw && v_e_31292.mw.kw ? (v_o_31244 = v_e_31292.mw.bw, v_e_31292.mw.od) : (v_o_31244 = v_he_27719, 0) : v_e_31292.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Ob.Xb ? (v_e_31292.mw.bw = v__e_27718, v_e_31292.mw.od = v_g0_27720, v_e_31292.mw.kw = !0) : v_e_31292.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Ob.Kb ? (v_e_31292.mw.bw = v_w0_27717, v_e_31292.mw.od = v_g0_27720, v_e_31292.mw.kw = !0) : v_e_31292.mw && v_v_31255 && v_a_31243 > v_U_30262.Eb.Ob.qb ? (v_e_31292.mw.bw.bw = v_fe_27716, v_e_31292.mw.od.od = v_g0_27720, v_e_31292.mw.kw = !0) : v_e_31292.mw && v_v_31255 && 0 < v_a_31243 ? (v_e_31292.mw.bw = v_fe_27716, v_e_31292.mw.od = 0, v_e_31292.mw.kw = !0) : v_e_31292.mw && v_e_31292.mw.kw && v_e_31292.mw.bw === v_fe_27716 && v_a_31243 <= 0 ? (v_o_31244 = v_e_31292.mw.bw, v_l_31245 = v_e_31292.mw.od) : v_e_31292.mw && v_v_31255 && 3 !== v_k_31260.Ug && v_a_31243 >= v_U_30262.Eb.Ob.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_e_31292.mw && v_v_31255 && 3 !== v_k_31260.Ug && v_a_31243 >= v_U_30262.Eb.Ob.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_e_31292.mw && v_v_31255 && 3 !== v_k_31260.Ug && v_a_31243 >= v_U_30262.Eb.Ob.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_e_31292.mw && v_v_31255 && 3 !== v_k_31260.Ug && v_a_31243 >= v_U_30262.Eb.Ob.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721));
                  if (0 < v_o_31244) {
                    let v_t_31296 = v_k_31260.Oc(v_e_31292.od),
                      v_i_31297;
                    if (v_i_31297 = 64 * ((v_t_31296 = null === v_t_31296 ? {
                      rw: v_e_31292.ou,
                      aw: v_e_31292.ou + v_e_31292.Le,
                      G0: v_k_31260.G0
                    } : v_t_31296).rw + (v_t_31296.aw - v_t_31296.rw) / 2) - v_we_27734, v_e_31292.nr = v_o_31244, v_e_31292.Ug = 5, v_e_31292.Fi === v_c0_27703 && 1 === v_e_31292.Jg || (v_K_30316(v_o_31244, v_l_31245, v_e_31292.Fi !== v_c0_27703, !0, v_i_31297), v_Y_30317(v_e_31292.Fi, v_k_31260.Fi, v_o_31244, v_l_31245)), v_o_31244 === v_he_27719 ? (3 !== v_k_31260.Ug && skillTrigger.Nc(v_k_31260, !0), v_k_31260.Ug = 3) : v_e_31292.Fi === v_c0_27703 && 1 === v_e_31292.Jg || (v_e_31292.Fi !== v_Vn_27683 && v_e_31292.Fi !== v_i0_27694 && v_k_31260.Fi === v_ue_27682 && v_z_30314(11, v_i_31297, v_t_31296.aw - v_t_31296.rw, v_o_31244, v_t_31296.G0), v_e_31292.Fi !== v_c0_27703 && (v_e_31292.Fi === v_Vn_27683 || v_e_31292.Fi === v_i0_27694 ? v_z_30314(10, v_i_31297, v_t_31296.aw - v_t_31296.rw, v_o_31244, v_e_31292.G0) : v_z_30314(9, v_i_31297, v_t_31296.aw - v_t_31296.rw, v_o_31244, v_e_31292.G0), v_o_31244 !== v__e_27718) && judgeSound.dn(v_fi_30293)), v_e_31292.Fi === v_Vn_27683 || v_e_31292.Fi === v_i0_27694) {
                      v_k_31260.Ug = 5;
                      let v_i_31298, v_e_31299;
                      v_De_28096(v_k_31260.We, function (v_t_31300) {
                        5 === v_t_31300.Ug || v_t_31300.Fi === v_Xn_27685 || v_t_31300.Fi === v_n0_27696 || v_t_31300.Fi === v_r0_27697 || v_t_31300.Fi === v_c0_27703 && 1 === v_t_31300.Jg || (v_t_31300.nr = v_he_27719, v_t_31300.Ug = 5, null === (v_i_31298 = v_k_31260.Oc(v_t_31300.od)) && (v_i_31298 = {
                          rw: v_t_31300.ou,
                          aw: v_t_31300.ou + v_t_31300.Le
                        }), v_e_31299 = 64 * (v_i_31298.rw + (v_i_31298.aw - v_i_31298.rw) / 2) - v_we_27734, v_K_30316(v_he_27719, 0, v_t_31300.Fi !== v_c0_27703, !0, v_e_31299), v_Y_30317(v_t_31300.Fi, v_k_31260.Fi, v_he_27719, 0));
                      });
                    }
                  }
                }
              }), v_t_31291 && (v_k_31260._k && (v_k_31260.xw = 0), v_k_31260._k = !1);
            }
        }
        for (let v_t_31301 = v_U_30262.na - 1; 0 <= v_t_31301; --v_t_31301) if ((v_k_31260 = v_U_30262.ia[v_t_31301]).Fi === v_ce_27678 || v_k_31260.Fi === v_le_27675) {
          let v_r_31302 = !1;
          if (v_k_31260.Ug === v_v0_27715) {
            v_c_31247 = !1, v_a_31243 = v_k_31260.od - v_s_31242;
            for (let v_t_31303 = 0; v_t_31303 < 32; v_t_31303++) v_k_31260.ou <= mathFloor(v_t_31303 / 2) && v_k_31260.ou + v_k_31260.Le > mathFloor(v_t_31303 / 2) && v_h_31252[v_t_31303] && v_a_31243 <= v_k_31260.jg[mathFloor(v_t_31303 / 2)] && v_a_31243 >= mathMax(v_k_31260.Hg[mathFloor(v_t_31303 / 2)], v_U_30262.Eb.Ra.Pb) && (v_c_31247 = !0, v_U_30262.m7[v_t_31303] = !0);
            v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, v_o_31244 = 0, v_l_31245 = 0, v_k_31260.Fi !== v_ce_27678 && v_k_31260.Fi !== v_le_27675 || 1 !== v_k_31260.Jg ? (v_a_31243 < v_U_30262.Eb.Ra.Pb || v_a_31243 < v_k_31260.yw ? (v_o_31244 = v_he_27719, v_l_31245 = 0) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.Xb ? (v_o_31244 = v__e_27718, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.Kb ? (v_o_31244 = v_w0_27717, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.qb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && (v_K_30316(v_k_31260.nr = v_o_31244, v_l_31245, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 === v_he_27719 ? (v_k_31260.Ug = 3, judgeSound.dn(v_gi_30300)) : (v_k_31260.Ug = 1, v_k_31260.Sw = v_s_31242, skillTrigger.Nc(v_k_31260, !1), v_z_30314(1, v_e_31246, v_k_31260.Le, v_o_31244), v_Ri_30319(v_k_31260, v_s_31242), v_o_31244 === v__e_27718 ? judgeSound.dn(v_wi_30299) : v_r_31302 = !0))) : (v_a_31243 < v_U_30262.Eb.Ra.Pb || v_a_31243 < v_k_31260.yw ? v_o_31244 = v_he_27719 : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Pb && (v_o_31244 = v_fe_27716), 0 < v_o_31244 && (v_K_30316(v_k_31260.nr = v_o_31244, v_l_31245, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_k_31260.Yg, v_o_31244, v_l_31245), v_o_31244 === v_he_27719 ? (v_k_31260.Ug = 3, judgeSound.dn(v_gi_30300)) : (v_k_31260.Ug = 1, v_k_31260.Sw = v_s_31242, skillTrigger.Nc(v_k_31260, !1), v_Ii_30315(v_k_31260.Yg, v_k_31260.od), v_z_30314(v_d0_27714, v_e_31246, v_k_31260.Le, v_fe_27716), v_Ri_30319(v_k_31260, v_s_31242), v_r_31302 = !0, judgeSound.dn(v_hi_30296))));
          }
          if (v_k_31260.Ug !== v_v0_27715) {
            let v_t_31304 = v_k_31260.Oc(v_s_31242);
            (v_t_31304 = null === v_t_31304 ? {
              rw: v_k_31260.ou,
              aw: v_k_31260.ou + v_k_31260.Le,
              cr: v_k_31260
            } : v_t_31304).rw = mathFloor(v_t_31304.rw), v_t_31304.aw = mathCeil(v_t_31304.aw), v_c_31247 = !1, v_u_31248 = !1, v_k_31260.i7(v_s_31242 - v_U_30262.Eb.Da.d7, v_s_31242 - v_U_30262.Eb.Da.v7), v_D_31274 = v_M_31272 = v_E_31273 = v_R_31270 = v_L_31271 = v_P_31269 = v_I_31268 = v_T_31267 = v_C_31266 = v_x_31265 = v_A_31264 = void 0;
            var v_A_31264 = v_k_31260,
              v_x_31265 = v_s_31242,
              v_C_31266 = v_f_31249,
              v_T_31267 = v___31250;
            if (v_A_31264.Fi === v_le_27675) for (let v_t_31307 = 0; v_t_31307 < 32; v_t_31307++) v_A_31264.ou <= mathFloor(v_t_31307 / 2) && v_A_31264.ou + v_A_31264.Le > mathFloor(v_t_31307 / 2) && (v_C_31266[v_t_31307] || v_T_31267[v_t_31307] && v_A_31264.Iw + v_U_30262.Eb.Ra.Mb >= v_x_31265) && (v_U_30262.m7[v_t_31307] = !0);else {
              var v_I_31268 = mathMax(v_x_31265 - v_U_30262.Eb.Da.g7, v_A_31264.od),
                v_P_31269 = v_x_31265 - v_U_30262.Eb.Da.w7;
              let v_i_31308 = 16,
                v_e_31309 = 0,
                v_n_31310 = v_A_31264;
              var v_R_31270,
                v_L_31271 = v_A_31264.We;
              let v_r_31311 = !1;
              for (let v_t_31312 = 0; v_t_31312 < v_L_31271.length; ++v_t_31312) if ((v_R_31270 = v_L_31271[v_t_31312]).Fi !== v_c0_27703) {
                if (!v_r_31311 && v_R_31270.od >= v_I_31268 && (v_E_31273 = mathMin(mathMax((v_I_31268 - v_n_31310.od) / (v_R_31270.od - v_n_31310.od), 0), 1), v_M_31272 = v_Ee_28084(v_n_31310.ou + v_n_31310.Le / 2, v_R_31270.ou + v_R_31270.Le / 2, v_E_31273), v_E_31273 = v_Ee_28084(v_n_31310.Le, v_R_31270.Le, v_E_31273), v_E_31273 = v_Ee_28084(v_U_30262.Eb.Da.Le[mathFloor(v_E_31273) - 1], v_U_30262.Eb.Da.Le[mathCeil(v_E_31273) - 1], v_E_31273 - mathFloor(v_E_31273)), v_i_31308 = v_M_31272 - v_E_31273 / 2, v_e_31309 = v_M_31272 + v_E_31273 / 2, v_r_31311 = !0), v_r_31311) {
                  if (v_R_31270.od >= v_P_31269) {
                    var v_M_31272 = mathMin(mathMax((v_P_31269 - v_n_31310.od) / (v_R_31270.od - v_n_31310.od), 0), 1),
                      v_E_31273 = v_Ee_28084(v_n_31310.ou + v_n_31310.Le / 2, v_R_31270.ou + v_R_31270.Le / 2, v_M_31272),
                      v_D_31274 = v_Ee_28084(v_n_31310.Le, v_R_31270.Le, v_M_31272),
                      v_D_31274 = v_Ee_28084(v_U_30262.Eb.Da.Le[mathFloor(v_D_31274) - 1], v_U_30262.Eb.Da.Le[mathCeil(v_D_31274) - 1], v_D_31274 - mathFloor(v_D_31274));
                    v_i_31308 = mathMin(v_i_31308, v_E_31273 - v_D_31274 / 2), v_e_31309 = mathMax(v_e_31309, v_E_31273 + v_D_31274 / 2);
                    break;
                  }
                  v_D_31274 = v_Ee_28084(v_U_30262.Eb.Da.Le[mathFloor(v_R_31270.Le) - 1], v_U_30262.Eb.Da.Le[mathCeil(v_R_31270.Le) - 1], v_R_31270.Le - mathFloor(v_R_31270.Le));
                  v_i_31308 = mathMin(v_i_31308, v_R_31270.ou + v_R_31270.Le / 2 - v_D_31274 / 2), v_e_31309 = mathMax(v_e_31309, v_R_31270.ou + v_R_31270.Le / 2 + v_D_31274 / 2);
                }
                v_n_31310 = v_R_31270;
              }
              v_i_31308 = mathRound(v_i_31308), v_e_31309 = mathRound(v_e_31309);
              for (let v_t_31313 = 0; v_t_31313 < 32; v_t_31313++) v_i_31308 <= mathFloor(v_t_31313 / 2) && v_e_31309 > mathFloor(v_t_31313 / 2) && (v_C_31266[v_t_31313] || v_T_31267[v_t_31313] && v_A_31264.Iw + v_U_30262.Eb.Ra.Mb >= v_x_31265) && (v_U_30262.m7[v_t_31313] = !0);
            }
            for (let v_t_31314 = 0; v_t_31314 < 16; v_t_31314++) v_k_31260.n7[v_t_31314] && (v_U_30262.m7[2 * v_t_31314] || v_U_30262.m7[2 * v_t_31314 + 1] || v_s_31242 - v_U_30262.la[2 * v_t_31314] < v_U_30262.Eb.Ra.Mb || v_s_31242 - v_U_30262.la[2 * v_t_31314 + 1] < v_U_30262.Eb.Ra.Mb) && ((v___31250[2 * v_t_31314] || v___31250[2 * v_t_31314 + 1]) && (v_u_31248 = !0), v_f_31249[2 * v_t_31314] || v_f_31249[2 * v_t_31314 + 1]) && (v_c_31247 = !0);
            3 === v_k_31260.Ug || 2 === v_k_31260.Ug ? v_k_31260.Ug = v_c_31247 ? 1 : 3 : v_k_31260.Ug = v_u_31248 ? 1 : 2, skillTrigger.Nc(v_k_31260, !(v_k_31260.Ug !== v_v0_27715 && (1 === v_k_31260.Ug || null !== v_k_31260.Sw && v_s_31242 - v_k_31260.Sw <= v_U_30262.Eb.Fb.Db))), 1 === v_k_31260.Ug ? (v_k_31260.Sw = v_s_31242, v_k_31260._k = !0) : v_k_31260.xw += v_i_31241;
            let v_e_31305 = v_k_31260.nr,
              v_n_31306 = !1;
            v_De_28096(v_k_31260.We, function (v_i_31315) {
              if (5 !== v_i_31315.Ug && v_i_31315.Fi !== v_On_27681 && v_i_31315.od - v_s_31242 + v_U_30262.Eb.Fb.hP <= 0) if (v_a_31243 = v_i_31315.od - v_s_31242 + v_U_30262.Eb.Fb.hP, v_i_31315.pw) v_a_31243 <= 0 && (v_i_31315.Ug = 5, v_i_31315.Fi !== v_jn_27680 && v_i_31315.Fi !== v_Jn_27679 && v_i_31315.Fi !== v_Un_27676 || (v_i_31315.nr = v_e_31305, v_i_31315.nr < v__e_27718 && (judgeSound.dn(v_pi_30302), v_r_31302 = !1)), v_i_31315.Fi !== v_Jn_27679 && v_i_31315.Fi !== v_Un_27676 || (v_k_31260.Ug = 5));else {
                v_o_31244 = 0, v_l_31245 = 0, v_i_31315.Fi !== v_Jn_27679 && v_i_31315.Fi !== v_Un_27676 || (v_k_31260.xw -= v_U_30262.Eb.Fb.dP), v_o_31244 = null === v_k_31260.Sw || v_k_31260.xw > v_U_30262.Eb.Fb.Qb ? v_he_27719 : v_k_31260.xw <= v_U_30262.Eb.Fb.Db ? v_fe_27716 : v_k_31260.xw <= v_U_30262.Eb.Fb.r7 ? v_w0_27717 : v__e_27718, v_n_31306 = !0, v_i_31315.nr = v_o_31244, v_i_31315.Ug = 5;
                let v_t_31316 = v_k_31260.Oc(v_i_31315.od);
                null === v_t_31316 && (v_t_31316 = {
                  rw: v_i_31315.ou,
                  aw: v_i_31315.ou + v_i_31315.Le
                }), v_K_30316(v_o_31244, v_l_31245, !1, !1, 64 * (v_t_31316.rw + (v_t_31316.aw - v_t_31316.rw) / 2) - v_we_27734), v_Y_30317(v_i_31315.Fi, v_k_31260.Fi, v_o_31244, v_l_31245), v_o_31244 !== v_he_27719 && v_z_30314(6, 64 * (v_t_31316.rw + (v_t_31316.aw - v_t_31316.rw) / 2) - v_we_27734, v_t_31316.aw - v_t_31316.rw, v_o_31244), v_o_31244 < v__e_27718 && (v_i_31315.Fi === v_jn_27680 || v_i_31315.Fi === v_Jn_27679 || v_i_31315.Fi === v_Un_27676) && (judgeSound.dn(v_pi_30302), v_r_31302 = !1), v_i_31315.Fi !== v_c0_27703 && v_i_31315.Fi !== v_jn_27680 && (v_k_31260.Ug = 5);
              }
              v_i_31315.Fi === v_On_27681 || v_i_31315.pw || (v_e_31305 = v_i_31315.nr);
            }), v_n_31306 && (v_k_31260._k && (v_k_31260.xw = 0), v_k_31260._k = !1);
          }
          v_r_31302 && judgeSound.dn(v_V_30295);
        }
        for (let v_i_31317 = 1; v_i_31317 < 17; v_i_31317++) for (let v_t_31318 = v_U_30262.na - 1; 0 <= v_t_31318; --v_t_31318) if (v_k_31260 = v_U_30262.ia[v_t_31318], v__0_27710(v_k_31260.Fi) && v_k_31260.Le === v_i_31317) {
          v_c_31247 = !1, v_a_31243 = v_k_31260.od - v_s_31242;
          for (let v_t_31319 = 0; v_t_31319 < 32; v_t_31319++) if (v_k_31260.ou <= mathFloor(v_t_31319 / 2) && v_k_31260.ou + v_k_31260.Le > mathFloor(v_t_31319 / 2) && v_h_31252[v_t_31319] && v_a_31243 <= v_k_31260.jg[mathFloor(v_t_31319 / 2)] && v_a_31243 >= mathMax(v_k_31260.Hg[mathFloor(v_t_31319 / 2)], v_U_30262.Eb.Ra.Pb)) {
            v_c_31247 = !0;
            break;
          }
          if (v_c_31247) for (let v_t_31320 = v_k_31260.ou; v_t_31320 < v_k_31260.ou + v_k_31260.Le; ++v_t_31320) v_h_31252[2 * v_t_31320] = !1, v_h_31252[2 * v_t_31320 + 1] = !1;
          v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, v_o_31244 = 0, v_a_31243 < v_U_30262.Eb.Ra.Pb || v_a_31243 < v_k_31260.yw ? v_o_31244 = v_he_27719 : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Pb && (v_o_31244 = v_fe_27716), 0 < v_o_31244 && (v_k_31260.Ug = 5, v_K_30316(v_k_31260.nr = v_o_31244, 0, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 === v_he_27719 ? judgeSound.dn(v_gi_30300) : (judgeSound.dn(v_V_30295), judgeSound.dn(v_hi_30296), v_z_30314(v_d0_27714, v_e_31246, v_k_31260.Le, v_fe_27716), v_Ii_30315(v_k_31260.Fi, v_k_31260.od), v_Ri_30319(v_k_31260, v_s_31242)));
        }
        for (let v_t_31321 = v_U_30262.na - 1; 0 <= v_t_31321; --v_t_31321) if (v_k_31260 = v_U_30262.ia[v_t_31321], v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, v_a_31243 = v_k_31260.od - v_s_31242, v_o_31244 = 0, v_l_31245 = 0, v_k_31260.Fi === v_Tn_27663) {
          v_c_31247 = !1;
          for (let v_t_31322 = 0; v_t_31322 < 32; v_t_31322++) if (v_k_31260.ou <= mathFloor(v_t_31322 / 2) && v_k_31260.ou + v_k_31260.Le > mathFloor(v_t_31322 / 2) && v_h_31252[v_t_31322] && v_a_31243 <= v_k_31260.jg[mathFloor(v_t_31322 / 2)] && v_a_31243 >= mathMax(v_k_31260.Hg[mathFloor(v_t_31322 / 2)], v_U_30262.Eb.Ra.Pb)) {
            v_c_31247 = !0;
            break;
          }
          if (v_c_31247) for (let v_t_31323 = v_k_31260.ou; v_t_31323 < v_k_31260.ou + v_k_31260.Le; ++v_t_31323) v_h_31252[2 * v_t_31323] = !1, v_h_31252[2 * v_t_31323 + 1] = !1;
          v_a_31243 < v_U_30262.Eb.Ra.Pb || v_a_31243 < v_k_31260.yw ? (v_o_31244 = v_he_27719, v_l_31245 = 0) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.Xb ? (v_o_31244 = v__e_27718, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.Kb ? (v_o_31244 = v_w0_27717, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.Ra.qb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_g0_27720) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Yb ? (v_o_31244 = v_fe_27716, v_l_31245 = 0) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Zb ? (v_o_31244 = v_fe_27716, v_l_31245 = v_m0_27721) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.$b ? (v_o_31244 = v_w0_27717, v_l_31245 = v_m0_27721) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.Ra.Pb && (v_o_31244 = v__e_27718, v_l_31245 = v_m0_27721), 0 < v_o_31244 && (v_k_31260.Ug = 5, v_K_30316(v_k_31260.nr = v_o_31244, v_l_31245, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_o_31244 === v_he_27719 ? judgeSound.dn(v_gi_30300) : (v_z_30314(1, v_e_31246, v_k_31260.Le, v_o_31244), v_Ri_30319(v_k_31260, v_s_31242), v_o_31244 === v__e_27718 ? judgeSound.dn(v_wi_30299) : judgeSound.dn(v_V_30295)));
        } else if (v_k_31260.Fi === v_Pn_27665) {
          if (v_k_31260.mw || (v_k_31260.mw = {
            Aw: 0,
            GI: !1,
            UI: 0,
            bw: 0,
            od: 0,
            HI: !1,
            JI: !1
          }), !v_k_31260.mw.HI) {
            v_c_31247 = !1;
            for (let v_t_31324 = 0; v_t_31324 < 32; v_t_31324++) if (v_k_31260.ou <= mathFloor(v_t_31324 / 2) && v_k_31260.ou + v_k_31260.Le > mathFloor(v_t_31324 / 2) && v_h_31252[v_t_31324] && v_a_31243 <= v_k_31260.jg[mathFloor(v_t_31324 / 2)] && v_a_31243 >= mathMax(v_k_31260.Hg[mathFloor(v_t_31324 / 2)], v_U_30262.Eb.Ra.Pb)) {
              v_c_31247 = !0;
              break;
            }
            if (v_c_31247) for (let v_t_31325 = v_k_31260.ou; v_t_31325 < v_k_31260.ou + v_k_31260.Le; ++v_t_31325) v_h_31252[2 * v_t_31325] = !1, v_h_31252[2 * v_t_31325 + 1] = !1;
            v_a_31243 < v_U_30262.Eb.ja.a7 || v_a_31243 < v_k_31260.yw ? (v_o_31244 = v_he_27719, v_l_31245 = 0) : v_c_31247 && v_a_31243 <= v_U_30262.Eb.ja.Nb && (v_k_31260.mw.HI = !0, judgeSound.dn(v_V_30295));
          }
          {
            var v_F_31275 = v_U_30262.Eb.ja.Le[v_k_31260.Le - 1],
              v_B_31276 = v_k_31260.ou + v_k_31260.Le / 2,
              v_N_31277 = v_B_31276 - v_F_31275 / 2,
              v_G_31278 = v_B_31276 + v_F_31275 / 2;
            let v_i_31326 = 0,
              v_e_31327 = 0;
            v_c_31247 = !1;
            for (let v_t_31328 = 0; v_t_31328 < 32; v_t_31328++) v_N_31277 <= mathFloor(v_t_31328 / 2) && v_G_31278 > mathFloor(v_t_31328 / 2) && v___31250[v_t_31328] && (v_i_31326 += mathFloor(v_t_31328 / 2), v_e_31327++);
            0 < v_e_31327 ? (v_B_31276 = v_i_31326 / v_e_31327, v_k_31260.mw.JI ? v_k_31260.mw.UI += mathAbs(v_B_31276 - v_k_31260.mw.Aw) : (v_k_31260.mw.Aw = v_B_31276, v_k_31260.mw.JI = !0), v_k_31260.mw.UI >= v_U_30262.Eb.ja.jI[v_k_31260.Le - 1] && v_B_31276 !== v_k_31260.mw.Aw && (v_c_31247 = !0, v_k_31260.mw.GI = v_B_31276 < v_k_31260.mw.Aw, v_k_31260.mw.Aw = v_B_31276)) : (0 === v_k_31260.ou && (v_n_31251[0] || v_n_31251[1]) || v_k_31260.ou + v_k_31260.Le === 16 && (v_n_31251[30] || v_n_31251[31])) && (v_c_31247 = !0), 0 === v_k_31260.mw.bw && v_a_31243 < v_U_30262.Eb.ja.$b ? (v_k_31260.mw.bw = v__e_27718, v_k_31260.mw.od = v_m0_27721) : v_c_31247 && v_a_31243 > v_U_30262.Eb.ja.Xb ? (v_k_31260.mw.bw = v__e_27718, v_k_31260.mw.od = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.ja.Kb ? (v_k_31260.mw.bw = v_w0_27717, v_k_31260.mw.od = v_g0_27720) : v_c_31247 && v_a_31243 > v_U_30262.Eb.ja.qb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = v_g0_27720) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.ja.Yb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = 0) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.ja.Zb ? (v_k_31260.mw.bw = v_fe_27716, v_k_31260.mw.od = v_m0_27721) : v_c_31247 && v_a_31243 >= v_U_30262.Eb.ja.$b && (v_k_31260.mw.bw = v_w0_27717, v_k_31260.mw.od = v_m0_27721);
          }
          (0 === v_k_31260.mw.od || v_k_31260.mw.od === v_m0_27721 || v_a_31243 < v_U_30262.Eb.ja.$b) && v_k_31260.mw.HI && 0 < v_k_31260.mw.bw && (v_o_31244 = v_k_31260.mw.bw, v_l_31245 = v_k_31260.mw.od), 0 < v_o_31244 && (v_k_31260.Ug = 5, v_K_30316(v_k_31260.nr = v_o_31244, v_l_31245, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, v_l_31245), v_Ri_30319(v_k_31260, v_s_31242), v_o_31244 < v__e_27718) && (v_k_31260.mw.GI ? v_z_30314(3, v_e_31246, v_k_31260.Le, v_o_31244) : v_z_30314(4, v_e_31246, v_k_31260.Le, v_o_31244), judgeSound.dn(v_di_30297));
        }
        for (let v_t_31329 = v_U_30262.na - 1; 0 <= v_t_31329; --v_t_31329) if ((v_k_31260 = v_U_30262.ia[v_t_31329]).Fi === v_Rn_27666) {
          v_c_31247 = !1;
          let v_i_31330 = 0;
          for (let v_t_31331 = 0; v_t_31331 < 32; v_t_31331++) if (v_k_31260.ou <= mathFloor(v_t_31331 / 2) && v_k_31260.ou + v_k_31260.Le > mathFloor(v_t_31331 / 2) && v_r_31253[v_t_31331]) {
            v_c_31247 = !0, v_i_31330 = mathFloor(v_t_31331 / 2);
            break;
          }
          v_e_31246 = 64 * (v_k_31260.ou + v_k_31260.Le / 2) - v_we_27734, v_a_31243 = v_k_31260.od - v_s_31242, v_o_31244 = 0, v_a_31243 < v_U_30262.Eb.zb.Wb ? v_o_31244 = v_fe_27716 : v_c_31247 && v_a_31243 <= v_U_30262.Eb.zb.o7 && (v_o_31244 = v_he_27719), 0 < v_o_31244 && (v_k_31260.Ug = 5, v_K_30316(v_k_31260.nr = v_o_31244, 0, !1, !1, v_e_31246), v_Y_30317(v_k_31260.Fi, v_An_27660, v_o_31244, 0), v_o_31244 !== v_he_27719 ? (v_z_30314(1, v_e_31246, v_k_31260.Le, v_o_31244), judgeSound.dn(v_V_30295)) : (v_z_30314(12, 64 * (v_i_31330 + .5) - v_we_27734, 1, v_o_31244), v_Ii_30315(v_k_31260.Fi, v_k_31260.od), v_Ri_30319(v_k_31260, v_s_31242), judgeSound.dn(v_mi_30301)));
        }
      }
      function v_Ti_30313() {
        var v_i_31332,
          v_e_31333,
          v_n_31334,
          v_r_31335 = v_U_30262.rr + v_U_30262.S1 - v_U_30262.m1,
          v_s_31336 = v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1;
        let v_a_31337 = v_U_30262.q1.yc.$g,
          v_o_31338,
          v_l_31339;
        for (let v_t_31340 = 0; v_t_31340 < v_a_31337.length; ++v_t_31340) if (v_i_31332 = (v_o_31338 = v_a_31337[v_t_31340]).Fi & v_xn_27661, v_o_31338.Fi === v_ce_27678 || v_o_31338.Fi === v_le_27675 || v_o_31338.Fi === v_ue_27682 || v_o_31338.Fi === v_t0_27693) {
          v_o_31338.od - v_U_30262.Eb.Fb.dP <= v_s_31336 && !v_o_31338.Qg && (v_o_31338.Fi === v_ce_27678 && (v_e_31333 = v_o_31338, v_n_31334 = void 0, (v_n_31334 = v_U_30262.da.Vc()).cr = v_e_31333, v_n_31334.ue()), skillTrigger.ri(v_o_31338), 1 === v_o_31338.Ug && skillTrigger.Nc(v_o_31338, !1), v_o_31338.Qg = !0), v_o_31338.od <= v_r_31335 && !v_o_31338.tw && (v_o_31338.Fi !== v_ce_27678 && v_o_31338.Fi !== v_le_27675 || judgeSound.dn(v_vi_30298), v_o_31338.tw = !0);
          for (let v_t_31341 = 0; v_t_31341 < v_o_31338.We.length; ++v_t_31341) ((v_l_31339 = v_o_31338.We[v_t_31341]).Fi === v_Jn_27679 || v_l_31339.Fi === v_Un_27676 || v_l_31339.Fi === v_Vn_27683 || v_l_31339.Fi === v_Xn_27685 || v_l_31339.Fi === v_i0_27694 || v_l_31339.Fi === v_r0_27697) && v_l_31339.od <= v_r_31335 && !v_l_31339.tw && skillTrigger.Xe(v_o_31338), (v_l_31339.Fi === v_jn_27680 || v_l_31339.Fi === v_Jn_27679 || v_l_31339.Fi === v_Un_27676 || v_l_31339.Fi === v_Wn_27684 || v_l_31339.Fi === v_Vn_27683 || v_l_31339.Fi === v_e0_27695 || v_l_31339.Fi === v_i0_27694) && v_l_31339.od <= v_r_31335 && !v_l_31339.tw && (judgeSound.dn(v_vi_30298), v_l_31339.tw = !0);
        } else if (v_o_31338.Fi === v_s0_27698) {
          v_o_31338.Jg === v_h0_27711 && v_o_31338.od <= v_r_31335 && !v_o_31338.tw && (judgeSound.dn(v_vi_30298), v_o_31338.tw = !0);
          for (let v_t_31342 = 0; v_t_31342 < v_o_31338.We.length; ++v_t_31342) (v_l_31339 = v_o_31338.We[v_t_31342]).Fi === v_l0_27701 && v_l_31339.od <= v_r_31335 && !v_l_31339.tw && (judgeSound.dn(v_vi_30298), v_l_31339.tw = !0);
        } else v_i_31332 === v_Cn_27662 && v_o_31338.Fi !== v_Rn_27666 ? v_o_31338.od <= v_r_31335 && !v_o_31338.tw && (judgeSound.dn(v_vi_30298), v_o_31338.tw = !0) : 161 === v_o_31338.Fi && v_o_31338.od <= v_r_31335 && !v_o_31338.tw && (judgeSound.dn(11), v_o_31338.tw = !0);
        skillTrigger.oe();
      }
      function v_z_30314(v_t_31343, v_i_31344, v_e_31345, v_n_31346, v_r_31347) {
        var v_s_31348;
        v_t_31343 === v_d0_27714 && -1 !== v_U_30262._a.Zl().findIndex(v_t_31349 => v_t_31349.Fi === v_d0_27714 && renderer.xt() == v_t_31349.rr && mathAbs(v_t_31349.ir - v_i_31344) < .0625) || ((v_s_31348 = v_U_30262._a.Vc()).Fi = v_t_31343, v_s_31348.ir = v_i_31344, v_s_31348.Le = v_e_31345, v_s_31348.nr = v_n_31346, v_s_31348.G0 = v_r_31347, v_s_31348.ue());
      }
      function v_Ii_30315(v_i_31350, v_e_31351) {
        var v_t_31352;
        -1 === v_U_30262.ha.Zl().findIndex(v_t_31353 => v_t_31353.lr && (v_t_31353.w8 === v_e_31351 || v_t_31353.Fi === v_i_31350 && (renderer.xt() - v_t_31353.rr) / 1e3 < .125)) && ((v_t_31352 = v_U_30262.ha.Vc()).w8 = v_e_31351, v_t_31352.Fi = v_i_31350, v_t_31352.ue());
      }
      function v_K_30316(v_t_31354, v_i_31355, v_e_31356, v_n_31357, v_r_31358, v_s_31359) {
        var v_a_31360 = v_U_30262.va.Vc();
        v_a_31360.Fi = v_t_31354, v_a_31360.ur = v_e_31356, v_a_31360._r = v_n_31357, v_a_31360.ir = v_r_31358, v_a_31360.G0 = void 0 !== v_s_31359 ? v_s_31359 : 0, v_a_31360.ue(), (v_t_31354 !== v_fe_27716 || v_U_30262.G1 !== v_p0_27722 && v_U_30262.G1 !== v_k0_27723) && (v_t_31354 !== v_w0_27717 || v_U_30262.j1 !== v_p0_27722 && v_U_30262.j1 !== v_k0_27723) && (v_t_31354 !== v__e_27718 || v_U_30262.N1 !== v_p0_27722 && v_U_30262.N1 !== v_k0_27723) || (v_a_31360.Fi |= v_i_31355), (v_t_31354 !== v_fe_27716 || v_U_30262.G1 !== v_b0_27724 && v_U_30262.G1 !== v_k0_27723) && (v_t_31354 !== v_w0_27717 || v_U_30262.j1 !== v_b0_27724 && v_U_30262.j1 !== v_k0_27723) && (v_t_31354 !== v__e_27718 || v_U_30262.N1 !== v_b0_27724 && v_U_30262.N1 !== v_k0_27723) || (v_a_31360.Fi &= 61440);
      }
      function v_Y_30317(v_e_31361, v_n_31362, v_r_31363, v_s_31364) {
        if (!v_U_30262.Ta.wr) {
          v_n_31362 !== v_ce_27678 && v_le_27675;
          var v_a_31365 = v_Ai_30310(v_U_30262.Ta.yr.Cr);
          let v_t_31366 = 0,
            v_i_31367 = (v_U_30262.Ta.vr++, (v_e_31361 & v_xn_27661) !== v_Cn_27662 && (v_e_31361 & v_xn_27661) !== v_Hn_27677 && (v_e_31361 & v_xn_27661) !== v_Gn_27674 && v_n_31362 !== v_ce_27678 && v_n_31362 !== v_le_27675 || v_U_30262.Ta.gr++, v_r_31363 === v__e_27718 ? (++v_U_30262.Ta.Tr.Fr, ++v_U_30262.Ta.pr, v_t_31366 = 50) : v_r_31363 === v_w0_27717 ? (++v_U_30262.Ta.Tr.Er, ++v_U_30262.Ta.pr, v_t_31366 = 100) : v_r_31363 === v_fe_27716 ? (++v_U_30262.Ta.Tr.Lr, ++v_U_30262.Ta.pr, v_t_31366 = 101) : v_r_31363 === v_he_27719 && (++v_U_30262.Ta.Tr.Br, v_U_30262.Ta.pr = 0, v_t_31366 = 0), v_e_31361 === v_Tn_27663 || v__0_27710(v_e_31361) || v_e_31361 === v_Rn_27666 || v_e_31361 === v_ce_27678 || v_e_31361 === v_le_27675 ? (v_U_30262.Ta.Mr.Rr += 0 < v_t_31366 ? 1 : 0, v_U_30262.Ta.Mr.Pr += v_t_31366, v_r_31363 === v__e_27718 ? ++v_U_30262.Ta.R5.P5 : v_r_31363 === v_w0_27717 ? ++v_U_30262.Ta.R5.D5 : v_r_31363 === v_fe_27716 ? ++v_U_30262.Ta.R5.M5 : v_r_31363 === v_he_27719 && ++v_U_30262.Ta.R5.G5, v_s_31364 === v_g0_27720 ? (v_U_30262.Ta.Jr.Wr++, v_r_31363 === v__e_27718 ? v_U_30262.Ta.Jr.zr++ : v_r_31363 === v_w0_27717 ? v_U_30262.Ta.Jr.Xr++ : v_r_31363 === v_fe_27716 && v_U_30262.Ta.Jr.Zr++) : v_s_31364 === v_m0_27721 ? (v_U_30262.Ta.Jr.Kr++, v_r_31363 === v__e_27718 ? v_U_30262.Ta.Jr.Qr++ : v_r_31363 === v_w0_27717 ? v_U_30262.Ta.Jr.qr++ : v_r_31363 === v_fe_27716 && v_U_30262.Ta.Jr.$r++) : v_r_31363 === v_fe_27716 && v_U_30262.Ta.Jr.Yr++) : v_n_31362 === v_ce_27678 ? (v_U_30262.Ta.Mr.Dr += 0 < v_t_31366 ? 1 : 0, v_U_30262.Ta.Mr.Gr += v_t_31366, v_r_31363 === v__e_27718 ? ++v_U_30262.Ta.R5.H5 : v_r_31363 === v_w0_27717 ? ++v_U_30262.Ta.R5.j5 : v_r_31363 === v_fe_27716 ? ++v_U_30262.Ta.R5.N5 : v_r_31363 === v_he_27719 && ++v_U_30262.Ta.R5.U5) : v_n_31362 === v_le_27675 ? (v_U_30262.Ta.Mr.jr += 0 < v_t_31366 ? 1 : 0, v_U_30262.Ta.Mr.Nr += v_t_31366, v_r_31363 === v__e_27718 ? ++v_U_30262.Ta.R5.O5 : v_r_31363 === v_w0_27717 ? ++v_U_30262.Ta.R5.J5 : v_r_31363 === v_fe_27716 ? ++v_U_30262.Ta.R5.V5 : v_r_31363 === v_he_27719 && ++v_U_30262.Ta.R5.W5) : (v_e_31361 & v_xn_27661) === v_zn_27686 || v_n_31362 === v_ue_27682 || v_n_31362 === v_t0_27693 || v_e_31361 === v_l0_27701 || v_e_31361 === v_s0_27698 ? (v_U_30262.Ta.Mr.Hr += 0 < v_t_31366 ? 1 : 0, v_U_30262.Ta.Mr.Ur += v_t_31366, v_r_31363 === v__e_27718 ? ++v_U_30262.Ta.R5.X5 : v_r_31363 === v_w0_27717 ? ++v_U_30262.Ta.R5.z5 : v_r_31363 === v_fe_27716 ? ++v_U_30262.Ta.R5.K5 : v_r_31363 === v_he_27719 && ++v_U_30262.Ta.R5.Z5) : v_e_31361 === v_Pn_27665 && (v_U_30262.Ta.Mr.Vr += 0 < v_t_31366 ? 1 : 0, v_U_30262.Ta.Mr.Or += v_t_31366, v_r_31363 === v__e_27718 ? ++v_U_30262.Ta.R5.Q5 : v_r_31363 === v_w0_27717 ? ++v_U_30262.Ta.R5.q5 : v_r_31363 === v_fe_27716 ? ++v_U_30262.Ta.R5.Y5 : v_r_31363 === v_he_27719 && ++v_U_30262.Ta.R5.e4), v_U_30262.Ta.kr = mathMax(v_U_30262.Ta.kr, v_U_30262.Ta.pr), 0 < v_U_30262.q1.Zu.kr && (v_U_30262.Ta.Sr = v_U_30262.za(), v_U_30262.Ta.Ir = v_U_30262.Xa()), v_r_31363 !== v_w0_27717 && v_r_31363 !== v_fe_27716 || (v_s_31364 = v_U_30262.Ta.e1, v_e_31361 === v_Tn_27663 && v_s_31364.tap++, v_e_31361 === v_In_27664 && v_s_31364.extapu++, v_e_31361 === v_Ln_27667 && v_s_31364.extapc++, v_e_31361 === v_Mn_27668 && v_s_31364.extapd++, v_e_31361 === v_En_27669 && v_s_31364.extaprl++, v_e_31361 === v_Dn_27670 && v_s_31364.extaprr++, v_e_31361 === v_Fn_27671 && v_s_31364.extapsl++, v_e_31361 === v_Bn_27672 && v_s_31364.extapsr++, v_e_31361 === v_Nn_27673 && v_s_31364.extapio++, v_e_31361 === v_Rn_27666 && v_s_31364.damage++, v_e_31361 === v_Pn_27665 && v_s_31364.flick++, v_e_31361 === v_ce_27678 && v_s_31364.slideb++, v_e_31361 === v_jn_27680 && v_s_31364.slides++, v_e_31361 === v_Jn_27679 && v_s_31364.slidee++, v_n_31362 === v_ce_27678 && v_e_31361 === v_c0_27703 && v_s_31364.slidei++, v_e_31361 === v_le_27675 && v_s_31364.holdb++, v_e_31361 === v_Un_27676 && v_s_31364.holde++, v_n_31362 === v_le_27675 && v_e_31361 === v_c0_27703 && v_s_31364.holdi++, v_e_31361 === v_Kn_27687 && v_s_31364.airuc++, v_e_31361 === v_qn_27689 && v_s_31364.airul++, v_e_31361 === v_Zn_27690 && v_s_31364.airur++, v_e_31361 === v_Yn_27688 && v_s_31364.airdc++, v_e_31361 === v_Qn_27692 && v_s_31364.airdl++, v_e_31361 === v_$n_27691 && v_s_31364.airdr++, v_e_31361 === v_Wn_27684 && v_s_31364.airhs++, v_e_31361 === v_Vn_27683 && v_s_31364.airhe++, v_e_31361 === v_e0_27695 && v_s_31364.airss++, v_e_31361 === v_i0_27694 && v_s_31364.airse++, v_e_31361 !== v_l0_27701 && v_e_31361 !== v_s0_27698 || v_s_31364.airca++, v_n_31362 === v_ue_27682 && v_e_31361 === v_c0_27703 && v_s_31364.airhi++, v_n_31362 === v_t0_27693 && v_e_31361 === v_c0_27703 && v_s_31364.airhi++), 0);
          v_s_31364 = 0 < v_U_30262.q1.Zu.kr ? 6e4 / (v_U_30262.q1.Zu.ew.Ra + v_U_30262.q1.Zu.ew.Da / 2 + v_U_30262.q1.Zu.ew.iw / 2 + v_U_30262.q1.Zu.ew.Ga + v_U_30262.q1.Zu.ew.ja) : 0;
          if (v_r_31363 === v__e_27718 ? v_i_31367 = .1 * v_s_31364 : v_r_31363 === v_w0_27717 ? v_i_31367 = .8 * v_s_31364 : v_r_31363 === v_fe_27716 ? v_i_31367 = v_s_31364 : v_r_31363 === v_he_27719 && (v_i_31367 = .03 * -v_F0_27741[v_a_31365.Hc]), v_n_31362 !== v_ce_27678 && v_n_31362 !== v_le_27675 || (v_i_31367 *= .5), v_U_30262.J1) {
            let v_t_31368 = !1;
            v_s_31364 = v_U_30262.Y1._0, v_a_31365 = v_U_30262.Y1._0.vn.CP;
            !v_t_31368 && v_r_31363 >= v_s_31364.vn.zb && (v_s_31364.V0 = mathMax(v_s_31364.V0 - v_s_31364.vn.TP, 0), v_a_31365.Hs && (v_U_30262.xP = v_Qa_28089(v_U_30262.xP + v_a_31365.RP.PP, v_a_31365.RP.IP, v_a_31365.RP.MP), v_U_30262.M1 = v_si_30285(v_U_30262.xP)), v_s_31364.V0 <= 0) && (v_y_30322(), v_t_31368 = !0), !v_t_31368 && 0 < v_s_31364.vn.LP && v_r_31363 <= v_s_31364.vn.LP && (0 < v_s_31364.vn.EP && (v_s_31364.V0 = mathMin(v_s_31364.V0 + v_s_31364.vn.EP, v_s_31364.vn.bP)), v_a_31365.Hs) && (v_U_30262.xP = v_Qa_28089(v_U_30262.xP + v_a_31365.RP.FP, v_a_31365.RP.IP, v_a_31365.RP.MP), v_U_30262.M1 = v_si_30285(v_U_30262.xP));
          } else {
            if (v_U_30262.B1 > v_yt_30226) switch (v_U_30262.B1) {
              case v_St_30227:
                v_U_30262.Ta.Ir < 975e3 && v_y_30322(!0);
                break;
              case v_At_30228:
                v_U_30262.Ta.Ir < 99e4 && v_y_30322(!0);
                break;
              case v_xt_30229:
                v_U_30262.Ta.Ir < 1e6 && v_y_30322(!0);
                break;
              case v_Ct_30230:
                v_U_30262.Ta.Ir < 1005e3 && v_y_30322(!0);
                break;
              case v_Tt_30231:
                v_U_30262.Ta.Ir < 1007500 && v_y_30322(!0);
                break;
              case v_It_30232:
                v_U_30262.Ta.Ir < 1009e3 && v_y_30322(!0);
                break;
              case v_Pt_30233:
                v_U_30262.Y1.y0.G4 && v_U_30262.Ta.Ir - v_U_30262.Y1.y0.Sr < 0 && v_y_30322(!0);
            }
            v_Mi_30321(v_j0_27788, v_i_31367, v_r_31363, v_e_31361, v_n_31362, !1);
          }
          (1 === v_U_30262.vL && v_r_31363 >= v_he_27719 || 2 === v_U_30262.vL && v_r_31363 >= v__e_27718 || 3 === v_U_30262.vL && v_r_31363 >= v_w0_27717) && judgeSound.dn(v_ki_30303), v_U_30262.Y1.Rx || v_k_30287.Vl(), v_U_30262.Y1.k0 && (v_U_30262.Sa = !0), v_r_31363 === v_he_27719 && v_U_30262.q1.Zu.te < 3 && (v_e_31361 !== v_Wn_27684 && v_e_31361 !== v_Vn_27683 && v_e_31361 !== v_e0_27695 && v_e_31361 !== v_i0_27694 && (v_e_31361 & v_xn_27661) !== v_zn_27686 || !function (v_t_31369) {
            let v_i_31370 = !1;
            if (v_t_31369 === v_Wn_27684 || v_t_31369 === v_Vn_27683 || v_t_31369 === v_e0_27695 || v_t_31369 === v_i0_27694) v_i_31370 = !0;else {
              if ((v_t_31369 & v_xn_27661) !== v_zn_27686) return;
              v_i_31370 = !1;
            }
            renderer.xt() - v_U_30262.Cy < 3e3 || (v_U_30262.Cy = renderer.xt(), v_zt_30260.lt.yk(0).Be = !v_i_31370, (v_zt_30260.lt.yk(20).Be = v_i_31370) ? v_zt_30260.e8(1) : v_zt_30260.e8(0));
          }(v_e_31361)), v_E_30309() && v_U_30262.Wx.push([v_U_30262.rr, v_r_31363 !== v_he_27719]), v_U_30262.ka = !0;
        }
      }
      function v_Pi_30318() {
        if (0 === v_U_30262.R1) for (let v_t_31379 = 0; v_t_31379 < 15; ++v_t_31379) ledOutput.Qe(v_K0_27800, v_t_31379, v_Y0_27801);else {
          let v_i_31380 = 1;
          4 === v_U_30262.R1 ? v_i_31380 = 1 : 3 === v_U_30262.R1 ? v_i_31380 = 2 : 2 === v_U_30262.R1 ? v_i_31380 = 4 : 1 === v_U_30262.R1 && (v_i_31380 = 8);
          for (let v_t_31381 = 0; v_t_31381 < 15; ++v_t_31381) (v_t_31381 + 1) % v_i_31380 == 0 ? ledOutput.Qe(v_K0_27800, v_t_31381, v_Z0_27803) : ledOutput.Qe(v_K0_27800, v_t_31381, v_Y0_27801);
        }
        if (v_U_30262.n1 !== v_S_30187 || v_U_30262.Ta.gr >= v_U_30262.q1.Zu.nw) for (let v_t_31382 = 0; v_t_31382 < 16; ++v_t_31382) v_U_30262.ua[v_t_31382].Fe = v_y0_27725, ledOutput.Qe(v_z0_27799, v_t_31382, v_Y0_27801);else {
          var v_n_31371,
            v_r_31372,
            v_s_31373 = v_U_30262.rr,
            v_a_31374 = v_U_30262.rr + v_U_30262.I1,
            v_o_31375 = inputModule.oR(),
            v_l_31376 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            v_c_31377 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (let v_t_31385 = 0; v_t_31385 < 16; ++v_t_31385) v_c_31377[v_t_31385] = v_U_30262.ua[v_t_31385].Fe;
          for (let v_t_31386 = 0; v_t_31386 < 16; ++v_t_31386) v_l_31376[v_t_31386] = v_U_30262.fa[v_t_31386].Fi;
          for (let v_t_31387 = 0; v_t_31387 < 16; ++v_t_31387) v_o_31375[2 * v_t_31387] || v_o_31375[2 * v_t_31387 + 1] ? (v_U_30262.ua[v_t_31387].Fe = 1, v_U_30262.fa[v_t_31387].Fi = 1) : (v_U_30262.ua[v_t_31387].Fe = v_y0_27725, v_U_30262.fa[v_t_31387].Fi = v_y0_27725);
          {
            let v_e_31388;
            for (let v_t_31389 = 0; v_t_31389 < 16; ++v_t_31389) if ((v_e_31388 = v_U_30262.p7[v_t_31389]).cr) {
              let v_i_31390 = !1;
              for (let v_t_31391 = v_e_31388.cr.ou; v_t_31391 < v_e_31388.cr.ou + v_e_31388.cr.Le; ++v_t_31391) if (v_o_31375[2 * v_t_31391] || v_o_31375[2 * v_t_31391 + 1]) {
                v_i_31390 = !0;
                break;
              }
              if (v_t_31389 += v_e_31388.cr.Le, !v_i_31390) {
                var v_u_31378 = v_e_31388.cr.ou + v_e_31388.cr.Le;
                for (let v_t_31392 = v_e_31388.cr.ou; v_t_31392 < v_u_31378; ++v_t_31392) v_U_30262.p7[v_t_31392].cr = null;
              }
            }
            for (let v_t_31393 = 0; v_t_31393 < 16; ++v_t_31393) (v_e_31388 = v_U_30262.p7[v_t_31393]).cr && v_e_31388.cr.Fi !== v_Rn_27666 && (v_a_31374 - v_e_31388.rr >= 1 / 60 && (v_U_30262.ua[v_t_31393].Fe = v_S0_27726[v_e_31388.cr.nr]), v_U_30262.fa[v_t_31393].Fi = 2);
            for (let v_t_31394 = 0; v_t_31394 < v_U_30262.na; ++v_t_31394) if ((v_n_31371 = v_U_30262.ia[v_t_31394]).Fi === v_ce_27678 || v_n_31371.Fi === v_le_27675) for (let v_t_31395 = 0; v_t_31395 < 16; ++v_t_31395) v_n_31371.n7[v_t_31395] && (v_U_30262.ua[v_t_31395].Fe = v_y0_27725, 1 !== v_n_31371.Ug && 2 !== v_n_31371.Ug || (v_U_30262.fa[v_t_31395].Fi = 2));
            for (let v_t_31396 = 0; v_t_31396 < 16; ++v_t_31396) (v_e_31388 = v_U_30262.p7[v_t_31396]).cr && v_e_31388.cr.Fi === v_Rn_27666 && (v_U_30262.fa[v_t_31396].Fi = 10);
            for (let v_t_31397 = 0; v_t_31397 < 16; ++v_t_31397) (v_e_31388 = v_U_30262.p7[v_t_31397]).cr && v_e_31388.cr.Fi !== v_Rn_27666 && v_a_31374 - v_e_31388.rr < 1 / 60 && (v_U_30262.ua[v_t_31397].Fe = v_y0_27725);
          }
          for (let v_t_31398 = 0; v_t_31398 < 16; ++v_t_31398) v_U_30262.ua[v_t_31398].Fe !== v_c_31377[v_t_31398] && (v_U_30262.ua[v_t_31398].rr = v_s_31373);
          for (let v_t_31399 = 0; v_t_31399 < 16; ++v_t_31399) v_U_30262.fa[v_t_31399].Fi !== v_l_31376[v_t_31399] && (v_U_30262.fa[v_t_31399].rr = v_s_31373);
          let v_i_31383, v_e_31384;
          for (let v_t_31400 = 0; v_t_31400 < v_U_30262.fa.length; ++v_t_31400) if ((v_e_31384 = v_U_30262.fa[v_t_31400]).Fi === v_y0_27725) ledOutput.Qe(v_z0_27799, v_t_31400, v_Y0_27801);else {
            switch (v_e_31384.Fi) {
              case 1:
                v_i_31383 = v_q0_27802;
                break;
              case 2:
                v_i_31383 = v_Z0_27803;
                break;
              case 10:
                v_i_31383 = v_$0_27804;
                break;
              default:
                v_i_31383 = v_Y0_27801;
            }
            10 !== v_e_31384.Fi ? (v_r_31372 = 48 * mathSin(1.25 * (v_s_31373 - v_e_31384.rr) * mathPI * 2 + mathPI) + 48, ledOutput.Qe(v_z0_27799, v_t_31400, [v_i_31383[0] + v_r_31372, v_i_31383[1] + v_r_31372, v_i_31383[2] + v_r_31372])) : ledOutput.Qe(v_z0_27799, v_t_31400, v_i_31383);
          }
        }
      }
      function v_Ri_30319(v_i_31401, v_e_31402) {
        if (!(v_i_31401.Fi === v_Rn_27666 && v_i_31401.nr !== v_he_27719 || v_i_31401.Fi !== v_Rn_27666 && v_i_31401.nr === v_he_27719)) for (let v_t_31404 = v_i_31401.ou; v_t_31404 < v_i_31401.ou + v_i_31401.Le; ++v_t_31404) {
          if (v_U_30262.p7[v_t_31404].cr) {
            var v_n_31403 = v_U_30262.p7[v_t_31404].cr;
            for (let v_t_31405 = v_n_31403.ou; v_t_31405 < v_n_31403.ou + v_n_31403.Le; ++v_t_31405) v_U_30262.p7[v_t_31405].cr = null;
          }
          v_U_30262.p7[v_t_31404].cr = v_i_31401, v_U_30262.p7[v_t_31404].rr = v_e_31402;
        }
      }
      function v_Li_30320(v_t_31406, v_i_31407, v_e_31408) {
        if (v_t_31406 < 10) {
          var v_n_31409 = v_m_30256.lt.yk(0);
          if (0 === v_t_31406) return void (v_i_31407 >= v_n_31409.Te && v_i_31407 < v_n_31409.Te + v_n_31409.Le && v_e_31408 >= v_n_31409.Qt && v_e_31408 < v_n_31409.Qt + v_n_31409.G0 && (v_U_30262.nb = !0, v_U_30262.rb = v_i_31407 - v_n_31409.Te, v_U_30262.ab = v_e_31408 - v_n_31409.Qt));
          v_U_30262.nb && (v_n_31409.Te = mathFloor(v_Qa_28089(v_i_31407 - v_U_30262.rb, 0, v_m_30256.lt.Le - v_n_31409.Le)), v_n_31409.Qt = mathFloor(v_Qa_28089(v_e_31408 - v_U_30262.ab, 0, v_m_30256.lt.G0 - v_n_31409.G0)), 2 === v_t_31406) && (v_U_30262.nb = !1);
        }
        v_n_31409 = v_m_30256.lt.yk(30);
        v_t_31406 < 10 ? (v_n_31409.Te = mathFloor(v_i_31407), v_n_31409.Qt = mathFloor(v_e_31408)) : 10 === v_t_31406 ? v_n_31409.Be = !0 : 11 === v_t_31406 && (v_n_31409.Be = !1);
      }
      function v_Mi_30321(v_t_31410, v_i_31411, v_e_31412, v_n_31413, v_r_31414, v_s_31415) {
        var v_a_31416 = v_U_30262.Ta;
        let v_o_31417 = 0,
          v_l_31418 = 0;
        for (let v_t_31420 = 0; v_t_31420 < v_U_30262.q1.Zu.sw.length && !((v_l_31418 += v_U_30262.q1.Zu.sw[v_t_31420]) > v_a_31416.vr); ++v_t_31420) v_o_31417 = v_t_31420;
        var v_c_31419 = v_Nr_27959.Jc(v_U_30262.Ar, v_t_31410, v_i_31411, {
          judge_result: v_e_31412,
          note_type: v_n_31413,
          parent_note_type: v_r_31414
        }, {
          result: {
            fc: v_U_30262.Ka(),
            aj: v_U_30262.Wa(),
            jc: v_a_31416.Tr.Lr,
            j: v_a_31416.Tr.Er,
            a: v_a_31416.Tr.Fr,
            m: v_a_31416.Tr.Br,
            combo: v_a_31416.pr,
            max_combo: v_a_31416.kr,
            score: v_a_31416.Sr,
            fore_score: v_a_31416.Ir,
            success: v_a_31416.e1
          },
          prog_note: v_o_31417,
          prog_time: mathFloor((v_U_30262.rr - v_U_30262.q1.Zu.ow) / (v_U_30262.q1.Zu.yi - v_U_30262.q1.Zu.ow) * 120),
          gauge: v_Ai_30310(v_a_31416.yr.Cr).Hc,
          gauge_raw: v_a_31416.yr.Cr
        });
        if (!v_s_31415) {
          if (v_c_31419.wr && v_y_30322(), v_c_31419.GP && (v_a_31416.yr.Ar += v_c_31419.GP - v_i_31411, v_a_31416.yr.Cr = mathMax(v_a_31416.yr.Cr + mathCeil(1e3 * v_c_31419.GP) / 1e3, 0)), v_c_31419.NP && (v_t_31410 === v_O0_27789 && 0 !== v_c_31419.GP && (v_e_31412 = 0 <= v_c_31419.GP, renderer.xt() / 1e3 - v_U_30262.Ja < 1 || (v_U_30262.Ja = renderer.xt() / 1e3, v_e_31412 ? v_x_30250.e8(4) : v_x_30250.e8(5))), 0 === v_U_30262.vL && judgeSound.dn(v_ki_30303), v_c_31419.UP) && 0 < v_c_31419.UP.length) {
            let v_i_31421;
            for (let v_t_31422 = 0; v_t_31422 < v_U_30262.Ar.zm.length; ++v_t_31422) v_i_31421 = v_U_30262.Ar.zm[v_t_31422], -1 !== v_c_31419.UP.findIndex(v_t_31423 => v_t_31423 === v_i_31421) && v_C_30251.e8(3 + (v_U_30262.Ar.zm.length - v_t_31422 - 1));
          }
          v_t_31410 === v_O0_27789 && (v_U_30262.ka = !0), v_a_31416.yr.Cr = mathMin(v_a_31416.yr.Cr, v_U_30262.V1);
        }
        return v_c_31419;
      }
      function v_y_30322(v_t_31424) {
        v_U_30262.Ta.wr || v_U_30262.n1 !== v_S_30187 || (v_U_30262.Ta.yr.Cr = 0, v_U_30262.Ta.yr.Ar = 0, v_U_30262.Ta.wr = !0, v_U_30262.Y1.k0 || (v_t_31424 ? (v_Xt_30259.e8(0), v_Xt_30259.Jt = !0) : (v_Wt_30257.lt.yk(1).Be = !v_t_31424 && !v_U_30262.J1, v_Wt_30257.lt.yk(9).Be = !v_t_31424 && v_U_30262.J1, v_Wt_30257.e8(0), v_Wt_30257.Jt = !0)), v_a_30331(), v_U_30262.W1 && !v_E_30309() && v_Se_27889.i6(v_U_30262.W1), skillTrigger.Mt(), v_U_30262.Y1.k0) || v_Ae_27892.dn("danger_kill");
      }
      function v_Ei_30323() {
        if (!(v_Te_27911.Ti() || v_U_30262.n1 < v_S_30187)) {
          var v_g_31425 = inputModule.vR();
          let v_e_31427 = !1,
            v_n_31428 = !1,
            v_r_31429 = !1,
            v_s_31430 = !1,
            v_a_31431 = !1,
            v_o_31432 = !1,
            v_l_31433 = !1,
            v_c_31434 = !1,
            v_u_31435 = !1,
            v_f_31436 = !1,
            v___31437 = !1,
            v_h_31438 = !1,
            v_d_31439 = !1,
            v_v_31440 = !1,
            v_w_31441 = !1;
          for (let v_i_31442 = 0; v_i_31442 < v_g_31425.length; ++v_i_31442) {
            let v_t_31443 = v_U_30262.c6.get(v_g_31425[v_i_31442].Ae);
            switch (v_t_31443 || (v_t_31443 = new v_Ot_30248(), v_U_30262.c6.set(v_g_31425[v_i_31442].Ae, v_t_31443)), v_t_31443.oe(2 & v_g_31425[v_i_31442].lu, renderer.xt()), v_g_31425[v_i_31442].Ae) {
              case "left":
                v_e_31427 = !!v_t_31443.tv;
                break;
              case "right":
                v_n_31428 = !!v_t_31443.tv;
                break;
              case "up":
                v_r_31429 = !!v_t_31443.tv;
                break;
              case "down":
                v_s_31430 = !!v_t_31443.tv;
                break;
              case "space":
                v_a_31431 = !!v_t_31443.tv;
                break;
              case "f1":
                v_o_31432 = !!v_t_31443.tv;
                break;
              case "f2":
                v_l_31433 = !!v_t_31443.tv;
                break;
              case "f3":
                v_c_31434 = !!v_t_31443.tv;
                break;
              case "f4":
                v_u_31435 = !!v_t_31443.tv;
                break;
              case "f5":
                v_f_31436 = !!v_t_31443.tv;
                break;
              case "f6":
                v___31437 = !!v_t_31443.tv;
                break;
              case "f7":
                v_h_31438 = !!v_t_31443.tv;
                break;
              case "f9":
                v_d_31439 = !!v_t_31443.tv;
                break;
              case "f10":
                v_v_31440 = !!v_t_31443.tv;
                break;
              case "shift":
                v_w_31441 |= 2 & v_g_31425[v_i_31442].lu;
            }
            v_t_31443.tv = 0;
          }
          if (v_a_31431) v_U_30262.o1 ? (v_Wi_30337(), v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          }))) : (v_Vi_30336(), v_U_30262.Y1.ig && v__s_27989.rg({
            Dc: v_ns_27980,
            W2: v_U_30262.rr,
            b1: v_U_30262.b1
          })), v_U_30262.Sa = !0;else if (v_n_31428) v_Wi_30337(), v_w_31441 ? v_Yi_30341(v_U_30262.rr + 1) : v_Ki_30340(!0, v_U_30262.ib) || v_zi_30339(v_Xi_30338()), v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          })), v_U_30262.Sa = !0;else if (v_e_31427) v_Wi_30337(), v_w_31441 ? v_Yi_30341(v_U_30262.rr - 1) : v_Ki_30340(!1, v_U_30262.ib) || v_zi_30339(v_Xi_30338() - 2), v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          })), v_U_30262.Sa = !0;else if (v_r_31429) v_w_31441 ? (v_Wi_30337(), v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          })), v_Zi_30343(mathMin(v_U_30262.b1 + .125, 2))) : v_U_30262.T1 = mathMin(mathMax(1, mathFloor(100 * v_U_30262.T1 + 25) / 100), 20), v_U_30262.Sa = !0;else if (v_s_31430) v_w_31441 ? (v_Wi_30337(), v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          })), v_Zi_30343(mathMax(v_U_30262.b1 - .125, .125))) : v_U_30262.T1 = mathMin(mathMax(1, mathFloor(100 * v_U_30262.T1 - 25) / 100), 20), v_U_30262.Sa = !0;else if (v_o_31432) v_w_31441 ? (v_i_30263.pd = !0, v_i_30263.Dg = 0, v_p_30264.pd = !0, v_p_30264.ar = null, v_p_30264.rr = 0) : (v_i_30263.Dg += 1, v_p_30264.rr += 1);else if (v_l_31433) v_w_31441 ? (v_i_30263.pd = !1, v_i_30263.Dg = 0, v_p_30264.pd = !1, v_p_30264.rr = 0) : (--v_i_30263.Dg, --v_p_30264.rr);else if (v_c_31434) v_U_30262.A1 ^= !0, v_U_30262.Sa = !0, v_U_30262.A1 ? (v_U_30262.E1 = 0, v_U_30262.I1 = 0, v_U_30262.dI = 0) : (v_U_30262.E1 = -v_Ie_27966.$c("jdgTimingA") / 6e3 - 1 / 60, v_U_30262.I1 = -v_Ie_27966.$c("jdgTimingA") / 6e3 - v_Ie_27966.$c("jdgTimingB") / 6e3 - 1 / 60, v_U_30262.dI = -v_Ie_27966.$c("jdgTimingAir") / 6e3);else if (v_u_31435) v_U_30262.ib = !v_U_30262.ib, v_U_30262.Sa = !0;else if (v_f_31436) {
            if (v_U_30262.Y1.ig) v__s_27989.rg({
              Dc: v_cs_27986,
              sg: ""
            });else {
              var v_t_31426 = v_be_27857.Pp.find(v_t_31444 => v_t_31444.w0 === v_U_30262.Y1.ee);
              if (void 0 !== v_t_31426) {
                let v_i_31445 = v_U_30262.q1 ? v_U_30262.q1.Zu.te : null;
                v_br_27943.Wc(v_t_31426, v_U_30262.Y1.te, !0, v_U_30262.Y1.k0, async v_t_31446 => {
                  if (null !== v_t_31446) {
                    v_U_30262.q1 = v_t_31446.q1, v_U_30262.L1 && v_U_30262.q1.lw(), v_i_31445 !== v_U_30262.q1.Zu.te && (v_U_30262.Eb = await v_hs_27990.Gb(v_U_30262.q1.Zu.te, v_Nr_27959._7(v_U_30262.h7))), v_U_30262.q1.cw(v_U_30262.Eb), v_U_30262.ga = v_U_30262.q1.Zu.uw;
                    for (let v_t_31447 = 0; v_t_31447 < v_U_30262.ga.length; ++v_t_31447) v_U_30262.wa[v_U_30262.ga[v_t_31447]] = 0;
                    v_qi_30342();
                  }
                });
              }
            }
          } else v___31437 ? (v_Wi_30337(), v_Yi_30341(v_U_30262.q1.Zu.fw - v_U_30262.m1), v_U_30262.Sa = !0, v_U_30262.Y1.ig && (v__s_27989.rg({
            Dc: v_rs_27981
          }), v__s_27989.rg({
            Dc: v_ss_27982,
            W2: v_U_30262.rr
          }))) : v_h_31438 ? backgroundRenderer.YP() && (v_t_31426 = backgroundRenderer.HR(), backgroundRenderer.zP(), backgroundRenderer.Ec(v_t_31426)) : v_d_31439 ? v_Te_27911.Ai(v_Ue_28209("pldConfirmExit"), v_G0_27772, 0, function (v_t_31448) {
            v_t_31448 === v_H0_27781 && (v_U_30262.Y1.ig ? window.close() : v_y_30322());
          }) : v_v_31440 && (v_U_30262.Aa ^= !0);
        }
      }
      function v_Di_30324(v_i_31449) {
        return new Promise(v_t_31450 => {
          null !== v_U_30262.vk && v_U_30262.z1 ? (v_U_30262.z1.onseeked = v_t_31450, v_U_30262.q1.Zu.hw ? v_U_30262.z1.currentTime = (v_i_31449 - v_U_30262.vk) / 1e3 % v_U_30262.z1.duration : v_U_30262.z1.currentTime = (v_i_31449 - v_U_30262.vk) / 1e3) : v_t_31450();
        });
      }
      function v_Fi_30325(v_t_31451, v_i_31452, v_e_31453) {
        if (v_U_30262.i1) {
          if (v_U_30262.o1 && v_U_30262.n1 < v_A_30193 && (v_U_30262.W1 && !v_U_30262.K1 && !v_Se_27889.o1(v_U_30262.W1) && v_U_30262.rr >= v_U_30262.m1 + v_U_30262.q1.Zu._w - .01 && v_U_30262.n1 === v_S_30187 && .5 <= v_U_30262.b1 && (v_Se_27889.dn(v_U_30262.W1), v_U_30262.z1 && !v_U_30262.q1.Zu.hw && (v_U_30262.Y1.J6 || v_U_30262.z1.play(), v_U_30262.vk = v_t_31451), v_U_30262.K1 = !0), v_U_30262.rr = ((v_t_31451 - v_U_30262.l1) / 1e3 - v_U_30262.m1 + v_U_30262.q1.Zu._w) * v_U_30262.b1, v_U_30262.C1 = v_U_30262.rr + v_U_30262.E1), v_U_30262.n1 === v_S_30187 && !v_U_30262.Y1.X0 && (v_U_30262.Ta.vr >= v_U_30262.q1.Zu.kr || v_U_30262.w1 + 5 < v_U_30262.rr) && v_Hi_30330(), v_U_30262.Y1.Rx && v_U_30262.n1 >= v_S_30187 && 0 < (v_t_31451 = mathFloor((v_t_31451 - v_U_30262.l1) / 1e3 * 4) + 1) && v_t_31451 > v_U_30262.Vx && (v_Ni_30327(), v_U_30262.Vx = v_t_31451), v_U_30262.o1) {
            if (v_U_30262.Ta.wr) {
              let v_i_31468 = v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1,
                v_e_31469 = 0,
                v_n_31470,
                v_r_31471 = void (v_U_30262.na = 0),
                v_s_31472 = v_U_30262.q1.yc.$g,
                v_a_31473;
              for (let v_t_31474 = 0; v_t_31474 < v_s_31472.length; ++v_t_31474) 5 !== (v_a_31473 = v_s_31472[v_t_31474]).Ug && (v_r_31471 = v_a_31473.Fi & v_xn_27661, v_e_31469 = v_a_31473.od - v_i_31468, v_r_31471 === v_Cn_27662 && v_r_31471 !== v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.Ra.Mb || v_r_31471 === v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.ja.Nb || (v_a_31473.Fi === v_ce_27678 || v_a_31473.Fi === v_le_27675) && v_e_31469 <= v_U_30262.Eb.Ra.Mb || (v_a_31473.Fi === v_Kn_27687 || v_a_31473.Fi === v_qn_27689 || v_a_31473.Fi === v_Zn_27690 || v_a_31473.Fi === v_ue_27682 || v_a_31473.Fi === v_t0_27693) && v_a_31473.dw !== v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.Hb.Mb || (v_a_31473.Fi === v_Kn_27687 || v_a_31473.Fi === v_qn_27689 || v_a_31473.Fi === v_Zn_27690 || v_a_31473.Fi === v_ue_27682 || v_a_31473.Fi === v_t0_27693) && v_a_31473.dw === v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.Hb.Mb || (v_a_31473.Fi === v_Yn_27688 || v_a_31473.Fi === v_Qn_27692 || v_a_31473.Fi === v_$n_27691) && v_a_31473.dw !== v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.Ub.Mb || (v_a_31473.Fi === v_Yn_27688 || v_a_31473.Fi === v_Qn_27692 || v_a_31473.Fi === v_$n_27691) && v_a_31473.dw === v_Pn_27665 && v_e_31469 <= v_U_30262.Eb.jb.Mb || v_a_31473.Fi === v_s0_27698 && v_e_31469 <= v_U_30262.Eb.Jb.Mb) && (v_U_30262.ia.length > v_U_30262.na ? v_U_30262.ia[v_U_30262.na] = v_a_31473 : v_U_30262.ia.push(v_a_31473), ++v_U_30262.na);
              for (let v_t_31475 = 0; v_t_31475 < v_U_30262.na; ++v_t_31475) switch (v_a_31473 = v_U_30262.ia[v_t_31475], v_e_31469 = v_a_31473.od - v_i_31468 + v_U_30262.dI, v_a_31473.Fi) {
                case v_Kn_27687:
                case v_qn_27689:
                case v_Zn_27690:
                  v_n_31470 = v_a_31473.dw === v_Pn_27665 ? v_U_30262.Eb.Vb : v_U_30262.Eb.Hb, v_e_31469 < v_n_31470.Pb && (v_a_31473.Ug = 5);
                  break;
                case v_Yn_27688:
                case v_Qn_27692:
                case v_$n_27691:
                  v_n_31470 = v_a_31473.dw === v_Pn_27665 ? v_U_30262.Eb.jb : v_U_30262.Eb.Ub, v_e_31469 < v_n_31470.Pb && (v_a_31473.Ug = 5);
                  break;
                case v_ue_27682:
                case v_t0_27693:
                  v_a_31473.Ug === v_v0_27715 ? (v_n_31470 = v_a_31473.dw === v_Pn_27665 ? v_U_30262.Eb.Vb : v_U_30262.Eb.Hb, v_e_31469 < v_n_31470.Pb && (v_a_31473.Ug = 3)) : (v_a_31473.Ug = 3, v_De_28096(v_a_31473.We, function (v_t_31476) {
                    5 !== v_t_31476.Ug && v_t_31476.Fi !== v_n0_27696 && v_t_31476.od - v_i_31468 <= v_U_30262.Eb.Ob.Mb && (v_e_31469 = v_t_31476.od - v_i_31468, v_t_31476.Fi === v_Xn_27685 || v_t_31476.Fi === v_r0_27697 ? v_e_31469 <= 0 && (v_a_31473.Ug = 5) : v_t_31476.Fi !== v_c0_27703 && v_e_31469 < v_U_30262.Eb.Ob.Pb && (v_t_31476.Ug = 5, v_t_31476.Fi !== v_i0_27694 && v_t_31476.Fi !== v_Vn_27683 || (v_a_31473.Ug = 5)));
                  }));
                  break;
                case v_s0_27698:
                  for (let v_t_31477 = -1; v_t_31477 < v_a_31473.We.length; ++v_t_31477) {
                    var v_o_31454 = -1 === v_t_31477 ? v_a_31473 : v_a_31473.We[v_t_31477];
                    v_o_31454.Ug > v_v0_27715 || v_o_31454.od - v_i_31468 > v_U_30262.Eb.Jb.Mb || (v_o_31454.Fi === v_s0_27698 && v_a_31473.Jg === v_h0_27711 || v_o_31454.Fi === v_l0_27701 ? (v_e_31469 = v_o_31454.od - v_i_31468) < v_U_30262.Eb.Jb.Pb && (v_a_31473.Ug = 5, v_t_31477 === v_a_31473.We.length - 1) && (v_a_31473.Ug = 5) : v_t_31477 === v_a_31473.We.length - 1 && v_o_31454.od <= v_i_31468 && (v_a_31473.Ug = 5));
                  }
              }
              for (let v_t_31478 = v_U_30262.na - 1; 0 <= v_t_31478; --v_t_31478) (v_a_31473 = v_U_30262.ia[v_t_31478]).Fi !== v_ce_27678 && v_a_31473.Fi !== v_le_27675 || (v_a_31473.Ug === v_v0_27715 ? v_e_31469 < v_U_30262.Eb.Ra.Pb && (v_a_31473.Ug = 3) : (v_a_31473.Ug = 3, v_De_28096(v_a_31473.We, function (v_t_31479) {
                5 !== v_t_31479.Ug && v_t_31479.Fi !== v_On_27681 && v_t_31479.od - v_i_31468 <= 0 && (v_t_31479.Ug = 5, v_t_31479.Fi !== v_Jn_27679 && v_t_31479.Fi !== v_Un_27676 || (v_a_31473.Ug = 5));
              })));
              for (let v_t_31480 = v_U_30262.na - 1; 0 <= v_t_31480; --v_t_31480) ((v_a_31473 = v_U_30262.ia[v_t_31480]).Fi === v_Tn_27663 || v_a_31473.Fi === v_Pn_27665 || v_a_31473.Fi === v_Rn_27666 || v__0_27710(v_a_31473.Fi)) && v_a_31473.od - v_i_31468 < v_U_30262.Eb.zb.Wb && (v_a_31473.Ug = 5);
            } else if (v_U_30262.A1) {
              let v_e_31481 = v_U_30262.rr + v_U_30262.S1 + v_U_30262.I1,
                v_n_31482,
                v_i_31483,
                v_r_31484 = v_U_30262.q1.yc.$g,
                v_s_31485;
              for (let v_t_31486 = v_U_30262.na = 0; v_t_31486 < v_r_31484.length; ++v_t_31486) 5 !== (v_s_31485 = v_r_31484[v_t_31486]).Ug && (v_i_31483 = v_s_31485.Fi & v_xn_27661, v_s_31485.od <= v_e_31481 && (v_i_31483 === v_Cn_27662 || v_i_31483 === v_Hn_27677 || v_i_31483 === v_Gn_27674) || v_s_31485.od <= v_e_31481 + v_U_30262.dI && (64 == v_i_31483 || 256 == v_i_31483 || v_i_31483 === v_zn_27686 || v_s_31485.Fi === v_s0_27698)) && (v_U_30262.ia.length > v_U_30262.na ? v_U_30262.ia[v_U_30262.na] = v_s_31485 : v_U_30262.ia.push(v_s_31485), ++v_U_30262.na);
              for (let v_t_31487 = 0; v_t_31487 < v_U_30262.na; ++v_t_31487) switch (v_s_31485 = v_U_30262.ia[v_t_31487], v_n_31482 = 64 * (v_s_31485.ou + v_s_31485.Le / 2) - v_we_27734, v_s_31485.Fi) {
                case v_Tn_27663:
                case v_In_27664:
                case v_Ln_27667:
                case v_Mn_27668:
                case v_En_27669:
                case v_Dn_27670:
                case v_Fn_27671:
                case v_Bn_27672:
                case v_Nn_27673:
                case v_Pn_27665:
                case v_Kn_27687:
                case v_Yn_27688:
                case v_qn_27689:
                case v_Zn_27690:
                case v_Qn_27692:
                case v_$n_27691:
                case v_Rn_27666:
                  switch (v_s_31485.Ug = 5, v_s_31485.nr = v_fe_27716, v_Y_30317(v_s_31485.Fi, v_An_27660, v_fe_27716, 0), v_s_31485.Fi) {
                    case v_In_27664:
                    case v_Ln_27667:
                    case v_Mn_27668:
                    case v_En_27669:
                    case v_Dn_27670:
                    case v_Fn_27671:
                    case v_Bn_27672:
                    case v_Nn_27673:
                      judgeSound.dn(v_V_30295), judgeSound.dn(v_hi_30296), v_z_30314(v_d0_27714, v_n_31482, v_s_31485.Le, v_fe_27716), v_Ii_30315(v_s_31485.Fi, v_s_31485.od), v_K_30316(v_fe_27716, 0, !1, !1, v_n_31482), v_Ri_30319(v_s_31485, v_e_31481);
                      break;
                    case v_Pn_27665:
                      judgeSound.dn(v_V_30295), judgeSound.dn(v_di_30297), 1 === v_s_31485.Jg || 0 === v_s_31485.Jg && (4 === v_s_31485.Le && (v_s_31485.ou < 4 || 8 <= v_s_31485.ou && v_s_31485.ou < 12) || 4 !== v_s_31485.Le && v_s_31485.ou + v_s_31485.Le / 2 < 8) ? v_z_30314(3, v_n_31482, v_s_31485.Le, v_fe_27716) : v_z_30314(4, v_n_31482, v_s_31485.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !1, !1, v_n_31482), v_Ri_30319(v_s_31485, v_e_31481);
                      break;
                    case v_Kn_27687:
                    case v_qn_27689:
                    case v_Zn_27690:
                      judgeSound.dn(v_ci_30291), v_z_30314(7, v_n_31482, v_s_31485.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !0, v_s_31485.gw, v_n_31482);
                      break;
                    case v_Yn_27688:
                    case v_Qn_27692:
                    case v_$n_27691:
                      judgeSound.dn(v_ui_30292), v_z_30314(8, v_n_31482, v_s_31485.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !0, v_s_31485.gw, v_n_31482);
                      break;
                    default:
                      judgeSound.dn(v_V_30295), v_z_30314(1, v_n_31482, v_s_31485.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !1, !1, v_n_31482), v_Ri_30319(v_s_31485, v_e_31481);
                  }
                  break;
                case v_ce_27678:
                case v_le_27675:
                  v_s_31485.Ug === v_v0_27715 ? (v_s_31485.Ug = 1, v_s_31485.nr = v_fe_27716, v_s_31485.Fi !== v_ce_27678 && v_s_31485.Fi !== v_le_27675 || 1 !== v_s_31485.Jg ? (judgeSound.dn(v_V_30295), v_z_30314(1, v_n_31482, v_s_31485.Le, v_fe_27716)) : (judgeSound.dn(v_V_30295), judgeSound.dn(v_hi_30296), v_Ii_30315(v_s_31485.Yg, v_s_31485.od), v_z_30314(v_d0_27714, v_n_31482, v_s_31485.Le, v_fe_27716)), skillTrigger.Nc(v_s_31485, !1), v_K_30316(v_fe_27716, 0, !1, !1, v_n_31482), v_Y_30317(v_s_31485.Fi, 1 === v_s_31485.Jg ? v_s_31485.Yg : v_An_27660, v_fe_27716, 0), v_Ri_30319(v_s_31485, v_e_31481)) : 3 === v_s_31485.Ug && (v_s_31485.Ug = 1), v_s_31485.i7(v_e_31481 - v_U_30262.Eb.Da.d7, v_e_31481 - v_U_30262.Eb.Da.v7), v_De_28096(v_s_31485.We, function (v_i_31488) {
                    if (v_i_31488.Fi !== v_On_27681 && 5 !== v_i_31488.Ug) if (v_i_31488.Fi === v_Jn_27679 || v_i_31488.Fi === v_Un_27676) v_i_31488.od <= v_e_31481 + v_U_30262.Eb.Fb.hP && (v_s_31485.Ug = 5, v_i_31488.Ug = 5, v_i_31488.nr = v_fe_27716, judgeSound.dn(v_pi_30302), v_i_31488.pw || (v_Y_30317(v_i_31488.Fi, v_s_31485.Fi, v_fe_27716, 0), v_z_30314(6, 64 * (v_i_31488.ou + v_i_31488.Le / 2) - v_we_27734, v_i_31488.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !1, !1, 64 * (v_i_31488.ou + v_i_31488.Le / 2) - v_we_27734)));else if (v_i_31488.od <= v_e_31481 + v_U_30262.Eb.Fb.hP && (v_i_31488.Ug = 5, v_i_31488.nr = v_fe_27716, v_i_31488.Fi === v_jn_27680 && judgeSound.dn(v_pi_30302), !v_i_31488.pw)) {
                      if (v_i_31488.Fi === v_jn_27680) v_z_30314(6, 64 * (v_i_31488.ou + v_i_31488.Le / 2) - v_we_27734, v_i_31488.Le, v_fe_27716), v_K_30316(v_fe_27716, 0, !1, !1, 64 * (v_i_31488.ou + v_i_31488.Le / 2) - v_we_27734);else if (v_i_31488.Fi === v_c0_27703) {
                        let v_t_31489 = v_s_31485.Oc(v_i_31488.od);
                        v_z_30314(6, 64 * ((v_t_31489 = null === v_t_31489 ? {
                          rw: v_s_31485.ou,
                          aw: v_s_31485.ou + v_s_31485.Le
                        } : v_t_31489).rw + (v_t_31489.aw - v_t_31489.rw) / 2) - v_we_27734, v_t_31489.aw - v_t_31489.rw, v_fe_27716), v_K_30316(v_fe_27716, 0, !1, !1, 64 * (v_t_31489.rw + (v_t_31489.aw - v_t_31489.rw) / 2) - v_we_27734);
                      }
                      v_Y_30317(v_i_31488.Fi, v_s_31485.Fi, v_fe_27716, 0);
                    }
                  });
                  break;
                case v_ue_27682:
                case v_t0_27693:
                  v_s_31485.Ug === v_v0_27715 ? (v_s_31485.Ug = 1, skillTrigger.Nc(v_s_31485, !1), judgeSound.dn(v_Si_30306)) : 3 === v_s_31485.Ug && (v_s_31485.Ug = 1), v_De_28096(v_s_31485.We, function (v_i_31490) {
                    if (5 !== v_i_31490.Ug && v_i_31490.Fi !== v_n0_27696) if (v_i_31490.Fi === v_Xn_27685 || v_i_31490.Fi === v_r0_27697) v_i_31490.od <= v_e_31481 + v_U_30262.dI && (v_s_31485.Ug = 5);else if (v_i_31490.Fi === v_Vn_27683 || v_i_31490.Fi === v_i0_27694) v_i_31490.od <= v_e_31481 + v_U_30262.dI && (v_s_31485.Ug = 5, judgeSound.dn(v_fi_30293), v_z_30314(10, v_n_31482 = 64 * (v_i_31490.ou + v_i_31490.Le / 2) - v_we_27734, v_i_31490.Le, v_fe_27716, v_i_31490.G0), v_K_30316(v_fe_27716, 0, !0, !0, v_n_31482), v_i_31490.pw || (v_i_31490.Ug = 5, v_i_31490.nr = v_fe_27716, v_Y_30317(v_i_31490.Fi, v_s_31485.Fi, v_fe_27716, 0)));else if (v_i_31490.od <= v_e_31481 + v_U_30262.dI) if (v_i_31490.Ug = 5, v_i_31490.nr = v_fe_27716, v_n_31482 = 64 * (v_i_31490.ou + v_i_31490.Le / 2) - v_we_27734, v_i_31490.Fi === v_Wn_27684 || v_i_31490.Fi === v_e0_27695) judgeSound.dn(v_fi_30293), v_z_30314(9, v_n_31482, v_i_31490.Le, v_fe_27716, v_i_31490.G0), v_K_30316(v_fe_27716, 0, !0, !0, v_n_31482), v_z_30314(11, v_n_31482, v_i_31490.Le, v_fe_27716, v_i_31490.G0), v_i_31490.pw || v_Y_30317(v_i_31490.Fi, v_s_31485.Fi, v_fe_27716, 0);else if (v_i_31490.Fi !== v_c0_27703 || 1 !== v_i_31490.Jg) {
                      let v_t_31491 = v_s_31485.Oc(v_i_31490.od);
                      null === v_t_31491 && (v_t_31491 = {
                        rw: v_s_31485.ou,
                        aw: v_s_31485.ou + v_s_31485.Le,
                        G0: v_s_31485.G0
                      }), v_K_30316(v_fe_27716, 0, !1, !0, 64 * (v_t_31491.rw + (v_t_31491.aw - v_t_31491.rw) / 2) - v_we_27734), v_s_31485.Fi === v_ue_27682 && v_z_30314(11, 64 * (v_t_31491.rw + (v_t_31491.aw - v_t_31491.rw) / 2) - v_we_27734, v_t_31491.aw - v_t_31491.rw, v_fe_27716, v_t_31491.G0), v_i_31490.pw || v_Y_30317(v_i_31490.Fi, v_s_31485.Fi, v_fe_27716, 0);
                    }
                  });
                  break;
                case v_s0_27698:
                  v_s_31485.Ug === v_v0_27715 && (v_s_31485.Ug = 1, v_s_31485.Jg === v_h0_27711) && (v_s_31485.nr = v_fe_27716, v_Y_30317(v_s_31485.Fi, v_An_27660, v_fe_27716, 0), judgeSound.dn(v__i_30294), v_z_30314(13, v_n_31482, v_s_31485.Le, v_fe_27716, v_s_31485.G0), v_K_30316(v_fe_27716, 0, !1, !0, v_n_31482, v_s_31485.G0));
                  for (let v_t_31492 = 0; v_t_31492 < v_s_31485.We.length; ++v_t_31492) {
                    var v_a_31455 = v_s_31485.We[v_t_31492];
                    5 !== v_a_31455.Ug && v_a_31455.od <= v_e_31481 + v_U_30262.dI && (v_a_31455.Fi === v_l0_27701 && (v_n_31482 = 64 * (v_a_31455.ou + v_a_31455.Le / 2) - v_we_27734, v_a_31455.Ug = 5, v_a_31455.nr = v_fe_27716, v_Y_30317(v_a_31455.Fi, v_An_27660, v_fe_27716, 0), judgeSound.dn(v__i_30294), v_z_30314(13, v_n_31482, v_a_31455.Le, v_fe_27716, v_a_31455.G0), v_K_30316(v_fe_27716, 0, !1, !0, v_n_31482, v_a_31455.G0)), v_t_31492 === v_s_31485.We.length - 1) && (v_s_31485.Ug = 5);
                  }
              }
            } else v_Ci_30312(v_i_31452 / 1e3);
            v_Ti_30313(), judgeSound.oe();
          }
          if (v_U_30262.n1 !== v_S_30187 || v_U_30262.Ta.wr || 0 < (v_t_31451 = mathFloor((v_U_30262.rr - v_U_30262.q1.Zu.ow) / 2) + 1) && v_t_31451 > v_U_30262.xa && (v_Mi_30321(v_O0_27789, 0, 0, 0, 0, !1), v_U_30262.xa = v_t_31451), v_Pi_30318(), v_U_30262.ka) {
            if (v_U_30262.ka = !1, v_R_30261.Ss.Wt = mathMin(v_U_30262.Ta.Tr.Lr, 99999).toString(), v_R_30261.gk.Be = 0 === v_U_30262.Ta.Tr.Lr, v_R_30261.xs.Wt = mathMin(v_U_30262.Ta.Tr.Er, 99999).toString(), v_R_30261.wk.Be = 0 === v_U_30262.Ta.Tr.Er, v_R_30261.Is.Wt = mathMin(v_U_30262.Ta.Tr.Fr, 99999).toString(), v_R_30261.pk.Be = 0 === v_U_30262.Ta.Tr.Fr, v_R_30261.ys.Wt = mathMin(v_U_30262.Ta.Tr.Br, 99999).toString(), v_R_30261.mk.Be = 0 === v_U_30262.Ta.Tr.Br, v_R_30261.Ls.Wt = mathMin(v_U_30262.Ta.kr, 99999).toString(), v_R_30261.Es.Wt = v_U_30262.Ta.Sr.toLocaleString("ja").replaceAll(",", "C"), v_U_30262.J1) {
              var v_n_31456 = v_Tr_27949.Kc(v_U_30262.Y1._0.V0, v_U_30262.Y1._0.vn.bP);
              v_R_30261.ps.Wt = v_U_30262.Y1._0.V0.toString(), v_R_30261.ws.ln(1 - v_U_30262.Y1._0.V0 / v_U_30262.Y1._0.vn.bP), 0 === v_U_30262.Y1._0.V0 ? v_R_30261.ps.Ak = "lifeZero" : v_R_30261.ps.Ak = v_n_31456 ? "lifeCurrent" : "lifeDanger", v_U_30262.ma && !v_n_31456 ? v_x_30250.e8(2) : !v_U_30262.ma && v_n_31456 && v_x_30250.e8(3), v_U_30262.ma = v_n_31456;
            } else {
              var v_r_31457 = v_Ai_30310(v_U_30262.Ta.yr.Cr),
                v_n_31456 = v_r_31457.Hc > v_U_30262.O1;
              for (let v_t_31493 = 0; v_t_31493 < 10 && v_t_31493 < v_U_30262.U1; ++v_t_31493) {
                var v_s_31458 = v_R_30261.us.We[2 * v_t_31493 + 1];
                0 === v_s_31458.qe && v_t_31493 < v_r_31457.Hc && (v_t_31493 >= v_U_30262.O1 ? v_x_30250.NA(99, 0, v_s_31458.Te + 730, 117) : v_x_30250.NA(102, 1, v_s_31458.Te + 730, 117)), v_s_31458.an(v_t_31493 < v_r_31457.Hc ? 1 : 0);
              }
              var v_l_31459 = v_r_31457.Hc < v_U_30262.U1 ? v_r_31457.Uc / v_F0_27741[v_r_31457.Hc] : 1;
              v_R_30261.fs.ln(v_l_31459), v_U_30262.ba && v_n_31456 && v_x_30250.e8(6), v_U_30262.ba = !v_n_31456, v_R_30261.fs.Je = "gaugeBar" + (v_n_31456 ? "Clear" : "Failed"), v_R_30261._s.Be = v_n_31456, v_R_30261.hs.Be = v_n_31456, v_x_30250.lt.yk(77).Be = 0 < v_r_31457.Hc, v_x_30250.lt.yk(77).Te = 38 * mathMin(v_U_30262.U1, v_r_31457.Hc) - 25 + (v_n_31456 ? 2 : 0), v_x_30250.lt.yk(77).Qt = v_n_31456 ? 2 : 8, v_x_30250.lt.yk(77).Wt = mathMin(v_U_30262.U1, v_r_31457.Hc).toString(), v_x_30250.lt.yk(77).Qe(v_n_31456 ? 1 : 0, 1, v_n_31456 ? 0 : 1, 1), v_U_30262.n1 >= v_N_30189 ? (v_n_31456 || v_R_30261.ds.Be || v_x_30250.e8(8), v_R_30261.ds.Be = !v_n_31456) : v_R_30261.ds.Be = !1, null !== v_U_30262.Ar.Om && (v_R_30261.Rs.Wt = v_Qa_28089(v_U_30262.Ar.Km, 0, 999).toString());
            }
            if (v_E_30309()) {
              var v_c_31460,
                v_u_31461,
                v_l_31459 = v_oe_27649.tC(v_oe_27649.sx());
              v_R_30261.zx.Je = "rank" + v_l_31459.iC, v_R_30261.Kx.Je = "scoreDIff" + v_l_31459.eC, v_l_31459.iC <= v_l_31459.eC ? (0 === v_l_31459.nC ? v_R_30261.Yx.Wt = "N0" : v_R_30261.Yx.Wt = "P" + v_l_31459.nC.toLocaleString("ja").replaceAll(",", "C"), v_R_30261.Yx.Qe(0, 200 / 255, 220 / 255, 1)) : (v_R_30261.Yx.Wt = "M" + v_l_31459.nC.toLocaleString("ja").replaceAll(",", "C"), v_R_30261.Yx.Qe(220 / 255, 0, 0, 1));
              let v_t_31494 = 0;
              for (v_c_31460 of v_oe_27649.Ox) v_c_31460.Ae !== v_oe_27649.sx() && (v_R_30261.Zx[v_t_31494].Je = "rank" + v_c_31460.iC, v_c_31460.eP ? v_R_30261.qx[v_t_31494].ot("guestPlayerDisconnected").Be = !0 : v_c_31460.ru & v_ua_28041 ? (v_u_31461 = v_R_30261.qx[v_t_31494].ot("killedFx")).Be || (v_u_31461.Be = !0, v_C_30251.e8(1, v_R_30261.qx[v_t_31494])) : v_c_31460.ru & v_fa_28042 && (v_C_30251.e8(0, v_R_30261.qx[v_t_31494]), v_c_31460.ru &= ~v_fa_28042), ++v_t_31494);
            }
          }
          if (v_U_30262.Y1.k0) {
            var v_f_31462,
              v_i_31452 = mathFloor(10 * v_U_30262.rr) + 1;
            if (v_i_31452 > v_U_30262.Ia && (v_U_30262.Sa = !0, v_U_30262.Ia = v_i_31452), v_U_30262.Sa) {
              if (v_U_30262.Y1.k0) {
                v_m_30256.lt.yk(5).Je = v_U_30262.o1 ? "textPlay" : "textPause", v_m_30256.lt.yk(7).Wt = v_U_30262.b1.toFixed(2).replaceAll(".", "P"), v_m_30256.lt.yk(19).Wt = v_U_30262.T1.toFixed(2).replaceAll(".", "P"), v_m_30256.lt.yk(17).Je = v_U_30262.A1 ? "textOn" : "textOff", v_m_30256.lt.yk(23).Je = v_U_30262.ib ? "textBeat" : "textBar";
                {
                  var v___31463 = v_U_30262.q1.ob(v_U_30262.rr);
                  let v_t_31495 = 0,
                    v_i_31496 = 0,
                    v_e_31497 = 1,
                    v_n_31498 = 4;
                  if (v_U_30262.q1.lb) {
                    for (const v_g_31499 of v_U_30262.q1.lb) {
                      if (v_f_31462 = (v_g_31499.mp - v_t_31495) * v_de_27728 * v_e_31497, v_i_31496 + v_f_31462 >= v___31463) break;
                      v_t_31495 = v_g_31499.mp, v_e_31497 = v_g_31499.Jg, v_n_31498 = v_g_31499.cb, v_i_31496 += v_f_31462;
                    }
                    v_t_31495 += (v___31463 - v_i_31496) / v_de_27728 / v_e_31497;
                    var v_h_31464 = mathFloor((v_t_31495 - mathFloor(v_t_31495)) * v_n_31498) + 1;
                    v_t_31495 < 0 && --v_t_31495, v_m_30256.lt.yk(9).Wt = (v_t_31495 < 0 ? "N" : "") + mathFloor(mathAbs(v_t_31495)) + "Q" + v_Xa_28081(mathMin(v_h_31464, 99), 2, "B"), v_m_30256.lt.yk(13).Wt = v_U_30262.q1.np(v___31463).toFixed(2).replaceAll(".", "P"), v_m_30256.lt.yk(15).Wt = v_n_31498 + "S" + mathRound(v_n_31498 / v_e_31497);
                  } else v_m_30256.lt.yk(9).Wt = "", v_m_30256.lt.yk(13).Wt = v_U_30262.q1.np(v___31463).toFixed(2).replaceAll(".", "P"), v_m_30256.lt.yk(15).Wt = "";
                }
                v_h_31464 = v_U_30262.rr < 0 ? 1 : 0;
                v_m_30256.lt.yk(11).Wt = (v_U_30262.rr < 0 ? "N" : "") + mathAbs(mathFloor(v_U_30262.rr / 60) + v_h_31464) % 60 + "C" + v_Xa_28081(mathAbs(mathFloor(v_U_30262.rr) + v_h_31464) % 60, 2, "0") + "P" + v_Xa_28081(mathAbs(mathFloor(1e3 * v_U_30262.rr) + v_h_31464) % 1e3, 3, "0"), v_m_30256.lt.yk(21).Wt = v_U_30262.q1.Zu.kr + "";
              }
              v_U_30262.Sa = !1;
            }
          }
          {
            v_U_30262.ta = 0;
            var v_d_31465 = v_U_30262.C1;
            let v_i_31500 = 0;
            v_i_31500 = v_U_30262.T1 <= 10 ? 7 / v_U_30262.T1 : 7 / ((v_U_30262.T1 - 10) * (v_U_30262.T1 - 10) + 10);
            let v_t_31501,
              v_e_31502,
              v_n_31503,
              v_r_31504,
              v_s_31505 = !1,
              v_a_31506 = 0;
            for (v_a_31506 = 0; v_a_31506 < v_U_30262.ga.length; ++v_a_31506) v_U_30262.wa[v_U_30262.ga[v_a_31506]] = v_U_30262.q1.Tw(v_d_31465, v_U_30262.ga[v_a_31506], 1);
            for (v_e_31502 of v_U_30262.q1.yc.$g) if (5 !== v_e_31502.Ug) if (v_t_31501 = v_e_31502.Fi & v_xn_27661, v_e_31502.Fi === v_u0_27704) v_e_31502.Pg = (v_U_30262.q1.Tw(v_e_31502.od, v_U_30262.q1.Zu.Wg, 1) - v_U_30262.wa[v_U_30262.q1.Zu.Wg]) / v_i_31500, v_e_31502.od >= v_d_31465 && v_e_31502.Pg < .84 ? (v_U_30262.ea.length <= v_U_30262.ta ? v_U_30262.ea.push(v_e_31502) : v_U_30262.ea[v_U_30262.ta] = v_e_31502, ++v_U_30262.ta) : v_e_31502.od < v_d_31465 && (v_e_31502.Ug = 5, v_s_31505 = !0);else if (v_t_31501 === v_Hn_27677 || v_t_31501 === v_Gn_27674 || 64 == v_t_31501 || 256 == v_t_31501 || 512 == v_t_31501) {
              if (v_e_31502.Pg = v_xi_30311(v_e_31502) / v_i_31500, v_e_31502.Og = (v_e_31502.od - v_d_31465) / v_i_31500, v_U_30262.Aa && (v_e_31502.Gg = v_e_31502.Pg - .1 / v_i_31500, v_e_31502.Ng = v_e_31502.Pg + .1 / v_i_31500), (v_r_31504 = v_e_31502.Mw()).Pg = v_xi_30311(v_r_31504) / v_i_31500, v_r_31504.Og = (v_r_31504.od - v_d_31465) / v_i_31500, v_e_31502.od <= v_d_31465 && v_r_31504.od >= v_d_31465) {
                for (let v_t_31507 = 0; v_t_31507 < v_e_31502.We.length - 1; ++v_t_31507) (v_n_31503 = v_e_31502.We[v_t_31507]).Fi !== v_jn_27680 && v_n_31503.Fi !== v_On_27681 && v_n_31503.Fi !== v_Jn_27679 && v_n_31503.Fi !== v_Un_27676 && v_n_31503.Fi !== v_Wn_27684 && v_n_31503.Fi !== v_Vn_27683 && v_n_31503.Fi !== v_Xn_27685 && v_n_31503.Fi !== v_e0_27695 && v_n_31503.Fi !== v_n0_27696 && v_n_31503.Fi !== v_i0_27694 && v_n_31503.Fi !== v_r0_27697 && v_n_31503.Fi !== v_s0_27698 && v_n_31503.Fi !== v_a0_27699 && v_n_31503.Fi !== v_l0_27701 && v_n_31503.Fi !== v_o0_27700 || (v_n_31503.Pg = v_xi_30311(v_n_31503) / v_i_31500, v_n_31503.Og = (v_n_31503.od - v_d_31465) / v_i_31500);
                v_U_30262.ea.length <= v_U_30262.ta ? v_U_30262.ea.push(v_e_31502) : v_U_30262.ea[v_U_30262.ta] = v_e_31502, ++v_U_30262.ta;
              } else if (v_r_31504.Pg >= v_e_31502.Pg) {
                if (-.25 < v_r_31504.Pg && v_e_31502.Pg < .84) {
                  for (let v_t_31508 = 0; v_t_31508 < v_e_31502.We.length - 1; ++v_t_31508) (v_n_31503 = v_e_31502.We[v_t_31508]).Fi !== v_jn_27680 && v_n_31503.Fi !== v_On_27681 && v_n_31503.Fi !== v_Jn_27679 && v_n_31503.Fi !== v_Un_27676 && v_n_31503.Fi !== v_Wn_27684 && v_n_31503.Fi !== v_Vn_27683 && v_n_31503.Fi !== v_Xn_27685 && v_n_31503.Fi !== v_e0_27695 && v_n_31503.Fi !== v_n0_27696 && v_n_31503.Fi !== v_i0_27694 && v_n_31503.Fi !== v_r0_27697 && v_n_31503.Fi !== v_s0_27698 && v_n_31503.Fi !== v_a0_27699 && v_n_31503.Fi !== v_l0_27701 && v_n_31503.Fi !== v_o0_27700 || (v_n_31503.Pg = v_xi_30311(v_n_31503) / v_i_31500, v_n_31503.Og = (v_n_31503.od - v_d_31465) / v_i_31500);
                  v_U_30262.ea.length <= v_U_30262.ta ? v_U_30262.ea.push(v_e_31502) : v_U_30262.ea[v_U_30262.ta] = v_e_31502, ++v_U_30262.ta;
                }
              } else if (-.25 < v_e_31502.Pg && v_r_31504.Pg < .84) {
                for (let v_t_31509 = 0; v_t_31509 < v_e_31502.We.length - 1; ++v_t_31509) (v_n_31503 = v_e_31502.We[v_t_31509]).Fi !== v_jn_27680 && v_n_31503.Fi !== v_On_27681 && v_n_31503.Fi !== v_Jn_27679 && v_n_31503.Fi !== v_Un_27676 && v_n_31503.Fi !== v_Wn_27684 && v_n_31503.Fi !== v_Vn_27683 && v_n_31503.Fi !== v_Xn_27685 && v_n_31503.Fi !== v_e0_27695 && v_n_31503.Fi !== v_n0_27696 && v_n_31503.Fi !== v_i0_27694 && v_n_31503.Fi !== v_r0_27697 && v_n_31503.Fi !== v_s0_27698 && v_n_31503.Fi !== v_a0_27699 && v_n_31503.Fi !== v_l0_27701 && v_n_31503.Fi !== v_o0_27700 || (v_n_31503.Pg = v_xi_30311(v_n_31503) / v_i_31500, v_n_31503.Og = (v_n_31503.od - v_d_31465) / v_i_31500);
                v_U_30262.ea.length <= v_U_30262.ta ? v_U_30262.ea.push(v_e_31502) : v_U_30262.ea[v_U_30262.ta] = v_e_31502, ++v_U_30262.ta;
              }
            } else v_t_31501 !== v_Cn_27662 && v_t_31501 !== v_zn_27686 || (v_e_31502.Og = (v_e_31502.od - v_d_31465) / v_i_31500, v_e_31502.od >= v_d_31465 ? v_e_31502.Pg = v_xi_30311(v_e_31502) / v_i_31500 : v_e_31502.Pg = v_e_31502.Og, v_U_30262.Aa && (v_e_31502.Gg = v_e_31502.Pg - .1 / v_i_31500, v_e_31502.Ng = v_e_31502.Pg + .1 / v_i_31500), -.25 < v_e_31502.Pg && v_e_31502.Pg < .84 && (v_U_30262.ea.length <= v_U_30262.ta ? v_U_30262.ea.push(v_e_31502) : v_U_30262.ea[v_U_30262.ta] = v_e_31502, ++v_U_30262.ta));
            v_s_31505 && v_U_30262.Y1.k0 && (v_U_30262.Sa = !0);
          }
          {
            glContext.enable(glContext.BLEND), glContext.disable(glContext.STENCIL_TEST), glContext.disable(glContext.CULL_FACE), glContext.depthFunc(glContext.LESS), glContext.cullFace(glContext.FRONT_AND_BACK), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.loadIdentity(), glContext.perspective(45, v_yn_27656 / v_Sn_27657, .1, v_ve_27731), glContext.lookAt(0, 850, 850, 0, -290, -1536, 0, 1, 0), glContext.translate(0, 0, -6);
            let v_e_31510 = v_U_30262.rr + v_U_30262.I1,
              v_t_31511 = 0,
              v_i_31512;
            var v_v_31466 = [];
            for (v_t_31511 = 0; v_t_31511 < v_U_30262.ta; ++v_t_31511) ((v_i_31512 = v_U_30262.ea[v_t_31511]).Fi & v_xn_27661) !== v_zn_27686 && v_i_31512.Fi !== v_ue_27682 && v_i_31512.Fi !== v_t0_27693 && v_i_31512.Fi !== v_s0_27698 || v_v_31466.push(v_i_31512);
            v_v_31466.sort((v_t_31514, v_i_31515) => v_i_31515.Pg - v_t_31514.Pg);
            let v_n_31513 = !1;
            for (v_t_31511 = 0; v_t_31511 < v_U_30262.ta; ++v_t_31511) if (!((v_i_31512 = v_U_30262.ea[v_t_31511]).Fi !== v_ue_27682 && v_i_31512.Fi !== v_t0_27693 || 1 !== v_i_31512.Ug && 2 !== v_i_31512.Ug)) {
              v_n_31513 = !0;
              break;
            }
            for (v_U_30262.X1 ? (glContext.pushMatrix(), glContext.translate(0, -10, 0), v_li_30290.le(v_oi_30289), glContext.popMatrix()) : v_k_30287.Rl(), v_k_30287.Fl(), glContext.depthMask(!1), glContext.enable(glContext.DEPTH_TEST), glContext.enable(glContext.STENCIL_TEST), glContext.stencilFunc(glContext.NOTEQUAL, 1, 1), glContext.stencilOp(glContext.KEEP, glContext.KEEP, glContext.KEEP), v_U_30262.ha.Zl().forEach(function (v_t_31516) {
              v_t_31516.lr && (v_t_31516.ar = v_k_30287.gc(v_t_31516.Fi, v_t_31516.ar, (renderer.xt() - v_t_31516.rr) / 1e3 * 60), !0 === v_t_31516.ar) && (v_t_31516.lr = !1);
            }), glContext.disable(glContext.STENCIL_TEST), glContext.depthMask(!0), glContext.enable(glContext.DEPTH_TEST), v_k_30287.Hl(), v_k_30287.tc(v_v_31466), v_k_30287.ac(1), v_k_30287.ac(5), glContext.depthMask(!1), glContext.enable(glContext.DEPTH_TEST), v_k_30287.Pl(), v_k_30287.Dl(), v_k_30287.Ul(), v_k_30287.zl(), v_k_30287.Ol(), v_t_31511 = 0; v_t_31511 < v_U_30262.ta; ++v_t_31511) v_U_30262.ea[v_t_31511].Fi === v_le_27675 && v_k_30287.ec(v_U_30262.ea[v_t_31511]);
            for (v_t_31511 = 0; v_t_31511 < v_U_30262.ta; ++v_t_31511) v_U_30262.ea[v_t_31511].Fi === v_ce_27678 && v_k_30287.ec(v_U_30262.ea[v_t_31511]);
            for (v_U_30262.Aa && v_k_30287.z4(), v_k_30287.$l(), v_k_30287.rc(v_v_31466), v_k_30287.ql(), v_k_30287.Ql(), v_k_30287.nc(v_v_31466), v_t_31511 = 0; v_t_31511 < v_v_31466.length; ++v_t_31511) v_v_31466[v_t_31511].Fi === v_t0_27693 && v_k_30287.dc(v_v_31466[v_t_31511]);
            for (v_t_31511 = 0; v_t_31511 < v_v_31466.length; ++v_t_31511) v_v_31466[v_t_31511].Fi === v_t0_27693 && v_k_30287._c(v_v_31466[v_t_31511]);
            for (v_k_30287.uc(v_v_31466), v_k_30287.Jl(v_n_31513), v_t_31511 = 0; v_t_31511 < v_v_31466.length; ++v_t_31511) v_v_31466[v_t_31511].Fi === v_s0_27698 && v_k_30287.hc(v_v_31466[v_t_31511]);
            for (v_k_30287.lc(v_v_31466), v_t_31511 = 0; v_t_31511 < v_v_31466.length; ++v_t_31511) v_v_31466[v_t_31511].Fi === v_ue_27682 && v_k_30287._c(v_v_31466[v_t_31511]);
            v_k_30287.ac(2), v_k_30287.oc(v_v_31466), v_k_30287.ic(v_v_31466), v_U_30262._a.Zl().forEach(function (v_t_31517) {
              v_t_31517.lr && (v_t_31517.ar = v_k_30287.vc(v_t_31517.Fi, v_t_31517.ir, v_t_31517.Le, v_t_31517.nr, (renderer.xt() - v_t_31517.rr) / 1e3 * 60, v_t_31517.ar, v_t_31517.G0), !0 === v_t_31517.ar) && (v_t_31517.lr = !1);
            }), v_U_30262.da.Zl().forEach(function (v_t_31518) {
              var v_i_31519;
              v_t_31518.lr && 1 === v_t_31518.cr.Ug && null !== (v_i_31519 = v_t_31518.cr.Oc(v_e_31510)) && v_k_30287.vc(5, (v_i_31519.rw + v_i_31519.aw) / 2 / 16 * v_x0_27729 - v_we_27734, 0, 0, (renderer.xt() - v_t_31518.rr) / 1e3 * 60, null, 0) && (v_t_31518.rr = renderer.xt());
            }), v_k_30287.Xl(), v_k_30287.Wl(v_n_31513, v_U_30262.A1 ? {
              y: 0,
              hand: !0
            } : inputModule.dR(), v_U_30262.A1);
          }
          if (v_U_30262.Y1.k0) v_Ei_30323();else if ((v_U_30262.A1 || v_U_30262.Y1.J6) && !(v_Te_27911.Ti() || v_U_30262.n1 < v_S_30187)) {
            var v_w_31467 = inputModule.vR();
            let v_i_31520 = !1;
            for (let v_t_31521 = 0; v_t_31521 < v_w_31467.length; ++v_t_31521) "f9" === v_w_31467[v_t_31521].Ae && (v_i_31520 = 2 === v_w_31467[v_t_31521].lu);
            v_i_31520 && (v_U_30262.Y1.J6 ? (++v_U_30262.kk, 2 <= v_U_30262.kk && (v_U_30262.W1 && v_Se_27889.i6(v_U_30262.W1), v_y_30322())) : v_Te_27911.Ai(v_Ue_28209("pldConfirmExit"), v_G0_27772, 0, function (v_t_31522) {
              v_t_31522 === v_H0_27781 && v_y_30322();
            }));
          }
        } else v_Pi_30318();
      }
      function v_Bi_30326(v_t_31523, v_i_31524, v_e_31525) {
        v_U_30262.i1 && (v_U_30262.Z1 || backgroundRenderer.le(v_t_31523), glContext.clearStencil(0), glContext.clear(glContext.DEPTH_BUFFER_BIT | glContext.STENCIL_BUFFER_BIT), glContext.enable(glContext.BLEND), glContext.disable(glContext.DEPTH_TEST), glContext.disable(glContext.STENCIL_TEST), glContext.disable(glContext.CULL_FACE), glContext.cullFace(glContext.FRONT_AND_BACK), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), glContext.matrixMode(glContext.MODELVIEW), glContext.loadIdentity(), v_U_30262.Z1 ? v_U_30262.z1 ? (v_k_30287.El(v_U_30262.z1), v_k_30287.Ll()) : v_k_30287.Al() : v_k_30287.Cl(backgroundRenderer.KP(), backgroundRenderer.qP()));
      }
      function v_Ni_30327(v_t_31526) {
        let v_i_31527 = 0;
        v_U_30262.Ta.wr && (v_i_31527 |= v_ua_28041), v_U_30262.Ka() && (v_i_31527 |= v_la_28039), v_t_31526 ? v_oe_27649.rC(v_U_30262.Ta.Sr, v_i_31527) : (v_oe_27649.sC(v_U_30262.Vx, v_U_30262.Ta.Sr, v_i_31527, v_U_30262.Wx), v_U_30262.Wx = []);
      }
      async function v_Gi_30328(v_e_31528, v_n_31529) {
        if (v_e_31528 === v_Js_28018) {
          v_Or_27965.Y4(), skillTrigger.Mt(), v_U_30262.W1 && v_Se_27889.i6(v_U_30262.W1), v_U_30262.z1 && v_U_30262.z1.pause(), v_Te_27911.Li(), v_Ae_27892.i6("play_result_bgm");
          var v_r_31530 = v_U_30262.Y1.A0;
          v_Oi_30335(), sceneManager.WS(v_E1_27899), v_j1_27909.ti(), await new Promise(v_t_31533 => v_Te_27911.Ai(v_Ue_28209("copClosedByHost"), v_N0_27771, 5e3, v_t_31533)), v_r_31530 && v_r_31530();
        } else if (v_e_31528 === v_qs_28027) {
          v_r_31530 = v_U_30262.Ta.br;
          v_U_30262.Ta.br = v_oe_27649.aC, v_r_31530 !== v_U_30262.Ta.br && v_k_30287.Vl(), v_U_30262.ka = !0;
        } else if (v_e_31528 === v_ia_28032 && v_A_30193 === v_U_30262.n1 && v_n_31529.yx === v_oe_27649.Px) if (v_U_30262.vI) {
          let v_t_31534 = 0,
            v_i_31535 = -1;
          for (var v_s_31531 of v_oe_27649.Ox) if (v_s_31531.Ae !== v_oe_27649.sx()) {
            if (v_s_31531.Ae === v_n_31529.nx) {
              v_i_31535 = v_t_31534;
              break;
            }
            ++v_t_31534;
          }
          var v_a_31532;
          0 <= v_i_31535 && (v_r_31530 = v_Wr_27968.oI(v_n_31529.fI)) && v_R_30261.mI[v_r_31530.lI] && (v_e_31528 = v_R_30261.gI[v_t_31534], v_sl_28151(v_a_31532 = v_R_30261.mI[v_r_31530.lI].Ve(!0), v_r_31530), v_e_31528.tn(), v_e_31528.Ze(v_a_31532), v_e_31528.Be = !0, v_I_30254.e8(2 + v_r_31530.lI, v_e_31528), v_Ae_27892.dn("chat" + v_r_31530.lI));
        } else v_U_30262.wI.push(v_n_31529);
      }
      async function v_Ui_30329(v_t_31536, v_i_31537) {
        var v_e_31538;
        v_t_31536 === v_U_30262.n1 && (v_t_31536 = handshake.On.iI[v_i_31537 + v_t1_27820], v_i_31537 = v_Wr_27968.oI(v_t_31536)) && (await v_oe_27649.cI(v_t_31536, "")) === v_Ms_28009 && v_R_30261.mI[v_i_31537.lI] && (v_t_31536 = v_I_30254.lt.yk(509), v_sl_28151(v_e_31538 = v_R_30261.mI[v_i_31537.lI].Ve(!0), v_i_31537, 1), v_t_31536.tn(), v_t_31536.Ze(v_e_31538), v_t_31536.Be = !0, v_I_30254.e8(2 + v_i_31537.lI, v_t_31536), v_Ae_27892.dn("chat" + v_i_31537.lI));
      }
      function v_Hi_30330() {
        if (v_U_30262) switch (v_U_30262.n1) {
          case v_l_30184:
            v_t_30332(v_D_30185);
            break;
          case v_D_30185:
            v_t_30332(v_F_30186);
            break;
          case v_F_30186:
            v_t_30332(v_S_30187);
            break;
          case v_S_30187:
            v_t_30332(v_B_30188);
            break;
          case v_B_30188:
            v_U_30262.Y1.k0 ? v_t_30332(v_tt_30196) : v_t_30332(v_N_30189);
            break;
          case v_N_30189:
            v_t_30332(v_G_30190);
            break;
          case v_G_30190:
            v_t_30332(v_q_30191);
            break;
          case v_q_30191:
            v_t_30332(v_Z_30192);
            break;
          case v_Z_30192:
            v_U_30262.Y1.J6 ? v_t_30332(v_tt_30196) : v_t_30332(v_A_30193);
            break;
          case v_A_30193:
            v_U_30262.J1 ? v_t_30332(v_$_30194) : v_t_30332(v_tt_30196);
            break;
          case v_$_30194:
            v_U_30262.Y1._0.U0 < 2 && 0 < v_U_30262.Y1._0.V0 ? v_t_30332(v_Q_30195) : v_t_30332(v_tt_30196);
            break;
          case v_Q_30195:
            v_t_30332(v_tt_30196);
        }
      }
      function v_a_30331() {
        v_Fe_28101(v_Hi_30330);
      }
      async function v_t_30332(v_i_31539) {
        switch (v_U_30262.n1 = v_i_31539) {
          case v_l_30184:
            v_E_30309() && v_oe_27649.uC(!0), v_U_30262.Y1.J6 ? (v_s_31541 = await systemMisc.O6(v_Se_27889.y6(), v_yn_27656 * v_Sn_27657 * 4, v_Se_27889.dv())).ok ? (v_Se_27889.p6(), v_d1_27871(v_Di_30324), v_a_30331()) : (menuSystem.QI(), v_Te_27911.Ai("Video Exporter Error\n" + v_s_31541.msg, v_N0_27771 | v_U0_27775, 0, v_t_31555 => {
              v_a_30331();
            })) : v_a_30331();
            break;
          case v_D_30185:
          case v_N_30189:
            let v_t_31554 = null;
            v_U_30262.Ta.wr ? v_t_31554 = null : v_i_31539 === v_D_30185 ? v_t_31554 = v_Mi_30321(v_J0_27787, 0, 0, 0, 0, !0) : v_i_31539 === v_N_30189 && (v_t_31554 = v_Mi_30321(v_V0_27790, 0, 0, 0, 0, !0)), v_t_31554 && v_t_31554.NP && v_t_31554.UP && 0 < v_t_31554.UP.length ? (v_Ae_27892.dn("skilltrigger"), v_t_31554.GP && (v_U_30262.Ta.yr.Cr += v_t_31554.GP, v_U_30262.Ta.yr.Ar += v_t_31554.GP), renderer.W6(function () {
              v_U_30262.ka = !0;
            }, 800), v_c_30252.Jt = !0, v_R_30261.vs.Be = !0, v_R_30261.gs.Be = !0, v_c_30252.e8(0), v_x_30250.e8(10), await renderer.C7(5e3), v_c_30252.Jt = !1, v_R_30261.vs.Be = !1, v_R_30261.gs.Be = !1, v_i_31539 === v_N_30189 && (await renderer.C7(500)), v_a_30331()) : v_i_31539 === v_N_30189 ? (v_U_30262.ka = !0, renderer.W6(v_a_30331, 2e3)) : renderer.W6(v_a_30331, 1e3);
            break;
          case v_F_30186:
            v_E_30309() && (v_V1_27912.T0(500), await v_oe_27649.Lx(v_va_28046), await v_oe_27649.Tx(v_va_28046), v_V1_27912.XS()), menuSystem.QI(), v_U_30262.q1.Zu.Bw || handshake.rm.Lm || (v_C_30251.Jt = !0, v_C_30251.e8(2)), v_U_30262.Y1.k0 || (v_T_30253.Jt = !0, (v_s_31541 = v_T_30253.lt.yk(196)).Be = !0, v_s_31541.yk(198).Je = "base_" + v_Q0_27805[v_U_30262.Y1.te], v_s_31541.yk(199).Je = "base_" + v_Q0_27805[v_U_30262.Y1.te], v_s_31541.yk(197).Be = 4 !== v_U_30262.Y1.te, v_s_31541.yk(204).Be = 4 !== v_U_30262.Y1.te, v_s_31541.yk(200).Be = 4 === v_U_30262.Y1.te, v_s_31541.yk(225).Be = 4 === v_U_30262.Y1.te, v_s_31541.yk(248).Wt = "" + (handshake.Bm.Fm + 1), v_s_31541.yk(249).Be = !v_U_30262.J1, v_s_31541.yk(252).Be = v_U_30262.J1, v_U_30262.J1 ? (v_u_31540 = v_Tr_27949.Kc(v_U_30262.Y1._0.V0, v_U_30262.Y1._0.vn.bP), v_s_31541.yk(254).Wt = "" + v_U_30262.Y1._0.V0, v_s_31541.yk(254).Ak = v_u_31540 ? "lifeCurrent" : "lifeDanger") : v_s_31541.yk(251).Wt = "" + (v_U_30262.O1 + 1), v_T_30253.e8(7), await renderer.C7(3e3), v_T_30253.lt.yk(196).Be = !1, v_T_30253.Jt = !1), v_a_30331();
            break;
          case v_S_30187:
            v_U_30262.l1 = renderer.xt(), v_U_30262.Y1.k0 || v_Vi_30336();
            break;
          case v_B_30188:
            if (!v_U_30262.Y1.k0) {
              let v_t_31556 = 0,
                v_i_31557 = 0,
                v_e_31558 = (v_E_30309() && (v_Ni_30327(), await v_oe_27649.Lx(v_wa_28047), await v_oe_27649.Tx(v_wa_28047), v_U_30262.W1 && v_U_30262.Ta.wr && v_Se_27889.i6(v_U_30262.W1), v_t_31556 = v_U_30262.Xx(), v_i_31557 = v_oe_27649.oC), !1),
                v_n_31559 = 0,
                v_r_31560 = 0;
              v_t_31556 ? (v_n_31559 = 66, v_r_31560 = 7, v_e_31558 = !0, v_Or_27965.lC()) : 1e3 <= v_i_31557 ? (5e3 <= v_i_31557 ? (v_n_31559 = 166, v_r_31560 = 4, v_Or_27965.cC(5)) : 4e3 <= v_i_31557 ? (v_n_31559 = 146, v_r_31560 = 3, v_Or_27965.cC(4)) : 3e3 <= v_i_31557 ? (v_n_31559 = 126, v_r_31560 = 2, v_Or_27965.cC(3)) : 2e3 <= v_i_31557 ? (v_n_31559 = 106, v_r_31560 = 1, v_Or_27965.cC(2)) : (v_n_31559 = 86, v_r_31560 = 0, v_Or_27965.cC(1)), v_e_31558 = !0) : v_U_30262.Wa() ? (v_n_31559 = 44, v_r_31560 = 5, v_e_31558 = !0, v_Or_27965.X4()) : v_U_30262.Ka() && (v_n_31559 = 33, v_r_31560 = 6, v_e_31558 = !0, v_Or_27965.Z4()), v_e_31558 ? (v_o_30258.lt.yk(166).Be = !1, v_o_30258.lt.yk(146).Be = !1, v_o_30258.lt.yk(126).Be = !1, v_o_30258.lt.yk(106).Be = !1, v_o_30258.lt.yk(86).Be = !1, v_o_30258.lt.yk(66).Be = !1, v_o_30258.lt.yk(33).Be = !1, v_o_30258.lt.yk(44).Be = !1, v_o_30258.Jt = !0, v_o_30258.lt.yk(v_n_31559).Be = !0, v_o_30258.e8(v_r_31560), v_o_30258.e8(8), await renderer.C7(4e3), v_o_30258.lt.yk(v_n_31559).Be = !1, v_o_30258.Jt = !1) : await renderer.C7(1500);
            }
            v_a_30331();
            break;
          case v_G_30190:
            if (!v_U_30262.q1.Zu.c4 || v_U_30262.Y1.k0 || v_U_30262.Ta.wr) v_a_30331();else {
              let v_t_31561 = setInterval(() => {
                v_Se_27889.o1(v_U_30262.W1) || (clearInterval(v_t_31561), v_a_30331());
              }, 500);
            }
            break;
          case v_q_30191:
            v_E_30309() && (v_V1_27912.T0(500), await v_oe_27649.Lx(v_ga_28048), await v_oe_27649.Tx(v_ga_28048), v_V1_27912.XS(), v_U_30262.W1) && v_U_30262.Ta.wr && v_Se_27889.i6(v_U_30262.W1), v_U_30262.Ta.wr && (v_Wt_30257.e8(1), await renderer.C7(v_Ge_28204(30))), v_a_30331();
            break;
          case v_Z_30192:
            v_U_30262.Y1.J6 && (v_v1_27872(), v_Te_27911.W4(v_Ue_28209("cptFinalizing")), await renderer.C7(v_Ge_28204(20)), v_Se_27889.C6(), systemMisc.K6(), v_x1_27888("Video saved: " + (await systemMisc.Fp())), await renderer.C7(v_Ge_28204(20)), v_Te_27911.K4()), v_a_30331();
            break;
          case v_A_30193:
            v_Or_27965.Y4(), v_U_30262.W1 && v_Se_27889.i6(v_U_30262.W1), v_U_30262.z1 && v_U_30262.z1.pause(), v_Wt_30257.Jt = !1, v_Xt_30259.Jt = !1;
            {
              v_U_30262.Ta.mr = v_oe_27649.oC;
              let v_t_31562 = v_Ai_30310(v_U_30262.Ta.yr.Cr).Hc > v_U_30262.O1;
              v_U_30262.J1 && (v_t_31562 = 0 < v_U_30262.Y1._0.V0), v_U_30262.La.Sr = v_U_30262.Ta.Sr, v_U_30262.La.ni = v_t_31562, v_U_30262.La.R4 = v_U_30262.Ka(), v_U_30262.La.B4 = v_U_30262.Wa(), v_E_30309() && (v_U_30262.La.M4 = v_U_30262.Xx()), v_U_30262.La.D4 = new Date().getUTCDate(), v_U_30262.La.P4 = v_U_30262.Y1.y0.P4 + 1;
            }
            if (v_U_30262.J1) {
              var v_u_31540 = new v_zr_27970();
              if (v_u_31540.Sr = v_U_30262.Ta.Sr, v_u_31540.R4 = v_U_30262.Ka(), v_u_31540.B4 = v_U_30262.Wa(), v_u_31540.ni = 0 < v_U_30262.Y1._0.V0, v_u_31540.G4 = !0, v_U_30262.Y1._0.O0.push(v_u_31540), v_U_30262.Y1._0.V0 <= 0 || 2 <= v_U_30262.Y1._0.U0) {
                let v_t_31563 = !0,
                  v_i_31564 = !0;
                for (const v_n_31565 of v_U_30262.Y1._0.O0) v_U_30262.Ea.Sr += v_n_31565.Sr, v_t_31563 = v_t_31563 && v_n_31565.R4, v_i_31564 = v_i_31564 && v_n_31565.B4;
                v_U_30262.Ea.R4 = v_t_31563, v_U_30262.Ea.B4 = v_i_31564, v_U_30262.Ea.ni = 0 < v_U_30262.Y1._0.V0, v_U_30262.Ea.G4 = !0, v_U_30262.Ea.D4 = new Date().getUTCDate(), v_U_30262.Ea.P4 = v_U_30262.Y1._0.J0.P4 + 1;
              }
            }
            v_Te_27911.Li();
            {
              renderer._i(v_at_30210), renderer._i(v_lt_30212), renderer._i(v_ot_30211), renderer._i(v_ht_30217), v_j1_27909.ti(), v_I_30254.i8(10), v_I_30254.Jt = !0;
              let v_t_31566 = v_U_30262.La.ni,
                v_i_31567 = !v_U_30262.Y1.y0.G4,
                v_o_31568 = v_U_30262.La.Sr - v_U_30262.Y1.y0.Sr,
                v_e_31569 = 0,
                v_n_31570 = 0;
              v_e_31569 = v_U_30262.Y1.y0.B4 ? 2 : v_U_30262.Y1.y0.R4 ? 1 : 0;
              v_n_31570 = v_U_30262.La.B4 ? 2 : v_U_30262.La.R4 ? 1 : 0;
              let v_l_31571 = v_I_30254.lt.yk(81),
                v_c_31572 = v_I_30254.lt.yk(344);
              v_l_31571.Be = !0, v_c_31572.Be = !1, v_I_30254.lt.yk(3).Qt = v_l_31571.Qt = v_c_31572.Qt = v_E_30309() ? 200 : 240, v_I_30254.lt.yk(513).Qt = v_E_30309() ? 420 : 460, v_I_30254.lt.yk(524).Be = v_t_31566, v_x_30250.lt.yk(23).Be = v_t_31566, v_I_30254.lt.yk(535).Be = !v_t_31566, v_x_30250.lt.yk(36).Be = !v_t_31566, v_I_30254.lt.yk(517).Be = v_t_31566, v_I_30254.lt.yk(105).Be = v_E_30309(), v_l_31571.yk(87).Be = 0 < v_o_31568 || !v_U_30262.Y1.y0.G4, v_l_31571.yk(125).Be = rankLevel(v_U_30262.La.Sr) > rankLevel(v_U_30262.Y1.y0.Sr) || !v_U_30262.Y1.y0.G4, v_l_31571.yk(117).Be = v_n_31570 > v_e_31569, v_l_31571.yk(110).Be = v_U_30262.La.M4 > v_U_30262.Y1.y0.M4, v_i_31567 = (v_i_31567 = (v_i_31567 = v_i_31567 || 0 < v_o_31568) || rankLevel(v_U_30262.La.Sr) > rankLevel(v_U_30262.Y1.y0.Sr)) || v_n_31570 > v_e_31569, v_E_30309() && (v_i_31567 = v_i_31567 || v_U_30262.La.M4 > v_U_30262.Y1.y0.M4);
              var v_s_31541 = rankLabel(v_U_30262.La.Sr);
              {
                let v_n_31574,
                  v_r_31575,
                  v_s_31576,
                  v_i_31577 = v_l_31571.yk(94),
                  v_e_31578;
                var v_u_31540 = v_U_30262.La.Sr,
                  v_f_31542 = v_u_31540.toString(),
                  v___31543 = rankGrade(v_u_31540);
                for (let v_t_31580 = 0; v_t_31580 < 7; ++v_t_31580) v_e_31578 = v_i_31577.ot("boardScoreNum" + v_t_31580), v_f_31542.length <= v_t_31580 ? (v_e_31578.Be = !1, 6 === v_t_31580 ? v_i_31577.ot("boardScoreNumC1").Be = !1 : 3 === v_t_31580 && (v_i_31577.ot("boardScoreNumC0").Be = !1)) : (6 === v_t_31580 ? v_i_31577.ot("boardScoreNumC1").Be = !0 : 3 === v_t_31580 && (v_i_31577.ot("boardScoreNumC0").Be = !0), v_e_31578.Be = !0, v_e_31578.Je = "numRank" + v___31543 + v_f_31542[v_f_31542.length - v_t_31580 - 1]);
                v_i_31577.ot("boardScoreNumC0").Je = "numRank" + v___31543 + "C", v_i_31577.ot("boardScoreNumC1").Je = "numRank" + v___31543 + "C", v_n_31574 = v_l_31571.yk(91), v_r_31575 = v_l_31571.yk(92), 0 < v_o_31568 || !v_U_30262.Y1.y0.G4 ? (v_n_31574.Be = !0, v_r_31575.Be = !1, v_n_31574.Wt = "P" + v_o_31568.toLocaleString("ja").replaceAll(",", "C"), v_n_31574.Qe(1, 1, 0)) : v_o_31568 < 0 ? (v_n_31574.Be = !0, v_r_31575.Be = !1, v_n_31574.Wt = "M" + (-v_o_31568).toLocaleString("ja").replaceAll(",", "C"), v_n_31574.Qe(.65, .79, .94)) : (v_n_31574.Be = !1, v_r_31575.Be = !0), v_l_31571.yk(90).Wt = mathMax(v_U_30262.La.Sr, v_U_30262.Y1.y0.Sr).toLocaleString("ja").replaceAll(",", "C"), v_i_31577 = v_l_31571.yk(119);
                var v_h_31544 = !1;
                v_e_31578 = v_i_31577.yk(143), v_h_31544 |= v_e_31578.Be = 1009e3 <= v_u_31540 && !0, v_e_31578 = v_i_31577.yk(174), v_h_31544 |= v_e_31578.Be = 1007500 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(198), v_h_31544 |= v_e_31578.Be = 1005e3 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(222), v_h_31544 |= v_e_31578.Be = 1e6 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(239), v_h_31544 |= v_e_31578.Be = 99e4 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(256), v_h_31544 |= v_e_31578.Be = 975e3 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(266), v_h_31544 |= v_e_31578.Be = 95e4 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(274), v_h_31544 |= v_e_31578.Be = 925e3 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(280), v_h_31544 |= v_e_31578.Be = 9e5 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(284), v_h_31544 |= v_e_31578.Be = 8e5 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(288), v_h_31544 |= v_e_31578.Be = 7e5 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(291), v_h_31544 |= v_e_31578.Be = 6e5 <= v_u_31540 && !v_h_31544, v_e_31578 = v_i_31577.yk(293), v_h_31544 |= v_e_31578.Be = 5e5 <= v_u_31540 && !v_h_31544, (v_e_31578 = v_i_31577.yk(295)).Be = !v_h_31544, v_l_31571.yk(126).Be = 975e3 <= v_u_31540, (v_e_31578 = v_l_31571.yk(105)).Be = v_E_30309(), v_l_31571.yk(111).Wt = "" + v_U_30262.Ta.mr, 2 <= v_U_30262.La.M4 ? (v_e_31578.yk(108).Je = "badgeFch2", v_e_31578.yk(109).Je = "badgeFch2", v_e_31578.yk(108).Be = !0, v_e_31578.yk(109).Be = !0) : 1 === v_U_30262.La.M4 ? (v_e_31578.yk(108).Je = "badgeFch", v_e_31578.yk(109).Je = "badgeFch", v_e_31578.yk(108).Be = !0, v_e_31578.yk(109).Be = !0) : (v_e_31578.yk(108).Be = !1, v_e_31578.yk(109).Be = !1), v_e_31578 = v_l_31571.yk(112), v_U_30262.La.B4 ? (v_e_31578.yk(115).Je = "badgeAj", v_e_31578.yk(116).Je = "badgeAj", v_e_31578.yk(115).Be = !0, v_e_31578.yk(116).Be = !0) : v_U_30262.La.R4 ? (v_e_31578.yk(115).Je = "badgeFc", v_e_31578.yk(116).Je = "badgeFc", v_e_31578.yk(115).Be = !0, v_e_31578.yk(116).Be = !0) : (v_e_31578.yk(115).Be = !1, v_e_31578.yk(116).Be = !1), v_l_31571.yk(118).Wt = "" + v_U_30262.Ta.kr, v_l_31571.yk(301).Wt = "" + v_U_30262.Ta.Tr.Lr, v_l_31571.yk(304).Wt = "" + v_U_30262.Ta.Tr.Er, v_l_31571.yk(307).Wt = "" + v_U_30262.Ta.Tr.Fr, v_l_31571.yk(310).Wt = "" + v_U_30262.Ta.Tr.Br;
                let v_a_31579 = [[v_U_30262.Ta.R5.M5, v_U_30262.Ta.R5.D5, v_U_30262.Ta.R5.P5, v_U_30262.Ta.R5.G5], [v_U_30262.Ta.R5.N5, v_U_30262.Ta.R5.j5, v_U_30262.Ta.R5.H5, v_U_30262.Ta.R5.U5], [v_U_30262.Ta.R5.V5, v_U_30262.Ta.R5.J5, v_U_30262.Ta.R5.O5, v_U_30262.Ta.R5.W5], [v_U_30262.Ta.R5.K5, v_U_30262.Ta.R5.z5, v_U_30262.Ta.R5.X5, v_U_30262.Ta.R5.Z5], [v_U_30262.Ta.R5.Y5, v_U_30262.Ta.R5.q5, v_U_30262.Ta.R5.Q5, v_U_30262.Ta.R5.e4]];
                v_De_28096([["Tap", v_U_30262.q1.Zu.ew.Ra, v_U_30262.Ta.Mr.Rr, v_U_30262.Ta.Mr.Pr], ["Slide", v_U_30262.q1.Zu.ew.Da, v_U_30262.Ta.Mr.Dr, v_U_30262.Ta.Mr.Gr], ["Hold", v_U_30262.q1.Zu.ew.iw, v_U_30262.Ta.Mr.jr, v_U_30262.Ta.Mr.Nr], ["Air", v_U_30262.q1.Zu.ew.Ga, v_U_30262.Ta.Mr.Hr, v_U_30262.Ta.Mr.Ur], ["Flick", v_U_30262.q1.Zu.ew.ja, v_U_30262.Ta.Mr.Vr, v_U_30262.Ta.Mr.Or]], function (v_t_31581, v_i_31582) {
                  var v_e_31583;
                  v_n_31574 = v_l_31571.ot("boardDetail" + v_t_31581[0] + "Rate"), v_r_31575 = v_l_31571.ot("boardDetail" + v_t_31581[0] + "Count"), v_s_31576 = v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "Rate"), 0 === v_t_31581[1] ? (v_l_31571.ot("boardDetail" + v_t_31581[0] + "Bg").Je = "panelJudgeDetail" + v_t_31581[0], v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "RateBg").Je = "detailRateN", v_n_31574.Qe(1, 1, 1), v_n_31574.Wt = "MMMP", v_r_31575.Qe(1, 1, 1), v_r_31575.Wt = "MMM", v_s_31576.Qe(.73, .62, .76), v_s_31576.Wt = "MMMP") : ("101" == (v_e_31583 = "" + mathFloor(v_t_31581[3] / v_t_31581[1])) ? (v_l_31571.ot("boardDetail" + v_t_31581[0] + "Bg").Je = "panelJudgeDetail" + v_t_31581[0] + "P", v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "RateBg").Je = "detailRateP", v_n_31574.Qe(.2549, .19216, .66667), v_r_31575.Qe(.2549, .19216, .66667), v_s_31576.Qe(.2549, .19216, .66667)) : "100" == v_e_31583 ? (v_l_31571.ot("boardDetail" + v_t_31581[0] + "Bg").Je = "panelJudgeDetail" + v_t_31581[0] + "G", v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "RateBg").Je = "detailRateG", v_n_31574.Qe(0, 0, 0), v_r_31575.Qe(0, 0, 0), v_s_31576.Qe(0, 0, 0)) : (v_l_31571.ot("boardDetail" + v_t_31581[0] + "Bg").Je = "panelJudgeDetail" + v_t_31581[0], v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "RateBg").Je = "detailRateN", v_n_31574.Qe(1, 1, 1), v_r_31575.Qe(1, 1, 1), v_s_31576.Qe(.73, .62, .76)), v_n_31574.Wt = v_e_31583 + "P", v_s_31576.Wt = (v_t_31581[3] / v_t_31581[1]).toFixed(2).replaceAll(".", "C") + "P", v_r_31575.Wt = "" + v_t_31581[2]), (v_s_31576 = v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "CCount")).Wt = "" + v_a_31579[v_i_31582][0], v_s_31576.qe = 0 === v_a_31579[v_i_31582][0] ? .25 : 1, (v_s_31576 = v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "JCount")).Wt = "" + v_a_31579[v_i_31582][1], v_s_31576.qe = 0 === v_a_31579[v_i_31582][1] ? .25 : 1, (v_s_31576 = v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "ACount")).Wt = "" + v_a_31579[v_i_31582][2], v_s_31576.qe = 0 === v_a_31579[v_i_31582][2] ? .25 : 1, (v_s_31576 = v_c_31572.ot("boardDetailNotes" + v_t_31581[0][0] + "MCount")).Wt = "" + v_a_31579[v_i_31582][3], v_s_31576.qe = 0 === v_a_31579[v_i_31582][3] ? .25 : 1;
                }), v_l_31571.yk(333).Wt = "" + v_U_30262.Ta.Jr.Kr, v_l_31571.yk(336).Wt = "" + v_U_30262.Ta.Jr.Wr, v_c_31572.yk(486).Wt = "" + v_U_30262.Ta.Jr.Kr, v_c_31572.yk(490).Wt = "" + v_U_30262.Ta.Jr.Wr;
                var v_h_31544 = mathMax(v_U_30262.Ta.Jr.zr, v_U_30262.Ta.Jr.Xr, v_U_30262.Ta.Jr.Zr, v_U_30262.Ta.Jr.Yr, v_U_30262.Ta.Jr.$r, v_U_30262.Ta.Jr.qr, v_U_30262.Ta.Jr.Qr);
                v_c_31572.yk(452).ln(1, v_U_30262.Ta.Jr.Qr / v_h_31544), v_c_31572.yk(453).ln(1, v_U_30262.Ta.Jr.qr / v_h_31544), v_c_31572.yk(464).ln(1, v_U_30262.Ta.Jr.$r / v_h_31544), v_c_31572.yk(465).ln(1, v_U_30262.Ta.Jr.Yr / v_h_31544), v_c_31572.yk(466).ln(1, v_U_30262.Ta.Jr.Zr / v_h_31544), v_c_31572.yk(479).ln(1, v_U_30262.Ta.Jr.Xr / v_h_31544), v_c_31572.yk(480).ln(1, v_U_30262.Ta.Jr.zr / v_h_31544), v_c_31572.yk(454).Wt = "" + v_U_30262.Ta.Jr.Qr, v_c_31572.yk(455).Wt = "" + v_U_30262.Ta.Jr.qr, v_c_31572.yk(467).Wt = "" + v_U_30262.Ta.Jr.$r, v_c_31572.yk(468).Wt = "" + v_U_30262.Ta.Jr.Zr, v_c_31572.yk(481).Wt = "" + v_U_30262.Ta.Jr.Xr, v_c_31572.yk(482).Wt = "" + v_U_30262.Ta.Jr.zr, v_I_30254.lt.yk(491).Be = !v_U_30262.J1 && !v_U_30262.Y1.k0, v_U_30262.J1 || v_U_30262.Y1.k0 || (v_I_30254.lt.yk(494).Be = v_U_30262.Ta.wr, v_I_30254.lt.yk(495).Be = !v_U_30262.Ta.wr, v_I_30254.lt.yk(495).Wt = "P" + mathRound(v_U_30262.Ta.yr.Ar), v_nl_28149(v_I_30254.lt.yk(491), v_U_30262.Ar, !1), null !== v_U_30262.Ar.Om && (v_I_30254.lt.yk(499).Wt = "" + v_Qa_28089(v_U_30262.Ar.Km, 0, 999))), v_I_30254.lt.yk(12).Be = v_E_30309(), v_I_30254.lt.yk(492).Be = v_E_30309();
                for (const v_y_31584 of v_R_30261.gI) v_y_31584.Be = !1;
                if (v_I_30254.lt.yk(509).Be = !1, v_E_30309()) {
                  var v_d_31545,
                    v_v_31546,
                    v_w_31547,
                    v_g_31548,
                    v_m_31549,
                    v_p_31550 = v_I_30254.lt.yk(20);
                  for (v_d_31545 of v_p_31550.We) v_d_31545.Be = !1;
                  let v_t_31585 = 0;
                  for (v_v_31546 of v_oe_27649.Ox) v_v_31546.Ae === v_oe_27649.sx() ? v_I_30254.lt.yk(492).Je = "rank" + v_v_31546.iC : (v_w_31547 = v_oe_27649.ix.get(v_v_31546.Ae)) && ((v_g_31548 = v_p_31550.We[v_t_31585]).Be = !0, v_g_31548.ot("guestOrder").Je = "rank" + v_v_31546.iC, (v_m_31549 = v_g_31548.ot("guestScore")).Wt = v_v_31546.Sr.toLocaleString("ja").replaceAll(",", "C"), v_m_31549.Ak = "scoreRank" + rankGrade(v_v_31546.Sr), v_g_31548.ot("guestKilledFx").Be = !!(v_v_31546.ru & v_ua_28041), v_rl_28150(v_g_31548, v_w_31547), ++v_t_31585);
                }
                v_Ie_27966.D0("showRating") ? (v_u_31540 = handshake.rm.lm, v_h_31544 = "" + mathFloor(v_u_31540 / 100), v_k_31551 = v_Xa_28081("" + v_u_31540 % 100, 2, "0"), v_u_31540 = ratingColorName2(v_u_31540), (v_b_31552 = v_I_30254.lt.yk(342)).Wt = v_h_31544 + "P" + v_k_31551, v_b_31552.Ak = "lgRating" + v_u_31540, v_I_30254.lt.yk(343).Wt = "N0C00") : ((v_h_31544 = v_I_30254.lt.yk(342)).Wt = "00000", v_h_31544.Ak = "lgRatingWt", v_I_30254.lt.yk(343).Wt = "M");
              }
              v_t_31566 ? (v_I_30254.e8(27, void 0, 0), v_x_30250.e8(7, void 0, 0)) : (v_I_30254.e8(28, void 0, 0), v_x_30250.e8(9, void 0, 0));
              v_I_30254.e8(0, void 0, 0), v_I_30254.lt.yk(7).Be = v_U_30262.A1, v_U_30262.A1 && v_I_30254.e8(30, void 0, 135);
              v_I_30254.e8(34, void 0, 135), v_I_30254.e8(35, void 0, 135), v_I_30254.e8(36, void 0, 135), v_I_30254.e8(44, void 0, 165), v_I_30254.e8(45, void 0, 190), v_Ae_27892.q6("play_result_show_rank", v_Ge_28204(195)), v_I_30254.e8(32, void 0, 195), v_I_30254._8("rank" + v_s_31541, void 0, 205), v_I_30254.e8(19, void 0, 205), v_I_30254.e8(20, void 0, 235), v_I_30254.e8(43, void 0, 230);
              let v_r_31573 = 265;
              (v_U_30262.La.B4 || v_U_30262.La.R4) && (v_I_30254.e8(41, void 0, v_r_31573), v_r_31573 += 20, v_I_30254.e8(39, void 0, v_r_31573));
              v_E_30309() && v_U_30262.La.M4 && (v_I_30254.e8(42, void 0, v_r_31573), v_r_31573 += 20, v_I_30254.e8(40, void 0, v_r_31573));
              v_r_31573 += 15, v_I_30254.e8(33, void 0, v_r_31573), v_I_30254.e8(37, void 0, v_r_31573 - 3), v_I_30254.e8(31, void 0, v_r_31573 + 13), v_I_30254.e8(38, void 0, v_r_31573 + 13);
              for (let v_t_31586 = 0; v_t_31586 < 10; ++v_t_31586) v_Ae_27892.q6("play_result_open_details", v_Ge_28204(v_r_31573 + 13 + 3 * v_t_31586));
              renderer.Yt.Zt[v_pt_30223 + "0"] && v_I_30254.lt.Yc("charaImg").forEach(function (v_t_31587) {
                v_t_31587.zt = !0, v_t_31587.Xt = v_pt_30223 + "0";
              });
              v_I_30254.lt.yk(5).Be = !v_U_30262.Q1.ub, v_I_30254.lt.yk(6).Be = v_U_30262.Q1.ub, v_U_30262.J1 && v_x_30250.e8(3);
              v_Ae_27892.U6("play_result_bgm", v_Ge_28204(135)), v_Ae_27892.dn("play_result_gauge_" + (v_t_31566 ? "clear" : "failed")), renderer.W6(() => {
                v_Or_27965.q4(v_U_30262.La.Sr, v_i_31567);
              }, v_Ge_28204(205));
            }
            if (await renderer.C7(v_Ge_28204(135)), menuSystem.dt(), menuSystem.vt("next", "Next", 14, 2, v_W0_27791, !1, !0, !0, "enter", function (v_t_31588, v_i_31589) {
              "down" === v_t_31588 && (v_U_30262.n1 === v_A_30193 ? (v_I_30254.e8(10), menuSystem.wt("changeDisp", !1), menuSystem.wt("chat0", !1), menuSystem.wt("chat1", !1), menuSystem.wt("chat2", !1), menuSystem.wt("chat3", !1)) : v_U_30262.n1 === v_$_30194 && (v_T_30253.lt.yk(0).Be = !1, v_T_30253.lt.yk(42).Be = !1, v_T_30253.Jt = !1), menuSystem.kt("next", !0), renderer.W6(function () {
                v_a_30331();
              }, v_Ge_28204(15)));
            }), menuSystem.vt("changeDisp", "ChangeDisplay", 12, 2, v_X0_27795, !1, !0, !0, "", function (v_t_31590, v_i_31591) {
              var v_e_31592;
              "down" === v_t_31590 && (v_t_31590 = v_I_30254.lt.yk(81), v_e_31592 = v_I_30254.lt.yk(344), v_t_31590.Be = v_e_31592.Be, v_e_31592.Be = !v_t_31590.Be);
            }), v_E_30309()) for (let v_t_31593 = 0; v_t_31593 < 4; ++v_t_31593) menuSystem.aI("chat" + v_t_31593, handshake.On.iI[v_t_31593 + v_t1_27820], 2 * v_t_31593, !0, !0, function (v_t_31594, v_i_31595) {
              if ("down" === v_t_31594) switch (this.Ae) {
                case "chat0":
                  v_Ui_30329(v_A_30193, 0);
                  break;
                case "chat1":
                  v_Ui_30329(v_A_30193, 1);
                  break;
                case "chat2":
                  v_Ui_30329(v_A_30193, 2);
                  break;
                case "chat3":
                  v_Ui_30329(v_A_30193, 3);
              }
            });
            await renderer.C7(v_Ge_28204(238)), menuSystem.kt("next", !1), menuSystem.kt("changeDisp", !1), menuSystem.kt("chat0", !1), menuSystem.kt("chat1", !1), menuSystem.kt("chat2", !1), menuSystem.kt("chat3", !1), v_E_30309() && audioFontHub.T0(), v_U_30262.vI = !0;
            for (const v_r_31596 of v_U_30262.wI) v_Gi_30328(v_ia_28032, v_r_31596);
            v_U_30262.wI = [];
            break;
          case v_$_30194:
            v_Or_27965.Y4();
            var v_k_31551 = function () {
                let v_n_31597 = v_U_30262.Y1._0,
                  v_t_31598 = (renderer._i(v_vt_30219), v_P_30255.i8(0), v_P_30255.Jt = !0, v_U_30262.Ea.ni),
                  v_i_31599 = !1,
                  v_r_31600 = v_rc_28203(v_n_31597.O0, v_t_31615 => v_t_31615.Sr),
                  v_s_31601 = v_U_30262.Ea.Sr - v_n_31597.J0.Sr,
                  v_a_31602 = v_U_30262.Y1._0.V0 <= 0 || 2 <= v_n_31597.U0,
                  v_e_31603 = rankLabel(v_r_31600 / 3),
                  v_o_31604 = 0,
                  v_l_31605 = 0;
                v_a_31602 && (v_o_31604 = v_n_31597.J0.B4 ? 2 : v_n_31597.J0.R4 ? 1 : 0, v_l_31605 = v_U_30262.Ea.B4 ? 2 : v_U_30262.Ea.R4 ? 1 : 0);
                v_P_30255.lt.Kt(), v_P_30255.lt.yk(78).Wt = v_n_31597.vn.lf, v_P_30255.lt.yk(7).Je = "headerBg" + v_n_31597.vn.AP, v_P_30255.lt.yk(17).Be = v_a_31602, v_P_30255.lt.yk(11).Be = v_a_31602 && (0 < v_s_31601 || !v_n_31597.J0.G4), v_P_30255.lt.yk(82).Be = v_a_31602 && (rankLevel(v_U_30262.Ea.Sr) > rankLevel(v_n_31597.J0.Sr) || !v_n_31597.J0.G4), v_P_30255.lt.yk(16).Be = v_a_31602 && v_l_31605 > v_o_31604, v_a_31602 && (v_i_31599 = (v_i_31599 = (v_i_31599 = (v_i_31599 = v_i_31599 || !v_n_31597.J0.G4) || 0 < v_s_31601) || rankLevel(v_U_30262.La.Sr) > rankLevel(v_U_30262.Y1.y0.Sr)) || v_l_31605 > v_o_31604);
                {
                  let v_i_31616 = v_P_30255.lt.yk(22),
                    v_e_31617;
                  var v_c_31606,
                    v_u_31607,
                    v_f_31608,
                    v___31609,
                    v_h_31610,
                    v_d_31611,
                    v_v_31612 = v_r_31600.toString(),
                    v_w_31613 = rankGrade(v_r_31600 / 3);
                  for (let v_t_31618 = 0; v_t_31618 < 7; ++v_t_31618) v_e_31617 = v_i_31616.ot("boardScoreNum" + v_t_31618), v_v_31612.length <= v_t_31618 ? (v_e_31617.Be = !1, 6 === v_t_31618 ? v_i_31616.ot("boardScoreNumC1").Be = !1 : 3 === v_t_31618 && (v_i_31616.ot("boardScoreNumC0").Be = !1)) : (6 === v_t_31618 ? v_i_31616.ot("boardScoreNumC1").Be = !0 : 3 === v_t_31618 && (v_i_31616.ot("boardScoreNumC0").Be = !0), v_e_31617.Be = !0, v_e_31617.Je = "numRank" + v_w_31613 + v_v_31612[v_v_31612.length - v_t_31618 - 1]);
                  v_i_31616.ot("boardScoreNumC0").Je = "numRank" + v_w_31613 + "C", v_i_31616.ot("boardScoreNumC1").Je = "numRank" + v_w_31613 + "C";
                  for (let v_t_31619 = 0; v_t_31619 < 3; ++v_t_31619) v_e_31617 = v_P_30255.lt.ot("trackScore" + v_t_31619), v_n_31597.U0 >= v_t_31619 || v_n_31597.vn.hI[v_t_31619].Fi === v_yr_27944 ? (v_e_31617.ot("trackScoreBg").Je = "resultTrackBg_" + v_Q0_27805[v_n_31597.vn.yP[v_t_31619].p0], renderer.Yt.Zt["jkt:" + v_n_31597.vn.yP[v_t_31619].Pp.w0] ? (v_e_31617.ot("trackScoreJacket").zt = !0, v_e_31617.ot("trackScoreJacket").Xt = "jkt:" + v_n_31597.vn.yP[v_t_31619].Pp.w0) : (v_e_31617.ot("trackScoreJacket").zt = !1, v_e_31617.ot("trackScoreJacket").Xt = "txDummyJacket"), v_u_31607 = v_n_31597.vn.yP[v_t_31619].Pp.meta[v_n_31597.vn.yP[v_t_31619].p0], v_e_31617.ot("trackScoreTitle").Wt = v_n_31597.vn.yP[v_t_31619].Pp.lf, v_f_31608 = v_e_31617.ot("trackScoreLevel"), v_c_31606 = v_e_31617.ot("trackScoreLevelWe"), 4 !== v_n_31597.vn.yP[v_t_31619].p0 ? (v_f_31608.Be = !0, v_c_31606.Be = !1, v_f_31608.ot("trackScoreLevelNum").Wt = v_u_31607.k5.replace(/\+/g, ""), v_f_31608.ot("trackScoreLevelPlus").Be = -1 !== v_u_31607.k5.indexOf("+")) : (v_f_31608.Be = !1, v_c_31606.Be = !0, v_c_31606.ot("trackScoreWeLevelNum").Wt = "r".repeat(v_Qa_28089(v_Pe_28064(v_u_31607.k5), 1, 5)), v_c_31606.ot("trackScoreWeAttr").Wt = v_u_31607.b5), v_n_31597.O0[v_t_31619] ? (v_f_31608 = rankGrade(v_n_31597.O0[v_t_31619].Sr), v_e_31617.ot("trackScoreScoreNum").Wt = v_n_31597.O0[v_t_31619].Sr.toLocaleString("ja").replaceAll(",", "C"), v_e_31617.ot("trackScoreScoreNum").Ak = "scoreRank" + v_f_31608, v_e_31617.ot("trackScoreClearBadge").Be = !0, v_e_31617.ot("trackScoreClearBadgeFx").Be = v_t_31619 == v_n_31597.U0, v_e_31617.ot("trackScoreClearBadge").Je = v_n_31597.O0[v_t_31619].ni ? "clear_badge" : "failed_badge", v_e_31617.ot("trackScoreClearBadgeFx").Je = v_n_31597.O0[v_t_31619].ni ? "clear_badge" : "failed_badge") : (v_e_31617.ot("trackScoreScoreNum").Wt = "", v_e_31617.ot("trackScoreClearBadge").Be = !1, v_e_31617.ot("trackScoreClearBadgeFx").Be = !1)) : v_n_31597.vn.hI[v_t_31619].Fi === v_Sr_27945 ? (v_e_31617.ot("trackScoreBg").Je = "resultTrackBg_RND", v_e_31617.ot("trackScoreJacket").zt = !1, v_e_31617.ot("trackScoreJacket").Xt = "txRandomJacket", v_e_31617.ot("trackScoreTitle").Wt = v_Ue_28209("musicSelectCategoryRandom"), v_c_31606 = v_e_31617.ot("trackScoreLevel"), v_u_31607 = v_e_31617.ot("trackScoreLevelWe"), v_c_31606.Be = !0, v_u_31607.Be = !1, v_c_31606.ot("trackScoreLevelNum").Wt = v_n_31597.vn.hI[v_t_31619].p9.replace(/\+/g, ""), v_c_31606.ot("trackScoreLevelPlus").Be = -1 !== v_n_31597.vn.hI[v_t_31619].p9.indexOf("+"), v_e_31617.ot("trackScoreScoreNum").Wt = "", v_e_31617.ot("trackScoreClearBadge").Be = !1, v_e_31617.ot("trackScoreClearBadgeFx").Be = !1) : v_n_31597.vn.hI[v_t_31619].Fi === v_Ar_27946 && (v_e_31617.ot("trackScoreBg").Je = "resultTrackBg_RND", v_e_31617.ot("trackScoreJacket").zt = !1, v_e_31617.ot("trackScoreJacket").Xt = "txRandomJacket1", v_e_31617.ot("trackScoreTitle").Wt = v_Ue_28209("musicSelectCategoryRandom"), v_f_31608 = v_e_31617.ot("trackScoreLevel"), v___31609 = v_e_31617.ot("trackScoreLevelWe"), v_f_31608.Be = !0, v___31609.Be = !1, v_f_31608.ot("trackScoreLevelNum").Wt = "M", v_f_31608.ot("trackScoreLevelPlus").Be = !1, v_e_31617.ot("trackScoreScoreNum").Wt = "", v_e_31617.ot("trackScoreClearBadge").Be = !1, v_e_31617.ot("trackScoreClearBadgeFx").Be = !1);
                  v_h_31610 = v_P_30255.lt.yk(20), v_d_31611 = v_P_30255.lt.yk(21), 0 < v_s_31601 || !v_n_31597.J0.G4 ? (v_h_31610.Be = !0, v_d_31611.Be = !1, v_h_31610.Wt = "P" + v_s_31601.toLocaleString("ja").replaceAll(",", "C"), v_h_31610.Qe(1, 1, 0)) : v_s_31601 < 0 ? (v_h_31610.Be = !0, v_d_31611.Be = !1, v_h_31610.Wt = "M" + (-v_s_31601).toLocaleString("ja").replaceAll(",", "C"), v_h_31610.Qe(.65, .79, .94)) : (v_h_31610.Be = !1, v_d_31611.Be = !0), v_P_30255.lt.yk(19).Wt = mathMax(v_U_30262.Ea.Sr, v_n_31597.J0.Sr).toLocaleString("ja").replaceAll(",", "C"), v_i_31616 = v_P_30255.lt.yk(79), v_a_31602 ? (v_h_31610 = !(v_i_31616.Be = !0), v_d_31611 = v_r_31600 / 3, v_e_31617 = v_i_31616.yk(99), v_h_31610 |= v_e_31617.Be = 1009e3 <= v_d_31611 && !0, v_e_31617 = v_i_31616.yk(130), v_h_31610 |= v_e_31617.Be = 1007500 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(154), v_h_31610 |= v_e_31617.Be = 1005e3 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(178), v_h_31610 |= v_e_31617.Be = 1e6 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(195), v_h_31610 |= v_e_31617.Be = 99e4 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(212), v_h_31610 |= v_e_31617.Be = 975e3 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(222), v_h_31610 |= v_e_31617.Be = 95e4 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(230), v_h_31610 |= v_e_31617.Be = 925e3 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(236), v_h_31610 |= v_e_31617.Be = 9e5 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(240), v_h_31610 |= v_e_31617.Be = 8e5 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(244), v_h_31610 |= v_e_31617.Be = 7e5 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(247), v_h_31610 |= v_e_31617.Be = 6e5 <= v_d_31611 && !v_h_31610, v_e_31617 = v_i_31616.yk(249), v_h_31610 |= v_e_31617.Be = 5e5 <= v_d_31611 && !v_h_31610, (v_e_31617 = v_i_31616.yk(251)).Be = !v_h_31610, v_P_30255.lt.yk(83).Be = 975e3 <= v_d_31611) : v_i_31616.Be = !1, v_e_31617 = v_P_30255.lt.yk(13), v_U_30262.Ea.B4 ? (v_e_31617.yk(14).Je = "badgeAj", v_e_31617.yk(15).Je = "badgeAj", v_e_31617.yk(14).Be = !0, v_e_31617.yk(15).Be = !0) : v_U_30262.Ea.R4 ? (v_e_31617.yk(14).Je = "badgeFc", v_e_31617.yk(15).Je = "badgeFc", v_e_31617.yk(14).Be = !0, v_e_31617.yk(15).Be = !0) : (v_e_31617.yk(14).Be = !1, v_e_31617.yk(15).Be = !1), (v_e_31617 = v_P_30255.lt.yk(253)).Be = v_a_31602, v_e_31617.yk(254).Je = v_t_31598 ? "allclear_badge" : "allfailed_badge", v_e_31617.yk(255).Je = v_t_31598 ? "allclear_badge" : "allfailed_badge";
                }
                v_P_30255.e8(20, void 0, 75), v_P_30255.e8(18, void 0, 75), v_P_30255.e8(19, void 0, 90), v_P_30255.e8(29, void 0, 110);
                for (let v_t_31620 = 0; v_t_31620 < 3; ++v_t_31620) v_Ae_27892.q6("play_result_open_details", v_Ge_28204(110 + 5 * v_t_31620));
                v_P_30255.e8(30, v_P_30255.lt.ot("trackScore" + v_n_31597.U0), 135), v_P_30255.e8(27, void 0, 155), v_P_30255.e8(28, void 0, 155);
                let v_g_31614 = 155;
                v_a_31602 && (v_t_31598 && (v_T_30253.Jt = !0, v_T_30253.lt.yk(42).Be = !0, v_T_30253.lt.yk(0).Be = !0, v_T_30253.e8(5, void 0, 175), renderer.W6(() => {
                  v_Or_27965.dn("result_all_clear");
                }, v_Ge_28204(175)), v_g_31614 += 230), v_P_30255.e8(25, void 0, v_g_31614), v_Ae_27892.q6("play_result_show_rank", v_Ge_28204(v_g_31614 + 10)), v_P_30255._8("rank" + v_e_31603, void 0, v_g_31614 + 10), v_P_30255.e8(9, void 0, v_g_31614 + 10), v_P_30255.e8(10, void 0, v_g_31614 + 40), v_P_30255.e8(26, void 0, v_g_31614 + 35), v_P_30255.e8(24, void 0, v_g_31614 + 10), v_P_30255.e8(23, void 0, v_g_31614 + 30), v_t_31598 ? v_P_30255.e8(21, void 0, v_g_31614) : v_P_30255.e8(22, void 0, v_g_31614), renderer.W6(() => {
                  v_Or_27965.q4(v_r_31600 / 3, v_i_31599);
                }, v_Ge_28204(v_g_31614 + 10)), v_g_31614 += 30);
                renderer.Yt.Zt[v_pt_30223 + "0"] && v_P_30255.lt.Yc("charaImg").forEach(function (v_t_31621) {
                  v_t_31621.zt = !0, v_t_31621.Xt = v_pt_30223 + "0";
                });
                return v_P_30255.lt.yk(3).Be = !v_U_30262.Q1.ub, v_P_30255.lt.yk(4).Be = v_U_30262.Q1.ub, v_Or_27965.dn("scene_course_result"), v_g_31614 + 60;
              }(),
              v_b_31552 = v_P_30255.lt.yk(256);
            v_b_31552.yk(257).Be = !0, v_b_31552.yk(260).Be = !1, v_P_30255.e8(17, void 0, 0), await renderer.C7(v_Ge_28204(v_k_31551)), menuSystem.kt("next", !1);
            break;
          case v_Q_30195:
            v_h_31544 = v_P_30255.lt.yk(256);
            v_h_31544.yk(257).Be = !1, v_h_31544.yk(260).Be = !0, v_P_30255.e8(17, void 0, 0), await renderer.C7(v_Ge_28204(90)), v_P_30255.e8(0), await renderer.C7(v_Ge_28204(15)), v_a_30331();
            break;
          case v_tt_30196:
            v_E_30309() && (v_oe_27649.uC(!1), audioFontHub.XS()), v_Or_27965.Y4(), v_Te_27911.Li(), v_Ae_27892.i6("play_result_bgm"), v_U_30262.Y1.k0 || v_U_30262.A1 || v_U_30262.q1.Zu.Bw || (await v_Ns_28014.zy(v_U_30262.Y1.AR, v_U_30262.Y1.te, v_U_30262.La)), v_e_31553 = v_U_30262.Y1.A0, v_Oi_30335(), v_e_31553 && v_e_31553();
        }
        var v_e_31553;
      }
      function v_Ji_30333() {
        v_x_30250.lt.Kt(), v_U_30262.q1.Zu.Bw ? v_R_30261.BA.Je = v_R_30261.DA.Je = "base_TTL" : v_R_30261.BA.Je = v_R_30261.DA.Je = "base_" + v_Q0_27805[v_U_30262.Y1.te], v_R_30261.Ya.Wt = v_U_30262.q1.Zu.lf, v_R_30261.$a.Wt = v_U_30262.q1.Zu.C5, 4 !== v_U_30262.Y1.te ? (v_R_30261.es.Be = !0, v_R_30261.ts.Be = !0, v_R_30261.ns.Be = !1, v_R_30261.rs.Be = !1, v_R_30261.es.Wt = v_U_30262.q1.Zu.k5.replaceAll("+", ""), v_R_30261.ts.Be = -1 !== v_U_30262.q1.Zu.k5.indexOf("+")) : (v_R_30261.es.Be = !1, v_R_30261.ts.Be = !1, v_R_30261.ns.Be = !0, v_R_30261.rs.Be = !0, v_R_30261.ns.Wt = "r".repeat(v_Qa_28089(v_Pe_28064(v_U_30262.q1.Zu.k5), 1, 5)), v_R_30261.rs.Wt = "" !== v_U_30262.q1.Zu.b5 ? v_U_30262.q1.Zu.b5 : "？"), v_E_30309() && !v_oe_27649.Ix.get(v_U_30262.Y1.Rx).Mx ? (v_R_30261.qa.zt = !0, v_R_30261.qa.Xt = v_oe_27649.Ix.get(v_U_30262.Y1.Rx).Jx) : renderer.Yt.Zt["jkt:" + v_U_30262.Y1.ee] ? (v_R_30261.qa.zt = !0, v_R_30261.qa.Xt = "jkt:" + v_U_30262.Y1.ee) : (v_R_30261.qa.zt = !1, v_R_30261.qa.Xt = "txDummyJacket"), v_R_30261.os.Wt = v_U_30262.T1.toFixed(2).replaceAll(".", "P"), v_R_30261.os.Be = v_U_30262.T1 < 20, v_R_30261.ls.Be = 20 <= v_U_30262.T1, v_R_30261.cs.Je = v_U_30262.L1 ? "numJudgeOn" : "numJudgeOff", v_R_30261.Qa.Wt = handshake.Bm.Fm + 1 + "";
        {
          var v_i_31622 = handshake.On.nm[v_U_30262.Q1.C0],
            v_e_31623 = v_Er_27955(v_U_30262.Q1, v_U_30262.Ar, v_i_31622 ? v_i_31622.jm : 0);
          v_R_30261.Bs.Be = !v_U_30262.Q1.ub, v_R_30261.hb.Be = v_U_30262.Q1.ub, v_U_30262.Q1.ub ? (v_R_30261.hb.zt = !0, v_R_30261.hb.Xt = "chara:" + v_e_31623 + ":1:" + v_U_30262.Q1.C0) : (v_R_30261.Bs.zt = !0, v_R_30261.Bs.Xt = "chara:" + v_e_31623 + ":1:" + v_U_30262.Q1.C0);
          let v_t_31630 = "pNml";
          v_i_31622 && (50 <= v_i_31622.Pm ? v_t_31630 = "gRbw" : 25 <= v_i_31622.Pm ? v_t_31630 = "pPlt" : 15 <= v_i_31622.Pm ? v_t_31630 = "pGld" : 10 <= v_i_31622.Pm ? v_t_31630 = "gSlv" : 5 <= v_i_31622.Pm && (v_t_31630 = "gCpr")), v_R_30261.Fs.Je = "charaB" + v_t_31630;
        }
        v_R_30261.vs.Be = !1, v_R_30261.gs.Be = !1;
        for (let v_t_31631 = 0; v_t_31631 < 5; ++v_t_31631) v_C_30251.e8(3 + v_t_31631);
        if (v_x_30250.lt.yk(23).Be = !1, v_x_30250.lt.yk(36).Be = !1, v_U_30262.J1 || v_U_30262.Y1.k0 || v_nl_28149(v_R_30261.Ms, v_U_30262.Ar, !0), v_R_30261.Ms.yk(10).Be = !v_U_30262.J1 && !v_U_30262.Y1.k0, v_R_30261.Ms.yk(33).Be = v_U_30262.J1 || v_U_30262.Y1.k0, renderer.Yt.Zt[v_pt_30223 + "0"] && v_c_30252.lt.Yc("charaImg").forEach(function (v_t_31632) {
          v_t_31632.zt = !0, v_t_31632.Xt = v_pt_30223 + "0";
        }), v_c_30252.lt.yk(9).Be = !v_U_30262.Q1.ub, v_c_30252.lt.yk(15).Be = v_U_30262.Q1.ub, v_c_30252.lt.yk(14).Be = !v_U_30262.Q1.ub, v_c_30252.lt.yk(13).Be = v_U_30262.Q1.ub, v_x_30250.lt.yk(43).Be = v_U_30262.J1, v_x_30250.lt.yk(9).Be = !v_U_30262.J1, v_x_30250.lt.yk(53).Be = !v_U_30262.J1, v_U_30262.J1) v_R_30261.ks.Wt = "s" + v_U_30262.Y1._0.vn.bP, v_R_30261.ps.Wt = v_U_30262.Y1._0.V0.toString(), v_x_30250.e8(3);else for (let v_t_31633 = 0; v_t_31633 < 10; ++v_t_31633) {
          var v_n_31624 = v_R_30261.us.ot("gaugeBlock" + v_t_31633),
            v_r_31625 = v_R_30261.us.ot("gaugeBlock" + v_t_31633 + "F");
          v_t_31633 >= v_U_30262.U1 ? (v_n_31624.Be = !0, v_r_31625.Be = !1, v_R_30261.us.ot("gaugeBlock" + v_t_31633).Je = "gaugeBlockEmpty") : v_t_31633 < v_U_30262.O1 ? (v_n_31624.Be = !0, v_r_31625.Be = !0, v_R_30261.us.ot("gaugeBlock" + v_t_31633).Je = "gaugeBlockFailed", v_R_30261.us.ot("gaugeBlock" + v_t_31633 + "F").Je = "gaugeBlockFailedFg") : (v_n_31624.Be = !0, v_r_31625.Be = !0, v_t_31633 === v_U_30262.O1 && (v_R_30261.us.ot("gaugeBlockClearPos").Te = v_R_30261.us.ot("gaugeBlock" + v_t_31633).Te + 12), v_R_30261.us.ot("gaugeBlock" + v_t_31633).Je = "gaugeBlockClear", v_R_30261.us.ot("gaugeBlock" + v_t_31633 + "F").Je = "gaugeBlockClearFg");
        }
        if (v_x_30250.lt.ot("gaugeBoostFx").Be = !v_U_30262.Y1.ig, v_x_30250.e8(4), v_x_30250.e8(5), v_R_30261.qx = [], v_R_30261.Zx = [], v_E_30309()) {
          v_C_30251.lt.yk(1).Be = !0;
          var v_s_31626,
            v_a_31627,
            v_o_31628,
            v_l_31629 = v_C_30251.lt.yk(36);
          v_l_31629.tn();
          let v_t_31634 = 0;
          for (v_s_31626 of v_oe_27649.Ox) v_s_31626.Ae !== v_oe_27649.sx() && (v_a_31627 = v_C_30251.lt.yk(38).Ve(!0), (v_o_31628 = v_oe_27649.ix.get(v_s_31626.Ae)) && v_rl_28150(v_a_31627, v_o_31628), v_a_31627.Qt = 150 * v_t_31634, v_l_31629.Ze(v_a_31627), v_C_30251.e8(0, v_a_31627), v_R_30261.qx.push(v_a_31627), v_R_30261.Zx.push(v_a_31627.ot("guestOrder")), ++v_t_31634);
        } else v_C_30251.lt.yk(1).Be = !1, v_C_30251.lt.yk(36).tn();
      }
      function v_ji_30334() {
        v_oe_27649.vx(v_Gi_30328), renderer.W6(() => {
          v_t_30332(v_l_30184);
        }, 150);
      }
      function v_Oi_30335() {
        v_oe_27649.hx(v_Gi_30328), renderer._i(v_ut_30214), renderer._i(v_ot_30211), renderer._i(v_ct_30213), renderer._i(v_ft_30215), renderer._i(v_vt_30219), renderer._i(v_wt_30220), renderer._i(v_at_30210), renderer._i(v_lt_30212), renderer._i(v_gt_30221), renderer._i(v_mt_30222), renderer._i(v_ht_30217), renderer._i(v_dt_30218), renderer._i(v__t_30216), menuSystem.dt(), v_U_30262.Y1.k0 && inputModule.eb(v_ht_30217), v_U_30262.W1 && v_Se_27889.e6(v_U_30262.W1), v_U_30262.z1 && (v_U_30262.z1.src = "", v_U_30262.z1.load()), backgroundRenderer.zP(), v_li_30290.Fc(), v_oe_27649 && v_oe_27649.ZP(!1), v_U_30262 = void 0;
      }
      function v_Vi_30336() {
        v_U_30262.i1 && !v_U_30262.o1 && v_U_30262.n1 === v_S_30187 && (0 <= v_U_30262.rr - v_U_30262.q1.Zu._w ? v_U_30262.W1 && .5 <= v_U_30262.b1 && (v_Se_27889.o6(v_U_30262.W1, v_U_30262.rr - v_U_30262.q1.Zu._w), v_Se_27889.dn(v_U_30262.W1), v_U_30262.K1 = !0, v_U_30262.z1) && !v_U_30262.q1.Zu.hw && (v_U_30262.z1.currentTime = v_U_30262.rr - v_U_30262.q1.Zu._w, v_U_30262.vk = renderer.xt(), v_U_30262.Y1.J6 || v_U_30262.z1.play()) : (v_U_30262.W1 && v_Se_27889.o6(v_U_30262.W1, 0), v_U_30262.z1 && !v_U_30262.q1.Zu.hw && (v_U_30262.z1.currentTime = 0), v_U_30262.K1 = !1), v_U_30262.o1 = !0, v_U_30262.l1 = renderer.xt() - 1e3 * (v_U_30262.rr / v_U_30262.b1 - v_U_30262.q1.Zu._w), v_U_30262.lv) && (judgeSound.Zg(!0), v_U_30262.lv = !1);
      }
      function v_Wi_30337() {
        v_U_30262.i1 && v_U_30262.o1 && v_U_30262.n1 === v_S_30187 && (v_U_30262.o1 = !1, v_U_30262._1 = !1, v_U_30262.W1 && v_Se_27889.i6(v_U_30262.W1), v_U_30262.z1 && !v_U_30262.q1.Zu.hw && v_U_30262.z1.pause(), skillTrigger.Mt());
      }
      function v_Xi_30338() {
        if (!v_U_30262.i1 || v_U_30262.n1 !== v_S_30187) return 0;
        let v_i_31635 = 0,
          v_e_31636;
        for (let v_t_31637 = 0; v_t_31637 < v_U_30262.q1.yc.$g.length; ++v_t_31637) if ((v_e_31636 = v_U_30262.q1.yc.$g[v_t_31637]).Fi === v_u0_27704) {
          if (v_e_31636.od > v_U_30262.rr) break;
          v_i_31635++;
        }
        return v_i_31635;
      }
      function v_zi_30339(v_r_31638) {
        if (v_U_30262.i1 && v_U_30262.n1 === v_S_30187) {
          let v_i_31639 = 0,
            v_e_31640 = 0,
            v_n_31641;
          for (let v_t_31642 = 0; v_t_31642 < v_U_30262.q1.yc.$g.length; ++v_t_31642) if ((v_n_31641 = v_U_30262.q1.yc.$g[v_t_31642]).Fi === v_u0_27704) {
            if (v_i_31639 > v_r_31638) break;
            v_e_31640 = v_n_31641.od, v_i_31639++;
          }
          v_Yi_30341(v_e_31640);
        }
      }
      function v_Ki_30340(v_o_31643, v_l_31644) {
        if (v_U_30262.i1 && v_U_30262.n1 === v_S_30187 && v_U_30262.q1.lb) {
          var v_c_31645 = v_U_30262.q1.ob(v_U_30262.rr);
          let v_t_31648 = 0,
            v_i_31649 = 0,
            v_e_31650 = 1,
            v_n_31651 = 1,
            v_r_31652 = 4,
            v_s_31653 = 4;
          var v_u_31646;
          for (const v___31655 of v_U_30262.q1.lb) {
            if (v_u_31646 = (v___31655.mp - v_t_31648) * v_de_27728 * v_e_31650, v_i_31649 + v_u_31646 >= v_c_31645) break;
            v_t_31648 = v___31655.mp, v_n_31651 = v_e_31650, v_e_31650 = v___31655.Jg, v_s_31653 = v_r_31652, v_r_31652 = v___31655.cb, v_i_31649 += v_u_31646;
          }
          var v_f_31647 = v_de_27728 * v_e_31650;
          let v_a_31654 = v_i_31649 + (v_l_31644 ? mathFloor((v_c_31645 - v_i_31649) / (v_f_31647 / v_r_31652)) * (v_f_31647 / v_r_31652) : mathFloor((v_c_31645 - v_i_31649) / v_f_31647) * v_f_31647);
          return v_o_31643 ? v_a_31654 += v_l_31644 ? v_f_31647 / v_r_31652 : v_f_31647 : v_c_31645 - v_i_31649 < v_f_31647 ? v_a_31654 -= v_l_31644 ? v_de_27728 * v_n_31651 / v_s_31653 : v_de_27728 * v_n_31651 : v_a_31654 -= v_l_31644 ? v_de_27728 * v_e_31650 / v_r_31652 : v_de_27728 * v_e_31650, v_a_31654 += 1, v_Yi_30341(v_U_30262.q1.ep(v_a_31654)), 1;
        }
      }
      function v_Yi_30341(v_t_31656) {
        var v_i_31657;
        v_U_30262.i1 && v_U_30262.n1 === v_S_30187 && (v_i_31657 = v_U_30262.o1, v_U_30262.o1 = !1, v_qi_30342(), v_U_30262.rr = mathMax(v_t_31656, 0), v_U_30262.C1 = v_U_30262.rr + v_U_30262.E1, v_U_30262._1 = !0, 0 <= v_U_30262.rr && (v_U_30262.W1 && v_Se_27889.o6(v_U_30262.W1, v_U_30262.rr), v_U_30262.z1 && !v_U_30262.q1.Zu.hw && (v_U_30262.z1.currentTime = v_U_30262.rr), v_U_30262.o1 = v_i_31657), v_U_30262.lv = !0);
      }
      function v_qi_30342() {
        skillTrigger.Mt(), v_U_30262.q1.Pw();
        for (let v_t_31662 = 0; v_t_31662 < 16; ++v_t_31662) v_U_30262.aa[v_t_31662] = 1 / 0, v_U_30262.ua[v_t_31662] = new v_Ut_30244(), v_U_30262.fa[v_t_31662] = new v_Ht_30245();
        for (let v_t_31663 = 0; v_t_31663 < 32; ++v_t_31663) v_U_30262.m7[v_t_31663] = !1, v_U_30262.la[v_t_31663] = !1;
        var v_i_31658 = v_U_30262.ha.Zl();
        for (let v_t_31664 = 0; v_t_31664 < v_i_31658.length; ++v_t_31664) v_i_31658[v_t_31664].lr = !1;
        var v_e_31659 = v_U_30262._a.Zl();
        for (let v_t_31665 = 0; v_t_31665 < v_e_31659.length; ++v_t_31665) v_e_31659[v_t_31665].lr = !1;
        var v_n_31660 = v_U_30262.da.Zl();
        for (let v_t_31666 = 0; v_t_31666 < v_n_31660.length; ++v_t_31666) v_n_31660[v_t_31666].lr = !1;
        var v_r_31661 = v_U_30262.va.Zl();
        for (let v_t_31667 = 0; v_t_31667 < v_r_31661.length; ++v_t_31667) v_r_31661[v_t_31667].lr = !1;
        v_U_30262.Ta = new v_jt_30247(), v_U_30262.xa = 0, v_U_30262.Ia = -1 / 0;
      }
      function v_Zi_30343(v_t_31668) {
        v_U_30262.i1 && v_U_30262.n1 === v_S_30187 && (v_U_30262.b1 = v_t_31668, v_U_30262.W1 && v_Se_27889.v6(v_U_30262.W1, v_U_30262.b1), v_U_30262._1 = !0, v_U_30262.l1 = renderer.xt() - 1e3 * (v_U_30262.rr / v_U_30262.b1 - v_U_30262.q1.Zu._w));
      }
      function v_$i_30344(v_i_31669) {
        var v_t_31670;
        (v_U_30262 = new v_Vt_30249()).Q1 = v_be_27857.Np.find(v_t_31671 => v_t_31671.C0 === v_i_31669.C0), v_U_30262.Ar = v_be_27857.jp.find(v_t_31672 => v_t_31672.En === v_i_31669.En), v_U_30262.Ar && !v_i_31669._0 && !v_i_31669.k0 || (v_U_30262.Ar = v_be_27857.jp.find(v_t_31673 => ":sys_none" === v_t_31673.En)), v_U_30262.Y1 = v_i_31669, v_x_30250.Jt = !1, v_C_30251.Jt = !1, v_T_30253.Jt = !1, v_c_30252.Jt = !1, v_I_30254.Jt = !1, v_P_30255.Jt = !1, v_m_30256.Jt = !1, v_Wt_30257.Jt = !1, v_o_30258.Jt = !1, v_Xt_30259.Jt = !1, v_m_30256.lt.yk(25).Be = !1, v_te_30346(), v_U_30262.h7 = v_U_30262.Ar.h7, v_U_30262.J1 = !!v_i_31669._0, v_U_30262.Y1.X0 = v_U_30262.Y1.k0, v_U_30262.J1 && (null !== (v_t_31670 = v_U_30262.Y1._0.vn.CP).DP && (v_U_30262.T1 = v_t_31670.DP / 100), v_t_31670.Hs && (v_U_30262.xP = v_t_31670.RP.ue, v_U_30262.M1 = v_si_30285(v_U_30262.xP)), v_t_31670.Ar) && (v_U_30262.h7 = v_t_31670.Ar), v_oe_27649 && (v_oe_27649.ZP(!0), audioFontHub.XS()), v_U_30262.Y1.ig ? (v__s_27989.ag(v_Qi_30345), v_Le_28076([function (v_i_31674) {
          !async function (v_t_31675) {
            v_U_30262.q1 = new v_dr_27936(), v_U_30262.Eb = await v_hs_27990.Gb(v_U_30262.q1.Zu.te, v_Nr_27959._7(v_U_30262.h7)), v_t_31675 && v_t_31675(!0);
          }(v_t_31676 => {
            v_t_31676 ? v_Me_28078(v_i_31674) : v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(0, 0);
          });
        }, function (v_i_31677) {
          v_ne_30349(v_t_31678 => {
            v_t_31678 ? v_Me_28078(v_i_31677) : v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(0, 0);
          });
        }, function (v_t_31679) {
          renderer._i(v_ot_30211), v_Ji_30333(), v_U_30262.i1 = !0, v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(v_sr_27927, 0), v_ji_30334(), v__s_27989.rg({
            Dc: v_is_27978,
            _v: 0,
            w0: 0
          }), v__s_27989.rg({
            Dc: v_as_27983,
            DP: v_Ie_27966.E0("scrollSpeed"),
            VR: v_Ie_27966.E0("mirror"),
            WR: v_Ie_27966.E0("autoPlay"),
            zR: v_Ie_27966.E0("volGuide"),
            JR: v_Ie_27966.E0("tapSe"),
            KR: v_Ie_27966.E0("volTap"),
            YR: v_Ie_27966.E0("volExTap"),
            qR: v_Ie_27966.E0("volSlide"),
            $R: v_Ie_27966.E0("volAir"),
            ZR: v_Ie_27966.E0("volFlick"),
            Uo: v_Ie_27966.E0("fieldLines"),
            QR: v_Ie_27966.E0("fieldColor"),
            Hs: v_Ie_27966.E0("fieldWall"),
            tI: v_Ie_27966.E0("fieldInfo")
          });
        }])) : v_Le_28076([function (v_i_31680) {
          !async function (v_i_31681) {
            let v_t_31682 = null;
            if (v_U_30262.Y1.bx) {
              let v_t_31690 = !1;
              for (var v_e_31683 = void 0;;) {
                var v_n_31684 = v_oe_27649.Ix.get(v_U_30262.Y1.Rx);
                if (!v_n_31684) break;
                if (v_U_30262.ng = v_n_31684.ng, !(v_e_31683 = await v_oe_27649.fC(v_n_31684.nx))) break;
                let v_i_31691 = 0;
                var v_r_31685 = v_t_31692 => {
                    v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(v_rr_27926, (v_t_31692 + v_i_31691) / 2);
                  },
                  v_n_31684 = await v_e_31683._C(v_Aa_28055 + v_U_30262.Y1.te, v_r_31685);
                if (!v_n_31684) break;
                var v_s_31686 = ".sus" === v_n_31684.hC,
                  v_a_31687 = ".ugc" === v_n_31684.hC;
                if (!v_s_31686 && !v_a_31687) break;
                v_s_31686 = v_a_31687 ? chartParser : v_vr_27937;
                v_U_30262.q1 = v_s_31686.rt(await v_n_31684.Yu.text(), !1, v_U_30262.Y1.k0), ++v_i_31691;
                for (let v_t_31693 = 0; v_t_31693 < 10; ++v_t_31693) {
                  var v_o_31688 = await v_e_31683._C(v_ya_28053, v_r_31685);
                  if (v_o_31688) {
                    v_U_30262.W1 = await v_Se_27889.Sv(v_o_31688.Yu);
                    break;
                  }
                }
                v_t_31690 = !0;
                break;
              }
              if (!v_t_31690) return !v_i_31681 || !v_i_31681(!1);
            } else {
              if (v_U_30262.ng = v_be_27857.Pp.find(v_t_31694 => v_t_31694.w0 === v_U_30262.Y1.ee), void 0 === v_U_30262.ng) return !v_i_31681 || !v_i_31681(!1);
              v_t_31682 = v_U_30262.q1 ? v_U_30262.q1.Zu.te : null;
              var v_l_31689 = await new Promise(v_t_31695 => v_br_27943.Wc(v_U_30262.ng, v_U_30262.Y1.te, !1, v_U_30262.Y1.k0, v_t_31695));
              if (null === v_l_31689) return !v_i_31681 || !v_i_31681(!1);
              v_U_30262.q1 = v_l_31689.q1, void 0 !== v_l_31689.qc.wave && "" !== v_l_31689.qc.wave && (v_U_30262.W1 = await v_Se_27889.Q4("/music/" + v_U_30262.ng.dir + "/" + v_l_31689.qc.wave));
            }
            v_U_30262.L1 && v_U_30262.q1.lw();
            v_t_31682 !== v_U_30262.q1.Zu.te && (v_U_30262.Eb = await v_hs_27990.Gb(v_U_30262.q1.Zu.te, v_Nr_27959._7(v_U_30262.h7)));
            v_U_30262.q1.cw(v_U_30262.Eb), v_U_30262.ga = v_U_30262.q1.Zu.uw;
            for (let v_t_31696 = 0; v_t_31696 < v_U_30262.ga.length; ++v_t_31696) v_U_30262.wa[v_U_30262.ga[v_t_31696]] = 0;
            v_U_30262.W1 && (v_Se_27889.Mc(v_U_30262.W1, v_U_30262.Ba.W1), v_Se_27889.v6(v_U_30262.W1, v_U_30262.b1));
            v_i_31681 && v_i_31681(!0);
          }(v_t_31697 => {
            v_t_31697 ? v_Me_28078(v_i_31680) : v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(0, 0);
          });
        }, function (v_i_31698) {
          v_ne_30349(v_t_31699 => {
            v_t_31699 ? v_Me_28078(v_i_31698) : v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(0, 0);
          });
        }, function (v_t_31700) {
          v_Ji_30333(), v_U_30262.i1 = !0, v_U_30262.Y1.Ee && v_U_30262.Y1.Ee(v_sr_27927, 0);
        }]);
      }
      async function v_Qi_30345(v_t_31701) {
        if (v_t_31701) switch (v_t_31701.Dc) {
          case v_ns_27980:
            v_Yi_30341(v_t_31701.W2), v_Zi_30343(v_t_31701.b1), v_Vi_30336(), v_U_30262.Sa = !0;
            break;
          case v_rs_27981:
            v_Wi_30337();
            break;
          case v_ss_27982:
            v_Wi_30337(), v_Yi_30341(v_t_31701.W2);
            break;
          case v_as_27983:
            v_Ie_27966.L0("scrollSpeed", v_t_31701.DP), v_Ie_27966.L0("mirror", v_t_31701.VR), v_Ie_27966.L0("autoPlay", v_t_31701.WR), v_Ie_27966.L0("volGuide", v_t_31701.zR), v_Ie_27966.L0("tapSe", v_t_31701.JR), v_Ie_27966.L0("volTap", v_t_31701.KR), v_Ie_27966.L0("volExTap", v_t_31701.YR), v_Ie_27966.L0("volSlide", v_t_31701.qR), v_Ie_27966.L0("volAir", v_t_31701.$R), v_Ie_27966.L0("volFlick", v_t_31701.ZR), v_Ie_27966.L0("fieldLines", v_t_31701.Uo), v_Ie_27966.L0("fieldColor", v_t_31701.QR), v_Ie_27966.L0("fieldWall", v_t_31701.Hs), v_Ie_27966.L0("fieldInfo", v_t_31701.tI), v_U_30262.Sa = !0, v_te_30346(), v_ie_30347();
            break;
          case v_os_27984:
            alert("The version of the connected client is no longer supported"), window.close();
            break;
          case v_fs_27988:
            v_t_31701._v < 2001 ? (alert("The version of the connected client is no longer supported"), window.close()) : (await v_ee_30348(v_t_31701, !1), v_Ji_30333(), v_Wi_30337(), v_Yi_30341(v_U_30262.rr), v__s_27989.rg({
              Dc: v_us_27987
            }));
            break;
          case v_cs_27986:
            await v_ee_30348(v_t_31701, !0), v_qi_30342(), v_Ji_30333(), v__s_27989.rg({
              Dc: v_us_27987
            });
        }
      }
      function v_te_30346() {
        v_U_30262.A1 = !v_E_30309() && v_Ie_27966.$c("autoPlay"), v_U_30262.T1 = v_Ie_27966.$c("scrollSpeed") / 100, v_U_30262.L1 = !v_U_30262.Y1.k0 && v_Ie_27966.$c("mirror"), v_U_30262.A1 ? (v_U_30262.E1 = 0, v_U_30262.I1 = 0, v_U_30262.dI = 0) : (v_U_30262.E1 = -v_Ie_27966.$c("jdgTimingA") / 6e3 - 1 / 60, v_U_30262.I1 = -v_Ie_27966.$c("jdgTimingA") / 6e3 - v_Ie_27966.$c("jdgTimingB") / 6e3 - 1 / 60, v_U_30262.dI = -v_Ie_27966.$c("jdgTimingAir") / 6e3), v_U_30262.B1 = v_U_30262.Y1.k0 || v_U_30262.Y1._0 ? v_yt_30226 : v_Ie_27966.$c("trackSkip"), v_U_30262.vL = v_Ie_27966.$c("jTimingSeCond"), v_U_30262.xP = v_Ie_27966.$c("fieldWall"), v_U_30262.M1 = v_si_30285(v_U_30262.xP), v_U_30262.R1 = v_Ie_27966.$c("fieldLines"), v_U_30262.P1 = 1 - v_Ie_27966.$c("fieldColor") / 5, v_U_30262.D1 = v_Ie_27966.$c("fieldInfo"), v_U_30262.Y1.ig && v_U_30262.D1 === v_bt_30225 && (v_U_30262.D1 = v_kt_30224), v_U_30262.G1 = v_Ie_27966.$c("judgeAnsJcDetails"), v_U_30262.j1 = v_Ie_27966.$c("judgeAnsJDetails"), v_U_30262.N1 = v_Ie_27966.$c("judgeAnsADetails"), v_U_30262.H1 = [-30, -450, -860, -1500][v_Ie_27966.$c("judgeAnsPos")], v_U_30262.Ba.Ma = v_Ie_27966.$c("volGuide") / 10, v_U_30262.Ba.JR = v_Ie_27966.$c("tapSe"), v_U_30262.Ba.Ra = v_Ie_27966.$c("volTap") / 10, v_U_30262.Ba.Pa = v_Ie_27966.$c("volExTap") / 10, v_U_30262.Ba.Da = v_Ie_27966.$c("volSlide") / 10, v_U_30262.Ba.Ga = v_Ie_27966.$c("volAir") / 10, v_U_30262.Ba.ja = v_Ie_27966.$c("volFlick") / 10, v_U_30262.Ba.Ar = v_Ie_27966.$c("volSkill") / 10;
      }
      function v_ie_30347() {
        judgeSound.Zg(!1), judgeSound.Mc(v_vi_30298, v_U_30262.Ba.Ma), judgeSound.Mc(v_wi_30299, v_U_30262.Ba.Ra), judgeSound.Mc(v_gi_30300, v_U_30262.Ba.Ra), judgeSound.Mc(v_V_30295, v_U_30262.Ba.Ra), judgeSound.Mc(v_mi_30301, v_U_30262.Ba.Ra), judgeSound.Mc(v_hi_30296, v_U_30262.Ba.Pa), judgeSound.Mc(v_pi_30302, v_U_30262.Ba.Da), judgeSound.Mc(v_ci_30291, v_U_30262.Ba.Ga), judgeSound.Mc(v_fi_30293, v_U_30262.Ba.Ga), judgeSound.Mc(v_Si_30306, .5 * v_U_30262.Ba.Ga), judgeSound.Mc(v_ui_30292, v_U_30262.Ba.Ga), judgeSound.Mc(v__i_30294, v_U_30262.Ba.Ga), judgeSound.Mc(v_di_30297, v_U_30262.Ba.ja), judgeSound.Mc(v_ki_30303, v_U_30262.Ba.Ar), judgeSound.jR(v_U_30262.Ba.JR), skillTrigger.Mc(v_bi_30304, v_U_30262.Ba.Da), skillTrigger.Mc(v_yi_30305, .75 * v_U_30262.Ba.Ga);
      }
      async function v_ee_30348(v_t_31702, v_i_31703) {
        var v_e_31704 = v_U_30262.q1 ? v_U_30262.q1.Zu.te : null;
        v_U_30262.q1 = chartParser.rt(v_t_31702.sg, !1, !0), v_U_30262.Y1.te = v_U_30262.q1.Zu.te, v_e_31704 !== v_U_30262.q1.Zu.te && (v_U_30262.Eb = await v_hs_27990.Gb(v_U_30262.q1.Zu.te, v_Nr_27959._7(v_U_30262.h7))), v_U_30262.q1.cw(v_U_30262.Eb), v_U_30262.ga = v_U_30262.q1.Zu.uw;
        for (let v_t_31705 = 0; v_t_31705 < v_U_30262.ga.length; ++v_t_31705) v_U_30262.wa[v_U_30262.ga[v_t_31705]] = 0;
        v_i_31703 || (v_U_30262.W1 && v_Se_27889.e6(v_U_30262.W1), "" !== v_U_30262.q1.Zu.Gw && (v_m_30256.lt.yk(25).Be = !0, v_U_30262.W1 = await v_Se_27889.Q4(v_t_31702.og + "/" + v_U_30262.q1.Zu.Gw), v_U_30262.W1 && (v_Se_27889.Mc(v_U_30262.W1, v_U_30262.Ba.W1), v_Se_27889.v6(v_U_30262.W1, v_U_30262.b1)), v_m_30256.lt.yk(25).Be = !1));
      }
      function v_ne_30349(v_i_31706) {
        let v_a_31707 = !1;
        v_Le_28076([function (v_e_31708) {
          if (v_U_30262.Y1.bx) v_Me_28078(v_e_31708);else {
            var v_i_31709 = v_U_30262.q1.Zu.jw,
              v_n_31710 = v_U_30262.ng ? "/music/" + v_U_30262.ng.dir + "/" + v_i_31709 : "";
            if ("" !== v_i_31709 && "" === v_U_30262.q1.Zu.Hw) {
              v_i_31709 = v_Fa_28068(v_n_31710);
              if (".mp4" === v_i_31709 || ".avi" === v_i_31709) {
                v_i_31709 = v_n_31710;
                var v_r_31711 = function (v_t_31713) {
                  v_t_31713 && (v_t_31713.muted = !0, v_t_31713.currentTime = 0, v_U_30262.q1.Zu.hw && (v_t_31713.loop = !0), v_U_30262.z1 = v_t_31713, v_k_30287.El(v_U_30262.z1), v_U_30262.Z1 = !0, v_U_30262.q1.Zu.hw) && (v_U_30262.Y1.J6 || v_U_30262.z1.play(), v_U_30262.vk = renderer.xt()), v_Me_28078(v_e_31708);
                };
                let v_t_31712 = win.createElement("video");
                v_t_31712.oncanplaythrough = function () {
                  v_t_31712.oncanplaythrough = void 0, v_r_31711(v_t_31712);
                }, v_t_31712.onerror = function () {
                  v_t_31712.onerror = void 0, v_r_31711(null);
                }, v_t_31712.src = v_i_31709;
              } else v__o_28104(v_n_31710, function (v_t_31714) {
                var v_i_31715;
                v_t_31714 && ((v_i_31715 = win.createElement("canvas")).width = 1920, v_i_31715.height = 1080, v_i_31715.getContext("2d").drawImage(v_t_31714, 0, 0, v_t_31714.naturalWidth, v_t_31714.naturalHeight, 0, 0, 1920, 1080), v_k_30287.Tl(v_i_31715), v_U_30262.Z1 = !0), v_Me_28078(v_e_31708);
              });
            } else v_Me_28078(v_e_31708);
          }
        }, v_t_31716 => {
          let v_i_31717 = v_U_30262.q1.Zu.Hw,
            v_e_31718 = "" !== (v_i_31717 = handshake.rm.Tm && "" === v_i_31717 && v_U_30262.ng && "東方Project" === v_U_30262.ng.y5 && 4 !== v_U_30262.Y1.te ? "hakurei_jinja" : v_i_31717),
            v_n_31719 = "",
            v_r_31720 = "_default_1" === v_i_31717;
          var v_s_31721;
          if (v_U_30262.Y1.bx && (v_r_31720 = !1, v_e_31718 = !1, v_U_30262.Z1 = !1), v_r_31720 || !v_U_30262.Z1 && !v_e_31718) v_a_31707 = !0, "_default_1" === (v_n_31719 = v_r_31720 ? v_i_31717 : 4 === v_U_30262.q1.Zu.te ? "_default_we" : "_default_umiguri_new") ? v_U_30262.ey = v_Rt_30234 : "_default_umiguri_new" === v_n_31719 ? v_U_30262.ey = v_Lt_30235 : "_default_we" === v_n_31719 && (v_U_30262.ey = v_Rt_30234), 0 <= v_U_30262.q1.Zu.ey ? (v_U_30262.ey = v_U_30262.q1.Zu.ey, v_U_30262.ey >= v_Mt_30236.length && (v_U_30262.ey = 0)) : (v_s_31721 = v_Ea_28065(v_U_30262.q1.Zu.Uw), Number.isNaN(v_s_31721) || 0 === v_s_31721 || (v_U_30262.ey = v_Dt_30239((v_s_31721 >>> 16 & 255) / 255, (v_s_31721 >>> 8 & 255) / 255, (255 & v_s_31721) / 255)));else if (v_n_31719 = "model:" + v_i_31717, 0 <= v_U_30262.q1.Zu.ey ? (v_U_30262.ey = v_U_30262.q1.Zu.ey, v_U_30262.ey >= v_Mt_30236.length && (v_U_30262.ey = 0)) : (v_s_31721 = v_Ea_28065(v_U_30262.q1.Zu.Uw), Number.isNaN(v_s_31721) || 0 === v_s_31721 || (v_U_30262.ey = v_Dt_30239((v_s_31721 >>> 16 & 255) / 255, (v_s_31721 >>> 8 & 255) / 255, (255 & v_s_31721) / 255))), !v_e_31718) return void v_Me_28078(v_t_31716);
          backgroundRenderer.Ec(v_n_31719, function () {
            v_Me_28078(v_t_31716);
          });
        }, v_i_31722 => {
          let v_t_31723 = v_U_30262.q1.Zu.Nw;
          if (handshake.rm.Tm && "" === v_t_31723 && v_U_30262.ng && "東方Project" === v_U_30262.ng.y5 && 4 !== v_U_30262.Y1.te && (v_t_31723 = "hakurei_jinja"), "" === (v_t_31723 = v_U_30262.Y1.bx ? "" : v_t_31723)) {
            let v_t_31724 = "";
            v_t_31724 = v_a_31707 ? "_default_1" === v_U_30262.q1.Zu.Hw ? "fieldBgBlue" : 4 === v_U_30262.q1.Zu.te ? "fieldBgDark" : "fieldBgNext" : "fieldBgDark", v_$r_27975.it("/textures/" + v_t_31724 + ".dds", v_t_31725 => {
              null !== v_t_31725 && v_Io_28120(v_t_31725, !1, (v_t_31726, v_i_31727, v_e_31728) => {
                v_t_31726 === v_xo_28116 ? (glContext.bindTexture(glContext.TEXTURE_2D, v_k_30287.Ml()), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_Ao_28115;
              }), v_Me_28078(v_i_31722);
            });
          } else v_U_30262.X1 = !0, v_li_30290.Ec(v_t_31723, v_oi_30289, function (v_t_31729) {
            v_Me_28078(v_i_31722);
          });
        }, v_e_31730 => {
          var v_t_31731 = handshake.On.nm[v_U_30262.Q1.C0],
            v_t_31731 = v_Er_27955(v_U_30262.Q1, v_U_30262.Ar, v_t_31731 ? v_t_31731.jm : 0);
          dataLoader.Si(v_U_30262.Q1, v_t_31731, v_t_31732 => {
            var v_i_31733 = v_pt_30223 + "0";
            renderer.Yt.Zt[v_i_31733] && renderer.Yt.Zt[v_i_31733].free(), renderer.Yt.Zt[v_i_31733] = v_t_31732, v_Me_28078(v_e_31730);
          });
        }, v_i_31734 => {
          renderer.ut(v_ut_30214, v_x_30250, v_w_30204, v_t_31735 => v_Me_28078(v_i_31734));
        }, v_i_31736 => {
          renderer.ut(v_ot_30211, v_C_30251, v_n_30198, v_t_31737 => v_Me_28078(v_i_31736));
        }, v_i_31738 => {
          renderer.ut(v_ct_30213, v_c_30252, v_u_30200, v_t_31739 => v_Me_28078(v_i_31738));
        }, v_i_31740 => {
          renderer.ut(v_ft_30215, v_T_30253, v_rt_30208, v_t_31741 => v_Me_28078(v_i_31740));
        }, v_i_31742 => {
          renderer.ut(v__t_30216, v_o_30258, v_st_30209, v_t_31743 => v_Me_28078(v_i_31742));
        }, v_i_31744 => {
          renderer.ut(v_vt_30219, v_I_30254, v_f_30201, v_t_31745 => v_Me_28078(v_i_31744));
        }, v_i_31746 => {
          renderer.ut(v_wt_30220, v_P_30255, v___30202, v_t_31747 => v_Me_28078(v_i_31746));
        }, v_i_31748 => {
          renderer.ut(v_ht_30217, v_m_30256, v_et_30206, v_t_31749 => v_Me_28078(v_i_31748));
        }, v_i_31750 => {
          renderer.ut(v_dt_30218, v_zt_30260, v_it_30205, v_t_31751 => v_Me_28078(v_i_31750));
        }, v_i_31752 => {
          renderer.ut(v_gt_30221, v_Wt_30257, v_nt_30207, v_t_31753 => v_Me_28078(v_i_31752));
        }, v_i_31754 => {
          renderer.ut(v_mt_30222, v_Xt_30259, v_v_30203, v_t_31755 => v_Me_28078(v_i_31754));
        }, v_i_31756 => {
          renderer.ut(v_at_30210, new v_Tl_28174(v_Bi_30326), v_e_30197, v_t_31757 => v_Me_28078(v_i_31756));
        }, v_i_31758 => {
          renderer.ut(v_lt_30212, new v_Tl_28174(v_Fi_30325), v_r_30199, v_t_31759 => v_Me_28078(v_i_31758));
        }, v_t_31760 => {
          v_U_30262.q1.Zu.Bw && (v_U_30262.O1 = 1, v_U_30262.U1 = 4, v_U_30262.T1 = 2), 4 === v_U_30262.q1.Zu.te && (v_U_30262.O1 = 1);
          for (let v_t_31761 = 0; v_t_31761 < v_F0_27741.length && !(v_t_31761 >= v_U_30262.U1); ++v_t_31761) v_U_30262.V1 += v_F0_27741[v_t_31761];
          v_x_30250.Jt = !0, v_m_30256.Jt = v_U_30262.Y1.k0, v_U_30262.Y1.k0 && inputModule.tb(v_ht_30217, v_Li_30320), v_U_30262.rr = v_U_30262.q1.Zu.fw - v_U_30262.m1, v_U_30262.C1 = v_U_30262.rr + v_U_30262.E1, v_U_30262.w1 = v_U_30262.q1.Zu.yi - v_U_30262.m1, v_ie_30347(), null !== v_U_30262.Ar.Om && (v_U_30262.Ar.Km = v_U_30262.Ar.Om), v_i_31706 && v_i_31706(!0);
        }]);
      }
      return {
        ue: function (v_e_31762) {
          v_Le_28076([v_i_31763 => {
            languagePackages.it("ui/playerHeader.rsb", function (v_t_31764) {
              v_t_31764 ? (v_t_31764 = new v_Dl_28181(v_t_31764), renderer.nt(v_t_31764.rt(renderer.p5()), v_t_31765 => {
                v_x_30250 = v_t_31765, v_R_30261.DA = v_x_30250.lt.yk(0), v_R_30261.BA = v_x_30250.lt.yk(1), v_R_30261.Qa = v_x_30250.lt.yk(4), v_R_30261.es = v_x_30250.lt.yk(6), v_R_30261.ts = v_x_30250.lt.yk(7), v_R_30261.ns = v_x_30250.lt.yk(5), v_R_30261.rs = v_x_30250.lt.yk(96), v_R_30261.Ya = v_x_30250.lt.yk(94), v_R_30261.$a = v_x_30250.lt.yk(95), v_R_30261.qa = v_x_30250.lt.yk(97), v_R_30261.os = v_x_30250.lt.yk(85), v_R_30261.ls = v_x_30250.lt.yk(86), v_R_30261.cs = v_x_30250.lt.yk(87), v_R_30261.us = v_t_31765.lt.yk(53), v_R_30261.fs = v_t_31765.lt.yk(10), v_R_30261._s = v_t_31765.lt.yk(17), v_R_30261.ds = v_t_31765.lt.yk(29), v_R_30261.hs = v_t_31765.lt.yk(15), v_R_30261.vs = v_t_31765.lt.yk(79), v_R_30261.gs = v_t_31765.lt.yk(78), v_R_30261.ws = v_t_31765.lt.yk(46), v_R_30261.ps = v_t_31765.lt.yk(51), v_R_30261.ks = v_t_31765.lt.yk(52), v_R_30261.Ss = v_x_30250.lt.yk(81), v_R_30261.xs = v_x_30250.lt.yk(82), v_R_30261.Is = v_x_30250.lt.yk(83), v_R_30261.ys = v_x_30250.lt.yk(84), v_R_30261.Cs = v_x_30250.lt.yk(85), v_R_30261.As = v_x_30250.lt.yk(86), v_R_30261.Ts = v_x_30250.lt.yk(87), v_R_30261.Ls = v_x_30250.lt.yk(88), v_R_30261.Es = v_x_30250.lt.yk(89), v_R_30261.gk = v_x_30250.lt.yk(90), v_R_30261.wk = v_x_30250.lt.yk(91), v_R_30261.pk = v_x_30250.lt.yk(92), v_R_30261.mk = v_x_30250.lt.yk(93), v_Me_28078(v_i_31763);
              })) : v_e_31762();
            });
          }, v_i_31766 => {
            languagePackages.it("ui/playerChara.rsb", function (v_t_31767) {
              v_t_31767 ? (v_t_31767 = new v_Dl_28181(v_t_31767), renderer.nt(v_t_31767.rt(renderer.p5()), v_t_31768 => {
                v_C_30251 = v_t_31768, v_R_30261.Fs = v_C_30251.lt.yk(7), v_R_30261.Bs = v_C_30251.lt.yk(8), v_R_30261.hb = v_C_30251.lt.yk(9), v_R_30261.Ms = v_C_30251.lt, v_R_30261.Rs = v_C_30251.lt.yk(14), v_R_30261.zx = v_C_30251.lt.yk(3), v_R_30261.Kx = v_C_30251.lt.yk(4), v_R_30261.Yx = v_C_30251.lt.yk(5), v_Me_28078(v_i_31766);
              })) : v_e_31762();
            });
          }, v_i_31769 => {
            languagePackages.it("ui/playerReady.rsb", function (v_t_31770) {
              v_t_31770 ? (v_t_31770 = new v_Dl_28181(v_t_31770), renderer.nt(v_t_31770.rt(renderer.p5()), v_t_31771 => {
                (v_T_30253 = v_t_31771).lt.yk(0).Be = !1, v_T_30253.lt.yk(196).Be = !1, v_Me_28078(v_i_31769);
              })) : v_e_31762();
            });
          }, v_i_31772 => {
            languagePackages.it("ui/playerSkillTrigger.rsb", function (v_t_31773) {
              v_t_31773 ? (v_t_31773 = new v_Dl_28181(v_t_31773), renderer.nt(v_t_31773.rt(renderer.p5()), v_t_31774 => {
                v_c_30252 = v_t_31774, v_Me_28078(v_i_31772);
              })) : v_e_31762();
            });
          }, v_i_31775 => {
            languagePackages.it("ui/playerResult.rsb", function (v_t_31776) {
              v_t_31776 ? (v_t_31776 = new v_Dl_28181(v_t_31776), renderer.nt(v_t_31776.rt(renderer.p5()), v_t_31777 => {
                v_I_30254 = v_t_31777, v_R_30261.gI = [v_I_30254.lt.yk(510), v_I_30254.lt.yk(511), v_I_30254.lt.yk(512)], v_R_30261.mI = [v_I_30254.lt.yk(553), v_I_30254.lt.yk(557), v_I_30254.lt.yk(561), v_I_30254.lt.yk(565), v_I_30254.lt.yk(570), v_I_30254.lt.yk(574), v_I_30254.lt.yk(578), v_I_30254.lt.yk(582)], v_Me_28078(v_i_31775);
              })) : v_e_31762();
            });
          }, v_i_31778 => {
            languagePackages.it("ui/playerCourseResult.rsb", function (v_t_31779) {
              v_t_31779 ? (v_t_31779 = new v_Dl_28181(v_t_31779), renderer.nt(v_t_31779.rt(renderer.p5()), v_t_31780 => {
                v_P_30255 = v_t_31780, v_Me_28078(v_i_31778);
              })) : v_e_31762();
            });
          }, v_i_31781 => {
            languagePackages.it("ui/playerDanger.rsb", function (v_t_31782) {
              v_t_31782 ? (v_t_31782 = new v_Dl_28181(v_t_31782), renderer.nt(v_t_31782.rt(renderer.p5()), v_t_31783 => {
                v_Wt_30257 = v_t_31783, v_Me_28078(v_i_31781);
              })) : v_e_31762();
            });
          }, v_i_31784 => {
            languagePackages.it("ui/playerTrackSkip.rsb", function (v_t_31785) {
              v_t_31785 ? (v_t_31785 = new v_Dl_28181(v_t_31785), renderer.nt(v_t_31785.rt(renderer.p5()), v_t_31786 => {
                v_Xt_30259 = v_t_31786, v_Me_28078(v_i_31784);
              })) : v_e_31762();
            });
          }, v_i_31787 => {
            languagePackages.it("ui/playerAirGuide.rsb", function (v_t_31788) {
              v_t_31788 ? (v_t_31788 = new v_Dl_28181(v_t_31788), renderer.nt(v_t_31788.rt(renderer.p5()), v_t_31789 => {
                (v_zt_30260 = v_t_31789).lt.yk(0).Be = !1, v_zt_30260.lt.yk(20).Be = !1, v_Me_28078(v_i_31787);
              })) : v_e_31762();
            });
          }, v_i_31790 => {
            languagePackages.it("ui/playerDebugger.rsb", function (v_t_31791) {
              v_t_31791 ? (v_t_31791 = new v_Dl_28181(v_t_31791), renderer.nt(v_t_31791.rt(renderer.p5()), v_t_31792 => {
                v_m_30256 = v_t_31792, v_Me_28078(v_i_31790);
              })) : v_e_31762();
            });
          }, v_i_31793 => {
            languagePackages.it("ui/fullComboText.rsb", function (v_t_31794) {
              v_t_31794 ? (v_t_31794 = new v_Dl_28181(v_t_31794), renderer.nt(v_t_31794.rt(renderer.p5()), v_t_31795 => {
                v_o_30258 = v_t_31795, v_Me_28078(v_i_31793);
              })) : v_e_31762();
            });
          }, v_t_31796 => {
            v_k_30287.Sl(() => {
              v_k_30287.Il(), v_Me_28078(v_t_31796);
            });
          }, v_t_31797 => {
            backgroundRenderer.ue(), v_Fe_28101(v_e_31762);
          }]);
        },
        T0: v_$i_30344,
        lg: function () {
          var v_t_31798 = new v_ar_27928();
          v_t_31798.k0 = !0, v_t_31798.ig = !0, v_t_31798.C0 = "UMIGURI/uni", v_$i_30344(v_t_31798);
        },
        ri: v_ji_30334
      };
    }(),
    v_lr_27930 = function () {
      let v_n_31799 = void 0,
        v_r_31800 = void 0;
      function v_i_31801() {
        menuSystem.St("no");
      }
      async function v_e_31802() {
        (await v_Z1_27919.qA(1)) && (sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_n_31799.e8(1), await v_fo_28103(v_Ge_28204(30)), menuSystem.dt(), v_t_31804(), v_H1_27907.T0(), handshake.Bm.Fm = 0, playerInfoBoard.ti(), v_nr_27925.T0());
      }
      async function v_s_31803() {
        await v_Ns_28014.fA(), sceneManager.ni(), sceneManager.ii(), menuSystem.It(!1), v_n_31799.e8(1), v_r_31800.Jt = !0, v_r_31800.e8(0), await v_fo_28103(v_Ge_28204(180)), menuSystem.dt(), v_t_31804(), v_N1_27904.T0(!0);
      }
      function v_t_31804() {
        renderer._i("continue"), renderer._i("gameover");
      }
      return {
        ue: function (v_e_31805) {
          v_Le_28076([v_i_31806 => {
            languagePackages.it("ui/continue.rsb", function (v_t_31807) {
              v_t_31807 ? (v_t_31807 = new v_Dl_28181(v_t_31807), renderer.nt(v_t_31807.rt(renderer.p5()), v_t_31808 => {
                v_n_31799 = v_t_31808, v_Me_28078(v_i_31806);
              })) : v_e_31805();
            });
          }, v_i_31809 => {
            languagePackages.it("ui/gameover.rsb", function (v_t_31810) {
              v_t_31810 ? (v_t_31810 = new v_Dl_28181(v_t_31810), renderer.nt(v_t_31810.rt(renderer.p5()), v_t_31811 => {
                v_r_31800 = v_t_31811, v_Me_28078(v_i_31809);
              })) : v_e_31805();
            });
          }, v_t_31812 => {
            v_Fe_28101(v_e_31805);
          }]);
        },
        T0: async function () {
          playerInfoBoard.ii(), sceneManager.ei(), await v_fo_28103(v_Ge_28204(30)), await new Promise(v_t_31813 => v_Te_27911.Ai(v_Ue_28209("dataSaved"), v_ei_27773 | v_it_27778 | v_et_27779, 1500, v_t_31813)), await v_fo_28103(v_Ge_28204(30)), v_n_31799.Jt = !1, v_r_31800.Jt = !1, await new Promise(v_t_31814 => renderer.ut("continue", v_n_31799, 51, v_t_31814)), await new Promise(v_t_31815 => renderer.ut("gameover", v_r_31800, 50, v_t_31815)), v_n_31799.e8(0), v_n_31799.Jt = !0, menuSystem.dt();
          for (const v_t_31816 of [["yes", "Yes", 0, 8, v_W0_27791, v_e_31802], ["no", "No", 8, 8, v_si_27792, v_s_31803]]) menuSystem.vt(v_t_31816[0], v_t_31816[1], v_t_31816[2], v_t_31816[3], v_t_31816[4], !1, !1, !1, "", v_t_31816[5]);
          menuSystem.It(!0), menuSystem.T9(v_Ge_28204(20)), sceneManager.ft(new v_M1_27898(v_i_31801, void 0)), sceneManager.ri(30), sceneManager.ti();
        }
      };
    }(),
    testMenu = function () {
      const v_o_31817 = 1,
        v_l_31818 = 2,
        v_v_31819 = 4,
        v_c_31820 = 268435456,
        v_u_31821 = 536870912;
      function v_t_31822() {
        this.Gi = !1, this.r0 = "", this.a0 = null, this.Qc = !1, this.eu = 0, this.tu = 0, this.ve = [new v_i_31823(0, 3, v_o_31817), new v_i_31823(3, 3, v_l_31818), new v_i_31823(6, 3, 8), new v_i_31823(9, 3, 16), new v_i_31823(12, 4, v_v_31819)], this.iu = {
          nu: !1,
          ru: 0,
          au: 0,
          su: 0,
          Ee: void 0
        };
      }
      function v_i_31837(v_t_31836, v_i_31837, v_e_31838) {
        this.ou = v_t_31836, this.Le = v_i_31837, this.lu = 0, this.Ae = v_e_31838;
      }
      function v_n_31824() {
        this.cu = "", this.uu = void 0, this.fu = void 0, this._u = void 0, this.du = void 0, this.hu = void 0, this.vu = void 0, this.au = 0, this.gu = [], this.wu = v_o_31817 | v_l_31818 | v_v_31819, this.On = {};
      }
      v_n_31824.prototype = {
        pu: function (v_t_31839, v_i_31840) {
          return v_t_31839 & (v_o_31817 | v_u_31821) && 0 < this.gu.length ? (this.au = v_qa_28086(this.au + 1, this.gu.length), this.vu && this.vu(), !0) : !!(v_t_31839 & v_l_31818 && 0 < this.gu.length) && (this.au = v_qa_28086(this.au - 1, this.gu.length), this.vu && this.vu(), !0);
        },
        ku: function (v_t_31841) {
          return this.uu.ot("textMenu" + v_t_31841);
        },
        bu: function () {
          return this.ku(this.gu[this.au]);
        }
      }, v_n_31824.Vc = function (v_t_31842) {
        var v_i_31843 = new v_n_31824();
        return v_i_31843.cu = v_t_31842, v_i_31843.uu = v_w_31825.lt.ot("page" + v_t_31842), v_e_31828[v_t_31842] = v_i_31843;
      };
      let v_w_31825 = void 0,
        v_f_31826 = new v_t_31822(),
        v___31827 = {
          mu: void 0,
          Su: void 0,
          xu: void 0,
          Iu: void 0,
          yu: void 0,
          Cu: void 0,
          Au: void 0,
          Tu: void 0,
          Lu: void 0
        },
        v_e_31828 = {};
      function v_h_31829(v_t_31844) {
        if (v_t_31844 & (v_o_31817 | v_u_31821) && 1 < v_f_31826.iu.su && (v_f_31826.iu.au = v_qa_28086(v_f_31826.iu.au + 1, v_f_31826.iu.su), v_r_31830()), v_t_31844 & v_l_31818 && 1 < v_f_31826.iu.su && (v_f_31826.iu.au = v_qa_28086(v_f_31826.iu.au - 1, v_f_31826.iu.su), v_r_31830()), v_t_31844 & (v_v_31819 | v_c_31820)) {
          if (v_f_31826.iu.Ee) switch (v_f_31826.iu.ru & v_tt_27777) {
            case v_N0_27771:
              v_f_31826.iu.Ee(v_nt_27780);
              break;
            case v_G0_27772:
              0 === v_f_31826.iu.au ? v_f_31826.iu.Ee(v_H0_27781) : v_f_31826.iu.Ee(v_rt_27782);
          }
          v_f_31826.iu.nu = !1, v_f_31826.iu.ru = 0, v_f_31826.iu.Ee = void 0, v___31827.Iu.Be = !1;
        }
      }
      function v_r_31830() {
        switch (v_f_31826.iu.ru & v_tt_27777) {
          case v_N0_27771:
            v___31827.Cu.Qt = v___31827.Au.Qt;
            break;
          case v_G0_27772:
            0 === v_f_31826.iu.au ? v___31827.Cu.Qt = v___31827.Tu.Qt : v___31827.Cu.Qt = v___31827.Lu.Qt;
        }
      }
      function v_a_31831(v_t_31845, v_i_31846, v_e_31847) {
        if (!v_f_31826.iu.nu) {
          switch (v_f_31826.iu.nu = !0, v_f_31826.iu.au = 0, v_f_31826.iu.ru = v_i_31846, v_f_31826.iu.Ee = v_e_31847, v_f_31826.iu.ru & v_tt_27777) {
            case v_N0_27771:
              v_f_31826.iu.su = 1, v___31827.Au.Be = !0, v___31827.Tu.Be = !1, v___31827.Lu.Be = !1;
              break;
            case v_G0_27772:
              v_f_31826.iu.su = 2, v___31827.Au.Be = !1, v___31827.Tu.Be = !0, v___31827.Lu.Be = !0;
          }
          v___31827.yu.Wt = v_t_31845, v_r_31830(), v___31827.Iu.Be = !0;
        }
      }
      function v_d_31832(v_t_31848) {
        v_f_31826.a0 && (v_f_31826.a0.uu.Be = !1, v_f_31826.a0._u && v_f_31826.a0._u(), v_f_31826.Qc = !0), v_f_31826.r0 = v_t_31848, v_f_31826.a0 = v_e_31828[v_t_31848], v_f_31826.a0.fu && v_f_31826.a0.fu(), v_f_31826.a0.vu && v_f_31826.a0.vu(), v_f_31826.a0.uu.Be = !0;
      }
      function v_s_31852() {
        let v_t_31849;
        var v_i_31850, v_e_31851;
        function v_s_31852() {
          this.lr = !1, this.xR = 0;
        }
        (v_t_31849 = v_n_31824.Vc("Root")) && (v_t_31849.gu = ["InputTest", "OutputTest", "Graphics", "HardwareInfo", "AmReaderTest", "VfdTest", "InputDelayTest", "DataState", "VideoExportTest", "Reboot", "Shutdown", "Exit"], v_t_31849.au = v_t_31849.gu.indexOf("Exit"), v_t_31849.fu = function () {}, v_t_31849.du = function (v_t_31853, v_i_31854) {
          if (!this.pu(v_t_31853, v_i_31854) && v_t_31853 & (v_v_31819 | v_c_31820)) switch (this.gu[this.au]) {
            case "InputTest":
              v_d_31832("InputTest");
              break;
            case "OutputTest":
              v_d_31832("OutputTest");
              break;
            case "Graphics":
              v_d_31832("Graphics");
              break;
            case "HardwareInfo":
              v_d_31832("HardwareInfo");
              break;
            case "AmReaderTest":
              v_d_31832("AmReaderTest");
              break;
            case "VfdTest":
              v_d_31832("VfdTest");
              break;
            case "InputDelayTest":
              v_d_31832("InputDelayTest");
              break;
            case "DataState":
              v_d_31832("DataState");
              break;
            case "VideoExportTest":
              v_d_31832("VideoExportTest");
              break;
            case "SystemConfig":
              v_a_31831(v_Ue_28209("svcMenuShutdownMessage"), v_G0_27772, function (v_t_31855) {
                v_t_31855 === v_H0_27781 && (location.href = "/sysconf.html");
              });
              break;
            case "Reboot":
              v_a_31831(v_Ue_28209("svcMenuRebootMessage"), v_G0_27772, function (v_t_31856) {
                v_t_31856 === v_H0_27781 && location.reload();
              });
              break;
            case "Shutdown":
              v_a_31831(v_Ue_28209("svcMenuShutdownMessage"), v_G0_27772, function (v_t_31857) {
                v_t_31857 === v_H0_27781 && window.close();
              });
              break;
            case "Exit":
              sceneManager.Jk(!1), renderer.v9(-1), renderer._i("sysTestMenu"), v_D_27646.oS(), v_f_31826.Gi = !1;
          }
        }, v_t_31849.vu = function () {
          this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
        }), (v_t_31849 = v_n_31824.Vc("InputTest")) && (v_t_31849.wu = 0, v_t_31849.On = {
          Eu: v_t_31849.uu.ot("textGeneralInputState"),
          Fu: [v_t_31849.uu.ot("textMainInputState0"), v_t_31849.uu.ot("textMainInputState1")],
          Bu: v_t_31849.uu.ot("textSideInputState"),
          Mu: (v_i_31850 = 32, v_e_31851 = 0, Array.from({
            length: v_i_31850
          }, () => v_e_31851))
        }, v_t_31849.On.Eu.Tn || (v_t_31849.On.Eu.Tn = new v_Bo_28128()), v_t_31849.On.Fu[0].Tn || (v_t_31849.On.Fu[0].Tn = new v_Bo_28128()), v_t_31849.On.Fu[1].Tn || (v_t_31849.On.Fu[1].Tn = new v_Bo_28128()), v_t_31849.On.Bu.Tn || (v_t_31849.On.Bu.Tn = new v_Bo_28128()), v_t_31849.fu = function () {
          this.On.Mu.fill(0);
        }, v_t_31849.hu = function () {
          var v_e_31858 = inputModule.sR();
          let v_n_31859 = "";
          v_n_31859 = (v_n_31859 += (v_f_31826.tu & v_c_31820 ? "<#c:62cbf5>ON<#r>" : "OFF") + "\n") + (v_f_31826.tu & v_u_31821 ? "<#c:62cbf5>ON<#r>" : "OFF"), this.On.Eu.Wt = this.On.Eu.Tn.An(v_n_31859);
          for (let v_i_31861 = 0; v_i_31861 < 2; ++v_i_31861) {
            v_n_31859 = "";
            for (let v_t_31862 = 16 * v_i_31861; v_t_31862 < 16 * v_i_31861 + 16; ++v_t_31862) {
              this.On.Mu[31 - v_t_31862] < v_e_31858[31 - v_t_31862] && (this.On.Mu[31 - v_t_31862] = v_e_31858[31 - v_t_31862]);
              var v_r_31860 = v_e_31858[31 - v_t_31862] >= inputModule.he;
              v_n_31859 += (v_r_31860 ? "<#c:62cbf5>ON  " : "OFF ") + v_Xa_28081("" + v_e_31858[31 - v_t_31862], 3, " ") + "/" + v_Xa_28081("" + this.On.Mu[31 - v_t_31862], 3, " ") + "<#r>\n";
            }
            this.On.Fu[v_i_31861].Wt = this.On.Fu[v_i_31861].Tn.An(v_n_31859);
          }
          v_n_31859 = "";
          for (let v_t_31863 = 32; v_t_31863 < 38; ++v_t_31863) v_n_31859 += 63 <= v_e_31858[v_t_31863] ? "<#c:62cbf5>ON<#r>\n" : "OFF\n";
          this.On.Bu.Wt = this.On.Bu.Tn.An(v_n_31859);
        }, v_t_31849.du = function (v_t_31864, v_i_31865) {
          this.pu(v_t_31864, v_i_31865) || v_t_31864 & (v_c_31820 | v_u_31821) && v_i_31865 & v_c_31820 && v_i_31865 & v_u_31821 && v_d_31832("Root");
        }), (v_t_31849 = v_n_31824.Vc("OutputTest")) && (v_t_31849.wu = v_l_31818 | v_o_31817 | v_v_31819, v_t_31849.gu = ["OutputTest0", "OutputTest1", "OutputTest2", "OutputTest3", "OutputTest4", "Back"], v_t_31849.au = 0, v_t_31849.K = function () {
          try {
            var v_glL_31866 = v_w_31825 && v_w_31825.lt && v_w_31825.lt.ot("keyGuideLeft"),
              v_glR_31867 = v_w_31825 && v_w_31825.lt && v_w_31825.lt.ot("keyGuideRight");
            if (v_glL_31866) {
              v_glL_31866.Be = !0;
              for (var v_qi_31868 = 0; v_qi_31868 < v_glL_31866.We.length; ++v_qi_31868) v_glL_31866.We[v_qi_31868].Be = !0;
            }
            if (v_glR_31867) {
              v_glR_31867.Be = !0;
              for (var v_qj_31869 = 0; v_qj_31869 < v_glR_31867.We.length; ++v_qj_31869) v_glR_31867.We[v_qj_31869].Be = !0;
            }
            var v_p_31870 = window.umgKeyPanel && window.umgKeyPanel.get();
            if (!v_p_31870) return;
            var v_u_31871 = this.uu;
            var rows = [["textMenuOutputTest0Value", v_p_31870.rowH], ["textMenuOutputTest1Value", v_p_31870.colGap], ["textMenuOutputTest2Value", v_p_31870.airGap], ["textMenuOutputTest3Value", v_p_31870.airRowGap], ["textMenuOutputTest4Value", v_p_31870.bottomInset]];
            for (var v_i_31872 = 0; v_i_31872 < rows.length; ++v_i_31872) {
              var v_e_31873 = v_u_31871.ot(rows[v_i_31872][0]);
              if (v_e_31873) v_e_31873.Wt = "" + rows[v_i_31872][1];
            }
            var v_kb_31874 = v_w_31825 && v_w_31825.lt && v_w_31825.lt.ot("keyGuideLabel");
            if (v_kb_31874) {
              v_kb_31874.Be = !0;
              v_kb_31874.Wt = "触发距离 " + v_p_31870.radius;
              if (window.umgKeyPanel) window.umgKeyPanel.setGuidePos((v_w_31825.lt.Te || 0) + v_kb_31874.Te, (v_w_31825.lt.Qt || 0) + v_kb_31874.Qt, v_kb_31874.Le, v_kb_31874.G0);
            }
          } catch (v_e_31875) {}
        }, v_t_31849.fu = function () {
          try {
            window.umgKeyPanel && (window.umgKeyPanel.settingsBegin(), this.K());
          } catch (v_e_31876) {}
        }, v_t_31849._u = function () {
          try {
            var v_glL_31877 = v_w_31825 && v_w_31825.lt && v_w_31825.lt.ot("keyGuideLeft"),
              v_glR_31878 = v_w_31825 && v_w_31825.lt && v_w_31825.lt.ot("keyGuideRight");
            if (v_glL_31877) v_glL_31877.Be = !1;
            if (v_glR_31878) v_glR_31878.Be = !1;
            window.umgKeyPanel && window.umgKeyPanel.settingsEnd();
          } catch (v_e_31879) {}
        }, v_t_31849.du = function (v_t_31880, v_i_31881) {
          try {
            if (v_t_31880 & v_l_31818) {
              var v_n_31882 = this.gu.length,
                v_a_31883 = this.au - 1;
              this.au = v_a_31883 < 0 ? v_n_31882 - 1 : v_a_31883;
              this.vu();
              this.K();
              return;
            }
            if (v_t_31880 & v_o_31817) {
              var v_n2_31884 = this.gu.length,
                v_a2_31885 = this.au + 1;
              this.au = v_a2_31885 >= v_n2_31884 ? 0 : v_a2_31885;
              this.vu();
              this.K();
              return;
            }
            if (v_t_31880 & v_c_31820) {
              v_d_31832("Root");
              return;
            }
            var keys = ["rowH", "colGap", "airGap", "airRowGap", "bottomInset", null],
              v_dir_31886 = 0;
            if (v_t_31880 & 16) v_dir_31886 = 1;else if (v_t_31880 & 8) v_dir_31886 = -1;else if (v_t_31880 & v_u_31821) v_dir_31886 = 1;else return;
            if (this.au === 5) {
              v_d_31832("Root");
              return;
            }
            var v_k_31887 = keys[this.au];
            if (!v_k_31887) {
              return;
            }
            window.umgKeyPanel && window.umgKeyPanel.cycle(v_k_31887, v_dir_31886);
            this.K();
          } catch (v_e_31888) {}
        }, v_t_31849.vu = function () {
          try {
            var v_c_31889 = this.uu && this.uu.ot("textMenuCursor"),
              v_b_31890 = this.bu();
            if (v_c_31889 && v_b_31890) v_c_31889.Qt = v_b_31890.Qt;
          } catch (v_e_31891) {}
        }), (v_t_31849 = v_n_31824.Vc("Graphics")) && (v_t_31849.gu = ["Resolution", "FpsLimit", "ShowStat", "Back"], v_t_31849.au = v_t_31849.gu.indexOf("Back"), v_t_31849.On = {
          Ru: [["640x360", "640 X 360", 640, 360], ["960x540", "960 X 540", 960, 540], ["1280x720", "1280 X 720", 1280, 720], ["1920x1080", "1920 X 1080 (DEFAULT)", 1920, 1080], ["2560x1440", "2560 X 1440", 2560, 1440]],
          Pu: [[0, "OFF"], [1, "30 fps"], [2, "60 fps"]]
        }, v_t_31849.fu = function () {
          this.Du(), this.Gu(), this.ju();
        }, v_t_31849.du = function (v_t_31892, v_i_31893) {
          if (!this.pu(v_t_31892, v_i_31893) && v_t_31892 & (v_v_31819 | v_c_31820)) switch (this.gu[this.au]) {
            case "Resolution":
              this.Nu();
              break;
            case "FpsLimit":
              this.Hu();
              break;
            case "ShowStat":
              this.Uu();
              break;
            case "Back":
              v_d_31832("Root");
          }
        }, v_t_31849.vu = function () {
          this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
        }, v_t_31849.Du = function () {
          let v_t_31894 = this.On.Ru.findIndex(v_t_31895 => v_t_31895[0] === v_R_27641);
          -1 === v_t_31894 && (v_t_31894 = 2), this.uu.ot("textMenuResolutionValue").Wt = this.On.Ru[v_t_31894][1];
        }, v_t_31849.Nu = function () {
          let v_t_31896 = this.On.Ru.findIndex(v_t_31898 => v_t_31898[0] === v_R_27641);
          var v_i_31897 = v_qa_28086((v_t_31896 = -1 === v_t_31896 ? 2 : v_t_31896) + 1, this.On.Ru.length);
          systemMisc.Vu(this.On.Ru[v_i_31897][2], this.On.Ru[v_i_31897][3]), this.Du();
        }, v_t_31849.Gu = function () {
          let v_t_31899 = this.On.Pu.findIndex(v_t_31900 => v_t_31900[0] === v_p_27572);
          -1 === v_t_31899 && (v_t_31899 = 0), this.uu.ot("textMenuFpsLimitValue").Wt = this.On.Pu[v_t_31899][1];
        }, v_t_31849.Hu = function () {
          var v_t_31901 = v_qa_28086(this.On.Pu.findIndex(v_t_31902 => v_t_31902[0] === v_p_27572) + 1, this.On.Pu.length);
          v_p_27572 = this.On.Pu[v_t_31901][0], this.Gu();
        }, v_t_31849.ju = function () {
          this.uu.ot("textMenuShowStatValue").Wt = v_k_27573 ? "ON" : "OFF";
        }, v_t_31849.Uu = function () {
          v_k_27573 = !v_k_27573, this.ju();
        }), (v_t_31849 = v_n_31824.Vc("HardwareInfo")) && (v_t_31849.wu = 0, v_t_31849.On = {
          Ou: !1
        }, v_t_31849.fu = async function () {
          let v_i_31903 = this;
          this.wu = 0, this.On.Ou = !1, this.uu.ot("loadingDialog").Be = !0, v_w_31825.e8(0, this.uu.ot("loadingDialog"));
          var v_t_31904 = "----";
          let v_e_31905 = "KEYBOARD EMULATION",
            v_n_31906 = v_t_31904,
            v_r_31907 = v_t_31904,
            v_s_31908 = v_t_31904,
            v_a_31909 = v_t_31904,
            v_o_31910 = v_t_31904,
            v_l_31911 = v_t_31904,
            v_c_31912 = v_t_31904,
            v_u_31913 = v_t_31904,
            v_f_31914 = v_t_31904,
            v___31915 = v_t_31904,
            v_h_31916 = v_t_31904;
          function v_d_31917(v_t_31918) {
            v_i_31903.uu.ot("textMenuMainDeviceInputMode").Wt = v_e_31905, v_i_31903.uu.ot("textMenuMainDeviceOutputMode").Wt = v_n_31906, v_i_31903.uu.ot("textMenuMainDeviceServerName").Wt = v_r_31907, v_i_31903.uu.ot("textMenuMainDeviceServerVersion").Wt = v_s_31908, v_i_31903.uu.ot("textMenuMainDeviceHardwareName").Wt = v_a_31909, v_i_31903.uu.ot("textMenuMainDeviceHardwareVersion").Wt = v_o_31910, v_i_31903.uu.ot("textMenuMainDevicePort").Wt = v_l_31911, v_i_31903.uu.ot("textMenuMainDeviceBoardNumber").Wt = v_c_31912, v_i_31903.uu.ot("textMenuMainDeviceFirmwareVersion").Wt = v_u_31913, v_i_31903.uu.ot("textMenuUmgrIoPort").Wt = v_f_31914, v_i_31903.uu.ot("textMenuUmgrIoBoardNumber").Wt = v___31915, v_i_31903.uu.ot("textMenuUmgrIoFirmwareVersion").Wt = v_h_31916, v_t_31918 && (v_i_31903.wu = v_v_31819, v_i_31903.On.Ou = !0, v_i_31903.uu.ot("loadingDialog").Be = !1);
          }
          v_d_31917(), v_M_27644 && (v_e_31905 = "COM", v_n_31906 = "COM", v_l_31911 = "COM" + handshake.rm.A7, v_t_31904 = await v_M_27644.CR(), v_c_31912 = "837-" + v_t_31904.bd_num, v_u_31913 = "" + v_t_31904.fw), ledOutput.Bt() && (v_n_31906 = "WebSocket (" + v_Pe_28064(handshake.rm.y7) + ")", v_t_31904 = await new Promise(v_t_31919 => ledOutput.rv(v_t_31919))) && (v_r_31907 = v_t_31904.av, v_s_31908 = v_t_31904.sv[0] + "." + v_t_31904.sv[1], v_a_31909 = v_t_31904.ov, v_o_31910 = v_t_31904.cv[0] + "." + v_t_31904.cv[1]), v_d_31917(), v_E_27645 && (v_f_31914 = "COM" + handshake.rm.S7, v_t_31904 = await v_E_27645.CR(), v___31915 = "000-" + v_t_31904.bd_num, v_h_31916 = "" + v_t_31904.fw), v_d_31917(!0);
        }, v_t_31849.du = function (v_t_31920, v_i_31921) {
          this.On.Ou && v_t_31920 & (v_v_31819 | v_c_31820) && v_d_31832("Root");
        }), (v_t_31849 = v_n_31824.Vc("AmReaderTest")) && (v_t_31849.gu = ["AmReaderTestReader", "AmReaderTestLed", "Back"], v_t_31849.au = v_t_31849.gu.indexOf("Back"), v_t_31849.On = {
          w9: 0,
          uS: !1
        }, v_t_31849.fu = function () {
          this.On.w9 = 0, this.fS(), this.uu.ot("textMenuAmReaderStateValue").Wt = "----", this.uu.ot("textMenuAmReaderResultValue").Wt = "----", this.uu.ot("textMenuAmReaderTimeValue").Wt = "----";
        }, v_t_31849._u = function () {
          v_D_27646._S(0), v_D_27646.C9();
        }, v_t_31849.du = function (v_t_31922, v_i_31923) {
          if (!this.On.uS && !this.pu(v_t_31922, v_i_31923) && v_t_31922 & (v_v_31819 | v_c_31820)) switch (this.gu[this.au]) {
            case "AmReaderTestReader":
              this.On.uS = !0, this.On.w9 = 0, this.fS(), this.uu.ot("textMenuAmReaderStateValue").Wt = v_Ue_28209("svcMenuAmReaderStateInit"), this.uu.ot("textMenuAmReaderResultValue").Wt = "----", this.uu.ot("textMenuAmReaderTimeValue").Wt = "----", v_w_31825.e8(1, this.uu), v_Fe_28101(async () => {
                let v_i_31924 = 0,
                  v_e_31925 = 0;
                var v_t_31926 = v_uo_28102(() => {
                    v_D_27646.C9();
                  }, 1e4),
                  v_n_31927 = await v_D_27646.R9(v_t_31928 => {
                    v_w_31825.e8(1, this.uu), 1 === v_t_31928 ? v_i_31924 = performance.now() : 2 === v_t_31928 && (v_e_31925 = performance.now()), this.uu.ot("textMenuAmReaderStateValue").Wt = v_Ue_28209(["svcMenuAmReaderStateIdling", "svcMenuAmReaderStatePolling", "svcMenuAmReaderStateDone"][v_t_31928]);
                  }),
                  v_t_31926 = (clearTimeout(v_t_31926), 0 === v_e_31925 && (this.uu.ot("textMenuAmReaderStateValue").Wt = v_Ue_28209("svcMenuAmReaderStateTimedout")), v_n_31927 === v_Ts_28004 || v_n_31927 === v_Is_28005);
                v_w_31825.i8(1, this.uu), this.uu.ot("textMenuAmReaderResultValue").Wt = v_t_31926 ? "BAD" : "GOOD", this.uu.ot("textMenuAmReaderTimeValue").Wt = v_t_31926 ? "----" : (v_e_31925 - v_i_31924).toFixed(2) + "ms", this.On.uS = !1;
              });
              break;
            case "AmReaderTestLed":
              this.On.w9 = (this.On.w9 + 1) % 5, v_D_27646._S(this.On.w9), this.fS();
              break;
            case "Back":
              v_d_31832("Root");
          }
        }, v_t_31849.fS = function () {
          this.uu.ot("textMenuAmReaderLedValue").Wt = this.On.w9 ? "ON" : "OFF";
        }, v_t_31849.vu = function () {
          this.uu.ot("textMenuCursor").Qt = this.bu().Qt;
        }), (v_t_31849 = v_n_31824.Vc("VfdTest")) && (v_t_31849.wu = v_v_31819, v_t_31849.fu = function () {
          v_D_27646.hS();
        }, v_t_31849._u = function () {
          v_D_27646.dS();
        }, v_t_31849.du = function (v_t_31929, v_i_31930) {
          v_t_31929 & (v_v_31819 | v_c_31820) && v_d_31832("Root");
        }), (v_t_31849 = v_n_31824.Vc("InputDelayTest")) && (v_t_31849.wu = v_v_31819, v_t_31849.fu = function () {
          let v_n_31931 = this.uu.ot("textMenuDelayValue"),
            v_a_31932 = this.uu.ot("textMenuAutoScanIntervalValue"),
            v_o_31933 = this.uu.ot("textMenuAutoScanIntervalValueMax"),
            v_l_31934 = (v_n_31931.Wt = "----", v_a_31932.Wt = "----", v_o_31933.Wt = "----", this.uu.ot("inputDelayTestNote")),
            v_r_31935 = this.uu.ot("inputDelayTestDelay"),
            v_c_31936 = (v_r_31935.Be = !1, performance.now()),
            v_u_31937 = 0,
            v_f_31938 = 0,
            v___31939 = 0,
            v_h_31940 = 500,
            v_d_31941 = new v_ps_27996(v_s_31852, 1);
          function v_v_31942() {
            let v_t_31943 = 0,
              v_i_31944 = 0;
            for (var v_e_31945 of v_d_31941.Zl()) v_e_31945.lr && (++v_t_31943, v_i_31944 += v_e_31945.xR);
            v_r_31935.Be = !0, v_r_31935.Qt = v_i_31944 / v_t_31943 / v_h_31940 * 512 + 255, v_n_31931.Wt = 0 === v_t_31943 ? "----" : (v_i_31944 / v_t_31943).toFixed(2);
          }
          v_M_27644 && v_M_27644.TR(!0), v_Fe_28101(() => {
            renderer.ut("InputDelayTest", new v_Tl_28174((v_t_31946, v_i_31947, v_e_31948) => {
              v_M_27644 && (v_a_31932.Wt = v_M_27644.PR.toFixed(2), v_o_31933.Wt = v_M_27644.RR.toFixed(2)), v_t_31946 >= v_u_31937 && (v_f_31938 = v_u_31937, v_Ae_27892.dn("guide"), v_u_31937 = v_c_31936 + Math.floor((v_t_31946 - v_c_31936) / v_h_31940) * v_h_31940 + v_h_31940), v_l_31934.Qt = (v_t_31946 - v_c_31936 + .5 * v_h_31940) % v_h_31940 / v_h_31940 * 512;
              let v_n_31949 = inputModule.aR(),
                v_r_31950 = !1;
              for (let v_t_31952 = 0; v_t_31952 < 32; v_t_31952++) if (v_n_31949[v_t_31952]) {
                v_r_31950 = !0;
                break;
              }
              var v_s_31951;
              v_r_31950 && (v___31939 = v_t_31946 >= v_u_31937 - v_h_31940 / 2 ? (v___31939 !== v_f_31938 && v___31939 !== v_u_31937 && ((v_s_31951 = v_d_31941.Vc()).lr = !0, v_s_31951.xR = v_t_31946 - v_u_31937, v_v_31942()), v_u_31937) : (v___31939 !== v_f_31938 && ((v_s_31951 = v_d_31941.Vc()).lr = !0, v_s_31951.xR = v_t_31946 - v_f_31938, v_v_31942()), v_f_31938));
            }), 400, v_t_31953 => {
              v_t_31953.p9 = 10;
            });
          });
        }, v_t_31849._u = function () {
          v_M_27644 && v_M_27644.TR(!1), v_Fe_28101(() => renderer._i("InputDelayTest"));
        }, v_t_31849.du = function (v_t_31954, v_i_31955) {
          v_t_31954 & (v_v_31819 | v_c_31820) && v_d_31832("Root");
        }), (v_t_31849 = v_n_31824.Vc("DataState")) && (v_t_31849.wu = v_v_31819, v_t_31849.fu = function () {
          let v_t_31956 = 0;
          this.uu.ot("textMenuSongsValue").Wt = "" + v_be_27857.Pp.length, v_t_31956 = 0;
          for (const v_i_31957 of v_be_27857.Gp) v_t_31956 += v_i_31957.items.length;
          this.uu.ot("textMenuCoursesValue").Wt = "" + v_t_31956, this.uu.ot("textMenuCharaValue").Wt = "" + v_be_27857.Np.length, this.uu.ot("textMenuTitlesValue").Wt = "" + v_be_27857.Hp.length, this.uu.ot("textMenuNameplatesValue").Wt = "" + v_be_27857.Up.length, this.uu.ot("textMenuVoicesValue").Wt = "" + v_be_27857.Vp.length;
        }, v_t_31849.du = function (v_t_31958, v_i_31959) {
          v_t_31958 & (v_v_31819 | v_c_31820) && v_d_31832("Root");
        }), (v_t_31849 = v_n_31824.Vc("VideoExportTest")) && (v_t_31849.wu = 0, v_t_31849.fu = async function () {
          this.uu.ot("testPattern0").Be = !1;
          var v_t_31960 = await systemMisc.O6(v_Se_27889.y6(), v_yn_27656 * v_Sn_27657 * 4, v_Se_27889.dv());
          v_t_31960.ok ? (this.uu.ot("testPattern0").Be = !0, v_Se_27889.p6(), v_d1_27871(), await renderer.C7(v_Ge_28204(120)), v_v1_27872(), v_Se_27889.C6(), systemMisc.K6(), await systemMisc.Fp(), v_ie_27875(), v_a_31831("Video exported successfully", v_N0_27771, function () {
            v_d_31832("Root");
          })) : v_a_31831("Video Exporter Error\n" + v_t_31960.msg, v_N0_27771, function () {
            v_d_31832("Root");
          });
        });
      }
      function v_g_31834(v_t_31961, v_i_31962, v_e_31963) {
        if (v_f_31826.Gi) {
          if (v_f_31826.a0) {
            v_f_31826.iu.nu ? (v___31827.mu.Be = 1 < v_f_31826.iu.su, v___31827.Su.Be = 1 < v_f_31826.iu.su, v___31827.xu.Be = !0) : (v___31827.mu.Be = !!(v_f_31826.a0.wu & v_o_31817), v___31827.Su.Be = !!(v_f_31826.a0.wu & v_l_31818), v___31827.xu.Be = !!(v_f_31826.a0.wu & v_v_31819));
            {
              var v_n_31964 = inputModule.oR(),
                v_r_31965 = inputModule.vR();
              let v_i_31967 = 0,
                v_e_31968 = 0;
              for (let v_t_31969 = 0; v_t_31969 < v_r_31965.length; ++v_t_31969) switch (v_r_31965[v_t_31969].Ae) {
                case "esc":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= v_c_31820), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= v_c_31820);
                  break;
                case "enter":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= v_u_31821), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= v_u_31821);
                  break;
                case "up":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= v_l_31818), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= v_l_31818);
                  break;
                case "down":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= v_o_31817), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= v_o_31817);
                  break;
                case "left":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= 8), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= 8);
                  break;
                case "right":
                  2 & v_r_31965[v_t_31969].lu && (v_e_31968 |= 16), 2 === v_r_31965[v_t_31969].lu && (v_i_31967 |= 16);
              }
              for (const v_a_31970 of v_f_31826.ve) {
                v_a_31970.lu >>= 1;
                for (let v_t_31971 = 0; v_t_31971 < 32; ++v_t_31971) if (v_n_31964[v_t_31971] && v_t_31971 >= 2 * v_a_31970.ou && v_t_31971 < 2 * (v_a_31970.ou + v_a_31970.Le)) {
                  v_a_31970.lu |= 2;
                  break;
                }
                2 & v_a_31970.lu && (v_e_31968 |= v_a_31970.Ae), 2 === v_a_31970.lu && (v_i_31967 |= v_a_31970.Ae);
              }
              v_f_31826.tu = v_e_31968, v_f_31826.eu = v_i_31967, window.__umgPadTake && (v_f_31826.eu |= window.__umgPadTake(), v_f_31826.tu = v_f_31826.eu);
            }
            v_f_31826.iu.nu ? v_h_31829(v_f_31826.eu, v_f_31826.tu) : (!v_f_31826.Qc && v_f_31826.a0.du && v_f_31826.a0.du(v_f_31826.eu, v_f_31826.tu), !v_f_31826.Qc && v_f_31826.a0.hu && v_f_31826.a0.hu()), v_f_31826.Qc = !1;
          }
        } else {
          var v_s_31966 = inputModule.vR();
          for (let v_t_31972 = 0; v_t_31972 < v_s_31966.length; ++v_t_31972) "esc" === v_s_31966[v_t_31972].Ae ? 2 === v_s_31966[v_t_31972].lu && v_m_31835() : "enter" === v_s_31966[v_t_31972].Ae && 2 === v_s_31966[v_t_31972].lu && v_R1_27896.WA();
        }
      }
      function v_m_31835() {
        v_Le_28076([v_i_31973 => {
          renderer.v9(9), sceneManager.Jk(!0), ledOutput.iv(!0), v_D_27646.C9(), v_D_27646.dS(), (v_f_31826 = new v_t_31822()).Gi = !0, renderer.ut("sysTestMenu", v_w_31825, 9001, v_t_31974 => {
            v_Me_28078(v_i_31973);
          });
        }, v_t_31975 => {
          v_w_31825.lt.yk(2).Wt = `${v_G_27652} v${v_nc_28202()} Build ${handshake.rm.Sm} ${handshake.rm.xm} (${handshake.rm.ym}) @` + handshake.rm.Cm, v_d_31832("Root");
        }]);
      }
      return {
        ue: function (v_e_31976) {
          v_Le_28076([v_i_31977 => {
            languagePackages.it("ui/testMenu.rsb", function (v_t_31978) {
              v_t_31978 ? (v_t_31978 = new v_Dl_28181(v_t_31978), renderer.nt(v_t_31978.rt(renderer.p5()), v_t_31979 => {
                (v_w_31825 = v_t_31979).p9 = 10, v___31827.mu = v_w_31825.lt.yk(182), v___31827.Su = v_w_31825.lt.yk(186), v___31827.xu = v_w_31825.lt.yk(190), v___31827.Iu = v_w_31825.lt.yk(172), v___31827.yu = v___31827.Iu.yk(176), v___31827.Cu = v___31827.Iu.yk(177), v___31827.Au = v___31827.Iu.yk(178), v___31827.Tu = v___31827.Iu.yk(179), v___31827.Lu = v___31827.Iu.yk(180), v_s_31833(), v_Me_28078(v_i_31977);
              })) : v_e_31976();
            });
          }, v_t_31980 => {
            v_Fe_28101(v_e_31976);
          }]);
        },
        Ju: function () {
          renderer.ut("sysTestMenuLoop", new v_Tl_28174(v_g_31834), 9e3, v_t_31981 => {
            v_t_31981.p9 = 10;
          });
        },
        T0: v_m_31835,
        Gi: () => v_f_31826.Gi
      };
    }(),
    v_ur_27932 = function () {
      let v_s_31982 = win.getElementById("screenshot_list"),
        v_a_31983 = [];
      function v_o_31984(v_t_31986) {
        var v_i_31987 = v_a_31983.shift();
        URL.revokeObjectURL(v_i_31987.pb), v_t_31986 && clearTimeout(v_i_31987.mb), clearTimeout(v_i_31987.timerPosition), v_i_31987.timerPosition = 0, v_i_31987.mb = 0, v_i_31987.ze.parentElement.removeChild(v_i_31987.ze), v_l_31985();
      }
      function v_l_31985() {
        var v_i_31988 = performance.now();
        for (let v_t_31989 = 0; v_t_31989 < v_a_31983.length; ++v_t_31989) v_a_31983[v_t_31989].fw + 2625 < v_i_31988 || v_a_31983[v_t_31989].fw + 500 > v_i_31988 || (v_a_31983[v_t_31989].ze.style.transform = "translateX(" + 20 * v_t_31989 + "px)");
      }
      return {
        bb: async function () {
          let v_e_31990 = await (!!v_qi_27868 || (await new Promise(v_t_31995 => {
            v_qi_27868 = v_t_31995;
          })) || null);
          var v_t_31991, v_i_31992, v_n_31993, v_r_31994;
          null === v_e_31990 ? v_x1_27888("Failed to capture screenshot") : !0 !== v_e_31990 && (v_t_31991 = await new Promise(v_t_31996 => {
            let v_i_31997 = new FileReader();
            v_i_31997.onload = () => v_t_31996(v_i_31997.result), v_i_31997.onerror = () => v_t_31996(null), v_i_31997.readAsArrayBuffer(v_e_31990);
          })) && (v_x1_27888("Screenshot saved: " + (await systemMisc.kb(new Uint8Array(v_t_31991)))), v_t_31991 = v_e_31990, 3 <= v_a_31983.length && v_o_31984(!0), v_t_31991 = URL.createObjectURL(v_t_31991), (v_i_31992 = win.createElement("div")).classList.add("screenshot-item-parent"), (v_n_31993 = win.createElement("div")).setAttribute("data-index", v_a_31983.length), v_n_31993.classList.add("screenshot-item"), v_n_31993.style.backgroundImage = "url(" + v_t_31991 + ")", v_s_31982.appendChild(v_i_31992), v_i_31992.appendChild(v_n_31993), v_n_31993 = v_uo_28102(v_l_31985, 500), v_r_31994 = v_uo_28102(v_o_31984, 3e3), v_a_31983.push({
            pb: v_t_31991,
            ze: v_i_31992,
            mb: v_r_31994,
            xb: v_n_31993,
            fw: performance.now()
          }), v_l_31985(), v_Ae_27892.dn("screenshot"));
        }
      };
    }();