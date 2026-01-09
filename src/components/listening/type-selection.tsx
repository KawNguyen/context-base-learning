"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { Keyboard, BookText, BadgeInfo } from "lucide-react";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";

interface ListeningTypeSelectionProps {
  level: CEFRLevel;
  dictationCount: number;
  comprehensionCount: number;
  levelSlug: string;
}

export function ListeningTypeSelection({
  level,
  dictationCount,
  comprehensionCount,
  levelSlug,
}: ListeningTypeSelectionProps) {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-3">Choose Practice Mode</h1>
          <p className="text-muted-foreground text-lg">
            Select how you want to practice your listening skills for Level{" "}
            {level}.
          </p>
        </div>
        <CEFRBadge level={level} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card
          className="group cursor-pointer hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl bg-card/50"
          onClick={() => router.push(`/listening/${levelSlug}/dictation`)}
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 text-blue-500 group-hover:scale-110 transition-transform">
              <Keyboard size={28} />
            </div>
            <CardTitle className="text-2xl">Dictation</CardTitle>
            <CardDescription className="text-base">
              Listen to short sentences and type exactly what you hear. Focuses
              on spelling and precision.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <BadgeInfo size={16} />
              {dictationCount} exercises available
            </div>
            <Button className="w-full">Start Dictation</Button>
          </CardContent>
        </Card>

        <Card
          className="group cursor-pointer hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl bg-card/50"
          onClick={() => router.push(`/listening/${levelSlug}/comprehension`)}
        >
          <CardHeader>
            <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 text-green-500 group-hover:scale-110 transition-transform">
              <BookText size={28} />
            </div>
            <CardTitle className="text-2xl">Comprehension</CardTitle>
            <CardDescription className="text-base">
              Listen to short stories and answer multiple-choice questions.
              Focuses on general understanding.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-6">
              <BadgeInfo size={16} />
              {comprehensionCount} passages with 6 questions each
            </div>
            <Button className="w-full" variant="secondary">
              Start Comprehension
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button variant="ghost" onClick={() => router.push("/listening")}>
          Back to Level Selection
        </Button>
      </div>
    </div>
  );
}
