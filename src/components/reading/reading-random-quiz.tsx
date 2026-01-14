"use client";

import { useState, useEffect } from "react";
import { ReadingPassage } from "@/constants/reading/type";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { QuizHeader } from "../ui/quiz-header";
import { ReadingCard } from "./reading-card";
import { ReadingSummary } from "./reading-summary";
import { ReadingSkeleton } from "@/components/skeletons";

interface ReadingRandomQuizProps {
  level: CEFRLevel;
}

export function ReadingRandomQuiz({ level }: ReadingRandomQuizProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [randomPassages, setRandomPassages] = useState<ReadingPassage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch passages from API
  useEffect(() => {
    const fetchPassages = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/reading/${level}`);
        if (!response.ok) {
          throw new Error("Failed to fetch passages");
        }
        const data = await response.json();
        // Take first 5 passages
        const passages = data.passages.slice(0, 5);
        setRandomPassages(passages);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPassages();
  }, [level]);

  // Track answers using Map for better performance
  const [answers, setAnswers] = useState<Map<number, Map<number, number>>>(
    new Map()
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (
    passageIdx: number,
    questionIdx: number,
    answerIdx: number
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
    0
  );

  let answeredCount = 0;
  let correctCount = 0;

  answers.forEach((passageAnswers, passageIdx) => {
    const passage = randomPassages[passageIdx];
    passageAnswers.forEach((answerIdx, questionIdx) => {
      answeredCount++;
      const question = passage.questions[questionIdx] as unknown as {
        correctIndex: number;
      };
      // Use correctIndex from API
      const correctIndex = question.correctIndex;
      if (correctIndex === answerIdx) {
        correctCount++;
      }
    });
  });

  const progress =
    isLoading || totalQuestions === 0
      ? 0
      : (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <QuizHeader
        title=" Practice - Reading"
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

      {isLoading ? (
        <ReadingSkeleton />
      ) : error ? (
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* All Passages - Stacked vertically like real  */}
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
        </>
      )}
    </div>
  );
}
