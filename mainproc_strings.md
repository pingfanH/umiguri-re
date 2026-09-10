# 主进程后端功能全景(从字符串常量池恢复)

> 通过 Frida 定位 electron_common_asar 的 node_module → 扫描主进程内存字节码常量池,
> 提取了主进程 index.js 的全部字符串字面量。源码逻辑因 V8 字节码化无法逐行还原,
> 但功能完全清楚。

## 主进程 index.js 的功能

### 1. 配置管理
- 文件:`/core/config/game.json`、`startup.json`、`app.ini`、`/core/config/game.json`
- 构建信息:`/buildInfo.txt` → `BUILDDATE` / `BUILDTIME` / `GITHASH` / `TARGET`
- 玩家:`game.player.name` / `game.player.rating` / `game.player.level`
- 游戏:`game.lang`、`game.timelimit`、`game.dinput`
- 系统:`system.scaling_quality`、`system.force_120fps`、`system.force_fixedjdg`、`system.hardware_acceleration`、`system.block_sleep`

### 2. 街机硬件管理
- LED 灯板:`devices.led_controller.enabled/port`
- COM 串口:`devices.com.enabled/port_maindev/port_umgrio`
- **Amusement IC 读卡器**:`devices.amreader.enabled/port/highspeed/key_a/key_b`
- VFD 显示屏:`devices.vfd.enabled/port`
- 键盘映射:`keymap.current` + `1AQZ2SWX3DEC4FRV5GTB6HYN7JUM8KI90OLP,.`

### 3. 服务器通信
- 主服务器:`https://new.umgr.inonote.jp`
- API:`https://api.umgr.inonote.jp/2.1/api/getCoopServerStatus.json`
- 资源:`https://api.umgr.inonote.jp/2.1/assets/`
- 本地:`http://127.0.0.1:8090/2.0/assets/`

### 4. 录像/截图功能
- 编码器:`x264.exe`(视频)、`qaac64.exe`(音频)、`ffmpeg.exe`(封装)
- 参数:`--crf`、`--input-res 1920x1080`、`--fps`
- 下载源:
  - x264: `artifacts.videolan.org/x264/release-win64/x264-r3173-4815cca.exe`
  - qaac: `github.com/nu774/qaac/releases/download/2.81/qaac_2.81.zip`(需 iTunes/Apple Application Support)
  - ffmpeg: `github.com/GyanD/codexffmpeg/releases/download/7.1/ffmpeg-7.1-essentials_build.zip`

### 5. 其他
- 命名管道:`\\.\pipe\rayof`(IPC)
- 工具:`uaclt.exe`
- 显示器:`getAllDisplays`、`displayFrequency`
- 缓存:`{E962E788-4563-4682-A774-6A9C4A1189A3}.*`(music_cache、air_auto 等)
- 临时目录:`/core/bin/.utemp`、`/captures`(.mp4 录像)

## 关键结论

游戏 = **街机音游**(maimai 类),使用:
- Amusement IC 读卡器(玩家登录)
- LED 灯板 + VFD 屏(街机外设)
- 服务器(成绩上传、资源分发)
- 录像功能(自动录制游玩视频)

作者 inonote,版本 v2.01。
