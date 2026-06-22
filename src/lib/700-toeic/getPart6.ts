import { Part6 } from "@/constants/700toeic/part6";
import { shuffleArray } from "@/lib/utils";

export function getPart6(testSlug: string) {
  return Part6.filter((p) => p.testSlug === testSlug).map((passage) => ({
    ...passage,
    questions: passage.questions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    })),
  }));
}
