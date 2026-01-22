import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ExplanationAlertProps {
  /** Explanation content */
  children: React.ReactNode;
  /** Title (defaults to "Correct!" or "Incorrect") */
  title?: string;
  /** Whether the answer is correct (required) */
  isCorrect: boolean;
  /** Custom class name */
  className?: string;
  /** Show icon */
  showIcon?: boolean;
}

export function ExplanationAlert({
  children,
  title,
  isCorrect,
  className,
  showIcon = true,
}: ExplanationAlertProps) {
  // Determine icon, title and styles based on isCorrect
  const config = isCorrect
    ? {
        icon: <CheckCircle2 className="w-4 h-4" />,
        title: title || "Correct!",
        className:
          "border-green-500/50 bg-green-500/5 dark:border-green-600/50 dark:bg-green-950/50",
        titleClassName: "text-green-600 dark:text-green-400",
      }
    : {
        icon: <XCircle className="w-4 h-4" />,
        title: title || "Incorrect",
        className:
          "border-red-500/50 bg-red-500/5 dark:border-red-600/50 dark:bg-red-950/50",
        titleClassName: "text-red-600 dark:text-red-400",
      };

  return (
    <Alert className={cn("border-2", config.className, className)}>
      <AlertTitle
        className={config.titleClassName + " flex items-center gap-2"}
      >
        {showIcon && config.icon}
        {config.title}
      </AlertTitle>
      <AlertDescription className="text-muted-foreground mt-1">
        {children}
      </AlertDescription>
    </Alert>
  );
}
