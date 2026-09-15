// vendor: m_GL_0
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

var m_GL_0 = function () {
  var v_p_27086,
    v_i_27087 = {
      create: function (v_t_27109) {
        v_t_27109 = v_t_27109 || {};
        var v_e_27110,
          v_n_27111,
          v_h_27112,
          v_s_27113,
          v_i_27114,
          v_r_27115,
          v_o_27116,
          v_u_27117,
          v_a_27118,
          v_f_27119,
          v_c_27120,
          v_l_27121,
          v_w_27122,
          v_d_27123,
          v_m_27124 = document.createElement("canvas");
        v_m_27124.width = 800, v_m_27124.height = 600, "alpha" in v_t_27109 || (v_t_27109.alpha = !1);
        try {
          v_p_27086 = v_m_27124.getContext("webgl", v_t_27109);
        } catch (v_t_27130) {}
        try {
          v_p_27086 = v_p_27086 || v_m_27124.getContext("experimental-webgl", v_t_27109);
        } catch (v_t_27131) {}
        if (v_p_27086) return v_p_27086.HALF_FLOAT_OES = 36193, v_p_27086.MODELVIEW = 1 | v_E_27091, v_p_27086.PROJECTION = 2 | v_E_27091, v_h_27112 = new v_j_27093(), v_s_27113 = new v_j_27093(), v_p_27086.modelviewMatrix = new v_j_27093(), v_p_27086.projectionMatrix = new v_j_27093(), v_i_27114 = [], v_r_27115 = [], v_p_27086.matrixMode = function (v_t_27132) {
          switch (v_t_27132) {
            case v_p_27086.MODELVIEW:
              v_e_27110 = "modelviewMatrix", v_n_27111 = v_i_27114;
              break;
            case v_p_27086.PROJECTION:
              v_e_27110 = "projectionMatrix", v_n_27111 = v_r_27115;
              break;
            default:
              throw new Error("invalid matrix mode " + v_t_27132);
          }
        }, v_p_27086.loadIdentity = function () {
          v_j_27093.identity(v_p_27086[v_e_27110]);
        }, v_p_27086.loadMatrix = function (v_t_27133) {
          for (var v_n_27134 = v_t_27133.m, v_i_27135 = v_p_27086[v_e_27110].m, v_r_27136 = 0; v_r_27136 < 16; v_r_27136++) v_i_27135[v_r_27136] = v_n_27134[v_r_27136];
        }, v_p_27086.multMatrix = function (v_t_27137) {
          v_p_27086.loadMatrix(v_j_27093.multiply(v_p_27086[v_e_27110], v_t_27137, v_s_27113));
        }, v_p_27086.perspective = function (v_t_27138, v_n_27139, v_i_27140, v_r_27141) {
          v_p_27086.multMatrix(v_j_27093.perspective(v_t_27138, v_n_27139, v_i_27140, v_r_27141, v_h_27112));
        }, v_p_27086.frustum = function (v_t_27142, v_n_27143, v_i_27144, v_r_27145, v_e_27146, v_o_27147) {
          v_p_27086.multMatrix(v_j_27093.frustum(v_t_27142, v_n_27143, v_i_27144, v_r_27145, v_e_27146, v_o_27147, v_h_27112));
        }, v_p_27086.ortho = function (v_t_27148, v_n_27149, v_i_27150, v_r_27151, v_e_27152, v_o_27153) {
          v_p_27086.multMatrix(v_j_27093.ortho(v_t_27148, v_n_27149, v_i_27150, v_r_27151, v_e_27152, v_o_27153, v_h_27112));
        }, v_p_27086.scale = function (v_t_27154, v_n_27155, v_i_27156) {
          v_p_27086.multMatrix(v_j_27093.scale(v_t_27154, v_n_27155, v_i_27156, v_h_27112));
        }, v_p_27086.translate = function (v_t_27157, v_n_27158, v_i_27159) {
          v_p_27086.multMatrix(v_j_27093.translate(v_t_27157, v_n_27158, v_i_27159, v_h_27112));
        }, v_p_27086.rotate = function (v_t_27160, v_n_27161, v_i_27162, v_r_27163) {
          v_p_27086.multMatrix(v_j_27093.rotate(v_t_27160, v_n_27161, v_i_27162, v_r_27163, v_h_27112));
        }, v_p_27086.lookAt = function (v_t_27164, v_n_27165, v_i_27166, v_r_27167, v_e_27168, v_o_27169, v_s_27170, v_u_27171, v_a_27172) {
          v_p_27086.multMatrix(v_j_27093.lookAt(v_t_27164, v_n_27165, v_i_27166, v_r_27167, v_e_27168, v_o_27169, v_s_27170, v_u_27171, v_a_27172, v_h_27112));
        }, v_p_27086.pushMatrix = function () {
          v_n_27111.push(Array.prototype.slice.call(v_p_27086[v_e_27110].m));
        }, v_p_27086.popMatrix = function () {
          var v_t_27173 = v_n_27111.pop();
          v_p_27086[v_e_27110].m = v_A_27092 ? new Float32Array(v_t_27173) : v_t_27173;
        }, v_p_27086.project = function (v_t_27174, v_n_27175, v_i_27176, v_r_27177, v_e_27178, v_o_27179) {
          v_r_27177 = v_r_27177 || v_p_27086.modelviewMatrix, v_e_27178 = v_e_27178 || v_p_27086.projectionMatrix, v_o_27179 = v_o_27179 || v_p_27086.getParameter(v_p_27086.VIEWPORT);
          v_e_27178 = v_e_27178.transformPoint(v_r_27177.transformPoint(new v_V_27108(v_t_27174, v_n_27175, v_i_27176)));
          return new v_V_27108(v_o_27179[0] + v_o_27179[2] * (.5 * v_e_27178.x + .5), v_o_27179[1] + v_o_27179[3] * (.5 * v_e_27178.y + .5), .5 * v_e_27178.z + .5);
        }, v_p_27086.unProject = function (v_t_27180, v_n_27181, v_i_27182, v_r_27183, v_e_27184, v_o_27185) {
          v_r_27183 = v_r_27183 || v_p_27086.modelviewMatrix, v_e_27184 = v_e_27184 || v_p_27086.projectionMatrix;
          v_t_27180 = new v_V_27108((v_t_27180 - (v_o_27185 = v_o_27185 || v_p_27086.getParameter(v_p_27086.VIEWPORT))[0]) / v_o_27185[2] * 2 - 1, (v_n_27181 - v_o_27185[1]) / v_o_27185[3] * 2 - 1, 2 * v_i_27182 - 1);
          return v_j_27093.inverse(v_j_27093.multiply(v_e_27184, v_r_27183, v_h_27112), v_s_27113).transformPoint(v_t_27180);
        }, v_p_27086.matrixMode(v_p_27086.MODELVIEW), v_o_27116 = {
          mesh: new v_P_27096({
            coords: !0,
            colors: !0,
            triangles: !1
          }),
          mode: -1,
          coord: [0, 0, 0, 0],
          color: [1, 1, 1, 1],
          pointSize: 1,
          shader: new v_S_27103("      uniform float pointSize;      varying vec4 color;      varying vec4 coord;      void main() {        color = gl_Color;        coord = gl_TexCoord;        gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;        gl_PointSize = pointSize;      }    ", "      uniform sampler2D texture;      uniform float pointSize;      uniform bool useTexture;      varying vec4 color;      varying vec4 coord;      void main() {        gl_FragColor = color;        if (useTexture) gl_FragColor *= texture2D(texture, coord.xy);      }    ")
        }, v_p_27086.pointSize = function (v_t_27186) {
          v_o_27116.shader.uniforms({
            pointSize: v_t_27186
          });
        }, v_p_27086.begin = function (v_t_27187) {
          if (-1 != v_o_27116.mode) throw new Error("mismatched gl.begin() and gl.end() calls");
          v_o_27116.mode = v_t_27187, v_o_27116.mesh.colors = [], v_o_27116.mesh.coords = [], v_o_27116.mesh.vertices = [];
        }, v_p_27086.color = function (v_t_27188, v_n_27189, v_i_27190, v_r_27191) {
          v_o_27116.color = 1 == arguments.length ? v_t_27188.toArray().concat(1) : [v_t_27188, v_n_27189, v_i_27190, v_r_27191 || 1];
        }, v_p_27086.texCoord = function (v_t_27192, v_n_27193) {
          v_o_27116.coord = 1 == arguments.length ? v_t_27192.toArray(2) : [v_t_27192, v_n_27193];
        }, v_p_27086.vertex = function (v_t_27194, v_n_27195, v_i_27196) {
          v_o_27116.mesh.colors.push(v_o_27116.color), v_o_27116.mesh.coords.push(v_o_27116.coord), v_o_27116.mesh.vertices.push(1 == arguments.length ? v_t_27194.toArray() : [v_t_27194, v_n_27195, v_i_27196]);
        }, v_p_27086.end = function () {
          if (-1 == v_o_27116.mode) throw new Error("mismatched gl.begin() and gl.end() calls");
          v_o_27116.mesh.compile(), v_o_27116.shader.uniforms({
            useTexture: !!v_p_27086.getParameter(v_p_27086.TEXTURE_BINDING_2D)
          }).draw(v_o_27116.mesh, v_o_27116.mode), v_o_27116.mode = -1;
        }, v_u_27117 = v_p_27086, v_f_27119 = v_a_27118 = 0, v_l_27121 = !(v_c_27120 = {}), v_w_27122 = Object.prototype.hasOwnProperty, v_b_27089(v_p_27086.canvas, "mousedown", function (v_t_27197) {
          v_p_27086 = v_u_27117, v_v_27125() || (v_b_27089(document, "mousemove", v_M_27127), v_b_27089(document, "mouseup", v___27128), v_y_27090(v_p_27086.canvas, "mousemove", v_M_27127), v_y_27090(v_p_27086.canvas, "mouseup", v___27128)), v_c_27120[v_t_27197.which] = !0, v_t_27197 = v_g_27126(v_t_27197), v_p_27086.onmousedown && v_p_27086.onmousedown(v_t_27197), v_t_27197.preventDefault();
        }), v_b_27089(v_p_27086.canvas, "mousemove", v_M_27127), v_b_27089(v_p_27086.canvas, "mouseup", v___27128), v_b_27089(v_p_27086.canvas, "mouseover", v_x_27129), v_b_27089(v_p_27086.canvas, "mouseout", v_x_27129), v_b_27089(document, "contextmenu", function () {
          v_l_27121 = !(v_c_27120 = {});
        }), (v_d_27123 = v_p_27086).makeCurrent = function () {
          v_p_27086 = v_d_27123;
        }, v_p_27086.animate = function () {
          var v_i_27198 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (v_t_27201) {
              setTimeout(v_t_27201, 1e3 / 60);
            },
            v_r_27199 = new Date().getTime(),
            v_e_27200 = v_p_27086;
          !function v_t_27202() {
            v_p_27086 = v_e_27200;
            var v_n_27203 = new Date().getTime();
            v_p_27086.onupdate && v_p_27086.onupdate((v_n_27203 - v_r_27199) / 1e3), v_p_27086.ondraw && v_p_27086.ondraw(), v_i_27198(v_t_27202), v_r_27199 = v_n_27203;
          }();
        }, v_p_27086.fullscreen = function (v_t_27204) {
          var v_n_27205 = (v_t_27204 = v_t_27204 || {}).paddingTop || 0,
            v_i_27206 = v_t_27204.paddingLeft || 0,
            v_r_27207 = v_t_27204.paddingRight || 0,
            v_e_27208 = v_t_27204.paddingBottom || 0;
          if (!document.body) throw new Error("document.body doesn't exist yet (call gl.fullscreen() from window.onload() or from inside the <body> tag)");
          function v_o_27209() {
            v_p_27086.canvas.width = window.innerWidth - v_i_27206 - v_r_27207, v_p_27086.canvas.height = window.innerHeight - v_n_27205 - v_e_27208, v_p_27086.viewport(0, 0, v_p_27086.canvas.width, v_p_27086.canvas.height), !v_t_27204.camera && "camera" in v_t_27204 || (v_p_27086.matrixMode(v_p_27086.PROJECTION), v_p_27086.loadIdentity(), v_p_27086.perspective(v_t_27204.fov || 45, v_p_27086.canvas.width / v_p_27086.canvas.height, v_t_27204.near || .1, v_t_27204.far || 1e3), v_p_27086.matrixMode(v_p_27086.MODELVIEW)), v_p_27086.ondraw && v_p_27086.ondraw();
          }
          document.body.appendChild(v_p_27086.canvas), document.body.style.overflow = "hidden", v_p_27086.canvas.style.position = "absolute", v_p_27086.canvas.style.left = v_i_27206 + "px", v_p_27086.canvas.style.top = v_n_27205 + "px", v_b_27089(window, "resize", v_o_27209), v_o_27209();
        }, v_p_27086;
        throw new Error("WebGL not supported");
        function v_v_27125() {
          for (var v_t_27210 in v_c_27120) if (v_w_27122.call(v_c_27120, v_t_27210) && v_c_27120[v_t_27210]) return !0;
          return !1;
        }
        function v_g_27126(v_n_27211) {
          var v_t_27212,
            v_i_27213 = {};
          for (v_t_27212 in v_n_27211) "function" == typeof v_n_27211[v_t_27212] ? v_i_27213[v_t_27212] = function (v_t_27215) {
            return function () {
              v_t_27215.apply(v_n_27211, arguments);
            };
          }(v_n_27211[v_t_27212]) : v_i_27213[v_t_27212] = v_n_27211[v_t_27212];
          v_i_27213.original = v_n_27211, v_i_27213.x = v_i_27213.pageX, v_i_27213.y = v_i_27213.pageY;
          for (var v_r_27214 = v_p_27086.canvas; v_r_27214; v_r_27214 = v_r_27214.offsetParent) v_i_27213.x -= v_r_27214.offsetLeft, v_i_27213.y -= v_r_27214.offsetTop;
          return v_l_27121 ? (v_i_27213.deltaX = v_i_27213.x - v_a_27118, v_i_27213.deltaY = v_i_27213.y - v_f_27119) : (v_i_27213.deltaX = 0, v_l_27121 = !(v_i_27213.deltaY = 0)), v_a_27118 = v_i_27213.x, v_f_27119 = v_i_27213.y, v_i_27213.dragging = v_v_27125(), v_i_27213.preventDefault = function () {
            v_i_27213.original.preventDefault();
          }, v_i_27213.stopPropagation = function () {
            v_i_27213.original.stopPropagation();
          }, v_i_27213;
        }
        function v_M_27127(v_t_27216) {
          v_p_27086 = v_u_27117, v_t_27216 = v_g_27126(v_t_27216), v_p_27086.onmousemove && v_p_27086.onmousemove(v_t_27216), v_t_27216.preventDefault();
        }
        function v___27128(v_t_27217) {
          v_p_27086 = v_u_27117, v_c_27120[v_t_27217.which] = !1, v_v_27125() || (v_y_27090(document, "mousemove", v_M_27127), v_y_27090(document, "mouseup", v___27128), v_b_27089(v_p_27086.canvas, "mousemove", v_M_27127), v_b_27089(v_p_27086.canvas, "mouseup", v___27128)), v_t_27217 = v_g_27126(v_t_27217), v_p_27086.onmouseup && v_p_27086.onmouseup(v_t_27217), v_t_27217.preventDefault();
        }
        function v_x_27129() {
          v_l_27121 = !1;
        }
      },
      keys: {},
      Matrix: v_j_27093,
      Indexer: v_m_27094,
      Buffer: v_e_27095,
      Mesh: v_P_27096,
      HitTest: v_h_27099,
      Raytracer: v_t_27100,
      Shader: v_S_27103,
      Texture: v_c_27107,
      Vector: v_V_27108
    };
  function v_r_27088(v_t_27218) {
    return {
      8: "BACKSPACE",
      9: "TAB",
      13: "ENTER",
      16: "SHIFT",
      27: "ESCAPE",
      32: "SPACE",
      37: "LEFT",
      38: "UP",
      39: "RIGHT",
      40: "DOWN"
    }[v_t_27218] || (65 <= v_t_27218 && v_t_27218 <= 90 ? String.fromCharCode(v_t_27218) : null);
  }
  function v_b_27089(v_t_27219, v_n_27220, v_i_27221) {
    v_t_27219.addEventListener(v_n_27220, v_i_27221);
  }
  function v_y_27090(v_t_27222, v_n_27223, v_i_27224) {
    v_t_27222.removeEventListener(v_n_27223, v_i_27224);
  }
  v_b_27089(document, "keydown", function (v_t_27225) {
    var v_n_27226;
    v_t_27225.altKey || v_t_27225.ctrlKey || v_t_27225.metaKey || ((v_n_27226 = v_r_27088(v_t_27225.keyCode)) && (v_i_27087.keys[v_n_27226] = !0), v_i_27087.keys[v_t_27225.keyCode] = !0);
  }), v_b_27089(document, "keyup", function (v_t_27227) {
    var v_n_27228;
    v_t_27227.altKey || v_t_27227.ctrlKey || v_t_27227.metaKey || ((v_n_27228 = v_r_27088(v_t_27227.keyCode)) && (v_i_27087.keys[v_n_27228] = !1), v_i_27087.keys[v_t_27227.keyCode] = !1);
  });
  var v_E_27091 = 305397760,
    v_A_27092 = "undefined" != typeof Float32Array;
  function v_j_27093() {
    var v_t_27229 = Array.prototype.concat.apply([], arguments);
    v_t_27229.length || (v_t_27229 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), this.m = v_A_27092 ? new Float32Array(v_t_27229) : v_t_27229;
  }
  function v_m_27094() {
    this.unique = [], this.indices = [], this.map = {};
  }
  function v_e_27095(v_t_27230, v_n_27231) {
    this.buffer = null, this.target = v_t_27230, this.type = v_n_27231, this.elmSize = 1, this.data = [], this.refCount = 1;
  }
  function v_P_27096(v_t_27232) {
    v_t_27232 = v_t_27232 || {}, this.vertexBuffers = {}, this.indexBuffers = {}, this.addVertexBuffer("vertices", "gl_Vertex"), v_t_27232.coords && this.addVertexBuffer("coords", "gl_TexCoord"), v_t_27232.normals && this.addVertexBuffer("normals", "gl_Normal"), v_t_27232.colors && this.addVertexBuffer("colors", "gl_Color"), "triangles" in v_t_27232 && !v_t_27232.triangles || this.addIndexBuffer("triangles"), v_t_27232.lines && this.addIndexBuffer("lines");
  }
  v_j_27093.prototype = {
    inverse: function () {
      return v_j_27093.inverse(this, new v_j_27093());
    },
    transpose: function () {
      return v_j_27093.transpose(this, new v_j_27093());
    },
    multiply: function (v_t_27233) {
      return v_j_27093.multiply(this, v_t_27233, new v_j_27093());
    },
    transformPoint: function (v_t_27234) {
      var v_n_27235 = this.m;
      return new v_V_27108(v_n_27235[0] * v_t_27234.x + v_n_27235[1] * v_t_27234.y + v_n_27235[2] * v_t_27234.z + v_n_27235[3], v_n_27235[4] * v_t_27234.x + v_n_27235[5] * v_t_27234.y + v_n_27235[6] * v_t_27234.z + v_n_27235[7], v_n_27235[8] * v_t_27234.x + v_n_27235[9] * v_t_27234.y + v_n_27235[10] * v_t_27234.z + v_n_27235[11]).divide(v_n_27235[12] * v_t_27234.x + v_n_27235[13] * v_t_27234.y + v_n_27235[14] * v_t_27234.z + v_n_27235[15]);
    },
    transformVector: function (v_t_27236) {
      var v_n_27237 = this.m;
      return new v_V_27108(v_n_27237[0] * v_t_27236.x + v_n_27237[1] * v_t_27236.y + v_n_27237[2] * v_t_27236.z, v_n_27237[4] * v_t_27236.x + v_n_27237[5] * v_t_27236.y + v_n_27237[6] * v_t_27236.z, v_n_27237[8] * v_t_27236.x + v_n_27237[9] * v_t_27236.y + v_n_27237[10] * v_t_27236.z);
    }
  }, v_j_27093.inverse = function (v_t_27238, v_n_27239) {
    v_n_27239 = v_n_27239 || new v_j_27093();
    for (var v_t_27238 = v_t_27238.m, v_i_27240 = v_n_27239.m, v_r_27241 = (v_i_27240[0] = v_t_27238[5] * v_t_27238[10] * v_t_27238[15] - v_t_27238[5] * v_t_27238[14] * v_t_27238[11] - v_t_27238[6] * v_t_27238[9] * v_t_27238[15] + v_t_27238[6] * v_t_27238[13] * v_t_27238[11] + v_t_27238[7] * v_t_27238[9] * v_t_27238[14] - v_t_27238[7] * v_t_27238[13] * v_t_27238[10], v_i_27240[1] = -v_t_27238[1] * v_t_27238[10] * v_t_27238[15] + v_t_27238[1] * v_t_27238[14] * v_t_27238[11] + v_t_27238[2] * v_t_27238[9] * v_t_27238[15] - v_t_27238[2] * v_t_27238[13] * v_t_27238[11] - v_t_27238[3] * v_t_27238[9] * v_t_27238[14] + v_t_27238[3] * v_t_27238[13] * v_t_27238[10], v_i_27240[2] = v_t_27238[1] * v_t_27238[6] * v_t_27238[15] - v_t_27238[1] * v_t_27238[14] * v_t_27238[7] - v_t_27238[2] * v_t_27238[5] * v_t_27238[15] + v_t_27238[2] * v_t_27238[13] * v_t_27238[7] + v_t_27238[3] * v_t_27238[5] * v_t_27238[14] - v_t_27238[3] * v_t_27238[13] * v_t_27238[6], v_i_27240[3] = -v_t_27238[1] * v_t_27238[6] * v_t_27238[11] + v_t_27238[1] * v_t_27238[10] * v_t_27238[7] + v_t_27238[2] * v_t_27238[5] * v_t_27238[11] - v_t_27238[2] * v_t_27238[9] * v_t_27238[7] - v_t_27238[3] * v_t_27238[5] * v_t_27238[10] + v_t_27238[3] * v_t_27238[9] * v_t_27238[6], v_i_27240[4] = -v_t_27238[4] * v_t_27238[10] * v_t_27238[15] + v_t_27238[4] * v_t_27238[14] * v_t_27238[11] + v_t_27238[6] * v_t_27238[8] * v_t_27238[15] - v_t_27238[6] * v_t_27238[12] * v_t_27238[11] - v_t_27238[7] * v_t_27238[8] * v_t_27238[14] + v_t_27238[7] * v_t_27238[12] * v_t_27238[10], v_i_27240[5] = v_t_27238[0] * v_t_27238[10] * v_t_27238[15] - v_t_27238[0] * v_t_27238[14] * v_t_27238[11] - v_t_27238[2] * v_t_27238[8] * v_t_27238[15] + v_t_27238[2] * v_t_27238[12] * v_t_27238[11] + v_t_27238[3] * v_t_27238[8] * v_t_27238[14] - v_t_27238[3] * v_t_27238[12] * v_t_27238[10], v_i_27240[6] = -v_t_27238[0] * v_t_27238[6] * v_t_27238[15] + v_t_27238[0] * v_t_27238[14] * v_t_27238[7] + v_t_27238[2] * v_t_27238[4] * v_t_27238[15] - v_t_27238[2] * v_t_27238[12] * v_t_27238[7] - v_t_27238[3] * v_t_27238[4] * v_t_27238[14] + v_t_27238[3] * v_t_27238[12] * v_t_27238[6], v_i_27240[7] = v_t_27238[0] * v_t_27238[6] * v_t_27238[11] - v_t_27238[0] * v_t_27238[10] * v_t_27238[7] - v_t_27238[2] * v_t_27238[4] * v_t_27238[11] + v_t_27238[2] * v_t_27238[8] * v_t_27238[7] + v_t_27238[3] * v_t_27238[4] * v_t_27238[10] - v_t_27238[3] * v_t_27238[8] * v_t_27238[6], v_i_27240[8] = v_t_27238[4] * v_t_27238[9] * v_t_27238[15] - v_t_27238[4] * v_t_27238[13] * v_t_27238[11] - v_t_27238[5] * v_t_27238[8] * v_t_27238[15] + v_t_27238[5] * v_t_27238[12] * v_t_27238[11] + v_t_27238[7] * v_t_27238[8] * v_t_27238[13] - v_t_27238[7] * v_t_27238[12] * v_t_27238[9], v_i_27240[9] = -v_t_27238[0] * v_t_27238[9] * v_t_27238[15] + v_t_27238[0] * v_t_27238[13] * v_t_27238[11] + v_t_27238[1] * v_t_27238[8] * v_t_27238[15] - v_t_27238[1] * v_t_27238[12] * v_t_27238[11] - v_t_27238[3] * v_t_27238[8] * v_t_27238[13] + v_t_27238[3] * v_t_27238[12] * v_t_27238[9], v_i_27240[10] = v_t_27238[0] * v_t_27238[5] * v_t_27238[15] - v_t_27238[0] * v_t_27238[13] * v_t_27238[7] - v_t_27238[1] * v_t_27238[4] * v_t_27238[15] + v_t_27238[1] * v_t_27238[12] * v_t_27238[7] + v_t_27238[3] * v_t_27238[4] * v_t_27238[13] - v_t_27238[3] * v_t_27238[12] * v_t_27238[5], v_i_27240[11] = -v_t_27238[0] * v_t_27238[5] * v_t_27238[11] + v_t_27238[0] * v_t_27238[9] * v_t_27238[7] + v_t_27238[1] * v_t_27238[4] * v_t_27238[11] - v_t_27238[1] * v_t_27238[8] * v_t_27238[7] - v_t_27238[3] * v_t_27238[4] * v_t_27238[9] + v_t_27238[3] * v_t_27238[8] * v_t_27238[5], v_i_27240[12] = -v_t_27238[4] * v_t_27238[9] * v_t_27238[14] + v_t_27238[4] * v_t_27238[13] * v_t_27238[10] + v_t_27238[5] * v_t_27238[8] * v_t_27238[14] - v_t_27238[5] * v_t_27238[12] * v_t_27238[10] - v_t_27238[6] * v_t_27238[8] * v_t_27238[13] + v_t_27238[6] * v_t_27238[12] * v_t_27238[9], v_i_27240[13] = v_t_27238[0] * v_t_27238[9] * v_t_27238[14] - v_t_27238[0] * v_t_27238[13] * v_t_27238[10] - v_t_27238[1] * v_t_27238[8] * v_t_27238[14] + v_t_27238[1] * v_t_27238[12] * v_t_27238[10] + v_t_27238[2] * v_t_27238[8] * v_t_27238[13] - v_t_27238[2] * v_t_27238[12] * v_t_27238[9], v_i_27240[14] = -v_t_27238[0] * v_t_27238[5] * v_t_27238[14] + v_t_27238[0] * v_t_27238[13] * v_t_27238[6] + v_t_27238[1] * v_t_27238[4] * v_t_27238[14] - v_t_27238[1] * v_t_27238[12] * v_t_27238[6] - v_t_27238[2] * v_t_27238[4] * v_t_27238[13] + v_t_27238[2] * v_t_27238[12] * v_t_27238[5], v_i_27240[15] = v_t_27238[0] * v_t_27238[5] * v_t_27238[10] - v_t_27238[0] * v_t_27238[9] * v_t_27238[6] - v_t_27238[1] * v_t_27238[4] * v_t_27238[10] + v_t_27238[1] * v_t_27238[8] * v_t_27238[6] + v_t_27238[2] * v_t_27238[4] * v_t_27238[9] - v_t_27238[2] * v_t_27238[8] * v_t_27238[5], v_t_27238[0] * v_i_27240[0] + v_t_27238[1] * v_i_27240[4] + v_t_27238[2] * v_i_27240[8] + v_t_27238[3] * v_i_27240[12]), v_e_27242 = 0; v_e_27242 < 16; v_e_27242++) v_i_27240[v_e_27242] /= v_r_27241;
    return v_n_27239;
  }, v_j_27093.transpose = function (v_t_27243, v_n_27244) {
    v_n_27244 = v_n_27244 || new v_j_27093();
    var v_t_27243 = v_t_27243.m,
      v_i_27245 = v_n_27244.m;
    return v_i_27245[0] = v_t_27243[0], v_i_27245[1] = v_t_27243[4], v_i_27245[2] = v_t_27243[8], v_i_27245[3] = v_t_27243[12], v_i_27245[4] = v_t_27243[1], v_i_27245[5] = v_t_27243[5], v_i_27245[6] = v_t_27243[9], v_i_27245[7] = v_t_27243[13], v_i_27245[8] = v_t_27243[2], v_i_27245[9] = v_t_27243[6], v_i_27245[10] = v_t_27243[10], v_i_27245[11] = v_t_27243[14], v_i_27245[12] = v_t_27243[3], v_i_27245[13] = v_t_27243[7], v_i_27245[14] = v_t_27243[11], v_i_27245[15] = v_t_27243[15], v_n_27244;
  }, v_j_27093.multiply = function (v_t_27246, v_n_27247, v_i_27248) {
    v_i_27248 = v_i_27248 || new v_j_27093();
    var v_t_27246 = v_t_27246.m,
      v_n_27247 = v_n_27247.m,
      v_r_27249 = v_i_27248.m;
    return v_r_27249[0] = v_t_27246[0] * v_n_27247[0] + v_t_27246[1] * v_n_27247[4] + v_t_27246[2] * v_n_27247[8] + v_t_27246[3] * v_n_27247[12], v_r_27249[1] = v_t_27246[0] * v_n_27247[1] + v_t_27246[1] * v_n_27247[5] + v_t_27246[2] * v_n_27247[9] + v_t_27246[3] * v_n_27247[13], v_r_27249[2] = v_t_27246[0] * v_n_27247[2] + v_t_27246[1] * v_n_27247[6] + v_t_27246[2] * v_n_27247[10] + v_t_27246[3] * v_n_27247[14], v_r_27249[3] = v_t_27246[0] * v_n_27247[3] + v_t_27246[1] * v_n_27247[7] + v_t_27246[2] * v_n_27247[11] + v_t_27246[3] * v_n_27247[15], v_r_27249[4] = v_t_27246[4] * v_n_27247[0] + v_t_27246[5] * v_n_27247[4] + v_t_27246[6] * v_n_27247[8] + v_t_27246[7] * v_n_27247[12], v_r_27249[5] = v_t_27246[4] * v_n_27247[1] + v_t_27246[5] * v_n_27247[5] + v_t_27246[6] * v_n_27247[9] + v_t_27246[7] * v_n_27247[13], v_r_27249[6] = v_t_27246[4] * v_n_27247[2] + v_t_27246[5] * v_n_27247[6] + v_t_27246[6] * v_n_27247[10] + v_t_27246[7] * v_n_27247[14], v_r_27249[7] = v_t_27246[4] * v_n_27247[3] + v_t_27246[5] * v_n_27247[7] + v_t_27246[6] * v_n_27247[11] + v_t_27246[7] * v_n_27247[15], v_r_27249[8] = v_t_27246[8] * v_n_27247[0] + v_t_27246[9] * v_n_27247[4] + v_t_27246[10] * v_n_27247[8] + v_t_27246[11] * v_n_27247[12], v_r_27249[9] = v_t_27246[8] * v_n_27247[1] + v_t_27246[9] * v_n_27247[5] + v_t_27246[10] * v_n_27247[9] + v_t_27246[11] * v_n_27247[13], v_r_27249[10] = v_t_27246[8] * v_n_27247[2] + v_t_27246[9] * v_n_27247[6] + v_t_27246[10] * v_n_27247[10] + v_t_27246[11] * v_n_27247[14], v_r_27249[11] = v_t_27246[8] * v_n_27247[3] + v_t_27246[9] * v_n_27247[7] + v_t_27246[10] * v_n_27247[11] + v_t_27246[11] * v_n_27247[15], v_r_27249[12] = v_t_27246[12] * v_n_27247[0] + v_t_27246[13] * v_n_27247[4] + v_t_27246[14] * v_n_27247[8] + v_t_27246[15] * v_n_27247[12], v_r_27249[13] = v_t_27246[12] * v_n_27247[1] + v_t_27246[13] * v_n_27247[5] + v_t_27246[14] * v_n_27247[9] + v_t_27246[15] * v_n_27247[13], v_r_27249[14] = v_t_27246[12] * v_n_27247[2] + v_t_27246[13] * v_n_27247[6] + v_t_27246[14] * v_n_27247[10] + v_t_27246[15] * v_n_27247[14], v_r_27249[15] = v_t_27246[12] * v_n_27247[3] + v_t_27246[13] * v_n_27247[7] + v_t_27246[14] * v_n_27247[11] + v_t_27246[15] * v_n_27247[15], v_i_27248;
  }, v_j_27093.identity = function (v_t_27250) {
    var v_n_27251 = (v_t_27250 = v_t_27250 || new v_j_27093()).m;
    return v_n_27251[0] = v_n_27251[5] = v_n_27251[10] = v_n_27251[15] = 1, v_n_27251[1] = v_n_27251[2] = v_n_27251[3] = v_n_27251[4] = v_n_27251[6] = v_n_27251[7] = v_n_27251[8] = v_n_27251[9] = v_n_27251[11] = v_n_27251[12] = v_n_27251[13] = v_n_27251[14] = 0, v_t_27250;
  }, v_j_27093.perspective = function (v_t_27252, v_n_27253, v_i_27254, v_r_27255, v_e_27256) {
    v_t_27252 = Math.tan(v_t_27252 * Math.PI / 360) * v_i_27254, v_n_27253 *= v_t_27252;
    return v_j_27093.frustum(-v_n_27253, v_n_27253, -v_t_27252, v_t_27252, v_i_27254, v_r_27255, v_e_27256);
  }, v_j_27093.frustum = function (v_t_27257, v_n_27258, v_i_27259, v_r_27260, v_e_27261, v_o_27262, v_s_27263) {
    var v_u_27264 = (v_s_27263 = v_s_27263 || new v_j_27093()).m;
    return v_u_27264[0] = 2 * v_e_27261 / (v_n_27258 - v_t_27257), v_u_27264[1] = 0, v_u_27264[2] = (v_n_27258 + v_t_27257) / (v_n_27258 - v_t_27257), v_u_27264[3] = 0, v_u_27264[4] = 0, v_u_27264[5] = 2 * v_e_27261 / (v_r_27260 - v_i_27259), v_u_27264[6] = (v_r_27260 + v_i_27259) / (v_r_27260 - v_i_27259), v_u_27264[7] = 0, v_u_27264[8] = 0, v_u_27264[9] = 0, v_u_27264[10] = -(v_o_27262 + v_e_27261) / (v_o_27262 - v_e_27261), v_u_27264[11] = -2 * v_o_27262 * v_e_27261 / (v_o_27262 - v_e_27261), v_u_27264[12] = 0, v_u_27264[13] = 0, v_u_27264[14] = -1, v_u_27264[15] = 0, v_s_27263;
  }, v_j_27093.ortho = function (v_t_27265, v_n_27266, v_i_27267, v_r_27268, v_e_27269, v_o_27270, v_s_27271) {
    var v_u_27272 = (v_s_27271 = v_s_27271 || new v_j_27093()).m;
    return v_u_27272[0] = 2 / (v_n_27266 - v_t_27265), v_u_27272[1] = 0, v_u_27272[2] = 0, v_u_27272[3] = -(v_n_27266 + v_t_27265) / (v_n_27266 - v_t_27265), v_u_27272[4] = 0, v_u_27272[5] = 2 / (v_r_27268 - v_i_27267), v_u_27272[6] = 0, v_u_27272[7] = -(v_r_27268 + v_i_27267) / (v_r_27268 - v_i_27267), v_u_27272[8] = 0, v_u_27272[9] = 0, v_u_27272[10] = -2 / (v_o_27270 - v_e_27269), v_u_27272[11] = -(v_o_27270 + v_e_27269) / (v_o_27270 - v_e_27269), v_u_27272[12] = 0, v_u_27272[13] = 0, v_u_27272[14] = 0, v_u_27272[15] = 1, v_s_27271;
  }, v_j_27093.scale = function (v_t_27273, v_n_27274, v_i_27275, v_r_27276) {
    var v_e_27277 = (v_r_27276 = v_r_27276 || new v_j_27093()).m;
    return v_e_27277[0] = v_t_27273, v_e_27277[1] = 0, v_e_27277[2] = 0, v_e_27277[3] = 0, v_e_27277[4] = 0, v_e_27277[5] = v_n_27274, v_e_27277[6] = 0, v_e_27277[7] = 0, v_e_27277[8] = 0, v_e_27277[9] = 0, v_e_27277[10] = v_i_27275, v_e_27277[11] = 0, v_e_27277[12] = 0, v_e_27277[13] = 0, v_e_27277[14] = 0, v_e_27277[15] = 1, v_r_27276;
  }, v_j_27093.translate = function (v_t_27278, v_n_27279, v_i_27280, v_r_27281) {
    var v_e_27282 = (v_r_27281 = v_r_27281 || new v_j_27093()).m;
    return v_e_27282[0] = 1, v_e_27282[1] = 0, v_e_27282[2] = 0, v_e_27282[3] = v_t_27278, v_e_27282[4] = 0, v_e_27282[5] = 1, v_e_27282[6] = 0, v_e_27282[7] = v_n_27279, v_e_27282[8] = 0, v_e_27282[9] = 0, v_e_27282[10] = 1, v_e_27282[11] = v_i_27280, v_e_27282[12] = 0, v_e_27282[13] = 0, v_e_27282[14] = 0, v_e_27282[15] = 1, v_r_27281;
  }, v_j_27093.rotate = function (v_t_27283, v_n_27284, v_i_27285, v_r_27286, v_e_27287) {
    var v_o_27288, v_s_27289, v_u_27290;
    return v_t_27283 && (v_n_27284 || v_i_27285 || v_r_27286) ? (v_o_27288 = (v_e_27287 = v_e_27287 || new v_j_27093()).m, v_s_27289 = Math.sqrt(v_n_27284 * v_n_27284 + v_i_27285 * v_i_27285 + v_r_27286 * v_r_27286), v_t_27283 *= Math.PI / 180, v_n_27284 /= v_s_27289, v_i_27285 /= v_s_27289, v_r_27286 /= v_s_27289, v_s_27289 = Math.cos(v_t_27283), v_t_27283 = Math.sin(v_t_27283), v_o_27288[0] = v_n_27284 * v_n_27284 * (v_u_27290 = 1 - v_s_27289) + v_s_27289, v_o_27288[1] = v_n_27284 * v_i_27285 * v_u_27290 - v_r_27286 * v_t_27283, v_o_27288[2] = v_n_27284 * v_r_27286 * v_u_27290 + v_i_27285 * v_t_27283, v_o_27288[3] = 0, v_o_27288[4] = v_i_27285 * v_n_27284 * v_u_27290 + v_r_27286 * v_t_27283, v_o_27288[5] = v_i_27285 * v_i_27285 * v_u_27290 + v_s_27289, v_o_27288[6] = v_i_27285 * v_r_27286 * v_u_27290 - v_n_27284 * v_t_27283, v_o_27288[7] = 0, v_o_27288[8] = v_r_27286 * v_n_27284 * v_u_27290 - v_i_27285 * v_t_27283, v_o_27288[9] = v_r_27286 * v_i_27285 * v_u_27290 + v_n_27284 * v_t_27283, v_o_27288[10] = v_r_27286 * v_r_27286 * v_u_27290 + v_s_27289, v_o_27288[11] = 0, v_o_27288[12] = 0, v_o_27288[13] = 0, v_o_27288[14] = 0, v_o_27288[15] = 1, v_e_27287) : v_j_27093.identity(v_e_27287);
  }, v_j_27093.lookAt = function (v_t_27291, v_n_27292, v_i_27293, v_r_27294, v_e_27295, v_o_27296, v_s_27297, v_u_27298, v_a_27299, v_h_27300) {
    var v_f_27301 = (v_h_27300 = v_h_27300 || new v_j_27093()).m,
      v_t_27291 = new v_V_27108(v_t_27291, v_n_27292, v_i_27293),
      v_n_27292 = new v_V_27108(v_r_27294, v_e_27295, v_o_27296),
      v_i_27293 = new v_V_27108(v_s_27297, v_u_27298, v_a_27299),
      v_r_27294 = v_t_27291.subtract(v_n_27292).unit(),
      v_e_27295 = v_i_27293.cross(v_r_27294).unit(),
      v_o_27296 = v_r_27294.cross(v_e_27295).unit();
    return v_f_27301[0] = v_e_27295.x, v_f_27301[1] = v_e_27295.y, v_f_27301[2] = v_e_27295.z, v_f_27301[3] = -v_e_27295.dot(v_t_27291), v_f_27301[4] = v_o_27296.x, v_f_27301[5] = v_o_27296.y, v_f_27301[6] = v_o_27296.z, v_f_27301[7] = -v_o_27296.dot(v_t_27291), v_f_27301[8] = v_r_27294.x, v_f_27301[9] = v_r_27294.y, v_f_27301[10] = v_r_27294.z, v_f_27301[11] = -v_r_27294.dot(v_t_27291), v_f_27301[12] = 0, v_f_27301[13] = 0, v_f_27301[14] = 0, v_f_27301[15] = 1, v_h_27300;
  }, v_m_27094.prototype = {
    add: function (v_t_27302) {
      var v_n_27303 = JSON.stringify(v_t_27302);
      return v_n_27303 in this.map || (this.map[v_n_27303] = this.unique.length, this.unique.push(v_t_27302)), this.map[v_n_27303];
    }
  }, v_e_27095.prototype = {
    compile: function (v_t_27304, v_n_27305) {
      if (0 < v_n_27305) this.buffer = this.buffer || v_p_27086.createBuffer(), this.buffer.length = (this.data.length || this.data.byteLength) / this.elmSize, this.buffer.spacing = v_n_27305, v_p_27086.bindBuffer(this.target, this.buffer), v_p_27086.bufferData(this.target, new this.type(this.data), v_t_27304 || v_p_27086.STATIC_DRAW);else {
        for (var v_i_27306 = [], v_r_27307 = 0; v_r_27307 < this.data.length; v_r_27307 += 1e4) v_i_27306 = Array.prototype.concat.apply(v_i_27306, this.data.slice(v_r_27307, v_r_27307 + 1e4));
        v_n_27305 = this.data.length ? v_i_27306.length / this.data.length : 0;
        if (v_n_27305 != Math.round(v_n_27305)) throw new Error("buffer elements not of consistent size, average size is " + v_n_27305);
        this.buffer = this.buffer || v_p_27086.createBuffer(), this.buffer.length = v_i_27306.length, this.buffer.spacing = v_n_27305, v_p_27086.bindBuffer(this.target, this.buffer), v_p_27086.bufferData(this.target, new this.type(v_i_27306), v_t_27304 || v_p_27086.STATIC_DRAW);
      }
    }
  }, v_P_27096.prototype = {
    addVertexBuffer: function (v_t_27308, v_n_27309) {
      v_n_27309 = this.vertexBuffers[v_n_27309] = new v_e_27095(v_p_27086.ARRAY_BUFFER, Float32Array);
      v_n_27309.name = v_t_27308, v_n_27309.elmSize = 4, this[v_t_27308] = [];
    },
    addIndexBuffer: function (v_t_27310) {
      (this.indexBuffers[v_t_27310] = new v_e_27095(v_p_27086.ELEMENT_ARRAY_BUFFER, Uint16Array)).elmSize = 2, this[v_t_27310] = [];
    },
    free: function () {
      for (var v_t_27311 in this.vertexBuffers) (v_i_27313 = this.vertexBuffers[v_t_27311]).refCount--, v_i_27313.refCount <= 0 && v_p_27086.deleteBuffer(v_i_27313.buffer), this.vertexBuffers[v_t_27311] = void 0;
      for (var v_n_27312 in this.indexBuffers) {
        var v_i_27313;
        (v_i_27313 = this.indexBuffers[v_n_27312]).refCount--, v_i_27313.refCount <= 0 && v_p_27086.deleteBuffer(v_i_27313.buffer), this.indexBuffers[v_n_27312] = void 0;
      }
    },
    use_shared: function (v_t_27314) {
      for (var v_n_27315 in this.vertexBuffers) v_t_27314[(v_r_27317 = this.vertexBuffers[v_n_27315]).name] && (v_e_27318 = v_t_27314[v_r_27317.name].vertexBuffers[v_n_27315]) && (v_r_27317.refCount--, v_r_27317.refCount <= 0 && v_p_27086.deleteBuffer(v_r_27317.buffer), (this.vertexBuffers[v_n_27315] = v_e_27318).refCount++);
      for (var v_i_27316 in this.indexBuffers) {
        var v_r_27317, v_e_27318;
        v_t_27314[v_i_27316] && (v_r_27317 = this.indexBuffers[v_i_27316], v_e_27318 = v_t_27314[v_i_27316].indexBuffers[v_i_27316]) && (v_r_27317.refCount--, v_r_27317.refCount <= 0 && v_p_27086.deleteBuffer(v_r_27317.buffer), (this.indexBuffers[v_i_27316] = v_e_27318).refCount++);
      }
    },
    compilef: function (v_t_27319, v_n_27320) {
      for (var v_i_27321 in this.vertexBuffers) (v_e_27323 = this.vertexBuffers[v_i_27321]).refCount <= 1 && (v_e_27323.data = this[v_e_27323.name], v_e_27323.compile(v_t_27319, v_n_27320[v_e_27323.name] || 0));
      for (var v_r_27322 in this.indexBuffers) {
        var v_e_27323;
        (v_e_27323 = this.indexBuffers[v_r_27322]).refCount <= 1 && (v_e_27323.data = this[v_r_27322], v_e_27323.compile(v_t_27319, v_n_27320[v_r_27322] || 0));
      }
    },
    compile: function (v_t_27324) {
      for (var v_n_27325 in this.vertexBuffers) (v_r_27327 = this.vertexBuffers[v_n_27325]).refCount <= 1 && (v_r_27327.data = this[v_r_27327.name], v_r_27327.compile(v_t_27324, 0));
      for (var v_i_27326 in this.indexBuffers) {
        var v_r_27327;
        (v_r_27327 = this.indexBuffers[v_i_27326]).refCount <= 1 && (v_r_27327.data = this[v_i_27326], v_r_27327.compile(v_t_27324, 0));
      }
    },
    subdata: function (v_t_27328, v_n_27329) {
      v_t_27328 = this.vertexBuffers[v_t_27328];
      v_p_27086.bindBuffer(v_t_27328.target, v_t_27328.buffer), v_p_27086.bufferSubData(v_t_27328.target, 0, v_n_27329);
    },
    subdata_i: function (v_t_27330, v_n_27331) {
      v_t_27330 = this.indexBuffers[v_t_27330];
      v_p_27086.bindBuffer(v_t_27330.target, v_t_27330.buffer), v_p_27086.bufferSubData(v_t_27330.target, 0, v_n_27331);
    },
    transform: function (v_n_27332) {
      var v_i_27333;
      return this.vertices = this.vertices.map(function (v_t_27334) {
        return v_n_27332.transformPoint(v_V_27108.fromArray(v_t_27334)).toArray();
      }), this.normals && (v_i_27333 = v_n_27332.inverse().transpose(), this.normals = this.normals.map(function (v_t_27335) {
        return v_i_27333.transformVector(v_V_27108.fromArray(v_t_27335)).unit().toArray();
      })), this.compile(), this;
    },
    computeNormals: function () {
      this.normals || this.addVertexBuffer("normals", "gl_Normal");
      for (var v_t_27336 = 0; v_t_27336 < this.vertices.length; v_t_27336++) this.normals[v_t_27336] = new v_V_27108();
      for (v_t_27336 = 0; v_t_27336 < this.triangles.length; v_t_27336++) {
        var v_n_27337 = this.triangles[v_t_27336],
          v_i_27338 = v_V_27108.fromArray(this.vertices[v_n_27337[0]]),
          v_r_27339 = v_V_27108.fromArray(this.vertices[v_n_27337[1]]),
          v_e_27340 = v_V_27108.fromArray(this.vertices[v_n_27337[2]]),
          v_r_27339 = v_r_27339.subtract(v_i_27338).cross(v_e_27340.subtract(v_i_27338)).unit();
        this.normals[v_n_27337[0]] = this.normals[v_n_27337[0]].add(v_r_27339), this.normals[v_n_27337[1]] = this.normals[v_n_27337[1]].add(v_r_27339), this.normals[v_n_27337[2]] = this.normals[v_n_27337[2]].add(v_r_27339);
      }
      for (v_t_27336 = 0; v_t_27336 < this.vertices.length; v_t_27336++) this.normals[v_t_27336] = this.normals[v_t_27336].unit().toArray();
      return this.compile(), this;
    },
    computeWireframe: function () {
      for (var v_t_27341 = new v_m_27094(), v_n_27342 = 0; v_n_27342 < this.triangles.length; v_n_27342++) for (var v_i_27343 = this.triangles[v_n_27342], v_r_27344 = 0; v_r_27344 < v_i_27343.length; v_r_27344++) {
        var v_e_27345 = v_i_27343[v_r_27344],
          v_o_27346 = v_i_27343[(v_r_27344 + 1) % v_i_27343.length];
        v_t_27341.add([Math.min(v_e_27345, v_o_27346), Math.max(v_e_27345, v_o_27346)]);
      }
      return this.lines || this.addIndexBuffer("lines"), this.lines = v_t_27341.unique, this.compile(), this;
    },
    getAABB: function () {
      var v_t_27347 = {
        min: new v_V_27108(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
      };
      v_t_27347.max = v_t_27347.min.negative();
      for (var v_n_27348 = 0; v_n_27348 < this.vertices.length; v_n_27348++) {
        var v_i_27349 = v_V_27108.fromArray(this.vertices[v_n_27348]);
        v_t_27347.min = v_V_27108.min(v_t_27347.min, v_i_27349), v_t_27347.max = v_V_27108.max(v_t_27347.max, v_i_27349);
      }
      return v_t_27347;
    },
    getBoundingSphere: function () {
      for (var v_t_27350 = this.getAABB(), v_n_27351 = {
          center: v_t_27350.min.add(v_t_27350.max).divide(2),
          radius: 0
        }, v_i_27352 = 0; v_i_27352 < this.vertices.length; v_i_27352++) v_n_27351.radius = Math.max(v_n_27351.radius, v_V_27108.fromArray(this.vertices[v_i_27352]).subtract(v_n_27351.center).length());
      return v_n_27351;
    }
  }, v_P_27096.plane = function (v_t_27353) {
    var v_n_27354 = new v_P_27096(v_t_27353 = v_t_27353 || {});
    detailX = v_t_27353.detailX || v_t_27353.detail || 1, detailY = v_t_27353.detailY || v_t_27353.detail || 1;
    for (var v_i_27355 = 0; v_i_27355 <= detailY; v_i_27355++) for (var v_r_27356 = v_i_27355 / detailY, v_e_27357 = 0; v_e_27357 <= detailX; v_e_27357++) {
      var v_o_27358 = v_e_27357 / detailX;
      v_n_27354.vertices.push([2 * v_o_27358 - 1, 2 * v_r_27356 - 1, 0]), v_n_27354.coords && v_n_27354.coords.push([v_o_27358, v_r_27356]), v_n_27354.normals && v_n_27354.normals.push([0, 0, 1]), v_e_27357 < detailX && v_i_27355 < detailY && (v_o_27358 = v_e_27357 + v_i_27355 * (detailX + 1), v_n_27354.triangles.push([v_o_27358, v_o_27358 + 1, v_o_27358 + detailX + 1]), v_n_27354.triangles.push([v_o_27358 + detailX + 1, v_o_27358 + 1, v_o_27358 + detailX + 2]));
    }
    return v_n_27354.compile(), v_n_27354;
  };
  var v_u_27097 = [[0, 4, 2, 6, -1, 0, 0], [1, 3, 5, 7, 1, 0, 0], [0, 1, 4, 5, 0, -1, 0], [2, 6, 3, 7, 0, 1, 0], [0, 2, 1, 3, 0, 0, -1], [4, 5, 6, 7, 0, 0, 1]];
  function v_v_27098(v_t_27359) {
    return new v_V_27108(2 * (1 & v_t_27359) - 1, (2 & v_t_27359) - 1, (4 & v_t_27359) / 2 - 1);
  }
  function v_h_27099(v_t_27360, v_n_27361, v_i_27362) {
    this.t = arguments.length ? v_t_27360 : Number.MAX_VALUE, this.hit = v_n_27361, this.normal = v_i_27362;
  }
  function v_t_27363() {
    var v_t_27363 = v_p_27086.getParameter(v_p_27086.VIEWPORT),
      v_n_27364 = v_p_27086.modelviewMatrix.m,
      v_i_27365 = new v_V_27108(v_n_27364[0], v_n_27364[4], v_n_27364[8]),
      v_r_27366 = new v_V_27108(v_n_27364[1], v_n_27364[5], v_n_27364[9]),
      v_e_27367 = new v_V_27108(v_n_27364[2], v_n_27364[6], v_n_27364[10]),
      v_n_27364 = new v_V_27108(v_n_27364[3], v_n_27364[7], v_n_27364[11]),
      v_i_27365 = (this.eye = new v_V_27108(-v_n_27364.dot(v_i_27365), -v_n_27364.dot(v_r_27366), -v_n_27364.dot(v_e_27367)), v_t_27363[0]),
      v_r_27366 = v_i_27365 + v_t_27363[2],
      v_n_27364 = v_t_27363[1],
      v_e_27367 = v_n_27364 + v_t_27363[3];
    this.ray00 = v_p_27086.unProject(v_i_27365, v_n_27364, 1).subtract(this.eye), this.ray10 = v_p_27086.unProject(v_r_27366, v_n_27364, 1).subtract(this.eye), this.ray01 = v_p_27086.unProject(v_i_27365, v_e_27367, 1).subtract(this.eye), this.ray11 = v_p_27086.unProject(v_r_27366, v_e_27367, 1).subtract(this.eye), this.viewport = v_t_27363;
  }
  function v_f_27101(v_t_27368, v_n_27369, v_i_27370) {
    for (; null != (result = v_t_27368.exec(v_n_27369));) v_i_27370(result);
  }
  v_P_27096.cube = function (v_t_27371) {
    for (var v_n_27372 = new v_P_27096(v_t_27371), v_i_27373 = 0; v_i_27373 < v_u_27097.length; v_i_27373++) {
      for (var v_r_27374 = v_u_27097[v_i_27373], v_e_27375 = 4 * v_i_27373, v_o_27376 = 0; v_o_27376 < 4; v_o_27376++) {
        var v_s_27377 = v_r_27374[v_o_27376];
        v_n_27372.vertices.push(v_v_27098(v_s_27377).toArray()), v_n_27372.coords && v_n_27372.coords.push([1 & v_o_27376, (2 & v_o_27376) / 2]), v_n_27372.normals && v_n_27372.normals.push(v_r_27374.slice(4, 7));
      }
      v_n_27372.triangles.push([v_e_27375, 1 + v_e_27375, 2 + v_e_27375]), v_n_27372.triangles.push([2 + v_e_27375, 1 + v_e_27375, 3 + v_e_27375]);
    }
    return v_n_27372.compile(), v_n_27372;
  }, v_P_27096.sphere = function (v_t_27378) {
    function v_n_27394(v_t_27393, v_n_27394, v_i_27395) {
      return v_u_27385 ? [v_t_27393, v_i_27395, v_n_27394] : [v_t_27393, v_n_27394, v_i_27395];
    }
    function v_i_27380(v_t_27396) {
      return v_t_27396 + (v_t_27396 - v_t_27396 * v_t_27396) / 2;
    }
    var v_r_27381 = new v_P_27096(v_t_27378 = v_t_27378 || {}),
      v_e_27382 = new v_m_27094();
    detail = v_t_27378.detail || 6;
    for (var v_o_27383 = 0; v_o_27383 < 8; v_o_27383++) for (var v_s_27384 = v_v_27098(v_o_27383), v_u_27385 = 0 < v_s_27384.x * v_s_27384.y * v_s_27384.z, v_a_27386 = [], v_h_27387 = 0; v_h_27387 <= detail; v_h_27387++) {
      for (var v_f_27388 = 0; v_h_27387 + v_f_27388 <= detail; v_f_27388++) {
        var v_c_27389 = v_h_27387 / detail,
          v_l_27390 = v_f_27388 / detail,
          v_w_27391 = (detail - v_h_27387 - v_f_27388) / detail,
          v_d_27392 = {
            vertex: new v_V_27108(v_i_27380(v_c_27389), v_i_27380(v_l_27390), v_i_27380(v_w_27391)).unit().multiply(v_s_27384).toArray()
          };
        v_r_27381.coords && (v_d_27392.coord = 0 < v_s_27384.y ? [1 - v_c_27389, v_w_27391] : [v_w_27391, 1 - v_c_27389]), v_a_27386.push(v_e_27382.add(v_d_27392));
      }
      if (0 < v_h_27387) for (v_f_27388 = 0; v_h_27387 + v_f_27388 <= detail; v_f_27388++) {
        v_c_27389 = (v_h_27387 - 1) * (detail + 1) + (v_h_27387 - 1 - (v_h_27387 - 1) * (v_h_27387 - 1)) / 2 + v_f_27388, v_l_27390 = v_h_27387 * (detail + 1) + (v_h_27387 - v_h_27387 * v_h_27387) / 2 + v_f_27388;
        v_r_27381.triangles.push(v_n_27379(v_a_27386[v_c_27389], v_a_27386[v_c_27389 + 1], v_a_27386[v_l_27390])), v_h_27387 + v_f_27388 < detail && v_r_27381.triangles.push(v_n_27379(v_a_27386[v_l_27390], v_a_27386[v_c_27389 + 1], v_a_27386[v_l_27390 + 1]));
      }
    }
    return v_r_27381.vertices = v_e_27382.unique.map(function (v_t_27397) {
      return v_t_27397.vertex;
    }), v_r_27381.coords && (v_r_27381.coords = v_e_27382.unique.map(function (v_t_27398) {
      return v_t_27398.coord;
    })), v_r_27381.normals && (v_r_27381.normals = v_r_27381.vertices), v_r_27381.compile(), v_r_27381;
  }, v_P_27096.load = function (v_t_27399, v_n_27400) {
    "coords" in (v_n_27400 = v_n_27400 || {}) || (v_n_27400.coords = !!v_t_27399.coords), "normals" in v_n_27400 || (v_n_27400.normals = !!v_t_27399.normals), "colors" in v_n_27400 || (v_n_27400.colors = !!v_t_27399.colors), "triangles" in v_n_27400 || (v_n_27400.triangles = !!v_t_27399.triangles), "lines" in v_n_27400 || (v_n_27400.lines = !!v_t_27399.lines);
    v_n_27400 = new v_P_27096(v_n_27400);
    return v_n_27400.vertices = v_t_27399.vertices, v_n_27400.coords && (v_n_27400.coords = v_t_27399.coords), v_n_27400.normals && (v_n_27400.normals = v_t_27399.normals), v_n_27400.colors && (v_n_27400.colors = v_t_27399.colors), v_n_27400.triangles && (v_n_27400.triangles = v_t_27399.triangles), v_n_27400.lines && (v_n_27400.lines = v_t_27399.lines), v_n_27400.compile(), v_n_27400;
  }, v_h_27099.prototype = {
    mergeWith: function (v_t_27401) {
      0 < v_t_27401.t && v_t_27401.t < this.t && (this.t = v_t_27401.t, this.hit = v_t_27401.hit, this.normal = v_t_27401.normal);
    }
  }, v_t_27100.prototype = {
    getRayForPixel: function (v_t_27402, v_n_27403) {
      v_t_27402 = (v_t_27402 - this.viewport[0]) / this.viewport[2], v_n_27403 = 1 - (v_n_27403 - this.viewport[1]) / this.viewport[3];
      var v_i_27404 = v_V_27108.lerp(this.ray00, this.ray10, v_t_27402),
        v_t_27402 = v_V_27108.lerp(this.ray01, this.ray11, v_t_27402);
      return v_V_27108.lerp(v_i_27404, v_t_27402, v_n_27403).unit();
    }
  }, v_t_27100.hitTestBox = function (v_t_27405, v_n_27406, v_i_27407, v_r_27408) {
    var v_e_27409 = v_i_27407.subtract(v_t_27405).divide(v_n_27406),
      v_o_27410 = v_r_27408.subtract(v_t_27405).divide(v_n_27406),
      v_s_27411 = v_V_27108.min(v_e_27409, v_o_27410),
      v_e_27409 = v_V_27108.max(v_e_27409, v_o_27410),
      v_o_27410 = v_s_27411.max(),
      v_s_27411 = v_e_27409.min();
    return 0 < v_o_27410 && v_o_27410 < v_s_27411 ? (v_e_27409 = v_t_27405.add(v_n_27406.multiply(v_o_27410)), v_i_27407 = v_i_27407.add(1e-6), v_r_27408 = v_r_27408.subtract(1e-6), new v_h_27099(v_o_27410, v_e_27409, new v_V_27108((v_e_27409.x > v_r_27408.x) - (v_e_27409.x < v_i_27407.x), (v_e_27409.y > v_r_27408.y) - (v_e_27409.y < v_i_27407.y), (v_e_27409.z > v_r_27408.z) - (v_e_27409.z < v_i_27407.z)))) : null;
  }, v_t_27100.hitTestSphere = function (v_t_27412, v_n_27413, v_i_27414, v_r_27415) {
    var v_e_27416 = v_t_27412.subtract(v_i_27414),
      v_o_27417 = v_n_27413.dot(v_n_27413),
      v_s_27418 = 2 * v_n_27413.dot(v_e_27416),
      v_e_27416 = v_s_27418 * v_s_27418 - 4 * v_o_27417 * (v_e_27416.dot(v_e_27416) - v_r_27415 * v_r_27415);
    return 0 < v_e_27416 ? new v_h_27099(v_s_27418 = (-v_s_27418 - Math.sqrt(v_e_27416)) / (2 * v_o_27417), v_e_27416 = v_t_27412.add(v_n_27413.multiply(v_s_27418)), v_e_27416.subtract(v_i_27414).divide(v_r_27415)) : null;
  }, v_t_27100.hitTestTriangle = function (v_t_27419, v_n_27420, v_i_27421, v_r_27422, v_e_27423) {
    var v_r_27422 = v_r_27422.subtract(v_i_27421),
      v_e_27423 = v_e_27423.subtract(v_i_27421),
      v_o_27424 = v_r_27422.cross(v_e_27423).unit(),
      v_s_27425 = v_o_27424.dot(v_i_27421.subtract(v_t_27419)) / v_o_27424.dot(v_n_27420);
    if (0 < v_s_27425) {
      var v_t_27419 = v_t_27419.add(v_n_27420.multiply(v_s_27425)),
        v_n_27420 = v_t_27419.subtract(v_i_27421),
        v_i_27421 = v_e_27423.dot(v_e_27423),
        v_u_27426 = v_e_27423.dot(v_r_27422),
        v_e_27423 = v_e_27423.dot(v_n_27420),
        v_a_27427 = v_r_27422.dot(v_r_27422),
        v_r_27422 = v_r_27422.dot(v_n_27420),
        v_n_27420 = v_i_27421 * v_a_27427 - v_u_27426 * v_u_27426,
        v_a_27427 = (v_a_27427 * v_e_27423 - v_u_27426 * v_r_27422) / v_n_27420,
        v_i_27421 = (v_i_27421 * v_r_27422 - v_u_27426 * v_e_27423) / v_n_27420;
      if (0 <= v_a_27427 && 0 <= v_i_27421 && v_a_27427 + v_i_27421 <= 1) return new v_h_27099(v_s_27425, v_t_27419, v_o_27424);
    }
    return null;
  };
  var v_g_27102 = "LIGHTGL";
  function v_S_27103(v_t_27428, v_n_27429) {
    function v_i_27430(v_t_27438) {
      var v_n_27439 = document.getElementById(v_t_27438);
      return v_n_27439 ? v_n_27439.text : v_t_27438;
    }
    var v_r_27431,
      v_e_27432 = "    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ",
      v_o_27433 = (v_t_27428 = v_i_27430(v_t_27428)) + (v_n_27429 = v_i_27430(v_n_27429)),
      v_s_27434 = {};
    function v_u_27435(v_t_27440, v_n_27441) {
      var v_i_27442 = {},
        v_r_27443 = /^((\s*\/\/.*\n|\s*#extension.*\n)+)[^]*$/.exec(v_n_27441);
      return v_n_27441 = v_r_27443 ? v_r_27443[1] + v_t_27440 + v_n_27441.substr(v_r_27443[1].length) : v_t_27440 + v_n_27441, v_f_27101(/\bgl_\w+\b/g, v_t_27440, function (v_t_27444) {
        v_t_27444 in v_i_27442 || (v_n_27441 = v_n_27441.replace(new RegExp("\\b" + v_t_27444 + "\\b", "g"), v_g_27102 + v_t_27444), v_i_27442[v_t_27444] = !0);
      }), v_n_27441;
    }
    function v_a_27436(v_t_27445, v_n_27446) {
      v_t_27445 = v_p_27086.createShader(v_t_27445);
      if (v_p_27086.shaderSource(v_t_27445, v_n_27446), v_p_27086.compileShader(v_t_27445), v_p_27086.getShaderParameter(v_t_27445, v_p_27086.COMPILE_STATUS)) return v_t_27445;
      throw new Error("compile error: " + v_p_27086.getShaderInfoLog(v_t_27445));
    }
    v_f_27101(/\b(gl_[^;]*)\b;/g, v_e_27432, function (v_t_27447) {
      var v_n_27448,
        v_t_27447 = v_t_27447[1];
      -1 != v_o_27433.indexOf(v_t_27447) && (v_n_27448 = v_t_27447.replace(/[a-z_]/g, ""), v_s_27434[v_n_27448] = v_g_27102 + v_t_27447);
    }), -1 != v_o_27433.indexOf("ftransform") && (v_s_27434.MVPM = v_g_27102 + "gl_ModelViewProjectionMatrix"), this.usedMatrices = v_s_27434, v_t_27428 = v_u_27435("    uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;      attribute vec4 gl_Vertex;    attribute vec4 gl_TexCoord;    attribute vec3 gl_Normal;    attribute vec4 gl_Color;    vec4 ftransform() {      return gl_ModelViewProjectionMatrix * gl_Vertex;    }  ", v_t_27428), v_n_27429 = v_u_27435("    precision highp float;      uniform mat3 gl_NormalMatrix;    uniform mat4 gl_ModelViewMatrix;    uniform mat4 gl_ProjectionMatrix;    uniform mat4 gl_ModelViewProjectionMatrix;    uniform mat4 gl_ModelViewMatrixInverse;    uniform mat4 gl_ProjectionMatrixInverse;    uniform mat4 gl_ModelViewProjectionMatrixInverse;  ", v_n_27429), this.program = v_p_27086.createProgram(), this.shaders = [v_a_27436(v_p_27086.VERTEX_SHADER, v_t_27428), v_a_27436(v_p_27086.FRAGMENT_SHADER, v_n_27429)];
    for (v_r_27431 of this.shaders) v_p_27086.attachShader(this.program, v_r_27431);
    if (v_p_27086.linkProgram(this.program), !v_p_27086.getProgramParameter(this.program, v_p_27086.LINK_STATUS)) throw new Error("link error: " + v_p_27086.getProgramInfoLog(this.program));
    this.attributes = {}, this.uniformLocations = {};
    var v_h_27437 = {};
    v_f_27101(/uniform\s+sampler(1D|2D|3D|Cube)\s+(\w+)\s*;/g, v_t_27428 + v_n_27429, function (v_t_27449) {
      v_h_27437[v_t_27449[2]] = 1;
    }), this.isSampler = v_h_27437;
  }
  var v_o_27104, v_s_27105, v_a_27106;
  new v_j_27093(), new v_j_27093();
  function v_c_27107(v_t_27450, v_n_27451, v_i_27452) {
    v_i_27452 = v_i_27452 || {}, this.id = v_p_27086.createTexture(), this.width = v_t_27450, this.height = v_n_27451, this.format = v_i_27452.format || v_p_27086.RGBA, this.type = v_i_27452.type || v_p_27086.UNSIGNED_BYTE;
    var v_r_27453 = v_i_27452.filter || v_i_27452.magFilter || v_p_27086.LINEAR,
      v_e_27454 = v_i_27452.filter || v_i_27452.minFilter || v_p_27086.LINEAR;
    if (this.type === v_p_27086.FLOAT) {
      if (!v_c_27107.canUseFloatingPointTextures()) throw new Error("OES_texture_float is required but not supported");
      if ((v_e_27454 !== v_p_27086.NEAREST || v_r_27453 !== v_p_27086.NEAREST) && !v_c_27107.canUseFloatingPointLinearFiltering()) throw new Error("OES_texture_float_linear is required but not supported");
    } else if (this.type === v_p_27086.HALF_FLOAT_OES) {
      if (!v_c_27107.canUseHalfFloatingPointTextures()) throw new Error("OES_texture_half_float is required but not supported");
      if ((v_e_27454 !== v_p_27086.NEAREST || v_r_27453 !== v_p_27086.NEAREST) && !v_c_27107.canUseHalfFloatingPointLinearFiltering()) throw new Error("OES_texture_half_float_linear is required but not supported");
    }
    v_p_27086.bindTexture(v_p_27086.TEXTURE_2D, this.id), v_i_27452.noFlip ? v_p_27086.pixelStorei(v_p_27086.UNPACK_FLIP_Y_WEBGL, 0) : v_p_27086.pixelStorei(v_p_27086.UNPACK_FLIP_Y_WEBGL, 1), v_p_27086.texParameteri(v_p_27086.TEXTURE_2D, v_p_27086.TEXTURE_MAG_FILTER, v_r_27453), v_p_27086.texParameteri(v_p_27086.TEXTURE_2D, v_p_27086.TEXTURE_MIN_FILTER, v_e_27454), v_p_27086.texParameteri(v_p_27086.TEXTURE_2D, v_p_27086.TEXTURE_WRAP_S, v_i_27452.wrap || v_i_27452.wrapS || v_p_27086.CLAMP_TO_EDGE), v_p_27086.texParameteri(v_p_27086.TEXTURE_2D, v_p_27086.TEXTURE_WRAP_T, v_i_27452.wrap || v_i_27452.wrapT || v_p_27086.CLAMP_TO_EDGE), v_p_27086.texImage2D(v_p_27086.TEXTURE_2D, 0, this.format, v_t_27450, v_n_27451, 0, this.format, this.type, v_i_27452.data || null);
  }
  function v_V_27108(v_t_27455, v_n_27456, v_i_27457) {
    this.x = v_t_27455 || 0, this.y = v_n_27456 || 0, this.z = v_i_27457 || 0;
  }
  return v_S_27103.prototype = {
    uniforms: function (v_t_27458) {
      for (var v_n_27459 in v_p_27086.useProgram(this.program), v_t_27458) {
        var v_i_27460 = this.uniformLocations[v_n_27459] || v_p_27086.getUniformLocation(this.program, v_n_27459);
        if (v_i_27460) {
          this.uniformLocations[v_n_27459] = v_i_27460;
          var v_r_27461 = v_t_27458[v_n_27459];
          if (v_r_27461 instanceof v_V_27108 ? v_r_27461 = [v_r_27461.x, v_r_27461.y, v_r_27461.z] : v_r_27461 instanceof v_j_27093 && (v_r_27461 = v_r_27461.m), v_e_27462 = v_r_27461, "[object Array]" == (v_e_27462 = Object.prototype.toString.call(v_e_27462)) || "[object Float32Array]" == v_e_27462) switch (v_r_27461.length) {
            case 1:
              v_p_27086.uniform1fv(v_i_27460, new Float32Array(v_r_27461));
              break;
            case 2:
              v_p_27086.uniform2fv(v_i_27460, new Float32Array(v_r_27461));
              break;
            case 3:
              v_p_27086.uniform3fv(v_i_27460, new Float32Array(v_r_27461));
              break;
            case 4:
              v_p_27086.uniform4fv(v_i_27460, new Float32Array(v_r_27461));
              break;
            case 9:
              v_p_27086.uniformMatrix3fv(v_i_27460, !1, new Float32Array([v_r_27461[0], v_r_27461[3], v_r_27461[6], v_r_27461[1], v_r_27461[4], v_r_27461[7], v_r_27461[2], v_r_27461[5], v_r_27461[8]]));
              break;
            case 16:
              v_p_27086.uniformMatrix4fv(v_i_27460, !1, new Float32Array([v_r_27461[0], v_r_27461[4], v_r_27461[8], v_r_27461[12], v_r_27461[1], v_r_27461[5], v_r_27461[9], v_r_27461[13], v_r_27461[2], v_r_27461[6], v_r_27461[10], v_r_27461[14], v_r_27461[3], v_r_27461[7], v_r_27461[11], v_r_27461[15]]));
              break;
            default:
              v_p_27086.uniform1fv(v_i_27460, new Float32Array(v_r_27461));
          } else {
            if (v_e_27462 = v_r_27461, "[object Number]" != (v_e_27462 = Object.prototype.toString.call(v_e_27462)) && "[object Boolean]" != v_e_27462) throw new Error('attempted to set uniform "' + v_n_27459 + '" to invalid value ' + v_r_27461);
            (this.isSampler[v_n_27459] ? v_p_27086.uniform1i : v_p_27086.uniform1f).call(v_p_27086, v_i_27460, v_r_27461);
          }
        }
      }
      var v_e_27462;
      return this;
    },
    draw: function (v_t_27463, v_n_27464) {
      this.drawBuffers(v_t_27463.vertexBuffers, v_t_27463.indexBuffers[v_n_27464 == v_p_27086.LINES ? "lines" : "triangles"], arguments.length < 2 ? v_p_27086.TRIANGLES : v_n_27464, void 0);
    },
    drawBuffers: function (v_t_27465, v_n_27466, v_i_27467, v_r_27468) {
      var v_e_27469,
        v_o_27470 = this.usedMatrices,
        v_s_27471 = v_p_27086.modelviewMatrix,
        v_u_27472 = v_p_27086.projectionMatrix,
        v_a_27473 = v_o_27470.MVMI || v_o_27470.NM ? v_s_27471.inverse() : null,
        v_h_27474 = v_o_27470.PMI ? v_u_27472.inverse() : null,
        v_f_27475 = v_o_27470.MVPM || v_o_27470.MVPMI ? v_u_27472.multiply(v_s_27471) : null,
        v_c_27476 = {},
        v_l_27477 = (v_o_27470.MVM && (v_c_27476[v_o_27470.MVM] = v_s_27471), v_o_27470.MVMI && (v_c_27476[v_o_27470.MVMI] = v_a_27473), v_o_27470.PM && (v_c_27476[v_o_27470.PM] = v_u_27472), v_o_27470.PMI && (v_c_27476[v_o_27470.PMI] = v_h_27474), v_o_27470.MVPM && (v_c_27476[v_o_27470.MVPM] = v_f_27475), v_o_27470.MVPMI && (v_c_27476[v_o_27470.MVPMI] = v_f_27475.inverse()), v_o_27470.NM && (v_s_27471 = v_a_27473.m, v_c_27476[v_o_27470.NM] = [v_s_27471[0], v_s_27471[4], v_s_27471[8], v_s_27471[1], v_s_27471[5], v_s_27471[9], v_s_27471[2], v_s_27471[6], v_s_27471[10]]), this.uniforms(v_c_27476), 0);
      for (v_e_27469 in v_t_27465) {
        var v_w_27478 = v_t_27465[v_e_27469],
          v_d_27479 = this.attributes[v_e_27469] || v_p_27086.getAttribLocation(this.program, v_e_27469.replace(/^(gl_.*)$/, v_g_27102 + "$1"));
        -1 != v_d_27479 && v_w_27478.buffer && (this.attributes[v_e_27469] = v_d_27479, v_p_27086.bindBuffer(v_p_27086.ARRAY_BUFFER, v_w_27478.buffer), v_p_27086.enableVertexAttribArray(v_d_27479), v_p_27086.vertexAttribPointer(v_d_27479, v_w_27478.buffer.spacing, v_p_27086.FLOAT, !1, 0, 0), v_l_27477 = v_w_27478.buffer.length / v_w_27478.buffer.spacing);
      }
      for (v_e_27469 in this.attributes) v_e_27469 in v_t_27465 || v_p_27086.disableVertexAttribArray(this.attributes[v_e_27469]);
      return !v_l_27477 || v_n_27466 && !v_n_27466.buffer || (v_n_27466 ? (v_p_27086.bindBuffer(v_p_27086.ELEMENT_ARRAY_BUFFER, v_n_27466.buffer), void 0 !== v_r_27468 ? v_p_27086.drawElements(v_i_27467, v_r_27468, v_p_27086.UNSIGNED_SHORT, 0) : v_p_27086.drawElements(v_i_27467, v_n_27466.buffer.length, v_p_27086.UNSIGNED_SHORT, 0)) : void 0 !== v_r_27468 ? v_p_27086.drawArrays(v_i_27467, 0, v_r_27468) : v_p_27086.drawArrays(v_i_27467, 0, v_l_27477)), this;
    },
    free: function () {
      for (var v_t_27480 of this.shaders) v_p_27086.deleteShader(v_t_27480);
      v_p_27086.deleteProgram(this.program), this.program = void 0, this.shaders = [];
    }
  }, v_c_27107.prototype = {
    bind: function (v_t_27481) {
      v_p_27086.activeTexture(v_p_27086.TEXTURE0 + (v_t_27481 || 0)), v_p_27086.bindTexture(v_p_27086.TEXTURE_2D, this.id);
    },
    unbind: function (v_t_27482) {
      v_p_27086.activeTexture(v_p_27086.TEXTURE0 + (v_t_27482 || 0)), v_p_27086.bindTexture(v_p_27086.TEXTURE_2D, null);
    },
    canDrawTo: function () {
      v_o_27104 = v_o_27104 || v_p_27086.createFramebuffer(), v_p_27086.bindFramebuffer(v_p_27086.FRAMEBUFFER, v_o_27104), v_p_27086.framebufferTexture2D(v_p_27086.FRAMEBUFFER, v_p_27086.COLOR_ATTACHMENT0, v_p_27086.TEXTURE_2D, this.id, 0);
      var v_t_27483 = v_p_27086.checkFramebufferStatus(v_p_27086.FRAMEBUFFER) == v_p_27086.FRAMEBUFFER_COMPLETE;
      return v_p_27086.bindFramebuffer(v_p_27086.FRAMEBUFFER, null), v_t_27483;
    },
    drawTo: function (v_t_27484) {
      var v_n_27485 = v_p_27086.getParameter(v_p_27086.VIEWPORT);
      if (v_o_27104 = v_o_27104 || v_p_27086.createFramebuffer(), v_s_27105 = v_s_27105 || v_p_27086.createRenderbuffer(), v_p_27086.bindFramebuffer(v_p_27086.FRAMEBUFFER, v_o_27104), v_p_27086.bindRenderbuffer(v_p_27086.RENDERBUFFER, v_s_27105), this.width == v_s_27105.width && this.height == v_s_27105.height || (v_s_27105.width = this.width, v_s_27105.height = this.height, v_p_27086.renderbufferStorage(v_p_27086.RENDERBUFFER, v_p_27086.DEPTH_COMPONENT16, this.width, this.height)), v_p_27086.framebufferTexture2D(v_p_27086.FRAMEBUFFER, v_p_27086.COLOR_ATTACHMENT0, v_p_27086.TEXTURE_2D, this.id, 0), v_p_27086.framebufferRenderbuffer(v_p_27086.FRAMEBUFFER, v_p_27086.DEPTH_ATTACHMENT, v_p_27086.RENDERBUFFER, v_s_27105), v_p_27086.checkFramebufferStatus(v_p_27086.FRAMEBUFFER) != v_p_27086.FRAMEBUFFER_COMPLETE) throw new Error("Rendering to this texture is not supported (incomplete framebuffer)");
      v_p_27086.viewport(0, 0, this.width, this.height), v_t_27484(), v_p_27086.bindFramebuffer(v_p_27086.FRAMEBUFFER, null), v_p_27086.bindRenderbuffer(v_p_27086.RENDERBUFFER, null), v_p_27086.viewport(v_n_27485[0], v_n_27485[1], v_n_27485[2], v_n_27485[3]);
    },
    swapWith: function (v_t_27486) {
      var v_n_27487 = v_t_27486.id;
      v_t_27486.id = this.id, this.id = v_n_27487, v_n_27487 = v_t_27486.width, v_t_27486.width = this.width, this.width = v_n_27487, v_n_27487 = v_t_27486.height, v_t_27486.height = this.height, this.height = v_n_27487;
    },
    free: function () {
      v_p_27086.deleteTexture(this.id), this.id = void 0;
    }
  }, v_c_27107.fromImage = function (v_t_27488, v_n_27489) {
    var v_i_27490 = new v_c_27107(v_t_27488.width, v_t_27488.height, v_n_27489 = v_n_27489 || {});
    try {
      v_p_27086.texImage2D(v_p_27086.TEXTURE_2D, 0, v_i_27490.format, v_i_27490.format, v_i_27490.type, v_t_27488);
    } catch (v_t_27491) {
      throw "file:" == location.protocol ? new Error('image not loaded for security reasons (serve this page over "http://" instead)') : new Error("image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)");
    }
    return v_n_27489.minFilter && v_n_27489.minFilter != v_p_27086.NEAREST && v_n_27489.minFilter != v_p_27086.LINEAR && v_p_27086.generateMipmap(v_p_27086.TEXTURE_2D), v_i_27490;
  }, v_c_27107.fromURL = function (v_t_27492, v_n_27493) {
    v_a_27106 = v_a_27106 || function () {
      var v_t_27497 = document.createElement("canvas").getContext("2d");
      v_t_27497.canvas.width = v_t_27497.canvas.height = 128;
      for (var v_n_27498 = 0; v_n_27498 < v_t_27497.canvas.height; v_n_27498 += 16) for (var v_i_27499 = 0; v_i_27499 < v_t_27497.canvas.width; v_i_27499 += 16) v_t_27497.fillStyle = 16 & (v_i_27499 ^ v_n_27498) ? "#FFF" : "#DDD", v_t_27497.fillRect(v_i_27499, v_n_27498, 16, 16);
      return v_t_27497.canvas;
    }();
    var v_i_27494 = v_c_27107.fromImage(v_a_27106, v_n_27493),
      v_r_27495 = new Image(),
      v_e_27496 = v_p_27086;
    return v_r_27495.onload = function () {
      v_e_27496.makeCurrent(), v_c_27107.fromImage(v_r_27495, v_n_27493).swapWith(v_i_27494);
    }, v_r_27495.src = v_t_27492, v_i_27494;
  }, v_c_27107.canUseFloatingPointTextures = function () {
    return !!v_p_27086.getExtension("OES_texture_float");
  }, v_c_27107.canUseFloatingPointLinearFiltering = function () {
    return !!v_p_27086.getExtension("OES_texture_float_linear");
  }, v_c_27107.canUseHalfFloatingPointTextures = function () {
    return !!v_p_27086.getExtension("OES_texture_half_float");
  }, v_c_27107.canUseHalfFloatingPointLinearFiltering = function () {
    return !!v_p_27086.getExtension("OES_texture_half_float_linear");
  }, v_V_27108.prototype = {
    negative: function () {
      return new v_V_27108(-this.x, -this.y, -this.z);
    },
    add: function (v_t_27500) {
      return v_t_27500 instanceof v_V_27108 ? new v_V_27108(this.x + v_t_27500.x, this.y + v_t_27500.y, this.z + v_t_27500.z) : new v_V_27108(this.x + v_t_27500, this.y + v_t_27500, this.z + v_t_27500);
    },
    subtract: function (v_t_27501) {
      return v_t_27501 instanceof v_V_27108 ? new v_V_27108(this.x - v_t_27501.x, this.y - v_t_27501.y, this.z - v_t_27501.z) : new v_V_27108(this.x - v_t_27501, this.y - v_t_27501, this.z - v_t_27501);
    },
    multiply: function (v_t_27502) {
      return v_t_27502 instanceof v_V_27108 ? new v_V_27108(this.x * v_t_27502.x, this.y * v_t_27502.y, this.z * v_t_27502.z) : new v_V_27108(this.x * v_t_27502, this.y * v_t_27502, this.z * v_t_27502);
    },
    divide: function (v_t_27503) {
      return v_t_27503 instanceof v_V_27108 ? new v_V_27108(this.x / v_t_27503.x, this.y / v_t_27503.y, this.z / v_t_27503.z) : new v_V_27108(this.x / v_t_27503, this.y / v_t_27503, this.z / v_t_27503);
    },
    equals: function (v_t_27504) {
      return this.x == v_t_27504.x && this.y == v_t_27504.y && this.z == v_t_27504.z;
    },
    dot: function (v_t_27505) {
      return this.x * v_t_27505.x + this.y * v_t_27505.y + this.z * v_t_27505.z;
    },
    cross: function (v_t_27506) {
      return new v_V_27108(this.y * v_t_27506.z - this.z * v_t_27506.y, this.z * v_t_27506.x - this.x * v_t_27506.z, this.x * v_t_27506.y - this.y * v_t_27506.x);
    },
    length: function () {
      return Math.sqrt(this.dot(this));
    },
    unit: function () {
      return this.divide(this.length());
    },
    min: function () {
      return Math.min(Math.min(this.x, this.y), this.z);
    },
    max: function () {
      return Math.max(Math.max(this.x, this.y), this.z);
    },
    toAngles: function () {
      return {
        theta: Math.atan2(this.z, this.x),
        phi: Math.asin(this.y / this.length())
      };
    },
    angleTo: function (v_t_27507) {
      return Math.acos(this.dot(v_t_27507) / (this.length() * v_t_27507.length()));
    },
    toArray: function (v_t_27508) {
      return [this.x, this.y, this.z].slice(0, v_t_27508 || 3);
    },
    clone: function () {
      return new v_V_27108(this.x, this.y, this.z);
    },
    init: function (v_t_27509, v_n_27510, v_i_27511) {
      return this.x = v_t_27509, this.y = v_n_27510, this.z = v_i_27511, this;
    }
  }, v_V_27108.negative = function (v_t_27512, v_n_27513) {
    return v_n_27513.x = -v_t_27512.x, v_n_27513.y = -v_t_27512.y, v_n_27513.z = -v_t_27512.z, v_n_27513;
  }, v_V_27108.add = function (v_t_27514, v_n_27515, v_i_27516) {
    return v_n_27515 instanceof v_V_27108 ? (v_i_27516.x = v_t_27514.x + v_n_27515.x, v_i_27516.y = v_t_27514.y + v_n_27515.y, v_i_27516.z = v_t_27514.z + v_n_27515.z) : (v_i_27516.x = v_t_27514.x + v_n_27515, v_i_27516.y = v_t_27514.y + v_n_27515, v_i_27516.z = v_t_27514.z + v_n_27515), v_i_27516;
  }, v_V_27108.subtract = function (v_t_27517, v_n_27518, v_i_27519) {
    return v_n_27518 instanceof v_V_27108 ? (v_i_27519.x = v_t_27517.x - v_n_27518.x, v_i_27519.y = v_t_27517.y - v_n_27518.y, v_i_27519.z = v_t_27517.z - v_n_27518.z) : (v_i_27519.x = v_t_27517.x - v_n_27518, v_i_27519.y = v_t_27517.y - v_n_27518, v_i_27519.z = v_t_27517.z - v_n_27518), v_i_27519;
  }, v_V_27108.multiply = function (v_t_27520, v_n_27521, v_i_27522) {
    return v_n_27521 instanceof v_V_27108 ? (v_i_27522.x = v_t_27520.x * v_n_27521.x, v_i_27522.y = v_t_27520.y * v_n_27521.y, v_i_27522.z = v_t_27520.z * v_n_27521.z) : (v_i_27522.x = v_t_27520.x * v_n_27521, v_i_27522.y = v_t_27520.y * v_n_27521, v_i_27522.z = v_t_27520.z * v_n_27521), v_i_27522;
  }, v_V_27108.divide = function (v_t_27523, v_n_27524, v_i_27525) {
    return v_n_27524 instanceof v_V_27108 ? (v_i_27525.x = v_t_27523.x / v_n_27524.x, v_i_27525.y = v_t_27523.y / v_n_27524.y, v_i_27525.z = v_t_27523.z / v_n_27524.z) : (v_i_27525.x = v_t_27523.x / v_n_27524, v_i_27525.y = v_t_27523.y / v_n_27524, v_i_27525.z = v_t_27523.z / v_n_27524), v_i_27525;
  }, v_V_27108.cross = function (v_t_27526, v_n_27527, v_i_27528) {
    return v_i_27528.x = v_t_27526.y * v_n_27527.z - v_t_27526.z * v_n_27527.y, v_i_27528.y = v_t_27526.z * v_n_27527.x - v_t_27526.x * v_n_27527.z, v_i_27528.z = v_t_27526.x * v_n_27527.y - v_t_27526.y * v_n_27527.x, v_i_27528;
  }, v_V_27108.unit = function (v_t_27529, v_n_27530) {
    var v_i_27531 = v_t_27529.length();
    return v_n_27530.x = v_t_27529.x / v_i_27531, v_n_27530.y = v_t_27529.y / v_i_27531, v_n_27530.z = v_t_27529.z / v_i_27531, v_n_27530;
  }, v_V_27108.fromAngles = function (v_t_27532, v_n_27533) {
    return new v_V_27108(Math.cos(v_t_27532) * Math.cos(v_n_27533), Math.sin(v_n_27533), Math.sin(v_t_27532) * Math.cos(v_n_27533));
  }, v_V_27108.randomDirection = function () {
    return v_V_27108.fromAngles(Math.random() * Math.PI * 2, Math.asin(2 * Math.random() - 1));
  }, v_V_27108.min = function (v_t_27534, v_n_27535) {
    return new v_V_27108(Math.min(v_t_27534.x, v_n_27535.x), Math.min(v_t_27534.y, v_n_27535.y), Math.min(v_t_27534.z, v_n_27535.z));
  }, v_V_27108.max = function (v_t_27536, v_n_27537) {
    return new v_V_27108(Math.max(v_t_27536.x, v_n_27537.x), Math.max(v_t_27536.y, v_n_27537.y), Math.max(v_t_27536.z, v_n_27537.z));
  }, v_V_27108.lerp = function (v_t_27538, v_n_27539, v_i_27540) {
    return v_n_27539.subtract(v_t_27538).multiply(v_i_27540).add(v_t_27538);
  }, v_V_27108.fromArray = function (v_t_27541) {
    return new v_V_27108(v_t_27541[0], v_t_27541[1], v_t_27541[2]);
  }, v_V_27108.angleBetween = function (v_t_27542, v_n_27543) {
    return v_t_27542.angleTo(v_n_27543);
  }, v_i_27087;
}();