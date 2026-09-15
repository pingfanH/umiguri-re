// game: 语句 102 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Yr_27972.prototype = {
    read: function (v_t_33197, v_n_33198, v_e_33199) {
      let v_m_33200 = this,
        v_p_33201 = {
          Yf: [],
          Rf: []
        },
        v_s_33202 = {
          Yf: {},
          Rf: {}
        };
      v_Le_28076([function (v_i_33203) {
        v_$r_27975.Ic(v_t_33197, function (v_t_33204) {
          null === v_t_33204 ? v_e_33199(!1) : (function (v_t_33205) {
            let v_i_33206 = v_t_33205.replace(/\r\n/g, "\n").split("\n"),
              v_e_33207,
              v_r_33208 = {},
              v_n_33209 = null,
              v_s_33210 = null,
              v_a_33211 = "",
              v_o_33212 = 0;
            for (const v___33217 of v_i_33206) if ("'" !== v___33217.substr(0, 1)) {
              if (0 === (v_e_33207 = v___33217.split("\t")).length) return;
              if ("" !== v_a_33211) {
                if ("END_DATA" === v_e_33207[0]) v_e_33207.length < 1 || !v_n_33209 || (v_a_33211 = "");else switch (v_a_33211) {
                  case "VTX":
                    for (const v_h_33218 of v_e_33207) "" !== v_h_33218 && v_s_33210.Hf.push(v_Re_28066(v_h_33218));
                    break;
                  case "UV":
                    for (const v_d_33219 of v_e_33207) "" !== v_d_33219 && v_s_33210.Uf.push(v_Re_28066(v_d_33219));
                    break;
                  case "TRI":
                    for (const v_v_33220 of v_e_33207) "" !== v_v_33220 && v_s_33210.Vf.push(v_Pe_28064(v_v_33220));
                    break;
                  case "DIF":
                    for (const v_w_33221 of v_e_33207) "" !== v_w_33221 && v_s_33210.Of.push(v_Re_28066(v_w_33221));
                    break;
                  case "NRM":
                    for (const v_g_33222 of v_e_33207) "" !== v_g_33222 && v_s_33210.Jf.push(v_Re_28066(v_g_33222));
                }
              } else switch (v_e_33207[0]) {
                case "OBJ":
                  v_n_33209 && v_f_33216(v_n_33209, v_s_33210), v_e_33207.length < 1 || "" === v_e_33207[1] ? (v_n_33209 = null, v_s_33210 = null) : (v_n_33209 = new v_Kr_27971(), v_s_33210 = new v_qr_27973(), v_n_33209.Ae = v_e_33207[1], v_m_33200.Nf.push(v_n_33209), v_r_33208[v_n_33209.Ae] = v_n_33209), v_a_33211 = "";
                  break;
                case "USE":
                  if (!(v_e_33207.length < 1) && v_n_33209) switch (v_e_33207[1]) {
                    case "DEPTH_TEST":
                      v_n_33209.If = !0;
                      break;
                    case "DEPTH_WRITE":
                      v_n_33209.yf = !0;
                      break;
                    case "UV":
                      v_n_33209.Cf = !0;
                      break;
                    case "TRI":
                      v_n_33209.Af = !0;
                      break;
                    case "DIF":
                      v_n_33209.Tf = !0;
                      break;
                    case "NRM":
                      v_n_33209.Lf = !0;
                  }
                  break;
                case "BLEND":
                  v_e_33207.length < 1 || !v_n_33209 || (v_n_33209.Bf = "ADD" === v_e_33207[1]);
                  break;
                case "TEX":
                  if (!(v_e_33207.length < 7) && v_n_33209) {
                    var v_l_33213 = v_Pe_28064(v_e_33207[1]);
                    if (!(v_l_33213 < 0 || 7 < v_l_33213)) {
                      let v_i_33223 = {
                        magFilter: v_se_27562.NEAREST,
                        minFilter: v_se_27562.LINEAR,
                        wrapS: v_se_27562.CLAMP_TO_EDGE,
                        wrapT: v_se_27562.CLAMP_TO_EDGE
                      };
                      switch (v_e_33207[3]) {
                        case "CLAMP":
                          v_i_33223.wrapS = v_se_27562.CLAMP_TO_EDGE;
                          break;
                        case "REPEAT":
                          v_i_33223.wrapS = v_se_27562.REPEAT;
                          break;
                        case "MIRROR":
                          v_i_33223.wrapS = v_se_27562.MIRRORED_REPEAT;
                      }
                      switch (v_e_33207[4]) {
                        case "CLAMP":
                          v_i_33223.wrapT = v_se_27562.CLAMP_TO_EDGE;
                          break;
                        case "REPEAT":
                          v_i_33223.wrapT = v_se_27562.REPEAT;
                          break;
                        case "MIRROR":
                          v_i_33223.wrapT = v_se_27562.MIRRORED_REPEAT;
                      }
                      switch (v_e_33207[5]) {
                        case "NEAREST":
                          v_i_33223.minFilter = v_se_27562.NEAREST;
                          break;
                        case "LINEAR":
                          v_i_33223.minFilter = v_se_27562.LINEAR;
                          break;
                        case "MIP_NEAREST":
                          v_i_33223.minFilter = v_se_27562.NEAREST_MIPMAP_NEAREST;
                          break;
                        case "MIP_LINEAR":
                          v_i_33223.minFilter = v_se_27562.NEAREST_MIPMAP_LINEAR;
                          break;
                        case "MIP_NEAREST2":
                          v_i_33223.minFilter = v_se_27562.LINEAR_MIPMAP_NEAREST;
                          break;
                        case "MIP_LINEAR2":
                          v_i_33223.minFilter = v_se_27562.LINEAR_MIPMAP_LINEAR;
                      }
                      switch (v_e_33207[6]) {
                        case "NEAREST":
                          v_i_33223.magFilter = v_se_27562.NEAREST;
                          break;
                        case "LINEAR":
                          v_i_33223.magFilter = v_se_27562.LINEAR;
                      }
                      var v_c_33214 = v_p_33201.Yf.find(v_t_33224 => v_t_33224.$f === v_e_33207[2] && v_t_33224.qf.magFilter === v_i_33223.magFilter && v_t_33224.qf.minFilter === v_i_33223.minFilter && v_t_33224.qf.wrapS === v_i_33223.wrapS && v_t_33224.qf.wrapT === v_i_33223.wrapT);
                      v_c_33214 ? v_n_33209.Pf.push([v_l_33213, v_c_33214.id]) : (++v_o_33212, v_p_33201.Yf.push({
                        Ae: v_o_33212,
                        $f: v_e_33207[2],
                        qf: v_i_33223
                      }), v_n_33209.Pf.push([v_l_33213, v_o_33212]));
                    }
                  }
                  break;
                case "SHADER":
                  v_e_33207.length < 2 || !v_n_33209 || ((v_c_33214 = v_p_33201.Rf.find(v_t_33225 => v_t_33225.$f === v_e_33207[2])) ? v_n_33209.Df.push([v_e_33207[1], v_c_33214.Ae]) : (++v_o_33212, v_p_33201.Rf.push({
                    Ae: v_o_33212,
                    $f: v_e_33207[2]
                  }), v_n_33209.Df.push([v_e_33207[1], v_o_33212])));
                  break;
                case "BEGIN_DATA":
                  v_e_33207.length < 1 || !v_n_33209 || (v_a_33211 = v_e_33207[1]);
                  break;
                case "LINK_DATA":
                  if (!(v_e_33207.length < 2) && v_n_33209) {
                    var v_u_33215 = v_e_33207[2];
                    if (v_r_33208[v_u_33215]) switch (v_e_33207[1]) {
                      case "VTX":
                        v_s_33210.Wf = v_u_33215;
                        break;
                      case "UV":
                        v_s_33210.Kf = v_u_33215;
                        break;
                      case "TRI":
                        v_s_33210.zf = v_u_33215;
                        break;
                      case "DIF":
                        v_s_33210.Xf = v_u_33215;
                        break;
                      case "NRM":
                        v_s_33210.Zf = v_u_33215;
                    }
                  }
              }
            }
            v_n_33209 && v_f_33216(v_n_33209, v_s_33210);
            function v_f_33216(v_t_33226, v_i_33227) {
              var v_e_33228 = {},
                v_n_33229 = {},
                v_e_33228 = ("" !== v_i_33227.Wf && (v_n_33229.vertices = v_r_33208[v_i_33227.Wf].xf), v_t_33226.Cf && (v_e_33228.coords = !0, "" !== v_i_33227.Kf) && (v_n_33229.coords = v_r_33208[v_i_33227.Kf].xf), v_t_33226.Af && (v_e_33228.triangles = !0, "" !== v_i_33227.zf) && (v_n_33229.triangles = v_r_33208[v_i_33227.zf].xf), v_t_33226.Tf && (v_e_33228.colors = !0, "" !== v_i_33227.Xf) && (v_n_33229.colors = v_r_33208[v_i_33227.Xf].xf), v_t_33226.Lf && (v_e_33228.normals = !0, "" !== v_i_33227.Zf) && (v_n_33229.normals = v_r_33208[v_i_33227.Zf].xf), v_t_33226.xf = new m_GL_0.Mesh(v_e_33228), v_t_33226.xf);
              v_n_33229.vertices || (v_e_33228.vertices = Float32Array.from(v_i_33227.Hf).buffer), v_t_33226.Cf && !v_n_33229.coords && (v_e_33228.coords = Float32Array.from(v_i_33227.Uf).buffer), v_t_33226.Af && !v_n_33229.triangles && (v_e_33228.triangles = Uint16Array.from(v_i_33227.Vf).buffer), v_t_33226.Tf && !v_n_33229.colors && (v_e_33228.colors = Float32Array.from(v_i_33227.Of).buffer), v_t_33226.Lf && !v_n_33229.normals && (v_e_33228.normals = Float32Array.from(v_i_33227.Jf).buffer), v_e_33228.use_shared(v_n_33229), v_e_33228.compilef(v_se_27562.STATIC_DRAW, {
                vertices: 3,
                coords: 2,
                colors: 4,
                normals: 4,
                triangles: 3
              });
            }
          }(v_t_33204), v_Me_28078(v_i_33203));
        });
      }, function (v_t_33230) {
        v_oo_28098(v_p_33201.Yf, function (v_i_33231, v_t_33232, v_r_33233) {
          v_$r_27975.it(v_n_33198 + v_r_33233.$f, function (v_t_33234) {
            if (null !== v_t_33234) {
              let v_n_33235 = null;
              v_Io_28120(v_t_33234, !1, function (v_t_33236, v_i_33237, v_e_33238) {
                v_t_33236 === v_xo_28116 ? v_n_33235 = new m_GL_0.Texture(v_i_33237, v_e_33238, v_r_33233.qf) : v_t_33236 === v_Ao_28115 && (v_n_33235 = null);
              }), v_n_33235 && (v_m_33200.jf[v_r_33233.Ae] = v_n_33235);
            }
            v_i_33231();
          });
        }, function () {
          v_Me_28078(v_t_33230);
        });
      }, function (v_t_33239) {
        v_oo_28098(v_p_33201.Rf, function (v_i_33240, v_t_33241, v_e_33242) {
          v_$r_27975.Ic(v_n_33198 + v_e_33242.$f, function (v_t_33243) {
            null !== v_t_33243 && (v_s_33202.Rf[v_e_33242.Ae] = v_t_33243), v_i_33240();
          });
        }, function () {
          v_Me_28078(v_t_33239);
        });
      }, function (v_t_33244) {
        for (const v_i_33245 of v_m_33200.Nf) for (const v_e_33246 of v_i_33245.Pf) v_m_33200.jf[v_e_33246[1]] && v_i_33245.Mf.push([v_e_33246[0], v_m_33200.jf[v_e_33246[1]]]);
        v_Me_28078(v_t_33244);
      }, function (v_t_33247) {
        for (const v_n_33249 of v_m_33200.Nf) {
          let v_t_33250 = -1,
            v_i_33251 = -1;
          for (const v_r_33252 of v_n_33249.Df) "VTX" === v_r_33252[0] ? v_t_33250 = v_r_33252[1] : "FRG" === v_r_33252[0] && (v_i_33251 = v_r_33252[1]);
          var v_e_33248;
          -1 !== v_t_33250 && -1 !== v_i_33251 && void 0 !== v_s_33202.Rf[v_t_33250] && void 0 !== v_s_33202.Rf[v_i_33251] && (v_e_33248 = [v_t_33250, v_i_33251].join(","), v_m_33200.Gf[v_e_33248] || (v_m_33200.Gf[v_e_33248] = new m_GL_0.Shader(v_s_33202.Rf[v_t_33250], v_s_33202.Rf[v_i_33251])), v_n_33249.Rf = v_m_33200.Gf[v_e_33248]);
        }
        v_Me_28078(v_t_33247);
      }, function (v_t_33253) {
        v_e_33199(!0);
      }]);
    },
    draw: function () {
      let v_t_33254 = !1,
        v_i_33255 = !1,
        v_e_33256 = !1;
      for (const v_r_33258 of this.Nf) if (v_r_33258.Rf) {
        v_t_33254 !== v_r_33258.If && (v_r_33258.If ? v_se_27562.enable(v_se_27562.DEPTH_TEST) : v_se_27562.disable(v_se_27562.DEPTH_TEST), v_t_33254 = v_r_33258.If), v_i_33255 !== v_r_33258.last_use_depth_write && (v_se_27562.depthMask(v_r_33258.yf), v_i_33255 = v_r_33258.yf), v_e_33256 !== v_r_33258.Bf && (v_r_33258.Bf ? v_se_27562.blendFunc(v_se_27562.SRC_ALPHA, v_se_27562.ONE) : v_se_27562.blendFunc(v_se_27562.SRC_ALPHA, v_se_27562.ONE_MINUS_SRC_ALPHA), v_e_33256 = v_r_33258.Bf);
        var v_n_33257 = {};
        for (const v_s_33259 of v_r_33258.Mf) v_s_33259[1].bind(v_s_33259[0]), v_n_33257["tex" + v_s_33259[0]] = v_s_33259[0];
        v_r_33258.Rf.uniforms(v_n_33257).draw(v_r_33258.xf);
      }
      v_se_27562.disable(v_se_27562.DEPTH_TEST), v_se_27562.depthMask(!0), v_se_27562.blendFunc(v_se_27562.SRC_ALPHA, v_se_27562.ONE_MINUS_SRC_ALPHA);
    },
    free: function () {
      for (const v_t_33260 of this.Nf) v_t_33260.xf.free();
      this.Nf = [];
      for (const v_i_33261 in this.Gf) this.Gf[v_i_33261].free();
      this.Gf = {};
      for (const v_e_33262 in this.jf) this.jf[v_e_33262].free();
      this.jf = {};
    }
  };