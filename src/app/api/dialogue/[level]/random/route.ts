import { NextRequest, NextResponse } from "next/server";
import { dialogues } from "@/constants/dialogues";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    console.log("Dialogue API received level:", upperLevel);

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

    // Pick a random dialogue
    const randomIndex = Math.floor(Math.random() * levelDialogues.length);
    const dialogue = levelDialogues[randomIndex];

    // Shuffle questions and their options
    const questionsWithShuffledOptions = dialogue.questions.map((q) => {
      const correctIndex = q.correct;

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
        correct: newCorrectIndex,
      };
    });

    const response = {
      ...dialogue,
      questions: questionsWithShuffledOptions,
      totalDialogues: levelDialogues.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching random dialogue:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
