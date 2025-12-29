You are an AI coding agent inside my VS Code workspace.
Please scaffold and implement a Next.js (App Router) web application for Context-Based English Learning (CBL) using TailwindCSS and shadcn/ui.

The app has four main features:

1) English Dictionary + EN → VI Translation

User can search an English word or phrase.

Fetch meanings, examples, and phonetics from:
https://api.dictionaryapi.dev/api/v2/entries/en/<WORD>.

Translate definitions and examples into Vietnamese using LibreTranslate API:
POST https://libretranslate.com/translate with body { q, source: "en", target: "vi", format: "text" }.

Implement /api/dictionary/[word] API route to combine dictionary lookup and translation.

Frontend displays word, phonetics, English meanings, Vietnamese translations, and examples.

2) Quiz – Multiple Choice by CEFR Levels (A1 → A2 → B1 → B2 → C1 → C2)

Add a /quiz page.

Users choose level: A1, A2, B1, B2, C1, C2.

Each question: a context-based sentence with a blank and 4 options.

Show feedback, explanation, track score, and final summary.

Use local question banks per level.

3) Grammar Learning – English Structures

Add a /grammar page.

Organize grammar topics by CEFR level.

For each topic: explanation (EN + VI), structure/formula, examples (EN + VI).

Include short practice exercises.

4) Reading Comprehension – Choose the Correct Answer

Add a /reading page for reading practice.

Provide short passages (paragraphs) by CEFR levels: A1 → C2.

For each passage:

Display the paragraph.

Show 3–5 multiple-choice questions about main idea, details, vocabulary in context, or inference.

Each question has 4 options.

After answering, show correct answers with explanations.

Track score per passage and show summary.

Use local reading passages and questions stored in code, extendable later.

Technical requirements

Use TypeScript.

Use shadcn/ui components (Button, Card, Input, Tabs, Accordion, RadioGroup, Progress).

Responsive UI with TailwindCSS.

Clean structure with reusable components and hooks.

Routes:

/ → dictionary

/quiz → sentence quiz

/grammar → grammar learning

/reading → reading comprehension

Provide sample data for quiz, grammar, and reading for each CEFR level.

Please generate all necessary files, components, API routes, and logic directly in the workspace.