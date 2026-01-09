import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";
import { TextCompletionPassage } from "@/constants/text-completion/types";

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
      <div className="text-center text-muted-foreground">
        Select a gap to view options
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-center mb-6">
        Choose the best word/phrase for gap ({activeGapIndex})
      </h3>
      <div className="grid gap-3">
        {currentQuestion.options.map((opt, idx) => {
          const isSelected = userAnswers[activeGapIndex] === idx;
          const isCorrect = opt.isCorrect;

          let variant: "default" | "outline" | "secondary" | "destructive" =
            isSelected ? "default" : "outline";
          let className = "justify-start text-left h-auto py-4 px-6 text-base";

          if (showResult) {
            if (isCorrect) variant = "default";
            else if (isSelected) variant = "destructive";

            if (isCorrect)
              className +=
                " bg-green-100 text-green-900 hover:bg-green-200 border-green-500 dark:bg-green-900/30 dark:text-green-100";
          }

          return (
            <Button
              key={idx}
              variant={variant}
              onClick={() => onSelectOption(idx)}
              disabled={showResult}
              className={className}
            >
              <span className="w-6 h-6 rounded-full border flex items-center justify-center mr-3 text-xs font-bold shrink-0 opacity-70">
                {String.fromCharCode(65 + idx)}
              </span>
              {opt.option}
              {showResult && isCorrect && (
                <CheckCircle2Icon className="ml-auto w-5 h-5 text-green-600" />
              )}
              {showResult && isSelected && !isCorrect && (
                <XCircleIcon className="ml-auto w-5 h-5 text-red-500" />
              )}
            </Button>
          );
        })}
      </div>
      {showResult && currentQuestion.explanation && (
        <div className="mt-6 p-4 bg-background border rounded-lg animate-in fade-in slide-in-from-top-2">
          <p className="font-bold text-sm text-primary mb-1">Explanation:</p>
          <p className="text-sm text-muted-foreground">
            {currentQuestion.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
