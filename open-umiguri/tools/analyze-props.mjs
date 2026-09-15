#!/usr/bin/env node
// analyze-props.mjs - 分析被 property mangling 的对象字段使用情况。
//
// 输出每个候选字段的:
//   member  : obj.Foo 形式访问次数
//   key     : {Foo: ...} / Foo() {} / class 成员 形式定义次数
//   string  : "Foo" 字符串字面量出现次数(序列化/动态访问风险信号)
//   computed: obj["Foo"] 形式次数(风险信号)
//
// 安全门槛: string>0 或 computed>0 的字段默认不建议改名(可能被序列化/动态访问)。
//
// 用法: node tools/analyze-props.mjs [源] [输出.md]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parser, traverse, generate, loadSymbols, applySymbols } from './lib/symbols.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcFile = process.argv[2] || process.env.GAME_SRC || '/Users/pingfanh/project/umiguri-re/game_main.deobf.js';
const outFile = process.argv[3] || path.join(root, 'src/game/logic/PROPERTIES.md');

let code = fs.readFileSync(srcFile, 'utf8');
let ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
if (!process.argv.includes('--no-rename')) {
  const map = loadSymbols(path.join(root, 'tools/symbols.json'));
  const { conflicts } = applySymbols(ast, map);
  if (conflicts.length) {
    console.error('命名冲突: ' + conflicts.join(', '));
    process.exit(3);
  }
  code = generate(ast, { retainLines: false, jsescOption: { minimal: true } }, code).code;
  ast = parser.parse(code, { sourceType: 'script', allowReturnOutsideFunction: true, errorRecovery: true });
}

const stat = new Map();
function rec(name, field) {
  if (!/^[A-Za-z_$][A-Za-z0-9_$]{0,3}$/.test(name)) return;
  if (!stat.has(name)) stat.set(name, { member: 0, key: 0, string: 0, computed: 0 });
  stat.get(name)[field]++;
}

traverse(ast, {
  MemberExpression(p) {
    const prop = p.node.property;
    if (!p.node.computed && prop.type === 'Identifier') rec(prop.name, 'member');
    if (p.node.computed && prop.type === 'StringLiteral') rec(prop.value, 'computed');
  },
  OptionalMemberExpression(p) {
    const prop = p.node.property;
    if (!p.node.computed && prop.type === 'Identifier') rec(prop.name, 'member');
    if (p.node.computed && prop.type === 'StringLiteral') rec(prop.value, 'computed');
  },
  ObjectProperty(p) {
    if (!p.node.computed && p.node.key.type === 'Identifier') rec(p.node.key.name, 'key');
    if (p.node.computed && p.node.key.type === 'StringLiteral') rec(p.node.key.value, 'computed');
  },
  ObjectMethod(p) {
    if (!p.node.computed && p.node.key.type === 'Identifier') rec(p.node.key.name, 'key');
  },
  ClassMethod(p) {
    if (!p.node.computed && p.node.key.type === 'Identifier') rec(p.node.key.name, 'key');
  },
  ClassProperty(p) {
    if (!p.node.computed && p.node.key.type === 'Identifier') rec(p.node.key.name, 'key');
  },
  StringLiteral(p) {
    rec(p.node.value, 'string');
  },
});

const rows = [...stat.entries()]
  .map(([name, s]) => ({ name, ...s, total: s.member + s.key }))
  .filter((r) => r.total >= 5)
  .sort((a, b) => b.total - a.total);

const safe = rows.filter((r) => r.string === 0 && r.computed === 0);
const risky = rows.filter((r) => r.string > 0 || r.computed > 0);

const fmt = (rs) =>
  [
    '| 字段 | 访问 | 定义 | 字符串 | 动态 |',
    '|---|---:|---:|---:|---:|',
    ...rs.slice(0, 120).map((r) => `| \`.${r.name}\` | ${r.member} | ${r.key} | ${r.string} | ${r.computed} |`),
  ].join('\n');

const md = [
  '# 对象字段(property mangling)使用分析(自动生成)',
  '',
  `> 由 \`tools/analyze-props.mjs\` 生成。源: \`${path.basename(srcFile)}\`。`,
  '> `字符串`/`动态` 为 0 的字段才适合改名为可读别名;否则可能被序列化或 `obj[key]` 动态访问。',
  '',
  `## 安全候选(无字符串/动态访问) — ${safe.length} 个`,
  '',
  fmt(safe),
  '',
  `## 高风险(出现字符串或动态访问, 不建议改名) — ${risky.length} 个`,
  '',
  fmt(risky.slice(0, 60)),
  '',
].join('\n');

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, md);
console.error(`字段 ${rows.length} 个(安全 ${safe.length} / 风险 ${risky.length}) -> ${outFile}`);
