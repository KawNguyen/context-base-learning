import { NextRequest, NextResponse } from "next/server";
import { questions as allQuestions } from "@/constants/quiz-question";
import { shuffleArray } from "@/lib/utils";
import { Question, Option } from "@/constants/quiz-question/types";
import { CEFRLevel } from "@/types";

interface ShuffledQuestion extends Omit<Question, "options"> {
  options: Option[];
  correctIndex: number;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    console.log("Quiz API received level:", upperLevel);

    const levelQuestions = allQuestions[upperLevel];

    if (!levelQuestions || levelQuestions.length === 0) {
      return NextResponse.json(
        {
          error: `No questions found for level: ${upperLevel}`,
          availableLevels: Object.keys(allQuestions),
        },
        { status: 404 }
      );
    }

    // Pick a random question
    const randomIndex = Math.floor(Math.random() * levelQuestions.length);
    const question = levelQuestions[randomIndex];

    // Find correct option index before shuffle
    const correctIndex = question.options.findIndex((opt) => opt.isCorrect);

    // Shuffle options
    const indexedOptions = question.options.map((option, index) => ({
      option,
      originalIndex: index,
    }));

    const shuffled = shuffleArray(indexedOptions);

    // Find new correct index after shuffle
    const newCorrectIndex = shuffled.findIndex(
      (item) => item.originalIndex === correctIndex
    );

    // Return question with shuffled options
    const response: ShuffledQuestion & {
      totalQuestions: number;
    } = {
      ...question,
      options: shuffled.map((item) => item.option),
      correctIndex: newCorrectIndex,
      totalQuestions: levelQuestions.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching random quiz question:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
