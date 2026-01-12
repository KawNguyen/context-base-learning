import { ReadingRandomQuiz } from "@/components/reading/reading-random-quiz";
import { readingPassages } from "@/constants/reading";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function ReadingRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const levelPassages = readingPassages[cefrLevel];

  if (!levelPassages || levelPassages.length === 0) {
    notFound();
  }

  return <ReadingRandomQuiz passages={levelPassages} level={cefrLevel} />;
}
