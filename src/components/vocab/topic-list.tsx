import Link from "next/link";
import { VOCABULARY_CATEGORIES } from "@/constants/vocabulary";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCategorySlug } from "@/lib/utils";
import type { VocabularyCategory } from "@/constants/vocabulary";

const ICON_MAP: Partial<Record<VocabularyCategory, string>> = {
  Academic: "📚",
  Agriculture: "🌾",
  Animals: "🐾",
  Architecture: "🏛️",
  Art: "🎨",
  Astronomy: "🌌",
  Beauty: "💄",
  Behavior: "🤝",
  Biology: "🧬",
  Body: "👤",
  Business: "💼",
  Chemistry: "⚗️",
  Clothing: "👕",
  Competition: "🏆",
  Conflict: "⚔️",
  Construction: "🏗️",
  Conversation: "💬",
  Crime: "🚨",
  Culture: "🎭",
  Daily: "☀️",
  Dance: "💃",
  Description: "📝",
  Design: "✨",
  Disaster: "🌪️",
  Economics: "📈",
  Education: "🎓",
  Emergency: "🚑",
  Emotions: "😊",
  Engineering: "🛠️",
  Entertainment: "🎬",
  Environment: "🌿",
  Ethics: "⚖️",
  Family: "👪",
  Fashion: "👗",
  Film: "🎥",
  Finance: "💰",
  "Food & Drink": "🍽️",
  Furniture: "🪑",
  Games: "🎮",
  General: "📘",
  Geography: "🗺️",
  Geology: "🌋",
  Government: "🏛️",
  Grammar: "📖",
  History: "📜",
  Home: "🏠",
  Hygiene: "🧼",
  Industry: "🏭",
  Instruments: "🎸",
  Jobs: "👔",
  Kitchen: "🍳",
  Language: "🗣️",
  Law: "⚖️",
  Linguistics: "🔤",
  Literature: "✒️",
  Love: "💕",
  Management: "📊",
  Marketing: "📢",
  Materials: "🧱",
  Mathematics: "➗",
  Media: "📺",
  Medical: "🩺",
  Military: "🎖️",
  Music: "🎵",
  Mystery: "🔍",
  Mythology: "🐉",
  Nautical: "⚓",
  Nature: "🌳",
  News: "📰",
  Office: "🏢",
  People: "👥",
  Philosophy: "💭",
  "Phrasal Verb": "🔗",
  Photography: "📷",
  Physics: "🔭",
  Plants: "🌱",
  Politics: "🗳️",
  Project: "📋",
  Psychology: "🧠",
  Punishment: "⚖️",
  Religion: "🕌",
  Safety: "🦺",
  Science: "🔬",
  Security: "🔒",
  Shopping: "🛒",
  Social: "👫",
  Space: "🚀",
  Sports: "⚽",
  Stationery: "✏️",
  Technology: "💻",
  Time: "⏰",
  Tools: "🔧",
  Transportation: "🚗",
  Travel: "✈️",
  War: "⚔️",
  Weather: "🌤️",
};

// Group categories by first letter
const groupCategoriesByLetter = () => {
  const groups: Record<string, VocabularyCategory[]> = {};

  VOCABULARY_CATEGORIES.forEach((category) => {
    const firstLetter = category[0].toUpperCase();
    if (!groups[firstLetter]) {
      groups[firstLetter] = [];
    }
    groups[firstLetter].push(category);
  });

  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
};

export function TopicList() {
  const groupedCategories = groupCategoriesByLetter();
  const totalCategories = VOCABULARY_CATEGORIES.length;

  return (
    <main>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Vocabulary Topics</h1>
        <p className="text-muted-foreground text-lg">
          Browse {totalCategories} categories to expand your English vocabulary.
          Click any category to explore related words.
        </p>
      </div>

      <div className="space-y-12">
        {groupedCategories.map(([letter, categories]) => (
          <div key={letter} className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-2xl font-bold px-4 py-2">
                {letter}
              </Badge>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((name) => (
                <Link
                  key={name}
                  href={`/vocabulary/${getCategorySlug(name)}`}
                  className="block group"
                >
                  <Card className="h-full cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] hover:border-primary">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl group-hover:scale-110 transition-transform">
                          {ICON_MAP[name] ?? "📘"}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {name}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
