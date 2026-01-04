import { ReadingLevels } from "@/components/reading/reading-levels";

export default function ReadingPage() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Reading Levels</h1>
        <p className="text-muted-foreground text-lg">
          Choose your English proficiency level to start practicing reading.
        </p>
      </div>
      <ReadingLevels />
    </main>
  );
}
