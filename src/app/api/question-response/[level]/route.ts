import { NextRequest, NextResponse } from "next/server";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const levelKey = level.toLowerCase();

    const levelExercises = QUESTION_RESPONSE_DATA[levelKey];

    if (!levelExercises || levelExercises.length === 0) {
      return NextResponse.json(
        {
          error: `No question-response exercises found for level: ${level}`,
          availableLevels: Object.keys(QUESTION_RESPONSE_DATA),
        },
        { status: 404 }
      );
    }

    // Shuffle exercises order
    const shuffledExercises = shuffleArray([...levelExercises]);

    return NextResponse.json({
      level: level.toUpperCase(),
      exercises: shuffledExercises,
      total: shuffledExercises.length,
    });
  } catch (error) {
    console.error("Question Response API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch exercises" },
      { status: 500 }
    );
  }
}
