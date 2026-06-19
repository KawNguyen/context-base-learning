import { passagesTest1 } from "./test1";
import { passagesTest2 } from "./test2";
import { passagesTest3 } from "./test3";
import { passagesTest4 } from "./test4";

export interface TextCompletionPassage {
  testSlug: string;
  id: string;
  title: string;
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

export const part6 = [
  ...passagesTest1,
  ...passagesTest2,
  ...passagesTest3,
  ...passagesTest4,
];
