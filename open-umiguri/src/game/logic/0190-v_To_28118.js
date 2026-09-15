// game: 语句 190 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  async function v_To_28118(v_t_34355, v_i_34356, v_r_34357) {
    if (v_i_34356) {
      let v_n_34359 = null;
      return v_Io_28120(await v_t_34355.arrayBuffer(), !1, (v_t_34360, v_i_34361, v_e_34362) => {
        v_t_34360 === v_xo_28116 ? (v_n_34359 = new m_GL_0.Texture(v_i_34361, v_e_34362, {
          wrapS: v_se_27562.CLAMP_TO_EDGE,
          wrapT: v_se_27562.CLAMP_TO_EDGE,
          format: v_r_34357 ? v_se_27562.RGBA : v_se_27562.RGB
        }), v_se_27562.pixelStorei(v_se_27562.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_34360 === v_Ao_28115 && (v_n_34359 = null);
      }), v_n_34359;
    }
    let v_e_34358 = URL.createObjectURL(v_t_34355);
    v_i_34356 = await new Promise(v_t_34363 => v__o_28104(v_e_34358, v_t_34363)), v_t_34355 = v_i_34356 ? m_GL_0.Texture.fromImage(v_i_34356, {
      noFlip: !0,
      wrapS: v_se_27562.CLAMP_TO_EDGE,
      wrapT: v_se_27562.CLAMP_TO_EDGE,
      format: v_r_34357 ? v_se_27562.RGBA : v_se_27562.RGB
    }) : null;
    return URL.revokeObjectURL(v_e_34358), v_t_34355;
  }