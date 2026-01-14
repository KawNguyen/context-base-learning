"use client";

import { useState, useEffect } from "react";
import { CEFRLevel } from "@/types";
import { Question } from "@/constants/quiz-question/types";
import { QuizHeader } from "./quiz-header";
import { QuizCard } from "./quiz-card";
import { QuizSummary } from "./quiz-summary";
import { QuizSkeleton } from "@/components/skeletons";

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

  // Tính điểm - sử dụng correctIndex từ API
  const score = Object.entries(selectedAnswers).filter(([qIdx, optIdx]) => {
    const question = levelQuestions[Number(qIdx)] as unknown as {
      correctIndex: number;
    };
    return optIdx === question.correctIndex;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = isLoading
    ? 0
    : (answeredCount / levelQuestions.length) * 100;

  return (
    <div className="space-y-6">
      <QuizHeader
        level={level}
        answeredCount={answeredCount}
        totalQuestions={isLoading ? 0 : levelQuestions.length}
        progress={progress}
        score={score}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={resetQuiz}
      />

      {isLoading ? (
        <QuizSkeleton />
      ) : error ? (
        <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
          <p className="text-red-500">{error}</p>
        </div>
      ) : (
        <>
          {/* Grid hiển thị tất cả câu hỏi */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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

          {/* Summary khi đã submit */}
          {isSubmitted && (
            <QuizSummary score={score} totalQuestions={levelQuestions.length} />
          )}
        </>
      )}
    </div>
  );
}
