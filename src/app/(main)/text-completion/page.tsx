import { TextCompletionLevels } from "@/components/text-completion/text-completion-levels";

export default function TextCompletionPage() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Text Completion</h1>
        <p className="text-muted-foreground text-lg">
          Choose your English proficiency level to practice fill-in-the-blank
          exercises.
        </p>
      </div>
      <TextCompletionLevels />
    </main>
  );
}
