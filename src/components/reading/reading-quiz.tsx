"use client";

import { Button } from "@/components/ui/button";
import { ReadingPassage } from "@/constants/readingPassages";
import { useInteractiveText } from "@/hooks/use-interactive-text";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

interface ReadingQuizProps {
  passage: ReadingPassage;
  currentQuestion: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
}

export function ReadingQuiz({
  passage,
  currentQuestion,
  selectedAnswer,
  showExplanation,
  onAnswerSelect,
  onCheckAnswer,
  onNextQuestion,
}: ReadingQuizProps) {
  const { words } = useInteractiveText(passage.passage);

  return (
    <div className="mx-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-card border-r border-border overflow-y-auto max-h-screen sticky top-0">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {passage.title}
          </h2>
          <div className="prose max-w-none mb-6">
            <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
              {words.map((word, index) => {
                if (!word.isTranslatable) {
                  return <span key={index}>{word.raw}</span>;
                }

                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <span className="cursor-pointer underline underline-offset-4 hover:text-blue-300">
                        {word.raw}
                      </span>
                    </PopoverTrigger>

                    <PopoverContent className="w-60 text-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                          {word.normalized}
                        </h4>
                        <Badge variant={"outline"} className="text-xs">
                          {word.word?.partOfSpeech || "Unknown"}
                        </Badge>
                      </div>
                      <div className="text-md text-muted-foreground">
                        {word.word?.phonetic}
                      </div>
                      <Separator className="my-2" />
                      <div className="text-muted-foreground">
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

        <div className="p-8 overflow-y-auto max-h-screen sticky top-0">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg">
                Question {currentQuestion + 1} of {passage.questions.length}
              </h3>
              <span className="text-sm text-muted-foreground">
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

          <p className="text-base mb-4">
            {passage.questions[currentQuestion].question}
          </p>

          <div className="space-y-2 mb-4">
            {passage.questions[currentQuestion].options.map(
              (option: string, index: number) => (
                <Button
                  key={index}
                  onClick={() => onAnswerSelect(index)}
                  variant={
                    !showExplanation
                      ? selectedAnswer === index
                        ? "default"
                        : "outline"
                      : selectedAnswer === index
                      ? selectedAnswer ===
                        passage.questions[currentQuestion].correct
                        ? "default"
                        : "destructive"
                      : index === passage.questions[currentQuestion].correct
                      ? "default"
                      : "outline"
                  }
                  className="w-full text-left justify-start h-auto py-3 px-4"
                  disabled={showExplanation}
                >
                  <span className="font-medium mr-2">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              )
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

          <div className="flex justify-end items-center">
            {!showExplanation ? (
              <Button
                onClick={onCheckAnswer}
                disabled={selectedAnswer === null}
              >
                Check Answer
              </Button>
            ) : (
              <Button onClick={onNextQuestion}>
                {currentQuestion < passage.questions.length - 1
                  ? "Next Question"
                  : "Finish Quiz"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
