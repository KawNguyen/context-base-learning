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
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>(
    new Array(passage.questions.length).fill(-1),
  );

  const [shuffledQuestions] = useState(() => {
    return passage.questions.map((q) => {
      const correctIndex = q.options.findIndex((o) => o.isCorrect);
      const indexedOptions = q.options.map((option, index) => ({
        option,
        originalIndex: index,
      }));

      // Create a stable random shuffle for this session
      const shuffled = [...indexedOptions].sort(() => Math.random() - 0.5);

      const newCorrectIndex =
        correctIndex !== -1
          ? shuffled.findIndex((item) => item.originalIndex === correctIndex)
          : undefined;

      return {
        shuffledOptions: shuffled.map((item) => item.option),
        shuffledToOriginal: shuffled.map((item) => item.originalIndex),
        newCorrectIndex,
      };
    });
  });

  const { shuffledOptions, newCorrectIndex, shuffledToOriginal } =
    shuffledQuestions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setUserAnswers((prev) => {
      const copy = [...prev];
      copy[currentQuestion] = shuffledToOriginal[answerIndex];
      return copy;
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < passage.questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      // Map original index back to shuffled index for UI
      const origAnswer = userAnswers[nextQ];
      const nextShuffledToOriginal =
        shuffledQuestions[nextQ].shuffledToOriginal;
      setSelectedAnswer(
        origAnswer !== -1 ? nextShuffledToOriginal.indexOf(origAnswer) : null,
      );
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQ = currentQuestion - 1;
      setCurrentQuestion(prevQ);
      const origAnswer = userAnswers[prevQ];
      const prevShuffledToOriginal =
        shuffledQuestions[prevQ].shuffledToOriginal;
      setSelectedAnswer(
        origAnswer !== -1 ? prevShuffledToOriginal.indexOf(origAnswer) : null,
      );
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
    setUserAnswers(new Array(passage.questions.length).fill(-1));
  };

  const submitQuiz = () => {
    setQuizCompleted(true);
  };

  const score = userAnswers.reduce((acc, ans, idx) => {
    const correctIdx = passage.questions[idx].options.findIndex(
      (o) => o.isCorrect,
    );
    return ans === correctIdx ? acc + 1 : acc;
  }, 0);

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
      showExplanation={false}
      shuffledOptions={shuffledOptions}
      newCorrectIndex={newCorrectIndex}
      onAnswerSelect={handleAnswerSelect}
      onCheckAnswer={submitQuiz}
      onNextQuestion={handleNextQuestion}
      onPreviousQuestion={handlePreviousQuestion}
    />
  );
}
