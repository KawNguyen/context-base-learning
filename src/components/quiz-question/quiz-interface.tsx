"use client";

import { useState, useMemo } from "react";
import { shuffleArray } from "@/lib/utils";
import questions from "@/constants/quiz-question";
import { CEFRLevel } from "@/types";
import { QuizHeader } from "./quiz-header";
import { QuizCard } from "./quiz-card";
import { QuizSummary } from "./quiz-summary";

interface QuizInterfaceProps {
  level: CEFRLevel;
}

export function QuizInterface({ level }: QuizInterfaceProps) {
  // Random 50 câu hỏi
  const levelQuestions = useMemo(() => {
    const allQuestions = questions[level as keyof typeof questions] || [];
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, Math.min(50, allQuestions.length));
  }, [level]);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  // Tính điểm
  const score = Object.entries(selectedAnswers).filter(([qIdx, optIdx]) => {
    const question = levelQuestions[Number(qIdx)];
    return question.options[optIdx].isCorrect;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = (answeredCount / levelQuestions.length) * 100;

  return (
    <div className="space-y-6">
      <QuizHeader
        level={level}
        answeredCount={answeredCount}
        totalQuestions={levelQuestions.length}
        progress={progress}
        score={score}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={resetQuiz}
      />

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
    </div>
  );
}
