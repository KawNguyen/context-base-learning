export type GrammarCategory =
  | "Tenses"
  | "Conditionals"
  | "Passive Voice"
  | "Modals"
  | "Relative Clauses"
  | "Gerunds & Infinitives"
  | "Comparisons"
  | "Other";

export interface GrammarTopic {
  id: string;
  category: GrammarCategory;
  title: string;
  explanationEn: string;
  explanationVi: string;
  signalsEn?: string;
  signalsVi?: string;
  structure: string;
  examples: { en: string; vi: string }[];
  exercise: {
    questionEn: string;
    questionVi: string;
    options: string[];
    correct: number;
    explanationEn: string;
    explanationVi: string;
  };
}

export const grammarTopics: GrammarTopic[] = [
  // --- TENSES ---
  {
    id: "present-simple",
    category: "Tenses",
    title: "Present Simple",
    explanationEn:
      "Used for habits, routines, general truths, and permanent situations.",
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
    exercise: {
      questionEn: "He usually ____ to work by bus.",
      questionVi: "Anh ấy thường ____ đi làm bằng xe buýt.",
      options: ["go", "goes", "going", "went"],
      correct: 1,
      explanationEn:
        "With 'He' (singular subject), we add 'es' to 'go' -> 'goes'.",
      explanationVi:
        "Với chủ ngữ 'He' (ngôi thứ 3 số ít), chúng ta thêm 'es' vào sau 'go' -> 'goes'.",
    },
  },
  {
    id: "present-continuous",
    category: "Tenses",
    title: "Present Continuous",
    explanationEn:
      "Used for actions happening right now or temporary situations.",
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
    exercise: {
      questionEn: "Listen! Someone ____ the piano.",
      questionVi: "Nghe kìa! Ai đó ____ đàn piano.",
      options: ["play", "plays", "is playing", "played"],
      correct: 2,
      explanationEn: "'Listen!' implies the action is happening right now.",
      explanationVi: "'Listen!' ngụ ý hành động đang xảy ra ngay bây giờ.",
    },
  },
  {
    id: "present-perfect",
    category: "Tenses",
    title: "Present Perfect",
    explanationEn:
      "Used for past actions with present results, or experiences without a specific time.",
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
    exercise: {
      questionEn: "I ____ this movie three times.",
      questionVi: "Tôi ____ bộ phim này ba lần rồi.",
      options: ["see", "saw", "have seen", "seeing"],
      correct: 2,
      explanationEn: "Repeated actions up to now use the Present Perfect.",
      explanationVi:
        "Hành động lặp đi lặp lại tính đến thời điểm hiện tại sử dụng thì Hiện tại hoàn thành.",
    },
  },
  {
    id: "present-perfect-continuous",
    category: "Tenses",
    title: "Present Perfect Continuous",
    explanationEn:
      "Used for actions that started in the past and continue to the present, emphasizing duration.",
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
    exercise: {
      questionEn: "It ____ raining for 3 hours.",
      questionVi: "Trời ____ mưa suốt 3 tiếng đồng hồ rồi.",
      options: ["has been", "is", "was", "will be"],
      correct: 0,
      explanationEn:
        "Emphasizes the duration (for 3 hours) -> Present Perfect Continuous.",
      explanationVi:
        "Nhấn mạnh khoảng thời gian (suốt 3 tiếng) -> thì Hiện tại hoàn thành tiếp diễn.",
    },
  },
  {
    id: "past-simple",
    category: "Tenses",
    title: "Past Simple",
    explanationEn: "Used for actions completed in the past at a specific time.",
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
    exercise: {
      questionEn: "We ____ a movie last night.",
      questionVi: "Chúng tôi ____ một bộ phim tối qua.",
      options: ["watch", "watched", "watching", "watches"],
      correct: 1,
      explanationEn: "'Last night' requires the Past Simple tense.",
      explanationVi: "'Last night' (tối qua) yêu cầu sử dụng thì Quá khứ đơn.",
    },
  },
  {
    id: "past-continuous",
    category: "Tenses",
    title: "Past Continuous",
    explanationEn:
      "Used for actions happening at a specific time in the past or when another action interrupted.",
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
    exercise: {
      questionEn: "I ____ when the phone rang.",
      questionVi: "Tôi ____ khi điện thoại reo.",
      options: ["sleep", "slept", "was sleeping", "sleeping"],
      correct: 2,
      explanationEn:
        "The action 'sleeping' was in progress when the phone rang -> Past Continuous.",
      explanationVi:
        "Hành động 'đang ngủ' đang diễn ra thì điện thoại reo -> thì Quá khứ tiếp diễn.",
    },
  },
  {
    id: "past-perfect",
    category: "Tenses",
    title: "Past Perfect",
    explanationEn:
      "Used for an action that happened before another action in the past.",
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
    exercise: {
      questionEn: "By the time we got to the cinema, the movie ____.",
      questionVi: "Vào lúc chúng tôi đến rạp chiếu phim, bộ phim ____.",
      options: ["started", "starts", "had started", "has started"],
      correct: 2,
      explanationEn:
        "The movie started BEFORE we arrived (past action) -> Past Perfect.",
      explanationVi:
        "Bộ phim đã bắt đầu TRƯỚC KHI chúng tôi đến (hành động quá khứ xảy ra trước 1 hành động khác) -> thì Quá khứ hoàn thành.",
    },
  },
  {
    id: "future-simple",
    category: "Tenses",
    title: "Future Simple (Will)",
    explanationEn:
      "Used for instant decisions, predictions without evidence, and promises.",
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
    exercise: {
      questionEn: "Don't worry, I ____ you.",
      questionVi: "Đừng lo, tôi ____ bạn.",
      options: ["help", "will help", "helping", "helped"],
      correct: 1,
      explanationEn: "Using 'will' to make a promise or offer help.",
      explanationVi: "Sử dụng 'will' để hứa hẹn hoặc đề nghị giúp đỡ.",
    },
  },
  {
    id: "near-future",
    category: "Tenses",
    title: "Near Future (Be going to)",
    explanationEn:
      "Used for plans, intentions, or predictions based on evidence.",
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
    exercise: {
      questionEn: "Look! He ____ fall.",
      questionVi: "Nhìn kìa! Anh ấy ____ ngã.",
      options: ["will", "is going to", "goes to", "go"],
      correct: 1,
      explanationEn: "Prediction based on evidence (Look!) -> Be going to.",
      explanationVi:
        "Dự đoán dựa trên bằng chứng (Nhìn kìa!) -> Cấu trúc Be going to.",
    },
  },
  {
    id: "future-continuous",
    category: "Tenses",
    title: "Future Continuous",
    explanationEn:
      "Used for actions that will be in progress at a specific time in the future.",
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
    exercise: {
      questionEn: "Don't call me at 8. I ____ dinner.",
      questionVi: "Đừng gọi cho tôi lúc 8 giờ. Tôi ____ bữa tối.",
      options: ["will eat", "am eating", "will be eating", "ate"],
      correct: 2,
      explanationEn:
        "Action in progress at a specific future time -> Future Continuous.",
      explanationVi:
        "Hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai -> thì Tương lai tiếp diễn.",
    },
  },

  // --- CONDITIONALS ---
  {
    id: "conditional-0",
    category: "Conditionals",
    title: "Zero Conditional",
    explanationEn: "Used for general truths and scientific facts.",
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
    exercise: {
      questionEn: "If you mix red and blue, you ____ purple.",
      questionVi: "Nếu bạn trộn màu đỏ và xanh dương, bạn ____ màu tím.",
      options: ["get", "got", "will get", "getting"],
      correct: 0,
      explanationEn:
        "Facts correspond to Zero Conditional: Present Simple in both clauses.",
      explanationVi:
        "Sự thật hiển nhiên tương ứng với Câu điều kiện loại 0: thì Hiện tại đơn ở cả hai mệnh đề.",
    },
  },
  {
    id: "conditional-1",
    category: "Conditionals",
    title: "First Conditional",
    explanationEn: "Used for real possibilities in the future.",
    explanationVi: "Được sử dụng cho các khả năng có thực trong tương lai.",
    structure: "If + Present Simple, will + V(base)",
    examples: [
      {
        en: "If it rains, I will stay home.",
        vi: "Nếu trời mưa, tôi sẽ ở nhà.",
      },
      { en: "If you study, you will pass.", vi: "Nếu bạn học, bạn sẽ đậu." },
    ],
    exercise: {
      questionEn: "If he ____, we will go without him.",
      questionVi: "Nếu anh ấy ____, chúng tôi sẽ đi mà không có anh ấy.",
      options: ["don't come", "doesn't come", "didn't come", "won't come"],
      correct: 1,
      explanationEn: "First Conditional: If clause uses Present Simple.",
      explanationVi:
        "Câu điều kiện loại 1: Mệnh đề If sử dụng thì Hiện tại đơn.",
    },
  },
  {
    id: "conditional-2",
    category: "Conditionals",
    title: "Second Conditional",
    explanationEn:
      "Used for unreal or hypothetical situations in the present/future.",
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
    exercise: {
      questionEn: "If I ____ the lottery, I would travel the world.",
      questionVi: "Nếu tôi ____ xổ số, tôi sẽ đi du lịch khắp thế giới.",
      options: ["win", "won", "have won", "winning"],
      correct: 1,
      explanationEn: "Second Conditional uses Past Simple in the If-clause.",
      explanationVi:
        "Câu điều kiện loại 2 sử dụng thì Quá khứ đơn trong mệnh đề If.",
    },
  },
  {
    id: "conditional-3",
    category: "Conditionals",
    title: "Third Conditional",
    explanationEn: "Used for unreal situations in the past (regrets).",
    explanationVi:
      "Được sử dụng cho các tình huống không có thật trong quá khứ (sự tiếc nuối).",
    structure: "If + Past Perfect, would have + V3/ed",
    examples: [
      {
        en: "If I had known, I would have come.",
        vi: "Nếu tôi biết, tôi đã đến rồi.",
      },
    ],
    exercise: {
      questionEn: "If she had studied, she ____ the exam.",
      questionVi: "Nếu cô ấy đã học, cô ấy ____ kỳ thi.",
      options: ["would pass", "will pass", "would have passed", "passed"],
      correct: 2,
      explanationEn:
        "Third Conditional requires 'would have + V3' in the main clause.",
      explanationVi:
        "Câu điều kiện loại 3 yêu cầu 'would have + V3' ở mệnh đề chính.",
    },
  },
  {
    id: "conditional-mixed",
    category: "Conditionals",
    title: "Mixed Conditional",
    explanationEn: "Used for past causes with present results.",
    explanationVi:
      "Được sử dụng cho nguyên nhân trong quá khứ nhưng kết quả ở hiện tại.",
    structure: "If + Past Perfect, would + V(base)",
    examples: [
      {
        en: "If I had slept last night, I would not be tired now.",
        vi: "Nếu tối qua tôi ngủ thì giờ tôi đã không mệt.",
      },
    ],
    exercise: {
      questionEn: "If he had taken the map, he ____ lost now.",
      questionVi: "Nếu anh ấy đã mang theo bản đồ, bây giờ anh ấy ____ lạc đường.",
      options: ["wouldn't be", "won't be", "wouldn't have been", "isn't"],
      correct: 0,
      explanationEn:
        "Past Condition (had taken) + Present Result (now) -> Mixed Conditional.",
      explanationVi:
        "Điều kiện trong quá khứ (had taken) + Kết quả ở hiện tại (now) -> Câu điều kiện hỗn hợp.",
    },
  },

  // --- PASSIVE VOICE ---
  {
    id: "passive-present",
    category: "Passive Voice",
    title: "Passive Voice (Present Simple)",
    explanationEn:
      "Used when the action or the object is more important than the subject.",
    explanationVi:
      "Được sử dụng khi hành động hoặc đối tượng quan trọng hơn người thực hiện (Hiện tại đơn).",
    structure: "Object + am/is/are + V3/ed (+ by Subject)",
    examples: [
      {
        en: "The room is cleaned every day.",
        vi: "Căn phòng được dọn dẹp mỗi ngày.",
      },
    ],
    exercise: {
      questionEn: "English ____ in many countries.",
      questionVi: "Tiếng Anh ____ ở nhiều quốc gia.",
      options: ["speak", "speaks", "is spoken", "spoken"],
      correct: 2,
      explanationEn: "Passive voice: be + past participle.",
      explanationVi: "Câu bị động: be + quá khứ phân từ (V3/ed).",
    },
  },
  {
    id: "passive-present-continuous",
    category: "Passive Voice",
    title: "Passive Voice (Present Continuous)",
    explanationEn: "Action currently happening to the object.",
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
    exercise: {
      questionEn: "A new bridge ____ built across the river.",
      questionVi: "Một cây cầu mới ____ xây qua sông.",
      options: ["is building", "is being built", "builds", "built"],
      correct: 1,
      explanationEn: "Action happening now to the object -> is being built.",
      explanationVi:
        "Hành động đang xảy ra với đối tượng -> is being built (Bị động thì HTTD).",
    },
  },
  {
    id: "passive-present-perfect",
    category: "Passive Voice",
    title: "Passive Voice (Present Perfect)",
    explanationEn: "Action happened to object with result in present.",
    explanationVi:
      "Hành động đã xảy ra với đối tượng và còn kết quả ở hiện tại.",
    signalsEn: "Just, already, yet...",
    signalsVi: "Vừa mới, đã xong...",
    structure: "Object + have/has + been + V3/ed",
    examples: [
      { en: "My bike has been stolen.", vi: "Xe đạp của tôi đã bị lấy cắp." },
    ],
    exercise: {
      questionEn: "The work ____ yet.",
      questionVi: "Công việc ____.",
      options: [
        "hasn't been finished",
        "hasn't finished",
        "didn't finish",
        "wasn't finished",
      ],
      correct: 0,
      explanationEn:
        "Passive + Present Perfect with 'yet' -> hasn't been finished.",
      explanationVi:
        "Câu bị động + thì Hiện tại hoàn thành với 'yet' -> hasn't been finished.",
    },
  },
  {
    id: "passive-past",
    category: "Passive Voice",
    title: "Passive Voice (Past Simple)",
    explanationEn: "Passive voice for past actions.",
    explanationVi: "Câu bị động cho các hành động trong quá khứ.",
    structure: "Object + was/were + V3/ed",
    examples: [
      {
        en: "The house was built in 1990.",
        vi: "Ngôi nhà được xây dựng năm 1990.",
      },
    ],
    exercise: {
      questionEn: "The letter ____ yesterday.",
      questionVi: "Lá thư ____ ngày hôm qua.",
      options: ["send", "sent", "was sent", "is sent"],
      correct: 2,
      explanationEn: "Past passive: was/were + V3.",
      explanationVi: "Bị động thì quá khứ: was/were + V3/ed.",
    },
  },
  {
    id: "passive-future",
    category: "Passive Voice",
    title: "Passive Voice (Future Simple)",
    explanationEn: "Action will happen to the object in the future.",
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
    exercise: {
      questionEn: "The results ____ next Monday.",
      questionVi: "Kết quả ____ vào thứ Hai tới.",
      options: [
        "will announce",
        "will be announced",
        "are announced",
        "announced",
      ],
      correct: 1,
      explanationEn: "Future passive: will be + V3.",
      explanationVi: "Bị động thì tương lai: will be + V3/ed.",
    },
  },

  // --- MODALS ---
  {
    id: "modals-can-could",
    category: "Modals",
    title: "Can / Could",
    explanationEn: "Used for ability, permission, and probability.",
    explanationVi: "Được sử dụng để chỉ khả năng, sự cho phép và xác suất.",
    structure: "Subject + can/could + V(base)",
    examples: [
      { en: "I can swim.", vi: "Tôi có thể bơi." },
      { en: "Could you help me?", vi: "Bạn có thể giúp tôi không?" },
    ],
    exercise: {
      questionEn: "When I was young, I ____ run very fast.",
      questionVi: "Khi tôi còn trẻ, tôi ____ chạy rất nhanh.",
      options: ["can", "could", "will", "should"],
      correct: 1,
      explanationEn: "'Could' is the past form of 'Can', used for past ability.",
      explanationVi: "'Could' là dạng quá khứ của 'Can', dùng cho khả năng trong quá khứ.",
    },
  },
  {
    id: "modals-may-might",
    category: "Modals",
    title: "May / Might",
    explanationEn:
      "Used to express possibility (50% or less) or permission (formal).",
    explanationVi:
      "Chỉ khả năng có thể xảy ra (không chắc chắn) hoặc xin phép (trang trọng).",
    structure: "Subject + may/might + V(base)",
    examples: [
      { en: "It might rain later.", vi: "Trời có thể sẽ mưa lát nữa." },
      { en: "May I come in?", vi: "Tôi có thể vào không?" },
    ],
    exercise: {
      questionEn: "Take an umbrella. It ____ rain.",
      questionVi: "Hãy mang theo ô. Trời ____ mưa đấy.",
      options: ["must", "might", "should", "has to"],
      correct: 1,
      explanationEn: "Possibility: 'might' is suitable here.",
      explanationVi: "Khả năng: 'might' (có lẽ) là phù hợp ở đây.",
    },
  },
  {
    id: "modals-must-have-to",
    category: "Modals",
    title: "Must / Have to",
    explanationEn:
      "'Must' for personal obligation; 'Have to' for external obligation.",
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
    exercise: {
      questionEn: "We ____ stop at the red light.",
      questionVi: "Chúng ta ____ dừng lại khi có đèn đỏ.",
      options: ["can", "may", "must", "could"],
      correct: 2,
      explanationEn: "It is a strict obligation/law.",
      explanationVi: "Đó là một nghĩa vụ bắt buộc hoặc luật lệ.",
    },
  },
  {
    id: "modals-should-ought-to",
    category: "Modals",
    title: "Should / Ought to",
    explanationEn: "Used to give advice or opinion.",
    explanationVi: "Dùng để đưa ra lời khuyên hoặc ý kiến.",
    structure: "Subject + should/ought to + V(base)",
    examples: [
      { en: "You should see a doctor.", vi: "Bạn nên đi khám bác sĩ." },
      { en: "You ought to apologize.", vi: "Bạn nên xin lỗi." },
    ],
    exercise: {
      questionEn: "You ____ smoke. It's bad for you.",
      questionVi: "Bạn ____ hút thuốc. Nó có hại cho bạn.",
      options: ["shouldn't", "mustn't", "don't have to", "can't"],
      correct: 0,
      explanationEn: "Advice against something: shouldn't.",
      explanationVi: "Lời khuyên không nên làm gì đó: shouldn't.",
    },
  },

  // --- RELATIVE CLAUSES ---
  {
    id: "relative-clauses-who-which",
    category: "Relative Clauses",
    title: "Who vs Which",
    explanationEn: "'Who' for people, 'Which' for things.",
    explanationVi: "'Who' dùng cho người, 'Which' dùng cho vật.",
    structure: "Noun (person) + who + V... | Noun (thing) + which + V...",
    examples: [
      {
        en: "The man who called me is my uncle.",
        vi: "Người đàn ông gọi cho tôi là chú tôi.",
      },
      { en: "The car which I bought is red.", vi: "Chiếc xe tôi mua màu đỏ." },
    ],
    exercise: {
      questionEn: "This is the book ____ I read yesterday.",
      questionVi: "Đây là cuốn sách ____ tôi đã đọc ngày hôm qua.",
      options: ["who", "which", "where", "what"],
      correct: 1,
      explanationEn: "Book is a thing, so we use 'which'.",
      explanationVi: "Sách là vật, vì vậy chúng ta sử dụng 'which'.",
    },
  },
  {
    id: "relative-clauses-whom-whose",
    category: "Relative Clauses",
    title: "Whom / Whose",
    explanationEn: "'Whom' for person (object), 'Whose' for possession.",
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
    exercise: {
      questionEn: "He is the man ____ daughter is famous.",
      questionVi: "Ông ấy là người đàn ông có con gái ____ nổi tiếng.",
      options: ["who", "which", "whose", "whom"],
      correct: 2,
      explanationEn: "Possession relation (man's daughter) -> whose.",
      explanationVi: "Quan hệ sở hữu (con gái của người đàn ông) -> whose.",
    },
  },
  {
    id: "relative-clauses-that",
    category: "Relative Clauses",
    title: "Relative Pronoun 'That'",
    explanationEn: "Can replace Who/Which in defining relative clauses.",
    explanationVi: "Có thể thay thế Who/Which trong mệnh đề quan hệ xác định.",
    structure: "Noun + that + V/S...",
    examples: [
      {
        en: "The car that I bought is blue.",
        vi: "Chiếc xe mà tôi mua màu xanh.",
      },
    ],
    exercise: {
      questionEn: "The shirt ____ I bought is too small.",
      questionVi: "Chiếc áo ____ tôi đã mua quá nhỏ.",
      options: ["who", "where", "that", "what"],
      correct: 2,
      explanationEn: "'That' can replace 'which' for things.",
      explanationVi: "'That' có thể thay thế cho 'which' khi nói về vật.",
    },
  },
  {
    id: "relative-adverbs",
    category: "Relative Clauses",
    title: "Relative Adverbs (Where, When, Why)",
    explanationEn: "Where (place), When (time), Why (reason).",
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
    exercise: {
      questionEn: "Do you know the reason ____ she left?",
      questionVi: "Bạn có biết lý do ____ cô ấy rời đi không?",
      options: ["where", "when", "why", "which"],
      correct: 2,
      explanationEn: "Reason -> why.",
      explanationVi: "Lý do (Reason) -> why.",
    },
  },

  // --- COMPARISONS ---
  {
    id: "comparative",
    category: "Comparisons",
    title: "Comparatives",
    explanationEn: "Used to compare two things.",
    explanationVi: "Được sử dụng để so sánh hai sự vật.",
    structure: "Short adj + er + than | More + long adj + than",
    examples: [
      { en: "He is taller than me.", vi: "Anh ấy cao hơn tôi." },
      {
        en: "This book is more interesting than that one.",
        vi: "Cuốn sách này thú vị hơn cuốn kia.",
      },
    ],
    exercise: {
      questionEn: "This test is ____ than the last one.",
      questionVi: "Bài kiểm tra này ____ hơn bài trước.",
      options: ["hard", "harder", "more hard", "hardest"],
      correct: 1,
      explanationEn: "'Hard' is a short adjective, so add -er.",
      explanationVi: "'Hard' là tính từ ngắn, vì vậy thêm đuôi -er.",
    },
  },
  {
    id: "superlative",
    category: "Comparisons",
    title: "Superlatives",
    explanationEn: "Used to compare one thing against a group (the most/best).",
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
    exercise: {
      questionEn: "She is the ____ student in the school.",
      questionVi: "Cô ấy là học sinh ____ nhất trường.",
      options: ["smart", "smarter", "smartest", "most smart"],
      correct: 2,
      explanationEn: "Superlative of short adjective 'smart' adds -est.",
      explanationVi: "So sánh nhất của tính từ ngắn 'smart' thêm đuôi -est.",
    },
  },

  // --- GERUNDS & INFINITIVES ---
  {
    id: "gerunds",
    category: "Gerunds & Infinitives",
    title: "Gerunds (V-ing)",
    explanationEn:
      "Used as subjects or after certain verbs (enjoy, avoid, mind).",
    explanationVi:
      "Được sử dụng làm chủ ngữ hoặc sau một số động từ (enjoy, avoid, mind...).",
    structure: "Verb + -ing",
    examples: [
      { en: "Swimming is good for health.", vi: "Bơi lội tốt cho sức khỏe." },
      { en: "I enjoy reading.", vi: "Tôi thích đọc sách." },
    ],
    exercise: {
      questionEn: "He suggested ____ to the cinema.",
      questionVi: "Anh ấy đề nghị ____ đi xem phim.",
      options: ["go", "to go", "going", "went"],
      correct: 2,
      explanationEn: "'Suggest' is followed by a gerund (V-ing).",
      explanationVi: "Động từ 'Suggest' được theo sau bởi danh động từ (V-ing).",
    },
  },
  {
    id: "infinitives",
    category: "Gerunds & Infinitives",
    title: "Infinitives (to V)",
    explanationEn:
      "Used after certain verbs (want, decide, hope) or to express purpose.",
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
    exercise: {
      questionEn: "She decided ____ a new car.",
      questionVi: "Cô ấy đã quyết định ____ một chiếc xe mới.",
      options: ["buy", "to buy", "buying", "bought"],
      correct: 1,
      explanationEn: "'Decide' is followed by an infinitive (to V).",
      explanationVi: "Động từ 'Decide' được theo sau bởi động từ nguyên mẫu có 'to' (to V).",
    },
  },
];
