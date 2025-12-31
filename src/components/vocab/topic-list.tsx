import Link from "next/link";
import { VOCABULARY_CATEGORIES } from "@/constants/vocabulary";
import { Card, CardContent } from "@/components/ui/card";
import { getCategorySlug } from "@/lib/utils";
import type { VocabularyCategory } from "@/constants/vocabulary";

const ICON_MAP: Record<VocabularyCategory, string> = {
  Daily: "☀️",
  Academic: "📚",
  Business: "💼",
  IT: "💻",
  Medical: "🩺",
  Engineering: "🛠️",
  "Phrasal Verb": "🔗",
  Travel: "✈️",
  Food: "🍽️",
  Family: "👪",
  Work: "🧑‍💼",
  Social: "🗣️",
  Home: "🏠",
  Psychology: "🧠",
  Health: "❤️",
  Music: "🎵",
  Art: "🎨",
  Sport: "🏅",
  Fashion: "👗",
  Beauty: "💄",
  Environment: "🌿",
  Philosophy: "📜",
  Chemistry: "⚗️",
  Legal: "⚖️",
  Mathematics: "➗",
  Physics: "🔭",
  Literary: "✒️",
  Biology: "🧬",
};

export function TopicList() {
  return (
    <main>
      <div className="">
        <h1 className="text-3xl font-bold">Vocabulary Topics</h1>
        <p className="text-muted-foreground mt-2">
          Browse vocabulary by category. Click a category to view words.
        </p>
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {VOCABULARY_CATEGORIES.map((name) => (
            <Link
              key={name}
              href={`/vocabulary/topic/${getCategorySlug(name)}`}
              className="block"
            >
              <Card className="cursor-pointer hover:shadow-md">
                <CardContent className="p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{ICON_MAP[name]}</div>
                    <div>
                      <div className="font-semibold text-lg">{name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
