type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface ReadingPassage {
  title: string;
  slug: string;
  passage: string;
  questions: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
}

export type { CEFRLevel };
