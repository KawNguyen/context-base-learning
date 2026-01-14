"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QuestionResponseExercise } from "@/constants/question-response/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AudioLines, ArrowLeft, History } from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Progress } from "../ui/progress";
import { useSpeech } from "@/hooks/use-speech";
import { AudioPlayer } from "./audio-player";
import { ResponseOptions } from "./response-options";
import { ResultAlert } from "./result-alert";
import { TranscriptView } from "./transcript-view";
import { CompletionCard } from "./completion-card";

interface QuestionResponseInterfaceProps {
  exercises: QuestionResponseExercise[];
  level: CEFRLevel;
  mode?: "random" | "single";
  currentExerciseId?: string;
  nextExerciseId?: string;
  prevExerciseId?: string;
}

export function QuestionResponseInterface({
  exercises,
  level,
  mode = "random",
  nextExerciseId,
  prevExerciseId,
}: QuestionResponseInterfaceProps) {
  const router = useRouter();

  const { speak, pause, resume, stop, isSpeaking, isPaused } = useSpeech();

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];
  const totalItems = exercises.length;
  const currentProgress = currentExerciseIndex;

  const handlePlay = () => {
    if (!currentExercise) return;

    const responses = currentExercise.transcript?.responses || [];
    const textToSpeak = `Question. ${
      currentExercise.transcript?.question || "Question"
    } ... A ... ${responses[0]?.text || ""} ... B ... ${
      responses[1]?.text || ""
    } ... C ... ${responses[2]?.text || ""}`;

    if (isPaused) {
      resume();
    } else {
      speak(textToSpeak, { rate: speed });
    }
  };

  const handleCheck = () => {
    if (selectedOption === null || !currentExercise.transcript) return;

    const isCorrect =
      currentExercise.transcript.responses[selectedOption]?.isCorrect;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowResult(true);
    stop();
  };

  const handleNext = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
      setShowTranscript(false);
    } else {
      setCompleted(true);
    }
    stop();
  };

  const handleRestart = () => {
    setCurrentExerciseIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setCompleted(false);
    setShowTranscript(false);
    stop();
  };

  if (completed) {
    return (
      <CompletionCard
        score={score}
        totalItems={totalItems}
        onRestart={handleRestart}
        onSelectLevel={() =>
          router.push(`/question-response/${level.toLowerCase()}`)
        }
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
            className="rounded-full"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-1">Question - Response</h1>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
              Level {level}
            </p>
          </div>
        </div>
        <CEFRBadge level={level} />
      </div>

      {mode === "random" && (
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
      )}

      <Card className="shadow-lg border-primary/20 bg-card/10 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AudioLines className="h-5 w-5 text-primary" />
            {currentExercise.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-muted-foreground gap-1.5 h-8"
            disabled={!showResult} // Only show transcript after answering? Or allow anytime? Usually after.
          >
            <History size={16} />
            {showTranscript ? "Hide Transcript" : "Show Transcript"}
          </Button>
        </CardHeader>

        <CardContent className="space-y-8 pt-8">
          <AudioPlayer
            isSpeaking={isSpeaking}
            isPaused={isPaused}
            speed={speed}
            onPlay={handlePlay}
            onPause={pause}
            onReplay={() => {
              stop();
              handlePlay();
            }}
            onSpeedChange={setSpeed}
          />

          <ResponseOptions
            options={[0, 1, 2].map((index) => ({
              label: String.fromCharCode(65 + index),
              selected: selectedOption === index,
              disabled: showResult,
            }))}
            onSelect={(index) => !showResult && setSelectedOption(index)}
          />

          {showResult && currentExercise.transcript && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
              <ResultAlert
                isCorrect={
                  currentExercise.transcript.responses[selectedOption!]
                    ?.isCorrect || false
                }
                correctAnswer={String.fromCharCode(
                  65 +
                    currentExercise.transcript.responses.findIndex(
                      (r) => r.isCorrect,
                    ),
                )}
              />

              {showTranscript && (
                <TranscriptView
                  question={currentExercise.transcript.question}
                  responses={currentExercise.transcript.responses.map(
                    (r) => r.text,
                  )}
                  correctResponseIndex={currentExercise.transcript.responses.findIndex(
                    (r) => r.isCorrect,
                  )}
                />
              )}

              {mode === "single" && (
                <div className="flex justify-between gap-4">
                  {prevExerciseId ? (
                    <Link
                      href={`/question-response/${level.toLowerCase()}/${prevExerciseId}`}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="px-8 font-bold"
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    </Link>
                  ) : (
                    <div />
                  )}

                  {nextExerciseId ? (
                    <Link
                      href={`/question-response/${level.toLowerCase()}/${nextExerciseId}`}
                    >
                      <Button
                        size="lg"
                        className="px-8 font-bold group shadow-lg shadow-primary/20"
                      >
                        Next Exercise
                        <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rotate-180" />
                      </Button>
                    </Link>
                  ) : (
                    <Link href={`/question-response/${level.toLowerCase()}`}>
                      <Button
                        size="lg"
                        className="px-8 font-bold shadow-lg shadow-primary/20"
                      >
                        Back to List
                      </Button>
                    </Link>
                  )}
                </div>
              )}

              {mode === "random" && (
                <div className="flex justify-end">
                  <Button
                    size="lg"
                    onClick={handleNext}
                    className="px-14 font-bold group shadow-lg shadow-primary/20"
                  >
                    {currentExerciseIndex === exercises.length - 1
                      ? "Finish Session"
                      : "Continue"}
                    <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform rotate-180" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {!showResult && (
            <div className="flex justify-end pt-4">
              <Button
                size="lg"
                onClick={handleCheck}
                disabled={selectedOption === null}
                className="px-12 font-bold shadow-lg shadow-primary/20"
              >
                Check Answer
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
