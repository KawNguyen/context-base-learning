import { DO_NOT_STEM, IRREGULAR_VERBS } from "@/constants/rule-word/lemmatize";

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

  // Check if word ends in -ed or -ing but shouldn't be stemmed down
  if (DO_NOT_STEM.has(lower)) {
    return word;
  }

  // Check irregular verbs after exceptions
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
      base.endsWith("nge") ||
      base.endsWith("ng") || // offering -> offer (not offere)
      base.endsWith("rd") || // rewarding -> reward (not rewarde)
      base.endsWith("rt") ||
      base.endsWith("st") ||
      base.endsWith("ct") || // predicting -> predict
      base.endsWith("nd") || // finding -> find
      base.endsWith("ld") || // building -> build
      base.endsWith("er") || // offering -> offer, answering -> answer
      base.endsWith("ar") ||
      base.endsWith("or") ||
      base.endsWith("ur") ||
      base.endsWith("en") || // listening -> listen
      base.endsWith("on") ||
      base.endsWith("in") ||
      base.endsWith("el") || // traveling -> travel
      base.endsWith("al") ||
      base.endsWith("il") ||
      base.endsWith("ol") ||
      base.endsWith("ul") ||
      base.endsWith("ow") || // showing -> show
      base.endsWith("ew") ||
      base.endsWith("ay") || // playing -> play
      base.endsWith("ey") ||
      base.endsWith("oy")
    ) {
      result = base;
    }
    // Most other -ing forms need 'e' added back (making -> make, taking -> take)
    // But only if base doesn't already end in 'e'
    else if (
      base.length >= 2 &&
      !base.endsWith("e") &&
      !["a", "e", "i", "o", "u"].includes(base[base.length - 2]) && // prevent e if second to last is vowel (e.g., read -> reading, wait -> waiting)
      [
        "b",
        "c",
        "d",
        "f",
        "g",
        "k",
        "l",
        "m",
        "n",
        "p",
        "r",
        "s",
        "t",
        "v",
        "z",
      ].includes(base[base.length - 1]) // typical consonants that drop 'e'
    ) {
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
    // 'eed' -> remove only 'd' if it's from word like 'agreed' -> 'agree'
    else if (lower.endsWith("eed")) {
      result = lower.slice(0, -1);
    }
    // Just remove -ed
    else {
      result = base; // "regarded" -> "regard", "wanted" -> "want", etc.

      // Specifically add 'e' back ONLY for specific consonant patterns that mean it dropped 'e'
      // Words ending in 'c', 'v', 'z', 'g' almost always need 'e' added back (force, behave, amaze, change)
      if (base.length >= 2) {
        const last = base[base.length - 1];
        if (
          ["c", "v", "z"].includes(last) ||
          (base.endsWith("g") && !base.endsWith("ng"))
        ) {
          result = base + "e"; // balanced -> balance, saved -> save
        }
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
