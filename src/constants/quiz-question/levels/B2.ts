import { Question } from '../types';

export const questions: Question[] = [
    {
        questionEn: "If I ____ you, I ____ accept the offer.",
        questionVi: "Nếu tôi ____ là bạn, tôi ____ sẽ chấp nhận lời đề nghị đó.",
        options: [
      { option: "were / would", isCorrect: true },
      { option: "was / will", isCorrect: false },
      { option: "am / will", isCorrect: false },
      { option: "be / would", isCorrect: false }
    ],
        explanationVi: "Điều kiện loại 2: If + S + were, S + would + V.",
        category: "Second Conditional",
    },
    {
        questionEn: "The book ____ by the time I arrived.",
        questionVi: "Cuốn sách ____ đã được bán hết vào lúc tôi đến.",
        options: [
      { option: "had been sold", isCorrect: true },
      { option: "was sold", isCorrect: false },
      { option: "sold", isCorrect: false },
      { option: "has been sold", isCorrect: false }
    ],
        explanationVi: "Bị động quá khứ hoàn thành: had been V3.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "I wish I ____ harder for the exam apart from English.",
        questionVi:
            "Tôi ước gì mình ____ đã học tập chăm chỉ hơn cho kỳ thi ngoài môn tiếng Anh.",
        options: [
      { option: "had studied", isCorrect: true },
      { option: "studied", isCorrect: false },
      { option: "study", isCorrect: false },
      { option: "have studied", isCorrect: false }
    ],
        explanationVi: "Ước cho quá khứ: Wish + QKHT.",
        category: "Other",
    },
    {
        questionEn: "If it ____ yesterday, we would have gone out.",
        questionVi: "Nếu hôm qua trời ____ không mưa, chúng tôi đã đi chơi rồi.",
        options: [
      { option: "hadn't rained", isCorrect: true },
      { option: "didn't rain", isCorrect: false },
      { option: "weren't raining", isCorrect: false },
      { option: "hasn't rained", isCorrect: false }
    ],
        explanationVi: "Điều kiện loại 3: If + QKHT, S + would have V3.",
        category: "Conditional Type 3",
    },
    {
        questionEn: "She said she ____ working there since 2010.",
        questionVi: "Cô ấy nói là cô ấy ____ đã làm việc ở đó từ năm 2010.",
        options: [
      { option: "had been", isCorrect: true },
      { option: "has been", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "is", isCorrect: false }
    ],
        explanationVi: "Tường thuật: HTHTTD -> QKHTTD.",
        category: "Other",
    },
    {
        questionEn: "By next year, we ____ here for 20 years.",
        questionVi:
            "Đến sang năm, chúng tôi ____ sẽ đã sống ở đây được 20 năm rồi.",
        options: [
      { option: "will have lived", isCorrect: true },
      { option: "have lived", isCorrect: false },
      { option: "will live", isCorrect: false },
      { option: "live", isCorrect: false }
    ],
        explanationVi: "Tương lai hoàn thành: will have V3 + for + time.",
        category: "Future",
    },
    {
        questionEn: "This painting is believed ____ by Picasso.",
        questionVi: "Bức tranh này được tin là ____ đã được vẽ bởi Picasso.",
        options: [
      { option: "to have been painted", isCorrect: true },
      { option: "to be painted", isCorrect: false },
      { option: "painting", isCorrect: false },
      { option: "painted", isCorrect: false }
    ],
        explanationVi: "Bị động bị động cách: believed to have been V3.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "No sooner ____ I arrived than the train left.",
        questionVi: "Ngay khi tôi vừa mới ____ đến nơi thì đoàn tàu rời đi.",
        options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "was", isCorrect: false }
    ],
        explanationVi: "Cấu trúc đảo ngữ: No sooner + had + S + V3 + than...",
        category: "Other",
    },
    {
        questionEn: "Hardly ____ sat down when the phone rang.",
        questionVi: "Tôi ____ vừa mới ngồi xuống thì điện thoại reo.",
        options: [
      { option: "had I", isCorrect: true },
      { option: "did I", isCorrect: false },
      { option: "have I", isCorrect: false },
      { option: "was I", isCorrect: false }
    ],
        explanationVi: "Hardly + had + S + V3 + when...",
        category: "Other",
    },
    {
        questionEn: "Only when I call ____ you come.",
        questionVi: "Chỉ khi tôi gọi thì bạn mới ____ đến.",
        options: [
      { option: "will", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "are", isCorrect: false }
    ],
        explanationVi: "Đảo ngữ với Only when + clause + auxiliary + S + V.",
        category: "Other",
    },
    {
        questionEn: "Not until yesterday ____ the truth.",
        questionVi: "Phải mãi đến hôm qua tôi ____ mới biết sự thật.",
        options: [
      { option: "did I know", isCorrect: true },
      { option: "I knew", isCorrect: false },
      { option: "I know", isCorrect: false },
      { option: "had I known", isCorrect: false }
    ],
        explanationVi: "Not until + time/clause + did + S + V.",
        category: "Other",
    },
    {
        questionEn: "Never ____ such a beautiful sight.",
        questionVi: "Tôi ____ chưa bao giờ thấy cảnh tượng nào đẹp như thế này.",
        options: [
      { option: "have I seen", isCorrect: true },
      { option: "I have seen", isCorrect: false },
      { option: "did I see", isCorrect: false },
      { option: "seen I", isCorrect: false }
    ],
        explanationVi: "Đảo ngữ với Never: Never + aux + S + V.",
        category: "Other",
    },
    {
        questionEn: "Little ____ he know about the surprise.",
        questionVi: "Anh ta hầu như ____ chẳng biết gì về sự bất ngờ đó.",
        options: [
      { option: "did", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "had", isCorrect: false }
    ],
        explanationVi: "Đảo ngữ với Little: Little + did + S + V.",
        category: "Other",
    },
    {
        questionEn: "Had I known, I ____ helped you.",
        questionVi: "Nếu tôi đã biết chuyện, tôi ____ sẽ đã giúp bạn rồi.",
        options: [
      { option: "would have", isCorrect: true },
      { option: "will have", isCorrect: false },
      { option: "would", isCorrect: false },
      { option: "had", isCorrect: false }
    ],
        explanationVi:
            "Đảo ngữ điều kiện loại 3: Had + S + V3, S + would have V3.",
        category: "Other",
    },
    {
        questionEn: "Should you see him, ____ him to call me.",
        questionVi: "Nếu bạn có gặp anh ấy, hãy ____ bảo anh ấy gọi cho tôi nhé.",
        options: [
      { option: "tell", isCorrect: true },
      { option: "told", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "to tell", isCorrect: false }
    ],
        explanationVi: "Đảo ngữ điều kiện loại 1: Should + S + V, mệnh lệnh.",
        category: "Should / Ought to",
    },
    {
        questionEn: "Were I you, I ____ go there.",
        questionVi: "Nếu tôi là bạn, tôi ____ sẽ không đến đó.",
        options: [
      { option: "wouldn't", isCorrect: true },
      { option: "won't", isCorrect: false },
      { option: "don't", isCorrect: false },
      { option: "didn't", isCorrect: false }
    ],
        explanationVi: "Đảo ngữ điều kiện loại 2: Were + S + ..., S + would + V.",
        category: "Other",
    },
    {
        questionEn: "It is essential that he ____ here on time.",
        questionVi: "Điều cốt yếu là anh ấy ____ phải có mặt ở đây đúng giờ.",
        options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false }
    ],
        explanationVi:
            "Thức giả định (Subjunctive): It is essential that S + (should) V nguyên thể.",
        category: "Other",
    },
    {
        questionEn: "I suggest that she ____ harder.",
        questionVi: "Tôi đề nghị cô ấy ____ nên học tập chăm chỉ hơn.",
        options: [
      { option: "study", isCorrect: true },
      { option: "studies", isCorrect: false },
      { option: "studied", isCorrect: false },
      { option: "studying", isCorrect: false }
    ],
        explanationVi: "Subjunctive sau suggest: S + (should) V nguyên thể.",
        category: "Other",
    },
    {
        questionEn: "The teacher demanded that everyone ____ quiet.",
        questionVi: "Giáo viên yêu cầu mọi người ____ phải giữ trật tự.",
        options: [
      { option: "keep", isCorrect: true },
      { option: "keeps", isCorrect: false },
      { option: "kept", isCorrect: false },
      { option: "keeping", isCorrect: false }
    ],
        explanationVi: "Subjunctive sau demand.",
        category: "Other",
    },
    {
        questionEn: "God ____ the Queen!",
        questionVi: "Chúa ____ phù hộ Nữ hoàng!",
        options: [
      { option: "save", isCorrect: true },
      { option: "saves", isCorrect: false },
      { option: "saved", isCorrect: false },
      { option: "saving", isCorrect: false }
    ],
        explanationVi: "Câu cầu khiến (Subjunctive): God save...",
        category: "Other",
    },
    {
        questionEn: "Whatever ____, I will always love you.",
        questionVi: "Dù có chuyện gì ____ xảy ra đi nữa, tôi sẽ luôn yêu em.",
        options: [
      { option: "happens", isCorrect: true },
      { option: "happen", isCorrect: false },
      { option: "happened", isCorrect: false },
      { option: "happening", isCorrect: false }
    ],
        explanationVi: "Whatever happens (HTĐ).",
        category: "Other",
    },
    {
        questionEn: "However rich he ____, he isn't happy.",
        questionVi:
            "Dù anh ta có giàu ____ đến đâu, anh ta cũng không thấy hạnh phúc.",
        options: [
      { option: "is", isCorrect: true },
      { option: "be", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false }
    ],
        explanationVi: "However + adj + S + V.",
        category: "Other",
    },
    {
        questionEn: "No matter how ____ you try, you can't lift it.",
        questionVi:
            "Dù bạn có cố gắng ____ đến thế nào, bạn cũng không thể nhấc nó lên.",
        options: [
      { option: "hard", isCorrect: true },
      { option: "hardly", isCorrect: false },
      { option: "hardness", isCorrect: false },
      { option: "harder", isCorrect: false }
    ],
        explanationVi: "No matter how + adj/adv.",
        category: "Other",
    },
    {
        questionEn: "Unless you ____ been there, you wouldn't understand.",
        questionVi:
            "Trừ khi bạn ____ đã từng ở đó, nếu không bạn sẽ không hiểu được đâu.",
        options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "was", isCorrect: false }
    ],
        explanationVi: "Điều kiện loại 3 (rút gọn): Unless = If + not.",
        category: "Conditional Type 3",
    },
    {
        questionEn: "Is he the man ____ you were talking about?",
        questionVi: "Đó có phải là người đàn ông ____ mà bạn đang nói tới không?",
        options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false }
    ],
        explanationVi: "Đại từ quan hệ làm tân ngữ cho giới từ: whom.",
        category: "Other",
    },
    {
        questionEn: "The car ____ he bought is very expensive.",
        questionVi: "Chiếc xe ____ anh ấy mua rất đắt đỏ.",
        options: [
      { option: "which", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false }
    ],
        explanationVi: "Đại từ quan hệ chỉ vật làm tân ngữ.",
        category: "Other",
    },
    {
        questionEn: "The hotel ____ we stayed was very clean.",
        questionVi: "Khách sạn ____ nơi chúng tôi ở rất sạch sẽ.",
        options: [
      { option: "where", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false }
    ],
        explanationVi: "Trạng từ quan hệ chỉ nơi chốn.",
        category: "Relative Clauses",
    },
    {
        questionEn: "2010 was the year ____ I graduated.",
        questionVi: "Năm 2010 là năm ____ tôi tốt nghiệp.",
        options: [
      { option: "when", isCorrect: true },
      { option: "where", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "who", isCorrect: false }
    ],
        explanationVi: "Trạng từ quan hệ chỉ thời gian.",
        category: "Relative Clauses",
    },
    {
        questionEn: "I don't know the reason ____ she left.",
        questionVi: "Tôi không biết lý do ____ cô ấy rời đi.",
        options: [
      { option: "why", isCorrect: true },
      { option: "where", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "which", isCorrect: false }
    ],
        explanationVi: "Trạng từ quan hệ chỉ lý do.",
        category: "Relative Clauses",
    },
    {
        questionEn: "Whoever ____ arrives first wins.",
        questionVi: "Bất kỳ ai ____ đến đầu tiên sẽ giành chiến thắng.",
        options: [
      { option: "", isCorrect: true },
      { option: "he", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "they", isCorrect: false }
    ],
        explanationVi: "Whoever làm chủ ngữ cho mệnh đề.",
        category: "Other",
    },
    {
        questionEn: "He asked me what ____.",
        questionVi: "Anh ấy hỏi tôi ____ đó là cái gì.",
        options: [
      { option: "it was", isCorrect: true },
      { option: "was it", isCorrect: false },
      { option: "it is", isCorrect: false },
      { option: "is it", isCorrect: false }
    ],
        explanationVi: "Câu hỏi gián tiếp: từ để hỏi + S + V(lùi thì).",
        category: "Other",
    },
    {
        questionEn: "She wonders if ____ rain today.",
        questionVi: "Cô ấy tự hỏi liệu hôm nay trời ____ có mưa không.",
        options: [
      { option: "it will", isCorrect: true },
      { option: "will it", isCorrect: false },
      { option: "it would", isCorrect: false },
      { option: "would it", isCorrect: false }
    ],
        explanationVi: "Câu hỏi gián tiếp Yes/No.",
        category: "Other",
    },
    {
        questionEn: "I'd rather you ____ talk so loud.",
        questionVi: "Tôi muốn bạn ____ đừng nói chuyện quá to như thế.",
        options: [
      { option: "didn't", isCorrect: true },
      { option: "don't", isCorrect: false },
      { option: "won't", isCorrect: false },
      { option: "not", isCorrect: false }
    ],
        explanationVi: "Would rather + S + V(quá khứ).",
        category: "Other",
    },
    {
        questionEn: "It is high time you ____ a job.",
        questionVi: "Đã đến lúc bạn ____ phải tìm một công việc rồi đấy.",
        options: [
      { option: "found", isCorrect: true },
      { option: "find", isCorrect: false },
      { option: "finding", isCorrect: false },
      { option: "to find", isCorrect: false }
    ],
        explanationVi: "It is (high) time + S + V(quá khứ).",
        category: "Other",
    },
    {
        questionEn: "If only I ____ more money now.",
        questionVi: "Giá mà bây giờ tôi ____ có nhiều tiền hơn.",
        options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "was having", isCorrect: false }
    ],
        explanationVi: "If only cho điều ước ở hiện tại.",
        category: "Other",
    },
    {
        questionEn: "He looks as though he ____ seen a ghost.",
        questionVi: "Anh ta trông cứ như thể ____ đã gặp ma vậy.",
        options: [
      { option: "had", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false }
    ],
        explanationVi: "As if / As though + QKHT (giả định quá khứ).",
        category: "Other",
    },
    {
        questionEn: "I'm tired. I ____ working all day.",
        questionVi: "Tôi mệt. Tôi ____ đã làm việc cả ngày rồi.",
        options: [
      { option: "have been", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "had been", isCorrect: false }
    ],
        explanationVi: "Hiện tại hoàn thành tiếp diễn: nhấn mạnh quá trình.",
        category: "Present Perfect",
    },
    {
        questionEn: "When I arrived, they ____ for 2 hours.",
        questionVi: "Khi tôi đến, họ ____ đã chờ được 2 tiếng rồi.",
        options: [
      { option: "had been waiting", isCorrect: true },
      { option: "waited", isCorrect: false },
      { option: "were waiting", isCorrect: false },
      { option: "have been waiting", isCorrect: false }
    ],
        explanationVi: "Quá khứ hoàn thành tiếp diễn xẩy ra trước 1 mốc quá khứ.",
        category: "Past Perfect Continuous",
    },
    {
        questionEn: "By the end of this month, I ____ for this company for 10 years.",
        questionVi:
            "Đến cuối tháng này, tôi ____ sẽ làm việc cho công ty này được tròn 10 năm.",
        options: [
      { option: "will have been working", isCorrect: true },
      { option: "will work", isCorrect: false },
      { option: "have worked", isCorrect: false },
      { option: "will be working", isCorrect: false }
    ],
        explanationVi: "Tương lai hoàn thành tiếp diễn.",
        category: "Future Perfect Continuous",
    },
    {
        questionEn: "I'm looking forward to ____ you again.",
        questionVi: "Tôi rất mong được ____ gặp lại bạn.",
        options: [
      { option: "seeing", isCorrect: true },
      { option: "see", isCorrect: false },
      { option: "to see", isCorrect: false },
      { option: "seen", isCorrect: false }
    ],
        explanationVi: "Look forward to + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "It's no use ____ for him.",
        questionVi: "Thật vô ích khi ____ phải chờ đợi anh ta.",
        options: [
      { option: "waiting", isCorrect: true },
      { option: "to wait", isCorrect: false },
      { option: "wait", isCorrect: false },
      { option: "waited", isCorrect: false }
    ],
        explanationVi: "It's no use + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I remember ____ off the lights before I left.",
        questionVi: "Tôi nhớ là ____ đã tắt đèn trước khi đi rồi.",
        options: [
      { option: "turning", isCorrect: true },
      { option: "to turn", isCorrect: false },
      { option: "turn", isCorrect: false },
      { option: "turned", isCorrect: false }
    ],
        explanationVi: "Remember + V-ing: nhớ đã làm gì.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "Please remember ____ the lights when you leave.",
        questionVi: "Hãy nhớ ____ tắt đèn khi bạn rời đi nhé.",
        options: [
      { option: "to turn", isCorrect: true },
      { option: "turning", isCorrect: false },
      { option: "turn", isCorrect: false },
      { option: "turned", isCorrect: false }
    ],
        explanationVi: "Remember + to V: nhớ phải làm gì.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "I tried ____ the door, but it was locked.",
        questionVi: "Tôi đã thử ____ mở cửa, nhưng nó đã bị khóa.",
        options: [
      { option: "opening", isCorrect: true },
      { option: "to open", isCorrect: false },
      { option: "open", isCorrect: false },
      { option: "opened", isCorrect: false }
    ],
        explanationVi: "Try V-ing: thử làm việc gì đó.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He tried ____ the heavy box, but he couldn't.",
        questionVi:
            "Anh ấy đã cố gắng ____ bê chiếc hộp nặng đó, nhưng không thể.",
        options: [
      { option: "to lift", isCorrect: true },
      { option: "lifting", isCorrect: false },
      { option: "lift", isCorrect: false },
      { option: "lifted", isCorrect: false }
    ],
        explanationVi: "Try to V: cố gắng làm việc gì đó.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "She stopped ____ a rest.",
        questionVi: "Cô ấy đã dừng lại để ____ nghỉ ngơi.",
        options: [
      { option: "to have", isCorrect: true },
      { option: "having", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "had", isCorrect: false }
    ],
        explanationVi: "Stop to V: dừng lại để làm gì.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "He stopped ____ 2 years ago.",
        questionVi: "Anh ấy đã bỏ ____ cách đây 2 năm.",
        options: [
      { option: "smoking", isCorrect: true },
      { option: "to smoke", isCorrect: false },
      { option: "smoke", isCorrect: false },
      { option: "smoked", isCorrect: false }
    ],
        explanationVi: "Stop V-ing: dừng hẳn việc gì đó.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I'll never forget ____ her for the first time.",
        questionVi: "Tôi sẽ không bao giờ quên ____ lần đầu tiên gặp cô ấy.",
        options: [
      { option: "meeting", isCorrect: true },
      { option: "to meet", isCorrect: false },
      { option: "meet", isCorrect: false },
      { option: "met", isCorrect: false }
    ],
        explanationVi: "Forget V-ing: quên đã làm gì.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "Don't forget ____ the door.",
        questionVi: "Đừng quên ____ khóa cửa nhé.",
        options: [
      { option: "to lock", isCorrect: true },
      { option: "locking", isCorrect: false },
      { option: "lock", isCorrect: false },
      { option: "locked", isCorrect: false }
    ],
        explanationVi: "Forget to V: quên phải làm gì.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "I am used to ____ in the city.",
        questionVi: "Tôi đã quen ____ với việc sống ở thành phố rồi.",
        options: [
      { option: "living", isCorrect: true },
      { option: "live", isCorrect: false },
      { option: "to live", isCorrect: false },
      { option: "lived", isCorrect: false }
    ],
        explanationVi: "Be used to + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He used to ____ here.",
        questionVi: "Anh ấy đã từng ____ sống ở đây.",
        options: [
      { option: "live", isCorrect: true },
      { option: "living", isCorrect: false },
      { option: "to live", isCorrect: false },
      { option: "lived", isCorrect: false }
    ],
        explanationVi: "Used to + V.",
        category: "Other",
    },
    {
        questionEn: "The bridge is ____ built.",
        questionVi: "Cây cầu ____ đang được xây dựng.",
        options: [
      { option: "being", isCorrect: true },
      { option: "been", isCorrect: false },
      { option: "be", isCorrect: false },
      { option: "building", isCorrect: false }
    ],
        explanationVi: "Bị động tiếp diễn: is being V3.",
        category: "Passive Voice (Present Continuous)",
    },
    {
        questionEn: "The work ____ finished by next week.",
        questionVi: "Công việc ____ sẽ được hoàn thành vào tuần tới.",
        options: [
      { option: "will be", isCorrect: true },
      { option: "is being", isCorrect: false },
      { option: "has been", isCorrect: false },
      { option: "was", isCorrect: false }
    ],
        explanationVi: "Bị động tương lai đơn.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "He gets his car ____ every week.",
        questionVi: "Anh ấy ____ cho người rửa xe mỗi tuần.",
        options: [
      { option: "washed", isCorrect: true },
      { option: "wash", isCorrect: false },
      { option: "washing", isCorrect: false },
      { option: "to wash", isCorrect: false }
    ],
        explanationVi: "Get sth done.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "I had the mechanic ____ my car.",
        questionVi: "Tôi đã nhờ thợ cơ khí ____ sửa xe của mình.",
        options: [
      { option: "repair", isCorrect: true },
      { option: "to repair", isCorrect: false },
      { option: "repairing", isCorrect: false },
      { option: "repaired", isCorrect: false }
    ],
        explanationVi: "Have sb V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "She helped me ____ the work.",
        questionVi: "Cô ấy đã giúp tôi ____ hoàn thành công việc.",
        options: [
      { option: "do", isCorrect: true },
      { option: "done", isCorrect: false },
      { option: "doing", isCorrect: false },
      { option: "does", isCorrect: false }
    ],
        explanationVi: "Help sb (to) V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "I made him ____ everything.",
        questionVi: "Tôi đã bắt anh ta ____ phải kể hết mọi chuyện.",
        options: [
      { option: "tell", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false }
    ],
        explanationVi: "Make sb V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "He was made ____ the truth.",
        questionVi: "Anh ta ____ bị bắt phải nói ra sự thật.",
        options: [
      { option: "to tell", isCorrect: true },
      { option: "tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false }
    ],
        explanationVi: "Be made to V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "Let me ____.",
        questionVi: "Hãy để tôi ____ đi.",
        options: [
      { option: "go", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "going", isCorrect: false },
      { option: "gone", isCorrect: false }
    ],
        explanationVi: "Let sb V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "I am interested ____ learning English.",
        questionVi: "Tôi quan tâm ____ đến việc học tiếng Anh.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "about", isCorrect: false }
    ],
        explanationVi: "Interested in.",
        category: "Other",
    },
    {
        questionEn: "She is good ____ Math.",
        questionVi: "Cô ấy giỏi ____ môn Toán.",
        options: [
      { option: "at", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "for", isCorrect: false }
    ],
        explanationVi: "Good at.",
        category: "Other",
    },
    {
        questionEn: "He is afraid ____ dogs.",
        questionVi: "Anh ấy sợ ____ chó.",
        options: [
      { option: "of", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "on", isCorrect: false }
    ],
        explanationVi: "Afraid of.",
        category: "Other",
    },
    {
        questionEn: "I am bored ____ this film.",
        questionVi: "Tôi thấy chán ____ bộ phim này rồi.",
        options: [
      { option: "with", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "of", isCorrect: false },
      { option: "in", isCorrect: false }
    ],
        explanationVi: "Bored with.",
        category: "Other",
    },
    {
        questionEn: "This is different ____ that one.",
        questionVi: "Cái này khác ____ với cái kia.",
        options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "than", isCorrect: false }
    ],
        explanationVi: "Different from.",
        category: "Other",
    },
    {
        questionEn: "I am familiar ____ this place.",
        questionVi: "Tôi ____ đã quen thuộc với nơi này rồi.",
        options: [
      { option: "with", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false }
    ],
        explanationVi: "Familiar with.",
        category: "Other",
    },
    {
        questionEn: "He is responsible ____ the accident.",
        questionVi: "Anh ấy ____ phải chịu trách nhiệm về vụ tai nạn.",
        options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false }
    ],
        explanationVi: "Responsible for.",
        category: "Other",
    },
    {
        questionEn: "I am proud ____ you.",
        questionVi: "Tôi tự hào ____ về bạn.",
        options: [
      { option: "of", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false }
    ],
        explanationVi: "Proud of.",
        category: "Other",
    },
    {
        questionEn: "She is capable ____ doing it.",
        questionVi: "Cô ấy có khả năng ____ làm việc đó.",
        options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false }
    ],
        explanationVi: "Capable of.",
        category: "Other",
    },
    {
        questionEn: "Are you aware ____ the situation?",
        questionVi: "Bạn có nhận thức được ____ tình hình không?",
        options: [
      { option: "of", isCorrect: true },
      { option: "about", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "in", isCorrect: false }
    ],
        explanationVi: "Aware of.",
        category: "Other",
    },
    {
        questionEn: "This book belongs ____ her.",
        questionVi: "Cuốn sách này thuộc ____ về cô ấy.",
        options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false }
    ],
        explanationVi: "Belong to.",
        category: "Other",
    },
    {
        questionEn: "He apologized ____ the mistake.",
        questionVi: "Anh ấy đã xin lỗi ____ vì sai sót đó.",
        options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "about", isCorrect: false },
      { option: "with", isCorrect: false }
    ],
        explanationVi: "Apologize for.",
        category: "Other",
    },
    {
        questionEn: "I congratulated her ____ her success.",
        questionVi: "Tôi đã chúc mừng cô ấy ____ vì sự thành công của cô ấy.",
        options: [
      { option: "on", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false }
    ],
        explanationVi: "Congratulate on.",
        category: "Other",
    },
    {
        questionEn: "He prevents me ____ going out.",
        questionVi: "Anh ấy ngăn cản tôi ____ việc đi ra ngoài.",
        options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false }
    ],
        explanationVi: "Prevent sb from V-ing.",
        category: "Other",
    },
    {
        questionEn: "I suffer ____ headaches.",
        questionVi: "Tôi bị ____ đau đầu.",
        options: [
      { option: "from", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
      { option: "about", isCorrect: false }
    ],
        explanationVi: "Suffer from.",
        category: "Other",
    },
    {
        questionEn: "She depends ____ her parents.",
        questionVi: "Cô ấy phụ thuộc ____ vào bố mẹ mình.",
        options: [
      { option: "on", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "for", isCorrect: false }
    ],
        explanationVi: "Depend on.",
        category: "Other",
    },
    {
        questionEn: "He succeeded ____ passing the exam.",
        questionVi: "Anh ấy đã thành công ____ trong việc thi đỗ.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false }
    ],
        explanationVi: "Succeed in V-ing.",
        category: "Other",
    },
    {
        questionEn: "I am used to ____ up late.",
        questionVi: "Tôi đã quen ____ với việc thức khuya.",
        options: [
      { option: "staying", isCorrect: true },
      { option: "stay", isCorrect: false },
      { option: "to stay", isCorrect: false },
      { option: "stayed", isCorrect: false }
    ],
        explanationVi: "Be used to + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He used to ____ a lot.",
        questionVi: "Anh ấy đã từng ____ uống rượu nhiều.",
        options: [
      { option: "drink", isCorrect: true },
      { option: "drinking", isCorrect: false },
      { option: "to drink", isCorrect: false },
      { option: "drank", isCorrect: false }
    ],
        explanationVi: "Used to + V.",
        category: "Other",
    },
    {
        questionEn: "It's no use ____ about it more.",
        questionVi: "Thật vô ích khi cứ ____ lo lắng thêm về việc đó.",
        options: [
      { option: "worrying", isCorrect: true },
      { option: "to worry", isCorrect: false },
      { option: "worry", isCorrect: false },
      { option: "worried", isCorrect: false }
    ],
        explanationVi: "It's no use + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I look forward to ____ from you soon.",
        questionVi: "Tôi rất mong sớm ____ nhận được tin từ bạn.",
        options: [
      { option: "hearing", isCorrect: true },
      { option: "hear", isCorrect: false },
      { option: "to hear", isCorrect: false },
      { option: "heard", isCorrect: false }
    ],
        explanationVi: "Look forward to + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "She suggested ____ to the park.",
        questionVi: "Cô ấy đã gợi ý ____ đi công viên.",
        options: [
      { option: "going", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: false }
    ],
        explanationVi: "Suggest + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I'd rather ____ home.",
        questionVi: "Tôi muốn ____ về nhà hơn.",
        options: [
      { option: "stay", isCorrect: true },
      { option: "to stay", isCorrect: false },
      { option: "staying", isCorrect: false },
      { option: "stayed", isCorrect: false }
    ],
        explanationVi: "Would rather + V.",
        category: "Other",
    },
    {
        questionEn: "I'd rather you ____ talk during the movie.",
        questionVi: "Tôi muốn bạn ____ đừng nói chuyện trong suốt bộ phim.",
        options: [
      { option: "didn't", isCorrect: true },
      { option: "don't", isCorrect: false },
      { option: "won't", isCorrect: false },
      { option: "not", isCorrect: false }
    ],
        explanationVi: "Would rather + S + V(quá khứ).",
        category: "Other",
    },
    {
        questionEn: "It is time we ____.",
        questionVi: "Đã đến lúc chúng ta ____ phải đi rồi.",
        options: [
      { option: "left", isCorrect: true },
      { option: "leave", isCorrect: false },
      { option: "to leave", isCorrect: false },
      { option: "leaving", isCorrect: false }
    ],
        explanationVi: "It is time + S + V(quá khứ).",
        category: "Other",
    },
    {
        questionEn: "You'd better ____ the truth.",
        questionVi: "Tốt hơn là bạn ____ nên nói ra sự thật.",
        options: [
      { option: "tell", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "telling", isCorrect: false },
      { option: "told", isCorrect: false }
    ],
        explanationVi: "Had better + V.",
        category: "Other",
    },
    {
        questionEn: "He admitted ____ the secret.",
        questionVi: "Anh ấy đã thừa nhận ____ việc làm lộ bí mật.",
        options: [
      { option: "telling", isCorrect: true },
      { option: "to tell", isCorrect: false },
      { option: "tell", isCorrect: false },
      { option: "told", isCorrect: false }
    ],
        explanationVi: "Admit + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I avoid ____ to him.",
        questionVi: "Tôi tránh ____ việc nói chuyện với anh ta.",
        options: [
      { option: "talking", isCorrect: true },
      { option: "to talk", isCorrect: false },
      { option: "talk", isCorrect: false },
      { option: "talked", isCorrect: false }
    ],
        explanationVi: "Avoid + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "She keeps ____.",
        questionVi: "Cô ấy cứ ____ khóc mãi.",
        options: [
      { option: "crying", isCorrect: true },
      { option: "to cry", isCorrect: false },
      { option: "cry", isCorrect: false },
      { option: "cried", isCorrect: false }
    ],
        explanationVi: "Keep + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He denied ____ the window.",
        questionVi: "Anh ta đã phủ nhận ____ việc làm vỡ cửa sổ.",
        options: [
      { option: "breaking", isCorrect: true },
      { option: "to break", isCorrect: false },
      { option: "break", isCorrect: false },
      { option: "broken", isCorrect: false }
    ],
        explanationVi: "Deny + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I postpone ____ the meeting.",
        questionVi: "Tôi hoãn ____ cuộc họp lại.",
        options: [
      { option: "holding", isCorrect: true },
      { option: "to hold", isCorrect: false },
      { option: "hold", isCorrect: false },
      { option: "held", isCorrect: false }
    ],
        explanationVi: "Postpone + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "She finished ____ her homework.",
        questionVi: "Cô ấy đã làm xong ____ bài tập về nhà.",
        options: [
      { option: "doing", isCorrect: true },
      { option: "to do", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "done", isCorrect: false }
    ],
        explanationVi: "Finish + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I can't imagine ____ there.",
        questionVi: "Tôi không thể tưởng tượng được ____ việc sống ở đó.",
        options: [
      { option: "living", isCorrect: true },
      { option: "to live", isCorrect: false },
      { option: "live", isCorrect: false },
      { option: "lived", isCorrect: false }
    ],
        explanationVi: "Imagine + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He practiced ____ the guitar.",
        questionVi: "Anh ấy đã luyện tập ____ chơi guitar.",
        options: [
      { option: "playing", isCorrect: true },
      { option: "to play", isCorrect: false },
      { option: "play", isCorrect: false },
      { option: "played", isCorrect: false }
    ],
        explanationVi: "Practice + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "We enjoy ____ football.",
        questionVi: "Chúng tôi thích ____ chơi bóng đá.",
        options: [
      { option: "playing", isCorrect: true },
      { option: "to play", isCorrect: false },
      { option: "play", isCorrect: false },
      { option: "played", isCorrect: false }
    ],
        explanationVi: "Enjoy + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "Would you mind ____ the door?",
        questionVi: "Bạn có phiền ____ về việc đóng cửa không?",
        options: [
      { option: "closing", isCorrect: true },
      { option: "to close", isCorrect: false },
      { option: "close", isCorrect: false },
      { option: "closed", isCorrect: false }
    ],
        explanationVi: "Mind + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I don't feel like ____ out.",
        questionVi: "Tôi không cảm thấy muốn ____ đi chơi.",
        options: [
      { option: "going", isCorrect: true },
      { option: "to go", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: false }
    ],
        explanationVi: "Feel like + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "He risked ____ his job.",
        questionVi: "Anh ấy đã mạo hiểm ____ công việc của mình.",
        options: [
      { option: "losing", isCorrect: true },
      { option: "to lose", isCorrect: false },
      { option: "lose", isCorrect: false },
      { option: "lost", isCorrect: false }
    ],
        explanationVi: "Risk + V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "I can't resist ____ chocolate.",
        questionVi: "Tôi không thể cưỡng lại được ____ việc ăn sô-cô-la.",
        options: [
      { option: "eating", isCorrect: true },
      { option: "to eat", isCorrect: false },
      { option: "eat", isCorrect: false },
      { option: "ate", isCorrect: false }
    ],
        explanationVi: "Resist + V-ing.",
        category: "Gerunds (V-ing)",
    },
];

export default questions;
