# UMIGURI 游戏源码恢复成果

> 通过 Chrome DevTools Protocol (CDP) 在游戏运行时 dump 出的完整渲染端源码,并经过反混淆处理。

## 文件说明

| 文件 | 大小 | 说明 |
|------|------|------|
| `game_main.original.js` | 3.75 MB | **完整 bundle 原始 dump**(THREE.js + Effekseer + 游戏逻辑)|
| `game_logic.min.js` | 558 KB | 从 bundle 中切出的**游戏主逻辑 IIFE**(terser 压缩版)|
| `game_logic.deobf.js` | 1.36 MB | **反混淆后的游戏主逻辑**(可读版本)|
| `preload.js` | 1.5 KB | 渲染进程 preload 桥(`umgr_elc` API)|
| `string_constants.txt` | 26 KB | 提取的全部 2086 个字符串常量(UI 文本/路径/API)|
| `core_logic.snippets.txt` | 10 KB | 核心逻辑片段(判定/血条/计分/课程规则)|

## Bundle 结构

`game_main.original.js` 由 21 个顶层语句组成,按偏移划分:

| 偏移范围 | 内容 | 混淆状态 |
|---------|------|---------|
| 0 ~ 311万 | THREE.js 3D 引擎 + Effekseer 粒子 + 日期/工具库 | 语义命名(无需反混淆)|
| 311万 ~ 327万 | 字符映射表(字体内嵌 Unicode→字形数据) | 纯数据 |
| 327万 ~ 384万 | **游戏主逻辑 IIFE** | terser 压缩 → 已反混淆 |

## 反混淆说明

### 已完成
- **变量名去混淆**:7692 个 terser 短变量名重命名为 `m_*`(模块级)/`v_*_位置`(局部),消除同名冲突
- **枚举语义化**:
  - `fe` → `JUDGE_JUSTICE_CRITICAL`(正义暴击)
  - `w0` → `JUDGE_JUSTICE`(正义)
  - `_e` → `JUDGE_ATTACK`(攻击)
  - `he` → `JUDGE_MISS`(丢失)
- **代码格式化 + 可解析验证**

### 无法完全恢复的部分(诚实说明)
- **属性名(property mangling)**:`Fi`、`Be`、`Wt`、`zb`、`TP` 这类 terser 混淆的**对象字段名**,原始名已被 terser 永久丢弃,信息论上不可逆。
- **局部临时变量原始名**:terser 用单字母 `t/i/e` 复用,原始名同样已丢失。
- 这些字段的真实含义需结合**上下文 + 字符串常量 + 明文数据文件**(见下)推断。

## 游戏架构(从源码识别)

### 判定系统
```
JUDGE_JUSTICE_CRITICAL (正义暴击) / JUSTICE (正义) / ATTACK (攻击) / MISS (丢失)
```

### 技能 DSL(与 data/skills/*.ucsl 明文对应)
指令:`Boost`(加成)、`Kill`、`Counter`(计数)、`If`/`ClearIf`(条件)、`NoteCat`/`NoteType`/`Answer`(判定条件)、`JudgeMode`(判定模式)、`CountDef`、`TargetChara`

### HTTP API(与主进程通信)
```
/1/umiguri/getCharaStates, getCourseRecords, getOptions, getProfile, getRecords, setCharaState, setOptions, setProfile, setRecord
/1/user/login, logout
```

### 文件路径
```
/chara/  /courses/  /skills/  /voices/  /player_scenes/  /nameplates/  /titles/  /music/
/una/hiiragi.una, natsukawa.una, sakuragi.una
/data.arc, /caches/music.json, /default_order_chara.txt
```

### 资源类型
- 68 个 .dds 纹理、43 个 .wav 音效、.krtbl 存档表、.glb 3D 模型

## 如何阅读

1. **看游戏逻辑**:打开 `game_logic.deobf.js`,搜索关键字符串定位:
   - `courseRule` → 课程规则(伤害/治疗/判定硬化)
   - `boardScore` → 计分与评级
   - `JUDGE_RESULT` → 判定分发
   - `JUDGE_JUSTICE_CRITICAL` → 判定类型枚举
2. **看字符串常量**:`string_constants.txt` 里是全部明文字符串,是理解逻辑的"地图"。
3. **看第三方库**:`game_main.original.js` 前半部分是 THREE.js/Effekseer,已是语义命名。

## 恢复方法回顾(可复现)

1. Frida spawn 游戏主进程,附加 `--remote-debugging-port=9222`
2. 连接 CDP `/json/list`,找到 page target(renderer)
3. `Debugger.enable` → 收集 `scriptParsed` → `Debugger.getScriptSource` 拉取全部脚本源码
4. 主进程 Node 后端代码因 Electron Fuse 禁用 inspector 无法通过 CDP 获取(需另行逆向 native asar 解密函数)
