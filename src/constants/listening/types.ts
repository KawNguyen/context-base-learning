export type ListeningType = "dictation" | "comprehension";

export interface ListeningQuestion {
  question: string;
  options: {
    isCorrect: boolean;
    option: string;
  }[];
  explanation: string;
}

export interface DictationExercise {
  id: string;
  title: string;
  level: string;
  content: string;
  answer: string;
}

export interface ComprehensionExercise {
  id: string;
  title: string;
  level: string;
  content: string; // The text to be spoken
  transcript: string;
  questions: ListeningQuestion[];
}

export interface LevelListeningData {
  dictations: DictationExercise[];
  comprehensions: ComprehensionExercise[];
}
