import { TextCompletionPassage } from "../types";

export const B2_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "b2-1",
    title: "Project Update - Email",
    level: "B2",
    content:
      "To: Project Team\nFrom: Project Manager\nSubject: Phase 2 Timeline\n\nI am writing to provide an update on the second phase of our software development project. Despite initial delays, we have managed to {{1}} up with our original schedule. The development team has been working overtime to ensure all features are implemented by the deadline.\n\nHowever, we are currently facing a minor issue with the database integration. We may need to {{2}} additional resources to resolve this bottleneck. I have scheduled a meeting for tomorrow to discuss our options. It is crucial that we maintain our current {{3}} to launch on time. Your continued dedication is highly {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "catch", isCorrect: true },
          { option: "run", isCorrect: false },
          { option: "take", isCorrect: false },
          { option: "look", isCorrect: false },
        ],
        explanationVi:
          "'Catch up' nghĩa là đạt đến tiêu chuẩn hoặc thời gian mong đợi. Trong email về công việc, nó đề cập đến việc bắt kịp tiến độ.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "allocate", isCorrect: true },
          { option: "relocate", isCorrect: false },
          { option: "locate", isCorrect: false },
          { option: "dislocate", isCorrect: false },
        ],
        explanationVi: "'Allocate' resources means to assign them.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "momentum", isCorrect: true },
          { option: "moment", isCorrect: false },
          { option: "movement", isCorrect: false },
          { option: "monument", isCorrect: false },
        ],
        explanationVi: "'Momentum' refers to the strength or force gained.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "appreciated", isCorrect: true },
          { option: "depreciated", isCorrect: false },
          { option: "estimated", isCorrect: false },
          { option: "calculated", isCorrect: false },
        ],
        explanationVi: "Dedication is 'appreciated'.",
      },
    ],
  },
  {
    id: "b2-2",
    title: "Conference Invitation - Letter",
    level: "B2",
    content:
      "Dear Dr. Aris,\n\nOn behalf of the organizing committee, it is my pleasure to invite you to speak at the Annual Global Innovation Conference. We have followed your research on renewable energy with great interest and believe your insights would be invaluable to our {{1}}.\n\nThe conference will be held in Geneva from October 12th to 14th. We would be honored if you could deliver the keynote address on the opening day. We will, of course, cover all your travel and accommodation {{2}}. Please let us know if you are available to {{3}} this invitation. We look forward to your positive {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "attendees", isCorrect: true },
          { option: "attendants", isCorrect: false },
          { option: "attendance", isCorrect: false },
          { option: "attention", isCorrect: false },
        ],
        explanationVi: "People giving/listening to speeches are 'attendees'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "expenses", isCorrect: true },
          { option: "prices", isCorrect: false },
          { option: "charges", isCorrect: false },
          { option: "fees", isCorrect: false },
        ],
        explanationVi: "Travel 'expenses' are costs incurred.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "accept", isCorrect: true },
          { option: "except", isCorrect: false },
          { option: "expect", isCorrect: false },
          { option: "inspect", isCorrect: false },
        ],
        explanationVi: "'Accept' an invitation.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "response", isCorrect: true },
          { option: "respond", isCorrect: false },
          { option: "responsible", isCorrect: false },
          { option: "responsibility", isCorrect: false },
        ],
        explanationVi: "Waiting for a 'response'.",
      },
    ],
  },
  {
    id: "b2-3",
    title: "Recommendation Letter",
    level: "B2",
    content:
      "To Whom It May Concern,\n\nI am writing to highly recommend Ms. Sarah Jenkins for the position of Senior Analyst. Sarah has been a vital part of our team for the past five years. Her ability to analyze complex data sets and present them in an understandable manner is truly {{1}}.\n\nDuring her tenure, she spearheaded several initiatives that resulted in a 15% increase in operational efficiency. She is not only technically proficient but also a fantastic team player who always maintains a positive {{2}}. I am confident she will be a significant {{3}} to your organization. I wish her all the best in her future {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "exceptional", isCorrect: true },
          { option: "exception", isCorrect: false },
          { option: "except", isCorrect: false },
          { option: "expected", isCorrect: false },
        ],
        explanationVi: "'Exceptional' means unusually good.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "attitude", isCorrect: true },
          { option: "altitude", isCorrect: false },
          { option: "aptitude", isCorrect: false },
          { option: "amplitude", isCorrect: false },
        ],
        explanationVi: "Positive 'attitude'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "asset", isCorrect: true },
          { option: "access", isCorrect: false },
          { option: "aspect", isCorrect: false },
          { option: "assess", isCorrect: false },
        ],
        explanationVi: "A valuable 'asset' (person/thing).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "endeavors", isCorrect: true },
          { option: "endurance", isCorrect: false },
          { option: "endorsements", isCorrect: false },
          { option: "enforcements", isCorrect: false },
        ],
        explanationVi: "Future 'endeavors' (attempts/efforts).",
      },
    ],
  },
  {
    id: "b2-4",
    title: "Policy Update - Memo",
    level: "B2",
    content:
      "To: All Employees\nSubject: Update to Remote Work Policy\n\nEffective immediately, the company is updating its remote work policy to ensure better collaboration and data security. While we continue to support flexible arrangements, all employees are now required to be in the office at least three days a week. This change is intended to {{1}} team cohesion and facilitate spontaneous interactions.\n\nAdditionally, all remote access to company servers must be done through our secure VPN. Failure to {{2}} with these security protocols may result in disciplinary action. We understand this requires an adjustment, and we appreciate your cooperation in {{3}} a productive and secure work environment. Please consult the HR portal for full {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "foster", isCorrect: true },
          { option: "force", isCorrect: false },
          { option: "fight", isCorrect: false },
          { option: "faster", isCorrect: false },
        ],
        explanationVi: "'Foster' means to encourage development.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "comply", isCorrect: true },
          { option: "reply", isCorrect: false },
          { option: "apply", isCorrect: false },
          { option: "supply", isCorrect: false },
        ],
        explanationVi: "'Comply' with rules.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "maintaining", isCorrect: true },
          { option: "containing", isCorrect: false },
          { option: "obtaining", isCorrect: false },
          { option: "complaining", isCorrect: false },
        ],
        explanationVi: "'Maintaining' an environment.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "details", isCorrect: true },
          { option: "retail", isCorrect: false },
          { option: "entails", isCorrect: false },
          { option: "coctails", isCorrect: false },
        ],
        explanationVi: "Full 'details'.",
      },
    ],
  },
  {
    id: "b2-5",
    title: "Supply Chain Issue - Email",
    level: "B2",
    content:
      "To: Manufacturing Director\nSubject: Delay in Raw Materials\n\nI regret to inform you that our primary supplier, SteelCo, has declared force majeure due to the recent severe weather events. Consequently, the delivery of steel sheets scheduled for next Monday will be delayed by at least two weeks. This will keeping our production line at a {{1}}.\n\nI have already contacted our backup vendors to see if they can fill the gap, but their prices are significantly higher. We need to decide whether to absorb the extra cost or {{2}} production. I have attached a cost-benefit analysis for your review. Please let me know how you wish to {{3}}. This situation is {{4}} but manageable.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "standstill", isCorrect: true },
          { option: "standoff", isCorrect: false },
          { option: "standout", isCorrect: false },
          { option: "standard", isCorrect: false },
        ],
        explanationVi: "Production at a 'standstill' (stopped).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "halt", isCorrect: true },
          { option: "fault", isCorrect: false },
          { option: "salt", isCorrect: false },
          { option: "vault", isCorrect: false },
        ],
        explanationVi: "'Halt' (stop) production.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "proceed", isCorrect: true },
          { option: "precede", isCorrect: false },
          { option: "exceed", isCorrect: false },
          { option: "succeed", isCorrect: false },
        ],
        explanationVi: "How to 'proceed' (continue).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "unfortunate", isCorrect: true },
          { option: "fortunate", isCorrect: false },
          { option: "importunate", isCorrect: false },
          { option: "uncomfortable", isCorrect: false },
        ],
        explanationVi: "Situation is 'unfortunate'.",
      },
    ],
  },
  {
    id: "b2-6",
    title: "Contract Negotiation - Email",
    level: "B2",
    content:
      "Dear Mr. Henderson,\n\nThank you for prompt proposal regarding the renewal of our service contract. We have reviewed the terms and are generally pleased with the service provided over the past year. However, we have some reservations regarding the proposed price increase. Given the current market conditions, we feel a 10% hike is not {{1}}.\n\nWe would like to propose a more modest increase of 3%, coupled with a longer contract term of two years. We believe this arrangement provides stability for both parties. We are keen to continue our partnership and hope we can reach a mutually beneficial {{2}}. Please review our counter-offer and get back to us at your earliest {{3}}. We are open to further {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "justified", isCorrect: true },
          { option: "justice", isCorrect: false },
          { option: "justly", isCorrect: false },
          { option: "adjustment", isCorrect: false },
        ],
        explanationVi: "Price increase is not 'justified' (reasonable).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "agreement", isCorrect: true },
          { option: "argument", isCorrect: false },
          { option: "pavement", isCorrect: false },
          { option: "document", isCorrect: false },
        ],
        explanationVi: "Reach an 'agreement'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "convenience", isCorrect: true },
          { option: "conveniency", isCorrect: false },
          { option: "confident", isCorrect: false },
          { option: "conference", isCorrect: false },
        ],
        explanationVi: "At your earliest 'convenience'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "discussion", isCorrect: true },
          { option: "percussion", isCorrect: false },
          { option: "concussion", isCorrect: false },
          { option: "repercussion", isCorrect: false },
        ],
        explanationVi: "Open to 'discussion'.",
      },
    ],
  },
  {
    id: "b2-7",
    title: "Performance Review - Summary",
    level: "B2",
    content:
      "Employee: Mark Davis\nReview Period: Jan - Dec\n\nMark has shown exceptional growth this year. He consistently exceeds his sales targets and has built strong relationships with key clients. His ability to negotiate difficult contracts is particularly {{1}}. However, there is room for improvement in his administrative tasks.\n\nMark often submits his weekly reports late, which causes delays for the finance team. He needs to improve his time management skills to ensure all paperwork is completed {{2}}. We have agreed on a plan to address this issue. Overall, Mark is a valuable member of the team and has great {{3}} for leadership roles in the future. We will review his progress again in three {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "impressive", isCorrect: true },
          { option: "impression", isCorrect: false },
          { option: "impressed", isCorrect: false },
          { option: "impress", isCorrect: false },
        ],
        explanationVi: "Ability is 'impressive'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "punctually", isCorrect: true },
          { option: "puntually", isCorrect: false },
          { option: "punctual", isCorrect: false },
          { option: "punctuation", isCorrect: false },
        ],
        explanationVi: "Completed 'punctually' (on time).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "potential", isCorrect: true },
          { option: "potent", isCorrect: false },
          { option: "portion", isCorrect: false },
          { option: "potion", isCorrect: false },
        ],
        explanationVi: "Great 'potential'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "months", isCorrect: true },
          { option: "mouths", isCorrect: false },
          { option: "myths", isCorrect: false },
          { option: "maths", isCorrect: false },
        ],
        explanationVi: "In three 'months'.",
      },
    ],
  },
  {
    id: "b2-8",
    title: "IT System Upgrade - Notice",
    level: "B2",
    content:
      "Attention All Staff,\n\nPlease be advised that the IT department will be performing a major system upgrade this weekend. The purpose of this upgrade is to enhance our cybersecurity measures and improve server speed. Consequently, all network services, including email and file access, will be {{1}} from Saturday at 8:00 PM until Sunday at 12:00 PM.\n\nWe strictly insure you to save all your work and log off before leaving on Friday. Remote access will also be disabled during this period. We apologize for any inconvenience this may cause and appreciate your patience as we work to {{2}} our infrastructure. Should you experience any issues on Monday morning, please submit a ticket to the Help Desk {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "unavailable", isCorrect: true },
          { option: "avoidable", isCorrect: false },
          { option: "available", isCorrect: false },
          { option: "valuable", isCorrect: false },
        ],
        explanationVi: "Services will be 'unavailable'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "improve", isCorrect: true },
          { option: "prove", isCorrect: false },
          { option: "approve", isCorrect: false },
          { option: "move", isCorrect: false },
        ],
        explanationVi: "'Improve' infrastructure.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "immediately", isCorrect: true },
          { option: "hourly", isCorrect: false },
          { option: "lately", isCorrect: false },
          { option: "friendly", isCorrect: false },
        ],
        explanationVi: "Submit 'immediately'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "understanding", isCorrect: true },
          { option: "standing", isCorrect: false },
          { option: "understating", isCorrect: false },
          { option: "standardizing", isCorrect: false },
        ],
        explanationVi: "Thank you for 'understanding'.",
      },
    ],
  },
  {
    id: "b2-9",
    title: "Marketing Strategy - Email",
    level: "B2",
    content:
      "To: Marketing Team\nSubject: Q3 Strategy Shift\n\nAfter analyzing the data from Q2, it is clear that our current approach is not reaching our target demographic effectively. Our engagement rates on traditional media are dropping, while our digital channels are showing promise. Therefore, we will be shifting our focus to a digital-first {{1}}.\n\nWe need to reallocate our budget to prioritize social media ads and influencer partnerships. I want everyone to brainstorm new ideas for viral content. We need to be more agile and responsive to current {{2}}. Please prepare a brief presentation of your ideas for the meeting on Thursday. This is a critical time for our brand, and we need to {{3}} quickly to stay competitive. Expect some late nights as we {{4}} this pivot.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "strategy", isCorrect: true },
          { option: "tragedy", isCorrect: false },
          { option: "category", isCorrect: false },
          { option: "allergy", isCorrect: false },
        ],
        explanationVi: "Digital-first 'strategy'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "trends", isCorrect: true },
          { option: "ends", isCorrect: false },
          { option: "bends", isCorrect: false },
          { option: "friends", isCorrect: false },
        ],
        explanationVi: "Responsive to 'trends'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "adapt", isCorrect: true },
          { option: "adopt", isCorrect: false },
          { option: "adept", isCorrect: false },
          { option: "accept", isCorrect: false },
        ],
        explanationVi: "'Adapt' to changes.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "execute", isCorrect: true },
          { option: "persecute", isCorrect: false },
          { option: "prosecute", isCorrect: false },
          { option: "electrocute", isCorrect: false },
        ],
        explanationVi: "'Execute' (carry out) a plan.",
      },
    ],
  },
  {
    id: "b2-10",
    title: "Internship Program - Announcement",
    level: "B2",
    content:
      "We are excited to announce the launch of our Summer Internship Program. We are looking for motivated university students who are eager to gain practical experience in the finance industry. Selected interns will rotate through different departments, including accounting, investment, and risk management. This rotation ensures a {{1}} understanding of our operations.\n\nEach intern will be paired with a mentor who will provide guidance and feedback. At the end of the program, interns will present a project to the executive board. This is a unique opportunity to build professional networks and develop essential {{2}}. Successful candidates may be offered a full-time position upon {{3}}. Applications are now open and will close on March 31st. Don't miss this chance to jumpstart your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "comprehensive", isCorrect: true },
          { option: "apprehensive", isCorrect: false },
          { option: "comprehensible", isCorrect: false },
          { option: "expensive", isCorrect: false },
        ],
        explanationVi: "'Comprehensive' (complete) understanding.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "skills", isCorrect: true },
          { option: "skulls", isCorrect: false },
          { option: "spills", isCorrect: false },
          { option: "stills", isCorrect: false },
        ],
        explanationVi: "Develop 'skills'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "graduation", isCorrect: true },
          { option: "situation", isCorrect: false },
          { option: "location", isCorrect: false },
          { option: "creation", isCorrect: false },
        ],
        explanationVi: "Upon 'graduation'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "career", isCorrect: true },
          { option: "carrier", isCorrect: false },
          { option: "barrier", isCorrect: false },
          { option: "carer", isCorrect: false },
        ],
        explanationVi: "Jumpstart your 'career'.",
      },
    ],
  },
  {
    id: "b2-11",
    title: "Product Recall - Press Release",
    level: "B2",
    content:
      "Safety is our number one priority. We have recently discovered a potential fault in the power cord of our 'SuperBlend 2000' blender. In rare cases, the cord may overheat, posing a fire risk. Although no injuries have been reported, we are voluntarily {{1}} all units manufactured between January and March of this year.\n\nCustomers who purchased this product should stop using it immediately and return it to the point of purchase for a full refund or a free replacement. We deeply regret any inconvenience this may cause and are committed to ensuring the highest standards of quality. We have revised our manufacturing process to prevent this from happening {{2}}. Please visit our website for more information on how to identify affected {{3}}. Your safety is {{4}} to us.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "recalling", isCorrect: true },
          { option: "calling", isCorrect: false },
          { option: "installing", isCorrect: false },
          { option: "stalling", isCorrect: false },
        ],
        explanationVi: "'Recalling' a product.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "again", isCorrect: true },
          { option: "then", isCorrect: false },
          { option: "when", isCorrect: false },
          { option: "soon", isCorrect: false },
        ],
        explanationVi: "Prevent happening 'again'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "units", isCorrect: true },
          { option: "unites", isCorrect: false },
          { option: "unties", isCorrect: false },
          { option: "unities", isCorrect: false },
        ],
        explanationVi: "Affected 'units' (items).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "paramount", isCorrect: true },
          { option: "amount", isCorrect: false },
          { option: "surmount", isCorrect: false },
          { option: "mountain", isCorrect: false },
        ],
        explanationVi: "'Paramount' means most important.",
      },
    ],
  },
  {
    id: "b2-12",
    title: "Office Relocation - Memo",
    level: "B2",
    content:
      "As our company continues to expand, we have outgrown our current office space. I am pleased to announce that we will be moving to a new, larger facility in the Tech Park district. The move is scheduled to take place over the last weekend of next month. The new office offers modern amenities, including a gym and a cafeteria, which we hope will enhance employee {{1}}.\n\nEach department will be responsible for packing their own files and personal items. Professional movers will handle furniture and IT equipment. Detailed instructions and packing materials will be distributed next week. We are excited about this new chapter and believe the new workspace will foster greater {{2}} and creativity. We appreciate your assistance in making this transition as {{3}} as possible. Please direct any questions to the Office {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "well-being", isCorrect: true },
          { option: "being", isCorrect: false },
          { option: "human-being", isCorrect: false },
          { option: "behaving", isCorrect: false },
        ],
        explanationVi: "Employee 'well-being'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "collaboration", isCorrect: true },
          { option: "elaboration", isCorrect: false },
          { option: "decoration", isCorrect: false },
          { option: "separation", isCorrect: false },
        ],
        explanationVi: "Foster 'collaboration'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "smooth", isCorrect: true },
          { option: "rough", isCorrect: false },
          { option: "hard", isCorrect: false },
          { option: "fast", isCorrect: false },
        ],
        explanationVi: "'Smooth' transition.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Manager", isCorrect: true },
          { option: "Stranger", isCorrect: false },
          { option: "Danger", isCorrect: false },
          { option: "Passenger", isCorrect: false },
        ],
        explanationVi: "Office 'Manager'.",
      },
    ],
  },
  {
    id: "b2-13",
    title: "Training Seminar - Feedback",
    level: "B2",
    content:
      "To: HR Department\nFrom: Sales Team Lead\nSubject: Feedback on 'Negotiation Skills' Seminar\n\nI attended the negotiation skills seminar yesterday and wanted to share my thoughts. Overall, the content was very relevant and the instructor was knowledgeable. The role-playing exercises were particularly useful for practicing real-world scenarios. I believe my team will benefit greatly from applying these {{1}}.\n\nHowever, I felt the session was a bit rushed. There was not enough time for Q&A at the end. In the future, it might be better to extend the seminar to a full day or split it into two half-day sessions. This would allow for more in-depth {{2}}. Despite this minor issue, I would highly recommend this training to other departments. Thank you for {{3}} this opportunity. It was a well-spent {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "techniques", isCorrect: true },
          { option: "technicians", isCorrect: false },
          { option: "technologies", isCorrect: false },
          { option: "technicalities", isCorrect: false },
        ],
        explanationVi: "Applying 'techniques'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "discussion", isCorrect: true },
          { option: "concussion", isCorrect: false },
          { option: "percussion", isCorrect: false },
          { option: "repo", isCorrect: false },
        ],
        explanationVi: "In-depth 'discussion'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "organizing", isCorrect: true },
          { option: "agonizing", isCorrect: false },
          { option: "recognizing", isCorrect: false },
          { option: "disorganizing", isCorrect: false },
        ],
        explanationVi: "'Organizing' the training.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "afternoon", isCorrect: true },
          { option: "moon", isCorrect: false },
          { option: "soon", isCorrect: false },
          { option: "tune", isCorrect: false },
        ],
        explanationVi: "Well-spent 'afternoon' (time).",
      },
    ],
  },
  {
    id: "b2-14",
    title: "Budget Cuts - Memo",
    level: "B2",
    content:
      "To: Department Heads\nSubject: Fiscal Year Budget Adjustments\n\nDue to the economic downturn, the company is implementing cost-saving measures across all departments. We have reviewed our current spending and identified areas where we can reduce costs without compromising operational quality. Effective immediately, the travel and entertainment budget will be reduced by 20%. Please prioritize virtual meetings over physical travel whenever {{1}}.\n\nFurthermore, all non-essential hiring is frozen until further notice. We understand these measures are difficult, but they are necessary to ensure the company's financial health. We encourage you to look for innovative ways to increase efficiency with existing resources. We will review the situation again next quarter. Thank you for your continued {{2}} in these challenging times. We are confident we can {{3}} this storm together. Your leadership is {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "possible", isCorrect: true },
          { option: "impossible", isCorrect: false },
          { option: "probable", isCorrect: false },
          { option: "capable", isCorrect: false },
        ],
        explanationVi: "Whenever 'possible'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "support", isCorrect: true },
          { option: "report", isCorrect: false },
          { option: "transport", isCorrect: false },
          { option: "export", isCorrect: false },
        ],
        explanationVi: "Continued 'support'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "weather", isCorrect: true },
          { option: "whether", isCorrect: false },
          { option: "winter", isCorrect: false },
          { option: "wither", isCorrect: false },
        ],
        explanationVi: "'Weather' the storm (survive).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "vital", isCorrect: true },
          { option: "viral", isCorrect: false },
          { option: "vocal", isCorrect: false },
          { option: "final", isCorrect: false },
        ],
        explanationVi: "'Vital' means essential.",
      },
    ],
  },
  {
    id: "b2-15",
    title: "Client Acquisition - Email",
    level: "B2",
    content:
      "To: Sales Team\nSubject: New Client: Apex Corp\n\nI am thrilled to announce that we have successfully secured a contract with Apex Corp, a leader in the automotive industry. This wins represents a major milestone for our company and validates our hard work over the past six months. The negotiation process was lengthy, but our persistence and tailored proposal ultimately won them {{1}}.\n\nThe onboarding process will begin next week. We need to assemble a dedicated team to manage this account and ensure we deliver on our promises. This client has high expectations, so attention to detail is paramount. Let's maintain this momentum and target other key players in the sector. Congratulations to everyone involved in this {{2}}. Drinks are on me this {{3}}! Let's aim even {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "over", isCorrect: true },
          { option: "under", isCorrect: false },
          { option: "out", isCorrect: false },
          { option: "in", isCorrect: false },
        ],
        explanationVi: "Win someone 'over' (convince them).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "achievement", isCorrect: true },
          { option: "bereavement", isCorrect: false },
          { option: "pavement", isCorrect: false },
          { option: "movement", isCorrect: false },
        ],
        explanationVi: "Involved in this 'achievement'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "Friday", isCorrect: true },
          { option: "Year", isCorrect: false },
          { option: "Morning", isCorrect: false },
          { option: "Working", isCorrect: false },
        ],
        explanationVi: "On me this 'Friday'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "higher", isCorrect: true },
          { option: "lower", isCorrect: false },
          { option: "wider", isCorrect: false },
          { option: "deeper", isCorrect: false },
        ],
        explanationVi: "Aim 'higher'.",
      },
    ],
  },
  {
    id: "b2-16",
    title: "Software Launch - Memo",
    level: "B2",
    content:
      "To: All Departments\nSubject: Launch of 'Connect v2.0'\n\nWe are proud to announce that the beta testing for 'Connect v2.0' has been successfully completed. The feedback from our test group has been overwhelmingly positive, citing improved interface speed and user-friendliness. We are now ready to {{1}} the software to the entire organization.\n\nThe official rollout will begin on Monday. Please ensure your devices are connected to the network to receive the automatic update. A series of training webinars will be hosted next week to demonstrate the new {{2}}. We encourage everyone to attend to maximize the benefits of this tool. This launch marks a significant {{3}} in our digital transformation. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "deploy", isCorrect: true },
          { option: "destroy", isCorrect: false },
          { option: "employ", isCorrect: false },
          { option: "enjoy", isCorrect: false },
        ],
        explanationVi: "'Deploy' software.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "features", isCorrect: true },
          { option: "creatures", isCorrect: false },
          { option: "futures", isCorrect: false },
          { option: "natures", isCorrect: false },
        ],
        explanationVi: "New 'features'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "milestone", isCorrect: true },
          { option: "gravestone", isCorrect: false },
          { option: "cornerstone", isCorrect: false },
          { option: "rhinestone", isCorrect: false },
        ],
        explanationVi: "Significant 'milestone'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "patience", isCorrect: true },
          { option: "patients", isCorrect: false },
          { option: "patents", isCorrect: false },
          { option: "parents", isCorrect: false },
        ],
        explanationVi: "Thank you for your 'patience'.",
      },
    ],
  },
  {
    id: "b2-17",
    title: "Retirement Party - Invitation",
    level: "B2",
    content:
      "Please join us in celebrating the career of Mr. Robert Thorne, our Director of Operations, who is retiring after 35 years of dedicated service. Robert has been instrumental in the growth of this company, guiding us through numerous challenges and successes. His leadership and wisdom will be greatly {{1}}.\n\nA farewell reception will be held in the main atrium on Friday at 4:00 PM. Light refreshments and hors d'oeuvres will be served. There will be a short presentation and an opportunity for colleagues to share their {{2}}. We have also organized a group gift; if you wish to contribute, please see Linda at the front desk. Let's give Robert the {{3}} he deserves. He is a true {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "missed", isCorrect: true },
          { option: "hissed", isCorrect: false },
          { option: "kissed", isCorrect: false },
          { option: "dismissed", isCorrect: false },
        ],
        explanationVi: "Will be greatly 'missed'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "memories", isCorrect: true },
          { option: "stories", isCorrect: false },
          { option: "salaries", isCorrect: false },
          { option: "calories", isCorrect: false },
        ],
        explanationVi: "Share their 'memories'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "send-off", isCorrect: true },
          { option: "take-off", isCorrect: false },
          { option: "show-off", isCorrect: false },
          { option: "write-off", isCorrect: false },
        ],
        explanationVi: "Give a 'send-off' (farewell).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "legend", isCorrect: true },
          { option: "myth", isCorrect: false },
          { option: "fable", isCorrect: false },
          { option: "story", isCorrect: false },
        ],
        explanationVi: "He is a 'legend'.",
      },
    ],
  },
  {
    id: "b2-18",
    title: "Business Partnership - Press Release",
    level: "B2",
    content:
      "TechNova and DataCorp are pleased to announce a strategic partnership aimed at revolutionizing cloud computing solutions for small businesses. By combining TechNova's innovative software with DataCorp's robust infrastructure, we aim to deliver a product that is both powerful and affordable. This collaboration brings together two industry leaders with a shared {{1}} for excellence.\n\nThe joint venture will focus on developing scalable applications that can grow with our clients' needs. We expect to launch our first suite of products in Q4. This partnership represents a significant step forward in our mission to democratize access to advanced technology. We are excited about the {{2}} this alliance creates. Together, we can achieve more than we could {{3}}. The future looks {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "vision", isCorrect: true },
          { option: "visual", isCorrect: false },
          { option: "version", isCorrect: false },
          { option: "division", isCorrect: false },
        ],
        explanationVi: "Shared 'vision'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "synergies", isCorrect: true },
          { option: "energies", isCorrect: false },
          { option: "allergies", isCorrect: false },
          { option: "liturgies", isCorrect: false },
        ],
        explanationVi: "Creat 'synergies' (cooperation benefit).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "alone", isCorrect: true },
          { option: "lonely", isCorrect: false },
          { option: "along", isCorrect: false },
          { option: "aloof", isCorrect: false },
        ],
        explanationVi: "More than we could 'alone'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "bright", isCorrect: true },
          { option: "dark", isCorrect: false },
          { option: "light", isCorrect: false },
          { option: "night", isCorrect: false },
        ],
        explanationVi: "Future looks 'bright'.",
      },
    ],
  },
  {
    id: "b2-19",
    title: "Quarterly Earnings - Report",
    level: "B2",
    content:
      "We are pleased to report that Q2 revenue has exceeded expectations, growing by 12% compared to the same period last year. This strong performance is driven by robust sales in our consumer electronics division and successful cost-cutting measures. Our net profit margin has also improved, reflecting greater operational {{1}}.\n\nDespite global economic uncertainty, we have managed to expand our market share. We are optimistic about the remainder of the year and are upgrading our annual guidance. We will also be declaring a dividend of $0.50 per share, payable to shareholders of record as of August 30. We remain committed to delivering value to our {{2}}. Thank you for your {{3}}. We are on the right {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "efficiency", isCorrect: true },
          { option: "deficiency", isCorrect: false },
          { option: "proficiency", isCorrect: false },
          { option: "sufficiency", isCorrect: false },
        ],
        explanationVi: "Operational 'efficiency'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "investors", isCorrect: true },
          { option: "inventors", isCorrect: false },
          { option: "investigators", isCorrect: false },
          { option: "invaders", isCorrect: false },
        ],
        explanationVi: "Value to 'investors'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "trust", isCorrect: true },
          { option: "thrust", isCorrect: false },
          { option: "crust", isCorrect: false },
          { option: "rust", isCorrect: false },
        ],
        explanationVi: "Thank you for your 'trust'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "track", isCorrect: true },
          { option: "truck", isCorrect: false },
          { option: "trick", isCorrect: false },
          { option: "crack", isCorrect: false },
        ],
        explanationVi: "On the right 'track'.",
      },
    ],
  },
  {
    id: "b2-20",
    title: "Security Update - Email",
    level: "B2",
    content:
      "To: Services\nSubject: Important Security Notification\n\nWe recently detected unauthorized activity on our network. Upon investigation, we found that a third party may have accessed some user data, including email addresses and encrypted passwords. We have taken immediate steps to secure our systems and launched a full forensic {{1}}.\n\nAs a precaution, we are requiring all users to reset their passwords upon their next login. We also recommend enabling two-factor authentication for added security. We deeply apologize for this incident and are working tirelessly to prevent a recurrence. We take data protection very {{2}}. Please refer to our FAQ page for more {{3}}. Your security is our {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "investigation", isCorrect: true },
          { option: "instigation", isCorrect: false },
          { option: "navigation", isCorrect: false },
          { option: "irrigation", isCorrect: false },
        ],
        explanationVi: "Forensic 'investigation'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "seriously", isCorrect: true },
          { option: "funny", isCorrect: false },
          { option: "slowly", isCorrect: false },
          { option: "lightly", isCorrect: false },
        ],
        explanationVi: "Take it 'seriously'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "information", isCorrect: true },
          { option: "confirmation", isCorrect: false },
          { option: "affirmation", isCorrect: false },
          { option: "transformation", isCorrect: false },
        ],
        explanationVi: "More 'information'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "responsibility", isCorrect: true },
          { option: "liability", isCorrect: false },
          { option: "possibility", isCorrect: false },
          { option: "capability", isCorrect: false },
        ],
        explanationVi: "Our 'responsibility'.",
      },
    ],
  },
  {
    id: "b2-21",
    title: "Grand Opening - Invitation",
    level: "B2",
    content:
      "You are cordially invited to the Grand Opening of our new headquarters in downtown Chicago. This state-of-the-art facility reflects our commitment to innovation and sustainability. The building features open-plan workspaces, green energy systems, and collaborative zones designed to inspire {{1}}.\n\nThe ceremony will take place on November 10th at 10:00 AM, followed by a tour of the premises and a networking lunch. Local dignitaries and industry leaders will be in attendance. We would be honored by your {{2}} at this milestone event. Please RSVP by October 30th to secure your spot. We look forward to welcoming you to our new {{3}}. It is going to be {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "creativity", isCorrect: true },
          { option: "activity", isCorrect: false },
          { option: "passivity", isCorrect: false },
          { option: "productivity", isCorrect: false },
        ],
        explanationVi: "Inspire 'creativity'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "presence", isCorrect: true },
          { option: "present", isCorrect: false },
          { option: "presents", isCorrect: false },
          { option: "essence", isCorrect: false },
        ],
        explanationVi: "Honored by your 'presence'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "home", isCorrect: true },
          { option: "house", isCorrect: false },
          { option: "flat", isCorrect: false },
          { option: "room", isCorrect: false },
        ],
        explanationVi: "Our new 'home' (office).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "spectacular", isCorrect: true },
          { option: "spectator", isCorrect: false },
          { option: "secular", isCorrect: false },
          { option: "singular", isCorrect: false },
        ],
        explanationVi: "Going to be 'spectacular'.",
      },
    ],
  },
  {
    id: "b2-22",
    title: "Shipping Delay - Notice",
    level: "B2",
    content:
      "Dear Customer,\n\nWe are writing to inform you that your order #8842 is experiencing a slight delay in shipment. This is due to unexpected volume at our distribution center following our holiday sale. We are working extra shifts to process orders as quickly as possible and expect your package to be shipped within the next 48 {{1}}.\n\nWe understand that you are eager to receive your items and we apologize for the hold-up. As a gesture of goodwill, we are refunding your shipping costs. You will receive a separate email with the tracking number once your order is dispatched. Thank you for your continued {{2}}. We appreciate your {{3}}. We hope you enjoy your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hours", isCorrect: true },
          { option: "minutes", isCorrect: false },
          { option: "days", isCorrect: false },
          { option: "seconds", isCorrect: false },
        ],
        explanationVi: "Next 48 'hours'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "patience", isCorrect: true },
          { option: "impatience", isCorrect: false },
          { option: "patient", isCorrect: false },
          { option: "patents", isCorrect: false },
        ],
        explanationVi: "Thank you for 'patience'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "business", isCorrect: true },
          { option: "busyness", isCorrect: false },
          { option: "bus", isCorrect: false },
          { option: "boss", isCorrect: false },
        ],
        explanationVi: "Appreciate your 'business'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "purchase", isCorrect: true },
          { option: "sale", isCorrect: false },
          { option: "sell", isCorrect: false },
          { option: "pay", isCorrect: false },
        ],
        explanationVi: "Enjoy your 'purchase'.",
      },
    ],
  },
  {
    id: "b2-23",
    title: "Employee Survey - Memo",
    level: "B2",
    content:
      "To: All Staff\nSubject: Annual Engagement Survey\n\nYour opinion matters to us. We are launching our Annual Employee Engagement Survey to gather feedback on your work experience. The survey is anonymous and confidential, administered by a third-party firm. We want to hear your honest thoughts on company culture, management, and career development {{1}}.\n\nThe results of this survey will be used to identify areas for improvement and shape future HR policies. Last year, your feedback led to the introduction of flexible working hours. Please take 15 minutes to complete the survey by Friday. High participation is crucial for obtaining accurate data. Let's work together to make this a great place to {{2}}. We value your {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "opportunities", isCorrect: true },
          { option: "problems", isCorrect: false },
          { option: "tasks", isCorrect: false },
          { option: "jobs", isCorrect: false },
        ],
        explanationVi: "Career development 'opportunities'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "work", isCorrect: true },
          { option: "play", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "live", isCorrect: false },
        ],
        explanationVi: "Place to 'work'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "input", isCorrect: true },
          { option: "output", isCorrect: false },
          { option: "put", isCorrect: false },
          { option: "throughput", isCorrect: false },
        ],
        explanationVi: "Value your 'input'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "participation", isCorrect: true },
          { option: "anticipation", isCorrect: false },
          { option: "emancipation", isCorrect: false },
          { option: "constipation", isCorrect: false },
        ],
        explanationVi: "Thank you for 'participation'.",
      },
    ],
  },
  {
    id: "b2-24",
    title: "Sustainability - Newsletter",
    level: "B2",
    content:
      "GreenCorp is committed to reducing its environmental footprint. We are launching a new 'Zero Waste' initiative across all our campuses. Our goal is to divert 90% of our waste from landfills by 2025. To achieve this, we are introducing compost bins in all cafeterias and removing single-use plastics from our {{1}}.\n\nWe encourage all employees to bring reusable water bottles and coffee mugs. We will also be hosting workshops on recycling best practices. Small changes in our daily habits can make a big difference. We are proud to be a leader in corporate sustainability. Join us in protecting our {{2}}. Together, we can make a {{3}}. Every action {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "offices", isCorrect: true },
          { option: "officers", isCorrect: false },
          { option: "offers", isCorrect: false },
          { option: "offenses", isCorrect: false },
        ],
        explanationVi: "From our 'offices'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "planet", isCorrect: true },
          { option: "plant", isCorrect: false },
          { option: "plane", isCorrect: false },
          { option: "plan", isCorrect: false },
        ],
        explanationVi: "Protecting our 'planet'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "difference", isCorrect: true },
          { option: "different", isCorrect: false },
          { option: "differ", isCorrect: false },
          { option: "reference", isCorrect: false },
        ],
        explanationVi: "Make a 'difference'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "counts", isCorrect: true },
          { option: "computes", isCorrect: false },
          { option: "competes", isCorrect: false },
          { option: "completes", isCorrect: false },
        ],
        explanationVi: "Every action 'counts'.",
      },
    ],
  },
  {
    id: "b2-25",
    title: "Client Testimonial - Request",
    level: "B2",
    content:
      "Dear Ms. Davis,\n\nWe hope you have been satisfied with the consulting services provided by Stratford Solutions over the past year. We value our relationship with you and are constantly striving to improve. We are currently updating our website and marketing materials and would love to feature a testimonial from {{1}}.\n\nCould you spare a few minutes to write a brief quote about your experience working with us? Specifically, how our team helped you streamline your operations. Your endorsement would mean a lot to us and help prospective clients understand the value we bring. Thank you for considering our request. We look forward to our continued {{2}}. You are a valued {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Testimonial from 'you'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "partnership", isCorrect: true },
          { option: "ownership", isCorrect: false },
          { option: "worship", isCorrect: false },
          { option: "hardship", isCorrect: false },
        ],
        explanationVi: "Continued 'partnership'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "client", isCorrect: true },
          { option: "clinic", isCorrect: false },
          { option: "climate", isCorrect: false },
          { option: "climb", isCorrect: false },
        ],
        explanationVi: "Valued 'client'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "rewards", isCorrect: false },
          { option: "retards", isCorrect: false },
          { option: "records", isCorrect: false },
        ],
        explanationVi: "Best 'regards' (sign-off).",
      },
    ],
  },
  {
    id: "b2-26",
    title: "Merger Announcement - Internal",
    level: "B2",
    content:
      "To: All Employees\nSubject: Exciting News: Merger with Omicron Inc.\n\nWe are excited to announce that we have entered into a definitive agreement to merge with Omicron Inc., a leading competitor in our sector. This strategic move will create a powerhouse with a global footprint and an unmatched product portfolio. By combining our strengths, we will be better positioned to serve our customers and drive innovation.\n\nThe integration process will take approximately six months. We assure you that we are committed to transparency throughout this period. Town hall meetings will be held next week to address any questions or concerns. We believe this merger presents significant opportunities for professional growth. We are stronger {{1}}. Join us in this {{2}}. The future is {{3}}. Let's make history {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "together", isCorrect: true },
          { option: "apart", isCorrect: false },
          { option: "alone", isCorrect: false },
          { option: "broken", isCorrect: false },
        ],
        explanationVi: "Stronger 'together'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "journey", isCorrect: true },
          { option: "tourney", isCorrect: false },
          { option: "attorney", isCorrect: false },
          { option: "journal", isCorrect: false },
        ],
        explanationVi: "Join us in this 'journey'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "exciting", isCorrect: true },
          { option: "boring", isCorrect: false },
          { option: "scary", isCorrect: false },
          { option: "dark", isCorrect: false },
        ],
        explanationVi: "Future is 'exciting'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "today", isCorrect: true },
          { option: "tomorrow", isCorrect: false },
          { option: "yesterday", isCorrect: false },
          { option: "never", isCorrect: false },
        ],
        explanationVi: "Make history 'today'.",
      },
    ],
  },
  {
    id: "b2-27",
    title: "Leadership Workshop - Memo",
    level: "B2",
    content:
      "To: Senior Managers\nSubject: Mandatory Leadership Workshop\n\nEffective leadership is key to our organizational success. To support your development, HR has organized a two-day workshop focused on 'Leading in Times of Change'. The workshop will cover topics such as change management, conflict resolution, and emotional intelligence. Attendance is mandatory for all senior managers.\n\nThe sessions will be led by renowned industry experts. This is an investment in you and the future of our company. Please clear your schedules for February 15th and 16th. We expect you to apply the learnings to your daily interactions with your teams. We are committed to fostering a culture of continuous {{1}}. See you {{2}}. Prepare to be {{3}}. Lead with {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "learning", isCorrect: true },
          { option: "earning", isCorrect: false },
          { option: "yearning", isCorrect: false },
          { option: "burning", isCorrect: false },
        ],
        explanationVi: "Continuous 'learning'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "there", isCorrect: true },
          { option: "here", isCorrect: false },
          { option: "where", isCorrect: false },
          { option: "everywhere", isCorrect: false },
        ],
        explanationVi: "See you 'there'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "inspired", isCorrect: true },
          { option: "tired", isCorrect: false },
          { option: "fired", isCorrect: false },
          { option: "hired", isCorrect: false },
        ],
        explanationVi: "Prepare to be 'inspired'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "confidence", isCorrect: true },
          { option: "conference", isCorrect: false },
          { option: "incidence", isCorrect: false },
          { option: "residence", isCorrect: false },
        ],
        explanationVi: "Lead with 'confidence'.",
      },
    ],
  },
  {
    id: "b2-28",
    title: "Holiday Operations - Notice",
    level: "B2",
    content:
      "As the holiday season approaches, we would like to clarify our operating hours. The office will be closed from December 24th to January 1st. However, our customer support team will operate with a skeleton crew to handle urgent inquiries. Staff scheduled to work during this period will receive overtime pay and a bonus day off in {{1}}.\n\nPlease ensure that all pending projects are wrapped up or handed over before you leave. We want everyone to enjoy a stress-free break with their families. We thank you for your hard work throughout the year and wish you a happy holiday season. Rest up and come back {{2}}. We have big plans for {{3}}. Enjoy your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "lieu", isCorrect: true },
          { option: "view", isCorrect: false },
          { option: "few", isCorrect: false },
          { option: "due", isCorrect: false },
        ],
        explanationVi: "Day off in 'lieu' (instead).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "refreshed", isCorrect: true },
          { option: "depressed", isCorrect: false },
          { option: "stressed", isCorrect: false },
          { option: "obsessed", isCorrect: false },
        ],
        explanationVi: "Come back 'refreshed'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "next year", isCorrect: true },
          { option: "last year", isCorrect: false },
          { option: "yesterday", isCorrect: false },
          { option: "history", isCorrect: false },
        ],
        explanationVi: "Plans for 'next year'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "break", isCorrect: true },
          { option: "brake", isCorrect: false },
          { option: "beak", isCorrect: false },
          { option: "bake", isCorrect: false },
        ],
        explanationVi: "Enjoy your 'break'.",
      },
    ],
  },
  {
    id: "b2-29",
    title: "Vendor Review - Email",
    level: "B2",
    content:
      "To: Procurement Team\nSubject: Annual Vendor Performance Review\n\nIt is time for our annual review of key suppliers. Please prepare performance reports for all vendors with contracts exceeding $50k. We need to evaluate them based on delivery timeliness, quality of goods, and responsiveness to issues. This data is critical for our upcoming contract {{1}}.\n\nI have attached a template for the report. Please submit your drafts by next Friday. We will meet the following week to discuss which contracts to renew and which to renegotiate. Our goal is to optimize our supply chain and reduce costs. Let's be thorough in our {{2}}. Your input is {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "renewals", isCorrect: true },
          { option: "removals", isCorrect: false },
          { option: "refusals", isCorrect: false },
          { option: "rehearsals", isCorrect: false },
        ],
        explanationVi: "Contract 'renewals'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "analysis", isCorrect: true },
          { option: "paralysis", isCorrect: false },
          { option: "dialysis", isCorrect: false },
          { option: "catalysis", isCorrect: false },
        ],
        explanationVi: "Thorough in 'analysis'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "invaluable", isCorrect: true },
          { option: "useless", isCorrect: false },
          { option: "cheap", isCorrect: false },
          { option: "expensive", isCorrect: false },
        ],
        explanationVi: "Input is 'invaluable'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "efforts", isCorrect: true },
          { option: "effects", isCorrect: false },
          { option: "affects", isCorrect: false },
          { option: "defects", isCorrect: false },
        ],
        explanationVi: "Thank you for 'efforts'.",
      },
    ],
  },
  {
    id: "b2-30",
    title: "CEO Message - Year End",
    level: "B2",
    content:
      "Dear Team,\n\nAs we close the book on another year, I want to take a moment to reflect on our achievements. Despite the challenges we faced, we showed remarkable resilience and adaptability. We launched three new products, entered two new markets, and grew our revenue by 15%. This success is a testament to your hard work and {{1}}.\n\nLooking ahead, we have ambitious goals for the coming year. We will focus on innovation and customer experience. I am confident that if we continue to work together with passion and integrity, there is no limit to what we can achieve. Thank you for your commitment to our mission. I wish you and your families a wonderful new {{2}}. Let's make it our {{3}}. Be {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "dedication", isCorrect: true },
          { option: "medication", isCorrect: false },
          { option: "vacation", isCorrect: false },
          { option: "indication", isCorrect: false },
        ],
        explanationVi: "Hard work and 'dedication'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "year", isCorrect: true },
          { option: "ear", isCorrect: false },
          { option: "fear", isCorrect: false },
          { option: "tear", isCorrect: false },
        ],
        explanationVi: "Wonderful new 'year'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "best", isCorrect: true },
          { option: "worst", isCorrect: false },
          { option: "least", isCorrect: false },
          { option: "test", isCorrect: false },
        ],
        explanationVi: "Make it our 'best'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "proud", isCorrect: true },
          { option: "loud", isCorrect: false },
          { option: "cloud", isCorrect: false },
          { option: "crowd", isCorrect: false },
        ],
        explanationVi: "Be 'proud'.",
      },
    ],
  },
];
