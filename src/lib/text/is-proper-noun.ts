function isCapitalized(word: string) {
  return /^[A-Z]/.test(word);
}

function isSentenceStart(index: number, rawWords: string[]) {
  if (index === 0) return true;

  const prev = rawWords[index - 1];
  return /[.!?]$/.test(prev);
}

// Common words that are capitalized at sentence start but not proper nouns
const COMMON_SENTENCE_STARTERS = new Set([
  "the",
  "a",
  "an",
  "this",
  "that",
  "these",
  "those",
  "my",
  "your",
  "his",
  "her",
  "its",
  "our",
  "their",
  "i",
  "we",
  "you",
  "he",
  "she",
  "it",
  "they",
  "is",
  "am",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "can",
  "could",
  "will",
  "would",
  "shall",
  "should",
  "may",
  "might",
  "must",
  "what",
  "when",
  "where",
  "who",
  "why",
  "how",
  "which",
  "if",
  "but",
  "and",
  "or",
  "so",
  "because",
  "there",
  "here",
]);

export function isProperNoun(word: string, index: number, rawWords: string[]) {
  if (!word) return false;

  if (word === "I") return false;

  if (!isCapitalized(word)) return false;

  // Check if it's a common word that's just capitalized at sentence start
  const lowerWord = word.toLowerCase();
  if (
    isSentenceStart(index, rawWords) &&
    COMMON_SENTENCE_STARTERS.has(lowerWord)
  ) {
    return false;
  }

  // If capitalized in middle of sentence, or not a common word at sentence start, likely proper noun
  return true;
}
