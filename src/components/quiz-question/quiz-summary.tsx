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
    <Card className="p-4 sm:p-6 border border-primary/20 shadow-2xl sticky bottom-4 bg-background/80 backdrop-blur-md mx-auto w-full max-w-6xl rounded-2xl overflow-hidden transition-all duration-300">
      <div className="flex flex-row items-center justify-between gap-4">
        {/* Left Stats Group */}
        <div className="flex items-center gap-4 sm:gap-8 flex-1 overflow-x-auto no-scrollbar">
          {/* Correct */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="p-1.5 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="text-green-500 size-4 sm:size-5" />
            </div>
            <div>
              <p className="hidden sm:block text-[10px] text-muted-foreground uppercase font-semibold">
                Correct
              </p>
              <p className="text-sm sm:text-lg font-bold text-green-500 text-center sm:text-left">
                {score}
              </p>
            </div>
          </div>

          {/* Wrong */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="p-1.5 bg-destructive/10 rounded-lg">
              <XCircle className="text-destructive size-4 sm:size-5" />
            </div>
            <div>
              <p className="hidden sm:block text-[10px] text-muted-foreground uppercase font-semibold">
                Wrong
              </p>
              <p className="text-sm sm:text-lg font-bold text-destructive text-center sm:text-left">
                {wrongAnswers}
              </p>
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center gap-2 shrink-0 border-l border-primary/10 pl-4">
            <div className="p-1.5 bg-primary/10 rounded-lg">
              <Trophy className="text-primary size-4 sm:size-5" />
            </div>
            <div>
              <p className="hidden sm:block text-[10px] text-muted-foreground uppercase font-semibold">
                Total
              </p>
              <p className="text-sm sm:text-lg font-bold whitespace-nowrap">
                {score}/{totalQuestions}
              </p>
            </div>
          </div>
        </div>

        {/* Right Percent Group */}
        <div className="flex items-center gap-3 pl-4 border-l border-primary/10 ml-auto shrink-0">
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <span className="text-lg sm:text-2xl font-black text-primary">
                {percentage}%
              </span>
            </div>
            <p className="text-[9px] sm:text-[11px] text-muted-foreground font-medium uppercase tracking-tighter">
              Accuracy
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
