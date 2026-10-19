export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-theisle-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of player, nest, carcass, and food information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'The Isle ESP wallhack setup guide', sourcePath: '/blog/theisle-esp-wallhack-setup/',
    answer: 'The guide covers player ESP, nest and carcass markers, food labels, and distance readouts. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a pack fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'The Isle ESP wallhack setup guide', sourcePath: '/blog/theisle-esp-wallhack-setup/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a practice lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What radar size settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The radar guide focuses on a mini-map size that improves nest context without covering the fight.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'The Isle radar hack guide', sourcePath: '/blog/theisle-radar-hack-guide/',
    answer: 'There is no single ideal radar size for every player. The guide recommends adjusting gradually and checking that you can still track your dinosaur, bite range, and nearby packs.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider radar view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new radar size.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect player bite assist?', upvotes: 32,
    excerpt: 'A practical question about timing, bite readability, and why the bite assist guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'The Isle bite assist for Official play', sourcePath: '/blog/theisle-bite-assist-official/',
    answer: 'Delay settings control the spacing between automated actions. The guide recommends starting with slower timings and testing them in a practice setting before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice an bite assist?', upvotes: 29,
    excerpt: 'Use a repeatable species setup, learn the bite sequence, and check timing in a controlled practice session.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'The Isle bite assist combat guide', sourcePath: '/blog/theisle-bite-assist-combat/',
    answer: 'Choose one species profile to practice at a time. The guide walks through carnivore and herbivore examples and explains Sticky Target and Hit Priority.',
    detail: 'A Community or practice session lets you repeat the sequence without Official pressure.',
    tip: 'Learn the manual bite timing first; that makes mistimed assist much easier to spot.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'The Isle Elite tier guide', sourcePath: '/blog/theisle-elite-tier-guide/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Carcass Assist, Auto Finish, Auto Stamina, and Appearance Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on awareness features, while Pro adds Bite Assist tools; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'The Isle Lite vs Pro: which tier fits you', sourcePath: '/blog/theisle-lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as ESP, nest and carcass information, and radar. Pro adds Bite Assist automation features on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want Bite Assist modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Appearance Changer utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'The Isle Appearance Changer guide', sourcePath: '/blog/theisle-appearance-changer-guide/',
    answer: 'The guide describes Appearance Changer as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-eac-cannot-verify', title: 'What should I do if EAC cannot verify my The Isle install?', upvotes: 24,
    excerpt: 'Start with Steam file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Easy Anti-Cheat unable to verify The Isle', sourcePath: '/blog/eac-bypass-theisle-guide/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify The Isle files through Steam.',
    detail: 'It also recommends fully exiting the Steam, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'The Isle external cheat guide', sourcePath: '/blog/theisle-external-cheat-guide/',
    answer: 'The article uses “external” to describe software that runs separately from the The Isle process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever The Isle receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for The Isle', sourcePath: '/blog/theisle-stream-proof-setup/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'The Isle HWID spoofer after ban', sourcePath: '/blog/theisle-hwid-spoofer-after-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'The Isle cheats features guide', sourcePath: '/blog/theisle-cheats-features-guide/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-theisle-2-product-tier', title: 'How do I choose the right The Isle product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy The Isle cheats in 2026', sourcePath: '/blog/how-to-buy-theisle-cheats-2026/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-custom-lobby-cheat-codes-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can practice lobby tools work on Official matchmaking?',
    excerpt: 'Quick answer: practice sessions never become Official features. Private tiers are a separate product path.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'The Isle practice checklist before Official', sourcePath: '/blog/theisle-practice-before-official/',
    body: ['No. Practice sessions do not carry into Official matchmaking or Legacy.', 'Use singleplayer or Community to learn bite assist smoothness and ESP ranges. The guide explains practice drills versus private the isle cheats.'],
    comments: [
      { author: 'mid_or_feed', age: '1 hour ago', score: 24, body: 'Correct: load a practice session before touching Official presets.' },
      { author: 'ancient_archivist', age: '48 min. ago', score: 11, body: 'The guide covers carnivore and herbivore drills. Keep Official presets conservative after practice.' },
      { author: 'push_first', age: '35 min. ago', score: 8, body: 'Useful distinction. Practice tools are not Official features.' },
    ],
  },
  {
    slug: 'how-to-enable-the-theisle-2-console', category: 'General', categoryTone: 'purple',
    title: 'How do I practice without launching Official modules?',
    excerpt: 'Stay in Community or singleplayer for drills. Enable private modules only after status is online — from the practice safely guide.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'Practice The Isle cheats safely', sourcePath: '/blog/theisle-practice-safely/',
    body: ['Use Community or singleplayer for drills. Do not launch private loaders while status shows updating. Read the safety guide before Official.', 'If verification fails, fix the Steam client first — do not stack spoofers during a broken handshake.'],
    comments: [
      { author: 'pos4_roamer', age: '3 hours ago', score: 17, body: 'Keep a Practice Soft profile separate from Official presets.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Never launch max-slider exports from random Discord files.' },
    ],
  },
  {
    slug: 'practice-theisle-high-ground-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to practice nest sight lines?',
    excerpt: 'Use singleplayer or Community with ESP to study nest sight lines, then fight with overlays minimized.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'Tune Bite Assist and ESP in practice', sourcePath: '/blog/theisle-practice-bite-assist-esp/',
    body: ['Practice in singleplayer or a practice lobby. Enable ESP boxes briefly to inspect ridge and nest angles, then fight with overlays minimized.', 'Repeat the same nest path a few times so sight lines stick without waiting for a full Official match.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I peek with ESP on, then disable boxes and re-check the same nest angle.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Replaying the same nest path in practice beats learning only on Official.' },
    ],
  },
  {
    slug: 'what-to-check-after-a-theisle-2-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check after a The Isle or EAC patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating the loader, and verifying in practice before Official.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist', sourcePath: '/blog/eac-patch-day-checklist/',
    body: ['Check the current build/status notice first. After a game update, wait for a compatible build, update the loader, then verify the setup in a Community or Legacy session before returning to Official.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before Official is the part I used to skip. Now I check the build note and run a quick practice session.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'theisle-2-lite-or-pro-hero-scripts', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes Bite Assist?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on vision tools; Pro adds Bite Assist modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'The Isle Lite vs Pro: feature comparison', sourcePath: '/blog/theisle-lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on map awareness features such as player ESP, nest and carcass information, radar, and stream-proof options. Pro includes those features and adds Bite Assist, Smooth Bite, Sticky Target, Hit Priority, and Hotkey macros.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'how-to-learn-weapon-aim-in-creative', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I practice bite timing without waiting for Official?',
    excerpt: 'Create a singleplayer or Community session and drill carnivore and herbivore profiles with repeatable resets.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'The Isle practice checklist before Official', sourcePath: '/blog/theisle-practice-before-official/',
    body: ['Create a singleplayer island or practice lobby. Practice one species profile at a time—carnivore, then herbivore, then apex—and reset between attempts.', 'For realistic timing, use your Official smoothness values in singleplayer before enabling bite assist in live games. The linked guide covers the full practice workflow.'],
    comments: [
      { author: 'mid_or_feed', age: '20 hours ago', score: 10, body: 'Start with a practice target and repeat the same chase until tracking feels automatic.' },
      { author: 'ancient_archivist', age: '18 hours ago', score: 5, body: 'Keep Official presets conservative—practice can hide how snappy assist looks in deathcams.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
