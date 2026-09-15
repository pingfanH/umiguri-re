// game: 语句 85 (VariableDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  const dataLoader = function () {
      let v_f_32719 = ["sm", "md", "lg"];
      return {
        ef: function (v_i_32720) {
          let v_e_32721 = [],
            v_a_32722 = [],
            v_r_32723 = [],
            v_u_32724 = {
              noFlip: !0
            };
          v_Le_28076([function (v_n_32725) {
            v_$r_27975.Ic(v_J_27658 + "/default_order_chara.txt", function (v_t_32726) {
              if (null !== v_t_32726) {
                var v_i_32727,
                  v_e_32728 = v_t_32726.replace(/\r\n/g, "\n").split("\n");
                for (let v_t_32729 = 0; v_t_32729 < v_e_32728.length; ++v_t_32729) "" !== (v_i_32727 = v_e_32728[v_t_32729].trim()) && v_r_32723.push(v_i_32727);
              }
              v_Me_28078(v_n_32725);
            });
          }, function (v_i_32730) {
            hostBridge.zu("/chara/", function (v_t_32731) {
              v_De_28096(v_t_32731, function (v_t_32732) {
                v_t_32732.isDirectory && v_e_32721.push(v_t_32732.name);
              }), v_Me_28078(v_i_32730);
            }, () => {
              v_Me_28078(v_i_32730);
            });
          }, function (v_t_32733) {
            let v_s_32734, v_c_32735;
            v_Fe_28101(() => function v_i_32737(v_r_32736) {
              if (0 === v_r_32736.length) return void v_Me_28078(v_t_32733);
              v_s_32734 = v_r_32736.pop();
              hostBridge.zu("/chara/" + v_s_32734 + "/", function (v_t_32738) {
                function v_n_32739(v_e_32740) {
                  if (0 === v_e_32740.length) v_Fe_28101(() => v_i_32737(v_r_32736));else {
                    let v_l_32741 = v_e_32740.pop();
                    if (v_l_32741.isDirectory) {
                      (v_c_32735 = new v_Ir_27950()).C0 = v_s_32734 + "/" + v_l_32741.name, v_c_32735.ct = [v_c_32735.C0], v_c_32735.tf = [""], v_c_32735.Xm = v_s_32734, v_c_32735.Wm = v_s_32734;
                      let v_i_32742 = !1;
                      hostBridge.zu(v_l_32741.fullPath + "/", function (v_o_32743) {
                        v_i_32742 = -1 !== v_o_32743.findIndex(v_t_32744 => "data.arc" === v_t_32744.name), v_Le_28076([function (v_t_32745) {
                          -1 !== v_o_32743.findIndex(v_t_32746 => "meta.txt" === v_t_32746.name) ? v_$r_27975.Ic(v_l_32741.fullPath + "/meta.txt", function (v_s_32747) {
                            if (null !== v_s_32747) {
                              let v_t_32748 = v_s_32747.replace(/\r\n/g, "\n").split("\n"),
                                v_i_32749,
                                v_e_32750 = {},
                                v_n_32751 = "ja",
                                v_r_32752 = (v_De_28096(v_t_32748, function (v_t_32753) {
                                  0 !== (v_i_32749 = v_t_32753.split("\t")).length && ("Variation" === v_i_32749[0] ? v_i_32749.length < 3 || (void 0 === v_e_32750[v_n_32751] && (v_e_32750[v_n_32751] = {
                                    ct: [],
                                    tf: []
                                  }), v_e_32750[v_n_32751].ct.push(v_i_32749[1]), v_e_32750[v_n_32751].tf.push(v_i_32749[2])) : "DefSkill" === v_i_32749[0] ? v_i_32749.length < 2 || "" === v_i_32749[1] || (v_c_32735.Nm = v_i_32749[1]) : "Category" === v_i_32749[0] ? v_i_32749.length < 2 || "" === v_i_32749[1] || (v_c_32735.Wm = v_i_32749[1]) : "Lang" !== v_i_32749[0] || v_i_32749.length < 2 || "" === v_i_32749[1] || (v_n_32751 = v_i_32749[1]));
                                }), Object.keys(v_e_32750));
                              if (0 < v_r_32752.length) {
                                let v_t_32754 = v_e_32750[v_lc_28208(currentLang)];
                                v_t_32754 = v_t_32754 || v_e_32750[v_r_32752[0]], v_c_32735.ct = v_t_32754.ct, v_c_32735.tf = v_t_32754.tf, v_c_32735.Hm = v_t_32754.ct.length;
                              }
                            }
                            v_Me_28078(v_t_32745);
                          }) : -1 !== v_o_32743.findIndex(v_t_32755 => "meta.json" === v_t_32755.name) ? v_$r_27975.Ic(v_l_32741.fullPath + "/meta.json", function (v_i_32756) {
                            if (null !== v_i_32756) try {
                              let v_t_32757 = JSON.parse(v_i_32756);
                              v_c_32735.ct = [v_t_32757.meta.name], v_c_32735.tf = [v_t_32757.meta.illustrator], v_c_32735.Hm = 1;
                            } catch (v_t_32758) {}
                            v_Me_28078(v_t_32745);
                          }) : v_Me_28078(v_t_32745);
                        }, function (v_t_32759) {
                          let v_r_32760 = v_c_32735.Hm,
                            v_n_32761 = "",
                            v_s_32762 = v_i_32742 ? new v_ds_27991(v_l_32741.fullPath + "/data.arc", 0, 1) : void 0;
                          function v_e_32763(v_i_32765, v_e_32766) {
                            v_i_32765 >= v_r_32760 ? v_Me_28078(v_t_32759) : (v_n_32761 = "image_" + v_i_32765 + "_" + v_f_32719[v_e_32766] + ".png", -1 !== v_o_32743.findIndex(v_t_32767 => v_t_32767.name === v_n_32761) ? v__o_28104(v_l_32741.fullPath + "/" + v_n_32761, function (v_t_32768) {
                              v_t_32768 && (renderer.Yt.Zt["chara:" + v_i_32765 + ":" + v_e_32766 + ":" + v_c_32735.C0] = glRuntime.Texture.fromImage(v_t_32768, v_u_32724)), v_a_32764(v_i_32765, v_e_32766);
                            }) : (v_n_32761 = "dds_" + v_i_32765 + "_" + v_f_32719[v_e_32766] + ".dds", -1 !== v_o_32743.findIndex(v_t_32769 => v_t_32769.name === v_n_32761) ? v_$r_27975.it(v_l_32741.fullPath + "/" + v_n_32761, function (v_t_32770) {
                              if (null !== v_t_32770) {
                                let v_n_32771 = null;
                                v_Io_28120(v_t_32770, !1, function (v_t_32772, v_i_32773, v_e_32774) {
                                  v_t_32772 === v_xo_28116 ? (v_n_32771 = new glRuntime.Texture(v_i_32773, v_e_32774, v_u_32724), v_i_32773 === v_e_32774 && (v_c_32735.ub = !0)) : v_t_32772 === v_Ao_28115 && (v_n_32771 = null);
                                }), v_n_32771 && (renderer.Yt.Zt["chara:" + v_i_32765 + ":" + v_e_32766 + ":" + v_c_32735.C0] = v_n_32771);
                              }
                              v_c_32735.vb = !0, v_a_32764(v_i_32765, v_e_32766);
                            }) : v_a_32764(v_i_32765, v_e_32766)));
                          }
                          function v_a_32764(v_t_32775, v_i_32776) {
                            v_Fe_28101(() => {
                              v_i_32776 < 1 ? v_e_32763(v_t_32775, v_i_32776 + 1) : v_e_32763(v_t_32775 + 1, 0);
                            });
                          }
                          v_c_32735.gi = v_s_32762, v_i_32742 ? v_s_32762.xl(function () {
                            function v_e_32777(v_i_32779, v_e_32780) {
                              v_i_32779 >= v_r_32760 ? v_Me_28078(v_t_32759) : v_s_32762.pi("image_" + v_i_32779 + "_" + v_f_32719[v_e_32780]).then(function (v_t_32781) {
                                if (v_t_32781) {
                                  let v_n_32782 = null;
                                  v_Io_28120(v_t_32781.buffer, !1, (v_t_32783, v_i_32784, v_e_32785) => {
                                    v_t_32783 === v_xo_28116 ? (v_n_32782 = new glRuntime.Texture(v_i_32784, v_e_32785, {
                                      wrapS: glContext.CLAMP_TO_EDGE,
                                      wrapT: glContext.CLAMP_TO_EDGE,
                                      format: glContext.RGBA
                                    }), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32783 === v_Ao_28115 && (v_n_32782 = null);
                                  }), v_n_32782 && (renderer.Yt.Zt["chara:" + v_i_32779 + ":" + v_e_32780 + ":" + v_c_32735.C0] = v_n_32782);
                                }
                                v_n_32778(v_i_32779, v_e_32780);
                              });
                            }
                            function v_n_32778(v_t_32786, v_i_32787) {
                              v_Fe_28101(() => {
                                v_i_32787 < 1 ? v_e_32777(v_t_32786, v_i_32787 + 1) : v_e_32777(v_t_32786 + 1, 0);
                              });
                            }
                            v_Fe_28101(() => v_e_32777(0, 0));
                          }) : v_Fe_28101(() => v_e_32763(0, 0));
                        }, function (v_t_32788) {
                          v_a_32722.push(v_c_32735), v_Fe_28101(() => v_n_32739(v_e_32740));
                        }]);
                      }, () => v_Fe_28101(() => v_n_32739(v_e_32740)));
                    } else v_Fe_28101(() => v_n_32739(v_e_32740));
                  }
                }
                v_Fe_28101(() => v_n_32739(v_t_32738));
              }, () => {
                v_Fe_28101(() => v_i_32737(v_r_32736));
              });
            }(v_e_32721));
          }, function (v_t_32789) {
            v_a_32722.sort((v_t_32790, v_i_32791) => v_t_32790.C0 < v_i_32791.C0 ? -1 : v_t_32790.C0 > v_i_32791.C0 ? 1 : 0), v_Fe_28101(() => v_i_32720(v_a_32722, v_r_32723));
          }]);
        },
        Pe: function () {
          var v_t_32792 = new v_Ir_27950();
          return v_t_32792.C0 = ":sys_dummy", v_t_32792.Xm = ":sys_dummy", v_t_32792.ct = "???", v_t_32792;
        },
        Si: function (v_t_32793, v_i_32794, v_e_32795) {
          if (void 0 === v_t_32793) v_e_32795(null);else {
            let v_r_32796 = {
              noFlip: !0
            };
            v_t_32793.gi ? v_t_32793.gi.pi("image_" + v_i_32794 + "_lg").then(function (v_t_32797) {
              let v_n_32798 = null;
              v_t_32797 && v_Io_28120(v_t_32797.buffer, !1, (v_t_32799, v_i_32800, v_e_32801) => {
                v_t_32799 === v_xo_28116 ? (v_n_32798 = new glRuntime.Texture(v_i_32800, v_e_32801, {
                  wrapS: glContext.CLAMP_TO_EDGE,
                  wrapT: glContext.CLAMP_TO_EDGE,
                  format: glContext.RGBA
                }), glContext.pixelStorei(glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32799 === v_Ao_28115 && (v_n_32798 = null);
              }), v_n_32798 ? v_e_32795(v_n_32798) : v_e_32795(null);
            }) : v_t_32793.vb ? v_$r_27975.it("/chara/" + v_t_32793.C0 + "/dds_" + v_i_32794 + "_lg.dds", function (v_t_32802) {
              if (null === v_t_32802) v_e_32795(null);else {
                let v_n_32803 = null;
                v_Io_28120(v_t_32802, !1, function (v_t_32804, v_i_32805, v_e_32806) {
                  v_t_32804 === v_xo_28116 ? v_n_32803 = new glRuntime.Texture(v_i_32805, v_e_32806, v_r_32796) : v_t_32804 === v_Ao_28115 && (v_n_32803 = null);
                }), v_e_32795(v_n_32803);
              }
            }) : v__o_28104("/chara/" + v_t_32793.C0 + "/image_" + v_i_32794 + "_lg.png", function (v_t_32807) {
              v_e_32795(v_t_32807 ? glRuntime.Texture.fromImage(v_t_32807, v_r_32796) : null);
            });
          }
        }
      };
    }(),
    v_Rr_27952 = {
      ef: function (v_i_32808) {
        let v_o_32809 = [],
          v_l_32810 = [],
          v_c_32811 = [];
        v_Le_28076([function (v_i_32812) {
          hostBridge.zu("/titles/", function (v_t_32813) {
            v_oo_28098(v_t_32813, function (v_i_32814, v_t_32815, v_e_32816) {
              if (v_e_32816.isDirectory) return v_i_32814();
              v_$r_27975.Ic(v_e_32816.fullPath, function (v_t_32817) {
                if (null !== v_t_32817) {
                  v_t_32817 = v_t_32817.replace(/\r\n/g, "\n").split("\n");
                  let v_i_32818;
                  v_De_28096(v_t_32817, function (v_t_32819) {
                    (v_i_32818 = v_t_32819.split("\t")).length < 3 || "" === v_i_32818[0] || "" === v_i_32818[2] || 7 <= (v_t_32819 = mathMin(mathMax(v_Pe_28064(v_i_32818[1]), 0), 7)) || v_o_32809.push({
                      id: v_i_32818[0],
                      rarity: v_t_32819,
                      text: v_i_32818[2],
                      desc: void 0 === v_i_32818[3] ? "-" : v_i_32818[3]
                    });
                  });
                }
                v_i_32814();
              });
            }, function () {
              v_Me_28078(v_i_32812);
            });
          }, () => {
            v_Me_28078(v_i_32812);
          });
        }, async function (v_t_32820) {
          var v_i_32821,
            v_e_32822,
            v_n_32823 = await systemMisc.t2(),
            v_r_32824 = await languagePackages.f7("titles/title_0001.txt");
          if (null !== v_r_32824) for (v_e_32822 of v_r_32824.replace(/\r\n/g, "\n").split("\n")) if (!((v_i_32821 = v_e_32822.split("\t")).length < 5) && "" !== v_i_32821[0] && "" !== v_i_32821[3]) {
            var v_s_32825 = mathMin(mathMax(v_Pe_28064(v_i_32821[2]), 0), 9);
            if (!(9 <= v_s_32825)) {
              var v_a_32826 = v_Pe_28064(v_i_32821[1]);
              if (0 !== v_a_32826) {
                if (1 !== v_a_32826) continue;
                if (!v_n_32823) continue;
              }
              v_o_32809.push({
                id: v_i_32821[0],
                rarity: v_s_32825,
                text: v_i_32821[3],
                desc: void 0 === v_i_32821[4] ? "-" : v_i_32821[4]
              });
            }
          }
          v_Me_28078(v_t_32820);
        }, function (v_i_32827) {
          hostBridge.zu("/nameplates/", function (v_t_32828) {
            v_oo_28098(v_t_32828, function (v_s_32829, v_t_32830, v_a_32831) {
              if (!v_a_32831.isDirectory) return v_s_32829();
              hostBridge.zu(v_a_32831.fullPath + "/", function (v_i_32832) {
                let v_e_32833 = !1,
                  v_n_32834 = !1,
                  v_r_32835 = !1;
                for (let v_t_32836 = 0; v_t_32836 < v_i_32832.length && (v_n_32834 || "meta.txt" !== v_i_32832[v_t_32836].name ? v_n_32834 || "meta.json" !== v_i_32832[v_t_32836].name ? v_r_32835 || "image.png" !== v_i_32832[v_t_32836].name || (v_r_32835 = !0) : v_n_32834 = !0 : v_e_32833 = !0, !v_e_32833 && !v_n_32834 || !v_r_32835); ++v_t_32836);
                if (!v_e_32833 && !v_n_32834 || !v_r_32835) return v_s_32829();
                v_e_32833 ? v_$r_27975.Ic(v_a_32831.fullPath + "/meta.txt", function (v_t_32837) {
                  if (null !== v_t_32837) {
                    v_t_32837 = v_t_32837.replace(/\r\n/g, "\n").split("\n");
                    let v_i_32838,
                      v_e_32839 = {
                        id: v_a_32831.name,
                        text: ""
                      };
                    v_De_28096(v_t_32837, function (v_t_32840) {
                      0 === (v_i_32838 = v_t_32840.split("\t")).length || "Name" !== v_i_32838[0] || v_i_32838.length < 2 || (v_e_32839.text = v_i_32838[1]);
                    }), v_l_32810.push(v_e_32839);
                  }
                  v_s_32829();
                }) : v_$r_27975.Ic(v_a_32831.fullPath + "/meta.json", function (v_i_32841) {
                  if (null !== v_i_32841) {
                    let v_t_32843 = void 0;
                    try {
                      var v_e_32842 = JSON.parse(v_i_32841);
                      v_t_32843 = v_e_32842.name;
                    } catch (v_t_32844) {}
                    "string" == typeof v_t_32843 && v_l_32810.push({
                      id: v_a_32831.name,
                      text: v_t_32843
                    });
                  }
                  v_s_32829();
                });
              }, v_s_32829);
            }, function () {
              v_Me_28078(v_i_32827);
            });
          }, () => {
            v_Me_28078(v_i_32827);
          });
        }, function (v_i_32845) {
          hostBridge.zu("/voices/", function (v_t_32846) {
            v_oo_28098(v_t_32846, function (v_n_32847, v_t_32848, v_o_32849) {
              if (!v_o_32849.isDirectory) return v_n_32847();
              hostBridge.zu(v_o_32849.fullPath + "/", function (v_t_32850) {
                -1 !== v_t_32850.findIndex(v_t_32851 => "meta.txt" === v_t_32851.name) ? v_$r_27975.Ic(v_o_32849.fullPath + "/meta.txt", function (v_a_32852) {
                  if (null !== v_a_32852) {
                    v_a_32852 = v_a_32852.replace(/\r\n/g, "\n").split("\n");
                    let v_i_32853,
                      v_e_32854 = {
                        id: v_o_32849.name,
                        text: "",
                        desc: "",
                        notice: "",
                        arc: !1,
                        has_long_voice: !1,
                        volume: 1
                      },
                      v_n_32855 = !1,
                      v_r_32856 = {},
                      v_s_32857 = "ja";
                    if (v_De_28096(v_a_32852, function (v_t_32858) {
                      return 0 !== (v_i_32853 = v_t_32858.split("\t")).length && ("Version" === v_i_32853[0] ? !(v_i_32853.length < 2) && 1 !== v_Pe_28064(v_i_32853[1]) && (v_n_32855 = !0) : void ("Volume" === v_i_32853[0] ? v_i_32853.length < 2 || (v_e_32854.volume = v_Re_28066(v_i_32853[1])) : "Name" === v_i_32853[0] ? v_i_32853.length < 2 || (void 0 === v_r_32856[v_s_32857] && (v_r_32856[v_s_32857] = {
                        ct: "",
                        if: "",
                        nf: ""
                      }), v_r_32856[v_s_32857].ct = v_i_32853[1]) : "Desc" === v_i_32853[0] ? v_i_32853.length < 2 || (void 0 === v_r_32856[v_s_32857] && (v_r_32856[v_s_32857] = {
                        ct: "",
                        if: "",
                        nf: ""
                      }), v_r_32856[v_s_32857].if = v_i_32853[1].replaceAll("$n$", "\n")) : "Notice" === v_i_32853[0] ? v_i_32853.length < 2 || (void 0 === v_r_32856[v_s_32857] && (v_r_32856[v_s_32857] = {
                        ct: "",
                        if: "",
                        nf: ""
                      }), v_r_32856[v_s_32857].nf = v_i_32853[1].replaceAll("$n$", "\n")) : "Arc" === v_i_32853[0] ? v_i_32853.length < 2 || (v_e_32854.arc = v_La_28062(v_i_32853[1])) : "Lang" !== v_i_32853[0] || v_i_32853.length < 2 || "" === v_i_32853[1] || (v_s_32857 = v_i_32853[1])));
                    }), !v_n_32855) {
                      v_a_32852 = Object.keys(v_r_32856);
                      if (0 < v_a_32852.length) {
                        let v_t_32859 = v_r_32856[v_lc_28208(currentLang)];
                        v_t_32859 = v_t_32859 || v_r_32856[v_a_32852[0]], v_e_32854.text = v_t_32859.ct, v_e_32854.desc = v_t_32859.if, v_e_32854.notice = v_t_32859.nf;
                      }
                      v_c_32811.push(v_e_32854);
                    }
                  }
                  v_n_32847();
                }) : -1 !== v_t_32850.findIndex(v_t_32860 => "meta.json" === v_t_32860.name) && v_$r_27975.Ic(v_o_32849.fullPath + "/meta.json", function (v_t_32861) {
                  if (null !== v_t_32861) {
                    let v_i_32862 = null;
                    try {
                      v_i_32862 = JSON.parse(v_t_32861);
                    } catch (v_t_32864) {}
                    if (null === v_i_32862) return v_n_32847();
                    let v_e_32863 = null;
                    if (void 0 !== v_i_32862[currentLang] ? v_e_32863 = v_i_32862[currentLang] : v_De_28096(supportedLangs, function (v_t_32865) {
                      return void 0 !== v_i_32862[v_t_32865] && (v_e_32863 = v_i_32862[v_t_32865], 1);
                    }), null === v_e_32863) return v_n_32847();
                    v_c_32811.push({
                      id: v_o_32849.name,
                      text: v_za_28082(v_e_32863.name),
                      desc: v_za_28082(v_e_32863.description),
                      notice: v_za_28082(v_e_32863.notice),
                      arc: v_i_32862.common && !0 === v_i_32862.common.arc,
                      has_long_voice: v_i_32862.common && !0 === v_i_32862.common.has_long_voice,
                      volume: v_i_32862.common && v_i_32862.common.volume || 1
                    });
                  }
                  v_n_32847();
                });
              }, v_n_32847);
            }, function () {
              v_Me_28078(v_i_32845);
            });
          }, () => {
            v_Me_28078(v_i_32845);
          });
        }, function (v_t_32866) {
          v_o_32809.sort(function (v_t_32867, v_i_32868) {
            return v_t_32867.rarity === v_i_32868.rarity ? v_t_32867.id < v_i_32868.id ? -1 : v_t_32867.id > v_i_32868.id ? 1 : 0 : v_t_32867.rarity - v_i_32868.rarity;
          }), v_l_32810.sort(function (v_t_32869, v_i_32870) {
            return v_t_32869.id < v_i_32870.id ? -1 : v_t_32869.id > v_i_32870.id ? 1 : 0;
          }), v_c_32811.sort(function (v_t_32871, v_i_32872) {
            return v_t_32871.id < v_i_32872.id ? -1 : v_t_32871.id > v_i_32872.id ? 1 : 0;
          }), v_Fe_28101(() => v_i_32808(v_o_32809, v_l_32810, v_c_32811));
        }]);
      }
    };