import { scope } from './runtime/scope.js';
import './runtime/helpers.js'; // 载入并挂载顶层辅助函数
import { createV_Se_27889 } from './modules/v_Se_27889/index.js';
import { createV_Ae_27892 } from './modules/v_Ae_27892/index.js';
import { createInputModule } from './modules/inputModule/index.js';
import { createMenuSystem } from './modules/menuSystem/index.js';
import { createLedOutput } from './modules/ledOutput/index.js';
import { createV_R1_27896 } from './modules/v_R1_27896/index.js';
import { createPlayerInfoBoard } from './modules/playerInfoBoard/index.js';
import { createSceneManager } from './modules/sceneManager/index.js';
import { createV_F1_27902 } from './modules/v_F1_27902/index.js';
import { createLocalization } from './modules/localization/index.js';
import { createV_N1_27904 } from './modules/v_N1_27904/index.js';
import { createV_G1_27905 } from './modules/v_G1_27905/index.js';
import { createV_U1_27906 } from './modules/v_U1_27906/index.js';
import { createV_H1_27907 } from './modules/v_H1_27907/index.js';
import { createV_J1_27908 } from './modules/v_J1_27908/index.js';
import { createV_j1_27909 } from './modules/v_j1_27909/index.js';
import { createV_O1_27910 } from './modules/v_O1_27910/index.js';
import { createV_Te_27911 } from './modules/v_Te_27911/index.js';
import { createV_V1_27912 } from './modules/v_V1_27912/index.js';
import { createCoopLobby } from './modules/coopLobby/index.js';
import { createV_X1_27914 } from './modules/v_X1_27914/index.js';
import { createSettingsStore } from './modules/settingsStore/index.js';
import { createAudioFontHub } from './modules/audioFontHub/index.js';
import { createV_$1_27920 } from './modules/v_$1_27920/index.js';
import { createV_Q1_27921 } from './modules/v_Q1_27921/index.js';
import { createUiComponentA } from './modules/uiComponentA/index.js';
import { createUiComponentB } from './modules/uiComponentB/index.js';
import { createUiComponentC } from './modules/uiComponentC/index.js';
import { createV_nr_27925 } from './modules/v_nr_27925/index.js';
import { createV_mt_29763 } from './modules/v_mt_29763/index.js';
import { createGameCore } from './modules/gameCore/index.js';
import { createBackgroundRenderer } from './modules/backgroundRenderer/index.js';
import { createV_li_30290 } from './modules/v_li_30290/index.js';
import { createJudgeSound } from './modules/judgeSound/index.js';
import { createSkillTrigger } from './modules/skillTrigger/index.js';
import { createV_k_31551 } from './modules/v_k_31551/index.js';
import { createV_lr_27930 } from './modules/v_lr_27930/index.js';
import { createTestMenu } from './modules/testMenu/index.js';
import { createV_ur_27932 } from './modules/v_ur_27932/index.js';
import { createChartParser } from './modules/chartParser/index.js';
import { createV_i_32338 } from './modules/v_i_32338/index.js';
import { createDataLoader } from './modules/dataLoader/index.js';
import { createV_Br_27958 } from './modules/v_Br_27958/index.js';
import { createV_Nr_27959 } from './modules/v_Nr_27959/index.js';
import { createSettingsTables } from './modules/settingsTables/index.js';
import { createRecordsStore } from './modules/recordsStore/index.js';
import { createV_Or_27965 } from './modules/v_Or_27965/index.js';
import { createV_Ie_27966 } from './modules/v_Ie_27966/index.js';
import { createV_Wr_27968 } from './modules/v_Wr_27968/index.js';
import { createHostBridge } from './modules/hostBridge/index.js';
import { createSystemMisc } from './modules/systemMisc/index.js';
import { createV_ts_27977 } from './modules/v_ts_27977/index.js';
import { createV__s_27989 } from './modules/v__s_27989/index.js';
import { createV_Ns_28014 } from './modules/v_Ns_28014/index.js';
import { createLanguagePackages } from './modules/languagePackages/index.js';

// ---- bootstrap(原游戏 IIFE 顶层语句, 保持原始执行顺序) ----
scope.doc = document; // IIFE 形参(实参)
scope.v_y_27559 = scope.doc.getElementById("main_container");
scope.v_n_27560 = scope.doc.getElementById("log");
scope.v_e_27561 = scope.doc.getElementById("status");
scope.glContext = null;
scope.v_g_27563 = !1;
scope.v_t_27564 = (scope.v_Ul_28187 = navigator.userAgent, /android/i.test(scope.v_Ul_28187) ? "Android" : /iP(ad|hone|od)/.test(scope.v_Ul_28187) ? "iOS" : "Unknown");
scope.v_i_27565 = null;
scope.v_r_27566 = !1;
scope.v_s_27567 = 0;
scope.v_a_27568 = 0;
scope.v_o_27569 = 0;
scope.v_l_27570 = 0;
scope.v_c_27571 = [0, 33, 16];
scope.v_p_27572 = 0;
scope.v_k_27573 = !1;
scope.v_Je_27574 = undefined;
scope.v_je_27575 = undefined;
scope.v_Oe_27576 = undefined;
scope.v_u_27577 = undefined;
scope.v_f_27578 = undefined;
scope.v_Ve_27579 = undefined;
scope.v_We_27580 = undefined;
scope.v_Xe_27581 = undefined;
scope.v_ze_27582 = undefined;
scope.v_Ke_27583 = undefined;
scope.v_Ye_27584 = undefined;
scope.v_qe_27585 = undefined;
scope.v_Ze_27586 = undefined;
scope.v___27587 = undefined;
scope.v_$e_27588 = undefined;
scope.v_Qe_27589 = undefined;
scope.v_tn_27590 = undefined;
scope.v_en_27591 = undefined;
scope.v_nn_27592 = undefined;
scope.v_rn_27593 = undefined;
scope.v_sn_27594 = undefined;
scope.v_an_27595 = undefined;
scope.v_on_27596 = undefined;
scope.v_ln_27597 = undefined;
scope.v_h_27598 = undefined;
scope.v_cn_27599 = undefined;
scope.v_un_27600 = undefined;
scope.v_fn_27601 = undefined;
scope.v__n_27602 = undefined;
scope.v_hn_27603 = undefined;
scope.v_dn_27604 = undefined;
scope.v_d_27605 = undefined;
scope.v_v_27606 = undefined;
scope.v_w_27607 = undefined;
scope.v_Ct_27608 = undefined;
scope.v_Tt_27609 = undefined;
scope.v_It_27610 = undefined;
scope.v_Pt_27611 = undefined;
scope.v_m_27612 = undefined;
scope.v_Rt_27613 = undefined;
scope.v_Lt_27614 = undefined;
scope.v_Mt_27615 = undefined;
scope.v_Et_27616 = undefined;
scope.v_Dt_27617 = undefined;
scope.v_Ft_27618 = undefined;
scope.v_Bt_27619 = undefined;
scope.v_b_27620 = undefined;
scope.v_S_27621 = undefined;
scope.v_A_27622 = undefined;
scope.v_x_27623 = undefined;
scope.v_C_27624 = undefined;
scope.v_vn_27625 = {
  texture: 0
};
scope.v_Nt_27626 = {
  texture0: 0,
  texture1: 1
};
scope.v_wn_27627 = {
  opacity: 0
};
scope.v_gn_27628 = {
  texture: 0,
  opacity: 0
};
scope.v_mn_27629 = {
  texture: 0,
  opacity: 0
};
scope.v_pn_27630 = {
  texture: 0,
  col: [0, 0, 0, 0]
};
scope.v_j_27631 = {
  texture: 0,
  xform: void 0
};
scope.v_Gt_27632 = {
  texture: 0,
  weight: void 0,
  offset: 0
};
scope.v_Ut_27633 = {
  texture: 0,
  weight: void 0,
  offset: 0
};
scope.v_Ht_27634 = {
  texture: 0
};
scope.v_Jt_27635 = {
  texture: 0,
  amount: 0
};
scope.v_kn_27636 = [0, 0, 0];
scope.v_bn_27637 = !1;
scope.v_T_27638 = 0;
scope.v_I_27639 = !1;
scope.inputEnabled = !0;
scope.v_R_27641 = "1920x1080";
scope.v_L_27642 = 1;
scope.renderer = undefined;
scope.boardLanes = null;
scope.boardAir = null;
scope.v_D_27646 = null;
scope.v_F_27647 = null;
scope.v_Xt_27648 = null;
scope.v_oe_27649 = null;
scope.v_B_27650 = new TextDecoder("utf-8");
scope.v_N_27651 = new TextEncoder();
scope.v_G_27652 = "UMIGURI";
scope.v_U_27653 = "2.01";
scope.v_H_27654 = "";
scope.v_zt_27655 = !0;
scope.v_yn_27656 = window.__umgDesignW || 1920;
scope.v_Sn_27657 = window.__umgDesignH || 1080;
scope.v_J_27658 = "/config/";
scope.v_O_27659 = 1e3 / 60;
scope.v_An_27660 = 0;
scope.v_xn_27661 = 4080;
scope.v_Cn_27662 = 16;
scope.v_Tn_27663 = 17;
scope.v_In_27664 = 18;
scope.v_Pn_27665 = 19;
scope.v_Rn_27666 = 20;
scope.v_Ln_27667 = 21;
scope.v_Mn_27668 = 22;
scope.v_En_27669 = 23;
scope.v_Dn_27670 = 24;
scope.v_Fn_27671 = 25;
scope.v_Bn_27672 = 26;
scope.v_Nn_27673 = 27;
scope.v_Gn_27674 = 32;
scope.v_le_27675 = 33;
scope.v_Un_27676 = 34;
scope.v_Hn_27677 = 48;
scope.v_ce_27678 = 49;
scope.v_Jn_27679 = 50;
scope.v_jn_27680 = 51;
scope.v_On_27681 = 53;
scope.v_ue_27682 = 65;
scope.v_Vn_27683 = 66;
scope.v_Wn_27684 = 67;
scope.v_Xn_27685 = 68;
scope.v_zn_27686 = 80;
scope.v_Kn_27687 = 81;
scope.v_Yn_27688 = 82;
scope.v_qn_27689 = 83;
scope.v_Zn_27690 = 84;
scope.v_$n_27691 = 85;
scope.v_Qn_27692 = 86;
scope.v_t0_27693 = 257;
scope.v_i0_27694 = 258;
scope.v_e0_27695 = 259;
scope.v_n0_27696 = 260;
scope.v_r0_27697 = 261;
scope.v_s0_27698 = 513;
scope.v_a0_27699 = 514;
scope.v_o0_27700 = 515;
scope.v_l0_27701 = 769;
scope.v_V_27702 = 1025;
scope.v_c0_27703 = 129;
scope.v_u0_27704 = 145;
scope.v_W_27705 = 1;
scope.v_X_27706 = 2;
scope.v_z_27707 = 3;
scope.v_K_27708 = 32;
scope.v_f0_27709 = ["default", "clap", "rain", "woodblock", "bell", "kick", "shortclap", "taiko", "mai", "ong"];
scope.v__0_27710 = function (v_t_28213) {
  return v_t_28213 === scope.v_In_27664 || v_t_28213 === scope.v_Ln_27667 || v_t_28213 === scope.v_Mn_27668 || v_t_28213 === scope.v_En_27669 || v_t_28213 === scope.v_Dn_27670 || v_t_28213 === scope.v_Fn_27671 || v_t_28213 === scope.v_Bn_27672 || v_t_28213 === scope.v_Nn_27673;
};
scope.v_h0_27711 = 1;
scope.v_Y_27712 = [0, 1, 2, 3, 5, 6, 9, 10, 11, 0, 12, 13];
scope.v_q_27713 = [0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13];
scope.v_d0_27714 = 2;
scope.v_v0_27715 = 0;
scope.v_fe_27716 = 1;
scope.v_w0_27717 = 2;
scope.v__e_27718 = 3;
scope.v_he_27719 = 4;
scope.v_g0_27720 = 4096;
scope.v_m0_27721 = 8192;
scope.v_p0_27722 = 1;
scope.v_k0_27723 = 2;
scope.v_b0_27724 = 3;
scope.v_y0_27725 = 0;
scope.v_S0_27726 = {};
scope.v_A0_27727 = (scope.v_S0_27726[scope.v_fe_27716] = 2, scope.v_S0_27726[scope.v_w0_27717] = 3, scope.v_S0_27726[scope.v__e_27718] = 4, scope.v_S0_27726[scope.v_he_27719] = scope.v_y0_27725, scope.v_S0_27726[0] = scope.v_y0_27725, {});
scope.v_de_27728 = (scope.v_A0_27727[2] = [.8, 167 / 255, 0], scope.v_A0_27727[3] = [228 / 255, 122 / 255, 0], scope.v_A0_27727[4] = [32 / 255, 189 / 255, 27 / 255], 1920);
scope.v_x0_27729 = 1024;
scope.v_C0_27730 = 1158;
scope.v_ve_27731 = 5120;
scope.v_T0_27732 = 200;
scope.v_I0_27733 = -scope.v_ve_27731;
scope.v_we_27734 = 512;
scope.v_P0_27735 = 579;
scope.v_R0_27736 = 108.56;
scope.v_L0_27737 = 118 * 1.13;
scope.v_M0_27738 = 233;
scope.v_E0_27739 = 466;
scope.v_D0_27740 = -75;
scope.v_F0_27741 = [12e3, 14e3, 16e3, 18e3, 2e4, 22e3, 24e3, 26e3, 28e3, 3e4, 3e4];
scope.v_B0_27742 = 0;
scope.v__t_27743 = 1;
scope.v_ht_27744 = 2;
scope.v_dt_27745 = 3;
scope.v_vt_27746 = 4;
scope.v_wt_27747 = 5;
scope.v_gt_27748 = 0;
scope.v_mt_27749 = 11;
scope.v_pt_27750 = 2;
scope.v_kt_27751 = 3;
scope.v_bt_27752 = 4;
scope.v_yt_27753 = 5;
scope.v_St_27754 = 6;
scope.v_At_27755 = 7;
scope.v_jt_27756 = 8;
scope.v_Ot_27757 = 9;
scope.v_Vt_27758 = 10;
scope.v_Wt_27759 = 1001;
scope.v_Kt_27760 = 1002;
scope.v_Yt_27761 = 1003;
scope.v_qt_27762 = 1004;
scope.v_Zt_27763 = 1005;
scope.v_$t_27764 = 1010;
scope.v_Z_27765 = 2005;
scope.v_$_27766 = {};
scope.v_Q_27767 = (scope.v_$_27766[scope.v_Wt_27759] = 2001, scope.v_$_27766[scope.v_Kt_27760] = 2002, scope.v_$_27766[scope.v_Yt_27761] = 2003, scope.v_$_27766[scope.v_qt_27762] = 2004, scope.v_$_27766[scope.v_Zt_27763] = scope.v_Z_27765, scope.v_$_27766[1006] = scope.v_Z_27765, scope.v_$_27766[1007] = scope.v_Z_27765, scope.v_$_27766[1008] = scope.v_Z_27765, scope.v_$_27766[1009] = scope.v_Z_27765, scope.v_$_27766[scope.v_$t_27764] = scope.v_Z_27765, {});
scope.v_Q_27767[scope.v_gt_27748] = "None", scope.v_Q_27767[scope.v_mt_27749] = "Matching", scope.v_Q_27767[scope.v_pt_27750] = "Guard", scope.v_Q_27767[scope.v_kt_27751] = "Support", scope.v_Q_27767[scope.v_bt_27752] = "BoostNml", scope.v_Q_27767[scope.v_yt_27753] = "BoostTgt", scope.v_Q_27767[scope.v_St_27754] = "BoostTcn", scope.v_Q_27767[scope.v_At_27755] = "BoostMna", scope.v_Q_27767[scope.v_jt_27756] = "DangerHrd", scope.v_Q_27767[scope.v_Ot_27757] = "DangerAbs", scope.v_Q_27767[scope.v_Vt_27758] = "DangerCts", scope.v_Q_27767[scope.v_qt_27762] = "Boost", scope.v_Q_27767[1009] = "DBoost", scope.v_Q_27767[1007] = "DGuard", scope.v_Q_27767[1006] = "DMatching", scope.v_Q_27767[1008] = "DSupport", scope.v_Q_27767[scope.v_Zt_27763] = "Danger", scope.v_Q_27767[scope.v_Kt_27760] = "Guard", scope.v_Q_27767[scope.v_$t_27764] = "Hard", scope.v_Q_27767[scope.v_Wt_27759] = "Matching", scope.v_Q_27767[scope.v_Yt_27761] = "Support", scope.v_Q_27767[2001] = "Matching", scope.v_Q_27767[2002] = "Guard", scope.v_Q_27767[2003] = "Support", scope.v_Q_27767[2004] = "Boost", scope.v_Q_27767[scope.v_Z_27765] = "Danger";
scope.v_Qt_27768 = 10;
scope.v_ti_27769 = 11;
scope.v_ii_27770 = 12;
scope.v_N0_27771 = 0;
scope.v_G0_27772 = 1;
scope.v_ei_27773 = 3;
scope.v_ni_27774 = 256;
scope.v_U0_27775 = 4096;
scope.v_ri_27776 = 4096;
scope.v_tt_27777 = 255;
scope.v_it_27778 = 65536;
scope.v_et_27779 = 131072;
scope.v_nt_27780 = 0;
scope.v_H0_27781 = 10;
scope.v_rt_27782 = 11;
scope.v_st_27783 = 12;
scope.v_at_27784 = 99;
scope.v_ot_27785 = ["Normal", "Copper", "Silver", "Gold", "Platinum", "Rainbow", "Ogenki", "Staff", "SpUmiguri"];
scope.v_lt_27786 = [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 10, 15, 20, 25, 30, 15, 20, 25, 30, 35, 20, 25, 30, 35, 80, 30, 35, 40, 45, 50, 40, 45, 50, 55, 60, 50, 55, 60, 65, 70, 60, 65, 70, 75, 80, 70, 75, 80, 85, 250];
scope.v_J0_27787 = 0;
scope.v_j0_27788 = 1;
scope.v_O0_27789 = 3;
scope.v_V0_27790 = 4;
scope.v_W0_27791 = "Red";
scope.v_si_27792 = "Blue";
scope.v_ai_27793 = "Green";
scope.v_oi_27794 = "Orange";
scope.v_X0_27795 = "White";
scope.v_li_27796 = "Yellow";
scope.v_ci_27797 = "Purple";
scope.v_ct_27798 = {};
scope.v_ct_27798[scope.v_W0_27791] = [255, 0, 0], scope.v_ct_27798[scope.v_si_27792] = [0, 0, 255], scope.v_ct_27798.Dark = [34, 34, 36], scope.v_ct_27798[scope.v_ai_27793] = [0, 255, 0], scope.v_ct_27798[scope.v_oi_27794] = [255, 128, 0], scope.v_ct_27798.Pink = [255, 0, 255], scope.v_ct_27798[scope.v_X0_27795] = [164, 191, 191], scope.v_ct_27798[scope.v_li_27796] = [255, 164, 0], scope.v_ct_27798[scope.v_ci_27797] = [126, 38, 224];
scope.v_z0_27799 = 0;
scope.v_K0_27800 = 1;
scope.v_Y0_27801 = [255, 164, 0];
scope.v_q0_27802 = [255, 200, 240];
scope.v_Z0_27803 = [255, 0, 128];
scope.v_$0_27804 = [0, 0, 255];
scope.v_Q0_27805 = ["BAS", "ADV", "EXP", "MAS", "WE", "ULT"];
scope.v_ui_27806 = 0;
scope.v_fi_27807 = 1;
scope.v__i_27808 = 2;
scope.v_hi_27809 = 4;
scope.v_di_27810 = 8;
scope.v_ut_27811 = 4;
scope.v_ft_27812 = 8;
scope.v_vi_27813 = 16;
scope.v_wi_27814 = 32;
scope.v_gi_27815 = 64;
scope.keyCodes = {
  Escape: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 7,
  7: 8,
  8: 9,
  9: 10,
  0: 11,
  "-": 12,
  "=": 13,
  BackSpace: 14,
  Tab: 15,
  Q: 16,
  W: 17,
  E: 18,
  R: 19,
  T: 20,
  Y: 21,
  U: 22,
  I: 23,
  O: 24,
  P: 25,
  "[": 26,
  "]": 27,
  Enter: 28,
  CtrlL: 29,
  A: 30,
  S: 31,
  D: 32,
  F: 33,
  G: 34,
  H: 35,
  J: 36,
  K: 37,
  L: 38,
  ";": 39,
  "'": 40,
  "`": 41,
  ShiftL: 42,
  "\\": 43,
  Z: 44,
  X: 45,
  C: 46,
  V: 47,
  B: 48,
  N: 49,
  M: 50,
  ",": 51,
  ".": 52,
  "/": 53,
  ShiftR: 54,
  "Num*": 55,
  AltL: 56,
  Space: 57,
  Caps: 58,
  F1: 59,
  F2: 60,
  F3: 61,
  F4: 62,
  F5: 63,
  F6: 64,
  F7: 65,
  F8: 66,
  F9: 67,
  F10: 68,
  NumLock: 69,
  ScrollLock: 70,
  Num7: 71,
  Num8: 72,
  Num9: 73,
  "Num-": 74,
  Num4: 75,
  Num5: 76,
  Num6: 77,
  "Num+": 78,
  Num1: 79,
  Num2: 80,
  Num3: 81,
  Num0: 82,
  "Num.": 83,
  F11: 87,
  F12: 88,
  F13: 100,
  F14: 101,
  F15: 102,
  Kana: 112,
  Conv: 121,
  NoConv: 123,
  "¥": 125,
  "Num=": 141,
  "^": 144,
  "@": 145,
  ":": 146,
  _: 147,
  Kanji: 148,
  Stop: 149,
  Ax: 150,
  Unlabeled: 151,
  NumEnter: 156,
  CtrlR: 157,
  "Num,": 179,
  "Num/": 181,
  SysRq: 183,
  AltR: 184,
  Pause: 197,
  Home: 199,
  ArrowUp: 200,
  PageUp: 201,
  ArrowLeft: 203,
  ArrowRight: 205,
  End: 207,
  ArrowDown: 208,
  PageDown: 209,
  Insert: 210,
  Delete: 211,
  WindowsL: 219,
  WindowsR: 220,
  Menu: 221,
  Power: 222,
  Sleep: 223
};
scope.v_pi_27817 = [129, 153, 31, 147, 70, 32, 1, 117, 54, 230, 214, 28, 213, 203, 108, 84, 181, 171, 62, 137, 50, 66, 174, 198, 201, 140, 133, 91, 35, 86, 68, 80, 83, 58, 19, 179, 161, 222, 42, 14, 20, 156, 143, 190, 78, 249, 13, 9, 157, 180, 183, 250, 44, 155, 216, 111, 73, 246, 126, 200, 187, 119, 36, 221, 51, 227, 90, 92, 241, 185, 141, 223, 234, 118, 101, 121, 100, 207, 87, 25, 110, 242, 88, 239, 65, 85, 23, 98, 48, 229, 199, 247, 228, 71, 8, 236, 3, 16, 186, 167, 109, 127, 55, 64, 21, 96, 193, 211, 237, 132, 123, 170, 224, 253, 233, 122, 2, 33, 106, 112, 176, 235, 130, 37, 206, 218, 89, 225, 212, 226, 135, 120, 149, 169, 4, 158, 69, 146, 5, 144, 134, 53, 151, 209, 26, 40, 103, 79, 115, 245, 30, 124, 97, 38, 17, 148, 205, 240, 46, 248, 81, 215, 189, 18, 74, 82, 61, 136, 164, 166, 196, 105, 175, 43, 182, 165, 77, 177, 10, 172, 244, 208, 0, 138, 184, 168, 192, 47, 104, 195, 162, 152, 160, 125, 238, 76, 56, 60, 217, 52, 116, 29, 188, 102, 142, 231, 204, 45, 99, 220, 178, 159, 232, 254, 7, 255, 94, 128, 154, 24, 93, 72, 107, 67, 34, 6, 131, 12, 139, 27, 49, 173, 219, 194, 197, 41, 57, 251, 202, 22, 59, 163, 95, 39, 11, 75, 252, 210, 114, 191, 63, 145, 113, 243, 15, 150, 92, 36, 217, 165, 28, 149, 146, 112, 53, 244, 203, 85, 23, 163, 94, 104, 156, 177, 250, 93, 190, 98, 239, 39, 213, 41, 55, 184, 79, 102, 235, 109, 183, 67, 19, 181, 118, 138, 48, 33, 128, 231, 0, 215, 64, 42, 240, 74, 35, 7, 246, 11, 72, 131, 133, 226, 123, 221, 205, 141, 65, 224, 105, 144, 25, 155, 30, 43, 101, 27, 145, 10, 3, 172, 193, 164, 222, 225, 80, 86, 20, 154, 1, 22, 151, 37, 108, 234, 202, 229, 26, 132, 233, 209, 68, 180, 251, 78, 152, 212, 139, 56, 199, 208, 113, 179, 237, 210, 182, 194, 8, 206, 248, 162, 34, 82, 13, 63, 252, 211, 46, 62, 187, 125, 75, 15, 76, 60, 136, 96, 50, 84, 2, 38, 89, 111, 121, 31, 29, 238, 77, 44, 178, 160, 174, 5, 192, 134, 116, 107, 147, 166, 114, 69, 87, 52, 122, 171, 57, 137, 168, 195, 115, 214, 253, 249, 17, 175, 232, 103, 158, 119, 18, 71, 9, 150, 126, 197, 130, 24, 243, 230, 129, 161, 167, 40, 216, 218, 83, 16, 81, 88, 120, 254, 73, 220, 97, 135, 186, 4, 45, 241, 66, 188, 61, 49, 219, 148, 6, 140, 70, 255, 110, 207, 21, 106, 200, 54, 201, 223, 173, 12, 153, 185, 117, 198, 245, 99, 32, 157, 100, 228, 236, 14, 196, 247, 143, 58, 124, 189, 191, 242, 227, 142, 204, 127, 95, 90, 170, 176, 51, 159, 47, 91, 59, 169, 180, 7, 63, 102, 49, 5, 244, 164, 254, 82, 116, 149, 75, 186, 163, 112, 210, 194, 118, 100, 203, 66, 207, 191, 1, 43, 58, 192, 195, 115, 169, 136, 99, 65, 204, 18, 243, 255, 242, 197, 89, 220, 187, 68, 179, 247, 85, 162, 117, 104, 111, 221, 108, 46, 22, 45, 130, 83, 69, 101, 33, 106, 138, 6, 161, 165, 37, 229, 2, 95, 208, 56, 238, 44, 227, 135, 141, 146, 145, 182, 90, 133, 17, 127, 173, 131, 201, 42, 87, 248, 222, 214, 249, 233, 53, 212, 228, 47, 59, 30, 183, 77, 240, 200, 143, 128, 239, 10, 24, 48, 188, 0, 148, 31, 8, 124, 96, 3, 206, 38, 97, 19, 12, 105, 92, 4, 20, 223, 121, 98, 126, 139, 219, 218, 40, 235, 199, 170, 166, 156, 88, 29, 113, 189, 103, 73, 196, 167, 246, 185, 158, 216, 25, 184, 252, 80, 41, 61, 84, 202, 54, 32, 93, 137, 209, 125, 251, 232, 50, 14, 34, 39, 175, 132, 231, 250, 168, 253, 150, 225, 159, 120, 76, 94, 245, 226, 109, 114, 36, 62, 64, 190, 178, 241, 35, 142, 74, 81, 140, 151, 171, 217, 134, 176, 78, 67, 153, 144, 71, 51, 205, 154, 174, 230, 107, 123, 57, 27, 234, 224, 215, 211, 16, 181, 70, 122, 55, 119, 13, 237, 52, 28, 9, 26, 236, 23, 60, 193, 213, 79, 86, 155, 198, 177, 11, 72, 15, 129, 91, 152, 110, 21, 172, 157, 147, 160, 97, 85, 141, 236, 240, 239, 80, 88, 208, 10, 133, 204, 109, 230, 35, 206, 108, 13, 99, 241, 233, 120, 167, 254, 77, 62, 252, 210, 145, 114, 101, 244, 250, 86, 219, 113, 84, 53, 36, 107, 188, 47, 221, 150, 104, 50, 41, 115, 207, 238, 42, 1, 37, 121, 191, 178, 177, 96, 162, 34, 195, 8, 56, 32, 23, 93, 40, 61, 122, 155, 186, 154, 193, 253, 229, 9, 201, 249, 173, 248, 246, 31, 90, 119, 12, 137, 128, 14, 65, 151, 157, 63, 92, 110, 103, 52, 194, 117, 70, 135, 140, 136, 55, 237, 17, 171, 60, 160, 6, 202, 175, 176, 74, 112, 181, 234, 125, 83, 165, 67, 227, 142, 148, 242, 38, 49, 11, 166, 78, 43, 182, 129, 4, 187, 251, 116, 131, 124, 2, 111, 147, 203, 212, 146, 75, 20, 95, 217, 211, 163, 29, 134, 27, 132, 25, 59, 100, 127, 223, 158, 199, 130, 222, 21, 64, 198, 189, 39, 218, 170, 72, 5, 143, 57, 26, 180, 24, 69, 45, 168, 159, 220, 247, 243, 82, 19, 118, 172, 179, 190, 213, 22, 231, 197, 138, 185, 7, 58, 215, 183, 224, 226, 30, 68, 174, 164, 46, 184, 123, 73, 169, 235, 76, 106, 105, 48, 209, 81, 0, 54, 98, 126, 232, 94, 144, 192, 91, 66, 156, 16, 79, 51, 102, 161, 228, 225, 33, 89, 200, 149, 71, 87, 205, 18, 44, 216, 214, 152, 28, 255, 245, 3, 153, 196, 15, 139, 191, 252, 57, 8, 109, 65, 180, 241, 72, 146, 170, 159, 67, 250, 153, 238, 29, 176, 44, 20, 77, 127, 204, 210, 52, 243, 46, 126, 163, 129, 106, 189, 93, 21, 34, 122, 41, 144, 110, 35, 246, 56, 1, 195, 239, 223, 212, 175, 237, 157, 90, 121, 38, 133, 107, 61, 151, 83, 114, 10, 213, 251, 214, 47, 177, 215, 187, 100, 140, 220, 162, 173, 76, 230, 227, 117, 138, 123, 143, 234, 152, 137, 245, 22, 208, 89, 174, 193, 11, 148, 222, 196, 0, 149, 5, 54, 119, 27, 103, 240, 31, 201, 86, 199, 205, 88, 9, 158, 48, 236, 186, 206, 17, 32, 82, 3, 166, 73, 203, 63, 36, 172, 169, 207, 75, 59, 235, 85, 14, 136, 219, 4, 68, 30, 108, 25, 228, 87, 95, 139, 190, 120, 130, 145, 118, 197, 161, 16, 164, 115, 229, 92, 112, 167, 226, 124, 125, 69, 42, 142, 94, 18, 96, 78, 242, 179, 64, 221, 40, 81, 165, 104, 39, 156, 99, 51, 24, 26, 70, 147, 224, 171, 131, 184, 198, 66, 33, 155, 19, 62, 135, 6, 80, 43, 134, 200, 102, 60, 216, 53, 50, 181, 128, 37, 113, 233, 71, 209, 105, 23, 249, 150, 98, 79, 160, 183, 154, 244, 13, 91, 84, 185, 231, 111, 116, 211, 141, 202, 55, 2, 194, 12, 188, 7, 225, 254, 15, 74, 253, 218, 132, 101, 45, 192, 28, 248, 232, 168, 255, 97, 182, 247, 217, 58, 49, 178, 98, 142, 39, 196, 254, 117, 51, 33, 118, 239, 213, 4, 62, 252, 150, 58, 101, 133, 177, 246, 140, 178, 96, 174, 108, 222, 50, 167, 168, 159, 187, 217, 154, 206, 247, 77, 208, 152, 83, 65, 169, 47, 234, 102, 250, 131, 192, 214, 148, 134, 141, 237, 209, 15, 2, 147, 172, 20, 71, 52, 161, 244, 135, 89, 173, 3, 160, 1, 84, 183, 185, 188, 78, 229, 146, 103, 5, 228, 184, 113, 121, 162, 230, 42, 226, 10, 116, 139, 61, 14, 164, 31, 85, 195, 205, 9, 92, 66, 204, 19, 110, 40, 221, 34, 176, 166, 112, 122, 6, 191, 56, 207, 79, 138, 49, 235, 59, 231, 114, 29, 157, 55, 125, 30, 123, 120, 63, 25, 21, 233, 220, 81, 253, 155, 76, 38, 36, 90, 70, 240, 88, 248, 23, 74, 57, 200, 241, 60, 197, 127, 158, 73, 95, 180, 115, 97, 143, 72, 238, 11, 182, 26, 28, 163, 46, 69, 186, 218, 255, 8, 53, 156, 170, 86, 24, 227, 201, 137, 87, 93, 91, 124, 67, 215, 171, 44, 27, 251, 99, 13, 106, 80, 242, 219, 41, 18, 68, 45, 223, 109, 190, 189, 126, 202, 144, 119, 179, 151, 193, 198, 0, 43, 82, 17, 211, 48, 35, 216, 64, 12, 249, 32, 165, 100, 54, 232, 94, 149, 7, 16, 128, 145, 181, 210, 153, 194, 212, 136, 225, 224, 243, 175, 245, 22, 104, 199, 37, 107, 132, 236, 129, 111, 75, 130, 203, 105, 0, 21, 200, 23, 244, 240, 186, 26, 155, 40, 120, 188, 55, 79, 190, 24, 151, 192, 140, 1, 44, 194, 20, 53, 205, 165, 127, 168, 3, 252, 241, 87, 181, 177, 138, 224, 69, 158, 134, 95, 114, 245, 9, 54, 67, 230, 164, 175, 249, 221, 213, 61, 227, 12, 222, 86, 48, 162, 143, 118, 209, 22, 154, 6, 197, 39, 156, 235, 145, 237, 101, 185, 83, 103, 52, 193, 232, 153, 93, 56, 144, 63, 49, 70, 223, 85, 92, 203, 28, 183, 29, 161, 136, 167, 141, 182, 32, 215, 37, 34, 126, 142, 84, 234, 131, 7, 68, 236, 219, 57, 105, 2, 19, 5, 117, 62, 147, 210, 8, 46, 206, 239, 166, 184, 160, 47, 163, 238, 10, 64, 148, 16, 113, 99, 169, 195, 31, 38, 88, 172, 170, 11, 212, 18, 202, 121, 228, 77, 178, 43, 229, 218, 199, 149, 90, 13, 33, 128, 94, 179, 107, 146, 225, 14, 60, 187, 78, 189, 159, 226, 82, 250, 36, 106, 72, 253, 137, 201, 91, 59, 242, 246, 50, 133, 111, 220, 191, 255, 45, 80, 204, 58, 66, 124, 171, 27, 231, 122, 243, 65, 233, 135, 15, 214, 174, 176, 96, 75, 89, 98, 115, 110, 104, 41, 71, 211, 132, 76, 116, 73, 109, 216, 125, 42, 196, 217, 139, 25, 123, 17, 208, 119, 97, 198, 152, 4, 251, 248, 207, 173, 129, 108, 130, 30, 74, 150, 35, 254, 112, 157, 247, 180, 81, 102, 51, 100, 145, 255, 126, 137, 252, 242, 183, 142, 149, 103, 5, 55, 26, 72, 25, 224, 123, 130, 62, 51, 118, 67, 96, 78, 125, 129, 238, 1, 132, 105, 13, 115, 107, 153, 31, 20, 172, 69, 114, 151, 195, 239, 38, 184, 188, 111, 44, 194, 170, 231, 162, 212, 76, 30, 225, 251, 32, 178, 97, 11, 57, 154, 206, 221, 66, 200, 167, 2, 91, 150, 70, 124, 175, 216, 79, 84, 189, 34, 222, 199, 166, 220, 247, 134, 165, 155, 128, 28, 120, 179, 205, 158, 186, 53, 3, 143, 99, 140, 52, 47, 56, 74, 187, 33, 211, 75, 234, 156, 94, 180, 190, 174, 54, 8, 236, 18, 160, 68, 232, 110, 77, 157, 117, 240, 87, 82, 168, 46, 192, 104, 95, 113, 59, 108, 36, 235, 177, 109, 131, 19, 92, 15, 80, 37, 93, 207, 61, 14, 253, 86, 29, 43, 16, 50, 230, 215, 7, 127, 193, 100, 229, 249, 182, 21, 64, 24, 173, 58, 185, 219, 42, 163, 27, 203, 245, 191, 138, 146, 4, 89, 181, 139, 213, 246, 161, 133, 198, 237, 71, 88, 202, 223, 208, 196, 22, 144, 159, 106, 254, 45, 39, 244, 119, 226, 0, 12, 209, 201, 148, 49, 217, 63, 101, 73, 176, 171, 141, 164, 136, 102, 85, 17, 65, 40, 121, 9, 152, 250, 35, 98, 48, 135, 81, 23, 6, 241, 227, 116, 210, 41, 169, 90, 10, 243, 248, 147, 204, 218, 60, 233, 112, 197, 214, 122, 228, 83, 161, 127, 220, 198, 187, 24, 79, 70, 174, 192, 128, 164, 104, 12, 55, 72, 189, 208, 242, 149, 44, 166, 172, 207, 121, 98, 61, 1, 245, 52, 186, 20, 169, 210, 32, 195, 111, 183, 185, 194, 103, 69, 178, 38, 252, 56, 112, 135, 39, 243, 13, 58, 99, 197, 237, 22, 180, 89, 6, 141, 94, 163, 120, 248, 31, 140, 223, 234, 77, 91, 76, 181, 110, 86, 54, 222, 201, 204, 241, 66, 225, 7, 33, 184, 40, 107, 90, 95, 191, 34, 53, 209, 4, 93, 177, 15, 25, 101, 106, 148, 17, 124, 26, 125, 251, 131, 136, 117, 65, 154, 188, 115, 41, 138, 14, 156, 253, 215, 203, 122, 158, 67, 153, 19, 199, 45, 123, 229, 23, 42, 62, 217, 48, 230, 116, 59, 9, 57, 113, 134, 68, 171, 238, 246, 150, 227, 133, 182, 145, 190, 50, 82, 84, 102, 196, 239, 202, 255, 132, 218, 213, 139, 240, 228, 160, 96, 114, 211, 64, 130, 176, 73, 231, 249, 232, 221, 144, 46, 74, 119, 75, 16, 27, 11, 167, 159, 118, 250, 97, 129, 85, 92, 244, 235, 78, 165, 170, 88, 10, 155, 100, 63, 247, 35, 36, 37, 219, 83, 142, 105, 28, 216, 205, 87, 8, 60, 2, 162, 137, 214, 157, 21, 206, 18, 43, 212, 5, 81, 152, 3, 168, 146, 126, 175, 226, 147, 179, 51, 200, 151, 143, 254, 71, 224, 49, 80, 0, 233, 109, 47, 236, 193, 30, 173, 108, 29];
scope.v_ki_27818 = [".wav", ".dds", ".bmp", ".ugc", ".sus"];
scope.v_bi_27819 = 0;
scope.v_t1_27820 = 12;
scope.mathRandom = Math.random;
scope.mathMin = Math.min;
scope.mathMax = Math.max;
scope.mathFloor = Math.floor;
scope.mathRound = Math.round;
scope.mathCeil = Math.ceil;
scope.mathSin = Math.sin;
scope.mathCos = Math.cos;
scope.mathTan = Math.tan;
scope.mathAbs = Math.abs;
scope.mathSqrt = Math.sqrt;
scope.mathPow = Math.pow;
scope.mathPI = Math.PI;
scope.v_o1_27834 = undefined;
scope.v_l1_27835 = [];
scope.raf = requestAnimationFrame;
scope.kbdStartFn = kbdStart;
scope.kbdUpdateFn = kbdUpdate;
scope.kbdHeldFn = kbdHeld;
scope.kbdUni2VirtFn = kbdUni2Virt;
scope.di8KbdStartFn = di8KbdStart;
scope.di8KbdUpdateFn = di8KbdUpdate;
scope.di8KbdHeldFn = di8KbdHeld;
scope.di8KbdShutdownFn = di8KbdShutdown;
scope.rankLabel = function (v_t_28215) {
  return 1009e3 <= v_t_28215 ? "Sssp" : 1007500 <= v_t_28215 ? "Sss" : 1005e3 <= v_t_28215 ? "Ssp" : 1e6 <= v_t_28215 ? "Ss" : 99e4 <= v_t_28215 ? "Sp" : 975e3 <= v_t_28215 ? "S" : 95e4 <= v_t_28215 ? "Aaa" : 925e3 <= v_t_28215 ? "Aa" : 9e5 <= v_t_28215 ? "A" : 8e5 <= v_t_28215 ? "Bbb" : 7e5 <= v_t_28215 ? "Bb" : 6e5 <= v_t_28215 ? "B" : 5e5 <= v_t_28215 ? "C" : "D";
};
scope.rankLevel = function (v_t_28216) {
  return 1009e3 <= v_t_28216 ? 13 : 1007500 <= v_t_28216 ? 12 : 1005e3 <= v_t_28216 ? 11 : 1e6 <= v_t_28216 ? 10 : 99e4 <= v_t_28216 ? 9 : 975e3 <= v_t_28216 ? 8 : 95e4 <= v_t_28216 ? 7 : 925e3 <= v_t_28216 ? 6 : 9e5 <= v_t_28216 ? 5 : 8e5 <= v_t_28216 ? 4 : 7e5 <= v_t_28216 ? 3 : 6e5 <= v_t_28216 ? 2 : 5e5 <= v_t_28216 ? 1 : 0;
};
scope.rankGrade = function (v_t_28217) {
  return 975e3 <= v_t_28217 ? "S" : 9e5 <= v_t_28217 ? "A" : 6e5 <= v_t_28217 ? "B" : 5e5 <= v_t_28217 ? "C" : "D";
};
scope.ratingColorName = function (v_t_28218) {
  return v_t_28218 < 400 || v_t_28218 < 700 || v_t_28218 < 1e3 || v_t_28218 < 1200 ? "Wt" : v_t_28218 < 1325 ? "Cp" : v_t_28218 < 1450 ? "Sv" : v_t_28218 < 1525 ? "Gd" : v_t_28218 < 1600 ? "Pt" : "Rb";
};
scope.ratingColorName2 = function (v_t_28219) {
  return v_t_28219 < 400 ? "Gr" : v_t_28219 < 700 ? "Og" : v_t_28219 < 1e3 ? "Rd" : v_t_28219 < 1200 ? "Pp" : v_t_28219 < 1325 ? "Cp" : v_t_28219 < 1450 ? "Sv" : v_t_28219 < 1525 ? "Gd" : v_t_28219 < 1600 ? "Pt" : "Rb";
};
scope.ratingColorRgba = function (v_t_28220) {
  return v_t_28220 < 400 ? [89 / 255, .8, 37 / 255, 1] : v_t_28220 < 700 ? [253 / 255, 158 / 255, 52 / 255, 1] : v_t_28220 < 1e3 ? [253 / 255, 82 / 255, 52 / 255, 1] : v_t_28220 < 1200 ? [180 / 255, 52 / 255, 253 / 255, 1] : [1, 1, 1, 1];
};
scope.arrayPush = Array.prototype.push;
scope.v_Gi_27853 = [scope.v_Va_28079, scope.v_Wa_28080, scope.v_Wa_28080];
scope.supportedLangs = ["ja-JP", "en-US", "zh-CN"];
scope.currentLang = "ja-JP";
scope.v_Ji_27856 = [10001, 10002, 30001, 30002, 0, 0, 0, 0, 0, 0, 0, 0, 10004, 20002, 40008, 40002, 0, 0, 0, 0];
scope.v_be_27857 = {
  Pp: [],
  Gp: [],
  Np: [],
  jp: [],
  Hp: [],
  Up: [],
  Vp: [],
  Jp: []
};
scope.handshake = {
  l: {
    u: [],
    v: new Map(),
    p: [],
    k: [],
    $: []
  },
  Op: {
    Bt: !1
  },
  On: {
    I4: "",
    Wp: 1101,
    zp: !0,
    Kp: !1,
    q: {
      ee: "",
      te: 5,
      ie: 23,
      ne: !1,
      HP: !1,
      pL: 0
    },
    re: 0,
    ae: {
      scrollSpeed: 4,
      mirror: 0,
      jdgTimingA: 20,
      jdgTimingB: 20,
      jdgTimingAir: 20,
      showLevel: 1,
      showRating: 1,
      showOverpower: 1,
      trackSkip: 0,
      autoPlay: 0,
      volGuide: 5,
      tapSe: 0,
      volTap: 5,
      volExTap: 5,
      volSlide: 5,
      volAir: 5,
      volFlick: 5,
      volSkill: 5,
      jTimingSeCond: 0,
      judgeAnsPos: 0,
      judgeAnsJcDetails: 0,
      judgeAnsJDetails: 0,
      judgeAnsADetails: 0,
      fieldLines: 1,
      fieldColor: 5,
      fieldWall: 0,
      fieldInfo: 1
    },
    iI: scope.v_Ji_27856.concat(),
    Xp: {
      Yp: 100,
      Zp: 100
    },
    qp: "_0000000_sys_default",
    $p: "s_00000000",
    Qp: "_0000000_sys_silence",
    tm: !1,
    im: "UMIGURI/uni",
    nI: 0,
    nm: {
      "UMIGURI/uni": {
        Pm: 1,
        Gm: 0,
        En: ":sys_none"
      }
    }
  },
  rm: {
    I4: "ja-JP",
    am: 0,
    om: "",
    lm: 0,
    um: 1,
    b7: 0,
    y7: 0,
    A7: 0,
    S7: 0,
    A9: 0,
    S9: !1,
    x9: "",
    I9: "",
    OA: 0,
    _m: 0,
    hm: 0,
    dm: "",
    vm: !1,
    gm: !1,
    u8: !1,
    wm: !0,
    pm: "1920x1080",
    km: 1,
    bm: !1,
    Sm: "",
    xm: "",
    ym: "",
    Cm: "",
    Im: !1,
    Am: !1,
    Tm: !1,
    Lm: !1,
    Rm: !1,
    gb: null
  },
  Mm: new Map(),
  Em: new Map(),
  Bm: {
    Fm: 0
  },
  Dm: {},
  A4: !1
};
scope.v_h1_27859 = !1;
scope.v_ji_27860 = [{
  scrollSpeed: 4,
  mirror: 0,
  jdgTimingA: 20,
  jdgTimingB: 20,
  jdgTimingAir: 20,
  showLevel: 1,
  showRating: 1,
  showOverpower: 1,
  trackSkip: 0,
  autoPlay: 0,
  volGuide: 5,
  tapSe: 0,
  volTap: 5,
  volExTap: 5,
  volSlide: 5,
  volAir: 5,
  volFlick: 5,
  volSkill: 5,
  jTimingSeCond: 0,
  judgeAnsPos: 0,
  judgeAnsJcDetails: 0,
  judgeAnsJDetails: 0,
  judgeAnsADetails: 0,
  fieldLines: 1,
  fieldColor: 5,
  fieldWall: 0,
  fieldInfo: 1
}, {
  scrollSpeed: 12,
  mirror: 0,
  jdgTimingA: 20,
  jdgTimingB: 20,
  jdgTimingAir: 20,
  showLevel: 1,
  showRating: 1,
  showOverpower: 1,
  trackSkip: 0,
  autoPlay: 0,
  volGuide: 5,
  tapSe: 0,
  volTap: 5,
  volExTap: 5,
  volSlide: 5,
  volAir: 5,
  volFlick: 5,
  volSkill: 5,
  jTimingSeCond: 0,
  judgeAnsPos: 0,
  judgeAnsJcDetails: 0,
  judgeAnsJDetails: 0,
  judgeAnsADetails: 0,
  fieldLines: 2,
  fieldColor: 5,
  fieldWall: 0,
  fieldInfo: 1
}, {
  scrollSpeed: 20,
  mirror: 0,
  jdgTimingA: 20,
  jdgTimingB: 20,
  jdgTimingAir: 20,
  showLevel: 1,
  showRating: 1,
  showOverpower: 1,
  trackSkip: 0,
  autoPlay: 0,
  volGuide: 5,
  tapSe: 0,
  volTap: 5,
  volExTap: 5,
  volSlide: 5,
  volAir: 5,
  volFlick: 5,
  volSkill: 5,
  jTimingSeCond: 0,
  judgeAnsPos: 0,
  judgeAnsJcDetails: 0,
  judgeAnsJDetails: 0,
  judgeAnsADetails: 0,
  fieldLines: 2,
  fieldColor: 5,
  fieldWall: 0,
  fieldInfo: 1
}];
scope.v_Xi_27864 = 0;
scope.v_zi_27865 = null;
scope.v_Ki_27866 = 0;
scope.v_Yi_27867 = 0;
scope.v_qi_27868 = null;
scope.v_Zi_27869 = null;
scope.v_$i_27870 = null;
scope.v_y1_27885 = [197, 238, 48, 6, 140, 192, 127, 129, 135, 38, 19, 205, 31, 140, 194, 198, 74, 128, 201, 166, 197, 85, 192, 237, 122, 48, 82, 145, 241, 247, 232, 153];
scope.v_S1_27886 = [];
scope.v_Se_27889 = createV_Se_27889(scope);
scope.v_T1_27891.prototype = {
  m6: function () {
    this.D6 += this.B6;
  },
  dn: function (v_i_28298) {
    -1 === this.P6.findIndex(v_t_28299 => v_t_28299 === v_i_28298) && this.P6.push(v_i_28298), v_i_28298.o1 = !0, v_i_28298.A6 = this.D6;
  },
  i6: function (v_t_28300) {
    v_t_28300.o1 = !1, v_t_28300.n6 = !1;
  },
  Mc: function (v_t_28301, v_i_28302) {
    v_t_28301.Mc = v_i_28302;
  },
  n6: function (v_t_28303, v_i_28304, v_e_28305) {
    v_e_28305 <= 0 ? (v_t_28303.n6 = !1, v_t_28303.Mc = v_i_28304) : (v_t_28303.n6 = !0, v_t_28303.T6 = this.D6, v_t_28303.L6 = v_e_28305 * this.E6 / 1e3, v_t_28303.R6 = v_i_28304);
  },
  u6: function (v_t_28306, v_i_28307, v_e_28308) {
    v_t_28306._6 = v_i_28307 ? scope.mathFloor((v_e_28308 || 0) * this.E6 / 1e3) : -1;
  },
  b6: function () {
    this.N6.fill(0);
    for (let v_n_28310 = 0; v_n_28310 < this.B6; ++v_n_28310) {
      var v_t_28309 = this.D6 + v_n_28310;
      for (const v_r_28311 of this.P6) if (v_r_28311.o1 && v_r_28311.I6) {
        let v_e_28312 = v_t_28309 - v_r_28311.A6 + v_r_28311.l6;
        if (!((v_e_28312 = 0 <= v_r_28311._6 && v_e_28312 > v_r_28311._6 ? (v_e_28312 - v_r_28311._6) % (v_r_28311.I6.length - v_r_28311._6) + v_r_28311._6 : v_e_28312) >= v_r_28311.I6.length)) {
          v_e_28312 = scope.mathFloor(v_e_28312 * v_r_28311.b1);
          let v_i_28313 = v_r_28311.Mc;
          v_r_28311.n6 && (v_i_28313 = scope.mathMin((v_t_28309 - v_r_28311.T6) / v_r_28311.L6, 1) * (v_r_28311.R6 - v_r_28311.Mc) + v_r_28311.Mc);
          for (let v_t_28314 = 0; v_t_28314 < this.G6; ++v_t_28314) this.N6[v_n_28310 * this.G6 + v_t_28314] = scope.v_Qa_28089(this.N6[v_n_28310 * this.G6 + v_t_28314] + v_r_28311.I6.getChannelData(scope.mathMin(v_t_28314, v_r_28311.I6.numberOfChannels - 1))[v_e_28312] * v_i_28313 * 32767, -32768, 32767);
        }
      }
    }
  },
  H6: function () {
    return this.N6;
  },
  S6: function () {
    return this.j6;
  }
};
scope.v_Ae_27892 = createV_Ae_27892(scope);
scope.inputModule = createInputModule(scope);
scope.menuSystem = createMenuSystem(scope);
scope.ledOutput = createLedOutput(scope);
scope.v_R1_27896 = createV_R1_27896(scope);
scope.playerInfoBoard = createPlayerInfoBoard(scope);
scope.v_M1_27898 = function (v_t_28644, v_i_28645) {
  this.Vt = v_t_28644, this.Ot = v_i_28645;
};
scope.v_E1_27899 = 0;
scope.v_D1_27900 = 1;
scope.sceneManager = createSceneManager(scope);
scope.v_F1_27902 = createV_F1_27902(scope);
scope.localization = createLocalization(scope);
scope.v_N1_27904 = createV_N1_27904(scope);
scope.v_G1_27905 = createV_G1_27905(scope);
scope.v_U1_27906 = createV_U1_27906(scope);
scope.v_H1_27907 = createV_H1_27907(scope);
scope.v_J1_27908 = createV_J1_27908(scope);
scope.v_j1_27909 = createV_j1_27909(scope);
scope.v_O1_27910 = createV_O1_27910(scope);
scope.v_Te_27911 = createV_Te_27911(scope);
scope.v_V1_27912 = createV_V1_27912(scope);
scope.coopLobby = createCoopLobby(scope);
scope.v_X1_27914 = createV_X1_27914(scope);
scope.v_z1_27915 = 0;
scope.v_K1_27916 = 1;
scope.settingsStore = createSettingsStore(scope);
scope.audioFontHub = createAudioFontHub(scope);
scope.v_Z1_27919 = (window.w = scope.audioFontHub, function () {
  function v_r_29288() {
    this.Gi = !1, this.$A = !1, this.QA = 0, this.tS = !1;
  }
  let v_s_29289 = void 0,
    v_a_29290 = new v_r_29288();
  async function v_o_29291() {
    for (scope.v_D_27646.C9(); v_a_29290.tS;) await scope.renderer.C7(500);
    for (v_a_29290.tS = !0; v_a_29290.QA;) scope.v_D_27646.C9(), await scope.renderer.C7(500);
    v_a_29290.tS = !1;
  }
  async function v_l_29292() {
    for (v_s_29289.lt.yk(15).Be = !0, v_s_29289.lt.yk(30).Be = !1, scope.menuSystem.wt("payment", !1), scope.menuSystem.wt("balance", !0), scope.menuSystem.kt("balance", !0), scope.menuSystem.kt("payment", !0), await v_o_29291(), scope.menuSystem.kt("balance", !1), scope.menuSystem.kt("payment", !1), scope.v_D_27646.eS(100), ++v_a_29290.QA; !v_a_29290.tS;) {
      var v_t_29295 = await scope.v_D_27646.iS();
      v_t_29295.nS && (scope.v_D_27646.rS(100), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.v_D_27646.sS(), v_t_29295.aS(), await scope.renderer.C7(3e3), scope.v_D_27646.eS(100)), await scope.renderer.C7(scope.v_Ge_28204(30));
    }
    --v_a_29290.QA, scope.v_D_27646.oS();
  }
  function v_c_29293(v_t_29296) {
    switch (v_t_29296) {
      case "left":
      case "right":
        break;
      case "balance":
        !async function () {
          for (v_s_29289.lt.yk(15).Be = !1, v_s_29289.lt.yk(30).Be = !0, scope.menuSystem.wt("payment", !0), scope.menuSystem.wt("balance", !1), scope.menuSystem.kt("balance", !0), scope.menuSystem.kt("payment", !0), await v_o_29291(), scope.menuSystem.kt("balance", !1), scope.menuSystem.kt("payment", !1), scope.v_D_27646.lS(), ++v_a_29290.QA; !v_a_29290.tS;) {
            var v_t_29297,
              v_i_29298 = await scope.v_D_27646.iS();
            v_i_29298.nS && (null !== (v_t_29297 = await v_i_29298.cS()) ? scope.v_D_27646.lS(v_t_29297) : scope.v_D_27646.sS(), v_i_29298.aS(), await scope.renderer.C7(2e3), scope.v_D_27646.lS()), await scope.renderer.C7(scope.v_Ge_28204(30));
          }
          --v_a_29290.QA, scope.v_D_27646.oS();
        }();
        break;
      case "payment":
        v_l_29292();
        break;
      case "cancel":
        v_u_29294(), scope.menuSystem.yt(!0);
    }
  }
  function v_u_29294() {
    v_a_29290.Gi && (v_a_29290.$A = !0);
  }
  return {
    ue: function (v_e_29299) {
      scope.v_Le_28076([v_i_29300 => {
        scope.languagePackages.it("ui/paymentModal.rsb", function (v_t_29301) {
          v_t_29301 ? (v_t_29301 = new scope.v_Dl_28181(v_t_29301), scope.renderer.nt(v_t_29301.rt(scope.renderer.p5()), v_t_29302 => {
            v_s_29289 = v_t_29302, scope.v_Me_28078(v_i_29300);
          })) : v_e_29299();
        });
      }, v_t_29303 => {
        scope.v_Fe_28101(v_e_29299);
      }]);
    },
    qA: async function (v_t_29304) {
      if (v_a_29290.Gi || v_t_29304 < 1) return !1;
      if (scope.v_R1_27896.XA(v_t_29304)) return !0;
      if (scope.v_R1_27896.fP()) return !0;
      (v_a_29290 = new v_r_29288()).Gi = !0;
      let v_i_29305 = v_s_29289.Jt = !1;
      scope.sceneManager.ft(new scope.v_M1_27898(() => {
        v_s_29289.Jt ? scope.menuSystem.St("cancel") : (v_u_29294(), scope.sceneManager._t());
      }, void 0)), v_l_29292(), await new Promise(v_t_29307 => scope.renderer.ut("paymentModal", v_s_29289, 200, v_t_29307)), v_s_29289.Jt = !0, v_s_29289.e8(2), scope.menuSystem.ft();
      for (const v_n_29308 of [["left", "Left", 0, 3, scope.v_ai_27793, !0, "left"], ["right", "Right", 3, 3, scope.v_ai_27793, !0, "right"], ["balance", "EMoneyBalance", 10, 2, scope.v_X0_27795, !1, ""], ["payment", "EMoneyPayment", 10, 2, scope.v_X0_27795, !1, ""], ["cancel", "Cancel", 14, 2, scope.v_si_27792, !1, ""]]) scope.menuSystem.vt(v_n_29308[0], v_n_29308[1], v_n_29308[2], v_n_29308[3], v_n_29308[4], v_n_29308[5], !1, !1, v_n_29308[6], function (v_t_29309, v_i_29310) {
        "down" === v_t_29309 && v_c_29293(this.Ae);
      });
      scope.menuSystem.It(!0), scope.menuSystem.wt("payment", !1), scope.menuSystem.T9(scope.v_Ge_28204(20));
      var v_e_29306 = scope.v_R1_27896.KA();
      for (v_s_29289.lt.yk(11).Wt = (v_e_29306 * v_t_29304).toString(), v_s_29289.lt.yk(14).Wt = v_t_29304.toString(); !v_a_29290.$A;) {
        if (scope.v_R1_27896.XA(v_t_29304)) {
          v_i_29305 = !0;
          break;
        }
        v_s_29289.lt.yk(9).Wt = (scope.v_R1_27896.YA() + scope.mathMin(scope.v_R1_27896.ZA(), v_t_29304) * v_e_29306).toString(), await scope.renderer.C7(250);
      }
      return v_i_29305 && (v_s_29289.lt.yk(9).Wt = (v_e_29306 * v_t_29304).toString()), scope.menuSystem.Ct(!0), scope.menuSystem.It(!1), await v_o_29291(), v_s_29289.e8(1), await scope.renderer.C7(scope.v_Ge_28204(30)), scope.renderer._i("paymentModal"), scope.menuSystem.Ct(!1), scope.menuSystem._t(), v_a_29290.Gi = !1, scope.sceneManager._t(), v_i_29305;
    },
    C9: v_u_29294,
    Gi: () => v_a_29290.Gi
  };
}());
scope.v_$1_27920 = createV_$1_27920(scope);
scope.v_Q1_27921 = createV_Q1_27921(scope);
scope.uiComponentA = createUiComponentA(scope);
scope.uiComponentB = createUiComponentB(scope);
scope.uiComponentC = createUiComponentC(scope);
scope.v_nr_27925 = createV_nr_27925(scope);
scope.v_rr_27926 = 1;
scope.v_sr_27927 = 9;
scope.gameCore = createGameCore(scope);
scope.v_lr_27930 = createV_lr_27930(scope);
scope.testMenu = createTestMenu(scope);
scope.v_ur_27932 = createV_ur_27932(scope);
scope.v_dr_27936.prototype = {
  Pw: function () {
    scope.v_De_28096(this.yc.$g, function (v_t_32024) {
      v_t_32024.tw = !1, v_t_32024.qg = !1, v_t_32024.Qg = !1, v_t_32024.Ug = scope.v_v0_27715, v_t_32024.nr = 0, v_t_32024.n7.fill(!1), v_t_32024.Sw = null, v_t_32024.xw = 0, v_t_32024.mw = null, scope.v_De_28096(v_t_32024.We, function (v_t_32025) {
        v_t_32025.tw = !1, v_t_32025.Qg = !1, v_t_32025.Ug = scope.v_v0_27715, v_t_32025.nr = 0, v_t_32025.mw = null;
      });
    });
  },
  lw: function () {
    var v_i_32026,
      v_e_32027,
      v_n_32028,
      v_r_32029 = this.yc.$g;
    for (let v_t_32030 = 0; v_t_32030 < v_r_32029.length; ++v_t_32030) if (v_i_32026 = (v_e_32027 = v_r_32029[v_t_32030]).Fi & scope.v_xn_27661, v_e_32027.Fi === scope.v_ce_27678 || v_e_32027.Fi === scope.v_le_27675 || v_e_32027.Fi === scope.v_ue_27682 || v_e_32027.Fi === scope.v_t0_27693 || v_e_32027.Fi === scope.v_s0_27698) {
      v_e_32027.ou = 16 - v_e_32027.Le - v_e_32027.ou;
      for (let v_t_32031 = 0; v_t_32031 < v_e_32027.We.length; ++v_t_32031) (v_n_32028 = v_e_32027.We[v_t_32031]).ou = 16 - v_n_32028.Le - v_n_32028.ou;
    } else v_i_32026 !== scope.v_Cn_27662 && v_i_32026 !== scope.v_zn_27686 || (v_e_32027.ou = 16 - v_e_32027.Le - v_e_32027.ou, v_e_32027.Fi === scope.v_qn_27689 ? v_e_32027.Fi = scope.v_Zn_27690 : v_e_32027.Fi === scope.v_Zn_27690 ? v_e_32027.Fi = scope.v_qn_27689 : v_e_32027.Fi === scope.v_Qn_27692 ? v_e_32027.Fi = scope.v_$n_27691 : v_e_32027.Fi === scope.v_$n_27691 ? v_e_32027.Fi = scope.v_Qn_27692 : v_e_32027.Fi === scope.v_En_27669 ? v_e_32027.Fi = scope.v_Dn_27670 : v_e_32027.Fi === scope.v_Dn_27670 ? v_e_32027.Fi = scope.v_En_27669 : v_e_32027.Fi === scope.v_Fn_27671 ? v_e_32027.Fi = scope.v_Bn_27672 : v_e_32027.Fi === scope.v_Bn_27672 && (v_e_32027.Fi = scope.v_Fn_27671));
  },
  cw: function (v_t_32032) {
    let v_e_32033 = this.yc.$g,
      v_n_32034,
      v_r_32035,
      v_s_32036 = 0,
      v_a_32037 = 0,
      v_o_32038 = 0;
    var v_l_32039 = scope.mathAbs(v_t_32032.Ra.Kb),
      v_c_32040 = scope.mathAbs(v_t_32032.Ra.Mb);
    let v_u_32041,
      v_f_32042,
      v_i_32043 = !0;
    for (let v_t_32045 = 0; v_t_32045 < v_e_32033.length; ++v_t_32045) if ((v_r_32035 = v_e_32033[v_t_32045]).Fi === scope.v_Tn_27663 || v_r_32035.Fi === scope.v_ce_27678 || v_r_32035.Fi === scope.v_le_27675 || v_r_32035.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_r_32035.Fi)) if (v_i_32043) v_r_32035.jg.fill(v_c_32040), v_i_32043 = !1;else for (let v_t_32046 = 0; v_t_32046 < v_e_32033.length; ++v_t_32046) if ((v_n_32034 = v_e_32033[v_t_32046]).Fi === scope.v_Tn_27663 || v_n_32034.Fi === scope.v_ce_27678 || v_n_32034.Fi === scope.v_le_27675 || v_n_32034.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_n_32034.Fi)) {
      if (v_n_32034.od >= v_r_32035.od) break;
      if (v_r_32035.ou + v_r_32035.Le > v_n_32034.ou && v_r_32035.ou < v_n_32034.ou + v_n_32034.Le) if (v_a_32037 = v_n_32034.od, v_o_32038 = v_r_32035.od, v_s_32036 = v_o_32038 - v_a_32037, v_u_32041 = scope.mathMax(v_r_32035.ou, v_n_32034.ou), v_f_32042 = scope.mathMin(v_r_32035.ou + v_r_32035.Le, v_n_32034.ou + v_n_32034.Le), scope.v__0_27710(v_r_32035.Fi) || v_r_32035.Fi === scope.v_Pn_27665 || (v_r_32035.Fi === scope.v_ce_27678 || v_r_32035.Fi === scope.v_le_27675) && 1 === v_r_32035.Jg) for (let v_t_32047 = 0; v_t_32047 < 16; ++v_t_32047) v_t_32047 >= v_u_32041 && v_t_32047 < v_f_32042 ? v_r_32035.jg[v_t_32047] = scope.mathMin(v_r_32035.jg[v_t_32047], v_s_32036 / 2) : v_r_32035.jg[v_t_32047] = scope.mathMin(v_r_32035.jg[v_t_32047], v_c_32040);else for (let v_t_32048 = 0; v_t_32048 < 16; ++v_t_32048) v_t_32048 >= v_u_32041 && v_t_32048 < v_f_32042 ? v_r_32035.jg[v_t_32048] = scope.mathMin(v_r_32035.jg[v_t_32048], v_s_32036 / 2) : v_r_32035.jg[v_t_32048] = scope.mathMin(v_r_32035.jg[v_t_32048], scope.mathMax(v_s_32036 / 2, v_l_32039));
    }
    for (let v_i_32049 = 0; v_i_32049 < v_e_32033.length; ++v_i_32049) if ((v_n_32034 = v_e_32033[v_i_32049]).Fi === scope.v_Tn_27663 || v_n_32034.Fi === scope.v_ce_27678 || v_n_32034.Fi === scope.v_le_27675 || v_n_32034.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_n_32034.Fi)) {
      for (let v_t_32050 = v_e_32033.length - 1; v_t_32050 > v_i_32049; --v_t_32050) if ((v_r_32035 = v_e_32033[v_t_32050]).Fi === scope.v_Tn_27663 || v_r_32035.Fi === scope.v_ce_27678 || v_r_32035.Fi === scope.v_le_27675 || v_r_32035.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_r_32035.Fi)) {
        if (v_n_32034.od >= v_r_32035.od) break;
        if (v_r_32035.ou + v_r_32035.Le > v_n_32034.ou && v_r_32035.ou < v_n_32034.ou + v_n_32034.Le) if (v_a_32037 = v_n_32034.od, v_o_32038 = v_r_32035.od, v_s_32036 = v_o_32038 - v_a_32037, v_u_32041 = scope.mathMax(v_r_32035.ou, v_n_32034.ou), v_f_32042 = scope.mathMin(v_r_32035.ou + v_r_32035.Le, v_n_32034.ou + v_n_32034.Le), scope.v__0_27710(v_n_32034.Fi) || (v_n_32034.Fi === scope.v_ce_27678 || v_n_32034.Fi === scope.v_le_27675) && 1 === v_n_32034.Jg) for (let v_t_32051 = 0; v_t_32051 < 16; ++v_t_32051) v_t_32051 >= v_u_32041 && v_t_32051 < v_f_32042 ? v_n_32034.Hg[v_t_32051] = scope.mathMax(v_n_32034.Hg[v_t_32051], -v_s_32036 + v_r_32035.jg[v_t_32051]) : v_n_32034.Hg[v_t_32051] = scope.mathMax(v_n_32034.Hg[v_t_32051], -v_c_32040);else {
          var v___32044 = scope.mathMax(v_n_32034.Hg[v_n_32034.ou], -v_s_32036 + v_r_32035.jg[scope.mathMax(v_n_32034.ou, v_r_32035.ou)]);
          for (let v_t_32052 = 0; v_t_32052 < 16; ++v_t_32052) v_t_32052 >= v_u_32041 && v_t_32052 < v_f_32042 ? v_n_32034.Hg[v_t_32052] = scope.mathMax(v___32044, -v_s_32036 + v_r_32035.jg[v_t_32052]) : v_n_32034.Hg[v_t_32052] = scope.mathMax(v_n_32034.Hg[v_t_32052], scope.mathMin(v___32044, -v_l_32039));
        }
      }
      for (let v_t_32053 = v_n_32034.ou; v_t_32053 < v_n_32034.ou + v_n_32034.Le; ++v_t_32053) v_n_32034.yw = scope.mathMin(v_n_32034.yw, scope.mathMax(v_n_32034.Hg[v_t_32053], -v_c_32040));
    }
    for (let v_i_32054 = 0; v_i_32054 < v_e_32033.length; ++v_i_32054) if ((v_n_32034 = v_e_32033[v_i_32054]).Fi === scope.v_Tn_27663 || v_n_32034.Fi === scope.v_ce_27678 || v_n_32034.Fi === scope.v_le_27675 || v_n_32034.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_n_32034.Fi)) for (let v_t_32055 = v_i_32054 + 1; v_t_32055 < v_e_32033.length; ++v_t_32055) if (((v_r_32035 = v_e_32033[v_t_32055]).Fi === scope.v_Tn_27663 || v_r_32035.Fi === scope.v_ce_27678 || v_r_32035.Fi === scope.v_le_27675 || v_r_32035.Fi === scope.v_Pn_27665 || scope.v__0_27710(v_r_32035.Fi)) && !(v_n_32034.od >= v_r_32035.od) && v_r_32035.ou + v_r_32035.Le > v_n_32034.ou && v_r_32035.ou < v_n_32034.ou + v_n_32034.Le) if (v_a_32037 = v_n_32034.od, v_o_32038 = v_r_32035.od, v_s_32036 = v_o_32038 - v_a_32037, v_u_32041 = scope.mathMax(v_r_32035.ou, v_n_32034.ou), v_f_32042 = scope.mathMin(v_r_32035.ou + v_r_32035.Le, v_n_32034.ou + v_n_32034.Le), scope.v__0_27710(v_r_32035.Fi) || (v_r_32035.Fi === scope.v_ce_27678 || v_r_32035.Fi === scope.v_le_27675) && 1 === v_r_32035.Jg) for (let v_t_32056 = 0; v_t_32056 < 16; ++v_t_32056) v_t_32056 >= v_u_32041 && v_t_32056 < v_f_32042 && (v_r_32035.jg[v_t_32056] = scope.mathMin(v_s_32036 + v_n_32034.Hg[v_t_32056]));else {
      let v_i_32057 = 1 / 0;
      for (let v_t_32058 = 0; v_t_32058 < 16; ++v_t_32058) v_t_32058 >= v_u_32041 && v_t_32058 < v_f_32042 && (v_i_32057 = scope.mathMin(v_i_32057, v_s_32036 + v_n_32034.Hg[v_t_32058]));
      for (let v_t_32059 = 0; v_t_32059 < 16; ++v_t_32059) v_t_32059 >= v_u_32041 && v_t_32059 < v_f_32042 ? v_r_32035.jg[v_t_32059] = v_i_32057 : v_r_32035.jg[v_t_32059] = scope.mathMin(scope.mathMax(v_i_32057, v_l_32039), v_r_32035.jg[v_t_32059]);
    }
  },
  Tw: function (v_t_32060, v_i_32061, v_e_32062, v_n_32063) {
    let v_r_32064 = 1,
      v_s_32065 = 0,
      v_a_32066 = 0,
      v_o_32067 = scope.mathMax(v_t_32060, 0),
      v_l_32068 = void 0 !== v_n_32063 ? v_n_32063 : v_t_32060,
      v_c_32069 = this.yc.Zw[v_i_32061],
      v_u_32070;
    if (v_c_32069) for (let v_t_32071 = 0; v_t_32071 < v_c_32069.length && !(v_o_32067 < (v_u_32070 = v_c_32069[v_t_32071]).od); ++v_t_32071) v_s_32065 += (v_u_32070.od - v_a_32066) * v_r_32064, v_a_32066 = v_u_32070.od, v_r_32064 = v_u_32070.tp;
    return v_u_32070 && v_l_32068 >= v_a_32066 && (v_a_32066 === v_u_32070.od || v_l_32068 < v_u_32070.od) && (v_r_32064 *= v_e_32062), v_s_32065 + (v_t_32060 - v_a_32066) * v_r_32064;
  },
  xL: function (v_t_32072, v_i_32073, v_e_32074) {
    if (0 === v_e_32074) return v_i_32073;
    v_e_32074 = this.yc.IL.get(v_e_32074);
    if (!v_e_32074) return v_i_32073;
    let v_n_32075 = 1,
      v_r_32076 = 0,
      v_s_32077 = 0;
    for (const v_o_32079 of v_e_32074) {
      var v_a_32078 = this.ep(this.ob(v_t_32072) - v_o_32079.TL);
      if (v_i_32073 < v_a_32078) break;
      v_r_32076 += (v_a_32078 - v_s_32077) * v_n_32075, v_s_32077 = v_a_32078, v_n_32075 = v_o_32079.tp;
    }
    return v_r_32076 + (v_i_32073 - v_s_32077) * v_n_32075;
  },
  ep: function (v_t_32080) {
    let v_i_32081 = 120,
      v_e_32082 = 0,
      v_n_32083 = 0,
      v_r_32084 = scope.mathMax(v_t_32080, 0);
    for (const v_s_32085 of this.yc.qw) {
      if (v_r_32084 < v_s_32085.Xg) break;
      v_e_32082 += (v_s_32085.Xg - v_n_32083) / scope.v_de_27728 / (v_i_32081 / 4 / 60), v_n_32083 = v_s_32085.Xg, v_i_32081 = v_s_32085.ip;
    }
    return v_e_32082 += (v_t_32080 - v_n_32083) / scope.v_de_27728 / (v_i_32081 / 4 / 60);
  },
  ob: function (v_t_32086) {
    let v_i_32087 = 120,
      v_e_32088 = 0,
      v_n_32089 = 0,
      v_r_32090;
    for (const v_s_32091 of this.yc.qw) {
      if (v_t_32086 < (v_r_32090 = v_e_32088 + (v_s_32091.Xg - v_n_32089) / scope.v_de_27728 / (v_i_32087 / 4 / 60))) break;
      v_e_32088 = v_r_32090, v_n_32089 = v_s_32091.Xg, v_i_32087 = v_s_32091.ip;
    }
    return v_n_32089 + scope.v_de_27728 * (v_t_32086 - v_e_32088) * (v_i_32087 / 4 / 60);
  },
  np: function (v_t_32092) {
    let v_i_32093 = 120,
      v_e_32094 = scope.mathMax(v_t_32092, 0);
    for (const v_n_32095 of this.yc.qw) {
      if (v_e_32094 < v_n_32095.Xg) break;
      v_i_32093 = v_n_32095.ip;
    }
    return v_i_32093;
  },
  Ew: function (v_t_32096, v_i_32097) {
    if (!this.yc.Zw[v_i_32097]) return 1;
    let v_e_32098 = 1,
      v_n_32099 = scope.mathMax(v_t_32096, 0);
    for (const v_r_32100 of this.yc.Zw[v_i_32097]) {
      if (v_n_32099 < v_r_32100.Xg) break;
      v_e_32098 = v_r_32100.tp;
    }
    return v_e_32098;
  },
  rp: function (v_t_32101, v_i_32102) {
    if (!this.yc.Zw[v_i_32102]) return 1;
    let v_e_32103 = 1,
      v_n_32104 = scope.mathMax(v_t_32101, 0);
    for (const v_r_32105 of this.yc.Zw[v_i_32102]) {
      if (v_n_32104 < v_r_32105.od) break;
      v_e_32103 = v_r_32105.tp;
    }
    return v_e_32103;
  }
};
scope.v_vr_27937 = {
  rt: function (v_t_32106, v_i_32107, v_e_32108) {
    let v_a_32109 = new scope.v_dr_27936();
    v_a_32109.$w = {
      ap: !1,
      lp: {},
      cp: {},
      up: [],
      fp: [],
      _p: [],
      hp: 0,
      dp: 0,
      vp: 0,
      gp: !1,
      wp: !1,
      pp: !0,
      kP: !0
    };
    var v_n_32110,
      v_r_32111,
      v_s_32112 = v_t_32106.replace(/\r\n/g, "\n").split("\n");
    for (let v_t_32120 = 0; v_t_32120 < v_s_32112.length; ++v_t_32120) "" !== (v_n_32110 = v_s_32112[v_t_32120].trimEnd()) && (null === (v_n_32110 = "#" === (v_n_32110 = v_n_32110)[0] && (v_n_32110 = v_n_32110.match(/^#([a-zA-Z0-9]+)([ :])\s*(([\s\S])*)$/)) ? [v_n_32110[1], '"' === (v_n_32110 = v_n_32110[3])[0] && '"' === v_n_32110[v_n_32110.length - 1] ? v_n_32110.substring(1, v_n_32110.length - 1) : v_n_32110] : null) || function (v_n_32121, v_t_32122) {
      switch (v_t_32122[0]) {
        case "TITLE":
          return v_n_32121.Zu.lf = v_t_32122[1], 1;
        case "ARTIST":
          return v_n_32121.Zu.C5 = v_t_32122[1], 1;
        case "DESIGNER":
          return v_n_32121.Zu.T5 = v_t_32122[1], 1;
        case "DIFFICULTY":
          return 0 <= v_t_32122[1].indexOf(":") ? (v_i_32123 = v_t_32122[1].split(":"), v_n_32121.Zu.te = 4, v_n_32121.Zu.b5 = v_i_32123[1].substr(0, 1), v_n_32121.Zu.k5 = v_i_32123[0]) : v_n_32121.Zu.te = scope.v_Pe_28064(v_t_32122[1]), 1;
        case "PLAYLEVEL":
          return "" !== v_t_32122[1] && 0 < scope.v_Pe_28064(v_t_32122[1]) && (v_n_32121.Zu.k5 = v_t_32122[1]), 1;
        case "SONGID":
          return v_n_32121.Zu.ee = v_t_32122[1], 1;
        case "WAVE":
          return v_n_32121.Zu.Gw = v_t_32122[1], 1;
        case "WAVEOFFSET":
          return v_n_32121.Zu._w = scope.v_Re_28066(v_t_32122[1]), 1;
        case "JACKET":
          return v_n_32121.Zu.Ow = v_t_32122[1], 1;
        case "BACKGROUND":
          return v_n_32121.Zu.jw = v_t_32122[1], 1;
        case "FIELDBACKGROUND":
          return v_n_32121.Zu.Ww = v_t_32122[1], 1;
        case "DIVLINECOLOR":
          return v_n_32121.Zu.Uw = v_t_32122[1], 1;
        case "BASEBPM":
          return v_n_32121.Zu.A5 = scope.v_Re_28066(v_t_32122[1]), 1;
        case "REQUEST":
          var v_i_32123 = v_t_32122[1].split(" "),
            v_e_32124 = v_i_32123.slice(1).join(" ").trim();
          switch (v_i_32123[0]) {
            case "ticks_per_beat":
              v_n_32121.Zu.Kw = 4 * scope.v_Pe_28064(v_e_32124);
              break;
            case "metronome":
              v_n_32121.Zu.zw = scope.v_La_28062(v_e_32124);
              break;
            case "enable_priority":
            case "enable_moving_lane":
            case "segments_per_second":
              break;
            case "x_ug_ext":
              v_n_32121.$w.ap = scope.v_La_28062(v_e_32124);
              break;
            case "x_ug_tutorial":
              v_n_32121.Zu.Bw = scope.v_La_28062(v_e_32124), v_n_32121.Zu.Bw && v_n_32121.Zu.zw && (v_n_32121.Zu.zw = !1);
              break;
            case "x_ug_autoplay":
              scope.v_De_28096(v_e_32124.split(","), function (v_t_32126) {
                v_t_32126 = v_t_32126.match(/([\d]+)[\s]*?'[\s]*([\d]+)[\s]*?:[\s]*?([\d]+)[\s]*?'[\s]*([\d]+)/);
                !v_t_32126 || v_t_32126.length < 5 || v_n_32121.$w._p.push({
                  meas: scope.v_Pe_28064(v_t_32126[1]),
                  stick: scope.v_Pe_28064(v_t_32126[2]),
                  flag: !0
                }, {
                  meas: scope.v_Pe_28064(v_t_32126[3]),
                  stick: scope.v_Pe_28064(v_t_32126[4]),
                  flag: !1
                });
              });
              break;
            case "enable_just_begin_metronome":
            case "x_ug_enable_just_begin_metronome":
              v_n_32121.Zu.Xw = scope.v_La_28062(v_e_32124), v_n_32121.Zu.Xw && (v_n_32121.Zu.zw = !0);
              break;
            case "preview_range":
            case "x_ug_preview_range":
              var v_r_32125 = v_e_32124.split(",");
              2 <= v_r_32125.length && (v_n_32121.Zu.Yw = v_r_32125.map(v_t_32127 => scope.v_Re_28066(v_t_32127)));
          }
          return 1;
      }
      if (0 === v_t_32122[0].indexOf("BPM")) return v_n_32121.$w.lp[parseInt(v_t_32122[0].substr(3, 2), 36)] = scope.v_Re_28066(v_t_32122[1]), 1;
      if (0 === v_t_32122[0].indexOf("TIL")) {
        let v_i_32128 = [],
          v_e_32129;
        return scope.v_De_28096(v_t_32122[1].split(","), function (v_t_32130) {
          !(v_e_32129 = v_t_32130.match(/([\d]+)[\s]*?'[\s]*([\d]+)[\s]*?:[\s]*?(-?[\d]+(\.[\d]+)?)/)) || v_e_32129.length < 4 || (v_i_32128.push({
            mp: scope.v_Pe_28064(v_e_32129[1]),
            yp: scope.v_Pe_28064(v_e_32129[2]),
            tp: scope.v_Re_28066(v_e_32129[3])
          }), v_n_32121.$w.vp = scope.mathMax(v_n_32121.$w.vp, scope.v_Pe_28064(v_e_32129[1])));
        }), v_n_32121.$w.cp[parseInt(v_t_32122[0].substr(3, 2), 36)] = v_i_32128, 1;
      }
    }(v_a_32109, v_n_32110) || (v_i_32107 ? function (v_i_32131, v_e_32132) {
      switch (v_e_32132[0]) {
        case "HISPEED":
        case "NOSPEED":
        case "MEASUREBS":
        case "MEASUREHS":
          return;
        default:
          if (!isNaN(scope.v_Pe_28064(v_e_32132[0].substr(0, 3)))) {
            var v_n_32133 = scope.v_Pe_28064(v_e_32132[0].substr(0, 3)) + v_i_32131.$w.dp,
              v_r_32134 = parseInt(v_e_32132[0].substr(4, 1), 36),
              v_s_32135 = parseInt(v_e_32132[0].substr(3, 1), 36) << 4;
            if (2 == (v_s_32135 | v_r_32134)) {
              var v_t_32136 = new scope.v_wr_27938();
              v_t_32136.Fi = 2, v_t_32136.mp = v_n_32133, v_t_32136.kp = 0, v_t_32136.bp = 1, v_t_32136.Jg = scope.v_Re_28066(v_e_32132[1]) / 4, v_t_32136.Sp = 20, v_i_32131.$w.up.push(v_t_32136);
            } else {
              var v_a_32137,
                v_o_32138,
                v_l_32139 = scope.mathFloor(v_e_32132[1].length / 2);
              for (let v_t_32140 = 0; v_t_32140 < v_l_32139; ++v_t_32140) "00" !== (v_o_32138 = v_e_32132[1].substr(2 * v_t_32140, 2)) && 8 == (v_s_32135 | v_r_32134) && ((v_a_32137 = new scope.v_wr_27938()).mp = v_n_32133, v_a_32137.kp = v_t_32140, v_a_32137.bp = v_l_32139, v_a_32137.Fi = 1, v_a_32137.Jg = parseInt(v_o_32138, 36), v_i_32131.$w.fp.push(v_a_32137));
            }
            v_i_32131.$w.vp = scope.mathMax(v_i_32131.$w.vp, v_n_32133);
          }
      }
    } : function (v_s_32141, v_a_32142) {
      switch (v_a_32142[0]) {
        case "HISPEED":
          return v_s_32141.$w.hp = parseInt(v_a_32142[1], 36), -1 === v_s_32141.Zu.uw.indexOf(v_s_32141.$w.hp) && v_s_32141.Zu.uw.push(v_s_32141.$w.hp);
        case "NOSPEED":
          return;
        case "MEASUREBS":
          return v_s_32141.$w.dp = scope.mathMax(scope.v_Pe_28064(v_a_32142[1]), 0);
        case "MEASUREHS":
          var v_t_32143 = scope.mathMax(scope.v_Pe_28064(v_a_32142[1]), 0);
          return void 0 !== v_s_32141.$w.cp[v_t_32143] && (v_s_32141.Zu.Wg = v_t_32143);
        default:
          if (!isNaN(scope.v_Pe_28064(v_a_32142[0].substr(0, 3)))) {
            let v_i_32147 = scope.v_Pe_28064(v_a_32142[0].substr(0, 3)) + v_s_32141.$w.dp,
              v_e_32148 = parseInt(v_a_32142[0].substr(4, 1), 36),
              v_n_32149 = parseInt(v_a_32142[0].substr(3, 1), 36) << 4,
              v_r_32150 = 0;
            if (v_n_32149 !== scope.v_Hn_27677 && v_n_32149 !== scope.v_Gn_27674 && 64 != v_n_32149 || (v_r_32150 = parseInt(v_a_32142[0].substr(5, 1), 36)), 2 == (v_n_32149 | v_e_32148)) {
              v_t_32143 = new scope.v_wr_27938();
              v_t_32143.Fi = 2, v_t_32143.mp = v_i_32147, v_t_32143.kp = 0, v_t_32143.bp = 1, v_t_32143.Jg = scope.v_Re_28066(v_a_32142[1]) / 4, v_t_32143.Sp = 20, v_s_32141.$w.up.push(v_t_32143);
            } else {
              var v_o_32144,
                v_l_32145,
                v_c_32146 = scope.mathFloor(v_a_32142[1].length / 2);
              for (let v_t_32151 = 0; v_t_32151 < v_c_32146; ++v_t_32151) "00" !== (v_l_32145 = v_a_32142[1].substr(2 * v_t_32151, 2)) && ((v_o_32144 = new scope.v_wr_27938()).mp = v_i_32147, v_o_32144.kp = v_t_32151, v_o_32144.bp = v_c_32146, 8 == (v_n_32149 | v_e_32148) ? (v_o_32144.Fi = 1, v_o_32144.Jg = parseInt(v_l_32145, 36)) : (v_o_32144.Fi = v_n_32149 | parseInt(v_l_32145[0], 36), v_o_32144.ou = v_e_32148, v_o_32144.Le = parseInt(v_l_32145[1], 36), v_o_32144.xp = v_r_32150), v_o_32144.Lw = v_s_32141.$w.hp, v_o_32144.Fi !== scope.v_Jn_27679 && v_o_32144.Fi !== scope.v_Un_27676 && v_o_32144.Fi !== scope.v_Vn_27683 || (v_o_32144.Sp = 10), (v_o_32144.Fi & scope.v_xn_27661) === scope.v_zn_27686 ? (v_o_32144.Sp = 5, v_o_32144.G0 = 8) : 64 == (v_o_32144.Fi & scope.v_xn_27661) && (v_o_32144.G0 = 8), v_s_32141.$w.fp.push(v_o_32144));
            }
            v_s_32141.$w.vp = scope.mathMax(v_s_32141.$w.vp, v_i_32147);
          }
      }
    })(v_a_32109, v_n_32110));
    v_a_32109.$w.up.sort((v_t_32152, v_i_32153) => v_t_32152.mp - v_i_32153.mp), scope.v_ao_28097(v_a_32109.$w.cp, function (v_t_32154, v_i_32155) {
      let v_e_32156 = [];
      scope.v_De_28096(v_t_32154, function (v_t_32157) {
        v_e_32156.push({
          Xg: scope.v_gr_27939(v_a_32109, v_t_32157.mp, v_t_32157.yp * scope.v_de_27728 / v_a_32109.Zu.Kw),
          tp: v_t_32157.tp,
          od: 0
        });
      }), v_a_32109.yc.Zw[v_i_32155] = v_e_32156, v_a_32109.yc.Zw[v_i_32155].sort((v_t_32158, v_i_32159) => v_t_32158.Xg - v_i_32159.Xg);
    }), scope.v_De_28096(v_a_32109.$w.fp, function (v_t_32160) {
      v_t_32160.Xg = scope.v_gr_27939(v_a_32109, v_t_32160.mp, scope.v_de_27728 * scope.v_mr_27940(v_a_32109, v_t_32160.mp) * v_t_32160.kp / v_t_32160.bp);
    }), v_a_32109.$w.fp.sort((v_t_32161, v_i_32162) => v_t_32161.Xg === v_i_32162.Xg ? v_i_32162.Sp - v_t_32161.Sp : v_t_32161.Xg - v_i_32162.Xg);
    var v_o_32113 = v_a_32109;
    for (let v_t_32163 = v_o_32113.Zu.Xw ? 1 : 0; v_t_32163 < v_o_32113.$w.vp + 1; ++v_t_32163) (v_r_32111 = new scope.v_wr_27938()).Fi = scope.v_u0_27704, v_r_32111.Xg = scope.v_gr_27939(v_o_32113, v_t_32163, 0), v_r_32111.Jg = v_t_32163, v_o_32113.$w.fp.push(v_r_32111);
    if (v_e_32108) {
      var v_l_32114 = v_a_32109;
      let v_i_32164 = 0,
        v_e_32165 = 0,
        v_n_32166 = 0,
        v_r_32167 = 0;
      v_l_32114.Fw = [], scope.v_De_28096(v_l_32114.$w.up, function (v_t_32168) {
        v_e_32165 = v_i_32164, v_i_32164 += (v_t_32168.mp - v_r_32167) * scope.v_de_27728 * v_n_32166;
        for (let v_i_32169 = v_r_32167; v_i_32169 < v_t_32168.mp; ++v_i_32169) for (let v_t_32170 = 0; v_t_32170 < 8; ++v_t_32170) v_l_32114.Fw.push({
          Dw: (0 === v_t_32170 ? 1 : 0) + (v_t_32170 % 4 == 0 ? 1 : 0) + (v_t_32170 % 2 == 0 ? 1 : 0),
          Xg: v_e_32165 + v_i_32169 * scope.v_de_27728 * v_n_32166,
          od: 0
        });
        v_n_32166 = v_t_32168.Jg, v_r_32167 = v_t_32168.mp;
      });
      for (let v_i_32171 = v_r_32167; v_i_32171 < v_l_32114.$w.vp + 1; ++v_i_32171) for (let v_t_32172 = 0; v_t_32172 < 8; ++v_t_32172) v_l_32114.Fw.push({
        Dw: (0 === v_t_32172 ? 1 : 0) + (v_t_32172 % 4 == 0 ? 1 : 0) + (v_t_32172 % 2 == 0 ? 1 : 0),
        Xg: v_e_32165 + (v_i_32171 + v_t_32172 / 8) * scope.v_de_27728 * v_n_32166,
        od: 0
      });
    }
    v_a_32109.$w.fp.sort((v_t_32173, v_i_32174) => v_t_32173.Xg === v_i_32174.Xg ? v_i_32174.Sp - v_t_32173.Sp : v_t_32173.Xg - v_i_32174.Xg);
    {
      var v_c_32115 = v_a_32109;
      let v_n_32175 = {},
        v_r_32176 = {},
        v_s_32177 = {};
      scope.v_De_28096(v_c_32115.$w.fp, function (v_t_32178, v_i_32179) {
        switch (v_t_32178.Fi) {
          case scope.v_ce_27678:
            v_n_32175[v_t_32178.xp] = v_i_32179;
            break;
          case scope.v_jn_27680:
          case scope.v_On_27681:
          case 52:
          case scope.v_Jn_27679:
            "number" == typeof v_n_32175[v_t_32178.xp] && v_c_32115.$w.fp[v_n_32175[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === scope.v_Jn_27679 && (v_n_32175[v_t_32178.xp] = null);
            break;
          case scope.v_le_27675:
            v_r_32176[v_t_32178.xp] = v_i_32179;
            break;
          case scope.v_Un_27676:
            var v_e_32180;
            "number" == typeof v_r_32176[v_t_32178.xp] && v_c_32115.$w.fp[v_r_32176[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === scope.v_Un_27676 && (v_e_32180 = v_c_32115.$w.fp[v_r_32176[v_t_32178.xp]], v_t_32178.ou = v_e_32180.ou, v_t_32178.Le = v_e_32180.Le, v_r_32176[v_t_32178.xp] = null);
            break;
          case scope.v_ue_27682:
            v_s_32177[v_t_32178.xp] = v_i_32179;
            break;
          case scope.v_Wn_27684:
          case scope.v_Vn_27683:
            "number" == typeof v_s_32177[v_t_32178.xp] && v_c_32115.$w.fp[v_s_32177[v_t_32178.xp]].We.push(v_t_32178), v_t_32178.Fi === scope.v_Vn_27683 && (v_s_32177[v_t_32178.xp] = null);
        }
      });
    }
    {
      var v_u_32116 = v_a_32109;
      scope.v_De_28096(v_u_32116.$w.fp, function (v_i_32184) {
        (v_i_32184.Fi & scope.v_xn_27661) === scope.v_zn_27686 && v_i_32184.dw === scope.v_An_27660 && scope.v_De_28096(v_u_32116.$w.fp, function (v_t_32185) {
          return !(v_i_32184.Xg !== v_t_32185.Xg || v_i_32184.ou !== v_t_32185.ou || v_i_32184.Le !== v_t_32185.Le || (v_t_32185.Fi & scope.v_xn_27661) !== scope.v_Cn_27662 && v_t_32185.Fi !== scope.v_Jn_27679 && v_t_32185.Fi !== scope.v_Un_27676 || v_t_32185.Vg) && (v_t_32185.Vg = !0, v_i_32184.dw = v_t_32185.Fi, v_i_32184.Lw = v_t_32185.Lw, 1);
        });
      }), scope.v_De_28096(v_u_32116.$w.fp, function (v_i_32186) {
        (v_i_32186.Fi & scope.v_xn_27661) !== scope.v_zn_27686 || v_i_32186.gw || scope.v_De_28096(v_u_32116.$w.fp, function (v_t_32187) {
          return v_i_32186.Xg === v_t_32187.Xg && v_i_32186.ou === v_t_32187.ou && v_i_32186.Le === v_t_32187.Le && v_t_32187.Fi === scope.v_ue_27682 && !v_t_32187.Vg && (v_t_32187.Vg = !0, v_i_32186.gw = !0, v_i_32186.Fi = scope.v_Kn_27687, v_t_32187.Lw = v_i_32186.Lw, 1);
        });
      });
      let v_e_32181 = [1, 2, 3, 4, 6, 8, 16],
        v_t_32182,
        v_n_32183;
      scope.v_De_28096(v_u_32116.$w.fp, function (v_i_32188) {
        if (((v_t_32182 = v_i_32188.Fi & scope.v_xn_27661) === scope.v_zn_27686 || v_t_32182 === scope.v_ue_27682 || v_i_32188.Fi === scope.v_Pn_27665 || v_i_32188.Vg || v_i_32188.gw) && -1 === v_e_32181.indexOf(v_i_32188.Le)) {
          v_n_32183 = v_i_32188.Le;
          for (let v_t_32189 = 0; v_t_32189 < v_e_32181.length; ++v_t_32189) if (v_e_32181[v_t_32189] > v_n_32183) {
            v_i_32188.Le = v_e_32181[scope.mathMax(v_t_32189 - 1, 0)];
            break;
          }
        }
      }), scope.v_De_28096(v_u_32116.$w.fp, function (v_i_32190) {
        if (v_i_32190.Fi !== scope.v_ue_27682 && v_i_32190.Fi !== scope.v_t0_27693 || v_i_32190.Vg || (v_i_32190.Fi = scope.v_An_27660), 16 < v_i_32190.ou + v_i_32190.Le) v_u_32116.$w.kP = !1;else for (let v_t_32191 = 0; v_t_32191 < v_i_32190.We.length; ++v_t_32191) if (16 < v_i_32190.We[v_t_32191].ou + v_i_32190.We[v_t_32191].Le) return void (v_u_32116.$w.kP = !1);
      }), scope.v_De_28096(v_u_32116.$w.fp, function (v_e_32192) {
        if (scope.v__0_27710(v_e_32192.Fi)) {
          let v_i_32193 = scope.v_cc_28210(v_e_32192.ou, v_e_32192.Le);
          scope.v_De_28096(v_u_32116.$w.fp, function (v_t_32194) {
            v_e_32192.Xg !== v_t_32194.Xg || v_t_32194.Fi !== scope.v_le_27675 && v_t_32194.Fi !== scope.v_ce_27678 || 1 === v_t_32194.Jg || (v_t_32194.xk |= v_i_32193);
          });
        }
      }), scope.v_De_28096(v_u_32116.$w.fp, function (v_e_32195) {
        scope.v__0_27710(v_e_32195.Fi) && scope.v_De_28096(v_u_32116.$w.fp, function (v_t_32196) {
          var v_i_32197 = scope.v_cc_28210(v_t_32196.ou, v_t_32196.Le);
          v_t_32196.Fi !== scope.v_le_27675 && v_t_32196.Fi !== scope.v_ce_27678 || 1 === v_t_32196.Jg || v_t_32196.Xg !== v_e_32195.Xg || (v_t_32196.xk & v_i_32197) !== v_i_32197 || (v_t_32196.Jg = 1, v_t_32196.Yg = v_e_32195.Fi);
        });
      });
    }
    v_a_32109.$w.kP || (v_a_32109.$w.fp = []);
    {
      var v_w_32117 = v_a_32109;
      let v_v_32198;
      if (scope.v_De_28096(v_w_32117.$w.fp, function (v_t_32205) {
        1 === v_t_32205.Fi && void 0 !== v_w_32117.$w.lp[v_t_32205.Jg] && v_w_32117.yc.qw.push({
          Xg: v_t_32205.Xg,
          ip: v_w_32117.$w.lp[v_t_32205.Jg]
        });
      }), v_w_32117.Zu.zw) {
        var v_f_32118 = scope.v_mr_27940(v_w_32117, 0);
        for (let v_t_32206 = 0; v_t_32206 < 4 * scope.v_mr_27940(v_w_32117, 0); ++v_t_32206) {
          var v___32119 = new scope.v_wr_27938();
          v___32119.Fi = 161, v___32119.Xg = scope.v_gr_27939(v_w_32117, v_w_32117.Zu.Xw ? 0 : -1, scope.mathFloor(scope.v_de_27728 * v_f_32118 * v_t_32206 / (4 * v_f_32118))), v_w_32117.$w.fp.push(v___32119);
        }
        v_w_32117.Zu.fw = v_w_32117.ep(scope.v_gr_27939(v_w_32117, v_w_32117.Zu.Xw ? 0 : -1, 0), 0);
      }
      scope.v_ao_28097(v_w_32117.$w._p, function (v_t_32207) {
        var v_i_32208 = new scope.v_wr_27938();
        v_i_32208.Fi = 3, v_i_32208.Xg = scope.v_gr_27939(v_w_32117, v_t_32207.meas, v_t_32207.stick * scope.v_de_27728 / v_w_32117.Zu.Kw), v_i_32208.Jg = v_t_32207.flag, v_w_32117.$w.fp.push(v_i_32208);
      }), scope.v_ao_28097(v_w_32117.yc.Zw, function (v_t_32209) {
        scope.v_De_28096(v_t_32209, function (v_t_32210) {
          v_t_32210.od = v_w_32117.ep(v_t_32210.Xg);
        });
      }), v_w_32117.Fw && scope.v_De_28096(v_w_32117.Fw, function (v_t_32211) {
        v_t_32211.od = v_w_32117.ep(v_t_32211.Xg);
      }), v_w_32117.$w.ap && scope.v_De_28096(v_w_32117.$w.fp, function (v_i_32212) {
        113 !== v_i_32212.Fi && 114 !== v_i_32212.Fi || scope.v_De_28096(v_w_32117.$w.fp, function (v_t_32213) {
          return v_i_32212.Xg === v_t_32213.Xg && v_i_32212.ou === v_t_32213.ou && v_i_32212.Le === v_t_32213.Le && v_t_32213.Fi === scope.v_Pn_27665 && 0 === v_t_32213.Jg && (v_t_32213.Jg = 113 === v_i_32212.Fi ? 1 : 2, 1);
        });
      });
      let v_e_32199,
        v_i_32200 = (scope.v_De_28096(v_w_32117.$w.fp, function (v_i_32214) {
          if (((v_e_32199 = v_i_32214.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_e_32199 === scope.v_zn_27686 || v_i_32214.Fi === scope.v_ce_27678 || v_i_32214.Fi === scope.v_le_27675 || v_i_32214.Fi === scope.v_ue_27682 || 161 === v_i_32214.Fi || 3 === v_i_32214.Fi || v_i_32214.Fi === scope.v_u0_27704) && (v_i_32214.Fi !== scope.v_ce_27678 && v_i_32214.Fi !== scope.v_le_27675 && v_i_32214.Fi !== scope.v_ue_27682 || 0 !== v_i_32214.We.length)) {
            if ((v_v_32198 = new scope.v_fr_27933()).Vw(v_i_32214), v_v_32198.od = v_w_32117.ep(v_i_32214.Xg), v_v_32198.Kg = v_w_32117.Tw(v_v_32198.od, v_w_32117.Zu.Wg, 1), scope.v_De_28096(v_v_32198.We, function (v_t_32215) {
              v_t_32215.od = v_w_32117.ep(v_t_32215.Xg), v_t_32215.Kg = v_w_32117.Tw(v_t_32215.od, v_w_32117.Zu.Wg, 1);
            }), v_w_32117.yc.$g.push(v_v_32198), v_i_32214.Fi === scope.v_ce_27678) {
              let v_h_32216 = v_v_32198,
                v_d_32217 = [v_v_32198];
              scope.v_De_28096(v_v_32198.We, function (v_t_32218) {
                if (52 !== v_t_32218.Fi) {
                  if (2 <= v_d_32217.length) {
                    let v_i_32224 = [],
                      v_e_32225 = [],
                      v_n_32226 = v_d_32217[0].Xg,
                      v_r_32227 = v_d_32217[0].Le,
                      v_s_32228 = v_t_32218.Le,
                      v_a_32229 = v_t_32218.Xg - v_n_32226,
                      v_o_32230;
                    scope.v_De_28096(v_d_32217, function (v_t_32231) {
                      v_o_32230 = (v_t_32231.Xg - v_n_32226) / v_a_32229, v_i_32224.push([v_t_32231.ou + v_t_32231.Le / 2 - scope.v_Ee_28084(v_r_32227, v_s_32228, v_o_32230) / 2, v_o_32230]), v_e_32225.push([v_t_32231.ou + v_t_32231.Le / 2 + scope.v_Ee_28084(v_r_32227, v_s_32228, v_o_32230) / 2, v_o_32230]);
                    }), v_i_32224.push([v_t_32218.ou, 1]), v_e_32225.push([v_t_32218.ou + v_t_32218.Le, 1]);
                    var v_l_32219,
                      v_c_32220,
                      v_u_32221,
                      v_f_32222 = scope.v_Ja_28074(v_i_32224),
                      v___32223 = scope.v_Ja_28074(v_e_32225);
                    for (let v_t_32232 = 30; v_t_32232 < v_a_32229; v_t_32232 += 30) v_l_32219 = v_f_32222.at(v_t_32232 / v_a_32229), v_c_32220 = v___32223.at(v_t_32232 / v_a_32229), (v_u_32221 = new scope.v_fr_27933()).Fi = scope.v_On_27681, v_u_32221.ou = scope.mathMin(scope.mathMax(v_l_32219[0], 0), 16), v_u_32221.Le = scope.mathMin(scope.mathMax(v_c_32220[0] - v_u_32221.ou, 1), 16 - v_u_32221.ou), v_u_32221.Lw = v_h_32216.Lw, v_u_32221.Xg = scope.mathFloor(v_n_32226 + v_a_32229 * v_l_32219[1]), v_u_32221.od = v_w_32117.ep(v_u_32221.Xg), v_u_32221.Kg = v_w_32117.Tw(v_u_32221.od, v_u_32221.Lw, 1), v_v_32198.We.push(v_u_32221);
                  }
                  v_d_32217 = [];
                }
                v_d_32217.push(v_t_32218);
              }), v_v_32198.We = v_v_32198.We.filter(v_t_32233 => 52 !== v_t_32233.Fi), v_v_32198.We.sort((v_t_32234, v_i_32235) => v_t_32234.Xg - v_i_32235.Xg);
            } else v_i_32214.Fi !== scope.v_le_27675 && v_i_32214.Fi !== scope.v_ue_27682 || scope.v_De_28096(v_v_32198.We, function (v_t_32236) {
              v_t_32236.ou = v_i_32214.ou, v_t_32236.Le = v_i_32214.Le;
            });
            v_e_32199 !== scope.v_Cn_27662 && v_e_32199 !== scope.v_zn_27686 && v_i_32214.Fi !== scope.v_ce_27678 && v_i_32214.Fi !== scope.v_le_27675 || v_w_32117.Zu.kr++, v_e_32199 !== scope.v_Cn_27662 && v_i_32214.Fi !== scope.v_ce_27678 && v_i_32214.Fi !== scope.v_le_27675 || v_w_32117.Zu.nw++, v_i_32214.Fi === scope.v_Tn_27663 || scope.v__0_27710(v_i_32214.Fi) || v_i_32214.Fi === scope.v_Rn_27666 || v_i_32214.Fi === scope.v_ce_27678 || v_i_32214.Fi === scope.v_le_27675 ? v_w_32117.Zu.ew.Ra++ : (v_i_32214.Fi & scope.v_xn_27661) === scope.v_zn_27686 ? v_w_32117.Zu.ew.Ga++ : v_i_32214.Fi === scope.v_Pn_27665 && v_w_32117.Zu.ew.ja++;
          }
        }), scope.v_De_28096(v_w_32117.yc.$g, function (v_t_32237, v_i_32238) {
          v_t_32237.Ae = v_i_32238 + 1;
        }), scope.handshake.rm.u8 || v_w_32117.$w.dk ? scope.v_De_28096(v_w_32117.yc.$g, function (v_a_32239) {
          switch (v_a_32239.Fi) {
            case scope.v_ce_27678:
            case scope.v_le_27675:
              {
                if (0 === v_a_32239.We.length) break;
                let v_e_32241 = v_a_32239.Mw(),
                  v_n_32242 = v_e_32241.Xg;
                if (v_e_32241.Vg) {
                  let v_t_32246 = v_a_32239;
                  var v_o_32240 = v_a_32239.We.length - 2;
                  0 <= v_o_32240 && (v_t_32246 = v_a_32239.We[v_o_32240]), v_n_32242 = v_e_32241.Xg - scope.v_de_27728 / v_h_32204(v_w_32117.np(v_t_32246.Xg - scope.v_de_27728 / 4));
                }
                let v_r_32243 = [],
                  v_s_32244 = v_a_32239,
                  v_i_32245;
                scope.v_De_28096(v_a_32239.We, function (v_i_32247) {
                  if (v_i_32247.Fi !== scope.v_On_27681) {
                    v_e_32241.Vg && v_i_32247.Xg > v_n_32242 ? v_i_32247.pw = !0 : (v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_a_32239.Fi === scope.v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                    for (let v_t_32248 = v_s_32244.Xg; v_t_32248 < v_i_32247.Xg;) (v_t_32248 += scope.v_de_27728 / v_h_32204(v_w_32117.np(v_t_32248))) < v_i_32247.Xg && v_t_32248 <= v_n_32242 && v_r_32243.push(v_t_32248);
                    v_s_32244.Iw = v_w_32117.ep(v_s_32244.Xg + 2 * scope.v_de_27728 / v_h_32204(v_w_32117.np(v_s_32244.Xg))), v_s_32244 = v_i_32247;
                  }
                }), v_w_32117.Zu.Bw && v_e_32241.Vg || (scope.v_De_28096(v_r_32243, function (v_t_32249) {
                  v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(v_t_32249, v_a_32239.Lw) || ((v_i_32245 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_i_32245.Xg = v_t_32249, v_i_32245.od = v_w_32117.ep(v_t_32249), v_a_32239.We.push(v_i_32245), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_a_32239.Fi === scope.v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                }), v_a_32239.We.sort((v_t_32250, v_i_32251) => v_t_32250.Xg - v_i_32251.Xg)), v_r_32243 = [];
              }
              break;
            case scope.v_ue_27682:
              {
                if (0 === v_a_32239.We.length) break;
                let v_i_32252 = [],
                  v_e_32253 = v_a_32239,
                  v_n_32254,
                  v_r_32255,
                  v_s_32256;
                scope.v_De_28096(v_a_32239.We, function (v_t_32257) {
                  v_n_32254 = v_h_32204(v_w_32117.np(v_e_32253.Xg)), v_r_32255 = scope.mathMax(scope.mathCeil((v_t_32257.Xg - v_e_32253.Xg) / (scope.v_de_27728 / v_n_32254)) - 1, 0);
                  for (let v_t_32258 = 0; v_t_32258 < v_r_32255; ++v_t_32258) v_i_32252.push({
                    Xg: v_e_32253.Xg + (v_t_32258 + 1) * scope.v_de_27728 / v_n_32254,
                    Cp: 0 === v_t_32258
                  });
                  v_e_32253 = v_t_32257, v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++;
                }), scope.v_De_28096(v_i_32252, function (v_t_32259) {
                  v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(tick, v_a_32239.Lw) || ((v_s_32256 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_s_32256.Xg = v_t_32259.Xg, v_s_32256.od = v_w_32117.ep(v_t_32259.Xg), v_s_32256.Jg = v_t_32259.Cp ? 1 : 0, v_a_32239.We.push(v_s_32256), v_t_32259.Cp) || (v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++);
                }), v_a_32239.We.sort((v_t_32260, v_i_32261) => v_t_32260.Xg - v_i_32261.Xg), v_i_32252 = [];
              }
          }
        }) : scope.v_De_28096(v_w_32117.yc.$g, function (v_l_32262) {
          switch (v_l_32262.Fi) {
            case scope.v_ce_27678:
            case scope.v_le_27675:
              {
                if (0 === v_l_32262.We.length) break;
                let v_i_32264 = null,
                  v_e_32265 = v_l_32262.Mw();
                if (v_e_32265.Vg) {
                  let v_t_32271 = v_l_32262;
                  var v_c_32263 = v_l_32262.We.length - 2;
                  0 <= v_c_32263 && (v_t_32271 = v_l_32262.We[v_c_32263]), v_i_32264 = v_e_32265.Xg - scope.v_de_27728 / v_h_32204(v_w_32117.np(v_t_32271.Xg));
                }
                let v_n_32266 = [],
                  v_r_32267 = v_l_32262,
                  v_s_32268,
                  v_a_32269 = 0,
                  v_o_32270;
                scope.v_De_28096(v_l_32262.We, function (v_t_32272) {
                  if (v_t_32272.Fi !== scope.v_On_27681) {
                    v_s_32268 = v_h_32204(v_w_32117.np(v_r_32267.Xg)), v_e_32265.Vg && v_t_32272.Xg > v_i_32264 ? (v_t_32272.pw = !0, v_a_32269 = scope.mathMax(scope.mathFloor((scope.mathMax(v_t_32272.Xg, v_i_32264) - v_r_32267.Xg) / (scope.v_de_27728 / v_s_32268)) - 1, 0)) : (v_a_32269 = scope.mathMax(scope.mathCeil((v_t_32272.Xg - v_r_32267.Xg) / (scope.v_de_27728 / v_s_32268)) - 1, 0), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_l_32262.Fi === scope.v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                    for (let v_t_32273 = 0; v_t_32273 < v_a_32269; ++v_t_32273) v_n_32266.push(v_r_32267.Xg + (v_t_32273 + 1) * scope.v_de_27728 / v_s_32268);
                    v_r_32267.Iw = v_w_32117.ep(v_r_32267.Xg + 2 * scope.v_de_27728 / v_s_32268), v_r_32267 = v_t_32272;
                  }
                }), v_w_32117.Zu.Bw && v_e_32265.Vg || (scope.v_De_28096(v_n_32266, function (v_t_32274) {
                  v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(v_t_32274, v_l_32262.Lw) || ((v_o_32270 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_o_32270.Xg = v_t_32274, v_o_32270.od = v_w_32117.ep(v_t_32274), v_l_32262.We.push(v_o_32270), v_w_32117.Zu.kr++, v_w_32117.Zu.nw++, v_l_32262.Fi === scope.v_ce_27678 ? v_w_32117.Zu.ew.Da++ : v_w_32117.Zu.ew.iw++);
                }), v_l_32262.We.sort((v_t_32275, v_i_32276) => v_t_32275.Xg - v_i_32276.Xg)), v_n_32266 = [];
              }
              break;
            case scope.v_ue_27682:
              {
                if (0 === v_l_32262.We.length) break;
                let v_i_32277 = [],
                  v_e_32278 = v_l_32262,
                  v_n_32279,
                  v_r_32280,
                  v_s_32281;
                scope.v_De_28096(v_l_32262.We, function (v_t_32282) {
                  v_n_32279 = v_h_32204(v_w_32117.np(v_e_32278.Xg)), v_r_32280 = scope.mathMax(scope.mathCeil((v_t_32282.Xg - v_e_32278.Xg) / (scope.v_de_27728 / v_n_32279)) - 1, 0);
                  for (let v_t_32283 = 0; v_t_32283 < v_r_32280; ++v_t_32283) v_i_32277.push({
                    Xg: v_e_32278.Xg + (v_t_32283 + 1) * scope.v_de_27728 / v_n_32279,
                    Cp: 0 === v_t_32283
                  });
                  v_e_32278 = v_t_32282, v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++;
                }), scope.v_De_28096(v_i_32277, function (v_t_32284) {
                  v_w_32117.Zu.Bw && 0 == v_w_32117.Ew(tick, v_l_32262.Lw) || ((v_s_32281 = new scope.v_fr_27933()).Fi = scope.v_c0_27703, v_s_32281.Xg = v_t_32284.Xg, v_s_32281.od = v_w_32117.ep(v_t_32284.Xg), v_s_32281.Jg = v_t_32284.Cp ? 1 : 0, v_l_32262.We.push(v_s_32281), v_t_32284.Cp) || (v_w_32117.Zu.kr++, v_w_32117.Zu.ew.Ga++);
                }), v_l_32262.We.sort((v_t_32285, v_i_32286) => v_t_32285.Xg - v_i_32286.Xg), v_i_32277 = [];
              }
          }
        }), scope.v_De_28096(v_w_32117.yc.$g, function (v_i_32287) {
          if (v_i_32287.Fi === scope.v_ce_27678) {
            let v_e_32288 = v_i_32287.Xg,
              v_n_32289 = v_i_32287.zg = 0,
              v_t_32290 = [];
            scope.v_De_28096(v_i_32287.We, function (v_i_32291) {
              v_i_32291.Fi !== scope.v_c0_27703 && (v_i_32291.Fi === scope.v_jn_27680 || v_i_32291.Fi === scope.v_Jn_27679 ? (v_i_32291.Xg > v_e_32288 && scope.v_De_28096(v_t_32290, function (v_t_32292) {
                v_t_32292.zg = (v_t_32292.Xg - v_e_32288) / (v_i_32291.Xg - v_e_32288) + v_n_32289;
              }), v_t_32290 = [], v_n_32289 += 1, v_i_32291.zg = v_n_32289, v_e_32288 = v_i_32291.Xg) : v_t_32290.push(v_i_32291));
            });
          } else v_i_32287.Fi === scope.v_le_27675 && (v_i_32287.zg = 0, v_i_32287.Mw().zg = 1);
        }), null),
        v_n_32201 = 0,
        v_r_32202 = (scope.v_De_28096(v_w_32117.yc.$g, function (v_t_32293) {
          (v_e_32199 = v_t_32293.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_e_32199 === scope.v_zn_27686 ? (v_i_32200 = null === v_i_32200 ? v_t_32293.od : scope.mathMin(v_i_32200, v_t_32293.od), v_n_32201 = scope.mathMax(v_n_32201, v_t_32293.od)) : v_e_32199 !== scope.v_Hn_27677 && v_e_32199 !== scope.v_Gn_27674 && 64 !== v_e_32199 || (v_i_32200 = null === v_i_32200 ? v_t_32293.od : scope.mathMin(v_i_32200, v_t_32293.od), v_n_32201 = scope.mathMax(v_n_32201, v_t_32293.od), 0 < v_t_32293.We.length && (v_n_32201 = scope.mathMax(v_n_32201, v_t_32293.We[v_t_32293.We.length - 1].od)));
        }), v_w_32117.Zu.ow = v_i_32200, (v_w_32117.Zu.yi = v_n_32201) - v_i_32200),
        v_s_32203 = 0;
      function v_h_32204(v_t_32294) {
        return v_t_32294 < 60 ? 32 : v_t_32294 < 120 ? 16 : v_t_32294 < 240 ? 8 : v_t_32294 < 480 ? 4 : v_t_32294 < 960 ? 2 : 1;
      }
      scope.v_De_28096(v_w_32117.yc.$g, function (v_t_32295) {
        (v_e_32199 = v_t_32295.Fi & scope.v_xn_27661) === scope.v_Cn_27662 || v_e_32199 === scope.v_zn_27686 ? (v_s_32203 = scope.mathMin(scope.mathFloor((v_t_32295.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++) : v_e_32199 !== scope.v_Hn_27677 && v_e_32199 !== scope.v_Gn_27674 && 64 !== v_e_32199 || (v_t_32295.Fi !== scope.v_ue_27682 && (v_s_32203 = scope.mathMin(scope.mathFloor((v_t_32295.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++), scope.v_De_28096(v_t_32295.We, function (v_t_32296) {
          v_t_32296.Fi !== scope.v_jn_27680 && (v_t_32296.Fi !== scope.v_c0_27703 || 1 === v_t_32296.Jg) && v_t_32296.Fi !== scope.v_Jn_27679 && v_t_32296.Fi !== scope.v_Un_27676 && v_t_32296.Fi !== scope.v_Wn_27684 && v_t_32296.Fi !== scope.v_Vn_27683 || v_t_32296.pw || (v_s_32203 = scope.mathMin(scope.mathFloor((v_t_32296.od - v_i_32200) / v_r_32202 * 120), 119), v_w_32117.Zu.sw[v_s_32203]++);
        }));
      });
    }
    if (null === v_a_32109.Zu.A5 && (v_a_32109.Zu.A5 = v_a_32109.np(0)), v_e_32108) {
      v_a_32109.lb = [];
      for (const v_d_32297 of v_a_32109.$w.up) v_a_32109.lb.push({
        mp: v_d_32297.mp,
        Jg: v_d_32297.Jg,
        cb: scope.v_pr_27941(v_d_32297.Jg)[0]
      });
    }
    return v_a_32109.$w = void 0, v_a_32109.yc.$g.sort((v_t_32298, v_i_32299) => v_t_32298.od - v_i_32299.od), v_a_32109;
  }
};
scope.chartParser = createChartParser(scope);
scope.v_br_27943 = {
  ue: function () {},
  Wu: function () {},
  Ku: function (v_i_32551, v___32552) {
    let v_n_32553 = "/music/",
      v_e_32554 = [],
      v_r_32555 = [],
      v_h_32556 = {},
      v_l_32557 = [],
      v_c_32558 = {
        noFlip: !0,
        wrapS: scope.glContext.CLAMP_TO_EDGE,
        wrapT: scope.glContext.CLAMP_TO_EDGE,
        format: scope.glContext.RGB
      },
      v_s_32559 = [],
      v_a_32560 = new Map(),
      v_o_32561 = !1;
    function v_u_32562() {
      if (v_o_32561) {
        let v_n_32563 = v_l_32557.length,
          v_r_32564 = 0;
        scope.v_Le_28076([function (v_n_32565) {
          scope.v_$r_27975.Ic(scope.v_J_27658 + "/default_order_music.txt", function (v_t_32566) {
            if (null !== v_t_32566) {
              var v_i_32567,
                v_e_32568 = v_t_32566.replace(/\r\n/g, "\n").split("\n");
              for (let v_t_32569 = 0; v_t_32569 < v_e_32568.length; ++v_t_32569) "" !== (v_i_32567 = v_e_32568[v_t_32569].trim()) && v_s_32559.push(v_i_32567);
            }
            scope.v_Me_28078(v_n_32565);
          });
        }, function (v_n_32570) {
          scope.v_$r_27975.Ic(scope.v_J_27658 + "/default_order_music_item.txt", function (v_t_32571) {
            if (null !== v_t_32571) {
              var v_i_32572,
                v_e_32573 = v_t_32571.replace(/\r\n/g, "\n").split("\n");
              for (let v_t_32574 = 0; v_t_32574 < v_e_32573.length; ++v_t_32574) "" !== (v_i_32572 = v_e_32573[v_t_32574].trim()) && v_a_32560.set(v_i_32572, v_t_32574);
            }
            scope.v_Me_28078(v_n_32570);
          });
        }, function (v_t_32575) {
          scope.v_lo_28099(v_l_32557, function (v_i_32576, v_t_32577, v_e_32578) {
            v___32552 && v___32552(v_r_32564, v_n_32563, 1), ++v_r_32564, void 0 !== v_e_32578.res_info.jacket && void 0 === scope.renderer.Yt.Zt["jkt:" + v_e_32578.w0] ? scope.v_Da_28067(v_e_32578.res_info.jacket, ".dds") ? scope.v_$r_27975.it("/music/" + v_e_32578.dir + "/" + v_e_32578.res_info.jacket, v_t_32579 => {
              if (null !== v_t_32579) {
                let v_n_32580 = null;
                scope.v_Io_28120(v_t_32579, !1, (v_t_32581, v_i_32582, v_e_32583) => {
                  v_t_32581 === scope.v_xo_28116 ? (v_n_32580 = new glRuntime.Texture(v_i_32582, v_e_32583, {
                    wrapS: scope.glContext.CLAMP_TO_EDGE,
                    wrapT: scope.glContext.CLAMP_TO_EDGE,
                    format: scope.glContext.RGB
                  }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32581 === scope.v_Ao_28115 && (v_n_32580 = null);
                }), v_n_32580 && (scope.renderer.Yt.Zt["jkt:" + v_e_32578.w0] = v_n_32580);
              }
              v_i_32576();
            }) : scope.v__o_28104("/music/" + v_e_32578.dir + "/" + v_e_32578.res_info.jacket, function (v_t_32584) {
              v_t_32584 && (scope.renderer.Yt.Zt["jkt:" + v_e_32578.w0] = glRuntime.Texture.fromImage(v_t_32584, v_c_32558)), v_i_32576();
            }) : v_i_32576();
          }, function () {
            scope.v_Me_28078(v_t_32575);
          });
        }, function (v_t_32585) {
          scope.v_Fe_28101(() => v_i_32551(v_l_32557, v_s_32559, v_a_32560));
          console.log("[DIAG] [umg][jkt] 列表就绪 n=" + v_l_32557.length + " " + (v_o_32561 ? "缓存" : "扫描"));
        }]);
      } else {
        let v_u_32586 = 0,
          v_f_32587 = 0;
        scope.v_Le_28076([function (v_n_32588) {
          scope.v_$r_27975.Ic(scope.v_J_27658 + "/default_order_music.txt", function (v_t_32589) {
            if (null !== v_t_32589) {
              var v_i_32590,
                v_e_32591 = v_t_32589.replace(/\r\n/g, "\n").split("\n");
              for (let v_t_32592 = 0; v_t_32592 < v_e_32591.length; ++v_t_32592) "" !== (v_i_32590 = v_e_32591[v_t_32592].trim()) && v_s_32559.push(v_i_32590);
            }
            scope.v_Me_28078(v_n_32588);
          });
        }, function (v_n_32593) {
          scope.v_$r_27975.Ic(scope.v_J_27658 + "/default_order_music_item.txt", function (v_t_32594) {
            if (null !== v_t_32594) {
              var v_i_32595,
                v_e_32596 = v_t_32594.replace(/\r\n/g, "\n").split("\n");
              for (let v_t_32597 = 0; v_t_32597 < v_e_32596.length; ++v_t_32597) "" !== (v_i_32595 = v_e_32596[v_t_32597].trim()) && v_a_32560.set(v_i_32595, v_t_32597);
            }
            scope.v_Me_28078(v_n_32593);
          });
        }, function (v_i_32598) {
          scope.hostBridge.zu(v_n_32553, function (v_t_32599) {
            scope.v_De_28096(v_t_32599, function (v_t_32600) {
              v_t_32600.isDirectory && v_e_32554.push([v_t_32600.name]);
            }), scope.v_Me_28078(v_i_32598);
          }, function () {
            scope.v_Me_28078(v_i_32598);
          });
        }, function (v_t_32601) {
          scope.v_oo_28098(v_e_32554, function (v_i_32602, v_t_32603, v_e_32604) {
            scope.hostBridge.zu(v_n_32553 + v_e_32604.join("/") + "/", function (v_t_32605) {
              -1 !== v_t_32605.findIndex(v_t_32606 => ".umgrignore" === v_t_32606.name && !v_t_32606.isDirectory) || scope.v_De_28096(v_t_32605, function (v_t_32607) {
                v_t_32607.isDirectory && (v_r_32555.push([v_e_32604.join("/"), v_t_32607.name]), ++v_u_32586);
              }), v_i_32602();
            }, v_i_32602);
          }, function () {
            scope.v_Me_28078(v_t_32601);
          });
        }, function (v_t_32608) {
          scope.v_oo_28098(v_r_32555, function (v_i_32609, v_t_32610, v_l_32611) {
            v___32552 && v___32552(v_f_32587, v_u_32586, 0), ++v_f_32587;
            let v_c_32612 = v_l_32611.join("/");
            scope.hostBridge.zu(v_n_32553 + v_c_32612 + "/", function (v_t_32613) {
              scope.v_oo_28098(v_t_32613, function (v_s_32614, v_t_32615, v_a_32616) {
                if (v_a_32616.isDirectory) return v_s_32614();
                var v_i_32617 = scope.v_Da_28067(v_a_32616.name, ".sus");
                let v_o_32618 = scope.v_Da_28067(v_a_32616.name, ".ugc");
                if (!v_i_32617 && !v_o_32618) return v_s_32614();
                scope.v_$r_27975.Ic(v_n_32553 + v_c_32612 + "/" + v_a_32616.name, function (v_t_32619) {
                  var v_i_32620, v_e_32621, v_n_32622, v_r_32623;
                  null !== v_t_32619 && (v_i_32620 = v_o_32618 ? scope.chartParser : scope.v_vr_27937, v_i_32620 = v_i_32620.rt(v_t_32619, !0), v_t_32619 = v_l_32611[0], v_e_32621 = v_c_32612, v_n_32622 = v_a_32616.name, v_r_32623 = v_i_32620.Zu.ee, void 0 === v_h_32556[v_r_32623] && (v_h_32556[v_r_32623] = {
                    charts: {},
                    fnames: {},
                    dir: "",
                    genre: ""
                  }), "" !== v_h_32556[v_r_32623].dir && v_h_32556[v_r_32623].dir !== v_e_32621 || (v_h_32556[v_r_32623].charts[v_i_32620.Zu.te] = v_i_32620, v_h_32556[v_r_32623].fnames[v_i_32620.Zu.te] = v_n_32622, v_h_32556[v_r_32623].dir = v_e_32621, v_h_32556[v_r_32623].genre = v_t_32619)), v_s_32614();
                });
              }, v_i_32609);
            }, v_i_32609);
          }, function () {
            scope.v_Me_28078(v_t_32608);
          });
        }, function (v_t_32624) {
          var v_i_32625 = Object.keys(v_h_32556);
          v_u_32586 = v_i_32625.length, v_f_32587 = 0, scope.v_oo_28098(v_i_32625, function (v_i_32626, v_t_32627, v_e_32628) {
            v___32552 && v___32552(v_f_32587, v_u_32586, 1), ++v_f_32587;
            var v_n_32629,
              v_r_32630,
              v_s_32631,
              v_a_32632 = v_h_32556[v_e_32628],
              v_o_32633 = {
                w0: v_e_32628,
                y5: v_a_32632.genre,
                lf: "",
                x5: "",
                I5: "",
                C5: "",
                A5: 0,
                dir: v_a_32632.dir,
                L5: v_a_32632.fnames,
                meta: [null, null, null, null, null, null],
                res_info: {},
                m5: 0,
                S5: 0
              };
            for (let v_t_32634 = 0; v_t_32634 < 6; ++v_t_32634) void 0 !== v_a_32632.charts[v_t_32634] && (v_n_32629 = v_a_32632.charts[v_t_32634], (v_r_32630 = new scope.v_hr_27935()).k5 = v_n_32629.Zu.k5, v_r_32630.b5 = v_n_32629.Zu.b5, v_r_32630.T5 = v_n_32629.Zu.T5, v_o_32633.meta[v_t_32634] = v_r_32630, "" !== v_n_32629.Zu.lf && (v_o_32633.lf = v_n_32629.Zu.lf), "" !== v_n_32629.Zu.x5 && (v_o_32633.x5 = v_n_32629.Zu.x5), 0 !== v_n_32629.Zu.I5 && (v_o_32633.I5 = v_n_32629.Zu.I5), "" !== v_n_32629.Zu.C5 && (v_o_32633.C5 = v_n_32629.Zu.C5), 0 !== v_n_32629.Zu.A5 && (v_o_32633.A5 = v_n_32629.Zu.A5), "" !== v_n_32629.Zu.Ow && (v_o_32633.res_info.jacket = v_n_32629.Zu.Ow), "" !== v_n_32629.Zu.jw && (v_o_32633.res_info.bg = v_n_32629.Zu.jw), "" !== v_n_32629.Zu.Ww && (v_o_32633.res_info.field_bg = v_n_32629.Zu.Ww), "" !== v_n_32629.Zu.Gw && (v_o_32633.res_info.wave = v_n_32629.Zu.Gw), 0 < v_n_32629.Zu.Yw[1] - v_n_32629.Zu.Yw[0] && (v_o_32633.m5 = v_n_32629.Zu.Yw[0], v_o_32633.S5 = v_n_32629.Zu.Yw[1]), "" !== v_n_32629.Zu.y5) && (v_o_32633.y5 = v_n_32629.Zu.y5.trim());
            v_s_32631 = v_o_32633, v_l_32557.push(v_s_32631), void 0 !== v_o_32633.res_info.jacket && void 0 === scope.renderer.Yt.Zt["jkt:" + v_e_32628] ? scope.v_Da_28067(v_o_32633.res_info.jacket, ".dds") ? scope.v_$r_27975.it("/music/" + v_a_32632.dir + "/" + v_o_32633.res_info.jacket, v_t_32635 => {
              if (null !== v_t_32635) {
                let v_n_32636 = null;
                scope.v_Io_28120(v_t_32635, !1, (v_t_32637, v_i_32638, v_e_32639) => {
                  v_t_32637 === scope.v_xo_28116 ? (v_n_32636 = new glRuntime.Texture(v_i_32638, v_e_32639, {
                    wrapS: scope.glContext.CLAMP_TO_EDGE,
                    wrapT: scope.glContext.CLAMP_TO_EDGE,
                    format: scope.glContext.RGB
                  }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_32637 === scope.v_Ao_28115 && (v_n_32636 = null);
                }), v_n_32636 && (scope.renderer.Yt.Zt["jkt:" + v_e_32628] = v_n_32636);
              }
              v_i_32626();
            }) : scope.v__o_28104("/music/" + v_a_32632.dir + "/" + v_o_32633.res_info.jacket, function (v_t_32640) {
              v_t_32640 && (scope.renderer.Yt.Zt["jkt:" + v_e_32628] = glRuntime.Texture.fromImage(v_t_32640, v_c_32558)), v_i_32626();
            }) : v_i_32626();
          }, function () {
            scope.v_Me_28078(v_t_32624);
          });
        }, function (v_t_32641) {
          v_l_32557.sort((v_t_32642, v_i_32643) => v_t_32642.w0 < v_i_32643.w0 ? -1 : v_t_32642.w0 > v_i_32643.w0 ? 1 : 0), scope.handshake.rm.Im && scope.hostBridge.Xu("/caches/music.json", JSON.stringify(v_l_32557), "application/json", () => {}, () => {}), scope.v_Fe_28101(() => v_i_32551(v_l_32557, v_s_32559, v_a_32560));
          console.log("[DIAG] [umg][jkt] 列表就绪 n=" + v_l_32557.length + " " + (v_o_32561 ? "缓存" : "扫描"));
        }]);
      }
    }
    scope.handshake.rm.Im ? scope.v_$r_27975.Ic("/caches/music.json", function (v_t_32644) {
      if (null !== v_t_32644) try {
        v_l_32557 = JSON.parse(v_t_32644), v_o_32561 = !0;
      } catch (v_t_32645) {}
      let __umgJktN = 0;
      if (v_o_32561) for (const __umgJkt of v_l_32557) {
        if (!__umgJkt || !__umgJkt.res_info || void 0 === __umgJkt.res_info.jacket) continue;
        ++__umgJktN;
        if (void 0 !== scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0]) continue;
        const __umgJktPath = "/music/" + __umgJkt.dir + "/" + __umgJkt.res_info.jacket;
        if (scope.v_Da_28067(__umgJkt.res_info.jacket, ".dds")) {
          scope.v_$r_27975.it(__umgJktPath, function (__umgJktBuf) {
            if (null === __umgJktBuf) return;
            let __umgJktTex = null;
            scope.v_Io_28120(__umgJktBuf, !1, function (__umgJktStatus, __umgJktW, __umgJktH) {
              if (__umgJktStatus === scope.v_xo_28116) {
                __umgJktTex = new glRuntime.Texture(__umgJktW, __umgJktH, {
                  wrapS: scope.glContext.CLAMP_TO_EDGE,
                  wrapT: scope.glContext.CLAMP_TO_EDGE,
                  format: scope.glContext.RGB
                });
                scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1);
              } else if (__umgJktStatus === scope.v_Ao_28115) {
                __umgJktTex = null;
              }
            });
            if (__umgJktTex) scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0] = __umgJktTex;
          });
        } else {
          scope.v__o_28104(__umgJktPath, function (__umgJktImg) {
            if (__umgJktImg) scope.renderer.Yt.Zt["jkt:" + __umgJkt.w0] = glRuntime.Texture.fromImage(__umgJktImg, v_c_32558);
          });
        }
      }
      console.log("[DIAG] [umg][jkt] 列表缓存命中, 补载封面 " + __umgJktN);
      v_u_32562();
    }) : v_u_32562();
  },
  Wc: function (v_r_32646, v_s_32647, v_t_32648, v_a_32649, v_o_32650) {
    let v_l_32651 = {
        q1: null,
        Zu: null,
        Yu: {
          $u: null,
          Ho: null
        },
        qc: null
      },
      v_c_32652 = "/music/" + v_r_32646.dir + "/",
      v_u_32653 = scope.v_Ga_28071(v_r_32646.res_info);
    scope.v_Le_28076([v_i_32654 => {
      if (void 0 === v_r_32646.L5[v_s_32647]) return v_o_32650(null);
      v_l_32651.Zu = v_r_32646.meta[v_s_32647];
      var v_t_32655 = v_r_32646.L5[v_s_32647],
        v_e_32656 = scope.v_Da_28067(v_t_32655, ".sus");
      let v_n_32657 = scope.v_Da_28067(v_t_32655, ".ugc");
      if (!v_e_32656 && !v_n_32657) return v_o_32650(null);
      scope.v_$r_27975.Ic(v_c_32652 + v_t_32655, function (v_t_32658) {
        null === v_t_32658 ? v_o_32650(null) : (v_t_32658 = (v_n_32657 ? scope.chartParser : scope.v_vr_27937).rt(v_t_32658, !1, v_a_32649), (v_l_32651.q1 = v_t_32658).Zu.jw && (v_u_32653.bg = v_t_32658.Zu.jw), v_t_32658.Zu.Ww && (v_u_32653.field_bg = v_t_32658.Zu.Ww), v_t_32658.Zu.Gw && (v_u_32653.wave = v_t_32658.Zu.Gw), scope.v_Me_28078(v_i_32654));
      });
    }, v_i_32659 => {
      if (void 0 === v_u_32653.bg || "" === v_u_32653.bg || v_t_32648) return scope.v_Me_28078(v_i_32659);
      scope.hostBridge.qu(v_c_32652 + v_u_32653.bg, function (v_t_32660) {
        v_l_32651.Yu.bg = v_t_32660, scope.v_Me_28078(v_i_32659);
      }, () => scope.v_Me_28078(v_i_32659));
    }, v_i_32661 => {
      if (void 0 === v_u_32653.field_bg || "" === v_u_32653.field_bg || v_t_32648) return scope.v_Me_28078(v_i_32661);
      scope.hostBridge.qu(v_c_32652 + v_u_32653.field_bg, function (v_t_32662) {
        v_l_32651.Yu.field_bg = v_t_32662, scope.v_Me_28078(v_i_32661);
      }, () => scope.v_Me_28078(v_i_32661));
    }, v_t_32663 => {
      v_l_32651.qc = v_u_32653, scope.v_Fe_28101(() => v_o_32650(v_l_32651));
    }]);
  },
  b0: function (v_t_32664, v_i_32665, v_e_32666) {
    "" === v_i_32665 ? v_e_32666(null) : scope.hostBridge.qu("/music/" + v_t_32664 + "/" + v_i_32665, function (v_t_32667) {
      v_e_32666(v_t_32667);
    }, function () {
      v_e_32666(null);
    });
  }
};
scope.v_yr_27944.prototype = {
  yI: function (v_t_32671) {
    var v_i_32672 = scope.v_be_27857.Pp.find(v_t_32673 => v_t_32673.w0 === this.ee);
    return !!v_i_32672 && null !== v_i_32672.meta[this.te] && (v_t_32671.yP.push({
      Pp: v_i_32672,
      p0: this.te
    }), !0);
  }
}, scope.v_Sr_27945.prototype = {
  yI: function (v_e_32674) {
    let v_n_32675 = 0;
    for (const v_s_32677 of scope.v_be_27857.Pp) if (null === v_s_32677.meta[4]) for (let v_i_32678 = 0; v_i_32678 < 5; ++v_i_32678) v_e_32674.kI && -1 !== v_e_32674.yP.findIndex(v_t_32679 => v_t_32679.Pp.w0 === v_s_32677.w0 && v_t_32679.p0 === v_i_32678) || null !== v_s_32677.meta[v_i_32678] && v_s_32677.meta[v_i_32678].k5 === this.p9 && ++v_n_32675;
    if (v_n_32675) {
      var v_r_32676 = scope.mathFloor(scope.mathRandom() * v_n_32675);
      let v_t_32680 = 0;
      for (const v_a_32681 of scope.v_be_27857.Pp) if (null === v_a_32681.meta[4]) for (let v_i_32682 = 0; v_i_32682 < 5; ++v_i_32682) if ((!v_e_32674.kI || -1 === v_e_32674.yP.findIndex(v_t_32683 => v_t_32683.Pp.w0 === v_a_32681.w0 && v_t_32683.p0 === v_i_32682)) && null !== v_a_32681.meta[v_i_32682] && v_a_32681.meta[v_i_32682].k5 === this.p9) {
        if (v_r_32676 === v_t_32680) return v_e_32674.yP.push({
          Pp: v_a_32681,
          p0: v_i_32682
        }), !0;
        ++v_t_32680;
      }
    }
    return !1;
  }
}, scope.v_Ar_27946.prototype = {
  yI: function (v_i_32684) {
    let v_e_32685 = 0;
    for (const v_r_32687 of this.V2) v_i_32684.kI && -1 !== v_i_32684.yP.findIndex(v_t_32688 => v_t_32688.Pp.w0 === v_r_32687.ee && v_t_32688.p0 === v_r_32687.te) || ++v_e_32685;
    if (v_e_32685) {
      var v_n_32686 = scope.mathFloor(scope.mathRandom() * v_e_32685);
      let v_t_32689 = 0;
      for (const v_s_32690 of this.V2) if (!v_i_32684.kI || -1 === v_i_32684.yP.findIndex(v_t_32691 => v_t_32691.Pp.w0 === v_s_32690.ee && v_t_32691.p0 === v_s_32690.te)) {
        if (v_n_32686 === v_t_32689) return v_s_32690.yI(v_i_32684);
        ++v_t_32689;
      }
    }
    return !1;
  }
}, scope.v_xr_27947.prototype = {
  _I: function () {
    this.yP = [];
    for (let v_t_32692 = 0; v_t_32692 < 3; ++v_t_32692) if (!this.hI[v_t_32692].yI(this)) return !1;
    return !0;
  }
};
scope.v_Tr_27949 = {
  ef: function (v_i_32693) {
    let v_e_32694 = [],
      v_n_32695 = {};
    scope.v_Le_28076([function (v_i_32696) {
      scope.hostBridge.zu("/courses/", function (v_t_32697) {
        scope.v_oo_28098(v_t_32697, function (v_i_32698, v_t_32699, v_e_32700) {
          if (!scope.v_Da_28067(v_e_32700.name, ".ugr")) return v_i_32698();
          scope.v_$r_27975.Ic("/courses/" + v_e_32700.name, function (v_t_32701) {
            null !== v_t_32701 && (v_t_32701 = function (v_t_32702) {
              var v_i_32703,
                v_e_32704,
                v_t_32702 = v_t_32702.replace(/\r\n/g, "\n").split("\n");
              let v_n_32705,
                v_r_32706 = {
                  AP: 0,
                  BP: new scope.v_xr_27947()
                };
              if (scope.v_De_28096(v_t_32702, function (v_t_32707) {
                if (!((v_n_32705 = v_t_32707.split("\t")).length < 2)) switch (v_n_32705[1] = v_n_32705[1].trim(), v_n_32705[0]) {
                  case "CRSID":
                    v_r_32706.BP.Ae = v_n_32705[1];
                    break;
                  case "GROUP":
                    "1" === v_n_32705[1] ? v_r_32706.AP = 1 : "2" === v_n_32705[1] ? v_r_32706.AP = 2 : "3" === v_n_32705[1] ? v_r_32706.AP = 3 : "4" === v_n_32705[1] ? v_r_32706.AP = 4 : "5" === v_n_32705[1] ? v_r_32706.AP = 5 : "INF" === v_n_32705[1] ? v_r_32706.AP = 6 : "SP" !== v_n_32705[1] && "EX" !== v_n_32705[1] || (v_r_32706.AP = 99);
                    break;
                  case "TITLE":
                    v_r_32706.BP.lf = v_n_32705[1];
                    break;
                  case "LIFE":
                    v_r_32706.BP.bP = scope.mathMax(scope.v_Pe_28064(v_n_32705[1]), 0);
                    break;
                  case "DAMAGE":
                    "J" === v_n_32705[1] ? v_r_32706.BP.zb = scope.v_w0_27717 : "A" === v_n_32705[1] ? v_r_32706.BP.zb = scope.v__e_27718 : "M" === v_n_32705[1] && (v_r_32706.BP.zb = scope.v_he_27719), v_n_32705[2] && (v_r_32706.BP.TP = scope.mathMax(scope.v_Pe_28064(v_n_32705[2]), 1));
                    break;
                  case "HEAL":
                    v_r_32706.BP.SP = scope.mathMax(scope.v_Pe_28064(v_n_32705[1]), 0);
                    break;
                  case "HEALJDG":
                    v_r_32706.BP.EP = scope.mathMax(scope.v_Pe_28064(v_n_32705[1]), 0), "C" === v_n_32705[2] ? v_r_32706.BP.LP = scope.v_fe_27716 : "J" === v_n_32705[2] ? v_r_32706.BP.LP = scope.v_w0_27717 : "A" === v_n_32705[2] && (v_r_32706.BP.LP = scope.v__e_27718);
                    break;
                  case "MUSIC1":
                    v_r_32706.BP.hI[0] = new scope.v_yr_27944(v_n_32705[1], scope.v_Q0_27805.indexOf(v_n_32705[2]));
                    break;
                  case "MUSIC2":
                    v_r_32706.BP.hI[1] = new scope.v_yr_27944(v_n_32705[1], scope.v_Q0_27805.indexOf(v_n_32705[2]));
                    break;
                  case "MUSIC3":
                    v_r_32706.BP.hI[2] = new scope.v_yr_27944(v_n_32705[1], scope.v_Q0_27805.indexOf(v_n_32705[2]));
                    break;
                  case "TRACK":
                    var v_i_32708 = scope.v_Pe_28064(v_n_32705[1]);
                    v_i_32708 < 0 || 2 < v_i_32708 || ("CHART" === v_n_32705[2] ? v_r_32706.BP.hI[v_i_32708] = new scope.v_yr_27944(v_n_32705[3], scope.v_Q0_27805.indexOf(v_n_32705[4])) : "LEVEL" === v_n_32705[2] ? v_r_32706.BP.hI[v_i_32708] = new scope.v_Sr_27945(v_n_32705[3]) : "RANDOM" === v_n_32705[2] && (v_r_32706.BP.hI[v_i_32708] && v_r_32706.BP.hI[v_i_32708].Fi === scope.v_Ar_27946 || (v_r_32706.BP.hI[v_i_32708] = new scope.v_Ar_27946()), v_r_32706.BP.hI[v_i_32708].V2.push(new scope.v_yr_27944(v_n_32705[3], scope.v_Q0_27805.indexOf(v_n_32705[4])))));
                    break;
                  case "REWRITE":
                    if ("SPEED" === v_n_32705[1]) {
                      v_i_32708 = scope.v_Re_28066(v_n_32705[2]);
                      if (!isNaN(v_i_32708)) {
                        let v_t_32709 = 100;
                        v_t_32709 = v_i_32708 < 1500 ? scope.mathFloor(4 * v_i_32708) / .04 : scope.mathFloor(2 * v_i_32708) / .02, v_r_32706.BP.CP.DP = scope.mathMin(scope.mathMax(v_t_32709, 100), 2e3);
                      }
                    } else if ("FIELDWALL" === v_n_32705[1]) v_r_32706.BP.CP.Hs = scope.v_La_28062(v_n_32705[2]);else if ("SKILL" === v_n_32705[1]) switch (scope.v_Ra_28061(v_n_32705[2])) {
                      case "hard1":
                        v_r_32706.BP.CP.Ar = scope.v__t_27743;
                        break;
                      case "hardair":
                        v_r_32706.BP.CP.Ar = scope.v_dt_27745;
                        break;
                      case "hard2":
                        v_r_32706.BP.CP.Ar = scope.v_ht_27744;
                        break;
                      case "hard2air":
                        v_r_32706.BP.CP.Ar = scope.v_vt_27746;
                        break;
                      case "hard3":
                        v_r_32706.BP.CP.Ar = scope.v_wt_27747;
                        break;
                      default:
                        v_r_32706.BP.CP.Ar = scope.v_B0_27742;
                    }
                    break;
                  case "FIELDWALL":
                    "INIT" === v_n_32705[1] ? (v_i_32708 = scope.v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.ue = v_i_32708)) : "FAR" === v_n_32705[1] ? (v_i_32708 = scope.v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.IP = scope.v_Qa_28089(v_i_32708, 0, 15))) : "NEAR" === v_n_32705[1] ? (v_i_32708 = scope.v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.MP = scope.v_Qa_28089(v_i_32708, 0, 15))) : "STEP_S" === v_n_32705[1] ? (v_i_32708 = scope.v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.FP = v_i_32708)) : "STEP_F" === v_n_32705[1] && (v_i_32708 = scope.v_Re_28066(v_n_32705[2]), isNaN(v_i_32708) || (v_r_32706.BP.CP.RP.PP = v_i_32708));
                    break;
                  case "NODUP":
                    v_r_32706.BP.kI = scope.v_La_28062(v_n_32705[1]);
                    break;
                  case "HIDERECORD":
                    v_r_32706.BP.bI = scope.v_La_28062(v_n_32705[1]);
                }
              }), 0 === v_r_32706.AP || "" === v_r_32706.BP.Ae || 0 === v_r_32706.BP.bP || 0 === v_r_32706.BP.zb) return null;
              v_r_32706.BP.CP.Hs && ((v_i_32703 = (v_t_32702 = v_r_32706.BP.CP.RP).MP) < (v_e_32704 = v_t_32702.IP) && (v_r_32706.BP.CP.Hs = !1), v_t_32702.ue = scope.v_Qa_28089(v_t_32702.ue, v_e_32704, v_i_32703)), v_r_32706.BP.AP = v_r_32706.AP;
              for (let v_t_32710 = 0; v_t_32710 < 3; ++v_t_32710) if (!v_r_32706.BP.hI[v_t_32710]) return null;
              return v_r_32706;
            }(v_t_32701)) && (v_n_32695[v_t_32701.AP] || (v_n_32695[v_t_32701.AP] = []), v_n_32695[v_t_32701.AP].push(v_t_32701.BP)), v_i_32698();
          });
        }, () => {
          scope.v_Me_28078(v_i_32696);
        });
      }, () => {
        scope.v_Me_28078(v_i_32696);
      });
    }, function (v_t_32711) {
      scope.v_De_28096([1, 2, 3, 4, 5, 6, 99], function (v_t_32712) {
        v_n_32695[v_t_32712] && v_e_32694.push({
          cls: v_t_32712,
          items: v_n_32695[v_t_32712]
        });
      }), scope.v_Fe_28101(() => v_i_32693(v_e_32694));
    }]);
  },
  Ln: function (v_i_32713) {
    var v_e_32714 = [];
    switch (null !== v_i_32713.CP.DP && v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleForceSpeed"), [["SPEED", (v_i_32713.CP.DP / 100).toFixed(2)]])), v_i_32713.CP.Hs && v_e_32714.push(scope.v_Ue_28209("courseRuleFieldWall")), v_i_32713.CP.Ar) {
      case scope.v__t_27743:
        v_e_32714.push(scope.v_Ue_28209("courseRuleJdgHard1"));
        break;
      case scope.v_dt_27745:
        v_e_32714.push(scope.v_Ue_28209("courseRuleJdgHardAir"));
        break;
      case scope.v_ht_27744:
        v_e_32714.push(scope.v_Ue_28209("courseRuleJdgHard2"));
        break;
      case scope.v_vt_27746:
        v_e_32714.push(scope.v_Ue_28209("courseRuleJdgHard2Air"));
        break;
      case scope.v_wt_27747:
        v_e_32714.push(scope.v_Ue_28209("courseRuleJdgHard3"));
    }
    if (v_i_32713.zb === scope.v_he_27719) v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleDmgJudgeMiss"), [["DMG_AMOUNT", "-" + v_i_32713.TP]]));else {
      let v_t_32715 = "";
      v_i_32713.zb === scope.v_fe_27716 ? v_t_32715 = "<#c:ff0>JUSTICE CRITICAL<#r>" : v_i_32713.zb === scope.v_w0_27717 ? v_t_32715 = "<#c:f70>JUSTICE<#r>" : v_i_32713.zb === scope.v__e_27718 && (v_t_32715 = "<#c:0f0>ATTACK<#r>"), v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleDmgJudge"), [["JUDGE_RESULT", v_t_32715], ["DMG_AMOUNT", "-" + v_i_32713.TP]]));
    }
    if (0 < v_i_32713.SP && v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleHealEnd"), [["HEAL_AMOUNT", "+" + v_i_32713.SP]])), 0 < v_i_32713.EP && 0 < v_i_32713.LP) if (v_i_32713.LP === scope.v_fe_27716) v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleHealJudgeJc"), [["HEAL_AMOUNT", "+" + v_i_32713.EP]]));else {
      let v_t_32716 = "";
      v_t_32716 = v_i_32713.LP === scope.v_w0_27717 ? "<#c:f70>JUSTICE<#r>" : v_i_32713.LP === scope.v__e_27718 ? "<#c:0f0>ATTACK<#r>" : "MISS", v_e_32714.push(scope.v_Ba_28069(scope.v_Ue_28209("courseRuleHealJudge"), [["JUDGE_RESULT", v_t_32716], ["HEAL_AMOUNT", "+" + v_i_32713.EP]]));
    }
    return v_e_32714.join("\n");
  },
  Kc(v_t_32717, v_i_32718) {
    return scope.mathMax(scope.mathFloor(.2 * v_i_32718), 10) <= v_t_32717;
  }
};
scope.dataLoader = createDataLoader(scope);
scope.v_Rr_27952 = {
  ef: function (v_i_32808) {
    let v_o_32809 = [],
      v_l_32810 = [],
      v_c_32811 = [];
    scope.v_Le_28076([function (v_i_32812) {
      scope.hostBridge.zu("/titles/", function (v_t_32813) {
        scope.v_oo_28098(v_t_32813, function (v_i_32814, v_t_32815, v_e_32816) {
          if (v_e_32816.isDirectory) return v_i_32814();
          scope.v_$r_27975.Ic(v_e_32816.fullPath, function (v_t_32817) {
            if (null !== v_t_32817) {
              v_t_32817 = v_t_32817.replace(/\r\n/g, "\n").split("\n");
              let v_i_32818;
              scope.v_De_28096(v_t_32817, function (v_t_32819) {
                (v_i_32818 = v_t_32819.split("\t")).length < 3 || "" === v_i_32818[0] || "" === v_i_32818[2] || 7 <= (v_t_32819 = scope.mathMin(scope.mathMax(scope.v_Pe_28064(v_i_32818[1]), 0), 7)) || v_o_32809.push({
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
          scope.v_Me_28078(v_i_32812);
        });
      }, () => {
        scope.v_Me_28078(v_i_32812);
      });
    }, async function (v_t_32820) {
      var v_i_32821,
        v_e_32822,
        v_n_32823 = await scope.systemMisc.t2(),
        v_r_32824 = await scope.languagePackages.f7("titles/title_0001.txt");
      if (null !== v_r_32824) for (v_e_32822 of v_r_32824.replace(/\r\n/g, "\n").split("\n")) if (!((v_i_32821 = v_e_32822.split("\t")).length < 5) && "" !== v_i_32821[0] && "" !== v_i_32821[3]) {
        var v_s_32825 = scope.mathMin(scope.mathMax(scope.v_Pe_28064(v_i_32821[2]), 0), 9);
        if (!(9 <= v_s_32825)) {
          var v_a_32826 = scope.v_Pe_28064(v_i_32821[1]);
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
      scope.v_Me_28078(v_t_32820);
    }, function (v_i_32827) {
      scope.hostBridge.zu("/nameplates/", function (v_t_32828) {
        scope.v_oo_28098(v_t_32828, function (v_s_32829, v_t_32830, v_a_32831) {
          if (!v_a_32831.isDirectory) return v_s_32829();
          scope.hostBridge.zu(v_a_32831.fullPath + "/", function (v_i_32832) {
            let v_e_32833 = !1,
              v_n_32834 = !1,
              v_r_32835 = !1;
            for (let v_t_32836 = 0; v_t_32836 < v_i_32832.length && (v_n_32834 || "meta.txt" !== v_i_32832[v_t_32836].name ? v_n_32834 || "meta.json" !== v_i_32832[v_t_32836].name ? v_r_32835 || "image.png" !== v_i_32832[v_t_32836].name || (v_r_32835 = !0) : v_n_32834 = !0 : v_e_32833 = !0, !v_e_32833 && !v_n_32834 || !v_r_32835); ++v_t_32836);
            if (!v_e_32833 && !v_n_32834 || !v_r_32835) return v_s_32829();
            v_e_32833 ? scope.v_$r_27975.Ic(v_a_32831.fullPath + "/meta.txt", function (v_t_32837) {
              if (null !== v_t_32837) {
                v_t_32837 = v_t_32837.replace(/\r\n/g, "\n").split("\n");
                let v_i_32838,
                  v_e_32839 = {
                    id: v_a_32831.name,
                    text: ""
                  };
                scope.v_De_28096(v_t_32837, function (v_t_32840) {
                  0 === (v_i_32838 = v_t_32840.split("\t")).length || "Name" !== v_i_32838[0] || v_i_32838.length < 2 || (v_e_32839.text = v_i_32838[1]);
                }), v_l_32810.push(v_e_32839);
              }
              v_s_32829();
            }) : scope.v_$r_27975.Ic(v_a_32831.fullPath + "/meta.json", function (v_i_32841) {
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
          scope.v_Me_28078(v_i_32827);
        });
      }, () => {
        scope.v_Me_28078(v_i_32827);
      });
    }, function (v_i_32845) {
      scope.hostBridge.zu("/voices/", function (v_t_32846) {
        scope.v_oo_28098(v_t_32846, function (v_n_32847, v_t_32848, v_o_32849) {
          if (!v_o_32849.isDirectory) return v_n_32847();
          scope.hostBridge.zu(v_o_32849.fullPath + "/", function (v_t_32850) {
            -1 !== v_t_32850.findIndex(v_t_32851 => "meta.txt" === v_t_32851.name) ? scope.v_$r_27975.Ic(v_o_32849.fullPath + "/meta.txt", function (v_a_32852) {
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
                if (scope.v_De_28096(v_a_32852, function (v_t_32858) {
                  return 0 !== (v_i_32853 = v_t_32858.split("\t")).length && ("Version" === v_i_32853[0] ? !(v_i_32853.length < 2) && 1 !== scope.v_Pe_28064(v_i_32853[1]) && (v_n_32855 = !0) : void ("Volume" === v_i_32853[0] ? v_i_32853.length < 2 || (v_e_32854.volume = scope.v_Re_28066(v_i_32853[1])) : "Name" === v_i_32853[0] ? v_i_32853.length < 2 || (void 0 === v_r_32856[v_s_32857] && (v_r_32856[v_s_32857] = {
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
                  }), v_r_32856[v_s_32857].nf = v_i_32853[1].replaceAll("$n$", "\n")) : "Arc" === v_i_32853[0] ? v_i_32853.length < 2 || (v_e_32854.arc = scope.v_La_28062(v_i_32853[1])) : "Lang" !== v_i_32853[0] || v_i_32853.length < 2 || "" === v_i_32853[1] || (v_s_32857 = v_i_32853[1])));
                }), !v_n_32855) {
                  v_a_32852 = Object.keys(v_r_32856);
                  if (0 < v_a_32852.length) {
                    let v_t_32859 = v_r_32856[scope.v_lc_28208(scope.currentLang)];
                    v_t_32859 = v_t_32859 || v_r_32856[v_a_32852[0]], v_e_32854.text = v_t_32859.ct, v_e_32854.desc = v_t_32859.if, v_e_32854.notice = v_t_32859.nf;
                  }
                  v_c_32811.push(v_e_32854);
                }
              }
              v_n_32847();
            }) : -1 !== v_t_32850.findIndex(v_t_32860 => "meta.json" === v_t_32860.name) && scope.v_$r_27975.Ic(v_o_32849.fullPath + "/meta.json", function (v_t_32861) {
              if (null !== v_t_32861) {
                let v_i_32862 = null;
                try {
                  v_i_32862 = JSON.parse(v_t_32861);
                } catch (v_t_32864) {}
                if (null === v_i_32862) return v_n_32847();
                let v_e_32863 = null;
                if (void 0 !== v_i_32862[scope.currentLang] ? v_e_32863 = v_i_32862[scope.currentLang] : scope.v_De_28096(scope.supportedLangs, function (v_t_32865) {
                  return void 0 !== v_i_32862[v_t_32865] && (v_e_32863 = v_i_32862[v_t_32865], 1);
                }), null === v_e_32863) return v_n_32847();
                v_c_32811.push({
                  id: v_o_32849.name,
                  text: scope.v_za_28082(v_e_32863.name),
                  desc: scope.v_za_28082(v_e_32863.description),
                  notice: scope.v_za_28082(v_e_32863.notice),
                  arc: v_i_32862.common && !0 === v_i_32862.common.arc,
                  has_long_voice: v_i_32862.common && !0 === v_i_32862.common.has_long_voice,
                  volume: v_i_32862.common && v_i_32862.common.volume || 1
                });
              }
              v_n_32847();
            });
          }, v_n_32847);
        }, function () {
          scope.v_Me_28078(v_i_32845);
        });
      }, () => {
        scope.v_Me_28078(v_i_32845);
      });
    }, function (v_t_32866) {
      v_o_32809.sort(function (v_t_32867, v_i_32868) {
        return v_t_32867.rarity === v_i_32868.rarity ? v_t_32867.id < v_i_32868.id ? -1 : v_t_32867.id > v_i_32868.id ? 1 : 0 : v_t_32867.rarity - v_i_32868.rarity;
      }), v_l_32810.sort(function (v_t_32869, v_i_32870) {
        return v_t_32869.id < v_i_32870.id ? -1 : v_t_32869.id > v_i_32870.id ? 1 : 0;
      }), v_c_32811.sort(function (v_t_32871, v_i_32872) {
        return v_t_32871.id < v_i_32872.id ? -1 : v_t_32871.id > v_i_32872.id ? 1 : 0;
      }), scope.v_Fe_28101(() => v_i_32808(v_o_32809, v_l_32810, v_c_32811));
    }]);
  }
};
scope.v_Mr_27954 = function () {
  this.Pm = 1, this.Gm = 0, this.En = ":sys_none", this.jm = 0;
};
scope.v_Br_27958 = createV_Br_27958(scope);
scope.v_Nr_27959 = createV_Nr_27959(scope);
scope.v_Ur_27961.rt = function (v_t_33032, v_r_33033) {
  let v_s_33034 = new scope.v_ds_27991(v_t_33032, 0, 2);
  v_s_33034.xl(function () {
    v_s_33034.E5("meta").then(function (v_t_33035) {
      if (null === v_t_33035) v_s_33034 = void 0, scope.v_Fe_28101(() => v_r_33033(null));else {
        v_t_33035 = v_t_33035.replace(/\r\n/g, "\n").split("\n");
        let v_i_33036,
          v_e_33037 = "ja",
          v_n_33038 = new scope.v_Ur_27961();
        scope.v_De_28096(v_t_33035, function (v_t_33039) {
          (v_i_33036 = v_t_33039.split("\t")).length < 2 || ("TargetVer" === v_i_33036[0] ? "FirstPlay" === v_i_33036[1] ? v_n_33038.hi = !0 : v_n_33038.di.push(scope.v_Pe_28064(v_i_33036[1])) : "Lang" === v_i_33036[0] ? v_e_33037 = v_i_33036[1] : "Page" === v_i_33036[0] && v_e_33037 === scope.currentLang && ((v_t_33039 = new scope.v_Gr_27960()).ki = v_i_33036[1], v_t_33039.lf = v_i_33036[2], v_n_33038.vi.push(v_t_33039)));
        }), v_n_33038.gi = v_s_33034, scope.v_Fe_28101(() => v_r_33033(v_n_33038));
      }
    });
  });
};
scope.v_Hr_27962 = {
  ef: function (v_i_33040) {
    scope.v_Le_28076([function (v_i_33041) {
      scope.hostBridge.zu("/extra/n/", function (v_t_33042) {
        scope.v_oo_28098(v_t_33042, function (v_i_33043, v_t_33044, v_e_33045) {
          if (!v_e_33045.isFile || !scope.v_Da_28067(v_e_33045.name, ".arc")) return v_i_33043();
          scope.v_Ur_27961.rt("/extra/n/" + v_e_33045.name, function (v_t_33046) {
            v_t_33046 && scope.v_be_27857.Jp.push(v_t_33046), v_i_33043();
          });
        }, () => {
          scope.v_Me_28078(v_i_33041);
        });
      }, () => scope.v_Me_28078(v_i_33041));
    }, function (v_t_33047) {
      v_i_33040();
    }]);
  }
};
scope.settingsTables = createSettingsTables(scope);
scope.recordsStore = createRecordsStore(scope);
scope.v_Or_27965 = createV_Or_27965(scope);
scope.v_Ie_27966 = createV_Ie_27966(scope);
scope.v_Wr_27968 = createV_Wr_27968(scope);
scope.v_Xr_27969 = {
  _n: function (v_a_33186) {
    let v_o_33187 = new scope.v_ms_27995();
    scope.v_Le_28076([v_i_33188 => {
      scope.languagePackages.it("shaders/shaders.krtbl", function (v_t_33189) {
        v_t_33189 ? (v_o_33187.uf(v_t_33189), scope.v_Me_28078(v_i_33188)) : v_a_33186();
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
        scope.v_Je_27574 = new glRuntime.Shader(v_n_33192[1], v_n_33192[0]), scope.v_je_27575 = new glRuntime.Shader(v_n_33192[3], v_n_33192[2]), scope.v_Oe_27576 = new glRuntime.Shader(v_n_33192[5], v_n_33192[4]), scope.v_u_27577 = new glRuntime.Shader(v_n_33192[7], v_n_33192[6]), scope.v_f_27578 = new glRuntime.Shader(v_n_33192[9], v_n_33192[8]), scope.v_Ve_27579 = new glRuntime.Shader(v_n_33192[11], v_n_33192[10]), scope.v_We_27580 = new glRuntime.Shader(v_n_33192[13], v_n_33192[12]), scope.v_Xe_27581 = new glRuntime.Shader(v_n_33192[15], v_n_33192[14]), scope.v_ze_27582 = new glRuntime.Shader(v_n_33192[17], v_n_33192[16]), scope.v_Ke_27583 = new glRuntime.Shader(v_n_33192[19], v_n_33192[18]), scope.v_Ye_27584 = new glRuntime.Shader(v_n_33192[21], v_n_33192[20]), scope.v_qe_27585 = new glRuntime.Shader(v_n_33192[23], v_n_33192[22]), scope.v_Ze_27586 = new glRuntime.Shader(v_n_33192[25], v_n_33192[24]), scope.v___27587 = new glRuntime.Shader(v_n_33192[27], v_n_33192[26]), scope.v_$e_27588 = new glRuntime.Shader(v_n_33192[29], v_n_33192[28]), scope.v_Qe_27589 = new glRuntime.Shader(v_n_33192[31], v_n_33192[30]), scope.v_tn_27590 = new glRuntime.Shader(v_n_33192[33], v_n_33192[32]), scope.v_en_27591 = new glRuntime.Shader(v_n_33192[35], v_n_33192[34]), scope.v_nn_27592 = new glRuntime.Shader(v_n_33192[37], v_n_33192[36]), scope.v_rn_27593 = new glRuntime.Shader(v_n_33192[39], v_n_33192[38]), scope.v_sn_27594 = new glRuntime.Shader(v_n_33192[41], v_n_33192[40]), scope.v_an_27595 = new glRuntime.Shader(v_n_33192[43], v_n_33192[42]), scope.v_on_27596 = new glRuntime.Shader(v_n_33192[45], v_n_33192[44]), scope.v_ln_27597 = new glRuntime.Shader(v_n_33192[47], v_n_33192[46]), scope.v_h_27598 = new glRuntime.Shader(v_n_33192[49], v_n_33192[48]), scope.v_cn_27599 = new glRuntime.Shader(v_n_33192[51], v_n_33192[50]), scope.v_un_27600 = new glRuntime.Shader(v_n_33192[53], v_n_33192[52]), scope.v_fn_27601 = new glRuntime.Shader(v_n_33192[55], v_n_33192[54]), scope.v__n_27602 = new glRuntime.Shader(v_n_33192[57], v_n_33192[56]), scope.v_hn_27603 = new glRuntime.Shader(v_n_33192[59], v_n_33192[58]), scope.v_dn_27604 = new glRuntime.Shader(v_n_33192[61], v_n_33192[60]), scope.v_d_27605 = new glRuntime.Shader(v_n_33192[63], v_n_33192[62]), scope.v_v_27606 = new glRuntime.Shader(v_n_33192[65], v_n_33192[64]), scope.v_w_27607 = new glRuntime.Shader(v_n_33192[67], v_n_33192[66]), scope.v_m_27612 = new glRuntime.Shader(v_n_33192[69], v_n_33192[68]), scope.v_Ct_27608 = new glRuntime.Shader(v_n_33192[71], v_n_33192[70]), scope.v_Tt_27609 = new glRuntime.Shader(v_n_33192[73], v_n_33192[72]), scope.v_It_27610 = new glRuntime.Shader(v_n_33192[75], v_n_33192[74]), scope.v_Pt_27611 = new glRuntime.Shader(v_n_33192[77], v_n_33192[76]), scope.v_Rt_27613 = new glRuntime.Shader(v_n_33192[79], v_n_33192[78]), scope.v_Lt_27614 = new glRuntime.Shader(v_n_33192[81], v_n_33192[80]), scope.v_Mt_27615 = new glRuntime.Shader(v_n_33192[83], v_n_33192[82]), scope.v_Et_27616 = new glRuntime.Shader(v_n_33192[85], v_n_33192[84]), scope.v_Dt_27617 = new glRuntime.Shader(v_n_33192[87], v_n_33192[86]), scope.v_Ft_27618 = new glRuntime.Shader(v_n_33192[89], v_n_33192[88]), scope.v_Bt_27619 = new glRuntime.Shader(v_n_33192[91], v_n_33192[90]), scope.v_b_27620 = new glRuntime.Shader(v_n_33192[93], v_n_33192[92]), scope.v_S_27621 = new glRuntime.Shader(v_n_33192[95], v_n_33192[94]), scope.v_A_27622 = new glRuntime.Shader(v_n_33192[97], v_n_33192[96]), scope.v_x_27623 = new glRuntime.Shader(v_n_33192[99], v_n_33192[98]), scope.v_C_27624 = new glRuntime.Shader(v_n_33192[101], v_n_33192[100]), v_a_33186(!0);
      } else v_a_33186(!1);
    }]);
  }
};
scope.v_Yr_27972.prototype = {
  read: function (v_t_33197, v_n_33198, v_e_33199) {
    let v_m_33200 = this,
      v_p_33201 = {
        Yf: [],
        Rf: []
      },
      v_s_33202 = {
        Yf: {},
        Rf: {}
      };
    scope.v_Le_28076([function (v_i_33203) {
      scope.v_$r_27975.Ic(v_t_33197, function (v_t_33204) {
        null === v_t_33204 ? v_e_33199(!1) : (function (v_t_33205) {
          let v_i_33206 = v_t_33205.replace(/\r\n/g, "\n").split("\n"),
            v_e_33207,
            v_r_33208 = {},
            v_n_33209 = null,
            v_s_33210 = null,
            v_a_33211 = "",
            v_o_33212 = 0;
          for (const v___33217 of v_i_33206) if ("'" !== v___33217.substr(0, 1)) {
            if (0 === (v_e_33207 = v___33217.split("\t")).length) return;
            if ("" !== v_a_33211) {
              if ("END_DATA" === v_e_33207[0]) v_e_33207.length < 1 || !v_n_33209 || (v_a_33211 = "");else switch (v_a_33211) {
                case "VTX":
                  for (const v_h_33218 of v_e_33207) "" !== v_h_33218 && v_s_33210.Hf.push(scope.v_Re_28066(v_h_33218));
                  break;
                case "UV":
                  for (const v_d_33219 of v_e_33207) "" !== v_d_33219 && v_s_33210.Uf.push(scope.v_Re_28066(v_d_33219));
                  break;
                case "TRI":
                  for (const v_v_33220 of v_e_33207) "" !== v_v_33220 && v_s_33210.Vf.push(scope.v_Pe_28064(v_v_33220));
                  break;
                case "DIF":
                  for (const v_w_33221 of v_e_33207) "" !== v_w_33221 && v_s_33210.Of.push(scope.v_Re_28066(v_w_33221));
                  break;
                case "NRM":
                  for (const v_g_33222 of v_e_33207) "" !== v_g_33222 && v_s_33210.Jf.push(scope.v_Re_28066(v_g_33222));
              }
            } else switch (v_e_33207[0]) {
              case "OBJ":
                v_n_33209 && v_f_33216(v_n_33209, v_s_33210), v_e_33207.length < 1 || "" === v_e_33207[1] ? (v_n_33209 = null, v_s_33210 = null) : (v_n_33209 = new scope.v_Kr_27971(), v_s_33210 = new scope.v_qr_27973(), v_n_33209.Ae = v_e_33207[1], v_m_33200.Nf.push(v_n_33209), v_r_33208[v_n_33209.Ae] = v_n_33209), v_a_33211 = "";
                break;
              case "USE":
                if (!(v_e_33207.length < 1) && v_n_33209) switch (v_e_33207[1]) {
                  case "DEPTH_TEST":
                    v_n_33209.If = !0;
                    break;
                  case "DEPTH_WRITE":
                    v_n_33209.yf = !0;
                    break;
                  case "UV":
                    v_n_33209.Cf = !0;
                    break;
                  case "TRI":
                    v_n_33209.Af = !0;
                    break;
                  case "DIF":
                    v_n_33209.Tf = !0;
                    break;
                  case "NRM":
                    v_n_33209.Lf = !0;
                }
                break;
              case "BLEND":
                v_e_33207.length < 1 || !v_n_33209 || (v_n_33209.Bf = "ADD" === v_e_33207[1]);
                break;
              case "TEX":
                if (!(v_e_33207.length < 7) && v_n_33209) {
                  var v_l_33213 = scope.v_Pe_28064(v_e_33207[1]);
                  if (!(v_l_33213 < 0 || 7 < v_l_33213)) {
                    let v_i_33223 = {
                      magFilter: scope.glContext.NEAREST,
                      minFilter: scope.glContext.LINEAR,
                      wrapS: scope.glContext.CLAMP_TO_EDGE,
                      wrapT: scope.glContext.CLAMP_TO_EDGE
                    };
                    switch (v_e_33207[3]) {
                      case "CLAMP":
                        v_i_33223.wrapS = scope.glContext.CLAMP_TO_EDGE;
                        break;
                      case "REPEAT":
                        v_i_33223.wrapS = scope.glContext.REPEAT;
                        break;
                      case "MIRROR":
                        v_i_33223.wrapS = scope.glContext.MIRRORED_REPEAT;
                    }
                    switch (v_e_33207[4]) {
                      case "CLAMP":
                        v_i_33223.wrapT = scope.glContext.CLAMP_TO_EDGE;
                        break;
                      case "REPEAT":
                        v_i_33223.wrapT = scope.glContext.REPEAT;
                        break;
                      case "MIRROR":
                        v_i_33223.wrapT = scope.glContext.MIRRORED_REPEAT;
                    }
                    switch (v_e_33207[5]) {
                      case "NEAREST":
                        v_i_33223.minFilter = scope.glContext.NEAREST;
                        break;
                      case "LINEAR":
                        v_i_33223.minFilter = scope.glContext.LINEAR;
                        break;
                      case "MIP_NEAREST":
                        v_i_33223.minFilter = scope.glContext.NEAREST_MIPMAP_NEAREST;
                        break;
                      case "MIP_LINEAR":
                        v_i_33223.minFilter = scope.glContext.NEAREST_MIPMAP_LINEAR;
                        break;
                      case "MIP_NEAREST2":
                        v_i_33223.minFilter = scope.glContext.LINEAR_MIPMAP_NEAREST;
                        break;
                      case "MIP_LINEAR2":
                        v_i_33223.minFilter = scope.glContext.LINEAR_MIPMAP_LINEAR;
                    }
                    switch (v_e_33207[6]) {
                      case "NEAREST":
                        v_i_33223.magFilter = scope.glContext.NEAREST;
                        break;
                      case "LINEAR":
                        v_i_33223.magFilter = scope.glContext.LINEAR;
                    }
                    var v_c_33214 = v_p_33201.Yf.find(v_t_33224 => v_t_33224.$f === v_e_33207[2] && v_t_33224.qf.magFilter === v_i_33223.magFilter && v_t_33224.qf.minFilter === v_i_33223.minFilter && v_t_33224.qf.wrapS === v_i_33223.wrapS && v_t_33224.qf.wrapT === v_i_33223.wrapT);
                    v_c_33214 ? v_n_33209.Pf.push([v_l_33213, v_c_33214.id]) : (++v_o_33212, v_p_33201.Yf.push({
                      Ae: v_o_33212,
                      $f: v_e_33207[2],
                      qf: v_i_33223
                    }), v_n_33209.Pf.push([v_l_33213, v_o_33212]));
                  }
                }
                break;
              case "SHADER":
                v_e_33207.length < 2 || !v_n_33209 || ((v_c_33214 = v_p_33201.Rf.find(v_t_33225 => v_t_33225.$f === v_e_33207[2])) ? v_n_33209.Df.push([v_e_33207[1], v_c_33214.Ae]) : (++v_o_33212, v_p_33201.Rf.push({
                  Ae: v_o_33212,
                  $f: v_e_33207[2]
                }), v_n_33209.Df.push([v_e_33207[1], v_o_33212])));
                break;
              case "BEGIN_DATA":
                v_e_33207.length < 1 || !v_n_33209 || (v_a_33211 = v_e_33207[1]);
                break;
              case "LINK_DATA":
                if (!(v_e_33207.length < 2) && v_n_33209) {
                  var v_u_33215 = v_e_33207[2];
                  if (v_r_33208[v_u_33215]) switch (v_e_33207[1]) {
                    case "VTX":
                      v_s_33210.Wf = v_u_33215;
                      break;
                    case "UV":
                      v_s_33210.Kf = v_u_33215;
                      break;
                    case "TRI":
                      v_s_33210.zf = v_u_33215;
                      break;
                    case "DIF":
                      v_s_33210.Xf = v_u_33215;
                      break;
                    case "NRM":
                      v_s_33210.Zf = v_u_33215;
                  }
                }
            }
          }
          v_n_33209 && v_f_33216(v_n_33209, v_s_33210);
          function v_f_33216(v_t_33226, v_i_33227) {
            var v_e_33228 = {},
              v_n_33229 = {},
              v_e_33228 = ("" !== v_i_33227.Wf && (v_n_33229.vertices = v_r_33208[v_i_33227.Wf].xf), v_t_33226.Cf && (v_e_33228.coords = !0, "" !== v_i_33227.Kf) && (v_n_33229.coords = v_r_33208[v_i_33227.Kf].xf), v_t_33226.Af && (v_e_33228.triangles = !0, "" !== v_i_33227.zf) && (v_n_33229.triangles = v_r_33208[v_i_33227.zf].xf), v_t_33226.Tf && (v_e_33228.colors = !0, "" !== v_i_33227.Xf) && (v_n_33229.colors = v_r_33208[v_i_33227.Xf].xf), v_t_33226.Lf && (v_e_33228.normals = !0, "" !== v_i_33227.Zf) && (v_n_33229.normals = v_r_33208[v_i_33227.Zf].xf), v_t_33226.xf = new glRuntime.Mesh(v_e_33228), v_t_33226.xf);
            v_n_33229.vertices || (v_e_33228.vertices = Float32Array.from(v_i_33227.Hf).buffer), v_t_33226.Cf && !v_n_33229.coords && (v_e_33228.coords = Float32Array.from(v_i_33227.Uf).buffer), v_t_33226.Af && !v_n_33229.triangles && (v_e_33228.triangles = Uint16Array.from(v_i_33227.Vf).buffer), v_t_33226.Tf && !v_n_33229.colors && (v_e_33228.colors = Float32Array.from(v_i_33227.Of).buffer), v_t_33226.Lf && !v_n_33229.normals && (v_e_33228.normals = Float32Array.from(v_i_33227.Jf).buffer), v_e_33228.use_shared(v_n_33229), v_e_33228.compilef(scope.glContext.STATIC_DRAW, {
              vertices: 3,
              coords: 2,
              colors: 4,
              normals: 4,
              triangles: 3
            });
          }
        }(v_t_33204), scope.v_Me_28078(v_i_33203));
      });
    }, function (v_t_33230) {
      scope.v_oo_28098(v_p_33201.Yf, function (v_i_33231, v_t_33232, v_r_33233) {
        scope.v_$r_27975.it(v_n_33198 + v_r_33233.$f, function (v_t_33234) {
          if (null !== v_t_33234) {
            let v_n_33235 = null;
            scope.v_Io_28120(v_t_33234, !1, function (v_t_33236, v_i_33237, v_e_33238) {
              v_t_33236 === scope.v_xo_28116 ? v_n_33235 = new glRuntime.Texture(v_i_33237, v_e_33238, v_r_33233.qf) : v_t_33236 === scope.v_Ao_28115 && (v_n_33235 = null);
            }), v_n_33235 && (v_m_33200.jf[v_r_33233.Ae] = v_n_33235);
          }
          v_i_33231();
        });
      }, function () {
        scope.v_Me_28078(v_t_33230);
      });
    }, function (v_t_33239) {
      scope.v_oo_28098(v_p_33201.Rf, function (v_i_33240, v_t_33241, v_e_33242) {
        scope.v_$r_27975.Ic(v_n_33198 + v_e_33242.$f, function (v_t_33243) {
          null !== v_t_33243 && (v_s_33202.Rf[v_e_33242.Ae] = v_t_33243), v_i_33240();
        });
      }, function () {
        scope.v_Me_28078(v_t_33239);
      });
    }, function (v_t_33244) {
      for (const v_i_33245 of v_m_33200.Nf) for (const v_e_33246 of v_i_33245.Pf) v_m_33200.jf[v_e_33246[1]] && v_i_33245.Mf.push([v_e_33246[0], v_m_33200.jf[v_e_33246[1]]]);
      scope.v_Me_28078(v_t_33244);
    }, function (v_t_33247) {
      for (const v_n_33249 of v_m_33200.Nf) {
        let v_t_33250 = -1,
          v_i_33251 = -1;
        for (const v_r_33252 of v_n_33249.Df) "VTX" === v_r_33252[0] ? v_t_33250 = v_r_33252[1] : "FRG" === v_r_33252[0] && (v_i_33251 = v_r_33252[1]);
        var v_e_33248;
        -1 !== v_t_33250 && -1 !== v_i_33251 && void 0 !== v_s_33202.Rf[v_t_33250] && void 0 !== v_s_33202.Rf[v_i_33251] && (v_e_33248 = [v_t_33250, v_i_33251].join(","), v_m_33200.Gf[v_e_33248] || (v_m_33200.Gf[v_e_33248] = new glRuntime.Shader(v_s_33202.Rf[v_t_33250], v_s_33202.Rf[v_i_33251])), v_n_33249.Rf = v_m_33200.Gf[v_e_33248]);
      }
      scope.v_Me_28078(v_t_33247);
    }, function (v_t_33253) {
      v_e_33199(!0);
    }]);
  },
  draw: function () {
    let v_t_33254 = !1,
      v_i_33255 = !1,
      v_e_33256 = !1;
    for (const v_r_33258 of this.Nf) if (v_r_33258.Rf) {
      v_t_33254 !== v_r_33258.If && (v_r_33258.If ? scope.glContext.enable(scope.glContext.DEPTH_TEST) : scope.glContext.disable(scope.glContext.DEPTH_TEST), v_t_33254 = v_r_33258.If), v_i_33255 !== v_r_33258.last_use_depth_write && (scope.glContext.depthMask(v_r_33258.yf), v_i_33255 = v_r_33258.yf), v_e_33256 !== v_r_33258.Bf && (v_r_33258.Bf ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), v_e_33256 = v_r_33258.Bf);
      var v_n_33257 = {};
      for (const v_s_33259 of v_r_33258.Mf) v_s_33259[1].bind(v_s_33259[0]), v_n_33257["tex" + v_s_33259[0]] = v_s_33259[0];
      v_r_33258.Rf.uniforms(v_n_33257).draw(v_r_33258.xf);
    }
    scope.glContext.disable(scope.glContext.DEPTH_TEST), scope.glContext.depthMask(!0), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA);
  },
  free: function () {
    for (const v_t_33260 of this.Nf) v_t_33260.xf.free();
    this.Nf = [];
    for (const v_i_33261 in this.Gf) this.Gf[v_i_33261].free();
    this.Gf = {};
    for (const v_e_33262 in this.jf) this.jf[v_e_33262].free();
    this.jf = {};
  }
};
scope.hostBridge = createHostBridge(scope);
scope.v_$r_27975 = {
  Ic: function (v_t_33314, v_e_33315) {
    scope.hostBridge.qu(v_t_33314, function (v_t_33316) {
      let v_i_33317 = new FileReader();
      v_i_33317.onload = () => v_e_33315(v_i_33317.result), v_i_33317.onerror = () => v_e_33315(null), v_i_33317.readAsText(v_t_33316);
    }, () => v_e_33315(null));
  },
  xi: function (v_t_33318, v_e_33319) {
    scope.hostBridge.qu(v_t_33318, function (v_t_33320) {
      let v_i_33321 = new FileReader();
      v_i_33321.onload = () => {
        var v_t_33322 = new DOMParser().parseFromString(v_i_33321.result, "application/xml");
        "parsererror" === v_t_33322.documentElement.nodeName ? v_e_33319(null) : v_e_33319(v_t_33322);
      }, v_i_33321.onerror = () => v_e_33319(null), v_i_33321.readAsText(v_t_33320);
    }, () => v_e_33319(null));
  },
  it: function (v_t_33323, v_e_33324) {
    scope.hostBridge.qu(v_t_33323, function (v_t_33325) {
      let v_i_33326 = new FileReader();
      v_i_33326.onload = () => v_e_33324(v_i_33326.result), v_i_33326.onerror = () => v_e_33324(null), v_i_33326.readAsArrayBuffer(v_t_33325);
    }, () => v_e_33324(null));
  }
};
scope.systemMisc = createSystemMisc(scope);
scope.v_ts_27977 = createV_ts_27977(scope);
scope.v_is_27978 = 1;
scope.v_es_27979 = 2;
scope.v_ns_27980 = 16;
scope.v_rs_27981 = 17;
scope.v_ss_27982 = 32;
scope.v_as_27983 = 33;
scope.v_os_27984 = 64;
scope.v_ls_27985 = 65;
scope.v_cs_27986 = 66;
scope.v_us_27987 = 67;
scope.v_fs_27988 = 68;
scope.v__s_27989 = createV__s_27989(scope);
scope.v_hs_27990.Gb = async function (v_t_33401, v_i_33402) {
  var v_e_33403 = v_t_33401 < 2,
    v_t_33401 = await scope.languagePackages.f7("props/" + v_i_33402 + ".txt");
  if (null === v_t_33401) return null;
  var v_n_33404 = new scope.v_hs_27990();
  for (const v_s_33406 of v_t_33401.replace(/\r\n/g, "\n").split("\n")) {
    var v_r_33405 = v_s_33406.split("\t");
    if (!(v_r_33405.length < 2)) if ("offset.autoplay" === v_r_33405[0]) v_n_33404.l7.c7 = scope.v_Re_28066(v_r_33405[1]) / 60;else if ("offset.manual" === v_r_33405[0]) v_n_33404.l7.u7 = scope.v_Re_28066(v_r_33405[1]) / 60;else {
      if (v_e_33403) {
        if ("tapEasy.fastAtk" === v_r_33405[0]) {
          v_n_33404.Ra.Mb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.fastJst" === v_r_33405[0]) {
          v_n_33404.Ra.Xb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.fastJcr" === v_r_33405[0]) {
          v_n_33404.Ra.Kb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.fastHjc" === v_r_33405[0]) {
          v_n_33404.Ra.qb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.lateHjc" === v_r_33405[0]) {
          v_n_33404.Ra.Yb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.lateJcr" === v_r_33405[0]) {
          v_n_33404.Ra.Zb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.lateJst" === v_r_33405[0]) {
          v_n_33404.Ra.$b = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapEasy.lateAtk" === v_r_33405[0]) {
          v_n_33404.Ra.Pb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
      } else {
        if ("tapHard.fastAtk" === v_r_33405[0]) {
          v_n_33404.Ra.Mb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.fastJst" === v_r_33405[0]) {
          v_n_33404.Ra.Xb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.fastJcr" === v_r_33405[0]) {
          v_n_33404.Ra.Kb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.fastHjc" === v_r_33405[0]) {
          v_n_33404.Ra.qb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.lateHjc" === v_r_33405[0]) {
          v_n_33404.Ra.Yb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.lateJcr" === v_r_33405[0]) {
          v_n_33404.Ra.Zb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.lateJst" === v_r_33405[0]) {
          v_n_33404.Ra.$b = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
        if ("tapHard.lateAtk" === v_r_33405[0]) {
          v_n_33404.Ra.Pb = scope.v_Re_28066(v_r_33405[1]) / 60;
          continue;
        }
      }
      "long.offsetJudge" === v_r_33405[0] ? v_n_33404.Fb.hP = scope.v_Re_28066(v_r_33405[1]) / 60 : "long.offsetSE" === v_r_33405[0] ? v_n_33404.Fb.dP = scope.v_Re_28066(v_r_33405[1]) / 60 : "long.limitJcr" === v_r_33405[0] ? v_n_33404.Fb.Db = scope.v_Re_28066(v_r_33405[1]) / 60 : "long.limigJst" === v_r_33405[0] ? v_n_33404.Fb.r7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "long.limitAtk" === v_r_33405[0] ? v_n_33404.Fb.Qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "slide.sustainFast" === v_r_33405[0] ? v_n_33404.Da.v7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "slide.sustainLate" === v_r_33405[0] ? v_n_33404.Da.d7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "slide.touchFast" === v_r_33405[0] ? v_n_33404.Da.g7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "slide.touchLate" === v_r_33405[0] ? v_n_33404.Da.w7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "slide.width1" === v_r_33405[0] ? v_n_33404.Da.Le[0] = scope.v_Re_28066(v_r_33405[1]) : "slide.width2" === v_r_33405[0] ? v_n_33404.Da.Le[1] = scope.v_Re_28066(v_r_33405[1]) : "slide.width3" === v_r_33405[0] ? v_n_33404.Da.Le[2] = scope.v_Re_28066(v_r_33405[1]) : "slide.width4" === v_r_33405[0] ? v_n_33404.Da.Le[3] = scope.v_Re_28066(v_r_33405[1]) : "slide.width5" === v_r_33405[0] ? v_n_33404.Da.Le[4] = scope.v_Re_28066(v_r_33405[1]) : "slide.width6" === v_r_33405[0] ? v_n_33404.Da.Le[5] = scope.v_Re_28066(v_r_33405[1]) : "slide.width7" === v_r_33405[0] ? v_n_33404.Da.Le[6] = scope.v_Re_28066(v_r_33405[1]) : "slide.width8" === v_r_33405[0] ? v_n_33404.Da.Le[7] = scope.v_Re_28066(v_r_33405[1]) : "slide.width9" === v_r_33405[0] ? v_n_33404.Da.Le[8] = scope.v_Re_28066(v_r_33405[1]) : "slide.width10" === v_r_33405[0] ? v_n_33404.Da.Le[9] = scope.v_Re_28066(v_r_33405[1]) : "slide.width11" === v_r_33405[0] ? v_n_33404.Da.Le[10] = scope.v_Re_28066(v_r_33405[1]) : "slide.width12" === v_r_33405[0] ? v_n_33404.Da.Le[11] = scope.v_Re_28066(v_r_33405[1]) : "slide.width13" === v_r_33405[0] ? v_n_33404.Da.Le[12] = scope.v_Re_28066(v_r_33405[1]) : "slide.width14" === v_r_33405[0] ? v_n_33404.Da.Le[13] = scope.v_Re_28066(v_r_33405[1]) : "slide.width15" === v_r_33405[0] ? v_n_33404.Da.Le[14] = scope.v_Re_28066(v_r_33405[1]) : "slide.width16" === v_r_33405[0] ? v_n_33404.Da.Le[15] = scope.v_Re_28066(v_r_33405[1]) : "airUp.fastAtk" === v_r_33405[0] ? v_n_33404.Hb.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.fastJst" === v_r_33405[0] ? v_n_33404.Hb.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.fastJcr" === v_r_33405[0] ? v_n_33404.Hb.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.fastHjc" === v_r_33405[0] ? v_n_33404.Hb.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.lateHjc" === v_r_33405[0] ? v_n_33404.Hb.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.lateJcr" === v_r_33405[0] ? v_n_33404.Hb.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.lateJst" === v_r_33405[0] ? v_n_33404.Hb.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUp.lateAtk" === v_r_33405[0] ? v_n_33404.Hb.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.fastAtk" === v_r_33405[0] ? v_n_33404.Ub.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.fastJst" === v_r_33405[0] ? v_n_33404.Ub.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.fastJcr" === v_r_33405[0] ? v_n_33404.Ub.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.fastHjc" === v_r_33405[0] ? v_n_33404.Ub.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.lateHjc" === v_r_33405[0] ? v_n_33404.Ub.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.lateJcr" === v_r_33405[0] ? v_n_33404.Ub.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.lateJst" === v_r_33405[0] ? v_n_33404.Ub.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDown.lateAtk" === v_r_33405[0] ? v_n_33404.Ub.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.fastAtk" === v_r_33405[0] ? v_n_33404.Vb.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.fastJst" === v_r_33405[0] ? v_n_33404.Vb.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.fastJcr" === v_r_33405[0] ? v_n_33404.Vb.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.fastHjc" === v_r_33405[0] ? v_n_33404.Vb.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.lateHjc" === v_r_33405[0] ? v_n_33404.Vb.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.lateJcr" === v_r_33405[0] ? v_n_33404.Vb.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.lateJst" === v_r_33405[0] ? v_n_33404.Vb.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airUpFlick.lateAtk" === v_r_33405[0] ? v_n_33404.Vb.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.fastAtk" === v_r_33405[0] ? v_n_33404.jb.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.fastJst" === v_r_33405[0] ? v_n_33404.jb.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.fastJcr" === v_r_33405[0] ? v_n_33404.jb.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.fastHjc" === v_r_33405[0] ? v_n_33404.jb.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.lateHjc" === v_r_33405[0] ? v_n_33404.jb.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.lateJcr" === v_r_33405[0] ? v_n_33404.jb.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.lateJst" === v_r_33405[0] ? v_n_33404.jb.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airDownFlick.lateAtk" === v_r_33405[0] ? v_n_33404.jb.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airLong.limitJcr" === v_r_33405[0] ? v_n_33404.t7.Db = scope.v_Re_28066(v_r_33405[1]) / 60 : "airLong.limitJst" === v_r_33405[0] ? v_n_33404.t7.e7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "airLong.limitAtk" === v_r_33405[0] ? v_n_33404.t7.Qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.fastAtk" === v_r_33405[0] ? v_n_33404.Ob.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.fastJst" === v_r_33405[0] ? v_n_33404.Ob.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.fastJcr" === v_r_33405[0] ? v_n_33404.Ob.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.fastHjc" === v_r_33405[0] ? v_n_33404.Ob.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.lateHjc" === v_r_33405[0] ? v_n_33404.Ob.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.lateJcr" === v_r_33405[0] ? v_n_33404.Ob.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.lateJst" === v_r_33405[0] ? v_n_33404.Ob.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airAction.lateAtk" === v_r_33405[0] ? v_n_33404.Ob.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.fastAtk" === v_r_33405[0] ? v_n_33404.Jb.Mb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.fastJst" === v_r_33405[0] ? v_n_33404.Jb.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.fastJcr" === v_r_33405[0] ? v_n_33404.Jb.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.fastHjc" === v_r_33405[0] ? v_n_33404.Jb.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.lateHjc" === v_r_33405[0] ? v_n_33404.Jb.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.lateJcr" === v_r_33405[0] ? v_n_33404.Jb.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.lateJst" === v_r_33405[0] ? v_n_33404.Jb.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "airCrush.lateAtk" === v_r_33405[0] ? v_n_33404.Jb.Pb = scope.v_Re_28066(v_r_33405[1]) / 60 : "damage.ok" === v_r_33405[0] ? v_n_33404.zb.Wb = scope.v_Re_28066(v_r_33405[1]) / 60 : "damage.bad" === v_r_33405[0] ? v_n_33404.zb.o7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.tapFast" === v_r_33405[0] ? v_n_33404.ja.Nb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.tapLate" === v_r_33405[0] ? v_n_33404.ja.a7 = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.fastJst" === v_r_33405[0] ? v_n_33404.ja.Xb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.fastJcr" === v_r_33405[0] ? v_n_33404.ja.Kb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.fastHjc" === v_r_33405[0] ? v_n_33404.ja.qb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.lateHjc" === v_r_33405[0] ? v_n_33404.ja.Yb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.lateJcr" === v_r_33405[0] ? v_n_33404.ja.Zb = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.lateJst" === v_r_33405[0] ? v_n_33404.ja.$b = scope.v_Re_28066(v_r_33405[1]) / 60 : "flick.width1" === v_r_33405[0] ? v_n_33404.ja.Le[0] = scope.v_Re_28066(v_r_33405[1]) : "flick.width2" === v_r_33405[0] ? v_n_33404.ja.Le[1] = scope.v_Re_28066(v_r_33405[1]) : "flick.width3" === v_r_33405[0] ? v_n_33404.ja.Le[2] = scope.v_Re_28066(v_r_33405[1]) : "flick.width4" === v_r_33405[0] ? v_n_33404.ja.Le[3] = scope.v_Re_28066(v_r_33405[1]) : "flick.width5" === v_r_33405[0] ? v_n_33404.ja.Le[4] = scope.v_Re_28066(v_r_33405[1]) : "flick.width6" === v_r_33405[0] ? v_n_33404.ja.Le[5] = scope.v_Re_28066(v_r_33405[1]) : "flick.width7" === v_r_33405[0] ? v_n_33404.ja.Le[6] = scope.v_Re_28066(v_r_33405[1]) : "flick.width8" === v_r_33405[0] ? v_n_33404.ja.Le[7] = scope.v_Re_28066(v_r_33405[1]) : "flick.width9" === v_r_33405[0] ? v_n_33404.ja.Le[8] = scope.v_Re_28066(v_r_33405[1]) : "flick.width10" === v_r_33405[0] ? v_n_33404.ja.Le[9] = scope.v_Re_28066(v_r_33405[1]) : "flick.width11" === v_r_33405[0] ? v_n_33404.ja.Le[10] = scope.v_Re_28066(v_r_33405[1]) : "flick.width12" === v_r_33405[0] ? v_n_33404.ja.Le[11] = scope.v_Re_28066(v_r_33405[1]) : "flick.width13" === v_r_33405[0] ? v_n_33404.ja.Le[12] = scope.v_Re_28066(v_r_33405[1]) : "flick.width14" === v_r_33405[0] ? v_n_33404.ja.Le[13] = scope.v_Re_28066(v_r_33405[1]) : "flick.width15" === v_r_33405[0] ? v_n_33404.ja.Le[14] = scope.v_Re_28066(v_r_33405[1]) : "flick.width16" === v_r_33405[0] ? v_n_33404.ja.Le[15] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash1" === v_r_33405[0] ? v_n_33404.ja.jI[0] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash2" === v_r_33405[0] ? v_n_33404.ja.jI[1] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash3" === v_r_33405[0] ? v_n_33404.ja.jI[2] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash4" === v_r_33405[0] ? v_n_33404.ja.jI[3] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash5" === v_r_33405[0] ? v_n_33404.ja.jI[4] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash6" === v_r_33405[0] ? v_n_33404.ja.jI[5] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash7" === v_r_33405[0] ? v_n_33404.ja.jI[6] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash8" === v_r_33405[0] ? v_n_33404.ja.jI[7] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash9" === v_r_33405[0] ? v_n_33404.ja.jI[8] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash10" === v_r_33405[0] ? v_n_33404.ja.jI[9] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash11" === v_r_33405[0] ? v_n_33404.ja.jI[10] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash12" === v_r_33405[0] ? v_n_33404.ja.jI[11] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash13" === v_r_33405[0] ? v_n_33404.ja.jI[12] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash14" === v_r_33405[0] ? v_n_33404.ja.jI[13] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash15" === v_r_33405[0] ? v_n_33404.ja.jI[14] = scope.v_Re_28066(v_r_33405[1]) : "flick.slash16" === v_r_33405[0] && (v_n_33404.ja.jI[15] = scope.v_Re_28066(v_r_33405[1]));
    }
  }
  return v_n_33404;
}, scope.v_ds_27991.prototype.xl = function (v_t_33407) {
  this.C2.xl(v_t_33407);
}, scope.v_ds_27991.prototype.pi = async function (v_t_33408) {
  return this.C2.pi(v_t_33408);
}, scope.v_ds_27991.prototype.E4 = function (v_t_33409) {
  return this.C2.E4(v_t_33409);
}, scope.v_ds_27991.prototype.E5 = async function (v_t_33410) {
  v_t_33410 = await this.C2.pi(v_t_33410);
  return null === v_t_33410 ? null : new TextDecoder("utf-8").decode(v_t_33410.buffer);
}, scope.v_vs_27992.prototype.xl = function (v_s_33411) {
  let v_f_33412 = this;
  if (this.A2) {
    let v_n_33414 = 0,
      v_r_33415 = 0;
    scope.v_Le_28076([function (v_i_33416) {
      v_f_33412.T2(function (v_t_33417) {
        null === v_t_33417 ? v_s_33411(!1) : (v_r_33415 = v_t_33417, scope.v_Me_28078(v_i_33416));
      });
    }, function (v_i_33418) {
      v_f_33412.E2(0, 5, function (v_t_33419) {
        !v_t_33419 || v_t_33419.br < 5 ? v_s_33411(!1) : (v_t_33419 = v_t_33419.buf, v_f_33412.M2 = !!(1 & v_t_33419[4]), v_f_33412.R2 = !!(2 & v_t_33419[4]), scope.v_Me_28078(v_i_33418));
      });
    }, function (v_e_33420) {
      v_f_33412.R2 ? scope.v_Le_28076([function (v_i_33421) {
        v_f_33412.E2(5, 4, function (v_t_33422) {
          !v_t_33422 || v_t_33422.br < 4 ? v_s_33411(!1) : (v_t_33422 = new Uint32Array(v_t_33422.buf.buffer), v_n_33414 = -1 - (281266680 ^ v_t_33422[0]) + 5, scope.v_Me_28078(v_i_33421));
        });
      }, function (v_t_33423) {
        let v_i_33424 = v_r_33415 - v_n_33414;
        v_f_33412.E2(v_n_33414, v_i_33424, function (v_t_33425) {
          !v_t_33425 || v_t_33425.br < v_i_33424 ? v_s_33411(!1) : (v_a_33413(v_t_33425.buf.buffer, !0), scope.v_Me_28078(v_e_33420));
        });
      }, function (v_t_33426) {
        scope.v_Me_28078(v_e_33420);
      }]) : scope.v_Me_28078(v_e_33420);
    }, function (v_t_33427) {
      v_s_33411(!0);
    }]);
  } else scope.v_$r_27975.it(v_f_33412.L2, function (v_t_33428) {
    null === v_t_33428 ? v_s_33411(!1) : (v_f_33412.yc = new Uint8Array(v_t_33428), v_f_33412.M2 = !!(1 & v_f_33412.yc[4]), v_f_33412.R2 = !!(2 & v_f_33412.yc[4]), v_f_33412.R2 && v_a_33413(v_f_33412.yc.buffer), v_s_33411(!0));
  });
  function v_a_33413(v_l_33429, v_c_33430) {
    if (!Object.keys(v_f_33412.B2).length) {
      v_f_33412.B2 = {};
      var v_u_33431 = new DataView(v_l_33429);
      let v_i_33432 = v_c_33430 ? 0 : -1 - (281266680 ^ v_u_33431.getUint32(5, !0)) + 5,
        v_t_33433 = 3125038119,
        v_e_33434 = 452525368,
        v_n_33435 = 3518972124,
        v_r_33436 = 1813668011,
        v_s_33437,
        v_a_33438 = "",
        v_o_33439;
      for (; v_i_33432 < v_u_33431.byteLength;) {
        v_t_33433 = scope.v_$a_28088(v_t_33433, 2), v_e_33434 = scope.v_$a_28088(v_e_33434, 3), v_n_33435 = scope.v_$a_28088(v_n_33435, 5), v_s_33437 = [v_u_33431.getUint32(v_i_33432, !0) ^ v_t_33433, v_u_33431.getUint32(v_i_33432 + 4, !0) ^ v_e_33434], v_o_33439 = v_u_33431.getUint8(v_i_33432 + 8, !0) ^ 255 & v_n_33435, v_i_33432 += 9, v_a_33438 = "";
        for (let v_t_33440 = 0; v_t_33440 < v_o_33439 && v_t_33440 + v_i_33432 < v_u_33431.byteLength; ++v_t_33440) v_r_33436 = scope.v_$a_28088(v_r_33436, 3), v_a_33438 += String.fromCharCode(v_u_33431.getUint8(v_t_33440 + v_i_33432) ^ 255 & v_r_33436);
        v_i_33432 += v_o_33439, v_f_33412.B2[v_a_33438] = v_s_33437;
      }
    }
  }
}, scope.v_vs_27992.prototype.E4 = function (v_t_33441) {
  return void 0 !== this.B2[v_t_33441];
}, scope.v_vs_27992.prototype.pi = async function (v_t_33442) {
  v_t_33442 = this.B2[v_t_33442];
  if (!v_t_33442) return null;
  let v_n_33443 = this,
    v_r_33444 = v_t_33442[0] + 5;
  v_t_33442 = v_r_33444 + v_t_33442[1];
  if (v_n_33443.A2) {
    let v_e_33446 = v_t_33442 - v_r_33444;
    return new Promise(v_i_33447 => {
      v_n_33443.E2(v_r_33444, v_e_33446, async function (v_t_33448) {
        !v_t_33448 || v_t_33448.br < v_e_33446 ? v_i_33447(null) : v_i_33447(await v_s_33445(v_t_33448.buf));
      });
    });
  }
  return v_s_33445(v_n_33443.yc.subarray(v_r_33444, v_t_33442));
  async function v_s_33445(v_t_33449) {
    if (scope.v_Gi_27853[v_n_33443.P2](v_t_33449, v_r_33444 - 5), scope.v_Na_28070(v_t_33449), v_n_33443.M2) try {
      v_t_33449 = await new scope.v_tc_28199(v_t_33449.subarray(1)).gR();
    } catch (v_t_33450) {
      return null;
    }
    return Uint8Array.from(v_t_33449.subarray(2 === v_n_33443.P2 ? 1 : 0));
  }
}, scope.v_vs_27992.prototype.E5 = async function (v_t_33451) {
  v_t_33451 = await this.pi(v_t_33451);
  return null === v_t_33451 ? null : new TextDecoder("utf-8").decode(v_t_33451.buffer);
}, scope.v_ws_27993.prototype = {
  X2: function () {
    return "string" == typeof this.ct && 0 < this.ct.length;
  }
}, scope.v_gs_27994.prototype = {
  Z2: function (v_i_33452) {
    var v_e_33453 = [];
    for (let v_t_33454 = 0; v_t_33454 < this.D2.length; ++v_t_33454) if (v_t_33454 < v_i_33452.length) switch (this.D2[v_t_33454].Fi) {
      case 1:
      case 2:
      case 6:
      case 7:
        v_e_33453.push("number" == typeof v_i_33452[v_t_33454] ? v_i_33452[v_t_33454] : scope.v_Pe_28064(v_i_33452[v_t_33454]));
        break;
      case 4:
      case 5:
        v_e_33453.push("number" == typeof v_i_33452[v_t_33454] ? v_i_33452[v_t_33454] : scope.v_Re_28066(v_i_33452[v_t_33454]));
        break;
      case 16:
      case 17:
        void 0 === v_i_33452[v_t_33454] ? v_e_33453.push("") : v_e_33453.push("string" == typeof v_i_33452[v_t_33454] ? v_i_33452[v_t_33454] : v_i_33452[v_t_33454].toString());
        break;
      case 255:
        void 0 === v_i_33452[v_t_33454] ? v_e_33453.push(new ArrayBuffer(0)) : v_e_33453.push(v_i_33452[v_t_33454]);
    } else switch (this.D2[v_t_33454].Fi) {
      case 1:
      case 2:
      case 6:
      case 7:
        v_e_33453.push(0);
        break;
      case 4:
      case 5:
        v_e_33453.push(0);
        break;
      case 16:
      case 17:
        v_e_33453.push("");
        break;
      case 255:
        v_e_33453.push(new ArrayBuffer(0));
    }
    return v_e_33453;
  },
  df: function (v_t_33455, v_i_33456) {
    return 0 !== v_t_33455.length && v_t_33455.length === this.D2.length && (this.G2.push(v_i_33456 ? v_t_33455 : this.Z2(v_t_33455)), !0);
  },
  Y2: function (v_t_33457) {
    if (0 === v_t_33457.length || v_t_33457.length !== this.D2.length || 0 === this.j2.length) return !1;
    var v_i_33458 = this.Z2(v_t_33457),
      v_e_33459 = [];
    for (const v_s_33462 of this.j2) {
      var v_n_33460 = this.D2.findIndex(v_t_33463 => v_t_33463.ct === v_s_33462);
      0 <= v_n_33460 && v_e_33459.push(v_n_33460);
    }
    let v_r_33461 = !1;
    for (let v_t_33464 = 0; v_t_33464 < this.G2.length; ++v_t_33464) {
      v_r_33461 = !1;
      for (const v_a_33465 of v_e_33459) if (this.G2[v_t_33464][v_a_33465] !== v_i_33458[v_a_33465]) {
        v_r_33461 = !0;
        break;
      }
      if (!v_r_33461) return this.G2[v_t_33464] = v_i_33458, !0;
    }
    return this.df(v_i_33458, !0), !0;
  },
  ML: function (v_t_33466) {
    if (0 !== v_t_33466.length && v_t_33466.length === this.D2.length && 0 !== this.j2.length) {
      var v_e_33467 = this.Z2(v_t_33466),
        v_n_33468 = [];
      for (const v_s_33471 of this.j2) {
        var v_r_33469 = this.D2.findIndex(v_t_33472 => v_t_33472.ct === v_s_33471);
        0 <= v_r_33469 && v_n_33468.push(v_r_33469);
      }
      let v_i_33470 = !1;
      for (let v_t_33473 = 0; v_t_33473 < this.G2.length; ++v_t_33473) {
        v_i_33470 = !1;
        for (const v_a_33474 of v_n_33468) if (this.G2[v_t_33473][v_a_33474] !== v_e_33467[v_a_33474]) {
          v_i_33470 = !0;
          break;
        }
        if (!v_i_33470) return this.G2.splice(v_t_33473, 1), !0;
      }
    }
    return !1;
  },
  _f: function () {
    return this.G2 = [], !0;
  },
  hf: function () {
    return this.G2;
  },
  q2: function () {
    return this.D2;
  },
  vf: function (v_i_33475) {
    var v_e_33476 = {};
    for (let v_t_33477 = 0; v_t_33477 < v_i_33475.length; ++v_t_33477) v_e_33476[this.D2[v_t_33477].ct] = v_i_33475[v_t_33477];
    return v_e_33476;
  },
  uf: function (v_i_33478, v_n_33479) {
    var v_r_33480,
      v_t_33481,
      v_s_33482,
      v_a_33483,
      v_o_33484 = new DataView(v_i_33478);
    let v_l_33485 = 0;
    if (v_i_33478.byteLength < 8) return !1;
    let v_c_33486 = [];
    for (this._f(); v_l_33485 < v_i_33478.byteLength - 7 && (v_t_33481 = v_o_33484.getInt32(v_l_33485, !0), v_r_33480 = v_o_33484.getInt32(v_l_33485 + 4, !0), !(v_l_33485 + v_r_33480 > v_i_33478.byteLength));) {
      if (v_l_33485 += 8, 541871939 === v_t_33481) {
        let v_i_33487 = v_l_33485,
          v_e_33488;
        for (v_c_33486 = []; v_i_33487 < v_l_33485 + v_r_33480 - 1;) {
          if (v_s_33482 = v_o_33484.getInt8(v_i_33487 + 1), v_i_33487 + 2 + v_s_33482 <= v_l_33485 + v_r_33480) {
            v_e_33488 = "";
            for (let v_t_33489 = v_i_33487 + 2; v_t_33489 < v_i_33487 + 2 + v_s_33482; ++v_t_33489) v_e_33488 += String.fromCharCode(v_o_33484.getUint8(v_t_33489));
            v_c_33486.push(new scope.v_ws_27993(v_e_33488, v_o_33484.getUint8(v_i_33487)));
          }
          v_i_33487 += 2 + v_s_33482;
        }
        if (v_n_33479) {
          if (v_n_33479.D2.length !== v_c_33486.length) return !1;
          for (let v_t_33490 = 0; v_t_33490 < v_n_33479.D2.length; ++v_t_33490) if (v_n_33479.D2[v_t_33490].Fi !== v_c_33486[v_t_33490].Fi || v_n_33479.D2[v_t_33490].ct !== v_c_33486[v_t_33490].ct) return !1;
        }
      } else if (1398230866 === v_t_33481 && 0 < v_c_33486.length) {
        let v_e_33491 = v_l_33485;
        let v_t_33492 = 0,
          v_n_33493 = [];
        for (; v_e_33491 < v_l_33485 + v_r_33480 - 1;) {
          if (v_a_33483 = v_o_33484.getInt32(v_e_33491, !0), (v_e_33491 += 4) + v_a_33483 <= v_l_33485 + v_r_33480) switch (v_c_33486[v_t_33492].Fi) {
            case 1:
              v_n_33493.push(4 === v_a_33483 ? v_o_33484.getInt32(v_e_33491, !0) : 0);
              break;
            case 2:
              v_n_33493.push(4 === v_a_33483 ? v_o_33484.getUint32(v_e_33491, !0) : 0);
              break;
            case 6:
              v_n_33493.push(1 === v_a_33483 ? v_o_33484.getUint8(v_e_33491) : 0);
              break;
            case 7:
              v_n_33493.push(1 === v_a_33483 ? v_o_33484.getInt8(v_e_33491) : 0);
              break;
            case 4:
              v_n_33493.push(4 === v_a_33483 ? v_o_33484.getFloat32(v_e_33491, !0) : 0);
              break;
            case 5:
              v_n_33493.push(8 === v_a_33483 ? v_o_33484.getFloat64(v_e_33491, !0) : 0);
              break;
            case 16:
              {
                let v_i_33494 = "";
                for (let v_t_33495 = 0; v_t_33495 < v_a_33483; v_t_33495 += 2) v_i_33494 += String.fromCharCode(v_o_33484.getUint16(v_t_33495 + v_e_33491, !0));
                v_n_33493.push(v_i_33494);
              }
              break;
            case 17:
              {
                let v_i_33496 = "";
                for (let v_t_33497 = 0; v_t_33497 < v_a_33483; ++v_t_33497) v_i_33496 += String.fromCharCode(v_o_33484.getUint8(v_t_33497 + v_e_33491));
                v_n_33493.push(v_i_33496);
              }
              break;
            case 255:
              v_n_33493.push(new Uint8Array(v_i_33478).slice(v_e_33491, v_e_33491 + v_a_33483).buffer);
          }
          v_e_33491 += v_a_33483, ++v_t_33492 >= v_c_33486.length && (v_t_33492 = 0, this.G2.push(v_n_33493), v_n_33493 = []);
        }
      }
      v_l_33485 += v_r_33480;
    }
    return this.D2 = v_c_33486, !0;
  },
  wf: function (v_t_33498) {
    let v_i_33499 = 0;
    var v_e_33500,
      v_n_33501 = {};
    v_i_33499 = (v_i_33499 += 8) + (8 + v_t_33498.length), v_n_33501.NAME = v_t_33498.length, v_i_33499 += 16, v_n_33501.META = 8, v_e_33500 = v_i_33499 += 8;
    for (const v_o_33505 of this.D2) v_i_33499 += 2 + scope.mathMin(v_o_33505.ct.length, 255);
    v_n_33501["COL "] = v_i_33499 - v_e_33500, v_e_33500 = v_i_33499 += 8;
    for (const v_l_33506 of this.G2) for (let v_t_33507 = 0; v_t_33507 < this.D2.length; ++v_t_33507) switch (v_i_33499 += 4, this.D2[v_t_33507].Fi) {
      case 1:
      case 2:
        v_i_33499 += 4;
        break;
      case 7:
      case 6:
        v_i_33499 += 1;
        break;
      case 4:
        v_i_33499 += 4;
        break;
      case 5:
        v_i_33499 += 8;
        break;
      case 16:
        v_i_33499 += void 0 !== v_l_33506[v_t_33507].length ? 2 * v_l_33506[v_t_33507].length : 0;
        break;
      case 17:
        v_i_33499 += void 0 !== v_l_33506[v_t_33507].length ? v_l_33506[v_t_33507].length : 0;
        break;
      case 255:
        v_i_33499 += void 0 !== v_l_33506[v_t_33507].byteLength ? v_l_33506[v_t_33507].byteLength : 0;
    }
    v_n_33501.ROWS = v_i_33499 - v_e_33500;
    var v_r_33502 = new Uint8Array(v_i_33499),
      v_s_33503 = new DataView(v_r_33502.buffer);
    let v_a_33504 = 0;
    v_s_33503.setInt32(v_a_33504, 541868628, !0), v_s_33503.setInt32(v_a_33504 + 4, v_i_33499 - 8, !0), v_a_33504 += 8, v_s_33503.setInt32(v_a_33504, 1162690894, !0), v_s_33503.setInt32(v_a_33504 + 4, v_n_33501.NAME, !0), v_r_33502.set(new Uint8Array(v_t_33498.split("").map(v_t_33508 => v_t_33508.charCodeAt(0))), v_a_33504 + 8), v_a_33504 += 8 + v_n_33501.NAME, v_s_33503.setInt32(v_a_33504, 1096041805, !0), v_s_33503.setInt32(v_a_33504 + 4, v_n_33501.META, !0), v_s_33503.setInt32(v_a_33504 + 8, 0, !0), v_s_33503.setInt32(v_a_33504 + 12, 0, !0), v_a_33504 += 8 + v_n_33501.META, v_s_33503.setInt32(v_a_33504, 541871939, !0), v_s_33503.setInt32(v_a_33504 + 4, v_n_33501["COL "], !0), v_a_33504 += 8;
    for (const v_c_33509 of this.D2) v_r_33502[v_a_33504] = v_c_33509.Fi, v_r_33502[v_a_33504 + 1] = scope.mathMin(v_c_33509.ct.length, 255), v_r_33502.set(new Uint8Array(v_c_33509.ct.substr(0, 255).split("").map(v_t_33510 => v_t_33510.charCodeAt(0))), v_a_33504 + 2), v_a_33504 += 2 + scope.mathMin(v_c_33509.ct.length, 255);
    v_s_33503.setInt32(v_a_33504, 1398230866, !0), v_s_33503.setInt32(v_a_33504 + 4, v_n_33501.ROWS, !0), v_a_33504 += 8;
    for (const v_u_33511 of this.G2) for (let v_t_33512 = 0; v_t_33512 < this.D2.length; ++v_t_33512) switch (this.D2[v_t_33512].Fi) {
      case 1:
        v_s_33503.setUint32(v_a_33504, 4, !0), v_s_33503.setInt32(v_a_33504 + 4, v_u_33511[v_t_33512], !0), v_a_33504 += 8;
        break;
      case 2:
        v_s_33503.setUint32(v_a_33504, 4, !0), v_s_33503.setUint32(v_a_33504 + 4, v_u_33511[v_t_33512], !0), v_a_33504 += 8;
        break;
      case 6:
        v_s_33503.setUint32(v_a_33504, 1, !0), v_s_33503.setUint8(v_a_33504 + 4, v_u_33511[v_t_33512]), v_a_33504 += 5;
        break;
      case 7:
        v_s_33503.setUint32(v_a_33504, 1, !0), v_s_33503.setInt8(v_a_33504 + 4, v_u_33511[v_t_33512]), v_a_33504 += 5;
        break;
      case 4:
        v_s_33503.setUint32(v_a_33504, 4, !0), v_s_33503.setFloat32(v_a_33504 + 4, v_u_33511[v_t_33512], !0), v_a_33504 += 8;
        break;
      case 5:
        v_s_33503.setUint32(v_a_33504, 8, !0), v_s_33503.setFloat64(v_a_33504 + 4, v_u_33511[v_t_33512], !0), v_a_33504 += 12;
        break;
      case 16:
        void 0 !== v_u_33511[v_t_33512].length ? (v_s_33503.setUint32(v_a_33504, 2 * v_u_33511[v_t_33512].length, !0), v_r_33502.set(new Uint8Array(new Uint16Array(v_u_33511[v_t_33512].split("").map(v_t_33513 => v_t_33513.charCodeAt(0))).buffer), v_a_33504 + 4), v_a_33504 += 4 + 2 * v_u_33511[v_t_33512].length) : (v_r_33502[v_a_33504] = 0, v_a_33504 += 4);
        break;
      case 17:
        void 0 !== v_u_33511[v_t_33512].length ? (v_s_33503.setUint32(v_a_33504, v_u_33511[v_t_33512].length, !0), v_r_33502.set(new Uint8Array(v_u_33511[v_t_33512].split("").map(v_t_33514 => v_t_33514.charCodeAt(0))), v_a_33504 + 4), v_a_33504 += 4 + v_u_33511[v_t_33512].length) : (v_r_33502[v_a_33504] = 0, v_a_33504 += 4);
        break;
      case 255:
        void 0 !== v_u_33511[v_t_33512].byteLength ? (v_s_33503.setUint32(v_a_33504, v_u_33511[v_t_33512].byteLength, !0), v_r_33502.set(new Uint8Array(v_u_33511[v_t_33512]), v_a_33504 + 4), v_a_33504 += 4 + v_u_33511[v_t_33512].byteLength) : (v_r_33502[v_a_33504] = 0, v_a_33504 += 4);
    }
    return v_r_33502.buffer;
  }
}, scope.v_gs_27994.Q2 = function (v_t_33515) {
  var v_e_33516,
    v_i_33517,
    v_n_33518 = new DataView(v_t_33515);
  let v_r_33519 = 0;
  if (v_t_33515.byteLength < 8) return !1;
  for (; v_r_33519 < v_t_33515.byteLength - 7 && (v_i_33517 = v_n_33518.getInt32(v_r_33519, !0), v_e_33516 = v_n_33518.getInt32(v_r_33519 + 4, !0), !(v_r_33519 + v_e_33516 > v_t_33515.byteLength));) {
    if (v_r_33519 += 8, 1162690894 === v_i_33517) {
      let v_i_33520 = "";
      for (let v_t_33521 = v_r_33519; v_t_33521 < v_r_33519 + v_e_33516; ++v_t_33521) v_i_33520 += String.fromCharCode(v_n_33518.getUint8(v_t_33521));
      return v_i_33520;
    }
    v_r_33519 += v_e_33516;
  }
  return null;
}, scope.v_ms_27995.prototype = {
  uf: function (v_t_33522) {
    var v_i_33523,
      v_e_33524,
      v_n_33525,
      v_r_33526,
      v_s_33527,
      v_a_33528 = new DataView(v_t_33522);
    let v_o_33529 = 0;
    if (v_t_33522.byteLength < 20) return !1;
    if (1297306187 !== v_a_33528.getInt32(v_o_33529, !0)) return !1;
    for (v_o_33529 += 4 + v_a_33528.getInt32(4, !0); v_o_33529 < v_t_33522.byteLength - 7 && (v_e_33524 = v_a_33528.getInt32(v_o_33529, !0), v_i_33523 = v_a_33528.getInt32(v_o_33529 + 4, !0), !(v_o_33529 + v_i_33523 > v_t_33522.byteLength));) v_o_33529 += 8, 541868628 === v_e_33524 && (v_n_33525 = v_t_33522.slice(v_o_33529, v_o_33529 + v_i_33523), null !== (v_r_33526 = scope.v_gs_27994.Q2(v_n_33525))) && (v_s_33527 = new scope.v_gs_27994(), this.N2[v_r_33526] && (v_s_33527.j2 = this.N2[v_r_33526].j2), v_s_33527.uf(v_n_33525, this.N2[v_r_33526] || null)) && (this.N2[v_r_33526] = v_s_33527), v_o_33529 += v_i_33523;
    return !0;
  },
  wf: function () {
    var v_i_33530 = [],
      v_t_33531 = new Uint32Array(5);
    v_t_33531[0] = 1297306187, v_t_33531[1] = 16, v_t_33531[2] = 1, v_t_33531[3] = 0, v_t_33531[4] = 0, v_i_33530.push(v_t_33531.buffer);
    for (const v_r_33534 in this.N2) v_i_33530.push(this.N2[v_r_33534].wf(v_r_33534));
    var v_e_33532 = new Uint8Array(v_i_33530.reduce((v_t_33535, v_i_33536) => v_t_33535 + v_i_33536.byteLength, 0));
    let v_n_33533 = 0;
    for (let v_t_33537 = 0; v_t_33537 < v_i_33530.length; ++v_t_33537) v_e_33532.set(new Uint8Array(v_i_33530[v_t_33537]), v_n_33533), v_n_33533 += v_i_33530[v_t_33537].byteLength, v_i_33530[v_t_33537] = void 0;
    return v_e_33532;
  },
  cf: function (v_t_33538, v_i_33539, v_e_33540) {
    if (this.N2[v_t_33538]) return this.N2[v_t_33538];
    for (const v_n_33541 of v_i_33539) if (!v_n_33541.X2()) return null;
    return this.N2[v_t_33538] = new scope.v_gs_27994(v_i_33539, v_e_33540);
  },
  e_: function (v_t_33542, v_i_33543) {
    return !!this.N2[v_t_33542] && this.N2[v_t_33542].df(v_i_33543);
  },
  gf: function (v_t_33544, v_i_33545) {
    return !!this.N2[v_t_33544] && this.N2[v_t_33544].Y2(v_i_33545);
  },
  LL: function (v_t_33546, v_i_33547) {
    return !!this.N2[v_t_33546] && this.N2[v_t_33546].ML(v_i_33547);
  },
  hf: function (v_t_33548) {
    return this.N2[v_t_33548] ? this.N2[v_t_33548].hf() : null;
  },
  t_: function (v_t_33549) {
    return this.N2[v_t_33549] ? this.N2[v_t_33549].q2() : null;
  },
  ff: function (v_t_33550) {
    return this.N2[v_t_33550] || null;
  },
  mf: function () {
    return Object.keys(this.N2);
  }
}, scope.v_ps_27996.prototype = {
  Vc: function () {
    var v_t_33551 = this.V2[this.U2];
    return ++this.U2, this.U2 >= this.H2 && (this.U2 = 0), v_t_33551;
  },
  Zl: function () {
    return this.V2;
  }
}, scope.v_ks_27997.prototype = {
  oe: function (v_t_33552) {
    this.W2 = v_t_33552;
  },
  xv: function (v_t_33553) {
    this.K2 = v_t_33553;
  },
  nn: function () {
    this.lr = !1;
  },
  Kl: function (v_t_33554) {
    this.lr && v_t_33554 === this.Cr || (this.lr ? this.O2 = this.pi() : this.O2 = v_t_33554, this.J2 = this.Cr = v_t_33554, this.Ii = this.W2, this.lr = !0);
  },
  pi: function () {
    return this.lr ? scope.v_Ee_28084(this.O2, this.J2, this.z2(scope.mathMax(scope.mathMin((this.W2 - this.Ii) / this.K2, 1), 0))) : this.Cr;
  }
}, scope.v_bs_27998.prototype = {
  qu: function (v_t_33555, v_i_33556) {
    return !!this.L7 || (this.L7 = ugSerialOpen(this.R7, "\\\\.\\COM" + v_t_33555 + "\0".repeat(16), v_i_33556.N7, v_i_33556.H7 || 8, v_i_33556.U7 || 0, v_i_33556.j7 || 0, v_i_33556.J7 || !1), this.L7);
  },
  Xu: function (v_t_33557) {
    return ugSerialWrite(this.R7, v_t_33557);
  },
  _t: function () {
    return ugSerialPop(this.R7);
  },
  V7: function () {
    ugSerialClose(this.R7), ugSerialDestroy(this.R7);
  }
}, scope.v_ys_27999.IR = [], scope.v_ys_27999.MR = function (v_t_33558) {
  this.IR.push(v_t_33558);
}, scope.v_ys_27999.LR = function (v_i_33559) {
  this.IR = this.IR.filter(v_t_33560 => v_t_33560 !== v_i_33559);
}, scope.v_ys_27999.SR = function () {
  for (var v_t_33561 of this.IR) v_t_33561.O7();
}, scope.v_ys_27999.prototype = {
  G9: function (v_t_33562, v_i_33563, v_e_33564) {
    null !== v_t_33562 && (this.M9 = v_t_33562), null !== v_i_33563 && (this.P9 = v_i_33563), this.D9 = v_e_33564;
  },
  qu: function () {
    return !!this.M7.L7 || !!this.M7.qu(this.P7, this.qf) && (this.B7 && scope.v_ys_27999.MR(this), !0);
  },
  V7: function () {
    scope.v_ys_27999.LR(this), this.M7.V7();
  },
  xl: function () {
    for (var v_n_33565, v_r_33566, v_s_33567 = [];;) {
      let v_t_33568 = this.M7._t();
      if (!v_t_33568) break;
      this.L9 && 0 < this.L9.byteLength && ((v_r_33566 = new Uint8Array(this.L9.byteLength + v_t_33568.byteLength)).set(this.L9, 0), v_r_33566.set(v_t_33568, this.L9.byteLength), v_t_33568 = v_r_33566, this.L9 = null);
      let v_i_33569 = null,
        v_e_33570 = 0;
      for (; v_e_33570 < v_t_33568.byteLength; ++v_e_33570) v_t_33568[v_e_33570] === this.M9 && (null !== v_i_33569 && 4 <= v_e_33570 - v_i_33569 && (v_n_33565 = this.W7(v_t_33568.slice(v_i_33569, v_e_33570))) && v_s_33567.push(v_n_33565), v_i_33569 = v_e_33570);
      null !== v_i_33569 && 4 <= v_e_33570 - v_i_33569 && (this.D9 && void 0 !== v_t_33568[v_i_33569 + 1] && v_t_33568[v_i_33569 + 1] === v_e_33570 - v_i_33569 - 2 || !this.D9 && void 0 !== v_t_33568[v_i_33569 + 2] && v_t_33568[v_i_33569 + 2] === v_e_33570 - v_i_33569 - 4) ? (v_r_33566 = this.W7(v_t_33568.slice(v_i_33569, v_e_33570))) && v_s_33567.push(v_r_33566) : this.L9 = v_t_33568.slice(v_i_33569);
    }
    return v_s_33567;
  },
  Xu: function (v_t_33571) {
    void 0, this.M7.Xu(this.z7(v_t_33571)), this.D9 && (++this.B9, 207 < this.B9) && (this.B9 = 1);
  },
  X7: function (v_i_33572) {
    return new Promise(v_t_33573 => {
      this.G7.push({
        Dc: v_i_33572,
        K7: v_t_33573,
        rr: performance.now() + 1e3
      });
    });
  },
  q7: function (v_t_33574) {
    var v_i_33575 = this.D9 ? this.X7(this.B9) : this.X7(v_t_33574[0]);
    return this.Xu(v_t_33574), v_i_33575;
  },
  O7: function () {
    var v_t_33576,
      v_i_33577 = this.xl(),
      v_e_33578 = performance.now();
    for (const v_n_33579 of this.G7) v_n_33579.rr < v_e_33578 && (v_n_33579.Dc = 0, v_n_33579.K7(null));
    for (v_t_33576 of v_i_33577) {
      this.B7(v_t_33576);
      for (const v_r_33580 of this.G7) v_r_33580.Dc && v_t_33576[this.D9 ? 2 : 0] === v_r_33580.Dc && (v_r_33580.Dc = 0, v_r_33580.K7(v_t_33576));
    }
    this.G7.length && (this.G7 = this.G7.filter(v_t_33581 => v_t_33581.Dc));
  },
  W7: function (v_i_33582) {
    let v_e_33583 = 0;
    for (let v_t_33586 = 0; v_t_33586 < v_i_33582.byteLength; ++v_t_33586) v_i_33582[v_t_33586] === this.P9 && ++v_e_33583;
    var v_n_33584 = new Uint8Array(v_i_33582.byteLength - v_e_33583 - 2);
    let v_r_33585 = -1;
    for (let v_t_33587 = 1; v_t_33587 < v_i_33582.byteLength - 1; ++v_t_33587) if (v_i_33582[v_t_33587] !== this.P9) v_n_33584[++v_r_33585] = v_i_33582[v_t_33587];else {
      if (++v_t_33587 >= v_i_33582.byteLength) return null;
      v_n_33584[++v_r_33585] = v_i_33582[v_t_33587] + 1;
    }
    return this.Y7(v_n_33584) !== v_i_33582[v_i_33582.byteLength - 1] ? null : v_n_33584;
  },
  z7: function (v_i_33588) {
    this.D9 ? (v_i_33588[0] = v_i_33588.byteLength, v_i_33588[2] = this.B9) : v_i_33588[1] = v_i_33588.byteLength - 2;
    let v_e_33589 = 0;
    for (let v_t_33593 = 0; v_t_33593 < v_i_33588.byteLength; ++v_t_33593) v_i_33588[v_t_33593] !== this.M9 && v_i_33588[v_t_33593] !== this.P9 || ++v_e_33589;
    var v_n_33590 = new Uint8Array(v_i_33588.byteLength + v_e_33589 + 2);
    v_n_33590[0] = this.M9;
    let v_r_33591 = 0;
    for (let v_t_33594 = 0; v_t_33594 < v_i_33588.byteLength; ++v_t_33594) v_i_33588[v_t_33594] !== this.M9 && v_i_33588[v_t_33594] !== this.P9 ? v_n_33590[++v_r_33591] = v_i_33588[v_t_33594] : (v_n_33590[++v_r_33591] = this.P9, v_n_33590[++v_r_33591] = v_i_33588[v_t_33594] - 1);
    var v_t_33592 = this.Y7(v_i_33588);
    return v_t_33592 !== this.M9 && v_t_33592 !== this.P9 ? v_n_33590[++v_r_33591] = v_t_33592 : (v_n_33590[++v_r_33591] = this.P9, v_n_33590[++v_r_33591] = v_t_33592 - 1), v_n_33590;
  },
  Y7: function (v_i_33595) {
    let v_e_33596 = 0;
    if (this.D9) {
      for (let v_t_33597 = 0; v_t_33597 < v_i_33595.byteLength; ++v_t_33597) v_e_33596 += v_i_33595[v_t_33597];
      return 255 & v_e_33596;
    }
    for (let v_t_33598 = 0; v_t_33598 < v_i_33595.byteLength; ++v_t_33598) v_e_33596 -= v_i_33595[v_t_33598];
    return v_e_33596 - 255 & 255;
  },
  vS: async function (v_i_33599, v_t_33600, v_e_33601) {
    var v_n_33602 = v_t_33600 || 3;
    let v_r_33603 = v_e_33601 || 250;
    for (let v_t_33605 = 0; v_t_33605 < v_n_33602; ++v_t_33605) {
      var v_s_33604 = await this.q7(v_i_33599);
      if (null !== v_s_33604) return v_s_33604;
      await new Promise(v_t_33606 => scope.v_uo_28102(v_t_33606, v_r_33603));
    }
    return null;
  }
};
scope.v_Ss_28000.prototype = {
  ue: async function () {
    return !!this.Z7.qu() && null !== (await this.Z7.q7(new Uint8Array([16, 0]))) && (setInterval(() => {
      this.n9();
    }, 2 / 60 * 1e3), !0);
  },
  V7: function () {
    this.Z7.V7();
  },
  TR: function (v_t_33611) {
    this.ER = !!v_t_33611, this.DR = 0, this.FR = 0, this.PR = 0, this.RR = 0;
  },
  n9: function () {
    this.i9 && this.Z7.Xu(this.e9);
  },
  BR: async function () {
    await this.Z7.q7(new Uint8Array([3, 0]));
  },
  GR: async function () {
    await this.Z7.q7(new Uint8Array([4, 0]));
  },
  m9: async function (v_t_33612) {
    await this.Z7.q7(new Uint8Array([9, 2, 255 & v_t_33612, v_t_33612 >>> 8 & 255]));
  },
  b9: async function (v_t_33613) {
    await this.Z7.q7(new Uint8Array([10, 1, v_t_33613]));
  },
  o9: function () {
    this.i9 = !0;
  },
  l9: function () {
    this.i9 = !1;
  },
  CR: function () {
    return new Promise(v_t_33614 => {
      let v_n_33615 = 0;
      this.Z7.X7(240).then(v_i_33616 => {
        clearTimeout(v_n_33615);
        let v_e_33617 = "";
        for (let v_t_33618 = 2; v_t_33618 < 10; ++v_t_33618) v_e_33617 += String.fromCharCode(v_i_33616[v_t_33618]);
        v_t_33614({
          bd_num: v_e_33617,
          fw: v_i_33616[17]
        });
      }), v_n_33615 = setInterval(() => {
        this.Z7.Xu(new Uint8Array([240, 0]));
      }, 100);
    });
  },
  x7: function () {
    return this.Q7;
  },
  T7: function (v_i_33619, v_e_33620) {
    for (let v_t_33621 = 0; v_t_33621 < 16; ++v_t_33621) void 0 === v_i_33619[15 - v_t_33621] ? (this.e9[3 + 2 * v_t_33621 * 3] = 0, this.e9[3 + 2 * v_t_33621 * 3 + 1] = 0, this.e9[3 + 2 * v_t_33621 * 3 + 2] = 0) : (this.e9[3 + 2 * v_t_33621 * 3] = scope.mathRound(v_i_33619[15 - v_t_33621][2] / 255 * 254), this.e9[3 + 2 * v_t_33621 * 3 + 1] = scope.mathRound(v_i_33619[15 - v_t_33621][0] / 255 * 254), this.e9[3 + 2 * v_t_33621 * 3 + 2] = scope.mathRound(v_i_33619[15 - v_t_33621][1] / 255 * 254));
    for (let v_t_33622 = 0; v_t_33622 < 15; ++v_t_33622) void 0 === v_e_33620[14 - v_t_33622] ? (this.e9[3 + 3 * (2 * v_t_33622 + 1)] = 0, this.e9[3 + 3 * (2 * v_t_33622 + 1) + 1] = 0, this.e9[3 + 3 * (2 * v_t_33622 + 1) + 2] = 0) : (this.e9[3 + 3 * (2 * v_t_33622 + 1)] = scope.mathRound(v_e_33620[14 - v_t_33622][2] / 255 * 254), this.e9[3 + 3 * (2 * v_t_33622 + 1) + 1] = scope.mathRound(v_e_33620[14 - v_t_33622][0] / 255 * 254), this.e9[3 + 3 * (2 * v_t_33622 + 1) + 2] = scope.mathRound(v_e_33620[14 - v_t_33622][1] / 255 * 254));
  }
};
scope.v_As_28001.prototype = {
  ue: async function () {
    return !!this.Z7.qu() && null !== (await this.Z7.q7(new Uint8Array([16, 0]))) && (setInterval(() => {
      this.n9();
    }, 4 / 60 * 1e3), !0);
  },
  V7: function () {
    this.Z7.V7();
  },
  n9: function () {
    this.i9 && this.Z7.Xu(this.f9);
  },
  H9: function () {
    this.Z7.Xu(new Uint8Array([3, 0]));
  },
  N9: function () {
    this.Z7.Xu(new Uint8Array([4, 0]));
  },
  o9: function () {
    this.i9 = !0;
  },
  l9: function () {
    this.i9 = !1;
  },
  CR: function () {
    return new Promise(v_t_33627 => {
      this.Z7.q7(new Uint8Array([240, 0])).then(v_i_33628 => {
        if (!v_i_33628) return v_t_33627({
          bd_num: "----",
          fw: 0
        });
        clearTimeout(0);
        let v_e_33629 = "";
        for (let v_t_33630 = 2; v_t_33630 < 10; ++v_t_33630) v_e_33629 += String.fromCharCode(v_i_33628[v_t_33630]);
        v_t_33627({
          bd_num: v_e_33629,
          fw: v_i_33628[17]
        });
      });
    });
  },
  I7: function () {
    return this.c9;
  },
  d9: function (v_i_33631) {
    for (let v_t_33632 = 0; v_t_33632 < 6; ++v_t_33632) void 0 === v_i_33631[v_t_33632] ? (this.f9[3 + 3 * v_t_33632] = 0, this.f9[3 + 3 * v_t_33632 + 1] = 0, this.f9[3 + 3 * v_t_33632 + 2] = 0) : (this.f9[3 + 3 * v_t_33632] = scope.mathRound(v_i_33631[v_t_33632][2] / 255 * 254), this.f9[3 + 3 * v_t_33632 + 1] = scope.mathRound(v_i_33631[v_t_33632][0] / 255 * 254), this.f9[3 + 3 * v_t_33632 + 2] = scope.mathRound(v_i_33631[v_t_33632][1] / 255 * 254));
  }
}, scope.v_xs_28002.prototype = {
  ue: async function () {
    return !!this.M7.qu(this.P7, {
      N7: 115200,
      H7: 8,
      U7: 0,
      j7: 0,
      J7: !1
    }) && (setInterval(() => {
      for (; this.M7._t(););
    }, 1e3), this.Mt(), !0);
  },
  V7: function () {
    this.M7.V7();
  },
  gS: function (v_t_33633) {
    return window.t.o(v_t_33633);
  },
  pS: function (v_t_33634) {
    this.M7.Xu(this.gS(v_t_33634));
  },
  Mt: function () {
    this.M7.Xu(new Uint8Array([27, 11]));
  },
  mS: function () {
    this.M7.Xu(new Uint8Array([27, 12]));
  },
  kS: function (v_t_33635) {
    this.M7.Xu(new Uint8Array([27, 32, v_t_33635]));
  },
  bS: function (v_t_33636) {
    this.M7.Xu(new Uint8Array([27, 33, v_t_33636 ? 1 : 0]));
  },
  yS: function (v_t_33637) {
    this.M7.Xu(new Uint8Array([27, 34, v_t_33637 >> 8, v_t_33637]));
  },
  AS: function (v_t_33638, v_i_33639) {
    this.M7.Xu(new Uint8Array([27, 48, v_t_33638 >> 8, v_t_33638, v_i_33639 >> 3]));
  },
  SS: function (v_t_33640, v_i_33641, v_e_33642, v_n_33643) {
    this.M7.Xu(new Uint8Array([27, 64, v_t_33640 >> 8, v_t_33640, v_i_33641 >> 3, v_e_33642 >> 8, v_e_33642, v_n_33643 >> 3]));
  },
  xS: function (v_t_33644) {
    this.M7.Xu(new Uint8Array([27, 65, v_t_33644]));
  },
  TS: function (v_t_33645) {
    let v_i_33646 = this.gS(v_t_33645);
    128 < v_i_33646.byteLength && (v_i_33646 = v_i_33646.subarray(0, 80));
    v_t_33645 = new Uint8Array(v_i_33646.byteLength + 3);
    v_t_33645[0] = 27, v_t_33645[1] = 80, v_t_33645[2] = v_i_33646.byteLength, v_t_33645.set(v_i_33646, 3), this.M7.Xu(v_t_33645);
  },
  CS: function () {
    this.M7.Xu(new Uint8Array([27, 81]));
  },
  RS: function () {
    this.M7.Xu(new Uint8Array([27, 82]));
  },
  IS: function (v_t_33647, v_i_33648, v_e_33649, v_n_33650, v_r_33651) {
    var v_s_33652 = v_r_33651.byteLength + 8;
    this.wS && this.wS.byteLength === v_s_33652 || (this.wS = new Uint8Array(v_s_33652)), v_i_33648 % 8 || v_n_33650 % 8 || (this.wS[0] = 27, this.wS[1] = 46, this.wS[2] = v_t_33647 >> 8, this.wS[3] = v_t_33647, this.wS[4] = v_i_33648 >> 3, this.wS[5] = v_e_33649 >> 8, this.wS[6] = v_e_33649, this.wS[7] = (v_i_33648 >> 3) + (v_n_33650 >> 3) - 1, this.wS.set(v_r_33651, 8), this.M7.Xu(this.wS));
  },
  Ok: function (v_i_33653) {
    if (v_i_33653) {
      this.mS(), this.RS(), 1 !== v_i_33653.MS && 2 !== v_i_33653.MS ? (this.SS(0, 0, 0, 0), this.TS("")) : (this.SS(0, 16 * v_i_33653.MS - 16, 160, 16 * v_i_33653.MS), this.TS(v_i_33653.ES[v_i_33653.MS - 1] || ""));
      for (let v_t_33654 = 1; v_t_33654 < 3; ++v_t_33654) v_i_33653.MS !== v_t_33654 && (this.AS(0, 16 * v_t_33654 - 16), this.pS(v_i_33653.ES[v_t_33654 - 1] || ""));
      this.CS();
    } else this.mS(), this.SS(0, 0, 0, 0), this.TS("");
  },
  LS: function () {
    this.mS(), this.IS(0, 0, 160, 32, new Uint8Array(640).fill(255));
  }
};
scope.v_Cs_28003.prototype = {
  ue: async function () {
    return !(!this.Z7.qu() || !(await this.Z7.vS(new Uint8Array([0, 0, 0, 98, 0]))) || !(await this.Z7.vS(new Uint8Array([0, 8, 0, 245, 0]))) || (this.T7(0, 0, 0), 0));
  },
  V7: function () {
    this.Z7.V7();
  },
  T7: function (v_t_33658, v_i_33659, v_e_33660) {
    this.Z7.Xu(new Uint8Array([0, 8, 0, 129, 3, v_t_33658, v_i_33659, v_e_33660]));
  },
  U9: async function (v_t_33661, v_i_33662) {
    let v_e_33663;
    switch (v_t_33661) {
      case 1:
        v_e_33663 = await this.Z7.q7(new Uint8Array([0, 0, 0, 84, 6, v_i_33662[0], v_i_33662[1], v_i_33662[2], v_i_33662[3], v_i_33662[4], v_i_33662[5]]));
        break;
      case 0:
        v_e_33663 = await this.Z7.q7(new Uint8Array([0, 0, 0, 80, 6, v_i_33662[0], v_i_33662[1], v_i_33662[2], v_i_33662[3], v_i_33662[4], v_i_33662[5]]));
    }
    return v_e_33663 && 0 === v_e_33663[4];
  },
  j9: async function (v_t_33664) {
    v_t_33664 = await this.Z7.vS(new Uint8Array([0, 0, 0, 64, 1, v_t_33664]));
    return v_t_33664 && 0 === v_t_33664[4];
  },
  J9: async function () {
    var v_t_33665 = await this.Z7.vS(new Uint8Array([0, 0, 0, 65, 0]));
    return v_t_33665 && 0 === v_t_33665[4];
  },
  PS: async function () {
    var v_t_33666 = await this.Z7.vS(new Uint8Array([0, 0, 0, 68, 0]));
    return v_t_33666 && 0 === v_t_33666[4];
  },
  O9: async function () {
    var v_t_33667 = await this.Z7.q7(new Uint8Array([0, 0, 0, 66, 0]), 350);
    return v_t_33667 ? 0 !== v_t_33667[4] ? 10001 : 7 === v_t_33667[5] ? {
      Fi: 1,
      w0: [v_t_33667[9], v_t_33667[10], v_t_33667[11], v_t_33667[12]]
    } : 19 === v_t_33667[5] ? {
      Fi: 2,
      w0: [v_t_33667[9], v_t_33667[10], v_t_33667[11], v_t_33667[12], v_t_33667[13], v_t_33667[14], v_t_33667[15], v_t_33667[16]],
      V9: [v_t_33667[17], v_t_33667[18], v_t_33667[19], v_t_33667[20], v_t_33667[21], v_t_33667[22], v_t_33667[23], v_t_33667[24]]
    } : 0 : 0;
  },
  W9: async function (v_t_33668) {
    var v_i_33669;
    return 0 === v_t_33668 ? null : 1 === v_t_33668.Fi ? (v_i_33669 = await this.Z7.q7(new Uint8Array([0, 0, 0, 85, 5, v_t_33668.w0[0], v_t_33668.w0[1], v_t_33668.w0[2], v_t_33668.w0[3], 3]))) && 0 === v_i_33669[4] && (v_i_33669 = await this.Z7.q7(new Uint8Array([0, 0, 0, 82, 5, v_t_33668.w0[0], v_t_33668.w0[1], v_t_33668.w0[2], v_t_33668.w0[3], 2]))) && 0 === v_i_33669[4] ? scope.v_Cs_28003.X9(v_i_33669.subarray(6, 22)) : null : 2 === v_t_33668.Fi && null === (await this.DS(v_t_33668)) && (v_i_33669 = await this.vC(v_t_33668, 11, 0)) ? scope.v_Cs_28003.z9(v_i_33669.yc) : null;
  },
  BS: async function (v_i_33670) {
    var v_t_33671;
    return 2 === v_i_33670.Fi && (v_t_33671 = await this.DS(v_i_33670)) && v_t_33671.includes(3) ? {
      nS: v_i_33670,
      cS: async () => {
        var v_t_33672 = await this.vC(v_i_33670, 139, 0);
        return v_t_33672 ? v_t_33672.yc[12] << 8 | v_t_33672.yc[11] : null;
      },
      aS: async () => {
        await this.PS(), await this.J9();
      }
    } : null;
  },
  wC: async function (v_t_33673, v_i_33674, v_e_33675) {
    var v_n_33676 = v_e_33675 ? v_e_33675.length : 0,
      v_r_33677 = new Uint8Array(23 + v_n_33676),
      v_i_33674 = (v_r_33677[0] = 0, v_r_33677[1] = 0, v_r_33677[2] = 0, v_r_33677[3] = 113, v_r_33677[4] = 18 + v_n_33676, v_r_33677[5] = v_t_33673[0], v_r_33677[6] = v_t_33673[1], v_r_33677[7] = v_t_33673[2], v_r_33677[8] = v_t_33673[3], v_r_33677[9] = v_t_33673[4], v_r_33677[10] = v_t_33673[5], v_r_33677[11] = v_t_33673[6], v_r_33677[12] = v_t_33673[7], v_r_33677[13] = 10 + v_n_33676, v_r_33677[14] = v_i_33674, v_r_33677[15] = v_t_33673[0], v_r_33677[16] = v_t_33673[1], v_r_33677[17] = v_t_33673[2], v_r_33677[18] = v_t_33673[3], v_r_33677[19] = v_t_33673[4], v_r_33677[20] = v_t_33673[5], v_r_33677[21] = v_t_33673[6], v_r_33677[22] = v_t_33673[7], v_n_33676 && v_r_33677.set(v_e_33675, 23), await this.Z7.q7(v_r_33677));
    return v_i_33674 && 0 === v_i_33674[4] ? {
      gC: v_i_33674[7],
      yc: v_i_33674.subarray(16)
    } : null;
  },
  mC: async function (v_t_33678) {
    var v_t_33678 = await this.Z7.q7(new Uint8Array([0, 0, 0, 113, 14, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, v_t_33678 >> 8, 255 & v_t_33678, 1, 15]), 400);
    return v_t_33678 && 0 === v_t_33678[4] ? {
      pC: (v_t_33678 = v_t_33678.subarray(8))[16] << 8 | v_t_33678[17],
      w0: [v_t_33678[0], v_t_33678[1], v_t_33678[2], v_t_33678[3], v_t_33678[4], v_t_33678[5], v_t_33678[6], v_t_33678[7]],
      V9: [v_t_33678[8], v_t_33678[9], v_t_33678[10], v_t_33678[11], v_t_33678[12], v_t_33678[13], v_t_33678[14], v_t_33678[15]]
    } : 0;
  },
  vC: async function (v_t_33679, v_i_33680, v_e_33681) {
    var v_n_33682 = await this.wC(v_t_33679.w0, 6, new Uint8Array([1, 255 & v_i_33680, v_i_33680 >> 8 & 255, 1, 128, v_e_33681]));
    if (!v_n_33682) return null;
    if (v_n_33682.yc[0] || v_n_33682.yc[1]) return null;
    var v_r_33683 = v_n_33682.yc[0],
      v_s_33684 = [];
    for (let v_t_33685 = 0; v_t_33685 < v_r_33683; ++v_t_33685) v_s_33684.push(v_n_33682.yc[1 + 2 * v_t_33685] << 8 | v_n_33682.yc[2 + 2 * v_t_33685]);
    return {
      kC: v_n_33682.yc[0],
      bC: v_n_33682.yc[1],
      yc: v_n_33682.yc.subarray(3, 3 + 16 * v_n_33682.yc[2])
    };
  },
  yC: async function (v_t_33686, v_i_33687, v_e_33688, v_n_33689) {
    var v_r_33690;
    return 16 === v_n_33689.byteLength && ((v_r_33690 = new Uint8Array(22))[0] = 1, v_r_33690[1] = 255 & v_i_33687, v_r_33690[2] = v_i_33687 >> 8 & 255, v_r_33690[3] = 1, v_r_33690[4] = 128, v_r_33690[5] = v_e_33688, v_r_33690.set(v_n_33689, 6), printBuffer(v_r_33690), !!(v_i_33687 = await this.wC(v_t_33686.w0, 8, v_r_33690))) && !v_i_33687.yc[0] && !v_i_33687.yc[1];
  },
  AC: async function (v_t_33691, v_i_33692) {
    v_t_33691 = await this.wC(v_t_33691.w0, 10, new Uint8Array([255 & v_i_33692, v_i_33692 >> 8 & 255]));
    return v_t_33691 ? v_t_33691.yc[1] << 8 | v_t_33691.yc[0] : null;
  },
  DS: async function (v_t_33693) {
    var v_i_33694 = await this.wC(v_t_33693.w0, 12);
    if (!v_i_33694) return null;
    var v_e_33695 = v_i_33694.yc[0],
      v_n_33696 = [];
    for (let v_t_33697 = 0; v_t_33697 < v_e_33695; ++v_t_33697) v_n_33696.push(v_i_33694.yc[1 + 2 * v_t_33697] << 8 | v_i_33694.yc[2 + 2 * v_t_33697]);
    return v_n_33696;
  },
  SC: async function (v_t_33698) {
    var v_i_33699 = [];
    let v_e_33700 = 0;
    for (;;) {
      if (99 < v_e_33700) break;
      var v_n_33701 = await this.AC(v_t_33698, ++v_e_33700);
      null !== v_n_33701 && 65535 !== v_n_33701 && 62 & v_n_33701 && v_i_33699.push(v_n_33701);
    }
    return v_i_33699;
  }
}, scope.v_Cs_28003.X9 = function (v_t_33702) {
  return v_t_33702 && v_t_33702.buffer && 16 === v_t_33702.byteLength ? new Uint8Array([v_t_33702[6], v_t_33702[7], v_t_33702[8], v_t_33702[9], v_t_33702[10], v_t_33702[11], v_t_33702[12], v_t_33702[13], v_t_33702[14], v_t_33702[15]]) : null;
}, scope.v_Cs_28003.z9 = function (v_e_33703) {
  if (!v_e_33703 || !v_e_33703.buffer || 16 !== v_e_33703.byteLength) return null;
  for (let v_t_33707 = 0; v_t_33707 < v_e_33703.byteLength; ++v_t_33707) v_e_33703[v_t_33707] = 165 ^ scope.v_pi_27817[2048 + v_e_33703[v_t_33707]];
  var v_i_33704 = 7 + (v_e_33703[15] >>> 4);
  let v_n_33705 = v_e_33703[15] + 5 * v_i_33704;
  for (let v_t_33708 = 0; v_t_33708 < v_i_33704; ++v_t_33708) {
    v_n_33705 -= 5;
    let v_i_33709 = v_e_33703[14];
    for (let v_t_33710 = 0; v_t_33710 < 15; ++v_t_33710) {
      var v_r_33706 = v_e_33703[v_t_33710];
      v_e_33703[v_t_33710] = v_e_33703[v_t_33710] >>> 5 | (31 & v_i_33709) << 3, v_i_33709 = v_r_33706;
    }
    for (let v_t_33711 = 0; v_t_33711 < 15; ++v_t_33711) v_e_33703[v_t_33711] = 165 ^ scope.v_pi_27817[v_n_33705 % 8 * 256 + v_e_33703[v_t_33711]];
  }
  return new Uint8Array([v_e_33703[6], v_e_33703[7], v_e_33703[8], v_e_33703[9], v_e_33703[10], v_e_33703[11], v_e_33703[12], v_e_33703[13], v_e_33703[14], v_e_33703[15]]);
};
scope.v_Ts_28004 = 1;
scope.v_Is_28005 = 2;
scope.v_Ps_28006 = 0;
scope.v_Rs_28007.prototype = {
  ue: async function () {
    if (!(await this.M7.ue())) return !1;
    await this.M7.U9(0, this.K9), await this.M7.U9(1, this.Y9);
    let v_l_33716 = 0,
      v_c_33717 = !1;
    const v_u_33718 = async () => {
      let v_i_33719 = 0,
        v_e_33720 = 0,
        v_n_33721 = 0,
        v_r_33722 = !1;
      for (var v_t_33723 = performance.now(); this.Z9;) {
        var v_s_33724 = this.Z9,
          v_a_33725 = (v_n_33721 = 1 === this.US ? (v_i_33719 = 0, v_e_33720 = 0, 1 & v_l_33716 ? 0 : 255) : (v_i_33719 = 255, v_e_33720 = 255), await this.M7.O9());
        if (this.Z9 !== v_s_33724) break;
        if (0 === v_a_33725) break;
        if (10001 === v_a_33725) {
          await this.M7.PS(), 1 === this.US ? await this.M7.j9(2) : await this.M7.j9(3);
          break;
        }
        if (2 === v_a_33725.Fi) {
          var v_o_33726 = await this.M7.mC(1 === this.US ? 3 : 34996);
          if (!v_o_33726) break;
          v_a_33725.w0 = v_o_33726.w0, v_a_33725.V9 = v_o_33726.V9;
        }
        this.GS && this.GS(1), this.M7.T7(0, 0, 0);
        let v_t_33727 = null;
        if (1 === this.US ? v_t_33727 = await this.M7.BS(v_a_33725) : this.US === scope.v_Ps_28006 && (v_t_33727 = await this.M7.W9(v_a_33725)), this.Z9 !== v_s_33724) break;
        this.GS && this.GS(2), v_r_33722 = !0, v_n_33721 = null === v_t_33727 ? (this.Z9(scope.v_Is_28005), v_i_33719 = 255, v_e_33720 = 0) : (this.Z9(v_t_33727), v_i_33719 = 0, v_e_33720 = 0, 255), this.Z9 = void 0, this.GS = void 0, this.US === scope.v_Ps_28006 && (await this.M7.PS(), await this.M7.J9());
        break;
      }
      this.xC && (await this.M7.J9(), this.xC = !1);
      v_t_33723 = performance.now() - v_t_33723;
      (!v_c_33717 || v_i_33719 || v_e_33720 || v_n_33721) && this.M7.T7(v_i_33719, v_e_33720, v_n_33721), v_c_33717 = 0 === v_i_33719 && 0 === v_e_33720 && 0 === v_n_33721, ++v_l_33716, scope.v_uo_28102(v_u_33718, (v_r_33722 ? 2e3 : 500) - v_t_33723);
    };
    return scope.v_uo_28102(v_u_33718, 500), !0;
  },
  V7: function () {
    this.M7.V7();
  },
  HS: function (v_t_33728) {
    this.NS = v_t_33728;
  },
  jS: function () {
    this.NS && (this.NS.bS(!0), this.NS.kS(4), this.oS());
  },
  oS: function () {
    this.NS && this.NS.Ok({
      ES: ["電子決済使えません", "交通系     "],
      MS: 2
    });
  },
  eS: function (v_t_33729) {
    this.NS && this.NS.Ok({
      ES: ["カードをタッチしてください     ", "交通系 支払  ¥" + v_t_33729],
      MS: 1
    });
  },
  rS: function (v_t_33730) {
    this.NS && this.NS.Ok({
      ES: ["交通系支払処理中…", "交通系 支払  ¥" + v_t_33730],
      MS: 0
    });
  },
  sS: function () {
    this.NS && this.NS.Ok({
      ES: ["", "このカードはご利用できません     "],
      MS: 2
    });
  },
  lS: function (v_t_33731) {
    this.NS && (this.NS.mS(), this.NS.RS(), void 0 !== v_t_33731 ? this.NS.Ok({
      ES: ["", "交通系 残高  ¥" + v_t_33731],
      MS: 0
    }) : this.NS.Ok({
      ES: ["交通系 残高照会  カードをタッチしてください     ", ""],
      MS: 1
    }));
  },
  dS: function () {
    this.NS && this.NS.Ok();
  },
  hS: function () {
    this.NS && this.NS.LS();
  },
  _S: function (v_t_33732) {
    switch (v_t_33732) {
      case 1:
        this.M7.T7(255, 0, 0);
        break;
      case 2:
        this.M7.T7(0, 255, 0);
        break;
      case 3:
        this.M7.T7(0, 0, 255);
        break;
      case 4:
        this.M7.T7(255, 255, 255);
        break;
      default:
        this.M7.T7(0, 0, 0);
    }
  },
  R9: async function (v_t_33733) {
    return this._itn_isWaitingCard && this.C9(), this.GS = v_t_33733, this.US = scope.v_Ps_28006, (await this.M7.j9(3)) ? (this.GS && this.GS(0), new Promise(v_t_33734 => {
      this.Z9 = v_t_33734;
    })) : scope.v_Is_28005;
  },
  iS: async function (v_t_33735) {
    return this._itn_isWaitingCard && this.C9(), this.US = 1, this.GS = v_t_33735, (await this.M7.j9(2)) ? (this.GS && this.GS(0), new Promise(v_t_33736 => {
      this.Z9 = v_t_33736;
    })) : scope.v_Is_28005;
  },
  C9: function () {
    this.Z9 && !this.xC && (this.GS && this.GS(2), this.Z9(scope.v_Ts_28004), this.Z9 = void 0, this.GS = void 0, this.xC = !0);
  }
}, scope.v_Rs_28007.Q9 = "0000-0000-0000-0000-0000", scope.v_Rs_28007.Ky = "00000000000000000000", scope.v_Rs_28007.q9 = function (v_t_33737) {
  v_t_33737 = v_t_33737.replace(/\s/g, "");
  return 12 !== v_t_33737.length ? new Uint8Array([0, 0, 0, 0, 0, 0]) : new Uint8Array([scope.v_Ea_28065(v_t_33737.substr(0, 2)), scope.v_Ea_28065(v_t_33737.substr(2, 2)), scope.v_Ea_28065(v_t_33737.substr(4, 2)), scope.v_Ea_28065(v_t_33737.substr(6, 2)), scope.v_Ea_28065(v_t_33737.substr(8, 2)), scope.v_Ea_28065(v_t_33737.substr(10, 2))]);
}, scope.v_Rs_28007.E9 = function (v_t_33738, v_i_33739) {
  return v_t_33738 && v_t_33738.buffer && 10 === v_t_33738.byteLength ? v_i_33739 ? scope.v_Xa_28081(v_t_33738[0].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[1].toString(16), 2, "0") + "-" + scope.v_Xa_28081(v_t_33738[2].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[3].toString(16), 2, "0") + "-XXXX-XXXX-XXXX" : scope.v_Xa_28081(v_t_33738[0].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[1].toString(16), 2, "0") + "-" + scope.v_Xa_28081(v_t_33738[2].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[3].toString(16), 2, "0") + "-" + scope.v_Xa_28081(v_t_33738[4].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[5].toString(16), 2, "0") + "-" + scope.v_Xa_28081(v_t_33738[6].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[7].toString(16), 2, "0") + "-" + scope.v_Xa_28081(v_t_33738[8].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33738[9].toString(16), 2, "0") : scope.v_Rs_28007.Q9;
}, scope.v_Rs_28007.Py = function (v_t_33740) {
  return v_t_33740 && v_t_33740.buffer && 10 === v_t_33740.byteLength ? scope.v_Xa_28081(v_t_33740[0].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[1].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[2].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[3].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[4].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[5].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[6].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[7].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[8].toString(16), 2, "0") + scope.v_Xa_28081(v_t_33740[9].toString(16), 2, "0") : scope.v_Rs_28007.Ky;
}, scope.v_Ls_28008.prototype = {
  ue: async function () {
    return addEventListener("keydown", v_t_33741 => {
      v_t_33741.ctrlKey && 120 <= v_t_33741.keyCode && v_t_33741.keyCode <= 124 && this.Z9 && this.US === scope.v_Ps_28006 && (v_t_33741 = v_t_33741.keyCode - 120, this.Z9(this.ty[v_t_33741]), this.Z9 = void 0);
    }), !0;
  },
  V7: function () {},
  HS: function (v_t_33742) {},
  jS: function () {},
  oS: function () {},
  eS: function (v_t_33743) {},
  rS: function (v_t_33744) {},
  sS: function () {},
  lS: function (v_t_33745) {},
  dS: function () {},
  hS: function () {},
  _S: function (v_t_33746) {},
  R9: async function () {
    return this.US = scope.v_Ps_28006, new Promise(v_t_33747 => {
      this.Z9 = v_t_33747;
    });
  },
  iS: async function () {
    return this.US = 1, new Promise(v_t_33748 => {
      this.Z9 = v_t_33748;
    });
  },
  C9: function () {
    this.Z9 && (this.Z9(scope.v_Ts_28004), this.Z9 = void 0);
  }
};
scope.v_Ms_28009 = 0;
scope.v_Es_28010 = -1;
scope.v_Ds_28011 = -2;
scope.v_Fs_28012 = -10;
scope.v_Bs_28013.prototype = {
  Qy: async function (v_t_33752, v_i_33753, v_e_33754) {
    scope.v_x1_27888("UmgrNetworkClient: " + v_i_33753);
    try {
      return await (await fetch("http://" + this.Yy + ":" + this.P7 + v_i_33753, {
        method: v_t_33752,
        mode: "cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "X-cli": scope.v_G_27652,
          "X-cliver": scope.v_U_27653,
          "X-clitest": "false"
        },
        body: JSON.stringify(v_e_33754)
      })).json();
    } catch (v_t_33755) {
      return {
        result: "bad"
      };
    }
  },
  tA: function () {},
  Fy: async function (v_t_33756) {
    v_t_33756 = await this.Qy("POST", "/1/user/login", {
      code: v_t_33756,
      nw_token: this.qy
    });
    return "ok" === v_t_33756.result ? (this.Zy = v_t_33756.token, this.nx = v_t_33756.user_id, scope.v_Ms_28009) : "card_dup_login" === v_t_33756.result ? scope.v_Fs_28012 : scope.v_Es_28010;
  },
  Ry: async function () {
    return this.Zy ? (await this.Qy("POST", "/1/user/logout", {
      token: this.Zy,
      nw_token: this.qy
    }), this.Zy = null, scope.v_Ms_28009) : scope.v_Es_28010;
  },
  eA: function (v_t_33757, v_i_33758) {},
  Dy: async function () {
    var v_t_33759;
    return this.Zy ? "ok" === (v_t_33759 = await this.Qy("POST", "/1/umiguri/getProfile", {
      token: this.Zy,
      nw_token: this.qy
    })).result ? v_t_33759 : "card_not_found" === v_t_33759.result ? -11 : scope.v_Es_28010 : scope.v_Es_28010;
  },
  bA: async function (v_t_33760) {
    return this.Zy && "ok" === (v_t_33760 = await this.Qy("POST", "/1/umiguri/setProfile", {
      token: this.Zy,
      nw_token: this.qy,
      data: v_t_33760
    })).result ? v_t_33760 : scope.v_Es_28010;
  },
  iA: async function () {
    var v_t_33761;
    return this.Zy ? "ok" === (v_t_33761 = await this.Qy("POST", "/1/umiguri/getOptions", {
      token: this.Zy,
      nw_token: this.qy
    })).result ? v_t_33761 : "card_not_found" === v_t_33761.result ? -11 : scope.v_Es_28010 : scope.v_Es_28010;
  },
  nA: async function (v_t_33762) {
    return this.Zy && "ok" === (v_t_33762 = await this.Qy("POST", "/1/umiguri/setOptions", {
      token: this.Zy,
      nw_token: this.qy,
      data: v_t_33762
    })).result ? v_t_33762 : scope.v_Es_28010;
  },
  rA: async function () {
    var v_t_33763;
    return this.Zy ? "ok" === (v_t_33763 = await this.Qy("POST", "/1/umiguri/getRecords", {
      token: this.Zy,
      nw_token: this.qy
    })).result ? v_t_33763 : "card_not_found" === v_t_33763.result ? -11 : scope.v_Es_28010 : scope.v_Es_28010;
  },
  yA: async function (v_t_33764, v_i_33765, v_e_33766, v_n_33767, v_r_33768, v_s_33769) {
    return this.Zy && "ok" === (v_t_33764 = await this.Qy("POST", "/1/umiguri/setRecord", {
      token: this.Zy,
      nw_token: this.qy,
      data: {
        musicId: v_t_33764,
        musicDiff: v_i_33765,
        score: v_e_33766,
        flags: v_n_33767,
        playCount: v_r_33768,
        updatedAt: v_s_33769
      }
    })).result ? v_t_33764 : scope.v_Es_28010;
  },
  sA: async function () {
    var v_t_33770;
    return this.Zy ? "ok" === (v_t_33770 = await this.Qy("POST", "/1/umiguri/getCourseRecords", {
      token: this.Zy,
      nw_token: this.qy
    })).result ? v_t_33770 : "card_not_found" === v_t_33770.result ? -11 : scope.v_Es_28010 : scope.v_Es_28010;
  },
  AA: async function (v_t_33771, v_i_33772, v_e_33773, v_n_33774, v_r_33775) {
    return this.Zy && "ok" === (v_t_33771 = await this.Qy("POST", "/1/umiguri/setRecord", {
      token: this.Zy,
      nw_token: this.qy,
      data: {
        courseId: v_t_33771,
        score: v_i_33772,
        flags: v_e_33773,
        playCount: v_n_33774,
        updatedAt: v_r_33775
      }
    })).result ? v_t_33771 : scope.v_Es_28010;
  },
  SA: async function () {
    var v_t_33776;
    return this.Zy ? "ok" === (v_t_33776 = await this.Qy("POST", "/1/umiguri/getCharaStates", {
      token: this.Zy,
      nw_token: this.qy
    })).result ? v_t_33776 : "card_not_found" === v_t_33776.result ? -11 : scope.v_Es_28010 : scope.v_Es_28010;
  },
  xA: async function (v_t_33777, v_i_33778, v_e_33779, v_n_33780, v_r_33781) {
    return this.Zy && "ok" === (v_t_33777 = await this.Qy("POST", "/1/umiguri/setCharaState", {
      token: this.Zy,
      nw_token: this.qy,
      data: {
        charaId: v_t_33777,
        rank: v_i_33778,
        exp: v_e_33779,
        skillId: v_n_33780,
        transIdx: v_r_33781
      }
    })).result ? v_t_33777 : scope.v_Es_28010;
  },
  Ly: async function () {
    var v_i_33782 = await this.Dy();
    if (scope.v_Bs_28013.By(v_i_33782)) return !1;
    scope.handshake.On.Wp = v_i_33782.targetVersion, scope.handshake.On.zp = !1, scope.handshake.On.Kp = v_i_33782.termsAgreed, scope.handshake.rm.om = window.__umgForceProfile["name"] || v_i_33782.playerName, scope.handshake.rm.um = window.__umgForceProfile["level"] || v_i_33782.playerLevel, scope.handshake.rm.lm = window.__umgForceProfile["rating"] || v_i_33782.playerRating, scope.handshake.On.im = v_i_33782.charaId, scope.handshake.On.nI = v_i_33782.charaTransIdx, scope.handshake.On.qp = v_i_33782.nameplateId, scope.handshake.On.$p = v_i_33782.titleId, scope.handshake.On.Qp = v_i_33782.voiceId, scope.handshake.On.tm = v_i_33782.voiceLong, scope.handshake.On.q.ee = v_i_33782.lastMusicId, scope.handshake.On.q.te = v_i_33782.lastMusicDiff, scope.handshake.On.q.ie = v_i_33782.lastActivePlayLevel, scope.handshake.On.q.ne = v_i_33782.lastActiveLevelSelect, scope.handshake.On.q.HP = v_i_33782.lastActiveUltimaSelect, scope.handshake.On.q.pL = v_i_33782.musicListSort;
    for (let v_t_33783 = 0; v_t_33783 < 20; ++v_t_33783) scope.handshake.On.iI[v_t_33783] = v_i_33782.chatIds[v_t_33783];
    return !0;
  },
  Ey: async function () {
    return scope.handshake.On.Wp = 1101, scope.handshake.On.zp = !0, scope.handshake.On.Kp = !1, scope.handshake.rm.om = window.__umgForceProfile["name"] || "ＵＭＩＧＵＲＩ", scope.handshake.rm.um = window.__umgForceProfile["level"] || 1, scope.handshake.rm.lm = window.__umgForceProfile["rating"] || 0, scope.handshake.On.im = "UMIGURI/uni", scope.handshake.On.nI = 0, scope.handshake.On.qp = "_0000000_sys_default", scope.handshake.On.$p = "s_00000000", scope.handshake.On.Qp = "_0000000_sys_silence", scope.handshake.On.tm = !1, scope.handshake.On.q.ee = "", scope.handshake.On.q.te = 0, scope.handshake.On.q.ie = 0, scope.handshake.On.q.ne = !1, scope.handshake.On.q.HP = !1, scope.handshake.On.q.pL = 0, scope.handshake.On.iI = scope.v_Ji_27856.concat(), !0;
  },
  TA: async function () {
    var v_t_33784 = {
      targetVersion: scope.handshake.On.Wp,
      termsAgreed: scope.handshake.On.Kp,
      playerName: scope.handshake.rm.om,
      playerLevel: scope.handshake.rm.um,
      playerRating: scope.handshake.rm.lm,
      playerMaxRating: 0,
      charaId: scope.handshake.On.im,
      charaTransIdx: scope.handshake.On.nI,
      nameplateId: scope.handshake.On.qp,
      titleId: scope.handshake.On.$p,
      voiceId: scope.handshake.On.Qp,
      voiceLong: scope.handshake.On.tm,
      readNewsIdx: 0,
      lastMusicId: scope.handshake.On.q.ee,
      lastMusicDiff: scope.handshake.On.q.te,
      lastActivePlayLevel: scope.handshake.On.q.ie,
      lastActiveLevelSelect: scope.handshake.On.q.ne,
      lastActiveUltimaSelect: scope.handshake.On.q.HP,
      musicListSort: scope.handshake.On.q.pL,
      chatIds: scope.handshake.On.iI
    };
    return scope.v_Bs_28013.By(await this.bA(v_t_33784));
  },
  My: async function () {
    var v_t_33785 = await this.iA();
    return !scope.v_Bs_28013.By(v_t_33785) && (scope.handshake.On.re = scope.v_Pe_28064(v_t_33785.optionPreset), scope.handshake.On.ae.scrollSpeed = scope.v_Pe_28064(v_t_33785.scrollSpeed), scope.handshake.On.ae.mirror = scope.v_Pe_28064(v_t_33785.mirror), scope.handshake.On.ae.jdgTimingA = scope.v_Pe_28064(v_t_33785.jdgTimingA), scope.handshake.On.ae.jdgTimingB = scope.v_Pe_28064(v_t_33785.jdgTimingB), scope.handshake.On.ae.jdgTimingAir = scope.v_Pe_28064(v_t_33785.jdgTimingAir), scope.handshake.On.ae.showLevel = scope.v_Pe_28064(v_t_33785.showLevel), scope.handshake.On.ae.showRating = scope.v_Pe_28064(v_t_33785.showRating), scope.handshake.On.ae.showOverpower = scope.v_Pe_28064(v_t_33785.showOverpower), scope.handshake.On.ae.trackSkip = scope.v_Pe_28064(v_t_33785.trackSkip), scope.handshake.On.ae.autoPlay = scope.v_Pe_28064(v_t_33785.autoPlay), scope.handshake.On.ae.volGuide = scope.v_Pe_28064(v_t_33785.volGuide), scope.handshake.On.ae.tapSe = scope.v_Pe_28064(v_t_33785.tapSe), scope.handshake.On.ae.volTap = scope.v_Pe_28064(v_t_33785.volTap), scope.handshake.On.ae.volExTap = scope.v_Pe_28064(v_t_33785.volExTap), scope.handshake.On.ae.volSlide = scope.v_Pe_28064(v_t_33785.volSlide), scope.handshake.On.ae.volAir = scope.v_Pe_28064(v_t_33785.volAir), scope.handshake.On.ae.volFlick = scope.v_Pe_28064(v_t_33785.volFlick), scope.handshake.On.ae.volSkill = scope.v_Pe_28064(v_t_33785.volSkill), scope.handshake.On.ae.jTimingSeCond = scope.v_Pe_28064(v_t_33785.jTimingSeCond), scope.handshake.On.ae.judgeAnsPos = scope.v_Pe_28064(v_t_33785.judgeAnsPos), scope.handshake.On.ae.judgeAnsJcDetails = scope.v_Pe_28064(v_t_33785.judgeAnsJcDetails), scope.handshake.On.ae.judgeAnsJDetails = scope.v_Pe_28064(v_t_33785.judgeAnsJDetails), scope.handshake.On.ae.judgeAnsADetails = scope.v_Pe_28064(v_t_33785.judgeAnsADetails), scope.handshake.On.ae.fieldLines = scope.v_Pe_28064(v_t_33785.fieldLines), scope.handshake.On.ae.fieldColor = scope.v_Pe_28064(v_t_33785.fieldColor), scope.handshake.On.ae.fieldWall = scope.v_Pe_28064(v_t_33785.fieldWall), scope.handshake.On.ae.fieldInfo = scope.v_Pe_28064(v_t_33785.fieldInfo), scope.handshake.On.Xp.Yp = scope.v_Pe_28064(v_t_33785.masterVolume), !0);
  },
  lA: async function () {
    var v_t_33786 = {
      optionPreset: scope.handshake.On.re,
      scrollSpeed: scope.handshake.On.ae.scrollSpeed,
      mirror: scope.handshake.On.ae.mirror,
      jdgTimingA: scope.handshake.On.ae.jdgTimingA,
      jdgTimingB: scope.handshake.On.ae.jdgTimingB,
      jdgTimingAir: scope.handshake.On.ae.jdgTimingAir,
      showLevel: scope.handshake.On.ae.showLevel,
      showRating: scope.handshake.On.ae.showRating,
      showOverpower: scope.handshake.On.ae.showOverpower,
      trackSkip: scope.handshake.On.ae.trackSkip,
      autoPlay: scope.handshake.On.ae.autoPlay,
      volGuide: scope.handshake.On.ae.volGuide,
      tapSe: scope.handshake.On.ae.tapSe,
      volTap: scope.handshake.On.ae.volTap,
      volExTap: scope.handshake.On.ae.volExTap,
      volSlide: scope.handshake.On.ae.volSlide,
      volAir: scope.handshake.On.ae.volAir,
      volFlick: scope.handshake.On.ae.volFlick,
      volSkill: scope.handshake.On.ae.volSkill,
      jTimingSeCond: scope.handshake.On.ae.jTimingSeCond,
      judgeAnsPos: scope.handshake.On.ae.judgeAnsPos,
      judgeAnsJcDetails: scope.handshake.On.ae.judgeAnsJcDetails,
      judgeAnsJDetails: scope.handshake.On.ae.judgeAnsJDetails,
      judgeAnsADetails: scope.handshake.On.ae.judgeAnsADetails,
      fieldLines: scope.handshake.On.ae.fieldLines,
      fieldColor: scope.handshake.On.ae.fieldColor,
      fieldWall: scope.handshake.On.ae.fieldWall,
      fieldInfo: scope.handshake.On.ae.fieldInfo,
      masterVolume: scope.handshake.On.Xp.Yp
    };
    return scope.v_Bs_28013.By(await this.nA(v_t_33786));
  },
  CA: async function () {
    scope.handshake.Mm.clear();
    var v_t_33787 = await this.rA();
    if (scope.v_Bs_28013.By(v_t_33787)) return !1;
    for (const v_n_33790 of v_t_33787.table) {
      scope.handshake.Mm.has(v_n_33790.musicId) || scope.handshake.Mm.set(v_n_33790.musicId, new Map());
      var v_i_33788 = new scope.v_zr_27970(),
        v_e_33789 = (v_i_33788.Sr = scope.mathMin(scope.mathMax(scope.v_Pe_28064(v_n_33790.score), 0), 101e4), scope.v_Pe_28064(v_n_33790.flags));
      v_i_33788.ni = scope.v_Bs_28013.RA(v_e_33789), v_i_33788.R4 = scope.v_Bs_28013.RA(v_e_33789), v_i_33788.B4 = scope.v_Bs_28013.LA(v_e_33789), v_i_33788.M4 = scope.v_Bs_28013.IA(v_e_33789), v_i_33788.D4 = v_n_33790.updatedAt, v_i_33788.P4 = v_n_33790.playCount, v_i_33788.G4 = !0, scope.handshake.Mm.get(v_n_33790.musicId).set(v_n_33790.musicDiff, v_i_33788);
    }
  },
  EA: async function () {
    scope.handshake.Em.clear();
    var v_t_33791 = await this.sA();
    if (scope.v_Bs_28013.By(v_t_33791)) return !1;
    for (const v_n_33794 of v_t_33791.table) {
      var v_i_33792 = new scope.v_zr_27970(),
        v_e_33793 = (v_i_33792.Sr = scope.mathMin(scope.mathMax(scope.v_Pe_28064(v_n_33794.score), 0), 303e4), scope.v_Pe_28064(v_n_33794.flags));
      v_i_33792.ni = scope.v_Bs_28013.RA(v_e_33793), v_i_33792.R4 = scope.v_Bs_28013.RA(v_e_33793), v_i_33792.B4 = scope.v_Bs_28013.LA(v_e_33793), v_i_33792.D4 = v_n_33794.updatedAt, v_i_33792.P4 = v_n_33794.playCount, v_i_33792.G4 = !0, scope.handshake.Em.set(v_n_33794.courseId, v_i_33792);
    }
  },
  MA: async function () {
    scope.handshake.On.nm = {};
    var v_t_33795 = await this.SA();
    if (scope.v_Bs_28013.By(v_t_33795)) return !1;
    for (const v_e_33797 of v_t_33795.table) {
      var v_i_33796 = new scope.v_Mr_27954();
      v_i_33796.Pm = scope.v_Pe_28064(v_e_33797.rank), v_i_33796.Gm = scope.v_Pe_28064(v_e_33797.exp), v_i_33796.En = v_e_33797.skillId, v_i_33796.jm = scope.v_Pe_28064(v_e_33797.transIdx), scope.handshake.On.nm[v_e_33797.charaId] = v_i_33796;
    }
  }
}, scope.v_Bs_28013.By = function (v_t_33798) {
  return "number" == typeof v_t_33798 && v_t_33798 !== scope.v_Ms_28009;
}, scope.v_Bs_28013.PA = function (v_t_33799, v_i_33800, v_e_33801, v_n_33802) {
  return (v_t_33799 ? 1 : 0) | (v_i_33800 ? 2 : 0) | (v_e_33801 ? 4 : 0) | (15 & v_n_33802) << 16;
}, scope.v_Bs_28013.FA = function (v_t_33803) {
  return 1 & v_t_33803;
}, scope.v_Bs_28013.RA = function (v_t_33804) {
  return 2 & v_t_33804;
}, scope.v_Bs_28013.LA = function (v_t_33805) {
  return 4 & v_t_33805;
}, scope.v_Bs_28013.IA = function (v_t_33806) {
  return v_t_33806 >> 16 & 15;
};
scope.v_Ns_28014 = createV_Ns_28014(scope);
scope.v_Hs_28017.prototype = {
  sx: function () {
    return this.nx;
  },
  Fx: async function () {
    this.zS = null, this.tx = !0;
    var v_t_33840 = await this.NC();
    return v_t_33840 !== scope.v_Ms_28009 ? (this.zS = null, this.tx = !1, this.Nx = null, v_t_33840) : scope.v_Ms_28009;
  },
  Bx: async function (v_t_33841) {
    this.zS = v_t_33841, this.tx = !1;
    v_t_33841 = await this.NC();
    return v_t_33841 !== scope.v_Ms_28009 ? (this.zS = null, this.tx = !1, this.Nx = null, v_t_33841) : scope.v_Ms_28009;
  },
  Gx: async function () {
    if (!this.Gi()) return scope.v_Es_28010;
    for (this.zS = null, this.tx = !1, this.Nx = null, this.Ox = [], this.ix.clear(), this.Ix.clear(), this._x = 100, this.sP = scope.v__a_28043, this.aP = scope.v_ma_28049; this.BC.length;) this.BC.pop().aS();
    await this.LC.UC();
    return this.LC.aS(), this.LC = null, scope.v_Ms_28009;
  },
  Ux: async function (v_t_33842, v_i_33843) {
    return !this.Gi() || (this.Nx = null, await this.LC.HC(v_t_33842, v_i_33843)) ? scope.v_Es_28010 : (this.Nx = v_t_33842, this.jC(), scope.v_Ms_28009);
  },
  Dx: async function () {
    return !this.Gi() || (this.Nx = null, await this.LC.OC()) ? scope.v_Es_28010 : (this.Px = 0, scope.v_Ms_28009);
  },
  Sx: async function (v_t_33844, v_i_33845) {
    return !this.Gi() || (await this.LC.VC(v_t_33844, v_i_33845)) ? scope.v_Es_28010 : (this.jC(), scope.v_Ms_28009);
  },
  Ex: async function () {
    return !this.Gi() || (await this.LC.WC()) ? scope.v_Es_28010 : (this.Px = 0, scope.v_Ms_28009);
  },
  xx: async function (v_t_33846, v_i_33847) {
    return !this.Gi() || (await this.LC.XC(v_t_33846 ? scope.v_ha_28044 : scope.v__a_28043, v_i_33847)) ? scope.v_Es_28010 : scope.v_Ms_28009;
  },
  Lx: async function (v_t_33848) {
    return !this.Gi() || (await this.LC.XC(v_t_33848, 0)) ? scope.v_Es_28010 : scope.v_Ms_28009;
  },
  tP: async function (v_t_33849) {
    return !this.Gi() || (await this.LC.oP(v_t_33849)) ? scope.v_Es_28010 : scope.v_Ms_28009;
  },
  sC: function (v_t_33850, v_i_33851, v_e_33852, v_n_33853) {
    return this.Gi() ? (this.LC.zC(v_t_33850, v_i_33851, v_e_33852, v_n_33853), scope.v_Ms_28009) : scope.v_Es_28010;
  },
  rC: function (v_t_33854, v_i_33855) {
    return this.Gi() ? (this.LC.zC(4294967295, v_t_33854, v_i_33855, []), scope.v_Ms_28009) : scope.v_Es_28010;
  },
  QS: async function (v_t_33856) {
    return !this.Gi() || 65534 === (v_t_33856 = await this.LC.KC(v_t_33856)) ? null : (this._x = v_t_33856, this._x);
  },
  WP: async function () {
    return this.Gi() ? (await this.LC.tR(), scope.v_Ms_28009) : scope.v_Es_28010;
  },
  cI: async function (v_t_33857, v_i_33858) {
    var v_e_33859;
    return this.Gi() ? (v_e_33859 = performance.now(), this.RI + 1e3 > v_e_33859 ? -12 : (this.RI = v_e_33859, await this.LC.II(this.Px, v_t_33857, v_i_33858), scope.v_Ms_28009)) : scope.v_Es_28010;
  },
  lL: async function (v_t_33860) {
    var v_i_33861;
    return this.Gi() ? (v_i_33861 = performance.now(), this.RI + 1e3 > v_i_33861 ? -12 : (this.RI = v_i_33861, await this.LC.fL(this.Px, v_t_33860), scope.v_Ms_28009)) : scope.v_Es_28010;
  },
  fC: async function (v_i_33862) {
    await scope.v_fo_28103(100 * scope.mathRandom() + 16);
    let v_t_33863 = this.BC.find(v_t_33864 => v_t_33864.YC === v_i_33862);
    return v_t_33863 ? (await v_t_33863.qu()) ? v_t_33863 : null : (await (v_t_33863 = this.qC(v_i_33862, !1)).qu()) ? v_t_33863 : null;
  },
  uI: function (v_i_33865) {
    return -1 !== this.BC.findIndex(v_t_33866 => v_t_33866.YC === v_i_33865);
  },
  uC: function (v_t_33867) {
    v_t_33867 ? this.GC = this.Px : this.GC && (v_t_33867 = this.GC, this.GC = 0, this.ZC(v_t_33867));
  },
  qC: function (v_i_33868, v_t_33869) {
    v_t_33869 = new scope.v_Ia_28059(this.LC, v_i_33868, v_t_33869);
    return v_t_33869.$C = (v_i_33870 => {
      this.BC = this.BC.filter(v_t_33871 => v_t_33871 !== v_i_33870);
    }).bind(this), this.BC.push(v_t_33869), v_t_33869.PT.push(v_t_33872 => {
      v_t_33872 && this.iT(scope.v_aa_28037, {
        nx: v_i_33868
      });
    }), v_t_33869;
  },
  NC: async function () {
    if (this.LC = new scope.v_Pa_28060(), scope.v_Bs_28013.By(await this.LC.qu(this.Yy, this.P7, !1))) return this.QC();
    let v_t_33873;
    return (v_t_33873 = this.IC ? await this.LC.tT(this.IC.qy, this.IC.Zy, this.zS || 0) : await this.LC.tT("", "", this.zS || 0)).wP ? 1 === v_t_33873.wP ? this.QC(scope.v_Ds_28011) : 16 === v_t_33873.wP ? this.QC(-11) : 17 === v_t_33873.wP ? this.QC(scope.v_Fs_28012) : this.QC() : (this.zS = v_t_33873.zS || 0, this.nx = v_t_33873.nx || 0, this.LC.vx(this.iT.bind(this)), scope.audioFontHub.B3(), scope.v_Ms_28009);
  },
  QC: function (v_t_33874) {
    return this.LC && this.LC.aS(), this.LC = null, v_t_33874 || scope.v_Es_28010;
  },
  iR: async function (v_t_33875) {
    v_t_33875 = this.ix.get(v_t_33875);
    if (!v_t_33875) return !1;
    if (this.o1) return !(v_t_33875.QP = !0);
    v_t_33875.QP = !1, v_t_33875.ux = "cchara:" + v_t_33875.nx;
    var v_i_33876,
      v_e_33877 = await scope.v_oe_27649.fC(v_t_33875.nx);
    return !!v_e_33877 && !!(v_e_33877 = await v_e_33877._C(scope.v_ba_28052)) && ((v_i_33876 = scope.renderer.Yt.Zt[v_t_33875.ux]) && (delete scope.renderer.Yt.Zt[v_t_33875.ux], v_i_33876.free()), scope.renderer.Yt.Zt[v_t_33875.ux] = await scope.v_To_28118(v_e_33877.Yu, v_e_33877.eT & scope.v_xa_28056, !0), !0);
  },
  eR: async function (v_t_33878) {
    v_t_33878 = this.Ix.get(v_t_33878);
    if (!v_t_33878) return !1;
    if (this.o1) return !(v_t_33878.$P = !0);
    v_t_33878.$P = !1;
    var v_i_33879 = await scope.v_oe_27649.fC(v_t_33878.nx);
    return !!v_i_33879 && !!(v_i_33879 = await v_i_33879._C(scope.v_Sa_28054)) && (scope.renderer.Yt.Zt[v_t_33878.Jx] = await scope.v_To_28118(v_i_33879.Yu, v_i_33879.eT & scope.v_xa_28056, !1), !0);
  },
  iT: function (v_i_33880, v_e_33881) {
    if (v_i_33880 === scope.v_js_28019) {
      var v_t_33882 = v_e_33881.Hx;
      this.ix.set(v_e_33881.Hx.nx, v_t_33882), this.qC(v_e_33881.Hx.nx, !1), v_e_33881.Hx.nx !== scope.v_oe_27649.sx() && scope.v_Ia_28059.LI(v_e_33881.Hx.nx) && scope.v_Fe_28101(async () => {
        for (let v_t_33893 = 0; v_t_33893 < 10 && !this.fC(v_e_33881.Hx.nx); ++v_t_33893) await scope.v_fo_28103(500);
      });
    } else if (v_i_33880 === scope.v_aa_28037) v_e_33881.nx !== scope.v_oe_27649.sx() && this.iR(v_e_33881.nx);else if (v_i_33880 === scope.v_Vs_28021) {
      v_t_33882 = new scope.v_Gs_28015();
      v_t_33882.nx = v_e_33881.nx, v_t_33882.yx = v_e_33881.yx, v_t_33882.ng = v_e_33881.ng, v_t_33882.Jx = "cjkt:" + v_t_33882.yx, v_t_33882.Mx = v_e_33881.nx === scope.v_oe_27649.sx(), this.Ix.set(v_t_33882.yx, v_t_33882), v_e_33881.nx === scope.v_oe_27649.sx() ? (this.Px = v_e_33881.yx, this.jC(), this.nT(v_t_33882.nx)) : (scope.renderer.Yt.Zt[v_t_33882.Jx] = scope.renderer.Yt.Mf["textures\\txDummyJacket.dds"], this.eR(v_t_33882.yx));
    } else if (v_i_33880 === scope.v_Xs_28023) this.GC !== v_e_33881.yx && (this.nT(v_e_33881.nx), this.rT(v_e_33881.nx, v_e_33881.ru, v_e_33881.te), v_e_33881.nx === scope.v_oe_27649.sx()) && (this.Px = v_e_33881.yx);else if (v_i_33880 === scope.v_zs_28024) this.GC !== v_e_33881.yx && this.sT(v_e_33881.nx);else if (v_i_33880 === scope.v_Zs_28028) this.rT(v_e_33881.nx, v_e_33881.ru, v_e_33881.te);else if (v_i_33880 === scope.v_Ys_28026) this.sP = v_e_33881.n1, this.DC === v_e_33881.n1 && (v_e_33881.n1 === scope.v_ha_28044 && this.aT(), this.FC) && (this.FC(!0), this.FC = void 0);else if (v_i_33880 === scope.v_Qs_28030) this.aP = v_e_33881.n1, this.nP === v_e_33881.n1 && this.rP && (this.rP(!0), this.rP = void 0);else if (v_i_33880 === scope.v_qs_28027) {
      this.aC = v_e_33881.oT;
      for (var v_n_33883 of v_e_33881.lT) {
        var v_r_33884 = this.tC(v_n_33883.nx);
        v_r_33884 && (v_r_33884.Sr = v_n_33883.Sr, v_r_33884.ru = v_n_33883.ru);
      }
      if (2 <= this.Ox.length) {
        var v_s_33885 = this.Ox.concat();
        v_s_33885.sort((v_t_33898, v_i_33899) => v_i_33899.Sr - v_t_33898.Sr);
        let v_i_33894 = 0;
        for (let v_t_33900 = 0; v_t_33900 < v_s_33885.length; ++v_t_33900) v_t_33900 && v_s_33885[v_t_33900 - 1].Sr !== v_s_33885[v_t_33900].Sr && (v_i_33894 = v_t_33900), v_s_33885[v_t_33900].iC = v_i_33894;
        let v_e_33895 = 0,
          v_n_33896 = 0,
          v_r_33897 = 0;
        for (let v_t_33901 = 0; v_t_33901 < v_s_33885.length; ++v_t_33901) v_e_33895 !== v_s_33885[v_t_33901].iC && (v_r_33897 = v_n_33896, v_n_33896 = v_t_33901, v_e_33895 = v_s_33885[v_t_33901].iC), 0 === v_t_33901 ? (v_s_33885[v_t_33901].nC = v_s_33885[v_t_33901].Sr - v_s_33885[v_t_33901 + 1].Sr, v_s_33885[v_t_33901].eC = v_s_33885[v_t_33901 + 1].iC) : (v_s_33885[v_t_33901].nC = v_s_33885[v_r_33897].Sr - v_s_33885[v_t_33901].Sr, v_s_33885[v_t_33901].eC = v_s_33885[v_r_33897].iC);
      }
    } else if (v_i_33880 === scope.v_Ks_28025) {
      this.oC = v_e_33881.cT;
      for (var v_a_33886 of v_e_33881.lT) {
        var v_o_33887 = this.tC(v_a_33886.nx);
        v_o_33887 && (v_o_33887.Sr = v_a_33886.Sr);
      }
    } else if (v_i_33880 === scope.v_$s_28029) this._x = v_e_33881.uT;else if (v_i_33880 === scope.v_na_28034) {
      let v_t_33902 = !1;
      var v_l_33888,
        v_c_33889 = v_e_33881.fT;
      for (v_l_33888 of this.BC) if (v_l_33888.OI(v_i_33880, v_c_33889)) {
        v_t_33902 = !0;
        break;
      }
      if (!v_t_33902) return;
    } else if (v_i_33880 === scope.v_ra_28035) {
      var v_u_33890,
        v_f_33891 = v_e_33881.fT;
      for (v_u_33890 of this.BC) if (v_u_33890.OI(v_i_33880, v_f_33891)) break;
    } else v_i_33880 === scope.v_ta_28031 ? (v_t_33882 = v_e_33881.Hx).nx !== scope.v_oe_27649.sx() && (v___33892 = this.ix.get(v_t_33882.nx)) && (v___33892.TC = v_t_33882.TC, v___33892.MC = v_t_33882.MC, v___33892.RC = v_t_33882.RC, this.iR(v_t_33882.nx)) : v_i_33880 === scope.v_Js_28018 ? this.Gx() : v_i_33880 === scope.v_ea_28033 && scope.audioFontHub.cL(v_i_33880, v_e_33881);
    var v___33892;
    this.EC && this.EC(v_i_33880, v_e_33881), v_i_33880 === scope.v_Ws_28022 ? this.ZC(v_e_33881.yx) : v_i_33880 === scope.v_Os_28020 && ((v___33892 = this.ix.get(v_e_33881.nx)) && (v_t_33882 = scope.renderer.Yt.Zt[v___33892.ux]) && (delete scope.renderer.Yt.Zt[v___33892.ux], v_t_33882.free()), this.ix.delete(v_e_33881.nx), this.GC) && (v___33892 = this.Ox.find(v_t_33903 => v_t_33903.Ae === v_e_33881.nx)) && (v___33892.eP = !0), this.EC && this.EC(scope.v_sa_28036, {
      nx: v_e_33881.nx
    });
  },
  ZC: function (v_t_33904) {
    var v_i_33905, v_e_33906;
    this.GC !== v_t_33904 && ((v_i_33905 = this.Ix.get(v_t_33904)) && (v_e_33906 = scope.renderer.Yt.Zt[v_i_33905.Jx]) && (delete scope.renderer.Yt.Zt[v_i_33905.Jx], v_e_33906 !== scope.renderer.Yt.Mf["textures\\txDummyJacket.dds"]) && v_e_33906.free(), this.Ix.delete(v_t_33904), this.Px === v_t_33904) && (this.Px = 0, this.Nx = null, this.sP = scope.v__a_28043);
  },
  Gi: function () {
    return null !== this.zS;
  },
  vx: function (v_t_33907) {
    v_t_33907 && (this.EC = v_t_33907);
  },
  hx: function (v_t_33908) {
    v_t_33908 && this.EC === v_t_33908 && (this.EC = void 0);
  },
  jx: function (v_t_33909) {
    v_t_33909 = this.Ix.get(v_t_33909);
    return v_t_33909 ? ":/m" + v_t_33909.nx + "/" + v_t_33909.ng.w0 : null;
  },
  ZP: function (v_t_33910) {
    var v_i_33911 = this.o1;
    this.o1 = !!v_t_33910, v_i_33911 && !this.o1 && (this.ix.forEach((v_t_33912, v_i_33913) => {
      v_t_33912.QP && this.iR(v_t_33912.nx);
    }), this.Ix.forEach((v_t_33914, v_i_33915) => {
      v_t_33914.$P && this.eR(v_t_33914.yx);
    }));
  },
  Tx: function (v_t_33916) {
    return this.sP >= v_t_33916 || (this.DC = v_t_33916, new Promise(v_t_33917 => {
      this.FC = v_t_33917;
    }));
  },
  Cx: function (v_t_33918) {
    v_t_33918 === this.DC && (this.FC && this.FC(!1), this.FC = void 0);
  },
  iP: function (v_t_33919) {
    return this.aP >= v_t_33919 || (this.nP = v_t_33919, new Promise(v_t_33920 => {
      this.rP = v_t_33920;
    }));
  },
  lP: function (v_t_33921) {
    v_t_33921 === this.nP && (this.rP && this.rP(!1), this.rP = void 0);
  },
  aT: function () {
    this.aC = 0, this.oC = 0;
  },
  jC: function (v_t_33922) {
    this.Ox = [];
  },
  nT: function (v_t_33923) {
    this.Ox.push({
      Ae: v_t_33923,
      te: 0,
      Sr: 0,
      ru: 0,
      iC: 0,
      nC: 0,
      eC: 0,
      eP: !1
    });
  },
  sT: function (v_i_33924) {
    this.Ox = this.Ox.filter(v_t_33925 => v_t_33925.Ae !== v_i_33924);
  },
  rT: function (v_i_33926, v_t_33927, v_e_33928) {
    var v_n_33929 = this.Ox.find(v_t_33930 => v_t_33930.Ae === v_i_33926);
    v_n_33929 && (v_n_33929.ru = v_t_33927, v_n_33929.te = v_e_33928);
  },
  tC: function (v_i_33931) {
    return this.Ox.find(v_t_33932 => v_t_33932.Ae === v_i_33931);
  }
};
scope.v_Js_28018 = 129;
scope.v_js_28019 = 130;
scope.v_Os_28020 = 131;
scope.v_Vs_28021 = 132;
scope.v_Ws_28022 = 133;
scope.v_Xs_28023 = 134;
scope.v_zs_28024 = 135;
scope.v_Ks_28025 = 136;
scope.v_Ys_28026 = 137;
scope.v_qs_28027 = 138;
scope.v_Zs_28028 = 139;
scope.v_$s_28029 = 140;
scope.v_Qs_28030 = 141;
scope.v_ta_28031 = 143;
scope.v_ia_28032 = 144;
scope.v_ea_28033 = 145;
scope.v_na_28034 = 226;
scope.v_ra_28035 = 227;
scope.v_sa_28036 = 387;
scope.v_aa_28037 = 388;
scope.v_oa_28038 = 1;
scope.v_la_28039 = 16;
scope.v_ca_28040 = 32;
scope.v_ua_28041 = 64;
scope.v_fa_28042 = 2;
scope.v__a_28043 = 0;
scope.v_ha_28044 = 1;
scope.v_da_28045 = 2;
scope.v_va_28046 = 3;
scope.v_wa_28047 = 4;
scope.v_ga_28048 = 5;
scope.v_ma_28049 = 0;
scope.v_pa_28050 = 1;
scope.v_ka_28051 = 1;
scope.v_ba_28052 = 1;
scope.v_ya_28053 = 2;
scope.v_Sa_28054 = 3;
scope.v_Aa_28055 = 8;
scope.v_xa_28056 = 1;
scope.v_Ia_28059.prototype = {
  qu: function () {
    return new Promise(v_i_33949 => {
      this.L7 ? v_i_33949(!0) : this.PT.push(v_t_33950 => {
        v_i_33949(v_t_33950);
      });
    });
  },
  NT: async function (v_t_33951) {
    v_t_33951 = await this._C(v_t_33951);
    return v_t_33951 ? v_t_33951.Yu : null;
  },
  _C: function (v_n_33952, v_r_33953) {
    return new Promise(async v_i_33954 => {
      var v_t_33955 = ++this.IT;
      let v_e_33956 = new scope.v_Ca_28057(v_t_33955, v_n_33952, v_t_33957 => v_i_33954(v_t_33957.Yu ? v_t_33957 : null));
      v_e_33956.gT = v_r_33953, this.MT.set(v_t_33955, v_e_33956), this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(10), this.AT.GT.hg(v_t_33955), this.AT.GT.Ag(v_n_33952), (await this.AT.HT()) ? (this.MT.delete(v_t_33955), v_i_33954(null)) : scope.v_uo_28102(() => {
        v_e_33956.jP || (this.rR(v_e_33956), v_e_33956.A0 && v_e_33956.A0(v_e_33956));
      }, 5e3);
    });
  },
  rR: function (v_t_33958) {
    this.MT.has(v_t_33958.hT) && (this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(11), this.AT.GT.hg(v_t_33958.hT), this.MT.delete(v_t_33958.hT));
  },
  aS: function () {
    this.VI && this.kT.close();
  },
  WI: function () {
    this.VI && (this.kT = new RTCPeerConnection({
      iceServers: [{
        urls: "stun:stun.l.google.com:19302"
      }, {
        urls: "stun:stun1.l.google.com:19302"
      }, {
        urls: "stun:stun2.l.google.com:19302"
      }]
    }), this.bT = this.kT.createDataChannel("dat"), this.yT(), this.kT.onicecandidate = this.ST.bind(this), this.kT.onconnectionstatechange = this.xT.bind(this), this.kT.ondatachannel = this.CT.bind(this), this.kT.onnegotiationneeded = this.TT.bind(this));
  },
  TT: async function () {
    if (this.VI) try {
      this.RT = !0, await this.kT.setLocalDescription(), await this.jT();
    } catch (v_t_33959) {} finally {
      this.RT = !1;
    }
  },
  yT: function () {
    this.VI && (this.bT.onopen = this.JT.bind(this), this.bT.onclose = this.OT.bind(this), this.bT.onmessage = this.VT.bind(this));
  },
  jT: async function () {
    if (this.VI) return !!this.kT.localDescription && (this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(scope.v_ka_28051), this.AT.GT.i3("utf-8"), this.AT.GT.gg(this.kT.localDescription.type), this.AT.GT.gg(this.kT.localDescription.sdp), !(await this.AT.HT()));
  },
  WT: async function (v_t_33960) {
    if (this.VI) return this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(2), this.AT.GT.i3("utf-8"), this.AT.GT.gg(JSON.stringify(v_t_33960)), !(await this.AT.HT());
  },
  ST: function (v_t_33961) {
    this.VI && v_t_33961.candidate && this.WT(v_t_33961.candidate);
  },
  xT: function (v_t_33962) {
    this.VI && this.kT;
  },
  pP: function () {
    !this.VI || this.L7 || (scope.v_uo_28102(() => {
      if (this.PT.length) {
        for (var v_t_33963 of this.PT) v_t_33963(!0);
        this.PT = [];
      }
      this.AT.UT(114), this.AT.GT.hg(this.YC), this.AT.GT.Ag(4), this.AT.HT();
    }, 250), this.L7 = !0);
  },
  CT: function (v_t_33964) {
    this.VI && this.kT && (this.bT = v_t_33964.channel, this.yT());
  },
  JT: function (v_t_33965) {
    this.VI && this.pP();
  },
  OT: function (v_t_33966) {
    if (this.VI && (this.bT = null, this.kT = null, this.$C)) {
      if (this.PT.length) {
        for (var v_i_33967 of this.PT) v_i_33967(!1);
        this.PT = [];
      }
      this.$C(this), this.$C = null;
    }
  },
  VT: async function (v_t_33968) {
    this.VI && this.XI(v_t_33968.data, 0);
  },
  _T: function (v_t_33969, v_e_33970) {
    if (v_e_33970.v3() !== this.YC) return v_e_33970.y3(-4), !1;
    if (this.kT) {
      var v_i_33971 = v_e_33970.o3();
      if (v_i_33971 === scope.v_ka_28051) {
        v_e_33970.i3("utf-8");
        let v_t_33975 = v_e_33970.fg();
        var v_n_33972 = v_e_33970.fg(),
          v_r_33973 = "stable" === this.kT.signalingState || "have-local-offer" === this.kT.signalingState && this.cP,
          v_s_33974 = scope.v_oe_27649.sx() < this.YC;
        if ("offer" === v_t_33975 && !v_s_33974 && (this.RT || !v_r_33973)) return !0;
        this.cP = "answer" === v_t_33975, this.kT.setRemoteDescription({
          type: v_t_33975,
          sdp: v_n_33972
        }).then(async () => {
          this.cP = !1, "offer" === v_t_33975 && (await this.kT.setLocalDescription(), this.jT());
        });
      } else if (2 === v_i_33971) {
        v_e_33970.i3("utf-8");
        v_s_33974 = function (v_t_33976) {
          try {
            return JSON.parse(v_t_33976);
          } catch (v_t_33977) {
            return null;
          }
        }(v_e_33970.fg());
        if (v_s_33974) try {
          this.kT.addIceCandidate(new RTCIceCandidate(v_s_33974));
        } catch (v_t_33978) {
          "stable" !== this.kT.signalingState && "have-local-offer" === this.kT.signalingState && this.cP;
          v_r_33973 = scope.v_oe_27649.sx() < this.YC;
          "offer" !== type || v_r_33973 || this.RT;
        }
      } else if (10 === v_i_33971) {
        v_n_33972 = v_e_33970.v3(), v_s_33974 = v_e_33970.o3();
        this.ET.push(new scope.v_Ta_28058(v_n_33972, v_s_33974)), this.XT();
      } else if (11 === v_i_33971) {
        let v_i_33979 = v_e_33970.v3();
        v_r_33973 = this.ET.find(v_t_33980 => v_t_33980.hT === v_i_33979);
        v_r_33973 && (v_r_33973.nR = !0);
      } else 4 === v_i_33971 && scope.v_uo_28102(() => {
        this.XT();
      }, 250);
    }
    return !0;
  },
  OI: function (v_t_33981, v_e_33982) {
    if (v_t_33981 === scope.v_na_28034) {
      if (this.VI) return this._T(v_t_33981, v_e_33982);
      if (v_e_33982.v3() !== this.YC) return v_e_33982.y3(-4), !1;
      var v_i_33983 = v_e_33982.o3();
      if (10 === v_i_33983) {
        var v_n_33984 = v_e_33982.v3(),
          v_r_33985 = v_e_33982.o3();
        this.ET.push(new scope.v_Ta_28058(v_n_33984, v_r_33985)), this.XT();
      } else if (11 === v_i_33983) {
        let v_i_33986 = v_e_33982.v3();
        v_n_33984 = this.ET.find(v_t_33987 => v_t_33987.hT === v_i_33986);
        v_n_33984 && (v_n_33984.nR = !0);
      } else 4 === v_i_33983 && scope.v_uo_28102(() => {
        this.XT();
      }, 250);
      return !0;
    }
    if (v_t_33981 === scope.v_ra_28035) {
      if (v_e_33982.v3() !== this.YC) return v_e_33982.y3(-4), !1;
      this.XI(v_e_33982.Bp(), v_e_33982.U2);
    }
    return !1;
  },
  XI: async function (v_t_33988, v_i_33989) {
    if (void 0 !== v_t_33988.byteLength) {
      var v_e_33990 = new scope.v_Po_28121(v_t_33988),
        v_n_33991 = (v_e_33990.y3(v_i_33989), v_e_33990.v3()),
        v_r_33992 = v_e_33990.v3(),
        v_s_33993 = this.MT.get(v_n_33991);
      if (v_s_33993) {
        if (2 & v_r_33992) {
          if (!v_s_33993.jP) return void this.rR(v_s_33993);
          v_s_33993.wT.push(new Uint8Array(v_t_33988).subarray(8 + v_i_33989));
        } else 4 & v_r_33992 && (v_s_33993.jP = !0, v_e_33990.i3("utf-8"), v_s_33993.E3 = v_e_33990.v3(), v_s_33993.vT = v_e_33990.v3(), v_s_33993.eT = v_e_33990.v3(), v_s_33993.hC = v_e_33990.fg());
        v_s_33993.gT && v_s_33993.gT(v_s_33993.wT.length / v_s_33993.vT), 1 & v_r_33992 && (2 & v_r_33992 && (v_s_33993.Yu = new Blob(v_s_33993.wT, {
          type: "application/octet-stream"
        })), v_s_33993.Yu && 2 & v_s_33993.eT && (v_t_33988 = new scope.v_tc_28199(v_s_33993.Yu), v_s_33993.Yu = await v_t_33988.gR()), v_s_33993.wT = [], this.MT.delete(v_n_33991), v_s_33993.A0) && v_s_33993.A0(v_s_33993);
      }
    }
  },
  XT: async function () {
    this.VI && "open" !== this.bT.readyState || (await this.zT(), this.LT = !1);
  },
  zT: async function () {
    if (!this.LT && (this.LT = !0, this.ET.length)) {
      let v_t_33998 = 8200;
      this.VI || (v_t_33998 += 6);
      var v_n_33994,
        v_r_33995 = new scope.v_Po_28121(new Uint8Array(v_t_33998));
      for (v_r_33995.i3("utf-8"); this.ET.length;) {
        let v_i_33999 = this.ET[0],
          v_e_34000 = !1;
        if (v_i_33999.nR) ;else {
          if (null === v_i_33999.ed) v_e_34000 = !0;else if (null === v_i_33999.th) {
            let v_t_34001 = null;
            (v_t_34001 = v_i_33999.gi ? await v_i_33999.gi.pi(v_i_33999.ed) : await new Promise(v_t_34002 => scope.v_$r_27975.it(v_i_33999.ed, v_t_34002))) ? (16384 <= v_t_34001.byteLength && v_i_33999.mR ? (v_n_33994 = await new scope.v_tc_28199(new Uint8Array(v_t_34001)).pR(), v_i_33999.th = v_n_33994, v_i_33999.eT |= 2) : v_i_33999.th = new Uint8Array(v_t_34001), v_i_33999.vT = scope.mathCeil(v_i_33999.th.byteLength / 8192), this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(4), v_r_33995.hg(v_i_33999.th.byteLength), v_r_33995.hg(v_i_33999.vT), v_r_33995.hg(v_i_33999.eT), v_r_33995.gg(scope.v_Fa_28068(v_i_33999.ed)), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995)) : v_e_34000 = !0;
          }
          if (v_e_34000) this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(1), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995);else if (!v_i_33999.nR) for (; v_i_33999.mT < v_i_33999.vT;) {
            if (this.VI && this.bT.bufferedAmount > this.bT.bufferedAmountLowThreshold) return void (this.bT.onbufferedamountlow = () => {
              this.bT.onbufferedamountlow = null, this.XT();
            });
            var v_s_33996 = 8192 * v_i_33999.mT,
              v_a_33997 = scope.mathMin(8192 + v_s_33996, v_i_33999.th.byteLength);
            this.VI ? v_r_33995.ni() : (this.AT.zI(115, v_r_33995), v_r_33995.hg(this.YC)), v_r_33995.hg(v_i_33999.hT), v_r_33995.hg(2 | (v_a_33997 >= v_i_33999.th.byteLength ? 1 : 0)), v_r_33995.Mg(v_i_33999.th.subarray(v_s_33996, v_a_33997)), this.VI ? this.bT.send(v_r_33995.mg()) : await this.AT.KI(v_r_33995), ++v_i_33999.mT;
          }
        }
        this.ET.shift();
      }
    }
  }
}, scope.v_Ia_28059.LI = function (v_t_34003) {
  return scope.v_oe_27649.sx() < v_t_34003;
}, scope.v_Ia_28059.pT = function (v_i_34004, v_e_34005) {
  if (v_e_34005 === scope.v_ba_28052) {
    var v_n_34006 = scope.v_Lr_27953();
    v_n_34006 && (v_n_34006.Q1.gi ? (v_i_34004.ed = "image_" + v_n_34006.dC + "_sm", v_i_34004.gi = v_n_34006.Q1.gi, v_i_34004.eT |= scope.v_xa_28056, v_i_34004.mR = !0) : v_n_34006.Q1.vb ? (v_i_34004.ed = "/chara/" + v_n_34006.Q1.C0 + "/dds_" + v_n_34006.dC + "_sm.dds", v_i_34004.eT |= scope.v_xa_28056, v_i_34004.mR = !0) : v_i_34004.ed = "/chara/" + v_n_34006.Q1.C0 + "/image_" + v_n_34006.dC + "_sm.png");
  } else if (v_e_34005 === scope.v_Sa_28054 || v_e_34005 === scope.v_ya_28053 || v_e_34005 >= scope.v_Aa_28055 && v_e_34005 <= 13) {
    v_n_34006 = 0 === scope.v_oe_27649.Px ? void 0 : scope.v_oe_27649.Ix.get(scope.v_oe_27649.Px);
    if (scope.v_oe_27649.Gi() && v_n_34006 && v_n_34006.Mx && null !== scope.v_oe_27649.Nx) {
      let v_t_34008 = void 0;
      var v_r_34007 = scope.v_be_27857.Pp.find(v_t_34009 => v_t_34009.w0 === scope.v_oe_27649.Nx);
      if (v_r_34007) {
        switch (v_e_34005) {
          case scope.v_Sa_28054:
            v_t_34008 = v_r_34007.res_info.jacket;
            break;
          case scope.v_ya_28053:
            v_t_34008 = v_r_34007.res_info.wave;
            break;
          case scope.v_Aa_28055:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
            v_t_34008 = v_r_34007.L5[v_e_34005 - scope.v_Aa_28055];
        }
        void 0 !== v_t_34008 && (v_n_34006 = scope.v_Fa_28068(v_t_34008), v_i_34004.mR = -1 !== scope.v_ki_27818.indexOf(v_n_34006), v_e_34005 === scope.v_Sa_28054 && ".dds" === v_n_34006 && (v_i_34004.eT |= scope.v_xa_28056), v_i_34004.ed = "/music/" + v_r_34007.dir + "/" + v_t_34008);
      }
    }
  }
}, scope.v_Pa_28060.prototype = {
  qu: async function (v_t_34010, v_i_34011, v_e_34012) {
    let v_n_34013 = new WebSocket((v_e_34012 ? "wss" : "ws") + "://" + v_t_34010 + ":" + v_i_34011 + "/sock");
    v_n_34013.binaryType = "arraybuffer";
    v_e_34012 = await new Promise(v_t_34014 => {
      v_n_34013.onopen = () => v_t_34014(!0), v_n_34013.onerror = () => v_t_34014(!1);
    });
    return v_n_34013.onopen = void 0, v_n_34013.onerror = void 0, v_e_34012 ? (v_n_34013.onmessage = v_t_34015 => {
      var v_i_34016 = performance.now(),
        v_e_34017 = new scope.v_Po_28121(scope.v_ic_28200(new Uint8Array(v_t_34015.data), !1));
      if (!(v_t_34015.data.byteLength < 8)) {
        v_e_34017.v3();
        var v_n_34018 = v_e_34017.o3(),
          v_r_34019 = v_e_34017.o3();
        if (128 <= v_n_34018) this.iT(v_n_34018, v_e_34017);else {
          var v_s_34020 = v_e_34017.u3();
          for (const v_a_34021 of this.G7) if (v_a_34021.KT && v_n_34018 === v_a_34021.KT && v_r_34019 === v_a_34021.YT) {
            v_a_34021.KT = 0, 1 === v_n_34018 && (this.bL = v_i_34016 - v_a_34021.rr), v_a_34021.gP ? v_a_34021.gP({
              wP: v_s_34020,
              fT: v_e_34017
            }) : v_a_34021.K7 && v_a_34021.K7(v_s_34020);
            break;
          }
          this.G7.length && (this.G7 = this.G7.filter(v_t_34022 => v_t_34022.KT));
        }
      }
    }, v_n_34013.onclose = () => {
      this.SL && clearInterval(this.SL), this.SL = 0, this.DT && (alert("occurred network error"), location.reload());
    }, this.DT = v_n_34013, this.SL = setInterval(async () => {
      if (!this.yL) {
        this.bL = -1;
        for (const v_t_34023 of this.G7) 1 === v_t_34023.KT && (v_t_34023.KT = 0);
      }
      this.yL = !1, await this.AL(), this.yL = !0, scope.playerInfoBoard.kL(this.bL);
    }, 2e3), scope.v_Ms_28009) : scope.v_Es_28010;
  },
  aS: function () {
    var v_t_34024;
    this.DT && (v_t_34024 = this.DT, this.DT = null, v_t_34024.close());
  },
  UT: function (v_t_34025) {
    254 < ++this.FT && (this.FT = 0), this.BT = v_t_34025, this.GT.ni(), this.GT.hg(scope.v_ec_28201()), this.GT.Ag(this.BT), this.GT.Ag(this.FT);
  },
  rg: function () {
    this.DT.send(scope.v_ic_28200(this.GT.mg(), !0));
  },
  HT: async function () {
    return new Promise(v_t_34026 => {
      this.G7.push({
        KT: this.BT,
        YT: this.FT,
        rr: performance.now(),
        K7: v_t_34026
      }), this.rg();
    });
  },
  mP: async function () {
    return new Promise(v_t_34027 => {
      this.G7.push({
        KT: this.BT,
        YT: this.FT,
        rr: performance.now(),
        gP: v_t_34027
      }), this.rg();
    });
  },
  zI: function (v_t_34028, v_i_34029) {
    254 < ++this.FT && (this.FT = 0), this.BT = v_t_34028, v_i_34029.ni(), v_i_34029.hg(scope.v_ec_28201()), v_i_34029.Ag(this.BT), v_i_34029.Ag(this.FT);
  },
  KI: function (v_i_34030) {
    return new Promise(v_t_34031 => {
      this.G7.push({
        KT: this.BT,
        YT: this.FT,
        rr: performance.now(),
        K7: v_t_34031
      }), this.DT.send(scope.v_ic_28200(v_i_34030.mg(), !0));
    });
  },
  iT: function (v_t_34032, v_i_34033) {
    if (this.EC) if (v_t_34032 === scope.v_Js_28018) {
      var v_e_34034 = v_i_34033.v3();
      this.EC(v_t_34032, {
        ZT: v_e_34034
      });
    } else if (v_t_34032 === scope.v_Vs_28021) {
      var v_e_34034 = v_i_34033.v3(),
        v_n_34035 = v_i_34033.v3(),
        v_r_34036 = scope.v_Pa_28060.qT(v_i_34033);
      this.EC(v_t_34032, {
        yx: v_e_34034,
        nx: v_n_34035,
        ng: v_r_34036
      });
    } else if (v_t_34032 === scope.v_Ws_28022) {
      v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
      this.EC(v_t_34032, {
        yx: v_e_34034,
        ZT: v_n_34035
      });
    } else if (v_t_34032 === scope.v_js_28019) {
      v_r_34036 = new scope.v_Us_28016();
      v_i_34033.i3("utf-8"), v_r_34036.nx = v_i_34033.v3(), v_r_34036.om = v_i_34033.Ic(), v_r_34036.lm = v_i_34033.u3(), v_r_34036.CC = v_i_34033.u3(), v_r_34036.lx = v_i_34033.u3(), v_r_34036.ox = v_i_34033.Ic(), v_r_34036.TC = v_i_34033.Ic(), v_r_34036.MC = v_i_34033.u3(), v_r_34036.RC = v_i_34033.Ic(), this.EC(v_t_34032, {
        Hx: v_r_34036
      });
    } else if (v_t_34032 === scope.v_Os_28020) {
      v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
      this.EC(v_t_34032, {
        nx: v_e_34034,
        ZT: v_n_34035
      });
    } else if (v_t_34032 === scope.v_Xs_28023) {
      var v_r_34036 = v_i_34033.v3(),
        v_e_34034 = v_i_34033.v3(),
        v_n_34035 = v_i_34033.o3(),
        v_s_34037 = v_i_34033.o3();
      this.EC(v_t_34032, {
        yx: v_r_34036,
        nx: v_e_34034,
        ru: v_n_34035,
        te: v_s_34037
      });
    } else if (v_t_34032 === scope.v_zs_28024) {
      v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.v3(), v_n_34035 = v_i_34033.u3();
      this.EC(v_t_34032, {
        yx: v_r_34036,
        nx: v_e_34034,
        ZT: v_n_34035
      });
    } else if (v_t_34032 === scope.v_Zs_28028) {
      v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.o3(), v_n_34035 = v_i_34033.o3();
      this.EC(v_t_34032, {
        yx: v_s_34037,
        nx: v_r_34036,
        ru: v_e_34034,
        te: v_n_34035
      });
    } else if (v_t_34032 === scope.v_Ys_28026) {
      v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.u3();
      this.EC(v_t_34032, {
        yx: v_s_34037,
        n1: v_r_34036
      });
    } else if (v_t_34032 === scope.v_qs_28027) {
      v_i_34033.v3();
      var v_e_34034 = v_i_34033.v3(),
        v_a_34038 = v_i_34033.v3(),
        v_o_34039 = {
          oT: v_e_34034,
          lT: []
        };
      for (let v_t_34049 = 0; v_t_34049 < v_a_34038; ++v_t_34049) {
        var v_l_34040 = v_i_34033.v3(),
          v_c_34041 = v_i_34033.v3(),
          v_u_34042 = v_i_34033.v3();
        v_o_34039.lT.push({
          nx: v_l_34040,
          Sr: v_c_34041,
          ru: v_u_34042
        });
      }
      this.EC(v_t_34032, v_o_34039);
    } else if (v_t_34032 === scope.v_Ks_28025) {
      v_i_34033.v3();
      var v_n_34035 = v_i_34033.v3(),
        v_f_34043 = v_i_34033.v3(),
        v___34044 = {
          cT: v_n_34035,
          lT: []
        };
      for (let v_t_34050 = 0; v_t_34050 < v_f_34043; ++v_t_34050) {
        var v_h_34045 = v_i_34033.v3(),
          v_d_34046 = v_i_34033.v3();
        v___34044.lT.push({
          nx: v_h_34045,
          Sr: v_d_34046
        });
      }
      this.EC(v_t_34032, v___34044);
    } else {
      var v_v_34047, v_w_34048;
      v_t_34032 === scope.v_$s_28029 ? (v_s_34037 = v_i_34033.u3(), this.EC(v_t_34032, {
        uT: v_s_34037
      })) : v_t_34032 === scope.v_na_28034 || v_t_34032 === scope.v_ra_28035 ? this.EC(v_t_34032, {
        fT: v_i_34033
      }) : v_t_34032 === scope.v_Qs_28030 ? (v_r_34036 = v_i_34033.u3(), this.EC(v_t_34032, {
        n1: v_r_34036
      })) : v_t_34032 === scope.v_ta_28031 ? (v_e_34034 = new scope.v_Us_28016(), v_i_34033.i3("utf-8"), v_e_34034.nx = v_i_34033.v3(), v_e_34034.TC = v_i_34033.Ic(), v_e_34034.MC = v_i_34033.u3(), v_e_34034.RC = v_i_34033.Ic(), this.EC(v_t_34032, {
        Hx: v_e_34034
      })) : v_t_34032 === scope.v_ia_28032 ? (v_i_34033.i3("utf-8"), v_n_34035 = v_i_34033.v3(), v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.Ic(), this.EC(v_t_34032, {
        nx: v_n_34035,
        yx: v_s_34037,
        fI: v_r_34036,
        MI: v_e_34034
      })) : v_t_34032 === scope.v_ea_28033 && (v_i_34033.i3("utf-8"), v_n_34035 = v_i_34033.v3(), v_s_34037 = v_i_34033.v3(), v_r_34036 = v_i_34033.v3(), v_e_34034 = v_i_34033.v3(), v_v_34047 = v_i_34033.b3(), v_w_34048 = v_i_34033.Ic(), this.EC(v_t_34032, {
        tL: v_n_34035,
        nx: v_s_34037,
        yx: v_r_34036,
        _L: v_e_34034,
        iL: v_v_34047,
        MI: v_w_34048
      }));
    }
  },
  AL: async function () {
    this.UT(1), await this.HT();
  },
  tT: async function (v_t_34051, v_i_34052, v_e_34053) {
    var v_n_34054 = scope.v_Lr_27953();
    let v_r_34055 = scope.handshake.On.$p;
    var v_s_34056 = scope.v_be_27857.Hp.find(v_t_34057 => v_t_34057.id === v_r_34055),
      v_e_34053 = (this.UT(2), this.GT._g(20), this.GT.hg(v_e_34053), this.GT.vg(v_t_34051), this.GT.vg(v_i_34052), this.GT.vg(scope.handshake.rm.om), this.GT._g(scope.handshake.rm.lm), this.GT._g(scope.handshake.rm.lm), this.GT._g(v_s_34056 ? v_s_34056.rarity : 0), this.GT.vg(v_s_34056 ? v_s_34056.text : "NEW COMER"), this.GT.vg(v_n_34054 ? v_n_34054.Q1.ct[v_n_34054.dC] : "？？？"), this.GT._g(v_n_34054 ? v_n_34054.Ar.Vm : scope.v_gt_27748), this.GT.vg(v_n_34054 ? v_n_34054.Ar.ct : "？？？"), await this.mP());
    return v_e_34053.wP ? {
      wP: v_e_34053.wP
    } : (v_t_34051 = v_e_34053.fT.v3(), v_i_34052 = v_e_34053.fT.v3(), {
      wP: v_e_34053.wP,
      nx: v_t_34051,
      zS: v_i_34052
    });
  },
  UC: async function () {
    return this.UT(3), this.GT._g(0), this.HT();
  },
  HC: async function (v_i_34058, v_t_34059) {
    var v_e_34060 = scope.v_be_27857.Pp.find(v_t_34061 => v_t_34061.w0 === v_i_34058);
    return this.UT(4), this.GT._g(0), this.GT._g(v_t_34059), scope.v_Pa_28060.$T(this.GT, v_e_34060), this.HT();
  },
  OC: async function () {
    return this.UT(5), this.GT._g(0), this.HT();
  },
  VC: async function (v_t_34062, v_i_34063) {
    return this.UT(6), this.GT.hg(v_t_34062), this.GT._g(0), this.GT._g(v_i_34063), this.HT();
  },
  WC: async function () {
    return this.UT(7), this.GT._g(0), this.HT();
  },
  XC: async function (v_t_34064, v_i_34065) {
    return this.UT(19), this.GT._g(v_t_34064), this.GT._g(v_i_34065 || 0), this.HT();
  },
  oP: async function (v_t_34066) {
    return this.UT(22), this.GT._g(v_t_34066), this.HT();
  },
  zC: function (v_t_34067, v_e_34068, v_n_34069, v_r_34070) {
    if (v_r_34070.length) for (let v_i_34071 = 0; v_i_34071 < v_r_34070.length; v_i_34071 += 64) {
      this.UT(20), this.GT.hg(v_t_34067), this.GT.hg(v_i_34071 + 64 >= v_r_34070.length), this.GT.hg(v_e_34068), this.GT.hg(v_n_34069), this.GT.hg(scope.mathMin(64, v_r_34070.length - v_i_34071));
      for (let v_t_34072 = v_i_34071; v_t_34072 < v_i_34071 + 64 && v_t_34072 < v_r_34070.length; ++v_t_34072) this.GT.Lg(v_r_34070[v_t_34072][0]), this.GT.Ag(v_r_34070[v_t_34072][1] ? 1 : 0);
      this.rg();
    } else this.UT(20), this.GT.hg(v_t_34067), this.GT.hg(1), this.GT.hg(v_e_34068), this.GT.hg(v_n_34069), this.GT.hg(0), this.rg();
  },
  KC: async function (v_t_34073) {
    return this.UT(21), this.GT._g(v_t_34073), this.HT();
  },
  tR: async function () {
    var v_t_34074 = scope.v_Lr_27953();
    return this.UT(23), this.GT.vg(v_t_34074 ? v_t_34074.Q1.ct[v_t_34074.dC] : "？？？"), this.GT._g(v_t_34074 ? v_t_34074.Ar.Vm : scope.v_gt_27748), this.GT.vg(v_t_34074 ? v_t_34074.Ar.ct : "？？？"), this.HT();
  },
  II: async function (v_t_34075, v_i_34076, v_e_34077) {
    return this.UT(24), this.GT.hg(v_t_34075), this.GT.hg(v_i_34076), this.GT.vg(v_e_34077), this.HT();
  },
  fL: async function (v_t_34078, v_i_34079) {
    return this.UT(25), this.GT.hg(v_t_34078), this.GT.hg(0), this.GT.vg(v_i_34079), this.HT();
  },
  vx: function (v_t_34080) {
    this.EC = v_t_34080;
  }
}, scope.v_Pa_28060.$T = function (v_i_34081, v_e_34082) {
  var v_n_34083 = null !== v_e_34082.meta[4];
  let v_t_34084 = 0;
  if (v_n_34083) v_t_34084 = 1;else for (var v_r_34085 of v_e_34082.meta) v_r_34085 && ++v_t_34084;
  v_i_34081.vg(v_e_34082.w0), v_i_34081.vg(v_e_34082.lf), v_i_34081.vg(v_e_34082.C5), v_i_34081.vg(v_e_34082.y5), v_i_34081.dg(v_e_34082.m5), v_i_34081.dg(v_e_34082.S5), v_i_34081.Tg(v_e_34082.A5), v_i_34081.Ag(v_t_34084);
  for (let v_t_34086 = 0; v_t_34086 < v_e_34082.meta.length; ++v_t_34086) !v_e_34082.meta[v_t_34086] || v_n_34083 && 4 !== v_t_34086 || (v_i_34081.Ag(0), v_i_34081.Ag(v_t_34086), v_i_34081.vg(v_e_34082.meta[v_t_34086].b5), v_i_34081.vg(v_e_34082.meta[v_t_34086].k5), v_i_34081.vg(v_e_34082.meta[v_t_34086].T5));
}, scope.v_Pa_28060.qT = function (v_i_34087) {
  v_i_34087.i3("utf-8");
  var v_e_34088 = {
      w0: "",
      y5: "",
      lf: "",
      x5: "",
      I5: "",
      C5: "",
      A5: 0,
      dir: "",
      L5: ["", "", "", "", "", ""],
      meta: [null, null, null, null, null, null],
      res_info: {},
      m5: 0,
      S5: 0,
      QT: !0
    },
    v_n_34089 = (v_e_34088.w0 = v_i_34087.Ic(), v_e_34088.lf = v_i_34087.Ic(), v_e_34088.C5 = v_i_34087.Ic(), v_e_34088.y5 = v_i_34087.Ic(), v_e_34088.m5 = v_i_34087.b3(), v_e_34088.S5 = v_i_34087.b3(), v_e_34088.A5 = v_i_34087._3(), v_i_34087.o3());
  for (let v_t_34092 = 0; v_t_34092 < v_n_34089; ++v_t_34092) {
    var v_r_34090 = new scope.v_hr_27935(),
      v_s_34091 = (v_i_34087.o3(), v_i_34087.o3());
    v_r_34090.b5 = v_i_34087.Ic(), v_r_34090.k5 = v_i_34087.Ic(), v_r_34090.T5 = v_i_34087.Ic(), v_e_34088.meta[v_s_34091] = v_r_34090;
  }
  return v_e_34088;
};
scope.v_Re_28066 = parseFloat;
scope.v_Ua_28072.A8 = function (v_t_34163, v_i_34164) {
  return v_t_34163[0] >= v_i_34164[0] && v_t_34163[1] >= v_i_34164[1] && v_t_34163[0] + v_t_34163[2] <= v_i_34164[0] + v_i_34164[2] && v_t_34163[1] + v_t_34163[3] <= v_i_34164[1] + v_i_34164[3];
}, scope.v_Ua_28072.prototype = {
  I8: {
    C8: 0,
    T8: 1,
    L8: 2,
    M8: 3,
    E8: 4
  },
  P8: function (v_i_34165) {
    for (let v_t_34166 = 0; v_t_34166 < this.y8.length;) this.D8(this.y8[v_t_34166], v_i_34165) ? (this.y8[v_t_34166] = this.y8[this.y8.length - 1], this.y8.pop()) : ++v_t_34166;
    this.B8(), this.S8.push(v_i_34165);
  },
  G8: function (v_t_34167, v_i_34168, v_e_34169) {
    let v_n_34170 = [0, 0, 0, 0];
    switch (v_e_34169) {
      case this.I8.C8:
        v_n_34170 = this.N8(v_t_34167, v_i_34168);
        break;
      case this.I8.M8:
        v_n_34170 = this.j8(v_t_34167, v_i_34168);
        break;
      case this.I8.E8:
        v_n_34170 = this.U8(v_t_34167, v_i_34168);
        break;
      case this.I8.T8:
        v_n_34170 = this.H8(v_t_34167, v_i_34168);
        break;
      case this.I8.L8:
        v_n_34170 = this.V8(v_t_34167, v_i_34168);
    }
    return 0 !== v_n_34170[3] && this.P8(v_n_34170), v_n_34170;
  },
  j8: function (v_i_34171, v_e_34172) {
    var v_n_34173,
      v_r_34174 = [0, 0, 0, 0];
    let v_s_34175 = 1 / 0,
      v_a_34176 = 1 / 0;
    for (let v_t_34177 = 0; v_t_34177 < this.y8.length; ++v_t_34177) this.y8[v_t_34177][2] >= v_i_34171 && this.y8[v_t_34177][3] >= v_e_34172 && ((v_n_34173 = this.y8[v_t_34177][1] + v_e_34172) < v_s_34175 || v_n_34173 === v_s_34175 && this.y8[v_t_34177][0] < v_a_34176) && (v_r_34174[0] = this.y8[v_t_34177][0], v_r_34174[1] = this.y8[v_t_34177][1], v_r_34174[2] = v_i_34171, v_r_34174[3] = v_e_34172, v_s_34175 = v_n_34173, v_a_34176 = this.y8[v_t_34177][0]);
    return v_r_34174;
  },
  N8: function (v_i_34178, v_e_34179) {
    var v_n_34180,
      v_r_34181,
      v_s_34182,
      v_a_34183 = [0, 0, 0, 0];
    let v_o_34184 = 1 / 0,
      v_l_34185 = 1 / 0;
    for (let v_t_34186 = 0; v_t_34186 < this.y8.length; ++v_t_34186) this.y8[v_t_34186][2] >= v_i_34178 && this.y8[v_t_34186][3] >= v_e_34179 && (v_s_34182 = Math.abs(this.y8[v_t_34186][2] - v_i_34178), v_n_34180 = Math.abs(this.y8[v_t_34186][3] - v_e_34179), v_r_34181 = Math.min(v_s_34182, v_n_34180), v_s_34182 = Math.max(v_s_34182, v_n_34180), v_r_34181 < v_o_34184 || v_r_34181 === v_o_34184 && v_s_34182 < v_l_34185) && (v_a_34183[0] = this.y8[v_t_34186][0], v_a_34183[1] = this.y8[v_t_34186][1], v_a_34183[2] = v_i_34178, v_a_34183[3] = v_e_34179, v_o_34184 = v_r_34181, v_l_34185 = v_s_34182);
    return v_a_34183;
  },
  H8: function (v_i_34187, v_e_34188) {
    var v_n_34189,
      v_r_34190,
      v_s_34191,
      v_a_34192 = [0, 0, 0, 0];
    let v_o_34193 = 1 / 0,
      v_l_34194 = 1 / 0;
    for (let v_t_34195 = 0; v_t_34195 < this.y8.length; ++v_t_34195) this.y8[v_t_34195][2] >= v_i_34187 && this.y8[v_t_34195][3] >= v_e_34188 && (v_s_34191 = Math.abs(this.y8[v_t_34195][2] - v_i_34187), v_n_34189 = Math.abs(this.y8[v_t_34195][3] - v_e_34188), v_r_34190 = Math.min(v_s_34191, v_n_34189), (v_s_34191 = Math.max(v_s_34191, v_n_34189)) < v_l_34194 || v_s_34191 === v_l_34194 && v_r_34190 < v_o_34193) && (v_a_34192[0] = this.y8[v_t_34195][0], v_a_34192[1] = this.y8[v_t_34195][1], v_a_34192[2] = v_i_34187, v_a_34192[3] = v_e_34188, v_o_34193 = v_r_34190, v_l_34194 = v_s_34191);
    return v_a_34192;
  },
  V8: function (v_i_34196, v_e_34197) {
    var v_n_34198 = [0, 0, 0, 0];
    let v_r_34199 = 1 / 0,
      v_s_34200 = 1 / 0;
    for (let v_t_34204 = 0; v_t_34204 < this.y8.length; ++v_t_34204) {
      var v_a_34201,
        v_o_34202,
        v_l_34203 = this.y8[v_t_34204][2] * this.y8[v_t_34204][3] - v_i_34196 * v_e_34197;
      this.y8[v_t_34204][2] >= v_i_34196 && this.y8[v_t_34204][3] >= v_e_34197 && (v_o_34202 = Math.abs(this.y8[v_t_34204][2] - v_i_34196), v_a_34201 = Math.abs(this.y8[v_t_34204][3] - v_e_34197), v_o_34202 = Math.min(v_o_34202, v_a_34201), v_l_34203 < v_r_34199 || v_l_34203 === v_r_34199 && v_o_34202 < v_s_34200) && (v_n_34198[0] = this.y8[v_t_34204][0], v_n_34198[1] = this.y8[v_t_34204][1], v_n_34198[2] = v_i_34196, v_n_34198[3] = v_e_34197, v_s_34200 = v_o_34202, v_r_34199 = v_l_34203);
    }
    return v_n_34198;
  },
  J8: function (v_t_34205, v_i_34206, v_e_34207, v_n_34208) {
    return v_i_34206 < v_e_34207 || v_n_34208 < v_t_34205 ? 0 : Math.min(v_i_34206, v_n_34208) - Math.max(v_t_34205, v_e_34207);
  },
  O8(v_i_34209, v_e_34210, v_n_34211, v_r_34212) {
    let v_s_34213 = 0;
    0 !== v_i_34209 && v_i_34209 + v_n_34211 !== this.p8 || (v_s_34213 += v_r_34212), 0 !== v_e_34210 && v_e_34210 + v_r_34212 !== this.c5 || (v_s_34213 += v_n_34211);
    for (let v_t_34214 = 0; v_t_34214 < this.S8.length; ++v_t_34214) this.S8[v_t_34214][0] !== v_i_34209 + v_n_34211 && this.S8[v_t_34214][0] + this.S8[v_t_34214][2] !== v_i_34209 || (v_s_34213 += this.J8(this.S8[v_t_34214][1], this.S8[v_t_34214][1] + this.S8[v_t_34214][3], v_e_34210, v_e_34210 + v_r_34212)), this.S8[v_t_34214][1] != v_e_34210 + v_r_34212 && this.S8[v_t_34214][1] + this.S8[v_t_34214][3] != v_e_34210 || (v_s_34213 += this.J8(this.S8[v_t_34214][0], this.S8[v_t_34214][0] + this.S8[v_t_34214][2], v_i_34209, v_i_34209 + v_n_34211));
    return v_s_34213;
  },
  U8(v_i_34215, v_e_34216) {
    var v_n_34217,
      v_r_34218 = [0, 0, 0, 0];
    let v_s_34219 = -1;
    for (let v_t_34220 = 0; v_t_34220 < this.y8.length; ++v_t_34220) this.y8[v_t_34220][2] >= v_i_34215 && this.y8[v_t_34220][3] >= v_e_34216 && (v_n_34217 = this.O8(this.y8[v_t_34220][0], this.y8[v_t_34220][1], v_i_34215, v_e_34216)) > v_s_34219 && (v_r_34218[0] = this.y8[v_t_34220][0], v_r_34218[1] = this.y8[v_t_34220][1], v_r_34218[2] = v_i_34215, v_r_34218[3] = v_e_34216, v_s_34219 = v_n_34217);
    return v_r_34218;
  },
  D8(v_t_34221, v_i_34222) {
    var v_e_34223;
    return !(v_i_34222[0] >= v_t_34221[0] + v_t_34221[2] || v_i_34222[0] + v_i_34222[2] <= v_t_34221[0] || v_i_34222[1] >= v_t_34221[1] + v_t_34221[3] || v_i_34222[1] + v_i_34222[3] <= v_t_34221[1] || (this.k8 = this.b8.length, v_i_34222[0] < v_t_34221[0] + v_t_34221[2] && v_i_34222[0] + v_i_34222[2] > v_t_34221[0] && (v_i_34222[1] > v_t_34221[1] && v_i_34222[1] < v_t_34221[1] + v_t_34221[3] && ((v_e_34223 = v_t_34221.concat())[3] = v_i_34222[1] - v_e_34223[1], this.W8(v_e_34223)), v_i_34222[1] + v_i_34222[3] < v_t_34221[1] + v_t_34221[3]) && ((v_e_34223 = v_t_34221.concat())[1] = v_i_34222[1] + v_i_34222[3], v_e_34223[3] = v_t_34221[1] + v_t_34221[3] - (v_i_34222[1] + v_i_34222[3]), this.W8(v_e_34223)), v_i_34222[1] < v_t_34221[1] + v_t_34221[3] && v_i_34222[1] + v_i_34222[3] > v_t_34221[1] && (v_i_34222[0] > v_t_34221[0] && v_i_34222[0] < v_t_34221[0] + v_t_34221[2] && ((v_e_34223 = v_t_34221.concat())[2] = v_i_34222[0] - v_e_34223[0], this.W8(v_e_34223)), v_i_34222[0] + v_i_34222[2] < v_t_34221[0] + v_t_34221[2]) && ((v_e_34223 = v_t_34221.concat())[0] = v_i_34222[0] + v_i_34222[2], v_e_34223[2] = v_t_34221[0] + v_t_34221[2] - (v_i_34222[0] + v_i_34222[2]), this.W8(v_e_34223)), 0));
  },
  W8: function (v_i_34224) {
    v_i_34224[2] <= 0 || v_i_34224[3];
    for (let v_t_34225 = 0; v_t_34225 < this.k8;) {
      if (scope.v_Ua_28072.A8(v_i_34224, this.b8[v_t_34225])) return;
      scope.v_Ua_28072.A8(this.b8[v_t_34225], v_i_34224) ? (this.b8[v_t_34225] = this.b8[--this.k8], this.b8[this.k8] = this.b8[this.b8.length - 1], this.b8.pop()) : ++v_t_34225;
    }
    this.b8.push(v_i_34224);
  },
  B8: function () {
    for (let v_i_34226 = 0; v_i_34226 < this.y8.length; ++v_i_34226) for (let v_t_34227 = 0; v_t_34227 < this.b8.length;) scope.v_Ua_28072.A8(this.b8[v_t_34227], this.y8[v_i_34226]) ? (this.b8[v_t_34227] = this.b8[this.b8.length - 1], this.b8.pop()) : ++v_t_34227;
    for (const v_t_34228 of this.b8) this.y8.push(v_t_34228);
    this.b8 = [];
  }
}, scope.v_ja_28075.prototype = {
  Uv: function (v_t_34229) {
    return Number.isFinite(v_t_34229) ? v_t_34229 : 0 < v_t_34229 ? 17976931348623157e292 : 5e-324;
  },
  Vv: function (v_t_34230) {
    return ((this.Iv * v_t_34230 + this.Av) * v_t_34230 + this.Tv) * v_t_34230;
  },
  Jv: function (v_t_34231) {
    return this.Uv(((this.Lv * v_t_34231 + this.Rv) * v_t_34231 + this.Ev) * v_t_34231);
  },
  Ov: function (v_t_34232) {
    return (3 * this.Iv * v_t_34232 + 2 * this.Av) * v_t_34232 + this.Tv;
  },
  Wv: function (v_t_34233) {
    return this.Uv(this.Uv(this.Uv(3 * this.Lv) * v_t_34233 + this.Uv(2 * this.Rv)) * v_t_34233 + this.Ev);
  },
  Gv: function (v_t_34234, v_i_34235, v_e_34236, v_n_34237) {
    this.Tv = 3 * v_t_34234, this.Av = 3 * (v_e_34236 - v_t_34234) - this.Tv, this.Iv = 1 - this.Tv - this.Av, this.Ev = this.Uv(3 * v_i_34235), this.Rv = this.Uv(3 * (v_n_34237 - v_i_34235) - this.Ev), this.Lv = this.Uv(1 - this.Ev - this.Rv);
  },
  Nv: function (v_t_34238, v_i_34239, v_e_34240, v_n_34241) {
    this.Bv = 0 < v_t_34238 ? v_i_34239 / v_t_34238 : !v_i_34239 && 0 < v_e_34240 ? v_n_34241 / v_e_34240 : v_i_34239 || v_n_34241 ? 0 : 1, this.Mv = v_e_34240 < 1 ? (v_n_34241 - 1) / (v_e_34240 - 1) : 1 === v_n_34241 && v_t_34238 < 1 ? (v_i_34239 - 1) / (v_t_34238 - 1) : 1 === v_n_34241 && 1 === v_i_34239 ? 1 : 0;
  },
  jv: function (v_r_34242, v_s_34243) {
    if (this.Fv = 0, this.Dv = 1, !(0 <= v_r_34242 && v_r_34242 < 1 && 0 <= v_s_34243 && v_s_34243 <= 1)) {
      var v_r_34242 = 3 * this.Lv,
        v_s_34243 = 2 * this.Rv,
        v_a_34244 = this.Ev;
      if (!(scope.mathAbs(v_r_34242) < 1e-7 && scope.mathAbs(v_s_34243) < 1e-7)) {
        let v_t_34245 = 0,
          v_i_34246 = 0;
        if (scope.mathAbs(v_r_34242) < 1e-7) v_t_34245 = -v_a_34244 / v_s_34243;else {
          v_a_34244 = v_s_34243 * v_s_34243 - 4 * v_r_34242 * v_a_34244;
          if (v_a_34244 < 0) return;
          v_a_34244 = scope.mathSqrt(v_a_34244);
          v_t_34245 = (-v_s_34243 + v_a_34244) / (2 * v_r_34242), v_i_34246 = (-v_s_34243 - v_a_34244) / (2 * v_r_34242);
        }
        let v_e_34247 = 0,
          v_n_34248 = 0;
        0 < v_t_34245 && v_t_34245 < 1 && (v_e_34247 = this.Jv(v_t_34245)), 0 < v_i_34246 && v_i_34246 < 1 && (v_n_34248 = this.Jv(v_i_34246)), this.Fv = scope.mathMin(this.Fv, v_e_34247, v_n_34248), this.Dv = scope.mathMax(this.Dv, v_e_34247, v_n_34248);
      }
    }
  },
  Hv: function () {
    var v_i_34249 = 1 / (this.Pv.length - 1);
    for (let v_t_34250 = 0; v_t_34250 < this.Pv.length; ++v_t_34250) this.Pv[v_t_34250] = this.Vv(v_t_34250 * v_i_34249);
  },
  Kv: function (v_t_34251, v_i_34252) {
    let v_e_34253 = 0,
      v_n_34254 = 0,
      v_r_34255 = v_t_34251,
      v_s_34256 = 0,
      v_a_34257,
      v_o_34258 = 0;
    var v_l_34259 = 1 / (this.Pv.length - 1);
    for (v_o_34258 = 1; v_o_34258 < this.Pv.length; ++v_o_34258) if (v_t_34251 <= this.Pv[v_o_34258]) {
      v_n_34254 = v_l_34259 * v_o_34258, v_e_34253 = v_n_34254 - v_l_34259, v_r_34255 = v_e_34253 + (v_n_34254 - v_e_34253) * (v_t_34251 - this.Pv[v_o_34258 - 1]) / (this.Pv[v_o_34258] - this.Pv[v_o_34258 - 1]);
      break;
    }
    var v_c_34260 = scope.mathMin(1e-7, v_i_34252);
    for (v_o_34258 = 0; v_o_34258 < 4; ++v_o_34258) {
      if (v_s_34256 = this.Vv(v_r_34255) - v_t_34251, scope.mathAbs(v_s_34256) < v_c_34260) return v_r_34255;
      if (v_a_34257 = this.Ov(v_r_34255), scope.mathAbs(v_a_34257) < 1e-7) break;
      v_r_34255 -= v_s_34256 / v_a_34257;
    }
    if (!(scope.mathAbs(v_s_34256) < v_i_34252)) for (; v_e_34253 < v_n_34254;) {
      if (v_s_34256 = this.Vv(v_r_34255), scope.mathAbs(v_s_34256 - v_t_34251) < v_i_34252) return v_r_34255;
      v_t_34251 > v_s_34256 ? v_e_34253 = v_r_34255 : v_n_34254 = v_r_34255, v_r_34255 = .5 * (v_n_34254 + v_e_34253);
    }
    return v_r_34255;
  },
  Xv: function (v_t_34261, v_i_34262) {
    return v_t_34261 < 0 ? this.Uv(0 + this.Bv * v_t_34261) : 1 < v_t_34261 ? this.Uv(1 + this.Mv * (v_t_34261 - 1)) : this.Jv(this.Kv(v_t_34261, v_i_34262));
  },
  zv: function (v_t_34263) {
    return this.Xv(v_t_34263, 1e-7);
  },
  Yv: function (v_t_34264, v_i_34265) {
    v_t_34264 = this.Kv(scope.mathMin(scope.mathMax(v_t_34264, 0), 1), v_i_34265), v_i_34265 = this.Ov(v_t_34264), v_t_34264 = this.Wv(v_t_34264);
    return v_i_34265 || v_t_34264 ? this.Uv(v_t_34264 / v_i_34265) : 0;
  },
  Zv: function (v_t_34266) {
    return this.Yv(v_t_34266, 1e-7);
  },
  qv: function () {
    return this.Tv / 3;
  },
  $v: function () {
    return this.Ev / 3;
  },
  Qv: function () {
    return (this.Av + this.Tv) / 3 + this.qv();
  },
  eg: function () {
    return (this.Rv + this.Tv) / 3 + this.$v();
  },
  tg: function () {
    return v_t_34267 => this.zv(v_t_34267);
  }
}, scope.v_Va_28079(void 0), scope.v_Wa_28080(void 0);
scope.v_Za_28087 = scope.v_qa_28086;
scope.MeshBuffer.prototype = {
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
    v_a_34340.compilef(scope.glContext.DYNAMIC_DRAW, v_s_34339), this.xf = v_a_34340;
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
scope.v_vo_28106 = 542327876;
scope.v_wo_28107 = 827611204;
scope.v_go_28108 = 861165636;
scope.v_mo_28109 = 894720068;
scope.v_po_28110 = 33776;
scope.v_ko_28111 = 33778;
scope.v_bo_28112 = 33779;
scope.v_yo_28113 = 6407;
scope.v_So_28114 = 6408;
scope.v_Ao_28115 = 99;
scope.v_xo_28116 = 1;
scope.v_Co_28117 = 2;
scope.v_Po_28121.prototype = {
  i3: function (v_t_34414) {
    switch (this.o_ = "utf-8" === v_t_34414 ? scope.v_B_27650 : new TextDecoder(v_t_34414), v_t_34414) {
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
}, scope.v_Mo_28124.A3 = async function (v_t_34451) {
  var v_e_34452 = new scope.v_Po_28121(v_t_34451);
  if (809912146 !== v_e_34452.v3()) return null;
  if (1 !== v_e_34452.u3()) return null;
  var v_n_34453,
    v_i_34454,
    v_r_34455 = new scope.v_Mo_28124(),
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
  for (let v_t_34464 = 0; v_t_34464 < v_i_34454; ++v_t_34464) (v_c_34460 = new scope.v_Lo_28123()).c_ = v_e_34452.u3(), v_c_34460.c_ |= v_e_34452.o3() << 16, v_c_34460.u_ = v_e_34452.o3(), v_c_34460.ou = v_e_34452.l3(), v_c_34460.Oa = v_e_34452.l3(), v_c_34460.Le = v_e_34452.l3(), v_c_34460.G0 = v_e_34452.l3(), v_c_34460.f_ = v_e_34452.l3(), v_c_34460.__ = v_e_34452.l3(), v_c_34460.d_ = v_e_34452.l3(), v_r_34455.h_.set(v_c_34460.c_, v_c_34460);
  var v_u_34461,
    v_f_34462 = {
      wrapS: scope.glContext.CLAMP_TO_EDGE,
      wrapT: scope.glContext.CLAMP_TO_EDGE,
      format: scope.glContext.RGBA
    };
  for (let v_i_34465 = 0; v_i_34465 < v_n_34453; ++v_i_34465) {
    let v_t_34466;
    v_t_34466 = v_a_34457 ? await new scope.v_tc_28199(v_e_34452.I3(v_s_34456[v_i_34465].E3)).kR() : v_e_34452.I3(v_s_34456[v_i_34465].E3), v_u_34461 = new glRuntime.Texture(v_r_34455.k_, v_r_34455.b_, v_f_34462), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1), 6406 == v_s_34456[v_i_34465].T3 ? scope.glContext.texImage2D(scope.glContext.TEXTURE_2D, 0, v_s_34456[v_i_34465].T3, v_r_34455.k_, v_r_34455.b_, 0, v_s_34456[v_i_34465].T3, scope.glContext.UNSIGNED_BYTE, v_t_34466) : scope.glContext.compressedTexImage2D(scope.glContext.TEXTURE_2D, 0, v_s_34456[v_i_34465].T3, v_r_34455.k_, v_r_34455.b_, 0, v_t_34466), v_r_34455.Mf.push(v_u_34461);
  }
  return v_r_34455;
}, scope.v_Eo_28125.prototype = {
  B3: function () {
    this.x_ = scope.v_Yo_28141, this.I_ = scope.v_$o_28144, this.y_ = 1 / 0, this.C_ = 1 / 0, this.L_ = 0, this.E_ = 0, this.w_ = 0, this.F_ = !1, this.B_ = !1, this.M_ = !1;
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
}, scope.v_Fo_28127.prototype = {
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
          v_e_34493 && (v_g_34508 = this.U_.F_ ? this.N_[v_n_34494].D_.g_ * this.N_[v_n_34494].G_ * this.O_ : v_e_34493.d_ * this.N_[v_n_34494].G_ * this.O_, v___34503 += v_g_34508), this.U_.B_ && this.U_.M_ && v_i_34492 + (scope.v_Ro_28122(v_t_34491) ? 0 : v_g_34508) > this.U_.y_ && v_u_34501 < v_f_34502 && (v_v_34506 = !0);
        } else this.U_.B_ && (v_d_34505 = !0);
        v_d_34505 || v_v_34506 ? (v_v_34506 && (v_i_34492 += v_g_34508 - v_h_34504 - v___34503), this.z_ = scope.mathMax(v_i_34492, this.z_), this.U_.B_ && (this.X_.length <= v_o_34498 ? this.X_.push(v_i_34492) : this.X_[v_o_34498] = v_i_34492, this.Z_ += v_p_34489), v_v_34506 ? (this.q_.length <= v_w_34507 ? this.q_.push(v_f_34502) : this.q_[v_w_34507] = v_f_34502, ++v_w_34507, v_u_34501 = v_f_34502, v_i_34492 = v___34503, v___34503 = 0) : v_i_34492 = 0, ++v_o_34498) : (v_i_34492 += v_g_34508, this.U_.B_ && this.U_.M_ && (scope.v_Ro_28122(v_t_34491) || 4352 <= (v_m_34488 = v_t_34491) && v_m_34488 <= 4607 || 11904 <= v_m_34488 && v_m_34488 <= 12031 || 12032 <= v_m_34488 && v_m_34488 <= 12255 || 12288 <= v_m_34488 && v_m_34488 <= 12351 || 12352 <= v_m_34488 && v_m_34488 <= 12447 || 12448 <= v_m_34488 && v_m_34488 <= 12543 || 12544 <= v_m_34488 && v_m_34488 <= 12591 || 12592 <= v_m_34488 && v_m_34488 <= 12687 || 12688 <= v_m_34488 && v_m_34488 <= 12703 || 12704 <= v_m_34488 && v_m_34488 <= 12735 || 12736 <= v_m_34488 && v_m_34488 <= 12783 || 12784 <= v_m_34488 && v_m_34488 <= 12799 || 12800 <= v_m_34488 && v_m_34488 <= 13055 || 13056 <= v_m_34488 && v_m_34488 <= 13311 || 13312 <= v_m_34488 && v_m_34488 <= 19903 || 19968 <= v_m_34488 && v_m_34488 <= 40943 || 43360 <= v_m_34488 && v_m_34488 <= 43391 || 44032 <= v_m_34488 && v_m_34488 <= 55203 || 55216 <= v_m_34488 && v_m_34488 <= 55295 || 63744 <= v_m_34488 && v_m_34488 <= 64255 || 65072 <= v_m_34488 && v_m_34488 <= 65103 || 65280 <= v_m_34488 && v_m_34488 <= 65519 || 110592 <= v_m_34488 && v_m_34488 <= 110847 || 110848 <= v_m_34488 && v_m_34488 <= 110895 || 110896 <= v_m_34488 && v_m_34488 <= 110959 || 127488 <= v_m_34488 && v_m_34488 <= 127743 || 131072 <= v_m_34488 && v_m_34488 <= 173791 || 173824 <= v_m_34488 && v_m_34488 <= 177983 || 177984 <= v_m_34488 && v_m_34488 <= 178207 || 178208 <= v_m_34488 && v_m_34488 <= 183983 || 183984 <= v_m_34488 && v_m_34488 <= 191471 || 194560 <= v_m_34488 && v_m_34488 <= 195103 || 196608 <= v_m_34488 && v_m_34488 <= 201551) && (v_f_34502 = v_l_34499, v___34503 = 0, v_h_34504 = scope.v_Ro_28122(v_t_34491) ? v_g_34508 : 0));
      }
      this.U_.B_ && (this.X_.length <= v_o_34498 ? this.X_.push(v_i_34492) : this.X_[v_o_34498] = v_i_34492, this.Z_ += v_k_34490, this.U_.M_) && (this.q_.length <= v_w_34507 ? this.q_.push(-2) : this.q_[v_w_34507] = -2), this.z_ = scope.mathMax(this.z_, v_i_34492), this.Y_ = v_p_34489, this.K_ = !0;
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
    for (scope.v_j_27631.xform = this.U_.A_.m, v_F_34547 || this.U_.y_ === 1 / 0 || (this.U_.R3 === scope.v_qo_28142 ? (this.Z3(), 0 < (v_L_34541 = (this.U_.y_ - this.z_) / 2) && (v_s_34514[0] += v_L_34541)) : this.U_.R3 === scope.v_Zo_28143 && (this.Z3(), 0 < (v_L_34541 = this.U_.y_ - this.z_)) && (v_s_34514[0] += v_L_34541)), v_F_34547 && this.U_.C_ !== 1 / 0 && (this.U_.I_ === scope.v_Qo_28145 ? (this.Z3(), 0 < (v_L_34541 = (this.U_.C_ - this.Z_) / 2) && (v_s_34514[1] += v_L_34541)) : this.U_.I_ === scope.v_tl_28146 && (this.Z3(), 0 < (v_L_34541 = this.U_.C_ - this.Z_)) && (v_s_34514[1] += v_L_34541)), v_o_34516 = 0; v_o_34516 < this.N_.length; ++v_o_34516) for (v_m_34527 = this.N_[v_o_34516], v_l_34517 = 0; v_l_34517 < v_m_34527.D_.Mf.length; ++v_l_34517) {
      for (v_a_34515[0] = v_s_34514[0] + this.U_.L_, v_a_34515[1] = v_s_34514[1] + this.U_.E_, v_a_34515[2] = v_s_34514[2], v_u_34519 = 0, v_E_34543 = 0, v_f_34520 = !1, v_d_34523 = 0, v_N_34544 = 0, v_F_34547 && this.U_.y_ !== 1 / 0 && (this.U_.R3 === scope.v_qo_28142 ? 0 < (v_L_34541 = (this.U_.y_ - this.X_[v_E_34543]) / 2) && (v_a_34515[0] += v_L_34541) : this.U_.R3 === scope.v_Zo_28143 && 0 < (v_L_34541 = this.U_.y_ - this.X_[v_E_34543]) && (v_a_34515[0] += v_L_34541)), v_c_34518 = 0; v_c_34518 < this.V_.length; ++v_c_34518) if (v_v_34524 = 55296 <= (v___34521 = this.V_.charCodeAt(v_c_34518)) && v___34521 <= 56319, v_w_34525 = 56320 <= v___34521 && v___34521 <= 57343, v_D_34545 = v_F_34547 && v_U_34548 && this.q_[v_N_34544] === v_c_34518 - 1, (v_v_34524 || v_w_34525 || 10 !== v___34521 && !v_D_34545 || (++v_E_34543, v_D_34545 && ++v_N_34544, v_F_34547 && (v_a_34515[0] = v_s_34514[0] + this.U_.L_, v_a_34515[1] += v_H_34549, this.U_.y_ !== 1 / 0) && (this.U_.R3 === scope.v_qo_28142 ? 0 < (v_L_34541 = (this.U_.y_ - this.X_[v_E_34543]) / 2) && (v_a_34515[0] += v_L_34541) : this.U_.R3 === scope.v_Zo_28143 && 0 < (v_L_34541 = this.U_.y_ - this.X_[v_E_34543]) && (v_a_34515[0] += v_L_34541)), v_D_34545)) && !(v_a_34515[0] - v_s_34514[0] > this.U_.y_)) if (v_v_34524) v_d_34523 = v___34521;else {
        for (v_d_34523 && (v_w_34525 && (v___34521 = 65536 + 1024 * (v_d_34523 - 55296) + (v___34521 - 56320)), v_d_34523 = 0), v_g_34526 = !1, v_k_34529 = void 0, v_p_34528 = void 0, v_h_34522 = 0; v_h_34522 < this.N_.length; ++v_h_34522) if (!(this.N_[v_h_34522].R_ > v___34521 || this.N_[v_h_34522].P_ < v___34521) && (v_k_34529 = this.N_[v_h_34522].D_.h_.get(v___34521))) {
          v_p_34528 = this.N_[v_h_34522], v_g_34526 = v_p_34528.D_ === v_m_34527.D_;
          break;
        }
        if (v_k_34529 && v_p_34528) {
          if (v_B_34530 = v_G_34546 ? v_p_34528.D_.g_ * v_P_34539 * v_p_34528.G_ : v_k_34529.d_ * v_P_34539 * v_p_34528.G_, v_b_34531 = v_a_34515[0] + v_k_34529.f_ * v_P_34539 * v_p_34528.G_, v_y_34532 = v_a_34515[0] + (v_k_34529.f_ + v_k_34529.Le) * v_P_34539 * v_p_34528.G_, v_S_34533 = v_a_34515[1] + (v_k_34529.__ + v_k_34529.G0) * v_R_34540 * v_p_34528.j_, v_A_34534 = v_a_34515[1] + v_k_34529.__ * v_R_34540 * v_p_34528.j_, v_G_34546 && (v_L_34541 = (v_p_34528.D_.g_ - v_k_34529.d_) * v_P_34539 * v_p_34528.G_ * .5, v_b_34531 += v_L_34541, v_y_34532 += v_L_34541), (v_g_34526 = 32 === v___34521 || v_y_34532 < 0 || v_b_34531 > this.U_.y_ || v_F_34547 && (v_S_34533 < 0 || v_A_34534 > this.U_.C_) ? !1 : v_g_34526) && v_k_34529.u_ === v_l_34517) {
            if (v_x_34535 = 0, v_C_34536 = 0, v_T_34537 = 0, v_I_34538 = 0, v_b_34531 < v_s_34514[0] ? (v_x_34535 = v_k_34529.Le * scope.v_Ya_28085(v_b_34531, v_y_34532, v_s_34514[0]), v_b_34531 = v_s_34514[0]) : v_y_34532 > v_s_34514[0] + this.U_.y_ && (v_C_34536 = v_k_34529.Le * scope.v_Ya_28085(v_y_34532, v_b_34531, v_s_34514[0] + this.U_.y_), v_y_34532 = v_s_34514[0] + this.U_.y_), v_F_34547 && (v_A_34534 < v_s_34514[1] ? (v_T_34537 = v_k_34529.G0 * scope.v_Ya_28085(v_A_34534, v_S_34533, v_s_34514[1]), v_A_34534 = v_s_34514[1]) : v_S_34533 > v_s_34514[1] + this.U_.C_ && (v_I_34538 = v_k_34529.G0 * scope.v_Ya_28085(v_S_34533, v_A_34534, v_s_34514[1] + this.U_.C_), v_S_34533 = v_s_34514[1] + this.U_.C_)), v_e_34511[4 * v_u_34519 * 3 + 0] = v_b_34531, v_e_34511[4 * v_u_34519 * 3 + 1] = v_S_34533, v_e_34511[4 * v_u_34519 * 3 + 3] = v_y_34532, v_e_34511[4 * v_u_34519 * 3 + 4] = v_S_34533, v_e_34511[4 * v_u_34519 * 3 + 6] = v_b_34531, v_e_34511[4 * v_u_34519 * 3 + 7] = v_A_34534, v_e_34511[4 * v_u_34519 * 3 + 9] = v_y_34532, v_e_34511[4 * v_u_34519 * 3 + 10] = v_A_34534, v_r_34513[4 * v_u_34519 * 2 + 0] = (v_k_34529.ou + v_x_34535) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 1] = (v_k_34529.Oa + v_k_34529.G0 - v_I_34538) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 2] = (v_k_34529.ou + v_k_34529.Le - v_C_34536) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 3] = (v_k_34529.Oa + v_k_34529.G0 - v_I_34538) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 4] = (v_k_34529.ou + v_x_34535) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 5] = (v_k_34529.Oa + v_T_34537) / v_p_34528.D_.b_, v_r_34513[4 * v_u_34519 * 2 + 6] = (v_k_34529.ou + v_k_34529.Le - v_C_34536) / v_p_34528.D_.k_, v_r_34513[4 * v_u_34519 * 2 + 7] = (v_k_34529.Oa + v_T_34537) / v_p_34528.D_.b_, this.W_ && 0 < this.W_.Q_[v_c_34518]) {
              if (v_M_34542 = this.W_.Q_[v_c_34518] - 1, v_J_34550) for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = this.W_.e3[v_M_34542][0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = this.W_.e3[v_M_34542][1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = this.W_.e3[v_M_34542][2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3 + 4 * v_h_34522] * this.W_.e3[v_M_34542][3];else for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = this.W_.e3[v_M_34542][0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = this.W_.e3[v_M_34542][1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = this.W_.e3[v_M_34542][2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3] * this.W_.e3[v_M_34542][3];
            } else if (v_J_34550) for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = v_i_34510[0 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = v_i_34510[1 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = v_i_34510[2 + 4 * v_h_34522], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3 + 4 * v_h_34522];else for (v_h_34522 = 0; v_h_34522 < 4; ++v_h_34522) v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522] = v_i_34510[0], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 1] = v_i_34510[1], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 2] = v_i_34510[2], v_n_34512[4 * v_u_34519 * 4 + 4 * v_h_34522 + 3] = v_i_34510[3];
            2048 <= ++v_u_34519 && (this.U_.xf.jl("vertices", 4 * v_u_34519 * 3), this.U_.xf.jl("colors", 4 * v_u_34519 * 4), this.U_.xf.jl("coords", 4 * v_u_34519 * 2), v_f_34520 || (v_m_34527.D_.Mf[v_l_34517].bind(0), v_f_34520 = !0), (v_m_34527.D_.v_ && this.H_ ? this.H_ : this.Rf).uniforms(scope.v_j_27631).drawBuffers(this.U_.xf.Nl(), this.U_.xf.Yl(), scope.glContext.TRIANGLES, 6 * v_u_34519), v_u_34519 = 0);
          }
          v_a_34515[0] += v_B_34530;
        }
      }
      0 < v_u_34519 && (this.U_.xf.jl("vertices", 4 * v_u_34519 * 3), this.U_.xf.jl("colors", 4 * v_u_34519 * 4), this.U_.xf.jl("coords", 4 * v_u_34519 * 2), v_f_34520 || (v_m_34527.D_.Mf[v_l_34517].bind(0), v_f_34520 = !0), (v_m_34527.D_.v_ && this.H_ ? this.H_ : this.Rf).uniforms(scope.v_j_27631).drawBuffers(this.U_.xf.Nl(), this.U_.xf.Yl(), scope.glContext.TRIANGLES, 6 * v_u_34519), v_u_34519 = 0);
    }
  }
}, scope.v_Bo_28128.prototype = {
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
        8 === v_e_34553[1].length && (v_t_34564 = scope.v_Ea_28065(v_e_34553[1])), 6 === v_e_34553[1].length ? v_t_34564 = scope.v_Ea_28065(v_e_34553[1]) << 8 | 255 : 3 === v_e_34553[1].length && (v_t_34564 = (15 & (v_t_34564 = scope.v_Ea_28065(v_e_34553[1]))) << 8 | (15 & v_t_34564) << 12 | (240 & v_t_34564) << 12 | (240 & v_t_34564) << 16 | (3840 & v_t_34564) << 16 | (3840 & v_t_34564) << 20 | 255), v_n_34554.has(v_t_34564) ? v_r_34555 = v_n_34554.get(v_t_34564) : (v_r_34555 = v_n_34554.size + 1, v_n_34554.set(v_t_34564, v_r_34555));
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
}, scope.v_No_28129.prototype = {
  Mt: function () {
    this.K8.clearRect(0, 0, this.Le, this.G0), this.Q8 = new scope.v_Ua_28072(this.Le, this.G0), this.X8 = new Map(), this.Mk = !0, this.Rk[0] = 0, this.Rk[1] = 0, this.Rk[2] = this.Le, this.Rk[3] = this.G0, this.Ek(this.Y8, !0);
  },
  Bk: function () {
    return this.Mk;
  },
  Fk: function () {
    return this.Rk[0] = 8 * Math.floor(this.Rk[0] / 8), this.Rk[1] = 8 * Math.floor(this.Rk[1] / 8), this.Rk[2] = 8 * Math.ceil(this.Rk[2] / 8), this.Rk[3] = 8 * Math.ceil(this.Rk[3] / 8), this.Rk;
  },
  Gk: function () {
    this.Rk[0] = this.Le, this.Rk[1] = this.G0, this.Rk[2] = 0, this.Rk[3] = 0, this.Mk = !1;
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
    return v_a_34575 || (v_i_34570 = String.fromCodePoint(v_t_34569), v_e_34571 = this.K8.measureText(v_i_34570), v_n_34572 = Math.ceil(v_e_34571.actualBoundingBoxLeft + v_e_34571.actualBoundingBoxRight), v_r_34573 = Math.ceil(v_e_34571.actualBoundingBoxAscent + v_e_34571.actualBoundingBoxDescent) + 1, v_s_34574 = this.Q8.G8(v_n_34572 + 2, v_r_34573 + 2, this.Q8.I8.M8), (v_a_34575 = new scope.v_Lo_28123()).c_ = v_t_34569, v_a_34575.u_ = 0, v_a_34575.ou = v_s_34574[0] + 1, v_a_34575.Oa = v_s_34574[1] + 1, v_a_34575.Le = v_n_34572, v_a_34575.G0 = v_r_34573, v_a_34575.f_ = Math.round(-v_e_34571.actualBoundingBoxLeft), v_a_34575.__ = Math.round(v_e_34571.fontBoundingBoxAscent - v_e_34571.actualBoundingBoxAscent), v_a_34575.d_ = Math.round(v_e_34571.width), 0 < v_s_34574[2] && 0 < v_s_34574[3] && this.K8.fillText(v_i_34570, v_a_34575.ou + v_e_34571.actualBoundingBoxLeft, v_a_34575.Oa + v_e_34571.actualBoundingBoxAscent), this.q8.set(v_t_34569, v_a_34575), this.Mk = !0, this.Rk[0] = Math.min(this.Rk[0], v_s_34574[0]), this.Rk[1] = Math.min(this.Rk[1], v_s_34574[1]), this.Rk[2] = Math.max(this.Rk[2], v_s_34574[0] + v_s_34574[2]), this.Rk[3] = Math.max(this.Rk[3], v_s_34574[1] + v_s_34574[3])), v_a_34575;
  }
}, scope.v_Go_28130.prototype = {
  Uk: function () {
    this.Pk.Bk() && (scope.glContext.bindTexture(scope.glContext.TEXTURE_2D, this.Yf.id), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1), scope.glContext.texImage2D(scope.glContext.TEXTURE_2D, 0, scope.glContext.ALPHA, scope.glContext.ALPHA, scope.glContext.UNSIGNED_BYTE, this.Pk.Nk()), this.Pk.Gk());
  },
  Hk: function (v_i_34576) {
    var v_t_34577,
      v_e_34578 = this.Dk.get(v_i_34576);
    return v_e_34578 || ((v_t_34577 = new scope.v_Mo_28124()).Mf.push(this.Yf), v_t_34577.g_ = v_i_34576, v_t_34577.w_ = v_i_34576, v_t_34577.p_ = 0, v_t_34577.k_ = this.Pk.Le, v_t_34577.b_ = this.Pk.G0, v_t_34577.h_ = {
      get: v_t_34579 => (this.Pk.Ek(v_i_34576), this.Pk.jk(v_t_34579))
    }, (v_e_34578 = new scope.v_Do_28126()).R_ = 0, v_e_34578.P_ = 16777215, v_e_34578.G_ = 1, v_e_34578.j_ = 1, v_e_34578.D_ = v_t_34577, this.Dk.set(v_i_34576, v_e_34578)), v_e_34578;
  }
};
scope.v_Uo_28131 = 1;
scope.v_Ho_28132 = 2;
scope.v_Jo_28133 = 3;
scope.v_jo_28134 = 4;
scope.v_Oo_28135 = 9;
scope.v_Vo_28136 = 1;
scope.v_Wo_28137 = 2;
scope.v_Xo_28138 = 4;
scope.v_zo_28139 = 5;
scope.v_Ko_28140 = 10;
scope.v_Yo_28141 = 0;
scope.v_qo_28142 = 1;
scope.v_Zo_28143 = 2;
scope.v_$o_28144 = 0;
scope.v_Qo_28145 = 1;
scope.v_tl_28146 = 2;
scope.v_al_28152.Q3 = function (v_t_34611, v_i_34612, v_e_34613, v_n_34614, v_r_34615) {
  var v_s_34616 = (v_r_34615 = v_r_34615 || new scope.v_al_28152()).m;
  return v_s_34616[0] = v_t_34611, v_s_34616[1] = v_i_34612, v_s_34616[2] = v_e_34613, v_s_34616[3] = v_n_34614, v_r_34615;
};
scope.v_ol_28154 = new scope.v_xt_28153();
scope.v_ll_28155 = new scope.v_xt_28153();
scope.v_xt_28153.T_ = function (v_t_34619) {
  var v_i_34620 = (v_t_34619 = v_t_34619 || new scope.v_xt_28153()).m;
  return v_i_34620[1] = v_i_34620[2] = v_i_34620[3] = v_i_34620[4] = v_i_34620[6] = v_i_34620[7] = v_i_34620[8] = v_i_34620[9] = v_i_34620[11] = v_i_34620[12] = v_i_34620[13] = v_i_34620[14] = 0, v_i_34620[0] = v_i_34620[5] = v_i_34620[10] = v_i_34620[15] = 1, v_t_34619;
}, scope.v_xt_28153.ih = function (v_t_34621, v_i_34622) {
  v_t_34621 = v_t_34621.m, v_i_34622 = v_i_34622.m;
  v_i_34622[0] = v_t_34621[0], v_i_34622[1] = v_t_34621[1], v_i_34622[2] = v_t_34621[2], v_i_34622[3] = v_t_34621[3], v_i_34622[4] = v_t_34621[4], v_i_34622[5] = v_t_34621[5], v_i_34622[6] = v_t_34621[6], v_i_34622[7] = v_t_34621[7], v_i_34622[8] = v_t_34621[8], v_i_34622[9] = v_t_34621[9], v_i_34622[10] = v_t_34621[10], v_i_34622[11] = v_t_34621[11], v_i_34622[12] = v_t_34621[12], v_i_34622[13] = v_t_34621[13], v_i_34622[14] = v_t_34621[14], v_i_34622[15] = v_t_34621[15];
}, scope.v_xt_28153.nh = function (v_t_34623, v_i_34624, v_e_34625) {
  v_e_34625 = v_e_34625 || new scope.v_xt_28153();
  var v_t_34623 = v_t_34623.m,
    v_i_34624 = v_i_34624.m,
    v_n_34626 = v_e_34625.m;
  return v_n_34626[0] = v_t_34623[0] * v_i_34624[0] + v_t_34623[1] * v_i_34624[4] + v_t_34623[2] * v_i_34624[8] + v_t_34623[3] * v_i_34624[12], v_n_34626[1] = v_t_34623[0] * v_i_34624[1] + v_t_34623[1] * v_i_34624[5] + v_t_34623[2] * v_i_34624[9] + v_t_34623[3] * v_i_34624[13], v_n_34626[2] = v_t_34623[0] * v_i_34624[2] + v_t_34623[1] * v_i_34624[6] + v_t_34623[2] * v_i_34624[10] + v_t_34623[3] * v_i_34624[14], v_n_34626[3] = v_t_34623[0] * v_i_34624[3] + v_t_34623[1] * v_i_34624[7] + v_t_34623[2] * v_i_34624[11] + v_t_34623[3] * v_i_34624[15], v_n_34626[4] = v_t_34623[4] * v_i_34624[0] + v_t_34623[5] * v_i_34624[4] + v_t_34623[6] * v_i_34624[8] + v_t_34623[7] * v_i_34624[12], v_n_34626[5] = v_t_34623[4] * v_i_34624[1] + v_t_34623[5] * v_i_34624[5] + v_t_34623[6] * v_i_34624[9] + v_t_34623[7] * v_i_34624[13], v_n_34626[6] = v_t_34623[4] * v_i_34624[2] + v_t_34623[5] * v_i_34624[6] + v_t_34623[6] * v_i_34624[10] + v_t_34623[7] * v_i_34624[14], v_n_34626[7] = v_t_34623[4] * v_i_34624[3] + v_t_34623[5] * v_i_34624[7] + v_t_34623[6] * v_i_34624[11] + v_t_34623[7] * v_i_34624[15], v_n_34626[8] = v_t_34623[8] * v_i_34624[0] + v_t_34623[9] * v_i_34624[4] + v_t_34623[10] * v_i_34624[8] + v_t_34623[11] * v_i_34624[12], v_n_34626[9] = v_t_34623[8] * v_i_34624[1] + v_t_34623[9] * v_i_34624[5] + v_t_34623[10] * v_i_34624[9] + v_t_34623[11] * v_i_34624[13], v_n_34626[10] = v_t_34623[8] * v_i_34624[2] + v_t_34623[9] * v_i_34624[6] + v_t_34623[10] * v_i_34624[10] + v_t_34623[11] * v_i_34624[14], v_n_34626[11] = v_t_34623[8] * v_i_34624[3] + v_t_34623[9] * v_i_34624[7] + v_t_34623[10] * v_i_34624[11] + v_t_34623[11] * v_i_34624[15], v_n_34626[12] = v_t_34623[12] * v_i_34624[0] + v_t_34623[13] * v_i_34624[4] + v_t_34623[14] * v_i_34624[8] + v_t_34623[15] * v_i_34624[12], v_n_34626[13] = v_t_34623[12] * v_i_34624[1] + v_t_34623[13] * v_i_34624[5] + v_t_34623[14] * v_i_34624[9] + v_t_34623[15] * v_i_34624[13], v_n_34626[14] = v_t_34623[12] * v_i_34624[2] + v_t_34623[13] * v_i_34624[6] + v_t_34623[14] * v_i_34624[10] + v_t_34623[15] * v_i_34624[14], v_n_34626[15] = v_t_34623[12] * v_i_34624[3] + v_t_34623[13] * v_i_34624[7] + v_t_34623[14] * v_i_34624[11] + v_t_34623[15] * v_i_34624[15], v_e_34625;
}, scope.v_xt_28153.rh = function (v_t_34627, v_i_34628, v_e_34629) {
  v_e_34629 = v_e_34629 || new scope.v_al_28152();
  var v_t_34627 = v_t_34627.m,
    v_i_34628 = v_i_34628.m,
    v_n_34630 = v_e_34629.m;
  return v_n_34630[0] = v_t_34627[0] * v_i_34628[0] + v_t_34627[1] * v_i_34628[1] + v_t_34627[2] * v_i_34628[2] + v_t_34627[3] * v_i_34628[3], v_n_34630[1] = v_t_34627[4] * v_i_34628[0] + v_t_34627[5] * v_i_34628[1] + v_t_34627[6] * v_i_34628[2] + v_t_34627[7] * v_i_34628[3], v_n_34630[2] = v_t_34627[8] * v_i_34628[0] + v_t_34627[9] * v_i_34628[1] + v_t_34627[10] * v_i_34628[2] + v_t_34627[11] * v_i_34628[3], v_n_34630[3] = v_t_34627[12] * v_i_34628[0] + v_t_34627[13] * v_i_34628[1] + v_t_34627[14] * v_i_34628[2] + v_t_34627[15] * v_i_34628[3], v_e_34629;
}, scope.v_xt_28153.on = function (v_t_34631, v_i_34632, v_e_34633, v_n_34634) {
  var v_r_34635 = scope.v_ol_28154.m;
  scope.v_xt_28153.ih(v_t_34631, scope.v_ll_28155), v_r_34635[1] = v_r_34635[2] = v_r_34635[4] = v_r_34635[6] = v_r_34635[8] = v_r_34635[9] = v_r_34635[12] = v_r_34635[13] = v_r_34635[14] = 0, v_r_34635[0] = v_r_34635[5] = v_r_34635[10] = v_r_34635[15] = 1, v_r_34635[3] = v_i_34632, v_r_34635[7] = v_e_34633, v_r_34635[11] = v_n_34634, scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34631);
}, scope.v_xt_28153.Oe = function (v_t_34636, v_i_34637, v_e_34638, v_n_34639) {
  var v_r_34640 = scope.v_ol_28154.m;
  scope.v_xt_28153.ih(v_t_34636, scope.v_ll_28155), v_r_34640[1] = v_r_34640[2] = v_r_34640[3] = v_r_34640[4] = v_r_34640[6] = v_r_34640[7] = v_r_34640[8] = v_r_34640[9] = v_r_34640[11] = v_r_34640[12] = v_r_34640[13] = v_r_34640[14] = 0, v_r_34640[15] = 1, v_r_34640[0] = v_i_34637, v_r_34640[5] = v_e_34638, v_r_34640[10] = v_n_34639, scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34636);
}, scope.v_xt_28153.vd = function (v_t_34641, v_i_34642, v_e_34643, v_n_34644) {
  let v_r_34645 = scope.v_ol_28154.m,
    v_s_34646 = 0,
    v_a_34647 = 0;
  0 !== v_i_34642 && (scope.v_xt_28153.ih(v_t_34641, scope.v_ll_28155), v_s_34646 = scope.mathSin(v_i_34642), v_a_34647 = scope.mathCos(v_i_34642), v_r_34645[1] = v_r_34645[2] = v_r_34645[3] = v_r_34645[4] = v_r_34645[7] = v_r_34645[8] = v_r_34645[11] = v_r_34645[12] = v_r_34645[13] = v_r_34645[14] = 0, v_r_34645[0] = v_r_34645[15] = 1, v_r_34645[5] = v_a_34647, v_r_34645[6] = -v_s_34646, v_r_34645[9] = v_s_34646, v_r_34645[10] = v_a_34647, scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34641)), 0 !== v_e_34643 && (scope.v_xt_28153.ih(v_t_34641, scope.v_ll_28155), v_s_34646 = scope.mathSin(v_e_34643), v_a_34647 = scope.mathCos(v_e_34643), v_r_34645[1] = v_r_34645[3] = v_r_34645[4] = v_r_34645[6] = v_r_34645[7] = v_r_34645[9] = v_r_34645[11] = v_r_34645[12] = v_r_34645[13] = v_r_34645[14] = 0, v_r_34645[5] = v_r_34645[15] = 1, v_r_34645[0] = v_a_34647, v_r_34645[2] = v_s_34646, v_r_34645[8] = -v_s_34646, v_r_34645[10] = v_a_34647, scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34641)), 0 !== v_n_34644 && (scope.v_xt_28153.ih(v_t_34641, scope.v_ll_28155), v_s_34646 = scope.mathSin(v_n_34644), v_a_34647 = scope.mathCos(v_n_34644), v_r_34645[2] = v_r_34645[3] = v_r_34645[6] = v_r_34645[7] = v_r_34645[8] = v_r_34645[9] = v_r_34645[11] = v_r_34645[12] = v_r_34645[13] = v_r_34645[14] = 0, v_r_34645[10] = v_r_34645[15] = 1, v_r_34645[0] = v_a_34647, v_r_34645[1] = -v_s_34646, v_r_34645[4] = v_s_34646, v_r_34645[5] = v_a_34647, scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34641));
}, scope.v_xt_28153.ah = function (v_t_34648, v_i_34649, v_e_34650) {
  var v_n_34651;
  0 === v_i_34649 && 0 === v_e_34650 || (v_n_34651 = scope.v_ol_28154.m, scope.v_xt_28153.ih(v_t_34648, scope.v_ll_28155), v_n_34651[2] = v_n_34651[3] = v_n_34651[6] = v_n_34651[7] = v_n_34651[8] = v_n_34651[9] = v_n_34651[11] = v_n_34651[12] = v_n_34651[13] = v_n_34651[14] = 0, v_n_34651[0] = v_n_34651[5] = v_n_34651[10] = v_n_34651[15] = 1, v_n_34651[1] = scope.mathTan(v_i_34649), v_n_34651[4] = scope.mathTan(v_e_34650), scope.v_xt_28153.nh(scope.v_ll_28155, scope.v_ol_28154, v_t_34648));
}, scope.v_bl_28168.prototype.sh = function (v_t_34652) {
  v_t_34652.on[0] = this.on[0], v_t_34652.on[1] = this.on[1], v_t_34652.on[2] = this.on[2], v_t_34652.Oe[0] = this.Oe[0], v_t_34652.Oe[1] = this.Oe[1], v_t_34652.Oe[2] = this.Oe[2], v_t_34652.vd[0] = this.vd[0], v_t_34652.vd[1] = this.vd[1], v_t_34652.vd[2] = this.vd[2], v_t_34652.gd[0] = this.gd[0], v_t_34652.gd[1] = this.gd[1], v_t_34652.qe = this.qe, v_t_34652.wd = this.wd, v_t_34652.Nn = this.Nn, v_t_34652.Yk[0] = this.Yk[0], v_t_34652.Yk[1] = this.Yk[1], v_t_34652.Zk[0] = this.Zk[0], v_t_34652.Zk[1] = this.Zk[1], v_t_34652.$k = this.$k;
}, scope.v_bl_28168.prototype.oh = function (v_t_34653) {
  this.on[0] += v_t_34653.on[0], this.on[1] += v_t_34653.on[1], this.on[2] += v_t_34653.on[2], this.Oe[0] *= v_t_34653.Oe[0], this.Oe[1] *= v_t_34653.Oe[1], this.Oe[2] *= v_t_34653.Oe[2], this.vd[0] += v_t_34653.vd[0], this.vd[1] += v_t_34653.vd[1], this.vd[2] += v_t_34653.vd[2], this.gd[0] += v_t_34653.gd[0], this.gd[1] += v_t_34653.gd[1], this.qe *= v_t_34653.qe, this.wd += v_t_34653.wd, this.Nn += v_t_34653.Nn, this.Yk[0] += v_t_34653.Yk[0], this.Yk[1] += v_t_34653.Yk[1], this.Zk[0] *= v_t_34653.Zk[0], this.Zk[1] *= v_t_34653.Zk[1], this.$k += v_t_34653.$k;
}, scope.v_Il_28175.prototype = {
  Ze: function (v_t_34654) {
    return this.We.push(v_t_34654), v_t_34654;
  },
  hn: function (v_t_34655, v_i_34656) {
    var v_e_34657;
    return null === v_i_34656 ? this.We.push(v_t_34655) : (0 <= (v_e_34657 = this.We.findIndex(v_t_34658 => v_t_34658 === v_i_34656)) ? this.We.splice(v_e_34657, 0, v_t_34655) : this.We.push(v_t_34655), v_t_34655.Lk = this.Lk), v_t_34655;
  },
  Ke: function (v_i_34659) {
    var v_t_34660 = this.We.findIndex(v_t_34661 => v_t_34661 === v_i_34659);
    return 0 <= v_t_34660 ? (this.We.splice(v_t_34660, 1), v_i_34659) : null;
  },
  tn: function () {
    return this.We.length = 0, null;
  },
  ot: function (v_i_34662) {
    var v_e_34663,
      v_n_34664 = this.We;
    for (let v_t_34665 = 0; v_t_34665 < v_n_34664.length; ++v_t_34665) {
      if (v_n_34664[v_t_34665].ct === v_i_34662) return v_n_34664[v_t_34665];
      if (0 < v_n_34664[v_t_34665].We.length && (v_e_34663 = v_n_34664[v_t_34665].ot(v_i_34662))) return v_e_34663;
    }
    return null;
  },
  yk: function (v_t_34666) {
    var v_i_34667;
    return this.Ck ? this.Ck.get(v_t_34666) : this.Lk && (v_i_34667 = this.Lk.deref()) && v_i_34667.Ck ? v_i_34667.Ck.get(v_t_34666) : null;
  },
  Yc: function (v_i_34668, v_t_34669) {
    var v_e_34670 = void 0 === v_t_34669 ? [] : v_t_34669,
      v_n_34671 = this.We;
    for (let v_t_34672 = 0; v_t_34672 < v_n_34671.length; ++v_t_34672) -1 !== v_n_34671[v_t_34672].Ed.findIndex(v_t_34673 => v_t_34673 == v_i_34668) && v_e_34670.push(v_n_34671[v_t_34672]), 0 < v_n_34671[v_t_34672].We.length && v_n_34671[v_t_34672].Yc(v_i_34668, v_e_34670);
    return void 0 === v_t_34669 ? v_e_34670 : void 0;
  },
  Ve: function (v_t_34674) {
    let v_i_34675;
    switch (this.Fi) {
      case 1:
        v_i_34675 = new scope.v_Pl_28176();
        break;
      case 2:
        v_i_34675 = new scope.v_Ll_28178();
        break;
      case 3:
        v_i_34675 = new scope.v_Rl_28177();
        break;
      case 4:
        v_i_34675 = new scope.v_Ml_28179();
        break;
      case 5:
        v_i_34675 = new scope.v_El_28180();
        break;
      default:
        v_i_34675 = new scope.v_Il_28175();
    }
    if (this.lh(v_i_34675), v_t_34674) for (let v_t_34676 = 0; v_t_34676 < this.We.length; ++v_t_34676) v_i_34675.Ze(this.We[v_t_34676].Ve(!0));
    return v_i_34675;
  },
  lh: function (v_t_34677) {
    v_t_34677.Fi = this.Fi, v_t_34677.ct = this.ct, v_t_34677.Ed = this.Ed.concat(), v_t_34677.Be = this.Be, v_t_34677.Te = this.Te, v_t_34677.Qt = this.Qt, v_t_34677.Le = this.Le, v_t_34677.G0 = this.G0, v_t_34677.Fe = this.Fe.concat(), v_t_34677.on = this.on.concat(), v_t_34677.Oe = this.Oe.concat(), v_t_34677.vd = this.vd.concat(), v_t_34677.gd = this.gd.concat(), v_t_34677.qe = this.qe, v_t_34677.wd = this.wd, v_t_34677.Nn = this.Nn, v_t_34677.Fd = this.Fd.concat(), v_t_34677.Bd = this.Bd, v_t_34677.Md = this.Md, v_t_34677.Pd = this.Pd, v_t_34677.Rd = new Map(this.Rd), v_t_34677.un = this.un;
  },
  Kt: function () {
    var v_i_34678 = this.We;
    for (let v_t_34679 = 0; v_t_34679 < v_i_34678.length; ++v_t_34679) 3 === v_i_34678[v_t_34679].Fi && (v_i_34678[v_t_34679].q3.rr = 0), 0 < v_i_34678[v_t_34679].We.length && v_i_34678[v_t_34679].Kt();
  },
  Qe: function (v_t_34680, v_i_34681, v_e_34682, v_n_34683) {
    void 0 !== v_t_34680 && (this.Fe[0] = this.Fe[4] = this.Fe[8] = this.Fe[12] = v_t_34680), void 0 !== v_i_34681 && (this.Fe[1] = this.Fe[5] = this.Fe[9] = this.Fe[13] = v_i_34681), void 0 !== v_e_34682 && (this.Fe[2] = this.Fe[6] = this.Fe[10] = this.Fe[14] = v_e_34682), void 0 !== v_n_34683 && (this.Fe[3] = this.Fe[7] = this.Fe[11] = this.Fe[15] = v_n_34683);
  },
  rn: function (v_t_34684, v_i_34685, v_e_34686, v_n_34687) {
    var v_r_34688 = new scope.v_kl_28167();
    v_r_34688.z2 = v_i_34685, v_r_34688.K2 = v_e_34686 || 0, v_r_34688.ud = v_n_34687 || 0, this.Rd.set(v_t_34684, v_r_34688);
  },
  uh: function (v_t_34689) {
    return this.Rd.get(v_t_34689);
  },
  fh: function (v_t_34690) {
    this.Rd.delete(v_t_34690);
  },
  nn: function (v_t_34691) {
    void 0 === v_t_34691 ? this.Gd.Sd.clear() : this.Gd.Sd.delete(v_t_34691);
  },
  $e: function (v_t_34692, v_i_34693, v_e_34694) {
    let v_n_34695;
    void 0 !== v_t_34692 && ((v_n_34695 = this.Gd.Sd.get(scope.v_Vo_28136)) ? v_n_34695.bd = this._h(scope.v_Vo_28136) : (v_n_34695 = new scope.v_Sl_28170(), this.Gd.Sd.set(scope.v_Vo_28136, v_n_34695), v_n_34695.bd = v_t_34692), this.on[0] = v_n_34695.md = v_t_34692, v_n_34695.rr = 0), void 0 !== v_i_34693 && ((v_n_34695 = this.Gd.Sd.get(scope.v_Wo_28137)) ? v_n_34695.bd = this._h(scope.v_Wo_28137) : (v_n_34695 = new scope.v_Sl_28170(), this.Gd.Sd.set(scope.v_Wo_28137, v_n_34695), v_n_34695.bd = v_i_34693), this.on[1] = v_n_34695.md = v_i_34693, v_n_34695.rr = 0), void 0 !== v_e_34694 && ((v_n_34695 = this.Gd.Sd.get(3)) ? v_n_34695.bd = this._h(3) : (v_n_34695 = new scope.v_Sl_28170(), this.Gd.Sd.set(3, v_n_34695), v_n_34695.bd = v_e_34694), this.on[2] = v_n_34695.md = v_e_34694, v_n_34695.rr = 0);
  },
  ln: function (v_t_34696, v_i_34697, v_e_34698) {
    let v_n_34699;
    void 0 !== v_t_34696 && ((v_n_34699 = this.Gd.Sd.get(scope.v_Xo_28138)) ? v_n_34699.bd = this._h(scope.v_Xo_28138) : (v_n_34699 = new scope.v_Sl_28170(), this.Gd.Sd.set(scope.v_Xo_28138, v_n_34699), v_n_34699.bd = v_t_34696), this.Oe[0] = v_n_34699.md = v_t_34696, v_n_34699.rr = 0), void 0 !== v_i_34697 && ((v_n_34699 = this.Gd.Sd.get(scope.v_zo_28139)) ? v_n_34699.bd = this._h(scope.v_zo_28139) : (v_n_34699 = new scope.v_Sl_28170(), this.Gd.Sd.set(scope.v_zo_28139, v_n_34699), v_n_34699.bd = v_i_34697), this.Oe[1] = v_n_34699.md = v_i_34697, v_n_34699.rr = 0), void 0 !== v_e_34698 && ((v_n_34699 = this.Gd.Sd.get(6)) ? v_n_34699.bd = this._h(6) : (v_n_34699 = new scope.v_Sl_28170(), this.Gd.Sd.set(6, v_n_34699), v_n_34699.bd = v_e_34698), this.Oe[2] = v_n_34699.md = v_e_34698, v_n_34699.rr = 0);
  },
  dh: function (v_t_34700, v_i_34701, v_e_34702) {
    let v_n_34703;
    void 0 !== v_t_34700 && ((v_n_34703 = this.Gd.Sd.get(7)) ? v_n_34703.bd = this._h(7) : (v_n_34703 = new scope.v_Sl_28170(), this.Gd.Sd.set(7, v_n_34703), v_n_34703.bd = v_t_34700), this.vd[0] = v_n_34703.md = v_t_34700, v_n_34703.rr = 0), void 0 !== v_i_34701 && ((v_n_34703 = this.Gd.Sd.get(8)) ? v_n_34703.bd = this._h(8) : (v_n_34703 = new scope.v_Sl_28170(), this.Gd.Sd.set(8, v_n_34703), v_n_34703.bd = v_i_34701), this.vd[1] = v_n_34703.md = v_i_34701, v_n_34703.rr = 0), void 0 !== v_e_34702 && ((v_n_34703 = this.Gd.Sd.get(9)) ? v_n_34703.bd = this._h(9) : (v_n_34703 = new scope.v_Sl_28170(), this.Gd.Sd.set(9, v_n_34703), v_n_34703.bd = v_e_34702), this.vd[2] = v_n_34703.md = v_e_34702, v_n_34703.rr = 0);
  },
  hh: function (v_t_34704, v_i_34705) {
    let v_e_34706;
    void 0 !== v_t_34704 && ((v_e_34706 = this.Gd.Sd.get(12)) ? v_e_34706.bd = this._h(12) : (v_e_34706 = new scope.v_Sl_28170(), this.Gd.Sd.set(12, v_e_34706), v_e_34706.bd = v_t_34704), this.gd[0] = v_e_34706.md = v_t_34704, v_e_34706.rr = 0), void 0 !== v_i_34705 && ((v_e_34706 = this.Gd.Sd.get(13)) ? v_e_34706.bd = this._h(13) : (v_e_34706 = new scope.v_Sl_28170(), this.Gd.Sd.set(13, v_e_34706), v_e_34706.bd = v_i_34705), this.gd[1] = v_e_34706.md = v_i_34705, v_e_34706.rr = 0);
  },
  an: function (v_t_34707) {
    let v_i_34708;
    void 0 !== v_t_34707 && ((v_i_34708 = this.Gd.Sd.get(scope.v_Ko_28140)) ? v_i_34708.bd = this._h(scope.v_Ko_28140) : (v_i_34708 = new scope.v_Sl_28170(), this.Gd.Sd.set(scope.v_Ko_28140, v_i_34708), v_i_34708.bd = v_t_34707), this.qe = v_i_34708.md = v_t_34707, v_i_34708.rr = 0);
  },
  gh: function (v_t_34709) {
    let v_i_34710;
    void 0 !== v_t_34709 && ((v_i_34710 = this.Gd.Sd.get(11)) ? v_i_34710.bd = this._h(11) : (v_i_34710 = new scope.v_Sl_28170(), this.Gd.Sd.set(11, v_i_34710), v_i_34710.bd = v_t_34709), this.wd = v_i_34710.md = v_t_34709, v_i_34710.rr = 0);
  },
  wh: function (v_t_34711) {
    let v_i_34712;
    void 0 !== v_t_34711 && ((v_i_34712 = this.Gd.Sd.get(14)) ? v_i_34712.bd = this._h(14) : (v_i_34712 = new scope.v_Sl_28170(), this.Gd.Sd.set(14, v_i_34712), v_i_34712.bd = v_t_34711), this.Nn = v_i_34712.md = v_t_34711, v_i_34712.rr = 0);
  },
  _h: function (v_t_34713) {
    let v_i_34714 = 0;
    var v_e_34715,
      v_n_34716 = this.Rd.get(v_t_34713),
      v_r_34717 = this.Gd.Sd.get(v_t_34713);
    if (v_n_34716 && v_r_34717) return v_e_34715 = scope.mathMax(v_r_34717.rr - .0166667 * v_n_34716.ud, 0), v_i_34714 = v_e_34715 > .0166667 * v_n_34716.K2 ? v_r_34717.md : scope.v_Ee_28084(v_r_34717.bd, v_r_34717.md, scope.v_il_28147(v_n_34716.z2, v_e_34715 / (.0166667 * v_n_34716.K2)));
    switch (v_t_34713) {
      case scope.v_Vo_28136:
        return this.on[0];
      case scope.v_Wo_28137:
        return this.on[1];
      case 3:
        return this.on[2];
      case scope.v_Xo_28138:
        return this.Oe[0];
      case scope.v_zo_28139:
        return this.Oe[1];
      case 6:
        return this.Oe[2];
      case 7:
        return this.vd[0];
      case 8:
        return this.vd[1];
      case 9:
        return this.vd[2];
      case 12:
        return this.gd[0];
      case 13:
        return this.gd[1];
      case scope.v_Ko_28140:
        return this.qe;
      case 11:
        return this.wd;
      case 14:
        return this.Nn;
    }
    if (2 === this.Fi) switch (v_t_34713) {
      case 23:
        return this.Yk[0];
      case 24:
        return this.Yk[1];
      case 25:
        return this.Zk[0];
      case 26:
        return this.Zk[1];
      case 27:
        return this.$k;
    } else if (5 === this.Fi) switch (v_t_34713) {
      case 15:
        return this.eh[0];
      case 16:
        return this.eh[1];
      case 17:
        return this.eh[2];
      case 18:
        return this.eh[3];
      case 19:
        return this.eh[4];
      case 20:
        return this.eh[5];
      case 21:
        return this.eh[6];
      case 22:
        return this.eh[7];
    }
    return 0;
  }
}, scope.v_Pl_28176.prototype = Object.create(scope.v_Il_28175.prototype), (scope.v_Rl_28177.prototype = Object.create(scope.v_Il_28175.prototype)).lh = function (v_t_34718) {
  scope.v_Il_28175.prototype.lh.call(this, v_t_34718), v_t_34718.Wt = this.Wt, v_t_34718.jd = this.jd, v_t_34718.B_ = this.B_, v_t_34718.M_ = this.M_, v_t_34718.Nd = this.Nd, v_t_34718.Hd = this.Hd, v_t_34718.Ud = this.Ud, v_t_34718.Vd = this.Vd, v_t_34718.Od = this.Od, v_t_34718.w_ = this.w_, v_t_34718.F_ = this.F_, v_t_34718.Jd = this.Jd, v_t_34718.R3 = this.R3, v_t_34718.I_ = this.I_, v_t_34718.Wd = this.Wd, v_t_34718.Kd = this.Kd, v_t_34718.zd = this.zd, v_t_34718.Xd = this.Xd.concat(), v_t_34718.Tn = this.Tn;
}, (scope.v_Ll_28178.prototype = Object.create(scope.v_Il_28175.prototype)).lh = function (v_t_34719) {
  scope.v_Il_28175.prototype.lh.call(this, v_t_34719), v_t_34719.Xt = this.Xt, v_t_34719.Je = this.Je, v_t_34719.Zd = this.Zd, v_t_34719.gt = this.gt.concat(), v_t_34719.Yd = this.Yd, v_t_34719.$d = this.$d.concat(), v_t_34719.Qk = this.Qk, v_t_34719.Yk = this.Yk.concat(), v_t_34719.Zk = this.Zk.concat(), v_t_34719.$k = this.$k, v_t_34719.c8 = this.c8.concat(), v_t_34719.zt = this.zt;
}, (scope.v_Ml_28179.prototype = Object.create(scope.v_Il_28175.prototype)).lh = function (v_t_34720) {
  scope.v_Il_28175.prototype.lh.call(this, v_t_34720), v_t_34720.Wt = this.Wt, v_t_34720.Ak = this.Ak, v_t_34720.Vd = this.Vd, v_t_34720.Od = this.Od, v_t_34720.qd = this.qd, v_t_34720.R3 = this.R3;
}, (scope.v_El_28180.prototype = Object.create(scope.v_Il_28175.prototype)).lh = function (v_t_34721) {
  scope.v_Il_28175.prototype.lh.call(this, v_t_34721), v_t_34721.Xt = this.Xt, v_t_34721.Qd = this.Qd, v_t_34721.eh = this.eh.concat();
}, scope.v_Dl_28181.prototype = {
  rt: function (v_n_34722) {
    let v___34723 = new scope.v_Po_28121(this.th),
      v_h_34724 = new scope.v_Cl_28173(),
      v_t_34725 = !1,
      v_o_34726 = 0,
      v_r_34727 = 0;
    if (1178751826 !== v___34723.v3()) return !1;
    if (8 !== v___34723.u3()) return !1;
    v_h_34724.lt.Le = v___34723.u3(), v_h_34724.lt.G0 = v___34723.u3(), 0 !== v_h_34724.lt.Le && 0 !== v_h_34724.lt.G0 || (v_h_34724.lt.Le = 1920, v_h_34724.lt.G0 = 1080), 1 & v___34723.v3() && (v_t_34725 = !0), v___34723.y3(2), v_r_34727 = v___34723.v3(), v_t_34725 ? v___34723.i3("utf-8") : v___34723.i3("utf-16le");
    for (var v_i_34728; !v___34723.C3();) if (1381324884 === (v_i_34728 = v___34723.v3())) {
      let v_i_34742 = v___34723.v3(),
        v_e_34743,
        v_n_34744,
        v_r_34745,
        v_s_34746,
        v_a_34747,
        v_o_34748,
        v_l_34749;
      for (let v_t_34750 = 0; v_t_34750 < v_i_34742; ++v_t_34750) {
        for (v_a_34747 = new scope.v_ul_28157(), v_r_34745 = v_p_34741(), v_a_34747.ed = v_p_34741(), v_a_34747.Le = v___34723.u3(), v_a_34747.G0 = v___34723.u3(), v_l_34749 = v___34723.v3(), v_a_34747.td = !!(1 & v_l_34749), v_a_34747.nd = !!(2 & v_l_34749), v___34723.y3(8), v_e_34743 = v___34723.v3(), v_n_34744 = 0; v_n_34744 < v_e_34743; ++v_n_34744) v_o_34748 = new scope.v_cl_28156(), v_s_34746 = v_p_34741(), v_o_34748.ou = v___34723.l3(), v_o_34748.Oa = v___34723.l3(), v_o_34748.Le = v___34723.l3(), v_o_34748.G0 = v___34723.l3(), v_a_34747.rd[v_s_34746] = v_o_34748;
        v_h_34724.Mf[v_r_34745] = v_a_34747;
      }
    } else if (1230261830 === v_i_34728) {
      v_a_34731 = void 0;
      v_e_34729 = void 0;
      v_s_34730 = void 0;
      var v_e_34729,
        v_s_34730,
        v_a_34731 = v___34723.v3();
      for (let v_t_34751 = 0; v_t_34751 < v_a_34731; ++v_t_34751) v_s_34730 = new scope.v_fl_28158(), v_e_34729 = v_p_34741(), v_s_34730.ed = v_p_34741(), v_h_34724.Id[v_e_34729] = v_s_34730;
    } else if (1398033990 === v_i_34728) {
      let v_i_34752 = v___34723.v3(),
        v_e_34753 = 0,
        v_n_34754 = 0,
        v_r_34755 = "",
        v_s_34756,
        v_a_34757;
      for (let v_t_34758 = 0; v_t_34758 < v_i_34752; ++v_t_34758) {
        for (v_s_34756 = new scope.v__l_28159(), v_r_34755 = v_p_34741(), v_e_34753 = v___34723.v3(), v_n_34754 = 0; v_n_34754 < v_e_34753; ++v_n_34754) (v_a_34757 = new scope.v_hl_28160()).sd = v_p_34741(), v_a_34757.R_ = v___34723.v3(), v_a_34757.P_ = v___34723.v3(), v_a_34757.G_ = v___34723.w3(), v_a_34757.j_ = v___34723.w3(), v_s_34756.ad.push(v_a_34757);
        v_h_34724.yd[v_r_34755] = v_s_34756;
      }
    } else if (1414415955 === v_i_34728) {
      let v_i_34759 = v___34723.v3(),
        v_e_34760 = 0,
        v_n_34761 = 0,
        v_r_34762 = "",
        v_s_34763,
        v_a_34764,
        v_o_34765 = 0;
      for (let v_t_34766 = 0; v_t_34766 < v_i_34759; ++v_t_34766) {
        for (v_s_34763 = new scope.v_dl_28161(), v_r_34762 = v_p_34741(), v_e_34760 = v___34723.v3(), v_n_34761 = 0; v_n_34761 < v_e_34760; ++v_n_34761) v_a_34764 = new scope.v_vl_28162(), v___34723.y3(2), v_o_34765 = v___34723.u3(), v_a_34764.Xt = v_p_34741(), v_a_34764.Je = v_p_34741(), v_s_34763.Ik.set(v_o_34765, v_a_34764);
        v_h_34724.Tk[v_r_34762] = v_s_34763;
      }
    } else if (1280525899 === v_i_34728) {
      let v_i_34767 = v___34723.v3(),
        v_e_34768 = 0,
        v_n_34769 = 0,
        v_r_34770 = 0,
        v_s_34771 = 0,
        v_a_34772 = "",
        v_o_34773 = 0,
        v_l_34774,
        v_c_34775,
        v_u_34776,
        v_f_34777;
      for (let v_t_34778 = 0; v_t_34778 < v_i_34767; ++v_t_34778) {
        for (v_c_34775 = new scope.v_gl_28164(), v_o_34773 = v___34723.v3(), v_a_34772 = v_p_34741(v_o_34773), v_e_34768 = v___34723.v3(), v_r_34770 = 0; v_r_34770 < v_e_34768; ++v_r_34770) {
          for (v_l_34774 = v_m_34740(v___34723.v3()), v_n_34769 = v___34723.v3(), v_f_34777 = [], v_s_34771 = 0; v_s_34771 < v_n_34769; ++v_s_34771) (v_u_34776 = new scope.v_wl_28163()).z2 = v___34723.u3(), v___34723.y3(2), v_u_34776.od = v___34723._3(), v_u_34776.Cr = v___34723.w3(), v_f_34777.push(v_u_34776);
          v_c_34775.ld.set(v_l_34774, v_f_34777);
        }
        v_h_34724.l8[v_a_34772] = v_o_34773, v_h_34724.Cd.set(v_o_34773, v_c_34775);
      }
    } else if (1364414017 === v_i_34728) {
      let v_i_34779 = v___34723.v3(),
        v_e_34780 = 0,
        v_n_34781 = 0,
        v_r_34782 = "",
        v_s_34783,
        v_a_34784;
      for (let v_t_34785 = 0; v_t_34785 < v_i_34779; ++v_t_34785) {
        for (v_s_34783 = new scope.v_pl_28166(), v_r_34782 = v_p_34741(), v_e_34780 = v___34723.v3(), v_n_34781 = 0; v_n_34781 < v_e_34780; ++v_n_34781) (v_a_34784 = new scope.v_ml_28165())._d = v_p_34741(), v_a_34784.n8 = v___34723.v3(), v_a_34784.ud = v___34723._3(), v_a_34784.fd = v___34723._3(), v_s_34783.hd.push(v_a_34784);
        v_h_34724.Ad.set(v_o_34726, v_s_34783), v_h_34724.o8[v_r_34782] = v_o_34726, ++v_o_34726;
      }
    } else if (1414351941 === v_i_34728) {
      v_l_34732 = void 0;
      v_c_34733 = void 0;
      v_u_34734 = void 0;
      v_f_34735 = void 0;
      v_d_34736 = void 0;
      v_v_34737 = void 0;
      v_w_34738 = void 0;
      let v_t_34786 = [v_h_34724.lt],
        v_e_34787 = 0;
      for (; 0 < v_t_34786.length;) {
        var v_l_34732 = v___34723.v3();
        if (255 === v_l_34732) v_t_34786.pop();else {
          let v_i_34788;
          (v_i_34788 = new (1380732739 === v_l_34732 ? scope.v_Pl_28176 : 1381324884 === v_l_34732 ? scope.v_Ll_28178 : 1415071060 === v_l_34732 ? scope.v_Rl_28177 : 1481920595 === v_l_34732 ? scope.v_Ml_28179 : 1381256262 === v_l_34732 ? scope.v_El_28180 : scope.v_Il_28175)()).Lk = new WeakRef(v_h_34724.lt), v_h_34724.lt.Ck.set(v_e_34787, v_i_34788), ++v_e_34787;
          var v_l_34732 = v___34723.o3(),
            v_c_34733 = (v_i_34788.Md = v___34723.o3(), v___34723.u3());
          if (v_i_34788.Be = !(1 & v_c_34733), v_i_34788.Bd = 2 & v_c_34733, v_i_34788.Pd = 4 & v_c_34733, v_c_34733 = !(4096 & v_c_34733), v_i_34788.ct = v_p_34741(), v_i_34788.Ed = v_p_34741().split(" "), v_i_34788.Te = v___34723._3(), v_i_34788.Qt = v___34723._3(), v_i_34788.Le = v___34723._3(), v_i_34788.G0 = v___34723._3(), v_c_34733) for (let v_t_34789 = 0; v_t_34789 < 4; ++v_t_34789) v_i_34788.Fe[v_t_34789] = v_i_34788.Fe[v_t_34789 + 4] = v_i_34788.Fe[v_t_34789 + 8] = v_i_34788.Fe[v_t_34789 + 12] = v___34723.o3() / 255;else for (let v_t_34790 = 0; v_t_34790 < 16; ++v_t_34790) v_i_34788.Fe[v_t_34790] = v___34723.o3() / 255;
          for (let v_t_34791 = 0; v_t_34791 < 3; ++v_t_34791) v_i_34788.on[v_t_34791] = v___34723.w3();
          for (let v_t_34792 = 0; v_t_34792 < 3; ++v_t_34792) v_i_34788.Oe[v_t_34792] = v___34723.w3();
          for (let v_t_34793 = 0; v_t_34793 < 3; ++v_t_34793) v_i_34788.vd[v_t_34793] = v___34723.w3();
          for (let v_t_34794 = 0; v_t_34794 < 2; ++v_t_34794) v_i_34788.gd[v_t_34794] = v___34723.w3();
          v___34723.y3(4), v_i_34788.qe = v___34723.w3(), v_i_34788.wd = v___34723.w3(), v_i_34788.Nn = v___34723.w3(), v___34723.y3(16);
          for (let v_t_34795 = 0; v_t_34795 < 2; ++v_t_34795) v_i_34788.Fd[v_t_34795] = v___34723.w3();
          v___34723.y3(4);
          var v_u_34734 = v___34723.v3();
          for (let v_t_34796 = 0; v_t_34796 < v_u_34734; ++v_t_34796) {
            var v_f_34735 = new scope.v_kl_28167(),
              v_d_34736 = v_m_34740(v___34723.v3());
            v_f_34735.z2 = v___34723.u3(), v___34723.y3(2), v_f_34735.ud = v___34723._3(), v_f_34735.K2 = v___34723._3(), v_i_34788.Rd.set(v_d_34736, v_f_34735);
          }
          switch (v_i_34788.Fi) {
            case 2:
              v_i_34788.Xt = v_p_34741(), v_i_34788.Je = v_p_34741();
              for (let v_t_34797 = 0; v_t_34797 < 4; ++v_t_34797) v_i_34788.gt[v_t_34797] = v___34723.w3();
              var v_v_34737 = v___34723.v3();
              if (v_i_34788.Zd = !!(4 & v_v_34737), v_i_34788.Yd = !!(8 & v_v_34737), v_i_34788.Yd) for (let v_t_34798 = 0; v_t_34798 < 4; ++v_t_34798) v_i_34788.$d[v_t_34798] = v___34723._3();
              if (16 & v_v_34737) {
                v_i_34788.Qk = v_p_34741();
                for (let v_t_34799 = 0; v_t_34799 < 2; ++v_t_34799) v_i_34788.Yk[v_t_34799] = v___34723.w3();
                for (let v_t_34800 = 0; v_t_34800 < 2; ++v_t_34800) v_i_34788.Zk[v_t_34800] = v___34723.w3();
                v_i_34788.$k = v___34723.w3();
                for (let v_t_34801 = 0; v_t_34801 < 2; ++v_t_34801) v_i_34788.c8[v_t_34801] = v___34723.w3();
              }
              break;
            case 3:
              v_i_34788.Wt = v_p_34741(), v_i_34788.jd = v_p_34741();
              v_v_34737 = v___34723.v3();
              v_i_34788.Nd = !!(1 & v_v_34737), v_i_34788.F_ = !!(2 & v_v_34737), v_i_34788.Wd = !!(4 & v_v_34737), v_i_34788.Jd = !!(8 & v_v_34737), v_i_34788.B_ = !!(16 & v_v_34737), v_i_34788.M_ = !!(64 & v_v_34737), 65536 & v_v_34737 && (v_i_34788.R3 = scope.v_Zo_28143), 131072 & v_v_34737 && (v_i_34788.R3 = scope.v_qo_28142), 1048576 & v_v_34737 && (v_i_34788.I_ = scope.v_tl_28146), 2097152 & v_v_34737 && (v_i_34788.I_ = scope.v_Qo_28145), 32 & v_v_34737 && (v_i_34788.Tn = new scope.v_Bo_28128(), v_i_34788.Wt = v_i_34788.Tn.An(v_i_34788.Wt)), v_i_34788.Hd = v___34723.w3(), v_i_34788.Ud = v___34723.w3(), v_i_34788.Vd = v___34723.w3(), v_i_34788.Od = v___34723.w3(), v_i_34788.Kd = v___34723._3(), v_i_34788.zd = v___34723._3();
              for (let v_t_34802 = 0; v_t_34802 < 4; ++v_t_34802) v_i_34788.Xd[v_t_34802] = v___34723.o3() / 255;
              v_i_34788.w_ = v___34723.w3(), v___34723.y3(8), 128 & v_v_34737 && (v_i_34788.Wt = v_n_34722.b4(v_p_34741()));
              break;
            case 4:
              v_i_34788.Ak = v_p_34741(), v_i_34788.Wt = v_p_34741();
              var v_w_34738 = v___34723.v3();
              65536 & v_w_34738 && (v_i_34788.R3 = scope.v_Zo_28143), 131072 & v_w_34738 && (v_i_34788.R3 = scope.v_qo_28142), v_i_34788.Vd = v___34723.w3(), v_i_34788.Od = v___34723.w3(), v_i_34788.qd = v___34723.w3();
              break;
            case 5:
              v_i_34788.Xt = v_p_34741(), v_i_34788.Qd = v___34723.u3();
              for (let v_t_34803 = 0; v_t_34803 < 8; ++v_t_34803) v_i_34788.eh[v_t_34803] = v___34723.w3();
              v___34723.y3(16);
          }
          "templates" === v_i_34788.ct && 1 === v_t_34786.length && (v_i_34788.Be = !1), v_t_34786[v_t_34786.length - 1].We.push(v_i_34788), 1 & v_l_34732 && v_t_34786.push(v_i_34788);
        }
      }
    } else {
      if (1380206675 != v_i_34728) break;
      v_g_34739 = void 0;
      var v_g_34739 = v___34723.v3();
      for (let v_t_34804 = 0; v_t_34804 < v_g_34739; ++v_t_34804) v___34723.v3(), v_p_34741();
    }
    function v_m_34740(v_t_34805) {
      return 1481396820 == v_t_34805 ? scope.v_Vo_28136 : 1498174036 == v_t_34805 ? scope.v_Wo_28137 : 1514951252 == v_t_34805 ? 3 : 1481392979 == v_t_34805 ? scope.v_Xo_28138 : 1498170195 == v_t_34805 ? scope.v_zo_28139 : 1514947411 == v_t_34805 ? 6 : 1481921618 == v_t_34805 ? 7 : 1498698834 == v_t_34805 ? 8 : 1515476050 == v_t_34805 ? 9 : 1482115923 == v_t_34805 ? 12 : 1498893139 == v_t_34805 ? 13 : 1413697615 == v_t_34805 ? scope.v_Ko_28140 : 1314148930 == v_t_34805 ? 11 : 1398359878 == v_t_34805 ? 14 : 808472646 == v_t_34805 ? 15 : 825249862 == v_t_34805 ? 16 : 842027078 == v_t_34805 ? 17 : 858804294 == v_t_34805 ? 18 : 875581510 == v_t_34805 ? 19 : 892358726 == v_t_34805 ? 20 : 909135942 == v_t_34805 ? 21 : 925913158 == v_t_34805 ? 22 : 1481397325 == v_t_34805 ? 23 : 1498174541 == v_t_34805 ? 24 : 1480807245 == v_t_34805 ? 25 : 1497584461 == v_t_34805 ? 26 : 1414812237 == v_t_34805 ? 27 : 0;
    }
    function v_p_34741(v_t_34806) {
      var v_i_34807 = void 0 !== v_t_34806 ? v_t_34806 : v___34723.v3();
      let v_e_34808 = 0;
      for (; v___34723.th[v_r_34727 + v_i_34807 + v_e_34808];) ++v_e_34808;
      return v_e_34808 < 1 ? "" : scope.v_B_27650.decode(new Uint8Array(v___34723.th.buffer, v___34723.th.byteOffset + v_r_34727 + v_i_34807, v_e_34808));
    }
    return v_h_34724;
  }
}, scope.v_Cl_28173.prototype = {
  _8: function (v_t_34809, v_i_34810, v_e_34811) {
    v_t_34809 = this.o8[v_t_34809];
    void 0 !== v_t_34809 && this.e8(v_t_34809, v_i_34810, v_e_34811);
  },
  e8: function (v_t_34812, v_i_34813, v_e_34814) {
    if (!(v_t_34812 < 0)) {
      var v_n_34815 = this.Ad.get(v_t_34812);
      if (v_n_34815) {
        var v_r_34816 = void 0 !== v_e_34814 ? v_e_34814 : 0;
        for (let v_t_34820 = 0; v_t_34820 < v_n_34815.hd.length; ++v_t_34820) {
          var v_s_34817 = v_n_34815.hd[v_t_34820],
            v_a_34818 = this.Cd.get(v_s_34817.n8),
            v_o_34819 = (v_i_34813 || this.lt).Yc(v_s_34817._d);
          for (let v_t_34821 = 0; v_t_34821 < v_o_34819.length; ++v_t_34821) v_o_34819[v_t_34821].Dd.pd = !0, v_o_34819[v_t_34821].Dd.rr = 0, v_o_34819[v_t_34821].Dd.ud = v_s_34817.ud + v_r_34816, v_o_34819[v_t_34821].Dd.fd = v_s_34817.fd, v_o_34819[v_t_34821].Dd.kd = v_a_34818;
        }
      }
    }
  },
  v8: function (v_t_34822, v_i_34823) {
    v_t_34822 = this.Ad[v_t_34822];
    v_t_34822 && this.i8(v_t_34822, v_i_34823);
  },
  i8: function (v_t_34824, v_i_34825) {
    var v_e_34826 = this.Ad.get(v_t_34824);
    if (v_e_34826) for (let v_t_34829 = 0; v_t_34829 < v_e_34826.hd.length; ++v_t_34829) {
      var v_n_34827 = v_e_34826.hd[v_t_34829],
        v_r_34828 = (v_i_34825 || this.lt).Yc(v_n_34827._d);
      for (let v_t_34830 = 0; v_t_34830 < v_r_34828.length; ++v_t_34830) v_r_34828[v_t_34830].Dd.pd = !1, v_r_34828[v_t_34830].Dd.kd = void 0;
    }
  },
  NA: function (v_t_34831, v_i_34832, v_e_34833, v_n_34834) {
    v_t_34831 = this.lt.yk(v_t_34831);
    if (!v_t_34831) return null;
    var v_t_34831 = v_t_34831.Ve(!0),
      v_r_34835 = this.Ad.get(v_i_34832);
    if (!v_r_34835) return null;
    let v_s_34836 = 0;
    for (let v_t_34840 = 0; v_t_34840 < v_r_34835.hd.length; ++v_t_34840) {
      var v_a_34837 = v_r_34835.hd[v_t_34840],
        v_o_34838 = this.Cd.get(v_a_34837.n8);
      if (v_o_34838) {
        if (0 < v_a_34837.fd) {
          v_s_34836 = -1;
          break;
        }
        for (var v_l_34839 of v_o_34838.ld.values()) v_l_34839.length && (v_s_34836 = scope.mathMax(v_s_34836, v_a_34837.ud + v_l_34839[v_l_34839.length - 1].od));
      }
    }
    v_t_34831.Be = !0, v_t_34831.Te = v_e_34833 - v_t_34831.Fd[0] * v_t_34831.Le, v_t_34831.Qt = v_n_34834 - v_t_34831.Fd[1] * v_t_34831.G0;
    v_e_34833 = new scope.v_xl_28172();
    return v_e_34833.GA = v_t_34831, v_e_34833.UA = scope.v_Ge_28204(v_s_34836), this.HA.push(v_e_34833), this.jA || (this.jA = new scope.v_Il_28175(), this.lt.Ze(this.jA)), this.jA.Ze(v_t_34831), this.e8(v_i_34832, v_t_34831, 0), v_e_34833;
  },
  JA: function (v_t_34841) {
    v_t_34841.UA = 0;
  },
  Ld: function (v_t_34842, v_s_34843, v_R_34844) {
    const v_L_34845 = this;
    if (v_L_34845.Jt) {
      let v_f_34888 = this.lt.Le,
        v___34889 = this.lt.G0;
      scope.glContext.enable(scope.glContext.BLEND), scope.glContext.disable(scope.glContext.DEPTH_TEST), scope.glContext.disable(scope.glContext.CULL_FACE), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), scope.glContext.matrixMode(scope.glContext.MODELVIEW), scope.glContext.clearStencil(0), scope.glContext.clear(scope.glContext.STENCIL_BUFFER_BIT), scope.glContext.loadIdentity(), scope.glContext.translate(-1, 1, 0), scope.glContext.scale(2 / v_f_34888, 2 / v___34889, 1), v_gt_34913.prototype = {
        yb: function (v_t_34922) {
          this.Th = 0, this.Ah = v_t_34922.Ah, this.Ab = v_t_34922.Ab, this.Ib = v_t_34922.Ib, this.Cb = v_t_34922.Cb, this.Tb = v_t_34922.Tb, this.Md = v_t_34922.Md, this.kh = v_t_34922.kh, this.bh = v_t_34922.bh, this.Sh = v_t_34922.Sh, this.Lb = 0;
        }
      };
      var v_a_34846,
        v_o_34847,
        v_l_34848 = [];
      let v_t_34890 = 0,
        v_i_34891 = 0,
        v_h_34892 = 0,
        v_e_34893 = 0,
        v_n_34894 = 0,
        v_d_34895,
        v_v_34896,
        v_w_34897;
      var v_c_34849,
        v_u_34850,
        v_M_34851 = new function () {
          this.ph = 0, this.Le = 0, this.G0 = 0, this.bh = !1, this.Sh = !1, this.xh = new scope.v_bl_28168(), this.A_ = void 0;
        }(),
        v_at_34852 = new scope.v_bl_28168(),
        v_E_34853 = new scope.v_bl_28168(),
        v_D_34854 = new scope.v_bl_28168(),
        v_F_34855 = new scope.v_xt_28153();
      let v_g_34898 = new scope.v_xt_28153(),
        v_m_34899 = new scope.v_al_28152(),
        v_p_34900 = new scope.v_al_28152(),
        v_k_34901 = scope.mathPI / 180,
        v_b_34902 = [0, 0, 0, 0, 0, 0, 0, 0, 0],
        v_r_34903,
        v_y_34904 = ((v_r_34903 = new v_wt_34912()).Ih = this.lt, v_r_34903.yh = v_f_34888, v_r_34903.Ch = v___34889, scope.v_xt_28153.T_(v_r_34903.A_), v_l_34848.push(v_r_34903), v_R_34844.xf.Gl("vertices")),
        v_S_34905 = v_R_34844.xf.Gl("colors"),
        v_A_34906 = v_R_34844.xf.Gl("coords"),
        v_x_34907 = v_R_34844.xf.Gl("texCoord1"),
        v_C_34908 = v_R_34844.xf.Gl("attrTexBrightness"),
        v_T_34909 = v_R_34844.xf.Gl("attrTexGrayscale"),
        v_I_34910 = new v_gt_34913(),
        v_P_34911 = new v_gt_34913();
      for (; 0 < v_l_34848.length;) if ((v_a_34846 = v_l_34848[v_l_34848.length - 1]).Fh >= v_a_34846.Ih.We.length) v_a_34846.Bh || !v_a_34846.Mh || v_P_34911.kh <= 0 || (--v_P_34911.kh, v_st_34915()), v_l_34848.pop();else {
        if ((v_o_34847 = v_a_34846.Ih.We[v_a_34846.Fh]).Be) {
          v_e_34893 = v_a_34846.yh, v_n_34894 = v_a_34846.Ch, 0 != v_a_34846.Ih.Le && (v_e_34893 = v_a_34846.Ih.Le), 0 != v_a_34846.Ih.G0 && (v_n_34894 = v_a_34846.Ih.G0), v_t_34890 = v_o_34847.Le, v_i_34891 = v_o_34847.G0, 2 === v_o_34847.Fi && v_o_34847.Zd && !v_o_34847.zt ? (v_d_34895 = v_L_34845.Mf[v_o_34847.Xt]) && v_d_34895.rd[v_o_34847.Je] && (v_w_34897 = v_d_34895.rd[v_o_34847.Je], v_t_34890 = v_w_34897.Le, v_i_34891 = v_w_34897.G0) : 0 === v_o_34847.Fi && (0 === v_t_34890 && (v_t_34890 = v_e_34893), 0 === v_i_34891) && (v_i_34891 = v_n_34894), v_at_34852.sh(v_E_34853), (v_o_34847.Bd ? v_at_34852 : v_a_34846.xh).sh(v_D_34854), v_H_34860 = v_U_34859 = v_J_34861 = v_G_34858 = v_N_34857 = v_B_34856 = void 0;
          var v_B_34856 = v_o_34847,
            v_N_34857 = v_s_34843 / 1e3,
            v_G_34858 = v_E_34853;
          if (v_B_34856.Dd.pd && v_B_34856.Dd.kd) {
            let v_t_34923 = v_B_34856.Dd.rr - .0166667 * v_B_34856.Dd.ud;
            0 < v_t_34923 && 0 < v_B_34856.Dd.fd && (v_t_34923 = scope.v_Za_28087(v_t_34923, .0166667 * v_B_34856.Dd.fd));
            var v_U_34859,
              v_H_34860,
              v_J_34861 = v_B_34856.Dd.kd.ld;
            let v_i_34924,
              v_e_34925 = 0;
            for ([v_U_34859, v_H_34860] of v_J_34861) if (!(v_H_34860.length < 2)) for (v_i_34924 = 1; v_i_34924 < v_H_34860.length; ++v_i_34924) if (.0166667 * v_H_34860[v_i_34924].od > v_t_34923 || v_i_34924 === v_H_34860.length - 1) {
              switch (v_e_34925 = scope.v_Ee_28084(v_H_34860[v_i_34924 - 1].Cr, v_H_34860[v_i_34924].Cr, scope.v_il_28147(v_H_34860[v_i_34924].z2, scope.mathMin(scope.mathMax(scope.v_Ya_28085(.0166667 * v_H_34860[v_i_34924 - 1].od, .0166667 * v_H_34860[v_i_34924].od, v_t_34923), 0), 1))), v_U_34859) {
                case scope.v_Vo_28136:
                  v_G_34858.on[0] += v_e_34925;
                  break;
                case scope.v_Wo_28137:
                  v_G_34858.on[1] += v_e_34925;
                  break;
                case 3:
                  v_G_34858.on[2] += v_e_34925;
                  break;
                case scope.v_Xo_28138:
                  v_G_34858.Oe[0] *= v_e_34925;
                  break;
                case scope.v_zo_28139:
                  v_G_34858.Oe[1] *= v_e_34925;
                  break;
                case 6:
                  v_G_34858.Oe[2] *= v_e_34925;
                  break;
                case 7:
                  v_G_34858.vd[0] += v_e_34925;
                  break;
                case 8:
                  v_G_34858.vd[1] += v_e_34925;
                  break;
                case 9:
                  v_G_34858.vd[2] += v_e_34925;
                  break;
                case 12:
                  v_G_34858.gd[0] += v_e_34925;
                  break;
                case 13:
                  v_G_34858.gd[1] += v_e_34925;
                  break;
                case scope.v_Ko_28140:
                  v_G_34858.qe *= v_e_34925;
                  break;
                case 11:
                  v_G_34858.wd += v_e_34925;
                  break;
                case 14:
                  v_G_34858.Nn += v_e_34925;
                  break;
                case 23:
                  v_G_34858.Yk[0] += v_e_34925;
                  break;
                case 24:
                  v_G_34858.Yk[1] += v_e_34925;
                  break;
                case 25:
                  v_G_34858.Zk[0] *= v_e_34925;
                  break;
                case 26:
                  v_G_34858.Zk[1] *= v_e_34925;
                  break;
                case 27:
                  v_G_34858.$k += v_e_34925;
                  break;
                default:
                  if (5 === v_B_34856.Fi) switch (v_U_34859) {
                    case 15:
                      v_B_34856.eh[0] = v_e_34925;
                      break;
                    case 16:
                      v_B_34856.eh[1] = v_e_34925;
                      break;
                    case 17:
                      v_B_34856.eh[2] = v_e_34925;
                      break;
                    case 18:
                      v_B_34856.eh[3] = v_e_34925;
                      break;
                    case 19:
                      v_B_34856.eh[4] = v_e_34925;
                      break;
                    case 20:
                      v_B_34856.eh[5] = v_e_34925;
                      break;
                    case 21:
                      v_B_34856.eh[6] = v_e_34925;
                      break;
                    case 22:
                      v_B_34856.eh[7] = v_e_34925;
                  }
              }
              break;
            }
            v_B_34856.Dd.rr += v_N_34857;
          }
          if (!function (v_e_34926, v_n_34927, v_t_34928) {
            v_t_34928.on[0] += v_i_34929(scope.v_Vo_28136), v_t_34928.on[1] += v_i_34929(scope.v_Wo_28137), v_t_34928.on[2] += v_i_34929(3), v_t_34928.Oe[0] *= v_i_34929(scope.v_Xo_28138), v_t_34928.Oe[1] *= v_i_34929(scope.v_zo_28139), v_t_34928.Oe[2] *= v_i_34929(6), v_t_34928.vd[0] += v_i_34929(7), v_t_34928.vd[1] += v_i_34929(8), v_t_34928.vd[2] += v_i_34929(9), v_t_34928.gd[0] += v_i_34929(12), v_t_34928.gd[1] += v_i_34929(13), v_t_34928.qe *= v_i_34929(scope.v_Ko_28140), v_t_34928.wd += v_i_34929(11), v_t_34928.Nn += v_i_34929(14), 2 === v_e_34926.Fi && (v_t_34928.Yk[0] += v_i_34929(23), v_t_34928.Yk[1] += v_i_34929(24), v_t_34928.Zk[0] *= v_i_34929(25), v_t_34928.Zk[1] *= v_i_34929(26), v_t_34928.$k += v_i_34929(27));
            function v_i_34929(v_t_34930) {
              var v_i_34931 = v_e_34926._h(v_t_34930),
                v_t_34930 = v_e_34926.Gd.Sd.get(v_t_34930);
              return v_t_34930 && (v_t_34930.rr += v_n_34927), v_i_34931;
            }
          }(v_o_34847, v_s_34843 / 1e3, v_E_34853), v_D_34854.oh(v_E_34853), v_M_34851.ph = v_s_34843 / 1e3, v_J_34861 = v_t_34890 * v_o_34847.Fd[0], v_N_34857 = v_i_34891 * v_o_34847.Fd[1], v_o_34847.Bd ? scope.v_xt_28153.T_(v_F_34855) : scope.v_xt_28153.ih(v_a_34846.A_, v_F_34855), scope.v_xt_28153.on(v_F_34855, v_J_34861 + v_o_34847.Te + v_E_34853.on[0], v_N_34857 + v_o_34847.Qt + v_E_34853.on[1], 0 + v_E_34853.on[2]), scope.v_xt_28153.vd(v_F_34855, v_E_34853.vd[0] * v_k_34901, v_E_34853.vd[1] * v_k_34901, v_E_34853.vd[2] * v_k_34901), scope.v_xt_28153.ah(v_F_34855, v_E_34853.gd[0] * v_k_34901, v_E_34853.gd[1] * v_k_34901), scope.v_xt_28153.Oe(v_F_34855, v_E_34853.Oe[0], v_E_34853.Oe[1], v_E_34853.Oe[2]), scope.v_xt_28153.on(v_F_34855, -v_J_34861, -v_N_34857, -0), v_M_34851.Le = v_t_34890, v_M_34851.G0 = v_i_34891, v_M_34851.xh = v_D_34854, v_M_34851.A_ = v_F_34855, 0 < v_M_34851.xh.qe) switch (v_o_34847.Pd && !v_a_34846.Mh && (v_a_34846.Mh = !0, ++v_P_34911.kh), v_M_34851.bh = v_a_34846.Bh || v_o_34847.Pd, v_o_34847.Fi) {
            case 1:
              v_O_34863 = v_j_34862 = void 0;
              var v_j_34862 = v_o_34847,
                v_O_34863 = v_M_34851;
              v_pt_34916(v_j_34862.Fi), v_bt_34918(v_j_34862.Md), v_yt_34919(v_O_34863.bh), v_St_34920(!1), v_At_34921(), v_h_34892 = v_I_34910.Th, scope.v_al_28152.Q3(0, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_O_34863.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 0] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 1] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_O_34863.Le, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_O_34863.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 3] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 4] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 5] = v_p_34900.m[2], scope.v_al_28152.Q3(0, v_O_34863.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_O_34863.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 6] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 7] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_O_34863.Le, v_O_34863.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_O_34863.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 9] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 10] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 11] = v_p_34900.m[2];
              for (let v_t_34932 = 0; v_t_34932 < 4; ++v_t_34932) v_S_34905[4 * v_h_34892 + 4 * v_t_34932] = v_j_34862.Fe[0 + 4 * v_t_34932] * (1 - v_O_34863.xh.wd), v_S_34905[4 * v_h_34892 + 4 * v_t_34932 + 1] = v_j_34862.Fe[1 + 4 * v_t_34932] * (1 - v_O_34863.xh.wd), v_S_34905[4 * v_h_34892 + 4 * v_t_34932 + 2] = v_j_34862.Fe[2 + 4 * v_t_34932] * (1 - v_O_34863.xh.wd), v_S_34905[4 * v_h_34892 + 4 * v_t_34932 + 3] = v_j_34862.Fe[3 + 4 * v_t_34932] * v_O_34863.xh.qe;
              v_I_34910.Th += 4, ++v_R_34844.Ph.Rh;
              break;
            case 2:
              !function (v_n_34933, v_r_34934) {
                let v_t_34935 = "",
                  v_i_34936 = "";
                if (v_n_34933.zt) v_t_34935 = v_n_34933.Xt;else {
                  if (!(v_d_34895 = v_L_34845.Mf[v_n_34933.Xt])) return;
                  v_t_34935 = v_d_34895.ed;
                }
                if ("" !== v_n_34933.Qk) {
                  if (!(v_v_34896 = v_L_34845.Mf[v_n_34933.Qk])) return;
                  v_i_34936 = v_v_34896.ed;
                }
                v_pt_34916(v_n_34933.Fi), v_kt_34917(v_t_34935, v_n_34933.zt), function (v_t_34945, v_i_34946) {
                  v_P_34911.Cb = v_t_34945, v_P_34911.Tb = v_i_34946;
                }(v_i_34936, !1), v_bt_34918(v_n_34933.Md), v_yt_34919(v_r_34934.bh), v_St_34920(v_mt_34914(v_r_34934)), function (v_t_34947) {
                  v_P_34911.Lb = v_t_34947;
                }(v_n_34933.Yd ? 9 : 1), v_At_34921();
                let v_s_34937 = 0,
                  v_a_34938 = 0,
                  v_o_34939 = 1,
                  v_l_34940 = 1;
                !v_n_34933.zt && v_d_34895.rd[v_n_34933.Je] && (v_w_34897 = v_d_34895.rd[v_n_34933.Je], v_s_34937 = v_w_34897.ou / v_d_34895.Le, v_a_34938 = v_w_34897.Oa / v_d_34895.G0, v_o_34939 = (v_w_34897.ou + v_w_34897.Le) / v_d_34895.Le, v_l_34940 = (v_w_34897.Oa + v_w_34897.G0) / v_d_34895.G0);
                {
                  var v_e_34941 = v_o_34939 - v_s_34937,
                    v_c_34942 = v_l_34940 - v_a_34938;
                  v_o_34939 = v_s_34937 + v_n_34933.gt[2] * v_e_34941, v_l_34940 = v_a_34938 + v_n_34933.gt[3] * v_c_34942, v_s_34937 += v_n_34933.gt[0] * v_e_34941, v_a_34938 += v_n_34933.gt[1] * v_c_34942;
                }
                v_h_34892 = v_I_34910.Th, "" !== v_n_34933.Qk && (scope.v_xt_28153.T_(v_g_34898), scope.v_xt_28153.on(v_g_34898, v_n_34933.c8[0] + v_r_34934.xh.Yk[0], v_n_34933.c8[1] + v_r_34934.xh.Yk[1], 0), scope.v_xt_28153.vd(v_g_34898, 0, 0, v_r_34934.xh.$k * v_k_34901), scope.v_xt_28153.Oe(v_g_34898, v_r_34934.xh.Zk[0], v_r_34934.xh.Zk[1], 0), scope.v_xt_28153.on(v_g_34898, -v_n_34933.c8[0], -v_n_34933.c8[1], 0), scope.v_al_28152.Q3(0, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_g_34898, v_m_34899, v_p_34900), v_x_34907[2 * v_h_34892 + 0] = v_p_34900.m[0], v_x_34907[2 * v_h_34892 + 1] = v_p_34900.m[1], scope.v_al_28152.Q3(1, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_g_34898, v_m_34899, v_p_34900), v_x_34907[2 * v_h_34892 + 2] = v_p_34900.m[0], v_x_34907[2 * v_h_34892 + 3] = v_p_34900.m[1], scope.v_al_28152.Q3(0, 1, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_g_34898, v_m_34899, v_p_34900), v_x_34907[2 * v_h_34892 + 4] = v_p_34900.m[0], v_x_34907[2 * v_h_34892 + 5] = v_p_34900.m[1], scope.v_al_28152.Q3(1, 1, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_g_34898, v_m_34899, v_p_34900), v_x_34907[2 * v_h_34892 + 6] = v_p_34900.m[0], v_x_34907[2 * v_h_34892 + 7] = v_p_34900.m[1]);
                if (v_n_34933.Yd) {
                  var v_u_34943 = [0, v_n_34933.$d[0], v_r_34934.Le - v_n_34933.$d[2], v_r_34934.Le, 0, v_n_34933.$d[1], v_r_34934.G0 - v_n_34933.$d[3], v_r_34934.G0],
                    v_f_34944 = [v_s_34937, v_s_34937 + v_n_34933.$d[0] / v_d_34895.Le, v_o_34939 - v_n_34933.$d[2] / v_d_34895.Le, v_o_34939, v_a_34938, v_a_34938 + v_n_34933.$d[1] / v_d_34895.G0, v_l_34940 - v_n_34933.$d[3] / v_d_34895.G0, v_l_34940];
                  let v_t_34948 = 0,
                    v_i_34949 = 0,
                    v_e_34950 = 0;
                  for (v_i_34949 = 0; v_i_34949 < 3; ++v_i_34949) for (v_t_34948 = 0; v_t_34948 < 3; ++v_t_34948) {
                    for (scope.v_al_28152.Q3(v_u_34943[v_t_34948], v_u_34943[v_i_34949 + 4], 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 0] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 1] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_u_34943[v_t_34948 + 1], v_u_34943[v_i_34949 + 4], 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 3] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 4] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 5] = v_p_34900.m[2], scope.v_al_28152.Q3(v_u_34943[v_t_34948], v_u_34943[v_i_34949 + 5], 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 6] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 7] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_u_34943[v_t_34948 + 1], v_u_34943[v_i_34949 + 5], 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 9] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 10] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 11] = v_p_34900.m[2], v_e_34950 = 0; v_e_34950 < 4; ++v_e_34950) v_S_34905[4 * v_h_34892 + 4 * v_e_34950] = v_n_34933.Fe[0 + 4 * v_e_34950], v_S_34905[4 * v_h_34892 + 4 * v_e_34950 + 1] = v_n_34933.Fe[1 + 4 * v_e_34950], v_S_34905[4 * v_h_34892 + 4 * v_e_34950 + 2] = v_n_34933.Fe[2 + 4 * v_e_34950], v_S_34905[4 * v_h_34892 + 4 * v_e_34950 + 3] = v_n_34933.Fe[3 + 4 * v_e_34950] * v_r_34934.xh.qe, v_C_34908[v_h_34892 + v_e_34950] = v_r_34934.xh.wd, v_T_34909[v_h_34892 + v_e_34950] = v_r_34934.xh.Nn;
                    v_A_34906[2 * v_h_34892 + 0] = v_f_34944[v_t_34948], v_A_34906[2 * v_h_34892 + 1] = v_f_34944[v_i_34949 + 4], v_A_34906[2 * v_h_34892 + 2] = v_f_34944[v_t_34948 + 1], v_A_34906[2 * v_h_34892 + 3] = v_f_34944[v_i_34949 + 4], v_A_34906[2 * v_h_34892 + 4] = v_f_34944[v_t_34948], v_A_34906[2 * v_h_34892 + 5] = v_f_34944[v_i_34949 + 5], v_A_34906[2 * v_h_34892 + 6] = v_f_34944[v_t_34948 + 1], v_A_34906[2 * v_h_34892 + 7] = v_f_34944[v_i_34949 + 5], v_h_34892 += 4;
                  }
                  v_I_34910.Th += 36, v_R_34844.Ph.Rh += 9;
                } else {
                  scope.v_al_28152.Q3(0, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 0] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 1] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_r_34934.Le, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 3] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 4] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 5] = v_p_34900.m[2], scope.v_al_28152.Q3(0, v_r_34934.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 6] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 7] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_r_34934.Le, v_r_34934.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_r_34934.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 9] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 10] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 11] = v_p_34900.m[2];
                  for (let v_t_34951 = 0; v_t_34951 < 4; ++v_t_34951) v_S_34905[4 * v_h_34892 + 4 * v_t_34951] = v_n_34933.Fe[0 + 4 * v_t_34951], v_S_34905[4 * v_h_34892 + 4 * v_t_34951 + 1] = v_n_34933.Fe[1 + 4 * v_t_34951], v_S_34905[4 * v_h_34892 + 4 * v_t_34951 + 2] = v_n_34933.Fe[2 + 4 * v_t_34951], v_S_34905[4 * v_h_34892 + 4 * v_t_34951 + 3] = v_n_34933.Fe[3 + 4 * v_t_34951] * v_r_34934.xh.qe, v_C_34908[v_h_34892 + v_t_34951] = v_r_34934.xh.wd, v_T_34909[v_h_34892 + v_t_34951] = v_r_34934.xh.Nn;
                  v_A_34906[2 * v_h_34892 + 0] = v_s_34937, v_A_34906[2 * v_h_34892 + 1] = v_a_34938, v_A_34906[2 * v_h_34892 + 2] = v_o_34939, v_A_34906[2 * v_h_34892 + 3] = v_a_34938, v_A_34906[2 * v_h_34892 + 4] = v_s_34937, v_A_34906[2 * v_h_34892 + 5] = v_l_34940, v_A_34906[2 * v_h_34892 + 6] = v_o_34939, v_A_34906[2 * v_h_34892 + 7] = v_l_34940, v_I_34910.Th += 4, ++v_R_34844.Ph.Rh;
                }
              }(v_o_34847, v_M_34851);
              break;
            case 3:
              v_c_34849 = v_o_34847, v_u_34850 = v_s_34843 / 1e3, v_W_34865 = v_a_34846.un || v_o_34847.un, v_c_34849.Nd && !v_W_34865 ? v_c_34849.q3.rr += v_u_34850 : v_c_34849.q3.rr = 0, v_Y_34871 = v_Q_34877 = v_$_34876 = v_Z_34875 = v_ut_34874 = v_q_34873 = v_ct_34872 = v_lt_34870 = v_ot_34869 = v_K_34868 = v_z_34867 = v_X_34866 = v_W_34865 = v_V_34864 = void 0;
              var v_V_34864 = v_o_34847,
                v_W_34865 = v_M_34851,
                v_X_34866 = (v_st_34915(), v_L_34845.Td[v_V_34864.jd]);
              if (v_X_34866) {
                v_R_34844.Dh.M3(v_V_34864.R3, v_V_34864.I_), v_R_34844.Dh.P3(v_W_34865.Le), v_R_34844.Dh.D3(v_W_34865.G0), v_R_34844.Dh.N3(v_V_34864.w_), v_R_34844.Dh.H3(v_V_34864.F_), v_R_34844.Dh.U3(v_V_34864.B_, v_V_34864.M_), v_R_34844.Dh.V3(v_W_34865.A_), v_X_34866.X3(v_V_34864.Wt, v_V_34864.Vd, v_V_34864.Od, v_V_34864.Tn);
                var v_z_34867 = [v_V_34864.Fe[8] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[9] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[10] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[11] * v_W_34865.xh.qe, v_V_34864.Fe[12] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[13] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[14] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[15] * v_W_34865.xh.qe, v_V_34864.Fe[0] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[1] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[2] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[3] * v_W_34865.xh.qe, v_V_34864.Fe[4] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[5] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[6] * (1 - v_W_34865.xh.wd), v_V_34864.Fe[7] * v_W_34865.xh.qe],
                  v_K_34868 = [v_V_34864.Xd[0] * (1 - v_W_34865.xh.wd), v_V_34864.Xd[1] * (1 - v_W_34865.xh.wd), v_V_34864.Xd[2] * (1 - v_W_34865.xh.wd), v_V_34864.Xd[3] * v_W_34865.xh.qe];
                1 === v_V_34864.Md ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : 2 === v_V_34864.Md ? scope.glContext.blendFunc(scope.glContext.DST_COLOR, scope.glContext.ZERO) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), v_X_34866.Z3();
                let v_t_34952 = v_X_34866.z_;
                if (v_V_34864.Jd && (v_W_34865 = v_W_34865.Le / v_t_34952) < 1 && (v_X_34866.X3(v_V_34864.Wt, v_V_34864.Vd * v_W_34865, v_V_34864.Od, v_V_34864.Tn), v_X_34866.Z3(), v_t_34952 = v_X_34866.z_), v_R_34844.Dh.G3(0), v_R_34844.Dh.j3(0), v_V_34864.Nd && !v_V_34864.B_ && v_t_34952 > v_R_34844.Dh.y_) {
                  var v_ot_34869 = v_t_34952 + 60,
                    v_lt_34870 = scope.mathMax(v_V_34864.q3.rr - v_V_34864.Ud, 0) * v_V_34864.Hd;
                  for (let v_t_34953 = 0; v_t_34953 < 2; ++v_t_34953) v_R_34844.Dh.G3(-scope.v_Za_28087(v_lt_34870, v_ot_34869) + v_ot_34869 * v_t_34953), v_V_34864.Wd && v_X_34866.Y3([v_V_34864.Kd, v_V_34864.zd, 0], v_K_34868), v_X_34866.Y3([0, 0, 0], v_z_34867);
                } else if (v_V_34864.Nd && v_V_34864.B_ && v_X_34866.Z_ > v_R_34844.Dh.C_) {
                  var v_Y_34871,
                    v_ct_34872 = scope.mathMax(v_V_34864.q3.rr - v_V_34864.Ud, 0),
                    v_q_34873 = scope.mathFloor(v_R_34844.Dh.C_ / v_X_34866.Y_) * v_X_34866.Y_,
                    v_ut_34874 = scope.mathCeil(v_X_34866.Z_ / v_q_34873),
                    v_Z_34875 = v_V_34864.Hd,
                    v_$_34876 = 1 / v_q_34873 * v_R_34844.Dh.C_,
                    v_Q_34877 = v_ut_34874 * v_Z_34875;
                  for (let v_t_34954 = 0; v_t_34954 < 2; ++v_t_34954) {
                    if (v_Y_34871 = scope.v_Za_28087(v_ct_34872 + v_Q_34877 * v_t_34954, 2 * v_Q_34877), v_ct_34872 < v_$_34876) {
                      if (0 === v_t_34954) v_R_34844.Dh.j3(0);else if (1 === v_t_34954) continue;
                    } else v_Y_34871 < v_$_34876 ? v_R_34844.Dh.j3(v_R_34844.Dh.C_ * (v_$_34876 - v_Y_34871) / v_$_34876) : v_Q_34877 < v_Y_34871 ? v_R_34844.Dh.j3(-(v_Y_34871 - v_Q_34877) * v_q_34873 - v_q_34873 * (v_ut_34874 - 1)) : v_R_34844.Dh.j3(-(scope.mathFloor(v_Y_34871 / v_Z_34875) * v_q_34873 + scope.mathMin(scope.v_Za_28087(v_Y_34871 + v_Z_34875, v_Z_34875) * v_q_34873, v_q_34873) - v_q_34873));
                    v_V_34864.Wd && v_X_34866.Y3([v_V_34864.Kd, v_V_34864.zd, 0], v_K_34868), v_X_34866.Y3([0, 0, 0], v_z_34867);
                  }
                } else v_V_34864.Wd && v_X_34866.Y3([v_V_34864.Kd, v_V_34864.zd, 0], v_K_34868), v_X_34866.Y3([0, 0, 0], v_z_34867);
              }
              break;
            case 4:
              v_dt_34883 = v_ht_34882 = v__t_34881 = v_ft_34880 = v_it_34879 = v_tt_34878 = v_vt_34886 = v_nt_34885 = v_et_34884 = void 0;
              var v_tt_34878,
                v_it_34879,
                v_ft_34880,
                v__t_34881,
                v_ht_34882,
                v_dt_34883,
                v_et_34884 = v_o_34847,
                v_nt_34885 = v_M_34851,
                v_vt_34886 = v_L_34845.Tk[v_et_34884.Ak];
              if (v_vt_34886) {
                let v_i_34955;
                let v_e_34956 = 0;
                let v_n_34957 = 0,
                  v_r_34958 = "";
                if (v_et_34884.R3 !== scope.v_Yo_28141) {
                  let v_t_34959 = 0;
                  for (v_n_34957 = 0; v_n_34957 < v_et_34884.Wt.length; ++v_n_34957) (v_i_34955 = v_vt_34886.Ik.get(v_et_34884.Wt.charCodeAt(v_n_34957))) && (v_r_34958 !== v_i_34955.Xt && (v_d_34895 = v_L_34845.Mf[v_i_34955.Xt], v_r_34958 = v_i_34955.Xt), v_d_34895) && void 0 !== (v_w_34897 = v_d_34895.rd[v_i_34955.Je]) && (v_t_34959 += v_w_34897.Le * v_et_34884.Vd + v_et_34884.qd);
                  v_t_34959 -= v_et_34884.qd, v_et_34884.R3 === scope.v_qo_28142 ? v_e_34956 += (v_nt_34885.Le - v_t_34959) / 2 : v_et_34884.R3 === scope.v_Zo_28143 && (v_e_34956 += v_nt_34885.Le - v_t_34959);
                }
                for (v_pt_34916(v_et_34884.Fi), v_bt_34918(v_et_34884.Md), v_yt_34919(v_nt_34885.bh), v_St_34920(v_mt_34914(v_nt_34885)), v_r_34958 = "", v_n_34957 = 0; v_n_34957 < v_et_34884.Wt.length; ++v_n_34957) if ((v_i_34955 = v_vt_34886.Ik.get(v_et_34884.Wt.charCodeAt(v_n_34957))) && (v_r_34958 !== v_i_34955.Xt && (v_d_34895 = v_L_34845.Mf[v_i_34955.Xt], v_r_34958 = v_i_34955.Xt, v_kt_34917(v_d_34895.ed, !1), v_At_34921()), v_d_34895) && void 0 !== (v_w_34897 = v_d_34895.rd[v_i_34955.Je])) {
                  v_h_34892 = v_I_34910.Th, v_ht_34882 = v_e_34956 + v_w_34897.Le * v_et_34884.Vd, v_dt_34883 = v_w_34897.G0 * v_et_34884.Od, v_tt_34878 = v_w_34897.ou / v_d_34895.Le, v_it_34879 = v_w_34897.Oa / v_d_34895.G0, v_ft_34880 = (v_w_34897.ou + v_w_34897.Le) / v_d_34895.Le, v__t_34881 = (v_w_34897.Oa + v_w_34897.G0) / v_d_34895.G0, scope.v_al_28152.Q3(v_e_34956, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_nt_34885.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 0] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 1] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_ht_34882, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_nt_34885.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 3] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 4] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 5] = v_p_34900.m[2], scope.v_al_28152.Q3(v_e_34956, v_dt_34883, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_nt_34885.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 6] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 7] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_ht_34882, v_dt_34883, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_nt_34885.A_, v_m_34899, v_p_34900), v_y_34904[3 * v_h_34892 + 9] = v_p_34900.m[0], v_y_34904[3 * v_h_34892 + 10] = -v_p_34900.m[1], v_y_34904[3 * v_h_34892 + 11] = v_p_34900.m[2];
                  for (let v_t_34960 = 0; v_t_34960 < 4; ++v_t_34960) v_S_34905[4 * v_h_34892 + 4 * v_t_34960] = v_et_34884.Fe[0 + 4 * v_t_34960], v_S_34905[4 * v_h_34892 + 4 * v_t_34960 + 1] = v_et_34884.Fe[1 + 4 * v_t_34960], v_S_34905[4 * v_h_34892 + 4 * v_t_34960 + 2] = v_et_34884.Fe[2 + 4 * v_t_34960], v_S_34905[4 * v_h_34892 + 4 * v_t_34960 + 3] = v_et_34884.Fe[3 + 4 * v_t_34960] * v_nt_34885.xh.qe, v_C_34908[v_h_34892 + v_t_34960] = v_nt_34885.xh.wd, v_T_34909[v_h_34892 + v_t_34960] = v_nt_34885.xh.Nn;
                  v_A_34906[2 * v_h_34892 + 0] = v_tt_34878, v_A_34906[2 * v_h_34892 + 1] = v_it_34879, v_A_34906[2 * v_h_34892 + 2] = v_ft_34880, v_A_34906[2 * v_h_34892 + 3] = v_it_34879, v_A_34906[2 * v_h_34892 + 4] = v_tt_34878, v_A_34906[2 * v_h_34892 + 5] = v__t_34881, v_A_34906[2 * v_h_34892 + 6] = v_ft_34880, v_A_34906[2 * v_h_34892 + 7] = v__t_34881, v_e_34956 += v_w_34897.Le * v_et_34884.Vd + v_et_34884.qd, v_I_34910.Th += 4, ++v_R_34844.Ph.Rh;
                }
              }
              break;
            case 5:
              v_u_34850 = v_M_34851, 0 != (v_c_34849 = v_o_34847).Qd && (v_st_34915(), (1 == v_c_34849.Qd ? function (v_t_34961, v_i_34962) {
                let v_n_34963 = v_t_34961.eh[0],
                  v_e_34964 = v_t_34961.eh[1],
                  v_r_34965 = 0;
                {
                  var v_s_34966 = v_n_34963 * v_n_34963 / 100;
                  let v_t_34972 = 0,
                    v_i_34973 = 0,
                    v_e_34974 = 0;
                  for (v_r_34965 = 0; v_r_34965 < 10; v_r_34965++) v_i_34973 = 1 + 2 * v_r_34965, v_e_34974 = Math.exp(v_i_34973 * v_i_34973 * -.5 / v_s_34966), v_b_34902[v_r_34965] = v_e_34974, 0 < v_r_34965 && (v_e_34974 *= 2), v_t_34972 += v_e_34974;
                  for (v_r_34965 = 0; v_r_34965 < 10; v_r_34965++) v_b_34902[v_r_34965] /= v_t_34972;
                }
                var v_a_34967 = v_R_34844.jh.Gl("vertices"),
                  v_o_34968 = v_R_34844.jh.Gl("colors"),
                  v_l_34969 = v_R_34844.jh.Gl("coords");
                for (v_r_34965 = 0; v_r_34965 < 4; ++v_r_34965) v_o_34968[4 * v_r_34965 + 0] = v_t_34961.Fe[0 + 4 * v_r_34965], v_o_34968[4 * v_r_34965 + 1] = v_t_34961.Fe[1 + 4 * v_r_34965], v_o_34968[4 * v_r_34965 + 2] = v_t_34961.Fe[2 + 4 * v_r_34965], v_o_34968[4 * v_r_34965 + 3] = v_t_34961.Fe[3 + 4 * v_r_34965] * v_i_34962.xh.qe;
                var v_c_34970 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                scope.v_al_28152.Q3(0, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_i_34962.A_, v_m_34899, v_p_34900), v_c_34970[0] = v_p_34900.m[0], v_c_34970[1] = v_p_34900.m[1], v_c_34970[2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_i_34962.Le, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_i_34962.A_, v_m_34899, v_p_34900), v_c_34970[3] = v_p_34900.m[0], v_c_34970[4] = v_p_34900.m[1], v_c_34970[5] = v_p_34900.m[2], scope.v_al_28152.Q3(0, v_i_34962.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_i_34962.A_, v_m_34899, v_p_34900), v_c_34970[6] = v_p_34900.m[0], v_c_34970[7] = v_p_34900.m[1], v_c_34970[8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_i_34962.Le, v_i_34962.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_i_34962.A_, v_m_34899, v_p_34900), v_c_34970[9] = v_p_34900.m[0], v_c_34970[10] = v_p_34900.m[1], v_c_34970[11] = v_p_34900.m[2];
                {
                  var v_u_34971 = [scope.mathMin(v_c_34970[0], scope.mathMin(v_c_34970[3], scope.mathMin(v_c_34970[6], v_c_34970[9]))), scope.mathMin(v_c_34970[1], scope.mathMin(v_c_34970[4], scope.mathMin(v_c_34970[7], v_c_34970[10]))) - 10 * v_e_34964, scope.mathMax(v_c_34970[0], scope.mathMax(v_c_34970[3], scope.mathMax(v_c_34970[6], v_c_34970[9]))), scope.mathMax(v_c_34970[1], scope.mathMax(v_c_34970[4], scope.mathMax(v_c_34970[7], v_c_34970[10]))) + 10 * v_e_34964];
                  v_a_34967[0] = v_u_34971[0], v_a_34967[1] = -v_u_34971[1], v_a_34967[2] = 0, v_a_34967[3] = v_u_34971[2], v_a_34967[4] = -v_u_34971[1], v_a_34967[5] = 0, v_a_34967[6] = v_u_34971[0], v_a_34967[7] = -v_u_34971[3], v_a_34967[8] = 0, v_a_34967[9] = v_u_34971[2], v_a_34967[10] = -v_u_34971[3], v_a_34967[11] = 0, v_l_34969[0] = v_u_34971[0] / v_f_34888, v_l_34969[1] = 1 - v_u_34971[1] / v___34889, v_l_34969[2] = v_u_34971[2] / v_f_34888, v_l_34969[3] = 1 - v_u_34971[1] / v___34889, v_l_34969[4] = v_u_34971[0] / v_f_34888, v_l_34969[5] = 1 - v_u_34971[3] / v___34889, v_l_34969[6] = v_u_34971[2] / v_f_34888, v_l_34969[7] = 1 - v_u_34971[3] / v___34889, v_R_34844.jh.jl("vertices", 12), v_R_34844.jh.jl("coords", 8), v_R_34844.jh.jl("colors", 16);
                }
                for (v_R_34844.Cc(2), v_R_34844.Nh(1), scope.glContext.clear(scope.glContext.COLOR_BUFFER_BIT), scope.glContext.disable(scope.glContext.STENCIL_TEST), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), scope.v_Gt_27632.weight = v_b_34902, scope.v_Gt_27632.offset = v_e_34964 / v_f_34888, scope.v_Tt_27609.uniforms(scope.v_Gt_27632).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6), ++v_R_34844.Ph.Hh, v_r_34965 = 0; v_r_34965 < 12; ++v_r_34965) v_a_34967[v_r_34965] = v_c_34970[v_r_34965];
                for (v_l_34969[0] = v_a_34967[0] / v_f_34888, v_l_34969[1] = 1 - v_a_34967[1] / v___34889, v_l_34969[2] = v_a_34967[3] / v_f_34888, v_l_34969[3] = 1 - v_a_34967[4] / v___34889, v_l_34969[4] = v_a_34967[6] / v_f_34888, v_l_34969[5] = 1 - v_a_34967[7] / v___34889, v_l_34969[6] = v_a_34967[9] / v_f_34888, v_l_34969[7] = 1 - v_a_34967[10] / v___34889, v_r_34965 = 0; v_r_34965 < 4; ++v_r_34965) v_a_34967[3 * v_r_34965 + 1] *= -1;
                v_R_34844.jh.jl("vertices", 12), v_R_34844.jh.jl("coords", 8), v_R_34844.Cc(1), v_R_34844.Nh(2), 1 === v_t_34961.Md ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : 2 === v_t_34961.Md ? scope.glContext.blendFunc(scope.glContext.DST_COLOR, scope.glContext.ZERO) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA);
                0 === v_I_34910.kh ? scope.glContext.disable(scope.glContext.STENCIL_TEST) : (scope.glContext.enable(scope.glContext.STENCIL_TEST), scope.glContext.stencilFunc(scope.glContext.EQUAL, v_I_34910.kh, 255), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.KEEP, scope.glContext.KEEP));
                scope.v_Ut_27633.weight = v_b_34902, scope.v_Ut_27633.offset = v_e_34964 / v___34889, scope.v_It_27610.uniforms(scope.v_Ut_27633).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6), ++v_R_34844.Ph.Hh;
              } : function (v_i_34975, v_e_34976) {
                var v_t_34977 = v_R_34844.jh.Gl("vertices"),
                  v_n_34978 = v_R_34844.jh.Gl("colors"),
                  v_r_34979 = v_R_34844.jh.Gl("coords");
                scope.v_al_28152.Q3(0, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_e_34976.A_, v_m_34899, v_p_34900), v_t_34977[0] = v_p_34900.m[0], v_t_34977[1] = -v_p_34900.m[1], v_t_34977[2] = v_p_34900.m[2], scope.v_al_28152.Q3(v_e_34976.Le, 0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_e_34976.A_, v_m_34899, v_p_34900), v_t_34977[3] = v_p_34900.m[0], v_t_34977[4] = -v_p_34900.m[1], v_t_34977[5] = v_p_34900.m[2], scope.v_al_28152.Q3(0, v_e_34976.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_e_34976.A_, v_m_34899, v_p_34900), v_t_34977[6] = v_p_34900.m[0], v_t_34977[7] = -v_p_34900.m[1], v_t_34977[8] = v_p_34900.m[2], scope.v_al_28152.Q3(v_e_34976.Le, v_e_34976.G0, 0, 1, v_m_34899), scope.v_xt_28153.rh(v_e_34976.A_, v_m_34899, v_p_34900), v_t_34977[9] = v_p_34900.m[0], v_t_34977[10] = -v_p_34900.m[1], v_t_34977[11] = v_p_34900.m[2], v_r_34979[0] = v_t_34977[0] / v_f_34888, v_r_34979[1] = 1 + v_t_34977[1] / v___34889, v_r_34979[2] = v_t_34977[3] / v_f_34888, v_r_34979[3] = 1 + v_t_34977[4] / v___34889, v_r_34979[4] = v_t_34977[6] / v_f_34888, v_r_34979[5] = 1 + v_t_34977[7] / v___34889, v_r_34979[6] = v_t_34977[9] / v_f_34888, v_r_34979[7] = 1 + v_t_34977[10] / v___34889;
                for (let v_t_34984 = 0; v_t_34984 < 4; ++v_t_34984) v_n_34978[4 * v_t_34984 + 0] = v_i_34975.Fe[0 + 4 * v_t_34984], v_n_34978[4 * v_t_34984 + 1] = v_i_34975.Fe[1 + 4 * v_t_34984], v_n_34978[4 * v_t_34984 + 2] = v_i_34975.Fe[2 + 4 * v_t_34984], v_n_34978[4 * v_t_34984 + 3] = v_i_34975.Fe[3 + 4 * v_t_34984] * v_e_34976.xh.qe;
                v_R_34844.jh.jl("vertices", 12), v_R_34844.jh.jl("coords", 8), v_R_34844.jh.jl("colors", 16), v_R_34844.Cc(2), v_R_34844.Nh(1), scope.glContext.clear(scope.glContext.COLOR_BUFFER_BIT), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), scope.glContext.disable(scope.glContext.STENCIL_TEST), scope.v_Et_27616.uniforms(scope.v_Ht_27634).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6), ++v_R_34844.Ph.Hh, v_R_34844.Cc(1), v_R_34844.Nh(2), 1 === v_i_34975.Md ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : 2 === v_i_34975.Md ? scope.glContext.blendFunc(scope.glContext.DST_COLOR, scope.glContext.ZERO) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA);
                0 === v_I_34910.kh ? scope.glContext.disable(scope.glContext.STENCIL_TEST) : (scope.glContext.enable(scope.glContext.STENCIL_TEST), scope.glContext.stencilFunc(scope.glContext.EQUAL, v_I_34910.kh, 255), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.KEEP, scope.glContext.KEEP));
                switch (v_i_34975.Qd) {
                  case 3:
                    scope.v_Jt_27635.amount = v_i_34975.eh[0], scope.v_Rt_27613.uniforms(scope.v_Jt_27635).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                    break;
                  case 4:
                    scope.v_Lt_27614.uniforms({
                      texture: 0,
                      shiftHsl: [v_i_34975.eh[0], v_i_34975.eh[2] / 100, v_i_34975.eh[1] / 100]
                    }).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                    break;
                  case 5:
                    scope.v_Jt_27635.amount = v_i_34975.eh[0], scope.v_Mt_27615.uniforms(scope.v_Jt_27635).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                    break;
                  case 6:
                    scope.v_Jt_27635.amount = v_i_34975.eh[0], scope.v_Bt_27619.uniforms(scope.v_Jt_27635).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                    break;
                  case 7:
                    var v_s_34980,
                      v_a_34981 = v_L_34845.Mf[v_i_34975.Xt];
                    v_a_34981 && (v_a_34981 = v_R_34844.Mf[v_a_34981.ed]) && (v_s_34980 = [0, 0], v_l_34983 = ((v_r_34979[4] - v_r_34979[2]) * (v_r_34979[1] - v_r_34979[3]) - (v_r_34979[5] - v_r_34979[3]) * (v_r_34979[0] - v_r_34979[2])) / 2, v_o_34982 = ((v_r_34979[4] - v_r_34979[2]) * (v_r_34979[3] - v_r_34979[7]) - (v_r_34979[5] - v_r_34979[3]) * (v_r_34979[2] - v_r_34979[6])) / 2, v_s_34980[0] = v_r_34979[0] + (v_r_34979[6] - v_r_34979[0]) * v_l_34983 / (v_l_34983 + v_o_34982), v_s_34980[1] = v_r_34979[1] + (v_r_34979[7] - v_r_34979[1]) * v_l_34983 / (v_l_34983 + v_o_34982), v_a_34981.bind(1), scope.v_Ct_27608.uniforms({
                      texture: 0,
                      texture1: 1,
                      centerCoord: v_s_34980,
                      height: v_i_34975.eh[0]
                    }).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6));
                    break;
                  case 8:
                    scope.v_Dt_27617.uniforms({
                      texture: 0,
                      height: v_i_34975.eh[1],
                      time: v_i_34975.Dd.rr - .0166667 * v_i_34975.Dd.ud * v_i_34975.eh[2],
                      size: [1, 1]
                    }).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                    break;
                  case 9:
                    var v_o_34982,
                      v_l_34983 = v_L_34845.Mf[v_i_34975.Xt];
                    v_l_34983 && (v_o_34982 = v_R_34844.Mf[v_l_34983.ed]) && (v_o_34982.bind(1), scope.v_Ft_27618.uniforms({
                      texture: 0,
                      texture1: 1,
                      height: v_i_34975.eh[0]
                    }).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6));
                    break;
                  case 10:
                    scope.v_Pt_27611.uniforms({
                      texture: 0,
                      weight: v_i_34975.eh[0],
                      offset: v_i_34975.eh[1]
                    }).drawBuffers(v_R_34844.jh.Nl(), v_R_34844.jh.Yl(), scope.glContext.TRIANGLES, 6);
                }
              })(v_c_34849, v_u_34850));
          }
          0 < v_o_34847.We.length && ((v_r_34903 = new v_wt_34912()).Ih = v_o_34847, v_r_34903.yh = v_e_34893, v_r_34903.Ch = v_n_34894, v_r_34903.Mh = v_a_34846.Bh || v_o_34847.Pd, v_r_34903.Bh = v_r_34903.Mh, v_r_34903.un = v_a_34846.un || v_o_34847.un, v_D_34854.sh(v_r_34903.xh), scope.v_xt_28153.ih(v_F_34855, v_r_34903.A_), v_l_34848.push(v_r_34903));
        }
        ++v_a_34846.Fh;
      }
      v_st_34915();
      for (let v_t_34985 = 0; v_t_34985 < this.HA.length; ++v_t_34985) {
        var v_rt_34887 = this.HA[v_t_34985];
        v_rt_34887.W2 += v_s_34843, 0 <= v_rt_34887.UA && v_rt_34887.UA <= v_rt_34887.W2 && (this.jA.Ke(v_rt_34887.GA), this.HA.splice(v_t_34985, 1), --v_t_34985);
      }
      function v_wt_34912() {
        this.Ih = void 0, this.Fh = 0, this.yh = 0, this.Ch = 0, this.xh = new scope.v_bl_28168(), this.Mh = !1, this.Bh = !1, this.un = !1, this.A_ = new scope.v_xt_28153();
      }
      function v_gt_34913() {
        this.Th = 0, this.Ah = 0, this.Ab = "", this.Ib = !1, this.Cb = "", this.Tb = !1, this.Md = 0, this.kh = 0, this.bh = !1, this.Sh = !1, this.Lb = 0;
      }
      function v_mt_34914(v_t_34986) {
        return 0 < v_t_34986.xh.wd || 0 < v_t_34986.xh.Nn;
      }
      function v_st_34915() {
        switch (0 === v_I_34910.kh ? scope.glContext.disable(scope.glContext.STENCIL_TEST) : (scope.glContext.enable(scope.glContext.STENCIL_TEST), v_I_34910.bh ? (scope.glContext.stencilFunc(scope.glContext.EQUAL, v_I_34910.kh - 1, 255), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.INCR, scope.glContext.INCR)) : (scope.glContext.stencilFunc(scope.glContext.EQUAL, v_I_34910.kh, 255), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.KEEP, scope.glContext.KEEP))), v_I_34910.Ah) {
          case 1:
            v_R_34844.xf.jl("vertices", 3 * v_I_34910.Th), v_R_34844.xf.jl("colors", 4 * v_I_34910.Th), 1 === v_I_34910.Md ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : 2 === v_I_34910.Md ? scope.glContext.blendFunc(scope.glContext.DST_COLOR, scope.glContext.ZERO) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), (v_I_34910.bh ? v_R_34844.Vh.Uh : v_R_34844.Vh.Fe).drawBuffers(v_R_34844.xf.Nl(), v_R_34844.xf.Yl(), scope.glContext.TRIANGLES, v_I_34910.Th / 2 * 3), ++v_R_34844.Ph.Hh;
            break;
          case 2:
            {
              v_R_34844.xf.jl("vertices", 3 * v_I_34910.Th), v_R_34844.xf.jl("colors", 4 * v_I_34910.Th), v_R_34844.xf.jl("coords", 2 * v_I_34910.Th), v_I_34910.Sh && (v_R_34844.xf.jl("attrTexBrightness", v_I_34910.Th), v_R_34844.xf.jl("attrTexGrayscale", v_I_34910.Th)), 1 === v_I_34910.Md ? scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE) : 2 === v_I_34910.Md ? scope.glContext.blendFunc(scope.glContext.DST_COLOR, scope.glContext.ZERO) : scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA);
              let v_t_34987;
              if (v_t_34987 = (v_I_34910.Ib ? v_R_34844.Zt : v_R_34844.Mf)[v_I_34910.Ab]) if (v_t_34987.bind(0), "" === v_I_34910.Cb) {
                let v_t_34988;
                (v_t_34988 = v_I_34910.bh ? v_R_34844.Vh.Oh : v_I_34910.Sh ? v_R_34844.Vh.Jh : v_R_34844.Vh.Yf).uniforms(scope.v_vn_27625).drawBuffers(v_R_34844.xf.Nl(), v_R_34844.xf.Yl(), scope.glContext.TRIANGLES, v_I_34910.Th / 2 * 3);
              } else {
                v_R_34844.xf.jl("texCoord1", 2 * v_I_34910.Th);
                let v_t_34989;
                (v_t_34989 = (v_I_34910.Tb ? v_R_34844.Zt : v_R_34844.Mf)[v_I_34910.Cb]) && (v_t_34989.bind(1), v_R_34844.Vh.Rb.uniforms(scope.v_Nt_27626).drawBuffers(v_R_34844.xf.Nl(), v_R_34844.xf.Yl(), scope.glContext.TRIANGLES, v_I_34910.Th / 2 * 3));
              }
              ++v_R_34844.Ph.Hh;
            }
        }
        v_I_34910.kh > v_P_34911.kh && (scope.glContext.enable(scope.glContext.STENCIL_TEST), scope.glContext.stencilFunc(scope.glContext.LESS, v_P_34911.stencilDepth - 1, 255), scope.glContext.stencilOp(scope.glContext.KEEP, scope.glContext.REPLACE, scope.glContext.REPLACE), v_y_34904[0] = 0, v_y_34904[1] = 0, v_y_34904[2] = 0, v_y_34904[3] = v_f_34888, v_y_34904[4] = 0, v_y_34904[5] = 0, v_y_34904[6] = 0, v_y_34904[7] = -v___34889, v_y_34904[8] = 0, v_y_34904[9] = v_f_34888, v_y_34904[10] = -v___34889, v_y_34904[11] = 0, v_R_34844.xf.jl("vertices", 12), v_R_34844.Vh.Uh.drawBuffers(v_R_34844.xf.Nl(), v_R_34844.xf.Yl(), scope.glContext.TRIANGLES, 6), ++v_R_34844.Ph.Hh), v_I_34910.yb(v_P_34911), v_P_34911.Lb = 0, v_P_34911.bh = !1, v_P_34911.Sh = !1, v_P_34911.Ab = "", v_P_34911.Ib = !1, v_P_34911.Cb = "", v_P_34911.Tb = !1;
      }
      function v_pt_34916(v_t_34990) {
        v_P_34911.Ah = 4 === v_t_34990 ? 2 : v_t_34990;
      }
      function v_kt_34917(v_t_34991, v_i_34992) {
        v_P_34911.Ab = v_t_34991, v_P_34911.Ib = v_i_34992;
      }
      function v_bt_34918(v_t_34993) {
        v_P_34911.Md = v_t_34993;
      }
      function v_yt_34919(v_t_34994) {
        v_P_34911.bh = v_t_34994;
      }
      function v_St_34920(v_t_34995) {
        v_P_34911.Sh = v_t_34995;
      }
      function v_At_34921() {
        var v_t_34996 = v_I_34910,
          v_i_34997 = v_P_34911;
        return v_t_34996.Ah !== v_i_34997.Ah || 2 === v_i_34997.Ah && (v_t_34996.Ab !== v_i_34997.Ab || v_t_34996.Ib !== v_i_34997.Ib || v_t_34996.Cb !== v_i_34997.Cb || v_t_34996.Tb !== v_i_34997.Tb) || v_t_34996.Md !== v_i_34997.Md || v_t_34996.kh !== v_i_34997.kh || v_t_34996.bh !== v_i_34997.bh || v_t_34996.Sh !== v_i_34997.Sh ? v_st_34915() : void (1024 <= v_t_34996.Th + 4 * v_i_34997.Lb && v_st_34915());
      }
    }
  }
};
scope.Framebuffer.prototype = {
  Zh: function () {
    scope.glContext.bindFramebuffer(scope.glContext.FRAMEBUFFER, this.Wh);
  },
  _5: function () {
    scope.glContext.activeTexture(scope.glContext.TEXTURE0), scope.glContext.bindTexture(scope.glContext.TEXTURE_2D, this.Kh);
  }
}, scope.Framebuffer.Yh = function () {
  scope.glContext.bindFramebuffer(scope.glContext.FRAMEBUFFER, null);
}, scope.RenderScene.prototype = {
  l5: function () {
    var v_i_35005 = this.Gh,
      v_e_35006 = (this.xf = new scope.MeshBuffer({
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
    }), this.X6.vertices = [[-1, 1, 0], [1, 1, 0], [-1, -1, 0], [1, -1, 0]], this.X6.colors = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]], this.X6.coords = [[0, 0], [1, 0], [0, 1], [1, 1]], this.X6.triangles = [[0, 1, 2], [2, 1, 3]], this.X6.compile(), this.jh = new scope.MeshBuffer({
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
    this.Vh.Yf = scope.v_S_27621, this.Vh.Jh = scope.v_A_27622, this.Vh.Oh = scope.v_C_27624, this.Vh.Rb = scope.v_x_27623, this.Vh.Fe = scope.v_d_27605, this.Vh.Uh = scope.v_w_27607, this.Vh.D_ = scope.v_b_27620, this.Vh.$h = scope.v_v_27606, this.Dh = new scope.v_Eo_28125();
  },
  f5: function () {
    this.qh.Qh = new scope.Framebuffer(scope.v_yn_27656, scope.v_Sn_27657, 49), this.qh.e5 = new scope.Framebuffer(scope.v_yn_27656, scope.v_Sn_27657, 50);
  },
  Cc: function (v_t_35010) {
    0 === v_t_35010 ? scope.Framebuffer.Yh() : 1 === v_t_35010 ? this.qh.Qh.Zh() : 2 === v_t_35010 && this.qh.e5.Zh();
  },
  Nh: function (v_t_35011) {
    1 === v_t_35011 ? this.qh.Qh._5() : 2 === v_t_35011 && this.qh.e5._5();
  },
  y4: function (v_t_35012, v_s_35013) {
    scope.languagePackages.it(v_t_35012, v_t_35014 => {
      if (v_t_35014) {
        var v_i_35015 = new scope.v_Po_28121(v_t_35014);
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
    v_a_35021.xd ? v_i_35022 && v_i_35022() : scope.v_Le_28076([v_t_35023 => {
      var v_i_35024 = Object.keys(v_a_35021.Mf);
      let v_s_35025;
      scope.v_lo_28099(v_i_35024, (v_i_35026, v_t_35027, v_e_35028) => {
        if (v_s_35025 = v_a_35021.Mf[v_e_35028].ed, this.Mf[v_s_35025]) v_i_35026();else {
          let v_r_35029 = v_a_35021.Mf[v_e_35028];
          scope.languagePackages.it(v_s_35025, v_t_35030 => {
            if (v_t_35030) {
              let v_n_35031 = null;
              scope.v_Io_28120(v_t_35030, !1, (v_t_35032, v_i_35033, v_e_35034) => {
                v_t_35032 === scope.v_xo_28116 ? (v_n_35031 = new glRuntime.Texture(v_i_35033, v_e_35034, {
                  wrapS: v_r_35029.td ? scope.glContext.REPEAT : scope.glContext.CLAMP_TO_EDGE,
                  wrapT: v_r_35029.nd ? scope.glContext.REPEAT : scope.glContext.CLAMP_TO_EDGE,
                  format: scope.glContext.RGBA
                }), scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !1)) : v_t_35032 === scope.v_Ao_28115 && (v_n_35031 = null);
              }), v_n_35031 && (this.Mf[v_s_35025] = v_n_35031);
            }
            v_i_35026();
          });
        }
      }, () => {
        scope.v_Me_28078(v_t_35023);
      });
    }, async v_t_35035 => {
      for (var v_i_35036 in v_a_35021.Id) {
        var v_e_35037,
          v_i_35036 = v_a_35021.Id[v_i_35036].ed;
        this.Id[v_i_35036] || (v_e_35037 = await scope.languagePackages.ck(v_i_35036), this.Id[v_i_35036] = await scope.v_Mo_28124.A3(v_e_35037));
      }
      scope.v_Me_28078(v_t_35035);
    }, v_t_35038 => {
      scope.v_ao_28097(v_a_35021.yd, (v_i_35039, v_t_35040) => {
        var v_e_35041 = new scope.v_Fo_28127();
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
          var v_s_35044 = new scope.v_Do_28126();
          v_s_35044.R_ = v_i_35039.ad[v_t_35045].R_, v_s_35044.P_ = v_i_35039.ad[v_t_35045].P_, v_s_35044.D_ = v_r_35043, v_s_35044.G_ = v_i_35039.ad[v_t_35045].G_, v_s_35044.j_ = v_i_35039.ad[v_t_35045].j_, v_e_35041.K3(v_s_35044);
        }
        v_n_35042 || (v_e_35041.N_.length && v_e_35041.K3(this.Vk.Hk(v_e_35041.N_[0].D_.g_)), v_a_35021.Td[v_t_35040] = v_e_35041);
      }), scope.v_Me_28078(v_t_35038);
    }, v_t_35046 => {
      scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !0), v_i_35022 && v_i_35022();
    }]);
  },
  h5: async function (v_t_35047) {
    var v_i_35048,
      v_e_35049 = await scope.languagePackages.ck("fonts/Debug.rgf");
    v_e_35049 ? (this.Ph.i5 = await scope.v_Mo_28124.A3(v_e_35049), (v_e_35049 = new scope.v_Fo_28127()).W3(this.Dh), v_e_35049.O3(this.Vh.D_), v_e_35049.J3(this.Vh.$h), (v_i_35048 = new scope.v_Do_28126()).R_ = 0, v_i_35048.P_ = 127, v_i_35048.D_ = this.Ph.i5, v_i_35048.G_ = 1, v_i_35048.j_ = 1, v_e_35049.K3(v_i_35048), this.Ph.n5 = v_e_35049, v_t_35047(!0)) : v_t_35047(!1);
  }
}, scope.Renderer.prototype = {
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
    scope.glContext.activeTexture(scope.glContext.TEXTURE0), scope.glContext.bindTexture(scope.glContext.TEXTURE_2D, null), this.Yt.Cc(1), scope.glContext.clearStencil(0), scope.glContext.clearColor(0, 0, 0, 1), scope.glContext.clear(scope.glContext.COLOR_BUFFER_BIT | scope.glContext.DEPTH_BUFFER_BIT | scope.glContext.STENCIL_BUFFER_BIT);
    for (let v_t_35068 = 0; v_t_35068 < this.o5.length; ++v_t_35068) this.o5[v_t_35068].v5.p9 <= this.k9 || (this.Yt.Cc(1), this.o5[v_t_35068].v5.Ld(v_i_35061, v_e_35062, this.Yt));
    scope.glContext.disable(scope.glContext.STENCIL_TEST);
    var v_r_35065 = performance.now();
    if (this.Yt.Ph.rr[scope.v_qa_28086(this.Yt.Ph.r5, this.Yt.Ph.rr.length)] = v_r_35065 - v_n_35064, this.Yt.Ph.r5++, scope.v_k_27573 && this.Yt.Ph.n5) {
      if (this.Yt.Dh.G3(0), this.Yt.Dh.P3(), this.Yt.Dh.H3(!1), scope.v_xt_28153.T_(this.Yt.Dh.A_), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), this.Yt.Ph.r5 % 30 == 0) {
        let v_i_35069 = 0,
          v_e_35070 = scope.mathMin(this.Yt.Ph.r5, this.Yt.Ph.rr.length);
        for (let v_t_35071 = 0; v_t_35071 < v_e_35070; ++v_t_35071) v_i_35069 += this.Yt.Ph.rr[v_t_35071];
        this.Yt.Ph.a5 = v_i_35069 / v_e_35070;
      }
      this.Yt.Ph.n5.X3("RS SCENES: " + this.o5.length + "\nRS SPRITES: " + this.Yt.Ph.Rh + "\nRS DRAW CALLS: " + this.Yt.Ph.Hh + "\nRENDER TIME: " + this.Yt.Ph.a5.toFixed(2) + " ms\nFPS: " + scope.v_l_27570.toFixed(2), .8, .8), this.Yt.Dh.B3(), this.Yt.Dh.N3(1.2), this.Yt.Dh.U3(!0, !1), this.Yt.Ph.n5.Y3([10, 952, 0], [0, 0, 0, 1]), this.Yt.Ph.n5.Y3([10, 950, 0], [1, 1, 1, 1]);
    }
    scope.glContext.loadIdentity(), this.Yt.Cc(0), this.Yt.Nh(1), scope.v_Jt_27635.amount = 1.04, v_t_35063 ? scope.v_m_27612.uniforms(scope.v_Jt_27635).draw(this.Yt.X6) : scope.v_m_27612.uniforms(scope.v_Jt_27635).draw(this.Yt.t5), this.Yt.Vk.Uk();
  },
  xt: function () {
    return this.rr;
  },
  p5: function () {
    return this.Yt;
  },
  W6: function (v_t_35072, v_i_35073) {
    return this.Y6.push(new scope.v_Nl_28184(++this.ny, this.rr + v_i_35073, v_t_35072)), this.ny;
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
scope.languagePackages = createLanguagePackages(scope);
scope.v_Ul_28187 = new URLSearchParams(location.search);
if (addEventListener("resize", scope.v_m1_27881), addEventListener("unload", scope.v_re_27878), addEventListener("focus", scope.v_w1_27879), addEventListener("blur", scope.v_g1_27880), addEventListener("beforeunload", v_t_35119 => {
  scope.boardLanes && scope.boardLanes.V7(), scope.boardAir && scope.boardAir.V7(), scope.v_D_27646 && scope.v_D_27646.V7(), scope.v_F_27647 && scope.v_F_27647.V7();
}), scope.v_y_27559.addEventListener("contextmenu", v_t_35120 => v_t_35120.preventDefault()), scope.v_ee_27876(), scope.v_y_27559.style.display = "block", scope.v_Hl_28188 = umgr_elc._, scope.handshake.rm.I4 = scope.v_Hl_28188.I4, scope.handshake.rm.am = scope.v_Hl_28188.am, scope.handshake.rm.om = window.__umgForceProfile["name"] || scope.v_Hl_28188.O.ct, scope.handshake.rm.lm = window.__umgForceProfile["rating"] || scope.v_Hl_28188.O.B, scope.handshake.rm.um = window.__umgForceProfile["level"] || scope.v_Hl_28188.O.p9, scope.handshake.rm.b7 = scope.v_Hl_28188.I, scope.handshake.rm.y7 = scope.v_Hl_28188.R, scope.handshake.rm.A7 = scope.v_Hl_28188.j, scope.handshake.rm.S7 = scope.v_Hl_28188.M, scope.handshake.rm.A9 = scope.v_Hl_28188.L, scope.handshake.rm.S9 = scope.v_Hl_28188.U, scope.handshake.rm.x9 = scope.v_Hl_28188.P, scope.handshake.rm.I9 = scope.v_Hl_28188.G, scope.handshake.rm.OA = scope.v_Hl_28188.Y, scope.handshake.rm.dm = scope.v_Hl_28188.fe, scope.handshake.rm.vm = scope.v_Hl_28188.v1, scope.handshake.rm.gm = scope.v_Hl_28188.J, scope.handshake.rm.u8 = scope.v_Hl_28188.K, scope.handshake.rm.wm = scope.v_Hl_28188.W, scope.handshake.rm.pm = scope.v_Hl_28188.u1, scope.handshake.rm.km = scope.v_Hl_28188.H, scope.handshake.rm.bm = scope.v_Hl_28188.f1, scope.handshake.rm.Sm = scope.v_Hl_28188.h1.T, scope.handshake.rm.xm = scope.v_Hl_28188.h1.rr, scope.handshake.rm.ym = scope.v_Hl_28188.h1.C, scope.handshake.rm.Cm = scope.v_Hl_28188.h1.GA, scope.handshake.rm.Im = scope.v_Hl_28188.Z.X, scope.handshake.rm.Am = scope.v_Hl_28188.Z.a1, scope.handshake.rm.Tm = scope.v_Hl_28188.Z.d1, scope.handshake.rm.Lm = scope.v_Hl_28188.Z.t1, scope.handshake.rm.Rm = scope.v_Hl_28188.Z.s1, scope.handshake.rm.gb = scope.v_Hl_28188.g1, setInterval(scope.v_A1_27887, 500), scope.doc.body.addEventListener("keydown", function (v_t_35121) {
  v_t_35121.repeat || ("Enter" !== v_t_35121.key || v_t_35121.shiftKey || v_t_35121.metaKey || !v_t_35121.altKey || v_t_35121.ctrlKey ? "F1" !== v_t_35121.key || !v_t_35121.shiftKey || v_t_35121.metaKey || v_t_35121.altKey || v_t_35121.ctrlKey || scope.v_ur_27932.bb() : (scope.systemMisc.w2(), v_t_35121.preventDefault()));
}), scope.currentLang = scope.handshake.rm.I4, scope.v_h1_27859 = scope.handshake.rm.Am, scope.v_R_27641 = scope.handshake.rm.pm, scope.v_L_27642 = scope.handshake.rm.km, scope.v_bn_27637 = scope.handshake.rm.vm || scope.handshake.rm.gm, -1 === scope.supportedLangs.indexOf(scope.currentLang) && (scope.handshake.A4 = !0, scope.currentLang = "ja-JP"), scope.v_Ul_28187.has("errDisp")) {
  var v_Hl_28188 = scope.v_Pe_28064(scope.v_Ul_28187.get("errDisp"));
  let v_t_35122 = scope.doc.createElement("div"),
    v_i_35123 = (v_t_35122.setAttribute("style", "width: 1920px;height: 1080px;background: #000;font-family: system-ui;font-size: 16px;padding: 12px;z-index:99;"), scope.doc.createElement("div")),
    v_e_35124 = (v_i_35123.setAttribute("style", ""), v_t_35122.appendChild(v_i_35123), scope.doc.createElement("div")),
    v_n_35125 = (v_e_35124.setAttribute("style", "margin-left:24px"), v_t_35122.appendChild(v_e_35124), scope.v_y_27559.appendChild(v_t_35122), v_i_35123.innerText = "FAITAL ERROR (0x" + scope.v_Xa_28081(scope.v_Hl_28188.toString(16), 4, "0") + ")", "");
  switch (scope.v_Hl_28188) {
    case scope.v_W_27705:
      v_n_35125 = "Failed to initialize graphics engine.";
      break;
    case scope.v_X_27706:
    case scope.v_z_27707:
      v_n_35125 = "Failed to load assets.";
      break;
    case scope.v_K_27708:
      v_n_35125 = "Graphics engine error.";
  }
  v_n_35125 += "\n\n--- App Info ---\nVersion: " + scope.v_U_27653 + "\nBuild Time: " + scope.handshake.rm.Sm + " " + scope.handshake.rm.xm + "\nBuild Hash: " + scope.handshake.rm.ym + "\nBuild Conf: " + scope.handshake.rm.Cm, v_e_35124.innerText = v_n_35125;
} else if (scope.v_Ul_28187.has("fix")) {
  let v_t_35126 = scope.doc.createElement("canvas"),
    v_e_35127 = (v_t_35126.width = scope.v_yn_27656, v_t_35126.height = scope.v_Sn_27657, scope.v_y_27559.appendChild(v_t_35126), v_t_35126.getContext("2d", {
      alpha: !1
    })),
    v_n_35128 = scope.v_G_27652 + " v" + scope.v_U_27653 + " Build " + scope.handshake.rm.Sm + " " + scope.handshake.rm.xm + " (" + scope.handshake.rm.ym + ") @" + scope.handshake.rm.Cm,
    v_i_35129 = {
      "ja-JP": {
        ci: "問題の解決のため、ゲーム データを再ダウンロードします。",
        cn: "インターネットに接続した上で Enter キーを押下してください。",
        c3: "アセット データベースを読み込んでいます...",
        c1: "最新のアセットの取得...",
        ca: "検証中...",
        cc: "正常に完了しました。Enter キーで再起動します。",
        c2: "失敗。Enter キーで再起動します。",
        lf: "UMIGURI ゲーム データ修復モード"
      },
      "en-US": {
        ci: "Press ENTER to redownload the game data for resolve problems.",
        cn: "You should have an internet connection.",
        c3: "Fetching asset database...",
        c1: "Downloading latest assets...",
        ca: "Verifying...",
        cc: "Completed successfully. Press ENTER to restart.",
        c2: "Failed. Press ENTER to restart.",
        lf: "UMIGURI Game Data Repair Mode"
      },
      "zh-CN": {
        ci: "为解决该问题，将重新下载游戏数据。",
        cn: "请连接网络后按 Enter 键。",
        c3: "正在读取资源清单...",
        c1: "正在下载最新资源...",
        ca: "校验中...",
        cc: "已成功完成。按 Enter 键重启。",
        c2: "失败。按 Enter 键重启。",
        lf: "UMIGURI 游戏数据修复模式"
      }
    },
    v_r_35130 = [v_Jl_35131().ci, v_Jl_35131().cn];
  function v_Jl_35131() {
    return v_i_35129[scope.currentLang] || v_i_35129["ja-JP"];
  }
  function v_jl_35132() {
    v_e_35127.clearRect(0, 0, scope.v_yn_27656, scope.v_Sn_27657), v_e_35127.fillStyle = "#fff", v_e_35127.strokeStyle = "#fff", v_e_35127.lineWidth = 5, v_e_35127.textBaseline = "top", v_e_35127.font = "normal 24px system-ui", v_e_35127.textAlign = "left", v_e_35127.fillText(v_n_35128, 20, 1040), v_e_35127.strokeRect(262, 152, 1395, 775), v_e_35127.textAlign = "center", v_e_35127.fillText(v_Jl_35131().lf, 960, 100), v_e_35127.textAlign = "left";
    let v_i_35134 = 0;
    for (let v_t_35135 = scope.mathMax(v_r_35130.length - 22, 0); v_t_35135 < v_r_35130.length; ++v_t_35135) v_e_35127.fillText(v_r_35130[v_t_35135], 410, 210 + v_i_35134), v_i_35134 += 30;
  }
  function v_Ol_35133() {
    return new Promise(v_i_35136 => {
      let v_e_35137 = v_t_35138 => {
        "Enter" === v_t_35138.key && (v_i_35136(), window.removeEventListener("keydown", v_e_35137));
      };
      window.addEventListener("keydown", v_e_35137);
    });
  }
  !async function () {
    v_jl_35132(), await v_Ol_35133(), v_r_35130 = [v_Jl_35131().c3], v_jl_35132(), await scope.v_ts_27977.m4(!0);
    let v_i_35139 = scope.v_rc_28203(scope.v_ts_27977.w4(), v_t_35140 => v_t_35140.size);
    v_r_35130.push(v_Jl_35131().c1), v_jl_35132(), (await scope.v_ts_27977.u4(function (v_t_35141) {
      v_r_35130[v_r_35130.length - 1] = v_Jl_35131().c1 + " (" + (v_t_35141 / v_i_35139 * 100).toFixed(0) + " %)", v_jl_35132();
    })) && (v_r_35130.push(v_Jl_35131().ca), v_jl_35132(), await scope.v_ts_27977._4(function (v_t_35142) {
      v_r_35130[v_r_35130.length - 1] = v_Jl_35131().ca + " (" + (v_t_35142 / v_i_35139 * 100).toFixed(0) + " %)", v_jl_35132();
    })) ? v_r_35130.push(v_Jl_35131().cc) : v_r_35130.push(v_Jl_35131().c2), v_jl_35132(), await v_Ol_35133(), scope.v_ts_27977.v4();
  }();
} else {
  scope.v_o1_27834 = new scope.v_ja_28075(0, -.78, 1, .01).tg(), scope.v_l1_27835 = [new scope.v_ja_28075(.04, 1.18, .83, 1.12).tg(), new scope.v_ja_28075(.04, 1.18, 1, 1).tg(), new scope.v_ja_28075(.04, 1.18, 1, 1.3).tg(), new scope.v_ja_28075(.19, 1.05, 1, 1).tg()], scope.v_Na_28070();
  let v_i_35143 = scope.handshake.rm.bm,
    v_r_35144 = void 0,
    v_e_35145 = void 0,
    v_n_35146 = void 0,
    v_s_35147,
    v_a_35148 = 0,
    v_o_35149 = 0,
    v_l_35150 = "",
    v_c_35151 = function (v_t_35152) {
      void 0 !== v_t_35152 && (v_l_35150 = v_t_35152), v_e_35145 && (v_e_35145.Wt = "(" + v_o_35149 + " / " + v_a_35148 + ") " + v_l_35150);
    };
  scope.v_ie_27875(), scope.v_Oa_28077(function (v_t_35153, v_i_35154) {
    "max" === v_t_35153 ? v_a_35148 = v_i_35154 : "upd" === v_t_35153 && (v_o_35149 = v_i_35154, v_c_35151());
  }, [function (v_t_35155) {
    !function () {
      try {
        scope.glContext = glRuntime.create({
          stencil: !0,
          antialias: !1
        });
      } catch (v_t_35157) {
        return;
      }
      {
        var v_t_35156 = scope.glContext.getExtension("WEBGL_debug_renderer_info");
        scope.systemMisc.b2({
          renderer: scope.glContext.getParameter(v_t_35156.UNMASKED_RENDERER_WEBGL),
          max_rend_buf_size: scope.glContext.getParameter(scope.glContext.MAX_RENDERBUFFER_SIZE),
          max_tex_units: scope.glContext.getParameter(scope.glContext.MAX_TEXTURE_IMAGE_UNITS),
          max_tex_size: scope.glContext.getParameter(scope.glContext.MAX_TEXTURE_SIZE)
        });
      }
      scope.glContext.getExtension("WEBGL_compressed_texture_s3tc"), scope.glContext.getExtension("WEBGL_depth_texture");
      return scope.glContext.enable(scope.glContext.BLEND), scope.glContext.blendFunc(scope.glContext.SRC_ALPHA, scope.glContext.ONE_MINUS_SRC_ALPHA), scope.glContext.canvas.width = scope.v_yn_27656, scope.glContext.canvas.height = scope.v_Sn_27657, scope.v_y_27559.appendChild(scope.glContext.canvas), scope.glContext.viewport(0, 0, scope.v_yn_27656, scope.v_Sn_27657), scope.glContext.matrixMode(scope.glContext.MODELVIEW), scope.glContext.canvas.addEventListener("webglcontextlost", scope.v_te_27874), scope.v_y_27559.style.width = scope.v_yn_27656 + "px", scope.v_y_27559.style.height = scope.v_Sn_27657 + "px", scope.v_ee_27876(), 1;
    }() ? scope.v_b1_27884(scope.v_W_27705) : effekseer.initRuntime("effekseer.wasm", function () {
      scope.v_Me_28078(v_t_35155);
    });
  }, function (v_t_35158) {
    scope.languagePackages.ue(function () {
      scope.v_Me_28078(v_t_35158);
    });
  }, function (v_i_35159) {
    scope.languagePackages.Sb(function (v_t_35160) {
      v_t_35160 ? scope.v_Me_28078(v_i_35159) : scope.v_k1_27883();
    });
  }, function (v_t_35161) {
    scope.v_Xr_27969._n(function () {
      scope.v_Se_27889.ue(), scope.renderer = new scope.Renderer(), scope.v_Me_28078(v_t_35161);
    });
  }, function (v_t_35162) {
    scope.renderer.Yt.h5(function () {
      scope.v_Me_28078(v_t_35162);
    });
  }, function (v_t_35163) {
    scope.renderer.Yt.y4("tables/stringTable.rvs", function () {
      scope.v_Me_28078(v_t_35163);
    });
  }, function (v_i_35164) {
    scope.languagePackages.it("ui/startup.rsb", function (v_t_35165) {
      v_t_35165 ? (v_t_35165 = new scope.v_Dl_28181(v_t_35165), scope.renderer.ut("startup", v_t_35165.rt(scope.renderer.p5()), 0, v_t_35166 => {
        (v_r_35144 = v_t_35166).e8(1), v_r_35144.e8(0), v_e_35145 = v_r_35144.lt.yk(4), v_n_35146 = v_r_35144.lt.yk(5), v_s_35147 = v_r_35144.lt.yk(7), v_r_35144.lt.yk(17).Be = !1, v_n_35146.Be = !1, scope.v_Me_28078(v_i_35164);
      })) : scope.v_k1_27883();
    });
  }, function (v_t_35167) {
    scope.v_Vi_27862(), window.addEventListener("error", scope.v_p1_27882), scope.v_Me_28078(v_t_35167);
  }, function (v_t_35168) {
    v_c_35151(scope.v_Ue_28209("startupDatabase")), scope.v_Ie_27966._n(function () {
      scope.v_Me_28078(v_t_35168);
    });
  }, function (v_t_35169) {
    scope.v_Wr_27968._n(function () {
      scope.v_Me_28078(v_t_35169);
    });
  }, function (v_e_35170) {
    v_c_35151(scope.v_Ue_28209("startupSavedata")), scope.v_Le_28076([function (v_i_35171) {
      scope.settingsTables.ue(function (v_t_35172) {
        scope.v_Me_28078(!1 === v_t_35172 ? v_e_35170 : v_i_35171);
      });
    }, function (v_i_35173) {
      scope.settingsTables._n(1003, function (v_t_35174) {
        v_t_35174 && (scope.handshake.Dm = v_t_35174.loop_points || {}), scope.v_Me_28078(v_i_35173);
      });
    }, function (v_t_35175) {
      scope.v_Ns_28014.ue(), scope.v_Me_28078(v_e_35170);
    }]);
  }, function (v_t_35176) {
    scope.v_oe_27649 = new scope.v_Hs_28017("d.umgr-serv.inonote.jp", 8101, scope.v_Xt_27648), scope.v_Me_28078(v_t_35176);
  }, function (v_t_35177) {
    v_c_35151(scope.v_Ue_28209("startupResources")), scope.v_Me_28078(v_t_35177), setTimeout(() => scope.v_Ae_27892.ue(function () {
      scope.v_Ae_27892.Mc("move_cursor", .625), scope.v_Ae_27892.Mc("menu_back", .625), scope.v_Ae_27892.Mc("change_value", .625), scope.v_Ae_27892.Mc("menu_enter", .625), scope.v_Ae_27892.Mc("play_result_bgm", .75), scope.v_Ae_27892.Mc("userbox_bgm", .75), scope.v_Me_28078(v_t_35177);
    }), 0);
  }, function (v_t_35178) {
    scope.v_J1_27908.ue(() => scope.v_Me_28078(v_t_35178));
  }, function (v_t_35179) {
    scope.v_j1_27909.ue(() => scope.v_Me_28078(v_t_35179));
  }, function (v_t_35180) {
    scope.sceneManager.ue(() => scope.v_Me_28078(v_t_35180));
  }, function (v_t_35181) {
    scope.v_Te_27911.ue(() => scope.v_Me_28078(v_t_35181));
  }, function (v_t_35182) {
    scope.playerInfoBoard.ue(() => scope.v_Me_28078(v_t_35182));
  }, function (v_t_35183) {
    scope.v_V1_27912.ue(() => scope.v_Me_28078(v_t_35183));
  }, function (v_t_35184) {
    scope.v_F1_27902.ue(() => scope.v_Me_28078(v_t_35184));
  }, function (v_t_35185) {
    v_i_35143 ? scope.v_Me_28078(v_t_35185) : scope.v_nr_27925.ue(() => scope.v_Me_28078(v_t_35185));
  }, function (v_t_35186) {
    v_i_35143 ? scope.v_Me_28078(v_t_35186) : scope.coopLobby.ue(() => scope.v_Me_28078(v_t_35186));
  }, function (v_t_35187) {
    v_i_35143 ? scope.v_Me_28078(v_t_35187) : scope.uiComponentA.ue(() => scope.v_Me_28078(v_t_35187));
  }, function (v_t_35188) {
    v_i_35143 ? scope.v_Me_28078(v_t_35188) : scope.v_Q1_27921.ue(() => scope.v_Me_28078(v_t_35188));
  }, function (v_t_35189) {
    v_i_35143 ? scope.v_Me_28078(v_t_35189) : scope.uiComponentB.ue(() => scope.v_Me_28078(v_t_35189));
  }, function (v_t_35190) {
    v_i_35143 ? scope.v_Me_28078(v_t_35190) : scope.uiComponentC.ue(() => scope.v_Me_28078(v_t_35190));
  }, function (v_t_35191) {
    v_i_35143 ? scope.v_Me_28078(v_t_35191) : scope.v_$1_27920.ue(() => scope.v_Me_28078(v_t_35191));
  }, function (v_t_35192) {
    scope.testMenu.ue(() => scope.v_Me_28078(v_t_35192));
  }, function (v_t_35193) {
    v_i_35143 ? scope.v_Me_28078(v_t_35193) : scope.v_N1_27904.ue(() => scope.v_Me_28078(v_t_35193));
  }, function (v_t_35194) {
    v_i_35143 ? scope.v_Me_28078(v_t_35194) : scope.v_G1_27905.ue(() => scope.v_Me_28078(v_t_35194));
  }, function (v_t_35195) {
    v_i_35143 ? scope.v_Me_28078(v_t_35195) : scope.localization.ue(() => scope.v_Me_28078(v_t_35195));
  }, function (v_t_35196) {
    v_i_35143 ? scope.v_Me_28078(v_t_35196) : scope.v_O1_27910.ue(() => scope.v_Me_28078(v_t_35196));
  }, function (v_t_35197) {
    v_i_35143 ? scope.v_Me_28078(v_t_35197) : scope.v_H1_27907.ue(() => scope.v_Me_28078(v_t_35197));
  }, function (v_t_35198) {
    v_i_35143 ? scope.v_Me_28078(v_t_35198) : scope.v_U1_27906.ue(() => scope.v_Me_28078(v_t_35198));
  }, function (v_t_35199) {
    v_i_35143 ? scope.v_Me_28078(v_t_35199) : scope.v_lr_27930.ue(() => scope.v_Me_28078(v_t_35199));
  }, function (v_t_35200) {
    v_i_35143 ? scope.v_Me_28078(v_t_35200) : scope.v_Z1_27919.ue(() => scope.v_Me_28078(v_t_35200));
  }, function (v_t_35201) {
    v_i_35143 ? scope.v_Me_28078(v_t_35201) : scope.v_X1_27914.ue(() => scope.v_Me_28078(v_t_35201));
  }, function (v_t_35202) {
    v_i_35143 ? scope.v_Me_28078(v_t_35202) : scope.settingsStore.ue(() => scope.v_Me_28078(v_t_35202));
  }, function (v_t_35203) {
    v_i_35143 ? scope.v_Me_28078(v_t_35203) : scope.audioFontHub.ue(() => scope.v_Me_28078(v_t_35203));
  }, function (v_t_35204) {
    scope.gameCore.ue(() => scope.v_Me_28078(v_t_35204));
  }, async function (v_i_35205) {
    if (v_c_35151(scope.v_Ue_28209("startupInitDevices")), scope.inputModule.ue(), scope.inputModule.fe(scope.handshake.rm.dm), 1 === scope.handshake.rm.b7) v_c_35151(scope.v_Ue_28209("startupLedServer")), scope.ledOutput.ue(function (v_t_35209) {
      0 === v_t_35209 ? scope.v_Me_28078(v_i_35205) : (1 === v_t_35209 ? v_c_35151(scope.v_Ue_28209("startupLedServerErrorCommunication")) : 2 === v_t_35209 && v_c_35151(scope.v_Ue_28209("startupLedServerError")), scope.renderer.W6(() => scope.v_Me_28078(v_i_35205), 500));
    });else {
      if (2 === scope.handshake.rm.b7) {
        v_r_35144.lt.yk(17).Be = !0, v_r_35144.e8(2);
        for (let v_t_35210 = 4; 0 <= v_t_35210; --v_t_35210) v_r_35144.lt.yk(21).Wt = scope.v_Ba_28069(scope.v_Ue_28209("sysMsgDevInit2"), [["TIME", v_t_35210]]), await scope.renderer.C7(1e3);
        var v_t_35206 = new scope.v_Ss_28000(scope.handshake.rm.A7);
        if (await v_t_35206.ue()) {
          v_r_35144.lt.yk(21).Wt = scope.v_Ue_28209("sysMsgDevInit2Ok"), (scope.boardLanes = v_t_35206).BR(), scope.boardLanes.o9();
          var v_e_35207 = new scope.v_As_28001(scope.handshake.rm.S7);
          if (await v_e_35207.ue()) {
            if (v_r_35144.lt.yk(23).Wt = "GOOD", (scope.boardAir = v_e_35207).H9(), scope.boardAir.o9(), scope.handshake.rm.A9) {
              var v_n_35208 = new scope.v_Rs_28007(scope.handshake.rm.A9, scope.handshake.rm.S9, scope.handshake.rm.x9, scope.handshake.rm.I9);
              if (!(await v_n_35208.ue())) return v_n_35208.V7(), scope.boardLanes.V7(), scope.boardLanes = null, scope.boardAir.V7(), scope.boardAir = null, v_r_35144.lt.yk(25).Wt = "BAD", await scope.renderer.C7(2e3), void scope.v_Me_28078(v_i_35205);
              if (v_r_35144.lt.yk(25).Wt = "GOOD", scope.v_D_27646 = v_n_35208, scope.handshake.rm.OA) {
                v_n_35208 = new scope.v_xs_28002(scope.handshake.rm.OA);
                if (!(await v_n_35208.ue())) return v_n_35208.V7(), v_r_35144.lt.yk(27).Wt = "BAD", await scope.renderer.C7(2e3), void scope.v_Me_28078(v_i_35205);
                v_r_35144.lt.yk(27).Wt = "GOOD", scope.v_F_27647 = v_n_35208, scope.v_D_27646.HS(scope.v_F_27647);
              }
            }
          } else v_e_35207.V7(), scope.boardLanes.V7(), scope.boardLanes = null, v_r_35144.lt.yk(23).Wt = "BAD";
        } else v_t_35206.V7(), v_r_35144.lt.yk(21).Wt = "BAD";
        await scope.renderer.C7(2e3);
      }
      scope.v_Me_28078(v_i_35205);
    }
  }, function (v_t_35211) {
    scope.v_D_27646 || (scope.v_D_27646 = new scope.v_Ls_28008()).ue(), v_r_35144.lt.yk(17).Be = !1, scope.v_Me_28078(v_t_35211);
  }, function (v_t_35212) {
    scope.menuSystem.ue(() => {
      scope.v_Me_28078(v_t_35212);
    });
  }, function (v_t_35213) {
    scope.handshake.l.p = [scope.v_Ue_28209("sortReadingA"), scope.v_Ue_28209("sortReadingH"), scope.v_Ue_28209("sortReadingO"), scope.v_Ue_28209("sortReadingV"), scope.v_Ue_28209("sortReadingRa"), scope.v_Ue_28209("sortReadingRk"), scope.v_Ue_28209("sortReadingRs"), scope.v_Ue_28209("sortReadingRt"), scope.v_Ue_28209("sortReadingRn"), scope.v_Ue_28209("sortReadingRh"), scope.v_Ue_28209("sortReadingRm"), scope.v_Ue_28209("sortReadingRy"), scope.v_Ue_28209("sortReadingRr"), scope.v_Ue_28209("sortReadingRw"), scope.v_Ue_28209("sortReadingNums"), scope.v_Ue_28209("sortReadingOthers")], scope.handshake.l.k = [scope.v_Ue_28209("sortVersionUmgr"), scope.v_Ue_28209("sortVersionUmgrPlus"), scope.v_Ue_28209("sortVersionUmgrNext")], scope.renderer.W6(() => {
      scope.renderer._i("startup"), v_r_35144 = void 0, scope.v_Me_28078(v_t_35213);
    }, 500);
  }, function (v_t_35214) {
    scope.v_R1_27896.ue(), scope.testMenu.Ju(), scope.v_D_27646.jS(), v_i_35143 ? scope.v_F1_27902.T0(async () => {
      scope.v_Ns_28014.cA().catch(() => {}), scope.playerInfoBoard.N4(scope.handshake.rm.om), scope.playerInfoBoard.H4(scope.handshake.On.$p), await scope.playerInfoBoard.V4(scope.handshake.On.qp), scope.playerInfoBoard.U4(scope.handshake.On.im), scope.playerInfoBoard.J4(scope.handshake.rm.lm, scope.v_Ie_27966.D0("showRating")), scope.playerInfoBoard.O4(scope.handshake.rm.um, scope.v_Ie_27966.D0("showLevel")), scope.playerInfoBoard.ti(), scope.v__s_27989.ue(), scope.gameCore.lg();
    }) : (scope.v_Se_27889.fn(.75), scope.localization.T0(() => scope.v_F1_27902.T0(() => {
      scope.v_nr_27925.z0(), scope.v_N1_27904.T0();
    })));
  }]);
}
scope.v_tc_28199.prototype = {
  pR: async function () {
    var v_t_35261 = this.Yu.stream().pipeThrough(new CompressionStream("gzip"));
    return this.bR ? new Uint8Array(await new Response(v_t_35261).arrayBuffer()) : new Response(v_t_35261).blob();
  },
  gR: async function () {
    var v_t_35262 = this.Yu.stream().pipeThrough(new DecompressionStream("gzip"));
    return this.bR ? new Uint8Array(await new Response(v_t_35262).arrayBuffer()) : new Response(v_t_35262).blob();
  },
  kR: async function () {
    var v_t_35263 = this.Yu.stream().pipeThrough(new DecompressionStream("deflate"));
    return this.bR ? new Uint8Array(await new Response(v_t_35263).arrayBuffer()) : new Response(v_t_35263).blob();
  }
};