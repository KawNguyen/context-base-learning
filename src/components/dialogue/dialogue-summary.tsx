"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award } from "lucide-react";

interface DialogueSummaryProps {
  score: number;
  totalQuestions: number;
  totalDialogues: number;
}

export function DialogueSummary({
  score,
  totalQuestions,
  totalDialogues,
}: DialogueSummaryProps) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <Card className="max-w-2xl mx-auto shadow-xl border-t-4 border-t-primary">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          <Award className="w-6 h-6 text-primary" />
          Practice Complete!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center p-8">
        <div className="relative inline-flex items-center justify-center p-1 rounded-full bg-primary/10 mb-6">
          <div className="text-5xl font-black text-primary p-8">
            {percentage}%
          </div>
        </div>
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-xl font-medium">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <span>
              {score} correct out of {totalQuestions} questions
            </span>
          </div>
          <p className="text-muted-foreground">
            From {totalDialogues} different dialogues
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
