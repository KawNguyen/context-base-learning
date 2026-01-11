import { QuestionResponseInterface } from "@/components/question-response/question-response-interface";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        level: string;
    }>;
}

// Shuffle array helper
function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default async function QuestionResponseRandomPage({ params }: PageProps) {
    const { level } = await params;
    const cefrLevel = unslugify(level) as CEFRLevel;

    const allExercises = QUESTION_RESPONSE_DATA[level];

    if (!allExercises || allExercises.length === 0) {
        notFound();
    }

    // Get 10 random exercises
    const randomExercises = shuffleArray(allExercises).slice(0, 10);

    return (
        <QuestionResponseInterface
            exercises={randomExercises}
            level={cefrLevel}
            mode="random"
        />
    );
}
