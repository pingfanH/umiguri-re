// 模块: ledOutput
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createLedOutput(scope) {
  let v_s_28540 = 0,
    v_n_28541 = new Array(16).fill([0, 0, 0]),
    v_r_28542 = new Array(15).fill([0, 0, 0]),
    v_a_28543 = new Array(6).fill([0, 0, 0]),
    v_i_28544 = new Array(102).fill(0),
    v_o_28545 = !1,
    v_e_28546 = Array.from({
      length: 38
    }).fill(0),
    v_l_28547,
    v_c_28548 = !1;
  const v_u_28549 = 1,
    v_f_28550 = 27,
    v___28551 = 40,
    v_h_28552 = 41;
  function v_t_28553(v_t_28557, v_i_28558) {
    v_c_28548 && !scope.v_g_27563 && v_l_28547.send(Uint8Array.from([v_u_28549, v_t_28557, v_i_28558.length].concat(v_i_28558)));
  }
  function v_d_28554() {
    v_t_28553(16, [63].concat(v_i_28544));
  }
  function v_v_28555(v_t_28559) {
    var v_i_28560 = new Uint8Array(v_t_28559.data);
    if (!(v_i_28560.byteLength < 3 || v_i_28560[2] > v_i_28560.byteLength - 3)) if (v_i_28560[1] === v___28551) v_o_28545 = !0;else if (v_i_28560[1] === v_h_28552) v_o_28545 = !1;else if (v_i_28560[1] === v_f_28550 && v_o_28545) for (let v_t_28561 = 0; v_t_28561 < scope.mathMin(v_i_28560.byteLength - 3, 38); ++v_t_28561) v_e_28546[v_t_28561] = v_i_28560[v_t_28561 + 3];
  }
  async function v_w_28556() {
    var v_t_28562, v_i_28563, v_r_28564;
    return !(v_s_28540 <= 0) && (await new Promise(v_i_28565 => {
      let v_e_28566 = !((v_l_28547 = new WebSocket("ws://localhost:" + v_s_28540)).binaryType = "arraybuffer"),
        v_n_28567 = scope.v_uo_28102(() => {
          v_e_28566 || (v_c_28548 = !1, v_i_28565(!1));
        }, 2e3);
      v_l_28547.onopen = function (v_t_28568) {
        v_e_28566 || (v_l_28547.onopen = void 0, v_e_28566 = !0, clearTimeout(v_n_28567), v_i_28565(!0));
      }, v_l_28547.onerror = function (v_t_28569) {
        v_e_28566 || (v_l_28547.onopen = void 0, v_c_28548 = !1, clearTimeout(v_n_28567), v_i_28565(!1));
      }, v_l_28547.onclose = function (v_t_28570) {
        v_l_28547 = void 0, v_o_28545 = !1, v_c_28548 = !1, v_w_28556();
      };
    })) ? (await new Promise(v_i_28571 => {
      let v_e_28572 = scope.mathRound(255 * scope.mathRandom()),
        v_n_28573 = scope.mathRound(255 * scope.mathRandom()),
        v_r_28574 = scope.mathRound(255 * scope.mathRandom()),
        v_s_28575 = scope.mathRound(255 * scope.mathRandom()),
        v_a_28576 = null,
        v_t_28577 = 0;
      v_l_28547.onmessage = function (v_t_28578) {
        v_t_28578 = new Uint8Array(v_t_28578.data);
        v_t_28578[0] === v_u_28549 && 26 === v_t_28578[1] && 6 === v_t_28578[2] && v_t_28578[3] === v_e_28572 && v_t_28578[4] === v_n_28573 && v_t_28578[5] === v_r_28574 && v_t_28578[6] === v_s_28575 && 81 === v_t_28578[7] && 237 === v_t_28578[8] && (clearInterval(v_a_28576), v_l_28547.onmessage = void 0, v_i_28571(!0));
      }, v_a_28576 = setInterval(function () {
        10 < v_t_28577 ? (clearInterval(v_a_28576), v_l_28547.onmessage = void 0, v_l_28547.close(), v_i_28571(!1)) : (v_l_28547.send(Uint8Array.from([v_u_28549, 18, 4, v_e_28572, v_n_28573, v_r_28574, v_s_28575])), v_t_28577++);
      }, 500);
    })) ? (v_t_28562 = 17, v_i_28563 = [], v_r_28564 = 25, await new Promise(v_e_28579 => {
      v_l_28547.send(Uint8Array.from([v_u_28549, v_t_28562, v_i_28563.length].concat(v_i_28563)));
      let v_n_28580 = v_t_28581 => {
        v_l_28547.removeEventListener("message", v_n_28580);
        var v_i_28582 = new Uint8Array(v_t_28581.data);
        v_i_28582.byteLength < 3 || v_i_28582[2] > v_i_28582.byteLength - 3 || 0 < v_r_28564 && v_i_28582[1] !== v_r_28564 ? v_e_28579(null) : v_e_28579(new Uint8Array(v_t_28581.data));
      };
      v_l_28547.addEventListener("message", v_n_28580);
    }), v_c_28548 = !0, v_l_28547.addEventListener("message", v_v_28555), 0) : 1 : 2;
  }
  return {
    ue: async function (v_t_28583) {
      this.iv(), v_s_28540 = scope.v_Pe_28064(scope.handshake.rm.y7);
      var v_i_28584 = await v_w_28556();
      0 !== v_i_28584 ? v_t_28583(v_i_28584) : (setInterval(v_d_28554, 2 / 60 * 1e3), v_t_28583(0));
    },
    Qe: function (v_t_28585, v_i_28586, v_e_28587) {
      v_t_28585 === scope.v_z0_27799 ? v_i_28586 < 0 || 15 < v_i_28586 || (v_n_28541[v_i_28586] = [scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[0]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[1]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[2]), 0), 254)]) : v_t_28585 === scope.v_K0_27800 ? v_i_28586 < 0 || 14 < v_i_28586 || (v_r_28542[v_i_28586] = [scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[0]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[1]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[2]), 0), 254)]) : 2 !== v_t_28585 || v_i_28586 < 0 || 6 < v_i_28586 || (v_a_28543[v_i_28586] = [scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[0]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[1]), 0), 254), scope.mathMin(scope.mathMax(scope.mathRound(v_e_28587[2]), 0), 254)]);
    },
    iv: function (v_t_28588) {
      v_n_28541 = v_n_28541.fill([0, 0, 0]), v_r_28542 = v_r_28542.fill([0, 0, 0]), v_t_28588 && (v_a_28543 = v_a_28543.fill([0, 0, 0]));
    },
    oe: function () {
      if (scope.boardLanes) scope.boardLanes.T7(v_n_28541, v_r_28542), scope.boardAir && scope.boardAir.d9(v_a_28543);else if (v_c_28548) {
        for (let v_t_28589 = 0; v_t_28589 < 16; ++v_t_28589) v_i_28544[3 * v_t_28589] = v_n_28541[v_t_28589][0], v_i_28544[3 * v_t_28589 + 1] = v_n_28541[v_t_28589][1], v_i_28544[3 * v_t_28589 + 2] = v_n_28541[v_t_28589][2];
        for (let v_t_28590 = 0; v_t_28590 < 15; ++v_t_28590) v_i_28544[48 + 3 * v_t_28590] = v_r_28542[v_t_28590][0], v_i_28544[48 + 3 * v_t_28590 + 1] = v_r_28542[v_t_28590][1], v_i_28544[48 + 3 * v_t_28590 + 2] = v_r_28542[v_t_28590][2];
        for (let v_t_28591 = 0; v_t_28591 < 3; ++v_t_28591) v_i_28544[93 + 3 * v_t_28591] = v_a_28543[v_t_28591][0], v_i_28544[93 + 3 * v_t_28591 + 1] = v_a_28543[v_t_28591][1], v_i_28544[93 + 3 * v_t_28591 + 2] = v_a_28543[v_t_28591][2];
      }
    },
    nv: function (v_t_28592) {
      return {
        main: v_n_28541,
        border: v_r_28542,
        side: v_a_28543
      };
    },
    rv: function (v_r_28593) {
      !v_c_28548 || scope.v_g_27563 ? scope.v_Fe_28101(() => v_r_28593(null)) : (v_l_28547.addEventListener("message", function v_t_28595(v_i_28594) {
        let v_n_28596 = new Uint8Array(v_i_28594.data);
        if (v_n_28596[0] === v_u_28549 && 216 === v_n_28596[1]) {
          v_l_28547.removeEventListener("message", v_t_28595);
          let v_i_28597 = "",
            v_e_28598 = "";
          for (let v_t_28599 = 0; v_t_28599 < 16 && void 0 !== v_n_28596[v_t_28599 + 3] && 0 !== v_n_28596[v_t_28599 + 3]; ++v_t_28599) v_i_28597 += String.fromCharCode(v_n_28596[v_t_28599 + 3]);
          for (let v_t_28600 = 0; v_t_28600 < 16 && void 0 !== v_n_28596[v_t_28600 + 25] && 0 !== v_n_28596[v_t_28600 + 25]; ++v_t_28600) v_e_28598 += String.fromCharCode(v_n_28596[v_t_28600 + 25]);
          scope.v_Fe_28101(() => v_r_28593({
            av: v_i_28597,
            sv: [v_n_28596[20] << 8 | v_n_28596[19], v_n_28596[22] << 8 | v_n_28596[21]],
            ov: v_e_28598,
            cv: [v_n_28596[42] << 8 | v_n_28596[41], v_n_28596[44] << 8 | v_n_28596[43]]
          }));
        }
      }), v_t_28553(208, []));
    },
    Bt: function () {
      return v_c_28548;
    },
    Q6: function () {
      return v_o_28545;
    },
    ev: function () {
      return v_e_28546;
    }
  };
}
