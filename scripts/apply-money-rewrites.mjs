/**
 * Replaces title/desc/readTime/body for the 8 money blog posts by slug.
 */
import fs from 'node:fs';

const path = 'src/data/blog/posts.ts';
let src = fs.readFileSync(path, 'utf8');

/** @type {Record<string, { title: string; desc: string; readTime: string; body: any[] }>} */
const rewrites = {
  'theisle-cheats-features-guide': {
    title: 'The Isle Cheats Features: Bite Assist, ESP Wallhack and Radar',
    desc: 'Full breakdown of The Isle cheats features for EVRIMA and Legacy — bite assist, ESP wallhack, radar, nest ESP and stream-proof overlays.',
    readTime: '9 min read',
    body: [
      { type: 'p', text: 'The Isle cheats features on theisle-cheats.com are built for Steam EVRIMA and Legacy survival, not battle-royale loadouts. This guide maps every core module so you can pick Lite, Pro, or Elite with a clear picture of what lands in the loader.' },
      { type: 'h2', text: 'Bite Assist' },
      { type: 'p', text: 'Bite Assist smooths bite tracking with FOV, smoothness, Sticky Target and Hit Priority. Pro and Elite ship per-species profiles for carnivores and herbivores so a juvenile Deino does not share the same snap feel as an adult Rex. Start conservative on Official; raise aggression only after clean Community sessions.' },
      { type: 'h2', text: 'ESP wallhack' },
      { type: 'p', text: 'Player ESP draws boxes, skeletons, distance, weight and growth through foliage. Nest and carcass labels sit on the same overlay so you can decide fight-or-flee before you leave cover. Lite centers on this vision stack — see the [ESP wallhack setup](/blog/theisle-esp-wallhack-setup/) for ranges that stay readable.' },
      { type: 'h2', text: 'Radar and world awareness' },
      { type: 'p', text: 'Radar plots nearby dinosaurs, nests, corpses and water markers on a compact mini-map. Pair it with long-range snaplines when you rotate between territories. Deep radar tuning lives in the [radar hack guide](/blog/theisle-radar-hack-guide/).' },
      { type: 'h2', text: 'Appearance Changer and Elite extras' },
      { type: 'p', text: 'Elite adds carcass assist, Auto Finish, Auto Stamina and local Appearance Changer previews. Cosmetic swaps stay client-side on your display. Stream-proof mode hides overlays from OBS while you still see ESP on your monitor.' },
      { type: 'h2', text: 'Which tier matches the feature set' },
      {
        type: 'table',
        headers: ['Tier', 'Core features', 'Best for'],
        rows: [
          ['Lite', 'ESP, radar, nest/carcass labels, stream-proof', 'Players who want vision first'],
          ['Pro', 'Lite + Bite Assist + species profiles', 'Official hunters who need smooth bites'],
          ['Elite', 'Pro + carcass assist, Auto Finish, Appearance Changer', 'Operators who want the full suite'],
        ],
      },
      { type: 'p', text: 'Compare tiers on [Lite](/products/theisle-cheats/lite/), [Pro](/products/theisle-cheats/pro/) and [Elite](/products/theisle-cheats/elite/), or read [Lite vs Pro](/blog/theisle-lite-vs-pro/).' },
      {
        type: 'cta',
        title: 'Browse The Isle cheat modules',
        text: 'Open the product hub to see live status and feature lists for every tier.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-esp-wallhack-setup': {
    title: 'The Isle ESP Wallhack Setup for Official Servers',
    desc: 'Configure The Isle ESP wallhack for EVRIMA and Legacy — boxes, skeletons, growth, weight and nest labels that stay readable on Official.',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'The Isle ESP wallhack is the foundation of Lite. On Official, dense jungle and night fog punish players who rely on audio alone. This setup guide focuses on readable overlays for Steam EVRIMA and Legacy — not max sliders that paint every AI dinosaur on the map.' },
      { type: 'h2', text: 'Start with player boxes and distance' },
      { type: 'p', text: 'Enable player boxes, name tags and distance first. Cap render distance around mid-range so distant AI does not clutter the frame. Add skeletons only after you can track boxes without staring at the overlay during chases.' },
      { type: 'h2', text: 'Weight, growth and species readouts' },
      { type: 'p', text: 'Growth percent and weight tell you whether a silhouette is a free kill or an apex threat. Turn species labels on for Legacy mixed lobbies where juveniles and adults share the same clearing. Color-code hostiles so pack mates do not look identical to strangers.' },
      { type: 'h2', text: 'Nest, carcass and food ESP' },
      { type: 'p', text: 'Nest markers and carcass labels shorten starve cycles. Keep fruit and herb tags at a shorter radius than player ESP so food noise does not hide approaching hunters. Water markers help herbivores plan safe drink routes between fights.' },
      { type: 'h2', text: 'Official-safe defaults' },
      {
        type: 'ul',
        items: [
          'Use portal Official presets before custom max ranges',
          'Disable alerts that spam every AI footstep',
          'Test stream-proof if you capture with OBS',
          'Recheck the status banner after every EAC or game patch',
        ],
      },
      { type: 'p', text: 'Lite ships this vision stack. Add Bite Assist later with [Pro](/products/theisle-cheats/pro/) if you want combat modules on top of wallhack.' },
      {
        type: 'cta',
        title: 'Get ESP wallhack on Lite',
        text: 'Lite centers on player ESP, radar and nest labels for Official survival.',
        href: '/products/theisle-cheats/lite/',
      },
    ],
  },
  'theisle-bite-assist-official': {
    title: 'The Isle Bite Assist for Official: Smooth Presets That Stick',
    desc: 'Tune The Isle bite assist for Official EVRIMA and Legacy — smoothness, FOV, Sticky Target and Hit Priority without obvious snaps.',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'Bite assist for Official is a Pro-tier module. The goal is humanized bite tracking through grass and charge animations — not instant locks that look automated in deathcams. This guide covers Official-safe presets for Steam The Isle.' },
      { type: 'h2', text: 'Smoothness before FOV' },
      { type: 'p', text: 'Raise smoothness first so the camera eases onto bone priority. Wide FOV with zero smoothness creates snappy arcs that other players notice. Moderate FOV plus high smoothness wins more long sessions than max aggression day one.' },
      { type: 'h2', text: 'Sticky Target and Hit Priority' },
      { type: 'p', text: 'Sticky Target keeps aim on the dinosaur you committed to during a pack fight. Hit Priority prefers low-HP or closest bones so finish bites land cleaner. Disable sticky when you need free look while nesting or drinking.' },
      { type: 'h2', text: 'Species profiles' },
      { type: 'p', text: 'Save separate profiles for carnivore chase, herbivore defense and apex duels. Hotkey swap between them without reopening the loader. Detailed per-species examples live in the [bite assist combat guide](/blog/theisle-bite-assist-combat/).' },
      { type: 'h2', text: 'Verify before you queue Official' },
      {
        type: 'ul',
        items: [
          'Load the portal Official preset, not a max-slider export',
          'Run a Community or practice session for ten minutes',
          'Confirm loader status after patches',
          'Lower aggression if bites look robotic in replays',
        ],
      },
      {
        type: 'cta',
        title: 'Unlock Pro bite assist',
        text: 'Pro adds Bite Assist on top of Lite ESP and radar for Official play.',
        href: '/products/theisle-cheats/pro/',
      },
    ],
  },
  'theisle-bite-assist-combat': {
    title: 'The Isle Bite Assist Combat Guide: Carnivore and Herbivore',
    desc: 'Per-species The Isle bite assist profiles for Pro — carnivore chase tracking, herbivore defense and apex finish bites on Official.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'Combat bite assist is where Pro earns its keep. Carnivores need sticky chase tracking; herbivores need defensive FOV that does not yank the camera off a nest. Build one profile per role instead of one global snap for every dinosaur.' },
      { type: 'h2', text: 'Carnivore chase profile' },
      { type: 'p', text: 'Use mid FOV, high smoothness and prediction on moving prey. Priority on neck or closest bone keeps bites legal-looking during sprints. Practice on Community servers before Official so charge timing matches your latency.' },
      { type: 'h2', text: 'Herbivore defense profile' },
      { type: 'p', text: 'Widen FOV slightly for pack peels, keep smoothness high and prefer closest threat. Sticky Target helps when two carnivores cross your path near a nest — you stay on the first commit instead of oscillating.' },
      { type: 'h2', text: 'Apex and juvenile splits' },
      { type: 'p', text: 'Apex profiles can tolerate slightly lower smoothness once your tracking already looks clean. Juvenile profiles should stay soft — small hitboxes punish snappy assist. Hotkey swap when you grow through stages mid-session.' },
      { type: 'h2', text: 'Chase tracking drills' },
      {
        type: 'ul',
        items: [
          'Strafe with prey for thirty seconds without changing sliders',
          'Break line of sight in grass, then reacquire with Sticky Target',
          'Finish low-HP targets using Hit Priority only',
          'Recheck Official presets after every loader update',
        ],
      },
      { type: 'p', text: 'For Official-safe starting points, read [bite assist for Official](/blog/theisle-bite-assist-official/) before raising aggression.' },
      {
        type: 'cta',
        title: 'Get Pro species bite assist',
        text: 'Pro includes Bite Assist with per-species profiles for EVRIMA and Legacy.',
        href: '/products/theisle-cheats/pro/',
      },
    ],
  },
  'theisle-lite-vs-pro': {
    title: 'The Isle Lite vs Pro: Which Tier Fits Your Playstyle',
    desc: 'Compare The Isle Lite vs Pro cheats — ESP and radar on Lite versus bite assist on Pro — plus when Elite is worth the upgrade.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'Lite vs Pro is the most common buying decision on theisle-cheats.com. Lite wins if you want map awareness. Pro wins if you also need Bite Assist on Official. Elite is a separate jump for carcass assist and Appearance Changer.' },
      { type: 'h2', text: 'What Lite includes' },
      { type: 'p', text: 'Lite focuses on player ESP, skeletons, distance, growth/weight readouts, radar, nest and carcass labels, plus stream-proof capture. Solo survivors who win by seeing packs early often stay on Lite for months.' },
      { type: 'h2', text: 'What Pro adds' },
      { type: 'p', text: 'Pro keeps the Lite vision stack and adds Bite Assist, Sticky Target, Hit Priority and per-species profiles. Choose Pro when you fight often on Official and want smoother bite timing — see [Lite](/products/theisle-cheats/lite/) and [Pro](/products/theisle-cheats/pro/) side by side.' },
      { type: 'h2', text: 'When Elite makes sense' },
      { type: 'p', text: 'Elite layers carcass assist, Auto Finish, Auto Stamina and Appearance Changer on top of Pro. Slots can be limited — check the status banner and the [Elite guide](/blog/theisle-elite-tier-guide/) before you buy.' },
      {
        type: 'table',
        headers: ['Need', 'Pick', 'Why'],
        rows: [
          ['See dinosaurs through foliage', 'Lite', 'ESP + radar without assist'],
          ['Smooth bites on Official', 'Pro', 'Bite Assist + species profiles'],
          ['Full suite + cosmetics preview', 'Elite', 'Assist extras + Appearance Changer'],
        ],
      },
      {
        type: 'cta',
        title: 'Compare Lite and Pro',
        text: 'Open each product page for feature lists, then check live status before checkout.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'how-to-buy-theisle-cheats-2026': {
    title: 'How to Buy The Isle Cheats in 2026',
    desc: 'Step-by-step guide to buy The Isle cheats — pick Lite, Pro or Elite, complete checkout, download the loader and verify status.',
    readTime: '6 min read',
    body: [
      { type: 'p', text: 'Buying The Isle cheats in 2026 is a short path: pick a tier, finish partner checkout, open the portal and download the latest Windows loader. This walkthrough covers the exact order so you do not launch an outdated build after payment.' },
      { type: 'h2', text: 'Step 1 — Pick Lite, Pro or Elite' },
      { type: 'p', text: 'Use [Lite vs Pro](/blog/theisle-lite-vs-pro/) if you are unsure. Vision-only buyers start on [Lite](/products/theisle-cheats/lite/). Hunters who want Bite Assist choose [Pro](/products/theisle-cheats/pro/). Full-suite operators go [Elite](/products/theisle-cheats/elite/).' },
      { type: 'h2', text: 'Step 2 — Check live status' },
      { type: 'p', text: 'Read the status banner on theisle-cheats.com and Discord #status. If the build shows updating or offline, wait. Paying during a red banner is how people waste their first night.' },
      { type: 'h2', text: 'Step 3 — Checkout and portal access' },
      { type: 'p', text: 'Start checkout from the product page. After payment, the partner portal unlocks the loader, setup guide and config library. Keep the order email handy for support tickets.' },
      { type: 'h2', text: 'Step 4 — Install, preset, verify' },
      {
        type: 'ul',
        items: [
          'Download the latest loader from the portal',
          'Load an Official or Community preset before custom sliders',
          'Test ESP or bite assist in a practice session',
          'Only then queue Official on Steam',
        ],
      },
      { type: 'p', text: 'Need HWID tools after a hardware ban? Read [HWID spoofer vs new account](/blog/theisle-hwid-spoofer-after-ban/) before you buy utilities.' },
      {
        type: 'cta',
        title: 'Start checkout',
        text: 'Open the shop, pick your tier and complete secure checkout when status shows online.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-radar-hack-guide': {
    title: 'The Isle Radar Hack Guide for Nest and Pack Awareness',
    desc: 'Set up The Isle radar hack for EVRIMA and Legacy — enemy dots, nest markers, carcasses and water without cluttering your fight view.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'The Isle radar hack turns nearby threats and resources into a compact mini-map. On Official, radar is how you rotate between nests without walking into a silent apex. This guide keeps the overlay useful instead of noisy.' },
      { type: 'h2', text: 'Enemy dots first' },
      { type: 'p', text: 'Enable player dots and facing indicators before world clutter. Cap radar radius so distant AI does not fill the disk. Match the radius to your ESP distance so both modules tell the same story.' },
      { type: 'h2', text: 'Nests, carcasses and water' },
      { type: 'p', text: 'Nest and carcass markers shorten starve loops. Water pins help herbivores plan drink routes. Keep food icons smaller or shorter-range than player dots so a mango pile never hides a stalking carnivore.' },
      { type: 'h2', text: 'Fighting with radar' },
      { type: 'p', text: 'Glance at radar on rotates; look at the world during bites. If you stare at the disk mid-fight, lower opacity or shrink the widget. Stream-proof users should confirm OBS still shows a clean feed after radar is enabled.' },
      { type: 'h2', text: 'Lite pairing' },
      { type: 'p', text: 'Radar ships with the Lite vision stack alongside ESP wallhack. Tune both together using the [ESP setup guide](/blog/theisle-esp-wallhack-setup/), then add Bite Assist later on Pro if you need combat modules.' },
      {
        type: 'cta',
        title: 'Get radar with Lite',
        text: 'Lite includes radar, player ESP and nest labels for Official survival.',
        href: '/products/theisle-cheats/lite/',
      },
    ],
  },
  'theisle-hwid-spoofer-after-ban': {
    title: 'The Isle HWID Spoofer vs New Account After an EAC Ban',
    desc: 'Decide between a The Isle HWID spoofer and a fresh Steam account after an EAC or hardware ban — plus post-spoof checks before you launch again.',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'After an EAC ban, players ask whether to spoof hardware or start a new Steam account. The answer depends on whether the ban is account-only, hardware-linked, or both. This guide keeps the decision practical for The Isle on PC.' },
      { type: 'h2', text: 'When a new account is enough' },
      { type: 'p', text: 'If only the Steam account is flagged and your PC still launches clean on another account, a fresh account plus clean presets may be enough. Do not launch outdated loaders on the new account — follow the [patch-day checklist](/blog/eac-patch-day-checklist/).' },
      { type: 'h2', text: 'When HWID spoofing enters the picture' },
      { type: 'p', text: 'Hardware bans survive account swaps. A HWID spoofer rotates disk, MAC and related identifiers so the machine looks new to enforcement. Buy the utility only after you confirm a hardware flag — see the [HWID Spoofer product page](/products/theisle-cheats/hwid-spoofer/).' },
      { type: 'h2', text: 'Post-spoof checklist' },
      {
        type: 'ul',
        items: [
          'Run the portal compatibility scan before spoofing',
          'Spoof, reboot, verify identifiers changed',
          'Launch The Isle without cheats once to confirm a clean start',
          'Only then load the latest cheat build if status is online',
        ],
      },
      { type: 'h2', text: 'UGC appeals' },
      { type: 'p', text: 'Some bans need evidence packs and publisher follow-ups rather than spoofing. UGC tools organize that workflow — they do not magically reverse every EAC decision. Pair appeal work with honest status checks before you spend more.' },
      {
        type: 'cta',
        title: 'Open HWID Spoofer',
        text: 'Review the HWID Spoofer feature list and status before checkout.',
        href: '/products/theisle-cheats/hwid-spoofer/',
      },
    ],
  },
};

function serializeBody(body) {
  return (
    '[\n' +
    body
      .map((block) => {
        if (block.type === 'p' || block.type === 'h2' || block.type === 'h3') {
          return `      { type: '${block.type}', text: ${JSON.stringify(block.text)} }`;
        }
        if (block.type === 'ul') {
          return `      { type: 'ul', items: [${block.items.map((i) => JSON.stringify(i)).join(', ')}] }`;
        }
        if (block.type === 'table') {
          const headers = block.headers.map((h) => JSON.stringify(h)).join(', ');
          const rows = block.rows
            .map((r) => `[${r.map((c) => JSON.stringify(c)).join(', ')}]`)
            .join(',\n          ');
          return `      {\n        type: 'table',\n        headers: [${headers}],\n        rows: [\n          ${rows},\n        ],\n      }`;
        }
        if (block.type === 'cta') {
          return `      {\n        type: 'cta',\n        title: ${JSON.stringify(block.title)},\n        text: ${JSON.stringify(block.text)},\n        href: ${JSON.stringify(block.href)},\n      }`;
        }
        throw new Error(`Unknown block ${block.type}`);
      })
      .join(',\n') +
    ',\n    ]'
  );
}

function findPostBounds(source, slug) {
  const marker = `slug: "${slug}"`;
  const slugIdx = source.indexOf(marker);
  if (slugIdx < 0) return null;

  // Walk back to the post opening `{` that is preceded by newline + two spaces
  let start = -1;
  for (let i = slugIdx; i >= 0; i--) {
    if (source.startsWith('\n  {', i) || source.startsWith('  {', i)) {
      // ensure this object contains our slug before the next peer object
      const nextPeer = source.indexOf('\n  {', i + 4);
      if (nextPeer === -1 || slugIdx < nextPeer) {
        start = source[i] === '\n' ? i + 1 : i;
        // if matched "  {" at i
        if (source.startsWith('\n  {', i)) start = i + 1;
        break;
      }
    }
  }
  if (start < 0) {
    // fallback: last "{ " before slug at beginning of line-ish
    start = source.lastIndexOf('{', slugIdx);
  }

  let depth = 0;
  let end = -1;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) {
        end = i + 1;
        if (source[end] === ',') end++;
        break;
      }
    }
  }
  return end > start ? { start, end } : null;
}

for (const [slug, data] of Object.entries(rewrites)) {
  const bounds = findPostBounds(src, slug);
  if (!bounds) {
    console.error('missing', slug);
    process.exitCode = 1;
    continue;
  }
  const obj = src.slice(bounds.start, bounds.end);
  const next = obj
    .replace(/title:\s*(?:'[^']*'|"[^"]*")/, `title: ${JSON.stringify(data.title)}`)
    .replace(/desc:\s*(?:'[^']*'|"[^"]*")/, `desc: ${JSON.stringify(data.desc)}`)
    .replace(/readTime:\s*(?:'[^']*'|"[^"]*")/, `readTime: ${JSON.stringify(data.readTime)}`)
    .replace(/body:\s*\[[\s\S]*\]/, `body: ${serializeBody(data.body)}`);

  if (next === obj) {
    console.error('no changes', slug);
    process.exitCode = 1;
    continue;
  }
  src = src.slice(0, bounds.start) + next + src.slice(bounds.end);
  console.log('rewrote', slug);
}

fs.writeFileSync(path, src);
console.log('wrote', path);
