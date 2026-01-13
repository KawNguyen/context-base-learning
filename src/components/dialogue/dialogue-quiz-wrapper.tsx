"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialogue } from "@/constants/dialogues";
import { useRouter, useParams } from "next/navigation";
import { Badge } from "../ui/badge";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Progress } from "../ui/progress";
import { AnswerButton } from "@/components/answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";

interface DialogueQuizWrapperProps {
  dialogue: Dialogue;
  level: CEFRLevel;
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
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{dialogue.title}</h1>
        <CEFRBadge level={level} />
      </div>

      {/* Progress */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">
            Question {currentQuestion + 1} / {dialogue.questions.length}
          </p>
          <p className="text-sm text-muted-foreground">
            {Math.round(
              ((currentQuestion + 1) / dialogue.questions.length) * 100
            )}
            %
          </p>
        </div>
        <Progress
          value={((currentQuestion + 1) / dialogue.questions.length) * 100}
          className="h-2"
        />
      </div>

      {/* Main Content - Single Column Layout */}
      <div className="space-y-4">
        {/* Dialogue Card - Compact */}
        <Card className="bg-muted/30">
          <CardContent className="p-4 space-y-2">
            {dialogue.lines.map((line, idx) => (
              <div key={idx} className="flex gap-2 items-start">
                <Badge
                  variant={idx % 2 === 0 ? "default" : "secondary"}
                  className="text-xs px-2 py-0.5 shrink-0"
                >
                  {line.speaker}
                </Badge>
                <p className="text-sm">{line.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Question Card - Compact */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">
              {dialogue.questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              {dialogue.questions[currentQuestion].options.map(
                (option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect =
                    index === dialogue.questions[currentQuestion].correct;
                  const optionLabels = ["A", "B", "C", "D"];

                  return (
                    <AnswerButton
                      key={index}
                      label={`${optionLabels[index]}.`}
                      isSelected={isSelected}
                      isCorrect={isCorrect}
                      isSubmitted={showExplanation}
                      onClick={() => handleAnswerSelect(index)}
                      variant="standard"
                      className="p-3"
                    >
                      {option}
                    </AnswerButton>
                  );
                }
              )}
            </div>

            {!showExplanation && (
              <div className="flex justify-end">
                <Button
                  onClick={handleCheckAnswer}
                  disabled={selectedAnswer === null}
                >
                  Check Answer
                </Button>
              </div>
            )}

            {showExplanation && (
              <>
                <ExplanationAlert
                  isCorrect={
                    selectedAnswer ===
                    dialogue.questions[currentQuestion].correct
                  }
                >
                  {dialogue.questions[currentQuestion].explanation}
                </ExplanationAlert>

                <div className="flex justify-end">
                  <Button onClick={handleNextQuestion}>
                    {currentQuestion < dialogue.questions.length - 1
                      ? "Next Question"
                      : "View Results"}
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
