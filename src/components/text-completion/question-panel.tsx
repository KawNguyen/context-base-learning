import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2Icon, XCircleIcon, HelpCircleIcon } from "lucide-react";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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

          // Determine styling state
          let variant:
            | "default"
            | "outline"
            | "ghost"
            | "secondary"
            | "destructive" = isSelected ? "default" : "outline";
          let statusColorClass = "";

          if (showResult) {
            if (isCorrectAnswer) {
              variant = "default";
              statusColorClass =
                "bg-green-600 hover:bg-green-700 text-white border-green-600 ring-green-600";
            } else if (isSelected && !isCorrectAnswer) {
              variant = "destructive";
              statusColorClass = ""; // Use default destructive style
            } else {
              variant = "ghost";
              statusColorClass = "opacity-50";
            }
          } else {
            // Interactive state
            if (isSelected)
              statusColorClass = "ring-2 ring-primary ring-offset-2";
          }

          return (
            <Button
              key={idx}
              variant={!showResult && isSelected ? "default" : variant} // Override because our logic above is a bit mixed
              onClick={() => onSelectOption(idx)}
              disabled={showResult}
              className={cn(
                "justify-start text-left h-auto py-4 px-4 text-base relative overflow-hidden transition-all",
                statusColorClass,
                !showResult &&
                  !isSelected &&
                  "hover:bg-muted hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-bold shrink-0 transition-colors",
                  isSelected || (showResult && isCorrectAnswer)
                    ? "border-white/40 bg-white/10"
                    : "border-muted-foreground/30 bg-muted/20"
                )}
              >
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="flex-1">{opt.option}</span>

              {showResult && isCorrectAnswer && (
                <CheckCircle2Icon className="ml-2 w-5 h-5 animate-in zoom-in" />
              )}
              {showResult && isSelected && !isCorrectAnswer && (
                <XCircleIcon className="ml-2 w-5 h-5 animate-in zoom-in" />
              )}
            </Button>
          );
        })}
      </div>

      {showResult && currentQuestion.explanationVi && (
        <Card className="bg-muted/50 border-primary/20 animate-in fade-in slide-in-from-top-2">
          <CardContent className="p-4 flex gap-4">
            <HelpCircleIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-sm text-primary">Giải thích</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentQuestion.explanationVi}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
