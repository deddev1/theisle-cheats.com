import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [
  'src/utils/schema.ts',
  'src/utils/rss.ts',
  'src/data/faq.ts',
  'src/data/blog/posts.ts',
  'src/i18n/en.ts',
  'src/config/site.ts',
];

const reps = [
  ['The Isle Cheats Editorial', 'The Isle Cheats'],
  ['The Isle Cheats Community Forum', 'The Isle Cheats Forum'],
  ['The Isle Cheats Blog', 'The Isle Cheats Blog'],
  ['The Isle Cheats Support', 'The Isle Cheats Support'],
  ['Join The Isle Cheats on Discord', 'Join The Isle Cheats on Discord'],
  ['The Isle Cheats home', 'The Isle Cheats home'],
  ['The Isle Cheats', 'The Isle Cheats'],
  ["TITLE_PREFIX = 'The Isle Cheats & Hacks'", "TITLE_PREFIX = 'The Isle Cheats'"],
  ['humanized Bite Assist', 'smooth bite assist'],
  ['humanized order', 'smooth order'],
  ['humanized input', 'smooth input'],
  ['humanized', 'smooth'],
  [
    'Climbing Official play with theisle bite assist means smooth bite assist—not instant bot bursts that draw reports.',
    'Official The Isle bite assist works better with smooth tracking than instant snaps that get you reported.',
  ],
  [
    'maintains private the isle cheats for Windows PC EVRIMA and Legacy—not console lobby codes. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells The Isle cheats for Windows PC EVRIMA and Legacy. Check status before you queue after a patch.',
  ],
  [
    'maintains private the isle cheats for Windows PC EVRIMA and Legacy. Every module ships through the operator portal with secure checkout, Discord support, and live status banners before patch-day queues.',
    'sells The Isle cheats for Windows PC EVRIMA and Legacy. Check status before you queue after a patch.',
  ],
  [
    'maintains private the isle cheats for Windows PC EVRIMA and Legacy. Check live status before every patch-day queue.',
    'sells The Isle cheats for Windows PC EVRIMA and Legacy. Check status before you queue after a patch.',
  ],
  [
    'maintains private the isle cheats for Windows PC EVRIMA and Legacy.',
    'sells The Isle cheats for Windows PC EVRIMA and Legacy.',
  ],
  [
    'ships a modular external suite for Windows PC ranked—not lobby cheat codes. Bite Assist tracks targets, carcass assist clears POIs, ESP wallhack exposes third-parties, and utility tools like Radar Hack and Appearance Changer round out the toolkit. This is the complete feature map across',
    'sells external The Isle cheats for PC Official. Bite Assist, carcass assist, ESP wallhack, radar and Appearance Changer. See',
  ],
];

for (const rel of files) {
  const file = path.join(root, rel);
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', rel);
  } else {
    console.log('noop', rel);
  }
}
