"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { readingPassages } from "@/constants/readingPassages";
import { PassageSelection } from "./PassageSelection";
import { QuizCompleted } from "./QuizCompleted";
import { ReadingQuiz } from "./ReadingQuiz";

// Define the CEFRLevel type locally or import it if shared
type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

interface ReadingInterfaceProps {
  level: string; // passing as string from params
}

export function ReadingInterface({ level: paramLevel }: ReadingInterfaceProps) {
  // Validate level
  const validLevels: CEFRLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const level = validLevels.includes(paramLevel as CEFRLevel)
    ? (paramLevel as CEFRLevel)
    : null;

  const router = useRouter();
  const [selectedPassage, setSelectedPassage] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    if (!level) {
      // redirect or show error handled by parent page usually, but here strictly check
      router.push("/reading");
    }
  }, [level, router]);

  if (!level) return null;

  const handlePassageSelect = (index: number) => {
    setSelectedPassage(index);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);

    const len = readingPassages[level][index].questions.length;
    setUserAnswers(new Array(len).fill(-1));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (selectedPassage !== null) {
      const passage = readingPassages[level][selectedPassage];
      setUserAnswers((prev) => {
        const copy = [...prev];
        copy[currentQuestion] = answerIndex;
        return copy;
      });
      if (answerIndex === passage.questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (selectedPassage !== null) {
      const passage = readingPassages[level][selectedPassage];
      if (currentQuestion < passage.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const handleRestart = () => {
    setSelectedPassage(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
  };

  const handleBackToPassages = () => {
    setSelectedPassage(null);
  };

  // 1. Passage Selection View
  if (selectedPassage === null) {
    return (
      <PassageSelection level={level} onPassageSelect={handlePassageSelect} />
    );
  }

  const passage = readingPassages[level][selectedPassage];

  // 2. Quiz Completed View
  if (quizCompleted) {
    return (
      <QuizCompleted
        score={score}
        totalQuestions={passage.questions.length}
        userAnswers={userAnswers}
        questions={passage.questions}
        onRestart={handleRestart}
      />
    );
  }

  // 3. Reading & Quiz View
  return (
    <ReadingQuiz
      passage={passage}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      showExplanation={showExplanation}
      onAnswerSelect={handleAnswerSelect}
      onNextQuestion={handleNextQuestion}
      onBackToPassages={handleBackToPassages}
    />
  );
}
