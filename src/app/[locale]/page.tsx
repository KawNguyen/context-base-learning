"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    definitionVi: string;
    example?: string;
    exampleVi?: string;
  }[];
}

interface DictResult {
  word: string;
  phonetic?: string;
  meanings: Meaning[];
}

export default function Home() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<DictResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const t = useTranslations('dictionary');

  const searchWord = async () => {
    if (!word.trim()) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/dictionary/${encodeURIComponent(word)}`
      );
      if (!response.ok) {
        throw new Error("Word not found");
      }
      const data: DictResult = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t('title')}
      </h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>{t('subtitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder={t('placeholder')}
              onKeyPress={(e) => e.key === "Enter" && searchWord()}
            />
            <Button onClick={searchWord} disabled={loading}>
              {loading ? t('loading') : t('search')}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-4 border-red-200">
          <CardContent className="pt-6">
            <p className="text-red-600">{t('noResults')}</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {result.word}
              {result.phonetic && (
                <span className="text-sm text-muted-foreground">
                  /{result.phonetic}/
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {result.meanings.map((meaning, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-lg">
                  {meaning.partOfSpeech}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {meaning.definitions.map((def, defIdx) => (
                    <li key={defIdx}>
                      <p>
                        <strong>{t('definition')}:</strong> {def.definition}
                      </p>
                      <p>
                        <strong>{t('translation')}:</strong> {def.definitionVi}
                      </p>
                      {def.example && (
                        <>
                          <p className="mt-1">
                            <em>{t('example')} EN:</em> {def.example}
                          </p>
                          <p>
                            <em>{t('example')} VI:</em> {def.exampleVi}
                          </p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
