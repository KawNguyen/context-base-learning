"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { MockExamQuestion } from "@/types/mock-exam";

interface QuestionNavigationProps {
  questions: MockExamQuestion[];
  currentIndex: number;
  answers: Record<string, number | number[]>;
  onNavigate: (index: number) => void;
}

export function QuestionNavigation({
  questions,
  currentIndex,
  answers,
  onNavigate,
}: QuestionNavigationProps) {
  return (
    <Card className="animate-in slide-in-from-top-4 duration-300">
      <CardContent className="p-4 grid grid-cols-5 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-20 gap-2">
        {questions.map((q, idx) => (
          <Button
            key={idx}
            size="sm"
            variant={
              currentIndex === idx
                ? "default"
                : answers[q.id]
                ? "secondary"
                : "outline"
            }
            className={cn(
              "h-8 w-8 p-0 text-[10px] font-bold",
              currentIndex === idx && "ring-2 ring-primary ring-offset-1"
            )}
            onClick={() => onNavigate(idx)}
          >
            {idx + 1}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
