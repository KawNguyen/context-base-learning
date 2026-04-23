import { Question } from "../../types";

export const questionsA1_2: Question[] = [
  {
    id: "A1-0101",
    questionEn: "This is the man _____ helped me.",
    questionVi: "Đây là người đàn ông _____ đã giúp đỡ tôi.",
    options: [
      {
        option: "who",
        isCorrect: true,
      },
      {
        option: "which",
        isCorrect: false,
      },
      {
        option: "whom",
        isCorrect: false,
      },
      {
        option: "whose",
        isCorrect: false,
      },
    ],
    explanationVi: "Mệnh đề quan hệ chỉ người làm chủ ngữ dùng 'who'.",
    category: "Relative Clauses",
  },
  {
    id: "A1-0102",
    questionEn: "I enjoy _____ books.",
    questionVi: "Tôi thích _____ việc đọc sách.",
    options: [
      {
        option: "reading",
        isCorrect: true,
      },
      {
        option: "read",
        isCorrect: false,
      },
      {
        option: "to read",
        isCorrect: false,
      },
      {
        option: "reads",
        isCorrect: false,
      },
    ],
    explanationVi: "Sau 'enjoy' là V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "A1-0103",
    questionEn: "It's _____ expensive car.",
    questionVi: "Đó là _____ một chiếc xe đắt tiền.",
    options: [
      {
        option: "an",
        isCorrect: true,
      },
      {
        option: "a",
        isCorrect: false,
      },
      {
        option: "the",
        isCorrect: false,
      },
      {
        option: "-",
        isCorrect: false,
      },
    ],
    explanationVi: "'Expensive' bắt đầu with nguyên âm.",
    category: "Comparatives",
  },
  {
    id: "A1-0104",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "A company receptionist greeting a visitor.",
    contextVi: "Nhân viên lễ tân công ty chào đón khách.",
    questionEn: "Ms. Lee _____ in the office every Monday.",
    questionVi: "Bà Lee _____ ở văn phòng vào mỗi thứ Hai.",
    options: [
      {
        option: "work",
        isCorrect: false,
      },
      {
        option: "works",
        isCorrect: true,
      },
      {
        option: "working",
        isCorrect: false,
      },
      {
        option: "worker",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại đơn với chủ ngữ số ít 'Ms. Lee' (cô ấy) -> thêm 's' vào động từ.",
    category: "Present Simple",
  },
  {
    id: "A1-0105",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "A simple instruction in an office manual.",
    contextVi: "Một hướng dẫn đơn giản trong sổ tay văn phòng.",
    questionEn: "Please _____ the document on the desk.",
    questionVi: "Vui lòng _____ tài liệu này trên bàn.",
    options: [
      {
        option: "put",
        isCorrect: true,
      },
      {
        option: "puts",
        isCorrect: false,
      },
      {
        option: "putting",
        isCorrect: false,
      },
      {
        option: "to put",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu (Bare Infinitive).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0106",
    topicId: "present-continuous",
    questionType: "structure",
    contextEn: "Describing a current activity in a meeting.",
    contextVi: "Mô tả một hoạt động đang diễn ra trong cuộc họp.",
    questionEn: "They _____ discussing the new budget right now.",
    questionVi: "Họ _____ đang thảo luận về ngân sách mới ngay bây giờ.",
    options: [
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: true,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại tiếp diễn với chủ ngữ 'They' dùng trợ động từ 'are'.",
    category: "Present Continuous",
  },
  {
    id: "A1-0107",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Talking about a completed task.",
    contextVi: "Nói về một công việc đã hoàn thành.",
    questionEn: "We _____ the report yesterday afternoon.",
    questionVi: "Chúng tôi _____ bản báo cáo vào chiều qua.",
    options: [
      {
        option: "finish",
        isCorrect: false,
      },
      {
        option: "finishes",
        isCorrect: false,
      },
      {
        option: "finished",
        isCorrect: true,
      },
      {
        option: "finishing",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'yesterday' dùng thì quá khứ đơn (V-ed).",
    category: "Past Simple",
  },
  {
    id: "A1-0108",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Describing a product feature simply.",
    contextVi: "Mô tả tính năng sản phẩm một cách đơn giản.",
    questionEn: "This computer _____ very fast.",
    questionVi: "Chiếc máy tính này _____ rất nhanh.",
    options: [
      {
        option: "is",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Sử dụng động từ 'to be' để nối chủ ngữ với tính từ (S-V-Adj).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0109",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A promise to a customer.",
    contextVi: "Một lời hứa với khách hàng.",
    questionEn: "I _____ call you back in ten minutes.",
    questionVi: "Tôi _____ sẽ gọi lại cho bạn sau mười phút.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
      {
        option: "does",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì tương lai đơn diễn tả một lời hứa hoặc quyết định tức thì.",
    category: "Future Simple",
  },
  {
    id: "A1-0110",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Stating a general company policy.",
    contextVi: "Nêu một chính sách chung của công ty.",
    questionEn: "The bank _____ at 5:00 PM every day.",
    questionVi: "Ngân hàng _____ lúc 5 giờ chiều mỗi ngày.",
    options: [
      {
        option: "close",
        isCorrect: false,
      },
      {
        option: "closes",
        isCorrect: true,
      },
      {
        option: "closing",
        isCorrect: false,
      },
      {
        option: "to close",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại đơn diễn tả sự việc lặp lại. 'The bank' là số ít nên thêm 's' vào động từ.",
    category: "Present Simple",
  },
  {
    id: "A1-0111",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Asking a coworker for help with location.",
    contextVi: "Hỏi đồng nghiệp về vị trí.",
    questionEn: "Where _____ your manager?",
    questionVi: "Quản lý của bạn _____ ở đâu?",
    options: [
      {
        option: "is",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi với 'to be', chủ ngữ 'your manager' là số ít nên dùng 'is'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0112",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Describing a new project's progress.",
    contextVi: "Mô tả tiến độ một dự án mới.",
    questionEn: "The team is _____ a new office building.",
    questionVi: "Đội ngũ _____ đang xây dựng một tòa nhà văn phòng mới.",
    options: [
      {
        option: "build",
        isCorrect: false,
      },
      {
        option: "builds",
        isCorrect: false,
      },
      {
        option: "building",
        isCorrect: true,
      },
      {
        option: "built",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc hiện tại tiếp diễn: be + V-ing.",
    category: "Present Continuous",
  },
  {
    id: "A1-0113",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Reporting an absence.",
    contextVi: "Báo cáo sự vắng mặt.",
    questionEn: "He _____ not come to work last Friday.",
    questionVi: "Anh ấy _____ đã không đến làm việc vào thứ Sáu tuần trước.",
    options: [
      {
        option: "do",
        isCorrect: false,
      },
      {
        option: "does",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: true,
      },
      {
        option: "is",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Phủ định thì quá khứ đơn (last Friday) dùng trợ động từ 'did'.",
    category: "Past Simple",
  },
  {
    id: "A1-0114",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Introducing a coworker.",
    contextVi: "Giới thiệu đồng nghiệp.",
    questionEn: "He _____ my new coworker from Canada.",
    questionVi: "Anh ấy _____ là đồng nghiệp mới của tôi đến từ Canada.",
    options: [
      {
        option: "is",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Động từ 'to be' làm động từ chính nối chủ ngữ và danh từ (S-V-N).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0115",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about someone's department.",
    contextVi: "Hỏi về phòng ban của ai đó.",
    questionEn: "_____ she work in the Sales Department?",
    questionVi: "Cô ấy _____ có làm việc ở phòng Kinh doanh không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: true,
      },
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì hiện tại đơn với chủ ngữ 'she' dùng trợ động từ 'Does'.",
    category: "Present Simple",
  },
  {
    id: "A1-0116",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Describing office equipment.",
    contextVi: "Mô tả thiết bị văn phòng.",
    questionEn: "The new printer is very _____.",
    questionVi: "Chiếc máy in mới này rất _____.",
    options: [
      {
        option: "quiet",
        isCorrect: true,
      },
      {
        option: "quietly",
        isCorrect: false,
      },
      {
        option: "quietness",
        isCorrect: false,
      },
      {
        option: "quieter",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cần một tính từ (Adj) sau trạng từ chỉ mức độ 'very' để bổ nghĩa cho chủ ngữ 'The new printer'.",
    category: "Word Forms",
  },
  {
    id: "A1-0117",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "Announcing a deadline.",
    contextVi: "Thông báo thời hạn chót.",
    questionEn: "The store _____ reopen next month.",
    questionVi: "Cửa hàng _____ sẽ mở cửa lại vào tháng tới.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'next month' dùng thì tương lai đơn.",
    category: "Future Simple",
  },
  {
    id: "A1-0118",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Talking about general facts about a job.",
    contextVi: "Nói về những sự thật chung về một công việc.",
    questionEn: "I _____ my emails every morning.",
    questionVi: "Tôi _____ kiểm tra email của mình mỗi sáng.",
    options: [
      {
        option: "check",
        isCorrect: true,
      },
      {
        option: "checks",
        isCorrect: false,
      },
      {
        option: "checking",
        isCorrect: false,
      },
      {
        option: "to check",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại đơn diễn tả thói quen. Chủ ngữ 'I' đi với động từ nguyên mẫu.",
    category: "Present Simple",
  },
  {
    id: "A1-0119",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Giving a simple advice to a visitor.",
    contextVi: "Đưa ra lời khuyên đơn giản cho khách thăm.",
    questionEn: "You can _____ coffee in the break room.",
    questionVi: "Bạn có thể _____ uống cà phê ở phòng nghỉ.",
    options: [
      {
        option: "have",
        isCorrect: true,
      },
      {
        option: "has",
        isCorrect: false,
      },
      {
        option: "having",
        isCorrect: false,
      },
      {
        option: "had",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Sau động từ khuyết thiếu 'can' dùng động từ nguyên mẫu (Bare Infinitive).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0120",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "A supervisor checking on a subordinate.",
    contextVi: "Người giám sát kiểm tra cấp dưới.",
    questionEn: "Are you _____ on the presentation?",
    questionVi: "Bạn đang _____ làm bài thuyết trình à?",
    options: [
      {
        option: "work",
        isCorrect: false,
      },
      {
        option: "works",
        isCorrect: false,
      },
      {
        option: "working",
        isCorrect: true,
      },
      {
        option: "worked",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi thì hiện tại tiếp diễn: Are you + V-ing?",
    category: "Present Continuous",
  },
  {
    id: "A1-0121",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Talking about historical company data.",
    contextVi: "Nói về dữ liệu lịch sử của công ty.",
    questionEn: "The company _____ this software last year.",
    questionVi: "Công ty _____ phần mềm này vào năm ngoái.",
    options: [
      {
        option: "buy",
        isCorrect: false,
      },
      {
        option: "buys",
        isCorrect: false,
      },
      {
        option: "bought",
        isCorrect: true,
      },
      {
        option: "buying",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dấu hiệu 'last year' dùng thì quá khứ đơn. 'Bought' là quá khứ của 'buy'.",
    category: "Past Simple",
  },
  {
    id: "A1-0122",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Directing someone to a room.",
    contextVi: "Hướng dẫn ai đó đến một phòng.",
    questionEn: "The meeting room is _____ the second floor.",
    questionVi: "Phòng họp ở _____ trên tầng hai.",
    options: [
      {
        option: "on",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng giới từ 'on' với các tầng của tòa nhà.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0123",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "A general statement about transportation.",
    contextVi: "Một câu nói chung về phương tiện đi lại.",
    questionEn: "Many employees _____ by train.",
    questionVi: "Nhiều nhân viên _____ đi làm bằng tàu hỏa.",
    options: [
      {
        option: "travel",
        isCorrect: true,
      },
      {
        option: "travels",
        isCorrect: false,
      },
      {
        option: "travelling",
        isCorrect: false,
      },
      {
        option: "to travel",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số nhiều 'Many employees'.",
    category: "Present Simple",
  },
  {
    id: "A1-0124",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Describing a coworker's personality.",
    contextVi: "Mô tả tính cách của một đồng nghiệp.",
    questionEn: "The new assistant is very _____.",
    questionVi: "Người trợ lý mới rất _____.",
    options: [
      {
        option: "helpful",
        isCorrect: true,
      },
      {
        option: "helpfully",
        isCorrect: false,
      },
      {
        option: "help",
        isCorrect: false,
      },
      {
        option: "helping",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cần một tính từ (Adj) sau 'is very' để bổ nghĩa cho chủ ngữ.",
    category: "Word Forms",
  },
  {
    id: "A1-0125",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A team lead assigning a task.",
    contextVi: "Trưởng nhóm giao việc.",
    questionEn: "We _____ meet in the conference room tomorrow.",
    questionVi: "Chúng ta _____ sẽ gặp nhau tại phòng hội nghị vào ngày mai.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'tomorrow' dùng thì tương lai đơn.",
    category: "Future Simple",
  },
  {
    id: "A1-0126",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about a daily routine.",
    contextVi: "Hỏi về thói quen hàng ngày.",
    questionEn: "Do you _____ coffee every morning?",
    questionVi: "Bạn có _____ uống cà phê mỗi sáng không?",
    options: [
      {
        option: "drink",
        isCorrect: true,
      },
      {
        option: "drinks",
        isCorrect: false,
      },
      {
        option: "drinking",
        isCorrect: false,
      },
      {
        option: "drank",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi thì hiện tại đơn: Do + S + V nguyên thể?",
    category: "Present Simple",
  },
  {
    id: "A1-0127",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Confirming presence in the office.",
    contextVi: "Xác nhận sự hiện diện tại văn phòng.",
    questionEn: "Is Mr. Kim _____ the office today?",
    questionVi: "Ông Kim có ở _____ văn phòng hôm nay không?",
    options: [
      {
        option: "in",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "on",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng giới từ 'in' để chỉ vị trí bên trong văn phòng.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0128",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Asking about a past business trip.",
    contextVi: "Hỏi về một chuyến công tác trong quá khứ.",
    questionEn: "_____ you visit the Tokyo office last month?",
    questionVi:
      "Bạn _____ có đến thăm văn phòng ở Tokyo vào tháng trước không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: false,
      },
      {
        option: "Did",
        isCorrect: true,
      },
      {
        option: "Was",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì quá khứ đơn (last month) với động từ thường 'visit' dùng trợ động từ 'Did'.",
    category: "Past Simple",
  },
  {
    id: "A1-0129",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "A team welcoming a new intern.",
    contextVi: "Một nhóm chào đón thực tập sinh mới.",
    questionEn: "Our team _____ a new intern today.",
    questionVi:
      "Nhóm của chúng tôi _____ chào đón một thực tập sinh mới vào hôm nay.",
    options: [
      {
        option: "welcome",
        isCorrect: false,
      },
      {
        option: "welcomes",
        isCorrect: true,
      },
      {
        option: "welcoming",
        isCorrect: false,
      },
      {
        option: "to welcome",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số ít 'Our team' (nó).",
    category: "Present Simple",
  },
  {
    id: "A1-0130",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Describing office furniture placement.",
    contextVi: "Mô tả vị trí đặt nội thất văn phòng.",
    questionEn: "The chairs are _____ the table.",
    questionVi: "Những chiếc ghế ở _____ quanh bàn.",
    options: [
      {
        option: "around",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "on",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Giới từ 'around' (xung quanh) phù hợp với bối cảnh vị trí các vật dụng.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0131",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Reporting an ongoing maintenance activity.",
    contextVi: "Báo cáo một hoạt động bảo trì đang diễn ra.",
    questionEn: "Technicians _____ repairing the elevator now.",
    questionVi: "Các kỹ thuật viên _____ đang sửa chữa thang máy bây giờ.",
    options: [
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: true,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Chủ ngữ số nhiều 'Technicians' đi với trợ động từ 'are' trong thì hiện tại tiếp diễn.",
    category: "Present Continuous",
  },
  {
    id: "A1-0132",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Recalling a meeting's start time.",
    contextVi: "Nhớ lại thời gian bắt đầu một cuộc họp.",
    questionEn: "The meeting _____ at 10 AM this morning.",
    questionVi: "Cuộc họp _____ lúc 10 giờ sáng nay.",
    options: [
      {
        option: "start",
        isCorrect: false,
      },
      {
        option: "starts",
        isCorrect: false,
      },
      {
        option: "started",
        isCorrect: true,
      },
      {
        option: "starting",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'this morning' (đã qua) dùng thì quá khứ đơn.",
    category: "Past Simple",
  },
  {
    id: "A1-0133",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Inquiring about office supplies availability.",
    contextVi: "Hỏi về sự sẵn có của các vật dụng văn phòng.",
    questionEn: "_____ there any pens in the drawer?",
    questionVi: "_____ Có chiếc bút nào trong ngăn kéo không?",
    options: [
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: true,
      },
      {
        option: "Am",
        isCorrect: false,
      },
      {
        option: "Be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cấu trúc 'There are' với danh từ số nhiều 'pens'. Trong câu hỏi 'Are' đảo lên đầu.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0134",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A manager scheduling a review.",
    contextVi: "Một quản lý lên lịch cho một buổi đánh giá.",
    questionEn: "We _____ review your proposal next week.",
    questionVi: "Chúng tôi _____ sẽ xem xét đề xuất của bạn vào tuần tới.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "do",
        isCorrect: false,
      },
      {
        option: "is",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'next week' dùng thì tương lai đơn.",
    category: "Future Simple",
  },
  {
    id: "A1-0135",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Describing a common work habit.",
    contextVi: "Mô tả một thói quen làm việc phổ biến.",
    questionEn: "She usually _____ notes during meetings.",
    questionVi: "Cô ấy thường _____ ghi chú trong các cuộc họp.",
    options: [
      {
        option: "take",
        isCorrect: false,
      },
      {
        option: "takes",
        isCorrect: true,
      },
      {
        option: "taking",
        isCorrect: false,
      },
      {
        option: "taken",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại đơn diễn tả thói quen. Chủ ngữ 'She' thêm 's' vào động từ.",
    category: "Present Simple",
  },
  {
    id: "A1-0136",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Stating office hours clearly.",
    contextVi: "Nêu rõ giờ làm việc của văn phòng.",
    questionEn: "The office is open _____ 9 AM to 6 PM.",
    questionVi: "Văn phòng mở cửa _____ từ 9 giờ sáng đến 6 giờ chiều.",
    options: [
      {
        option: "from",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
      {
        option: "for",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc 'from ... to ...' để chỉ khoảng thời gian.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0137",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Informing about a coworker's current task.",
    contextVi: "Thông báo về công việc hiện tại của một đồng nghiệp.",
    questionEn: "Mr. Lee is _____ a client on the phone.",
    questionVi: "Ông Lee _____ đang giúp đỡ một khách hàng qua điện thoại.",
    options: [
      {
        option: "help",
        isCorrect: false,
      },
      {
        option: "helps",
        isCorrect: false,
      },
      {
        option: "helping",
        isCorrect: true,
      },
      {
        option: "helped",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại tiếp diễn diễn tả hành động đang xảy ra: be + V-ing.",
    category: "Present Continuous",
  },
  {
    id: "A1-0138",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Confirming delivery of a package.",
    contextVi: "Xác nhận việc giao một gói hàng.",
    questionEn: "The courier _____ the package two hours ago.",
    questionVi: "Người chuyển phát _____ gói hàng cách đây hai giờ.",
    options: [
      {
        option: "deliver",
        isCorrect: false,
      },
      {
        option: "delivers",
        isCorrect: false,
      },
      {
        option: "delivered",
        isCorrect: true,
      },
      {
        option: "delivering",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'two hours ago' dùng thì quá khứ đơn.",
    category: "Past Simple",
  },
  {
    id: "A1-0139",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Identifying a coworker's equipment.",
    contextVi: "Xác định thiết bị của một đồng nghiệp.",
    questionEn: "This laptop belongs _____ the IT department.",
    questionVi:
      "Chiếc máy tính xách tay này thuộc _____ phòng Công nghệ thông tin.",
    options: [
      {
        option: "to",
        isCorrect: true,
      },
      {
        option: "for",
        isCorrect: false,
      },
      {
        option: "with",
        isCorrect: false,
      },
      {
        option: "at",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cấu trúc 'belong to someone/something' (thuộc về ai/cái gì).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0140",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about a coworker's travel frequency.",
    contextVi: "Hỏi về tần suất đi công tác của một đồng nghiệp.",
    questionEn: "_____ Mr. Kim travel for business often?",
    questionVi: "Ông Kim _____ có thường xuyên đi công tác không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: true,
      },
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì hiện tại đơn với chủ ngữ số ít 'Mr. Kim' dùng trợ động từ 'Does'.",
    category: "Present Simple",
  },
  {
    id: "A1-0141",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Describing a coworker's performance.",
    contextVi: "Mô tả hiệu quả làm việc của một đồng nghiệp.",
    questionEn: "His work is always very _____.",
    questionVi: "Công việc của anh ấy luôn rất _____.",
    options: [
      {
        option: "neat",
        isCorrect: true,
      },
      {
        option: "neatly",
        isCorrect: false,
      },
      {
        option: "neatness",
        isCorrect: false,
      },
      {
        option: "neater",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cần một tính từ (Adj) sau 'is very' để bổ nghĩa cho danh từ 'work'.",
    category: "Word Forms",
  },
  {
    id: "A1-0142",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "Stating a planned event.",
    contextVi: "Nêu một sự kiện đã lên kế hoạch.",
    questionEn: "The workshop _____ begin at 2:00 PM.",
    questionVi: "Buổi hội thảo _____ sẽ bắt đầu lúc 2 giờ chiều.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "has",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì tương lai đơn diễn tả một sự kiện sẽ diễn ra.",
    category: "Future Simple",
  },
  {
    id: "A1-0143",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Talking about coffee preference in the office.",
    contextVi: "Nói về sở thích cà phê tại văn phòng.",
    questionEn: "Most employees _____ sugar in their coffee.",
    questionVi: "Hầu hết các nhân viên _____ đường vào cà phê của họ.",
    options: [
      {
        option: "like",
        isCorrect: true,
      },
      {
        option: "likes",
        isCorrect: false,
      },
      {
        option: "liking",
        isCorrect: false,
      },
      {
        option: "liked",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số nhiều 'Most employees'.",
    category: "Present Simple",
  },
  {
    id: "A1-0144",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Offering a choice to a client.",
    contextVi: "Đưa ra sự lựa chọn cho khách hàng.",
    questionEn: "Do you want tea _____ coffee?",
    questionVi: "Bạn muốn dùng trà _____ hay cà phê?",
    options: [
      {
        option: "or",
        isCorrect: true,
      },
      {
        option: "but",
        isCorrect: false,
      },
      {
        option: "and",
        isCorrect: false,
      },
      {
        option: "so",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng liên từ 'or' để đưa ra sự lựa chọn.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0145",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Ordering office supplies current progress.",
    contextVi: "Tiến độ hiện tại của việc đặt đồ dùng văn phòng.",
    questionEn: "We are _____ new chairs for the lobby.",
    questionVi: "Chúng tôi đang _____ đặt những chiếc ghế mới cho sảnh chờ.",
    options: [
      {
        option: "order",
        isCorrect: false,
      },
      {
        option: "orders",
        isCorrect: false,
      },
      {
        option: "ordering",
        isCorrect: true,
      },
      {
        option: "ordered",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc hiện tại tiếp diễn: be + V-ing.",
    category: "Present Continuous",
  },
  {
    id: "A1-0146",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Confirming a past attendance.",
    contextVi: "Xác nhận sự tham gia trong quá khứ.",
    questionEn: "The CEO _____ the conference last week.",
    questionVi: "Vị CEO _____ đã tham dự hội nghị vào tuần trước.",
    options: [
      {
        option: "attend",
        isCorrect: false,
      },
      {
        option: "attends",
        isCorrect: false,
      },
      {
        option: "attended",
        isCorrect: true,
      },
      {
        option: "attending",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'last week' dùng thì quá khứ đơn.",
    category: "Past Simple",
  },
  {
    id: "A1-0147",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Guiding a guest to their seat.",
    contextVi: "Hướng dẫn khách đến chỗ ngồi.",
    questionEn: "Please sit _____ the guest chair.",
    questionVi: "Vui lòng ngồi _____ vào chiếc ghế dành cho khách.",
    options: [
      {
        option: "in",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "on",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dùng giới từ 'in' với 'chair' khi ghế có tay vịn hoặc mang tính bao bọc, hoặc 'on' nếu là bề mặt phẳng. Trong ngữ cảnh văn phòng, 'in' (hoặc 'on') đều có thể dùng, nhưng 'in' thường dùng cho ghế sofa/armchair.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0148",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Acknowledging a team's hard work.",
    contextVi: "Ghi nhận sự làm việc chăm chỉ của một nhóm.",
    questionEn: "Everyone _____ very hard during the project.",
    questionVi: "Mọi người _____ rất chăm chỉ trong suốt dự án.",
    options: [
      {
        option: "work",
        isCorrect: false,
      },
      {
        option: "works",
        isCorrect: true,
      },
      {
        option: "working",
        isCorrect: false,
      },
      {
        option: "worked",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Chủ ngữ 'Everyone' luôn đi với động từ số ít trong thì hiện tại đơn.",
    category: "Present Simple",
  },
  {
    id: "A1-0149",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Giving positive feedback on a design.",
    contextVi: "Đưa ra phản hồi tích cực về một bản thiết kế.",
    questionEn: "The website design is very _____.",
    questionVi: "Bản thiết kế trang web rất _____.",
    options: [
      {
        option: "professional",
        isCorrect: true,
      },
      {
        option: "professionally",
        isCorrect: false,
      },
      {
        option: "profession",
        isCorrect: false,
      },
      {
        option: "professionalism",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cần một tính từ (Adj) sau 'is very' để bổ nghĩa cho danh từ 'design'.",
    category: "Word Forms",
  },
  {
    id: "A1-0150",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A reminder about an upcoming lunch.",
    contextVi: "Lời nhắc về một bữa trưa sắp tới.",
    questionEn: "We _____ have lunch at 12:30 PM.",
    questionVi: "Chúng ta _____ sẽ ăn trưa lúc 12 giờ 30 phút.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì tương lai đơn diễn tả hành động sẽ diễn ra.",
    category: "Future Simple",
  },
  {
    id: "A1-0151",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about a coworker's language skills.",
    contextVi: "Hỏi về kỹ năng ngôn ngữ của một đồng nghiệp.",
    questionEn: "_____ she speak French fluently?",
    questionVi: "Cô ấy _____ có nói tiếng Pháp trôi chảy không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: true,
      },
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi thì hiện tại đơn cho chủ ngữ 'she' dùng 'Does'.",
    category: "Present Simple",
  },
  {
    id: "A1-0152",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Identifying office supply location.",
    contextVi: "Xác định vị trí của đồ dùng văn phòng.",
    questionEn: "The staples are _____ top of the cabinet.",
    questionVi: "Những chiếc ghim bấm ở _____ bên trên nóc tủ.",
    options: [
      {
        option: "on",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc 'on top of something' (ở trên đỉnh/nóc cái gì).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0153",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Asking about a past project's completion.",
    contextVi: "Hỏi về việc hoàn thành một dự án trong quá khứ.",
    questionEn: "_____ they finish the project on time?",
    questionVi: "Họ _____ có hoàn thành dự án đúng hạn không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: false,
      },
      {
        option: "Did",
        isCorrect: true,
      },
      {
        option: "Were",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì quá khứ đơn với động từ thường 'finish' dùng trợ động từ 'Did'.",
    category: "Past Simple",
  },
  {
    id: "A1-0154",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "A team lead describing their work schedule.",
    contextVi: "Trưởng nhóm mô tả lịch trình làm việc của họ.",
    questionEn: "I _____ in the office on weekends.",
    questionVi: "Tôi _____ không bao giờ làm việc ở văn phòng vào cuối tuần.",
    options: [
      {
        option: "never work",
        isCorrect: true,
      },
      {
        option: "work never",
        isCorrect: false,
      },
      {
        option: "don't never work",
        isCorrect: false,
      },
      {
        option: "never works",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Trạng từ tần suất 'never' đứng trước động từ thường 'work' trong thì hiện tại đơn.",
    category: "Present Simple",
  },
  {
    id: "A1-0155",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Identifying the color of a company asset.",
    contextVi: "Xác định màu sắc của tài sản công ty.",
    questionEn: "The corporate logo is _____.",
    questionVi: "Logo của tập đoàn _____ màu xanh dương và trắng.",
    options: [
      {
        option: "blue and white",
        isCorrect: true,
      },
      {
        option: "a blue and white",
        isCorrect: false,
      },
      {
        option: "the blue and white",
        isCorrect: false,
      },
      {
        option: "blues and whites",
        isCorrect: false,
      },
    ],
    explanationVi: "Sử dụng tính từ chỉ màu sắc sau động từ 'to be'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0156",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "An update on an ongoing training session.",
    contextVi: "Cập nhật về một buổi đào tạo đang diễn ra.",
    questionEn: "Employees _____ attending the safety workshop now.",
    questionVi:
      "Các nhân viên _____ đang tham dự buổi hội thảo an toàn bây giờ.",
    options: [
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: true,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Chủ ngữ số nhiều 'Employees' đi với 'are' trong thì hiện tại tiếp diễn.",
    category: "Present Continuous",
  },
  {
    id: "A1-0157",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Discussing the date of a past contract signing.",
    contextVi: "Thảo luận về ngày ký kết hợp đồng trong quá khứ.",
    questionEn: "The manager _____ the contract yesterday morning.",
    questionVi: "Người quản lý _____ đã ký hợp đồng vào sáng qua.",
    options: [
      {
        option: "sign",
        isCorrect: false,
      },
      {
        option: "signs",
        isCorrect: false,
      },
      {
        option: "signed",
        isCorrect: true,
      },
      {
        option: "signing",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'yesterday' dùng thì quá khứ đơn (V-ed).",
    category: "Past Simple",
  },
  {
    id: "A1-0158",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Pointing out a location in the building.",
    contextVi: "Chỉ ra một vị trí trong tòa nhà.",
    questionEn: "The cafeteria is _____ the first floor.",
    questionVi: "Nhà ăn ở _____ trên tầng một.",
    options: [
      {
        option: "on",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng giới từ 'on' với các tầng của tòa nhà.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0159",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A technician promising a repair completion.",
    contextVi: "Kỹ thuật viên hứa sẽ hoàn thành việc sửa chữa.",
    questionEn: "I _____ fix the printer by tomorrow.",
    questionVi: "Tôi _____ sẽ sửa xong máy in trước ngày mai.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "do",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì tương lai đơn diễn tả lời hứa hoặc dự đoán.",
    category: "Future Simple",
  },
  {
    id: "A1-0160",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Talking about someone's everyday work task.",
    contextVi: "Nói về công việc hàng ngày của ai đó.",
    questionEn: "Ms. Garcia _____ the office supplies weekly.",
    questionVi: "Bà Garcia _____ đặt đồ dùng văn phòng hàng tuần.",
    options: [
      {
        option: "order",
        isCorrect: false,
      },
      {
        option: "orders",
        isCorrect: true,
      },
      {
        option: "ordering",
        isCorrect: false,
      },
      {
        option: "to order",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số ít 'Ms. Garcia'.",
    category: "Present Simple",
  },
  {
    id: "A1-0161",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Confirming help is available.",
    contextVi: "Xác nhận có sự giúp đỡ.",
    questionEn: "_____ there any assistants available?",
    questionVi: "_____ Có trợ lý nào đang sẵn sàng không?",
    options: [
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: true,
      },
      {
        option: "Am",
        isCorrect: false,
      },
      {
        option: "Be",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi 'Are there' với danh từ số nhiều 'assistants'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0162",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Informing about a team's current work.",
    contextVi: "Thông báo về công việc hiện tại của một nhóm.",
    questionEn: "Our team is _____ on a new proposal.",
    questionVi: "Nhóm của chúng tôi _____ đang làm việc trên một đề xuất mới.",
    options: [
      {
        option: "work",
        isCorrect: false,
      },
      {
        option: "works",
        isCorrect: false,
      },
      {
        option: "working",
        isCorrect: true,
      },
      {
        option: "worked",
        isCorrect: false,
      },
    ],
    explanationVi: "Hiện tại tiếp diễn: be + V-ing.",
    category: "Present Continuous",
  },
  {
    id: "A1-0163",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Reporting a past shipment status.",
    contextVi: "Báo cáo tình trạng một lô hàng trong quá khứ.",
    questionEn: "We _____ the shipment two days ago.",
    questionVi: "Chúng tôi _____ đã gửi lô hàng đi cách đây hai ngày.",
    options: [
      {
        option: "send",
        isCorrect: false,
      },
      {
        option: "sends",
        isCorrect: false,
      },
      {
        option: "sent",
        isCorrect: true,
      },
      {
        option: "sending",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dấu hiệu 'two days ago' dùng thì quá khứ đơn. 'Sent' là quá khứ của 'send'.",
    category: "Past Simple",
  },
  {
    id: "A1-0164",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Ordering some coffee for a visitor.",
    contextVi: "Đặt cà phê cho khách.",
    questionEn: "Please _____ some coffee for the guest.",
    questionVi: "Vui lòng _____ chút cà phê cho khách.",
    options: [
      {
        option: "get",
        isCorrect: true,
      },
      {
        option: "gets",
        isCorrect: false,
      },
      {
        option: "getting",
        isCorrect: false,
      },
      {
        option: "to get",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0165",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about someone's job location.",
    contextVi: "Hỏi về nơi làm việc của ai đó.",
    questionEn: "_____ your boss work in this building?",
    questionVi: "Sếp của bạn _____ có làm việc trong tòa nhà này không?",
    options: [
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: true,
      },
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì hiện tại đơn với chủ ngữ số ít 'your boss' dùng 'Does'.",
    category: "Present Simple",
  },
  {
    id: "A1-0166",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Evaluating a coworker's typing skill.",
    contextVi: "Đánh giá kỹ năng đánh máy của đồng nghiệp.",
    questionEn: "She is a very _____ typist.",
    questionVi: "Cô ấy là một người đánh máy rất _____.",
    options: [
      {
        option: "fast",
        isCorrect: true,
      },
      {
        option: "fastly",
        isCorrect: false,
      },
      {
        option: "fastness",
        isCorrect: false,
      },
      {
        option: "fastest",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dùng tính từ 'fast' để bổ nghĩa cho danh từ 'typist'. (Lưu ý: 'fastly' không tồn tại, 'fast' vừa là tính từ vừa là trạng từ).",
    category: "Word Forms",
  },
  {
    id: "A1-0167",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "Confirming an upcoming appointment.",
    contextVi: "Xác nhận một cuộc hẹn sắp tới.",
    questionEn: "The doctor _____ see you at 3:00 PM.",
    questionVi: "Bác sĩ _____ sẽ gặp bạn lúc 3 giờ chiều.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "has",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì tương lai đơn diễn tả sự việc sẽ xảy ra.",
    category: "Future Simple",
  },
  {
    id: "A1-0168",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Stating a general preference for communication.",
    contextVi: "Nêu sở thích chung về cách thức giao tiếp.",
    questionEn: "Many clients _____ email over phone calls.",
    questionVi: "Nhiều khách hàng _____ thích email hơn là gọi điện.",
    options: [
      {
        option: "prefer",
        isCorrect: true,
      },
      {
        option: "prefers",
        isCorrect: false,
      },
      {
        option: "preferring",
        isCorrect: false,
      },
      {
        option: "to prefer",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số nhiều 'Many clients'.",
    category: "Present Simple",
  },
  {
    id: "A1-0169",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Asking about a coworker's location internally.",
    contextVi: "Hỏi về vị trí của một đồng nghiệp trong nội bộ.",
    questionEn: "Is Mr. Jones _____ the conference room?",
    questionVi: "Ông Jones có đang ở _____ phòng hội nghị không?",
    options: [
      {
        option: "in",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "on",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Giới từ 'in' chỉ vị trí bên trong một căn phòng.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0170",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Update on a new software installation.",
    contextVi: "Cập nhật về việc cài đặt phần mềm mới.",
    questionEn: "The IT guy is _____ the new program now.",
    questionVi: "Anh chàng CNTT _____ đang cài đặt chương trình mới bây giờ.",
    options: [
      {
        option: "install",
        isCorrect: false,
      },
      {
        option: "installs",
        isCorrect: false,
      },
      {
        option: "installing",
        isCorrect: true,
      },
      {
        option: "installed",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'now' dùng thì hiện tại tiếp diễn.",
    category: "Present Continuous",
  },
  {
    id: "A1-0171",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Talking about someone's previous job role.",
    contextVi: "Nói về vai trò công việc trước đây của ai đó.",
    questionEn: "Ms. Tanaka _____ a sales manager five years ago.",
    questionVi:
      "Bà Tanaka _____ đã là một quản lý kinh doanh cách đây năm năm.",
    options: [
      {
        option: "was",
        isCorrect: true,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "were",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Quá khứ của 'to be' với chủ ngữ số ít 'Ms. Tanaka' là 'was'.",
    category: "Past Simple",
  },
  {
    id: "A1-0172",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Describing a coworker's current state.",
    contextVi: "Mô tả trạng thái hiện tại của đồng nghiệp.",
    questionEn: "He is always very _____ with his work.",
    questionVi: "Anh ấy luôn luôn rất _____ với công việc của mình.",
    options: [
      {
        option: "busy",
        isCorrect: true,
      },
      {
        option: "busily",
        isCorrect: false,
      },
      {
        option: "businness",
        isCorrect: false,
      },
      {
        option: "busier",
        isCorrect: false,
      },
    ],
    explanationVi: "Cần một tính từ (Adj) sau 'is very' để miêu tả chủ ngữ.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0173",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Stating office cleanliness status.",
    contextVi: "Nêu tình trạng vệ sinh văn phòng.",
    questionEn: "Our janitor _____ the office every night.",
    questionVi:
      "Nhân viên vệ sinh của chúng tôi _____ dọn dẹp văn phòng mỗi tối.",
    options: [
      {
        option: "clean",
        isCorrect: false,
      },
      {
        option: "cleans",
        isCorrect: true,
      },
      {
        option: "cleaning",
        isCorrect: false,
      },
      {
        option: "to clean",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì hiện tại đơn với chủ ngữ số ít 'Our janitor' (người dọn dẹp).",
    category: "Present Simple",
  },
  {
    id: "A1-0174",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Describing the efficiency of a service.",
    contextVi: "Mô tả tính hiệu quả của một dịch vụ.",
    questionEn: "The delivery service is very _____.",
    questionVi: "Dịch vụ giao hàng rất _____.",
    options: [
      {
        option: "reliable",
        isCorrect: true,
      },
      {
        option: "reliably",
        isCorrect: false,
      },
      {
        option: "reliability",
        isCorrect: false,
      },
      {
        option: "relied",
        isCorrect: false,
      },
    ],
    explanationVi: "Cần một tính từ (Adj) bổ nghĩa cho danh từ 'service'.",
    category: "Word Forms",
  },
  {
    id: "A1-0175",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A promise to send a document soon.",
    contextVi: "Lời hứa sẽ gửi tài liệu sớm.",
    questionEn: "I _____ send the file later today.",
    questionVi: "Tôi _____ sẽ gửi tệp tin đó vào cuối ngày hôm nay.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì tương lai đơn diễn tả ý định/lời hứa.",
    category: "Future Simple",
  },
  {
    id: "A1-0176",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Asking about a colleague's current project involvement.",
    contextVi: "Hỏi về sự tham gia dự án của một đồng nghiệp.",
    questionEn: "_____ they work on the same team?",
    questionVi: "_____ Họ có làm việc trong cùng một nhóm không?",
    options: [
      {
        option: "Do",
        isCorrect: true,
      },
      {
        option: "Does",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
      {
        option: "Is",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì hiện tại đơn với chủ ngữ số nhiều 'they' dùng 'Do'.",
    category: "Present Simple",
  },
  {
    id: "A1-0177",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Finding a specific floor in a building.",
    contextVi: "Tìm một tầng cụ thể trong tòa nhà.",
    questionEn: "The HR office is _____ the third floor.",
    questionVi: "Phòng Nhân sự ở _____ trên tầng ba.",
    options: [
      {
        option: "on",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng giới từ 'on' với tầng của tòa nhà.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0178",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Asking about someone's past location.",
    contextVi: "Hỏi về vị trí cũ của ai đó.",
    questionEn: "_____ you in the meeting room ten minutes ago?",
    questionVi: "Bạn _____ có ở trong phòng họp cách đây mười phút không?",
    options: [
      {
        option: "Was",
        isCorrect: false,
      },
      {
        option: "Were",
        isCorrect: true,
      },
      {
        option: "Did",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi với 'to be' ở quá khứ: Were + you...?",
    category: "Past Simple",
  },
  {
    id: "A1-0179",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A manager announcing a future team event.",
    contextVi:
      "Người quản lý thông báo về một sự kiện của nhóm trong tương lai.",
    questionEn: "We _____ have a team lunch next Friday.",
    questionVi: "Chúng tôi _____ sẽ có một bữa trưa toàn nhóm vào thứ Sáu tới.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "do",
        isCorrect: false,
      },
      {
        option: "have",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dùng 'will' để diễn tả một kế hoạch hoặc sự việc trong tương lai.",
    category: "Future Simple",
  },
  {
    id: "A1-0180",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Explaining a company's standard policy.",
    contextVi: "Giải thích chính sách tiêu chuẩn của công ty.",
    questionEn: "The company _____ flexible working hours.",
    questionVi: "Công ty _____ cung cấp giờ làm việc linh hoạt.",
    options: [
      {
        option: "offer",
        isCorrect: false,
      },
      {
        option: "offers",
        isCorrect: true,
      },
      {
        option: "offering",
        isCorrect: false,
      },
      {
        option: "to offer",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số ít 'The company'.",
    category: "Present Simple",
  },
  {
    id: "A1-0181",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Locating the elevators in the lobby.",
    contextVi: "Xác định vị trí thang máy ở sảnh.",
    questionEn: "The elevators are _____ the end of the hallway.",
    questionVi: "Thang máy ở _____ cuối hành lang.",
    options: [
      {
        option: "at",
        isCorrect: true,
      },
      {
        option: "on",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng giới từ 'at' để chỉ một điểm cụ thể (the end of...).",
    category: "Sentence Structure",
  },
  {
    id: "A1-0182",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Talking about someone's current whereabouts.",
    contextVi: "Nói về nơi ở hiện tại của ai đó.",
    questionEn: "She is _____ to a customer on the phone.",
    questionVi: "Cô ấy _____ đang nói chuyện với khách hàng qua điện thoại.",
    options: [
      {
        option: "talk",
        isCorrect: false,
      },
      {
        option: "talks",
        isCorrect: false,
      },
      {
        option: "talking",
        isCorrect: true,
      },
      {
        option: "talked",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc thì hiện tại tiếp diễn: be + V-ing.",
    category: "Present Continuous",
  },
  {
    id: "A1-0183",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Mentioning a past training event.",
    contextVi: "Nhắc đến một sự kiện đào tạo trong quá khứ.",
    questionEn: "They _____ the orientation session last week.",
    questionVi: "Họ _____ đã tham gia buổi định hướng vào tuần trước.",
    options: [
      {
        option: "attend",
        isCorrect: false,
      },
      {
        option: "attends",
        isCorrect: false,
      },
      {
        option: "attended",
        isCorrect: true,
      },
      {
        option: "attending",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'last week' dùng thì quá khứ đơn.",
    category: "Past Simple",
  },
  {
    id: "A1-0184",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Commending a staff member's attitude.",
    contextVi: "Khen ngợi thái độ của một nhân viên.",
    questionEn: "He is a very _____ employee.",
    questionVi: "Anh ấy là một nhân viên rất _____.",
    options: [
      {
        option: "helpful",
        isCorrect: true,
      },
      {
        option: "help",
        isCorrect: false,
      },
      {
        option: "helpfully",
        isCorrect: false,
      },
      {
        option: "helping",
        isCorrect: false,
      },
    ],
    explanationVi: "Cần một tính từ (Adj) đứng trước danh từ 'employee'.",
    category: "Word Forms",
  },
  {
    id: "A1-0185",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Checking if someone has the key.",
    contextVi: "Kiểm tra xem ai đó có chìa khóa không.",
    questionEn: "_____ you have the key to the supply room?",
    questionVi: "Bạn _____ có chìa khóa phòng kho không?",
    options: [
      {
        option: "Do",
        isCorrect: true,
      },
      {
        option: "Does",
        isCorrect: false,
      },
      {
        option: "Are",
        isCorrect: false,
      },
      {
        option: "Have",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Câu hỏi thì hiện tại đơn với chủ ngữ 'you' và động từ thường 'have' dùng 'Do'.",
    category: "Present Simple",
  },
  {
    id: "A1-0186",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Requesting to see a document.",
    contextVi: "Yêu cầu xem một tài liệu.",
    questionEn: "Please show _____ the latest report.",
    questionVi: "Vui lòng cho _____ xem bản báo cáo mới nhất.",
    options: [
      {
        option: "me",
        isCorrect: true,
      },
      {
        option: "I",
        isCorrect: false,
      },
      {
        option: "my",
        isCorrect: false,
      },
      {
        option: "mine",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng đại từ tân ngữ 'me' sau động từ 'show'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0187",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Describing a current meeting room activity.",
    contextVi: "Mô tả hoạt động hiện tại trong phòng họp.",
    questionEn: "We _____ waiting for the CEO to arrive.",
    questionVi: "Chúng tôi _____ đang đợi CEO đến.",
    options: [
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: true,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại tiếp diễn với 'We' đi kèm 'are'.",
    category: "Present Continuous",
  },
  {
    id: "A1-0188",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Reporting a past task completion.",
    contextVi: "Báo cáo việc hoàn thành một nhiệm vụ trong quá khứ.",
    questionEn: "John _____ the report on his desk yesterday.",
    questionVi:
      "John _____ đã để bản báo cáo trên bàn làm việc của mình vào ngày hôm qua.",
    options: [
      {
        option: "leave",
        isCorrect: false,
      },
      {
        option: "leaves",
        isCorrect: false,
      },
      {
        option: "left",
        isCorrect: true,
      },
      {
        option: "leaving",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Dấu hiệu 'yesterday' dùng thì quá khứ đơn. 'Left' là quá khứ của 'leave'.",
    category: "Past Simple",
  },
  {
    id: "A1-0189",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "A staff member promising to call back.",
    contextVi: "Một nhân viên hứa sẽ gọi lại.",
    questionEn: "I _____ call you back in five minutes.",
    questionVi: "Tôi _____ sẽ gọi lại cho bạn sau năm phút nữa.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "does",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Thì tương lai đơn diễn tả một hành động sẽ thực hiện ngay lập tức hoặc một lời hứa.",
    category: "Future Simple",
  },
  {
    id: "A1-0190",
    topicId: "present-simple",
    questionType: "structure",
    contextEn: "Describing a colleague's daily ritual.",
    contextVi: "Mô tả thói quen hàng ngày của một đồng nghiệp.",
    questionEn: "He usually _____ coffee before the meeting.",
    questionVi: "Anh ấy thường _____ uống cà phê trước cuộc họp.",
    options: [
      {
        option: "drink",
        isCorrect: false,
      },
      {
        option: "drinks",
        isCorrect: true,
      },
      {
        option: "drinking",
        isCorrect: false,
      },
      {
        option: "to drink",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại đơn với chủ ngữ số ít 'He'.",
    category: "Present Simple",
  },
  {
    id: "A1-0191",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Asking about the existence of a facility.",
    contextVi: "Hỏi về sự hiện diện của một cơ sở vật chất.",
    questionEn: "_____ there a parking lot near the office?",
    questionVi: "_____ có bãi đậu xe nào gần văn phòng không?",
    options: [
      {
        option: "Is",
        isCorrect: true,
      },
      {
        option: "Are",
        isCorrect: false,
      },
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Does",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng 'Is there' với danh từ số ít 'a parking lot'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0192",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Informing about a technical issue being handled.",
    contextVi: "Thông báo về việc đang xử lý một sự cố kỹ thuật.",
    questionEn: "The technician _____ fixing the internet right now.",
    questionVi: "Kỹ thuật viên _____ đang sửa mạng internet ngay bây giờ.",
    options: [
      {
        option: "is",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
    ],
    explanationVi: "Thì hiện tại tiếp diễn với chủ ngữ số ít 'The technician'.",
    category: "Present Continuous",
  },
  {
    id: "A1-0193",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Referring to a past arrival.",
    contextVi: "Nhắc đến việc đã đi đến/đến nơi trong quá khứ.",
    questionEn: "Ms. Green _____ at the airport at 8:00 AM.",
    questionVi: "Bà Green _____ đã đến sân bay lúc 8 giờ sáng.",
    options: [
      {
        option: "arrive",
        isCorrect: false,
      },
      {
        option: "arrives",
        isCorrect: false,
      },
      {
        option: "arrived",
        isCorrect: true,
      },
      {
        option: "arriving",
        isCorrect: false,
      },
    ],
    explanationVi: "Dùng thì quá khứ đơn để kể lại một sự việc đã kết thúc.",
    category: "Past Simple",
  },
  {
    id: "A1-0194",
    topicId: "basic-sentence-patterns",
    questionType: "word-form",
    contextEn: "Describing a new project's difficulty level.",
    contextVi: "Mô tả mức độ khó của một dự án mới.",
    questionEn: "This new software is very _____ to use.",
    questionVi: "Phần mềm mới này rất _____ để sử dụng.",
    options: [
      {
        option: "easy",
        isCorrect: true,
      },
      {
        option: "easily",
        isCorrect: false,
      },
      {
        option: "easiness",
        isCorrect: false,
      },
      {
        option: "easiest",
        isCorrect: false,
      },
    ],
    explanationVi: "Cần một tính từ (Adj) sau 'is very'.",
    category: "Word Forms",
  },
  {
    id: "A1-0195",
    topicId: "future-simple",
    questionType: "grammar",
    contextEn: "An update on an upcoming shipment.",
    contextVi: "Cập nhật về một lô hàng sắp tới.",
    questionEn: "They _____ deliver the new computers tomorrow.",
    questionVi: "Họ _____ sẽ giao máy tính mới vào ngày mai.",
    options: [
      {
        option: "will",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "do",
        isCorrect: false,
      },
      {
        option: "did",
        isCorrect: false,
      },
    ],
    explanationVi: "Dấu hiệu 'tomorrow' dùng thì tương lai đơn (will + V).",
    category: "Future Simple",
  },
  {
    id: "A1-0196",
    topicId: "present-simple",
    questionType: "grammar",
    contextEn: "Checking someone's language skills.",
    contextVi: "Kiểm tra kỹ năng ngôn ngữ của ai đó.",
    questionEn: "_____ she speak Spanish?",
    questionVi: "Cô ấy _____ có nói tiếng Tây Ban Nha không?",
    options: [
      {
        option: "Does",
        isCorrect: true,
      },
      {
        option: "Do",
        isCorrect: false,
      },
      {
        option: "Is",
        isCorrect: false,
      },
      {
        option: "Has",
        isCorrect: false,
      },
    ],
    explanationVi: "Câu hỏi thì hiện tại đơn với chủ ngữ số ít 'she'.",
    category: "Present Simple",
  },
  {
    id: "A1-0197",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Offering a document to someone.",
    contextVi: "Đưa một tài liệu cho ai đó.",
    questionEn: "Here _____ the invoice you requested.",
    questionVi: "Đây _____ là hóa đơn mà bạn đã yêu cầu.",
    options: [
      {
        option: "is",
        isCorrect: true,
      },
      {
        option: "are",
        isCorrect: false,
      },
      {
        option: "be",
        isCorrect: false,
      },
      {
        option: "am",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cấu trúc 'Here is/are...'. Ở đây 'the invoice' là số ít nên dùng 'is'.",
    category: "Sentence Structure",
  },
  {
    id: "A1-0198",
    topicId: "present-continuous",
    questionType: "grammar",
    contextEn: "Asking about someone's current action.",
    contextVi: "Hỏi về hành động hiện tại của ai đó.",
    questionEn: "What _____ you doing right now?",
    questionVi: "Bạn _____ đang làm gì ngay bây giờ vậy?",
    options: [
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "are",
        isCorrect: true,
      },
      {
        option: "am",
        isCorrect: false,
      },
      {
        option: "do",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Cấu trúc câu hỏi thì hiện tại tiếp diễn: Wh- + be + S + V-ing?",
    category: "Present Continuous",
  },
  {
    id: "A1-0199",
    topicId: "past-simple",
    questionType: "grammar",
    contextEn: "Reporting a negative past event.",
    contextVi: "Báo cáo một sự kiện tiêu chuẩn không xảy ra trong quá khứ.",
    questionEn: "He _____ not finish the project on time.",
    questionVi: "Anh ấy _____ đã không hoàn thành dự án đúng hạn.",
    options: [
      {
        option: "did",
        isCorrect: true,
      },
      {
        option: "does",
        isCorrect: false,
      },
      {
        option: "is",
        isCorrect: false,
      },
      {
        option: "was",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Phủ định thì quá khứ đơn với động từ thường: did + not + V.",
    category: "Past Simple",
  },
  {
    id: "A1-0200",
    topicId: "basic-sentence-patterns",
    questionType: "structure",
    contextEn: "Asking about someone's origin.",
    contextVi: "Hỏi về xuất thân của ai đó.",
    questionEn: "Where is the new consultant _____?",
    questionVi: "Người cố vấn mới đến _____ từ đâu?",
    options: [
      {
        option: "from",
        isCorrect: true,
      },
      {
        option: "at",
        isCorrect: false,
      },
      {
        option: "to",
        isCorrect: false,
      },
      {
        option: "in",
        isCorrect: false,
      },
    ],
    explanationVi: "Cấu trúc 'Where is someone from?' để hỏi về xuất thân.",
    category: "Sentence Structure",
  },
];
