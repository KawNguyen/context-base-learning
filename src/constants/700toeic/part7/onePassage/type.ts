export type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  questionText: string;
  options: Option[];
};

export type ReadingPassage = {
  title?: string;
  type: string;
  content: string;
  questions: Question[];
};
