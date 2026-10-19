/**
 * Rewrites the remaining 10 blog posts with unique Isle intents.
 */
import fs from 'node:fs';

const path = 'src/data/blog/posts.ts';
let src = fs.readFileSync(path, 'utf8');

/** @type {Record<string, { title: string; desc: string; readTime: string; body: any[] }>} */
const rewrites = {
  'theisle-practice-before-official': {
    title: 'The Isle Practice Checklist: Drills Before You Queue Official',
    desc: 'A step-by-step The Isle practice curriculum — bite timing, nest routes and ESP glances — before you queue Official on Steam.',
    readTime: '9 min read',
    body: [
      { type: 'p', text: 'This is a practice curriculum, not a product pitch. Use Community servers or quiet singleplayer sessions to build muscle memory before Official. Private modules from theisle-cheats.com come later — after the drills below feel automatic.' },
      { type: 'h2', text: 'Warm-up block (10 minutes)' },
      { type: 'p', text: 'Spawn as your main species. Walk a nest → water → food loop without fighting. Call out growth stage, hunger and stamina out loud so you notice meter habits before overlays exist.' },
      { type: 'h2', text: 'Bite timing drills' },
      { type: 'p', text: 'Pick one prey or training dummy path. Practice close bite, mid chase and nest defense for three minutes each. If you already own Pro, load a soft Official preset — see [bite assist combat](/blog/theisle-bite-assist-combat/) — but keep FOV moderate.' },
      { type: 'h2', text: 'Vision drills without staring' },
      { type: 'p', text: 'Enable player boxes briefly, mark three nest or carcass spots, then fight with overlays minimized. Pair with [ESP wallhack setup](/blog/theisle-esp-wallhack-setup/) ranges so practice matches live settings.' },
      { type: 'h2', text: 'Session checklist' },
      {
        type: 'table',
        headers: ['Drill', 'Focus', 'Pass criteria'],
        rows: [
          ['Nest loop', 'Food and water route', 'Complete without starving'],
          ['Close bite', 'Timing under grass', 'Hits land without panic spam'],
          ['Chase', 'Strafe tracking', 'Stay on target for 20 seconds'],
          ['Nest defense', 'Facing swaps', 'Peel without losing nest'],
          ['Vision glance', 'ESP then eyes-up', 'Call a threat before it arrives'],
          ['Stream check', 'Capture hygiene', 'OBS shows clean game if you stream'],
        ],
      },
      { type: 'p', text: 'When drills pass two days in a row, move to private tiers via [Lite](/products/theisle-cheats/lite/) or [Pro](/products/theisle-cheats/pro/). Safety rules live in [practice safely](/blog/theisle-practice-safely/).' },
      {
        type: 'cta',
        title: 'Ready for live modules?',
        text: 'Finish the checklist, then pick Lite for vision or Pro for bite assist.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-practice-bite-assist-esp': {
    title: 'Tune Bite Assist and ESP in Practice Before Official',
    desc: 'How to tune The Isle Bite Assist and ESP overlays in practice sessions — smoothness, FOV and readable wallhack without Official risk.',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'This guide is only about tuning overlays and Bite Assist in practice. It is not the drill curriculum ([practice checklist](/blog/theisle-practice-before-official/)) and not the risk article ([practice safely](/blog/theisle-practice-safely/)). Stay in Community or singleplayer until settings feel human.' },
      { type: 'h2', text: 'ESP first, assist second' },
      { type: 'p', text: 'Load Lite-style vision: boxes, distance, growth and nest labels at mid range. Confirm you can glance and look away. Full wallhack tuning is in [ESP wallhack setup](/blog/theisle-esp-wallhack-setup/).' },
      { type: 'h2', text: 'Bite Assist smoothness ladder' },
      { type: 'p', text: 'Start high smoothness, mid FOV. Lower smoothness one notch only after chase tracking looks natural for a full minute. Species splits belong in [bite assist combat](/blog/theisle-bite-assist-combat/); Official-safe defaults are in [bite assist for Official](/blog/theisle-bite-assist-official/).' },
      { type: 'h2', text: 'Sticky Target and Hit Priority in practice' },
      { type: 'p', text: 'Enable Sticky Target during pack peels, disable it while nesting or drinking. Hit Priority should prefer closest or low-HP dinosaurs — test both and note which creates fewer camera yanks in grass.' },
      { type: 'h2', text: 'Radar opacity' },
      { type: 'p', text: 'Keep radar small and dim during fights. Match radius to ESP distance so both tools agree — see [radar hack guide](/blog/theisle-radar-hack-guide/).' },
      {
        type: 'ul',
        items: [
          'Save a “Practice Soft” profile separate from Official',
          'Never export max sliders from practice into Official',
          'Re-test after every loader update',
          'Record one minute of chase to judge snap look',
        ],
      },
      {
        type: 'cta',
        title: 'Unlock Pro tuning modules',
        text: 'Pro includes Bite Assist on top of Lite ESP for when practice settings graduate to Official.',
        href: '/products/theisle-cheats/pro/',
      },
    ],
  },
  'theisle-practice-safely': {
    title: 'Practice The Isle Cheats Safely: Boundaries Before You Launch',
    desc: 'Safety boundaries for The Isle practice — what not to launch, practice vs live risk, and when to stop after an EAC or game patch.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'Safe practice means knowing what practice cannot do. Community and singleplayer help you learn timing. They do not make Official risk-free. This article is the boundary list — not the drill list or the tuning list.' },
      { type: 'h2', text: 'What practice is for' },
      { type: 'p', text: 'Use practice to learn nest routes, bite timing and overlay glances. Use it to validate smoothness before Official. Do not treat practice as proof that a loader is undetectable.' },
      { type: 'h2', text: 'What not to launch' },
      {
        type: 'ul',
        items: [
          'Do not queue Official on a red or updating status banner',
          'Do not load max-slider exports from random Discord files',
          'Do not skip the post-patch checklist',
          'Do not assume a clean practice session equals a clean Official session',
        ],
      },
      { type: 'h2', text: 'After patches' },
      { type: 'p', text: 'Every The Isle or EAC update can break offsets. Follow the [EAC patch day checklist](/blog/eac-patch-day-checklist/) before you practice with private modules again.' },
      { type: 'h2', text: 'When verification fails' },
      { type: 'p', text: 'If Steam or EAC cannot verify the client, stop launching cheats. Read [EAC unable to verify](/blog/eac-bypass-theisle-guide/) and fix the game install first.' },
      { type: 'h2', text: 'Private tools are a separate risk path' },
      { type: 'p', text: 'Practice tools never become Official features. Private Lite/Pro/Elite builds are a different product path — compare them in [practice vs Official](/blog/theisle-practice-vs-official/).' },
      {
        type: 'cta',
        title: 'Check status before any live session',
        text: 'Open the shop status banner, then pick a tier only when the build shows online.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-practice-vs-official': {
    title: 'Practice Tools vs Official The Isle Cheats: What Actually Differs',
    desc: 'Compare The Isle practice sessions with private theisle-cheats.com tiers — what carries over, what never does, and which product path fits Official.',
    readTime: '8 min read',
    body: [
      { type: 'p', text: 'Players confuse practice sessions with private the isle cheats. Practice teaches habits. Official on Steam needs maintained external modules when you choose that path. This comparison keeps the two worlds separate.' },
      { type: 'h2', text: 'What practice gives you' },
      { type: 'p', text: 'Unlimited resets, low social risk and space to learn nest loops. Practice does not show real Official pack density and does not update with EAC-aware loaders.' },
      { type: 'h2', text: 'What private tiers give you' },
      { type: 'p', text: '[Lite](/products/theisle-cheats/lite/) adds ESP and radar for live games. [Pro](/products/theisle-cheats/pro/) adds Bite Assist. [Elite](/products/theisle-cheats/elite/) adds carcass assist and Appearance Changer. Feature map: [cheats features guide](/blog/theisle-cheats-features-guide/).' },
      { type: 'h2', text: 'What never carries over' },
      {
        type: 'table',
        headers: ['Thing', 'Practice', 'Official private path'],
        rows: [
          ['Nest route skill', 'Yes', 'Yes'],
          ['Built-in lobby commands', 'Sometimes', 'No'],
          ['ESP wallhack', 'Only if you enable private modules', 'Lite+'],
          ['Bite Assist', 'Only if you enable Pro modules', 'Pro+'],
          ['EAC risk', 'Low in pure practice', 'Real — read status'],
        ],
      },
      { type: 'h2', text: 'Recommended path' },
      { type: 'p', text: 'Finish the [practice checklist](/blog/theisle-practice-before-official/), respect [safety boundaries](/blog/theisle-practice-safely/), then buy only the tier you need. Buying guide: [how to buy](/blog/how-to-buy-theisle-cheats-2026/).' },
      {
        type: 'cta',
        title: 'Move beyond practice',
        text: 'When drills are done, open Lite, Pro or Elite and confirm live status before checkout.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-elite-tier-guide': {
    title: 'The Isle Elite Tier Guide: When the Full Suite Is Worth It',
    desc: 'When to upgrade to The Isle Elite cheats — carcass assist, Auto Finish, Appearance Changer and priority patches versus staying on Pro.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'Elite is not “Pro plus marketing.” It adds carcass assist, Auto Finish, Auto Stamina, Appearance Changer and faster patch priority. Buy it when those extras change how you play — not because the badge looks better.' },
      { type: 'h2', text: 'Stay on Pro if…' },
      { type: 'p', text: 'You mainly want Bite Assist and ESP. Pro already covers Official hunting for most players — see [Lite vs Pro](/blog/theisle-lite-vs-pro/) and the [Pro page](/products/theisle-cheats/pro/).' },
      { type: 'h2', text: 'Upgrade to Elite if…' },
      {
        type: 'ul',
        items: [
          'You want carcass assist and finish tools',
          'You need local Appearance Changer previews',
          'You value priority loader updates after patches',
          'Slots are open on the status banner',
        ],
      },
      { type: 'h2', text: 'Discipline required' },
      { type: 'p', text: 'Elite power looks obvious if you max every slider. Start with portal conservative presets, test in Community, then scale. Availability and checkout notes are on the [Elite product page](/products/theisle-cheats/elite/).' },
      { type: 'h2', text: 'Cosmetics side path' },
      { type: 'p', text: 'If you only want skins, Unlock Skins may be enough — read [Appearance Changer guide](/blog/theisle-appearance-changer-guide/).' },
      {
        type: 'cta',
        title: 'Review Elite features',
        text: 'Open Elite for the full module list and live slot status.',
        href: '/products/theisle-cheats/elite/',
      },
    ],
  },
  'theisle-appearance-changer-guide': {
    title: 'The Isle Appearance Changer Guide: Local Skins and Patterns',
    desc: 'How The Isle Appearance Changer / Unlock Skins works — local skin and pattern previews on your client without changing Steam purchases.',
    readTime: '6 min read',
    body: [
      { type: 'p', text: 'Appearance Changer previews dinosaur skins and patterns on your client. It does not rewrite your Steam inventory or store purchases. Use it for loadout flair and screenshots — not as a market unlock.' },
      { type: 'h2', text: 'Where it ships' },
      { type: 'p', text: 'Elite includes Appearance Changer. The standalone [Unlock Skins](/products/theisle-cheats/unlock-skins/) utility covers cosmetics without the full Elite combat suite.' },
      { type: 'h2', text: 'What you can preview' },
      { type: 'p', text: 'Skins, patterns and favorite loadouts export locally. Effects stay on your display. Teammates and deathcams follow server rules — do not expect everyone else to see your preview.' },
      { type: 'h2', text: 'Stream caution' },
      { type: 'p', text: 'Cosmetic paths can differ from ESP stream-proof. Test capture separately using [stream-proof setup](/blog/theisle-stream-proof-setup/).' },
      { type: 'h2', text: 'Who should buy standalone' },
      { type: 'p', text: 'Buy Unlock Skins if you only want cosmetics. Buy [Elite](/products/theisle-cheats/elite/) if you also need carcass assist and full combat extras.' },
      {
        type: 'cta',
        title: 'Browse Unlock Skins',
        text: 'Open the Appearance Changer utility page for features and checkout.',
        href: '/products/theisle-cheats/unlock-skins/',
      },
    ],
  },
  'eac-patch-day-checklist': {
    title: 'EAC Patch Day Checklist for The Isle Cheats',
    desc: 'Patch-day checklist for The Isle cheats — status banner, loader update, practice verify, then Official queue after EAC or game updates.',
    readTime: '6 min read',
    body: [
      { type: 'p', text: 'Patch day is when outdated loaders get people banned. Follow this order every The Isle or Easy Anti-Cheat update before you touch Official.' },
      { type: 'h2', text: '1 — Read status' },
      { type: 'p', text: 'Check theisle-cheats.com banner and Discord #status. If the build shows updating or offline, wait. Do not “test anyway.”' },
      { type: 'h2', text: '2 — Update the loader' },
      { type: 'p', text: 'Download the latest portal build. Delete or archive the old folder so you cannot launch a stale exe by habit.' },
      { type: 'h2', text: '3 — Soft presets only' },
      { type: 'p', text: 'Load Official or Community conservative presets. Max sliders from last week are not a patch-day plan.' },
      { type: 'h2', text: '4 — Practice verify' },
      { type: 'p', text: 'Run a short Community or practice session. Confirm ESP and bite assist still behave. Only then queue Official.' },
      { type: 'h2', text: '5 — If something breaks' },
      { type: 'p', text: 'Stop. Re-read status. For verification errors see [EAC unable to verify](/blog/eac-bypass-theisle-guide/). For hardware bans see [HWID after ban](/blog/theisle-hwid-spoofer-after-ban/).' },
      {
        type: 'cta',
        title: 'Check live status',
        text: 'Open the product hub and confirm the build is online before any patch-day session.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'eac-bypass-theisle-guide': {
    title: 'EAC Unable to Verify The Isle: Fixes and When UGC Helps',
    desc: 'Fix EAC unable-to-verify errors on The Isle — file integrity, clean launches, and when UGC appeal tools help versus when they do not.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: '“Unable to verify” is usually a client or anti-cheat handshake problem first — not a reason to spam spoofers. Fix the game path before you buy utilities.' },
      { type: 'h2', text: 'Basic fixes' },
      {
        type: 'ul',
        items: [
          'Verify Steam game files',
          'Launch The Isle once with no third-party tools',
          'Update GPU drivers and disable conflicting overlays temporarily',
          'Reboot after any HWID or network change',
        ],
      },
      { type: 'h2', text: 'Do not launch cheats mid-error' },
      { type: 'p', text: 'If EAC cannot verify, stop the loader. Adding more tools during a broken handshake creates worse logs. Return only after a clean vanilla launch succeeds.' },
      { type: 'h2', text: 'When UGC helps' },
      { type: 'p', text: 'UGC organizes ban appeal evidence and follow-ups. It does not magically reverse every EAC decision. See [UGC](/products/theisle-cheats/ugc/) when you have a case to document.' },
      { type: 'h2', text: 'When HWID enters' },
      { type: 'p', text: 'Hardware flags survive account swaps. Read [HWID spoofer vs new account](/blog/theisle-hwid-spoofer-after-ban/) before you buy the spoofer.' },
      {
        type: 'cta',
        title: 'UGC appeal tools',
        text: 'Open UGC if you need structured appeal workflows after verification and ban issues.',
        href: '/products/theisle-cheats/ugc/',
      },
    ],
  },
  'theisle-external-cheat-guide': {
    title: 'The Isle External Cheat Guide: Loaders, Privacy and Updates',
    desc: 'Why external The Isle cheats matter — how the Windows loader works, why private builds beat random free packs, and what to verify before launch.',
    readTime: '7 min read',
    body: [
      { type: 'p', text: 'External the isle cheats run through a Windows loader outside the game process. You authenticate, the loader updates modules, then overlays appear in EVRIMA or Legacy. This guide explains the model — not every slider.' },
      { type: 'h2', text: 'External vs random free packs' },
      { type: 'p', text: 'Private builds ship per-user keys, portal delivery and post-patch updates. Random Discord zips skip that loop and often steal accounts. Always download from your checkout portal only.' },
      { type: 'h2', text: 'What the loader does' },
      { type: 'p', text: 'It checks license status, pulls the current module set and applies stream-proof options when enabled. You still choose Lite vision, Pro bite assist or Elite extras — see [features guide](/blog/theisle-cheats-features-guide/).' },
      { type: 'h2', text: 'Update discipline' },
      { type: 'p', text: 'External tools break when The Isle or EAC changes. Treat the [patch-day checklist](/blog/eac-patch-day-checklist/) as mandatory, not optional.' },
      { type: 'h2', text: 'Who this path is for' },
      { type: 'p', text: 'PC Steam players who accept ban risk and want maintained ESP or bite assist. Console is out of scope. Start with [how to buy](/blog/how-to-buy-theisle-cheats-2026/) if you are new.' },
      {
        type: 'cta',
        title: 'Browse private tiers',
        text: 'Compare Lite, Pro and Elite on the product hub before checkout.',
        href: '/products/theisle-cheats/',
      },
    ],
  },
  'theisle-stream-proof-setup': {
    title: 'Stream-Proof The Isle Cheat Overlay Setup for OBS',
    desc: 'Hide The Isle ESP and bite assist from OBS and Game Bar — stream-proof test workflow so your monitor shows overlays and capture stays clean.',
    readTime: '6 min read',
    body: [
      { type: 'p', text: 'Stream-proof mode shows ESP and Bite Assist on your monitor while OBS, Game Bar or a capture card records a clean game feed. Test every loader update — do not assume last month’s setting still holds.' },
      { type: 'h2', text: 'Enable per module' },
      { type: 'p', text: 'Turn stream-proof on for ESP, radar and assist separately if the portal allows. Some cosmetic previews need a separate check — see [Appearance Changer](/blog/theisle-appearance-changer-guide/).' },
      { type: 'h2', text: 'OBS test workflow' },
      {
        type: 'ul',
        items: [
          'Start game capture or window capture',
          'Enable a bright ESP box on your screen',
          'Confirm the OBS preview stays clean',
          'Record ten seconds and review the file, not only the preview',
        ],
      },
      { type: 'h2', text: 'Discord and Game Bar' },
      { type: 'p', text: 'Test Discord screen share and Windows Game Bar clips the same way. If either leaks overlays, retoggle stream-proof or switch capture method.' },
      { type: 'h2', text: 'Where it ships' },
      { type: 'p', text: 'Stream-proof is part of the Lite vision stack and carries through Pro and Elite. Start on [Lite](/products/theisle-cheats/lite/) if you only need ESP for content.' },
      {
        type: 'cta',
        title: 'Get stream-proof with Lite',
        text: 'Lite includes ESP, radar and stream-proof overlays for creators who still want vision tools.',
        href: '/products/theisle-cheats/lite/',
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

  let start = -1;
  for (let i = slugIdx; i >= 0; i--) {
    if (source.startsWith('\n  {', i) || source.startsWith('  {', i)) {
      const nextPeer = source.indexOf('\n  {', i + 4);
      if (nextPeer === -1 || slugIdx < nextPeer) {
        start = source.startsWith('\n  {', i) ? i + 1 : i;
        break;
      }
    }
  }
  if (start < 0) start = source.lastIndexOf('{', slugIdx);

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
