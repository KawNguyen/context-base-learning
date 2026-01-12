"use client";

import { ReadingPassage } from "@/constants/reading";
import { Separator } from "@/components/ui/separator";

interface ReadingCardProps {
  passage: ReadingPassage;
  passageIndex: number;
  selectedAnswers: Map<number, number>;
  isSubmitted: boolean;
  onAnswerSelect: (questionIdx: number, answerIdx: number) => void;
}

export function ReadingCard({
  passage,
  passageIndex,
  selectedAnswers,
  isSubmitted,
  onAnswerSelect,
}: ReadingCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Left: Reading Passage */}
      <div className="bg-card border rounded-lg p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-sm font-bold">
              {passageIndex + 1}
            </span>
            <h3 className="text-lg font-bold">{passage.title}</h3>
          </div>
          <Separator className="mb-4" />
        </div>

        {/* Passage Text - TOEIC Style */}
        <div className="prose prose-sm max-w-none">
          <p className="text-base leading-relaxed whitespace-pre-line">
            {passage.passage}
          </p>
        </div>
      </div>

      {/* Right: Questions */}
      <div className="bg-card border rounded-lg p-6">
        <div className="space-y-6">
          {passage.questions.map((question, questionIdx) => {
            const globalQuestionNumber =
              passageIndex * passage.questions.length + questionIdx + 1;
            return (
              <QuestionItem
                key={questionIdx}
                question={question}
                questionNumber={globalQuestionNumber}
                selectedAnswer={selectedAnswers.get(questionIdx)}
                isSubmitted={isSubmitted}
                onAnswerSelect={(answerIdx) =>
                  onAnswerSelect(questionIdx, answerIdx)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface QuestionItemProps {
  question: {
    question: string;
    options: { isCorrect: boolean; option: string }[];
    explanation: string;
  };
  questionNumber: number;
  selectedAnswer: number | undefined;
  isSubmitted: boolean;
  onAnswerSelect: (answerIdx: number) => void;
}

function QuestionItem({
  question,
  questionNumber,
  selectedAnswer,
  isSubmitted,
  onAnswerSelect,
}: QuestionItemProps) {
  const optionLabels = ["(A)", "(B)", "(C)", "(D)"];
  const hasAnswer = selectedAnswer !== undefined;
  const correctIndex = question.options.findIndex((opt) => opt.isCorrect);
  const isCorrect = hasAnswer && selectedAnswer === correctIndex;

  return (
    <div className="space-y-3">
      {/* Question Text - TOEIC Style */}
      <p className="text-base font-medium">
        <span className="font-bold mr-2">{questionNumber}.</span>
        {question.question}
      </p>

      {/* Answer Options - TOEIC Style */}
      <div className="space-y-2 pl-6">
        {question.options.map((option, optionIdx) => {
          const isSelected = selectedAnswer === optionIdx;
          const isCorrectOption = option.isCorrect;
          const showResult = isSubmitted && hasAnswer;

          return (
            <button
              key={optionIdx}
              onClick={() => onAnswerSelect(optionIdx)}
              disabled={isSubmitted}
              className={`w-full text-left p-3 rounded-md border transition-all ${
                showResult && isSelected
                  ? isCorrectOption
                    ? "bg-green-50 border-green-500 text-green-900"
                    : "bg-red-50 border-red-500 text-red-900"
                  : isSelected
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:border-primary/50 hover:bg-accent"
              } ${isSubmitted ? "cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span className="font-semibold mr-2">
                {optionLabels[optionIdx]}
              </span>
              {option.option}
            </button>
          );
        })}
      </div>

      {/* Explanation - Only shown after submit */}
      {isSubmitted && hasAnswer && (
        <div
          className={`mt-3 p-3 rounded-md border ${
            isCorrect
              ? "bg-green-50 border-green-200 text-green-900"
              : "bg-red-50 border-red-200 text-red-900"
          }`}
        >
          <p className="text-sm font-semibold mb-1">
            {isCorrect ? "✓ Correct" : "✗ Incorrect"}
          </p>
          <p className="text-sm">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
