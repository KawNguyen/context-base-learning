import { TextCompletionPassage } from ".";

export const passagesTest2: TextCompletionPassage[] = [
  {
    testSlug: "test-2",
    id: "darby-printing-131",
    title: "Darby's Printing Services Announcement",
    content:
      "{{1}} Darby's Printing Services has just opened for business. We are located at 67 Washburn Avenue and are right across the street from the Whitman Steakhouse. {{2}} we may be a new business, our employees are old hands at the printing industry. Clarence Darby, the owner, has more than five decades of experience in the industry, and his employees have been working for more than two decades each.\n\nTo celebrate the opening of our store, {{3}} service we provide will be available at a 40% discount during our first week of business. So come here and have your company reports printed. Or request new business cards. We can print signs, advertisements, and posters as well. If it has anything to do with printing, we are the {{4}}. Call us at 701-7649 or visit our website at www.darbysprinting.com to learn more about us and to see how much we charge for our services.\n\nWe hope to see you soon.",
    questions: [
      {
        id: "q131",
        placeholderIndex: 1,
        options: [
          {
            option: "Darby's Printing Services is reopening its doors.",
            isCorrect: false,
          },
          {
            option: "There's a new store in town, and we want to serve you.",
            isCorrect: true,
          },
          {
            option: "Thanks for making our first week in business a success.",
            isCorrect: false,
          },
          {
            option:
              "Darby's Printing Services is celebrating its tenth year of doing business.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q132",
        placeholderIndex: 2,
        options: [
          { option: "While", isCorrect: true },
          { option: "However", isCorrect: false },
          { option: "Since", isCorrect: false },
          { option: "If", isCorrect: false },
        ],
      },
      {
        id: "q133",
        placeholderIndex: 3,
        options: [
          { option: "some", isCorrect: false },
          { option: "which", isCorrect: false },
          { option: "every", isCorrect: true },
          { option: "that", isCorrect: false },
        ],
      },
      {
        id: "q134",
        placeholderIndex: 4,
        options: [
          { option: "sellers", isCorrect: false },
          { option: "designers", isCorrect: false },
          { option: "architects", isCorrect: false },
          { option: "experts", isCorrect: true },
        ],
      },
    ],
  },
  {
    testSlug: "test-2",
    id: "odessa-festival-135",
    title: "Odessa Spring Festival Comes to an End",
    content:
      "Odessa (May 10) – After five days, the Odessa Spring Festival came to its {{1}} yesterday. The festival finished with a fireworks show above Big Bass Lake that lasted until late at night.\n\n{{2}} This was the first time since 2011 that the festival received five straight days of sunny weather. The temperature was also unseasonably high, which made for a more pleasant {{3}} for most of the attendees. Festival organizer Diane Armstrong said, \"I can't think of a single thing that went wrong this year. I'm pleased that we had a great festival and that so many people from the local community came here to support us.\"\n\nOn the last day of the festival, the annual fishing contest was held. The winner was Pete Wellman, who caught six fish {{4}} a combined total of 11.4 kilograms. He is a three-time winner of the contest, having won it last year as well as six years ago.",
    questions: [
      {
        id: "q135",
        placeholderIndex: 1,
        options: [
          { option: "conclusion", isCorrect: true },
          { option: "final", isCorrect: false },
          { option: "stop", isCorrect: false },
          { option: "over", isCorrect: false },
        ],
      },
      {
        id: "q136",
        placeholderIndex: 2,
        options: [
          {
            option:
              "The festival's organizers hope the sunny skies will attract many people.",
            isCorrect: false,
          },
          {
            option:
              "Not as many people as expected visited the festival due to the heavy rain.",
            isCorrect: false,
          },
          {
            option:
              "There were a number of problems at the festival, especially the weather.",
            isCorrect: false,
          },
          {
            option:
              "This year's festival was widely considered the most successful in recent years.",
            isCorrect: true,
          },
        ],
      },
      {
        id: "q137",
        placeholderIndex: 3,
        options: [
          { option: "attempt", isCorrect: false },
          { option: "experience", isCorrect: true },
          { option: "visualization", isCorrect: false },
          { option: "appearance", isCorrect: false },
        ],
      },
      {
        id: "q138",
        placeholderIndex: 4,
        options: [
          { option: "weigh", isCorrect: false },
          { option: "weighted", isCorrect: false },
          { option: "weighing", isCorrect: true },
          { option: "weighs", isCorrect: false },
        ],
      },
    ],
  },
  {
    testSlug: "test-2",
    id: "orientation-email-139",
    title: "Orientation Session Email",
    content:
      "To: Wilma Arlington\nFrom: Chad Silva\nSubject: Orientation\nDate: August 24\n\nWilma,\n\nAs you are aware, the orientation session for new employees is scheduled for next Monday, August 31. Unfortunately, there's a slight problem. Matt Powell was supposed {{1}} the session. However, he just submitted his resignation this morning, so the CEO doesn't want him running the {{2}}. Mr. Jenkins instead suggested that you be responsible for everything.\n\nI know you've never done this before, but it's a fairly straightforward {{3}}. I can get you up to speed on everything you need to do and let you know what must be done before next Monday as well. {{4}} Why don't we get together today? I'm going to be out of the office until around 2 in the afternoon. But I'm available any time after then until 6 in the evening. How about leaving a text message for me on my cell phone since I can't check my e-mail while I'm out of the office? My number is (205) 365-8434.\n\nI will wait for your response.\n\nSincerely,\n\nChad Silva",
    questions: [
      {
        id: "q139",
        placeholderIndex: 1,
        options: [
          { option: "leading", isCorrect: false },
          { option: "led", isCorrect: false },
          { option: "to lead", isCorrect: true },
          { option: "have led", isCorrect: false },
        ],
      },
      {
        id: "q140",
        placeholderIndex: 2,
        options: [
          { option: "negotiation", isCorrect: false },
          { option: "program", isCorrect: true },
          { option: "ceremony", isCorrect: false },
          { option: "workplace", isCorrect: false },
        ],
      },
      {
        id: "q141",
        placeholderIndex: 3,
        options: [
          { option: "process", isCorrect: true },
          { option: "procession", isCorrect: false },
          { option: "processed", isCorrect: false },
          { option: "processing", isCorrect: false },
        ],
      },
      {
        id: "q142",
        placeholderIndex: 4,
        options: [
          {
            option: "It would be ideal for us to meet in person soon.",
            isCorrect: true,
          },
          {
            option: "Let's talk on the phone to cover all the details.",
            isCorrect: false,
          },
          {
            option: "I'm going to be away from the office until tomorrow.",
            isCorrect: false,
          },
          {
            option: "We don't want there to be mistakes like the last time.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    testSlug: "test-2",
    id: "internal-transfers-143",
    title: "Internal Transfers Memo",
    content:
      "To: All Employees\nFrom: Rachel Hunter, HR Department\nSubject: Internal Transfers\nDate: October 2\n\n{{1}} The forms for transfer can be picked up in the HR Department or may be downloaded from the company's website at www.jacksons.com/transfers. They must be completed in full, signed by your direct supervisor, and submitted no later than October 10. Any other paperwork that is required should be turned in {{2}} your application. Be sure to state which department or branch you are applying to and why you would like to work there.\n\nPlease note that we have opened several new branches in foreign countries this year. We now have branches in Brazil, South Africa, Singapore, China, and Australia. If you are interested in transferring to one of these branches, you must be {{3}} in the primary language spoken in that particular country. Contact me anytime at extension 33 if you have any questions or concerns {{4}} transferring.",
    questions: [
      {
        id: "q143",
        placeholderIndex: 1,
        options: [
          {
            option: "We have just hired several new employees here.",
            isCorrect: false,
          },
          {
            option: "It is time to start considering employees for promotions.",
            isCorrect: false,
          },
          {
            option:
              "HR is currently accepting applications for internal transfers.",
            isCorrect: true,
          },
          {
            option: "You need to prepare for your annual employee evaluations.",
            isCorrect: false,
          },
        ],
      },
      {
        id: "q144",
        placeholderIndex: 2,
        options: [
          { option: "in lieu of", isCorrect: false },
          { option: "regardless of", isCorrect: false },
          { option: "along with", isCorrect: true },
          { option: "with respect to", isCorrect: false },
        ],
      },
      {
        id: "q145",
        placeholderIndex: 3,
        options: [
          { option: "fluent", isCorrect: true },
          { option: "talkative", isCorrect: false },
          { option: "aware", isCorrect: false },
          { option: "prepared", isCorrect: false },
        ],
      },
      {
        id: "q146",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: false },
          { option: "regardless", isCorrect: false },
          { option: "regarding", isCorrect: true },
          { option: "regarded", isCorrect: false },
        ],
      },
    ],
  },
];
