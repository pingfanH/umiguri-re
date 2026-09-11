# UMIGURI 桌面端(Tauri)

> 用 Tauri 替代 Electron,打包体积 ~10MB,内存占用低。当前为项目骨架。

## 项目结构

```
tauri/
├── www/                    # 前端(打包进 WebView)
│   ├── index.html          # 入口(加载 bridge + 解密器)
│   ├── main.css            # 样式
│   ├── main.js.enc         # 加密的游戏逻辑(AES-256)
│   ├── tauri-bridge.js     # umgr_elc + 键盘桥接(invoke Rust command)
│   └── decrypt-loader.js   # Web 层解密 main.js.enc
└── src-tauri/              # Rust 后端
    ├── Cargo.toml          # 依赖(tauri, serde)
    ├── tauri.conf.json     # Tauri 配置
    ├── build.rs
    └── src/main.rs         # 文件系统 command(fs_list/fs_file/fs_size/fs_read)
```

## 前置条件

1. **Rust 工具链**(已装 rustc 1.89)
2. **Tauri CLI**:
```bash
cargo install tauri-cli --version "^1.5"
```

## 图标生成(必需)

Tauri 需要图标文件。用 `tauri icon` 从一张 PNG 生成全套图标:
```bash
# 准备一张 1024x1024 的图标 icon.png
cargo tauri icon icon.png
# 生成到 src-tauri/icons/(32x32.png, 128x128.png, icon.ico, icon.icns 等)
```

## 运行

```bash
cd tauri
cargo tauri dev      # 开发模式(热重载)
cargo tauri build    # 打包(输出在 src-tauri/target/release/)
```

## 与 Electron 的对应

| Electron | Tauri |
|----------|-------|
| app-main.js(ipcMain + node fs) | src/main.rs(#[tauri::command] + std::fs) |
| preload.js(umgr_elc + 键盘) | www/tauri-bridge.js(invoke + keydown) |
| protocol.handle(file://) | 不需要(WebView 直接加载 www/) |
| crypto 解密 main.js | decrypt-loader.js(Web Crypto) |

## 游戏数据

Tauri 的 Rust 后端读游戏数据(data/ core/),路径通过:
- 环境变量 `UMIGURI_DATA_DIR`
- 或默认 `../UMIGURI_NEXT`(项目根目录的上一级)

```bash
# 开发时
UMIGURI_DATA_DIR=D:/project/umgr-re/UMIGURI_NEXT cargo tauri dev
```

## 已完成

- ✅ Tauri 项目骨架(Rust 后端 + 配置)
- ✅ 文件系统 command(fs_list/fs_file/fs_size/fs_read)
- ✅ 前端桥接(tauri-bridge.js: umgr_elc + 键盘)
- ✅ Web 前端复用(index.html + main.css + main.js.enc)

## 待完成

- ⏳ 图标生成(tauri icon)
- ⏳ 安装 Tauri CLI + 编译验证
- ⏳ 场景 UI 卡点(前端代码 m_Hr.ef,与框架无关)
