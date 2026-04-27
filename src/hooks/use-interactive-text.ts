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

    // Try to match multi-word phrases (from 10 words down to 2 words)
    let matched = false;
    const MAX_WORDS = 10; // Supports phrases up to 10 words

    for (let wordCount = MAX_WORDS; wordCount >= 2; wordCount--) {
      const chunksNeeded = wordCount * 2 - 1;

      // Check if we have enough chunks remaining
      if (i + chunksNeeded <= chunks.length) {
        // Validate that intermediate chunks are spaces
        let allSpaces = true;
        for (let j = 1; j < chunksNeeded; j += 2) {
          if (chunks[i + j].trim() !== "") {
            allSpaces = false;
            break;
          }
        }

        if (allSpaces) {
          const phraseWords: string[] = [];
          for (let j = 0; j < chunksNeeded; j += 2) {
            phraseWords.push(
              chunks[i + j].replace(/[.,!?;:'"()\[\]{}]/g, "").toLowerCase(),
            );
          }

          const candidate1 = phraseWords.join("-");

          const lemmatizedWords = phraseWords.map((w) =>
            lemmatize(singularize(w)),
          );
          const candidate2 = lemmatizedWords.join("-");

          const lastLemmatized = [...phraseWords];
          lastLemmatized[lastLemmatized.length - 1] =
            lemmatizedWords[lemmatizedWords.length - 1];
          const candidate3 = lastLemmatized.join("-");

          const candidateSlugs = [candidate1, candidate2, candidate3];

          const match = AllVocabData.find((vocab) =>
            candidateSlugs.includes(vocab.slug),
          );

          if (match) {
            words.push({
              raw: chunks.slice(i, i + chunksNeeded).join(""),
              normalized: match.slug,
              isTranslatable: true,
              isSpace: false,
              isProperNoun: false,
              word: match,
            });
            i += chunksNeeded;
            matched = true;
            break;
          }
        }
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
