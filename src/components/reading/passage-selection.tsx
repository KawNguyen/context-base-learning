import { readingPassages } from "@/constants/reading";
import { PassageCard } from "./passage-card";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";

interface PassageSelectionProps {
  level: CEFRLevel;
}

export function PassageSelection({ level }: PassageSelectionProps) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Reading Passages
            </h1>
            <CEFRBadge level={level} />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Select a curated passage to sharpen your comprehension skills. Each
            passage includes interactive questions.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {readingPassages[level].map((passage) => (
          <PassageCard key={passage.slug} passage={passage} />
        ))}
      </div>
    </div>
  );
}
