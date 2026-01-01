import { QuizInterface } from "@/components/quiz-question/quiz-interface";

export default async function Page(params: { params: { level: string } }) {
  const { level } = await params.params;
  return <QuizInterface level={level} />;
}
