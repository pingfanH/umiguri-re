# app.larc 前端 UI 文件(原始版本)

> 从加密归档 app.larc(asar 变体,魔数 "Re=L")中通过运行时 fetch 恢复的原始文件。
> 版权: (c) 2025 inonote

## 文件清单

| 文件 | 大小 | 说明 |
|------|------|------|
| `index.html` | 488 B | 前端入口(带 DOCTYPE,空壳结构)|
| `main.css` | 2.08 KB | 前端样式(带版权注释,压缩版)|
| `main.js` | 3.75 MB | 前端主逻辑(THREE+Effekseer+游戏逻辑)|

## 恢复方法

app.larc 通过 `--app-path=app.larc` 加载,asar 内容映射到 `file:///`。
在 renderer 里 `fetch('/index.html')` 等能拿到解密后的原始文件。

```js
// CDP Runtime.evaluate
fetch('/main.css').then(r => r.text())
// => /* (c) 2025 inonote */ @charset "utf-8";...
```

## app.larc 结构(推断)

```
app.larc/  (asar 变体, 魔数 "Re=L" + 0x26 + 加密)
├── package.json   (主进程配置)
├── index.js       (主进程入口 Node 后端)
├── index.html     (前端入口) ✅
├── main.css       (前端样式) ✅
├── main.js        (前端逻辑) ✅
└── node_modules/  (依赖)
```

前端 UI 文件就是 index.html + main.css + main.js 三个。
主进程的 index.js / package.json / node_modules 不通过 file:// 暴露给 renderer。

## 与反混淆产物的关系

`main.js` 与 `../game_main.original.js` 内容完全一致。
反混淆后的游戏逻辑在 `../game_logic.deobf.js`。
