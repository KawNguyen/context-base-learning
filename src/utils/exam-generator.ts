import { imageQuestions } from "@/constants/describe-picture";
import { A1_QUESTION_RESPONSE } from "@/constants/question-response/levels/A1";
import { A2_QUESTION_RESPONSE } from "@/constants/question-response/levels/A2";
import { B1_QUESTION_RESPONSE } from "@/constants/question-response/levels/B1";
import { B2_QUESTION_RESPONSE } from "@/constants/question-response/levels/B2";
import { C1_QUESTION_RESPONSE } from "@/constants/question-response/levels/C1";
import { C2_QUESTION_RESPONSE } from "@/constants/question-response/levels/C2";
import { A1_LISTENING } from "@/constants/listening/levels/A1";
import { A2_LISTENING } from "@/constants/listening/levels/A2";
import { B1_LISTENING } from "@/constants/listening/levels/B1";
import { B2_LISTENING } from "@/constants/listening/levels/B2";
import { C1_LISTENING } from "@/constants/listening/levels/C1";
import { C2_LISTENING } from "@/constants/listening/levels/C2";
import { questions as A1_QUIZ } from "@/constants/quiz-question/levels/A1";
import { questions as A2_QUIZ } from "@/constants/quiz-question/levels/A2";
import { questions as B1_QUIZ } from "@/constants/quiz-question/levels/B1";
import { questions as B2_QUIZ } from "@/constants/quiz-question/levels/B2";
import { questions as C1_QUIZ } from "@/constants/quiz-question/levels/C1";
import { questions as C2_QUIZ } from "@/constants/quiz-question/levels/C2";
import { A1_TEXT_COMPLETION } from "@/constants/text-completion/levels/A1";
import { A2_TEXT_COMPLETION } from "@/constants/text-completion/levels/A2";
import { B1_TEXT_COMPLETION } from "@/constants/text-completion/levels/B1";
import { B2_TEXT_COMPLETION } from "@/constants/text-completion/levels/B2";
import { C1_TEXT_COMPLETION } from "@/constants/text-completion/levels/C1";
import { C2_TEXT_COMPLETION } from "@/constants/text-completion/levels/C2";
import { A1 as A1_READING } from "@/constants/reading/levels/A1";
import { A2 as A2_READING } from "@/constants/reading/levels/A2";
import { B1 as B1_READING } from "@/constants/reading/levels/B1";
import { B2 as B2_READING } from "@/constants/reading/levels/B2";
import { C1 as C1_READING } from "@/constants/reading/levels/C1";
import type { ReadingPassage } from "@/constants/reading/type";
import { C2 as C2_READING } from "@/constants/reading/levels/C2";
import { MockExam, MockExamQuestion, ExamSettings } from "@/types/mock-exam";
import { CEFRLevel } from "@/types";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const generateMockExam = (settings: ExamSettings): MockExam => {
  const { length, levelMix, targetLevel } = settings;

  // Question counts for each part based on exam length
  // Standard TOEIC format - 200 questions total
  const counts = {
    50: { p1: 2, p2: 6, p3: 9, p4: 6, p5: 10, p6: 4, p7: 13 },
    100: { p1: 3, p2: 12, p3: 21, p4: 15, p5: 15, p6: 8, p7: 26 },
    200: { p1: 6, p2: 25, p3: 39, p4: 30, p5: 30, p6: 16, p7: 54 },
  }[length];

  const questions: MockExamQuestion[] = [];

  // Helper to filter by level
  const filterByLevel = <
    T extends {
      level?: string;
      category?: string;
    }
  >(
    data: T[]
  ): T[] => {
    if (levelMix || !targetLevel) return data;
    return data.filter((item) => {
      const level =
        item.level ||
        (item.category?.startsWith("A") ||
        item.category?.startsWith("B") ||
        item.category?.startsWith("C")
          ? item.category.substring(0, 2)
          : undefined);
      return level === targetLevel;
    });
  };

  // Part 1: Photos (Always mixed as describe-picture.ts doesn't have levels)
  const p1Data = shuffleArray(imageQuestions).slice(0, counts.p1);
  p1Data.forEach((item, idx) => {
    questions.push({
      id: `p1-${idx}`,
      part: 1,
      type: "photo",
      data: item,
      level: "B1", // Default for mixed
    });
  });

  // Part 2: Q&A
  const allP2 = [
    ...A1_QUESTION_RESPONSE,
    ...A2_QUESTION_RESPONSE,
    ...B1_QUESTION_RESPONSE,
    ...B2_QUESTION_RESPONSE,
    ...C1_QUESTION_RESPONSE,
    ...C2_QUESTION_RESPONSE,
  ];
  const p2Data = shuffleArray(filterByLevel(allP2)).slice(0, counts.p2);
  p2Data.forEach((item, idx) => {
    questions.push({
      id: `p2-${idx}`,
      part: 2,
      type: "qa",
      data: item,
      level: (item.level as CEFRLevel) || "B1",
    });
  });

  // Part 3 & 4: Listening (Comprehension only)
  const allListening = [
    ...A1_LISTENING.comprehensions,
    ...A2_LISTENING.comprehensions,
    ...B1_LISTENING.comprehensions,
    ...B2_LISTENING.comprehensions,
    ...C1_LISTENING.comprehensions,
    ...C2_LISTENING.comprehensions,
  ];

  const filteredListening = filterByLevel(allListening);

  // Separate passages by question count for better allocation
  const listening3Q = filteredListening.filter((p) => p.questions.length === 3);
  const listening6Q = filteredListening.filter((p) => p.questions.length === 6);

  // Create pool: prioritize 3-question passages for exact allocation, then shuffle both groups
  const listeningPool = [
    ...shuffleArray(listening3Q),
    ...shuffleArray(listening6Q),
  ];

  // Part 3: Conversations (Simulated with comprehension exercises)
  // Target: 39 questions (13 conversations x 3 questions)
  // Strategy: Use 3-question passages first to hit target exactly
  let p3Points = 0;
  let p3Idx = 0;
  while (p3Idx < listeningPool.length) {
    const item = listeningPool[p3Idx];
    const itemQuestions = item.questions.length;

    // Only add if it doesn't exceed target
    if (p3Points + itemQuestions > counts.p3) break;

    questions.push({
      id: `p3-${p3Idx}`,
      part: 3,
      type: "listening",
      data: item,
      level: (item.level as CEFRLevel) || "B1",
    });

    p3Points += itemQuestions;
    p3Idx++;
  }

  // Part 4: Short Talks
  // Target: 30 questions (typically 10 talks x 3 questions)
  let p4Points = 0;
  let p4Idx = 0;
  const p4Pool = listeningPool.slice(p3Idx);
  while (p4Idx < p4Pool.length) {
    const item = p4Pool[p4Idx];
    const itemQuestions = item.questions.length;

    // Only add if it doesn't exceed target
    if (p4Points + itemQuestions > counts.p4) break;

    questions.push({
      id: `p4-${p4Idx}`,
      part: 4,
      type: "listening",
      data: item,
      level: (item.level as CEFRLevel) || "B1",
    });

    p4Points += itemQuestions;
    p4Idx++;
  }

  // Part 5: Incomplete Sentences
  const allP5 = [
    ...A1_QUIZ,
    ...A2_QUIZ,
    ...B1_QUIZ,
    ...B2_QUIZ,
    ...C1_QUIZ,
    ...C2_QUIZ,
  ];
  const p5Data = shuffleArray(filterByLevel(allP5)).slice(0, counts.p5);
  p5Data.forEach((item, idx) => {
    questions.push({
      id: `p5-${idx}`,
      part: 5,
      type: "quiz",
      data: item,
      level: (item.category?.substring(0, 2) as CEFRLevel) || "B1",
    });
  });

  // Part 6: Text Completion
  // Target: 16 questions (typically 4 passages x 4 questions)
  const allP6 = [
    ...A1_TEXT_COMPLETION,
    ...A2_TEXT_COMPLETION,
    ...B1_TEXT_COMPLETION,
    ...B2_TEXT_COMPLETION,
    ...C1_TEXT_COMPLETION,
    ...C2_TEXT_COMPLETION,
  ];
  let p6Points = 0;
  let p6Idx = 0;
  const p6Pool = shuffleArray(filterByLevel(allP6));
  while (p6Idx < p6Pool.length) {
    const item = p6Pool[p6Idx];
    const itemQuestions = item.questions.length;

    // Only add if it doesn't exceed target
    if (p6Points + itemQuestions > counts.p6) break;

    questions.push({
      id: `p6-${p6Idx}`,
      part: 6,
      type: "text",
      data: item,
      level: (item.level as CEFRLevel) || "B1",
    });

    p6Points += itemQuestions;
    p6Idx++;
  }

  // Part 7: Reading Comprehension
  // Target: 54 questions (various passage types with 2-5 questions each)
  const allP7 = [
    ...A1_READING,
    ...A2_READING,
    ...B1_READING,
    ...B2_READING,
    ...C1_READING,
    ...C2_READING,
  ];

  // Separate passages by question count and prioritize 6-question passages
  // (since 9 × 6 = 54, this ensures exact target)
  // Note: Reading passages are already organized by level through imports
  const p7_6Q: ReadingPassage[] = [];
  const p7_Other: ReadingPassage[] = [];
  allP7.forEach((passage) => {
    if (passage.questions.length === 6) {
      p7_6Q.push(passage);
    } else {
      p7_Other.push(passage);
    }
  });

  // Build pool: 6-question passages first, then others
  const p7Pool = [...shuffleArray(p7_6Q), ...shuffleArray(p7_Other)];

  let p7Points = 0;
  let p7Idx = 0;
  while (p7Idx < p7Pool.length) {
    const item = p7Pool[p7Idx];
    const itemQuestions = item.questions.length;

    // Only add if it doesn't exceed target
    if (p7Points + itemQuestions > counts.p7) break;

    questions.push({
      id: `p7-${p7Idx}`,
      part: 7,
      type: "reading",
      data: item,
      level: "B1", // Reading passages don't have level field
    });

    p7Points += itemQuestions;
    p7Idx++;
  }

  // TOEIC Standard Time: 120 minutes for full test (200 questions)
  // 45 mins Listening + 75 mins Reading
  const timeLimits = {
    50: 30 * 60, // 30 minutes for mini test
    100: 60 * 60, // 60 minutes for half test
    200: 120 * 60, // 120 minutes for full TOEIC test
  };

  return {
    id: Math.random().toString(36).substr(2, 9),
    title: `TOEIC Mock Exam - ${length} Questions`,
    questions,
    timeLimit: timeLimits[length],
    status: "idle",
  };
};
