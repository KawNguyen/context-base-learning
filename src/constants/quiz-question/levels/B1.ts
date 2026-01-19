import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "B1-0001",
    topicId: "present-perfect",
    questionType: "grammar",
    questionEn: "I _____ London since 1990.",
    questionVi: "Tôi _____ ở London từ năm 1990.",
    options: [
      { option: "have lived", isCorrect: true },
      { option: "lived", isCorrect: false },
      { option: "live", isCorrect: false },
      { option: "am living", isCorrect: false },
    ],
    explanationVi:
      "Hiện tại hoàn thành được dùng với 'since' để chỉ hành động bắt đầu trong quá khứ và kéo dài đến hiện tại. Dấu hiệu: 'since' + mốc thời gian (1990).",
    category: "Present Perfect",
  },
  {
    id: "B1-0002",
    questionEn: "By the time we got to the cinema, the movie _____.",
    questionVi: "Vào lúc chúng tôi đến rạp chiếu phim, bộ phim _____.",
    options: [
      { option: "started", isCorrect: false },
      { option: "starts", isCorrect: false },
      { option: "had started", isCorrect: true },
      { option: "has started", isCorrect: false },
    ],
    explanationVi:
      "Bộ phim đã bắt đầu TRƯỚC KHI chúng tôi đến (hành động quá khứ xảy ra trước 1 hành động khác) -> thì Quá khứ hoàn thành.",
    category: "Past Perfect",
  },
  {
    id: "B1-0003",
    questionEn: "Don't call me at 8. I _____ dinner.",
    questionVi: "Đừng gọi cho tôi lúc 8 giờ. Tôi _____ bữa tối.",
    options: [
      { option: "will eat", isCorrect: false },
      { option: "am eating", isCorrect: false },
      { option: "will be eating", isCorrect: true },
      { option: "ate", isCorrect: false },
    ],
    explanationVi:
      "Hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai -> thì Tương lai tiếp diễn.",
    category: "Future Continuous",
  },
  {
    id: "B1-0004",
    questionEn: "If you mix red and blue, you _____ purple.",
    questionVi: "Nếu bạn trộn màu đỏ và xanh dương, bạn _____ màu tím.",
    options: [
      { option: "get", isCorrect: true },
      { option: "got", isCorrect: false },
      { option: "will get", isCorrect: false },
      { option: "getting", isCorrect: false },
    ],
    explanationVi:
      "Sự thật hiển nhiên tương ứng với Câu điều kiện loại 0: thì Hiện tại đơn ở cả hai mệnh đề.",
    category: "Zero Conditional",
  },
  {
    id: "B1-0005",
    questionEn: "If he _____, we will go without him.",
    questionVi: "Nếu anh ấy _____, chúng tôi sẽ đi mà không có anh ấy.",
    options: [
      { option: "don't come", isCorrect: false },
      { option: "doesn't come", isCorrect: true },
      { option: "didn't come", isCorrect: false },
      { option: "won't come", isCorrect: false },
    ],
    explanationVi: "Câu điều kiện loại 1: Mệnh đề If sử dụng thì Hiện tại đơn.",
    category: "First Conditional",
  },
  {
    id: "B1-0006",
    topicId: "passive-present",
    questionType: "structure",
    questionEn: "English _____ in many countries.",
    questionVi: "Tiếng Anh _____ ở nhiều quốc gia.",
    options: [
      { option: "speak", isCorrect: false },
      { option: "speaks", isCorrect: false },
      { option: "is spoken", isCorrect: true },
      { option: "spoken", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng câu bị động (Passive Voice) vì chủ ngữ 'English' không thể thực hiện hành động 'speak'. Cấu trúc: be + V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B1-0007",
    questionEn: "She _____ written three books.",
    questionVi: "Cô ấy _____ viết được ba cuốn sách.",
    options: [
      { option: "has", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "Hiện tại hoàn thành: S + has + V3.",
    category: "Present Perfect",
  },
  {
    id: "B1-0008",
    questionEn: "They _____ arrived by the time we got there.",
    questionVi: "Họ _____ đã đến vào lúc chúng tôi tới đó.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
    ],
    explanationVi:
      "Quá khứ hoàn thành diễn tả hành động xảy ra trước hành động khác trong quá khứ.",
    category: "Past Perfect",
  },
  {
    id: "B1-0009",
    questionEn: "He said that he _____ the film before.",
    questionVi: "Anh ấy nói rằng anh ấy _____ đã xem bộ phim đó trước đây rồi.",
    options: [
      { option: "had seen", isCorrect: true },
      { option: "saw", isCorrect: false },
      { option: "has seen", isCorrect: false },
      { option: "sees", isCorrect: false },
    ],
    explanationVi: "Câu tường thuật lùi thì: QKĐ/HTHT -> QKHT.",
    category: "Other",
  },
  {
    id: "B1-0010",
    questionEn: "If I _____ you, I would study harder.",
    questionVi: "Nếu tôi _____ là bạn, tôi sẽ học hành chăm chỉ hơn.",
    options: [
      { option: "were", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "be", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 2 (giả định trái ngược hiện tại): 'were' dùng cho mọi ngôi.",
    category: "Second Conditional",
  },
  {
    id: "B1-0011",
    questionEn: "She asked me if I _____ swim.",
    questionVi: "Cô ấy hỏi tôi liệu tôi _____ có biết bơi không.",
    options: [
      { option: "could", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "Tường thuật câu hỏi Yes/No: if + S + V(lùi thì).",
    category: "Other",
  },
  {
    id: "B1-0012",
    questionEn: "The house _____ built in 1890.",
    questionVi: "Ngôi nhà _____ được xây dựng vào năm 1890.",
    options: [
      { option: "was", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "has been", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "Bị động quá khứ đơn (có thời gian xác định).",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B1-0013",
    questionEn: "I have _____ finished my work.",
    questionVi: "Tôi _____ vừa mới hoàn thành công việc.",
    options: [
      { option: "just", isCorrect: true },
      { option: "yet", isCorrect: false },
      { option: "ever", isCorrect: false },
      { option: "fail", isCorrect: false },
    ],
    explanationVi: "Trạng từ 'just' (vừa mới) dùng trong thì hoàn thành.",
    category: "Present Perfect",
  },
  {
    id: "B1-0014",
    questionEn: "Have you _____ eaten frogs?",
    questionVi: "Bạn đã _____ từng ăn thịt ếch chưa?",
    options: [
      { option: "ever", isCorrect: true },
      { option: "never", isCorrect: false },
      { option: "yet", isCorrect: false },
      { option: "always", isCorrect: false },
    ],
    explanationVi: "Dùng 'ever' trong câu hỏi trải nghiệm.",
    category: "Present Perfect",
  },
  {
    id: "B1-0015",
    questionEn: "We _____ to the cinema twice this month.",
    questionVi: "Chúng tôi _____ đã đi xem phim hai lần trong tháng này.",
    options: [
      { option: "have been", isCorrect: true },
      { option: "went", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "are going", isCorrect: false },
    ],
    explanationVi:
      "Hành động lặp lại nhiều lần trong khoảng thời gian chưa kết thúc.",
    category: "Present Perfect",
  },
  {
    id: "B1-0016",
    questionEn: "After he _____ his homework, he went to bed.",
    questionVi: "Sau khi anh ấy _____ làm xong bài tập về nhà, anh ấy đi ngủ.",
    options: [
      { option: "had finished", isCorrect: true },
      { option: "finished", isCorrect: false },
      { option: "has finished", isCorrect: false },
      { option: "finishes", isCorrect: false },
    ],
    explanationVi: "Hành động xảy ra xong (QKHT) trước hành động khác (QKĐ).",
    category: "Past Perfect",
  },
  {
    id: "B1-0017",
    questionEn: "She told me she _____ help me the next day.",
    questionVi: "Cô ấy bảo tôi là cô ấy _____ sẽ giúp tôi vào ngày hôm sau.",
    options: [
      { option: "would", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "Tường thuật: will -> would, tomorrow -> the next day.",
    category: "Other",
  },
  {
    id: "B1-0018",
    questionEn: "When I arrived, the train _____.",
    questionVi: "Khi tôi đến, đoàn tàu _____ đã rời đi rồi.",
    options: [
      { option: "had left", isCorrect: true },
      { option: "left", isCorrect: false },
      { option: "has left", isCorrect: false },
      { option: "leaves", isCorrect: false },
    ],
    explanationVi: "Tàu rời đi trước khi tôi đến (QKHT).",
    category: "Past Perfect",
  },
  {
    id: "B1-0019",
    questionEn: "He asked me where I _____.",
    questionVi: "Anh ấy hỏi tôi _____ đã sống ở đâu.",
    options: [
      { option: "lived", isCorrect: true },
      { option: "live", isCorrect: false },
      { option: "did live", isCorrect: false },
      { option: "lives", isCorrect: false },
    ],
    explanationVi: "Tường thuật câu hỏi Wh-: từ để hỏi + S + V(lùi thì).",
    category: "Other",
  },
  {
    id: "B1-0020",
    questionEn: "Unless you _____ now, you will be late.",
    questionVi:
      "Trừ khi bạn _____ rời đi ngay bây giờ, nếu không bạn sẽ bị muộn.",
    options: [
      { option: "leave", isCorrect: true },
      { option: "don't leave", isCorrect: false },
      { option: "left", isCorrect: false },
      { option: "leaving", isCorrect: false },
    ],
    explanationVi: "Unless = If not, đi with khẳng định.",
    category: "Conditional Type 1",
  },
  {
    id: "B1-0021",
    questionEn: "I wish I _____ a bigger house.",
    questionVi: "Tôi ước gì mình _____ có một ngôi nhà lớn hơn.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "having", isCorrect: false },
    ],
    explanationVi: "Ước cho hiện tại: S + wish + S + V(quá khứ).",
    category: "Other",
  },
  {
    id: "B1-0022",
    questionEn: "The letter _____ by John.",
    questionVi: "Bức thư _____ đã được viết bởi John.",
    options: [
      { option: "was written", isCorrect: true },
      { option: "wrote", isCorrect: false },
      { option: "writes", isCorrect: false },
      { option: "writing", isCorrect: false },
    ],
    explanationVi: "Bị động: be + V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B1-0023",
    questionEn: "I haven't seen her _____ 3 years.",
    questionVi: "Tôi đã không gặp cô ấy _____ khoảng 3 năm rồi.",
    options: [
      { option: "for", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "from", isCorrect: false },
    ],
    explanationVi: "'For' + khoảng thời gian.",
    category: "Present Perfect",
  },
  {
    id: "B1-0024",
    questionEn: "They _____ married for 10 years.",
    questionVi: "Họ _____ đã kết hôn được 10 năm rồi.",
    options: [
      { option: "have been", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "Diễn tả trạng thái kéo dài từ quá khứ đến hiện tại.",
    category: "Present Perfect",
  },
  {
    id: "B1-0025",
    questionEn: "She said she _____ to the party.",
    questionVi: "Cô ấy nói là cô ấy _____ không thể đi dự tiệc.",
    options: [
      { option: "couldn't go", isCorrect: true },
      { option: "can't go", isCorrect: false },
      { option: "won't go", isCorrect: false },
      { option: "not go", isCorrect: false },
    ],
    explanationVi: "Lùi thì: can't -> couldn't.",
    category: "Other",
  },
  {
    id: "B1-0026",
    questionEn: "He wanted to know if I _____ play guitar.",
    questionVi: "Anh ấy muốn biết liệu tôi _____ có biết chơi guitar không.",
    options: [
      { option: "could", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "Tường thuật câu hỏi nghi vấn.",
    category: "Other",
  },
  {
    id: "B1-0027",
    questionEn: "If I had money, I _____ buy a car.",
    questionVi: "Nếu có tiền, tôi _____ sẽ mua một chiếc xe hơi.",
    options: [
      { option: "would", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "Điều kiện loại 2: S + would + V.",
    category: "Second Conditional",
  },
  {
    id: "B1-0028",
    questionEn: "The car _____ washed yet.",
    questionVi: "Chiếc xe _____ vẫn chưa được rửa.",
    options: [
      { option: "hasn't been", isCorrect: true },
      { option: "hasn't", isCorrect: false },
      { option: "didn't", isCorrect: false },
      { option: "wasn't", isCorrect: false },
    ],
    explanationVi: "Bị động thì HTHT phủ định: hasn't been V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "B1-0029",
    questionEn: "He _____ working here for 6 months.",
    questionVi: "Anh ấy _____ đã làm việc ở đây được 6 tháng rồi.",
    options: [
      { option: "has been", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "had been", isCorrect: false },
    ],
    explanationVi: "HTHT tiếp diễn nhấn mạnh tính liên tục.",
    category: "Present Perfect",
  },
  {
    id: "B1-0030",
    questionEn: "I saw the man _____ house was on fire.",
    questionVi: "Tôi đã nhìn thấy người đàn ông _____ có ngôi nhà bị cháy.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi: "Đại từ quan hệ chỉ sở hữu.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0032",
    topicId: "adjectives-order",
    questionType: "structure",
    questionEn: "She bought a _____ table.",
    questionVi: "Cô ấy đã mua một cái bàn _____.",
    options: [
      { option: "beautiful large old round", isCorrect: true },
      { option: "large beautiful round old", isCorrect: false },
      { option: "old round large beautiful", isCorrect: false },
      { option: "round old beautiful large", isCorrect: false },
    ],
    explanationVi:
      "Thứ tự tính từ tuân theo OSASCOMP: Opinion (beautiful) -> Size (large) -> Age (old) -> Shape (round).",
    category: "Word Forms",
  },
  {
    id: "B1-0033",
    topicId: "adverbs-categories",
    questionType: "word-form",
    questionEn: "The manager spoke _____ about the new project.",
    questionVi: "Người quản lý đã nói một cách _____ về dự án mới.",
    options: [
      { option: "enthusiastic", isCorrect: false },
      { option: "enthusiastically", isCorrect: true },
      { option: "enthusiasm", isCorrect: false },
      { option: "enthuse", isCorrect: false },
    ],
    explanationVi:
      "Mục này cần một trạng từ (Adverb) để bổ nghĩa cho động từ 'spoke'. Trạng từ cách thức (Manner) thường kết thúc bằng đuôi '-ly'.",
    category: "Word Forms",
  },
  {
    id: "B1-0034",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    questionEn: "The company's success made the employees _____.",
    questionVi: "Sự thành công của công ty đã làm cho các nhân viên _____.",
    options: [
      { option: "happily", isCorrect: false },
      { option: "happy", isCorrect: true },
      { option: "happiness", isCorrect: false },
      { option: "to happy", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc S-V-O-C (Object Complement): Make + Object + Adjective. 'Happy' bổ nghĩa cho tân ngữ 'employees'.",
    category: "Sentence Structure",
  },
  {
    id: "B1-0035",
    topicId: "modals-must-have-to",
    questionType: "grammar",
    contextEn: "The sign says 'No Smoking'.",
    contextVi: "Biển báo ghi 'Cấm hút thuốc'.",
    questionEn: "You _____ smoke in this area.",
    questionVi: "Bạn _____ hút thuốc ở khu vực này.",
    options: [
      { option: "mustn't", isCorrect: true },
      { option: "don't have to", isCorrect: false },
      { option: "shouldn't", isCorrect: false },
      { option: "may not", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'mustn't' để chỉ sự cấm đoán (prohibition). 'Don't have to' chỉ có nghĩa là không cần thiết, không đủ mạnh cho biển báo cấm.",
    category: "Modals",
  },
  {
    id: "B1-0036",
    topicId: "modals-must-have-to",
    questionType: "grammar",
    contextEn: "Today is a holiday.",
    contextVi: "Hôm nay là ngày lễ.",
    questionEn: "You _____ go to work today.",
    questionVi: "Bạn _____ phải đi làm hôm nay.",
    options: [
      { option: "mustn't", isCorrect: false },
      { option: "don't have to", isCorrect: true },
      { option: "shouldn't", isCorrect: false },
      { option: "can't", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'don't have to' để chỉ sự không cần thiết (lack of necessity). Bạn có thể đi làm nếu muốn, nhưng không bắt buộc. 'Mustn't' là cấm (không được phép đi), không phù hợp ngữ cảnh ngày lễ.",
    category: "Modals",
  },
  {
    id: "B1-0037",
    topicId: "modals-must-have-to",
    questionType: "grammar",
    questionEn: "The meeting is at 9:00. I _____ be late.",
    questionVi: "Cuộc họp lúc 9 giờ. Tôi _____ được đến muộn.",
    options: [
      { option: "mustn't", isCorrect: true },
      { option: "don't have to", isCorrect: false },
      { option: "ought to", isCorrect: false },
      { option: "may not", isCorrect: false },
    ],
    explanationVi:
      "Cấm đến muộn (mustn't) vì cuộc họp đã có giờ cố định. Đây là một quy tắc quan trọng.",
    category: "Modals",
  },
  {
    id: "B1-0046",
    topicId: "coordinating-conjunctions",
    questionType: "structure",
    contextEn: "The project was delayed, so the team had to work late.",
    contextVi: "Dự án bị trì hoãn, nên cả đội đã phải làm việc muộn.",
    questionEn:
      "The project was delayed, _____ the entire team had to work overtime.",
    questionVi:
      "Dự án bị trì hoãn, _____ toàn bộ đội ngũ đã phải làm việc tăng ca.",
    options: [
      { option: "for", isCorrect: false },
      { option: "so", isCorrect: true },
      { option: "yet", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'so' (vì vậy) để chỉ kết quả của việc dự án bị chậm trễ.",
    category: "Conjunctions",
  },
  {
    id: "B1-0047",
    topicId: "articles-a-an-the",
    questionType: "grammar",
    questionEn: "We need to hire _____ experienced consultant for the project.",
    questionVi:
      "Chúng ta cần thuê _____ chuyên gia tư vấn có kinh nghiệm cho dự án này.",
    options: [
      { option: "a", isCorrect: false },
      { option: "an", isCorrect: true },
      { option: "the", isCorrect: false },
      { option: "zero", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'an' trước tính từ bắt đầu bằng nguyên âm (experienced).",
    category: "Articles",
  },
  {
    id: "B1-0048",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "An announcement about a workshop.",
    contextVi: "Thông báo về một buổi hội thảo.",
    questionEn: "The workshop will show you how to _____ a professional resume.",
    questionVi:
      "Buổi hội thảo sẽ chỉ cho bạn cách để _____ một bản sơ yếu lý lịch chuyên nghiệp.",
    options: [
      { option: "create", isCorrect: true },
      { option: "creation", isCorrect: false },
      { option: "creative", isCorrect: false },
      { option: "creatively", isCorrect: false },
    ],
    explanationVi: "Sau 'how to' là một động từ nguyên mẫu (V-base).",
    category: "Sentence Structure",
  },
  {
    id: "B1-0049",
    topicId: "modals-must-have-to",
    questionType: "grammar",
    contextEn: "Talking about a mandatory meeting.",
    contextVi: "Nói về một cuộc họp bắt buộc.",
    questionEn: "Everyone _____ attend the meeting, as it is mandatory.",
    questionVi: "Mọi người _____ tham dự cuộc họp, vì nó là bắt buộc.",
    options: [
      { option: "must", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "might", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "Dùng 'must' để chỉ sự bắt buộc mạnh mẽ (mandatory).",
    category: "Modals",
  },
  {
    id: "B1-0050",
    topicId: "adjectives-order",
    questionType: "structure",
    questionEn: "He is looking for a _____ office space.",
    questionVi: "Anh ấy đang tìm kiếm một không gian văn phòng _____.",
    options: [
      { option: "modern small", isCorrect: true },
      { option: "small modern", isCorrect: false },
      { option: "modernly small", isCorrect: false },
      { option: "smallly modern", isCorrect: false },
    ],
    explanationVi:
      "Trật tự tính từ: Opinion (modern) -> Size (small). (Lưu ý: Đôi khi size đứng trước opinion nhưng  thường ưu tiên Opinion trước). Thực tế OSASCOMP: Opinion -> Size.",
    category: "Word Forms",
  },
  {
    id: "B1-0051",
    topicId: "relative-clauses-who-which",
    questionType: "structure",
    questionEn: "The company _____ produces these cars is very successful.",
    questionVi: "Công ty _____ sản xuất những chiếc xe này rất thành công.",
    options: [
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: true },
      { option: "whose", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' (hoặc 'that') làm đại từ quan hệ thay thế cho vật (company).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0052",
    topicId: "adverbs-categories",
    questionType: "word-form",
    questionEn: "Please review the document _____ before signing it.",
    questionVi: "Vui lòng xem lại tài liệu _____ trước khi ký.",
    options: [
      { option: "careful", isCorrect: false },
      { option: "carefully", isCorrect: true },
      { option: "care", isCorrect: false },
      { option: "caring", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ 'carefully' để bổ nghĩa cho động từ 'review'.",
    category: "Word Forms",
  },
  {
    id: "B1-0053",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    questionEn: "The hotel staff made us _____ very welcome.",
    questionVi:
      "Nhân viên khách sạn đã làm cho chúng tôi _____ thấy được chào đón rất nồng nhiệt.",
    options: [
      { option: "feel", isCorrect: true },
      { option: "to feel", isCorrect: false },
      { option: "feeling", isCorrect: false },
      { option: "felt", isCorrect: false },
    ],
    explanationVi: "Cấu trúc Make + Object + Verb (nguyên mẫu).",
    category: "Sentence Structure",
  },
  {
    id: "B1-0054",
    topicId: "subordinating-conjunctions",
    questionType: "structure",
    questionEn: "The train had already left _____ I arrived at the station.",
    questionVi: "Đoàn tàu đã rời đi rồi _____ tôi đến nhà ga.",
    options: [
      { option: "when", isCorrect: true },
      { option: "while", isCorrect: false },
      { option: "during", isCorrect: false },
      { option: "until", isCorrect: false },
    ],
    explanationVi: "Sử dụng 'when' để chỉ một thời điểm cụ thể trong quá khứ.",
    category: "Conjunctions",
  },
  {
    id: "B1-0055",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    questionEn: "This new technology seems _____ to some users.",
    questionVi: "Công nghệ mới này có vẻ _____ đối với một số người dùng.",
    options: [
      { option: "complexity", isCorrect: false },
      { option: "complex", isCorrect: true },
      { option: "complexly", isCorrect: false },
      { option: "complexing", isCorrect: false },
    ],
    explanationVi: "Sau linking verb 'seem' là một tính từ (Adj).",
    category: "Sentence Structure",
  },
  {
    id: "B1-0056",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Discussing work experience during an interview.",
    contextVi: "Thảo luận về kinh nghiệm làm việc trong một cuộc phỏng vấn.",
    questionEn: "How long _____ you worked for your current employer?",
    questionVi: "Bạn đã làm việc cho người chủ hiện tại được bao lâu rồi?",
    options: [
      { option: "do", isCorrect: false },
      { option: "have", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "are", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành dùng để hỏi về khoảng thời gian kéo dài từ quá khứ đến hiện tại.",
    category: "Present Perfect",
  },
  {
    id: "B1-0057",
    topicId: "modals-can-could",
    questionType: "grammar",
    contextEn: "Asking for permission in a formal way.",
    contextVi: "Xin phép một cách trang trọng.",
    questionEn: "_____ I leave the office early today, Mr. Henderson?",
    questionVi:
      "Tôi _____ xin phép về sớm hôm nay được không thưa ông Henderson?",
    options: [
      { option: "Should", isCorrect: false },
      { option: "Could", isCorrect: true },
      { option: "Must", isCorrect: false },
      { option: "Will", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'Could' để đưa ra lời xin phép một cách lịch sự, trang trọng.",
    category: "Modals",
  },
  {
    id: "B1-0058",
    topicId: "relative-clauses-who-which",
    questionType: "structure",
    contextEn: "Describing a new software feature.",
    contextVi: "Mô tả một tính năng phần mềm mới.",
    questionEn:
      "This is the feature _____ allows users to export data to Excel.",
    questionVi:
      "Đây là tính năng _____ cho phép người dùng xuất dữ liệu sang Excel.",
    options: [
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: true },
      { option: "where", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' làm đại từ quan hệ thay thế cho vật (feature).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0059",
    topicId: "comparative-adjectives",
    questionType: "grammar",
    contextEn: "Comparing two marketing strategies.",
    contextVi: "So sánh hai chiến lược tiếp thị.",
    questionEn: "The second strategy is much _____ than the first one.",
    questionVi: "Chiến lược thứ hai _____ hơn nhiều so với chiến lược đầu tiên.",
    options: [
      { option: "effective", isCorrect: false },
      { option: "more effective", isCorrect: true },
      { option: "most effective", isCorrect: false },
      { option: "effectively", isCorrect: false },
    ],
    explanationVi: "Cấu trúc so sánh hơn với tính từ dài: more + Adj + than.",
    category: "Word Forms",
  },
  {
    id: "B1-0060",
    topicId: "prepositions-time",
    questionType: "grammar",
    contextEn: "Scheduling a deadline.",
    contextVi: "Lên lịch cho một thời hạn.",
    questionEn: "The project must be completed _____ the end of the month.",
    questionVi: "Dự án phải được hoàn thành _____ cuối tháng.",
    options: [
      { option: "by", isCorrect: true },
      { option: "until", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'by' để chỉ một thời hạn chót (deadine) - trước hoặc tại một thời điểm nào đó.",
    category: "Prepositions",
  },
  {
    id: "B1-0076",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Discussing a long-term project's duration.",
    contextVi: "Thảo luận về thời gian thực hiện một dự án dài hạn.",
    questionEn:
      "Our research and development team _____ on this breakthrough technology for over three years.",
    questionVi:
      "Nhóm nghiên cứu và phát triển của chúng tôi _____ công nghệ đột phá này trong hơn ba năm.",
    options: [
      { option: "has worked", isCorrect: true },
      { option: "have worked", isCorrect: false },
      { option: "is working", isCorrect: false },
      { option: "worked", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại (for over three years). Chủ ngữ 'team' là số ít.",
    category: "Present Perfect",
  },
  {
    id: "B1-0077",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Advising a colleague on a professional certification.",
    contextVi: "Khuyên đồng nghiệp về một chứng chỉ chuyên môn.",
    questionEn:
      "To qualify for the senior analyst position, you _____ obtain a relevant professional certification.",
    questionVi:
      "Để đủ điều kiện cho vị trí chuyên viên phân tích cao cấp, bạn _____ phải có một chứng chỉ chuyên môn liên quan.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "might", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'must' để chỉ một yêu cầu bắt buộc hoặc sự cần thiết thiết yếu.",
    category: "Modals",
  },
  {
    id: "B1-0078",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a specific employee in a large company.",
    contextVi: "Xác định một nhân viên cụ thể trong một công ty lớn.",
    questionEn:
      "The manager _____ oversees the client relations department is currently on a business trip to London.",
    questionVi:
      "Người quản lý _____ giám sát bộ phận quan hệ khách hàng hiện đang đi công tác tại London.",
    options: [
      { option: "who", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'who' thay thế cho danh từ chỉ người 'The manager' và làm chủ ngữ cho mệnh đề quan hệ.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0079",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing two different shipping methods.",
    contextVi: "So sánh hai phương thức vận chuyển khác nhau.",
    questionEn:
      "The new express delivery service is significantly _____ than the standard shipping option.",
    questionVi:
      "Dịch vụ giao hàng hỏa tốc mới _____ hơn đáng kể so với lựa chọn vận chuyển tiêu chuẩn.",
    options: [
      { option: "faster", isCorrect: true },
      { option: "fastest", isCorrect: false },
      { option: "more fast", isCorrect: false },
      { option: "fast", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng so sánh hơn với tính từ ngắn (faster) đi kèm với 'than'.",
    category: "Comparison",
  },
  {
    id: "B1-0080",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on the status of a monthly publication.",
    contextVi: "Báo cáo tình trạng của một ấn phẩm hàng tháng.",
    questionEn:
      "The company's internal newsletter _____ to all staff members on the first Monday of every month.",
    questionVi:
      "Bản tin nội bộ của công ty _____ cho tất cả nhân viên vào thứ Hai đầu tiên mỗi tháng.",
    options: [
      { option: "is distributed", isCorrect: true },
      { option: "distributes", isCorrect: false },
      { option: "was distributed", isCorrect: false },
      { option: "has distributed", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động ở thì hiện tại đơn (is/am/are + V3/ed) để chỉ một hành động lặp đi lặp lại.",
    category: "Passive Voice",
  },
  {
    id: "B1-0081",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the reason for a project delay.",
    contextVi: "Giải thích lý do cho việc trì hoãn dự án.",
    questionEn:
      "The launch of the new product line was postponed _____ some unexpected technical difficulties arose.",
    questionVi:
      "Việc ra mắt dòng sản phẩm mới đã bị hoãn _____ một số khó khăn kỹ thuật ngoài dự kiến phát sinh.",
    options: [
      { option: "because", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "despite", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi:
      "Dùng liên từ 'because' để chỉ nguyên nhân (đứng trước một mệnh đề).",
    category: "Conjunctions",
  },
  {
    id: "B1-0082",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a potential future scenario.",
    contextVi: "Thảo luận về một kịch bản tiềm năng trong tương lai.",
    questionEn:
      "If we _____ the contract by Friday, we can start the project immediately.",
    questionVi:
      "Nếu chúng ta _____ hợp đồng trước thứ Sáu, chúng ta có thể bắt đầu dự án ngay lập tức.",
    options: [
      { option: "sign", isCorrect: true },
      { option: "signed", isCorrect: false },
      { option: "will sign", isCorrect: false },
      { option: "would sign", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 1 diễn tả một sự việc có thể xảy ra trong tương lai (If + Hiện tại đơn).",
    category: "Conditionals",
  },
  {
    id: "B1-0083",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what the CEO said in a meeting.",
    contextVi: "Tường thuật lại lời của CEO nói trong một cuộc họp.",
    questionEn:
      "The CEO mentioned that the company _____ significant profits in the previous fiscal year.",
    questionVi:
      "CEO đã đề cập rằng công ty _____ lợi nhuận đáng kể trong năm tài chính trước đó.",
    options: [
      { option: "had made", isCorrect: true },
      { option: "has made", isCorrect: false },
      { option: "makes", isCorrect: false },
      { option: "will make", isCorrect: false },
    ],
    explanationVi:
      "Trong câu gián tiếp, khi động từ chính ở quá khứ (mentioned), ta cần lùi thì từ hiện tại hoàn thành sang quá khứ hoàn thành.",
    category: "Reported Speech",
  },
  {
    id: "B1-0084",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Referring to a required action for all employees.",
    contextVi: "Đề cập đến một hành động bắt buộc đối với tất cả nhân viên.",
    questionEn:
      "All staff are encouraged _____ in the professional development workshops.",
    questionVi:
      "Tất cả nhân viên đều được khuyến khích _____ tham gia các buổi hội thảo phát triển chuyên môn.",
    options: [
      { option: "to participate", isCorrect: true },
      { option: "participating", isCorrect: false },
      { option: "participate", isCorrect: false },
      { option: "participated", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'encourage someone to do something' (khuyến khích ai đó làm gì).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0085",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Evaluating a coworker's contribution to a project.",
    contextVi: "Đánh giá sự đóng góp của đồng nghiệp vào dự án.",
    questionEn:
      "Ms. Patel's _____ contribution to the project was instrumental in its success.",
    questionVi:
      "Sự đóng góp _____ của bà Patel cho dự án là yếu tố then chốt dẫn đến thành công.",
    options: [
      { option: "valuable", isCorrect: true },
      { option: "value", isCorrect: false },
      { option: "valuably", isCorrect: false },
      { option: "valuation", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) đứng trước danh từ 'contribution' để bổ nghĩa.",
    category: "Word Forms",
  },
  {
    id: "B1-0086",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Checking someone's experience with a particular software.",
    contextVi: "Kiểm tra kinh nghiệm của ai đó với một phần mềm cụ thể.",
    questionEn:
      "_____ you ever _____ a project management tool like Trello or Asana before?",
    questionVi:
      "_____ Bạn đã bao giờ _____ một công cụ quản lý dự án như Trello hay Asana trước đây chưa?",
    options: [
      { option: "Have / used", isCorrect: true },
      { option: "Has / used", isCorrect: false },
      { option: "Did / use", isCorrect: false },
      { option: "Do / use", isCorrect: false },
    ],
    explanationVi:
      "Dùng thì hiện tại hoàn thành để hỏi về kinh nghiệm (Have/Has + S + ever + V3/ed?).",
    category: "Present Perfect",
  },
  {
    id: "B1-0087",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Asking for permission in a professional setting.",
    contextVi: "Xin phép trong môi trường chuyên nghiệp.",
    questionEn:
      "_____ I borrow the projector for the presentation this afternoon?",
    questionVi:
      "_____ Tôi có thể mượn máy chiếu cho buổi trình bày chiều nay không?",
    options: [
      { option: "May", isCorrect: true },
      { option: "Must", isCorrect: false },
      { option: "Should", isCorrect: false },
      { option: "Have to", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'May' để xin phép một cách lịch sự trong tình huống trang trọng.",
    category: "Modals",
  },
  {
    id: "B1-0088",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a specific company policy.",
    contextVi: "Đề cập đến một chính sách cụ thể của công ty.",
    questionEn:
      "The company policy _____ was revised last month now allows for remote work two days a week.",
    questionVi:
      "Chính sách công ty _____ được sửa đổi vào tháng trước hiện cho phép làm việc từ xa hai ngày một tuần.",
    options: [
      { option: "which", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'which' (hoặc 'that') thay thế cho danh từ chỉ vật 'The company policy'.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0089",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Evaluating the quarterly sales data.",
    contextVi: "Đánh giá dữ liệu bán hàng hàng quý.",
    questionEn:
      "Our sales this quarter are _____ than they were during the same period last year.",
    questionVi:
      "Doanh số của chúng tôi trong quý này _____ hơn so với cùng kỳ năm ngoái.",
    options: [
      { option: "better", isCorrect: true },
      { option: "gooder", isCorrect: false },
      { option: "best", isCorrect: false },
      { option: "more better", isCorrect: false },
    ],
    explanationVi: "So sánh hơn của 'good' là 'better' (bất quy tắc).",
    category: "Comparison",
  },
  {
    id: "B1-0090",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing the process of reviewing applications.",
    contextVi: "Mô tả quy trình xem xét hồ sơ ứng tuyển.",
    questionEn:
      "All job applications _____ by the hiring committee before candidates are selected for interviews.",
    questionVi:
      "Tất cả hồ sơ ứng tuyển _____ bởi hội đồng tuyển dụng trước khi ứng viên được chọn phỏng vấn.",
    options: [
      { option: "are reviewed", isCorrect: true },
      { option: "review", isCorrect: false },
      { option: "have reviewed", isCorrect: false },
      { option: "were reviewed", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại đơn để diễn tả một quy trình thường xuyên.",
    category: "Passive Voice",
  },
  {
    id: "B1-0091",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Providing two options for a meeting.",
    contextVi: "Cung cấp hai lựa chọn cho một cuộc họp.",
    questionEn:
      "We can hold the meeting in the conference room _____ we can book a private room at the local hotel.",
    questionVi:
      "Chúng ta có thể tổ chức cuộc họp trong phòng hội nghị _____ chúng ta có thể đặt một phòng riêng tại khách sạn địa phương.",
    options: [
      { option: "or", isCorrect: true },
      { option: "but", isCorrect: false },
      { option: "and", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi:
      "Dùng liên từ 'or' (hoặc) để đưa ra sự lựa chọn giữa hai phương án.",
    category: "Conjunctions",
  },
  {
    id: "B1-0092",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Expressing a regret regarding a missed opportunity.",
    contextVi: "Bày tỏ sự hối tiếc về một cơ hội đã bỏ lỡ.",
    questionEn:
      "If I _____ known about the conference earlier, I would have registered to attend.",
    questionVi:
      "Nếu tôi _____ biết về hội nghị sớm hơn, tôi đã đăng ký tham dự rồi.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 diễn tả sự việc không có thật trong quá khứ (If + Quá khứ hoàn thành, S + would have + V3/ed).",
    category: "Conditionals",
  },
  {
    id: "B1-0093",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Confirming what the supervisor advised.",
    contextVi: "Xác nhận những gì người giám sát đã khuyên.",
    questionEn:
      "The supervisor advised that we _____ the client's file before the meeting.",
    questionVi:
      "Người giám sát khuyên rằng chúng tôi _____ tập hồ sơ khách hàng trước cuộc họp.",
    options: [
      { option: "update", isCorrect: true },
      { option: "updating", isCorrect: false },
      { option: "to update", isCorrect: false },
      { option: "updated", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (subjunctive) sau các động từ khuyên bảo như 'advise that... (should) + V nguyên mẫu'.",
    category: "Reported Speech",
  },
  {
    id: "B1-0094",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Stating a common workplace preference.",
    contextVi: "Nêu một sở thích chung tại nơi làm việc.",
    questionEn:
      "Most people in the office enjoy _____ a coffee break together in the afternoon.",
    questionVi:
      "Hầu hết mọi người trong văn phòng đều thích _____ giải lao uống cà phê cùng nhau vào buổi chiều.",
    options: [
      { option: "having", isCorrect: true },
      { option: "to have", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Sau động từ 'enjoy' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0095",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing the atmosphere during a company event.",
    contextVi: "Mô tả bầu không khí trong một sự kiện công ty.",
    questionEn:
      "The atmosphere at the annual gala was very _____ and everyone had a great time.",
    questionVi:
      "Bầu không khí tại buổi tiệc gala hàng năm rất _____ và mọi người đã có một khoảng thời gian tuyệt vời.",
    options: [
      { option: "celebratory", isCorrect: true },
      { option: "celebrate", isCorrect: false },
      { option: "celebration", isCorrect: false },
      { option: "celebrated", isCorrect: false },
    ],
    explanationVi:
      "Sau 'was very' cần một tính từ (Adj) để mô tả tính chất của không gian/sự kiện.",
    category: "Word Forms",
  },
  {
    id: "B1-0096",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Informing about a finished task.",
    contextVi: "Thông báo về một nhiệm vụ đã hoàn thành.",
    questionEn: "I _____ already _____ the quarterly report to the head office.",
    questionVi: "Tôi _____ vừa mới _____ báo cáo hàng quý cho văn phòng chính.",
    options: [
      { option: "have / submitted", isCorrect: true },
      { option: "has / submitted", isCorrect: false },
      { option: "did / submit", isCorrect: false },
      { option: "am / submitting", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành với 'already' để chỉ một hành động vừa mới hoàn thành.",
    category: "Present Perfect",
  },
  {
    id: "B1-0097",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Discussing a potential future visit.",
    contextVi: "Thảo luận về một chuyến thăm tiềm năng trong tương lai.",
    questionEn:
      "The CEO _____ visit our branch next month, but it has not been confirmed yet.",
    questionVi:
      "CEO _____ có thể sẽ đến thăm chi nhánh của chúng ta vào tháng tới, nhưng vẫn chưa được xác nhận.",
    options: [
      { option: "might", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "should", isCorrect: false },
      { option: "has to", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'might' để diễn tả một khả năng có thể xảy ra nhưng không chắc chắn.",
    category: "Modals",
  },
  {
    id: "B1-0098",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a coworker with a specific expertise.",
    contextVi: "Xác định một đồng nghiệp có chuyên môn cụ thể.",
    questionEn:
      "She is the designer _____ portfolio impressed the creative director during the interview.",
    questionVi:
      "Cô ấy là nhà thiết kế _____ có bộ hồ sơ năng lực đã gây ấn tượng với giám đốc sáng tạo trong buổi phỏng vấn.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whose' chỉ sự sở hữu cho vật/người đứng trước nó (the designer's portfolio).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0099",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Evaluating the complexity of a new procedure.",
    contextVi: "Đánh giá mức độ phức tạp của một quy trình mới.",
    questionEn:
      "This new inventory system is much _____ than the one we used previously.",
    questionVi:
      "Hệ thống kiểm kho mới này chuyên sâu/phức tạp hơn nhiều so với cái chúng ta đã dùng trước đây.",
    options: [
      { option: "more complex", isCorrect: true },
      { option: "complexer", isCorrect: false },
      { option: "most complex", isCorrect: false },
      { option: "complex", isCorrect: false },
    ],
    explanationVi:
      "So sánh hơn đối với tính từ dài 'complex' là 'more complex'.",
    category: "Comparison",
  },
  {
    id: "B1-0100",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing the approval process for expenses.",
    contextVi: "Mô tả quy trình phê duyệt chi phí.",
    questionEn:
      "All travel expenses _____ by the department head within forty-eight hours of submission.",
    questionVi:
      "Tất cả chi phí công tác _____ bởi trưởng bộ phận trong vòng 48 giờ sau khi nộp.",
    options: [
      { option: "are approved", isCorrect: true },
      { option: "approve", isCorrect: false },
      { option: "were approved", isCorrect: false },
      { option: "have approved", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động ở thì hiện tại đơn để diễn tả một quy trình thông thường.",
    category: "Passive Voice",
  },
  {
    id: "B1-0101",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Discussing a long-term professional relationship.",
    contextVi: "Thảo luận về mối quan hệ hợp tác lâu dài.",
    questionEn:
      "Our company _____ a strong partnership with the local charity for over a decade.",
    questionVi:
      "Công ty chúng tôi _____ mối quan hệ đối tác bền chặt với tổ chức từ thiện địa phương trong hơn một thập kỷ.",
    options: [
      { option: "has maintained", isCorrect: true },
      { option: "have maintained", isCorrect: false },
      { option: "is maintaining", isCorrect: false },
      { option: "maintained", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại (for over a decade).",
    category: "Present Perfect",
  },
  {
    id: "B1-0102",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Discussing a recommended action for all team members.",
    contextVi:
      "Thảo luận về một hành động được khuyến nghị cho tất cả thành viên trong nhóm.",
    questionEn:
      "All team members _____ review the new project guidelines before the next meeting.",
    questionVi:
      "Tất cả các thành viên trong nhóm _____ nên xem lại các hướng dẫn dự án mới trước cuộc họp tiếp theo.",
    options: [
      { option: "should", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "might", isCorrect: false },
    ],
    explanationVi: "Dùng 'should' để đưa ra lời khuyên hoặc sự khuyến nghị.",
    category: "Modals",
  },
  {
    id: "B1-0103",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a specific office location.",
    contextVi: "Xác định một vị trí văn phòng cụ thể.",
    questionEn:
      "The branch office _____ is located in the downtown area will be relocated next month.",
    questionVi:
      "Văn phòng chi nhánh _____ nằm ở khu vực trung tâm thành phố sẽ được chuyển đi vào tháng tới.",
    options: [
      { option: "which", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'which' thay thế cho danh từ chỉ vật 'The branch office'.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0104",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the performance of two different sales teams.",
    contextVi: "So sánh hiệu suất của hai nhóm bán hàng khác nhau.",
    questionEn:
      "The North regional sales team performed _____ than the South regional team this quarter.",
    questionVi:
      "Nhóm bán hàng khu vực phía Bắc đã làm việc _____ hơn nhóm khu vực phía Nam trong quý này.",
    options: [
      { option: "better", isCorrect: true },
      { option: "well", isCorrect: false },
      { option: "best", isCorrect: false },
      { option: "more well", isCorrect: false },
    ],
    explanationVi: "So sánh hơn của trạng từ 'well' là 'better'.",
    category: "Comparison",
  },
  {
    id: "B1-0105",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on the progress of a financial audit.",
    contextVi: "Báo cáo tiến độ của một đợt kiểm toán tài chính.",
    questionEn:
      "The annual financial audit _____ by an independent accounting firm last week.",
    questionVi:
      "Đợt kiểm toán tài chính hàng năm _____ bởi một công ty kế toán độc lập vào tuần trước.",
    options: [
      { option: "was conducted", isCorrect: true },
      { option: "conducted", isCorrect: false },
      { option: "is conducted", isCorrect: false },
      { option: "has been conducted", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì quá khứ đơn (last week).",
    category: "Passive Voice",
  },
  {
    id: "B1-0106",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the conditions for a bonus payment.",
    contextVi: "Giải thích các điều kiện để được trả tiền thưởng.",
    questionEn:
      "Employees will receive a bonus _____ they exceed their annual sales targets.",
    questionVi:
      "Nhân viên sẽ được nhận tiền thưởng _____ họ vượt quá mục tiêu doanh số hàng năm.",
    options: [
      { option: "if", isCorrect: true },
      { option: "unless", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi: "Dùng liên từ 'if' để chỉ điều kiện.",
    category: "Conjunctions",
  },
  {
    id: "B1-0107",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an unlikely hypothetical situation.",
    contextVi: "Thảo luận về một tình huống giả định khó xảy ra.",
    questionEn:
      "If the company _____ more budget, we would invest in new technology.",
    questionVi:
      "Nếu công ty _____ có ngân sách lớn hơn, chúng tôi đã đầu tư vào công nghệ mới.",
    options: [
      { option: "had", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "will have", isCorrect: false },
      { option: "would have", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 2 diễn tả một giả định không có thật ở hiện tại.",
    category: "Conditionals",
  },
  {
    id: "B1-0108",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what a coworker said about their vacation.",
    contextVi: "Tường thuật lời của một đồng nghiệp nói về kỳ nghỉ của họ.",
    questionEn:
      "She said that she _____ to France for her vacation the following month.",
    questionVi:
      "Cô ấy nói rằng cô ấy _____ đi Pháp cho kỳ nghỉ vào tháng sau đó.",
    options: [
      { option: "would go", isCorrect: true },
      { option: "will go", isCorrect: false },
      { option: "goes", isCorrect: false },
      { option: "is going", isCorrect: false },
    ],
    explanationVi: "Trong câu gián tiếp, 'will' được chuyển thành 'would'.",
    category: "Reported Speech",
  },
  {
    id: "B1-0109",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Discussing the importance of punctuality.",
    contextVi: "Thảo luận về tầm quan trọng của việc đúng giờ.",
    questionEn:
      "All employees are expected _____ on time for all scheduled meetings.",
    questionVi:
      "Tất cả nhân viên được kỳ vọng _____ đúng giờ cho tất cả các cuộc họp đã lên lịch.",
    options: [
      { option: "to arrive", isCorrect: true },
      { option: "arriving", isCorrect: false },
      { option: "arrive", isCorrect: false },
      { option: "arrived", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'expect someone to do something'.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0110",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a coworker's personality trait.",
    contextVi: "Xác định một nét tính cách của đồng nghiệp.",
    questionEn:
      "The manager praised him for his _____ attitude towards his work.",
    questionVi:
      "Người quản lý đã khen ngợi anh ấy vì thái độ _____ đối với công việc.",
    options: [
      { option: "professional", isCorrect: true },
      { option: "profession", isCorrect: false },
      { option: "professionally", isCorrect: false },
      { option: "professionalism", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'attitude'.",
    category: "Word Forms",
  },
  {
    id: "B1-0111",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Checking someone's history with a specific task.",
    contextVi: "Kiểm tra lịch sử của ai đó với một nhiệm vụ cụ thể.",
    questionEn:
      "Have you ever _____ any experience working with international clients?",
    questionVi:
      "Bạn đã bao giờ _____ bất kỳ kinh nghiệm nào khi làm việc với các khách hàng quốc tế chưa?",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "having", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành: Have + S + ever + V3/ed. V3 của 'have' là 'had'.",
    category: "Present Perfect",
  },
  {
    id: "B1-0112",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Asking about a mandatory requirement.",
    contextVi: "Hỏi về một yêu cầu bắt buộc.",
    questionEn:
      "_____ all guests wear a visitor badge while inside the office building?",
    questionVi:
      "_____ tất cả các khách có phải đeo thẻ tên khi ở trong tòa nhà văn phòng không?",
    options: [
      { option: "Must", isCorrect: true },
      { option: "May", isCorrect: false },
      { option: "Should", isCorrect: false },
      { option: "Can", isCorrect: false },
    ],
    explanationVi: "Dùng 'Must' để hỏi về một quy định bắt buộc.",
    category: "Modals",
  },
  {
    id: "B1-0113",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a specific person at a meeting.",
    contextVi: "Xác định một người cụ thể tại một cuộc họp.",
    questionEn:
      "The consultant _____ we hired for the project gave a very informative presentation.",
    questionVi:
      "Người cố vấn _____ mà chúng tôi đã thuê cho dự án đã có một bài trình bày rất nhiều thông tin.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whom' thay thế cho danh từ chỉ người 'The consultant' và làm tân ngữ trong mệnh đề quan hệ.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0114",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Identifying the best-selling product.",
    contextVi: "Xác định sản phẩm bán chạy nhất.",
    questionEn:
      "This product is currently the _____ selling item in our entire collection.",
    questionVi:
      "Sản phẩm này hiện đang là mặt hàng bán _____ nhất trong toàn bộ bộ sưu tập của chúng tôi.",
    options: [
      { option: "best", isCorrect: true },
      { option: "better", isCorrect: false },
      { option: "good", isCorrect: false },
      { option: "most good", isCorrect: false },
    ],
    explanationVi: "So sánh nhất của 'well' / 'good' là 'best'.",
    category: "Comparison",
  },
  {
    id: "B1-0115",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on the status of a shipment.",
    contextVi: "Báo cáo tình trạng của một lô hàng.",
    questionEn:
      "The shipment of new computers _____ delivered to the warehouse yesterday afternoon.",
    questionVi:
      "Lô hàng máy tính mới _____ được giao đến kho vào chiều hôm qua.",
    options: [
      { option: "was", isCorrect: true },
      { option: "were", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "has been", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì quá khứ đơn (yesterday). 'Shipment' là danh từ số ít.",
    category: "Passive Voice",
  },
  {
    id: "B1-0116",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Providing information about a coworker's skills.",
    contextVi: "Cung cấp thông tin về các kỹ năng của đồng nghiệp.",
    questionEn:
      "She is not only an expert in marketing _____ also has extensive experience in finance.",
    questionVi:
      "Cô ấy không chỉ là một chuyên gia về tiếp thị _____ mà còn có kinh nghiệm dày dạn trong lĩnh vực tài chính.",
    options: [
      { option: "but", isCorrect: true },
      { option: "and", isCorrect: false },
      { option: "so", isCorrect: false },
      { option: "or", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc tương quan 'not only... but also' (không những... mà còn).",
    category: "Conjunctions",
  },
  {
    id: "B1-0117",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a missed opportunity for a project.",
    contextVi: "Thảo luận về một cơ hội bị bỏ lỡ cho một dự án.",
    questionEn:
      "If we _____ the equipment earlier, we would have finished the project on time.",
    questionVi:
      "Nếu chúng ta _____ nhận được thiết bị sớm hơn, chúng ta đã hoàn thành dự án đúng hạn rồi.",
    options: [
      { option: "had received", isCorrect: true },
      { option: "received", isCorrect: false },
      { option: "have received", isCorrect: false },
      { option: "would have received", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 dùng để nói về một giả định không có thật trong quá khứ.",
    category: "Conditionals",
  },
  {
    id: "B1-0118",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Confirming what a supervisor advised regarding a meeting.",
    contextVi: "Xác nhận những gì người giám sát đã khuyên về cuộc họp.",
    questionEn:
      "The supervisor advised that the project team _____ the client's file before the meeting.",
    questionVi:
      "Người giám sát khuyên rằng nhóm dự án _____ cập nhật hồ sơ khách hàng trước cuộc họp.",
    options: [
      { option: "update", isCorrect: true },
      { option: "updates", isCorrect: false },
      { option: "updating", isCorrect: false },
      { option: "updated", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (subjunctive) dùng sau động từ 'advise that...'.",
    category: "Reported Speech",
  },
  {
    id: "B1-0119",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Describing a common office activity.",
    contextVi: "Mô tả một hoạt động văn phòng thông thường.",
    questionEn:
      "Most people in our office enjoy _____ lunch together in the communal garden.",
    questionVi:
      "Hầu hết mọi người trong văn phòng của chúng tôi đều thích _____ ăn trưa cùng nhau trong khu vườn chung.",
    options: [
      { option: "having", isCorrect: true },
      { option: "to have", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Sau 'enjoy' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0120",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Evaluating the success of a company gala.",
    contextVi: "Đánh giá sự thành công của một buổi tiệc công ty.",
    questionEn:
      "The atmosphere at the annual company gala was very _____ and festive.",
    questionVi:
      "Bầu không khí tại buổi tiệc công ty hàng năm rất _____ và mang tính lễ hội.",
    options: [
      { option: "celebratory", isCorrect: true },
      { option: "celebrate", isCorrect: false },
      { option: "celebration", isCorrect: false },
      { option: "celebrated", isCorrect: false },
    ],
    explanationVi:
      "Sau 'was very' cần một tính từ (Adj) để mô tả tính chất của buổi tiệc.",
    category: "Word Forms",
  },
  {
    id: "B1-0121",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Informing about the successful completion of a task.",
    contextVi: "Thông báo về việc hoàn thành thành công một nhiệm vụ.",
    questionEn:
      "We _____ already _____ the final draft of the proposal to the management board.",
    questionVi:
      "Chúng tôi _____ đã _____ bản phác thảo cuối cùng của đề xuất cho ban quản lý.",
    options: [
      { option: "have / submitted", isCorrect: true },
      { option: "has / submitted", isCorrect: false },
      { option: "had / submitted", isCorrect: false },
      { option: "are / submitting", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành với 'already' để thông báo một việc vừa mới hoàn thành.",
    category: "Present Perfect",
  },
  {
    id: "B1-0122",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Discussing a potential future event.",
    contextVi: "Thảo luận về một sự kiện tiềm năng trong tương lai.",
    questionEn:
      "The CEO _____ be able to visit our office next month, but it has not been confirmed yet.",
    questionVi:
      "CEO _____ có thể đến thăm văn phòng chúng ta vào tháng tới, nhưng vẫn chưa được xác nhận.",
    options: [
      { option: "might", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "should", isCorrect: false },
      { option: "has to", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'might' để nói về một khả năng có thể xảy ra nhưng không chắc chắn.",
    category: "Modals",
  },
  {
    id: "B1-0123",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a coworker with specific expertise.",
    contextVi: "Xác định một đồng nghiệp có chuyên môn cụ thể.",
    questionEn:
      "She is the designer _____ portfolio impressed the creative director during the interview.",
    questionVi:
      "Cô ấy là nhà thiết kế _____ có bộ hồ sơ năng lực đã gây ấn tượng với giám đốc sáng tạo trong buổi phỏng vấn.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whose' chỉ sự sở hữu (The designer's portfolio).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0124",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Evaluating the complexity of a new procedure.",
    contextVi: "Đánh giá mức độ phức tạp của một quy trình mới.",
    questionEn:
      "Starting this new project is much _____ than our previous endeavors.",
    questionVi:
      "Bắt đầu dự án mới này _____ hơn nhiều so với các nỗ lực trước đây của chúng tôi.",
    options: [
      { option: "more challenging", isCorrect: true },
      { option: "challenging", isCorrect: false },
      { option: "most challenging", isCorrect: false },
      { option: "challeneger", isCorrect: false },
    ],
    explanationVi: "So sánh hơn đối với tính từ dài (more + Adj + than).",
    category: "Comparison",
  },
  {
    id: "B1-0125",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a common office procedure.",
    contextVi: "Mô tả một quy trình văn phòng thông thường.",
    questionEn:
      "All corporate accounts _____ by the finance team on a monthly basis.",
    questionVi:
      "Tất cả các tài khoản công ty _____ bởi nhóm tài chính hàng tháng.",
    options: [
      { option: "are reviewed", isCorrect: true },
      { option: "review", isCorrect: false },
      { option: "reviewed", isCorrect: false },
      { option: "have reviewed", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại đơn để diễn tả một hành động lặp đi lặp lại thường xuyên.",
    category: "Passive Voice",
  },
  {
    id: "B1-0126",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Discussing a long-standing business relationship.",
    contextVi: "Thảo luận về mối quan hệ kinh doanh lâu dài.",
    questionEn:
      "We _____ with that particular supplier for nearly twenty years.",
    questionVi: "Chúng tôi _____ với nhà cung cấp đó trong gần hai mươi năm.",
    options: [
      { option: "have worked", isCorrect: true },
      { option: "has worked", isCorrect: false },
      { option: "are working", isCorrect: false },
      { option: "worked", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại (for nearly twenty years).",
    category: "Present Perfect",
  },
  {
    id: "B1-0127",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Advising on a necessary step for security.",
    contextVi: "Khuyên về một bước cần thiết cho an ninh.",
    questionEn:
      "All visitors _____ show a valid ID before they are granted access to the production area.",
    questionVi:
      "Tất cả khách tham quan _____ phải xuất trình thẻ căn cước hợp lệ trước khi được phép vào khu vực sản xuất.",
    options: [
      { option: "must", isCorrect: true },
      { option: "may", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "might", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'must' để chỉ một yêu cầu bắt buộc hoặc quy định nghiêm ngặt.",
    category: "Modals",
  },
  {
    id: "B1-0128",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a specific piece of equipment.",
    contextVi: "Đề cập đến một thiết bị cụ thể.",
    questionEn:
      "The heavy machinery _____ was installed last month has significantly increased our production capacity.",
    questionVi:
      "Máy móc hạng nặng _____ được lắp đặt vào tháng trước đã làm tăng đáng kể năng lực sản xuất của chúng tôi.",
    options: [
      { option: "which", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'which' thay thế cho danh từ chỉ vật 'The heavy machinery'.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0129",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the efficiency of two software systems.",
    contextVi: "So sánh hiệu quả của hai hệ thống phần mềm.",
    questionEn:
      "The upgraded software is _____ more efficient than the previous version.",
    questionVi:
      "Phần mềm được nâng cấp _____ hiệu quả hơn so với phiên bản trước đó.",
    options: [
      { option: "far", isCorrect: true },
      { option: "more", isCorrect: false },
      { option: "most", isCorrect: false },
      { option: "very", isCorrect: false },
    ],
    explanationVi:
      "Dùng trạng từ 'far' (hoặc 'much') để nhấn mạnh sự khác biệt trong cấu trúc so sánh hơn.",
    category: "Comparison",
  },
  {
    id: "B1-0130",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting on a decision made by the board.",
    contextVi: "Báo cáo về một quyết định của ban giám đốc.",
    questionEn:
      "The new marketing strategy _____ by the board of directors during their meeting last Tuesday.",
    questionVi:
      "Chiến lược tiếp thị mới _____ bởi ban giám đốc trong cuộc họp của họ vào thứ Ba tuần trước.",
    options: [
      { option: "was approved", isCorrect: true },
      { option: "approved", isCorrect: false },
      { option: "is approved", isCorrect: false },
      { option: "has been approved", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì quá khứ đơn (last Tuesday).",
    category: "Passive Voice",
  },
  {
    id: "B1-0131",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the reason for a colleague's absence.",
    contextVi: "Giải thích lý do đồng nghiệp vắng mặt.",
    questionEn:
      "Mr. Kim cannot attend the conference _____ he has to oversee an important project at the home office.",
    questionVi:
      "Ông Kim không thể tham dự hội nghị _____ ông ấy phải giám sát một dự án quan trọng tại văn phòng chính.",
    options: [
      { option: "since", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "despite", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi:
      "Dùng liên từ 'since' (hoặc 'because', 'as') để chỉ nguyên nhân.",
    category: "Conjunctions",
  },
  {
    id: "B1-0132",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn:
      "Discussing a potential future event based on certain conditions.",
    contextVi:
      "Thảo luận về một sự kiện tiềm năng trong tương lai dựa trên các điều kiện nhất định.",
    questionEn:
      "If the economy _____ stable, our sales will continue to grow throughout the year.",
    questionVi:
      "Nếu nền kinh tế _____ ổn định, doanh số của chúng tôi sẽ tiếp tục tăng trưởng trong suốt cả năm.",
    options: [
      { option: "remains", isCorrect: true },
      { option: "remained", isCorrect: false },
      { option: "will remain", isCorrect: false },
      { option: "would remain", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai (If + Hiện tại đơn).",
    category: "Conditionals",
  },
  {
    id: "B1-0133",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting a request from the department head.",
    contextVi: "Tường thuật một yêu cầu từ trưởng bộ phận.",
    questionEn:
      "The department head asked everyone _____ the office early on Friday afternoon.",
    questionVi:
      "Trưởng bộ phận đã yêu cầu mọi người _____ văn phòng sớm vào chiều thứ Sáu.",
    options: [
      { option: "not to leave", isCorrect: true },
      { option: "do not leave", isCorrect: false },
      { option: "to not leave", isCorrect: false },
      { option: "not leaving", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'ask someone (not) to do something'.",
    category: "Reported Speech",
  },
  {
    id: "B1-0134",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Stating a necessary action for improvement.",
    contextVi: "Nêu một hành động cần thiết để cải thiện.",
    questionEn:
      "The company is considering _____ its customer support system to include a 24/7 chatbot.",
    questionVi:
      "Công ty đang xem xét _____ hệ thống hỗ trợ khách hàng của mình bao gồm một chatbot hoạt động 24/7.",
    options: [
      { option: "upgrading", isCorrect: true },
      { option: "to upgrade", isCorrect: false },
      { option: "upgrade", isCorrect: false },
      { option: "upgraded", isCorrect: false },
    ],
    explanationVi: "Sau động từ 'consider' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0135",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Commending a team's achievement.",
    contextVi: "Khen ngợi thành tích của một nhóm.",
    questionEn:
      "Our team's _____ performance this year led to several prestigious industry awards.",
    questionVi:
      "Hiệu suất _____ của nhóm chúng tôi năm nay đã dẫn đến một số giải thưởng danh giá trong ngành.",
    options: [
      { option: "outstanding", isCorrect: true },
      { option: "outstand", isCorrect: false },
      { option: "outstandingly", isCorrect: false },
      { option: "outstay", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'performance'.",
    category: "Word Forms",
  },
  {
    id: "B1-0136",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Informing about the arrival of a package.",
    contextVi: "Thông báo về việc một kiện hàng đã đến.",
    questionEn:
      "The package from the New York office _____ finally _____ at the reception desk.",
    questionVi:
      "Kiện hàng từ văn phòng New York cuối cùng _____ vừa mới _____ tại quầy tiếp tân.",
    options: [
      { option: "has / arrived", isCorrect: true },
      { option: "have / arrived", isCorrect: false },
      { option: "did / arrive", isCorrect: false },
      { option: "is / arriving", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành diễn tả hành động vừa mới xảy ra và để lại kết quả.",
    category: "Present Perfect",
  },
  {
    id: "B1-0137",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Offering assistance to a coworker.",
    contextVi: "Đề nghị hỗ trợ một đồng nghiệp.",
    questionEn:
      "_____ you like me to help you set up the projector for the board meeting?",
    questionVi:
      "Bạn _____ có muốn tôi giúp bạn lắp máy chiếu cho cuộc họp hội đồng quản trị không?",
    options: [
      { option: "Would", isCorrect: true },
      { option: "Should", isCorrect: false },
      { option: "Could", isCorrect: false },
      { option: "Might", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'Would you like...?' dùng để đưa ra lời đề nghị hoặc lời mời một cách lịch sự.",
    category: "Modals",
  },
  {
    id: "B1-0138",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a coworker with a specific role.",
    contextVi: "Xác định một đồng nghiệp có vai trò cụ thể.",
    questionEn:
      "She is the representative _____ we will be negotiating with for the new contract.",
    questionVi:
      "Cô ấy là người đại diện _____ chúng ta sẽ thương lượng cùng cho hợp đồng mới.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whom' thay thế cho danh từ chỉ người làm tân ngữ (negotiate with... person).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0139",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the costs of two different marketing campaigns.",
    contextVi: "So sánh chi phí của hai chiến dịch tiếp thị khác nhau.",
    questionEn:
      "The social media campaign was much _____ expensive than the traditional television advertisement.",
    questionVi:
      "Chiến dịch trên mạng xã hội _____ ít tốn kém hơn nhiều so với quảng cáo trên truyền hình truyền thống.",
    options: [
      { option: "less", isCorrect: true },
      { option: "least", isCorrect: false },
      { option: "fewer", isCorrect: false },
      { option: "more less", isCorrect: false },
    ],
    explanationVi: "Dùng 'less + Adj + than' để diễn tả so sánh kém hơn.",
    category: "Comparison",
  },
  {
    id: "B1-0140",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing the distribution of reports.",
    contextVi: "Mô tả việc phân phối các báo cáo.",
    questionEn:
      "All quarterly reports _____ directly to the department heads by email.",
    questionVi:
      "Tất cả các báo cáo hàng quý _____ trực tiếp cho các trưởng bộ phận qua email.",
    options: [
      { option: "are sent", isCorrect: true },
      { option: "send", isCorrect: false },
      { option: "have sent", isCorrect: false },
      { option: "were sent", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại đơn để diễn tả một quy trình định kỳ.",
    category: "Passive Voice",
  },
  {
    id: "B1-0141",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the conditions for a job application.",
    contextVi: "Giải thích các điều kiện cho một đơn xin việc.",
    questionEn:
      "Candidates must possess both a relevant degree _____ at least five years of experience in the field.",
    questionVi:
      "Ứng viên phải có cả bằng cấp liên quan _____ ít nhất năm năm kinh nghiệm trong lĩnh vực này.",
    options: [
      { option: "and", isCorrect: true },
      { option: "but", isCorrect: false },
      { option: "or", isCorrect: false },
      { option: "yet", isCorrect: false },
    ],
    explanationVi: "Cấu trúc tương quan 'both... and' (cả... và).",
    category: "Conjunctions",
  },
  {
    id: "B1-0142",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing an unlikely hypothetical situation.",
    contextVi: "Thảo luận về một tình huống giả định khó xảy ra.",
    questionEn:
      "If I _____ you, I would take the time to review the proposal one more time.",
    questionVi:
      "Nếu tôi _____ là bạn, tôi sẽ dành thời gian để xem lại đề xuất một lần nữa.",
    options: [
      { option: "were", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "will be", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 2 dùng 'were' cho tất cả các ngôi khi đưa ra lời khuyên.",
    category: "Conditionals",
  },
  {
    id: "B1-0143",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what a supervisor said during an interview.",
    contextVi:
      "Tường thuật những gì người giám sát đã nói trong buổi phỏng vấn.",
    questionEn:
      "The interviewer asked the candidate _____ she was familiar with our proprietary software.",
    questionVi:
      "Người phỏng vấn đã hỏi ứng viên _____ liệu cô ấy có quen thuộc với phần mềm độc quyền của chúng tôi không.",
    options: [
      { option: "if", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whether", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Trong câu gián tiếp dạng câu hỏi Yes/No, ta dùng 'if' hoặc 'whether' (liệu rằng).",
    category: "Reported Speech",
  },
  {
    id: "B1-0144",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Identifying a necessary skill for a position.",
    contextVi: "Xác định một kỹ năng cần thiết cho một vị trí.",
    questionEn:
      "The role of the team leader involves _____ the activities of all team members.",
    questionVi:
      "Vai trò của nhóm trưởng bao gồm việc _____ hoạt động của tất cả các thành viên trong nhóm.",
    options: [
      { option: "coordinating", isCorrect: true },
      { option: "to coordinate", isCorrect: false },
      { option: "coordinate", isCorrect: false },
      { option: "coordinates", isCorrect: false },
    ],
    explanationVi: "Sau động từ 'involve' ta dùng danh động từ (V-ing).",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0145",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a coworker's organized workflow.",
    contextVi: "Mô tả quy trình làm việc có tổ chức của một đồng nghiệp.",
    questionEn:
      "Her approach to project management is highly _____ and efficient.",
    questionVi:
      "Cách tiếp cận của cô ấy trong quản lý dự án mang tính _____ cao và hiệu quả.",
    options: [
      { option: "systematic", isCorrect: true },
      { option: "system", isCorrect: false },
      { option: "systemically", isCorrect: false },
      { option: "systemize", isCorrect: false },
    ],
    explanationVi:
      "Sau 'is highly' cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ.",
    category: "Word Forms",
  },
  {
    id: "B1-0146",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Reporting a task that hasn't been completed yet.",
    contextVi: "Báo cáo một nhiệm vụ vẫn chưa được hoàn thành.",
    questionEn:
      "The finance department _____ the revised budget figures for the next fiscal year yet.",
    questionVi:
      "Bộ phận tài chính _____ các số liệu ngân sách sửa đổi cho năm tài chính tới.",
    options: [
      { option: "has not released", isCorrect: true },
      { option: "have not released", isCorrect: false },
      { option: "does not release", isCorrect: false },
      { option: "did not release", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành với 'yet' thường dùng trong câu phủ định hoặc câu hỏi.",
    category: "Present Perfect",
  },
  {
    id: "B1-0147",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Stating office regulations.",
    contextVi: "Nêu quy định văn phòng.",
    questionEn:
      "Employees _____ smoke anywhere inside the office building, including the balcony area.",
    questionVi:
      "Nhân viên _____ không được hút thuốc ở bất kỳ đâu trong tòa nhà văn phòng, kể cả khu vực ban công.",
    options: [
      { option: "must not", isCorrect: true },
      { option: "might not", isCorrect: false },
      { option: "should not", isCorrect: false },
      { option: "cannot", isCorrect: false },
    ],
    explanationVi: "Dùng 'must not' (mustn't) để chỉ sự cấm đoán.",
    category: "Modals",
  },
  {
    id: "B1-0148",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a person who provided a recommendation.",
    contextVi: "Xác định người đã đưa ra lời giới thiệu.",
    questionEn:
      "He is the consultant _____ recommendation eventually led us to hire the new marketing firm.",
    questionVi:
      "Anh ấy là người cố vấn _____ có lời giới thiệu cuối cùng đã dẫn chúng tôi đến việc thuê công ty tiếp thị mới.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'whose' chỉ sự sở hữu (the consultant's recommendation).",
    category: "Relative Clauses",
  },
  {
    id: "B1-0149",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the duration of two different meetings.",
    contextVi: "So sánh thời gian của hai cuộc họp khác nhau.",
    questionEn:
      "The brainstorming session was slightly _____ than the weekly staff meeting.",
    questionVi:
      "Buổi họp động não kéo dài _____ hơn một chút so với cuộc họp nhân viên hàng tuần.",
    options: [
      { option: "longer", isCorrect: true },
      { option: "longest", isCorrect: false },
      { option: "more long", isCorrect: false },
      { option: "long", isCorrect: false },
    ],
    explanationVi: "So sánh hơn đối với tính từ ngắn (longer + than).",
    category: "Comparison",
  },
  {
    id: "B1-0150",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing how safety rules are communicated.",
    contextVi: "Mô tả cách thức truyền đạt các quy tắc an toàn.",
    questionEn:
      "Updates to the safety protocols _____ to all employees via the internal messaging system.",
    questionVi:
      "Các bản cập nhật cho giao thức an toàn _____ cho toàn bộ nhân viên thông qua hệ thống tin nhắn nội bộ.",
    options: [
      { option: "are announced", isCorrect: true },
      { option: "announce", isCorrect: false },
      { option: "were announced", isCorrect: false },
      { option: "have announced", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động ở thì hiện tại đơn chỉ một hành động thường xuyên.",
    category: "Passive Voice",
  },
  {
    id: "B1-0151",
    topicId: "present-perfect",
    questionType: "grammar",
    contextEn: "Reporting the company's growth over time.",
    contextVi: "Báo cáo sự tăng trưởng của công ty theo thời gian.",
    questionEn:
      "Our company _____ its market share in the region by fifteen percent since the beginning of the year.",
    questionVi:
      "Công ty chúng tôi _____ thị phần của mình trong khu vực lên mười lăm phần trăm kể từ đầu năm.",
    options: [
      { option: "has increased", isCorrect: true },
      { option: "have increased", isCorrect: false },
      { option: "is increasing", isCorrect: false },
      { option: "increased", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại hoàn thành đi với 'since' để chỉ hành động bắt đầu trong quá khứ và kéo dài đến hiện tại.",
    category: "Present Perfect",
  },
  {
    id: "B1-0152",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Discussing potential for promotion.",
    contextVi: "Thảo luận về tiềm năng được thăng chức.",
    questionEn:
      "If you continue to perform at this level, you _____ be considered for a promotion in the next review cycle.",
    questionVi:
      "Nếu bạn tiếp tục làm việc ở mức độ này, bạn _____ có thể được cân nhắc thăng chức trong chu kỳ đánh giá tiếp theo.",
    options: [
      { option: "could", isCorrect: true },
      { option: "must", isCorrect: false },
      { option: "should", isCorrect: false },
      { option: "had to", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'could' để chỉ một khả năng có thể xảy ra trong tương lai.",
    category: "Modals",
  },
  {
    id: "B1-0153",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Identifying a specific vendor for an event.",
    contextVi: "Xác định một nhà cung cấp cụ thể cho một sự kiện.",
    questionEn:
      "The catering company _____ we hired for the annual gala provided exceptional service.",
    questionVi:
      "Công ty cung cấp dịch vụ ăn uống _____ mà chúng tôi thuê cho buổi tiệc gala hàng năm đã cung cấp dịch vụ xuất sắc.",
    options: [
      { option: "that", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false },
    ],
    explanationVi:
      "Đại từ quan hệ 'that' (hoặc 'which') dùng để thay thế cho danh từ chỉ vật/tổ chức 'The catering company'.",
    category: "Relative Clauses",
  },
  {
    id: "B1-0154",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional qualifications of candidates.",
    contextVi: "So sánh chứng chỉ chuyên môn của các ứng viên.",
    questionEn:
      "Mr. Nguyen is by far the _____ qualified candidate we have interviewed for the position of senior developer.",
    questionVi:
      "Ông Nguyễn cho đến nay là ứng viên có trình độ _____ nhất mà chúng tôi đã phỏng vấn cho vị trí nhà phát triển cao cấp.",
    options: [
      { option: "most", isCorrect: true },
      { option: "more", isCorrect: false },
      { option: "less", isCorrect: false },
      { option: "very", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh nhất đối với tính từ dài (the most + Adj).",
    category: "Comparison",
  },
  {
    id: "B1-0155",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a common employee orientation activity.",
    contextVi: "Mô tả một hoạt động định hướng nhân viên thông thường.",
    questionEn:
      "New employees _____ a comprehensive tour of the facilities as part of their orientation program.",
    questionVi:
      "Nhân viên mới _____ một chuyến tham quan toàn diện cơ sở vật chất như một phần của chương trình định hướng của họ.",
    options: [
      { option: "are given", isCorrect: true },
      { option: "give", isCorrect: false },
      { option: "were given", isCorrect: false },
      { option: "have given", isCorrect: false },
    ],
    explanationVi:
      "Câu bị động ở thì hiện tại đơn chỉ một quy trình định kỳ dành cho chủ ngữ số nhiều.",
    category: "Passive Voice",
  },
  {
    id: "B1-0156",
    topicId: "conjunctions",
    questionType: "structure",
    contextEn: "Explaining the benefit of a new software tool.",
    contextVi: "Giải thích lợi ích của một công cụ phần mềm mới.",
    questionEn:
      "The new project management software is efficient _____ user-friendly, making it popular among staff.",
    questionVi:
      "Phần mềm quản lý dự án mới hiệu quả _____ thân thiện với người dùng, khiến nó trở nên phổ biến trong nhân viên.",
    options: [
      { option: "and", isCorrect: true },
      { option: "but", isCorrect: false },
      { option: "or", isCorrect: false },
      { option: "yet", isCorrect: false },
    ],
    explanationVi:
      "Dùng liên từ 'and' để nối hai tính từ có cùng tính chất tích cực.",
    category: "Conjunctions",
  },
  {
    id: "B1-0157",
    topicId: "conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical scenario regarding a project finish.",
    contextVi:
      "Thảo luận về một tình huống giả định liên quan đến việc kết thúc dự án.",
    questionEn:
      "If we _____ the project by Friday, we could have taken the weekend off.",
    questionVi:
      "Nếu chúng ta _____ dự án trước thứ Sáu, chúng ta đã có thể nghỉ cuối tuần rồi.",
    options: [
      { option: "had finished", isCorrect: true },
      { option: "finished", isCorrect: false },
      { option: "have finished", isCorrect: false },
      { option: "would have finished", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 dùng để giả định một điều không có thật trong quá khứ.",
    category: "Conditionals",
  },
  {
    id: "B1-0158",
    topicId: "reported-speech",
    questionType: "grammar",
    contextEn: "Reporting what the manager requested.",
    contextVi: "Tường thuật lại những gì quản lý yêu cầu.",
    questionEn:
      "The manager requested that all staff members _____ their logs by the end of each day.",
    questionVi:
      "Quản lý đã yêu cầu tất cả nhân viên _____ nhật ký công việc của họ vào cuối mỗi ngày.",
    options: [
      { option: "update", isCorrect: true },
      { option: "updates", isCorrect: false },
      { option: "updating", isCorrect: false },
      { option: "updated", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (subjunctive) sau động từ 'request that... (should) + V nguyên mẫu'.",
    category: "Reported Speech",
  },
  {
    id: "B1-0159",
    topicId: "infinitives-gerunds",
    questionType: "grammar",
    contextEn: "Identifying a required action for professional growth.",
    contextVi: "Xác định một hành động cần thiết cho sự phát triển chuyên môn.",
    questionEn:
      "The company provides many opportunities for employees _____ their technical skills through workshops.",
    questionVi:
      "Công ty cung cấp nhiều cơ hội để nhân viên _____ kỹ năng kỹ thuật của họ thông qua các buổi hội thảo.",
    options: [
      { option: "to improve", isCorrect: true },
      { option: "improving", isCorrect: false },
      { option: "improve", isCorrect: false },
      { option: "improved", isCorrect: false },
    ],
    explanationVi: "Cấu trúc 'opportunity (for somebody) to do something'.",
    category: "Infinitives & Gerunds",
  },
  {
    id: "B1-0160",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying the quality of a coworker's output.",
    contextVi: "Xác định chất lượng đầu ra của một đồng nghiệp.",
    questionEn:
      "The board members were impressed by the _____ of the final report.",
    questionVi:
      "Các thành viên hội đồng quản trị đã bị ấn tượng bởi _____ của báo cáo cuối cùng.",
    options: [
      { option: "quality", isCorrect: true },
      { option: "qualify", isCorrect: false },
      { option: "qualitative", isCorrect: false },
      { option: "qualified", isCorrect: false },
    ],
    explanationVi: "Sau 'the' cần một danh từ (Noun).",
    category: "Word Forms",
  },
];

export default questions;
