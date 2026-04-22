"use client";

import { useEffect, useState } from "react";
import { AllVocabData } from "@/constants/vocabulary";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { shuffleArray } from "@/lib/utils";
import { VocabularyWord } from "@/constants/vocabulary/types";

interface GameQuestion {
  word: VocabularyWord;
  meaningDisplay: string;
}

interface GuessWordGameProps {
  onWordChange?: (word: VocabularyWord | null) => void;
}

function normalizeAnswer(text: string): string {
  return text.toLowerCase().trim();
}

function buildQuestions(): GameQuestion[] {
  return shuffleArray(AllVocabData).map((word) => ({
    word,
    meaningDisplay: word.meaningVi.replace(/\//g, ","),
  }));
}

export function GuessWordGame({ onWordChange }: GuessWordGameProps) {
  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const current = questions[index];
  const normalizedInput = normalizeAnswer(input);
  const isAnswerCorrect =
    normalizedInput === normalizeAnswer(current?.word.word || "");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuestions(buildQuestions());
  }, []);

  useEffect(() => {
    onWordChange?.(isChecked ? current?.word || null : null);
  }, [isChecked, current, onWordChange]);

  const handleCheck = () => {
    if (!input.trim() || !current) return;
    setIsCorrect(isAnswerCorrect);
    setIsChecked(true);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setInput("");
    setIsChecked(false);
    setIsCorrect(false);
  };

  if (!current) {
    return null;
  }

  return (
    <div className="space-y-4">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>Game: Vietnamese → English (Guess Word)</CardTitle>
          <p className="text-xs text-muted-foreground mt-2">
            Question {index + 1} of {questions.length}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Type the word that matches the meaning:
          </p>
          <p className="text-2xl font-bold text-primary">
            {current.meaningDisplay}
          </p>

          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isChecked}
            placeholder="Type your answer here..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isChecked) {
                handleCheck();
              } else if (e.key === "Enter" && isChecked) {
                handleNext();
              }
            }}
          />

          <div className="flex gap-2">
            {!isChecked ? (
              <Button onClick={handleCheck} disabled={!input.trim()}>
                Check (Only Once)
              </Button>
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </div>

          {isChecked && (
            <div
              className={`rounded-md border p-4 text-sm space-y-2 ${
                isCorrect
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : "border-rose-300 bg-rose-50 text-rose-700"
              }`}
            >
              <p className="font-semibold">
                {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
              </p>
              {!isCorrect && (
                <p>
                  <strong>Answer could be:</strong> {current?.word.word}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
