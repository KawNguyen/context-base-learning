import { A1_QUESTION_RESPONSE } from "./levels/A1";
import { A2_QUESTION_RESPONSE } from "./levels/A2";
import { B1_QUESTION_RESPONSE } from "./levels/B1";
import { B2_QUESTION_RESPONSE } from "./levels/B2";
import { C1_QUESTION_RESPONSE } from "./levels/C1";
import { C2_QUESTION_RESPONSE } from "./levels/C2";
import { QuestionResponseExercise } from "./types";

export const QUESTION_RESPONSE_DATA: Record<
  string,
  QuestionResponseExercise[]
> = {
  a1: A1_QUESTION_RESPONSE,
  a2: A2_QUESTION_RESPONSE,
  b1: B1_QUESTION_RESPONSE,
  b2: B2_QUESTION_RESPONSE,
  c1: C1_QUESTION_RESPONSE,
  c2: C2_QUESTION_RESPONSE,
};
