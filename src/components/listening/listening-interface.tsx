"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DictationExercise,
  ComprehensionExercise,
  ListeningType,
} from "@/constants/listening/types";
import { useRouter, useParams } from "next/navigation";
import {
  Play,
  Pause,
  RotateCcw,
  AudioLines,
  Trophy,
  History,
  ArrowLeft,
} from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Progress } from "../ui/progress";
import { Input } from "../ui/input";
import { useSpeech } from "@/hooks/use-speech";
import { Slider } from "../ui/slider";
import { shuffleArray } from "@/lib/utils";

interface ListeningInterfaceProps {
  exercises: (DictationExercise | ComprehensionExercise)[];
  level: CEFRLevel;
  type: ListeningType;
}

export function ListeningInterface({
  exercises: initialExercises,
  level,
  type,
}: ListeningInterfaceProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const { speak, pause, resume, stop, isSpeaking, isPaused } = useSpeech();

  // Shuffle seed to trigger re-shuffle when needed
  const [shuffleSeed, setShuffleSeed] = useState(0);

  // Compute exercises based on type and shuffle seed
  const exercises = useMemo(() => {
    if (type === "dictation") {
      return shuffleArray(initialExercises);
    }
    return initialExercises;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialExercises, type, shuffleSeed]);

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [userInput, setUserInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  // We should calculate total questions precisely:
  const totalItems = useMemo(() => {
    if (type === "dictation") return exercises.length;
    return exercises.reduce(
      (acc, ex) => acc + (ex as ComprehensionExercise).questions.length,
      0,
    );
  }, [exercises, type]);

  // userAnswers mapped linearly
  const [userAnswers, setUserAnswers] = useState<(string | number)[]>(() =>
    new Array(totalItems).fill(type === "dictation" ? "" : -1),
  );

  const currentLinearIndex = useMemo(() => {
    if (type === "dictation") return currentExerciseIndex;
    let idx = 0;
    for (let i = 0; i < currentExerciseIndex; i++) {
      idx += (exercises[i] as ComprehensionExercise).questions.length;
    }
    return idx + currentQuestionIndex;
  }, [currentExerciseIndex, currentQuestionIndex, exercises, type]);

  const currentProgress = currentLinearIndex;

  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  };

  const handlePlay = () => {
    if (!currentExercise) return;
    if (isPaused) {
      resume();
    } else {
      speak(currentExercise.content, { rate: speed });
    }
  };

  const saveCurrentAnswer = (val: string | number | null) => {
    if (val === null) return;
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentLinearIndex] = val;
      return copy;
    });
  };

  // Called whenever userInput or selectedOption changes
  const handleUserInput = (val: string) => {
    setUserInput(val);
    saveCurrentAnswer(val);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    saveCurrentAnswer(index);
  };

  const moveToIndex = (newLinearIdx: number) => {
    let targetEx = 0;
    let targetQ = 0;

    if (type === "dictation") {
      targetEx = newLinearIdx;
    } else {
      let temp = newLinearIdx;
      for (let i = 0; i < exercises.length; i++) {
        const qLen = (exercises[i] as ComprehensionExercise).questions.length;
        if (temp < qLen) {
          targetEx = i;
          targetQ = temp;
          break;
        }
        temp -= qLen;
      }
    }

    setCurrentExerciseIndex(targetEx);
    setCurrentQuestionIndex(targetQ);

    const prevAnswer = userAnswers[newLinearIdx];
    if (type === "dictation") {
      setUserInput((prevAnswer as string) || "");
    } else {
      setSelectedOption(prevAnswer !== -1 ? (prevAnswer as number) : null);
    }
    setShowTranscript(false);
  };

  const handleNext = () => {
    if (currentLinearIndex < totalItems - 1) {
      moveToIndex(currentLinearIndex + 1);
    }
    stop();
  };

  const handlePrev = () => {
    if (currentLinearIndex > 0) {
      moveToIndex(currentLinearIndex - 1);
    }
    stop();
  };

  const handleSubmit = () => {
    setCompleted(true);
    stop();
  };

  const score = useMemo(() => {
    return userAnswers.reduce((acc: number, ans, idx) => {
      if (type === "dictation") {
        const isCorrect =
          normalizeText(ans as string) ===
          normalizeText((exercises[idx] as DictationExercise).answer);
        return isCorrect ? acc + 1 : acc;
      } else {
        // find Exercise and Question
        let temp = idx;
        let exIdx = 0;
        for (let i = 0; i < exercises.length; i++) {
          const qLen = (exercises[i] as ComprehensionExercise).questions.length;
          if (temp < qLen) {
            exIdx = i;
            break;
          }
          temp -= qLen;
        }
        const rightOption = (
          exercises[exIdx] as ComprehensionExercise
        ).questions[temp].options.findIndex((o) => o.isCorrect);
        return ans === rightOption ? acc + 1 : acc;
      }
    }, 0);
  }, [userAnswers, exercises, type]);

  const handleRestart = () => {
    setShuffleSeed((prev) => prev + 1);
    setCurrentExerciseIndex(0);
    setCurrentQuestionIndex(0);
    setUserInput("");
    setSelectedOption(null);
    setCompleted(false);
    setUserAnswers(new Array(totalItems).fill(type === "dictation" ? "" : -1));
    setShowTranscript(false);
    stop();
  };

  if (!currentExercise) {
    return (
      <div className="flex items-center justify-center p-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (completed) {
    const percentage = Math.round((score / totalItems) * 100);
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
              <Trophy className="text-primary w-16 h-16" />
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                {percentage}%
              </div>
            </div>
            <p className="text-xl mb-8 font-medium">
              You scored {score} out of {totalItems}!
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart} size="lg" className="px-8">
                Try Again
              </Button>
              <Button
                onClick={() => router.push(`/listening/${levelSlug}`)}
                variant="outline"
                size="lg"
              >
                {type === "dictation"
                  ? "Back to Mode Selection"
                  : "Select Another Passage"}
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
              {userAnswers.map((ans, idx) => {
                if (type === "dictation") {
                  const ex = exercises[idx] as DictationExercise;
                  const isCorrect =
                    normalizeText(ans as string) === normalizeText(ex.answer);
                  return (
                    <div key={idx} className="p-4 border rounded">
                      <p className="font-semibold text-primary mb-2">
                        Dictation {idx + 1}
                      </p>
                      <div className="space-y-1">
                        <p>
                          <strong>Your Answer:</strong>{" "}
                          <span
                            className={
                              isCorrect ? "text-green-700" : "text-red-700"
                            }
                          >
                            {(ans as string) || "-"}
                          </span>
                        </p>
                        <p>
                          <strong>Correct Answer:</strong>{" "}
                          <span className="text-green-700">{ex.answer}</span>
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  // Comprehension
                  let temp = idx;
                  let exIdx = 0;
                  for (let i = 0; i < exercises.length; i++) {
                    const qLen = (exercises[i] as ComprehensionExercise)
                      .questions.length;
                    if (temp < qLen) {
                      exIdx = i;
                      break;
                    }
                    temp -= qLen;
                  }
                  const ex = exercises[exIdx] as ComprehensionExercise;
                  const q = ex.questions[temp];
                  const correctIdx = q.options.findIndex((o) => o.isCorrect);
                  const userAns = ans as number;

                  return (
                    <div key={idx} className="p-4 border rounded">
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">
                        {ex.title} (Question {temp + 1})
                      </p>
                      <p className="font-semibold mb-2">
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
                              {q.options[userAns].option}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </p>
                        <p>
                          <strong>Correct Answer:</strong>{" "}
                          <span className="text-green-700">
                            {String.fromCharCode(65 + correctIdx)}.{" "}
                            {q.options[correctIdx].option}
                          </span>
                        </p>
                        <div className="mt-2 text-sm">
                          <p>
                            <strong>Explanation:</strong> {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push(`/listening/${levelSlug}`)}
            className="rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-1">
              {type === "dictation"
                ? "Dictation Practice"
                : "Comprehension Practice"}
            </h1>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
              Level {level}
            </p>
          </div>
        </div>
        <CEFRBadge level={level} />
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">
            Progress: {currentProgress + 1} / {totalItems}
          </p>
          <p className="text-sm text-muted-foreground">
            {Math.round(((currentProgress + 1) / totalItems) * 100)}%
          </p>
        </div>
        <Progress
          value={((currentProgress + 1) / totalItems) * 100}
          className="h-2"
        />
      </div>

      <Card className="shadow-lg border-primary/20 bg-card/10 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AudioLines className="h-5 w-5 text-primary" />
            {currentExercise.title}{" "}
            {type === "comprehension" &&
              `(Question ${currentQuestionIndex + 1}/6)`}
          </CardTitle>
          {type === "comprehension" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTranscript(!showTranscript)}
              className="text-muted-foreground gap-1.5 h-8"
            >
              <History size={16} />
              {showTranscript ? "Hide Transcript" : "Show Transcript"}
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-8 pt-8">
          <div className="flex flex-col items-center justify-center p-8 bg-muted/40 rounded-2xl border-2 border-dashed border-primary/20">
            <div className="flex items-center gap-6 mb-8">
              <Button
                variant={isSpeaking && !isPaused ? "secondary" : "default"}
                size="icon"
                className="h-16 w-16 rounded-full shadow-lg active:scale-95 transition-all"
                onClick={isSpeaking && !isPaused ? pause : handlePlay}
              >
                {isSpeaking && !isPaused ? (
                  <Pause className="h-8 w-8 text-primary-foreground" />
                ) : (
                  <Play className="h-8 w-8 ml-1 text-primary-foreground" />
                )}
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full hover:bg-muted"
                onClick={() => {
                  stop();
                  handlePlay();
                }}
                disabled={!isSpeaking && !isPaused}
              >
                <RotateCcw className="h-5 w-5" />
              </Button>
            </div>

            <div className="w-full max-w-xs space-y-4">
              <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span>Speed Boost</span>
                <span className="text-primary font-bold">{speed}x</span>
              </div>
              <Slider
                value={[speed]}
                min={0.5}
                max={1.5}
                step={0.25}
                onValueChange={(val) => setSpeed(val[0])}
              />
              <div className="flex justify-between text-[10px] font-black text-muted-foreground/50 px-1 uppercase tracking-tighter">
                <span>Slow Mode</span>
                <span>Regular</span>
                <span>Pro Speed</span>
              </div>
            </div>
          </div>

          {showTranscript && type === "comprehension" && (
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl italic text-muted-foreground animate-in zoom-in-95 duration-300">
              {(currentExercise as ComprehensionExercise).transcript}
            </div>
          )}

          <div className="space-y-6">
            {type === "dictation" ? (
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-primary/70 ml-1">
                  Write down what you heard
                </label>
                <Input
                  placeholder="Type here..."
                  value={userInput}
                  onChange={(e) => handleUserInput(e.target.value)}
                  className="text-lg py-10 bg-background/50 border-primary/20 focus-visible:ring-primary/30 text-center"
                  autoFocus
                />
              </div>
            ) : (
              <div className="space-y-4">
                <label className="text-sm font-bold uppercase tracking-widest text-primary/70 ml-1">
                  {
                    (currentExercise as ComprehensionExercise).questions[
                      currentQuestionIndex
                    ].question
                  }
                </label>
                <div className="grid gap-3">
                  {(currentExercise as ComprehensionExercise).questions[
                    currentQuestionIndex
                  ].options.map(
                    (opt: { isCorrect: boolean; option: string }, index) => (
                      <Button
                        key={index}
                        variant={
                          selectedOption === index ? "default" : "outline"
                        }
                        className={`justify-start h-auto py-5 px-6 text-left border-primary/10 hover:border-primary/40 transition-all ${
                          selectedOption === index
                            ? "shadow-md bg-primary text-primary-foreground scale-[1.02]"
                            : "bg-card/30"
                        }`}
                        onClick={() => handleOptionSelect(index)}
                      >
                        <span
                          className={`mr-4 h-7 w-7 rounded-full border flex items-center justify-center text-xs font-bold transition-colors ${
                            selectedOption === index
                              ? "bg-primary-foreground text-primary border-transparent"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-base font-medium">
                          {opt.option}
                        </span>
                      </Button>
                    ),
                  )}
                </div>
              </div>
            )}

            <div className="flex justify-between gap-3 mt-4">
              <Button
                onClick={handlePrev}
                disabled={currentLinearIndex === 0}
                variant="outline"
                className="flex-1"
              >
                ← Previous
              </Button>
              {currentLinearIndex < totalItems - 1 ? (
                <Button onClick={handleNext} className="flex-1">
                  Next →
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    type === "dictation"
                      ? !userInput.trim()
                      : selectedOption === null
                  }
                  className="flex-1 px-12 font-bold shadow-lg shadow-primary/20"
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
