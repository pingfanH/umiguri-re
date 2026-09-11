# UMIGURI 移动端 (Capacitor)

> 用 Capacitor 把游戏 Web 前端打包成 Android/iOS 应用。当前为项目骨架。

## 项目结构

```
mobile/
├── capacitor.config.ts   # Capacitor 配置
├── package.json          # 依赖(@capacitor/*)
├── tsconfig.json
└── www/                  # Web 前端(打包进 WebView)
    ├── index.html        # 前端入口
    ├── main.css          # 样式
    ├── main.js.enc       # 加密的游戏逻辑(AES-256)
    └── decrypt-loader.js # Web 层解密 main.js.enc(Web Crypto API)
```

## 搭建步骤

```bash
cd mobile
npm install            # 安装 @capacitor/* 依赖
npx cap add android    # 添加 Android 平台
npx cap add ios        # 添加 iOS 平台(需 macOS)
npx cap sync           # 同步 www/ 到原生工程
npx cap open android   # 打开 Android Studio
npx cap run android    # 直接跑 Android 真机/模拟器
```

## 与桌面端(Electron)的差异

| 功能 | 桌面(Electron) | 移动端(Capacitor) |
|------|---------------|------------------|
| 框架 | Electron 主进程 + renderer | WebView 直接加载 www/ |
| 解密 main.js | app-main.js(主进程 protocol) | decrypt-loader.js(Web Crypto) |
| 文件系统 | ipcMain + node fs | fetch 读 www/assets/(mobile-bridge.js) |
| 键盘输入 | keydown/keyup | 触摸虚拟按键(mobile-bridge.js) |
| 串口 | ugSerial mock | ugSerial mock |

## 触摸适配说明

`mobile-bridge.js` 在 `decrypt-loader.js` 之前加载,提供:

1. **触摸 → 键盘桥接**:`kbdStart`/`kbdUpdate`/`kbdHeld`/`kbdUni2Virt` 由触摸状态驱动。
   - 游戏默认 Di8 街机板(`handshake.W = true`),移动端设 `W: false` 走键盘分支
   - 38 字符键(音游主键)+ 方向/OK/返回/空格 功能键,绘制为屏幕底部虚拟按键
   - `pointerdown`/`pointerup` 维护 `keyDown`,支持多点触控

2. **umgr_elc 文件系统**:fetch 读 `www/assets/` 下的打包资源(虚拟路径 → assets 路径映射)。

3. **串口/Di8**:无街机硬件,`ugSerial*`/`di8Kbd*` 全部返回失败/0。

## 资源打包

构建前需把游戏资源打包进 `www/assets/`:

```bash
node copy-assets.js   # 复制 UMIGURI_NEXT/data + core 到 www/assets
```

## 已完成

- ✅ Capacitor 项目骨架
- ✅ Web 前端复用(index.html + main.css)
- ✅ main.js 加密 + Web 层解密(decrypt-loader.js)
- ✅ 跨平台配置(capacitor.config.ts)
- ✅ 触摸虚拟按键(mobile-bridge.js: kbdHeld 触摸驱动 + W=false 键盘模式)
- ✅ umgr_elc 文件系统(fetch 读 www/assets)
- ✅ 串口/Di8 mock
