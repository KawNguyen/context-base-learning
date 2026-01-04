import { QuizLevels } from "@/components/quiz-question/quiz-level";

export default async function ComponentName() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Quiz Questions Level</h1>
        <p className="text-muted-foreground text-lg">
          Choose your English proficiency level to start practicing quiz
          questions.
        </p>
      </div>
      <QuizLevels />
    </main>
  );
}
