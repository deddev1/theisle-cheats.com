import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const assetsDir =
  'C:\\Users\\3Tee System\\.cursor\\projects\\c-Users-3Tee-System-Downloads-theisle-cheats-com-main\\assets';
const out = path.resolve('public');

const files = fs.readdirSync(assetsDir);
const hit = files.find((f) => /images__9_/i.test(f));
if (!hit) throw new Error('Isle logo not found');
const src = path.join(assetsDir, hit);
const meta = await sharp(src).metadata();

const cropH = Math.round(meta.height * 0.62);
const cropW = Math.min(meta.width, Math.round(cropH * 1.15));
const left = Math.max(0, Math.round((meta.width - cropW) / 2));
const top = Math.max(0, Math.round(meta.height * 0.04));

const mark = await sharp(src)
  .extract({ left, top, width: Math.min(cropW, meta.width - left), height: Math.min(cropH, meta.height - top) })
  .resize(512, 512, { fit: 'contain', background: { r: 14, g: 16, b: 18, alpha: 1 } })
  .png()
  .toBuffer();

async function sized(size) {
  return sharp(mark).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
}

function pngSize(buf) { return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }; }
function encodeIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6 + count * 16;
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(count, 4);
  let o = 6, dataOffset = headerSize;
  const parts = [header];
  for (const buf of pngBuffers) {
    const { w, h } = pngSize(buf);
    header.writeUInt8(w >= 256 ? 0 : w, o);
    header.writeUInt8(h >= 256 ? 0 : h, o + 1);
    header.writeUInt8(0, o + 2); header.writeUInt8(0, o + 3);
    header.writeUInt16LE(1, o + 4); header.writeUInt16LE(32, o + 6);
    header.writeUInt32LE(buf.length, o + 8); header.writeUInt32LE(dataOffset, o + 12);
    o += 16; dataOffset += buf.length; parts.push(buf);
  }
  return Buffer.concat(parts);
}

for (const [name, size] of Object.entries({
  'favicon-16.png': 16, 'favicon-32.png': 32, 'apple-touch-icon.png': 180, 'favicon-512.png': 512, 'logo.png': 128,
})) {
  fs.writeFileSync(path.join(out, name), await sized(size));
  console.log('wrote', name);
}
fs.writeFileSync(path.join(out, 'favicon.ico'), encodeIco([await sized(16), await sized(32)]));
const logoPng = await sized(128);
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="The Isle Cheats">
  <image href="data:image/png;base64,${logoPng.toString('base64')}" width="128" height="128" />
</svg>
`;
fs.writeFileSync(path.join(out, 'favicon.svg'), svg);
fs.writeFileSync(path.join(out, 'logo.svg'), svg);
console.log('favicon + logo done');
