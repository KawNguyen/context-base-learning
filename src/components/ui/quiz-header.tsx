"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, Home } from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";

interface QuizHeaderProps {
  title: string;
  subtitle: string;
  level: CEFRLevel;
  answeredCount: number;
  totalQuestions: number;
  progress: number;
  score: number;
  isSubmitted: boolean;
  onSubmit: () => void;
  onReset: () => void;
  onBack: () => void;
}

export function QuizHeader({
  title,
  subtitle,
  level,
  answeredCount,
  totalQuestions,
  progress,
  score,
  isSubmitted,
  onSubmit,
  onReset,
  onBack,
}: QuizHeaderProps) {
  return (
    <div className="sticky top-0 z-10 bg-background/30 backdrop-blur-sm rounded-2xl border border-border/50 p-4 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <div className="flex items-center gap-2 mt-1">
            <CEFRBadge level={level} />
            <span className="text-sm text-muted-foreground">{subtitle}</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Progress
          </p>
          <p className="text-2xl font-bold text-foreground">
            {answeredCount} / {totalQuestions}
          </p>
          {isSubmitted && (
            <p className="text-sm font-semibold text-primary mt-1">
              Score: {score} / {totalQuestions} (
              {Math.round((score / totalQuestions) * 100)}%)
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <Progress value={progress} className="h-2" />
        <div className="flex gap-3">
          {!isSubmitted ? (
            <Button
              size="lg"
              className="flex-1 h-11"
              onClick={onSubmit}
              disabled={answeredCount < totalQuestions}
            >
              Submit Test ({answeredCount}/{totalQuestions})
            </Button>
          ) : (
            <>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-11"
                onClick={onReset}
              >
                <RotateCcw className="mr-2" size={18} /> New Test
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 h-11"
                onClick={onBack}
              >
                <Home className="mr-2" size={18} /> Back
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
