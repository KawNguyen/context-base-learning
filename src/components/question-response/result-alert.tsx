import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

interface ResultAlertProps {
  isCorrect: boolean;
  correctAnswer: string;
}

export function ResultAlert({ isCorrect, correctAnswer }: ResultAlertProps) {
  return (
    <Alert
      variant={isCorrect ? "success" : "destructive"}
      className="bg-background/80 backdrop-blur-sm shadow-xl border-2"
    >
      {isCorrect ? (
        <CheckCircle2Icon className="h-5 w-5" />
      ) : (
        <XCircleIcon className="h-5 w-5" />
      )}
      <AlertTitle className="text-lg font-black uppercase tracking-tight">
        {isCorrect ? "Correct!" : "Incorrect"}
      </AlertTitle>
      <AlertDescription>
        The correct answer is {correctAnswer}.
      </AlertDescription>
    </Alert>
  );
}
