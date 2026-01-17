import { CEFRLevel } from "./index";
import { ImageQuestion } from "@/constants/describe-picture";
import { QuestionResponseExercise } from "@/constants/question-response/types";
import { ComprehensionExercise } from "@/constants/listening/types";
import { Question } from "@/constants/quiz-question/types";
import { TextCompletionPassage } from "@/constants/text-completion/types";
import { ReadingPassage } from "@/constants/reading/type";

export type MockExamPart = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface MockExamQuestion {
    id: string;
    part: MockExamPart;
    type: "photo" | "qa" | "listening" | "quiz" | "text" | "reading";
    data: ImageQuestion | QuestionResponseExercise | ComprehensionExercise | Question | TextCompletionPassage | ReadingPassage;
    level: CEFRLevel;
}

export type ExamStatus = "idle" | "loading" | "in-progress" | "finished";

export interface MockExam {
    id: string;
    title: string;
    questions: MockExamQuestion[];
    timeLimit: number; // in seconds
    status: ExamStatus;
    startTime?: number;
    endTime?: number;
    results?: {
        score: number;
        listeningScore: number;
        readingScore: number;
        correctCount: number;
        totalCount: number;
        answers: Record<string, any>; // key is question id, value is selected option index or array of indices
    };
}

export interface ExamSettings {
    length: 50 | 100 | 200;
    levelMix: boolean;
    targetLevel?: CEFRLevel;
}
