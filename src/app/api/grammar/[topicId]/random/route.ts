import { NextRequest, NextResponse } from "next/server";
import { questions as allQuestions } from "@/constants/quiz-question";
import { shuffleArray } from "@/lib/utils";
import { Question, Option } from "@/constants/quiz-question/types";

interface ShuffledQuestion extends Omit<Question, "options"> {
  options: Option[];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ topicId: string }> }
) {
  try {
    const { topicId } = await params;
    console.log("API received topicId:", topicId);

    const flatQuestions = Object.values(allQuestions).flat();

    const topicIdToCategory = (id: string): string => {
      return id
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    const expectedCategory = topicIdToCategory(topicId);
    console.log("Expected category:", expectedCategory);

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

    console.log("Found questions:", topicQuestions.length);
    if (topicQuestions.length > 0) {
      console.log("First question category:", topicQuestions[0].category);
    }

    if (topicQuestions.length === 0) {
      return NextResponse.json(
        {
          error: `No questions found for topic ID: "${topicId}"`,
          expectedCategory,
          availableCategories: [
            ...new Set(flatQuestions.map((q) => q.category)),
          ].slice(0, 15),
        },
        { status: 404 }
      );
    }

    // Pick a random question
    const randomIndex = Math.floor(Math.random() * topicQuestions.length);
    const question = topicQuestions[randomIndex];

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
      correctIndex: number;
      totalQuestions: number;
    } = {
      ...question,
      options: shuffled.map((item) => item.option),
      correctIndex: newCorrectIndex,
      totalQuestions: topicQuestions.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching random question:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
