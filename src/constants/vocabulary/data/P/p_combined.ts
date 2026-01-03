import { VocabularyWord } from "../../types";
import { P1 } from "./p1";
import { P2 } from "./p2";
import { P3 } from "./p3";

// Combine P1, P2, P3 -> sort alphabetically by `word`, dedupe by `slug`,
// then split into arrays of max 100 items each.

const all: VocabularyWord[] = [...P1, ...P2, ...P3];

all.sort((a, b) => a.word.localeCompare(b.word, "en", { sensitivity: "base" }));

const seen = new Set<string>();
const deduped: VocabularyWord[] = [];
for (const w of all) {
  const key = (w.slug || w.word || "").toLowerCase();
  if (!seen.has(key)) {
    seen.add(key);
    deduped.push(w);
  }
}

export const P_ALL: VocabularyWord[] = deduped;

export const P_CHUNKS: VocabularyWord[][] = [];
for (let i = 0; i < P_ALL.length; i += 100) {
  P_CHUNKS.push(P_ALL.slice(i, i + 100));
}

export default P_ALL;
