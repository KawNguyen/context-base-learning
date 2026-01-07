import { QuizInterface } from "@/components/quiz-question/quiz-interface";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export default async function Page(params: { params: { level: string } }) {
  const { level } = await params.params;
  const slug = unslugify(level) as CEFRLevel;
  return <QuizInterface level={slug} />;
}
