"use client";

import { Button } from "@/components/ui/button";
import { ReadingPassage } from "@/constants/reading";
import { useInteractiveText } from "@/hooks/use-interactive-text";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { AnswerButton } from "@/components/answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";
import { useShuffleOptions } from "@/hooks/use-shuffle-options";

interface ReadingQuizProps {
  passage: ReadingPassage;
  level: CEFRLevel;
  currentQuestion: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  shuffledOptions: { isCorrect: boolean; option: string }[];
  newCorrectIndex: number | undefined;
  onAnswerSelect: (answerIndex: number) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
}

export function ReadingQuiz({
  passage,
  level,
  currentQuestion,
  selectedAnswer,
  showExplanation,
  shuffledOptions,
  newCorrectIndex,
  onAnswerSelect,
  onCheckAnswer,
  onNextQuestion,
  onPreviousQuestion,
}: ReadingQuizProps) {
  const { words } = useInteractiveText(passage.passage);

  // No longer shuffling here, it's done in the wrapper
  // const currentOptions = passage.questions[currentQuestion].options;
  // const correctOptionIndex = currentOptions.findIndex(
  //   (o: { isCorrect: boolean }) => o.isCorrect
  // );

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Reading Passage Section */}
        <div className="flex flex-col">
          <div className="bg-card border rounded-lg p-8 flex flex-col h-[calc(100vh-8rem)]">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-2xl font-bold">{passage.title}</h2>
              <CEFRBadge level={level} />
            </div>
            <div className="flex-1 overflow-y-auto pr-2">
              <p className="text-base leading-relaxed whitespace-pre-line">
                {words.map((word, index) => {
                  if (!word.isTranslatable) {
                    return <span key={index}>{word.raw}</span>;
                  }

                  return (
                    <Popover key={index}>
                      <PopoverTrigger asChild>
                        <span className="cursor-pointer hover:text-primary transition-colors underline">
                          {word.raw}
                        </span>
                      </PopoverTrigger>

                      <PopoverContent className="w-60 text-sm">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-base font-semibold">
                            {word.normalized}
                          </h4>
                          <Badge variant={"outline"} className="text-xs">
                            {word.word?.partOfSpeech || "Unknown"}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {word.word?.phonetic}
                        </div>
                        <Separator className="my-2" />
                        <div className="text-sm text-muted-foreground">
                          {word.word
                            ? word.word.meaningVi
                            : "No definition found."}
                        </div>
                      </PopoverContent>
                    </Popover>
                  );
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="flex flex-col">
          <div className="bg-card border rounded-lg p-8 flex flex-col h-[calc(100vh-8rem)]">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Question
                </span>
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Score
                </span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-semibold">
                  {currentQuestion + 1} of {passage.questions.length}
                </span>
                <span className="text-base font-semibold">
                  {Math.round(
                    ((currentQuestion + 1) / passage.questions.length) * 100
                  )}
                  %
                </span>
              </div>
              <Progress
                value={((currentQuestion + 1) / passage.questions.length) * 100}
                className="h-2"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <p className="text-base font-medium mb-6">
                {passage.questions[currentQuestion].question}
              </p>

              <div className="space-y-3 mb-6">
                {shuffledOptions.map(
                  (
                    opt: { isCorrect: boolean; option: string },
                    index: number
                  ) => (
                    <AnswerButton
                      key={index}
                      label={`${String.fromCharCode(65 + index)}.`}
                      isSelected={selectedAnswer === index}
                      isCorrect={showExplanation && index === newCorrectIndex}
                      isSubmitted={showExplanation}
                      onClick={() => onAnswerSelect(index)}
                      variant="standard"
                      className="py-3 px-4 text-sm"
                    >
                      {opt.option}
                    </AnswerButton>
                  )
                )}
              </div>

              {showExplanation && (
                <ExplanationAlert
                  isCorrect={selectedAnswer === newCorrectIndex}
                >
                  {passage.questions[currentQuestion].explanation}
                </ExplanationAlert>
              )}
            </div>

            <div className="flex justify-between gap-3 mt-auto">
              <Button
                onClick={onPreviousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1"
              >
                ← Previous
              </Button>
              {!showExplanation ? (
                <Button
                  onClick={onCheckAnswer}
                  disabled={selectedAnswer === null}
                  className="flex-1"
                >
                  Check Answer
                </Button>
              ) : (
                <Button
                  onClick={onNextQuestion}
                  className="flex-1"
                  disabled={currentQuestion === passage.questions.length - 1}
                >
                  Next →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
