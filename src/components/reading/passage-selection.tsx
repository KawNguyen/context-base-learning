import { Badge } from "../ui/badge";
import { readingPassages } from "@/constants/readingPassages";
import { PassageCard } from "./passage-card";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

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
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 font-medium bg-primary/5 border-primary/20 text-primary"
            >
              {level} Level
            </Badge>
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
