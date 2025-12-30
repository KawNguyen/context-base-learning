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

export default function DictionarySearch() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<DictResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const t = useTranslations("dictionary");

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
    <Card className="w-full max-w-md mx-auto mb-6">
      <CardHeader>
        <CardTitle className="text-lg">{t("title")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder={t("placeholder")}
            value={word}
            onChange={(e) => setWord(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && searchWord()}
          />
          <Button onClick={searchWord} disabled={loading}>
            {loading ? t("searching") : t("search")}
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {result && (
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xl">{result.word}</h3>
              {result.phonetic && (
                <p className="text-gray-600">{result.phonetic}</p>
              )}
            </div>
            {result.meanings.map((meaning, index) => (
              <div key={index}>
                <h4 className="font-semibold italic">{meaning.partOfSpeech}</h4>
                <ul className="list-disc list-inside space-y-2">
                  {meaning.definitions.map((def, defIndex) => (
                    <li key={defIndex}>
                      <p className="text-sm">{def.definition}</p>
                      <p className="text-sm text-gray-600">
                        {def.definitionVi}
                      </p>
                      {def.example && (
                        <p className="text-xs italic mt-1">
                          &quot;{def.example}&quot;
                        </p>
                      )}
                      {def.exampleVi && (
                        <p className="text-xs italic text-gray-600">
                          &quot;{def.exampleVi}&quot;
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
