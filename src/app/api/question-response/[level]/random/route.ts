import { NextRequest, NextResponse } from "next/server";
import { QUESTION_RESPONSE_DATA } from "@/constants/question-response/data";
import { shuffleArray } from "@/lib/utils";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const lowerLevel = level.toLowerCase();

    console.log("Question Response API received level:", lowerLevel);

    const levelExercises = QUESTION_RESPONSE_DATA[lowerLevel];

    if (!levelExercises || levelExercises.length === 0) {
      return NextResponse.json(
        {
          error: `No question-response exercises found for level: ${level}`,
          availableLevels: Object.keys(QUESTION_RESPONSE_DATA),
        },
        { status: 404 }
      );
    }

    // Pick a random exercise
    const randomIndex = Math.floor(Math.random() * levelExercises.length);
    const exercise = levelExercises[randomIndex];

    // If transcript with responses exists, shuffle them
    if (exercise.transcript && exercise.transcript.responses) {
      const correctIndex = exercise.transcript.responses.findIndex(
        (r) => r.isCorrect
      );

      const indexedResponses = exercise.transcript.responses.map(
        (response, index) => ({
          response,
          originalIndex: index,
        })
      );

      const shuffled = shuffleArray(indexedResponses);

      const newCorrectIndex = shuffled.findIndex(
        (item) => item.originalIndex === correctIndex
      );

      return NextResponse.json({
        ...exercise,
        transcript: {
          ...exercise.transcript,
          responses: shuffled.map((item) => item.response),
          correctIndex: newCorrectIndex,
        },
        totalExercises: levelExercises.length,
      });
    }

    // No transcript with responses
    return NextResponse.json({
      ...exercise,
      totalExercises: levelExercises.length,
    });
  } catch (error) {
    console.error("Error fetching random question-response:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
