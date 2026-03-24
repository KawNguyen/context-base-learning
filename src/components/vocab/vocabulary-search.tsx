"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2, Search } from "lucide-react";
import { AllVocabData } from "@/constants/vocabulary";
import { pronounceWord } from "@/lib/speech";
import type { VocabularyWord } from "@/constants/vocabulary/types";

export default function VocabularySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null);

  const filteredWords = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const term = searchTerm.toLowerCase();
    return AllVocabData.filter((vocab) =>
      vocab.word.toLowerCase().includes(term),
    ).slice(0, 10); // Limit to 10 results
  }, [searchTerm]);

  return (
    <div className="w-full space-y-6">
      <Card className="gap-2">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <Search className="h-6 w-6" />
            Search Vocabulary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Nhập từ tiếng Anh hoặc tiếng Việt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-lg"
            />
          </div>

          {searchTerm && filteredWords.length === 0 && (
            <p className="text-muted-foreground text-center py-4">
              No results found for &quot;{searchTerm}&quot;
            </p>
          )}

          {filteredWords.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Found {filteredWords.length} results for &quot;{searchTerm}
                &quot;
              </p>
              <div className="grid gap-2">
                {filteredWords.map((vocab) => (
                  <Card
                    key={vocab.id}
                    className="cursor-pointer hover:bg-accent transition-colors"
                    onClick={() => setSelectedWord(vocab)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg">{vocab.word}</h3>
                            <Badge variant="outline" className="text-xs">
                              {vocab.partOfSpeech}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {vocab.phonetic}
                          </p>
                          <p className="text-sm font-medium">
                            {vocab.meaningVi}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            pronounceWord(vocab.word);
                          }}
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {selectedWord && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">
                  {selectedWord.word}
                </CardTitle>
                <p className="text-muted-foreground">{selectedWord.phonetic}</p>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => pronounceWord(selectedWord.word)}
              >
                <Volume2 className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Badge className="mb-2">{selectedWord.partOfSpeech}</Badge>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    English meaning:
                  </p>
                  <p className="text-base">{selectedWord.meaningEn}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Nghĩa tiếng Việt:
                  </p>
                  <p className="text-base font-medium">
                    {selectedWord.meaningVi}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Examples:
              </p>
              <div className="space-y-2 bg-muted p-3 rounded-md">
                <p className="italic">&quot;{selectedWord.exampleEn}&quot;</p>
                <p className="text-muted-foreground">
                  &quot;{selectedWord.exampleVi}&quot;
                </p>
              </div>
            </div>

            {selectedWord.categories.length > 0 && (
              <div className="border-t pt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">
                  Categories:
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedWord.categories.map((category) => (
                    <Badge key={category} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
