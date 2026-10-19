import fs from 'node:fs';

const path = 'src/data/forum.ts';
let t = fs.readFileSync(path, 'utf8');

const reps = [
  ['player, chest, loot, and smoke information', 'player, nest, carcass, and food information'],
  ['player ESP, chest and reboot markers, loot information, smoke alerts, and last-seen positions', 'player ESP, nest and carcass markers, food labels, and distance readouts'],
  ['during a team fight', 'during a pack fight'],
  ['spell ranges, and nearby fights', 'bite range, and nearby packs'],
  ['wider view and return to familiar framing', 'wider radar view and return to familiar framing'],
  ['camera distance', 'radar size'],
  ['camera zoom settings', 'radar size settings'],
  ['The zoom guide focuses on finding a view that improves map context without making your player hard to control.', 'The radar guide focuses on a mini-map size that improves nest context without covering the fight.'],
  ['There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your player, bite range, and nearby packs.', 'There is no single ideal radar size for every player. The guide recommends adjusting gradually and checking that you can still track your dinosaur, bite range, and nearby packs.'],
  ['timing, combo readability', 'timing, bite readability'],
  ['Use a repeatable player setup, learn the sequence, and check each spell and item timing in a controlled lobby.', 'Use a repeatable species setup, learn the bite sequence, and check timing in a controlled practice session.'],
  ['The Isle bite assist player bite assist', 'The Isle bite assist combat guide'],
  ['Choose one player and one combo to practice at a time. The guide walks through example sequences and explains how target selection and ability order fit together.', 'Choose one species profile to practice at a time. The guide walks through carnivore and herbivore examples and explains Sticky Target and Hit Priority.'],
  ['A custom lobby lets you repeat the sequence and see which steps need adjustment without the pressure of a live match.', 'A Community or practice session lets you repeat the sequence without Official pressure.'],
  ['Learn the manual sequence first; that makes it much easier to spot when a configuration is mistimed.', 'Learn the manual bite timing first; that makes mistimed assist much easier to spot.'],
  ['while Pro adds player script tools', 'while Pro adds Bite Assist tools'],
  ['and zoom. Pro adds bite assist automation features', 'and radar. Pro adds Bite Assist automation features'],
  ['or also want the additional script modules', 'or also want Bite Assist modules'],
  ['Can I use The Isle cheat codes on Official matchmaking?', 'Can practice lobby tools work on Official matchmaking?'],
  ['Quick answer from the practice lobby guide: built-in lobby commands only work in custom matches with cheats enabled.', 'Quick answer: practice sessions never become Official features. Private tiers are a separate product path.'],
  ["sourceTitle: 'The Isle cheat codes guide: console commands for practice lobbies'", "sourceTitle: 'The Isle practice checklist before Official'"],
  ["No. practice islands and bot lobbies are for practice only. They do not carry into Official matchmaking or Legacy.", "No. Practice sessions do not carry into Official matchmaking or Legacy."],
  ['Use singleplayer to learn bite assist smoothness, ESP ranges, and loadouts. The guide also explains the difference between practice drills and third-party the isle cheats.', 'Use singleplayer or Community to learn bite assist smoothness and ESP ranges. The guide explains practice drills versus private the isle cheats.'],
  ["body: 'Correct: load a singleplayer aim map or practice lobby before touching Official presets.'", "body: 'Correct: load a practice session before touching Official presets.'"],
  ["body: 'Useful distinction. singleplayer practice tools are not ranked features.'", "body: 'Useful distinction. Practice tools are not Official features.'"],
  ['How do I turn on the The Isle developer console?', 'How do I practice without launching Official modules?'],
  ['Open Settings → Options → Advanced and enable the console. Here is the quick setup from our walkthrough.', 'Stay in Community or singleplayer for drills. Enable private modules only after status is online — from the practice safely guide.'],
  ["sourceTitle: 'How to use cheat codes in The Isle'", "sourceTitle: 'Practice The Isle cheats safely'"],
  ["body: ['Open Settings, choose Options, then open Advanced Options and enable the developer console. In a custom lobby, press the console key (usually tilde) and enter the command. You also need the host to enable cheats in the lobby settings.', 'If a command does nothing, first confirm cheats are enabled for that lobby and check the command syntax.']", "body: ['Use Community or singleplayer for drills. Do not launch private loaders while status shows updating. Read the safety guide before Official.', 'If verification fails, fix the Steam client first — do not stack spoofers during a broken handshake.']"],
  ["body: 'You can also bind the console key in the hotkey settings if tilde is unavailable on your keyboard layout.'", "body: 'Keep a Practice Soft profile separate from Official presets.'"],
  ["body: 'Commands need the right lobby permissions; spectators may not be able to use economy commands.'", "body: 'Never launch max-slider exports from random Discord files.'"],
  ['What is the safest way to practice high-ground spots?', 'What is the safest way to practice nest sight lines?'],
  ['Use singleplayer or a practice lobby with ESP to study sight lines, then fight without staring at overlays.', 'Use singleplayer or Community with ESP to study nest sight lines, then fight with overlays minimized.'],
  ["sourceTitle: 'The Isle singleplayer tips for bite assist and ESP practice'", "sourceTitle: 'Tune Bite Assist and ESP in practice'"],
  ['Enable ESP boxes briefly to inspect high-ground angles and nest positions, then fight with overlays minimized.', 'Enable ESP boxes briefly to inspect ridge and nest angles, then fight with overlays minimized.'],
  ['Repeat the same POI clear a few times so sight lines stick without waiting for a full Official match.', 'Repeat the same nest path a few times so sight lines stick without waiting for a full Official match.'],
  ["body: 'I peek with ESP on, then disable boxes and re-check the same angle. Helps for high-ground coverage.'", "body: 'I peek with ESP on, then disable boxes and re-check the same nest angle.'"],
  ["body: 'Replaying the same POI path in singleplayer beats learning only on Official.'", "body: 'Replaying the same nest path in practice beats learning only on Official.'"],
  ['What should I check before playing after a The Isle patch?', 'What should I check after a The Isle or EAC patch?'],
  ['checking build status, updating, and testing in a practice lobby before queueing.', 'checking build status, updating the loader, and verifying in practice before Official.'],
  ['then verify the setup in a bot or Legacy session before returning to ranked.', 'then verify the setup in a Community or Legacy session before returning to Official.'],
  ["body: 'Testing after the update before ranked is the part I used to skip. Now I check the build note and run a quick practice lobby.'", "body: 'Testing after the update before Official is the part I used to skip. Now I check the build note and run a quick practice session.'"],
  ['Lite or Pro: which tier includes player bite assist?', 'Lite or Pro: which tier includes Bite Assist?'],
  ['Lite focuses on vision tools; Pro adds script modules.', 'Lite focuses on vision tools; Pro adds Bite Assist modules.'],
  ['zoom, and stream-proof options. Pro includes those features and adds player bite assist such as Bite Assist, Smooth Bite, Sticky Target, Hit Priority, and Hotkey macros.', 'radar, and stream-proof options. Pro includes those features and adds Bite Assist, Smooth Bite, Sticky Target, Hit Priority, and Hotkey macros.'],
  ['How can I practice weapon aim without waiting for a real match?', 'How can I practice bite timing without waiting for Official?'],
  ['Create a singleplayer island or practice lobby and drill carnivore and herbivore profiles with repeatable resets.', 'Create a singleplayer or Community session and drill carnivore and herbivore profiles with repeatable resets.'],
  ["sourceTitle: 'The Isle singleplayer practice guide: aim drills before ranked'", "sourceTitle: 'The Isle practice checklist before Official'"],
  ["body: 'Start with a bot target and repeat the same spray until the tracking feels automatic.'", "body: 'Start with a practice target and repeat the same chase until tracking feels automatic.'"],
  ["body: 'Keep Official presets conservative—Singleplayer can hide how snappy your aim looks in replays.'", "body: 'Keep Official presets conservative—practice can hide how snappy assist looks in deathcams.'"],
];

for (const [a, b] of reps) {
  if (!t.includes(a)) {
    // non-fatal — some strings may already be partially cleaned
    continue;
  }
  t = t.split(a).join(b);
}

fs.writeFileSync(path, t);
console.log('forum cleanup written');
