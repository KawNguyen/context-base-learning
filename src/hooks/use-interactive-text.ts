// hooks/useInteractiveText.ts

import { STOP_WORDS } from "@/constants/stop-word";
import { useSingularize } from "./use-singularize";
import { isProperNoun } from "@/lib/text/is-proper-noun";
import { AllVocabData } from "@/constants/vocabulary";

export interface InteractiveWord {
  raw: string;
  normalized: string;
  isTranslatable: boolean;
  isSpace: boolean;
  isProperNoun: boolean;
  meaning: string;
}

export function useInteractiveText(text: string) {
  const { toSingular } = useSingularize();

  const rawWords = text.split(" ");

  const words: InteractiveWord[] = text.split(/(\s+)/).map((chunk, index) => {
    // SPACE / NEWLINE
    if (chunk.trim() === "") {
      return {
        raw: chunk,
        normalized: "",
        isTranslatable: false,
        isSpace: true,
        isProperNoun: false,
        meaning: "",
      };
    }

    const clean = chunk.replace(/[.,!?]/g, "");
    const lower = clean.toLowerCase();
    const singular = toSingular(lower);

    const isStopWord = STOP_WORDS.has(singular);

    const properNoun = isProperNoun(clean, index, rawWords);

    const mean = AllVocabData.find(
      (vocab) => vocab.slug === singular
    )?.meaningVi;

    return {
      raw: chunk,
      normalized: singular,
      isTranslatable: !isStopWord && !properNoun,
      isSpace: false,
      isProperNoun: properNoun,
      meaning: mean || "",
    };
  });

  return { words };
}
