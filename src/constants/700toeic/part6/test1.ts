import { TextCompletionPassage } from ".";

export const passagesTest1: TextCompletionPassage[] = [
  {
    testSlug: "test-1",
    id: "delmont-paper-mill-001",
    title: "The Delmont Paper Mill Announcement",
    content:
      "The Delmont Paper Mill has been in business since 1878. During that time, we have made all kinds of paper products that have been sold around the country. We are in the process of {{1}} our facilities so that we can increase our production of paper approximately 25% by the end of the year. When the process is complete, we will require more raw materials, especially wood pulp, for our mill. We are now accepting bids from suppliers. For a list of the materials that we need as well as the required amounts, please visit our website at www.delmontpaper.com/supplies. {{2}} Those interested in bidding to become a supplier can then contact Mr. Peter Hopkins at 850-3043. All bids must be submitted no later than October 1. {{3}} parties will be contacted on or around October 10. Those companies selected to become new suppliers {{4}} providing shipments of supplies by the middle of December.",
    questions: [
      {
        id: "q131",
        placeholderIndex: 1,
        options: [
          { option: "designing", isCorrect: false },
          { option: "expanding", isCorrect: true },
          { option: "planning", isCorrect: false },
          { option: "financing", isCorrect: false },
        ],
      },
      {
        id: "q132",
        placeholderIndex: 2,
        options: [
          {
            option:
              "Please do not contact us by phone to get more information.",
            isCorrect: false,
          },
          {
            option:
              "All the information that is necessary to know may be found there.",
            isCorrect: true,
          },
          {
            option:
              "Suppliers can learn about the needed materials by calling us.",
            isCorrect: false,
          },
          {
            option:
              "The bidding process will be closed in the month of November.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q133",
        placeholderIndex: 3,
        options: [
          { option: "Win", isCorrect: false },
          { option: "Winner", isCorrect: false },
          { option: "Winning", isCorrect: true },
          { option: "Winners", isCorrect: false },
        ],
      },
      {
        id: "q134",
        placeholderIndex: 4,
        options: [
          { option: "began", isCorrect: false },
          { option: "have begun", isCorrect: false },
          { option: "are beginning", isCorrect: false },
          { option: "must begin", isCorrect: true },
        ],
      },
    ],
  },
  {
    testSlug: "test-1",
    id: "savers-bank-letter-135",
    title: "Savers' Bank Welcome Letter",
    content:
      "December 10\n\nDear Mr. Thompson,\n\nThank you for opening a checking account at Savers' Bank. We have been providing our customers with high-quality services for more than 35 years, and we {{1}} to do the same thing for you.\n\nWe are currently printing your checks. You should receive them no later {{2}} December 15. Please note that most places in the city require you to present a form of picture ID when paying for goods or services with a check. {{3}} In addition, we charge a $40 fee if you write a check on an overdrawn account.\n\nYou may feel free to contact one of our customer service representatives at 808-4243 at any time should you have any questions or comments regarding your account. We look forward to having a long and mutually {{4}} relationship with you.\n\nSincerely,\n\nCarla Hampton\nVice President\nSavers' Bank",
    questions: [
      {
        id: "q135",
        placeholderIndex: 1,
        options: [
          { option: "respect", isCorrect: false },
          { option: "require", isCorrect: false },
          { option: "await", isCorrect: false },
          { option: "intend", isCorrect: true },
        ],
      },
      {
        id: "q136",
        placeholderIndex: 2,
        options: [
          { option: "from", isCorrect: false },
          { option: "within", isCorrect: false },
          { option: "than", isCorrect: true },
          { option: "by", isCorrect: false },
        ],
      },
      {
        id: "q137",
        placeholderIndex: 3,
        options: [
          {
            option:
              "For instance, an electricity bill with your name on it is acceptable.",
            isCorrect: false,
          },
          {
            option:
              "To make payments to these businesses, simply call us for more information.",
            isCorrect: false,
          },
          {
            option:
              "In order to get paid, be sure that you have the proper identification on you.",
            isCorrect: false,
          },
          {
            option:
              "In most cases, a driver's license is considered acceptable by vendors.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q138",
        placeholderIndex: 4,
        options: [
          { option: "beneficial", isCorrect: true },
          { option: "apparent", isCorrect: false },
          { option: "respective", isCorrect: false },
          { option: "suspicious", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-1",
    id: "greenbrier-volunteers-139",
    title: "Volunteers Needed",
    content:
      "The Greenbrier Community Center is looking for volunteers to work during the summer months. We require people to teach some of the classes we hope to offer, and we could also use people to work at the information desk. {{1}} with the time and ability to teach classes on painting, arts and crafts, needlepoint, and sewing are highly desired. {{2}} Please call Mary Ashford at 382-8594 for more information.\n\nWhile volunteers at the Greenbrier Community Center will not receive any {{3}} compensation for their time, they will be rewarded in other ways. Anyone volunteering up to ten hours a week will receive 50% off the price of a yearly membership. And anyone who volunteers 20 hours or more each week will receive a free annual membership.\n\nBecome a volunteer at the Greenbrier Community Center. Help the residents of our community {{4}} their lives by giving a bit of time from yours.",
    questions: [
      {
        id: "q139",
        placeholderIndex: 1,
        options: [
          { option: "They", isCorrect: false },
          { option: "Them", isCorrect: false },
          { option: "These", isCorrect: false },
          { option: "Those", isCorrect: true },
        ],
      },
      {
        id: "q140",
        placeholderIndex: 2,
        options: [
          {
            option:
              "You will be paid well for the time that you spend with us.",
            isCorrect: false,
          },
          {
            option:
              "So are people who would like to coach sports teams or act as referees.",
            isCorrect: true,
          },
          {
            option:
              "We would also like someone to replace Ms. Ashford, who recently resigned.",
            isCorrect: false,
          },
          {
            option:
              "There will not be any arts and crafts classes taught this summer.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q141",
        placeholderIndex: 3,
        options: [
          { option: "finance", isCorrect: false },
          { option: "financial", isCorrect: true },
          { option: "financing", isCorrect: false },
          { option: "financier", isCorrect: false },
        ],
      },
      {
        id: "q142",
        placeholderIndex: 4,
        options: [
          { option: "improve", isCorrect: true },
          { option: "donate", isCorrect: false },
          { option: "dedicate", isCorrect: false },
          { option: "approach", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-1",
    id: "accounting-restructuring-143",
    title: "Restructuring Memo",
    content:
      "To: All Staff Members, Accounting Department\nFrom: Darren Smith, Director, Accounting Department\nSubject: Restructuring\nDate: November 4\n\nIn the past two weeks, three of the employees in the Accounting Department have {{1}} their positions to work at other companies. Unfortunately, HR has decided that only one of those positions {{2}} with a new worker. As a result, all of us are going to take on additional duties to do the work that Jeb Marconi and Jenna Wilkins used to do.\n\nWe're going to have a staff meeting to discuss this matter on Friday, November 6. It's going to start at 9 in the morning and will end when we cover everything. {{3}} Attendance at the meeting is mandatory, so please cancel all other plans or appointments you may have scheduled for that time. If you have any suggestions regarding this matter, please feel free to mention them at the meeting. I am interested in hearing everyone's ideas on how we can assume extra duties without making our {{4}} too heavy.",
    questions: [
      {
        id: "q143",
        placeholderIndex: 1,
        options: [
          { option: "transferred", isCorrect: false },
          { option: "altered", isCorrect: false },
          { option: "suspended", isCorrect: false },
          { option: "resigned", isCorrect: true },
        ],
      },
      {
        id: "q144",
        placeholderIndex: 2,
        options: [
          { option: "is filling", isCorrect: false },
          { option: "will fill", isCorrect: false },
          { option: "has been filled", isCorrect: false },
          { option: "will be filled", isCorrect: true },
        ],
      },
      {
        id: "q145",
        placeholderIndex: 3,
        options: [
          {
            option: "I anticipate that it will last for at least 2 hours.",
            isCorrect: true,
          },
          {
            option: "The agenda for the meeting has not yet been set.",
            isCorrect: false,
          },
          {
            option:
              "Please try to make it to the meeting if you have the time.",
            isCorrect: false,
          },
          {
            option:
              "I will be the only one who will be speaking at the meeting.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q146",
        placeholderIndex: 4,
        options: [
          { option: "schedules", isCorrect: false },
          { option: "workloads", isCorrect: true },
          { option: "appointments", isCorrect: false },
          { option: "jobs", isCorrect: false },
        ],
      },
    ],
  },
];
