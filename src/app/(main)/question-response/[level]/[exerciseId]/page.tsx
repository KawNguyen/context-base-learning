import { QuestionResponseInterface } from "@/components/question-response/question-response-interface";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { unslugify } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        level: string;
        exerciseId: string;
    }>;
}

export default async function QuestionResponseExercisePage({ params }: PageProps) {
    const { level, exerciseId } = await params;
    const cefrLevel = unslugify(level) as CEFRLevel;

    const allExercises = QUESTION_RESPONSE_DATA[level];

    if (!allExercises || allExercises.length === 0) {
        notFound();
    }

    // Find the specific exercise
    const exercise = allExercises.find((ex) => ex.id === exerciseId);

    if (!exercise) {
        notFound();
    }

    // Find the index to enable next/previous navigation
    const currentIndex = allExercises.findIndex((ex) => ex.id === exerciseId);
    const nextExercise = allExercises[currentIndex + 1];
    const prevExercise = allExercises[currentIndex - 1];

    return (
        <QuestionResponseInterface
            exercises={[exercise]}
            level={cefrLevel}
            mode="single"
            currentExerciseId={exerciseId}
            nextExerciseId={nextExercise?.id}
            prevExerciseId={prevExercise?.id}
        />
    );
}
