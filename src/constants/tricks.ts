export type TrickCategory =
  | "Adjectives"
  | "Adverbs"
  | "Nouns"
  | "Verbs"
  | "Pronouns"
  | "Conjunctions"
  | "Prepositions"
  | "Sentence Structure"
  | "Parallel Structure"
  | "Confused Words"
  | "Common Patterns"
  | "Comparison";

export interface Trick {
  id: string;
  category: TrickCategory;
  title: string;
  explanationVi: string;
  structure?: string; // Tóm tắt cấu trúc ngữ pháp (ví dụ: Adj + N, Adv + Adj)
  rules?: { title: string; contentVi: string }[];
  signs?: { sign: string; explanationVi: string }[];
  caution?: string; // Lưu ý hoặc bẫy cần tránh
  examples: { en: string; vi: string }[];
}

export const tricks: Trick[] = [
  {
    id: "adj-suffixes",
    category: "Adjectives",
    title: "Dấu hiệu nhận biết Tính từ (Suffixes)",
    explanationVi:
      "Hầu hết các tính từ trong tiếng Anh kết thúc bằng các hậu tố đặc trưng.",
    signs: [
      {
        sign: "-able / -ible",
        explanationVi: "comfortable, capable, possible, flexible",
      },
      { sign: "-al", explanationVi: "natural, central, local, musical" },
      { sign: "-ful", explanationVi: "beautiful, helpful, useful, careful" },
      { sign: "-ic", explanationVi: "economic, specific, historic, basic" },
      { sign: "-ive", explanationVi: "active, creative, positive, massive" },
      {
        sign: "-less",
        explanationVi: "careless, harmless, sleepless, useless",
      },
      { sign: "-ous", explanationVi: "famous, dangerous, nervous, continuous" },
      { sign: "-y", explanationVi: "happy, sunny, windy, rainy" },
      {
        sign: "-ent / -ant",
        explanationVi: "different, important, independent",
      },
      { sign: "-ary / -ory", explanationVi: "voluntary, temporary, advisory" },
    ],
    examples: [
      { en: "She is a beautiful girl.", vi: "Cô ấy là một cô gái xinh đẹp." },
      { en: "This task is impossible.", vi: "Nhiệm vụ này là không thể." },
    ],
  },
  {
    id: "adj-positions",
    category: "Adjectives",
    title: "Vị trí của Tính từ",
    explanationVi:
      "Tính từ thường đứng ở các vị trí cố định để bổ nghĩa cho danh từ hoặc sau động từ nối.",
    structure: "Adj + N | Linking Verb + Adj",
    rules: [
      {
        title: "Vị trí cơ bản",
        contentVi:
          "Đứng trước danh từ (Adj + N) hoặc đứng sau động từ tobe/động từ nối (Linking Verb + Adj).",
      },
      {
        title: "Cấu trúc nâng cao",
        contentVi:
          "Make/Keep/Find + Object + Adj (Giữ cho/Làm cho/Thấy cái gì đó như thế nào).",
      },
    ],
    examples: [
      {
        en: "He is a professional doctor.",
        vi: "Anh ấy là một bác sĩ chuyên nghiệp. (Sau Adj là N)",
      },
      {
        en: "She looks tired.",
        vi: "Cô ấy trông có vẻ mệt mỏi. (Sau Linking Verb)",
      },
      {
        en: "He made me happy.",
        vi: "Anh ấy làm tôi hạnh phúc. (Make + O + Adj)",
      },
    ],
  },
  {
    id: "adj-order",
    category: "Adjectives",
    title: "Thứ tự của Tính từ (OSASCOMP)",
    explanationVi:
      "Khi có nhiều tính từ đứng trước một danh từ, chúng phải tuân theo một thứ tự nhất định.",
    structure:
      "Opinion - Size - Age - Shape - Color - Origin - Material - Purpose",
    rules: [
      { title: "Opinion", contentVi: "Quan điểm (beautiful, lovely, nice)." },
      { title: "Size", contentVi: "Kích thước (big, small, huge)." },
      { title: "Age", contentVi: "Độ tuổi (new, old, ancient)." },
      { title: "Shape", contentVi: "Hình dạng (round, square, flat)." },
      { title: "Color", contentVi: "Màu sắc (red, blue, black)." },
      {
        title: "Origin",
        contentVi: "Nguồn gốc (Vietnamese, French, American).",
      },
      { title: "Material", contentVi: "Chất liệu (wooden, plastic, silk)." },
      { title: "Purpose", contentVi: "Mục đích (sleeping bag, writing desk)." },
    ],
    examples: [
      {
        en: "A lovely large new round black French wooden writing desk.",
        vi: "Một chiếc bàn viết bằng gỗ của Pháp màu đen, tròn, mới, lớn, rất đẹp.",
      },
      {
        en: "She bought a beautiful small Italian leather bag.",
        vi: "Cô ấy đã mua một chiếc túi da Ý nhỏ nhắn và xinh xắn.",
      },
    ],
  },
  {
    id: "adj-collocations",
    category: "Adjectives",
    title: "Tính từ đi kèm Giới từ (Common Collocations)",
    explanationVi:
      "Trong TOEIC, một số tính từ luôn đi kèm với các giới từ cố định. Thuộc lòng các cặp này giúp làm bài nhanh chóng.",
    signs: [
      {
        sign: "be eligible for",
        explanationVi:
          "đủ điều kiện cho/làm gì (be eligible for the promotion)",
      },
      {
        sign: "be responsible for",
        explanationVi: "chịu trách nhiệm cho việc gì",
      },
      { sign: "be interested in", explanationVi: "quan tâm đến cái gì" },
      {
        sign: "be aware of",
        explanationVi: "nhận thức về cái gì (= be mindful of)",
      },
      { sign: "be consistent with", explanationVi: "nhất quán với cái gì" },
      { sign: "be equipped with", explanationVi: "được trang bị cái gì" },
      { sign: "be suitable for", explanationVi: "phù hợp với cái gì" },
    ],
    examples: [
      {
        en: "All full-time employees are eligible for benefits.",
        vi: "Tất cả nhân viên toàn thời gian đều đủ điều kiện nhận phúc lợi.",
      },
      {
        en: "The factory is equipped with modern machinery.",
        vi: "Nhà máy được trang bị máy móc hiện đại.",
      },
    ],
  },
  {
    id: "adv-suffixes",
    category: "Adverbs",
    title: "Dấu hiệu nhận biết Trạng từ",
    explanationVi:
      "Trạng từ thường được hình thành bằng cách thêm đuôi -ly vào tính từ.",
    signs: [
      {
        sign: "Adj + -ly",
        explanationVi: "quickly, beautifully, carefully, slowly",
      },
      {
        sign: "Irregular Adv",
        explanationVi: "hard, fast, early, late, well (tính từ là good)",
      },
      {
        sign: "-ly but Adj",
        explanationVi:
          "friendly, lovely, lonely, costly, silly (Đây là tính từ, không phải trạng từ!)",
      },
    ],
    examples: [
      { en: "He runs quickly.", vi: "Anh ấy chạy nhanh." },
      { en: "She sings beautifully.", vi: "Cô ấy hát hay." },
      {
        en: "He works hard.",
        vi: "Anh ấy làm việc chăm chỉ. (Hard vừa là Adj vừa là Adv)",
      },
    ],
  },
  {
    id: "adv-positions",
    category: "Adverbs",
    title: "Vị trí của Trạng từ",
    explanationVi:
      "Trạng từ có vị trí linh hoạt hơn tính từ, thường bổ nghĩa cho động từ, tính từ hoặc trạng từ khác. Đây là phần cực kỳ quan trọng trong TOEIC Part 5.",
    structure: "S + Adv + V | Adv + Adj | Adv + Adv | Be + Adv + V3/V-ing",
    rules: [
      {
        title: "Bổ nghĩa cho Động từ",
        contentVi:
          "+ Đứng trước động từ thường: Adv + V\n+ Giữa trợ động từ và V chính: Be/Have + Adv + V3/V-ing\n+ Đứng sau V nội hoặc Tân ngữ: V + Adv / V + O + Adv",
      },
      {
        title: "Bổ nghĩa cho Tính từ/Trạng từ",
        contentVi:
          "+ Đứng trước Tính từ: Adv + Adj\n+ Đứng trước Trạng từ khác: Adv + Adv",
      },
      {
        title: "Bổ nghĩa cho cả câu",
        contentVi: "+ Đầu câu (thường có dấu phẩy): Honestly, I don't know.",
      },
    ],
    caution:
      "Tuyệt đối không đặt Trạng từ đứng chen giữa Động từ và Tân ngữ (V + Adv + O là SAI).",
    examples: [
      {
        en: "The project has successfully been completed.",
        vi: "Dự án đã được hoàn thành một cách thành công. (Have + Adv + V3)",
      },
      {
        en: "She carefully reviewed the contract.",
        vi: "Cô ấy đã xem xét hợp đồng một cách cênt thận. (S + Adv + V)",
      },
      {
        en: "The manager speaks English extremely well.",
        vi: "Người quản lý nói tiếng Anh cực kỳ tốt. (Adv + Adv)",
      },
      {
        en: "It is a highly competitive market.",
        vi: "Đó là một thị trường cạnh tranh cao. (Adv + Adj)",
      },
      {
        en: "Unfortunately, the meeting was postponed.",
        vi: "Thật không may, cuộc họp đã bị trì hoãn. (Đứng đầu câu)",
      },
    ],
  },
  {
    id: "adv-confusing-pairs",
    category: "Adverbs",
    title: "Các trạng từ dễ gây nhầm lẫn (Traps)",
    explanationVi:
      "Một số trạng từ có hình thức gần giống nhau nhưng ý nghĩa hoàn toàn khác biệt, thường xuất hiện trong các câu hỏi từ vựng.",
    signs: [
      {
        sign: "Hard vs Hardly",
        explanationVi: "Hard: chăm chỉ/vất vả; Hardly: hầu như không.",
      },
      {
        sign: "Late vs Lately",
        explanationVi: "Late: muộn; Lately: gần đây (= Recently).",
      },
      {
        sign: "Near vs Nearly",
        explanationVi:
          "Near: gần (khoảng cách); Nearly: gần như/xấp xỉ (= Almost).",
      },
      {
        sign: "High vs Highly",
        explanationVi: "High: cao (vị trí); Highly: rất/hết sức (mức độ).",
      },
      {
        sign: "Short vs Shortly",
        explanationVi: "Short: ngắn/thấp; Shortly: ngay sau đó/sớm (= Soon).",
      },
    ],
    examples: [
      {
        en: "He works hard to support his family.",
        vi: "Anh ấy làm việc chăm chỉ để nuôi gia đình.",
      },
      {
        en: "I can hardly hear what you are saying.",
        vi: "Tôi hầu như không nghe thấy bạn đang nói gì.",
      },
      {
        en: "The flight will depart shortly.",
        vi: "Chuyến bay sẽ sớm khởi hành.",
      },
      { en: "I have been very busy lately.", vi: "Dạo gần đây tôi rất bận." },
    ],
  },
  {
    id: "noun-suffixes",
    category: "Nouns",
    title: "Dấu hiệu nhận biết Danh từ (Suffixes)",
    explanationVi:
      "Danh từ thường có các hậu tố đặc trưng giúp phân biệt với các từ loại khác.",
    signs: [
      {
        sign: "-tion / -sion",
        explanationVi: "information, decision, education, vision",
      },
      {
        sign: "-ment",
        explanationVi: "agreement, development, movement, payment",
      },
      { sign: "-ty / -ity", explanationVi: "ability, quality, city, activity" },
      {
        sign: "-ness",
        explanationVi: "happiness, kindness, weakness, darkness",
      },
      {
        sign: "-ance / -ence",
        explanationVi: "importance, difference, maintenance",
      },
      { sign: "-ship", explanationVi: "friendship, membership, leadership" },
      { sign: "-ism", explanationVi: "optimism, criticism, tourism" },
      {
        sign: "-ist / -er / -or",
        explanationVi: "artist, teacher, doctor (Chỉ người)",
      },
      {
        sign: "-ee",
        explanationVi: "employee, interviewee (Người nhận hành động)",
      },
      { sign: "-ship / -hood", explanationVi: "friendship, childhood" },
      { sign: "-cy / -ry", explanationVi: "privacy, bravery, delivery" },
    ],
    examples: [
      {
        en: "The development of technology is fast.",
        vi: "Sự phát triển của công nghệ rất nhanh.",
      },
      { en: "She has the ability to swim.", vi: "Cô ấy có khả năng bơi lội." },
    ],
  },
  {
    id: "noun-positions",
    category: "Nouns",
    title: "Vị trí của Danh từ",
    explanationVi:
      "Danh từ đóng vai trò là chủ ngữ hoặc tân ngữ trong câu và thường đứng sau các thành phần sau:",
    structure: "a/an/the + N | my/his/her + N | Adj + N | Preposition + N",
    rules: [
      { title: "After Articles", contentVi: "Đứng sau mạo từ (a, an, the)." },
      {
        title: "After Possessives",
        contentVi:
          "Đứng sau tính từ sở hữu (my, your, his, her, its, our, their) hoặc danh từ sở hữu cách ('s).",
      },
      {
        title: "After Adjectives",
        contentVi: "Đứng sau tính từ để làm rõ nghĩa (Adj + N).",
      },
      {
        title: "After Quantifiers",
        contentVi:
          "Đứng sau các từ chỉ định lượng (some, many, all, each, every, few, a lot of...).",
      },
      {
        title: "After Prepositions",
        contentVi:
          "Đứng sau giới từ để tạo thành cụm giới từ (in/on/at/of/with... + N).",
      },
    ],
    examples: [
      {
        en: "He read an interesting book.",
        vi: "Anh ấy đã đọc một cuốn sách thú vị. (Sau a/an và Adj)",
      },
      {
        en: "I rely on my parents.",
        vi: "Tôi dựa dẫm vào bố mẹ mình. (Sau giới từ và sở hữu)",
      },
      {
        en: "Many students arrived early.",
        vi: "Nhiều học sinh đã đến sớm. (Sau từ chỉ lượng)",
      },
    ],
  },
  {
    id: "noun-plurals",
    category: "Nouns",
    title: "Danh từ số nhiều bất quy tắc",
    explanationVi:
      "Nhiều danh từ không thêm -s hay -es khi chuyển sang số nhiều.",
    rules: [
      {
        title: "Vowel Change",
        contentVi:
          "Thay đổi nguyên âm bên trong (man -> men, tooth -> teeth, foot -> feet, goose -> geese).",
      },
      {
        title: "Different Ending",
        contentVi:
          "Thay đổi hẳn phần đuôi (child -> children, person -> people, ox -> oxen).",
      },
      {
        title: "Unchanged",
        contentVi:
          "Giữ nguyên hình thức (sheep -> sheep, deer -> deer, fish -> fish).",
      },
      {
        title: "-is to -es",
        contentVi:
          "Thay đổi đuôi -is thành -es (analysis -> analyses, crisis -> crises).",
      },
    ],
    examples: [
      {
        en: "Three children are playing in the park.",
        vi: "Ba đứa trẻ đang chơi trong công viên.",
      },
      {
        en: "The research involves heavy data analysis.",
        vi: "Nghiên cứu này bao gồm việc phân tích dữ liệu nặng nề.",
      },
    ],
  },
  {
    id: "verb-suffixes",
    category: "Verbs",
    title: "Dấu hiệu nhận biết Động từ (Suffixes)",
    explanationVi:
      "Một số động từ được hình thành từ danh từ hoặc tính từ thông qua các hậu tố.",
    signs: [
      {
        sign: "-ize / -ise",
        explanationVi: "organize, realize, modernize, industrialize",
      },
      { sign: "-en", explanationVi: "shorten, widen, brighten, sharpen" },
      {
        sign: "-ate",
        explanationVi: "create, participate, graduate, activate",
      },
      {
        sign: "-fy / -ify",
        explanationVi: "identify, clarify, simplify, satisfy",
      },
    ],
    examples: [
      {
        en: "We need to simplify the process.",
        vi: "Chúng ta cần đơn giản hóa quy trình.",
      },
      {
        en: "They want to modernize the system.",
        vi: "Họ muốn hiện đại hóa hệ thống.",
      },
    ],
  },
  {
    id: "verb-positions",
    category: "Verbs",
    title: "Vị trí của Động từ",
    explanationVi: "Động từ chính mô tả hành động hoặc trạng thái của chủ ngữ.",
    structure: "S + V | Modal + V (nguyên mẫu) | to + V",
    rules: [
      {
        title: "After Subject",
        contentVi: "Đứng ngay sau chủ ngữ để hình thành câu (S + V).",
      },
      {
        title: "After Modals",
        contentVi:
          "Đứng sau động từ khiếm khuyết (can, could, should, may, might, must, will...) ở dạng nguyên thể không 'to'.",
      },
      {
        title: "After Adverbs of Frequency",
        contentVi:
          "Đứng sau các trạng từ chỉ tần suất (always, usually, often, sometimes, never).",
      },
      {
        title: "After 'to'",
        contentVi:
          "Động từ nguyên mẫu đứng sau 'to' để chỉ mục đích hoặc sau một số cấu trúc nhất định.",
      },
    ],
    examples: [
      { en: "He always speaks the truth.", vi: "Anh ấy luôn nói sự thật." },
      {
        en: "You should complete the report soon.",
        vi: "Bạn nên hoàn thành bản báo cáo sớm.",
      },
      { en: "I came here to help you.", vi: "Tôi đến đây để giúp bạn." },
    ],
  },
  {
    id: "verb-ing-to",
    category: "Verbs",
    title: "Gerund (V-ing) vs Infinitive (To V)",
    explanationVi:
      "Một số động từ theo sau bởi V-ing, một số thì To V. Có những động từ đi được với cả hai nhưng mang nghĩa hoàn toàn khác nhau.",
    structure: "V + V-ing | V + To-V",
    rules: [
      {
        title: "Dạng cố định (V-ing Only)",
        contentVi:
          "Các động từ theo sau là V-ing: Avoid, admit, consider, deny, enjoy, finish, mind, postpone, suggest, recommend.",
      },
      {
        title: "Dạng cố định (To V Only)",
        contentVi:
          "Các động từ theo sau là To V: Agree, decide, expect, hope, learn, manage, offer, plan, promise, refuse, want, wish.",
      },
      {
        title: "Đổi nghĩa: Quá khứ vs Tương lai",
        contentVi:
          "+ V-ing: Nhớ/Quên/Hối hận việc ĐÃ làm.\n+ To V: Nhớ/Quên/Tiếc việc PHẢI làm (chưa làm).",
      },
      {
        title: "Đổi nghĩa: Hành động vs Mục đích",
        contentVi:
          "+ Stop V-ing: Dừng hẳn việc đang làm.\n+ Stop To-V: Dừng lại ĐỂ làm việc khác.\n+ Try V-ing: Thử làm gì.\n+ Try To-V: Cố gắng làm gì.",
      },
      {
        title: "Đặc biệt: Need & Giới từ",
        contentVi:
          "+ Need V-ing: Cần được làm (Bị động).\n+ Preposition + V-ing: Sau giới từ luôn dùng V-ing.",
      },
    ],
    examples: [
      {
        en: "He suggested postponing the meeting.",
        vi: "Anh ấy đề nghị hoãn cuộc họp. (Suggest + V-ing)",
      },
      {
        en: "They managed to finish on time.",
        vi: "Họ đã xoay sở để kết thúc đúng hạn. (Manage + To V)",
      },
      {
        en: "I am looking forward to meeting you.",
        vi: "Tôi rất mong được gặp bạn. (To ở đây là giới từ nên + V-ing)",
      },
      {
        en: "He left the room without saying a word.",
        vi: "Anh ấy rời phòng mà không nói lời nào. (Sau giới từ without)",
      },
      {
        en: "I remember locking the door.",
        vi: "Tôi nhớ là mình đã khóa cửa rồi. (Đã khóa trong quá khứ)",
      },
      {
        en: "Please remember to lock the door.",
        vi: "Hãy nhớ khóa cửa nhé. (Nhắc nhở việc phải làm)",
      },
      {
        en: "I stopped eating meat 2 years ago.",
        vi: "Tôi đã dừng ăn thịt cách đây 2 năm. (Bỏ hẳn thói quen)",
      },
      {
        en: "We stopped to ask for directions.",
        vi: "Chúng tôi dừng lại để hỏi đường. (Dừng việc đi lại để hỏi)",
      },
      {
        en: "I regret telling him the secret.",
        vi: "Tôi hối hận vì đã nói cho anh ấy bí mật đó. (Đã nói rồi)",
      },
      {
        en: "We regret to inform you that your application was rejected.",
        vi: "Chúng tôi lấy làm tiếc phải thông báo rằng đơn của bạn đã bị từ chối.",
      },
      {
        en: "Try adding some salt to the soup.",
        vi: "Hãy thử thêm ít muối vào canh xem sao. (Thử nghiệm)",
      },
      {
        en: "I am trying to learn English every day.",
        vi: "Tôi đang cố gắng học tiếng Anh mỗi ngày. (Nỗ lực)",
      },
      {
        en: "The car needs repairing.",
        vi: "Chiếc xe này cần được sửa. (= needs to be repaired)",
      },
    ],
  },
  {
    id: "verb-causative",
    category: "Verbs",
    title: "Cấu trúc Sai khiến (Causative Form)",
    explanationVi: "Dùng để diễn tả việc nhờ vả hoặc thuê mướn ai đó làm gì.",
    structure: "Have someone do | Get someone to do | Have/Get something done",
    rules: [
      {
        title: "Have - Active",
        contentVi: "Have + someone + V (nguyên mẫu) -> Nhờ ai đó làm gì.",
      },
      {
        title: "Have/Get - Passive",
        contentVi:
          "Have/Get + something + V3/ed -> Có cái gì đó được làm bởi ai.",
      },
      {
        title: "Get - Active",
        contentVi: "Get + someone + To V -> Thuê/Nhờ ai đó làm gì.",
      },
      {
        title: "Make/Let",
        contentVi:
          "Make/Let + someone + V (nguyên mẫu) -> Bắt buộc/Cho phép ai làm gì.",
      },
    ],
    examples: [
      {
        en: "I had the mechanic fix my car.",
        vi: "Tôi đã nhờ thợ sửa xe của mình. (Have someone do)",
      },
      {
        en: "I had my car fixed.",
        vi: "Tôi đã cho sửa xe. (Have something done)",
      },
      {
        en: "The boss made us work late.",
        vi: "Sếp bắt chúng tôi làm muộn. (Make someone do)",
      },
    ],
  },
  {
    id: "verb-passive-voice",
    category: "Verbs",
    title: "Câu Bị động (Passive Voice)",
    explanationVi:
      "Câu bị động được dùng khi đối tượng chịu tác động của hành động được nhấn mạnh.",
    rules: [
      { title: "Form", contentVi: "Be + V3/ed (Quá khứ phân từ)." },
      {
        title: "Recognition",
        contentVi:
          "Thường đi kèm với 'by' (bởi ai) hoặc không có tân ngữ phía sau động từ nếu đó là ngoại động từ.",
      },
      {
        title: "Special cases",
        contentVi:
          "Động từ chỉ ý kiến (believe, say, report...) -> It is said that / People are said to...",
      },
    ],
    examples: [
      {
        en: "The report will be submitted tomorrow.",
        vi: "Bản báo cáo sẽ được nộp vào ngày mai.",
      },
      {
        en: "The products are manufactured in Korea.",
        vi: "Các sản phẩm được sản xuất tại Hàn Quốc.",
      },
    ],
  },
  {
    id: "conjunctions-types",
    category: "Conjunctions",
    title: "Liên từ vs Giới từ (Bẫy kinh điển)",
    explanationVi:
      "Đây là dạng bài tập phân biệt dựa vào cấu trúc đứng sau: Mệnh đề (Clause) hay Cụm danh từ/V-ing (Noun Phrase/Gerund).",
    structure: "Conj + S + V | Prep + N/V-ing",
    rules: [
      {
        title: "Chỉ sự nhượng bộ (Mặc dù)",
        contentVi:
          "+ Mệnh đề (S+V): Although, Even though, Though, While.\n+ Cụm N/V-ing: Despite, In spite of, Regardless of.",
      },
      {
        title: "Chỉ lý do (Bởi vì)",
        contentVi:
          "+ Mệnh đề (S+V): Because, Since, As, Now that, In that.\n+ Cụm N/V-ing: Because of, Due to, Owing to, On account of, As a result of.",
      },
      {
        title: "Chỉ mục đích (Để mà)",
        contentVi:
          "+ Mệnh đề (S+V): So that, In order that (+ S + can/will...).\n+ Cụm V (nguyên mẫu): To, In order to, So as to.",
      },
    ],
    caution:
      "Bẫy mệnh đề giả: 'Despite the fact that + S + V' thì lúc này cả cụm 'the fact that' biến nó thành một cụm danh từ, nhưng sau đó lại có mệnh đề. Luôn nhìn kỹ thành phần ngay sau chỗ trống.",
    examples: [
      {
        en: "Although it rained, we went out.",
        vi: "Mặc dù trời mưa (Mệnh đề), chúng tôi vẫn đi chơi.",
      },
      {
        en: "Despite the rain, we went out.",
        vi: "Mặc dù cơn mưa (Cụm danh từ), chúng tôi vẫn đi chơi.",
      },
      {
        en: "He stayed late so that he could finish the report.",
        vi: "Anh ấy ở lại muộn để (Mệnh đề) có thể xong báo cáo.",
      },
    ],
  },
  {
    id: "conjunctions-time",
    category: "Conjunctions",
    title: "Mệnh đề Trạng ngữ chỉ Thời gian",
    explanationVi:
      "Các liên từ thời gian kết nối hành động theo trình tự. Quy tắc vàng: Liên từ thời gian + Mệnh đề (S+V).",
    structure: "Conj + S + V (Hiện tại) , S + V (Tương lai)",
    rules: [
      {
        title: "Các liên từ + Mệnh đề (S + V)",
        contentVi:
          "When, While, As (Khi/Trong khi); As soon as, Once (Ngay khi); Before, After (Trước/Sau khi).",
      },
      {
        title: "By the time (Vào lúc/Trước lúc) + Mệnh đề",
        contentVi:
          "+ Quá khứ: By the time + V2/ed, S + had + V3/ed.\n+ Tương lai: By the time + V(s/es), S + will have + V3/ed.",
      },
      {
        title: "Until (Cho đến khi) + Mệnh đề",
        contentVi: "S + will not + V (nguyên mẫu) + until + S + V (hiện tại).",
      },
    ],
    caution:
      "Tuyệt đối không dùng 'Will' ngay sau liên từ chỉ thời gian (When, As soon as, Once...).",
    examples: [
      {
        en: "I will call you as soon as I arrive at the airport.",
        vi: "Tôi sẽ gọi cho bạn ngay khi tôi đến sân bay. (S+V: I arrive)",
      },
      {
        en: "Once the contract is signed, we will start the project.",
        vi: "Một khi hợp đồng được ký, chúng tôi sẽ bắt đầu dự án. (S+V: contract is signed)",
      },
    ],
  },
  {
    id: "conjunctions-transitions",
    category: "Conjunctions",
    title: "Từ nối (Transitions) mạnh mẽ",
    explanationVi: "Các trạng từ liên kết giúp kết nối hai câu độc lập.",
    rules: [
      {
        title: "Contrast",
        contentVi:
          "However, Nevertheless, On the other hand (Tuy nhiên, mặc dù vậy).",
      },
      {
        title: "Result",
        contentVi:
          "Therefore, Consequently, As a result, Thus (Vì vậy, kết quả là).",
      },
      {
        title: "Addition",
        contentVi: "Moreover, Furthermore, In addition (Hơn nữa, ngoài ra).",
      },
    ],
    examples: [
      {
        en: "It was raining. However, we went out.",
        vi: "Trời đang mưa. Tuy nhiên, chúng tôi vẫn đi chơi.",
      },
      {
        en: "She is smart; moreover, she is hardworking.",
        vi: "Cô ấy thông minh; hơn nữa, cô ấy còn chăm chỉ.",
      },
    ],
  },
  {
    id: "prepositions-time",
    category: "Prepositions",
    title: "Giới từ chỉ thời gian (In, On, At)",
    explanationVi:
      "Cách phân biệt In, On, At khi chỉ thời gian một cách chính xác.",
    signs: [
      {
        sign: "At",
        explanationVi:
          "Thời điểm cụ thể (at 7am, at noon, at night, at Christmas).",
      },
      {
        sign: "On",
        explanationVi:
          "Ngày trong tuần, ngày tháng (on Monday, on October 10th).",
      },
      {
        sign: "In",
        explanationVi:
          "Tháng, năm, mùa, thế kỷ, buổi trong ngày (in October, in 2024, in the morning).",
      },
    ],
    examples: [
      { en: "I will see you at 8 o'clock.", vi: "Tôi sẽ gặp bạn lúc 8 giờ." },
      { en: "The meeting is on Friday.", vi: "Cuộc họp diễn ra vào thứ Sáu." },
      { en: "I was born in 1995.", vi: "Tôi sinh năm 1995." },
    ],
  },
  {
    id: "prepositions-place",
    category: "Prepositions",
    title: "Giới từ chỉ nơi chốn (In, On, At)",
    explanationVi: "Cách phân biệt In, On, At khi chỉ địa điểm.",
    signs: [
      {
        sign: "At",
        explanationVi:
          "Địa điểm cụ thể, một điểm dừng (at the bus stop, at home, at the airport).",
      },
      {
        sign: "On",
        explanationVi:
          "Trên bề mặt, số tầng (on the table, on the 5th floor, on the street).",
      },
      {
        sign: "In",
        explanationVi:
          "Bên trong một không gian, thành phố, quốc gia (in the room, in Hanoi, in Vietnam).",
      },
    ],
    examples: [
      { en: "He is at the office.", vi: "Anh ấy đang ở văn phòng." },
      { en: "The book is on the desk.", vi: "Cuốn sách nằm trên bàn." },
      {
        en: "I live in a small apartment.",
        vi: "Tôi sống trong một căn hộ nhỏ.",
      },
    ],
  },
  {
    id: "pronouns-traps",
    category: "Pronouns",
    title: "Các lỗi Đại từ thường gặp",
    explanationVi: "Cách sử dụng đúng đại từ làm chủ ngữ, tân ngữ và sở hữu.",
    rules: [
      {
        title: "Subject vs Object",
        contentVi:
          "+ Chủ ngữ (S): I, He, She, We, They (Đứng trước động từ).\n+ Tân ngữ (O): Me, Him, Her, Us, Them (Đứng sau động từ/giới từ).",
      },
      {
        title: "Possessive Adj vs Pronoun",
        contentVi:
          "+ Tính từ sở hữu: My, His, Her, Their + Noun (Luôn có danh từ theo sau).\n+ Đại từ sở hữu: Mine, His, Hers, Theirs (Không có danh từ theo sau).",
      },
      {
        title: "Reflexive (Tự mình)",
        contentVi:
          "+ By + Himself: By himself, by herself...\n+ On + Own: On his own, on her own...",
      },
    ],
    caution:
      "Đại từ sở hữu (Ours, Yours...) bản thân nó đã bằng 'Tính từ sở hữu + Danh từ'. Đừng thêm danh từ sau nó nữa.",
    examples: [
      {
        en: "She finished the report by herself.",
        vi: "Cô ấy tự mình hoàn thành bản báo cáo. (= on her own)",
      },
      {
        en: "This is my pen, and that one is yours.",
        vi: "Đây là bút của tôi, còn cái kia là của bạn (yours = your pen).",
      },
    ],
  },
  {
    id: "pronouns-relative-reduced",
    category: "Pronouns",
    title: "Rút gọn Mệnh đề quan hệ",
    explanationVi:
      "Rút gọn đại từ quan hệ và trợ động từ để câu gọn hơn. Đây là bẫy phổ biến trong TOEIC.",
    structure: "N + V-ing (Chủ động) | N + V3/ed (Bị động)",
    rules: [
      {
        title: "Dạng Chủ động",
        contentVi:
          "Lược bỏ Who/Which + Be -> Động từ chính chuyển thành V-ing.",
      },
      {
        title: "Dạng Bị động",
        contentVi: "Lược bỏ Who/Which + Be -> Chỉ giữ lại V3/ed.",
      },
      {
        title: "Dạng To-V",
        contentVi:
          "Dùng sau The first, The last, The only, các số thứ tự hoặc so sánh nhất.",
      },
    ],
    caution:
      "Phân biệt với trường hợp V chính: Hãy kiểm tra xem trong câu đã có động từ chính (Main Verb) chưa. Nếu có rồi thì đây là V rút gọn.",
    examples: [
      {
        en: "The man (who is) standing there is my boss.",
        vi: "Người đàn ông (đang) đứng đó là sếp tôi. (Chủ động -> V-ing)",
      },
      {
        en: "The goods (which were) ordered yesterday have arrived.",
        vi: "Hàng hóa (được) đặt ngày hôm qua đã tới. (Bị động -> V3/ed)",
      },
      {
        en: "He was the last person to leave the office.",
        vi: "Anh ấy là người cuối cùng rời văn phòng.",
      },
    ],
  },
  {
    id: "comparison-rules",
    category: "Comparison",
    title: "Cấu trúc So sánh",
    explanationVi: "Ba mức độ so sánh: Bằng, Hơn, Nhất.",
    rules: [
      {
        title: "So sánh bằng",
        contentVi: "As + Adj/Adv + As.",
      },
      {
        title: "So sánh hơn",
        contentVi:
          "+ Tính từ ngắn: Adj/Adv-er + than.\n+ Tính từ dài: More + Adj/Adv + than.",
      },
      {
        title: "So sánh nhất",
        contentVi:
          "+ Tính từ ngắn: The + Adj/Adv-est.\n+ Tính từ dài: The most + Adj/Adv.",
      },
      {
        title: "So sánh lũy tiến",
        contentVi:
          "The + Comparative... , the + Comparative... (Càng... thì càng...).",
      },
    ],
    caution:
      "Bẫy trạng từ: Giữa 'as...as' hoặc sau 'more' có thể là Adj hoặc Adv tùy thuộc vào động từ trước đó là To-be/Linking Verb hay Động từ thường.",
    examples: [
      {
        en: "She runs as fast as her brother.",
        vi: "Cô ấy chạy nhanh bằng anh cô ấy. (Fast là Adv bổ nghĩa cho run)",
      },
      {
        en: "The more you practice, the better you get.",
        vi: "Bạn càng luyện tập nhiều, bạn càng giỏi.",
      },
    ],
  },
  {
    id: "verb-tenses-summary",
    category: "Verbs",
    title: "Tóm tắt các Thì quan trọng",
    explanationVi:
      "Tập trung vào các thì thường xuyên xuất hiện nhất trong bài thi TOEIC.",
    rules: [
      {
        title: "Hiện tại hoàn thành (Present Perfect)",
        contentVi:
          "Have/Has + V3. Dấu hiệu: Since, For, Just, Already, Yet, So far, Recently, Lately.",
      },
      {
        title: "Quá khứ đơn vs Quá khứ hoàn thành",
        contentVi:
          "Hành động xảy ra trước một hành động khác trong quá khứ -> Dùng Quá khứ hoàn thành (Had + V3).",
      },
      {
        title: "Tương lai hoàn thành (Future Perfect)",
        contentVi:
          "Will have + V3. Dấu hiệu: By the time..., By next week... (Hoàn thành trước một thời điểm ở tương lai).",
      },
    ],
    caution:
      "Lưu ý thì hiện tại đơn chỉ lịch trình (tàu xe, máy bay) kể cả khi nói về tương lai.",
    examples: [
      {
        en: "I have lived here for 5 years.",
        vi: "Tôi đã sống ở đây được 5 năm.",
      },
      {
        en: "By the end of this month, I will have finished the project.",
        vi: "Trước cuối tháng này, tôi sẽ hoàn thành dự án.",
      },
    ],
  },
  {
    id: "passive-voice-patterns",
    category: "Verbs",
    title: "Câu bị động (Passive Voice)",
    explanationVi: "Nhấn mạnh vào đối tượng chịu tác động của hành động.",
    structure: "Be + V3/ed",
    rules: [
      {
        title: "Nhận biết câu bị động",
        contentVi:
          "Thường có 'by + O' phía sau, hoặc chủ ngữ là vật/việc không thể tự thực hiện hành động.",
      },
      {
        title: "Bị động với Động từ khuyết thiếu",
        contentVi: "Can/Must/Should + be + V3/ed.",
      },
      {
        title: "Bị động với thì Hoàn thành",
        contentVi: "Have/Has + been + V3/ed.",
      },
    ],
    caution:
      "Bẫy Nội động từ: Các động từ như 'happen, occur, remain, consist of, rise' KHÔNG bao giờ có dạng bị động.",
    examples: [
      {
        en: "The meeting will be held in the conference room.",
        vi: "Cuộc họp sẽ được tổ chức tại phòng hội nghị.",
      },
      {
        en: "An accident happened yesterday. (Không dùng: was happened)",
        vi: "Một vụ tai nạn đã xảy ra hôm qua.",
      },
    ],
  },
  {
    id: "conditionals-types",
    category: "Sentence Structure",
    title: "Câu điều kiện (Conditionals)",
    explanationVi:
      "Tóm tắt 3 loại câu điều kiện phổ biến và dạng đảo ngữ hay gặp trong TOEIC.",
    rules: [
      {
        title: "Loại 1 (Có thật ở hiện tại/tương lai)",
        contentVi: "If + S + V(s/es), S + will/can/may + V(bare).",
      },
      {
        title: "Loại 2 (Giả định không có thật ở hiện tại)",
        contentVi: "If + S + V2/ed (be=were), S + would/could + V(bare).",
      },
      {
        title: "Loại 3 (Giả định không có thật ở quá khứ)",
        contentVi: "If + S + had + V3/ed, S + would/could + have + V3/ed.",
      },
      {
        title: "Đảo ngữ câu điều kiện",
        contentVi:
          "Loại 1: Should + S + V... | Loại 2: Were + S + (to V)... | Loại 3: Had + S + V3/ed...",
      },
    ],
    caution:
      "Bẫy 'Mixed Conditionals': Đôi khi vế If là quá khứ (had V3) nhưng vế chính là hiện tại (would + V) nếu có dấu hiệu như 'now', 'today'.",
    examples: [
      {
        en: "If you need any help, please let me know.",
        vi: "Nếu bạn cần giúp đỡ, vui lòng báo tôi.",
      },
      {
        en: "Had I known about the meeting, I would have attended.",
        vi: "Nếu tôi biết về cuộc họp, tôi đã tham dự rồi. (Đảo ngữ loại 3)",
      },
    ],
  },
  {
    id: "determiners-other",
    category: "Common Patterns",
    title: "Phân biệt Another, Other, Others, The other",
    explanationVi:
      "Cách phân biệt các đại từ/tính từ chỉ 'cái khác' - cực kỳ hay gặp trong Part 5 & 6.",
    rules: [
      {
        title: "Another",
        contentVi: "Another + Noun số ít (Một cái khác - không xác định).",
      },
      {
        title: "Other",
        contentVi: "Other + Noun số nhiều / Noun không đếm được.",
      },
      {
        title: "Others",
        contentVi: "Others (Đứng một mình) = Other + Nouns số nhiều.",
      },
      {
        title: "The other",
        contentVi:
          "+ The other + Noun số ít: Cái còn lại duy nhất.\n+ The others: Những cái còn lại cuối cùng.",
      },
    ],
    caution:
      "Bẫy: 'Another' có thể đi với số lượng + Noun số nhiều (ví dụ: another 3 days - thêm 3 ngày nữa).",
    examples: [
      {
        en: "I need another cup of coffee.",
        vi: "Tôi cần thêm một tách cà phê nữa.",
      },
      {
        en: "Some people like tea, while others prefer coffee.",
        vi: "Một số người thích trà, trong khi những người khác thích cà phê.",
      },
      {
        en: "I have two pens. One is red, the other is blue.",
        vi: "Tôi có hai cái bút. Một cái màu đỏ, cái còn lại màu xanh.",
      },
    ],
  },
  {
    id: "preposition-forms",
    category: "Prepositions",
    title: "Giới từ + V-ing hay To-V?",
    explanationVi:
      "Tuyệt đại đa số giới từ đi với V-ing, nhưng có một số cụm từ 'To' đóng vai trò là giới từ chứ không phải To-V.",
    rules: [
      {
        title: "Quy tắc chung",
        contentVi: "Preposition (in, on, at, with, about...) + V-ing/Noun.",
      },
      {
        title: "Các cụm 'To' là giới từ (+ V-ing)",
        contentVi:
          "Look forward to, Object to, Be used to, Get used to, In addition to, Committed to, Devoted to.",
      },
    ],
    caution:
      "Đây là bẫy 'siêu cấp': Nhiều thí sinh thấy 'to' là chọn V nguyên mẫu ngay. Hãy học thuộc các cụm trên.",
    examples: [
      {
        en: "I am looking forward to meeting you.",
        vi: "Tôi rất mong được gặp bạn. (Meeting, không phải meet)",
      },
      {
        en: "In addition to improving quality, they reduced prices.",
        vi: "Ngoài việc cải thiện chất lượng, họ còn giảm giá.",
      },
    ],
  },
  {
    id: "subjunctive-mood",
    category: "Sentence Structure",
    title: "Cấu trúc Giả định (Subjunctive)",
    explanationVi:
      "Dùng sau các từ chỉ yêu cầu, đề nghị, tính chất quan trọng. Động từ ở mệnh đề sau luôn ở dạng nguyên mẫu không 'to'.",
    structure: "S + V(suggest/demand...) + (that) + S + (should) + V(bare)",
    rules: [
      {
        title: "Các động từ phổ biến",
        contentVi: "Suggest, Recommend, Request, Require, Demand, Insist.",
      },
      {
        title: "Các tính từ phổ biến",
        contentVi: "Essential, Necessary, Important, Mandatory, Vital.",
      },
    ],
    caution:
      "Bẫy chia thì: Dù chủ ngữ là He/She hay câu ở quá khứ, động từ sau 'that' vẫn giữ nguyên mẫu không thêm -s/es hay -ed.",
    examples: [
      {
        en: "The manager suggested that he finish the report tonight.",
        vi: "Quản lý đề nghị anh ấy xong báo cáo tối nay. (Finish giữ nguyên mẫu)",
      },
      {
        en: "It is essential that everyone be on time.",
        vi: "Việc mọi người đến đúng giờ là rất cần thiết. (Be giữ nguyên mẫu)",
      },
    ],
  },
  {
    id: "pronouns-relative",
    category: "Pronouns",
    title: "Đại từ Quan hệ (Relative Pronouns)",
    explanationVi:
      "Dùng để nối các mệnh đề và thay thế cho danh từ đứng trước.",
    rules: [
      {
        title: "Who",
        contentVi:
          "Thay cho người, làm chủ ngữ (The girl who is sitting there).",
      },
      {
        title: "Whom",
        contentVi:
          "Thay cho người, làm tân ngữ (The man whom I met yesterday).",
      },
      {
        title: "Which",
        contentVi:
          "Thay cho vật, làm chủ ngữ hoặc tân ngữ (The car which he bought).",
      },
      {
        title: "Whose",
        contentVi:
          "Chỉ sự sở hữu cho cả người và vật (The boy whose father is a doctor).",
      },
      {
        title: "That",
        contentVi: "Có thể thay cho Who, Whom, Which trong mệnh đề xác định.",
      },
    ],
    examples: [
      {
        en: "The man who is standing there is my brother.",
        vi: "Người đàn ông đang đứng đằng kia là anh trai tôi.",
      },
      {
        en: "I saw the house whose roof was damaged.",
        vi: "Tôi thấy ngôi nhà có mái bị hỏng.",
      },
    ],
  },
  {
    id: "parallel-structure-basic",
    category: "Parallel Structure",
    title: "Cấu trúc Song hành (Parallelism)",
    explanationVi:
      "Dùng các hình thức ngữ pháp giống nhau cho các thành phần có cùng chức năng trong câu.",
    rules: [
      {
        title: "In Lists",
        contentVi:
          "Khi liệt kê, các từ phải cùng loại (V-ing, V-ing, and V-ing hoặc N, N, and N).",
      },
      {
        title: "With Conjunctions",
        contentVi:
          "Các từ nối như 'and', 'or', 'but' yêu cầu sự tương đồng về cấu trúc ở hai vế.",
      },
    ],
    examples: [
      {
        en: "I like swimming, hiking, and reading.",
        vi: "Tôi thích bơi lội, đi bộ đường dài và đọc sách. (Đúng: cùng đuôi -ing)",
      },
      {
        en: "He is smart, helpful, and kind.",
        vi: "Anh ấy thông minh, hay giúp đỡ và tốt bụng. (Đúng: cùng là Tính từ)",
      },
    ],
  },
  {
    id: "confused-words-1",
    category: "Confused Words",
    title: "Cặp từ dễ gây nhầm lẫn (Phần 1)",
    explanationVi:
      "Phân biệt các cặp từ có cách viết hoặc phát âm gần giống nhau nhưng nghĩa khác nhau.",
    signs: [
      {
        sign: "Affect vs Effect",
        explanationVi:
          "Affect (Verb): tác động; Effect (Noun): kết quả/ảnh hưởng.",
      },
      {
        sign: "Than vs Then",
        explanationVi: "Than: dùng trong so sánh; Then: chỉ thời gian/kết quả.",
      },
      {
        sign: "Its vs It's",
        explanationVi:
          "Its: sở hữu của 'it'; It's: viết tắt của 'it is' hoặc 'it has'.",
      },
    ],
    examples: [
      {
        en: "The rain affected our plans.",
        vi: "Cơn mưa đã tác động đến kế hoạch của chúng tôi.",
      },
      {
        en: "The effect of the medicine was fast.",
        vi: "Tác dụng của thuốc rất nhanh.",
      },
      { en: "I am taller than him.", vi: "Tôi cao hơn anh ấy." },
    ],
  },
  {
    id: "confused-words-2",
    category: "Confused Words",
    title: "Cặp từ dễ gây nhầm lẫn (Phần 2)",
    explanationVi: "Tiếp tục phân biệt các cặp từ thông dụng hay bị dùng sai.",
    signs: [
      {
        sign: "Fewer vs Less",
        explanationVi:
          "Fewer: dùng cho danh từ đếm được; Less: dùng cho danh từ không đếm được.",
      },
      {
        sign: "Advice vs Advise",
        explanationVi: "Advice (Noun): lời khuyên; Advise (Verb): khuyên bảo.",
      },
      {
        sign: "Lose vs Loose",
        explanationVi:
          "Lose (Verb): làm mất/thất bại; Loose (Adj): lỏng lẻo/rộng.",
      },
    ],
    examples: [
      {
        en: "There are fewer students today.",
        vi: "Hôm nay có ít học sinh hơn.",
      },
      {
        en: "I have less money than before.",
        vi: "Tôi có ít tiền hơn trước đây.",
      },
      {
        en: "Please advise me on this matter.",
        vi: "Vui lòng cho tôi lời khuyên về vấn đề này.",
      },
    ],
  },
  {
    id: "spelling-doubling",
    category: "Common Patterns",
    title: "Quy tắc gấp đôi phụ âm",
    explanationVi:
      "Khi nào cần gấp đôi phụ âm cuối trước khi thêm hậu tố (như -ing, -ed).",
    rules: [
      {
        title: "CVC Rule",
        contentVi:
          "Từ có 1 âm tiết, kết thúc bằng Phụ âm - Nguyên âm - Phụ âm (CVC) -> Gấp đôi phụ âm cuối.",
      },
      {
        title: "Stressed Syllable",
        contentVi:
          "Từ có nhiều âm tiết, nếu trọng âm rơi vào âm tiết cuối kết thúc bằng CVC -> Gấp đôi phụ âm cuối.",
      },
    ],
    examples: [
      { en: "Run -> Running", vi: "Chạy (Gấp đôi n vì là CVC 1 âm tiết)" },
      {
        en: "Begin -> Beginning",
        vi: "Bắt đầu (Gấp đôi n vì trọng âm rơi vào âm tiết cuối -gin)",
      },
      {
        en: "Visit -> Visiting",
        vi: "Thăm (Không gấp đôi vì trọng âm rơi vào âm tiết đầu vi-)",
      },
    ],
  },
  {
    id: "common-structures",
    category: "Sentence Structure",
    title: "Cấu trúc câu quan trọng",
    explanationVi:
      "Các cấu trúc ngữ pháp thông dụng giúp câu văn trở nên chuyên nghiệp hơn.",
    rules: [
      {
        title: "Too... to",
        contentVi:
          "S + be + too + adj + (for someone) + to-V (Quá... để làm gì).",
      },
      {
        title: "Enough",
        contentVi:
          "S + be + adj + enough + (for someone) + to-V (Đủ... để làm gì).",
      },
      {
        title: "So... that",
        contentVi: "S + be + so + adj + that + clause (Quá... đến nỗi mà).",
      },
      {
        title: "Such... that",
        contentVi:
          "S + V + such + (a/an) + adj + N + that + clause (Quá... đến nỗi mà).",
      },
      {
        title: "Used to",
        contentVi:
          "S + used to + V (Đã từng làm gì - thói quen trong quá khứ).",
      },
      {
        title: "Be/Get used to",
        contentVi: "S + be/get used to + V-ing (Quen với việc gì ở hiện tại).",
      },
    ],
    examples: [
      {
        en: "The box is too heavy to carry.",
        vi: "Cái hộp quá nặng để bê đi.",
      },
      {
        en: "She is tall enough to reach the shelf.",
        vi: "Cô ấy đủ cao để chạm tới cái giá.",
      },
      {
        en: "It was such a hot day that we stayed inside.",
        vi: "Trời nóng đến nỗi chúng tôi ở trong nhà.",
      },
    ],
  },
  {
    id: "structure-inversion",
    category: "Sentence Structure",
    title: "Cấu trúc Đảo ngữ (Inversion)",
    explanationVi: "Đảo trợ động từ lên trước chủ ngữ để nhấn mạnh.",
    structure: "Negative Adv + Auxiliary + S + V",
    rules: [
      {
        title: "Negative Adverbs",
        contentVi:
          "Đảo ngữ sau các trạng từ phủ định (Never, Seldom, Rarely, Hardly...).",
      },
      {
        title: "Negative Expressions",
        contentVi: "Only when, Only after, Under no circumstances.",
      },
      {
        title: "No sooner",
        contentVi: "No sooner + had + S + V3 + than + Clause.",
      },
    ],
    examples: [
      {
        en: "Never have I seen such a beautiful place.",
        vi: "Chưa bao giờ tôi thấy một nơi đẹp đến thế.",
      },
      {
        en: "Only when she left did I realize the truth.",
        vi: "Chỉ khi cô ấy rời đi tôi mới nhận ra sự thật.",
      },
      {
        en: "No sooner had they arrived than the rain started.",
        vi: "Họ vừa mới đến thì trời bắt đầu mưa.",
      },
    ],
  },
  {
    id: "sv-agreement",
    category: "Common Patterns",
    title: "Hòa hợp Chủ ngữ - Động từ (S-V Agreement)",
    explanationVi:
      "Quy tắc chia động từ phù hợp với chủ ngữ để đảm bảo tính chính xác.",
    structure:
      "Each + V(sing) | Neither A nor B (chia theo B) | A number of + V(plu)",
    rules: [
      {
        title: "Each/Every",
        contentVi:
          "Each/Every/Everyone/Something... luôn đi với động từ số ít.",
      },
      {
        title: "Neither/Either",
        contentVi:
          "Neither A nor B / Either A or B -> Động từ chia theo B (chủ ngữ gần nhất).",
      },
      {
        title: "Along with/As well as",
        contentVi: "S1 along with/as well as S2 -> Động từ chia theo S1.",
      },
      {
        title: "A number of vs The number of",
        contentVi:
          "+ A number of + N(số nhiều) + V(số nhiều) -> Nhiều...\n+ The number of + N(số nhiều) + V(số ít) -> Số lượng...",
      },
    ],
    caution:
      "Hãy xác định đúng Chủ ngữ chính. Các cụm từ nằm giữa dấu phẩy hoặc đi sau 'along with, as well as' không quyết định cách chia động từ.",
    examples: [
      { en: "Everyone has a secret.", vi: "Mọi người đều có một bí mật." },
      {
        en: "A number of students are absent today.",
        vi: "Nhiều học sinh vắng mặt hôm nay.",
      },
      { en: "The number of students is 50.", vi: "Sĩ số học sinh là 50." },
    ],
  },
];
