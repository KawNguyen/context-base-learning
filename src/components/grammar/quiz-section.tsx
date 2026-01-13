"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCcw, Languages } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { GrammarTopic } from "@/constants/grammarTopics";
import { questions as allQuestions } from "@/constants/quiz-question";
import { AnswerButton } from "../answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";

interface QuizSectionProps {
  topic: GrammarTopic;
}

export function QuizSection({ topic }: QuizSectionProps) {
  // Get all questions matching this topic category or topicId
  const topicQuestions = useMemo(() => {
    const flatQuestions = Object.values(allQuestions).flat();
    const filtered = flatQuestions.filter(
      (q) => q.topicId === topic.id || q.category === topic.title
    );
    return filtered;
  }, [topic]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    // Lazy initialization - only runs once on mount
    if (topicQuestions.length === 0) return 0;
    return Math.floor(Math.random() * topicQuestions.length);
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = topicQuestions[currentQuestionIndex];

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

  const isCorrect =
    selectedOption !== null &&
    currentQuestion.options[selectedOption].isCorrect;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Quick Quiz</h3>
            {currentQuestion.questionType && (
              <Badge
                variant="secondary"
                className="text-[10px] uppercase tracking-wider h-5"
              >
                {currentQuestion.questionType}
              </Badge>
            )}
          </div>
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
            <AnswerButton
              key={`${currentQuestionIndex}-${index}`}
              isSelected={selectedOption === index}
              isCorrect={option.isCorrect}
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
            {currentQuestion.explanationVi}
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
