# 项目分析(js.md Step 1 / Step 2 输出)

> 分析对象: 仓库根目录的 `game_main.original.js`(打包源)与 `game_main.deobf.js`(反混淆源),
> 以及 `tauri/` 宿主层。结论用于指导 open-umiguri 的拆分。

## 1. 项目结构

| 层 | 位置 | 说明 |
|---|---|---|
| 宿主(旧) | `tauri/src-tauri/src/lib.rs` | Tauri 2 Rust 后端: 文件系统命令 + `umg://` 协议 |
| 宿主(前端) | `tauri/www/tauri-bridge.js` | `window.umgr_elc` 桥、键盘/触摸输入、虚拟键盘、DXT 软解 |
| 宿主(加载) | `tauri/www/decrypt-loader.js` | WebCrypto AES-CBC 解密 `main.js.enc` 并 `eval` |
| 游戏本体 | `game_main.original.js` / `.deobf.js` | THREE.js + Effekseer + 字形数据 + 游戏主逻辑 IIFE |

## 2. 入口文件

- 宿主前端入口: `tauri/www/index.html` → `tauri-bridge.js` → `diag.js` → `decrypt-loader.js`。
- 游戏入口: bundle 末尾的单个 IIFE `!function(window){ ... }(window)`(deobf 176809–196008)。

## 3. 运行环境

- WebView(Tauri 2 / 旧 Electron)+ 浏览器 JS。
- 使用 `window` / `document` / `navigator` / `localStorage` / WebGL / WebCrypto / `requestAnimationFrame` / `fetch` / `XMLHttpRequest`。
- 宿主注入: `window.__TAURI__.core.invoke`、`window.umgr_elc`、`window.kbd*` / `di8Kbd*`、`window.ugSerial*`。

## 4. 打包 / 混淆技术

- terser 压缩 + **property mangling**(对象字段名不可逆)。
- bundle 为多段顶层语句拼接(Umd/全局仓库 THREE、Effekseer、emscripten、字形数据)。
- 代码以 AES-256-CBC 加密为 `main.js.enc`。
- 反混淆: `tools/deobfuscate.js`(Babel 绑定级重命名 + 美化)。

## 5. 模块依赖关系(高层)

```
index.html
 ├─ tauri-bridge.js ──> window.umgr_elc ──┐
 │      └─ kbd*/di8Kbd* ──────────────────┤
 └─ decrypt-loader.js ──eval(main.js.enc)──┤
                                           ▼
                         游戏 IIFE ──> umgr_elc.st.{zu,sn,_2,xl,Xu}
                                           │
                                           ▼
                          Rust command( fs_list/fs_file/fs_size/fs_read/fs_write/handshake )
                                           │
                                           ▼
                          resolve_src: 磁盘可写覆盖 → APK assets 只读
```

游戏 IIFE 内部模块依赖(55 个)见 `src/game/logic/COUPLING.md`。

## 6. 主要功能模块

- 输入(`I1`): 32 档位 + 6 air;DIK / VK 双路径;`__umgLanes` 直连补丁。
- UI 引擎(RSB 元素树): `ot(name)` / `yk(idx)`。
- 场景/成绩/存档(`or` 最大模块)、谱面解析(`kr`)、语言包(`Ne`)、归档读取(`ds`)。
- 测试菜单(`cr`)、前端桥封装(`Zr`)。

## 7. 建议的重构目录

见 `open-umiguri/README.md` 的目录树(已落地)。

## 8. 当前最严重的混淆点

1. **property mangling**:`.Fi .Le .Qt .Te .G0` 等字段名不可恢复(信息论丢失),只能从上下文推断。
2. **闭包耦合**:游戏 IIFE 内 55 个模块共享 655 个外层绑定,合计 1332 处外层引用
   (最多单模块 264 处)——这是无法机械地拆成独立 ES 模块的根因。
3. 字符串数组/属性动态访问仍在(vendor 段与部分逻辑)。

## 9. 可能存在的不确定项

| 项 | 推测 | 置信度 | 处理 |
|---|---|---|---|
| emscripten 生成的 GL/AL 包装 | 依赖全局 `this`/环境注入,非 ESM | 高 | 作为经典脚本片段保留 |
| `m_GL_0` 等顶层全局 | WebGL 初始化产生,被游戏 IIFE 引用 | 高 | 按原顺序拼接保留 |
| 脚本间 trivia/注释 | 不影响行为 | 高 | 拼接时保留为 `//` 注释 |
| 逐模块 ES 化 | 需闭包提升 + 全局回归验证 | 中 | 暂缓,输出耦合报告 |
| deobf 版直接打包产物与 original 行为差 | Babel 重新生成,语义等价 | 中 | 已用 `node --check` 与重建断言;真机回归待做 |
