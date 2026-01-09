import { QuestionResponseInterface } from "@/components/question-response/question-response-interface";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function QuestionResponseLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level) as CEFRLevel;

  const exercises = QUESTION_RESPONSE_DATA[level];

  if (!exercises || exercises.length === 0) {
    notFound();
  }

  return <QuestionResponseInterface exercises={exercises} level={cefrLevel} />;
}
