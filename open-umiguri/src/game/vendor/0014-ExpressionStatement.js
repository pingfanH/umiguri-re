// vendor: ExpressionStatement
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

!function () {
  class v_e_26433 extends THREE.Loader {
    constructor(v_e_26478) {
      super(v_e_26478), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (v_e_26479) {
        return new v_s_26438(v_e_26479);
      }), this.register(function (v_e_26480) {
        return new v_l_26444(v_e_26480);
      }), this.register(function (v_e_26481) {
        return new v_c_26445(v_e_26481);
      }), this.register(function (v_e_26482) {
        return new v_i_26439(v_e_26482);
      }), this.register(function (v_e_26483) {
        return new v_n_26440(v_e_26483);
      }), this.register(function (v_e_26484) {
        return new v_o_26441(v_e_26484);
      }), this.register(function (v_e_26485) {
        return new v_a_26442(v_e_26485);
      }), this.register(function (v_e_26486) {
        return new v_u_26443(v_e_26486);
      }), this.register(function (v_e_26487) {
        return new v_t_26436(v_e_26487);
      }), this.register(function (v_e_26488) {
        return new v_h_26446(v_e_26488);
      });
    }
    load(v_t_26489, v_r_26490, v_e_26491, v_s_26492) {
      const v_i_26493 = this;
      let v_n_26494;
      v_n_26494 = "" !== this.resourcePath ? this.resourcePath : "" !== this.path ? this.path : THREE.LoaderUtils.extractUrlBase(v_t_26489), this.manager.itemStart(v_t_26489);
      function v_o_26495(v_e_26497) {
        v_s_26492 ? v_s_26492(v_e_26497) : console.error(v_e_26497), v_i_26493.manager.itemError(v_t_26489), v_i_26493.manager.itemEnd(v_t_26489);
      }
      var v_a_26496 = new THREE.FileLoader(this.manager);
      v_a_26496.setPath(this.path), v_a_26496.setResponseType("arraybuffer"), v_a_26496.setRequestHeader(this.requestHeader), v_a_26496.setWithCredentials(this.withCredentials), v_a_26496.load(v_t_26489, function (v_e_26498) {
        try {
          v_i_26493.parse(v_e_26498, v_n_26494, function (v_e_26499) {
            v_r_26490(v_e_26499), v_i_26493.manager.itemEnd(v_t_26489);
          }, v_o_26495);
        } catch (v_e_26500) {
          v_o_26495(v_e_26500);
        }
      }, v_e_26491, v_o_26495);
    }
    setDRACOLoader(v_e_26501) {
      return this.dracoLoader = v_e_26501, this;
    }
    setDDSLoader() {
      throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(v_e_26502) {
      return this.ktx2Loader = v_e_26502, this;
    }
    setMeshoptDecoder(v_e_26503) {
      return this.meshoptDecoder = v_e_26503, this;
    }
    register(v_e_26504) {
      return -1 === this.pluginCallbacks.indexOf(v_e_26504) && this.pluginCallbacks.push(v_e_26504), this;
    }
    unregister(v_e_26505) {
      return -1 !== this.pluginCallbacks.indexOf(v_e_26505) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(v_e_26505), 1), this;
    }
    parse(v_e_26506, v_t_26507, v_r_26508, v_s_26509) {
      let v_i_26510;
      var v_n_26511 = {},
        v_o_26512 = {};
      if ("string" == typeof v_e_26506) v_i_26510 = v_e_26506;else if (THREE.LoaderUtils.decodeText(new Uint8Array(v_e_26506, 0, 4)) === v_d_26447) {
        try {
          v_n_26511[v_E_26435.KHR_BINARY_GLTF] = new v_T_26449(v_e_26506);
        } catch (v_e_26518) {
          return void (v_s_26509 && v_s_26509(v_e_26518));
        }
        v_i_26510 = v_n_26511[v_E_26435.KHR_BINARY_GLTF].content;
      } else v_i_26510 = THREE.LoaderUtils.decodeText(new Uint8Array(v_e_26506));
      var v_a_26513 = JSON.parse(v_i_26510);
      if (void 0 === v_a_26513.asset || v_a_26513.asset.version[0] < 2) v_s_26509 && v_s_26509(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));else {
        var v_u_26514 = new v_X_26474(v_a_26513, {
          path: v_t_26507 || this.resourcePath || "",
          crossOrigin: this.crossOrigin,
          requestHeader: this.requestHeader,
          manager: this.manager,
          ktx2Loader: this.ktx2Loader,
          meshoptDecoder: this.meshoptDecoder
        });
        v_u_26514.fileLoader.setRequestHeader(this.requestHeader);
        for (let v_e_26519 = 0; v_e_26519 < this.pluginCallbacks.length; v_e_26519++) {
          var v_l_26515 = this.pluginCallbacks[v_e_26519](v_u_26514);
          v_n_26511[(v_o_26512[v_l_26515.name] = v_l_26515).name] = !0;
        }
        if (v_a_26513.extensionsUsed) for (let v_e_26520 = 0; v_e_26520 < v_a_26513.extensionsUsed.length; ++v_e_26520) {
          var v_c_26516 = v_a_26513.extensionsUsed[v_e_26520],
            v_h_26517 = v_a_26513.extensionsRequired || [];
          switch (v_c_26516) {
            case v_E_26435.KHR_MATERIALS_UNLIT:
              v_n_26511[v_c_26516] = new v_f_26437();
              break;
            case v_E_26435.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
              v_n_26511[v_c_26516] = new v_U_26453();
              break;
            case v_E_26435.KHR_DRACO_MESH_COMPRESSION:
              v_n_26511[v_c_26516] = new v_R_26450(v_a_26513, this.dracoLoader);
              break;
            case v_E_26435.KHR_TEXTURE_TRANSFORM:
              v_n_26511[v_c_26516] = new v_m_26451();
              break;
            case v_E_26435.KHR_MESH_QUANTIZATION:
              v_n_26511[v_c_26516] = new v_G_26454();
              break;
            default:
              0 <= v_h_26517.indexOf(v_c_26516) && void 0 === v_o_26512[v_c_26516] && console.warn('THREE.GLTFLoader: Unknown extension "' + v_c_26516 + '".');
          }
        }
        v_u_26514.setExtensions(v_n_26511), v_u_26514.setPlugins(v_o_26512), v_u_26514.parse(v_r_26508, v_s_26509);
      }
    }
    parseAsync(v_r_26521, v_s_26522) {
      const v_i_26523 = this;
      return new Promise(function (v_e_26524, v_t_26525) {
        v_i_26523.parse(v_r_26521, v_s_26522, v_e_26524, v_t_26525);
      });
    }
  }
  function v_r_26526() {
    let v_r_26526 = {};
    return {
      get: function (v_e_26527) {
        return v_r_26526[v_e_26527];
      },
      add: function (v_e_26528, v_t_26529) {
        v_r_26526[v_e_26528] = v_t_26529;
      },
      remove: function (v_e_26530) {
        delete v_r_26526[v_e_26530];
      },
      removeAll: function () {
        v_r_26526 = {};
      }
    };
  }
  const v_E_26435 = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression"
  };
  class v_t_26436 {
    constructor(v_e_26531) {
      this.parser = v_e_26531, this.name = v_E_26435.KHR_LIGHTS_PUNCTUAL, this.cache = {
        refs: {},
        uses: {}
      };
    }
    _markDefs() {
      var v_r_26532 = this.parser,
        v_s_26533 = this.parser.json.nodes || [];
      for (let v_e_26535 = 0, v_t_26536 = v_s_26533.length; v_e_26535 < v_t_26536; v_e_26535++) {
        var v_i_26534 = v_s_26533[v_e_26535];
        v_i_26534.extensions && v_i_26534.extensions[this.name] && void 0 !== v_i_26534.extensions[this.name].light && v_r_26532._addNodeRef(this.cache, v_i_26534.extensions[this.name].light);
      }
    }
    _loadLight(v_t_26537) {
      var v_r_26538 = this.parser,
        v_s_26539 = "light:" + v_t_26537,
        v_i_26540 = v_r_26538.cache.get(v_s_26539);
      if (!v_i_26540) {
        var v_n_26541 = v_r_26538.json,
          v_o_26542 = ((v_n_26541.extensions && v_n_26541.extensions[this.name] || {}).lights || [])[v_t_26537];
        let v_e_26545;
        var v_a_26543 = new THREE.Color(16777215),
          v_u_26544 = (void 0 !== v_o_26542.color && v_a_26543.fromArray(v_o_26542.color), void 0 !== v_o_26542.range ? v_o_26542.range : 0);
        switch (v_o_26542.type) {
          case "directional":
            (v_e_26545 = new THREE.DirectionalLight(v_a_26543)).target.position.set(0, 0, -1), v_e_26545.add(v_e_26545.target);
            break;
          case "point":
            (v_e_26545 = new THREE.PointLight(v_a_26543)).distance = v_u_26544;
            break;
          case "spot":
            (v_e_26545 = new THREE.SpotLight(v_a_26543)).distance = v_u_26544, v_o_26542.spot = v_o_26542.spot || {}, v_o_26542.spot.innerConeAngle = void 0 !== v_o_26542.spot.innerConeAngle ? v_o_26542.spot.innerConeAngle : 0, v_o_26542.spot.outerConeAngle = void 0 !== v_o_26542.spot.outerConeAngle ? v_o_26542.spot.outerConeAngle : Math.PI / 4, v_e_26545.angle = v_o_26542.spot.outerConeAngle, v_e_26545.penumbra = 1 - v_o_26542.spot.innerConeAngle / v_o_26542.spot.outerConeAngle, v_e_26545.target.position.set(0, 0, -1), v_e_26545.add(v_e_26545.target);
            break;
          default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + v_o_26542.type);
        }
        v_e_26545.position.set(0, 0, 0), v_e_26545.decay = 2, void 0 !== v_o_26542.intensity && (v_e_26545.intensity = v_o_26542.intensity), v_e_26545.name = v_r_26538.createUniqueName(v_o_26542.name || "light_" + v_t_26537), v_i_26540 = Promise.resolve(v_e_26545), v_r_26538.cache.add(v_s_26539, v_i_26540);
      }
      return v_i_26540;
    }
    createNodeAttachment(v_e_26546) {
      const v_t_26547 = this,
        v_r_26548 = this.parser;
      v_e_26546 = v_r_26548.json.nodes[v_e_26546];
      const v_s_26549 = (v_e_26546.extensions && v_e_26546.extensions[this.name] || {}).light;
      return void 0 === v_s_26549 ? null : this._loadLight(v_s_26549).then(function (v_e_26550) {
        return v_r_26548._getNodeRef(v_t_26547.cache, v_s_26549, v_e_26550);
      });
    }
  }
  class v_f_26437 {
    constructor() {
      this.name = v_E_26435.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
      return THREE.MeshBasicMaterial;
    }
    extendParams(v_e_26551, v_t_26552, v_r_26553) {
      var v_s_26554,
        v_i_26555 = [],
        v_t_26552 = (v_e_26551.color = new THREE.Color(1, 1, 1), v_e_26551.opacity = 1, v_t_26552.pbrMetallicRoughness);
      return v_t_26552 && (Array.isArray(v_t_26552.baseColorFactor) && (v_s_26554 = v_t_26552.baseColorFactor, v_e_26551.color.fromArray(v_s_26554), v_e_26551.opacity = v_s_26554[3]), void 0 !== v_t_26552.baseColorTexture) && v_i_26555.push(v_r_26553.assignTexture(v_e_26551, "map", v_t_26552.baseColorTexture)), Promise.all(v_i_26555);
    }
  }
  class v_s_26438 {
    constructor(v_e_26556) {
      this.parser = v_e_26556, this.name = v_E_26435.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(v_e_26557) {
      v_e_26557 = this.parser.json.materials[v_e_26557];
      return v_e_26557.extensions && v_e_26557.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26558, v_t_26559) {
      var v_r_26560,
        v_s_26561 = this.parser,
        v_e_26558 = v_s_26561.json.materials[v_e_26558];
      return v_e_26558.extensions && v_e_26558.extensions[this.name] ? (v_r_26560 = [], void 0 !== (v_e_26558 = v_e_26558.extensions[this.name]).clearcoatFactor && (v_t_26559.clearcoat = v_e_26558.clearcoatFactor), void 0 !== v_e_26558.clearcoatTexture && v_r_26560.push(v_s_26561.assignTexture(v_t_26559, "clearcoatMap", v_e_26558.clearcoatTexture)), void 0 !== v_e_26558.clearcoatRoughnessFactor && (v_t_26559.clearcoatRoughness = v_e_26558.clearcoatRoughnessFactor), void 0 !== v_e_26558.clearcoatRoughnessTexture && v_r_26560.push(v_s_26561.assignTexture(v_t_26559, "clearcoatRoughnessMap", v_e_26558.clearcoatRoughnessTexture)), void 0 !== v_e_26558.clearcoatNormalTexture && (v_r_26560.push(v_s_26561.assignTexture(v_t_26559, "clearcoatNormalMap", v_e_26558.clearcoatNormalTexture)), void 0 !== v_e_26558.clearcoatNormalTexture.scale) && (v_s_26561 = v_e_26558.clearcoatNormalTexture.scale, v_t_26559.clearcoatNormalScale = new THREE.Vector2(v_s_26561, v_s_26561)), Promise.all(v_r_26560)) : Promise.resolve();
    }
  }
  class v_i_26439 {
    constructor(v_e_26562) {
      this.parser = v_e_26562, this.name = v_E_26435.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(v_e_26563) {
      v_e_26563 = this.parser.json.materials[v_e_26563];
      return v_e_26563.extensions && v_e_26563.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26564, v_t_26565) {
      var v_r_26566,
        v_s_26567 = this.parser,
        v_e_26564 = v_s_26567.json.materials[v_e_26564];
      return v_e_26564.extensions && v_e_26564.extensions[this.name] ? (v_r_26566 = [], v_t_26565.sheenColor = new THREE.Color(0, 0, 0), v_t_26565.sheenRoughness = 0, v_t_26565.sheen = 1, void 0 !== (v_e_26564 = v_e_26564.extensions[this.name]).sheenColorFactor && v_t_26565.sheenColor.fromArray(v_e_26564.sheenColorFactor), void 0 !== v_e_26564.sheenRoughnessFactor && (v_t_26565.sheenRoughness = v_e_26564.sheenRoughnessFactor), void 0 !== v_e_26564.sheenColorTexture && v_r_26566.push(v_s_26567.assignTexture(v_t_26565, "sheenColorMap", v_e_26564.sheenColorTexture)), void 0 !== v_e_26564.sheenRoughnessTexture && v_r_26566.push(v_s_26567.assignTexture(v_t_26565, "sheenRoughnessMap", v_e_26564.sheenRoughnessTexture)), Promise.all(v_r_26566)) : Promise.resolve();
    }
  }
  class v_n_26440 {
    constructor(v_e_26568) {
      this.parser = v_e_26568, this.name = v_E_26435.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(v_e_26569) {
      v_e_26569 = this.parser.json.materials[v_e_26569];
      return v_e_26569.extensions && v_e_26569.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26570, v_t_26571) {
      var v_r_26572,
        v_s_26573 = this.parser,
        v_e_26570 = v_s_26573.json.materials[v_e_26570];
      return v_e_26570.extensions && v_e_26570.extensions[this.name] ? (v_r_26572 = [], void 0 !== (v_e_26570 = v_e_26570.extensions[this.name]).transmissionFactor && (v_t_26571.transmission = v_e_26570.transmissionFactor), void 0 !== v_e_26570.transmissionTexture && v_r_26572.push(v_s_26573.assignTexture(v_t_26571, "transmissionMap", v_e_26570.transmissionTexture)), Promise.all(v_r_26572)) : Promise.resolve();
    }
  }
  class v_o_26441 {
    constructor(v_e_26574) {
      this.parser = v_e_26574, this.name = v_E_26435.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(v_e_26575) {
      v_e_26575 = this.parser.json.materials[v_e_26575];
      return v_e_26575.extensions && v_e_26575.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26576, v_t_26577) {
      var v_r_26578,
        v_s_26579 = this.parser,
        v_e_26576 = v_s_26579.json.materials[v_e_26576];
      return v_e_26576.extensions && v_e_26576.extensions[this.name] ? (v_r_26578 = [], v_e_26576 = v_e_26576.extensions[this.name], v_t_26577.thickness = void 0 !== v_e_26576.thicknessFactor ? v_e_26576.thicknessFactor : 0, void 0 !== v_e_26576.thicknessTexture && v_r_26578.push(v_s_26579.assignTexture(v_t_26577, "thicknessMap", v_e_26576.thicknessTexture)), v_t_26577.attenuationDistance = v_e_26576.attenuationDistance || 0, v_s_26579 = v_e_26576.attenuationColor || [1, 1, 1], v_t_26577.attenuationColor = new THREE.Color(v_s_26579[0], v_s_26579[1], v_s_26579[2]), Promise.all(v_r_26578)) : Promise.resolve();
    }
  }
  class v_a_26442 {
    constructor(v_e_26580) {
      this.parser = v_e_26580, this.name = v_E_26435.KHR_MATERIALS_IOR;
    }
    getMaterialType(v_e_26581) {
      v_e_26581 = this.parser.json.materials[v_e_26581];
      return v_e_26581.extensions && v_e_26581.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26582, v_t_26583) {
      var v_e_26582 = this.parser.json.materials[v_e_26582];
      return v_e_26582.extensions && v_e_26582.extensions[this.name] && (v_e_26582 = v_e_26582.extensions[this.name], v_t_26583.ior = void 0 !== v_e_26582.ior ? v_e_26582.ior : 1.5), Promise.resolve();
    }
  }
  class v_u_26443 {
    constructor(v_e_26584) {
      this.parser = v_e_26584, this.name = v_E_26435.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(v_e_26585) {
      v_e_26585 = this.parser.json.materials[v_e_26585];
      return v_e_26585.extensions && v_e_26585.extensions[this.name] ? THREE.MeshPhysicalMaterial : null;
    }
    extendMaterialParams(v_e_26586, v_t_26587) {
      var v_r_26588,
        v_s_26589,
        v_i_26590 = this.parser,
        v_e_26586 = v_i_26590.json.materials[v_e_26586];
      return v_e_26586.extensions && v_e_26586.extensions[this.name] ? (v_r_26588 = [], v_e_26586 = v_e_26586.extensions[this.name], v_t_26587.specularIntensity = void 0 !== v_e_26586.specularFactor ? v_e_26586.specularFactor : 1, void 0 !== v_e_26586.specularTexture && v_r_26588.push(v_i_26590.assignTexture(v_t_26587, "specularIntensityMap", v_e_26586.specularTexture)), v_s_26589 = v_e_26586.specularColorFactor || [1, 1, 1], v_t_26587.specularColor = new THREE.Color(v_s_26589[0], v_s_26589[1], v_s_26589[2]), void 0 !== v_e_26586.specularColorTexture && v_r_26588.push(v_i_26590.assignTexture(v_t_26587, "specularColorMap", v_e_26586.specularColorTexture).then(function (v_e_26591) {
        v_e_26591.encoding = THREE.sRGBEncoding;
      })), Promise.all(v_r_26588)) : Promise.resolve();
    }
  }
  class v_l_26444 {
    constructor(v_e_26592) {
      this.parser = v_e_26592, this.name = v_E_26435.KHR_TEXTURE_BASISU;
    }
    loadTexture(v_e_26593) {
      var v_t_26594 = this.parser,
        v_r_26595 = v_t_26594.json,
        v_s_26596 = v_r_26595.textures[v_e_26593];
      if (v_s_26596.extensions && v_s_26596.extensions[this.name]) {
        var v_s_26596 = v_s_26596.extensions[this.name],
          v_s_26596 = v_r_26595.images[v_s_26596.source],
          v_i_26597 = v_t_26594.options.ktx2Loader;
        if (v_i_26597) return v_t_26594.loadTextureImage(v_e_26593, v_s_26596, v_i_26597);
        if (v_r_26595.extensionsRequired && 0 <= v_r_26595.extensionsRequired.indexOf(this.name)) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      }
      return null;
    }
  }
  class v_c_26445 {
    constructor(v_e_26598) {
      this.parser = v_e_26598, this.name = v_E_26435.EXT_TEXTURE_WEBP, this.isSupported = null;
    }
    loadTexture(v_t_26599) {
      const v_r_26600 = this.name,
        v_s_26601 = this.parser,
        v_i_26602 = v_s_26601.json;
      var v_e_26603 = v_i_26602.textures[v_t_26599];
      if (!v_e_26603.extensions || !v_e_26603.extensions[v_r_26600]) return null;
      var v_e_26603 = v_e_26603.extensions[v_r_26600];
      const v_n_26604 = v_i_26602.images[v_e_26603.source];
      let v_o_26605 = v_s_26601.textureLoader;
      return v_n_26604.uri && null !== (v_e_26603 = v_s_26601.options.manager.getHandler(v_n_26604.uri)) && (v_o_26605 = v_e_26603), this.detectSupport().then(function (v_e_26606) {
        if (v_e_26606) return v_s_26601.loadTextureImage(v_t_26599, v_n_26604, v_o_26605);
        if (v_i_26602.extensionsRequired && 0 <= v_i_26602.extensionsRequired.indexOf(v_r_26600)) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
        return v_s_26601.loadTexture(v_t_26599);
      });
    }
    detectSupport() {
      return this.isSupported || (this.isSupported = new Promise(function (v_e_26607) {
        const v_t_26608 = new Image();
        v_t_26608.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", v_t_26608.onload = v_t_26608.onerror = function () {
          v_e_26607(1 === v_t_26608.height);
        };
      })), this.isSupported;
    }
  }
  class v_h_26446 {
    constructor(v_e_26609) {
      this.name = v_E_26435.EXT_MESHOPT_COMPRESSION, this.parser = v_e_26609;
    }
    loadBufferView(v_e_26610) {
      var v_t_26611 = this.parser.json,
        v_e_26610 = v_t_26611.bufferViews[v_e_26610];
      if (v_e_26610.extensions && v_e_26610.extensions[this.name]) {
        const v_o_26612 = v_e_26610.extensions[this.name];
        v_e_26610 = this.parser.getDependency("buffer", v_o_26612.buffer);
        const v_a_26613 = this.parser.options.meshoptDecoder;
        if (v_a_26613 && v_a_26613.supported) return Promise.all([v_e_26610, v_a_26613.ready]).then(function (v_e_26614) {
          var v_t_26615 = v_o_26612.byteOffset || 0,
            v_r_26616 = v_o_26612.byteLength || 0,
            v_s_26617 = v_o_26612.count,
            v_i_26618 = v_o_26612.byteStride,
            v_n_26619 = new ArrayBuffer(v_s_26617 * v_i_26618),
            v_e_26614 = new Uint8Array(v_e_26614[0], v_t_26615, v_r_26616);
          return v_a_26613.decodeGltfBuffer(new Uint8Array(v_n_26619), v_s_26617, v_i_26618, v_e_26614, v_o_26612.mode, v_o_26612.filter), v_n_26619;
        });
        if (v_t_26611.extensionsRequired && 0 <= v_t_26611.extensionsRequired.indexOf(this.name)) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
      }
      return null;
    }
  }
  const v_d_26447 = "glTF",
    v_v_26448 = {
      JSON: 1313821514,
      BIN: 5130562
    };
  class v_T_26449 {
    constructor(v_e_26620) {
      this.name = v_E_26435.KHR_BINARY_GLTF, this.content = null, this.body = null;
      var v_t_26621 = new DataView(v_e_26620, 0, 12);
      if (this.header = {
        magic: THREE.LoaderUtils.decodeText(new Uint8Array(v_e_26620.slice(0, 4))),
        version: v_t_26621.getUint32(4, !0),
        length: v_t_26621.getUint32(8, !0)
      }, this.header.magic !== v_d_26447) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
      if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
      var v_r_26622 = this.header.length - 12,
        v_s_26623 = new DataView(v_e_26620, 12);
      let v_i_26624 = 0;
      for (; v_i_26624 < v_r_26622;) {
        var v_n_26625,
          v_o_26626 = v_s_26623.getUint32(v_i_26624, !0),
          v_a_26627 = (v_i_26624 += 4, v_s_26623.getUint32(v_i_26624, !0));
        v_i_26624 += 4, v_a_26627 === v_v_26448.JSON ? (v_n_26625 = new Uint8Array(v_e_26620, 12 + v_i_26624, v_o_26626), this.content = THREE.LoaderUtils.decodeText(v_n_26625)) : v_a_26627 === v_v_26448.BIN && (v_n_26625 = 12 + v_i_26624, this.body = v_e_26620.slice(v_n_26625, v_n_26625 + v_o_26626)), v_i_26624 += v_o_26626;
      }
      if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
  }
  class v_R_26450 {
    constructor(v_e_26628, v_t_26629) {
      if (!v_t_26629) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
      this.name = v_E_26435.KHR_DRACO_MESH_COMPRESSION, this.json = v_e_26628, this.dracoLoader = v_t_26629, this.dracoLoader.preload();
    }
    decodePrimitive(v_e_26630, v_t_26631) {
      var v_r_26632 = this.json;
      const v_s_26633 = this.dracoLoader;
      var v_i_26634 = v_e_26630.extensions[this.name].bufferView,
        v_n_26635 = v_e_26630.extensions[this.name].attributes;
      const v_o_26636 = {},
        v_a_26637 = {},
        v_u_26638 = {};
      for (const v_f_26643 in v_n_26635) {
        var v_l_26639 = v_L_26463[v_f_26643] || v_f_26643.toLowerCase();
        v_o_26636[v_l_26639] = v_n_26635[v_f_26643];
      }
      for (const v_d_26644 in v_e_26630.attributes) {
        var v_c_26640,
          v_h_26641,
          v_E_26642 = v_L_26463[v_d_26644] || v_d_26644.toLowerCase();
        void 0 !== v_n_26635[v_d_26644] && (v_c_26640 = v_r_26632.accessors[v_e_26630.attributes[v_d_26644]], v_h_26641 = v_A_26459[v_c_26640.componentType], v_u_26638[v_E_26642] = v_h_26641, v_a_26637[v_E_26642] = !0 === v_c_26640.normalized);
      }
      return v_t_26631.getDependency("bufferView", v_i_26634).then(function (v_e_26645) {
        return new Promise(function (v_i_26646) {
          v_s_26633.decodeDracoFile(v_e_26645, function (v_e_26647) {
            for (const v_s_26650 in v_e_26647.attributes) {
              var v_t_26648 = v_e_26647.attributes[v_s_26650],
                v_r_26649 = v_a_26637[v_s_26650];
              void 0 !== v_r_26649 && (v_t_26648.normalized = v_r_26649);
            }
            v_i_26646(v_e_26647);
          }, v_o_26636, v_u_26638);
        });
      });
    }
  }
  class v_m_26451 {
    constructor() {
      this.name = v_E_26435.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(v_e_26651, v_t_26652) {
      return void 0 !== v_t_26652.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), void 0 === v_t_26652.offset && void 0 === v_t_26652.rotation && void 0 === v_t_26652.scale || (v_e_26651 = v_e_26651.clone(), void 0 !== v_t_26652.offset && v_e_26651.offset.fromArray(v_t_26652.offset), void 0 !== v_t_26652.rotation && (v_e_26651.rotation = v_t_26652.rotation), void 0 !== v_t_26652.scale && v_e_26651.repeat.fromArray(v_t_26652.scale), v_e_26651.needsUpdate = !0), v_e_26651;
    }
  }
  class v_p_26452 extends THREE.MeshStandardMaterial {
    constructor(v_e_26653) {
      super(), this.isGLTFSpecularGlossinessMaterial = !0;
      const v_r_26654 = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
        v_s_26655 = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
        v_i_26656 = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
        v_n_26657 = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
        v_o_26658 = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );", "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );", "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );", "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.", "material.roughness += geometryRoughness;", "material.roughness = min( material.roughness, 1.0 );", "material.specularColor = specularFactor;"].join("\n"),
        v_a_26659 = {
          specular: {
            value: new THREE.Color().setHex(16777215)
          },
          glossiness: {
            value: 1
          },
          specularMap: {
            value: null
          },
          glossinessMap: {
            value: null
          }
        };
      this._extraUniforms = v_a_26659, this.onBeforeCompile = function (v_e_26660) {
        for (const v_t_26661 in v_a_26659) v_e_26660.uniforms[v_t_26661] = v_a_26659[v_t_26661];
        v_e_26660.fragmentShader = v_e_26660.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", v_r_26654).replace("#include <metalnessmap_pars_fragment>", v_s_26655).replace("#include <roughnessmap_fragment>", v_i_26656).replace("#include <metalnessmap_fragment>", v_n_26657).replace("#include <lights_physical_fragment>", v_o_26658);
      }, Object.defineProperties(this, {
        specular: {
          get: function () {
            return v_a_26659.specular.value;
          },
          set: function (v_e_26662) {
            v_a_26659.specular.value = v_e_26662;
          }
        },
        specularMap: {
          get: function () {
            return v_a_26659.specularMap.value;
          },
          set: function (v_e_26663) {
            (v_a_26659.specularMap.value = v_e_26663) ? this.defines.USE_SPECULARMAP = "" : delete this.defines.USE_SPECULARMAP;
          }
        },
        glossiness: {
          get: function () {
            return v_a_26659.glossiness.value;
          },
          set: function (v_e_26664) {
            v_a_26659.glossiness.value = v_e_26664;
          }
        },
        glossinessMap: {
          get: function () {
            return v_a_26659.glossinessMap.value;
          },
          set: function (v_e_26665) {
            (v_a_26659.glossinessMap.value = v_e_26665) ? (this.defines.USE_GLOSSINESSMAP = "", this.defines.USE_UV = "") : (delete this.defines.USE_GLOSSINESSMAP, delete this.defines.USE_UV);
          }
        }
      }), delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this.setValues(v_e_26653);
    }
    copy(v_e_26666) {
      return super.copy(v_e_26666), this.specularMap = v_e_26666.specularMap, this.specular.copy(v_e_26666.specular), this.glossinessMap = v_e_26666.glossinessMap, this.glossiness = v_e_26666.glossiness, delete this.metalness, delete this.roughness, delete this.metalnessMap, delete this.roughnessMap, this;
    }
  }
  class v_U_26453 {
    constructor() {
      this.name = v_E_26435.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS, this.specularGlossinessParams = ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "normalMapType", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"];
    }
    getMaterialType() {
      return v_p_26452;
    }
    extendParams(v_e_26667, v_t_26668, v_r_26669) {
      var v_s_26670,
        v_t_26668 = v_t_26668.extensions[this.name],
        v_i_26671 = (v_e_26667.color = new THREE.Color(1, 1, 1), v_e_26667.opacity = 1, []);
      return Array.isArray(v_t_26668.diffuseFactor) && (v_s_26670 = v_t_26668.diffuseFactor, v_e_26667.color.fromArray(v_s_26670), v_e_26667.opacity = v_s_26670[3]), void 0 !== v_t_26668.diffuseTexture && v_i_26671.push(v_r_26669.assignTexture(v_e_26667, "map", v_t_26668.diffuseTexture)), v_e_26667.emissive = new THREE.Color(0, 0, 0), v_e_26667.glossiness = void 0 !== v_t_26668.glossinessFactor ? v_t_26668.glossinessFactor : 1, v_e_26667.specular = new THREE.Color(1, 1, 1), Array.isArray(v_t_26668.specularFactor) && v_e_26667.specular.fromArray(v_t_26668.specularFactor), void 0 !== v_t_26668.specularGlossinessTexture && (v_s_26670 = v_t_26668.specularGlossinessTexture, v_i_26671.push(v_r_26669.assignTexture(v_e_26667, "glossinessMap", v_s_26670)), v_i_26671.push(v_r_26669.assignTexture(v_e_26667, "specularMap", v_s_26670))), Promise.all(v_i_26671);
    }
    createMaterial(v_e_26672) {
      var v_t_26673 = new v_p_26452(v_e_26672);
      return v_t_26673.fog = !0, v_t_26673.color = v_e_26672.color, v_t_26673.map = void 0 === v_e_26672.map ? null : v_e_26672.map, v_t_26673.lightMap = null, v_t_26673.lightMapIntensity = 1, v_t_26673.aoMap = void 0 === v_e_26672.aoMap ? null : v_e_26672.aoMap, v_t_26673.aoMapIntensity = 1, v_t_26673.emissive = v_e_26672.emissive, v_t_26673.emissiveIntensity = 1, v_t_26673.emissiveMap = void 0 === v_e_26672.emissiveMap ? null : v_e_26672.emissiveMap, v_t_26673.bumpMap = void 0 === v_e_26672.bumpMap ? null : v_e_26672.bumpMap, v_t_26673.bumpScale = 1, v_t_26673.normalMap = void 0 === v_e_26672.normalMap ? null : v_e_26672.normalMap, v_t_26673.normalMapType = THREE.TangentSpaceNormalMap, v_e_26672.normalScale && (v_t_26673.normalScale = v_e_26672.normalScale), v_t_26673.displacementMap = null, v_t_26673.displacementScale = 1, v_t_26673.displacementBias = 0, v_t_26673.specularMap = void 0 === v_e_26672.specularMap ? null : v_e_26672.specularMap, v_t_26673.specular = v_e_26672.specular, v_t_26673.glossinessMap = void 0 === v_e_26672.glossinessMap ? null : v_e_26672.glossinessMap, v_t_26673.glossiness = v_e_26672.glossiness, v_t_26673.alphaMap = null, v_t_26673.envMap = void 0 === v_e_26672.envMap ? null : v_e_26672.envMap, v_t_26673.envMapIntensity = 1, v_t_26673.refractionRatio = .98, v_t_26673;
    }
  }
  class v_G_26454 {
    constructor() {
      this.name = v_E_26435.KHR_MESH_QUANTIZATION;
    }
  }
  class v_H_26455 extends THREE.Interpolant {
    constructor(v_e_26674, v_t_26675, v_r_26676, v_s_26677) {
      super(v_e_26674, v_t_26675, v_r_26676, v_s_26677);
    }
    copySampleValue_(v_e_26678) {
      var v_t_26679 = this.resultBuffer,
        v_r_26680 = this.sampleValues,
        v_s_26681 = this.valueSize,
        v_i_26682 = v_e_26678 * v_s_26681 * 3 + v_s_26681;
      for (let v_e_26683 = 0; v_e_26683 !== v_s_26681; v_e_26683++) v_t_26679[v_e_26683] = v_r_26680[v_i_26682 + v_e_26683];
      return v_t_26679;
    }
  }
  v_H_26455.prototype.beforeStart_ = v_H_26455.prototype.copySampleValue_, v_H_26455.prototype.afterEnd_ = v_H_26455.prototype.copySampleValue_, v_H_26455.prototype.interpolate_ = function (v_e_26684, v_t_26685, v_r_26686, v_s_26687) {
    var v_i_26688 = this.resultBuffer,
      v_n_26689 = this.sampleValues,
      v_o_26690 = this.valueSize,
      v_a_26691 = 2 * v_o_26690,
      v_u_26692 = 3 * v_o_26690,
      v_l_26693 = v_s_26687 - v_t_26685,
      v_s_26687 = (v_r_26686 - v_t_26685) / v_l_26693,
      v_r_26686 = v_s_26687 * v_s_26687,
      v_t_26685 = v_r_26686 * v_s_26687,
      v_c_26694 = v_e_26684 * v_u_26692,
      v_h_26695 = v_c_26694 - v_u_26692,
      v_E_26696 = -2 * v_t_26685 + 3 * v_r_26686,
      v_f_26697 = v_t_26685 - v_r_26686,
      v_d_26698 = 1 - v_E_26696,
      v_v_26699 = v_f_26697 - v_r_26686 + v_s_26687;
    for (let v_e_26704 = 0; v_e_26704 !== v_o_26690; v_e_26704++) {
      var v_T_26700 = v_n_26689[v_h_26695 + v_e_26704 + v_o_26690],
        v_R_26701 = v_n_26689[v_h_26695 + v_e_26704 + v_a_26691] * v_l_26693,
        v_m_26702 = v_n_26689[v_c_26694 + v_e_26704 + v_o_26690],
        v_p_26703 = v_n_26689[v_c_26694 + v_e_26704] * v_l_26693;
      v_i_26688[v_e_26704] = v_d_26698 * v_T_26700 + v_v_26699 * v_R_26701 + v_E_26696 * v_m_26702 + v_f_26697 * v_p_26703;
    }
    return v_i_26688;
  };
  const v_C_26456 = new THREE.Quaternion();
  class v_k_26457 extends v_H_26455 {
    interpolate_(v_e_26705, v_t_26706, v_r_26707, v_s_26708) {
      v_e_26705 = super.interpolate_(v_e_26705, v_t_26706, v_r_26707, v_s_26708);
      return v_C_26456.fromArray(v_e_26705).normalize().toArray(v_e_26705), v_e_26705;
    }
  }
  const v_w_26458 = {
      FLOAT: 5126,
      FLOAT_MAT3: 35675,
      FLOAT_MAT4: 35676,
      FLOAT_VEC2: 35664,
      FLOAT_VEC3: 35665,
      FLOAT_VEC4: 35666,
      LINEAR: 9729,
      REPEAT: 10497,
      SAMPLER_2D: 35678,
      POINTS: 0,
      LINES: 1,
      LINE_LOOP: 2,
      LINE_STRIP: 3,
      TRIANGLES: 4,
      TRIANGLE_STRIP: 5,
      TRIANGLE_FAN: 6,
      UNSIGNED_BYTE: 5121,
      UNSIGNED_SHORT: 5123
    },
    v_A_26459 = {
      5120: Int8Array,
      5121: Uint8Array,
      5122: Int16Array,
      5123: Uint16Array,
      5125: Uint32Array,
      5126: Float32Array
    },
    v___26460 = {
      9728: THREE.NearestFilter,
      9729: THREE.LinearFilter,
      9984: THREE.NearestMipmapNearestFilter,
      9985: THREE.LinearMipmapNearestFilter,
      9986: THREE.NearestMipmapLinearFilter,
      9987: THREE.LinearMipmapLinearFilter
    },
    v_g_26461 = {
      33071: THREE.ClampToEdgeWrapping,
      33648: THREE.MirroredRepeatWrapping,
      10497: THREE.RepeatWrapping
    },
    v_M_26462 = {
      SCALAR: 1,
      VEC2: 2,
      VEC3: 3,
      VEC4: 4,
      MAT2: 4,
      MAT3: 9,
      MAT4: 16
    },
    v_L_26463 = {
      POSITION: "position",
      NORMAL: "normal",
      TANGENT: "tangent",
      TEXCOORD_0: "uv",
      TEXCOORD_1: "uv2",
      COLOR_0: "color",
      WEIGHTS_0: "skinWeight",
      JOINTS_0: "skinIndex"
    },
    v_P_26464 = {
      scale: "scale",
      translation: "position",
      rotation: "quaternion",
      weights: "morphTargetInfluences"
    },
    v_K_26465 = {
      CUBICSPLINE: void 0,
      LINEAR: THREE.InterpolateLinear,
      STEP: THREE.InterpolateDiscrete
    },
    v_S_26466 = {
      OPAQUE: "OPAQUE",
      MASK: "MASK",
      BLEND: "BLEND"
    };
  function v_D_26467(v_e_26709) {
    return void 0 === v_e_26709.DefaultMaterial && (v_e_26709.DefaultMaterial = new THREE.MeshStandardMaterial({
      color: 16777215,
      emissive: 0,
      metalness: 1,
      roughness: 1,
      transparent: !1,
      depthTest: !0,
      side: THREE.FrontSide
    })), v_e_26709.DefaultMaterial;
  }
  function v_b_26468(v_e_26710, v_t_26711, v_r_26712) {
    for (const v_s_26713 in v_r_26712.extensions) void 0 === v_e_26710[v_s_26713] && (v_t_26711.userData.gltfExtensions = v_t_26711.userData.gltfExtensions || {}, v_t_26711.userData.gltfExtensions[v_s_26713] = v_r_26712.extensions[v_s_26713]);
  }
  function v_y_26469(v_e_26714, v_t_26715) {
    void 0 !== v_t_26715.extras && ("object" == typeof v_t_26715.extras ? Object.assign(v_e_26714.userData, v_t_26715.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + v_t_26715.extras));
  }
  function v_B_26470(v_r_26716, v_s_26717) {
    if (v_r_26716.updateMorphTargets(), void 0 !== v_s_26717.weights) for (let v_e_26719 = 0, v_t_26720 = v_s_26717.weights.length; v_e_26719 < v_t_26720; v_e_26719++) v_r_26716.morphTargetInfluences[v_e_26719] = v_s_26717.weights[v_e_26719];
    if (v_s_26717.extras && Array.isArray(v_s_26717.extras.targetNames)) {
      var v_i_26718 = v_s_26717.extras.targetNames;
      if (v_r_26716.morphTargetInfluences.length === v_i_26718.length) {
        v_r_26716.morphTargetDictionary = {};
        for (let v_e_26721 = 0, v_t_26722 = v_i_26718.length; v_e_26721 < v_t_26722; v_e_26721++) v_r_26716.morphTargetDictionary[v_i_26718[v_e_26721]] = v_e_26721;
      } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
  }
  function v_V_26471(v_e_26723) {
    var v_t_26724 = v_e_26723.extensions && v_e_26723.extensions[v_E_26435.KHR_DRACO_MESH_COMPRESSION];
    let v_r_26725;
    return v_r_26725 = v_t_26724 ? "draco:" + v_t_26724.bufferView + ":" + v_t_26724.indices + ":" + v_I_26472(v_t_26724.attributes) : v_e_26723.indices + ":" + v_I_26472(v_e_26723.attributes) + ":" + v_e_26723.mode;
  }
  function v_I_26472(v_r_26726) {
    let v_s_26727 = "";
    var v_i_26728 = Object.keys(v_r_26726).sort();
    for (let v_e_26729 = 0, v_t_26730 = v_i_26728.length; v_e_26729 < v_t_26730; v_e_26729++) v_s_26727 += v_i_26728[v_e_26729] + ":" + v_r_26726[v_i_26728[v_e_26729]] + ";";
    return v_s_26727;
  }
  function v_x_26473(v_e_26731) {
    switch (v_e_26731) {
      case Int8Array:
        return 1 / 127;
      case Uint8Array:
        return 1 / 255;
      case Int16Array:
        return 1 / 32767;
      case Uint16Array:
        return 1 / 65535;
      default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
  }
  class v_X_26474 {
    constructor(v_e_26732 = {}, v_t_26733 = {}) {
      this.json = v_e_26732, this.extensions = {}, this.plugins = {}, this.options = v_t_26733, this.cache = new v_r_26434(), this.associations = new Map(), this.primitiveCache = {}, this.meshCache = {
        refs: {},
        uses: {}
      }, this.cameraCache = {
        refs: {},
        uses: {}
      }, this.lightCache = {
        refs: {},
        uses: {}
      }, this.textureCache = {}, this.nodeNamesUsed = {}, "undefined" != typeof createImageBitmap && !1 === /Firefox|^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? this.textureLoader = new THREE.ImageBitmapLoader(this.options.manager) : this.textureLoader = new THREE.TextureLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new THREE.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0);
    }
    setExtensions(v_e_26734) {
      this.extensions = v_e_26734;
    }
    setPlugins(v_e_26735) {
      this.plugins = v_e_26735;
    }
    parse(v_r_26736, v_e_26737) {
      const v_s_26738 = this,
        v_i_26739 = this.json,
        v_n_26740 = this.extensions;
      this.cache.removeAll(), this._invokeAll(function (v_e_26741) {
        return v_e_26741._markDefs && v_e_26741._markDefs();
      }), Promise.all(this._invokeAll(function (v_e_26742) {
        return v_e_26742.beforeRoot && v_e_26742.beforeRoot();
      })).then(function () {
        return Promise.all([v_s_26738.getDependencies("scene"), v_s_26738.getDependencies("animation"), v_s_26738.getDependencies("camera")]);
      }).then(function (v_e_26743) {
        const v_t_26744 = {
          scene: v_e_26743[0][v_i_26739.scene || 0],
          scenes: v_e_26743[0],
          animations: v_e_26743[1],
          cameras: v_e_26743[2],
          asset: v_i_26739.asset,
          parser: v_s_26738,
          userData: {}
        };
        v_b_26468(v_n_26740, v_t_26744, v_i_26739), v_y_26469(v_t_26744, v_i_26739), Promise.all(v_s_26738._invokeAll(function (v_e_26745) {
          return v_e_26745.afterRoot && v_e_26745.afterRoot(v_t_26744);
        })).then(function () {
          v_r_26736(v_t_26744);
        });
      }).catch(v_e_26737);
    }
    _markDefs() {
      var v_r_26746 = this.json.nodes || [],
        v_s_26747 = this.json.skins || [],
        v_i_26748 = this.json.meshes || [];
      for (let v_e_26751 = 0, v_t_26752 = v_s_26747.length; v_e_26751 < v_t_26752; v_e_26751++) {
        var v_n_26749 = v_s_26747[v_e_26751].joints;
        for (let v_e_26753 = 0, v_t_26754 = v_n_26749.length; v_e_26753 < v_t_26754; v_e_26753++) v_r_26746[v_n_26749[v_e_26753]].isBone = !0;
      }
      for (let v_e_26755 = 0, v_t_26756 = v_r_26746.length; v_e_26755 < v_t_26756; v_e_26755++) {
        var v_o_26750 = v_r_26746[v_e_26755];
        void 0 !== v_o_26750.mesh && (this._addNodeRef(this.meshCache, v_o_26750.mesh), void 0 !== v_o_26750.skin) && (v_i_26748[v_o_26750.mesh].isSkinnedMesh = !0), void 0 !== v_o_26750.camera && this._addNodeRef(this.cameraCache, v_o_26750.camera);
      }
    }
    _addNodeRef(v_e_26757, v_t_26758) {
      void 0 !== v_t_26758 && (void 0 === v_e_26757.refs[v_t_26758] && (v_e_26757.refs[v_t_26758] = v_e_26757.uses[v_t_26758] = 0), v_e_26757.refs[v_t_26758]++);
    }
    _getNodeRef(v_e_26759, v_t_26760, v_r_26761) {
      if (v_e_26759.refs[v_t_26760] <= 1) return v_r_26761;
      var v_s_26762 = v_r_26761.clone();
      const v_n_26763 = (v_e_26764, v_t_26765) => {
        var v_r_26766,
          v_s_26767,
          v_i_26768 = this.associations.get(v_e_26764);
        null != v_i_26768 && this.associations.set(v_t_26765, v_i_26768);
        for ([v_r_26766, v_s_26767] of v_e_26764.children.entries()) v_n_26763(v_s_26767, v_t_26765.children[v_r_26766]);
      };
      return v_n_26763(v_r_26761, v_s_26762), v_s_26762.name += "_instance_" + v_e_26759.uses[v_t_26760]++, v_s_26762;
    }
    _invokeOne(v_t_26769) {
      var v_r_26770 = Object.values(this.plugins);
      v_r_26770.push(this);
      for (let v_e_26772 = 0; v_e_26772 < v_r_26770.length; v_e_26772++) {
        var v_s_26771 = v_t_26769(v_r_26770[v_e_26772]);
        if (v_s_26771) return v_s_26771;
      }
      return null;
    }
    _invokeAll(v_t_26773) {
      var v_r_26774 = Object.values(this.plugins),
        v_s_26775 = (v_r_26774.unshift(this), []);
      for (let v_e_26777 = 0; v_e_26777 < v_r_26774.length; v_e_26777++) {
        var v_i_26776 = v_t_26773(v_r_26774[v_e_26777]);
        v_i_26776 && v_s_26775.push(v_i_26776);
      }
      return v_s_26775;
    }
    getDependency(v_e_26778, v_t_26779) {
      var v_r_26780 = v_e_26778 + ":" + v_t_26779;
      let v_s_26781 = this.cache.get(v_r_26780);
      if (!v_s_26781) {
        switch (v_e_26778) {
          case "scene":
            v_s_26781 = this.loadScene(v_t_26779);
            break;
          case "node":
            v_s_26781 = this.loadNode(v_t_26779);
            break;
          case "mesh":
            v_s_26781 = this._invokeOne(function (v_e_26782) {
              return v_e_26782.loadMesh && v_e_26782.loadMesh(v_t_26779);
            });
            break;
          case "accessor":
            v_s_26781 = this.loadAccessor(v_t_26779);
            break;
          case "bufferView":
            v_s_26781 = this._invokeOne(function (v_e_26783) {
              return v_e_26783.loadBufferView && v_e_26783.loadBufferView(v_t_26779);
            });
            break;
          case "buffer":
            v_s_26781 = this.loadBuffer(v_t_26779);
            break;
          case "material":
            v_s_26781 = this._invokeOne(function (v_e_26784) {
              return v_e_26784.loadMaterial && v_e_26784.loadMaterial(v_t_26779);
            });
            break;
          case "texture":
            v_s_26781 = this._invokeOne(function (v_e_26785) {
              return v_e_26785.loadTexture && v_e_26785.loadTexture(v_t_26779);
            });
            break;
          case "skin":
            v_s_26781 = this.loadSkin(v_t_26779);
            break;
          case "animation":
            v_s_26781 = this.loadAnimation(v_t_26779);
            break;
          case "camera":
            v_s_26781 = this.loadCamera(v_t_26779);
            break;
          default:
            throw new Error("Unknown type: " + v_e_26778);
        }
        this.cache.add(v_r_26780, v_s_26781);
      }
      return v_s_26781;
    }
    getDependencies(v_r_26786) {
      let v_e_26787 = this.cache.get(v_r_26786);
      if (!v_e_26787) {
        const v_s_26789 = this;
        var v_t_26788 = this.json[v_r_26786 + ("mesh" === v_r_26786 ? "es" : "s")] || [];
        v_e_26787 = Promise.all(v_t_26788.map(function (v_e_26790, v_t_26791) {
          return v_s_26789.getDependency(v_r_26786, v_t_26791);
        })), this.cache.add(v_r_26786, v_e_26787);
      }
      return v_e_26787;
    }
    loadBuffer(v_e_26792) {
      const v_r_26793 = this.json.buffers[v_e_26792],
        v_s_26794 = this.fileLoader;
      if (v_r_26793.type && "arraybuffer" !== v_r_26793.type) throw new Error("THREE.GLTFLoader: " + v_r_26793.type + " buffer type is not supported.");
      if (void 0 === v_r_26793.uri && 0 === v_e_26792) return Promise.resolve(this.extensions[v_E_26435.KHR_BINARY_GLTF].body);
      const v_i_26795 = this.options;
      return new Promise(function (v_e_26796, v_t_26797) {
        v_s_26794.load(THREE.LoaderUtils.resolveURL(v_r_26793.uri, v_i_26795.path), v_e_26796, void 0, function () {
          v_t_26797(new Error('THREE.GLTFLoader: Failed to load buffer "' + v_r_26793.uri + '".'));
        });
      });
    }
    loadBufferView(v_e_26798) {
      const v_s_26799 = this.json.bufferViews[v_e_26798];
      return this.getDependency("buffer", v_s_26799.buffer).then(function (v_e_26800) {
        var v_t_26801 = v_s_26799.byteLength || 0,
          v_r_26802 = v_s_26799.byteOffset || 0;
        return v_e_26800.slice(v_r_26802, v_r_26802 + v_t_26801);
      });
    }
    loadAccessor(v_e_26803) {
      const v_v_26804 = this,
        v_T_26805 = this.json,
        v_R_26806 = this.json.accessors[v_e_26803];
      return void 0 === v_R_26806.bufferView && void 0 === v_R_26806.sparse ? Promise.resolve(null) : (v_e_26803 = [], void 0 !== v_R_26806.bufferView ? v_e_26803.push(this.getDependency("bufferView", v_R_26806.bufferView)) : v_e_26803.push(null), void 0 !== v_R_26806.sparse && (v_e_26803.push(this.getDependency("bufferView", v_R_26806.sparse.indices.bufferView)), v_e_26803.push(this.getDependency("bufferView", v_R_26806.sparse.values.bufferView))), Promise.all(v_e_26803).then(function (v_e_26807) {
        var v_t_26808 = v_e_26807[0],
          v_r_26809 = v_M_26462[v_R_26806.type],
          v_s_26810 = v_A_26459[v_R_26806.componentType],
          v_i_26811 = v_s_26810.BYTES_PER_ELEMENT,
          v_n_26812 = v_i_26811 * v_r_26809,
          v_o_26813 = v_R_26806.byteOffset || 0,
          v_a_26814 = void 0 !== v_R_26806.bufferView ? v_T_26805.bufferViews[v_R_26806.bufferView].byteStride : void 0,
          v_u_26815 = !0 === v_R_26806.normalized;
        let v_l_26816, v_c_26817;
        if (v_a_26814 && v_a_26814 !== v_n_26812) {
          var v_n_26812 = Math.floor(v_o_26813 / v_a_26814),
            v_h_26818 = "InterleavedBuffer:" + v_R_26806.bufferView + ":" + v_R_26806.componentType + ":" + v_n_26812 + ":" + v_R_26806.count;
          let v_e_26822 = v_v_26804.cache.get(v_h_26818);
          v_e_26822 || (v_l_26816 = new v_s_26810(v_t_26808, v_n_26812 * v_a_26814, v_R_26806.count * v_a_26814 / v_i_26811), v_e_26822 = new THREE.InterleavedBuffer(v_l_26816, v_a_26814 / v_i_26811), v_v_26804.cache.add(v_h_26818, v_e_26822)), v_c_26817 = new THREE.InterleavedBufferAttribute(v_e_26822, v_r_26809, v_o_26813 % v_a_26814 / v_i_26811, v_u_26815);
        } else v_l_26816 = null === v_t_26808 ? new v_s_26810(v_R_26806.count * v_r_26809) : new v_s_26810(v_t_26808, v_o_26813, v_R_26806.count * v_r_26809), v_c_26817 = new THREE.BufferAttribute(v_l_26816, v_r_26809, v_u_26815);
        if (void 0 !== v_R_26806.sparse) {
          var v_n_26812 = v_M_26462.SCALAR,
            v_h_26818 = v_A_26459[v_R_26806.sparse.indices.componentType],
            v_a_26814 = v_R_26806.sparse.indices.byteOffset || 0,
            v_i_26811 = v_R_26806.sparse.values.byteOffset || 0,
            v_E_26819 = new v_h_26818(v_e_26807[1], v_a_26814, v_R_26806.sparse.count * v_n_26812),
            v_f_26820 = new v_s_26810(v_e_26807[2], v_i_26811, v_R_26806.sparse.count * v_r_26809);
          null !== v_t_26808 && (v_c_26817 = new THREE.BufferAttribute(v_c_26817.array.slice(), v_c_26817.itemSize, v_c_26817.normalized));
          for (let v_e_26823 = 0, v_t_26824 = v_E_26819.length; v_e_26823 < v_t_26824; v_e_26823++) {
            var v_d_26821 = v_E_26819[v_e_26823];
            if (v_c_26817.setX(v_d_26821, v_f_26820[v_e_26823 * v_r_26809]), 2 <= v_r_26809 && v_c_26817.setY(v_d_26821, v_f_26820[v_e_26823 * v_r_26809 + 1]), 3 <= v_r_26809 && v_c_26817.setZ(v_d_26821, v_f_26820[v_e_26823 * v_r_26809 + 2]), 4 <= v_r_26809 && v_c_26817.setW(v_d_26821, v_f_26820[v_e_26823 * v_r_26809 + 3]), 5 <= v_r_26809) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse THREE.BufferAttribute.");
          }
        }
        return v_c_26817;
      }));
    }
    loadTexture(v_e_26825) {
      var v_t_26826 = this.json,
        v_r_26827 = this.options,
        v_s_26828 = v_t_26826.textures[v_e_26825],
        v_t_26826 = v_t_26826.images[v_s_26828.source];
      let v_i_26829 = this.textureLoader;
      return v_t_26826.uri && null !== (v_s_26828 = v_r_26827.manager.getHandler(v_t_26826.uri)) && (v_i_26829 = v_s_26828), this.loadTextureImage(v_e_26825, v_t_26826, v_i_26829);
    }
    loadTextureImage(v_r_26830, v_t_26831, v_i_26832) {
      const v_s_26833 = this,
        v_n_26834 = this.json,
        v_o_26835 = this.options,
        v_a_26836 = v_n_26834.textures[v_r_26830];
      var v_e_26837 = (v_t_26831.uri || v_t_26831.bufferView) + ":" + v_a_26836.sampler;
      if (this.textureCache[v_e_26837]) return this.textureCache[v_e_26837];
      const v_u_26838 = self.URL || self.webkitURL;
      let v_l_26839 = v_t_26831.uri || "",
        v_c_26840 = !1;
      if (void 0 !== v_t_26831.bufferView) v_l_26839 = v_s_26833.getDependency("bufferView", v_t_26831.bufferView).then(function (v_e_26842) {
        v_c_26840 = !0;
        v_e_26842 = new Blob([v_e_26842], {
          type: v_t_26831.mimeType
        });
        return v_l_26839 = v_u_26838.createObjectURL(v_e_26842);
      });else if (void 0 === v_t_26831.uri) throw new Error("THREE.GLTFLoader: Image " + v_r_26830 + " is missing URI and bufferView");
      var v_h_26841 = Promise.resolve(v_l_26839).then(function (v_s_26843) {
        return new Promise(function (v_t_26844, v_e_26845) {
          let v_r_26846 = v_t_26844;
          !0 === v_i_26832.isImageBitmapLoader && (v_r_26846 = function (v_e_26847) {
            v_e_26847 = new THREE.Texture(v_e_26847);
            v_e_26847.needsUpdate = !0, v_t_26844(v_e_26847);
          }), v_i_26832.load(THREE.LoaderUtils.resolveURL(v_s_26843, v_o_26835.path), v_r_26846, void 0, v_e_26845);
        });
      }).then(function (v_e_26848) {
        !0 === v_c_26840 && v_u_26838.revokeObjectURL(v_l_26839), v_e_26848.flipY = !1, v_a_26836.name && (v_e_26848.name = v_a_26836.name);
        var v_t_26849 = (v_n_26834.samplers || {})[v_a_26836.sampler] || {};
        return v_e_26848.magFilter = v___26460[v_t_26849.magFilter] || THREE.LinearFilter, v_e_26848.minFilter = v___26460[v_t_26849.minFilter] || THREE.LinearMipmapLinearFilter, v_e_26848.wrapS = v_g_26461[v_t_26849.wrapS] || THREE.RepeatWrapping, v_e_26848.wrapT = v_g_26461[v_t_26849.wrapT] || THREE.RepeatWrapping, v_s_26833.associations.set(v_e_26848, {
          textures: v_r_26830
        }), v_e_26848;
      }).catch(function () {
        return console.error("THREE.GLTFLoader: Couldn't load texture", v_l_26839), null;
      });
      return this.textureCache[v_e_26837] = v_h_26841;
    }
    assignTexture(v_s_26850, v_i_26851, v_n_26852) {
      const v_o_26853 = this;
      return this.getDependency("texture", v_n_26852.index).then(function (v_e_26854) {
        var v_t_26855, v_r_26856;
        return void 0 === v_n_26852.texCoord || 0 == v_n_26852.texCoord || "aoMap" === v_i_26851 && 1 == v_n_26852.texCoord || console.warn("THREE.GLTFLoader: Custom UV set " + v_n_26852.texCoord + " for texture " + v_i_26851 + " not yet supported."), v_o_26853.extensions[v_E_26435.KHR_TEXTURE_TRANSFORM] && (v_t_26855 = void 0 !== v_n_26852.extensions ? v_n_26852.extensions[v_E_26435.KHR_TEXTURE_TRANSFORM] : void 0) && (v_r_26856 = v_o_26853.associations.get(v_e_26854), v_e_26854 = v_o_26853.extensions[v_E_26435.KHR_TEXTURE_TRANSFORM].extendTexture(v_e_26854, v_t_26855), v_o_26853.associations.set(v_e_26854, v_r_26856)), v_s_26850[v_i_26851] = v_e_26854;
      });
    }
    assignFinalMaterial(v_e_26857) {
      var v_t_26858 = v_e_26857.geometry;
      let v_r_26859 = v_e_26857.material;
      var v_s_26860 = void 0 === v_t_26858.attributes.tangent,
        v_i_26861 = void 0 !== v_t_26858.attributes.color,
        v_n_26862 = void 0 === v_t_26858.attributes.normal;
      if (v_e_26857.isPoints) {
        var v_o_26863 = "PointsMaterial:" + v_r_26859.uuid;
        let v_e_26864 = this.cache.get(v_o_26863);
        v_e_26864 || (v_e_26864 = new THREE.PointsMaterial(), THREE.Material.prototype.copy.call(v_e_26864, v_r_26859), v_e_26864.color.copy(v_r_26859.color), v_e_26864.map = v_r_26859.map, v_e_26864.sizeAttenuation = !1, this.cache.add(v_o_26863, v_e_26864)), v_r_26859 = v_e_26864;
      } else if (v_e_26857.isLine) {
        v_o_26863 = "LineBasicMaterial:" + v_r_26859.uuid;
        let v_e_26865 = this.cache.get(v_o_26863);
        v_e_26865 || (v_e_26865 = new THREE.LineBasicMaterial(), THREE.Material.prototype.copy.call(v_e_26865, v_r_26859), v_e_26865.color.copy(v_r_26859.color), this.cache.add(v_o_26863, v_e_26865)), v_r_26859 = v_e_26865;
      }
      if (v_s_26860 || v_i_26861 || v_n_26862) {
        let v_e_26866 = "ClonedMaterial:" + v_r_26859.uuid + ":",
          v_t_26867 = (v_r_26859.isGLTFSpecularGlossinessMaterial && (v_e_26866 += "specular-glossiness:"), v_s_26860 && (v_e_26866 += "derivative-tangents:"), v_i_26861 && (v_e_26866 += "vertex-colors:"), v_n_26862 && (v_e_26866 += "flat-shading:"), this.cache.get(v_e_26866));
        v_t_26867 || (v_t_26867 = v_r_26859.clone(), v_i_26861 && (v_t_26867.vertexColors = !0), v_n_26862 && (v_t_26867.flatShading = !0), v_s_26860 && (v_t_26867.normalScale && (v_t_26867.normalScale.y *= -1), v_t_26867.clearcoatNormalScale) && (v_t_26867.clearcoatNormalScale.y *= -1), this.cache.add(v_e_26866, v_t_26867), this.associations.set(v_t_26867, this.associations.get(v_r_26859))), v_r_26859 = v_t_26867;
      }
      v_r_26859.aoMap && void 0 === v_t_26858.attributes.uv2 && void 0 !== v_t_26858.attributes.uv && v_t_26858.setAttribute("uv2", v_t_26858.attributes.uv), v_e_26857.material = v_r_26859;
    }
    getMaterialType() {
      return THREE.MeshStandardMaterial;
    }
    loadMaterial(v_t_26868) {
      const v_r_26869 = this;
      var v_e_26870 = this.json;
      const v_s_26871 = this.extensions,
        v_i_26872 = v_e_26870.materials[v_t_26868];
      let v_n_26873;
      const v_o_26874 = {};
      var v_e_26870 = v_i_26872.extensions || {},
        v_a_26875 = [],
        v_u_26876 = (v_e_26870[v_E_26435.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS] ? (v_u_26876 = v_s_26871[v_E_26435.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS], v_n_26873 = v_u_26876.getMaterialType(), v_a_26875.push(v_u_26876.extendParams(v_o_26874, v_i_26872, v_r_26869))) : v_e_26870[v_E_26435.KHR_MATERIALS_UNLIT] ? (v_u_26876 = v_s_26871[v_E_26435.KHR_MATERIALS_UNLIT], v_n_26873 = v_u_26876.getMaterialType(), v_a_26875.push(v_u_26876.extendParams(v_o_26874, v_i_26872, v_r_26869))) : (v_e_26870 = v_i_26872.pbrMetallicRoughness || {}, v_o_26874.color = new THREE.Color(1, 1, 1), v_o_26874.opacity = 1, Array.isArray(v_e_26870.baseColorFactor) && (v_u_26876 = v_e_26870.baseColorFactor, v_o_26874.color.fromArray(v_u_26876), v_o_26874.opacity = v_u_26876[3]), void 0 !== v_e_26870.baseColorTexture && v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "map", v_e_26870.baseColorTexture)), v_o_26874.metalness = void 0 !== v_e_26870.metallicFactor ? v_e_26870.metallicFactor : 1, v_o_26874.roughness = void 0 !== v_e_26870.roughnessFactor ? v_e_26870.roughnessFactor : 1, void 0 !== v_e_26870.metallicRoughnessTexture && (v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "metalnessMap", v_e_26870.metallicRoughnessTexture)), v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "roughnessMap", v_e_26870.metallicRoughnessTexture))), v_n_26873 = this._invokeOne(function (v_e_26877) {
          return v_e_26877.getMaterialType && v_e_26877.getMaterialType(v_t_26868);
        }), v_a_26875.push(Promise.all(this._invokeAll(function (v_e_26878) {
          return v_e_26878.extendMaterialParams && v_e_26878.extendMaterialParams(v_t_26868, v_o_26874);
        })))), !0 === v_i_26872.doubleSided && (v_o_26874.side = THREE.DoubleSide), v_i_26872.alphaMode || v_S_26466.OPAQUE);
      return v_u_26876 === v_S_26466.BLEND ? (v_o_26874.transparent = !0, v_o_26874.depthWrite = !1) : (v_o_26874.transparent = !1, v_u_26876 === v_S_26466.MASK && (v_o_26874.alphaTest = void 0 !== v_i_26872.alphaCutoff ? v_i_26872.alphaCutoff : .5)), void 0 !== v_i_26872.normalTexture && v_n_26873 !== THREE.MeshBasicMaterial && (v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "normalMap", v_i_26872.normalTexture)), v_o_26874.normalScale = new THREE.Vector2(1, 1), void 0 !== v_i_26872.normalTexture.scale) && (v_e_26870 = v_i_26872.normalTexture.scale, v_o_26874.normalScale.set(v_e_26870, v_e_26870)), void 0 !== v_i_26872.occlusionTexture && v_n_26873 !== THREE.MeshBasicMaterial && (v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "aoMap", v_i_26872.occlusionTexture)), void 0 !== v_i_26872.occlusionTexture.strength) && (v_o_26874.aoMapIntensity = v_i_26872.occlusionTexture.strength), void 0 !== v_i_26872.emissiveFactor && v_n_26873 !== THREE.MeshBasicMaterial && (v_o_26874.emissive = new THREE.Color().fromArray(v_i_26872.emissiveFactor)), void 0 !== v_i_26872.emissiveTexture && v_n_26873 !== THREE.MeshBasicMaterial && v_a_26875.push(v_r_26869.assignTexture(v_o_26874, "emissiveMap", v_i_26872.emissiveTexture)), Promise.all(v_a_26875).then(function () {
        let v_e_26879;
        return v_e_26879 = v_n_26873 === v_p_26452 ? v_s_26871[v_E_26435.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(v_o_26874) : new v_n_26873(v_o_26874), v_i_26872.name && (v_e_26879.name = v_i_26872.name), v_e_26879.map && (v_e_26879.map.encoding = THREE.sRGBEncoding), v_e_26879.emissiveMap && (v_e_26879.emissiveMap.encoding = THREE.sRGBEncoding), v_y_26469(v_e_26879, v_i_26872), v_r_26869.associations.set(v_e_26879, {
          materials: v_t_26868
        }), v_i_26872.extensions && v_b_26468(v_s_26871, v_e_26879, v_i_26872), v_e_26879;
      });
    }
    createUniqueName(v_e_26880) {
      var v_t_26881 = THREE.PropertyBinding.sanitizeNodeName(v_e_26880 || "");
      let v_r_26882 = v_t_26881;
      for (let v_e_26883 = 1; this.nodeNamesUsed[v_r_26882]; ++v_e_26883) v_r_26882 = v_t_26881 + "_" + v_e_26883;
      return this.nodeNamesUsed[v_r_26882] = !0, v_r_26882;
    }
    loadGeometries(v_r_26884) {
      const v_s_26885 = this,
        v_i_26886 = this.extensions;
      var v_n_26887 = this.primitiveCache;
      var v_o_26888 = [];
      for (let v_e_26892 = 0, v_t_26893 = v_r_26884.length; v_e_26892 < v_t_26893; v_e_26892++) {
        var v_a_26889 = v_r_26884[v_e_26892],
          v_u_26890 = v_V_26471(v_a_26889),
          v_l_26891 = v_n_26887[v_u_26890];
        if (v_l_26891) v_o_26888.push(v_l_26891.promise);else {
          let v_e_26894;
          v_e_26894 = v_a_26889.extensions && v_a_26889.extensions[v_E_26435.KHR_DRACO_MESH_COMPRESSION] ? function (v_t_26895) {
            return v_i_26886[v_E_26435.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(v_t_26895, v_s_26885).then(function (v_e_26896) {
              return v_N_26476(v_e_26896, v_t_26895, v_s_26885);
            });
          }(v_a_26889) : v_N_26476(new THREE.BufferGeometry(), v_a_26889, v_s_26885), v_n_26887[v_u_26890] = {
            primitive: v_a_26889,
            promise: v_e_26894
          }, v_o_26888.push(v_e_26894);
        }
      }
      return Promise.all(v_o_26888);
    }
    loadMesh(v_l_26897) {
      const v_c_26898 = this;
      var v_e_26899 = this.json;
      const v_h_26900 = this.extensions,
        v_E_26901 = v_e_26899.meshes[v_l_26897],
        v_f_26902 = v_E_26901.primitives;
      var v_r_26903 = [];
      for (let v_e_26905 = 0, v_t_26906 = v_f_26902.length; v_e_26905 < v_t_26906; v_e_26905++) {
        var v_s_26904 = void 0 === v_f_26902[v_e_26905].material ? v_D_26467(this.cache) : this.getDependency("material", v_f_26902[v_e_26905].material);
        v_r_26903.push(v_s_26904);
      }
      return v_r_26903.push(v_c_26898.loadGeometries(v_f_26902)), Promise.all(v_r_26903).then(function (v_e_26907) {
        var v_r_26908 = v_e_26907.slice(0, v_e_26907.length - 1),
          v_s_26909 = v_e_26907[v_e_26907.length - 1],
          v_i_26910 = [];
        for (let v_t_26915 = 0, v_e_26916 = v_s_26909.length; v_t_26915 < v_e_26916; v_t_26915++) {
          var v_n_26911 = v_s_26909[v_t_26915],
            v_o_26912 = v_f_26902[v_t_26915];
          let v_e_26917;
          var v_a_26913 = v_r_26908[v_t_26915];
          if (v_o_26912.mode === v_w_26458.TRIANGLES || v_o_26912.mode === v_w_26458.TRIANGLE_STRIP || v_o_26912.mode === v_w_26458.TRIANGLE_FAN || void 0 === v_o_26912.mode) !0 !== (v_e_26917 = new (!0 === v_E_26901.isSkinnedMesh ? THREE.SkinnedMesh : THREE.Mesh)(v_n_26911, v_a_26913)).isSkinnedMesh || v_e_26917.geometry.attributes.skinWeight.normalized || v_e_26917.normalizeSkinWeights(), v_o_26912.mode === v_w_26458.TRIANGLE_STRIP ? v_e_26917.geometry = v_O_26477(v_e_26917.geometry, THREE.TriangleStripDrawMode) : v_o_26912.mode === v_w_26458.TRIANGLE_FAN && (v_e_26917.geometry = v_O_26477(v_e_26917.geometry, THREE.TriangleFanDrawMode));else if (v_o_26912.mode === v_w_26458.LINES) v_e_26917 = new THREE.LineSegments(v_n_26911, v_a_26913);else if (v_o_26912.mode === v_w_26458.LINE_STRIP) v_e_26917 = new THREE.Line(v_n_26911, v_a_26913);else if (v_o_26912.mode === v_w_26458.LINE_LOOP) v_e_26917 = new THREE.LineLoop(v_n_26911, v_a_26913);else {
            if (v_o_26912.mode !== v_w_26458.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + v_o_26912.mode);
            v_e_26917 = new THREE.Points(v_n_26911, v_a_26913);
          }
          0 < Object.keys(v_e_26917.geometry.morphAttributes).length && v_B_26470(v_e_26917, v_E_26901), v_e_26917.name = v_c_26898.createUniqueName(v_E_26901.name || "mesh_" + v_l_26897), v_y_26469(v_e_26917, v_E_26901), v_o_26912.extensions && v_b_26468(v_h_26900, v_e_26917, v_o_26912), v_c_26898.assignFinalMaterial(v_e_26917), v_i_26910.push(v_e_26917);
        }
        for (let v_e_26918 = 0, v_t_26919 = v_i_26910.length; v_e_26918 < v_t_26919; v_e_26918++) v_c_26898.associations.set(v_i_26910[v_e_26918], {
          meshes: v_l_26897,
          primitives: v_e_26918
        });
        if (1 === v_i_26910.length) return v_i_26910[0];
        var v_u_26914 = new THREE.Group();
        v_c_26898.associations.set(v_u_26914, {
          meshes: v_l_26897
        });
        for (let v_e_26920 = 0, v_t_26921 = v_i_26910.length; v_e_26920 < v_t_26921; v_e_26920++) v_u_26914.add(v_i_26910[v_e_26920]);
        return v_u_26914;
      });
    }
    loadCamera(v_e_26922) {
      let v_t_26923;
      var v_e_26922 = this.json.cameras[v_e_26922],
        v_r_26924 = v_e_26922[v_e_26922.type];
      if (v_r_26924) return "perspective" === v_e_26922.type ? v_t_26923 = new THREE.PerspectiveCamera(THREE.MathUtils.radToDeg(v_r_26924.yfov), v_r_26924.aspectRatio || 1, v_r_26924.znear || 1, v_r_26924.zfar || 2e6) : "orthographic" === v_e_26922.type && (v_t_26923 = new THREE.OrthographicCamera(-v_r_26924.xmag, v_r_26924.xmag, v_r_26924.ymag, -v_r_26924.ymag, v_r_26924.znear, v_r_26924.zfar)), v_e_26922.name && (v_t_26923.name = this.createUniqueName(v_e_26922.name)), v_y_26469(v_t_26923, v_e_26922), Promise.resolve(v_t_26923);
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
    }
    loadSkin(v_e_26925) {
      v_e_26925 = this.json.skins[v_e_26925];
      const v_t_26926 = {
        joints: v_e_26925.joints
      };
      return void 0 === v_e_26925.inverseBindMatrices ? Promise.resolve(v_t_26926) : this.getDependency("accessor", v_e_26925.inverseBindMatrices).then(function (v_e_26927) {
        return v_t_26926.inverseBindMatrices = v_e_26927, v_t_26926;
      });
    }
    loadAnimation(v_t_26928) {
      const v_p_26929 = this.json.animations[v_t_26928];
      var v_r_26930 = [],
        v_s_26931 = [],
        v_i_26932 = [],
        v_n_26933 = [],
        v_o_26934 = [];
      for (let v_e_26940 = 0, v_t_26941 = v_p_26929.channels.length; v_e_26940 < v_t_26941; v_e_26940++) {
        var v_a_26935 = v_p_26929.channels[v_e_26940],
          v_u_26936 = v_p_26929.samplers[v_a_26935.sampler],
          v_a_26935 = v_a_26935.target,
          v_l_26937 = void 0 !== v_a_26935.node ? v_a_26935.node : v_a_26935.id,
          v_c_26938 = void 0 !== v_p_26929.parameters ? v_p_26929.parameters[v_u_26936.input] : v_u_26936.input,
          v_h_26939 = void 0 !== v_p_26929.parameters ? v_p_26929.parameters[v_u_26936.output] : v_u_26936.output;
        v_r_26930.push(this.getDependency("node", v_l_26937)), v_s_26931.push(this.getDependency("accessor", v_c_26938)), v_i_26932.push(this.getDependency("accessor", v_h_26939)), v_n_26933.push(v_u_26936), v_o_26934.push(v_a_26935);
      }
      return Promise.all([Promise.all(v_r_26930), Promise.all(v_s_26931), Promise.all(v_i_26932), Promise.all(v_n_26933), Promise.all(v_o_26934)]).then(function (v_e_26942) {
        var v_r_26943 = v_e_26942[0],
          v_s_26944 = v_e_26942[1],
          v_i_26945 = v_e_26942[2],
          v_n_26946 = v_e_26942[3],
          v_o_26947 = v_e_26942[4],
          v_a_26948 = [];
        for (let v_e_26959 = 0, v_t_26960 = v_r_26943.length; v_e_26959 < v_t_26960; v_e_26959++) {
          var v_u_26949 = v_r_26943[v_e_26959],
            v_l_26950 = v_s_26944[v_e_26959],
            v_c_26951 = v_i_26945[v_e_26959],
            v_h_26952 = v_n_26946[v_e_26959],
            v_E_26953 = v_o_26947[v_e_26959];
          if (void 0 !== v_u_26949) {
            v_u_26949.updateMatrix(), v_u_26949.matrixAutoUpdate = !0;
            let v_r_26961;
            switch (v_P_26464[v_E_26953.path]) {
              case v_P_26464.weights:
                v_r_26961 = THREE.NumberKeyframeTrack;
                break;
              case v_P_26464.rotation:
                v_r_26961 = THREE.QuaternionKeyframeTrack;
                break;
              case v_P_26464.position:
              case v_P_26464.scale:
              default:
                v_r_26961 = THREE.VectorKeyframeTrack;
            }
            var v_f_26954 = v_u_26949.name || v_u_26949.uuid,
              v_d_26955 = void 0 !== v_h_26952.interpolation ? v_K_26465[v_h_26952.interpolation] : THREE.InterpolateLinear;
            const v_m_26962 = [];
            v_P_26464[v_E_26953.path] === v_P_26464.weights ? v_u_26949.traverse(function (v_e_26964) {
              v_e_26964.morphTargetInfluences && v_m_26962.push(v_e_26964.name || v_e_26964.uuid);
            }) : v_m_26962.push(v_f_26954);
            let v_s_26963 = v_c_26951.array;
            if (v_c_26951.normalized) {
              var v_v_26956 = v_x_26473(v_s_26963.constructor),
                v_T_26957 = new Float32Array(v_s_26963.length);
              for (let v_e_26965 = 0, v_t_26966 = v_s_26963.length; v_e_26965 < v_t_26966; v_e_26965++) v_T_26957[v_e_26965] = v_s_26963[v_e_26965] * v_v_26956;
              v_s_26963 = v_T_26957;
            }
            for (let v_e_26967 = 0, v_t_26968 = v_m_26962.length; v_e_26967 < v_t_26968; v_e_26967++) {
              var v_R_26958 = new v_r_26961(v_m_26962[v_e_26967] + "." + v_P_26464[v_E_26953.path], v_l_26950.array, v_s_26963, v_d_26955);
              "CUBICSPLINE" === v_h_26952.interpolation && (v_R_26958.createInterpolant = function (v_e_26969) {
                return new (this instanceof THREE.QuaternionKeyframeTrack ? v_k_26457 : v_H_26455)(this.times, this.values, this.getValueSize() / 3, v_e_26969);
              }, v_R_26958.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), v_a_26948.push(v_R_26958);
            }
          }
        }
        v_e_26942 = v_p_26929.name || "animation_" + v_t_26928;
        return new THREE.AnimationClip(v_e_26942, void 0, v_a_26948);
      });
    }
    createNodeMesh(v_e_26970) {
      var v_t_26971 = this.json;
      const v_r_26972 = this,
        v_s_26973 = v_t_26971.nodes[v_e_26970];
      return void 0 === v_s_26973.mesh ? null : v_r_26972.getDependency("mesh", v_s_26973.mesh).then(function (v_e_26974) {
        v_e_26974 = v_r_26972._getNodeRef(v_r_26972.meshCache, v_s_26973.mesh, v_e_26974);
        return void 0 !== v_s_26973.weights && v_e_26974.traverse(function (v_r_26975) {
          if (v_r_26975.isMesh) for (let v_e_26976 = 0, v_t_26977 = v_s_26973.weights.length; v_e_26976 < v_t_26977; v_e_26976++) v_r_26975.morphTargetInfluences[v_e_26976] = v_s_26973.weights[v_e_26976];
        }), v_e_26974;
      });
    }
    loadNode(v_i_26978) {
      var v_e_26979 = this.json;
      const v_t_26980 = this.extensions,
        v_n_26981 = this,
        v_o_26982 = v_e_26979.nodes[v_i_26978],
        v_a_26983 = v_o_26982.name ? v_n_26981.createUniqueName(v_o_26982.name) : "";
      return function () {
        const v_t_26984 = [];
        var v_e_26985 = v_n_26981._invokeOne(function (v_e_26986) {
          return v_e_26986.createNodeMesh && v_e_26986.createNodeMesh(v_i_26978);
        });
        return v_e_26985 && v_t_26984.push(v_e_26985), void 0 !== v_o_26982.camera && v_t_26984.push(v_n_26981.getDependency("camera", v_o_26982.camera).then(function (v_e_26987) {
          return v_n_26981._getNodeRef(v_n_26981.cameraCache, v_o_26982.camera, v_e_26987);
        })), v_n_26981._invokeAll(function (v_e_26988) {
          return v_e_26988.createNodeAttachment && v_e_26988.createNodeAttachment(v_i_26978);
        }).forEach(function (v_e_26989) {
          v_t_26984.push(v_e_26989);
        }), Promise.all(v_t_26984);
      }().then(function (v_r_26990) {
        let v_s_26991;
        if ((v_s_26991 = !0 === v_o_26982.isBone ? new THREE.Bone() : 1 < v_r_26990.length ? new THREE.Group() : 1 === v_r_26990.length ? v_r_26990[0] : new THREE.Object3D()) !== v_r_26990[0]) for (let v_e_26993 = 0, v_t_26994 = v_r_26990.length; v_e_26993 < v_t_26994; v_e_26993++) v_s_26991.add(v_r_26990[v_e_26993]);
        var v_e_26992;
        return v_o_26982.name && (v_s_26991.userData.name = v_o_26982.name, v_s_26991.name = v_a_26983), v_y_26469(v_s_26991, v_o_26982), v_o_26982.extensions && v_b_26468(v_t_26980, v_s_26991, v_o_26982), void 0 !== v_o_26982.matrix ? ((v_e_26992 = new THREE.Matrix4()).fromArray(v_o_26982.matrix), v_s_26991.applyMatrix4(v_e_26992)) : (void 0 !== v_o_26982.translation && v_s_26991.position.fromArray(v_o_26982.translation), void 0 !== v_o_26982.rotation && v_s_26991.quaternion.fromArray(v_o_26982.rotation), void 0 !== v_o_26982.scale && v_s_26991.scale.fromArray(v_o_26982.scale)), v_n_26981.associations.has(v_s_26991) || v_n_26981.associations.set(v_s_26991, {}), v_n_26981.associations.get(v_s_26991).nodes = v_i_26978, v_s_26991;
      });
    }
    loadScene(v_e_26995) {
      var v_r_26996 = this.json,
        v_t_26997 = this.extensions,
        v_e_26995 = this.json.scenes[v_e_26995];
      const v_i_26998 = this,
        v_s_26999 = new THREE.Group();
      v_e_26995.name && (v_s_26999.name = v_i_26998.createUniqueName(v_e_26995.name)), v_y_26469(v_s_26999, v_e_26995), v_e_26995.extensions && v_b_26468(v_t_26997, v_s_26999, v_e_26995);
      var v_n_27000 = v_e_26995.nodes || [],
        v_o_27001 = [];
      for (let v_e_27002 = 0, v_t_27003 = v_n_27000.length; v_e_27002 < v_t_27003; v_e_27002++) v_o_27001.push(v_F_26475(v_n_27000[v_e_27002], v_s_26999, v_r_26996, v_i_26998));
      return Promise.all(v_o_27001).then(function () {
        return v_i_26998.associations = (v_e_27004 => {
          const v_r_27005 = new Map();
          for (var [v_t_27006, v_s_27007] of v_i_26998.associations) (v_t_27006 instanceof THREE.Material || v_t_27006 instanceof THREE.Texture) && v_r_27005.set(v_t_27006, v_s_27007);
          return v_e_27004.traverse(v_e_27008 => {
            var v_t_27009 = v_i_26998.associations.get(v_e_27008);
            null != v_t_27009 && v_r_27005.set(v_e_27008, v_t_27009);
          }), v_r_27005;
        })(v_s_26999), v_s_26999;
      });
    }
  }
  function v_F_26475(v_e_27010, v_t_27011, v_o_27012, v_a_27013) {
    const v_u_27014 = v_o_27012.nodes[v_e_27010];
    return v_a_27013.getDependency("node", v_e_27010).then(function (v_e_27015) {
      if (void 0 === v_u_27014.skin) return v_e_27015;
      let v_o_27016;
      return v_a_27013.getDependency("skin", v_u_27014.skin).then(function (v_r_27017) {
        var v_s_27018 = [];
        for (let v_e_27019 = 0, v_t_27020 = (v_o_27016 = v_r_27017).joints.length; v_e_27019 < v_t_27020; v_e_27019++) v_s_27018.push(v_a_27013.getDependency("node", v_o_27016.joints[v_e_27019]));
        return Promise.all(v_s_27018);
      }).then(function (v_n_27021) {
        return v_e_27015.traverse(function (v_e_27022) {
          if (v_e_27022.isMesh) {
            var v_r_27023 = [],
              v_s_27024 = [];
            for (let v_e_27026 = 0, v_t_27027 = v_n_27021.length; v_e_27026 < v_t_27027; v_e_27026++) {
              var v_i_27025 = v_n_27021[v_e_27026];
              v_i_27025 ? (v_r_27023.push(v_i_27025), v_i_27025 = new THREE.Matrix4(), void 0 !== v_o_27016.inverseBindMatrices && v_i_27025.fromArray(v_o_27016.inverseBindMatrices.array, 16 * v_e_27026), v_s_27024.push(v_i_27025)) : console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', v_o_27016.joints[v_e_27026]);
            }
            v_e_27022.bind(new THREE.Skeleton(v_r_27023, v_s_27024), v_e_27022.matrixWorld);
          }
        }), v_e_27015;
      });
    }).then(function (v_r_27028) {
      v_t_27011.add(v_r_27028);
      var v_s_27029 = [];
      if (v_u_27014.children) {
        var v_i_27030 = v_u_27014.children;
        for (let v_e_27032 = 0, v_t_27033 = v_i_27030.length; v_e_27032 < v_t_27033; v_e_27032++) {
          var v_n_27031 = v_i_27030[v_e_27032];
          v_s_27029.push(v_F_26475(v_n_27031, v_r_27028, v_o_27012, v_a_27013));
        }
      }
      return Promise.all(v_s_27029);
    });
  }
  function v_N_26476(v_E_27034, v_e_27035, v_f_27036) {
    var v_t_27037 = v_e_27035.attributes,
      v_r_27038 = [];
    for (const v_p_27053 in v_t_27037) {
      var v_s_27039 = v_L_26463[v_p_27053] || v_p_27053.toLowerCase();
      v_s_27039 in v_E_27034.attributes || v_r_27038.push(function (v_e_27054, v_t_27055) {
        return v_f_27036.getDependency("accessor", v_e_27054).then(function (v_e_27056) {
          v_E_27034.setAttribute(v_t_27055, v_e_27056);
        });
      }(v_t_27037[v_p_27053], v_s_27039));
    }
    void 0 === v_e_27035.indices || v_E_27034.index || (v_i_27040 = v_f_27036.getDependency("accessor", v_e_27035.indices).then(function (v_e_27057) {
      v_E_27034.setIndex(v_e_27057);
    }), v_r_27038.push(v_i_27040)), v_y_26469(v_E_27034, v_e_27035);
    var v_i_27040 = v_E_27034,
      v_n_27041 = v_e_27035,
      v_o_27042 = v_f_27036,
      v_a_27043 = v_n_27041.attributes,
      v_u_27044 = new THREE.Box3();
    if (void 0 !== v_a_27043.POSITION) {
      var v_a_27043 = v_o_27042.json.accessors[v_a_27043.POSITION],
        v_l_27045 = v_a_27043.min,
        v_c_27046 = v_a_27043.max;
      if (void 0 === v_l_27045 || void 0 === v_c_27046) console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");else {
        v_u_27044.set(new THREE.Vector3(v_l_27045[0], v_l_27045[1], v_l_27045[2]), new THREE.Vector3(v_c_27046[0], v_c_27046[1], v_c_27046[2])), v_a_27043.normalized && (v_l_27045 = v_x_26473(v_A_26459[v_a_27043.componentType]), v_u_27044.min.multiplyScalar(v_l_27045), v_u_27044.max.multiplyScalar(v_l_27045));
        var v_h_27047 = v_n_27041.targets;
        if (void 0 !== v_h_27047) {
          var v_d_27048 = new THREE.Vector3(),
            v_v_27049 = new THREE.Vector3();
          for (let v_e_27058 = 0, v_t_27059 = v_h_27047.length; v_e_27058 < v_t_27059; v_e_27058++) {
            var v_T_27050,
              v_R_27051,
              v_m_27052 = v_h_27047[v_e_27058];
            void 0 !== v_m_27052.POSITION && (v_R_27051 = (v_m_27052 = v_o_27042.json.accessors[v_m_27052.POSITION]).min, v_T_27050 = v_m_27052.max, void 0 !== v_R_27051 && void 0 !== v_T_27050 ? (v_v_27049.setX(Math.max(Math.abs(v_R_27051[0]), Math.abs(v_T_27050[0]))), v_v_27049.setY(Math.max(Math.abs(v_R_27051[1]), Math.abs(v_T_27050[1]))), v_v_27049.setZ(Math.max(Math.abs(v_R_27051[2]), Math.abs(v_T_27050[2]))), v_m_27052.normalized && (v_R_27051 = v_x_26473(v_A_26459[v_m_27052.componentType]), v_v_27049.multiplyScalar(v_R_27051)), v_d_27048.max(v_v_27049)) : console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."));
          }
          v_u_27044.expandByVector(v_d_27048);
        }
        v_i_27040.boundingBox = v_u_27044;
        v_c_27046 = new THREE.Sphere();
        v_u_27044.getCenter(v_c_27046.center), v_c_27046.radius = v_u_27044.min.distanceTo(v_u_27044.max) / 2, v_i_27040.boundingSphere = v_c_27046;
      }
    }
    return Promise.all(v_r_27038).then(function () {
      if (void 0 === v_e_27035.targets) return v_E_27034;
      {
        var v_i_27060 = v_E_27034,
          v_n_27061 = v_e_27035.targets,
          v_o_27062 = v_f_27036;
        let v_r_27068 = !1,
          v_s_27069 = !1;
        for (let v_e_27070 = 0, v_t_27071 = v_n_27061.length; v_e_27070 < v_t_27071; v_e_27070++) {
          var v_a_27063 = v_n_27061[v_e_27070];
          if (void 0 !== v_a_27063.POSITION && (v_r_27068 = !0), void 0 !== v_a_27063.NORMAL && (v_s_27069 = !0), v_r_27068 && v_s_27069) break;
        }
        if (!v_r_27068 && !v_s_27069) return Promise.resolve(v_i_27060);
        var v_u_27064 = [],
          v_l_27065 = [];
        for (let v_e_27072 = 0, v_t_27073 = v_n_27061.length; v_e_27072 < v_t_27073; v_e_27072++) {
          var v_c_27066,
            v_h_27067 = v_n_27061[v_e_27072];
          v_r_27068 && (v_c_27066 = void 0 !== v_h_27067.POSITION ? v_o_27062.getDependency("accessor", v_h_27067.POSITION) : v_i_27060.attributes.position, v_u_27064.push(v_c_27066)), v_s_27069 && (v_c_27066 = void 0 !== v_h_27067.NORMAL ? v_o_27062.getDependency("accessor", v_h_27067.NORMAL) : v_i_27060.attributes.normal, v_l_27065.push(v_c_27066));
        }
        return Promise.all([Promise.all(v_u_27064), Promise.all(v_l_27065)]).then(function (v_e_27074) {
          var v_t_27075 = v_e_27074[0],
            v_e_27074 = v_e_27074[1];
          return v_r_27068 && (v_i_27060.morphAttributes.position = v_t_27075), v_s_27069 && (v_i_27060.morphAttributes.normal = v_e_27074), v_i_27060.morphTargetsRelative = !0, v_i_27060;
        });
      }
    });
  }
  function v_O_26477(v_e_27076, v_t_27077) {
    let v_r_27078 = v_e_27076.getIndex();
    if (null === v_r_27078) {
      var v_s_27079 = [],
        v_i_27080 = v_e_27076.getAttribute("position");
      if (void 0 === v_i_27080) return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), v_e_27076;
      for (let v_e_27083 = 0; v_e_27083 < v_i_27080.count; v_e_27083++) v_s_27079.push(v_e_27083);
      v_e_27076.setIndex(v_s_27079), v_r_27078 = v_e_27076.getIndex();
    }
    var v_n_27081 = v_r_27078.count - 2,
      v_o_27082 = [];
    if (v_t_27077 === THREE.TriangleFanDrawMode) for (let v_e_27084 = 1; v_e_27084 <= v_n_27081; v_e_27084++) v_o_27082.push(v_r_27078.getX(0)), v_o_27082.push(v_r_27078.getX(v_e_27084)), v_o_27082.push(v_r_27078.getX(v_e_27084 + 1));else for (let v_e_27085 = 0; v_e_27085 < v_n_27081; v_e_27085++) v_e_27085 % 2 == 0 ? (v_o_27082.push(v_r_27078.getX(v_e_27085)), v_o_27082.push(v_r_27078.getX(v_e_27085 + 1)), v_o_27082.push(v_r_27078.getX(v_e_27085 + 2))) : (v_o_27082.push(v_r_27078.getX(v_e_27085 + 2)), v_o_27082.push(v_r_27078.getX(v_e_27085 + 1)), v_o_27082.push(v_r_27078.getX(v_e_27085)));
    v_o_27082.length / 3 != v_n_27081 && console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    v_t_27077 = v_e_27076.clone();
    return v_t_27077.setIndex(v_o_27082), v_t_27077;
  }
  THREE.GLTFLoader = v_e_26433;
}();