"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { dialogues } from "@/constants/dialogues";
import { CEFRLevel } from "@/types";
import { MessageSquare, Shuffle } from "lucide-react";
import { useRouter, useParams } from "next/navigation";

interface DialogueSelectionProps {
  level: CEFRLevel;
}

export function DialogueSelection({ level }: DialogueSelectionProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  const handleDialogueSelect = (slug: string) => {
    router.push(`/dialogue/${levelSlug}/${slug}`);
  };

  const handleRandomQuiz = () => {
    router.push(`/dialogue/${levelSlug}/random`);
  };

  return (
    <div className="space-y-6">
      {/* Random Quiz Button */}
      <Card className="bg-linear-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2">Random Practice Mode</h3>
              <p className="text-muted-foreground">
                Practice 10 random dialogues in one session for intensive
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

      {/* Individual Dialogues */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dialogues[level].map((dialogue) => (
          <Card
            key={dialogue.slug}
            className="cursor-pointer border-2 hover:border-primary transition-all hover:shadow-md"
            onClick={() => handleDialogueSelect(dialogue.slug)}
          >
            <CardContent className="p-5 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg mb-1 truncate">
                  {dialogue.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {dialogue.lines.length} lines • {dialogue.questions.length} Q
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary ml-3 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
