import fs from 'node:fs';

const files = [
  'src/data/blog/posts.ts',
  'src/data/forum.ts',
  'src/i18n/en.ts',
  'src/data/products.ts',
];

const reps = [
  ['["SMG close fight", "Sticky Target + FOV", "Stay on target while strafing"]', '["Close bite fight", "Sticky Target + FOV", "Stay on target while strafing"]'],
  ['Mark chests and reboot vans', 'Mark nests and carcasses'],
  ['chest locations and loot timings', 'nest locations and carcass timings'],
  ['chest and loot information', 'nest and carcass information'],
  ['chest positions', 'nest positions'],
  [
    'Supports and rotators often thrive on Lite—vision wins lanes without script risk. Mids and soft supports on combo players benefit from Pro bite assist',
    'Solo survival players often thrive on Lite—vision wins hunts without script risk. Pack leaders benefit from Pro bite assist',
  ],
  ['milliseconds between shots', 'milliseconds between bites'],
  ['ranked replays', 'Official deathcams'],
  ['Deep weapon examples', 'Deep species examples'],
  ['ranked tuning', 'Official tuning'],
  ['per-weapon bite assist profiles', 'per-species bite assist profiles'],
  ['before ranked.', 'before Official.'],
  ['queue ranked', 'queue Official'],
  ['in ranked', 'on Official'],
  ['Get Pro weapon bite assist', 'Get Pro species bite assist'],
  ['SMG tracking', 'Chase tracking'],
  ['skins, wraps and exclusive sets', 'skins, patterns and exclusive sets'],
  ['outfits, wraps, and exclusive sets', 'skins, patterns, and exclusive sets'],
  ['skins and wraps locally', 'skins and patterns locally'],
  ['weapon configs', 'species configs'],
  ['per-weapon settings', 'per-species settings'],
  ['bot lobby', 'practice lobby'],
  ['aim trainer', 'practice session'],
];

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [from, to] of reps) text = text.split(from).join(to);
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', file);
  } else {
    console.log('noop', file);
  }
}
