import { Part5Test1 } from "./test1";
import { Part5Test2 } from "./test2";
import { Part5Test3 } from "./test3";
import { Part5Test4 } from "./test4";

export interface OptionsType {
  option: string;
  isCorrect: boolean;
}

export interface Part5Type {
  testSlug: string;
  id: number;
  question: string;
  options: OptionsType[];
}

export const Part5 = [
  ...Part5Test1,
  ...Part5Test2,
  ...Part5Test3,
  ...Part5Test4,
];
