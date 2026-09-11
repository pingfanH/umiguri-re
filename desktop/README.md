# Electron 真实运行环境

> 用官方 Electron 41.7.1 加载恢复的前端,提供真实文件系统 + 键盘输入。

## 运行方法
```bash
# Electron 二进制在 d:\project\umgr-re\electron41\
d:\project\umgr-re\electron41\electron.exe "D:\project\umgr-re\UMIGURI_NEXT\recovered\electron_app"
```

## 文件说明
| 文件 | 作用 |
|------|------|
| `package.json` | main 指向 app-main.js |
| `app-main.js` | 主进程(创建窗口 + IPC 文件系统 handler)|
| `preload.js` | 注入 umgr_elc + 键盘输入 |
| `index.html` | 游戏前端入口 |
| `main.js` | 游戏前端主逻辑(3.75MB bundle)|
| `main.css` | 样式 |

## 已实现

### ✅ 文件系统(umgr_elc)
preload 用 ipcRenderer + 主进程 ipcMain 提供:
- `st.zu(path)` 列目录(虚拟路径映射到 D:\project\umgr-re\UMIGURI_NEXT)
- `st.sn(path)` 读文件
- `st._2(path)` 归档大小
- `st.xl(path, offset, size)` 读归档原始字节(前端自己解密 .arc/.una)

### ✅ 键盘输入
- `kbdHeld(vk)` 用 keydown/keyup 维护按键状态
- `kbdUni2Virt(charCode)` 字符转虚拟键码
- `kbdStart`/`kbdUpdate` 初始化/更新

### ✅ 前端跑通
- 数据加载完整(音乐/课程/角色/技能/标题/语言包/铭牌/语音)
- THREE 渲染器初始化(canvas 1920x1080)
- .una 语言包解密(前端自身算法)

## 剩余问题
场景 UI 创建卡在数据加载完成之后(语言选择场景未显示,div=3)。这是前端代码内部异步链的问题,与键盘/文件系统无关,需继续反混淆追踪 m_Hr.ef 完成链。

## 资源
解密后的资源在 `../assets/`(331 文件: 196 dds + 42 js + 42 rsb + 21 wav + 11 rgf + 5 krtbl + 2 rvs)
