"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, Languages, Loader2 } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { GrammarTopic } from "@/constants/grammarTopics";
import { Question, Option } from "@/constants/quiz-question/types";
import { AnswerButton } from "../answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";

interface QuizSectionProps {
  topic: GrammarTopic;
}

interface QuizQuestion extends Omit<Question, "options"> {
  options: Option[];
  correctIndex: number;
  totalQuestions: number;
}

export function QuizSection({ topic }: QuizSectionProps) {
  const [question, setQuestion] = useState<QuizQuestion | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fetch random question from API
  const fetchQuestion = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/grammar/${topic.id}/random`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch question");
      }

      const data = await response.json();
      setQuestion(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch question on mount
  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic.id, topic.title]);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null || !question) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    fetchQuestion(); // Fetch new random question
  };

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <Loader2 className="w-6 h-6 mx-auto mb-2 animate-spin text-muted-foreground" />
        <p className="text-muted-foreground italic">Loading question...</p>
      </div>
    );
  }

  if (error || !question) {
    return (
      <div className="p-8 text-center ">
        <p className="text-muted-foreground italic">
          {/* {error || "No quiz available for this topic yet."} */}
          No quiz available for this topic yet.
        </p>
      </div>
    );
  }

  const isCorrect =
    selectedOption !== null && selectedOption === question.correctIndex;

  return (
    <div className="space-y-6 ">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Quick Quiz</h3>
            {question.questionType && (
              <Badge
                variant="secondary"
                className="text-[10px] uppercase tracking-wider h-5"
              >
                {question.questionType}
              </Badge>
            )}
          </div>
          {question.totalQuestions > 1 && (
            <span className="text-xs text-muted-foreground">
              {question.totalQuestions} questions available
            </span>
          )}
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <p className="text-foreground/90 font-medium leading-relaxed">
              {question.questionEn}
            </p>
            {question.questionVi && (
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
                  <span className="text-sm italic">{question.questionVi}</span>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>

        <div className="grid gap-3">
          {question.options.map((option, index) => (
            <AnswerButton
              key={`${question.id}-${index}`}
              isSelected={selectedOption === index}
              isCorrect={index === question.correctIndex}
              isSubmitted={isSubmitted}
              onClick={() => handleOptionSelect(index)}
              variant="standard"
              className="p-4 rounded-xl"
            >
              {option.option}
            </AnswerButton>
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
          <ExplanationAlert isCorrect={isCorrect}>
            {question.explanationVi}
          </ExplanationAlert>
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
