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
  {
    id: "B2-1557",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a past event.",
    contextVi: "Mô tả một sự kiện trong quá khứ.",
    questionEn:
      "The mechanic indicated that the car had suffered serious engine problems and ____ a week to be repaired. ",
    questionVi:
      "Thợ máy cho biết rằng chiếc xe đã gặp phải các vấn đề nghiêm trọng về động cơ và ____ một tuần để được sửa chữa.",
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
      "The marketing department has been working ____ to prepare for the upcoming product launch.",
    questionVi:
      "Phòng marketing đã đang làm việc ____ để chuẩn bị cho buổi ra mắt sản phẩm sắp tới.",
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
    questionEn: "____ the heavy rain, the outdoor concert was not cancelled.",
    questionVi: "____ trời mưa to, buổi hòa nhạc ngoài trời đã không bị hủy.",
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
      "Customers are encouraged to provide ____ on their experience with our new mobile application.",
    questionVi:
      "Khách hàng được khuyến khích cung cấp ____ về trải nghiệm của họ với ứng dụng di động mới của chúng tôi.",
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
      "The board of directors is considering a ____ to increase the annual budget for research and development.",
    questionVi:
      "Hội đồng quản trị đang xem xét một ____ tăng ngân sách hàng năm cho nghiên cứu và phát triển.",
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
      "All employees must submit their expense reports ____ the end of the month.",
    questionVi: "Tất cả nhân viên phải nộp báo cáo chi phí ____ cuối tháng.",
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
      "Ms. Nakamura ____ as the head of the accounting department for over ten years before she retired.",
    questionVi:
      "Bà Nakamura ____ làm trưởng phòng kế toán trong hơn mười năm trước khi nghỉ hưu.",
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
      "The company's profits have grown ____ since the introduction of the new marketing strategy.",
    questionVi:
      "Lợi nhuận của công ty đã tăng trưởng ____ kể từ khi giới thiệu chiến lược marketing mới.",
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
      "It is ____ that all staff members attend the safety training session on Monday.",
    questionVi:
      "Việc tất cả nhân viên tham gia buổi huấn luyện an toàn vào thứ Hai là ____.",
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
      "The technician ____ fixed the server yesterday is from an external IT firm.",
    questionVi:
      "Kỹ thuật viên ____ đã sửa máy chủ ngày hôm qua đến từ một công ty IT bên ngoài.",
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
      "Neither the project manager ____ the team members were aware of the technical glitch.",
    questionVi:
      "Cả quản lý dự án ____ các thành viên trong nhóm đều không biết về lỗi kỹ thuật.",
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
      "The new policy aims to ____ the procedure for requesting office supplies.",
    questionVi:
      "Chính sách mới nhằm mục đích ____ quy trình yêu cầu văn phòng phẩm.",
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
      "Local residents were asked to ____ the proposed changes to the public park.",
    questionVi:
      "Cư dân địa phương được yêu cầu ____ về những thay đổi đề xuất đối với công viên công cộng.",
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
      "The seminar will focus ____ effective communication strategies in a multicultural workplace.",
    questionVi:
      "Hội thảo sẽ tập trung ____ các chiến lược giao tiếp hiệu quả trong môi trường làm việc đa văn hóa.",
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
      "Please remain seated until the aircraft ____ to a complete stop at the gate.",
    questionVi: "Vui lòng ngồi yên cho đến khi máy bay ____ dừng hẳn tại cổng.",
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
      "Employees are eligible for a bonus if they ____ their sales targets for the quarter.",
    questionVi:
      "Nhân viên đủ điều kiện nhận tiền thưởng nếu họ ____ mục tiêu doanh số của quý.",
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
      "The ____ of the local airport will allow for more international flights.",
    questionVi:
      "Sự ____ của sân bay địa phương sẽ cho phép có thêm nhiều chuyến bay quốc tế.",
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
      "For any ____ regarding the membership, please contact our customer service desk.",
    questionVi:
      "Đối với bất kỳ ____ nào liên quan đến tư cách thành viên, vui lòng liên hệ với bàn dịch vụ khách hàng của chúng tôi.",
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
      "____ the delay in shipping, the customer was satisfied with the product quality.",
    questionVi:
      "____ sự chậm trễ trong giao hàng, khách hàng vẫn hài lòng với chất lượng sản phẩm.",
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
      "The legal team is working to ____ the final terms of the merger agreement.",
    questionVi:
      "Nhóm pháp lý đang làm việc để ____ các điều khoản cuối cùng của thỏa thuận sáp nhập.",
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
      "The results of the preliminary study were deemed ____ by the research committee.",
    questionVi:
      "Kết quả của nghiên cứu sơ bộ đã được ủy ban nghiên cứu coi là ____.",
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
      "If we ____ about the change in schedule, we would have adjusted our travel plans.",
    questionVi:
      "Nếu chúng tôi ____ về việc thay đổi lịch trình, chúng tôi đã điều chỉnh kế hoạch du lịch của mình.",
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
      "Only the department manager is ____ to sign off on major expenses.",
    questionVi:
      "Chỉ có quản lý bộ phận mới được ____ ký duyệt các khoản chi lớn.",
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
      "The company plans to ____ several smaller firms to expand its market share.",
    questionVi:
      "Công ty có kế hoạch ____ một số công ty nhỏ hơn để mở rộng thị phần.",
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
      "The candidate ____ we interviewed yesterday has extensive experience in logistics.",
    questionVi:
      "Ứng viên ____ chúng tôi đã phỏng vấn ngày hôm qua có kinh nghiệm sâu rộng về logistics.",
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
      "Many employees prefer to ____ by train to avoid the heavy traffic during rush hour.",
    questionVi:
      "Nhiều nhân viên thích ____ bằng tàu hỏa để tránh tắc đường vào giờ cao điểm.",
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
      "Please ensure that you respond ____ to all messages from the client.",
    questionVi:
      "Vui lòng đảm bảo rằng bạn phản hồi ____ đối với tất cả tin nhắn từ khách hàng.",
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
      "The new office layout was designed ____ the latest ergonomic standards.",
    questionVi:
      "Bố trí văn phòng mới được thiết kế ____ các tiêu chuẩn công thái học mới nhất.",
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
      "The company offers a performance-based ____ to encourage productivity among staff.",
    questionVi:
      "Công ty cung cấp một khoản ____ dựa trên hiệu suất để khuyến khích năng suất trong nhân viên.",
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
      "____ you have any questions, please do not hesitate to contact our support team.",
    questionVi:
      "____ bạn có bất kỳ câu hỏi nào, vui lòng đừng ngần ngại liên hệ với nhóm hỗ trợ của chúng tôi.",
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
      "The project's success was the result of the ____ between the design and production teams.",
    questionVi:
      "Sự thành công của dự án là kết quả của sự ____ giữa nhóm thiết kế và nhóm sản xuất.",
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
      "The company's logo must be ____ across all marketing materials to maintain brand identity.",
    questionVi:
      "Logo của công ty phải ____ trên tất cả các tài liệu tiếp thị để duy trì bản sắc thương hiệu.",
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
      "Employees will be ____ for travel expenses incurred during business trips.",
    questionVi:
      "Nhân viên sẽ được ____ cho các chi phí đi lại phát sinh trong các chuyến công tác.",
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
      "The new safety regulations are scheduled to ____ by the end of this year.",
    questionVi: "Các quy định an toàn mới dự kiến sẽ ____ vào cuối năm nay.",
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
      "We can extend the warranty period, ____ the product has been maintained properly.",
    questionVi:
      "Chúng tôi có thể gia hạn thời gian bảo hành, ____ sản phẩm đã được bảo trì đúng cách.",
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
      "The ____ report indicates that the project is on track and within budget.",
    questionVi:
      "Báo cáo ____ cho thấy dự án đang đi đúng hướng và trong phạm vi ngân sách.",
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
      "The automated system requires regular ____ to ensure optimal performance.",
    questionVi:
      "Hệ thống tự động yêu cầu ____ thường xuyên để đảm bảo hiệu suất tối ưu.",
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
      "Mr. Henderson decided to ____ from his position as CEO after fifteen years of service.",
    questionVi:
      "Ông Henderson quyết định ____ khỏi chức vụ CEO sau mười lăm năm cống hiến.",
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
      "The training program offers a ____ overview of the latest software updates.",
    questionVi:
      "Chương trình đào tạo cung cấp một cái nhìn ____ về các bản cập nhật phần mềm mới nhất.",
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
      "All visitors must register at the front desk ____ entering the facility.",
    questionVi:
      "Tất cả khách tham quan phải đăng ký tại quầy lễ tân ____ khi vào cơ sở.",
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
      "The company emphasizes the importance of maintaining data ____ at all times.",
    questionVi:
      "Công ty nhấn mạnh tầm quan trọng của việc duy trì ____ dữ liệu mọi lúc.",
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
      "The manager asked for a ______ report on the project's progress by the end of the day.",
    questionVi:
      "Quản lý đã yêu cầu một bản báo cáo ______ về tiến độ của dự án vào cuối ngày.",
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
      "Please remind the staff that the meeting will begin ______ at 9:00 AM.",
    questionVi:
      "Vui lòng nhắc nhở nhân viên rằng cuộc họp sẽ bắt đầu ______ lúc 9:00 sáng.",
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
      "The company decided to ______ the old equipment with more energy-efficient models.",
    questionVi:
      "Công ty đã quyết định ______ thiết bị cũ bằng những mẫu tiết kiệm năng lượng hơn.",
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
      "______ the inclement weather, the outdoor promotional event has been postponed.",
    questionVi:
      "______ thời tiết khắc nghiệt, sự kiện quảng bá ngoài trời đã bị hoãn lại.",
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
      "Ms. Lee was ______ recommended for the position of regional director due to her extensive experience.",
    questionVi:
      "Bà Lee đã được giới thiệu một cách ______ cho vị trí giám đốc vùng nhờ kinh nghiệm phong phú của mình.",
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
      "The new software allows users to access their files ______ from any location with internet service.",
    questionVi:
      "Phần mềm mới cho phép người dùng truy cập tệp của họ ______ từ bất kỳ địa điểm nào có dịch vụ internet.",
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
      "All employees are required to ______ the annual safety training workshop.",
    questionVi:
      "Tất cả nhân viên được yêu cầu ______ hội thảo đào tạo an toàn hàng năm.",
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
      "The ______ budget for the marketing campaign must be approved by the board of directors.",
    questionVi:
      "Ngân sách ______ cho chiến dịch tiếp thị phải được ban giám đốc phê duyệt.",
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
      "The marketing team worked ______ to meet the tight deadline for the product launch.",
    questionVi:
      "Đội ngũ tiếp thị đã làm việc ______ để kịp thời hạn chặt chẽ cho đợt ra mắt sản phẩm.",
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
      "Mr. Henderson will be away on a business trip ______ next Thursday.",
    questionVi: "Ông Henderson sẽ đi công tác ______ thứ Năm tới.",
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
      "The technician provided a detailed ______ of the computer network issues.",
    questionVi:
      "Kỹ thuật viên đã cung cấp một bản ______ chi tiết về các sự cố mạng máy tính.",
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
      "The hotel is conveniently ______ near the major tourist attractions and public transportation.",
    questionVi:
      "Khách sạn được ______ một cách thuận tiện gần các điểm thu hút khách du lịch lớn và phương tiện công cộng.",
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
      "The customer service representative ______ helped the client resolve the billing error.",
    questionVi:
      "Đại diện bộ phận chăm sóc khách hàng đã ______ giúp khách hàng giải quyết lỗi thanh toán.",
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
      "Students who are interested in the internship program ______ submit their applications by Monday.",
    questionVi:
      "Sinh viên quan tâm đến chương trình thực tập ______ nộp đơn đăng ký trước thứ Hai.",
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
      "The ______ of the new office building is expected to be completed by June.",
    questionVi:
      "Việc ______ tòa nhà văn phòng mới dự kiến sẽ hoàn thành vào tháng Sáu.",
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
      "Although the sales figures were slightly lower than expected, the overall performance was still ______.",
    questionVi:
      "Mặc dù doanh số bán hàng thấp hơn một chút so với dự kiến, hiệu suất tổng thể vẫn ______.",
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
      "The legal department is reviewing the ______ of the agreement before it is signed.",
    questionVi:
      "Bộ phận pháp lý đang xem xét các ______ của thỏa thuận trước khi nó được ký kết.",
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
      "The new manager is very ______ and always encourages open communication among team members.",
    questionVi:
      "Người quản lý mới rất ______ và luôn khuyến khích giao tiếp cởi mở giữa các thành viên trong nhóm.",
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
      "Neither the supervisor ______ the employees were aware of the change in schedule.",
    questionVi:
      "Cả người giám sát ______ các nhân viên đều không biết về sự thay đổi lịch trình.",
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
      "The ______ of the research findings will be published in the next issue of the journal.",
    questionVi:
      "Kết quả ______ của các phát hiện nghiên cứu sẽ được công bố trong số tới của tạp chí.",
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
      "To receive a full ______, customers must return the merchandise within 30 days of purchase.",
    questionVi:
      "Để nhận được khoản ______ đầy đủ, khách hàng phải trả lại hàng hóa trong vòng 30 ngày kể từ ngày mua.",
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
      "The CEO will ______ the winners of the Employee Excellence Awards at the gala diner.",
    questionVi:
      "CEO sẽ ______ những người chiến thắng giải thưởng Nhân viên Xuất sắc tại bữa tiệc tối gala.",
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
      "If the delivery ______ by tomorrow, we will have to contact the shipping company.",
    questionVi:
      "Nếu đơn hàng ______ không được giao trước ngày mai, chúng ta sẽ phải liên hệ với công ty vận chuyển.",
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
      "The internet connection is ______ unreliable during peak hours.",
    questionVi:
      "Kết nối internet thường ______ không đáng tin cậy trong giờ cao điểm.",
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
      "The ______ for the new software upgrade is available for download on our website.",
    questionVi:
      "Bản ______ cho việc nâng cấp phần mềm mới hiện đã có sẵn để tải xuống trên trang web của chúng tôi.",
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
      "The accountant discovered an error in the budget ______ she was reviewing the financial reports.",
    questionVi:
      "Kế toán đã phát hiện ra một lỗi trong ngân sách ______ cô ấy đang xem xét các báo cáo tài chính.",
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
      "The company has achieved ______ growth in the international market over the last decade.",
    questionVi:
      "Công ty đã đạt được sự tăng trưởng ______ trên thị trường quốc tế trong thập kỷ qua.",
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
      "Employees are encouraged to provide ______ on the new workplace policies.",
    questionVi:
      "Nhân viên được khuyến khích cung cấp ______ về các chính sách nơi làm việc mới.",
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
      "Mr. Kim usually ______ the office early on Fridays to beat the traffic.",
    questionVi:
      "Ông Kim thường ______ văn phòng sớm vào thứ Sáu để tránh tắc đường.",
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
      "The new auditorium is ______ bigger than the previous one, allowing for more guests.",
    questionVi:
      "Khán phòng mới ______ lớn hơn khán phòng trước đó, cho phép đón nhiều khách hơn.",
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
      "The ______ for the positions are required to have at least five years of experience.",
    questionVi:
      "Các ______ cho các vị trí này được yêu cầu phải có ít nhất năm năm kinh nghiệm.",
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
      "Due to a technical ______, the online payment system will be unavailable for one hour.",
    questionVi:
      "Do ______ kỹ thuật, hệ thống thanh toán trực tuyến sẽ không hoạt động trong một giờ.",
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
      "Please review the attached document and let us know if you ______ any further information.",
    questionVi:
      "Vui lòng xem lại tài liệu đính kèm và cho chúng tôi biết nếu bạn ______ thêm bất kỳ thông tin nào khác.",
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
      "The team worked ______ to complete the project before the client's visit.",
    questionVi:
      "Nhóm đã làm việc ______ để hoàn thành dự án trước chuyến thăm của khách hàng.",
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
      "The seminar was ______ postponed because the keynote speaker was unable to attend.",
    questionVi:
      "Cuộc hội thảo đã bị hoãn ______ vì diễn giả chính không thể tham dự.",
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
      "Marketing experts suggest that the ______ of our brand will improve with the new advertising campaign.",
    questionVi:
      "Các chuyên gia tiếp thị gợi ý rằng ______ của thương hiệu chúng ta sẽ được cải thiện với chiến dịch quảng cáo mới.",
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
      "You should check the ______ of the document before sending it to the printing department.",
    questionVi:
      "Bạn nên kiểm tra ______ của tài liệu trước khi gửi nó đến bộ phận in ấn.",
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
      "The company offers a ______ benefits package to attract top talent.",
    questionVi:
      "Công ty cung cấp một gói phúc lợi ______ để thu hút những tài năng hàng đầu.",
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
      "Please ensure that you ______ your expense report to the finance department by Friday.",
    questionVi:
      "Vui lòng đảm bảo rằng bạn ______ báo cáo chi phí của mình cho bộ phận tài chính trước thứ Sáu.",
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
      "The new employee is ______ harder than anyone else in the department.",
    questionVi:
      "Nhân viên mới đang làm việc ______ chăm chỉ hơn bất kỳ ai khác trong phòng ban.",
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
      "The office will be closed on Monday ______ observance of the national holiday.",
    questionVi:
      "Vanh phòng sẽ đóng cửa vào thứ Hai ______ việc kỷ niệm ngày lễ quốc gia.",
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
      "The CEO's opening speech was very ______, inspiring all the employees.",
    questionVi:
      "Bài phát biểu khai mạc của CEO rất ______, truyền cảm hứng cho tất cả nhân viên.",
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
      "The company has decided to ______ its operations to several European countries next year.",
    questionVi:
      "Công ty đã quyết định ______ hoạt động của mình sang một số quốc gia châu Âu vào năm tới.",
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
      "Neither the project manager ______ the team members were satisfied with the initial results.",
    questionVi:
      "Cả quản lý dự án ______ các thành viên trong nhóm đều không hài lòng với kết quả ban đầu.",
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
      "The ______ process for the new software might take longer than originally anticipated.",
    questionVi:
      "Quá trình ______ cho phần mềm mới có thể mất nhiều thời gian hơn so với dự kiến ban đầu.",
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
      "Participants are required to ______ their identity cards to enter the conference hall.",
    questionVi:
      "Người tham gia được yêu cầu ______ thẻ căn cước của họ để vào hội trường hội nghị.",
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
      "The factory recently ______ new safety protocols to reduce workplace accidents.",
    questionVi:
      "Nhà máy gần đây ______ các quy trình an toàn mới để giảm thiểu tai nạn lao động.",
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
      "Ms. Geller is the person ______ you should contact regarding the office renovation.",
    questionVi:
      "Bà Geller là người ______ bạn nên liên hệ liên quan đến việc cải tạo văn phòng.",
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
    questionEn: "The ______ of the annual report has been delayed by one week.",
    questionVi: "Việc ______ báo cáo hàng năm đã bị trì hoãn một tuần.",
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
      "Technicians will be ______ the heating system early tomorrow morning.",
    questionVi: "Các kỹ thuật viên sẽ ______ hệ thống sưởi vào sáng sớm mai.",
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
      "Although the team faced many challenges, they ______ completed the project on time.",
    questionVi:
      "Mặc dù nhóm đối mặt với nhiều thử thách, họ ______ hoàn thành dự án đúng hạn.",
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
      "All staff members must ______ the company's dress code policy at all times.",
    questionVi:
      "Tất cả nhân viên phải ______ chính sách về trang phục của công ty vào mọi lúc.",
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
      "The newly elected board member is known for her ______ leadership style.",
    questionVi:
      "Thành viên hội đồng quản trị mới đắc cử nổi tiếng với phong cách lãnh đạo ______ của mình.",
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
      "The company’s annual ______ will be held at the Grand Hotel this year.",
    questionVi:
      "Hội nghị ______ hàng năm của công ty sẽ được tổ chức tại khách sạn Grand vào năm nay.",
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
    questionEn: "Mr. Watanabe has been living in London ______ three years.",
    questionVi: "Ông Watanabe đã sống ở London ______ ba năm.",
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
      "The new marketing strategy is expected to ______ a lot of interest from potential investors.",
    questionVi:
      "Chiến lược tiếp thị mới được mong đợi sẽ ______ nhiều sự quan tâm từ các nhà đầu tư tiềm năng.",
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
      "By the time the manager arrived, the staff ______ already finished the meeting.",
    questionVi:
      "Vào lúc người quản lý đến, nhân viên ______ đã kết thúc cuộc họp rồi.",
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
      "The financial advisor provided a ______ explanation of the investment options.",
    questionVi:
      "Cố vấn tài chính đã cung cấp một lời giải thích ______ về các lựa chọn đầu tư.",
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
      "The store offers a discount to customers ______ subscribe to the weekly newsletter.",
    questionVi:
      "Cửa hàng giảm giá cho những khách hàng ______ đăng ký nhận bản tin hàng tuần.",
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
      "The production department must ______ the quota by the end of the month.",
    questionVi: "Bộ phận sản xuất phải ______ chỉ tiêu vào cuối tháng.",
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
      "The board of directors is expected to ______ the merger proposal during the meeting on Friday.",
    questionVi:
      "Hội đồng quản trị dự kiến sẽ ______ đề xuất sáp nhập trong cuộc họp vào thứ Sáu.",
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
      "The CEO's ______ decision to cut costs saved the company from potential bankruptcy.",
    questionVi:
      "Quyết định ______ của Giám đốc điều hành về việc cắt giảm chi phí đã cứu công ty khỏi nguy cơ phá sản.",
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
      "Had the marketing team ______ the market research earlier, the campaign would have been more successful.",
    questionVi:
      "Nếu đội ngũ marketing ______ nghiên cứu thị trường sớm hơn, chiến dịch đã thành công hơn.",
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
      "The new software update is ______ with all major operating systems currently used in the office.",
    questionVi:
      "Bản cập nhật phần mềm mới ______ với tất cả các hệ điều hành chính hiện đang được sử dụng trong văn phòng.",
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
      "Employees are encouraged to provide ______ feedback during the annual performance reviews.",
    questionVi:
      "Nhân viên được khuyến khích đưa ra phản hồi ______ trong các đợt đánh giá hiệu suất hàng năm.",
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
      "The manager insisted that the report ______ on her desk by 5 PM today.",
    questionVi:
      "Quản lý khăng khăng rằng bản báo cáo ______ trên bàn của cô ấy trước 5 giờ chiều nay.",
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
      "Despite the economic downturn, the company managed to ______ its market share.",
    questionVi:
      "Mặc dù kinh tế suy thoái, công ty vẫn xoay sở để ______ thị phần của mình.",
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
      "The consultant suggested ______ the budget to allow for unexpected expenditure.",
    questionVi:
      "Nhà tư vấn đề xuất ______ ngân sách để dự phòng cho các khoản chi phí không lường trước.",
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
      "The ______ of the new production line has significantly increased our daily output.",
    questionVi:
      "Việc ______ dây chuyền sản xuất mới đã làm tăng đáng kể sản lượng hàng ngày của chúng tôi.",
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
      "The legal team is reviewing the contract to ensure all terms are ______ with local regulations.",
    questionVi:
      "Nhóm pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản ______ với quy định địa phương.",
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
      "Not only ______ the deadline, but they also exceeded the sales targets.",
    questionVi: "Họ không những ______ thời hạn mà còn vượt chỉ tiêu doanh số.",
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
      "Mr. Henderson was ______ for his outstanding contribution to the company's growth.",
    questionVi:
      "Ông Henderson đã được ______ vì sự đóng góp xuất sắc của mình cho sự phát triển của công ty.",
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
      "The accountant pointed out that the figures provided in the report were ______.",
    questionVi:
      "Kế toán đã chỉ ra rằng các con số được cung cấp trong báo cáo là ______.",
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
      "By the time the new policy takes effect, all staff ______ the necessary training.",
    questionVi:
      "Vào lúc chính sách mới có hiệu lực, tất cả nhân viên ______ các buổi đào tạo cần thiết.",
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
      "The company decided to ______ its operations to the Asian market to reach more customers.",
    questionVi:
      "Công ty quyết định ______ hoạt động của mình sang thị trường châu Á để tiếp cận nhiều khách hàng hơn.",
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
      "There is a ______ need for more skilled technicians in the renewable energy sector.",
    questionVi:
      "Có một nhu cầu ______ về các kỹ thuật viên lành nghề hơn trong lĩnh vực năng lượng tái tạo.",
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
      "The supervisor ______ the team finish the project ahead of schedule by providing extra resources.",
    questionVi:
      "Người giám sát ______ nhóm hoàn thành dự án trước thời hạn bằng cách cung cấp thêm nguồn lực.",
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
      "The internship program provides students with ______ experience in the financial industry.",
    questionVi:
      "Chương trình thực tập cung cấp cho sinh viên kinh nghiệm ______ trong ngành tài chính.",
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
      "The marketing campaign was ______ successful, resulting in a 20% increase in sales.",
    questionVi:
      "Chiến dịch marketing đã thành công ______, mang lại mức tăng doanh số 20%.",
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
      "Neither the manager nor the employees ______ aware of the scheduled power outage.",
    questionVi:
      "Cả người quản lý lẫn nhân viên đều ______ biết về lịch cắt điện đã định.",
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
      "The company's ______ to environmental sustainability has earned it several industry awards.",
    questionVi:
      "Sự ______ của công ty đối với sự bền vững môi trường đã giúp công ty giành được nhiều giải thưởng trong ngành.",
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
      "The new employee is very capable, ______ sometimes he lacks the confidence to lead projects.",
    questionVi:
      "Nhân viên mới rất có năng lực, ______ thỉnh thoảng anh ấy thiếu tự tin để dẫn dắt các dự án.",
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
      "The renovation of the lobby will be ______ by a team of professional interior designers.",
    questionVi:
      "Việc cải tạo sảnh sẽ được ______ bởi một đội ngũ thiết kế nội thất chuyên nghiệp.",
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
      "The conference organizers have provided a ______ list of local hotels and restaurants for the attendees.",
    questionVi:
      "Ban tổ chức hội nghị đã cung cấp một danh sách ______ các khách sạn và nhà hàng địa phương cho những người tham dự.",
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
      "We will provide you with a replacement unit ______ the original can be repaired in time.",
    questionVi:
      "Chúng tôi sẽ cung cấp cho bạn một đơn vị thay thế ______ cái gốc có thể được sửa chữa kịp thời.",
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
      "Your ______ to register for the seminar by the deadline may result in a loss of your reservation.",
    questionVi:
      "Việc bạn ______ đăng ký hội thảo trước thời hạn có thể dẫn đến việc mất chỗ đã đặt.",
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
      "The human resources manager will ______ all applications before inviting candidates for an interview.",
    questionVi:
      "Trưởng phòng nhân sự sẽ ______ tất cả các đơn ứng tuyển trước khi mời các ứng viên đến phỏng vấn.",
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
      "It is vital that all safety procedures ______ followed strictly in the laboratory.",
    questionVi:
      "Điều quan trọng là tất cả các quy trình an toàn ______ được tuân thủ nghiêm ngặt trong phòng thí nghiệm.",
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
      "The company saw a ______ rise in profits after implementing the new marketing strategy.",
    questionVi:
      "Công ty đã thấy một sự gia tăng ______ về lợi nhuận sau khi triển khai chiến lược marketing mới.",
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
      "The customer service representative spoke ______ to the frustrated client to de-escalate the situation.",
    questionVi:
      "Đại diện dịch vụ khách hàng đã nói chuyện ______ với khách hàng đang bực bội để làm dịu tình hình.",
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
      "Instead of ______ the meeting, the chairperson decided to postpone it until next week.",
    questionVi:
      "Thay vì ______ cuộc họp, chủ tọa quyết định hoãn nó lại cho đến tuần sau.",
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
      "The manager decided to ______ some of the routine tasks to his assistants to focus on high-priority projects.",
    questionVi:
      "Người quản lý quyết định ______ một số nhiệm vụ thường nhật cho các trợ lý của mình để tập trung vào các dự án ưu tiên cao.",
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
      "Due to the ______ nature of the documents, only authorized personnel are allowed to access them.",
    questionVi:
      "Do tính chất ______ của các tài liệu, chỉ những nhân viên được ủy quyền mới được phép tiếp cận chúng.",
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
      "The property prices in this area have increased ______ over the past decade.",
    questionVi:
      "Giá bất động sản trong khu vực này đã tăng ______ trong thập kỷ qua.",
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
      "The factory had to ______ production temporarily due to a shortage of raw materials.",
    questionVi:
      "Nhà máy phải ______ sản xuất tạm thời do thiếu hụt nguyên liệu thô.",
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
      "I would rather you ______ the client directly instead of sending an anonymous email.",
    questionVi:
      "Tôi thà rằng bạn ______ khách hàng trực tiếp thay vì gửi một email ẩn danh.",
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
      "Please provide a ______ explanation for the budget discrepancy discovered during the audit.",
    questionVi:
      "Vui lòng cung cấp một lời giải thích ______ cho sự sai lệch ngân sách được phát hiện trong quá trình kiểm toán.",
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
      "The ______ of the new highway has significantly reduced the commute time for workers.",
    questionVi:
      "Việc ______ đường cao tốc mới đã làm giảm đáng kể thời gian đi làm của công nhân.",
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
      "Hardly ______ the presentation when the power suddenly went out.",
    questionVi: "Vừa mới ______ bài thuyết trình thì điện đột ngột cúp.",
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
      "The company decided to ______ the contract because the supplier failed to meet the quality standards.",
    questionVi:
      "Công ty quyết định ______ hợp đồng vì nhà cung cấp không đáp ứng được các tiêu chuẩn chất lượng.",
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
      "The software is designed to help users organize their files ______ efficiently.",
    questionVi:
      "Phần mềm được thiết kế để giúp người dùng sắp xếp các tệp của họ ______ hiệu quả.",
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
      "After hours of negotiation, the two companies finally reached a ______ agreement.",
    questionVi:
      "Sau nhiều giờ đàm phán, hai công ty cuối cùng đã đạt được một thỏa thuận ______.",
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
      "The board issued a statement to ______ that all employees will receive a bonus this year.",
    questionVi:
      "Hội đồng quản trị đã đưa ra một tuyên bố để ______ rằng tất cả nhân viên sẽ nhận được tiền thưởng trong năm nay.",
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
      "______ the fact that the project was over budget, the management decided to continue.",
    questionVi:
      "______ việc dự án đã vượt quá ngân sách, ban quản lý vẫn quyết định tiếp tục.",
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
      "The customer's ______ about the defective product was handled promptly by the support team.",
    questionVi:
      "Sự ______ của khách hàng về sản phẩm bị lỗi đã được đội ngũ hỗ trợ xử lý kịp thời.",
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
      "The technician worked ______ to restore the network connection after the server crash.",
    questionVi:
      "Kỹ thuật viên đã làm việc ______ để khôi phục kết nối mạng sau sự cố máy chủ.",
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
      "We suggest that Mr. Miller ______ the proposal before the final submission.",
    questionVi:
      "Chúng tôi đề nghị ông Miller ______ đề xuất trước khi nộp bản cuối cùng.",
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
      "The new employee ______ herself through her hard work and dedication.",
    questionVi:
      "Nhân viên mới đã ______ bản thân thông qua sự làm việc chăm chỉ và tận tụy.",
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
      "All participants are required to wear ______ clothing while visiting the manufacturing plant.",
    questionVi:
      "Tất cả những người tham gia được yêu cầu mặc quần áo ______ trong khi tham quan nhà máy sản xuất.",
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
      "The project leader asked the team Members ______ their progress reports by Friday morning.",
    questionVi:
      "Trưởng nhóm yêu cầu các thành viên trong nhóm ______ báo cáo tiến độ của họ trước sáng thứ Sáu.",
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
      "The manager is ______ for overseeing the department's daily operations.",
    questionVi: "Quản lý ______ giám sát các hoạt động hàng ngày của bộ phận.",
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
      "The ______ of the company's asset values led to a re-evaluation of its stock price.",
    questionVi:
      "Việc ______ giá trị tài sản của công ty đã dẫn đến việc đánh giá lại giá cổ phiếu của nó.",
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
      "By the time the merger is finalized, both companies ______ their organizational structures.",
    questionVi:
      "Vào lúc việc sáp nhập được hoàn tất, cả hai công ty ______ cấu trúc tổ chức của họ.",
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
      "The marketing team needs to be more ______ if they want to attract younger customers.",
    questionVi:
      "Đội ngũ marketing cần phải ______ hơn nếu họ muốn thu hút những khách hàng trẻ tuổi hơn.",
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
      "The CEO, ______ vision led the company to success, will be retiring next month.",
    questionVi:
      "Giám đốc điều hành, người ______ tầm nhìn đã đưa công ty đến thành công, sẽ nghỉ hưu vào tháng tới.",
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
      "The new regulation will ______ small businesses to follow the same standards as large corporations.",
    questionVi:
      "Quy định mới sẽ ______ các doanh nghiệp nhỏ phải tuân theo các tiêu chuẩn giống như các tập đoàn lớn.",
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
      "The ______ of the electricity grid is essential for the transition to renewable energy.",
    questionVi:
      "Việc ______ lưới điện là rất cần thiết cho quá trình chuyển đổi sang năng lượng tái tạo.",
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
      "The financial report ______ that the company's debt has decreased by 15%.",
    questionVi: "Báo cáo tài chính ______ rằng nợ của công ty đã giảm 15%.",
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
      "The manager spoke ______ about the need for improved communication within the team.",
    questionVi:
      "Người quản lý đã nói một cách ______ về nhu cầu cải thiện giao tiếp trong nhóm.",
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
      "The workshop was ______ informative that many participants signed up for the advanced course.",
    questionVi:
      "Buổi hội thảo ______ nhiều thông tin đến mức nhiều người tham gia đã đăng ký khóa học nâng cao.",
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
      "The company's primary ______ is to become the market leader in the next five years.",
    questionVi:
      "______ chính của công ty là trở thành người dẫn đầu thị trường trong năm năm tới.",
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
      "The legal department issued a ______ notice regarding the new data privacy laws.",
    questionVi:
      "Bộ phận pháp lý đã ban hành một thông báo ______ liên quan đến luật bảo mật dữ liệu mới.",
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
      "Neither of the candidates ______ the specific requirements for the senior position.",
    questionVi:
      "Không ai trong số các ứng viên ______ các yêu cầu cụ thể cho vị trí cấp cao.",
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
      "The new budget ______ will limit the amount of money spent on overseas travel.",
    questionVi:
      "Việc ______ ngân sách mới sẽ giới hạn số tiền chi cho các chuyến công tác nước ngoài.",
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
      "The team worked ______ to solve the technical issues before the product launch.",
    questionVi:
      "Nhóm đã làm việc ______ để giải quyết các vấn đề kỹ thuật trước khi ra mắt sản phẩm.",
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
      "The manager asked that the employees ______ all safety protocols during the drill.",
    questionVi:
      "Người quản lý yêu cầu nhân viên ______ tất cả các quy trình an toàn trong buổi diễn tập.",
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
      "The company's ______ has increased since they started using more efficient technology.",
    questionVi:
      "______ của công ty đã tăng lên kể từ khi họ bắt đầu sử dụng công nghệ hiệu quả hơn.",
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
      "The results from the feasibility study were quite ______ for the investors.",
    questionVi:
      "Kết quả từ nghiên cứu khả thi khá là ______ đối với các nhà đầu tư.",
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
      "Regardless ______ the outcome of the meeting, we must proceed with our original plan.",
    questionVi:
      "Bất kể ______ kết quả cuộc họp như thế nào, chúng ta phải tiến hành kế hoạch ban đầu.",
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
      "The new employee is very ______, always finishing his tasks before the deadline.",
    questionVi:
      "Nhân viên mới rất ______, luôn hoàn thành nhiệm vụ trước thời hạn.",
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
      "The ______ of the company's website has improved its online sales figure.",
    questionVi:
      "Việc ______ trang web của công ty đã cải thiện con số doanh thu trực tuyến.",
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
      "Scarcely ______ the office when the manager called him back for an urgent task.",
    questionVi:
      "Anh ấy vừa mới ______ văn phòng thì người quản lý gọi anh ấy quay lại vì một nhiệm vụ khẩn cấp.",
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
      "The insurance company will ______ the client for any damages caused by the accident.",
    questionVi:
      "Công ty bảo hiểm sẽ ______ khách hàng cho bất kỳ thiệt hại nào do vụ tai nạn gây ra.",
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
      "The candidate has a ______ background in software engineering and project management.",
    questionVi:
      "Ứng viên có một nền tảng ______ về kỹ thuật phần mềm và quản lý dự án.",
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
      "The director suggested ______ the marketing campaign until the new product is ready.",
    questionVi:
      "Giám đốc đề nghị ______ chiến dịch marketing cho đến khi sản phẩm mới sẵn sàng.",
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
      "The company's ______ to ethical business practices has attracted many socially conscious investors.",
    questionVi:
      "Sự ______ của công ty đối với các thực tiễn kinh doanh có đạo đức đã thu hút nhiều nhà đầu tư có ý thức xã hội.",
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
      "The technician performed a ______ check of the system to identify the cause of the failure.",
    questionVi:
      "Kỹ thuật viên đã thực hiện một việc kiểm tra ______ hệ thống để xác định nguyên nhân lỗi.",
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
      "Only by working together ______ the team be able to finish the project on time.",
    questionVi:
      "Chỉ bằng cách làm việc cùng nhau, nhóm ______ có thể hoàn thành dự án đúng hạn.",
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
      "The manager decided to ______ the meeting as most of the participants were unable to attend.",
    questionVi:
      "Người quản lý quyết định ______ cuộc họp vì hầu hết những người tham gia không thể tham dự.",
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
      "The ______ of the new policy was met with mixed reactions from the staff.",
    questionVi:
      "Việc ______ chính sách mới đã vấp phải những phản ứng trái chiều từ nhân viên.",
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
      "The supervisor ______ the employees to take short breaks to improve their focus.",
    questionVi:
      "Người giám sát ______ nhân viên nghỉ giải lao ngắn để cải thiện sự tập trung.",
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
      "The company's stock price ______ significantly after the positive quarterly report was released.",
    questionVi:
      "Giá cổ phiếu của công ty đã ______ đáng kể sau khi báo cáo hàng quý tích cực được công bố.",
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
      "The CEO gave a ______ speech about the company's future goals and vision.",
    questionVi:
      "Giám đốc điều hành đã có một bài phát biểu ______ về các mục tiêu và tầm nhìn tương lai của công ty.",
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
      "Under no circumstances ______ the confidential documents leaves the building.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, hồ sơ bảo mật ______ được rời khỏi tòa nhà.",
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
      "The new manager is ______ for streamlining the production process.",
    questionVi:
      "Người quản lý mới chịu ______ cho việc tinh giản quy trình sản xuất.",
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
      "The team needs to work ______ if they want to finish the project before the deadline.",
    questionVi:
      "Nhóm cần làm việc ______ nếu họ muốn hoàn thành dự án trước thời hạn.",
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
      "I would have attended the seminar if I ______ about it earlier.",
    questionVi: "Tôi đã tham dự hội thảo nếu tôi ______ về nó sớm hơn.",
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
      "The company decided to ______ its workforce due to the automation of many manual tasks.",
    questionVi:
      "Công ty quyết định ______ lực lượng lao động của mình do việc tự động hóa nhiều nhiệm vụ thủ công.",
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
      "The ______ of the company's financial records is required for the annual audit.",
    questionVi:
      "Việc ______ các hồ sơ tài chính của công ty là bắt buộc cho cuộc kiểm toán hàng năm.",
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
      "The consultant, ______ we hired last month, has provided many valuable insights.",
    questionVi:
      "Nhà tư vấn, người ______ chúng tôi đã thuê tháng trước, đã cung cấp nhiều hiểu biết quý giá.",
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
      "The new software is ______ to use, even for those with limited technical skills.",
    questionVi:
      "Phần mềm mới rất ______ để sử dụng, ngay cả với những người có kỹ năng kỹ thuật hạn chế.",
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
      "The manager provided a ______ explanation of the new company policy.",
    questionVi:
      "Người quản lý đã cung cấp một lời giải thích ______ về chính sách mới của công ty.",
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
      "Not only ______ the competition, but she also set a new sales record.",
    questionVi:
      "Cô ấy không những ______ cuộc thi mà còn lập một kỷ lục doanh số mới.",
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
      "The company's ______ objective is to provide high-quality products at affordable prices.",
    questionVi:
      "Mục tiêu ______ của công ty là cung cấp các sản phẩm chất lượng cao với giá cả phải chăng.",
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
      "The ______ of the new system has lead to a major increase in departmental efficiency.",
    questionVi:
      "Việc ______ hệ thống mới đã dẫn đến sự gia tăng lớn về hiệu quả của bộ phận.",
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
    questionEn: "We will start the meeting as soon as the CEO ______.",
    questionVi:
      "Chúng tôi sẽ bắt đầu cuộc họp ngay sau khi Giám đốc điều hành ______.",
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
      "The company decided to ______ the product after discovering a safety defect.",
    questionVi:
      "Công ty quyết định ______ sản phẩm sau khi phát hiện lỗi an toàn.",
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
      "The marketing manager spoke very ______ about the company's new expansion strategy.",
    questionVi:
      "Trưởng phòng marketing đã nói rất ______ về chiến lược mở rộng mới của công ty.",
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
      "Had the board of directors been aware of the potential risks, they _______ the merger proposal.",
    questionVi:
      "Nếu hội đồng quản trị nhận thức được các rủi ro tiềm ẩn, họ _______ đề xuất sáp nhập.",
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
      "The company decided to liquidate its ______ in Southeast Asia to focus on its core European markets.",
    questionVi:
      "Công ty đã quyết định thanh lý các ______ của mình tại Đông Nam Á để tập trung vào các thị trường châu Âu cốt lõi.",
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
      "The new government regulations will have a _______ impact on many small-scale startups.",
    questionVi:
      "Các quy định mới của chính phủ sẽ có một tác động _______ lên nhiều doanh nghiệp khởi nghiệp quy mô nhỏ.",
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
      "The consultant, _______ expertise in international trade is well-known, will be leading the negotiation team.",
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
      "Investors are advised to _______ their portfolios to minimize risks during economic downturns.",
    questionVi:
      "Các nhà đầu tư được khuyên nên _______ danh mục đầu tư của họ để giảm thiểu rủi ro trong thời kỳ suy thoái kinh tế.",
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
      "It is imperative that the marketing department _______ the revised strategy by the end of the week.",
    questionVi:
      "Điều cấp thiết là bộ phận tiếp thị _______ chiến lược đã sửa đổi vào cuối tuần này.",
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
      "The _______ of the logistics network has significantly reduced the delivery time for international orders.",
    questionVi:
      "Việc _______ mạng lưới hậu cần đã giảm đáng kể thời gian giao hàng cho các đơn hàng quốc tế.",
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
      "Under no circumstances _______ employees allowed to share their login credentials with unauthorized personnel.",
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
      "Due to unforeseen circumstances, the keynote speaker had to _______ his presentation at the last minute.",
    questionVi:
      "Do những tình huống bất ngờ, diễn giả chính đã phải _______ bài thuyết trình của mình vào phút chót.",
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
      "The CEO issued a statement to _______ rumors regarding a potential hostile takeover.",
    questionVi:
      "Giám đốc điều hành đã đưa ra một tuyên báo để _______ những tin đồn liên quan đến một vụ mua lại thâu tóm.",
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
      "The project was completed on schedule, _______ the numerous technical difficulties encountered during the initial phase.",
    questionVi:
      "Dự án đã được hoàn thành đúng tiến độ, _______ nhiều khó khăn kỹ thuật gặp phải trong giai đoạn đầu.",
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
      "The legal department is reviewing the contract to ensure all clauses are in _______ with international labor laws.",
    questionVi:
      "Bộ phận pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản đều _______ với luật lao động quốc tế.",
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
      "Successful entrepreneurs possess the _______ to adapt to rapidly changing market conditions.",
    questionVi:
      "Các doanh nhân thành công sở hữu _______ thích nghi với các điều kiện thị trường thay đổi nhanh chóng.",
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
      "Hardly _______ the new software been installed when several critical bugs were reported by the users.",
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
      "The company's annual report highlight's its _______ to sustainability and environmental responsibility.",
    questionVi:
      "Báo cáo thường niên của công ty làm nổi bật _______ của mình đối với sự bền vững và trách nhiệm môi trường.",
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
      "The audit revealed that the financial statements were _______ inaccurate due to clerical errors.",
    questionVi:
      "Cuộc kiểm toán tiết lộ rằng các báo cáo tài chính đã không chính xác một cách _______ do sai sót đánh máy.",
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
      "Not only _______ the sales team meet their targets, but they also exceeded them by 20 percent.",
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
      "The negotiation reached an _______ when neither side was willing to compromise on the pricing terms.",
    questionVi:
      "Cuộc đàm phán đã đạt đến _______ khi không bên nào sẵn sàng thỏa hiệp về các điều khoản giá cả.",
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
      "The manager praised the team for their _______ efforts in resolving the system outage so quickly.",
    questionVi:
      "Quản lý đã khen ngợi đội ngũ vì những nỗ lực _______ của họ trong việc giải quyết tình trạng ngừng hoạt động hệ thống nhanh chóng.",
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
      "Should you _______ any further assistance with the installation process, please contact our technical support hotline.",
    questionVi:
      "Nếu bạn _______ bất kỳ sự hỗ trợ nào thêm về quy trình cài đặt, vui lòng liên hệ với đường dây nóng hỗ trợ kỹ thuật của chúng tôi.",
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
      "The new marketing campaign aims to leverage social media influencers to _______ brand awareness among Gen Z.",
    questionVi:
      "Chiến dịch tiếp thị mới nhằm tận dụng những người có ảnh hưởng trên mạng xã hội để _______ nhận thức về thương hiệu trong thế hệ Z.",
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
      "The application of the new algorithm resulted in a _______ increase in data processing speeds.",
    questionVi:
      "Việc áp dụng thuật toán mới đã mang lại sự gia tăng _______ trong tốc độ xử lý dữ liệu.",
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
      "The board suggested that the CEO _______ his resignation effective immediately to avoid further scandal.",
    questionVi:
      "Hội đồng quản trị đề nghị CEO _______ đơn từ chức có hiệu lực ngay lập tức để tránh thêm bê bối.",
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
      "The factory had to halt production due to a severe _______ of raw materials caused by shipping delays.",
    questionVi:
      "Nhà máy đã phải tạm dừng sản xuất do sự _______ nghiêm trọng nguyên liệu thô gây ra bởi sự chậm trễ vận chuyển.",
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
      "The manager's decision was based on a _______ analysis of the market trends over the last decade.",
    questionVi:
      "Quyết định của quản lý dựa trên một phân tích _______ về xu hướng thị trường trong thập kỷ qua.",
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
      "The merger, _______ had been anticipated for months, was finally announced yesterday.",
    questionVi:
      "Vụ sáp nhập, _______ đã được mong đợi trong nhiều tháng, cuối cùng đã được công bố vào ngày hôm qua.",
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
      "The HR department is looking for candidates who demonstrate high _______ and can work under pressure.",
    questionVi:
      "Bộ phận nhân sự đang tìm kiếm các ứng viên thể hiện _______ cao và có thể làm việc dưới áp lực.",
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
      "The legal team worked _______ to ensure that the contracts were finalized before the deadline.",
    questionVi:
      "Nhóm pháp lý đã làm việc _______ để đảm bảo rằng các hợp đồng được hoàn tất trước thời hạn.",
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
      "Scarcely _______ the presentation started when the power went out in the entire building.",
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
      "The company decided to _______ some of its customer support functions to a specialized third-party provider.",
    questionVi:
      "Công ty đã quyết định _______ một số chức năng hỗ trợ khách hàng cho một nhà cung cấp bên thứ ba chuyên dụng.",
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
      "The new software update is designed to improve the _______ of the user interface.",
    questionVi:
      "Bản cập nhật phần mềm mới được thiết kế để cải thiện _______ của giao diện người dùng.",
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
      "By the time the auditors arrive next month, we _______ all the necessary financial reconciliations.",
    questionVi:
      "Tính đến thời điểm các kiểm toán viên đến vào tháng tới, chúng tôi _______ tất cả các đối chiếu tài chính cần thiết.",
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
      "Employees are encouraged to _______ their concerns to management during the weekly town hall meetings.",
    questionVi:
      "Nhân viên được khuyến khích _______ những lo ngại của họ với ban quản lý trong các cuộc họp toàn thể hàng tuần.",
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
      "The marketing team's approach was _______ because it failed to address the needs of the local demographic.",
    questionVi:
      "Cách tiếp cận của nhóm tiếp thị đã _______ vì nó không giải quyết được nhu cầu của nhóm nhân khẩu học địa phương.",
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
      "Should there _______ any discrepancies in the invoice, please notify the accounting department immediately.",
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
      "The new luxury hotel aims to provide _______ service to its high-end clientele.",
    questionVi:
      "Khách sạn hạng sang mới nhằm cung cấp dịch vụ _______ cho những khách hàng cao cấp của mình.",
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
      "The CEO's speech provided a _______ vision for the company's growth over the next five years.",
    questionVi:
      "Bài thuyết trình của CEO đã cung cấp một tầm nhìn _______ cho sự phát triển của công ty trong năm năm tới.",
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
      "Rarely _______ a company experience such rapid growth in such a competitive market environment.",
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
      "The startup is seeking _______ capital to expand its operations and enter new overseas markets.",
    questionVi:
      "Công ty khởi nghiệp đang tìm kiếm vốn _______ để mở rộng hoạt động và bước vào các thị trường nước ngoài mới.",
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
      "The manager emphasized the importance of _______ in the workplace to maintain professional standards.",
    questionVi:
      "Quản lý nhấn mạnh tầm quan trọng của _______ tại nơi làm việc để duy trì các tiêu chuẩn chuyên nghiệp.",
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
      "The committee recommended that the proposal _______ further before a final decision is made.",
    questionVi:
      "Ủy ban đề nghị rằng đề xuất _______ thêm trước khi đưa ra quyết định cuối cùng.",
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
      "The long-standing _______ between the two companies ended with a surprise merger announcement.",
    questionVi:
      "Mối _______ lâu dài giữa hai công ty đã kết thúc bằng một thông báo sáp nhập đầy bất ngờ.",
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
      "The new employee showed _______ promise and was promoted within six months of joining.",
    questionVi:
      "Nhân viên mới đã cho thấy triển vọng _______ và được thăng chức trong vòng 6 tháng kể từ khi gia nhập.",
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
      "Had it not been for the generous grant, the research project _______ abandoned.",
    questionVi:
      "Nếu không có khoản tài trợ hào phóng đó, dự án nghiên cứu _______ bị bỏ dở.",
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
      "The company's profit _______ have been downward for the last three quarters.",
    questionVi:
      "Các _______ lợi nhuận của công ty đã đi xuống trong ba quý vừa qua.",
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
      "The CEO believes that digital transformation is _______ for staying competitive in the modern age.",
    questionVi:
      "CEO tin rằng chuyển đổi số là _______ để giữ vững khả năng cạnh tranh trong kỷ nguyên hiện đại.",
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
      "Only by streamlining its supply chain _______ the company be able to reduce its operational costs.",
    questionVi:
      "Chỉ bằng cách tinh gọn chuỗi cung ứng _______ công ty mới có thể giảm chi phí vận hành.",
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
      "The team members were asked to _______ all expenses accrued during the business trip.",
    questionVi:
      "Các thành viên trong nhóm được yêu cầu _______ tất cả các chi phí phát sinh trong chuyến công tác.",
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
      "The _______ of the new law caused a lot of confusion among small business owners.",
    questionVi:
      "Việc _______ luật mới đã gây ra nhiều sự nhầm lẫn cho các chủ doanh nghiệp nhỏ.",
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
      "Not until the end of the fiscal year _______ the full extent of the losses become apparent.",
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
      "The company's _______ strategy focuses on expanding into emerging markets in Africa and South America.",
    questionVi:
      "Chiến lược _______ của công ty tập trung vào việc mở rộng sang các thị trường mới nổi ở Châu Phi và Nam Mỹ.",
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
      "The data security breach was _______ to a failure in the legacy authentication system.",
    questionVi:
      "Việc vi phạm bảo mật dữ liệu đã được _______ là do lỗi trong hệ thống xác thực cũ.",
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
      "So intense _______ the competition that many small bookstores were forced to close down.",
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
      "The terms of the lease agreement are _______, so feel free to suggest any changes you deem necessary.",
    questionVi:
      "Các điều khoản của hợp đồng thuê là _______, vì vậy hãy thoải mái đề xuất bất kỳ thay đổi nào bạn thấy cần thiết.",
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
      "The new CEO is known for his _______ management style, which emphasizes collaboration and transparency.",
    questionVi:
      "Vị CEO mới nổi tiếng với phong cách quản lý _______, nhấn mạnh vào sự cộng tác và minh bạch.",
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
      "No sooner _______ the new policy been implemented than the employees started protesting against it.",
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
      "The company faced severe _______ backlash after the news of the ethical violation became public.",
    questionVi:
      "Công ty đã đối mặt với phản ứng dữ dội từ _______ sau khi tin tức về vi phạm đạo đức được công bố.",
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
      "The _______ of the task force was to investigate the causes of the recent industrial accident.",
    questionVi:
      "_______ của lực lượng đặc nhiệm là điều tra nguyên nhân của vụ tai nạn công nghiệp gần đây.",
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
      "The board members asked whether the CEO _______ the possibility of a joint venture with our competitor.",
    questionVi:
      "Các thành viên hội đồng quản trị đã hỏi liệu CEO _______ khả năng liên doanh với đối thủ cạnh tranh của chúng ta không.",
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
      "Investors are optimistic about the company's future growth _______ following the successful product launch.",
    questionVi:
      "Các nhà đầu tư lạc quan về _______ tăng trưởng tương lai của công ty sau khi ra mắt sản phẩm thành công.",
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
      "The manager's _______ response to the crisis helped to reassure both employees and clients.",
    questionVi:
      "Phản ứng _______ của quản lý đối với cuộc khủng hoảng đã giúp trấn an cả nhân viên và khách hàng.",
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
      "Little _______ the management realize that the market was about to undergo a major shift.",
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
      "The software engineer discovered a _______ in the code that was causing the application to crash.",
    questionVi:
      "Kỹ sư phần mềm đã phát hiện ra một _______ trong mã nguồn đang khiến ứng dụng bị sập.",
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
      "The results of the study were _______ inconsistent, leading to further investigations.",
    questionVi:
      "Kết quả nghiên cứu đã không nhất quán một cách _______, dẫn đến các cuộc điều tra thêm.",
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
      "Were the company to increase its prices now, it _______ many of its loyal customers.",
    questionVi:
      "Nếu công ty tăng giá bây giờ, họ _______ nhiều khách hàng trung thành của mình.",
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
      "The company issued a _______ to all employees regarding the new remote work policy.",
    questionVi:
      "Công ty đã phát hành một _______ cho tất cả nhân viên liên quan đến chính sách làm việc từ xa mới.",
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
      "The project's success is _______ on the arrival of the specialized machinery from Germany.",
    questionVi:
      "Sự thành công của dự án _______ vào việc máy móc chuyên dụng từ Đức được vận chuyển đến.",
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
      "Hardly had the meeting _______ when the fire alarm started ringing.",
    questionVi: "Cuộc họp vừa mới _______ thì chuông báo cháy bắt đầu reo.",
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
      "The sales director is responsible for _______ the expansion of the retail network in Europe.",
    questionVi:
      "Giám đốc bán hàng chịu trách nhiệm _______ việc mở rộng mạng lưới bán lẻ tại Châu Âu.",
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
      "The advertising firm is known for its _______ and innovative campaigns.",
    questionVi:
      "Công ty quảng cáo nổi tiếng với các chiến dịch _______ và đổi mới.",
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
      "The director insisted that the report _______ by a certified public accountant.",
    questionVi:
      "Giám đốc khăng khăng rằng báo cáo _______ bởi một kế toán công chứng.",
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
      "The company's stock price _______ after the news of the patent infringement lawsuit broke.",
    questionVi:
      "Giá cổ phiếu của công ty đã _______ sau khi tin tức về vụ kiện vi phạm bằng sáng chế bùng nổ.",
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
      "The new regulation is _______ only to companies with more than 500 employees.",
    questionVi:
      "Quy định mới chỉ _______ đối với các công ty có hơn 500 nhân viên.",
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
      "Not only _______ the new system improve data accuracy, but it also reduced processing time by half.",
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
      "The executive board reached a _______ on the budget allocation for the next fiscal year.",
    questionVi:
      "Ban điều hành đã đạt được một _______ về phân bò ngân sách cho năm tài chính tiếp theo.",
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
      "The company's expansion plans were _______ due to the lack of available capital.",
    questionVi:
      "Kế hoạch mở rộng của công ty đã bị _______ do thiếu vốn sẵn có.",
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
      "_______ by the high interest rates, many developers have put their projects on hold.",
    questionVi:
      "_______ bởi lãi suất cao, nhiều nhà phát triển đã tạm dừng các dự án của họ.",
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
      "The law firm specialize in the _______ of intellectual property rights in the digital era.",
    questionVi:
      "Công ty luật chuyên về việc _______ các quyền sở hữu trí tuệ trong kỷ nguyên số.",
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
      "The HR manager is looking for someone with a _______ track record in project management.",
    questionVi:
      "Quản lý nhân sự đang tìm kiếm một người có thành tích _______ trong quản lý dự án.",
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
      "The new policy requires that every employee _______ a mandatory training session on cybersecurity.",
    questionVi:
      "Chính sách mới yêu cầu mọi nhân viên _______ một buổi đào tạo bắt buộc về an ninh mạng.",
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
      "The company had to _______ its production targets after several key components were delayed.",
    questionVi:
      "Công ty đã phải _______ các mục tiêu sản xuất sau khi một số thành phần then chốt bị chậm trễ.",
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
      "The marketing campaign was _______ successful, exceeding all projected sales figures.",
    questionVi:
      "Chiến dịch tiếp thị đã thành công một cách _______, vượt qua tất cả các số liệu doanh thu dự kiến.",
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
      "Only later _______ the board members realize the magnitude of the errors in the financial report.",
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
      "The manager apologized for the _______ delay in responding to the client's inquiry.",
    questionVi:
      "Quản lý đã xin lỗi vì sự chậm trễ _______ trong việc phản hồi yêu cầu của khách hàng.",
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
      "The technical team is working on the _______ of the new cloud-based infrastructure.",
    questionVi:
      "Nhóm kỹ thuật đang làm việc trên việc _______ cơ sở hạ tầng dựa trên đám mây mới.",
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
      "The CEO, _______ leadership has been pivotal, will step down at the end of the year.",
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
      "To maintain a competitive edge, the firm must _______ innovate its product offerings.",
    questionVi:
      "Để duy trì lợi thế cạnh tranh, công ty phải _______ đổi mới các sản phẩm của mình.",
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
      "The new policy was met with _______ resistance from the senior staff members.",
    questionVi:
      "Chính sách mới vấp phải sự kháng cự _______ từ các nhân viên cấp cao.",
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
      "It is essential that everyone _______ to the safety regulations without exception.",
    questionVi:
      "Điều thiết yếu là mọi người phải _______ các quy định an toàn mà không có ngoại lệ.",
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
      "The company decided to _______ the launch until all security concerns were addressed.",
    questionVi:
      "Công ty đã quyết định _______ việc ra mắt cho đến khi tất cả các lo ngại về bảo mật được giải quyết.",
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
      "The marketing report highlights the _______ for expansion into the Asian market.",
    questionVi:
      "Báo cáo tiếp thị làm nổi bật _______ để mở rộng sang thị trường Châu Á.",
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
      "Rarely have we seen such ________ support for a environmental initiative from the local community.",
    questionVi:
      "Hiếm khi chúng ta thấy sự hỗ trợ ________ như vậy đối với một sáng kiến môi trường từ cộng đồng địa phương.",
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
      "The company's success is largely _______ to its ability to anticipate consumer needs.",
    questionVi:
      "Thành công của công ty phần lớn là _______ nhờ vào khả năng dự đoán nhu cầu người tiêu dùng.",
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
      "The audit team found several _______ in the accounting records that required immediate attention.",
    questionVi:
      "Nhóm kiểm toán đã tìm thấy một số _______ trong hồ sơ kế toán yêu cầu sự chú ý ngay lập tức.",
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
      "Under no circumstances _______ the warehouse doors be left unlocked overnight.",
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
      "The HR department aims to _______ a culture of lifelong learning and professional growth.",
    questionVi:
      "Bộ phận nhân sự nhằm mục tiêu _______ một văn hóa học tập suốt đời và phát triển chuyên môn.",
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
      "The legal dispute was settled out of court through a _______ agreement between the two parties.",
    questionVi:
      "Vụ tranh chấp pháp lý đã được giải quyết bên ngoài tòa án thông qua một thỏa thuận _______ giữa hai bên.",
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
      "No sooner _______ the CEO resigned than a search for a suitable replacement began.",
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
      "The company's decision to downsize was a direct _______ of the prolonged industry slump.",
    questionVi:
      "Quyết định cắt giảm nhân sự của công ty là _______ trực tiếp của sự suy sụp kéo dài trong ngành.",
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
      "The new manager's approach to conflict resolution is _______ different from that of his predecessor.",
    questionVi:
      "Cách tiếp cận giải quyết xung đột của quản lý mới khác biệt _______ so với người tiền nhiệm của ông ấy.",
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
      "The CEO decided to ------- the merger after reviewing the financial projections for the upcoming quarter.",
    questionVi:
      "Giám đốc điều hành đã quyết định ------- vụ sáp nhập sau khi xem xét các dự báo tài chính cho quý tới.",
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
      "Ms. Hanh's ------- contribution to the research project was recognized at the annual science gala.",
    questionVi:
      "Sự đóng góp ------- của bà Hạnh cho dự án nghiên cứu đã được ghi nhận tại dạ tiệc khoa học hàng năm.",
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
      "The marketing team must work ------- to meet the deadline for the new product launch.",
    questionVi:
      "Đội ngũ marketing phải làm việc ------- để kịp thời hạn ra mắt sản phẩm mới.",
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
      "Please ensure that all confidential documents are ------- shredded before disposal.",
    questionVi:
      "Vui lòng đảm bảo rằng tất cả các tài liệu bảo mật đều được tiêu hủy ------- trước khi vứt bỏ.",
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
      "The software update is designed to improve the ------- of the database management system.",
    questionVi:
      "Bản cập nhật phần mềm được thiết kế để cải thiện ------- của hệ thống quản lý cơ sở dữ liệu.",
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
      "The hotel offers a complimentary shuttle service for guests staying ------- three nights or more.",
    questionVi:
      "Khách sạn cung cấp dịch vụ đưa đón miễn phí cho khách lưu trú từ ba đêm -------.",
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
      "Despite the technical difficulties, the presentation was ------- successful.",
    questionVi:
      "Mặc dù có những khó khăn về kỹ thuật, buổi thuyết trình đã thành công -------.",
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
      "The budget proposal needs to be finalized ------- the end of the business day.",
    questionVi:
      "Đề xuất ngân sách cần được hoàn thiện ------- cuối ngày làm việc.",
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
      "Employees who demonstrate ------- performance may be eligible for a year-end bonus.",
    questionVi:
      "Những nhân viên thể hiện hiệu suất ------- có thể đủ điều kiện nhận tiền thưởng cuối năm.",
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
      "The construction of the new office building is expected to be ------- by next spring.",
    questionVi:
      "Việc xây dựng tòa nhà văn phòng mới dự kiến sẽ được ------- vào mùa xuân tới.",
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
      "The consultant suggested that the company ------- its digital marketing strategy to reach a wider audience.",
    questionVi:
      "Nhà tư vấn đề xuất công ty ------- chiến lược marketing kỹ thuật số để tiếp cận lượng khán giả rộng hơn.",
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
      "Because the shipment was delayed, the store manager offered a 15% discount as -------.",
    questionVi:
      "Vì chuyến hàng bị trì hoãn, quản lý cửa hàng đã đề nghị giảm giá 15% như một sự -------.",
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
      "The new interns are required to attend an orientation session ------- they begin their assignments.",
    questionVi:
      "Các thực tập sinh mới được yêu cầu tham gia một buổi định hướng ------- họ bắt đầu nhiệm vụ của mình.",
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
      "The supervisor was impressed by the ------- with which the team handled the crisis.",
    questionVi:
      "Người giám sát đã bị ấn tượng bởi sự ------- mà nhóm đã xử lý cuộc khủng hoảng.",
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
      "The conference room is ------- occupied, so please wait in the lobby.",
    questionVi: "Phòng họp hiện đang -------, vì vậy vui lòng đợi ở sảnh.",
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
      "The sales representatives must provide a detailed report on ------- client interaction.",
    questionVi:
      "Các đại diện bán hàng phải cung cấp báo cáo chi tiết về ------- tương tác với khách hàng.",
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
      "If the weather conditions improve, the outdoor concert ------- as scheduled.",
    questionVi:
      "Nếu điều kiện thời tiết cải thiện, buổi hòa nhạc ngoài trời ------- như kế hoạch.",
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
      "The committee will review the applications and make a final ------- by Friday.",
    questionVi:
      "Ủy ban sẽ xem xét các đơn ứng tuyển và đưa ra ------- cuối cùng vào thứ Sáu.",
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
      "The laboratory equipment is extremely sensitive and must be handled with -------.",
    questionVi:
      "Thiết bị phòng thí nghiệm cực kỳ nhạy cảm và phải được xử lý một cách -------.",
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
      "Investors are optimistic about the company's future ------- its consistent revenue growth.",
    questionVi:
      "Các nhà đầu tư lạc quan về tương lai của công ty ------- sự tăng trưởng doanh thu nhất quán của nó.",
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
      "Please notify the HR department immediately if you ------- your contact information.",
    questionVi:
      "Vui lòng thông báo cho bộ phận nhân sự ngay lập tức nếu bạn ------- thông tin liên lạc của mình.",
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
      "The factory workers are required to wear safety gear to ------- workplace injuries.",
    questionVi:
      "Công nhân nhà máy được yêu cầu mặc đồ bảo hộ để ------- chấn thương nơi làm việc.",
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
      "The manager praised the team for their ------- efforts in completing the project ahead of schedule.",
    questionVi:
      "Quản lý đã khen ngợi nhóm vì những nỗ lực ------- của họ trong việc hoàn thành dự án trước thời hạn.",
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
      "The legal department is reviewing the contract to ensure all terms are -------.",
    questionVi:
      "Bộ phận pháp lý đang xem xét hợp đồng để đảm bảo tất cả các điều khoản đều -------.",
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
      "Mr. Kim was chosen to lead the task force because of his ------- experience in supply chain management.",
    questionVi:
      "Ông Kim đã được chọn để lãnh đạo đội đặc nhiệm vì kinh nghiệm ------- của ông trong quản lý chuỗi cung ứng.",
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
      "The company's logo should be placed ------- on all promotional materials.",
    questionVi:
      "Logo của công ty nên được đặt ------- trên tất cả các tài liệu quảng cáo.",
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
      "The newly hired accountant has proven to be a very ------- employee.",
    questionVi:
      "Kế toán mới được thuê đã chứng tỏ là một nhân viên rất -------.",
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
      "Customers are encouraged to provide feedback so that we can ------- improve our services.",
    questionVi:
      "Khách hàng được khuyến khích cung cấp phản hồi để chúng tôi có thể ------- cải thiện dịch vụ của mình.",
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
      "The research suggests that regular exercise can have a ------- effect on overall health.",
    questionVi:
      "Nghiên cứu cho thấy tập thể dục thường xuyên có thể có tác động ------- đến sức khỏe tổng thể.",
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
      "The board of directors is currently ------- the possibility of expanding into the European market.",
    questionVi:
      "Hội đồng quản trị hiện đang ------- khả năng mở rộng sang thị trường Châu Âu.",
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
      "The flight was delayed ------- a technical malfunction with the aircraft's navigation system.",
    questionVi:
      "Chuyến bay đã bị trì hoãn ------- một lỗi kỹ thuật của hệ thống định vị máy bay.",
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
      "Please make sure to read the safety manual ------- before operating the heavy machinery.",
    questionVi:
      "Hãy đảm bảo đọc kỹ hướng dẫn an toàn ------- trước khi vận hành máy móc hạng nặng.",
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
      "The marketing director is looking for a candidate who is ------- in both Japanese and English.",
    questionVi:
      "Giám đốc marketing đang tìm kiếm một ứng viên ------- cả tiếng Nhật và tiếng Anh.",
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
      "The CEO's speech was so ------- that several investors decided to increase their funding.",
    questionVi:
      "Bài phát biểu của CEO ------- đến mức một vài nhà đầu tư đã quyết định tăng ngân sách đầu tư của họ.",
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
      "The company has decided to ------- its traditional advertising budget to invest more in social media.",
    questionVi:
      "Công ty đã quyết định ------- ngân sách quảng cáo truyền thống để đầu tư nhiều hơn vào mạng xã hội.",
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
      "The new residential complex is located ------- a short walking distance from the subway station.",
    questionVi:
      "Khu dân cư mới nằm trong khoảng cách đi bộ ngắn ------- ga tàu điện ngầm.",
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
      "All staff members are expected to follow the company's code of conduct -------.",
    questionVi:
      "Tất cả các thành viên nhân viên được kỳ vọng tuân thủ quy tắc ứng xử của công ty -------.",
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
      "Neither the supervisor ------- the manager was aware of the change in the project timeline.",
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
      "The financial report indicates that the firm's profits have grown ------- over the last quarter.",
    questionVi:
      "Báo cáo tài chính chỉ ra rằng lợi nhuận của công ty đã tăng trưởng ------- trong quý vừa qua.",
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
      "Applicants must submit their resumes ------- with a cover letter to the HR department.",
    questionVi:
      "Các ứng viên phải nộp sơ yếu lý lịch ------- với một lá thư xin việc tới bộ phận nhân sự.",
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
      "The workshop will focus on techniques for ------- effective communication in the workplace.",
    questionVi:
      "Buổi hội thảo sẽ tập trung vào các kỹ thuật để ------- giao tiếp hiệu quả tại nơi làm việc.",
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
      "We were surprised by the ------- number of attendees at the charity event.",
    questionVi:
      "Chúng tôi đã ngạc nhiên bởi số lượng người tham dự ------- tại sự kiện từ thiện.",
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
      "The project manager is responsible for ------- tasks to the appropriate team members.",
    questionVi:
      "Quản lý dự án có trách nhiệm ------- các nhiệm vụ cho các thành viên nhóm phù hợp.",
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
      "The new regulations were implemented to ensure ------- with ethical standards.",
    questionVi:
      "Các quy định mới được thực hiện để đảm bảo ------- với các tiêu chuẩn đạo đức.",
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
      "The technical support team is available 24/7 to ------- any issues you may encounter.",
    questionVi:
      "Đội ngũ hỗ trợ kỹ thuật sẵn sàng 24/7 để ------- bất kỳ vấn đề nào bạn có thể gặp phải.",
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
      "The manager has several ------- candidates to interview for the open position.",
    questionVi:
      "Quản lý có một vài ứng viên ------- để phỏng vấn cho vị trí đang trống.",
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
      "Please review the attached document and provide your comments ------- next Monday.",
    questionVi:
      "Vui lòng xem xét tài liệu đính kèm và cung cấp nhận xét của bạn ------- thứ Hai tới.",
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
      "The company's annual report shows a ------- increase in international sales.",
    questionVi:
      "Báo cáo thường niên của công ty cho thấy một sự gia tăng ------- trong doanh số bán hàng quốc tế.",
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
      "The supervisor requested that the team ------- more effort into the current project.",
    questionVi:
      "Người giám sát yêu cầu nhóm ------- nhiều nỗ lực hơn vào dự án hiện tại.",
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
      "The marketing campaign was ------- successful, resulting in a 20% increase in sales.",
    questionVi:
      "Chiến dịch marketing đã thành công -------, dẫn đến doanh số tăng 20%.",
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
      "The HR department is in the process of ------- the employee benefits package.",
    questionVi:
      "Bộ phận nhân sự đang trong quá trình ------- gói phúc lợi nhân viên.",
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
      "It is essential that all employees ------- the safety protocols at all times.",
    questionVi:
      "Điều quan trọng là tất cả nhân viên phải ------- các quy định an toàn vào mọi lúc.",
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
      "The hotel offers a variety of amenities, ------- a fitness center and a swimming pool.",
    questionVi:
      "Khách sạn cung cấp nhiều tiện nghi, ------- trung tâm thể dục và hồ bơi.",
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
      "The administrative assistant is responsible for the ------- of office supplies.",
    questionVi: "Trợ lý hành chính chịu trách nhiệm về ------- văn phòng phẩm.",
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
      "The board members agreed that the proposal was ------- beneficial for the company.",
    questionVi:
      "Các thành viên hội đồng quản trị đồng ý rằng đề xuất có lợi ------- cho công ty.",
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
      "The manager was impressed by how ------- the new software was integrated into the workflow.",
    questionVi:
      "Quản lý đã bị ấn tượng bởi phần mềm mới được tích hợp vào quy trình làm việc ------- như thế nào.",
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
      "The company will provide a full refund ------- the product is returned within 30 days.",
    questionVi:
      "Công ty sẽ hoàn tiền đầy đủ ------- sản phẩm được trả lại trong vòng 30 ngày.",
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
      "Employees are reminded to keep their workspace tidy and ------- of clutter.",
    questionVi:
      "Nhân viên được nhắc nhở giữ không gian làm việc gọn gàng và ------- bừa bộn.",
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
      "The spokesperson for the company gave a very ------- explanation for the recent service outage.",
    questionVi:
      "Người phát ngôn của công ty đã đưa ra một lời giải thích rất ------- cho sự cố ngừng dịch vụ gần đây.",
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
      "The expansion of the factory will lead to the ------- of hundreds of new jobs in the region.",
    questionVi:
      "Việc mở rộng nhà máy sẽ dẫn đến ------- hàng trăm việc làm mới trong khu vực.",
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
      "The CEO emphasizes that customer satisfaction is our ------- priority.",
    questionVi:
      "CEO nhấn mạnh rằng sự hài lòng của khách hàng là ưu tiên ------- của chúng tôi.",
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
      "The research team is working ------- to find a solution to the environmental problem.",
    questionVi:
      "Đội ngũ nghiên cứu đang làm việc ------- để tìm ra giải pháp cho vấn đề môi trường.",
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
      "The new policy requires all staff to attend a training session ------- per year.",
    questionVi:
      "Chính sách mới yêu cầu tất cả nhân viên tham gia một buổi đào tạo ------- mỗi năm.",
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
      "The candidate was selected due to her ------- knowledge of computer programming.",
    questionVi:
      "Ứng viên đã được chọn do kiến thức ------- của cô ấy về lập trình máy tính.",
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
      "The city council is considering a proposal to ------- the historic library building.",
    questionVi:
      "Hội đồng thành phố đang xem xét một đề xuất để ------- tòa nhà thư viện lịch sử.",
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
      "The results of the survey were ------- unexpected, showing a shift in consumer preferences.",
    questionVi:
      "Kết quả của cuộc khảo sát ------- không ngờ tới, cho thấy một sự thay đổi trong sở thích của người tiêu dùng.",
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
      "The information provided in the brochure is for ------- purposes only.",
    questionVi:
      "Thông tin được cung cấp trong tập tài liệu này chỉ dành cho mục đích -------.",
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
      "The project was completed on time ------- the numerous challenges faced by the team.",
    questionVi:
      "Dự án đã được hoàn thành đúng hạn ------- vô số thách thức mà nhóm phải đối mặt.",
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
      "The technician is working to ------- the connectivity issues reported by several users.",
    questionVi:
      "Kỹ thuật viên đang làm việc để ------- các vấn đề kết nối được báo cáo bởi một số người dùng.",
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
      "The store manager is looking for ways to increase customer -------.",
    questionVi:
      "Quản lý cửa hàng đang tìm cách tăng cường ------- của khách hàng.",
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
      "The new software is extremely -------, making it easy for even beginners to use.",
    questionVi:
      "Phần mềm mới cực kỳ -------, giúp ngay cả những người mới bắt đầu cũng dễ dàng sử dụng.",
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
      "Investors are advised to diversify their portfolios to ------- risk.",
    questionVi:
      "Các nhà đầu tư được khuyên nên đa dạng hóa danh mục đầu tư để ------- rủi ro.",
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
      "The maintenance crew will be working on the elevators ------- the weekend.",
    questionVi: "Đội bảo trì sẽ làm việc trên các thang máy ------- cuối tuần.",
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
      "The report provides a ------- analysis of the current market trends.",
    questionVi:
      "Báo cáo cung cấp một sự phân tích ------- về các xu hướng thị trường hiện tại.",
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
      "The manager has already ------- the budget for the upcoming fiscal year.",
    questionVi: "Quản lý đã ------- ngân sách cho năm tài chính sắp tới.",
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
      "Please make sure that your signature is ------- at the bottom of the form.",
    questionVi:
      "Vui lòng đảm bảo rằng chữ ký của bạn ------- ở phía dưới biểu mẫu.",
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
      "The sales team will be awarded a bonus ------- they reach their targets.",
    questionVi:
      "Đội ngũ bán hàng sẽ được thưởng một khoản tiền thưởng ------- họ đạt được mục tiêu của mình.",
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
      "The legal advisor warned that several clauses in the agreement are -------.",
    questionVi:
      "Cố vấn pháp lý cảnh báo rằng một số điều khoản trong thỏa thuận là -------.",
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
      "The construction project was delayed due to ------- weather conditions.",
    questionVi: "Dự án xây dựng đã bị trì hoãn do điều kiện thời tiết -------.",
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
      "The internal audit will examine whether company resources are being used -------.",
    questionVi:
      "Cuộc kiểm toán nội bộ sẽ kiểm tra xem các nguồn lực của công ty có đang được sử dụng ------- hay không.",
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
      "The CEO emphasizes the importance of ------- a positive work environment.",
    questionVi:
      "CEO nhấn mạnh tầm quan trọng của việc ------- một môi trường làm việc tích cực.",
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
      "The company's success is ------- due to the hard work and dedication of its employees.",
    questionVi:
      "Thành công của công ty là ------- nhờ vào sự chăm chỉ và tận tụy của nhân viên.",
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
      "The HR director will be conducting interviews all day, ------- please hold all calls.",
    questionVi:
      "Giám đốc nhân sự sẽ thực hiện các cuộc phỏng vấn cả ngày, ------- vui lòng giữ tất cả các cuộc gọi.",
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
      "The newly implemented system is much more ------- than the previous one.",
    questionVi:
      "Hệ thống vừa được triển khai ------- hơn nhiều so với hệ thống trước đó.",
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
      "The project manager decided to ------- the tasks among the team members based on their skills.",
    questionVi:
      "Quản lý dự án đã quyết định ------- các nhiệm vụ giữa các thành viên nhóm dựa trên kỹ năng của họ.",
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
      "The marketing team must work together to create a ------- identity for the brand.",
    questionVi:
      "Đội ngũ marketing phải làm việc cùng nhau để tạo ra một danh tính ------- cho thương hiệu.",
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
      "The manager has requested that we ------- the client's proposal as soon as possible.",
    questionVi:
      "Quản lý đã yêu cầu chúng tôi ------- đề xuất của khách hàng càng sớm càng tốt.",
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
      "The company's reputation for ------- has attracted many top-tier job applicants.",
    questionVi:
      "Danh tiếng của công ty về sự ------- đã thu hút nhiều ứng viên xin việc hàng đầu.",
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
      "The project was finished ahead of schedule ------- the hard work of the entire team.",
    questionVi:
      "Dự án đã được hoàn thành trước thời hạn ------- sự làm việc chăm chỉ của toàn bộ nhóm.",
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
      "The supervisor was extremely ------- of the team's accomplishments this quarter.",
    questionVi:
      "Người giám sát cực kỳ ------- về những thành tựu của nhóm trong quý này.",
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
      "The new interns are expected to be ------- to the needs of our clients.",
    questionVi:
      "Các thực tập sinh mới được kỳ vọng phải ------- với các nhu cầu của khách hàng của chúng tôi.",
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
      "The administrative staff handles the ------- tasks such as filing and data entry.",
    questionVi:
      "Nhân viên hành chính xử lý các nhiệm vụ ------- như lưu trữ hồ sơ và nhập dữ liệu.",
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
      "The client asked for several ------- to be made to the architectural drawings.",
    questionVi:
      "Khách hàng đã yêu cầu một vài ------- được thực hiện đối với các bản vẽ kiến trúc.",
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
      "The CEO believes that current market conditions are ------- for expanding the business overseas.",
    questionVi:
      "CEO tin rằng điều kiện thị trường hiện tại là ------- để mở rộng kinh doanh ra nước ngoài.",
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
      "Employees are not allowed to use office equipment for personal tasks without -------.",
    questionVi:
      "Nhân viên không được phép sử dụng thiết bị văn phòng cho các nhiệm vụ cá nhân mà không có -------.",
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
      "The marketing director is known for her ------- approach to solving problems.",
    questionVi:
      "Giám đốc marketing nổi tiếng với cách tiếp cận ------- để giải quyết vấn đề.",
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
      "The consultant provided several ------- for improving the company's internal communication.",
    questionVi:
      "Nhà tư vấn đã cung cấp một vài ------- để cải thiện truyền thông nội bộ của công ty.",
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
      "The technician will examine the equipment to ensure it is functioning -------.",
    questionVi:
      "Kỹ thuật viên sẽ kiểm tra thiết bị để đảm bảo nó đang hoạt động -------.",
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
      "The team worked together ------- to complete the project before the deadline.",
    questionVi:
      "Nhóm đã làm việc cùng nhau ------- để hoàn thành dự án trước thời hạn.",
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
      "The financial department is in the process of ------- the budget for the next year.",
    questionVi:
      "Bộ phận tài chính đang trong quá trình ------- ngân sách cho năm tới.",
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
];

export default questions;
