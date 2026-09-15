// game: 语句 245 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Fl_28182.prototype = {
    Zh: function () {
      glContext.bindFramebuffer(glContext.FRAMEBUFFER, this.Wh);
    },
    _5: function () {
      glContext.activeTexture(glContext.TEXTURE0), glContext.bindTexture(glContext.TEXTURE_2D, this.Kh);
    }
  }, v_Fl_28182.Yh = function () {
    glContext.bindFramebuffer(glContext.FRAMEBUFFER, null);
  }, v_Bl_28183.prototype = {
    l5: function () {
      var v_i_35005 = this.Gh,
        v_e_35006 = (this.xf = new v_ho_28105({
          vertices: 4 * v_i_35005 * 3,
          coords: 4 * v_i_35005 * 2,
          texCoord1: 4 * v_i_35005 * 2,
          colors: 4 * v_i_35005 * 4,
          attrTexBrightness: 4 * v_i_35005,
          attrTexGrayscale: 4 * v_i_35005
        }), []);
      for (let v_t_35007 = 0; v_t_35007 < v_i_35005; ++v_t_35007) v_e_35006.push(4 * v_t_35007, 4 * v_t_35007 + 1, 4 * v_t_35007 + 2, 4 * v_t_35007 + 2, 4 * v_t_35007 + 1, 4 * v_t_35007 + 3);
      this.xf.yl({
        triangles: v_e_35006
      }, {
        vertices: 3,
        coords: 2,
        texCoord1: 2,
        triangles: 3,
        colors: 4,
        attrTexBrightness: 1,
        attrTexGrayscale: 1
      }, void 0, v_t_35008 => {
        v_t_35008.addVertexBuffer("attrTexBrightness", "attrTexBrightness"), v_t_35008.addVertexBuffer("attrTexGrayscale", "attrTexGrayscale"), v_t_35008.addVertexBuffer("texCoord1", "texCoord1");
      }), this.t5 = new glRuntime.Mesh({
        colors: !0,
        coords: !0
      }), this.t5.vertices = [[-1, 1, 0], [1, 1, 0], [-1, -1, 0], [1, -1, 0]], this.t5.colors = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], this.t5.coords = [[0, 1], [1, 1], [0, 0], [1, 0]], this.t5.triangles = [[0, 1, 2], [2, 1, 3]], this.t5.compile(), this.X6 = new glRuntime.Mesh({
        colors: !0,
        coords: !0
      }), this.X6.vertices = [[-1, 1, 0], [1, 1, 0], [-1, -1, 0], [1, -1, 0]], this.X6.colors = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], this.X6.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], this.X6.triangles = [[0, 1, 2], [2, 1, 3]], this.X6.compile(), this.jh = new v_ho_28105({
        vertices: 12,
        coords: 8,
        colors: 16
      }), this.jh.yl({
        triangles: [0, 1, 2, 2, 1, 3],
        attrRelPosition: [0, 0, 1, 0, 0, 1, 1, 1]
      }, {
        vertices: 3,
        coords: 2,
        triangles: 3,
        colors: 4,
        attrRelPosition: 2
      }, void 0, v_t_35009 => {
        v_t_35009.addVertexBuffer("attrRelPosition", "attrRelPosition");
      });
    },
    u5: function () {
      this.Vh.Yf = v_S_27621, this.Vh.Jh = v_A_27622, this.Vh.Oh = v_C_27624, this.Vh.Rb = v_x_27623, this.Vh.Fe = v_d_27605, this.Vh.Uh = v_w_27607, this.Vh.D_ = v_b_27620, this.Vh.$h = v_v_27606, this.Dh = new v_Eo_28125();
    },
    f5: function () {
      this.qh.Qh = new v_Fl_28182(v_yn_27656, v_Sn_27657, 49), this.qh.e5 = new v_Fl_28182(v_yn_27656, v_Sn_27657, 50);
    },
    Cc: function (v_t_35010) {
      0 === v_t_35010 ? v_Fl_28182.Yh() : 1 === v_t_35010 ? this.qh.Qh.Zh() : 2 === v_t_35010 && this.qh.e5.Zh();
    },
    Nh: function (v_t_35011) {
      1 === v_t_35011 ? this.qh.Qh._5() : 2 === v_t_35011 && this.qh.e5._5();
    },
    y4: function (v_t_35012, v_s_35013) {
      languagePackages.it(v_t_35012, v_t_35014 => {
        if (v_t_35014) {
          var v_i_35015 = new v_Po_28121(v_t_35014);
          if (v_i_35015.i3("utf-8"), 1414747730 !== v_i_35015.v3()) return null;
          if (1 !== v_i_35015.u3()) return null;
          v_i_35015.y3(2);
          var v_e_35016 = v_i_35015.v3();
          for (let v_t_35019 = 0; v_t_35019 < v_e_35016; ++v_t_35019) {
            var v_n_35017 = v_i_35015.Ic(),
              v_r_35018 = v_i_35015.Ic();
            this.C4[v_n_35017] = v_r_35018;
          }
        }
        v_s_35013();
      });
    },
    b4: function (v_t_35020) {
      v_t_35020 = this.C4[v_t_35020];
      return void 0 === v_t_35020 ? "## RVS STRING ERROR ##" : v_t_35020;
    },
    d5: function (v_a_35021, v_i_35022) {
      v_a_35021.xd ? v_i_35022 && v_i_35022() : v_Le_28076([v_t_35023 => {
        var v_i_35024 = Object.keys(v_a_35021.Mf);
        let v_s_35025;
        v_lo_28099(v_i_35024, (v_i_35026, v_t_35027, v_e_35028) => {
          if (v_s_35025 = v_a_35021.Mf[v_e_35028].ed, this.Mf[v_s_35025]) v_i_35026();else {
            let v_r_35029 = v_a_35021.Mf[v_e_35028];
            languagePackages.it(v_s_35025, v_t_35030 => {
              if (v_t_35030) {
                let v_n_35031 = null;
                v_Io_28120(v_t_35030, !1, (v_t_35032, v_i_35033, v_e_35034) => {
                  v_t_35032 === v_xo_28116 ? (v_n_35031 = new glRuntime.Texture(v_i_35033, v_e_35034, {
                    wrapS: v_r_35029.td ? glContext.REPEAT : glContext.CLAMP_TO_EDGE,
                    wrapT: v_r_35029.nd ? glContext.REPEAT : glContext.CLAMP_TO_EDGE,
                    format: glContext.RGBA
                  }), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_35032 === v_Ao_28115 && (v_n_35031 = null);
                }), v_n_35031 && (this.Mf[v_s_35025] = v_n_35031);
              }
              v_i_35026();
            });
          }
        }, () => {
          v_Me_28078(v_t_35023);
        });
      }, async v_t_35035 => {
        for (var v_i_35036 in v_a_35021.Id) {
          var v_e_35037,
            v_i_35036 = v_a_35021.Id[v_i_35036].ed;
          this.Id[v_i_35036] || (v_e_35037 = await languagePackages.ck(v_i_35036), this.Id[v_i_35036] = await v_Mo_28124.A3(v_e_35037));
        }
        v_Me_28078(v_t_35035);
      }, v_t_35038 => {
        v_ao_28097(v_a_35021.yd, (v_i_35039, v_t_35040) => {
          var v_e_35041 = new v_Fo_28127();
          v_e_35041.W3(this.Dh), v_e_35041.O3(this.Vh.D_), v_e_35041.J3(this.Vh.$h);
          let v_n_35042 = !1;
          for (let v_t_35045 = 0; v_t_35045 < v_i_35039.ad.length; ++v_t_35045) {
            var v_r_35043 = v_a_35021.Id[v_i_35039.ad[v_t_35045].sd];
            if (!v_r_35043) {
              v_n_35042 = !0;
              break;
            }
            v_r_35043 = this.Id[v_r_35043.ed];
            if (!v_r_35043) {
              v_n_35042 = !0;
              break;
            }
            var v_s_35044 = new v_Do_28126();
            v_s_35044.R_ = v_i_35039.ad[v_t_35045].R_, v_s_35044.P_ = v_i_35039.ad[v_t_35045].P_, v_s_35044.D_ = v_r_35043, v_s_35044.G_ = v_i_35039.ad[v_t_35045].G_, v_s_35044.j_ = v_i_35039.ad[v_t_35045].j_, v_e_35041.K3(v_s_35044);
          }
          v_n_35042 || (v_e_35041.N_.length && v_e_35041.K3(this.Vk.Hk(v_e_35041.N_[0].D_.g_)), v_a_35021.Td[v_t_35040] = v_e_35041);
        }), v_Me_28078(v_t_35038);
      }, v_t_35046 => {
        glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !0), v_i_35022 && v_i_35022();
      }]);
    },
    h5: async function (v_t_35047) {
      var v_i_35048,
        v_e_35049 = await languagePackages.ck("fonts/Debug.rgf");
      v_e_35049 ? (this.Ph.i5 = await v_Mo_28124.A3(v_e_35049), (v_e_35049 = new v_Fo_28127()).W3(this.Dh), v_e_35049.O3(this.Vh.D_), v_e_35049.J3(this.Vh.$h), (v_i_35048 = new v_Do_28126()).R_ = 0, v_i_35048.P_ = 127, v_i_35048.D_ = this.Ph.i5, v_i_35048.G_ = 1, v_i_35048.j_ = 1, v_e_35049.K3(v_i_35048), this.Ph.n5 = v_e_35049, v_t_35047(!0)) : v_t_35047(!1);
    }
  }, v_Gl_28185.prototype = {
    nt: function (v_t_35050, v_i_35051) {
      this.Yt.d5(v_t_35050, () => {
        v_i_35051 && v_i_35051(v_t_35050);
      });
    },
    ut: function (v_t_35052, v_i_35053, v_e_35054, v_n_35055) {
      this.Yt.d5(v_i_35053, () => {
        this.o5.push({
          Ae: v_t_35052,
          v5: v_i_35053,
          g5: v_e_35054 || 0
        }), this.o5.sort((v_t_35056, v_i_35057) => v_t_35056.g5 - v_i_35057.g5), v_n_35055 && v_n_35055(v_i_35053);
      });
    },
    _i: function (v_i_35058) {
      this.o5 = this.o5.filter(v_t_35059 => v_t_35059.Ae !== v_i_35058);
    },
    w5: function () {
      this.o5 = this.o5.filter(v_t_35060 => 0 === v_t_35060.Ae.indexOf("sys"));
    },
    le: function (v_i_35061, v_e_35062, v_t_35063) {
      this.rr = v_i_35061;
      for (const v_s_35066 of this.Y6) v_s_35066.lr && v_s_35066.Z6 < this.rr && (v_s_35066.lr = !1, v_s_35066.Ee());
      1e3 < this.rr - this.fv && (0 < this.Y6.length && (this.Y6 = this.Y6.filter(v_t_35067 => v_t_35067.lr)), this.fv = this.rr), this.Yt.Ph.Hh = 0, this.Yt.Ph.Rh = 0;
      var v_n_35064 = performance.now();
      glContext.activeTexture(glContext.TEXTURE0), glContext.bindTexture(glContext.TEXTURE_2D, null), this.Yt.Cc(1), glContext.clearStencil(0), glContext.clearColor(0, 0, 0, 1), glContext.clear(glContext.COLOR_BUFFER_BIT | glContext.DEPTH_BUFFER_BIT | glContext.STENCIL_BUFFER_BIT);
      for (let v_t_35068 = 0; v_t_35068 < this.o5.length; ++v_t_35068) this.o5[v_t_35068].v5.p9 <= this.k9 || (this.Yt.Cc(1), this.o5[v_t_35068].v5.Ld(v_i_35061, v_e_35062, this.Yt));
      glContext.disable(glContext.STENCIL_TEST);
      var v_r_35065 = performance.now();
      if (this.Yt.Ph.rr[v_qa_28086(this.Yt.Ph.r5, this.Yt.Ph.rr.length)] = v_r_35065 - v_n_35064, this.Yt.Ph.r5++, v_k_27573 && this.Yt.Ph.n5) {
        if (this.Yt.Dh.G3(0), this.Yt.Dh.P3(), this.Yt.Dh.H3(!1), v_xt_28153.T_(this.Yt.Dh.A_), glContext.blendFunc(glContext.SRC_ALPHA, glContext.ONE_MINUS_SRC_ALPHA), this.Yt.Ph.r5 % 30 == 0) {
          let v_i_35069 = 0,
            v_e_35070 = mathMin(this.Yt.Ph.r5, this.Yt.Ph.rr.length);
          for (let v_t_35071 = 0; v_t_35071 < v_e_35070; ++v_t_35071) v_i_35069 += this.Yt.Ph.rr[v_t_35071];
          this.Yt.Ph.a5 = v_i_35069 / v_e_35070;
        }
        this.Yt.Ph.n5.X3("RS SCENES: " + this.o5.length + "\nRS SPRITES: " + this.Yt.Ph.Rh + "\nRS DRAW CALLS: " + this.Yt.Ph.Hh + "\nRENDER TIME: " + this.Yt.Ph.a5.toFixed(2) + " ms\nFPS: " + v_l_27570.toFixed(2), .8, .8), this.Yt.Dh.B3(), this.Yt.Dh.N3(1.2), this.Yt.Dh.U3(!0, !1), this.Yt.Ph.n5.Y3([10, 952, 0], [0, 0, 0, 1]), this.Yt.Ph.n5.Y3([10, 950, 0], [1, 1, 1, 1]);
      }
      glContext.loadIdentity(), this.Yt.Cc(0), this.Yt.Nh(1), v_Jt_27635.amount = 1.04, v_t_35063 ? v_m_27612.uniforms(v_Jt_27635).draw(this.Yt.X6) : v_m_27612.uniforms(v_Jt_27635).draw(this.Yt.t5), this.Yt.Vk.Uk();
    },
    xt: function () {
      return this.rr;
    },
    p5: function () {
      return this.Yt;
    },
    W6: function (v_t_35072, v_i_35073) {
      return this.Y6.push(new v_Nl_28184(++this.ny, this.rr + v_i_35073, v_t_35072)), this.ny;
    },
    iy: function (v_t_35074) {
      for (const v_i_35075 of this.Y6) if (v_i_35075.Ae === v_t_35074) {
        v_i_35075.lr = !1;
        break;
      }
    },
    C7: function (v_i_35076) {
      return new Promise(v_t_35077 => {
        this.W6(v_t_35077, v_i_35076);
      });
    },
    v9: function (v_t_35078) {
      this.k9 = v_t_35078;
    }
  };