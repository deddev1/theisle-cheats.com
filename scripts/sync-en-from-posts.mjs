/**
 * Sync en.ts blog.items title/desc/readTime from posts.ts for given slugs.
 * Safer than regex: parses fields from posts.ts then patches en.ts by slug.
 */
import fs from 'node:fs';

const slugs = [
  'theisle-practice-before-official',
  'theisle-practice-bite-assist-esp',
  'theisle-practice-safely',
  'theisle-practice-vs-official',
  'theisle-elite-tier-guide',
  'theisle-appearance-changer-guide',
  'eac-patch-day-checklist',
  'eac-bypass-theisle-guide',
  'theisle-external-cheat-guide',
  'theisle-stream-proof-setup',
];

const postsSrc = fs.readFileSync('src/data/blog/posts.ts', 'utf8');

function fieldAfterSlug(slug, field) {
  const marker = `slug: "${slug}"`;
  const i = postsSrc.indexOf(marker);
  if (i < 0) return null;
  // search backward for title (comes before slug) and forward for desc/readTime
  if (field === 'title') {
    const before = postsSrc.slice(Math.max(0, i - 400), i);
    const m = before.match(/title:\s*"([^"]*)"\s*,\s*$/);
    return m ? m[1] : null;
  }
  const after = postsSrc.slice(i, i + 800);
  const m = after.match(new RegExp(`${field}:\\s*"([^"]*)"`));
  return m ? m[1] : null;
}

let en = fs.readFileSync('src/i18n/en.ts', 'utf8');

for (const slug of slugs) {
  const title = fieldAfterSlug(slug, 'title');
  const desc = fieldAfterSlug(slug, 'desc');
  const readTime = fieldAfterSlug(slug, 'readTime');
  if (!title || !desc || !readTime) {
    console.error('missing fields for', slug, { title, desc, readTime });
    process.exitCode = 1;
    continue;
  }

  const slugMarker = `slug: '${slug}'`;
  const si = en.indexOf(slugMarker);
  if (si < 0) {
    console.error('en missing slug', slug);
    process.exitCode = 1;
    continue;
  }

  // title is before slug in en.ts
  const blockStart = en.lastIndexOf('{', si);
  const blockEnd = en.indexOf('},', si);
  if (blockStart < 0 || blockEnd < 0) {
    console.error('block bounds', slug);
    process.exitCode = 1;
    continue;
  }
  let block = en.slice(blockStart, blockEnd + 2);
  block = block
    .replace(/title:\s*'[^']*'/, `title: '${title.replace(/'/g, "\\'")}'`)
    .replace(/desc:\s*'[^']*'/, `desc: '${desc.replace(/'/g, "\\'")}'`)
    .replace(/readTime:\s*'[^']*'/, `readTime: '${readTime.replace(/'/g, "\\'")}'`);
  en = en.slice(0, blockStart) + block + en.slice(blockEnd + 2);
  console.log('synced', slug);
}

fs.writeFileSync('src/i18n/en.ts', en);
console.log('done');
