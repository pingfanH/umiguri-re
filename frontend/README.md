# 前端可运行环境(已跑通数据加载 + 渲染器)

## 运行方法
```bash
cd recovered/frontend
node server.js          # 启动前端 + 虚拟文件系统
# 浏览器打开 http://localhost:8080
```

## 当前状态(重大进展)

### ✅ 已跑通
1. **前端代码加载** — index.html + main.css + main.js 完整执行
2. **.una 语言包解密** — 前端用自身解密算法(m_ds + st.xl)解密,191 个文件(字体/着色器/纹理/字符串表)
3. **数据加载** — 技能(.ucsl)、标题(.txt)、铭牌、语音、角色目录全部遍历
4. **THREE 渲染器初始化** — canvas 1920x1080 + data-engine="three.js r137"
5. **WebGL 上下文可用** — WebGLRenderingContext OK

### ⏳ 卡在
场景 UI 创建(数据加载进度条完成后,语言选择场景 m_B1 未显示),headless Chrome 环境限制。

### 关键修复(本次)
1. `/fs/file` 失败时返回 404(之前返回 200+JSON,导致前端误判失败为成功)
2. 补全路径映射 `/extra/` → `core/extra/`、`/textures/` → `core/textures/` 等

## 虚拟路径映射(server.js)
| 虚拟路径 | 真实路径 |
|---------|---------|
| /chara/ /music/ /voices/ /skills/ /courses/ | data/... |
| /player_scenes/ /nameplates/ /titles/ | data/... |
| /textures/ /una/ /sounds/ /config/ /extra/ | core/... |

## .arc/.una 解密算法(已完整逆向)
```
XOR 流密码:
  header offset = -1 - (0x10C3C9F8 ^ getUint32(5)) + 5
  4 个 PRNG 状态: 3125038119, 452525368, 3518972124, 1813668011 (rotate right)
  header 条目: offset^t, size^e, nameLen^(n&255), name每字节^(r&255)
  文件数据: m_Wa(P2=1/2) XOR表 + m_Na 位置XOR + gzip解压
```
解密工具: `recovered/decrypt_arc.js`(可批量解密所有 .arc/.una)
