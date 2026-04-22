"use client";

import { useState } from "react";
import { GuessWordGame } from "@/components/guess-word/guess-word-game";
import { WordDetailCard } from "@/components/guess-word/word-detail-card";
import { VocabularyWord } from "@/constants/vocabulary/types";

export default function GuessWordPage() {
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        <div className="lg:col-span-3">
          <GuessWordGame onWordChange={setSelectedWord} />
        </div>
        
        <div className="lg:col-span-2">
          <WordDetailCard word={selectedWord} />
        </div>
      </div>
    </div>
  );
}
