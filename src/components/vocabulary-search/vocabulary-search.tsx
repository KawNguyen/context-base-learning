"use client";

import { useState, useMemo } from "react";
import { AllVocabData } from "@/constants/vocabulary";
import type { VocabularyWord } from "@/constants/vocabulary/types";
import { WordDetailDialog } from "@/components/word-detail-dialog";
import { SearchInput } from "./search-input";
import { WordList } from "./word-list";

export default function VocabularySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();
    return AllVocabData.filter((vocab) =>
      vocab.word.toLowerCase().includes(term),
    ).slice(0, 10); // Limit to 10 results
  }, [searchTerm]);

  const handleWordSelect = (word: VocabularyWord) => {
    setSelectedWord(word);
    setIsDetailOpen(true);
  };

  return (
    <div className="w-full space-y-6">
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <WordList
        searchTerm={searchTerm}
        filteredWords={filteredWords}
        onWordSelect={handleWordSelect}
      />

      <WordDetailDialog
        word={selectedWord}
        open={isDetailOpen}
        onOpenChange={setIsDetailOpen}
      />
    </div>
  );
}
