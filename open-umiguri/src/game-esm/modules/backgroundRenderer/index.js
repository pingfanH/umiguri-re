// 模块: backgroundRenderer
// 由 tools/modularize-game.mjs 生成: 原游戏 IIFE 内的模块 IIFE。
// 依赖通过 scope 注入(见 runtime/scope.js)。

export function createBackgroundRenderer(scope) {
  let v_B_31057 = null,
    v_v_31058 = null,
    v_i_31059 = null,
    v_N_31060 = [],
    v_G_31061 = [],
    v_w_31062 = null,
    v_g_31063 = null,
    v_U_31064 = null,
    v_H_31065 = !1,
    v_J_31066 = "",
    v_j_31067 = "",
    v_O_31068 = {},
    v_V_31069 = 0;
  let v_W_31070 = {
      wc: 0,
      kc: 0,
      bc: 0,
      XP: 0
    },
    v_m_31071 = null;
  return {
    ue: function () {
      var v_t_31072, v_i_31073;
      v_B_31057 = new THREE.WebGL1Renderer({
        canvas: scope.glContext.canvas,
        context: scope.glContext,
        alpha: !0
      }), v_v_31058 = new THREE.WebGLRenderTarget(scope.v_yn_27656, scope.v_Sn_27657, {
        depthBuffer: !0,
        stencilBuffer: !1,
        magFilter: THREE.NearestFilter,
        minFilter: THREE.NearestFilter,
        wrapS: THREE.ClampToEdgeWrapping,
        wrapT: THREE.ClampToEdgeWrapping
      }), v_B_31057.autoClear = !1, v_B_31057.autoClearColor = !1, v_B_31057.autoClearDepth = !1, v_B_31057.autoClearStencil = !1, v_B_31057.setSize(scope.v_yn_27656, scope.v_Sn_27657), v_w_31062 = (v_t_31072 = new THREE.Scene(), (v_i_31073 = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1), new THREE.MeshBasicMaterial())).scale.set(0, 1, 1), v_t_31072.add(v_i_31073), v_t_31072), v_g_31063 = new THREE.PerspectiveCamera(75, scope.v_yn_27656 / scope.v_Sn_27657, .1, 3e3);
    },
    Ec: function (v_i_31074, v_e_31075) {
      if (v_O_31068 = {}, v_j_31067 = v_i_31074, v_H_31065 = !1, scope.v_kn_27636 = [0, 0, 0], "_default_1" === v_i_31074) {
        v_V_31069 = 330549, v_J_31066 = "_default_1", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
          PLANES_COLS: 24,
          PLANES_ROWS: 24,
          PLANE_WIDTH: 55,
          PLANE_HEIGHT: 55,
          PLANE_OUTER_WIDTH: 60,
          PLANE_OUTER_HEIGHT: 60,
          PLANE_AREA_X: 0,
          PLANE_AREA_Z: 0,
          planes: new THREE.BufferGeometry(),
          planes_anim_data: [],
          sky_rays: []
        }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, scope.v_yn_27656 / scope.v_Sn_27657, .1, 3e3));
        var v_n_31076,
          v_t_31077 = new THREE.MeshStandardMaterial({
            color: 3423353,
            vertexColors: !0,
            transparent: !0
          }),
          v_r_31078 = [],
          v_s_31079 = [],
          v_a_31080 = [],
          v_o_31081 = v_O_31068.PLANE_WIDTH,
          v_l_31082 = v_O_31068.PLANE_HEIGHT;
        for (let v_t_31110 = 0; v_t_31110 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31110) v_n_31076 = v_t_31110 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_o_31081 / 2, v_r_31078.push(v_n_31076 - v_o_31081 / 2, 0, v_l_31082 / 2, v_n_31076 + v_o_31081 / 2, 0, v_l_31082 / 2, v_n_31076 - v_o_31081 / 2, 0, -v_l_31082 / 2, v_n_31076 + v_o_31081 / 2, 0, -v_l_31082 / 2), v_n_31076 = .75 - .75 * scope.mathAbs(v_t_31110 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1), v_s_31079.push(1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076, 1, 1, 1, v_n_31076), v_a_31080.push(4 * v_t_31110, 1 + 4 * v_t_31110, 2 + 4 * v_t_31110, 2 + 4 * v_t_31110, 1 + 4 * v_t_31110, 3 + 4 * v_t_31110), v_O_31068.planes_anim_data.push({
          offset_t: 5e3 * scope.mathRandom(),
          offset_y: 4 * scope.mathRandom() - 2,
          speed: scope.mathRandom() + 1,
          move: scope.mathRandom() < .75
        });
        v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_a_31080), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_r_31078), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_s_31079), 4)), v_O_31068.planes.setDrawRange(0, v_a_31080.length);
        v_t_31077 = new THREE.Mesh(v_O_31068.planes, v_t_31077), v_t_31077 = (v_N_31060[0].add(v_t_31077), new THREE.DirectionalLight(16777215, 1)), v_t_31077 = (v_t_31077.position.set(0, 300, -800), v_N_31060[0].add(v_t_31077), new THREE.AmbientLight(16777215, 1));
        v_N_31060[0].add(v_t_31077), v_H_31065 = !0, scope.v_Fe_28101(v_e_31075);
      } else if ("_default_umiguri_new" === v_i_31074) {
        v_V_31069 = 0, v_J_31066 = "_default_umiguri_new", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
          PLANES_COLS: 24,
          PLANES_ROWS: 24,
          PLANE_WIDTH: 55,
          PLANE_HEIGHT: 55,
          PLANE_OUTER_WIDTH: 60,
          PLANE_OUTER_HEIGHT: 60,
          PLANE_AREA_X: 0,
          PLANE_AREA_Z: 0,
          planes: new THREE.BufferGeometry(),
          planes_anim_data: [],
          bg_plates: []
        }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.OrthographicCamera(-scope.v_yn_27656 / 2, scope.v_yn_27656 / 2, scope.v_Sn_27657 / 2, -scope.v_Sn_27657 / 2)), v_G_31061[0].position.set(0, 0, scope.v_Sn_27657 / 2);
        var v_t_31077 = new THREE.BufferGeometry(),
          v_c_31083 = new THREE.MeshBasicMaterial({
            color: 16777215,
            vertexColors: !0,
            transparent: !0,
            side: THREE.DoubleSide,
            depthWrite: !1,
            depthTest: !1
          }),
          v_u_31084 = [-960, 540, 0, 960, 540, 0, -960, -540, 0, 960, -540, 0],
          v_f_31085 = [46 / 255, 24 / 255, 104 / 255, 1, 139 / 255, 22 / 255, 93 / 255, 1, 85 / 255, 43 / 255, 61 / 255, 1, 248 / 255, 149 / 255, 49 / 255, 1],
          v___31086 = [0, 1, 2, 2, 1, 3],
          v_u_31084 = (v_t_31077.setIndex(new THREE.BufferAttribute(new Uint32Array(v___31086), 1)), v_t_31077.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_u_31084), 3)), v_t_31077.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_f_31085), 4)), v_t_31077.setDrawRange(0, v___31086.length), new THREE.Mesh(v_t_31077, v_c_31083));
        v_N_31060[0].add(v_u_31084);
        for (let v_t_31111 = 0; v_t_31111 < 8; ++v_t_31111) {
          var v_h_31087 = new THREE.BufferGeometry(),
            v_d_31088 = new THREE.MeshBasicMaterial({
              color: 16777215,
              vertexColors: !0,
              transparent: !0,
              side: THREE.DoubleSide,
              depthWrite: !1,
              depthTest: !1
            }),
            v_v_31089 = 135 * v_t_31111,
            v_w_31090 = 135 * (v_t_31111 + 1),
            v_v_31089 = [-960, 540 - v_v_31089, 0, 960, 540 - v_v_31089, 0, -960, 540 - v_w_31090, 0, 960, 540 - v_w_31090, 0],
            v_w_31090 = [138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, 1, 138 / 255, 26 / 255, 176 / 255, 1],
            v_g_31091 = [0, 1, 2, 2, 1, 3],
            v_v_31089 = (v_h_31087.setIndex(new THREE.BufferAttribute(new Uint32Array(v_g_31091), 1)), v_h_31087.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_v_31089), 3)), v_h_31087.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_w_31090), 4)), v_h_31087.setDrawRange(0, v_g_31091.length), new THREE.Mesh(v_h_31087, v_d_31088));
          v_N_31060[0].add(v_v_31089), v_O_31068.bg_plates.push(v_v_31089);
        }
        v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, scope.v_yn_27656 / scope.v_Sn_27657, .1, 3e3));
        var v_m_31092,
          v_f_31085 = new THREE.MeshStandardMaterial({
            color: 7284382,
            vertexColors: !0,
            transparent: !0
          }),
          v_p_31093 = [],
          v_k_31094 = [],
          v_b_31095 = [],
          v_y_31096 = v_O_31068.PLANE_WIDTH,
          v_S_31097 = v_O_31068.PLANE_HEIGHT;
        for (let v_t_31112 = 0; v_t_31112 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31112) v_m_31092 = v_t_31112 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_y_31096 / 2, v_p_31093.push(v_m_31092 - v_y_31096 / 2, 0, v_S_31097 / 2, v_m_31092 + v_y_31096 / 2, 0, v_S_31097 / 2, v_m_31092 - v_y_31096 / 2, 0, -v_S_31097 / 2, v_m_31092 + v_y_31096 / 2, 0, -v_S_31097 / 2), v_m_31092 = .125 - .125 * scope.mathAbs(v_t_31112 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1), v_k_31094.push(1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092, 1, 1, 1, v_m_31092), v_b_31095.push(4 * v_t_31112, 1 + 4 * v_t_31112, 2 + 4 * v_t_31112, 2 + 4 * v_t_31112, 1 + 4 * v_t_31112, 3 + 4 * v_t_31112), v_O_31068.planes_anim_data.push({
          offset_t: 5e3 * scope.mathRandom(),
          offset_y: 4 * scope.mathRandom() - 2,
          speed: scope.mathRandom() + 1,
          move: scope.mathRandom() < .75
        });
        v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_b_31095), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_p_31093), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_k_31094), 4)), v_O_31068.planes.setDrawRange(0, v_b_31095.length);
        v___31086 = new THREE.Mesh(v_O_31068.planes, v_f_31085), v_t_31077 = (v_N_31060[1].add(v___31086), new THREE.DirectionalLight(16777215, 1)), v_c_31083 = (v_t_31077.position.set(0, 300, -800), v_N_31060[1].add(v_t_31077), new THREE.AmbientLight(16777215, 1));
        v_N_31060[1].add(v_c_31083), v_H_31065 = !0, scope.v_Fe_28101(v_e_31075);
      } else if ("_default_we" === v_i_31074) {
        v_V_31069 = 0, v_J_31066 = "_default_we", v_W_31070.wc = THREE.NoToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, v_W_31070.XP = 0, (v_O_31068 = {
          PLANES_COLS: 24,
          PLANES_ROWS: 24,
          PLANE_WIDTH: 55,
          PLANE_HEIGHT: 55,
          PLANE_OUTER_WIDTH: 60,
          PLANE_OUTER_HEIGHT: 60,
          PLANE_AREA_X: 0,
          PLANE_AREA_Z: 0,
          planes: new THREE.BufferGeometry(),
          planes_anim_data: [],
          bg_plates: []
        }).PLANE_AREA_X = v_O_31068.PLANE_OUTER_WIDTH * v_O_31068.PLANES_COLS, v_O_31068.PLANE_AREA_Z = v_O_31068.PLANE_OUTER_HEIGHT * v_O_31068.PLANES_ROWS, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.OrthographicCamera(-scope.v_yn_27656 / 2, scope.v_yn_27656 / 2, scope.v_Sn_27657 / 2, -scope.v_Sn_27657 / 2)), v_G_31061[0].position.set(0, 0, scope.v_Sn_27657 / 2);
        v_u_31084 = new THREE.BufferGeometry(), v_f_31085 = new THREE.MeshBasicMaterial({
          color: 16777215,
          vertexColors: !0,
          transparent: !0,
          side: THREE.DoubleSide,
          depthWrite: !1,
          depthTest: !1
        }), v___31086 = [-960, 540, 0, 960, 540, 0, -960, -540, 0, 960, -540, 0], v_t_31077 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], v_c_31083 = [0, 1, 2, 2, 1, 3], v___31086 = (v_u_31084.setIndex(new THREE.BufferAttribute(new Uint32Array(v_c_31083), 1)), v_u_31084.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v___31086), 3)), v_u_31084.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_t_31077), 4)), v_u_31084.setDrawRange(0, v_c_31083.length), new THREE.Mesh(v_u_31084, v_f_31085));
        v_N_31060[0].add(v___31086);
        for (let v_t_31113 = 0; v_t_31113 < 0; ++v_t_31113) {
          var v_A_31098 = new THREE.BufferGeometry(),
            v_x_31099 = new THREE.MeshBasicMaterial({
              color: 16777215,
              vertexColors: !0,
              transparent: !0,
              side: THREE.DoubleSide,
              depthWrite: !1,
              depthTest: !1
            }),
            v_C_31100 = 135 * v_t_31113,
            v_T_31101 = 135 * (v_t_31113 + 1),
            v_C_31100 = [-960, 540 - v_C_31100, 0, 960, 540 - v_C_31100, 0, -960, 540 - v_T_31101, 0, 960, 540 - v_T_31101, 0],
            v_T_31101 = [138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, .25, 138 / 255, 26 / 255, 176 / 255, 1, 138 / 255, 26 / 255, 176 / 255, 1],
            v_I_31102 = [0, 1, 2, 2, 1, 3],
            v_C_31100 = (v_A_31098.setIndex(new THREE.BufferAttribute(new Uint32Array(v_I_31102), 1)), v_A_31098.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_C_31100), 3)), v_A_31098.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_T_31101), 4)), v_A_31098.setDrawRange(0, v_I_31102.length), new THREE.Mesh(v_A_31098, v_x_31099));
          v_N_31060[0].add(v_C_31100), v_O_31068.bg_plates.push(v_C_31100);
        }
        v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, scope.v_yn_27656 / scope.v_Sn_27657, .1, 3e3));
        var v_t_31077 = new THREE.MeshStandardMaterial({
            color: 7284382,
            vertexColors: !0,
            transparent: !0
          }),
          v_P_31103 = [],
          v_R_31104 = [],
          v_L_31105 = [],
          v_M_31106 = v_O_31068.PLANE_WIDTH,
          v_E_31107 = v_O_31068.PLANE_HEIGHT;
        for (let v_t_31114 = 0; v_t_31114 < v_O_31068.PLANES_COLS * v_O_31068.PLANES_ROWS; ++v_t_31114) {
          var v_D_31108,
            v_F_31109 = v_t_31114 % v_O_31068.PLANES_COLS * v_O_31068.PLANE_OUTER_WIDTH - v_O_31068.PLANE_AREA_X / 2 + v_M_31106 / 2;
          scope.mathRandom() < .75 ? v_P_31103.push(v_F_31109 - v_M_31106 / 2 + 20 * scope.mathRandom() - 10, 0, v_E_31107 / 2 + 20 * scope.mathRandom() - 10, v_F_31109 + v_M_31106 / 2 + 40 * scope.mathRandom() - 20, 0, v_E_31107 / 2 + 20 * scope.mathRandom() - 10, v_F_31109 - v_M_31106 / 2 + 36 * scope.mathRandom() - 18, 0, -v_E_31107 / 2 + 20 * scope.mathRandom() - 10, v_F_31109 + v_M_31106 / 2 + 20 * scope.mathRandom() - 10, 0, -v_E_31107 / 2 + 20 * scope.mathRandom() - 10) : v_P_31103.push(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), v_F_31109 = .25 - .25 * scope.mathAbs(v_t_31114 % v_O_31068.PLANES_COLS / (v_O_31068.PLANES_COLS / 2) - 1) + .25 * scope.mathRandom(), scope.mathRandom() < .75 ? v_R_31104.push(1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109, 1, 1, 1, v_F_31109) : (v_D_31108 = function (v_t_31115) {
            let v_i_31116 = v_t_31115[0] / 60,
              v_e_31117 = v_t_31115[1],
              v_n_31118 = v_t_31115[2],
              v_r_31119 = v_n_31118 + v_e_31117 * (1 - scope.mathAbs(2 * v_n_31118 - 1)) / 2,
              v_s_31120 = v_n_31118 - v_e_31117 * (1 - scope.mathAbs(2 * v_n_31118 - 1)) / 2,
              v_a_31121,
              v_o_31122 = scope.mathFloor(v_i_31116);
            0 === v_o_31122 || 6 === v_o_31122 ? v_a_31121 = [v_r_31119, v_s_31120 + (v_r_31119 - v_s_31120) * v_i_31116, v_s_31120] : 1 === v_o_31122 ? v_a_31121 = [v_s_31120 + (v_r_31119 - v_s_31120) * (120 - v_i_31116), v_r_31119, v_s_31120] : 2 === v_o_31122 ? v_a_31121 = [v_s_31120, v_r_31119, v_s_31120 + (v_r_31119 - v_s_31120) * (v_i_31116 - 2)] : 3 === v_o_31122 ? v_a_31121 = [v_s_31120, v_s_31120 + (v_r_31119 - v_s_31120) * (240 - v_i_31116), v_r_31119] : 4 === v_o_31122 ? v_a_31121 = [v_s_31120 + (v_r_31119 - v_s_31120) * (v_i_31116 - 4), v_s_31120, v_r_31119] : 5 === v_o_31122 && (v_a_31121 = [v_r_31119, v_s_31120, v_s_31120 + (v_r_31119 - v_s_31120) * (360 - v_i_31116)]);
            return [scope.mathCeil(255 * v_a_31121[0]), scope.mathCeil(255 * v_a_31121[1]), scope.mathCeil(255 * v_a_31121[2])];
          }([360 * scope.mathRandom(), .6, .5]), v_R_31104.push(v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109, v_D_31108[0] / 255, v_D_31108[1] / 255, v_D_31108[2] / 255, v_F_31109)), v_L_31105.push(4 * v_t_31114, 1 + 4 * v_t_31114, 2 + 4 * v_t_31114, 2 + 4 * v_t_31114, 1 + 4 * v_t_31114, 3 + 4 * v_t_31114), v_O_31068.planes_anim_data.push({
            offset_t: 5e3 * scope.mathRandom(),
            offset_y: 4 * scope.mathRandom() - 2,
            speed: scope.mathRandom() + 1,
            move: scope.mathRandom() < .75
          });
        }
        v_O_31068.planes.setIndex(new THREE.BufferAttribute(new Uint32Array(v_L_31105), 1)), v_O_31068.planes.setAttribute("position", new THREE.BufferAttribute(new Float32Array(v_P_31103), 3)), v_O_31068.planes.setAttribute("color", new THREE.BufferAttribute(new Float32Array(v_R_31104), 4)), v_O_31068.planes.setDrawRange(0, v_L_31105.length);
        v_c_31083 = new THREE.Mesh(v_O_31068.planes, v_t_31077), v_u_31084 = (v_N_31060[1].add(v_c_31083), new THREE.DirectionalLight(16777215, 1)), v_f_31085 = (v_u_31084.position.set(0, 300, -800), v_N_31060[1].add(v_u_31084), new THREE.AmbientLight(16777215, 1));
        v_N_31060[1].add(v_f_31085), v_H_31065 = !0, scope.v_Fe_28101(v_e_31075);
      } else if (0 === v_i_31074.indexOf("model:")) {
        v_J_31066 = "user", v_V_31069 = 0, v_N_31060.push(new THREE.Scene()), v_G_31061.push(new THREE.PerspectiveCamera(75, scope.v_yn_27656 / scope.v_Sn_27657, .1, 3e3)), v_W_31070.wc = THREE.ACESFilmicToneMapping, v_W_31070.kc = !1, v_W_31070.bc = THREE.sRGBEncoding, (v_U_31064 = effekseer.createContext()).init(v_B_31057.getContext()), v_U_31064.setRestorationOfStatesFlag(!1);
        let v_t_31123 = new THREE.GLTFLoader(),
          v_s_31124 = {
            Sc: "bg.glb",
            xc: [],
            Jy: 0,
            Oy: {
              Vy: !(v_O_31068 = {
                init: !1,
                mixer: null,
                is_first_frame: !0,
                xc: []
              }),
              Wy: 0,
              Xy: 0,
              Xe: 0
            },
            NR: 16777215,
            UR: 1
          },
          v_n_31125 = "/player_scenes/" + v_i_31074.substr(6).replaceAll(/[/\\:*?"|<>"]/g, "_") + "/";
        scope.v_Le_28076([function (v_t_31126) {
          scope.v_$r_27975.Ic(v_n_31125 + "bg_conf.txt", function (v_e_31127) {
            if (null !== v_e_31127) {
              let v_t_31128 = v_e_31127.replace(/\r\n/g, "\n").split("\n"),
                v_i_31129;
              scope.v_De_28096(v_t_31128, function (v_t_31130) {
                0 !== (v_i_31129 = v_t_31130.split("\t")).length && ("Model" === v_i_31129[0] ? v_i_31129.length < 2 || (v_s_31124.Sc = v_i_31129[1]) : "Layer" === v_i_31129[0] ? v_i_31129.length < 3 || "EFK" === v_i_31129[1] && v_s_31124.xc.push({
                  Fi: 1,
                  ct: v_i_31129[2]
                }) : "Ambient" === v_i_31129[0] ? v_i_31129.length < 3 || (v_s_31124.NR = scope.v_Ea_28065(v_i_31129[1]), v_s_31124.UR = scope.v_Re_28066(v_i_31129[2])) : "PhysLight" === v_i_31129[0] ? v_i_31129.length < 2 || (v_W_31070.kc = scope.v_La_28062(v_i_31129[1])) : "PostFx" === v_i_31129[0] ? v_i_31129.length < 2 || ("BlurUp" === v_i_31129[1] ? v_s_31124.Jy = 1 : v_s_31124.Jy = 0) : "Fog" !== v_i_31129[0] || v_i_31129.length < 5 || (v_s_31124.Oy.Vy = scope.v_La_28062(v_i_31129[1]), v_s_31124.Oy.Wy = scope.v_Ea_28065(v_i_31129[2]), v_s_31124.Oy.Xy = scope.v_Re_28066(v_i_31129[3]), v_s_31124.Oy.Xe = scope.v_Re_28066(v_i_31129[4])));
              });
            }
            scope.v_Me_28078(v_t_31126);
          });
        }, function (v_r_31131) {
          "" === v_s_31124.Sc ? scope.v_Me_28078(v_r_31131) : v_t_31123.load(v_n_31125 + v_s_31124.Sc, function (v_i_31132) {
            v_O_31068.init = !0;
            var v_t_31133 = v_i_31132.scene;
            if (v_t_31133.position.set(0, 0, 0), v_i_31132.cameras[0] && (v_G_31061[v_G_31061.length - 1] = v_i_31132.cameras[0]), v_i_31132.animations && v_i_31132.animations.length) {
              var v_e_31134 = new THREE.AnimationMixer(v_i_31132.scene);
              for (let v_t_31136 = 0; v_t_31136 < v_i_31132.animations.length; ++v_t_31136) {
                var v_n_31135 = v_e_31134.clipAction(v_i_31132.animations[v_t_31136]);
                v_n_31135.clampWhenFinished = !0, v_n_31135.play();
              }
              v_O_31068.mixer = v_e_31134;
            }
            v_N_31060[0].add(v_t_31133), v_N_31060[0].add(new THREE.AmbientLight(v_s_31124.NR, v_s_31124.UR)), v_N_31060[0].matrixWorldNeedsUpdate = !0, scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !0), scope.v_Me_28078(v_r_31131);
          }, function () {}, function () {
            scope.v_Me_28078(v_r_31131);
          });
        }, function (v_t_31137) {
          scope.v_lo_28099(v_s_31124.xc, function (v_i_31138, v_t_31139, v_e_31140) {
            if (1 === v_e_31140.Fi) {
              let v_t_31141 = v_U_31064.loadEffect(v_n_31125 + v_e_31140.ct, 1, function () {
                v_O_31068.xc.push({
                  Fi: 1,
                  yc: v_t_31141
                }), v_i_31138();
              });
            } else v_i_31138();
          }, function () {
            scope.v_Me_28078(v_t_31137);
          });
        }, function (v_t_31142) {
          scope.v_De_28096(v_O_31068.xc, function (v_t_31143) {
            1 === v_t_31143.Fi && v_U_31064.play(v_t_31143.yc);
          }), v_W_31070.XP = v_s_31124.Jy, v_s_31124.Oy.Vy && (v_N_31060[0].fog = new THREE.Fog(v_s_31124.Oy.Wy, v_s_31124.Oy.Xy, v_s_31124.Oy.Xe)), v_H_31065 = !0, scope.v_Fe_28101(v_e_31075);
        }]);
      } else scope.v_kn_27636 = [0, 0, 0], v_H_31065 = !0, scope.v_Fe_28101(v_e_31075);
      for (let v_t_31144 = 0; v_t_31144 < v_N_31060.length; ++v_t_31144) v_N_31060[v_t_31144].matrixWorldNeedsUpdate = !0;
      scope.glContext.pixelStorei(scope.glContext.UNPACK_FLIP_Y_WEBGL, !0);
    },
    le: function (v_e_31145) {
      if (v_H_31065) {
        let v_t_31158 = 0;
        if (v_t_31158 = null === v_m_31071 ? 0 : (v_e_31145 - v_m_31071) / 1e3, v_m_31071 = v_e_31145, v_B_31057.resetState(), v_B_31057.toneMapping = v_W_31070.wc, v_B_31057.physicallyCorrectLights = v_W_31070.kc, v_B_31057.outputEncoding = v_W_31070.bc, v_B_31057.setRenderTarget(v_v_31058), v_B_31057.setClearColor(v_V_31069, 1), v_B_31057.clear(!0, !0, !1), "_default_1" === v_J_31066) {
          v_G_31061[0].position.set(0, 200, 700), v_G_31061[0].lookAt(new THREE.Vector3(0, 0, 470));
          var v_n_31146,
            v_r_31147,
            v_s_31148,
            v_a_31149 = v_O_31068.planes.attributes.position.array;
          for (let v_i_31159 = 0; v_i_31159 < v_O_31068.PLANES_ROWS; ++v_i_31159) for (let v_t_31160 = 0; v_t_31160 < v_O_31068.PLANES_COLS; ++v_t_31160) v_n_31146 = 3 * (v_r_31147 = v_i_31159 * v_O_31068.PLANES_COLS + v_t_31160) * 4, v_r_31147 = (v_r_31147 = v_O_31068.planes_anim_data[v_r_31147]).move ? 4 * scope.mathSin((v_e_31145 / 1e3 + v_r_31147.offset_t) / v_r_31147.speed * scope.mathPI / 2) + v_r_31147.offset_y : 0, v_s_31148 = scope.v_Za_28087(v_e_31145 / 40 + v_i_31159 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_a_31149[0 + v_n_31146 + 1] = v_a_31149[3 + v_n_31146 + 1] = v_a_31149[6 + v_n_31146 + 1] = v_a_31149[9 + v_n_31146 + 1] = v_r_31147, v_a_31149[0 + v_n_31146 + 2] = v_a_31149[3 + v_n_31146 + 2] = v_s_31148 + v_O_31068.PLANE_WIDTH / 2, v_a_31149[6 + v_n_31146 + 2] = v_a_31149[9 + v_n_31146 + 2] = v_s_31148 - v_O_31068.PLANE_WIDTH / 2;
          v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
        } else if ("_default_umiguri_new" === v_J_31066) {
          for (let v_t_31161 = 0; v_t_31161 < v_O_31068.bg_plates.length; ++v_t_31161) v_O_31068.bg_plates[v_t_31161].material.opacity = scope.mathMax(1 - scope.v_Za_28087(v_e_31145 / 1e3 - .5 * v_t_31161, 4) / 2, 0) * (1 - v_t_31161 / 8) * .75;
          v_G_31061[1].position.set(0, 200, 700), v_G_31061[1].lookAt(new THREE.Vector3(0, 0, 470));
          var v_o_31150,
            v_l_31151,
            v_c_31152,
            v_u_31153 = v_O_31068.planes.attributes.position.array;
          for (let v_i_31162 = 0; v_i_31162 < v_O_31068.PLANES_ROWS; ++v_i_31162) for (let v_t_31163 = 0; v_t_31163 < v_O_31068.PLANES_COLS; ++v_t_31163) v_o_31150 = 3 * (v_l_31151 = v_i_31162 * v_O_31068.PLANES_COLS + v_t_31163) * 4, v_l_31151 = (v_l_31151 = v_O_31068.planes_anim_data[v_l_31151]).move ? 4 * scope.mathSin((v_e_31145 / 1e3 + v_l_31151.offset_t) / v_l_31151.speed * scope.mathPI / 2) + v_l_31151.offset_y : 0, v_c_31152 = scope.v_Za_28087(v_e_31145 / 40 + v_i_31162 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_u_31153[0 + v_o_31150 + 1] = v_u_31153[3 + v_o_31150 + 1] = v_u_31153[6 + v_o_31150 + 1] = v_u_31153[9 + v_o_31150 + 1] = v_l_31151, v_u_31153[0 + v_o_31150 + 2] = v_u_31153[3 + v_o_31150 + 2] = v_c_31152 + v_O_31068.PLANE_WIDTH / 2, v_u_31153[6 + v_o_31150 + 2] = v_u_31153[9 + v_o_31150 + 2] = v_c_31152 - v_O_31068.PLANE_WIDTH / 2;
          v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
        } else if ("_default_we" === v_J_31066) {
          v_G_31061[1].position.set(0, 200, 700), v_G_31061[1].lookAt(new THREE.Vector3(0, 0, 470));
          var v_f_31154,
            v___31155,
            v_h_31156,
            v_d_31157 = v_O_31068.planes.attributes.position.array;
          for (let v_i_31164 = 0; v_i_31164 < v_O_31068.PLANES_ROWS; ++v_i_31164) for (let v_t_31165 = 0; v_t_31165 < v_O_31068.PLANES_COLS; ++v_t_31165) v_f_31154 = 3 * (v___31155 = v_i_31164 * v_O_31068.PLANES_COLS + v_t_31165) * 4, v___31155 = (v___31155 = v_O_31068.planes_anim_data[v___31155]).move ? 4 * scope.mathSin((v_e_31145 / 1e3 + v___31155.offset_t) / v___31155.speed * scope.mathPI / 2) + v___31155.offset_y : 0, v_h_31156 = scope.v_Za_28087(v_e_31145 / 40 + v_i_31164 * v_O_31068.PLANE_OUTER_HEIGHT, v_O_31068.PLANES_ROWS * v_O_31068.PLANE_OUTER_HEIGHT) - 600, v_d_31157[0 + v_f_31154 + 1] = v_d_31157[3 + v_f_31154 + 1] = v_d_31157[6 + v_f_31154 + 1] = v_d_31157[9 + v_f_31154 + 1] = v___31155, v_d_31157[0 + v_f_31154 + 2] = v_d_31157[3 + v_f_31154 + 2] = v_h_31156 + v_O_31068.PLANE_WIDTH / 2, v_d_31157[6 + v_f_31154 + 2] = v_d_31157[9 + v_f_31154 + 2] = v_h_31156 - v_O_31068.PLANE_WIDTH / 2;
          v_O_31068.planes.attributes.position.needsUpdate = !0, v_O_31068.planes.computeVertexNormals();
        } else "user" === v_J_31066 && v_O_31068.init && v_O_31068.mixer && v_O_31068.mixer.update(v_t_31158);
        if ("user" === v_J_31066) {
          v_O_31068.is_first_frame ? (v_U_31064.update(14400), v_O_31068.is_first_frame = !1) : v_U_31064.update(60 * v_t_31158), v_G_31061[0] && (v_U_31064.setProjectionMatrix(v_G_31061[0].projectionMatrix.elements), v_U_31064.setCameraMatrix(v_G_31061[0].matrixWorldInverse.elements));
          for (let v_t_31166 = 0; v_t_31166 < v_N_31060.length; ++v_t_31166) v_G_31061[v_t_31166] && v_B_31057.render(v_N_31060[v_t_31166], v_G_31061[v_t_31166]);
          v_U_31064.draw();
        } else for (let v_t_31167 = 0; v_t_31167 < v_N_31060.length; ++v_t_31167) v_G_31061[v_t_31167] && v_B_31057.render(v_N_31060[v_t_31167], v_G_31061[v_t_31167]);
        v_B_31057.render(v_w_31062, v_g_31063), scope.renderer.Yt.Cc(1), v_i_31059 = v_i_31059 || v_B_31057.properties.get(v_v_31058.texture).__webglTexture;
      }
    },
    zP: function () {
      for (let v_t_31168 = 0; v_t_31168 < v_N_31060.length; ++v_t_31168) v_N_31060[v_t_31168].remove.apply(v_N_31060[v_t_31168], v_N_31060[v_t_31168].children);
      v_N_31060 = [], v_G_31061 = [], v_U_31064 && (v_U_31064.stopAll(), "user" === v_J_31066 && scope.v_De_28096(v_O_31068.xc, function (v_t_31169) {
        1 === v_t_31169.Fi && v_U_31064.releaseEffect(v_t_31169.yc);
      }), effekseer.releaseContext(v_U_31064), v_U_31064 = null), v_O_31068 = {}, scope.v_kn_27636 = [0, 0, 0], v_m_31071 = null, v_J_31066 = "", v_j_31067 = "";
    },
    KP: function () {
      return v_i_31059;
    },
    YP: function () {
      return "user" === v_J_31066;
    },
    HR: function () {
      return v_j_31067;
    },
    qP: function () {
      return v_W_31070.XP;
    }
  };
}
