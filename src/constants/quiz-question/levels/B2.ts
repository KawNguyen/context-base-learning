import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "B2-0001",
    questionEn: "If I _____ you, I _____ accept the offer.",
    questionVi: "Nếu tôi _____ là bạn, tôi _____ sẽ chấp nhận lời đề nghị đó.",
    options: [
      { option: "were / would", isCorrect: true },
      { option: "was / will", isCorrect: false },
      { option: "am / will", isCorrect: false },
      { option: "be / would", isCorrect: false },
    ],
    explanationVi: "Điều kiện loại 2: If + S + were, S + would + V.",
    category: "Second Conditional",
  },
  {
    id: "B2-0002",
    questionEn: "The book _____ by the time I arrived.",
    questionVi: "Cuốn sách _____ đã được bán hết vào lúc tôi đến.",
    options: [
      { option: "had been sold", isCorrect: true },
      { option: "was sold", isCorrect: false },
      { option: "sold", isCorrect: false },
      { option: "has been sold", isCorrect: false },
    ],
    explanationVi: "Bị động quá khứ hoàn thành: had been V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B2-0003",
    questionEn: "I wish I _____ harder for the exam apart from English.",
    questionVi:
      "Tôi ước gì mình _____ đã học tập chăm chỉ hơn cho kỳ thi ngoài môn tiếng Anh.",
    options: [
      { option: "had studied", isCorrect: true },
      { option: "studied", isCorrect: false },
      { option: "study", isCorrect: false },
      { option: "have studied", isCorrect: false },
    ],
    explanationVi: "Ước cho quá khứ: Wish + QKHT.",
    category: "Other",
  },
  {
    id: "B2-0004",
    questionEn: "If it _____ yesterday, we would have gone out.",
    questionVi: "Nếu hôm qua trời _____ không mưa, chúng tôi đã đi chơi rồi.",
    options: [
      { option: "hadn't rained", isCorrect: true },
      { option: "didn't rain", isCorrect: false },
      { option: "weren't raining", isCorrect: false },
      { option: "hasn't rained", isCorrect: false },
    ],
    explanationVi: "Điều kiện loại 3: If + QKHT, S + would have V3.",
    category: "Conditional Type 3",
  },
  {
    id: "B2-0005",
    questionEn: "She said she _____ working there since 2010.",
    questionVi: "Cô ấy nói là cô ấy _____ đã làm việc ở đó từ năm 2010.",
    options: [
      { option: "had been", isCorrect: true },
      { option: "has been", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi: "Tường thuật: HTHTTD -> QKHTTD.",
    category: "Other",
  },
  {
    id: "B2-0006",
    questionEn: "By next year, we _____ here for 20 years.",
    questionVi:
      "Đến sang năm, chúng tôi _____ sẽ đã sống ở đây được 20 năm rồi.",
    options: [
      { option: "will have lived", isCorrect: true },
      { option: "have lived", isCorrect: false },
      { option: "will live", isCorrect: false },
      { option: "live", isCorrect: false },
    ],
    explanationVi: "Tương lai hoàn thành: will have V3 + for + time.",
    category: "Future",
  },
  {
    id: "B2-0007",
    questionEn: "This painting is believed _____ by Picasso.",
    questionVi: "Bức tranh này được tin là _____ đã được vẽ bởi Picasso.",
    options: [
      { option: "to have been painted", isCorrect: true },
      { option: "to be painted", isCorrect: false },
      { option: "painting", isCorrect: false },
      { option: "painted", isCorrect: false },
    ],
    explanationVi: "Bị động bị động cách: believed to have been V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B2-0008",
    questionEn: "No sooner _____ I arrived than the train left.",
    questionVi: "Ngay khi tôi vừa mới _____ đến nơi thì đoàn tàu rời đi.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ: No sooner + had + S + V3 + than...",
    category: "Other",
  },
  {
    id: "B2-0009",
    questionEn: "Hardly _____ sat down when the phone rang.",
    questionVi: "Tôi _____ vừa mới ngồi xuống thì điện thoại reo.",
    options: [
      { option: "had I", isCorrect: true },
      { option: "did I", isCorrect: false },
      { option: "have I", isCorrect: false },
      { option: "was I", isCorrect: false },
    ],
    explanationVi: "Hardly + had + S + V3 + when...",
    category: "Other",
  },
  {
    id: "B2-0010",
    questionEn: "Only when I call _____ you come.",
    questionVi: "Chỉ khi tôi gọi thì bạn mới _____ đến.",
    options: [
      { option: "will", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "are", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Only when + clause + auxiliary + S + V.",
    category: "Other",
  },
  {
    id: "B2-0011",
    questionEn: "Not until yesterday _____ the truth.",
    questionVi: "Phải mãi đến hôm qua tôi _____ mới biết sự thật.",
    options: [
      { option: "did I know", isCorrect: true },
      { option: "I knew", isCorrect: false },
      { option: "I know", isCorrect: false },
      { option: "had I known", isCorrect: false },
    ],
    explanationVi: "Not until + time/clause + did + S + V.",
    category: "Other",
  },
  {
    id: "B2-0012",
    questionEn: "Never _____ such a beautiful sight.",
    questionVi: "Tôi _____ chưa bao giờ thấy cảnh tượng nào đẹp như thế này.",
    options: [
      { option: "have I seen", isCorrect: true },
      { option: "I have seen", isCorrect: false },
      { option: "did I see", isCorrect: false },
      { option: "seen I", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Never: Never + aux + S + V.",
    category: "Other",
  },
  {
    id: "B2-0013",
    questionEn: "Little _____ he know about the surprise.",
    questionVi: "Anh ta hầu như _____ chẳng biết gì về sự bất ngờ đó.",
    options: [
      { option: "did", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Little: Little + did + S + V.",
    category: "Other",
  },
  {
    id: "B2-0014",
    questionEn: "Had I known, I _____ helped you.",
    questionVi: "Nếu tôi đã biết chuyện, tôi _____ sẽ đã giúp bạn rồi.",
    options: [
      { option: "would have", isCorrect: true },
      { option: "will have", isCorrect: false },
      { option: "would", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ điều kiện loại 3: Had + S + V3, S + would have V3.",
    category: "Other",
  },
  {
    id: "B2-0015",
    questionEn: "Should you see him, _____ him to call me.",
    questionVi: "Nếu bạn có gặp anh ấy, hãy _____ bảo anh ấy gọi cho tôi nhé.",
    options: [
      { option: "tell", isCorrect: true },
      { option: "told", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "to tell", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ điều kiện loại 1: Should + S + V, mệnh lệnh.",
    category: "Should / Ought to",
  },
  {
    id: "B2-0016",
    questionEn: "Were I you, I _____ go there.",
    questionVi: "Nếu tôi là bạn, tôi _____ sẽ không đến đó.",
    options: [
      { option: "wouldn't", isCorrect: true },
      { option: "won't", isCorrect: false },
      { option: "don't", isCorrect: false },
      { option: "didn't", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ điều kiện loại 2: Were + S + ..., S + would + V.",
    category: "Other",
  },
  {
    id: "B2-0017",
    questionEn: "It is essential that he _____ here on time.",
    questionVi: "Điều cốt yếu là anh ấy _____ phải có mặt ở đây đúng giờ.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi:
      "Thức giả định (Subjunctive): It is essential that S + (should) V nguyên thể.",
    category: "Other",
  },
  {
    id: "B2-0018",
    questionEn: "I suggest that she _____ harder.",
    questionVi: "Tôi đề nghị cô ấy _____ nên học tập chăm chỉ hơn.",
    options: [
      { option: "study", isCorrect: true },
      { option: "studies", isCorrect: false },
      { option: "studied", isCorrect: false },
      { option: "studying", isCorrect: false },
    ],
    explanationVi: "Subjunctive sau suggest: S + (should) V nguyên thể.",
    category: "Other",
  },
  {
    id: "B2-0019",
    questionEn: "The teacher demanded that everyone _____ quiet.",
    questionVi: "Giáo viên yêu cầu mọi người _____ phải giữ trật tự.",
    options: [
      { option: "keep", isCorrect: true },
      { option: "keeps", isCorrect: false },
      { option: "kept", isCorrect: false },
      { option: "keeping", isCorrect: false },
    ],
    explanationVi: "Subjunctive sau demand.",
    category: "Other",
  },
  {
    id: "B2-0020",
    questionEn: "God _____ the Queen!",
    questionVi: "Chúa _____ phù hộ Nữ hoàng!",
    options: [
      { option: "save", isCorrect: true },
      { option: "saves", isCorrect: false },
      { option: "saved", isCorrect: false },
      { option: "saving", isCorrect: false },
    ],
    explanationVi: "Câu cầu khiến (Subjunctive): God save...",
    category: "Other",
  },
  {
    id: "B2-0021",
    questionEn: "Whatever _____, I will always love you.",
    questionVi: "Dù có chuyện gì _____ xảy ra đi nữa, tôi sẽ luôn yêu em.",
    options: [
      { option: "happens", isCorrect: true },
      { option: "happen", isCorrect: false },
      { option: "happened", isCorrect: false },
      { option: "happening", isCorrect: false },
    ],
    explanationVi: "Whatever happens (HTĐ).",
    category: "Other",
  },
  {
    id: "B2-0022",
    questionEn: "However rich he _____, he isn't happy.",
    questionVi:
      "Dù anh ta có giàu _____ đến đâu, anh ta cũng không thấy hạnh phúc.",
    options: [
      { option: "is", isCorrect: true },
      { option: "be", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi: "However + adj + S + V.",
    category: "Other",
  },
  {
    id: "B2-0023",
    questionEn: "No matter how _____ you try, you can't lift it.",
    questionVi:
      "Dù bạn có cố gắng _____ đến thế nào, bạn cũng không thể nhấc nó lên.",
    options: [
      { option: "hard", isCorrect: true },
      { option: "hardly", isCorrect: false },
      { option: "hardness", isCorrect: false },
      { option: "harder", isCorrect: false },
    ],
    explanationVi: "No matter how + adj/adv.",
    category: "Other",
  },
  {
    id: "B2-0024",
    questionEn: "Unless you _____ been there, you wouldn't understand.",
    questionVi:
      "Trừ khi bạn _____ đã từng ở đó, nếu không bạn sẽ không hiểu được đâu.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "Điều kiện loại 3 (rút gọn): Unless = If + not.",
    category: "Conditional Type 3",
  },
  {
    id: "B2-0025",
    questionEn: "Is he the man _____ you were talking about?",
    questionVi: "Đó có phải là người đàn ông _____ mà bạn đang nói tới không?",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi: "Đại từ quan hệ làm tân ngữ cho giới từ: whom.",
    category: "Other",
  },
  {
    id: "B2-0026",
    questionEn: "The car _____ he bought is very expensive.",
    questionVi: "Chiếc xe _____ anh ấy mua rất đắt đỏ.",
    options: [
      { option: "which", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi: "Đại từ quan hệ chỉ vật làm tân ngữ.",
    category: "Other",
  },
  {
    id: "B2-0027",
    questionEn: "The hotel _____ we stayed was very clean.",
    questionVi: "Khách sạn _____ nơi chúng tôi ở rất sạch sẽ.",
    options: [
      { option: "where", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi: "Trạng từ quan hệ chỉ nơi chốn.",
    category: "Relative Clauses",
  },
  {
    id: "B2-0028",
    questionEn: "2010 was the year _____ I graduated.",
    questionVi: "Năm 2010 là năm _____ tôi tốt nghiệp.",
    options: [
      { option: "when", isCorrect: true },
      { option: "where", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi: "Trạng từ quan hệ chỉ thời gian.",
    category: "Relative Clauses",
  },
  {
    id: "B2-0029",
    questionEn: "I don't know the reason _____ she left.",
    questionVi: "Tôi không biết lý do _____ cô ấy rời đi.",
    options: [
      { option: "why", isCorrect: true },
      { option: "where", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi: "Trạng từ quan hệ chỉ lý do.",
    category: "Relative Clauses",
  },
  {
    id: "B2-0030",
    questionEn: "Whoever _____ arrives first wins.",
    questionVi: "Bất kỳ ai _____ đến đầu tiên sẽ giành chiến thắng.",
    options: [
      { option: "", isCorrect: true },
      { option: "he", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "they", isCorrect: false },
    ],
    explanationVi: "Whoever làm chủ ngữ cho mệnh đề.",
    category: "Other",
  },
  {
    id: "B2-0031",
    questionEn: "He asked me what _____.",
    questionVi: "Anh ấy hỏi tôi _____ đó là cái gì.",
    options: [
      { option: "it was", isCorrect: true },
      { option: "was it", isCorrect: false },
      { option: "it is", isCorrect: false },
      { option: "is it", isCorrect: false },
    ],
    explanationVi: "Câu hỏi gián tiếp: từ để hỏi + S + V(lùi thì).",
    category: "Other",
  },
  {
    id: "B2-0032",
    questionEn: "She wonders if _____ rain today.",
    questionVi: "Cô ấy tự hỏi liệu hôm nay trời _____ có mưa không.",
    options: [
      { option: "it will", isCorrect: true },
      { option: "will it", isCorrect: false },
      { option: "it would", isCorrect: false },
      { option: "would it", isCorrect: false },
    ],
    explanationVi: "Câu hỏi gián tiếp Yes/No.",
    category: "Other",
  },
  {
    id: "B2-0033",
    questionEn: "I'd rather you _____ talk so loud.",
    questionVi: "Tôi muốn bạn _____ đừng nói chuyện quá to như thế.",
    options: [
      { option: "didn't", isCorrect: true },
      { option: "don't", isCorrect: false },
      { option: "won't", isCorrect: false },
      { option: "not", isCorrect: false },
    ],
    explanationVi: "Would rather + S + V(quá khứ).",
    category: "Other",
  },
  {
    id: "B2-0034",
    questionEn: "It is high time you _____ a job.",
    questionVi: "Đã đến lúc bạn _____ phải tìm một công việc rồi đấy.",
    options: [
      { option: "found", isCorrect: true },
      { option: "find", isCorrect: false },
      { option: "finding", isCorrect: false },
      { option: "to find", isCorrect: false },
    ],
    explanationVi: "It is (high) time + S + V(quá khứ).",
    category: "Other",
  },
  {
    id: "B2-0035",
    questionEn: "If only I _____ more money now.",
    questionVi: "Giá mà bây giờ tôi _____ có nhiều tiền hơn.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "was having", isCorrect: false },
    ],
    explanationVi: "If only cho điều ước ở hiện tại.",
    category: "Other",
  },
  {
    id: "B2-0036",
    questionEn: "He looks as though he _____ seen a ghost.",
    questionVi: "Anh ta trông cứ như thể _____ đã gặp ma vậy.",
    options: [
      { option: "had", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "As if / As though + QKHT (giả định quá khứ).",
    category: "Other",
  },
  {
    id: "B2-0037",
    questionEn: "I'm tired. I _____ working all day.",
    questionVi: "Tôi mệt. Tôi _____ đã làm việc cả ngày rồi.",
    options: [
      { option: "have been", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "Hiện tại hoàn thành tiếp diễn: nhấn mạnh quá trình.",
    category: "Present Perfect",
  },
  {
    id: "B2-0038",
    questionEn: "When I arrived, they _____ for 2 hours.",
    questionVi: "Khi tôi đến, họ _____ đã chờ được 2 tiếng rồi.",
    options: [
      { option: "had been waiting", isCorrect: true },
      { option: "waited", isCorrect: false },
      { option: "were waiting", isCorrect: false },
      { option: "have been waiting", isCorrect: false },
    ],
    explanationVi: "Quá khứ hoàn thành tiếp diễn xẩy ra trước 1 mốc quá khứ.",
    category: "Past Perfect Continuous",
  },
  {
    id: "B2-0039",
    questionEn:
      "By the end of this month, I _____ for this company for 10 years.",
    questionVi:
      "Đến cuối tháng này, tôi _____ sẽ làm việc cho công ty này được tròn 10 năm.",
    options: [
      { option: "will have been working", isCorrect: true },
      { option: "will work", isCorrect: false },
      { option: "have worked", isCorrect: false },
      { option: "will be working", isCorrect: false },
    ],
    explanationVi: "Tương lai hoàn thành tiếp diễn.",
    category: "Future Perfect Continuous",
  },
  {
    id: "B2-0040",
    questionEn: "I'm looking forward to _____ you again.",
    questionVi: "Tôi rất mong được _____ gặp lại bạn.",
    options: [
      { option: "seeing", isCorrect: true },
      { option: "see", isCorrect: false },
      { option: "to see", isCorrect: false },
      { option: "seen", isCorrect: false },
    ],
    explanationVi: "Look forward to + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0041",
    questionEn: "It's no use _____ for him.",
    questionVi: "Thật vô ích khi _____ phải chờ đợi anh ta.",
    options: [
      { option: "waiting", isCorrect: true },
      { option: "to wait", isCorrect: false },
      { option: "wait", isCorrect: false },
      { option: "waited", isCorrect: false },
    ],
    explanationVi: "It's no use + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0042",
    questionEn: "I remember _____ off the lights before I left.",
    questionVi: "Tôi nhớ là _____ đã tắt đèn trước khi đi rồi.",
    options: [
      { option: "turning", isCorrect: true },
      { option: "to turn", isCorrect: false },
      { option: "turn", isCorrect: false },
      { option: "turned", isCorrect: false },
    ],
    explanationVi: "Remember + V-ing: nhớ đã làm gì.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0043",
    questionEn: "Please remember _____ the lights when you leave.",
    questionVi: "Hãy nhớ _____ tắt đèn khi bạn rời đi nhé.",
    options: [
      { option: "to turn", isCorrect: true },
      { option: "turning", isCorrect: false },
      { option: "turn", isCorrect: false },
      { option: "turned", isCorrect: false },
    ],
    explanationVi: "Remember + to V: nhớ phải làm gì.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0044",
    questionEn: "I tried _____ the door, but it was locked.",
    questionVi: "Tôi đã thử _____ mở cửa, nhưng nó đã bị khóa.",
    options: [
      { option: "opening", isCorrect: true },
      { option: "to open", isCorrect: false },
      { option: "open", isCorrect: false },
      { option: "opened", isCorrect: false },
    ],
    explanationVi: "Try V-ing: thử làm việc gì đó.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0045",
    questionEn: "He tried _____ the heavy box, but he couldn't.",
    questionVi:
      "Anh ấy đã cố gắng _____ bê chiếc hộp nặng đó, nhưng không thể.",
    options: [
      { option: "to lift", isCorrect: true },
      { option: "lifting", isCorrect: false },
      { option: "lift", isCorrect: false },
      { option: "lifted", isCorrect: false },
    ],
    explanationVi: "Try to V: cố gắng làm việc gì đó.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0046",
    questionEn: "She stopped _____ a rest.",
    questionVi: "Cô ấy đã dừng lại để _____ nghỉ ngơi.",
    options: [
      { option: "to have", isCorrect: true },
      { option: "having", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Stop to V: dừng lại để làm gì.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0047",
    questionEn: "He stopped _____ 2 years ago.",
    questionVi: "Anh ấy đã bỏ _____ cách đây 2 năm.",
    options: [
      { option: "smoking", isCorrect: true },
      { option: "to smoke", isCorrect: false },
      { option: "smoke", isCorrect: false },
      { option: "smoked", isCorrect: false },
    ],
    explanationVi: "Stop V-ing: dừng hẳn việc gì đó.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0048",
    questionEn: "I'll never forget _____ her for the first time.",
    questionVi: "Tôi sẽ không bao giờ quên _____ lần đầu tiên gặp cô ấy.",
    options: [
      { option: "meeting", isCorrect: true },
      { option: "to meet", isCorrect: false },
      { option: "meet", isCorrect: false },
      { option: "met", isCorrect: false },
    ],
    explanationVi: "Forget V-ing: quên đã làm gì.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0049",
    questionEn: "Don't forget _____ the door.",
    questionVi: "Đừng quên _____ khóa cửa nhé.",
    options: [
      { option: "to lock", isCorrect: true },
      { option: "locking", isCorrect: false },
      { option: "lock", isCorrect: false },
      { option: "locked", isCorrect: false },
    ],
    explanationVi: "Forget to V: quên phải làm gì.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0050",
    questionEn: "I am used to _____ in the city.",
    questionVi: "Tôi đã quen _____ với việc sống ở thành phố rồi.",
    options: [
      { option: "living", isCorrect: true },
      { option: "live", isCorrect: false },
      { option: "to live", isCorrect: false },
      { option: "lived", isCorrect: false },
    ],
    explanationVi: "Be used to + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0051",
    questionEn: "He used to _____ here.",
    questionVi: "Anh ấy đã từng _____ sống ở đây.",
    options: [
      { option: "live", isCorrect: true },
      { option: "living", isCorrect: false },
      { option: "to live", isCorrect: false },
      { option: "lived", isCorrect: false },
    ],
    explanationVi: "Used to + V.",
    category: "Other",
  },
  {
    id: "B2-0052",
    questionEn: "The bridge is _____ built.",
    questionVi: "Cây cầu _____ đang được xây dựng.",
    options: [
      { option: "being", isCorrect: true },
      { option: "been", isCorrect: false },
      { option: "be", isCorrect: false },
      { option: "building", isCorrect: false },
    ],
    explanationVi: "Bị động tiếp diễn: is being V3.",
    category: "Passive Voice (Present Continuous)",
  },
  {
    id: "B2-0053",
    questionEn: "The work _____ finished by next week.",
    questionVi: "Công việc _____ sẽ được hoàn thành vào tuần tới.",
    options: [
      { option: "will be", isCorrect: true },
      { option: "is being", isCorrect: false },
      { option: "has been", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "Bị động tương lai đơn.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B2-0054",
    questionEn: "He gets his car _____ every week.",
    questionVi: "Anh ấy _____ cho người rửa xe mỗi tuần.",
    options: [
      { option: "washed", isCorrect: true },
      { option: "wash", isCorrect: false },
      { option: "washing", isCorrect: false },
      { option: "to wash", isCorrect: false },
    ],
    explanationVi: "Get sth done.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B2-0055",
    questionEn: "I had the mechanic _____ my car.",
    questionVi: "Tôi đã nhờ thợ cơ khí _____ sửa xe của mình.",
    options: [
      { option: "repair", isCorrect: true },
      { option: "to repair", isCorrect: false },
      { option: "repairing", isCorrect: false },
      { option: "repaired", isCorrect: false },
    ],
    explanationVi: "Have sb V.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0056",
    questionEn: "She helped me _____ the work.",
    questionVi: "Cô ấy đã giúp tôi _____ hoàn thành công việc.",
    options: [
      { option: "do", isCorrect: true },
      { option: "done", isCorrect: false },
      { option: "doing", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi: "Help sb (to) V.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0057",
    questionEn: "I made him _____ everything.",
    questionVi: "Tôi đã bắt anh ta _____ phải kể hết mọi chuyện.",
    options: [
      { option: "tell", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false },
    ],
    explanationVi: "Make sb V.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0058",
    questionEn: "He was made _____ the truth.",
    questionVi: "Anh ta _____ bị bắt phải nói ra sự thật.",
    options: [
      { option: "to tell", isCorrect: true },
      { option: "tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false },
    ],
    explanationVi: "Be made to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0059",
    questionEn: "Let me _____.",
    questionVi: "Hãy để tôi _____ đi.",
    options: [
      { option: "go", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "going", isCorrect: false },
      { option: "gone", isCorrect: false },
    ],
    explanationVi: "Let sb V.",
    category: "Infinitives (to V)",
  },
  {
    id: "B2-0060",
    questionEn: "I am interested _____ learning English.",
    questionVi: "Tôi quan tâm _____ đến việc học tiếng Anh.",
    options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "about", isCorrect: false },
    ],
    explanationVi: "Interested in.",
    category: "Other",
  },
  {
    id: "B2-0061",
    questionEn: "She is good _____ Math.",
    questionVi: "Cô ấy giỏi _____ môn Toán.",
    options: [
      { option: "at", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Good at.",
    category: "Other",
  },
  {
    id: "B2-0062",
    questionEn: "He is afraid _____ dogs.",
    questionVi: "Anh ấy sợ _____ chó.",
    options: [
      { option: "of", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "on", isCorrect: false },
    ],
    explanationVi: "Afraid of.",
    category: "Other",
  },
  {
    id: "B2-0063",
    questionEn: "I am bored _____ this film.",
    questionVi: "Tôi thấy chán _____ bộ phim này rồi.",
    options: [
      { option: "with", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "of", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Bored with.",
    category: "Other",
  },
  {
    id: "B2-0064",
    questionEn: "This is different _____ that one.",
    questionVi: "Cái này khác _____ với cái kia.",
    options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "than", isCorrect: false },
    ],
    explanationVi: "Different from.",
    category: "Other",
  },
  {
    id: "B2-0065",
    questionEn: "I am familiar _____ this place.",
    questionVi: "Tôi _____ đã quen thuộc với nơi này rồi.",
    options: [
      { option: "with", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi: "Familiar with.",
    category: "Other",
  },
  {
    id: "B2-0066",
    questionEn: "He is responsible _____ the accident.",
    questionVi: "Anh ấy _____ phải chịu trách nhiệm về vụ tai nạn.",
    options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Responsible for.",
    category: "Other",
  },
  {
    id: "B2-0067",
    questionEn: "I am proud _____ you.",
    questionVi: "Tôi tự hào _____ về bạn.",
    options: [
      { option: "of", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Proud of.",
    category: "Other",
  },
  {
    id: "B2-0068",
    questionEn: "She is capable _____ doing it.",
    questionVi: "Cô ấy có khả năng _____ làm việc đó.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi: "Capable of.",
    category: "Other",
  },
  {
    id: "B2-0069",
    questionEn: "Are you aware _____ the situation?",
    questionVi: "Bạn có nhận thức được _____ tình hình không?",
    options: [
      { option: "of", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Aware of.",
    category: "Other",
  },
  {
    id: "B2-0070",
    questionEn: "This book belongs _____ her.",
    questionVi: "Cuốn sách này thuộc _____ về cô ấy.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Belong to.",
    category: "Other",
  },
  {
    id: "B2-0071",
    questionEn: "He apologized _____ the mistake.",
    questionVi: "Anh ấy đã xin lỗi _____ vì sai sót đó.",
    options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "about", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Apologize for.",
    category: "Other",
  },
  {
    id: "B2-0072",
    questionEn: "I congratulated her _____ her success.",
    questionVi: "Tôi đã chúc mừng cô ấy _____ vì sự thành công của cô ấy.",
    options: [
      { option: "on", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi: "Congratulate on.",
    category: "Other",
  },
  {
    id: "B2-0073",
    questionEn: "He prevents me _____ going out.",
    questionVi: "Anh ấy ngăn cản tôi _____ việc đi ra ngoài.",
    options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Prevent sb from V-ing.",
    category: "Other",
  },
  {
    id: "B2-0074",
    questionEn: "I suffer _____ headaches.",
    questionVi: "Tôi bị _____ đau đầu.",
    options: [
      { option: "from", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
      { option: "about", isCorrect: false },
    ],
    explanationVi: "Suffer from.",
    category: "Other",
  },
  {
    id: "B2-0075",
    questionEn: "She depends _____ her parents.",
    questionVi: "Cô ấy phụ thuộc _____ vào bố mẹ mình.",
    options: [
      { option: "on", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Depend on.",
    category: "Other",
  },
  {
    id: "B2-0076",
    questionEn: "He succeeded _____ passing the exam.",
    questionVi: "Anh ấy đã thành công _____ trong việc thi đỗ.",
    options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Succeed in V-ing.",
    category: "Other",
  },
  {
    id: "B2-0077",
    questionEn: "I am used to _____ up late.",
    questionVi: "Tôi đã quen _____ với việc thức khuya.",
    options: [
      { option: "staying", isCorrect: true },
      { option: "stay", isCorrect: false },
      { option: "to stay", isCorrect: false },
      { option: "stayed", isCorrect: false },
    ],
    explanationVi: "Be used to + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0078",
    questionEn: "He used to _____ a lot.",
    questionVi: "Anh ấy đã từng _____ uống rượu nhiều.",
    options: [
      { option: "drink", isCorrect: true },
      { option: "drinking", isCorrect: false },
      { option: "to drink", isCorrect: false },
      { option: "drank", isCorrect: false },
    ],
    explanationVi: "Used to + V.",
    category: "Other",
  },
  {
    id: "B2-0079",
    questionEn: "It's no use _____ about it more.",
    questionVi: "Thật vô ích khi cứ _____ lo lắng thêm về việc đó.",
    options: [
      { option: "worrying", isCorrect: true },
      { option: "to worry", isCorrect: false },
      { option: "worry", isCorrect: false },
      { option: "worried", isCorrect: false },
    ],
    explanationVi: "It's no use + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0080",
    questionEn: "I look forward to _____ from you soon.",
    questionVi: "Tôi rất mong sớm _____ nhận được tin từ bạn.",
    options: [
      { option: "hearing", isCorrect: true },
      { option: "hear", isCorrect: false },
      { option: "to hear", isCorrect: false },
      { option: "heard", isCorrect: false },
    ],
    explanationVi: "Look forward to + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0081",
    questionEn: "She suggested _____ to the park.",
    questionVi: "Cô ấy đã gợi ý _____ đi công viên.",
    options: [
      { option: "going", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: false },
    ],
    explanationVi: "Suggest + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0082",
    questionEn: "I'd rather _____ home.",
    questionVi: "Tôi muốn _____ về nhà hơn.",
    options: [
      { option: "stay", isCorrect: true },
      { option: "to stay", isCorrect: false },
      { option: "staying", isCorrect: false },
      { option: "stayed", isCorrect: false },
    ],
    explanationVi: "Would rather + V.",
    category: "Other",
  },
  {
    id: "B2-0083",
    questionEn: "I'd rather you _____ talk during the movie.",
    questionVi: "Tôi muốn bạn _____ đừng nói chuyện trong suốt bộ phim.",
    options: [
      { option: "didn't", isCorrect: true },
      { option: "don't", isCorrect: false },
      { option: "won't", isCorrect: false },
      { option: "not", isCorrect: false },
    ],
    explanationVi: "Would rather + S + V(quá khứ).",
    category: "Other",
  },
  {
    id: "B2-0084",
    questionEn: "It is time we _____.",
    questionVi: "Đã đến lúc chúng ta _____ phải đi rồi.",
    options: [
      { option: "left", isCorrect: true },
      { option: "leave", isCorrect: false },
      { option: "to leave", isCorrect: false },
      { option: "leaving", isCorrect: false },
    ],
    explanationVi: "It is time + S + V(quá khứ).",
    category: "Other",
  },
  {
    id: "B2-0085",
    questionEn: "You'd better _____ the truth.",
    questionVi: "Tốt hơn là bạn _____ nên nói ra sự thật.",
    options: [
      { option: "tell", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false },
    ],
    explanationVi: "Had better + V.",
    category: "Other",
  },
  {
    id: "B2-0086",
    questionEn: "He admitted _____ the secret.",
    questionVi: "Anh ấy đã thừa nhận _____ việc làm lộ bí mật.",
    options: [
      { option: "telling", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "tell", isCorrect: false },
      { option: "told", isCorrect: false },
    ],
    explanationVi: "Admit + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0087",
    questionEn: "I avoid _____ to him.",
    questionVi: "Tôi tránh _____ việc nói chuyện với anh ta.",
    options: [
      { option: "talking", isCorrect: true },
      { option: "to talk", isCorrect: false },
      { option: "talk", isCorrect: false },
      { option: "talked", isCorrect: false },
    ],
    explanationVi: "Avoid + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0088",
    questionEn: "She keeps _____.",
    questionVi: "Cô ấy cứ _____ khóc mãi.",
    options: [
      { option: "crying", isCorrect: true },
      { option: "to cry", isCorrect: false },
      { option: "cry", isCorrect: false },
      { option: "cried", isCorrect: false },
    ],
    explanationVi: "Keep + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0089",
    questionEn: "He denied _____ the window.",
    questionVi: "Anh ta đã phủ nhận _____ việc làm vỡ cửa sổ.",
    options: [
      { option: "breaking", isCorrect: true },
      { option: "to break", isCorrect: false },
      { option: "break", isCorrect: false },
      { option: "broken", isCorrect: false },
    ],
    explanationVi: "Deny + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0090",
    questionEn: "I postpone _____ the meeting.",
    questionVi: "Tôi hoãn _____ cuộc họp lại.",
    options: [
      { option: "holding", isCorrect: true },
      { option: "to hold", isCorrect: false },
      { option: "hold", isCorrect: false },
      { option: "held", isCorrect: false },
    ],
    explanationVi: "Postpone + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0091",
    questionEn: "She finished _____ her homework.",
    questionVi: "Cô ấy đã làm xong _____ bài tập về nhà.",
    options: [
      { option: "doing", isCorrect: true },
      { option: "to do", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "done", isCorrect: false },
    ],
    explanationVi: "Finish + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0092",
    questionEn: "I can't imagine _____ there.",
    questionVi: "Tôi không thể tưởng tượng được _____ việc sống ở đó.",
    options: [
      { option: "living", isCorrect: true },
      { option: "to live", isCorrect: false },
      { option: "live", isCorrect: false },
      { option: "lived", isCorrect: false },
    ],
    explanationVi: "Imagine + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0093",
    questionEn: "He practiced _____ the guitar.",
    questionVi: "Anh ấy đã luyện tập _____ chơi guitar.",
    options: [
      { option: "playing", isCorrect: true },
      { option: "to play", isCorrect: false },
      { option: "play", isCorrect: false },
      { option: "played", isCorrect: false },
    ],
    explanationVi: "Practice + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0094",
    questionEn: "We enjoy _____ football.",
    questionVi: "Chúng tôi thích _____ chơi bóng đá.",
    options: [
      { option: "playing", isCorrect: true },
      { option: "to play", isCorrect: false },
      { option: "play", isCorrect: false },
      { option: "played", isCorrect: false },
    ],
    explanationVi: "Enjoy + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0095",
    questionEn: "Would you mind _____ the door?",
    questionVi: "Bạn có phiền _____ về việc đóng cửa không?",
    options: [
      { option: "closing", isCorrect: true },
      { option: "to close", isCorrect: false },
      { option: "close", isCorrect: false },
      { option: "closed", isCorrect: false },
    ],
    explanationVi: "Mind + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0096",
    questionEn: "I don't feel like _____ out.",
    questionVi: "Tôi không cảm thấy muốn _____ đi chơi.",
    options: [
      { option: "going", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: false },
    ],
    explanationVi: "Feel like + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0097",
    questionEn: "He risked _____ his job.",
    questionVi: "Anh ấy đã mạo hiểm _____ công việc của mình.",
    options: [
      { option: "losing", isCorrect: true },
      { option: "to lose", isCorrect: false },
      { option: "lose", isCorrect: false },
      { option: "lost", isCorrect: false },
    ],
    explanationVi: "Risk + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-0098",
    questionEn: "I can't resist _____ chocolate.",
    questionVi: "Tôi không thể cưỡng lại được _____ việc ăn sô-cô-la.",
    options: [
      { option: "eating", isCorrect: true },
      { option: "to eat", isCorrect: false },
      { option: "eat", isCorrect: false },
      { option: "ate", isCorrect: false },
    ],
    explanationVi: "Resist + V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "B2-1011",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "An urgent recommendation from a consultant.",
    contextVi: "Một đề xuất khẩn cấp từ một cố vấn.",
    questionEn:
      "It is essential that the accounting department _____ its records by the end of the day.",
    questionVi:
      "Điều quan trọng là bộ phận kế toán _____ hồ sơ của mình trước cuối ngày.",
    options: [
      { option: "updates", isCorrect: false },
      { option: "update", isCorrect: true },
      { option: "updated", isCorrect: false },
      { option: "updating", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive): It is essential that S + (should) V-base.",
    category: "Sentence Structure",
  },
  {
    id: "B2-1012",
    topicId: "inversion-patterns",
    questionType: "structure",
    contextEn: "Discussing a rare market occurrence.",
    contextVi: "Thảo luận về một hiện tượng thị trường hiếm gặp.",
    questionEn:
      "Under no circumstances _____ the company responsible for damages caused by misuse.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, công ty _____ không chịu trách nhiệm về thiệt hại do sử dụng sai mục đích.",
    options: [
      { option: "is", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "be", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Under no circumstances' đứng đầu câu: Negative phrase + Auxiliary/Be + S.",
    category: "Sentence Structure",
  },
  {
    id: "B2-1013",
    topicId: "subordinating-conjunctions",
    questionType: "structure",
    contextEn: "Policy regarding employee expense reimbursement.",
    contextVi: "Chính sách liên quan đến việc hoàn trả chi phí cho nhân viên.",
    questionEn:
      "Expenses will be reimbursed _____ they are within the approved budget guidelines.",
    questionVi:
      "Các chi phí sẽ được hoàn trả _____ chúng nằm trong hướng dẫn ngân sách đã được phê duyệt.",
    options: [
      { option: "as long as", isCorrect: true },
      { option: "even so", isCorrect: false },
      { option: "unless", isCorrect: false },
      { option: "in spite of", isCorrect: false },
    ],
    explanationVi: "Sử dụng 'as long as' (miễn là) để chỉ điều kiện.",
    category: "Conjunctions",
  },
  {
    id: "B2-2000",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Describing someone evaluated in an interview.",
    contextVi: "Mô tả một người được đánh giá trong buổi phỏng vấn.",
    questionEn:
      "The candidate _____ the panel interviewed yesterday has excellent qualifications.",
    questionVi:
      "Ứng viên _____ mà hội đồng đã phỏng vấn ngày hôm qua có bằng cấp xuất sắc.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whom' vì đại từ quan hệ là tân ngữ của 'interviewed'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1014",
    topicId: "complex-sentence-patterns",
    questionType: "word-form",
    contextEn: "A manager praising an employee's contribution.",
    contextVi: "Một quản lý khen ngợi sự đóng góp của nhân viên.",
    questionEn:
      "Mr. Henderson’s contribution to the project was _____ appreciated by the entire board.",
    questionVi:
      "Sự đóng góp của ông Henderson cho dự án đã được toàn bộ hội đồng quản trị đánh giá _____ cao.",
    options: [
      { option: "great", isCorrect: false },
      { option: "greatness", isCorrect: false },
      { option: "greatly", isCorrect: true },
      { option: "greater", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ (Adv) 'greatly' để bổ nghĩa cho động từ phân từ 'appreciated'.",
    category: "Word Forms",
  },
  {
    id: "B2-1015",
    topicId: "modals-should-ought-to",
    questionType: "grammar",
    contextEn: "Regretting a missed opportunity in the past.",
    contextVi: "Hối tiếc về một cơ hội đã bỏ lỡ trong quá khứ.",
    questionEn:
      "We _____ the contract earlier before the competitors made their offer.",
    questionVi:
      "Chúng ta _____ ký hợp đồng sớm hơn trước khi các đối thủ đưa ra lời đề nghị của họ.",
    options: [
      { option: "should sign", isCorrect: false },
      { option: "should have signed", isCorrect: true },
      { option: "must sign", isCorrect: false },
      { option: "could sign", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'should have + V3' để diễn tả một hành động lẽ ra nên làm trong quá khứ nhưng đã không làm.",
    category: "Modals",
  },
  {
    id: "B2-1016",
    topicId: "relative-clauses-whom-whose",
    questionType: "structure",
    contextEn: "A formal introduction of a keynote speaker.",
    contextVi: "Lời giới thiệu trang trọng về một diễn giả chính.",
    questionEn:
      "The speaker, _____ we invited from London, will focus on digital marketing trends.",
    questionVi:
      "Diễn giả, _____ người mà chúng tôi đã mời từ London, sẽ tập trung vào các xu hướng tiếp thị kỹ thuật số.",
    options: [
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: true },
      { option: "whose", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whom' làm tân ngữ cho động từ 'invited' trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1017",
    topicId: "adverbs-categories",
    questionType: "word-form",
    contextEn: "A CEO talking about company values.",
    contextVi: "Một CEO nói về các giá trị của công ty.",
    questionEn:
      "Our company strives to provide _____ high-quality service to all clients.",
    questionVi:
      "Công ty chúng tôi nỗ lực cung cấp dịch vụ chất lượng cao một cách _____ cho tất cả khách hàng.",
    options: [
      { option: "consistent", isCorrect: false },
      { option: "consistently", isCorrect: true },
      { option: "consistency", isCorrect: false },
      { option: "consisted", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ (consistently) để bổ nghĩa cho cụm tính từ 'high-quality'.",
    category: "Word Forms",
  },
  {
    id: "B2-1018",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "Instructions for using new software.",
    contextVi: "Hướng dẫn sử dụng phần mềm mới.",
    questionEn:
      "The software upgrade will make the system run _____ than before.",
    questionVi:
      "Bản nâng cấp phần mềm sẽ làm cho hệ thống chạy _____ hơn trước.",
    options: [
      { option: "fast", isCorrect: false },
      { option: "faster", isCorrect: true },
      { option: "fastly", isCorrect: false },
      { option: "fastest", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh hơn với trạng từ (fast -> faster). Sau 'make the system run' là một trạng từ.",
    category: "Sentence Structure",
  },
  {
    id: "B2-1019",
    topicId: "subordinating-conjunctions",
    questionType: "structure",
    contextEn: "Justifying a decision to switch suppliers.",
    contextVi: "Giải thích cho quyết định thay đổi nhà cung cấp.",
    questionEn:
      "We decided to switch suppliers _____ the rising costs of raw materials.",
    questionVi:
      "Chúng tôi đã quyết định thay đổi nhà cung cấp _____ chi phí nguyên liệu thô tăng cao.",
    options: [
      { option: "because", isCorrect: false },
      { option: "due to", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "despite", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'due to' vì sau đó là một cụm danh từ (the rising costs...).",
    category: "Conjunctions",
  },
  {
    id: "B2-1020",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "Meeting consensus.",
    contextVi: "Sự đồng thuận trong cuộc họp.",
    questionEn: "The committee found the proposed plan _____.",
    questionVi: "Ủy ban nhận thấy bản kế hoạch đề xuất _____.",
    options: [
      { option: "satisfy", isCorrect: false },
      { option: "satisfactory", isCorrect: true },
      { option: "satisfactorily", isCorrect: false },
      { option: "satisfaction", isCorrect: false },
    ],
    explanationVi: "Cấu trúc S-V-O-C: Find + Object + Adj.",
    category: "Sentence Structure",
  },
  {
    id: "B2-1457",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Discussing an ongoing market research project.",
    contextVi: "Thảo luận về một dự án nghiên cứu thị trường đang diễn ra.",
    questionEn:
      "We _____ the consumer trends in Southeast Asia for the last six months to prepare for the expansion.",
    questionVi:
      "Chúng tôi _____ các xu hướng tiêu dùng ở Đông Nam Á trong sáu tháng qua để chuẩn bị cho việc mở rộng.",
    options: [
      { option: "have been analyzing", isCorrect: true },
      { option: "had been analyzing", isCorrect: false },
      { option: "analyzed", isCorrect: false },
      { option: "are analyzing", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh tính liên tục của hành động kéo dài từ quá khứ đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1458",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Deducing the cause of a project delay.",
    contextVi: "Suy luận nguyên nhân dẫn đến sự trì hoãn dự án.",
    questionEn:
      "The project _____ been delayed due to the sudden change in government regulations.",
    questionVi:
      "Dự án _____ đã bị trì hoãn do sự thay đổi đột ngột trong các quy định của chính phủ.",
    options: [
      { option: "must have", isCorrect: true },
      { option: "should have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "might have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'must have + V3/ed' để đưa ra một suy luận chắc chắn về một sự việc trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1459",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Specifying the reasons for a strategy shift.",
    contextVi: "Nêu cụ thể lý do cho sự thay đổi chiến lược.",
    questionEn:
      "The reasons _____ the board decided to shift the marketing focus remain confidential for now.",
    questionVi:
      "Lý do _____ ban điều hành quyết định thay đổi trọng tâm tiếp thị vẫn được giữ bí mật vào lúc này.",
    options: [
      { option: "why", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "where", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ quan hệ 'why' dùng để thay thế cho lý do (the reasons why).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1460",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the complexity of two legal documents.",
    contextVi: "So sánh mức độ phức tạp của hai văn bản pháp lý.",
    questionEn:
      "This year's merger agreement is considerably _____ than the one we signed three years ago.",
    questionVi:
      "Thỏa thuận sáp nhập năm nay phức tạp hơn _____ đáng kể so với thỏa thuận chúng ta đã ký ba năm trước.",
    options: [
      { option: "more complex", isCorrect: true },
      { option: "complexer", isCorrect: false },
      { option: "most complex", isCorrect: false },
      { option: "as complex", isCorrect: false },
    ],
    explanationVi: "Cấu trúc so sánh hơn với tính từ dài (more + Adj + than).",
    category: "Comparison",
  },
  {
    id: "B2-1461",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Announcing a future conference location.",
    contextVi: "Thông báo địa điểm tổ chức hội nghị trong tương lai.",
    questionEn:
      "It _____ that the next international trade summit will be held in Geneva.",
    questionVi:
      "Người ta _____ rằng hội nghị thượng đỉnh thương mại quốc tế tới sẽ được tổ chức tại Geneva.",
    options: [
      { option: "has been announced", isCorrect: true },
      { option: "is announcing", isCorrect: false },
      { option: "announces", isCorrect: false },
      { option: "will announce", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng cấu trúc bị động khách quan (It + has been + V3/ed + that clause).",
    category: "Passive Voice",
  },
  {
    id: "B2-1462",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Stating a condition for reimbursement.",
    contextVi: "Nêu điều kiện để được bồi hoàn.",
    questionEn:
      "Travel expenses will be reimbursed _____ they are supported by original receipts.",
    questionVi:
      "Chi phí công tác sẽ được bồi hoàn _____ chúng được hỗ trợ bởi các hóa đơn gốc.",
    options: [
      { option: "provided that", isCorrect: true },
      { option: "nevertheless", isCorrect: false },
      { option: "in case", isCorrect: false },
      { option: "owing to", isCorrect: false },
    ],
    explanationVi:
      "Cụm liên từ 'provided that' dùng để nêu một điều kiện bắt buộc.",
    category: "Conjunctions",
  },
  {
    id: "B2-1463",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past outcome.",
    contextVi: "Thảo luận về một kết quả khác trong quá khứ.",
    questionEn:
      "Had the management acted more quickly, the crisis _____ been averted.",
    questionVi:
      "Nếu ban quản lý hành động nhanh hơn, cuộc khủng hoảng _____ đã được ngăn chặn.",
    options: [
      { option: "could have", isCorrect: true },
      { option: "can have", isCorrect: false },
      { option: "will have", isCorrect: false },
      { option: "should be", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ của câu điều kiện loại 3 (Had + S + V3/ed, S + could/would have + V3/ed).",
    category: "Conditionals",
  },
  {
    id: "B2-1464",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a suggestion made by a consultant.",
    contextVi: "Tường thuật một đề xuất được đưa ra bởi chuyên gia cố vấn.",
    questionEn:
      "The consultant suggested that the company _____ its current distribution network.",
    questionVi:
      "Chuyên gia cố vấn đề xuất rằng công ty _____ mạng lưới phân phối hiện tại của mình.",
    options: [
      { option: "restructure", isCorrect: true },
      { option: "restructures", isCorrect: false },
      { option: "restructuring", isCorrect: false },
      { option: "restructured", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (subjunctive) dùng sau động từ 'suggest that...'.",
    category: "Reported Speech",
  },
  {
    id: "B2-1465",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Describing a coworker's persistent effort.",
    contextVi: "Mô tả sự nỗ lực bền bỉ của một đồng nghiệp.",
    questionEn:
      "Despite numerous setbacks, Ms. Chen persisted in _____ the new software integration.",
    questionVi:
      "Bất chấp nhiều trở ngại, bà Chen vẫn kiên trì _____ việc tích hợp phần mềm mới.",
    options: [
      { option: "completing", isCorrect: true },
      { option: "to complete", isCorrect: false },
      { option: "complete", isCorrect: false },
      { option: "completion", isCorrect: false },
    ],
    explanationVi: "Sau cụm động từ 'persist in' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1466",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing an urgent requirement.",
    contextVi: "Diễn đạt một yêu cầu khẩn cấp.",
    questionEn:
      "It is essential that every employee _____ the new safety protocol by the end of the week.",
    questionVi:
      "Điều cần thiết là mọi nhân viên _____ giao thức an toàn mới trước cuối tuần.",
    options: [
      { option: "review", isCorrect: true },
      { option: "reviews", isCorrect: false },
      { option: "reviewing", isCorrect: false },
      { option: "to review", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: It is essential/important/vital that + S + V (nguyên mẫu).",
    category: "Subjunctive",
  },
  {
    id: "B2-1467",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the rarity of an event.",
    contextVi: "Nhấn mạnh sự hiếm hoi của một sự kiện.",
    questionEn:
      "Seldom _____ such a high level of dedication from a relatively new intern.",
    questionVi:
      "Hiếm khi _____ thấy mức độ cống hiến cao như vậy từ một thực tập sinh tương đối mới.",
    options: [
      { option: "have we seen", isCorrect: true },
      { option: "we have seen", isCorrect: false },
      { option: "we saw", isCorrect: false },
      { option: "did we saw", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với trạng từ phủ định 'Seldom' đứng đầu câu.",
    category: "Inversion",
  },
  {
    id: "B2-1468",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a person's professional capability.",
    contextVi: "Xác định năng lực chuyên môn của một người.",
    questionEn:
      "The candidate's _____ skills and international experience make him the ideal choice for this role.",
    questionVi:
      "Kỹ năng _____ và kinh nghiệm quốc tế của ứng viên khiến anh ấy trở thành lựa chọn lý tưởng cho vai trò này.",
    options: [
      { option: "managerial", isCorrect: true },
      { option: "management", isCorrect: false },
      { option: "manage", isCorrect: false },
      { option: "managing", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'skills'.",
    category: "Word Forms",
  },
  {
    id: "B2-1469",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Discussing an ongoing negotiation.",
    contextVi: "Thảo luận về một cuộc đàm phán đang diễn ra.",
    questionEn:
      "The two companies _____ terms for the partnership for almost three weeks now.",
    questionVi:
      "Hai công ty hiện _____ các điều khoản cho mối quan hệ đối tác trong gần ba tuần qua.",
    options: [
      { option: "have been negotiating", isCorrect: true },
      { option: "had been negotiating", isCorrect: false },
      { option: "negotiated", isCorrect: false },
      { option: "are negotiating", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh quá trình đàm phán kéo dài đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1470",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Expressing a past regret about a missed technical detail.",
    contextVi:
      "Bày tỏ sự hối tiếc trong quá khứ về một chi tiết kỹ thuật đã bỏ lỡ.",
    questionEn:
      "We _____ confirmed the technical specifications with the engineers before placing the order.",
    questionVi:
      "Đáng lẽ chúng ta _____ phải xác nhận các thông số kỹ thuật với các kỹ sư trước khi đặt hàng.",
    options: [
      { option: "should have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "might have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'should have + V3/ed' để diễn tả một hành động đáng lẽ nên làm trong quá khứ nhưng đã không làm.",
    category: "Modals",
  },
  {
    id: "B2-1471",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a colleague with specific prior achievements.",
    contextVi:
      "Đề cập đến một đồng nghiệp với những thành tựu cụ thể trước đó.",
    questionEn:
      "She is the analyst _____ previous research provided the foundation for our current project.",
    questionVi:
      "Cô ấy là chuyên viên phân tích _____ có nghiên cứu trước đây đã tạo nền tảng cho dự án hiện tại của chúng tôi.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whose' chỉ sự sở hữu (the analyst's research).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1472",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional qualifications of candidates.",
    contextVi: "So sánh chứng chỉ chuyên môn của các ứng viên.",
    questionEn:
      "Mr. Kim is _____ the most experienced negotiator we have on our current team.",
    questionVi:
      "Ông Kim _____ là người đàm phán có kinh nghiệm nhất mà chúng tôi có trong nhóm hiện tại.",
    options: [
      { option: "by far", isCorrect: true },
      { option: "much more", isCorrect: false },
      { option: "very", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'by far' được dùng để nhấn mạnh so sánh nhất.",
    category: "Comparison",
  },
  {
    id: "B2-1473",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a project status.",
    contextVi: "Báo cáo tình trạng dự án.",
    questionEn:
      "The final version of the software _____ to the clients by the end of next month.",
    questionVi:
      "Phiên bản cuối cùng của phần mềm sẽ _____ cho khách hàng trước cuối tháng tới.",
    options: [
      { option: "will have been delivered", isCorrect: true },
      { option: "will be delivered", isCorrect: false },
      { option: "is being delivered", isCorrect: false },
      { option: "has been delivered", isCorrect: false },
    ],
    explanationVi:
      "Thì tương lai hoàn thành ở dạng bị động (will have been + V3/ed) để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.",
    category: "Passive Voice",
  },
  {
    id: "B2-1474",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the strategy change despite its risks.",
    contextVi:
      "Giải thích việc thay đổi chiến lược bất chấp những rủi ro của nó.",
    questionEn:
      "_____ the associated risks, the board decided to proceed with the international expansion plan.",
    questionVi:
      "_____ những rủi ro liên quan, ban điều hành đã quyết định tiếp tục kế hoạch mở rộng quốc tế.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "Nevertheless", isCorrect: false },
      { option: "Provided that", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'Despite' (hoặc 'In spite of') đứng trước một danh từ/cụm danh từ để chỉ sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-1475",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past scenario.",
    contextVi: "Thảo luận về một kịch bản khác trong quá khứ.",
    questionEn:
      "If we _____ more carefully, we wouldn't be facing these budget overruns now.",
    questionVi:
      "Nếu chúng ta _____ cẩn thận hơn, bây giờ chúng ta đã không phải đối mặt với tình trạng vượt ngân sách này.",
    options: [
      { option: "had planned", isCorrect: true },
      { option: "planned", isCorrect: false },
      { option: "have planned", isCorrect: false },
      { option: "would plan", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + V-inf) diễn tả một giả định trong quá khứ có kết quả ở hiện tại.",
    category: "Conditionals",
  },
  {
    id: "B2-1476",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a question about a meeting time.",
    contextVi: "Tường thuật một câu hỏi về thời gian họp.",
    questionEn:
      "She asked me _____ I had been updated on the changes to the meeting schedule.",
    questionVi:
      "Cô ấy hỏi tôi _____ liệu tôi đã được cập nhật về những thay đổi trong lịch trình cuộc họp chưa.",
    options: [
      { option: "whether", isCorrect: true },
      { option: "if", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Cả 'if' và 'whether' đều được dùng để dẫn dắt câu hỏi Yes/No trong lời nói gián tiếp.",
    category: "Reported Speech",
  },
  {
    id: "B2-1477",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Stating a requirement for a role.",
    contextVi: "Nêu một yêu cầu đối với một vai trò.",
    questionEn:
      "Working in this department requires _____ a high level of technical competency.",
    questionVi:
      "Làm việc trong bộ phận này đòi hỏi _____ trình độ chuyên môn kỹ thuật cao.",
    options: [
      { option: "possessing", isCorrect: true },
      { option: "to possess", isCorrect: false },
      { option: "possess", isCorrect: false },
      { option: "possession", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'require' khi làm tân ngữ thường dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1478",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a mandatory instruction from the manager.",
    contextVi: "Báo cáo một chỉ thị bắt buộc từ quản lý.",
    questionEn:
      "The manager insisted that the project _____ completed before the upcoming stakeholders' meeting.",
    questionVi:
      "Quản lý khăng khăng yêu cầu dự án _____ hoàn thành trước cuộc họp các bên liên quan sắp tới.",
    options: [
      { option: "be", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'insist that + S + (should) be + V3/ed'.",
    category: "Subjunctive",
  },
  {
    id: "B2-1479",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction.",
    contextVi: "Nhấn mạnh một hạn chế.",
    questionEn:
      "Only after the final inspection _____ the shipment be authorized for dispatch.",
    questionVi:
      "Chỉ sau khi kiểm tra lần cuối _____ lô hàng mới được phép gửi đi.",
    options: [
      { option: "will", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: Only after + N/V-ing/Clause + trợ động từ/động từ khuyết thiếu + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1480",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a coworker's approach to tasks.",
    contextVi: "Mô tả cách tiếp cận nhiệm vụ của đồng nghiệp.",
    questionEn:
      "She is highly _____ and always looks for new ways to optimize the production process.",
    questionVi:
      "Cô ấy là người rất _____ và luôn tìm kiếm những cách mới để tối ưu hóa quy trình sản xuất.",
    options: [
      { option: "innovative", isCorrect: true },
      { option: "innovation", isCorrect: false },
      { option: "innovate", isCorrect: false },
      { option: "innovatively", isCorrect: false },
    ],
    explanationVi:
      "Sau 'is highly' cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ.",
    category: "Word Forms",
  },
  {
    id: "B2-1481",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a professional recognition for a team.",
    contextVi: "Báo cáo về sự công nhận chuyên môn dành cho một nhóm.",
    questionEn:
      "Our research team _____ several times for their contributions to environmental sustainability.",
    questionVi:
      "Nhóm nghiên cứu của chúng tôi đã _____ nhiều lần vì những đóng góp của họ cho sự bền vững của môi trường.",
    options: [
      { option: "has been commended", isCorrect: true },
      { option: "is commended", isCorrect: false },
      { option: "was commended", isCorrect: false },
      { option: "have commended", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại hoàn thành diễn tả hành động đã xảy ra nhiều lần cho đến nay.",
    category: "Passive Voice",
  },
  {
    id: "B2-1482",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Discussing an ongoing initiative.",
    contextVi: "Thảo luận về một sáng kiến đang diễn ra.",
    questionEn:
      "The CSR department _____ several local environmental projects for over two years now.",
    questionVi:
      "Bộ phận trách nhiệm xã hội doanh nghiệp hiện _____ một số dự án môi trường địa phương trong hơn hai năm qua.",
    options: [
      { option: "has been supporting", isCorrect: true },
      { option: "had been supporting", isCorrect: false },
      { option: "supported", isCorrect: false },
      { option: "is supporting", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh sự kéo dài của hành động cho đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1483",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating on the outcome of a past event.",
    contextVi: "Dự đoán về kết quả của một sự kiện trong quá khứ.",
    questionEn:
      "The proposal _____ accepted if we had included a more detailed budget breakdown.",
    questionVi:
      "Bản đề xuất _____ đã có thể được chấp nhận nếu chúng ta bao gồm một bản phân tích ngân sách chi tiết hơn.",
    options: [
      { option: "might have been", isCorrect: true },
      { option: "must have been", isCorrect: false },
      { option: "should have being", isCorrect: false },
      { option: "could have being", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'might have been' để chỉ một khả năng có thể đã xảy ra trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1484",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a specific person at a meeting.",
    contextVi: "Xác định một người cụ thể tại một cuộc họp.",
    questionEn:
      "The vendor _____ we finally selected after a long bidding process has offered the best after-sales support.",
    questionVi:
      "Nhà cung cấp _____ mà chúng tôi cuối cùng đã chọn sau một quá trình đấu thầu dài đã đưa ra dịch vụ hỗ trợ sau bán hàng tốt nhất.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whom' thay thế cho danh từ chỉ người làm tân ngữ (selected... vendor).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1485",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional qualifications of candidates.",
    contextVi: "So sánh chứng chỉ chuyên môn của các ứng viên.",
    questionEn:
      "Although Ms. Lee has less experience, her technical skills are _____ superior to the other candidates.",
    questionVi:
      "Mặc dù bà Lee có ít kinh nghiệm hơn, nỗ lực chuyên môn của bà lại _____ vượt trội hơn hẳn so với các ứng viên khác.",
    options: [
      { option: "far", isCorrect: true },
      { option: "more", isCorrect: false },
      { option: "most", isCorrect: false },
      { option: "very", isCorrect: false },
    ],
    explanationVi: "Dùng 'far' để nhấn mạnh sự so sánh (far superior to).",
    category: "Comparison",
  },
  {
    id: "B2-1486",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a project status.",
    contextVi: "Báo cáo tình trạng dự án.",
    questionEn:
      "It _____ estimated that the new bridge construction will be completed by the end of the next fiscal year.",
    questionVi:
      "Người ta _____ ước tính rằng việc xây dựng cây cầu mới sẽ được hoàn thành vào cuối năm tài chính tới.",
    options: [
      { option: "is", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động khách quan ở hiện tại: It is + P2 / estimated that...",
    category: "Passive Voice",
  },
  {
    id: "B2-1487",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Stating a condition for access.",
    contextVi: "Nêu điều kiện để được truy cập.",
    questionEn:
      "Employees are allowed to access the database _____ they use a secure VPN connection.",
    questionVi:
      "Nhân viên được phép truy cập cơ sở dữ liệu _____ họ sử dụng kết nối VPN an toàn.",
    options: [
      { option: "as long as", isCorrect: true },
      { option: "nevertheless", isCorrect: false },
      { option: "even though", isCorrect: false },
      { option: "in spite of", isCorrect: false },
    ],
    explanationVi:
      "Cụm liên từ 'as long as' (miễn là) dùng để chỉ một điều kiện.",
    category: "Conjunctions",
  },
  {
    id: "B2-1488",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an unlikely hypothetical situation.",
    contextVi: "Thảo luận về một tình huống giả định khó xảy ra.",
    questionEn:
      "Should any issues _____ during the pilot phase, our technical team will be available 24/7.",
    questionVi:
      "Nếu có bất kỳ vấn đề nào _____ phát sinh trong giai đoạn thử nghiệm, nhóm kỹ thuật của chúng tôi sẽ sẵn sàng hỗ trợ 24/7.",
    options: [
      { option: "arise", isCorrect: true },
      { option: "arises", isCorrect: false },
      { option: "arose", isCorrect: false },
      { option: "arising", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 1: Should + S + V (nguyên mẫu).",
    category: "Conditionals",
  },
  {
    id: "B2-1489",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what the CEO stated.",
    contextVi: "Tường thuật lời khẳng định của CEO.",
    questionEn:
      "The CEO stated that the company _____ its focus to sustainable energy within the next five years.",
    questionVi:
      "CEO tuyên bố rằng công ty _____ trọng tâm vào năng lượng bền vững trong vòng năm năm tới.",
    options: [
      { option: "would shift", isCorrect: true },
      { option: "will shift", isCorrect: false },
      { option: "shifts", isCorrect: false },
      { option: "shipped", isCorrect: false },
    ],
    explanationVi: "Trong lời nói gián tiếp, 'will' được chuyển thành 'would'.",
    category: "Reported Speech",
  },
  {
    id: "B2-1490",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Giving a suggestion to avoid problems.",
    contextVi: "Đưa ra gợi ý để tránh rắc rối.",
    questionEn:
      "We recommend _____ the contract thoroughly before you sign it to avoid any future legal issues.",
    questionVi:
      "Chúng tôi khuyên bạn _____ hợp đồng thật kỹ trước khi ký để tránh bất kỳ vấn đề pháp lý nào trong tương lai.",
    options: [
      { option: "reviewing", isCorrect: true },
      { option: "to review", isCorrect: false },
      { option: "review", isCorrect: false },
      { option: "reviewed", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'recommend' khi không có tân ngữ đi kèm, ta dùng V-ing.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1491",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a mandatory instruction.",
    contextVi: "Báo cáo một chỉ thị bắt buộc.",
    questionEn:
      "It is mandatory that every employee _____ the data security training module once a year.",
    questionVi:
      "Việc mọi nhân viên _____ học phần đào tạo về an ninh dữ liệu mỗi năm một lần là bắt buộc.",
    options: [
      { option: "complete", isCorrect: true },
      { option: "completes", isCorrect: false },
      { option: "completing", isCorrect: false },
      { option: "to complete", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: It is mandatory that + S + V (nguyên mẫu).",
    category: "Subjunctive",
  },
  {
    id: "B2-1492",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the conditions under which a refund is given.",
    contextVi: "Nhấn mạnh các điều kiện để được hoàn tiền.",
    questionEn:
      "Under no circumstances _____ the company offer a full refund after the 30-day period.",
    questionVi:
      "Trong bất kỳ trường hợp nào, công ty _____ sẽ không hoàn tiền đầy đủ sau thời gian 30 ngày.",
    options: [
      { option: "will", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "can", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Under no circumstances' (Trong bất kỳ trường hợp nào cũng không).",
    category: "Inversion",
  },
  {
    id: "B2-1493",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a coworker's approach to tasks.",
    contextVi: "Mô tả cách tiếp cận nhiệm vụ của đồng nghiệp.",
    questionEn:
      "Mr. Yamamoto's approach to management is highly _____ and efficient.",
    questionVi:
      "Cách tiếp cận trong quản lý của ông Yamamoto rất _____ và hiệu quả.",
    options: [
      { option: "analytical", isCorrect: true },
      { option: "analysis", isCorrect: false },
      { option: "analyze", isCorrect: false },
      { option: "analytically", isCorrect: false },
    ],
    explanationVi:
      "Sau 'is highly' cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ.",
    category: "Word Forms",
  },
  {
    id: "B2-1494",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Discussing an ongoing task.",
    contextVi: "Thảo luận về một nhiệm vụ đang diễn ra.",
    questionEn:
      "She _____ on the final version of the quarterly sales report all morning.",
    questionVi:
      "Cô ấy _____ bản cuối cùng của báo cáo doanh số hàng quý suốt cả buổi sáng.",
    options: [
      { option: "has been working", isCorrect: true },
      { option: "had been working", isCorrect: false },
      { option: "is working", isCorrect: false },
      { option: "worked", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh tính liên tục của hành động kéo dài đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1495",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating on the cause of an event.",
    contextVi: "Dự đoán về nguyên nhân của một sự kiện.",
    questionEn:
      "The error in the financial analysis _____ have been caused by a simple data entry mistake.",
    questionVi:
      "Lỗi trong phân tích tài chính _____ có thể đã xảy ra do một lỗi nhập liệu đơn giản.",
    options: [
      { option: "might", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "should", isCorrect: false },
      { option: "ought to", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'might have + P2' để chỉ một khả năng có thể đã xảy ra trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1496",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a coworker with certain skills.",
    contextVi: "Xác định một đồng nghiệp có những kỹ năng nhất định.",
    questionEn:
      "Ms. Gupta is the consultant _____ recommendations paved the way for our successful rebranding.",
    questionVi:
      "Bà Gupta là người cố vấn _____ có những khuyến nghị đã dọn đường cho quá trình tái định vị thương hiệu thành công của chúng tôi.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whose' chỉ sự sở hữu (the consultant's recommendations).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1497",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Evaluating common practices in different regions.",
    contextVi: "Đánh giá các thực tiễn chung ở các vùng khác nhau.",
    questionEn:
      "Regional differences in consumer behavior are often _____ more significant than we initially anticipated.",
    questionVi:
      "Sự khác biệt vùng miền trong hành vi của người tiêu dùng thường _____ đáng kể hơn nhiều so với dự đoán ban đầu của chúng tôi.",
    options: [
      { option: "far", isCorrect: true },
      { option: "much more", isCorrect: false },
      { option: "very", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi: "Dùng 'far' để nhấn mạnh so sánh hơn.",
    category: "Comparison",
  },
  {
    id: "B2-1498",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on the status of a project.",
    contextVi: "Báo cáo tình trạng của một dự án.",
    questionEn:
      "The proposed budget for the next fiscal year _____ by the finance committee at this very moment.",
    questionVi:
      "Ngân sách đề xuất cho tài chính năm tới hiện _____ bởi ủy ban tài chính ngay lúc này.",
    options: [
      { option: "is being reviewed", isCorrect: true },
      { option: "is reviewing", isCorrect: false },
      { option: "has been reviewed", isCorrect: false },
      { option: "will be reviewed", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại tiếp diễn (at this very moment).",
    category: "Passive Voice",
  },
  {
    id: "B2-1499",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the strategy change despite its risks.",
    contextVi: "Giải thích sự thay đổi chiến lược bất chấp rủi ro.",
    questionEn:
      "_____ our marketing budget was reduced, we still managed to achieve a significant increase in sales.",
    questionVi:
      "_____ ngân sách tiếp thị bị cắt giảm, chúng tôi vẫn đạt được sự gia tăng đáng kể về doanh số.",
    options: [
      { option: "Although", isCorrect: true },
      { option: "Despite", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "In spite of", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'Although' đứng trước một mệnh đề để chỉ sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-1500",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical past event.",
    contextVi: "Thảo luận về một sự kiện giả định trong quá khứ.",
    questionEn:
      "Unless we _____ the strategy sooner, we would not have seen such a quick turnaround in profits.",
    questionVi:
      "Nếu chúng ta không _____ chiến lược sớm hơn, chúng ta đã không thấy sự xoay chuyển lợi nhuận nhanh chóng như vậy.",
    options: [
      { option: "had changed", isCorrect: true },
      { option: "changed", isCorrect: false },
      { option: "have changed", isCorrect: false },
      { option: "would change", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 dùng để giả định một điều trái với quá khứ.",
    category: "Conditionals",
  },
  {
    id: "B2-1501",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting an instruction from a supervisor.",
    contextVi: "Tường thuật một hướng dẫn từ người giám sát.",
    questionEn:
      "The supervisor reminded us _____ the electronic files periodically to prevent data loss.",
    questionVi:
      "Người giám sát đã nhắc nhở chúng tôi _____ các tập tin điện tử định kỳ để tránh mất dữ liệu.",
    options: [
      { option: "to back up", isCorrect: true },
      { option: "back up", isCorrect: false },
      { option: "backing up", isCorrect: false },
      { option: "backed up", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'remind someone to do something'.",
    category: "Reported Speech",
  },
  {
    id: "B2-1502",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Identifying a necessary step for success.",
    contextVi: "Xác định một bước cần thiết để thành công.",
    questionEn:
      "The success of our global expansion depends on our ability _____ to local market conditions.",
    questionVi:
      "Sự thành công của việc mở rộng toàn cầu của chúng tôi phụ thuộc vào khả năng _____ với điều kiện thị trường địa phương.",
    options: [
      { option: "to adapt", isCorrect: true },
      { option: "adapting", isCorrect: false },
      { option: "adapt", isCorrect: false },
      { option: "adaptation", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'ability to do something'.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1503",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing an urgent requirement.",
    contextVi: "Diễn đạt một yêu cầu khẩn cấp.",
    questionEn:
      "It is vital that all sensitive documents _____ stored in a fireproof safe at the end of each day.",
    questionVi:
      "Điều quan trọng là tất cả các tài liệu nhạy cảm _____ được lưu trữ trong két sắt chống cháy vào cuối mỗi ngày.",
    options: [
      { option: "be", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'It is vital that + S + (should) be + V3/ed'.",
    category: "Subjunctive",
  },
  {
    id: "B2-3000",
    topicId: "under-no-circumstances",
    questionType: "structure",
    contextEn: "Stating strict prohibitions.",
    contextVi: "Nêu sự cấm đoán nghiêm ngặt.",
    questionEn:
      "Under no circumstances _____ you disclose confidential client data.",
    questionVi:
      "Trong bất kỳ trường hợp nào bạn _____ tiết lộ dữ liệu khách hàng mật.",
    options: [
      { option: "should", isCorrect: true },
      { option: "shouldn't", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "must", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Under no circumstances' yêu cầu trợ động từ trước chủ ngữ: Under no circumstances should + S + V.",
    category: "Sentence Structure",
  },
  {
    id: "B2-3001",
    topicId: "not-until-inversion",
    questionType: "structure",
    contextEn: "Emphasising when an event started.",
    contextVi: "Nhấn mạnh thời điểm một sự kiện bắt đầu.",
    questionEn:
      "Not until the report was submitted _____ the committee approve the proposal.",
    questionVi:
      "Phải đến khi báo cáo được nộp thì hội đồng _____ phê duyệt đề xuất.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Not until' đặt trợ động từ trước chủ ngữ: Not until + clause + auxiliary + S + V.",
    category: "Sentence Structure",
  },
  {
    id: "B2-3002",
    topicId: "prevent-from-ing",
    questionType: "grammar",
    contextEn: "Describing obstacles to participation.",
    contextVi: "Mô tả những trở ngại dẫn đến không thể tham gia.",
    questionEn: "Her visa delay prevented her _____ attend the conference.",
    questionVi: "Việc trì hoãn visa đã ngăn cô ấy _____ tham dự hội nghị.",
    options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Cấu trúc: prevent + someone + from + V-ing.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "B2-1504",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction.",
    contextVi: "Nhấn mạnh một hạn chế.",
    questionEn:
      "Not until the end of the fiscal year _____ the full financial impact of the merger be known.",
    questionVi:
      "Phải đến cuối năm tài chính _____ tác động tài chính đầy đủ của vụ sáp nhập mới được biết đến.",
    options: [
      { option: "will", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với 'Not until' (Phải cho đến khi... thì...).",
    category: "Inversion",
  },
  {
    id: "B2-1505",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying the quality of a coworker's output.",
    contextVi: "Xác định tính chất công việc của một đồng nghiệp.",
    questionEn:
      "Ms. Patel's _____ contributions to the team's research projects have been invaluable.",
    questionVi:
      "Những đóng góp _____ của bà Patel vào các dự án nghiên cứu của nhóm là vô giá.",
    options: [
      { option: "consistent", isCorrect: true },
      { option: "consistency", isCorrect: false },
      { option: "consist", isCorrect: false },
      { option: "consistently", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'contributions'.",
    category: "Word Forms",
  },
  {
    id: "B2-1506",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on an upcoming event.",
    contextVi: "Báo cáo về một sự kiện sắp tới.",
    questionEn:
      "The winners of this year's employee achievement awards _____ during the annual gala dinner next month.",
    questionVi:
      "Những người chiến thắng giải thưởng thành tích nhân viên năm nay sẽ _____ trong bữa tiệc gala hàng năm vào tháng tới.",
    options: [
      { option: "will be announced", isCorrect: true },
      { option: "are announced", isCorrect: false },
      { option: "have been announced", isCorrect: false },
      { option: "is announcing", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì tương lai đơn (next month).",
    category: "Passive Voice",
  },
  {
    id: "B2-1507",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Describing a team's progress on a project.",
    contextVi: "Mô tả tiến độ của một nhóm trong dự án.",
    questionEn:
      "Our production team _____ to resolve the technical issues with the new machinery since yesterday.",
    questionVi:
      "Nhóm sản xuất của chúng tôi _____ giải quyết các vấn đề kỹ thuật với máy móc mới kể từ hôm qua.",
    options: [
      { option: "has been striving", isCorrect: true },
      { option: "had been striving", isCorrect: false },
      { option: "strove", isCorrect: false },
      { option: "is striving", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh sự nỗ lực liên tục từ một thời điểm trong quá khứ đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1508",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Deducing the cause of a past failure.",
    contextVi: "Suy luận nguyên nhân của một sự thất bại trong quá khứ.",
    questionEn:
      "The server crash _____ avoided if the backup system had been properly maintained.",
    questionVi:
      "Sự cố máy chủ _____ đã có thể tránh được nếu hệ thống dự phòng được bảo trì đúng cách.",
    options: [
      { option: "could have been", isCorrect: true },
      { option: "must have been", isCorrect: false },
      { option: "should have being", isCorrect: false },
      { option: "might have being", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'could have been' để chỉ một khả năng có thể đã xảy ra trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1509",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a coworker with a specific achievement.",
    contextVi: "Xác định một đồng nghiệp có thành tích cụ thể.",
    questionEn:
      "Ms. Tanaka is the engineer _____ innovative design won the company a prestigious national award.",
    questionVi:
      "Bà Tanaka là kỹ sư _____ có thiết kế sáng tạo đã giúp công ty giành được giải thưởng quốc gia danh giá.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi: "Đại từ quan hệ 'whose' chỉ sự sở hữu (Tanaka's design).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1510",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the performance of two different sales teams.",
    contextVi: "So sánh hiệu suất của hai nhóm bán hàng khác nhau.",
    questionEn:
      "The European branch outperformed all other regions, showing _____ higher growth than projected.",
    questionVi:
      "Chi nhánh Châu Âu đã có hiệu suất vượt trội hơn tất cả các khu vực khác, cho thấy mức tăng trưởng cao _____ so với dự kiến.",
    options: [
      { option: "substantially", isCorrect: true },
      { option: "substantial", isCorrect: false },
      { option: "more substantial", isCorrect: false },
      { option: "most substantial", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ 'substantially' (đáng kể) để bổ nghĩa cho tính từ so sánh hơn 'higher'.",
    category: "Comparison",
  },
  {
    id: "B2-1511",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a future event with certainty.",
    contextVi: "Báo cáo về một sự kiện chắc chắn trong tương lai.",
    questionEn:
      "It _____ expected that the new merger will lead to significant operational efficiencies.",
    questionVi:
      "Người ta _____ kỳ vọng rằng việc sáp nhập mới sẽ dẫn đến hiệu quả hoạt động đáng kể.",
    options: [
      { option: "is widely", isCorrect: true },
      { option: "was widely", isCorrect: false },
      { option: "has widely", isCorrect: false },
      { option: "will widely", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động khách quan ở hiện tại: It is widely + expected that.",
    category: "Passive Voice",
  },
  {
    id: "B2-1512",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Stating a condition for access to files.",
    contextVi: "Nêu điều kiện để được truy cập tệp.",
    questionEn:
      "Access to the confidential server is restricted _____ you have prior authorization from the department head.",
    questionVi:
      "Việc truy cập vào máy chủ bảo mật bị hạn chế _____ bạn có sự cho phép trước của trưởng bộ phận.",
    options: [
      { option: "unless", isCorrect: true },
      { option: "provided that", isCorrect: false },
      { option: "whereas", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
    ],
    explanationVi:
      "Liên từ 'unless' (trừ khi) dùng để chỉ một điều kiện phủ định.",
    category: "Conjunctions",
  },
  {
    id: "B2-1513",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past scenario with inversion.",
    contextVi: "Thảo luận về một kịch bản quá khứ thay thế có sử dụng đảo ngữ.",
    questionEn:
      "Were the current market volatility to continue, the company _____ reconsider its investment strategy.",
    questionVi:
      "Nếu sự biến động thị trường hiện tại tiếp tục, công ty _____ sẽ cân nhắc lại chiến lược đầu tư của mình.",
    options: [
      { option: "would", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "should have", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện loại 2 (Were + S + to-V, S + would + V-inf).",
    category: "Conditionals",
  },
  {
    id: "B2-1514",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what the manager requested during the meeting.",
    contextVi: "Tường thuật lời yêu cầu của quản lý trong cuộc họp.",
    questionEn:
      "The manager requested that everyone _____ their weekly reports by Friday afternoon at the latest.",
    questionVi:
      "Quản lý yêu cầu mọi người _____ báo cáo hàng tuần của họ muộn nhất vào chiều thứ Sáu.",
    options: [
      { option: "submit", isCorrect: true },
      { option: "submits", isCorrect: false },
      { option: "submitted", isCorrect: false },
      { option: "submitting", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định sau động từ 'request that... (should) + V nguyên mẫu'.",
    category: "Reported Speech",
  },
  {
    id: "B2-1515",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Setting a professional habit for success.",
    contextVi: "Thiết lập một thói quen chuyên nghiệp để thành công.",
    questionEn:
      "A successful consultant avoids _____ personal opinions into professional reports.",
    questionVi:
      "Một chuyên gia cố vấn thành công tránh _____ đưa ý kiến cá nhân vào các báo cáo chuyên môn.",
    options: [
      { option: "incorporating", isCorrect: true },
      { option: "to incorporate", isCorrect: false },
      { option: "incorporate", isCorrect: false },
      { option: "incorporation", isCorrect: false },
    ],
    explanationVi: "Sau động từ 'avoid' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1516",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing a mandatory instruction from the CEO.",
    contextVi: "Diễn đạt một chỉ thị bắt buộc từ CEO.",
    questionEn:
      "The CEO insisted that the audit _____ be conducted by an independent third party next month.",
    questionVi:
      "CEO khăng khăng yêu cầu cuộc kiểm toán _____ phải được thực hiện bởi một bên thứ ba độc lập vào tháng tới.",
    options: [
      { option: "be", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'insist that + S + (should) be + V3/ed'.",
    category: "Subjunctive",
  },
  {
    id: "B2-1517",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the rarity of an event.",
    contextVi: "Nhấn mạnh sự hiếm hoi của một sự kiện.",
    questionEn:
      "Hardly _____ the merger agreement been signed when the new CEO announced a reorganization plan.",
    questionVi:
      "Ngay khi thỏa thuận sáp nhập vừa mới được ký kết, CEO mới đã thông báo kế hoạch tổ chức lại.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: Hardly + had + S + V3/ed + when + Clause (quá khứ đơn).",
    category: "Inversion",
  },
  {
    id: "B2-1518",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a coworker's approach to tasks.",
    contextVi: "Mô tả cách tiếp cận nhiệm vụ của đồng nghiệp.",
    questionEn:
      "Ms. Patel's _____ attention to detail ensures that all financial reports are error-free.",
    questionVi:
      "Sự chú ý _____ đến từng chi tiết của bà Patel đảm bảo rằng tất cả các báo cáo tài chính đều không có lỗi.",
    options: [
      { option: "meticulous", isCorrect: true },
      { option: "meticulously", isCorrect: false },
      { option: "meticulousness", isCorrect: false },
      { option: "meticulosity", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'attention'.",
    category: "Word Forms",
  },
  {
    id: "B2-1519",
    topicId: "present-perfect-continuous",
    questionType: "grammar",
    contextEn: "Discussing an ongoing trend in the company.",
    contextVi: "Thảo luận về một xu hướng đang diễn ra trong công ty.",
    questionEn:
      "Our company _____ heavily in renewable energy projects for over a decade now.",
    questionVi:
      "Công ty chúng tôi hiện _____ đầu tư mạnh mẽ vào các dự án năng lượng tái tạo trong hơn một thập kỷ qua.",
    options: [
      { option: "has been investing", isCorrect: true },
      { option: "is searchinging", isCorrect: false },
      { option: "invested", isCorrect: false },
      { option: "had been investing", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành tiếp diễn nhấn mạnh sự kéo dài liên tục của hành động từ quá khứ đến hiện tại.",
    category: "Present Perfect Continuous",
  },
  {
    id: "B2-1520",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating on why a meeting didn't start on time.",
    contextVi: "Dự đoán tại sao cuộc họp không bắt đầu đúng giờ.",
    questionEn:
      "The consultant _____ delayed by the traffic, although we have not been notified yet.",
    questionVi:
      "Có thể cố vấn chuyên môn _____ đã bị trì hoãn do giao thông, mặc dù chúng ta vẫn chưa được thông báo.",
    options: [
      { option: "might have been", isCorrect: true },
      { option: "must have been", isCorrect: false },
      { option: "should have been", isCorrect: false },
      { option: "could have been", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'might have been' để chỉ một khả năng có thể đã xảy ra trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1527",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a future possibility.",
    contextVi: "Thảo luận về một khả năng trong tương lai.",
    questionEn:
      "If the current trend continues, the company _____ to expand its operations into Southeast Asia next year.",
    questionVi:
      "Nếu xu hướng hiện tại tiếp tục, công ty _____ sẽ mở rộng hoạt động sang Đông Nam Á vào năm tới.",
    options: [
      { option: "will be able", isCorrect: true },
      { option: "would be able", isCorrect: false },
      { option: "is able", isCorrect: false },
      { option: "has been able", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai.",
    category: "Conditionals",
  },
  {
    id: "B2-1528",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting a completed task.",
    contextVi: "Báo cáo một nhiệm vụ đã hoàn thành.",
    questionEn:
      "The final report _____ to all department heads by the end of the day.",
    questionVi:
      "Báo cáo cuối cùng _____ cho tất cả các trưởng phòng vào cuối ngày.",
    options: [
      { option: "will be distributed", isCorrect: true },
      { option: "will distribute", isCorrect: false },
      { option: "is distributing", isCorrect: false },
      { option: "has distributed", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì tương lai đơn (will be + V3/ed).",
    category: "Passive Voice",
  },
  {
    id: "B2-1529",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Describing a colleague's skills.",
    contextVi: "Mô tả kỹ năng của một đồng nghiệp.",
    questionEn:
      "Mr. Lee is the consultant _____ advice we followed when restructuring the marketing department.",
    questionVi:
      "Ông Lee là chuyên gia tư vấn _____ lời khuyên mà chúng tôi đã làm theo khi tái cơ cấu bộ phận tiếp thị.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whose' để thay thế cho tính từ sở hữu trong mệnh đề quan hệ.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1530",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Making a logical deduction about the past.",
    contextVi: "Đưa ra một suy luận logic về quá khứ.",
    questionEn:
      "The client _____ received our email, as we haven't heard back from them yet.",
    questionVi:
      "Khách hàng _____ đã không nhận được email của chúng tôi, vì chúng tôi vẫn chưa nhận được phản hồi từ họ.",
    options: [
      { option: "must not have", isCorrect: true },
      { option: "should not have", isCorrect: false },
      { option: "cannot have", isCorrect: false },
      { option: "might not have", isCorrect: true },
    ],
    explanationVi:
      "Dùng 'must not have + V3/ed' hoặc 'might not have + V3/ed' để đưa ra suy luận về một việc có thể đã không xảy ra trong quá khứ.",
    category: "Modals",
  },
  {
    id: "B2-1531",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Connecting two independent clauses.",
    contextVi: "Kết nối hai mệnh đề độc lập.",
    questionEn:
      "The budget was limited; _____, we managed to complete the project on time.",
    questionVi:
      "Ngân sách có hạn; _____, chúng tôi vẫn hoàn thành dự án đúng hạn.",
    options: [
      { option: "nevertheless", isCorrect: true },
      { option: "consequently", isCorrect: false },
      { option: "furthermore", isCorrect: false },
      { option: "otherwise", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'nevertheless' (tuy nhiên/tuy vậy) để nối hai ý tương phản.",
    category: "Conjunctions",
  },
  {
    id: "B2-1532",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the duration of two projects.",
    contextVi: "So sánh thời gian thực hiện của hai dự án.",
    questionEn:
      "The current renovation project is taking much _____ than we initially anticipated.",
    questionVi:
      "Dự án cải tạo hiện tại đang tốn nhiều thời gian _____ so với dự kiến ban đầu của chúng tôi.",
    options: [
      { option: "longer", isCorrect: true },
      { option: "longest", isCorrect: false },
      { option: "as long", isCorrect: false },
      { option: "more long", isCorrect: false },
    ],
    explanationVi: "Cấu trúc so sánh hơn với tính từ ngắn (Adj-er + than).",
    category: "Comparison",
  },
  {
    id: "B2-1533",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying the need for a specific action.",
    contextVi: "Xác định sự cần thiết của một hành động cụ thể.",
    questionEn:
      "The manager emphasized the importance of _____ in all financial transactions.",
    questionVi:
      "Người quản lý nhấn mạnh tầm quan trọng của _____ trong tất cả các giao dịch tài chính.",
    options: [
      { option: "accuracy", isCorrect: true },
      { option: "accurate", isCorrect: false },
      { option: "accurately", isCorrect: false },
      { option: "accurateness", isCorrect: false },
    ],
    explanationVi: "Sau giới từ 'of' cần một danh từ (Noun).",
    category: "Word Forms",
  },
  {
    id: "B2-1534",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a colleague's statement.",
    contextVi: "Tường thuật lại lời nói của một đồng nghiệp.",
    questionEn:
      "Ms. Garcia mentioned that she _____ the conference in Berlin next month.",
    questionVi:
      "Bà Garcia đã đề cập rằng bà _____ tham dự hội nghị tại Berlin vào tháng tới.",
    options: [
      { option: "would attend", isCorrect: true },
      { option: "will attend", isCorrect: false },
      { option: "is attending", isCorrect: false },
      { option: "attended", isCorrect: false },
    ],
    explanationVi: "Lùi thì trong câu tường thuật (will -> would).",
    category: "Reported Speech",
  },
  {
    id: "B2-1535",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Expressing a preference.",
    contextVi: "Diễn tả một sở thích/ưu tiên.",
    questionEn:
      "Most employees would prefer _____ to work from home at least two days a week.",
    questionVi:
      "Hầu hết nhân viên đều thích _____ làm việc tại nhà ít nhất hai ngày một tuần.",
    options: [
      { option: "to be allowed", isCorrect: true },
      { option: "allowing", isCorrect: false },
      { option: "to allow", isCorrect: false },
      { option: "being allowed", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'would prefer + to-inf'. Ở đây dùng dạng bị động (to be + V3/ed).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1536",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a requirement.",
    contextVi: "Nêu một yêu cầu.",
    questionEn:
      "It is essential that every team member _____ the weekly briefing on Monday mornings.",
    questionVi:
      "Điều thiết yếu là mọi thành viên trong nhóm _____ buổi họp tóm tắt hàng tuần vào sáng thứ Hai.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "attends", isCorrect: false },
      { option: "attended", isCorrect: false },
      { option: "is attending", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định (Subjunctive) sau tính từ 'essential'.",
    category: "Subjunctive",
  },
  {
    id: "B2-1537",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a process.",
    contextVi: "Mô tả một quy trình.",
    questionEn:
      "The new software _____ across all departments by the end of the next quarter.",
    questionVi: "Phần mềm mới _____ ở tất cả các phòng ban vào cuối quý tới.",
    options: [
      { option: "will have been implemented", isCorrect: true },
      { option: "will be implemented", isCorrect: true },
      { option: "has been implemented", isCorrect: false },
      { option: "is being implemented", isCorrect: false },
    ],
    explanationVi:
      "Thì tương lai hoàn thành bị động diễn tả một hành động sẽ hoàn thành trước một thời điểm trong tương lai.",
    category: "Passive Voice",
  },
  {
    id: "B2-1538",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Adding information about a location.",
    contextVi: "Thêm thông tin về một địa điểm.",
    questionEn:
      "The factory, _____ was built in the 1980s, is scheduled for a major technological upgrade.",
    questionVi:
      "Nhà máy, _____ được xây dựng vào những năm 1980, dự kiến sẽ được nâng cấp công nghệ lớn.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "where", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' trong mệnh đề quan hệ không xác định để thay thế cho danh từ chỉ vật.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1539",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Expressing a past possibility.",
    contextVi: "Diễn tả một khả năng trong quá khứ.",
    questionEn:
      "We _____ won the contract if we had submitted a more competitive proposal.",
    questionVi:
      "Chúng ta _____ đã có thể giành được hợp đồng nếu chúng ta nộp một bản đề xuất cạnh tranh hơn.",
    options: [
      { option: "could have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "should have", isCorrect: false },
      { option: "might have", isCorrect: true },
    ],
    explanationVi:
      "Dùng 'could have + V3/ed' để diễn tả một khả năng trong quá khứ thực tế đã không xảy ra.",
    category: "Modals",
  },
  {
    id: "B2-1540",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Showing a contrast.",
    contextVi: "Thể hiện sự tương phản.",
    questionEn:
      "_____ the high cost of raw materials, the firm managed to maintain its profit margins.",
    questionVi:
      "_____ chi phí nguyên liệu thô cao, công ty vẫn duy trì được mức lợi nhuận.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "In spite", isCorrect: false },
      { option: "However", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'Despite' hoặc 'In spite of' trước cụm danh từ để thể hiện sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-1541",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional skills.",
    contextVi: "So sánh kỹ năng chuyên môn.",
    questionEn:
      "Our new lead developer is _____ more experienced than his predecessor.",
    questionVi:
      "Lập trình viên trưởng mới của chúng tôi _____ giàu kinh nghiệm hơn nhiều so với người tiền nhiệm.",
    options: [
      { option: "far", isCorrect: true },
      { option: "very", isCorrect: false },
      { option: "most", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi: "Dùng 'far' hoặc 'much' để nhấn mạnh phép so sánh hơn.",
    category: "Comparison",
  },
  {
    id: "B2-1542",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a professional attribute.",
    contextVi: "Mô tả một đặc tính chuyên nghiệp.",
    questionEn:
      "The CEO praised the team for their _____ contribution to the successful product launch.",
    questionVi:
      "CEO đã khen ngợi nhóm vì sự đóng góp _____ của họ vào việc ra mắt sản phẩm thành công.",
    options: [
      { option: "outstanding", isCorrect: true },
      { option: "outstand", isCorrect: false },
      { option: "outstandingly", isCorrect: false },
      { option: "outstandness", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'contribution'.",
    category: "Word Forms",
  },
  {
    id: "B2-1543",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting an inquiry.",
    contextVi: "Tường thuật lại một câu hỏi.",
    questionEn:
      "The client asked me _____ we would be able to deliver the goods by Friday.",
    questionVi:
      "Khách hàng đã hỏi tôi _____ liệu chúng ta có thể giao hàng vào thứ Sáu hay không.",
    options: [
      { option: "whether", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "if", isCorrect: true },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whether' hoặc 'if' trong câu tường thuật cho câu hỏi Yes/No.",
    category: "Reported Speech",
  },
  {
    id: "B2-1544",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Expressing an intention.",
    contextVi: "Diễn đạt một ý định.",
    questionEn:
      "We are looking forward to _____ a long-term partnership with your company.",
    questionVi:
      "Chúng tôi rất mong muốn _____ mối quan hệ hợp tác lâu dài với công ty của bạn.",
    options: [
      { option: "establishing", isCorrect: true },
      { option: "establish", isCorrect: false },
      { option: "to establish", isCorrect: false },
      { option: "establishment", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'look forward to + V-ing'.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1545",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a formal suggestion.",
    contextVi: "Báo cáo một đề xuất chính thức.",
    questionEn:
      "The board suggested that the company _____ its focus to the emerging markets in Africa.",
    questionVi:
      "Ban điều hành đề xuất rằng công ty _____ chuyển trọng tâm sang các thị trường mới nổi ở Châu Phi.",
    options: [
      { option: "shift", isCorrect: true },
      { option: "shifts", isCorrect: false },
      { option: "shifted", isCorrect: false },
      { option: "shifting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau động từ 'suggest that'.",
    category: "Subjunctive",
  },
  {
    id: "B2-1546",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a negative fact.",
    contextVi: "Nhấn mạnh một sự thật phủ định.",
    questionEn:
      "Rarely _____ we encountered such a complex legal issue during a merger negotiation.",
    questionVi:
      "Hiếm khi _____ chúng ta gặp phải một vấn đề pháp lý phức tạp như vậy trong cuộc đàm phán sáp nhập.",
    options: [
      { option: "have", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với trạng từ phủ định 'Rarely'.",
    category: "Inversion",
  },
  {
    id: "B2-1547",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a recent action.",
    contextVi: "Mô tả một hành động vừa xảy ra.",
    questionEn:
      "The contract _____ by both parties, and the project is now officially underway.",
    questionVi:
      "Hợp đồng _____ bởi cả hai bên, và dự án hiện đã chính thức được triển khai.",
    options: [
      { option: "has been signed", isCorrect: true },
      { option: "was signed", isCorrect: true },
      { option: "is signed", isCorrect: false },
      { option: "had been signed", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại hoàn thành (has been + V3/ed) hoặc quá khứ đơn trung tính.",
    category: "Passive Voice",
  },
  {
    id: "B2-1548",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Providing additional details about a person.",
    contextVi: "Cung cấp thêm chi tiết về một người.",
    questionEn:
      "Mrs. Tanaka, _____ you met at the conference, is our regional manager for East Asia.",
    questionVi:
      "Bà Tanaka, người mà bạn _____ đã gặp tại hội nghị, là quản lý khu vực của chúng tôi tại Đông Á.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whom' hoặc 'who' làm tân ngữ cho người trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1549",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Expessing a recommendation about a past event.",
    contextVi: "Diễn tả một lời khuyên về một sự kiện trong quá khứ.",
    questionEn:
      "We _____ invested more in our online presence years ago; we are now striving to catch up with our competitors.",
    questionVi:
      "Lẽ ra chúng ta _____ nên đầu tư nhiều hơn vào sự hiện diện trực tuyến từ nhiều năm trước; giờ chúng ta đang phải nỗ lực để bắt kịp đối thủ.",
    options: [
      { option: "should have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "might have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'should have + V3/ed' để chỉ một việc đáng lẽ nên làm trong quá khứ nhưng đã không làm.",
    category: "Modals",
  },
  {
    id: "B2-1550",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Expressing a conditional relationship.",
    contextVi: "Diễn đạt một mối quan hệ điều kiện.",
    questionEn:
      "The merger will be successful _____ both companies are willing to compromise on certain points.",
    questionVi:
      "Vụ sáp nhập sẽ thành công _____ nếu cả hai công ty đều sẵn sàng thỏa hiệp ở một số điểm nhất định.",
    options: [
      { option: "provided that", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "whether", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'provided that' (với điều kiện là) để thay thế cho 'if'.",
    category: "Conjunctions",
  },
  {
    id: "B2-1551",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional qualifications.",
    contextVi: "So sánh bằng cấp chuyên môn.",
    questionEn:
      "The candidate we interviewed yesterday is _____ qualified for the position than we expected.",
    questionVi:
      "Ứng viên mà chúng tôi đã phỏng vấn hôm qua _____ đủ tiêu chuẩn cho vị trí hơn so với kỳ vọng của chúng tôi.",
    options: [
      { option: "better", isCorrect: true },
      { option: "more", isCorrect: false },
      { option: "most", isCorrect: false },
      { option: "well", isCorrect: false },
    ],
    explanationVi:
      "Dạng so sánh hơn của 'well-qualified' là 'better qualified'.",
    category: "Comparison",
  },
  {
    id: "B2-1552",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a process.",
    contextVi: "Xác định tính chất của một quy trình.",
    questionEn:
      "The HR department is working on improving the _____ of our onboarding process.",
    questionVi:
      "Bộ phận nhân sự đang làm việc để cải thiện _____ của quy trình tiếp nhận nhân viên mới của chúng tôi.",
    options: [
      { option: "efficiency", isCorrect: true },
      { option: "efficient", isCorrect: false },
      { option: "efficiently", isCorrect: false },
      { option: "efficacious", isCorrect: false },
    ],
    explanationVi: "Sau mạo từ 'the' cần một danh từ (Noun).",
    category: "Word Forms",
  },
  {
    id: "B2-1553",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a request for information.",
    contextVi: "Tường thuật lại một yêu cầu thông tin.",
    questionEn:
      "The manager wanted to know _____ the project would be completed by the end of the week.",
    questionVi:
      "Người quản lý muốn biết _____ liệu dự án có hoàn thành vào cuối tuần hay không.",
    options: [
      { option: "if", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "what", isCorrect: false },
      { option: "why", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'if' hoặc 'whether' trong câu tường thuật cho câu hỏi Yes/No.",
    category: "Reported Speech",
  },
  {
    id: "B2-1554",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Expressing a decision.",
    contextVi: "Diễn đạt một quyết định.",
    questionEn:
      "The firm decided _____ its budget for research and development this year.",
    questionVi:
      "Công ty đã quyết định _____ ngân sách cho nghiên cứu và phát triển trong năm nay.",
    options: [
      { option: "to increase", isCorrect: true },
      { option: "increasing", isCorrect: false },
      { option: "increase", isCorrect: false },
      { option: "to be increased", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'decide + to-inf'.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B2-1555",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a recommendation.",
    contextVi: "Nêu một lời khuyên.",
    questionEn:
      "The consultant recommended that the company _____ its marketing strategy immediately.",
    questionVi:
      "Cố vấn đã khuyến nghị rằng công ty _____ lại chiến lược tiếp thị của mình ngay lập tức.",
    options: [
      { option: "re-evaluate", isCorrect: true },
      { option: "re-evaluates", isCorrect: false },
      { option: "re-evaluated", isCorrect: false },
      { option: "re-evaluating", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'recommend that'.",
    category: "Subjunctive",
  },
  {
    id: "B2-1556",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction.",
    contextVi: "Nhấn mạnh một hạn chế.",
    questionEn:
      "Not until the new policy was implemented _____ the employees fully understand its benefits.",
    questionVi:
      "Mãi cho đến khi chính sách mới được thực hiện _____ nhân viên mới hiểu hết lợi ích của nó.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not until' (Mãi cho đến khi... thì mới...).",
    category: "Inversion",
  },
  {
    id: "B2-1557",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a past event.",
    contextVi: "Mô tả một sự kiện trong quá khứ.",
    questionEn:
      "The mechanic indicated that the car had suffered serious engine problems and _____ a week to be repaired. ",
    questionVi:
      "Thợ máy cho biết rằng chiếc xe đã gặp phải các vấn đề nghiêm trọng về động cơ và _____ một tuần để được sửa chữa.",
    options: [
      { option: "will be taking", isCorrect: false },
      { option: "would take", isCorrect: true },
      { option: "has been taken", isCorrect: false },
      { option: "was taken", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'would take' để lùi thì trong câu tường thuật (will take -> would take).",
    category: "Passive Voice",
  },
  {
    id: "B2-1558",
    questionType: "word-form",
    questionEn:
      "The marketing department has been working _____ to prepare for the upcoming product launch.",
    questionVi:
      "Phòng marketing đã đang làm việc _____ để chuẩn bị cho buổi ra mắt sản phẩm sắp tới.",
    options: [
      { option: "diligently", isCorrect: true },
      { option: "diligent", isCorrect: false },
      { option: "diligence", isCorrect: false },
      { option: "more diligent", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ 'diligently' để bổ nghĩa cho động từ 'working'.",
    category: "Word Form",
  },
  {
    id: "B2-1559",
    questionType: "grammar",
    questionEn: "_____ the heavy rain, the outdoor concert was not cancelled.",
    questionVi: "_____ trời mưa to, buổi hòa nhạc ngoài trời đã không bị hủy.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "In spite", isCorrect: false },
      { option: "Even though", isCorrect: false },
    ],
    explanationVi: "'Despite' + cụm danh từ (the heavy rain).",
    category: "Conjunctions",
  },
  {
    id: "B2-1560",
    questionType: "vocabulary",
    questionEn:
      "Customers are encouraged to provide _____ on their experience with our new mobile application.",
    questionVi:
      "Khách hàng được khuyến khích cung cấp _____ về trải nghiệm của họ với ứng dụng di động mới của chúng tôi.",
    options: [
      { option: "feedback", isCorrect: true },
      { option: "feedbacking", isCorrect: false },
      { option: "feedbacks", isCorrect: false },
      { option: "to feedback", isCorrect: false },
    ],
    explanationVi: "'Feedback' là danh từ không đếm được.",
    category: "Vocabulary",
  },
  {
    id: "B2-1561",
    questionType: "word-form",
    questionEn:
      "The board of directors is considering a _____ to increase the annual budget for research and development.",
    questionVi:
      "Hội đồng quản trị đang xem xét một _____ tăng ngân sách hàng năm cho nghiên cứu và phát triển.",
    options: [
      { option: "proposal", isCorrect: true },
      { option: "propose", isCorrect: false },
      { option: "proposed", isCorrect: false },
      { option: "proposing", isCorrect: false },
    ],
    explanationVi: "Cần một danh từ sau mạo từ 'a'.",
    category: "Word Form",
  },
  {
    id: "B2-1562",
    questionType: "grammar",
    questionEn:
      "All employees must submit their expense reports _____ the end of the month.",
    questionVi: "Tất cả nhân viên phải nộp báo cáo chi phí _____ cuối tháng.",
    options: [
      { option: "by", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "until", isCorrect: false },
      { option: "on", isCorrect: false },
    ],
    explanationVi:
      "'By' dùng để chỉ một thời hạn chót (trước hoặc tại thời điểm đó).",
    category: "Prepositions",
  },
  {
    id: "B2-1563",
    questionType: "grammar",
    questionEn:
      "Ms. Nakamura _____ as the head of the accounting department for over ten years before she retired.",
    questionVi:
      "Bà Nakamura _____ làm trưởng phòng kế toán trong hơn mười năm trước khi nghỉ hưu.",
    options: [
      { option: "had served", isCorrect: true },
      { option: "serves", isCorrect: false },
      { option: "has served", isCorrect: false },
      { option: "will serve", isCorrect: false },
    ],
    explanationVi:
      "Quá khứ hoàn thành diễn tả hành động xảy ra trước một hành động khác trong quá khứ (retired).",
    category: "Tenses",
  },
  {
    id: "B2-1564",
    questionType: "word-form",
    questionEn:
      "The company's profits have grown _____ since the introduction of the new marketing strategy.",
    questionVi:
      "Lợi nhuận của công ty đã tăng trưởng _____ kể từ khi giới thiệu chiến lược marketing mới.",
    options: [
      { option: "significantly", isCorrect: true },
      { option: "significant", isCorrect: false },
      { option: "significance", isCorrect: false },
      { option: "signify", isCorrect: false },
    ],
    explanationVi: "Trạng từ 'significantly' bổ nghĩa cho động từ 'grown'.",
    category: "Word Form",
  },
  {
    id: "B2-1565",
    questionType: "word-form",
    questionEn:
      "It is _____ that all staff members attend the safety training session on Monday.",
    questionVi:
      "Việc tất cả nhân viên tham gia buổi huấn luyện an toàn vào thứ Hai là _____.",
    options: [
      { option: "mandatory", isCorrect: true },
      { option: "mandate", isCorrect: false },
      { option: "mandatorily", isCorrect: false },
      { option: "mandates", isCorrect: false },
    ],
    explanationVi: "Sau cấu trúc 'It is + adj' cần một tính từ.",
    category: "Word Form",
  },
  {
    id: "B2-1566",
    questionType: "grammar",
    questionEn:
      "The technician _____ fixed the server yesterday is from an external IT firm.",
    questionVi:
      "Kỹ thuật viên _____ đã sửa máy chủ ngày hôm qua đến từ một công ty IT bên ngoài.",
    options: [
      { option: "who", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "'Who' là đại từ quan hệ thay thế cho danh từ chỉ người đóng vai trò chủ ngữ.",
    category: "Relative Clause",
  },
  {
    id: "B2-1567",
    questionType: "grammar",
    questionEn:
      "Neither the project manager _____ the team members were aware of the technical glitch.",
    questionVi:
      "Cả quản lý dự án _____ các thành viên trong nhóm đều không biết về lỗi kỹ thuật.",
    options: [
      { option: "nor", isCorrect: true },
      { option: "or", isCorrect: false },
      { option: "and", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'Neither... nor...' (Không... cũng không...).",
    category: "Conjunctions",
  },
  {
    id: "B2-1568",
    questionType: "word-form",
    questionEn:
      "The new policy aims to _____ the procedure for requesting office supplies.",
    questionVi:
      "Chính sách mới nhằm mục đích _____ quy trình yêu cầu văn phòng phẩm.",
    options: [
      { option: "simplify", isCorrect: true },
      { option: "simple", isCorrect: false },
      { option: "simplicity", isCorrect: false },
      { option: "simply", isCorrect: false },
    ],
    explanationVi: "Sau 'to' cần một động từ nguyên mẫu.",
    category: "Word Form",
  },
  {
    id: "B2-1569",
    questionType: "vocabulary",
    questionEn:
      "Local residents were asked to _____ the proposed changes to the public park.",
    questionVi:
      "Cư dân địa phương được yêu cầu _____ về những thay đổi đề xuất đối với công viên công cộng.",
    options: [
      { option: "comment on", isCorrect: true },
      { option: "comment to", isCorrect: false },
      { option: "comment at", isCorrect: false },
      { option: "comment for", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'comment on something' (bình luận về cái gì).",
    category: "Prepositions",
  },
  {
    id: "B2-1570",
    questionType: "grammar",
    questionEn:
      "The seminar will focus _____ effective communication strategies in a multicultural workplace.",
    questionVi:
      "Hội thảo sẽ tập trung _____ các chiến lược giao tiếp hiệu quả trong môi trường làm việc đa văn hóa.",
    options: [
      { option: "on", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "'Focus on' (Tập trung vào).",
    category: "Prepositions",
  },
  {
    id: "B2-1571",
    questionType: "grammar",
    questionEn:
      "Please remain seated until the aircraft _____ to a complete stop at the gate.",
    questionVi:
      "Vui lòng ngồi yên cho đến khi máy bay _____ dừng hẳn tại cổng.",
    options: [
      { option: "comes", isCorrect: true },
      { option: "will come", isCorrect: false },
      { option: "coming", isCorrect: false },
      { option: "has come", isCorrect: false },
    ],
    explanationVi:
      "Trong mệnh đề thời gian với 'until', dùng hiện tại đơn để chỉ tương lai.",
    category: "Tenses",
  },
  {
    id: "B2-1572",
    questionType: "word-form",
    questionEn:
      "Employees are eligible for a bonus if they _____ their sales targets for the quarter.",
    questionVi:
      "Nhân viên đủ điều kiện nhận tiền thưởng nếu họ _____ mục tiêu doanh số của quý.",
    options: [
      { option: "exceed", isCorrect: true },
      { option: "excess", isCorrect: false },
      { option: "excessive", isCorrect: false },
      { option: "excessively", isCorrect: false },
    ],
    explanationVi: "Cần một động từ sau chủ ngữ 'they'.",
    category: "Word Form",
  },
  {
    id: "B2-1573",
    questionType: "word-form",
    questionEn:
      "The _____ of the local airport will allow for more international flights.",
    questionVi:
      "Sự _____ của sân bay địa phương sẽ cho phép có thêm nhiều chuyến bay quốc tế.",
    options: [
      { option: "expansion", isCorrect: true },
      { option: "expand", isCorrect: false },
      { option: "expansive", isCorrect: false },
      { option: "expandable", isCorrect: false },
    ],
    explanationVi: "Cần một danh từ sau mạo từ 'The'.",
    category: "Word Form",
  },
  {
    id: "B2-1574",
    questionType: "vocabulary",
    questionEn:
      "For any _____ regarding the membership, please contact our customer service desk.",
    questionVi:
      "Đối với bất kỳ _____ nào liên quan đến tư cách thành viên, vui lòng liên hệ với bàn dịch vụ khách hàng của chúng tôi.",
    options: [
      { option: "inquiries", isCorrect: true },
      { option: "requirements", isCorrect: false },
      { option: "responses", isCorrect: false },
      { option: "accounts", isCorrect: false },
    ],
    explanationVi:
      "'Inquiry' (câu hỏi/thắc mắc) là từ phù hợp nhất trong ngữ cảnh này.",
    category: "Vocabulary",
  },
  {
    id: "B2-1575",
    questionType: "grammar",
    questionEn:
      "_____ the delay in shipping, the customer was satisfied with the product quality.",
    questionVi:
      "_____ sự chậm trễ trong giao hàng, khách hàng vẫn hài lòng với chất lượng sản phẩm.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Because", isCorrect: false },
      { option: "Although", isCorrect: false },
      { option: "Since", isCorrect: false },
    ],
    explanationVi: "'Despite' + cụm danh từ diễn tả sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-1576",
    questionType: "vocabulary",
    questionEn:
      "The legal team is working to _____ the final terms of the merger agreement.",
    questionVi:
      "Nhóm pháp lý đang làm việc để _____ các điều khoản cuối cùng của thỏa thuận sáp nhập.",
    options: [
      { option: "negotiate", isCorrect: true },
      { option: "negotiation", isCorrect: false },
      { option: "negotiable", isCorrect: false },
      { option: "negotiator", isCorrect: false },
    ],
    explanationVi: "Sau 'to' cần một động từ nguyên mẫu.",
    category: "Vocabulary",
  },
  {
    id: "B2-1577",
    questionType: "word-form",
    questionEn:
      "The results of the preliminary study were deemed _____ by the research committee.",
    questionVi:
      "Kết quả của nghiên cứu sơ bộ đã được ủy ban nghiên cứu coi là _____.",
    options: [
      { option: "satisfactory", isCorrect: true },
      { option: "satisfaction", isCorrect: false },
      { option: "satisfactorily", isCorrect: false },
      { option: "satisfyingly", isCorrect: false },
    ],
    explanationVi: "Sau 'deemed' cần một tính từ.",
    category: "Word Form",
  },
  {
    id: "B2-1578",
    questionType: "grammar",
    questionEn:
      "If we _____ about the change in schedule, we would have adjusted our travel plans.",
    questionVi:
      "Nếu chúng tôi _____ về việc thay đổi lịch trình, chúng tôi đã điều chỉnh kế hoạch du lịch của mình.",
    options: [
      { option: "had known", isCorrect: true },
      { option: "knew", isCorrect: false },
      { option: "have known", isCorrect: false },
      { option: "would know", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 3: If + S + had V3, S + would have V3.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1579",
    questionType: "vocabulary",
    questionEn:
      "Only the department manager is _____ to sign off on major expenses.",
    questionVi:
      "Chỉ có quản lý bộ phận mới được _____ ký duyệt các khoản chi lớn.",
    options: [
      { option: "authorized", isCorrect: true },
      { option: "authorizing", isCorrect: false },
      { option: "authority", isCorrect: false },
      { option: "authorization", isCorrect: false },
    ],
    explanationVi: "'Authorized' (được ủy quyền) là tính từ phù hợp.",
    category: "Vocabulary",
  },
  {
    id: "B2-1580",
    questionType: "word-form",
    questionEn:
      "The company plans to _____ several smaller firms to expand its market share.",
    questionVi:
      "Công ty có kế hoạch _____ một số công ty nhỏ hơn để mở rộng thị phần.",
    options: [
      { option: "acquire", isCorrect: true },
      { option: "acquisition", isCorrect: false },
      { option: "acquired", isCorrect: false },
      { option: "acquiring", isCorrect: false },
    ],
    explanationVi: "Sau 'plans to' cần một động từ nguyên mẫu.",
    category: "Word Form",
  },
  {
    id: "B2-1581",
    questionType: "grammar",
    questionEn:
      "The candidate _____ we interviewed yesterday has extensive experience in logistics.",
    questionVi:
      "Ứng viên _____ chúng tôi đã phỏng vấn ngày hôm qua có kinh nghiệm sâu rộng về logistics.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "'Whom' làm tân ngữ cho động từ 'interviewed'. 'Who' cũng có thể chấp nhận trong văn nói nhưng 'whom' trang trọng hơn và đúng ngữ pháp TOEIC.",
    category: "Relative Clause",
  },
  {
    id: "B2-1582",
    questionType: "vocabulary",
    questionEn:
      "Many employees prefer to _____ by train to avoid the heavy traffic during rush hour.",
    questionVi:
      "Nhiều nhân viên thích _____ bằng tàu hỏa để tránh tắc đường vào giờ cao điểm.",
    options: [
      { option: "commute", isCorrect: true },
      { option: "travel", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "move", isCorrect: false },
    ],
    explanationVi:
      "'Commute' (đi làm hàng ngày) là từ chuyên dụng trong ngữ cảnh này.",
    category: "Vocabulary",
  },
  {
    id: "B2-1583",
    questionType: "word-form",
    questionEn:
      "Please ensure that you respond _____ to all messages from the client.",
    questionVi:
      "Vui lòng đảm bảo rằng bạn phản hồi _____ đối với tất cả tin nhắn từ khách hàng.",
    options: [
      { option: "promptly", isCorrect: true },
      { option: "prompt", isCorrect: false },
      { option: "promptness", isCorrect: false },
      { option: "prompter", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ 'promptly' để bổ nghĩa cho động từ 'respond'.",
    category: "Word Form",
  },
  {
    id: "B2-1584",
    questionType: "grammar",
    questionEn:
      "The new office layout was designed _____ the latest ergonomic standards.",
    questionVi:
      "Bố trí văn phòng mới được thiết kế _____ các tiêu chuẩn công thái học mới nhất.",
    options: [
      { option: "in accordance with", isCorrect: true },
      { option: "in addition to", isCorrect: false },
      { option: "as a result of", isCorrect: false },
      { option: "by means of", isCorrect: false },
    ],
    explanationVi: "'In accordance with' (phù hợp với / tuân theo).",
    category: "Prepositions",
  },
  {
    id: "B2-1585",
    questionType: "vocabulary",
    questionEn:
      "The company offers a performance-based _____ to encourage productivity among staff.",
    questionVi:
      "Công ty cung cấp một khoản _____ dựa trên hiệu suất để khuyến khích năng suất trong nhân viên.",
    options: [
      { option: "incentive", isCorrect: true },
      { option: "benefit", isCorrect: false },
      { option: "salary", isCorrect: false },
      { option: "pension", isCorrect: false },
    ],
    explanationVi:
      "'Incentive' (sự khuyến khích/tiền thưởng khích lệ) là từ phù hợp nhất.",
    category: "Vocabulary",
  },
  {
    id: "B2-1586",
    questionType: "grammar",
    questionEn:
      "_____ you have any questions, please do not hesitate to contact our support team.",
    questionVi:
      "_____ bạn có bất kỳ câu hỏi nào, vui lòng đừng ngần ngại liên hệ với nhóm hỗ trợ của chúng tôi.",
    options: [
      { option: "Should", isCorrect: true },
      { option: "Can", isCorrect: false },
      { option: "Will", isCorrect: false },
      { option: "Would", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 1 với 'Should'.",
    category: "Inversion",
  },
  {
    id: "B2-1587",
    questionType: "vocabulary",
    questionEn:
      "The project's success was the result of the _____ between the design and production teams.",
    questionVi:
      "Sự thành công của dự án là kết quả của sự _____ giữa nhóm thiết kế và nhóm sản xuất.",
    options: [
      { option: "collaboration", isCorrect: true },
      { option: "conference", isCorrect: false },
      { option: "competition", isCorrect: false },
      { option: "collection", isCorrect: false },
    ],
    explanationVi: "'Collaboration' (sự cộng tác) là từ phù hợp nhất.",
    category: "Vocabulary",
  },
  {
    id: "B2-1588",
    questionType: "word-form",
    questionEn:
      "The company's logo must be _____ across all marketing materials to maintain brand identity.",
    questionVi:
      "Logo của công ty phải _____ trên tất cả các tài liệu tiếp thị để duy trì bản sắc thương hiệu.",
    options: [
      { option: "consistent", isCorrect: true },
      { option: "consistently", isCorrect: false },
      { option: "consistency", isCorrect: false },
      { option: "consisting", isCorrect: false },
    ],
    explanationVi: "Sau động từ liên kết 'be' cần một tính từ.",
    category: "Word Form",
  },
  {
    id: "B2-1589",
    questionType: "vocabulary",
    questionEn:
      "Employees will be _____ for travel expenses incurred during business trips.",
    questionVi:
      "Nhân viên sẽ được _____ cho các chi phí đi lại phát sinh trong các chuyến công tác.",
    options: [
      { option: "reimbursed", isCorrect: true },
      { option: "reminded", isCorrect: false },
      { option: "refunded", isCorrect: false },
      { option: "returned", isCorrect: false },
    ],
    explanationVi:
      "'Reimburse' (hoàn tiền/bồi hoàn chi phí) là từ phù hợp nhất trong ngữ cảnh công việc.",
    category: "Vocabulary",
  },
  {
    id: "B2-1590",
    questionType: "grammar",
    questionEn:
      "The new safety regulations are scheduled to _____ by the end of this year.",
    questionVi: "Các quy định an toàn mới dự kiến sẽ _____ vào cuối năm nay.",
    options: [
      { option: "be implemented", isCorrect: true },
      { option: "implement", isCorrect: false },
      { option: "implementing", isCorrect: false },
      { option: "implementation", isCorrect: false },
    ],
    explanationVi: "Cấu trúc bị động: be + V3.",
    category: "Passive Voice",
  },
  {
    id: "B2-1591",
    questionType: "grammar",
    questionEn:
      "We can extend the warranty period, _____ the product has been maintained properly.",
    questionVi:
      "Chúng tôi có thể gia hạn thời gian bảo hành, _____ sản phẩm đã được bảo trì đúng cách.",
    options: [
      { option: "provided that", isCorrect: true },
      { option: "even if", isCorrect: false },
      { option: "as though", isCorrect: false },
      { option: "so that", isCorrect: false },
    ],
    explanationVi: "'Provided that' (với điều kiện là).",
    category: "Conjunctions",
  },
  {
    id: "B2-1592",
    questionType: "vocabulary",
    questionEn:
      "The _____ report indicates that the project is on track and within budget.",
    questionVi:
      "Báo cáo _____ cho thấy dự án đang đi đúng hướng và trong phạm vi ngân sách.",
    options: [
      { option: "preliminary", isCorrect: true },
      { option: "prior", isCorrect: false },
      { option: "previous", isCorrect: false },
      { option: "potential", isCorrect: false },
    ],
    explanationVi: "'Preliminary' (sơ bộ/ban đầu) thường dùng cho báo cáo.",
    category: "Vocabulary",
  },
  {
    id: "B2-1593",
    questionType: "word-form",
    questionEn:
      "The automated system requires regular _____ to ensure optimal performance.",
    questionVi:
      "Hệ thống tự động yêu cầu _____ thường xuyên để đảm bảo hiệu suất tối ưu.",
    options: [
      { option: "maintenance", isCorrect: true },
      { option: "maintain", isCorrect: false },
      { option: "maintainable", isCorrect: false },
      { option: "maintained", isCorrect: false },
    ],
    explanationVi: "Cần một danh từ làm tân ngữ cho 'requires'.",
    category: "Word Form",
  },
  {
    id: "B2-1594",
    questionType: "vocabulary",
    questionEn:
      "Mr. Henderson decided to _____ from his position as CEO after fifteen years of service.",
    questionVi:
      "Ông Henderson quyết định _____ khỏi chức vụ CEO sau mười lăm năm cống hiến.",
    options: [
      { option: "step down", isCorrect: true },
      { option: "step up", isCorrect: false },
      { option: "step in", isCorrect: false },
      { option: "step out", isCorrect: false },
    ],
    explanationVi: "'Step down' (từ chức/rời bỏ vị trí).",
    category: "Phrasal Verbs",
  },
  {
    id: "B2-1595",
    questionType: "vocabulary",
    questionEn:
      "The training program offers a _____ overview of the latest software updates.",
    questionVi:
      "Chương trình đào tạo cung cấp một cái nhìn _____ về các bản cập nhật phần mềm mới nhất.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensible", isCorrect: false },
      { option: "comprehending", isCorrect: false },
      { option: "comprehend", isCorrect: false },
    ],
    explanationVi: "'Comprehensive' (toàn diện/đầy đủ).",
    category: "Vocabulary",
  },
  {
    id: "B2-1596",
    questionType: "grammar",
    questionEn:
      "All visitors must register at the front desk _____ entering the facility.",
    questionVi:
      "Tất cả khách tham quan phải đăng ký tại quầy lễ tân _____ khi vào cơ sở.",
    options: [
      { option: "prior to", isCorrect: true },
      { option: "ahead", isCorrect: false },
      { option: "forward", isCorrect: false },
      { option: "previous to", isCorrect: false },
    ],
    explanationVi: "'Prior to' (trước khi) + V-ing/Danh từ.",
    category: "Prepositions",
  },
  {
    id: "B2-1597",
    questionType: "word-form",
    questionEn:
      "The company emphasizes the importance of maintaining data _____ at all times.",
    questionVi:
      "Công ty nhấn mạnh tầm quan trọng của việc duy trì _____ dữ liệu mọi lúc.",
    options: [
      { option: "confidentiality", isCorrect: true },
      { option: "confidential", isCorrect: false },
      { option: "confidentially", isCorrect: false },
      { option: "confide", isCorrect: false },
    ],
    explanationVi: "Cần một danh từ sau 'maintaining data'.",
    category: "Word Form",
  },
  {
    id: "B2-1598",
    questionType: "word-form",
    questionEn:
      "The manager asked for a _____ report on the project's progress by the end of the day.",
    questionVi:
      "Quản lý đã yêu cầu một bản báo cáo _____ về tiến độ của dự án vào cuối ngày.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehend", isCorrect: false },
      { option: "comprehensively", isCorrect: false },
      { option: "comprehension", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (comprehensive - toàn diện) để bổ nghĩa cho danh từ 'report'.",
    category: "Adjectives",
  },
  {
    id: "B2-1599",
    questionType: "grammar",
    questionEn:
      "Please remind the staff that the meeting will begin _____ at 9:00 AM.",
    questionVi:
      "Vui lòng nhắc nhở nhân viên rằng cuộc họp sẽ bắt đầu _____ lúc 9:00 sáng.",
    options: [
      { option: "promptly", isCorrect: true },
      { option: "prompt", isCorrect: false },
      { option: "prompting", isCorrect: false },
      { option: "prompts", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ (promptly - đúng giờ) để bổ nghĩa cho động từ 'begin'.",
    category: "Adverbs",
  },
  {
    id: "B2-1600",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ the old equipment with more energy-efficient models.",
    questionVi:
      "Công ty đã quyết định _____ thiết bị cũ bằng những mẫu tiết kiệm năng lượng hơn.",
    options: [
      { option: "replace", isCorrect: true },
      { option: "return", isCorrect: false },
      { option: "reduce", isCorrect: false },
      { option: "repeat", isCorrect: false },
    ],
    explanationVi:
      "Dựa vào ngữ cảnh đổi thiết bị cũ lấy thiết bị mới, ta chọn 'replace' (thay thế).",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1601",
    questionType: "grammar",
    questionEn:
      "_____ the inclement weather, the outdoor promotional event has been postponed.",
    questionVi:
      "_____ thời tiết khắc nghiệt, sự kiện quảng bá ngoài trời đã bị hoãn lại.",
    options: [
      { option: "Due to", isCorrect: true },
      { option: "Because", isCorrect: false },
      { option: "In spite of", isCorrect: false },
      { option: "Unless", isCorrect: false },
    ],
    explanationVi:
      "'Due to' + Cụm danh từ dùng để chỉ nguyên nhân. 'Because' phải đi với một mệnh đề.",
    category: "Conjunctions & Prepositions",
  },
  {
    id: "B2-1602",
    questionType: "word-form",
    questionEn:
      "Ms. Lee was _____ recommended for the position of regional director due to her extensive experience.",
    questionVi:
      "Bà Lee đã được giới thiệu một cách _____ cho vị trí giám đốc vùng nhờ kinh nghiệm phong phú của mình.",
    options: [
      { option: "highly", isCorrect: true },
      { option: "high", isCorrect: false },
      { option: "heighten", isCorrect: false },
      { option: "higher", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'highly' để bổ nghĩa cho động từ 'recommended' (được đánh giá cao).",
    category: "Adverbs",
  },
  {
    id: "B2-1603",
    questionType: "grammar",
    questionEn:
      "The new software allows users to access their files _____ from any location with internet service.",
    questionVi:
      "Phần mềm mới cho phép người dùng truy cập tệp của họ _____ từ bất kỳ địa điểm nào có dịch vụ internet.",
    options: [
      { option: "remotely", isCorrect: true },
      { option: "remote", isCorrect: false },
      { option: "remoteness", isCorrect: false },
      { option: "remoted", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng trạng từ 'remotely' (từ xa) để bổ nghĩa cho động từ 'access'.",
    category: "Adverbs",
  },
  {
    id: "B2-1604",
    questionType: "vocabulary",
    questionEn:
      "All employees are required to _____ the annual safety training workshop.",
    questionVi:
      "Tất cả nhân viên được yêu cầu _____ hội thảo đào tạo an toàn hàng năm.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "apply", isCorrect: false },
      { option: "assist", isCorrect: false },
      { option: "admit", isCorrect: false },
    ],
    explanationVi: "'Attend' mang nghĩa là tham dự (hội thảo, cuộc họp).",
    category: "Workplace Vocabulary",
  },
  {
    id: "B2-1605",
    questionType: "word-form",
    questionEn:
      "The _____ budget for the marketing campaign must be approved by the board of directors.",
    questionVi:
      "Ngân sách _____ cho chiến dịch tiếp thị phải được ban giám đốc phê duyệt.",
    options: [
      { option: "proposed", isCorrect: true },
      { option: "proposal", isCorrect: false },
      { option: "propose", isCorrect: false },
      { option: "proposing", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (phân từ) 'proposed' (được đề xuất) để bổ nghĩa cho 'budget'.",
    category: "Participles as Adjectives",
  },
  {
    id: "B2-1606",
    questionType: "grammar",
    questionEn:
      "The marketing team worked _____ to meet the tight deadline for the product launch.",
    questionVi:
      "Đội ngũ tiếp thị đã làm việc _____ để kịp thời hạn chặt chẽ cho đợt ra mắt sản phẩm.",
    options: [
      { option: "diligently", isCorrect: true },
      { option: "diligent", isCorrect: false },
      { option: "diligence", isCorrect: false },
      { option: "more diligent", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'diligently' (cần mẫn) để bổ nghĩa cho động từ 'worked'.",
    category: "Adverbs",
  },
  {
    id: "B2-1607",
    questionType: "grammar",
    questionEn:
      "Mr. Henderson will be away on a business trip _____ next Thursday.",
    questionVi: "Ông Henderson sẽ đi công tác _____ thứ Năm tới.",
    options: [
      { option: "until", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "between", isCorrect: false },
      { option: "among", isCorrect: false },
    ],
    explanationVi:
      "'Until' dùng để chỉ một hành động kéo dài cho đến một thời điểm trong tương lai.",
    category: "Prepositions",
  },
  {
    id: "B2-1608",
    questionType: "word-form",
    questionEn:
      "The technician provided a detailed _____ of the computer network issues.",
    questionVi:
      "Kỹ thuật viên đã cung cấp một bản _____ chi tiết về các sự cố mạng máy tính.",
    options: [
      { option: "description", isCorrect: true },
      { option: "descriptive", isCorrect: false },
      { option: "describe", isCorrect: false },
      { option: "describing", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ 'detailed' và mạo từ 'a' cần một danh từ (description - sự mô tả).",
    category: "Nouns",
  },
  {
    id: "B2-1609",
    questionType: "vocabulary",
    questionEn:
      "The hotel is conveniently _____ near the major tourist attractions and public transportation.",
    questionVi:
      "Khách sạn được _____ một cách thuận tiện gần các điểm thu hút khách du lịch lớn và phương tiện công cộng.",
    options: [
      { option: "located", isCorrect: true },
      { option: "placed", isCorrect: false },
      { option: "occupied", isCorrect: false },
      { option: "established", isCorrect: false },
    ],
    explanationVi: "Cụm từ phổ biến 'be located' nghĩa là tọa lạc tại đâu đó.",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1610",
    questionType: "grammar",
    questionEn:
      "The customer service representative _____ helped the client resolve the billing error.",
    questionVi:
      "Đại diện bộ phận chăm sóc khách hàng đã _____ giúp khách hàng giải quyết lỗi thanh toán.",
    options: [
      { option: "quickly", isCorrect: true },
      { option: "quick", isCorrect: false },
      { option: "quicker", isCorrect: false },
      { option: "quickness", isCorrect: false },
    ],
    explanationVi: "Cần trạng từ 'quickly' để bổ nghĩa cho động từ 'helped'.",
    category: "Adverbs",
  },
  {
    id: "B2-1611",
    questionType: "grammar",
    questionEn:
      "Students who are interested in the internship program _____ submit their applications by Monday.",
    questionVi:
      "Sinh viên quan tâm đến chương trình thực tập _____ nộp đơn đăng ký trước thứ Hai.",
    options: [
      { option: "must", isCorrect: true },
      { option: "has to", isCorrect: false },
      { option: "might", isCorrect: false },
      { option: "ought", isCorrect: false },
    ],
    explanationVi:
      "'Must' dùng để chỉ sự bắt buộc. 'Has to' sai vì chủ ngữ là 'Students' (số nhiều).",
    category: "Modal Verbs",
  },
  {
    id: "B2-1612",
    questionType: "word-form",
    questionEn:
      "The _____ of the new office building is expected to be completed by June.",
    questionVi:
      "Việc _____ tòa nhà văn phòng mới dự kiến sẽ hoàn thành vào tháng Sáu.",
    options: [
      { option: "construction", isCorrect: true },
      { option: "construct", isCorrect: false },
      { option: "constructive", isCorrect: false },
      { option: "constructed", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' cần một danh từ (construction - việc xây dựng).",
    category: "Nouns",
  },
  {
    id: "B2-1613",
    questionType: "grammar",
    questionEn:
      "Although the sales figures were slightly lower than expected, the overall performance was still _____.",
    questionVi:
      "Mặc dù doanh số bán hàng thấp hơn một chút so với dự kiến, hiệu suất tổng thể vẫn _____.",
    options: [
      { option: "satisfactory", isCorrect: true },
      { option: "satisfactorily", isCorrect: false },
      { option: "satisfaction", isCorrect: false },
      { option: "satisfied", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ tobe 'was' cần một tính từ để mô tả 'performance'.",
    category: "Adjectives",
  },
  {
    id: "B2-1614",
    questionType: "vocabulary",
    questionEn:
      "The legal department is reviewing the _____ of the agreement before it is signed.",
    questionVi:
      "Bộ phận pháp lý đang xem xét các _____ của thỏa thuận trước khi nó được ký kết.",
    options: [
      { option: "terms", isCorrect: true },
      { option: "times", isCorrect: false },
      { option: "tasks", isCorrect: false },
      { option: "tools", isCorrect: false },
    ],
    explanationVi:
      "'Terms' trong hợp đồng/thỏa thuận mang nghĩa là các điều khoản.",
    category: "Legal Vocabulary",
  },
  {
    id: "B2-1615",
    questionType: "grammar",
    questionEn:
      "The new manager is very _____ and always encourages open communication among team members.",
    questionVi:
      "Người quản lý mới rất _____ và luôn khuyến khích giao tiếp cởi mở giữa các thành viên trong nhóm.",
    options: [
      { option: "approachable", isCorrect: true },
      { option: "approach", isCorrect: false },
      { option: "approaching", isCorrect: false },
      { option: "approaches", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'approachable' (dễ gần, dễ tiếp cận) để mô tả tính cách người quản lý.",
    category: "Adjectives",
  },
  {
    id: "B2-1616",
    questionType: "grammar",
    questionEn:
      "Neither the supervisor _____ the employees were aware of the change in schedule.",
    questionVi:
      "Cả người giám sát _____ các nhân viên đều không biết về sự thay đổi lịch trình.",
    options: [
      { option: "nor", isCorrect: true },
      { option: "or", isCorrect: false },
      { option: "and", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc song hành: 'Neither... nor...' (Không... cũng không...).",
    category: "Conjunctions",
  },
  {
    id: "B2-1617",
    questionType: "word-form",
    questionEn:
      "The _____ of the research findings will be published in the next issue of the journal.",
    questionVi:
      "Kết quả _____ của các phát hiện nghiên cứu sẽ được công bố trong số tới của tạp chí.",
    options: [
      { option: "analysis", isCorrect: true },
      { option: "analyze", isCorrect: false },
      { option: "analytical", isCorrect: false },
      { option: "analyzed", isCorrect: false },
    ],
    explanationVi:
      "Cần một danh từ (analysis - sự phân tích) đóng vai trò làm chủ ngữ sau 'The'.",
    category: "Nouns",
  },
  {
    id: "B2-1618",
    questionType: "vocabulary",
    questionEn:
      "To receive a full _____, customers must return the merchandise within 30 days of purchase.",
    questionVi:
      "Để nhận được khoản _____ đầy đủ, khách hàng phải trả lại hàng hóa trong vòng 30 ngày kể từ ngày mua.",
    options: [
      { option: "refund", isCorrect: true },
      { option: "receipt", isCorrect: false },
      { option: "repair", isCorrect: false },
      { option: "reward", isCorrect: false },
    ],
    explanationVi: "'Refund' nghĩa là hoàn tiền khi trả lại hàng.",
    category: "Retail Vocabulary",
  },
  {
    id: "B2-1619",
    questionType: "grammar",
    questionEn:
      "The CEO will _____ the winners of the Employee Excellence Awards at the gala diner.",
    questionVi:
      "CEO sẽ _____ những người chiến thắng giải thưởng Nhân viên Xuất sắc tại bữa tiệc tối gala.",
    options: [
      { option: "announce", isCorrect: true },
      { option: "announcement", isCorrect: false },
      { option: "announcing", isCorrect: false },
      { option: "annoted", isCorrect: false },
    ],
    explanationVi:
      "Sau trợ động từ 'will' cần một động từ nguyên mẫu (announce - thông báo).",
    category: "Verb Tenses",
  },
  {
    id: "B2-1620",
    questionType: "grammar",
    questionEn:
      "If the delivery _____ by tomorrow, we will have to contact the shipping company.",
    questionVi:
      "Nếu đơn hàng _____ không được giao trước ngày mai, chúng ta sẽ phải liên hệ với công ty vận chuyển.",
    options: [
      { option: "does not arrive", isCorrect: true },
      { option: "will not arrive", isCorrect: false },
      { option: "has not arrived", isCorrect: false },
      { option: "is not arriving", isCorrect: false },
    ],
    explanationVi:
      "Trong câu điều kiện loại 1, mệnh đề 'if' sử dụng thì hiện tại đơn.",
    category: "Conditionals",
  },
  {
    id: "B2-1621",
    questionType: "word-form",
    questionEn:
      "The internet connection is _____ unreliable during peak hours.",
    questionVi:
      "Kết nối internet thường _____ không đáng tin cậy trong giờ cao điểm.",
    options: [
      { option: "frequently", isCorrect: true },
      { option: "frequency", isCorrect: false },
      { option: "frequent", isCorrect: false },
      { option: "frequented", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'frequently' (thường xuyên) để bổ nghĩa cho tính từ 'unreliable'.",
    category: "Adverbs",
  },
  {
    id: "B2-1622",
    questionType: "vocabulary",
    questionEn:
      "The _____ for the new software upgrade is available for download on our website.",
    questionVi:
      "Bản _____ cho việc nâng cấp phần mềm mới hiện đã có sẵn để tải xuống trên trang web của chúng tôi.",
    options: [
      { option: "manual", isCorrect: true },
      { option: "manager", isCorrect: false },
      { option: "member", isCorrect: false },
      { option: "message", isCorrect: false },
    ],
    explanationVi:
      "'Manual' (sách hướng dẫn) phù hợp với ngữ cảnh tải về cho phần mềm.",
    category: "IT Vocabulary",
  },
  {
    id: "B2-1623",
    questionType: "grammar",
    questionEn:
      "The accountant discovered an error in the budget _____ she was reviewing the financial reports.",
    questionVi:
      "Kế toán đã phát hiện ra một lỗi trong ngân sách _____ cô ấy đang xem xét các báo cáo tài chính.",
    options: [
      { option: "while", isCorrect: true },
      { option: "during", isCorrect: false },
      { option: "so", isCorrect: false },
      { option: "because", isCorrect: false },
    ],
    explanationVi:
      "'While' + Mệnh đề dùng để diễn tả hai hành động xảy ra song song hoặc một hành động đang diễn ra thì hành động khác xen vào.",
    category: "Conjunctions",
  },
  {
    id: "B2-1624",
    questionType: "word-form",
    questionEn:
      "The company has achieved _____ growth in the international market over the last decade.",
    questionVi:
      "Công ty đã đạt được sự tăng trưởng _____ trên thị trường quốc tế trong thập kỷ qua.",
    options: [
      { option: "significant", isCorrect: true },
      { option: "signify", isCorrect: false },
      { option: "significantly", isCorrect: false },
      { option: "signification", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (significant - đáng kể) để bổ nghĩa cho danh từ 'growth'.",
    category: "Adjectives",
  },
  {
    id: "B2-1625",
    questionType: "vocabulary",
    questionEn:
      "Employees are encouraged to provide _____ on the new workplace policies.",
    questionVi:
      "Nhân viên được khuyến khích cung cấp _____ về các chính sách nơi làm việc mới.",
    options: [
      { option: "feedback", isCorrect: true },
      { option: "features", isCorrect: false },
      { option: "functions", isCorrect: false },
      { option: "forecasts", isCorrect: false },
    ],
    explanationVi:
      "'Feedback' (phản hồi) là danh từ thường dùng khi nói về ý kiến của nhân viên về chính sách.",
    category: "HR Vocabulary",
  },
  {
    id: "B2-1626",
    questionType: "grammar",
    questionEn:
      "Mr. Kim usually _____ the office early on Fridays to beat the traffic.",
    questionVi:
      "Ông Kim thường _____ văn phòng sớm vào thứ Sáu để tránh tắc đường.",
    options: [
      { option: "leaves", isCorrect: true },
      { option: "leaving", isCorrect: false },
      { option: "leave", isCorrect: false },
      { option: "left", isCorrect: false },
    ],
    explanationVi:
      "Thói quen ở hiện tại với chủ ngữ số ít (Mr. Kim) nên dùng 'leaves'.",
    category: "Verb Tenses",
  },
  {
    id: "B2-1627",
    questionType: "grammar",
    questionEn:
      "The new auditorium is _____ bigger than the previous one, allowing for more guests.",
    questionVi:
      "Khán phòng mới _____ lớn hơn khán phòng trước đó, cho phép đón nhiều khách hơn.",
    options: [
      { option: "considerably", isCorrect: true },
      { option: "considerable", isCorrect: false },
      { option: "consideration", isCorrect: false },
      { option: "consider", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng trạng từ 'considerably' (đáng kể) để nhấn mạnh sự so sánh hơn 'bigger'.",
    category: "Adverbs & Comparison",
  },
  {
    id: "B2-1628",
    questionType: "word-form",
    questionEn:
      "The _____ for the positions are required to have at least five years of experience.",
    questionVi:
      "Các _____ cho các vị trí này được yêu cầu phải có ít nhất năm năm kinh nghiệm.",
    options: [
      { option: "applicants", isCorrect: true },
      { option: "apply", isCorrect: false },
      { option: "application", isCorrect: false },
      { option: "applicable", isCorrect: false },
    ],
    explanationVi:
      "Cần một danh từ chỉ người ở số nhiều (applicants - các ứng viên) do động từ là 'are'.",
    category: "Nouns",
  },
  {
    id: "B2-1629",
    questionType: "vocabulary",
    questionEn:
      "Due to a technical _____, the online payment system will be unavailable for one hour.",
    questionVi:
      "Do _____ kỹ thuật, hệ thống thanh toán trực tuyến sẽ không hoạt động trong một giờ.",
    options: [
      { option: "glitch", isCorrect: true },
      { option: "growth", isCorrect: false },
      { option: "goal", isCorrect: false },
      { option: "grant", isCorrect: false },
    ],
    explanationVi:
      "'Glitch' (lỗi nhỏ, sự cố kỹ thuật) phù hợp nhất với ngữ cảnh hệ thống không hoạt động.",
    category: "Technical Vocabulary",
  },
  {
    id: "B2-1630",
    questionType: "grammar",
    questionEn:
      "Please review the attached document and let us know if you _____ any further information.",
    questionVi:
      "Vui lòng xem lại tài liệu đính kèm và cho chúng tôi biết nếu bạn _____ thêm bất kỳ thông tin nào khác.",
    options: [
      { option: "require", isCorrect: true },
      { option: "requirement", isCorrect: false },
      { option: "required", isCorrect: false },
      { option: "requiring", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng động từ nguyên mẫu 'require' sau chủ ngữ 'you' trong mệnh đề điều kiện hiện tại.",
    category: "Verb Tenses",
  },
  {
    id: "B2-1631",
    questionType: "word-form",
    questionEn:
      "The team worked _____ to complete the project before the client's visit.",
    questionVi:
      "Nhóm đã làm việc _____ để hoàn thành dự án trước chuyến thăm của khách hàng.",
    options: [
      { option: "efficiently", isCorrect: true },
      { option: "efficiency", isCorrect: false },
      { option: "efficient", isCorrect: false },
      { option: "effect", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'efficiently' (hiệu quả) để bổ nghĩa cho động từ 'worked'.",
    category: "Adverbs",
  },
  {
    id: "B2-1632",
    questionType: "grammar",
    questionEn:
      "The seminar was _____ postponed because the keynote speaker was unable to attend.",
    questionVi:
      "Cuộc hội thảo đã bị hoãn _____ vì diễn giả chính không thể tham dự.",
    options: [
      { option: "indefinitely", isCorrect: true },
      { option: "indefinite", isCorrect: false },
      { option: "indefiniteness", isCorrect: false },
      { option: "define", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'indefinitely' (vô thời hạn) thường đi kèm với 'postponed'.",
    category: "Adverbs",
  },
  {
    id: "B2-1633",
    questionType: "vocabulary",
    questionEn:
      "Marketing experts suggest that the _____ of our brand will improve with the new advertising campaign.",
    questionVi:
      "Các chuyên gia tiếp thị gợi ý rằng _____ của thương hiệu chúng ta sẽ được cải thiện với chiến dịch quảng cáo mới.",
    options: [
      { option: "visibility", isCorrect: true },
      { option: "visit", isCorrect: false },
      { option: "vision", isCorrect: false },
      { option: "visitor", isCorrect: false },
    ],
    explanationVi:
      "Trong tiếp thị, 'brand visibility' (độ nhận diện/hiển thị thương hiệu) là thuật ngữ phổ biến.",
    category: "Marketing Vocabulary",
  },
  {
    id: "B2-1634",
    questionType: "grammar",
    questionEn:
      "You should check the _____ of the document before sending it to the printing department.",
    questionVi:
      "Bạn nên kiểm tra _____ của tài liệu trước khi gửi nó đến bộ phận in ấn.",
    options: [
      { option: "accuracy", isCorrect: true },
      { option: "accurate", isCorrect: false },
      { option: "accurately", isCorrect: false },
      { option: "accuse", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ (accuracy - sự chính xác).",
    category: "Nouns",
  },
  {
    id: "B2-1635",
    questionType: "word-form",
    questionEn:
      "The company offers a _____ benefits package to attract top talent.",
    questionVi:
      "Công ty cung cấp một gói phúc lợi _____ để thu hút những tài năng hàng đầu.",
    options: [
      { option: "competitive", isCorrect: true },
      { option: "compete", isCorrect: false },
      { option: "competitively", isCorrect: false },
      { option: "competition", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'competitive' (có sức cạnh tranh) để bổ nghĩa cho 'benefits package'.",
    category: "Adjectives",
  },
  {
    id: "B2-1636",
    questionType: "vocabulary",
    questionEn:
      "Please ensure that you _____ your expense report to the finance department by Friday.",
    questionVi:
      "Vui lòng đảm bảo rằng bạn _____ báo cáo chi phí của mình cho bộ phận tài chính trước thứ Sáu.",
    options: [
      { option: "submit", isCorrect: true },
      { option: "suggest", isCorrect: false },
      { option: "support", isCorrect: false },
      { option: "suspend", isCorrect: false },
    ],
    explanationVi: "'Submit' là từ chuẩn cho việc nộp báo cáo hoặc đơn từ.",
    category: "Workplace Vocabulary",
  },
  {
    id: "B2-1637",
    questionType: "grammar",
    questionEn:
      "The new employee is _____ harder than anyone else in the department.",
    questionVi:
      "Nhân viên mới đang làm việc _____ chăm chỉ hơn bất kỳ ai khác trong phòng ban.",
    options: [
      { option: "working", isCorrect: true },
      { option: "works", isCorrect: false },
      { option: "worked", isCorrect: false },
      { option: "work", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng thì hiện tại tiếp diễn 'is working' để mô tả hành động đang diễn ra.",
    category: "Verb Tenses",
  },
  {
    id: "B2-1638",
    questionType: "grammar",
    questionEn:
      "The office will be closed on Monday _____ observance of the national holiday.",
    questionVi:
      "Vanh phòng sẽ đóng cửa vào thứ Hai _____ việc kỷ niệm ngày lễ quốc gia.",
    options: [
      { option: "in", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ 'in observance of' có nghĩa là để kỷ niệm/tuân theo một ngày lễ.",
    category: "Prepositions",
  },
  {
    id: "B2-1639",
    questionType: "word-form",
    questionEn:
      "The CEO's opening speech was very _____, inspiring all the employees.",
    questionVi:
      "Bài phát biểu khai mạc của CEO rất _____, truyền cảm hứng cho tất cả nhân viên.",
    options: [
      { option: "persuasive", isCorrect: true },
      { option: "persuade", isCorrect: false },
      { option: "persuasion", isCorrect: false },
      { option: "persuasively", isCorrect: false },
    ],
    explanationVi:
      "Sau trạng từ chỉ mức độ 'very' cần một tính từ (persuasive - đầy thuyết phục).",
    category: "Adjectives",
  },
  {
    id: "B2-1640",
    questionType: "vocabulary",
    questionEn:
      "The company has decided to _____ its operations to several European countries next year.",
    questionVi:
      "Công ty đã quyết định _____ hoạt động của mình sang một số quốc gia châu Âu vào năm tới.",
    options: [
      { option: "expand", isCorrect: true },
      { option: "expect", isCorrect: false },
      { option: "explain", isCorrect: false },
      { option: "export", isCorrect: false },
    ],
    explanationVi:
      "'Expand' (mở rộng) phù hợp với việc tăng quy mô hoạt động sang các nước khác.",
    category: "Business Operations",
  },
  {
    id: "B2-1641",
    questionType: "grammar",
    questionEn:
      "Neither the project manager _____ the team members were satisfied with the initial results.",
    questionVi:
      "Cả quản lý dự án _____ các thành viên trong nhóm đều không hài lòng với kết quả ban đầu.",
    options: [
      { option: "nor", isCorrect: true },
      { option: "or", isCorrect: false },
      { option: "and", isCorrect: false },
      { option: "also", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'Neither... nor...' (Cả hai đều không).",
    category: "Conjunctions",
  },
  {
    id: "B2-1642",
    questionType: "word-form",
    questionEn:
      "The _____ process for the new software might take longer than originally anticipated.",
    questionVi:
      "Quá trình _____ cho phần mềm mới có thể mất nhiều thời gian hơn so với dự kiến ban đầu.",
    options: [
      { option: "installation", isCorrect: true },
      { option: "install", isCorrect: false },
      { option: "installed", isCorrect: false },
      { option: "installing", isCorrect: false },
    ],
    explanationVi:
      "Cần danh từ 'installation' (việc cài đặt) đứng trước 'process' để tạo thành cụm danh từ.",
    category: "Nouns",
  },
  {
    id: "B2-1643",
    questionType: "vocabulary",
    questionEn:
      "Participants are required to _____ their identity cards to enter the conference hall.",
    questionVi:
      "Người tham gia được yêu cầu _____ thẻ căn cước của họ để vào hội trường hội nghị.",
    options: [
      { option: "present", isCorrect: true },
      { option: "prevent", isCorrect: false },
      { option: "predict", isCorrect: false },
      { option: "prepare", isCorrect: false },
    ],
    explanationVi:
      "'Present' (xuất trình) là động từ phù hợp khi nói về giấy tờ tùy thân tại lối vào.",
    category: "Formal Vocabulary",
  },
  {
    id: "B2-1644",
    questionType: "grammar",
    questionEn:
      "The factory recently _____ new safety protocols to reduce workplace accidents.",
    questionVi:
      "Nhà máy gần đây _____ các quy trình an toàn mới để giảm thiểu tai nạn lao động.",
    options: [
      { option: "implemented", isCorrect: true },
      { option: "implement", isCorrect: false },
      { option: "implementing", isCorrect: false },
      { option: "implements", isCorrect: false },
    ],
    explanationVi:
      "Dấu hiệu 'recently' (gần đây) thường đi với thì quá khứ đơn hoặc hiện tại hoàn thành. Ở đây 'implemented' là phù hợp nhất.",
    category: "Verb Tenses",
  },
  {
    id: "B2-1645",
    questionType: "grammar",
    questionEn:
      "Ms. Geller is the person _____ you should contact regarding the office renovation.",
    questionVi:
      "Bà Geller là người _____ bạn nên liên hệ liên quan đến việc cải tạo văn phòng.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "'Whom' làm đại từ quan hệ thay thế cho tân ngữ chỉ người (Ms. Geller).",
    category: "Relative Pronouns",
  },
  {
    id: "B2-1646",
    questionType: "word-form",
    questionEn: "The _____ of the annual report has been delayed by one week.",
    questionVi: "Việc _____ báo cáo hàng năm đã bị trì hoãn một tuần.",
    options: [
      { option: "publication", isCorrect: true },
      { option: "publish", isCorrect: false },
      { option: "published", isCorrect: false },
      { option: "publicly", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' và trước giới từ 'of' cần một danh từ (publication - sự xuất bản/công bố).",
    category: "Nouns",
  },
  {
    id: "B2-1647",
    questionType: "vocabulary",
    questionEn:
      "Technicians will be _____ the heating system early tomorrow morning.",
    questionVi: "Các kỹ thuật viên sẽ _____ hệ thống sưởi vào sáng sớm mai.",
    options: [
      { option: "inspecting", isCorrect: true },
      { option: "informing", isCorrect: false },
      { option: "insisting", isCorrect: false },
      { option: "inventing", isCorrect: false },
    ],
    explanationVi:
      "'Inspecting' (kiểm tra) phù hợp với công việc kỹ thuật đối với hệ thống sưởi.",
    category: "Technical Vocabulary",
  },
  {
    id: "B2-1648",
    questionType: "grammar",
    questionEn:
      "Although the team faced many challenges, they _____ completed the project on time.",
    questionVi:
      "Mặc dù nhóm đối mặt với nhiều thử thách, họ _____ hoàn thành dự án đúng hạn.",
    options: [
      { option: "successfully", isCorrect: true },
      { option: "success", isCorrect: false },
      { option: "successful", isCorrect: false },
      { option: "succeed", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'successfully' để bổ nghĩa cho động từ 'completed'.",
    category: "Adverbs",
  },
  {
    id: "B2-1649",
    questionType: "grammar",
    questionEn:
      "All staff members must _____ the company's dress code policy at all times.",
    questionVi:
      "Tất cả nhân viên phải _____ chính sách về trang phục của công ty vào mọi lúc.",
    options: [
      { option: "follow", isCorrect: true },
      { option: "obeying", isCorrect: false },
      { option: "compliance", isCorrect: false },
      { option: "observant", isCorrect: false },
    ],
    explanationVi:
      "Sau 'must' cần một động từ nguyên mẫu (follow - tuân theo).",
    category: "Verb Patterns",
  },
  {
    id: "B2-1650",
    questionType: "word-form",
    questionEn:
      "The newly elected board member is known for her _____ leadership style.",
    questionVi:
      "Thành viên hội đồng quản trị mới đắc cử nổi tiếng với phong cách lãnh đạo _____ của mình.",
    options: [
      { option: "innovative", isCorrect: true },
      { option: "innovation", isCorrect: false },
      { option: "innovate", isCorrect: false },
      { option: "innovatively", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (innovative - đổi mới, sáng tạo) để bổ nghĩa cho 'leadership style'.",
    category: "Adjectives",
  },
  {
    id: "B2-1651",
    questionType: "vocabulary",
    questionEn:
      "The company’s annual _____ will be held at the Grand Hotel this year.",
    questionVi:
      "Hội nghị _____ hàng năm của công ty sẽ được tổ chức tại khách sạn Grand vào năm nay.",
    options: [
      { option: "conference", isCorrect: true },
      { option: "confirm", isCorrect: false },
      { option: "conflict", isCorrect: false },
      { option: "confidence", isCorrect: false },
    ],
    explanationVi:
      "'Conference' (hội nghị) là sự kiện thường niên phổ biến trong môi trường doanh nghiệp.",
    category: "Event Vocabulary",
  },
  {
    id: "B2-1652",
    questionType: "grammar",
    questionEn: "Mr. Watanabe has been living in London _____ three years.",
    questionVi: "Ông Watanabe đã sống ở London _____ ba năm.",
    options: [
      { option: "for", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "from", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'for' + khoảng thời gian trong thì hiện tại hoàn thành tiếp diễn.",
    category: "Prepositions & Tenses",
  },
  {
    id: "B2-1653",
    questionType: "vocabulary",
    questionEn:
      "The new marketing strategy is expected to _____ a lot of interest from potential investors.",
    questionVi:
      "Chiến lược tiếp thị mới được mong đợi sẽ _____ nhiều sự quan tâm từ các nhà đầu tư tiềm năng.",
    options: [
      { option: "generate", isCorrect: true },
      { option: "general", isCorrect: false },
      { option: "generosity", isCorrect: false },
      { option: "genuine", isCorrect: false },
    ],
    explanationVi:
      "'Generate interest' là một cụm từ cố định (collocation) có nghĩa là tạo ra sự quan tâm.",
    category: "Collocations",
  },
  {
    id: "B2-1654",
    questionType: "grammar",
    questionEn:
      "By the time the manager arrived, the staff _____ already finished the meeting.",
    questionVi:
      "Vào lúc người quản lý đến, nhân viên _____ đã kết thúc cuộc họp rồi.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "will have", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng thì quá khứ hoàn thành 'had finished' cho hành động xảy ra trước một hành động khác trong quá khứ.",
    category: "Verb Tenses",
  },
  {
    id: "B2-1655",
    questionType: "word-form",
    questionEn:
      "The financial advisor provided a _____ explanation of the investment options.",
    questionVi:
      "Cố vấn tài chính đã cung cấp một lời giải thích _____ về các lựa chọn đầu tư.",
    options: [
      { option: "thorough", isCorrect: true },
      { option: "thoroughly", isCorrect: false },
      { option: "thoroughness", isCorrect: false },
      { option: "through", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'thorough' (kỹ lưỡng, thấu đáo) để bổ nghĩa cho danh từ 'explanation'.",
    category: "Adjectives",
  },
  {
    id: "B2-1656",
    questionType: "grammar",
    questionEn:
      "The store offers a discount to customers _____ subscribe to the weekly newsletter.",
    questionVi:
      "Cửa hàng giảm giá cho những khách hàng _____ đăng ký nhận bản tin hàng tuần.",
    options: [
      { option: "who", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "'Who' làm đại từ quan hệ thay thế cho chủ ngữ chỉ người (customers).",
    category: "Relative Pronouns",
  },
  {
    id: "B2-1657",
    questionType: "vocabulary",
    questionEn:
      "The production department must _____ the quota by the end of the month.",
    questionVi: "Bộ phận sản xuất phải _____ chỉ tiêu vào cuối tháng.",
    options: [
      { option: "meet", isCorrect: true },
      { option: "make", isCorrect: false },
      { option: "mention", isCorrect: false },
      { option: "manage", isCorrect: false },
    ],
    explanationVi:
      "'Meet the quota' (đáp ứng chỉ tiêu) là cụm từ chuyên môn trong sản xuất.",
    category: "Business Collocations",
  },
  {
    id: "B2-1658",
    questionType: "vocabulary",
    questionEn:
      "The board of directors is expected to _____ the merger proposal during the meeting on Friday.",
    questionVi:
      "Hội đồng quản trị dự kiến sẽ _____ đề xuất sáp nhập trong cuộc họp vào thứ Sáu.",
    options: [
      { option: "ratify", isCorrect: true },
      { option: "rectify", isCorrect: false },
      { option: "notify", isCorrect: false },
      { option: "verify", isCorrect: false },
    ],
    explanationVi:
      "'Ratify' nghĩa là thông qua hoặc phê chuẩn (một tài liệu, hợp đồng, đề xuất). 'Rectify' là sửa chữa, 'Notify' là thông báo, 'Verify' là xác minh.",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1659",
    questionType: "word-form",
    questionEn:
      "The CEO's _____ decision to cut costs saved the company from potential bankruptcy.",
    questionVi:
      "Quyết định _____ của Giám đốc điều hành về việc cắt giảm chi phí đã cứu công ty khỏi nguy cơ phá sản.",
    options: [
      { option: "timely", isCorrect: true },
      { option: "time", isCorrect: false },
      { option: "timing", isCorrect: false },
      { option: "timeless", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'decision'. 'Timely' là tính từ có nghĩa là 'kịp thời'.",
    category: "Adjectives",
  },
  {
    id: "B2-1660",
    questionType: "grammar",
    questionEn:
      "Had the marketing team _____ the market research earlier, the campaign would have been more successful.",
    questionVi:
      "Nếu đội ngũ marketing _____ nghiên cứu thị trường sớm hơn, chiến dịch đã thành công hơn.",
    options: [
      { option: "conducted", isCorrect: true },
      { option: "conduct", isCorrect: false },
      { option: "conducting", isCorrect: false },
      { option: "been conducted", isCorrect: false },
    ],
    explanationVi:
      "Đây là cấu trúc đảo ngữ của câu điều kiện loại 3: Had + S + V3/ID. Vế sau là 'would have been' nên vế đầu dùng quá khứ hoàn thành.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1661",
    questionType: "vocabulary",
    questionEn:
      "The new software update is _____ with all major operating systems currently used in the office.",
    questionVi:
      "Bản cập nhật phần mềm mới _____ với tất cả các hệ điều hành chính hiện đang được sử dụng trong văn phòng.",
    options: [
      { option: "compatible", isCorrect: true },
      { option: "comparable", isCorrect: false },
      { option: "competitive", isCorrect: false },
      { option: "comprehensive", isCorrect: false },
    ],
    explanationVi:
      "'Compatible with' có nghĩa là tương thích với. 'Comparable' là có thể so sánh, 'Competitive' là cạnh tranh, 'Comprehensive' là toàn diện.",
    category: "Prepositions",
  },
  {
    id: "B2-1662",
    questionType: "word-form",
    questionEn:
      "Employees are encouraged to provide _____ feedback during the annual performance reviews.",
    questionVi:
      "Nhân viên được khuyến khích đưa ra phản hồi _____ trong các đợt đánh giá hiệu suất hàng năm.",
    options: [
      { option: "constructive", isCorrect: true },
      { option: "construction", isCorrect: false },
      { option: "constructively", isCorrect: false },
      { option: "construct", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'constructive' (mang tính xây dựng) để bổ nghĩa cho danh từ 'feedback'.",
    category: "Word Form",
  },
  {
    id: "B2-1663",
    questionType: "grammar",
    questionEn:
      "The manager insisted that the report _____ on her desk by 5 PM today.",
    questionVi:
      "Quản lý khăng khăng rằng bản báo cáo _____ trên bàn của cô ấy trước 5 giờ chiều nay.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has been", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive Mood) với động từ 'insist': insist that + S + (should) be/V-inf.",
    category: "Subjunctive",
  },
  {
    id: "B2-1664",
    questionType: "vocabulary",
    questionEn:
      "Despite the economic downturn, the company managed to _____ its market share.",
    questionVi:
      "Mặc dù kinh tế suy thoái, công ty vẫn xoay sở để _____ thị phần của mình.",
    options: [
      { option: "maintain", isCorrect: true },
      { option: "contain", isCorrect: false },
      { option: "obtain", isCorrect: false },
      { option: "sustain", isCorrect: false },
    ],
    explanationVi:
      "'Maintain' (duy trì) thường đi với 'market share'. 'Sustain' cũng mang nghĩa duy trì nhưng thường dùng cho sự phát triển bền vững.",
    category: "Business Collocations",
  },
  {
    id: "B2-1665",
    questionType: "grammar",
    questionEn:
      "The consultant suggested _____ the budget to allow for unexpected expenditure.",
    questionVi:
      "Nhà tư vấn đề xuất _____ ngân sách để dự phòng cho các khoản chi phí không lường trước.",
    options: [
      { option: "revising", isCorrect: true },
      { option: "to revise", isCorrect: false },
      { option: "revised", isCorrect: false },
      { option: "revision", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'suggest' là V-ing khi không có tân ngữ chỉ người.",
    category: "Gerunds",
  },
  {
    id: "B2-1666",
    questionType: "word-form",
    questionEn:
      "The _____ of the new production line has significantly increased our daily output.",
    questionVi:
      "Việc _____ dây chuyền sản xuất mới đã làm tăng đáng kể sản lượng hàng ngày của chúng tôi.",
    options: [
      { option: "implementation", isCorrect: true },
      { option: "implement", isCorrect: false },
      { option: "implemented", isCorrect: false },
      { option: "implementing", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' và trước giới từ 'of' cần một danh từ. 'Implementation' là việc thực hiện, triển khai.",
    category: "Nouns",
  },
  {
    id: "B2-1667",
    questionType: "vocabulary",
    questionEn:
      "The legal team is reviewing the contract to ensure all terms are _____ with local regulations.",
    questionVi:
      "Nhóm pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản _____ với quy định địa phương.",
    options: [
      { option: "consistent", isCorrect: true },
      { option: "persistent", isCorrect: false },
      { option: "resistant", isCorrect: false },
      { option: "insistent", isCorrect: false },
    ],
    explanationVi:
      "'Consistent with' có nghĩa là phù hợp, nhất quán với. 'Persistent' là kiên trì, 'Resistant' là kháng cự, 'Insistent' là khăng khăng.",
    category: "Adjectives",
  },
  {
    id: "B2-1668",
    questionType: "grammar",
    questionEn:
      "Not only _____ the deadline, but they also exceeded the sales targets.",
    questionVi: "Họ không những _____ thời hạn mà còn vượt chỉ tiêu doanh số.",
    options: [
      { option: "did they meet", isCorrect: true },
      { option: "they met", isCorrect: false },
      { option: "have they met", isCorrect: false },
      { option: "they did meet", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với 'Not only': Not only + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1669",
    questionType: "vocabulary",
    questionEn:
      "Mr. Henderson was _____ for his outstanding contribution to the company's growth.",
    questionVi:
      "Ông Henderson đã được _____ vì sự đóng góp xuất sắc của mình cho sự phát triển của công ty.",
    options: [
      { option: "commended", isCorrect: true },
      { option: "commanded", isCorrect: false },
      { option: "commented", isCorrect: false },
      { option: "committed", isCorrect: false },
    ],
    explanationVi:
      "'Commended' (khen ngợi, biểu dương) phù hợp với ngữ cảnh đóng góp tiền bạc hoặc công sức. 'Commanded' là ra lệnh.",
    category: "Vocabulary",
  },
  {
    id: "B2-1670",
    questionType: "word-form",
    questionEn:
      "The accountant pointed out that the figures provided in the report were _____.",
    questionVi:
      "Kế toán đã chỉ ra rằng các con số được cung cấp trong báo cáo là _____.",
    options: [
      { option: "inaccurate", isCorrect: true },
      { option: "inaccuracy", isCorrect: false },
      { option: "inaccurately", isCorrect: false },
      { option: "accuracy", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'were' cần một tính từ. 'Inaccurate' là không chính xác.",
    category: "Adjectives",
  },
  {
    id: "B2-1671",
    questionType: "grammar",
    questionEn:
      "By the time the new policy takes effect, all staff _____ the necessary training.",
    questionVi:
      "Vào lúc chính sách mới có hiệu lực, tất cả nhân viên _____ các buổi đào tạo cần thiết.",
    options: [
      { option: "will have completed", isCorrect: true },
      { option: "will complete", isCorrect: false },
      { option: "have completed", isCorrect: false },
      { option: "are completing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'By the time + hiện tại đơn, tương lai hoàn thành'.",
    category: "Tenses",
  },
  {
    id: "B2-1672",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ its operations to the Asian market to reach more customers.",
    questionVi:
      "Công ty quyết định _____ hoạt động của mình sang thị trường châu Á để tiếp cận nhiều khách hàng hơn.",
    options: [
      { option: "extend", isCorrect: true },
      { option: "expand", isCorrect: false },
      { option: "prolong", isCorrect: false },
      { option: "spread", isCorrect: false },
    ],
    explanationVi:
      "'Extend operations to' thường dùng khi nói về việc mở rộng phạm vi hoạt động đến một khu vực mới. 'Expand' thường dùng nội động từ hoặc expand something.",
    category: "Vocabulary",
  },
  {
    id: "B2-1673",
    questionType: "word-form",
    questionEn:
      "There is a _____ need for more skilled technicians in the renewable energy sector.",
    questionVi:
      "Có một nhu cầu _____ về các kỹ thuật viên lành nghề hơn trong lĩnh vực năng lượng tái tạo.",
    options: [
      { option: "growing", isCorrect: true },
      { option: "growth", isCorrect: false },
      { option: "grown", isCorrect: false },
      { option: "grow", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (hiện tại phân từ mang nghĩa chủ động) 'growing' (đang tăng dần) để bổ nghĩa cho 'need'.",
    category: "Adjectives",
  },
  {
    id: "B2-1674",
    questionType: "grammar",
    questionEn:
      "The supervisor _____ the team finish the project ahead of schedule by providing extra resources.",
    questionVi:
      "Người giám sát _____ nhóm hoàn thành dự án trước thời hạn bằng cách cung cấp thêm nguồn lực.",
    options: [
      { option: "helped", isCorrect: true },
      { option: "suggested", isCorrect: false },
      { option: "made", isCorrect: false },
      { option: "let", isCorrect: false },
    ],
    explanationVi:
      "Help someone (to) do something. 'Suggested' cần V-ing, 'made' và 'let' không đi với 'to' (nếu có) nhưng ở đây là động từ nguyên mẫu không 'to', tuy nhiên nghĩa của help phù hợp nhất với 'by providing extra resources'.",
    category: "Verbs",
  },
  {
    id: "B2-1675",
    questionType: "vocabulary",
    questionEn:
      "The internship program provides students with _____ experience in the financial industry.",
    questionVi:
      "Chương trình thực tập cung cấp cho sinh viên kinh nghiệm _____ trong ngành tài chính.",
    options: [
      { option: "hands-on", isCorrect: true },
      { option: "manual", isCorrect: false },
      { option: "physical", isCorrect: false },
      { option: "practical", isCorrect: false },
    ],
    explanationVi:
      "'Hands-on experience' (kinh nghiệm thực tế) là một cụm từ phổ biến trong môi trường làm việc.",
    category: "Collocations",
  },
  {
    id: "B2-1676",
    questionType: "word-form",
    questionEn:
      "The marketing campaign was _____ successful, resulting in a 20% increase in sales.",
    questionVi:
      "Chiến dịch marketing đã thành công _____, mang lại mức tăng doanh số 20%.",
    options: [
      { option: "highly", isCorrect: true },
      { option: "height", isCorrect: false },
      { option: "high", isCorrect: false },
      { option: "highest", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ 'highly' để bổ nghĩa cho tính từ 'successful'.",
    category: "Adverbs",
  },
  {
    id: "B2-1677",
    questionType: "grammar",
    questionEn:
      "Neither the manager nor the employees _____ aware of the scheduled power outage.",
    questionVi:
      "Cả người quản lý lẫn nhân viên đều _____ biết về lịch cắt điện đã định.",
    options: [
      { option: "were", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "has been", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Trong cấu trúc 'Neither... nor...', động từ chia theo chủ ngữ gần nhất (employees - số nhiều).",
    category: "Subject-Verb Agreement",
  },
  {
    id: "B2-1678",
    questionType: "vocabulary",
    questionEn:
      "The company's _____ to environmental sustainability has earned it several industry awards.",
    questionVi:
      "Sự _____ của công ty đối với sự bền vững môi trường đã giúp công ty giành được nhiều giải thưởng trong ngành.",
    options: [
      { option: "commitment", isCorrect: true },
      { option: "concession", isCorrect: false },
      { option: "confirmation", isCorrect: false },
      { option: "compensation", isCorrect: false },
    ],
    explanationVi:
      "'Commitment to' (sự cam kết đối với) là cụm từ phù hợp nhất. 'Concession' là sự nhượng bộ, 'Confirmation' là sự xác nhận, 'Compensation' là sự đền bù.",
    category: "Nouns",
  },
  {
    id: "B2-1679",
    questionType: "grammar",
    questionEn:
      "The new employee is very capable, _____ sometimes he lacks the confidence to lead projects.",
    questionVi:
      "Nhân viên mới rất có năng lực, _____ thỉnh thoảng anh ấy thiếu tự tin để dẫn dắt các dự án.",
    options: [
      { option: "yet", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "and", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi:
      "'Yet' dùng để nối hai vế tương phản, thường dùng trong văn phong trang trọng hơn 'but'. Cả 2 đều đúng về nghĩa nhưng 'yet' thường dùng sau dấu phẩy trong văn viết.",
    category: "Conjunctions",
  },
  {
    id: "B2-1680",
    questionType: "word-form",
    questionEn:
      "The renovation of the lobby will be _____ by a team of professional interior designers.",
    questionVi:
      "Việc cải tạo sảnh sẽ được _____ bởi một đội ngũ thiết kế nội thất chuyên nghiệp.",
    options: [
      { option: "overseen", isCorrect: true },
      { option: "overseeing", isCorrect: false },
      { option: "oversight", isCorrect: false },
      { option: "oversee", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động: be + V3/ID. 'Overseen' là quá khứ phân từ của 'oversee' (giám sát).",
    category: "Verbs",
  },
  {
    id: "B2-1681",
    questionType: "vocabulary",
    questionEn:
      "The conference organizers have provided a _____ list of local hotels and restaurants for the attendees.",
    questionVi:
      "Ban tổ chức hội nghị đã cung cấp một danh sách _____ các khách sạn và nhà hàng địa phương cho những người tham dự.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensible", isCorrect: false },
      { option: "compressed", isCorrect: false },
      { option: "compensated", isCorrect: false },
    ],
    explanationVi:
      "'Comprehensive' (toàn diện, bao quát) thường đi với danh sách (list) hoặc báo cáo (report). 'Comprehensible' là có thể hiểu được.",
    category: "Adjectives",
  },
  {
    id: "B2-1682",
    questionType: "grammar",
    questionEn:
      "We will provide you with a replacement unit _____ the original can be repaired in time.",
    questionVi:
      "Chúng tôi sẽ cung cấp cho bạn một đơn vị thay thế _____ cái gốc có thể được sửa chữa kịp thời.",
    options: [
      { option: "unless", isCorrect: true },
      { option: "if", isCorrect: false },
      { option: "as long as", isCorrect: false },
      { option: "provided that", isCorrect: false },
    ],
    explanationVi:
      "'Unless' (trừ khi) phù hợp nhất về nghĩa: sẽ thay thế trừ khi cái cũ sửa được. Các từ còn lại mang nghĩa 'nếu/miễn là'.",
    category: "Conjunctions",
  },
  {
    id: "B2-1683",
    questionType: "word-form",
    questionEn:
      "Your _____ to register for the seminar by the deadline may result in a loss of your reservation.",
    questionVi:
      "Việc bạn _____ đăng ký hội thảo trước thời hạn có thể dẫn đến việc mất chỗ đã đặt.",
    options: [
      { option: "failure", isCorrect: true },
      { option: "fail", isCorrect: false },
      { option: "failing", isCorrect: false },
      { option: "failed", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ sở hữu 'Your' cần một danh từ. 'Failure' (sự thất bại/việc không làm gì đó).",
    category: "Nouns",
  },
  {
    id: "B2-1684",
    questionType: "vocabulary",
    questionEn:
      "The human resources manager will _____ all applications before inviting candidates for an interview.",
    questionVi:
      "Trưởng phòng nhân sự sẽ _____ tất cả các đơn ứng tuyển trước khi mời các ứng viên đến phỏng vấn.",
    options: [
      { option: "scrutinize", isCorrect: true },
      { option: "speculate", isCorrect: false },
      { option: "simulate", isCorrect: false },
      { option: "stipulate", isCorrect: false },
    ],
    explanationVi:
      "'Scrutinize' (xem xét kỹ lưỡng) phù hợp với việc kiểm tra hồ sơ. 'Speculate' là dự đoán, 'Stipulate' là quy định.",
    category: "Verbs",
  },
  {
    id: "B2-1685",
    questionType: "grammar",
    questionEn:
      "It is vital that all safety procedures _____ followed strictly in the laboratory.",
    questionVi:
      "Điều quan trọng là tất cả các quy trình an toàn _____ được tuân thủ nghiêm ngặt trong phòng thí nghiệm.",
    options: [
      { option: "be", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "should", isCorrect: false },
      { option: "to be", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: It is vital that + S + (should) be V3/ID. Đây là câu bị động ở dạng giả định.",
    category: "Subjunctive",
  },
  {
    id: "B2-1686",
    questionType: "vocabulary",
    questionEn:
      "The company saw a _____ rise in profits after implementing the new marketing strategy.",
    questionVi:
      "Công ty đã thấy một sự gia tăng _____ về lợi nhuận sau khi triển khai chiến lược marketing mới.",
    options: [
      { option: "substantial", isCorrect: true },
      { option: "substitute", isCorrect: false },
      { option: "subsidiary", isCorrect: false },
      { option: "subtle", isCorrect: false },
    ],
    explanationVi:
      "'Substantial' (đáng kể) thường dùng để mô tả sự gia tăng hoặc thay đổi lớn trong kinh doanh. 'Subtle' là tinh tế/nhỏ.",
    category: "Adjectives",
  },
  {
    id: "B2-1687",
    questionType: "word-form",
    questionEn:
      "The customer service representative spoke _____ to the frustrated client to de-escalate the situation.",
    questionVi:
      "Đại diện dịch vụ khách hàng đã nói chuyện _____ với khách hàng đang bực bội để làm dịu tình hình.",
    options: [
      { option: "calmly", isCorrect: true },
      { option: "calm", isCorrect: false },
      { option: "calmness", isCorrect: false },
      { option: "calmed", isCorrect: false },
    ],
    explanationVi: "Cần một trạng từ 'calmly' để bổ nghĩa cho động từ 'spoke'.",
    category: "Adverbs",
  },
  {
    id: "B2-1688",
    questionType: "grammar",
    questionEn:
      "Instead of _____ the meeting, the chairperson decided to postpone it until next week.",
    questionVi:
      "Thay vì _____ cuộc họp, chủ tọa quyết định hoãn nó lại cho đến tuần sau.",
    options: [
      { option: "canceling", isCorrect: true },
      { option: "cancel", isCorrect: false },
      { option: "canceled", isCorrect: false },
      { option: "to cancel", isCorrect: false },
    ],
    explanationVi: "Sau giới từ 'Instead of' cần một V-ing.",
    category: "Gerunds",
  },
  {
    id: "B2-1689",
    questionType: "vocabulary",
    questionEn:
      "The manager decided to _____ some of the routine tasks to his assistants to focus on high-priority projects.",
    questionVi:
      "Người quản lý quyết định _____ một số nhiệm vụ thường nhật cho các trợ lý của mình để tập trung vào các dự án ưu tiên cao.",
    options: [
      { option: "delegate", isCorrect: true },
      { option: "dedicate", isCorrect: false },
      { option: "deviate", isCorrect: false },
      { option: "decorate", isCorrect: false },
    ],
    explanationVi:
      "'Delegate' (giao phó, ủy quyền công việc) là thuật ngữ quản lý phổ biến. 'Dedicate' là cống hiến.",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1690",
    questionType: "word-form",
    questionEn:
      "Due to the _____ nature of the documents, only authorized personnel are allowed to access them.",
    questionVi:
      "Do tính chất _____ của các tài liệu, chỉ những nhân viên được ủy quyền mới được phép tiếp cận chúng.",
    options: [
      { option: "confidential", isCorrect: true },
      { option: "confidentially", isCorrect: false },
      { option: "confidence", isCorrect: false },
      { option: "confiding", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'confidential' (bảo mật) để bổ nghĩa cho danh từ 'nature'.",
    category: "Adjectives",
  },
  {
    id: "B2-1691",
    questionType: "grammar",
    questionEn:
      "The property prices in this area have increased _____ over the past decade.",
    questionVi:
      "Giá bất động sản trong khu vực này đã tăng _____ trong thập kỷ qua.",
    options: [
      { option: "exponentially", isCorrect: true },
      { option: "exponential", isCorrect: false },
      { option: "exponent", isCorrect: false },
      { option: "exponents", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'exponentially' (theo cấp số nhân) để bổ nghĩa cho động từ 'increased'.",
    category: "Adverbs",
  },
  {
    id: "B2-1692",
    questionType: "vocabulary",
    questionEn:
      "The factory had to _____ production temporarily due to a shortage of raw materials.",
    questionVi:
      "Nhà máy phải _____ sản xuất tạm thời do thiếu hụt nguyên liệu thô.",
    options: [
      { option: "halt", isCorrect: true },
      { option: "hold", isCorrect: false },
      { option: "handle", isCorrect: false },
      { option: "hinder", isCorrect: false },
    ],
    explanationVi:
      "'Halt' (tạm dừng) thường dùng cho quá trình sản xuất hoặc hoạt động máy móc. 'Hinder' là cản trở.",
    category: "Verbs",
  },
  {
    id: "B2-1693",
    questionType: "grammar",
    questionEn:
      "I would rather you _____ the client directly instead of sending an anonymous email.",
    questionVi:
      "Tôi thà rằng bạn _____ khách hàng trực tiếp thay vì gửi một email ẩn danh.",
    options: [
      { option: "contacted", isCorrect: true },
      { option: "contact", isCorrect: false },
      { option: "to contact", isCorrect: false },
      { option: "had contacted", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'S + would rather + S + V2/ID' dùng để diễn tả mong muốn ở hiện tại nhưng trái thực tế hoặc mang tính lịch sự.",
    category: "Subjunctive",
  },
  {
    id: "B2-1694",
    questionType: "vocabulary",
    questionEn:
      "Please provide a _____ explanation for the budget discrepancy discovered during the audit.",
    questionVi:
      "Vui lòng cung cấp một lời giải thích _____ cho sự sai lệch ngân sách được phát hiện trong quá trình kiểm toán.",
    options: [
      { option: "plausible", isCorrect: true },
      { option: "portable", isCorrect: false },
      { option: "profitable", isCorrect: false },
      { option: "permissible", isCorrect: false },
    ],
    explanationVi:
      "'Plausible' (hợp lý, đáng tin) thường đi với 'explanation'.",
    category: "Adjectives",
  },
  {
    id: "B2-1695",
    questionType: "word-form",
    questionEn:
      "The _____ of the new highway has significantly reduced the commute time for workers.",
    questionVi:
      "Việc _____ đường cao tốc mới đã làm giảm đáng kể thời gian đi làm của công nhân.",
    options: [
      { option: "completion", isCorrect: true },
      { option: "complete", isCorrect: false },
      { option: "completely", isCorrect: false },
      { option: "completing", isCorrect: false },
    ],
    explanationVi:
      "Cần danh từ 'completion' (sự hoàn thành) đứng sau mạo từ và trước giới từ.",
    category: "Nouns",
  },
  {
    id: "B2-1696",
    questionType: "grammar",
    questionEn:
      "Hardly _____ the presentation when the power suddenly went out.",
    questionVi: "Vừa mới _____ bài thuyết trình thì điện đột ngột cúp.",
    options: [
      { option: "had she started", isCorrect: true },
      { option: "she had started", isCorrect: false },
      { option: "did she start", isCorrect: false },
      { option: "she started", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ: Hardly + had + S + V3 when + S + V2.",
    category: "Inversion",
  },
  {
    id: "B2-1697",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ the contract because the supplier failed to meet the quality standards.",
    questionVi:
      "Công ty quyết định _____ hợp đồng vì nhà cung cấp không đáp ứng được các tiêu chuẩn chất lượng.",
    options: [
      { option: "terminate", isCorrect: true },
      { option: "eliminate", isCorrect: false },
      { option: "culminate", isCorrect: false },
      { option: "anticipate", isCorrect: false },
    ],
    explanationVi:
      "'Terminate a contract' (chấm dứt hợp đồng) là cụm từ pháp lý/kinh doanh chuẩn.",
    category: "Business Collocations",
  },
  {
    id: "B2-1698",
    questionType: "grammar",
    questionEn:
      "The software is designed to help users organize their files _____ efficiently.",
    questionVi:
      "Phần mềm được thiết kế để giúp người dùng sắp xếp các tệp của họ _____ hiệu quả.",
    options: [
      { option: "more", isCorrect: true },
      { option: "most", isCorrect: false },
      { option: "very", isCorrect: false },
      { option: "too", isCorrect: false },
    ],
    explanationVi:
      "Cần dạng so sánh hơn 'more' để đi với trạng từ 'efficiently'.",
    category: "Comparison",
  },
  {
    id: "B2-1699",
    questionType: "vocabulary",
    questionEn:
      "After hours of negotiation, the two companies finally reached a _____ agreement.",
    questionVi:
      "Sau nhiều giờ đàm phán, hai công ty cuối cùng đã đạt được một thỏa thuận _____.",
    options: [
      { option: "mutual", isCorrect: true },
      { option: "neutral", isCorrect: false },
      { option: "partial", isCorrect: false },
      { option: "virtual", isCorrect: false },
    ],
    explanationVi:
      "'Mutual agreement' (thỏa thuận chung/song phương/lẫn nhau).",
    category: "Adjectives",
  },
  {
    id: "B2-1700",
    questionType: "word-form",
    questionEn:
      "The board issued a statement to _____ that all employees will receive a bonus this year.",
    questionVi:
      "Hội đồng quản trị đã đưa ra một tuyên bố để _____ rằng tất cả nhân viên sẽ nhận được tiền thưởng trong năm nay.",
    options: [
      { option: "clarify", isCorrect: true },
      { option: "clarity", isCorrect: false },
      { option: "clearance", isCorrect: false },
      { option: "clearly", isCorrect: false },
    ],
    explanationVi: "Sau 'to' cần một động từ nguyên mẫu. 'Clarify' (làm rõ).",
    category: "Verbs",
  },
  {
    id: "B2-1701",
    questionType: "grammar",
    questionEn:
      "_____ the fact that the project was over budget, the management decided to continue.",
    questionVi:
      "_____ việc dự án đã vượt quá ngân sách, ban quản lý vẫn quyết định tiếp tục.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "Even though", isCorrect: false },
      { option: "During", isCorrect: false },
    ],
    explanationVi:
      "'Despite' + N/V-ing (ở đây là cụm danh từ 'the fact that...'). 'Although' cần một mệnh đề.",
    category: "Conjunctions",
  },
  {
    id: "B2-1702",
    questionType: "vocabulary",
    questionEn:
      "The customer's _____ about the defective product was handled promptly by the support team.",
    questionVi:
      "Sự _____ của khách hàng về sản phẩm bị lỗi đã được đội ngũ hỗ trợ xử lý kịp thời.",
    options: [
      { option: "grievance", isCorrect: true },
      { option: "guarantee", isCorrect: false },
      { option: "guidance", isCorrect: false },
      { option: "gratitude", isCorrect: false },
    ],
    explanationVi:
      "'Grievance' (lời phàn nàn, sự bất bình) thường dùng trong bối cảnh chính thức. 'Gratitude' là lòng biết ơn.",
    category: "Nouns",
  },
  {
    id: "B2-1703",
    questionType: "word-form",
    questionEn:
      "The technician worked _____ to restore the network connection after the server crash.",
    questionVi:
      "Kỹ thuật viên đã làm việc _____ để khôi phục kết nối mạng sau sự cố máy chủ.",
    options: [
      { option: "tirelessly", isCorrect: true },
      { option: "tire", isCorrect: false },
      { option: "tired", isCorrect: false },
      { option: "tiresome", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ 'tirelessly' (không mệt mỏi) để bổ nghĩa cho 'worked'.",
    category: "Adverbs",
  },
  {
    id: "B2-1704",
    questionType: "grammar",
    questionEn:
      "We suggest that Mr. Miller _____ the proposal before the final submission.",
    questionVi:
      "Chúng tôi đề nghị ông Miller _____ đề xuất trước khi nộp bản cuối cùng.",
    options: [
      { option: "review", isCorrect: true },
      { option: "reviews", isCorrect: false },
      { option: "reviewed", isCorrect: false },
      { option: "to review", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định với 'suggest': suggest that S + V-inf.",
    category: "Subjunctive",
  },
  {
    id: "B2-1705",
    questionType: "vocabulary",
    questionEn:
      "The new employee _____ herself through her hard work and dedication.",
    questionVi:
      "Nhân viên mới đã _____ bản thân thông qua sự làm việc chăm chỉ và tận tụy.",
    options: [
      { option: "distinguished", isCorrect: true },
      { option: "extinguished", isCorrect: false },
      { option: "relinquished", isCorrect: false },
      { option: "diminished", isCorrect: false },
    ],
    explanationVi:
      "'Distinguish oneself' (làm cho mình nổi bật/khác biệt). 'Extinguish' là dập tắt.",
    category: "Verbs",
  },
  {
    id: "B2-1706",
    questionType: "word-form",
    questionEn:
      "All participants are required to wear _____ clothing while visiting the manufacturing plant.",
    questionVi:
      "Tất cả những người tham gia được yêu cầu mặc quần áo _____ trong khi tham quan nhà máy sản xuất.",
    options: [
      { option: "protective", isCorrect: true },
      { option: "protect", isCorrect: false },
      { option: "protection", isCorrect: false },
      { option: "protected", isCorrect: false },
    ],
    explanationVi:
      "'Protective clothing' (quần áo bảo hộ) là một cụm danh từ cố định.",
    category: "Adjectives",
  },
  {
    id: "B2-1707",
    questionType: "grammar",
    questionEn:
      "The project leader asked the team Members _____ their progress reports by Friday morning.",
    questionVi:
      "Trưởng nhóm yêu cầu các thành viên trong nhóm _____ báo cáo tiến độ của họ trước sáng thứ Sáu.",
    options: [
      { option: "to submit", isCorrect: true },
      { option: "submit", isCorrect: false },
      { option: "submitting", isCorrect: false },
      { option: "submitted", isCorrect: false },
    ],
    explanationVi: "Cấu trúc: ask someone + to do something.",
    category: "Infinitives",
  },
  {
    id: "B2-1708",
    questionType: "vocabulary",
    questionEn:
      "The manager is _____ for overseeing the department's daily operations.",
    questionVi: "Quản lý _____ giám sát các hoạt động hàng ngày của bộ phận.",
    options: [
      { option: "accountable", isCorrect: true },
      { option: "affordable", isCorrect: false },
      { option: "adaptable", isCorrect: false },
      { option: "available", isCorrect: false },
    ],
    explanationVi:
      "'Accountable for' (chịu trách nhiệm cho/giải trình cho). Phù hợp nhất với vai trò quản lý.",
    category: "Adjectives",
  },
  {
    id: "B2-1709",
    questionType: "word-form",
    questionEn:
      "The _____ of the company's asset values led to a re-evaluation of its stock price.",
    questionVi:
      "Việc _____ giá trị tài sản của công ty đã dẫn đến việc đánh giá lại giá cổ phiếu của nó.",
    options: [
      { option: "depreciation", isCorrect: true },
      { option: "depreciate", isCorrect: false },
      { option: "depreciating", isCorrect: false },
      { option: "depreciated", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'depreciation' (sự mất giá/khấu hao).",
    category: "Nouns",
  },
  {
    id: "B2-1710",
    questionType: "grammar",
    questionEn:
      "By the time the merger is finalized, both companies _____ their organizational structures.",
    questionVi:
      "Vào lúc việc sáp nhập được hoàn tất, cả hai công ty _____ cấu trúc tổ chức của họ.",
    options: [
      { option: "will have aligned", isCorrect: true },
      { option: "aligned", isCorrect: false },
      { option: "are aligning", isCorrect: false },
      { option: "have aligned", isCorrect: false },
    ],
    explanationVi:
      "Thì tương lai hoàn thành được dùng với 'By the time' ở hiện tại để chỉ hành động sẽ hoàn tất trước một mốc thời gian trong tương lai.",
    category: "Tenses",
  },
  {
    id: "B2-1712",
    questionType: "word-form",
    questionEn:
      "The marketing team needs to be more _____ if they want to attract younger customers.",
    questionVi:
      "Đội ngũ marketing cần phải _____ hơn nếu họ muốn thu hút những khách hàng trẻ tuổi hơn.",
    options: [
      { option: "innovative", isCorrect: true },
      { option: "innovation", isCorrect: false },
      { option: "innovate", isCorrect: false },
      { option: "innovatively", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to be' và 'more' cần một tính từ. 'Innovative' là mang tính đổi mới, sáng tạo.",
    category: "Adjectives",
  },
  {
    id: "B2-1713",
    questionType: "grammar",
    questionEn:
      "The CEO, _____ vision led the company to success, will be retiring next month.",
    questionVi:
      "Giám đốc điều hành, người _____ tầm nhìn đã đưa công ty đến thành công, sẽ nghỉ hưu vào tháng tới.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi: "Dùng 'whose' để chỉ sự sở hữu (tầm nhìn của CEO).",
    category: "Relative Pronouns",
  },
  {
    id: "B2-1714",
    questionType: "vocabulary",
    questionEn:
      "The new regulation will _____ small businesses to follow the same standards as large corporations.",
    questionVi:
      "Quy định mới sẽ _____ các doanh nghiệp nhỏ phải tuân theo các tiêu chuẩn giống như các tập đoàn lớn.",
    options: [
      { option: "compel", isCorrect: true },
      { option: "comply", isCorrect: false },
      { option: "compact", isCorrect: false },
      { option: "compensate", isCorrect: false },
    ],
    explanationVi:
      "'Compel someone to do something' (bắt buộc ai đó làm gì). 'Comply' đi với 'with'.",
    category: "Verbs",
  },
  {
    id: "B2-1715",
    questionType: "word-form",
    questionEn:
      "The _____ of the electricity grid is essential for the transition to renewable energy.",
    questionVi:
      "Việc _____ lưới điện là rất cần thiết cho quá trình chuyển đổi sang năng lượng tái tạo.",
    options: [
      { option: "modernization", isCorrect: true },
      { option: "modernize", isCorrect: false },
      { option: "modern", isCorrect: false },
      { option: "modernizing", isCorrect: false },
    ],
    explanationVi:
      "Cần một danh từ 'modernization' (sự hiện đại hóa) làm chủ ngữ.",
    category: "Nouns",
  },
  {
    id: "B2-1717",
    questionType: "vocabulary",
    questionEn:
      "The financial report _____ that the company's debt has decreased by 15%.",
    questionVi: "Báo cáo tài chính _____ rằng nợ của công ty đã giảm 15%.",
    options: [
      { option: "indicates", isCorrect: true },
      { option: "induces", isCorrect: false },
      { option: "infers", isCorrect: false },
      { option: "insists", isCorrect: false },
    ],
    explanationVi:
      "'Indicates' (chỉ ra rằng/cho thấy rằng) thường dùng với báo cáo, dữ liệu.",
    category: "Verbs",
  },
  {
    id: "B2-1718",
    questionType: "word-form",
    questionEn:
      "The manager spoke _____ about the need for improved communication within the team.",
    questionVi:
      "Người quản lý đã nói một cách _____ về nhu cầu cải thiện giao tiếp trong nhóm.",
    options: [
      { option: "persuasively", isCorrect: true },
      { option: "persuade", isCorrect: false },
      { option: "persuasive", isCorrect: false },
      { option: "persuasion", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'persuasively' (đầy sức thuyết phục) để bổ nghĩa cho 'spoke'.",
    category: "Adverbs",
  },
  {
    id: "B2-1719",
    questionType: "grammar",
    questionEn:
      "The workshop was _____ informative that many participants signed up for the advanced course.",
    questionVi:
      "Buổi hội thảo _____ nhiều thông tin đến mức nhiều người tham gia đã đăng ký khóa học nâng cao.",
    options: [
      { option: "so", isCorrect: true },
      { option: "such", isCorrect: false },
      { option: "too", isCorrect: false },
      { option: "very", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'so + adj + that' (đến mức mà).",
    category: "Conjunctions",
  },
  {
    id: "B2-1720",
    questionType: "vocabulary",
    questionEn:
      "The company's primary _____ is to become the market leader in the next five years.",
    questionVi:
      "_____ chính của công ty là trở thành người dẫn đầu thị trường trong năm năm tới.",
    options: [
      { option: "objective", isCorrect: true },
      { option: "objection", isCorrect: false },
      { option: "obstacle", isCorrect: false },
      { option: "obligation", isCorrect: false },
    ],
    explanationVi:
      "'Objective' (mục tiêu). 'Objection' là sự phản đối, 'Obligation' là nghĩa vụ.",
    category: "Nouns",
  },
  {
    id: "B2-1721",
    questionType: "word-form",
    questionEn:
      "The legal department issued a _____ notice regarding the new data privacy laws.",
    questionVi:
      "Bộ phận pháp lý đã ban hành một thông báo _____ liên quan đến luật bảo mật dữ liệu mới.",
    options: [
      { option: "formative", isCorrect: false },
      { option: "formal", isCorrect: true },
      { option: "formula", isCorrect: false },
      { option: "formality", isCorrect: false },
    ],
    explanationVi: "'Formal notice' (thông báo chính thức).",
    category: "Adjectives",
  },
  {
    id: "B2-1722",
    questionType: "grammar",
    questionEn:
      "Neither of the candidates _____ the specific requirements for the senior position.",
    questionVi:
      "Không ai trong số các ứng viên _____ các yêu cầu cụ thể cho vị trí cấp cao.",
    options: [
      { option: "meets", isCorrect: true },
      { option: "meet", isCorrect: false },
      { option: "meeting", isCorrect: false },
      { option: "have met", isCorrect: false },
    ],
    explanationVi:
      "'Neither of' + danh từ số nhiều nhưng động từ thường chia số ít.",
    category: "Subject-Verb Agreement",
  },
  {
    id: "B2-1723",
    questionType: "vocabulary",
    questionEn:
      "The new budget _____ will limit the amount of money spent on overseas travel.",
    questionVi:
      "Việc _____ ngân sách mới sẽ giới hạn số tiền chi cho các chuyến công tác nước ngoài.",
    options: [
      { option: "constraints", isCorrect: true },
      { option: "constants", isCorrect: false },
      { option: "constructs", isCorrect: false },
      { option: "contracts", isCorrect: false },
    ],
    explanationVi: "'Budget constraints' (ràng buộc/hạn chế ngân sách).",
    category: "Business Collocations",
  },
  {
    id: "B2-1724",
    questionType: "word-form",
    questionEn:
      "The team worked _____ to solve the technical issues before the product launch.",
    questionVi:
      "Nhóm đã làm việc _____ để giải quyết các vấn đề kỹ thuật trước khi ra mắt sản phẩm.",
    options: [
      { option: "collaboratively", isCorrect: true },
      { option: "collaboration", isCorrect: false },
      { option: "collaborate", isCorrect: false },
      { option: "collaborative", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'collaboratively' (một cách cộng tác) để bổ nghĩa cho 'worked'.",
    category: "Adverbs",
  },
  {
    id: "B2-1725",
    questionType: "grammar",
    questionEn:
      "The manager asked that the employees _____ all safety protocols during the drill.",
    questionVi:
      "Người quản lý yêu cầu nhân viên _____ tất cả các quy trình an toàn trong buổi diễn tập.",
    options: [
      { option: "observe", isCorrect: true },
      { option: "observes", isCorrect: false },
      { option: "observed", isCorrect: false },
      { option: "to observe", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: ask that + S + V-inf. 'Observe' ở đây nghĩa là tuân thủ.",
    category: "Subjunctive",
  },
  {
    id: "B2-1726",
    questionType: "vocabulary",
    questionEn:
      "The company's _____ has increased since they started using more efficient technology.",
    questionVi:
      "_____ của công ty đã tăng lên kể từ khi họ bắt đầu sử dụng công nghệ hiệu quả hơn.",
    options: [
      { option: "productivity", isCorrect: true },
      { option: "predictability", isCorrect: false },
      { option: "punctuality", isCorrect: false },
      { option: "perceptibility", isCorrect: false },
    ],
    explanationVi: "'Productivity' (năng suất). 'Punctuality' là sự đúng giờ.",
    category: "Nouns",
  },
  {
    id: "B2-1727",
    questionType: "word-form",
    questionEn:
      "The results from the feasibility study were quite _____ for the investors.",
    questionVi:
      "Kết quả từ nghiên cứu khả thi khá là _____ đối với các nhà đầu tư.",
    options: [
      { option: "encouraging", isCorrect: true },
      { option: "encourage", isCorrect: false },
      { option: "encouraged", isCorrect: false },
      { option: "encouragement", isCorrect: false },
    ],
    explanationVi:
      "Dùng tính từ hiện tại phân từ 'encouraging' (mang tính khích lệ/đầy hứa hẹn) để mô tả tính chất của 'results'.",
    category: "Adjectives",
  },
  {
    id: "B2-1728",
    questionType: "grammar",
    questionEn:
      "Regardless _____ the outcome of the meeting, we must proceed with our original plan.",
    questionVi:
      "Bất kể _____ kết quả cuộc họp như thế nào, chúng ta phải tiến hành kế hoạch ban đầu.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Cụm từ cố định: 'regardless of' (bất kể).",
    category: "Prepositions",
  },
  {
    id: "B2-1729",
    questionType: "vocabulary",
    questionEn:
      "The new employee is very _____, always finishing his tasks before the deadline.",
    questionVi:
      "Nhân viên mới rất _____, luôn hoàn thành nhiệm vụ trước thời hạn.",
    options: [
      { option: "diligent", isCorrect: true },
      { option: "delinquent", isCorrect: false },
      { option: "dominant", isCorrect: false },
      { option: "dormant", isCorrect: false },
    ],
    explanationVi:
      "'Diligent' (siêng năng, cần cù). 'Dormant' là ngủ đông/bất động.",
    category: "Adjectives",
  },
  {
    id: "B2-1730",
    questionType: "word-form",
    questionEn:
      "The _____ of the company's website has improved its online sales figure.",
    questionVi:
      "Việc _____ trang web của công ty đã cải thiện con số doanh thu trực tuyến.",
    options: [
      { option: "optimization", isCorrect: true },
      { option: "optimize", isCorrect: false },
      { option: "optimized", isCorrect: false },
      { option: "optimizing", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'optimization' (sự tối ưu hóa).",
    category: "Nouns",
  },
  {
    id: "B2-1731",
    questionType: "grammar",
    questionEn:
      "Scarcely _____ the office when the manager called him back for an urgent task.",
    questionVi:
      "Anh ấy vừa mới _____ văn phòng thì người quản lý gọi anh ấy quay lại vì một nhiệm vụ khẩn cấp.",
    options: [
      { option: "had he left", isCorrect: true },
      { option: "he had left", isCorrect: false },
      { option: "did he leave", isCorrect: false },
      { option: "he left", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ: Scarcely + had + S + V3 when + S + V2.",
    category: "Inversion",
  },
  {
    id: "B2-1732",
    questionType: "vocabulary",
    questionEn:
      "The insurance company will _____ the client for any damages caused by the accident.",
    questionVi:
      "Công ty bảo hiểm sẽ _____ khách hàng cho bất kỳ thiệt hại nào do vụ tai nạn gây ra.",
    options: [
      { option: "compensate", isCorrect: true },
      { option: "commentate", isCorrect: false },
      { option: "confiscate", isCorrect: false },
      { option: "corroborate", isCorrect: false },
    ],
    explanationVi:
      "'Compensate someone for something' (bồi thường cho ai cái gì).",
    category: "Verbs",
  },
  {
    id: "B2-1733",
    questionType: "word-form",
    questionEn:
      "The candidate has a _____ background in software engineering and project management.",
    questionVi:
      "Ứng viên có một nền tảng _____ về kỹ thuật phần mềm và quản lý dự án.",
    options: [
      { option: "solid", isCorrect: true },
      { option: "solidity", isCorrect: false },
      { option: "solidly", isCorrect: false },
      { option: "solidify", isCorrect: false },
    ],
    explanationVi: "'Solid background' (nền tảng vững chắc).",
    category: "Adjectives",
  },
  {
    id: "B2-1734",
    questionType: "grammar",
    questionEn:
      "The director suggested _____ the marketing campaign until the new product is ready.",
    questionVi:
      "Giám đốc đề nghị _____ chiến dịch marketing cho đến khi sản phẩm mới sẵn sàng.",
    options: [
      { option: "suspending", isCorrect: true },
      { option: "to suspend", isCorrect: false },
      { option: "suspended", isCorrect: false },
      { option: "suspension", isCorrect: false },
    ],
    explanationVi: "Sau 'suggest' dùng V-ing.",
    category: "Gerunds",
  },
  {
    id: "B2-1735",
    questionType: "vocabulary",
    questionEn:
      "The company's _____ to ethical business practices has attracted many socially conscious investors.",
    questionVi:
      "Sự _____ của công ty đối với các thực tiễn kinh doanh có đạo đức đã thu hút nhiều nhà đầu tư có ý thức xã hội.",
    options: [
      { option: "adherence", isCorrect: true },
      { option: "attendance", isCorrect: false },
      { option: "allowance", isCorrect: false },
      { option: "acceptance", isCorrect: false },
    ],
    explanationVi: "'Adherence to' (sự tuân thủ/gắn bó với).",
    category: "Nouns",
  },
  {
    id: "B2-1736",
    questionType: "word-form",
    questionEn:
      "The technician performed a _____ check of the system to identify the cause of the failure.",
    questionVi:
      "Kỹ thuật viên đã thực hiện một việc kiểm tra _____ hệ thống để xác định nguyên nhân lỗi.",
    options: [
      { option: "thorough", isCorrect: true },
      { option: "thoroughly", isCorrect: false },
      { option: "thoroughness", isCorrect: false },
      { option: "through", isCorrect: false },
    ],
    explanationVi: "Cần tính từ 'thorough' (kỹ lưỡng) bổ nghĩa cho 'check'.",
    category: "Adjectives",
  },
  {
    id: "B2-1737",
    questionType: "grammar",
    questionEn:
      "Only by working together _____ the team be able to finish the project on time.",
    questionVi:
      "Chỉ bằng cách làm việc cùng nhau, nhóm _____ có thể hoàn thành dự án đúng hạn.",
    options: [
      { option: "will", isCorrect: true },
      { option: "they will", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "can", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ: Only by + V-ing + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1738",
    questionType: "vocabulary",
    questionEn:
      "The manager decided to _____ the meeting as most of the participants were unable to attend.",
    questionVi:
      "Người quản lý quyết định _____ cuộc họp vì hầu hết những người tham gia không thể tham dự.",
    options: [
      { option: "defer", isCorrect: true },
      { option: "deter", isCorrect: false },
      { option: "refer", isCorrect: false },
      { option: "infer", isCorrect: false },
    ],
    explanationVi: "'Defer' (trì hoãn). 'Deter' là ngăn chặn.",
    category: "Verbs",
  },
  {
    id: "B2-1739",
    questionType: "word-form",
    questionEn:
      "The _____ of the new policy was met with mixed reactions from the staff.",
    questionVi:
      "Việc _____ chính sách mới đã vấp phải những phản ứng trái chiều từ nhân viên.",
    options: [
      { option: "announcement", isCorrect: true },
      { option: "announce", isCorrect: false },
      { option: "announcing", isCorrect: false },
      { option: "announced", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'announcement' (sự thông báo) đứng sau mạo từ.",
    category: "Nouns",
  },
  {
    id: "B2-1740",
    questionType: "grammar",
    questionEn:
      "The supervisor _____ the employees to take short breaks to improve their focus.",
    questionVi:
      "Người giám sát _____ nhân viên nghỉ giải lao ngắn để cải thiện sự tập trung.",
    options: [
      { option: "encouraged", isCorrect: true },
      { option: "suggested", isCorrect: false },
      { option: "explained", isCorrect: false },
      { option: "noticed", isCorrect: false },
    ],
    explanationVi: "Cấu trúc: encourage someone to do something.",
    category: "Infinitives",
  },
  {
    id: "B2-1741",
    questionType: "vocabulary",
    questionEn:
      "The company's stock price _____ significantly after the positive quarterly report was released.",
    questionVi:
      "Giá cổ phiếu của công ty đã _____ đáng kể sau khi báo cáo hàng quý tích cực được công bố.",
    options: [
      { option: "surged", isCorrect: true },
      { option: "merged", isCorrect: false },
      { option: "purged", isCorrect: false },
      { option: "urged", isCorrect: false },
    ],
    explanationVi:
      "'Surge' (tăng mạnh) thường dùng cho giá cổ phiếu hoặc nhu cầu.",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1742",
    questionType: "word-form",
    questionEn:
      "The CEO gave a _____ speech about the company's future goals and vision.",
    questionVi:
      "Giám đốc điều hành đã có một bài phát biểu _____ về các mục tiêu và tầm nhìn tương lai của công ty.",
    options: [
      { option: "motivational", isCorrect: true },
      { option: "motivation", isCorrect: false },
      { option: "motivate", isCorrect: false },
      { option: "motivating", isCorrect: false },
    ],
    explanationVi:
      "'Motivational speech' (bài phát biểu truyền cảm hứng/động lực).",
    category: "Adjectives",
  },
  {
    id: "B2-1743",
    questionType: "grammar",
    questionEn:
      "Under no circumstances _____ the confidential documents leaves the building.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, hồ sơ bảo mật _____ được rời khỏi tòa nhà.",
    options: [
      { option: "should", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "must", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: Under no circumstances + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1744",
    questionType: "vocabulary",
    questionEn:
      "The new manager is _____ for streamlining the production process.",
    questionVi:
      "Người quản lý mới chịu _____ cho việc tinh giản quy trình sản xuất.",
    options: [
      { option: "responsible", isCorrect: true },
      { option: "responsive", isCorrect: false },
      { option: "reasonable", isCorrect: false },
      { option: "reliable", isCorrect: false },
    ],
    explanationVi: "'Responsible for' (chịu trách nhiệm cho).",
    category: "Adjectives",
  },
  {
    id: "B2-1745",
    questionType: "word-form",
    questionEn:
      "The team needs to work _____ if they want to finish the project before the deadline.",
    questionVi:
      "Nhóm cần làm việc _____ nếu họ muốn hoàn thành dự án trước thời hạn.",
    options: [
      { option: "efficiently", isCorrect: true },
      { option: "efficiency", isCorrect: false },
      { option: "efficient", isCorrect: false },
      { option: "effect", isCorrect: false },
    ],
    explanationVi: "Cần trạng từ 'efficiently' (hiệu quả) bổ nghĩa cho 'work'.",
    category: "Adverbs",
  },
  {
    id: "B2-1746",
    questionType: "grammar",
    questionEn:
      "I would have attended the seminar if I _____ about it earlier.",
    questionVi: "Tôi đã tham dự hội thảo nếu tôi _____ về nó sớm hơn.",
    options: [
      { option: "had known", isCorrect: true },
      { option: "knew", isCorrect: false },
      { option: "have known", isCorrect: false },
      { option: "would know", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 3: If + S + had V3, S + would have V3.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1747",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ its workforce due to the automation of many manual tasks.",
    questionVi:
      "Công ty quyết định _____ lực lượng lao động của mình do việc tự động hóa nhiều nhiệm vụ thủ công.",
    options: [
      { option: "downsize", isCorrect: true },
      { option: "downplay", isCorrect: false },
      { option: "downpour", isCorrect: false },
      { option: "downstairs", isCorrect: false },
    ],
    explanationVi: "'Downsize' (cắt giảm quy mô/nhân sự) trong kinh doanh.",
    category: "Verbs",
  },
  {
    id: "B2-1748",
    questionType: "word-form",
    questionEn:
      "The _____ of the company's financial records is required for the annual audit.",
    questionVi:
      "Việc _____ các hồ sơ tài chính của công ty là bắt buộc cho cuộc kiểm toán hàng năm.",
    options: [
      { option: "validation", isCorrect: true },
      { option: "validate", isCorrect: false },
      { option: "validating", isCorrect: false },
      { option: "valid", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'validation' (sự xác nhận/phê chuẩn).",
    category: "Nouns",
  },
  {
    id: "B2-1749",
    questionType: "grammar",
    questionEn:
      "The consultant, _____ we hired last month, has provided many valuable insights.",
    questionVi:
      "Nhà tư vấn, người _____ chúng tôi đã thuê tháng trước, đã cung cấp nhiều hiểu biết quý giá.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'whom' vì 'consultant' là tân ngữ của hành động 'hired'.",
    category: "Relative Pronouns",
  },
  {
    id: "B2-1750",
    questionType: "vocabulary",
    questionEn:
      "The new software is _____ to use, even for those with limited technical skills.",
    questionVi:
      "Phần mềm mới rất _____ để sử dụng, ngay cả với những người có kỹ năng kỹ thuật hạn chế.",
    options: [
      { option: "intuitive", isCorrect: true },
      { option: "intensive", isCorrect: false },
      { option: "intrusive", isCorrect: false },
      { option: "incentive", isCorrect: false },
    ],
    explanationVi:
      "'Intuitive' (dễ hiểu/trực quan) thường dùng cho phần mềm/giao diện.",
    category: "Adjectives",
  },
  {
    id: "B2-1751",
    questionType: "word-form",
    questionEn:
      "The manager provided a _____ explanation of the new company policy.",
    questionVi:
      "Người quản lý đã cung cấp một lời giải thích _____ về chính sách mới của công ty.",
    options: [
      { option: "detailed", isCorrect: true },
      { option: "detail", isCorrect: false },
      { option: "detailing", isCorrect: false },
      { option: "details", isCorrect: false },
    ],
    explanationVi: "'Detailed explanation' (lời giải thích chi tiết).",
    category: "Adjectives",
  },
  {
    id: "B2-1752",
    questionType: "grammar",
    questionEn:
      "Not only _____ the competition, but she also set a new sales record.",
    questionVi:
      "Cô ấy không những _____ cuộc thi mà còn lập một kỷ lục doanh số mới.",
    options: [
      { option: "did she win", isCorrect: true },
      { option: "she won", isCorrect: false },
      { option: "won she", isCorrect: false },
      { option: "she did win", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ: Not only + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1753",
    questionType: "vocabulary",
    questionEn:
      "The company's _____ objective is to provide high-quality products at affordable prices.",
    questionVi:
      "Mục tiêu _____ của công ty là cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.",
    options: [
      { option: "foremost", isCorrect: true },
      { option: "former", isCorrect: false },
      { option: "formal", isCorrect: false },
      { option: "frequent", isCorrect: false },
    ],
    explanationVi: "'Foremost' (hàng đầu/quan trọng nhất).",
    category: "Adjectives",
  },
  {
    id: "B2-1754",
    questionType: "word-form",
    questionEn:
      "The _____ of the new system has lead to a major increase in departmental efficiency.",
    questionVi:
      "Việc _____ hệ thống mới đã dẫn đến sự gia tăng lớn về hiệu quả của bộ phận.",
    options: [
      { option: "integration", isCorrect: true },
      { option: "integrate", isCorrect: false },
      { option: "integrating", isCorrect: false },
      { option: "integrated", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'integration' (sự tích hợp) làm chủ ngữ.",
    category: "Nouns",
  },
  {
    id: "B2-1755",
    questionType: "grammar",
    questionEn: "We will start the meeting as soon as the CEO _____.",
    questionVi:
      "Chúng tôi sẽ bắt đầu cuộc họp ngay sau khi Giám đốc điều hành _____.",
    options: [
      { option: "arrives", isCorrect: true },
      { option: "will arrive", isCorrect: false },
      { option: "has arrived", isCorrect: false },
      { option: "is arriving", isCorrect: false },
    ],
    explanationVi:
      "Trong các mệnh đề trạng ngữ chỉ thời gian, dùng hiện tại đơn để thay cho tương lai.",
    category: "Tenses",
  },
  {
    id: "B2-1756",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ the product after discovering a safety defect.",
    questionVi:
      "Công ty quyết định _____ sản phẩm sau khi phát hiện lỗi an toàn.",
    options: [
      { option: "recall", isCorrect: true },
      { option: "reduce", isCorrect: false },
      { option: "retain", isCorrect: false },
      { option: "repeal", isCorrect: false },
    ],
    explanationVi:
      "'Recall' (thu hồi sản phẩm lỗi). 'Repeal' là bãi bỏ (luật).",
    category: "Business Vocabulary",
  },
  {
    id: "B2-1757",
    questionType: "word-form",
    questionEn:
      "The marketing manager spoke very _____ about the company's new expansion strategy.",
    questionVi:
      "Trưởng phòng marketing đã nói rất _____ về chiến lược mở rộng mới của công ty.",
    options: [
      { option: "enthusiastically", isCorrect: true },
      { option: "enthusiasm", isCorrect: false },
      { option: "enthusiast", isCorrect: false },
      { option: "enthusiastic", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ 'enthusiastically' (một cách nhiệt tình) để bổ nghĩa cho 'spoke'.",
    category: "Adverbs",
  },
  {
    id: "B2-1758",
    questionType: "grammar",
    questionEn:
      "Had the board of directors been aware of the potential risks, they _____ the merger proposal.",
    questionVi:
      "Nếu hội đồng quản trị nhận thức được các rủi ro tiềm ẩn, họ _____ đề xuất sáp nhập.",
    options: [
      { option: "would have rejected", isCorrect: true },
      { option: "will reject", isCorrect: false },
      { option: "rejected", isCorrect: false },
      { option: "would reject", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ câu điều kiện loại 3: Had + S + V3/ID, S + would have + V3/ID. Diễn tả một sự việc không có thật trong quá khứ.",
    category: "Inversion",
  },
  {
    id: "B2-1759",
    questionType: "vocabulary",
    questionEn:
      "The company decided to liquidate its _____ in Southeast Asia to focus on its core European markets.",
    questionVi:
      "Công ty đã quyết định thanh lý các _____ của mình tại Đông Nam Á để tập trung vào các thị trường châu Âu cốt lõi.",
    options: [
      { option: "subsidiaries", isCorrect: true },
      { option: "suppliers", isCorrect: false },
      { option: "competitors", isCorrect: false },
      { option: "retailers", isCorrect: false },
    ],
    explanationVi:
      "'Subsidiaries' (công ty con) phù hợp với ngữ cảnh thanh lý các đơn vị trực thuộc để tập trung vào thị trường chính.",
    category: "Corporate Structure",
  },
  {
    id: "B2-1760",
    questionType: "word-form",
    questionEn:
      "The new government regulations will have a _____ impact on many small-scale startups.",
    questionVi:
      "Các quy định mới của chính phủ sẽ có một tác động _____ lên nhiều doanh nghiệp khởi nghiệp quy mô nhỏ.",
    options: [
      { option: "substantial", isCorrect: true },
      { option: "substance", isCorrect: false },
      { option: "substantially", isCorrect: false },
      { option: "substantiate", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'impact' cần một tính từ. 'Substantial' (đáng kể/lớn) là tính từ phù hợp.",
    category: "Word Form",
  },
  {
    id: "B2-1761",
    questionType: "grammar",
    questionEn:
      "The consultant, _____ expertise in international trade is well-known, will be leading the negotiation team.",
    questionVi:
      "Vị cố vấn, người có chuyên môn về thương mại quốc tế đã rất nổi tiếng, sẽ dẫn dắt đội đàm phán.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "'Whose' được dùng để chỉ sở hữu cho 'The consultant'. Whose + danh từ (expertise).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1762",
    questionType: "vocabulary",
    questionEn:
      "Investors are advised to _____ their portfolios to minimize risks during economic downturns.",
    questionVi:
      "Các nhà đầu tư được khuyên nên _____ danh mục đầu tư của họ để giảm thiểu rủi ro trong thời kỳ suy thoái kinh tế.",
    options: [
      { option: "diversify", isCorrect: true },
      { option: "intensify", isCorrect: false },
      { option: "simplify", isCorrect: false },
      { option: "fortify", isCorrect: false },
    ],
    explanationVi:
      "'Diversify' (đa dạng hóa) danh mục đầu tư là thuật ngữ tài chính phổ biến để giảm rủi ro.",
    category: "Finance",
  },
  {
    id: "B2-1763",
    questionType: "grammar",
    questionEn:
      "It is imperative that the marketing department _____ the revised strategy by the end of the week.",
    questionVi:
      "Điều cấp thiết là bộ phận tiếp thị _____ chiến lược đã sửa đổi vào cuối tuần này.",
    options: [
      { option: "finalize", isCorrect: true },
      { option: "finalizes", isCorrect: false },
      { option: "finalized", isCorrect: false },
      { option: "is finalizing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive): It is imperative that + S + V (nguyên thể không chia).",
    category: "Subjunctive",
  },
  {
    id: "B2-1764",
    questionType: "word-form",
    questionEn:
      "The _____ of the logistics network has significantly reduced the delivery time for international orders.",
    questionVi:
      "Việc _____ mạng lưới hậu cần đã giảm đáng kể thời gian giao hàng cho các đơn hàng quốc tế.",
    options: [
      { option: "optimization", isCorrect: true },
      { option: "optimize", isCorrect: false },
      { option: "optimum", isCorrect: false },
      { option: "optimally", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' và trước giới từ 'of' cần một danh từ. 'Optimization' (việc tối ưu hóa) là danh từ.",
    category: "Logistics",
  },
  {
    id: "B2-1765",
    questionType: "grammar",
    questionEn:
      "Under no circumstances _____ employees allowed to share their login credentials with unauthorized personnel.",
    questionVi:
      "Trong bất kỳ trường hợp nào, nhân viên không được phép chia sẻ thông tin đăng nhập của họ với nhân sự không được ủy quyền.",
    options: [
      { option: "are", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "should", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Under no circumstances': Under no circumstances + trợ động từ/tobe + S. Vì câu bị động nên dùng 'are'.",
    category: "Inversion",
  },
  {
    id: "B2-1766",
    questionType: "vocabulary",
    questionEn:
      "Due to unforeseen circumstances, the keynote speaker had to _____ his presentation at the last minute.",
    questionVi:
      "Do những tình huống bất ngờ, diễn giả chính đã phải _____ bài thuyết trình của mình vào phút chót.",
    options: [
      { option: "delegate", isCorrect: true },
      { option: "postpone", isCorrect: false },
      { option: "elaborate", isCorrect: false },
      { option: "modify", isCorrect: false },
    ],
    explanationVi:
      "Dù 'postpone' hay 'modify' có vẻ hợp lý, nhưng 'delegate' (ủy thác/giao phó) thường dùng khi một người không thể làm việc gì đó và giao cho người khác. Tuy nhiên, trong ngữ cảnh này 'postpone' (trì hoãn) là lựa chọn phổ biến nhất cho lịch trình.",
    category: "Business Events",
  },
  {
    id: "B2-1767",
    questionType: "word-form",
    questionEn:
      "The CEO issued a statement to _____ rumors regarding a potential hostile takeover.",
    questionVi:
      "Giám đốc điều hành đã đưa ra một tuyên báo để _____ những tin đồn liên quan đến một vụ mua lại thâu tóm.",
    options: [
      { option: "quell", isCorrect: true },
      { option: "quietly", isCorrect: false },
      { option: "quietness", isCorrect: false },
      { option: "quiet", isCorrect: false },
    ],
    explanationVi:
      "'To' + V- nguyên mẫu. 'Quell' (dập tắt/chấm dứt) là động từ phù hợp để dùng với 'rumors'.",
    category: "Business Communication",
  },
  {
    id: "B2-1768",
    questionType: "grammar",
    questionEn:
      "The project was completed on schedule, _____ the numerous technical difficulties encountered during the initial phase.",
    questionVi:
      "Dự án đã được hoàn thành đúng tiến độ, _____ nhiều khó khăn kỹ thuật gặp phải trong giai đoạn đầu.",
    options: [
      { option: "notwithstanding", isCorrect: true },
      { option: "whereas", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "while", isCorrect: false },
    ],
    explanationVi:
      "'Notwithstanding' (bất chấp/mặc dù) đóng vai trò như một giới từ, theo sau là một cụm danh từ.",
    category: "Conjunctions",
  },
  {
    id: "B2-1769",
    questionType: "vocabulary",
    questionEn:
      "The legal department is reviewing the contract to ensure all clauses are in _____ with international labor laws.",
    questionVi:
      "Bộ phận pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản đều _____ với luật lao động quốc tế.",
    options: [
      { option: "compliance", isCorrect: true },
      { option: "alliance", isCorrect: false },
      { option: "reliance", isCorrect: false },
      { option: "defiance", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ 'in compliance with' (tuân thủ theo) là cụm từ cố định trong ngữ cảnh pháp lý và hợp đồng.",
    category: "Legal",
  },
  {
    id: "B2-1770",
    questionType: "word-form",
    questionEn:
      "Successful entrepreneurs possess the _____ to adapt to rapidly changing market conditions.",
    questionVi:
      "Các doanh nhân thành công sở hữu _____ thích nghi với các điều kiện thị trường thay đổi nhanh chóng.",
    options: [
      { option: "resilience", isCorrect: true },
      { option: "resilient", isCorrect: false },
      { option: "resiliently", isCorrect: false },
      { option: "resisting", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Resilience' (khả năng phục hồi/kiên cường) là danh từ.",
    category: "Business Skills",
  },
  {
    id: "B2-1771",
    questionType: "grammar",
    questionEn:
      "Hardly _____ the new software been installed when several critical bugs were reported by the users.",
    questionVi:
      "Phần mềm mới vừa được cài đặt xong thì người dùng đã báo cáo một số lỗi nghiêm trọng.",
    options: [
      { option: "had", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: Hardly + had + S + V3/ID + when + S + V2/ID (Vừa mới... thì...).",
    category: "Inversion",
  },
  {
    id: "B2-1772",
    questionType: "vocabulary",
    questionEn:
      "The company's annual report highlight's its _____ to sustainability and environmental responsibility.",
    questionVi:
      "Báo cáo thường niên của công ty làm nổi bật _____ của mình đối với sự bền vững và trách nhiệm môi trường.",
    options: [
      { option: "commitment", isCorrect: true },
      { option: "confinement", isCorrect: false },
      { option: "attachment", isCorrect: false },
      { option: "indictment", isCorrect: false },
    ],
    explanationVi:
      "'Commitment to' (sự cam kết đối với) là cụm từ phù hợp nhất trong bối cảnh trách nhiệm doanh nghiệp.",
    category: "Corporate Responsibility",
  },
  {
    id: "B2-1773",
    questionType: "word-form",
    questionEn:
      "The audit revealed that the financial statements were _____ inaccurate due to clerical errors.",
    questionVi:
      "Cuộc kiểm toán tiết lộ rằng các báo cáo tài chính đã không chính xác một cách _____ do sai sót đánh máy.",
    options: [
      { option: "marginally", isCorrect: true },
      { option: "margin", isCorrect: false },
      { option: "marginal", isCorrect: false },
      { option: "marginalize", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ để bổ nghĩa cho tính từ 'inaccurate'. 'Marginally' (một chút/không đáng kể).",
    category: "Finance",
  },
  {
    id: "B2-1774",
    questionType: "grammar",
    questionEn:
      "Not only _____ the sales team meet their targets, but they also exceeded them by 20 percent.",
    questionVi:
      "Không những đội ngũ bán hàng đạt được mục tiêu của họ, mà họ còn vượt mức 20%.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Not only': Not only + trợ động từ + S + V. Vì vế sau dùng quá khứ 'exceeded' nên vế trước dùng 'did'.",
    category: "Inversion",
  },
  {
    id: "B2-1775",
    questionType: "vocabulary",
    questionEn:
      "The negotiation reached an _____ when neither side was willing to compromise on the pricing terms.",
    questionVi:
      "Cuộc đàm phán đã đạt đến _____ khi không bên nào sẵn sàng thỏa hiệp về các điều khoản giá cả.",
    options: [
      { option: "impasse", isCorrect: true },
      { option: "incentive", isCorrect: false },
      { option: "incidence", isCorrect: false },
      { option: "inference", isCorrect: false },
    ],
    explanationVi:
      "'Impasse' (thế bế tắc) phù hợp với ngữ cảnh đàm phán không thể tiến triển.",
    category: "Negotiations",
  },
  {
    id: "B2-1776",
    questionType: "word-form",
    questionEn:
      "The manager praised the team for their _____ efforts in resolving the system outage so quickly.",
    questionVi:
      "Quản lý đã khen ngợi đội ngũ vì những nỗ lực _____ của họ trong việc giải quyết tình trạng ngừng hoạt động hệ thống nhanh chóng.",
    options: [
      { option: "commendable", isCorrect: true },
      { option: "commend", isCorrect: false },
      { option: "commendation", isCorrect: false },
      { option: "commending", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'efforts' cần một tính từ. 'Commendable' (đáng khen ngợi).",
    category: "Word Form",
  },
  {
    id: "B2-1777",
    questionType: "grammar",
    questionEn:
      "Should you _____ any further assistance with the installation process, please contact our technical support hotline.",
    questionVi:
      "Nếu bạn _____ bất kỳ sự hỗ trợ nào thêm về quy trình cài đặt, vui lòng liên hệ với đường dây nóng hỗ trợ kỹ thuật của chúng tôi.",
    options: [
      { option: "require", isCorrect: true },
      { option: "requires", isCorrect: false },
      { option: "required", isCorrect: false },
      { option: "requiring", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 1: Should + S + V (nguyên thể).",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1778",
    questionType: "vocabulary",
    questionEn:
      "The new marketing campaign aims to leverage social media influencers to _____ brand awareness among Gen Z.",
    questionVi:
      "Chiến dịch tiếp thị mới nhằm tận dụng những người có ảnh hưởng trên mạng xã hội để _____ nhận thức về thương hiệu trong thế hệ Z.",
    options: [
      { option: "bolster", isCorrect: true },
      { option: "baffle", isCorrect: false },
      { option: "bestow", isCorrect: false },
      { option: "belittle", isCorrect: false },
    ],
    explanationVi:
      "'Bolster' (thúc đẩy/tăng cường) phù hợp với bối cảnh tăng cường nhận thức thương hiệu.",
    category: "Marketing",
  },
  {
    id: "B2-1779",
    questionType: "word-form",
    questionEn:
      "The application of the new algorithm resulted in a _____ increase in data processing speeds.",
    questionVi:
      "Việc áp dụng thuật toán mới đã mang lại sự gia tăng _____ trong tốc độ xử lý dữ liệu.",
    options: [
      { option: "manifold", isCorrect: true },
      { option: "manifest", isCorrect: false },
      { option: "manifestation", isCorrect: false },
      { option: "manifestly", isCorrect: false },
    ],
    explanationVi:
      "'Manifold' (nhiều/đa dạng) có thể dùng như tính từ trước 'increase' để chỉ sự gia tăng nhiều lần.",
    category: "Technology",
  },
  {
    id: "B2-1780",
    questionType: "grammar",
    questionEn:
      "The board suggested that the CEO _____ his resignation effective immediately to avoid further scandal.",
    questionVi:
      "Hội đồng quản trị đề nghị CEO _____ đơn từ chức có hiệu lực ngay lập tức để tránh thêm bê bối.",
    options: [
      { option: "tender", isCorrect: true },
      { option: "tenders", isCorrect: false },
      { option: "tendered", isCorrect: false },
      { option: "be tender", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với động từ 'suggest': suggest that S + V (nguyên thể). 'Tender one's resignation' là nộp đơn từ chức.",
    category: "Subjunctive",
  },
  {
    id: "B2-1781",
    questionType: "vocabulary",
    questionEn:
      "The factory had to halt production due to a severe _____ of raw materials caused by shipping delays.",
    questionVi:
      "Nhà máy đã phải tạm dừng sản xuất do sự _____ nghiêm trọng nguyên liệu thô gây ra bởi sự chậm trễ vận chuyển.",
    options: [
      { option: "shortage", isCorrect: true },
      { option: "surplus", isCorrect: false },
      { option: "stockpile", isCorrect: false },
      { option: "storage", isCorrect: false },
    ],
    explanationVi:
      "'Shortage' (sự thiếu hụt) là nguyên nhân khiến sản xuất bị đình trệ.",
    category: "Logistics",
  },
  {
    id: "B2-1782",
    questionType: "word-form",
    questionEn:
      "The manager's decision was based on a _____ analysis of the market trends over the last decade.",
    questionVi:
      "Quyết định của quản lý dựa trên một phân tích _____ về xu hướng thị trường trong thập kỷ qua.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehend", isCorrect: false },
      { option: "comprehensibly", isCorrect: false },
      { option: "comprehension", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'analysis' cần một tính từ. 'Comprehensive' (toàn diện) phù hợp nhất.",
    category: "Word Form",
  },
  {
    id: "B2-1783",
    questionType: "grammar",
    questionEn:
      "The merger, _____ had been anticipated for months, was finally announced yesterday.",
    questionVi:
      "Vụ sáp nhập, _____ đã được mong đợi trong nhiều tháng, cuối cùng đã được công bố vào ngày hôm qua.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' cho mệnh đề quan hệ không xác định (sau dấu phẩy) thay cho vật 'The merger'. 'That' không dùng sau dấu phẩy.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1784",
    questionType: "vocabulary",
    questionEn:
      "The HR department is looking for candidates who demonstrate high _____ and can work under pressure.",
    questionVi:
      "Bộ phận nhân sự đang tìm kiếm các ứng viên thể hiện _____ cao và có thể làm việc dưới áp lực.",
    options: [
      { option: "integrity", isCorrect: true },
      { option: "infringement", isCorrect: false },
      { option: "incompetence", isCorrect: false },
      { option: "inventory", isCorrect: false },
    ],
    explanationVi:
      "'Integrity' (sự chính trực) là phẩm chất quan trọng mà nhà tuyển dụng tìm kiếm.",
    category: "Human Resources",
  },
  {
    id: "B2-1785",
    questionType: "word-form",
    questionEn:
      "The legal team worked _____ to ensure that the contracts were finalized before the deadline.",
    questionVi:
      "Nhóm pháp lý đã làm việc _____ để đảm bảo rằng các hợp đồng được hoàn tất trước thời hạn.",
    options: [
      { option: "tirelessly", isCorrect: true },
      { option: "tire", isCorrect: false },
      { option: "tiring", isCorrect: false },
      { option: "tired", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'worked' cần một trạng từ để bổ nghĩa. 'Tirelessly' (không mệt mỏi).",
    category: "Word Form",
  },
  {
    id: "B2-1786",
    questionType: "grammar",
    questionEn:
      "Scarcely _____ the presentation started when the power went out in the entire building.",
    questionVi:
      "Bài thuyết trình vừa mới bắt đầu thì điện đã tắt trong toàn bộ tòa nhà.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với Scarcely: Scarcely + had + S + V3/ID + when + S + V2/ID. Giống với cấu trúc của 'Hardly'.",
    category: "Inversion",
  },
  {
    id: "B2-1787",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ some of its customer support functions to a specialized third-party provider.",
    questionVi:
      "Công ty đã quyết định _____ một số chức năng hỗ trợ khách hàng cho một nhà cung cấp bên thứ ba chuyên dụng.",
    options: [
      { option: "outsource", isCorrect: true },
      { option: "overshadow", isCorrect: false },
      { option: "overhaul", isCorrect: false },
      { option: "outbid", isCorrect: false },
    ],
    explanationVi:
      "'Outsource' (thuê ngoài) là việc chuyển giao công việc cho bên thứ ba.",
    category: "Business Strategy",
  },
  {
    id: "B2-1788",
    questionType: "word-form",
    questionEn:
      "The new software update is designed to improve the _____ of the user interface.",
    questionVi:
      "Bản cập nhật phần mềm mới được thiết kế để cải thiện _____ của giao diện người dùng.",
    options: [
      { option: "functionality", isCorrect: true },
      { option: "function", isCorrect: false },
      { option: "functional", isCorrect: false },
      { option: "functionally", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Functionality' (tính chức năng/tính năng) phù hợp trong ngữ cảnh công nghệ.",
    category: "Technology",
  },
  {
    id: "B2-1789",
    questionType: "grammar",
    questionEn:
      "By the time the auditors arrive next month, we _____ all the necessary financial reconciliations.",
    questionVi:
      "Tính đến thời điểm các kiểm toán viên đến vào tháng tới, chúng tôi _____ tất cả các đối chiếu tài chính cần thiết.",
    options: [
      { option: "will have completed", isCorrect: true },
      { option: "will complete", isCorrect: false },
      { option: "have completed", isCorrect: false },
      { option: "would have completed", isCorrect: false },
    ],
    explanationVi:
      "Thì tương lai hoàn thành (Future Perfect): By the time + hiện tại đơn, tương lai hoàn thành (S + will have + V3/ID).",
    category: "Tenses",
  },
  {
    id: "B2-1790",
    questionType: "vocabulary",
    questionEn:
      "Employees are encouraged to _____ their concerns to management during the weekly town hall meetings.",
    questionVi:
      "Nhân viên được khuyến khích _____ những lo ngại của họ với ban quản lý trong các cuộc họp toàn thể hàng tuần.",
    options: [
      { option: "voice", isCorrect: true },
      { option: "view", isCorrect: false },
      { option: "vote", isCorrect: false },
      { option: "verify", isCorrect: false },
    ],
    explanationVi:
      "'Voice' (phát biểu/lên tiếng) thường được dùng như một động từ để chỉ việc bày tỏ ý kiến hoặc lo ngại.",
    category: "Workplace Communication",
  },
  {
    id: "B2-1791",
    questionType: "word-form",
    questionEn:
      "The marketing team's approach was _____ because it failed to address the needs of the local demographic.",
    questionVi:
      "Cách tiếp cận của nhóm tiếp thị đã _____ vì nó không giải quyết được nhu cầu của nhóm nhân khẩu học địa phương.",
    options: [
      { option: "ineffective", isCorrect: true },
      { option: "effect", isCorrect: false },
      { option: "effectively", isCorrect: false },
      { option: "effectiveness", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ sau động từ 'was'. 'Ineffective' (không hiệu quả) phù hợp với vế sau giải thích lý do thất bại.",
    category: "Word Form",
  },
  {
    id: "B2-1792",
    questionType: "grammar",
    questionEn:
      "Should there _____ any discrepancies in the invoice, please notify the accounting department immediately.",
    questionVi:
      "Nếu có bất kỳ sai sót nào trong hóa đơn, vui lòng thông báo cho bộ phận kế toán ngay lập tức.",
    options: [
      { option: "be", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện loại 1: Should + S + V (nguyên thể). Ở đây chủ ngữ là 'there', động từ là 'be'.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1793",
    questionType: "vocabulary",
    questionEn:
      "The new luxury hotel aims to provide _____ service to its high-end clientele.",
    questionVi:
      "Khách sạn hạng sang mới nhằm cung cấp dịch vụ _____ cho những khách hàng cao cấp của mình.",
    options: [
      { option: "impeccable", isCorrect: true },
      { option: "impassive", isCorrect: false },
      { option: "implausible", isCorrect: false },
      { option: "impertinent", isCorrect: false },
    ],
    explanationVi:
      "'Impeccable' (hoàn hảo/không chê vào đâu được) là tính từ thường dùng để miêu tả dịch vụ chất lượng cao.",
    category: "Hospitality",
  },
  {
    id: "B2-1794",
    questionType: "word-form",
    questionEn:
      "The CEO's speech provided a _____ vision for the company's growth over the next five years.",
    questionVi:
      "Bài thuyết trình của CEO đã cung cấp một tầm nhìn _____ cho sự phát triển của công ty trong năm năm tới.",
    options: [
      { option: "compelling", isCorrect: true },
      { option: "compel", isCorrect: false },
      { option: "compelled", isCorrect: false },
      { option: "compulsion", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'vision' cần một tính từ. 'Compelling' (hấp dẫn/thuyết phục) là tính từ.",
    category: "Word Form",
  },
  {
    id: "B2-1795",
    questionType: "grammar",
    questionEn:
      "Rarely _____ a company experience such rapid growth in such a competitive market environment.",
    questionVi:
      "Hiếm khi một công ty trải qua sự tăng trưởng nhanh chóng như vậy trong một môi trường thị trường cạnh tranh như thế.",
    options: [
      { option: "does", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với trạng từ phủ định 'Rarely': Rarely + do/does/did + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1796",
    questionType: "vocabulary",
    questionEn:
      "The startup is seeking _____ capital to expand its operations and enter new overseas markets.",
    questionVi:
      "Công ty khởi nghiệp đang tìm kiếm vốn _____ để mở rộng hoạt động và bước vào các thị trường nước ngoài mới.",
    options: [
      { option: "venture", isCorrect: true },
      { option: "vague", isCorrect: false },
      { option: "vicious", isCorrect: false },
      { option: "vacant", isCorrect: false },
    ],
    explanationVi:
      "'Venture capital' (vốn đầu tư mạo hiểm) là thuật ngữ tài chính phổ biến cho các công ty khởi nghiệp.",
    category: "Finance",
  },
  {
    id: "B2-1797",
    questionType: "word-form",
    questionEn:
      "The manager emphasized the importance of _____ in the workplace to maintain professional standards.",
    questionVi:
      "Quản lý nhấn mạnh tầm quan trọng của _____ tại nơi làm việc để duy trì các tiêu chuẩn chuyên nghiệp.",
    options: [
      { option: "punctuality", isCorrect: true },
      { option: "punctual", isCorrect: false },
      { option: "punctually", isCorrect: false },
      { option: "punctuate", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'of' cần một danh từ. 'Punctuality' (sự đúng giờ).",
    category: "Professionalism",
  },
  {
    id: "B2-1798",
    questionType: "grammar",
    questionEn:
      "The committee recommended that the proposal _____ further before a final decision is made.",
    questionVi:
      "Ủy ban đề nghị rằng đề xuất _____ thêm trước khi đưa ra quyết định cuối cùng.",
    options: [
      { option: "be studied", isCorrect: true },
      { option: "is studied", isCorrect: false },
      { option: "studies", isCorrect: false },
      { option: "will be studied", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định bị động: recommend that S + be + V3/ID.",
    category: "Subjunctive",
  },
  {
    id: "B2-1799",
    questionType: "vocabulary",
    questionEn:
      "The long-standing _____ between the two companies ended with a surprise merger announcement.",
    questionVi:
      "Mối _____ lâu dài giữa hai công ty đã kết thúc bằng một thông báo sáp nhập đầy bất ngờ.",
    options: [
      { option: "rivalry", isCorrect: true },
      { option: "revelry", isCorrect: false },
      { option: "remedy", isCorrect: false },
      { option: "recovery", isCorrect: false },
    ],
    explanationVi:
      "'Rivalry' (sự cạnh tranh/đối đầu) phù hợp để miêu tả mối quan hệ giữa hai công ty trước khi sáp nhập.",
    category: "Business Competition",
  },
  {
    id: "B2-1800",
    questionType: "word-form",
    questionEn:
      "The new employee showed _____ promise and was promoted within six months of joining.",
    questionVi:
      "Nhân viên mới đã cho thấy triển vọng _____ và được thăng chức trong vòng 6 tháng kể từ khi gia nhập.",
    options: [
      { option: "exceptional", isCorrect: true },
      { option: "exception", isCorrect: false },
      { option: "exceptionally", isCorrect: false },
      { option: "excepting", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'promise' cần một tính từ. 'Exceptional' (ngoại lệ/xuất sắc).",
    category: "Word Form",
  },
  {
    id: "B2-1801",
    questionType: "grammar",
    questionEn:
      "Had it not been for the generous grant, the research project _____ abandoned.",
    questionVi:
      "Nếu không có khoản tài trợ hào phóng đó, dự án nghiên cứu _____ bị bỏ dở.",
    options: [
      { option: "would have been", isCorrect: true },
      { option: "will have been", isCorrect: false },
      { option: "had been", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện loại 3: Had it not been for + N, S + would have been + V3/ID.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1802",
    questionType: "vocabulary",
    questionEn:
      "The company's profit _____ have been downward for the last three quarters.",
    questionVi:
      "Các _____ lợi nhuận của công ty đã đi xuống trong ba quý vừa qua.",
    options: [
      { option: "margins", isCorrect: true },
      { option: "mergers", isCorrect: false },
      { option: "mandates", isCorrect: false },
      { option: "markets", isCorrect: false },
    ],
    explanationVi:
      "'Profit margins' (biên lợi nhuận) là thuật ngữ tài chính phổ biến.",
    category: "Finance",
  },
  {
    id: "B2-1803",
    questionType: "word-form",
    questionEn:
      "The CEO believes that digital transformation is _____ for staying competitive in the modern age.",
    questionVi:
      "CEO tin rằng chuyển đổi số là _____ để giữ vững khả năng cạnh tranh trong kỷ nguyên hiện đại.",
    options: [
      { option: "imperative", isCorrect: true },
      { option: "imperiously", isCorrect: false },
      { option: "imperious", isCorrect: false },
      { option: "imperiousness", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'is' cần một tính từ. 'Imperative' (cấp thiết/bắt buộc).",
    category: "Technology",
  },
  {
    id: "B2-1804",
    questionType: "grammar",
    questionEn:
      "Only by streamlining its supply chain _____ the company be able to reduce its operational costs.",
    questionVi:
      "Chỉ bằng cách tinh gọn chuỗi cung ứng _____ công ty mới có thể giảm chi phí vận hành.",
    options: [
      { option: "will", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only by': Only by + V-ing + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1805",
    questionType: "vocabulary",
    questionEn:
      "The team members were asked to _____ all expenses accrued during the business trip.",
    questionVi:
      "Các thành viên trong nhóm được yêu cầu _____ tất cả các chi phí phát sinh trong chuyến công tác.",
    options: [
      { option: "itemize", isCorrect: true },
      { option: "improvise", isCorrect: false },
      { option: "idolize", isCorrect: false },
      { option: "intervene", isCorrect: false },
    ],
    explanationVi:
      "'Itemize' (liệt kê từng khoản) thường dùng cho việc báo cáo chi phí.",
    category: "Business Travel",
  },
  {
    id: "B2-1806",
    questionType: "word-form",
    questionEn:
      "The _____ of the new law caused a lot of confusion among small business owners.",
    questionVi:
      "Việc _____ luật mới đã gây ra nhiều sự nhầm lẫn cho các chủ doanh nghiệp nhỏ.",
    options: [
      { option: "implementation", isCorrect: true },
      { option: "implement", isCorrect: false },
      { option: "implemented", isCorrect: false },
      { option: "implementable", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' và trước 'of' cần một danh từ. 'Implementation' (việc thực thi).",
    category: "Law",
  },
  {
    id: "B2-1807",
    questionType: "grammar",
    questionEn:
      "Not until the end of the fiscal year _____ the full extent of the losses become apparent.",
    questionVi:
      "Mãi cho đến cuối năm tài chính, toàn bộ mức độ tổn thất mới trở nên rõ ràng.",
    options: [
      { option: "did", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Not until': Not until + thời gian/mệnh đề + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1808",
    questionType: "vocabulary",
    questionEn:
      "The company's _____ strategy focuses on expanding into emerging markets in Africa and South America.",
    questionVi:
      "Chiến lược _____ của công ty tập trung vào việc mở rộng sang các thị trường mới nổi ở Châu Phi và Nam Mỹ.",
    options: [
      { option: "aggressive", isCorrect: true },
      { option: "abrasive", isCorrect: false },
      { option: "abrupt", isCorrect: false },
      { option: "absentee", isCorrect: false },
    ],
    explanationVi:
      "'Aggressive strategy' (chiến lược bùng nổ/quyết liệt) thường dùng để nói về việc mở rộng thị trường mạnh mẽ.",
    category: "Business Strategy",
  },
  {
    id: "B2-1809",
    questionType: "word-form",
    questionEn:
      "The data security breach was _____ to a failure in the legacy authentication system.",
    questionVi:
      "Việc vi phạm bảo mật dữ liệu đã được _____ là do lỗi trong hệ thống xác thực cũ.",
    options: [
      { option: "attributed", isCorrect: true },
      { option: "attribute", isCorrect: false },
      { option: "attribution", isCorrect: false },
      { option: "attributable", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động 'be attributed to' (được quy cho/cho là do).",
    category: "Technology",
  },
  {
    id: "B2-1810",
    questionType: "grammar",
    questionEn:
      "So intense _____ the competition that many small bookstores were forced to close down.",
    questionVi:
      "Cuộc cạnh tranh gắt gao đến mức nhiều nhà sách nhỏ đã buộc phải đóng cửa.",
    options: [
      { option: "was", isCorrect: true },
      { option: "had", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "did", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'So': So + adj + be + S + that. Vì vế sau dùng 'were forced' nên vế trước dùng 'was'.",
    category: "Inversion",
  },
  {
    id: "B2-1811",
    questionType: "vocabulary",
    questionEn:
      "The terms of the lease agreement are _____, so feel free to suggest any changes you deem necessary.",
    questionVi:
      "Các điều khoản của hợp đồng thuê là _____, vì vậy hãy thoải mái đề xuất bất kỳ thay đổi nào bạn thấy cần thiết.",
    options: [
      { option: "negotiable", isCorrect: true },
      { option: "negligible", isCorrect: false },
      { option: "noteworthy", isCorrect: false },
      { option: "nascent", isCorrect: false },
    ],
    explanationVi:
      "'Negotiable' (có thể thương lượng) phù hợp với bối cảnh mời gọi đề xuất thay đổi.",
    category: "Legal",
  },
  {
    id: "B2-1812",
    questionType: "word-form",
    questionEn:
      "The new CEO is known for his _____ management style, which emphasizes collaboration and transparency.",
    questionVi:
      "Vị CEO mới nổi tiếng với phong cách quản lý _____, nhấn mạnh vào sự cộng tác và minh bạch.",
    options: [
      { option: "inclusive", isCorrect: true },
      { option: "include", isCorrect: false },
      { option: "inclusion", isCorrect: false },
      { option: "inclusively", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'management style' cần một tính từ. 'Inclusive' (bao hàm/cởi mở/không loại trừ ai).",
    category: "Management",
  },
  {
    id: "B2-1813",
    questionType: "grammar",
    questionEn:
      "No sooner _____ the new policy been implemented than the employees started protesting against it.",
    questionVi:
      "Ngay khi chính sách mới vừa được thực thi thì nhân viên đã bắt đầu phản đối nó.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: No sooner + had + S + V3/ID + than + S + V2/ID. Ý nghĩa giống 'Hardly... when'.",
    category: "Inversion",
  },
  {
    id: "B2-1814",
    questionType: "vocabulary",
    questionEn:
      "The company faced severe _____ backlash after the news of the ethical violation became public.",
    questionVi:
      "Công ty đã đối mặt với phản ứng dữ dội từ _____ sau khi tin tức về vi phạm đạo đức được công bố.",
    options: [
      { option: "stakeholders", isCorrect: true },
      { option: "stand-ins", isCorrect: false },
      { option: "stockpiles", isCorrect: false },
      { option: "stretcher", isCorrect: false },
    ],
    explanationVi:
      "'Stakeholders' (các bên liên quan) là thuật ngữ dùng để chỉ những người bị ảnh hưởng bởi hoạt động của công ty.",
    category: "Corporate Ethics",
  },
  {
    id: "B2-1815",
    questionType: "word-form",
    questionEn:
      "The _____ of the task force was to investigate the causes of the recent industrial accident.",
    questionVi:
      "_____ của lực lượng đặc nhiệm là điều tra nguyên nhân của vụ tai nạn công nghiệp gần đây.",
    options: [
      { option: "mandate", isCorrect: true },
      { option: "mandatory", isCorrect: false },
      { option: "mandates", isCorrect: false },
      { option: "mandating", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'The' và trước 'of' cần một danh từ. 'Mandate' (nhiệm vụ/ủy thác).",
    category: "Corporate Governance",
  },
  {
    id: "B2-1816",
    questionType: "grammar",
    questionEn:
      "The board members asked whether the CEO _____ the possibility of a joint venture with our competitor.",
    questionVi:
      "Các thành viên hội đồng quản trị đã hỏi liệu CEO _____ khả năng liên doanh với đối thủ cạnh tranh của chúng ta không.",
    options: [
      { option: "had considered", isCorrect: true },
      { option: "has considered", isCorrect: false },
      { option: "will consider", isCorrect: false },
      { option: "considers", isCorrect: false },
    ],
    explanationVi:
      "Câu gián tiếp hỏi về một hành động xảy ra trước thời điểm hỏi ('asked' là quá khứ đơn), nên dùng quá khứ hoàn thành.",
    category: "Reported Speech",
  },
  {
    id: "B2-1817",
    questionType: "vocabulary",
    questionEn:
      "Investors are optimistic about the company's future growth _____ following the successful product launch.",
    questionVi:
      "Các nhà đầu tư lạc quan về _____ tăng trưởng tương lai của công ty sau khi ra mắt sản phẩm thành công.",
    options: [
      { option: "prospects", isCorrect: true },
      { option: "provisions", isCorrect: false },
      { option: "proceeds", isCorrect: false },
      { option: "proportions", isCorrect: false },
    ],
    explanationVi:
      "'Prospective' (triền vọng) thường dùng để nói về khả năng thành công trong tương lai.",
    category: "Finance",
  },
  {
    id: "B2-1818",
    questionType: "word-form",
    questionEn:
      "The manager's _____ response to the crisis helped to reassure both employees and clients.",
    questionVi:
      "Phản ứng _____ của quản lý đối với cuộc khủng hoảng đã giúp trấn an cả nhân viên và khách hàng.",
    options: [
      { option: "decisive", isCorrect: true },
      { option: "decide", isCorrect: false },
      { option: "decisively", isCorrect: false },
      { option: "decision", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'response' cần một tính từ. 'Decisive' (quyết đoán).",
    category: "Leadership",
  },
  {
    id: "B2-1819",
    questionType: "grammar",
    questionEn:
      "Little _____ the management realize that the market was about to undergo a major shift.",
    questionVi:
      "Ban quản lý ít nhận ra rằng thị trường sắp trải qua một sự thay đổi lớn.",
    options: [
      { option: "did", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "do", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Little': Little + trợ động từ + S + V. 'Little did they realize' là cách diễn đạt phổ biến.",
    category: "Inversion",
  },
  {
    id: "B2-1820",
    questionType: "vocabulary",
    questionEn:
      "The software engineer discovered a _____ in the code that was causing the application to crash.",
    questionVi:
      "Kỹ sư phần mềm đã phát hiện ra một _____ trong mã nguồn đang khiến ứng dụng bị sập.",
    options: [
      { option: "vulnerability", isCorrect: true },
      { option: "versatility", isCorrect: false },
      { option: "validity", isCorrect: false },
      { option: "vicinity", isCorrect: false },
    ],
    explanationVi:
      "'Vulnerability' (lỗ hổng/điểm yếu) là thuật ngữ kỹ thuật trong lập trình.",
    category: "Technology",
  },
  {
    id: "B2-1821",
    questionType: "word-form",
    questionEn:
      "The results of the study were _____ inconsistent, leading to further investigations.",
    questionVi:
      "Kết quả nghiên cứu đã không nhất quán một cách _____, dẫn đến các cuộc điều tra thêm.",
    options: [
      { option: "notably", isCorrect: true },
      { option: "notable", isCorrect: false },
      { option: "note", isCorrect: false },
      { option: "noted", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ để bổ nghĩa cho tính từ 'inconsistent'. 'Notably' (đáng chú ý/đáng kể).",
    category: "Word Form",
  },
  {
    id: "B2-1822",
    questionType: "grammar",
    questionEn:
      "Were the company to increase its prices now, it _____ many of its loyal customers.",
    questionVi:
      "Nếu công ty tăng giá bây giờ, họ _____ nhiều khách hàng trung thành của mình.",
    options: [
      { option: "might lose", isCorrect: true },
      { option: "will lose", isCorrect: false },
      { option: "lost", isCorrect: false },
      { option: "could have lost", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện loại 2: Were + S + to V, S + would/might + V. Diễn tả giả định không có thật hiện tại.",
    category: "Conditional Sentences",
  },
  {
    id: "B2-1823",
    questionType: "vocabulary",
    questionEn:
      "The company issued a _____ to all employees regarding the new remote work policy.",
    questionVi:
      "Công ty đã phát hành một _____ cho tất cả nhân viên liên quan đến chính sách làm việc từ xa mới.",
    options: [
      { option: "memorandum", isCorrect: true },
      { option: "merchandise", isCorrect: false },
      { option: "mediation", isCorrect: false },
      { option: "momentum", isCorrect: false },
    ],
    explanationVi:
      "'Memorandum' (thông báo nội bộ/bản ghi nhớ) là văn bản hành chính dùng trong công ty.",
    category: "Administrative",
  },
  {
    id: "B2-1824",
    questionType: "word-form",
    questionEn:
      "The project's success is _____ on the arrival of the specialized machinery from Germany.",
    questionVi:
      "Sự thành công của dự án _____ vào việc máy móc chuyên dụng từ Đức được vận chuyển đến.",
    options: [
      { option: "contingent", isCorrect: true },
      { option: "contingency", isCorrect: false },
      { option: "contingently", isCorrect: false },
      { option: "continent", isCorrect: false },
    ],
    explanationVi:
      "'Be contingent on/upon something' (phụ thuộc vào điều gì/tùy thuộc vào).",
    category: "Logistics",
  },
  {
    id: "B2-1825",
    questionType: "grammar",
    questionEn:
      "Hardly had the meeting _____ when the fire alarm started ringing.",
    questionVi: "Cuộc họp vừa mới _____ thì chuông báo cháy bắt đầu reo.",
    options: [
      { option: "commenced", isCorrect: true },
      { option: "commence", isCorrect: false },
      { option: "commencing", isCorrect: false },
      { option: "was commencing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'Hardly had + S + V3/ID'. 'Commenced' là dạng quá khứ phân từ của 'commence' (bắt đầu).",
    category: "Inversion",
  },
  {
    id: "B2-1826",
    questionType: "vocabulary",
    questionEn:
      "The sales director is responsible for _____ the expansion of the retail network in Europe.",
    questionVi:
      "Giám đốc bán hàng chịu trách nhiệm _____ việc mở rộng mạng lưới bán lẻ tại Châu Âu.",
    options: [
      { option: "overseeing", isCorrect: true },
      { option: "overlooking", isCorrect: false },
      { option: "overtaking", isCorrect: false },
      { option: "overreacting", isCorrect: false },
    ],
    explanationVi:
      "'Oversee' (giám sát/trông nom) phù hợp với vai trò của một giám đốc. Tránh nhầm với 'overlook' (bỏ qua).",
    category: "Management",
  },
  {
    id: "B2-1827",
    questionType: "word-form",
    questionEn:
      "The advertising firm is known for its _____ and innovative campaigns.",
    questionVi:
      "Công ty quảng cáo nổi tiếng với các chiến dịch _____ và đổi mới.",
    options: [
      { option: "provocative", isCorrect: true },
      { option: "provocation", isCorrect: false },
      { option: "provoke", isCorrect: false },
      { option: "provoking", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'campaigns'. 'Provocative' (khiêu khích/kích thích tư duy) thường dùng trong quảng cáo.",
    category: "Marketing",
  },
  {
    id: "B2-1828",
    questionType: "grammar",
    questionEn:
      "The director insisted that the report _____ by a certified public accountant.",
    questionVi:
      "Giám đốc khăng khăng rằng báo cáo _____ bởi một kế toán công chứng.",
    options: [
      { option: "be audited", isCorrect: true },
      { option: "is audited", isCorrect: false },
      { option: "audits", isCorrect: false },
      { option: "will be audited", isCorrect: false },
    ],
    explanationVi: "Thể giả định bị động: S + insist that + S + be + V3/ID.",
    category: "Subjunctive",
  },
  {
    id: "B2-1829",
    questionType: "vocabulary",
    questionEn:
      "The company's stock price _____ after the news of the patent infringement lawsuit broke.",
    questionVi:
      "Giá cổ phiếu của công ty đã _____ sau khi tin tức về vụ kiện vi phạm bằng sáng chế bùng nổ.",
    options: [
      { option: "plummeted", isCorrect: true },
      { option: "plundered", isCorrect: false },
      { option: "plumped", isCorrect: false },
      { option: "plotted", isCorrect: false },
    ],
    explanationVi:
      "'Plummet' (lao dốc/giảm mạnh) mô tả sự sụt giảm nhanh chóng của giá trị cổ phiếu.",
    category: "Finance",
  },
  {
    id: "B2-1830",
    questionType: "word-form",
    questionEn:
      "The new regulation is _____ only to companies with more than 500 employees.",
    questionVi:
      "Quy định mới chỉ _____ đối với các công ty có hơn 500 nhân viên.",
    options: [
      { option: "applicable", isCorrect: true },
      { option: "application", isCorrect: false },
      { option: "apply", isCorrect: false },
      { option: "appliance", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'is' cần một tính từ. 'Applicable' (áp dụng được/có hiệu lực).",
    category: "Law",
  },
  {
    id: "B2-1831",
    questionType: "grammar",
    questionEn:
      "Not only _____ the new system improve data accuracy, but it also reduced processing time by half.",
    questionVi:
      "Hệ thống mới không chỉ cải thiện độ chính xác dữ liệu mà còn giảm một nửa thời gian xử lý.",
    options: [
      { option: "did", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Not only' ở quá khứ: Not only + did + S + V nguyên thể. Vế sau 'reduced' là quá khứ.",
    category: "Inversion",
  },
  {
    id: "B2-1832",
    questionType: "vocabulary",
    questionEn:
      "The executive board reached a _____ on the budget allocation for the next fiscal year.",
    questionVi:
      "Ban điều hành đã đạt được một _____ về phân bò ngân sách cho năm tài chính tiếp theo.",
    options: [
      { option: "consensus", isCorrect: true },
      { option: "concession", isCorrect: false },
      { option: "constraint", isCorrect: false },
      { option: "controversial", isCorrect: false },
    ],
    explanationVi:
      "'Consensus' (sự đồng nhất ý kiến/sự nhất trí) là danh từ phù hợp nhất cho quyết định tập thể.",
    category: "Corporate Governance",
  },
  {
    id: "B2-1833",
    questionType: "word-form",
    questionEn:
      "The company's expansion plans were _____ due to the lack of available capital.",
    questionVi: "Kế hoạch mở rộng của công ty đã bị _____ do thiếu vốn sẵn có.",
    options: [
      { option: "stifled", isCorrect: true },
      { option: "stifle", isCorrect: false },
      { option: "stifling", isCorrect: false },
      { option: "stifler", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động: be + V3/ID. 'Stifled' (bị kìm hãm/ngăn cản).",
    category: "Word Form",
  },
  {
    id: "B2-1834",
    questionType: "grammar",
    questionEn:
      "_____ by the high interest rates, many developers have put their projects on hold.",
    questionVi:
      "_____ bởi lãi suất cao, nhiều nhà phát triển đã tạm dừng các dự án của họ.",
    options: [
      { option: "Deterred", isCorrect: true },
      { option: "Deterring", isCorrect: false },
      { option: "To deter", isCorrect: false },
      { option: "Being deter", isCorrect: false },
    ],
    explanationVi:
      "Rút gọn mệnh đề trạng ngữ dạng bị động: V3/ID, S + V. 'Deterred' (bị ngăn cản/thoái chí).",
    category: "Participle Clauses",
  },
  {
    id: "B2-1835",
    questionType: "vocabulary",
    questionEn:
      "The law firm specialize in the _____ of intellectual property rights in the digital era.",
    questionVi:
      "Công ty luật chuyên về việc _____ các quyền sở hữu trí tuệ trong kỷ nguyên số.",
    options: [
      { option: "enforcement", isCorrect: true },
      { option: "enchantment", isCorrect: false },
      { option: "endorsement", isCorrect: false },
      { option: "entitlement", isCorrect: false },
    ],
    explanationVi:
      "'Enforcement of rights' (thực thi các quyền) là thuật ngữ pháp lý chuẩn.",
    category: "Legal",
  },
  {
    id: "B2-1836",
    questionType: "word-form",
    questionEn:
      "The HR manager is looking for someone with a _____ track record in project management.",
    questionVi:
      "Quản lý nhân sự đang tìm kiếm một người có thành tích _____ trong quản lý dự án.",
    options: [
      { option: "proven", isCorrect: true },
      { option: "prove", isCorrect: false },
      { option: "proof", isCorrect: false },
      { option: "provable", isCorrect: false },
    ],
    explanationVi:
      "'Proven track record' là một cụm từ cố định (thành tích đã được chứng thực).",
    category: "Human Resources",
  },
  {
    id: "B2-1837",
    questionType: "grammar",
    questionEn:
      "The new policy requires that every employee _____ a mandatory training session on cybersecurity.",
    questionVi:
      "Chính sách mới yêu cầu mọi nhân viên _____ một buổi đào tạo bắt buộc về an ninh mạng.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "attends", isCorrect: false },
      { option: "attended", isCorrect: false },
      { option: "be attending", isCorrect: false },
    ],
    explanationVi:
      "Thể giả định với động từ 'require': require that S + V nguyên thể.",
    category: "Subjunctive",
  },
  {
    id: "B2-1838",
    questionType: "vocabulary",
    questionEn:
      "The company had to _____ its production targets after several key components were delayed.",
    questionVi:
      "Công ty đã phải _____ các mục tiêu sản xuất sau khi một số thành phần then chốt bị chậm trễ.",
    options: [
      { option: "revise", isCorrect: true },
      { option: "revive", isCorrect: false },
      { option: "reveal", isCorrect: false },
      { option: "reverse", isCorrect: false },
    ],
    explanationVi:
      "'Revise' (xem xét lại/sửa đổi) mục tiêu là hành động phù hợp khi có sự thay đổi điều kiện.",
    category: "Production",
  },
  {
    id: "B2-1839",
    questionType: "word-form",
    questionEn:
      "The marketing campaign was _____ successful, exceeding all projected sales figures.",
    questionVi:
      "Chiến dịch tiếp thị đã thành công một cách _____, vượt qua tất cả các số liệu doanh thu dự kiến.",
    options: [
      { option: "immensely", isCorrect: true },
      { option: "immense", isCorrect: false },
      { option: "immensity", isCorrect: false },
      { option: "immensing", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ để bổ nghĩa cho tính từ 'successful'. 'Immensely' (vô cùng/hết sức).",
    category: "Word Form",
  },
  {
    id: "B2-1840",
    questionType: "grammar",
    questionEn:
      "Only later _____ the board members realize the magnitude of the errors in the financial report.",
    questionVi:
      "Mãi về sau các thành viên hội đồng quản trị mới nhận ra mức độ sai lệch trong báo cáo tài chính.",
    options: [
      { option: "did", isCorrect: true },
      { option: "were", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only later': Only later + trợ động từ + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-1841",
    questionType: "vocabulary",
    questionEn:
      "The manager apologized for the _____ delay in responding to the client's inquiry.",
    questionVi:
      "Quản lý đã xin lỗi vì sự chậm trễ _____ trong việc phản hồi yêu cầu của khách hàng.",
    options: [
      { option: "inadvertent", isCorrect: true },
      { option: "inattentive", isCorrect: false },
      { option: "inadequate", isCorrect: false },
      { option: "inarticulate", isCorrect: false },
    ],
    explanationVi:
      "'Inadvertent' (vô ý/không cố ý) thường dùng để miêu tả những sai sót nhẹ nhàng.",
    category: "Business Communication",
  },
  {
    id: "B2-1842",
    questionType: "word-form",
    questionEn:
      "The technical team is working on the _____ of the new cloud-based infrastructure.",
    questionVi:
      "Nhóm kỹ thuật đang làm việc trên việc _____ cơ sở hạ tầng dựa trên đám mây mới.",
    options: [
      { option: "integration", isCorrect: true },
      { option: "integrate", isCorrect: false },
      { option: "integrative", isCorrect: false },
      { option: "integrated", isCorrect: false },
    ],
    explanationVi:
      "Sau 'the' và trước 'of' cần một danh từ. 'Integration' (sự tích hợp).",
    category: "Technology",
  },
  {
    id: "B2-1843",
    questionType: "grammar",
    questionEn:
      "The CEO, _____ leadership has been pivotal, will step down at the end of the year.",
    questionVi:
      "Vị CEO, người mà sự lãnh đạo của ông là then chốt, sẽ từ chức vào cuối năm nay.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "that", isCorrect: false },
    ],
    explanationVi: "Dùng 'whose' để chỉ sở hữu (sự lãnh đạo của vị CEO đó).",
    category: "Relative Clauses",
  },
  {
    id: "B2-1844",
    questionType: "vocabulary",
    questionEn:
      "To maintain a competitive edge, the firm must _____ innovate its product offerings.",
    questionVi:
      "Để duy trì lợi thế cạnh tranh, công ty phải _____ đổi mới các sản phẩm của mình.",
    options: [
      { option: "continually", isCorrect: true },
      { option: "conditionally", isCorrect: false },
      { option: "conclusively", isCorrect: false },
      { option: "comprehensively", isCorrect: false },
    ],
    explanationVi:
      "'Continually' (liên tục/không ngừng) phù hợp với bối cảnh đổi mới trong kinh doanh.",
    category: "Business Strategy",
  },
  {
    id: "B2-1845",
    questionType: "word-form",
    questionEn:
      "The new policy was met with _____ resistance from the senior staff members.",
    questionVi:
      "Chính sách mới vấp phải sự kháng cự _____ từ các nhân viên cấp cao.",
    options: [
      { option: "considerable", isCorrect: true },
      { option: "consideration", isCorrect: false },
      { option: "consider", isCorrect: false },
      { option: "considerably", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'resistance' cần một tính từ. 'Considerable' (đáng kể/to lớn).",
    category: "Word Form",
  },
  {
    id: "B2-1846",
    questionType: "grammar",
    questionEn:
      "It is essential that everyone _____ to the safety regulations without exception.",
    questionVi:
      "Điều thiết yếu là mọi người phải _____ các quy định an toàn mà không có ngoại lệ.",
    options: [
      { option: "adhere", isCorrect: true },
      { option: "adheres", isCorrect: false },
      { option: "adhered", isCorrect: false },
      { option: "be adhering", isCorrect: false },
    ],
    explanationVi:
      "Thể giả định với tính từ 'essential': It is essential that + S + V nguyên thể.",
    category: "Subjunctive",
  },
  {
    id: "B2-1847",
    questionType: "vocabulary",
    questionEn:
      "The company decided to _____ the launch until all security concerns were addressed.",
    questionVi:
      "Công ty đã quyết định _____ việc ra mắt cho đến khi tất cả các lo ngại về bảo mật được giải quyết.",
    options: [
      { option: "defer", isCorrect: true },
      { option: "defy", isCorrect: false },
      { option: "deduce", isCorrect: false },
      { option: "defeat", isCorrect: false },
    ],
    explanationVi:
      "'Defer' (hoãn lại) đồng nghĩa với 'postpone' nhưng trang trọng hơn.",
    category: "Business Events",
  },
  {
    id: "B2-1848",
    questionType: "word-form",
    questionEn:
      "The marketing report highlights the _____ for expansion into the Asian market.",
    questionVi:
      "Báo cáo tiếp thị làm nổi bật _____ để mở rộng sang thị trường Châu Á.",
    options: [
      { option: "potential", isCorrect: true },
      { option: "potentially", isCorrect: false },
      { option: "potent", isCorrect: false },
      { option: "potency", isCorrect: false },
    ],
    explanationVi: "Dùng 'potential' làm danh từ (tiềm năng).",
    category: "Marketing",
  },
  {
    id: "B2-1849",
    questionType: "grammar",
    questionEn:
      "Rarely have we seen such _____ support for a environmental initiative from the local community.",
    questionVi:
      "Hiếm khi chúng ta thấy sự hỗ trợ _____ như vậy đối với một sáng kiến môi trường từ cộng đồng địa phương.",
    options: [
      { option: "overwhelming", isCorrect: true },
      { option: "overwhelmed", isCorrect: false },
      { option: "overwhelms", isCorrect: false },
      { option: "overwhelm", isCorrect: false },
    ],
    explanationVi:
      "Dùng tính từ đuôi -ing 'overwhelming' (tràn trề/áp đảo) để bổ nghĩa cho danh từ 'support'.",
    category: "Inversion",
  },
  {
    id: "B2-1850",
    questionType: "vocabulary",
    questionEn:
      "The company's success is largely _____ to its ability to anticipate consumer needs.",
    questionVi:
      "Thành công của công ty phần lớn là _____ nhờ vào khả năng dự đoán nhu cầu người tiêu dùng.",
    options: [
      { option: "attributable", isCorrect: true },
      { option: "applicable", isCorrect: false },
      { option: "accessible", isCorrect: false },
      { option: "amendable", isCorrect: false },
    ],
    explanationVi: "'Attributable to' (có thể được cho là do/nhờ vào).",
    category: "Business Strategy",
  },
  {
    id: "B2-1851",
    questionType: "word-form",
    questionEn:
      "The audit team found several _____ in the accounting records that required immediate attention.",
    questionVi:
      "Nhóm kiểm toán đã tìm thấy một số _____ trong hồ sơ kế toán yêu cầu sự chú ý ngay lập tức.",
    options: [
      { option: "irregularities", isCorrect: true },
      { option: "irregular", isCorrect: false },
      { option: "irregularly", isCorrect: false },
      { option: "irrelevance", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ 'several' cần một danh từ số nhiều. 'Irregularities' (những điểm bất thường/sai quy tắc).",
    category: "Finance",
  },
  {
    id: "B2-1852",
    questionType: "grammar",
    questionEn:
      "Under no circumstances _____ the warehouse doors be left unlocked overnight.",
    questionVi: "Trong bất kỳ hoàn cảnh nào, cửa kho không được để mở qua đêm.",
    options: [
      { option: "should", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "must", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm phủ định 'Under no circumstances': trợ động từ + S + V. 'Should/Must' thường được dùng trong quy định.",
    category: "Inversion",
  },
  {
    id: "B2-1853",
    questionType: "vocabulary",
    questionEn:
      "The HR department aims to _____ a culture of lifelong learning and professional growth.",
    questionVi:
      "Bộ phận nhân sự nhằm mục tiêu _____ một văn hóa học tập suốt đời và phát triển chuyên môn.",
    options: [
      { option: "foster", isCorrect: true },
      { option: "falter", isCorrect: false },
      { option: "flatten", isCorrect: false },
      { option: "forfeit", isCorrect: false },
    ],
    explanationVi:
      "'Foster' (nuôi dưỡng/thúc đẩy) thường dùng với 'culture' hoặc 'environment'.",
    category: "Human Resources",
  },
  {
    id: "B2-1854",
    questionType: "word-form",
    questionEn:
      "The legal dispute was settled out of court through a _____ agreement between the two parties.",
    questionVi:
      "Vụ tranh chấp pháp lý đã được giải quyết bên ngoài tòa án thông qua một thỏa thuận _____ giữa hai bên.",
    options: [
      { option: "confidential", isCorrect: true },
      { option: "confide", isCorrect: false },
      { option: "confidence", isCorrect: false },
      { option: "confidingly", isCorrect: false },
    ],
    explanationVi:
      "Trước danh từ 'agreement' cần một tính từ. 'Confidential' (bảo mật).",
    category: "Legal",
  },
  {
    id: "B2-1855",
    questionType: "grammar",
    questionEn:
      "No sooner _____ the CEO resigned than a search for a suitable replacement began.",
    questionVi:
      "CEO vừa mới từ chức thì việc tìm kiếm người thay thế phù hợp đã bắt đầu.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'No sooner': No sooner + had + S + V3/ID + than + S + V2/ID.",
    category: "Inversion",
  },
  {
    id: "B2-1856",
    questionType: "vocabulary",
    questionEn:
      "The company's decision to downsize was a direct _____ of the prolonged industry slump.",
    questionVi:
      "Quyết định cắt giảm nhân sự của công ty là _____ trực tiếp của sự suy sụp kéo dài trong ngành.",
    options: [
      { option: "consequence", isCorrect: true },
      { option: "conception", isCorrect: false },
      { option: "concession", isCorrect: false },
      { option: "conviction", isCorrect: false },
    ],
    explanationVi: "'Consequence' (hệ quả/kết quả) của một tình trạng nào đó.",
    category: "Business Context",
  },
  {
    id: "B2-1857",
    questionType: "word-form",
    questionEn:
      "The new manager's approach to conflict resolution is _____ different from that of his predecessor.",
    questionVi:
      "Cách tiếp cận giải quyết xung đột của quản lý mới khác biệt _____ so với người tiền nhiệm của ông ấy.",
    options: [
      { option: "markedly", isCorrect: true },
      { option: "marked", isCorrect: false },
      { option: "mark", isCorrect: false },
      { option: "marker", isCorrect: false },
    ],
    explanationVi:
      "Cần trạng từ để bổ nghĩa cho tính từ 'different'. 'Markedly' (một cách rõ rệt).",
    category: "Management Style",
  },
  {
    id: "B2-1858",
    questionEn:
      "The CEO decided to _____ the merger after reviewing the financial projections for the upcoming quarter.",
    questionVi:
      "Giám đốc điều hành đã quyết định _____ vụ sáp nhập sau khi xem xét các dự báo tài chính cho quý tới.",
    options: [
      { option: "postpone", isCorrect: true },
      { option: "postponement", isCorrect: false },
      { option: "postponed", isCorrect: false },
      { option: "postponing", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decided to' cần một động từ nguyên mẫu. 'Postpone' (trì hoãn) là động từ phù hợp nhất về cả ngữ pháp và ngữ nghĩa.",
    category: "Verb Forms",
  },
  {
    id: "B2-1859",
    questionEn:
      "Ms. Hanh's _____ contribution to the research project was recognized at the annual science gala.",
    questionVi:
      "Sự đóng góp _____ của bà Hạnh cho dự án nghiên cứu đã được ghi nhận tại dạ tiệc khoa học hàng năm.",
    options: [
      { option: "signify", isCorrect: false },
      { option: "significant", isCorrect: true },
      { option: "significance", isCorrect: false },
      { option: "significantly", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'contribution'. 'Significant' (đáng kể/quan trọng) là tính từ.",
    category: "Adjectives",
  },
  {
    id: "B2-1860",
    questionEn:
      "The marketing team must work _____ to meet the deadline for the new product launch.",
    questionVi:
      "Đội ngũ marketing phải làm việc _____ để kịp thời hạn ra mắt sản phẩm mới.",
    options: [
      { option: "collaborate", isCorrect: false },
      { option: "collaboration", isCorrect: false },
      { option: "collaborative", isCorrect: false },
      { option: "collaboratively", isCorrect: true },
    ],
    explanationVi:
      "Cần một trạng từ để bổ nghĩa cho động từ 'work'. 'Collaboratively' (một cách hợp tác) là trạng từ.",
    category: "Adverbs",
  },
  {
    id: "B2-1861",
    questionEn:
      "Please ensure that all confidential documents are _____ shredded before disposal.",
    questionVi:
      "Vui lòng đảm bảo rằng tất cả các tài liệu bảo mật đều được tiêu hủy _____ trước khi vứt bỏ.",
    options: [
      { option: "thorough", isCorrect: false },
      { option: "thoroughly", isCorrect: true },
      { option: "thoroughness", isCorrect: false },
      { option: "most thorough", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho phân từ quá khứ 'shredded'. 'Thoroughly' (một cách triệt để/hoàn toàn).",
    category: "Adverbs",
  },
  {
    id: "B2-1862",
    questionEn:
      "The software update is designed to improve the _____ of the database management system.",
    questionVi:
      "Bản cập nhật phần mềm được thiết kế để cải thiện _____ của hệ thống quản lý cơ sở dữ liệu.",
    options: [
      { option: "efficient", isCorrect: false },
      { option: "efficiency", isCorrect: true },
      { option: "efficiently", isCorrect: false },
      { option: "efficacious", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' và trước giới từ 'of' cần một danh từ. 'Efficiency' (hiệu suất/hiệu quả).",
    category: "Nouns",
  },
  {
    id: "B2-1863",
    questionEn:
      "The hotel offers a complimentary shuttle service for guests staying _____ three nights or more.",
    questionVi:
      "Khách sạn cung cấp dịch vụ đưa đón miễn phí cho khách lưu trú từ ba đêm _____.",
    options: [
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "during", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'for' được dùng để chỉ khoảng thời gian (for three nights).",
    category: "Prepositions",
  },
  {
    id: "B2-1864",
    questionEn:
      "Despite the technical difficulties, the presentation was _____ successful.",
    questionVi:
      "Mặc dù có những khó khăn về kỹ thuật, buổi thuyết trình đã thành công _____.",
    options: [
      { option: "highly", isCorrect: true },
      { option: "high", isCorrect: false },
      { option: "height", isCorrect: false },
      { option: "highest", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho tính từ 'successful'. 'Highly successful' là một cụm từ phổ biến (thành công rực rỡ).",
    category: "Adverbs",
  },
  {
    id: "B2-1865",
    questionEn:
      "The budget proposal needs to be finalized _____ the end of the business day.",
    questionVi:
      "Đề xuất ngân sách cần được hoàn thiện _____ cuối ngày làm việc.",
    options: [
      { option: "until", isCorrect: false },
      { option: "by", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "from", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'by' được dùng để chỉ thời hạn (không muộn hơn một thời điểm nào đó).",
    category: "Prepositions",
  },
  {
    id: "B2-1866",
    questionEn:
      "Employees who demonstrate _____ performance may be eligible for a year-end bonus.",
    questionVi:
      "Những nhân viên thể hiện hiệu suất _____ có thể đủ điều kiện nhận tiền thưởng cuối năm.",
    options: [
      { option: "exceptional", isCorrect: true },
      { option: "exceptionally", isCorrect: false },
      { option: "exception", isCorrect: false },
      { option: "excepting", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'performance'. 'Exceptional' (xuất sắc/đặc biệt).",
    category: "Adjectives",
  },
  {
    id: "B2-1867",
    questionEn:
      "The construction of the new office building is expected to be _____ by next spring.",
    questionVi:
      "Việc xây dựng tòa nhà văn phòng mới dự kiến sẽ được _____ vào mùa xuân tới.",
    options: [
      { option: "complete", isCorrect: false },
      { option: "completion", isCorrect: false },
      { option: "completed", isCorrect: true },
      { option: "completing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động: be + V3/ed. 'Completed' (được hoàn thành).",
    category: "Passive Voice",
  },
  {
    id: "B2-1868",
    questionEn:
      "The consultant suggested that the company _____ its digital marketing strategy to reach a wider audience.",
    questionVi:
      "Nhà tư vấn đề xuất công ty _____ chiến lược marketing kỹ thuật số để tiếp cận lượng khán giả rộng hơn.",
    options: [
      { option: "revise", isCorrect: true },
      { option: "revises", isCorrect: false },
      { option: "revised", isCorrect: false },
      { option: "revising", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (subjunctive mood) với động từ 'suggest': suggest that + S + (should) + V-bare.",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1869",
    questionEn:
      "Because the shipment was delayed, the store manager offered a 15% discount as _____.",
    questionVi:
      "Vì chuyến hàng bị trì hoãn, quản lý cửa hàng đã đề nghị giảm giá 15% như một sự _____.",
    options: [
      { option: "compensate", isCorrect: false },
      { option: "compensation", isCorrect: true },
      { option: "compensatory", isCorrect: false },
      { option: "compensating", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'a' cần một danh từ. 'Compensation' (sự bồi thường/đền bù).",
    category: "Nouns",
  },
  {
    id: "B2-1870",
    questionEn:
      "The new interns are required to attend an orientation session _____ they begin their assignments.",
    questionVi:
      "Các thực tập sinh mới được yêu cầu tham gia một buổi định hướng _____ họ bắt đầu nhiệm vụ của mình.",
    options: [
      { option: "before", isCorrect: true },
      { option: "while", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi:
      "Liên từ 'before' nối hai mệnh đề, chỉ trình tự thời gian (trước khi).",
    category: "Conjunctions",
  },
  {
    id: "B2-1871",
    questionEn:
      "The supervisor was impressed by the _____ with which the team handled the crisis.",
    questionVi:
      "Người giám sát đã bị ấn tượng bởi sự _____ mà nhóm đã xử lý cuộc khủng hoảng.",
    options: [
      { option: "professional", isCorrect: false },
      { option: "profession", isCorrect: false },
      { option: "professionalism", isCorrect: true },
      { option: "professionally", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Professionalism' (sự chuyên nghiệp).",
    category: "Nouns",
  },
  {
    id: "B2-1872",
    questionEn:
      "The conference room is _____ occupied, so please wait in the lobby.",
    questionVi: "Phòng họp hiện đang _____, vì vậy vui lòng đợi ở sảnh.",
    options: [
      { option: "currently", isCorrect: true },
      { option: "current", isCorrect: false },
      { option: "currency", isCorrect: false },
      { option: "curiously", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ chỉ thời gian để bổ nghĩa cho tính từ/phân từ 'occupied'. 'Currently' (hiện tại).",
    category: "Adverbs",
  },
  {
    id: "B2-1873",
    questionEn:
      "The sales representatives must provide a detailed report on _____ client interaction.",
    questionVi:
      "Các đại diện bán hàng phải cung cấp báo cáo chi tiết về _____ tương tác với khách hàng.",
    options: [
      { option: "all", isCorrect: false },
      { option: "every", isCorrect: true },
      { option: "many", isCorrect: false },
      { option: "various", isCorrect: false },
    ],
    explanationVi:
      "'Every' đi với danh từ số ít (interaction). 'All', 'many', 'various' thường đi với danh từ số nhiều.",
    category: "Determiners",
  },
  {
    id: "B2-1874",
    questionEn:
      "If the weather conditions improve, the outdoor concert _____ as scheduled.",
    questionVi:
      "Nếu điều kiện thời tiết cải thiện, buổi hòa nhạc ngoài trời _____ như kế hoạch.",
    options: [
      { option: "proceeds", isCorrect: false },
      { option: "will proceed", isCorrect: true },
      { option: "proceeded", isCorrect: false },
      { option: "would proceed", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 1: If + HTĐ, S + will + V-bare.",
    category: "Conditionals",
  },
  {
    id: "B2-1875",
    questionEn:
      "The committee will review the applications and make a final _____ by Friday.",
    questionVi:
      "Ủy ban sẽ xem xét các đơn ứng tuyển và đưa ra _____ cuối cùng vào thứ Sáu.",
    options: [
      { option: "decide", isCorrect: false },
      { option: "decisive", isCorrect: false },
      { option: "decision", isCorrect: true },
      { option: "decidedly", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ 'final' cần một danh từ. 'Make a decision' (đưa ra quyết định/quyết định).",
    category: "Nouns",
  },
  {
    id: "B2-1876",
    questionEn:
      "The laboratory equipment is extremely sensitive and must be handled with _____.",
    questionVi:
      "Thiết bị phòng thí nghiệm cực kỳ nhạy cảm và phải được xử lý một cách _____.",
    options: [
      { option: "care", isCorrect: true },
      { option: "careful", isCorrect: false },
      { option: "carefully", isCorrect: false },
      { option: "careless", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'with' cần một danh từ. 'With care' (cẩn thận).",
    category: "Prepositions",
  },
  {
    id: "B2-1877",
    questionEn:
      "Investors are optimistic about the company's future _____ its consistent revenue growth.",
    questionVi:
      "Các nhà đầu tư lạc quan về tương lai của công ty _____ sự tăng trưởng doanh thu nhất quán của nó.",
    options: [
      { option: "because of", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "even if", isCorrect: false },
      { option: "instead of", isCorrect: false },
    ],
    explanationVi:
      "Cần một cụm từ chỉ nguyên nhân đi kèm với một danh từ/cụm danh từ. 'Because of' (bởi vì).",
    category: "Conjunctions",
  },
  {
    id: "B2-1878",
    questionEn:
      "Please notify the HR department immediately if you _____ your contact information.",
    questionVi:
      "Vui lòng thông báo cho bộ phận nhân sự ngay lập tức nếu bạn _____ thông tin liên lạc của mình.",
    options: [
      { option: "change", isCorrect: true },
      { option: "changing", isCorrect: false },
      { option: "changed", isCorrect: false },
      { option: "will be changed", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 1 (mệnh lệnh): Imperative + if + S + HTĐ.",
    category: "Conditionals",
  },
  {
    id: "B2-1879",
    questionEn:
      "The factory workers are required to wear safety gear to _____ workplace injuries.",
    questionVi:
      "Công nhân nhà máy được yêu cầu mặc đồ bảo hộ để _____ chấn thương nơi làm việc.",
    options: [
      { option: "prevent", isCorrect: true },
      { option: "prevention", isCorrect: false },
      { option: "preventative", isCorrect: false },
      { option: "prevented", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' (chỉ mục đích) cần một động từ nguyên mẫu. 'Prevent' (ngăn chặn).",
    category: "Verb Forms",
  },
  {
    id: "B2-1880",
    questionEn:
      "The manager praised the team for their _____ efforts in completing the project ahead of schedule.",
    questionVi:
      "Quản lý đã khen ngợi nhóm vì những nỗ lực _____ của họ trong việc hoàn thành dự án trước thời hạn.",
    options: [
      { option: "tire", isCorrect: false },
      { option: "tired", isCorrect: false },
      { option: "tiring", isCorrect: false },
      { option: "tireless", isCorrect: true },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'efforts'. 'Tireless' (không mệt mỏi) hợp về nghĩa.",
    category: "Adjectives",
  },
  {
    id: "B2-1881",
    questionEn:
      "The legal department is reviewing the contract to ensure all terms are _____.",
    questionVi:
      "Bộ phận pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản đều _____.",
    options: [
      { option: "accept", isCorrect: false },
      { option: "acceptance", isCorrect: false },
      { option: "acceptable", isCorrect: true },
      { option: "acceptably", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ to be 'are' cần một tính từ. 'Acceptable' (có thể chấp nhận được).",
    category: "Adjectives",
  },
  {
    id: "B2-1882",
    questionEn:
      "Mr. Kim was chosen to lead the task force because of his _____ experience in supply chain management.",
    questionVi:
      "Ông Kim đã được chọn để lãnh đạo đội đặc nhiệm vì kinh nghiệm _____ của ông trong quản lý chuỗi cung ứng.",
    options: [
      { option: "extensive", isCorrect: true },
      { option: "extends", isCorrect: false },
      { option: "extension", isCorrect: false },
      { option: "extensively", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'experience'. 'Extensive' (sâu rộng).",
    category: "Adjectives",
  },
  {
    id: "B2-1883",
    questionEn:
      "The company's logo should be placed _____ on all promotional materials.",
    questionVi:
      "Logo của công ty nên được đặt _____ trên tất cả các tài liệu quảng cáo.",
    options: [
      { option: "prominent", isCorrect: false },
      { option: "prominently", isCorrect: true },
      { option: "prominence", isCorrect: false },
      { option: "promote", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'placed'. 'Prominently' (một cách nổi bật).",
    category: "Adverbs",
  },
  {
    id: "B2-1884",
    questionEn:
      "The newly hired accountant has proven to be a very _____ employee.",
    questionVi: "Kế toán mới được thuê đã chứng tỏ là một nhân viên rất _____.",
    options: [
      { option: "rely", isCorrect: false },
      { option: "reliable", isCorrect: true },
      { option: "reliably", isCorrect: false },
      { option: "reliability", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'employee'. 'Reliable' (đáng tin cậy).",
    category: "Adjectives",
  },
  {
    id: "B2-1885",
    questionEn:
      "Customers are encouraged to provide feedback so that we can _____ improve our services.",
    questionVi:
      "Khách hàng được khuyến khích cung cấp phản hồi để chúng tôi có thể _____ cải thiện dịch vụ của mình.",
    options: [
      { option: "continue", isCorrect: false },
      { option: "continual", isCorrect: false },
      { option: "continually", isCorrect: true },
      { option: "continuity", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ để bổ nghĩa cho động từ 'improve'. 'Continually' (một cách liên tục).",
    category: "Adverbs",
  },
  {
    id: "B2-1886",
    questionEn:
      "The research suggests that regular exercise can have a _____ effect on overall health.",
    questionVi:
      "Nghiên cứu cho thấy tập thể dục thường xuyên có thể có tác động _____ đến sức khỏe tổng thể.",
    options: [
      { option: "benefit", isCorrect: false },
      { option: "beneficial", isCorrect: true },
      { option: "beneficiary", isCorrect: false },
      { option: "beneficially", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'effect'. 'Beneficial' (có lợi).",
    category: "Adjectives",
  },
  {
    id: "B2-1887",
    questionEn:
      "The board of directors is currently _____ the possibility of expanding into the European market.",
    questionVi:
      "Hội đồng quản trị hiện đang _____ khả năng mở rộng sang thị trường Châu Âu.",
    options: [
      { option: "consider", isCorrect: false },
      { option: "considering", isCorrect: true },
      { option: "considered", isCorrect: false },
      { option: "consideration", isCorrect: false },
    ],
    explanationVi:
      "Thì Hiện tại tiếp diễn: be (is) + V-ing. 'Considering' (đang xem xét).",
    category: "Verb Tenses",
  },
  {
    id: "B2-1888",
    questionEn:
      "The flight was delayed _____ a technical malfunction with the aircraft's navigation system.",
    questionVi:
      "Chuyến bay đã bị trì hoãn _____ một lỗi kỹ thuật của hệ thống định vị máy bay.",
    options: [
      { option: "due to", isCorrect: true },
      { option: "regardless of", isCorrect: false },
      { option: "in spite of", isCorrect: false },
      { option: "as for", isCorrect: false },
    ],
    explanationVi: "Cụm giới từ 'due to' (do/vì) dùng để chỉ nguyên nhân.",
    category: "Prepositions",
  },
  {
    id: "B2-1889",
    questionEn:
      "Please make sure to read the safety manual _____ before operating the heavy machinery.",
    questionVi:
      "Hãy đảm bảo đọc kỹ hướng dẫn an toàn _____ trước khi vận hành máy móc hạng nặng.",
    options: [
      { option: "careful", isCorrect: false },
      { option: "carefully", isCorrect: true },
      { option: "caring", isCorrect: false },
      { option: "carelessness", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'read'. 'Carefully' (một cách cẩn thận).",
    category: "Adverbs",
  },
  {
    id: "B2-1890",
    questionEn:
      "The marketing director is looking for a candidate who is _____ in both Japanese and English.",
    questionVi:
      "Giám đốc marketing đang tìm kiếm một ứng viên _____ cả tiếng Nhật và tiếng Anh.",
    options: [
      { option: "fluency", isCorrect: false },
      { option: "fluent", isCorrect: true },
      { option: "fluently", isCorrect: false },
      { option: "fluid", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ to be 'is' cần một tính từ. 'Fluent' (trôi chảy/thông thạo).",
    category: "Adjectives",
  },
  {
    id: "B2-1891",
    questionEn:
      "The CEO's speech was so _____ that several investors decided to increase their funding.",
    questionVi:
      "Bài phát biểu của CEO _____ đến mức một vài nhà đầu tư đã quyết định tăng ngân sách đầu tư của họ.",
    options: [
      { option: "persuade", isCorrect: false },
      { option: "persuasion", isCorrect: false },
      { option: "persuasive", isCorrect: true },
      { option: "persuasively", isCorrect: false },
    ],
    explanationVi:
      "Sau 'was so' cần một tính từ. 'Persuasive' (có tính thuyết phục).",
    category: "Adjectives",
  },
  {
    id: "B2-1892",
    questionEn:
      "The company has decided to _____ its traditional advertising budget to invest more in social media.",
    questionVi:
      "Công ty đã quyết định _____ ngân sách quảng cáo truyền thống để đầu tư nhiều hơn vào mạng xã hội.",
    options: [
      { option: "reduce", isCorrect: true },
      { option: "reduction", isCorrect: false },
      { option: "reduced", isCorrect: false },
      { option: "reducing", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decided to' cần một động từ nguyên mẫu. 'Reduce' (cắt giảm).",
    category: "Verb Forms",
  },
  {
    id: "B2-1893",
    questionEn:
      "The new residential complex is located _____ a short walking distance from the subway station.",
    questionVi:
      "Khu dân cư mới nằm trong khoảng cách đi bộ ngắn _____ ga tàu điện ngầm.",
    options: [
      { option: "within", isCorrect: true },
      { option: "among", isCorrect: false },
      { option: "between", isCorrect: false },
      { option: "along", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'within' dùng để chỉ phạm vi (trong khoảng/trong vòng).",
    category: "Prepositions",
  },
  {
    id: "B2-1894",
    questionEn:
      "All staff members are expected to follow the company's code of conduct _____.",
    questionVi:
      "Tất cả các thành viên nhân viên được kỳ vọng tuân thủ quy tắc ứng xử của công ty _____.",
    options: [
      { option: "strict", isCorrect: false },
      { option: "strictly", isCorrect: true },
      { option: "strictness", isCorrect: false },
      { option: "stricter", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'follow'. 'Strictly' (một cách nghiêm ngặt).",
    category: "Adverbs",
  },
  {
    id: "B2-1895",
    questionEn:
      "Neither the supervisor _____ the manager was aware of the change in the project timeline.",
    questionVi:
      "Cả người giám sát lẫn quản lý đều không biết về sự thay đổi trong lịch trình dự án.",
    options: [
      { option: "nor", isCorrect: true },
      { option: "or", isCorrect: false },
      { option: "but", isCorrect: false },
      { option: "and", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc tương quan 'Neither ... nor' (không... cũng không).",
    category: "Conjunctions",
  },
  {
    id: "B2-1896",
    questionEn:
      "The financial report indicates that the firm's profits have grown _____ over the last quarter.",
    questionVi:
      "Báo cáo tài chính chỉ ra rằng lợi nhuận của công ty đã tăng trưởng _____ trong quý vừa qua.",
    options: [
      { option: "steady", isCorrect: false },
      { option: "steadily", isCorrect: true },
      { option: "steadiness", isCorrect: false },
      { option: "steadied", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'grown'. 'Steadily' (vững chắc/đều đặn).",
    category: "Adverbs",
  },
  {
    id: "B2-1897",
    questionEn:
      "Applicants must submit their resumes _____ with a cover letter to the HR department.",
    questionVi:
      "Các ứng viên phải nộp sơ yếu lý lịch _____ với một lá thư xin việc tới bộ phận nhân sự.",
    options: [
      { option: "along", isCorrect: true },
      { option: "as well", isCorrect: false },
      { option: "beside", isCorrect: false },
      { option: "togetherly", isCorrect: false },
    ],
    explanationVi: "Cụm 'along with' (cùng với/kèm theo).",
    category: "Prepositions",
  },
  {
    id: "B2-1898",
    questionEn:
      "The workshop will focus on techniques for _____ effective communication in the workplace.",
    questionVi:
      "Buổi hội thảo sẽ tập trung vào các kỹ thuật để _____ giao tiếp hiệu quả tại nơi làm việc.",
    options: [
      { option: "facilitate", isCorrect: false },
      { option: "facilitating", isCorrect: true },
      { option: "facilitation", isCorrect: false },
      { option: "facilitator", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'for' cần một V-ing (danh động từ). 'Facilitating' (việc tạo điều kiện/thúc đẩy).",
    category: "Gerunds",
  },
  {
    id: "B2-1899",
    questionEn:
      "We were surprised by the _____ number of attendees at the charity event.",
    questionVi:
      "Chúng tôi đã ngạc nhiên bởi số lượng người tham dự _____ tại sự kiện từ thiện.",
    options: [
      { option: "unexpected", isCorrect: true },
      { option: "unexpectedly", isCorrect: false },
      { option: "expectation", isCorrect: false },
      { option: "expecting", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'number'. 'Unexpected' (bất ngờ/không mong đợi).",
    category: "Adjectives",
  },
  {
    id: "B2-1900",
    questionEn:
      "The project manager is responsible for _____ tasks to the appropriate team members.",
    questionVi:
      "Quản lý dự án có trách nhiệm _____ các nhiệm vụ cho các thành viên nhóm phù hợp.",
    options: [
      { option: "assign", isCorrect: false },
      { option: "assignment", isCorrect: false },
      { option: "assigning", isCorrect: true },
      { option: "assigned", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'for' trong cụm 'responsible for' cần một V-ing. 'Assigning' (phân công).",
    category: "Gerunds",
  },
  {
    id: "B2-1901",
    questionEn:
      "The new regulations were implemented to ensure _____ with ethical standards.",
    questionVi:
      "Các quy định mới được thực hiện để đảm bảo _____ với các tiêu chuẩn đạo đức.",
    options: [
      { option: "comply", isCorrect: false },
      { option: "compliant", isCorrect: false },
      { option: "compliance", isCorrect: true },
      { option: "compliantly", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ 'ensure' cần một danh từ. 'Compliance with' (sự tuân thủ với).",
    category: "Nouns",
  },
  {
    id: "B2-1902",
    questionEn:
      "The technical support team is available 24/7 to _____ any issues you may encounter.",
    questionVi:
      "Đội ngũ hỗ trợ kỹ thuật sẵn sàng 24/7 để _____ bất kỳ vấn đề nào bạn có thể gặp phải.",
    options: [
      { option: "resolve", isCorrect: true },
      { option: "resolution", isCorrect: false },
      { option: "resolved", isCorrect: false },
      { option: "resolving", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' (chỉ mục đích) cần một động từ nguyên mẫu. 'Resolve' (giải quyết).",
    category: "Verb Forms",
  },
  {
    id: "B2-1903",
    questionEn:
      "The manager has several _____ candidates to interview for the open position.",
    questionVi:
      "Quản lý có một vài ứng viên _____ để phỏng vấn cho vị trí đang trống.",
    options: [
      { option: "potential", isCorrect: true },
      { option: "potentially", isCorrect: false },
      { option: "potency", isCorrect: false },
      { option: "potent", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'candidates'. 'Potential' (tiềm năng).",
    category: "Adjectives",
  },
  {
    id: "B2-1904",
    questionEn:
      "Please review the attached document and provide your comments _____ next Monday.",
    questionVi:
      "Vui lòng xem xét tài liệu đính kèm và cung cấp nhận xét của bạn _____ thứ Hai tới.",
    options: [
      { option: "since", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "by", isCorrect: true },
    ],
    explanationVi: "Dùng giới từ 'by' để chỉ thời hạn cuối cùng.",
    category: "Prepositions",
  },
  {
    id: "B2-1905",
    questionEn:
      "The company's annual report shows a _____ increase in international sales.",
    questionVi:
      "Báo cáo thường niên của công ty cho thấy một sự gia tăng _____ trong doanh số bán hàng quốc tế.",
    options: [
      { option: "mark", isCorrect: false },
      { option: "marked", isCorrect: true },
      { option: "marking", isCorrect: false },
      { option: "markedly", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'increase'. 'Marked' (rõ rệt/đáng kể).",
    category: "Adjectives",
  },
  {
    id: "B2-1906",
    questionEn:
      "The supervisor requested that the team _____ more effort into the current project.",
    questionVi:
      "Người giám sát yêu cầu nhóm _____ nhiều nỗ lực hơn vào dự án hiện tại.",
    options: [
      { option: "put", isCorrect: true },
      { option: "puts", isCorrect: false },
      { option: "putting", isCorrect: false },
      { option: "was put", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive mood) với 'request': request that + S + (should) + V-bare.",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1907",
    questionEn:
      "The marketing campaign was _____ successful, resulting in a 20% increase in sales.",
    questionVi:
      "Chiến dịch marketing đã thành công _____, dẫn đến doanh số tăng 20%.",
    options: [
      { option: "extreme", isCorrect: false },
      { option: "extremely", isCorrect: true },
      { option: "extremist", isCorrect: false },
      { option: "extremity", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho tính từ 'successful'. 'Extremely' (cực kỳ).",
    category: "Adverbs",
  },
  {
    id: "B2-1908",
    questionEn:
      "The HR department is in the process of _____ the employee benefits package.",
    questionVi:
      "Bộ phận nhân sự đang trong quá trình _____ gói phúc lợi nhân viên.",
    options: [
      { option: "update", isCorrect: false },
      { option: "updating", isCorrect: true },
      { option: "updated", isCorrect: false },
      { option: "updates", isCorrect: false },
    ],
    explanationVi: "Sau giới từ 'of' cần một V-ing. 'Updating' (cập nhật).",
    category: "Gerunds",
  },
  {
    id: "B2-1909",
    questionEn:
      "It is essential that all employees _____ the safety protocols at all times.",
    questionVi:
      "Điều quan trọng là tất cả nhân viên phải _____ các quy định an toàn vào mọi lúc.",
    options: [
      { option: "observe", isCorrect: true },
      { option: "observes", isCorrect: false },
      { option: "observed", isCorrect: false },
      { option: "observation", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: It is essential that + S + V-bare (không chia theo chủ ngữ). 'Observe' (tuân thủ/quan sát).",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1910",
    questionEn:
      "The hotel offers a variety of amenities, _____ a fitness center and a swimming pool.",
    questionVi:
      "Khách sạn cung cấp nhiều tiện nghi, _____ trung tâm thể dục và hồ bơi.",
    options: [
      { option: "include", isCorrect: false },
      { option: "including", isCorrect: true },
      { option: "inclusive", isCorrect: false },
      { option: "included", isCorrect: false },
    ],
    explanationVi: "'Including' là một giới từ dùng để liệt kê ví dụ.",
    category: "Prepositions",
  },
  {
    id: "B2-1911",
    questionEn:
      "The administrative assistant is responsible for the _____ of office supplies.",
    questionVi: "Trợ lý hành chính chịu trách nhiệm về _____ văn phòng phẩm.",
    options: [
      { option: "procure", isCorrect: false },
      { option: "procurement", isCorrect: true },
      { option: "procured", isCorrect: false },
      { option: "procuringly", isCorrect: false },
    ],
    explanationVi:
      "Sau 'the' và trước 'of' cần một danh từ. 'Procurement' (việc thu mua/cung ứng).",
    category: "Nouns",
  },
  {
    id: "B2-1912",
    questionEn:
      "The board members agreed that the proposal was _____ beneficial for the company.",
    questionVi:
      "Các thành viên hội đồng quản trị đồng ý rằng đề xuất có lợi _____ cho công ty.",
    options: [
      { option: "mutual", isCorrect: false },
      { option: "mutually", isCorrect: true },
      { option: "mutuality", isCorrect: false },
      { option: "mutation", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho tính từ 'beneficial'. 'Mutually' (lẫn nhau).",
    category: "Adverbs",
  },
  {
    id: "B2-1913",
    questionEn:
      "The manager was impressed by how _____ the new software was integrated into the workflow.",
    questionVi:
      "Quản lý đã bị ấn tượng bởi phần mềm mới được tích hợp vào quy trình làm việc _____ như thế nào.",
    options: [
      { option: "seamless", isCorrect: false },
      { option: "seamlessly", isCorrect: true },
      { option: "seamlessness", isCorrect: false },
      { option: "seamed", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'integrated'. 'Seamlessly' (một cách mượt mà/liền mạch).",
    category: "Adverbs",
  },
  {
    id: "B2-1914",
    questionEn:
      "The company will provide a full refund _____ the product is returned within 30 days.",
    questionVi:
      "Công ty sẽ hoàn tiền đầy đủ _____ sản phẩm được trả lại trong vòng 30 ngày.",
    options: [
      { option: "provided that", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "until", isCorrect: false },
      { option: "so as to", isCorrect: false },
    ],
    explanationVi:
      "Liên từ 'provided that' (với điều kiện là) dùng để đưa ra điều kiện.",
    category: "Conjunctions",
  },
  {
    id: "B2-1915",
    questionEn:
      "Employees are reminded to keep their workspace tidy and _____ of clutter.",
    questionVi:
      "Nhân viên được nhắc nhở giữ không gian làm việc gọn gàng và _____ bừa bộn.",
    options: [
      { option: "free", isCorrect: true },
      { option: "freedom", isCorrect: false },
      { option: "freely", isCorrect: false },
      { option: "freeness", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'free of something' (không có cái gì/thoát khỏi cái gì). 'Clutter' (đống bừa bộn).",
    category: "Adjectives",
  },
  {
    id: "B2-1916",
    questionEn:
      "The spokesperson for the company gave a very _____ explanation for the recent service outage.",
    questionVi:
      "Người phát ngôn của công ty đã đưa ra một lời giải thích rất _____ cho sự cố ngừng dịch vụ gần đây.",
    options: [
      { option: "detail", isCorrect: false },
      { option: "detailed", isCorrect: true },
      { option: "detailing", isCorrect: false },
      { option: "details", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'explanation'. 'Detailed' (chi tiết).",
    category: "Adjectives",
  },
  {
    id: "B2-1917",
    questionEn:
      "The expansion of the factory will lead to the _____ of hundreds of new jobs in the region.",
    questionVi:
      "Việc mở rộng nhà máy sẽ dẫn đến _____ hàng trăm việc làm mới trong khu vực.",
    options: [
      { option: "create", isCorrect: false },
      { option: "creation", isCorrect: true },
      { option: "creative", isCorrect: false },
      { option: "creatively", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Creation' (việc tạo ra).",
    category: "Nouns",
  },
  {
    id: "B2-1918",
    questionEn:
      "The CEO emphasizes that customer satisfaction is our _____ priority.",
    questionVi:
      "CEO nhấn mạnh rằng sự hài lòng của khách hàng là ưu tiên _____ của chúng tôi.",
    options: [
      { option: "top", isCorrect: true },
      { option: "topmost", isCorrect: false },
      { option: "topping", isCorrect: false },
      { option: "topped", isCorrect: false },
    ],
    explanationVi: "Cụm 'top priority' (ưu tiên hàng đầu).",
    category: "Adjectives",
  },
  {
    id: "B2-1919",
    questionEn:
      "The research team is working _____ to find a solution to the environmental problem.",
    questionVi:
      "Đội ngũ nghiên cứu đang làm việc _____ để tìm ra giải pháp cho vấn đề môi trường.",
    options: [
      { option: "tireless", isCorrect: false },
      { option: "tirelessly", isCorrect: true },
      { option: "tired", isCorrect: false },
      { option: "tiringly", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho cụm động từ 'is working'. 'Tirelessly' (một cách không mệt mỏi).",
    category: "Adverbs",
  },
  {
    id: "B2-1920",
    questionEn:
      "The new policy requires all staff to attend a training session _____ per year.",
    questionVi:
      "Chính sách mới yêu cầu tất cả nhân viên tham gia một buổi đào tạo _____ mỗi năm.",
    options: [
      { option: "once", isCorrect: true },
      { option: "one", isCorrect: false },
      { option: "the first", isCorrect: false },
      { option: "single", isCorrect: false },
    ],
    explanationVi: "'Once per year' (một lần mỗi năm).",
    category: "Adverbs",
  },
  {
    id: "B2-1921",
    questionEn:
      "The candidate was selected due to her _____ knowledge of computer programming.",
    questionVi:
      "Ứng viên đã được chọn do kiến thức _____ của cô ấy về lập trình máy tính.",
    options: [
      { option: "proficient", isCorrect: false },
      { option: "proficiency", isCorrect: false },
      { option: "profound", isCorrect: true },
      { option: "profoundly", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'knowledge'. 'Profound knowledge' (kiến thức sâu rộng).",
    category: "Adjectives",
  },
  {
    id: "B2-1922",
    questionEn:
      "The city council is considering a proposal to _____ the historic library building.",
    questionVi:
      "Hội đồng thành phố đang xem xét một đề xuất để _____ tòa nhà thư viện lịch sử.",
    options: [
      { option: "renovate", isCorrect: true },
      { option: "renovation", isCorrect: false },
      { option: "renovated", isCorrect: false },
      { option: "renovating", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' (chỉ mục đích) cần một động từ nguyên mẫu. 'Renovate' (cải tạo/trùng tu).",
    category: "Verb Forms",
  },
  {
    id: "B2-1923",
    questionEn:
      "The results of the survey were _____ unexpected, showing a shift in consumer preferences.",
    questionVi:
      "Kết quả của cuộc khảo sát _____ không ngờ tới, cho thấy một sự thay đổi trong sở thích của người tiêu dùng.",
    options: [
      { option: "somewhat", isCorrect: true },
      { option: "nowhere", isCorrect: false },
      { option: "anywhere", isCorrect: false },
      { option: "wherever", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'somewhat' (phần nào/hơi hơi) được dùng để làm giảm bớt tính từ 'unexpected'.",
    category: "Adverbs",
  },
  {
    id: "B2-1924",
    questionEn:
      "The information provided in the brochure is for _____ purposes only.",
    questionVi:
      "Thông tin được cung cấp trong tập tài liệu này chỉ dành cho mục đích _____.",
    options: [
      { option: "informative", isCorrect: false },
      { option: "informational", isCorrect: true },
      { option: "inform", isCorrect: false },
      { option: "informed", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'purposes'. 'Informational purposes' (mục đích thông tin).",
    category: "Adjectives",
  },
  {
    id: "B2-1925",
    questionEn:
      "The project was completed on time _____ the numerous challenges faced by the team.",
    questionVi:
      "Dự án đã được hoàn thành đúng hạn _____ vô số thách thức mà nhóm phải đối mặt.",
    options: [
      { option: "despite", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "because", isCorrect: false },
      { option: "nevertheless", isCorrect: false },
    ],
    explanationVi: "Dùng 'despite' + cụm danh từ để chỉ sự nhượng bộ (mặc dù).",
    category: "Conjunctions",
  },
  {
    id: "B2-1926",
    questionEn:
      "The technician is working to _____ the connectivity issues reported by several users.",
    questionVi:
      "Kỹ thuật viên đang làm việc để _____ các vấn đề kết nối được báo cáo bởi một số người dùng.",
    options: [
      { option: "address", isCorrect: true },
      { option: "addressing", isCorrect: false },
      { option: "addressable", isCorrect: false },
      { option: "addressed", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' (chỉ mục đích) cần một động từ nguyên mẫu. 'Address' (giải quyết).",
    category: "Verb Forms",
  },
  {
    id: "B2-1927",
    questionEn:
      "The store manager is looking for ways to increase customer _____.",
    questionVi:
      "Quản lý cửa hàng đang tìm cách tăng cường _____ của khách hàng.",
    options: [
      { option: "retain", isCorrect: false },
      { option: "retention", isCorrect: true },
      { option: "retaining", isCorrect: false },
      { option: "retentive", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ 'customer' (đóng vai trò danh từ ghép) cần một danh từ. 'Customer retention' (việc giữ chân khách hàng).",
    category: "Nouns",
  },
  {
    id: "B2-1928",
    questionEn:
      "The new software is extremely _____, making it easy for even beginners to use.",
    questionVi:
      "Phần mềm mới cực kỳ _____, giúp ngay cả những người mới bắt đầu cũng dễ dàng sử dụng.",
    options: [
      { option: "user-friendliness", isCorrect: false },
      { option: "user-friendly", isCorrect: true },
      { option: "usefully", isCorrect: false },
      { option: "usage", isCorrect: false },
    ],
    explanationVi:
      "Sau 'is extremely' cần một tính từ. 'User-friendly' (thân thiện với người dùng).",
    category: "Adjectives",
  },
  {
    id: "B2-1929",
    questionEn:
      "Investors are advised to diversify their portfolios to _____ risk.",
    questionVi:
      "Các nhà đầu tư được khuyên nên đa dạng hóa danh mục đầu tư để _____ rủi ro.",
    options: [
      { option: "minimize", isCorrect: true },
      { option: "minimal", isCorrect: false },
      { option: "minimum", isCorrect: false },
      { option: "minimizing", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' (chỉ mục đích) cần một động từ nguyên mẫu. 'Minimize' (giảm thiểu).",
    category: "Verb Forms",
  },
  {
    id: "B2-1930",
    questionEn:
      "The maintenance crew will be working on the elevators _____ the weekend.",
    questionVi: "Đội bảo trì sẽ làm việc trên các thang máy _____ cuối tuần.",
    options: [
      { option: "throughout", isCorrect: true },
      { option: "between", isCorrect: false },
      { option: "among", isCorrect: false },
      { option: "into", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'throughout' dùng để chỉ toàn bộ một khoảng thời gian (suốt).",
    category: "Prepositions",
  },
  {
    id: "B2-1931",
    questionEn:
      "The report provides a _____ analysis of the current market trends.",
    questionVi:
      "Báo cáo cung cấp một sự phân tích _____ về các xu hướng thị trường hiện tại.",
    options: [
      { option: "comprehend", isCorrect: false },
      { option: "comprehension", isCorrect: false },
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensibly", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'analysis'. 'Comprehensive' (toàn diện).",
    category: "Adjectives",
  },
  {
    id: "B2-1932",
    questionEn:
      "The manager has already _____ the budget for the upcoming fiscal year.",
    questionVi: "Quản lý đã _____ ngân sách cho năm tài chính sắp tới.",
    options: [
      { option: "approve", isCorrect: false },
      { option: "approved", isCorrect: true },
      { option: "approval", isCorrect: false },
      { option: "approving", isCorrect: false },
    ],
    explanationVi:
      "Thì Hiện tại hoàn thành: has + already + V3/ed. 'Approved' (đã phê duyệt).",
    category: "Verb Tenses",
  },
  {
    id: "B2-1933",
    questionEn:
      "Please make sure that your signature is _____ at the bottom of the form.",
    questionVi:
      "Vui lòng đảm bảo rằng chữ ký của bạn _____ ở phía dưới biểu mẫu.",
    options: [
      { option: "legible", isCorrect: true },
      { option: "legibly", isCorrect: false },
      { option: "legibility", isCorrect: false },
      { option: "lecture", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ to be 'is' cần một tính từ. 'Legible' (có thể đọc được/rõ ràng).",
    category: "Adjectives",
  },
  {
    id: "B2-1934",
    questionEn:
      "The sales team will be awarded a bonus _____ they reach their targets.",
    questionVi:
      "Đội ngũ bán hàng sẽ được thưởng một khoản tiền thưởng _____ họ đạt được mục tiêu của mình.",
    options: [
      { option: "as soon as", isCorrect: true },
      { option: "as long as", isCorrect: false },
      { option: "whether", isCorrect: false },
      { option: "rather than", isCorrect: false },
    ],
    explanationVi:
      "Liên từ 'as soon as' chỉ thời điểm ngay sau khi một sự kiện xảy ra.",
    category: "Conjunctions",
  },
  {
    id: "B2-1935",
    questionEn:
      "The legal advisor warned that several clauses in the agreement are _____.",
    questionVi:
      "Cố vấn pháp lý cảnh báo rằng một số điều khoản trong thỏa thuận là _____.",
    options: [
      { option: "ambiguity", isCorrect: false },
      { option: "ambiguous", isCorrect: true },
      { option: "ambiguously", isCorrect: false },
      { option: "ambition", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ to be 'are' cần một tính từ. 'Ambiguous' (mơ hồ/không rõ ràng).",
    category: "Adjectives",
  },
  {
    id: "B2-1936",
    questionEn:
      "The construction project was delayed due to _____ weather conditions.",
    questionVi: "Dự án xây dựng đã bị trì hoãn do điều kiện thời tiết _____.",
    options: [
      { option: "adverse", isCorrect: true },
      { option: "adversely", isCorrect: false },
      { option: "adversity", isCorrect: false },
      { option: "adversary", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'weather conditions'. 'Adverse' (bất lợi/khắc nghiệt).",
    category: "Adjectives",
  },
  {
    id: "B2-1937",
    questionEn:
      "The internal audit will examine whether company resources are being used _____.",
    questionVi:
      "Cuộc kiểm toán nội bộ sẽ kiểm tra xem các nguồn lực của công ty có đang được sử dụng _____ hay không.",
    options: [
      { option: "efficient", isCorrect: false },
      { option: "efficiency", isCorrect: false },
      { option: "efficiently", isCorrect: true },
      { option: "efficientness", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ bị động 'being used'. 'Efficiently' (một cách hiệu quả).",
    category: "Adverbs",
  },
  {
    id: "B2-1938",
    questionEn:
      "The CEO emphasizes the importance of _____ a positive work environment.",
    questionVi:
      "CEO nhấn mạnh tầm quan trọng của việc _____ một môi trường làm việc tích cực.",
    options: [
      { option: "foster", isCorrect: false },
      { option: "fostering", isCorrect: true },
      { option: "fostered", isCorrect: false },
      { option: "fosters", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'of' cần một V-ing. 'Fostering' (nuôi dưỡng/thúc đẩy).",
    category: "Gerunds",
  },
  {
    id: "B2-1939",
    questionEn:
      "The company's success is _____ due to the hard work and dedication of its employees.",
    questionVi:
      "Thành công của công ty là _____ nhờ vào sự chăm chỉ và tận tụy của nhân viên.",
    options: [
      { option: "large", isCorrect: false },
      { option: "largest", isCorrect: false },
      { option: "largely", isCorrect: true },
      { option: "largeness", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'largely' (phần lớn/chủ yếu) bổ nghĩa cho cụm 'due to'.",
    category: "Adverbs",
  },
  {
    id: "B2-1940",
    questionEn:
      "The HR director will be conducting interviews all day, _____ please hold all calls.",
    questionVi:
      "Giám đốc nhân sự sẽ thực hiện các cuộc phỏng vấn cả ngày, _____ vui lòng giữ tất cả các cuộc gọi.",
    options: [
      { option: "so", isCorrect: true },
      { option: "but", isCorrect: false },
      { option: "yet", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Liên từ 'so' (vì vậy) nối hai mệnh đề độc lập chỉ kết quả.",
    category: "Conjunctions",
  },
  {
    id: "B2-1941",
    questionEn:
      "The newly implemented system is much more _____ than the previous one.",
    questionVi:
      "Hệ thống vừa được triển khai _____ hơn nhiều so với hệ thống trước đó.",
    options: [
      { option: "reliable", isCorrect: true },
      { option: "reliability", isCorrect: false },
      { option: "reliably", isCorrect: false },
      { option: "relied", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh hơn với tính từ dài: be + more + adj + than. 'Reliable' (đáng tin cậy).",
    category: "Comparisons",
  },
  {
    id: "B2-1942",
    questionEn:
      "The project manager decided to _____ the tasks among the team members based on their skills.",
    questionVi:
      "Quản lý dự án đã quyết định _____ các nhiệm vụ giữa các thành viên nhóm dựa trên kỹ năng của họ.",
    options: [
      { option: "distribute", isCorrect: true },
      { option: "distribution", isCorrect: false },
      { option: "distributive", isCorrect: false },
      { option: "distributed", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decided to' cần một động từ nguyên mẫu. 'Distribute' (phân chia/phân phối).",
    category: "Verb Forms",
  },
  {
    id: "B2-1943",
    questionEn:
      "The marketing team must work together to create a _____ identity for the brand.",
    questionVi:
      "Đội ngũ marketing phải làm việc cùng nhau để tạo ra một danh tính _____ cho thương hiệu.",
    options: [
      { option: "consistent", isCorrect: true },
      { option: "consistently", isCorrect: false },
      { option: "consistency", isCorrect: false },
      { option: "consisted", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'identity'. 'Consistent' (nhất quán).",
    category: "Adjectives",
  },
  {
    id: "B2-1944",
    questionEn:
      "The manager has requested that we _____ the client's proposal as soon as possible.",
    questionVi:
      "Quản lý đã yêu cầu chúng tôi _____ đề xuất của khách hàng càng sớm càng tốt.",
    options: [
      { option: "evaluate", isCorrect: true },
      { option: "evaluation", isCorrect: false },
      { option: "evaluative", isCorrect: false },
      { option: "evaluates", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định: request that + S + V-bare. 'Evaluate' (đánh giá).",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1945",
    questionEn:
      "The company's reputation for _____ has attracted many top-tier job applicants.",
    questionVi:
      "Danh tiếng của công ty về sự _____ đã thu hút nhiều ứng viên xin việc hàng đầu.",
    options: [
      { option: "innovate", isCorrect: false },
      { option: "innovation", isCorrect: true },
      { option: "innovative", isCorrect: false },
      { option: "innovatively", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'for' cần một danh từ. 'Innovation' (sự đổi mới/sáng tạo).",
    category: "Nouns",
  },
  {
    id: "B2-1946",
    questionEn:
      "The project was finished ahead of schedule _____ the hard work of the entire team.",
    questionVi:
      "Dự án đã được hoàn thành trước thời hạn _____ sự làm việc chăm chỉ của toàn bộ nhóm.",
    options: [
      { option: "thanks to", isCorrect: true },
      { option: "in case of", isCorrect: false },
      { option: "instead of", isCorrect: false },
      { option: "prior to", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'thanks to' (nhờ có) dùng để chỉ nguyên nhân có kết quả tích cực.",
    category: "Prepositions",
  },
  {
    id: "B2-1947",
    questionEn:
      "The supervisor was extremely _____ of the team's accomplishments this quarter.",
    questionVi:
      "Người giám sát cực kỳ _____ về những thành tựu của nhóm trong quý này.",
    options: [
      { option: "proud", isCorrect: true },
      { option: "pride", isCorrect: false },
      { option: "proudly", isCorrect: false },
      { option: "priding", isCorrect: false },
    ],
    explanationVi:
      "Sau 'was extremely' cần một tính từ. 'Proud of' (tự hào về).",
    category: "Adjectives",
  },
  {
    id: "B2-1948",
    questionEn:
      "The new interns are expected to be _____ to the needs of our clients.",
    questionVi:
      "Các thực tập sinh mới được kỳ vọng phải _____ với các nhu cầu của khách hàng của chúng tôi.",
    options: [
      { option: "responsive", isCorrect: true },
      { option: "response", isCorrect: false },
      { option: "responsiveness", isCorrect: false },
      { option: "respond", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'be + responsive to' (phản hồi/đáp ứng lại đối với).",
    category: "Adjectives",
  },
  {
    id: "B2-1949",
    questionEn:
      "The administrative staff handles the _____ tasks such as filing and data entry.",
    questionVi:
      "Nhân viên hành chính xử lý các nhiệm vụ _____ như lưu trữ hồ sơ và nhập dữ liệu.",
    options: [
      { option: "routine", isCorrect: true },
      { option: "routinely", isCorrect: false },
      { option: "route", isCorrect: false },
      { option: "routed", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'routine' (thông thường/hàng ngày) bổ nghĩa cho danh từ 'tasks'.",
    category: "Adjectives",
  },
  {
    id: "B2-1950",
    questionEn:
      "The client asked for several _____ to be made to the architectural drawings.",
    questionVi:
      "Khách hàng đã yêu cầu một vài _____ được thực hiện đối với các bản vẽ kiến trúc.",
    options: [
      { option: "modifications", isCorrect: true },
      { option: "modify", isCorrect: false },
      { option: "modified", isCorrect: false },
      { option: "modifying", isCorrect: false },
    ],
    explanationVi:
      "Sau 'several' cần một danh từ số nhiều. 'Modifications' (những sự sửa đổi).",
    category: "Nouns",
  },
  {
    id: "B2-1951",
    questionEn:
      "The CEO believes that current market conditions are _____ for expanding the business overseas.",
    questionVi:
      "CEO tin rằng điều kiện thị trường hiện tại là _____ để mở rộng kinh doanh ra nước ngoài.",
    options: [
      { option: "favorable", isCorrect: true },
      { option: "favor", isCorrect: false },
      { option: "favorite", isCorrect: false },
      { option: "favorably", isCorrect: false },
    ],
    explanationVi: "Sau 'are' cần một tính từ. 'Favorable' (thuận lợi).",
    category: "Adjectives",
  },
  {
    id: "B2-1952",
    questionEn:
      "Employees are not allowed to use office equipment for personal tasks without _____.",
    questionVi:
      "Nhân viên không được phép sử dụng thiết bị văn phòng cho các nhiệm vụ cá nhân mà không có _____.",
    options: [
      { option: "authorize", isCorrect: false },
      { option: "authorization", isCorrect: true },
      { option: "authorized", isCorrect: false },
      { option: "authorizing", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'without' cần một danh từ. 'Authorization' (sự cho phép/ủy quyền).",
    category: "Nouns",
  },
  {
    id: "B2-1953",
    questionEn:
      "The marketing director is known for her _____ approach to solving problems.",
    questionVi:
      "Giám đốc marketing nổi tiếng với cách tiếp cận _____ để giải quyết vấn đề.",
    options: [
      { option: "innovation", isCorrect: false },
      { option: "innovative", isCorrect: true },
      { option: "innovate", isCorrect: false },
      { option: "innovatively", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ bổ nghĩa cho danh từ 'approach'. 'Innovative' (đổi mới/sáng tạo).",
    category: "Adjectives",
  },
  {
    id: "B2-1954",
    questionEn:
      "The consultant provided several _____ for improving the company's internal communication.",
    questionVi:
      "Nhà tư vấn đã cung cấp một vài _____ để cải thiện truyền thông nội bộ của công ty.",
    options: [
      { option: "recommendations", isCorrect: true },
      { option: "recommend", isCorrect: false },
      { option: "recommended", isCorrect: false },
      { option: "recommending", isCorrect: false },
    ],
    explanationVi:
      "Sau 'several' cần một danh từ số nhiều. 'Recommendations' (những lời khuyên/đề xuất).",
    category: "Nouns",
  },
  {
    id: "B2-1955",
    questionEn:
      "The technician will examine the equipment to ensure it is functioning _____.",
    questionVi:
      "Kỹ thuật viên sẽ kiểm tra thiết bị để đảm bảo nó đang hoạt động _____.",
    options: [
      { option: "proper", isCorrect: false },
      { option: "properly", isCorrect: true },
      { option: "propriety", isCorrect: false },
      { option: "properness", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho động từ 'functioning'. 'Properly' (một cách đúng đắn/bình thường).",
    category: "Adverbs",
  },
  {
    id: "B2-1956",
    questionEn:
      "The team worked together _____ to complete the project before the deadline.",
    questionVi:
      "Nhóm đã làm việc cùng nhau _____ để hoàn thành dự án trước thời hạn.",
    options: [
      { option: "harmonious", isCorrect: false },
      { option: "harmoniously", isCorrect: true },
      { option: "harmony", isCorrect: false },
      { option: "harmonize", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ bổ nghĩa cho cụm động từ 'worked together'. 'Harmoniously' (một cách hòa hợp).",
    category: "Adverbs",
  },
  {
    id: "B2-1957",
    questionEn:
      "The financial department is in the process of _____ the budget for the next year.",
    questionVi:
      "Bộ phận tài chính đang trong quá trình _____ ngân sách cho năm tới.",
    options: [
      { option: "revising", isCorrect: true },
      { option: "revise", isCorrect: false },
      { option: "revision", isCorrect: false },
      { option: "revised", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'of' cần một V-ing. 'Revising' (xem xét lại/điều chỉnh).",
    category: "Gerunds",
  },
  {
    id: "B2-1958",
    questionEn:
      "The board of directors is currently _____ candidates for the position of Chief Financial Officer.",
    questionVi:
      "Hội đồng quản trị hiện đang _____ các ứng cử viên cho vị trí Giám đốc Tài chính.",
    options: [
      { option: "evaluating", isCorrect: true },
      { option: "evaluation", isCorrect: false },
      { option: "evaluate", isCorrect: false },
      { option: "evaluated", isCorrect: false },
    ],
    explanationVi:
      "Cần một động từ ở dạng V-ing sau 'is currently' để tạo thành thì hiện tại tiếp diễn.",
    category: "Word Forms",
  },
  {
    id: "B2-1959",
    questionEn:
      "Mr. Henderson received an award for his _____ contribution to the company's research and development department.",
    questionVi:
      "Ông Henderson đã nhận được giải thưởng cho sự đóng góp _____ của mình cho bộ phận nghiên cứu và phát triển của công ty.",
    options: [
      { option: "exceptional", isCorrect: true },
      { option: "exceptionally", isCorrect: false },
      { option: "exception", isCorrect: false },
      { option: "except", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'contribution' để bổ nghĩa cho nó.",
    category: "Word Forms",
  },
  {
    id: "B2-1960",
    questionEn:
      "_____ the high cost of production, the company managed to maintain its profit margins.",
    questionVi:
      "_____ chi phí sản xuất cao, công ty vẫn duy trì được biên lợi nhuận.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Even though", isCorrect: false },
    ],
    explanationVi:
      "'Despite' được theo sau bởi một cụm danh từ, trong khi 'Although/Even though' theo sau bởi một mệnh đề.",
    category: "Conjunctions",
  },
  {
    id: "B2-1961",
    questionEn:
      "Employees are encouraged to provide feedback _____ the new software update is implemented.",
    questionVi:
      "Nhân viên được khuyến khích đưa ra phản hồi _____ bản cập nhật phần mềm mới được thực hiện.",
    options: [
      { option: "once", isCorrect: true },
      { option: "until", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "while", isCorrect: false },
    ],
    explanationVi:
      "'Once' (một khi) dùng như một liên từ chỉ thời gian, phù hợp với ngữ cảnh phản hồi sau khi thực hiện.",
    category: "Conjunctions",
  },
  {
    id: "B2-1962",
    questionEn:
      "The marketing team has developed a strategy that is _____ more effective than the previous one.",
    questionVi:
      "Đội ngũ tiếp thị đã phát triển một chiến lược _____ hiệu quả hơn nhiều so với chiến lược trước đó.",
    options: [
      { option: "significantly", isCorrect: true },
      { option: "significant", isCorrect: false },
      { option: "significance", isCorrect: false },
      { option: "signify", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'significantly' dùng để bổ nghĩa cho tính từ so sánh 'more effective'.",
    category: "Word Forms",
  },
  {
    id: "B2-1963",
    questionEn:
      "All visitors must present their identification _____ the security gate before entering the premises.",
    questionVi:
      "Tất cả khách tham quan phải trình thẻ căn cước _____ cổng an ninh trước khi vào khuôn viên.",
    options: [
      { option: "at", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'at' được dùng để chỉ một địa điểm cụ thể (the security gate).",
    category: "Prepositions",
  },
  {
    id: "B2-1964",
    questionEn:
      "The technician will repair the server as _____ as the necessary parts arrive.",
    questionVi:
      "Kỹ thuật viên sẽ sửa chữa máy chủ _____ ngay khi các bộ phận cần thiết được giao đến.",
    options: [
      { option: "soon", isCorrect: true },
      { option: "fast", isCorrect: false },
      { option: "quickly", isCorrect: false },
      { option: "early", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'as soon as' có nghĩa là 'ngay khi'.",
    category: "Conjunctions",
  },
  {
    id: "B2-1965",
    questionEn:
      "The CEO requested that all department heads _____ a meeting to discuss the annual budget.",
    questionVi:
      "Giám đốc điều hành đã yêu cầu tất cả các trưởng bộ phận _____ một cuộc họp để thảo luận về ngân sách hàng năm.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "attends", isCorrect: false },
      { option: "attended", isCorrect: false },
      { option: "attending", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với động từ 'request': S + request + that + S + V(nguyên thể).",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1966",
    questionEn:
      "Due to the economic downturn, many corporations are looking for ways to reduce their _____ expenses.",
    questionVi:
      "Do sự suy thoái kinh tế, nhiều tập đoàn đang tìm cách cắt giảm các khoản chi phí _____ của họ.",
    options: [
      { option: "operational", isCorrect: true },
      { option: "operation", isCorrect: false },
      { option: "operator", isCorrect: false },
      { option: "operate", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ 'operational' (thuộc về vận hành) để bổ nghĩa cho danh từ 'expenses'.",
    category: "Word Forms",
  },
  {
    id: "B2-1967",
    questionEn:
      "Please ensure that the attached document is signed _____ by both parties involved in the contract.",
    questionVi:
      "Vui lòng đảm bảo rằng tài liệu đính kèm được ký _____ bởi cả hai bên liên quan trong hợp đồng.",
    options: [
      { option: "appropriately", isCorrect: true },
      { option: "appropriate", isCorrect: false },
      { option: "appropriateness", isCorrect: false },
      { option: "appropriated", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'appropriately' (một cách thích hợp) bổ nghĩa cho động từ phân từ 'signed'.",
    category: "Word Forms",
  },
  {
    id: "B2-1968",
    questionEn:
      "The renovations will be completed _____ schedule, allowing the staff to move back into the office early.",
    questionVi:
      "Việc cải tạo sẽ được hoàn thành _____ lịch trình, cho phép nhân viên chuyển lại văn phòng sớm.",
    options: [
      { option: "ahead of", isCorrect: true },
      { option: "prior to", isCorrect: false },
      { option: "behind", isCorrect: false },
      { option: "after", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ 'ahead of schedule' có nghĩa là 'trước thời hạn/lịch trình'.",
    category: "Prepositions",
  },
  {
    id: "B2-1969",
    questionEn:
      "Ms. Patel is the most _____ candidate we have interviewed so far for the accounting position.",
    questionVi:
      "Cô Patel là ứng cử viên _____ nhất mà chúng tôi từng phỏng vấn cho vị trí kế toán.",
    options: [
      { option: "qualified", isCorrect: true },
      { option: "qualifying", isCorrect: false },
      { option: "qualify", isCorrect: false },
      { option: "qualification", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'qualified' (có đủ trình độ/năng lực) dùng để mô tả đặc điểm của một người.",
    category: "Word Forms",
  },
  {
    id: "B2-1970",
    questionEn:
      "The company's output has increased by 15% _____ the introduction of new automation technology.",
    questionVi:
      "Sản lượng của công ty đã tăng 15% _____ việc đưa vào công nghệ tự động hóa mới.",
    options: [
      { option: "since", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "from", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi:
      "'Since' được dùng với thì hiện tại hoàn thành để chỉ mốc thời gian sự việc bắt đầu.",
    category: "Prepositions",
  },
  {
    id: "B2-1971",
    questionEn:
      "The manager was impressed by how _____ the new employee handled the difficult customer.",
    questionVi:
      "Người quản lý đã rất ấn tượng bởi cách nhân viên mới xử lý khách hàng khó tính một cách _____.",
    options: [
      { option: "efficiently", isCorrect: true },
      { option: "efficient", isCorrect: false },
      { option: "efficiency", isCorrect: false },
      { option: "efficacy", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ 'efficiently' để bổ nghĩa cho động từ 'handled'.",
    category: "Word Forms",
  },
  {
    id: "B2-1972",
    questionEn:
      "The legal department is reviewing the contract to ensure _____ with international regulations.",
    questionVi:
      "Bộ phận pháp lý đang xem xét hợp đồng để đảm bảo sự _____ với các quy định quốc tế.",
    options: [
      { option: "compliance", isCorrect: true },
      { option: "compliant", isCorrect: false },
      { option: "comply", isCorrect: false },
      { option: "complies", isCorrect: false },
    ],
    explanationVi:
      "Sau ngoại động từ 'ensure' cần một danh từ. 'Compliance' (sự tuân thủ) đi với giới từ 'with'.",
    category: "Word Forms",
  },
  {
    id: "B2-1973",
    questionEn:
      "The workshop will focus on ways to _____ productivity in the workplace.",
    questionVi:
      "Buổi hội thảo sẽ tập trung vào các cách thức để _____ năng suất tại nơi làm việc.",
    options: [
      { option: "enhance", isCorrect: true },
      { option: "enlarging", isCorrect: false },
      { option: "enhancement", isCorrect: false },
      { option: "enhanced", isCorrect: false },
    ],
    explanationVi: "Sau 'to' trong cụm 'ways to' cần một động từ nguyên thể.",
    category: "Vocabulary",
  },
  {
    id: "B2-1974",
    questionEn:
      "Investors are cautioned that market conditions can be _____ unpredictable.",
    questionVi:
      "Các nhà đầu tư được cảnh báo rằng các điều kiện thị trường có thể _____ không thể dự đoán được.",
    options: [
      { option: "highly", isCorrect: true },
      { option: "height", isCorrect: false },
      { option: "high", isCorrect: false },
      { option: "higher", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'highly' dùng để nhấn mạnh tính từ 'unpredictable'.",
    category: "Word Forms",
  },
  {
    id: "B2-1975",
    questionEn:
      "The new marketing campaign was _____ successful, exceeding all initial expectations.",
    questionVi:
      "Chiến dịch tiếp thị mới đã _____ thành công, vượt qua mọi kỳ vọng ban đầu.",
    options: [
      { option: "remarkably", isCorrect: true },
      { option: "remarkable", isCorrect: false },
      { option: "remark", isCorrect: false },
      { option: "remarked", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'remarkably' (một cách đáng kể/xuất sắc) bổ nghĩa cho tính từ 'successful'.",
    category: "Word Forms",
  },
  {
    id: "B2-1976",
    questionEn:
      "Please contact Mr. Kim directly if you have any questions _____ the project timeline.",
    questionVi:
      "Vui lòng liên hệ trực tiếp với ông Kim nếu bạn có bất kỳ câu hỏi nào _____ tiến độ dự án.",
    options: [
      { option: "regarding", isCorrect: true },
      { option: "regards", isCorrect: false },
      { option: "regard", isCorrect: false },
      { option: "regardless", isCorrect: false },
    ],
    explanationVi: "'Regarding' là một giới từ có nghĩa là 'về/liên quan đến'.",
    category: "Prepositions",
  },
  {
    id: "B2-1977",
    questionEn:
      "The factory has implemented a new safety protocol to _____ the risk of workplace accidents.",
    questionVi:
      "Nhà máy đã thực hiện một quy trình an toàn mới để _____ rủi ro tai nạn lao động.",
    options: [
      { option: "minimize", isCorrect: true },
      { option: "minimum", isCorrect: false },
      { option: "minimal", isCorrect: false },
      { option: "minimized", isCorrect: false },
    ],
    explanationVi:
      "Cần một động từ nguyên thể chỉ mục đích sau 'to'. 'Minimize' có nghĩa là giảm thiểu.",
    category: "Vocabulary",
  },
  {
    id: "B2-1978",
    questionEn:
      "Anyone _____ to attend the seminar must register by Friday afternoon.",
    questionVi:
      "Bất kỳ ai _____ tham dự buổi hội thảo phải đăng ký trước chiều thứ Sáu.",
    options: [
      { option: "wishing", isCorrect: true },
      { option: "wishes", isCorrect: false },
      { option: "wish", isCorrect: false },
      { option: "wished", isCorrect: false },
    ],
    explanationVi:
      "Dùng mệnh đề quan hệ rút gọn dạng chủ động (V-ing): 'Anyone who wishes' thành 'Anyone wishing'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1979",
    questionEn:
      "The sales report indicates that the revenue for this quarter is _____ higher than last year.",
    questionVi:
      "Báo cáo bán hàng chỉ ra rằng doanh thu trong quý này _____ cao hơn so với năm ngoái.",
    options: [
      { option: "slightly", isCorrect: true },
      { option: "slight", isCorrect: false },
      { option: "slighted", isCorrect: false },
      { option: "slighting", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'slightly' dùng để bổ nghĩa cho tính từ so sánh 'higher'.",
    category: "Word Forms",
  },
  {
    id: "B2-1980",
    questionEn:
      "_____ the feedback from the initial testing phase, the developers decided to modify the user interface.",
    questionVi:
      "_____ phản hồi từ giai đoạn thử nghiệm ban đầu, các nhà phát triển quyết định sửa đổi giao diện người dùng.",
    options: [
      { option: "Based on", isCorrect: true },
      { option: "In case of", isCorrect: false },
      { option: "As long as", isCorrect: false },
      { option: "Instead of", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'Based on' (dựa trên) phù hợp để chỉ căn cứ cho hành động.",
    category: "Prepositions",
  },
  {
    id: "B2-1981",
    questionEn:
      "The company offers a generous benefits package to attract and _____ talented employees.",
    questionVi:
      "Công ty cung cấp một gói phúc lợi hào phóng để thu hút và _____ nhân viên tài năng.",
    options: [
      { option: "retain", isCorrect: true },
      { option: "retention", isCorrect: false },
      { option: "retaining", isCorrect: false },
      { option: "retained", isCorrect: false },
    ],
    explanationVi:
      "Cần một động từ nguyên thể song song với 'attract' (thu hút và giữ chân - retain).",
    category: "Vocabulary",
  },
  {
    id: "B2-1982",
    questionEn:
      "The board members are still divided _____ which architectural firm to hire for the expansion project.",
    questionVi:
      "Các thành viên hội đồng quản trị vẫn còn chia rẽ _____ công ty kiến trúc nào sẽ được thuê cho dự án mở rộng.",
    options: [
      { option: "over", isCorrect: true },
      { option: "between", isCorrect: false },
      { option: "within", isCorrect: false },
      { option: "among", isCorrect: false },
    ],
    explanationVi:
      "'Be divided over something' có nghĩa là bất đồng quan điểm về việc gì.",
    category: "Prepositions",
  },
  {
    id: "B2-1983",
    questionEn:
      "The new software is designed to be _____ with various operating systems.",
    questionVi:
      "Phần mềm mới được thiết kế để _____ tương thích với nhiều hệ điều hành khác nhau.",
    options: [
      { option: "compatible", isCorrect: true },
      { option: "compatibility", isCorrect: false },
      { option: "competition", isCorrect: false },
      { option: "competitive", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'be compatible with' có nghĩa là tương thích với cái gì.",
    category: "Vocabulary",
  },
  {
    id: "B2-1984",
    questionEn:
      "Environmental regulations require that chemical waste _____ disposed of properly.",
    questionVi:
      "Các quy định về môi trường yêu cầu chất thải hóa học _____ được xử lý một cách hợp lý.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'require that': S + require + that + S + (should) be + V3.",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1985",
    questionEn:
      "The public relations officer issued a statement to _____ the rumors spreading on social media.",
    questionVi:
      "Cán bộ quan hệ công chúng đã đưa ra một tuyên bố để _____ những tin đồn đang lan truyền trên mạng xã hội.",
    options: [
      { option: "clarify", isCorrect: true },
      { option: "clarity", isCorrect: false },
      { option: "clearance", isCorrect: false },
      { option: "clarifying", isCorrect: false },
    ],
    explanationVi:
      "Cần một động từ nguyên thể chỉ mục đích sau 'to'. 'Clarify' có nghĩa là làm rõ.",
    category: "Vocabulary",
  },
  {
    id: "B2-1986",
    questionEn:
      "Applicants must demonstrate a _____ level of proficiency in at least two languages.",
    questionVi:
      "Các ứng viên phải chứng minh một mức độ thành thạo _____ ít nhất hai ngôn ngữ.",
    options: [
      { option: "high", isCorrect: true },
      { option: "highly", isCorrect: false },
      { option: "height", isCorrect: false },
      { option: "higher", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ đứng trước danh từ 'level'.",
    category: "Word Forms",
  },
  {
    id: "B2-1987",
    questionEn:
      "The warranty does not cover damage caused by _____ use of the product.",
    questionVi:
      "Bảo hành không bao gồm hư hỏng do việc sử dụng sản phẩm _____.",
    options: [
      { option: "improper", isCorrect: true },
      { option: "improperly", isCorrect: false },
      { option: "improperness", isCorrect: false },
      { option: "propriety", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ 'improper' (không đúng cách) để bổ nghĩa cho danh từ 'use'.",
    category: "Word Forms",
  },
  {
    id: "B2-1988",
    questionEn:
      "The financial advisor suggested that the portfolio _____ to reduce exposure to market volatility.",
    questionVi:
      "Cố vấn tài chính đề nghị rằng danh mục đầu tư _____ để giảm thiểu sự ảnh hưởng của biến động thị trường.",
    options: [
      { option: "be diversified", isCorrect: true },
      { option: "is diversified", isCorrect: false },
      { option: "was diversified", isCorrect: false },
      { option: "diversifies", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định bị động: S + suggest + that + S + (should) be + V3.",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-1989",
    questionEn:
      "The research findings will be published _____ in a leading scientific journal.",
    questionVi:
      "Các kết quả nghiên cứu sẽ được xuất bản _____ trên một tạp chí khoa học hàng đầu.",
    options: [
      { option: "exclusively", isCorrect: true },
      { option: "exclusive", isCorrect: false },
      { option: "exclusivity", isCorrect: false },
      { option: "exclude", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'exclusively' (độc quyền/dành riêng) bổ nghĩa cho động từ 'published'.",
    category: "Word Forms",
  },
  {
    id: "B2-1990",
    questionEn:
      "The negotiations were temporarily halted _____ disagreement over the pricing structure.",
    questionVi:
      "Các cuộc đàm phán tạm thời bị dừng lại _____ sự bất đồng về cấu trúc giá cả.",
    options: [
      { option: "due to", isCorrect: true },
      { option: "because", isCorrect: false },
      { option: "in addition to", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
    ],
    explanationVi:
      "'Due to' được theo sau bởi một cụm danh từ để chỉ nguyên nhân.",
    category: "Prepositions",
  },
  {
    id: "B2-1991",
    questionEn:
      "The committee is _____ of representatives from various departments within the organization.",
    questionVi:
      "Ủy ban _____ bao gồm các đại diện từ nhiều bộ phận khác nhau trong tổ chức.",
    options: [
      { option: "composed", isCorrect: true },
      { option: "comprised", isCorrect: false },
      { option: "consisted", isCorrect: false },
      { option: "containing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'be composed of' có nghĩa là bao gồm/được cấu thành từ.",
    category: "Passive Voice",
  },
  {
    id: "B2-1992",
    questionEn:
      "Most of the tasks _____ by the assistant were completed before the deadline.",
    questionVi:
      "Hầu hết các nhiệm vụ _____ bởi trợ lý đã hoàn thành trước thời hạn.",
    options: [
      { option: "assigned", isCorrect: true },
      { option: "assigning", isCorrect: false },
      { option: "assign", isCorrect: false },
      { option: "assigns", isCorrect: false },
    ],
    explanationVi:
      "Mệnh đề quan hệ rút gọn dạng bị động: 'tasks (which were) assigned'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-1993",
    questionEn:
      "The CEO emphasized the importance of _____ clear communication between team members.",
    questionVi:
      "Giám đốc điều hành nhấn mạnh tầm quan trọng của việc _____ giao tiếp rõ ràng giữa các thành viên trong nhóm.",
    options: [
      { option: "maintaining", isCorrect: true },
      { option: "maintenance", isCorrect: false },
      { option: "maintain", isCorrect: false },
      { option: "maintained", isCorrect: false },
    ],
    explanationVi:
      "Sau giới từ 'of' cần một danh động từ (V-ing) khi có tân ngữ theo sau.",
    category: "Verbals",
  },
  {
    id: "B2-1994",
    questionEn:
      "The technical support team is available 24/7 to solve any issues that may _____.",
    questionVi:
      "Đội ngũ hỗ trợ kỹ thuật sẵn sàng 24/7 để giải quyết bất kỳ vấn đề nào có thể _____.",
    options: [
      { option: "arise", isCorrect: true },
      { option: "raise", isCorrect: false },
      { option: "aroused", isCorrect: false },
      { option: "rise", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'arise' (nảy sinh) là nội động từ, thường dùng cho các vấn đề hoặc tình huống.",
    category: "Vocabulary",
  },
  {
    id: "B2-1995",
    questionEn:
      "The new bypass road will significantly _____ the travel time between the two cities.",
    questionVi:
      "Con đường tránh mới sẽ đáng kể _____ thời gian di chuyển giữa hai thành phố.",
    options: [
      { option: "reduce", isCorrect: true },
      { option: "reduction", isCorrect: false },
      { option: "reducing", isCorrect: false },
      { option: "reducer", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ khuyết thiếu 'will' cần một động từ nguyên thể.",
    category: "Word Forms",
  },
  {
    id: "B2-1996",
    questionEn:
      "The project was delayed _____ unexpected complications during the assembly phase.",
    questionVi:
      "Dự án đã bị trì hoãn _____ những biến chứng bất ngờ trong giai đoạn lắp ráp.",
    options: [
      { option: "owing to", isCorrect: true },
      { option: "instead of", isCorrect: false },
      { option: "regardless of", isCorrect: false },
      { option: "as for", isCorrect: false },
    ],
    explanationVi: "'Owing to' là giới từ chỉ nguyên nhân, tương tự 'due to'.",
    category: "Prepositions",
  },
  {
    id: "B2-1997",
    questionEn:
      "The marketing director is looking for a person who has _____ experience in social media advertising.",
    questionVi:
      "Giám đốc tiếp thị đang tìm kiếm một người có kinh nghiệm _____ trong lĩnh vực quảng cáo trên mạng xã hội.",
    options: [
      { option: "extensive", isCorrect: true },
      { option: "extensively", isCorrect: false },
      { option: "extent", isCorrect: false },
      { option: "extend", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'extensive' (sâu rộng) bổ nghĩa cho danh từ 'experience'.",
    category: "Word Forms",
  },
  {
    id: "B2-1998",
    questionEn:
      "The budget proposal must be approved by the board _____ it can be implemented.",
    questionVi:
      "Đề xuất ngân sách phải được hội đồng thông qua _____ nó có thể được thực hiện.",
    options: [
      { option: "before", isCorrect: true },
      { option: "while", isCorrect: false },
      { option: "as", isCorrect: false },
      { option: "during", isCorrect: false },
    ],
    explanationVi: "Dùng liên từ 'before' để chỉ trình tự thời gian.",
    category: "Conjunctions",
  },
  {
    id: "B2-1999",
    questionEn:
      "The interns are finding it difficult to _____ with the fast pace of the environment.",
    questionVi:
      "Các thực tập sinh đang thấy khó khăn để _____ với nhịp độ nhanh của môi trường làm việc.",
    options: [
      { option: "keep up", isCorrect: true },
      { option: "get along", isCorrect: false },
      { option: "run out", isCorrect: false },
      { option: "put up", isCorrect: false },
    ],
    explanationVi: "Cụm động từ 'keep up with' có nghĩa là theo kịp.",
    category: "Vocabulary",
  },
  {
    id: "B2-2000",
    questionEn:
      "The newly hired analysts are expected to produce results _____ the end of their probationary period.",
    questionVi:
      "Các nhà phân tích mới được thuê dự kiến sẽ tạo ra kết quả _____ cuối thời gian thử việc của họ.",
    options: [
      { option: "by", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "within", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'by' chỉ thời hạn (trước hoặc tại một thời điểm nào đó).",
    category: "Prepositions",
  },
  {
    id: "B2-2001",
    questionEn:
      "Please be _____ that the cafeteria will be closed for maintenance this Friday.",
    questionVi:
      "Vui lòng _____ rằng căng tin sẽ đóng cửa để bảo trì vào thứ Sáu tuần này.",
    options: [
      { option: "advised", isCorrect: true },
      { option: "advise", isCorrect: false },
      { option: "advisable", isCorrect: false },
      { option: "advising", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'Please be advised that...' là một cách nói trang trọng để thông báo.",
    category: "Passive Voice",
  },
  {
    id: "B2-2002",
    questionEn:
      "The technical manual contains _____ instructions on how to set up the network.",
    questionVi:
      "Sổ tay kỹ thuật bao gồm hướng dẫn _____ về cách thiết lập mạng.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensively", isCorrect: false },
      { option: "comprehend", isCorrect: false },
      { option: "comprehension", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'comprehensive' (toàn diện/chi tiết) bổ nghĩa cho danh từ 'instructions'.",
    category: "Word Forms",
  },
  {
    id: "B2-2003",
    questionEn:
      "The CEO decided to _____ the company's expansion plans until the market stabilizes.",
    questionVi:
      "Giám đốc điều hành đã quyết định _____ kế hoạch mở rộng của công ty cho đến khi thị trường ổn định.",
    options: [
      { option: "defer", isCorrect: true },
      { option: "defers", isCorrect: false },
      { option: "deferred", isCorrect: false },
      { option: "deferring", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decide to' cần một động từ nguyên thể. 'Defer' có nghĩa là hoãn lại.",
    category: "Vocabulary",
  },
  {
    id: "B2-2004",
    questionEn:
      "Customer satisfaction is _____ important for the long-term success of the business.",
    questionVi:
      "Sự hài lòng của khách hàng là _____ quan trọng đối với sự thành công lâu dài của doanh nghiệp.",
    options: [
      { option: "extremely", isCorrect: true },
      { option: "extreme", isCorrect: false },
      { option: "extremity", isCorrect: false },
      { option: "extremist", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'extremely' dùng để nhấn mạnh tính từ 'important'.",
    category: "Word Forms",
  },
  {
    id: "B2-2005",
    questionEn:
      "The new software is far more _____ than the one we were previously using.",
    questionVi:
      "Phần mềm kế toán mới hiệu quả _____ hơn nhiều so với phần mềm chúng ta đã sử dụng trước đây.",
    options: [
      { option: "efficient", isCorrect: true },
      { option: "efficiency", isCorrect: false },
      { option: "efficiently", isCorrect: false },
      { option: "efficiencies", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng sau 'more' trong cấu trúc so sánh hơn.",
    category: "Word Forms",
  },
  {
    id: "B2-2006",
    questionEn:
      "The sales representatives are required to submit their expense reports _____.",
    questionVi:
      "Các đại diện bán hàng được yêu cầu nộp báo cáo chi phí của họ _____.",
    options: [
      { option: "monthly", isCorrect: true },
      { option: "month", isCorrect: false },
      { option: "months", isCorrect: false },
      { option: "monthly's", isCorrect: false },
    ],
    explanationVi:
      "'Monthly' ở đây đóng vai trò là trạng từ chỉ tần suất (hàng tháng).",
    category: "Word Forms",
  },
  {
    id: "B2-2007",
    questionEn:
      "It is _____ that all staff members attend the safety briefing this afternoon.",
    questionVi:
      "Việc tất cả các nhân viên tham dự buổi hướng dẫn an toàn vào chiều nay là _____.",
    options: [
      { option: "imperative", isCorrect: true },
      { option: "imperatively", isCorrect: false },
      { option: "imperativeness", isCorrect: false },
      { option: "imperial", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ ở vị trí bổ ngữ sau 'It is'. 'Imperative' có nghĩa là bắt buộc/cấp thiết.",
    category: "Vocabulary",
  },
  {
    id: "B2-2008",
    questionEn:
      "The merger will create a company that is better positioned to _____ in the global market.",
    questionVi:
      "Việc sáp nhập sẽ tạo ra một công ty có vị thế tốt hơn để _____ trên thị trường toàn cầu.",
    options: [
      { option: "compete", isCorrect: true },
      { option: "competition", isCorrect: false },
      { option: "competitive", isCorrect: false },
      { option: "competently", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' nhắm mục đích cần một động từ nguyên thể. 'Compete' là cạnh tranh.",
    category: "Word Forms",
  },
  {
    id: "B2-2009",
    questionEn:
      "_____ several attempts to reach the client, we have not received any response.",
    questionVi:
      "_____ vài lần cố gắng liên lạc với khách hàng, chúng tôi vẫn chưa nhận được bất kỳ phản hồi nào.",
    options: [
      { option: "After", isCorrect: true },
      { option: "While", isCorrect: false },
      { option: "During", isCorrect: false },
      { option: "Already", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'After' phù hợp về nghĩa để chỉ trình tự các sự kiện.",
    category: "Prepositions",
  },
  {
    id: "B2-2010",
    questionEn:
      "The company's policy states that employees should not _____ any confidential information.",
    questionVi:
      "Chính sách của công ty quy định rằng nhân viên không được _____ bất kỳ thông tin mật nào.",
    options: [
      { option: "disclose", isCorrect: true },
      { option: "disclosure", isCorrect: false },
      { option: "disclosing", isCorrect: false },
      { option: "disclosed", isCorrect: false },
    ],
    explanationVi:
      "Sau động từ khuyết thiếu 'should' cần một động từ nguyên thể. 'Disclose' là tiết lộ.",
    category: "Word Forms",
  },
  {
    id: "B2-2011",
    questionEn:
      "The architectural firm submitted multiple _____ for the new museum project.",
    questionVi: "Công ty kiến trúc đã nộp nhiều _____ cho dự án bảo tàng mới.",
    options: [
      { option: "proposals", isCorrect: true },
      { option: "propose", isCorrect: false },
      { option: "proposed", isCorrect: false },
      { option: "proposing", isCorrect: false },
    ],
    explanationVi: "Sau tính từ 'multiple' cần một danh từ số nhiều.",
    category: "Word Forms",
  },
  {
    id: "B2-2012",
    questionEn:
      "The manager praised the team for their _____ in completing the project ahead of schedule.",
    questionVi:
      "Người quản lý đã khen ngợi nhóm vì _____ của họ trong việc hoàn thành dự án trước thời hạn.",
    options: [
      { option: "diligence", isCorrect: true },
      { option: "diligent", isCorrect: false },
      { option: "diligently", isCorrect: false },
      { option: "diligentness", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ sở hữu 'their' cần một danh từ. 'Diligence' có nghĩa là sự siêng năng.",
    category: "Word Forms",
  },
  {
    id: "B2-2013",
    questionEn:
      "The new regulations will _____ into effect starting the first of next month.",
    questionVi:
      "Các quy định mới sẽ _____ có hiệu lực bắt đầu từ ngày đầu tiên của tháng tới.",
    options: [
      { option: "come", isCorrect: true },
      { option: "go", isCorrect: false },
      { option: "make", isCorrect: false },
      { option: "get", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'come into effect/force' có nghĩa là có hiệu lực.",
    category: "Collocations",
  },
  {
    id: "B2-2014",
    questionEn:
      "The legal team is working _____ to resolve the patent dispute as quickly as possible.",
    questionVi:
      "Đội ngũ pháp lý đang làm việc _____ để giải quyết tranh chấp bằng sáng chế nhanh nhất có thể.",
    options: [
      { option: "diligently", isCorrect: true },
      { option: "diligence", isCorrect: false },
      { option: "diligent", isCorrect: false },
      { option: "diligently's", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ 'diligently' để bổ nghĩa cho động từ 'working'.",
    category: "Word Forms",
  },
  {
    id: "B2-2015",
    questionEn:
      "The seminar participants were given a packet _____ various informational brochures.",
    questionVi:
      "Các học viên tham gia hội thảo đã được đưa cho một gói _____ nhiều tập quảng cáo thông tin khác nhau.",
    options: [
      { option: "containing", isCorrect: true },
      { option: "contains", isCorrect: false },
      { option: "contained", isCorrect: false },
      { option: "contain", isCorrect: false },
    ],
    explanationVi:
      "Mệnh đề quan hệ rút gọn dạng chủ động: 'packet (which contained)'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-2016",
    questionEn:
      "The CEO's speech was so _____ that it motivated the entire staff to work harder.",
    questionVi:
      "Bài phát biểu của CEO _____ đến nỗi nó đã thúc đẩy toàn bộ nhân viên làm việc chăm chỉ hơn.",
    options: [
      { option: "inspiring", isCorrect: true },
      { option: "inspired", isCorrect: false },
      { option: "inspiration", isCorrect: false },
      { option: "inspire", isCorrect: false },
    ],
    explanationVi:
      "Dùng tính từ đuôi -ing 'inspiring' để mô tả tính chất của một sự vật (bài phát biểu).",
    category: "Word Forms",
  },
  {
    id: "B2-2017",
    questionEn:
      "Please make sure to _____ any errors in the report before submitting it.",
    questionVi:
      "Hãy đảm báo rằng bạn _____ bất kỳ lỗi nào trong báo cáo trước khi nộp.",
    options: [
      { option: "rectify", isCorrect: true },
      { option: "rectification", isCorrect: false },
      { option: "rectifying", isCorrect: false },
      { option: "rectified", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' cần một động từ nguyên thể. 'Rectify' có nghĩa là chấn chỉnh/sửa lỗi.",
    category: "Vocabulary",
  },
  {
    id: "B2-2018",
    questionEn:
      "The company's profits have risen _____ over the last three fiscal years.",
    questionVi:
      "Lợi nhuận của công ty đã tăng _____ trong ba năm tài chính vừa qua.",
    options: [
      { option: "steadily", isCorrect: true },
      { option: "steady", isCorrect: false },
      { option: "steadiness", isCorrect: false },
      { option: "steadying", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'steadily' (một cách đều đặn) bổ nghĩa cho động từ 'risen'.",
    category: "Word Forms",
  },
  {
    id: "B2-2019",
    questionEn:
      "The HR department is responsible _____ managing the recruitment process.",
    questionVi:
      "Bộ phận nhân sự có trách nhiệm _____ quản lý quy trình tuyển dụng.",
    options: [
      { option: "for", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Tính từ 'responsible' đi kèm giới từ 'for'.",
    category: "Prepositions",
  },
  {
    id: "B2-2020",
    questionEn:
      "The team had to _____ the meeting due to a conflict in the manager's schedule.",
    questionVi:
      "Nhóm đã phải _____ cuộc họp do có sự xung đột trong lịch trình của quản lý.",
    options: [
      { option: "postpone", isCorrect: true },
      { option: "postponement", isCorrect: false },
      { option: "postponing", isCorrect: false },
      { option: "postponed", isCorrect: false },
    ],
    explanationVi:
      "Cần một động từ nguyên thể sau 'had to'. 'Postpone' có nghĩa là trì hoãn.",
    category: "Word Forms",
  },
  {
    id: "B2-2021",
    questionEn: "The new office furniture is not only stylish _____ ergonomic.",
    questionVi:
      "Nội thất văn phòng mới không chỉ phong cách _____ còn tiện dụng theo công thái học.",
    options: [
      { option: "but also", isCorrect: true },
      { option: "and also", isCorrect: false },
      { option: "yet", isCorrect: false },
      { option: "as well as", isCorrect: false },
    ],
    explanationVi: "Cấu trúc tương quan 'not only... but also...'.",
    category: "Conjunctions",
  },
  {
    id: "B2-2022",
    questionEn:
      "Management is considering _____ a new training program for junior executives.",
    questionVi:
      "Ban quản lý đang cân nhắc _____ một chương trình đào tạo mới cho các giám đốc điều hành cấp dưới.",
    options: [
      { option: "implementing", isCorrect: true },
      { option: "implement", isCorrect: false },
      { option: "implementation", isCorrect: false },
      { option: "implemented", isCorrect: false },
    ],
    explanationVi: "Động từ 'consider' theo sau bởi một danh động từ (V-ing).",
    category: "Verbals",
  },
  {
    id: "B2-2023",
    questionEn:
      "The hotel offers a complimentary shuttle service _____ its guests.",
    questionVi:
      "Khách sạn cung cấp dịch vụ đưa đón miễn phí _____ khách của mình.",
    options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "by", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi: "Giới từ 'for' chỉ đối tượng được hưởng lợi ích.",
    category: "Prepositions",
  },
  {
    id: "B2-2024",
    questionEn:
      "The researcher's analysis was _____, providing valuable insights into consumer behavior.",
    questionVi:
      "Phân tích của nghiên cứu viên rất _____, mang lại cái nhìn sâu sắc quý giá về hành vi người tiêu dùng.",
    options: [
      { option: "thorough", isCorrect: true },
      { option: "thoroughly", isCorrect: false },
      { option: "thoroughness", isCorrect: false },
      { option: "through", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ 'thorough' (kỹ lưỡng/tỉ mỉ) để bổ ngữ cho danh từ chủ ngữ 'analysis'.",
    category: "Word Forms",
  },
  {
    id: "B2-2025",
    questionEn:
      "Employees are not permitted to use company equipment for personal _____.",
    questionVi:
      "Nhân viên không được phép sử dụng thiết bị của công ty cho mục đích cá nhân _____.",
    options: [
      { option: "purposes", isCorrect: true },
      { option: "purpose", isCorrect: false },
      { option: "purposed", isCorrect: false },
      { option: "purposing", isCorrect: false },
    ],
    explanationVi:
      "Sau tính từ 'personal' cần một danh từ. 'Purposes' là mục đích.",
    category: "Word Forms",
  },
  {
    id: "B2-2026",
    questionEn:
      "The construction of the new bridge is expected to be completed _____ two years.",
    questionVi:
      "Việc xây dựng cây cầu mới dự kiến sẽ được hoàn thành _____ vòng hai năm.",
    options: [
      { option: "within", isCorrect: true },
      { option: "during", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'within' dùng để chỉ một khoảng thời gian mà hành động sẽ hoàn thành bên trong đó.",
    category: "Prepositions",
  },
  {
    id: "B2-2027",
    questionEn:
      "The board members were _____ impressed by the young entrepreneur's presentation.",
    questionVi:
      "Các thành viên hội đồng quản trị đã _____ bị ấn tượng bởi bài thuyết trình của doanh nhân trẻ.",
    options: [
      { option: "deeply", isCorrect: true },
      { option: "depth", isCorrect: false },
      { option: "deep", isCorrect: false },
      { option: "deepen", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'deeply' (sâu sắc) bổ nghĩa cho trạng thái bị động 'impressed'.",
    category: "Word Forms",
  },
  {
    id: "B2-2028",
    questionEn:
      "The annual report highlights the company's commitment to _____ development.",
    questionVi:
      "Báo cáo hàng năm nhấn mạnh sự cam kết của công ty đối với sự phát triển _____.",
    options: [
      { option: "sustainable", isCorrect: true },
      { option: "sustain", isCorrect: false },
      { option: "sustainably", isCorrect: false },
      { option: "sustainability", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ đứng trước danh từ 'development'. 'Sustainable' là bền vững.",
    category: "Word Forms",
  },
  {
    id: "B2-2029",
    questionEn:
      "Please notify the reception desk _____ you encounter any problems with your room.",
    questionVi:
      "Vui lòng thông báo cho quầy lễ tân _____ bạn gặp bất kỳ vấn đề nào với phòng của mình.",
    options: [
      { option: "should", isCorrect: true },
      { option: "would", isCorrect: false },
      { option: "could", isCorrect: false },
      { option: "if", isCorrect: false },
    ],
    explanationVi:
      "Đây là dạng đảo ngữ của câu điều kiện loại 1: 'Should + S + V' thay cho 'If + S + V'. (Dù 'if' cũng đúng nhưng trong TOEIC B2 thường kiểm tra đảo ngữ).",
    category: "Conditionals",
  },
  {
    id: "B2-2030",
    questionEn:
      "The software update includes several new features that will _____ user productivity.",
    questionVi:
      "Bản cập nhật phần mềm bao gồm một số tính năng mới sẽ _____ năng suất của người dùng.",
    options: [
      { option: "boost", isCorrect: true },
      { option: "booster", isCorrect: false },
      { option: "boosted", isCorrect: false },
      { option: "boosting", isCorrect: false },
    ],
    explanationVi:
      "Sau 'will' cần một động từ nguyên thể. 'Boost' có nghĩa là thúc đẩy/gia tăng.",
    category: "Word Forms",
  },
  {
    id: "B2-2031",
    questionEn:
      "The company's logo was _____ redesigned to appeal to a younger demographic.",
    questionVi:
      "Logo của công ty đã được thiết kế lại một cách _____ để thu hút nhóm khách hàng trẻ tuổi hơn.",
    options: [
      { option: "extensively", isCorrect: true },
      { option: "extensive", isCorrect: false },
      { option: "extension", isCorrect: false },
      { option: "extending", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'extensively' (một cách rộng rãi/triệt để) bổ nghĩa cho động từ 'redesigned'.",
    category: "Word Forms",
  },
  {
    id: "B2-2032",
    questionEn:
      "The factory workers are required to wear protective gear at _____ times.",
    questionVi:
      "Các công nhân nhà máy được yêu cầu mặc đồ bảo hộ vào _____ mọi lúc.",
    options: [
      { option: "all", isCorrect: true },
      { option: "every", isCorrect: false },
      { option: "each", isCorrect: false },
      { option: "any", isCorrect: false },
    ],
    explanationVi: "Cụm cố định 'at all times' có nghĩa là luôn luôn/mọi lúc.",
    category: "Collocations",
  },
  {
    id: "B2-2033",
    questionEn:
      "The contract clearly defines the _____ of both parties involved in the agreement.",
    questionVi:
      "Hợp đồng quy định rõ ràng _____ của cả hai bên tham gia thỏa thuận.",
    options: [
      { option: "obligations", isCorrect: true },
      { option: "oblige", isCorrect: false },
      { option: "obligatory", isCorrect: false },
      { option: "obliging", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Obligations' là nghĩa vụ.",
    category: "Word Forms",
  },
  {
    id: "B2-2034",
    questionEn:
      "The shipment was delayed _____ to severe weather conditions in the Pacific.",
    questionVi:
      "Lô hàng bị trì hoãn _____ do điều kiện thời tiết khắc nghiệt ở Thái Bình Dương.",
    options: [
      { option: "owing", isCorrect: true },
      { option: "due", isCorrect: false },
      { option: "because", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'owing to' (do/vì) thường dùng để chỉ nguyên nhân khách quan. (Nếu chọn 'due' thì phải là 'due to').",
    category: "Prepositions",
  },
  {
    id: "B2-2035",
    questionEn:
      "The marketing team is focusing on _____ the brand's presence on social media platforms.",
    questionVi:
      "Đội ngũ tiếp thị đang tập trung vào việc _____ sự hiện diện của thương hiệu trên các nền tảng mạng xã hội.",
    options: [
      { option: "expanding", isCorrect: true },
      { option: "expansion", isCorrect: false },
      { option: "expand", isCorrect: false },
      { option: "expanded", isCorrect: false },
    ],
    explanationVi: "Sau giới từ 'on' cần một danh động từ (V-ing).",
    category: "Verbals",
  },
  {
    id: "B2-2036",
    questionEn:
      "The instructions are so _____ that even a beginner can easily assemble the furniture.",
    questionVi:
      "Các hướng dẫn _____ đến nỗi ngay cả người mới bắt đầu cũng có thể dễ dàng lắp ráp nội thất.",
    options: [
      { option: "straightforward", isCorrect: true },
      { option: "straightheartedly", isCorrect: false },
      { option: "straighten", isCorrect: false },
      { option: "straightforwardly", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ ở vị trí bổ ngữ sau 'are'. 'Straightforward' là đơn giản/dễ hiểu.",
    category: "Word Forms",
  },
  {
    id: "B2-2037",
    questionEn:
      "The CEO _____ that the company will reach its sales targets by the end of the year.",
    questionVi:
      "Giám đốc điều hành _____ rằng công ty sẽ đạt được mục tiêu doanh số vào cuối năm nay.",
    options: [
      { option: "expects", isCorrect: true },
      { option: "expectancy", isCorrect: false },
      { option: "expectant", isCorrect: false },
      { option: "expecting", isCorrect: false },
    ],
    explanationVi: "Cần một động từ chính chia theo chủ ngữ số ít 'The CEO'.",
    category: "Tenses",
  },
  {
    id: "B2-2038",
    questionEn:
      "The legal department is currently _____ the terms of the acquisition agreement.",
    questionVi:
      "Bộ phận pháp lý hiện đang _____ các điều khoản của thỏa thuận mua lại.",
    options: [
      { option: "negotiating", isCorrect: true },
      { option: "negotiate", isCorrect: false },
      { option: "negotiation", isCorrect: false },
      { option: "negotiated", isCorrect: false },
    ],
    explanationVi:
      "Sau 'is currently' cần dạng V-ing cho thì hiện tại tiếp diễn.",
    category: "Tenses",
  },
  {
    id: "B2-2039",
    questionEn:
      "The manager was pleased with the _____ of the new interns during their first week.",
    questionVi:
      "Người quản lý hài lòng với _____ của các thực tập sinh mới trong tuần đầu tiên của họ.",
    options: [
      { option: "performance", isCorrect: true },
      { option: "perform", isCorrect: false },
      { option: "performing", isCorrect: false },
      { option: "performer", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Performance' là sự thể hiện/hiệu suất làm việc.",
    category: "Word Forms",
  },
  {
    id: "B2-2040",
    questionEn:
      "The company provides a wide range of _____ to cater to different customer needs.",
    questionVi:
      "Công ty cung cấp một loạt các _____ để phục vụ các nhu cầu khác nhau của khách hàng.",
    options: [
      { option: "services", isCorrect: true },
      { option: "serviceable", isCorrect: false },
      { option: "servicing", isCorrect: false },
      { option: "served", isCorrect: false },
    ],
    explanationVi: "Cụm 'a wide range of' theo sau bởi danh từ số nhiều.",
    category: "Word Forms",
  },
  {
    id: "B2-2041",
    questionEn:
      "The new laboratory is equipped with the most _____ technology available today.",
    questionVi:
      "Phòng thí nghiệm mới được trang bị công nghệ _____ nhất hiện nay.",
    options: [
      { option: "advanced", isCorrect: true },
      { option: "advance", isCorrect: false },
      { option: "advancing", isCorrect: false },
      { option: "advancement", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'advanced' (tiên tiến) đứng trước danh từ 'technology'.",
    category: "Word Forms",
  },
  {
    id: "B2-2042",
    questionEn:
      "The workshop will provide participants with _____ experience in using the software.",
    questionVi:
      "Buổi hội thảo sẽ cung cấp cho người tham gia trải nghiệm _____ trong việc sử dụng phần mềm.",
    options: [
      { option: "hands-on", isCorrect: true },
      { option: "handled", isCorrect: false },
      { option: "handing", isCorrect: false },
      { option: "handful", isCorrect: false },
    ],
    explanationVi:
      "Cụm tính từ 'hands-on' (thực tế/thực hành) bổ nghĩa cho 'experience'.",
    category: "Vocabulary",
  },
  {
    id: "B2-2043",
    questionEn:
      "The committee is _____ reviewing the applications for the grant program.",
    questionVi:
      "Ủy ban đang _____ xem xét các đơn xin cấp cho chương trình tài trợ.",
    options: [
      { option: "presently", isCorrect: true },
      { option: "present", isCorrect: false },
      { option: "presentation", isCorrect: false },
      { option: "presented", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'presently' (hiện nay/hiện đang) bổ nghĩa cho hành động 'reviewing'.",
    category: "Word Forms",
  },
  {
    id: "B2-2044",
    questionEn:
      "The CEO attributed the company's success to the _____ of its employees.",
    questionVi:
      "Giám đốc điều hành cho rằng thành công của công ty là nhờ sự _____ của các nhân viên.",
    options: [
      { option: "dedication", isCorrect: true },
      { option: "dedicate", isCorrect: false },
      { option: "dedicated", isCorrect: false },
      { option: "dedicating", isCorrect: false },
    ],
    explanationVi:
      "Sau mạo từ 'the' cần một danh từ. 'Dedication' là sự cống hiến.",
    category: "Word Forms",
  },
  {
    id: "B2-2045",
    questionEn:
      "The construction project has been put on hold _____ to budget constraints.",
    questionVi: "Dự án xây dựng đã bị tạm dừng _____ do giới hạn ngân sách.",
    options: [
      { option: "due", isCorrect: true },
      { option: "because", isCorrect: false },
      { option: "owing", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi: "Cụm 'due to' chỉ nguyên nhân.",
    category: "Prepositions",
  },
  {
    id: "B2-2046",
    questionEn:
      "The company's performance has significantly improved _____ the new CEO took office.",
    questionVi:
      "Hiệu suất của công ty đã được cải thiện đáng kể _____ từ khi CEO mới nhậm chức.",
    options: [
      { option: "since", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "after", isCorrect: false },
      { option: "when", isCorrect: false },
    ],
    explanationVi:
      "Dùng liên từ 'since' với thì hiện tại hoàn thành ở mệnh đề chính.",
    category: "Conjunctions",
  },
  {
    id: "B2-2047",
    questionEn:
      "The HR department is seeking a candidate with a _____ knowledge of employment law.",
    questionVi:
      "Bộ phận nhân sự đang tìm kiếm một ứng cử viên có kiến thức _____ về luật lao động.",
    options: [
      { option: "thorough", isCorrect: true },
      { option: "thoroughly", isCorrect: false },
      { option: "through", isCorrect: false },
      { option: "thickness", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'thorough' (kỹ lưỡng/thấu đáo) bổ nghĩa cho danh từ 'knowledge'.",
    category: "Word Forms",
  },
  {
    id: "B2-2048",
    questionEn:
      "The merger is expected to be _____ beneficial for both corporations involved.",
    questionVi:
      "Sự sáp nhập dự kiến sẽ có lợi _____ cho cả hai tập đoàn liên quan.",
    options: [
      { option: "mutually", isCorrect: true },
      { option: "mutual", isCorrect: false },
      { option: "mutuality", isCorrect: false },
      { option: "mutuating", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'mutually' (lẫn nhau) bổ nghĩa cho tính từ 'beneficial'.",
    category: "Word Forms",
  },
  {
    id: "B2-2049",
    questionEn:
      "The newly implemented safety regulations are _____ on all employees.",
    questionVi:
      "Các quy định an toàn mới được thực hiện là _____ bắt buộc đối với tất cả nhân viên.",
    options: [
      { option: "binding", isCorrect: true },
      { option: "bind", isCorrect: false },
      { option: "bounded", isCorrect: false },
      { option: "banded", isCorrect: false },
    ],
    explanationVi: "Tính từ 'binding' có nghĩa là có tính ràng buộc/bắt buộc.",
    category: "Vocabulary",
  },
  {
    id: "B2-2050",
    questionEn:
      "The research team has yet to _____ a definitive conclusion from their experiments.",
    questionVi:
      "Nhóm nghiên cứu vẫn chưa _____ đưa ra kết luận cuối cùng từ các thí nghiệm của họ.",
    options: [
      { option: "reach", isCorrect: true },
      { option: "arrived", isCorrect: false },
      { option: "reached", isCorrect: false },
      { option: "come", isCorrect: false },
    ],
    explanationVi:
      "Sau cụm 'has yet to' cần động từ nguyên thể. 'Reach a conclusion' là cụm từ cố định.",
    category: "Collocations",
  },
  {
    id: "B2-2051",
    questionEn:
      "The company's expansion into the Asian market has been _____ successful.",
    questionVi:
      "Việc mở rộng của công ty vào thị trường châu Á đã _____ thành công.",
    options: [
      { option: "highly", isCorrect: true },
      { option: "high", isCorrect: false },
      { option: "highest", isCorrect: false },
      { option: "heighten", isCorrect: false },
    ],
    explanationVi: "Trạng từ 'highly' bổ nghĩa cho tính từ 'successful'.",
    category: "Word Forms",
  },
  {
    id: "B2-2052",
    questionEn:
      "The manager encouraged the staff to work as _____ as possible to meet the deadline.",
    questionVi:
      "Người quản lý đã khuyến khích nhân viên làm việc _____ nhất có thể để kịp thời hạn.",
    options: [
      { option: "efficiently", isCorrect: true },
      { option: "efficient", isCorrect: false },
      { option: "efficiency", isCorrect: false },
      { option: "efficiencies", isCorrect: false },
    ],
    explanationVi: "Trạng từ 'efficiently' bổ nghĩa cho động từ 'work'.",
    category: "Word Forms",
  },
  {
    id: "B2-2053",
    questionEn:
      "The customer service representative _____ the client that the issue would be resolved soon.",
    questionVi:
      "Đại diện dịch vụ khách hàng _____ khách hàng rằng vấn đề sẽ sớm được giải quyết.",
    options: [
      { option: "assured", isCorrect: true },
      { option: "insured", isCorrect: false },
      { option: "ensured", isCorrect: false },
      { option: "surely", isCorrect: false },
    ],
    explanationVi:
      "'Assure' có nghĩa là cam đoan với ai đó (thường có tân ngữ chỉ người đi kèm).",
    category: "Vocabulary",
  },
  {
    id: "B2-2054",
    questionEn:
      "The company's annual banquet will be held _____ the grand ballroom of the Hilton Hotel.",
    questionVi:
      "Tiệc thường niên của công ty sẽ được tổ chức _____ sảnh lớn của khách sạn Hilton.",
    options: [
      { option: "in", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi:
      "Giới từ 'in' dùng cho một không gian lớn bên trong một tòa nhà.",
    category: "Prepositions",
  },
  {
    id: "B2-2055",
    questionEn:
      "_____ the high cost of production, the quality of the product remains exceptional.",
    questionVi:
      "_____ chi phí sản xuất cao, chất lượng của sản phẩm vẫn rất tuyệt vời.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Even though", isCorrect: false },
    ],
    explanationVi: "Dùng 'Despite' trước một cụm danh từ để chỉ sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-2056",
    questionEn:
      "The new software is predicted to _____ user productivity by at least 20%.",
    questionVi:
      "Phần mềm mới được dự đoán sẽ _____ năng suất người dùng lên ít nhất 20%.",
    options: [
      { option: "enhance", isCorrect: true },
      { option: "enhancement", isCorrect: false },
      { option: "enhancing", isCorrect: false },
      { option: "enhanced", isCorrect: false },
    ],
    explanationVi:
      "Sau 'to' nhắm mục đích cần một động từ nguyên thể. 'Enhance' là nâng cao.",
    category: "Word Forms",
  },
  {
    id: "B2-2057",
    questionEn:
      "All relevant documents must be submitted to the legal department _____ Friday.",
    questionVi:
      "Tất cả các tài liệu liên quan phải được nộp cho bộ phận pháp lý _____ ngày thứ Sáu.",
    options: [
      { option: "by", isCorrect: true },
      { option: "until", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "on", isCorrect: false },
    ],
    explanationVi: "Giới từ 'by' để chỉ thời hạn cuối cùng.",
    category: "Prepositions",
  },
  {
    id: "B2-2058",
    questionEn:
      "The CEO has decided to _____ the upcoming merger until more favorable market conditions arise.",
    questionVi:
      "Giám đốc điều hành đã quyết định _____ việc sáp nhập sắp tới cho đến khi các điều kiện thị trường thuận lợi hơn xuất hiện.",
    options: [
      { option: "postpone", isCorrect: true },
      { option: "abandon", isCorrect: false },
      { option: "accelerate", isCorrect: false },
      { option: "maintain", isCorrect: false },
    ],
    explanationVi:
      "Dựa vào ngữ nghĩa 'until more favorable market conditions arise', ta chọn 'postpone' (trì hoãn).",
    category: "Vocabulary",
  },
  {
    id: "B2-2059",
    questionEn:
      "Please ensure that all confidential documents are _____ shredded before the office closes for the weekend.",
    questionVi:
      "Vui lòng đảm bảo rằng tất cả các tài liệu mật đều được tiêu hủy _____ trước khi văn phòng đóng cửa vào cuối tuần.",
    options: [
      { option: "thoroughly", isCorrect: true },
      { option: "hardly", isCorrect: false },
      { option: "casually", isCorrect: false },
      { option: "roughly", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'thoroughly' (một cách triệt để) bổ nghĩa cho động từ 'shredded'.",
    category: "Adverbs",
  },
  {
    id: "B2-2060",
    questionEn:
      "_____ the high cost of production, the company managed to achieve a significant profit this quarter.",
    questionVi:
      "_____ chi phí sản xuất cao, công ty vẫn đạt được lợi nhuận đáng kể trong quý này.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "Because", isCorrect: false },
      { option: "Moreover", isCorrect: false },
    ],
    explanationVi: "Sử dụng 'Despite' + cụm danh từ để chỉ sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-2061",
    questionEn:
      "The marketing team is currently working on a strategy that is _____ to attract a younger demographic.",
    questionVi:
      "Nhóm tiếp thị hiện đang nghiên cứu một chiến lược _____ thu hút nhóm khách hàng trẻ tuổi hơn.",
    options: [
      { option: "designed", isCorrect: true },
      { option: "designing", isCorrect: false },
      { option: "designs", isCorrect: false },
      { option: "design", isCorrect: false },
    ],
    explanationVi: "Cấu trúc bị động: be + V3/ed (được thiết kế để làm gì).",
    category: "Passive Voice",
  },
  {
    id: "B2-2062",
    questionEn:
      "Ms. Henderson was praised for her _____ handling of the customer's complaint regarding the faulty product.",
    questionVi:
      "Cô Henderson đã được khen ngợi vì cách xử lý _____ đối với khiếu nại của khách hàng về sản phẩm bị lỗi.",
    options: [
      { option: "efficient", isCorrect: true },
      { option: "efficiency", isCorrect: false },
      { option: "efficiently", isCorrect: false },
      { option: "efface", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'efficient' để bổ nghĩa cho danh từ 'handling'.",
    category: "Adjectives",
  },
  {
    id: "B2-2063",
    questionEn:
      "Any employee _____ wishes to apply for the management training program must submit a letter of intent by Friday.",
    questionVi:
      "Bất kỳ nhân viên nào _____ muốn nộp đơn vào chương trình đào tạo quản lý phải nộp thư bày tỏ ý định trước thứ Sáu.",
    options: [
      { option: "who", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi: "Đại từ quan hệ 'who' làm chủ ngữ cho động từ 'wishes'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-2064",
    questionEn:
      "The new software update is expected to _____ the overall performance of the database systems.",
    questionVi:
      "Bản cập nhật phần mềm mới được kỳ vọng sẽ _____ hiệu suất tổng thể của các hệ thống cơ sở dữ liệu.",
    options: [
      { option: "enhance", isCorrect: true },
      { option: "diminish", isCorrect: false },
      { option: "ignore", isCorrect: false },
      { option: "interrupt", isCorrect: false },
    ],
    explanationVi:
      "Dựa trên ngữ cảnh tích cực của 'update' và 'performance', 'enhance' (nâng cao) là lựa chọn phù hợp nhất.",
    category: "Vocabulary",
  },
  {
    id: "B2-2065",
    questionEn:
      "By the time the inspectors arrive, the staff _____ all the necessary safety protocols.",
    questionVi:
      "Vào thời điểm các thanh tra viên đến, các nhân viên _____ tất cả các giao thức an toàn cần thiết.",
    options: [
      { option: "will have implemented", isCorrect: true },
      { option: "implemented", isCorrect: false },
      { option: "are implementing", isCorrect: false },
      { option: "have implemented", isCorrect: false },
    ],
    explanationVi:
      "Dùng thì Tương lai hoàn thành để diễn tả hành động hoàn tất trước một thời điểm/hành động khác trong tương lai.",
    category: "Future Perfect",
  },
  {
    id: "B2-2066",
    questionEn:
      "The legal department noted that several clauses in the contract were _____ and needed clarification.",
    questionVi:
      "Bộ phận pháp lý ghi chú rằng một số điều khoản trong hợp đồng _____ và cần được làm rõ.",
    options: [
      { option: "ambiguous", isCorrect: true },
      { option: "clear", isCorrect: false },
      { option: "precise", isCorrect: false },
      { option: "rigid", isCorrect: false },
    ],
    explanationVi:
      "Cần được làm rõ (clarification) vì điều khoản đó 'ambiguous' (mơ hồ/không rõ ràng).",
    category: "Vocabulary",
  },
  {
    id: "B2-2067",
    questionEn:
      "Regardless _____ the initial feedback, we should proceed with the pilot test of the new mobile app.",
    questionVi:
      "Bất chấp _____ phản hồi ban đầu, chúng ta nên tiến hành thử nghiệm phiên bản thử nghiệm của ứng dụng di động mới.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "from", isCorrect: false },
    ],
    explanationVi: "Cụm từ cố định: 'regardless of' (bất chấp/bất kể).",
    category: "Prepositions",
  },
  {
    id: "B2-2068",
    questionEn:
      "If the shipment _____ on time, we would have been able to fulfill the order for the major client.",
    questionVi:
      "Nếu lô hàng _____ đúng hạn, chúng tôi đã có thể đáp ứng đơn đặt hàng cho khách hàng lớn.",
    options: [
      { option: "had arrived", isCorrect: true },
      { option: "arrives", isCorrect: false },
      { option: "arrived", isCorrect: false },
      { option: "will arrive", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 3 (vế chính là 'would have been able').",
    category: "Conditional Type 3",
  },
  {
    id: "B2-2069",
    questionEn:
      "The factory workers were encouraged _____ their supervisors if they noticed any equipment malfunctions.",
    questionVi:
      "Các công nhân nhà máy được khuyến khích _____ giám sát viên của họ nếu họ nhận thấy bất kỳ sự cố hỏng hóc thiết bị nào.",
    options: [
      { option: "to notify", isCorrect: true },
      { option: "notifying", isCorrect: false },
      { option: "notify", isCorrect: false },
      { option: "notified", isCorrect: false },
    ],
    explanationVi: "Cấu trúc: encourage someone to do something.",
    category: "Gerunds and Infinitives",
  },
  {
    id: "B2-2070",
    questionEn:
      "The report provided a _____ analysis of the competitive landscape in the telecommunications sector.",
    questionVi:
      "Báo cáo đã cung cấp một phân tích _____ về bối cảnh cạnh tranh trong lĩnh vực viễn thông.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehend", isCorrect: false },
      { option: "comprehensify", isCorrect: false },
      { option: "comprehensiveness", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'comprehensive' (toàn diện) để bổ nghĩa cho danh từ 'analysis'.",
    category: "Adjectives",
  },
  {
    id: "B2-2071",
    questionEn:
      "Hardly _____ enter the room when the alarm started ringing loudly.",
    questionVi:
      "Vừa mới _____ bước vào phòng thì tiếng chuông báo động bắt đầu reo vang.",
    options: [
      { option: "did he", isCorrect: true },
      { option: "he did", isCorrect: false },
      { option: "he was", isCorrect: false },
      { option: "was he", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ với 'Hardly': Hardly + auxiliary + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-2072",
    questionEn:
      "The proposed budget for the renovation project seems _____ optimistic given the current economic climate.",
    questionVi:
      "Ngân sách đề xuất cho dự án cải tạo có vẻ _____ lạc quan quá mức xét trong tình hình kinh tế hiện tại.",
    options: [
      { option: "overly", isCorrect: true },
      { option: "over", isCorrect: false },
      { option: "overboard", isCorrect: false },
      { option: "overall", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'overly' (quá mức) bổ nghĩa cho tính từ 'optimistic'.",
    category: "Adverbs",
  },
  {
    id: "B2-2073",
    questionEn:
      "The board members are still in _____ regarding the location of the new regional headquarters.",
    questionVi:
      "Các thành viên ban quản trị vẫn đang trong _____ về vị trí của trụ sở chính khu vực mới.",
    options: [
      { option: "disagreement", isCorrect: true },
      { option: "disagree", isCorrect: false },
      { option: "disagreeing", isCorrect: false },
      { option: "disagreeable", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'in disagreement' (không đồng ý/bất đồng).",
    category: "Nouns",
  },
  {
    id: "B2-2074",
    questionEn:
      "Applicants for the position must demonstrate strong _____ and interpersonal communication skills.",
    questionVi:
      "Các ứng viên cho vị trí này phải thể hiện khả năng _____ mạnh mẽ và các kỹ năng giao tiếp giữa cá nhân.",
    options: [
      { option: "leadership", isCorrect: true },
      { option: "leader", isCorrect: false },
      { option: "lead", isCorrect: false },
      { option: "leading", isCorrect: false },
    ],
    explanationVi: "Cần danh từ trừu tượng 'leadership' (khả năng lãnh đạo).",
    category: "Nouns",
  },
  {
    id: "B2-2075",
    questionEn:
      "The exhibition features works by several artists, many of _____ have received international awards.",
    questionVi:
      "Cuộc triển lãm trưng bày tác phẩm của một số nghệ sĩ, nhiều người trong _____ đã nhận được các giải thưởng quốc tế.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ thay thế cho người đứng sau giới từ: 'many of whom'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-2076",
    questionEn:
      "The supply chain issues were _____ by the shortage of skilled labor at the manufacturing plant.",
    questionVi:
      "Các vấn đề về chuỗi cung ứng đã _____ bởi tình trạng thiếu lao động lành nghề tại nhà máy sản xuất.",
    options: [
      { option: "exacerbated", isCorrect: true },
      { option: "alleviated", isCorrect: false },
      { option: "eliminated", isCorrect: false },
      { option: "repaired", isCorrect: false },
    ],
    explanationVi:
      "Dựa vào ngữ cảnh tiêu cực, 'exacerbated' (làm trầm trọng thêm) là từ phù hợp.",
    category: "Vocabulary",
  },
  {
    id: "B2-2077",
    questionEn:
      "Only after the audit was complete _____ the financial discrepancies discovered by the team.",
    questionVi:
      "Chỉ sau khi cuộc kiểm toán hoàn tất thì những sai lệch tài chính mới _____ bởi nhóm.",
    options: [
      { option: "were", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only after': Only after + S + V + auxiliary + S + V. Chủ ngữ 'discrepancies' là số nhiều.",
    category: "Inversion",
  },
  {
    id: "B2-2078",
    questionEn:
      "The company's social media presence has improved significantly _____ the hire of a new digital marketing expert.",
    questionVi:
      "Sự hiện diện trên mạng xã hội của công ty đã cải thiện đáng kể _____ việc thuê chuyên gia tiếp thị kỹ thuật số mới.",
    options: [
      { option: "since", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "while", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'since' + danh từ/mốc thời gian đi kèm với thì Hiện tại hoàn thành.",
    category: "Prepositions",
  },
  {
    id: "B2-2079",
    questionEn:
      "The flight was delayed for three hours _____ to a mechanical failure in the navigation system.",
    questionVi:
      "Chuyến bay đã bị hoãn ba tiếng _____ do lỗi kỹ thuật trong hệ thống định vị.",
    options: [
      { option: "due", isCorrect: true },
      { option: "owing", isCorrect: false },
      { option: "because", isCorrect: false },
      { option: "thanks", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'due to' (do/bởi vì).",
    category: "Prepositions",
  },
  {
    id: "B2-2080",
    questionEn:
      "Ms. Tanaka will be _____ for managing our expansion into the European market next year.",
    questionVi:
      "Bà Tanaka sẽ _____ chịu trách nhiệm quản lý việc mở rộng của chúng ta vào thị trường châu Âu vào năm tới.",
    options: [
      { option: "responsible", isCorrect: true },
      { option: "responsibility", isCorrect: false },
      { option: "responsibly", isCorrect: false },
      { option: "responsive", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'be responsible for' (chịu trách nhiệm về).",
    category: "Adjectives",
  },
  {
    id: "B2-2101",
    questionEn:
      "The company's stocks have seen a _____ decline over the past ten months.",
    questionVi:
      "Cổ phiếu của công ty đã chứng kiến một sự sụt giảm _____ trong mười tháng qua.",
    options: [
      { option: "steady", isCorrect: true },
      { option: "steadily", isCorrect: false },
      { option: "steadiness", isCorrect: false },
      { option: "steadying", isCorrect: false },
    ],
    explanationVi:
      "Cần tính từ 'steady' (đều đặn/ổn định) bổ nghĩa cho danh từ 'decline'.",
    category: "Adjectives",
  },
  {
    id: "B2-2102",
    questionEn:
      "The auditor recommended that the accounting team _____ the internal controls immediately.",
    questionVi:
      "Kiểm toán viên khuyến nghị rằng nhóm kế toán _____ các kiểm soát nội bộ ngay lập tức.",
    options: [
      { option: "strengthen", isCorrect: true },
      { option: "strengthens", isCorrect: false },
      { option: "strengthened", isCorrect: false },
      { option: "strengthening", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định: recommend that + S + V (bare).",
    category: "Subjunctive Mood",
  },
  {
    id: "B2-2103",
    questionEn:
      "Despite _____ the deadline, the team was able to submit the proposal after working overtime.",
    questionVi:
      "Mặc dù _____ thời hạn, nhóm đã có thể nộp đề xuất sau khi làm thêm giờ.",
    options: [
      { option: "missing", isCorrect: true },
      { option: "missed", isCorrect: false },
      { option: "miss", isCorrect: false },
      { option: "to miss", isCorrect: false },
    ],
    explanationVi: "Sau 'Despite' dùng V-ing.",
    category: "Gerunds and Infinitives",
  },
  {
    id: "B2-2104",
    questionEn:
      "The hotel offers a wide _____ of amenities to cater to both business and leisure travelers.",
    questionVi:
      "Khách sạn cung cấp một _____ rộng lớn các tiện nghi để phục vụ cả khách công tác và khách du lịch.",
    options: [
      { option: "array", isCorrect: true },
      { option: "arrival", isCorrect: false },
      { option: "arrangement", isCorrect: false },
      { option: "arrest", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'an array of' (một loạt/dãy các thứ gì đó).",
    category: "Vocabulary",
  },
  {
    id: "B2-2105",
    questionEn:
      "Customer service representatives are trained to _____ concerns in a professional and empathetic manner.",
    questionVi:
      "Đại diện dịch vụ khách hàng được đào tạo để _____ các mối quan ngại một cách chuyên nghiệp và thấu hiểu.",
    options: [
      { option: "address", isCorrect: true },
      { option: "addressee", isCorrect: false },
      { option: "addressing", isCorrect: false },
      { option: "addressed", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'address' (giải quyết/xử lý) thường dùng với 'concerns' hoặc 'issues'.",
    category: "Vocabulary",
  },
  {
    id: "B2-2106",
    questionEn:
      "The board of directors is _____ considering several candidates for the position of Chief Finance Officer.",
    questionVi:
      "Hội đồng quản trị hiện đang _____ xem xét một số ứng viên cho vị trí Giám đốc Tài chính.",
    options: [
      { option: "actively", isCorrect: true },
      { option: "active", isCorrect: false },
      { option: "activity", isCorrect: false },
      { option: "activate", isCorrect: false },
    ],
    explanationVi: "Trạng từ 'actively' bổ nghĩa cho động từ 'considering'.",
    category: "Adverbs",
  },
  {
    id: "B2-2107",
    questionEn:
      "The city council has implemented a plan to _____ traffic congestion in the downtown area.",
    questionVi:
      "Hội đồng thành phố đã triển khai bir kế hoạch nhằm _____ tắc nghẽn giao thông ở khu vực trung tâm thành phố.",
    options: [
      { option: "alleviate", isCorrect: true },
      { option: "aggravate", isCorrect: false },
      { option: "abandon", isCorrect: false },
      { option: "allocate", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'alleviate' (làm giảm bớt/giảm nhẹ) phù hợp với ngữ cảnh 'congestion'.",
    category: "Vocabulary",
  },
  {
    id: "B2-2108",
    questionEn:
      "Rarely _____ such a large turnout for the annual general meeting.",
    questionVi:
      "Hiếm khi _____ sự tham gia đông đảo như vậy cho cuộc họp đại hội đồng thường niên.",
    options: [
      { option: "is there", isCorrect: true },
      { option: "there is", isCorrect: false },
      { option: "was there", isCorrect: false },
      { option: "there was", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Rarely': Rarely + auxiliary + there + be.",
    category: "Inversion",
  },
  {
    id: "B2-2109",
    questionEn:
      "All travel expenses must be _____ by original receipts and submitted within 30 days.",
    questionVi:
      "Tất cả chi phí đi lại phải được _____ bằng hóa đơn gốc và được nộp trong vòng 30 ngày.",
    options: [
      { option: "substantiated", isCorrect: true },
      { option: "substantial", isCorrect: false },
      { option: "substantiate", isCorrect: false },
      { option: "substantiating", isCorrect: false },
    ],
    explanationVi:
      "Dạng bị động 'be substantiated' (được chứng minh/xác minh).",
    category: "Passive Voice",
  },
  {
    id: "B2-2110",
    questionEn:
      "The company decided to _____ its operations into the South American market due to the high demand.",
    questionVi:
      "Công ty quyết định _____ hoạt động của mình vào thị trường Nam Mỹ do nhu cầu cao.",
    options: [
      { option: "expand", isCorrect: true },
      { option: "expansion", isCorrect: false },
      { option: "expansive", isCorrect: false },
      { option: "expansively", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decide to' dùng động từ nguyên mẫu 'expand' (mở rộng).",
    category: "Verbs",
  },
  {
    id: "B2-2111",
    questionEn:
      "_____ several warnings, the employee continued to ignore the safety regulations.",
    questionVi:
      "_____ nhiều lần cảnh báo, nhân viên vẫn tiếp tục phớt lờ các quy định an toàn.",
    options: [
      { option: "Despite", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Therefore", isCorrect: false },
    ],
    explanationVi: "Dùng 'Despite' + cụm danh từ để chỉ sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "B2-2112",
    questionEn:
      "The report highlights the _____ for increased cybersecurity measures in the financial sector.",
    questionVi:
      "Báo cáo nhấn mạnh _____ của các biện pháp an ninh mạng gia tăng trong lĩnh vực tài chính.",
    options: [
      { option: "necessity", isCorrect: true },
      { option: "necessary", isCorrect: false },
      { option: "necessarily", isCorrect: false },
      { option: "necessitate", isCorrect: false },
    ],
    explanationVi: "Sau mạo từ 'the' cần danh từ 'necessity' (sự cần thiết).",
    category: "Nouns",
  },
  {
    id: "B2-2113",
    questionEn:
      "By the end of the year, the construction project _____ completed, provided there are no further delays.",
    questionVi:
      "Vào cuối năm nay, dự án xây dựng _____ hoàn thành, với điều kiện là không có thêm sự chậm trễ nào.",
    options: [
      { option: "will have been", isCorrect: true },
      { option: "has been", isCorrect: false },
      { option: "will be", isCorrect: false },
      { option: "is being", isCorrect: false },
    ],
    explanationVi:
      "Thì Tương lai hoàn thành ( Future Perfect) diễn tả hành động hoàn tất trước bir mốc thời gian tương lai.",
    category: "Future Perfect",
  },
  {
    id: "B2-2114",
    questionEn:
      "The marketing director is looking for someone with a _____ understanding of digital trends.",
    questionVi:
      "Giám đốc tiếp thị đang tìm kiếm bir người có hiểu biết _____ về các xu hướng kỹ thuật số.",
    options: [
      { option: "profound", isCorrect: true },
      { option: "profundity", isCorrect: false },
      { option: "profoundly", isCorrect: false },
      { option: "profuse", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'profound' (sâu sắc) bổ nghĩa cho danh từ 'understanding'.",
    category: "Adjectives",
  },
  {
    id: "B2-2115",
    questionEn:
      "Should you have any questions, please do not _____ to contact our customer support team.",
    questionVi:
      "Nếu bạn có bất kỳ câu hỏi nào, xin đừng _____ liên hệ với nhóm hỗ trợ khách hàng của chúng tôi.",
    options: [
      { option: "hesitate", isCorrect: true },
      { option: "hesitation", isCorrect: false },
      { option: "hesitant", isCorrect: false },
      { option: "hesitatingly", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'do not hesitate to do something' (đừng ngần ngại làm gì).",
    category: "Verbs",
  },
  {
    id: "B2-2116",
    questionEn:
      "The company’s reputation was damaged _____ the public disclosure of the data breach.",
    questionVi:
      "Uy tín của công ty đã bị tổn hại _____ việc tiết lộ công khai về vụ vi phạm dữ liệu.",
    options: [
      { option: "following", isCorrect: true },
      { option: "follows", isCorrect: false },
      { option: "followed", isCorrect: false },
      { option: "follow", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'following' như bir giới từ mang nghĩa 'sau khi/sau'.",
    category: "Prepositions",
  },
  {
    id: "B2-2117",
    questionEn:
      "The new policy applies to all staff members, _____ of their position in the organization.",
    questionVi:
      "Chính sách mới áp dụng cho tất cả các thành viên nhân viên, _____ vị trí của họ trong tổ chức.",
    options: [
      { option: "regardless", isCorrect: true },
      { option: "regard", isCorrect: false },
      { option: "regarding", isCorrect: false },
      { option: "regardful", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'regardless of' (bất kể/bất chấp).",
    category: "Prepositions",
  },
  {
    id: "B2-2118",
    questionEn:
      "We were impressed by the _____ response we received from the vendor after the inquiry.",
    questionVi:
      "Chúng tôi đã rất ấn tượng bởi phản hồi _____ mà chúng tôi nhận được từ nhà cung cấp sau khi gửi yêu cầu.",
    options: [
      { option: "prompt", isCorrect: true },
      { option: "promptly", isCorrect: false },
      { option: "promptness", isCorrect: false },
      { option: "prompted", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'prompt' (nhanh chóng/kịp thời) bổ nghĩa cho danh từ 'response'.",
    category: "Adjectives",
  },
  {
    id: "B2-2119",
    questionEn:
      "Applicants who meet the criteria will be _____ for an interview with the department head.",
    questionVi:
      "Các ứng viên đáp ứng tiêu chí sẽ được _____ phỏng vấn với trưởng bộ phận.",
    options: [
      { option: "eligible", isCorrect: true },
      { option: "elegance", isCorrect: false },
      { option: "electable", isCorrect: false },
      { option: "elongated", isCorrect: false },
    ],
    explanationVi: "Tính từ 'eligible for' (có đủ tư cách/phù hợp cho).",
    category: "Adjectives",
  },
  {
    id: "B2-2120",
    questionEn:
      "The manager's _____ to delegate tasks often leads to him being overwhelmed with work.",
    questionVi:
      "Việc người quản lý _____ giao phó nhiệm vụ thường dẫn đến việc ông ấy bị quá tải công việc.",
    options: [
      { option: "reluctance", isCorrect: true },
      { option: "reluctant", isCorrect: false },
      { option: "reluctantly", isCorrect: false },
      { option: "reluct", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'reluctance' (sự miễn cưỡng/không sẵn lòng).",
    category: "Nouns",
  },
  {
    id: "B2-2121",
    questionEn:
      "The factory has implemented strict quality control measures to _____ product defects.",
    questionVi:
      "Nhà máy đã triển khai các biện pháp kiểm soát chất lượng nghiêm ngặt để _____ lỗi sản phẩm.",
    options: [
      { option: "minimize", isCorrect: true },
      { option: "minimum", isCorrect: false },
      { option: "minimal", isCorrect: false },
      { option: "minimized", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'minimize' (giảm thiểu) phù hợp nhất với ngữ cảnh 'defects'.",
    category: "Verbs",
  },
  {
    id: "B2-2122",
    questionEn:
      "The negotiation was successful _____ the compromise reached by both sides.",
    questionVi:
      "Cuộc đàm phán đã thành công _____ sự thỏa hiệp đạt được từ cả hai phía.",
    options: [
      { option: "owing to", isCorrect: true },
      { option: "despite", isCorrect: false },
      { option: "instead of", isCorrect: false },
      { option: "contrary to", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'owing to' (nhờ vào/do) chỉ nguyên nhân dẫn đến kết quả thành công.",
    category: "Prepositions",
  },
  {
    id: "B2-2123",
    questionEn:
      "The software update will be _____ across all office computers starting tomorrow night.",
    questionVi:
      "Bản cập nhật phần mềm sẽ được _____ trên tất cả các máy tính của văn phòng bắt đầu từ tối mai.",
    options: [
      { option: "deployed", isCorrect: true },
      { option: "deploy", isCorrect: false },
      { option: "deployment", isCorrect: false },
      { option: "deploying", isCorrect: false },
    ],
    explanationVi: "Dạng bị động 'be deployed' (được triển khai/cài đặt).",
    category: "Passive Voice",
  },
  {
    id: "B2-2124",
    questionEn:
      "Mr. Lee is the employee _____ contributions have been instrumental to the project's success.",
    questionVi:
      "Ông Lee là nhân viên _____ những đóng góp đã đóng vai trò quan trọng vào sự thành công của dự án.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ chỉ sở hữu 'whose' đứng trước danh từ 'contributions'.",
    category: "Relative Clauses",
  },
  {
    id: "B2-2125",
    questionEn:
      "The financial report showed that the company is currently _____ in terms of cash flow.",
    questionVi:
      "Báo cáo tài chính cho thấy công ty hiện đang _____ về mặt dòng tiền.",
    options: [
      { option: "stable", isCorrect: true },
      { option: "stability", isCorrect: false },
      { option: "stably", isCorrect: false },
      { option: "stabilize", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'stable' (ổn định) bổ nghĩa cho chủ ngữ sau động từ nối 'is'.",
    category: "Adjectives",
  },
  {
    id: "B2-2126",
    questionEn:
      "The legal advisor recommended _____ the contract bir more time before signing it officially.",
    questionVi:
      "Cố vấn pháp lý đã khuyến nghị _____ hợp đồng thêm bir lần nữa trước khi ký kết chính thức.",
    options: [
      { option: "reviewing", isCorrect: true },
      { option: "review", isCorrect: false },
      { option: "to review", isCorrect: false },
      { option: "reviewed", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'recommend' đi kèm V-ing khi không có tân ngữ chỉ người.",
    category: "Gerunds and Infinitives",
  },
  {
    id: "B2-2127",
    questionEn:
      "It is _____ important to store your login credentials in a secure location.",
    questionVi:
      "Điều này thật sự _____ quan trọng khi lưu trữ các thông tin đăng nhập của bạn ở bir nơi an toàn.",
    options: [
      { option: "crucially", isCorrect: true },
      { option: "crucial", isCorrect: false },
      { option: "cruciality", isCorrect: false },
      { option: "cruciate", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'crucially' (một cách quan trọng/cốt yếu) bổ nghĩa cho tính từ 'important'.",
    category: "Adverbs",
  },
  {
    id: "B2-2128",
    questionEn:
      "The CEO was _____ with the progress made by the research and development team.",
    questionVi:
      "Giám đốc điều hành đã _____ với tiến độ đạt được bởi nhóm nghiên cứu và phát triển.",
    options: [
      { option: "satisfied", isCorrect: true },
      { option: "satisfy", isCorrect: false },
      { option: "satisfactory", isCorrect: false },
      { option: "satisfaction", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'be satisfied with' (hài lòng với).",
    category: "Adjectives",
  },
  {
    id: "B2-2129",
    questionEn:
      "Please notify the HR department _____ you need to change your emergency contact information.",
    questionVi:
      "Vui lòng thông báo cho bộ phận nhân sự _____ bạn cần thay đổi thông tin liên lạc khẩn cấp của mình.",
    options: [
      { option: "in case", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "so that", isCorrect: false },
      { option: "even though", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'in case' (phòng khi/trong trường hợp).",
    category: "Conjunctions",
  },
  {
    id: "B2-2130",
    questionEn:
      "The conference provided a great opportunity for professionals to _____ with peers from around the world.",
    questionVi:
      "Hội nghị đã cung cấp bir cơ hội tuyệt vời để các chuyên gia _____ với các đồng nghiệp từ khắp nơi trên thế giới.",
    options: [
      { option: "network", isCorrect: true },
      { option: "networking", isCorrect: false },
      { option: "networked", isCorrect: false },
      { option: "networks", isCorrect: false },
    ],
    explanationVi: "Động từ 'network' (kết nối mạng lưới chuyên nghiệp).",
    category: "Verbs",
  },
  {
    id: "B2-2131",
    questionEn:
      "The new laws are intended to _____ the process of obtaining business permits.",
    questionVi:
      "Các điều luật mới nhằm mục đích _____ quy trình nhận giấy phép kinh doanh.",
    options: [
      { option: "streamline", isCorrect: true },
      { option: "obstruct", isCorrect: false },
      { option: "prolong", isCorrect: false },
      { option: "complicate", isCorrect: false },
    ],
    explanationVi:
      "Động từ 'streamline' (tối giản hóa/làm cho hiệu quả hơn) phù hợp cho quy trình hành chính.",
    category: "Vocabulary",
  },
  {
    id: "B2-2132",
    questionEn:
      "Not until the end of the meeting _____ the announcement regarding the office relocation.",
    questionVi:
      "Mãi cho đến cuối buổi họp thì thông báo về việc di dời văn phòng mới _____.",
    options: [
      { option: "was made", isCorrect: true },
      { option: "had made", isCorrect: false },
      { option: "did they made", isCorrect: false },
      { option: "was making", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Not until': Not until + time/clause + auxiliary + S + V.",
    category: "Inversion",
  },
  {
    id: "B2-2133",
    questionEn:
      "The company’s growth has been _____ by its ability to innovate in a competitive market.",
    questionVi:
      "Sự phát triển của công ty đã được _____ bởi khả năng đổi mới trong bir thị trường cạnh tranh.",
    options: [
      { option: "driven", isCorrect: true },
      { option: "drive", isCorrect: false },
      { option: "driver", isCorrect: false },
      { option: "driving", isCorrect: false },
    ],
    explanationVi: "Dạng bị động 'be driven by' (được dẫn dắt/thúc đẩy bởi).",
    category: "Passive Voice",
  },
  {
    id: "B2-2134",
    questionEn:
      "_____ the high demand for tickets, the organizers decided to add two more show dates.",
    questionVi:
      "_____ nhu cầu cao về vé, các nhà tổ chức đã quyết định thêm hai ngày trình diễn nữa.",
    options: [
      { option: "Given", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Despite", isCorrect: false },
    ],
    explanationVi: "Từ 'Given' (xét đến/dựa trên) dùng để giới thiệu lý do.",
    category: "Conjunctions",
  },
  {
    id: "B2-2135",
    questionEn:
      "The team is working _____ to finish the presentation before the client meeting on Monday.",
    questionVi:
      "Nhóm đang làm việc _____ để hoàn thành bài thuyết trình trước buổi gặp khách hàng vào thứ Hai.",
    options: [
      { option: "diligently", isCorrect: true },
      { option: "diligent", isCorrect: false },
      { option: "diligence", isCorrect: false },
      { option: "diligentness", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'diligently' (bir cách cần mẫn) bổ nghĩa cho động từ 'working'.",
    category: "Adverbs",
  },
  {
    id: "B2-2136",
    questionEn:
      "The new budget includes _____ for research and development activities in the next quarter.",
    questionVi:
      "Ngân sách mới bao gồm _____ cho các hoạt động nghiên cứu và phát triển trong quý tới.",
    options: [
      { option: "allocations", isCorrect: true },
      { option: "allocators", isCorrect: false },
      { option: "allocated", isCorrect: false },
      { option: "allocate", isCorrect: false },
    ],
    explanationVi:
      "Danh từ 'allocations' (các khoản phân bổ) phù hợp với bối cảnh 'budget'.",
    category: "Nouns",
  },
  {
    id: "B2-2137",
    questionEn:
      "The manager has asked all employees to _____ any suspicious activity on the corporate network.",
    questionVi:
      "Người quản lý đã yêu cầu tất cả nhân viên _____ bất kỳ hoạt động đáng ngờ nào trên mạng doanh nghiệp.",
    options: [
      { option: "report", isCorrect: true },
      { option: "reporting", isCorrect: false },
      { option: "reported", isCorrect: false },
      { option: "reporter", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'ask someone to do something'.",
    category: "Verbs",
  },
  {
    id: "B2-2138",
    questionEn:
      "This model is _____ more energy-efficient than the previous version released last year.",
    questionVi:
      "Mẫu máy này _____ tiết kiệm năng lượng hơn so với phiên bản trước được phát hành năm ngoái.",
    options: [
      { option: "considerably", isCorrect: true },
      { option: "consider", isCorrect: false },
      { option: "considerable", isCorrect: false },
      { option: "considerate", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'considerably' (đáng kể) dùng để nhấn mạnh cho so sánh hơn.",
    category: "Adverbs",
  },
  {
    id: "B2-2139",
    questionEn:
      "_____ of the candidates we interviewed yesterday possessed the necessary technical expertise.",
    questionVi:
      "_____ ứng viên mà chúng tôi đã phỏng vấn hôm qua sở hữu kiến thức chuyên môn kỹ thuật cần thiết.",
    options: [
      { option: "None", isCorrect: true },
      { option: "Neither", isCorrect: false },
      { option: "Any", isCorrect: false },
      { option: "Nothing", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'None of' cho nhóm từ 3 người/vật trở lên (số nhiều 'candidates').",
    category: "Pronouns",
  },
  {
    id: "B2-2140",
    questionEn:
      "Providing _____ feedback is essential for the continuous growth of our employees.",
    questionVi:
      "Cung cấp phản hồi _____ là điều cần thiết cho sự phát triển liên tục của các nhân viên của chúng ta.",
    options: [
      { option: "constructive", isCorrect: true },
      { option: "construction", isCorrect: false },
      { option: "constructively", isCorrect: false },
      { option: "constructed", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ 'constructive feedback' (phản hồi mang tính xây dựng).",
    category: "Adjectives",
  },
  {
    id: "B2-2141",
    questionEn:
      "The marketing team _____ the data for weeks before they finally presented the results.",
    questionVi:
      "Nhóm tiếp thị _____ dữ liệu trong nhiều tuần trước khi cuối cùng họ trình bày kết quả.",
    options: [
      { option: "had been analyzing", isCorrect: true },
      { option: "have been analyzing", isCorrect: false },
      { option: "analyzed", isCorrect: false },
      { option: "are analyzing", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng thì Quá khứ hoàn thành tiếp diễn để chỉ hành động kéo dài liên tục cho đến bir mốc quá khứ khác ('presented').",
    category: "Past Perfect Continuous",
  },
  {
    id: "B2-2142",
    questionEn:
      "The terms of the contract are _____ on the successful completion of the trial period.",
    questionVi:
      "Các điều khoản của hợp đồng _____ vào việc hoàn thành thành công thời gian thử việc.",
    options: [
      { option: "contingent", isCorrect: true },
      { option: "consistent", isCorrect: false },
      { option: "constant", isCorrect: false },
      { option: "contained", isCorrect: false },
    ],
    explanationVi: "Tính từ 'contingent on' (phụ thuộc vào/tùy thuộc vào).",
    category: "Adjectives",
  },
  {
    id: "B2-2143",
    questionEn:
      "Employees who work overtime are _____ to receive additional compensation or time off.",
    questionVi:
      "Nhân viên làm thêm giờ được _____ nhận thêm bồi thường hoặc thời gian nghỉ phép.",
    options: [
      { option: "entitled", isCorrect: true },
      { option: "entitle", isCorrect: false },
      { option: "entitling", isCorrect: false },
      { option: "entitlement", isCorrect: false },
    ],
    explanationVi: "Dạng bị động 'be entitled to' (được quyền hưởng).",
    category: "Passive Voice",
  },
  {
    id: "B2-2144",
    questionEn:
      "The seminar focuses on _____ staff performance through effective leadership strategies.",
    questionVi:
      "Hội thảo tập trung vào việc _____ hiệu suất của nhân viên thông qua các chiến lược lãnh đạo hiệu quả.",
    options: [
      { option: "optimizing", isCorrect: true },
      { option: "optimize", isCorrect: false },
      { option: "optimization", isCorrect: false },
      { option: "optimized", isCorrect: false },
    ],
    explanationVi: "Sau giới từ 'on' là bir V-ing (danh động từ).",
    category: "Gerunds and Infinitives",
  },
  {
    id: "B2-2145",
    questionEn:
      "His _____ as bir visionary leader has attracted many investors to the startup.",
    questionVi:
      "_____ của ông ấy như một nhà lãnh đạo có tầm nhìn đã thu hút nhiều nhà đầu tư đến với công ty khởi nghiệp.",
    options: [
      { option: "reputation", isCorrect: true },
      { option: "reputably", isCorrect: false },
      { option: "reputable", isCorrect: false },
      { option: "repute", isCorrect: false },
    ],
    explanationVi: "Cần danh từ 'reputation' (danh tiếng) làm chủ ngữ.",
    category: "Nouns",
  },
  {
    id: "B2-2146",
    questionEn:
      "The machine will automatically stop _____ it detects any obstruction in the conveyor belt.",
    questionVi:
      "Máy sẽ tự động dừng _____ nó phát hiện ra bất kỳ vật cản nào trên băng chuyền.",
    options: [
      { option: "if", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "while", isCorrect: false },
      { option: "until", isCorrect: false },
    ],
    explanationVi:
      "Liên từ 'if' (nếu) dùng để chỉ điều kiện xảy ra hành động hành động tự động dừng.",
    category: "Conditionals",
  },
  {
    id: "B2-2147",
    questionEn:
      "The manager was remarkably _____ when dealing with the unexpected delay in the supply chain.",
    questionVi:
      "Người quản lý đã cực kỳ _____ khi giải quyết sự chậm trễ bất ngờ trong chuỗi cung ứng.",
    options: [
      { option: "composed", isCorrect: true },
      { option: "composedly", isCorrect: false },
      { option: "compose", isCorrect: false },
      { option: "composition", isCorrect: false },
    ],
    explanationVi:
      "Tính từ 'composed' (điềm tĩnh/bình tĩnh) phù hợp để mô tả tính cách con người.",
    category: "Adjectives",
  },
  {
    id: "B2-2148",
    questionEn:
      "The report provided a _____ detailed account of the events leading up to the incident.",
    questionVi:
      "Báo cáo đã cung cấp bir bản tường trình chi tiết _____ về các sự kiện dẫn đến vụ việc.",
    options: [
      { option: "sufficiently", isCorrect: true },
      { option: "sufficient", isCorrect: false },
      { option: "sufficiency", isCorrect: false },
      { option: "suffice", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'sufficiently' (đủ/bir cách đầy đủ) bổ nghĩa cho tính từ 'detailed'.",
    category: "Adverbs",
  },
  {
    id: "B2-2149",
    questionEn: "No one knew the answer to the question, _____?",
    questionVi: "Không ai biết câu trả lời cho câu hỏi đó, _____?",
    options: [
      { option: "did they", isCorrect: true },
      { option: "did he", isCorrect: false },
      { option: "didn't they", isCorrect: false },
      { option: "doesn't he", isCorrect: false },
    ],
    explanationVi:
      "Câu hỏi đuôi với 'No one' (phủ định) thì phần đuôi phải là khẳng định và dùng 'they'.",
    category: "Tag Questions",
  },
  {
    id: "B2-2150",
    questionEn:
      "The company decided to _____ the new marketing campaign in early March.",
    questionVi:
      "Công ty đã quyết định _____ chiến dịch tiếp thị mới vào đầu tháng Ba.",
    options: [
      { option: "launch", isCorrect: true },
      { option: "launching", isCorrect: false },
      { option: "launched", isCorrect: false },
      { option: "launches", isCorrect: false },
    ],
    explanationVi:
      "Sau 'decide to' là động từ nguyên mẫu 'launch' (khởi động/tung ra).",
    category: "Verbs",
  },
  {
    id: "B2-2151",
    questionEn:
      "The presentation was _____ brief, covering only the most essential points.",
    questionVi:
      "Bài thuyết trình thật sự _____ ngắn gọn, chỉ bao quát những điểm thiết yếu nhất.",
    options: [
      { option: "remarkably", isCorrect: true },
      { option: "remark", isCorrect: false },
      { option: "remarkable", isCorrect: false },
      { option: "remarking", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'remarkably' (đáng chú ý/cực kỳ) bổ nghĩa cho tính từ 'brief'.",
    category: "Adverbs",
  },
  {
    id: "B2-2152",
    questionEn:
      "I look forward to _____ from you regarding my application for the sales associate position.",
    questionVi:
      "Tôi mong chờ được _____ từ bạn về đơn ứng tuyển của tôi cho vị trí nhân viên bán hàng.",
    options: [
      { option: "hearing", isCorrect: true },
      { option: "hear", isCorrect: false },
      { option: "to hear", isCorrect: false },
      { option: "heard", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'look forward to' + V-ing.",
    category: "Gerunds and Infinitives",
  },
  {
    id: "B2-2153",
    questionEn:
      "The building’s safety inspection must be completed _____ the end of the month.",
    questionVi:
      "Cuộc kiểm tra an toàn tòa nhà phải được hoàn thành _____ cuối tháng.",
    options: [
      { option: "by", isCorrect: true },
      { option: "until", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Giới từ 'by' để chỉ thời hạn cuối cùng.",
    category: "Prepositions",
  },
  {
    id: "B2-2154",
    questionEn:
      "The software includes several features that are specifically _____ for high-volume data processing.",
    questionVi:
      "Phần mềm bao gồm bir số tính năng đặc biệt _____ cho việc xử lý dữ liệu khối lượng lớn.",
    options: [
      { option: "optimized", isCorrect: true },
      { option: "optimizing", isCorrect: false },
      { option: "optimize", isCorrect: false },
      { option: "optimism", isCorrect: false },
    ],
    explanationVi: "Dạng bị động 'be optimized for' (được tối ưu hóa cho).",
    category: "Passive Voice",
  },
  {
    id: "B2-2155",
    questionEn:
      "Applicants are required to provide at least three _____ who can attest to their professional experience.",
    questionVi:
      "Các ứng viên được yêu cầu cung cấp ít nhất ba _____ những người có thể chứng thực kinh nghiệm chuyên môn của họ.",
    options: [
      { option: "references", isCorrect: true },
      { option: "referrals", isCorrect: false },
      { option: "referencing", isCorrect: false },
      { option: "referred", isCorrect: false },
    ],
    explanationVi:
      "Danh từ 'references' (người tham chiếu/người giới thiệu) phù hợp với bối cảnh tuyển dụng.",
    category: "Nouns",
  },
  {
    id: "B2-2156",
    questionEn:
      "The new ventilation system has significantly _____ the air quality in the laboratory.",
    questionVi:
      "Hệ thống thông gió mới đã làm _____ đáng kể chất lượng không khí trong phòng thí nghiệm.",
    options: [
      { option: "enhanced", isCorrect: true },
      { option: "enhance", isCorrect: false },
      { option: "enhancing", isCorrect: false },
      { option: "enhancement", isCorrect: false },
    ],
    explanationVi:
      "Thì Hiện tại hoàn thành: have + V3/ed. 'enhanced' (nâng cao/cải thiện).",
    category: "Verbs",
  },
  {
    id: "B2-2157",
    questionEn:
      "The budget for the project was _____ limited, forcing the team to be more creative with their resources.",
    questionVi:
      "Ngân sách cho dự án đã bị giới hạn _____ bir cách nghiêm ngặt, buộc đội ngũ phải sáng tạo hơn với các nguồn lực của mình.",
    options: [
      { option: "severely", isCorrect: true },
      { option: "severe", isCorrect: false },
      { option: "severity", isCorrect: false },
      { option: "severing", isCorrect: false },
    ],
    explanationVi:
      "Trạng từ 'severely' (bir cách nghiêm trọng/khắt khe) bổ nghĩa cho tính từ 'limited'.",
    category: "Adverbs",
  },
  {
    id: "B2-2158",
    questionEn:
      "It is essential that the lead architect _____ the blueprints once more before we submit them to the city council.",
    questionVi:
      "Điều thiết yếu là kiến trúc sư trưởng phải _____ các bản thiết kế một lần nữa trước khi chúng ta nộp chúng cho hội đồng thành phố.",
    options: [
      { option: "review", isCorrect: true },
      { option: "reviews", isCorrect: false },
      { option: "reviewed", isCorrect: false },
      { option: "reviewing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive mood) sau 'It is essential that' yêu cầu động từ ở dạng nguyên thể không 'to'.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2159",
    questionEn:
      "_____ had the new software been installed than the system crashed due to an unforeseen compatibility issue.",
    questionVi:
      "_____ phần mềm mới vừa được cài đặt thì hệ thống đã bị treo do sự cố tương thích không lường trước được.",
    options: [
      { option: "No sooner", isCorrect: true },
      { option: "Hardly", isCorrect: false },
      { option: "Barely", isCorrect: false },
      { option: "Scarcely", isCorrect: false },
    ],
    explanationVi: "Cấu trúc đảo ngữ 'No sooner... than' đi với 'than'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2160",
    questionEn:
      "The board of directors is looking for a candidate who can _____ the company's diverse interests in the global market.",
    questionVi:
      "Hội đồng quản trị đang tìm kiếm một ứng viên có thể _____ những lợi ích đa dạng của công ty trên thị trường toàn cầu.",
    options: [
      { option: "reconcile", isCorrect: true },
      { option: "reciprocate", isCorrect: false },
      { option: "relinquish", isCorrect: false },
      { option: "remunerate", isCorrect: false },
    ],
    explanationVi:
      "'Reconcile' có nghĩa là hòa hợp, điều hòa (các lợi ích khác nhau).",
    category: "Vocabulary",
  },
  {
    id: "B2-2161",
    questionEn:
      "Under no circumstances _____ the laboratory equipment be removed from the premises without written authorization.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, thiết bị phòng thí nghiệm _____ được mang ra khỏi cơ sở mà không có sự cho phép bằng văn bản.",
    options: [
      { option: "should", isCorrect: true },
      { option: "shall", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "must", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với cụm từ phủ định 'Under no circumstances'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2162",
    questionEn:
      "The merger was finalized only after months of _____ negotiations between the legal teams of both corporations.",
    questionVi:
      "Việc sáp nhập chỉ được hoàn tất sau nhiều tháng đàm phán _____ giữa các đội ngũ pháp lý của cả hai tập đoàn.",
    options: [
      { option: "protracted", isCorrect: true },
      { option: "distracted", isCorrect: false },
      { option: "extracted", isCorrect: false },
      { option: "retracted", isCorrect: false },
    ],
    explanationVi:
      "'Protracted' nghĩa là kéo dài (thường là hơn mức cần thiết hoặc mong đợi).",
    category: "Vocabulary",
  },
  {
    id: "B2-2163",
    questionEn:
      "The CEO suggested that the marketing department _____ a more aggressive strategy to regain market share.",
    questionVi:
      "Giám đốc điều hành gợi ý rằng bộ phận tiếp thị _____ một chiến lược quyết liệt hơn để giành lại thị phần.",
    options: [
      { option: "adopt", isCorrect: true },
      { option: "adopts", isCorrect: false },
      { option: "adopted", isCorrect: false },
      { option: "adopting", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với động từ 'suggest' yêu cầu động từ theo sau 'that' ở dạng nguyên mẫu.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2164",
    questionEn:
      "_____ the high cost of raw materials, the company managed to maintain its profit margins through operational efficiency.",
    questionVi:
      "_____ giá nguyên liệu thô cao, công ty vẫn duy trì được biên lợi nhuận thông qua hiệu quả vận hành.",
    options: [
      { option: "Notwithstanding", isCorrect: true },
      { option: "Albeit", isCorrect: false },
      { option: "Whereas", isCorrect: false },
      { option: "Nevertheless", isCorrect: false },
    ],
    explanationVi:
      "'Notwithstanding' (mặc dù/bất chấp) được dùng như một giới từ đứng trước một danh từ/cụm danh từ.",
    category: "Conjunctions/Prepositions",
  },
  {
    id: "B2-2165",
    questionEn:
      "The newly appointed manager is known for being _____ in his approach to problem-solving, often anticipating issues before they arise.",
    questionVi:
      "Người quản lý mới được bổ nhiệm nổi tiếng là người _____ trong cách giải quyết vấn đề, thường dự đoán trước các vấn đề trước khi chúng phát sinh.",
    options: [
      { option: "proactive", isCorrect: true },
      { option: "reactive", isCorrect: false },
      { option: "inactive", isCorrect: false },
      { option: "submissive", isCorrect: false },
    ],
    explanationVi:
      "'Proactive' nghĩa là chủ động giải quyết vấn đề thay vì đợi nó xảy ra mới phản ứng (reactive).",
    category: "Vocabulary",
  },
  {
    id: "B2-2166",
    questionEn:
      "Had the technical glitch _____ earlier, the product launch would not have been delayed by two weeks.",
    questionVi:
      "Nếu lỗi kỹ thuật được _____ sớm hơn, buổi ra mắt sản phẩm đã không bị hoãn lại hai tuần.",
    options: [
      { option: "been detected", isCorrect: true },
      { option: "detected", isCorrect: false },
      { option: "be detected", isCorrect: false },
      { option: "detect", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 đảo ngữ (Had + S + V3/ed). Ở đây cần dạng bị động (been + V3/ed) vì lỗi kỹ thuật phải được phát hiện.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2167",
    questionEn:
      "The consultant's report provided a _____ analysis of the economic factors influencing the regional trade agreement.",
    questionVi:
      "Báo cáo của chuyên gia tư vấn đã đưa ra một bản phân tích _____ về các yếu tố kinh tế ảnh hưởng đến hiệp định thương mại khu vực.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensible", isCorrect: false },
      { option: "compulsory", isCorrect: false },
      { option: "complimentary", isCorrect: false },
    ],
    explanationVi: "'Comprehensive' nghĩa là toàn diện, bao quát.",
    category: "Vocabulary",
  },
  {
    id: "B2-2168",
    questionEn:
      "By the time the annual report is published next month, the auditing team _____ their review of the fiscal year.",
    questionVi:
      "Vào thời điểm báo cáo thường niên được xuất bản vào tháng tới, nhóm kiểm toán _____ việc soát xét năm tài chính của họ.",
    options: [
      { option: "will have completed", isCorrect: true },
      { option: "will complete", isCorrect: false },
      { option: "has completed", isCorrect: false },
      { option: "completes", isCorrect: false },
    ],
    explanationVi:
      "Dùng thì tương lai hoàn thành (will have + V3/ed) để diễn tả một hành động sẽ hoàn thành trước một thời điểm hoặc hành động khác trong tương lai.",
    category: "Grammar - Tenses",
  },
  {
    id: "B2-2169",
    questionEn:
      "The company's decision to downsize was met with _____ opposition from the local labor union.",
    questionVi:
      "Quyết định cắt giảm nhân sự của công ty đã vấp phải sự phản đối _____ từ công đoàn lao động địa phương.",
    options: [
      { option: "strenuous", isCorrect: true },
      { option: "tenuous", isCorrect: false },
      { option: "ambiguous", isCorrect: false },
      { option: "frivolous", isCorrect: false },
    ],
    explanationVi:
      "'Strenuous opposition' là một collocation phổ biến, nghĩa là sự phản đối kịch liệt/mạnh mẽ.",
    category: "Vocabulary",
  },
  {
    id: "B2-2170",
    questionEn:
      "The environmental regulations are so _____ that many small businesses are struggling to comply with them.",
    questionVi:
      "Các quy định về môi trường _____ đến mức nhiều doanh nghiệp nhỏ đang gặp khó khăn trong việc tuân thủ.",
    options: [
      { option: "stringent", isCorrect: true },
      { option: "lenient", isCorrect: false },
      { option: "negligent", isCorrect: false },
      { option: "diligent", isCorrect: false },
    ],
    explanationVi: "'Stringent' nghĩa là nghiêm ngặt, khắt khe.",
    category: "Vocabulary",
  },
  {
    id: "B2-2171",
    questionEn:
      "The project manager insisted that every team member _____ the safety workshop scheduled for Friday afternoon.",
    questionVi:
      "Quản lý dự án khăng khăng rằng mọi thành viên trong nhóm _____ hội thảo an toàn được lên lịch vào chiều thứ Sáu.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "attends", isCorrect: false },
      { option: "attended", isCorrect: false },
      { option: "attending", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với động từ 'insist' yêu cầu động từ sau 'that' ở dạng nguyên mẫu.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2172",
    questionEn:
      "The financial department is responsible for ensuring that all expenses are _____ documented and approved.",
    questionVi:
      "Bộ phận tài chính có trách nhiệm đảm bảo rằng tất cả các khoản chi phí đều được ghi chép và phê duyệt _____.",
    options: [
      { option: "meticulously", isCorrect: true },
      { option: "marginally", isCorrect: false },
      { option: "superficially", isCorrect: false },
      { option: "randomly", isCorrect: false },
    ],
    explanationVi: "'Meticulously' nghĩa là một cách tỉ mỉ, kỹ lưỡng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2173",
    questionEn:
      "Only after the successful completion of the pilot program _____ to expand the service nationwide.",
    questionVi:
      "Chỉ sau khi hoàn thành thành công chương trình thí điểm, công ty _____ mở rộng dịch vụ trên toàn quốc.",
    options: [
      { option: "did the company decide", isCorrect: true },
      { option: "the company decided", isCorrect: false },
      { option: "decided the company", isCorrect: false },
      { option: "the company did decide", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only after + cụm danh từ/Ving/mệnh đề' đòi hỏi đảo trợ động từ lên trước chủ ngữ ở mệnh đề chính.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2174",
    questionEn:
      "The speaker's comments were _____ to the ongoing debate about urban development and public transport.",
    questionVi:
      "Các ý kiến của diễn giả _____ với cuộc tranh luận đang diễn ra về phát triển đô thị và giao thông công cộng.",
    options: [
      { option: "pertinent", isCorrect: true },
      { option: "redundant", isCorrect: false },
      { option: "equivalent", isCorrect: false },
      { option: "consecutive", isCorrect: false },
    ],
    explanationVi:
      "'Pertinent to' nghĩa là liên quan trực tiếp, thích hợp với một vấn đề nào đó.",
    category: "Vocabulary",
  },
  {
    id: "B2-2175",
    questionEn:
      "Investors are cautioned against making _____ decisions based on short-term market fluctuations.",
    questionVi:
      "Các nhà đầu tư được cảnh báo không nên đưa ra những quyết định _____ dựa trên những biến động ngắn hạn của thị trường.",
    options: [
      { option: "hasty", isCorrect: true },
      { option: "steady", isCorrect: false },
      { option: "wary", isCorrect: false },
      { option: "thrifty", isCorrect: false },
    ],
    explanationVi: "'Hasty decisions' là những quyết định vội vàng, hấp tấp.",
    category: "Vocabulary",
  },
  {
    id: "B2-2176",
    questionEn:
      "Should you _____ any further assistance during the installation process, please do not hesitate to contact our support team.",
    questionVi:
      "Nếu bạn _____ bất kỳ sự trợ giúp nào khác trong quá trình cài đặt, xin đừng ngần ngại liên hệ với đội ngũ hỗ trợ của chúng tôi.",
    options: [
      { option: "require", isCorrect: true },
      { option: "requires", isCorrect: false },
      { option: "required", isCorrect: false },
      { option: "requiring", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 1 (Should + S + V-inf).",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2177",
    questionEn:
      "The legal team is currently _____ the contract to ensure that all clauses comply with recent international trade laws.",
    questionVi:
      "Đội ngũ pháp lý hiện đang _____ hợp đồng để đảm bảo rằng tất cả các điều khoản đều tuân thủ luật thương mại quốc tế gần đây.",
    options: [
      { option: "scrutinizing", isCorrect: true },
      { option: "speculating", isCorrect: false },
      { option: "skimming", isCorrect: false },
      { option: "stagnating", isCorrect: false },
    ],
    explanationVi: "'Scrutinize' nghĩa là xem xét kỹ lưỡng, kiểm tra cẩn thận.",
    category: "Vocabulary",
  },
  {
    id: "B2-2178",
    questionEn:
      "The logistics company has implemented a new tracking system to _____ the delivery process and reduce delays.",
    questionVi:
      "Công ty hậu cần đã triển khai một hệ thống theo dõi mới để _____ quá trình giao hàng và giảm thiểu sự chậm trễ.",
    options: [
      { option: "expedite", isCorrect: true },
      { option: "exasperate", isCorrect: false },
      { option: "extinguish", isCorrect: false },
      { option: "exhibit", isCorrect: false },
    ],
    explanationVi: "'Expedite' nghĩa là xúc tiến, đẩy nhanh tiến độ.",
    category: "Vocabulary",
  },
  {
    id: "B2-2179",
    questionEn:
      "_____ the high vacancy rate in the downtown area, property developers are reconsidering new construction projects.",
    questionVi:
      "_____ tỷ lệ trống cao ở khu vực trung tâm thành phố, các nhà phát triển bất động sản đang xem xét lại các dự án xây dựng mới.",
    options: [
      { option: "Given", isCorrect: true },
      { option: "Provided", isCorrect: false },
      { option: "Unless", isCorrect: false },
      { option: "Whether", isCorrect: false },
    ],
    explanationVi:
      "'Given' (dựa trên/xét đến) được dùng như một giới từ để chỉ ra hoàn cảnh hoặc lý do.",
    category: "Conjunctions/Prepositions",
  },
  {
    id: "B2-2180",
    questionEn:
      "The CEO was impressed by the candidate's _____ knowledge of the semiconductor industry.",
    questionVi:
      "Giám đốc điều hành đã bị ấn tượng bởi kiến thức _____ của ứng viên về ngành công nghiệp bán dẫn.",
    options: [
      { option: "profound", isCorrect: true },
      { option: "shallow", isCorrect: false },
      { option: "trivial", isCorrect: false },
      { option: "generic", isCorrect: false },
    ],
    explanationVi: "'Profound knowledge' là kiến thức uyên thâm, sâu rộng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2181",
    questionEn:
      "The new zoning laws will have a _____ impact on the development of residential properties in the outskirts of the city.",
    questionVi:
      "Các luật phân vùng mới sẽ có tác động _____ đến việc phát triển các bất động sản nhà ở ở ngoại ô thành phố.",
    options: [
      { option: "substantial", isCorrect: true },
      { option: "subtle", isCorrect: false },
      { option: "superfluous", isCorrect: false },
      { option: "subjective", isCorrect: false },
    ],
    explanationVi: "'Substantial impact' là một tác động đáng kể.",
    category: "Vocabulary",
  },
  {
    id: "B2-2182",
    questionEn:
      "Not until the research team had analyzed all the data _____ their findings to the scientific community.",
    questionVi:
      "Mãi cho đến khi nhóm nghiên cứu phân tích xong toàn bộ dữ liệu, họ mới _____ những phát hiện của mình cho cộng đồng khoa học.",
    options: [
      { option: "did they present", isCorrect: true },
      { option: "they presented", isCorrect: false },
      { option: "had they presented", isCorrect: false },
      { option: "they had presented", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ 'Not until + S + had + V3/ed + trợ động từ + S + V'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2183",
    questionEn:
      "The software update includes several patches designed to _____ the security vulnerabilities identified last month.",
    questionVi:
      "Bản cập nhật phần mềm bao gồm một số bản vá được thiết kế để _____ các lỗ hổng bảo mật được xác định vào tháng trước.",
    options: [
      { option: "remedy", isCorrect: true },
      { option: "repeal", isCorrect: false },
      { option: "replicate", isCorrect: false },
      { option: "relapse", isCorrect: false },
    ],
    explanationVi: "'Remedy' (v) nghĩa là khắc phục, sửa chữa một vấn đề.",
    category: "Vocabulary",
  },
  {
    id: "B2-2184",
    questionEn:
      "The committee has requested that all members _____ their feedback on the proposed changes by the end of the week.",
    questionVi:
      "Ủy ban đã yêu cầu tất cả các thành viên _____ ý kiến phản hồi về những thay đổi đề xuất trước cuối tuần.",
    options: [
      { option: "submit", isCorrect: true },
      { option: "submits", isCorrect: false },
      { option: "submitted", isCorrect: false },
      { option: "submitting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định với động từ 'request'.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2185",
    questionEn:
      "The marketing director is _____ optimistic about the success of the new product launch, despite the initial setbacks.",
    questionVi:
      "Giám đốc tiếp thị lạc quan một cách _____ về thành công của đợt ra mắt sản phẩm mới, bất chấp những trở ngại ban đầu.",
    options: [
      { option: "cautiously", isCorrect: true },
      { option: "casually", isCorrect: false },
      { option: "carelessly", isCorrect: false },
      { option: "clumsily", isCorrect: false },
    ],
    explanationVi: "'Cautiously optimistic' là lạc quan một cách thận trọng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2186",
    questionEn:
      "The company's revenue growth has been _____ by the increasing competition in the e-commerce sector.",
    questionVi:
      "Sự tăng trưởng doanh thu của công ty đã bị _____ bởi sự cạnh tranh ngày càng tăng trong lĩnh vực thương mại điện tử.",
    options: [
      { option: "hindered", isCorrect: true },
      { option: "fostered", isCorrect: false },
      { option: "bolstered", isCorrect: false },
      { option: "ignited", isCorrect: false },
    ],
    explanationVi: "'Hindered' nghĩa là bị cản trở, kìm hãm.",
    category: "Vocabulary",
  },
  {
    id: "B2-2187",
    questionEn:
      "Had the firm invested more in research and development, it _____ a leader in the industry today.",
    questionVi:
      "Nếu công ty đầu tư nhiều hơn vào nghiên cứu và phát triển, thì hôm nay nó _____ là người dẫn đầu trong ngành.",
    options: [
      { option: "might be", isCorrect: true },
      { option: "might have been", isCorrect: false },
      { option: "would have been", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (Giả thiết quá khứ - Kết quả hiện tại).",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2188",
    questionEn:
      "The HR department aims to create an environment where employee contributions are _____ recognized and rewarded.",
    questionVi:
      "Bộ phận nhân sự đặt mục tiêu tạo ra một môi trường nơi những đóng góp của nhân viên được công nhận và khen thưởng _____.",
    options: [
      { option: "duly", isCorrect: true },
      { option: "vaguely", isCorrect: false },
      { option: "adversely", isCorrect: false },
      { option: "harshly", isCorrect: false },
    ],
    explanationVi:
      "'Duly recognized' nghĩa là được công nhận một cách xứng đáng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2189",
    questionEn:
      "The new factory will employ state-of-the-art machinery, _____ enhancing production capacity and quality control.",
    questionVi:
      "Nhà máy mới sẽ sử dụng máy móc hiện đại nhất, _____ nâng cao năng lực sản xuất và kiểm soát chất lượng.",
    options: [
      { option: "thereby", isCorrect: true },
      { option: "whereas", isCorrect: false },
      { option: "nevertheless", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
    ],
    explanationVi:
      "'Thereby' (bằng cách đó, nhờ đó) dùng để nối hành động với kết quả.",
    category: "Conjunctions",
  },
  {
    id: "B2-2190",
    questionEn:
      "The details of the negotiation are _____ strictly confidential until an official statement is released.",
    questionVi:
      "Chi tiết của cuộc đàm phán được giữ bí mật _____ cho đến khi có thông cáo chính thức được đưa ra.",
    options: [
      { option: "deemed", isCorrect: true },
      { option: "regarded", isCorrect: false },
      { option: "regarded as", isCorrect: false },
      { option: "considered", isCorrect: false },
    ],
    explanationVi: "'Deemed strictly confidential' là thuật ngữ chuyên môn.",
    category: "Vocabulary",
  },
  {
    id: "B2-2191",
    questionEn:
      "The internship program provides students with the opportunity to gain _____ experience in a professional work setting.",
    questionVi:
      "Chương trình thực tập cung cấp cho sinh viên cơ hội tích lũy kinh nghiệm _____ trong môi trường làm việc chuyên nghiệp.",
    options: [
      { option: "hands-on", isCorrect: true },
      { option: "second-hand", isCorrect: false },
      { option: "off-hand", isCorrect: false },
      { option: "high-handed", isCorrect: false },
    ],
    explanationVi: "'Hands-on experience' là kinh nghiệm thực tế.",
    category: "Vocabulary",
  },
  {
    id: "B2-2192",
    questionEn:
      "Despite the economic downturn, the company's commitment to sustainability remains _____.",
    questionVi:
      "Bất chấp sự suy thoái kinh tế, cam kết của công ty đối với sự bền vững vẫn _____.",
    options: [
      { option: "unwavering", isCorrect: true },
      { option: "unreliable", isCorrect: false },
      { option: "uncertain", isCorrect: false },
      { option: "unproductive", isCorrect: false },
    ],
    explanationVi: "'Unwavering' nghĩa là không dao động, kiên định.",
    category: "Vocabulary",
  },
  {
    id: "B2-2193",
    questionEn:
      "The auditor suggested that the company _____ its internal accounting procedures to prevent errors.",
    questionVi:
      "Kiểm toán viên gợi ý rằng công ty _____ các thủ tục kế toán nội bộ để ngăn ngừa sai sót.",
    options: [
      { option: "overhaul", isCorrect: true },
      { option: "overhauls", isCorrect: false },
      { option: "overhauled", isCorrect: false },
      { option: "overhauling", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'suggest'. 'Overhaul' là kiểm tra và sửa chữa toàn bộ.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2194",
    questionEn:
      "No sooner had the manager announced the new policy _____ the staff began to voice their concerns.",
    questionVi:
      "Ngay sau khi quản lý thông báo chính sách mới _____ nhân viên bắt đầu bày tỏ sự lo ngại của họ.",
    options: [
      { option: "than", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "then", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'No sooner had + S + V3/ed + than + clause'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2195",
    questionEn:
      "The legal department is responsible for ensuring that all business practices are _____ with government regulations.",
    questionVi:
      "Bộ phận pháp lý chịu trách nhiệm đảm bảo rằng tất cả các hoạt động kinh doanh đều _____ với các quy định của chính phủ.",
    options: [
      { option: "aligned", isCorrect: true },
      { option: "allotted", isCorrect: false },
      { option: "alleged", isCorrect: false },
      { option: "alleviated", isCorrect: false },
    ],
    explanationVi: "'Aligned with' nghĩa là tuân theo quy định.",
    category: "Vocabulary",
  },
  {
    id: "B2-2196",
    questionEn:
      "The CEO's opening remarks at the conference focused on the need for _____ innovation in the technology sector.",
    questionVi:
      "Lời phát biểu khai mạc của CEO tại hội nghị tập trung vào nhu cầu về sự đổi mới _____ trong lĩnh vực công nghệ.",
    options: [
      { option: "relentless", isCorrect: true },
      { option: "redundant", isCorrect: false },
      { option: "remorseful", isCorrect: false },
      { option: "reluctant", isCorrect: false },
    ],
    explanationVi: "'Relentless' nghĩa là không ngừng nghỉ.",
    category: "Vocabulary",
  },
  {
    id: "B2-2197",
    questionEn:
      "The new bridge project has been delayed indefinitely _____ several structural flaws were discovered during the final inspection.",
    questionVi:
      "Dự án cầu mới đã bị trì hoãn vô thời hạn _____ một số lỗi cấu trúc đã được phát hiện trong đợt kiểm tra cuối cùng.",
    options: [
      { option: "now that", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "so that", isCorrect: false },
      { option: "even if", isCorrect: false },
    ],
    explanationVi: "'Now that' giải thích lý do cho tình huống hiện tại.",
    category: "Conjunctions",
  },
  {
    id: "B2-2198",
    questionEn:
      "The company's decision to exit the European market was widely _____ as a tactical error by industry analysts.",
    questionVi:
      "Quyết định rút khỏi thị trường châu Âu của công ty được các nhà phân tích ngành _____ rộng rãi là một sai lầm về mặt chiến thuật.",
    options: [
      { option: "perceived", isCorrect: true },
      { option: "prescribed", isCorrect: false },
      { option: "persisted", isCorrect: false },
      { option: "preceded", isCorrect: false },
    ],
    explanationVi: "'Perceive as' nghĩa là được nhìn nhận là.",
    category: "Vocabulary",
  },
  {
    id: "B2-2199",
    questionEn:
      "Were the interest rates lower, the company _____ more likely to invest in the new manufacturing plant.",
    questionVi:
      "Nếu lãi suất thấp hơn, công ty _____ có nhiều khả năng đầu tư vào nhà máy sản xuất mới hơn.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "will be", isCorrect: false },
      { option: "would have been", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 2.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2200",
    questionEn:
      "The team worked _____ to meet the tight deadline for the product launch.",
    questionVi:
      "Nhóm đã làm việc _____ để kịp thời hạn eo hẹp của buổi ra mắt sản phẩm.",
    options: [
      { option: "diligently", isCorrect: true },
      { option: "lethargically", isCorrect: false },
      { option: "erratically", isCorrect: false },
      { option: "negligently", isCorrect: false },
    ],
    explanationVi: "'Diligently' nghĩa là một cách siêng năng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2201",
    questionEn:
      "The new software integrates seamlessly with our existing databases, _____ minimizing the downtime during the transition.",
    questionVi:
      "Phần mềm mới tích hợp liền mạch với cơ sở dữ liệu hiện có của chúng tôi, _____ giảm thiểu thời gian ngừng hoạt động trong quá trình chuyển đổi.",
    options: [
      { option: "thus", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "provided", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
    ],
    explanationVi: "'Thus' chỉ kết quả trực tiếp.",
    category: "Conjunctions",
  },
  {
    id: "B2-2202",
    questionEn:
      "Investors were advised to _____ their portfolios to mitigate risks associated with currency fluctuations.",
    questionVi:
      "Các nhà đầu tư được khuyên nên _____ danh mục đầu tư của họ để giảm thiểu rủi ro liên quan đến biến động tiền tệ.",
    options: [
      { option: "diversify", isCorrect: true },
      { option: "diminish", isCorrect: false },
      { option: "disregard", isCorrect: false },
      { option: "deviate", isCorrect: false },
    ],
    explanationVi: "'Diversify' là đa dạng hóa.",
    category: "Vocabulary",
  },
  {
    id: "B2-2203",
    questionEn:
      "The speaker provided a _____ account of his experiences working in the emerging markets of Southeast Asia.",
    questionVi:
      "Diễn giả đã cung cấp một bản mô tả _____ về những trải nghiệm của ông khi làm việc tại các thị trường mới nổi ở Đông Nam Á.",
    options: [
      { option: "vivid", isCorrect: true },
      { option: "vague", isCorrect: false },
      { option: "void", isCorrect: false },
      { option: "vapid", isCorrect: false },
    ],
    explanationVi: "'Vivid' nghĩa là sống động.",
    category: "Vocabulary",
  },
  {
    id: "B2-2204",
    questionEn:
      "By the end of the fiscal year, the company _____ over $2 million in research and development.",
    questionVi:
      "Tính đến cuối năm tài chính, công ty _____ hơn 2 triệu đô la vào nghiên cứu và phát triển.",
    options: [
      { option: "will have invested", isCorrect: true },
      { option: "will invest", isCorrect: false },
      { option: "invests", isCorrect: false },
      { option: "is investing", isCorrect: false },
    ],
    explanationVi: "Thì tương lai hoàn thành.",
    category: "Grammar - Tenses",
  },
  {
    id: "B2-2205",
    questionEn:
      "The proposed merger is subject to _____ by the Federal Trade Commission to ensure it does not violate antitrust laws.",
    questionVi:
      "Việc sáp nhập đề xuất phải chịu sự _____ của Ủy ban Thương mại Liên bang để đảm bảo nó không vi phạm luật chống độc quyền.",
    options: [
      { option: "scrutiny", isCorrect: true },
      { option: "strategy", isCorrect: false },
      { option: "subsidy", isCorrect: false },
      { option: "summary", isCorrect: false },
    ],
    explanationVi: "'Subject to scrutiny' nghĩa là chịu sự kiểm tra kỹ lưỡng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2206",
    questionEn:
      "The newly hired consultant suggested that the firm _____ its reliance on a single supplier for key components.",
    questionVi:
      "Chuyên gia tư vấn mới được thuê đã gợi ý rằng công ty _____ sự phụ thuộc của mình vào một nhà cung cấp duy nhất cho các linh kiện then chốt.",
    options: [
      { option: "reduce", isCorrect: true },
      { option: "reduces", isCorrect: false },
      { option: "reduced", isCorrect: false },
      { option: "reducing", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định với 'suggest'.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2207",
    questionEn:
      "Scarcely _____ the delegates arrived at the summit when the opening ceremony began.",
    questionVi:
      "Các đại biểu vừa mới đến hội nghị thượng đỉnh thì lễ khai mạc đã bắt đầu.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Scarcely ... when'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2208",
    questionEn:
      "The company's performance has been _____ by the recent global supply chain disruptions.",
    questionVi:
      "Hiệu suất của công ty đã bị _____ bởi những gián đoạn chuỗi cung ứng toàn cầu gần đây.",
    options: [
      { option: "adversely affected", isCorrect: true },
      { option: "positively impacted", isCorrect: false },
      { option: "slowly improved", isCorrect: false },
      { option: "greatly enhanced", isCorrect: false },
    ],
    explanationVi: "'Adversely affected' là bị ảnh hưởng bất lợi.",
    category: "Vocabulary",
  },
  {
    id: "B2-2209",
    questionEn:
      "Many economists argue that the current fiscal policy is _____ to the long-term growth of the national economy.",
    questionVi:
      "Nhiều nhà kinh tế lập luận rằng chính sách tài khóa hiện tại _____ đối với sự tăng trưởng dài hạn của nền kinh tế quốc gia.",
    options: [
      { option: "detrimental", isCorrect: true },
      { option: "beneficial", isCorrect: false },
      { option: "impartial", isCorrect: false },
      { option: "essential", isCorrect: false },
    ],
    explanationVi: "'Detrimental to' nghĩa là có hại cho.",
    category: "Vocabulary",
  },
  {
    id: "B2-2210",
    questionEn:
      "The local government has _____ a series of incentives to encourage foreign investment in the manufacturing sector.",
    questionVi:
      "Chính quyền địa phương đã _____ một loạt các ưu đãi để khuyến khích đầu tư nước ngoài vào lĩnh vực sản xuất.",
    options: [
      { option: "instituted", isCorrect: true },
      { option: "installed", isCorrect: false },
      { option: "insinuated", isCorrect: false },
      { option: "insulated", isCorrect: false },
    ],
    explanationVi: "'Institute' nghĩa là thiết lập chính sách.",
    category: "Vocabulary",
  },
  {
    id: "B2-2211",
    questionEn:
      "The sales representatives are expected to maintain _____ relationships with their key clients to ensure long-term loyalty.",
    questionVi:
      "Các đại diện kinh doanh được kỳ vọng sẽ duy trì các mối quan hệ _____ với các khách hàng chính của họ để đảm bảo lòng trung thành lâu dài.",
    options: [
      { option: "cordial", isCorrect: true },
      { option: "hostile", isCorrect: false },
      { option: "frigid", isCorrect: false },
      { option: "distant", isCorrect: false },
    ],
    explanationVi: "'Cordial relationships' là các mối quan hệ nồng hậu.",
    category: "Vocabulary",
  },
  {
    id: "B2-2212",
    questionEn:
      "_____ the project be finished ahead of schedule, all contributors will receive an additional performance bonus.",
    questionVi:
      "_____ dự án được hoàn thành trước thời hạn, tất cả những người đóng góp sẽ nhận được một khoản tiền thưởng hiệu suất bổ sung.",
    options: [
      { option: "Should", isCorrect: true },
      { option: "Unless", isCorrect: false },
      { option: "Once", isCorrect: false },
      { option: "Despite", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 1.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2213",
    questionEn:
      "The new CEO plans to _____ the company's hierarchy to foster better communication between management and staff.",
    questionVi:
      "CEO mới có kế hoạch _____ hệ thống cấp bậc của công ty để thúc đẩy giao tiếp tốt hơn giữa ban quản lý và nhân viên.",
    options: [
      { option: "streamline", isCorrect: true },
      { option: "stifle", isCorrect: false },
      { option: "standardize", isCorrect: false },
      { option: "stagnate", isCorrect: false },
    ],
    explanationVi: "'Streamline' nghĩa là tinh giản hệ thống.",
    category: "Vocabulary",
  },
  {
    id: "B2-2214",
    questionEn:
      "The terms of the lease agreement specify that the tenant is responsible for all _____ repairs to the property.",
    questionVi:
      "Các điều khoản của thỏa thuận thuê quy định rằng người thuê nhà phải chịu trách nhiệm cho tất cả các sửa chữa _____ đối với bất động sản.",
    options: [
      { option: "minor", isCorrect: true },
      { option: "measly", isCorrect: false },
      { option: "meager", isCorrect: false },
      { option: "muted", isCorrect: false },
    ],
    explanationVi: "'Minor repairs' là các sửa chữa nhỏ.",
    category: "Vocabulary",
  },
  {
    id: "B2-2215",
    questionEn:
      "The marketing campaign was designed to create a strong _____ between the brand and the concept of luxury.",
    questionVi:
      "Chiến dịch tiếp thị được thiết kế để tạo ra một sự _____ mạnh mẽ giữa thương hiệu và khái niệm sang trọng.",
    options: [
      { option: "association", isCorrect: true },
      { option: "altercation", isCorrect: false },
      { option: "alienation", isCorrect: false },
      { option: "aspiration", isCorrect: false },
    ],
    explanationVi: "'Association' nghĩa là sự liên tưởng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2216",
    questionEn:
      "In the interest of efficiency, it is recommended that the administrative tasks _____ to junior staff members.",
    questionVi:
      "Vì lợi ích hiệu quả, chúng tôi khuyên rằng các nhiệm vụ hành chính _____ cho nhân viên cấp dưới.",
    options: [
      { option: "be delegated", isCorrect: true },
      { option: "delegate", isCorrect: false },
      { option: "are delegated", isCorrect: false },
      { option: "delegating", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định bị động.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2217",
    questionEn:
      "_____ had the press conference concluded than the company's stock price began to plummet.",
    questionVi:
      "Buổi họp báo vừa kết thúc thì giá cổ phiếu của công ty đã bắt đầu giảm mạnh.",
    options: [
      { option: "No sooner", isCorrect: true },
      { option: "Hardly", isCorrect: false },
      { option: "Scarcely", isCorrect: false },
      { option: "Barely", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'No sooner ... than'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2218",
    questionEn:
      "The report highlights the _____ of renewable energy sources in reducing the carbon footprint of industrial operations.",
    questionVi:
      "Báo cáo nhấn mạnh _____ của các nguồn năng lượng tái tạo trong việc giảm dấu chân carbon của các hoạt động công nghiệp.",
    options: [
      { option: "efficacy", isCorrect: true },
      { option: "effrontery", isCorrect: false },
      { option: "effusion", isCorrect: false },
      { option: "efficiency", isCorrect: false },
    ],
    explanationVi: "'Efficacy' nghĩa là hiệu quả hữu hiệu.",
    category: "Vocabulary",
  },
  {
    id: "B2-2219",
    questionEn:
      "The legal advisor warned the executive that his actions might be _____ as a breach of contract.",
    questionVi:
      "Cố vấn pháp lý đã cảnh báo vị giám đốc rằng hành động của ông có thể bị _____ là vi phạm hợp đồng.",
    options: [
      { option: "construed", isCorrect: true },
      { option: "constructed", isCorrect: false },
      { option: "constrained", isCorrect: false },
      { option: "consumed", isCorrect: false },
    ],
    explanationVi: "'Construe' nghĩa là được hiểu là.",
    category: "Vocabulary",
  },
  {
    id: "B2-2220",
    questionEn:
      "The new regulations are expected to _____ competition in the telecommunications market by lowering entry barriers.",
    questionVi:
      "Các quy định mới được kỳ vọng sẽ _____ sự cạnh tranh trên thị trường viễn thông bằng cách hạ thấp các rào cản gia nhập.",
    options: [
      { option: "stimulate", isCorrect: true },
      { option: "stagnate", isCorrect: false },
      { option: "simulate", isCorrect: false },
      { option: "suffocate", isCorrect: false },
    ],
    explanationVi: "'Stimulate' là kích thích cạnh tranh.",
    category: "Vocabulary",
  },
  {
    id: "B2-2221",
    questionEn:
      "Provided that the atmospheric conditions remain stable, the rocket launch _____ as planned tomorrow morning.",
    questionVi:
      "Với điều kiện các điều kiện khí quyển vẫn ổn định, vụ phóng tên lửa _____ như kế hoạch vào sáng mai.",
    options: [
      { option: "will proceed", isCorrect: true },
      { option: "proceeds", isCorrect: false },
      { option: "has proceeded", isCorrect: false },
      { option: "proceeded", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 1.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2222",
    questionEn:
      "The accountant discovered a _____ discrepancy in the quarterly financial statement that needed immediate attention.",
    questionVi:
      "Kế toán đã phát hiện một sự sai lệch _____ trong báo cáo tài chính hằng quý cần được chú ý ngay lập tức.",
    options: [
      { option: "startling", isCorrect: true },
      { option: "stagnant", isCorrect: false },
      { option: "stringent", isCorrect: false },
      { option: "scanty", isCorrect: false },
    ],
    explanationVi: "'Startling discrepancy' là sự sai lệch đáng kinh ngạc.",
    category: "Vocabulary",
  },
  {
    id: "B2-2223",
    questionEn:
      "The researcher's hypothesis was _____ by the experimental data collected over a six-month period.",
    questionVi:
      "Giả thuyết của nhà nghiên cứu đã được _____ bởi dữ liệu thực nghiệm được thu thập trong khoảng thời gian sáu tháng.",
    options: [
      { option: "validated", isCorrect: true },
      { option: "vacillated", isCorrect: false },
      { option: "vibrated", isCorrect: false },
      { option: "violated", isCorrect: false },
    ],
    explanationVi: "'Validate' là xác nhận tính đúng đắn.",
    category: "Vocabulary",
  },
  {
    id: "B2-2224",
    questionEn:
      "Many startups fail within their first year due to insufficient capital and a lack of _____ business planning.",
    questionVi:
      "Nhiều công ty khởi nghiệp thất bại trong năm đầu tiên do thiếu vốn và thiếu kế hoạch kinh doanh _____.",
    options: [
      { option: "rigorous", isCorrect: true },
      { option: "riotous", isCorrect: false },
      { option: "ridiculous", isCorrect: false },
      { option: "righteous", isCorrect: false },
    ],
    explanationVi: "'Rigorous planning' là lập kế hoạch nghiêm ngặt.",
    category: "Vocabulary",
  },
  {
    id: "B2-2225",
    questionEn:
      "Not only _____ to reduce costs, but it also improved employee morale through its new flexible work policy.",
    questionVi:
      "Công ty không chỉ thành công trong việc giảm chi phí, mà còn cải thiện tinh thần nhân viên thông qua chính sách làm việc linh hoạt mới.",
    options: [
      { option: "did the company succeed", isCorrect: true },
      { option: "the company succeeded", isCorrect: false },
      { option: "has the company succeeded", isCorrect: false },
      { option: "the company did succeed", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not only'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2226",
    questionEn:
      "The director suggested that the annual gala _____ to late October to avoid a conflict with the public holiday.",
    questionVi:
      "Giám đốc gợi ý rằng buổi dạ tiệc thường niên _____ sang cuối tháng 10 để tránh trùng với ngày lễ công cộng.",
    options: [
      { option: "be moved", isCorrect: true },
      { option: "is moved", isCorrect: false },
      { option: "moves", isCorrect: false },
      { option: "be moving", isCorrect: false },
    ],
    explanationVi: "Giả định bị động.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2227",
    questionEn:
      "The company's success is _____ to its ability to adapt quickly to changing market trends.",
    questionVi:
      "Thành công của công ty _____ nhờ vào khả năng thích ứng nhanh chóng với các xu hướng thị trường đang thay đổi.",
    options: [
      { option: "attributable", isCorrect: true },
      { option: "accessible", isCorrect: false },
      { option: "accountable", isCorrect: false },
      { option: "applicable", isCorrect: false },
    ],
    explanationVi: "'Attributable to' là do cái gì đó.",
    category: "Vocabulary",
  },
  {
    id: "B2-2228",
    questionEn:
      "The committee will deliberate _____ the proposals before reaching a final decision by Friday.",
    questionVi:
      "Ủy ban sẽ thảo luận kỹ lưỡng _____ các đề xuất trước khi đưa ra quyết định cuối cùng vào thứ Sáu.",
    options: [
      { option: "on", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "'Deliberate on' là thảo luận về.",
    category: "Prepositions",
  },
  {
    id: "B2-2229",
    questionEn:
      "The project was completed ahead of schedule, _____ exceeding the clients' expectations for quality and functionality.",
    questionVi:
      "Dự án đã hoàn thành trước thời hạn, _____ vượt quá mong đợi của khách hàng về chất lượng và chức năng.",
    options: [
      { option: "thereby", isCorrect: true },
      { option: "nonetheless", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
      { option: "whereas", isCorrect: false },
    ],
    explanationVi: "'Thereby' chỉ kết quả.",
    category: "Conjunctions",
  },
  {
    id: "B2-2230",
    questionEn:
      "The new tax incentives are specifically aimed at _____ local manufacturing and reducing dependence on imports.",
    questionVi:
      "Các ưu đãi thuế mới đặc biệt nhằm mục đích _____ sản xuất trong nước và giảm sự phụ thuộc vào hàng nhập khẩu.",
    options: [
      { option: "bolstering", isCorrect: true },
      { option: "dampening", isCorrect: false },
      { option: "forfeiting", isCorrect: false },
      { option: "severing", isCorrect: false },
    ],
    explanationVi: "'Bolster' là củng cố.",
    category: "Vocabulary",
  },
  {
    id: "B2-2231",
    questionEn:
      "Had the board known about the risks earlier, they _____ differently regarding the acquisition of the subsidiary.",
    questionVi:
      "Nếu hội đồng quản trị biết về những rủi ro sớm hơn, họ đã _____ khác đi liên quan đến việc mua lại công ty con.",
    options: [
      { option: "would have acted", isCorrect: true },
      { option: "acted", isCorrect: false },
      { option: "were acting", isCorrect: false },
      { option: "will act", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 3.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2232",
    questionEn:
      "The manager's _____ praise for the team's hard work boosted morale during the peak sales season.",
    questionVi:
      "Lời khen ngợi _____ của người quản lý đối với sự chăm chỉ của nhóm đã thúc đẩy tinh thần trong suốt mùa bán hàng cao điểm.",
    options: [
      { option: "lavish", isCorrect: true },
      { option: "sparse", isCorrect: false },
      { option: "scant", isCorrect: false },
      { option: "stingy", isCorrect: false },
    ],
    explanationVi: "'Lavish praise' là khen ngợi hết lời.",
    category: "Vocabulary",
  },
  {
    id: "B2-2233",
    questionEn:
      "Environmental groups are urging the government to _____ more stringent penalties for illegal dumping of hazardous waste.",
    questionVi:
      "Các nhóm môi trường đang thúc giục chính phủ _____ các hình phạt nghiêm khắc hơn đối với việc đổ chất thải nguy hại trái phép.",
    options: [
      { option: "impose", isCorrect: true },
      { option: "expose", isCorrect: false },
      { option: "depose", isCorrect: false },
      { option: "oppose", isCorrect: false },
    ],
    explanationVi: "'Impose penalties' là áp đặt hình phạt.",
    category: "Vocabulary",
  },
  {
    id: "B2-2234",
    questionEn:
      "By the time the new regulations come into effect next year, most industries _____ to the changes.",
    questionVi:
      "Vào thời điểm các quy định mới có hiệu lực vào năm tới, hầu hết các ngành _____ với những thay đổi.",
    options: [
      { option: "will have adapted", isCorrect: true },
      { option: "will adapt", isCorrect: false },
      { option: "adapted", isCorrect: false },
      { option: "have adapted", isCorrect: false },
    ],
    explanationVi: "Thì tương lai hoàn thành.",
    category: "Grammar - Tenses",
  },
  {
    id: "B2-2235",
    questionEn:
      "The contractor promised to _____ all deficiencies identified in the building report within ten business days.",
    questionVi:
      "Nhà thầu đã hứa sẽ _____ tất cả các thiếu sót được xác định trong báo cáo công trình trong vòng mười ngày làm việc.",
    options: [
      { option: "rectify", isCorrect: true },
      { option: "ratify", isCorrect: false },
      { option: "nullify", isCorrect: false },
      { option: "verify", isCorrect: false },
    ],
    explanationVi: "'Rectify' là sửa chữa lỗi.",
    category: "Vocabulary",
  },
  {
    id: "B2-2236",
    questionEn:
      "The legal department is currently _____ the recent Supreme Court ruling to determine its impact on the company's contracts.",
    questionVi:
      "Bộ phận pháp lý hiện đang _____ phán quyết gần đây của Tòa án Tối cao để xác định tác động của nó đối với các hợp đồng của công ty.",
    options: [
      { option: "evaluating", isCorrect: true },
      { option: "elevating", isCorrect: false },
      { option: "evacuating", isCorrect: false },
      { option: "elucidating", isCorrect: false },
    ],
    explanationVi: "'Evaluate' là đánh giá.",
    category: "Vocabulary",
  },
  {
    id: "B2-2237",
    questionEn:
      "Hardly _____ the ink dried on the merger agreement when rumors of a leadership shake-up began to circulate.",
    questionVi:
      "Mực trên thỏa thuận sáp nhập vừa mới khô thì những tin đồn về một cuộc cải tổ lãnh đạo đã bắt đầu lan truyền.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Hardly'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2238",
    questionEn:
      "The regional manager is highly _____ for his ability to resolve complex interpersonal conflicts within the workplace.",
    questionVi:
      "Quản lý khu vực được _____ cao vì khả năng giải quyết các mâu thuẫn cá nhân phức tạp tại nơi làm việc.",
    options: [
      { option: "esteemed", isCorrect: true },
      { option: "estimated", isCorrect: false },
      { option: "established", isCorrect: false },
      { option: "exclaimed", isCorrect: false },
    ],
    explanationVi: "'Esteemed' là được kính trọng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2239",
    questionEn:
      "The CEO requested that the board members _____ the proposed expansion plan carefully before the vote.",
    questionVi:
      "CEO đã yêu cầu các thành viên hội đồng trị _____ kế hoạch mở rộng đề xuất một cách cẩn thận trước khi bỏ phiếu.",
    options: [
      { option: "deliberate", isCorrect: true },
      { option: "deliberates", isCorrect: false },
      { option: "deliberated", isCorrect: false },
      { option: "deliberating", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2240",
    questionEn:
      "Despite being relatively new to the field, her analysis was remarkably _____ and insightful.",
    questionVi:
      "Dù tương đối mới trong lĩnh vực này, bản phân tích của cô ấy lại vô cùng _____ và sắc sảo.",
    options: [
      { option: "nuanced", isCorrect: true },
      { option: "neglected", isCorrect: false },
      { option: "nominal", isCorrect: false },
      { option: "notorious", isCorrect: false },
    ],
    explanationVi: "'Nuanced' là tinh tế.",
    category: "Vocabulary",
  },
  {
    id: "B2-2241",
    questionEn:
      "The company's stock price _____ significantly after the announcement of a major breakthrough in battery technology.",
    questionVi:
      "Giá cổ phiếu của công ty đã tăng _____ một cách đáng kể sau thông báo về một bước đột phá lớn trong công nghệ pin.",
    options: [
      { option: "surged", isCorrect: true },
      { option: "slumped", isCorrect: false },
      { option: "stagnated", isCorrect: false },
      { option: "fluctuated", isCorrect: false },
    ],
    explanationVi: "'Surge' là tăng vọt.",
    category: "Vocabulary",
  },
  {
    id: "B2-2242",
    questionEn:
      "The new housing development was designed to _____ the local environment, preserving as many mature trees as possible.",
    questionVi:
      "Khu phát triển nhà ở mới được thiết kế để _____ môi trường địa phương, bảo tồn càng nhiều cây cổ thụ càng tốt.",
    options: [
      { option: "complement", isCorrect: true },
      { option: "compliment", isCorrect: false },
      { option: "complicate", isCorrect: false },
      { option: "compromise", isCorrect: false },
    ],
    explanationVi: "'Complement' là bổ sung/phù hợp.",
    category: "Vocabulary",
  },
  {
    id: "B2-2243",
    questionEn:
      "The finance director expects that the investment _____ a high return over the next three-year period.",
    questionVi:
      "Giám đốc tài chính kỳ vọng rằng khoản đầu tư đó sẽ _____ một mức lợi nhuận cao trong giai đoạn ba năm tới.",
    options: [
      { option: "will yield", isCorrect: true },
      { option: "yields", isCorrect: false },
      { option: "has yielded", isCorrect: false },
      { option: "yielded", isCorrect: false },
    ],
    explanationVi: "Thì tương lai đơn.",
    category: "Grammar - Tenses",
  },
  {
    id: "B2-2244",
    questionEn:
      "The internship provides a _____ opportunity for recent graduates to gain practical experience in the financial sector.",
    questionVi:
      "Chương trình thực tập cung cấp một cơ hội _____ cho sinh viên mới tốt nghiệp để tích lũy kinh nghiệm thực tế trong lĩnh vực tài chính.",
    options: [
      { option: "pivotal", isCorrect: true },
      { option: "trivial", isCorrect: false },
      { option: "lateral", isCorrect: false },
      { option: "skeptical", isCorrect: false },
    ],
    explanationVi: "'Pivotal' là then chốt.",
    category: "Vocabulary",
  },
  {
    id: "B2-2245",
    questionEn:
      "_____ the high demand for specialized labor, the city is offering grants to vocational training programs.",
    questionVi:
      "_____ nhu cầu cao về lao động chuyên môn, thành phố đang cung cấp các khoản tài trợ cho các chương trình đào tạo nghề.",
    options: [
      { option: "In light of", isCorrect: true },
      { option: "In addition to", isCorrect: false },
      { option: "In spite of", isCorrect: false },
      { option: "Instead of", isCorrect: false },
    ],
    explanationVi: "'In light of' là xét trong bối cảnh.",
    category: "Conjunctions",
  },
  {
    id: "B2-2246",
    questionEn:
      "The speaker's articulation was so _____ that even those in the back of the hall could hear every word.",
    questionVi:
      "Cách phát âm của diễn giả rõ ràng _____ đến nỗi ngay cả những người ngồi ở cuối hội trường cũng có thể nghe được từng chữ.",
    options: [
      { option: "precise", isCorrect: true },
      { option: "vague", isCorrect: false },
      { option: "muffled", isCorrect: false },
      { option: "ambiguous", isCorrect: false },
    ],
    explanationVi: "'Precise' là rõ ràng.",
    category: "Vocabulary",
  },
  {
    id: "B2-2247",
    questionEn:
      "The company's expansion into South America has been _____ by political instability in the region.",
    questionVi:
      "Công ty mở rộng sang Nam Mỹ đã bị _____ bởi sự bất ổn chính trị trong khu vực.",
    options: [
      { option: "impeded", isCorrect: true },
      { option: "facilitated", isCorrect: false },
      { option: "advocated", isCorrect: false },
      { option: "accelerated", isCorrect: false },
    ],
    explanationVi: "'Impede' là cản trở.",
    category: "Vocabulary",
  },
  {
    id: "B2-2248",
    questionEn:
      "It is imperative that the security team _____ the protocols immediately after any unauthorized access is detected.",
    questionVi:
      "Điều cấp thiết là đội an ninh phải _____ các giao thức ngay lập tức sau khi bất kỳ truy cập trái phép nào được phát hiện.",
    options: [
      { option: "update", isCorrect: true },
      { option: "updates", isCorrect: false },
      { option: "updated", isCorrect: false },
      { option: "updating", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định.",
    category: "Grammar - Subjunctive",
  },
  {
    id: "B2-2249",
    questionEn:
      "Only by implementing a more efficient delivery system _____ the company hope to compete with larger retailers.",
    questionVi:
      "Chỉ bằng cách triển khai một hệ thống giao hàng hiệu quả hơn, công ty _____ hy vọng cạnh tranh được với các nhà bán lẻ lớn hơn.",
    options: [
      { option: "can", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Only by'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2250",
    questionEn:
      "The auditor's report was _____ of the management's failure to oversee the internal control systems.",
    questionVi:
      "Báo cáo của kiểm toán viên đã _____ về sự thất bại của ban quản lý trong việc giám sát các hệ thống kiểm soát nội bộ.",
    options: [
      { option: "critical", isCorrect: true },
      { option: "complimentary", isCorrect: false },
      { option: "cautious", isCorrect: false },
      { option: "conclusive", isCorrect: false },
    ],
    explanationVi: "'Critical of' là chỉ trích.",
    category: "Vocabulary",
  },
  {
    id: "B2-2251",
    questionEn:
      "The CEO believes that the proposed changes will _____ long-term benefits for the company's stakeholders.",
    questionVi:
      "Giám đốc điều hành tin rằng những thay đổi được đề xuất sẽ _____ lợi ích lâu dài cho các cổ đông của công ty.",
    options: [
      { option: "accrue", isCorrect: true },
      { option: "adhere", isCorrect: false },
      { option: "ascribe", isCorrect: false },
      { option: "acquire", isCorrect: false },
    ],
    explanationVi: "'Accrue' là tích lũy dần lợi ích.",
    category: "Vocabulary",
  },
  {
    id: "B2-2252",
    questionEn:
      "The software development team is working to _____ several bugs reported by users in the latest version.",
    questionVi:
      "Nhóm phát triển phần mềm hiện đang làm việc để _____ một số lỗi được người dùng báo cáo trong phiên bản mới nhất.",
    options: [
      { option: "eliminate", isCorrect: true },
      { option: "elucidate", isCorrect: false },
      { option: "emulate", isCorrect: false },
      { option: "enumerate", isCorrect: false },
    ],
    explanationVi: "'Eliminate' là loại bỏ.",
    category: "Vocabulary",
  },
  {
    id: "B2-2253",
    questionEn:
      "Were the manager to reconsider his decision, the project _____ back on track within two weeks.",
    questionVi:
      "Nếu người quản lý xem xét lại quyết định của mình, dự án _____ quay trở lại đúng hướng trong vòng hai tuần.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "will be", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 2.",
    category: "Grammar - Conditionals",
  },
  {
    id: "B2-2254",
    questionEn:
      "The company's marketing efforts have been _____ on building brand awareness among younger consumers.",
    questionVi:
      "Các nỗ lực tiếp thị của công ty đã được _____ vào việc xây dựng nhận thức thương hiệu trong số những người tiêu dùng trẻ tuổi.",
    options: [
      { option: "centered", isCorrect: true },
      { option: "collected", isCorrect: false },
      { option: "combined", isCorrect: false },
      { option: "connected", isCorrect: false },
    ],
    explanationVi: "'Center on' là tập trung vào.",
    category: "Vocabulary",
  },
  {
    id: "B2-2255",
    questionEn:
      "In order to remain competitive, the corporation must _____ new technologies and digital tools.",
    questionVi:
      "Để duy trì tính cạnh tranh, tập đoàn phải _____ các công nghệ và công cụ kỹ thuật số mới.",
    options: [
      { option: "embrace", isCorrect: true },
      { option: "evade", isCorrect: false },
      { option: "exclude", isCorrect: false },
      { option: "erase", isCorrect: false },
    ],
    explanationVi: "'Embrace' là đón nhận.",
    category: "Vocabulary",
  },
  {
    id: "B2-2256",
    questionEn:
      "Under no circumstances _____ confidential information be shared with unauthorized individuals.",
    questionVi:
      "Hỡi bất kỳ hoàn cảnh nào, thông tin bảo mật _____ được chia sẻ với những cá nhân không có thẩm quyền.",
    options: [
      { option: "may", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Under no circumstances'.",
    category: "Grammar - Inversion",
  },
  {
    id: "B2-2257",
    questionEn:
      "The executive's speech was _____ with examples of how innovation can drive corporate growth.",
    questionVi:
      "Bài phát biểu của vị lãnh đạo được _____ bằng các ví dụ về cách sự đổi mới có thể thúc đẩy tăng trưởng của công ty.",
    options: [
      { option: "punctuated", isCorrect: true },
      { option: "punctured", isCorrect: false },
      { option: "prompted", isCorrect: false },
      { option: "predicted", isCorrect: false },
    ],
    explanationVi: "'Punctuated with' là được xen kẽ bởi.",
    category: "Vocabulary",
  },
  {
    id: "B2-2258",
    questionEn:
      "The legal department suggested that the contract be revised _____ the company inadvertently violate local regulations.",
    questionVi:
      "Bộ phận pháp lý đề nghị nên sửa đổi hợp đồng _____ công ty vô tình vi phạm các quy định của địa phương.",
    options: [
      { option: "lest", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "whether", isCorrect: false },
      { option: "if only", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'lest + S + (should) + V-inf' dùng để diễn tả sự e sợ rằng điều gì đó có thể xảy ra (để tránh cho...).",
    category: "Grammar/Subjunctive",
  },
  {
    id: "B2-2259",
    questionEn:
      "_____ the timely intervention of the logistics manager, the shipment would have been delayed by at least two weeks.",
    questionVi:
      "_____ sự can thiệp kịp thời của quản lý hậu cần, chuyến hàng lẽ ra đã bị chậm trễ ít nhất hai tuần.",
    options: [
      { option: "But for", isCorrect: true },
      { option: "As for", isCorrect: false },
      { option: "In case of", isCorrect: false },
      { option: "Except for", isCorrect: false },
    ],
    explanationVi:
      "'But for' có nghĩa là 'nếu không nhờ/nếu không có', thường dùng trong câu điều kiện loại 3.",
    category: "Grammar/Conditional",
  },
  {
    id: "B2-2260",
    questionEn:
      "Subsequent _____ the merger, the new entity will undergo a comprehensive audit to ensure financial transparency.",
    questionVi:
      "Sau khi _____ sáp nhập, thực thể mới sẽ trải qua một cuộc kiểm toán toàn diện để đảm bảo tính minh bạch tài chính.",
    options: [
      { option: "to", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "from", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'subsequent to' có nghĩa là 'sau khi' hoặc 'tiếp theo sau'.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2261",
    questionEn:
      "Not until the final audit report was released _____ the CEO realize the extent of the budgetary deficit.",
    questionVi:
      "Mãi cho đến khi báo cáo kiểm toán cuối cùng được công bố, Giám đốc điều hành _____ mới nhận thức được mức độ thâm hụt ngân sách.",
    options: [
      { option: "did", isCorrect: true },
      { option: "had", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với 'Not until': Not until + clause/time + trợ động từ + S + V.",
    category: "Grammar/Inversion",
  },
  {
    id: "B2-2262",
    questionEn:
      "The tech startup's software architecture is highly _____, allowing it to handle sudden surges in user traffic without performance loss.",
    questionVi:
      "Kiến trúc phần mềm của công ty khởi nghiệp công nghệ này rất _____, cho phép nó xử lý lượng truy cập tăng đột biến mà không bị giảm hiệu suất.",
    options: [
      { option: "scalable", isCorrect: true },
      { option: "stagnant", isCorrect: false },
      { option: "perishable", isCorrect: false },
      { option: "obsolete", isCorrect: false },
    ],
    explanationVi:
      "'Scalable' (có khả năng mở rộng) là thuật ngữ quan trọng trong công nghệ để chỉ hệ thống có thể nâng cấp linh hoạt.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2263",
    questionEn:
      "The newly appointed financial officer is tasked with _____ the company's outstanding debts by the end of the fiscal year.",
    questionVi:
      "Viên chức tài chính mới được bổ nhiệm có nhiệm vụ _____ các khoản nợ tồn đọng của công ty vào cuối năm tài chính.",
    options: [
      { option: "liquidating", isCorrect: true },
      { option: "fluctuating", isCorrect: false },
      { option: "speculating", isCorrect: false },
      { option: "depreciating", isCorrect: false },
    ],
    explanationVi:
      "'Liquidate' trong tài chính có nghĩa là thanh lý hoặc trả hết nợ.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2264",
    questionEn:
      "The board of directors decided to _____ the proposed restructuring plan due to unforeseen geopolitical instability.",
    questionVi:
      "Hội đồng quản trị đã quyết định _____ kế hoạch tái cơ cấu được đề xuất do sự bất ổn địa chính trị không lường trước được.",
    options: [
      { option: "shelve", isCorrect: true },
      { option: "launch", isCorrect: false },
      { option: "accelerate", isCorrect: false },
      { option: "endorse", isCorrect: false },
    ],
    explanationVi:
      "'Shelve' (gác lại/tạm hoãn) thường dùng cho các dự án hoặc kế hoạch bị dừng lại vô thời hạn.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2265",
    questionEn:
      "The HR department has implemented a new policy to _____ the skills gap within the organization's IT sector.",
    questionVi:
      "Bộ phận Nhân sự đã thực hiện một chính sách mới nhằm _____ khoảng cách kỹ năng trong lĩnh vực CNTT của tổ chức.",
    options: [
      { option: "bridge", isCorrect: true },
      { option: "widen", isCorrect: false },
      { option: "overlook", isCorrect: false },
      { option: "discard", isCorrect: false },
    ],
    explanationVi:
      "Cụm 'bridge the gap' có nghĩa là thu hẹp hoặc lấp đầy khoảng cách/sự thiếu hụt.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2266",
    questionEn:
      "The distribution center is located in a _____ position, providing easy access to both the seaport and the international airport.",
    questionVi:
      "Trung tâm phân phối nằm ở một vị trí _____, giúp tiếp cận dễ dàng với cả cảng biển và sân bay quốc tế.",
    options: [
      { option: "strategic", isCorrect: true },
      { option: "redundant", isCorrect: false },
      { option: "random", isCorrect: false },
      { option: "marginal", isCorrect: false },
    ],
    explanationVi:
      "'Strategic' (chiến lược) dùng để mô tả vị trí thuận lợi cho kinh doanh và hậu cần.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2267",
    questionEn:
      "All employees are expected to comply _____ the strict data privacy protocols established by the legal team.",
    questionVi:
      "Tất cả nhân viên được dự kiến sẽ tuân thủ _____ các quy trình bảo mật dữ liệu nghiêm ngặt do nhóm pháp lý thiết lập.",
    options: [
      { option: "with", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "by", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc cố định: 'comply with something' (tuân thủ điều gì đó).",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2268",
    questionEn:
      "The vendor failed to deliver the components on time, which constitutes a material _____ of the contract terms.",
    questionVi:
      "Nhà cung cấp đã không giao các linh kiện đúng hạn, điều này cấu thành một sự _____ nghiêm trọng các điều khoản hợp đồng.",
    options: [
      { option: "breach", isCorrect: true },
      { option: "adherence", isCorrect: false },
      { option: "amendment", isCorrect: false },
      { option: "consensus", isCorrect: false },
    ],
    explanationVi:
      "'Breach of contract' là thuật ngữ pháp lý chỉ việc vi phạm hợp đồng.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2269",
    questionEn:
      "Should the market conditions _____ worsen, the company may need to consider downsizing its workforce.",
    questionVi:
      "Nếu các điều kiện thị trường _____ trở nên tồi tệ hơn, công ty có thể cần cân nhắc cắt giảm nhân lực.",
    options: [
      { option: "further", isCorrect: true },
      { option: "more far", isCorrect: false },
      { option: "farther", isCorrect: false },
      { option: "distant", isCorrect: false },
    ],
    explanationVi:
      "'Further' dùng để chỉ mức độ sâu sắc hoặc xa hơn về khái niệm (tồi tệ hơn).",
    category: "Grammar/Adverbs",
  },
  {
    id: "B2-2270",
    questionEn:
      "The CEO's resignation was _____ to his disagreement with the board's long-term investment strategy.",
    questionVi:
      "Việc từ chức của Giám đốc điều hành là _____ do bất đồng của ông với chiến lược đầu tư dài hạn của hội đồng quản trị.",
    options: [
      { option: "attributed", isCorrect: true },
      { option: "dedicated", isCorrect: false },
      { option: "contributed", isCorrect: false },
      { option: "subjected", isCorrect: false },
    ],
    explanationVi: "'Ascribed/Attributed to': được cho là do/quy cho cái gì.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2271",
    questionEn:
      "The pharmaceutical company is currently conducting rigorous trials to ensure that the new drug is _____ for public use.",
    questionVi:
      "Công ty dược phẩm hiện đang tiến hành các thử nghiệm nghiêm ngặt để đảm bảo rằng loại thuốc mới _____ cho người dân sử dụng.",
    options: [
      { option: "viable", isCorrect: true },
      { option: "volatile", isCorrect: false },
      { option: "vibrant", isCorrect: false },
      { option: "vague", isCorrect: false },
    ],
    explanationVi:
      "'Viable' (khả thi/có thể sử dụng được) phù hợp nhất trong ngữ cảnh thử nghiệm thuốc.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2272",
    questionEn:
      "The procurement manager requested a _____ breakdown of the shipping costs before approving the invoice.",
    questionVi:
      "Quản lý mua hàng đã yêu cầu một bảng phân tích _____ các chi phí vận chuyển trước khi phê duyệt hóa đơn.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehensible", isCorrect: false },
      { option: "compulsory", isCorrect: false },
      { option: "competitive", isCorrect: false },
    ],
    explanationVi:
      "'Comprehensive' (toàn diện/chi tiết) thường đi với breakdown hoặc report.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2273",
    questionEn:
      "The factory has decided to _____ its operations to reduce the overall carbon footprint.",
    questionVi:
      "Nhà máy đã quyết định _____ các hoạt động của mình để giảm tổng lượng khí thải carbon.",
    options: [
      { option: "streamline", isCorrect: true },
      { option: "broaden", isCorrect: false },
      { option: "complicate", isCorrect: false },
      { option: "amplify", isCorrect: false },
    ],
    explanationVi:
      "'Streamline' (tinh giản/tối ưu hóa) giúp hoạt động hiệu quả và tiết kiệm hơn.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2274",
    questionEn:
      "The candidate's resume was impressive, _____ her extensive experience in international arbitration cases.",
    questionVi:
      "Sơ yếu lý lịch của ứng viên rất ấn tượng, _____ kinh nghiệm sâu rộng của cô ấy trong các vụ trọng tài quốc tế.",
    options: [
      { option: "notwithstanding", isCorrect: true },
      { option: "given", isCorrect: false },
      { option: "providing", isCorrect: false },
      { option: "regardless", isCorrect: false },
    ],
    explanationVi:
      "Trong câu này, 'notwithstanding' (mặc dù/bất kể) hoặc 'given' (xét đến) có thể dùng, nhưng 'given' thường khớp hơn nếu muốn khen ngợi. Tuy nhiên, 'notwithstanding' là một trạng từ/giới từ cao cấp thường thấy.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2275",
    questionEn:
      "By the time the new software update is released, the development team _____ on the project for over eighteen months.",
    questionVi:
      "Vào lúc bản cập nhật phần mềm mới được phát hành, đội ngũ phát triển _____ cho dự án này được hơn mười tám tháng.",
    options: [
      { option: "will have been working", isCorrect: true },
      { option: "will be working", isCorrect: false },
      { option: "had been working", isCorrect: false },
      { option: "have been working", isCorrect: false },
    ],
    explanationVi:
      "Thì tương lai hoàn thành tiếp diễn: Diễn tả một hành động kéo dài liên tục đến một thời điểm trong tương lai.",
    category: "Grammar/Tenses",
  },
  {
    id: "B2-2276",
    questionEn:
      "The accountant discovered a significant _____ in the quarterly financial statements that needed immediate correction.",
    questionVi:
      "Kế toán đã phát hiện ra một sự _____ đáng kể trong các báo cáo tài chính hàng quý cần được sửa chữa ngay lập tức.",
    options: [
      { option: "discrepancy", isCorrect: true },
      { option: "proficiency", isCorrect: false },
      { option: "redundancy", isCorrect: false },
      { option: "consistency", isCorrect: false },
    ],
    explanationVi:
      "'Discrepancy' (sự khác biệt/không thống nhất) là từ chuyên ngành trong tài chính/kế toán.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2277",
    questionEn:
      "The CEO emphasized that the company's success is _____ upon the dedication and hard work of all staff members.",
    questionVi:
      "Giám đốc điều hành nhấn mạnh rằng sự thành công của công ty _____ vào sự tận tâm và làm việc chăm chỉ của tất cả nhân viên.",
    options: [
      { option: "contingent", isCorrect: true },
      { option: "relevant", isCorrect: false },
      { option: "adjacent", isCorrect: false },
      { option: "equivalent", isCorrect: false },
    ],
    explanationVi:
      "'Contingent upon/on' có nghĩa là 'tùy thuộc vào' hoặc 'dựa trên'.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2278",
    questionEn:
      "The new zoning laws will significantly _____ the expansion of the industrial park over the next decade.",
    questionVi:
      "Các luật phân vùng mới sẽ _____ đáng kể việc mở rộng khu công nghiệp trong thập kỷ tới.",
    options: [
      { option: "facilitate", isCorrect: true },
      { option: "hinder", isCorrect: false },
      { option: "prohibit", isCorrect: false },
      { option: "overlook", isCorrect: false },
    ],
    explanationVi:
      "'Facilitate' (tạo điều kiện thuận lợi) là từ thường dùng trong bối cảnh phát triển/quản lý.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2279",
    questionEn:
      "The legal counsel advised the firm to _____ any potential conflicts of interest before entering the joint venture.",
    questionVi:
      "Cố vấn pháp lý đã khuyên công ty nên _____ mọi xung đột lợi ích tiềm ẩn trước khi tham gia vào liên doanh.",
    options: [
      { option: "disclose", isCorrect: true },
      { option: "conceal", isCorrect: false },
      { option: "fabricate", isCorrect: false },
      { option: "evade", isCorrect: false },
    ],
    explanationVi:
      "'Disclose' (tiết lộ/công bố) là hành động bắt buộc trong các giao dịch pháp lý chuyên nghiệp.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2280",
    questionEn:
      "Rarely _____ such a high level of consumer demand for a niche technological product in such a short period.",
    questionVi:
      "Hiếm khi _____ mức độ nhu cầu của người tiêu dùng đối với một sản phẩm công nghệ ngách cao như vậy trong một khoảng thời gian ngắn như thế.",
    options: [
      { option: "have we seen", isCorrect: true },
      { option: "we have seen", isCorrect: false },
      { option: "we saw", isCorrect: false },
      { option: "did we saw", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với trạng từ phủ định 'Rarely': Rarely + trợ động từ + S + V.",
    category: "Grammar/Inversion",
  },
  {
    id: "B2-2281",
    questionEn:
      "The logistics company decided to _____ its fleet to include more electric vehicles to lower operational costs.",
    questionVi:
      "Công ty hậu cần quyết định _____ đội xe của mình để bao gồm nhiều xe điện hơn nhằm giảm chi phí vận hành.",
    options: [
      { option: "augment", isCorrect: true },
      { option: "deplete", isCorrect: false },
      { option: "shrink", isCorrect: false },
      { option: "curtail", isCorrect: false },
    ],
    explanationVi:
      "'Augment' (gia tăng/tăng thêm) dùng để chỉ việc mở rộng quy mô hoặc số lượng.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2282",
    questionEn:
      "The human resources manager is looking for a candidate who can _____ well under pressure and meet tight deadlines.",
    questionVi:
      "Quản lý nhân sự đang tìm kiếm một ứng viên có thể _____ tốt dưới áp lực và hoàn thành đúng hạn các thời hạn chặt chẽ.",
    options: [
      { option: "perform", isCorrect: true },
      { option: "interact", isCorrect: false },
      { option: "comply", isCorrect: false },
      { option: "submit", isCorrect: false },
    ],
    explanationVi:
      "'Perform well under pressure' là cụm từ thông dụng trong tuyển dụng.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2283",
    questionEn:
      "Investors are cautious because the company's liabilities currently _____ its total liquid assets.",
    questionVi:
      "Các nhà đầu tư đang thận trọng vì các khoản nợ của công ty hiện tại _____ tổng tài sản lưu động của nó.",
    options: [
      { option: "exceed", isCorrect: true },
      { option: "precede", isCorrect: false },
      { option: "recede", isCorrect: false },
      { option: "concede", isCorrect: false },
    ],
    explanationVi:
      "'Exceed' (vượt quá) là thuật ngữ so sánh số liệu tài chính.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2284",
    questionEn:
      "The data scientist used a complex algorithm to _____ future market trends based on historical data points.",
    questionVi:
      "Nhà khoa học dữ liệu đã sử dụng một thuật toán phức tạp để _____ các xu hướng thị trường trong tương lai dựa trên các điểm dữ liệu lịch sử.",
    options: [
      { option: "extrapolate", isCorrect: true },
      { option: "exaggerate", isCorrect: false },
      { option: "extract", isCorrect: false },
      { option: "exhibit", isCorrect: false },
    ],
    explanationVi:
      "'Extrapolate' (suy diễn/dự đoán dựa trên dữ liệu hiện có) là thuật ngữ chuyên ngành thống kê/phân tích.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2285",
    questionEn:
      "The marketing campaign was so successful that it resulted in a _____ increase in annual revenue.",
    questionVi:
      "Chiến dịch tiếp thị thành công đến mức nó mang lại một sự gia tăng _____ trong doanh thu hàng năm.",
    options: [
      { option: "substantial", isCorrect: true },
      { option: "negligible", isCorrect: false },
      { option: "trivial", isCorrect: false },
      { option: "marginal", isCorrect: false },
    ],
    explanationVi:
      "'Substantial' (đáng kể/lớn) dùng để mô tả mức độ tăng trưởng mạnh mẽ.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2286",
    questionEn:
      "Provided that the terms are _____, the two companies will sign the partnership agreement next Monday.",
    questionVi:
      "Với điều kiện là các điều khoản được _____, hai công ty sẽ ký kết thỏa thuận hợp tác vào thứ Hai tới.",
    options: [
      { option: "agreeable", isCorrect: true },
      { option: "aggressive", isCorrect: false },
      { option: "arbitrary", isCorrect: false },
      { option: "ambiguous", isCorrect: false },
    ],
    explanationVi:
      "'Agreeable' (có thể chấp nhận được/thỏa đáng) thường dùng cho các điều khoản đàm phán.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2287",
    questionEn:
      "The internship program provides students with an _____ opportunity to gain practical experience in a corporate environment.",
    questionVi:
      "Chương trình thực tập cung cấp cho sinh viên một cơ hội _____ để có được kinh nghiệm thực tế trong môi trường doanh nghiệp.",
    options: [
      { option: "invaluable", isCorrect: true },
      { option: "invalid", isCorrect: false },
      { option: "insecure", isCorrect: false },
      { option: "insolvent", isCorrect: false },
    ],
    explanationVi:
      "'Invaluable' (vô giá/rất quý báu) thường dùng để khen ngợi các cơ hội học tập.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2288",
    questionEn:
      "The warehouse supervisor insisted that all safety gear _____ worn at all times within the loading dock area.",
    questionVi:
      "Giám sát kho hàng khăng khăng rằng tất cả các thiết bị bảo hộ _____ phải được đeo mọi lúc trong khu vực bến bốc hàng.",
    options: [
      { option: "be", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "being", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive): 'Insist that + S + V-inf'.",
    category: "Grammar/Subjunctive",
  },
  {
    id: "B2-2289",
    questionEn:
      "The software giant is planning to _____ several smaller startups to bolster its cloud computing capabilities.",
    questionVi:
      "Gã khổng lồ phần mềm đang có kế hoạch _____ một vài công ty khởi nghiệp nhỏ hơn để tăng cường khả năng điện toán đám mây của mình.",
    options: [
      { option: "acquire", isCorrect: true },
      { option: "relinquish", isCorrect: false },
      { option: "abandon", isCorrect: false },
      { option: "forfeit", isCorrect: false },
    ],
    explanationVi: "'Acquire' (thâu tóm/mua lại) là thuật ngữ M&A phổ biến.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2290",
    questionEn:
      "The financial analyst noted that the stock's value had _____ significantly due to the sudden interest rate hike.",
    questionVi:
      "Nhà phân tích tài chính lưu ý rằng giá trị của cổ phiếu đã _____ đáng kể do việc tăng lãi suất đột ngột.",
    options: [
      { option: "depreciated", isCorrect: true },
      { option: "appreciated", isCorrect: false },
      { option: "stagnated", isCorrect: false },
      { option: "escalated", isCorrect: false },
    ],
    explanationVi: "'Depreciate' (giảm giá trị) trái nghĩa với 'appreciate'.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2291",
    questionEn:
      "_____ the high cost of raw materials, the manufacturer managed to maintain its profit margins.",
    questionVi:
      "_____ giá nguyên liệu thô cao, nhà sản xuất vẫn xoay xở để duy trì biên lợi nhuận của mình.",
    options: [
      { option: "In spite of", isCorrect: true },
      { option: "In addition to", isCorrect: false },
      { option: "On account of", isCorrect: false },
      { option: "By means of", isCorrect: false },
    ],
    explanationVi: "'In spite of' (mặc dù) dùng để nối hai vế tương phản.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2292",
    questionEn:
      "The company's expansion into the Asian market has been _____ by a series of bureaucratic hurdles.",
    questionVi:
      "Việc mở rộng của công ty vào thị trường châu Á đã bị _____ bởi một loạt các rào cản hành chính.",
    options: [
      { option: "impeded", isCorrect: true },
      { option: "expedited", isCorrect: false },
      { option: "incentivized", isCorrect: false },
      { option: "authorized", isCorrect: false },
    ],
    explanationVi:
      "'Impede' (cản trở/ngăn cản) thường dùng trong bối cảnh khó khăn kinh doanh.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2293",
    questionEn:
      "The technical support team succeeded in _____ the server issues within two hours of the initial report.",
    questionVi:
      "Nhóm hỗ trợ kỹ thuật đã thành công trong việc _____ các sự cố máy chủ trong vòng hai giờ kể từ báo cáo ban đầu.",
    options: [
      { option: "rectifying", isCorrect: true },
      { option: "modifying", isCorrect: false },
      { option: "verifying", isCorrect: false },
      { option: "amplifying", isCorrect: false },
    ],
    explanationVi:
      "'Rectify' (khắc phục/sửa chữa) thường dùng cho lỗi kỹ thuật hoặc sai sót.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2294",
    questionEn:
      "The legal department is reviewing the _____ of the non-disclosure agreement to ensure it is enforceable in court.",
    questionVi:
      "Bộ phận pháp lý đang xem xét _____ của thỏa thuận bảo mật để đảm bảo nó có thể thực thi được tại tòa án.",
    options: [
      { option: "validity", isCorrect: true },
      { option: "liability", isCorrect: false },
      { option: "futility", isCorrect: false },
      { option: "hostility", isCorrect: false },
    ],
    explanationVi:
      "'Validity' (tính hiệu lực/hợp lệ) là khái niệm then chốt trong luật hợp đồng.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2295",
    questionEn:
      "The newly hired logistics coordinator is highly _____ in optimizing complex supply chain operations.",
    questionVi:
      "Điều phối viên hậu cần mới thuê rất _____ trong việc tối ưu hóa các hoạt động chuỗi cung ứng phức tạp.",
    options: [
      { option: "proficient", isCorrect: true },
      { option: "sufficient", isCorrect: false },
      { option: "deficient", isCorrect: false },
      { option: "efficient", isCorrect: false },
    ],
    explanationVi:
      "'Proficient in' (thành thạo/giỏi về) dùng để nói về kỹ năng chuyên môn.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2296",
    questionEn:
      "Had the company invested in R&D sooner, it _____ its current competitive advantage long ago.",
    questionVi:
      "Nếu công ty đầu tư vào R&D sớm hơn, nó lẽ ra đã _____ lợi thế cạnh tranh hiện tại từ lâu rồi.",
    options: [
      { option: "would have secured", isCorrect: true },
      { option: "will have secured", isCorrect: false },
      { option: "should secure", isCorrect: false },
      { option: "secures", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 với đảo ngữ 'Had + S + V3': vế sau dùng 'would have V3'.",
    category: "Grammar/Conditional",
  },
  {
    id: "B2-2297",
    questionEn:
      "The HR director argued that a flexible work schedule is a key factor in _____ top talent from competing firms.",
    questionVi:
      "Giám đốc nhân sự lập luận rằng lịch trình làm việc linh hoạt là yếu tố quan trọng trong việc _____ những tài năng hàng đầu từ các công ty đối thủ.",
    options: [
      { option: "retaining", isCorrect: true },
      { option: "dismissing", isCorrect: false },
      { option: "replacing", isCorrect: false },
      { option: "suspending", isCorrect: false },
    ],
    explanationVi:
      "'Retain' (giữ chân nhân viên) là thuật ngữ quan trọng trong quản trị nhân sự.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2298",
    questionEn:
      "The fiscal policy changes were implemented _____ a view to stimulating economic growth in the rural sectors.",
    questionVi:
      "Các thay đổi chính sách tài khóa đã được thực hiện _____ mục tiêu kích thích tăng trưởng kinh tế ở các khu vực nông thôn.",
    options: [
      { option: "with", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "by", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ cố định: 'with a view to + V-ing' (với mục đích làm gì).",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2299",
    questionEn:
      "The audit revealed that the firm had _____ several tax regulations over the past three fiscal years.",
    questionVi:
      "Cuộc kiểm toán tiết lộ rằng công ty đã _____ một vài quy định thuế trong ba năm tài chính vừa qua.",
    options: [
      { option: "flouted", isCorrect: true },
      { option: "upheld", isCorrect: false },
      { option: "abided", isCorrect: false },
      { option: "ratified", isCorrect: false },
    ],
    explanationVi:
      "'Flout' (coi thường/phớt lờ quy định) mang nghĩa tiêu cực, phù hợp với kết quả kiểm toán phát hiện sai phạm.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2300",
    questionEn:
      "The IT department will _____ the legacy systems by next quarter to make way for a more robust cloud infrastructure.",
    questionVi:
      "Bộ phận CNTT sẽ _____ các hệ thống cũ vào quý tới để nhường chỗ cho một hạ tầng đám mây mạnh mẽ hơn.",
    options: [
      { option: "phase out", isCorrect: true },
      { option: "bring up", isCorrect: false },
      { option: "carry on", isCorrect: false },
      { option: "set back", isCorrect: false },
    ],
    explanationVi:
      "'Phase out' (loại bỏ dần dần) thường dùng cho công nghệ hoặc quy trình cũ.",
    category: "Grammar/Phrasal Verbs",
  },
  {
    id: "B2-2301",
    questionEn:
      "The CEO requested that the board members _____ their opinions on the acquisition during the upcoming meeting.",
    questionVi:
      "Giám đốc điều hành yêu cầu các thành viên hội đồng quản trị _____ ý kiến của họ về việc mua lại trong cuộc họp sắp tới.",
    options: [
      { option: "voice", isCorrect: true },
      { option: "mute", isCorrect: false },
      { option: "divert", isCorrect: false },
      { option: "conceal", isCorrect: false },
    ],
    explanationVi:
      "'Voice one's opinion' (nói ra/bày tỏ ý kiến) là cách diễn đạt chuyên nghiệp.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2302",
    questionEn:
      "The distributor has a reputation for being _____ in its delivery times, even during peak holiday seasons.",
    questionVi:
      "Nhà phân phối có tiếng là _____ về thời gian giao hàng, ngay cả trong những mùa lễ cao điểm.",
    options: [
      { option: "punctual", isCorrect: true },
      { option: "procrastinating", isCorrect: false },
      { option: "erratic", isCorrect: false },
      { option: "intermittent", isCorrect: false },
    ],
    explanationVi:
      "'Punctual' (đúng giờ) là phẩm chất quan trọng trong hậu cần.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2303",
    questionEn:
      "The company's stock price _____ after the news of the successful clinical trial was announced.",
    questionVi:
      "Giá cổ phiếu của công ty _____ sau khi tin tức về thử nghiệm lâm sàng thành công được công bố.",
    options: [
      { option: "surged", isCorrect: true },
      { option: "slumped", isCorrect: false },
      { option: "stabilized", isCorrect: false },
      { option: "plummeted", isCorrect: false },
    ],
    explanationVi: "'Surge' (tăng vọt) dùng để mô tả sự tăng giá mạnh mẽ.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2304",
    questionEn:
      "Employees who demonstrate exceptional _____ may be eligible for an accelerated promotion track.",
    questionVi:
      "Những nhân viên thể hiện _____ xuất sắc có thể đủ điều kiện cho lộ trình thăng tiến nhanh.",
    options: [
      { option: "merit", isCorrect: true },
      { option: "latency", isCorrect: false },
      { option: "apathy", isCorrect: false },
      { option: "lethargy", isCorrect: false },
    ],
    explanationVi:
      "'Merit' (năng lực/công trạng) là cơ sở để thăng tiến trong công ty.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2305",
    questionEn:
      "The legal team is working on a clause that will _____ the company from liability in case of natural disasters.",
    questionVi:
      "Nhóm pháp lý đang soạn thảo một điều khoản sẽ _____ công ty khỏi trách nhiệm pháp lý trong trường hợp thiên tai.",
    options: [
      { option: "exempt", isCorrect: true },
      { option: "indict", isCorrect: false },
      { option: "prosecute", isCorrect: false },
      { option: "implicate", isCorrect: false },
    ],
    explanationVi:
      "'Exempt from liability' (miễn trừ trách nhiệm) là thuật ngữ pháp lý.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2306",
    questionEn:
      "Cybersecurity measures must be _____ enough to counter increasingly sophisticated hacking attempts.",
    questionVi:
      "Các biện pháp an ninh mạng phải đủ _____ để chống lại các nỗ lực hack ngày càng tinh vi.",
    options: [
      { option: "stringent", isCorrect: true },
      { option: "lenient", isCorrect: false },
      { option: "lax", isCorrect: false },
      { option: "fragile", isCorrect: false },
    ],
    explanationVi:
      "'Stringent' (nghiêm ngặt/chặt chẽ) thường dùng cho quy định hoặc biện pháp an ninh.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2307",
    questionEn:
      "The new warehouse is _____ with the latest automated sorting technology to increase efficiency.",
    questionVi:
      "Nhà kho mới được _____ công nghệ phân loại tự động mới nhất để tăng hiệu quả.",
    options: [
      { option: "equipped", isCorrect: true },
      { option: "divested", isCorrect: false },
      { option: "depleted", isCorrect: false },
      { option: "stripped", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'be equipped with' (được trang bị với).",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2308",
    questionEn:
      "_____ detailed market research, the launch of the new product line exceeded all executive expectations.",
    questionVi:
      "_____ nghiên cứu thị trường chi tiết, việc ra mắt dòng sản phẩm mới đã vượt qua mọi kỳ vọng của ban điều hành.",
    options: [
      { option: "In light of", isCorrect: true },
      { option: "Regardless of", isCorrect: false },
      { option: "Instead of", isCorrect: false },
      { option: "Contrary to", isCorrect: false },
    ],
    explanationVi:
      "'In light of' (xét đến/sau khi xem xét) dùng để chỉ tiền đề dẫn đến kết quả thành công.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2309",
    questionEn:
      "The management decided to _____ the overtime policy to prevent employee burnout.",
    questionVi:
      "Ban quản lý đã quyết định _____ chính sách làm thêm giờ để ngăn chặn sự kiệt sức của nhân viên.",
    options: [
      { option: "curtail", isCorrect: true },
      { option: "enhance", isCorrect: false },
      { option: "promote", isCorrect: false },
      { option: "instigate", isCorrect: false },
    ],
    explanationVi:
      "'Curtail' (cắt giảm/hạn chế) dùng để chỉ việc giảm bớt quy mô hoặc thời gian.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2310",
    questionEn:
      "The CEO is known for his ability to _____ complex financial data into actionable business strategies.",
    questionVi:
      "Giám đốc điều hành nổi tiếng với khả năng _____ các dữ liệu tài chính phức tạp thành các chiến lược kinh doanh có thể thực hiện được.",
    options: [
      { option: "distill", isCorrect: true },
      { option: "diffuse", isCorrect: false },
      { option: "distort", isCorrect: false },
      { option: "discard", isCorrect: false },
    ],
    explanationVi:
      "'Distill' (chắt lọc) dùng theo nghĩa bóng là trích xuất phần tinh túy/quan trọng.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2311",
    questionEn:
      "The patent for the revolutionary battery technology will _____ in three years, allowing competitors to enter the market.",
    questionVi:
      "Bằng sáng chế cho công nghệ pin mang tính cách mạng sẽ _____ trong ba năm nữa, cho phép các đối thủ cạnh tranh gia nhập thị trường.",
    options: [
      { option: "expire", isCorrect: true },
      { option: "expand", isCorrect: false },
      { option: "exploit", isCorrect: false },
      { option: "exempt", isCorrect: false },
    ],
    explanationVi:
      "'Expire' (hết hạn) dùng cho bằng sáng chế, thẻ, hay hợp đồng.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2312",
    questionEn:
      "The recruitment agency is screening candidates to find someone who is _____ in both software engineering and project management.",
    questionVi:
      "Công ty tuyển dụng đang sàng lọc các ứng viên để tìm ra người _____ cả kỹ thuật phần mềm và quản lý dự án.",
    options: [
      { option: "versed", isCorrect: true },
      { option: "dispersed", isCorrect: false },
      { option: "immersed", isCorrect: false },
      { option: "traversed", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'well-versed in something' (thông thạo/có kiến thức sâu rộng về cái gì).",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2313",
    questionEn:
      "The logistics manager suggested _____ the regional distribution hubs to reduce shipping times to the West Coast.",
    questionVi:
      "Quản lý hậu cần đã đề nghị _____ các trung tâm phân phối khu vực để giảm thời gian vận chuyển đến Bờ Tây.",
    options: [
      { option: "consolidating", isCorrect: true },
      { option: "segregating", isCorrect: false },
      { option: "elaborating", isCorrect: false },
      { option: "deteriorating", isCorrect: false },
    ],
    explanationVi:
      "'Consolidate' (hợp nhất/củng cố) các kho hàng giúp tối ưu chi phí và thời gian.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2314",
    questionEn:
      "No sooner had the new CFO been appointed _____ the company's stock price began to stabilize.",
    questionVi:
      "Ngay khi Giám đốc tài chính mới được bổ nhiệm _____ giá cổ phiếu của công ty bắt đầu ổn định.",
    options: [
      { option: "than", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "then", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: 'No sooner + had + S + V3 ... than + S + V2'.",
    category: "Grammar/Inversion",
  },
  {
    id: "B2-2315",
    questionEn:
      "The firm's decision to _____ its operations overseas was driven by the desire to minimize production costs.",
    questionVi:
      "Quyết định _____ các hoạt động của công ty ở nước ngoài được thúc đẩy bởi mong muốn giảm thiểu chi phí sản xuất.",
    options: [
      { option: "outsource", isCorrect: true },
      { option: "overhaul", isCorrect: false },
      { option: "overlook", isCorrect: false },
      { option: "outweigh", isCorrect: false },
    ],
    explanationVi:
      "'Outsource' (thuê ngoài/chuyển ra nước ngoài) là chiến lược tiết kiệm chi phí phổ biến.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2316",
    questionEn:
      "Investors are looking for signs of _____ in the tech sector after several months of extreme volatility.",
    questionVi:
      "Các nhà đầu tư đang tìm kiếm những dấu hiệu của _____ trong lĩnh vực công nghệ sau vài tháng biến động cực bộc.",
    options: [
      { option: "resilience", isCorrect: true },
      { option: "fragility", isCorrect: false },
      { option: "hostility", isCorrect: false },
      { option: "complacency", isCorrect: false },
    ],
    explanationVi:
      "'Resilience' (khả năng phục hồi/kiên cường) là thuật ngữ quan trọng trong phân tích thị trường.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2317",
    questionEn:
      "The legal settlement includes a _____ that neither party will speak publicly about the details of the agreement.",
    questionVi:
      "Thỏa thuận dàn xếp pháp lý bao gồm một _____ rằng cả hai bên sẽ không nói công khai về các chi tiết của thỏa thuận.",
    options: [
      { option: "stipulation", isCorrect: true },
      { option: "speculation", isCorrect: false },
      { option: "fabrication", isCorrect: false },
      { option: "calculation", isCorrect: false },
    ],
    explanationVi:
      "'Stipulation' (điều quy định/điều khoản bắt buộc) trong một thỏa thuận pháp lý.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2318",
    questionEn:
      "The software update is designed to _____ the user experience by simplifying the navigation menu.",
    questionVi:
      "Bản cập nhật phần mềm được thiết kế để _____ trải nghiệm người dùng bằng cách đơn giản hóa menu điều hướng.",
    options: [
      { option: "augment", isCorrect: true },
      { option: "obstruct", isCorrect: false },
      { option: "deplete", isCorrect: false },
      { option: "diminish", isCorrect: false },
    ],
    explanationVi:
      "'Augment' (tăng cường/cải thiện) dùng để nói về việc làm tốt hơn trải nghiệm.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2319",
    questionEn:
      "The cargo was rejected by the customer because the packaging was _____ and the items were damaged.",
    questionVi:
      "Hàng hóa đã bị khách hàng từ chối vì bao bì _____ và các mặt hàng bị hư hỏng.",
    options: [
      { option: "flimsy", isCorrect: true },
      { option: "robust", isCorrect: false },
      { option: "durable", isCorrect: false },
      { option: "sturdy", isCorrect: false },
    ],
    explanationVi: "'Flimsy' (mỏng manh/dễ hỏng) mô tả bao bì không đạt chuẩn.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2320",
    questionEn:
      "HR has introduced a new mentorship scheme to help junior employees _____ better within the corporate culture.",
    questionVi:
      "Nhân sự đã giới thiệu một chương trình cố vấn mới để giúp các nhân viên cấp dưới _____ tốt hơn trong văn hóa doanh nghiệp.",
    options: [
      { option: "assimilate", isCorrect: true },
      { option: "isolate", isCorrect: false },
      { option: "confiscate", isCorrect: false },
      { option: "speculate", isCorrect: false },
    ],
    explanationVi:
      "'Assimilate' (hòa nhập/thích nghi) là quá trình cần thiết của nhân viên mới.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2321",
    questionEn:
      "The board of directors is considering a _____ dividend payout to reward long-term shareholders.",
    questionVi:
      "Hội đồng quản trị đang xem xét một đợt trả cổ tức _____ để thưởng cho các cổ đông dài hạn.",
    options: [
      { option: "lucrative", isCorrect: true },
      { option: "paltry", isCorrect: false },
      { option: "nominal", isCorrect: false },
      { option: "meager", isCorrect: false },
    ],
    explanationVi:
      "'Lucrative' (có lợi/sinh lời cao) được dùng để mô tả mức thanh toán hấp dẫn.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2322",
    questionEn:
      "The project manager had to _____ a lot of resistance from the engineering team when proposing the new deadline.",
    questionVi:
      "Quản lý dự án đã phải _____ rất nhiều sự phản kháng từ đội ngũ kỹ thuật khi đề xuất thời hạn mới.",
    options: [
      { option: "overcome", isCorrect: true },
      { option: "overtake", isCorrect: false },
      { option: "overlook", isCorrect: false },
      { option: "overdo", isCorrect: false },
    ],
    explanationVi: "'Overcome resistance' (vượt qua sự phản kháng/khó khăn).",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2323",
    questionEn:
      "The data breach was caused by a vulnerability in an _____ third-party plugin used on the company's website.",
    questionVi:
      "Sự cố rò rỉ dữ liệu là do một lỗ hổng trong một plugin bên thứ ba _____ được sử dụng trên trang web của công ty.",
    options: [
      { option: "obsolete", isCorrect: true },
      { option: "innovative", isCorrect: false },
      { option: "reliable", isCorrect: false },
      { option: "secure", isCorrect: false },
    ],
    explanationVi:
      "'Obsolete' (lỗi thời) thường là nguyên nhân gây ra các rủi ro bảo mật.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2324",
    questionEn:
      "The manager has the _____ to approve small expenses without getting prior consent from the finance director.",
    questionVi:
      "Người quản lý có _____ để phê duyệt các chi phí nhỏ mà không cần sự đồng ý trước của giám đốc tài chính.",
    options: [
      { option: "discretion", isCorrect: true },
      { option: "detention", isCorrect: false },
      { option: "distinction", isCorrect: false },
      { option: "dissension", isCorrect: false },
    ],
    explanationVi: "'At someone's discretion' (tùy quyền quyết định của ai).",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2325",
    questionEn:
      "The shipment was held up at customs _____ missing documentation regarding the country of origin.",
    questionVi:
      "Chuyến hàng đã bị giữ lại tại cơ quan hải quan _____ thiếu hồ sơ liên quan đến nước xuất xứ.",
    options: [
      { option: "owing to", isCorrect: true },
      { option: "regardless of", isCorrect: false },
      { option: "in case of", isCorrect: false },
      { option: "with respect to", isCorrect: false },
    ],
    explanationVi: "'Owing to' là cụm từ chỉ nguyên nhân (do bởi/vì).",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2326",
    questionEn:
      "The CEO's speech was intended to _____ the fears of employees after the announcement of the merger.",
    questionVi:
      "Bài phát biểu của Giám đốc điều hành nhằm _____ những lo ngại của nhân viên sau khi công bố sáp nhập.",
    options: [
      { option: "allay", isCorrect: true },
      { option: "aggravate", isCorrect: false },
      { option: "agitate", isCorrect: false },
      { option: "amplify", isCorrect: false },
    ],
    explanationVi: "'Allay fears/concerns' (làm giảm bớt/xoa dịu nỗi sợ hãi).",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2327",
    questionEn:
      "Should the client _____ to sign the contract, we will have to seek an alternative service provider.",
    questionVi:
      "Nếu khách hàng _____ ký hợp đồng, chúng tôi sẽ phải tìm kiếm một nhà cung cấp dịch vụ thay thế.",
    options: [
      { option: "decline", isCorrect: true },
      { option: "adhere", isCorrect: false },
      { option: "comply", isCorrect: false },
      { option: "ascribe", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ 'Should + S + V-inf'. 'Decline to do something' (từ chối làm gì).",
    category: "Grammar/Conditional",
  },
  {
    id: "B2-2328",
    questionEn:
      "The quarterly report showed a _____ in consumer spending due to the recent economic downturn.",
    questionVi:
      "Báo cáo hàng quý cho thấy một sự _____ trong chi tiêu của người tiêu dùng do sự suy thoái kinh tế gần đây.",
    options: [
      { option: "decline", isCorrect: true },
      { option: "diversion", isCorrect: false },
      { option: "detriment", isCorrect: false },
      { option: "distinction", isCorrect: false },
    ],
    explanationVi:
      "'Decline' (sự sụt giảm) thường dùng cho các chỉ số kinh tế.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2329",
    questionEn:
      "The insurance policy covers all damages _____ those caused by the willful misconduct of the policyholder.",
    questionVi:
      "Chính sách bảo hiểm bao phủ tất cả các thiệt hại _____ những thiệt hại do hành vi sai trái cố ý của người mua bảo hiểm.",
    options: [
      { option: "except for", isCorrect: true },
      { option: "along with", isCorrect: false },
      { option: "in addition to", isCorrect: false },
      { option: "provided that", isCorrect: false },
    ],
    explanationVi:
      "'Except for' (ngoại trừ) dùng để nêu ra trường hợp loại trừ trong bảo hiểm.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2330",
    questionEn:
      "The tech team is working tirelessly to _____ the software bugs before the grand launch event.",
    questionVi:
      "Nhóm kỹ thuật đang làm việc không mệt mỏi để _____ các lỗi phần mềm trước sự kiện ra mắt lớn.",
    options: [
      { option: "eliminate", isCorrect: true },
      { option: "evaluate", isCorrect: false },
      { option: "exacerbate", isCorrect: false },
      { option: "emit", isCorrect: false },
    ],
    explanationVi:
      "'Eliminate' (loại bỏ) được dùng cho lỗi (bugs) trong phần mềm.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2331",
    questionEn:
      "The legal department warned that any unauthorized use of the company logo would lead to _____ actions.",
    questionVi:
      "Bộ phận pháp lý cảnh báo rằng việc sử dụng trái phép logo công ty sẽ dẫn đến các hành động _____.",
    options: [
      { option: "punitive", isCorrect: true },
      { option: "positive", isCorrect: false },
      { option: "passive", isCorrect: false },
      { option: "pensive", isCorrect: false },
    ],
    explanationVi:
      "'Punitive actions' (các hành động trừng phạt/bồi thường pháp phí).",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2332",
    questionEn:
      "The new warehouse automation system has significantly increased the _____ of the order fulfillment process.",
    questionVi:
      "Hệ thống tự động hóa nhà kho mới đã tăng đáng kể _____ của quy trình hoàn tất đơn hàng.",
    options: [
      { option: "throughput", isCorrect: true },
      { option: "input", isCorrect: false },
      { option: "outbreak", isCorrect: false },
      { option: "downfall", isCorrect: false },
    ],
    explanationVi:
      "'Throughput' (năng suất/lưu lượng công việc đã hoàn thành) là thuật ngữ quan trọng trong sản xuất/hậu cần.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2333",
    questionEn:
      "The HR specialist conducts _____ performance reviews to identify high-potential employees.",
    questionVi:
      "Chuyên viên nhân sự tiến hành các cuộc đánh giá hiệu suất _____ để xác định những nhân viên có tiềm năng cao.",
    options: [
      { option: "periodic", isCorrect: true },
      { option: "paralyzed", isCorrect: false },
      { option: "pathetic", isCorrect: false },
      { option: "peripheral", isCorrect: false },
    ],
    explanationVi: "'Periodic' (định kỳ) thường đi với reviews hoặc audits.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2334",
    questionEn:
      "The company must _____ enough funds to cover the potential losses from the pending lawsuit.",
    questionVi:
      "Công ty phải _____ đủ ngân quỹ để bù đắp các khoản lỗ tiềm ẩn từ vụ kiện đang chờ xử lý.",
    options: [
      { option: "allocate", isCorrect: true },
      { option: "allude", isCorrect: false },
      { option: "alleviate", isCorrect: false },
      { option: "alienate", isCorrect: false },
    ],
    explanationVi:
      "'Allocate' (phân bổ) tiền/nguồn lực cho một mục đích cụ thể.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2335",
    questionEn:
      "The tech startup's valuation has _____ tenfold since its initial public offering last year.",
    questionVi:
      "Định giá của công ty khởi nghiệp công nghệ đã _____ gấp mười lần kể từ đợt phát hành cổ phiếu lần đầu ra công chúng vào năm ngoái.",
    options: [
      { option: "multiplied", isCorrect: true },
      { option: "minimized", isCorrect: false },
      { option: "mitigated", isCorrect: false },
      { option: "meditated", isCorrect: false },
    ],
    explanationVi:
      "'Multiply' (nhân lên/tăng lên gấp bội) mô tả sự tăng trưởng về số lượng/giá trị.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2336",
    questionEn:
      "Only after the thorough investigation _____ the board discover the embezzlement scheme.",
    questionVi:
      "Chỉ sau cuộc điều tra kỹ lưỡng, hội đồng quản trị _____ mới phát hiện ra kế hoạch biển thủ.",
    options: [
      { option: "did", isCorrect: true },
      { option: "had", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only after + N/Ving/Clause': Trợ động từ + S + V.",
    category: "Grammar/Inversion",
  },
  {
    id: "B2-2337",
    questionEn:
      "The new CEO plans to _____ a culture of innovation and collaboration across all departments.",
    questionVi:
      "Giám đốc điều hành mới có kế hoạch _____ một văn hóa đổi mới và hợp tác trong tất cả các phòng ban.",
    options: [
      { option: "foster", isCorrect: true },
      { option: "fester", isCorrect: false },
      { option: "forfeit", isCorrect: false },
      { option: "falter", isCorrect: false },
    ],
    explanationVi:
      "'Foster' (nuôi dưỡng/thúc đẩy) thường dùng cho văn hóa công ty hoặc kỹ năng.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2338",
    questionEn:
      "The legal team is drafting a _____ clause to protect the company's intellectual property rights.",
    questionVi:
      "Nhóm pháp lý đang soạn thảo một điều khoản _____ để bảo vệ quyền sở hữu trí tuệ của công ty.",
    options: [
      { option: "rigorous", isCorrect: true },
      { option: "vigorous", isCorrect: false },
      { option: "frivolous", isCorrect: false },
      { option: "ambiguous", isCorrect: false },
    ],
    explanationVi:
      "'Rigorous' (nghiêm ngặt/chặt chẽ) dùng để mô tả các điều khoản bảo vệ mạnh mẽ.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2339",
    questionEn:
      "The supply chain was disrupted _____ an unexpected strike at the major port of entry.",
    questionVi:
      "Chuỗi cung ứng đã bị gián đoạn _____ một cuộc đình công bất ngờ tại cảng nhập hàng chính.",
    options: [
      { option: "due to", isCorrect: true },
      { option: "instead of", isCorrect: false },
      { option: "regardless of", isCorrect: false },
      { option: "in addition to", isCorrect: false },
    ],
    explanationVi: "'Due to' (do bởi) dùng để chỉ nguyên nhân của một sự cố.",
    category: "Grammar/Prepositions",
  },
  {
    id: "B2-2340",
    questionEn:
      "The HR department updated the employee handbook to include guidelines on _____ social media usage.",
    questionVi:
      "Bộ phận Nhân sự đã cập nhật sổ tay nhân viên để bao gồm các hướng dẫn về việc sử dụng mạng xã hội _____.",
    options: [
      { option: "appropriate", isCorrect: true },
      { option: "adequate", isCorrect: false },
      { option: "elaborate", isCorrect: false },
      { option: "obsolete", isCorrect: false },
    ],
    explanationVi:
      "'Appropriate' (phù hợp/đúng mực) là từ then chốt trong các quy tắc ứng xử.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2341",
    questionEn:
      "The software includes an _____ encryption module to safeguard sensitive customer information.",
    questionVi:
      "Phần mềm bao gồm một mô-đun mã hóa _____ để bảo vệ thông tin khách hàng nhạy cảm.",
    options: [
      { option: "integrated", isCorrect: true },
      { option: "implicated", isCorrect: false },
      { option: "instigated", isCorrect: false },
      { option: "isolated", isCorrect: false },
    ],
    explanationVi:
      "'Integrated' (tích hợp) mô tả tính năng được xây dựng sẵn trong hệ thống.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2342",
    questionEn:
      "The financial auditor discovered a few _____ in the records that suggested potential fraud.",
    questionVi:
      "Kiểm toán viên tài chính đã phát hiện một vài _____ trong hồ sơ gợi ý về gian lận tiềm ẩn.",
    options: [
      { option: "irregularities", isCorrect: true },
      { option: "probabilities", isCorrect: false },
      { option: "capabilities", isCorrect: false },
      { option: "responsibilities", isCorrect: false },
    ],
    explanationVi:
      "'Irregularities' (những điểm bất thường) là thuật ngữ dùng trong kiểm toán khi thấy sai sót lạ.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2343",
    questionEn:
      "The merger will only take place _____ both boards of directors agree on the final valuation.",
    questionVi:
      "Việc sáp nhập sẽ chỉ diễn ra _____ cả hai hội đồng quản trị đồng ý về định giá cuối cùng.",
    options: [
      { option: "if", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "whether", isCorrect: false },
      { option: "lest", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 1 diễn tả một điều kiện có thể xảy ra.",
    category: "Grammar/Conditional",
  },
  {
    id: "B2-2344",
    questionEn:
      "The company decided to _____ its physical store locations and focus entirely on e-commerce.",
    questionVi:
      "Công ty đã quyết định _____ các cửa hàng vật lý và tập trung hoàn toàn vào thương mại điện tử.",
    options: [
      { option: "liquidate", isCorrect: true },
      { option: "liberate", isCorrect: false },
      { option: "label", isCorrect: false },
      { option: "launch", isCorrect: false },
    ],
    explanationVi:
      "'Liquidate' (đóng cửa/thanh lý tài sản) khi rút lui khỏi một mảng kinh doanh.",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2345",
    questionEn:
      "The director's decision was _____ by the latest market research data provided by the consultancy firm.",
    questionVi:
      "Quyết định của giám đốc đã được _____ bởi dữ liệu nghiên cứu thị trường mới nhất do công ty tư vấn cung cấp.",
    options: [
      { option: "informed", isCorrect: true },
      { option: "interrupted", isCorrect: false },
      { option: "ignored", isCorrect: false },
      { option: "inflated", isCorrect: false },
    ],
    explanationVi: "'Inform a decision' (tác động/làm cơ sở cho quyết định).",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2346",
    questionEn:
      "All shipments arriving from international ports are subject to _____ by customs officials.",
    questionVi:
      "Tất cả các lô hàng đến từ các cảng quốc tế đều phải được _____ bởi các viên chức hải quan.",
    options: [
      { option: "scrutiny", isCorrect: true },
      { option: "security", isCorrect: false },
      { option: "severity", isCorrect: false },
      { option: "scarcity", isCorrect: false },
    ],
    explanationVi:
      "'Scrutiny' (sự kiểm tra kỹ lưỡng) là thuật ngữ thường dùng trong kiểm soát cửa khẩu/tài chính.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2347",
    questionEn:
      "The law firm specialized in _____ cases involving intellectual property theft in the technology sector.",
    questionVi:
      "Công ty luật chuyên về các vụ _____ liên quan đến hành vi đánh cắp sở hữu trí tuệ trong lĩnh vực công nghệ.",
    options: [
      { option: "litigation", isCorrect: true },
      { option: "liberation", isCorrect: false },
      { option: "limitation", isCorrect: false },
      { option: "liquidation", isCorrect: false },
    ],
    explanationVi:
      "'Litigation' (tranh tụng/kiện tụng) là thuật ngữ chung trong ngành luật.",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2348",
    questionEn:
      "High-level executives often receive a generous _____ package when they leave the company.",
    questionVi:
      "Các giám đốc điều hành cấp cao thường nhận được một gói _____ hào phóng khi họ rời công ty.",
    options: [
      { option: "severance", isCorrect: true },
      { option: "sequence", isCorrect: false },
      { option: "sentence", isCorrect: false },
      { option: "substance", isCorrect: false },
    ],
    explanationVi:
      "'Severance package' (gói trợ cấp thôi việc) là cụm từ HR phổ biến.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2349",
    questionEn:
      "The data analyst found a _____ correlation between marketing spend and customer acquisition costs.",
    questionVi:
      "Nhà phân tích dữ liệu đã tìm thấy một mối tương quan _____ giữa chi tiêu tiếp thị và chi phí có được khách hàng.",
    options: [
      { option: "significant", isCorrect: true },
      { option: "redundant", isCorrect: false },
      { option: "negligible", isCorrect: false },
      { option: "irrelevant", isCorrect: false },
    ],
    explanationVi:
      "'Significant correlation' (mối tương quan có ý nghĩa/đáng chú ý) trong phân tích dữ liệu.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2350",
    questionEn:
      "The company's success is largely attributed to its _____ supply chain management system.",
    questionVi:
      "Sự thành công của công ty phần lớn được cho là nhờ hệ thống quản lý chuỗi cung ứng _____ của nó.",
    options: [
      { option: "robust", isCorrect: true },
      { option: "fragile", isCorrect: false },
      { option: "shallow", isCorrect: false },
      { option: "vague", isCorrect: false },
    ],
    explanationVi:
      "'Robust' (mạnh mẽ/vững chắc) thường dùng để mô tả các hệ thống hoạt động hiệu quả.",
    category: "Vocabulary/Logistics",
  },
  {
    id: "B2-2351",
    questionEn:
      "The legal advisor insisted that the terms of the agreement _____ in writing to avoid future misunderstandings.",
    questionVi:
      "Cố vấn pháp lý khăng khăng rằng các điều khoản của thỏa thuận _____ bằng văn bản để tránh những hiểu lầm trong tương lai.",
    options: [
      { option: "be put", isCorrect: true },
      { option: "are put", isCorrect: false },
      { option: "must put", isCorrect: false },
      { option: "putting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định: 'Insist that + S + (be) V-inf/V3'.",
    category: "Grammar/Subjunctive",
  },
  {
    id: "B2-2352",
    questionEn:
      "The new tax incentives are expected to _____ investment in the renewable energy sector.",
    questionVi:
      "Các chính sách ưu đãi thuế mới dự kiến sẽ _____ đầu tư vào lĩnh vực năng lượng tái tạo.",
    options: [
      { option: "stimulate", isCorrect: true },
      { option: "stifle", isCorrect: false },
      { option: "stagnate", isCorrect: false },
      { option: "stabilize", isCorrect: false },
    ],
    explanationVi:
      "'Stimulate' (kích thích/thúc đẩy) thường dùng cho kinh tế và đầu tư.",
    category: "Vocabulary/Finance",
  },
  {
    id: "B2-2353",
    questionEn:
      "The company's reputation was _____ by the scandalous reports published in the national newspaper.",
    questionVi:
      "Uy tín của công ty đã bị _____ bởi những báo cáo đầy tai tiếng được công bố trên tờ báo quốc gia.",
    options: [
      { option: "tarnished", isCorrect: true },
      { option: "polished", isCorrect: false },
      { option: "cherished", isCorrect: false },
      { option: "flourished", isCorrect: false },
    ],
    explanationVi: "'Tarnish one's reputation' (làm hoen ố/xấu đi uy tín).",
    category: "Vocabulary/Business",
  },
  {
    id: "B2-2354",
    questionEn:
      "The IT director decided to _____ the internal servers to handle the increased load during the promotion.",
    questionVi:
      "Giám đốc CNTT đã quyết định _____ các máy chủ nội bộ để xử lý tải trọng tăng lên trong đợt khuyến mãi.",
    options: [
      { option: "upgrade", isCorrect: true },
      { option: "unload", isCorrect: false },
      { option: "uphold", isCorrect: false },
      { option: "update", isCorrect: false },
    ],
    explanationVi:
      "'Upgrade' (nâng cấp) phần cứng/hệ thống để xử lý hiệu năng cao hơn.",
    category: "Vocabulary/Technology",
  },
  {
    id: "B2-2355",
    questionEn:
      "The employee was dismissed for a gross _____ of duty after failing to report the safety hazard.",
    questionVi:
      "Nhân viên bị sa thải vì một sự _____ nhiệm vụ nghiêm trọng sau khi không báo cáo mối nguy hiểm an toàn.",
    options: [
      { option: "dereliction", isCorrect: true },
      { option: "dedication", isCorrect: false },
      { option: "description", isCorrect: false },
      { option: "direction", isCorrect: false },
    ],
    explanationVi:
      "'Dereliction of duty' (sự bỏ bê/vi phạm nhiệm vụ) là lỗi sa thải nghiêm trọng.",
    category: "Vocabulary/HR",
  },
  {
    id: "B2-2356",
    questionEn:
      "The legal mediator was able to _____ a compromise between the two conflicting parties.",
    questionVi:
      "Người hòa giải pháp lý đã có thể _____ một sự thỏa hiệp giữa hai bên đang xung đột.",
    options: [
      { option: "broker", isCorrect: true },
      { option: "break", isCorrect: false },
      { option: "bribe", isCorrect: false },
      { option: "broaden", isCorrect: false },
    ],
    explanationVi:
      "'Broker a deal/compromise' (trung gian thu xếp/đạt được một thỏa thuận).",
    category: "Vocabulary/Legal",
  },
  {
    id: "B2-2357",
    questionEn:
      "_____ recent advances in AI technology, the company has integrated automated workflows into its production line.",
    questionVi:
      "_____ những tiến bộ gần đây trong công nghệ AI, công ty đã tích hợp các quy trình làm việc tự động vào dây chuyền sản xuất của mình.",
    options: [
      { option: "Subsequent to", isCorrect: true },
      { option: "Contrary to", isCorrect: false },
      { option: "Prior to", isCorrect: false },
      { option: "Instead of", isCorrect: false },
    ],
    explanationVi:
      "'Subsequent to' (sau khi/tiếp theo sau) chỉ trình tự thời gian dẫn đến hành động.",
    category: "Vocabulary/Technology",
  },
];

export default questions;
