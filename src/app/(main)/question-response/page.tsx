import { QuestionResponseLevels } from "@/components/question-response/question-response-levels";

export default function QuestionResponsePage() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Question - Response</h1>
        <p className="text-muted-foreground text-lg">
          Choose your English proficiency level to practice listening
          comprehension.
        </p>
      </div>
      <QuestionResponseLevels />
    </main>
  );
}
