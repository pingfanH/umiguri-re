# UMIGURI-RE 项目交接文档

> 用于把当前工程状态交接给另一个 session 做「反混淆 + 重构」。
> 仓库根目录：`/Users/pingfanh/project/umiguri-re`
> 最新提交：`107aac9 反混淆: 加入 Babel 反混淆器并生成 game_main.deobf.js`

---

## 0. 一句话概述

从渲染端 dump 出 UMIGURI（inonote 的 PC 音游，CHUNITHM 类）的完整前端 bundle，**用 Tauri 2 重写了宿主层**（Electron/Node → Rust 文件系统 + 自定义协议），并做了简体中文化。游戏逻辑仍是原始的**压缩混淆**代码，以密文 `main.js.enc` 形式加载。

---

## 1. 平台与目录

| 路径 | 说明 |
|---|---|
| `game_main.original.js` | **原始 bundle**（3.66MB）。打包实际用它 |
| `game_main.deobf.js` | 反混淆版（11.23MB，`m_*`/`v_*` 命名，`node --check` 通过）|
| `deobf-rename-map.json` | 反混淆「原名→新名」映射 |
| `game_logic.min.js` / `game_logic.deobf.js` | 早期只切游戏逻辑切片的版本（已被全量版取代）|
| `assets/` | 游戏数据（68M）：`core/`(45M) `data/`(23M) `terms/` `license.xml` |
| `assets - 副本/` | 原始数据备份（解包形态）|
| `tauri/` | **主用**：Tauri 2 桌面 + iOS + Android |
| `tauri/www/` | 前端：`index.html` `main.css` `tauri-bridge.js` `diag.js` `decrypt-loader.js` `main.js.enc` |
| `tauri/src-tauri/src/lib.rs` | **Rust 后端**（文件系统/自定义协议/资源根）|
| `tauri/src-tauri/gen/{android,apple}` | 生成的原生工程（含我们对 manifest/gradle/Info.plist 的修改）|
| `mobile/` | Capacitor 版（`mobile/www/mobile-bridge.js` 是**另一套较旧的桥**）|
| `desktop/` | 早期 Electron 版（`app-main.js` `preload.js` `encrypt.js`）|
| `frontend/` | 早期 mock：`handshake_full.json`（**真机握手 dump，权威参考**）`mock.js` |
| `tools/` | 工具（见 §5）|
| `panel.html` | 虚拟键盘的设计原型 |
| `decrypt_arc.js` | 早期 `.arc/.una` 解包器（独立实现，可用于交叉验证）|

---

## 2. 数据格式

### 2.1 `.una` / `.arc` 归档（游戏原生格式）

游戏**原生支持归档**（`Ne` 模块）：启动时探测 `/reverie/_VERSION`，**读不到**就进入「归档模式」，用 `new ds("/una/hiiragi.una",0,2)` 按表读取。当前 `assets/core/una/*.una` **已重新打包成归档文件**（不是目录）。

格式（`tools/umg.js` 已完整实现，来源是反混淆代码里的 `Va/Wa/Na/vs.*`）：

```
头部: [0..3] 前缀  [4] 标志(bit0=M2 文件体gzip, bit1=R2 有表头, 必须=1)  [5..8] u32 = MAGIC ^ (4 - tableOffset)
MAGIC = 281266680 (0x10C3C9F8)
表项(表在文件尾部): u32le(off)^t, u32le(off+4)^e, u8(off+8)^(255&n), name[i]^(255&r)
        t,e,n,r 每项前 rotr 2/3/5/3; 初值 3125038119,452525368,3518972124,1813668011
        fileOffset 相对 arc[5]; 数据起点 = fileOffset+5
文件体: XOR表(P2=0 用 Va, P2=1/2 用 Wa, 位置相关) -> Na(逐字节流密码) -> [gzip(buf[1:])] -> [P2=2 去首字节]
P2 约定: .una=2 ; data.arc(角色)=1 ; data.arc(语音)=1
```

- 数据布局：**数据在前、表在尾部**（与原始发行一致）。
- `.una` 在 APK 里必须 **`noCompress`**（Stored），否则 AssetManager 不能 seek。
- **必须的游戏补丁**：`vs.prototype.pi` 的 `s()` 里
  `return t.subarray(2===n.P2?1:0)` → `return Uint8Array.from(t.subarray(...))`。
  原因：`subarray` 返回视图（`byteOffset=1`），而 `Sb`（版本校验）用 `decode(n.buffer)`、UI 加载用 `t(e.buffer)` —— 视图的 `.buffer` 会带上被剥掉的前缀字节，导致 `parseInt` 得 `NaN` → 进「数据修复模式」、RSB 解析失败。这是归档模式**必须**的补丁。

### 2.2 RSBF（UI 资源 `*.rsb`）

`ui/*.rsb` 是 UI 场景：`RSBF` 魔数 + 20 字节头（**偏移 16 处是字符串表偏移 STR**）+ 若干 chunk（4 字节 ASCII 标签）：

- `TXUR` 贴图集引用 / `FNTI`+`FNTS` 字体 / `SFNT` / `KFSL` / `ACTQ` / `SHDR` / **`ELMT`（元素流，无长度字段）**；字符串表在**文件末尾**。
- **元素反序列化字段（已实测验证）**：`type`(u32) → `flags`(u32, bit0=!可见) → **`name`(u32 字符串偏移) @+8** → `Ed` @+12 → `Te`(x) @+16 → `Qt`(y) @+20 → `Le`(w) @+24 → `G0`(h) @+28 → …
  - 文本元素(Rl) 的**文本键在元素最后一个 u32**（如 180 字节的元素在 +176）。
  - 坐标是**相对父容器**的。
- 元素有**顺序序号**：游戏里多处用 `yk(序号)` 取元素（例如 `_.mu=w.lt.yk(182)`），**插入/删除元素会让后面所有序号错位**，必须同步改这些字面量。
- `tools/rsb_elements.py` 可按「名字字符串偏移」在元素流中定位元素起始（= 该 u32 的位置 - 8）。
- **已知坑（重要）**：我曾尝试往 `ui/testMenu.rsb` 插入元素（克隆行/提示）→ **启动卡在资源加载 28/45** 并抛 `DataView` 越界（该 RSB 启动时会预载）。已回退，RSB 恢复原版。**结构改动必须在完整解析验证后再打包**。

### 2.3 `stringTable.rvs`（RVST 语言字符串表）

```
"RVST" | u32 version | u32 count | count × (u16 keyLen, key, u16 valLen, val)
```
每个语言包一份：`assets/core/una/{hiiragi,sakuragi,natsukawa,zh-CN}.una` → `tables/stringTable.rvs`。
`tools/umg.js strtable <file> list|get|set` 已实现读写。

### 2.4 贴图

`*.dds`（DXT1/3/5 或未压缩 RGBA）。中文包里有 20 张重绘的 DXT5 图集（`assets/core/una/zh-CN.una/textures/`）。

---

## 3. 打包链路（改游戏代码后）

1. 改 `game_main.original.js`（**压缩混淆版**；也可在 `game_main.deobf.js` 里定位，但打包用的是原版）
2. 加密：
   ```bash
   node tools/umg.js main-encrypt game_main.original.js tauri/www/main.js.enc
   ```
3. 同步 5 份副本（必须）：
   ```bash
   for f in desktop/main.js.enc mobile/www/main.js.enc \
            mobile/ios/App/App/public/main.js.enc \
            mobile/android/app/src/main/assets/public/main.js.enc \
            mobile/android/app/build/intermediates/assets/debug/public/main.js.enc; do
     [ -d "$(dirname "$f")" ] && cp tauri/www/main.js.enc "$f"
   done
   ```
4. 改前端桥后：`tauri/www/tauri-bridge.js`（Tauri 三端共用）

---

## 4. Android 平台要点

| 项 | 值/位置 |
|---|---|
| 资源根 | `lib.rs::default_data_root()`：优先 `Documents/UMIGURI`（可写层：core 缓存/data 补丁/存档）→ 应用外部私有 → 内部 files。**默认不解压** |
| 只读资源 | 直接读 APK 的 `assets/game_data/**`（`apk_open/apk_size/apk_read_range/apk_list`，用 `AAsset`+`AAsset_seek64`）|
| 可写覆盖 | `resolve_src()` = 磁盘（**必须可读**，防止重装后旧 uid 残留文件）→ APK |
| PATH_MAP | `reverie/`→`core/una/hiiragi.una/`、`reverie_exField/`→`natsukawa.una/`、`reverie_en-US/`→`sakuragi.una/`、`reverie_zh-CN/`→`zh-CN.una/`、`music/`→`data/music/`、`una/`→`core/una/`、`sounds/`→`core/sounds/`、`config/`→`core/config/`、`license.xml`→`license.xml` …（完整见 `lib.rs`）|
| 路径归一化 | `vpath_to_rel()`：折叠重复斜杠、**保留匹配时的尾斜杠**（`config/` 这类前缀必须以 `/` 结尾匹配），最后 trim |
| Manifest | `screenOrientation=sensorLandscape`、`appCategory=game`、`isGame=true`、`MANAGE_EXTERNAL_STORAGE`、`requestLegacyExternalStorage=true` |
| `build.gradle.kts` | `androidResources { noCompress += ["una","arc"] ; ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~" }` ← **必须去掉默认的 `<dir>_*`**，否则 `data/nameplates/_0000*`、`data/voices/_0001*` 整目录不进 APK |
| 构建 | 见 §6；资源变动后要清中间产物 |
| Kotlin `MainActivity` | 只 log 「Documents 是否可写」，**不要跳系统设置页**（跳转会把 app 顶到后台，表现为黑屏）|

---

## 5. 工具

| 工具 | 用途 |
|---|---|
| `tools/umg.js` | **统一资源工具**：`list` / `unpack` / `pack` / `roundtrip` / `unpack-all` / `pack-una` / `unpack-una` / `strtable`(RVST 读写) / `main-encrypt` / `main-decrypt`。`--p2 0|1|2`、`--m2` |
| `tools/rsb_elements.py` | 按名字定位 RSB 元素（打印 name/type/Te/Qt/Le/G0/字节区间）|
| `tools/deobfuscate.js` | Babel 绑定级反混淆 + 美化（`NODE_PATH=/tmp/deobf/node_modules`）|
| `tools/cn-textures/*` | 中文图集流水线：`scan_text.py`(RSB 区域)、`extract_ocr.py`+`ocr.swift`(Vision OCR)、`make_cn.py`(绘制)、`to_dxt5.py`(编码 DXT5)、`spec_td.py`/`spec_all.py`(翻译表) |
| `decrypt_arc.js` | 早期独立解包器（交叉验证用）|
| `desktop/encrypt.js` | AES 加解密（`tools/umg.js main-encrypt` 等价）|

常见命令：
```bash
node tools/umg.js list   assets/core/una/hiiragi.una
node tools/umg.js unpack assets/core/una/zh-CN.una /tmp/out --p2 2
node tools/umg.js pack   /tmp/out assets/core/una/zh-CN.una --p2 2 --m2
node tools/umg.js strtable /tmp/out/tables/stringTable.rvs get svcMenuRootDataState
NODE_PATH=/tmp/deobf/node_modules node tools/deobfuscate.js game_main.original.js game_main.deobf.js --map deobf-rename-map.json
python3 tools/rsb_elements.py /tmp/out/ui/testMenu.rsb
```

---

## 6. 构建命令

```bash
# Android (debug APK；只编 arm64 快)
cd tauri
export ANDROID_HOME=/Users/pingfanh/Library/Android/sdk
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk/26.1.10909125
export PATH="$PATH:$HOME/Library/Android/sdk/platform-tools"
# 资源/资产变动后必须清(否则 AGP/tauri-build 用陈旧副本 → EISDIR / DataFile null)
rm -rf src-tauri/gen/android/app/build \
       src-tauri/gen/android/app/src/main/assets/game_data \
       src-tauri/target/aarch64-linux-android/debug/game_data
cargo tauri android build --debug --apk --target aarch64
# 产物: tauri/src-tauri/gen/android/app/build/outputs/apk/universal/debug/app-universal-debug.apk

# 桌面 / iOS
cargo tauri dev
cargo tauri ios dev "iPhone 16 Pro"
```

安装/调试（无线 ADB 这台机器就是设备名）：
```bash
D=adb-f8d08bb0-n7e6Zx._adb-tls-connect._tcp
adb -s "$D" install -r <apk>
adb -s "$D" shell am start -n jp.inonote.umiguri/.MainActivity
# devtools: adb forward tcp:9222 localabstract:webview_devtools_remote_<pid> → chrome://inspect
```

---

## 7. 游戏内部机制（重构前必读）

### 7.1 bundle 结构（`game_main.original.js`）

21 个顶层语句，按偏移：

| 偏移(字符) | 内容 |
|---|---|
| 0 ~ ~311万 | THREE.js r137 + Effekseer + 工具库 + 字符映射表 |
| ~327万 ~ ~384万 | **游戏主逻辑 IIFE**（terser 压缩 + property mangling）|

反混淆版里的锚点：`__umgLanes` 补丁 **@177894**、测试菜单 **@186333~186670**、前端桥 `umgr_elc` **@190452**。

### 7.2 握手（`window.umgr_elc._`）

桥接提供，游戏读取：`O.ct`(玩家名) `O.p9`(等级) `O.B`(rating) `fe`(键位串) `I4`(语言) `W`(输入模式) `g1`(语言包列表) `h1`(构建信息) `u1`(分辨率)。

- `fe`：**38 字符**扁平键位表（游戏校验 `38===t.length`）：
  `A1B2C3D4E5F6G7H8I9J0K;L'M,N.O/P-RSTUWY`
- `W: true` → 走 **DIK 轮询**（`di8KbdHeld`）；`false` → 走 VK（`kbdHeld`）。
- `g1` 决定加载哪些 `.una`；`I4` 是当前语言（`ja-JP`/`en-US`/`exField`/`zh-CN`）。

### 7.3 输入模块（`I1`）

- 32 个主档位 + 6 个 air：`s[t]` 数组；档位顺序 = `fe` 的字符顺序（lane0='A', lane1='1', … lane31='-', lane32..37='R','S','T','U','W','Y'）。
- **档位查询**：`Ei=di8KbdHeld(dik)` → 桥里 `DIK_TO_VK[dik]` → 查 `keyState || touchState`。
- 触摸面板直连：桥写 `window.__umgLanes[lane]=1/0`，游戏在 `s[t] |= Ei(...) || window.__umgLanes[t] ? 2 : 0` 处合并（**已打补丁**，见 §8）。
- 测试菜单里的「滑块区域」：`f.ve=[new i(colStart,colWidth,action)]`，覆盖 lane 区间 `[2*col, 2*(col+colWidth))`，动作为 `o=下(1) l=上(2) v=決定(4)`（**我们改过**，见 §8）。
- 测试菜单输入位掩码：`g()` 里 `esc→c(268435456) enter→u(536870912) up→l(2) down→o(1)`；**我们加了 `left→8 right→16`**。

### 7.4 语言包读取（`Ne`）

`l = qu("/reverie/_VERSION")`（`qu`=`st.sn`）：`_VERSION` 读得到 → 目录模式；读不到 → **归档模式**。
归档模式：`new ds("/una/<pkg>",0,2)` → `_2`(size)+`xl`(slice)+`E4`/`pi`(表查询)。`Sb()` 逐个包校验 `_VERSION` 与 `g1` 的 version。

### 7.5 测试菜单（`cr` 模块）

- 打开：Esc+Enter 同时按下 → `m()` → 场景 `sysTestMenu`（在 bundle 里搜 `"sysTestMenu"`）。
- 页面：`n.Vc(name)` → `i.uu = w.lt.ot("page"+name)`；每页：`gu`(条目名数组) `au`(光标) `pu`(上下) `du`(确认) `vu`(光标贴图) `fu`(进入) `_u`(离开) `hu`(每帧)。
- `d(page)` 切页；`a(msg,type,cb)` 确认框；`Ue(key)` 取字符串；`ku(name)=ot("textMenu"+name)`；`bu()=ku(gu[au])`。
- **`ot()` 只向下查找**；光标元素 `textMenuCursor` **只存在于 3 个页组**：`pageRoot`(cursor@980)、`pageOutputTest`(cursor@9636)、`pageGraphics`(cursor@12320)。**其它页（DataState/HardwareInfo/Vfd/InputDelay）没有 cursor，`vu()` 会取到 null**。
- 白色 UI（提示条）：`layerKeyGuide` @(320,950) 1280×110，内含 `keyGuideDown`(x=0) `keyGuideUp`(x=240) `keyGuideEnter`(x=960) `keyGuideLabel`，各 240×110；`wu` 位控制显示：`_.mu.Be=!!(wu&o) _.Su.Be=!!(wu&l) _.xu.Be=!!(wu&v)`。
  - **序号引用（原始版）**：`_.mu=w.lt.yk(182) _.Su=w.lt.yk(186) _.xu=w.lt.yk(190) _.Iu=w.lt.yk(172)`，`_.yu/.Cu/.Au/.Tu/.Lu = _.Iu.yk(176~180)`。
- 页面坐标（相对页面容器）：
  - `pageOutputTest` @(610,140) 700×800；行：label Te=100 / value Te=550，`Qt=100,130,160,190,220`；`textMenuBack` Qt=280；`textMenuCursor` Te=50 Qt=100 30×24。
  - `pageDataState` @(610,140) 700×800；行 label Te=100 / value Te=450，`Qt=100..250` 步长 30。
  - `pageGraphics` 3 行 + Back（自带 cursor）。

---

## 8. 现有补丁清单（务必保留）

**游戏代码（`game_main.original.js`）**
1. `let e=["ja-JP","en-US","zh-CN"]`、`Ui=["ja-JP","en-US","zh-CN"]`、`s={…,"zh-CN":"/una/zh-CN.una"}` —— 加入简体语言。
2. B1 键位 `yk` 序号重排（13→16,18→21,19→22,24→27,25→28,26→29,32→35,33→36,36→39,37→40,42→45,43→46,44→47,49→52）。
3. `t.yk(21).Je="textLangSelect_"+Hi`（原为 `"zh-CN"===Hi?"en-US":Hi`）。
4. `fe` 长度校验改回 **38**（我们曾误改成 39，已回退）。
5. `vs.pi` 的 `s()` 返回值改 `Uint8Array.from(...)`（**归档模式必需**，见 §2.1）。
6. 「数据修复模式」文案表加 `zh-CN` 条目，并把 `Jl()` 改成 `return i[Hi]||i["ja-JP"]`（否则语言为 zh-CN 时启动即崩）。
7. `s[t] |= Ei(...) || (window.__umgLanes && window.__umgLanes[t]) ? 2 : 0`（档位直连，DIK 路径 + VK 路径各一处）。
8. `f.ve=[new i(0,3,o),new i(3,3,l),new i(6,3,8),new i(9,3,16),new i(12,4,v)]`（A–F 上下 / G–I 左 / J–L 右 / M–P 決定）。
9. `g()` 里加 `case"left":…(e|=8)…case"right":…(e|=16)…`；并在 `f.tu=e,f.eu=i` 后合并 `window.__umgPadTake()`（白色 UI 触摸区）。
10. canvas `pointerdown` 处理里加 `window.__umgPadAt && window.__umgPadAt(i.offsetX,i.offsetY)`。
11. 测试菜单「虚拟按键设置」= 改造 **OutputTest 页**：
    `t.gu=["OutputTest0".."OutputTest4","Back"]`、`t.wu=l|o|v`、
    `keys=["rowH","colGap","airGap","airRowGap","bottomInset",null]`（第 6 项 = Back → `d("Root")`）、
    `K()` 写值 + 把「触发距离」写到 `keyGuideLabel` 并 `setGuidePos`、
    `du`：↑↓ 移动、←→/Service 调值、Test(Esc) 返回。

**前端桥（`tauri/www/tauri-bridge.js`）**
- `fe` = 38 字符；`MAIN_FRONT/MAIN_BACK/AIR_KEYS = R S T U W Y`
- `window.__umgLanes`（档位直连）、`window.umgKeyPanel`（参数 API：`get/set/reset/radius/setRadius/setViz/settingsBegin/settingsEnd/setRows/openEditor/closeEditor/cycle`）
- 面板参数 `PANEL_DEFAULTS`：`rowH 192 / colGap 0 / airGap 16 / airRowGap 0 / bottomInset 30 / radius(移动端10,桌面25) / showHit false`
- 触摸命中：`keysInCircle`（手指为圆心、`TOUCH_RADIUS` 为半径，圆内相交的键都触发，跳过 0×0 隐藏键）
- `UMG_ORIGIN`：Windows/Android → `http://umg.localhost`，其它 → `umg://localhost`
- 白 UI 触摸区 `PAD_RECTS`：x=320/560/800/1040/1280，y 940~1070
- 手势：禁双指缩放/滑动（viewport + `touch-action:none` + preventDefault）
- 桌面/移动共用；Capacitor 的 `mobile/www/mobile-bridge.js` 是另一套较旧实现（`W:false`、`di8KbdHeld` 桩）

**Rust（`tauri/src-tauri/src/lib.rs`）**：§4 全部；命令 `fs_list/fs_file/fs_size/fs_read/fs_write/handshake/diag` + `umg://` 协议。

**语言包文案（`stringTable.rvs`，zh-CN 与 ja-JP 各一份）**
`svcMenuRootOutputTest`=虚拟按键设置 · `svcMenuOutputTestSideDevLedL`=按钮高度 · `…SideDevLedR`=每列间距 · `…MainDevLedPad`=air 距底边 · `…MainDevLedSep`=air 间距 · `…AllLeds`=距底边 · `…Caption`=触摸可视化
（DataState 的 6 个键保持原值：乐曲数/赛道数/…）

---

## 9. 已知坑 / 约束

1. **property mangling 不可逆**：对象字段名（`.Fi .Le .Qt .Te .G0 .Wt .Be …`）是 terser 压缩时丢掉的，反混淆只改「变量绑定」，字段名原样保留。
2. **`yk(序号)` 会错位**：往 `ui/*.rsb` 插/删元素后，`w.lt.yk(N)` 等字面量必须同步修。已实测：往 `testMenu.rsb` 插元素会导致**启动卡 28/45 + `DataView` 越界**（该 RSB 启动预载）。
3. **`.una` 必须 Stored**（`noCompress`），且 `vs.pi` 必须打 §2.1 的 `Uint8Array.from` 补丁。
4. **AGP 默认 `ignoreAssetsPattern` 含 `<dir>_*`**，会丢掉 `data/nameplates/_*`、`data/voices/_*`（已修）。
5. **陈旧资源副本**会让 tauri-build/Gradle 报 `EISDIR` / `DataFile null` → 改资源后清 `gen/android/app/build`、`gen/android/app/src/main/assets/game_data`、`target/<triple>/debug/game_data`。
6. **不要**在 `MainActivity` 里 `startActivity(Settings)`（会把自己顶后台 → 黑屏）。
7. **Documents 覆盖层**里可能残留**旧 uid 拥有的不可读文件**（重装后 uid 变），`resolve_src` 要求磁盘候选「确实可读」才采用，否则回退 APK。
8. 桥的 `st.xl` 走 `cachedFile`（fetch 整文件后切片）→ 归档模式会整包入内存（M2 后约 21MB）；如要省内存可改成 `invoke('fs_read',{path,offset,size})`。
9. Capacitor 版与 Tauri 版行为不同（`W:false`、`di8KbdHeld` 恒 0），改一处别忘另一处或明确放弃某一端。

---

## 10. 当前状态 / 未解决

- ✅ 启动 → 选曲 → 测试菜单（含虚拟按键设置页）此前均可达；归档模式 + Documents 覆盖层 + 中文包工作正常。
- ❌ **当前 Android 上「进游戏黑屏」未解决**：最近一次成功安装（16:12）后，app 日志只有系统帧统计、没有我们任何输出（`[umg]`/`Tauri/Console` 都没有），说明还没跑到前端。怀疑与前几轮改动（测试菜单/air 参数/RSB）有关，**但 RSB 已回退**，所以也可能是：
  - Kotlin 权限 Intent 把 app 顶后台（**已改为只 log，需重装验证**）；
  - 或 `/tmp/ddspy` venv 被系统清理后某些资源没重建（不影响打包，仅影响工具）。
- 建议下一步：**先整体回退到「能进选曲」的那次提交**（`acdb1a8` 或 `9ad2d3a` 之前）确认恢复，再逐个把补丁加回。

---

## 11. 给重构 session 的建议流程

1. **只读、先理解**：在 `game_main.deobf.js` 里读；用 §7.5 的锚点定位。
2. **决定"重构的产物形态"**：
   - 方案 A（推荐）：反混淆版作为「可读源码」，改动后**用 terser 重新压缩**（**禁用 property mangling**、`ecma 5/2015`、`toplevel` 视情况），替换 bundle 再加密。→ 需要给 `tools/` 加一个 `minify` 子命令（terser 本地安装）。
   - 方案 B：保持 `game_main.original.js` 为唯一打包源，反混淆版只用于阅读/定位，改动用「精确字符串替换」回写原版（目前一直这么做）。
3. **每改一处都**：`node --check` → 加密 → 同步副本 → 构建 → 装机验证。
4. **不要动 RSB 元素结构**，除非你先写出完整的 RSB 解析器（`ELMT` 元素流 + 字符串表 + 序号影响面）并验证。
5. 环境：Node 25 / npm 11（`~/.npm` 缓存有权限问题，用 `npm_config_cache=/tmp/npmcache`）；Babel 装在 `/tmp/deobf/node_modules`；Python 工具曾用 `/tmp/ddspy` venv（numpy+etcpak+Pillow，被清理后需重建）。
