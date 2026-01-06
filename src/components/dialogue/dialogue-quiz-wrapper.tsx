"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialogue } from "@/constants/dialogues";
import { useRouter, useParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { CheckCircle2Icon } from "lucide-react";

interface DialogueQuizWrapperProps {
  dialogue: Dialogue;
  level: string;
}

export function DialogueQuizWrapper({
  dialogue,
  level,
}: DialogueQuizWrapperProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);

    if (selectedAnswer === dialogue.questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < dialogue.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleBackToDialogues = () => {
    router.push(`/dialogue/${levelSlug}`);
  };

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
              <Button onClick={handleRestart} size="lg" className="px-8">
                Try Again
              </Button>
              <Button
                onClick={handleBackToDialogues}
                variant="outline"
                size="lg"
              >
                Back to Dialogues
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header with Title and Level Badge */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{dialogue.title}</h1>
        <Badge className="bg-green-400/70 text-white font-bold">{level}</Badge>
      </div>

      {/* Progress Bar */}
      <div className="w-full">
        <div className="h-2 bg-gray-500 rounded-full">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${
                ((currentQuestion + 1) / dialogue.questions.length) * 100
              }%`,
            }}
          />
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Question {currentQuestion + 1} of {dialogue.questions.length}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Dialogue Card */}
        <Card className="p-0">
          <CardHeader>
            <CardTitle className="sr-only">Dialogue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dialogue.lines.map((line, idx) => (
              <div key={idx} className="flex gap-4">
                <Badge
                  variant={idx % 2 === 0 ? "default" : "secondary"}
                  className="inline-block px-3 py-1 text-xs font-semibold rounded"
                >
                  {line.speaker}
                </Badge>
                <p className="text-base">{line.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right: Question Card */}
        <Card>
          <CardHeader>
            <CardTitle>Question {currentQuestion + 1}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg font-medium">
              {dialogue.questions[currentQuestion].question}
            </p>

            <div className="grid gap-3">
              {dialogue.questions[currentQuestion].options.map(
                (option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect =
                    index === dialogue.questions[currentQuestion].correct;

                  const optionABCD = ["A", "B", "C", "D"];

                  return (
                    <Button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      variant={
                        showExplanation && isSelected
                          ? isCorrect
                            ? "success"
                            : "destructive"
                          : isSelected
                          ? "default"
                          : "outline"
                      }
                      className="flex justify-start p-4 py-6"
                      disabled={showExplanation}
                    >
                      {optionABCD[index]}. {option}
                    </Button>
                  );
                }
              )}
            </div>

            {!showExplanation && (
              <div className="flex justify-end">
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null}
                  size="lg"
                >
                  Check Answer
                </Button>
              </div>
            )}

            {showExplanation && (
              <Alert className="mt-6 p-4 rounded-lg border-green-600 bg-green-600/30 text-green-400">
                <CheckCircle2Icon />
                <AlertTitle>Explaination</AlertTitle>
                <AlertDescription>
                  {dialogue.questions[currentQuestion].explanation}
                </AlertDescription>
              </Alert>
            )}

            {showExplanation && (
              <div className="mt-6 flex justify-end">
                <Button onClick={handleNextQuestion} size="lg">
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
