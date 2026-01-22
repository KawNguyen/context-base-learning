"use client";

import { useState, useEffect } from "react";
import { QuestionResponseExercise } from "@/constants/question-response/types";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { QuizBottomBar } from "../ui/quiz-header";
import { Card, CardContent } from "../ui/card";
import { QuestionResponseCard } from "./question-response-card";
import { QuestionResponseSkeleton } from "../skeletons";

interface QuestionResponseRandomQuizProps {
  level: CEFRLevel;
}

export function QuestionResponseRandomQuiz({
  level,
}: QuestionResponseRandomQuizProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [exercises, setExercises] = useState<QuestionResponseExercise[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch exercises from API
  useEffect(() => {
    const fetchExercises = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/question-response/${level}`);
        if (!response.ok) {
          throw new Error("Failed to fetch exercises");
        }
        const data = await response.json();
        // Take first 10 exercises
        const items = data.exercises.slice(0, 10);
        setExercises(items);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchExercises();
  }, [level]);

  // Track answers: Map<exerciseIndex, selectedOptionIndex>
  const [answers, setAnswers] = useState<Map<number, number>>(new Map());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (exerciseIdx: number, optionIdx: number) => {
    if (isSubmitted) return;

    setAnswers((prev) => {
      const newAnswers = new Map(prev);
      newAnswers.set(exerciseIdx, optionIdx);
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

  const handleBack = () => {
    router.push(`/question-response/${levelSlug}`);
  };

  // Calculate statistics
  const totalQuestions = exercises.length;
  const answeredCount = answers.size;
  let correctCount = 0;

  answers.forEach((optionIdx, exerciseIdx) => {
    const exercise = exercises[exerciseIdx];
    if (exercise?.transcript?.responses[optionIdx]?.isCorrect) {
      correctCount++;
    }
  });

  const progress =
    isLoading || totalQuestions === 0
      ? 0
      : (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <QuizBottomBar
        level={level}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        progress={progress}
        score={correctCount}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={handleReset}
        onBack={handleBack}
      />

      {isLoading ? (
        <QuestionResponseSkeleton />
      ) : error ? (
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* All Exercises */}
          <div className="space-y-6">
            {exercises.map((exercise, idx) => (
              <QuestionResponseCard
                key={idx}
                exercise={exercise}
                exerciseIndex={idx}
                selectedOption={answers.get(idx)}
                isSubmitted={isSubmitted}
                onAnswerSelect={(optionIdx) =>
                  handleAnswerSelect(idx, optionIdx)
                }
              />
            ))}
          </div>

          {/* Summary */}
          {isSubmitted && (
            <Card className="border-primary/20 bg-card/50">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">
                    Score: {correctCount} / {totalQuestions}
                  </h3>
                  <p className="text-muted-foreground">
                    {Math.round((correctCount / totalQuestions) * 100)}% Correct
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
