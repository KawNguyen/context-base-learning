import { TextCompletionListInterface } from "@/components/text-completion/text-completion-list-interface";
import { TEXT_COMPLETION_DATA } from "@/constants/text-completion/data";
import { shuffleArray, unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function TextCompletionRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const passages = TEXT_COMPLETION_DATA[level];

  if (!passages || passages.length === 0) {
    notFound();
  }

  const shuffled = shuffleArray(passages);
  const randomPassages = shuffled.slice(0, Math.min(10, passages.length));

  return (
    <TextCompletionListInterface passages={randomPassages} level={cefrLevel} />
  );
}
