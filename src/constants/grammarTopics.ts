export type GrammarCategory =
  | "Tenses"
  | "Conditionals"
  | "Passive Voice"
  | "Modals"
  | "Relative Clauses"
  | "Gerunds Infinitives"
  | "Comparisons"
  | "Other";

export interface GrammarTopic {
  id: string;
  category: GrammarCategory;
  title: string;
  explanationVi: string;
  signalsEn?: string;
  signalsVi?: string;
  structure: string;
  examples: { en: string; vi: string }[];
}

export const grammarTopics: GrammarTopic[] = [
  // --- TENSES ---
  {
    id: "present-simple",
    category: "Tenses",
    title: "Present Simple",
    explanationVi:
      "Được sử dụng cho thói quen, lịch trình, sự thật hiển nhiên và các tình huống cố định.",
    signalsEn:
      "Always, usually, often, sometimes, never, every day/week/month/year, once/twice a week...",
    signalsVi:
      "Always, usually, often, sometimes, never, every day/week... (mỗi ngày/tuần...), once/twice... (một/hai lần...)",
    structure: "Subject + V(s/es) / Subject + do/does + not + V",
    examples: [
      { en: "The sun rises in the east.", vi: "Mặt trời mọc ở đằng đông." },
      {
        en: "She drinks coffee every morning.",
        vi: "Cô ấy uống cà phê mỗi sáng.",
      },
    ],
  },
  {
    id: "present-continuous",
    category: "Tenses",
    title: "Present Continuous",
    explanationVi:
      "Được sử dụng cho các hành động đang diễn ra ngay bây giờ hoặc các tình huống tạm thời.",
    signalsEn:
      "Now, right now, at the moment, at present, Look!, Listen!, Be quiet!...",
    signalsVi:
      "Now, right now, at the moment, Look! (Nhìn kìa!), Listen! (Nghe kìa!)...",
    structure: "Subject + am/is/are + V-ing",
    examples: [
      {
        en: "I am studying English now.",
        vi: "Tôi đang học tiếng Anh bây giờ.",
      },
      {
        en: "They are staying at a hotel this week.",
        vi: "Họ đang ở khách sạn tuần này.",
      },
    ],
  },
  {
    id: "present-perfect",
    category: "Tenses",
    title: "Present Perfect",
    explanationVi:
      "Được sử dụng cho hành động trong quá khứ có kết quả ở hiện tại, hoặc kinh nghiệm không rõ thời gian.",
    signalsEn:
      "Just, recently, lately, already, yet, ever, never, since, for, so far, up to now...",
    signalsVi:
      "Just, recently, already, yet (chưa), ever (đã từng), never (chưa từng), since (từ khi), for (trong khoảng)...",
    structure: "Subject + have/has + V3/ed",
    examples: [
      {
        en: "I have lost my keys.",
        vi: "Tôi đã làm mất chìa khóa (và giờ vẫn chưa tìm thấy).",
      },
      {
        en: "She has never been to Japan.",
        vi: "Cô ấy chưa bao giờ đến Nhật Bản.",
      },
    ],
  },
  {
    id: "present-perfect-continuous",
    category: "Tenses",
    title: "Present Perfect Continuous",
    explanationVi:
      "Diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại, nhấn mạnh vào tính liên tục/thời gian.",
    signalsEn: "All day/week, since, for, how long...",
    signalsVi: "All day (cả ngày), all morning, for a long time, since, for...",
    structure: "Subject + have/has + been + V-ing",
    examples: [
      {
        en: "I have been waiting for you for two hours.",
        vi: "Tôi đã đợi bạn suốt hai tiếng đồng hồ.",
      },
      {
        en: "She has been working here since 2010.",
        vi: "Cô ấy đã làm việc ở đây từ năm 2010.",
      },
    ],
  },
  {
    id: "past-simple",
    category: "Tenses",
    title: "Past Simple",
    explanationVi:
      "Được sử dụng cho các hành động đã hoàn tất trong quá khứ tại một thời điểm cụ thể.",
    signalsEn:
      "Yesterday, last night/week/month/year, ...ago, in 1990, in the past...",
    signalsVi:
      "Yesterday (hôm qua), last... (tuần trước/tháng trước...), ...ago (cách đây...), in + năm trong quá khứ.",
    structure: "Subject + V2/ed / Subject + did + not + V",
    examples: [
      {
        en: "I visited London last year.",
        vi: "Tôi đã thăm London năm ngoái.",
      },
      {
        en: "They didn't go to school yesterday.",
        vi: "Họ đã không đi học hôm qua.",
      },
    ],
  },
  {
    id: "past-continuous",
    category: "Tenses",
    title: "Past Continuous",
    explanationVi:
      "Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ hoặc bị hành động khác cắt ngang.",
    signalsEn:
      "At + time + past (at 8pm yesterday), at this time last..., while, when...",
    signalsVi:
      "At... yesterday (vào lúc... hôm qua), at this time last... (vào giờ này... trước), while (trong khi), when.",
    structure: "Subject + was/were + V-ing",
    examples: [
      {
        en: "I was watching TV at 8pm yesterday.",
        vi: "Tôi đang xem TV lúc 8 giờ tối hôm qua.",
      },
      {
        en: "When I arrived, they were eating dinner.",
        vi: "Khi tôi đến, họ đang ăn tối.",
      },
    ],
  },
  {
    id: "past-perfect",
    category: "Tenses",
    title: "Past Perfect",
    explanationVi:
      "Diễn tả hành động xảy ra trước một hành động khác trong quá khứ.",
    signalsEn: "Before, after, when, by the time, as soon as...",
    signalsVi:
      "Before (trước khi), after (sau khi), by the time (vào lúc), because...",
    structure: "Subject + had + V3/ed",
    examples: [
      {
        en: "She had left before I arrived.",
        vi: "Cô ấy đã rời đi trước khi tôi đến.",
      },
      {
        en: "After he had finished his work, he went home.",
        vi: "Sau khi anh ấy hoàn thành công việc, anh ấy về nhà.",
      },
    ],
  },
  {
    id: "future-simple",
    category: "Tenses",
    title: "Future Simple (Will)",
    explanationVi:
      "Được sử dụng cho quyết định tức thời, dự đoán không có bằng chứng, và lời hứa.",
    signalsEn:
      "Tomorrow, next week/month/year, in + future year, think, believe, promise, hope...",
    signalsVi:
      "Tomorrow (ngày mai), next... (tuần tới...), in... (trong tương lai), I think, I promise...",
    structure: "Subject + will + V(base)",
    examples: [
      {
        en: "It's cold. I will close the window.",
        vi: "Lạnh quá. Tôi sẽ đóng cửa sổ.",
      },
      { en: "I think it will rain tomorrow.", vi: "Tôi nghĩ ngày mai sẽ mưa." },
    ],
  },
  {
    id: "near-future",
    category: "Tenses",
    title: "Near Future (Be going to)",
    explanationVi: "Diễn tả kế hoạch, dự định hoặc dự đoán có căn cứ xác thực.",
    signalsEn: "Tomorrow, tonight, next week (with plan), look at...!",
    signalsVi:
      "Kế hoạch cụ thể, Look at those clouds! (Nhìn mây kìa -> sắp mưa)...",
    structure: "Subject + am/is/are + going to + V(base)",
    examples: [
      {
        en: "I am going to visit my grandma this weekend.",
        vi: "Tôi sẽ đi thăm bà tôi cuối tuần này (đã lên kế hoạch).",
      },
      {
        en: "Look at the clouds! It is going to rain.",
        vi: "Nhìn mây kìa! Trời sắp mưa rồi.",
      },
    ],
  },
  {
    id: "future-continuous",
    category: "Tenses",
    title: "Future Continuous",
    explanationVi:
      "Diễn tả hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.",
    signalsEn: "At this time tomorrow, at + hour + tomorrow...",
    signalsVi:
      "At this time tomorrow (giờ này ngày mai), at 5pm next Sunday...",
    structure: "Subject + will be + V-ing",
    examples: [
      {
        en: "At this time tomorrow, I will be flying to Paris.",
        vi: "Vào giờ này ngày mai, tôi sẽ đang bay tới Paris.",
      },
    ],
  },

  // --- CONDITIONALS ---
  {
    id: "conditional-0",
    category: "Conditionals",
    title: "Zero Conditional",
    explanationVi:
      "Được sử dụng cho các sự thật hiển nhiên và thực tế khoa học.",
    structure: "If + Present Simple, Present Simple",
    examples: [
      {
        en: "If you heat ice, it melts.",
        vi: "Nếu bạn đun nóng đá, nó sẽ tan chảy.",
      },
      {
        en: "If it rains, the grass gets wet.",
        vi: "Nếu trời mưa, cỏ sẽ ướt.",
      },
    ],
  },
  {
    id: "conditional-1",
    category: "Conditionals",
    title: "First Conditional",
    explanationVi: "Được sử dụng cho các khả năng có thực trong tương lai.",
    structure: "If + Present Simple, will + V(base)",
    examples: [
      {
        en: "If it rains, I will stay home.",
        vi: "Nếu trời mưa, tôi sẽ ở nhà.",
      },
      { en: "If you study, you will pass.", vi: "Nếu bạn học, bạn sẽ đậu." },
    ],
  },
  {
    id: "conditional-2",
    category: "Conditionals",
    title: "Second Conditional",
    explanationVi:
      "Được sử dụng cho các tình huống không có thật hoặc giả định ở hiện tại/tương lai.",
    structure: "If + Past Simple, would + V(base)",
    examples: [
      {
        en: "If I were you, I would accept the offer.",
        vi: "Nếu tôi là bạn, tôi sẽ chấp nhận lời đề nghị.",
      },
      {
        en: "If I had money, I would buy a car.",
        vi: "Nếu tôi có tiền, tôi sẽ mua xe hơi.",
      },
    ],
  },
  {
    id: "conditional-3",
    category: "Conditionals",
    title: "Third Conditional",
    explanationVi:
      "Được sử dụng cho các tình huống không có thật trong quá khứ (sự tiếc nuối).",
    structure: "If + Past Perfect, would have + V3/ed",
    examples: [
      {
        en: "If I had known, I would have come.",
        vi: "Nếu tôi biết, tôi đã đến rồi.",
      },
    ],
  },
  {
    id: "conditional-mixed",
    category: "Conditionals",
    title: "Mixed Conditional",
    explanationVi:
      "Được sử dụng cho nguyên nhân trong quá khứ nhưng kết quả ở hiện tại.",
    structure: "If + Past Perfect, would + V(base)",
    examples: [
      {
        en: "If I had slept last night, I would not be tired now.",
        vi: "Nếu tối qua tôi ngủ thì giờ tôi đã không mệt.",
      },
    ],
  },

  // --- PASSIVE VOICE ---
  {
    id: "passive-present",
    category: "Passive Voice",
    title: "Passive Voice (Present Simple)",
    explanationVi:
      "Được sử dụng khi hành động hoặc đối tượng quan trọng hơn người thực hiện (Hiện tại đơn).",
    structure: "Object + am/is/are + V3/ed (+ by Subject)",
    examples: [
      {
        en: "The room is cleaned every day.",
        vi: "Căn phòng được dọn dẹp mỗi ngày.",
      },
    ],
  },
  {
    id: "passive-present-continuous",
    category: "Passive Voice",
    title: "Passive Voice (Present Continuous)",
    explanationVi: "Hành động đang xảy ra với đối tượng ngay lúc nói.",
    signalsEn: "Now, at the moment...",
    signalsVi: "Bây giờ, ngay lúc này...",
    structure: "Object + am/is/are + being + V3/ed",
    examples: [
      {
        en: "The house is being painted now.",
        vi: "Ngôi nhà đang được sơn ngay bây giờ.",
      },
    ],
  },
  {
    id: "passive-present-perfect",
    category: "Passive Voice",
    title: "Passive Voice (Present Perfect)",
    explanationVi:
      "Hành động đã xảy ra với đối tượng và còn kết quả ở hiện tại.",
    signalsEn: "Just, already, yet...",
    signalsVi: "Vừa mới, đã xong...",
    structure: "Object + have/has + been + V3/ed",
    examples: [
      { en: "My bike has been stolen.", vi: "Xe đạp của tôi đã bị lấy cắp." },
    ],
  },
  {
    id: "passive-past",
    category: "Passive Voice",
    title: "Passive Voice (Past Simple)",
    explanationVi: "Câu bị động cho các hành động trong quá khứ.",
    structure: "Object + was/were + V3/ed",
    examples: [
      {
        en: "The house was built in 1990.",
        vi: "Ngôi nhà được xây dựng năm 1990.",
      },
    ],
  },
  {
    id: "passive-future",
    category: "Passive Voice",
    title: "Passive Voice (Future Simple)",
    explanationVi: "Hành động sẽ xảy ra với đối tượng trong tương lai.",
    signalsEn: "Tomorrow, next week...",
    signalsVi: "Ngày mai, tuần tới...",
    structure: "Object + will + be + V3/ed",
    examples: [
      {
        en: "The contract will be signed tomorrow.",
        vi: "Hợp đồng sẽ được ký vào ngày mai.",
      },
    ],
  },

  // --- MODALS ---
  {
    id: "modals-can-could",
    category: "Modals",
    title: "Can / Could",
    explanationVi: "Được sử dụng để chỉ khả năng, sự cho phép và xác suất.",
    structure: "Subject + can/could + V(base)",
    examples: [
      { en: "I can swim.", vi: "Tôi có thể bơi." },
      { en: "Could you help me?", vi: "Bạn có thể giúp tôi không?" },
    ],
  },
  {
    id: "modals-may-might",
    category: "Modals",
    title: "May / Might",
    explanationVi:
      "Chỉ khả năng có thể xảy ra (không chắc chắn) hoặc xin phép (trang trọng).",
    structure: "Subject + may/might + V(base)",
    examples: [
      { en: "It might rain later.", vi: "Trời có thể sẽ mưa lát nữa." },
      { en: "May I come in?", vi: "Tôi có thể vào không?" },
    ],
  },
  {
    id: "modals-must-have-to",
    category: "Modals",
    title: "Must / Have to",
    explanationVi:
      "'Must' cho nghĩa vụ cá nhân; 'Have to' cho nghĩa vụ khách quan (luật lệ).",
    structure: "Subject + must/have to + V(base)",
    examples: [
      { en: "I must call my mom.", vi: "Tôi phải gọi cho mẹ (tôi muốn làm)." },
      {
        en: "You have to wear a uniform.",
        vi: "Bạn phải mặc đồng phục (quy định).",
      },
    ],
  },
  {
    id: "modals-should-ought-to",
    category: "Modals",
    title: "Should / Ought to",
    explanationVi: "Dùng để đưa ra lời khuyên hoặc ý kiến.",
    structure: "Subject + should/ought to + V(base)",
    examples: [
      { en: "You should see a doctor.", vi: "Bạn nên đi khám bác sĩ." },
      { en: "You ought to apologize.", vi: "Bạn nên xin lỗi." },
    ],
  },

  // --- RELATIVE CLAUSES ---
  {
    id: "relative-clauses-who-which",
    category: "Relative Clauses",
    title: "Who vs Which",
    explanationVi: "'Who' dùng cho người, 'Which' dùng cho vật.",
    structure: "Noun (person) + who + V... | Noun (thing) + which + V...",
    examples: [
      {
        en: "The man who called me is my uncle.",
        vi: "Người đàn ông gọi cho tôi là chú tôi.",
      },
      { en: "The car which I bought is red.", vi: "Chiếc xe tôi mua màu đỏ." },
    ],
  },
  {
    id: "relative-clauses-whom-whose",
    category: "Relative Clauses",
    title: "Whom / Whose",
    explanationVi:
      "'Whom' thay thế cho người (tân ngữ), 'Whose' chỉ sự sở hữu.",
    structure: "...Person + whom + S + V... | ...Noun + whose + Noun...",
    examples: [
      {
        en: "The woman whom you met is a doctor.",
        vi: "Người phụ nữ mà bạn gặp là bác sĩ.",
      },
      {
        en: "This is the boy whose bike was stolen.",
        vi: "Đây là cậu bé có chiếc xe đạp bị mất.",
      },
    ],
  },
  {
    id: "relative-clauses-that",
    category: "Relative Clauses",
    title: "Relative Pronoun 'That'",
    explanationVi: "Có thể thay thế Who/Which trong mệnh đề quan hệ xác định.",
    structure: "Noun + that + V/S...",
    examples: [
      {
        en: "The car that I bought is blue.",
        vi: "Chiếc xe mà tôi mua màu xanh.",
      },
    ],
  },
  {
    id: "relative-adverbs",
    category: "Relative Clauses",
    title: "Relative Adverbs (Where, When, Why)",
    explanationVi: "Where (nơi chốn), When (thời gian), Why (lý do).",
    structure: "Place + where | Time + when | Reason + why",
    examples: [
      {
        en: "This is the house where I was born.",
        vi: "Đây là ngôi nhà nơi tôi sinh ra.",
      },
      {
        en: "I remember the day when we met.",
        vi: "Tôi nhớ ngày mà chúng ta gặp nhau.",
      },
    ],
  },

  // --- COMPARISONS ---
  {
    id: "comparative",
    category: "Comparisons",
    title: "Comparatives",
    explanationVi: "Được sử dụng để so sánh hai sự vật.",
    structure: "Short adj + er + than | More + long adj + than",
    examples: [
      { en: "He is taller than me.", vi: "Anh ấy cao hơn tôi." },
      {
        en: "This book is more interesting than that one.",
        vi: "Cuốn sách này thú vị hơn cuốn kia.",
      },
    ],
  },
  {
    id: "superlative",
    category: "Comparisons",
    title: "Superlatives",
    explanationVi: "Được sử dụng để so sánh nhất (trong một nhóm).",
    structure: "The + short adj + est | The + most + long adj",
    examples: [
      {
        en: "He is the tallest boy in class.",
        vi: "Anh ấy là cậu bé cao nhất lớp.",
      },
      {
        en: "It is the most expensive car here.",
        vi: "Đó là chiếc xe đắt nhất ở đây.",
      },
    ],
  },

  // --- GERUNDS & INFINITIVES ---
  {
    id: "gerunds",
    category: "Gerunds Infinitives",
    title: "Gerunds (V-ing)",
    explanationVi:
      "Được sử dụng làm chủ ngữ hoặc sau một số động từ (enjoy, avoid, mind...).",
    structure: "Verb + -ing",
    examples: [
      { en: "Swimming is good for health.", vi: "Bơi lội tốt cho sức khỏe." },
      { en: "I enjoy reading.", vi: "Tôi thích đọc sách." },
    ],
  },
  {
    id: "infinitives",
    category: "Gerunds Infinitives",
    title: "Infinitives (to V)",
    explanationVi:
      "Được sử dụng sau một số động từ (want, decide, hope...) hoặc để chỉ mục đích.",
    structure: "To + V(base)",
    examples: [
      { en: "I want to learn English.", vi: "Tôi muốn học tiếng Anh." },
      {
        en: "I went to the store to buy milk.",
        vi: "Tôi đi đến cửa hàng để mua sữa.",
      },
    ],
  },
];
