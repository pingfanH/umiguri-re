// vendor: effekseer
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

var effekseer = function () {
  var Module = {};
  var Core = {};
  var _imageCrossOrigin = "";
  var _onloadAssembly = function _onloadAssembly() {};
  var _onerrorAssembly = function _onerrorAssembly() {};
  var _is_runtime_initialized = false;
  var _onRuntimeInitialized = function _onRuntimeInitialized() {
    Core = {
      Init: Module.cwrap("EffekseerInit", "number", ["number", "number", "number"]),
      Terminate: Module.cwrap("EffekseerTerminate", "void", ["number"]),
      Update: Module.cwrap("EffekseerUpdate", "void", ["number", "number"]),
      BeginUpdate: Module.cwrap("EffekseerBeginUpdate", "void", ["number"]),
      EndUpdate: Module.cwrap("EffekseerEndUpdate", "void", ["number"]),
      UpdateHandle: Module.cwrap("EffekseerUpdateHandle", "void", ["number", "number", "number"]),
      Draw: Module.cwrap("EffekseerDraw", "void", ["number"]),
      BeginDraw: Module.cwrap("EffekseerBeginDraw", "void", ["number"]),
      EndDraw: Module.cwrap("EffekseerEndDraw", "void", ["number"]),
      DrawHandle: Module.cwrap("EffekseerDrawHandle", "void", ["number", "number"]),
      SetProjectionMatrix: Module.cwrap("EffekseerSetProjectionMatrix", "void", ["number", "number"]),
      SetProjectionPerspective: Module.cwrap("EffekseerSetProjectionPerspective", "void", ["number", "number", "number", "number", "number"]),
      SetProjectionOrthographic: Module.cwrap("EffekseerSetProjectionOrthographic", "void", ["number", "number", "number", "number", "number"]),
      SetCameraMatrix: Module.cwrap("EffekseerSetCameraMatrix", "void", ["number", "number"]),
      SetCameraLookAt: Module.cwrap("EffekseerSetCameraLookAt", "void", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]),
      LoadEffect: Module.cwrap("EffekseerLoadEffect", "number", ["number", "number", "number", "number", "number"]),
      ReleaseEffect: Module.cwrap("EffekseerReleaseEffect", "void", ["number", "number"]),
      ReloadResources: Module.cwrap("EffekseerReloadResources", "void", ["number", "number"]),
      StopAllEffects: Module.cwrap("EffekseerStopAllEffects", "void", ["number"]),
      PlayEffect: Module.cwrap("EffekseerPlayEffect", "number", ["number", "number", "number", "number", "number"]),
      StopEffect: Module.cwrap("EffekseerStopEffect", "void", ["number", "number"]),
      StopRoot: Module.cwrap("EffekseerStopRoot", "void", ["number", "number"]),
      Exists: Module.cwrap("EffekseerExists", "number", ["number", "number"]),
      SetLocation: Module.cwrap("EffekseerSetLocation", "void", ["number", "number", "number", "number", "number"]),
      SetRotation: Module.cwrap("EffekseerSetRotation", "void", ["number", "number", "number", "number", "number"]),
      SetScale: Module.cwrap("EffekseerSetScale", "void", ["number", "number", "number", "number", "number"]),
      SetMatrix: Module.cwrap("EffekseerSetMatrix", "void", ["number", "number", "number"]),
      SetTargetLocation: Module.cwrap("EffekseerSetTargetLocation", "void", ["number", "number", "number", "number", "number"]),
      GetDynamicInput: Module.cwrap("EffekseerGetDynamicInput", "number", ["number", "number", "number"]),
      SetDynamicInput: Module.cwrap("EffekseerSetDynamicInput", "void", ["number", "number", "number", "number"]),
      SetPaused: Module.cwrap("EffekseerSetPaused", "void", ["number", "number", "number"]),
      SetShown: Module.cwrap("EffekseerSetShown", "void", ["number", "number", "number"]),
      SetSpeed: Module.cwrap("EffekseerSetSpeed", "void", ["number", "number", "number"]),
      GetRestInstancesCount: Module.cwrap("EffekseerGetRestInstancesCount", "number", ["number"]),
      GetUpdateTime: Module.cwrap("EffekseerGetUpdateTime", "number", ["number"]),
      GetDrawTime: Module.cwrap("EffekseerGetDrawTime", "number", ["number"]),
      IsVertexArrayObjectSupported: Module.cwrap("EffekseerIsVertexArrayObjectSupported", "number", ["number"]),
      SetRestorationOfStatesFlag: Module.cwrap("EffekseerSetRestorationOfStatesFlag", "void", ["number", "number"]),
      CaptureBackground: Module.cwrap("EffekseerCaptureBackground", "void", ["number", "number", "number", "number", "number"]),
      ResetBackground: Module.cwrap("EffekseerResetBackground", "void", ["number"]),
      SetLogEnabled: Module.cwrap("EffekseerSetLogEnabled", "void", ["number"])
    };
    Module.resourcesMap = {};
    Module._isPowerOfTwo = function (v_img_26210) {
      return _isImagePowerOfTwo(v_img_26210);
    };
    Module._loadImage = function (path) {
      var effect = loadingEffect;
      effect.context._makeContextCurrent();
      {
        var _res = effect.resources.find(function (v_res_26212) {
          return v_res_26212.path == path;
        });
        if (_res) {
          return _res.isLoaded ? _res.image : null;
        }
      }
      var v_res_26211 = {
        path: path,
        isLoaded: false,
        image: null,
        isRequired: true
      };
      effect.resources.push(v_res_26211);
      var path = effect.baseDir + path;
      if (effect.redirect) {
        path = effect.redirect(path);
      }
      {
        var arrayBuffer = Module.resourcesMap[path];
        if (arrayBuffer != null) {
          var arrayBufferView = new Uint8Array(arrayBuffer);
          Promise.resolve(new Blob([arrayBufferView], {
            type: 'image/png'
          })).then(function (blob) {
            return Promise.resolve(URL.createObjectURL(blob));
          }).then(function (v_url_26213) {
            var v_img_26214 = new Image();
            v_img_26214.onload = function () {
              v_res_26211.image = v_img_26214;
              v_res_26211.isLoaded = true;
              effect._update();
            };
            v_img_26214.src = v_url_26213;
          });
        } else {
          _loadResource(path, function (image) {
            v_res_26211.image = image;
            v_res_26211.isLoaded = true;
            effect._update();
          }, effect.onerror);
        }
      }
      return null;
    };
    Module._loadBinary = function (path, isRequired) {
      var effect = loadingEffect;
      effect.context._makeContextCurrent();
      var v_res_26215 = effect.resources.find(function (v_res_26216) {
        return v_res_26216.path == path;
      });
      if (v_res_26215) {
        return v_res_26215.isLoaded ? v_res_26215.buffer : null;
      }
      var v_res_26215 = {
        path: path,
        isLoaded: false,
        buffer: null,
        isRequired: isRequired
      };
      effect.resources.push(v_res_26215);
      var path = effect.baseDir + path;
      if (effect.redirect) {
        path = effect.redirect(path);
      }
      var arrayBuffer = Module.resourcesMap[path];
      if (arrayBuffer != null) {
        v_res_26215.buffer = arrayBuffer;
        v_res_26215.isLoaded = true;
        effect._update();
      } else {
        _loadResource(path, function (buffer) {
          v_res_26215.buffer = buffer;
          v_res_26215.isLoaded = true;
          effect._update();
        }, effect.onerror);
      }
      return null;
    };
    _is_runtime_initialized = true;
    _onloadAssembly();
  };
  var _initalize_wasm = function _initalize_wasm(v_url_26217) {
    var v_xhr_26218 = new XMLHttpRequest();
    v_xhr_26218.open('GET', v_url_26217, true);
    v_xhr_26218.responseType = "arraybuffer";
    v_xhr_26218.onload = function () {
      var params = {};
      params.wasmBinary = v_xhr_26218.response;
      effekseer_native(params).then(function (module) {
        Module = module;
        _onRuntimeInitialized();
      });
    };
    v_xhr_26218.onerror = function () {
      _onerrorAssembly();
    };
    v_xhr_26218.send(null);
  };
  if (typeof effekseer_native === "undefined") {
    moduleOrPromise = effekseer();
    if (moduleOrPromise instanceof Promise) {
      moduleOrPromise.then(function (module) {
        Module = module;
        _onRuntimeInitialized();
      });
    } else {
      Module = moduleOrPromise;
      _onRuntimeInitialized();
    }
  }
  var EffekseerEffect = function () {
    function EffekseerEffect(context) {
      _classCallCheck(this, EffekseerEffect);
      this.context = context;
      this.nativeptr = 0;
      this.baseDir = "";
      this.isLoaded = false;
      this.scale = 1.0;
      this.resources = [];
      this.main_buffer = null;
    }
    _createClass(EffekseerEffect, [{
      key: "_load",
      value: function _load(buffer) {
        loadingEffect = this;
        this.main_buffer = buffer;
        var memptr = Module._malloc(buffer.byteLength);
        Module.HEAP8.set(new Uint8Array(buffer), memptr);
        this.nativeptr = Core.LoadEffect(this.context.nativeptr, memptr, buffer.byteLength, this.scale);
        Module._free(memptr);
        loadingEffect = null;
        this._update();
      }
    }, {
      key: "_loadFromPackage",
      value: async function _loadFromPackage(buffer, Unzip) {
        var unzip = new Unzip(new Uint8Array(buffer));
        var meta_buffer = unzip.decompress('metafile.json');
        var textDecoder = new TextDecoder();
        var text = textDecoder.decode(meta_buffer);
        var json = JSON.parse(text);
        var efkFile = void 0;
        var dependencies = [];
        for (var v_key_26219 in json.files) {
          var v_val_26220 = json.files[v_key_26219];
          if (v_val_26220.type === 'Effect') {
            efkFile = v_key_26219;
            Array.prototype.push.apply(dependencies, v_val_26220.dependencies);
          }
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
          for (var _iterator = dependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var v_dep_26221 = _step.value;
            var _buffer = unzip.decompress(v_dep_26221);
            Module.resourcesMap[v_dep_26221] = _buffer.buffer;
          }
        } catch (v_err_26222) {
          _didIteratorError = true;
          _iteratorError = v_err_26222;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
        var efk_buffer = unzip.decompress(efkFile);
        this._load(efk_buffer.buffer);
      }
    }, {
      key: "_reload",
      value: function _reload() {
        loadingEffect = this;
        var buffer = this.main_buffer;
        var memptr = Module._malloc(buffer.byteLength);
        Module.HEAP8.set(new Uint8Array(buffer), memptr);
        Core.ReloadResources(this.context.nativeptr, this.nativeptr, memptr, buffer.byteLength);
        Module._free(memptr);
        loadingEffect = null;
      }
    }, {
      key: "_update",
      value: function _update() {
        var loaded = this.nativeptr != 0;
        if (this.resources.length > 0) {
          for (var v_i_26223 = 0; v_i_26223 < this.resources.length; v_i_26223++) {
            if (!this.resources[v_i_26223].isLoaded && this.resources[v_i_26223].isRequired) {
              loaded = false;
              break;
            }
          }
          if (loaded) {
            this.context._makeContextCurrent();
            this.context.contextStates.save();
            this._reload();
            this.context.contextStates.restore();
          }
        }
        if (!this.isLoaded && loaded) {
          this.isLoaded = true;
          if (this.onload) this.onload();
        }
      }
    }]);
    return EffekseerEffect;
  }();
  var EffekseerHandle = function () {
    function EffekseerHandle(context, native) {
      _classCallCheck(this, EffekseerHandle);
      this.context = context;
      this.native = native;
    }
    _createClass(EffekseerHandle, [{
      key: "stop",
      value: function stop() {
        Core.StopEffect(this.context.nativeptr, this.native);
      }
    }, {
      key: "stopRoot",
      value: function stopRoot() {
        Core.StopRoot(this.context.nativeptr, this.native);
      }
    }, {
      key: "exists",
      get: function v_get_26224() {
        return !!Core.Exists(this.context.nativeptr, this.native);
      }
    }, {
      key: "setLocation",
      value: function setLocation(v_x_26225, v_y_26226, v_z_26227) {
        Core.SetLocation(this.context.nativeptr, this.native, v_x_26225, v_y_26226, v_z_26227);
      }
    }, {
      key: "setRotation",
      value: function setRotation(v_x_26228, v_y_26229, v_z_26230) {
        Core.SetRotation(this.context.nativeptr, this.native, v_x_26228, v_y_26229, v_z_26230);
      }
    }, {
      key: "setScale",
      value: function setScale(v_x_26231, v_y_26232, v_z_26233) {
        Core.SetScale(this.context.nativeptr, this.native, v_x_26231, v_y_26232, v_z_26233);
      }
    }, {
      key: "setMatrix",
      value: function setMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetMatrix(this.context.nativeptr, this.native, arrmem);
        Module.stackRestore(stack);
      }
    }, {
      key: "setTargetLocation",
      value: function setTargetLocation(v_x_26234, v_y_26235, v_z_26236) {
        Core.SetTargetLocation(this.context.nativeptr, this.native, v_x_26234, v_y_26235, v_z_26236);
      }
    }, {
      key: "getDynamicInput",
      value: function getDynamicInput(index) {
        return Core.GetDynamicInput(this.context.nativeptr, this.native, index);
      }
    }, {
      key: "setDynamicInput",
      value: function setDynamicInput(index, value) {
        Core.SetDynamicInput(this.context.nativeptr, this.native, index, value);
      }
    }, {
      key: "setPaused",
      value: function setPaused(paused) {
        Core.SetPaused(this.context.nativeptr, this.native, paused);
      }
    }, {
      key: "setShown",
      value: function setShown(shown) {
        Core.SetShown(this.context.nativeptr, this.native, shown);
      }
    }, {
      key: "setSpeed",
      value: function setSpeed(speed) {
        Core.SetSpeed(this.context.nativeptr, this.native, speed);
      }
    }]);
    return EffekseerHandle;
  }();
  var _isImagePowerOfTwo = function _isImagePowerOfTwo(image) {
    return !(image.width & image.width - 1) && !(image.height & image.height - 1);
  };
  var calcNextPowerOfTwo = function calcNextPowerOfTwo(v_v_26237) {
    var sizes = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    var foundInd = -1;
    for (var v_i_26238 = 0; v_i_26238 < sizes.length; v_i_26238++) {
      if (sizes[v_i_26238] >= v_v_26237) {
        return sizes[v_i_26238];
      }
    }
    for (var v_i_26238 = sizes.length - 1; v_i_26238 >= 0; v_i_26238--) {
      if (sizes[v_i_26238] <= v_v_26237) {
        return sizes[v_i_26238];
      }
    }
    return 1;
  };
  var _convertPowerOfTwoImage = function _convertPowerOfTwoImage(image) {
    if (!_isImagePowerOfTwo(image)) {
      var canvas = document.createElement("canvas");
      canvas.width = calcNextPowerOfTwo(image.width);
      canvas.height = calcNextPowerOfTwo(image.height);
      var context2d = canvas.getContext("2d");
      context2d.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
      image = canvas;
    }
    return image;
  };
  var _loadBinFile = function _loadBinFile(v_url_26239, onload, onerror) {
    var v_xhr_26240 = new XMLHttpRequest();
    v_xhr_26240.open('GET', v_url_26239, true);
    v_xhr_26240.responseType = "arraybuffer";
    v_xhr_26240.onload = function () {
      onload(v_xhr_26240.response);
    };
    v_xhr_26240.onerror = function () {
      if (!(typeof onerror === "undefined")) onerror('not found', v_url_26239);
    };
    v_xhr_26240.send(null);
  };
  var _loadResource = function _loadResource(path, onload, onerror) {
    splitted_path = path.split('?');
    var ext_path = path;
    if (splitted_path.length >= 2) {
      ext_path = splitted_path[0];
    }
    var extindex = ext_path.lastIndexOf(".");
    var v_ext_26241 = extindex >= 0 ? ext_path.slice(extindex) : "";
    if (v_ext_26241 == ".png" || v_ext_26241 == ".jpg") {
      var image = new Image();
      image.onload = function () {
        var converted_image = _convertPowerOfTwoImage(image);
        onload(converted_image);
      };
      image.onerror = function () {
        if (!(typeof onerror === "undefined")) onerror('not found', path);
      };
      image.crossOrigin = _imageCrossOrigin;
      image.src = path;
    } else if (v_ext_26241 == ".tga") {
      if (!(typeof onerror === "undefined")) onerror('not supported', path);
    } else {
      _loadBinFile(path, function (buffer) {
        onload(buffer);
      }, onerror);
    }
  };
  var loadingEffect = null;
  var ContextStates = function () {
    function ContextStates(v_gl_26242) {
      _classCallCheck(this, ContextStates);
      this.restore_texture_slot_max = 8;
      this._gl = v_gl_26242;
      this.ext_vao = null;
      this.isWebGL2VAOEnabled = false;
      this.effekseer_vao = null;
      this.current_vao = null;
      this.current_vbo = null;
      this.current_ibo = null;
      this.current_textures = [];
      this.current_textures.length = this.restore_texture_slot_max;
      this.current_active_texture_id = null;
      this.ext_vao = this._gl.getExtension('OES_vertex_array_object');
      if (this.ext_vao != null) {
        this.effekseer_vao = this.ext_vao.createVertexArrayOES();
      } else if ('createVertexArray' in this._gl) {
        this.isWebGL2VAOEnabled = true;
        this.effekseer_vao = this._gl.createVertexArray();
      }
    }
    _createClass(ContextStates, [{
      key: "release",
      value: function release() {
        if (this.effekseer_vao) {
          if (this.ext_vao) {
            this.ext_vao.deleteVertexArrayOES(this.effekseer_vao);
          } else if (this.isWebGL2VAOEnabled) {
            this._gl.deleteVertexArray(this.effekseer_vao);
          }
          this.effekseer_vao = null;
        }
        this._gl = null;
      }
    }, {
      key: "save",
      value: function save() {
        this.current_vbo = this._gl.getParameter(this._gl.ARRAY_BUFFER_BINDING);
        this.current_ibo = this._gl.getParameter(this._gl.ELEMENT_ARRAY_BUFFER_BINDING);
        if (this.ext_vao != null) {
          this.current_vao = this._gl.getParameter(this.ext_vao.VERTEX_ARRAY_BINDING_OES);
          this.ext_vao.bindVertexArrayOES(this.effekseer_vao);
        } else if (this.isWebGL2VAOEnabled) {
          this.current_vao = this._gl.getParameter(this._gl.VERTEX_ARRAY_BINDING);
          this._gl.bindVertexArray(this.effekseer_vao);
        }
        this.current_active_texture_id = this._gl.getParameter(this._gl.ACTIVE_TEXTURE);
        for (var v_i_26243 = 0; v_i_26243 < this.restore_texture_slot_max; v_i_26243++) {
          this._gl.activeTexture(this._gl.TEXTURE0 + v_i_26243);
          this.current_textures[v_i_26243] = this._gl.getParameter(this._gl.TEXTURE_BINDING_2D);
        }
      }
    }, {
      key: "restore",
      value: function restore() {
        for (var v_i_26244 = 0; v_i_26244 < this.restore_texture_slot_max; v_i_26244++) {
          this._gl.activeTexture(this._gl.TEXTURE0 + v_i_26244);
          this._gl.bindTexture(this._gl.TEXTURE_2D, this.current_textures[v_i_26244]);
        }
        this._gl.activeTexture(this.current_active_texture_id);
        if (this.ext_vao != null) {
          this.ext_vao.bindVertexArrayOES(this.current_vao);
        } else if (this.isWebGL2VAOEnabled) {
          this._gl.bindVertexArray(this.current_vao);
        }
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this.current_vbo);
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this.current_ibo);
      }
    }, {
      key: "disableVAO",
      value: function disableVAO() {
        if (this.ext_vao != null) {
          this.ext_vao.bindVertexArrayOES(null);
        } else if (this.isWebGL2VAOEnabled) {
          this._gl.bindVertexArray(null);
        }
      }
    }]);
    return ContextStates;
  }();
  var EffekseerContext = function () {
    function EffekseerContext() {
      _classCallCheck(this, EffekseerContext);
    }
    _createClass(EffekseerContext, [{
      key: "_makeContextCurrent",
      value: function _makeContextCurrent() {
        Module.GL.makeContextCurrent(this.ctx);
      }
    }, {
      key: "init",
      value: function init(webglContext, settings) {
        this._gl = webglContext;
        this.contextStates = new ContextStates(this._gl);
        var instanceMaxCount = 4000;
        var squareMaxCount = 10000;
        var enableExtensionsByDefault = true;
        if (settings) {
          if ("instanceMaxCount" in settings) {
            instanceMaxCount = settings.instanceMaxCount;
          }
          if ("squareMaxCount" in settings) {
            squareMaxCount = settings.squareMaxCount;
          }
          if ("enableExtensionsByDefault" in settings) {
            enableExtensionsByDefault = settings.enableExtensionsByDefault;
          }
        }
        window.gl = this._gl;
        this.ctx = Module.GL.registerContext(webglContext, {
          majorVersion: 1,
          minorVersion: 0,
          enableExtensionsByDefault: enableExtensionsByDefault
        });
        this._makeContextCurrent();
        this._restorationOfStatesFlag = true;
        this.contextStates.save();
        this.nativeptr = Core.Init(instanceMaxCount, squareMaxCount, enableExtensionsByDefault);
        this.contextStates.restore();
      }
    }, {
      key: "update",
      value: function update(deltaFrames) {
        if (!deltaFrames) deltaFrames = 1.0;
        Core.Update(this.nativeptr, deltaFrames);
      }
    }, {
      key: "beginUpdate",
      value: function beginUpdate() {
        Core.BeginUpdate(this.nativeptr);
      }
    }, {
      key: "endUpdate",
      value: function endUpdate() {
        Core.EndUpdate(this.nativeptr);
      }
    }, {
      key: "updateHandle",
      value: function updateHandle(handle, deltaFrames) {
        Core.UpdateHandle(this.nativeptr, handle.native, deltaFrames);
      }
    }, {
      key: "draw",
      value: function draw() {
        this._makeContextCurrent();
        var program = null;
        if (this._restorationOfStatesFlag) {
          program = this._gl.getParameter(this._gl.CURRENT_PROGRAM);
          this.contextStates.save();
        } else {
          this.contextStates.disableVAO();
        }
        Core.Draw(this.nativeptr);
        if (this._restorationOfStatesFlag) {
          this.contextStates.restore();
          this._gl.useProgram(program);
        }
      }
    }, {
      key: "beginDraw",
      value: function beginDraw() {
        if (this._restorationOfStatesFlag) {
          this.contextStates.save();
        } else {
          this.contextStates.disableVAO();
        }
        Core.BeginDraw(this.nativeptr);
      }
    }, {
      key: "endDraw",
      value: function endDraw() {
        Core.EndDraw(this.nativeptr);
        if (this._restorationOfStatesFlag) {
          this.contextStates.restore();
        }
      }
    }, {
      key: "drawHandle",
      value: function drawHandle(handle) {
        Core.DrawHandle(this.nativeptr, handle.native);
      }
    }, {
      key: "setProjectionMatrix",
      value: function setProjectionMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetProjectionMatrix(this.nativeptr, arrmem);
        Module.stackRestore(stack);
      }
    }, {
      key: "setProjectionPerspective",
      value: function setProjectionPerspective(v_fov_26245, aspect, near, v_far_26246) {
        Core.SetProjectionPerspective(this.nativeptr, v_fov_26245, aspect, near, v_far_26246);
      }
    }, {
      key: "setProjectionOrthographic",
      value: function setProjectionOrthographic(width, height, near, v_far_26247) {
        Core.SetProjectionOrthographic(this.nativeptr, width, height, near, v_far_26247);
      }
    }, {
      key: "setCameraMatrix",
      value: function setCameraMatrix(matrixArray) {
        var stack = Module.stackSave();
        var arrmem = Module.stackAlloc(4 * 16);
        Module.HEAPF32.set(matrixArray, arrmem >> 2);
        Core.SetCameraMatrix(this.nativeptr, arrmem);
        Module.stackRestore(stack);
      }
    }, {
      key: "setCameraLookAt",
      value: function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ) {
        Core.SetCameraLookAt(this.nativeptr, positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
      }
    }, {
      key: "setCameraLookAtFromVector",
      value: function setCameraLookAtFromVector(position, target, upvec) {
        upvecVector = (typeof upvecVector === "undefined" ? "undefined" : _typeof(upvecVector)) === "object" ? upvecVector : {
          x: 0,
          y: 1,
          z: 0
        };
        Core.SetCameraLookAt(this.nativeptr, position.x, position.y, position.z, target.x, target.y, target.z, upvec.x, upvec.y, upvec.z);
      }
    }, {
      key: "loadEffect",
      value: function loadEffect(data) {
        var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
        var onload = arguments[2];
        var onerror = arguments[3];
        var redirect = arguments[4];
        this._makeContextCurrent();
        var effect = new EffekseerEffect(this);
        if (typeof scale === "function") {
          console.log("Error : second arguments is number from version 1.5");
          effect.scale = 1.0;
          effect.onload = scale;
          effect.onerror = onload;
          effect.redirect = redirect;
        } else {
          effect.scale = scale;
          effect.onload = onload;
          effect.onerror = onerror;
          effect.redirect = redirect;
        }
        if (typeof data === "string") {
          var dirIndex = data.lastIndexOf("/");
          effect.baseDir = dirIndex >= 0 ? data.slice(0, dirIndex + 1) : "";
          _loadBinFile(data, function (buffer) {
            effect._load(buffer);
          }, effect.onerror);
        } else if (data instanceof ArrayBuffer) {
          var buffer = data;
          effect._load(buffer);
        }
        return effect;
      }
    }, {
      key: "loadEffectPackage",
      value: function loadEffectPackage(path, Unzip) {
        var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.0;
        var onload = arguments[3];
        var onerror = arguments[4];
        if (Unzip == null) this._makeContextCurrent();
        var effect = new EffekseerEffect(this);
        effect.scale = scale;
        effect.onload = onload;
        effect.onerror = onerror;
        if (typeof path === "string") {
          var dirIndex = path.lastIndexOf("/");
          effect.baseDir = dirIndex >= 0 ? path.slice(0, dirIndex + 1) : "";
          _loadBinFile(path, function (buffer) {
            effect._loadFromPackage(buffer, Unzip);
          }, effect.onerror);
        } else if (path instanceof ArrayBuffer) {
          var buffer = path;
          effect._loadFromPackage(buffer, Unzip);
        }
        return effect;
      }
    }, {
      key: "releaseEffect",
      value: function releaseEffect(effect) {
        this._makeContextCurrent();
        if (effect == null) {
          console.warn("the effect is null.");
          return;
        }
        if (!effect.isLoaded) {
          console.warn("the effect has not be loaded yet.");
          return;
        }
        if (effect.nativeptr == null) {
          console.warn("the effect has been released.");
          return;
        }
        Core.ReleaseEffect(this.nativeptr, effect.nativeptr);
        effect.nativeptr = null;
      }
    }, {
      key: "play",
      value: function play(effect, v_x_26248, v_y_26249, v_z_26250) {
        if (!effect || !effect.isLoaded) {
          return null;
        }
        if (v_x_26248 === undefined) v_x_26248 = 0;
        if (v_y_26249 === undefined) v_y_26249 = 0;
        if (v_z_26250 === undefined) v_z_26250 = 0;
        var handle = Core.PlayEffect(this.nativeptr, effect.nativeptr, v_x_26248, v_y_26249, v_z_26250);
        return handle >= 0 ? new EffekseerHandle(this, handle) : null;
      }
    }, {
      key: "stopAll",
      value: function stopAll() {
        Core.StopAllEffects(this.nativeptr);
      }
    }, {
      key: "setResourceLoader",
      value: function setResourceLoader(loader) {
        _loadResource = loader;
      }
    }, {
      key: "getRestInstancesCount",
      value: function getRestInstancesCount() {
        return Core.GetRestInstancesCount(this.nativeptr);
      }
    }, {
      key: "getUpdateTime",
      value: function getUpdateTime() {
        return Core.GetUpdateTime(this.nativeptr);
      }
    }, {
      key: "getDrawTime",
      value: function getDrawTime() {
        return Core.GetDrawTime(this.nativeptr);
      }
    }, {
      key: "isVertexArrayObjectSupported",
      value: function isVertexArrayObjectSupported() {
        return Core.IsVertexArrayObjectSupported(this.nativeptr);
      }
    }, {
      key: "setRestorationOfStatesFlag",
      value: function setRestorationOfStatesFlag(flag) {
        this._restorationOfStatesFlag = flag;
        Core.SetRestorationOfStatesFlag(this.nativeptr, flag);
      }
    }, {
      key: "captureBackground",
      value: function captureBackground(v_x_26251, v_y_26252, width, height) {
        return Core.CaptureBackground(this.nativeptr, v_x_26251, v_y_26252, width, height);
      }
    }, {
      key: "resetBackground",
      value: function resetBackground() {
        return Core.ResetBackground(this.nativeptr);
      }
    }]);
    return EffekseerContext;
  }();
  var Effekseer = function () {
    function Effekseer() {
      _classCallCheck(this, Effekseer);
    }
    _createClass(Effekseer, [{
      key: "initRuntime",
      value: function initRuntime(path, onload, onerror) {
        if (typeof effekseer_native === "undefined") {
          onload();
          return;
        }
        _onloadAssembly = onload;
        _onerrorAssembly = onerror;
        _initalize_wasm(path);
      }
    }, {
      key: "createContext",
      value: function createContext() {
        if (!_is_runtime_initialized) {
          return null;
        }
        return new EffekseerContext();
      }
    }, {
      key: "releaseContext",
      value: function releaseContext(context) {
        if (context.contextStates) {
          context.contextStates.release();
        }
        if (context._gl) {
          context._gl = null;
        }
        if (context.nativeptr == null) {
          return;
        }
        Core.Terminate(context.nativeptr);
        context.nativeptr = null;
      }
    }, {
      key: "setLogEnabled",
      value: function setLogEnabled(flag) {
        Core.SetLogEnabled(flag);
      }
    }, {
      key: "setImageCrossOrigin",
      value: function setImageCrossOrigin(crossOrigin) {
        _imageCrossOrigin = crossOrigin;
      }
    }, {
      key: "init",
      value: function init(webglContext, settings) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext = new EffekseerContext();
        this.defaultContext.init(webglContext, settings);
      }
    }, {
      key: "update",
      value: function update(deltaFrames) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.update(deltaFrames);
      }
    }, {
      key: "beginUpdate",
      value: function beginUpdate() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.beginUpdate();
      }
    }, {
      key: "endUpdate",
      value: function endUpdate() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.endUpdate();
      }
    }, {
      key: "updateHandle",
      value: function updateHandle(handle, deltaFrames) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.updateHandle(handle, deltaFrames);
      }
    }, {
      key: "draw",
      value: function draw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.draw();
      }
    }, {
      key: "beginDraw",
      value: function beginDraw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.beginDraw();
      }
    }, {
      key: "endDraw",
      value: function endDraw() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.endDraw();
      }
    }, {
      key: "drawHandle",
      value: function drawHandle(handle) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.drawHandle(handle);
      }
    }, {
      key: "setProjectionMatrix",
      value: function setProjectionMatrix(matrixArray) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setProjectionMatrix(matrixArray);
      }
    }, {
      key: "setProjectionPerspective",
      value: function setProjectionPerspective(v_fov_26253, aspect, near, v_far_26254) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.SetProjectionPerspective(v_fov_26253, aspect, near, v_far_26254);
      }
    }, {
      key: "setProjectionOrthographic",
      value: function setProjectionOrthographic(width, height, near, v_far_26255) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setProjectionOrthographic(width, height, near, v_far_26255);
      }
    }, {
      key: "setCameraMatrix",
      value: function setCameraMatrix(matrixArray) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraMatrix(matrixArray);
      }
    }, {
      key: "setCameraLookAt",
      value: function setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraLookAt(positionX, positionY, positionZ, targetX, targetY, targetZ, upvecX, upvecY, upvecZ);
      }
    }, {
      key: "setCameraLookAtFromVector",
      value: function setCameraLookAtFromVector(position, target, upvec) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setCameraLookAtFromVector(position, target, upvec);
      }
    }, {
      key: "loadEffect",
      value: function loadEffect(path) {
        var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1.0;
        var onload = arguments[2];
        var onerror = arguments[3];
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.loadEffect(path, scale, onload, onerror);
      }
    }, {
      key: "releaseEffect",
      value: function releaseEffect(effect) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.releaseEffect(effect);
      }
    }, {
      key: "play",
      value: function play(effect, v_x_26256, v_y_26257, v_z_26258) {
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.play(effect, v_x_26256, v_y_26257, v_z_26258);
      }
    }, {
      key: "stopAll",
      value: function stopAll() {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.stopAll();
      }
    }, {
      key: "setResourceLoader",
      value: function setResourceLoader(loader) {
        console.warn('deprecated : please use through createContext.');
        this.defaultContext.setResourceLoader(loader);
      }
    }, {
      key: "isVertexArrayObjectSupported",
      value: function isVertexArrayObjectSupported() {
        console.warn('deprecated : please use through createContext.');
        return this.defaultContext.isVertexArrayObjectSupported();
      }
    }]);
    return Effekseer;
  }();
  return new Effekseer();
}();