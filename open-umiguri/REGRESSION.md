# 回归验证清单

> 本工程做了三类**会触碰行为**的改动: 语义重命名(绑定)、property 字段改名、vendor 上游替换。
> 静态校验已通过(`npm run check`), 但**必须真机/桌面回归**。本文给出命令、清单与二分定位方法。

## 0. 构建

```bash
cd open-umiguri
npm install                # 首次
npm run build              # 宿主 dist/www/tauri-bridge.js + 游戏 dist/www/main.js.enc
npm run check              # 语法 + 宿主/游戏契约检查
```

## 1. 桌面运行

```bash
cd src-tauri
cargo tauri dev            # 会先执行 npm run build:host
```

- 数据目录: 默认 `../../assets`(= 仓库 `umiguri-re/assets`),可用
  `UMIGURI_DATA_DIR` / `UMIGURI_ASSETS_DIR` 覆盖。
- 入口 `dist/www/index.html` 加载 `tauri-bridge.js` 后解密 `main.js.enc` 并执行游戏。

## 2. Android 运行

参考仓库根 `PROJECT_INFO.md` 的 Android 章节(noCompress / ignoreAssetsPattern / 清中间产物)。
`src-tauri/tauri.android.conf.json` 的 resources 指向 `../../assets/`(= `umiguri-re/assets`)。
首次需要 `cargo tauri android init` 生成 `gen/android`。

## 3. 回归清单

| # | 场景 | 验证点 | 关联改动 |
|---|---|---|---|
| 1 | 启动 | 进入标题/主界面,无黑屏、无 `ReferenceError`/`DataView` 越界 | 全部(绑定+字段改名) |
| 2 | 语言 | 切换 ja-JP / zh-CN / en-US,文案正常 | `languagePackages`、`currentLang` 等 |
| 3 | 输入 | 物理键盘 + 触摸面板都能打击;`Esc+Enter` 开测试菜单 | `inputModule`、`kbd*Fn`、`__umgLanes` |
| 4 | 测试菜单 | 各页切换、光标、`elementByIndex/elementByName`、`visible` | `.yk/.ot/.lt/.Be` |
| 5 | UI 布局 | RSB 元素位置/尺寸正确(白 UI、信息板、菜单) | `.Te/.Qt/.Le/.G0` → `x/y/w/h` |
| 6 | 3D/背景 | 选曲背景 GLB 正常加载(无相机为空/`GLTFLoader` 报错) | GLTFLoader 上游替换 |
| 7 | 贴图 | DDS/DXT 正常显示(桌面 S3TC;iOS 软解) | THREE 上游替换 |
| 8 | 存档 | 选曲/成绩写入后重启仍在(`records.krtbl`/`player.krtbl`) | `recordsStore`/`settingsStore` |
| 9 | 语言包 | 归档模式读取 `.una` 正常(无「数据修复模式」) | `languagePackages`、`hostBridge` |
| 10 | 合作/课程 | 大厅、课程规则正常 | `coopLobby`、`chartParser`、`gameCore` |

> 重点观察 #6/#8/#10:property 改名最可能影响**序列化字段**与**数据表键**。

## 4. 二分定位(定位是哪类改动引入问题)

`tools/split-game.mjs` 支持逐类关闭:

```bash
# 只做拆分, 不改名/不替换(等价原始 bundle)
GAME_SRC=../../game_main.deobf.js node tools/split-game.mjs --no-rename
node build/bundle-game.mjs

# 只绑定改名, 不改字段
node tools/split-game.mjs --no-props
node build/bundle-game.mjs

# 只绑定+字段改名, 不换上游库
node tools/split-game.mjs --no-upstream
node build/bundle-game.mjs
```

按「原始 → 绑定改名 → +字段改名 → +上游替换」四档依次构建/运行, 即可定位问题档位。
定位到字段改名时, 再从 `tools/prop-symbols.json` 逐个回退字段(重跑 split-game + build)。

## 5. 已知风险点(优先回归)

1. JSON 序列化不会在源码留下字符串字面量 → 安全门槛无法完全识别, 存档字段可能有漏判。
2. vendor 上游替换: 已做 API 面/字符串集合校验, 但未做运行时验证(THREE 若曾被定制会暴露)。
3. 游戏内部 `yk(序号)` 索引与 RSB 元素结构未改动;但若改名影响元素字段顺序解析, 会在 #4/#5 暴露。
