import { TextCompletionListInterface } from "@/components/text-completion/text-completion-list-interface";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function TextCompletionRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  return <TextCompletionListInterface level={cefrLevel} />;
}
