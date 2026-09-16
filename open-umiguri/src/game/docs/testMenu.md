# testMenu（测试菜单模块）语义说明

> 对应反混淆源 `v_cr_27931`（现名 `testMenu`），位于
> `src/game/logic/0065-gameCore_x4.js`。本文件是人工逆向结论，不参与构建。

## 职责
`Esc+Enter` 打开的系统测试菜单：加载 `ui/testMenu.rsb`，构建各页面，处理按键/触摸，
每帧更新；并驱动 InputDelay / 硬件信息 / 视频导出等测试页。

## 按键位（输入掩码）
| 变量 | 值 | 含义 |
|---|---:|---|
| `BTN_DOWN` | 1 | 下 |
| `BTN_UP` | 2 | 上 |
| `BTN_ENTER` | 4 | 決定 |
| `BTN_TEST` | 268435456 | Test(Esc) |
| `BTN_SERVICE` | 536870912 | Service(Enter) |

（左右为 8 / 16，只出现在 OutputTest 参数页。）

## 类
- `MenuState`（`v_t_31822`）：字段 `Gi`(运行中) `r0`(当前页名) `a0`(当前页) `Qc`(跳过一帧)
  `eu`(边沿位) `tu`(按住位) `ve`(滑块区域数组) `iu`(确认框状态 `{nu,ru,au,su,Ee}`)。
- `SliderZone`（`v_i_31823`）：字段 `ou`(起始列) `w`(列数) `lu`(状态) `Ae`(动作位)。
- `MenuPage`（`v_n_31824`）：字段 `cu`(名) `uu`(页面根元素) `gu`(条目) `au`(光标)
  `fu`(进入) `_u`(离开) `du`(按键) `hu`(每帧) `vu`(移动光标) `wu`(可用按键位) `On`(页面状态)。
  方法 `pu`(移动光标) `ku(name)`(取 `textMenu<name>` 元素) `bu()`(当前条目元素)；
  静态 `Vc(name)` 建页。
- `DelayEntry`（`v_s_31852`）：InputDelayTest 样本 `{lr 完成, xR 延迟}`。

## 顶层状态
`currentRsb`(已加载的测试菜单场景) `menuState`(`MenuState` 实例) `guideElements`(keyGuide 元素)
`pages`(页面表 name→MenuPage)。

## 主要函数
| 函数 | 含义 |
|---|---|
| `handleDialogInput(buttons)` | 确认框输入处理 |
| `positionDialogCursor()` | 摆放确认框光标 |
| `confirmDialog(msg,type,cb)` | 显示确认框 |
| `switchPage(name)` | 切页（离开旧页、进入新页） |
| `buildPages()` | 注册所有页面与各自回调 |
| `menuLoop(btnMask,heldMask,frameArg)` | 每帧：合成按键位 → 分发 du/hu |
| `openTestMenu()` | 加载 rsb 并进入 `sysTestMenu` |

## 页面
`Root`(InputTest/OutputTest/Graphics/HardwareInfo/AmReaderTest/VfdTest/InputDelayTest/
DataState/VideoExportTest/Reboot/Shutdown/Exit)、`InputTest`、`OutputTest`(虚拟按键参数)、
`Graphics`(分辨率/帧率/统计)、`HardwareInfo`、`AmReaderTest`、`VfdTest`、
`InputDelayTest`、`DataState`、`VideoExportTest`。

## 对外 API（返回对象方法名仍为 mangled，全局共用暂未改名）
| 方法 | 含义 |
|---|---|
| `ue(onReady)` | 加载 `ui/testMenu.rsb` 并建好各页；失败回调 `onFail` |
| `Ju()` | 注册每帧循环 `sysTestMenuLoop` |
| `T0()` | = `openTestMenu` |
| `Gi()` | 是否运行中 |

> ⚠️ 页面/元素相关的对象字段（`uu/cu/gu/au/fu/_u/du/hu/vu/wu/On/ou/w/lu/Ae` 等）是
> property mangling 的名字，全游戏共用，改名会误伤其它模块，故仅在此对照说明。
