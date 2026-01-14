import { A1_TEXT_COMPLETION } from "./levels/A1";
import { A2_TEXT_COMPLETION } from "./levels/A2";
import { B1_TEXT_COMPLETION } from "./levels/B1";
import { B2_TEXT_COMPLETION } from "./levels/B2";
import { C1_TEXT_COMPLETION } from "./levels/C1";
import { C2_TEXT_COMPLETION } from "./levels/C2";
import { TextCompletionPassage } from "./types";

export const TEXT_COMPLETION_DATA: Record<string, TextCompletionPassage[]> = {
  a1: A1_TEXT_COMPLETION,
  a2: A2_TEXT_COMPLETION,
  b1: B1_TEXT_COMPLETION,
  b2: B2_TEXT_COMPLETION,
  c1: C1_TEXT_COMPLETION,
  c2: C2_TEXT_COMPLETION,
};
