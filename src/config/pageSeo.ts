/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy The Isle Cheats | ESP, Radar & Survival Tools',
    description:
      'Buy The Isle cheats for PC — player ESP, nest ESP, radar, carcass ESP and appearance changer. Updated after every Easy Anti-Cheat patch.',
  },
  '/products/theisle-cheats/': {
    title: 'Buy The Isle Cheats | Lite, Pro, Elite & Utilities',
    description:
      'Shop The Isle cheats for PC: Lite ESP & radar, Pro bite assist, Elite full suite, HWID spoofer, UGC and Appearance Changer.',
  },
  '/products/theisle-cheats/lite/': {
    title: 'Buy The Isle Lite Cheats | ESP Wallhack & Radar',
    description:
      'Buy The Isle Lite cheats with player ESP, radar, nest and carcass labels and stream-proof overlays for EVRIMA and Legacy.',
  },
  '/products/theisle-cheats/pro/': {
    title: 'Buy The Isle Pro Cheats | Bite Assist + ESP',
    description:
      'Buy The Isle Pro cheats with Bite Assist, Sticky Target, Hit Priority and full Lite ESP wallhack for Official hunting.',
  },
  '/products/theisle-cheats/elite/': {
    title: 'Buy The Isle Elite Cheats | Bite Assist, ESP & Carcass Assist',
    description:
      'Buy The Isle Elite cheats with bite assist, ESP wallhack, carcass assist, Auto Finish, Appearance Changer and priority EAC patch updates.',
  },
  '/products/theisle-cheats/hwid-spoofer/': {
    title: 'Buy The Isle HWID Spoofer | Hardware Ban Bypass',
    description:
      'Buy a The Isle HWID spoofer for PC hardware bans — disk/MAC tools, compatibility scan and post-spoof checks before you launch cheats again.',
  },
  '/products/theisle-cheats/ugc/': {
    title: 'Buy The Isle UGC | EAC & Steam Ban Appeal Tools',
    description:
      'Buy The Isle UGC (Unban & Governance Control) to organize Steam and EAC ban appeals, dispute workflows and case tracking.',
  },
  '/products/theisle-cheats/unlock-skins/': {
    title: 'Buy The Isle Appearance Changer | Unlock Skins Cosmetics',
    description:
      'Buy The Isle Appearance Changer / Unlock Skins — local skin and pattern previews with your The Isle cheats loadout.',
  },
  '/products/theisle-cheats/utilities/': {
    title: 'Buy The Isle Cheat Utilities | HWID, UGC & Appearance Changer',
    description:
      'Buy The Isle cheat utilities: HWID spoofer after hardware bans, UGC for Steam/EAC appeals, and local Appearance Changer / Unlock Skins.',
  },
  '/blog/': {
    title: 'The Isle Cheat Guides | Bite Assist, ESP Wallhack & EAC',
    description:
      'Read The Isle cheat guides on bite assist setup, ESP wallhack, Lite vs Pro, singleplayer practice and Easy Anti-Cheat patch-day checks.',
  },
  '/forum/': {
    title: 'The Isle Cheats Forum | Bite Assist, ESP & Setup Help',
    description:
      'The Isle cheats forum for bite assist configs, ESP wallhack setup, EAC status and product questions before you buy.',
  },
  '/faq/': {
    title: 'The Isle Cheats FAQ | Bite Assist, ESP, Bans & Setup',
    description:
      'The Isle cheats FAQ — tiers, bite assist, ESP wallhack, radar, HWID spoofer, Appearance Changer, bans and loader setup before checkout.',
  },
  '/terms/': {
    title: 'Terms for The Isle Cheats | License & Refunds',
    description:
      'Terms for buying The Isle cheats on theisle-cheats.com — license use, delivery, refunds and account risk.',
  },
  '/privacy/': {
    title: 'Privacy Policy | The Isle Cheats Shop',
    description:
      'How the The Isle cheats shop at theisle-cheats.com uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About The Isle Cheats | Buy PC Bite Assist & ESP',
    description:
      'About The Isle Cheats — we sell PC The Isle cheats (bite assist, ESP, wallhack), guides and utilities at theisle-cheats.com.',
  },
  '/support/': {
    title: 'The Isle Cheats Support | Loader, HWID & Checkout',
    description:
      'The Isle cheats support for loader setup, bite assist/ESP configs, HWID spoofing and checkout help — 24/7 Discord.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
