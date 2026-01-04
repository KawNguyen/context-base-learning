import { QuizInterface } from "@/components/quiz-question/quiz-interface";
import { unslugify } from "@/lib/utils";

export default async function Page(params: { params: { level: string } }) {
  const { level } = await params.params;
  const slug = unslugify(level);
  return <QuizInterface level={slug} />;
}
