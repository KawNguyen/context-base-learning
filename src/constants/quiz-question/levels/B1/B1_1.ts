import { Question } from "../../types";

export const questionsB1_1: Question[] = [
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
    questionEn:
      "The workshop will show you how to _____ a professional resume.",
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
    questionVi:
      "Chiến lược thứ hai _____ hơn nhiều so với chiến lược đầu tiên.",
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
    questionEn:
      "I _____ already _____ the quarterly report to the head office.",
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
];

export default questionsB1_1;
