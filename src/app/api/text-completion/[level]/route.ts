import { NextRequest, NextResponse } from "next/server";
import { TEXT_COMPLETION_DATA } from "@/constants/text-completion/data";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    const levelPassages = TEXT_COMPLETION_DATA[upperLevel];

    if (!levelPassages || levelPassages.length === 0) {
      return NextResponse.json(
        {
          error: `No text completion passages found for level: ${upperLevel}`,
          availableLevels: Object.keys(TEXT_COMPLETION_DATA),
        },
        { status: 404 }
      );
    }

    // Shuffle all passages and their questions' options
    const shuffledPassages = levelPassages.map((passage) => {
      const shuffledQuestions = passage.questions.map((question) => {
        // Find correct answer index before shuffle
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
          ...question,
          options: shuffledOptions,
          correctIndex: newCorrectIndex,
        };
      });

      return {
        ...passage,
        questions: shuffledQuestions,
      };
    });

    // Shuffle passages order
    const finalShuffled = shuffleArray(shuffledPassages);

    return NextResponse.json({
      level: upperLevel,
      passages: finalShuffled,
      total: finalShuffled.length,
    });
  } catch (error) {
    console.error("Text Completion API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch passages" },
      { status: 500 }
    );
  }
}
