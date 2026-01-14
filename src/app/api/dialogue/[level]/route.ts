import { NextRequest, NextResponse } from "next/server";
import { dialogues } from "@/constants/dialogues";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";
import { Dialogue } from "@/constants/dialogues";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    const levelDialogues = dialogues[upperLevel];

    if (!levelDialogues || levelDialogues.length === 0) {
      return NextResponse.json(
        {
          error: `No dialogues found for level: ${upperLevel}`,
          availableLevels: Object.keys(dialogues),
        },
        { status: 404 }
      );
    }

    // Shuffle all dialogues and their questions' options
    const shuffledDialogues = levelDialogues.map((dialogue: Dialogue) => {
      const shuffledQuestions = dialogue.questions.map((question) => {
        // Get correct index before shuffle
        const correctIndex = question.correct;

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
          (item: { option: string }) => item.option
        );

        return {
          ...question,
          options: shuffledOptions,
          correctIndex: newCorrectIndex,
        };
      });

      return {
        ...dialogue,
        questions: shuffledQuestions,
      };
    });

    // Shuffle dialogues order
    const finalShuffled = shuffleArray(shuffledDialogues);

    return NextResponse.json({
      level: upperLevel,
      dialogues: finalShuffled,
      total: finalShuffled.length,
    });
  } catch (error) {
    console.error("Dialogue API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dialogues" },
      { status: 500 }
    );
  }
}
