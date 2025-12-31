Prompt:

You are an AI coding agent inside my VS Code workspace.
Please scaffold and implement a Next.js (App Router) web application for Context-Based English Learning (CBL) using TailwindCSS and shadcn/ui, and use Bun as the runtime and package manager instead of Node/npm.

The app has four main features:

1. English Dictionary + EN → VI Translation

User can search an English word or phrase.

Fetch meanings, examples, and phonetics from:
https://api.dictionaryapi.dev/api/v2/entries/en/<WORD>.

Translate definitions and examples into Vietnamese using LibreTranslate API:
POST https://libretranslate.com/translate with body { q, source: "en", target: "vi", format: "text" }.

Implement /api/dictionary/[word] API route to combine dictionary lookup and translation.

Frontend displays word, phonetics, English meanings, Vietnamese translations, and examples with loading and error states.

2. Quiz – Multiple Choice by CEFR Levels (A1 → A2 → B1 → B2 → C1 → C2)

Add a /quiz page.

Users choose CEFR level.

Context-based sentence with a blank, 4 options, feedback, explanations, score tracking.

Use local question banks per level.

3. Grammar Learning – English Structures

Add a /grammar page.

Grammar topics by CEFR level with:

EN + VI explanations.

Structures/formulas.

Example sentences (EN + VI).

Practice exercises.

4. Reading Comprehension – Paragraph + Multiple Choice

Add a /reading page.

Short passages by CEFR levels.

3–5 questions per passage with 4 options.

Show answers, explanations, and score summary.

Technical requirements

Use Bun for project setup and dependencies (e.g., bun create next-app, bun install, bun dev).

Use TypeScript.

Use shadcn/ui components (Button, Card, Input, Tabs, Accordion, RadioGroup, Progress).

TailwindCSS for styling.

Responsive UI.

Clean structure with reusable components/hooks.

Routes:

/ → dictionary

/quiz → quiz

/grammar → grammar

/reading → reading

Provide sample data for quiz, grammar, and reading at all CEFR levels.

Please generate all necessary files, components, API routes, and working logic directly in the workspace, and include Bun commands for setup and running the project.
