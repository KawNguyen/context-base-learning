"use client";

import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { RotateCcw, Home, AlertCircle, Send, CheckCircle2 } from "lucide-react";
import CEFRBadge from "@/components/cefr-badge";
import { CEFRLevel } from "@/types";

interface QuizBottomBarProps {
  level: CEFRLevel;
  answeredCount: number;
  totalQuestions: number;
  progress: number;
  score: number;
  isSubmitted: boolean;
  onSubmit: () => void;
  onReset: () => void;
  onBack: () => void;
}

export function QuizBottomBar({
  level,
  answeredCount,
  totalQuestions,
  progress,
  score,
  isSubmitted,
  onSubmit,
  onReset,
  onBack,
}: QuizBottomBarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [barHeight, setBarHeight] = useState(0);

  // Callback ref to measure bar height
  const barRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setBarHeight(node.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      // Luôn hiện khi ở cuối trang
      if (isAtBottom) {
        setIsVisible(true);
      } else if (current < 50) {
        // Luôn hiện khi ở đầu trang
        setIsVisible(true);
      } else if (current > lastScrollY) {
        // Kéo xuống -> ẩn
        setIsVisible(false);
      } else {
        // Kéo lên -> hiện
        setIsVisible(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        style={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: barHeight || "auto",
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          ref={barRef}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            paddingBottom: "16px",
            transform: isVisible ? "translateY(0)" : "translateY(100%)",
            transition: "transform 300ms ease-out",
            pointerEvents: "auto",
          }}
        >
          <div className="rounded-2xl bg-accent/95 backdrop-blur-md px-3 py-3 sm:px-6 sm:py-4 border shadow-lg">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-3">
              {/* Top row: Progress bar */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    Progress
                  </span>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {answeredCount}/{totalQuestions}
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              {/* Bottom row: Level, Actions, Score */}
              <div className="flex items-center justify-between gap-2">
                {/* Level Badge */}
                <CEFRBadge level={level} />

                {/* Actions */}
                <div className="flex gap-2 items-center">
                  {!isSubmitted ? (
                    <Button
                      size="sm"
                      variant="default"
                      disabled={answeredCount === 0}
                      onClick={() => setShowConfirm(true)}
                      className="h-8 px-3 text-xs"
                    >
                      <Send size={14} className="mr-1" />
                      Submit
                    </Button>
                  ) : (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={onReset}
                        className="h-8 w-8 p-0 bg-transparent"
                        title="Làm lại"
                      >
                        <RotateCcw size={14} />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={onBack}
                        className="h-8 w-8 p-0 bg-transparent"
                        title="Quay lại"
                      >
                        <Home size={14} />
                      </Button>
                    </>
                  )}
                </div>

                {/* Score (only when submitted) */}
                {isSubmitted && (
                  <div className="flex items-center gap-1.5 bg-white dark:bg-slate-800 rounded-lg px-2 py-1.5 border border-slate-200 dark:border-slate-700">
                    <CheckCircle2 size={14} className="text-green-500" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {score}/{totalQuestions}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      ({Math.round((score / totalQuestions) * 100)}%)
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Submit Dialog */}
      <AlertDialog open={showConfirm} onOpenChange={setShowConfirm}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-lg">
              <AlertCircle className="w-5 h-5 text-primary" />
              Confirm Submit
            </AlertDialogTitle>
            <AlertDialogDescription>
              {answeredCount < totalQuestions ? (
                <span className="text-destructive font-medium">
                  You have only answered {answeredCount} out of {totalQuestions}{" "}
                  questions. Are you sure you want to submit?
                </span>
              ) : (
                "You have completed all the questions. Are you sure you want to submit?"
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onSubmit();
                setShowConfirm(false);
              }}
            >
              <Send size={14} className="mr-1" />
              Submit
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
