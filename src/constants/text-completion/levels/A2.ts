import { TextCompletionPassage } from "../types";

export const A2_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "a2-toeic-1",
    title: "Job Inquiry - Email",
    level: "A2",
    content:
      "To: Human Resources\nSubject: Job Application\n\nI saw your advertisement for a sales assistant. I would like to apply for the {{1}}. I have two years of experience in a clothes shop. I am good at talking to {{2}}.\n\nI am hardworking and friendly. I can work on weekends and evenings. Please find my CV attached. I hope to hear from you {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "position", isCorrect: true },
          { option: "location", isCorrect: false },
          { option: "station", isCorrect: false },
          { option: "nation", isCorrect: false },
        ],
        explanationVi:
          "Ứng tuyển cho một 'position' (vị trí công việc). Trong ngữ cảnh đơn xin việc, 'position' chỉ vị trí mà bạn muốn làm.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "customers", isCorrect: true },
          { option: "computers", isCorrect: false },
          { option: "cars", isCorrect: false },
          { option: "cats", isCorrect: false },
        ],
        explanationVi:
          "Nói chuyện với 'customers' (khách hàng). Trong công việc bán hàng, việc giao tiếp với khách hàng là quan trọng.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "soon", isCorrect: true },
          { option: "fast", isCorrect: false },
          { option: "late", isCorrect: false },
          { option: "slow", isCorrect: false },
        ],
        explanationVi:
          "Nghe từ bạn 'soon' (sớm). Trong email, 'hear from you soon' là cách lịch sự mong đợi phản hồi nhanh.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "time", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "help", isCorrect: false },
          { option: "work", isCorrect: false },
        ],
        explanationVi:
          "Cảm ơn bạn đã dành 'thời gian' (time). Trong ngữ cảnh email xin việc, 'time' đề cập đến việc dành thời gian xem xét đơn xin việc của ứng viên.",
      },
    ],
  },
  {
    id: "a2-toeic-2",
    title: "Product Question - Email",
    level: "A2",
    content:
      "To: Customer Service\nSubject: Camera Model X1\n\nI am interested in buying the Camera Model X1. I have a question about the battery. How long does it {{1}}? I want to take it on a long trip.\n\nAlso, does it come with a case? I cannot find this information on your website. Please let me know the {{2}}. I want to buy it before my {{3}}. Waiting for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "last", isCorrect: true },
          { option: "go", isCorrect: false },
          { option: "stay", isCorrect: false },
          { option: "live", isCorrect: false },
        ],
        explanationVi:
          "Bao lâu pin 'kéo dài' (last). Trong ngữ cảnh hỏi về camera, 'last' nghĩa là thời gian pin hoạt động.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "price", isCorrect: true },
          { option: "size", isCorrect: false },
          { option: "color", isCorrect: false },
          { option: "name", isCorrect: false },
        ],
        explanationVi:
          "Biết 'giá' (price). Trong ngữ cảnh hỏi về sản phẩm, khách hàng muốn biết giá cả của camera và phụ kiện.",
        // Correction: The context asks about battery and case. "details" or "information" would be better. Let's use "details".
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "holiday", isCorrect: true },
          { option: "work", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "dinner", isCorrect: false },
        ],
        explanationVi:
          "Trước 'kỳ nghỉ' (holiday) của tôi. Trong ngữ cảnh mua camera, muốn mua trước khi đi nghỉ để có thời gian chuẩn bị.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "reply", isCorrect: true },
          { option: "supply", isCorrect: false },
          { option: "apply", isCorrect: false },
          { option: "imply", isCorrect: false },
        ],
        explanationVi:
          "Đang chờ 'phản hồi' (reply). Trong email, mong đợi phản hồi từ công ty về câu hỏi của khách hàng.",
      },
    ],
  },
  {
    id: "a2-toeic-3",
    title: "Travel Plan - Email",
    level: "A2",
    content:
      "Hi Tom,\n\nI am excited about our trip to London. I booked the flight tickets today. We leave on Friday at 8 AM. We need to be at the airport two hours {{1}}.\n\nI also found a nice hotel. It is near the city center. We can walk to many {{2}}. Don't forget to pack your {{3}}. See you on {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "early", isCorrect: true },
          { option: "late", isCorrect: false },
          { option: "ago", isCorrect: false },
          { option: "after", isCorrect: false },
        ],
        explanationVi:
          "Hai giờ 'sớm' (early), trước chuyến bay. Trong kế hoạch du lịch, cần đến sân bay sớm để chuẩn bị.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "places", isCorrect: true },
          { option: "trains", isCorrect: false },
          { option: "cars", isCorrect: false },
          { option: "planes", isCorrect: false },
        ],
        explanationVi:
          "Đi bộ đến nhiều 'nơi' (places). Khách sạn gần trung tâm, có thể đi bộ đến nhiều địa điểm tham quan.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "camera", isCorrect: true },
          { option: "table", isCorrect: false },
          { option: "chair", isCorrect: false },
          { option: "bed", isCorrect: false },
        ],
        explanationVi:
          "Mang theo 'máy ảnh' (camera). Trong chuyến đi, cần chuẩn bị máy ảnh để chụp ảnh.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Friday", isCorrect: true },
          { option: "Monday", isCorrect: false },
          { option: "Sunday", isCorrect: false },
          { option: "Tuesday", isCorrect: false },
        ],
        explanationVi:
          "Gặp bạn vào 'thứ sáu' (Friday). Ngày khởi hành chuyến bay là thứ sáu.",
      },
    ],
  },
  {
    id: "a2-toeic-4",
    title: "Apartment Issue - Email",
    level: "A2",
    content:
      "To: Landlord\nSubject: Broken Window\n\nI am writing to tell you about a problem in my apartment. The window in the bedroom is broken. I cannot {{1}} it properly. It is very cold at night.\n\nCan you send someone to fix it? I am home in the evenings after 6 PM. Please let me know when they can {{2}}. This is urgent because it is {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "close", isCorrect: true },
          { option: "open", isCorrect: false },
          { option: "break", isCorrect: false },
          { option: "clean", isCorrect: false },
        ],
        explanationVi:
          "Không thể 'đóng' (close) cửa sổ. Cửa sổ bị hỏng nên không đóng được, gây lạnh vào ban đêm.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "come", isCorrect: true },
          { option: "go", isCorrect: false },
          { option: "leave", isCorrect: false },
          { option: "stay", isCorrect: false },
        ],
        explanationVi:
          "Khi họ có thể 'đến' (come). Hỏi về thời gian thợ đến sửa cửa sổ hỏng.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "winter", isCorrect: true },
          { option: "summer", isCorrect: false },
          { option: "warm", isCorrect: false },
          { option: "hot", isCorrect: false },
        ],
        explanationVi:
          "Khẩn cấp vì đang là 'mùa đông' (winter). Mùa đông lạnh, cần sửa cửa sổ gấp để giữ ấm.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "help", isCorrect: true },
          { option: "work", isCorrect: false },
          { option: "money", isCorrect: false },
          { option: "call", isCorrect: false },
        ],
        explanationVi:
          "Cảm ơn sự 'giúp đỡ' (help). Cảm ơn chủ nhà sẽ giúp đỡ sửa chữa cửa sổ.",
      },
    ],
  },
  {
    id: "a2-toeic-5",
    title: "Party Feedback - Text",
    level: "A2",
    content:
      "Hi Sarah,\n\nThanks for inviting me to your party last night. I had a great {{1}}. The food was delicious, especially the chocolate cake. It was nice to meet your {{2}}.\n\nHowever, the music was a little too loud. I could not hear people talking. Maybe next time you can turn it {{3}}. Anyway, thanks again for a lovely {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "time", isCorrect: true },
          { option: "day", isCorrect: false },
          { option: "place", isCorrect: false },
          { option: "thing", isCorrect: false },
        ],
        explanationVi:
          "Có một khoảng 'thời gian' tuyệt vời (time). Tại bữa tiệc, vui vẻ và tận hưởng thời gian.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "friends", isCorrect: true },
          { option: "enemies", isCorrect: false },
          { option: "boss", isCorrect: false },
          { option: "job", isCorrect: false },
        ],
        explanationVi:
          "Gặp gỡ 'bạn bè' (friends) của bạn. Tại bữa tiệc, quen với bạn bè của người mời.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "down", isCorrect: true },
          { option: "up", isCorrect: false },
          { option: "on", isCorrect: false },
          { option: "off", isCorrect: false },
        ],
        explanationVi:
          "Vặn 'nhỏ' (down) âm nhạc. Nhạc quá to, cần giảm âm lượng để trò chuyện.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "evening", isCorrect: true },
          { option: "morning", isCorrect: false },
          { option: "work", isCorrect: false },
          { option: "meeting", isCorrect: false },
        ],
        explanationVi:
          "Một buổi 'tối' tuyệt vời (evening). Bữa tiệc buổi tối vui vẻ và đáng nhớ.",
      },
    ],
  },
  {
    id: "a2-toeic-6",
    title: "Dentist Reschedule - Message",
    level: "A2",
    content:
      "To: Dr. White\n\nI have an appointment for a check-up on Tuesday at 10 AM. Unfortunately, I cannot come because I have to {{1}}. I have an important meeting at my office.\n\nCan we change the appointment to Thursday? I am free in the afternoon. Please let me know if this is {{2}}. I am sorry for the {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "work", isCorrect: true },
          { option: "play", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "eat", isCorrect: false },
        ],
        explanationVi: "Have to 'work'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "possible", isCorrect: true },
          { option: "impossible", isCorrect: false },
          { option: "wrong", isCorrect: false },
          { option: "bad", isCorrect: false },
        ],
        explanationVi: "If this is 'possible'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "change", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "time", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Sorry for the 'change'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "him", isCorrect: false },
          { option: "us", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a2-toeic-7",
    title: "Recipe Share - Email",
    level: "A2",
    content:
      "Hi Jane,\n\nHere is the recipe for the apple pie you liked. First, you need to buy fresh apples. Cut them into small {{1}}. Mix them with sugar and cinnamon.\n\nPut the mix into the pie crust. Bake it in the oven for 45 minutes. Serve it with vanilla {{2}}. It is easy to {{3}}. Enjoy your {{4}}!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "pieces", isCorrect: true },
          { option: "peace", isCorrect: false },
          { option: "prices", isCorrect: false },
          { option: "places", isCorrect: false },
        ],
        explanationVi: "Small 'pieces'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "ice cream", isCorrect: true },
          { option: "soup", isCorrect: false },
          { option: "bread", isCorrect: false },
          { option: "meat", isCorrect: false },
        ],
        explanationVi: "Vanilla 'ice cream'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "make", isCorrect: true },
          { option: "do", isCorrect: false },
          { option: "play", isCorrect: false },
          { option: "take", isCorrect: false },
        ],
        explanationVi: "Easy to 'make'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "dessert", isCorrect: true },
          { option: "desert", isCorrect: false },
          { option: "dinner", isCorrect: false },
          { option: "lunch", isCorrect: false },
        ],
        explanationVi: "Enjoy your 'dessert'.",
      },
    ],
  },
  {
    id: "a2-toeic-8",
    title: "Lost Phone - Report",
    level: "A2",
    content:
      "Lost Item Report\n\nI lost my mobile phone yesterday on the bus. It is a new model, black color. It has a distinctive red {{1}}. There is a sticker of a cat on the back.\n\nIt is very important to me because it has all my photos. If you find it, please contact me immediately. I will offer a cash {{2}}. My number is 555-0099. Please help me find it {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "case", isCorrect: true },
          { option: "box", isCorrect: false },
          { option: "bag", isCorrect: false },
          { option: "hat", isCorrect: false },
        ],
        explanationVi: "Red 'case'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "reward", isCorrect: true },
          { option: "award", isCorrect: false },
          { option: "word", isCorrect: false },
          { option: "card", isCorrect: false },
        ],
        explanationVi: "Cash 'reward'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "soon", isCorrect: true },
          { option: "slow", isCorrect: false },
          { option: "late", isCorrect: false },
          { option: "never", isCorrect: false },
        ],
        explanationVi: "Find it 'soon'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a2-toeic-9",
    title: "Wrong Order - Email",
    level: "A2",
    content:
      "To: Bookstore Support\nSubject: Order #12345\n\nI ordered a book two weeks ago titled 'History of Art'. However, today I received a cookbook instead. I think there was a {{1}} with my order.\n\nI would like to return this book and get the correct one. Can you send me the return label? I hope to receive my book {{2}}. I need it for my class next Monday. Please {{3}} me. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "mistake", isCorrect: true },
          { option: "good", isCorrect: false },
          { option: "right", isCorrect: false },
          { option: "well", isCorrect: false },
        ],
        explanationVi: "There was a 'mistake'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "quickly", isCorrect: true },
          { option: "slowly", isCorrect: false },
          { option: "badly", isCorrect: false },
          { option: "sadly", isCorrect: false },
        ],
        explanationVi: "Receive 'quickly'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "help", isCorrect: true },
          { option: "stop", isCorrect: false },
          { option: "stay", isCorrect: false },
          { option: "play", isCorrect: false },
        ],
        explanationVi: "Please 'help' me.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "wishes", isCorrect: false },
          { option: "hopes", isCorrect: false },
          { option: "dreams", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "a2-toeic-10",
    title: "School Trip - Note",
    level: "A2",
    content:
      "Dear Parents,\n\nNext Tuesday, our class is going to the Science Museum. The bus will leave the school at 8:30 AM. Children should bring a packed {{1}} and a bottle of water.\n\nThe trip costs $10 per student. Please sign the permission slip and return it by Friday. We need some parents to help us {{2}} the children. If you can come, please tell the teacher. It will be an exciting {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "lunch", isCorrect: true },
          { option: "dinner", isCorrect: false },
          { option: "breakfast", isCorrect: false },
          { option: "snack", isCorrect: false },
        ],
        explanationVi: "Packed 'lunch'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "supervise", isCorrect: true },
          { option: "play", isCorrect: false },
          { option: "teach", isCorrect: false },
          { option: "feed", isCorrect: false },
        ],
        explanationVi: "'Supervise' (watch) the children.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "day", isCorrect: true },
          { option: "night", isCorrect: false },
          { option: "week", isCorrect: false },
          { option: "year", isCorrect: false },
        ],
        explanationVi: "Exciting 'day'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "support", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "bus", isCorrect: false },
        ],
        explanationVi: "Thank you for 'support'.",
      },
    ],
  },
  {
    id: "a2-toeic-11",
    title: "Sale Announcement - Email",
    level: "A2",
    content:
      "To: Customers\nSubject: Summer Sale!\n\nOur big summer sale starts this Saturday! All summer clothes are 50% off. You can buy t-shirts, shorts, and dresses at low {{1}}. We also have a special offer on shoes.\n\nBuy one pair and get the second pair for half price. The shop is open from 9 AM to 9 PM. Don't miss this chance to save {{2}}. Come early to get the best {{3}}. We hope to see you {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "prices", isCorrect: true },
          { option: "places", isCorrect: false },
          { option: "sizes", isCorrect: false },
          { option: "colors", isCorrect: false },
        ],
        explanationVi: "Low 'prices'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "money", isCorrect: true },
          { option: "time", isCorrect: false },
          { option: "work", isCorrect: false },
          { option: "people", isCorrect: false },
        ],
        explanationVi: "Save 'money'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "deals", isCorrect: true },
          { option: "meals", isCorrect: false },
          { option: "wheels", isCorrect: false },
          { option: "seals", isCorrect: false },
        ],
        explanationVi: "Best 'deals'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "there", isCorrect: true },
          { option: "here", isCorrect: false },
          { option: "where", isCorrect: false },
          { option: "near", isCorrect: false },
        ],
        explanationVi: "See you 'there'.",
      },
    ],
  },
  {
    id: "a2-toeic-12",
    title: "New Course - Email",
    level: "A2",
    content:
      "To: Students\nSubject: Photography Course\n\nDo you like taking photos? We are starting a new photography course next month. The course is for beginners. You will learn how to use a camera and take good {{1}}.\n\nClasses are on Tuesday evenings. The cost is $100 for ten weeks. You must bring your own camera. It is a great way to meet new {{2}}. Register at the office before {{3}}. Join {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "pictures", isCorrect: true },
          { option: "paintings", isCorrect: false },
          { option: "drawings", isCorrect: false },
          { option: "movies", isCorrect: false },
        ],
        explanationVi: "Take good 'pictures'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "people", isCorrect: true },
          { option: "places", isCorrect: false },
          { option: "things", isCorrect: false },
          { option: "cars", isCorrect: false },
        ],
        explanationVi: "Meet new 'people'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "Friday", isCorrect: true },
          { option: "Year", isCorrect: false },
          { option: "Night", isCorrect: false },
          { option: "Morning", isCorrect: false },
        ],
        explanationVi: "Before 'Friday' (deadline).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "us", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "him", isCorrect: false },
        ],
        explanationVi: "Join 'us'.",
      },
    ],
  },
  {
    id: "a2-toeic-13",
    title: "Lost Dog - Sign",
    level: "A2",
    content:
      "REWARD\n\nOur dog, Max, ran away yesterday. He is a brown Labrador. He has a blue collar with his name on it. He is very {{1}} and likes children.\n\nWe think he is in the neighborhood. We are very worried about him. If you see him, please call us. We will give $100 to the person who {{2}} him. Please look for {{3}}. Phone: 666-7788. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "friendly", isCorrect: true },
          { option: "angry", isCorrect: false },
          { option: "scary", isCorrect: false },
          { option: "bad", isCorrect: false },
        ],
        explanationVi: "Dog is 'friendly'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "finds", isCorrect: true },
          { option: "loses", isCorrect: false },
          { option: "buys", isCorrect: false },
          { option: "sells", isCorrect: false },
        ],
        explanationVi: "Person who 'finds' him.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "him", isCorrect: true },
          { option: "her", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "us", isCorrect: false },
        ],
        explanationVi: "Look for 'him'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a2-toeic-14",
    title: "Meeting Request - Email",
    level: "A2",
    content:
      "To: Mr. Green\nFrom: Mrs. Brown\nSubject: Meeting\n\nI would like to arrange a meeting with you to discuss the new project. Are you free next week? I am available on Monday and Wednesday {{1}}. We need about one hour.\n\nPlease let me know which day is best for you. I can come to your office. I will bring all the necessary {{2}}. I look forward to {{3}} you. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "mornings", isCorrect: true },
          { option: "nights", isCorrect: false },
          { option: "years", isCorrect: false },
          { option: "months", isCorrect: false },
        ],
        explanationVi: "Available in 'mornings'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "documents", isCorrect: true },
          { option: "cars", isCorrect: false },
          { option: "houses", isCorrect: false },
          { option: "food", isCorrect: false },
        ],
        explanationVi: "Bring 'documents'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "seeing", isCorrect: true },
          { option: "watching", isCorrect: false },
          { option: "looking", isCorrect: false },
          { option: "hearing", isCorrect: false },
        ],
        explanationVi: "Look forward to 'seeing' you.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "wishes", isCorrect: false },
          { option: "hopes", isCorrect: false },
          { option: "loves", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
  {
    id: "a2-toeic-15",
    title: "Gym Membership - Offer",
    level: "A2",
    content:
      "SPECIAL OFFER\n\nJoin our gym this month and get 50% off the first three months. We have a swimming pool, a sauna, and modern gym {{1}}. We also have yoga classes every evening.\n\nOur trainers can help you make a plan to get fit. It is important to stay healthy. Come for a free {{2}} today. We are next to the {{3}}. Don't {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "equipment", isCorrect: true },
          { option: "cars", isCorrect: false },
          { option: "food", isCorrect: false },
          { option: "clothes", isCorrect: false },
        ],
        explanationVi: "Gym 'equipment'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "visit", isCorrect: true },
          { option: "run", isCorrect: false },
          { option: "walk", isCorrect: false },
          { option: "sleep", isCorrect: false },
        ],
        explanationVi: "Free 'visit' (trial).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "bank", isCorrect: true },
          { option: "sky", isCorrect: false },
          { option: "moon", isCorrect: false },
          { option: "cloud", isCorrect: false },
        ],
        explanationVi: "Next to the 'bank' (location).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "wait", isCorrect: true },
          { option: "stop", isCorrect: false },
          { option: "go", isCorrect: false },
          { option: "run", isCorrect: false },
        ],
        explanationVi: "Don't 'wait'.",
      },
    ],
  },
  {
    id: "a2-toeic-16",
    title: "Internet Problem - Email",
    level: "A2",
    content:
      "To: Tech Support\nSubject: Slow Internet\n\nI am writing to report a problem with my internet connection. It has been very slow for the last two {{1}}. I cannot watch videos or download files.\n\nI tried restarting the router, but it did not {{2}}. Can you check my connection? I need the internet for my {{3}}. Please fixing it as soon as {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "days", isCorrect: true },
          { option: "years", isCorrect: false },
          { option: "minutes", isCorrect: false },
          { option: "seconds", isCorrect: false },
        ],
        explanationVi: "Last two 'days'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "help", isCorrect: true },
          { option: "stop", isCorrect: false },
          { option: "eat", isCorrect: false },
          { option: "run", isCorrect: false },
        ],
        explanationVi: "Did not 'help' (work).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "work", isCorrect: true },
          { option: "sleep", isCorrect: false },
          { option: "food", isCorrect: false },
          { option: "car", isCorrect: false },
        ],
        explanationVi: "Need for my 'work'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "possible", isCorrect: true },
          { option: "impossible", isCorrect: false },
          { option: "probable", isCorrect: false },
          { option: "late", isCorrect: false },
        ],
        explanationVi: "As soon as 'possible'.",
      },
    ],
  },
  {
    id: "a2-toeic-17",
    title: "New Neighbor - Letter",
    level: "A2",
    content:
      "Dear Neighbor,\n\nMy name is Mike, and I moved into the house next door yesterday. I just wanted to say {{1}}. I have a dog named Buster. He is very friendly, so please don't be {{2}}.\n\nI am planning a small housewarming party next Saturday. I would love for you to {{3}}. It will start at 6 PM. Hope to meet you {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hello", isCorrect: true },
          { option: "goodbye", isCorrect: false },
          { option: "no", isCorrect: false },
          { option: "yes", isCorrect: false },
        ],
        explanationVi: "Wanted to say 'hello'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "afraid", isCorrect: true },
          { option: "happy", isCorrect: false },
          { option: "glad", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi: "Don't be 'afraid'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "come", isCorrect: true },
          { option: "go", isCorrect: false },
          { option: "leave", isCorrect: false },
          { option: "stay", isCorrect: false },
        ],
        explanationVi: "Love for you to 'come'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "then", isCorrect: true },
          { option: "when", isCorrect: false },
          { option: "now", isCorrect: false },
          { option: "never", isCorrect: false },
        ],
        explanationVi: "Meet you 'then'.",
      },
    ],
  },
  {
    id: "a2-toeic-18",
    title: "Concert Ticket - Email",
    level: "A2",
    content:
      "To: Ticket Office\nSubject: Rock Band Concert\n\nI want to buy two tickets for the Rock Band concert on July 15th. I prefer seats in the front {{1}}. How much do they {{2}}?\n\nCan I pay by credit card? Please send the tickets to my email address. I am a big fan of this {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "row", isCorrect: true },
          { option: "car", isCorrect: false },
          { option: "bus", isCorrect: false },
          { option: "store", isCorrect: false },
        ],
        explanationVi: "Front 'row'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cost", isCorrect: true },
          { option: "pay", isCorrect: false },
          { option: "make", isCorrect: false },
          { option: "do", isCorrect: false },
        ],
        explanationVi: "How much do they 'cost'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "band", isCorrect: true },
          { option: "food", isCorrect: false },
          { option: "game", isCorrect: false },
          { option: "book", isCorrect: false },
        ],
        explanationVi: "Fan of this 'band'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "assistance", isCorrect: true },
          { option: "resistance", isCorrect: false },
          { option: "distance", isCorrect: false },
          { option: "persistence", isCorrect: false },
        ],
        explanationVi: "Thank you for 'assistance'.",
      },
    ],
  },
  {
    id: "a2-toeic-19",
    title: "Restaurant Review - Web",
    level: "A2",
    content:
      "Review: Italian Bistro\n\nI went to the Italian Bistro last night. The pizza was amazing! It was the best pizza I have ever {{1}}. However, the service was quite {{2}}.\n\nWe waited 40 minutes for our food. The waiter forgot our drinks. The restaurant was very busy and {{3}}. I recommend the food, but be prepared to {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "eaten", isCorrect: true },
          { option: "drank", isCorrect: false },
          { option: "seen", isCorrect: false },
          { option: "heard", isCorrect: false },
        ],
        explanationVi: "Best pizza I have 'eaten'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "slow", isCorrect: true },
          { option: "fast", isCorrect: false },
          { option: "good", isCorrect: false },
          { option: "nice", isCorrect: false },
        ],
        explanationVi: "Service was 'slow'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "noisy", isCorrect: true },
          { option: "quiet", isCorrect: false },
          { option: "empty", isCorrect: false },
          { option: "calm", isCorrect: false },
        ],
        explanationVi: "Busy and 'noisy'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "wait", isCorrect: true },
          { option: "run", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "leave", isCorrect: false },
        ],
        explanationVi: "Prepared to 'wait'.",
      },
    ],
  },
  {
    id: "a2-toeic-20",
    title: "Job Interview - Confirmation",
    level: "A2",
    content:
      "Dear Ms. Smith,\n\nThank you for inviting me for an interview. I am very happy to attend. I confirming that I will come on Monday at 9 {{1}}. I have the address of your {{2}}.\n\nI will bring my CV and references. I have read about your company and I am very {{3}}. I look forward to meeting the {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "AM", isCorrect: true },
          { option: "PM", isCorrect: false },
          { option: "clock", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "At 9 'AM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "office", isCorrect: true },
          { option: "home", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "park", isCorrect: false },
        ],
        explanationVi: "Address of your 'office'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "interested", isCorrect: true },
          { option: "bored", isCorrect: false },
          { option: "tired", isCorrect: false },
          { option: "angry", isCorrect: false },
        ],
        explanationVi: "Very 'interested'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "team", isCorrect: true },
          { option: "room", isCorrect: false },
          { option: "desk", isCorrect: false },
          { option: "chair", isCorrect: false },
        ],
        explanationVi: "Meeting the 'team'.",
      },
    ],
  },
  {
    id: "a2-toeic-21",
    title: "Holiday Photos - Email",
    level: "A2",
    content:
      "Hi Mom,\n\nWe are having a great time in Spain. The weather is sunny and hot. We went to the beach {{1}}. I took many photos of the {{2}}.\n\nI am attaching some photos to this email. Look at the one with the big castle. We ate paella for dinner. It was very {{3}}. I will call you {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "yesterday", isCorrect: true },
          { option: "tomorrow", isCorrect: false },
          { option: "next week", isCorrect: false },
          { option: "soon", isCorrect: false },
        ],
        explanationVi: "Went 'yesterday' (past tense).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "sea", isCorrect: true },
          { option: "car", isCorrect: false },
          { option: "room", isCorrect: false },
          { option: "bed", isCorrect: false },
        ],
        explanationVi: "Photos of the 'sea'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "tasty", isCorrect: true },
          { option: "bad", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "ugly", isCorrect: false },
        ],
        explanationVi: "Food was 'tasty'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "later", isCorrect: true },
          { option: "before", isCorrect: false },
          { option: "ago", isCorrect: false },
          { option: "past", isCorrect: false },
        ],
        explanationVi: "Call you 'later'.",
      },
    ],
  },
  {
    id: "a2-toeic-22",
    title: "Returned Book - Message",
    level: "A2",
    content:
      "To: Library\nSubject: Late Return\n\nI am sorry I am returning the book 'Modern History' late. I was sick last week and could not come to the {{1}}. I hope the fine is not too {{2}}.\n\nI really enjoyed reading it. It helped me with my history project. I will bring it back tomorrow morning. Thank you for your {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "library", isCorrect: true },
          { option: "gym", isCorrect: false },
          { option: "park", isCorrect: false },
          { option: "shop", isCorrect: false },
        ],
        explanationVi: "Come to the 'library'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "high", isCorrect: true },
          { option: "tall", isCorrect: false },
          { option: "short", isCorrect: false },
          { option: "low", isCorrect: false },
        ],
        explanationVi: "Fine is not too 'high' (expensive).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "understanding", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "book", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "Thank you for 'understanding'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "wishes", isCorrect: true },
          { option: "dreams", isCorrect: false },
          { option: "hopes", isCorrect: false },
          { option: "thoughts", isCorrect: false },
        ],
        explanationVi: "Best 'wishes'.",
      },
    ],
  },
  {
    id: "a2-toeic-23",
    title: "Garage Sale - Flyer",
    level: "A2",
    content:
      "GARAGE SALE\n\nWe are moving house and selling many things. Come to 25 Oak Street this Saturday. We have furniture, clothes, and {{1}}. Everything must go!\n\nPrices are very low. You can find tables, chairs, and lamps. We start at 8 AM. Don't be late. It is cash {{2}}. See you {{3}}. Tell your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "books", isCorrect: true },
          { option: "walls", isCorrect: false },
          { option: "windows", isCorrect: false },
          { option: "floors", isCorrect: false },
        ],
        explanationVi: "Selling 'books' (common item).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "only", isCorrect: true },
          { option: "card", isCorrect: false },
          { option: "check", isCorrect: false },
          { option: "free", isCorrect: false },
        ],
        explanationVi: "Cash 'only'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "there", isCorrect: true },
          { option: "where", isCorrect: false },
          { option: "here", isCorrect: false },
          { option: "near", isCorrect: false },
        ],
        explanationVi: "See you 'there'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "friends", isCorrect: true },
          { option: "dogs", isCorrect: false },
          { option: "cats", isCorrect: false },
          { option: "cars", isCorrect: false },
        ],
        explanationVi: "Tell your 'friends'.",
      },
    ],
  },
  {
    id: "a2-toeic-24",
    title: "Train Platform - Announcement",
    level: "A2",
    content:
      "Attention Passengers\n\nThe train to London is delayed by 15 minutes. It will now depart at 10:45 AM. Please note that the platform has {{1}}. It will now leave from Platform 5.\n\nWe apologize for the inconvenience. Please check the display boards for more {{2}}. Do not leave your bags {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "changed", isCorrect: true },
          { option: "stopped", isCorrect: false },
          { option: "arrived", isCorrect: false },
          { option: "left", isCorrect: false },
        ],
        explanationVi: "Platform has 'changed'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "information", isCorrect: true },
          { option: "food", isCorrect: false },
          { option: "music", isCorrect: false },
          { option: "money", isCorrect: false },
        ],
        explanationVi: "More 'information'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "unattended", isCorrect: true },
          { option: "opened", isCorrect: false },
          { option: "closed", isCorrect: false },
          { option: "lost", isCorrect: false },
        ],
        explanationVi: "Bags 'unattended'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "patience", isCorrect: true },
          { option: "anger", isCorrect: false },
          { option: "hunger", isCorrect: false },
          { option: "speed", isCorrect: false },
        ],
        explanationVi: "Thank you for 'patience'.",
      },
    ],
  },
  {
    id: "a2-toeic-25",
    title: "Hotel Complaint - Email",
    level: "A2",
    content:
      "To: Hotel Manager\nSubject: Complaint\n\nI stayed in Room 302 last night. I was not happy with my stay. The room was very {{1}} because of the traffic outside. I could not sleep.\n\nAlso, the air conditioner did not work. It was very hot in the room. I expect a {{2}} or a discount. Please contact me as soon as {{3}}. My name is David {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "noisy", isCorrect: true },
          { option: "quiet", isCorrect: false },
          { option: "clean", isCorrect: false },
          { option: "big", isCorrect: false },
        ],
        explanationVi: "Room was 'noisy'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "refund", isCorrect: true },
          { option: "gift", isCorrect: false },
          { option: "bill", isCorrect: false },
          { option: "key", isCorrect: false },
        ],
        explanationVi: "Expect a 'refund'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "possible", isCorrect: true },
          { option: "impossible", isCorrect: false },
          { option: "good", isCorrect: false },
          { option: "bad", isCorrect: false },
        ],
        explanationVi: "As soon as 'possible'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "Jones", isCorrect: true },
          { option: "Room", isCorrect: false },
          { option: "Hotel", isCorrect: false },
          { option: "City", isCorrect: false },
        ],
        explanationVi: "David 'Jones' (surname).",
      },
    ],
  },
  {
    id: "a2-toeic-26",
    title: "Wedding Invite - Card",
    level: "A2",
    content:
      "Together with their families\n\nAnna and Mark invite you to their wedding. It will be on Saturday, June 10th. The ceremony will start at 2 {{1}} at St. Mary's Church.\n\nReception to follow at the Grand Hotel. Please RSVP by May 1st. We hope you can celebrate with {{2}}. Dress code is {{3}}. We are very {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "PM", isCorrect: true },
          { option: "AM", isCorrect: false },
          { option: "hours", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "2 'PM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "us", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "them", isCorrect: false },
          { option: "you", isCorrect: false },
        ],
        explanationVi: "Celebrate with 'us'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "formal", isCorrect: true },
          { option: "casual", isCorrect: false },
          { option: "sporty", isCorrect: false },
          { option: "beach", isCorrect: false },
        ],
        explanationVi: "Dress code is 'formal'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "excited", isCorrect: true },
          { option: "tired", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "bored", isCorrect: false },
        ],
        explanationVi: "We are very 'excited'.",
      },
    ],
  },
  {
    id: "a2-toeic-27",
    title: "Car Repair - Quote",
    level: "A2",
    content:
      "To: Mr. Lee\nFrom: Bob's Garage\nSubject: Car Repair\n\nWe have checked your car. The problem is with the brakes. We need to replace them. The total cost will be ${{1}}.\n\nWe can finish the work by tomorrow afternoon. Do you want us to proceed? Please let us know {{2}}. The car is not safe to {{3}}. Waiting for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "200", isCorrect: true },
          { option: "free", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Cost '$200'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "today", isCorrect: true },
          { option: "year", isCorrect: false },
          { option: "month", isCorrect: false },
          { option: "week", isCorrect: false },
        ],
        explanationVi: "Let us know 'today'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "drive", isCorrect: true },
          { option: "walk", isCorrect: false },
          { option: "fly", isCorrect: false },
          { option: "swim", isCorrect: false },
        ],
        explanationVi: "Not safe to 'drive'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "approval", isCorrect: true },
          { option: "arrival", isCorrect: false },
          { option: "refusal", isCorrect: false },
          { option: "proposal", isCorrect: false },
        ],
        explanationVi: "Waiting for 'approval'.",
      },
    ],
  },
  {
    id: "a2-toeic-28",
    title: "Medical Advice - Note",
    level: "A2",
    content:
      "Dr. Smith's Advice\n\nYou have a bad cold. You should stay at home and rest. Drink plenty of water and hot {{1}}. Take this medicine three times a {{2}}.\n\nDo not go to work for two days. If you still feel sick, come back to see me. Keep {{3}}. Get well {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "tea", isCorrect: true },
          { option: "ice", isCorrect: false },
          { option: "cake", isCorrect: false },
          { option: "bread", isCorrect: false },
        ],
        explanationVi: "Hot 'tea'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "day", isCorrect: true },
          { option: "year", isCorrect: false },
          { option: "month", isCorrect: false },
          { option: "minute", isCorrect: false },
        ],
        explanationVi: "Three times a 'day'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "warm", isCorrect: true },
          { option: "cold", isCorrect: false },
          { option: "wet", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi: "Keep 'warm'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "soon", isCorrect: true },
          { option: "late", isCorrect: false },
          { option: "slow", isCorrect: false },
          { option: "fast", isCorrect: false },
        ],
        explanationVi: "Get well 'soon'.",
      },
    ],
  },
  {
    id: "a2-toeic-29",
    title: "Overdue Book - Warning",
    level: "A2",
    content:
      "To: Jane Doe\nSubject: Library Notice\n\nOur records show that you have an overdue book. The title is 'Learn French'. It was due on May 1st. You must return it {{1}}.\n\nThe fine is now $5. If you lost the book, you must pay for a new one. Please visit the library service {{2}}. Do not {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "immediately", isCorrect: true },
          { option: "never", isCorrect: false },
          { option: "later", isCorrect: false },
          { option: "slowly", isCorrect: false },
        ],
        explanationVi: "Return it 'immediately'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "desk", isCorrect: true },
          { option: "chair", isCorrect: false },
          { option: "floor", isCorrect: false },
          { option: "roof", isCorrect: false },
        ],
        explanationVi: "Service 'desk'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "delay", isCorrect: true },
          { option: "play", isCorrect: false },
          { option: "stay", isCorrect: false },
          { option: "pay", isCorrect: false },
        ],
        explanationVi: "Do not 'delay'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "him", isCorrect: false },
          { option: "us", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a2-toeic-30",
    title: "Volunteer - Email",
    level: "A2",
    content:
      "To: Animal Shelter\nSubject: Volunteering\n\nI love animals and I want to help at your shelter. I have a dog and two cats. I am free on weekends to walk the {{1}}. I am sending my application form.\n\nI am hardworking and reliable. I don't mind cleaning cages. Please let me know if you need {{2}}. I hope to hear from you {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "dogs", isCorrect: true },
          { option: "fish", isCorrect: false },
          { option: "birds", isCorrect: false },
          { option: "snakes", isCorrect: false },
        ],
        explanationVi: "Walk the 'dogs'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "help", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "food", isCorrect: false },
          { option: "toys", isCorrect: false },
        ],
        explanationVi: "If you need 'help'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "soon", isCorrect: true },
          { option: "late", isCorrect: false },
          { option: "never", isCorrect: false },
          { option: "slow", isCorrect: false },
        ],
        explanationVi: "Hear from you 'soon'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "regards", isCorrect: true },
          { option: "luck", isCorrect: false },
          { option: "love", isCorrect: false },
          { option: "idea", isCorrect: false },
        ],
        explanationVi: "Best 'regards'.",
      },
    ],
  },
];
