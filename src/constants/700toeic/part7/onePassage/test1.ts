import { ReadingPassage } from "./type";

export const toeicData: ReadingPassage[] = [
  {
    title: "Aloha from Hawaii!",
    type: "Advertisement",
    content: "images/700toeic/test1/147_148.jpg",
    questions: [
      {
        id: 147,
        questionText: "Why is the restaurant having a special offer?",
        options: [
          {
            label: "A",
            text: "It is having its grand opening.",
            isCorrect: false,
          },
          {
            label: "B",
            text: "The restaurant has a brand-new owner.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "It is celebrating its tenth anniversary.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "The food being offered has just changed.",
            isCorrect: true,
          },
        ],
      },
      {
        id: 148,
        questionText:
          "What is NOT mentioned as a part of the meal being offered?",
        options: [
          { label: "A", text: "An entrée", isCorrect: false },
          { label: "B", text: "A salad", isCorrect: true },
          { label: "C", text: "An appetizer", isCorrect: false },
          { label: "D", text: "A dessert", isCorrect: false },
        ],
      },
    ],
  },
  {
    type: "Online message chain",
    content:
      "Cooper, Bruce [4:15 P.M.]\nThe bidding process is complete. They're going to make a decision in the next couple of minutes.\nIrwin, Catherine [4:17 P.M.]\nI hope we land the job.\nCooper, Bruce [4:25 P.M.]\nI can't believe it. They chose our bid for the Tyler project over everyone else's.\nIrwin, Catherine [4:26 P.M.]\nCongratulations. I knew you could do it.\nCooper, Bruce [4:28 P.M.]\nThis is the kind of contract we've been trying to get for the past three years.\nIrwin, Catherine [4:30 P.M.]\nIt looks like we're going to be really busy soon. What time will you be back in the office? Should I assemble the team so that we can go over what to do next?\nCooper, Bruce [4:34 P.M.]\nGood thinking. I'll be back by 5:30. We can go over the specifics of the contract and talk in brief about what needs to be done.",
    questions: [
      {
        id: 149,
        questionText:
          'At 4:28 P.M., why does Mr. Cooper write, "This is the kind of contract we\'ve been trying to get for the past three years"?',
        options: [
          {
            label: "A",
            text: "To congratulate Ms. Irwin for her work on the project",
            isCorrect: false,
          },
          {
            label: "B",
            text: "To express his happiness at being awarded the deal",
            isCorrect: true,
          },
          {
            label: "C",
            text: "To state that the company will turn a profit soon",
            isCorrect: false,
          },
          {
            label: "D",
            text: "To mention how hard the last three years have been",
            isCorrect: false,
          },
        ],
      },
      {
        id: 150,
        questionText: "What is going to happen around 5:30?",
        options: [
          { label: "A", text: "A contract will be signed.", isCorrect: false },
          { label: "B", text: "A bid will be made.", isCorrect: false },
          { label: "C", text: "Assignments will be given.", isCorrect: false },
          { label: "D", text: "A meeting will be held.", isCorrect: true },
        ],
      },
    ],
  },
  {
    title: "MEMO",
    type: "Memorandum",
    content:
      "To: All Employees\nFrom: Melissa Jenkins\nDate: April 10\nRe: Restructuring\n\nPlease be aware that the company is going to undergo a major restructuring involving the Sales, Marketing, and Accounting Departments. -[1]- The Sales and Marketing Departments will be combined into a single department to be called the Commerce Department. George Jenkins, who is currently the manager of the Sales Department, will take over as the head of this department. -[2]- In addition, the Accounting Department will be downsized by 25%. Employees in all three of these departments will be notified of their future status here this Friday morning. -[3]- All changes will go into effect on May 1. We are implementing these changes to streamline company operations and to ensure future profitability. We hope that everyone will pull together during this difficult time so that we can emerge from the current recession as a leaner, but more profitable, firm. -[4]-",
    questions: [
      {
        id: 151,
        questionText: "According to the memo, what is going to happen?",
        options: [
          {
            label: "A",
            text: "A new department is going to be formed.",
            isCorrect: true,
          },
          {
            label: "B",
            text: "George Jenkins will become the CEO.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "All employees in a department will be fired.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "The company will lay off 25% of its workforce.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 152,
        questionText:
          'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "Some of you will be laid off while others will receive promotions or transfers."',
        options: [
          { label: "A", text: "[1]", isCorrect: false },
          { label: "B", text: "[2]", isCorrect: false },
          { label: "C", text: "[3]", isCorrect: true },
          { label: "D", text: "[4]", isCorrect: false },
        ],
      },
    ],
  },
  {
    title: "Falcon Air Itinerary",
    type: "Itinerary",
    content:
      "Passenger Name: Ms. Naomi Strauss\nReservation Code: ERE6095\n\nZurich to Barcelona | Flight FA394 | Cabin: Economy | Departure Time: 2:15 P.M. | Arrival Time: 4:05 P.M.\nBarcelona to Paris | Flight FA211 | Cabin: Economy | Departure Time: 10:30 A.M. | Arrival Time: 12:25 P.M.\nParis to Copenhagen | Flight FA95 | Cabin: Business | Departure Time: 4:20 P.M. | Arrival Time: 6:10 P.M.\nCopenhagen to Zurich | Flight FA575 | Cabin: Economy | Departure Time: 7:10 P.M. | Arrival Time: 8:50 P.M.\n\nPlease print this document and present it at the check-in counter. You may check in 2 bags weighing up to a total of 20 kilograms. For each additional bag you check in, you will be charged 50 euros. If you exceed the weight allowance, you must pay an additional 7 euros per kilogram.\n\nThis ticket may only be used by the passenger whose name is on it. It may not be transferred. This is a nonrefundable ticket, but it may be changed 1 time with no financial penalty.",
    questions: [
      {
        id: 153,
        questionText: "Which flight departs in the morning?",
        options: [
          { label: "A", text: "FA95", isCorrect: false },
          { label: "B", text: "FA211", isCorrect: true },
          { label: "C", text: "FA394", isCorrect: false },
          { label: "D", text: "FA575", isCorrect: false },
        ],
      },
      {
        id: 154,
        questionText:
          "How many kilograms of luggage may a passenger check in for free?",
        options: [
          { label: "A", text: "7 kilograms", isCorrect: false },
          { label: "B", text: "20 kilograms", isCorrect: true },
          { label: "C", text: "40 kilograms", isCorrect: false },
          { label: "D", text: "50 kilograms", isCorrect: false },
        ],
      },
      {
        id: 155,
        questionText: "According to the ticket, which statement is correct?",
        options: [
          {
            label: "A",
            text: "The passenger will sit in the same cabin on every flight.",
            isCorrect: false,
          },
          {
            label: "B",
            text: "The passenger is traveling with another person.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "The passenger may change a flight on the ticket.",
            isCorrect: true,
          },
          {
            label: "D",
            text: "The passenger can get a full refund on the ticket.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    type: "Instructions",
    content:
      "Thank you for purchasing a Safety Pro Car Seat from the Whitman Corporation. Car seats can only protect your children when they are installed properly, so please carefully read and then follow the instructions below.\n\n✓ Do not install this car seat in the front seat of your vehicle. It is meant only to be installed in the back seat.\n✓ If your child weighs fewer than 10 kilograms or is 18 months of age or younger, the car seat should be positioned facing the rear. Children who are both 18 months of age or older and who weigh 10 kilograms or more may sit in seats facing forward.\n✓ Pull the seatbelt through the belt path while ensuring that there are no twists. Then, lock the seatbelt in place.\n✓ Pull the seatbelt tightly so that the car seat fits securely. Side-to-side movement decreases the effectiveness of the car seat.\n✓ Place your child in the car seat and then adjust the straps to guarantee that the child fits snugly within the seat. Your child should not wear a jacket while riding in the car seat.\n\nFor more information, including a video with step-by-step instructions, please visit our website at www.safetyprocarseat.com. You may also call us toll-free at 1-888-555-4938 if you have any questions regarding the Safety Pro Car Seat.",
    questions: [
      {
        id: 156,
        questionText: "Where most likely would these instructions be found?",
        options: [
          { label: "A", text: "On a website", isCorrect: false },
          { label: "B", text: "In an instruction manual", isCorrect: true },
          { label: "C", text: "In a newspaper", isCorrect: false },
          { label: "D", text: "In a letter", isCorrect: false },
        ],
      },
      {
        id: 157,
        questionText: "What is NOT true according to the instructions?",
        options: [
          {
            label: "A",
            text: "A child should be able to move from side to side in the seat.",
            isCorrect: true,
          },
          {
            label: "B",
            text: "It is unacceptable for a child in the seat to have a jacket on.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "A child weighing 7 kilograms should sit facing the rear.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "There should not be any twists in the seatbelt when it is fastened.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 158,
        questionText:
          "What should a person do to get access to a video of the car seat being installed?",
        options: [
          { label: "A", text: "Call a telephone number", isCorrect: false },
          { label: "B", text: "Watch a videotape", isCorrect: false },
          { label: "C", text: "Visit a website", isCorrect: true },
          { label: "D", text: "Send a text message", isCorrect: false },
        ],
      },
    ],
  },
  {
    title: "Repair Work",
    type: "Email",
    content:
      "TO: James Walker <jwalker@ssuncorp.com>\nFROM: Helen Trent <htrent@westing.com>\nSUBJECT: Repair Work\nDATE: July 16\n\nDear Mr. Walker,\n\nI am writing to you with regard to the repair work that a team from your firm did on the main office's air conditioning system last week. Since the work was completed on Thursday, I have received several complaints from employees with regard to the excessive noise that the air conditioning system is making. The problem only arose after your repairmen departed, so I assume that the noise has something to do with the work that they did on the system. As I am sure that you can understand, the high level of noise is making it hard for everyone to concentrate on their work, so we have had to turn the system off. Naturally, we are all very hot due to the ongoing heatwave, so we are in need of a functioning air conditioning system. As per our contract, your company guarantees all the work it does, so I request that your repairmen return to my firm as soon as possible. Would you please be kind enough to inform me when this will be possible? I look forward to hearing from you soon.\n\nSincerely,\n\nHelen Trent\nWesting Corporation",
    questions: [
      {
        id: 159,
        questionText: "Why did Ms. Trent write to Mr. Walker?",
        options: [
          {
            label: "A",
            text: "To praise him for some work done",
            isCorrect: false,
          },
          {
            label: "B",
            text: "To ask him to send a bill to her",
            isCorrect: false,
          },
          {
            label: "C",
            text: "To inform him about a problem",
            isCorrect: true,
          },
          {
            label: "D",
            text: "To complain about the weather",
            isCorrect: false,
          },
        ],
      },
      {
        id: 160,
        questionText:
          'The word "concentrate" in line 7 is closest in meaning to:',
        options: [
          { label: "A", text: "decide", isCorrect: false },
          { label: "B", text: "focus", isCorrect: true },
          { label: "C", text: "practice", isCorrect: false },
          { label: "D", text: "stress", isCorrect: false },
        ],
      },
      {
        id: 161,
        questionText: "What does Ms. Trent request Mr. Walker to do?",
        options: [
          {
            label: "A",
            text: "Replace an air conditioning unit",
            isCorrect: false,
          },
          {
            label: "B",
            text: "Send a team to deal with the noise",
            isCorrect: true,
          },
          {
            label: "C",
            text: "Tell her how to solve a problem",
            isCorrect: false,
          },
          {
            label: "D",
            text: "Call her to set up an appointment",
            isCorrect: false,
          },
        ],
      },
    ],
  },

  {
    title: "Escape to the Bendburg Ski Resort",
    type: "Advertisement",
    content:
      "The snow has started falling, which means that it's time to go skiing. The Bendburg Ski Resort has just opened for the winter and is taking reservations. Don't miss out on the excellent new facilities at the finest ski resort in the state. During the summer, a slope called the Green Mountain Run was added. The Green Mountain Run is our longest and most challenging slope. You can also take advantage of our newly renovated ski lifts to maximize your time on the mountains. And don't forget to stop by Ricardo's, our new café, for some hot chocolate, an espresso, or a snack and for the best view of the surrounding area once you're done skiing. New to skiing? Bendburg has four instructors able to help novices and veteran skiers alike. Get the lowest prices for lessons when you book in advance. Located 30 minutes south of Milton on Highway 152, the Bendburg Ski Resort offers a daily shuttle service to downtown Milton. Call 953-8201 for more information or to make a booking.",
    questions: [
      {
        id: 162,
        questionText: "What is the purpose of the announcement?",
        options: [
          {
            label: "A",
            text: "To describe some renovations in detail",
            isCorrect: false,
          },
          {
            label: "B",
            text: "To discuss how to get to a resort",
            isCorrect: false,
          },
          {
            label: "C",
            text: "To advertise a place of business",
            isCorrect: true,
          },
          {
            label: "D",
            text: "To compare a resort with other places",
            isCorrect: false,
          },
        ],
      },
      {
        id: 163,
        questionText: "What is mentioned about the Green Mountain Run?",
        options: [
          { label: "A", text: "Beginners should ski on it.", isCorrect: false },
          {
            label: "B",
            text: "Ricardo's is at the bottom of it.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "The new ski lift leads to it.",
            isCorrect: false,
          },
          { label: "D", text: "It was built recently.", isCorrect: true },
        ],
      },
      {
        id: 164,
        questionText: "What can visitors do at the Bendburg Ski Resort?",
        options: [
          {
            label: "A",
            text: "Rent rooms with a mountain view",
            isCorrect: false,
          },
          {
            label: "B",
            text: "Go on hiking tours of the region",
            isCorrect: false,
          },
          {
            label: "C",
            text: "Take lessons to improve their skiing abilities",
            isCorrect: true,
          },
          {
            label: "D",
            text: "Reserve rooms on the resort's website",
            isCorrect: false,
          },
        ],
      },
    ],
  },

  {
    type: "Letter",
    content:
      "Dear Kristin,\n\nI opened my most recent copy of Business Today this morning, and imagine my surprise when I saw a picture of you. Congratulations on being featured in an article in the magazine. And well done on being promoted to vice president at Pinewood, Inc. I remember back when we were colleagues at Ceti Heavy Industries, everyone there knew that you were destined for great things. And it appears as though you are reaching your potential.\n\nAccording to the article, you're going to be transferred to Omaha soon. As luck would have it, that is where I happen to work now. It would be great to have a chance to get together with you and to get caught up with each other. Why don't you e-mail me at daveb@tristan.com whenever you get a chance, and we can set up a mutually convenient time to meet? In addition, if you need to know anything about the city or need help finding a place to live, feel free to use me as a reference. I've been here for the past 6 years, so I'm quite familiar with the area.\n\nTalk to you soon.\n\nYours,\nDave Babson",
    questions: [
      {
        id: 165,
        questionText: "What does Mr. Babson mention about Business Today?",
        options: [
          {
            label: "A",
            text: "It has an article written by Kristin.",
            isCorrect: false,
          },
          {
            label: "B",
            text: "He reads the magazine every week.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "He has an annual subscription to it.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "There is an article about Kristin in it.",
            isCorrect: true,
          },
        ],
      },
      {
        id: 166,
        questionText: "Where does Kristin currently work?",
        options: [
          { label: "A", text: "At Ceti Heavy Industries", isCorrect: false },
          { label: "B", text: "At Pinewood, Inc.", isCorrect: true },
          { label: "C", text: "At Business Today", isCorrect: false },
          { label: "D", text: "At the Tristan Corporation", isCorrect: false },
        ],
      },
      {
        id: 167,
        questionText: "What is indicated about Mr. Babson?",
        options: [
          {
            label: "A",
            text: "He currently resides in Omaha.",
            isCorrect: true,
          },
          {
            label: "B",
            text: "He used to work at Pinewood, Inc.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "He works at a real estate agency.",
            isCorrect: false,
          },
          { label: "D", text: "He recently met Kristin.", isCorrect: false },
        ],
      },
    ],
  },

  {
    type: "Online message chain",
    content:
      "Cash, Leona [1:30 P.M.]: The group from Toronto is landing at the airport in a couple of hours. Is everything ready for the inspection of the facility they're going on tomorrow?\nBergeron, Neil [1:33 P.M.]: I've done everything you asked of me.\nAlderson, John [1:35 P.M.]: Same here. I'll also be ready to show them around the factory tomorrow morning.\nCash, Leona [1:38 P.M.]: That's good news. Which one of you two is planning to pick them up at the airport and take them to their hotel?\nAlderson, John [1:39 P.M.]: I wasn't aware you wanted us to do that.\nBergeron, Neil [1:40 P.M.]: Me neither. I thought you told us last week that you and Harold were going to do that.\nCash, Leona [1:42 P.M.]: Oh... I guess I forgot to tell you about the change in plans. I've got to meet with the VP of sales this afternoon, and Harold left for Costa Rica this morning. Are either of you available?\nBergeron, Neil [1:45 P.M.]: I'm scheduled to meet Irene Chang at 4:00. But I suppose I could ask her to come here another day.\nAlderson, John [1:48 P.M.]: Don't do that, Neil. I can go there and meet them. I've spoken with Claude Messier several times, so it will be nice to get a chance to see him in person. Can you send me their flight info, Leona?\nCash, Leona [1:50 P.M.]: Check your e-mail in two minutes. Thanks, John. I owe you one.",
    questions: [
      {
        id: 168,
        questionText: "What is the online message chain mainly about?",
        options: [
          {
            label: "A",
            text: "A plane trip that will be taken soon",
            isCorrect: false,
          },
          {
            label: "B",
            text: "The schedule for the next day's events",
            isCorrect: false,
          },
          {
            label: "C",
            text: "Preparations for the arrival of some visitors",
            isCorrect: true,
          },
          {
            label: "D",
            text: "The meetings each person will attend",
            isCorrect: false,
          },
        ],
      },
      {
        id: 169,
        questionText:
          'At 1:35 P.M., what does Mr. Alderson mean when he writes, "Same here"?',
        options: [
          {
            label: "A",
            text: "He agrees with Mr. Bergeron's opinion.",
            isCorrect: false,
          },
          {
            label: "B",
            text: "He is looking forward to meeting the clients.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "He did everything he was supposed to.",
            isCorrect: true,
          },
          {
            label: "D",
            text: "He is presently with Mr. Bergeron.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 170,
        questionText: "What is suggested about Mr. Messier?",
        options: [
          {
            label: "A",
            text: "He is coming in from Toronto.",
            isCorrect: true,
          },
          {
            label: "B",
            text: "He is good friends with Mr. Alderson.",
            isCorrect: false,
          },
          {
            label: "C",
            text: "He is going to Costa Rica soon.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "He is meeting Ms. Cash tomorrow morning.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 171,
        questionText: "What will Mr. Alderson probably do next?",
        options: [
          { label: "A", text: "Inspect a factory", isCorrect: false },
          { label: "B", text: "Go to the airport", isCorrect: false },
          { label: "C", text: "Check his e-mail", isCorrect: true },
          { label: "D", text: "Talk to Mr. Bergeron", isCorrect: false },
        ],
      },
    ],
  },

  {
    title: "Literacy Awareness Month to Conclude Soon",
    type: "Article",
    content:
      "Literacy Awareness Month is about to come to a close. Before it reaches its end, we would like to salute all of the members of the community who are making a difference to our children. We at the Reading Club of Kent (RCK) have been battling illiteracy among impoverished children by hosting daily events that encourage both children and their parents to read every day. This year's program has been a big success thanks to the hard work of our volunteers. — [1] —\n\nKnowing that reading is the key to education and that education is fundamental to staying out of poverty, the RCK has been hosting reading sessions at the Kent Public Library. — [2] — Elementary schoolchildren throughout the city have been coming to read and to listen to local athletes, singers, actors, and other celebrities read their favorite stories aloud. A combined total of more than 2,500 children have attended these events. — [3] —\n\nThe RCK was established by Joseph Stack and his family. The Stack family resettled in Kent in 1892 and was disturbed by the number of children who were unable to read. They therefore vowed to fight illiteracy in Kent and the surrounding area. — [4] — Since then, the RCK has donated more than 20,000 books to children living in poverty and has held special events such as this one on an annual basis.",
    questions: [
      {
        id: 172,
        questionText: "Where does the article most likely appear?",
        options: [
          { label: "A", text: "In a weekly newsletter", isCorrect: true },
          { label: "B", text: "In a history book", isCorrect: false },
          { label: "C", text: "In a national newspaper", isCorrect: false },
          { label: "D", text: "In a recruiting pamphlet", isCorrect: false },
        ],
      },
      {
        id: 173,
        questionText:
          "What has been happening during Literacy Awareness Month?",
        options: [
          {
            label: "A",
            text: "Free books have been given to poor individuals.",
            isCorrect: false,
          },
          {
            label: "B",
            text: "Famous people have read books to children.",
            isCorrect: true,
          },
          {
            label: "C",
            text: "Reading classes for adults have been held.",
            isCorrect: false,
          },
          {
            label: "D",
            text: "Fundraisers have been held to help buy books.",
            isCorrect: false,
          },
        ],
      },
      {
        id: 174,
        questionText: "Who is Joseph Stack?",
        options: [
          {
            label: "A",
            text: "The founder of the city of Kent",
            isCorrect: false,
          },
          {
            label: "B",
            text: "A Literacy Awareness Month volunteer",
            isCorrect: false,
          },
          {
            label: "C",
            text: "An original member of the RCK",
            isCorrect: true,
          },
          {
            label: "D",
            text: "A worker at Kent Public Library",
            isCorrect: false,
          },
        ],
      },
      {
        id: 175,
        questionText:
          'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "More than 220 people have donated their time and effort to helping others learn to read this month."',
        options: [
          { label: "A", text: "[1]", isCorrect: true },
          { label: "B", text: "[2]", isCorrect: false },
          { label: "C", text: "[3]", isCorrect: false },
          { label: "D", text: "[4]", isCorrect: false },
        ],
      },
    ],
  },
];
