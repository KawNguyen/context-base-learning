"use client";

import { CheckCircle2, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "../ui/card";
import { Question } from "@/constants/quiz-question";

interface QuizCardProps {
  question: Question;
  questionIndex: number;
  selectedOption?: number;
  isSubmitted: boolean;
  onSelectOption: (optionIndex: number) => void;
}

export function QuizCard({
  question,
  questionIndex,
  selectedOption,
  isSubmitted,
  onSelectOption,
}: QuizCardProps) {
  const correctOptionIndex = question.options.findIndex((opt) => opt.isCorrect);
  const isAnswered = selectedOption !== undefined;
  const isCorrect =
    isSubmitted && isAnswered && question.options[selectedOption].isCorrect;
  const isWrong =
    isSubmitted && isAnswered && !question.options[selectedOption].isCorrect;

  return (
    <Card
      className={cn(
        "p-6 border-2 transition-all",
        isSubmitted &&
          (isCorrect
            ? "border-l-green-500 border-l-4"
            : isWrong
            ? "border-l-destructive border-l-4"
            : ""),
        !isSubmitted && isAnswered && "border-primary"
      )}
    >
      {/* Question Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-muted-foreground">
            Q{questionIndex + 1}
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
          {question.questionEn.split("____").map((part, i, arr) => {
            // Tách đáp án đúng theo dấu "/" nếu có
            const correctAnswer = question.options[correctOptionIndex].option;
            const answerParts = correctAnswer.includes("/")
              ? correctAnswer.split("/").map((p) => p.trim())
              : [correctAnswer];

            return (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className={`text-primary font-bold ${
                      isSubmitted ? "underline" : "underline-dotted"
                    }`}
                  >
                    {isSubmitted
                      ? answerParts[i] || correctAnswer
                      : "_ _ _ _ _ _"}
                  </span>
                )}
              </span>
            );
          })}
          {isSubmitted && (
            <p className="text-sm text-muted-foreground font-light italic">
              &quot;{question.questionVi}&quot;
            </p>
          )}
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-2 mb-4">
        {question.options.map((option, optIdx) => {
          const isSelected = selectedOption === optIdx;
          const isCorrectOption = optIdx === correctOptionIndex;
          const showAsCorrect = isSubmitted && isCorrectOption;
          const showAsWrong = isSubmitted && isSelected && !isCorrectOption;

          return (
            <button
              key={optIdx}
              onClick={() => onSelectOption(optIdx)}
              disabled={isSubmitted}
              className={cn(
                "text-left p-3 rounded-lg border-2 transition-all hover:border-primary disabled:cursor-not-allowed",
                isSelected && !isSubmitted && "border-primary bg-primary/10",
                showAsCorrect &&
                  "border-green-500 bg-green-50 dark:bg-green-950",
                showAsWrong && "border-destructive bg-destructive/10",
                !isSelected &&
                  !showAsCorrect &&
                  !showAsWrong &&
                  "border-border hover:bg-muted"
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
                      showAsCorrect && "text-green-700 dark:text-green-400",
                      showAsWrong && "text-destructive"
                    )}
                  >
                    {option.option}
                  </span>
                </span>
                {showAsCorrect && (
                  <CheckCircle2 className="text-green-600 size-5" />
                )}
                {showAsWrong && <XCircle className="text-destructive size-5" />}
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
              : "border-l-muted-foreground bg-muted/50"
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
}
