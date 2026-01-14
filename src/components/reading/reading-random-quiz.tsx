"use client";

import { useState, useMemo } from "react";
import { ReadingPassage } from "@/constants/reading";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { shuffleArray } from "@/lib/utils";
import { QuizHeader } from "../ui/quiz-header";
import { ReadingCard } from "./reading-card";
import { ReadingSummary } from "./reading-summary";

interface ReadingRandomQuizProps {
  passages: ReadingPassage[];
  level: CEFRLevel;
}

export function ReadingRandomQuiz({ passages, level }: ReadingRandomQuizProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  // Randomly select 5 passages
  const randomPassages = useMemo(() => {
    const shuffled = shuffleArray(passages);
    return shuffled.slice(0, Math.min(5, passages.length));
  }, [passages]);

  // Track answers using Map for better performance
  const [answers, setAnswers] = useState<Map<number, Map<number, number>>>(
    new Map(),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (
    passageIdx: number,
    questionIdx: number,
    answerIdx: number,
  ) => {
    if (isSubmitted) return;

    setAnswers((prev) => {
      const newAnswers = new Map(prev);
      const passageAnswers = newAnswers.get(passageIdx) || new Map();
      passageAnswers.set(questionIdx, answerIdx);
      newAnswers.set(passageIdx, passageAnswers);
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    router.refresh();
  };

  const handleBackToReadings = () => {
    router.push(`/reading/${levelSlug}`);
  };

  // Calculate statistics
  const totalQuestions = randomPassages.reduce(
    (sum, p) => sum + p.questions.length,
    0,
  );

  let answeredCount = 0;
  let correctCount = 0;

  answers.forEach((passageAnswers, passageIdx) => {
    const passage = randomPassages[passageIdx];
    passageAnswers.forEach((answerIdx, questionIdx) => {
      answeredCount++;
      const question = passage.questions[questionIdx];
      const correctIndex = question.options.findIndex((opt) => opt.isCorrect);
      if (correctIndex === answerIdx) {
        correctCount++;
      }
    });
  });

  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <QuizHeader
        title="TOEIC Practice - Reading"
        subtitle="Random 5 Passages"
        level={level}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        progress={progress}
        score={correctCount}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={handleReset}
        onBack={handleBackToReadings}
      />

      {/* All Passages - Stacked vertically like real TOEIC */}
      <div className="space-y-6">
        {randomPassages.map((passage, passageIdx) => (
          <ReadingCard
            key={passageIdx}
            passage={passage}
            passageIndex={passageIdx}
            selectedAnswers={answers.get(passageIdx) || new Map()}
            isSubmitted={isSubmitted}
            onAnswerSelect={(questionIdx, answerIdx) =>
              handleAnswerSelect(passageIdx, questionIdx, answerIdx)
            }
          />
        ))}
      </div>

      {/* Summary */}
      {isSubmitted && (
        <ReadingSummary
          score={correctCount}
          totalQuestions={totalQuestions}
          totalPassages={randomPassages.length}
        />
      )}
    </div>
  );
}
