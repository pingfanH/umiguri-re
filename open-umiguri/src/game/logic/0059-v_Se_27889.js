// game: 语句 59 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Se_27889 = function () {
    let v_e_28244,
      v_i_28245,
      v_n_28246,
      v_r_28247,
      v_s_28248 = new Map(),
      v_a_28249 = 1,
      v_o_28250 = void 0,
      v_l_28251 = new Map(),
      v_c_28252 = 44100,
      v_u_28253 = 1,
      v_f_28254 = !1,
      v___28255 = 0;
    function v_h_28256(v_t_28257) {
      this.th = v_t_28257, this.vv = void 0, this.gv = v_e_28244.createGain(), this.wv = !1, this.A6 = 0, this._6 = -1, this.b1 = 1, this.l6 = 0, this.Mc = 1, this.gv.connect(v_n_28246);
    }
    return v_h_28256.prototype = {
      o1: function () {
        return !!this.vv && (this.vv.loop ? this.wv : this.wv && this.A6 + this.th.duration - this.l6 > v___28255);
      },
      pv: function () {
        this.vv = v_e_28244.createBufferSource(), this.vv.buffer = this.th, this.vv.connect(this.gv), 0 <= this._6 && (this.vv.loop = !0, this.vv.loopStart = this._6, this.vv.loopEnd = this.th.duration), this.vv.playbackRate.setValueAtTime(this.b1, v___28255);
      },
      kv: function () {
        this.th = void 0, this.vv && this.vv.disconnect(this.gv), this.gv.disconnect(v_n_28246);
      }
    }, {
      ue: function () {
        v_e_28244 = new AudioContext(), (v_n_28246 = v_i_28245 = v_e_28244.createGain()).connect(v_e_28244.destination), v_c_28252 = v_e_28244.sampleRate, v___28255 = v_e_28244.currentTime, v_e_28244.resume(), this.fn(1);
      },
      oe: function () {
        v___28255 = v_e_28244.currentTime;
      },
      tk: function () {
        return v___28255;
      },
      fn: function (v_t_28258) {
        v_u_28253 = v_t_28258, v_f_28254 || v_i_28245.gain.setValueAtTime(v_u_28253, v___28255);
      },
      bv: function (v_t_28259) {
        v_f_28254 = v_t_28259, v_i_28245.gain.setValueAtTime(v_f_28254 ? 0 : v_u_28253, v___28255);
      },
      ek: function (v_t_28260) {
        return v_r_28247 && v_r_28247.disconnect(), v_r_28247 = void 0, (v_t_28260 ? ((v_r_28247 = new BiquadFilterNode(v_e_28244, v_t_28260)).gain.exponentialRampToValueAtTime, v_n_28246.disconnect(), v_n_28246.connect(v_r_28247), v_r_28247) : (v_n_28246.disconnect(), v_n_28246)).connect(v_e_28244.destination), v_r_28247;
      },
      Q4: function (v_t_28261) {
        return new Promise(v_i_28262 => {
          v_$r_27975.it(v_t_28261, async v_t_28263 => {
            v_i_28262(null === v_t_28263 ? 0 : await this.mv(v_t_28263));
          });
        });
      },
      Sv: function (v_e_28264) {
        return new Promise(v_t_28265 => {
          let v_i_28266 = new FileReader();
          v_i_28266.onloadend = async () => {
            v_t_28265(await this.mv(v_i_28266.result));
          }, v_i_28266.readAsArrayBuffer(v_e_28264);
        });
      },
      mv: function (v_t_28267) {
        return new Promise(v_i_28268 => {
          null === v_t_28267 ? v_i_28268(0) : v_e_28244.decodeAudioData(v_t_28267.buffer || v_t_28267, function (v_t_28269) {
            v_t_28269 = new v_h_28256(v_t_28269);
            v_s_28248.set(v_a_28249, v_t_28269), v_l_28251.set(v_a_28249, new v_C1_27890(v_t_28269.th)), ++v_a_28249, v_i_28268(v_a_28249 - 1);
          }, () => v_i_28268(0));
        });
      },
      e6: function (v_t_28270) {
        return !!v_s_28248.has(v_t_28270) && (v_l_28251.delete(v_t_28270), v_s_28248.get(v_t_28270).kv(), v_s_28248.delete(v_t_28270), !0);
      },
      dn: function (v_i_28271, v_e_28272) {
        if (v_s_28248.has(v_i_28271)) {
          let v_t_28273 = v_s_28248.get(v_i_28271);
          v_t_28273.o1() || (v_e_28272 ? v_uo_28102(() => {
            v_t_28273.wv = !0, v_t_28273.A6 = v___28255, v_t_28273.pv(), v_t_28273.vv.start(0, v_t_28273.l6);
          }, v_e_28272) : (v_t_28273.wv = !0, v_t_28273.A6 = v___28255, v_t_28273.pv(), v_t_28273.vv.start(0, v_t_28273.l6)), v_o_28250 && v_o_28250.dn(v_l_28251.get(v_i_28271)));
        }
      },
      i6: function (v_t_28274) {
        var v_i_28275;
        v_s_28248.has(v_t_28274) && ((v_i_28275 = v_s_28248.get(v_t_28274)).wv = !1, v_i_28275.l6 = 0, v_i_28275.vv && (v_i_28275.vv.stop(0), v_i_28275.vv = void 0), v_i_28275.gv.gain.cancelScheduledValues(v___28255), v_i_28275.gv.gain.setValueAtTime(v_i_28275.Mc, v___28255), v_o_28250) && v_o_28250.i6(v_l_28251.get(v_t_28274));
      },
      Mc: function (v_t_28276, v_i_28277) {
        var v_e_28278;
        v_s_28248.has(v_t_28276) && ((v_e_28278 = v_s_28248.get(v_t_28276)).gv.gain.cancelScheduledValues(v___28255), v_e_28278.gv.gain.setValueAtTime(v_i_28277, v___28255), v_e_28278.Mc = v_i_28277, v_o_28250 ? v_o_28250.Mc(v_l_28251.get(v_t_28276), v_i_28277) : v_l_28251.get(v_t_28276).Mc = v_i_28277);
      },
      n6: function (v_t_28279, v_i_28280, v_e_28281) {
        var v_n_28282;
        v_s_28248.has(v_t_28279) && ((v_n_28282 = v_s_28248.get(v_t_28279)).gv.gain.cancelScheduledValues(v___28255), v_n_28282.gv.gain.setValueAtTime(v_n_28282.Mc, v___28255), v_n_28282.gv.gain.linearRampToValueAtTime(v_i_28280, v___28255 + v_e_28281 / 1e3), v_n_28282.Mc = v_i_28280, v_o_28250) && v_o_28250.n6(v_l_28251.get(v_t_28279), v_i_28280, v_e_28281);
      },
      o6: function (v_t_28283, v_i_28284) {
        var v_e_28285;
        v_s_28248.has(v_t_28283) && ((v_e_28285 = v_s_28248.get(v_t_28283)).l6 = v_i_28284, v_e_28285.o1() && (this.i6(v_t_28283), this.dn(v_t_28283)), v_l_28251.get(v_t_28283).l6 = mathFloor(v_i_28284 * v_c_28252));
      },
      o1: function (v_t_28286) {
        if (v_s_28248.has(v_t_28286)) return v_s_28248.get(v_t_28286).o1();
      },
      u6: function (v_t_28287, v_i_28288, v_e_28289) {
        var v_n_28290;
        v_s_28248.has(v_t_28287) && ((v_n_28290 = v_s_28248.get(v_t_28287)).vv && (v_n_28290.vv.loop = v_i_28288, v_n_28290.vv.loopStart = v_i_28288 ? (v_e_28289 || 0) / 1e3 : 0, v_n_28290.vv.loopEnd = v_n_28290.th.duration), v_n_28290._6 = v_i_28288 ? (v_e_28289 || 0) / 1e3 : -1, v_l_28251.get(v_t_28287)._6 = v_i_28288 ? mathFloor((v_e_28289 || 0) * v_c_28252 / 1e3) : -1);
      },
      v6: function (v_t_28291, v_i_28292) {
        var v_e_28293;
        v_s_28248.has(v_t_28291) && ((v_e_28293 = v_s_28248.get(v_t_28291)).vv && v_e_28293.vv.playbackRate.setValueAtTime(v_i_28292, v___28255), v_e_28293.b1 = v_i_28292, v_l_28251.get(v_t_28291).b1 = v_i_28292);
      },
      w6: function (v_t_28294) {
        if (v_s_28248.has(v_t_28294)) return 1e3 * v_s_28248.get(v_t_28294).th.duration;
      },
      p6: function () {
        v_o_28250 = new v_T1_27891(v_c_28252, 60), this.bv(!0);
      },
      k6: function () {
        if (v_o_28250) return v_o_28250.b6(), v_o_28250.m6(), v_o_28250.S6();
      },
      dv: function () {
        return 2 * mathFloor(v_c_28252 / 60) * 2;
      },
      C6: function () {
        v_o_28250 = void 0, this.bv(!1);
      },
      y6: function () {
        return v_c_28252;
      }
    };
  }();