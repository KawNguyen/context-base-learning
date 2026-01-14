import { NextRequest, NextResponse } from "next/server";
import { questions as allQuestions } from "@/constants/quiz-question";
import { shuffleArray } from "@/lib/utils";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ topicId: string }> }
) {
  try {
    const { topicId } = await params;

    const flatQuestions = Object.values(allQuestions).flat();

    const topicIdToCategory = (id: string): string => {
      return id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    const expectedCategory = topicIdToCategory(topicId);

    const topicQuestions = flatQuestions.filter((q) => {
      // Try exact match first
      if (q.topicId === topicId) return true;

      // Try category match
      if (q.category === expectedCategory) return true;

      // Try normalized match (case-insensitive)
      const normalizedCategory = q.category.toLowerCase();
      const normalizedExpected = expectedCategory.toLowerCase();

      return normalizedCategory === normalizedExpected;
    });

    if (topicQuestions.length === 0) {
      return NextResponse.json(
        {
          error: `No questions found for topic: ${topicId}`,
          expectedCategory,
          availableCategories: [
            ...new Set(flatQuestions.map((q) => q.category)),
          ],
        },
        { status: 404 }
      );
    }

    // Shuffle all questions and their options
    const shuffledQuestions = topicQuestions.map((question) => {
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
        topicId: question.topicId,
        correctIndex: newCorrectIndex,
      };
    });

    // Shuffle the questions order as well
    const finalShuffled = shuffleArray(shuffledQuestions);

    return NextResponse.json({
      topicId,
      category: expectedCategory,
      questions: finalShuffled,
      total: finalShuffled.length,
    });
  } catch (error) {
    console.error("Grammar API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}
