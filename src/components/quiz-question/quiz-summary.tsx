"use client";

import { CheckCircle2, XCircle, Trophy } from "lucide-react";
import { Card } from "../ui/card";

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
}

export function QuizSummary({ score, totalQuestions }: QuizSummaryProps) {
  const wrongAnswers = totalQuestions - score;
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <Card className="text-center p-8 border-2 shadow-lg sticky bottom-4 bg-background/30 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-8">
        <div className="flex items-center gap-3">
          <Trophy className="text-primary size-8" />
          <div className="text-left">
            <p className="text-sm text-muted-foreground">Total Score</p>
            <p className="text-2xl font-bold">
              {score}/{totalQuestions}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-green-600 size-8" />
          <div className="text-left">
            <p className="text-sm text-muted-foreground">Correct</p>
            <p className="text-2xl font-bold text-green-600">{score}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <XCircle className="text-destructive size-8" />
          <div className="text-left">
            <p className="text-sm text-muted-foreground">Wrong</p>
            <p className="text-2xl font-bold text-destructive">
              {wrongAnswers}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-primary/10 rounded-full">
            <span className="text-2xl font-bold text-primary">
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
