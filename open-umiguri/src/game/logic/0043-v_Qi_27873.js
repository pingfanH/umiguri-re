// game: 语句 43 (FunctionDeclaration)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  async function v_Qi_27873() {
    v_Zi_27869 && (await v_Zi_27869(v_Xi_27864)), v_ys_27999.SR(), v_Se_27889.oe(), inputModule.oe(), v_se_27562.clearColor(v_kn_27636[0], v_kn_27636[1], v_kn_27636[2], 1), v_se_27562.clearStencil(0), v_se_27562.clear(v_se_27562.COLOR_BUFFER_BIT | v_se_27562.DEPTH_BUFFER_BIT | v_se_27562.STENCIL_BUFFER_BIT), v_ae_27643.le(v_Xi_27864, v_O_27659, !0), null === v_zi_27865 ? v_Vi_27862() : (v_$i_27870 && (await v_$i_27870(v_Xi_27864)), v_se_27562.readPixels(0, 0, v_yn_27656, v_Sn_27657, v_se_27562.RGBA, v_se_27562.UNSIGNED_BYTE, v_zi_27865), v_Xi_27864 += v_O_27659, await systemMisc.z6(getBufferPtr(v_zi_27865), getBufferPtr(v_Se_27889.k6())), ++v_Ki_27866, 1e3 < performance.now() - v_Yi_27867 && (v_ie_27875(" " + v_Ue_28209("cptStatus")), v_e_27561.innerText = v_Ue_28209("cptStatus") + " [ Res: 1920x1080 @ 60fps, Speed: " + v_Ki_27866 + " f/s ]", v_Ki_27866 = 0, v_Yi_27867 = performance.now()), v_uo_28102(v_Qi_27873));
  }