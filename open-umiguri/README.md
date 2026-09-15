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
├── build/
│   ├── bundle-host.mjs     宿主层打包(esbuild -> IIFE)
│   ├── assemble-game.mjs   按 manifest 拼接游戏源码
│   ├── bundle-game.mjs     拼接 + esbuild 压缩 + AES 加密
│   ├── encrypt.mjs         AES-256-CBC(与 desktop/encrypt.js 兼容)
│   └── check.mjs           产物 node --check
├── tools/
│   ├── split-game.mjs      从 bundle 拆出 vendor/ 与 logic/ 片段(逐字节校验)
│   └── analyze-bundle.mjs  游戏模块「闭包外层引用」耦合分析
├── src/host/               宿主层 ES 模块(见下)
├── src/game/
│   ├── vendor/             第三方库片段(THREE / Effekseer / 字形数据 / emscripten …)
│   ├── logic/              游戏逻辑片段 + MODULE_MAP.md + COUPLING.md
│   └── manifest.json       拼接顺序(权威)
└── src-tauri/              Rust 后端(模块化)
    └── src/{lib,main,paths,fs,protocol,handshake,android}.rs
```

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

## 游戏本体拆分策略(重要)

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

## 与上游仓库的关系

本目录独立可构建,不修改 `../game_main.original.js`。资产(68M)不在本目录,
桌面端通过路径解析读取父级 `assets/`;Android 打包资源路径见 `tauri.android.conf.json`。
