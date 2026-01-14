import { NextRequest, NextResponse } from "next/server";
import { LISTENING_DATA } from "@/constants/listening/data";
import { shuffleArray } from "@/lib/utils";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string; type: string }> }
) {
  try {
    const { level, type } = await params;
    const lowerLevel = level.toLowerCase();

    console.log("Listening API received level:", lowerLevel, "type:", type);

    const levelData = LISTENING_DATA[lowerLevel];

    if (!levelData) {
      return NextResponse.json(
        {
          error: `No listening data found for level: ${level}`,
          availableLevels: Object.keys(LISTENING_DATA),
        },
        { status: 404 }
      );
    }

    // Get exercises based on type
    const exercises =
      type === "dictation" ? levelData.dictations : levelData.comprehensions;

    if (!exercises || exercises.length === 0) {
      return NextResponse.json(
        {
          error: `No ${type} exercises found for level: ${level}`,
        },
        { status: 404 }
      );
    }

    // Pick a random exercise
    const randomIndex = Math.floor(Math.random() * exercises.length);
    const exercise = exercises[randomIndex];

    // If comprehension, shuffle questions and options
    if (type === "comprehension" && "questions" in exercise) {
      const questionsWithShuffledOptions = exercise.questions.map((q) => {
        const correctIndex = q.options.findIndex((opt) => opt.isCorrect);

        const indexedOptions = q.options.map((option, index) => ({
          option,
          originalIndex: index,
        }));

        const shuffled = shuffleArray(indexedOptions);

        const newCorrectIndex = shuffled.findIndex(
          (item) => item.originalIndex === correctIndex
        );

        return {
          ...q,
          options: shuffled.map((item) => item.option),
          correctIndex: newCorrectIndex,
        };
      });

      return NextResponse.json({
        ...exercise,
        questions: questionsWithShuffledOptions,
        totalExercises: exercises.length,
      });
    }

    // For dictation, no shuffling needed
    return NextResponse.json({
      ...exercise,
      totalExercises: exercises.length,
    });
  } catch (error) {
    console.error("Error fetching random listening exercise:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
