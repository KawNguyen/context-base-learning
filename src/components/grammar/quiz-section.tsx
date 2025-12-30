"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle, RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { GrammarTopic } from "@/constants/grammarTopics";

interface QuizSectionProps {
  topic: GrammarTopic;
}

export function QuizSection({ topic }: QuizSectionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const isCorrect = selectedOption === topic.exercise.correct;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Quick Quiz</h3>
        <p className="text-foreground/90 font-medium leading-relaxed">
          {topic.exercise.question}
        </p>

        <div className="grid gap-3">
          {topic.exercise.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isSubmitted}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between",
                selectedOption === index
                  ? "border-primary bg-primary/10"
                  : "border-white/10 hover:border-white/20 hover:bg-white/5",
                isSubmitted &&
                  index === topic.exercise.correct &&
                  "border-green-500 bg-green-500/10",
                isSubmitted &&
                  selectedOption === index &&
                  index !== topic.exercise.correct &&
                  "border-red-500 bg-red-500/10",
                isSubmitted &&
                  index !== topic.exercise.correct &&
                  index !== selectedOption &&
                  "opacity-50"
              )}
            >
              <span>{option}</span>
              {isSubmitted && index === topic.exercise.correct && (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              )}
              {isSubmitted &&
                selectedOption === index &&
                index !== topic.exercise.correct && (
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
                : "border-red-500/50 bg-red-500/5"
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
              <p>{topic.exercise.explanation}</p>
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
