import { NextRequest, NextResponse } from "next/server";
import { TEXT_COMPLETION_DATA } from "@/constants/text-completion/data";
import { shuffleArray } from "@/lib/utils";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const lowerLevel = level.toLowerCase();

    console.log("Text Completion API received level:", lowerLevel);

    const levelPassages = TEXT_COMPLETION_DATA[lowerLevel];

    if (!levelPassages || levelPassages.length === 0) {
      return NextResponse.json(
        {
          error: `No text completion passages found for level: ${level}`,
          availableLevels: Object.keys(TEXT_COMPLETION_DATA),
        },
        { status: 404 }
      );
    }

    // Pick a random passage
    const randomIndex = Math.floor(Math.random() * levelPassages.length);
    const passage = levelPassages[randomIndex];

    // Shuffle questions and their options
    const questionsWithShuffledOptions = passage.questions.map((question) => {
      const correctIndex = question.options.findIndex((opt) => opt.isCorrect);

      const indexedOptions = question.options.map((option, index) => ({
        option,
        originalIndex: index,
      }));

      const shuffled = shuffleArray(indexedOptions);

      const newCorrectIndex = shuffled.findIndex(
        (item) => item.originalIndex === correctIndex
      );

      return {
        ...question,
        options: shuffled.map((item) => item.option),
        correctIndex: newCorrectIndex,
      };
    });

    const response = {
      ...passage,
      questions: questionsWithShuffledOptions,
      totalPassages: levelPassages.length,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching random text completion:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
