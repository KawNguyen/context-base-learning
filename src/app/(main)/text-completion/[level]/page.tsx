import { PassageSelection } from "@/components/text-completion/passage-selection";
import { TEXT_COMPLETION_DATA } from "@/constants/text-completion/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function TextCompletionLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const passages = TEXT_COMPLETION_DATA[level];

  if (!passages || passages.length === 0) {
    notFound();
  }

  return <PassageSelection level={cefrLevel} passages={passages} />;
}
