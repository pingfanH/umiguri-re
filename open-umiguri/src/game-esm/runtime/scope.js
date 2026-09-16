// 游戏运行时共享作用域: 原游戏 IIFE 的全部顶层绑定。
// 模块之间不直接 import(会形成大量循环依赖), 而是通过本对象互相引用:
//   scope.inputModule.oe() / scope.renderer / scope.keyCodes ...
export const scope = {};
