"use client";

import { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Check, X } from "lucide-react";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { CEFRLevel } from "@/types";
import { AnswerButton } from "../answer-button";

interface PassageExerciseCardProps {
  passage: TextCompletionPassage;
  passageNumber: number;
  level: CEFRLevel;
  userAnswers: Record<number, number>;
  showResult: boolean;
  onSelectOption: (gapIndex: number, optionIndex: number) => void;
  isAnswerCorrect: (
    passageId: string,
    gapIndex: number,
    optionIndex: number,
  ) => boolean;
}

export function PassageExerciseCard({
  passage,
  passageNumber,
  level,
  userAnswers,
  showResult,
  onSelectOption,
  isAnswerCorrect,
}: PassageExerciseCardProps) {
  const textSegments = useMemo(() => {
    const regex = /\{\{(\d+)\}\}/g;
    let lastIndex = 0;
    const segments: Array<{
      type: "text" | "gap";
      content?: string;
      index?: number;
    }> = [];
    let match;

    while ((match = regex.exec(passage.content)) !== null) {
      if (match.index > lastIndex) {
        segments.push({
          type: "text" as const,
          content: passage.content.substring(lastIndex, match.index),
        });
      }

      segments.push({
        type: "gap" as const,
        index: parseInt(match[1]),
      });

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < passage.content.length) {
      segments.push({
        type: "text" as const,
        content: passage.content.substring(lastIndex),
      });
    }

    return segments;
  }, [passage]);

  const answeredCount = Object.keys(userAnswers).length;
  const totalQuestions = passage.questions.length;
  const isComplete = answeredCount === totalQuestions;

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline">#{passageNumber}</Badge>
              <Badge variant="secondary">{level}</Badge>
              {showResult && isComplete && (
                <Badge
                  variant={
                    passage.questions.every((q) =>
                      isAnswerCorrect(
                        passage.id,
                        q.placeholderIndex,
                        userAnswers[q.placeholderIndex],
                      ),
                    )
                      ? "default"
                      : "destructive"
                  }
                >
                  {
                    passage.questions.filter((q) =>
                      isAnswerCorrect(
                        passage.id,
                        q.placeholderIndex,
                        userAnswers[q.placeholderIndex],
                      ),
                    ).length
                  }
                  /{totalQuestions}
                </Badge>
              )}
            </div>
            <CardTitle>{passage.title}</CardTitle>
          </div>
          <Badge variant={isComplete ? "default" : "outline"}>
            {answeredCount}/{totalQuestions}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Reading Text with Gaps */}
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <div className="leading-relaxed text-base whitespace-pre-line">
            {textSegments.map((segment, idx) => {
              if (segment.type === "text") {
                return <span key={idx}>{segment.content}</span>;
              } else {
                const gapIndex = segment.index!;
                const userAnswer = userAnswers[gapIndex];
                const question = passage.questions.find(
                  (q) => q.placeholderIndex === gapIndex,
                );
                const isCorrect =
                  showResult &&
                  userAnswer !== undefined &&
                  isAnswerCorrect(passage.id, gapIndex, userAnswer);
                const isWrong =
                  showResult &&
                  userAnswer !== undefined &&
                  !isAnswerCorrect(passage.id, gapIndex, userAnswer);

                return (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-medium ${
                      isCorrect
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : isWrong
                          ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                          : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                    }`}
                  >
                    {userAnswer !== undefined
                      ? question?.options[userAnswer]?.option
                      : `[${gapIndex}]`}
                    {showResult && isCorrect && <Check className="w-4 h-4" />}
                    {showResult && isWrong && <X className="w-4 h-4" />}
                  </span>
                );
              }
            })}
          </div>
        </div>

        {/* Questions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {passage.questions.map((question) => (
            <div
              key={question.placeholderIndex}
              className="border rounded-lg p-4 bg-muted/20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold">
                  Gap {question.placeholderIndex}
                </span>
                {showResult &&
                  userAnswers[question.placeholderIndex] !== undefined && (
                    <Badge
                      variant={
                        isAnswerCorrect(
                          passage.id,
                          question.placeholderIndex,
                          userAnswers[question.placeholderIndex],
                        )
                          ? "default"
                          : "destructive"
                      }
                    >
                      {isAnswerCorrect(
                        passage.id,
                        question.placeholderIndex,
                        userAnswers[question.placeholderIndex],
                      )
                        ? "Correct"
                        : "Wrong"}
                    </Badge>
                  )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {question.options.map((option, optionIndex) => {
                  const isSelected =
                    userAnswers[question.placeholderIndex] === optionIndex;
                  const isCorrectOption = option.isCorrect;

                  return (
                    <AnswerButton
                      key={optionIndex}
                      label={`${String.fromCharCode(65 + optionIndex)}.`}
                      isSelected={isSelected}
                      isCorrect={isCorrectOption}
                      isSubmitted={showResult}
                      onClick={() =>
                        onSelectOption(question.placeholderIndex, optionIndex)
                      }
                      variant="compact"
                      className="py-3 px-4 whitespace-normal text-left"
                    >
                      {option.option}
                    </AnswerButton>
                  );
                })}
              </div>
              {showResult && question.explanationVi && (
                <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Giải thích:
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    {question.explanationVi}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
