import { ListeningInterface } from "@/components/listening/listening-interface";
import { ListeningPassageRandom } from "@/components/listening/listening-passage-random";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { LISTENING_DATA } from "@/constants/listening/data";
import { notFound } from "next/navigation";
import { ListeningType } from "@/constants/listening/types";

interface PageProps {
  params: Promise<{
    level: string;
    type: string;
  }>;
}

export default async function ListeningPracticePage({ params }: PageProps) {
  const { level, type } = await params;
  const cefrLevel = unslugify(level).toUpperCase() as CEFRLevel;
  const practiceType = type.toLowerCase() as ListeningType;

  // If it's Comprehension, we show the selection screen with API data
  if (practiceType === "comprehension") {
    return (
      <main className="container mx-auto px-4 py-8">
        <ListeningPassageRandom level={cefrLevel} />
      </main>
    );
  }

  // Otherwise (Dictation), we show the interface with all exercises from static data
  const levelData = LISTENING_DATA[level.toLowerCase()];

  if (!levelData) {
    return notFound();
  }

  const exercises = levelData.dictations;

  if (!exercises || exercises.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center space-y-4">
        <h1 className="text-4xl font-bold">Coming Soon</h1>
        <p className="text-muted-foreground text-lg">
          We are currently preparing {practiceType} exercises for Level{" "}
          {cefrLevel}.
        </p>
        <div className="pt-4">
          <a
            href={`/listening/${level.toLowerCase()}`}
            className="text-primary hover:underline font-medium"
          >
            Go back to mode selection
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ListeningInterface
        exercises={exercises}
        level={cefrLevel}
        type={practiceType}
      />
    </main>
  );
}
