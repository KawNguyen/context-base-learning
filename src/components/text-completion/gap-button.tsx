import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GapButtonProps {
  gapIndex: number;
  isSelected: boolean;
  hasAnswer: boolean;
  isCorrect?: boolean;
  showResult: boolean;
  onClick: () => void;
}

export function GapButton({
  gapIndex,
  isSelected,
  hasAnswer,
  isCorrect,
  showResult,
  onClick,
}: GapButtonProps) {
  return (
    <span className="inline-block align-middle mx-1">
      <Button
        variant={isSelected ? "default" : hasAnswer ? "secondary" : "outline"}
        size="sm"
        onClick={onClick}
        className={cn(
          "min-w-[40px] h-8 font-bold transition-all border-2",
          isSelected && "ring-2 ring-primary ring-offset-2",
          showResult &&
            (isCorrect
              ? "bg-green-500 hover:bg-green-600 text-white border-green-600"
              : "bg-red-500 hover:bg-red-600 text-white border-red-600")
        )}
      >
        {gapIndex}
      </Button>
    </span>
  );
}
