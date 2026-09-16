# inputModule（游戏输入模块）语义说明

> 对应反混淆源 `v_I1_27893`（现名 `inputModule`），位于
> `src/game/logic/0063-v_Ae_27892_x29.js`（该片段含 29 个模块，本模块在其中）。
> 本文件是**人工逆向结论**，用于辅助阅读；不参与构建。

## 职责
维护 32 个主档位 + 6 个 air 的按键状态；每帧由 `oe()` 采样三种来源并合成状态位。

档位顺序 = 握手 `fe` 串（38 字符）：`A1B2C3D4E5F6G7H8I9J0K;L'M,N.O/P-RSTUWY`。
lane 0..31 为主档位，32..37 为 air（R S T U W Y）。

## 状态

| 变量 | 原名 | 含义 |
|---|---|---|
| `laneKeyChars` | `v_r_28343` | 档位按键字符表（38） |
| `laneState` | `v_s_28344` | 档位状态位：bit0=上一帧、bit1=当前按下；`oe()` 每帧先右移 1 再置位 |
| `laneVk` | `v_a_28345` | 档位 → VK 码（`W=false`/`useDirectInput=false` 路径） |
| `laneAnalog` | `v_o_28346` | 传感值：板/键盘按下写 200，否则 0 |
| `keyBindings` | `v_l_28348` | 导航键绑定（left/right/up/down/enter/esc/space/shift/F1..F12） |
| `useDirectInput` | `v_c_28349` | 输入模式，取 `handshake.rm.wm`；true=走 DIK 轮询 |
| `pointerCallbacks` | `v_e_28351` | 指针回调表（`tb`/`eb` 增删） |
| `keyEventCallbacks` | `v_u_28352` | 按键事件回调表（`$I`/`ZI` 增删） |

`KeyBinding`（`v_t_28347`）字段：`Ae`=名字、`lu`=状态位、`rI`=VK、`sI`=DIK。
（这三个字段是 property mangling，全局共用，暂未改名。）

## 对外 API（返回对象的方法名仍是 mangled，逐个对照）

| 方法 | 含义 |
|---|---|
| `ue()` | 安装 canvas 指针监听；`di8KbdStart()` |
| `ce()` | `di8KbdShutdown()` |
| `fe(str)` | 设置键位串（校验长度 38），生成 `laneVk` 并 `kbdStart(vkList)` |
| `tb(id,fn)` / `eb(id)` | 注册 / 移除指针回调（`fn(type,x,y)`，type：0=down 1=move 2=up 10=enter 11=leave） |
| `$I(id,fn)` / `ZI(id)` | 注册 / 移除按键事件回调（`fn(keyName)`） |
| `oe()` | **每帧更新**：`laneState>>=1` → 采样（DIK/VK/街机板/LED）→ 写 `laneAnalog`；并对 2===状态 的导航键派发 `keyEventCallbacks` |
| `he` | 常量 20 |
| `ve()` | 返回 `laneState` |
| `sR()` | 返回 `laneAnalog` |
| `aR()` | 各档位是否「当前按下」（bit1） |
| `oR()` | 各档位「按下」掩码（`2 & state`） |
| `lR()` | 各档位「上一帧按下」（bit0） |
| `cR()` | 各档位「上一帧未按」 |
| `uR()` | air(32..37) 是否有按下 |
| `fR()` | air 是否有上一帧按下 |
| `_R()` | air 是否有任意状态 |
| `hR()` | air press 且 edge 同时成立 |
| `dR()` | air 综合位置 `{ y, hand }`（y∈[-1,1] 由 6 个 air 加权） |
| `vR()` | 返回 `keyBindings` |

## 采样来源（`oe()`）
1. `boardLanes.x7()` → 32 档电平（≥20 视为按下）；`boardAir.I7()` → 6 air（>63）。
2. 否则 `ledOutput.Q6()/ev()` → LED 板值。
3. 否则键盘：`useDirectInput ? di8KbdHeld(dik) : kbdHeld(vk)`，
   并与宿主面板直连补丁合并：`window.__umgLanes[lane]`。

外部依赖：`keyCodes`（键码常量表）、`inputEnabled`（轮询开关）、`glContext`（canvas 指针捕获）、
`boardLanes`/`boardAir`（街机板）、`ledOutput`（LED/串口）。
