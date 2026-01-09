import { QuestionResponseExercise } from "../types";

export const B1_QUESTION_RESPONSE: QuestionResponseExercise[] = [
    {
        id: "b1-qr-1",
        title: "Question Response 1",
        level: "B1",
        audioUrl: "/audio/listening/b1/qr-1.mp3",
        correctResponse: 1, // B
        transcript: {
            question: "When does the meeting start?",
            responses: ["In the conference room.", "At two o'clock.", "Yes, I'm going."],
        },
    },
    {
        id: "b1-qr-2",
        title: "Question Response 2",
        level: "B1",
        audioUrl: "/audio/listening/b1/qr-2.mp3",
        correctResponse: 0, // A
        transcript: {
            question: "How do you get to work?",
            responses: ["By bus usually.", "It's hard work.", "About 30 minutes."],
        },
    },
    {
        id: "b1-qr-3",
        title: "Question Response 3",
        level: "B1",
        audioUrl: "/audio/listening/b1/qr-3.mp3",
        correctResponse: 2, // C
        transcript: {
            question: "Who is responsible for this project?",
            responses: [
                "The project is finished.",
                "It's due tomorrow.",
                "Ms. Johnson is.",
            ],
        },
    },
];
