import { part5Test1 } from "./test1";
import { part5Test2 } from "./test2";
import { part5Test3 } from "./test3";
import { part5Test4 } from "./test4";

export interface optionsType {
  option: string;
  isCorrect: boolean;
}

export interface part5Type {
  testSlug: string;
  id: number;
  question: string;
  options: optionsType[];
}

export const part5 = [
  ...part5Test1,
  ...part5Test2,
  ...part5Test3,
  ...part5Test4,
];
