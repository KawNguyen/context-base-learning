import { CEFRLevel, Question } from "./types";
import { A1 } from "./levels/A1";
import { A2 } from "./levels/A2";
import { B1 } from "./levels/B1";
import { B2 } from "./levels/B2";
import { C1 } from "./levels/C1";
import { C2 } from "./levels/C2";

export const questions: Record<CEFRLevel, Question[]> = {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2,
};

export default questions;
