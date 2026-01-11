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
  // Determine status color
  let statusClass = "bg-muted text-muted-foreground hover:bg-muted/80"; // Default

  if (showResult) {
    if (isCorrect) {
      statusClass =
        "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800";
    } else {
      statusClass =
        "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800";
    }
  } else if (isSelected) {
    statusClass =
      "bg-primary text-primary-foreground shadow-sm ring-2 ring-primary ring-offset-2";
  } else if (hasAnswer) {
    statusClass =
      "bg-secondary text-secondary-foreground border-secondary-foreground/20 hover:bg-secondary/80";
  }

  return (
    <span
      onClick={onClick}
      className={cn(
        "inline-flex mx-1 align-middle cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95",
        "h-6 min-w-6 px-1.5 rounded-md border items-center justify-center text-xs font-bold leading-none select-none",
        statusClass
      )}
      role="button"
      tabIndex={0}
      aria-label={`Gap ${gapIndex}`}
    >
      {gapIndex}
    </span>
  );
}
