"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Timer, Send, ChevronDown, ChevronUp } from "lucide-react";

interface ExamHeaderProps {
  timeRemaining: number;
  progress: number;
  showNav: boolean;
  onToggleNav: () => void;
  onFinish: () => void;
  formatTime: (seconds: number) => string;
}

export function ExamHeader({
  timeRemaining,
  progress,
  showNav,
  onToggleNav,
  onFinish,
  formatTime,
}: ExamHeaderProps) {
  return (
    <Card className="sticky top-4 z-50 border-2 shadow-lg bg-background/80 backdrop-blur-md">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className="h-10 px-4 text-lg font-black border-2 border-primary text-primary"
          >
            <Timer className="w-4 h-4 mr-2" />
            {formatTime(timeRemaining)}
          </Badge>
          {timeRemaining < 300 && timeRemaining > 0 && (
            <span className="text-xs font-bold text-destructive animate-pulse uppercase">
              Time Warning!
            </span>
          )}
        </div>

        <div className="flex-1 mx-8 hidden md:block">
          <div className="flex justify-between text-[10px] font-black uppercase text-muted-foreground mb-1">
            <span>Overall Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="font-bold flex items-center gap-1"
            onClick={onToggleNav}
          >
            Jump To{" "}
            {showNav ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="font-bold uppercase tracking-tighter"
            onClick={onFinish}
          >
            <Send className="w-4 h-4 mr-2" />
            Finish
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
