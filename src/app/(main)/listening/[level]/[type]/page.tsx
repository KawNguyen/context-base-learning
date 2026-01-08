import { ListeningInterface } from "@/components/listening/listening-interface";
import { ListeningPassageSelection } from "@/components/listening/passage-selection";
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

    const levelData = LISTENING_DATA[level.toLowerCase()];

    if (!levelData) {
        return notFound();
    }

    // If it's Comprehension, we show the selection screen instead of the interface directly
    if (practiceType === "comprehension") {
        return (
            <main className="container mx-auto px-4 py-8">
                <ListeningPassageSelection
                    level={cefrLevel}
                    levelSlug={level.toLowerCase()}
                    passages={levelData.comprehensions}
                />
            </main>
        );
    }

    // Otherwise (Dictation), we show the interface with all exercises
    const exercises = levelData.dictations;

    if (!exercises || exercises.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center space-y-4">
                <h1 className="text-4xl font-bold">Coming Soon</h1>
                <p className="text-muted-foreground text-lg">
                    We are currently preparing {practiceType} exercises for Level {cefrLevel}.
                </p>
                <div className="pt-4">
                    <a href={`/listening/${level.toLowerCase()}`} className="text-primary hover:underline font-medium">
                        Go back to mode selection
                    </a>
                </div>
            </div>
        )
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
