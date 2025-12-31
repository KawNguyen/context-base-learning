import { NextRequest, NextResponse } from "next/server";

interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
}

interface DictionaryEntry {
  word: string;
  phonetic?: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
  license?: {
    name: string;
    url: string;
  };
  sourceUrls?: string[];
}

interface TranslatedDefinition {
  definition: string;
  definitionVi: string;
  example?: string;
  exampleVi?: string;
}

interface TranslatedMeaning {
  partOfSpeech: string;
  definitions: TranslatedDefinition[];
}

interface ApiResponse {
  word: string;
  phonetic?: string;
  audio?: string;
  meanings: TranslatedMeaning[];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ word: string }> },
) {
  const { word } = await params;

  try {
    // Fetch from dictionary API
    const dictResponse = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
    );
    if (!dictResponse.ok) {
      return NextResponse.json({ error: "Word not found" }, { status: 404 });
    }
    const dictData: DictionaryEntry[] = await dictResponse.json();

    // Assuming first entry
    const entry = dictData[0];

    const meanings: TranslatedMeaning[] = await Promise.all(
      entry.meanings.map(async (meaning: Meaning) => {
        const definitions: TranslatedDefinition[] = await Promise.all(
          meaning.definitions.map(async (def: Definition) => {
            const translatedDef = await translateText(
              def.definition,
              "en",
              "vi",
            );
            const examples = def.example
              ? await translateText(def.example, "en", "vi")
              : undefined;
            return {
              definition: def.definition,
              definitionVi: translatedDef,
              example: def.example,
              exampleVi: examples,
            };
          }),
        );
        return {
          partOfSpeech: meaning.partOfSpeech,
          definitions,
        };
      }),
    );

    const result: ApiResponse = {
      word: entry.word,
      phonetic: entry.phonetic,
      audio: entry.phonetics?.find((p) => p.audio)?.audio,
      meanings,
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

async function translateText(
  text: string,
  source: string,
  target: string,
): Promise<string> {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text,
      )}&langpair=${source}|${target}`,
    );
    console.log("Translation response status:", response.status);
    if (!response.ok) {
      console.log("Translation response text:", await response.text());
      throw new Error("Translation failed");
    }
    const data = await response.json();
    return data.responseData.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // Fallback to original
  }
}
