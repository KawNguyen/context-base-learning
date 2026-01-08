"use client";

import { useState } from "react";
import { ReadingPassage } from "@/constants/reading";
import { ReadingQuiz } from "./reading-quiz";
import { QuizCompleted } from "./quiz-completed";
import { CEFRLevel } from "@/types";

interface ReadingQuizWrapperProps {
  passage: ReadingPassage;
  level: CEFRLevel;
}

export function ReadingQuizWrapper({
  passage,
  level,
}: ReadingQuizWrapperProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    new Array(passage.questions.length).fill(-1)
  );

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = selectedAnswer;
      return copy;
    });
    if (
      selectedAnswer ===
      passage.questions[currentQuestion].options.findIndex((o) => o.isCorrect)
    ) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < passage.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(
        userAnswers[currentQuestion + 1] !== -1
          ? userAnswers[currentQuestion + 1]
          : null
      );
      setShowExplanation(userAnswers[currentQuestion + 1] !== -1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(
        userAnswers[currentQuestion - 1] !== -1
          ? userAnswers[currentQuestion - 1]
          : null
      );
      setShowExplanation(userAnswers[currentQuestion - 1] !== -1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers(new Array(passage.questions.length).fill(-1));
  };

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

  return (
    <ReadingQuiz
      passage={passage}
      level={level}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      showExplanation={showExplanation}
      onAnswerSelect={handleAnswerSelect}
      onCheckAnswer={handleCheckAnswer}
      onNextQuestion={handleNextQuestion}
      onPreviousQuestion={handlePreviousQuestion}
    />
  );
}
