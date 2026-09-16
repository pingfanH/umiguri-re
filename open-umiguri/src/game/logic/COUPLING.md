# 游戏逻辑模块耦合分析(自动生成)

> 由 `tools/analyze-bundle.mjs` 生成。源: `game_main.deobf.js`。
> `外层引用` = 该模块引用的、声明在其自身之外(游戏 IIFE 闭包内)的绑定数量。
> 直接抽取为独立 ES 模块需把这些绑定提升为显式 scope 对象;数值越大改造越大。

| 模块 | 行号 | 行数 | 外层引用 | 示例 |
|---|---:|---:|---:|---|
| `v_Se_27889` | 177590 | 126 | 5 | v_$r_27975, v_C1_27890, v_uo_28102, mathFloor, v_T1_27891 |
| `v_Ae_27892` | 177763 | 50 | 5 | v_f0_27709, handshake, v_Se_27889, v_Fe_28101, v_uo_28102 |
| `inputModule` | 177813 | 141 | 15 | keyCodes, glContext, handshake, di8KbdStartFn, di8KbdShutdownFn, kbdUni2VirtFn, kbdStartFn, di8KbdUpdateFn, kbdUpdateFn, inputEnabled, di8KbdHeldFn, kbdHeldFn |
| `menuSystem` | 177954 | 206 | 22 | v_W0_27791, sceneManager, testMenu, inputModule, mathFloor, ledOutput, v_z0_27799, v_K0_27800, v_ct_27798, v_Yl_28194, v_Le_28076, languagePackages |
| `ledOutput` | 178160 | 118 | 13 | v_g_27563, mathMin, v_uo_28102, mathRound, mathRandom, v_Pe_28064, handshake, v_z0_27799, mathMax, v_K0_27800, boardLanes, boardAir |
| `v_R1_27896` | 178278 | 28 | 1 | playerInfoBoard |
| `playerInfoBoard` | 178306 | 75 | 17 | v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078, v_Fe_28101, v_ot_27785, v_be_27857, v_Dr_27956, v__o_28104, glRuntime, mathFloor |
| `sceneManager` | 178386 | 91 | 13 | v_Ae_27892, handshake, v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078, v_Fe_28101, mathMin, v_E1_27899, playerInfoBoard, v_D1_27900 |
| `v_F1_27902` | 178477 | 72 | 17 | v_fo_28103, v_Ge_28204, handshake, v_Oa_28077, v_Me_28078, v_br_27943, v_be_27857, v_Tr_27949, dataLoader, v_Br_27958, v_Rr_27952, v_Hr_27962 |
| `localization` | 178549 | 104 | 17 | mathMax, currentLang, menuSystem, v_ai_27793, v_W0_27791, v_ts_27977, v_fo_28103, v_Ge_28204, renderer, v_Le_28076, languagePackages, v_Dl_28181 |
| `v_N1_27904` | 178653 | 60 | 18 | renderer, menuSystem, v_Xt_27648, v_G1_27905, v_Ge_28204, localization, v_U1_27906, v_D_27646, v_Ts_28004, v_Le_28076, languagePackages, v_Dl_28181 |
| `v_G1_27905` | 178713 | 213 | 63 | playerInfoBoard, handshake, v_Ie_27966, v_nr_27925, menuSystem, v_fo_28103, v_Ge_28204, win, sceneManager, renderer, currentLang, v_y_27559 |
| `v_U1_27906` | 178926 | 54 | 11 | menuSystem, renderer, v_Ge_28204, v_Le_28076, languagePackages, v_Dl_28181, v_Me_28078, v_$r_27975, v_Fe_28101, v_ai_27793, v_si_27792 |
| `v_H1_27907` | 178980 | 19 | 6 | v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078, v_Fe_28101 |
| `v_J1_27908` | 178999 | 16 | 5 | v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078 |
| `v_j1_27909` | 179015 | 22 | 5 | v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078 |
| `v_O1_27910` | 179037 | 22 | 8 | v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078, v_Fe_28101, v_Ue_28209, sceneManager |
| `v_Te_27911` | 179059 | 104 | 27 | v_Ae_27892, v_nt_27780, v_H0_27781, v_rt_27782, v_st_27783, v_at_27784, v_U0_27775, v_ni_27774, v_tt_27777, v_it_27778, renderer, v_N0_27771 |
| `v_V1_27912` | 179163 | 36 | 7 | v_uo_28102, v_Le_28076, languagePackages, v_Dl_28181, renderer, v_Me_28078, v_Fe_28101 |
| `coopLobby` | 179199 | 247 | 38 | mathMin, mathMax, v_ui_27806, v_gi_27815, v_vi_27813, renderer, v_Ge_28204, v_qa_28086, v_fi_27807, v__i_27808, menuSystem, v_di_27810 |
| `v_X1_27914` | 179446 | 77 | 16 | v_Qa_28089, menuSystem, v_Pe_28064, sceneManager, renderer, v_Le_28076, languagePackages, v_Dl_28181, v_Me_28078, v_Fe_28101, v_ai_27793, v_X0_27795 |
| `settingsStore` | 179525 | 117 | 41 | v_z1_27915, sceneManager, v_oe_27649, handshake, v_bi_27819, v_Wr_27968, v_Ms_28009, v_sl_28151, v_Ae_27892, menuSystem, v_Te_27911, v_Ue_28209 |
| `audioFontHub` | 179642 | 130 | 22 | win, renderer, v_Ge_28204, v_oe_27649, v_sc_28205, v_Lr_27953, mathCeil, v_uo_28102, v_Bo_28128, menuSystem, v_y_27559, sceneManager |
| `v_$1_27920` | 179854 | 357 | 54 | mathMin, mathMax, v_ui_27806, renderer, v_gi_27815, v_Ge_28204, v_ft_27812, v_ut_27811, v_Vo_28136, v_jo_28134, v_Wo_28137, v_Ko_28140 |
| `v_Q1_27921` | 180211 | 188 | 45 | mathMin, mathMax, v_ui_27806, renderer, v_ft_27812, v_ut_27811, v_gi_27815, v_vi_27813, v_Vo_28136, v_jo_28134, v_Xo_28138, v_Jo_28133 |
| `uiComponentA` | 180399 | 209 | 39 | v_el_28148, mathMin, mathMax, v_ui_27806, renderer, v_ft_27812, v_ut_27811, v_Vo_28136, v_jo_28134, v_Wo_28137, v_Ko_28140, v_Oo_28135 |
| `uiComponentB` | 180608 | 111 | 22 | mathMin, mathMax, renderer, v_Vo_28136, v_jo_28134, menuSystem, v_Ae_27892, sceneManager, v_ti_27769, v_ii_27770, v_Er_27955, v_Le_28076 |
| `uiComponentC` | 180719 | 70 | 16 | mathMin, mathMax, menuSystem, sceneManager, renderer, v_Ge_28204, v_Le_28076, languagePackages, v_Dl_28181, v_Me_28078, v_Fe_28101, v_ai_27793 |
| `v_nr_27925` | 180789 | 1046 | 111 | renderer, v_Ae_27892, v_Se_27889, v_uo_28102, v_Le_28076, v_Me_28078, v_br_27943, mathMin, mathMax, v_ui_27806, v_gi_27815, v_vi_27813 |
| `v_mt_29763` | 180880 | 73 | 7 | renderer, v_Ae_27892, v_Se_27889, v_uo_28102, v_Le_28076, v_Me_28078, v_br_27943 |
| `gameCore` | 181840 | 4317 | 264 | v_oc_28207, v_ac_28206, mathAbs, v_An_27660, v_y0_27725, v_p0_27722, v_B0_27742, v_ps_27996, v_zr_27970, v_ks_27997, v_Wl_28190, renderer |
| `backgroundRenderer` | 184026 | 345 | 22 | glContext, v_yn_27656, v_Sn_27657, mathAbs, mathRandom, v_Fe_28101, mathFloor, mathCeil, effekseer, v_Le_28076, v_$r_27975, v_De_28096 |
| `v_li_30290` | 184372 | 26 | 3 | v_Yr_27972, v_oi_30289, glContext |
| `judgeSound` | 184414 | 124 | 16 | v_f0_27709, v_ci_30291, v_ui_30292, v_fi_30293, v_Si_30306, v__i_30294, v_V_30295, v_hi_30296, v_di_30297, v_vi_30298, v_wi_30299, v_gi_30300 |
| `skillTrigger` | 184538 | 71 | 7 | v_bi_30304, v_yi_30305, v_ue_27682, v_t0_27693, v_ce_27678, v_le_27675, v_Ae_27892 |
| `v_k_31551` | 185699 | 42 | 21 | v_U_30262, renderer, v_vt_30219, v_P_30255, v_rc_28203, rankLabel, rankLevel, rankGrade, v_yr_27944, v_Q0_27805, v_Qa_28089, v_Pe_28064 |
| `v_lr_27930` | 186157 | 40 | 25 | menuSystem, v_Z1_27919, sceneManager, v_fo_28103, v_Ge_28204, v_H1_27907, handshake, playerInfoBoard, v_nr_27925, v_Ns_28014, v_N1_27904, renderer |
| `testMenu` | 186197 | 478 | 45 | v_qa_28086, v_tt_27777, v_N0_27771, v_nt_27780, v_G0_27772, v_H0_27781, v_rt_27782, v_Ue_28209, sceneManager, renderer, v_D_27646, v_Bo_28128 |
| `v_ur_27932` | 186675 | 30 | 6 | win, v_qi_27868, v_x1_27888, systemMisc, v_uo_28102, v_Ae_27892 |
| `chartParser` | 187465 | 724 | 69 | v_An_27660, v_ce_27678, v_Jn_27679, v_le_27675, v_Un_27676, v_ue_27682, v_Xn_27685, v_Vn_27683, v_Wn_27684, v_t0_27693, v_n0_27696, v_r0_27697 |
| `v_i_32338` | 187525 | 7 | 2 | v_De_28096, v_v_32336 |
| `dataLoader` | 188631 | 159 | 18 | v_Le_28076, v_$r_27975, v_J_27658, v_Me_28078, hostBridge, v_De_28096, v_Fe_28101, v_Ir_27950, v_lc_28208, currentLang, v_ds_27991, v__o_28104 |
| `v_Br_27958` | 189001 | 35 | 10 | v_Fr_27957, v_Le_28076, hostBridge, v_Fe_28101, v_Me_28078, v_Da_28067, v_$r_27975, v_Nr_27959, v_gt_27748, v_Ue_28209 |
| `v_Nr_27959` | 189036 | 585 | 71 | v_gt_27748, v_mt_27749, v_pt_27750, v_kt_27751, v_bt_27752, v_yt_27753, v_St_27754, v_At_27755, v_jt_27756, v_Ot_27757, v_Vt_27758, v_Wt_27759 |
| `settingsTables` | 189661 | 31 | 4 | hostBridge, v_J_27658, v_Fe_28101, v_$r_27975 |
| `recordsStore` | 189692 | 294 | 14 | v_$r_27975, hostBridge, v_ms_27995, v_ws_27993, v_Le_28076, v_Me_28078, handshake, v_Pe_28064, v_Ma_28063, v_Mr_27954, v_be_27857, v_zr_27970 |
| `v_Or_27965` | 189986 | 85 | 5 | v_Se_27889, v_uo_28102, v_be_27857, v_vs_27992, rankName |
| `v_Ie_27966` | 190071 | 75 | 6 | handshake, v_ms_27995, v_Le_28076, languagePackages, v_Me_28078, v_ji_27860 |
| `v_Wr_27968` | 190149 | 29 | 5 | v_ms_27995, v_Le_28076, languagePackages, v_Me_28078, v_Vr_27967 |
| `hostBridge` | 190451 | 73 | 0 |  |
| `systemMisc` | 190547 | 60 | 0 |  |
| `v_ts_27977` | 190607 | 22 | 1 | currentLang |
| `v__s_27989` | 190640 | 75 | 14 | v_Po_28121, v_is_27978, v_es_27979, v_ns_27980, v_rs_27981, v_ss_27982, v_as_27983, v_os_27984, v_ls_27985, v_cs_27986, v_us_27987, v_fs_27988 |
| `v_Ns_28014` | 192228 | 132 | 11 | recordsStore, v_Xt_27648, v_Ms_28009, handshake, v_Se_27889, v_Or_27965, v_ji_27860, v_zr_27970, mathMin, mathMax, v_Bs_28013 |
| `languagePackages` | 195540 | 74 | 7 | v_B_27650, v_$r_27975, currentLang, hostBridge, v_ds_27991, handshake, v_Pe_28064 |

合计 55 个模块, 外层引用 1332 处。
