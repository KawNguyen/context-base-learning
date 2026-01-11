export interface QuestionResponseExercise {
  id: string;
  title: string;
  level: string;
  audioUrl: string;
  transcript?: {
    question: string;
    responses: {
      isCorrect: boolean;
      text: string;
    }[];
  };
}
