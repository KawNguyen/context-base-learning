import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import CEFRBadge from "../cefr-badge";
import { CEFRLevel } from "@/types";
import { InteractiveTextSegment } from "./interactive-text-segment";
import { GapButton } from "./gap-button";
import { Separator } from "@/components/ui/separator";

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
    <Card className="flex flex-col h-full border overflow-hidden shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2 bg-muted/30">
        <div className="space-y-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>
            Read the passage and fill in the gaps
          </CardDescription>
        </div>
        <CEFRBadge level={level} />
      </CardHeader>
      <Separator />
      <CardContent className="flex-1 p-0 overflow-hidden relative">
        <ScrollArea className="h-full p-6 leading-loose">
          <div className="text-lg text-justify text-foreground/90">
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
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
