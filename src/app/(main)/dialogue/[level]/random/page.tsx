import { DialogueRandomQuiz } from "@/components/dialogue/dialogue-random-quiz";
import { dialogues } from "@/constants/dialogues";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function DialogueRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const levelDialogues = dialogues[cefrLevel];

  if (!levelDialogues || levelDialogues.length === 0) {
    notFound();
  }

  return <DialogueRandomQuiz dialogues={levelDialogues} level={cefrLevel} />;
}
