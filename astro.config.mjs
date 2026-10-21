import { defineConfig } from 'astro/config';
import { readdirSync } from 'node:fs';

// PREVIEW=1 builds a copy with plain .html files and relative links,
// so it can be opened from any folder or file host. The normal build
// produces clean URLs for GitHub Pages.
const preview = process.env.PREVIEW === '1';

// Addresses from the old Jekyll site, so links in emails, papers, and search
// results keep working. Each one sends visitors to the matching new page.
const oldUrls = {
  '/portfolio': '/research',
  '/artwork': '/art',
  '/about': '/',
  '/resume': '/cv',
  '/publication': '/publications',
  '/talks': '/cv',
};
// Each old project page goes to its new one.
for (const f of readdirSync('./src/content/projects')) {
  const id = f.replace(/\.md$/, '');
  oldUrls[`/portfolio/${id}`] = `/research/${id}`;
}
// Old single-publication pages go to the Publications page.
for (const id of ['2017-06-09-tolkova', '2017-1-3', '2019-10-06-ciannelli', '2021-01-08-tolkova',
  '2021-08-20', '2021-10-1', '2022-04-10', '2022-04-23', '2022-08-24', '2022-09-29', '2023-04-26']) {
  oldUrls[`/publication/${id}`] = '/publications';
  oldUrls[`/publications/${id}`] = '/publications';
}
// Old talk pages go to the CV (which links the full list), and old course pages to Teaching.
for (const id of ['2015-09-01', '2017-06-01']) oldUrls[`/talks/${id}`] = '/cv';
for (const id of ['2018-cs182', '2019-am22a', '2020-am22a', '2020-es159']) oldUrls[`/teaching/${id}`] = '/teaching';

export default defineConfig({
  site: 'https://avokloti.github.io',
  build: { format: preview ? 'file' : 'directory' },
  // Old Jekyll URLs keep working.
  redirects: preview ? {} : oldUrls,
});
