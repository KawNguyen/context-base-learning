import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategorySlug(category: string) {
  const map: Record<string, string> = {
    Tenses: "tense",
    Conditionals: "conditional",
    "Passive Voice": "passive-voice",
    Modals: "modal",
    "Relative Clauses": "relative-clause",
    "Gerunds & Infinitives": "gerund-infinitive",
    Comparisons: "comparison",
    Other: "other",
  };

  return map[category] ?? slugify(category);
}

export function unslugify(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
