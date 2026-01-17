import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "B2-0001",
    questionEn: "If I ____ you, I ____ accept the offer.",
    questionVi: "Nếu tôi ____ là bạn, tôi ____ sẽ chấp nhận lời đề nghị đó.",
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
    questionEn: "The book ____ by the time I arrived.",
    questionVi: "Cuốn sách ____ đã được bán hết vào lúc tôi đến.",
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
    questionEn: "I wish I ____ harder for the exam apart from English.",
    questionVi:
      "Tôi ước gì mình ____ đã học tập chăm chỉ hơn cho kỳ thi ngoài môn tiếng Anh.",
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
    questionEn: "If it ____ yesterday, we would have gone out.",
    questionVi: "Nếu hôm qua trời ____ không mưa, chúng tôi đã đi chơi rồi.",
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
    questionEn: "She said she ____ working there since 2010.",
    questionVi: "Cô ấy nói là cô ấy ____ đã làm việc ở đó từ năm 2010.",
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
    questionEn: "By next year, we ____ here for 20 years.",
    questionVi:
      "Đến sang năm, chúng tôi ____ sẽ đã sống ở đây được 20 năm rồi.",
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
    questionEn: "This painting is believed ____ by Picasso.",
    questionVi: "Bức tranh này được tin là ____ đã được vẽ bởi Picasso.",
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
    questionEn: "No sooner ____ I arrived than the train left.",
    questionVi: "Ngay khi tôi vừa mới ____ đến nơi thì đoàn tàu rời đi.",
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
    questionEn: "Hardly ____ sat down when the phone rang.",
    questionVi: "Tôi ____ vừa mới ngồi xuống thì điện thoại reo.",
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
    questionEn: "Only when I call ____ you come.",
    questionVi: "Chỉ khi tôi gọi thì bạn mới ____ đến.",
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
    questionEn: "Not until yesterday ____ the truth.",
    questionVi: "Phải mãi đến hôm qua tôi ____ mới biết sự thật.",
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
    questionEn: "Never ____ such a beautiful sight.",
    questionVi: "Tôi ____ chưa bao giờ thấy cảnh tượng nào đẹp như thế này.",
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
    questionEn: "Little ____ he know about the surprise.",
    questionVi: "Anh ta hầu như ____ chẳng biết gì về sự bất ngờ đó.",
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
    questionEn: "Had I known, I ____ helped you.",
    questionVi: "Nếu tôi đã biết chuyện, tôi ____ sẽ đã giúp bạn rồi.",
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
    questionEn: "Should you see him, ____ him to call me.",
    questionVi: "Nếu bạn có gặp anh ấy, hãy ____ bảo anh ấy gọi cho tôi nhé.",
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
    questionEn: "Were I you, I ____ go there.",
    questionVi: "Nếu tôi là bạn, tôi ____ sẽ không đến đó.",
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
    questionEn: "It is essential that he ____ here on time.",
    questionVi: "Điều cốt yếu là anh ấy ____ phải có mặt ở đây đúng giờ.",
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
    questionEn: "I suggest that she ____ harder.",
    questionVi: "Tôi đề nghị cô ấy ____ nên học tập chăm chỉ hơn.",
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
    questionEn: "The teacher demanded that everyone ____ quiet.",
    questionVi: "Giáo viên yêu cầu mọi người ____ phải giữ trật tự.",
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
    questionEn: "God ____ the Queen!",
    questionVi: "Chúa ____ phù hộ Nữ hoàng!",
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
    questionEn: "Whatever ____, I will always love you.",
    questionVi: "Dù có chuyện gì ____ xảy ra đi nữa, tôi sẽ luôn yêu em.",
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
    questionEn: "However rich he ____, he isn't happy.",
    questionVi:
      "Dù anh ta có giàu ____ đến đâu, anh ta cũng không thấy hạnh phúc.",
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
    questionEn: "No matter how ____ you try, you can't lift it.",
    questionVi:
      "Dù bạn có cố gắng ____ đến thế nào, bạn cũng không thể nhấc nó lên.",
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
    questionEn: "Unless you ____ been there, you wouldn't understand.",
    questionVi:
      "Trừ khi bạn ____ đã từng ở đó, nếu không bạn sẽ không hiểu được đâu.",
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
    questionEn: "Is he the man ____ you were talking about?",
    questionVi: "Đó có phải là người đàn ông ____ mà bạn đang nói tới không?",
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
    questionEn: "The car ____ he bought is very expensive.",
    questionVi: "Chiếc xe ____ anh ấy mua rất đắt đỏ.",
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
    questionEn: "The hotel ____ we stayed was very clean.",
    questionVi: "Khách sạn ____ nơi chúng tôi ở rất sạch sẽ.",
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
    questionEn: "2010 was the year ____ I graduated.",
    questionVi: "Năm 2010 là năm ____ tôi tốt nghiệp.",
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
    questionEn: "I don't know the reason ____ she left.",
    questionVi: "Tôi không biết lý do ____ cô ấy rời đi.",
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
    questionEn: "Whoever ____ arrives first wins.",
    questionVi: "Bất kỳ ai ____ đến đầu tiên sẽ giành chiến thắng.",
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
    questionEn: "He asked me what ____.",
    questionVi: "Anh ấy hỏi tôi ____ đó là cái gì.",
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
    questionEn: "She wonders if ____ rain today.",
    questionVi: "Cô ấy tự hỏi liệu hôm nay trời ____ có mưa không.",
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
    questionEn: "I'd rather you ____ talk so loud.",
    questionVi: "Tôi muốn bạn ____ đừng nói chuyện quá to như thế.",
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
    questionEn: "It is high time you ____ a job.",
    questionVi: "Đã đến lúc bạn ____ phải tìm một công việc rồi đấy.",
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
    questionEn: "If only I ____ more money now.",
    questionVi: "Giá mà bây giờ tôi ____ có nhiều tiền hơn.",
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
    questionEn: "He looks as though he ____ seen a ghost.",
    questionVi: "Anh ta trông cứ như thể ____ đã gặp ma vậy.",
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
    questionEn: "I'm tired. I ____ working all day.",
    questionVi: "Tôi mệt. Tôi ____ đã làm việc cả ngày rồi.",
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
    questionEn: "When I arrived, they ____ for 2 hours.",
    questionVi: "Khi tôi đến, họ ____ đã chờ được 2 tiếng rồi.",
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
      "By the end of this month, I ____ for this company for 10 years.",
    questionVi:
      "Đến cuối tháng này, tôi ____ sẽ làm việc cho công ty này được tròn 10 năm.",
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
    questionEn: "I'm looking forward to ____ you again.",
    questionVi: "Tôi rất mong được ____ gặp lại bạn.",
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
    questionEn: "It's no use ____ for him.",
    questionVi: "Thật vô ích khi ____ phải chờ đợi anh ta.",
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
    questionEn: "I remember ____ off the lights before I left.",
    questionVi: "Tôi nhớ là ____ đã tắt đèn trước khi đi rồi.",
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
    questionEn: "Please remember ____ the lights when you leave.",
    questionVi: "Hãy nhớ ____ tắt đèn khi bạn rời đi nhé.",
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
    questionEn: "I tried ____ the door, but it was locked.",
    questionVi: "Tôi đã thử ____ mở cửa, nhưng nó đã bị khóa.",
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
    questionEn: "He tried ____ the heavy box, but he couldn't.",
    questionVi: "Anh ấy đã cố gắng ____ bê chiếc hộp nặng đó, nhưng không thể.",
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
    questionEn: "She stopped ____ a rest.",
    questionVi: "Cô ấy đã dừng lại để ____ nghỉ ngơi.",
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
    questionEn: "He stopped ____ 2 years ago.",
    questionVi: "Anh ấy đã bỏ ____ cách đây 2 năm.",
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
    questionEn: "I'll never forget ____ her for the first time.",
    questionVi: "Tôi sẽ không bao giờ quên ____ lần đầu tiên gặp cô ấy.",
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
    questionEn: "Don't forget ____ the door.",
    questionVi: "Đừng quên ____ khóa cửa nhé.",
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
    questionEn: "I am used to ____ in the city.",
    questionVi: "Tôi đã quen ____ với việc sống ở thành phố rồi.",
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
    questionEn: "He used to ____ here.",
    questionVi: "Anh ấy đã từng ____ sống ở đây.",
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
    questionEn: "The bridge is ____ built.",
    questionVi: "Cây cầu ____ đang được xây dựng.",
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
    questionEn: "The work ____ finished by next week.",
    questionVi: "Công việc ____ sẽ được hoàn thành vào tuần tới.",
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
    questionEn: "He gets his car ____ every week.",
    questionVi: "Anh ấy ____ cho người rửa xe mỗi tuần.",
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
    questionEn: "I had the mechanic ____ my car.",
    questionVi: "Tôi đã nhờ thợ cơ khí ____ sửa xe của mình.",
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
    questionEn: "She helped me ____ the work.",
    questionVi: "Cô ấy đã giúp tôi ____ hoàn thành công việc.",
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
    questionEn: "I made him ____ everything.",
    questionVi: "Tôi đã bắt anh ta ____ phải kể hết mọi chuyện.",
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
    questionEn: "He was made ____ the truth.",
    questionVi: "Anh ta ____ bị bắt phải nói ra sự thật.",
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
    questionEn: "Let me ____.",
    questionVi: "Hãy để tôi ____ đi.",
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
    questionEn: "I am interested ____ learning English.",
    questionVi: "Tôi quan tâm ____ đến việc học tiếng Anh.",
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
    questionEn: "She is good ____ Math.",
    questionVi: "Cô ấy giỏi ____ môn Toán.",
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
    questionEn: "He is afraid ____ dogs.",
    questionVi: "Anh ấy sợ ____ chó.",
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
    questionEn: "I am bored ____ this film.",
    questionVi: "Tôi thấy chán ____ bộ phim này rồi.",
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
    questionEn: "This is different ____ that one.",
    questionVi: "Cái này khác ____ với cái kia.",
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
    questionEn: "I am familiar ____ this place.",
    questionVi: "Tôi ____ đã quen thuộc với nơi này rồi.",
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
    questionEn: "He is responsible ____ the accident.",
    questionVi: "Anh ấy ____ phải chịu trách nhiệm về vụ tai nạn.",
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
    questionEn: "I am proud ____ you.",
    questionVi: "Tôi tự hào ____ về bạn.",
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
    questionEn: "She is capable ____ doing it.",
    questionVi: "Cô ấy có khả năng ____ làm việc đó.",
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
    questionEn: "Are you aware ____ the situation?",
    questionVi: "Bạn có nhận thức được ____ tình hình không?",
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
    questionEn: "This book belongs ____ her.",
    questionVi: "Cuốn sách này thuộc ____ về cô ấy.",
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
    questionEn: "He apologized ____ the mistake.",
    questionVi: "Anh ấy đã xin lỗi ____ vì sai sót đó.",
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
    questionEn: "I congratulated her ____ her success.",
    questionVi: "Tôi đã chúc mừng cô ấy ____ vì sự thành công của cô ấy.",
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
    questionEn: "He prevents me ____ going out.",
    questionVi: "Anh ấy ngăn cản tôi ____ việc đi ra ngoài.",
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
    questionEn: "I suffer ____ headaches.",
    questionVi: "Tôi bị ____ đau đầu.",
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
    questionEn: "She depends ____ her parents.",
    questionVi: "Cô ấy phụ thuộc ____ vào bố mẹ mình.",
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
    questionEn: "He succeeded ____ passing the exam.",
    questionVi: "Anh ấy đã thành công ____ trong việc thi đỗ.",
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
    questionEn: "I am used to ____ up late.",
    questionVi: "Tôi đã quen ____ với việc thức khuya.",
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
    questionEn: "He used to ____ a lot.",
    questionVi: "Anh ấy đã từng ____ uống rượu nhiều.",
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
    questionEn: "It's no use ____ about it more.",
    questionVi: "Thật vô ích khi cứ ____ lo lắng thêm về việc đó.",
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
    questionEn: "I look forward to ____ from you soon.",
    questionVi: "Tôi rất mong sớm ____ nhận được tin từ bạn.",
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
    questionEn: "She suggested ____ to the park.",
    questionVi: "Cô ấy đã gợi ý ____ đi công viên.",
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
    questionEn: "I'd rather ____ home.",
    questionVi: "Tôi muốn ____ về nhà hơn.",
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
    questionEn: "I'd rather you ____ talk during the movie.",
    questionVi: "Tôi muốn bạn ____ đừng nói chuyện trong suốt bộ phim.",
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
    questionEn: "It is time we ____.",
    questionVi: "Đã đến lúc chúng ta ____ phải đi rồi.",
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
    questionEn: "You'd better ____ the truth.",
    questionVi: "Tốt hơn là bạn ____ nên nói ra sự thật.",
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
    questionEn: "He admitted ____ the secret.",
    questionVi: "Anh ấy đã thừa nhận ____ việc làm lộ bí mật.",
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
    questionEn: "I avoid ____ to him.",
    questionVi: "Tôi tránh ____ việc nói chuyện với anh ta.",
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
    questionEn: "She keeps ____.",
    questionVi: "Cô ấy cứ ____ khóc mãi.",
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
    questionEn: "He denied ____ the window.",
    questionVi: "Anh ta đã phủ nhận ____ việc làm vỡ cửa sổ.",
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
    questionEn: "I postpone ____ the meeting.",
    questionVi: "Tôi hoãn ____ cuộc họp lại.",
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
    questionEn: "She finished ____ her homework.",
    questionVi: "Cô ấy đã làm xong ____ bài tập về nhà.",
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
    questionEn: "I can't imagine ____ there.",
    questionVi: "Tôi không thể tưởng tượng được ____ việc sống ở đó.",
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
    questionEn: "He practiced ____ the guitar.",
    questionVi: "Anh ấy đã luyện tập ____ chơi guitar.",
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
    questionEn: "We enjoy ____ football.",
    questionVi: "Chúng tôi thích ____ chơi bóng đá.",
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
    questionEn: "Would you mind ____ the door?",
    questionVi: "Bạn có phiền ____ về việc đóng cửa không?",
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
    questionEn: "I don't feel like ____ out.",
    questionVi: "Tôi không cảm thấy muốn ____ đi chơi.",
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
    questionEn: "He risked ____ his job.",
    questionVi: "Anh ấy đã mạo hiểm ____ công việc của mình.",
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
    questionEn: "I can't resist ____ chocolate.",
    questionVi: "Tôi không thể cưỡng lại được ____ việc ăn sô-cô-la.",
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
      "It is essential that the accounting department ____ its records by the end of the day.",
    questionVi:
      "Điều quan trọng là bộ phận kế toán ____ hồ sơ của mình trước cuối ngày.",
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
      "Under no circumstances ____ the company responsible for damages caused by misuse.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, công ty ____ không chịu trách nhiệm về thiệt hại do sử dụng sai mục đích.",
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
      "Expenses will be reimbursed ____ they are within the approved budget guidelines.",
    questionVi:
      "Các chi phí sẽ được hoàn trả ____ chúng nằm trong hướng dẫn ngân sách đã được phê duyệt.",
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
      "Mr. Henderson’s contribution to the project was ____ appreciated by the entire board.",
    questionVi:
      "Sự đóng góp của ông Henderson cho dự án đã được toàn bộ hội đồng quản trị đánh giá ____ cao.",
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
      "We ____ the contract earlier before the competitors made their offer.",
    questionVi:
      "Chúng ta ____ ký hợp đồng sớm hơn trước khi các đối thủ đưa ra lời đề nghị của họ.",
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
      "The speaker, ____ we invited from London, will focus on digital marketing trends.",
    questionVi:
      "Diễn giả, ____ người mà chúng tôi đã mời từ London, sẽ tập trung vào các xu hướng tiếp thị kỹ thuật số.",
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
      "Our company strives to provide ____ high-quality service to all clients.",
    questionVi:
      "Công ty chúng tôi nỗ lực cung cấp dịch vụ chất lượng cao một cách ____ cho tất cả khách hàng.",
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
      "The software upgrade will make the system run ____ than before.",
    questionVi:
      "Bản nâng cấp phần mềm sẽ làm cho hệ thống chạy ____ hơn trước.",
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
      "We decided to switch suppliers ____ the rising costs of raw materials.",
    questionVi:
      "Chúng tôi đã quyết định thay đổi nhà cung cấp ____ chi phí nguyên liệu thô tăng cao.",
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
    questionEn: "The committee found the proposed plan ____.",
    questionVi: "Ủy ban nhận thấy bản kế hoạch đề xuất ____.",
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
      "We ____ the consumer trends in Southeast Asia for the last six months to prepare for the expansion.",
    questionVi:
      "Chúng tôi ____ các xu hướng tiêu dùng ở Đông Nam Á trong sáu tháng qua để chuẩn bị cho việc mở rộng.",
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
      "The project ____ been delayed due to the sudden change in government regulations.",
    questionVi:
      "Dự án ____ đã bị trì hoãn do sự thay đổi đột ngột trong các quy định của chính phủ.",
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
      "The reasons ____ the board decided to shift the marketing focus remain confidential for now.",
    questionVi:
      "Lý do ____ ban điều hành quyết định thay đổi trọng tâm tiếp thị vẫn được giữ bí mật vào lúc này.",
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
      "This year's merger agreement is considerably ____ than the one we signed three years ago.",
    questionVi:
      "Thỏa thuận sáp nhập năm nay phức tạp hơn ____ đáng kể so với thỏa thuận chúng ta đã ký ba năm trước.",
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
      "It ____ that the next international trade summit will be held in Geneva.",
    questionVi:
      "Người ta ____ rằng hội nghị thượng đỉnh thương mại quốc tế tới sẽ được tổ chức tại Geneva.",
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
      "Travel expenses will be reimbursed ____ they are supported by original receipts.",
    questionVi:
      "Chi phí công tác sẽ được bồi hoàn ____ chúng được hỗ trợ bởi các hóa đơn gốc.",
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
      "Had the management acted more quickly, the crisis ____ been averted.",
    questionVi:
      "Nếu ban quản lý hành động nhanh hơn, cuộc khủng hoảng ____ đã được ngăn chặn.",
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
      "The consultant suggested that the company ____ its current distribution network.",
    questionVi:
      "Chuyên gia cố vấn đề xuất rằng công ty ____ mạng lưới phân phối hiện tại của mình.",
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
      "Despite numerous setbacks, Ms. Chen persisted in ____ the new software integration.",
    questionVi:
      "Bất chấp nhiều trở ngại, bà Chen vẫn kiên trì ____ việc tích hợp phần mềm mới.",
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
      "It is essential that every employee ____ the new safety protocol by the end of the week.",
    questionVi:
      "Điều cần thiết là mọi nhân viên ____ giao thức an toàn mới trước cuối tuần.",
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
      "Seldom ____ such a high level of dedication from a relatively new intern.",
    questionVi:
      "Hiếm khi ____ thấy mức độ cống hiến cao như vậy từ một thực tập sinh tương đối mới.",
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
      "The candidate's ____ skills and international experience make him the ideal choice for this role.",
    questionVi:
      "Kỹ năng ____ và kinh nghiệm quốc tế của ứng viên khiến anh ấy trở thành lựa chọn lý tưởng cho vai trò này.",
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
      "The two companies ____ terms for the partnership for almost three weeks now.",
    questionVi:
      "Hai công ty hiện ____ các điều khoản cho mối quan hệ đối tác trong gần ba tuần qua.",
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
      "We ____ confirmed the technical specifications with the engineers before placing the order.",
    questionVi:
      "Đáng lẽ chúng ta ____ phải xác nhận các thông số kỹ thuật với các kỹ sư trước khi đặt hàng.",
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
      "She is the analyst ____ previous research provided the foundation for our current project.",
    questionVi:
      "Cô ấy là chuyên viên phân tích ____ có nghiên cứu trước đây đã tạo nền tảng cho dự án hiện tại của chúng tôi.",
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
      "Mr. Kim is ____ the most experienced negotiator we have on our current team.",
    questionVi:
      "Ông Kim ____ là người đàm phán có kinh nghiệm nhất mà chúng tôi có trong nhóm hiện tại.",
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
      "The final version of the software ____ to the clients by the end of next month.",
    questionVi:
      "Phiên bản cuối cùng của phần mềm sẽ ____ cho khách hàng trước cuối tháng tới.",
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
      "____ the associated risks, the board decided to proceed with the international expansion plan.",
    questionVi:
      "____ những rủi ro liên quan, ban điều hành đã quyết định tiếp tục kế hoạch mở rộng quốc tế.",
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
      "If we ____ more carefully, we wouldn't be facing these budget overruns now.",
    questionVi:
      "Nếu chúng ta ____ cẩn thận hơn, bây giờ chúng ta đã không phải đối mặt với tình trạng vượt ngân sách này.",
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
      "She asked me ____ I had been updated on the changes to the meeting schedule.",
    questionVi:
      "Cô ấy hỏi tôi ____ liệu tôi đã được cập nhật về những thay đổi trong lịch trình cuộc họp chưa.",
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
      "Working in this department requires ____ a high level of technical competency.",
    questionVi:
      "Làm việc trong bộ phận này đòi hỏi ____ trình độ chuyên môn kỹ thuật cao.",
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
      "The manager insisted that the project ____ completed before the upcoming stakeholders' meeting.",
    questionVi:
      "Quản lý khăng khăng yêu cầu dự án ____ hoàn thành trước cuộc họp các bên liên quan sắp tới.",
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
      "Only after the final inspection ____ the shipment be authorized for dispatch.",
    questionVi:
      "Chỉ sau khi kiểm tra lần cuối ____ lô hàng mới được phép gửi đi.",
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
      "She is highly ____ and always looks for new ways to optimize the production process.",
    questionVi:
      "Cô ấy là người rất ____ và luôn tìm kiếm những cách mới để tối ưu hóa quy trình sản xuất.",
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
      "Our research team ____ several times for their contributions to environmental sustainability.",
    questionVi:
      "Nhóm nghiên cứu của chúng tôi đã ____ nhiều lần vì những đóng góp của họ cho sự bền vững của môi trường.",
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
      "The CSR department ____ several local environmental projects for over two years now.",
    questionVi:
      "Bộ phận trách nhiệm xã hội doanh nghiệp hiện ____ một số dự án môi trường địa phương trong hơn hai năm qua.",
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
      "The proposal ____ accepted if we had included a more detailed budget breakdown.",
    questionVi:
      "Bản đề xuất ____ đã có thể được chấp nhận nếu chúng ta bao gồm một bản phân tích ngân sách chi tiết hơn.",
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
      "The vendor ____ we finally selected after a long bidding process has offered the best after-sales support.",
    questionVi:
      "Nhà cung cấp ____ mà chúng tôi cuối cùng đã chọn sau một quá trình đấu thầu dài đã đưa ra dịch vụ hỗ trợ sau bán hàng tốt nhất.",
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
      "Although Ms. Lee has less experience, her technical skills are ____ superior to the other candidates.",
    questionVi:
      "Mặc dù bà Lee có ít kinh nghiệm hơn, nỗ lực chuyên môn của bà lại ____ vượt trội hơn hẳn so với các ứng viên khác.",
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
      "It ____ estimated that the new bridge construction will be completed by the end of the next fiscal year.",
    questionVi:
      "Người ta ____ ước tính rằng việc xây dựng cây cầu mới sẽ được hoàn thành vào cuối năm tài chính tới.",
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
      "Employees are allowed to access the database ____ they use a secure VPN connection.",
    questionVi:
      "Nhân viên được phép truy cập cơ sở dữ liệu ____ họ sử dụng kết nối VPN an toàn.",
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
      "Should any issues ____ during the pilot phase, our technical team will be available 24/7.",
    questionVi:
      "Nếu có bất kỳ vấn đề nào ____ phát sinh trong giai đoạn thử nghiệm, nhóm kỹ thuật của chúng tôi sẽ sẵn sàng hỗ trợ 24/7.",
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
      "The CEO stated that the company ____ its focus to sustainable energy within the next five years.",
    questionVi:
      "CEO tuyên bố rằng công ty ____ trọng tâm vào năng lượng bền vững trong vòng năm năm tới.",
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
      "We recommend ____ the contract thoroughly before you sign it to avoid any future legal issues.",
    questionVi:
      "Chúng tôi khuyên bạn ____ hợp đồng thật kỹ trước khi ký để tránh bất kỳ vấn đề pháp lý nào trong tương lai.",
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
      "It is mandatory that every employee ____ the data security training module once a year.",
    questionVi:
      "Việc mọi nhân viên ____ học phần đào tạo về an ninh dữ liệu mỗi năm một lần là bắt buộc.",
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
      "Under no circumstances ____ the company offer a full refund after the 30-day period.",
    questionVi:
      "Trong bất kỳ trường hợp nào, công ty ____ sẽ không hoàn tiền đầy đủ sau thời gian 30 ngày.",
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
      "Mr. Yamamoto's approach to management is highly ____ and efficient.",
    questionVi:
      "Cách tiếp cận trong quản lý của ông Yamamoto rất ____ và hiệu quả.",
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
      "She ____ on the final version of the quarterly sales report all morning.",
    questionVi:
      "Cô ấy ____ bản cuối cùng của báo cáo doanh số hàng quý suốt cả buổi sáng.",
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
      "The error in the financial analysis ____ have been caused by a simple data entry mistake.",
    questionVi:
      "Lỗi trong phân tích tài chính ____ có thể đã xảy ra do một lỗi nhập liệu đơn giản.",
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
      "Ms. Gupta is the consultant ____ recommendations paved the way for our successful rebranding.",
    questionVi:
      "Bà Gupta là người cố vấn ____ có những khuyến nghị đã dọn đường cho quá trình tái định vị thương hiệu thành công của chúng tôi.",
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
      "Regional differences in consumer behavior are often ____ more significant than we initially anticipated.",
    questionVi:
      "Sự khác biệt vùng miền trong hành vi của người tiêu dùng thường ____ đáng kể hơn nhiều so với dự đoán ban đầu của chúng tôi.",
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
      "The proposed budget for the next fiscal year ____ by the finance committee at this very moment.",
    questionVi:
      "Ngân sách đề xuất cho tài chính năm tới hiện ____ bởi ủy ban tài chính ngay lúc này.",
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
      "____ our marketing budget was reduced, we still managed to achieve a significant increase in sales.",
    questionVi:
      "____ ngân sách tiếp thị bị cắt giảm, chúng tôi vẫn đạt được sự gia tăng đáng kể về doanh số.",
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
      "Unless we ____ the strategy sooner, we would not have seen such a quick turnaround in profits.",
    questionVi:
      "Nếu chúng ta không ____ chiến lược sớm hơn, chúng ta đã không thấy sự xoay chuyển lợi nhuận nhanh chóng như vậy.",
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
      "The supervisor reminded us ____ the electronic files periodically to prevent data loss.",
    questionVi:
      "Người giám sát đã nhắc nhở chúng tôi ____ các tập tin điện tử định kỳ để tránh mất dữ liệu.",
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
      "The success of our global expansion depends on our ability ____ to local market conditions.",
    questionVi:
      "Sự thành công của việc mở rộng toàn cầu của chúng tôi phụ thuộc vào khả năng ____ với điều kiện thị trường địa phương.",
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
      "It is vital that all sensitive documents ____ stored in a fireproof safe at the end of each day.",
    questionVi:
      "Điều quan trọng là tất cả các tài liệu nhạy cảm ____ được lưu trữ trong két sắt chống cháy vào cuối mỗi ngày.",
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
      "Under no circumstances ____ you disclose confidential client data.",
    questionVi:
      "Trong bất kỳ trường hợp nào bạn ____ tiết lộ dữ liệu khách hàng mật.",
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
      "Not until the report was submitted ____ the committee approve the proposal.",
    questionVi:
      "Phải đến khi báo cáo được nộp thì hội đồng ____ phê duyệt đề xuất.",
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
    questionEn: "Her visa delay prevented her ____ attend the conference.",
    questionVi: "Việc trì hoãn visa đã ngăn cô ấy ____ tham dự hội nghị.",
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
      "Not until the end of the fiscal year ____ the full financial impact of the merger be known.",
    questionVi:
      "Phải đến cuối năm tài chính ____ tác động tài chính đầy đủ của vụ sáp nhập mới được biết đến.",
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
      "Ms. Patel's ____ contributions to the team's research projects have been invaluable.",
    questionVi:
      "Những đóng góp ____ của bà Patel vào các dự án nghiên cứu của nhóm là vô giá.",
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
      "The winners of this year's employee achievement awards ____ during the annual gala dinner next month.",
    questionVi:
      "Những người chiến thắng giải thưởng thành tích nhân viên năm nay sẽ ____ trong bữa tiệc gala hàng năm vào tháng tới.",
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
      "Our production team ____ to resolve the technical issues with the new machinery since yesterday.",
    questionVi:
      "Nhóm sản xuất của chúng tôi ____ giải quyết các vấn đề kỹ thuật với máy móc mới kể từ hôm qua.",
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
      "The server crash ____ avoided if the backup system had been properly maintained.",
    questionVi:
      "Sự cố máy chủ ____ đã có thể tránh được nếu hệ thống dự phòng được bảo trì đúng cách.",
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
      "Ms. Tanaka is the engineer ____ innovative design won the company a prestigious national award.",
    questionVi:
      "Bà Tanaka là kỹ sư ____ có thiết kế sáng tạo đã giúp công ty giành được giải thưởng quốc gia danh giá.",
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
      "The European branch outperformed all other regions, showing ____ higher growth than projected.",
    questionVi:
      "Chi nhánh Châu Âu đã có hiệu suất vượt trội hơn tất cả các khu vực khác, cho thấy mức tăng trưởng cao ____ so với dự kiến.",
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
      "It ____ expected that the new merger will lead to significant operational efficiencies.",
    questionVi:
      "Người ta ____ kỳ vọng rằng việc sáp nhập mới sẽ dẫn đến hiệu quả hoạt động đáng kể.",
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
      "Access to the confidential server is restricted ____ you have prior authorization from the department head.",
    questionVi:
      "Việc truy cập vào máy chủ bảo mật bị hạn chế ____ bạn có sự cho phép trước của trưởng bộ phận.",
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
      "Were the current market volatility to continue, the company ____ reconsider its investment strategy.",
    questionVi:
      "Nếu sự biến động thị trường hiện tại tiếp tục, công ty ____ sẽ cân nhắc lại chiến lược đầu tư của mình.",
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
      "The manager requested that everyone ____ their weekly reports by Friday afternoon at the latest.",
    questionVi:
      "Quản lý yêu cầu mọi người ____ báo cáo hàng tuần của họ muộn nhất vào chiều thứ Sáu.",
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
      "A successful consultant avoids ____ personal opinions into professional reports.",
    questionVi:
      "Một chuyên gia cố vấn thành công tránh ____ đưa ý kiến cá nhân vào các báo cáo chuyên môn.",
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
      "The CEO insisted that the audit ____ be conducted by an independent third party next month.",
    questionVi:
      "CEO khăng khăng yêu cầu cuộc kiểm toán ____ phải được thực hiện bởi một bên thứ ba độc lập vào tháng tới.",
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
      "Hardly ____ the merger agreement been signed when the new CEO announced a reorganization plan.",
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
      "Ms. Patel's ____ attention to detail ensures that all financial reports are error-free.",
    questionVi:
      "Sự chú ý ____ đến từng chi tiết của bà Patel đảm bảo rằng tất cả các báo cáo tài chính đều không có lỗi.",
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
      "Our company ____ heavily in renewable energy projects for over a decade now.",
    questionVi:
      "Công ty chúng tôi hiện ____ đầu tư mạnh mẽ vào các dự án năng lượng tái tạo trong hơn một thập kỷ qua.",
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
      "The consultant ____ delayed by the traffic, although we have not been notified yet.",
    questionVi:
      "Có thể cố vấn chuyên môn ____ đã bị trì hoãn do giao thông, mặc dù chúng ta vẫn chưa được thông báo.",
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
    id: "B2-1521",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identfying a specific vendor for an upcoming event.",
    contextVi: "Xác định một nhà cung cấp cụ thể cho sự kiện sắp tới.",
    questionEn:
      "The vendor ____ we finally selected after a long bidding process has offered the best after-sales support.",
    questionVi:
      "Nhà cung cấp ____ mà chúng tôi cuối cùng đã chọn sau một quá trình đấu thầu dài đã đưa ra dịch vụ hỗ trợ sau bán hàng tốt nhất.",
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
    id: "B2-1522",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional qualifications of candidates.",
    contextVi: "So sánh chứng chỉ chuyên môn của các ứng viên.",
    questionEn:
      "Mr. Kim is ____ the most experienced negotiator we have on our current team.",
    questionVi:
      "Ông Kim ____ là người đàm phán có kinh nghiệm nhất mà chúng tôi có trong nhóm hiện tại.",
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
    id: "B2-1523",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a project status.",
    contextVi: "Báo cáo tình trạng dự án.",
    questionEn:
      "The final version of the software ____ to the clients by the end of next month.",
    questionVi:
      "Phiên bản cuối cùng của phần mềm sẽ ____ cho khách hàng trước cuối tháng tới.",
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
    id: "B2-1524",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the strategy change despite its risks.",
    contextVi:
      "Giải thích việc thay đổi chiến lược bất chấp những rủi ro của nó.",
    questionEn:
      "____ the associated risks, the board decided to proceed with the international expansion plan.",
    questionVi:
      "____ những rủi ro liên quan, ban điều hành đã quyết định tiếp tục kế hoạch mở rộng quốc tế.",
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
    id: "B2-1525",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past scenario.",
    contextVi: "Thảo luận về một kịch bản khác trong quá khứ.",
    questionEn:
      "If we ____ more carefully, we wouldn't be facing these budget overruns now.",
    questionVi:
      "Nếu chúng ta ____ cẩn thận hơn, bây giờ chúng ta đã không phải đối mặt với tình trạng vượt ngân sách này.",
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
    id: "B2-1526",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a question about a meeting time.",
    contextVi: "Tường thuật một câu hỏi về thời gian họp.",
    questionEn:
      "She asked me ____ I had been updated on the changes to the meeting schedule.",
    questionVi:
      "Cô ấy hỏi tôi ____ liệu tôi đã được cập nhật về những thay đổi trong lịch trình cuộc họp chưa.",
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
    id: "B2-1527",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a future possibility.",
    contextVi: "Thảo luận về một khả năng trong tương lai.",
    questionEn:
      "If the current trend continues, the company ____ to expand its operations into Southeast Asia next year.",
    questionVi:
      "Nếu xu hướng hiện tại tiếp tục, công ty ____ sẽ mở rộng hoạt động sang Đông Nam Á vào năm tới.",
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
      "The final report ____ to all department heads by the end of the day.",
    questionVi:
      "Báo cáo cuối cùng ____ cho tất cả các trưởng phòng vào cuối ngày.",
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
      "Mr. Lee is the consultant ____ advice we followed when restructuring the marketing department.",
    questionVi:
      "Ông Lee là chuyên gia tư vấn ____ lời khuyên mà chúng tôi đã làm theo khi tái cơ cấu bộ phận tiếp thị.",
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
      "The client ____ received our email, as we haven't heard back from them yet.",
    questionVi:
      "Khách hàng ____ đã không nhận được email của chúng tôi, vì chúng tôi vẫn chưa nhận được phản hồi từ họ.",
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
      "The budget was limited; ____, we managed to complete the project on time.",
    questionVi:
      "Ngân sách có hạn; ____, chúng tôi vẫn hoàn thành dự án đúng hạn.",
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
      "The current renovation project is taking much ____ than we initially anticipated.",
    questionVi:
      "Dự án cải tạo hiện tại đang tốn nhiều thời gian ____ so với dự kiến ban đầu của chúng tôi.",
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
      "The manager emphasized the importance of ____ in all financial transactions.",
    questionVi:
      "Người quản lý nhấn mạnh tầm quan trọng của ____ trong tất cả các giao dịch tài chính.",
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
      "Ms. Garcia mentioned that she ____ the conference in Berlin next month.",
    questionVi:
      "Bà Garcia đã đề cập rằng bà ____ tham dự hội nghị tại Berlin vào tháng tới.",
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
      "Most employees would prefer ____ to work from home at least two days a week.",
    questionVi:
      "Hầu hết nhân viên đều thích ____ làm việc tại nhà ít nhất hai ngày một tuần.",
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
      "It is essential that every team member ____ the weekly briefing on Monday mornings.",
    questionVi:
      "Điều thiết yếu là mọi thành viên trong nhóm ____ buổi họp tóm tắt hàng tuần vào sáng thứ Hai.",
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
      "The new software ____ across all departments by the end of the next quarter.",
    questionVi: "Phần mềm mới ____ ở tất cả các phòng ban vào cuối quý tới.",
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
      "The factory, ____ was built in the 1980s, is scheduled for a major technological upgrade.",
    questionVi:
      "Nhà máy, ____ được xây dựng vào những năm 1980, dự kiến sẽ được nâng cấp công nghệ lớn.",
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
      "We ____ won the contract if we had submitted a more competitive proposal.",
    questionVi:
      "Chúng ta ____ đã có thể giành được hợp đồng nếu chúng ta nộp một bản đề xuất cạnh tranh hơn.",
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
      "____ the high cost of raw materials, the firm managed to maintain its profit margins.",
    questionVi:
      "____ chi phí nguyên liệu thô cao, công ty vẫn duy trì được mức lợi nhuận.",
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
      "Our new lead developer is ____ more experienced than his predecessor.",
    questionVi:
      "Lập trình viên trưởng mới của chúng tôi ____ giàu kinh nghiệm hơn nhiều so với người tiền nhiệm.",
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
      "The CEO praised the team for their ____ contribution to the successful product launch.",
    questionVi:
      "CEO đã khen ngợi nhóm vì sự đóng góp ____ của họ vào việc ra mắt sản phẩm thành công.",
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
      "The client asked me ____ we would be able to deliver the goods by Friday.",
    questionVi:
      "Khách hàng đã hỏi tôi ____ liệu chúng ta có thể giao hàng vào thứ Sáu hay không.",
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
      "We are looking forward to ____ a long-term partnership with your company.",
    questionVi:
      "Chúng tôi rất mong muốn ____ mối quan hệ hợp tác lâu dài với công ty của bạn.",
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
      "The board suggested that the company ____ its focus to the emerging markets in Africa.",
    questionVi:
      "Ban điều hành đề xuất rằng công ty ____ chuyển trọng tâm sang các thị trường mới nổi ở Châu Phi.",
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
      "Rarely ____ we encountered such a complex legal issue during a merger negotiation.",
    questionVi:
      "Hiếm khi ____ chúng ta gặp phải một vấn đề pháp lý phức tạp như vậy trong cuộc đàm phán sáp nhập.",
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
      "The contract ____ by both parties, and the project is now officially underway.",
    questionVi:
      "Hợp đồng ____ bởi cả hai bên, và dự án hiện đã chính thức được triển khai.",
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
      "Mrs. Tanaka, ____ you met at the conference, is our regional manager for East Asia.",
    questionVi:
      "Bà Tanaka, người mà bạn ____ đã gặp tại hội nghị, là quản lý khu vực của chúng tôi tại Đông Á.",
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
      "We ____ invested more in our online presence years ago; we are now striving to catch up with our competitors.",
    questionVi:
      "Lẽ ra chúng ta ____ nên đầu tư nhiều hơn vào sự hiện diện trực tuyến từ nhiều năm trước; giờ chúng ta đang phải nỗ lực để bắt kịp đối thủ.",
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
      "The merger will be successful ____ both companies are willing to compromise on certain points.",
    questionVi:
      "Vụ sáp nhập sẽ thành công ____ nếu cả hai công ty đều sẵn sàng thỏa hiệp ở một số điểm nhất định.",
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
      "The candidate we interviewed yesterday is ____ qualified for the position than we expected.",
    questionVi:
      "Ứng viên mà chúng tôi đã phỏng vấn hôm qua ____ đủ tiêu chuẩn cho vị trí hơn so với kỳ vọng của chúng tôi.",
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
      "The HR department is working on improving the ____ of our onboarding process.",
    questionVi:
      "Bộ phận nhân sự đang làm việc để cải thiện ____ của quy trình tiếp nhận nhân viên mới của chúng tôi.",
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
      "The manager wanted to know ____ the project would be completed by the end of the week.",
    questionVi:
      "Người quản lý muốn biết ____ liệu dự án có hoàn thành vào cuối tuần hay không.",
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
      "The firm decided ____ its budget for research and development this year.",
    questionVi:
      "Công ty đã quyết định ____ ngân sách cho nghiên cứu và phát triển trong năm nay.",
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
      "The consultant recommended that the company ____ its marketing strategy immediately.",
    questionVi:
      "Cố vấn đã khuyến nghị rằng công ty ____ lại chiến lược tiếp thị của mình ngay lập tức.",
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
      "Not until the new policy was implemented ____ the employees fully understand its benefits.",
    questionVi:
      "Mãi cho đến khi chính sách mới được thực hiện ____ nhân viên mới hiểu hết lợi ích của nó.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not until' (Mãi cho đến khi... thì mới...).",
    category: "Inversion",
  },
];

export default questions;
