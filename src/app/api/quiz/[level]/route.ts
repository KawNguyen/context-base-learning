import { NextRequest, NextResponse } from "next/server";
import { questions as allQuestions } from "@/constants/quiz-question";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

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

    // Shuffle all questions and their options
    const shuffledQuestions = levelQuestions.map((question) => {
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

      const shuffledOptions = shuffled.map((item) => item.option);

      return {
        id: question.id,
        questionEn: question.questionEn,
        questionVi: question.questionVi,
        options: shuffledOptions,
        explanationVi: question.explanationVi,
        category: question.category,
        correctIndex: newCorrectIndex,
      };
    });

    // Shuffle the questions order as well
    const finalShuffled = shuffleArray(shuffledQuestions);

    return NextResponse.json({
      level: upperLevel,
      questions: finalShuffled,
      total: finalShuffled.length,
    });
  } catch (error) {
    console.error("Quiz API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
