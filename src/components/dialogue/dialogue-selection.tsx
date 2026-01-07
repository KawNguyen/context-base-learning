"use client";

import { Card, CardContent } from "@/components/ui/card";
import { dialogues } from "@/constants/dialogues";
import { CEFRLevel } from "@/types";
import { MessageSquare } from "lucide-react";
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

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dialogues[level].map((dialogue) => (
        <Card
          key={dialogue.slug}
          className="cursor-pointer border-2 hover:border-primary transition-all hover:shadow-md"
          onClick={() => handleDialogueSelect(dialogue.slug)}
        >
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-xl mb-1">{dialogue.title}</h3>
              <p className="text-muted-foreground">
                {dialogue.lines.length} lines • {dialogue.questions.length}{" "}
                questions
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MessageSquare className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
