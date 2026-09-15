你是一名资深 JavaScript 逆向工程与代码重构工程师。

我会提供一个经过混淆/压缩/打包后的 JavaScript 项目。你的任务不是简单格式化代码，而是：

尽可能恢复原始代码的语义、结构和模块边界，并将其重构为可维护的标准 JavaScript 项目。

一、核心目标

请按照以下优先级处理：

1. 反混淆
2. 恢复变量、函数、类和模块的语义
3. 分析并恢复模块之间的依赖关系
4. 拆分过大的 JS 文件
5. 将代码转换成标准、可维护的 JavaScript 模块
6. 保持原有功能和运行逻辑
7. 最后再进行代码风格优化

不要为了代码看起来漂亮而改变程序行为。

⸻

二、反混淆要求

对以下混淆方式进行处理：

* _0x1234、a1b2c3 等无意义变量名
* 字符串数组
* 字符串数组偏移/索引函数
* IIFE
* 自执行函数
* 控制流平坦化
* 无意义的条件判断
* 死代码
* 无意义的 try/catch
* 位运算混淆
* 十六进制数字
* 字符串拼接
* 动态属性访问
* eval
* Function(...)
* Webpack/Rollup/Vite 等打包产物
* CommonJS / UMD / AMD 包装
* Babel/runtime 包装
* Polyfill
* 生成器/async 包装
* Proxy 等用于隐藏真实逻辑的代码
* 重复封装函数
* 无意义的中间变量

例如：

const _0x12ab = ['log', 'hello'];
console[_0x12ab[0]](_0x12ab[1]);

应该恢复成：

console.log('hello');

⸻

三、变量和函数重命名

不要机械地把：

_0x1234
_0x5678
a
b
c

直接改成：

variable1
variable2

应该根据代码实际用途推断语义。

例如：

const _0x1234 = user[_0x5678];

如果可以确定它表示用户 ID，应重命名为：

const userId = user.id;

如果无法确定语义，不要强行猜测。

可以使用：

unknownValue
data
result
config
options
handler
callback
request
response

等中性名称。

绝对不要为了“好看”编造不存在的业务含义。

⸻

四、恢复模块结构

如果原项目只有一个巨大的：

index.js

或者：

bundle.js
main.js

请分析其中的功能边界，并拆分成合理模块。

例如：

src/
├── main.js
├── config/
│   └── config.js
├── api/
│   ├── client.js
│   ├── request.js
│   └── response.js
├── utils/
│   ├── crypto.js
│   ├── string.js
│   └── format.js
├── services/
│   ├── auth.js
│   ├── user.js
│   └── data.js
├── models/
│   └── user.js
└── core/
    └── runtime.js

但是：

不要为了满足目录结构而强行拆分。

模块应该按照实际职责划分。

如果某些代码实际上属于同一个模块，就保留在一起。

⸻

五、模块系统

优先转换成现代 ES Module：

import xxx from './xxx.js';
export function xxx() {}
export default xxx;

除非原项目运行环境明确要求 CommonJS，否则不要继续使用：

require()
module.exports
exports.xxx

同时正确恢复：

import
export
default export
named export

以及模块之间的依赖关系。

⸻

六、保留运行环境

在反混淆过程中先判断项目属于：

* Node.js
* 浏览器
* Electron
* Tauri
* Web Worker
* Service Worker
* React
* Vue
* 小程序
* 游戏运行环境
* 浏览器扩展
* 其他 JS Runtime

不要因为现代化重构而随意修改 API。

例如原代码使用：

window
document
localStorage
WebSocket
fetch
Worker
process
Buffer
require
__dirname

需要先判断运行环境，再决定是否修改。

⸻

七、Webpack / 打包代码处理

如果输入的是 Webpack/Rollup/Vite/Babel 等生成的 bundle：

请尽可能：

1. 识别模块系统
2. 找到模块边界
3. 移除 bundler runtime
4. 恢复原始模块
5. 恢复 import/export
6. 删除仅用于打包的辅助代码
7. 保留真正的业务代码

例如不要把：

(()=>{var e={...};function t(){...}...})();

简单格式化成几千行代码。

应该分析：

runtime
module A
module B
module C
entry

并恢复成：

src/
├── main.js
├── moduleA.js
├── moduleB.js
└── moduleC.js

⸻

八、不要删除未知代码

非常重要：

如果无法确定某段代码是否有实际作用：

不要直接删除。

标记：

// TODO: 未确认用途，暂时保留

或者：

// NOTE: 原始代码存在此逻辑，暂无法确认是否为必要逻辑

只有能够确认是：

* 死代码
* 打包器生成代码
* 重复代码
* 明显的混淆辅助代码

才可以删除。

⸻

九、功能一致性

重构后的代码必须尽量满足：

输入相同
↓
执行流程相同
↓
输出相同

尤其注意：

* 异步执行顺序
* Promise
* async/await
* EventEmitter
* 回调
* 定时器
* WebSocket
* HTTP 请求
* 加密/解密
* Base64
* 二进制处理
* 编码转换
* 正则表达式
* 全局变量
* 单例
* 缓存
* 状态机
* 错误处理

不要因为“优化代码”而改变这些行为。

⸻

十、工作流程

不要直接开始重写。

请严格按照以下步骤执行。

Step 1：项目分析

先分析整个项目：

- 项目入口
- JS 文件
- 模块关系
- 第三方依赖
- 运行环境
- 打包工具
- 混淆方式
- 主要功能

输出：

Project Analysis

⸻

Step 2：建立依赖图

分析：

A → B
A → C
B → D
C → D

确定模块依赖关系。

⸻

Step 3：恢复语义

逐步处理：

字符串
↓
变量
↓
函数
↓
类
↓
控制流
↓
模块

不要一步把所有代码重写掉。

⸻

Step 4：模块划分

根据实际职责确定：

core
api
utils
services
models
config

等模块。

⸻

Step 5：生成重构后的项目

最终输出完整目录：

project/
├── package.json
├── src/
│   ├── main.js
│   ├── ...
│   └── ...
└── README.md

⸻

十一、代码输出规则

如果文件比较多，不要一次输出整个项目。

按照：

文件 1
↓
文件 2
↓
文件 3

逐个生成。

每个文件必须包含完整代码，不要使用：

// 其他代码...

或者：

// 此处省略

⸻

十二、修改记录

每次修改代码时必须告诉我：

修改文件：
src/xxx.js
修改内容：
1. 将 _0x1234 重命名为 userId
2. 删除 Webpack runtime
3. 将 require() 转换为 import
4. 提取 HTTP 请求模块

不要只告诉我“已经优化完成”。

⸻

十三、遇到不确定代码

如果无法确定：

原始意图
变量含义
模块职责
运行环境
某段代码是否可以删除

不要猜。

明确标记：

⚠️ 不确定项

并说明：

原代码：
...
推测：
...
置信度：
高 / 中 / 低
处理：
暂时保留原逻辑

⸻

十四、禁止事项

禁止：

1. 为了简洁删除可能影响功能的代码
2. 随意修改 API 行为
3. 随意修改异步逻辑
4. 随意修改加密算法
5. 随意修改数据结构
6. 随意修改请求参数
7. 编造变量语义
8. 编造模块功能
9. 把所有代码塞进一个 utils.js
10. 仅仅进行 Prettier 格式化就声称完成反混淆
11. 在没有分析依赖关系的情况下直接拆文件
12. 输出无法运行的伪代码

⸻

十五、最终目标

最终项目应该达到：

混淆 Bundle
    ↓
分析
    ↓
解除字符串混淆
    ↓
恢复变量/函数语义
    ↓
恢复控制流
    ↓
识别 Runtime
    ↓
识别模块边界
    ↓
恢复 import/export
    ↓
拆分文件
    ↓
整理依赖
    ↓
标准 JavaScript 项目

最终代码应该像一个正常开发者编写和维护的 JavaScript 项目，而不是“格式化后的混淆代码”。

在没有足够信息判断时，优先选择：

保留原逻辑，而不是自作主张修改。

现在先不要修改代码。

第一步请先对我提供的整个项目进行分析，并输出：

1. 项目结构
2. 入口文件
3. 运行环境
4. 使用的打包/混淆技术
5. 模块依赖关系
6. 主要功能模块
7. 建议的重构目录
8. 当前最严重的混淆点
9. 可能存在的不确定项

分析完成后，再开始逐文件反混淆和重构。