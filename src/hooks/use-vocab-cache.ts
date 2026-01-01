"use client";

import { useCallback } from "react";
import type { VocabularyCategory } from "@/constants/vocabulary";

const CACHE_KEY = "vocab-list-state";

export interface VocabListState {
  searchTerm: string;
  selectedCategory: VocabularyCategory | "ALL";
  scrollPosition: number;
  lastTopicSlug?: string;
  lastTopicName?: string;
}

export function useVocabCache() {
  const getCachedState = useCallback((): VocabListState | null => {
    if (typeof window === "undefined") return null;
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        return JSON.parse(cached);
      } catch (e) {
        console.error("Failed to parse vocab cache", e);
        return null;
      }
    }
    return null;
  }, []);

  const saveCache = useCallback(
    (newState: Partial<VocabListState>) => {
      if (typeof window === "undefined") return;
      const current = getCachedState() || {
        searchTerm: "",
        selectedCategory: "ALL" as const,
        scrollPosition: 0,
      };
      const updated = { ...current, ...newState };
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(updated));
    },
    [getCachedState],
  );

  const clearCache = useCallback(() => {
    if (typeof window === "undefined") return;
    sessionStorage.removeItem(CACHE_KEY);
  }, []);

  return {
    getCachedState,
    saveCache,
    clearCache,
  };
}
