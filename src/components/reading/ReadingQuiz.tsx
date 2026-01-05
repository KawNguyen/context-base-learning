"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReadingPassage } from "@/constants/readingPassages";
import { useInteractiveText } from "@/hooks/use-interactive-text";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

interface ReadingQuizProps {
  passage: ReadingPassage;
  currentQuestion: number;
  selectedAnswer: number | null;
  showExplanation: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
  onBackToPassages: () => void;
}

export function ReadingQuiz({
  passage,
  currentQuestion,
  selectedAnswer,
  showExplanation,
  onAnswerSelect,
  onNextQuestion,
  onBackToPassages,
}: ReadingQuizProps) {
  const { words } = useInteractiveText(passage.passage);
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{passage.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-base leading-relaxed whitespace-pre-line">
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

                    <PopoverContent className="w-52 text-sm">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
                          {word.normalized}
                        </h4>
                        <Badge variant={"outline"} className="text-xs">{word.word?.partOfSpeech || "Unknown"}</Badge>
                      </div>
                      <div className="text-md text-muted-foreground">
                        {word.word?.phonetic}
                      </div>
                      <Separator className="my-2" />
                      <div className="text-muted-foreground">
                        {/* sau này gọi API dictionary */}
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

          <div className="border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">
              Question {currentQuestion + 1} of {passage.questions.length}
            </h3>

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

            <div className="flex justify-between items-center">
              <Button onClick={onBackToPassages} variant="outline">
                Back to Passages
              </Button>

              {showExplanation && (
                <Button onClick={onNextQuestion}>
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
