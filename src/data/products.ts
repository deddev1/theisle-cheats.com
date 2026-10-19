import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['theisle-esp-wallhack-setup', 'theisle-lite-vs-pro', 'theisle-radar-hack-guide', 'eac-patch-day-checklist'],
  pro: [
    'theisle-bite-assist-official',
    'theisle-bite-assist-combat',
    'theisle-lite-vs-pro',
    'theisle-stream-proof-setup',
  ],
  elite: [
    'theisle-elite-tier-guide',
    'theisle-cheats-features-guide',
    'theisle-esp-wallhack-setup',
    'eac-patch-day-checklist',
    'how-to-buy-theisle-cheats-2026',
  ],
  'hwid-spoofer': [
    'theisle-hwid-spoofer-after-ban',
    'eac-bypass-theisle-guide',
    'eac-patch-day-checklist',
    'theisle-external-cheat-guide',
  ],
  ugc: [
    'eac-bypass-theisle-guide',
    'theisle-hwid-spoofer-after-ban',
    'how-to-buy-theisle-cheats-2026',
  ],
  'unlock-skins': [
    'theisle-appearance-changer-guide',
    'theisle-cheats-features-guide',
    'theisle-stream-proof-setup',
  ],
};

const productBase = '/products/theisle-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on theisle-cheats.com and Discord #status before purchase—especially after a The Isle or EAC update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite the isle cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, Steam platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a lobby, load presets, then queue Official or Legacy.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'The Isle and EAC receive frequent updates. Confirm module availability on the live status panel at theisle-cheats.com before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in The Isle can violate Steam Subscriber Agreement and lead to EAC bans or account action. You use this software at your own risk. Compatibility and availability can change after game, EAC, or Windows updates without notice.';

const theisleSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Current The Isle client via Steam with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets The Isle published hardware requirements.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  gpMapHack: {
    src: `${gameplay}/theisle-esp-wallhack.png`,
    alt: 'The Isle ESP wallhack with entity menu, snaplines, dinosaur names, growth and food labels through tall grass',
    caption: 'ESP wallhack',
    captionDesc: 'Dinosaur names, growth and food labels through cover.',
  },
  gpScripts: {
    src: `${gameplay}/theisle-aimbot-combat.png`,
    alt: 'The Isle bite assist and skeleton ESP targeting Tyrannosaurus Rexes with health bars and aim reticle in a forest',
    caption: 'Bite Assist',
    captionDesc: 'Bite Assist FOV and skeleton ESP on dinosaurs.',
  },
  gpZoomHack: {
    src: `${gameplay}/theisle-radar-hack.png`,
    alt: 'The Isle radar minimap and world ESP highlighting corpses, fruits, herbs and water with distance markers',
    caption: 'Radar / ESP',
    captionDesc: 'Corpses, fruits, herbs and water on radar ESP.',
  },
  gpSkinChanger: {
    src: `${gameplay}/theisle-skin-changer.png`,
    alt: 'The Isle cheat overlay with ESP boxes and dinosaur stats while hunting in a sunlit forest clearing',
    caption: 'ESP overlay',
    captionDesc: 'ESP boxes and dinosaur stats in a forest clearing.',
  },
  gpAutoKill: {
    src: `${gameplay}/theisle-auto-aim.png`,
    alt: 'The Isle aim assist FOV circle locked on a dinosaur with red skeleton ESP and distance readout',
    caption: 'Aim assist',
    captionDesc: 'FOV circle lock with skeleton ESP and distance.',
  },
  gpFarmBot: {
    src: `${gameplay}/theisle-loot-radar.png`,
    alt: 'The Isle carcass and food ESP labels for coconut, mango, herbs and fresh corpses through grass',
    caption: 'Carcass ESP',
    captionDesc: 'Food and carcass ESP with distance trackers.',
  },
  gpHeroEsp: {
    src: `${gameplay}/theisle-player-esp.png`,
    alt: 'The Isle player ESP showing dinosaur species, weight, growth percent and health through jungle foliage',
    caption: 'Player ESP',
    captionDesc: 'Species, weight, growth and health through foliage.',
  },
  gpThermal: {
    src: `${gameplay}/theisle-thermal-esp.png`,
    alt: 'The Isle night ESP with no-fog view showing dinosaur weight, growth and player names in tall grass',
    caption: 'Night ESP',
    captionDesc: 'No-fog night view with weight, growth and names.',
  },
  gpBuildFight: {
    src: `${gameplay}/theisle-territory-esp.png`,
    alt: 'The Isle territory ESP with snaplines to distant players, plants and food through dense jungle trees',
    caption: 'Territory ESP',
    captionDesc: 'Snaplines to players, plants and food through jungle.',
  },
  gpArena: {
    src: `${gameplay}/theisle-arena-wallhack.png`,
    alt: 'The Isle wallhack ESP with wireframe dinosaurs, vital bars and silent aim reticle on a T-Rex',
    caption: 'Wallhack ESP',
    captionDesc: 'Wireframe dinosaurs, vitals and aim reticle.',
  },
  gpSpawn: {
    src: `${gameplay}/theisle-spawn-island-esp.png`,
    alt: 'The Isle spawn-area ESP with entity toggles for health bars, names, growth and classname labels',
    caption: 'Spawn ESP',
    captionDesc: 'Health, names, growth and classname labels near spawn.',
  },
  gpLongRange: {
    src: `${gameplay}/theisle-long-range-esp.png`,
    alt: 'The Isle long-range ESP snaplines marking players and resources hundreds of meters through the jungle',
    caption: 'Long range ESP',
    captionDesc: 'Long-range players and resources through the jungle.',
  },
  gpAimLock: {
    src: `${gameplay}/theisle-aimbot-lock.png`,
    alt: 'The Isle bite assist lock with FOV circle and ESP tags on nearby dinosaurs and AI creatures',
    caption: 'Bite Assist lock',
    captionDesc: 'Bite Assist lock with FOV circle and ESP tags.',
  },
  gpChams: {
    src: `${gameplay}/theisle-chams-esp.png`,
    alt: 'The Isle chams-style ESP highlighting dinosaurs and AI with weight and growth readouts at night',
    caption: 'Chams ESP',
    captionDesc: 'Chams-style dinosaur and AI highlights at night.',
  },
  gpSquad: {
    src: `${gameplay}/theisle-squad-esp.png`,
    alt: 'The Isle multi-entity ESP with snaplines to players, AI dinosaurs and plants across a jungle clearing',
    caption: 'Multi-entity ESP',
    captionDesc: 'Snaplines to players, AI and plants in a clearing.',
  },
  gpCombat: {
    src: `${gameplay}/theisle-combat-esp.png`,
    alt: 'The Isle combat ESP and aim assist facing multiple Tyrannosaurus with skeleton overlays and vital bars',
    caption: 'Combat ESP',
    captionDesc: 'Combat ESP and aim assist on Tyrannosaurus packs.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'theisle-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'The Isle Lite is built for players who want map awareness first. On Official, knowing dinosaur positions, nest locations and carcass timings wins more fights than raw mechanics—Lite gives you that edge without bite assist automation.',
    },
    { type: 'h2', text: 'Official-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Bite Assist and automation modules entirely. Your gameplay looks natural while ESP, radar and nest labels keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'The Isle Pro is the sweet spot for Official hunters. Bite Assist, Smooth Bite and Sticky Target help you win pack fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Bite Assist + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Bite Assist, Hit Priority, Hotkey macros and FOV/smoothness controls. You see the fight before it starts and win it with bite assist that stays human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'The Isle Elite is the private build for players who want everything—Carcass Assist, Auto Finish, Auto Stamina, Appearance Changer, full ESP wallhack and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in Community sessions, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first Official queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, nest and carcass labels, food markers, radar hack, and stream-safe overlay hiding. Config presets for EVRIMA and Legacy ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare [Lite](/products/theisle-cheats/lite/), [Pro](/products/theisle-cheats/pro/) and [Elite](/products/theisle-cheats/elite/) before checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Bite Assist and automation' },
    {
      type: 'p',
      text: 'Bite Assist, Smooth Bite, Sticky Target with Prediction, Hit Priority and hotkey macros. Smoothness sliders tune bite timing so assist stays natural on Official. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at theisle-cheats.com—enough power for high-pressure Official lobbies without Elite slot limits. Pair with our [bite assist Official guide](/blog/theisle-bite-assist-official/) before your first session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full finish suite' },
    {
      type: 'p',
      text: 'Carcass Assist, Auto Finish, Auto Stamina, Appearance Changer and full ESP wallhack. Use Community testing before Official—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh Steam accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only EAC cases; see [UGC](/products/theisle-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before Official. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for Steam account restrictions, EAC bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some EAC bans cannot be reversed. UGC organizes evidence and follow-ups for Steam / publisher review. Pair with [HWID Spoofer](/products/theisle-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-skins': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players in your lobby see your actual inventory, not preview skins.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Appearance Changer ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpHeroEsp', 'gpLongRange', 'gpSquad'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: theisleSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Skeleton ESP through foliage',
      'Nest & carcass labels',
      'Weight & growth readouts',
      'Mini-radar overlay',
      'Stream-proof overlay mode',
      'Distance readouts',
      'Species name tags',
      'Food & water markers',
      'Radar hack',
      'Legacy preset config',
      'Official preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'The Isle Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, nest markers, carcass labels and radar. No bite assist. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in EVRIMA and Legacy without combat automation. Overlays are updated after The Isle patches.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpCombat'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: theisleSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Bite Assist',
      'Smooth Bite',
      'Sticky Target & Prediction',
      'Hit Priority',
      'Hotkey macros',
      'FOV & smoothness tuning',
      'Per-species bite assist profiles',
      'Pack alert integration',
      'Official-safe default presets',
      'Community test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'The Isle Pro: bite assist plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Bite Assist, Smooth Bite, Sticky Target and hotkey macros. Bite settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for EVRIMA and Legacy. Bone priority and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: theisleSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Carcass Assist',
      'Territory rotation assists',
      'Auto Finish',
      'Auto Stamina',
      'Full ESP wallhack suite',
      'Pack alert system',
      'Visibility detector',
      'Appearance Changer (Unlock Skins)',
      'Priority patch queue',
      'Direct Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'The Isle Elite: full cheat + extras',
      paragraphs: [
        'Elite includes Lite and Pro modules, plus carcass assist, Auto Finish, Auto Stamina, Appearance Changer, full ESP wallhack and faster patch priority.',
        'Slots are limited. Discord support helps you set safer profiles before Official. Check the status banner on theisle-cheats.com before you buy.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpSpawn', 'gpArena', 'gpChams'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching The Isle.',
    limitations:
      'Spoofing does not help account-only EAC cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching The Isle after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for The Isle PC bans',
      paragraphs: [
        'Use the HWID Spoofer when Easy Anti-Cheat flags your PC hardware but the Steam account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only EAC bans. After spoofing, use a safer cheat profile before Official.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent EAC bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on theisle-cheats.com or at checkout on theisle-cheats.com.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for Epic restrictions and EAC bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-skins': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock Skins previews cosmetics locally on your client. Other players in your lobby see your real inventory—not preview skins. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify Epic locker or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: theisleSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Skin & wrap preview',
      'Pickaxe & wrap customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Chest & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Appearance Changer / Unlock Skins',
      paragraphs: [
        'Unlock Skins lets you preview dinosaur skins and patterns on your The Isle client. It does not change your Steam inventory or store purchases.',
        'Only you see the preview skins. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'The Isle Lite' : cheat.name === 'Pro' ? 'The Isle Pro' : 'The Isle Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

const cheatsHubSlides = slide('gpAimLock', 'gpThermal', 'gpArena');

/** One slide per unique gameplay screenshot (no visual repeats). */
export const heroSlides = slide(
  'gpMapHack',
  'gpZoomHack',
  'gpHeroEsp',
  'gpBuildFight',
  'gpScripts',
);

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description: 'The Isle Elite cheats with bite assist and ESP, plus HWID spoofer, UGC recovery and Appearance Changer for PC.',
  buyUrl: checkoutPath('theisle'),
};
