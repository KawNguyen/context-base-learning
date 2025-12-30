"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { readingPassages } from "@/constants/readingPassages";
import { generateReadingGrammarNote } from "@/lib/grammarNotes";
import { useTranslations } from "next-intl";

type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export default function ReadingPage() {
  const [level, setLevel] = useState<CEFRLevel | "">("");
  const [selectedPassage, setSelectedPassage] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const t = useTranslations("reading");
  const tCommon = useTranslations("common");
  const tLevels = useTranslations("levels");

  const handleLevelSelect = (level: CEFRLevel) => {
    setLevel(level);
    setSelectedPassage(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const handlePassageSelect = (index: number) => {
    setSelectedPassage(index);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    // initialize user answers array for the selected passage
    if (level) {
      const len = readingPassages[level][index].questions.length;
      setUserAnswers(new Array(len).fill(-1));
    } else {
      setUserAnswers([]);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (level && selectedPassage !== null) {
      const passage = readingPassages[level][selectedPassage];
      // record user's answer
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
    if (level && selectedPassage !== null) {
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

  if (!level) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {t("title")}
            </CardTitle>
            <p className="text-center text-muted-foreground">
              {t("selectLevel")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(["A1", "A2", "B1", "B2", "C1", "C2"] as CEFRLevel[]).map(
                (cefrLevel) => (
                  <Button
                    key={cefrLevel}
                    onClick={() => handleLevelSelect(cefrLevel)}
                    variant="outline"
                    className="h-16 text-lg font-semibold"
                  >
                    {cefrLevel} - {tLevels(cefrLevel)}
                  </Button>
                )
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (selectedPassage === null) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {level} {t("title")}
            </CardTitle>
            <p className="text-center text-muted-foreground">
              {t("selectPassage")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {readingPassages[level].map((passage, index) => (
                <Card
                  key={index}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handlePassageSelect(index)}
                >
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg">{passage.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {passage.passage.substring(0, 150)}...
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {passage.questions.length} {tCommon("questions")}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button
              onClick={() => setLevel("")}
              variant="outline"
              className="mt-6"
            >
              {tCommon("back")} {t("selectLevel")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const passage = readingPassages[level][selectedPassage];

  if (quizCompleted) {
    const percentage = Math.round((score / passage.questions.length) * 100);
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              {t("quizCompleted")}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-6xl font-bold mb-4">{percentage}%</div>
            <p className="text-lg mb-4">
              {t("youGot")} {score} {t("outOf")} {passage.questions.length}{" "}
              {t("questionsCorrect")}
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRestart}>{t("tryAgain")}</Button>
              <Button onClick={() => setLevel("")} variant="outline">
                {t("chooseDifferentLevel")}
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="max-w-4xl mx-auto mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {t("reviewTitle") ?? "Review"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {passage.questions.map((q, idx) => {
                  const userAns = userAnswers[idx];
                  const correctIdx = q.correct;
                  return (
                    <div key={idx} className="p-4 border rounded">
                      <p className="font-semibold">
                        {idx + 1}. {q.question}
                      </p>
                      <div className="mt-2">
                        <p>
                          <strong>{tCommon("yourAnswer")}:</strong>{" "}
                          {userAns >= 0 ? (
                            <span
                              className={
                                userAns === correctIdx
                                  ? "text-green-700"
                                  : "text-red-700"
                              }
                            >
                              {String.fromCharCode(65 + userAns)}.{" "}
                              {q.options[userAns]}
                            </span>
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </p>
                        <p>
                          <strong>{tCommon("correctAnswer")}:</strong>{" "}
                          <span className="text-green-700">
                            {String.fromCharCode(65 + correctIdx)}.{" "}
                            {q.options[correctIdx]}
                          </span>
                        </p>
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground">
                            {generateReadingGrammarNote(
                              q.question,
                              passage.passage
                            )}
                          </p>
                          <p className="mt-1">
                            <strong>{tCommon("explanation")}:</strong>{" "}
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{passage.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none mb-6">
            <p className="text-base leading-relaxed">{passage.passage}</p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold text-lg mb-4">
              {tCommon("question")} {currentQuestion + 1} {tCommon("of")}{" "}
              {passage.questions.length}
            </h3>

            <p className="text-base mb-4">
              {passage.questions[currentQuestion].question}
            </p>

            <div className="space-y-2 mb-4">
              {passage.questions[currentQuestion].options.map(
                (option, index) => (
                  <Button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    variant={
                      selectedAnswer === null
                        ? "outline"
                        : selectedAnswer === index
                        ? selectedAnswer ===
                          passage.questions[currentQuestion].correct
                          ? "default"
                          : "destructive"
                        : index ===
                            passage.questions[currentQuestion].correct &&
                          showExplanation
                        ? "default"
                        : "outline"
                    }
                    className="w-full text-left justify-start h-auto py-3 px-4"
                    disabled={selectedAnswer !== null}
                  >
                    <span className="font-medium mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    {option}
                  </Button>
                )
              )}
            </div>

            {showExplanation && (
              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="font-semibold text-green-700 mb-2">
                  {selectedAnswer === passage.questions[currentQuestion].correct
                    ? tCommon("correct")
                    : tCommon("incorrect")}
                </p>
                <p className="text-sm">
                  {tCommon("explanation")}:{" "}
                  {passage.questions[currentQuestion].explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between items-center">
              <Button
                onClick={() => setSelectedPassage(null)}
                variant="outline"
              >
                {t("backToPassages")}
              </Button>

              {showExplanation && (
                <Button onClick={handleNextQuestion}>
                  {currentQuestion < passage.questions.length - 1
                    ? tCommon("next")
                    : t("finishQuiz")}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
