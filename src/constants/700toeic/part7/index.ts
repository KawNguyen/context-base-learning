import { AllSinglePassageTests } from "./onePassage";
import { AllTriplePassagesTests } from "./threePassages";
import { AllDoublePassagesTests } from "./twoPassages";

export const Part7 = [
  ...AllSinglePassageTests,
  ...AllDoublePassagesTests,
  ...AllTriplePassagesTests,
];
