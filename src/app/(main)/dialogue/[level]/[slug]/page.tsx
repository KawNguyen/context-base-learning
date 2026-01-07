import { notFound } from "next/navigation";
import { dialogues} from "@/constants/dialogues";
import { unslugify } from "@/lib/utils";
import { DialogueQuizWrapper } from "@/components/dialogue/dialogue-quiz-wrapper";
import { CEFRLevel } from "@/types";

interface PageProps {
  params: Promise<{
    level: string;
    slug: string;
  }>;
}

export default async function DialogueSlugPage({ params }: PageProps) {
  const { level: levelSlug, slug: dialogueSlug } = await params;
  const level = unslugify(levelSlug) as CEFRLevel;
  const dialogue = dialogues[level]?.find((d) => d.slug === dialogueSlug) ;

  if (!dialogue) {
    notFound();
  }

  return <DialogueQuizWrapper dialogue={dialogue} level={level} />;
}
