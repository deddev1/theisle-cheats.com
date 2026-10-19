/** Checkout destinations keyed by internal product id (no affiliate codes). */
export const CHECKOUT_URLS = {
  theisle: 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats',
  skinChanger: 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats',
  hwidSpoofer: 'https://levocheats.com/go/QRH?to=%2Fhwid-spoofer',
  ugc: 'https://levocheats.com/go/QRH?to=%2Fthe-isle-novaxware-cheats',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/theisle', CHECKOUT_URLS.theisle],
  ['/go/theisle/', CHECKOUT_URLS.theisle],
  ['/go/fortnite', CHECKOUT_URLS.theisle],
  ['/go/fortnite/', CHECKOUT_URLS.theisle],
  ['/go/skin-changer', CHECKOUT_URLS.skinChanger],
  ['/go/skin-changer/', CHECKOUT_URLS.skinChanger],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
