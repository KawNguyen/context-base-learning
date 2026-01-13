"use client";

import { Dialogue, Question } from "@/constants/dialogues";
import { Separator } from "@/components/ui/separator";
import { AnswerButton } from "@/components/answer-button";
import { ExplanationAlert } from "@/components/explanation-alert";

interface DialogueCardProps {
  dialogue: Dialogue;
  dialogueIndex: number;
  selectedAnswers: Map<number, number>;
  isSubmitted: boolean;
  onAnswerSelect: (questionIdx: number, answerIdx: number) => void;
}

export function DialogueCard({
  dialogue,
  dialogueIndex,
  selectedAnswers,
  isSubmitted,
  onAnswerSelect,
}: DialogueCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Left: Dialogue Passage */}
      <div className="bg-card border rounded-lg p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-foreground text-background text-sm font-bold">
              {dialogueIndex + 1}
            </span>
            <h3 className="text-lg font-bold">{dialogue.title}</h3>
          </div>
          <Separator className="mb-4" />
        </div>

        {/* Dialogue Lines - TOEIC Style */}
        <div className="space-y-3">
          {dialogue.lines.map((line, lineIdx) => (
            <div key={lineIdx} className="space-y-1">
              <p className="text-sm font-semibold text-foreground/80">
                {line.speaker}:
              </p>
              <p className="text-base leading-relaxed pl-4 border-l-2 border-muted">
                {line.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Questions */}
      <div className="bg-card border rounded-lg p-6">
        <div className="space-y-6">
          {dialogue.questions.map((question, questionIdx) => {
            const globalQuestionNumber = dialogueIndex * 3 + questionIdx + 1;
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
  question: Question;
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
  const isCorrect = hasAnswer && selectedAnswer === question.correct;

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
          const isCorrectOption = optionIdx === question.correct;

          return (
            <AnswerButton
              key={optionIdx}
              label={optionLabels[optionIdx]}
              isSelected={isSelected}
              isCorrect={isCorrectOption}
              isSubmitted={isSubmitted}
              onClick={() => onAnswerSelect(optionIdx)}
              variant="toeic"
            >
              {option}
            </AnswerButton>
          );
        })}
      </div>

      {/* Explanation - Only shown after submit */}
      {isSubmitted && hasAnswer && (
        <ExplanationAlert isCorrect={isCorrect}>
          {question.explanation}
        </ExplanationAlert>
      )}
    </div>
  );
}
