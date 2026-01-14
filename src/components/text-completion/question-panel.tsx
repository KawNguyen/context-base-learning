import { TextCompletionPassage } from "@/constants/text-completion/types";
import { Badge } from "@/components/ui/badge";
import { AnswerButton } from "@/components/answer-button";
import { ExplanationAlert } from "../explanation-alert";

interface QuestionPanelProps {
  currentQuestion: TextCompletionPassage["questions"][0] | undefined;
  activeGapIndex: number;
  userAnswers: Record<number, number>;
  showResult: boolean;
  onSelectOption: (optionIndex: number) => void;
}

export function QuestionPanel({
  currentQuestion,
  activeGapIndex,
  userAnswers,
  showResult,
  onSelectOption,
}: QuestionPanelProps) {
  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-6 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
          <span className="text-2xl font-bold">?</span>
        </div>
        <p>Select a numbered gap in the text to see options.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
      <div className="text-center space-y-2">
        <Badge variant="outline" className="px-3 py-1 text-sm">
          Gap {activeGapIndex}
        </Badge>
        <h3 className="text-xl font-semibold tracking-tight">
          Select the correct option
        </h3>
      </div>

      <div className="grid gap-4">
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = userAnswers[activeGapIndex] === idx;
          const isCorrectAnswer = opt.isCorrect;

          return (
            <AnswerButton
              key={idx}
              label={String.fromCharCode(65 + idx)}
              isSelected={isSelected}
              isCorrect={isCorrectAnswer}
              isSubmitted={showResult}
              onClick={() => onSelectOption(idx)}
              variant="standard"
              className="h-auto py-4 text-base"
            >
              {opt.option}
            </AnswerButton>
          );
        })}
      </div>

      {showResult && currentQuestion.explanationVi && (
        <ExplanationAlert
          isCorrect={
            currentQuestion.options[userAnswers[activeGapIndex]]?.isCorrect
          }
        >
          {currentQuestion.explanationVi}
        </ExplanationAlert>
      )}
    </div>
  );
}
