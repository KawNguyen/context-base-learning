"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnswerButton } from "@/components/answer-button";
import { QuizBottomBar } from "@/components/ui/quiz-header";
import { CEFRLevel } from "@/types";
import { Part5Type } from "@/constants/700toeic/part5";

export function Part5({ testSlug }: { testSlug: string }) {
  const [questions, setQuestions] = useState<Part5Type[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`/api/700-toeic/${testSlug}/part-5`);

        if (!res.ok) {
          throw new Error("Failed to fetch questions");
        }

        const data: Part5Type[] = await res.json();

        setQuestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [testSlug]);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = async () => {
    setSelectedAnswers({});
    setIsSubmitted(false);

    try {
      const res = await fetch(`/api/700-toeic/${testSlug}/part-5`);

      if (res.ok) {
        const data: Part5Type[] = await res.json();
        setQuestions(data);
      }
    } catch (error) {
      console.error(error);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = questions.filter((question) => {
    const selected = selectedAnswers[question.id];

    return selected !== undefined && question.options[selected]?.isCorrect;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;

  const progress = questions.length
    ? (answeredCount / questions.length) * 100
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-24">
        {questions.map((question, qIdx) => {
          const selected = selectedAnswers[question.id];

          const isAnswered = selected !== undefined;

          const correctIndex = question.options.findIndex((o) => o.isCorrect);

          return (
            <Card
              key={question.id}
              className={`p-6 border-2 ${
                isAnswered ? "bg-muted" : "bg-primary-foreground"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-muted-foreground">
                  Q{qIdx + 1}
                </span>

                {isAnswered && !isSubmitted && (
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    Answered
                  </span>
                )}
              </div>

              <div className="mb-4">
                <p className="text-base font-medium leading-relaxed">
                  {question.question}
                </p>
              </div>

              <div className="grid gap-2 mb-4">
                {question.options.map((opt, optIdx) => {
                  const isSelected = selected === optIdx;
                  const isCorrectOption = optIdx === correctIndex;

                  return (
                    <AnswerButton
                      key={`${question.id}-${optIdx}`}
                      label={`${String.fromCharCode(65 + optIdx)}.`}
                      isSelected={isSelected}
                      isCorrect={isCorrectOption}
                      isSubmitted={isSubmitted}
                      onClick={() => handleSelect(question.id, optIdx)}
                      variant="standard"
                    >
                      {opt.option}
                    </AnswerButton>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>

      <QuizBottomBar
        level={"A1" as CEFRLevel}
        answeredCount={answeredCount}
        totalQuestions={questions.length}
        progress={progress}
        score={score}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={reset}
        onBack={() => window.history.back()}
      />
    </div>
  );
}
