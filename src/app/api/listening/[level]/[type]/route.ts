import { NextRequest, NextResponse } from "next/server";
import { LISTENING_DATA } from "@/constants/listening/data";
import { shuffleArray } from "@/lib/utils";
import { ComprehensionExercise } from "@/constants/listening/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string; type: string }> }
) {
  try {
    const { level, type } = await params;
    const levelKey = level.toLowerCase();
    const typeKey = type.toLowerCase();

    const levelData = LISTENING_DATA[levelKey];

    if (!levelData) {
      return NextResponse.json(
        {
          error: `No listening data found for level: ${level}`,
          availableLevels: Object.keys(LISTENING_DATA),
        },
        { status: 404 }
      );
    }

    let exercises;
    if (typeKey === "dictation") {
      exercises = levelData.dictations;
    } else if (typeKey === "comprehension") {
      exercises = levelData.comprehensions;
    } else {
      return NextResponse.json(
        {
          error: `Invalid type: ${type}. Must be 'dictation' or 'comprehension'`,
        },
        { status: 400 }
      );
    }

    if (!exercises || exercises.length === 0) {
      return NextResponse.json(
        {
          error: `No ${type} exercises found for level: ${level}`,
        },
        { status: 404 }
      );
    }

    // For comprehension, shuffle questions' options
    if (typeKey === "comprehension") {
      const comprehensionExercises = exercises as ComprehensionExercise[];
      const shuffledExercises = comprehensionExercises.map(
        (exercise: ComprehensionExercise) => {
          const shuffledQuestions = exercise.questions.map((question) => {
            // Find correct answer index before shuffle
            const correctIndex = question.options.findIndex(
              (opt) => opt.isCorrect
            );

            // Shuffle options
            const indexedOptions = question.options.map((option, index) => ({
              option,
              originalIndex: index,
            }));

            const shuffled = shuffleArray(indexedOptions);

            // Find new correct index after shuffle
            const newCorrectIndex = shuffled.findIndex(
              (item: { originalIndex: number }) =>
                item.originalIndex === correctIndex
            );

            const shuffledOptions = shuffled.map(
              (item: { option: (typeof question.options)[0] }) => item.option
            );

            return {
              ...question,
              options: shuffledOptions,
              correctIndex: newCorrectIndex,
            };
          });

          return {
            ...exercise,
            questions: shuffledQuestions,
          };
        }
      );

      // Shuffle exercises order
      const finalShuffled = shuffleArray(shuffledExercises);

      return NextResponse.json({
        level: level.toUpperCase(),
        type: typeKey,
        exercises: finalShuffled,
        total: finalShuffled.length,
      });
    }

    // For dictation, just shuffle order
    const shuffledExercises = shuffleArray([...exercises]);

    return NextResponse.json({
      level: level.toUpperCase(),
      type: typeKey,
      exercises: shuffledExercises,
      total: shuffledExercises.length,
    });
  } catch (error) {
    console.error("Listening API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch exercises" },
      { status: 500 }
    );
  }
}
