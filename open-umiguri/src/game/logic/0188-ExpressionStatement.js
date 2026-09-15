// game: 语句 188 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_ho_28105.prototype = {
    yl: function (v_t_34334, v_i_34335, v_e_34336, v_n_34337) {
      for (const v_o_34341 in this.n_) "triangles" === v_o_34341 || "lines" === v_o_34341 ? this.i_[v_o_34341] = (v_e_34336 ? v_e_34336[v_o_34341] : void 0) || new Uint16Array(this.n_[v_o_34341]) : this.i_[v_o_34341] = (v_e_34336 ? v_e_34336[v_o_34341] : void 0) || new Float32Array(this.n_[v_o_34341]);
      var v_r_34338 = {};
      for (const v_l_34342 in this.n_) v_r_34338[v_l_34342] = !0;
      for (const v_c_34343 in v_t_34334) v_r_34338[v_c_34343] = !0;
      var v_s_34339 = {};
      for (const v_u_34344 in v_r_34338) v_s_34339[v_u_34344] = 1;
      for (const v_f_34345 in v_i_34335) v_s_34339[v_f_34345] = v_i_34335[v_f_34345];
      var v_a_34340 = new glRuntime.Mesh(v_r_34338);
      v_n_34337 && v_n_34337(v_a_34340);
      for (const v___34346 in v_t_34334) v_a_34340[v___34346] = v_t_34334[v___34346];
      for (const v_h_34347 in this.n_) v_a_34340[v_h_34347] = this.i_[v_h_34347].buffer;
      v_a_34340.compilef(glContext.DYNAMIC_DRAW, v_s_34339), this.xf = v_a_34340;
    },
    Gl: function (v_t_34348) {
      return this.i_[v_t_34348];
    },
    Nl: function (v_t_34349) {
      return this.xf.vertexBuffers;
    },
    Yl: function (v_t_34350) {
      return this.xf.indexBuffers.triangles;
    },
    jl: function (v_i_34351, v_e_34352) {
      if (this.i_[v_i_34351]) {
        let v_t_34353 = v_i_34351;
        "vertices" === v_t_34353 ? v_t_34353 = "gl_Vertex" : "coords" === v_t_34353 ? v_t_34353 = "gl_TexCoord" : "normals" === v_t_34353 ? v_t_34353 = "gl_Normal" : "colors" === v_t_34353 && (v_t_34353 = "gl_Color"), "triangles" === v_t_34353 || "lines" === v_t_34353 ? this.xf.subdata_i(v_t_34353, new Uint16Array(this.i_[v_i_34351].buffer, 0, v_e_34352 / 2)) : this.xf.subdata(v_t_34353, new Float32Array(this.i_[v_i_34351].buffer, 0, v_e_34352));
      }
    },
    a_: function (v_t_34354) {
      return this.xf;
    },
    pf: function () {
      this.xf.free(), this.i_ = {}, this.n_ = buffer_def, this.xf = null;
    }
  };