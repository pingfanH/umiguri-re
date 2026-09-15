// 自由变量检查: 反混淆后的 bundle 不应出现「有引用、无声明」的 m_/v_ 名字。
// 这类断裂正是 deobfuscate.js 旧 bug 的表现(如 v_t_28347)。
// 用法: node build/freevar-check.mjs [file]   (默认 dist/game.raw.js)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, traverse } from '../tools/lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const file = process.argv[2] ? path.resolve(process.argv[2]) : path.join(root, 'dist/game.raw.js');
if (!fs.existsSync(file)) {
  console.error(`缺少 ${file}(先 npm run assemble:game 或 npm run build:game)`);
  process.exit(2);
}
const code = fs.readFileSync(file, 'utf8');
const ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });

const bad = new Map();
traverse(ast, {
  ReferencedIdentifier(p) {
    const name = p.node.name;
    if (p.scope.getBinding(name)) return;
    if (!/^[mv]_[A-Za-z0-9_$]+/.test(name)) return; // 只看反混淆命名
    bad.set(name, (bad.get(name) || 0) + 1);
  },
});

if (bad.size) {
  console.error(`发现未声明的反混淆名字 ${bad.size} 种(例):`);
  for (const [n, c] of [...bad].slice(0, 20)) console.error(`  ${c}\t${n}`);
  process.exit(1);
}
console.log(`freevar 检查通过: ${path.relative(root, file)} 无未声明的 m_/v_ 名字`);
