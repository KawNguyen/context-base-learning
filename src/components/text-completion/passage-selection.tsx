"use client";

import { TextCompletionPassage } from "@/constants/text-completion/types";
import { PassageCard } from "./passage-card";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

interface PassageSelectionProps {
  level: CEFRLevel;
  passages: TextCompletionPassage[];
}

export function PassageSelection({ level, passages }: PassageSelectionProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const handleRandomQuiz = () => {
    router.push(`/text-completion/${levelSlug}/random`);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Text Completion
            </h1>
            <CEFRBadge level={level} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Select a passage to practice fill-in-the-blank exercises, or try a
            random quiz with 10 passages.
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleRandomQuiz}
            size="lg"
            className="gap-2"
            variant="default"
          >
            <Shuffle className="h-4 w-4" />
            Random 10 Passages
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {passages.map((passage) => (
          <PassageCard key={passage.id} passage={passage} />
        ))}
      </div>
    </div>
  );
}
