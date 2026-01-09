"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Home, BookOpen } from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";

interface QuizHeaderProps {
  level: CEFRLevel;
  answeredCount: number;
  totalQuestions: number;
  progress: number;
  score?: number;
  isSubmitted: boolean;
  onSubmit: () => void;
  onReset: () => void;
}

export function QuizHeader({
  level,
  answeredCount,
  totalQuestions,
  progress,
  score,
  isSubmitted,
  onSubmit,
  onReset,
}: QuizHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-linear-to-br from-primary/20 to-accent/20 rounded-xl">
            <BookOpen className="text-primary size-6" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-foreground">
              Language Quiz
            </h1>
            <CEFRBadge level={level} />
          </div>
        </div>
        <div className="text-right bg-secondary/50 rounded-xl p-4">
          <p className="text-sm font-semibold text-muted-foreground">
            Progress
          </p>
          <p className="text-xl font-bold text-primary">
            {answeredCount}/{totalQuestions}
          </p>
          {isSubmitted && score !== undefined && (
            <p className="text-sm font-semibold text-accent mt-2">
              Score: {Math.round((score / totalQuestions) * 100)}%
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <Progress value={progress} className="h-2 rounded-full bg-secondary" />
        <div className="flex gap-3">
          {!isSubmitted ? (
            <Button
              size="lg"
              variant={"outline"}
              className="flex-1 h-12 text-base font-semibold"
              onClick={onSubmit}
              disabled={answeredCount === 0}
            >
              Submit Quiz
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-12 text-base font-semibold border-primary/30 hover:bg-primary/5 bg-transparent"
                onClick={onReset}
              >
                <RotateCcw className="mr-2" size={18} /> Try Again
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-12 text-base font-semibold border-primary/30 hover:bg-primary/5 bg-transparent"
              >
                <Home className="mr-2" size={18} /> Home
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
