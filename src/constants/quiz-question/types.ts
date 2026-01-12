export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Option {
  option: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  topicId?: string;
  questionType?: "grammar" | "vocabulary" | "word-form" | "structure";
  contextEn?: string;
  contextVi?: string;
  questionEn: string;
  questionVi: string;
  options: Option[];
  explanationVi: string;
  category: string;
}
