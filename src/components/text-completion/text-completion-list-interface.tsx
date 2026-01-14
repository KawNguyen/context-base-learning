"use client";

import { useState, useEffect } from "react";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { PassageExerciseCard } from "./passage-exercise-card";
import { QuizHeader } from "@/components/ui/quiz-header";
import { TextCompletionSkeleton } from "@/components/skeletons";

interface TextCompletionListInterfaceProps {
  level: CEFRLevel;
}

export function TextCompletionListInterface({
  level,
}: TextCompletionListInterfaceProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [passages, setPassages] = useState<TextCompletionPassage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch passages from API
  useEffect(() => {
    const fetchPassages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/text-completion/${level}`);
        if (!response.ok) throw new Error("Failed to fetch passages");
        const data = await response.json();
        // Take first 5 passages
        const items = data.passages.slice(0, 5);
        setPassages(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPassages();
  }, [level]);

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

  const getScore = () => {
    let correct = 0;
    let total = 0;

    passages.forEach((passage) => {
      passage.questions.forEach((question) => {
        total++;
        const userAnswer = userAnswers[passage.id]?.[question.placeholderIndex];
        // Use correctIndex from API
        if (
          userAnswer !== undefined &&
          userAnswer ===
            (question as unknown as { correctIndex: number }).correctIndex
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
    // Use correctIndex from API
    return (
      optionIndex ===
      (question as unknown as { correctIndex: number })?.correctIndex
    );
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
    0
  );
  const progress =
    isLoading || totalQuestions === 0
      ? 0
      : (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <QuizHeader
        title=" Practice - Text Completion"
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

      {isLoading ? (
        <TextCompletionSkeleton />
      ) : error ? (
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}
