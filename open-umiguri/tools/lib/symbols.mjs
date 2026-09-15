// 共享: Babel 依赖加载(优先本地, 回退 /tmp/deobf) 与符号重命名。
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

function req(name) {
  for (const base of [root, '/tmp/deobf']) {
    try {
      return createRequire(path.join(base, 'noop.js'))(name);
    } catch (e) {}
  }
  console.error(`缺少 ${name}(npm install 或 NODE_PATH=/tmp/deobf/node_modules)`);
  process.exit(2);
}

export const parser = req('@babel/parser');
const traverseMod = req('@babel/traverse');
export const traverse = traverseMod.default || traverseMod;
const generateMod = req('@babel/generator');
export const generate = generateMod.default || generateMod;

export function loadSymbols(file) {
  const fs = req('node:fs');
  const symbols = JSON.parse(fs.readFileSync(file, 'utf8'));
  const map = {};
  for (const [oldName, meta] of Object.entries(symbols.bindings || {})) map[oldName] = meta.name;
  return map;
}

// 冲突检查 + 作用域安全的绑定改名(就地修改 AST)。
// 返回 { conflicts, renamed }。
export function applySymbols(ast, map) {
  const usedNames = new Set();
  traverse(ast, {
    Identifier(p) {
      const parent = p.parent;
      if (parent.type === 'MemberExpression' && parent.property === p.node && !parent.computed) return;
      if ((parent.type === 'ObjectProperty' || parent.type === 'ObjectMethod') && parent.key === p.node && !parent.computed) return;
      usedNames.add(p.node.name);
    },
  });
  const conflicts = [];
  for (const nn of new Set(Object.values(map))) {
    if (usedNames.has(nn) && !(nn in map)) conflicts.push(nn);
  }
  if (conflicts.length) return { conflicts: [...new Set(conflicts)], renamed: 0 };

  const targets = new Map();
  traverse(ast, {
    Identifier(p) {
      const old = p.node.name;
      if (!(old in map)) return;
      const b = p.scope.getBinding(old);
      if (!b || targets.has(b)) return;
      targets.set(b, map[old]);
    },
  });
  const missing = Object.keys(map).filter((old) => ![...targets.keys()].some((b) => b.identifier.name === old));
  let renamed = 0;
  for (const [binding, newName] of targets) {
    binding.scope.rename(binding.identifier.name, newName);
    renamed++;
  }
  return { conflicts: [], renamed, missing };
}
