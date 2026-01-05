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
    result = lower.slice(0, -3) + "y";
    return matchCase(word, result);
  }

  if (lower.endsWith("ves")) {
    result = lower.slice(0, -3) + "f";
    return matchCase(word, result);
  }

  if (
    lower.endsWith("ches") ||
    lower.endsWith("shes") ||
    lower.endsWith("xes") ||
    lower.endsWith("ses") ||
    lower.endsWith("zes")
  ) {
    result = lower.slice(0, -2);
    return matchCase(word, result);
  }

  if (lower.endsWith("s") && !lower.endsWith("ss")) {
    result = lower.slice(0, -1);
    return matchCase(word, result);
  }

  return word;
}
