"use client";

import { useState } from "react";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { PassageExerciseCard } from "./passage-exercise-card";
import { QuizHeader } from "@/components/ui/quiz-header";

interface TextCompletionListInterfaceProps {
  passages: TextCompletionPassage[];
  level: CEFRLevel;
}

export function TextCompletionListInterface({
  passages,
  level,
}: TextCompletionListInterfaceProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [userAnswers, setUserAnswers] = useState<
    Record<string, Record<number, number>>
  >({}); // passageId -> { gapIndex -> optionIndex }
  const [showResult, setShowResult] = useState(false);

  const handleSelectOption = (
    passageId: string,
    gapIndex: number,
    optionIndex: number,
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
    optionIndex: number,
  ) => {
    const passage = passages.find((p) => p.id === passageId);
    const question = passage?.questions.find(
      (q) => q.placeholderIndex === gapIndex,
    );
    return question?.options[optionIndex]?.isCorrect === true;
  };

  const handleSubmit = () => {
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    router.refresh();
  };

  const handleBack = () => {
    router.push(`/text-completion/${levelSlug}`);
  };

  const { correct } = getScore();
  let answeredCount = 0;
  passages.forEach((passage) => {
    const passageAnswers = userAnswers[passage.id] || {};
    answeredCount += Object.keys(passageAnswers).length;
  });

  const totalQuestions = passages.reduce(
    (sum, p) => sum + p.questions.length,
    0,
  );
  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <QuizHeader
        title="TOEIC Practice - Text Completion"
        subtitle={`Random ${passages.length} Passages`}
        level={level}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        progress={progress}
        score={correct}
        isSubmitted={showResult}
        onSubmit={handleSubmit}
        onReset={handleReset}
        onBack={handleBack}
      />

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
    </div>
  );
}
