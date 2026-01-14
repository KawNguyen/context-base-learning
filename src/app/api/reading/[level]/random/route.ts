import { NextRequest, NextResponse } from "next/server";
import { readingPassages } from "@/constants/reading";
import { shuffleArray } from "@/lib/utils";
import { CEFRLevel } from "@/types";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ level: string }> }
) {
  try {
    const { level } = await params;
    const upperLevel = level.toUpperCase() as CEFRLevel;

    console.log("Reading API received level:", upperLevel);

    const levelPassages = readingPassages[upperLevel];

    if (!levelPassages || levelPassages.length === 0) {
      return NextResponse.json(
        {
          error: `No reading passages found for level: ${upperLevel}`,
          availableLevels: Object.keys(readingPassages),
        },
        { status: 404 }
      );
    }

    // Pick a random passage
    const randomIndex = Math.floor(Math.random() * levelPassages.length);
    const passage = levelPassages[randomIndex];

    // Shuffle questions and their options
    const questionsWithShuffledOptions = passage.questions.map((q) => {
      const correctIndex = q.options.findIndex((opt) => opt.isCorrect);

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
    console.error("Error fetching random reading passage:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
