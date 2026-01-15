// Lemmatize verbs to their base form
const IRREGULAR_VERBS: Record<string, string> = {
  was: "be",
  were: "be",
  been: "be",
  being: "be",
  am: "be",
  is: "be",
  are: "be",
  had: "have",
  has: "have",
  having: "have",
  did: "do",
  does: "do",
  doing: "do",
  done: "do",
  went: "go",
  gone: "go",
  going: "go",
  got: "get",
  gotten: "get",
  getting: "get",
  made: "make",
  making: "make",
  took: "take",
  taken: "take",
  taking: "take",
  came: "come",
  coming: "come",
  saw: "see",
  seen: "see",
  seeing: "see",
  knew: "know",
  known: "know",
  knowing: "know",
  gave: "give",
  given: "give",
  giving: "give",
  found: "find",
  finding: "find",
  told: "tell",
  telling: "tell",
  felt: "feel",
  feeling: "feel",
  became: "become",
  becoming: "become",
  left: "leave",
  leaving: "leave",
  brought: "bring",
  bringing: "bring",
  began: "begin",
  begun: "begin",
  beginning: "begin",
  kept: "keep",
  keeping: "keep",
  held: "hold",
  holding: "hold",
  wrote: "write",
  written: "write",
  writing: "write",
  stood: "stand",
  standing: "stand",
  heard: "hear",
  hearing: "hear",
  let: "let",
  letting: "let",
  meant: "mean",
  meaning: "mean",
  set: "set",
  setting: "set",
  met: "meet",
  meeting: "meet",
  ran: "run",
  running: "run",
  paid: "pay",
  paying: "pay",
  sat: "sit",
  sitting: "sit",
  spoke: "speak",
  spoken: "speak",
  speaking: "speak",
  lay: "lie",
  lain: "lie",
  lying: "lie",
  led: "lead",
  leading: "lead",
  read: "read",
  reading: "read",
  grew: "grow",
  grown: "grow",
  growing: "grow",
  fell: "fall",
  fallen: "fall",
  falling: "fall",
  sent: "send",
  sending: "send",
  built: "build",
  building: "build",
  understood: "understand",
  understanding: "understand",
  drew: "draw",
  drawn: "draw",
  drawing: "draw",
  bought: "buy",
  buying: "buy",
  spent: "spend",
  spending: "spend",
  cut: "cut",
  cutting: "cut",
  arose: "arise",
  arisen: "arise",
  arising: "arise",
  awoke: "awake",
  awoken: "awake",
  awaking: "awake",
  bore: "bear",
  born: "bear",
  bearing: "bear",
  beat: "beat",
  beaten: "beat",
  beating: "beat",
  bent: "bend",
  bending: "bend",
  bit: "bite",
  bitten: "bite",
  biting: "bite",
  bled: "bleed",
  bleeding: "bleed",
  blew: "blow",
  blown: "blow",
  blowing: "blow",
  broke: "break",
  broken: "break",
  breaking: "break",
  bred: "breed",
  breeding: "breed",
  burnt: "burn",
  burned: "burn",
  burning: "burn",
  burst: "burst",
  bursting: "burst",
  caught: "catch",
  catching: "catch",
  chose: "choose",
  chosen: "choose",
  choosing: "choose",
  clung: "cling",
  clinging: "cling",
  crept: "creep",
  creeping: "creep",
  dealt: "deal",
  dealing: "deal",
  dug: "dig",
  digging: "dig",
  dove: "dive",
  diving: "dive",
  drank: "drink",
  drunk: "drink",
  drinking: "drink",
  drove: "drive",
  driven: "drive",
  driving: "drive",
  ate: "eat",
  eaten: "eat",
  eating: "eat",
  fed: "feed",
  feeding: "feed",
  fought: "fight",
  fighting: "fight",
  fled: "flee",
  fleeing: "flee",
  flew: "fly",
  flown: "fly",
  flying: "fly",
  forbade: "forbid",
  forbidden: "forbid",
  forbidding: "forbid",
  forgot: "forget",
  forgotten: "forget",
  forgetting: "forget",
  forgave: "forgive",
  forgiven: "forgive",
  forgiving: "forgive",
  froze: "freeze",
  frozen: "freeze",
  freezing: "freeze",
  hid: "hide",
  hidden: "hide",
  hiding: "hide",
  hit: "hit",
  hitting: "hit",
  hung: "hang",
  hanging: "hang",
  hurt: "hurt",
  hurting: "hurt",
  knelt: "kneel",
  kneeling: "kneel",
  laid: "lay",
  laying: "lay",
  learnt: "learn",
  learned: "learn",
  learning: "learn",
  lit: "light",
  lighting: "light",
  lost: "lose",
  losing: "lose",
  rode: "ride",
  ridden: "ride",
  riding: "ride",
  rang: "ring",
  rung: "ring",
  ringing: "ring",
  rose: "rise",
  risen: "rise",
  rising: "rise",
  sang: "sing",
  sung: "sing",
  singing: "sing",
  sank: "sink",
  sunk: "sink",
  sinking: "sink",
  slept: "sleep",
  sleeping: "sleep",
  slid: "slide",
  sliding: "slide",
  slung: "sling",
  slinging: "sling",
  slit: "slit",
  slitting: "slit",
  smelt: "smell",
  smelling: "smell",
  sowed: "sow",
  sown: "sow",
  sowing: "sow",
  sped: "speed",
  speeding: "speed",
  spelt: "spell",
  spelled: "spell",
  spelling: "spell",
  spilt: "spill",
  spilled: "spill",
  spilling: "spill",
  spun: "spin",
  spinning: "spin",
  spat: "spit",
  spitting: "spit",
  split: "split",
  splitting: "split",
  spread: "spread",
  spreading: "spread",
  sprang: "spring",
  sprung: "spring",
  springing: "spring",
  stole: "steal",
  stolen: "steal",
  stealing: "steal",
  stuck: "stick",
  sticking: "stick",
  stung: "sting",
  stinging: "sting",
  stank: "stink",
  stunk: "stink",
  stinking: "stink",
  strode: "stride",
  striding: "stride",
  struck: "strike",
  stricken: "strike",
  striking: "strike",
  strove: "strive",
  striven: "strive",
  striving: "strive",
  swore: "swear",
  sworn: "swear",
  swearing: "swear",
  swept: "sweep",
  sweeping: "sweep",
  swam: "swim",
  swum: "swim",
  swimming: "swim",
  swung: "swing",
  swinging: "swing",
  taught: "teach",
  teaching: "teach",
  tore: "tear",
  torn: "tear",
  tearing: "tear",
  threw: "throw",
  thrown: "throw",
  throwing: "throw",
  thought: "think",
  thinking: "think",
  trod: "tread",
  trodden: "tread",
  treading: "tread",
  woke: "wake",
  woken: "wake",
  waking: "wake",
  wore: "wear",
  worn: "wear",
  wearing: "wear",
  wove: "weave",
  woven: "weave",
  weaving: "weave",
  wept: "weep",
  weeping: "weep",
  won: "win",
  winning: "win",
  wound: "wind",
  winding: "wind",
  withdrew: "withdraw",
  withdrawn: "withdraw",
  withdrawing: "withdraw",
  wrung: "wring",
  wringing: "wring",
};

function matchCase(original: string, result: string) {
  if (original === original.toUpperCase()) {
    return result.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase()) {
    return result[0].toUpperCase() + result.slice(1);
  }
  return result;
}

export function lemmatize(word: string): string {
  if (!word) return word;

  const lower = word.toLowerCase();

  // Check irregular verbs first
  if (IRREGULAR_VERBS[lower]) {
    return matchCase(word, IRREGULAR_VERBS[lower]);
  }

  let result = lower;

  // Handle -ing forms (running -> run, making -> make, watching -> watch)
  if (lower.endsWith("ing")) {
    const base = lower.slice(0, -3);
    // Double consonant + ing (running -> run, sitting -> sit)
    if (
      base.length >= 2 &&
      base[base.length - 1] === base[base.length - 2] &&
      !"aeiou".includes(base[base.length - 1])
    ) {
      result = base.slice(0, -1);
    }
    // Words ending in consonant clusters (ch, tch, sh, etc.) don't add 'e'
    // watching -> watch, catching -> catch, finishing -> finish
    else if (
      base.endsWith("ch") ||
      base.endsWith("sh") ||
      base.endsWith("tch") ||
      base.endsWith("dge") ||
      base.endsWith("nge")
    ) {
      result = base;
    }
    // Most other -ing forms need 'e' added back (making -> make, taking -> take)
    // But only if base doesn't already end in 'e'
    else if (base.length >= 1 && !base.endsWith("e")) {
      result = base + "e";
    } else {
      result = base;
    }
  }
  // Handle -ed forms (lauded -> laud, wanted -> want, nuanced -> nuance)
  else if (lower.endsWith("ed")) {
    const base = lower.slice(0, -2);
    // Double consonant + ed (stopped -> stop)
    if (
      base.length >= 2 &&
      base[base.length - 1] === base[base.length - 2] &&
      !"aeiou".includes(base[base.length - 1])
    ) {
      result = base.slice(0, -1);
    }
    // -ied -> -y (studied -> study)
    else if (lower.endsWith("ied") && lower.length > 3) {
      result = lower.slice(0, -3) + "y";
    }
    // Just remove -ed, but check if needs 'e' at end
    else {
      // For words ending in consonant + consonant (not doubled), likely needs 'e'
      // Examples: nuanced -> nuance, balanced -> balance, forced -> force
      if (base.length >= 2) {
        const last = base[base.length - 1];
        const secondLast = base[base.length - 2];

        // If ends with 'nc', 'rc', 'lc', 'st', etc. (consonant clusters), add 'e'
        if (
          !"aeiou".includes(last) &&
          !"aeiou".includes(secondLast) &&
          last !== secondLast // not a double consonant
        ) {
          result = base + "e";
        } else {
          result = base;
        }
      } else {
        result = base;
      }
    }
  }
  // Handle -s/-es forms (runs -> run, catches -> catch)
  else if (lower.endsWith("s")) {
    // -ies -> -y (carries -> carry), but NOT for words ending in -vies, -oies, -kies
    if (lower.endsWith("ies") && lower.length > 3) {
      const beforeIes = lower.slice(0, -3);
      // Words ending in v/o/k + -ies (movies, cookies) -> just remove s
      // Words ending in consonant + -ies (carries, berries) -> replace ies with y
      if (
        beforeIes.endsWith("v") ||
        beforeIes.endsWith("o") ||
        beforeIes.endsWith("k")
      ) {
        result = lower.slice(0, -1); // movies -> movie, cookies -> cookie
      } else {
        result = beforeIes + "y"; // carries -> carry
      }
    }
    // -es (catches -> catch, washes -> wash)
    else if (lower.endsWith("es") && lower.length > 2) {
      const base = lower.slice(0, -2);
      // If ends with sh, ch, s, x, z, keep base
      if (
        base.endsWith("sh") ||
        base.endsWith("ch") ||
        base.endsWith("s") ||
        base.endsWith("x") ||
        base.endsWith("z")
      ) {
        result = base;
      }
      // Otherwise remove just 's'
      else {
        result = lower.slice(0, -1);
      }
    }
    // Just -s (runs -> run)
    else if (!lower.endsWith("ss") && lower.length > 1) {
      result = lower.slice(0, -1);
    }
  }

  return matchCase(word, result);
}
