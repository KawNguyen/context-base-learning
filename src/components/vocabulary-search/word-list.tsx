"use client";

import { WordCard } from "./word-card";
import type { VocabularyWord } from "@/constants/vocabulary/types";

interface WordListProps {
  searchTerm: string;
  filteredWords: VocabularyWord[];
  onWordSelect: (word: VocabularyWord) => void;
}

export function WordList({
  searchTerm,
  filteredWords,
  onWordSelect,
}: WordListProps) {
  if (!searchTerm) return null;

  if (filteredWords.length === 0) {
    return (
      <p className="text-muted-foreground text-center py-4">
        No results found for &quot;{searchTerm}&quot;
      </p>
    );
  }

  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        Found {filteredWords.length} results for &quot;{searchTerm}&quot;
      </p>
      <div className="grid gap-2">
        {filteredWords.map((vocab) => (
          <WordCard key={vocab.slug} vocab={vocab} onClick={onWordSelect} />
        ))}
      </div>
    </div>
  );
}
