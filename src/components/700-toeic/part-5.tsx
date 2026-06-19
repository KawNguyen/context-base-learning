"use client";

import { useState } from "react";
import { part5, part5Type } from "@/constants/700toeic/part5";
import { Card } from "@/components/ui/card";
import { AnswerButton } from "@/components/answer-button";
import { QuizBottomBar } from "@/components/ui/quiz-header";
import { CEFRLevel } from "@/types";

export function Part5({ testSlug }: { testSlug: string }) {
  const questions = part5.filter((p) => p.testSlug === testSlug);

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = Object.entries(selectedAnswers).filter(([qIdx, optIdx]) => {
    const q = questions[Number(qIdx)];
    return q?.options?.[Number(optIdx)]?.isCorrect;
  }).length;

  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = questions.length
    ? (answeredCount / questions.length) * 100
    : 0;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-24">
        {questions.map((question: part5Type, qIdx) => {
          const selected = selectedAnswers[qIdx];
          const isAnswered = selected !== undefined;
          const correctIndex = question.options.findIndex((o) => o.isCorrect);

          return (
            <Card key={question.id} className="p-6 border-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-muted-foreground">
                    Q{qIdx + 1}
                  </span>
                </div>
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
                      key={optIdx}
                      label={`${String.fromCharCode(65 + optIdx)}.`}
                      isSelected={!!isSelected}
                      isCorrect={isCorrectOption}
                      isSubmitted={isSubmitted}
                      onClick={() => handleSelect(qIdx, optIdx)}
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
