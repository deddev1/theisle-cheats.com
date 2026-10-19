/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/theisle-cheats/'],
  ['/cheats/', '/products/theisle-cheats/'],
  ['/cheats/lite', '/products/theisle-cheats/lite/'],
  ['/cheats/lite/', '/products/theisle-cheats/lite/'],
  ['/cheats/pro', '/products/theisle-cheats/pro/'],
  ['/cheats/pro/', '/products/theisle-cheats/pro/'],
  ['/cheats/elite', '/products/theisle-cheats/elite/'],
  ['/cheats/elite/', '/products/theisle-cheats/elite/'],
  ['/cheats/compare', '/blog/theisle-lite-vs-pro/'],
  ['/cheats/compare/', '/blog/theisle-lite-vs-pro/'],
  ['/products/theisle-cheats/utilities', '/products/theisle-cheats/utilities/'],
  ['/products/theisle-cheats', '/products/theisle-cheats/'],
  ['/products/theisle-cheats/account-recovery', '/products/theisle-cheats/ugc/'],
  ['/products/theisle-cheats/account-recovery/', '/products/theisle-cheats/ugc/'],
  ['/products/dota-2-cheats', '/products/theisle-cheats/'],
  ['/products/dota-2-cheats/', '/products/theisle-cheats/'],
  ['/products/dota-2-cheats/elite', '/products/theisle-cheats/elite/'],
  ['/products/dota-2-cheats/elite/', '/products/theisle-cheats/elite/'],
  ['/products/dota-2-cheats/utilities', '/products/theisle-cheats/utilities/'],
  ['/products/dota-2-cheats/utilities/', '/products/theisle-cheats/utilities/'],
  ['/blog/theisle-aimbot-ranked-guide', '/blog/theisle-bite-assist-official/'],
  ['/blog/theisle-aimbot-ranked-guide/', '/blog/theisle-bite-assist-official/'],
  ['/blog/theisle-aimbot-combat-guide', '/blog/theisle-bite-assist-combat/'],
  ['/blog/theisle-aimbot-combat-guide/', '/blog/theisle-bite-assist-combat/'],
  ['/blog/theisle-skin-changer-guide', '/blog/theisle-appearance-changer-guide/'],
  ['/blog/theisle-skin-changer-guide/', '/blog/theisle-appearance-changer-guide/'],
  ['/blog/theisle-cheat-codes-guide', '/blog/theisle-practice-before-official/'],
  ['/blog/theisle-cheat-codes-guide/', '/blog/theisle-practice-before-official/'],
  ['/blog/how-to-use-theisle-cheat-codes', '/blog/theisle-practice-safely/'],
  ['/blog/how-to-use-theisle-cheat-codes/', '/blog/theisle-practice-safely/'],
  ['/blog/theisle-console-cheats-tips', '/blog/theisle-practice-bite-assist-esp/'],
  ['/blog/theisle-console-cheats-tips/', '/blog/theisle-practice-bite-assist-esp/'],
  ['/blog/theisle-console-commands-cheats', '/blog/theisle-practice-vs-official/'],
  ['/blog/theisle-console-commands-cheats/', '/blog/theisle-practice-vs-official/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
