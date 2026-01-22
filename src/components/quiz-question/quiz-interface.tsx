"use client";

import { useState, useEffect } from "react";
import { CEFRLevel } from "@/types";
import { Question } from "@/constants/quiz-question/types";
import { QuizCard } from "./quiz-card";
import { QuizSkeleton } from "@/components/skeletons";
import { useRouter } from "next/navigation";
import { QuizBottomBar } from "../ui/quiz-header";

interface QuizInterfaceProps {
  level: CEFRLevel;
}

export function QuizInterface({ level }: QuizInterfaceProps) {
  const [levelQuestions, setLevelQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();

  // Fetch questions from API
  const fetchQuestions = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/quiz/${level}`);
      if (!response.ok) {
        throw new Error("Failed to fetch questions");
      }
      const data = await response.json();
      // Take first 50 questions
      const questions = data.questions.slice(0, 50);
      setLevelQuestions(questions);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchQuestions();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

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

  // Tính điểm - sử dụng isCorrect từ property của option
  const score = Object.entries(selectedAnswers).filter(([qIdx, optIdx]) => {
    const question = levelQuestions[Number(qIdx)];
    return question?.options?.[optIdx]?.isCorrect;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = isLoading
    ? 0
    : (answeredCount / levelQuestions.length) * 100;

  return (
    <div className="space-y-6">
      {isLoading ? (
        <QuizSkeleton />
      ) : error ? (
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-24">
            {levelQuestions.map((question, qIdx) => (
              <QuizCard
                key={qIdx}
                question={question}
                questionIndex={qIdx}
                selectedOption={selectedAnswers[qIdx]}
                isSubmitted={isSubmitted}
                onSelectOption={(optIdx) => handleOptionSelect(qIdx, optIdx)}
              />
            ))}
          </div>
        </>
      )}
      <QuizBottomBar
        level={level}
        answeredCount={answeredCount}
        totalQuestions={isLoading ? 0 : levelQuestions.length}
        progress={progress}
        score={score}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={resetQuiz}
        onBack={() => router.push(`/quiz/${level}`)}
      />
    </div>
  );
}
