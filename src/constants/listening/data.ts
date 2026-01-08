import { A1_LISTENING } from "./levels/A1";
import { A2_LISTENING } from "./levels/A2";
import { B1_LISTENING } from "./levels/B1";
import { B2_LISTENING } from "./levels/B2";
import { C1_LISTENING } from "./levels/C1";
import { C2_LISTENING } from "./levels/C2";
import { LevelListeningData } from "./types";

export const LISTENING_DATA: Record<string, LevelListeningData> = {
    a1: A1_LISTENING,
    a2: A2_LISTENING,
    b1: B1_LISTENING,
    b2: B2_LISTENING,
    c1: C1_LISTENING,
    c2: C2_LISTENING,
};
