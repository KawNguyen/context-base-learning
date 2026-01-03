"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { readingPassages } from "@/constants/readingPassages";
import { useRouter } from "next/navigation";

// Define the CEFRLevel type locally or import it if shared
type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface ReadingInterfaceProps {
  level: string; // passing as string from params
}

export function ReadingInterface({ level: paramLevel }: ReadingInterfaceProps) {
  // Validate level
  const validLevels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const level = validLevels.includes(paramLevel as CEFRLevel)
    ? (paramLevel as CEFRLevel)
    : null;

  const router = useRouter();
  const [selectedPassage, setSelectedPassage] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!level) {
      // redirect or show error handled by parent page usually, but here strictly check
      router.push("/reading");
    }
  }, [level, router]);

  if (!level) return null;

  const handlePassageSelect = (index: number) => {
    setSelectedPassage(index);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);

    const len = readingPassages[level][index].questions.length;
    setUserAnswers(new Array(len).fill(-1));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (selectedPassage !== null) {
      const passage = readingPassages[level][selectedPassage];
      setUserAnswers((prev) => {
        const copy = [...prev];
        copy[currentQuestion] = answerIndex;
        return copy;
      });
      if (answerIndex === passage.questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedPassage !== null) {
      const passage = readingPassages[level][selectedPassage];
      if (currentQuestion < passage.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleRestart = () => {
    setSelectedPassage(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  // 1. Passage Selection View
  if (selectedPassage === null) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {level} Reading Passages
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Select a passage to begin.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {readingPassages[level].map((passage, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handlePassageSelect(index)}
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{passage.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {passage.passage.substring(0, 150)}...
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {passage.questions.length} questions
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              onClick={() => router.push("/reading")}
              variant="outline"
              className="mt-6"
            >
              Back to Select Level
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const passage = readingPassages[level][selectedPassage];

  // 2. Quiz Completed View
  if (quizCompleted) {
    const percentage = Math.round((score / passage.questions.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Quiz Completed!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold mb-4">{percentage}%</div>
            <p className="text-lg mb-4">
              You got {score} out of {passage.questions.length} questions
              correct.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart}>Try Again</Button>
              <Button onClick={() => router.push("/reading")} variant="outline">
                Choose Different Level
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="max-w-4xl mx-auto mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {passage.questions.map((q, idx) => {
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
      </div>
    );
  }

  // 3. Reading & Quiz View
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{passage.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-base leading-relaxed whitespace-pre-line">
              {passage.passage}
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">
              Question {currentQuestion + 1} of {passage.questions.length}
            </h3>

            <p className="text-base mb-4">
              {passage.questions[currentQuestion].question}
            </p>

            <div className="space-y-2 mb-4">
              {passage.questions[currentQuestion].options.map(
                (option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    variant={
                      selectedAnswer === null
                        ? "outline"
                        : selectedAnswer === index
                          ? selectedAnswer ===
                            passage.questions[currentQuestion].correct
                            ? "default"
                            : "destructive"
                          : index ===
                            passage.questions[currentQuestion].correct &&
                            showExplanation
                            ? "default"
                            : "outline"
                    }
                    className="w-full text-left justify-start h-auto py-3 px-4"
                    disabled={selectedAnswer !== null}
                  >
                    <span className="font-medium mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                ),
              )}
            </div>

            {showExplanation && (
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-700 mb-2">
                  {selectedAnswer === passage.questions[currentQuestion].correct
                    ? "Correct"
                    : "Incorrect"}
                </p>
                <p className="text-sm">
                  Explanation: {passage.questions[currentQuestion].explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <Button
                onClick={() => setSelectedPassage(null)}
                variant="outline"
              >
                Back to Passages
              </Button>

              {showExplanation && (
                <Button onClick={handleNextQuestion}>
                  {currentQuestion < passage.questions.length - 1
                    ? "Next Question"
                    : "Finish Quiz"}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
