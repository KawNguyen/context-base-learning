"use client";

import { Volume1, Volume2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { VocabularyWord } from "@/constants/vocabulary";
import { Separator } from "../ui/separator";
import { speakSlow, speakText } from "@/lib/speech";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useVocabCache } from "@/hooks/use-vocab-cache";
import { useState } from "react";
import Link from "next/link";

export default function WordDetail({ word }: { word: VocabularyWord }) {
  const { getCachedState } = useVocabCache();
  const [breadcrumbInfo] = useState<{
    label: string;
    href: string;
  }>(() => {
    const cached = getCachedState();
    if (cached?.lastTopicSlug && cached?.lastTopicName) {
      return {
        label: cached.lastTopicName,
        href: `/vocabulary/topic/${cached.lastTopicSlug}`,
      };
    }
    return { label: "Vocabulary", href: "/vocabulary" };
  });

  return (
    <main className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/vocabulary">Vocabulary</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={breadcrumbInfo.href}>{breadcrumbInfo.label}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{word.word}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card className="shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-4xl font-bold text-balance">
                {word.word}
              </CardTitle>
              <CardDescription className="mt-2 text-lg font-mono">
                {word.phonetic}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 bg-transparent"
                onClick={() => speakSlow(word.word)}
              >
                <Volume1 className="size-5" />
                <span className="sr-only">Pronounce word</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 bg-transparent"
                onClick={() => speakText(word.word)}
              >
                <Volume2 className="size-5" />
                <span className="sr-only">Pronounce word</span>
              </Button>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">
            {word.partOfSpeech}
          </Badge>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Meanings */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Meaning</h2>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">English</p>
                <p className="text-base">{word.meaningEn}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Vietnamese</p>
                <p className="text-base">{word.meaningVi}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Examples */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Examples</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4 space-y-2">
                <p className="text-sm text-muted-foreground">English</p>
                <p className="text-base italic">{word.exampleEn}</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4 space-y-2">
                <p className="text-sm text-muted-foreground">Vietnamese</p>
                <p className="text-base italic">{word.exampleVi}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Categories */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Related Topics</h2>
            <div className="flex flex-wrap gap-2">
              {word.categories.map((category) => (
                <Link
                  key={category}
                  href={`/topics/${encodeURIComponent(category)}`}
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
