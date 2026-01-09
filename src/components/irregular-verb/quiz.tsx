"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, XCircle, RefreshCcw, Trophy } from "lucide-react";
import { cn, shuffleArray } from "@/lib/utils";
import { irregularVerbs } from "@/constants/irregularVerbs";

export function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({ past: "", participle: "" });
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Shuffle a smaller subset for the quiz session
  const quizVerbs = useMemo(() => {
    return shuffleArray(irregularVerbs).slice(0, 10);
  }, []);

  const currentVerb = quizVerbs[currentIndex];

  const checkAnswer = () => {
    const isPastCorrect =
      answers.past.toLowerCase().trim() ===
      currentVerb.past.split("/")[0].toLowerCase().trim();
    const isParticipleCorrect =
      answers.participle.toLowerCase().trim() ===
      currentVerb.participle.split("/")[0].toLowerCase().trim();

    if (isPastCorrect && isParticipleCorrect) {
      setScore((s) => s + 1);
    }
    setSubmitted(true);
  };

  const nextQuestion = () => {
    if (currentIndex < quizVerbs.length - 1) {
      setCurrentIndex((i) => i + 1);
      setAnswers({ past: "", participle: "" });
      setSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    window.location.reload(); // Quickest way to reshuffle useMemo without state complexity
  };

  if (quizFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-card border border-border rounded-2xl animate-in fade-in zoom-in duration-500">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
          <Trophy className="h-12 w-12 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Result</h2>
        <p className="text-muted-foreground mb-8">Your Score</p>
        <div className="text-6xl font-black text-primary mb-10">
          {score} / {quizVerbs.length}
        </div>
        <Button
          onClick={restartQuiz}
          className="gap-2 h-12 px-8 rounded-xl text-lg font-semibold"
        >
          <RefreshCcw className="h-5 w-5" /> Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Quiz</h2>
        <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
          Question {currentIndex + 1} / {quizVerbs.length}
        </span>
      </div>

      <div className="p-8 bg-card border border-border rounded-2xl shadow-sm">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Base
          </span>
          <h3 className="text-5xl font-black text-foreground mt-2">
            {currentVerb.base}
          </h3>
          <p className="text-muted-foreground mt-4 italic">
            Meaning: {currentVerb.meaning}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Past</label>
            <div className="relative">
              <Input
                placeholder="..."
                className={cn(
                  "h-14 text-lg font-medium bg-secondary/50 border-transparent transition-all focus:bg-card focus:border-primary",
                  submitted &&
                    (answers.past.toLowerCase().trim() ===
                    currentVerb.past.split("/")[0].toLowerCase().trim()
                      ? "border-green-500 bg-green-500/5"
                      : "border-destructive bg-destructive/5"),
                )}
                value={answers.past}
                onChange={(e) =>
                  setAnswers({ ...answers, past: e.target.value })
                }
                disabled={submitted}
              />
              {submitted &&
                (answers.past.toLowerCase().trim() ===
                currentVerb.past.split("/")[0].toLowerCase().trim() ? (
                  <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive" />
                ))}
            </div>
            {submitted &&
              answers.past.toLowerCase().trim() !==
                currentVerb.past.split("/")[0].toLowerCase().trim() && (
                <p className="text-xs text-green-600 font-medium mt-1 ml-1">
                  Correct Answer: {currentVerb.past}
                </p>
              )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold ml-1">Participle</label>
            <div className="relative">
              <Input
                placeholder="..."
                className={cn(
                  "h-14 text-lg font-medium bg-secondary/50 border-transparent transition-all focus:bg-card focus:border-primary",
                  submitted &&
                    (answers.participle.toLowerCase().trim() ===
                    currentVerb.participle.split("/")[0].toLowerCase().trim()
                      ? "border-green-500 bg-green-500/5"
                      : "border-destructive bg-destructive/5"),
                )}
                value={answers.participle}
                onChange={(e) =>
                  setAnswers({ ...answers, participle: e.target.value })
                }
                disabled={submitted}
              />
              {submitted &&
                (answers.participle.toLowerCase().trim() ===
                currentVerb.participle.split("/")[0].toLowerCase().trim() ? (
                  <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive" />
                ))}
            </div>
            {submitted &&
              answers.participle.toLowerCase().trim() !==
                currentVerb.participle.split("/")[0].toLowerCase().trim() && (
                <p className="text-xs text-green-600 font-medium mt-1 ml-1">
                  Correct Answer: {currentVerb.participle}
                </p>
              )}
          </div>
        </div>

        <div className="mt-10">
          {!submitted ? (
            <Button
              className="w-full h-14 text-lg font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all"
              onClick={checkAnswer}
              disabled={!answers.past || !answers.participle}
            >
              Check
            </Button>
          ) : (
            <Button
              className="w-full h-14 text-lg font-bold rounded-xl shadow-md bg-secondary text-secondary-foreground hover:bg-secondary/80"
              onClick={nextQuestion}
            >
              {currentIndex < quizVerbs.length - 1 ? "Next" : "Result"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
