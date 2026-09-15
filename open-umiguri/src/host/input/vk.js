// 字符 / KeyboardEvent.code -> Windows VK 码(跨平台)。
// 不持有任何输入状态,纯映射。

export const CHAR_TO_VK = {
  59: 186, 61: 187, 44: 188, 45: 189, 46: 190, 47: 191, 96: 192,
  91: 219, 92: 220, 93: 221, 39: 222,
};

export function codeToVk(code) {
  if (!code) return 0;
  if (code.startsWith('Key') && code.length === 4) return code.charCodeAt(3);
  if (code.startsWith('Digit') && code.length === 6) return code.charCodeAt(5);
  const map = {
    ArrowLeft: 37, ArrowRight: 39, ArrowUp: 38, ArrowDown: 40,
    Enter: 13, Escape: 27, Space: 32, Backspace: 8, Tab: 9,
    ShiftLeft: 16, ShiftRight: 16, ControlLeft: 17, ControlRight: 17,
    F1: 112, F2: 113, F3: 114, F4: 115, F5: 116,
    F6: 117, F7: 118, F8: 119, F9: 120, F10: 121,
    Comma: 188, Period: 190, Semicolon: 186, Quote: 222, Slash: 191,
    Backslash: 220, BracketLeft: 219, BracketRight: 221, Minus: 189,
    Equal: 187, Backquote: 192,
  };
  return map[code] !== undefined ? map[code] : 0;
}

// VK 码 -> 字符码
export function kbdUni2Virt(charCode) {
  if (charCode >= 48 && charCode <= 57) return charCode;
  if (charCode >= 65 && charCode <= 90) return charCode;
  if (charCode >= 97 && charCode <= 122) return charCode - 32;
  if (CHAR_TO_VK[charCode] !== undefined) return CHAR_TO_VK[charCode];
  return charCode;
}

export function charToVk(c) {
  return kbdUni2Virt(c.charCodeAt(0));
}
