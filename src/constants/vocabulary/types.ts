export type VocabularyCategory =
  | "Daily"
  | "Academic"
  | "Business"
  | "IT"
  | "Medical"
  | "Engineering"
  | "Phrasal Verb"
  | "Travel"
  | "Food"
  | "Family"
  | "Work"
  | "Social"
  | "Home"
  | "Psychology"
  | "Health"
  | "Music"
  | "Art"
  | "Sport"
  | "Fashion"
  | "Beauty"
  | "Environment"
  | "Philosophy"
  | "Chemistry"
  | "Legal"
  | "Mathematics"
  | "Physics"
  | "Literary"
  | "Biology";

export const VOCABULARY_CATEGORIES: VocabularyCategory[] = [
  "Daily",
  "Academic",
  "Business",
  "IT",
  "Medical",
  "Engineering",
  "Phrasal Verb",
  "Travel",
  "Food",
  "Family",
  "Work",
  "Social",
  "Home",
  "Psychology",
  "Health",
  "Music",
  "Art",
  "Sport",
  "Fashion",
  "Beauty",
  "Environment",
  "Philosophy",
  "Chemistry",
  "Legal",
  "Mathematics",
  "Physics",
  "Literary",
  "Biology",
];

export interface VocabularyWord {
  id: string;
  word: string;
  phonetic: string;
  partOfSpeech: string;
  meaningEn: string;
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
  categories: VocabularyCategory[];
}
