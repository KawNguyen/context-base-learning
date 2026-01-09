import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { InteractiveTextSegment } from "./interactive-text-segment";
import { GapButton } from "./gap-button";

interface TextSegment {
  type: "text" | "gap";
  content?: string;
  index?: number;
}

interface ReadingTextCardProps {
  title: string;
  level: CEFRLevel;
  textSegments: TextSegment[];
  activeGapIndex: number;
  userAnswers: Record<number, number>;
  showResult: boolean;
  questions: Array<{
    placeholderIndex: number;
    options: Array<{ isCorrect: boolean }>;
  }>;
  onGapClick: (gapIndex: number) => void;
}

export function ReadingTextCard({
  title,
  level,
  textSegments,
  activeGapIndex,
  userAnswers,
  showResult,
  questions,
  onGapClick,
}: ReadingTextCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden border-2">
      <CardContent className="p-6 h-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <CEFRBadge level={level} />
        </div>
        <ScrollArea className="h-[calc(100%-60px)] pr-4">
          <p className="text-lg leading-loose text-justify">
            {textSegments.map((segment, idx) => {
              if (segment.type === "text") {
                return (
                  <InteractiveTextSegment
                    key={idx}
                    text={segment.content as string}
                  />
                );
              } else {
                const gapIndex = segment.index as number;
                const isSelected = activeGapIndex === gapIndex;
                const hasAnswer = userAnswers[gapIndex] !== undefined;
                const isCorrect =
                  showResult &&
                  userAnswers[gapIndex] ===
                    questions
                      .find((q) => q.placeholderIndex === gapIndex)
                      ?.options.findIndex((o) => o.isCorrect);

                return (
                  <GapButton
                    key={idx}
                    gapIndex={gapIndex}
                    isSelected={isSelected}
                    hasAnswer={hasAnswer}
                    isCorrect={isCorrect}
                    showResult={showResult}
                    onClick={() => onGapClick(gapIndex)}
                  />
                );
              }
            })}
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
