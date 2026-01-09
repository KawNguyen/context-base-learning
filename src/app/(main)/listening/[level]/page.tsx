import { ListeningTypeSelection } from "@/components/listening/type-selection";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { LISTENING_DATA } from "@/constants/listening/data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    level: string;
  }>;
}

export default async function ListeningLevelPage({ params }: PageProps) {
  const { level } = await params;
  const cefrLevel = unslugify(level).toUpperCase() as CEFRLevel;

  const levelData = LISTENING_DATA[level.toLowerCase()];

  if (!levelData) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <ListeningTypeSelection
        level={cefrLevel}
        levelSlug={level.toLowerCase()}
        dictationCount={levelData.dictations.length}
        comprehensionCount={levelData.comprehensions.length}
      />
    </main>
  );
}
