export interface TextCompletionPassage {
  id: string;
  title: string;
  level: string;
  content: string; // Use {{1}}, {{2}} for gaps
  questions: {
    id: string;
    placeholderIndex: number;
    options: {
      option: string;
      isCorrect: boolean;
    }[];
    explanationVi?: string;
  }[];
}
