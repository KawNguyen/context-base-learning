export function generateQuizGrammarNote(sentence: string): string {
  const s = sentence.toLowerCase();

  if (/\bnow\b|\bright now\b/.test(s)) {
    return "Grammar note: use present continuous (be + verb-ing) for actions happening now.";
  }

  if (/\bevery\b|\bevery day\b|\bonce a day\b|\bonce a week\b/.test(s)) {
    return "Grammar note: use present simple for routines and habitual actions.";
  }
  // Prioritize very specific structures first
  if (/not only/.test(s)) {
    if (/yesterday|last\b|ago/.test(s)) {
      return "Grammar note: when a negative/adverbial like 'Not only' is fronted, subject–auxiliary inversion is required. For past events use the past auxiliary (e.g. 'Not only did he pass...').";
    }
    return "Grammar note: fronted negatives/adverbials (Not only, Never, Rarely, etc.) trigger subject–auxiliary inversion: 'Not only did he.../Never have I...'. Use the correct auxiliary for tense.";
  }

  if (/\bnow\b|\bright now\b/.test(s)) {
    return "Grammar note: use present continuous (be + verb-ing) for actions happening now.";
  }

  if (/\bevery\b|\bevery day\b|\bonce a day\b|\bonce a week\b/.test(s)) {
    return "Grammar note: use present simple for routines and habitual actions (subject + base verb / verb-s for he/she/it).";
  }

  if (/yesterday|last\b|ago/.test(s)) {
    return "Grammar note: use past simple for completed actions in the past (regular verbs add -ed; many common verbs are irregular).";
  }

  if (/\bif\b/.test(s)) {
    return "Grammar note: conditional — identify which conditional (first: If + present → will; second: If + past → would; third: If + past perfect → would have).";
  }

  if (/\bwill\b|\bgoing to\b/.test(s)) {
    return "Grammar note: future forms (will / be going to) express future intentions or predictions; check which form matches the meaning.";
  }

  if (/\b(can|could|should|would|must|may|might|shall)\b/.test(s)) {
    return "Grammar note: modal verbs (can/could/should/must/etc.) express ability, permission, obligation, or probability — choose the modal that matches the meaning of the sentence.";
  }

  // Fallback guidance
  return "Grammar note: identify the tense and sentence structure (present simple/continuous, past simple, modal, conditional, inversion) and use the corresponding verb form or auxiliary.";
}

export function generateReadingGrammarNote(
  questionText: string,
  passage: string,
): string {
  const q = questionText.toLowerCase();

  if (/what time|when does|when did/.test(q)) {
    return "Grammar note: time expressions often use present simple for routines and past simple for completed past events — match the tense in the passage.";
  }

  if (/how does .* go|how did .* go|how do .* get|how did .* get/.test(q)) {
    return "Grammar note: travel/transport is expressed with 'go/get' + preposition. Look for 'by' + transport (e.g., 'by bus') or verb phrases (walk, drive).";
  }

  if (/what does .* do after|what happens after|what does .* do next/.test(q)) {
    return "Grammar note: sequence markers (then, after, next) indicate order. Identify the verb and its tense to find the correct following action.";
  }

  if (/how many|how much|what number/.test(q)) {
    return "Grammar note: questions about quantity use numerals or quantifiers that appear in the passage (how many = countable nouns).";
  }

  if (/who|what is .* name|whose/.test(q)) {
    return "Grammar note: identification questions often use 'be' (is/are). Find the noun after 'is/are' or the possessive structure in the passage.";
  }

  return "Grammar note: read the sentence for tense and key grammatical markers (prepositions, time words, negative forms) to locate the answer in the passage.";
}

export default {};
