// 顶层辅助函数(原 IIFE 的 189 个 function 声明)。
// hoisting: 在本模块内声明, 并在模块末尾挂到 scope, 因此 index.js 的 bootstrap
// 以及各模块工厂都能通过 scope.fn 提前调用。
import { scope } from './scope.js';

function rankName(v_t_28214) {
  return 1009e3 <= v_t_28214 ? "sssp" : 1007500 <= v_t_28214 ? "sss" : 1005e3 <= v_t_28214 ? "ssp" : 1e6 <= v_t_28214 ? "ss" : 99e4 <= v_t_28214 ? "sp" : 975e3 <= v_t_28214 ? "s" : 95e4 <= v_t_28214 ? "aaa" : 925e3 <= v_t_28214 ? "aa" : 9e5 <= v_t_28214 ? "a" : 8e5 <= v_t_28214 ? "bbb" : 7e5 <= v_t_28214 ? "bb" : 6e5 <= v_t_28214 ? "b" : 5e5 <= v_t_28214 ? "c" : "d";
}

function v_Oi_27861(v_t_28221) {
  var v_i_28222;
  scope.v_r_27566 || (scope.raf(scope.v_Oi_27861), v_i_28222 = v_t_28221 - scope.v_o_27569, scope.v_ys_27999.SR(), (0 === scope.v_p_27572 || v_i_28222 >= scope.v_c_27571[scope.v_p_27572]) && (scope.inputModule.oe(), scope.v_s_27567++, scope.v_a_27568 += (v_t_28221 - scope.v_o_27569) / 1e3, 59 < scope.v_s_27567 && (0 < scope.v_a_27568 && (scope.v_l_27570 = 1 / scope.v_a_27568 * 60), scope.v_s_27567 = 0, scope.v_a_27568 = 0), scope.v_o_27569 = v_t_28221, scope.v_Se_27889.oe(), scope.glContext.clearColor(scope.v_kn_27636[0], scope.v_kn_27636[1], scope.v_kn_27636[2], 1), scope.glContext.clearStencil(0), scope.glContext.clear(scope.glContext.COLOR_BUFFER_BIT | scope.glContext.DEPTH_BUFFER_BIT | scope.glContext.STENCIL_BUFFER_BIT), scope.renderer.le(v_t_28221, v_i_28222), scope.v_qi_27868) && (scope.glContext.canvas.toBlob(scope.v_qi_27868), scope.v_qi_27868 = null), scope.ledOutput.oe());
}

function v_Vi_27862() {
  scope.v_r_27566 = !1, scope.v_o_27569 = performance.now(), scope.raf(scope.v_Oi_27861);
}

function v_Wi_27863() {
  scope.v_r_27566 = !0;
}

function v_d1_27871(v_t_28223, v_i_28224) {
  scope.v_Wi_27863(), scope.v_Xi_27864 = performance.now(), scope.v_zi_27865 = new Uint8Array(scope.v_yn_27656 * scope.v_Sn_27657 * 4), scope.v_Ki_27866 = 0, scope.v_Yi_27867 = 0, scope.glContext.canvas.style.transform = "scale(1,-1)", scope.v_e_27561.classList.remove("hide"), scope.v_e_27561.innerText = "", scope.v_Zi_27869 = "function" == typeof v_t_28223 ? v_t_28223 : null, scope.v_$i_27870 = "function" == typeof v_i_28224 ? v_i_28224 : null, scope.v_Qi_27873();
}

function v_v1_27872() {
  scope.v_zi_27865 = null, scope.glContext.canvas.style.transform = "scale(1,1)", scope.v_e_27561.classList.add("hide"), scope.v_Zi_27869 = null, scope.v_$i_27870 = null, scope.v_ie_27875();
}

async function v_Qi_27873() {
  scope.v_Zi_27869 && (await scope.v_Zi_27869(scope.v_Xi_27864)), scope.v_ys_27999.SR(), scope.v_Se_27889.oe(), scope.inputModule.oe(), scope.glContext.clearColor(scope.v_kn_27636[0], scope.v_kn_27636[1], scope.v_kn_27636[2], 1), scope.glContext.clearStencil(0), scope.glContext.clear(scope.glContext.COLOR_BUFFER_BIT | scope.glContext.DEPTH_BUFFER_BIT | scope.glContext.STENCIL_BUFFER_BIT), scope.renderer.le(scope.v_Xi_27864, scope.v_O_27659, !0), null === scope.v_zi_27865 ? scope.v_Vi_27862() : (scope.v_$i_27870 && (await scope.v_$i_27870(scope.v_Xi_27864)), scope.glContext.readPixels(0, 0, scope.v_yn_27656 * (window.__umgPixelScale || 1), scope.v_Sn_27657 * (window.__umgPixelScale || 1), scope.glContext.RGBA, scope.glContext.UNSIGNED_BYTE, scope.v_zi_27865), scope.v_Xi_27864 += scope.v_O_27659, await scope.systemMisc.z6(getBufferPtr(scope.v_zi_27865), getBufferPtr(scope.v_Se_27889.k6())), ++scope.v_Ki_27866, 1e3 < performance.now() - scope.v_Yi_27867 && (scope.v_ie_27875(" " + scope.v_Ue_28209("cptStatus")), scope.v_e_27561.innerText = scope.v_Ue_28209("cptStatus") + " [ Res: 1920x1080 @ 60fps, Speed: " + scope.v_Ki_27866 + " f/s ]", scope.v_Ki_27866 = 0, scope.v_Yi_27867 = performance.now()), scope.v_uo_28102(scope.v_Qi_27873));
}

function v_te_27874() {
  scope.v_b1_27884(scope.v_K_27708);
}

function v_ie_27875(v_t_28225) {
  scope.handshake.rm.bm ? scope.doc.title = scope.v_G_27652 + " v" + scope.v_U_27653 + " (Sync Mode)" : void 0 === v_t_28225 || 0 === v_t_28225.length ? scope.doc.title = scope.v_G_27652 + " v" + scope.v_U_27653 : scope.doc.title = scope.v_G_27652 + " v" + scope.v_U_27653 + " " + v_t_28225;
}

function v_ee_27876() {
  if ("Unknown" !== scope.v_t_27564 && scope.doc.body.clientWidth < scope.doc.body.clientHeight) {
    let v_t_28229 = 1;
    var v_i_28226 = scope.v_I_27639 ? scope.handshake.On.Xp.Zp / 100 : 1,
      v_e_28227 = scope.doc.body.clientWidth,
      v_n_28228 = scope.doc.body.clientHeight;
    v_t_28229 = 1.777778 < v_n_28228 / v_e_28227 ? v_e_28227 / scope.v_Sn_27657 : v_n_28228 / scope.v_yn_27656, scope.v_y_27559.style.transform = "scale(" + v_t_28229 * v_i_28226 + ") translate(" + (scope.v_Sn_27657 + (v_e_28227 - scope.v_Sn_27657 * (v_t_28229 * v_i_28226) - (v_i_28226 * v_t_28229 * scope.v_Sn_27657 - v_t_28229 * scope.v_Sn_27657)) / 2 / (v_t_28229 * v_i_28226)) + "px," + (v_n_28228 - scope.v_yn_27656 * (v_t_28229 * v_i_28226)) / 2 / (v_t_28229 * v_i_28226) + "px) rotate(90deg)", scope.v_T_27638 = 1, scope.v_uc_28211(v_t_28229 * devicePixelRatio) && scope.glContext && scope.glContext.canvas ? scope.glContext.canvas.style.imageRendering = "pixelated" : scope.v_ne_27877();
  } else {
    let v_t_28230 = 1;
    v_e_28227 = scope.v_I_27639 ? scope.handshake.On.Xp.Zp / 100 : 1, v_n_28228 = scope.doc.body.clientWidth, v_i_28226 = scope.doc.body.clientHeight;
    v_t_28230 = 1.777778 < v_n_28228 / v_i_28226 ? v_i_28226 / scope.v_Sn_27657 : v_n_28228 / scope.v_yn_27656, scope.v_y_27559.style.transform = "scale(" + v_t_28230 * v_e_28227 + ") translate(" + (v_n_28228 - scope.v_yn_27656 * (v_t_28230 * v_e_28227)) / 2 / (v_t_28230 * v_e_28227) + "px," + (v_i_28226 - scope.v_Sn_27657 * (v_t_28230 * v_e_28227) - (v_e_28227 * v_t_28230 * scope.v_Sn_27657 - v_t_28230 * scope.v_Sn_27657)) / 2 / (v_t_28230 * v_e_28227) + "px)", scope.v_T_27638 = 0, scope.v_uc_28211(v_t_28230 * devicePixelRatio) && scope.glContext && scope.glContext.canvas ? scope.glContext.canvas.style.imageRendering = "pixelated" : scope.v_ne_27877();
  }
}

function v_ne_27877() {
  scope.glContext && scope.glContext.canvas && (0 === scope.v_L_27642 ? scope.glContext.canvas.style.imageRendering = "pixelated" : 1 === scope.v_L_27642 ? scope.glContext.canvas.style.imageRendering = "-webkit-optimize-contrast" : 2 === scope.v_L_27642 && (scope.glContext.canvas.style.imageRendering = "high-quality"));
}

function v_re_27878() {
  scope.inputModule.ce();
}

function v_w1_27879() {
  scope.inputEnabled = !0;
}

function v_g1_27880() {
  scope.inputEnabled = !1;
}

function v_m1_27881() {
  scope.v_i_27565 = scope.v_i_27565 || scope.v_uo_28102(function () {
    scope.v_i_27565 = null, scope.v_ee_27876();
  }, 250);
}

function v_p1_27882(v_t_28231) {
  var v_i_28232 = new scope.v_Po_28121(),
    v_t_28231 = (v_i_28232.i3("utf-8"), v_i_28232.hg(scope.v_ec_28201()), v_i_28232.hg(scope.v_ec_28201()), v_i_28232.hg(256), v_i_28232.vg(v_t_28231.filename), v_i_28232.hg(scope.v_ec_28201()), v_i_28232.Tg(v_t_28231.lineno), v_i_28232.Tg(v_t_28231.colno), v_i_28232.hg(scope.v_ec_28201()), v_i_28232.vg(v_t_28231.message), scope.v_ic_28200(v_i_28232.mg(), !0)),
    v_i_28232 = "ERROR REPORT\nToken:\n" + function (v_i_28233, v_e_28234) {
      let v_n_28235 = "";
      for (let v_t_28236 = 0; v_t_28236 < v_i_28233.byteLength; ++v_t_28236) !v_e_28234 || !v_t_28236 || 15 & v_t_28236 || (v_n_28235 += "\n"), v_n_28235 += scope.v_Xa_28081(v_i_28233[v_t_28236].toString(16), 2, "0");
      return v_n_28235;
    }(v_t_28231, !0);
  scope.v_Wi_27863(), scope.systemMisc.m2("----------------"), scope.systemMisc.m2(v_i_28232), alert(v_i_28232 + "\n\nthis report is saved in log.txt");
}

function v_k1_27883() {
  location.href += "?fix=1";
}

function v_b1_27884(v_t_28237) {
  location.href += "?errDisp=" + v_t_28237;
}

function v_A1_27887() {
  let v_i_28238 = performance.now(),
    v_t_28239 = !1;
  for (var v_e_28240 of scope.v_S1_27886) v_e_28240.wb > v_i_28238 || (scope.v_n_27560.removeChild(v_e_28240.ze), v_t_28239 = !0);
  v_t_28239 && (scope.v_S1_27886 = scope.v_S1_27886.filter(v_t_28241 => v_t_28241.wb > v_i_28238));
}

function v_x1_27888(v_t_28242) {
  var v_i_28243 = scope.doc.createElement("div");
  v_i_28243.innerText = v_t_28242, scope.v_n_27560.appendChild(v_i_28243), scope.v_S1_27886.push({
    ze: v_i_28243,
    wb: performance.now() + 3e3
  });
}

function v_C1_27890(v_t_28295) {
  this.I6 = v_t_28295, this.o1 = !1, this.A6 = 0, this.l6 = 0, this.b1 = 1, this._6 = -1, this.Mc = 1, this.n6 = !1, this.T6 = 0, this.L6 = 0, this.R6 = 0;
}

function v_T1_27891(v_t_28296, v_i_28297) {
  this.E6 = v_t_28296 || 44100, this.M6 = v_i_28297 || 60, this.B6 = this.E6 / this.M6, this.D6 = 0, this.P6 = [], this.G6 = 2, this.N6 = new Int16Array(this.B6 * this.G6), this.j6 = new Uint32Array(this.N6.buffer);
}

function v_ar_27928() {
  this.ee = "", this.te = 0, this.AR = "", this.C0 = "", this.En = "", this.X0 = !1, this.k0 = !1, this.ig = !1, this.J6 = !1, this._0 = null, this.y0 = null, this.Ee = void 0, this.A0 = void 0, this.Rx = 0, this.bx = !1;
}

function v_fr_27933() {
  this.Ae = 0, this.Fi = scope.v_An_27660, this.Xg = 0, this.ou = 0, this.Le = 0, this.G0 = 0, this.Lw = 0, this.Jg = 0, this.Yg = 0, this.We = [], this.od = 0, this.Pg = 0, this.Og = 0, this.Rw = 1, this.CL = 0, this.pw = !1, this.dw = scope.v_An_27660, this.Vg = !1, this.gw = !1, this.jg = Array.from({
    length: 16
  }, () => 1 / 0), this.Hg = Array.from({
    length: 16
  }, () => -1 / 0), this.yw = 0, this.Gg = 0, this.Ng = 0, this.Iw = 0, this.n7 = Array.from({
    length: 16
  }, () => !1), this.Sw = null, this._k = !1, this.xw = 0, this.zg = 0, this.tw = !1, this.qg = !1, this.Qg = !1, this.Ug = scope.v_v0_27715, this.nr = 0, this.mw = null, this.Kg = 0, this.ww = null;
  let v_u_31998 = this;
  this.Vw = function (v_t_31999) {
    v_u_31998.Fi = v_t_31999.Fi, v_u_31998.Xg = v_t_31999.Xg, v_u_31998.ou = v_t_31999.ou, v_u_31998.Le = v_t_31999.Le, v_u_31998.Lw = v_t_31999.Lw, v_u_31998.Jg = v_t_31999.Jg, v_u_31998.Yg = v_t_31999.Yg, v_u_31998.G0 = v_t_31999.G0, v_u_31998.We = [], v_u_31998.Rw = v_t_31999.Rw, v_u_31998.CL = v_t_31999.CL, v_u_31998.dw = v_t_31999.dw, v_u_31998.Vg = v_t_31999.Vg, v_u_31998.gw = v_t_31999.gw;
    let v_i_32000;
    scope.v_De_28096(v_t_31999.We, function (v_t_32001) {
      (v_i_32000 = new scope.v_fr_27933()).Vw(v_t_32001), v_u_31998.We.push(v_i_32000);
    });
  }, this.Jw = function () {
    if (0 !== v_u_31998.We.length) return v_u_31998.We[0];
  }, this.Mw = function () {
    if (0 !== v_u_31998.We.length) return v_u_31998.We[v_u_31998.We.length - 1];
  }, this.Oc = function (v_i_32002) {
    if (0 === v_u_31998.We.length) return {
      rw: v_u_31998.ou,
      aw: v_u_31998.ou + v_u_31998.Le,
      G0: v_u_31998.G0,
      cr: v_u_31998
    };
    let v_e_32003 = v_u_31998,
      v_n_32004 = v_u_31998,
      v_r_32005 = null;
    var v_s_32006,
      v_a_32007,
      v_o_32008 = v_u_31998.We;
    for (let v_t_32009 = 0; v_t_32009 < v_o_32008.length; ++v_t_32009) if ((v_s_32006 = v_o_32008[v_t_32009]).Fi !== scope.v_c0_27703) {
      if (v_s_32006.od >= v_i_32002) {
        v_r_32005 = v_e_32003.ou === v_s_32006.ou && v_e_32003.Le === v_s_32006.Le ? (v_s_32006.Fi !== scope.v_jn_27680 && v_s_32006.Fi !== scope.v_Wn_27684 && v_s_32006.Fi !== scope.v_e0_27695 || (v_n_32004 = v_s_32006), {
          rw: v_s_32006.ou,
          aw: v_s_32006.ou + v_s_32006.Le,
          G0: v_s_32006.G0,
          cr: v_n_32004
        }) : (v_a_32007 = scope.mathMin(scope.mathMax((v_i_32002 - v_e_32003.od) / (v_s_32006.od - v_e_32003.od), 0), 1), {
          rw: scope.mathRound(1e3 * scope.v_Ee_28084(v_e_32003.ou, v_s_32006.ou, v_a_32007)) / 1e3,
          aw: scope.mathRound(1e3 * scope.v_Ee_28084(v_e_32003.ou + v_e_32003.Le, v_s_32006.ou + v_s_32006.Le, v_a_32007)) / 1e3,
          G0: scope.v_Ee_28084(v_e_32003.G0, v_s_32006.G0, v_a_32007),
          cr: v_n_32004
        });
        break;
      }
      (v_e_32003 = v_s_32006).Fi !== scope.v_jn_27680 && v_s_32006.Fi !== scope.v_Wn_27684 && v_s_32006.Fi !== scope.v_e0_27695 || (v_n_32004 = v_s_32006);
    }
    return v_r_32005;
  }, this.i7 = function (v_i_32010, v_t_32011) {
    var v_e_32012 = scope.mathMax(v_t_32011, this.od);
    let v_n_32013 = 16,
      v_r_32014 = 0,
      v_s_32015 = v_u_31998;
    var v_a_32016,
      v_o_32017 = v_u_31998.We;
    let v_l_32018 = !1;
    for (let v_t_32020 = 0; v_t_32020 < v_o_32017.length; ++v_t_32020) if ((v_a_32016 = v_o_32017[v_t_32020]).Fi !== scope.v_c0_27703) {
      if (!v_l_32018 && v_a_32016.od >= v_e_32012 && (v_c_32019 = scope.mathMin(scope.mathMax((v_e_32012 - v_s_32015.od) / (v_a_32016.od - v_s_32015.od), 0), 1), v_n_32013 = scope.v_Ee_28084(v_s_32015.ou, v_a_32016.ou, v_c_32019), v_r_32014 = scope.v_Ee_28084(v_s_32015.ou + v_s_32015.Le, v_a_32016.ou + v_a_32016.Le, v_c_32019), v_l_32018 = !0), v_l_32018) {
        if (v_a_32016.od >= v_i_32010) {
          var v_c_32019 = scope.mathMin(scope.mathMax((v_i_32010 - v_s_32015.od) / (v_a_32016.od - v_s_32015.od), 0), 1);
          v_n_32013 = scope.mathMin(v_n_32013, scope.v_Ee_28084(v_s_32015.ou, v_a_32016.ou, v_c_32019)), v_r_32014 = scope.mathMax(v_r_32014, scope.v_Ee_28084(v_s_32015.ou + v_s_32015.Le, v_a_32016.ou + v_a_32016.Le, v_c_32019));
          break;
        }
        v_n_32013 = scope.mathMin(v_n_32013, v_a_32016.ou), v_r_32014 = scope.mathMax(v_r_32014, v_a_32016.ou + v_a_32016.Le);
      }
      v_s_32015 = v_a_32016;
    }
    v_n_32013 = scope.mathRound(v_n_32013), v_r_32014 = scope.mathRound(v_r_32014);
    for (let v_t_32021 = 0; v_t_32021 < 16; v_t_32021++) this.n7[v_t_32021] = v_n_32013 <= v_t_32021 && v_r_32014 > v_t_32021;
  };
}

function v__r_27934(v_t_32022, v_i_32023) {
  this.TL = v_t_32022, this.tp = v_i_32023;
}

function v_hr_27935() {
  this.b5 = "", this.k5 = "1", this.T5 = "";
}

function v_dr_27936() {
  this.Zu = {
    lf: "",
    C5: "",
    y5: "",
    ee: "",
    x5: "",
    I5: 0,
    A5: null,
    te: 0,
    b5: "",
    k5: "1",
    T5: "",
    Gw: "",
    _w: 0,
    Ow: "",
    jw: "",
    Hw: "",
    hw: !1,
    Ww: "",
    Nw: "",
    Uw: "",
    ey: -1,
    Kw: 768,
    Wg: 0,
    kr: 0,
    nw: 0,
    fw: 0,
    ow: 0,
    yi: 0,
    ew: {
      Ra: 0,
      Da: 0,
      iw: 0,
      Ga: 0,
      ja: 0
    },
    Bw: !1,
    Xw: !1,
    zw: !0,
    uw: [0],
    Yw: [0, 0],
    pI: "",
    sw: Array.from({
      length: 120
    }, () => 0),
    c4: !1
  }, this.yc = {
    $g: [],
    Zw: {},
    qw: [],
    IL: new Map()
  }, this.$w = {}, this.Fw = null, this.lb = null;
}

function v_wr_27938() {
  this.Fi = scope.v_An_27660, this.mp = 0, this.kp = 0, this.bp = 1, this.Xg = 0, this.ou = 0, this.Le = 0, this.G0 = 0, this.Lw = 0, this.Jg = 0, this.Yg = 0, this.Sp = 0, this.We = [], this.Rw = 1, this.CL = 0, this.dw = scope.v_An_27660, this.Vg = !1, this.gw = !1, this.xk = 0, this.xp = 0;
}

function v_gr_27939(v_t_32300, v_i_32301, v_e_32302) {
  let v_n_32303 = 0,
    v_r_32304 = 0,
    v_s_32305 = 1,
    v_a_32306 = scope.mathMax(v_i_32301, 0);
  return scope.v_De_28096(v_t_32300.$w.up, function (v_t_32307) {
    if (v_t_32307.mp > v_a_32306) return 1;
    v_n_32303 += (v_t_32307.mp - v_r_32304) * scope.v_de_27728 * v_s_32305, v_s_32305 = v_t_32307.Jg, v_r_32304 = v_t_32307.mp;
  }), v_n_32303 += (v_i_32301 - v_r_32304) * scope.v_de_27728 * v_s_32305, scope.mathFloor(v_n_32303 + v_e_32302);
}

function v_mr_27940(v_t_32308, v_i_32309) {
  let v_e_32310 = 1;
  return scope.v_De_28096(v_t_32308.$w.up, function (v_t_32311) {
    if (v_t_32311.mp > v_i_32309) return 1;
    v_e_32310 = v_t_32311.Jg;
  }), v_e_32310;
}

function v_pr_27941(v_t_32312) {
  let v_i_32313 = scope.mathFloor(1024 * v_t_32312),
    v_e_32314 = 0,
    v_n_32315;
  return 0 == v_i_32313 ? [0, 4] : (1 == (v_n_32315 = 1024 / (v_e_32314 = function (v_t_32316, v_i_32317) {
    let v_e_32318;
    v_t_32316 < v_i_32317 && (v_e_32318 = v_i_32317, v_i_32317 = v_t_32316, v_t_32316 = v_e_32318);
    for (; v_t_32316 % v_i_32317 != 0;) v_e_32318 = v_i_32317, v_i_32317 = v_t_32316 % v_i_32317, v_t_32316 = v_e_32318;
    return v_i_32317;
  }(v_i_32313, 1024))) ? v_e_32314 /= 4 : 2 == v_n_32315 && (v_e_32314 /= 2), [scope.mathFloor(v_i_32313 / v_e_32314), scope.mathFloor(1024 / v_e_32314)]);
}

function v_yr_27944(v_t_32668, v_i_32669) {
  this.Fi = scope.v_yr_27944, this.ee = v_t_32668, this.te = v_i_32669;
}

function v_Sr_27945(v_t_32670) {
  this.Fi = scope.v_Sr_27945, this.p9 = v_t_32670;
}

function v_Ar_27946() {
  this.Fi = scope.v_Ar_27946, this.V2 = [];
}

function v_xr_27947() {
  this.Ae = "", this.AP = 0, this.lf = "Untitled", this.bP = 0, this.zb = 0, this.TP = 1, this.SP = 0, this.EP = 0, this.LP = 0, this.yP = [], this.hI = [null, null, null], this.CP = {
    DP: null,
    Hs: !1,
    RP: {
      ue: 0,
      IP: 0,
      MP: 0,
      FP: 0,
      PP: 0
    },
    Ar: scope.v_B0_27742
  }, this.kI = !1, this.bI = !1;
}

function v_Cr_27948() {
  this.vn = null, this.U0 = 0, this.O0 = [], this.J0 = null, this.Qu = !1, this.V0 = 0;
}

function v_Ir_27950() {
  this.C0 = "", this.Xm = "", this.ct = [], this.tf = [], this.Nm = ":sys_none", this.Hm = 1, this.Wm = "", this.gi = void 0, this.vb = !1, this.ub = !1;
}

function v_Lr_27953() {
  var v_t_32873 = scope.v_be_27857.Np.find(v_t_32877 => v_t_32877.C0 === scope.handshake.On.im);
  if (!v_t_32873) return null;
  var v_i_32874 = scope.handshake.On.nm[v_t_32873.C0];
  let v_e_32875;
  -1 === (v_e_32875 = v_i_32874 ? scope.v_be_27857.jp.ik(v_i_32874.En) : scope.v_be_27857.jp.ik(v_t_32873.Nm)) && (v_e_32875 = scope.v_be_27857.jp.ik(":sys_none"));
  var v_n_32876 = scope.v_Er_27955(v_t_32873, scope.v_be_27857.jp[v_e_32875], v_i_32874 ? v_i_32874.jm : 0);
  return {
    Q1: v_t_32873,
    lu: v_i_32874,
    Ar: scope.v_be_27857.jp[v_e_32875],
    dC: v_n_32876
  };
}

function v_Er_27955(v_t_32878, v_i_32879, v_e_32880) {
  return void 0 === v_t_32878 ? 0 : void 0 === v_e_32880 || 0 === v_e_32880 ? v_i_32879 ? scope.mathMin(scope.mathMax(v_i_32879.Ym[v_t_32878.C0] || 0, 0), v_t_32878.Hm - 1) : 0 : scope.mathMin(scope.mathMax(v_e_32880 - 1, 0), v_t_32878.Hm - 1);
}

function v_Dr_27956(v_i_32881) {
  var v_t_32882 = scope.v_be_27857.Np.find(v_t_32885 => v_t_32885.C0 === v_i_32881),
    v_e_32883 = scope.handshake.On.nm[v_i_32881];
  let v_n_32884;
  return -1 === (v_n_32884 = v_e_32883 ? scope.v_be_27857.jp.ik(v_e_32883.En) : scope.v_be_27857.jp.ik(v_t_32882.Nm)) && (v_n_32884 = scope.v_be_27857.jp.ik(":sys_none")), scope.v_Er_27955(v_t_32882, scope.v_be_27857.jp[v_n_32884], v_e_32883 ? v_e_32883.jm : 0);
}

function v_Fr_27957() {
  this._v = 0, this.En = "", this.Jm = [], this.Ym = {}, this.Vm = scope.v_gt_27748, this.zm = [], this.ct = "", this.if = "", this.Om = null, this.Km = null, this.h7 = scope.v_B0_27742, this.Um = !1, this.Zm = [], this.qm = [], this.$m = [], this.Qm = [];
}

function v_Gr_27960() {
  this.ki = null, this.lf = "";
}

function v_Ur_27961() {
  this.di = [], this.hi = !1, this.vi = [], this.gi = null;
}

function v_Vr_27967(v_t_33162, v_i_33163, v_e_33164, v_n_33165, v_r_33166, v_s_33167, v_a_33168, v_o_33169) {
  this.fI = v_t_33162, this.lI = v_i_33163, this.SI = v_e_33164, this.AI = v_n_33165, this.xI = v_r_33166, this.CI = v_s_33167, this.TI = v_a_33168, this.N0 = v_o_33169;
}

function v_zr_27970() {
  this.Sr = 0, this.ni = !1, this.R4 = !1, this.B4 = !1, this.M4 = 0, this.P4 = 0, this.D4 = "", this.G4 = !1;
}

function v_Kr_27971() {
  this.Ae = "", this.xf = null, this.If = !1, this.yf = !1, this.Cf = !1, this.Af = !1, this.Tf = !1, this.Lf = !1, this.Ef = [], this.Ff = "", this.Bf = !1, this.Mf = [], this.Rf = null, this.Pf = [], this.Df = [];
}

function v_Yr_27972() {
  this.Gf = {}, this.jf = {}, this.Nf = [];
}

function v_qr_27973() {
  this.Hf = [], this.Uf = [], this.Vf = [], this.Of = [], this.Jf = [], this.Wf = "", this.Kf = "", this.zf = "", this.Xf = "", this.Zf = "";
}

function v_hs_27990() {
  this.l7 = {
    c7: 0,
    u7: 0
  }, this.Ra = {
    Mb: 0,
    Mb: 0,
    Xb: 0,
    Xb: 0,
    Kb: 0,
    Kb: 0,
    qb: 0,
    qb: 0,
    Yb: 0,
    Yb: 0,
    Zb: 0,
    Zb: 0,
    $b: 0,
    $b: 0,
    Pb: 0,
    Pb: 0
  }, this.Fb = {
    hP: 0,
    dP: 0,
    Db: 0,
    r7: 0,
    Qb: 0
  }, this.Da = {
    v7: 0,
    d7: 0,
    g7: 0,
    w7: 0,
    Le: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }, this.Hb = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.Ub = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.Vb = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.jb = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.t7 = {
    Db: 0,
    e7: 0,
    Qb: 0
  }, this.Ob = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.Jb = {
    Mb: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Pb: 0
  }, this.zb = {
    Wb: 0,
    o7: 0
  }, this.ja = {
    Nb: 0,
    a7: 0,
    Xb: 0,
    Kb: 0,
    qb: 0,
    Yb: 0,
    Zb: 0,
    $b: 0,
    Le: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    jI: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
}

function v_ds_27991(v_t_33375, v_i_33376, v_e_33377) {
  this.C2 = new scope.v_vs_27992(v_t_33375, v_i_33376, v_e_33377), this.C2.A2 = !0, this.C2.T2 = v_i_33378 => {
    scope.hostBridge._2(this.C2.L2, v_t_33379 => v_i_33378(v_t_33379), v_t_33380 => v_i_33378(null));
  }, this.C2.E2 = (v_t_33381, v_i_33382, v_e_33383) => {
    scope.hostBridge.xl(this.C2.L2, v_t_33381, v_i_33382, v_t_33384 => v_e_33383(v_t_33384), v_t_33385 => v_e_33383(null));
  };
}

function v_vs_27992(v_t_33386, v_i_33387, v_e_33388) {
  this.L2 = v_t_33386, this.yc = new Uint8Array(0), this.B2 = ("object" == typeof v_i_33387 ? v_i_33387 : void 0) || {}, this.M2 = !1, this.R2 = !1, this.P2 = v_e_33388 || 0, this.A2 = !1, this.T2 = void 0, this.E2 = void 0;
}

function v_ws_27993(v_t_33389, v_i_33390) {
  this.ct = v_t_33389.toString() || "", this.Fi = v_i_33390 || 1;
}

function v_gs_27994(v_t_33391, v_i_33392) {
  this.D2 = v_t_33391 || [], this.G2 = [], this.j2 = v_i_33392 || [];
}

function v_ms_27995() {
  this.N2 = {};
}

function v_ps_27996(v_i_33393, v_t_33394) {
  this.H2 = v_t_33394, this.U2 = 0, this.V2 = Array.from({
    length: v_t_33394
  }, v_t_33395 => new v_i_33393());
}

function v_ks_27997(v_t_33396, v_i_33397) {
  this.Cr = 0, this.O2 = 0, this.J2 = 0, this.Ii = 0, this.W2 = 0, this.K2 = v_t_33396, this.z2 = v_i_33397, this.lr = !1;
}

function v_bs_27998() {
  this.R7 = ugSerialCreate(), this.L7 = !1;
}

function v_ys_27999(v_t_33398, v_i_33399, v_e_33400) {
  this.M7 = new scope.v_bs_27998(), this.P7 = v_t_33398, this.qf = v_i_33399, this.L9 = null, this.B7 = v_e_33400, this.G7 = [], this.M9 = 224, this.P9 = 208, this.D9 = !0, this.B9 = 1;
}

function v_Ss_28000(v_t_33607) {
  this.Z7 = new scope.v_ys_27999(v_t_33607, {
    N7: 115200,
    H7: 8,
    U7: 0,
    j7: 0,
    J7: !1
  }, function (v_i_33609) {
    if (1 === v_i_33609[0]) {
      v_e_33608.ER && (v_e_33608.DR = v_e_33608.FR, v_e_33608.FR = performance.now(), v_e_33608.PR = v_e_33608.FR - v_e_33608.DR, 0 < v_e_33608.DR) && (v_e_33608.RR = scope.mathMax(v_e_33608.RR, v_e_33608.PR));
      for (let v_t_33610 = 0; v_t_33610 < 32; ++v_t_33610) v_e_33608.Q7[v_t_33610] = v_i_33609[v_t_33610 + 2];
    }
  }), this.Z7.G9(255, 253, !1), this.Q7 = Array.from({
    length: 38
  }).fill(0), this.t9 = 191, this.e9 = new Uint8Array(96), this.i9 = !1, this.e9[0] = 2, this.e9[2] = this.t9, this.ER = !1, this.DR = 0, this.FR = 0, this.PR = 0, this.RR = 0;
  let v_e_33608 = this;
}

function v_As_28001(v_t_33623) {
  this.Z7 = new scope.v_ys_27999(v_t_33623, {
    N7: 115200,
    H7: 8,
    U7: 0,
    j7: 0,
    J7: !1
  }, function (v_t_33625) {
    1 === v_t_33625[0] && (v_i_33624.c9[0] = 2 & v_t_33625[3] ? 200 : 0, v_i_33624.c9[1] = 16 & v_t_33625[3] ? 200 : 0, v_i_33624.c9[2] = 4 & v_t_33625[3] ? 200 : 0, v_i_33624.c9[3] = 32 & v_t_33625[3] ? 200 : 0, v_i_33624.c9[4] = 8 & v_t_33625[3] ? 200 : 0, v_i_33624.c9[5] = 64 & v_t_33625[3] ? 200 : 0);
  }), this.Z7.G9(null, null, !1), this.c9 = Array.from({
    length: 6
  }).fill(0), this.u9 = 95, this.f9 = new Uint8Array(21), this.i9 = !1, this.f9[0] = 2, this.f9[2] = this.u9;
  let v_i_33624 = this;
}

function v_xs_28002(v_t_33626) {
  this.M7 = new scope.v_bs_27998(), this.P7 = v_t_33626, this.wS = null;
}

function v_Cs_28003(v_t_33655, v_i_33656) {
  this.Z7 = new scope.v_ys_27999(v_t_33655, {
    N7: v_i_33656 ? 115200 : 38400,
    H7: 8,
    U7: 0,
    j7: 0,
    J7: !1
  }, v_t_33657 => {});
}

function v_Rs_28007(v_t_33712, v_i_33713, v_e_33714, v_n_33715) {
  this.M7 = new scope.v_Cs_28003(v_t_33712, v_i_33713), this.K9 = scope.v_Rs_28007.q9(v_e_33714), this.Y9 = scope.v_Rs_28007.q9(v_n_33715), this.Z9 = void 0, this.GS = void 0, this.US = scope.v_Ps_28006, this.xC = !1, this.NS = null;
}

function v_Ls_28008() {
  this.Z9 = void 0, this.ty = [new Uint8Array([144, 0, 0, 0, 0, 0, 0, 0, 1, 0]), new Uint8Array([144, 0, 0, 0, 0, 0, 0, 0, 1, 1]), new Uint8Array([144, 0, 0, 0, 0, 0, 0, 0, 1, 2]), new Uint8Array([144, 0, 0, 0, 0, 0, 0, 0, 1, 3])], this.US = scope.v_Ps_28006;
}

function v_Bs_28013(v_t_33749, v_i_33750, v_e_33751) {
  this.Yy = v_t_33749, this.P7 = v_i_33750, this.Zy = null, this.qy = v_e_33751, this.nx = 0;
}

function v_Gs_28015() {
  this.nx = 0, this.yx = 0, this.Mx = !1, this.ng = null, this.Jx = "", this.$P = !1;
}

function v_Us_28016() {
  this.nx = 0, this.om = "", this.lm = 0, this.CC = 0, this.ox = "", this.lx = 0, this.TC = "", this.PC = "", this.RC = "", this.MC = 0, this.ux = "", this.QP = !1;
}

function v_Hs_28017(v_t_33837, v_i_33838, v_e_33839) {
  this.Yy = v_t_33837, this.P7 = v_i_33838, this.IC = v_e_33839, this.LC = null, this.nx = 0, this.zS = null, this.Nx = null, this.tx = !1, this.Px = 0, this.Ox = [], this.Ix = new Map(), this.ix = new Map(), this.EC = void 0, this.DC = -1, this.FC = void 0, this.nP = -1, this.rP = void 0, this.aC = 0, this.oC = 0, this.BC = [], this.GC = 0, this._x = 100, this.sP = scope.v__a_28043, this.aP = scope.v_ma_28049, this.o1 = !1, this.RI = 0;
}

function v_Ca_28057(v_t_33933, v_i_33934, v_e_33935) {
  this.hT = v_t_33933, this.dT = v_i_33934, this.vT = 0, this.E3 = 0, this.hC = "", this.eT = 0, this.jP = !1, this.wT = [], this.Yu = null, this.A0 = v_e_33935, this.gT = void 0;
}

function v_Ta_28058(v_t_33936, v_i_33937) {
  this.hT = v_t_33936, this.dT = v_i_33937, this.ed = null, this.gi = null, this.eT = 0, this.mT = 0, this.vT = 0, this.th = null, this.mR = !1, this.nR = !1, scope.v_Ia_28059.pT(this, v_i_33937);
}

function v_Ia_28059(v_t_33938, v_i_33939, v_e_33940) {
  this.VI = !1, this.kT = null, this.bT = null, this.WI(), this.AT = v_t_33938, this.YC = v_i_33939, this.JP = v_e_33940, this.PT = [], this.$C = void 0, this.RT = !1, this.cP = !1, this.L7 = !this.VI, this.MT = new Map(), this.IT = 0, this.LT = !1, this.ET = [];
  let v_n_33941 = scope.v_uo_28102(() => {
    v_n_33941 = 0, this.aS();
  }, 2e3);
  this.PT.push(v_t_33942 => {
    v_n_33941 && clearTimeout(v_n_33941), v_n_33941 = 0;
  }), this.VI || scope.v_Fe_28101(() => {
    for (var v_t_33943 of this.PT) v_t_33943(!0);
    this.PT = [];
  });
}

function v_Pa_28060() {
  this.DT = null, this.FT = 0, this.BT = 0, this.GT = new scope.v_Po_28121(new Uint8Array(255)), this.G7 = [], this.EC = void 0, this.bL = -1, this.yL = !1, this.SL = 0;
}

function v_Ra_28061(v_t_33944) {
  return v_t_33944.toLocaleLowerCase("en-US");
}

function v_La_28062(v_t_33945) {
  return "1" === (v_t_33945 = scope.v_Ra_28061(v_t_33945)) || "true" === v_t_33945 || "y" === v_t_33945 || "yes" === v_t_33945 || "enable" === v_t_33945 || "enabled" === v_t_33945;
}

function v_Ma_28063(v_t_33946) {
  return !!parseInt(v_t_33946, 10);
}

function v_Pe_28064(v_t_33947) {
  v_t_33947 = parseInt(v_t_33947, 10);
  return Number.isSafeInteger(v_t_33947) ? v_t_33947 : 0;
}

function v_Ea_28065(v_t_33948) {
  v_t_33948 = parseInt(v_t_33948, 16);
  return Number.isSafeInteger(v_t_33948) ? v_t_33948 : 0;
}

function v_Da_28067(v_t_34093, v_i_34094) {
  return v_t_34093.indexOf(v_i_34094) === v_t_34093.length - v_i_34094.length;
}

function v_Fa_28068(v_t_34095) {
  v_t_34095 = (v_t_34095 = (v_t_34095 = v_t_34095).split("/"))[v_t_34095.length - 1].split(".");
  return 1 === v_t_34095.length ? "" : "." + v_t_34095[v_t_34095.length - 1];
}

function v_Ba_28069(v_t_34096, v_i_34097) {
  let v_e_34098 = v_t_34096;
  for (var v_n_34099 of v_i_34097) v_e_34098 = v_e_34098.replaceAll("{" + v_n_34099[0] + "}", v_n_34099[1]);
  return v_e_34098;
}

function v_Na_28070(v_s_34100) {
  if (v_s_34100) {
    let v_i_34101 = 250,
      v_e_34102 = 0,
      v_n_34103 = 0,
      v_r_34104;
    for (let v_t_34105 = 0; v_t_34105 < v_s_34100.byteLength; ++v_t_34105) v_r_34104 = v_n_34103, v_n_34103 = v_s_34100[v_t_34105], v_t_34105 % 5 == 0 ? v_s_34100[v_t_34105] ^= 105 : v_t_34105 % 19 == 0 ? v_s_34100[v_t_34105] ^= 209 : v_t_34105 % 83 == 0 ? v_s_34100[v_t_34105] ^= 72 : v_t_34105 % 97 == 0 ? v_s_34100[v_t_34105] ^= 2 : v_s_34100[v_t_34105] ^= v_i_34101, v_s_34100[v_t_34105] ^= 117 & v_r_34104 | 72 & v_e_34102, (v_i_34101 -= v_t_34105 % 3) < 0 && (v_i_34101 = 255), v_e_34102 = v_s_34100[v_t_34105];
  }
}

function v_Ga_28071(v_e_34106) {
  if (void 0 !== v_e_34106) {
    if (null === v_e_34106) return null;
    let v_i_34108 = new v_e_34106.constructor();
    var v_n_34107 = Object.keys(v_e_34106);
    if ("string" == typeof v_e_34106 || "boolean" == typeof v_e_34106 || "number" == typeof v_e_34106) v_i_34108 = v_e_34106;else if (0 < v_n_34107.length) for (let v_t_34109 = 0; v_t_34109 < v_n_34107.length; ++v_t_34109) v_i_34108[v_n_34107[v_t_34109]] = scope.v_Ga_28071(v_e_34106[v_n_34107[v_t_34109]]);else Array.isArray(v_e_34106) || (v_i_34108 = v_e_34106);
    return v_i_34108;
  }
}

function v_Ua_28072(v_t_34110, v_i_34111) {
  this.p8 = v_t_34110, this.c5 = v_i_34111, this.k8 = 0, this.b8 = [], this.S8 = [], this.y8 = [[0, 0, v_t_34110, v_i_34111]];
}

function v_Ha_28073(v_t_34112) {
  this._points = v_t_34112;
  let v_s_34113 = this,
    v_r_34114 = null;
  function v_a_34115(v_i_34116) {
    let v_e_34117 = v_s_34113.points,
      v_n_34118;
    for (; 1 < v_e_34117.length;) {
      v_n_34118 = [];
      for (let v_t_34119 = 0; v_t_34119 < v_e_34117.length - 1; ++v_t_34119) v_n_34118.push([scope.v_Ee_28084(v_e_34117[v_t_34119][0], v_e_34117[v_t_34119 + 1][0], v_i_34116), scope.v_Ee_28084(v_e_34117[v_t_34119][1], v_e_34117[v_t_34119 + 1][1], v_i_34116)]);
      v_e_34117 = v_n_34118;
    }
    return [v_e_34117[0][0], v_e_34117[0][1]];
  }
  this.at = v_a_34115, this.at_eq = function (v_i_34120) {
    let v_e_34121 = 0,
      v_n_34122 = v_s_34113.points[0],
      v_r_34123;
    for (let v_t_34124 = 0; v_t_34124 <= 1 && (v_n_34122 = v_a_34115(v_t_34124), !(v_r_34123 && (v_e_34121 += scope.mathSqrt((v_n_34122[0] - v_r_34123[0]) * (v_n_34122[0] - v_r_34123[0]) + (v_n_34122[1] - v_r_34123[1]) * (v_n_34122[1] - v_r_34123[1]))) >= v_i_34120)); v_t_34124 += .001) v_r_34123 = v_n_34122;
    return v_n_34122;
  }, Object.defineProperties(this, {
    points: {
      get: () => this._points
    },
    length: {
      get: () => {
        if (null === v_r_34114) {
          let v_i_34125 = 0,
            v_e_34126,
            v_n_34127;
          for (let v_t_34128 = 0; v_t_34128 <= 1; v_t_34128 += .001) v_e_34126 = v_a_34115(v_t_34128), v_n_34127 && (v_i_34125 += scope.mathSqrt((v_e_34126[0] - v_n_34127[0]) * (v_e_34126[0] - v_n_34127[0]) + (v_e_34126[1] - v_n_34127[1]) * (v_e_34126[1] - v_n_34127[1]))), v_n_34127 = v_e_34126;
          v_r_34114 = v_i_34125;
        }
        return v_r_34114;
      }
    }
  });
}

function v_Ja_28074(v_t_34129) {
  return new scope.v_Ha_28073(v_t_34129);
}

function v_ja_28075(v_t_34130, v_i_34131, v_e_34132, v_n_34133) {
  this.Iv = 0, this.Av = 0, this.Tv = 0, this.Lv = 0, this.Rv = 0, this.Ev = 0, this.Bv = 0, this.Mv = 0, this.Fv = 0, this.Dv = 0, this.Pv = Array.from({
    length: 11
  }, () => 0), this.Gv(v_t_34130, v_i_34131, v_e_34132, v_n_34133), this.Nv(v_t_34130, v_i_34131, v_e_34132, v_n_34133), this.jv(v_i_34131, v_n_34133), this.Hv();
}

function v_Le_28076(v_t_34134) {
  scope.v_Me_28078({
    V2: v_t_34134,
    Ee: null,
    Hc: 0
  });
}

function v_Oa_28077(v_t_34135, v_i_34136) {
  v_t_34135("max", v_i_34136.length), scope.v_Me_28078({
    V2: v_i_34136,
    Ee: v_t_34135,
    Hc: 0
  });
}

function v_Me_28078(v_t_34137) {
  let v_i_34138 = v_t_34137.V2.shift();
  v_i_34138 && scope.v_Fe_28101(function () {
    v_i_34138(v_t_34137), ++v_t_34137.Hc, v_t_34137.Ee && v_t_34137.Ee("upd", v_t_34137.Hc);
  });
}

function v_Va_28079(v_n_34139, v_r_34140) {
  if (v_n_34139) for (let v_e_34141 = v_r_34140; v_e_34141 < v_n_34139.byteLength + v_r_34140; ++v_e_34141) {
    let v_t_34142 = (31 & v_e_34141) << 1,
      v_i_34143;
    0 == v_t_34142 ? v_i_34143 = 168 : 1 == v_t_34142 ? v_i_34143 = 220 : 2 == v_t_34142 ? v_i_34143 = 89 : 3 == v_t_34142 ? v_i_34143 = 53 : 4 == v_t_34142 ? v_i_34143 = 219 : 5 == v_t_34142 ? v_i_34143 = 151 : 6 == v_t_34142 ? v_i_34143 = 160 : 7 == v_t_34142 ? v_i_34143 = 26 : 8 == v_t_34142 ? v_i_34143 = 53 : 9 == v_t_34142 ? v_i_34143 = 145 : 10 == v_t_34142 ? v_i_34143 = 237 : 11 == v_t_34142 ? v_i_34143 = 161 : 12 == v_t_34142 ? v_i_34143 = 148 : 13 == v_t_34142 ? v_i_34143 = 35 : 14 == v_t_34142 ? v_i_34143 = 123 : 15 == v_t_34142 ? v_i_34143 = 1 : 16 == v_t_34142 ? v_i_34143 = 157 : 17 == v_t_34142 ? v_i_34143 = 54 : 18 == v_t_34142 ? v_i_34143 = 121 : 19 == v_t_34142 ? v_i_34143 = 110 : 20 == v_t_34142 ? v_i_34143 = 229 : 21 == v_t_34142 ? v_i_34143 = 160 : 22 == v_t_34142 ? v_i_34143 = 93 : 23 == v_t_34142 ? v_i_34143 = 18 : 24 == v_t_34142 ? v_i_34143 = 129 : 25 == v_t_34142 ? v_i_34143 = 35 : 26 == v_t_34142 ? v_i_34143 = 179 : 27 == v_t_34142 ? v_i_34143 = 28 : 28 == v_t_34142 ? v_i_34143 = 127 : 29 == v_t_34142 ? v_i_34143 = 161 : 30 == v_t_34142 ? v_i_34143 = 220 : 31 == v_t_34142 ? v_i_34143 = 148 : 32 == v_t_34142 ? v_i_34143 = 112 : 33 == v_t_34142 ? v_i_34143 = 95 : 34 == v_t_34142 ? v_i_34143 = 35 : 35 == v_t_34142 ? v_i_34143 = 237 : 36 == v_t_34142 ? v_i_34143 = 192 : 37 == v_t_34142 ? v_i_34143 = 127 : 38 == v_t_34142 ? v_i_34143 = 26 : 39 == v_t_34142 ? v_i_34143 = 71 : 40 == v_t_34142 ? v_i_34143 = 50 : 41 == v_t_34142 ? v_i_34143 = 224 : 42 == v_t_34142 ? v_i_34143 = 1 : 43 == v_t_34142 ? v_i_34143 = 60 : 44 == v_t_34142 ? v_i_34143 = 41 : 45 == v_t_34142 ? v_i_34143 = 28 : 46 == v_t_34142 ? v_i_34143 = 247 : 47 == v_t_34142 ? v_i_34143 = 220 : 48 == v_t_34142 ? v_i_34143 = 71 : 49 == v_t_34142 ? v_i_34143 = 208 : 50 == v_t_34142 ? v_i_34143 = 54 : 51 == v_t_34142 || 52 == v_t_34142 ? v_i_34143 = 75 : 53 == v_t_34142 ? v_i_34143 = 179 : 54 == v_t_34142 ? v_i_34143 = 151 : 55 == v_t_34142 ? v_i_34143 = 193 : 56 == v_t_34142 ? v_i_34143 = 236 : 57 == v_t_34142 ? v_i_34143 = 1 : 58 == v_t_34142 ? v_i_34143 = 95 : 59 == v_t_34142 ? v_i_34143 = 121 : 60 == v_t_34142 ? v_i_34143 = 18 : 61 == v_t_34142 ? v_i_34143 = 121 : 62 == v_t_34142 ? v_i_34143 = 245 : 63 == v_t_34142 && (v_i_34143 = 95), scope.v_so_28095(v_n_34139, v_e_34141 - v_r_34140, v_i_34143);
  }
}

function v_Wa_28080(v_n_34144, v_r_34145) {
  if (v_n_34144) for (let v_e_34146 = v_r_34145; v_e_34146 < v_n_34144.byteLength + v_r_34145; ++v_e_34146) {
    let v_t_34147 = (31 & v_e_34146) << 1,
      v_i_34148;
    0 == v_t_34147 ? v_i_34148 = 252 : 1 == v_t_34147 || 2 == v_t_34147 ? v_i_34148 = 113 : 3 == v_t_34147 ? v_i_34148 = 161 : 4 == v_t_34147 ? v_i_34148 = 156 : 5 == v_t_34147 ? v_i_34148 = 129 : 6 == v_t_34147 ? v_i_34148 = 155 : 7 == v_t_34147 ? v_i_34148 = 251 : 8 == v_t_34147 ? v_i_34148 = 255 : 9 == v_t_34147 ? v_i_34148 = 156 : 10 == v_t_34147 ? v_i_34148 = 249 : 11 == v_t_34147 ? v_i_34148 = 43 : 12 == v_t_34147 ? v_i_34148 = 162 : 13 == v_t_34147 ? v_i_34148 = 156 : 14 == v_t_34147 ? v_i_34148 = 245 : 15 == v_t_34147 ? v_i_34148 = 100 : 16 == v_t_34147 ? v_i_34148 = 242 : 17 == v_t_34147 || 18 == v_t_34147 ? v_i_34148 = 193 : 19 == v_t_34147 ? v_i_34148 = 117 : 20 == v_t_34147 ? v_i_34148 = 75 : 21 == v_t_34147 ? v_i_34148 = 117 : 22 == v_t_34147 ? v_i_34148 = 10 : 23 == v_t_34147 ? v_i_34148 = 129 : 24 == v_t_34147 ? v_i_34148 = 214 : 25 == v_t_34147 ? v_i_34148 = 113 : 26 == v_t_34147 ? v_i_34148 = 144 : 27 == v_t_34147 ? v_i_34148 = 179 : 28 == v_t_34147 ? v_i_34148 = 43 : 29 == v_t_34147 ? v_i_34148 = 100 : 30 == v_t_34147 ? v_i_34148 = 144 : 31 == v_t_34147 ? v_i_34148 = 100 : 32 == v_t_34147 ? v_i_34148 = 203 : 33 == v_t_34147 ? v_i_34148 = 88 : 34 == v_t_34147 ? v_i_34148 = 251 : 35 == v_t_34147 ? v_i_34148 = 161 : 36 == v_t_34147 ? v_i_34148 = 210 : 37 == v_t_34147 ? v_i_34148 = 245 : 38 == v_t_34147 ? v_i_34148 = 71 : 39 == v_t_34147 ? v_i_34148 = 144 : 40 == v_t_34147 ? v_i_34148 = 100 : 41 == v_t_34147 ? v_i_34148 = 249 : 42 == v_t_34147 ? v_i_34148 = 247 : 43 == v_t_34147 ? v_i_34148 = 255 : 44 == v_t_34147 ? v_i_34148 = 124 : 45 == v_t_34147 ? v_i_34148 = 245 : 46 == v_t_34147 ? v_i_34148 = 53 : 47 == v_t_34147 ? v_i_34148 = 10 : 48 == v_t_34147 ? v_i_34148 = 14 : 49 == v_t_34147 ? v_i_34148 = 155 : 50 == v_t_34147 || 51 == v_t_34147 ? v_i_34148 = 113 : 52 == v_t_34147 ? v_i_34148 = 152 : 53 == v_t_34147 ? v_i_34148 = 255 : 54 == v_t_34147 ? v_i_34148 = 245 : 55 == v_t_34147 ? v_i_34148 = 179 : 56 == v_t_34147 ? v_i_34148 = 148 : 57 == v_t_34147 ? v_i_34148 = 225 : 58 == v_t_34147 ? v_i_34148 = 178 : 59 == v_t_34147 ? v_i_34148 = 251 : 60 == v_t_34147 ? v_i_34148 = 179 : 61 == v_t_34147 ? v_i_34148 = 71 : 62 == v_t_34147 ? v_i_34148 = 154 : 63 == v_t_34147 && (v_i_34148 = 242), scope.v_so_28095(v_n_34144, v_e_34146 - v_r_34145, v_i_34148);
  }
}

function v_Xa_28081(v_t_34149, v_i_34150, v_e_34151) {
  return (v_e_34151.repeat(v_i_34150) + v_t_34149).slice(-v_i_34150);
}

function v_za_28082(v_t_34152) {
  return "string" == typeof v_t_34152 ? v_t_34152 : "";
}

function v_Ka_28083(v_i_34153) {
  for (let v_t_34154 = 0; v_t_34154 < 32; ++v_t_34154) if (v_i_34153 & 1 << v_t_34154) return v_t_34154;
  return 0;
}

function v_Ee_28084(v_t_34155, v_i_34156, v_e_34157) {
  return v_t_34155 * (1 - v_e_34157) + v_i_34156 * v_e_34157;
}

function v_Ya_28085(v_t_34158, v_i_34159, v_e_34160) {
  return (v_e_34160 - v_t_34158) / (v_i_34159 - v_t_34158);
}

function v_qa_28086(v_t_34161, v_i_34162) {
  return v_t_34161 - scope.mathFloor(v_t_34161 / v_i_34162) * v_i_34162;
}

function v_$a_28088(v_t_34268, v_i_34269) {
  return v_t_34268 >>> v_i_34269 | (v_t_34268 & -1 >>> 32 - v_i_34269) << 32 - v_i_34269;
}

function v_Qa_28089(v_t_34270, v_i_34271, v_e_34272) {
  return v_t_34270 < v_i_34271 ? v_i_34271 : v_e_34272 < v_t_34270 ? v_e_34272 : v_t_34270;
}

function v_to_28090(v_t_34273, v_i_34274, v_e_34275, v_n_34276, v_r_34277) {
  return v_t_34273[v_i_34274] = v_e_34275, v_t_34273[v_i_34274 + 1] = v_n_34276, v_t_34273[v_i_34274 + 2] = v_r_34277, v_i_34274 + 3;
}

function v_io_28091(v_t_34278, v_i_34279, v_e_34280, v_n_34281) {
  return v_t_34278[v_i_34279] = v_e_34280, v_t_34278[v_i_34279 + 1] = v_n_34281, v_i_34279 + 2;
}

function v_eo_28092(v_t_34282, v_i_34283, v_e_34284, v_n_34285, v_r_34286, v_s_34287, v_a_34288) {
  return v_t_34282[v_i_34283] = v_n_34285 + v_e_34284, v_t_34282[v_i_34283 + 1] = v_r_34286 + v_e_34284, v_t_34282[v_i_34283 + 2] = v_s_34287 + v_e_34284, v_t_34282[v_i_34283 + 3] = v_n_34285 + v_e_34284, v_t_34282[v_i_34283 + 4] = v_s_34287 + v_e_34284, v_t_34282[v_i_34283 + 5] = v_a_34288 + v_e_34284, v_i_34283 + 6;
}

function v_no_28093(v_t_34289, v_i_34290, v_e_34291, v_n_34292) {
  return [v_t_34289 * v_e_34291 - v_i_34290 * v_n_34292, v_t_34289 * v_n_34292 + v_i_34290 * v_e_34291];
}

function v_ro_28094(v_t_34293, v_i_34294, v_e_34295, v_n_34296, v_r_34297, v_s_34298, v_a_34299, v_o_34300) {
  return v_i_34294 = v_t_34293 = [v_t_34293, v_i_34294, 1], [(v_t_34293 = [(v_e_34295 = [v_a_34299, -v_o_34300, v_e_34295 - v_e_34295 * v_a_34299 + v_n_34296 * v_o_34300, v_o_34300, v_a_34299, v_n_34296 - v_e_34295 * v_o_34300 - v_n_34296 * v_a_34299, 0, 0, 1])[0] * v_i_34294[0] + v_e_34295[1] * v_i_34294[1] + v_e_34295[2] * v_i_34294[2], v_e_34295[3] * v_i_34294[0] + v_e_34295[4] * v_i_34294[1] + v_e_34295[5] * v_i_34294[2], v_e_34295[6] * v_i_34294[0] + v_e_34295[7] * v_i_34294[1] + v_e_34295[8] * v_i_34294[2]])[0] + v_r_34297, v_t_34293[1] + v_s_34298];
}

function v_so_28095(v_t_34301, v_i_34302, v_e_34303) {
  v_t_34301[v_i_34302] ^= v_e_34303;
}

function v_De_28096(v_i_34304, v_e_34305, v_n_34306) {
  for (let v_t_34307 = void 0 !== v_n_34306 ? v_n_34306 : 0; v_t_34307 < v_i_34304.length && !v_e_34305(v_i_34304[v_t_34307], v_t_34307); ++v_t_34307);
}

function v_ao_28097(v_t_34308, v_i_34309) {
  let v_e_34310 = 0;
  for (const v_n_34311 in v_t_34308) {
    if (v_i_34309(v_t_34308[v_n_34311], v_n_34311, v_e_34310)) break;
    ++v_e_34310;
  }
}

function v_oo_28098(v_i_34312, v_e_34313, v_n_34314) {
  if (0 === v_i_34312.length) scope.v_Fe_28101(v_n_34314);else {
    let v_t_34315 = v_i_34312.shift();
    scope.v_Fe_28101(function () {
      v_e_34313(function () {
        scope.v_oo_28098(v_i_34312, v_e_34313, v_n_34314);
      }, v_n_34314, v_t_34315);
    });
  }
}

function v_lo_28099(v_t_34316, v_i_34317, v_e_34318) {
  let v_n_34319 = v_t_34316.concat();
  if (0 === v_n_34319.length) scope.v_Fe_28101(v_e_34318);else {
    let v_t_34320 = v_n_34319.shift();
    scope.v_Fe_28101(function () {
      v_i_34317(function () {
        scope.v_oo_28098(v_n_34319, v_i_34317, v_e_34318);
      }, v_e_34318, v_t_34320);
    });
  }
}

function v_co_28100(v_t_34321, v_i_34322, v_e_34323, v_n_34324) {
  scope.v_Fe_28101(v_t_34321 === v_i_34322 ? v_n_34324 : function () {
    v_e_34323(function () {
      scope.v_co_28100(v_t_34321 + 1, v_i_34322, v_e_34323, v_n_34324);
    }, v_n_34324, v_t_34321);
  });
}

function v_Fe_28101(v_t_34325) {
  scope.v_uo_28102(v_t_34325, 0);
}

function v_uo_28102(v_t_34326, v_i_34327) {
  return setTimeout(v_t_34326, v_i_34327);
}

function v_fo_28103(v_i_34328) {
  return new Promise(v_t_34329 => scope.v_uo_28102(v_t_34329, v_i_34328));
}

function v__o_28104(v_t_34330, v_i_34331) {
  let v_e_34332 = new Image();
  v_e_34332.onload = function () {
    v_i_34331(v_e_34332);
  }, v_e_34332.onerror = function () {
    v_i_34331(null);
  }, v_e_34332.src = v_t_34330;
}

function MeshBuffer(v_t_34333) {
  this.i_ = {}, this.n_ = v_t_34333, this.xf = null, this.r_ = {};
}

async function v_To_28118(v_t_34355, v_i_34356, v_r_34357) {
  if (v_i_34356) {
    let v_n_34359 = null;
    return scope.v_Io_28120(await v_t_34355.arrayBuffer(), !1, (v_t_34360, v_i_34361, v_e_34362) => {
      v_t_34360 === scope.v_xo_28116 ? (v_n_34359 = new glRuntime.Texture(v_i_34361, v_e_34362, {
        wrapS: scope.glContext.CLAMP_TO_EDGE,
        wrapT: scope.glContext.CLAMP_TO_EDGE,
        format: v_r_34357 ? scope.glContext.RGBA : scope.glContext.RGB
      }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_34360 === scope.v_Ao_28115 && (v_n_34359 = null);
    }), v_n_34359;
  }
  let v_e_34358 = URL.createObjectURL(v_t_34355);
  v_i_34356 = await new Promise(v_t_34363 => scope.v__o_28104(v_e_34358, v_t_34363)), v_t_34355 = v_i_34356 ? glRuntime.Texture.fromImage(v_i_34356, {
    noFlip: !0,
    wrapS: scope.glContext.CLAMP_TO_EDGE,
    wrapT: scope.glContext.CLAMP_TO_EDGE,
    format: v_r_34357 ? scope.glContext.RGBA : scope.glContext.RGB
  }) : null;
  return URL.revokeObjectURL(v_e_34358), v_t_34355;
}

function v_Be_28119(v_t_34364, v_i_34365, v_n_34366) {
  let v_r_34367 = null;
  return scope.v_Io_28120(v_t_34364, v_i_34365, function (v_t_34368, v_i_34369, v_e_34370) {
    v_t_34368 === scope.v_xo_28116 && (v_r_34367 = new glRuntime.Texture(v_i_34369, v_e_34370, v_n_34366));
  }), v_r_34367 = null === v_r_34367 ? new glRuntime.Texture(8, 8) : v_r_34367;
}

function v_Io_28120(v_f_34371, v___34372, v_h_34373) {
  if (null === v_f_34371) v_h_34373(scope.v_Ao_28115, 0, 0);else {
    var v_d_34374 = new Int32Array(v_f_34371, 0, 32);
    let v_t_34388 = 0;
    var v_v_34375 = v_d_34374[2 + (v_t_34388 = v_d_34374[0] !== scope.v_vo_28106 ? -1 : v_t_34388)];
    let v_i_34389 = v_d_34374[3 + v_t_34388],
      v_e_34390 = v_d_34374[4 + v_t_34388];
    var v_w_34376 = v_d_34374[7 + v_t_34388],
      v_g_34377 = v_d_34374[20 + v_t_34388],
      v_m_34378 = 4 & v_g_34377 ? v_d_34374[21 + v_t_34388] : 0,
      v_p_34379 = v_d_34374[22 + v_t_34388],
      v_k_34380 = v_d_34374[23 + v_t_34388],
      v_b_34381 = v_d_34374[24 + v_t_34388],
      v_y_34382 = v_d_34374[25 + v_t_34388],
      v_S_34383 = v_d_34374[26 + v_t_34388],
      v_A_34384 = scope.v_Ka_28083(v_k_34380),
      v_x_34385 = scope.v_Ka_28083(v_b_34381),
      v_C_34386 = scope.v_Ka_28083(v_y_34382),
      v_T_34387 = scope.v_Ka_28083(v_S_34383);
    let v_r_34391,
      v_s_34392,
      v_n_34393 = !1;
    v_d_34374 = 1 & v_g_34377, v_g_34377 = 64 & v_g_34377;
    if (v_g_34377 || v_m_34378 !== scope.v_wo_28107) {
      if (v_g_34377 || v_m_34378 !== scope.v_go_28108) {
        if (v_g_34377 || v_m_34378 !== scope.v_mo_28109) {
          if (v_g_34377 && !v_d_34374 && 24 === v_p_34379) v_r_34391 = 3, v_s_34392 = scope.v_yo_28113;else {
            if (!v_g_34377 || !v_d_34374 || 32 !== v_p_34379) return void v_h_34373(scope.v_Ao_28115, 0, 0);
            v_r_34391 = 4, v_s_34392 = scope.v_So_28114;
          }
        } else v_r_34391 = 16, v_s_34392 = scope.v_bo_28112, v_n_34393 = !0;
      } else v_r_34391 = 16, v_s_34392 = scope.v_ko_28111, v_n_34393 = !0;
    } else v_r_34391 = 8, v_s_34392 = scope.v_po_28110, v_n_34393 = !0;
    v_n_34393 && (v_i_34389 = v_i_34389 >>> 2 << 2, v_e_34390 = v_e_34390 >>> 2 << 2);
    let v_a_34394 = 131072 & v_v_34375 && 1 < v_w_34376 && v___34372 ? v_w_34376 : 1,
      v_o_34395 = (v_h_34373(scope.v_xo_28116, v_e_34390, v_i_34389), scope.glContext.pixelStorei(scope.glContext.UNPACK_ALIGNMENT, 1), v_e_34390),
      v_l_34396 = v_i_34389,
      v_c_34397 = 128 + 4 * v_t_34388,
      v_u_34398;
    for (let v_t_34399 = 0; v_t_34399 < v_a_34394 && 0 !== v_o_34395 && 0 !== v_l_34396; ++v_t_34399) {
      if (v_n_34393) v_u_34398 = (scope.mathMax(4, v_o_34395) >>> 2) * (scope.mathMax(4, v_l_34396) >>> 2) * v_r_34391, scope.glContext.compressedTexImage2D(scope.glContext.TEXTURE_2D, v_t_34399, v_s_34392, v_o_34395, v_l_34396, 0, new Uint8Array(v_f_34371, v_c_34397, v_u_34398));else {
        v_u_34398 = v_o_34395 * v_r_34391 * v_l_34396;
        let v_i_34400, v_e_34401, v_n_34402;
        if (v_s_34392 === scope.v_So_28114) {
          v_i_34400 = new Uint8Array(v_u_34398), v_e_34401 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
          for (let v_t_34403 = 0; v_t_34403 < scope.mathFloor(v_i_34400.byteLength / 4); ++v_t_34403) v_n_34402 = v_e_34401[4 * v_t_34403 + 3] << 24 | v_e_34401[4 * v_t_34403 + 2] << 16 | v_e_34401[4 * v_t_34403 + 1] << 8 | v_e_34401[4 * v_t_34403], v_i_34400[4 * v_t_34403] = (v_n_34402 & v_k_34380) >>> v_A_34384, v_i_34400[4 * v_t_34403 + 1] = (v_n_34402 & v_b_34381) >>> v_x_34385, v_i_34400[4 * v_t_34403 + 2] = (v_n_34402 & v_y_34382) >>> v_C_34386, v_i_34400[4 * v_t_34403 + 3] = (v_n_34402 & v_S_34383) >>> v_T_34387;
        } else if (v_s_34392 === scope.v_yo_28113) {
          v_i_34400 = new Uint8Array(v_u_34398), v_e_34401 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
          for (let v_t_34404 = 0; v_t_34404 < scope.mathFloor(v_i_34400.byteLength / 3); ++v_t_34404) v_n_34402 = v_e_34401[3 * v_t_34404 + 2] << 16 | v_e_34401[3 * v_t_34404 + 1] << 8 | v_e_34401[3 * v_t_34404], v_i_34400[3 * v_t_34404] = (v_n_34402 & v_k_34380) >> v_A_34384, v_i_34400[3 * v_t_34404 + 1] = (v_n_34402 & v_b_34381) >> v_x_34385, v_i_34400[3 * v_t_34404 + 2] = (v_n_34402 & v_y_34382) >> v_C_34386;
        } else v_i_34400 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
        scope.glContext.texImage2D(scope.glContext.TEXTURE_2D, v_t_34399, v_s_34392, v_o_34395, v_l_34396, 0, v_s_34392, scope.glContext.UNSIGNED_BYTE, v_i_34400);
      }
      v_c_34397 += v_u_34398, v_o_34395 >>>= 1, v_l_34396 >>>= 1;
    }
    scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_MAG_FILTER, scope.glContext.LINEAR), scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_MIN_FILTER, 1 < v_a_34394 ? scope.glContext.LINEAR_MIPMAP_LINEAR : scope.glContext.LINEAR), v_h_34373(scope.v_Co_28117, v_e_34390, v_i_34389);
  }
}

function v_Po_28121(v_t_34405) {
  this.th = new Uint8Array(v_t_34405 ? v_t_34405.buffer || (v_t_34405.byteLength ? v_t_34405 : 1) : 1), this.s_ = new DataView(this.th.buffer), this.U2 = 0, this.kg = this.th.byteLength, this.o_ = null, this.Sg = scope.v_N_27651, this.l_ = 1;
}

function v_Ro_28122(v_t_34406) {
  return 32 == v_t_34406 || 12288 == v_t_34406;
}

function v_Lo_28123() {
  this.c_ = 0, this.u_ = 0, this.ou = 0, this.Oa = 0, this.Le = 0, this.G0 = 0, this.f_ = 0, this.__ = 0, this.d_ = 0;
}

function v_Mo_28124() {
  this.Mf = [], this.h_ = new Map(), this.v_ = !1, this.g_ = 0, this.w_ = 0, this.p_ = 0, this.k_ = 0, this.b_ = 0, this.m_ = [0, 0, 0, 0], this.S_ = [1, 1];
}

function v_Eo_28125() {
  this.x_ = scope.v_Yo_28141, this.I_ = scope.v_$o_28144, this.y_ = 1 / 0, this.C_ = 1 / 0, this.A_ = scope.v_xt_28153.T_(), this.L_ = 0, this.E_ = 0, this.w_ = 0, this.F_ = !1, this.B_ = !1, this.M_ = !1;
  this.xf = new scope.MeshBuffer({
    vertices: 24576,
    coords: 16384,
    colors: 32768
  });
  var v_i_34407 = [];
  for (let v_t_34408 = 0; v_t_34408 < 2048; ++v_t_34408) v_i_34407.push(4 * v_t_34408, 4 * v_t_34408 + 1, 4 * v_t_34408 + 2, 4 * v_t_34408 + 2, 4 * v_t_34408 + 1, 4 * v_t_34408 + 3);
  this.xf.yl({
    triangles: v_i_34407
  }, {
    vertices: 3,
    coords: 2,
    triangles: 3,
    colors: 4
  });
}

function v_Do_28126() {
  this.R_ = 0, this.P_ = 65535, this.D_ = null, this.G_ = 0, this.j_ = 0;
}

function v_Fo_28127() {
  this.N_ = [], this.Rf = null, this.H_ = null, this.U_ = null, this.V_ = "", this.O_ = 1, this.J_ = 1, this.W_ = null, this.K_ = !1, this.z_ = 0, this.X_ = [], this.Z_ = 0, this.Y_ = 0, this.q_ = [];
}

function v_Bo_28128(v_t_34409) {
  this.Q_ = [], this.e3 = [];
}

function v_No_28129(v_t_34410, v_i_34411, v_e_34412) {
  this.z8 = document.createElement("canvas"), this.K8 = this.z8.getContext("2d"), this.X8 = new Map(), this.q8 = null, this.Le = v_i_34411, this.G0 = v_e_34412, this.sd = v_t_34410 || "sans-serif", this.Y8 = 16, this.Z8 = !1, this.z8.width = v_i_34411, this.z8.height = v_e_34412, this.Q8 = new scope.v_Ua_28072(v_i_34411, v_e_34412), this.Mk = !1, this.Rk = [0, 0, v_i_34411, v_e_34412], this.K8.clearRect(0, 0, v_i_34411, v_e_34412), this.K8.textBaseline = "baseline", this.K8.fillStyle = "#fff", this.Ek(this.Y8, !0);
}

function v_Go_28130(v_t_34413) {
  this.Pk = v_t_34413, this.Yf = new glRuntime.Texture(v_t_34413.Le, v_t_34413.Le, {
    wrapS: scope.glContext.CLAMP_TO_EDGE,
    wrapT: scope.glContext.CLAMP_TO_EDGE,
    format: scope.glContext.ALPHA
  }), this.Dk = new Map();
}

function v_il_28147(v_t_34580, v_i_34581) {
  switch (v_t_34580) {
    case scope.v_Uo_28131:
      return v_i_34581;
    case scope.v_Ho_28132:
      return scope.v_Vl_28189(v_i_34581);
    case scope.v_Jo_28133:
      return scope.v_Wl_28190(v_i_34581);
    case scope.v_jo_28134:
      return scope.v_Xl_28191(v_i_34581);
    case 5:
      return v_i_34581 * v_i_34581;
    case 6:
      return scope.v_zl_28192(v_i_34581);
    case 7:
      return scope.v_Kl_28193(v_i_34581);
    case 8:
      return scope.v_Yl_28194(v_i_34581);
    case scope.v_Oo_28135:
      return scope.v_ql_28195(v_i_34581);
    case 10:
      return (v_o_34587 = v_i_34581) < .5 ? 4 * v_o_34587 * v_o_34587 * v_o_34587 : 1 - scope.mathPow(-2 * v_o_34587 + 2, 3) / 2;
    case 11:
      return scope.v_Zl_28196(v_i_34581);
    case 12:
      return v_o_34587 = v_i_34581, 1 - scope.mathPow(1 - v_o_34587, 4);
    case 13:
      return (v_a_34586 = v_i_34581) < .5 ? 8 * v_a_34586 * v_a_34586 * v_a_34586 * v_a_34586 : 1 - scope.mathPow(-2 * v_a_34586 + 2, 4) / 2;
    case 14:
      return scope.v_$l_28197(v_i_34581);
    case 15:
      return v_a_34586 = v_i_34581, 1 - scope.mathPow(1 - v_a_34586, 5);
    case 16:
      return (v_s_34585 = v_i_34581) < .5 ? 16 * v_s_34585 * v_s_34585 * v_s_34585 * v_s_34585 * v_s_34585 : 1 - scope.mathPow(-2 * v_s_34585 + 2, 5) / 2;
    case 17:
      return 0 == (v_s_34585 = v_i_34581) ? 0 : scope.mathPow(2, 10 * v_s_34585 - 10);
    case 18:
      return 1 == (v_r_34584 = v_i_34581) ? 1 : 1 - scope.mathPow(2, -10 * v_r_34584);
    case 19:
      return 0 == (v_r_34584 = v_i_34581) ? 0 : 1 == v_r_34584 ? 1 : v_r_34584 < .5 ? scope.mathPow(2, 20 * v_r_34584 - 10) / 2 : (2 - scope.mathPow(2, -20 * v_r_34584 + 10)) / 2;
    case 20:
      return v_n_34583 = v_i_34581, 1 - scope.mathSqrt(1 - scope.mathPow(v_n_34583, 2));
    case 21:
      return scope.v_Ql_28198(v_i_34581);
    case 22:
      return (v_n_34583 = v_i_34581) < .5 ? (1 - scope.mathSqrt(1 - scope.mathPow(2 * v_n_34583, 2))) / 2 : (scope.mathSqrt(1 - scope.mathPow(-2 * v_n_34583 + 2, 2)) + 1) / 2;
    case 23:
      return 2.70158 * v_i_34581 * v_i_34581 * v_i_34581 - 1.70158 * v_i_34581 * v_i_34581;
    case 24:
      return v_e_34582 = v_i_34581, 1 + 2.70158 * scope.mathPow(v_e_34582 - 1, 3) + 1.70158 * scope.mathPow(v_e_34582 - 1, 2);
    case 25:
      return (v_e_34582 = v_i_34581) < .5 ? scope.mathPow(2 * v_e_34582, 2) * (7.18982 * v_e_34582 - 2.59491) / 2 : (scope.mathPow(2 * v_e_34582 - 2, 2) * (3.59491 * (2 * v_e_34582 - 2) + 2.59491) + 2) / 2;
    case 26:
      return v_i_34581 < .5 ? 0 : 1;
  }
  var v_e_34582, v_n_34583, v_r_34584, v_s_34585, v_a_34586, v_o_34587;
  return 0;
}

function v_el_28148(v_t_34588, v_i_34589, v_e_34590) {
  let v_n_34591 = 1,
    v_r_34592 = 0;
  let v_s_34593 = "Normal";
  v_i_34589 && (50 <= v_i_34589.Pm ? v_s_34593 = "Rainbow" : 25 <= v_i_34589.Pm ? v_s_34593 = "Platinum" : 15 <= v_i_34589.Pm ? v_s_34593 = "Gold" : 10 <= v_i_34589.Pm ? v_s_34593 = "Silver" : 5 <= v_i_34589.Pm && (v_s_34593 = "Copper"), v_n_34591 = scope.mathMin(scope.mathMax(v_i_34589.Pm, 1), 50), v_r_34592 = v_n_34591 < 50 ? scope.mathMin(scope.mathMax(v_i_34589.Gm / scope.v_lt_27786[v_n_34591], 0), 1) : 1), v_e_34590 ? v_t_34588.ot("charaRankBg").Je = "charaRank" + v_s_34593 : v_t_34588.ot("charaPanelBg").Je = "panelChara" + v_s_34593, v_t_34588.ot("charaRankNum").Wt = "" + v_n_34591, v_t_34588.ot("charaRankMax").Be = 50 === v_n_34591, v_t_34588.ot("charaRankGauge").ln(v_r_34592);
}

function v_nl_28149(v_i_34594, v_e_34595, v_n_34596) {
  let v_r_34597;
  (v_r_34597 = v_i_34594.ot("skillName")).Wt = v_e_34595.ct, v_r_34597.q3.rr = 0, (v_r_34597 = v_i_34594.ot("skillDesc")).Tn || (v_r_34597.Tn = new scope.v_Bo_28128()), v_r_34597.Wt = v_r_34597.Tn.An(v_e_34595.if), v_r_34597.q3.rr = 0, null === v_e_34595.Om ? v_i_34594.ot("charaSkillIcon").Je = "icon" + scope.v_Q_27767[v_e_34595.Vm] : (v_i_34594.ot("charaSkillIcon").Je = "icon" + scope.v_Q_27767[v_e_34595.Vm] + "C", v_i_34594.ot("charaSkillCount").Wt = scope.v_Qa_28089(v_e_34595.Om, 0, 999).toString()), v_i_34594.ot("charaSkillCount").Be = null !== v_e_34595.Om, v_i_34594.ot("charaSkillIconSp").Be = v_e_34595.Um;
  for (let v_t_34598 = 0; v_t_34598 < 5; ++v_t_34598) v_r_34597 = v_i_34594.ot("skillIndi" + v_t_34598), v_t_34598 >= v_e_34595.zm.length ? (v_r_34597.Be = !1, v_n_34596 && (v_i_34594.ot("skillIndiFx" + v_t_34598).Be = !1, v_i_34594.ot("skillIndiFlash" + v_t_34598).Be = !1)) : (v_r_34597.Be = !0, v_r_34597.Je = "indi" + scope.v_Q_27767[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]], (v_r_34597 = v_i_34594.ot("skillIndiFx" + v_t_34598)) && (v_r_34597.Be = !0, v_r_34597.Je = "indiFx" + scope.v_Q_27767[scope.v_$_27766[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]]]), (v_r_34597 = v_i_34594.ot("skillIndiFlash" + v_t_34598)) && (v_r_34597.Be = scope.v_$_27766[v_e_34595.zm[v_e_34595.zm.length - v_t_34598 - 1]] !== scope.v_Z_27765));
}

function v_rl_28150(v_t_34599, v_i_34600) {
  var v_e_34601 = scope.v_oe_27649.Ox.find(v_t_34607 => v_t_34607.Ae === v_i_34600.nx);
  v_t_34599.ot("guestTitleText").Wt = v_i_34600.ox, v_t_34599.ot("guestTitlePlate").Je = "title" + scope.v_ot_27785[v_i_34600.lx], v_t_34599.ot("guestPlayerName").Wt = v_i_34600.om, v_t_34599.ot("guestChara").zt = !0, v_t_34599.ot("guestChara").Xt = v_i_34600.ux, v_t_34599.ot("guestSkillName").Wt = v_i_34600.RC;
  let v_n_34602 = 0;
  switch (v_i_34600.MC) {
    case scope.v_mt_27749:
      v_n_34602 = scope.v_Wt_27759;
      break;
    case scope.v_pt_27750:
      v_n_34602 = scope.v_Kt_27760;
      break;
    case scope.v_kt_27751:
      v_n_34602 = scope.v_Yt_27761;
      break;
    case scope.v_bt_27752:
    case scope.v_yt_27753:
    case scope.v_St_27754:
    case scope.v_At_27755:
      v_n_34602 = scope.v_qt_27762;
      break;
    case scope.v_jt_27756:
    case scope.v_Ot_27757:
    case scope.v_Vt_27758:
      v_n_34602 = scope.v_Zt_27763;
      break;
    default:
      v_n_34602 = scope.v_gt_27748;
  }
  v_t_34599.ot("guestSkill").Je = (scope.v_Wt_27759 <= v_n_34602 ? "indi" : "icon") + scope.v_Q_27767[v_n_34602], v_e_34601 && (v_t_34599.ot("guestNameplate").Je = "namePlate_" + scope.v_Q0_27805[v_e_34601.te], v_t_34599.ot("guestDiff").Je = "tagDiff_" + scope.v_Q0_27805[v_e_34601.te]);
  var v_e_34601 = v_i_34600.lm,
    v_r_34603 = "" + scope.mathFloor(v_e_34601 / 100),
    v_s_34604 = scope.v_Xa_28081("" + v_e_34601 % 100, 2, "0"),
    v_a_34605 = scope.ratingColorName(v_e_34601),
    v_e_34601 = scope.ratingColorRgba(v_e_34601),
    v_o_34606 = v_t_34599.ot("guestRatingText"),
    v_t_34599 = v_t_34599.ot("guestRatingLabel");
  v_o_34606.Wt = v_r_34603 + "P" + v_s_34604, v_o_34606.Ak = "rating" + v_a_34605, v_o_34606.Qe(v_e_34601[0], v_e_34601[1], v_e_34601[2], v_e_34601[3]), v_t_34599.Je = "numRating" + v_a_34605 + "Rating", v_t_34599.Qe(v_e_34601[0], v_e_34601[1], v_e_34601[2], v_e_34601[3]);
}

function v_sl_28151(v_t_34608, v_i_34609, v_e_34610) {
  v_t_34608.ot("label").Wt = v_i_34609.N0.replaceAll("\\n", "\n"), v_t_34608.ot("balloon").Je = "balloon" + v_i_34609.lI + (v_e_34610 ? "_" + v_e_34610 : "");
  v_t_34608 = v_t_34608.ot("balloonFx");
  v_t_34608 && (v_t_34608.Je = "balloon" + v_i_34609.lI + (v_e_34610 ? "_" + v_e_34610 : ""));
}

function v_al_28152() {
  this.m = [0, 0, 0, 0];
}

function v_xt_28153() {
  this.m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function v_cl_28156() {
  this.ou = 0, this.Oa = 0, this.Le = 0, this.G0 = 0;
}

function v_ul_28157() {
  this.ed = "", this.Le = 0, this.G0 = 0, this.td = !1, this.nd = !1, this.rd = {};
}

function v_fl_28158() {
  this.ed = "";
}

function v__l_28159() {
  this.ad = [];
}

function v_hl_28160() {
  this.sd = "", this.R_ = 0, this.P_ = 16777215, this.G_ = 1, this.j_ = 1;
}

function v_dl_28161() {
  this.Ik = new Map();
}

function v_vl_28162() {
  this.Xt = "", this.Je = "";
}

function v_wl_28163() {
  this.z2 = scope.v_Uo_28131, this.od = 0, this.Cr = 0;
}

function v_gl_28164() {
  this.ld = new Map();
}

function v_ml_28165() {
  this.ud = 0, this.fd = 0, this._d = "", this.n8 = 0;
}

function v_pl_28166() {
  this.hd = [];
}

function v_kl_28167() {
  this.z2 = scope.v_Uo_28131, this.ud = 0, this.K2 = 0;
}

function v_bl_28168() {
  this.on = [0, 0, 0], this.Oe = [1, 1, 1], this.vd = [0, 0, 0], this.gd = [0, 0], this.qe = 1, this.wd = 0, this.Nn = 0, this.Yk = [0, 0], this.Zk = [1, 1], this.$k = 0;
}

function v_yl_28169() {
  this.pd = !1, this.rr = 0, this.ud = 0, this.fd = 0, this.kd = null;
}

function v_Sl_28170() {
  this.rr = 0, this.bd = 0, this.md = 0;
}

function v_Al_28171() {
  this.Sd = new Map();
}

function v_xl_28172() {
  this.GA = void 0, this.UA = 0, this.W2 = 0;
}

function v_Cl_28173() {
  this.p9 = 0, this.xd = !1, this.Jt = !0, this.lt = new scope.v_Il_28175(), this.lt.Ck = new Map(), this.Mf = {}, this.Id = {}, this.yd = {}, this.Tk = {}, this.Cd = new Map(), this.Ad = new Map(), this.Td = {}, this.o8 = {}, this.l8 = {}, this.HA = [], this.jA = void 0;
}

function v_Tl_28174(v_t_34617) {
  this.p9 = 0, this.xd = !0, this.Jt = !0, this.Ld = v_t_34617;
}

function v_Il_28175() {
  this.Fi = 0, this.ct = "", this.Ed = [], this.We = [], this.Be = !0, this.Te = 0, this.Qt = 0, this.Le = 0, this.G0 = 0, this.Fe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.on = [0, 0, 0], this.Oe = [1, 1, 1], this.vd = [0, 0, 0], this.gd = [0, 0], this.qe = 1, this.wd = 0, this.Nn = 0, this.Fd = [.5, .5], this.Bd = !1, this.Md = 0, this.Rd = new Map(), this.Pd = !1, this.Dd = new scope.v_yl_28169(), this.Gd = new scope.v_Al_28171(), this.un = !1, this.Lk = void 0, this.Ck = void 0;
}

function v_Pl_28176() {
  scope.v_Il_28175.call(this), this.Fi = 1;
}

function v_Rl_28177() {
  scope.v_Il_28175.call(this), this.Fi = 3, this.Wt = "", this.jd = "", this.B_ = !1, this.M_ = !1, this.Nd = !1, this.Hd = 0, this.Ud = 0, this.Vd = 1, this.Od = 1, this.w_ = 1, this.F_ = !1, this.Jd = !1, this.R3 = scope.v_Yo_28141, this.I_ = scope.v_$o_28144, this.Wd = !1, this.Kd = 0, this.zd = 0, this.Xd = [0, 0, 0, 0], this.Tn = null, this.q3 = new scope.v_yl_28169();
}

function v_Ll_28178() {
  scope.v_Il_28175.call(this), this.Fi = 2, this.Xt = "", this.Je = "", this.Zd = !1, this.gt = [0, 0, 1, 1], this.Yd = !1, this.$d = [0, 0, 0, 0], this.Qk = "", this.Yk = [0, 0], this.Zk = [1, 1], this.$k = 0, this.c8 = [.5, .5], this.zt = !1;
}

function v_Ml_28179() {
  scope.v_Il_28175.call(this), this.Fi = 4, this.Wt = "", this.Ak = "", this.Vd = 1, this.Od = 1, this.qd = 0, this.R3 = scope.v_Yo_28141;
}

function v_El_28180() {
  scope.v_Il_28175.call(this), this.Fi = 5, this.Xt = "", this.Qd = 0, this.eh = [0, 0, 0, 0, 0, 0, 0, 0];
}

function v_Dl_28181(v_t_34618) {
  this.th = v_t_34618;
}

function Framebuffer(v_t_34998, v_i_34999, v_e_35000) {
  this.Wh = scope.glContext.createFramebuffer(), this.Kh = null, this.zh = null, this.Xh = null, this.Zh(), (1 & v_e_35000 || 2 & v_e_35000) && (this.Kh = scope.glContext.createTexture(), scope.glContext.bindTexture(scope.glContext.TEXTURE_2D, this.Kh), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, 0), scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_MAG_FILTER, scope.glContext.LINEAR), scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_MIN_FILTER, scope.glContext.LINEAR), scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_WRAP_S, scope.glContext.CLAMP_TO_EDGE), scope.glContext.texParameteri(scope.glContext.TEXTURE_2D, scope.glContext.TEXTURE_WRAP_T, scope.glContext.CLAMP_TO_EDGE), v_e_35000 = 1 & v_e_35000 ? scope.glContext.RGB : scope.glContext.RGBA, scope.glContext.texImage2D(scope.glContext.TEXTURE_2D, 0, v_e_35000, v_t_34998, v_i_34999, 0, v_e_35000, scope.glContext.UNSIGNED_BYTE, null), scope.glContext.framebufferTexture2D(scope.glContext.FRAMEBUFFER, scope.glContext.COLOR_ATTACHMENT0, scope.glContext.TEXTURE_2D, this.Kh, 0)), this.zh = scope.glContext.createRenderbuffer(), scope.glContext.bindRenderbuffer(scope.glContext.RENDERBUFFER, this.zh), scope.glContext.renderbufferStorage(scope.glContext.RENDERBUFFER, scope.glContext.DEPTH_STENCIL, v_t_34998, v_i_34999), scope.glContext.framebufferRenderbuffer(scope.glContext.FRAMEBUFFER, scope.glContext.DEPTH_STENCIL_ATTACHMENT, scope.glContext.RENDERBUFFER, this.zh), scope.glContext.bindTexture(scope.glContext.TEXTURE_2D, null), scope.glContext.bindRenderbuffer(scope.glContext.RENDERBUFFER, null), scope.Framebuffer.Yh();
}

function RenderScene() {
  this.Id = {}, this.Mf = {}, this.Vh = {
    Yf: null,
    Jh: null,
    Rb: null,
    Fe: null,
    Oh: null,
    Uh: null,
    D_: null,
    $h: null
  }, this.qh = {
    Qh: null,
    e5: null
  }, this.xf = void 0, this.Gh = 400, this.Dh = void 0, this.t5 = void 0, this.X6 = void 0, this.jh = void 0, this.Ph = {
    i5: null,
    n5: null,
    Hh: 0,
    Rh: 0,
    rr: Array.from({
      length: 30
    }, v_t_35001 => 0),
    r5: 0,
    a5: 0
  }, this.Zt = {}, this.C4 = {}, this.Pk = new scope.v_No_28129("'MS PGothic', 'SimHei', 'Malgun Gothic', sans-serif", 1024, 1024), this.Vk = new scope.v_Go_28130(this.Pk);
}

function v_Nl_28184(v_t_35002, v_i_35003, v_e_35004) {
  this.Ae = v_t_35002, this.Z6 = v_i_35003, this.Ee = v_e_35004, this.lr = !0;
}

function Renderer() {
  this.rr = 0, this.o5 = [], this.Yt = new scope.RenderScene(), this.Y6 = [], this.ny = 0, this.fv = 0, this.Yt.l5(), this.Yt.u5(), this.Yt.f5(), this.k9 = -1;
}

function v_Vl_28189(v_t_35215) {
  return 1 - scope.mathCos(v_t_35215 * scope.mathPI / 2);
}

function v_Wl_28190(v_t_35216) {
  return scope.mathSin(v_t_35216 * scope.mathPI / 2);
}

function v_Xl_28191(v_t_35217) {
  return -(scope.mathCos(scope.mathPI * v_t_35217) - 1) / 2;
}

function v_zl_28192(v_t_35218) {
  return 1 - (1 - v_t_35218) * (1 - v_t_35218);
}

function v_Kl_28193(v_t_35219) {
  return v_t_35219 < .5 ? 2 * v_t_35219 * v_t_35219 : 1 - scope.mathPow(-2 * v_t_35219 + 2, 2) / 2;
}

function v_Yl_28194(v_t_35220) {
  return v_t_35220 * v_t_35220 * v_t_35220;
}

function v_ql_28195(v_t_35221) {
  return 1 - scope.mathPow(1 - v_t_35221, 3);
}

function v_Zl_28196(v_t_35222) {
  return v_t_35222 * v_t_35222 * v_t_35222 * v_t_35222;
}

function v_$l_28197(v_t_35223) {
  return v_t_35223 * v_t_35223 * v_t_35223 * v_t_35223 * v_t_35223;
}

function v_Ql_28198(v_t_35224) {
  return scope.mathSqrt(1 - scope.mathPow(v_t_35224 - 1, 2));
}

function v_tc_28199(v_t_35225) {
  this.Yu = null, this.bR = !1, v_t_35225.constructor === Blob ? this.Yu = v_t_35225 : v_t_35225.constructor === Uint8Array && (this.Yu = new Blob([v_t_35225]), this.bR = !0);
}

function v_ic_28200(v_i_35226, v_e_35227) {
  var v_n_35228 = scope.v_y1_27885.length,
    v_t_35229 = v_i_35226.byteLength,
    v_r_35230 = new Uint8Array(v_t_35229),
    v_s_35231 = scope.v_y1_27885.map(v_t_35236 => 90 ^ v_t_35236);
  let v_a_35232 = 0,
    v_o_35233 = 0,
    v_l_35234 = 0;
  for (let v_t_35237 = 0; v_t_35237 < v_i_35226.length; ++v_t_35237) {
    v_o_35233 = (v_o_35233 + v_s_35231[v_a_35232 = (v_a_35232 + 1) % v_n_35228]) % v_n_35228;
    var v_c_35235 = v_s_35231[v_a_35232 % v_n_35228],
      v_c_35235 = (v_s_35231[v_a_35232 % v_n_35228] = v_s_35231[v_o_35233], v_s_35231[v_o_35233] = v_c_35235, v_s_35231[(v_s_35231[v_a_35232] + v_s_35231[v_o_35233]) % v_n_35228]);
    v_r_35230[v_t_35237] = v_c_35235 ^ v_i_35226[v_t_35237] ^ 211 & v_l_35234, v_l_35234 = v_l_35234 + ((v_e_35227 ? v_r_35230 : v_i_35226)[v_t_35237] + v_s_35231[v_t_35237]) & 255;
  }
  return v_r_35230;
}

function v_ec_28201() {
  return scope.mathFloor(4294967295 * scope.mathRandom());
}

function v_nc_28202() {
  return scope.v_H_27654.length ? scope.v_U_27653 + "-" + scope.v_H_27654 : scope.v_U_27653;
}

function v_rc_28203(v_t_35238, v_e_35239) {
  return v_e_35239 ? v_t_35238.reduce((v_t_35240, v_i_35241) => v_t_35240 + v_e_35239(v_i_35241), 0) : v_t_35238.reduce((v_t_35242, v_i_35243) => v_t_35242 + v_i_35243, 0);
}

function v_Ge_28204(v_t_35244) {
  return 16.6667 * v_t_35244;
}

function v_sc_28205(v_t_35245) {
  v_t_35245 = new Date(v_t_35245);
  return v_t_35245.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }) + " " + v_t_35245.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function v_ac_28206(v_t_35246) {
  var v_i_35247 = v_t_35246[0] / 255,
    v_e_35248 = v_t_35246[1] / 255,
    v_t_35246 = v_t_35246[2] / 255,
    v_n_35249 = scope.mathMax(v_i_35247, v_e_35248, v_t_35246),
    v_r_35250 = scope.mathMin(v_i_35247, v_e_35248, v_t_35246),
    v_s_35251 = v_n_35249 - v_r_35250;
  let v_a_35252 = 0;
  return v_r_35250 == v_n_35249 ? v_a_35252 = 0 : v_r_35250 == v_i_35247 ? v_a_35252 = (v_t_35246 - v_e_35248) / v_s_35251 * 60 + 180 : v_r_35250 == v_e_35248 ? v_a_35252 = (v_i_35247 - v_t_35246) / v_s_35251 * 60 + 300 : v_r_35250 == v_t_35246 && (v_a_35252 = (v_e_35248 - v_i_35247) / v_s_35251 * 60 + 60), [v_a_35252, v_s_35251 / (1 - scope.mathAbs(v_n_35249 + v_r_35250 - 1)), (v_n_35249 + v_r_35250) / 2];
}

function v_oc_28207(v_t_35253) {
  return [(v_t_35253 >> 24 & 255) / 255, (v_t_35253 >> 16 & 255) / 255, (v_t_35253 >> 8 & 255) / 255, (255 & v_t_35253) / 255];
}

function v_lc_28208(v_t_35254) {
  return "en-US" === v_t_35254 ? "en" : "ja";
}

function v_Ue_28209(v_t_35255) {
  return scope.renderer.p5().b4(v_t_35255);
}

function v_cc_28210(v_i_35256, v_e_35257) {
  let v_n_35258 = 0;
  for (let v_t_35259 = 0; v_t_35259 < 16; ++v_t_35259) v_n_35258 <<= 1, v_t_35259 >= v_i_35256 && v_t_35259 < v_i_35256 + v_e_35257 && (v_n_35258 |= 1);
  return v_n_35258;
}

function v_uc_28211(v_t_35260) {
  return v_t_35260 >> 0 == scope.mathRound(1e4 * v_t_35260) / 1e4;
}

function v_fc_28212() {}

scope.rankName = rankName;
scope.v_Oi_27861 = v_Oi_27861;
scope.v_Vi_27862 = v_Vi_27862;
scope.v_Wi_27863 = v_Wi_27863;
scope.v_d1_27871 = v_d1_27871;
scope.v_v1_27872 = v_v1_27872;
scope.v_Qi_27873 = v_Qi_27873;
scope.v_te_27874 = v_te_27874;
scope.v_ie_27875 = v_ie_27875;
scope.v_ee_27876 = v_ee_27876;
scope.v_ne_27877 = v_ne_27877;
scope.v_re_27878 = v_re_27878;
scope.v_w1_27879 = v_w1_27879;
scope.v_g1_27880 = v_g1_27880;
scope.v_m1_27881 = v_m1_27881;
scope.v_p1_27882 = v_p1_27882;
scope.v_k1_27883 = v_k1_27883;
scope.v_b1_27884 = v_b1_27884;
scope.v_A1_27887 = v_A1_27887;
scope.v_x1_27888 = v_x1_27888;
scope.v_C1_27890 = v_C1_27890;
scope.v_T1_27891 = v_T1_27891;
scope.v_ar_27928 = v_ar_27928;
scope.v_fr_27933 = v_fr_27933;
scope.v__r_27934 = v__r_27934;
scope.v_hr_27935 = v_hr_27935;
scope.v_dr_27936 = v_dr_27936;
scope.v_wr_27938 = v_wr_27938;
scope.v_gr_27939 = v_gr_27939;
scope.v_mr_27940 = v_mr_27940;
scope.v_pr_27941 = v_pr_27941;
scope.v_yr_27944 = v_yr_27944;
scope.v_Sr_27945 = v_Sr_27945;
scope.v_Ar_27946 = v_Ar_27946;
scope.v_xr_27947 = v_xr_27947;
scope.v_Cr_27948 = v_Cr_27948;
scope.v_Ir_27950 = v_Ir_27950;
scope.v_Lr_27953 = v_Lr_27953;
scope.v_Er_27955 = v_Er_27955;
scope.v_Dr_27956 = v_Dr_27956;
scope.v_Fr_27957 = v_Fr_27957;
scope.v_Gr_27960 = v_Gr_27960;
scope.v_Ur_27961 = v_Ur_27961;
scope.v_Vr_27967 = v_Vr_27967;
scope.v_zr_27970 = v_zr_27970;
scope.v_Kr_27971 = v_Kr_27971;
scope.v_Yr_27972 = v_Yr_27972;
scope.v_qr_27973 = v_qr_27973;
scope.v_hs_27990 = v_hs_27990;
scope.v_ds_27991 = v_ds_27991;
scope.v_vs_27992 = v_vs_27992;
scope.v_ws_27993 = v_ws_27993;
scope.v_gs_27994 = v_gs_27994;
scope.v_ms_27995 = v_ms_27995;
scope.v_ps_27996 = v_ps_27996;
scope.v_ks_27997 = v_ks_27997;
scope.v_bs_27998 = v_bs_27998;
scope.v_ys_27999 = v_ys_27999;
scope.v_Ss_28000 = v_Ss_28000;
scope.v_As_28001 = v_As_28001;
scope.v_xs_28002 = v_xs_28002;
scope.v_Cs_28003 = v_Cs_28003;
scope.v_Rs_28007 = v_Rs_28007;
scope.v_Ls_28008 = v_Ls_28008;
scope.v_Bs_28013 = v_Bs_28013;
scope.v_Gs_28015 = v_Gs_28015;
scope.v_Us_28016 = v_Us_28016;
scope.v_Hs_28017 = v_Hs_28017;
scope.v_Ca_28057 = v_Ca_28057;
scope.v_Ta_28058 = v_Ta_28058;
scope.v_Ia_28059 = v_Ia_28059;
scope.v_Pa_28060 = v_Pa_28060;
scope.v_Ra_28061 = v_Ra_28061;
scope.v_La_28062 = v_La_28062;
scope.v_Ma_28063 = v_Ma_28063;
scope.v_Pe_28064 = v_Pe_28064;
scope.v_Ea_28065 = v_Ea_28065;
scope.v_Da_28067 = v_Da_28067;
scope.v_Fa_28068 = v_Fa_28068;
scope.v_Ba_28069 = v_Ba_28069;
scope.v_Na_28070 = v_Na_28070;
scope.v_Ga_28071 = v_Ga_28071;
scope.v_Ua_28072 = v_Ua_28072;
scope.v_Ha_28073 = v_Ha_28073;
scope.v_Ja_28074 = v_Ja_28074;
scope.v_ja_28075 = v_ja_28075;
scope.v_Le_28076 = v_Le_28076;
scope.v_Oa_28077 = v_Oa_28077;
scope.v_Me_28078 = v_Me_28078;
scope.v_Va_28079 = v_Va_28079;
scope.v_Wa_28080 = v_Wa_28080;
scope.v_Xa_28081 = v_Xa_28081;
scope.v_za_28082 = v_za_28082;
scope.v_Ka_28083 = v_Ka_28083;
scope.v_Ee_28084 = v_Ee_28084;
scope.v_Ya_28085 = v_Ya_28085;
scope.v_qa_28086 = v_qa_28086;
scope.v_$a_28088 = v_$a_28088;
scope.v_Qa_28089 = v_Qa_28089;
scope.v_to_28090 = v_to_28090;
scope.v_io_28091 = v_io_28091;
scope.v_eo_28092 = v_eo_28092;
scope.v_no_28093 = v_no_28093;
scope.v_ro_28094 = v_ro_28094;
scope.v_so_28095 = v_so_28095;
scope.v_De_28096 = v_De_28096;
scope.v_ao_28097 = v_ao_28097;
scope.v_oo_28098 = v_oo_28098;
scope.v_lo_28099 = v_lo_28099;
scope.v_co_28100 = v_co_28100;
scope.v_Fe_28101 = v_Fe_28101;
scope.v_uo_28102 = v_uo_28102;
scope.v_fo_28103 = v_fo_28103;
scope.v__o_28104 = v__o_28104;
scope.MeshBuffer = MeshBuffer;
scope.v_To_28118 = v_To_28118;
scope.v_Be_28119 = v_Be_28119;
scope.v_Io_28120 = v_Io_28120;
scope.v_Po_28121 = v_Po_28121;
scope.v_Ro_28122 = v_Ro_28122;
scope.v_Lo_28123 = v_Lo_28123;
scope.v_Mo_28124 = v_Mo_28124;
scope.v_Eo_28125 = v_Eo_28125;
scope.v_Do_28126 = v_Do_28126;
scope.v_Fo_28127 = v_Fo_28127;
scope.v_Bo_28128 = v_Bo_28128;
scope.v_No_28129 = v_No_28129;
scope.v_Go_28130 = v_Go_28130;
scope.v_il_28147 = v_il_28147;
scope.v_el_28148 = v_el_28148;
scope.v_nl_28149 = v_nl_28149;
scope.v_rl_28150 = v_rl_28150;
scope.v_sl_28151 = v_sl_28151;
scope.v_al_28152 = v_al_28152;
scope.v_xt_28153 = v_xt_28153;
scope.v_cl_28156 = v_cl_28156;
scope.v_ul_28157 = v_ul_28157;
scope.v_fl_28158 = v_fl_28158;
scope.v__l_28159 = v__l_28159;
scope.v_hl_28160 = v_hl_28160;
scope.v_dl_28161 = v_dl_28161;
scope.v_vl_28162 = v_vl_28162;
scope.v_wl_28163 = v_wl_28163;
scope.v_gl_28164 = v_gl_28164;
scope.v_ml_28165 = v_ml_28165;
scope.v_pl_28166 = v_pl_28166;
scope.v_kl_28167 = v_kl_28167;
scope.v_bl_28168 = v_bl_28168;
scope.v_yl_28169 = v_yl_28169;
scope.v_Sl_28170 = v_Sl_28170;
scope.v_Al_28171 = v_Al_28171;
scope.v_xl_28172 = v_xl_28172;
scope.v_Cl_28173 = v_Cl_28173;
scope.v_Tl_28174 = v_Tl_28174;
scope.v_Il_28175 = v_Il_28175;
scope.v_Pl_28176 = v_Pl_28176;
scope.v_Rl_28177 = v_Rl_28177;
scope.v_Ll_28178 = v_Ll_28178;
scope.v_Ml_28179 = v_Ml_28179;
scope.v_El_28180 = v_El_28180;
scope.v_Dl_28181 = v_Dl_28181;
scope.Framebuffer = Framebuffer;
scope.RenderScene = RenderScene;
scope.v_Nl_28184 = v_Nl_28184;
scope.Renderer = Renderer;
scope.v_Vl_28189 = v_Vl_28189;
scope.v_Wl_28190 = v_Wl_28190;
scope.v_Xl_28191 = v_Xl_28191;
scope.v_zl_28192 = v_zl_28192;
scope.v_Kl_28193 = v_Kl_28193;
scope.v_Yl_28194 = v_Yl_28194;
scope.v_ql_28195 = v_ql_28195;
scope.v_Zl_28196 = v_Zl_28196;
scope.v_$l_28197 = v_$l_28197;
scope.v_Ql_28198 = v_Ql_28198;
scope.v_tc_28199 = v_tc_28199;
scope.v_ic_28200 = v_ic_28200;
scope.v_ec_28201 = v_ec_28201;
scope.v_nc_28202 = v_nc_28202;
scope.v_rc_28203 = v_rc_28203;
scope.v_Ge_28204 = v_Ge_28204;
scope.v_sc_28205 = v_sc_28205;
scope.v_ac_28206 = v_ac_28206;
scope.v_oc_28207 = v_oc_28207;
scope.v_lc_28208 = v_lc_28208;
scope.v_Ue_28209 = v_Ue_28209;
scope.v_cc_28210 = v_cc_28210;
scope.v_uc_28211 = v_uc_28211;
scope.v_fc_28212 = v_fc_28212;
