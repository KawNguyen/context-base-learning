"use client";

import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, RefreshCcw, Languages } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { GrammarTopic } from "@/constants/grammarTopics";
import { questions as allQuestions } from "@/constants/quizQuestions";

interface QuizSectionProps {
  topic: GrammarTopic;
}

export function QuizSection({ topic }: QuizSectionProps) {
  // Get all questions matching this topic category
  const topicQuestions = useMemo(() => {
    const flatQuestions = Object.values(allQuestions).flat();
    const filtered = flatQuestions.filter((q) => q.category === topic.title);
    return filtered;
  }, [topic]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = topicQuestions[currentQuestionIndex];

  // Initialize with a random question
  useEffect(() => {
    if (topicQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * topicQuestions.length);
      setCurrentQuestionIndex(randomIndex);
    }
  }, [topicQuestions]);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || !currentQuestion) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    if (topicQuestions.length > 1) {
      // Pick a different random question
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * topicQuestions.length);
      } while (nextIndex === currentQuestionIndex);
      setCurrentQuestionIndex(nextIndex);
    }
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  if (!currentQuestion) {
    return (
      <div className="p-8 text-center border border-dashed rounded-xl border-white/10">
        <p className="text-muted-foreground italic">
          No quiz available for this topic yet.
        </p>
      </div>
    );
  }

  const isCorrect = selectedOption === currentQuestion.correct;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Quick Quiz</h3>
          {topicQuestions.length > 1 && (
            <span className="text-xs text-muted-foreground">
              Question {currentQuestionIndex + 1} of {topicQuestions.length}
            </span>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-foreground/90 font-medium leading-relaxed">
              {currentQuestion.questionEn}
            </p>
            {currentQuestion.questionVi && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    aria-label="Hiển thị dịch"
                    className="p-1 rounded-md hover:bg-white/5"
                  >
                    <Languages className="w-4 h-4 text-muted-foreground" />
                  </button>
                </TooltipTrigger>
                <TooltipContent sideOffset={6} side="top" className="max-w-xs">
                  <span className="text-sm italic">
                    {currentQuestion.questionVi}
                  </span>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        <div className="grid gap-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={`${currentQuestionIndex}-${index}`}
              onClick={() => handleOptionSelect(index)}
              disabled={isSubmitted}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between",
                selectedOption === index
                  ? "border-primary bg-primary/10"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5",
                isSubmitted &&
                  index === currentQuestion.correct &&
                  "border-green-500 bg-green-500/10",
                isSubmitted &&
                  selectedOption === index &&
                  index !== currentQuestion.correct &&
                  "border-red-500 bg-red-500/10",
                isSubmitted &&
                  index !== currentQuestion.correct &&
                  index !== selectedOption &&
                  "opacity-50",
              )}
            >
              <span>{option}</span>
              {isSubmitted && index === currentQuestion.correct && (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              )}
              {isSubmitted &&
                selectedOption === index &&
                index !== currentQuestion.correct && (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
            </button>
          ))}
        </div>
      </div>

      {!isSubmitted ? (
        <Button
          onClick={handleSubmit}
          disabled={selectedOption === null}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-xl text-base font-medium"
        >
          Check Answer
        </Button>
      ) : (
        <div className="space-y-4">
          <Alert
            className={cn(
              "border-2",
              isCorrect
                ? "border-green-500/50 bg-green-500/5"
                : "border-red-500/50 bg-red-500/5",
            )}
          >
            {isCorrect ? (
              <CheckCircle2 className="w-5 h-5 text-green-500" />
            ) : (
              <XCircle className="w-5 h-5 text-red-500" />
            )}
            <AlertTitle
              className={isCorrect ? "text-green-500" : "text-red-500"}
            >
              {isCorrect ? "Correct!" : "Incorrect"}
            </AlertTitle>
            <AlertDescription className="text-muted-foreground mt-1">
              <p>{currentQuestion.explanationVi}</p>
            </AlertDescription>
          </Alert>
          <Button
            variant="outline"
            onClick={handleReset}
            className="w-full h-12 rounded-xl border-white/10 hover:bg-white/5 bg-transparent"
          >
            <RefreshCcw className="mr-2 h-4 w-4" /> Try Another
          </Button>
        </div>
      )}
    </div>
  );
}
