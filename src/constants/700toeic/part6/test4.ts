import { Part6Types } from ".";

export const PassagesTest4: Part6Types[] = [
  {
    testSlug: "test-4",
    id: "office-changes-131",
    image:
      "To: Samantha Wallace, Edward Kershaw\nFrom: Ted Winters\nSubject: Changes\nDate: June 10\n\nI've been giving some thought to an idea, and I'd like to find out what {{1}} of you think about it. Since the Sales and Marketing departments collaborate so much, I'm considering putting the two offices in the same room. So Sales would no longer be on the first floor, {{2}} would Marketing be on the third floor. Instead, they'll be on the second floor in a large, open area. There will be no individual offices except for those of the director and assistant director of each department.\n\nI believe this would foster a sense of teamwork between the members of both departments. By {{3}} what the salespeople are doing, the marketing people could create better advertisements and devise more ways to induce shoppers to buy our products. And by learning how the marketers think, the sales staff could come up with more effective ways to pitch our products. What do you two think of this proposal? {{4}}",
    questions: [
      {
        id: "q131",
        placeholderIndex: 1,
        options: [
          { option: "each", isCorrect: false },
          { option: "some", isCorrect: false },
          { option: "either", isCorrect: false },
          { option: "both", isCorrect: true },
        ],
      },
      {
        id: "q132",
        placeholderIndex: 2,
        options: [
          { option: "and", isCorrect: false },
          { option: "nor", isCorrect: true },
          { option: "thus", isCorrect: false },
          { option: "which", isCorrect: false },
        ],
      },
      {
        id: "q133",
        placeholderIndex: 3,
        options: [
          { option: "knowledge", isCorrect: false },
          { option: "knowing", isCorrect: true },
          { option: "knowable", isCorrect: false },
          { option: "will know", isCorrect: false },
        ],
      },
      {
        id: "q134",
        placeholderIndex: 4,
        options: [
          {
            option: "Wouldn't you agree that everything I did worked out well?",
            isCorrect: false,
          },
          {
            option:
              "Don't you think that everyone approves of the changes we made?",
            isCorrect: false,
          },
          {
            option:
              "How about providing feedback on this idea when you have some time?",
            isCorrect: true,
          },
          {
            option:
              "When will you two have some time to start moving the desks around?",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    testSlug: "test-4",
    id: "electricity-blackout-135",
    image:
      "{{1}} The area that is going to be covered by the blackout will be on Carter Street between Eastern Avenue and Kenmore Road. Work crews from Alameda Power are going to be working on some high-powered lines on Carter Street, so electricity there must be turned off to let them do their jobs {{2}}. Electricity will be disconnected at 9 A.M. and should be turned back on around 11:30 A.M. Residents who will be {{3}} ought to take precautions so that they will be prepared during this time. If the work is not complete by 11:30, the electricity will remain off. City employees will make {{4}} by loudspeaker in the area so that residents can be updated on the work crews' progress. Please visit the Alameda Power website at www.alamedapower.com/carterstreet to learn more about which areas will be covered by the blackout. Questions or complaints can be e-mailed to info@alamedapower.com and will be responded to within 4 hours of being received.",
    questions: [
      {
        id: "q135",
        placeholderIndex: 1,
        options: [
          {
            option:
              "Work crews are going to be repairing the street this Friday, October 10.",
            isCorrect: false,
          },
          {
            option:
              "On Wednesday, July 25, a water pipe is going to be repaired on Carter Street.",
            isCorrect: false,
          },
          {
            option:
              "Some parts of the city will not have electricity on Thursday, September 14.",
            isCorrect: true,
          },
          {
            option:
              "This Saturday, August 11, the gas will be shut off in the Freemont neighborhood.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q136",
        placeholderIndex: 2,
        options: [
          { option: "safer", isCorrect: false },
          { option: "the safest", isCorrect: false },
          { option: "safely", isCorrect: true },
          { option: "safety", isCorrect: false },
        ],
      },
      {
        id: "q137",
        placeholderIndex: 3,
        options: [
          { option: "affected", isCorrect: true },
          { option: "upset", isCorrect: false },
          { option: "absent", isCorrect: false },
          { option: "reported", isCorrect: false },
        ],
      },
      {
        id: "q138",
        placeholderIndex: 4,
        options: [
          { option: "decisions", isCorrect: false },
          { option: "announcements", isCorrect: true },
          { option: "repairs", isCorrect: false },
          { option: "upgrades", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-4",
    id: "meeting-cancel-139",
    image:
      "To: Mary Lewis\nFrom: Eloise Purcell\nSubject: Meeting\nDate: October 3\n\nMary,\n\nI know we are supposed to meet today right after lunch, but I'm afraid I'm not going to be able to get together with you then. Mr. Colter, my supervisor, requested that I give a presentation for the delegation from Spain {{1}} arrived last night. I need to discuss the benefits of our latest line of software with them at 2:30 this afternoon. {{2}} I therefore need to spend every minute until then working on what I intend to say.\n\nHow does your schedule look tomorrow morning? I've got {{3}} time between 9 and noon, so I can meet you then. If that doesn't work for you, I'm also available between the hours of 4 and 6. Why don't you let me know what the best time for you to meet is? I apologize for canceling our meeting on such {{4}} notice, but this is a matter that is out of my control. I hope you understand.\n\nRegards,\n\nEloise",
    questions: [
      {
        id: "q139",
        placeholderIndex: 1,
        options: [
          { option: "what", isCorrect: false },
          { option: "when", isCorrect: false },
          { option: "where", isCorrect: false },
          { option: "that", isCorrect: true },
        ],
      },
      {
        id: "q140",
        placeholderIndex: 2,
        options: [
          {
            option: "However, I haven't prepared any of my remarks yet.",
            isCorrect: true,
          },
          {
            option:
              "In case you don't know, I was the lead designer on the software.",
            isCorrect: false,
          },
          {
            option: "Unfortunately, the software still has some big problems.",
            isCorrect: false,
          },
          {
            option:
              "Consequently, I'll be leaving for Spain as soon as possible.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q141",
        placeholderIndex: 3,
        options: [
          { option: "a variety of", isCorrect: false },
          { option: "very little", isCorrect: false },
          { option: "no type of", isCorrect: false },
          { option: "plenty of", isCorrect: true },
        ],
      },
      {
        id: "q142",
        placeholderIndex: 4,
        options: [
          { option: "apparent", isCorrect: false },
          { option: "short", isCorrect: true },
          { option: "surprising", isCorrect: false },
          { option: "tight", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-4",
    id: "bank-opening-143",
    image:
      "Hampton City (January 17) – Yesterday, a spokeswoman for Bixby Bank announced that the bank {{1}} a new branch in the downtown part of Hampton City. The office will be located on the second floor of the Silverwood Shopping Center. {{2}} Headquartered in Montgomery, the bank has been opening branch offices at a swift pace during the past two years. This year, it plans to open more than 30 branch offices across the entire state. The office in the mall will be Hampton City's fourth Bixby Bank. The bank has been growing so much thanks to its {{3}} on customer relations and quality service. In a recent survey, Bixby Bank ranked much higher than all of its competitors regarding how well it {{4}} its customers and which services it provides for them. Bixby Bank recorded more than $25 million in profits last year, and analysts believe it will more than double that number this year.",
    questions: [
      {
        id: "q143",
        placeholderIndex: 1,
        options: [
          { option: "opened", isCorrect: false },
          { option: "has opened", isCorrect: false },
          { option: "is opening", isCorrect: true },
          { option: "to open", isCorrect: false },
        ],
      },
      {
        id: "q144",
        placeholderIndex: 2,
        options: [
          {
            option: "The shopping center recently closed due to poor sales.",
            isCorrect: false,
          },
          {
            option: "Experts believe Bixby Bank must improve its services.",
            isCorrect: false,
          },
          {
            option: "Bixby Bank is the state's fastest growing bank.",
            isCorrect: true,
          },
          {
            option: "This will be the first branch that the bank has opened.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q145",
        placeholderIndex: 3,
        options: [
          { option: "emphasis", isCorrect: true },
          { option: "impression", isCorrect: false },
          { option: "consideration", isCorrect: false },
          { option: "dedication", isCorrect: false },
        ],
      },
      {
        id: "q146",
        placeholderIndex: 4,
        options: [
          { option: "considers", isCorrect: false },
          { option: "treats", isCorrect: true },
          { option: "appoints", isCorrect: false },
          { option: "behaves", isCorrect: false },
        ],
      },
    ],
  },
];
