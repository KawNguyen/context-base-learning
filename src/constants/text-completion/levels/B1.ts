import { TextCompletionPassage } from "../types";

export const B1_TEXT_COMPLETION: TextCompletionPassage[] = [
    {
        id: "b1-text-completion-1",
        title: "Job Application",
        level: "B1",
        content:
            "Dear Mr. Smith,\n\nI am writing to apply for the position of Marketing Assistant which was {{1}} in the Daily News yesterday. \n\nI have {{2}} completed my degree in Business Administration at the University of Manchester. During my studies, I gained valuable experience through several internships.\n\nI am {{3}} in this position because it matches my skills and career interests. I have attached my resume for your review.\n\nThank you for your time and {{4}}.\n\nSincerely,\nJohn Doe",
        questions: [
            {
                id: "q1",
                placeholderIndex: 1,
                options: [
                    { option: "advertised", isCorrect: true },
                    { option: "advertising", isCorrect: false },
                    { option: "advertisement", isCorrect: false },
                    { option: "advertise", isCorrect: false },
                ],
                explanation: "Passive voice: was + V3 (advertised).",
            },
            {
                id: "q2",
                placeholderIndex: 2,
                options: [
                    { option: "recent", isCorrect: false },
                    { option: "recently", isCorrect: true },
                    { option: "late", isCorrect: false },
                    { option: "lately", isCorrect: false },
                ],
                explanation: "Adverb modifying 'completed': recently.",
            },
            {
                id: "q3",
                placeholderIndex: 3,
                options: [
                    { option: "interest", isCorrect: false },
                    { option: "interesting", isCorrect: false },
                    { option: "interested", isCorrect: true },
                    { option: "interests", isCorrect: false },
                ],
                explanation: "Adjective phrase: be interested in.",
            },
            {
                id: "q4",
                placeholderIndex: 4,
                options: [
                    { option: "consider", isCorrect: false },
                    { option: "considerate", isCorrect: false },
                    { option: "consideration", isCorrect: true },
                    { option: "considering", isCorrect: false },
                ],
                explanation: "Noun phrase after 'your': consideration.",
            },
        ],
    },
];
