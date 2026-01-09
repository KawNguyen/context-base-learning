"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  XCircle,
  RotateCcw,
  Home,
  Info,
  Trophy,
  BookOpen,
} from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import questions from "@/constants/quiz-question";
import { Card } from "../ui/card";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";

interface QuizInterfaceProps {
  level: CEFRLevel;
}

export function QuizInterface({ level }: QuizInterfaceProps) {
  // Random 50 câu hỏi
  const levelQuestions = useMemo(() => {
    const allQuestions = questions[level as keyof typeof questions] || [];
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, Math.min(50, allQuestions.length));
  }, [level]);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Scroll to top để xem kết quả
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Tính điểm
  const score = Object.entries(selectedAnswers).filter(([qIdx, optIdx]) => {
    const question = levelQuestions[Number(qIdx)];
    return question.options[optIdx].isCorrect;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = (answeredCount / levelQuestions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Header với thông tin tổng quan */}
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
              {answeredCount}/{levelQuestions.length}
            </p>
            {isSubmitted && (
              <p className="text-sm font-semibold text-accent mt-2">
                Score: {Math.round((score / levelQuestions.length) * 100)}%
              </p>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <Progress
            value={progress}
            className="h-2 rounded-full bg-secondary"
          />
          <div className="flex gap-3">
            {!isSubmitted ? (
              <Button
                size="lg"
                variant={"outline"}
                className="flex-1 h-12 text-base font-semibold"
                onClick={handleSubmit}
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
                  onClick={resetQuiz}
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

      {/* Grid hiển thị tất cả câu hỏi */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {levelQuestions.map((question, qIdx) => {
          const selectedOption = selectedAnswers[qIdx];
          const correctOptionIndex = question.options.findIndex(
            (opt) => opt.isCorrect,
          );
          const isAnswered = selectedOption !== undefined;
          const isCorrect =
            isSubmitted &&
            isAnswered &&
            question.options[selectedOption].isCorrect;
          const isWrong =
            isSubmitted &&
            isAnswered &&
            !question.options[selectedOption].isCorrect;

          return (
            <Card
              key={qIdx}
              className={cn(
                "p-6 border-2 transition-all",
                isSubmitted &&
                  (isCorrect
                    ? "border-l-green-500 border-l-4"
                    : isWrong
                      ? "border-l-destructive border-l-4"
                      : ""),
                !isSubmitted && isAnswered && "border-primary",
              )}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-muted-foreground">
                    Q{qIdx + 1}
                  </span>
                  {isSubmitted &&
                    (isCorrect ? (
                      <CheckCircle2 className="text-green-600 size-5" />
                    ) : isWrong ? (
                      <XCircle className="text-destructive size-5" />
                    ) : (
                      <Info className="text-muted-foreground size-5" />
                    ))}
                </div>
                {isAnswered && !isSubmitted && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    Answered
                  </span>
                )}
              </div>

              {/* Question Text */}
              <div className="mb-4">
                <p className="text-base font-medium leading-relaxed">
                  {question.questionEn.split("____").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span
                          className={`text-primary font-bold ${
                            isSubmitted ? "underline" : "underline-dotted"
                          }`}
                        >
                          {isSubmitted
                            ? question.options[correctOptionIndex].option
                            : "_ _ _ _ _ _"}
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>

              {/* Options */}
              <div className="grid gap-2 mb-4">
                {question.options.map((option, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrectOption = optIdx === correctOptionIndex;
                  const showAsCorrect = isSubmitted && isCorrectOption;
                  const showAsWrong =
                    isSubmitted && isSelected && !isCorrectOption;

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleOptionSelect(qIdx, optIdx)}
                      disabled={isSubmitted}
                      className={cn(
                        "text-left p-3 rounded-lg border-2 transition-all hover:border-primary disabled:cursor-not-allowed",
                        isSelected &&
                          !isSubmitted &&
                          "border-primary bg-primary/10",
                        showAsCorrect &&
                          "border-green-500 bg-green-50 dark:bg-green-950",
                        showAsWrong && "border-destructive bg-destructive/10",
                        !isSelected &&
                          !showAsCorrect &&
                          !showAsWrong &&
                          "border-border hover:bg-muted",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-muted-foreground">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span
                            className={cn(
                              "font-medium",
                              showAsCorrect &&
                                "text-green-700 dark:text-green-400",
                              showAsWrong && "text-destructive",
                            )}
                          >
                            {option.option}
                          </span>
                        </span>
                        {showAsCorrect && (
                          <CheckCircle2 className="text-green-600 size-5" />
                        )}
                        {showAsWrong && (
                          <XCircle className="text-destructive size-5" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation - chỉ hiển thị sau khi submit */}
              {isSubmitted && (
                <Alert
                  className={cn(
                    "border-l-4",
                    isCorrect
                      ? "border-l-green-500 bg-green-50/50 dark:bg-green-950/50"
                      : "border-l-muted-foreground bg-muted/50",
                  )}
                >
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    {question.explanationVi}
                  </AlertDescription>
                </Alert>
              )}
            </Card>
          );
        })}
      </div>

      {/* Summary khi đã submit */}
      {isSubmitted && (
        <Card className="text-center p-8 border-2 shadow-lg sticky bottom-4 bg-background/30 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Trophy className="text-primary size-8" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Total Score</p>
                <p className="text-2xl font-bold">
                  {score}/{levelQuestions.length}
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
                  {levelQuestions.length - score}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <span className="text-2xl font-bold text-primary">
                  {Math.round((score / levelQuestions.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
