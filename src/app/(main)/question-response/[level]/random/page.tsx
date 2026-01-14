import { QuestionResponseRandomQuiz } from "@/components/question-response/question-response-random-quiz";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function QuestionResponseRandomPage({
  params,
}: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  return <QuestionResponseRandomQuiz level={cefrLevel} />;
}
