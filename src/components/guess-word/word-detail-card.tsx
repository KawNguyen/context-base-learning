"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Volume1, Volume2 } from "lucide-react";
import { speakWithRate } from "@/lib/speech";
import { VocabularyWord } from "@/constants/vocabulary";

interface WordDetailCardProps {
  word: VocabularyWord | null;
}

export function WordDetailCard({ word }: WordDetailCardProps) {
  if (!word) {
    return (
      <Card className="border-blue-200 h-full flex items-center justify-center">
        <p className="text-muted-foreground">Word details will appear here</p>
      </Card>
    );
  }

  const handleSpeakNormal = () => {
    speakWithRate(word.word, 0.5, "en-US");
  };

  const handleSpeakFast = () => {
    speakWithRate(word.word, 1.2, "en-US");
  };

  return (
    <Card className="h-full overflow-y-auto pt-0">
      <CardHeader className="border-b bg-muted/50 top-0 z-10">
        <CardTitle className="flex items-center justify-between mt-6">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-2xl">{word.word}</p>
              <p className="text-sm text-muted-foreground capitalize">
                ({word.partOfSpeech})
              </p>
            </div>
            <p className="text-sm text-muted-foreground italic">
              {word.phonetic}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleSpeakNormal}
              title="Speak normally"
            >
              <Volume1 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleSpeakFast}
              title="Speak fast"
            >
              <Volume2 className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* English Definition */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">English Meaning</h3>
          <p className="text-base text-foreground leading-relaxed">
            {word.meaningEn}
          </p>
        </div>

        {/* Vietnamese Definition */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Vietnamese Meaning</h3>
          <p className="text-base text-foreground leading-relaxed">
            {word.meaningVi}
          </p>
        </div>

        {/* English Example */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">Example (English)</h3>
          <p className="text-base text-foreground italic leading-relaxed bg-muted p-3 rounded-md">
            {word.exampleEn}
          </p>
        </div>

        {/* Vietnamese Example */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground">
            Example (Vietnamese)
          </h3>
          <p className="text-base text-foreground italic leading-relaxed bg-muted p-3 rounded-md">
            {word.exampleVi}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
