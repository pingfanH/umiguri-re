// vendor: ExpressionStatement
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

THREE.BufferGeometryUtils = class {
  static computeTangents(v_e_26259) {
    v_e_26259.computeTangents(), console.warn("THREE.BufferGeometryUtils: .computeTangents() has been removed. Use THREE.BufferGeometry.computeTangents() instead.");
  }
  static mergeBufferGeometries(v_e_26260, v_t_26261 = !1) {
    const v_r_26262 = null !== v_e_26260[0].index,
      v_o_26263 = new Set(Object.keys(v_e_26260[0].attributes)),
      v_n_26264 = new Set(Object.keys(v_e_26260[0].morphAttributes)),
      v_i_26265 = {},
      v_s_26266 = {},
      v_u_26267 = v_e_26260[0].morphTargetsRelative,
      v_a_26268 = new THREE.BufferGeometry();
    let v_l_26269 = 0;
    for (let v_f_26270 = 0; v_f_26270 < v_e_26260.length; ++v_f_26270) {
      const v_m_26271 = v_e_26260[v_f_26270];
      let v_c_26272 = 0;
      if (v_r_26262 !== (null !== v_m_26271.index)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."), null;
      for (const v_e_26273 in v_m_26271.attributes) {
        if (!v_o_26263.has(v_e_26273)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + '. All geometries must have compatible attributes; make sure "' + v_e_26273 + '" attribute exists among all geometries, or in none of them.'), null;
        void 0 === v_i_26265[v_e_26273] && (v_i_26265[v_e_26273] = []), v_i_26265[v_e_26273].push(v_m_26271.attributes[v_e_26273]), v_c_26272++;
      }
      if (v_c_26272 !== v_o_26263.size) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + ". Make sure all geometries have the same number of attributes."), null;
      if (v_u_26267 !== v_m_26271.morphTargetsRelative) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + ". .morphTargetsRelative must be consistent throughout all geometries."), null;
      for (const v_e_26274 in v_m_26271.morphAttributes) {
        if (!v_n_26264.has(v_e_26274)) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + ".  .morphAttributes must be consistent throughout all geometries."), null;
        void 0 === v_s_26266[v_e_26274] && (v_s_26266[v_e_26274] = []), v_s_26266[v_e_26274].push(v_m_26271.morphAttributes[v_e_26274]);
      }
      if (v_a_26268.userData.mergedUserData = v_a_26268.userData.mergedUserData || [], v_a_26268.userData.mergedUserData.push(v_m_26271.userData), v_t_26261) {
        let v_e_26275;
        if (v_r_26262) v_e_26275 = v_m_26271.index.count;else {
          if (void 0 === v_m_26271.attributes.position) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index " + v_f_26270 + ". The geometry must have either an index or a position attribute"), null;
          v_e_26275 = v_m_26271.attributes.position.count;
        }
        v_a_26268.addGroup(v_l_26269, v_e_26275, v_f_26270), v_l_26269 += v_e_26275;
      }
    }
    if (v_r_26262) {
      let v_t_26276 = 0;
      const v_r_26277 = [];
      for (let v_o_26278 = 0; v_o_26278 < v_e_26260.length; ++v_o_26278) {
        const v_n_26279 = v_e_26260[v_o_26278].index;
        for (let v_e_26280 = 0; v_e_26280 < v_n_26279.count; ++v_e_26280) v_r_26277.push(v_n_26279.getX(v_e_26280) + v_t_26276);
        v_t_26276 += v_e_26260[v_o_26278].attributes.position.count;
      }
      v_a_26268.setIndex(v_r_26277);
    }
    for (const v_e_26281 in v_i_26265) {
      const v_t_26282 = this.mergeBufferAttributes(v_i_26265[v_e_26281]);
      if (!v_t_26282) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + v_e_26281 + " attribute."), null;
      v_a_26268.setAttribute(v_e_26281, v_t_26282);
    }
    for (const v_e_26283 in v_s_26266) {
      const v_t_26284 = v_s_26266[v_e_26283][0].length;
      if (0 === v_t_26284) break;
      v_a_26268.morphAttributes = v_a_26268.morphAttributes || {}, v_a_26268.morphAttributes[v_e_26283] = [];
      for (let v_r_26285 = 0; v_r_26285 < v_t_26284; ++v_r_26285) {
        const v_t_26286 = [];
        for (let v_o_26288 = 0; v_o_26288 < v_s_26266[v_e_26283].length; ++v_o_26288) v_t_26286.push(v_s_26266[v_e_26283][v_o_26288][v_r_26285]);
        const v_o_26287 = this.mergeBufferAttributes(v_t_26286);
        if (!v_o_26287) return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the " + v_e_26283 + " morphAttribute."), null;
        v_a_26268.morphAttributes[v_e_26283].push(v_o_26287);
      }
    }
    return v_a_26268;
  }
  static mergeBufferAttributes(v_e_26289) {
    let v_t_26290,
      v_r_26291,
      v_o_26292,
      v_n_26293 = 0;
    for (let v_i_26296 = 0; v_i_26296 < v_e_26289.length; ++v_i_26296) {
      const v_s_26297 = v_e_26289[v_i_26296];
      if (v_s_26297.isInterleavedBufferAttribute) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."), null;
      if (void 0 === v_t_26290 && (v_t_26290 = v_s_26297.array.constructor), v_t_26290 !== v_s_26297.array.constructor) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. THREE.BufferAttribute.array must be of consistent array types across matching attributes."), null;
      if (void 0 === v_r_26291 && (v_r_26291 = v_s_26297.itemSize), v_r_26291 !== v_s_26297.itemSize) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. THREE.BufferAttribute.itemSize must be consistent across matching attributes."), null;
      if (void 0 === v_o_26292 && (v_o_26292 = v_s_26297.normalized), v_o_26292 !== v_s_26297.normalized) return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. THREE.BufferAttribute.normalized must be consistent across matching attributes."), null;
      v_n_26293 += v_s_26297.array.length;
    }
    const v_i_26294 = new v_t_26290(v_n_26293);
    let v_s_26295 = 0;
    for (let v_t_26298 = 0; v_t_26298 < v_e_26289.length; ++v_t_26298) v_i_26294.set(v_e_26289[v_t_26298].array, v_s_26295), v_s_26295 += v_e_26289[v_t_26298].array.length;
    return new THREE.BufferAttribute(v_i_26294, v_r_26291, v_o_26292);
  }
  static interleaveAttributes(v_e_26299) {
    let v_t_26300,
      v_r_26301 = 0,
      v_o_26302 = 0;
    for (let v_n_26308 = 0, v_i_26309 = v_e_26299.length; v_n_26308 < v_i_26309; ++v_n_26308) {
      const v_i_26310 = v_e_26299[v_n_26308];
      if (void 0 === v_t_26300 && (v_t_26300 = v_i_26310.array.constructor), v_t_26300 !== v_i_26310.array.constructor) return console.error("AttributeBuffers of different types cannot be interleaved"), null;
      v_r_26301 += v_i_26310.array.length, v_o_26302 += v_i_26310.itemSize;
    }
    const v_n_26303 = new THREE.InterleavedBuffer(new v_t_26300(v_r_26301), v_o_26302);
    let v_i_26304 = 0;
    const v_s_26305 = [],
      v_u_26306 = ["getX", "getY", "getZ", "getW"],
      v_a_26307 = ["setX", "setY", "setZ", "setW"];
    for (let v_t_26311 = 0, v_r_26312 = v_e_26299.length; v_t_26311 < v_r_26312; v_t_26311++) {
      const v_r_26313 = v_e_26299[v_t_26311],
        v_o_26314 = v_r_26313.itemSize,
        v_l_26315 = v_r_26313.count,
        v_f_26316 = new THREE.InterleavedBufferAttribute(v_n_26303, v_o_26314, v_i_26304, v_r_26313.normalized);
      v_s_26305.push(v_f_26316), v_i_26304 += v_o_26314;
      for (let v_e_26317 = 0; v_e_26317 < v_l_26315; v_e_26317++) for (let v_t_26318 = 0; v_t_26318 < v_o_26314; v_t_26318++) v_f_26316[v_a_26307[v_t_26318]](v_e_26317, v_r_26313[v_u_26306[v_t_26318]](v_e_26317));
    }
    return v_s_26305;
  }
  static estimateBytesUsed(v_e_26319) {
    let v_t_26320 = 0;
    for (const v_r_26322 in v_e_26319.attributes) {
      const v_o_26323 = v_e_26319.getAttribute(v_r_26322);
      v_t_26320 += v_o_26323.count * v_o_26323.itemSize * v_o_26323.array.BYTES_PER_ELEMENT;
    }
    const v_r_26321 = v_e_26319.getIndex();
    return v_t_26320 += v_r_26321 ? v_r_26321.count * v_r_26321.itemSize * v_r_26321.array.BYTES_PER_ELEMENT : 0, v_t_26320;
  }
  static mergeVertices(v_e_26324, v_t_26325 = 1e-4) {
    v_t_26325 = Math.max(v_t_26325, Number.EPSILON);
    const v_r_26326 = {},
      v_o_26327 = v_e_26324.getIndex(),
      v_n_26328 = v_e_26324.getAttribute("position"),
      v_i_26329 = v_o_26327 ? v_o_26327.count : v_n_26328.count;
    let v_s_26330 = 0;
    const v_u_26331 = Object.keys(v_e_26324.attributes),
      v_a_26332 = {},
      v_l_26333 = {},
      v_f_26334 = [],
      v_m_26335 = ["getX", "getY", "getZ", "getW"];
    for (let v_t_26339 = 0, v_r_26340 = v_u_26331.length; v_t_26339 < v_r_26340; v_t_26339++) {
      const v_r_26341 = v_u_26331[v_t_26339];
      v_a_26332[v_r_26341] = [];
      const v_o_26342 = v_e_26324.morphAttributes[v_r_26341];
      v_o_26342 && (v_l_26333[v_r_26341] = new Array(v_o_26342.length).fill().map(() => []));
    }
    const v_c_26336 = Math.log10(1 / v_t_26325),
      v_g_26337 = Math.pow(10, v_c_26336);
    for (let v_t_26343 = 0; v_t_26343 < v_i_26329; v_t_26343++) {
      const v_n_26344 = v_o_26327 ? v_o_26327.getX(v_t_26343) : v_t_26343;
      let v_i_26345 = "";
      for (let v_t_26346 = 0, v_r_26347 = v_u_26331.length; v_t_26346 < v_r_26347; v_t_26346++) {
        const v_r_26348 = v_u_26331[v_t_26346],
          v_o_26349 = v_e_26324.getAttribute(v_r_26348),
          v_s_26350 = v_o_26349.itemSize;
        for (let v_e_26351 = 0; v_e_26351 < v_s_26350; v_e_26351++) v_i_26345 += ~~(v_o_26349[v_m_26335[v_e_26351]](v_n_26344) * v_g_26337) + ",";
      }
      if (v_i_26345 in v_r_26326) v_f_26334.push(v_r_26326[v_i_26345]);else {
        for (let v_t_26352 = 0, v_r_26353 = v_u_26331.length; v_t_26352 < v_r_26353; v_t_26352++) {
          const v_r_26354 = v_u_26331[v_t_26352],
            v_o_26355 = v_e_26324.getAttribute(v_r_26354),
            v_i_26356 = v_e_26324.morphAttributes[v_r_26354],
            v_s_26357 = v_o_26355.itemSize,
            v_f_26358 = v_a_26332[v_r_26354],
            v_c_26359 = v_l_26333[v_r_26354];
          for (let v_e_26360 = 0; v_e_26360 < v_s_26357; v_e_26360++) {
            const v_t_26361 = v_m_26335[v_e_26360];
            if (v_f_26358.push(v_o_26355[v_t_26361](v_n_26344)), v_i_26356) for (let v_e_26362 = 0, v_r_26363 = v_i_26356.length; v_e_26362 < v_r_26363; v_e_26362++) v_c_26359[v_e_26362].push(v_i_26356[v_e_26362][v_t_26361](v_n_26344));
          }
        }
        v_r_26326[v_i_26345] = v_s_26330, v_f_26334.push(v_s_26330), v_s_26330++;
      }
    }
    const v_d_26338 = v_e_26324.clone();
    for (let v_t_26364 = 0, v_r_26365 = v_u_26331.length; v_t_26364 < v_r_26365; v_t_26364++) {
      const v_r_26366 = v_u_26331[v_t_26364],
        v_o_26367 = v_e_26324.getAttribute(v_r_26366),
        v_n_26368 = new v_o_26367.array.constructor(v_a_26332[v_r_26366]),
        v_i_26369 = new THREE.BufferAttribute(v_n_26368, v_o_26367.itemSize, v_o_26367.normalized);
      if (v_d_26338.setAttribute(v_r_26366, v_i_26369), v_r_26366 in v_l_26333) for (let v_t_26370 = 0; v_t_26370 < v_l_26333[v_r_26366].length; v_t_26370++) {
        const v_o_26371 = v_e_26324.morphAttributes[v_r_26366][v_t_26370],
          v_n_26372 = new v_o_26371.array.constructor(v_l_26333[v_r_26366][v_t_26370]),
          v_i_26373 = new THREE.BufferAttribute(v_n_26372, v_o_26371.itemSize, v_o_26371.normalized);
        v_d_26338.morphAttributes[v_r_26366][v_t_26370] = v_i_26373;
      }
    }
    return v_d_26338.setIndex(v_f_26334), v_d_26338;
  }
  static toTrianglesDrawMode(v_e_26374, v_t_26375) {
    if (v_t_26375 === THREE.TrianglesDrawMode) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), v_e_26374;
    if (v_t_26375 === THREE.TriangleFanDrawMode || v_t_26375 === THREE.TriangleStripDrawMode) {
      let v_r_26376 = v_e_26374.getIndex();
      if (null === v_r_26376) {
        const v_t_26380 = [],
          v_o_26381 = v_e_26374.getAttribute("position");
        if (void 0 === v_o_26381) return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), v_e_26374;
        for (let v_e_26382 = 0; v_e_26382 < v_o_26381.count; v_e_26382++) v_t_26380.push(v_e_26382);
        v_e_26374.setIndex(v_t_26380), v_r_26376 = v_e_26374.getIndex();
      }
      const v_o_26377 = v_r_26376.count - 2,
        v_n_26378 = [];
      if (v_t_26375 === THREE.TriangleFanDrawMode) for (let v_e_26383 = 1; v_e_26383 <= v_o_26377; v_e_26383++) v_n_26378.push(v_r_26376.getX(0)), v_n_26378.push(v_r_26376.getX(v_e_26383)), v_n_26378.push(v_r_26376.getX(v_e_26383 + 1));else for (let v_e_26384 = 0; v_e_26384 < v_o_26377; v_e_26384++) v_e_26384 % 2 == 0 ? (v_n_26378.push(v_r_26376.getX(v_e_26384)), v_n_26378.push(v_r_26376.getX(v_e_26384 + 1)), v_n_26378.push(v_r_26376.getX(v_e_26384 + 2))) : (v_n_26378.push(v_r_26376.getX(v_e_26384 + 2)), v_n_26378.push(v_r_26376.getX(v_e_26384 + 1)), v_n_26378.push(v_r_26376.getX(v_e_26384)));
      v_n_26378.length / 3 !== v_o_26377 && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
      const v_i_26379 = v_e_26374.clone();
      return v_i_26379.setIndex(v_n_26378), v_i_26379.clearGroups(), v_i_26379;
    }
    return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", v_t_26375), v_e_26374;
  }
  static computeMorphedAttributes(v_e_26385) {
    if (!0 !== v_e_26385.geometry.isBufferGeometry) return console.error("THREE.BufferGeometryUtils: Geometry is not of type THREE.BufferGeometry."), null;
    const v_t_26386 = new THREE.Vector3(),
      v_r_26387 = new THREE.Vector3(),
      v_o_26388 = new THREE.Vector3(),
      v_n_26389 = new THREE.Vector3(),
      v_i_26390 = new THREE.Vector3(),
      v_s_26391 = new THREE.Vector3(),
      v_u_26392 = new THREE.Vector3(),
      v_a_26393 = new THREE.Vector3(),
      v_l_26394 = new THREE.Vector3();
    function v_f_26420(v_e_26419, v_f_26420, v_m_26421, v_c_26422, v_g_26423, v_d_26424, v_h_26425, v_E_26426, v_b_26427) {
      v_t_26386.fromBufferAttribute(v_m_26421, v_d_26424), v_r_26387.fromBufferAttribute(v_m_26421, v_h_26425), v_o_26388.fromBufferAttribute(v_m_26421, v_E_26426);
      const v_p_26428 = v_e_26419.morphTargetInfluences;
      if (v_f_26420.morphTargets && v_c_26422 && v_p_26428) {
        v_u_26392.set(0, 0, 0), v_a_26393.set(0, 0, 0), v_l_26394.set(0, 0, 0);
        for (let v_e_26429 = 0, v_f_26430 = v_c_26422.length; v_e_26429 < v_f_26430; v_e_26429++) {
          const v_f_26431 = v_p_26428[v_e_26429],
            v_m_26432 = v_c_26422[v_e_26429];
          0 !== v_f_26431 && (v_n_26389.fromBufferAttribute(v_m_26432, v_d_26424), v_i_26390.fromBufferAttribute(v_m_26432, v_h_26425), v_s_26391.fromBufferAttribute(v_m_26432, v_E_26426), v_g_26423 ? (v_u_26392.addScaledVector(v_n_26389, v_f_26431), v_a_26393.addScaledVector(v_i_26390, v_f_26431), v_l_26394.addScaledVector(v_s_26391, v_f_26431)) : (v_u_26392.addScaledVector(v_n_26389.sub(v_t_26386), v_f_26431), v_a_26393.addScaledVector(v_i_26390.sub(v_r_26387), v_f_26431), v_l_26394.addScaledVector(v_s_26391.sub(v_o_26388), v_f_26431)));
        }
        v_t_26386.add(v_u_26392), v_r_26387.add(v_a_26393), v_o_26388.add(v_l_26394);
      }
      v_e_26419.isSkinnedMesh && (v_e_26419.boneTransform(v_d_26424, v_t_26386), v_e_26419.boneTransform(v_h_26425, v_r_26387), v_e_26419.boneTransform(v_E_26426, v_o_26388)), v_b_26427[3 * v_d_26424 + 0] = v_t_26386.x, v_b_26427[3 * v_d_26424 + 1] = v_t_26386.y, v_b_26427[3 * v_d_26424 + 2] = v_t_26386.z, v_b_26427[3 * v_h_26425 + 0] = v_r_26387.x, v_b_26427[3 * v_h_26425 + 1] = v_r_26387.y, v_b_26427[3 * v_h_26425 + 2] = v_r_26387.z, v_b_26427[3 * v_E_26426 + 0] = v_o_26388.x, v_b_26427[3 * v_E_26426 + 1] = v_o_26388.y, v_b_26427[3 * v_E_26426 + 2] = v_o_26388.z;
    }
    const v_m_26396 = v_e_26385.geometry,
      v_c_26397 = v_e_26385.material;
    let v_g_26398, v_d_26399, v_h_26400;
    const v_E_26401 = v_m_26396.index,
      v_b_26402 = v_m_26396.attributes.position,
      v_p_26403 = v_m_26396.morphAttributes.position,
      v_T_26404 = v_m_26396.morphTargetsRelative,
      v_y_26405 = v_m_26396.attributes.normal,
      v_A_26406 = v_m_26396.morphAttributes.position,
      v_B_26407 = v_m_26396.groups,
      v_R_26408 = v_m_26396.drawRange;
    let v_w_26409, v_H_26410, v_G_26411, v_x_26412, v_U_26413, v_S_26414, v_M_26415, v_v_26416;
    const v_z_26417 = new Float32Array(v_b_26402.count * v_b_26402.itemSize),
      v_X_26418 = new Float32Array(v_y_26405.count * v_y_26405.itemSize);
    if (null !== v_E_26401) {
      if (Array.isArray(v_c_26397)) for (v_w_26409 = 0, v_G_26411 = v_B_26407.length; v_w_26409 < v_G_26411; v_w_26409++) for (v_U_26413 = v_B_26407[v_w_26409], v_S_26414 = v_c_26397[v_U_26413.materialIndex], v_M_26415 = Math.max(v_U_26413.start, v_R_26408.start), v_v_26416 = Math.min(v_U_26413.start + v_U_26413.count, v_R_26408.start + v_R_26408.count), v_H_26410 = v_M_26415, v_x_26412 = v_v_26416; v_H_26410 < v_x_26412; v_H_26410 += 3) v_g_26398 = v_E_26401.getX(v_H_26410), v_d_26399 = v_E_26401.getX(v_H_26410 + 1), v_h_26400 = v_E_26401.getX(v_H_26410 + 2), v_f_26395(v_e_26385, v_S_26414, v_b_26402, v_p_26403, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_z_26417), v_f_26395(v_e_26385, v_S_26414, v_y_26405, v_A_26406, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_X_26418);else for (v_M_26415 = Math.max(0, v_R_26408.start), v_v_26416 = Math.min(v_E_26401.count, v_R_26408.start + v_R_26408.count), v_w_26409 = v_M_26415, v_G_26411 = v_v_26416; v_w_26409 < v_G_26411; v_w_26409 += 3) v_g_26398 = v_E_26401.getX(v_w_26409), v_d_26399 = v_E_26401.getX(v_w_26409 + 1), v_h_26400 = v_E_26401.getX(v_w_26409 + 2), v_f_26395(v_e_26385, v_c_26397, v_b_26402, v_p_26403, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_z_26417), v_f_26395(v_e_26385, v_c_26397, v_y_26405, v_A_26406, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_X_26418);
    } else if (void 0 !== v_b_26402) if (Array.isArray(v_c_26397)) for (v_w_26409 = 0, v_G_26411 = v_B_26407.length; v_w_26409 < v_G_26411; v_w_26409++) for (v_U_26413 = v_B_26407[v_w_26409], v_S_26414 = v_c_26397[v_U_26413.materialIndex], v_M_26415 = Math.max(v_U_26413.start, v_R_26408.start), v_v_26416 = Math.min(v_U_26413.start + v_U_26413.count, v_R_26408.start + v_R_26408.count), v_H_26410 = v_M_26415, v_x_26412 = v_v_26416; v_H_26410 < v_x_26412; v_H_26410 += 3) v_g_26398 = v_H_26410, v_d_26399 = v_H_26410 + 1, v_h_26400 = v_H_26410 + 2, v_f_26395(v_e_26385, v_S_26414, v_b_26402, v_p_26403, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_z_26417), v_f_26395(v_e_26385, v_S_26414, v_y_26405, v_A_26406, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_X_26418);else for (v_M_26415 = Math.max(0, v_R_26408.start), v_v_26416 = Math.min(v_b_26402.count, v_R_26408.start + v_R_26408.count), v_w_26409 = v_M_26415, v_G_26411 = v_v_26416; v_w_26409 < v_G_26411; v_w_26409 += 3) v_g_26398 = v_w_26409, v_d_26399 = v_w_26409 + 1, v_h_26400 = v_w_26409 + 2, v_f_26395(v_e_26385, v_c_26397, v_b_26402, v_p_26403, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_z_26417), v_f_26395(v_e_26385, v_c_26397, v_y_26405, v_A_26406, v_T_26404, v_g_26398, v_d_26399, v_h_26400, v_X_26418);
    return {
      positionAttribute: v_b_26402,
      normalAttribute: v_y_26405,
      morphedPositionAttribute: new THREE.Float32BufferAttribute(v_z_26417, 3),
      morphedNormalAttribute: new THREE.Float32BufferAttribute(v_X_26418, 3)
    };
  }
};