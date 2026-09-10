# 打包指南 (Windows / macOS / Linux)

使用 electron-builder 打包。已做好跨平台改造(路径/键盘/盘符)。

## 前置条件

1. 安装依赖(electron_app 目录下):
```bash
cd electron_app
npm install
npm install --save-dev electron-builder
```

2. 游戏数据(data/ + core/) 会被自动打包进 resources/game_data(通过 extraResources 配置)。

## 打包命令

```bash
# Windows(NSIS 安装包)
npm run dist:win

# macOS(dmg)
npm run dist:mac

# Linux(AppImage + deb)
npm run dist:linux
```

## 跨平台限制(重要)

| 目标平台 | 能在哪个平台打包 |
|---------|----------------|
| Windows | Windows / Linux / macOS |
| macOS | **只能 macOS**(dmg 签名限制,交叉编译不完整)|
| Linux | Windows / Linux / macOS |

- **mac 打包必须在 macOS 机器上**,或用 CI(GitHub Actions 的 macos runner)。
- Linux 打包可在 Windows 上直接做(AppImage/deb 不需要 Linux 环境)。

## 交叉编译示例(Windows 上打 Linux)

```bash
npm run dist:linux
# 输出在 dist/ 目录: UMIGURI-x.x.x.AppImage, UMIGURI-x.x.x.deb
```

## 打包后运行

打包后的应用,游戏数据在 `resources/game_data/`(app-main.js 用 `process.resourcesPath` 自动定位)。

也可以用环境变量覆盖数据目录:
```bash
# Linux/mac
UMIGURI_DATA_DIR=/path/to/UMIGURI_NEXT ./UMIGURI
# Windows
set UMIGURI_DATA_DIR=D:\path\to\UMIGURI_NEXT && UMIGURI.exe
```

## 已做的跨平台改造

1. **路径**:`virtualToReal` 用 `path.isAbsolute` 判断(兼容 Windows 盘符 `D:/` 和 Unix `/home/`)
2. **ROOT**:打包后自动用 `process.resourcesPath/game_data`
3. **键盘**:用 `e.code`(跨平台)映射到 Windows VK 码,不再依赖 `e.keyCode`
4. **盘符**:`protocol.handle` 的盘符正则只匹配 Windows,Linux/mac 无盘符自动跳过
