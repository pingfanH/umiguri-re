// 打包宿主层: src/host/main.js -> dist/www/tauri-bridge.js(经典 IIFE, 先于游戏执行)
import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'dist/www');

await mkdir(outDir, { recursive: true });

await build({
  entryPoints: [resolve(root, 'src/host/main.js')],
  outfile: resolve(outDir, 'tauri-bridge.js'),
  bundle: true,
  format: 'iife',
  target: ['chrome80', 'safari14', 'firefox78'],
  platform: 'browser',
  charset: 'utf8',
  legalComments: 'none',
  banner: { js: '// open-umiguri host bridge (generated) - do not edit' },
});

await copyFile(resolve(root, 'src/host/index.html'), resolve(outDir, 'index.html'));
await copyFile(resolve(root, 'src/host/main.css'), resolve(outDir, 'main.css'));

console.log('[build:host] ->', outDir);
