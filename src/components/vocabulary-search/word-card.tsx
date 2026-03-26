"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Volume2 } from "lucide-react";
import { pronounceWord } from "@/lib/speech";
import type { VocabularyWord } from "@/constants/vocabulary/types";

interface WordCardProps {
  vocab: VocabularyWord;
  onClick: (word: VocabularyWord) => void;
}

export function WordCard({ vocab, onClick }: WordCardProps) {
  return (
    <Card
      className="cursor-pointer hover:bg-accent transition-colors"
      onClick={() => onClick(vocab)}
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
            <p className="text-sm font-medium">{vocab.meaningVi}</p>
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
  );
}
