"use client";

import { useState } from "react";
import { QuestionResponseExercise } from "@/constants/question-response/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { AudioLines } from "lucide-react";
import { AudioPlayer } from "./audio-player";
import { useSpeech } from "@/hooks/use-speech";
import { Button } from "../ui/button";

interface QuestionResponseCardProps {
  exercise: QuestionResponseExercise;
  exerciseIndex: number;
  selectedOption: number | undefined;
  isSubmitted: boolean;
  onAnswerSelect: (optionIdx: number) => void;
}

export function QuestionResponseCard({
  exercise,
  exerciseIndex,
  selectedOption,
  isSubmitted,
  onAnswerSelect,
}: QuestionResponseCardProps) {
  const { speak, pause, resume, stop, isSpeaking, isPaused } = useSpeech();
  const [speed, setSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);

  const handlePlay = () => {
    if (!exercise.transcript) return;

    const responses = exercise.transcript.responses || [];
    const textToSpeak = `Question. ${exercise.transcript.question} ... A ... ${
      responses[0]?.text || ""
    } ... B ... ${responses[1]?.text || ""} ... C ... ${
      responses[2]?.text || ""
    }`;

    if (isPaused) {
      resume();
    } else {
      speak(textToSpeak, { rate: speed });
    }
  };

  const isCorrect =
    isSubmitted &&
    selectedOption !== undefined &&
    exercise.transcript?.responses[selectedOption]?.isCorrect;

  const correctIndex = exercise.transcript?.responses.findIndex(
    (r) => r.isCorrect
  );

  return (
    <Card
      className={`border-white/10 transition-all ${
        isSubmitted
          ? isCorrect
            ? "border-green-500/50 bg-green-500/5"
            : "border-red-500/50 bg-red-500/5"
          : ""
      }`}
    >
      <CardHeader className="border-b border-white/10">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <AudioLines className="h-5 w-5 text-primary" />
            Question {exerciseIndex + 1}: {exercise.title}
          </CardTitle>
          {isSubmitted && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTranscript(!showTranscript)}
            >
              {showTranscript ? "Hide" : "Show"} Transcript
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        {/* Audio Player */}
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

        {/* Options */}
        <div className="grid grid-cols-1 gap-3">
          {["A", "B", "C"].map((label, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectOption = idx === correctIndex;
            const showAsCorrect = isSubmitted && isCorrectOption;
            const showAsWrong = isSubmitted && isSelected && !isCorrect;

            return (
              <button
                key={idx}
                onClick={() => onAnswerSelect(idx)}
                disabled={isSubmitted}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  isSubmitted
                    ? showAsCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showAsWrong
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 bg-card/50"
                    : isSelected
                    ? "border-primary bg-primary/10"
                    : "border-white/10 hover:border-primary/50 hover:bg-card/50"
                } ${isSubmitted ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      showAsCorrect
                        ? "bg-green-500 text-white"
                        : showAsWrong
                        ? "bg-red-500 text-white"
                        : isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {label}
                  </span>
                  <span className="font-medium">Option {label}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Transcript (after submission) */}
        {isSubmitted && showTranscript && exercise.transcript && (
          <div className="p-4 rounded-lg bg-muted/50 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div>
              <h4 className="font-semibold mb-2">Question:</h4>
              <p className="text-sm text-muted-foreground">
                {exercise.transcript.question}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Responses:</h4>
              {exercise.transcript.responses.map((response, idx) => (
                <div
                  key={idx}
                  className={`text-sm mb-1 ${
                    response.isCorrect ? "text-green-500 font-semibold" : ""
                  }`}
                >
                  ({String.fromCharCode(65 + idx)}) {response.text}
                  {response.isCorrect && " ✓"}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Result Alert */}
        {isSubmitted && selectedOption !== undefined && (
          <div
            className={`p-4 rounded-lg ${
              isCorrect
                ? "bg-green-500/10 border border-green-500/20"
                : "bg-red-500/10 border border-red-500/20"
            }`}
          >
            <p
              className={`font-semibold ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "✓ Correct!" : "✗ Incorrect"}
            </p>
            {!isCorrect && (
              <p className="text-sm text-muted-foreground mt-1">
                Correct answer: {String.fromCharCode(65 + (correctIndex ?? 0))}
              </p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
