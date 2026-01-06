import { DialogueSelection } from "@/components/dialogue/dialogue-selection";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/constants/dialogues";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function DialogueLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  return <DialogueSelection level={cefrLevel} />;
}
