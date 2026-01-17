"use client";

import { MockExamQuestion } from "@/types/mock-exam";
import { ImageQuestion } from "@/constants/describe-picture";
import { QuestionResponseExercise } from "@/constants/question-response/types";
import { ComprehensionExercise } from "@/constants/listening/types";
import { Question } from "@/constants/quiz-question/types";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { ReadingPassage } from "@/constants/reading/type";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { useSpeech } from "@/hooks/use-speech";
import { useEffect } from "react";
import { Play, Pause, RotateCcw, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "../ui/alert";
import { cn } from "@/lib/utils";

interface QuestionRendererProps {
  question: MockExamQuestion;
  userAnswer: number | number[] | undefined;
  onAnswer: (answer: number | number[]) => void;
  reviewMode?: boolean;
}

export function QuestionRenderer({
  question,
  userAnswer,
  onAnswer,
  reviewMode,
}: QuestionRendererProps) {
  const { part, type, data } = question;
  const { speak, stop, isSpeaking, isPaused, pause, resume } = useSpeech();

  // Reset speech when question changes
  useEffect(() => {
    stop();
    return () => stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question.id]);

  const renderPart1 = (item: ImageQuestion) => {
    const handlePlayPart1 = () => {
      if (isPaused) {
        resume();
      } else {
        // Read all 4 options: A, B, C, D
        const text = item.options
          .map(
            (opt, idx) => `${String.fromCharCode(65 + idx)} ... ${opt.option}`
          )
          .join(" ... ");
        speak(text);
      }
    };

    return (
      <div className="space-y-8">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.imageUrl}
            alt="Part 1 Photo"
            className="max-h-100 object-contain rounded-lg border shadow-sm"
          />
        </div>

        {/* Audio Player */}
        <div className="flex flex-col items-center gap-6 p-8 bg-muted/40 rounded-2xl border-2 border-dashed border-primary/20">
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              className="h-16 w-16 rounded-full"
              onClick={isSpeaking ? pause : handlePlayPart1}
            >
              {isSpeaking && !isPaused ? (
                <Pause size={24} />
              ) : (
                <Play size={24} className="ml-1" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                stop();
                handlePlayPart1();
              }}
            >
              <RotateCcw size={20} />
            </Button>
          </div>
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Listen & Select
          </p>
        </div>

        {/* Answer Options - Only show A/B/C/D */}
        <div className="flex gap-4 justify-center max-w-md mx-auto">
          {item.options.map((opt, idx) => {
            const isCorrect = opt.isCorrect;
            const isSelected = userAnswer === idx;
            const showSuccess = reviewMode && isCorrect;
            const showError = reviewMode && isSelected && !isCorrect;

            return (
              <Button
                key={idx}
                variant={
                  isSelected ? "default" : showSuccess ? "secondary" : "outline"
                }
                className={cn(
                  "flex-1 h-20 text-2xl font-black",
                  showSuccess &&
                    "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                  showError &&
                    "bg-destructive/20 border-destructive hover:bg-destructive/30"
                )}
                onClick={() => !reviewMode && onAnswer(idx)}
                disabled={reviewMode}
              >
                {String.fromCharCode(65 + idx)}
              </Button>
            );
          })}
        </div>

        {/* Show text in review mode only */}
        {reviewMode && (
          <div className="space-y-3 mt-6">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Transcript:
            </p>
            {item.options.map((opt, idx) => (
              <div
                key={idx}
                className={cn(
                  "p-3 rounded-lg border",
                  opt.isCorrect
                    ? "bg-green-500/10 border-green-500/30"
                    : "bg-muted/30"
                )}
              >
                <span className="font-bold mr-2">
                  {String.fromCharCode(65 + idx)}.
                </span>
                {opt.option}
              </div>
            ))}
          </div>
        )}

        {reviewMode && item.explanationVi && (
          <Alert className="bg-primary/5 border-primary/20">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{item.explanationVi}</AlertDescription>
          </Alert>
        )}
      </div>
    );
  };

  const renderPart2 = (item: QuestionResponseExercise) => {
    const handlePlayPart2 = () => {
      if (isPaused) {
        resume();
      } else {
        const text = `Question. ${item.transcript?.question} ... A ... ${item.transcript?.responses[0].text} ... B ... ${item.transcript?.responses[1].text} ... C ... ${item.transcript?.responses[2].text}`;
        speak(text);
      }
    };

    return (
      <div className="space-y-8 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <Button
            size="icon"
            className="h-20 w-20 rounded-full"
            onClick={isSpeaking ? pause : handlePlayPart2}
          >
            {isSpeaking && !isPaused ? (
              <Pause size={32} />
            ) : (
              <Play size={32} className="ml-1" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              stop();
              handlePlayPart2();
            }}
          >
            <RotateCcw size={20} />
          </Button>
        </div>
        <div className="flex gap-4 w-full max-w-sm">
          {[0, 1, 2].map((idx) => {
            const isCorrect =
              item.transcript?.responses[idx]?.isCorrect || false;
            const isSelected = userAnswer === idx;
            const showSuccess = reviewMode && isCorrect;
            const showError = reviewMode && isSelected && !isCorrect;

            return (
              <Button
                key={idx}
                variant={
                  isSelected ? "default" : showSuccess ? "secondary" : "outline"
                }
                className={cn(
                  "flex-1 h-20 text-2xl font-black",
                  showSuccess &&
                    "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                  showError &&
                    "bg-destructive/20 border-destructive hover:bg-destructive/30"
                )}
                onClick={() => !reviewMode && onAnswer(idx)}
                disabled={reviewMode}
              >
                {String.fromCharCode(65 + idx)}
              </Button>
            );
          })}
        </div>

        {/* Show transcript and explanation in review mode */}
        {reviewMode && item.transcript && (
          <div className="space-y-4 w-full max-w-2xl mt-6">
            <div className="p-4 bg-muted/30 rounded-lg border">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Transcript:
              </p>
              <p className="font-semibold mb-2">
                Q: {item.transcript.question}
              </p>
              <div className="space-y-2">
                {item.transcript.responses.map((resp, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "p-2 rounded",
                      resp.isCorrect
                        ? "bg-green-500/10 border border-green-500/30"
                        : "bg-muted"
                    )}
                  >
                    <span className="font-bold mr-2">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {resp.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderPart34 = (item: ComprehensionExercise) => {
    const handlePlayListening = () => {
      if (isPaused) resume();
      else speak(item.content);
    };

    return (
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="bg-muted/30">
            <CardContent className="p-8 flex items-center justify-center flex-col gap-4">
              <Button
                size="lg"
                className="h-16 w-16 rounded-full"
                onClick={isSpeaking ? pause : handlePlayListening}
              >
                {isSpeaking && !isPaused ? (
                  <Pause size={24} />
                ) : (
                  <Play size={24} className="ml-1" />
                )}
              </Button>
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Audio Content
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-8">
          {item.questions.map((q, qIdx) => (
            <div key={qIdx} className="space-y-3">
              <p className="font-bold">
                {qIdx + 1}. {q.question}
              </p>
              <div className="grid gap-2">
                {q.options.map((opt, oIdx) => {
                  const isCorrect = opt.isCorrect;
                  const isSelected =
                    Array.isArray(userAnswer) && userAnswer[qIdx] === oIdx;
                  const showSuccess = reviewMode && isCorrect;
                  const showError = reviewMode && isSelected && !isCorrect;

                  return (
                    <Button
                      key={oIdx}
                      variant={
                        isSelected
                          ? "default"
                          : showSuccess
                          ? "secondary"
                          : "outline"
                      }
                      className={cn(
                        "justify-start h-auto py-2 text-sm text-left",
                        showSuccess &&
                          "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                        showError &&
                          "bg-destructive/20 border-destructive hover:bg-destructive/30"
                      )}
                      onClick={() => {
                        if (reviewMode) return;
                        const newAnswers = Array.isArray(userAnswer)
                          ? [...userAnswer]
                          : [];
                        newAnswers[qIdx] = oIdx;
                        onAnswer(newAnswers);
                      }}
                      disabled={reviewMode}
                    >
                      <span className="mr-3 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      {opt.option}
                    </Button>
                  );
                })}
              </div>
              {reviewMode && q.explanation && (
                <Alert className="bg-primary/5 border-primary/20 mt-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{q.explanation}</AlertDescription>
                </Alert>
              )}
            </div>
          ))}

          {/* Show transcript in review mode */}
          {reviewMode && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
                Audio Transcript:
              </p>
              <p className="whitespace-pre-line leading-relaxed">
                {item.content}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPart5 = (item: Question) => (
    <div className="space-y-8">
      <div className="p-8 bg-muted/30 rounded-xl text-xl font-medium border">
        {item.questionEn}
      </div>
      <div className="grid gap-3 max-w-2xl mx-auto">
        {item.options.map((opt, idx) => {
          const isCorrect = opt.isCorrect;
          const isSelected = userAnswer === idx;
          const showSuccess = reviewMode && isCorrect;
          const showError = reviewMode && isSelected && !isCorrect;

          return (
            <Button
              key={idx}
              variant={
                isSelected ? "default" : showSuccess ? "secondary" : "outline"
              }
              className={cn(
                "justify-start h-auto py-5 px-6 text-left",
                showSuccess &&
                  "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                showError &&
                  "bg-destructive/20 border-destructive hover:bg-destructive/30"
              )}
              onClick={() => !reviewMode && onAnswer(idx)}
              disabled={reviewMode}
            >
              <span className="mr-4 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-lg">{opt.option}</span>
            </Button>
          );
        })}
      </div>

      {/* Show explanation in review mode */}
      {reviewMode && item.explanationVi && (
        <div className="max-w-2xl mx-auto space-y-3">
          <Alert className="bg-primary/5 border-primary/20">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{item.explanationVi}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );

  const renderPart6 = (item: TextCompletionPassage) => (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="p-6 bg-card border rounded-lg overflow-y-auto max-h-150 whitespace-pre-line leading-loose text-lg">
        {item.content}
      </div>
      <div className="space-y-8">
        {item.questions.map((q, qIdx) => (
          <div
            key={qIdx}
            className="space-y-3 p-4 border rounded-lg bg-primary/5"
          >
            <p className="font-bold flex items-center gap-2">
              <Badge variant="outline">Gap {q.placeholderIndex}</Badge>
              Select the best fit:
            </p>
            <div className="grid gap-2">
              {q.options.map((opt, oIdx) => {
                const isCorrect = opt.isCorrect;
                const isSelected =
                  Array.isArray(userAnswer) && userAnswer[qIdx] === oIdx;
                const showSuccess = reviewMode && isCorrect;
                const showError = reviewMode && isSelected && !isCorrect;

                return (
                  <Button
                    key={oIdx}
                    variant={
                      isSelected
                        ? "default"
                        : showSuccess
                        ? "secondary"
                        : "outline"
                    }
                    className={cn(
                      "justify-start h-auto py-2 text-sm text-left",
                      showSuccess &&
                        "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                      showError &&
                        "bg-destructive/20 border-destructive hover:bg-destructive/30"
                    )}
                    onClick={() => {
                      if (reviewMode) return;
                      const newAnswers = Array.isArray(userAnswer)
                        ? [...userAnswer]
                        : [];
                      newAnswers[qIdx] = oIdx;
                      onAnswer(newAnswers);
                    }}
                    disabled={reviewMode}
                  >
                    <span className="mr-3 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    {opt.option}
                  </Button>
                );
              })}
            </div>
            {reviewMode && q.explanationVi && (
              <Alert className="bg-primary/5 border-primary/20 mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{q.explanationVi}</AlertDescription>
              </Alert>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPart7 = (item: ReadingPassage) => (
    <div className="grid lg:grid-cols-2 gap-8 h-full">
      <div className="p-6 bg-card border rounded-lg overflow-y-auto max-h-150 whitespace-pre-line leading-loose">
        {item.passage}
      </div>
      <div className="space-y-8 overflow-y-auto max-h-150 pr-2">
        {item.questions.map((q, qIdx) => (
          <div key={qIdx} className="space-y-3">
            <p className="font-bold underline decoration-primary/30">
              Question {qIdx + 1}: {q.question}
            </p>
            <div className="grid gap-2">
              {q.options.map((opt, oIdx) => {
                const isCorrect = opt.isCorrect;
                const isSelected =
                  Array.isArray(userAnswer) && userAnswer[qIdx] === oIdx;
                const showSuccess = reviewMode && isCorrect;
                const showError = reviewMode && isSelected && !isCorrect;

                return (
                  <Button
                    key={oIdx}
                    variant={
                      isSelected
                        ? "default"
                        : showSuccess
                        ? "secondary"
                        : "outline"
                    }
                    className={cn(
                      "justify-start h-auto py-3 text-sm text-left px-4",
                      showSuccess &&
                        "bg-green-500/20 border-green-500 hover:bg-green-500/30",
                      showError &&
                        "bg-destructive/20 border-destructive hover:bg-destructive/30"
                    )}
                    onClick={() => {
                      if (reviewMode) return;
                      const newAnswers = Array.isArray(userAnswer)
                        ? [...userAnswer]
                        : [];
                      newAnswers[qIdx] = oIdx;
                      onAnswer(newAnswers);
                    }}
                    disabled={reviewMode}
                  >
                    <span className="mr-3 w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    {opt.option}
                  </Button>
                );
              })}
            </div>
            {reviewMode && q.explanation && (
              <Alert className="bg-primary/5 border-primary/20 mt-2">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{q.explanation}</AlertDescription>
              </Alert>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const partDescriptions: Record<number, { title: string; desc: string }> = {
    1: {
      title: "Photographs",
      desc: "Select the statement that best describes the picture",
    },
    2: {
      title: "Question-Response",
      desc: "Choose the best response to the question",
    },
    3: {
      title: "Conversations",
      desc: "Listen to the conversation and answer the questions",
    },
    4: {
      title: "Short Talks",
      desc: "Listen to the talk and answer the questions",
    },
    5: {
      title: "Incomplete Sentences",
      desc: "Choose the word or phrase that best completes the sentence",
    },
    6: {
      title: "Text Completion",
      desc: "Choose the best word or phrase for each blank",
    },
    7: {
      title: "Reading Comprehension",
      desc: "Read the passage and answer the questions",
    },
  };

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <div className="mb-6 space-y-2">
        <div className="flex items-center justify-between">
          <Badge className="px-4 py-1.5 text-lg font-black italic">
            PART {part}
          </Badge>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {type}
          </span>
        </div>
        <div className="bg-primary/5 border-l-4 border-primary px-4 py-3 rounded">
          <p className="font-bold text-sm">{partDescriptions[part].title}</p>
          <p className="text-xs text-muted-foreground">
            {partDescriptions[part].desc}
          </p>
        </div>
      </div>

      {part === 1 && renderPart1(data as ImageQuestion)}
      {part === 2 && renderPart2(data as QuestionResponseExercise)}
      {(part === 3 || part === 4) &&
        renderPart34(data as ComprehensionExercise)}
      {part === 5 && renderPart5(data as Question)}
      {part === 6 && renderPart6(data as TextCompletionPassage)}
      {part === 7 && renderPart7(data as ReadingPassage)}
    </div>
  );
}
