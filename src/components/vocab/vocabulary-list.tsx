"use client";

import { useState, useMemo } from "react";
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
import { Volume2 } from "lucide-react";
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

export function VocabularyList({ categorySlug }: { categorySlug?: string }) {
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
              <TableHead>Phonetic</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Meaning</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredVocabulary.map((word) => (
              <TableRow key={word.id} className="group">
                <TableCell className="font-bold">{word.word}</TableCell>
                <TableCell className="text-muted-foreground italic text-sm">
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
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 hover:bg-primary/10 transition-colors"
                    onClick={() => pronounceWordSlow(word.word)}
                  >
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8 hover:bg-primary/10 transition-colors"
                    onClick={() => pronounceWord(word.word)}
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
