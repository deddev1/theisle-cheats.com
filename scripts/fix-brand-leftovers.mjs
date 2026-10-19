import fs from 'node:fs';

const files = [
  'src/pages/forum/[slug].astro',
  'src/pages/forum/index.astro',
  'src/components/WhySetupSection.astro',
  'src/i18n/en.ts',
];

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  text = text.split('The Isle Cheats').join('The Isle Cheats');
  text = text.replace(/status:\s*'The Isle[^']*'/, "status: 'The Isle online'");
  if (text !== before) {
    fs.writeFileSync(file, text);
    console.log('updated', file);
  } else {
    console.log('noop', file);
  }
}
