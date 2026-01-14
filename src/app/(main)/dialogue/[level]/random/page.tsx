import { DialogueRandomQuiz } from "@/components/dialogue/dialogue-random-quiz";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function DialogueRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  return <DialogueRandomQuiz level={cefrLevel} />;
}
