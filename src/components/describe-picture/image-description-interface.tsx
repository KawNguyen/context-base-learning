"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Info, Square, Play } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { imageQuestions } from "@/constants/describe-picture";
import { PhotoCard } from "./photo-card";
import { OptionButton } from "./option-button";
import { ResultView } from "./result-view";

interface ImageDescriptionInterfaceProps {
  initialIndex?: number;
}

export function ImageDescriptionInterface({
  initialIndex = 0,
}: ImageDescriptionInterfaceProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // TTS State
  const [currentReadingIndex, setCurrentReadingIndex] = useState<number | null>(
    null,
  );
  const [isReading, setIsReading] = useState(false);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const currentQuestion = imageQuestions[currentIndex];
  const progress = ((currentIndex + 1) / imageQuestions.length) * 100;

  // Shuffle options mỗi khi câu hỏi thay đổi
  const { shuffledOptions, correctIndex } = useMemo(() => {
    const options = currentQuestion.options.map((opt, idx) => ({
      ...opt,
      originalIndex: idx,
    }));
    const shuffled = shuffleArray(options);
    const correctIdx = shuffled.findIndex((opt) => opt.isCorrect);
    return { shuffledOptions: shuffled, correctIndex: correctIdx };
  }, [currentQuestion.options]);

  useEffect(() => {
    synthesisRef.current = window.speechSynthesis;
    return () => {
      synthesisRef.current?.cancel();
    };
  }, []);

  const stopReading = useCallback(() => {
    synthesisRef.current?.cancel();
    setIsReading(false);
    setCurrentReadingIndex(null);
  }, []);

  const startReading = useCallback(() => {
    if (!synthesisRef.current || !currentQuestion) return;

    stopReading();
    setIsReading(true);

    let index = 0;
    const readNext = () => {
      if (index >= 4) {
        setIsReading(false);
        setCurrentReadingIndex(null);
        return;
      }

      setCurrentReadingIndex(index);
      const utterance = new SpeechSynthesisUtterance(
        `Option ${String.fromCharCode(65 + index)}: ${
          shuffledOptions[index].option
        }`,
      );
      utterance.lang = "en-US";
      utterance.rate = 0.9;

      utterance.onend = () => {
        index++;
        readNext();
      };

      utterance.onerror = () => {
        setIsReading(false);
        setCurrentReadingIndex(null);
      };

      utteranceRef.current = utterance;
      synthesisRef.current?.speak(utterance);
    };

    readNext();
  }, [currentQuestion, shuffledOptions, stopReading]);

  // Read automatically on question load
  useEffect(() => {
    if (!showResult && !isAnswered) {
      const timer = setTimeout(() => {
        startReading();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, showResult, isAnswered, startReading]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    stopReading();
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < imageQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsReading(false);
      setCurrentReadingIndex(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setIsReading(false);
    setCurrentReadingIndex(null);
  };

  if (showResult) {
    return (
      <ResultView
        score={score}
        total={imageQuestions.length}
        onReset={resetQuiz}
      />
    );
  }

  return (
    <div className="space-y-8 max-w-full mx-auto px-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={isReading ? stopReading : startReading}
            className={cn(
              "gap-2 min-w-30",
              isReading && "text-primary border-primary",
            )}
          >
            {isReading ? (
              <Square size={16} fill="currentColor" />
            ) : (
              <Play size={16} fill="currentColor" />
            )}
            {isReading ? "Stop Audio" : "Play Audio"}
          </Button>
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Photo {currentIndex + 1} of {imageQuestions.length}
        </p>
      </div>

      <Progress value={progress} className="h-2 rounded-full mb-8 shadow-sm" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <PhotoCard imageUrl={currentQuestion.imageUrl} />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {shuffledOptions.map((option, index) => (
              <OptionButton
                key={index}
                label={String.fromCharCode(65 + index)}
                option={option.option}
                index={index}
                isSelected={selectedOption === index}
                isAnswered={isAnswered}
                isCorrect={isAnswered && index === correctIndex}
                isWrong={
                  isAnswered &&
                  index === selectedOption &&
                  index !== correctIndex
                }
                isBeingRead={currentReadingIndex === index}
                onSelect={handleOptionSelect}
              />
            ))}
          </div>

          {isAnswered && (
            <div className="animate-in slide-in-from-bottom-2 fade-in duration-300">
              <Alert
                className={cn(
                  "border-l-4 shadow-sm",
                  selectedOption === correctIndex
                    ? "border-l-green-500 bg-green-50/20"
                    : "border-l-destructive bg-destructive/5",
                )}
              >
                <Info
                  className={cn(
                    "size-6 shrink-0 mt-0.5",
                    selectedOption === correctIndex
                      ? "text-green-500"
                      : "text-destructive",
                  )}
                />
                <div className="space-y-2">
                  <AlertTitle
                    className={cn(
                      "text-xl font-extrabold",
                      selectedOption === correctIndex
                        ? "text-green-600"
                        : "text-destructive",
                    )}
                  >
                    {selectedOption === correctIndex
                      ? "Excellent!"
                      : "Oops! Not quite."}
                  </AlertTitle>
                  <AlertDescription className="text-base text-card-foreground/80 font-medium leading-relaxed">
                    {currentQuestion.explanationVi}
                  </AlertDescription>
                </div>
              </Alert>
            </div>
          )}

          <div className="pt-4">
            {!isAnswered ? (
              <Button
                size="lg"
                className="w-full h-16 text-xl font-bold rounded-2xl shadow-lg transition-transform active:scale-95"
                disabled={selectedOption === null}
                onClick={handleCheck}
              >
                Submit Answer
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full h-16 text-xl font-bold rounded-2xl shadow-lg transition-transform active:scale-95"
                onClick={handleNext}
              >
                {currentIndex < imageQuestions.length - 1
                  ? "Next Photo"
                  : "View Results"}
                <ArrowRight className="ml-2" size={24} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
