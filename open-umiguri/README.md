# open-umiguri

UMIGURI(inonote PC 音游)的反混淆重构工程: **宿主层(Tauri 2)模块化源码 + 游戏本体模块化源码 + 可复现构建链路**。

- 宿主层: Electron/原生桥 → Tauri 2(Rust 后端 + Web 前端桥),按职责拆成标准 ES 模块。
- 游戏本体: 由 `game_main.deobf.js` 拆分为 `vendor/`(第三方库)与 `logic/`(游戏逻辑片段),
  拼接顺序由 `manifest.json` 控制。
- 构建: `npm run build` 产出可注入的 `dist/www/tauri-bridge.js` 与加密包 `dist/www/main.js.enc`。

> 反混淆原则见仓库根目录 `js.md`。本工程遵循「不改变行为」优先。

## 目录

```
open-umiguri/
├── assets/                 解密/解包态资源(入库;构建时自动打包加密)
│   ├── core/una/*.una/     .una 归档解包后的目录
│   ├── data/**/data.arc/   data.arc 解包后的目录
│   └── core/{sounds,textures,config}, data/*, terms/, license.xml
├── build/
│   ├── pack-assets.mjs      assets/ -> dist/game_data(打包加密)
│   ├── bundle-host.mjs      宿主层打包(esbuild -> IIFE)
│   ├── assemble-game.mjs    按 manifest 拼接游戏源码
│   ├── bundle-game.mjs      拼接 + esbuild 压缩 + AES 加密
│   ├── encrypt.mjs          AES-256-CBC(与 desktop/encrypt.js 兼容)
│   ├── freevar-check.mjs    反混淆断裂检查
│   └── check.mjs            产物 node --check
├── tools/
│   ├── deobfuscate-fixed.mjs 修正版反混淆器(生成可运行源码)
│   ├── split-game.mjs        从 bundle 拆出 vendor/ 与 logic/(逐字节校验)
│   ├── analyze-bundle.mjs    闭包耦合分析
│   ├── analyze-props.mjs     对象字段使用分析
│   ├── import-assets.mjs     ../assets(仓库根) -> assets/(解密)
│   ├── umg.cjs               归档/AES 读写工具(pack/unpack/list/roundtrip)
│   └── symbols.json / prop-symbols.json / vendor-overrides.json
├── src/host/               宿主层 ES 模块
├── src/game/               游戏本体源码(vendor/ + vendor-upstream/ + logic/)
└── src-tauri/              Rust 后端(模块化) + tauri 配置
```

## 资源(assets)策略

仓库里**只存解密/解包形态**,运行时所需加密包在构建时自动生成:

| 形态 | 位置 | 说明 |
|---|---|---|
| 解密源 | `open-umiguri/assets/` | `.una`/`data.arc` 已解包为目录;`data`/`sounds`/`textures`/`terms`/`license.xml` 明文 |
| 运行时态 | `dist/game_data/`(不入库) | `npm run build:assets` 把目录重新打包加密为 `.una`(P2=2)/`data.arc`(P2=1) |
| 游戏脚本 | `dist/www/main.js.enc`(不入库) | 由 `src/game/**` 拼接压缩后 AES 加密 |

- 首次导入(从仓库根的上游资源解密):`npm run import:assets`。
- 打包:`npm run build`(含 assets + host + game)。
- 桌面读取分两层(避免构建清掉存档):
  - 只读资源 `dist/game_data`(构建产物,`UMIGURI_ASSETS_DIR` 可覆盖);
  - 可写层 `dist/userdata`(存档/配置,`UMIGURI_DATA_DIR` 可覆盖),读取时优先于只读层。
- Android 按 `src-tauri/tauri.android.conf.json` 打进 APK `assets/game_data/`;
  可写层用 Documents/UMIGURI(见 `android.rs`)。
- 校验:`node tools/umg.cjs roundtrip <archive> --p2 N` 可验证打包/解包可逆;
  实测 `.una` 重打包与原始**逐字节一致**,`data.arc` 条目名一致、解压数据相等。


## 宿主层模块

| 模块 | 职责 |
|---|---|
| `core/invoke.js` | Tauri `invoke` 封装 |
| `core/protocol.js` | 虚拟路径 → `umg://`;Image/XHR/fetch/iframe 拦截;整文件缓存 |
| `core/encoding.js` | base64 ⇄ Uint8Array/string |
| `core/diag.js` | `[DIAG]` 日志、错误捕获、GL 扩展探测 |
| `input/vk.js` | 字符/`code` → VK 映射(纯函数) |
| `input/lanes.js` | 档位直连 `window.__umgLanes`、触摸状态 |
| `input/keyboard.js` | 物理键盘、DIK→VK、`di8KbdHeld` |
| `input/hit.js` | 圆形范围命中检测 |
| `input/touch.js` | 指针输入、功能键长按重复 |
| `input/pad.js` | 测试菜单白色 UI 触摸区 |
| `keypanel/config.js` | 面板参数默认值与持久化 |
| `keypanel/panel.js` | 虚拟按键面板 DOM |
| `keypanel/editor.js` | 可视化编辑器 + 参考圆 + 命中高亮 |
| `keypanel/api.js` | `window.umgKeyPanel` |
| `bridge/handshake.js` | 握手数据 |
| `bridge/umgr-elc.js` | `window.umgr_elc`(游戏 → 宿主) |
| `bridge/native-input.js` | `kbd*` / `di8Kbd*` / 串口桩 |
| `platform/gestures.js` | 禁缩放/滑动 |
| `platform/textures-dxt.js` | DXT 软解(iOS 缺 S3TC 时) |
| `platform/storage-access.js` | 「所有文件访问」权限 UI |
| `platform/window-drag.js` | 拖动暂停 RAF |
| `loader/decrypt-loader.js` | 解密并执行 `main.js.enc` |

## Rust 后端模块

| 文件 | 职责 |
|---|---|
| `lib.rs` | 应用入口、窗口、`umg://` 协议注册、命令表 |
| `paths.rs` | 数据根、`PATH_MAP`、虚拟路径归一化、磁盘→APK 解析 |
| `fs.rs` | `fs_list/fs_file/fs_size/fs_read/fs_write/debug_probe` |
| `protocol.rs` | URI 解析、MIME 推断 |
| `handshake.rs` | `handshake` / `diag` |
| `android.rs` | Android 数据根、APK Asset 只读、权限、重启 |

## 构建与运行

```bash
npm install            # 安装 esbuild + Babel(若 /tmp/deobf 已有 Babel 可复用)

# 1) (可选)从反混淆 bundle 重新生成模块化源码
GAME_SRC=/path/to/game_main.deobf.js npm run extract:game
npm run analyze:game   # 生成 src/game/logic/COUPLING.md

# 2) 构建
npm run build          # 宿主 + 游戏,产物在 dist/
npm run check          # 产物语法校验

# 3) 运行 Tauri
cd src-tauri
cargo tauri dev        # 桌面
cargo tauri android build --debug --apk --target aarch64   # Android
```

- 桌面数据目录默认 `../assets`(可用 `UMIGURI_ASSETS_DIR` 或 `UMIGURI_DATA_DIR` 覆盖)。
- `npm run encrypt -- <in> <out>` 单独加密;`build/bundle-game.mjs --no-minify` 不压缩。

## 游戏本体: 两种源码形态

### A. ES 模块版(推荐, 目标形态)

```
src/game-esm/
  index.js                    入口: bootstrap(原 IIFE 顶层语句, 保持顺序) + 创建各模块
  runtime/scope.js            export const scope = {}   共享运行时作用域
  runtime/helpers.js          189 个顶层辅助函数(挂到 scope.*, 保持 hoisting 语义)
  modules/<name>/index.js     55 个功能模块: export function create<Name>(scope)
```

- **不再依赖 manifest.json 拼接**;`index.js` 用显式 `import` 引用每个模块工厂。
- 模块之间通过 `scope.xxx` 互相引用(`scope.inputModule.oe()` / `scope.renderer`),
  避免循环 `import` 与 TDZ。
- 生成:`npm run deobf && npm run modularize`(由 `dist/game_main.deobf.js` 自动转换)。
- 构建:`npm run build:game:esm` —— vendor(经典片段按文件名顺序) + esbuild 打包
  `src/game-esm/index.js` → 压缩 → AES 加密 `dist/www/main.js.enc`。

> 转换原理:`tools/modularize-game.mjs` 在原 AST(作用域完整)上把所有指向 IIFE 闭包
> 绑定的引用改写为 `scope.<name>`;模块 IIFE → 工厂;顶层 function → helpers;
> 其余顶层语句按原顺序留在 `index.js`。静态校验(bundle 后无任何未绑定的游戏作用域名)通过。

### B. 片段版(旧, 保留为回退)

`src/game/logic/` + `manifest.json` 字符串拼接, 见下节。构建:`npm run build:game`。

## 游戏本体拆分策略(片段版, 重要)

> ⚠️ 上游的 `game_main.deobf.js` **不可运行**: 原 `tools/deobfuscate.js` 在改名时对每个
> 标识符现场 `getBinding`，而声明已被就地改过名，导致约 106 个名字「有引用、无声明」
> (例: `function t(){}` → 声明名 `v_t_28361`，但 `new t()` → 不存在的 `v_t_28347`)。
> 本工程用修正版 `tools/deobfuscate-fixed.mjs` 重新生成可用源码:
> ```bash
> npm run deobf        # ../game_main.original.js -> dist/game_main.deobf.js
> npm run extract:game # 再按 symbols/props/upstream 拆分
> ```
> 修正点: 函数/类声明的名字标识符必须用**外层作用域**的绑定(Babel 在函数名节点上会
> 解析到函数自身的同名形参绑定)。`npm run check` 含 `freevar-check`, 会拦截此类断裂。

`tools/split-game.mjs` 按**顶层语句**与**游戏 IIFE 体内语句**切分,并且:

1. 生成 `logic/entry.preamble|footer|postamble.js` 与 277 个体内片段;
2. 断言 `preamble + 全部片段 + footer + postamble` **逐字节等于**原 bundle 区间;
3. `vendor/` 与 `logic/` 片段**按 manifest 顺序拼接**后即为完整 bundle,运行时与原件一致。

**为什么不是 55 个独立 ES 模块?**
游戏主逻辑是一个大 IIFE,内部 55 个模块 IIFE 通过**闭包**共享 655 个外层绑定
(见 `src/game/logic/COUPLING.md`:单个模块最多引用 264 个外层变量,合计 1332 处)。
把它们直接改成 `import/export` 必须先把闭包变量提升为显式 `scope` 对象并改写全部引用,
这属于**语义等价但不可用本仓库环境验证**的改造(需要 WebView + 游戏资源才能回归)。

当前做法选择「保留原逻辑」(js.md §13),并把后续改造所需的耦合数据
(`COUPLING.md` + `MODULE_MAP.md`)一并产出,便于按模块逐个安全提升。

> ⚠️ 不确定项: 游戏 `vendor/` 内 emscripten / Effekseer 生成代码依赖 `this`/全局,
> 不适合作为原生 ESM 直接 `import`;本工程以经典脚本片段拼接(等价于原 bundle 执行环境)。

## 对象字段改名(property)

`tools/prop-symbols.json` 维护被 terser **property mangling** 的字段名映射。由于字段名不可逆,
只对**有实测依据**的字段改名, 且 `applyProps` 强制安全门槛:

- 若该名字以**字符串字面量**出现(`"Fi"`)或以 `obj["Fi"]` **动态访问** → 拒绝(可能被序列化/动态访问);
- 简写 `{Fi}` / 解构 `const {Fi} = o` → 拒绝(需改写语法, 保守跳过);
- 仅改 `.Fi` 访问、`{Fi: …}` 键、类成员名。

当前批次(依据 `PROJECT_INFO` §2.2/§7.5, 共 2568 处):
`Be→visible`、`Te→x`、`Qt→y`、`Le→w`、`G0→h`、`yk→elementByIndex`、`ot→elementByName`。

> ⚠️ JSON 序列化不会在源码留下字符串字面量, 因此仍可能漏判; 改名后**必须真机回归**。

字段使用统计见 `tools/analyze-props.mjs` 生成的 `src/game/logic/PROPERTIES.md`。

## vendor 上游替换

`tools/vendor-overrides.json` 把 bundle 内可识别的第三方片段替换为**上游官方源码**:

| 片段 | 替换为 | 依据 |
|---|---|---|
| THREE 核心 | `vendor-upstream/three.r137.js` | `three@0.137.0` build/three.js(MIT) |
| BufferGeometryUtils | `vendor-upstream/BufferGeometryUtils.r137.js` | 同上 examples/js |
| GLTFLoader | `vendor-upstream/GLTFLoader.r137.js` | 同上 examples/js |

- 替换前已用「字符串字面量集合」比对确认与上游一致;并校验游戏引用的 201 个
  `THREE.*` 名称在上游中均存在(仅 `GLTFLoader` 由独立文件提供)。
- 未替换的: Emscripten 版 Effekseer(8.8MB, 编译产物, 非公开源码)、Babel 辅助函数、
  游戏自有 WebGL 包装 `glRuntime`、字形/字符数据。
- 重新拆分时自动应用覆盖;`--no-upstream` 可关闭。

## 与上游仓库的关系

本目录独立可构建,不修改 `../game_main.original.js`。资产(68M)不在本目录,
桌面端通过路径解析读取父级 `assets/`;Android 打包资源路径见 `tauri.android.conf.json`。
