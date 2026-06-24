import { Part7Types, Part7TypesEnum } from "../type";

export const DoublePassagesTest1: Part7Types[] = [
  {
    testSlug: "test-1",
    type: Part7TypesEnum.Double,
    id: "images/700toeic/test1/176_180/1.jpg",
    image: [

      "images/700toeic/test1/176_180/1.jpg",
      "images/700toeic/test1/176_180/2.jpg",
    ],
    questions: [
      {
        id: 176,
        questionText: "What is NOT mentioned on the invoice?",
        options: [
          { label: "A", text: "The method of payment", isCorrect: true },
          { label: "B", text: "The receiver's address", isCorrect: false },
          {
            label: "C",
            text: "The number of each item bought",
            isCorrect: false,
          },
          {
            label: "D",
            text: "The phone number of the company",
            isCorrect: false,
          },
        ],
      },
      {
        id: 177,
        questionText: "Which item did Mr. Heckbert pay the most money for?",
        options: [
          { label: "A", text: "204-994", isCorrect: false },
          { label: "B", text: "606-544", isCorrect: true },
          { label: "C", text: "653-476", isCorrect: false },
          { label: "D", text: "766-121", isCorrect: false },
        ],
      },
      {
        id: 178,
        questionText:
          "What does Mr. Heckbert suggest about one of the items he ordered?",
        options: [
          { label: "A", text: "He was overcharged for it.", isCorrect: false },
          { label: "B", text: "He cannot fit in it.", isCorrect: false },
          { label: "C", text: "He bought it on sale.", isCorrect: false },
          {
            label: "D",
            text: "He purchased it for his wife.",
            isCorrect: true,
          },
        ],
      },
      {
        id: 179,
        questionText: "How much money would Mr. Heckbert like back?",
        options: [
          { label: "A", text: "$15.00", isCorrect: false },
          { label: "B", text: "$14.69", isCorrect: false },
          { label: "C", text: "$22.00", isCorrect: false },
          { label: "D", text: "$27.20", isCorrect: true },
        ],
      },
      {
        id: 180,
        questionText: "What does Mr. Heckbert send with his e-mail?",
        options: [
          { label: "A", text: "A new clothing order", isCorrect: false },
          { label: "B", text: "A copy of his bill", isCorrect: true },
          {
            label: "C",
            text: "A picture of the faulty merchandise",
            isCorrect: false,
          },
          {
            label: "D",
            text: "A file containing his credit card bill",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    testSlug: "test-1",
    type: Part7TypesEnum.Double,
    id: "images/700toeic/test1/181_185/1.jpg",

    image: [

      "images/700toeic/test1/181_185/1.jpg",
      "images/700toeic/test1/181_185/2.jpg",
    ],
    questions: [
      {
        id: 181,
        questionText: "What is the purpose of the notice?",
        options: [
          {
            label: "A",
            text: "To mention a change in a schedule",
            isCorrect: false,
          },
          {
            label: "B",
            text: "To invite company employees to an event",
            isCorrect: true,
          },
          {
            label: "C",
            text: "To provide the contact information of some employees",
            isCorrect: false,
          },
          {
            label: "D",
            text: "To announce the winners of some awards",
            isCorrect: false,
          },
        ],
      },
      {
        id: 182,
        questionText:
          'The word "confirm" in line 15 of the notice is closest in meaning to:',
        options: [
          { label: "A", text: "certify", isCorrect: true },
          { label: "B", text: "refute", isCorrect: false },
          { label: "C", text: "purchase", isCorrect: false },
          { label: "D", text: "admit", isCorrect: false },
        ],
      },
      {
        id: 183,
        questionText: "According to the memo, when will the awards be given?",
        options: [
          { label: "A", text: "At 6:30", isCorrect: false },
          { label: "B", text: "At 7:00", isCorrect: true },
          { label: "C", text: "At 8:30", isCorrect: false },
          { label: "D", text: "At 9:00", isCorrect: false },
        ],
      },
      {
        id: 184,
        questionText: "What does Mr. Wilson ask Ms. Standish to do?",
        options: [
          {
            label: "A",
            text: "Go to the Garden Hotel in his place",
            isCorrect: false,
          },
          {
            label: "B",
            text: "Send an e-mail to Ms. Snyder",
            isCorrect: false,
          },
          {
            label: "C",
            text: "Arrange for a schedule to be changed",
            isCorrect: true,
          },
          { label: "D", text: "Coordinate with Ms. Parker", isCorrect: false },
        ],
      },
      {
        id: 185,
        questionText: "What is suggested about Todd Seager?",
        options: [
          {
            label: "A",
            text: "He performed his duties poorly last year.",
            isCorrect: true,
          },
          {
            label: "B",
            text: "He is one of this year's award winners.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "He is employed at the Garden Hotel.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "He works closely with Ms. Parker.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
];
