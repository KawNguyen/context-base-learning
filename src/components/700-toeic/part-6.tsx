"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnswerButton } from "@/components/answer-button";
import { QuizBottomBar } from "@/components/ui/quiz-header";
import { CEFRLevel } from "@/types";
import Image from "next/image";
import { Part6Types } from "@/constants/700toeic/part6";

export function Part6({ testSlug }: { testSlug: string }) {
  const [passages, setPassages] = useState<Part6Types[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/700-toeic/${testSlug}/part-6`);

        if (!res.ok) throw new Error("Failed to fetch part6 passages");

        const data: Part6Types[] = await res.json();
        setPassages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [testSlug]);

  const handleSelect = (questionId: string, optionIndex: number) => {
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
      const res = await fetch(`/api/700-toeic/${testSlug}/part-6`);

      if (res.ok) {
        const data: Part6Types[] = await res.json();
        setPassages(data);
      }
    } catch (error) {
      console.error(error);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = passages.reduce((acc, passage) => {
    const correctCount = passage.questions.filter((q) => {
      const selected = selectedAnswers[q.id];
      return selected !== undefined && q.options[selected]?.isCorrect;
    }).length;

    return acc + correctCount;
  }, 0);

  const totalQuestions = passages.reduce(
    (acc, p) => acc + p.questions.length,
    0,
  );

  const answeredCount = Object.keys(selectedAnswers).length;

  const progress = totalQuestions ? (answeredCount / totalQuestions) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="grid gap-6">
        {passages.map((passage) => (
          <Card
            key={passage.id}
            className={`p-6 border-2 bg-primary-foreground`}
          >
            <div className="grid lg:grid-row-2 gap-6">
              <div className="flex justify-center items-center">
                <Image
                  src={passage.image}
                  alt={passage.id}
                  className="max-w-full h-auto object-contain"
                  width={600}
                  height={400}
                  priority
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {passage.questions.map((q) => {
                  const selected = selectedAnswers[q.id];
                  const isAnswered = selected !== undefined;
                  const correctIndex = q.options.findIndex((o) => o.isCorrect);

                  return (
                    <div
                      key={q.id}
                      className={`p-4 border rounded-lg ${isAnswered ? "bg-muted" : "bg-primary-foreground"}`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold">
                          Gap {q.placeholderIndex}
                        </span>
                      </div>

                      <div className="grid gap-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selected === optIdx;
                          const isCorrectOption = optIdx === correctIndex;

                          return (
                            <AnswerButton
                              key={`${q.id}-${optIdx}`}
                              label={`${String.fromCharCode(65 + optIdx)}.`}
                              isSelected={isSelected}
                              isCorrect={isCorrectOption}
                              isSubmitted={isSubmitted}
                              onClick={() => handleSelect(q.id, optIdx)}
                              variant="standard"
                            >
                              {opt.option}
                            </AnswerButton>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <QuizBottomBar
        level={"A1" as CEFRLevel}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
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
