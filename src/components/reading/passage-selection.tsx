"use client";

import { readingPassages } from "@/constants/reading";
import { PassageCard } from "./passage-card";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

interface PassageSelectionProps {
  level: CEFRLevel;
}

export function PassageSelection({ level }: PassageSelectionProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const handleRandomQuiz = () => {
    router.push(`/reading/${levelSlug}/random`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Reading Passages
            </h1>
            <CEFRBadge level={level} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Select a curated passage to sharpen your comprehension skills. Each
            passage includes interactive questions.
          </p>
        </div>
      </div>

      {/* Random Quiz Button */}
      <Card className="bg-linear-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2">Random Practice Mode</h3>
              <p className="text-muted-foreground">
                Practice 5 random reading passages in one session for intensive
                learning
              </p>
            </div>
            <Button size="lg" onClick={handleRandomQuiz} className="ml-4">
              <Shuffle className="w-5 h-5 mr-2" />
              Start Random Quiz
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {readingPassages[level].map((passage) => (
          <PassageCard key={passage.slug} passage={passage} />
        ))}
      </div>
    </div>
  );
}
