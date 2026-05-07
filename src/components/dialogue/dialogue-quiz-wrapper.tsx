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
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    new Array(dialogue.questions.length).fill(-1),
  );

  const [shuffledQuestions] = useState(() => {
    return dialogue.questions.map((q) => {
      const correctIndex = q.correct;
      const indexedOptions = q.options.map((option, index) => ({
        option,
        originalIndex: index,
      }));

      // Create a stable random shuffle for this session
      const shuffled = [...indexedOptions].sort(() => Math.random() - 0.5);

      const newCorrectIndex = shuffled.findIndex(
        (item) => item.originalIndex === correctIndex,
      );

      return {
        shuffledOptions: shuffled.map((item) => item.option),
        shuffledToOriginal: shuffled.map((item) => item.originalIndex),
        newCorrectIndex,
      };
    });
  });

  const { shuffledOptions, newCorrectIndex, shuffledToOriginal } =
    shuffledQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = shuffledToOriginal[answerIndex];
      return copy;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < dialogue.questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      const origAnswer = userAnswers[nextQ];
      const nextShuffledToOriginal =
        shuffledQuestions[nextQ].shuffledToOriginal;
      setSelectedAnswer(
        origAnswer !== -1 ? nextShuffledToOriginal.indexOf(origAnswer) : null,
      );
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      const origAnswer = userAnswers[prevQ];
      const prevShuffledToOriginal =
        shuffledQuestions[prevQ].shuffledToOriginal;
      setSelectedAnswer(
        origAnswer !== -1 ? prevShuffledToOriginal.indexOf(origAnswer) : null,
      );
    }
  };

  const submitQuiz = () => {
    setQuizCompleted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setUserAnswers(new Array(dialogue.questions.length).fill(-1));
  };

  const score = userAnswers.reduce((acc, ans, idx) => {
    const correctIdx = dialogue.questions[idx].correct;
    return ans === correctIdx ? acc + 1 : acc;
  }, 0);

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

        <Card className="max-w-4xl mx-auto mt-6">
          <CardHeader>
            <CardTitle className="text-xl">Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dialogue.questions.map((q, idx) => {
                const userAns = userAnswers[idx];
                const correctIdx = q.correct;
                return (
                  <div key={idx} className="p-4 border rounded">
                    <p className="font-semibold">
                      {idx + 1}. {q.question}
                    </p>
                    <div className="mt-2">
                      <p>
                        <strong>Your Answer:</strong>{" "}
                        {userAns >= 0 ? (
                          <span
                            className={
                              userAns === correctIdx
                                ? "text-green-700"
                                : "text-red-700"
                            }
                          >
                            {String.fromCharCode(65 + userAns)}.{" "}
                            {q.options[userAns]}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </p>
                      <p>
                        <strong>Correct Answer:</strong>{" "}
                        <span className="text-green-700">
                          {String.fromCharCode(65 + correctIdx)}.{" "}
                          {q.options[correctIdx]}
                        </span>
                      </p>
                      <div className="mt-2">
                        <p className="mt-1">
                          <strong>Explanation:</strong> {q.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              ((currentQuestion + 1) / dialogue.questions.length) * 100,
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
              {shuffledOptions.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === newCorrectIndex;
                const optionLabels = ["A", "B", "C", "D"];

                return (
                  <AnswerButton
                    key={index}
                    label={`${optionLabels[index]}.`}
                    isSelected={isSelected}
                    isCorrect={isCorrect}
                    isSubmitted={false} // Don't show correct/incorrect state here
                    onClick={() => handleAnswerSelect(index)}
                    variant="standard"
                    className="p-3"
                  >
                    {option}
                  </AnswerButton>
                );
              })}
            </div>

            <div className="flex justify-between gap-3 mt-4">
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1"
              >
                ← Previous
              </Button>
              {currentQuestion < dialogue.questions.length - 1 ? (
                <Button onClick={handleNextQuestion} className="flex-1">
                  Next →
                </Button>
              ) : (
                <Button
                  onClick={submitQuiz}
                  disabled={selectedAnswer === null}
                  className="flex-1"
                >
                  Submit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
