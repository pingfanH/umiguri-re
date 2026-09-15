// game: 语句 203 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_Po_28121.prototype = {
    i3: function (v_t_34414) {
      switch (this.o_ = "utf-8" === v_t_34414 ? v_B_27650 : new TextDecoder(v_t_34414), v_t_34414) {
        case "utf-16":
        case "utf-16be":
        case "utf-16le":
          this.l_ = 2;
          break;
        default:
          this.l_ = 1;
      }
    },
    n3: function () {
      return this.U2 += 1, this.s_.getInt8(this.U2 - 1);
    },
    o3: function () {
      return this.U2 += 1, this.s_.getUint8(this.U2 - 1);
    },
    l3: function () {
      return this.U2 += 2, this.s_.getInt16(this.U2 - 2, !0);
    },
    u3: function () {
      return this.U2 += 2, this.s_.getUint16(this.U2 - 2, !0);
    },
    _3: function () {
      return this.U2 += 4, this.s_.getInt32(this.U2 - 4, !0);
    },
    v3: function () {
      return this.U2 += 4, this.s_.getUint32(this.U2 - 4, !0);
    },
    w3: function () {
      return this.U2 += 4, this.s_.getFloat32(this.U2 - 4, !0);
    },
    b3: function () {
      return this.U2 += 8, this.s_.getFloat64(this.U2 - 8, !0);
    },
    m3: function () {
      var v_i_34415 = this.u3();
      let v_e_34416 = "";
      for (let v_t_34417 = 0; v_t_34417 < v_i_34415; ++v_t_34417) v_e_34416 += String.fromCharCode(this.o3());
      return v_e_34416;
    },
    S3: function () {
      var v_i_34418 = this.u3();
      let v_e_34419 = "";
      for (let v_t_34420 = 0; v_t_34420 < v_i_34418; ++v_t_34420) v_e_34419 += String.fromCharCode(this.u3());
      return v_e_34419;
    },
    Ic: function () {
      var v_t_34421;
      return null === this.o_ ? "" : (v_t_34421 = this.u3() * this.l_, this.U2 += v_t_34421, this.o_.decode(new Uint8Array(this.s_.buffer, this.s_.byteOffset + this.U2 - v_t_34421, v_t_34421)));
    },
    xg: function () {
      var v_i_34422 = this.v3();
      let v_e_34423 = "";
      for (let v_t_34424 = 0; v_t_34424 < v_i_34422; ++v_t_34424) v_e_34423 += String.fromCharCode(this.o3());
      return v_e_34423;
    },
    yg: function () {
      var v_i_34425 = this.v3();
      let v_e_34426 = "";
      for (let v_t_34427 = 0; v_t_34427 < v_i_34425; ++v_t_34427) v_e_34426 += String.fromCharCode(this.u3());
      return v_e_34426;
    },
    fg: function () {
      var v_t_34428;
      return null === this.o_ ? "" : (v_t_34428 = this.v3() * this.l_, this.U2 += v_t_34428, this.o_.decode(new Uint8Array(this.s_.buffer, this.s_.byteOffset + this.U2 - v_t_34428, v_t_34428)));
    },
    I3: function (v_t_34429) {
      return this.U2 += v_t_34429, new Uint8Array(this.s_.buffer, this.s_.byteOffset + this.U2 - v_t_34429, v_t_34429);
    },
    Cg: function (v_t_34430) {
      this.U2 += 1, this.Vu(this.U2), this.s_.setInt8(this.U2 - 1, v_t_34430);
    },
    Ag: function (v_t_34431) {
      this.U2 += 1, this.Vu(this.U2), this.s_.setUint8(this.U2 - 1, v_t_34431);
    },
    Ig: function (v_t_34432) {
      this.U2 += 2, this.Vu(this.U2), this.s_.setInt16(this.U2 - 2, v_t_34432, !0);
    },
    _g: function (v_t_34433) {
      this.U2 += 2, this.Vu(this.U2), this.s_.setUint16(this.U2 - 2, v_t_34433, !0);
    },
    Tg: function (v_t_34434) {
      this.U2 += 4, this.Vu(this.U2), this.s_.setInt32(this.U2 - 4, v_t_34434, !0);
    },
    hg: function (v_t_34435) {
      this.U2 += 4, this.Vu(this.U2), this.s_.setUint32(this.U2 - 4, v_t_34435, !0);
    },
    Lg: function (v_t_34436) {
      this.U2 += 4, this.Vu(this.U2), this.s_.setFloat32(this.U2 - 4, v_t_34436, !0);
    },
    dg: function (v_t_34437) {
      this.U2 += 8, this.Vu(this.U2), this.s_.setFloat64(this.U2 - 8, v_t_34437, !0);
    },
    Rg: function (v_i_34438) {
      this._g(v_i_34438.length), this.Vu(this.U2 + v_i_34438.length);
      for (let v_t_34439 = 0; v_t_34439 < v_i_34438.length; ++v_t_34439, ++this.U2) this.s_.setUint8(this.U2, v_i_34438.charCodeAt(v_t_34439));
    },
    Eg: function (v_i_34440) {
      this._g(v_i_34440.length), this.Vu(this.U2 + 2 * v_i_34440.length);
      for (let v_t_34441 = 0; v_t_34441 < v_i_34440.length; ++v_t_34441, this.U2 += 2) this.s_.setUint16(this.U2, v_i_34440.charCodeAt(v_t_34441));
    },
    vg: function (v_t_34442) {
      v_t_34442 = this.Sg.encode(v_t_34442);
      this._g(v_t_34442.byteLength), this.Mg(v_t_34442);
    },
    Bg: function (v_i_34443) {
      this.hg(v_i_34443.length), this.Vu(this.U2 + v_i_34443.length);
      for (let v_t_34444 = 0; v_t_34444 < v_i_34443.length; ++v_t_34444, ++this.U2) this.s_.setUint8(this.U2, v_i_34443.charCodeAt(v_t_34444));
    },
    Fg: function (v_i_34445) {
      this.hg(v_i_34445.length), this.Vu(this.U2 + 2 * v_i_34445.length);
      for (let v_t_34446 = 0; v_t_34446 < v_i_34445.length; ++v_t_34446, this.U2 += 2) this.s_.setUint16(this.U2, v_i_34445.charCodeAt(v_t_34446));
    },
    gg: function (v_t_34447) {
      v_t_34447 = this.Sg.encode(v_t_34447);
      this.hg(v_t_34447.byteLength), this.Mg(v_t_34447);
    },
    Mg: function (v_t_34448) {
      this.Vu(this.U2 + v_t_34448.byteLength), this.th.set(v_t_34448, this.U2), this.U2 += v_t_34448.byteLength;
    },
    Vu: function (v_t_34449) {
      this.kg < v_t_34449 && (this.kg = v_t_34449), this.th.byteLength >= v_t_34449 || (v_t_34449 = Math.max(Math.min(2 * v_t_34449, 65536), v_t_34449), (v_t_34449 = new Uint8Array(v_t_34449)).set(this.th), this.th = v_t_34449, this.s_ = new DataView(v_t_34449.buffer));
    },
    wg: function () {
      this.U2 = 0;
    },
    ni: function () {
      this.U2 = 0, this.kg = 0;
    },
    y3: function (v_t_34450) {
      this.U2 += v_t_34450;
    },
    C3: function () {
      return this.U2 >= this.kg;
    },
    mg: function () {
      return this.th.subarray(0, this.kg);
    },
    Bp: function () {
      return this.th.buffer;
    },
    pg: function () {
      return this.kg;
    }
  }, v_Mo_28124.A3 = async function (v_t_34451) {
    var v_e_34452 = new v_Po_28121(v_t_34451);
    if (809912146 !== v_e_34452.v3()) return null;
    if (1 !== v_e_34452.u3()) return null;
    var v_n_34453,
      v_i_34454,
      v_r_34455 = new v_Mo_28124(),
      v_s_34456 = [];
    let v_a_34457 = !1;
    v_e_34452.y3(32);
    var v_o_34458,
      v_l_34459,
      v_c_34460,
      v_t_34451 = v_e_34452.u3(2);
    32 & v_t_34451 && (v_r_34455.v_ = !0), 64 & v_t_34451 && (v_a_34457 = !0), v_r_34455.g_ = v_e_34452.u3(), v_r_34455.w_ = v_e_34452.l3(), v_r_34455.p_ = v_e_34452.l3(), v_r_34455.k_ = v_e_34452.l3(), v_r_34455.b_ = v_e_34452.l3(), v_n_34453 = v_e_34452.u3(), v_i_34454 = v_e_34452.u3(), v_r_34455.m_[0] = v_e_34452.l3(), v_r_34455.m_[1] = v_e_34452.l3(), v_r_34455.m_[2] = v_e_34452.l3(), v_r_34455.m_[3] = v_e_34452.l3(), v_r_34455.S_[0] = v_e_34452.l3() / 100, v_r_34455.S_[1] = v_e_34452.l3() / 100;
    for (let v_t_34463 = 0; v_t_34463 < v_n_34453; ++v_t_34463) v_o_34458 = {
      T3: 6406,
      L3: 0,
      E3: 0
    }, v_e_34452.y3(34), 16 == (v_l_34459 = v_e_34452.u3()) ? v_o_34458.T3 = 33776 : 17 == v_l_34459 ? v_o_34458.T3 = 33778 : 18 == v_l_34459 && (v_o_34458.T3 = 33779), v_o_34458.L3 = v_e_34452.v3(), v_o_34458.E3 = v_e_34452.v3(), v_s_34456.push(v_o_34458);
    for (let v_t_34464 = 0; v_t_34464 < v_i_34454; ++v_t_34464) (v_c_34460 = new v_Lo_28123()).c_ = v_e_34452.u3(), v_c_34460.c_ |= v_e_34452.o3() << 16, v_c_34460.u_ = v_e_34452.o3(), v_c_34460.ou = v_e_34452.l3(), v_c_34460.Oa = v_e_34452.l3(), v_c_34460.w = v_e_34452.l3(), v_c_34460.h = v_e_34452.l3(), v_c_34460.f_ = v_e_34452.l3(), v_c_34460.__ = v_e_34452.l3(), v_c_34460.d_ = v_e_34452.l3(), v_r_34455.h_.set(v_c_34460.c_, v_c_34460);
    var v_u_34461,
      v_f_34462 = {
        wrapS: glContext.CLAMP_TO_EDGE,
        wrapT: glContext.CLAMP_TO_EDGE,
        format: glContext.RGBA
      };
    for (let v_i_34465 = 0; v_i_34465 < v_n_34453; ++v_i_34465) {
      let v_t_34466;
      v_t_34466 = v_a_34457 ? await new v_tc_28199(v_e_34452.I3(v_s_34456[v_i_34465].E3)).kR() : v_e_34452.I3(v_s_34456[v_i_34465].E3), v_u_34461 = new glRuntime.Texture(v_r_34455.k_, v_r_34455.b_, v_f_34462), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1), 6406 == v_s_34456[v_i_34465].T3 ? glContext.texImage2D(glContext.TEXTURE_2D, 0, v_s_34456[v_i_34465].T3, v_r_34455.k_, v_r_34455.b_, 0, v_s_34456[v_i_34465].T3, glContext.UNSIGNED_BYTE, v_t_34466) : glContext.compressedTexImage2D(glContext.TEXTURE_2D, 0, v_s_34456[v_i_34465].T3, v_r_34455.k_, v_r_34455.b_, 0, v_t_34466), v_r_34455.Mf.push(v_u_34461);
    }
    return v_r_34455;
  }, v_Eo_28125.prototype = {
    B3: function () {
      this.x_ = v_Yo_28141, this.I_ = v_$o_28144, this.y_ = 1 / 0, this.C_ = 1 / 0, this.L_ = 0, this.E_ = 0, this.w_ = 0, this.F_ = !1, this.B_ = !1, this.M_ = !1;
    },
    M3: function (v_t_34467, v_i_34468) {
      this.R3 = v_t_34467, this.I_ = v_i_34468;
    },
    P3: function (v_t_34469) {
      this.y_ = void 0 !== v_t_34469 ? v_t_34469 : 1 / 0;
    },
    D3: function (v_t_34470) {
      this.C_ = void 0 !== v_t_34470 ? v_t_34470 : 1 / 0;
    },
    G3: function (v_t_34471) {
      this.L_ = v_t_34471;
    },
    j3: function (v_t_34472) {
      this.E_ = v_t_34472;
    },
    N3: function (v_t_34473) {
      this.w_ = v_t_34473;
    },
    H3: function (v_t_34474) {
      this.F_ = v_t_34474;
    },
    U3: function (v_t_34475, v_i_34476) {
      this.B_ = v_t_34475, this.M_ = v_i_34476;
    },
    V3: function (v_t_34477) {
      this.A_ = v_t_34477;
    }
  }, v_Fo_28127.prototype = {
    O3: function (v_t_34478) {
      this.Rf = v_t_34478;
    },
    J3: function (v_t_34479) {
      this.H_ = v_t_34479;
    },
    W3: function (v_t_34480) {
      this.U_ = v_t_34480;
    },
    K3: function (v_t_34481) {
      this.N_.push(v_t_34481);
    },
    z3: function (v_i_34482) {
      this.N_ = this.N_.filter(v_t_34483 => v_i_34482.D_ !== v_t_34483.D_ || v_i_34482.R_ !== v_t_34483.R_ || v_i_34482.P_ !== v_t_34483.P_ || v_i_34482.G_ !== v_t_34483.G_ || v_i_34482.j_ !== v_t_34483.j_);
    },
    X3: function (v_t_34484, v_i_34485, v_e_34486, v_n_34487) {
      this.K_ = !1, this.V_ = v_t_34484, this.O_ = v_i_34485, this.J_ = v_e_34486, this.W_ = v_n_34487;
    },
    Z3: function () {
      if (!this.K_) {
        let v_t_34491 = 0,
          v_i_34492 = 0,
          v_e_34493 = void 0,
          v_n_34494 = 0,
          v_r_34495 = 0,
          v_s_34496,
          v_a_34497,
          v_o_34498 = 0,
          v_l_34499 = 0,
          v_c_34500 = 0,
          v_u_34501 = 0,
          v_f_34502 = 0,
          v___34503 = 0,
          v_h_34504 = 0,
          v_d_34505 = !1,
          v_v_34506 = !1,
          v_w_34507 = 0,
          v_g_34508 = 0;
        this.z_ = 0, this.Z_ = 0, this.Y_ = 0;
        var v_m_34488,
          v_p_34489 = this.N_.length ? this.N_[0].D_.w_ * this.N_[0].j_ * this.U_.w_ * this.J_ : 0,
          v_k_34490 = this.N_.length ? this.N_[0].D_.w_ * this.N_[0].j_ * this.J_ : 0;
        for (v_l_34499 = 0; v_l_34499 < this.V_.length; ++v_l_34499) {
          if (v_s_34496 = 55296 <= (v_t_34491 = this.V_.charCodeAt(v_l_34499)) && v_t_34491 <= 56319, v_a_34497 = 56320 <= v_t_34491 && v_t_34491 <= 57343, v_d_34505 = !1, v_v_34506 = !1, v_g_34508 = 0, v_s_34496 || v_a_34497 || 10 !== v_t_34491) {
            if (v_s_34496) {
              v_r_34495 = v_t_34491;
              continue;
            }
            for (v_r_34495 && (v_a_34497 && (v_t_34491 = 65536 + 1024 * (v_r_34495 - 55296) + (v_t_34491 - 56320)), v_r_34495 = 0), v_e_34493 = void 0, v_c_34500 = 0; v_c_34500 < this.N_.length; ++v_c_34500) if (!(this.N_[v_c_34500].R_ > v_t_34491 || this.N_[v_c_34500].P_ < v_t_34491) && (v_e_34493 = this.N_[v_c_34500].D_.h_.get(v_t_34491))) {
              v_n_34494 = v_c_34500;
              break;
            }
            v_e_34493 && (v_g_34508 = this.U_.F_ ? this.N_[v_n_34494].D_.g_ * this.N_[v_n_34494].G_ * this.O_ : v_e_34493.d_ * this.N_[v_n_34494].G_ * this.O_, v___34503 += v_g_34508), this.U_.B_ && this.U_.M_ && v_i_34492 + (v_Ro_28122(v_t_34491) ? 0 : v_g_34508) > this.U_.y_ && v_u_34501 < v_f_34502 && (v_v_34506 = !0);
          } else this.U_.B_ && (v_d_34505 = !0);
          v_d_34505 || v_v_34506 ? (v_v_34506 && (v_i_34492 += v_g_34508 - v_h_34504 - v___34503), this.z_ = mathMax(v_i_34492, this.z_), this.U_.B_ && (this.X_.length <= v_o_34498 ? this.X_.push(v_i_34492) : this.X_[v_o_34498] = v_i_34492, this.Z_ += v_p_34489), v_v_34506 ? (this.q_.length <= v_w_34507 ? this.q_.push(v_f_34502) : this.q_[v_w_34507] = v_f_34502, ++v_w_34507, v_u_34501 = v_f_34502, v_i_34492 = v___34503, v___34503 = 0) : v_i_34492 = 0, ++v_o_34498) : (v_i_34492 += v_g_34508, this.U_.B_ && this.U_.M_ && (v_Ro_28122(v_t_34491) || 4352 <= (v_m_34488 = v_t_34491) && v_m_34488 <= 4607 || 11904 <= v_m_34488 && v_m_34488 <= 12031 || 12032 <= v_m_34488 && v_m_34488 <= 12255 || 12288 <= v_m_34488 && v_m_34488 <= 12351 || 12352 <= v_m_34488 && v_m_34488 <= 12447 || 12448 <= v_m_34488 && v_m_34488 <= 12543 || 12544 <= v_m_34488 && v_m_34488 <= 12591 || 12592 <= v_m_34488 && v_m_34488 <= 12687 || 12688 <= v_m_34488 && v_m_34488 <= 12703 || 12704 <= v_m_34488 && v_m_34488 <= 12735 || 12736 <= v_m_34488 && v_m_34488 <= 12783 || 12784 <= v_m_34488 && v_m_34488 <= 12799 || 12800 <= v_m_34488 && v_m_34488 <= 13055 || 13056 <= v_m_34488 && v_m_34488 <= 13311 || 13312 <= v_m_34488 && v_m_34488 <= 19903 || 19968 <= v_m_34488 && v_m_34488 <= 40943 || 43360 <= v_m_34488 && v_m_34488 <= 43391 || 44032 <= v_m_34488 && v_m_34488 <= 55203 || 55216 <= v_m_34488 && v_m_34488 <= 55295 || 63744 <= v_m_34488 && v_m_34488 <= 64255 || 65072 <= v_m_34488 && v_m_34488 <= 65103 || 65280 <= v_m_34488 && v_m_34488 <= 65519 || 110592 <= v_m_34488 && v_m_34488 <= 110847 || 110848 <= v_m_34488 && v_m_34488 <= 110895 || 110896 <= v_m_34488 && v_m_34488 <= 110959 || 127488 <= v_m_34488 && v_m_34488 <= 127743 || 131072 <= v_m_34488 && v_m_34488 <= 173791 || 173824 <= v_m_34488 && v_m_34488 <= 177983 || 177984 <= v_m_34488 && v_m_34488 <= 178207 || 178208 <= v_m_34488 && v_m_34488 <= 183983 || 183984 <= v_m_34488 && v_m_34488 <= 191471 || 194560 <= v_m_34488 && v_m_34488 <= 195103 || 196608 <= v_m_34488 && v_m_34488 <= 201551) && (v_f_34502 = v_l_34499, v___34503 = 0, v_h_34504 = v_Ro_28122(v_t_34491) ? v_g_34508 : 0));
        }
        this.U_.B_ && (this.X_.length <= v_o_34498 ? this.X_.push(v_i_34492) : this.X_[v_o_34498] = v_i_34492, this.Z_ += v_k_34490, this.U_.M_) && (this.q_.length <= v_w_34507 ? this.q_.push(-2) : this.q_[v_w_34507] = -2), this.z_ = mathMax(this.z_, v_i_34492), this.Y_ = v_p_34489, this.K_ = !0;
      }
    },
    Y3: function (v_t_34509, v_i_34510) {
      var v_e_34511 = this.U_.xf.Gl("vertices"),
        v_n_34512 = this.U_.xf.Gl("colors"),
        v_r_34513 = this.U_.xf.Gl("coords"),
        v_s_34514 = [v_t_34509[0], v_t_34509[1], v_t_34509[2]],
        v_a_34515 = [0, 0, 0];
      let v_o_34516 = 0,
        v_l_34517 = 0,
        v_c_34518 = 0,
        v_u_34519 = 0,
        v_f_34520 = !1,
        v___34521,
        v_h_34522,
        v_d_34523 = 0,
        v_v_34524,
        v_w_34525,
        v_g_34526 = !1,
        v_m_34527 = void 0,
        v_p_34528 = void 0,
        v_k_34529 = void 0,
        v_B_34530 = 0,
        v_b_34531 = 0,
        v_y_34532 = 0,
        v_S_34533 = 0,
        v_A_34534 = 0,
        v_x_34535 = 0,
        v_C_34536 = 0,
        v_T_34537 = 0,
        v_I_34538 = 0;
      var v_P_34539 = this.O_,
        v_R_34540 = this.J_;
      let v_L_34541 = 0,
        v_M_34542,
        v_E_34543 = 0,
        v_N_34544 = 0;
      var v_D_34545,
        v_G_34546 = this.U_.F_,
        v_F_34547 = this.U_.B_,
        v_U_34548 = this.U_.M_,
        v_H_34549 = this.N_.length ? this.N_[0].D_.w_ * this.N_[0].j_ * this.U_.w_ * v_R_34540 : 0,
        v_J_34550 = 16 <= v_i_34510.length;
      for (v_j_27631.xform = this.U_.A_.m, v_F_34547 || this.U_.y_ === 1 / 0 || (this.U_.R3 === v_qo_28142 ? (this.Z3(), 0 < (v_L_34541 = (this.U_.y_ - this.z_) / 2) && (v_s_34514[0] += v_L_34541)) : this.U_.R3 === v_Zo_28143 && (this.Z3(), 0 < (v_L_34541 = this.U_.y_ - this.z_)) && (v_s_34514[0] += v_L_34541)), v_F_34547 && this.U_.C_ !== 1 / 0 && (this.U_.I_ === v_Qo_28145 ? (this.Z3(), 0 < (v_L_34541 = (this.U_.C_ - this.Z_) / 2) && (v_s_34514[1] += v_L_34541)) : this.U_.I_ === v_tl_28146 && (this.Z3(), 0 < (v_L_34541 = this.U_.C_ - this.Z_)) && (v_s_34514[1] += v_L_34541)), v_o_34516 = 0; v_o_34516 < this.N_.length; ++v_o_34516) for (v_m_34527 = this.N_[v_o_34516], v_l_34517 = 0; v_l_34517 < v_m_34527.D_.Mf.length; ++v_l_34517) {
        for (v_a_34515[0] = v_s_34514[0] + this.U_.L_, v_a_34515[1] = v_s_34514[1] + this.U_.E_, v_a_34515[2] = v_s_34514[2], v_u_34519 = 0, v_E_34543 = 0, v_f_34520 = !1, v_d_34523 = 0, v_N_34544 = 0, v_F_34547 && this.U_.y_ !== 1 / 0 && (this.U_.R3 === v_qo_28142 ? 0 < (v_L_34541 = (this.U_.y_ - this.X_[v_E_34543]) / 2) && (v_a_34515[0] += v_L_34541) : this.U_.R3 === v_Zo_28143 && 0 < (v_L_34541 = this.U_.y_ - this.X_[v_E_34543]) && (v_a_34515[0] += v_L_34541)), v_c_34518 = 0; v_c_34518 < this.V_.length; ++v_c_34518) if (v_v_34524 = 55296 <= (v___34521 = this.V_.charCodeAt(v_c_34518)) && v___34521 <= 56319, v_w_34525 = 56320 <= v___34521 && v___34521 <= 57343, v_D_34545 = v_F_34547 && v_U_34548 && this.q_[v_N_34544] === v_c_34518 - 1, (v_v_34524 || v_w_34525 || 10 !== v___34521 && !v_D_34545 || (++v_E_34543, v_D_34545 && ++v_N_34544, v_F_34547 && (v_a_34515[0] = v_s_34514[0] + this.U_.L_, v_a_34515[1] += v_H_34549, this.U_.y_ !== 1 / 0) && (this.U_.R3 === v_qo_28142 ? 0 < (v_L_34541 = (this.U_.y_ - this.X_[v_E_34543]) / 2) && (v_a_34515[0] += v_L_34541) : this.U_.R3 === v_Zo_28143 && 0 < (v_L_34541 = this.U_.y_ - this.X_[v_E_34543]) && (v_a_34515[0] += v_L_34541)), v_D_34545)) && !(v_a_34515[0] - v_s_34514[0] > this.U_.y_)) if (v_v_34524) v_d_34523 = v___34521;else {
          for (v_d_34523 && (v_w_34525 && (v___34521 = 65536 + 1024 * (v_d_34523 - 55296) + (v___34521 - 56320)), v_d_34523 = 0), v_g_34526 = !1, v_k_34529 = void 0, v_p_34528 = void 0, v_h_34522 = 0; v_h_34522 < this.N_.length; ++v_h_34522) if (!(this.N_[v_h_34522].R_ > v___34521 || this.N_[v_h_34522].P_ < v___34521) && (v_k_34529 = this.N_[v_h_34522].D_.h_.get(v___34521))) {
            v_p_34528 = this.N_[v_h_34522], v_g_34526 = v_p_34528.D_ === v_m_34527.D_;
            break;
          }
          if (v_k_34529 && v_p_34528) {
            if (v_B_34530 = v_G_34546 ? v_p_34528.D_.g_ * v_P_34539 * v_p_34528.G_ : v_k_34529.d_ * v_P_34539 * v_p_34528.G_, v_b_34531 = v_a_34515[0] + v_k_34529.f_ * v_P_34539 * v_p_34528.G_, v_y_34532 = v_a_34515[0] + (v_k_34529.f_ + v_k_34529.w) * v_P_34539 * v_p_34528.G_, v_S_34533 = v_a_34515[1] + (v_k_34529.__ + v_k_34529.h) * v_R_34540 * v_p_34528.j_, v_A_34534 = v_a_34515[1] + v_k_34529.__ * v_R_34540 * v_p_34528.j_, v_G_34546 && (v_L_34541 = (v_p_34528.D_.g_ - v_k_34529.d_) * v_P_34539 * v_p_34528.G_ * .5, v_b_34531 += v_L_34541, v_y_34532 += v_L_34541), (v_g_34526 = 32 === v___34521 || v_y_34532 < 0 || v_b_34531 > this.U_.y_ || v_F_34547 && (v_S_34533 < 0 || v_A_34534 > this.U_.C_) ? !1 : v_g_34526) && v_k_34529.u_ === v_l_34517) {
              if (v_x_34535 = 0, v_C_34536 = 0, v_T_34537 = 0, v_I_34538 = 0, v_b_34531 < v_s_34514[0] ? (v_x_34535 = v_k_34529.w * v_Ya_28085(v_b_34531, v_y_34532, v_s_34514[0]), v_b_34531 = v_s_34514[0]) : v_y_34532 > v_s_34514[0] + this.U_.y_ && (v_C_34536 = v_k_34529.w * v_Ya_28085(v_y_34532, v_b_34531, v_s_34514[0] + this.U_.y_), v_y_34532 = v_s_34514[0] + this.U_.y_), v_F_34547 && (v_A_34534 < v_s_34514[1] ? (v_T_34537 = v_k_34529.h * v_Ya_28085(v_A_34534, v_S_34533, v_s_34514[1]), v_A_34534 = v_s_34514[1]) : v_S_34533 > v_s_34514[1] + this.U_.C_ && (v_I_34538 = v_k_34529.h * v_Ya_28085(v_S_34533, v_A_34534, v_s_34514[1] + this.U_.C_), v_S_34533 = v_s_34514[1] + this.U_.C_)), v_e_34511[4 * v_u_34519 * 3 + 0] = v_b_34531, v_e_34511[4 * v_u_34519 * 3 + 1] = v_S_34533, v_e_34511[4 * v_u_34519 * 3 + 3] = v_y_34532, v_e_34511[4 * v_u_34519 * 3 + 4] = v_S_34533, v_e_34511[4 * v_u_34519 * 3 + 6] = v_b_34531, v_e_34511[4 * v_u_34519 * 3 + 7] = v_A_34534, v_e_34511[4 * v_u_34519 * 3 + 9] = v_y_34532, v_e_34511[4 * v_u_34519 * 3 + 10] = v_A_34534, v_r_34513[4 * v_u_34519 * 2 + 0] = (v_k_34529.ou + v_x_34535) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 1] = (v_k_34529.Oa + v_k_34529.h - v_I_34538) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 2] = (v_k_34529.ou + v_k_34529.w - v_C_34536) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 3] = (v_k_34529.Oa + v_k_34529.h - v_I_34538) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 4] = (v_k_34529.ou + v_x_34535) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 5] = (v_k_34529.Oa + v_T_34537) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 6] = (v_k_34529.ou + v_k_34529.w - v_C_34536) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 7] = (v_k_34529.Oa + v_T_34537) / v_p_34528.D_.b_, this.W_ && 0 < this.W_.Q_[v_c_34518]) {
                if (v_M_34542 = this.W_.Q_[v_c_34518] - 1, v_J_34550) for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = this.W_.e3[v_M_34542][0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = this.W_.e3[v_M_34542][1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = this.W_.e3[v_M_34542][2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3 + 4 * v_h_34522] * this.W_.e3[v_M_34542][3];else for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = this.W_.e3[v_M_34542][0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = this.W_.e3[v_M_34542][1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = this.W_.e3[v_M_34542][2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3] * this.W_.e3[v_M_34542][3];
              } else if (v_J_34550) for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = v_i_34510[0 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = v_i_34510[1 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = v_i_34510[2 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3 + 4 * v_h_34522];else for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = v_i_34510[0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = v_i_34510[1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = v_i_34510[2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3];
              2048 <= ++v_u_34519 && (this.U_.xf.jl("vertices", 4 * v_u_34519 * 3), this.U_.xf.jl("colors", 4 * v_u_34519 * 4), this.U_.xf.jl("coords", 4 * v_u_34519 * 2), v_f_34520 || (v_m_34527.D_.Mf[v_l_34517].bind(0), v_f_34520 = !0), (v_m_34527.D_.v_ && this.H_ ? this.H_ : this.Rf).uniforms(v_j_27631).drawBuffers(this.U_.xf.Nl(), this.U_.xf.Yl(), glContext.TRIANGLES, 6 * v_u_34519), v_u_34519 = 0);
            }
            v_a_34515[0] += v_B_34530;
          }
        }
        0 < v_u_34519 && (this.U_.xf.jl("vertices", 4 * v_u_34519 * 3), this.U_.xf.jl("colors", 4 * v_u_34519 * 4), this.U_.xf.jl("coords", 4 * v_u_34519 * 2), v_f_34520 || (v_m_34527.D_.Mf[v_l_34517].bind(0), v_f_34520 = !0), (v_m_34527.D_.v_ && this.H_ ? this.H_ : this.Rf).uniforms(v_j_27631).drawBuffers(this.U_.xf.Nl(), this.U_.xf.Yl(), glContext.TRIANGLES, 6 * v_u_34519), v_u_34519 = 0);
      }
    }
  }, v_Bo_28128.prototype = {
    An: function (v_t_34551) {
      this.Q_ = [], this.e3 = [];
      let v_i_34552 = "";
      var v_e_34553,
        v_n_34554 = new Map();
      let v_r_34555 = 0,
        v_s_34556 = !1,
        v_a_34557 = 0,
        v_o_34558 = 0,
        v_l_34559 = 0,
        v_c_34560,
        v_u_34561 = 0,
        v_f_34562 = 0,
        v___34563 = "";
      for (; v_a_34557 < v_t_34551.length; ++v_a_34557) if (v_s_34556) {
        if (">" === v_t_34551[v_a_34557] && (v_s_34556 = !1, v_c_34560 = v_a_34557, v_u_34561 = v_a_34557 + 1, v_l_34559 < v_c_34560)) if ("c" === (v_e_34553 = (v___34563 = v_t_34551.substring(v_l_34559, v_c_34560)).split(":", 2))[0] && 2 <= v_e_34553.length) {
          let v_t_34564 = 0;
          8 === v_e_34553[1].length && (v_t_34564 = v_Ea_28065(v_e_34553[1])), 6 === v_e_34553[1].length ? v_t_34564 = v_Ea_28065(v_e_34553[1]) << 8 | 255 : 3 === v_e_34553[1].length && (v_t_34564 = (15 & (v_t_34564 = v_Ea_28065(v_e_34553[1]))) << 8 | (15 & v_t_34564) << 12 | (240 & v_t_34564) << 12 | (240 & v_t_34564) << 16 | (3840 & v_t_34564) << 16 | (3840 & v_t_34564) << 20 | 255), v_n_34554.has(v_t_34564) ? v_r_34555 = v_n_34554.get(v_t_34564) : (v_r_34555 = v_n_34554.size + 1, v_n_34554.set(v_t_34564, v_r_34555));
        } else "r" === v_e_34553[0] && (v_r_34555 = 0);
      } else if ("<" === v_t_34551[v_a_34557] && "#" === v_t_34551[v_a_34557 + 1]) {
        if (v_s_34556 = !0, v_f_34562 = v_a_34557, v_l_34559 = v_a_34557 + 2, v_u_34561 < v_f_34562) for (v___34563 = v_t_34551.substring(v_u_34561, v_f_34562), v_i_34552 += v___34563, v_o_34558 = 0; v_o_34558 < v___34563.length; ++v_o_34558) this.Q_.push(v_r_34555);
        ++v_a_34557;
      } else if ("\n" === v_t_34551[v_a_34557]) {
        if (v_f_34562 = v_a_34557, v_u_34561 < v_f_34562) for (v___34563 = v_t_34551.substring(v_u_34561, v_f_34562), v_i_34552 += v___34563, v_o_34558 = 0; v_o_34558 < v___34563.length; ++v_o_34558) this.Q_.push(v_r_34555);
        v_u_34561 = v_a_34557, v_r_34555 = 0;
      }
      if (!v_s_34556 && v_u_34561 < v_a_34557) for (v___34563 = v_t_34551.substring(v_u_34561, v_a_34557), v_i_34552 += v___34563, v_o_34558 = 0; v_o_34558 < v___34563.length; ++v_o_34558) this.Q_.push(v_r_34555);
      return v_n_34554.forEach((v_t_34565, v_i_34566) => {
        this.e3.push([(v_i_34566 >>> 24 & 255) / 255, (v_i_34566 >>> 16 & 255) / 255, (v_i_34566 >>> 8 & 255) / 255, (255 & v_i_34566) / 255]);
      }), v_i_34552;
    }
  }, v_No_28129.prototype = {
    Mt: function () {
      this.K8.clearRect(0, 0, this.w, this.h), this.Q8 = new v_Ua_28072(this.w, this.h), this.X8 = new Map(), this.Mk = !0, this.Rk[0] = 0, this.Rk[1] = 0, this.Rk[2] = this.w, this.Rk[3] = this.h, this.Ek(this.Y8, !0);
    },
    Bk: function () {
      return this.Mk;
    },
    Fk: function () {
      return this.Rk[0] = 8 * Math.floor(this.Rk[0] / 8), this.Rk[1] = 8 * Math.floor(this.Rk[1] / 8), this.Rk[2] = 8 * Math.ceil(this.Rk[2] / 8), this.Rk[3] = 8 * Math.ceil(this.Rk[3] / 8), this.Rk;
    },
    Gk: function () {
      this.Rk[0] = this.w, this.Rk[1] = this.h, this.Rk[2] = 0, this.Rk[3] = 0, this.Mk = !1;
    },
    Nk: function () {
      return this.z8;
    },
    Ek: function (v_t_34567, v_i_34568) {
      this.Y8 === v_t_34567 && !v_i_34568 || (this.Y8 = Math.max(v_t_34567, 1), this.Z8 = !0);
    },
    jk: function (v_t_34569) {
      this.Z8 && (this.K8.font = "600 " + this.Y8 + "px " + this.sd, this.q8 = this.X8.get(this.Y8), this.q8 || (this.q8 = new Map(), this.X8.set(this.Y8, this.q8)), this.Z8 = !1);
      var v_i_34570,
        v_e_34571,
        v_n_34572,
        v_r_34573,
        v_s_34574,
        v_a_34575 = this.q8.get(v_t_34569);
      return v_a_34575 || (v_i_34570 = String.fromCodePoint(v_t_34569), v_e_34571 = this.K8.measureText(v_i_34570), v_n_34572 = Math.ceil(v_e_34571.actualBoundingBoxLeft + v_e_34571.actualBoundingBoxRight), v_r_34573 = Math.ceil(v_e_34571.actualBoundingBoxAscent + v_e_34571.actualBoundingBoxDescent) + 1, v_s_34574 = this.Q8.G8(v_n_34572 + 2, v_r_34573 + 2, this.Q8.I8.M8), (v_a_34575 = new v_Lo_28123()).c_ = v_t_34569, v_a_34575.u_ = 0, v_a_34575.ou = v_s_34574[0] + 1, v_a_34575.Oa = v_s_34574[1] + 1, v_a_34575.w = v_n_34572, v_a_34575.h = v_r_34573, v_a_34575.f_ = Math.round(-v_e_34571.actualBoundingBoxLeft), v_a_34575.__ = Math.round(v_e_34571.fontBoundingBoxAscent - v_e_34571.actualBoundingBoxAscent), v_a_34575.d_ = Math.round(v_e_34571.width), 0 < v_s_34574[2] && 0 < v_s_34574[3] && this.K8.fillText(v_i_34570, v_a_34575.ou + v_e_34571.actualBoundingBoxLeft, v_a_34575.Oa + v_e_34571.actualBoundingBoxAscent), this.q8.set(v_t_34569, v_a_34575), this.Mk = !0, this.Rk[0] = Math.min(this.Rk[0], v_s_34574[0]), this.Rk[1] = Math.min(this.Rk[1], v_s_34574[1]), this.Rk[2] = Math.max(this.Rk[2], v_s_34574[0] + v_s_34574[2]), this.Rk[3] = Math.max(this.Rk[3], v_s_34574[1] + v_s_34574[3])), v_a_34575;
    }
  }, v_Go_28130.prototype = {
    Uk: function () {
      this.Pk.Bk() && (glContext.bindTexture(glContext.TEXTURE_2D, this.Yf.id), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1), glContext.texImage2D(glContext.TEXTURE_2D, 0, glContext.ALPHA, glContext.ALPHA, glContext.UNSIGNED_BYTE, this.Pk.Nk()), this.Pk.Gk());
    },
    Hk: function (v_i_34576) {
      var v_t_34577,
        v_e_34578 = this.Dk.get(v_i_34576);
      return v_e_34578 || ((v_t_34577 = new v_Mo_28124()).Mf.push(this.Yf), v_t_34577.g_ = v_i_34576, v_t_34577.w_ = v_i_34576, v_t_34577.p_ = 0, v_t_34577.k_ = this.Pk.w, v_t_34577.b_ = this.Pk.h, v_t_34577.h_ = {
        get: v_t_34579 => (this.Pk.Ek(v_i_34576), this.Pk.jk(v_t_34579))
      }, (v_e_34578 = new v_Do_28126()).R_ = 0, v_e_34578.P_ = 16777215, v_e_34578.G_ = 1, v_e_34578.j_ = 1, v_e_34578.D_ = v_t_34577, this.Dk.set(v_i_34576, v_e_34578)), v_e_34578;
    }
  };