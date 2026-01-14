import { useMemo } from "react";
import { shuffleArray } from "@/lib/utils";

/**
 * Hook để shuffle (đảo ngẫu nhiên) các options
 * @param options - Mảng các options cần shuffle
 * @param correctIndex - Index của đáp án đúng (optional)
 * @param seed - Seed để đảm bảo shuffle nhất quán (optional, ví dụ: questionId)
 * @returns Object chứa shuffled options và correct index mới
 */
export function useShuffleOptions<T>(
  options: T[],
  correctIndex?: number,
) {
  return useMemo(() => {
    const indexedOptions = options.map((option, index) => ({
      option,
      originalIndex: index,
    }));

    const shuffled = shuffleArray(indexedOptions);

    const newCorrectIndex =
      correctIndex !== undefined
        ? shuffled.findIndex((item) => item.originalIndex === correctIndex)
        : undefined;

    return {
      shuffledOptions: shuffled.map((item) => item.option),
      originalToShuffled: shuffled.map((item) => item.originalIndex),
      shuffledToOriginal: shuffled.reduce((acc, item, newIndex) => {
        acc[newIndex] = item.originalIndex;
        return acc;
      }, [] as number[]),
      newCorrectIndex,
    };
  }, [options, correctIndex]);
}
