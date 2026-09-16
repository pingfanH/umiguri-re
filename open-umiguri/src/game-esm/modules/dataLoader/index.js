// 模块: dataLoader
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createDataLoader(scope) {
  let v_f_32719 = ["sm", "md", "lg"];
  return {
    ef: function (v_i_32720) {
      let v_e_32721 = [],
        v_a_32722 = [],
        v_r_32723 = [],
        v_u_32724 = {
          noFlip: !0
        };
      scope.v_Le_28076([function (v_n_32725) {
        scope.v_$r_27975.Ic(scope.v_J_27658 + "/default_order_chara.txt", function (v_t_32726) {
          if (null !== v_t_32726) {
            var v_i_32727,
              v_e_32728 = v_t_32726.replace(/\r\n/g, "\n").split("\n");
            for (let v_t_32729 = 0; v_t_32729 < v_e_32728.length; ++v_t_32729) "" !== (v_i_32727 = v_e_32728[v_t_32729].trim()) && v_r_32723.push(v_i_32727);
          }
          scope.v_Me_28078(v_n_32725);
        });
      }, function (v_i_32730) {
        scope.hostBridge.zu("/chara/", function (v_t_32731) {
          scope.v_De_28096(v_t_32731, function (v_t_32732) {
            v_t_32732.isDirectory && v_e_32721.push(v_t_32732.name);
          }), scope.v_Me_28078(v_i_32730);
        }, () => {
          scope.v_Me_28078(v_i_32730);
        });
      }, function (v_t_32733) {
        let v_s_32734, v_c_32735;
        scope.v_Fe_28101(() => function v_i_32737(v_r_32736) {
          if (0 === v_r_32736.length) return void scope.v_Me_28078(v_t_32733);
          v_s_32734 = v_r_32736.pop();
          scope.hostBridge.zu("/chara/" + v_s_32734 + "/", function (v_t_32738) {
            function v_n_32739(v_e_32740) {
              if (0 === v_e_32740.length) scope.v_Fe_28101(() => v_i_32737(v_r_32736));else {
                let v_l_32741 = v_e_32740.pop();
                if (v_l_32741.isDirectory) {
                  (v_c_32735 = new scope.v_Ir_27950()).C0 = v_s_32734 + "/" + v_l_32741.name, v_c_32735.ct = [v_c_32735.C0], v_c_32735.tf = [""], v_c_32735.Xm = v_s_32734, v_c_32735.Wm = v_s_32734;
                  let v_i_32742 = !1;
                  scope.hostBridge.zu(v_l_32741.fullPath + "/", function (v_o_32743) {
                    v_i_32742 = -1 !== v_o_32743.findIndex(v_t_32744 => "data.arc" === v_t_32744.name), scope.v_Le_28076([function (v_t_32745) {
                      -1 !== v_o_32743.findIndex(v_t_32746 => "meta.txt" === v_t_32746.name) ? scope.v_$r_27975.Ic(v_l_32741.fullPath + "/meta.txt", function (v_s_32747) {
                        if (null !== v_s_32747) {
                          let v_t_32748 = v_s_32747.replace(/\r\n/g, "\n").split("\n"),
                            v_i_32749,
                            v_e_32750 = {},
                            v_n_32751 = "ja",
                            v_r_32752 = (scope.v_De_28096(v_t_32748, function (v_t_32753) {
                              0 !== (v_i_32749 = v_t_32753.split("\t")).length && ("Variation" === v_i_32749[0] ? v_i_32749.length < 3 || (void 0 === v_e_32750[v_n_32751] && (v_e_32750[v_n_32751] = {
                                ct: [],
                                tf: []
                              }), v_e_32750[v_n_32751].ct.push(v_i_32749[1]), v_e_32750[v_n_32751].tf.push(v_i_32749[2])) : "DefSkill" === v_i_32749[0] ? v_i_32749.length < 2 || "" === v_i_32749[1] || (v_c_32735.Nm = v_i_32749[1]) : "Category" === v_i_32749[0] ? v_i_32749.length < 2 || "" === v_i_32749[1] || (v_c_32735.Wm = v_i_32749[1]) : "Lang" !== v_i_32749[0] || v_i_32749.length < 2 || "" === v_i_32749[1] || (v_n_32751 = v_i_32749[1]));
                            }), Object.keys(v_e_32750));
                          if (0 < v_r_32752.length) {
                            let v_t_32754 = v_e_32750[scope.v_lc_28208(scope.currentLang)];
                            v_t_32754 = v_t_32754 || v_e_32750[v_r_32752[0]], v_c_32735.ct = v_t_32754.ct, v_c_32735.tf = v_t_32754.tf, v_c_32735.Hm = v_t_32754.ct.length;
                          }
                        }
                        scope.v_Me_28078(v_t_32745);
                      }) : -1 !== v_o_32743.findIndex(v_t_32755 => "meta.json" === v_t_32755.name) ? scope.v_$r_27975.Ic(v_l_32741.fullPath + "/meta.json", function (v_i_32756) {
                        if (null !== v_i_32756) try {
                          let v_t_32757 = JSON.parse(v_i_32756);
                          v_c_32735.ct = [v_t_32757.meta.name], v_c_32735.tf = [v_t_32757.meta.illustrator], v_c_32735.Hm = 1;
                        } catch (v_t_32758) {}
                        scope.v_Me_28078(v_t_32745);
                      }) : scope.v_Me_28078(v_t_32745);
                    }, function (v_t_32759) {
                      let v_r_32760 = v_c_32735.Hm,
                        v_n_32761 = "",
                        v_s_32762 = v_i_32742 ? new scope.v_ds_27991(v_l_32741.fullPath + "/data.arc", 0, 1) : void 0;
                      function v_e_32763(v_i_32765, v_e_32766) {
                        v_i_32765 >= v_r_32760 ? scope.v_Me_28078(v_t_32759) : (v_n_32761 = "image_" + v_i_32765 + "_" + v_f_32719[v_e_32766] + ".png", -1 !== v_o_32743.findIndex(v_t_32767 => v_t_32767.name === v_n_32761) ? scope.v__o_28104(v_l_32741.fullPath + "/" + v_n_32761, function (v_t_32768) {
                          v_t_32768 && (scope.renderer.Yt.Zt["chara:" + v_i_32765 + ":" + v_e_32766 + ":" + v_c_32735.C0] = glRuntime.Texture.fromImage(v_t_32768, v_u_32724)), v_a_32764(v_i_32765, v_e_32766);
                        }) : (v_n_32761 = "dds_" + v_i_32765 + "_" + v_f_32719[v_e_32766] + ".dds", -1 !== v_o_32743.findIndex(v_t_32769 => v_t_32769.name === v_n_32761) ? scope.v_$r_27975.it(v_l_32741.fullPath + "/" + v_n_32761, function (v_t_32770) {
                          if (null !== v_t_32770) {
                            let v_n_32771 = null;
                            scope.v_Io_28120(v_t_32770, !1, function (v_t_32772, v_i_32773, v_e_32774) {
                              v_t_32772 === scope.v_xo_28116 ? (v_n_32771 = new glRuntime.Texture(v_i_32773, v_e_32774, v_u_32724), v_i_32773 === v_e_32774 && (v_c_32735.ub = !0)) : v_t_32772 === scope.v_Ao_28115 && (v_n_32771 = null);
                            }), v_n_32771 && (scope.renderer.Yt.Zt["chara:" + v_i_32765 + ":" + v_e_32766 + ":" + v_c_32735.C0] = v_n_32771);
                          }
                          v_c_32735.vb = !0, v_a_32764(v_i_32765, v_e_32766);
                        }) : v_a_32764(v_i_32765, v_e_32766)));
                      }
                      function v_a_32764(v_t_32775, v_i_32776) {
                        scope.v_Fe_28101(() => {
                          v_i_32776 < 1 ? v_e_32763(v_t_32775, v_i_32776 + 1) : v_e_32763(v_t_32775 + 1, 0);
                        });
                      }
                      v_c_32735.gi = v_s_32762, v_i_32742 ? v_s_32762.xl(function () {
                        function v_e_32777(v_i_32779, v_e_32780) {
                          v_i_32779 >= v_r_32760 ? scope.v_Me_28078(v_t_32759) : v_s_32762.pi("image_" + v_i_32779 + "_" + v_f_32719[v_e_32780]).then(function (v_t_32781) {
                            if (v_t_32781) {
                              let v_n_32782 = null;
                              scope.v_Io_28120(v_t_32781.buffer, !1, (v_t_32783, v_i_32784, v_e_32785) => {
                                v_t_32783 === scope.v_xo_28116 ? (v_n_32782 = new glRuntime.Texture(v_i_32784, v_e_32785, {
                                  wrapS: scope.glContext.CLAMP_TO_EDGE,
                                  wrapT: scope.glContext.CLAMP_TO_EDGE,
                                  format: scope.glContext.RGBA
                                }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32783 === scope.v_Ao_28115 && (v_n_32782 = null);
                              }), v_n_32782 && (scope.renderer.Yt.Zt["chara:" + v_i_32779 + ":" + v_e_32780 + ":" + v_c_32735.C0] = v_n_32782);
                            }
                            v_n_32778(v_i_32779, v_e_32780);
                          });
                        }
                        function v_n_32778(v_t_32786, v_i_32787) {
                          scope.v_Fe_28101(() => {
                            v_i_32787 < 1 ? v_e_32777(v_t_32786, v_i_32787 + 1) : v_e_32777(v_t_32786 + 1, 0);
                          });
                        }
                        scope.v_Fe_28101(() => v_e_32777(0, 0));
                      }) : scope.v_Fe_28101(() => v_e_32763(0, 0));
                    }, function (v_t_32788) {
                      v_a_32722.push(v_c_32735), scope.v_Fe_28101(() => v_n_32739(v_e_32740));
                    }]);
                  }, () => scope.v_Fe_28101(() => v_n_32739(v_e_32740)));
                } else scope.v_Fe_28101(() => v_n_32739(v_e_32740));
              }
            }
            scope.v_Fe_28101(() => v_n_32739(v_t_32738));
          }, () => {
            scope.v_Fe_28101(() => v_i_32737(v_r_32736));
          });
        }(v_e_32721));
      }, function (v_t_32789) {
        v_a_32722.sort((v_t_32790, v_i_32791) => v_t_32790.C0 < v_i_32791.C0 ? -1 : v_t_32790.C0 > v_i_32791.C0 ? 1 : 0), scope.v_Fe_28101(() => v_i_32720(v_a_32722, v_r_32723));
      }]);
    },
    Pe: function () {
      var v_t_32792 = new scope.v_Ir_27950();
      return v_t_32792.C0 = ":sys_dummy", v_t_32792.Xm = ":sys_dummy", v_t_32792.ct = "???", v_t_32792;
    },
    Si: function (v_t_32793, v_i_32794, v_e_32795) {
      if (void 0 === v_t_32793) v_e_32795(null);else {
        let v_r_32796 = {
          noFlip: !0
        };
        v_t_32793.gi ? v_t_32793.gi.pi("image_" + v_i_32794 + "_lg").then(function (v_t_32797) {
          let v_n_32798 = null;
          v_t_32797 && scope.v_Io_28120(v_t_32797.buffer, !1, (v_t_32799, v_i_32800, v_e_32801) => {
            v_t_32799 === scope.v_xo_28116 ? (v_n_32798 = new glRuntime.Texture(v_i_32800, v_e_32801, {
              wrapS: scope.glContext.CLAMP_TO_EDGE,
              wrapT: scope.glContext.CLAMP_TO_EDGE,
              format: scope.glContext.RGBA
            }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32799 === scope.v_Ao_28115 && (v_n_32798 = null);
          }), v_n_32798 ? v_e_32795(v_n_32798) : v_e_32795(null);
        }) : v_t_32793.vb ? scope.v_$r_27975.it("/chara/" + v_t_32793.C0 + "/dds_" + v_i_32794 + "_lg.dds", function (v_t_32802) {
          if (null === v_t_32802) v_e_32795(null);else {
            let v_n_32803 = null;
            scope.v_Io_28120(v_t_32802, !1, function (v_t_32804, v_i_32805, v_e_32806) {
              v_t_32804 === scope.v_xo_28116 ? v_n_32803 = new glRuntime.Texture(v_i_32805, v_e_32806, v_r_32796) : v_t_32804 === scope.v_Ao_28115 && (v_n_32803 = null);
            }), v_e_32795(v_n_32803);
          }
        }) : scope.v__o_28104("/chara/" + v_t_32793.C0 + "/image_" + v_i_32794 + "_lg.png", function (v_t_32807) {
          v_e_32795(v_t_32807 ? glRuntime.Texture.fromImage(v_t_32807, v_r_32796) : null);
        });
      }
    }
  };
}
