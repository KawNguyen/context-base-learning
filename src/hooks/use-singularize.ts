import { singularize } from "@/lib/text/singularize";
import { useCallback } from "react";

export function useSingularize() {
  const toSingular = useCallback((word: string) => {
    return singularize(word);
  }, []);

  return { toSingular };
}
