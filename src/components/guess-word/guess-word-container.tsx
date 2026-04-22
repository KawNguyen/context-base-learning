"use client";

import { useState } from "react";
import { GuessWordGame } from "./guess-word-game";
import { WordDetailCard } from "./word-detail-card";
import { VocabularyWord } from "@/constants/vocabulary/types";

export function GuessWordContainer() {
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
      <div className="lg:col-span-3">
        <GuessWordGame onWordChange={setSelectedWord} />
      </div>

      <div className="lg:col-span-2">
        <WordDetailCard word={selectedWord} />
      </div>
    </div>
  );
}
