"use client";

import { useState, useMemo, useEffect } from "react";
import { useVocabCache } from "@/hooks/use-vocab-cache";
import { allVocabulary, VOCABULARY_CATEGORIES } from "@/constants/vocabulary";
import type { VocabularyCategory } from "@/constants/vocabulary";
import { getCategorySlug } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Volume1, Volume2 } from "lucide-react";
import { pronounceWord, pronounceWordSlow } from "@/lib/speech";
import { Input } from "../ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function VocabularyList({ categorySlug }: { categorySlug?: string }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const initialCategory: VocabularyCategory | "ALL" = (() => {
    if (!categorySlug) return "ALL";
    const matched = VOCABULARY_CATEGORIES.find(
      (c) => getCategorySlug(c) === categorySlug
    );
    return (matched as VocabularyCategory) ?? "ALL";
  })();

  const [selectedCategory, setSelectedCategory] = useState<
    VocabularyCategory | "ALL"
  >(initialCategory);

  const { getCachedState, saveCache } = useVocabCache();
  const [isRestored, setIsRestored] = useState(false);

  // Restore state from cache on mount
  useEffect(() => {
    const cached = getCachedState();
    if (cached) {
      if (cached.searchTerm) setSearchTerm(cached.searchTerm);
      if (cached.selectedCategory)
        setSelectedCategory(cached.selectedCategory);

      // Restore scroll position after a short delay to allow the list to render
      if (cached.scrollPosition) {
        setTimeout(() => {
          window.scrollTo(0, cached.scrollPosition);
        }, 100);
      }
    }
    setIsRestored(true);
  }, [getCachedState]);

  // Save state when it changes
  useEffect(() => {
    if (isRestored) {
      saveCache({
        searchTerm,
        selectedCategory,
        lastTopicSlug: categorySlug,
        lastTopicName: selectedCategory === "ALL" ? undefined : selectedCategory,
      });
    }
  }, [searchTerm, selectedCategory, saveCache, isRestored, categorySlug]);

  // Save scroll position on scroll - debounced effectively by the scroll event itself
  useEffect(() => {
    const handleScroll = () => {
      saveCache({ scrollPosition: window.scrollY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [saveCache]);

  const filteredVocabulary = useMemo(() => {
    return allVocabulary
      .filter((word) => {
        const matchesSearch =
          word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
          word.meaningEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          word.meaningVi.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
          selectedCategory === "ALL" ||
          word.categories.includes(selectedCategory as VocabularyCategory);
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.word.localeCompare(b.word));
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-3">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/vocabulary">Vocabulary</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {selectedCategory === "ALL" ? "All" : selectedCategory}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">
          Vocabulary
          {selectedCategory !== "ALL" && ` - ${selectedCategory}`}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <Input
            type="text"
            placeholder="Search vocabulary..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
      </div>
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Word</TableHead>
              <TableHead className="hidden md:table-cell">Phonetic</TableHead>
              <TableHead className="hidden md:table-cell">Type</TableHead>
              <TableHead>Meaning</TableHead>
              <TableHead className="hidden md:table-cell">
                Speak(Low-Normal)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVocabulary.map((word) => (
              <TableRow
                key={word.id}
                className="group"
                onClick={() =>
                  router.push(`/vocabulary/word/${getCategorySlug(word.word)}`)
                }
              >
                <TableCell className="font-bold">{word.word}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground italic text-sm">
                  {word.phonetic}
                </TableCell>
                <TableCell className="hidden md:table-cell text-sm">
                  {word.partOfSpeech}
                </TableCell>
                <TableCell>
                  <div>
                    {/* <p className="text-sm font-semibold">{word.meaningEn}</p> */}
                    <p className="text-xs text-muted-foreground">
                      {word.meaningVi}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8 hover:bg-primary/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      pronounceWordSlow(word.word);
                    }}
                  >
                    <Volume1 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-8 w-8 hover:bg-primary/10 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      pronounceWord(word.word);
                    }}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {filteredVocabulary.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl font-semibold">No results found.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategory("ALL");
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
}
