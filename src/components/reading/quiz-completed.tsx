"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadingPassage } from "@/constants/reading";
import { useRouter } from "next/navigation";

interface QuizCompletedProps {
  score: number;
  totalQuestions: number;
  userAnswers: number[];
  questions: ReadingPassage["questions"];
  onRestart: () => void;
}

export function QuizCompleted({
  score,
  totalQuestions,
  userAnswers,
  questions,
  onRestart,
}: QuizCompletedProps) {
  const router = useRouter();
  const percentage = Math.round((score / totalQuestions) * 100);

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
            You got {score} out of {totalQuestions} questions correct.
          </p>
          <div className="flex gap-4 justify-center">
            <Button onClick={onRestart}>Try Again</Button>
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
              {questions.map((q, idx) => {
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
