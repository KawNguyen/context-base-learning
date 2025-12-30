"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { questions } from "@/constants/quizQuestions";
import { generateQuizGrammarNote } from "@/lib/grammarNotes";
import { useTranslations } from "next-intl";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export default function QuizPage() {
  const [level, setLevel] = useState<CEFRLevel | "">("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const t = useTranslations("quiz");
  const tCommon = useTranslations("common");
  const tLevels = useTranslations("levels");

  const startQuiz = () => {
    if (!level) return;
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const submitAnswer = () => {
    if (selectedAnswer === null || !level) return;
    const isCorrect =
      selectedAnswer === questions[level][currentQuestion].correct;
    if (isCorrect) setScore(score + 1);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (!level) return;
    if (currentQuestion < questions[level].length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz finished
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setLevel("");
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (!quizStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">{t("title")}</h1>
        <Card>
          <CardHeader>
            <CardTitle>{t("selectLevel")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Select
              value={level}
              onValueChange={(value) => setLevel(value as CEFRLevel)}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("selectLevel")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="A1">A1 - {tLevels("A1")}</SelectItem>
                <SelectItem value="A2">A2 - {tLevels("A2")}</SelectItem>
                <SelectItem value="B1">B1 - {tLevels("B1")}</SelectItem>
                <SelectItem value="B2">B2 - {tLevels("B2")}</SelectItem>
                <SelectItem value="C1">C1 - {tLevels("C1")}</SelectItem>
                <SelectItem value="C2">C2 - {tLevels("C2")}</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={startQuiz} disabled={!level} className="mt-4">
              {t("startQuiz")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!level) return null;

  const question = questions[level][currentQuestion];
  const isLastQuestion = currentQuestion === questions[level].length - 1;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("title")} - {level}
      </h1>

      <Card>
        <CardHeader>
          <CardTitle>
            {t("question")} {currentQuestion + 1} {t("of")}{" "}
            {questions[level].length}
          </CardTitle>
          <p className="text-lg">
            {tCommon("score")}: {score}/
            {currentQuestion +
              (showResult && selectedAnswer === question.correct ? 1 : 0)}
          </p>
        </CardHeader>
        <CardContent>
          <p className="text-xl mb-4">{question.sentence}</p>

          <div className="space-y-2 mb-4">
            {question.options.map((option, idx) => (
              <Button
                key={idx}
                variant={selectedAnswer === idx ? "default" : "outline"}
                className="w-full text-left justify-start"
                onClick={() => !showResult && setSelectedAnswer(idx)}
                disabled={showResult}
              >
                {option}
              </Button>
            ))}
          </div>

          {!showResult ? (
            <Button onClick={submitAnswer} disabled={selectedAnswer === null}>
              {t("yourAnswer")}
            </Button>
          ) : (
            <div>
              <p
                className={`font-semibold ${
                  selectedAnswer === question.correct
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {selectedAnswer === question.correct
                  ? tCommon("correct")
                  : `${tCommon("incorrect")} ${t("correctAnswer")}: ${
                      question.options[question.correct]
                    }`}
              </p>
              <div className="mt-2">
                <p className="text-sm text-muted-foreground">
                  {generateQuizGrammarNote(question.sentence)}
                </p>
                <p className="mt-1">
                  {tCommon("explanation")}: {question.explanation}
                </p>
              </div>
              {isLastQuestion ? (
                <div className="mt-4">
                  <p className="text-lg font-bold">
                    {t("quizCompleted")} {tCommon("score")}: {score}/
                    {questions[level].length}
                  </p>
                  <Button onClick={resetQuiz} className="mt-2">
                    {t("chooseDifferentLevel")}
                  </Button>
                </div>
              ) : (
                <Button onClick={nextQuestion} className="mt-4">
                  {t("nextQuestion")}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
