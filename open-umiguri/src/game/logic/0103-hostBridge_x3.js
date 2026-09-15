// game: 语句 103 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const hostBridge = function () {
      let v_s_33263 = window.umgr_elc.st;
      function v_a_33264(v_t_33265) {
        return "function" == typeof v_t_33265 && v_t_33265(), !1;
      }
      return {
        ue: async (v_t_33266, v_i_33267) => {
          v_t_33266();
        },
        zu: async (v_t_33268, v_i_33269, v_e_33270) => {
          v_t_33268 = await v_s_33263.zu(v_t_33268);
          if (0 !== v_t_33268.status) return v_a_33264(v_e_33270);
          v_i_33269(v_t_33268.data);
        },
        Qf: async (v_t_33271, v_i_33272) => {
          var v_e_33273 = await v_s_33263.Qf();
          if (0 !== v_e_33273.status) return v_a_33264(v_i_33272);
          v_t_33271(v_e_33273.data.used, v_e_33273.data.free, v_e_33273.data.cap);
        },
        e2: async (v_t_33274, v_i_33275, v_e_33276) => {
          v_t_33274 = await v_s_33263.e2(v_t_33274);
          if (0 !== v_t_33274.status) return v_a_33264(v_e_33276);
          v_i_33275(v_t_33274.data);
        },
        yl: async (v_t_33277, v_i_33278, v_e_33279, v_n_33280) => {
          v_t_33277 = await v_s_33263.yl(v_t_33277, v_i_33278);
          if (0 !== v_t_33277.status) return v_a_33264(v_n_33280);
          v_e_33279(v_t_33277.data);
        },
        i2: async (v_t_33281, v_i_33282, v_e_33283, v_n_33284) => {
          v_t_33281 = await v_s_33263.i2(v_t_33281, v_i_33282);
          if (0 !== v_t_33281.status) return v_a_33264(v_n_33284);
          v_e_33283(v_t_33281.data);
        },
        n2: async (v_t_33285, v_i_33286, v_e_33287) => {
          v_t_33285 = await v_s_33263.n2(v_t_33285);
          if (0 !== v_t_33285.status) return v_a_33264(v_e_33287);
          v_i_33286(v_t_33285.data);
        },
        o2: async (v_t_33288, v_i_33289, v_e_33290, v_n_33291, v_r_33292) => {
          v_t_33288 = await v_s_33263.o2(v_t_33288, v_i_33289, v_e_33290);
          if (0 !== v_t_33288.status) return v_a_33264(v_r_33292);
          v_n_33291(v_t_33288.data);
        },
        l2: async (v_t_33293, v_i_33294, v_e_33295, v_n_33296, v_r_33297) => {
          v_t_33293 = await v_s_33263.l2(v_t_33293, v_i_33294, v_e_33295);
          if (0 !== v_t_33293.status) return v_a_33264(v_r_33297);
          v_n_33296(v_t_33293.data);
        },
        _2: async (v_t_33298, v_i_33299, v_e_33300) => {
          v_t_33298 = await v_s_33263._2(v_t_33298);
          if (0 !== v_t_33298.status) return v_a_33264(v_e_33300);
          v_i_33299(v_t_33298.data.val);
        },
        qu: async (v_t_33301, v_i_33302, v_e_33303) => {
          v_t_33301 = await v_s_33263.sn(v_t_33301);
          if (0 !== v_t_33301.status) return v_a_33264(v_e_33303);
          v_i_33302(new Blob([v_t_33301.data], {
            type: "application/octet-stream"
          }));
        },
        xl: async (v_t_33304, v_i_33305, v_e_33306, v_n_33307, v_r_33308) => {
          v_t_33304 = await v_s_33263.xl(v_t_33304, v_i_33305, v_e_33306);
          if (0 !== v_t_33304.status) return v_a_33264(v_r_33308);
          v_n_33307(v_t_33304.data);
        },
        Xu: async (v_t_33309, v_i_33310, v_e_33311, v_n_33312, v_r_33313) => {
          v_t_33309 = await v_s_33263.Xu(v_t_33309, v_i_33310);
          if (0 !== v_t_33309.status) return v_a_33264(v_r_33313);
          v_n_33312(v_t_33309.data.entry, v_t_33309.data.writer);
        }
      };
    }(),
    v_$r_27975 = {
      Ic: function (v_t_33314, v_e_33315) {
        hostBridge.qu(v_t_33314, function (v_t_33316) {
          let v_i_33317 = new FileReader();
          v_i_33317.onload = () => v_e_33315(v_i_33317.result), v_i_33317.onerror = () => v_e_33315(null), v_i_33317.readAsText(v_t_33316);
        }, () => v_e_33315(null));
      },
      xi: function (v_t_33318, v_e_33319) {
        hostBridge.qu(v_t_33318, function (v_t_33320) {
          let v_i_33321 = new FileReader();
          v_i_33321.onload = () => {
            var v_t_33322 = new DOMParser().parseFromString(v_i_33321.result, "application/xml");
            "parsererror" === v_t_33322.documentElement.nodeName ? v_e_33319(null) : v_e_33319(v_t_33322);
          }, v_i_33321.onerror = () => v_e_33319(null), v_i_33321.readAsText(v_t_33320);
        }, () => v_e_33319(null));
      },
      it: function (v_t_33323, v_e_33324) {
        hostBridge.qu(v_t_33323, function (v_t_33325) {
          let v_i_33326 = new FileReader();
          v_i_33326.onload = () => v_e_33324(v_i_33326.result), v_i_33326.onerror = () => v_e_33324(null), v_i_33326.readAsArrayBuffer(v_t_33325);
        }, () => v_e_33324(null));
      }
    },
    systemMisc = function () {
      let v_n_33327 = window.umgr_elc.si,
        v_e_33328 = getCurrentProcessId(),
        v_s_33329 = void 0;
      return v_n_33327.a4(function (v_t_33330, v_i_33331, v_e_33332, v_n_33333, v_r_33334) {
        v_s_33329 && v_s_33329(v_i_33331, v_e_33332, v_n_33333, v_r_33334);
      }), {
        Vu: async (v_t_33335, v_i_33336) => {
          v_n_33327.Vu(v_t_33335, v_i_33336), v_R_27641 = v_t_33335 + "x" + v_i_33336;
        },
        w2: async () => {
          v_n_33327.w2();
        },
        b2: async v_t_33337 => {
          v_n_33327.se(v_t_33337);
        },
        m2: async v_t_33338 => {
          v_n_33327.sr(v_t_33338);
        },
        S2: async () => {
          v_n_33327.S2();
        },
        I2: async (v_t_33339, v_i_33340) => {
          v_n_33327.fc(v_t_33339, v_i_33340);
        },
        uv: async () => v_n_33327.sc(),
        O6: async (v_t_33341, v_i_33342, v_e_33343) => v_n_33327.jc(v_t_33341, v_i_33342, v_e_33343, 60),
        z6: async (v_t_33344, v_i_33345) => {
          await v_n_33327.ss(v_e_33328, v_t_33344, v_i_33345);
        },
        K6: async () => {
          await v_n_33327.so();
        },
        Fp: () => new Promise(v_e_33346 => {
          v_n_33327.xo(function (v_t_33347, v_i_33348) {
            v_e_33346(v_i_33348);
          });
        }),
        OR: (v_t_33349, v_i_33350) => {
          v_t_33349 ? v_n_33327.r4(v_i_33350) : v_n_33327.f4(v_i_33350);
        },
        kb: async v_t_33351 => v_n_33327.sp(v_t_33351),
        Xk: async v_t_33352 => {
          v_s_33329 = v_t_33352;
          v_t_33352 = await v_n_33327.op();
          return v_s_33329 = void 0, v_t_33352;
        },
        qk: () => {
          v_n_33327.t4();
        },
        cg: async v_t_33353 => {
          await v_n_33327.s4(v_t_33353);
        },
        ug: v_t_33354 => {
          v_n_33327.d4(v_t_33354);
        },
        t2: () => v_n_33327.t2(),
        sa: () => v_n_33327.sa()
      };
    }(),
    v_ts_27977 = function () {
      let v_i_33355 = window.umgr_elc.g4,
        v_e_33356 = [],
        v_n_33357 = void 0;
      return v_i_33355.x4(function (v_t_33358, v_i_33359) {
        v_n_33357 && v_n_33357(v_i_33359);
      }), {
        m4: async v_t_33360 => {
          v_e_33356 = await v_i_33355.jc(v_Hi_27855, v_t_33360);
        },
        u4: async v_t_33361 => (v_n_33357 = v_t_33361, v_i_33355.ss()),
        _4: async v_t_33362 => (v_n_33357 = v_t_33362, v_i_33355.so()),
        v4: async () => {
          await v_i_33355.xo();
        },
        w4: () => v_e_33356,
        S4: () => 0 < v_e_33356.length,
        L4: async v_t_33363 => {
          await v_i_33355.sp(v_t_33363);
        }
      };
    }();