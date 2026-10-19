/**
 * Import The Isle cheat screenshots from Cursor assets.
 * Run: node scripts/import-user-gameplay.mjs && npm.cmd run optimize:images
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-theisle-cheats-com-main\\assets';
const importDir = path.resolve('_import');
const gameplayDir = path.resolve('public/images/gameplay');
const blogDir = path.resolve('public/images/blog');
const imagesDir = path.resolve('public/images');

const SOURCE_ORDER = ['isle_1-', 'isle_2-', 'isle_3-', 'crishacker_', 'Venom_TH_', 'MChad_'];

const GAMEPLAY = [
  { file: 'theisle-esp-wallhack.png', alt: 'The Isle ESP wallhack with entity menu, snaplines, dinosaur names, growth and food labels through tall grass', srcIndex: 0 },
  { file: 'theisle-aimbot-combat.png', alt: 'The Isle bite assist and skeleton ESP targeting Tyrannosaurus Rexes with health bars and aim reticle in a forest', srcIndex: 4 },
  { file: 'theisle-player-esp.png', alt: 'The Isle player ESP showing dinosaur species, weight, growth percent and health through jungle foliage', srcIndex: 2 },
  { file: 'theisle-radar-hack.png', alt: 'The Isle radar minimap and world ESP highlighting corpses, fruits, herbs and water with distance markers', srcIndex: 1 },
  { file: 'theisle-auto-aim.png', alt: 'The Isle aim assist FOV circle locked on a dinosaur with red skeleton ESP and distance readout', srcIndex: 4 },
  { file: 'theisle-loot-radar.png', alt: 'The Isle carcass and food ESP labels for coconut, mango, herbs and fresh corpses through grass', srcIndex: 0 },
  { file: 'theisle-skin-changer.png', alt: 'The Isle cheat overlay with ESP boxes and dinosaur stats while hunting in a sunlit forest clearing', srcIndex: 4 },
  { file: 'theisle-thermal-esp.png', alt: 'The Isle night ESP with no-fog view showing dinosaur weight, growth and player names in tall grass', srcIndex: 2 },
  { file: 'theisle-territory-esp.png', alt: 'The Isle territory ESP with snaplines to distant players, plants and food through dense jungle trees', srcIndex: 3 },
  { file: 'theisle-arena-wallhack.png', alt: 'The Isle wallhack ESP with wireframe dinosaurs, vital bars and silent aim reticle on a T-Rex', srcIndex: 4 },
  { file: 'theisle-spawn-island-esp.png', alt: 'The Isle spawn-area ESP with entity toggles for health bars, names, growth and classname labels', srcIndex: 0 },
  { file: 'theisle-long-range-esp.png', alt: 'The Isle long-range ESP snaplines marking players and resources hundreds of meters through the jungle', srcIndex: 3 },
  { file: 'theisle-aimbot-lock.png', alt: 'The Isle bite assist lock with FOV circle and ESP tags on nearby dinosaurs and AI creatures', srcIndex: 1 },
  { file: 'theisle-chams-esp.png', alt: 'The Isle chams-style ESP highlighting dinosaurs and AI with weight and growth readouts at night', srcIndex: 2 },
  { file: 'theisle-squad-esp.png', alt: 'The Isle multi-entity ESP with snaplines to players, AI dinosaurs and plants across a jungle clearing', srcIndex: 3 },
  { file: 'theisle-combat-esp.png', alt: 'The Isle combat ESP and aim assist facing multiple Tyrannosaurus with skeleton overlays and vital bars', srcIndex: 4 },
];

const BLOG = [
  'theisle-practice-before-official.png', 'theisle-practice-bite-assist-esp.png', 'theisle-practice-safely.png',
  'theisle-cheats-features-guide.png', 'theisle-practice-vs-official.png', 'theisle-lite-vs-pro.png',
  'theisle-elite-tier-guide.png', 'theisle-bite-assist-official.png', 'theisle-esp-wallhack-setup.png',
  'theisle-radar-hack-guide.png', 'theisle-appearance-changer-guide.png', 'eac-patch-day-checklist.png',
  'theisle-hwid-spoofer-after-ban.png', 'how-to-buy-theisle-cheats-2026.png', 'theisle-bite-assist-combat.png',
  'eac-bypass-theisle-guide.png', 'theisle-external-cheat-guide.png', 'theisle-stream-proof-setup.png',
];

function longPath(p) {
  const resolved = path.resolve(p);
  return resolved.startsWith('\\\\?\\') ? resolved : `\\\\?\\${resolved}`;
}

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

function listAssetImages() {
  const images = fs.readdirSync(longPath(assetsDir)).filter((f) => /\.(png|webp|jpe?g)$/i.test(f));
  const ordered = [];
  for (const key of SOURCE_ORDER) {
    const match = images.find((f) => f.includes(key));
    if (match && !ordered.includes(match)) ordered.push(match);
  }
  for (const f of images.sort()) if (!ordered.includes(f)) ordered.push(f);
  return ordered;
}

async function writeResizedPng(src, dest) {
  const buf = await sharp(src).rotate().resize({ width: 1600, withoutEnlargement: true }).png({ compressionLevel: 8 }).toBuffer();
  fs.writeFileSync(dest, buf);
  console.log('wrote', path.relative(process.cwd(), dest));
}

ensureDir(importDir); ensureDir(gameplayDir); ensureDir(blogDir);

const sources = listAssetImages();
console.log(`Found ${sources.length} source screenshots`);
if (!sources.length) { console.error('No screenshots'); process.exit(1); }

const shortFiles = [];
for (let i = 0; i < sources.length; i++) {
  const name = sources[i];
  const short = `shot-${String(i + 1).padStart(2, '0')}${path.extname(name).toLowerCase()}`;
  const to = path.join(importDir, short);
  fs.copyFileSync(longPath(path.join(assetsDir, name)), to);
  shortFiles.push(to);
}

const alts = [];
for (const item of GAMEPLAY) {
  await writeResizedPng(shortFiles[item.srcIndex % shortFiles.length], path.join(gameplayDir, item.file));
  alts.push({ file: item.file, alt: item.alt, srcIndex: item.srcIndex % shortFiles.length });
}
for (let i = 0; i < BLOG.length; i++) {
  await writeResizedPng(shortFiles[(i + 1) % shortFiles.length], path.join(blogDir, BLOG[i]));
}

fs.writeFileSync(path.join(process.cwd(), 'scripts', 'gameplay-image-alts.json'), JSON.stringify({ gameplay: alts, sourceCount: shortFiles.length }, null, 2));
console.log('Done. Next: npm.cmd run optimize:images');
