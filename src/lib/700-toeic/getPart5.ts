import { Part5 } from "@/constants/700toeic/part5";
import { shuffleArray } from "@/lib/utils";

export function getPart5(testSlug: string) {
  return shuffleArray(
    Part5.filter((q) => q.testSlug === testSlug).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    })),
  );
}
