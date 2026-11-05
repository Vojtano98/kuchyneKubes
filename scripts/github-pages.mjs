// Post-build step for the GitHub Pages preview (sub-path hosting, e.g. /kuchyneKubes/).
// Astro prefixes its own assets with `base`; this adds the prefix to the site's
// hand-written root links (href="/realizace/" …) and keeps the preview out of search engines.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
const dist = new URL('../dist/', import.meta.url).pathname;
if (!base) process.exit(0);

const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const attr = new RegExp(`((?:href|src|action)=["'])/(?!/|${esc.slice(1)}/)`, 'g');

async function* htmlFiles(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* htmlFiles(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

let n = 0;
for await (const file of htmlFiles(dist)) {
  let html = await readFile(file, 'utf8');
  html = html.replace(attr, `$1${base}/`);
  html = html.replace(/<meta name="robots"[^>]*>/g, '');
  html = html.replace('<head>', '<head><meta name="robots" content="noindex, nofollow">');
  await writeFile(file, html);
  n++;
}
await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`GitHub Pages: prefixed ${n} HTML files with ${base}/`);
