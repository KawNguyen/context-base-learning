export interface QuestionResponseExercise {
    id: string;
    title: string;
    level: string;
    audioUrl: string;
    correctResponse: number; // 0, 1, or 2 (A, B, or C)
    transcript?: {
        question: string;
        responses: string[];
    };
}
