"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { useRouter } from "next/navigation";
import { Progress } from "../ui/progress";
import { CEFRLevel } from "@/types";
import { Card, CardContent } from "../ui/card";
import { QuestionPanel } from "./question-panel";
import { ReadingTextCard } from "./reading-text-card";

interface TextCompletionInterfaceProps {
  passages: TextCompletionPassage[];
  level: CEFRLevel;
}

export function TextCompletionInterface({
  passages,
  level,
}: TextCompletionInterfaceProps) {
  const router = useRouter();
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const passage = passages[currentPassageIndex];

  const textSegments = useMemo(() => {
    if (!passage) return [];
    // Regex to match {{number}}
    const regex = /\{\{(\d+)\}\}/g;
    let lastIndex = 0;
    const segments: Array<{
      type: "text" | "gap";
      content?: string;
      index?: number;
    }> = [];
    let match;

    while ((match = regex.exec(passage.content)) !== null) {
      // Push text before the match
      if (match.index > lastIndex) {
        segments.push({
          type: "text" as const,
          content: passage.content.substring(lastIndex, match.index),
        });
      }

      // Push the gap
      segments.push({
        type: "gap" as const,
        index: parseInt(match[1]), // The number inside {{ }}
      });

      lastIndex = regex.lastIndex;
    }

    // Push remaining text
    if (lastIndex < passage.content.length) {
      segments.push({
        type: "text" as const,
        content: passage.content.substring(lastIndex),
      });
    }

    return segments;
  }, [passage]);

  // State (reset when passage changes)
  const [activeGapIndex, setActiveGapIndex] = useState<number>(1); // 1-based index from {{n}}
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({}); // gapIndex -> optionIndex
  const [showResult, setShowResult] = useState(false);

  // Reset state when passage changes
  // Note: useState with key is cleaner, but let's just use effect or key on component
  // We can use key={passage.id} on the main div to force remount

  // ... rest of implementation ...

  // Derived state
  const currentQuestion = passage?.questions.find(
    (q) => q.placeholderIndex === activeGapIndex
  );

  const handleSelectOption = (optionIndex: number) => {
    if (showResult) return;
    setUserAnswers((prev) => ({
      ...prev,
      [activeGapIndex]: optionIndex,
    }));
  };

  const handleNextGap = () => {
    // Find next gap index present in questions
    const distinctIndices = passage.questions
      .map((q) => q.placeholderIndex)
      .sort((a, b) => a - b);
    const currentIndexInArray = distinctIndices.indexOf(activeGapIndex);
    if (currentIndexInArray < distinctIndices.length - 1) {
      setActiveGapIndex(distinctIndices[currentIndexInArray + 1]);
    }
  };

  const checkAllAnswered = () => {
    return passage.questions.every(
      (q) => userAnswers[q.placeholderIndex] !== undefined
    );
  };

  const handleNextPassage = () => {
    if (currentPassageIndex < passages.length - 1) {
      setCurrentPassageIndex((prev) => prev + 1);
      // Reset interaction state
      setActiveGapIndex(1);
      setUserAnswers({});
      setShowResult(false);
    } else {
      router.back();
    }
  };

  if (!passage) return <div>No passage found</div>;

  return (
    <div className="h-full" key={passage.id}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
        {/* Left: Reading Text with Gaps */}
        <ReadingTextCard
          title={passage.title}
          level={level}
          textSegments={textSegments}
          activeGapIndex={activeGapIndex}
          userAnswers={userAnswers}
          showResult={showResult}
          questions={passage.questions}
          onGapClick={setActiveGapIndex}
        />

        {/* Right: Question Panel */}
        <Card className="flex flex-col h-full border-2 bg-muted/20">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold uppercase text-muted-foreground tracking-wide">
                  Gap {activeGapIndex}
                </span>
                <span className="text-sm font-medium">
                  {Object.keys(userAnswers).length} / {passage.questions.length}{" "}
                  Answered
                </span>
              </div>
              <Progress
                value={
                  (Object.keys(userAnswers).length / passage.questions.length) *
                  100
                }
                className="h-2"
              />
            </div>

            <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
              <QuestionPanel
                currentQuestion={currentQuestion}
                activeGapIndex={activeGapIndex}
                userAnswers={userAnswers}
                showResult={showResult}
                onSelectOption={handleSelectOption}
              />
            </div>

            <div className="mt-auto pt-6 flex gap-4">
              {!showResult ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={handleNextGap}
                    className="flex-1"
                  >
                    Skip / Next Gap
                  </Button>
                  <Button
                    onClick={() => setShowResult(true)}
                    disabled={!checkAllAnswered()}
                    className="flex-1 font-bold"
                    size="lg"
                  >
                    Check Answers
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleNextPassage}
                  className="w-full font-bold"
                  size="lg"
                >
                  {currentPassageIndex === passages.length - 1
                    ? "Finish Practice"
                    : "Next Passage"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
