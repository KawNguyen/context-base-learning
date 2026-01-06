import { notFound } from "next/navigation";
import { readingPassages } from "@/constants/readingPassages";
import { ReadingQuizWrapper } from "@/components/reading/reading-quiz-wrapper";
import { unslugify } from "@/lib/utils";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface PageProps {
  params: Promise<{
    level: string;
    slug: string;
  }>;
}

export default async function ReadingPassagePage({ params }: PageProps) {
  const { level: levelSlug, slug: passageSlug } = await params;
  const level = unslugify(levelSlug) as CEFRLevel;
  const passage = readingPassages[level]?.find((p) => p.slug === passageSlug);

  if (!passage) {
    notFound();
  }

  return <ReadingQuizWrapper passage={passage} />;
}
