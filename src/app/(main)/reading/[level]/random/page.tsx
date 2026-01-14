import { ReadingRandomQuiz } from "@/components/reading/reading-random-quiz";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function ReadingRandomPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  return <ReadingRandomQuiz level={cefrLevel} />;
}
