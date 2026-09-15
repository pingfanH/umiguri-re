// game: 语句 273 (ExpressionStatement)
// 自动生成: tools/split-game.mjs
// 来源: game_main.deobf.js
// 说明: 本文件是 bundle 片段, 由 build/assemble-game.mjs 按 manifest 拼接;请勿手改拼接顺序。

  v_tc_28199.prototype = {
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