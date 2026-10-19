import fs from 'node:fs';

const path = 'src/i18n/en.ts';
let t = fs.readFileSync(path, 'utf8');
t = t.replace(/readTime:\s*'(\d+ min read)'(?!,)/g, "readTime: '$1',");
fs.writeFileSync(path, t);
const missing = [...t.matchAll(/readTime: '\d+ min read'\s*\n/g)];
console.log('lines without comma after fix', missing.filter((m) => !m[0].includes(',')).length);
console.log(
  [...t.matchAll(/readTime: '[^']*',?/g)]
    .slice(3, 10)
    .map((m) => m[0]),
);
