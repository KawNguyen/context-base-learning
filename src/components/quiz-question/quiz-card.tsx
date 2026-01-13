"use client";

import { CheckCircle2, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Question } from "@/constants/quiz-question";
import { AnswerButton } from "@/components/answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";

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
            ? "border-green-500"
            : isWrong
            ? "border-destructive"
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

          return (
            <AnswerButton
              key={optIdx}
              label={`${String.fromCharCode(65 + optIdx)}.`}
              isSelected={isSelected}
              isCorrect={isCorrectOption}
              isSubmitted={isSubmitted}
              onClick={() => onSelectOption(optIdx)}
              variant="standard"
            >
              {option.option}
            </AnswerButton>
          );
        })}
      </div>

      {/* Explanation - chỉ hiển thị sau khi submit */}
      {isSubmitted && (
        <ExplanationAlert isCorrect={isCorrect}>{question.explanationVi}</ExplanationAlert>
      )}
    </Card>
  );
}
