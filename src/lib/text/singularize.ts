const IRREGULAR_PLURALS: Record<string, string> = {
  children: "child",
  people: "person",
  men: "man",
  women: "woman",
  mice: "mouse",
  geese: "goose",
  teeth: "tooth",
  feet: "foot",
  oxen: "ox",
};

// Words that are always plural (pluralia tantum)
const ALWAYS_PLURAL = new Set([
  "pants",
  "trousers",
  "jeans",
  "shorts",
  "glasses",
  "spectacles",
  "goggles",
  "scissors",
  "pliers",
  "tongs",
  "tweezers",
  "binoculars",
  "thanks",
  "clothes",
  "credentials",
  "earnings",
  "goods",
  "premises",
  "riches",
  "stairs",
  "surroundings",
  "belongings",
  // Academic subjects and fields ending in -ics
  "genetics",
  "physics",
  "mathematics",
  "maths",
  "economics",
  "statistics",
  "politics",
  "ethics",
  "linguistics",
  "phonetics",
  "athletics",
  "gymnastics",
  "electronics",
  "mechanics",
  "dynamics",
  "aerodynamics",
  "thermodynamics",
  "acoustics",
  "optics",
  "robotics",
  "bionics",
  "ceramics",
  "classics",
  "graphics",
  "pediatrics",
  "obstetrics",
  "orthopedics",
  "geriatrics",
]);

function matchCase(original: string, result: string) {
  if (original === original.toUpperCase()) {
    return result.toUpperCase();
  }
  if (original[0] === original[0].toUpperCase()) {
    return result[0].toUpperCase() + result.slice(1);
  }
  return result;
}

export function singularize(word: string): string {
  if (!word) return word;

  const lower = word.toLowerCase();
  let result = word;

  // Check if word is always plural (pluralia tantum)
  if (ALWAYS_PLURAL.has(lower)) {
    return word;
  }

  if (IRREGULAR_PLURALS[lower]) {
    result = IRREGULAR_PLURALS[lower];
    return matchCase(word, result);
  }

  if (lower.endsWith("ies")) {
    const beforeIes = lower.slice(0, -3);
    // Words ending in vowel + -ies (movies, cookies) -> just remove s
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
    return matchCase(word, result);
  }

  // -ves → -f/-fe (only for specific noun patterns like knives, lives, wolves)
  // Exclude verbs ending in -ves (like improves, solves, involves)
  // Common f/fe → ves words: knife, life, wife, wolf, half, leaf, shelf, loaf, calf, self, thief, elf
  if (lower.endsWith("ves") && lower.length > 3) {
    const base = lower.slice(0, -3);
    // Only apply if it looks like a noun plural (not a verb)
    // Check if base ends with common f→ves stems
    if (
      base.endsWith("kni") || // knives → knife
      base.endsWith("li") || // lives → life
      base.endsWith("wi") || // wives → wife
      base.endsWith("wol") || // wolves → wolf
      base.endsWith("hal") || // halves → half
      base.endsWith("lea") || // leaves → leaf
      base.endsWith("shel") || // shelves → shelf
      base.endsWith("loa") || // loaves → loaf
      base.endsWith("cal") || // calves → calf
      base.endsWith("sel") || // selves → self
      base.endsWith("thie") || // thieves → thief
      base.endsWith("el") // elves → elf
    ) {
      // For most cases add 'f', but for 'ves' after 'i' or 'oa' use 'fe'
      if (base.endsWith("i") || base.endsWith("oa")) {
        result = base + "fe";
      } else {
        result = base + "f";
      }
      return matchCase(word, result);
    }
  }

  // -es endings (watches → watch, boxes → box, glasses → glass)
  // But NOT for words that are just regular -s plurals ending in 'se' (phrases → phrase)
  if (
    lower.endsWith("ches") ||
    lower.endsWith("shes") ||
    lower.endsWith("xes") ||
    lower.endsWith("zes")
  ) {
    result = lower.slice(0, -2);
    return matchCase(word, result);
  }

  // -sses endings (glasses → glass, kisses → kiss, classes → class)
  // Double 's' + es pattern
  if (lower.endsWith("sses") && lower.length > 4) {
    result = lower.slice(0, -2); // remove 'es'
    return matchCase(word, result);
  }

  // Other -ses endings like buses, gases
  // But NOT phrases, uses, causes (which are just phrase+s, use+s, cause+s)
  if (lower.endsWith("ses") && lower.length > 3 && !lower.endsWith("sses")) {
    const withoutS = lower.slice(0, -1); // Remove just 's' → "phrase", "use", "cause" OR "buse", "gase"

    // If the word (minus final 's') ends in 'se', it's phrase+s pattern
    // Otherwise (ends in just 'e' without 's'), it's likely bus+es pattern
    if (withoutS.endsWith("se")) {
      // phrase+s, use+s, cause+s → just remove 's'
      result = withoutS;
      return matchCase(word, result);
    } else {
      // buses → bus, gases → gas (remove 'es')
      result = lower.slice(0, -2);
      return matchCase(word, result);
    }
  }

  // Regular -s plurals (cats → cat, dogs → dog)
  // But NOT words ending in common suffixes: -ous, -us, -ness, -less, -ious, -eous
  if (lower.endsWith("s") && !lower.endsWith("ss")) {
    // Skip if word ends with common non-plural suffixes
    if (
      lower.endsWith("ous") || // nervous, famous, dangerous
      lower.endsWith("ious") || // curious, serious, various
      lower.endsWith("eous") || // gorgeous, courageous
      lower.endsWith("uous") || // continuous, ambiguous
      lower.endsWith("ness") || // happiness, sadness
      lower.endsWith("less") || // helpless, careless
      lower.endsWith("us") || // virus, focus, cactus (but not buses)
      lower.endsWith("is") || // analysis, crisis
      lower.endsWith("as") // canvas, atlas
    ) {
      return word;
    }

    result = lower.slice(0, -1);
    return matchCase(word, result);
  }

  return word;
}
