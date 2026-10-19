/**
 * Fortnite/Epic vocab → The Isle / Steam.
 * Run: node scripts/vocab-theisle.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const TEXT_EXTS = new Set([
  '.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.txt',
  '.svg', '.html', '.webmanifest',
]);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);
const SKIP_FILES = new Set([
  'rebrand-fortnite.mjs', 'vocab-fortnite.mjs', 'rebrand-theisle.mjs',
  'vocab-theisle.mjs', 'cleanup-theisle.mjs', 'fetch-fortnite-gameplay.mjs',
  'import-user-gameplay.mjs', 'make-favicon-from-isle.mjs',
]);

const REPLACEMENTS = [
  ['TheIsleCheats', 'The Isle Cheats'],
  ['Theislecheats', 'The Isle Cheats'],
  ['theislecheats-forum-vote', 'theisle-cheats-forum-vote'],

  ['via Epic Games Launcher on Windows', 'via Steam on Windows'],
  ['via Epic Games Launcher', 'via Steam'],
  ['via Epic Games', 'via Steam'],
  ['on Epic Games', 'on Steam'],
  ['Epic Games Launcher', 'Steam'],
  ['Epic Games platform', 'Steam platform'],
  ['Epic Games store', 'Steam store'],
  ['Epic Games.', 'Steam.'],
  ['Epic Games,', 'Steam,'],
  ['Epic Games)', 'Steam)'],
  ['(Epic Games', '(Steam'],
  [' Epic Games ', ' Steam '],
  ['Epic account', 'Steam account'],
  ['Epic Terms of Service', 'Steam Subscriber Agreement'],
  ['Epic review', 'Steam / publisher review'],
  ['reqEpic', 'reqSteam'],
  ['compatEpic', 'compatSteam'],

  ['Battle Royale, Zero Build, Ranked and Creative', 'EVRIMA, Legacy, Official and Community'],
  ['Battle Royale, Zero Build and Ranked', 'EVRIMA, Legacy and Official'],
  ['Battle Royale and Zero Build', 'EVRIMA and Legacy'],
  ['Battle Royale, Zero Build', 'EVRIMA, Legacy'],
  ['Ranked or Zero Build', 'Official or Community'],
  ['Zero Build lobbies', 'Legacy sessions'],
  ['Zero Build lobby', 'Legacy session'],
  ['Zero Build preset', 'Legacy preset'],
  ['Zero Build presets', 'Legacy presets'],
  ['and Zero Build', 'and Legacy'],
  ['or Zero Build', 'or Legacy'],
  [' Zero Build', ' Legacy'],
  ['Zero Build ', 'Legacy '],
  ['Battle Royale', 'EVRIMA'],
  ['Creative practice', 'singleplayer practice'],
  ['Creative islands', 'practice islands'],
  ['Creative maps', 'practice maps'],
  ['Creative lobby', 'practice lobby'],
  ['in Creative', 'in singleplayer'],
  [' Creative', ' singleplayer'],
  ['Creative ', 'Singleplayer '],
  ['ranked play', 'Official play'],
  ['for Ranked', 'for Official'],
  ['in Ranked', 'on Official'],
  ['to Ranked', 'to Official'],
  [' Ranked', ' Official'],
  ['Ranked ', 'Official '],

  ['Aimbot, ESP & Wallhack Overlay', 'ESP, Radar & Survival Overlay'],
  ['Aimbot, ESP & Wallhack', 'ESP, Radar & Survival Tools'],
  ['aimbot, ESP, wallhack, radar, loot ESP and skin changer', 'player ESP, nest ESP, radar, carcass ESP and appearance changer'],
  ['aimbot, ESP, wallhack, radar and loot ESP', 'player ESP, nest ESP, radar and carcass ESP'],
  ['Aimbot, ESP, wallhack, radar and loot ESP', 'Player ESP, nest ESP, radar and carcass ESP'],
  ['Auto Shield Break', 'Auto Stamina'],
  ['Loot Assist', 'Carcass Assist'],
  ['loot assist', 'carcass assist'],
  ['Skin Changer', 'Appearance Changer'],
  ['skin changer', 'appearance changer'],
  ['Unlock All', 'Unlock Skins'],
  ['unlock-all', 'unlock-skins'],

  ['Aimbot', 'Bite Assist'],
  ['aimbot', 'bite assist'],
  ['Bone Priority', 'Hit Priority'],
  ['bone priority', 'hit priority'],
  ['Smooth Aim', 'Smooth Bite'],
  ['Sticky Aim', 'Sticky Target'],
  ['See players through builds', 'See dinosaurs through terrain'],
  ['through walls and builds', 'through foliage and terrain'],
  ['through builds', 'through cover'],
  ['chest ESP', 'nest ESP'],
  ['Chest ESP', 'Nest ESP'],
  ['loot ESP', 'carcass ESP'],
  ['Loot ESP', 'Carcass ESP'],

  ['theisle ESP', 'The Isle ESP'],
  ['theisle radar', 'The Isle radar'],
  ['private theisle', 'private The Isle'],
  ['external theisle', 'external The Isle'],
  ['using theisle', 'using The Isle'],
  ['our theisle', 'our The Isle'],
  ['for theisle', 'for The Isle'],
  ['a theisle', 'a The Isle'],
  ['the theisle', 'The Isle'],
  ['theisle cheat', 'The Isle cheat'],
  ['The Isle-cheats.com', 'theisle-cheats.com'],
  ['Epic Games', 'Steam'],
];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

let changed = 0;
for (const file of walk(root)) {
  if (SKIP_FILES.has(path.basename(file))) continue;
  if (!TEXT_EXTS.has(path.extname(file).toLowerCase())) continue;
  const before = fs.readFileSync(file, 'utf8');
  let next = before;
  for (const [from, to] of REPLACEMENTS) {
    if (next.includes(from)) next = next.split(from).join(to);
  }
  if (next !== before) {
    fs.writeFileSync(file, next);
    changed++;
    console.log('updated', path.relative(root, file));
  }
}
console.log(`Vocab done. Updated ${changed} files.`);
