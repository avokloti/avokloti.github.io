// For the shareable preview only: rewrite root-relative links (/research/...)
// into relative ones (research.html), so the site works from any folder.
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, relative, dirname, posix } from 'node:path';

const root = process.argv[2] ?? 'dist';
const walk = (d) => readdirSync(d).flatMap((n) => {
  const p = join(d, n);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

for (const file of walk(root)) {
  const fromDir = dirname(relative(root, file)).split('\\').join('/');
  const html = readFileSync(file, 'utf8').replace(/(href|src)="\/(?!\/)([^"#?]*)([^"]*)"/g, (_, attr, path, tail) => {
    let target = path;
    const isAsset = /\.[a-z0-9]+$/i.test(path);
    if (!isAsset) target = (path.replace(/\/$/, '') || 'index') + '.html';
    let rel = posix.relative(fromDir === '.' ? '' : fromDir, target) || target;
    return `${attr}="${rel}${tail}"`;
  });
  writeFileSync(file, html);
}
console.log('relative links written');
