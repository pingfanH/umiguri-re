// game: 语句 97 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const v_Wr_27968 = function () {
      let v_a_33170 = new Map(),
        v_n_33171 = new Map();
      function v_o_33172(v_t_33173, v_i_33174) {
        let v_e_33175 = v_n_33171.get(v_t_33173);
        v_e_33175 || (v_e_33175 = [], v_n_33171.set(v_t_33173, v_e_33175)), v_e_33175.push(v_i_33174);
      }
      return {
        _n: function (v_r_33176) {
          let v_s_33177 = new v_ms_27995();
          v_Le_28076([v_i_33178 => {
            languagePackages.it("tables/coopChatTable.krtbl", function (v_t_33179) {
              null === v_t_33179 ? v_r_33176(!1) : (v_s_33177.uf(v_t_33179), v_Me_28078(v_i_33178));
            });
          }, v_t_33180 => {
            var v_i_33181 = v_s_33177.ff("_root");
            if (v_i_33181) {
              for (const v_n_33183 of v_i_33181.hf()) {
                var v_e_33182 = new v_Vr_27967(v_n_33183[0], v_n_33183[1], v_n_33183[2], v_n_33183[3], v_n_33183[4], v_n_33183[5], v_n_33183[6], v_n_33183[7]);
                v_a_33170.set(v_e_33182.fI, v_e_33182), v_e_33182.SI && v_o_33172(0, v_e_33182.fI), v_e_33182.AI && v_o_33172(1, v_e_33182.fI), v_e_33182.xI && v_o_33172(2, v_e_33182.fI), v_e_33182.CI && v_o_33172(3, v_e_33182.fI), v_e_33182.TI && v_o_33172(4, v_e_33182.fI);
              }
              v_r_33176(!0);
            } else v_r_33176(!1);
          }]);
        },
        oI: v_t_33184 => v_a_33170.get(v_t_33184),
        NI: v_t_33185 => v_n_33171.get(v_t_33185)
      };
    }(),
    v_Xr_27969 = {
      _n: function (v_a_33186) {
        let v_o_33187 = new v_ms_27995();
        v_Le_28076([v_i_33188 => {
          languagePackages.it("shaders/shaders.krtbl", function (v_t_33189) {
            v_t_33189 ? (v_o_33187.uf(v_t_33189), v_Me_28078(v_i_33188)) : v_a_33186();
          });
        }, v_t_33190 => {
          var v_e_33191 = v_o_33187.ff("_shaders");
          if (v_e_33191) {
            var v_n_33192 = {},
              v_r_33193 = [["gl_Vertex", "i"], ["gl_Color", "j"], ["gl_Normal", "k"], ["gl_TexCoord", "l"], ["gl_ModelViewProjectionMatrix", "m"], ["gl_Position=", "v"], ["gl_FragColor=", "w"], ["gl_Position", "x"], ["gl_FragColor", "y"], ["varying ", "0"], ["uniform ", "1"], ["attribute ", "2"], ["float", "3"], ["vec2(", "A"], ["vec3(", "B"], ["vec4(", "C"], ["mat2(", "D"], ["mat3(", "E"], ["mat4(", "F"], ["vec2 ", "4"], ["vec3 ", "5"], ["vec4 ", "6"], ["mat2 ", "7"], ["mat3 ", "8"], ["mat4 ", "9"], ["sampler2D", "a"], ["void main(){", "b"], ["texture2D", "c"], ["texture", "d"], ["coord", "e"], ["opacity", "f"], ["vColor", "g"], ["color", "h"], ["col.", "p"], ["col", "q"], ["min(", "H"], ["max(", "I"], ["sin(", "J"], ["cos(", "K"], ["mix(", "L"], [");}", "o"], [".)*", "r"]];
            let v_t_33194 = "",
              v_i_33195 = 0;
            for (const v_s_33196 of v_e_33191.hf()) {
              for (v_t_33194 = v_s_33196[1], v_i_33195 = v_r_33193.length - 1; 0 <= v_i_33195; --v_i_33195) v_t_33194 = v_t_33194.replaceAll("" + v_r_33193[v_i_33195][1], v_r_33193[v_i_33195][0]);
              v_n_33192[v_s_33196[0]] = v_t_33194;
            }
            v_Je_27574 = new glRuntime.Shader(v_n_33192[1], v_n_33192[0]), v_je_27575 = new glRuntime.Shader(v_n_33192[3], v_n_33192[2]), v_Oe_27576 = new glRuntime.Shader(v_n_33192[5], v_n_33192[4]), v_u_27577 = new glRuntime.Shader(v_n_33192[7], v_n_33192[6]), v_f_27578 = new glRuntime.Shader(v_n_33192[9], v_n_33192[8]), v_Ve_27579 = new glRuntime.Shader(v_n_33192[11], v_n_33192[10]), v_We_27580 = new glRuntime.Shader(v_n_33192[13], v_n_33192[12]), v_Xe_27581 = new glRuntime.Shader(v_n_33192[15], v_n_33192[14]), v_ze_27582 = new glRuntime.Shader(v_n_33192[17], v_n_33192[16]), v_Ke_27583 = new glRuntime.Shader(v_n_33192[19], v_n_33192[18]), v_Ye_27584 = new glRuntime.Shader(v_n_33192[21], v_n_33192[20]), v_qe_27585 = new glRuntime.Shader(v_n_33192[23], v_n_33192[22]), v_Ze_27586 = new glRuntime.Shader(v_n_33192[25], v_n_33192[24]), v___27587 = new glRuntime.Shader(v_n_33192[27], v_n_33192[26]), v_$e_27588 = new glRuntime.Shader(v_n_33192[29], v_n_33192[28]), v_Qe_27589 = new glRuntime.Shader(v_n_33192[31], v_n_33192[30]), v_tn_27590 = new glRuntime.Shader(v_n_33192[33], v_n_33192[32]), v_en_27591 = new glRuntime.Shader(v_n_33192[35], v_n_33192[34]), v_nn_27592 = new glRuntime.Shader(v_n_33192[37], v_n_33192[36]), v_rn_27593 = new glRuntime.Shader(v_n_33192[39], v_n_33192[38]), v_sn_27594 = new glRuntime.Shader(v_n_33192[41], v_n_33192[40]), v_an_27595 = new glRuntime.Shader(v_n_33192[43], v_n_33192[42]), v_on_27596 = new glRuntime.Shader(v_n_33192[45], v_n_33192[44]), v_ln_27597 = new glRuntime.Shader(v_n_33192[47], v_n_33192[46]), v_h_27598 = new glRuntime.Shader(v_n_33192[49], v_n_33192[48]), v_cn_27599 = new glRuntime.Shader(v_n_33192[51], v_n_33192[50]), v_un_27600 = new glRuntime.Shader(v_n_33192[53], v_n_33192[52]), v_fn_27601 = new glRuntime.Shader(v_n_33192[55], v_n_33192[54]), v__n_27602 = new glRuntime.Shader(v_n_33192[57], v_n_33192[56]), v_hn_27603 = new glRuntime.Shader(v_n_33192[59], v_n_33192[58]), v_dn_27604 = new glRuntime.Shader(v_n_33192[61], v_n_33192[60]), v_d_27605 = new glRuntime.Shader(v_n_33192[63], v_n_33192[62]), v_v_27606 = new glRuntime.Shader(v_n_33192[65], v_n_33192[64]), v_w_27607 = new glRuntime.Shader(v_n_33192[67], v_n_33192[66]), v_m_27612 = new glRuntime.Shader(v_n_33192[69], v_n_33192[68]), v_Ct_27608 = new glRuntime.Shader(v_n_33192[71], v_n_33192[70]), v_Tt_27609 = new glRuntime.Shader(v_n_33192[73], v_n_33192[72]), v_It_27610 = new glRuntime.Shader(v_n_33192[75], v_n_33192[74]), v_Pt_27611 = new glRuntime.Shader(v_n_33192[77], v_n_33192[76]), v_Rt_27613 = new glRuntime.Shader(v_n_33192[79], v_n_33192[78]), v_Lt_27614 = new glRuntime.Shader(v_n_33192[81], v_n_33192[80]), v_Mt_27615 = new glRuntime.Shader(v_n_33192[83], v_n_33192[82]), v_Et_27616 = new glRuntime.Shader(v_n_33192[85], v_n_33192[84]), v_Dt_27617 = new glRuntime.Shader(v_n_33192[87], v_n_33192[86]), v_Ft_27618 = new glRuntime.Shader(v_n_33192[89], v_n_33192[88]), v_Bt_27619 = new glRuntime.Shader(v_n_33192[91], v_n_33192[90]), v_b_27620 = new glRuntime.Shader(v_n_33192[93], v_n_33192[92]), v_S_27621 = new glRuntime.Shader(v_n_33192[95], v_n_33192[94]), v_A_27622 = new glRuntime.Shader(v_n_33192[97], v_n_33192[96]), v_x_27623 = new glRuntime.Shader(v_n_33192[99], v_n_33192[98]), v_C_27624 = new glRuntime.Shader(v_n_33192[101], v_n_33192[100]), v_a_33186(!0);
          } else v_a_33186(!1);
        }]);
      }
    };