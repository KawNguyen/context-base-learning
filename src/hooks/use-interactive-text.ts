// hooks/useInteractiveText.ts

import { STOP_WORDS } from "@/constants/stop-word";
import { useSingularize } from "./use-singularize";
// import { isProperNoun } from "@/lib/text/is-proper-noun";
import { AllVocabData, VocabularyWord } from "@/constants/vocabulary";
import { lemmatize } from "@/lib/text/lemmatize";
import { singularize } from "@/lib/text/singularize";

export interface InteractiveWord {
  raw: string;
  normalized: string;
  isTranslatable: boolean;
  isSpace: boolean;
  isProperNoun: boolean;
  word: VocabularyWord | null;
}

export function useInteractiveText(text: string) {
  const { toSingular } = useSingularize();

  // const rawWords = text.split(" ");
  const chunks = text.split(/(\s+)/);
  const words: InteractiveWord[] = [];

  let i = 0;
  while (i < chunks.length) {
    const chunk = chunks[i];

    // SPACE / NEWLINE
    if (chunk.trim() === "") {
      words.push({
        raw: chunk,
        normalized: "",
        isTranslatable: false,
        isSpace: true,
        isProperNoun: false,
        word: null,
      });
      i++;
      continue;
    }

    // Try to match multi-word phrases (3 words, 2 words)
    let matched = false;

    // Try 3-word phrase
    if (
      i + 4 < chunks.length &&
      chunks[i + 1].trim() === "" &&
      chunks[i + 3].trim() === ""
    ) {
      const w1 = chunks[i].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();
      const w2 = chunks[i + 2].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();
      const w3 = chunks[i + 4].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();

      const l1 = lemmatize(singularize(w1));
      const l2 = lemmatize(singularize(w2));
      const l3 = lemmatize(singularize(w3));

      // Common cases: Exact match, completely lemmatized, or only the last word lemmatized (for plurals like "sparkling waters" -> "sparkling water")
      const candidateSlugs = [
        `${w1}-${w2}-${w3}`,
        `${l1}-${l2}-${l3}`,
        `${w1}-${w2}-${l3}`, // Only last word lemmatized
      ];

      const threeWordMatch = AllVocabData.find((vocab) =>
        candidateSlugs.includes(vocab.slug),
      );

      if (threeWordMatch) {
        words.push({
          raw: chunks.slice(i, i + 5).join(""),
          normalized: threeWordMatch.slug,
          isTranslatable: true,
          isSpace: false,
          isProperNoun: false,
          word: threeWordMatch,
        });
        i += 5;
        matched = true;
      }
    }

    // Try 2-word phrase if 3-word didn't match
    if (!matched && i + 2 < chunks.length && chunks[i + 1].trim() === "") {
      const w1 = chunks[i].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();
      const w2 = chunks[i + 2].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();

      const l1 = lemmatize(singularize(w1));
      const l2 = lemmatize(singularize(w2));

      const candidateSlugs = [
        `${w1}-${w2}`,
        `${l1}-${l2}`,
        `${w1}-${l2}`, // Only last word lemmatized
      ];

      const twoWordMatch = AllVocabData.find((vocab) =>
        candidateSlugs.includes(vocab.slug),
      );

      if (twoWordMatch) {
        words.push({
          raw: chunks.slice(i, i + 3).join(""),
          normalized: twoWordMatch.slug,
          isTranslatable: true,
          isSpace: false,
          isProperNoun: false,
          word: twoWordMatch,
        });
        i += 3;
        matched = true;
      }
    }

    // If no phrase matched, process as single word
    if (!matched) {
      const clean = chunk.replace(/[.,!?;:'"()\[\]{}]/g, "");
      const lower = clean.toLowerCase();
      const singular = toSingular(lower);
      const baseForm = lemmatize(singular);

      // Check stop words using lowercase original word first, then singular and base forms
      const isStopWord =
        STOP_WORDS.has(lower) ||
        STOP_WORDS.has(singular) ||
        STOP_WORDS.has(baseForm);

      // Try to find word by checking multiple forms
      let word = AllVocabData.find((vocab) => vocab.slug === singular);

      if (!word) {
        word = AllVocabData.find((vocab) => vocab.slug === baseForm);
      }

      // If still not found and baseForm doesn't end with 'e', try adding 'e'
      // This handles cases like: animated -> animat -> animate, named -> nam -> name
      // becomes -> becom -> become, etc.
      if (!word && !baseForm.endsWith("e")) {
        const baseWithE = baseForm + "e";
        word = AllVocabData.find((vocab) => vocab.slug === baseWithE);
      }

      // Determine if it's a proper noun
      // If word is capitalized AND not found in vocabulary, treat as proper noun
      // const wordIndex = words.filter((w) => !w.isSpace).length;
      const isCapitalized = /^[A-Z]/.test(clean);
      const properNoun = isCapitalized && !word && !isStopWord;

      // Translatable if: not a stop word, not a proper noun, and either has meaning or could have meaning
      const isTranslatable = !isStopWord && !properNoun;

      words.push({
        raw: chunk,
        normalized: word ? word.slug : baseForm,
        isTranslatable: isTranslatable,
        isSpace: false,
        isProperNoun: properNoun,
        word: word || null,
      });
      i++;
    }
  }

  return { words };
}
