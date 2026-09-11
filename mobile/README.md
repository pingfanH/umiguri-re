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
| 文件系统 | ipcMain + node fs | 待适配(Capacitor Filesystem) |
| 键盘输入 | keydown/keyup | **待适配(触摸输入)** |
| 串口 | ugSerial mock | 无(移除) |

## 后续适配清单

1. **umgr_elc(文件系统)** — 用 Capacitor Filesystem 插件,把 data/ core/ 打包进 app,运行时读。
   或简化:把解密后的资源放进 www/assets,前端用 fetch 读。

2. **键盘 → 触摸** — 这是移动端最大工作量:
   - 前端 `kbdHeld(vk)` 改成检查触摸状态
   - 屏幕绘制 8 个圆形按键,`touchstart`/`touchend` 维护触摸状态
   - 游戏前端 `m_Ti/m_Ii/m_Pi`(键盘函数)需要桥接到触摸

3. **串口/Di8 移除** — 移动端无街机硬件,`ugSerial*` 返回失败即可。

## 已完成

- ✅ Capacitor 项目骨架
- ✅ Web 前端复用(index.html + main.css)
- ✅ main.js 加密 + Web 层解密(decrypt-loader.js)
- ✅ 跨平台配置(capacitor.config.ts)
