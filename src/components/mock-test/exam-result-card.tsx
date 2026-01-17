"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";

interface ExamResultCardProps {
  correct: number;
  totalQuestions: number;
  listeningCorrect: number;
  listeningTotal: number;
  readingCorrect: number;
  readingTotal: number;
  timeUsed: string;
  onReview: () => void;
  onExit: () => void;
}

export function ExamResultCard({
  correct,
  totalQuestions,
  listeningCorrect,
  listeningTotal,
  readingCorrect,
  readingTotal,
  timeUsed,
  onReview,
  onExit,
}: ExamResultCardProps) {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-8 animate-in zoom-in-95 duration-500">
      <Card className="border-t-8 border-t-primary shadow-2xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-black uppercase italic tracking-tighter">
            Exam Result
          </CardTitle>
          <p className="text-muted-foreground">Detailed performance analysis</p>
        </CardHeader>
        <CardContent className="p-8 space-y-8 text-center">
          <div className="relative inline-flex items-center justify-center">
            <div className="text-6xl font-black text-primary italic underline decoration-foreground/20 underline-offset-8">
              {correct}/{totalQuestions}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">
                🎧 Listening
              </p>
              <p className="text-2xl font-black text-blue-600 dark:text-blue-400">
                {listeningCorrect}/{listeningTotal}
              </p>
              <p className="text-xs text-muted-foreground">
                {listeningTotal > 0
                  ? Math.round((listeningCorrect / listeningTotal) * 100)
                  : 0}
                %
              </p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">
                📖 Reading
              </p>
              <p className="text-2xl font-black text-green-600 dark:text-green-400">
                {readingCorrect}/{readingTotal}
              </p>
              <p className="text-xs text-muted-foreground">
                {readingTotal > 0
                  ? Math.round((readingCorrect / readingTotal) * 100)
                  : 0}
                %
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">
                Total Accuracy
              </p>
              <p className="text-2xl font-black">
                {Math.round((correct / totalQuestions) * 100)}%
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-lg">
              <p className="text-[10px] font-bold uppercase text-muted-foreground mb-1">
                Time Used
              </p>
              <p className="text-2xl font-black">{timeUsed}</p>
            </div>
          </div>

          <Alert className="bg-primary/5 border-primary/20">
            <AlertCircle className="h-4 w-4 text-primary" />
            <AlertTitle>Review Mode Available</AlertTitle>
            <AlertDescription>
              You can browse through the exam questions to review your mistakes.
              Correct answers and explanations are now enabled.
            </AlertDescription>
          </Alert>

          <div className="flex gap-4">
            <Button className="flex-1 h-14 font-bold" onClick={onReview}>
              Review Questions
            </Button>
            <Button
              variant="outline"
              className="flex-1 h-14 font-bold"
              onClick={onExit}
            >
              Exit to Lobby
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
