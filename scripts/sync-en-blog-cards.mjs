import fs from 'node:fs';

const sync = [
  [
    'theisle-cheats-features-guide',
    'The Isle Cheats Features: Bite Assist, ESP Wallhack and Radar',
    'Full breakdown of The Isle cheats features for EVRIMA and Legacy — bite assist, ESP wallhack, radar, nest ESP and stream-proof overlays.',
    '9 min read',
  ],
  [
    'theisle-esp-wallhack-setup',
    'The Isle ESP Wallhack Setup for Official Servers',
    'Configure The Isle ESP wallhack for EVRIMA and Legacy — boxes, skeletons, growth, weight and nest labels that stay readable on Official.',
    '8 min read',
  ],
  [
    'theisle-bite-assist-official',
    'The Isle Bite Assist for Official: Smooth Presets That Stick',
    'Tune The Isle bite assist for Official EVRIMA and Legacy — smoothness, FOV, Sticky Target and Hit Priority without obvious snaps.',
    '8 min read',
  ],
  [
    'theisle-bite-assist-combat',
    'The Isle Bite Assist Combat Guide: Carnivore and Herbivore',
    'Per-species The Isle bite assist profiles for Pro — carnivore chase tracking, herbivore defense and apex finish bites on Official.',
    '7 min read',
  ],
  [
    'theisle-lite-vs-pro',
    'The Isle Lite vs Pro: Which Tier Fits Your Playstyle',
    'Compare The Isle Lite vs Pro cheats — ESP and radar on Lite versus bite assist on Pro — plus when Elite is worth the upgrade.',
    '7 min read',
  ],
  [
    'how-to-buy-theisle-cheats-2026',
    'How to Buy The Isle Cheats in 2026',
    'Step-by-step guide to buy The Isle cheats — pick Lite, Pro or Elite, complete checkout, download the loader and verify status.',
    '6 min read',
  ],
  [
    'theisle-radar-hack-guide',
    'The Isle Radar Hack Guide for Nest and Pack Awareness',
    'Set up The Isle radar hack for EVRIMA and Legacy — enemy dots, nest markers, carcasses and water without cluttering your fight view.',
    '7 min read',
  ],
  [
    'theisle-hwid-spoofer-after-ban',
    'The Isle HWID Spoofer vs New Account After an EAC Ban',
    'Decide between a The Isle HWID spoofer and a fresh Steam account after an EAC or hardware ban — plus post-spoof checks before you launch again.',
    '8 min read',
  ],
  [
    'theisle-practice-vs-official',
    'Singleplayer Practice vs Official The Isle Cheats',
    'How practice sessions differ from private bite assist and ESP tools used in EVRIMA and Official.',
    '8 min read',
  ],
];

let en = fs.readFileSync('src/i18n/en.ts', 'utf8');
for (const [slug, title, desc, readTime] of sync) {
  const re = new RegExp(
    `(title: ')([^']*)(',\\s*\\n\\s*slug: '${slug}',\\s*\\n\\s*image: '[^']+',\\s*\\n\\s*desc: ')([^']*)(',\\s*\\n\\s*date: '[^']+',\\s*\\n\\s*readTime: ')([^']*)(')`,
  );
  if (!re.test(en)) {
    console.log('miss', slug);
    continue;
  }
  en = en.replace(
    re,
    `$1${title.replace(/'/g, "\\'")}$3${desc.replace(/'/g, "\\'")}$5${readTime}$6`,
  );
  console.log('synced', slug);
}
fs.writeFileSync('src/i18n/en.ts', en);
