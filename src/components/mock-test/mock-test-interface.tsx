"use client";

import { useState, useEffect } from "react";
import { MockExam } from "@/types/mock-exam";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuestionRenderer } from "./question-renderer";
import { ExamResultCard } from "./exam-result-card";
import { ExamHeader } from "./exam-header";
import { QuestionNavigation } from "./question-navigation";
import { cn } from "@/lib/utils";

interface MockTestInterfaceProps {
  exam: MockExam;
  onExit: () => void;
}

export function MockTestInterface({ exam, onExit }: MockTestInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [timeRemaining, setTimeRemaining] = useState(exam.timeLimit);
  const [status, setStatus] = useState<"testing" | "finished">("testing");
  const [showNav, setShowNav] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);

  // Timer logic
  useEffect(() => {
    if (status !== "testing") return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [status]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h + ":" : ""}${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswer = (answer: number | number[]) => {
    setAnswers((prev) => ({
      ...prev,
      [exam.questions[currentIndex].id]: answer,
    }));
  };

  const handleFinish = () => {
    setStatus("finished");
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentQuestion = exam.questions[currentIndex];
  const attemptedCount = Object.keys(answers).length;
  const progress = (attemptedCount / exam.questions.length) * 100;

  if (status === "finished") {
    // TOEIC scoring: separate Listening (Part 1-4) and Reading (Part 5-7)
    let listeningCorrect = 0;
    let listeningTotal = 0;
    let readingCorrect = 0;
    let readingTotal = 0;

    exam.questions.forEach((q) => {
      const userAns = answers[q.id];
      const isListening = q.part <= 4;

      if (q.part === 3 || q.part === 4 || q.part === 6 || q.part === 7) {
        // Passage based
        const questions = (
          q.data as {
            questions: Array<{ options: Array<{ isCorrect: boolean }> }>;
          }
        ).questions;
        questions.forEach((sq, sIdx: number) => {
          if (isListening) listeningTotal++;
          else readingTotal++;

          if (Array.isArray(userAns) && userAns[sIdx] !== undefined) {
            const selectedOptionIndex = userAns[sIdx];
            if (sq.options[selectedOptionIndex]) {
              const isCorrect = sq.options[selectedOptionIndex].isCorrect;
              if (isCorrect) {
                if (isListening) listeningCorrect++;
                else readingCorrect++;
              }
            }
          }
        });
      } else {
        if (isListening) listeningTotal++;
        else readingTotal++;

        if (typeof userAns === "number" && userAns !== undefined) {
          const options = (q.data as { options: Array<{ isCorrect: boolean }> })
            .options;
          if (options && Array.isArray(options) && options[userAns]) {
            const isCorrect = options[userAns].isCorrect;
            if (isCorrect) {
              if (isListening) listeningCorrect++;
              else readingCorrect++;
            }
          }
        }
      }
    });

    const totalQuestions = listeningTotal + readingTotal;
    const correct = listeningCorrect + readingCorrect;

    return (
      <ExamResultCard
        correct={correct}
        totalQuestions={totalQuestions}
        listeningCorrect={listeningCorrect}
        listeningTotal={listeningTotal}
        readingCorrect={readingCorrect}
        readingTotal={readingTotal}
        timeUsed={formatTime(exam.timeLimit - timeRemaining)}
        onReview={() => {
          setStatus("testing");
          setCurrentIndex(0);
          setIsReviewMode(true);
        }}
        onExit={() => {
          onExit();
          setIsReviewMode(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-20 pt-4">
      {/* Dynamic Header */}
      <ExamHeader
        timeRemaining={timeRemaining}
        progress={progress}
        showNav={showNav}
        onToggleNav={() => setShowNav(!showNav)}
        onFinish={handleFinish}
        formatTime={formatTime}
      />

      {/* Navigation Grid (Collapsible) */}
      {showNav && (
        <QuestionNavigation
          questions={exam.questions}
          currentIndex={currentIndex}
          answers={answers}
          onNavigate={(idx) => {
            setCurrentIndex(idx);
            setShowNav(false);
          }}
        />
      )}

      {/* Main Content Area */}
      <Card className="min-h-125 shadow-sm border-2">
        <CardHeader className="border-b bg-muted/10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Question {currentIndex + 1} of {exam.questions.length}
            </CardTitle>
            <Badge variant="outline" className="bg-background">
              Level {currentQuestion.level}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-10">
          <QuestionRenderer
            question={currentQuestion}
            userAnswer={answers[currentQuestion.id]}
            onAnswer={handleAnswer}
            reviewMode={isReviewMode}
          />
        </CardContent>
      </Card>

      {/* Control Footer */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="lg"
          className="h-14 px-8 font-black uppercase italic tracking-tighter"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          <ChevronLeft className="mr-2" />
          Previous
        </Button>

        <div className="hidden sm:flex gap-1">
          {/* Micro nav indicators */}
          {exam.questions
            .slice(Math.max(0, currentIndex - 2), currentIndex + 3)
            .map((_, idx) => {
              const actualIdx = Math.max(0, currentIndex - 2) + idx;
              return (
                <div
                  key={idx}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === actualIdx
                      ? "w-6 bg-primary"
                      : answers[exam.questions[actualIdx].id]
                      ? "bg-muted-foreground"
                      : "bg-muted"
                  )}
                />
              );
            })}
        </div>

        <Button
          size="lg"
          className="h-14 px-8 font-black uppercase italic tracking-tighter"
          onClick={() => {
            if (currentIndex < exam.questions.length - 1) {
              setCurrentIndex(currentIndex + 1);
            } else {
              handleFinish();
            }
          }}
        >
          {currentIndex === exam.questions.length - 1
            ? "Submit"
            : "Next Question"}
          <ChevronRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
