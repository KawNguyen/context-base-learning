"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

interface ReadingSummaryProps {
  score: number;
  totalQuestions: number;
  totalPassages: number;
}

export function ReadingSummary({
  score,
  totalQuestions,
  totalPassages,
}: ReadingSummaryProps) {
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
          <p className="text-xl font-medium">
            {score} correct out of {totalQuestions} questions
          </p>
          <p className="text-muted-foreground">
            From {totalPassages} reading passages
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
