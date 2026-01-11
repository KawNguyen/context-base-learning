import { TextCompletionInterface } from "@/components/text-completion/text-completion-interface";
import { TEXT_COMPLETION_DATA } from "@/constants/text-completion/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
    slug: string;
  }>;
}

export default async function TextCompletionPassagePage({ params }: PageProps) {
  const { level, slug } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const passages = TEXT_COMPLETION_DATA[level];

  if (!passages || passages.length === 0) {
    notFound();
  }

  // Find the specific passage by slug (id is already in slug format)
  const passage = passages.find((p) => p.id === slug);

  if (!passage) {
    notFound();
  }

  return <TextCompletionInterface passages={[passage]} level={cefrLevel} />;
}
