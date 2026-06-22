import { Part7 } from "@/constants/700toeic/part7";
import { Part7TypesEnum } from "@/constants/700toeic/part7/type";
import { shuffleArray } from "@/lib/utils";

const passageTypeMap: Record<string, Part7TypesEnum> = {
  "single-passage": Part7TypesEnum.Single,
  "double-passage": Part7TypesEnum.Double,
  "triple-passage": Part7TypesEnum.Triple,
};

export function getPart7(testSlug: string, passageType: string) {
  return Part7.filter(
    (p) => p.testSlug === testSlug && p.type === passageTypeMap[passageType],
  ).map((passage) => ({
    ...passage,
    questions: passage.questions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    })),
  }));
}
