"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { AnswerButton } from "@/components/answer-button";
import { QuizBottomBar } from "@/components/ui/quiz-header";
import { CEFRLevel } from "@/types";
import Image from "next/image";
import { Part7Types } from "@/constants/700toeic/part7/type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Part7({
  testSlug,
  passageType,
}: {
  testSlug: string;
  passageType: string;
}) {
  const [passages, setPassages] = useState<Part7Types[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/700-toeic/${testSlug}/part-7/${passageType}`,
        );

        if (!res.ok) throw new Error("Failed to fetch part7 passages");

        const data: Part7Types[] = await res.json();
        setPassages(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [testSlug, passageType]);

  const handleSelect = (questionId: number, optionLabel: string) => {
    if (isSubmitted) return;

    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionLabel,
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
      const res = await fetch(`/api/700-toeic/${testSlug}/part-7`);

      if (res.ok) {
        const data: Part7Types[] = await res.json();
        setPassages(data);
      }
    } catch (error) {
      console.error(error);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = passages.reduce((acc, passage) => {
    const correctCount = passage.questions.filter((q) => {
      const selectedLabel = selectedAnswers[q.id];
      const opt = q.options.find((o) => o.label === selectedLabel);
      return selectedLabel !== undefined && opt?.isCorrect;
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
            className={`p-2 border-2 bg-primary-foreground`}
          >
            <div className="grid lg:grid-cols-2 gap-6 items-start">
              <Carousel className="w-full">
                <CarouselContent className="w-full">
                  {(Array.isArray(passage.image)
                    ? passage.image
                    : [passage.image]
                  ).map((img, imgIndex) => (
                    <CarouselItem
                      key={imgIndex}
                      className="w-full flex items-center justify-center"
                    >
                      <Image
                        key={imgIndex}
                        src={img.startsWith("/") ? img : `/${img}`}
                        alt={`Passage Image ${imgIndex + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="grid grid-cols-1 gap-4 h-fit sticky top-6">
                <Carousel className="w-full">
                  <CarouselContent className="w-full">
                    {passage.questions.map((q) => {
                      const selectedLabel = selectedAnswers[q.id];
                      const isAnswered = selectedLabel !== undefined;

                      return (
                        <CarouselItem
                          key={q.id}
                          className={`flex flex-col p-4 rounded-lg ${isAnswered ? "bg-muted" : "bg-primary-foreground"}`}
                        >
                          <span className="font-semibold text-lg">
                            {q.id}. {q.questionText}
                          </span>

                          <div className="grid gap-2">
                            {q.options.map((opt) => {
                              const isSelected = selectedLabel === opt.label;
                              const isCorrectOption = opt.isCorrect;

                              return (
                                <AnswerButton
                                  key={`${q.id}-${opt.label}`}
                                  label={opt.label}
                                  isSelected={isSelected}
                                  isCorrect={isCorrectOption}
                                  isSubmitted={isSubmitted}
                                  onClick={() => handleSelect(q.id, opt.label)}
                                  variant="standard"
                                >
                                  {opt.text}
                                </AnswerButton>
                              );
                            })}
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                </Carousel>
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
