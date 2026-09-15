// game: 语句 192 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  function v_Io_28120(v_f_34371, v___34372, v_h_34373) {
    if (null === v_f_34371) v_h_34373(v_Ao_28115, 0, 0);else {
      var v_d_34374 = new Int32Array(v_f_34371, 0, 32);
      let v_t_34388 = 0;
      var v_v_34375 = v_d_34374[2 + (v_t_34388 = v_d_34374[0] !== v_vo_28106 ? -1 : v_t_34388)];
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
        v_A_34384 = v_Ka_28083(v_k_34380),
        v_x_34385 = v_Ka_28083(v_b_34381),
        v_C_34386 = v_Ka_28083(v_y_34382),
        v_T_34387 = v_Ka_28083(v_S_34383);
      let v_r_34391,
        v_s_34392,
        v_n_34393 = !1;
      v_d_34374 = 1 & v_g_34377, v_g_34377 = 64 & v_g_34377;
      if (v_g_34377 || v_m_34378 !== v_wo_28107) {
        if (v_g_34377 || v_m_34378 !== v_go_28108) {
          if (v_g_34377 || v_m_34378 !== v_mo_28109) {
            if (v_g_34377 && !v_d_34374 && 24 === v_p_34379) v_r_34391 = 3, v_s_34392 = v_yo_28113;else {
              if (!v_g_34377 || !v_d_34374 || 32 !== v_p_34379) return void v_h_34373(v_Ao_28115, 0, 0);
              v_r_34391 = 4, v_s_34392 = v_So_28114;
            }
          } else v_r_34391 = 16, v_s_34392 = v_bo_28112, v_n_34393 = !0;
        } else v_r_34391 = 16, v_s_34392 = v_ko_28111, v_n_34393 = !0;
      } else v_r_34391 = 8, v_s_34392 = v_po_28110, v_n_34393 = !0;
      v_n_34393 && (v_i_34389 = v_i_34389 >>> 2 << 2, v_e_34390 = v_e_34390 >>> 2 << 2);
      let v_a_34394 = 131072 & v_v_34375 && 1 < v_w_34376 && v___34372 ? v_w_34376 : 1,
        v_o_34395 = (v_h_34373(v_xo_28116, v_e_34390, v_i_34389), glContext.pixelStorei(glContext.UNPACK_ALIGNMENT, 1), v_e_34390),
        v_l_34396 = v_i_34389,
        v_c_34397 = 128 + 4 * v_t_34388,
        v_u_34398;
      for (let v_t_34399 = 0; v_t_34399 < v_a_34394 && 0 !== v_o_34395 && 0 !== v_l_34396; ++v_t_34399) {
        if (v_n_34393) v_u_34398 = (mathMax(4, v_o_34395) >>> 2) * (mathMax(4, v_l_34396) >>> 2) * v_r_34391, glContext.compressedTexImage2D(glContext.TEXTURE_2D, v_t_34399, v_s_34392, v_o_34395, v_l_34396, 0, new Uint8Array(v_f_34371, v_c_34397, v_u_34398));else {
          v_u_34398 = v_o_34395 * v_r_34391 * v_l_34396;
          let v_i_34400, v_e_34401, v_n_34402;
          if (v_s_34392 === v_So_28114) {
            v_i_34400 = new Uint8Array(v_u_34398), v_e_34401 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
            for (let v_t_34403 = 0; v_t_34403 < mathFloor(v_i_34400.byteLength / 4); ++v_t_34403) v_n_34402 = v_e_34401[4 * v_t_34403 + 3] << 24 | v_e_34401[4 * v_t_34403 + 2] << 16 | v_e_34401[4 * v_t_34403 + 1] << 8 | v_e_34401[4 * v_t_34403], v_i_34400[4 * v_t_34403] = (v_n_34402 & v_k_34380) >>> v_A_34384, v_i_34400[4 * v_t_34403 + 1] = (v_n_34402 & v_b_34381) >>> v_x_34385, v_i_34400[4 * v_t_34403 + 2] = (v_n_34402 & v_y_34382) >>> v_C_34386, v_i_34400[4 * v_t_34403 + 3] = (v_n_34402 & v_S_34383) >>> v_T_34387;
          } else if (v_s_34392 === v_yo_28113) {
            v_i_34400 = new Uint8Array(v_u_34398), v_e_34401 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
            for (let v_t_34404 = 0; v_t_34404 < mathFloor(v_i_34400.byteLength / 3); ++v_t_34404) v_n_34402 = v_e_34401[3 * v_t_34404 + 2] << 16 | v_e_34401[3 * v_t_34404 + 1] << 8 | v_e_34401[3 * v_t_34404], v_i_34400[3 * v_t_34404] = (v_n_34402 & v_k_34380) >> v_A_34384, v_i_34400[3 * v_t_34404 + 1] = (v_n_34402 & v_b_34381) >> v_x_34385, v_i_34400[3 * v_t_34404 + 2] = (v_n_34402 & v_y_34382) >> v_C_34386;
          } else v_i_34400 = new Uint8Array(v_f_34371, v_c_34397, v_u_34398);
          glContext.texImage2D(glContext.TEXTURE_2D, v_t_34399, v_s_34392, v_o_34395, v_l_34396, 0, v_s_34392, glContext.UNSIGNED_BYTE, v_i_34400);
        }
        v_c_34397 += v_u_34398, v_o_34395 >>>= 1, v_l_34396 >>>= 1;
      }
      glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MAG_FILTER, glContext.LINEAR), glContext.texParameteri(glContext.TEXTURE_2D, glContext.TEXTURE_MIN_FILTER, 1 < v_a_34394 ? glContext.LINEAR_MIPMAP_LINEAR : glContext.LINEAR), v_h_34373(v_Co_28117, v_e_34390, v_i_34389);
    }
  }