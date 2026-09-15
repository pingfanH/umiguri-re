// game: 语句 246 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const languagePackages = function () {
    function v_n_35079(v_t_35089, v_i_35090, v_e_35091) {
      this.ct = v_t_35089, this.uk = v_i_35090, this.fk = v_e_35091;
    }
    let v_o_35080 = !1,
      v_l_35081 = !1,
      v_r_35082 = v_B_27650,
      v_s_35083 = {
        "en-US": "/una/sakuragi.una",
        "zh-CN": "/una/zh-CN.una"
      },
      v_c_35084 = [],
      v_u_35085 = [new v_n_35079("ja-JP", "reverie", "/una/hiiragi.una"), new v_n_35079("exField", "reverie_exField", "/una/natsukawa.una")];
    function v_a_35086(v_t_35092) {
      return v_s_35083[v_t_35092] ? v_t_35092 : "ja-JP";
    }
    async function v_e_35087(v_i_35093, v_t_35094) {
      if (v_o_35080) if (v_l_35081) {
        var v_e_35095,
          v_n_35096 = v_i_35093.replace("\\", "/");
        for (const v_s_35098 of v_c_35084) if (v_s_35098.E4(v_n_35096)) return (v_e_35095 = await v_s_35098.pi(v_n_35096)) ? void v_t_35094(v_e_35095.buffer) : void v_t_35094(null);
      } else for (const v_a_35099 of v_u_35085) {
        var v_r_35097 = await new Promise(v_t_35100 => v_$r_27975.it("/" + v_a_35099.uk + "/" + v_i_35093, v_t_35100));
        if (null !== v_r_35097) return void v_t_35094(v_r_35097);
      }
      v_t_35094(null);
    }
    function v_f_35088(v_t_35101, v_i_35102) {
      v_e_35087(v_t_35101, function (v_t_35103) {
        v_i_35102(null === v_t_35103 ? null : v_r_35082.decode(v_t_35103));
      });
    }
    return {
      ue: async function (v_t_35104) {
        if (!v_o_35080) {
          var v_i_35105;
          if ("ja-JP" !== v_a_35086(currentLang) && (v_i_35105 = v_a_35086(currentLang), v_u_35085.unshift(new v_n_35079(v_i_35105, "reverie_" + v_i_35105, v_s_35083[v_i_35105]))), v_l_35081 = await new Promise(v_t_35106 => {
            hostBridge.qu("/reverie/_VERSION", () => v_t_35106(!1), () => v_t_35106(!0));
          })) for (const v_e_35107 of v_u_35085) {
            let v_i_35108 = new v_ds_27991(v_e_35107.fk, 0, 2);
            if (!(await new Promise(v_t_35109 => v_i_35108.xl(v_t_35109)))) return void v_t_35104();
            v_c_35084.push(v_i_35108);
          }
          v_o_35080 = !0;
        }
        v_t_35104();
      },
      it: v_e_35087,
      ck: function (v_i_35110) {
        return new Promise(v_t_35111 => v_e_35087(v_i_35110, v_t_35111));
      },
      Ic: v_f_35088,
      f7: function (v_i_35112) {
        return new Promise(v_t_35113 => v_f_35088(v_i_35112, v_t_35113));
      },
      Sb: async function (v_t_35114) {
        if (v_l_35081) {
          if (null === handshake.rm.gb) v_t_35114(!1);else if (v_o_35080) {
            for (let v_i_35117 = 0; v_i_35117 < v_c_35084.length; ++v_i_35117) {
              var v_e_35115 = handshake.rm.gb.find(v_t_35118 => v_t_35118.name === v_u_35085[v_i_35117].ct);
              if (!v_e_35115) return void v_t_35114(!1);
              if (!v_c_35084[v_i_35117].E4("_VERSION")) return void v_t_35114(!1);
              var v_n_35116 = await v_c_35084[v_i_35117].pi("_VERSION");
              if (!v_n_35116) return void v_t_35114(!1);
              v_n_35116 = v_Pe_28064(v_r_35082.decode(v_n_35116.buffer));
              if (null === v_n_35116 || Number.isNaN(v_n_35116)) return void v_t_35114(!1);
              if (v_n_35116 < v_e_35115.version) return void v_t_35114(!1);
            }
            v_t_35114(!0);
          } else v_t_35114(!1);
        } else v_t_35114(!0);
      }
    };
  }();