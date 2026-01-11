import { TextCompletionPassage } from "../types";

export const B1_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "b1-toeic-1",
    title: "Meeting Request - Email",
    level: "B1",
    content:
      "To: Sales Team\nFrom: Manager\nSubject: Monthly Meeting\n\nI would like to schedule our monthly meeting for next Tuesday at 10 AM. We need to discuss our sales {{1}} for the last quarter. Please prepare a short presentation about your recent clients. We will also talk about our new marketing {{2}}.\n\nIt is important that everyone attends this meeting. If you cannot come, please {{3}} me know by Friday. We have a lot of work to do, but I am sure we can {{4}} our goals together. See you next week.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "results", isCorrect: true },
          { option: "games", isCorrect: false },
          { option: "music", isCorrect: false },
          { option: "shoes", isCorrect: false },
        ],
        explanationVi:
          "Kết quả bán hàng. Trong email yêu cầu họp để thảo luận hiệu suất bán hàng quý trước, 'results' là từ phù hợp.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "plan", isCorrect: true },
          { option: "food", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "sky", isCorrect: false },
        ],
        explanationVi:
          "Kế hoạch marketing. Trong ngữ cảnh thảo luận chiến lược marketing mới, 'plan' là từ chính xác.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "let", isCorrect: true },
          { option: "make", isCorrect: false },
          { option: "do", isCorrect: false },
          { option: "get", isCorrect: false },
        ],
        explanationVi:
          "Hãy cho tôi biết. Câu 'let me know' là cách lịch sự để yêu cầu thông tin.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "reach", isCorrect: true },
          { option: "touch", isCorrect: false },
          { option: "hold", isCorrect: false },
          { option: "stop", isCorrect: false },
        ],
        explanationVi:
          "Đạt được mục tiêu. 'Reach' dùng để chỉ đạt đến một mục đích hoặc kết quả.",
      },
    ],
  },
  {
    id: "b1-toeic-2",
    title: "Product Inquiry - Email",
    level: "B1",
    content:
      "To: Customer Service\nSubject: Order #12345\n\nI am writing to ask about my recent order. I bought a new laptop two weeks ago, but it has not {{1}} yet. The tracking information says it is still in the warehouse. I need this computer for my work, so I am very {{2}}.\n\nCould you please check the status of my delivery? If it is going to be late, I would like to cancel the order and get a {{3}}. Please reply to this email as soon as {{4}}. Thank you for your help.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "arrived", isCorrect: true },
          { option: "gone", isCorrect: false },
          { option: "played", isCorrect: false },
          { option: "slept", isCorrect: false },
        ],
        explanationVi:
          "Chưa 'đến' nơi. Trong email hỏi về đơn hàng, 'arrived' có nghĩa là hàng đã đến nơi, và 'yet' dùng để nhấn mạnh rằng điều này vẫn chưa xảy ra.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "worried", isCorrect: true },
          { option: "happy", isCorrect: false },
          { option: "tired", isCorrect: false },
          { option: "cold", isCorrect: false },
        ],
        explanationVi:
          "Rất 'lo lắng'. Trong ngữ cảnh cần máy tính gấp cho công việc nhưng chưa nhận được, 'worried' là cảm xúc phù hợp.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "refund", isCorrect: true },
          { option: "gift", isCorrect: false },
          { option: "ticket", isCorrect: false },
          { option: "bill", isCorrect: false },
        ],
        explanationVi:
          "Nhận 'hoàn tiền'. Khi đơn hàng bị trễ, khách hàng có thể yêu cầu hủy đơn và nhận lại tiền, 'refund' là từ chỉ hành động này.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "possible", isCorrect: true },
          { option: "easy", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "good", isCorrect: false },
        ],
        explanationVi:
          "Sớm nhất có thể. 'As soon as possible' là cụm từ dùng để yêu cầu phản hồi nhanh chóng, 'possible' có nghĩa là khả thi.",
      },
    ],
  },
  {
    id: "b1-toeic-3",
    title: "Office Supply Order - Memo",
    level: "B1",
    content:
      "To: Office Manager\nFrom: Accounting Department\nDate: October 15\n\nWe are running low on some office supplies. Please order more paper for the printer and some blue pens. We also need new folders for our {{1}}. The printer in the corner is not working well, so maybe we need to call a {{2}} to fix it.\n\nPlease place the order by the end of the week so we have everything for next Monday. Let me know if you need any more {{3}} about what to buy. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "files", isCorrect: true },
          { option: "shoes", isCorrect: false },
          { option: "cars", isCorrect: false },
          { option: "foods", isCorrect: false },
        ],
        explanationVi:
          "Thư mục cho 'tài liệu'. Trong văn phòng, 'files' là các tài liệu, hồ sơ cần được lưu trữ trong folders.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "technician", isCorrect: true },
          { option: "doctor", isCorrect: false },
          { option: "driver", isCorrect: false },
          { option: "cook", isCorrect: false },
        ],
        explanationVi:
          "Gọi 'kỹ thuật viên'. Khi máy in hỏng, cần gọi chuyên gia kỹ thuật để sửa chữa, 'technician' là từ chỉ người này.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "information", isCorrect: true },
          { option: "money", isCorrect: false },
          { option: "time", isCorrect: false },
          { option: "paper", isCorrect: false },
        ],
        explanationVi:
          "Thêm 'thông tin'. Khi đặt hàng văn phòng phẩm, quản lý có thể cần thêm chi tiết về những gì cần mua, 'information' là từ phù hợp.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "assistance", isCorrect: true },
          { option: "resistance", isCorrect: false },
          { option: "distance", isCorrect: false },
          { option: "instance", isCorrect: false },
        ],
        explanationVi:
          "'Assistance' nghĩa là giúp đỡ. Trong lời cảm ơn, 'assistance' là sự hỗ trợ mà người nhận đã cung cấp.",
      },
    ],
  },
  {
    id: "b1-toeic-4",
    title: "Policy Change - Notice",
    level: "B1",
    content:
      "NOTICE TO ALL STAFF\n\nStarting next month, there will be a change in our working hours. The office will open at 8:30 AM instead of 9:00 AM. This change is to help us {{1}} our customers better. We want to be available when they call us in the morning.\n\nYou will still work the same number of hours per day. You can leave work 30 minutes earlier in the afternoon. If you have any questions about this new {{2}}, please speak to your supervisor. We hope this change will be {{3}} for everyone. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "serve", isCorrect: true },
          { option: "eat", isCorrect: false },
          { option: "play", isCorrect: false },
          { option: "make", isCorrect: false },
        ],
        explanationVi:
          "'Phục vụ' khách hàng. Thay đổi giờ làm việc để có thể hỗ trợ khách hàng tốt hơn, 'serve' có nghĩa là cung cấp dịch vụ.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "schedule", isCorrect: true },
          { option: "machine", isCorrect: false },
          { option: "product", isCorrect: false },
          { option: "building", isCorrect: false },
        ],
        explanationVi:
          "Lịch trình 'mới'. Thay đổi giờ làm việc tạo ra 'schedule' mới, và nhân viên có thể hỏi về nó.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "beneficial", isCorrect: true },
          { option: "dangerous", isCorrect: false },
          { option: "expensive", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi:
          "'Beneficial' nghĩa là có lợi/tốt. Công ty hy vọng thay đổi này sẽ mang lại lợi ích cho tất cả nhân viên.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "cooperation", isCorrect: true },
          { option: "vacation", isCorrect: false },
          { option: "imagination", isCorrect: false },
          { option: "translation", isCorrect: false },
        ],
        explanationVi:
          "Cảm ơn sự 'hợp tác' của bạn. Trong thông báo thay đổi chính sách, 'cooperation' là sự hỗ trợ từ nhân viên.",
      },
    ],
  },
  {
    id: "b1-toeic-5",
    title: "Event Invitation - Email",
    level: "B1",
    content:
      "Dear Employees,\n\nYou are invited to our annual Summer Party! This year, the event will take place at City Park on Saturday, July 15th. There will be food, drinks, and games for everyone. It is a great opportunity to relax and have {{1}} with your colleagues outside of the office.\n\nPlease confirm your attendance by next Wednesday so we can order enough food. You are welcome to bring your family {{2}}. We look forward to seeing you all there. It promises to be a {{3}} day. Let's celebrate our hard work {{4}}!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "fun", isCorrect: true },
          { option: "work", isCorrect: false },
          { option: "stress", isCorrect: false },
          { option: "sleep", isCorrect: false },
        ],
        explanationVi: "Have 'fun'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "members", isCorrect: true },
          { option: "numbers", isCorrect: false },
          { option: "names", isCorrect: false },
          { option: "houses", isCorrect: false },
        ],
        explanationVi: "Family 'members'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "memorable", isCorrect: true },
          { option: "terrible", isCorrect: false },
          { option: "boring", isCorrect: false },
          { option: "difficult", isCorrect: false },
        ],
        explanationVi: "'Memorable' day.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "together", isCorrect: true },
          { option: "alone", isCorrect: false },
          { option: "never", isCorrect: false },
          { option: "again", isCorrect: false },
        ],
        explanationVi: "Celebrate 'together'.",
      },
    ],
  },
  {
    id: "b1-toeic-6",
    title: "Job Application - Cover Letter",
    level: "B1",
    content:
      "Dear Hiring Manager,\n\nI am writing to apply for the Sales Assistant position advertised on your website. I have two years of experience in retail and I enjoy working with people. In my previous job, I was responsible for helping customers and organizing the store. I am a hard worker and I am eager to {{1}} new skills.\n\nI believe I would be a good {{2}} for your team. I am available for an interview at your convenience. I have attached my resume for your {{3}}. Thank you for considering my {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "learn", isCorrect: true },
          { option: "lose", isCorrect: false },
          { option: "sell", isCorrect: false },
          { option: "buy", isCorrect: false },
        ],
        explanationVi: "'Learn' new skills.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fit", isCorrect: true },
          { option: "sit", isCorrect: false },
          { option: "hit", isCorrect: false },
          { option: "kit", isCorrect: false },
        ],
        explanationVi: "Good 'fit' for the team.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "review", isCorrect: true },
          { option: "preview", isCorrect: false },
          { option: "view", isCorrect: false },
          { option: "interview", isCorrect: false },
        ],
        explanationVi: "For your 'review'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "application", isCorrect: true },
          { option: "vacation", isCorrect: false },
          { option: "information", isCorrect: false },
          { option: "station", isCorrect: false },
        ],
        explanationVi: "Considering my 'application'.",
      },
    ],
  },
  {
    id: "b1-toeic-7",
    title: "Service Complaint - Email",
    level: "B1",
    content:
      "To: Manager, City Hotel\nSubject: Complaint about Room 202\n\nI stayed at your hotel last weekend and I was not satisfied with my room. The air conditioning was broken and the room was very hot. I called the front desk, but nobody came to {{1}} it. Also, the bathroom was not very clean.\n\nI have stayed at your hotel many times before and I usually enjoy it. However, this experience was very {{2}}. I would like to request a {{3}} for my stay. I hope you can improve your service in the {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "fix", isCorrect: true },
          { option: "break", isCorrect: false },
          { option: "buy", isCorrect: false },
          { option: "sell", isCorrect: false },
        ],
        explanationVi: "'Fix' the problem.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "disappointing", isCorrect: true },
          { option: "exciting", isCorrect: false },
          { option: "interesting", isCorrect: false },
          { option: "boring", isCorrect: false },
        ],
        explanationVi: "Experience was 'disappointing'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "refund", isCorrect: true },
          { option: "bill", isCorrect: false },
          { option: "menu", isCorrect: false },
          { option: "key", isCorrect: false },
        ],
        explanationVi: "Request a 'refund'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "future", isCorrect: true },
          { option: "past", isCorrect: false },
          { option: "present", isCorrect: false },
          { option: "morning", isCorrect: false },
        ],
        explanationVi: "In the 'future'.",
      },
    ],
  },
  {
    id: "b1-toeic-8",
    title: "Travel Itinerary - Email",
    level: "B1",
    content:
      "Dear Mr. Smith,\n\nHere is your travel itinerary for your trip to London. Your flight departs from New York at 6:00 PM on Monday and arrives in London at 7:00 AM on Tuesday. A driver will pick you up at the airport and take you to your {{1}}.\n\nYou have a meeting scheduled for Wednesday afternoon. On Thursday, you have a free day to explore the city. We have booked a ticket for a guided {{2}} of the museum. Please check the attached documents for more {{3}}. Have a safe {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hotel", isCorrect: true },
          { option: "office", isCorrect: false },
          { option: "school", isCorrect: false },
          { option: "park", isCorrect: false },
        ],
        explanationVi: "Take you to your 'hotel'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "tour", isCorrect: true },
          { option: "walk", isCorrect: false },
          { option: "run", isCorrect: false },
          { option: "sleep", isCorrect: false },
        ],
        explanationVi: "Guided 'tour'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "details", isCorrect: true },
          { option: "problems", isCorrect: false },
          { option: "names", isCorrect: false },
          { option: "colors", isCorrect: false },
        ],
        explanationVi: "More 'details'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "trip", isCorrect: true },
          { option: "fall", isCorrect: false },
          { option: "job", isCorrect: false },
          { option: "meet", isCorrect: false },
        ],
        explanationVi: "Safe 'trip'.",
      },
    ],
  },
  {
    id: "b1-toeic-9",
    title: "Training Reminder - Memo",
    level: "B1",
    content:
      "To: All Sales Staff\nSubject: Safety Training\n\nThis is a reminder that the annual safety training session will be held tomorrow in Conference Room B. The session starts at 9:00 AM and will last for two hours. Attendance is {{1}} for all employees.\n\nDuring the training, we will learn about emergency procedures and how to use the fire extinguisher. Please bring a notebook and pen to obtain {{2}}. Refreshments will be provided during the {{3}}. If you have any urgent work, please arrange to finish it {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "mandatory", isCorrect: true },
          { option: "optional", isCorrect: false },
          { option: "free", isCorrect: false },
          { option: "fun", isCorrect: false },
        ],
        explanationVi: "'Mandatory' means you must do it.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "notes", isCorrect: true },
          { option: "pictures", isCorrect: false },
          { option: "gifts", isCorrect: false },
          { option: "friends", isCorrect: false },
        ],
        explanationVi: "Take 'notes'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "break", isCorrect: true },
          { option: "work", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "drive", isCorrect: false },
        ],
        explanationVi: "During the 'break'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "afterwards", isCorrect: true },
          { option: "before", isCorrect: false },
          { option: "now", isCorrect: false },
          { option: "yesterday", isCorrect: false },
        ],
        explanationVi: "Finish it 'afterwards'.",
      },
    ],
  },
  {
    id: "b1-toeic-10",
    title: "Holiday Announcement - Email",
    level: "B1",
    content:
      "To: All Staff\nSubject: Office Closure\n\nPlease note that the office will be closed next Monday for the National Holiday. There will be no work on that day. The office will {{1}} on Tuesday at the normal time.\n\nPlease ensure that you turn off all computers and lights before you leave on Friday. Enjoy the long weekend and have a restful {{2}}. If you have any urgent issues, please contact the emergency {{3}}. Thank you for your hard work this {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "reopen", isCorrect: true },
          { option: "close", isCorrect: false },
          { option: "move", isCorrect: false },
          { option: "sell", isCorrect: false },
        ],
        explanationVi: "'Reopen' means open again.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "break", isCorrect: true },
          { option: "meeting", isCorrect: false },
          { option: "call", isCorrect: false },
          { option: "email", isCorrect: false },
        ],
        explanationVi: "Restful 'break'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "number", isCorrect: true },
          { option: "room", isCorrect: false },
          { option: "food", isCorrect: false },
          { option: "key", isCorrect: false },
        ],
        explanationVi: "Emergency 'number'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "month", isCorrect: true },
          { option: "hour", isCorrect: false },
          { option: "minute", isCorrect: false },
          { option: "second", isCorrect: false },
        ],
        explanationVi: "Work this 'month'.",
      },
    ],
  },
  {
    id: "b1-toeic-11",
    title: "Appointment Confirmation - Email",
    level: "B1",
    content:
      "Dear Ms. Jones,\n\nThis email is to confirm your dentist appointment. It is scheduled for next Wednesday at 2:00 PM. Please arrive 10 minutes {{1}} to fill out some forms. If you need to cancel, please call us 24 hours in {{2}}.\n\nParking is available behind the building. We accept payment by cash or credit {{3}}. We look forward to seeing the health of your {{4}} improve. See you then.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "early", isCorrect: true },
          { option: "late", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "slow", isCorrect: false },
        ],
        explanationVi: "Arrive 'early'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "advance", isCorrect: true },
          { option: "future", isCorrect: false },
          { option: "past", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "In 'advance'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "card", isCorrect: true },
          { option: "paper", isCorrect: false },
          { option: "coin", isCorrect: false },
          { option: "money", isCorrect: false },
        ],
        explanationVi: "Credit 'card'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "teeth", isCorrect: true },
          { option: "hair", isCorrect: false },
          { option: "shoes", isCorrect: false },
          { option: "hands", isCorrect: false },
        ],
        explanationVi: "Health of your 'teeth'.",
      },
    ],
  },
  {
    id: "b1-toeic-12",
    title: "Weather Announcement - Radio",
    level: "B1",
    content:
      "Good morning listeners. Here is today's weather forecast. It will be a sunny and warm {{1}}. Temperatures will reach 25 degrees. It is a perfect day for a {{2}} in the park.\n\nHowever, clouds will gather in the evening. There is a chance of {{3}} later tonight. So don't forget to bring your {{4}} if you go out. Stay tuned for more updates.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "day", isCorrect: true },
          { option: "night", isCorrect: false },
          { option: "week", isCorrect: false },
          { option: "year", isCorrect: false },
        ],
        explanationVi: "Sunny 'day'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "picnic", isCorrect: true },
          { option: "meeting", isCorrect: false },
          { option: "work", isCorrect: false },
          { option: "sleep", isCorrect: false },
        ],
        explanationVi: "Picnic in the park.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "rain", isCorrect: true },
          { option: "sun", isCorrect: false },
          { option: "snow", isCorrect: false },
          { option: "wind", isCorrect: false },
        ],
        explanationVi: "Chance of 'rain'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "umbrella", isCorrect: true },
          { option: "sunglasses", isCorrect: false },
          { option: "towel", isCorrect: false },
          { option: "book", isCorrect: false },
        ],
        explanationVi: "Bring your 'umbrella'.",
      },
    ],
  },
  {
    id: "b1-toeic-13",
    title: "Overdue Notice - Library",
    level: "B1",
    content:
      "Dear Member,\n\nOur records show that you have a book that is overdue. The book was due back on June 1st. Please return it as soon as {{1}}. You will need to pay a small {{2}} for the late return.\n\nIf you have lost the book, you must pay for a {{3}}. You cannot borrow any new books until this account is {{4}}. Thank you for your cooperation.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "possible", isCorrect: true },
          { option: "wanted", isCorrect: false },
          { option: "needed", isCorrect: false },
          { option: "liked", isCorrect: false },
        ],
        explanationVi: "As soon as 'possible'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fine", isCorrect: true },
          { option: "prize", isCorrect: false },
          { option: "gift", isCorrect: false },
          { option: "bonus", isCorrect: false },
        ],
        explanationVi: "Pay a 'fine'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "replacement", isCorrect: true },
          { option: "repayment", isCorrect: false },
          { option: "retirement", isCorrect: false },
          { option: "requirement", isCorrect: false },
        ],
        explanationVi: "Pay for a 'replacement'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "cleared", isCorrect: true },
          { option: "opened", isCorrect: false },
          { option: "closed", isCorrect: false },
          { option: "broken", isCorrect: false },
        ],
        explanationVi: "Account is 'cleared'.",
      },
    ],
  },
  {
    id: "b1-toeic-14",
    title: "Subscription Renewal - Email",
    level: "B1",
    content:
      "Hello,\n\nYour magazine subscription will expire next month. We hope you have enjoyed reading our articles this {{1}}. To continue receiving the magazine, please renew your {{2}}.\n\nWe are offering a special discount if you renew before the end of the week. You can save 20% off the regular {{3}}. Click the link below to make your {{4}}. Thank you for being a loyal reader.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "year", isCorrect: true },
          { option: "day", isCorrect: false },
          { option: "hour", isCorrect: false },
          { option: "minute", isCorrect: false },
        ],
        explanationVi: "Articles this 'year'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "subscription", isCorrect: true },
          { option: "prescription", isCorrect: false },
          { option: "description", isCorrect: false },
          { option: "inscription", isCorrect: false },
        ],
        explanationVi: "Renew your 'subscription'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "price", isCorrect: true },
          { option: "prize", isCorrect: false },
          { option: "place", isCorrect: false },
          { option: "peace", isCorrect: false },
        ],
        explanationVi: "Regular 'price'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "payment", isCorrect: true },
          { option: "comment", isCorrect: false },
          { option: "shipment", isCorrect: false },
          { option: "treatment", isCorrect: false },
        ],
        explanationVi: "Make your 'payment'.",
      },
    ],
  },
  {
    id: "b1-toeic-15",
    title: "Lost Item Report - Email",
    level: "B1",
    content:
      "To: Lost and Found\nSubject: Lost Wallet\n\nI think I left my wallet on the train this morning. It is a brown leather {{1}}. It contains my ID card and some {{2}}. I was sitting in the second {{3}} of the train.\n\nPlease check if anyone has found it. I need it back urgently as it has my train ticket inside. Please contact me on my mobile {{4}} if you find it that would be great.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "wallet", isCorrect: true },
          { option: "shoe", isCorrect: false },
          { option: "hat", isCorrect: false },
          { option: "coat", isCorrect: false },
        ],
        explanationVi: "Brown leather 'wallet'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cash", isCorrect: true },
          { option: "trash", isCorrect: false },
          { option: "flash", isCorrect: false },
          { option: "wash", isCorrect: false },
        ],
        explanationVi: "Some 'cash' (money).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "car", isCorrect: true },
          { option: "bar", isCorrect: false },
          { option: "jar", isCorrect: false },
          { option: "star", isCorrect: false },
        ],
        explanationVi: "Train 'car' (carriage).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "phone", isCorrect: true },
          { option: "home", isCorrect: false },
          { option: "tone", isCorrect: false },
          { option: "zone", isCorrect: false },
        ],
        explanationVi: "Mobile 'phone'.",
      },
    ],
  },
  {
    id: "b1-toeic-16",
    title: "Maintenance Notice - Memo",
    level: "B1",
    content:
      "To: All Residents\nFrom: Building Management\nSubject: Elevator Repair\n\nThe main elevator will be out of service tomorrow for repairs. Technicians need to replace a broken {{1}}. Please use the stairs or the service elevator during this {{2}}.\n\nWe apologize for the inconvenience. We expect the work to be finished by 5:00 PM. Thank you for your patience and {{3}}. Safety is our top {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "part", isCorrect: true },
          { option: "art", isCorrect: false },
          { option: "start", isCorrect: false },
          { option: "cart", isCorrect: false },
        ],
        explanationVi: "Replace a 'part'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "time", isCorrect: true },
          { option: "dime", isCorrect: false },
          { option: "lime", isCorrect: false },
          { option: "mine", isCorrect: false },
        ],
        explanationVi: "During this 'time'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "understanding", isCorrect: true },
          { option: "standing", isCorrect: false },
          { option: "demanding", isCorrect: false },
          { option: "landing", isCorrect: false },
        ],
        explanationVi: "Patience and 'understanding'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "priority", isCorrect: true },
          { option: "minority", isCorrect: false },
          { option: "majority", isCorrect: false },
          { option: "authority", isCorrect: false },
        ],
        explanationVi: "Top 'priority'.",
      },
    ],
  },
  {
    id: "b1-toeic-17",
    title: "New Employee - Welcome",
    level: "B1",
    content:
      "We are pleased to welcome John Smith to our team. He will be joining the marketing {{1}}. John has five years of experience in the {{2}}. He will be sitting at the desk next to the {{3}}.\n\nPlease introduce yourself to him and make him feel welcome. We are excited to have someone with his skills and {{4}}. Let's all help him settle in.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "department", isCorrect: true },
          { option: "apartment", isCorrect: false },
          { option: "compartment", isCorrect: false },
          { option: "appointment", isCorrect: false },
        ],
        explanationVi: "Marketing 'department'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "industry", isCorrect: true },
          { option: "factory", isCorrect: false },
          { option: "history", isCorrect: false },
          { option: "victory", isCorrect: false },
        ],
        explanationVi: "Experience in the 'industry'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "window", isCorrect: true },
          { option: "floor", isCorrect: false },
          { option: "ceiling", isCorrect: false },
          { option: "roof", isCorrect: false },
        ],
        explanationVi: "Next to the 'window'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "energy", isCorrect: true },
          { option: "allergy", isCorrect: false },
          { option: "synergy", isCorrect: false },
          { option: "strategy", isCorrect: false },
        ],
        explanationVi: "Skills and 'energy'.",
      },
    ],
  },
  {
    id: "b1-toeic-18",
    title: "Workshop Registration - Email",
    level: "B1",
    content:
      "To: Training Coordinator\nSubject: Photography Workshop\n\nI would like to register for the photography workshop. I bought a new camera and I want to learn how to use it {{1}}. Is there still space available in the {{2}}?\n\nI also have a friend who is interested. Can I bring a {{3}}? Please let me know the cost and the {{4}}. Thank you.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "properly", isCorrect: true },
          { option: "badly", isCorrect: false },
          { option: "slowly", isCorrect: false },
          { option: "sadly", isCorrect: false },
        ],
        explanationVi: "Use it 'properly'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "class", isCorrect: true },
          { option: "glass", isCorrect: false },
          { option: "grass", isCorrect: false },
          { option: "mass", isCorrect: false },
        ],
        explanationVi: "Space in the 'class'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "guest", isCorrect: true },
          { option: "ghost", isCorrect: false },
          { option: "pest", isCorrect: false },
          { option: "test", isCorrect: false },
        ],
        explanationVi: "Bring a 'guest'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "location", isCorrect: true },
          { option: "vacation", isCorrect: false },
          { option: "creation", isCorrect: false },
          { option: "relation", isCorrect: false },
        ],
        explanationVi: "Cost and 'location'.",
      },
    ],
  },
  {
    id: "b1-toeic-19",
    title: "Feedback Request - Email",
    level: "B1",
    content:
      "Dear Customer,\n\nThank you for buying our product. We hope you are happy with your {{1}}. We are always trying to improve our quality and {{2}}. Could you please take a moment to answer a few {{3}}?\n\nYour feedback is very valuable to us. As a thank you, we will send you a coupon code for your next {{4}}. We appreciate your business.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "purchase", isCorrect: true },
          { option: "purpose", isCorrect: false },
          { option: "pursue", isCorrect: false },
          { option: "proposal", isCorrect: false },
        ],
        explanationVi: "Happy with 'purchase'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "service", isCorrect: true },
          { option: "surface", isCorrect: false },
          { option: "servant", isCorrect: false },
          { option: "server", isCorrect: false },
        ],
        explanationVi: "Quality and 'service'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "questions", isCorrect: true },
          { option: "answers", isCorrect: false },
          { option: "problems", isCorrect: false },
          { option: "solutions", isCorrect: false },
        ],
        explanationVi: "Answer 'questions'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "order", isCorrect: true },
          { option: "border", isCorrect: false },
          { option: "corner", isCorrect: false },
          { option: "owner", isCorrect: false },
        ],
        explanationVi: "Next 'order'.",
      },
    ],
  },
  {
    id: "b1-toeic-20",
    title: "Parking Policy - Notice",
    level: "B1",
    content:
      "Attention Staff,\n\nPlease follow the new parking rules. Do not park in the spaces reserved for {{1}}. These spaces are marked with yellow {{2}}. Employees should park in the back {{3}}.\n\nCars parked in the wrong area will be towed. We want to ensure there is enough space for our clients. Thank you for following these {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "visitors", isCorrect: true },
          { option: "actors", isCorrect: false },
          { option: "doctors", isCorrect: false },
          { option: "factors", isCorrect: false },
        ],
        explanationVi: "Reserved for 'visitors'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "lines", isCorrect: true },
          { option: "wines", isCorrect: false },
          { option: "pines", isCorrect: false },
          { option: "mines", isCorrect: false },
        ],
        explanationVi: "Yellow 'lines'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "lot", isCorrect: true },
          { option: "pot", isCorrect: false },
          { option: "dot", isCorrect: false },
          { option: "hot", isCorrect: false },
        ],
        explanationVi: "Back 'lot' (parking lot).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "instructions", isCorrect: true },
          { option: "constructions", isCorrect: false },
          { option: "destructions", isCorrect: false },
          { option: "introductions", isCorrect: false },
        ],
        explanationVi: "Following 'instructions'.",
      },
    ],
  },
  {
    id: "b1-toeic-21",
    title: "Volunteer Opportunity - Notice",
    level: "B1",
    content:
      "We are looking for volunteers to help clean up the city park this Sunday. We need people to pick up {{1}} and plant new flowers. Gloves and bags will be {{2}}.\n\nWe will start at 9:00 AM and finish at noon. Lunch will be served to all {{3}}. It is a great way to help the {{4}} and meet neighbors.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "litter", isCorrect: true },
          { option: "letter", isCorrect: false },
          { option: "later", isCorrect: false },
          { option: "liter", isCorrect: false },
        ],
        explanationVi: "Pick up 'litter' (trash).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "provided", isCorrect: true },
          { option: "decided", isCorrect: false },
          { option: "divided", isCorrect: false },
          { option: "guided", isCorrect: false },
        ],
        explanationVi: "Will be 'provided'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "participants", isCorrect: true },
          { option: "plants", isCorrect: false },
          { option: "pants", isCorrect: false },
          { option: "paints", isCorrect: false },
        ],
        explanationVi: "Served to 'participants'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "community", isCorrect: true },
          { option: "opportunity", isCorrect: false },
          { option: "unity", isCorrect: false },
          { option: "immunity", isCorrect: false },
        ],
        explanationVi: "Help the 'community'.",
      },
    ],
  },
  {
    id: "b1-toeic-22",
    title: "Book Club - Invitation",
    level: "B1",
    content:
      "Do you love reading? Join our book club! We meet every month to discuss a new {{1}}. It is fun and free to {{2}}.\n\nOur next meeting is on Tuesday evening. We will talk about a famous mystery novel. You don't need to be an expert, just enjoy {{3}}. Snacks and tea are {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "book", isCorrect: true },
          { option: "cook", isCorrect: false },
          { option: "hook", isCorrect: false },
          { option: "look", isCorrect: false },
        ],
        explanationVi: "Discuss a 'book'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "join", isCorrect: true },
          { option: "coin", isCorrect: false },
          { option: "loin", isCorrect: false },
          { option: "gain", isCorrect: false },
        ],
        explanationVi: "Free to 'join'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "stories", isCorrect: true },
          { option: "glories", isCorrect: false },
          { option: "worries", isCorrect: false },
          { option: "lorries", isCorrect: false },
        ],
        explanationVi: "Enjoy 'stories'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "included", isCorrect: true },
          { option: "excluded", isCorrect: false },
          { option: "deluded", isCorrect: false },
          { option: "concluded", isCorrect: false },
        ],
        explanationVi: "Snacks are 'included'.",
      },
    ],
  },
  {
    id: "b1-toeic-23",
    title: "Gym Class - Schedule",
    level: "B1",
    content:
      "The gym class schedule has changed. Yoga classes are now on Monday and Wednesday. This change is due to high {{1}}. We added an extra class on Friday {{2}}.\n\nPlease check the website for the full {{3}}. Remember to bring your own mat and {{4}}. Get fit with us!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "demand", isCorrect: true },
          { option: "command", isCorrect: false },
          { option: "expand", isCorrect: false },
          { option: "sand", isCorrect: false },
        ],
        explanationVi: "High 'demand'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "morning", isCorrect: true },
          { option: "warning", isCorrect: false },
          { option: "turning", isCorrect: false },
          { option: "burning", isCorrect: false },
        ],
        explanationVi: "Friday 'morning'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "timetable", isCorrect: true },
          { option: "table", isCorrect: false },
          { option: "stable", isCorrect: false },
          { option: "cable", isCorrect: false },
        ],
        explanationVi: "Full 'timetable'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "towel", isCorrect: true },
          { option: "vowel", isCorrect: false },
          { option: "trowel", isCorrect: false },
          { option: "bowel", isCorrect: false },
        ],
        explanationVi: "Bring 'towel'.",
      },
    ],
  },
  {
    id: "b1-toeic-24",
    title: "Laundry Instructions - Label",
    level: "B1",
    content:
      "Please read the care instructions before washing this shirt. Wash in cold water to prevent {{1}}. Do not use bleach or strong {{2}}. Hang directly to {{3}}.\n\nIron on low heat if necessary. If you follow these steps, the shirt will last a long {{4}}. Dry cleaning is also recommended.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "shrinking", isCorrect: true },
          { option: "sinking", isCorrect: false },
          { option: "drinking", isCorrect: false },
          { option: "thinking", isCorrect: false },
        ],
        explanationVi: "Prevent 'shrinking'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "chemicals", isCorrect: true },
          { option: "animals", isCorrect: false },
          { option: "medical", isCorrect: false },
          { option: "radicals", isCorrect: false },
        ],
        explanationVi: "Strong 'chemicals'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "dry", isCorrect: true },
          { option: "cry", isCorrect: false },
          { option: "fry", isCorrect: false },
          { option: "try", isCorrect: false },
        ],
        explanationVi: "Hang to 'dry'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "time", isCorrect: true },
          { option: "lime", isCorrect: false },
          { option: "rhyme", isCorrect: false },
          { option: "mime", isCorrect: false },
        ],
        explanationVi: "Last a long 'time'.",
      },
    ],
  },
  {
    id: "b1-toeic-25",
    title: "Recipe Sharing - Email",
    level: "B1",
    content:
      "Hi Mom,\n\nCan you please send me your recipe for chocolate cake? I want to bake it for a friend's {{1}}. I remember it being very {{2}}. What ingredients do I {{3}}?\n\nI have flour and sugar, but I might need to buy eggs and {{4}}. Please let me know the oven temperature too. Thanks!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "birthday", isCorrect: true },
          { option: "workday", isCorrect: false },
          { option: "payday", isCorrect: false },
          { option: "holiday", isCorrect: false },
        ],
        explanationVi: "Friend's 'birthday'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "delicious", isCorrect: true },
          { option: "suspicious", isCorrect: false },
          { option: "vicious", isCorrect: false },
          { option: "ambitious", isCorrect: false },
        ],
        explanationVi: "Cake is 'delicious'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "need", isCorrect: true },
          { option: "feed", isCorrect: false },
          { option: "seed", isCorrect: false },
          { option: "bleed", isCorrect: false },
        ],
        explanationVi: "Ingredients I 'need'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "butter", isCorrect: true },
          { option: "better", isCorrect: false },
          { option: "bitter", isCorrect: false },
          { option: "batter", isCorrect: false },
        ],
        explanationVi: "Eggs and 'butter'.",
      },
    ],
  },
  {
    id: "b1-toeic-26",
    title: "Lost Pet - Flyer",
    level: "B1",
    content:
      "LOST DOG\n\nWe sort our dog, Max. He ran away yesterday evening. He is a small beagle with white and brown {{1}}. He is very friendly and loves {{2}}.\n\nHe was wearing a blue collar with his name on a {{3}}. We are very sad and worried. Please call us if you {{4}} him. Reward offered.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "fur", isCorrect: true },
          { option: "far", isCorrect: false },
          { option: "fear", isCorrect: false },
          { option: "fire", isCorrect: false },
        ],
        explanationVi: "White and brown 'fur'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "people", isCorrect: true },
          { option: "purple", isCorrect: false },
          { option: "simple", isCorrect: false },
          { option: "apple", isCorrect: false },
        ],
        explanationVi: "Loves 'people'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "tag", isCorrect: true },
          { option: "bag", isCorrect: false },
          { option: "flag", isCorrect: false },
          { option: "rag", isCorrect: false },
        ],
        explanationVi: "Name on a 'tag'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "see", isCorrect: true },
          { option: "sea", isCorrect: false },
          { option: "saw", isCorrect: false },
          { option: "say", isCorrect: false },
        ],
        explanationVi: "If you 'see' him.",
      },
    ],
  },
  {
    id: "b1-toeic-27",
    title: "Garage Sale - Flyer",
    level: "B1",
    content:
      "Huge Garage Sale this Saturday! We are moving and selling everything. Furniture, clothes, books, and {{1}}. Everything must {{2}}!\n\nThe sale starts at 8:00 AM. Early birds get the best {{3}}. Prices are very low. Come and find a {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "toys", isCorrect: true },
          { option: "boys", isCorrect: false },
          { option: "joys", isCorrect: false },
          { option: "soys", isCorrect: false },
        ],
        explanationVi: "Selling 'toys'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "go", isCorrect: true },
          { option: "no", isCorrect: false },
          { option: "so", isCorrect: false },
          { option: "do", isCorrect: false },
        ],
        explanationVi: "Everything must 'go' (be sold).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "deals", isCorrect: true },
          { option: "meals", isCorrect: false },
          { option: "heels", isCorrect: false },
          { option: "seals", isCorrect: false },
        ],
        explanationVi: "Best 'deals'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "bargain", isCorrect: true },
          { option: "captain", isCorrect: false },
          { option: "mountain", isCorrect: false },
          { option: "curtain", isCorrect: false },
        ],
        explanationVi: "Find a 'bargain'.",
      },
    ],
  },
  {
    id: "b1-toeic-28",
    title: "School Trip - Permission Slip",
    level: "B1",
    content:
      "Dear Parent,\n\nOur class is visiting the Science Museum on Friday. We will travel by {{1}}. Please sign this form to give {{2}}. Students should bring a packed {{3}}.\n\nWe will return to school by 3:00 PM. The trip is free of {{4}}. It will be an educational day.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "bus", isCorrect: true },
          { option: "plus", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "fuss", isCorrect: false },
        ],
        explanationVi: "Travel by 'bus'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "permission", isCorrect: true },
          { option: "admission", isCorrect: false },
          { option: "submission", isCorrect: false },
          { option: "commission", isCorrect: false },
        ],
        explanationVi: "Give 'permission'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "lunch", isCorrect: true },
          { option: "bunch", isCorrect: false },
          { option: "crunch", isCorrect: false },
          { option: "punch", isCorrect: false },
        ],
        explanationVi: "Packed 'lunch'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "charge", isCorrect: true },
          { option: "large", isCorrect: false },
          { option: "barge", isCorrect: false },
          { option: "surge", isCorrect: false },
        ],
        explanationVi: "Free of 'charge'.",
      },
    ],
  },
  {
    id: "b1-toeic-29",
    title: "Doctor's Note",
    level: "B1",
    content:
      "Date: Sept 10\nTo Whom It May Concern,\n\nThis letter is to certify that Jane Doe was examined today. She is suffering from the {{1}}. She needs to stay home and {{2}} for three days. She should be able to return to work on {{3}}.\n\nPlease excuse her absence during this illness. She has been prescribed medication and {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "flu", isCorrect: true },
          { option: "fly", isCorrect: false },
          { option: "flew", isCorrect: false },
          { option: "flow", isCorrect: false },
        ],
        explanationVi: "Suffering from 'flu'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "rest", isCorrect: true },
          { option: "pest", isCorrect: false },
          { option: "best", isCorrect: false },
          { option: "test", isCorrect: false },
        ],
        explanationVi: "Stay home and 'rest'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "Thursday", isCorrect: true },
          { option: "Yesterday", isCorrect: false },
          { option: "Holiday", isCorrect: false },
          { option: "Birthday", isCorrect: false },
        ],
        explanationVi: "Return on 'Thursday' (assuming context).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "liquids", isCorrect: true },
          { option: "solids", isCorrect: false },
          { option: "vapors", isCorrect: false },
          { option: "gases", isCorrect: false },
        ],
        explanationVi: "Medication and 'liquids'.",
      },
    ],
  },
  {
    id: "b1-toeic-30",
    title: "Thank You Note",
    level: "B1",
    content:
      "Dear Tom,\n\nThank you for the lovely gift. It was very {{1}} of you. I really like the color and {{2}}. It fits perfectly in my {{3}}. I will cherish it {{4}}.\n\nLet's get together for coffee soon. I want to hear about your new job. Take care.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "thoughtful", isCorrect: true },
          { option: "painful", isCorrect: false },
          { option: "fearful", isCorrect: false },
          { option: "careful", isCorrect: false },
        ],
        explanationVi: "'Thoughtful' means kind.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "style", isCorrect: true },
          { option: "mile", isCorrect: false },
          { option: "pile", isCorrect: false },
          { option: "file", isCorrect: false },
        ],
        explanationVi: "Color and 'style'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "room", isCorrect: true },
          { option: "broom", isCorrect: false },
          { option: "boom", isCorrect: false },
          { option: "gloom", isCorrect: false },
        ],
        explanationVi: "Fits in my 'room'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "forever", isCorrect: true },
          { option: "never", isCorrect: false },
          { option: "however", isCorrect: false },
          { option: "wherever", isCorrect: false },
        ],
        explanationVi: "Cherish it 'forever'.",
      },
    ],
  },
];
