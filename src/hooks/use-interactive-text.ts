// hooks/useInteractiveText.ts

import { STOP_WORDS } from "@/constants/stop-word";
import { useSingularize } from "./use-singularize";
import { isProperNoun } from "@/lib/text/is-proper-noun";
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

  const rawWords = text.split(" ");
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
      const threeWords = [chunks[i], chunks[i + 2], chunks[i + 4]].map((w) => {
        const clean = w.replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();
        const singular = singularize(clean);
        return lemmatize(singular);
      });
      const threeWordSlug = threeWords.join("-");
      const threeWordMatch = AllVocabData.find(
        (vocab) => vocab.slug === threeWordSlug
      );

      if (threeWordMatch) {
        words.push({
          raw: chunks.slice(i, i + 5).join(""),
          normalized: threeWordSlug,
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
      const twoWords = [chunks[i], chunks[i + 2]].map((w) => {
        const clean = w.replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase();
        const singular = singularize(clean);
        return lemmatize(singular);
      });
      const twoWordSlug = twoWords.join("-");
      const twoWordMatch = AllVocabData.find(
        (vocab) => vocab.slug === twoWordSlug
      );

      if (twoWordMatch) {
        words.push({
          raw: chunks.slice(i, i + 3).join(""),
          normalized: twoWordSlug,
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

      // Count only non-space chunks to get correct word index
      const wordIndex = words.filter((w) => !w.isSpace).length;
      const properNoun = isProperNoun(clean, wordIndex, rawWords);

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
        if (word) {
          // Use the form with 'e' as normalized
          words.push({
            raw: chunk,
            normalized: word.slug,
            isTranslatable: !isStopWord && !properNoun,
            isSpace: false,
            isProperNoun: properNoun,
            word: word,
          });
          i++;
          continue;
        }
      }

      words.push({
        raw: chunk,
        normalized: word ? word.slug : baseForm,
        isTranslatable: !isStopWord && !properNoun,
        isSpace: false,
        isProperNoun: properNoun,
        word: word || null,
      });
      i++;
    }
  }

  return { words };
}
