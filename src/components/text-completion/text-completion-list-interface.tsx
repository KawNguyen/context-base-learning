"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { useRouter } from "next/navigation";
import { CEFRLevel } from "@/types";
import { PassageExerciseCard } from "./passage-exercise-card";

interface TextCompletionListInterfaceProps {
  passages: TextCompletionPassage[];
  level: CEFRLevel;
}

export function TextCompletionListInterface({
  passages,
  level,
}: TextCompletionListInterfaceProps) {
  const router = useRouter();
  const [userAnswers, setUserAnswers] = useState<
    Record<string, Record<number, number>>
  >({}); // passageId -> { gapIndex -> optionIndex }
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (
    passageId: string,
    gapIndex: number,
    optionIndex: number
  ) => {
    if (showResult) return;
    setUserAnswers((prev) => ({
      ...prev,
      [passageId]: {
        ...prev[passageId],
        [gapIndex]: optionIndex,
      },
    }));
  };

  const checkAllAnswered = () => {
    return passages.every((passage) => {
      const passageAnswers = userAnswers[passage.id] || {};
      return passage.questions.every(
        (q) => passageAnswers[q.placeholderIndex] !== undefined
      );
    });
  };

  const getScore = () => {
    let correct = 0;
    let total = 0;

    passages.forEach((passage) => {
      passage.questions.forEach((question) => {
        total++;
        const userAnswer = userAnswers[passage.id]?.[question.placeholderIndex];
        if (
          userAnswer !== undefined &&
          question.options[userAnswer]?.isCorrect
        ) {
          correct++;
        }
      });
    });

    return { correct, total };
  };

  const isAnswerCorrect = (
    passageId: string,
    gapIndex: number,
    optionIndex: number
  ) => {
    const passage = passages.find((p) => p.id === passageId);
    const question = passage?.questions.find(
      (q) => q.placeholderIndex === gapIndex
    );
    return question?.options[optionIndex]?.isCorrect === true;
  };

  const { correct, total } = showResult ? getScore() : { correct: 0, total: 0 };

  return (
    <div className="h-full space-y-6 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Text Completion Practice</h1>
          <p className="text-muted-foreground">
            Complete all {passages.length} passages
          </p>
        </div>
        {showResult && (
          <div className="text-right">
            <div className="text-3xl font-bold">
              {correct}/{total}
            </div>
            <div className="text-sm text-muted-foreground">
              {Math.round((correct / total) * 100)}% Correct
            </div>
          </div>
        )}
      </div>

      {/* Passages List */}
      <div className="grid grid-cols-1 gap-6">
        {passages.map((passage, passageIndex) => (
          <PassageExerciseCard
            key={passage.id}
            passage={passage}
            passageNumber={passageIndex + 1}
            level={level}
            userAnswers={userAnswers[passage.id] || {}}
            showResult={showResult}
            onSelectOption={(gapIndex, optionIndex) =>
              handleSelectOption(passage.id, gapIndex, optionIndex)
            }
            isAnswerCorrect={isAnswerCorrect}
          />
        ))}
      </div>

      <div className="py-4 mt-8">
        <div className="max-w-4xl mx-auto flex gap-4">
          {!showResult ? (
            <>
              <Button
                variant="outline"
                onClick={() => router.back()}
                className="flex-1"
              >
                Back
              </Button>
              <Button
                onClick={() => setShowResult(true)}
                disabled={!checkAllAnswered()}
                className="flex-1 font-bold"
                size="lg"
              >
                Check All Answers
              </Button>
            </>
          ) : (
            <Button
              onClick={() => router.back()}
              className="w-full font-bold"
              size="lg"
            >
              Finish Practice
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
