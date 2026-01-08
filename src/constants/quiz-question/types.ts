export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Option {
    option: string;
    isCorrect: boolean;
}

export interface Question {
    questionEn: string;
    questionVi: string;
    options: Option[];
    explanationVi: string;
    category: string;
}
