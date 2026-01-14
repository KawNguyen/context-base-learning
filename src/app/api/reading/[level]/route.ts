import { NextRequest, NextResponse } from "next/server";
import { readingPassages } from "@/constants/reading/data";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { ReadingPassage } from "@/constants/reading/type";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    const levelPassages = readingPassages[upperLevel];

    if (!levelPassages || levelPassages.length === 0) {
      return NextResponse.json(
        {
          error: `No passages found for level: ${upperLevel}`,
          availableLevels: Object.keys(readingPassages),
        },
        { status: 404 }
      );
    }

    // Shuffle all passages and their questions' options
    const shuffledPassages = levelPassages.map((passage: ReadingPassage) => {
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
    console.error("Reading API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch passages" },
      { status: 500 }
    );
  }
}
