import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const TEXT_EXTS = new Set([
  '.ts', '.tsx', '.astro', '.mjs', '.js', '.json', '.md', '.txt',
  '.svg', '.html', '.webmanifest', '.css', '.toml',
]);
const SKIP_DIRS = new Set(['node_modules', '.git', 'dist', '.seo-baseline']);
const SKIP_FILES = new Set([
  'rebrand-fortnite.mjs', 'vocab-fortnite.mjs', 'rebrand-theisle.mjs',
  'vocab-theisle.mjs', 'finish-theisle-text.mjs', 'fetch-fortnite-gameplay.mjs',
  'import-user-gameplay.mjs', 'make-favicon-from-isle.mjs',
]);

const REPLACEMENTS = [
  ['fortnite-cheats.com', 'theisle-cheats.com'],
  ['FortniteCheats', 'The Isle Cheats'],
  ['Fortnitecheats', 'The Isle Cheats'],
  ['fortnitecheats', 'theislecheats'],
  ['/products/fortnite-cheats', '/products/theisle-cheats'],
  ['products/fortnite-cheats', 'products/theisle-cheats'],
  ['https://zadeyo.com/go/QRH?to=%2Fproducts%2Ffortnite', 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats'],
  ['https://zadeyo.com/products/fortnite', 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats'],
  ['https://zadeyo.com/products/skin-changer', 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats'],
  ['https://zadeyo.com/products/hwid-spoofer', 'https://levocheats.com/go/QRH?to=%2Fhwid-spoofer'],
  ['https://zadeyo.com/products/ugc', 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats'],
  ['%2Fproducts%2Ffortnite', '%2Fthe-isle-novaxware-cheats'],
  ['/go/fortnite/', '/go/theisle/'],
  ['/go/fortnite', '/go/theisle'],
  ["checkoutPath('fortnite')", "checkoutPath('theisle')"],
  ['checkoutPath("fortnite")', 'checkoutPath("theisle")'],
  ["'fortnite'", "'theisle'"],
  ['"fortnite"', '"theisle"'],
  ['  fortnite:', '  theisle:'],
  ['fortnite:', 'theisle:'],
  ['how-to-buy-fortnite-cheats-2026', 'how-to-buy-theisle-cheats-2026'],
  ['how-to-use-fortnite-cheat-codes', 'theisle-practice-safely'],
  ['fortnite-aimbot-combat-guide', 'theisle-bite-assist-combat'],
  ['fortnite-console-commands-cheats', 'theisle-practice-vs-official'],
  ['fortnite-cheat-codes-guide', 'theisle-practice-before-official'],
  ['fortnite-console-cheats-tips', 'theisle-practice-bite-assist-esp'],
  ['fortnite-cheats-features-guide', 'theisle-cheats-features-guide'],
  ['fortnite-hwid-spoofer-after-ban', 'theisle-hwid-spoofer-after-ban'],
  ['fortnite-external-cheat-guide', 'theisle-external-cheat-guide'],
  ['fortnite-stream-proof-setup', 'theisle-stream-proof-setup'],
  ['fortnite-aimbot-ranked-guide', 'theisle-bite-assist-official'],
  ['fortnite-skin-changer-guide', 'theisle-appearance-changer-guide'],
  ['fortnite-elite-tier-guide', 'theisle-elite-tier-guide'],
  ['fortnite-esp-wallhack-setup', 'theisle-esp-wallhack-setup'],
  ['fortnite-radar-hack-guide', 'theisle-radar-hack-guide'],
  ['fortnite-lite-vs-pro', 'theisle-lite-vs-pro'],
  ['eac-bypass-fortnite-guide', 'eac-bypass-theisle-guide'],
  ['fortnite-auto-aim', 'theisle-auto-aim'],
  ['fortnite-aimbot-combat', 'theisle-aimbot-combat'],
  ['fortnite-skin-changer', 'theisle-skin-changer'],
  ['fortnite-player-esp', 'theisle-player-esp'],
  ['fortnite-esp-wallhack', 'theisle-esp-wallhack'],
  ['fortnite-radar-hack', 'theisle-radar-hack'],
  ['fortnite-loot-radar', 'theisle-loot-radar'],
  ['fortnite-thermal-esp', 'theisle-thermal-esp'],
  ['fortnite-build-fight-esp', 'theisle-territory-esp'],
  ['fortnite-arena-wallhack', 'theisle-arena-wallhack'],
  ['fortnite-spawn-island-esp', 'theisle-spawn-island-esp'],
  ['fortnite-long-range-esp', 'theisle-long-range-esp'],
  ['fortnite-aimbot-lock', 'theisle-aimbot-lock'],
  ['fortnite-chams-esp', 'theisle-chams-esp'],
  ['fortnite-squad-esp', 'theisle-squad-esp'],
  ['fortnite-combat-esp', 'theisle-combat-esp'],
  ['hero-fortnite-dark', 'hero-theisle-dark'],
  ['fortnite-cheats', 'theisle-cheats'],
  ['Fortnite Cheats & Hacks', 'The Isle Cheats & Hacks'],
  ['Fortnite Cheats', 'The Isle Cheats'],
  ['Fortnite cheats', 'The Isle cheats'],
  ['fortnite cheats', 'the isle cheats'],
  ['Fortnite Elite', 'The Isle Elite'],
  ['Fortnite online', 'The Isle online'],
  ['Fortnite', 'The Isle'],
  ['fortnite', 'theisle'],
  // vocab leftovers
  ['TheIsleCheats', 'The Isle Cheats'],
  ['via Epic Games Launcher', 'via Steam'],
  ['Epic Games Launcher', 'Steam'],
  ['Epic Games', 'Steam'],
  ['Epic account', 'Steam account'],
  ['reqEpic', 'reqSteam'],
  ['compatEpic', 'compatSteam'],
  ['Battle Royale', 'EVRIMA'],
  ['Zero Build', 'Legacy'],
  ['Aimbot, ESP & Wallhack Overlay', 'ESP, Radar & Survival Overlay'],
  ['Aimbot, ESP & Wallhack', 'ESP, Radar & Survival Tools'],
  ['Skin Changer', 'Appearance Changer'],
  ['skin changer', 'appearance changer'],
  ['Unlock All', 'Unlock Skins'],
  ['unlock-all', 'unlock-skins'],
  ['Loot Assist', 'Carcass Assist'],
  ['Auto Shield Break', 'Auto Stamina'],
  ['Aimbot', 'Bite Assist'],
  ['aimbot', 'bite assist'],
  ['The Isle-cheats.com', 'theisle-cheats.com'],
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
console.log(`Finish text done. Updated ${changed} files.`);
