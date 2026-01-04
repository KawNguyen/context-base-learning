function isCapitalized(word: string) {
  return /^[A-Z]/.test(word);
}

function isSentenceStart(index: number, rawWords: string[]) {
  if (index === 0) return true;

  const prev = rawWords[index - 1];
  return /[.!?]$/.test(prev);
}

export function isProperNoun(
  word: string,
  index: number,
  rawWords: string[]
) {
  if (!word) return false;

  if (word === "I") return false;

  if (!isCapitalized(word)) return false;

  if (isSentenceStart(index, rawWords)) return false;

  return true;
}
