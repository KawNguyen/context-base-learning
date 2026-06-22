import { PassagesTest1 } from "./test1";
import { PassagesTest2 } from "./test2";
import { PassagesTest3 } from "./test3";
import { PassagesTest4 } from "./test4";

export interface Part6Types {
  testSlug: string;
  id: string;
  image: string; // Use {{1}}, {{2}} for gaps
  questions: {
    id: string;
    placeholderIndex: number;
    options: {
      option: string;
      isCorrect: boolean;
    }[];
  }[];
}

export const Part6 = [
  ...PassagesTest1,
  ...PassagesTest2,
  ...PassagesTest3,
  ...PassagesTest4,
];
