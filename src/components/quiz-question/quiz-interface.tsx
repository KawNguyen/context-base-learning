"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Home,
  Info,
  Trophy,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import questions from "@/constants/quizQuestions";
import { useRouter } from "next/navigation";

interface QuizInterfaceProps {
  level: string;
}

export function QuizInterface({ level }: QuizInterfaceProps) {
  const levelQuestions = questions[level as keyof typeof questions] || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const currentQuestion = levelQuestions[currentIndex];
  const progress = ((currentIndex + 1) / levelQuestions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheck = () => {
    if (selectedOption === null) return;
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < levelQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
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
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6 animate-in fade-in zoom-in duration-500">
        <Card className="text-center p-8 border-2 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-primary/10 rounded-full">
              <Trophy size={64} className="text-primary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            You scored {score} out of {levelQuestions.length} in Level {level}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Accuracy</p>
              <p className="text-2xl font-bold">
                {Math.round((score / levelQuestions.length) * 100)}%
              </p>
            </div>
            <div className="p-4 bg-muted rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Questions</p>
              <p className="text-2xl font-bold">{levelQuestions.length}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 h-12 text-lg bg-transparent"
            >
              <Home className="mr-2" size={20} /> Home
            </Button>
            <Button className="flex-1 h-12 text-lg" onClick={resetQuiz}>
              <RotateCcw className="mr-2" size={20} /> Retry
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <Button
          variant="secondary"
          className="hover:bg-primary/5"
          onClick={() => router.push("/quiz")}
        >
          <ArrowRight className="rotate-180 mr-2" size={18} /> Exit Quiz
        </Button>
        <div className="text-right">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Level {level}
          </span>
          <p className="text-xs text-muted-foreground">
            {currentIndex + 1} of {levelQuestions.length}
          </p>
        </div>
      </div>

      <Progress value={progress} className="h-3 rounded-full" />

      <Card className="border-2 shadow-xl overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl md:text-2xl font-bold leading-tight">
            {currentQuestion.questionEn.split("____").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="inline-block min-w-30 border-b-4 border-primary mx-2 px-2 text-primary italic text-center">
                    {isAnswered
                      ? currentQuestion.options[currentQuestion.correct]
                      : "_ _ _ _ _ _ _"}
                  </span>
                )}
              </span>
            ))}
          </CardTitle>
          <p className="text-muted-foreground mt-4 italic">
            &quot;{currentQuestion.questionVi}&quot;
          </p>
        </CardHeader>

        <CardContent className="p-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => {
              const isCorrect = isAnswered && index === currentQuestion.correct;
              const isWrong =
                isAnswered &&
                index === selectedOption &&
                index !== currentQuestion.correct;
              const isSelected = selectedOption === index;

              return (
                <Button
                  key={index}
                  variant={
                    !isSelected
                      ? "default"
                      : isCorrect
                      ? "success"
                      : isWrong
                      ? "destructive"
                      : "secondary"
                  }
                  type="button"
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className="flex justify-between items-center p-6 border-2"
                >
                  <div>
                    <span className="text-xl">
                      {String.fromCharCode(65 + index)}.
                    </span>{" "}
                    <span className="text-lg font-medium">{option}</span>
                  </div>
                  {isCorrect && (
                    <CheckCircle2 className="text-green-600 size-6" />
                  )}
                  {isWrong && <XCircle className="text-destructive size-6" />}
                </Button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-8 animate-in slide-in-from-bottom-4 duration-300">
              <Alert
                className={cn(
                  "border-l-4",
                  selectedOption === currentQuestion.correct
                    ? "border-l-green-500 "
                    : "border-l-destructive bg-destructive/5"
                )}
              >
                <AlertTitle
                  className={`font-bold text-lg mb-2 flex items-center gap-2 ${
                    selectedOption === currentQuestion.correct
                      ? "text-green-500"
                      : "text-destructive"
                  }`}
                >
                  <Info className="h-5 w-5" />
                  {selectedOption === currentQuestion.correct
                    ? "Correct Answer!"
                    : "Not quite right..."}
                </AlertTitle>
                <AlertDescription className="text-base">
                  {currentQuestion.explanationVi}
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>

        <CardFooter className=" flex justify-end gap-4">
          {!isAnswered ? (
            <Button
              size="lg"
              className="px-12 h-14 text-lg font-bold rounded-xl"
              disabled={selectedOption === null}
              onClick={handleCheck}
            >
              Check Answer
            </Button>
          ) : (
            <Button
              size="lg"
              className="px-12 h-14 text-lg font-bold rounded-xl"
              onClick={handleNext}
            >
              {currentIndex < levelQuestions.length - 1
                ? "Next Question"
                : "View Results"}
              <ArrowRight className="ml-2" size={20} />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
