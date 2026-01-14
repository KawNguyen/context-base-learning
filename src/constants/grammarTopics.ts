export type GrammarCategory =
  | "Tenses"
  | "Conditionals"
  | "Passive Voice"
  | "Modals"
  | "Relative Clauses"
  | "Gerunds Infinitives"
  | "Comparisons"
  | "Word Forms"
  | "Sentence Structure"
  | "Conjunctions"
  | "Articles"
  | "Reported Speech"
  | "Other";

export interface GrammarTopic {
  id: string;
  category: GrammarCategory;
  title: string;
  explanationVi: string;
  signalsEn?: string;
  signalsVi?: string;
  keywords?: string[];
  usageRules?: { title: string; contentVi: string }[];
  detailedSigns?: { sign: string; explanationVi: string }[];
  structure: string;
  examples: { en: string; vi: string }[];
}

export const grammarTopics: GrammarTopic[] = [
  // --- TENSES ---
  {
    id: "present-simple",
    category: "Tenses",
    title: "Present Simple (Hiện tại đơn)",
    explanationVi:
      "Được sử dụng cho thói quen, lịch trình, sự thật hiển nhiên và các tình huống cố định.",
    keywords: [
      "always",
      "usually",
      "often",
      "sometimes",
      "never",
      "every day",
      "once a week",
    ],
    usageRules: [
      {
        title: "Habits and Routines",
        contentVi:
          "Diễn tả những hành động lặp đi lặp lại hoặc thói quen ở hiện tại.",
      },
      {
        title: "General Truths",
        contentVi:
          "Diễn tả những sự thật hiển nhiên, chân lý hoặc các hiện tượng tự nhiên.",
      },
      {
        title: "Fixed Timetables",
        contentVi:
          "Diễn tả lịch trình, thời khóa biểu đã được sắp xếp sẵn (tàu xe, phim ảnh).",
      },
    ],
    detailedSigns: [
      {
        sign: "Trạng từ chỉ tần suất",
        explanationVi: "Always, usually, often, sometimes, rarely, never.",
      },
      {
        sign: "Cụm từ với Every",
        explanationVi: "Every day, every week, every month, every year.",
      },
      {
        sign: "Cụm từ chỉ số lần",
        explanationVi: "Once a week, twice a month, three times a year.",
      },
    ],
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
    title: "Present Continuous (Hiện tại tiếp diễn)",
    explanationVi:
      "Được sử dụng cho các hành động đang diễn ra ngay bây giờ hoặc các tình huống tạm thời.",
    keywords: ["now", "right now", "at the moment", "Look!", "Listen!"],
    usageRules: [
      {
        title: "Actions happening now",
        contentVi: "Diễn tả hành động đang xảy ra tại thời điểm nói.",
      },
      {
        title: "Temporary situations",
        contentVi:
          "Diễn tả những tình huống mang tính tạm thời, không kéo dài.",
      },
      {
        title: "Future plans",
        contentVi:
          "Diễn tả một kế hoạch hoặc sự sắp xếp chắc chắn sẽ xảy ra trong tương lai gần.",
      },
    ],
    detailedSigns: [
      {
        sign: "Trạng từ thời gian",
        explanationVi: "Now, right now, at the moment, at present.",
      },
      {
        sign: "Câu mệnh lệnh",
        explanationVi:
          "Look!, Listen!, Keep silent!, Watch out! (Hành động đang xảy ra gây chú ý).",
      },
    ],
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
    title: "Present Perfect (Hiện tại hoàn thành)",
    explanationVi:
      "Được sử dụng cho hành động trong quá khứ có kết quả ở hiện tại, hoặc kinh nghiệm không rõ thời gian.",
    keywords: [
      "just",
      "recently",
      "already",
      "yet",
      "ever",
      "never",
      "since",
      "for",
      "so far",
    ],
    usageRules: [
      {
        title: "Unspecified time",
        contentVi:
          "Hành động xảy ra trong quá khứ tại một thời điểm không xác định.",
      },
      {
        title: "Recent actions",
        contentVi:
          "Hành động vừa mới xảy ra và có kết quả hay ảnh hưởng tới hiện tại.",
      },
      {
        title: "Past to Present",
        contentVi: "Hành động bắt đầu trong quá khứ và kéo dài đến hiện tại.",
      },
    ],
    detailedSigns: [
      { sign: "Just, Recently, Lately", explanationVi: "Vừa mới xảy ra." },
      {
        sign: "Already (rồi), Yet (chưa)",
        explanationVi:
          "Already dùng trong câu (+) và (?), Yet dùng trong câu (-) và (?).",
      },
      {
        sign: "Since + mốc thời gian",
        explanationVi: "Từ khi... (since 2010, since last year).",
      },
      {
        sign: "For + khoảng thời gian",
        explanationVi: "Trong khoảng... (for 2 years, for a long time).",
      },
      {
        sign: "Ever, Never",
        explanationVi: "Ever (đã từng), Never (chưa từng).",
      },
    ],
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
    title: "Past Simple (Quá khứ đơn)",
    explanationVi:
      "Được sử dụng cho các hành động đã hoàn tất trong quá khứ tại một thời điểm cụ thể.",
    keywords: ["yesterday", "last night", "ago", "in 1990", "once"],
    usageRules: [
      {
        title: "Finished actions",
        contentVi:
          "Diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.",
      },
      {
        title: "Past habits",
        contentVi: "Diễn tả một thói quen hoặc tình trạng trong quá khứ.",
      },
      {
        title: "Sequence of actions",
        contentVi:
          "Kể lại một loạt các hành động xảy ra liên tiếp trong quá khứ.",
      },
    ],
    detailedSigns: [
      { sign: "Yesterday", explanationVi: "Hôm qua." },
      { sign: "Ago", explanationVi: "Cách đây... (two days ago, a year ago)." },
      {
        sign: "Last...",
        explanationVi: "Trước... (last week, last month, last year).",
      },
      {
        sign: "In + năm quá khứ",
        explanationVi: "Vào năm... (in 1995, in 2005).",
      },
    ],
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
    title: "Future Simple (Tương lai đơn)",
    explanationVi:
      "Được sử dụng cho quyết định tức thời, dự đoán không có bằng chứng, và lời hứa.",
    keywords: ["tomorrow", "next week", "soon", "someday", "probably"],
    usageRules: [
      {
        title: "Immediate decisions",
        contentVi: "Đưa ra quyết định ngay tại thời điểm nói.",
      },
      {
        title: "Predictions (Opinion)",
        contentVi: "Đưa ra dự đoán dựa trên quan điểm hoặc ý kiến cá nhân.",
      },
      {
        title: "Promises/Requests",
        contentVi: "Dùng để hứa hẹn, đe dọa hoặc yêu cầu sự giúp đỡ.",
      },
    ],
    detailedSigns: [
      {
        sign: "Trạng từ tương lai",
        explanationVi: "Tomorrow, next week/month, in the future, soon.",
      },
      {
        sign: "Động từ chỉ quan điểm",
        explanationVi: "Think, believe, suppose, hope, promise.",
      },
      {
        sign: "Trạng từ chỉ khả năng",
        explanationVi: "Probably, perhaps, maybe.",
      },
    ],
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
    title: "First Conditional (Câu điều kiện loại 1)",
    explanationVi:
      "Được sử dụng cho các khả năng có thực hoặc có thể xảy ra trong tương lai.",
    keywords: ["if", "will", "unless", "real possibility"],
    usageRules: [
      {
        title: "Real situations",
        contentVi:
          "Diễn tả một điều kiện có thể xảy ra và kết quả thực tế của nó.",
      },
      {
        title: "Plans/Warnings",
        contentVi:
          "Dùng để đưa ra lời hứa, lời cảnh báo hoặc kế hoạch cho tương lai.",
      },
    ],
    detailedSigns: [
      {
        sign: "If-clause",
        explanationVi: "Thì Hiện tại đơn (Present Simple).",
      },
      {
        sign: "Main-clause",
        explanationVi: "Will + động từ nguyên thể (V-base).",
      },
      { sign: "Unless", explanationVi: "Bằng với 'If not' (Nếu không...)." },
    ],
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
    title: "Second Conditional (Câu điều kiện loại 2)",
    explanationVi:
      "Được sử dụng cho các tình huống không có thật hoặc giả định trái với hiện tại/tương lai.",
    keywords: ["if", "would", "were", "unreal"],
    usageRules: [
      {
        title: "Unreal present",
        contentVi: "Diễn tả một tình huống giả định, không có thật ở hiện tại.",
      },
      {
        title: "Advice",
        contentVi: "Dùng cấu trúc 'If I were you' để đưa ra lời khuyên.",
      },
    ],
    detailedSigns: [
      {
        sign: "If-clause",
        explanationVi:
          "Thì Quá khứ đơn (Past Simple). Lưu ý: dùng 'were' cho tất cả các ngôi.",
      },
      {
        sign: "Main-clause",
        explanationVi: "Would + động từ nguyên thể (V-base).",
      },
    ],
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
    title: "Passive Voice: Present Simple (Câu bị động hiện tại đơn)",
    explanationVi:
      "Được sử dụng khi hành động hoặc đối tượng được tác động quan trọng hơn người thực hiện hành động.",
    keywords: ["be + V3/ed", "by", "is/am/are"],
    usageRules: [
      {
        title: "Focus on object",
        contentVi:
          "Nhấn mạnh vào đối tượng chịu tác động thay vì người thực hiện.",
      },
      {
        title: "Unknown doer",
        contentVi:
          "Dùng khi người thực hiện hành động không quan trọng hoặc không rõ là ai.",
      },
    ],
    detailedSigns: [
      {
        sign: "Động từ to be",
        explanationVi: "is/am/are (theo số và ngôi của tân ngữ).",
      },
      {
        sign: "V3/ed",
        explanationVi: "Động từ chính luôn ở dạng quá khứ phân từ.",
      },
      {
        sign: "By + Subject",
        explanationVi: "Dùng 'by' để chỉ người thực hiện (nếu cần thiết).",
      },
    ],
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
    title: "Can / Could (Khả năng & Yêu cầu)",
    explanationVi:
      "Được sử dụng để chỉ khả năng, sự cho phép và các yêu cầu lịch sự.",
    keywords: ["ability", "permission", "requests", "past ability"],
    usageRules: [
      {
        title: "Ability",
        contentVi:
          "'Can' dùng cho khả năng ở hiện tại; 'Could' dùng cho khả năng trong quá khứ.",
      },
      {
        title: "Permission & Requests",
        contentVi:
          "'Can' dùng cho lời hỏi thân mật; 'Could' trang trọng và lịch sự hơn.",
      },
      {
        title: "Possibility",
        contentVi: "Diễn tả một khả năng có thể xảy ra (thường là 'Could').",
      },
    ],
    detailedSigns: [
      {
        sign: "Can (Present)",
        explanationVi: "I can speak English. (Tôi có thể nói tiếng Anh).",
      },
      {
        sign: "Could (Past)",
        explanationVi:
          "He could swim when he was 5. (Anh ấy đã biết bơi khi lên 5).",
      },
      {
        sign: "Requests",
        explanationVi:
          "Can you help me? (Thân mật) vs Could you help me? (Lịch sự).",
      },
    ],
    structure: "Subject + can/could + V(base)",
    examples: [
      { en: "I can swim.", vi: "Tôi có thể bơi." },
      { en: "Could you help me?", vi: "Bạn có thể giúp tôi không? (Lịch sự)" },
    ],
  },
  {
    id: "modals-may-might",
    category: "Modals",
    title: "May / Might (Khả năng & Xin phép)",
    explanationVi:
      "Dùng để chỉ khả năng có thể xảy ra (không chắc chắn) hoặc xin phép một cách trang trọng.",
    keywords: ["possibility", "formal permission", "weak probability"],
    usageRules: [
      {
        title: "Permission (Formal)",
        contentVi:
          "'May' dùng để xin phép một cách rất trang trọng (lớp học, văn phòng).",
      },
      {
        title: "Probability",
        contentVi:
          "'May' chỉ khả năng xảy ra cao hơn (~50%), 'Might' chỉ khả năng thấp hơn (~20-30%).",
      },
    ],
    detailedSigns: [
      {
        sign: "May (Higher probability)",
        explanationVi: "It may rain. (Có thể sẽ mưa - khả năng khá cao).",
      },
      {
        sign: "Might (Lower probability)",
        explanationVi:
          "It might rain. (Có thể sẽ mưa - nhưng không chắc chắn lắm).",
      },
      {
        sign: "Permission",
        explanationVi:
          "May I borrow your pen? (Tôi có thể mượn bút của bạn không? - Trang trọng).",
      },
    ],
    structure: "Subject + may/might + V(base)",
    examples: [
      {
        en: "It might rain later.",
        vi: "Trời có thể sẽ mưa lát nữa (chưa chắc chắn).",
      },
      { en: "May I come in?", vi: "Tôi có thể vào không? (Rất trang trọng)." },
    ],
  },
  {
    id: "modals-must-have-to",
    category: "Modals",
    title: "Must / Have to (Sự bắt buộc)",
    explanationVi:
      "Cả hai đều diễn tả sự bắt buộc, nhưng có sự khác biệt quan trọng về nguồn gốc của sự bắt buộc đó.",
    keywords: ["obligation", "necessity", "prohibition", "strong advice"],
    usageRules: [
      {
        title: "Must (Internal)",
        contentVi: "Nghĩa vụ xuất phát từ cảm xúc hoặc ý muốn của người nói.",
      },
      {
        title: "Have to (External)",
        contentVi:
          "Nghĩa vụ do luật lệ, quy định hoặc tình huống bên ngoài áp đặt.",
      },
      {
        title: "NEGATIVE (Important!)",
        contentVi:
          "'Mustn't' dùng để chỉ sự CẤM ĐOÁN; 'Don't have to' dùng để chỉ sự KHÔNG CẦN THIẾT.",
      },
    ],
    detailedSigns: [
      {
        sign: "Must (Personal)",
        explanationVi: "I must study. (Tôi thấy mình cần phải học).",
      },
      {
        sign: "Have to (Rules)",
        explanationVi:
          "I have to wear a uniform. (Quy định trường học bắt tôi mặc).",
      },
      {
        sign: "Mustn't (Cấm)",
        explanationVi: "You mustn't smoke. (Bạn không được phép hút thuốc).",
      },
      {
        sign: "Don't have to (Thoải mái)",
        explanationVi:
          "You don't have to go. (Bạn không cần phải đi - tùy bạn).",
      },
    ],
    structure: "Subject + must/have to + V(base)",
    examples: [
      {
        en: "I must call my mom.",
        vi: "Tôi phải gọi cho mẹ (tự tôi thấy cần).",
      },
      {
        en: "You have to wear a uniform.",
        vi: "Bạn phải mặc đồng phục (quy định của tổ chức).",
      },
    ],
  },
  {
    id: "modals-should-ought-to",
    category: "Modals",
    title: "Should / Ought to (Lời khuyên)",
    explanationVi:
      "Dùng để đưa ra lời khuyên, ý kiến hoặc diễn tả sự mong đợi.",
    keywords: ["advice", "opinion", "expectation", "mild obligation"],
    usageRules: [
      {
        title: "Giving Advice",
        contentVi: "Dùng để khuyên ai đó nên hoặc không nên làm gì.",
      },
      {
        title: "Expectation",
        contentVi: "Diễn tả một điều gì đó mà chúng ta mong đợi sẽ xảy ra.",
      },
    ],
    detailedSigns: [
      {
        sign: "Should",
        explanationVi:
          "Phổ biến hơn, dùng cho cả khuyên bảo và ý kiến cá nhân.",
      },
      {
        sign: "Ought to",
        explanationVi:
          "Mang sắc thái trang trọng hơn một chút, thường chỉ nhiệm vụ hoặc đạo đức.",
      },
    ],
    structure: "Subject + should/ought to + V(base)",
    examples: [
      { en: "You should see a doctor.", vi: "Bạn nên đi khám bác sĩ." },
      {
        en: "You ought to apologize.",
        vi: "Bạn nên xin lỗi (vì đó là điều đúng đắn).",
      },
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

  // --- WORD FORMS ---
  {
    id: "adjectives-order",
    category: "Word Forms",
    title: "Order of Adjectives (Thứ tự tính từ)",
    explanationVi:
      "Khi dùng nhiều tính từ trước một danh từ, chúng ta tuân theo thứ tự OSASCOMP: Opinion (Ý kiến) - Size (Kích cỡ) - Age (Tuổi tác) - Shape (Hình dáng) - Color (Màu sắc) - Origin (Nguồn gốc) - Material (Chất liệu) - Purpose (Mục đích).",
    signalsVi:
      "Quy tắc OSASCOMP: Ý kiến > Kích thước > Tuổi > Hình dạng > Màu > Nguồn gốc > Chất liệu > Mục đích.",
    structure:
      "Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material -> Purpose + Noun",
    examples: [
      {
        en: "A beautiful large old round black Vietnamese wooden table.",
        vi: "Một cái bàn gỗ Việt Nam hình tròn, màu đen, cũ, to và đẹp.",
      },
      {
        en: "An expensive small new red car.",
        vi: "Một chiếc xe hơi màu đỏ mới, nhỏ và đắt tiền.",
      },
    ],
  },
  {
    id: "adjectives-ed-ing",
    category: "Word Forms",
    title: "Participial Adjectives (-ed vs -ing)",
    explanationVi:
      "Tính từ đuôi '-ed' dùng để chỉ cảm xúc của con người. Tính từ đuôi '-ing' dùng để chỉ tính chất của sự vật, sự việc gây ra cảm xúc đó.",
    structure: "-ed (feelings) | -ing (characteristics)",
    examples: [
      { en: "I am bored.", vi: "Tôi thấy chán (cảm xúc của tôi)." },
      {
        en: "The movie is boring.",
        vi: "Bộ phim này chán (tính chất của bộ phim).",
      },
      { en: "She is interested in art.", vi: "Cô ấy quan tâm đến nghệ thuật." },
      { en: "Art is interesting.", vi: "Nghệ thuật thì thú vị." },
    ],
  },
  {
    id: "adverbs-categories",
    category: "Word Forms",
    title: "Types and Positions of Adverbs",
    explanationVi:
      "Trạng từ được chia thành nhiều loại: Cách thức (Manner), Nơi chốn (Place), Thời gian (Time), Tần suất (Frequency), Mức độ (Degree). Vị trí của chúng phụ thuộc vào loại trạng từ.",
    signalsVi:
      "Manner: nhanh/chậm. Place: ở đây/kia. Time: hôm nay/mai. Frequency: luôn luôn/thường xuyên. Degree: rất/quá.",
    structure:
      "Adv of Frequency usually goes before main verb. Adv of Manner usually goes after verb/object.",
    examples: [
      {
        en: "He always (Freq) gets up early.",
        vi: "Anh ấy luôn luôn dậy sớm.",
      },
      { en: "She sings beautifully (Manner).", vi: "Cô ấy hát hay." },
      {
        en: "The weather is extremely (Degree) hot.",
        vi: "Thời tiết cực kỳ nóng.",
      },
    ],
  },

  // --- SENTENCE STRUCTURE ---
  {
    id: "basic-sentence-patterns",
    category: "Sentence Structure",
    title: "Basic Sentence Patterns (S-V-O, S-V-Adj)",
    explanationVi:
      "Giúp xác định vị trí của chủ ngữ (S), động từ (V), tân ngữ (O) và bổ ngữ (C).",
    structure: "S + V | S + V + O | S + V + Adj",
    examples: [
      { en: "Birds fly. (S-V)", vi: "Chim bay." },
      { en: "I love cats. (S-V-O)", vi: "Tôi yêu mèo." },
      { en: "She looks happy. (S-V-Adj)", vi: "Cô ấy trông hạnh phúc." },
    ],
  },
  {
    id: "complex-sentence-patterns",
    category: "Sentence Structure",
    title: "Complex Sentence Patterns (S-V-IO-DO, S-V-O-C)",
    explanationVi:
      "Một số động từ đòi hỏi hai tân ngữ (Trực tiếp & Gián tiếp) hoặc một tân ngữ kèm bổ ngữ để hoàn thành nghĩa của câu.",
    signalsVi:
      "IO: Gián tiếp (người nhận). DO: Trực tiếp (vật được trao). OC: Bổ ngữ cho tân ngữ.",
    structure: "S + V + IO + DO | S + V + O + OC",
    examples: [
      {
        en: "He gave me (IO) a book (DO).",
        vi: "Anh ấy đưa cho tôi một cuốn sách.",
      },
      {
        en: "The news made him (O) happy (OC).",
        vi: "Tin tức đó làm anh ấy hạnh phúc.",
      },
      {
        en: "They elected him (O) president (OC).",
        vi: "Họ bầu anh ấy làm tổng thống.",
      },
    ],
  },

  // --- CONJUNCTIONS ---
  {
    id: "coordinating-conjunctions",
    category: "Conjunctions",
    title: "Coordinating Conjunctions (FANBOYS)",
    explanationVi:
      "Nối các từ hoặc mệnh đề độc lập có vai trò tương đương (For, And, Nor, But, Or, Yet, So).",
    structure: "Independent Clause, + [FANBOYS] + Independent Clause",
    examples: [
      { en: "I like tea and coffee.", vi: "Tôi thích trà và cà phê." },
      {
        en: "He was tired, so he went to bed early.",
        vi: "Anh ấy mệt, nên anh ấy đi ngủ sớm.",
      },
    ],
  },
  {
    id: "subordinating-conjunctions",
    category: "Conjunctions",
    title: "Subordinating Conjunctions (Liên từ phụ thuộc)",
    explanationVi:
      "Dùng để bắt đầu mệnh đề phụ thuộc, diễn tả: Thời gian (When, While, Since), Lý do (Because, As, Since), Sự đối lập (Although, Even though), Điều kiện (If, Unless).",
    structure: "Subordinating Conjunction + Dependent Clause, Main Clause",
    examples: [
      {
        en: "Because it rained, we stayed home.",
        vi: "Bởi vì trời mưa, chúng tôi ở nhà.",
      },
      {
        en: "Although he is rich, he is humble.",
        vi: "Mặc dù anh ấy giàu, anh ấy rất khiêm tốn.",
      },
    ],
  },
  {
    id: "correlative-conjunctions",
    category: "Conjunctions",
    title: "Correlative Conjunctions (Liên từ tương quan)",
    explanationVi:
      "Các cặp từ đi đôi với nhau để nối các thành phần tương đương.",
    structure: "Both...and | Either...or | Neither...nor | Not only...but also",
    examples: [
      {
        en: "Both coffee and tea are served.",
        vi: "Cả cà phê và trà đều được phục vụ.",
      },
      {
        en: "Not only is he smart but also kind.",
        vi: "Anh ấy không những thông minh mà còn tốt bụng.",
      },
    ],
  },

  // --- ARTICLES ---
  {
    id: "articles-a-an-the",
    category: "Articles",
    title: "Articles: A, An, The (Basic & Special)",
    explanationVi:
      "A/An dùng cho danh từ số ít chưa xác định. THE dùng cho danh từ đã xác định hoặc duy nhất. 'The' cũng dùng cho: Dãy núi, Quần đảo, Sông ngòi, Đại dương, Tên nước có số nhiều (The USA, The Netherlands).",
    structure: "A/An + Noun | The + [Unique/Specific/Group]",
    examples: [
      {
        en: "A doctor is needed.",
        vi: "Cần một bác sĩ (bất kỳ ai là bác sĩ).",
      },
      {
        en: "The Atlantic Ocean is vast.",
        vi: "Đại dương Đại Tây Dương rất rộng lớn.",
      },
    ],
  },
  {
    id: "zero-article",
    category: "Articles",
    title: "Zero Article (Khi nào không dùng mạo từ)",
    explanationVi:
      "Không dùng mạo từ trước: Danh từ số nhiều/không đếm được nghĩa chung chung, Môn thể thao (football), Các bữa ăn (breakfast), Ngôn ngữ (English), Một số danh từ trừu tượng.",
    structure: "No article + plural/uncountable/abstract nouns",
    examples: [
      {
        en: "I love music.",
        vi: "Tôi yêu âm nhạc (chung chung, không dùng mạo từ).",
      },
      { en: "We have lunch at 12.", vi: "Chúng tôi ăn trưa lúc 12 giờ." },
      { en: "He plays tennis every day.", vi: "Anh ấy chơi tennis mỗi ngày." },
    ],
  },

  // --- REPORTED SPEECH ---
  {
    id: "reported-speech-tense-shift",
    category: "Reported Speech",
    title: "Reported Speech: Tense Shifts (Lùi thì)",
    explanationVi:
      "Khi động từ tường thuật ở quá khứ (said/told), chúng ta lùi thì: Hiện tại đơn -> Quá khứ đơn, Hiện tại HT -> Quá khứ HT, Will -> Would, Can -> Could.",
    structure: "S + said (that) + S + V (Lùi 1 thì về quá khứ)",
    examples: [
      { en: '"I am tired", he said.', vi: '"Tôi mệt", anh ấy đã nói.' },
      { en: "He said that he was tired.", vi: "Anh ấy nói rằng anh ấy mệt." },
      { en: "He said, 'I have finished'.", vi: "Anh ấy nói: 'Tôi đã xong'." },
      { en: "He said he had finished.", vi: "Anh ấy nói anh ấy đã xong." },
    ],
  },
  {
    id: "reported-speech-time-place",
    category: "Reported Speech",
    title: "Reported Speech: Time & Place Changes",
    explanationVi:
      "Cần thay đổi các trạng từ chỉ thời gian và nơi chốn phù hợp với ngữ cảnh gián tiếp.",
    signalsVi:
      "Now -> Then. Today -> That day. Tomorrow -> The next day. Yesterday -> The day before. Here -> There. This -> That.",
    structure: "Change markers: now, today, tomorrow, yesterday, here, this",
    examples: [
      {
        en: 'She said: "I will go home tomorrow."',
        vi: 'Cô ấy nói: "Tôi sẽ về nhà vào ngày mai."',
      },
      {
        en: "She said she would go home the next day.",
        vi: "Cô ấy nói cô ấy sẽ về nhà vào ngày hôm sau.",
      },
    ],
  },
];
