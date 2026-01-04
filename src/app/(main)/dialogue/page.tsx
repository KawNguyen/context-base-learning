import { DialogueLevels } from "@/components/dialogue/dialogue-levels";

export default function DialoguePage() {
  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Dialogue Levels</h1>
        <p className="text-muted-foreground text-lg">
          Choose your English proficiency level to start practicing dialogue.
        </p>
      </div>
      <DialogueLevels />
    </main>
  );
}
