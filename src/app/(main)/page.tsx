"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { pronounceWord } from "@/lib/speech";

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
  audio?: string;
  meanings: Meaning[];
}

export default function Home() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState<DictResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      <h1 className="text-3xl font-bold text-center mb-8">Dictionary</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search a Word</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              value={word}
              onChange={(e) => setWord(e.target.value)}
              placeholder="Enter a word"
              onKeyPress={(e) => e.key === "Enter" && searchWord()}
            />
            <Button onClick={searchWord} disabled={loading}>
              {loading ? "Loading..." : "Search"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Card className="mb-4 border-red-200">
          <CardContent className="pt-6">
            <p className="text-red-600">No results found.</p>
          </CardContent>
        </Card>
      )}

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                {result.word}
                {result.phonetic && (
                  <span className="text-sm text-muted-foreground">
                    /{result.phonetic}/
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => pronounceWord(result.word, result.audio)}
              >
                <Volume2 className="h-4 w-4" />
              </Button>
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
                        <strong>Definition:</strong> {def.definition}
                      </p>
                      <p>
                        <strong>Translation:</strong> {def.definitionVi}
                      </p>
                      {def.example && (
                        <>
                          <p className="mt-1">
                            <em>Example EN:</em> {def.example}
                          </p>
                          <p>
                            <em>Example VI:</em> {def.exampleVi}
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
