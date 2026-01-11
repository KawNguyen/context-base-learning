import { TextCompletionPassage } from "../types";

export const C1_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "c1-toeic-1",
    title: "Project Strategy Proposal - Email",
    level: "C1",
    content:
      "To: Senior Management\nSubject: Proposed Marketing Strategy\n\nFollowing our recent analysis of market trends, I am writing to propose a significant shift in our marketing strategy. It is evident that our current approach is no longer yielding the desired results in terms of customer {{1}}. Therefore, we must pivot towards digital platforms.\n\nI have outlined a comprehensive plan that leverages social media influencers and targeted online advertising. This strategy aims to enhance brand visibility and drive sales growth. I am confident that this initiative will substantially {{2}} our market share. I have attached the detailed proposal for your {{3}}. I look forward to your valuable {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "acquisition", isCorrect: true },
          { option: "inquisition", isCorrect: false },
          { option: "requisition", isCorrect: false },
          { option: "disposition", isCorrect: false },
        ],
        explanationVi:
          "Trong kinh doanh, 'customer acquisition' đề cập đến quá trình thu hút và giành được khách hàng mới, là một thuật ngữ phổ biến.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "bolster", isCorrect: true },
          { option: "holster", isCorrect: false },
          { option: "poster", isCorrect: false },
          { option: "toaster", isCorrect: false },
        ],
        explanationVi:
          "'Bolster' nghĩa là hỗ trợ hoặc củng cố. Trong ngữ cảnh kinh doanh, 'bolster' đề cập đến việc tăng cường sức mạnh hoặc hỗ trợ cho một kế hoạch hoặc chiến lược.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "perusal", isCorrect: true },
          { option: "refusal", isCorrect: false },
          { option: "dispersal", isCorrect: false },
          { option: "reversal", isCorrect: false },
        ],
        explanationVi:
          "Để bạn 'perusal' (đọc kỹ). 'Perusal' là từ chỉ hành động đọc một cách cẩn thận và chi tiết, thường dùng trong văn bản formal.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "feedback", isCorrect: true },
          { option: "drawback", isCorrect: false },
          { option: "kickback", isCorrect: false },
          { option: "cutback", isCorrect: false },
        ],
        explanationVi: "Valuable 'feedback'.",
      },
    ],
  },
  {
    id: "c1-toeic-2",
    title: "Conference Invitation - Letter",
    level: "C1",
    content:
      "Dear Dr. Aris,\n\nOn behalf of the Organizing Committee, it is my distinct pleasure to invite you to deliver the keynote address at the upcoming International Summit on Renewable Energy. Your pioneering research in solar cell efficiency has garnered widespread {{1}} within the scientific community.\n\nWe would be honored if you could share your insights on the future of sustainable energy. The conference serves as a platform for experts to exchange ideas and foster collaborations. We anticipate an audience of over 500 delegates from around the globe. Please let us know if you would be available to {{2}} this invitation. We are prepared to cover all travel and accommodation {{3}}. We eagerly await your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "acclaim", isCorrect: true },
          { option: "claim", isCorrect: false },
          { option: "disdain", isCorrect: false },
          { option: "reclaim", isCorrect: false },
        ],
        explanationVi: "Widespread 'acclaim' (praise).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "accept", isCorrect: true },
          { option: "except", isCorrect: false },
          { option: "expect", isCorrect: false },
          { option: "intercept", isCorrect: false },
        ],
        explanationVi: "'Accept' this invitation.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "expenses", isCorrect: true },
          { option: "expanses", isCorrect: false },
          { option: "advances", isCorrect: false },
          { option: "offenses", isCorrect: false },
        ],
        explanationVi: "Travel and accommodation 'expenses'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "response", isCorrect: true },
          { option: "reponse", isCorrect: false },
          { option: "respite", isCorrect: false },
          { option: "retort", isCorrect: false },
        ],
        explanationVi: "Await your 'response'.",
      },
    ],
  },
  {
    id: "c1-toeic-3",
    title: "Market Analysis - Memo",
    level: "C1",
    content:
      "To: Board of Directors\nFrom: Chief Analyst\nSubject: Q3 Market Trends\n\nThe third quarter has witnessed considerable volatility in the commodities market, primarily driven by geopolitical tensions. Despite these fluctuations, our sector has demonstrated remarkable {{1}}. However, we must remain vigilant as supply chain disruptions continue to pose a threat.\n\nOur projections indicate a potential stabilization in prices by the end of the year, provided that international trade relations improve. We recommend diversifying our supplier base to {{2}} risks. Furthermore, investing in local production capabilities could offer a buffer against external shocks. It is imperative that we act {{3}} to safeguard our margins. Detailed charts are {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "resilience", isCorrect: true },
          { option: "reliance", isCorrect: false },
          { option: "compliance", isCorrect: false },
          { option: "defiance", isCorrect: false },
        ],
        explanationVi: "Demonstrated remarkable 'resilience'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "mitigate", isCorrect: true },
          { option: "litigate", isCorrect: false },
          { option: "instigate", isCorrect: false },
          { option: "castigate", isCorrect: false },
        ],
        explanationVi: "'Mitigate' (reduce) risks.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "decisively", isCorrect: true },
          { option: "derisively", isCorrect: false },
          { option: "divisively", isCorrect: false },
          { option: "deceptively", isCorrect: false },
        ],
        explanationVi: "Act 'decisively'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "appended", isCorrect: true },
          { option: "suspended", isCorrect: false },
          { option: "intended", isCorrect: false },
          { option: "attended", isCorrect: false },
        ],
        explanationVi: "Charts are 'appended' (attached).",
      },
    ],
  },
  {
    id: "c1-toeic-4",
    title: "Performance Review - Formal",
    level: "C1",
    content:
      "Employee: Sarah Jenkins\nReview Period: Jan - Dec\n\nSarah has consistently exceeded performance expectations throughout this review period. Her ability to manage complex projects with tight deadlines is truly {{1}}. She has played a pivotal role in the successful launch of our new software suite.\n\nFurthermore, her leadership skills have been instrumental in fostering a collaborative team environment. However, there is room for improvement in delegating tasks, as she tends to take on an excessive workload. We encourage her to utilize her team members more effectively. Overall, she is a highly {{2}} asset to the company. We recommend her for a {{3}} to Senior Manager. Congratulations on a stellar {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "commendable", isCorrect: true },
          { option: "amendable", isCorrect: false },
          { option: "defendable", isCorrect: false },
          { option: "expendable", isCorrect: false },
        ],
        explanationVi: "Truly 'commendable' (worthy of praise).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "valued", isCorrect: true },
          { option: "values", isCorrect: false },
          { option: "valid", isCorrect: false },
          { option: "vapid", isCorrect: false },
        ],
        explanationVi: "Highly 'valued' asset.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "promotion", isCorrect: true },
          { option: "commotion", isCorrect: false },
          { option: "demotion", isCorrect: false },
          { option: "emotion", isCorrect: false },
        ],
        explanationVi: "Recommend for a 'promotion'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "performance", isCorrect: true },
          { option: "performing", isCorrect: false },
          { option: "performer", isCorrect: false },
          { option: "perform", isCorrect: false },
        ],
        explanationVi: "Stellar 'performance'.",
      },
    ],
  },
  {
    id: "c1-toeic-5",
    title: "Policy Update - HR Email",
    level: "C1",
    content:
      "To: All Employees\nSubject: Update to Remote Work Policy\n\nEffective immediately, the company is updating its remote work policy to offer greater flexibility. We recognize that the traditional office model is evolving, and we aim to support a healthy work-life {{1}}. Employees may now choose to work remotely for up to three days a week.\n\nHowever, attendance at team meetings and client presentations remains mandatory. We trust that employees will maintain their high standards of productivity regardless of their location. This policy will be reviewed on a quarterly basis to ensure it meets business needs. Please consult the employee handbook for specific {{2}}. We appreciate your continued {{3}} and adaptability. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "balance", isCorrect: true },
          { option: "scales", isCorrect: false },
          { option: "beam", isCorrect: false },
          { option: "check", isCorrect: false },
        ],
        explanationVi: "Work-life 'balance'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "guidelines", isCorrect: true },
          { option: "headlines", isCorrect: false },
          { option: "lines", isCorrect: false },
          { option: "deadline", isCorrect: false },
        ],
        explanationVi: "Specific 'guidelines'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "dedication", isCorrect: true },
          { option: "medication", isCorrect: false },
          { option: "indication", isCorrect: false },
          { option: "abdication", isCorrect: false },
        ],
        explanationVi: "Continued 'dedication'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "c1-toeic-6",
    title: "Client Apology - Letter",
    level: "C1",
    content:
      "Dear Mr. Thompson,\n\nI am writing to formally apologize for the service disruption you experienced last week. We understand that this interruption had a detrimental impact on your operations, and for that, we differ our sincerest {{1}}. An internal investigation revealed a critical server failure.\n\nTo prevent a recurrence, we have implemented redundant backup systems and enhanced our monitoring protocols. We value your business and are committed to restoring your confidence in our services. As a gesture of goodwill, we have credited your account with a 20% discount on your next invoice. We hope you will accept our apology and give us the opportunity to make {{2}}. Please contact me directly if you have any {{3}}. Sincerely, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "apologies", isCorrect: true },
          { option: "compliments", isCorrect: false },
          { option: "wishes", isCorrect: false },
          { option: "greetings", isCorrect: false },
        ],
        explanationVi: "Sincerest 'apologies'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "amends", isCorrect: true },
          { option: "friends", isCorrect: false },
          { option: "trends", isCorrect: false },
          { option: "ends", isCorrect: false },
        ],
        explanationVi: "Make 'amends' (compensate).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "concerns", isCorrect: true },
          { option: "concern", isCorrect: false },
          { option: "concerts", isCorrect: false },
          { option: "concepts", isCorrect: false },
        ],
        explanationVi: "Any 'concerns'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Management", isCorrect: true },
          { option: "Customer", isCorrect: false },
          { option: "Staff", isCorrect: false },
          { option: "Friend", isCorrect: false },
        ],
        explanationVi: "Sincerely, 'Management' (or Name).",
      },
    ],
  },
  {
    id: "c1-toeic-7",
    title: "Training Seminar - Memo",
    level: "C1",
    content:
      "To: Sales Department\nSubject: Advanced Negotiation Skills Workshop\n\nWe are pleased to announce an upcoming workshop focused on Advanced Negotiation Skills. This seminar is designed to equip our sales force with the techniques needed to close high-value deals in competitive environments. The session will cover topics such as psychological persuasion, reading non-verbal cues, and conflict {{1}}.\n\nAttendance is highly recommended for all senior sales associates. The workshop will be facilitated by a renowned industry expert. It is an excellent opportunity to refine your skills and gain a competitive edge. Please register via the company portal by next Friday. Spaces are limited, so early registration is {{2}}. We expect full {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "resolution", isCorrect: true },
          { option: "revolution", isCorrect: false },
          { option: "distribution", isCorrect: false },
          { option: "contribution", isCorrect: false },
        ],
        explanationVi: "Conflict 'resolution'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "advised", isCorrect: true },
          { option: "devised", isCorrect: false },
          { option: "revised", isCorrect: false },
          { option: "despised", isCorrect: false },
        ],
        explanationVi: "Early registration is 'advised'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "participation", isCorrect: true },
          { option: "anticipation", isCorrect: false },
          { option: "emancipation", isCorrect: false },
          { option: "constipation", isCorrect: false },
        ],
        explanationVi: "Expect full 'participation'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "rewards", isCorrect: false },
          { option: "awards", isCorrect: false },
          { option: "records", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-8",
    title: "Product Launch - Press Release",
    level: "C1",
    content:
      'FOR IMMEDIATE RELEASE\n\nTechNova Unveils Revolutionary Smart Assistant\n\nTechNova is proud to announce the launch of its latest innovation, the OmniHelper 3000. This state-of-the-art smart assistant features advanced artificial intelligence capabilities that allow it to seamlessly integrate with all household devices. Unlike its predecessors, the OmniHelper 3000 utilizes intuitive voice recognition to execute complex {{1}}.\n\n"We believe this product represents a quantum leap in home automation," said CEO Jane Doe. "It is designed to simplify the lives of our users." The product will be available for purchase starting next month. Early reviews have been overwhelmingly positive, citing its ease of use and robust security features. TechNova continues to lead the way in technological {{2}}. For more info, visit our {{3}}. Contact {{4}}.',
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "commands", isCorrect: true },
          { option: "demands", isCorrect: false },
          { option: "reprimands", isCorrect: false },
          { option: "expands", isCorrect: false },
        ],
        explanationVi: "Execute complex 'commands'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "advancement", isCorrect: true },
          { option: "enhancement", isCorrect: false },
          { option: "retirement", isCorrect: false },
          { option: "containment", isCorrect: false },
        ],
        explanationVi: "Technological 'advancement'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "website", isCorrect: true },
          { option: "office", isCorrect: false },
          { option: "store", isCorrect: false },
          { option: "home", isCorrect: false },
        ],
        explanationVi: "Visit our 'website'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "us", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "them", isCorrect: false },
          { option: "him", isCorrect: false },
        ],
        explanationVi: "Contact 'us'.",
      },
    ],
  },
  {
    id: "c1-toeic-9",
    title: "Merger Announcement - Email",
    level: "C1",
    content:
      "To: All Stakeholders\nSubject: Strategic Merger Announcement\n\nWe are delighted to announce that Alpha Corp has entered into a definitive agreement to merge with Beta Ltd. This strategic alliance brings together two industry leaders with complementary strengths. The combined entity will offer a broader portfolio of services and enhanced value to our customers and {{1}}.\n\nThe merger is expected to generate significant operational efficiencies and drive innovation. Both companies are committed to ensuring a smooth transition for employees and clients alike. We anticipate the transaction will close by the fourth quarter, subject to regulatory {{2}}. This marks a new chapter in our history. We thank you for your continued {{3}}. Sincerely, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "shareholders", isCorrect: true },
          { option: "stakeholders", isCorrect: false },
          { option: "people", isCorrect: false },
          { option: "public", isCorrect: false },
        ],
        explanationVi: "Customers and 'shareholders'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "approval", isCorrect: true },
          { option: "denial", isCorrect: false },
          { option: "removal", isCorrect: false },
          { option: "refusal", isCorrect: false },
        ],
        explanationVi: "Regulatory 'approval'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "support", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "time", isCorrect: false },
          { option: "effort", isCorrect: false },
        ],
        explanationVi: "Continued 'support'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "CEO", isCorrect: true },
          { option: "Manager", isCorrect: false },
          { option: "Admin", isCorrect: false },
          { option: "Staff", isCorrect: false },
        ],
        explanationVi: "Signed by 'CEO'.",
      },
    ],
  },
  {
    id: "c1-toeic-10",
    title: "Research Grant - Application",
    level: "C1",
    content:
      "Project Title: Urban Sustainable Agriculture\n\nAbstract:\n\nThis research proposal seeks funding to investigate the viability of vertical farming in high-density urban areas. As urbanization accelerates, the demand for locally sourced, fresh produce is increasing. Traditional supply chains are often inefficient and have a high carbon {{1}}. Our project aims to develop a scalable model for rooftop hydroponic systems.\n\nWe believe this initiative will not only reduce food miles but also promote community engagement. The funds will be utilized for equipment procurement, data analysis, and pilot testing. We are confident that our findings will contribute significantly to the field of sustainable agriculture. We respectfully submit this proposal for your {{2}}. We look forward to a favorable {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "footprint", isCorrect: true },
          { option: "fingerprint", isCorrect: false },
          { option: "blueprint", isCorrect: false },
          { option: "imprint", isCorrect: false },
        ],
        explanationVi: "High carbon 'footprint'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "consideration", isCorrect: true },
          { option: "moderation", isCorrect: false },
          { option: "alteration", isCorrect: false },
          { option: "consternation", isCorrect: false },
        ],
        explanationVi: "For your 'consideration'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "outcome", isCorrect: true },
          { option: "income", isCorrect: false },
          { option: "welcome", isCorrect: false },
          { option: "homecoming", isCorrect: false },
        ],
        explanationVi: "Favorable 'outcome'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "c1-toeic-11",
    title: "Software Upgrade - Memo",
    level: "C1",
    content:
      "To: IT Department\nSubject: Mandatory System Upgrade\n\nPlease be advised that a critical security patch will be deployed across all company servers this weekend. This upgrade is essential to address vulnerabilities identified in our current operating system. The update process is scheduled to commence at midnight on Saturday and is expected to conclude by 6 AM Sunday. During this window, network services will be {{1}}.\n\nAll staff are reminded to save their work and shut down their terminals before leaving on Friday. We apologize for any disruption this may cause but emphasize the importance of maintaining a secure infrastructure. Failure to update could expose the company to significant data {{2}}. Please contact the Help Desk if you experience any issues post-upgrade. Your cooperation is {{3}}. Regards, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "unavailable", isCorrect: true },
          { option: "available", isCorrect: false },
          { option: "avoidable", isCorrect: false },
          { option: "reliable", isCorrect: false },
        ],
        explanationVi: "Services will be 'unavailable'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "breaches", isCorrect: true },
          { option: "beaches", isCorrect: false },
          { option: "branches", isCorrect: false },
          { option: "breeches", isCorrect: false },
        ],
        explanationVi: "Data 'breaches'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "appreciated", isCorrect: true },
          { option: "depreciated", isCorrect: false },
          { option: "initiated", isCorrect: false },
          { option: "negated", isCorrect: false },
        ],
        explanationVi: "Cooperation is 'appreciated'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "CTO", isCorrect: true },
          { option: "HR", isCorrect: false },
          { option: "Sales", isCorrect: false },
          { option: "Marketing", isCorrect: false },
        ],
        explanationVi: "Signed by 'CTO' (Chief Technology Officer).",
      },
    ],
  },
  {
    id: "c1-toeic-12",
    title: "Office Relocation - Announcement",
    level: "C1",
    content:
      "To: All Staff\nSubject: Office Relocation Plan\n\nWe are excited to share details regarding our upcoming move to the new headquarters at Horizon Towers. The relocation is scheduled for the first weekend of next month. The new facility offers state-of-the-art amenities, including collaborative workspaces and a dedicated fitness center, which aligns with our commitment to employee {{1}}.\n\nA detailed moving guide will be distributed shortly, outlining packing instructions and department-specific schedules. We ask that everyone declutter their current desks and label all boxes clearly. We understand that change can be challenging, but we believe this move will foster greater creativity and {{2}}. We thank you for your patience during this {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "well-being", isCorrect: true },
          { option: "safety", isCorrect: false },
          { option: "money", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "Employee 'well-being'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "collaboration", isCorrect: true },
          { option: "separation", isCorrect: false },
          { option: "isolation", isCorrect: false },
          { option: "frustration", isCorrect: false },
        ],
        explanationVi: "Creativity and 'collaboration'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "transition", isCorrect: true },
          { option: "position", isCorrect: false },
          { option: "condition", isCorrect: false },
          { option: "partition", isCorrect: false },
        ],
        explanationVi: "During this 'transition'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Regards", isCorrect: true },
          { option: "Bye", isCorrect: false },
          { option: "Hello", isCorrect: false },
          { option: "Thanks", isCorrect: false },
        ],
        explanationVi: "Best 'Regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-13",
    title: "Investment Pitch - Summary",
    level: "C1",
    content:
      "Investment Opportunity: EcoTech Solutions\n\nEcoTech Solutions is seeking $2 million in Series A funding to scale its operations. Our proprietary waste-to-energy technology addresses the growing global crisis of waste management while generating guaranteed clean energy. We have successfully completed a pilot program with the City Council, demonstrating a 30% reduction in landfill {{1}}.\n\nThe capital will be used to expand our manufacturing capacity and enter new markets. With a projected ROI of 25% over three years, EcoTech represents a compelling investment for socially responsible portfolios. We invite potential investors to review our business plan and financial {{2}}. We are confident in our ability to deliver sustainable {{3}}. Contact us for more {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "volume", isCorrect: true },
          { option: "noise", isCorrect: false },
          { option: "area", isCorrect: false },
          { option: "space", isCorrect: false },
        ],
        explanationVi: "Landfill 'volume'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "forecasts", isCorrect: true },
          { option: "broadcasts", isCorrect: false },
          { option: "overcasts", isCorrect: false },
          { option: "podcasts", isCorrect: false },
        ],
        explanationVi: "Financial 'forecasts'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "growth", isCorrect: true },
          { option: "waste", isCorrect: false },
          { option: "loss", isCorrect: false },
          { option: "debt", isCorrect: false },
        ],
        explanationVi: "Deliver sustainable 'growth'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "details", isCorrect: true },
          { option: "lies", isCorrect: false },
          { option: "secrets", isCorrect: false },
          { option: "stories", isCorrect: false },
        ],
        explanationVi: "More 'details'.",
      },
    ],
  },
  {
    id: "c1-toeic-14",
    title: "Contract Terms - Summary",
    level: "C1",
    content:
      "Terms and Conditions Summary\n\nThis document outlines the key terms governing the service agreement between Provider and Client. The initial contract term is twelve months, automatically renewable unless terminated by either party with sixty days' written {{1}}. The Client agrees to pay the monthly service fee as specified in Schedule A.\n\nIntellectual property rights created during the engagement shall remain the exclusive property of the Provider, unless otherwise agreed. The Provider warrants that the services will be performed with reasonable skill and care. Liability for indirect or consequential damages is expressly {{2}}. Any disputes arising from this agreement shall be settled through binding {{3}}. Please sign {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "notice", isCorrect: true },
          { option: "note", isCorrect: false },
          { option: "news", isCorrect: false },
          { option: "noise", isCorrect: false },
        ],
        explanationVi: "Written 'notice'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "excluded", isCorrect: true },
          { option: "included", isCorrect: false },
          { option: "deluded", isCorrect: false },
          { option: "secluded", isCorrect: false },
        ],
        explanationVi: "Expressly 'excluded'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "arbitration", isCorrect: true },
          { option: "litigation", isCorrect: false },
          { option: "discussion", isCorrect: false },
          { option: "conversation", isCorrect: false },
        ],
        explanationVi: "Binding 'arbitration'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "below", isCorrect: true },
          { option: "above", isCorrect: false },
          { option: "here", isCorrect: false },
          { option: "there", isCorrect: false },
        ],
        explanationVi: "Sign 'below'.",
      },
    ],
  },
  {
    id: "c1-toeic-15",
    title: "Sustainability Report - Intro",
    level: "C1",
    content:
      "Annual Sustainability Report\n\nWe are proud to present our annual Sustainability Report, highlighting our progress towards our 2030 environmental goals. This year, we achieved a significant milestone by reducing our greenhouse gas emissions by 15% across all operations. This success is attributed to our aggressive investment in renewable energy and energy-efficient {{1}}.\n\nMoving forward, our focus will shift towards circular economy principles, aiming to minimize waste throughout our product lifecycle. We are committed to transparency and will continue to report on our performance against international standards. We invite all stakeholders to join us on this journey towards a greener {{2}}. Together, we can make a {{3}}. Read the full {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "technologies", isCorrect: true },
          { option: "ideologies", isCorrect: false },
          { option: "mythologies", isCorrect: false },
          { option: "apologies", isCorrect: false },
        ],
        explanationVi: "Energy-efficient 'technologies'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "future", isCorrect: true },
          { option: "past", isCorrect: false },
          { option: "present", isCorrect: false },
          { option: "history", isCorrect: false },
        ],
        explanationVi: "Greener 'future'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "difference", isCorrect: true },
          { option: "similarity", isCorrect: false },
          { option: "problem", isCorrect: false },
          { option: "mistake", isCorrect: false },
        ],
        explanationVi: "Make a 'difference'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "report", isCorrect: true },
          { option: "book", isCorrect: false },
          { option: "paper", isCorrect: false },
          { option: "letter", isCorrect: false },
        ],
        explanationVi: "Read the full 'report'.",
      },
    ],
  },
  {
    id: "c1-toeic-16",
    title: "Logistics Delay - Memo",
    level: "C1",
    content:
      "To: Logistics Team\nSubject: Shipment Delay Notification\n\nThis memo serves to inform you of a delay in the arrival of the raw material shipment from our supplier in East Asia. Due to unforeseen weather conditions disrupting maritime routes, the vessel is now expected to dock five days behind schedule. This delay will inevitably impact our production {{1}}.\n\nWe are currently exploring alternative sourcing options to mitigate any potential downtime. In the interim, please prioritize existing inventory to fulfill urgent orders. We ask for your patience and cooperation as we navigate this logistical {{2}}. Updates will be provided daily. Please manage client expectations {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "timelines", isCorrect: true },
          { option: "headlines", isCorrect: false },
          { option: "pipelines", isCorrect: false },
          { option: "outlines", isCorrect: false },
        ],
        explanationVi: "Production 'timelines'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "challenge", isCorrect: true },
          { option: "revenge", isCorrect: false },
          { option: "scavenge", isCorrect: false },
          { option: "lozenge", isCorrect: false },
        ],
        explanationVi: "Logistical 'challenge'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "accordingly", isCorrect: true },
          { option: "willingly", isCorrect: false },
          { option: "sparingly", isCorrect: false },
          { option: "daringly", isCorrect: false },
        ],
        explanationVi: "Manage expectations 'accordingly'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "him", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "c1-toeic-17",
    title: "Partnership Announcement - Email",
    level: "C1",
    content:
      "To: All Partners\nSubject: Exciting New Collaboration\n\nWe are thrilled to announce a strategic partnership with GlobalTech Solutions. This collaboration marks a significant milestone in our expansion strategy, allowing us to leverage GlobalTech's cutting-edge AI platform. By integrating their technology with our service offerings, we aim to deliver unparalleled value to our {{1}}.\n\nThe joint venture will focus on developing innovative solutions for the healthcare sector. We believe this synergy will not only enhance our product portfolio but also accelerate our market penetration. We invite you to a virtual town hall meeting next Tuesday, where we will share more details about this exciting {{2}}. We look forward to your {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "clientele", isCorrect: true },
          { option: "personnel", isCorrect: false },
          { option: "parallel", isCorrect: false },
          { option: "citadel", isCorrect: false },
        ],
        explanationVi: "Value to our 'clientele' (clients).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "venture", isCorrect: true },
          { option: "adventure", isCorrect: false },
          { option: "denture", isCorrect: false },
          { option: "censure", isCorrect: false },
        ],
        explanationVi: "Exciting 'venture'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "participation", isCorrect: true },
          { option: "anticipation", isCorrect: false },
          { option: "segregation", isCorrect: false },
          { option: "obligation", isCorrect: false },
        ],
        explanationVi: "Look forward to your 'participation'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "reminds", isCorrect: false },
          { option: "resigns", isCorrect: false },
          { option: "rewinds", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-18",
    title: "Security Protocol - Memo",
    level: "C1",
    content:
      "To: All Employees\nSubject: Data Security Policy Update\n\nIn light of recent cybersecurity threats affecting our industry, the IT Department is enforcing a mandatory update to all user passwords. Effective Monday, all passwords must meet stricter complexity requirements, including a minimum length of 12 characters and a mix of special symbols. This measure is crucial to safeguard our proprietary {{1}}.\n\nEmployees will be prompted to change their credentials upon their next login. Additionally, we are implementing two-factor authentication for all remote access connections. We understand that these changes may cause minor inconvenience, but the protection of our digital assets is specific. Failure to comply may result in temporary account {{2}}. Please contact IT for {{3}}. Regards, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "information", isCorrect: true },
          { option: "formation", isCorrect: false },
          { option: "confirmation", isCorrect: false },
          { option: "stagnation", isCorrect: false },
        ],
        explanationVi: "Proprietary 'information'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "suspension", isCorrect: true },
          { option: "extension", isCorrect: false },
          { option: "dimension", isCorrect: false },
          { option: "pretension", isCorrect: false },
        ],
        explanationVi: "Account 'suspension'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "assistance", isCorrect: true },
          { option: "resistance", isCorrect: false },
          { option: "distance", isCorrect: false },
          { option: "persistence", isCorrect: false },
        ],
        explanationVi: "Contact IT for 'assistance'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "IT Director", isCorrect: true },
          { option: "Janitor", isCorrect: false },
          { option: "Driver", isCorrect: false },
          { option: "Cook", isCorrect: false },
        ],
        explanationVi: "Signed by 'IT Director'.",
      },
    ],
  },
  {
    id: "c1-toeic-19",
    title: "Quarterly Earnings - Report",
    level: "C1",
    content:
      "Earnings Call Summary - Q2\n\nWe are pleased to report a strong second quarter, with revenue exceeding our initial guidance by 8%. This growth was primarily driven by robust demand in our cloud computing division. Our operating margin also expanded by 200 basis points, reflecting our successful cost-optimization {{1}}.\n\nWhile we faced headwinds in the retail sector due to shifting consumer preferences, our diversified portfolio provided a stable foundation. We remain optimistic about the second half of the year, with several key product launches scheduled. We are committed to delivering long-term value to our {{2}}. The full financial statement is available for download on our investor relations {{3}}. Thank you for your continued {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "initiatives", isCorrect: true },
          { option: "narratives", isCorrect: false },
          { option: "derivatives", isCorrect: false },
          { option: "representatives", isCorrect: false },
        ],
        explanationVi: "Cost-optimization 'initiatives'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "shareholders", isCorrect: true },
          { option: "placeholders", isCorrect: false },
          { option: "beholders", isCorrect: false },
          { option: "landholders", isCorrect: false },
        ],
        explanationVi: "Value to our 'shareholders'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "portal", isCorrect: true },
          { option: "mortal", isCorrect: false },
          { option: "chortle", isCorrect: false },
          { option: "snorkel", isCorrect: false },
        ],
        explanationVi: "Investor relations 'portal' (website).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "confidence", isCorrect: true },
          { option: "diffidence", isCorrect: false },
          { option: "coincidence", isCorrect: false },
          { option: "residence", isCorrect: false },
        ],
        explanationVi: "Continued 'confidence'.",
      },
    ],
  },
  {
    id: "c1-toeic-20",
    title: "Leadership Seminar - Invite",
    level: "C1",
    content:
      "To: Senior Managers\nSubject: Executive Leadership Retreat\n\nYou are cordially invited to attend our annual Executive Leadership Retreat, taking place in Aspen, Colorado. This three-day event is designed to foster strategic thinking and enhance leadership capabilities among our top executives. We have curated a series of workshops led by world-renowned management {{1}}.\n\nThe agenda includes sessions on organizational resilience, digital transformation, and talent management. It will also provide a unique opportunity for networking and peer learning. Travel and accommodation details will be forwarded by the admin team. We consider your attendance vital to our future {{2}}. Please confirm your participation by next Monday. We look forward to a productive {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "gurus", isCorrect: true },
          { option: "virus", isCorrect: false },
          { option: "chorus", isCorrect: false },
          { option: "census", isCorrect: false },
        ],
        explanationVi: "Management 'gurus' (experts).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "strategy", isCorrect: true },
          { option: "tragedy", isCorrect: false },
          { option: "prodigy", isCorrect: false },
          { option: "effigy", isCorrect: false },
        ],
        explanationVi: "Vital to our future 'strategy'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "retreat", isCorrect: true },
          { option: "defeat", isCorrect: false },
          { option: "repeat", isCorrect: false },
          { option: "mistreat", isCorrect: false },
        ],
        explanationVi: "Productive 'retreat'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "hopes", isCorrect: false },
          { option: "wishes", isCorrect: false },
          { option: "dreams", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-21",
    title: "Employee Benefits - Memo",
    level: "C1",
    content:
      "To: All Staff\nSubject: Enhancements to Health Benefit Plan\n\nWe are pleased to announce significant improvements to our employee health benefit plan for the upcoming fiscal year. After a comprehensive review of provider options, we have selected a new plan that offers broader coverage and lower out-of-pocket costs. Key additions include enhanced mental health support and expanded dental {{1}}.\n\nAn informational webinar will be held next Wednesday to explain the new features and answer any questions. Enrollment packets will be mailed to your home addresses. We are committed to supporting the holistic well-being of our workforce. We encourage you to review the materials carefully to make informed decisions for you and your {{2}}. Thank you for your dedication. Regards, {{3}}. Contact HR for {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "benefits", isCorrect: true },
          { option: "deficits", isCorrect: false },
          { option: "exits", isCorrect: false },
          { option: "habits", isCorrect: false },
        ],
        explanationVi: "Expanded dental 'benefits'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "families", isCorrect: true },
          { option: "enemies", isCorrect: false },
          { option: "hobbies", isCorrect: false },
          { option: "memories", isCorrect: false },
        ],
        explanationVi: "You and your 'families'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "Human Resources", isCorrect: true },
          { option: "Legal", isCorrect: false },
          { option: "Security", isCorrect: false },
          { option: "Kitchen", isCorrect: false },
        ],
        explanationVi: "Regards, 'Human Resources'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "assistance", isCorrect: true },
          { option: "resistance", isCorrect: false },
          { option: "distance", isCorrect: false },
          { option: "persistence", isCorrect: false },
        ],
        explanationVi: "Contact HR for 'assistance'.",
      },
    ],
  },
  {
    id: "c1-toeic-22",
    title: "CSR Event - Invite",
    level: "C1",
    content:
      "To: All Employees\nSubject: Annual Charity Gala\n\nAs part of our Corporate Social Responsibility initiative, we are hosting our Annual Charity Gala to support local educational programs. The event will be held at the Grand Ballroom on December 15th. It promises to be an evening of elegance, entertainment, and philanthropy. We aim to raise record funds to provide scholarships for underprivileged {{1}}.\n\nCompany table sponsorships are available, and individual tickets can be purchased at a subsidized rate. We encourage everyone to participate in this worthy cause. Your contributions will make a tangible difference in our community. Let us come together to celebrate the spirit of giving. Please RSVP by November 30th. We hope to see you {{2}}. Best {{3}}. Signed, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "students", isCorrect: true },
          { option: "prudents", isCorrect: false },
          { option: "rodents", isCorrect: false },
          { option: "tridents", isCorrect: false },
        ],
        explanationVi: "Underprivileged 'students'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "there", isCorrect: true },
          { option: "where", isCorrect: false },
          { option: "here", isCorrect: false },
          { option: "near", isCorrect: false },
        ],
        explanationVi: "See you 'there'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "wishes", isCorrect: true },
          { option: "fishes", isCorrect: false },
          { option: "dishes", isCorrect: false },
          { option: "swishes", isCorrect: false },
        ],
        explanationVi: "Best 'wishes'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "The Committee", isCorrect: true },
          { option: "The Janitor", isCorrect: false },
          { option: "The Dog", isCorrect: false },
          { option: "Nobody", isCorrect: false },
        ],
        explanationVi: "Signed, 'The Committee'.",
      },
    ],
  },
  {
    id: "c1-toeic-23",
    title: "Market Expansion - Announcement",
    level: "C1",
    content:
      "To: Investors\nSubject: Expansion into Asian Markets\n\nWe are excited to announce our formal entry into the Asian market with the opening of our regional headquarters in Singapore. This strategic move is driven by the region's rapid economic growth and increasing demand for premium consumer electronics. We have spent the last two years conducting rigorous market research to tailor our product offerings to local {{1}}.\n\nWe have already secured partnerships with major distribution networks in Japan, South Korea, and China. We anticipate that this expansion will contribute approximately 15% to our total revenue by the next fiscal year. We are confident that our brand will resonate well with Asian consumers. We thank you for your continued trust in our vision. Sincerely, {{2}}. Contact {{3}} for queries. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "preferences", isCorrect: true },
          { option: "references", isCorrect: false },
          { option: "conferences", isCorrect: false },
          { option: "interferences", isCorrect: false },
        ],
        explanationVi: "Local 'preferences'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "The Board", isCorrect: true },
          { option: "The Bored", isCorrect: false },
          { option: "The Broad", isCorrect: false },
          { option: "The Beard", isCorrect: false },
        ],
        explanationVi: "Sincerely, 'The Board'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "IR", isCorrect: true },
          { option: "IT", isCorrect: false },
          { option: "HR", isCorrect: false },
          { option: "PR", isCorrect: false },
        ],
        explanationVi: "Contact 'IR' (Investor Relations).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "rewards", isCorrect: false },
          { option: "guards", isCorrect: false },
          { option: "cards", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-24",
    title: "Customer Survey - Email",
    level: "C1",
    content:
      "Dear Valued Customer,\n\nAt Apex Solutions, we are dedicated to providing superior service. To help us improve our offerings, we kindly ask you to spare a few minutes to complete our annual Customer Satisfaction Survey. Your feedback is invaluable in helping us understand your needs and enhance your user {{1}}.\n\nThe survey covers various aspects of our service, including product reliability, technical support, and ease of use. As a token of our appreciation, all participants will be entered into a draw to win a $500 gift voucher. Please click the link below to access the survey. We thank you for your time and continued {{2}}. Your opinion matters to {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "experience", isCorrect: true },
          { option: "experiment", isCorrect: false },
          { option: "expedience", isCorrect: false },
          { option: "expense", isCorrect: false },
        ],
        explanationVi: "Enhance your user 'experience'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "patronage", isCorrect: true },
          { option: "espionage", isCorrect: false },
          { option: "sabotage", isCorrect: false },
          { option: "orphanage", isCorrect: false },
        ],
        explanationVi: "Continued 'patronage' (business).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "us", isCorrect: true },
          { option: "them", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "me", isCorrect: false },
        ],
        explanationVi: "Matters to 'us'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "wishes", isCorrect: true },
          { option: "dishes", isCorrect: false },
          { option: "fishes", isCorrect: false },
          { option: "swishes", isCorrect: false },
        ],
        explanationVi: "Best 'wishes'.",
      },
    ],
  },
  {
    id: "c1-toeic-25",
    title: "Product Recall - Notice",
    level: "C1",
    content:
      "IMPORTANT SAFETY NOTICE\n\nElectroCorp is voluntarily recalling the 'HeatMaster 5000' space heater sold between January and March 2023. We have discovered a potential electrical fault that could pose a fire {{1}}. While no accidents have been reported to date, consumer safety is our top priority.\n\nCustomers are advised to stop using the product immediately and unplug it from the power source. Please return the unit to any authorized dealer for a full refund or replacement. We deeply apologize for any inconvenience this may cause and are working diligently to rectify the issue. For more information, please visit our website or call our hotline. Thank you for your {{2}}. Safety works {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hazard", isCorrect: true },
          { option: "wizard", isCorrect: false },
          { option: "lizard", isCorrect: false },
          { option: "gizzard", isCorrect: false },
        ],
        explanationVi: "Pose a fire 'hazard' (danger).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cooperation", isCorrect: true },
          { option: "operation", isCorrect: false },
          { option: "separation", isCorrect: false },
          { option: "desperation", isCorrect: false },
        ],
        explanationVi: "Thank you for 'cooperation'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "first", isCorrect: true },
          { option: "last", isCorrect: false },
          { option: "second", isCorrect: false },
          { option: "never", isCorrect: false },
        ],
        explanationVi: "Safety works 'first' (or comes first context).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Regards", isCorrect: true },
          { option: "Love", isCorrect: false },
          { option: "Hello", isCorrect: false },
          { option: "Bye", isCorrect: false },
        ],
        explanationVi: "Best 'Regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-26",
    title: "Annual Gala - Invite",
    level: "C1",
    content:
      "To: Key Clients\nSubject: Innovation Awards Gala\n\nWe are honored to invite you to our annual Innovation Awards Gala, celebrating excellence in the tech industry. The event will take place on November 10th at the Skyline Center. Join us for a night of recognition, networking, and fine dining. We will be presenting awards to companies that have demonstrated outstanding {{1}}.\n\nThe keynote speech will be delivered by tech pioneer, Elena Rostova. Dress code is black tie. Please RSVP by October 25th to secure your seat. We look forward to celebrating the achievements of our industry with you. Your presence would be greatly {{2}}. See you {{3}}. Sincerely, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "ingenuity", isCorrect: true },
          { option: "continuity", isCorrect: false },
          { option: "ambiguity", isCorrect: false },
          { option: "incongruity", isCorrect: false },
        ],
        explanationVi: "Outstanding 'ingenuity' (creativity).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "appreciated", isCorrect: true },
          { option: "depreciated", isCorrect: false },
          { option: "calculated", isCorrect: false },
          { option: "underrated", isCorrect: false },
        ],
        explanationVi: "Greatly 'appreciated'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "there", isCorrect: true },
          { option: "where", isCorrect: false },
          { option: "here", isCorrect: false },
          { option: "near", isCorrect: false },
        ],
        explanationVi: "See you 'there'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "The Hosts", isCorrect: true },
          { option: "The Guests", isCorrect: false },
          { option: "The Cooks", isCorrect: false },
          { option: "The Waiters", isCorrect: false },
        ],
        explanationVi: "Sincerely, 'The Hosts'.",
      },
    ],
  },
  {
    id: "c1-toeic-27",
    title: "Vendor Negotiation - Email",
    level: "C1",
    content:
      "To: Office Supply Co.\nSubject: Service Contract Renewal\n\nWe are currently reviewing our service contracts for the upcoming fiscal year. While we have been satisfied with your service, we have received competitive offers from other vendors. We are looking to reduce our operational costs and would like to discuss potential adjustments to our current pricing {{1}}.\n\nWe value our long-standing relationship and would prefer to continue working with you. Could you please provide a revised proposal that reflects a volume discount? We are available for a conference call next Tuesday to discuss this further. We hope to reach a mutually beneficial {{2}}. Please confirm your {{3}}. Regards, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "structure", isCorrect: true },
          { option: "rupture", isCorrect: false },
          { option: "scripture", isCorrect: false },
          { option: "puncture", isCorrect: false },
        ],
        explanationVi: "Pricing 'structure'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "agreement", isCorrect: true },
          { option: "disagreement", isCorrect: false },
          { option: "argument", isCorrect: false },
          { option: "impediment", isCorrect: false },
        ],
        explanationVi: "Mutually beneficial 'agreement'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "availability", isCorrect: true },
          { option: "liability", isCorrect: false },
          { option: "disability", isCorrect: false },
          { option: "instability", isCorrect: false },
        ],
        explanationVi: "Confirm your 'availability'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Procurement", isCorrect: true },
          { option: "Development", isCorrect: false },
          { option: "Entertainment", isCorrect: false },
          { option: "Retirement", isCorrect: false },
        ],
        explanationVi: "Signed by 'Procurement' (department).",
      },
    ],
  },
  {
    id: "c1-toeic-28",
    title: "Staff Restructuring - Memo",
    level: "C1",
    content:
      "To: All Departments\nSubject: Organizational Restructuring\n\nTo better align with our long-term strategic goals, the company will be undergoing an organizational restructuring effective next month. This change aims to streamline operations and eliminate redundancies across departments. While some reporting lines will change, we do not anticipate any job losses at this {{1}}.\n\nHR will be conducting individual meetings with affected staff to clarify their new roles and responsibilities. We believe this new structure will enhance agility and better position us for future growth. We ask for your patience and support during this transition period. Please direct any questions to your department head or {{2}}. Thank you for your {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "stage", isCorrect: true },
          { option: "page", isCorrect: false },
          { option: "cage", isCorrect: false },
          { option: "rage", isCorrect: false },
        ],
        explanationVi: "At this 'stage'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "HR", isCorrect: true },
          { option: "PR", isCorrect: false },
          { option: "IT", isCorrect: false },
          { option: "CEO", isCorrect: false },
        ],
        explanationVi: "Department head or 'HR'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "cooperation", isCorrect: true },
          { option: "operation", isCorrect: false },
          { option: "separation", isCorrect: false },
          { option: "respiration", isCorrect: false },
        ],
        explanationVi: "Thank you for 'cooperation'.",
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
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "c1-toeic-29",
    title: "Travel Policy - Update",
    level: "C1",
    content:
      "To: Sales Team\nSubject: Update to Corporate Travel Policy\n\nPlease be informed of changes to the Corporate Travel Policy regarding daily subsistence allowances. Due to rising inflation in several key markets, the daily meal cap has been increased by 15% effective immediately. Additionally, business class travel is now permitted for flights exceeding eight hours in {{1}}.\n\nAll travel bookings must still be made through our designated agency. Expense claims must be submitted within two weeks of return, accompanied by valid receipts. We hope these adjustments make business travel more comfortable and efficient for everyone. Please compliance is {{2}}. Safe {{3}}. Regards, {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "duration", isCorrect: true },
          { option: "location", isCorrect: false },
          { option: "rotation", isCorrect: false },
          { option: "station", isCorrect: false },
        ],
        explanationVi: "Exceeding eight hours in 'duration'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "mandatory", isCorrect: true },
          { option: "optional", isCorrect: false },
          { option: "advisory", isCorrect: false },
          { option: "illusory", isCorrect: false },
        ],
        explanationVi: "Compliance is 'mandatory'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "travels", isCorrect: true },
          { option: "levels", isCorrect: false },
          { option: "gravels", isCorrect: false },
          { option: "marvels", isCorrect: false },
        ],
        explanationVi: "Safe 'travels'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Finance", isCorrect: true },
          { option: "Security", isCorrect: false },
          { option: "Sales", isCorrect: false },
          { option: "Marketing", isCorrect: false },
        ],
        explanationVi: "Regards, 'Finance' (department).",
      },
    ],
  },
  {
    id: "c1-toeic-30",
    title: "Tech Innovation - News",
    level: "C1",
    content:
      "Company News: Patent Approval\n\nWe are delighted to share that the US Patent Office has approved our patent application for the 'Nano-Filter' water purification technology. This breakthrough innovation removes 99.9% of microplastics from drinking water, addressing a critical environmental health issue. This patent secures our intellectual property rights and positions us as a leader in clean water {{1}}.\n\nCommercial production is slated to begin early next year. We are currently in talks with several municipal water authorities for pilot implementations. This achievement is a testament to the dedication of our R&D team. We look forward to bringing this life-saving technology to {{2}}. Thank you for your hard {{3}}. To the {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "solutions", isCorrect: true },
          { option: "pollutions", isCorrect: false },
          { option: "dilutions", isCorrect: false },
          { option: "confusions", isCorrect: false },
        ],
        explanationVi: "Clean water 'solutions'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "market", isCorrect: true },
          { option: "marketing", isCorrect: false },
          { option: "marketer", isCorrect: false },
          { option: "markets", isCorrect: false },
        ],
        explanationVi: "Bringing to 'market'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "work", isCorrect: true },
          { option: "play", isCorrect: false },
          { option: "stay", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Hard 'work'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "future", isCorrect: true },
          { option: "past", isCorrect: false },
          { option: "back", isCorrect: false },
          { option: "end", isCorrect: false },
        ],
        explanationVi: "To the 'future' (toast/sign-off).",
      },
    ],
  },
];
