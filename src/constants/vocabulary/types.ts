export type VocabularyCategory =
  | "Academic"
  | "Agriculture"
  | "Animals"
  | "Architecture"
  | "Art"
  | "Astronomy"
  | "Beauty"
  | "Behavior"
  | "Biology"
  | "Body"
  | "Business"
  | "Chemistry"
  | "Clothing"
  | "Competition"
  | "Conflict"
  | "Construction"
  | "Conversation"
  | "Crime"
  | "Culture"
  | "Daily"
  | "Dance"
  | "Description"
  | "Design"
  | "Disaster"
  | "Economics"
  | "Education"
  | "Emergency"
  | "Emotions"
  | "Engineering"
  | "Entertainment"
  | "Environment"
  | "Ethics"
  | "Family"
  | "Fashion"
  | "Film"
  | "Finance"
  | "Food & Drink"
  | "Furniture"
  | "Games"
  | "General"
  | "Geography"
  | "Geology"
  | "Government"
  | "Grammar"
  | "History"
  | "Home"
  | "Hygiene"
  | "Industry"
  | "Instruments"
  | "Jobs"
  | "Kitchen"
  | "Language"
  | "Law"
  | "Linguistics"
  | "Literature"
  | "Love"
  | "Management"
  | "Marketing"
  | "Materials"
  | "Mathematics"
  | "Media"
  | "Medical"
  | "Military"
  | "Music"
  | "Mystery"
  | "Mythology"
  | "Nautical"
  | "Nature"
  | "News"
  | "Office"
  | "People"
  | "Philosophy"
  | "Phrasal Verb"
  | "Photography"
  | "Physics"
  | "Plants"
  | "Politics"
  | "Project"
  | "Psychology"
  | "Punishment"
  | "Religion"
  | "Safety"
  | "Science"
  | "Security"
  | "Shopping"
  | "Social"
  | "Space"
  | "Sports"
  | "Stationery"
  | "Technology"
  | "Time"
  | "Tools"
  | "Transportation"
  | "Travel"
  | "War"
  | "Weather"

export const VOCABULARY_CATEGORIES: VocabularyCategory[] = [
  "Academic",
  "Agriculture",
  "Animals",
  "Architecture",
  "Art",
  "Astronomy",
  "Beauty",
  "Behavior",
  "Biology",
  "Body",
  "Business",
  "Chemistry",
  "Clothing",
  "Competition",
  "Conflict",
  "Construction",
  "Conversation",
  "Crime",
  "Culture",
  "Daily",
  "Dance",
  "Description",
  "Design",
  "Disaster",
  "Economics",
  "Education",
  "Emergency",
  "Emotions",
  "Engineering",
  "Entertainment",
  "Environment",
  "Ethics",
  "Family",
  "Fashion",
  "Film",
  "Finance",
  "Food & Drink",
  "Furniture",
  "Games",
  "General",
  "Geography",
  "Geology",
  "Government",
  "Grammar",
  "History",
  "Home",
  "Hygiene",
  "Industry",
  "Instruments",
  "Jobs",
  "Kitchen",
  "Language",
  "Law",
  "Linguistics",
  "Literature",
  "Love",
  "Management",
  "Marketing",
  "Materials",
  "Mathematics",
  "Media",
  "Medical",
  "Military",
  "Music",
  "Mystery",
  "Mythology",
  "Nautical",
  "Nature",
  "News",
  "Office",
  "People",
  "Philosophy",
  "Phrasal Verb",
  "Photography",
  "Physics",
  "Plants",
  "Politics",
  "Project",
  "Psychology",
  "Punishment",
  "Religion",
  "Safety",
  "Science",
  "Security",
  "Shopping",
  "Social",
  "Space",
  "Sports",
  "Stationery",
  "Technology",
  "Time",
  "Tools",
  "Transportation",
  "Travel",
  "War",
  "Weather",
];


export interface VocabularyWord {
  id: string;
  word: string;
  slug: string;
  phonetic: string;
  partOfSpeech: string;
  meaningEn: string;
  meaningVi: string;
  exampleEn: string;
  exampleVi: string;
  categories: VocabularyCategory[];
}
