"use client";

import { useState, useMemo } from "react";
import { Dialogue } from "@/constants/dialogues";
import { useRouter, useParams } from "next/navigation";
import { CEFRLevel } from "@/types";
import { shuffleArray } from "@/lib/utils";
import { QuizHeader } from "../ui/quiz-header";
import { DialogueCard } from "./dialogue-card";
import { DialogueSummary } from "./dialogue-summary";

interface DialogueRandomQuizProps {
  dialogues: Dialogue[];
  level: CEFRLevel;
}

export function DialogueRandomQuiz({
  dialogues,
  level,
}: DialogueRandomQuizProps) {
  const router = useRouter();
  const params = useParams();
  const levelSlug = params.level as string;

  // Randomly select 10 dialogues
  const randomDialogues = useMemo(() => {
    const shuffled = shuffleArray(dialogues);
    return shuffled.slice(0, Math.min(10, dialogues.length));
  }, [dialogues]);

  // Track answers using Map for better performance
  const [answers, setAnswers] = useState<Map<number, Map<number, number>>>(
    new Map(),
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (
    dialogueIdx: number,
    questionIdx: number,
    answerIdx: number,
  ) => {
    if (isSubmitted) return;

    setAnswers((prev) => {
      const newAnswers = new Map(prev);
      const dialogueAnswers = newAnswers.get(dialogueIdx) || new Map();
      dialogueAnswers.set(questionIdx, answerIdx);
      newAnswers.set(dialogueIdx, dialogueAnswers);
      return newAnswers;
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    router.refresh();
  };

  const handleBackToDialogues = () => {
    router.push(`/dialogue/${levelSlug}`);
  };

  // Calculate statistics
  const totalQuestions = randomDialogues.reduce(
    (sum, d) => sum + d.questions.length,
    0,
  );

  let answeredCount = 0;
  let correctCount = 0;

  answers.forEach((dialogueAnswers, dialogueIdx) => {
    const dialogue = randomDialogues[dialogueIdx];
    dialogueAnswers.forEach((answerIdx, questionIdx) => {
      answeredCount++;
      if (dialogue.questions[questionIdx].correct === answerIdx) {
        correctCount++;
      }
    });
  });

  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <QuizHeader
        title="TOEIC Practice - Dialogues"
        subtitle="Random 10 Dialogues"
        level={level}
        answeredCount={answeredCount}
        totalQuestions={totalQuestions}
        progress={progress}
        score={correctCount}
        isSubmitted={isSubmitted}
        onSubmit={handleSubmit}
        onReset={handleReset}
        onBack={handleBackToDialogues}
      />

      {/* All Dialogues - No grid, stacked vertically like real TOEIC */}
      <div className="space-y-6">
        {randomDialogues.map((dialogue, dialogueIdx) => (
          <DialogueCard
            key={dialogueIdx}
            dialogue={dialogue}
            dialogueIndex={dialogueIdx}
            selectedAnswers={answers.get(dialogueIdx) || new Map()}
            isSubmitted={isSubmitted}
            onAnswerSelect={(questionIdx, answerIdx) =>
              handleAnswerSelect(dialogueIdx, questionIdx, answerIdx)
            }
          />
        ))}
      </div>

      {/* Summary */}
      {isSubmitted && (
        <DialogueSummary
          score={correctCount}
          totalQuestions={totalQuestions}
          totalDialogues={randomDialogues.length}
        />
      )}
    </div>
  );
}
