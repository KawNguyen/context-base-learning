"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dialogues, CEFRLevel } from "@/constants/dialogues";
import { cn } from "@/lib/utils";
import { MessageSquare, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface DialogueInterfaceProps {
  level: string;
}

export function DialogueInterface({
  level: paramLevel,
}: DialogueInterfaceProps) {
  const validLevels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const level = validLevels.includes(paramLevel as CEFRLevel)
    ? (paramLevel as CEFRLevel)
    : null;

  const router = useRouter();
  const [selectedDialogue, setSelectedDialogue] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (!level) {
      router.push("/dialogue");
    }
  }, [level, router]);

  if (!level) return null;

  const handleDialogueSelect = (index: number) => {
    setSelectedDialogue(index);
    resetQuiz();
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (selectedDialogue !== null) {
      const dialogue = dialogues[level][selectedDialogue];
      if (answerIndex === dialogue.questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedDialogue !== null) {
      const dialogue = dialogues[level][selectedDialogue];
      if (currentQuestion < dialogue.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  if (selectedDialogue === null) {
    return (
      <>
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/dialogue")}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-bold">{level} Dialogues</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dialogues[level].map((dialogue, index) => (
            <Card
              key={index}
              className="cursor-pointer border-2 hover:border-primary transition-all hover:shadow-md"
              onClick={() => handleDialogueSelect(index)}
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-1">{dialogue.title}</h3>
                  <p className="text-muted-foreground">
                    {dialogue.lines.length} lines • {dialogue.questions.length}{" "}
                    questions
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MessageSquare className="w-6 h-6" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
  }

  const dialogue = dialogues[level][selectedDialogue];

  if (quizCompleted) {
    const percentage = Math.round((score / dialogue.questions.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Practice Complete!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center p-8">
            <div className="relative inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-6">
              <div className="text-5xl font-black text-primary p-8">
                {percentage}%
              </div>
            </div>
            <p className="text-xl mb-8 font-medium">
              You correctly answered {score} out of {dialogue.questions.length}{" "}
              questions.
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => setSelectedDialogue(null)}
                size="lg"
                className="px-8"
              >
                Try Another
              </Button>
              <Button
                onClick={() => router.push("/dialogue")}
                variant="outline"
                size="lg"
              >
                Change Level
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSelectedDialogue(null)}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold">{dialogue.title}</h1>
        </div>
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-bold text-sm">
          {level}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full bg-muted/30 rounded-2xl p-6 mb-8 space-y-6 shadow-inner border">
          {dialogue.lines.map((line, idx) => (
            <div key={idx} className="flex flex-col max-w-[90%] items-start">
              <span className="text-xs font-bold text-muted-foreground mb-1 px-2 uppercase tracking-wider">
                {line.speaker}
              </span>
              <div className="p-4 rounded-xl text-base leading-relaxed shadow-sm bg-card text-card-foreground border">
                {line.text}
              </div>
            </div>
          ))}
        </div>

        <Card className="border-2 border-primary/20 overflow-hidden w-full h-max">
          <div className="h-2 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestion + 1) / dialogue.questions.length) * 100
                }%`,
              }}
            />
          </div>
          <CardHeader className="bg-secendary/50 px-8 py-6 border-b">
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              Comprehension Check
            </CardTitle>
            <p className="text-muted-foreground">
              Question {currentQuestion + 1} of {dialogue.questions.length}
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl font-semibold mb-6">
              {dialogue.questions[currentQuestion].question}
            </p>

            <div className="grid md:grid-cols-2 gap-3">
              {dialogue.questions[currentQuestion].options.map(
                (option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect =
                    index === dialogue.questions[currentQuestion].correct;

                  let variant: "outline" | "default" | "destructive" =
                    "outline";
                  if (selectedAnswer !== null) {
                    if (isCorrect) variant = "default";
                    else if (isSelected) variant = "destructive";
                  }

                  return (
                    <Button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      variant={variant}
                      className={cn(
                        "h-auto py-4 px-6 text-left justify-start text-lg border-2 transition-all",
                        selectedAnswer === null &&
                          "hover:border-primary hover:bg-primary/5"
                      )}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="w-8 h-8 rounded-full border flex items-center justify-center mr-4 shrink-0 font-bold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </Button>
                  );
                }
              )}
            </div>

            {showExplanation && (
              <div
                className={cn(
                  "mt-8 p-6 rounded-xl border-2 flex gap-4",
                  selectedAnswer === dialogue.questions[currentQuestion].correct
                    ? "bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-900"
                    : "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-900"
                )}
              >
                <div className="shrink-0 mt-1">
                  {selectedAnswer ===
                  dialogue.questions[currentQuestion].correct ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      "font-bold text-lg mb-1",
                      selectedAnswer ===
                        dialogue.questions[currentQuestion].correct
                        ? "text-green-700"
                        : "text-red-700"
                    )}
                  >
                    {selectedAnswer ===
                    dialogue.questions[currentQuestion].correct
                      ? "Well done!"
                      : "Not quite right..."}
                  </p>
                  <p className="text-muted-foreground">
                    {dialogue.questions[currentQuestion].explanation}
                  </p>
                </div>
              </div>
            )}

            {showExplanation && (
              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleNextQuestion}
                  size="lg"
                  className="px-10"
                >
                  {currentQuestion < dialogue.questions.length - 1
                    ? "Next Question"
                    : "View Results"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
