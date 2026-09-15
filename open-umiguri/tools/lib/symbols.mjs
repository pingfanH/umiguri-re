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
  const map = Object.create(null);
  for (const [oldName, meta] of Object.entries(symbols.bindings || {})) map[oldName] = meta.name;
  return map;
}

export function loadProps(file) {
  const fs = req('node:fs');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const map = Object.create(null);
  for (const [oldName, meta] of Object.entries(data.props || {})) map[oldName] = meta.name;
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

// 属性(对象字段)改名。默认拒绝任何可能破坏行为的情形:
//   - 该名字以字符串字面量出现(序列化/动态访问)
//   - obj["Name"] 形式
//   - 简写 {Name} / 解构 {Name} = ... (需要改写语法, 保守跳过)
// force=true 时忽略风险(仅重命名非简写/非字符串位置)。
export function applyProps(ast, map, { force = false } = {}) {
  const risky = new Map(); // name -> Set(reason)
  const addRisk = (name, why) => {
    if (!risky.has(name)) risky.set(name, new Set());
    risky.get(name).add(why);
  };

  traverse(ast, {
    StringLiteral(p) {
      const n = p.node.value;
      if (n in map) addRisk(n, 'string');
    },
    MemberExpression(p) {
      if (p.node.computed && p.node.property.type === 'StringLiteral' && p.node.property.value in map) {
        addRisk(p.node.property.value, 'computed');
      }
    },
    OptionalMemberExpression(p) {
      if (p.node.computed && p.node.property.type === 'StringLiteral' && p.node.property.value in map) {
        addRisk(p.node.property.value, 'computed');
      }
    },
    ObjectProperty(p) {
      const k = p.node.key;
      if (!p.node.computed && k.type === 'Identifier' && k.name in map && p.node.shorthand) {
        addRisk(k.name, 'shorthand');
      }
    },
    ObjectPattern(p) {
      for (const prop of p.node.properties) {
        if (prop.type === 'ObjectProperty' && !prop.computed && prop.shorthand && prop.key.type === 'Identifier' && prop.key.name in map) {
          addRisk(prop.key.name, 'destructuring-shorthand');
        }
      }
    },
  });

  const blocked = [...risky.keys()].filter((n) => !force);
  let renamed = 0;
  traverse(ast, {
    MemberExpression(p) {
      if (!p.node.computed && p.node.property.type === 'Identifier' && p.node.property.name in map) {
        if (!blocked.includes(p.node.property.name)) {
          p.node.property.name = map[p.node.property.name];
          renamed++;
        }
      }
    },
    OptionalMemberExpression(p) {
      if (!p.node.computed && p.node.property.type === 'Identifier' && p.node.property.name in map) {
        if (!blocked.includes(p.node.property.name)) {
          p.node.property.name = map[p.node.property.name];
          renamed++;
        }
      }
    },
    ObjectProperty(p) {
      if (!p.node.computed && p.node.key.type === 'Identifier' && p.node.key.name in map && !p.node.shorthand) {
        if (!blocked.includes(p.node.key.name)) {
          p.node.key.name = map[p.node.key.name];
          renamed++;
        }
      }
    },
    ObjectMethod(p) {
      if (!p.node.computed && p.node.key.type === 'Identifier' && p.node.key.name in map) {
        if (!blocked.includes(p.node.key.name)) {
          p.node.key.name = map[p.node.key.name];
          renamed++;
        }
      }
    },
    ClassMethod(p) {
      if (!p.node.computed && p.node.key.type === 'Identifier' && p.node.key.name in map) {
        if (!blocked.includes(p.node.key.name)) {
          p.node.key.name = map[p.node.key.name];
          renamed++;
        }
      }
    },
    ClassProperty(p) {
      if (!p.node.computed && p.node.key.type === 'Identifier' && p.node.key.name in map) {
        if (!blocked.includes(p.node.key.name)) {
          p.node.key.name = map[p.node.key.name];
          renamed++;
        }
      }
    },
  });

  return { renamed, blocked, risky: Object.fromEntries([...risky].map(([k, v]) => [k, [...v]])) };
}
