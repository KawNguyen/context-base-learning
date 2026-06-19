import { TextCompletionPassage } from ".";

export const passagesTest3: TextCompletionPassage[] = [
  {
    testSlug: "test-3",
    id: "airport-terminal-131",
    title: "New Terminal to Open at Airport",
    content:
      "Springfield International Airport is proud to announce that its newest terminal is going to open soon. After thirty months of construction, Terminal 2 is ready to start sending passengers to destinations {{1}} the world. The new terminal has twenty-five gates that will be used by nine different airlines. Local budget airline Ace Airways will be the {{2}} occupant of the terminal as it will have control over ten of the gates. Terminal 2 will be able to process several thousand passengers each day. It will also have all kinds of facilities, including duty-free shops and a number of franchise restaurants. {{3}} Its gates will be able to handle the largest passenger airliners in the world, too. The terminal is set to open on Thursday, April 10. There will be a small ceremony at 7 A.M., and then passengers will be {{4}} so that they can start going to their gates to catch their flights.",
    questions: [
      {
        id: "q131",
        placeholderIndex: 1,
        options: [
          { option: "over", isCorrect: false },
          { option: "in", isCorrect: false },
          { option: "around", isCorrect: true },
          { option: "within", isCorrect: false },
        ],
      },
      {
        id: "q132",
        placeholderIndex: 2,
        options: [
          { option: "primate", isCorrect: false },
          { option: "primary", isCorrect: true },
          { option: "primed", isCorrect: false },
          { option: "priming", isCorrect: false },
        ],
      },
      {
        id: "q133",
        placeholderIndex: 3,
        options: [
          {
            option:
              "Passengers have already complimented the quality of items sold in the stores.",
            isCorrect: false,
          },
          {
            option:
              "In addition, the gates are specifically designed for small commuter planes.",
            isCorrect: false,
          },
          {
            option:
              "It is anticipated that they will bring in millions of dollars in revenue annually.",
            isCorrect: true,
          },
          {
            option:
              "There is not yet anywhere for passengers to eat or to go shopping though.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q134",
        placeholderIndex: 4,
        options: [
          { option: "charged", isCorrect: false },
          { option: "admitted", isCorrect: true },
          { option: "dispatched", isCorrect: false },
          { option: "booked", isCorrect: false },
        ],
      },
    ],
  },
  {
    id: "rent-increase-135",
    testSlug: "test-3",
    title: "Rent Increase Memo",
    content:
      "To: All Tenants, Bluebird Tower\nFrom: Cliff Samuels, Building Manager\nRe: Rent Increase\nDate: August 2\n\nPlease be aware that as of September 1, all rents in the building will increase by 10%. This increase applies both to individuals renting apartments {{1}} those people who are renting office or commercial spaces. {{2}} I will be sending new contracts to all tenants within the next five business days. You need to sign them and return them to me at my office on the first floor no later than August 15. Those of you who do not wish to pay the higher rent must {{3}} the premises by August 31. Your security deposit {{4}} as soon as we in the management office confirm that your space has not suffered any damage. You may feel free to speak with me about the rent increase or anything else that is on your mind. Just call me at 856-4584 during regular business hours.",
    questions: [
      {
        id: "q135",
        placeholderIndex: 1,
        options: [
          { option: "and", isCorrect: true },
          { option: "so", isCorrect: false },
          { option: "or", isCorrect: false },
          { option: "that", isCorrect: false },
        ],
      },
      {
        id: "q136",
        placeholderIndex: 2,
        options: [
          {
            option:
              "There are unfortunately no more places available for rent at the moment.",
            isCorrect: false,
          },
          {
            option:
              "There is no need for any of you to sign a new lease if you do not wish to do so.",
            isCorrect: false,
          },
          {
            option:
              "All tenants must renegotiate the amount of rent that they pay sometime this week.",
            isCorrect: false,
          },
          {
            option:
              "The rents are being increased to account for the recent rise in utilities prices.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q137",
        placeholderIndex: 3,
        options: [
          { option: "remove", isCorrect: false },
          { option: "sell", isCorrect: false },
          { option: "repair", isCorrect: false },
          { option: "vacate", isCorrect: true },
        ],
      },
      {
        id: "q138",
        placeholderIndex: 4,
        options: [
          { option: "have been returned", isCorrect: false },
          { option: "returned", isCorrect: false },
          { option: "will be returned", isCorrect: true },
          { option: "was returned", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-3",
    id: "auto-mechanics-139",
    title: "Association of Auto Mechanics Conference",
    content:
      "March 15\n\nDear Member of the Association of Auto Mechanics,\n\nThe Association of Auto Mechanics (AAM) is going to hold its annual conference on September 14 and 15. The event is going to be held in Memphis, Tennessee. This is the same location as last year's event. Due to the tremendous {{1}} of the conference last year, it was unanimously decided by the members of the executive staff at the AAM to have it in Memphis once again.\n\nThis year's conference will have a large number of events, including talks, workshops, and a sales fair. The keynote speaker will be {{2}} mechanic Robert McGuffin, an expert in the art of repairing antique vehicles. As a member of the AAM, you are {{3}} to pay the discounted registration rate of $75. That will get you access to every event that is being held at the conference. Some airlines and hotels are offering discounts to our members. Please call (405) 326-8695 for more information regarding that. {{4}}\n\nSincerely,\n\nTim Matterhorn\nPresident, Association of Auto Mechanics",
    questions: [
      {
        id: "q139",
        placeholderIndex: 1,
        options: [
          { option: "succeed", isCorrect: false },
          { option: "success", isCorrect: true },
          { option: "succession", isCorrect: false },
          { option: "succeeding", isCorrect: false },
        ],
      },
      {
        id: "q140",
        placeholderIndex: 2,
        options: [
          { option: "famed", isCorrect: true },
          { option: "imitation", isCorrect: false },
          { option: "novice", isCorrect: false },
          { option: "incompetent", isCorrect: false },
        ],
      },
      {
        id: "q141",
        placeholderIndex: 3,
        options: [
          { option: "excepted", isCorrect: false },
          { option: "avoided", isCorrect: false },
          { option: "entitled", isCorrect: true },
          { option: "reported", isCorrect: false },
        ],
      },
      {
        id: "q142",
        placeholderIndex: 4,
        options: [
          { option: "Thanks for attending the event.", isCorrect: false },
          { option: "A great time was had by everyone.", isCorrect: false },
          { option: "We hope to see you in September.", isCorrect: true },
          {
            option: "Calls regarding this matter will be ignored.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    testSlug: "test-3",
    id: "resident-year-143",
    title: "Pearl Resident of the Year Named",
    content:
      "Pearl (December 28) – In a ceremony held at city hall last night, Jason O'Brien was {{1}} the Resident of the Year by Mayor Anna Harper. Mr. O'Brien, who has lived in Pearl for more than forty years since moving to the city as a child, has been in the news a lot this year. First, when a tornado swept through the city in the spring, Mr. O'Brien helped organize groups of residents to rescue those needing assistance. {{2}} He also {{3}} a large amount of money to relief efforts in the city. He came to the rescue once again when the Red River flooded its banks in summer and left half the city under two feet of water. Finally, Mr. O'Brien provided $2 million for the building of a local community center, where residents will be able to go for various leisure activities once construction on it is complete 14 months from now. According to Mayor Harper, {{4}} else was even considered for the award.",
    questions: [
      {
        id: "q143",
        placeholderIndex: 1,
        options: [
          { option: "nominated", isCorrect: false },
          { option: "reported", isCorrect: false },
          { option: "named", isCorrect: true },
          { option: "stated", isCorrect: false },
        ],
      },
      {
        id: "q144",
        placeholderIndex: 2,
        options: [
          {
            option:
              "He was on a team that stopped the flooding from affecting the entire city.",
            isCorrect: false,
          },
          {
            option:
              "His efforts resulted in 20 people being saved from inside collapsed homes.",
            isCorrect: false,
          },
          {
            option:
              "Those groups warned local residents about the tornado and led them to safety.",
            isCorrect: true,
          },
          {
            option:
              "The money that he provided helped repair people's homes that burned in fires.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q145",
        placeholderIndex: 3,
        options: [
          { option: "donated", isCorrect: true },
          { option: "deposited", isCorrect: false },
          { option: "invested", isCorrect: false },
          { option: "contracted", isCorrect: false },
        ],
      },
      {
        id: "q146",
        placeholderIndex: 4,
        options: [
          { option: "everybody", isCorrect: false },
          { option: "anybody", isCorrect: false },
          { option: "somebody", isCorrect: false },
          { option: "nobody", isCorrect: true },
        ],
      },
    ],
  },
];
