import { DialogueInterface } from "@/components/dialogue/dialogue-interface";
import { unslugify } from "@/lib/utils";

interface PageProps {
  params: {
    level: string;
  };
}

export default async function DialogueLevelPage({ params }: PageProps) {
  const { level } = await params;
  const slug = unslugify(level);
  return <DialogueInterface level={slug} />;
}
