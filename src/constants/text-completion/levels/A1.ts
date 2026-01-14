import { TextCompletionPassage } from "../types";

export const A1_TEXT_COMPLETION: TextCompletionPassage[] = [
  {
    id: "a1-1",
    title: "Party Invitation - Email",
    level: "A1",
    content:
      "To: All Friends\nFrom: Sarah\nSubject: Birthday Party\n\nI am having a birthday party next Saturday. It will be at my house. Please come at 6 {{1}}. We will have pizza and cake. I hope you can {{2}}.\n\nPlease let me know if you can come. You can email me or call my phone. It will be a lot of {{3}}. See you {{4}}!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "PM", isCorrect: true },
          { option: "CM", isCorrect: false },
          { option: "KM", isCorrect: false },
          { option: "MM", isCorrect: false },
        ],
        explanationVi:
          "Thời gian trong ngày thường được biểu thị bằng AM (buổi sáng) hoặc PM (buổi chiều/tối). Trong lời mời tiệc, '6 PM' có nghĩa là 6 giờ chiều.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "come", isCorrect: true },
          { option: "go", isCorrect: false },
          { option: "run", isCorrect: false },
          { option: "read", isCorrect: false },
        ],
        explanationVi:
          "Trong câu 'I hope you can come', 'come' là động từ chỉ hành động đến tham gia bữa tiệc.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "fun", isCorrect: true },
          { option: "sun", isCorrect: false },
          { option: "run", isCorrect: false },
          { option: "bun", isCorrect: false },
        ],
        explanationVi:
          "'Fun' là tính từ chỉ sự vui vẻ, phù hợp để mô tả một bữa tiệc sinh nhật.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "soon", isCorrect: true },
          { option: "moon", isCorrect: false },
          { option: "noon", isCorrect: false },
          { option: "room", isCorrect: false },
        ],
        explanationVi:
          "'Soon' là trạng từ chỉ thời gian sớm, dùng để chào tạm biệt và hẹn gặp lại.",
      },
    ],
  },
  {
    id: "a1-2",
    title: "Office Note",
    level: "A1",
    content:
      "To: Staff\nFrom: Manager\nSubject: Clean Desk\n\nPlease clean your desk before you go home. Put all papers in the {{1}}. Turn off your computer. We want the office to look {{2}}.\n\nThe cleaners come at night. They need space to work. If you have questions, ask {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "bin", isCorrect: true },
          { option: "car", isCorrect: false },
          { option: "sky", isCorrect: false },
          { option: "cat", isCorrect: false },
        ],
        explanationVi:
          "Bỏ giấy tờ vào 'bin' (thùng rác). Trong hướng dẫn dọn dẹp văn phòng, 'bin' là nơi chứa rác để giữ cho nơi làm việc sạch sẽ và gọn gàng.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "nice", isCorrect: true },
          { option: "bad", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "mad", isCorrect: false },
        ],
        explanationVi:
          "Chúng tôi muốn văn phòng trông 'nice' (đẹp/sạch sẽ). 'Nice' ở đây mô tả vẻ ngoài gọn gàng và chuyên nghiệp của không gian làm việc sau khi dọn dẹp.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "me", isCorrect: true },
          { option: "it", isCorrect: false },
          { option: "is", isCorrect: false },
          { option: "at", isCorrect: false },
        ],
        explanationVi:
          "Nếu có câu hỏi, hãy hỏi 'me' (tôi - người quản lý). Trong thông báo văn phòng, 'me' đề cập đến người gửi email là quản lý, khuyến khích nhân viên liên hệ trực tiếp khi cần hỗ trợ.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "help", isCorrect: true },
          { option: "ball", isCorrect: false },
          { option: "wall", isCorrect: false },
          { option: "tall", isCorrect: false },
        ],
        explanationVi:
          "Cảm ơn sự 'help' (giúp đỡ) của bạn. Quản lý bày tỏ lòng biết ơn đối với nhân viên vì đã tuân thủ hướng dẫn dọn dẹp văn phòng.",
      },
    ],
  },
  {
    id: "a1-3",
    title: "Meeting Reminder - Email",
    level: "A1",
    content:
      "To: Team\nSubject: Team Meeting\n\nDon't forget our meeting today. It is at 2:00 PM in Room A. We will talk about the new {{1}}. Please bring a pen and {{2}}.\n\nThe meeting is short. It will take 30 {{3}}. Please be on time. See you {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "project", isCorrect: true },
          { option: "apple", isCorrect: false },
          { option: "shoe", isCorrect: false },
          { option: "dog", isCorrect: false },
        ],
        explanationVi:
          "Chúng ta sẽ nói về 'project' (dự án) công việc. Cuộc họp sẽ thảo luận về dự án mới của công ty, là chủ đề chính của buổi họp.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "paper", isCorrect: true },
          { option: "water", isCorrect: false },
          { option: "butter", isCorrect: false },
          { option: "sister", isCorrect: false },
        ],
        explanationVi:
          "Hãy mang theo bút và 'paper' (giấy). Để ghi chú trong cuộc họp, người tham gia cần chuẩn bị dụng cụ viết và giấy.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "minutes", isCorrect: true },
          { option: "days", isCorrect: false },
          { option: "years", isCorrect: false },
          { option: "weeks", isCorrect: false },
        ],
        explanationVi:
          "Cuộc họp sẽ kéo dài 30 'minutes' (phút). Thời gian cuộc họp ngắn để đảm bảo hiệu quả và không chiếm nhiều thời gian của mọi người.",
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
        explanationVi:
          "Hẹn gặp bạn ở 'there' (đó - tại phòng họp). 'There' chỉ địa điểm cuộc họp là phòng A, không phải ở đây mà là ở đó.",
      },
    ],
  },
  {
    id: "a1-4",
    title: "Thank You - Email",
    level: "A1",
    content:
      "Dear Tom,\n\nThank you for the gift. The book is very {{1}}. I like to read about history. It was a nice {{2}}.\n\nI hope you are well. Let's meet for coffee next {{3}}. Call me when you are {{4}}. Thanks again.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "good", isCorrect: true },
          { option: "bad", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "mad", isCorrect: false },
        ],
        explanationVi: "Cuốn sách rất 'good' (tốt).",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "surprise", isCorrect: true },
          { option: "sun", isCorrect: false },
          { option: "sky", isCorrect: false },
          { option: "sea", isCorrect: false },
        ],
        explanationVi: "Một 'surprise' (bất ngờ) tốt.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "week", isCorrect: true },
          { option: "weak", isCorrect: false },
          { option: "walk", isCorrect: false },
          { option: "wake", isCorrect: false },
        ],
        explanationVi: "'Week' (tuần) tới.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "free", isCorrect: true },
          { option: "busy", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "slow", isCorrect: false },
        ],
        explanationVi: "Khi bạn 'free' (rảnh).",
      },
    ],
  },
  {
    id: "a1-5",
    title: "Lost Item - Notice",
    level: "A1",
    content:
      "HELP!\n\nI lost my red bag. I left it in the lunch room. It has my keys and my {{1}}. If you find it, please call me. My number is 555-0123. I need it {{2}}.\n\nThank you for your help. I will give a small {{3}} to the person who finds it. Please {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "wallet", isCorrect: true },
          { option: "wall", isCorrect: false },
          { option: "water", isCorrect: false },
          { option: "walk", isCorrect: false },
        ],
        explanationVi: "Chìa khóa và 'wallet' (ví) - đồ cá nhân.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "today", isCorrect: true },
          { option: "tomorrow", isCorrect: false },
          { option: "never", isCorrect: false },
          { option: "late", isCorrect: false },
        ],
        explanationVi: "Cần nó 'today' (hôm nay).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "gift", isCorrect: true },
          { option: "lift", isCorrect: false },
          { option: "sift", isCorrect: false },
          { option: "rift", isCorrect: false },
        ],
        explanationVi: "Tặng một 'gift' (quà) nhỏ - phần thưởng.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "help", isCorrect: true },
          { option: "sleep", isCorrect: false },
          { option: "run", isCorrect: false },
          { option: "eat", isCorrect: false },
        ],
        explanationVi: "Please 'help'.",
      },
    ],
  },
  {
    id: "a1-6",
    title: "New Employee - Email",
    level: "A1",
    content:
      "To: All Staff\nSubject: Welcome Mark\n\nPlease welcome Mark to our office. He is our new IT helper. He starts work {{1}}. His desk is near the door. Mark likes to play {{2}}.\n\nHe is very friendly. Please say hello to him. We are happy to have a new {{3}}. Let's make him feel {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "today", isCorrect: true },
          { option: "night", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "home", isCorrect: false },
        ],
        explanationVi: "Starts 'today'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "football", isCorrect: true },
          { option: "food", isCorrect: false },
          { option: "foot", isCorrect: false },
          { option: "book", isCorrect: false },
        ],
        explanationVi: "Play 'football'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "friend", isCorrect: true },
          { option: "enemy", isCorrect: false },
          { option: "dog", isCorrect: false },
          { option: "table", isCorrect: false },
        ],
        explanationVi: "A new 'friend' (colleague).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "welcome", isCorrect: true },
          { option: "sad", isCorrect: false },
          { option: "bad", isCorrect: false },
          { option: "mad", isCorrect: false },
        ],
        explanationVi: "Make him feel 'welcome'.",
      },
    ],
  },
  {
    id: "a1-7",
    title: "Vacation - Email",
    level: "A1",
    content:
      "To: Boss\nFrom: John\nSubject: Holiday\n\nI want to take a holiday next month. I want to go for one {{1}}. I will go to the beach with my {{2}}. Is this okay?\n\nI will finish my work before I go. I will check my email sometimes. Please let me {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "week", isCorrect: true },
          { option: "weak", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "cat", isCorrect: false },
        ],
        explanationVi: "One 'week'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "family", isCorrect: true },
          { option: "factory", isCorrect: false },
          { option: "farming", isCorrect: false },
          { option: "famous", isCorrect: false },
        ],
        explanationVi: "With my 'family'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "know", isCorrect: true },
          { option: "now", isCorrect: false },
          { option: "no", isCorrect: false },
          { option: "new", isCorrect: false },
        ],
        explanationVi: "Let me 'know'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "he", isCorrect: false },
          { option: "she", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a1-8",
    title: "Lunch - Email",
    level: "A1",
    content:
      "To: Ann\nFrom: Ben\nSubject: Lunch?\n\nAre you hungry? Let's go for lunch at 12:30. The new cafe is {{1}}. They have good sandwiches. It is not {{2}}.\n\nI can meet you by the lift. We can walk together. It is a nice day. Do you want to {{3}}? E-mail {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "open", isCorrect: true },
          { option: "close", isCorrect: false },
          { option: "old", isCorrect: false },
          { option: "cold", isCorrect: false },
        ],
        explanationVi: "Cafe is 'open'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "expensive", isCorrect: true },
          { option: "happy", isCorrect: false },
          { option: "small", isCorrect: false },
          { option: "red", isCorrect: false },
        ],
        explanationVi: "Not 'expensive' (cheap).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "come", isCorrect: true },
          { option: "home", isCorrect: false },
          { option: "some", isCorrect: false },
          { option: "dome", isCorrect: false },
        ],
        explanationVi: "Want to 'come'?",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "me", isCorrect: true },
          { option: "he", isCorrect: false },
          { option: "we", isCorrect: false },
          { option: "be", isCorrect: false },
        ],
        explanationVi: "Email 'me'.",
      },
    ],
  },
  {
    id: "a1-9",
    title: "Store Hours - Sign",
    level: "A1",
    content:
      "To: Customers\nSubject: New Hours\n\nWe have new hours for summer. We open at 9 AM and close at 8 {{1}}. We are open every day. Sunday we close at 5 PM.\n\nCome and see our new clothes. We have a sale this {{2}}. Everything is 20% off. It is a good {{3}}. See you at the {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "PM", isCorrect: true },
          { option: "AM", isCorrect: false },
          { option: "time", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Close at 8 'PM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "week", isCorrect: true },
          { option: "weak", isCorrect: false },
          { option: "walk", isCorrect: false },
          { option: "wake", isCorrect: false },
        ],
        explanationVi: "Sale this 'week'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "price", isCorrect: true },
          { option: "rice", isCorrect: false },
          { option: "ice", isCorrect: false },
          { option: "mouse", isCorrect: false },
        ],
        explanationVi: "Good 'price'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "store", isCorrect: true },
          { option: "star", isCorrect: false },
          { option: "stare", isCorrect: false },
          { option: "story", isCorrect: false },
        ],
        explanationVi: "At the 'store'.",
      },
    ],
  },
  {
    id: "a1-10",
    title: "Computer Help - Email",
    level: "A1",
    content:
      "To: IT Support\nFrom: Alice\nSubject: Broken PC\n\nMy computer is not working. The screen is {{1}}. I cannot see anything. I tried to turn it on and off.\n\nCan you come and {{2}} it? I have a lot of work today. Please help me {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "black", isCorrect: true },
          { option: "happy", isCorrect: false },
          { option: "fast", isCorrect: false },
          { option: "soft", isCorrect: false },
        ],
        explanationVi: "Screen is 'black'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "fix", isCorrect: true },
          { option: "mix", isCorrect: false },
          { option: "six", isCorrect: false },
          { option: "fox", isCorrect: false },
        ],
        explanationVi: "'Fix' (repair) it.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "soon", isCorrect: true },
          { option: "moon", isCorrect: false },
          { option: "room", isCorrect: false },
          { option: "spoon", isCorrect: false },
        ],
        explanationVi: "Help me 'soon'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "we", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a1-11",
    title: "Train Delay - Message",
    level: "A1",
    content:
      "To: Mom\nFrom: Sam\n\nThe train is late today. I will be home at 7 {{1}}. THe weather is bad so the train is {{2}}. Don't worry.\n\nI will eat dinner at home. Can you make pasta? I am very {{3}}. See you {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "PM", isCorrect: true },
          { option: "AM", isCorrect: false },
          { option: "hour", isCorrect: false },
          { option: "time", isCorrect: false },
        ],
        explanationVi: "7 'PM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "slow", isCorrect: true },
          { option: "fast", isCorrect: false },
          { option: "big", isCorrect: false },
          { option: "red", isCorrect: false },
        ],
        explanationVi: "Train is 'slow'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "hungry", isCorrect: true },
          { option: "angry", isCorrect: false },
          { option: "happy", isCorrect: false },
          { option: "funny", isCorrect: false },
        ],
        explanationVi: "I am 'hungry'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "later", isCorrect: true },
          { option: "water", isCorrect: false },
          { option: "paper", isCorrect: false },
          { option: "letter", isCorrect: false },
        ],
        explanationVi: "See you 'later'.",
      },
    ],
  },
  {
    id: "a1-12",
    title: "Office Kitchen - Sign",
    level: "A1",
    content:
      "To: All Staff\n\nPlease keep the kitchen clean. Wash your cups and {{1}}. Do not leave food in the fridge for a long time. Throw old food in the {{2}}.\n\nWe want a clean place to eat. Coffee is free for everyone. Please buy your own {{3}}. Thank you for your {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "plates", isCorrect: true },
          { option: "cars", isCorrect: false },
          { option: "pens", isCorrect: false },
          { option: "dogs", isCorrect: false },
        ],
        explanationVi: "Cups and 'plates'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "bin", isCorrect: true },
          { option: "box", isCorrect: false },
          { option: "bag", isCorrect: false },
          { option: "bed", isCorrect: false },
        ],
        explanationVi: "Throw in the 'bin'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "milk", isCorrect: true },
          { option: "water", isCorrect: false },
          { option: "air", isCorrect: false },
          { option: "ink", isCorrect: false },
        ],
        explanationVi: "Buy your own 'milk'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "help", isCorrect: true },
          { option: "name", isCorrect: false },
          { option: "game", isCorrect: false },
          { option: "same", isCorrect: false },
        ],
        explanationVi: "Thank you for 'help'.",
      },
    ],
  },
  {
    id: "a1-13",
    title: "Buy Sell - Ad",
    level: "A1",
    content:
      "FOR SALE: Bike\n\nI am selling my blue bike. It is two years old. It is good for {{1}}. The price is $50. It is very {{2}}.\n\nCome and see it at my house. I live at 10 Main Street. Call me at 555-9988. Ask for {{3}}. First come, first {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "city", isCorrect: true },
          { option: "sky", isCorrect: false },
          { option: "sea", isCorrect: false },
          { option: "bed", isCorrect: false },
        ],
        explanationVi: "Good for 'city' riding.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cheap", isCorrect: true },
          { option: "expensive", isCorrect: false },
          { option: "hard", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi: "Price is $50, so 'cheap'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "Mike", isCorrect: true },
          { option: "bike", isCorrect: false },
          { option: "like", isCorrect: false },
          { option: "hike", isCorrect: false },
        ],
        explanationVi: "Ask for 'Mike' (name).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "served", isCorrect: true },
          { option: "curved", isCorrect: false },
          { option: "nerved", isCorrect: false },
          { option: "swerved", isCorrect: false },
        ],
        explanationVi: "First come, first 'served'.",
      },
    ],
  },
  {
    id: "a1-14",
    title: "Doctor Appointment - Reminder",
    level: "A1",
    content:
      "To: Mrs. Jones\nFrom: Dr. Smith Office\nSubject: Appointment\n\nYou have an appointment tomorrow at 10 AM. Please come 10 minutes {{1}}. Bring your ID card. Use the main {{2}}.\n\nIf you cannot come, please call us. Our phone number is on the card. We hope you feel {{3}}. See you {{4}}.",
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
        explanationVi: "Come 'early'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "door", isCorrect: true },
          { option: "floor", isCorrect: false },
          { option: "roof", isCorrect: false },
          { option: "window", isCorrect: false },
        ],
        explanationVi: "Main 'door'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "better", isCorrect: true },
          { option: "bad", isCorrect: false },
          { option: "sick", isCorrect: false },
          { option: "hot", isCorrect: false },
        ],
        explanationVi: "Feel 'better'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "tomorrow", isCorrect: true },
          { option: "today", isCorrect: false },
          { option: "yesterday", isCorrect: false },
          { option: "now", isCorrect: false },
        ],
        explanationVi: "See you 'tomorrow'.",
      },
    ],
  },
  {
    id: "a1-15",
    title: "Missing Cat - Sign",
    level: "A1",
    content:
      "LOST CAT\n\nMy cat is missing. His name is Fluffy. He is white and {{1}}. He has green eyes. He is very {{2}}.\n\nHe was lost near the park. If you see him, please catch {{3}}. Call me anytime. I miss him very {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "soft", isCorrect: true },
          { option: "hard", isCorrect: false },
          { option: "red", isCorrect: false },
          { option: "blue", isCorrect: false },
        ],
        explanationVi: "Cat is 'soft'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cute", isCorrect: true },
          { option: "ugly", isCorrect: false },
          { option: "bad", isCorrect: false },
          { option: "mad", isCorrect: false },
        ],
        explanationVi: "Cat is 'cute'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "him", isCorrect: true },
          { option: "her", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "them", isCorrect: false },
        ],
        explanationVi: "Catch 'him'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "much", isCorrect: true },
          { option: "many", isCorrect: false },
          { option: "more", isCorrect: false },
          { option: "most", isCorrect: false },
        ],
        explanationVi: "Miss him very 'much'.",
      },
    ],
  },
  {
    id: "a1-16",
    title: "Bus Schedule - Notice",
    level: "A1",
    content:
      "To: Passengers\nSubject: Bus Change\n\nThe bus time will change next week. The Number 5 bus will come at 8:15 {{1}}. It will be 10 minutes later than before. Please be at the bus stop on {{2}}.\n\nThe bus will also stop at the new mall. The ticket price is the {{3}}. Thank you for riding the {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "AM", isCorrect: true },
          { option: "PM", isCorrect: false },
          { option: "hour", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Morning time 'AM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "time", isCorrect: true },
          { option: "late", isCorrect: false },
          { option: "day", isCorrect: false },
          { option: "road", isCorrect: false },
        ],
        explanationVi: "Be on 'time'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "same", isCorrect: true },
          { option: "game", isCorrect: false },
          { option: "name", isCorrect: false },
          { option: "lame", isCorrect: false },
        ],
        explanationVi: "Price is the 'same'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "bus", isCorrect: true },
          { option: "train", isCorrect: false },
          { option: "car", isCorrect: false },
          { option: "bike", isCorrect: false },
        ],
        explanationVi: "Riding the 'bus'.",
      },
    ],
  },
  {
    id: "a1-17",
    title: "Hotel Booking - Email",
    level: "A1",
    content:
      "Dear Mr. Brown,\n\nWe have your room ready. You will stay for two {{1}}. Your check-in time is 2 PM. Your room number is {{2}}.\n\nBreakfast is free. It is from 7 AM to 10 AM. We hope you like our {{3}}. Have a good {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "nights", isCorrect: true },
          { option: "days", isCorrect: false },
          { option: "lights", isCorrect: false },
          { option: "fights", isCorrect: false },
        ],
        explanationVi: "Stay for two 'nights'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "205", isCorrect: true },
          { option: "red", isCorrect: false },
          { option: "big", isCorrect: false },
          { option: "cat", isCorrect: false },
        ],
        explanationVi: "Room number '205'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "hotel", isCorrect: true },
          { option: "house", isCorrect: false },
          { option: "school", isCorrect: false },
          { option: "shop", isCorrect: false },
        ],
        explanationVi: "Like our 'hotel'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "trip", isCorrect: true },
          { option: "trap", isCorrect: false },
          { option: "tip", isCorrect: false },
          { option: "top", isCorrect: false },
        ],
        explanationVi: "Have a good 'trip'.",
      },
    ],
  },
  {
    id: "a1-18",
    title: "Library Notice - Email",
    level: "A1",
    content:
      "To: Student\nFrom: Library\nSubject: Late Book\n\nYou have a book from the library. The name is 'Learn English'. It was due last {{1}}. Please bring it back {{2}}.\n\nYou must pay a fine of $2. The library is open until 5 PM. Please come to the front {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "week", isCorrect: true },
          { option: "year", isCorrect: false },
          { option: "day", isCorrect: false },
          { option: "month", isCorrect: false },
        ],
        explanationVi: "Due last 'week'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "today", isCorrect: true },
          { option: "never", isCorrect: false },
          { option: "slow", isCorrect: false },
          { option: "late", isCorrect: false },
        ],
        explanationVi: "Bring it 'today'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "desk", isCorrect: true },
          { option: "chair", isCorrect: false },
          { option: "door", isCorrect: false },
          { option: "floor", isCorrect: false },
        ],
        explanationVi: "Front 'desk'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "us", isCorrect: false },
          { option: "we", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a1-19",
    title: "New Menu - Ad",
    level: "A1",
    content:
      "CAFE JOE - New Menu!\n\nWe have new food today. Try our chicken salad. It is very {{1}}. We also have chocolate {{2}}.\n\nCoffee is $2. Tests our new tea. It is hot and {{3}}. Come and {{4}}!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "tasty", isCorrect: true },
          { option: "dirty", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "angry", isCorrect: false },
        ],
        explanationVi: "Food is 'tasty'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "cake", isCorrect: true },
          { option: "lake", isCorrect: false },
          { option: "fake", isCorrect: false },
          { option: "rake", isCorrect: false },
        ],
        explanationVi: "Chocolate 'cake'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "sweet", isCorrect: true },
          { option: "sweat", isCorrect: false },
          { option: "swore", isCorrect: false },
          { option: "sew", isCorrect: false },
        ],
        explanationVi: "Hot and 'sweet'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "eat", isCorrect: true },
          { option: "sleep", isCorrect: false },
          { option: "run", isCorrect: false },
          { option: "fly", isCorrect: false },
        ],
        explanationVi: "Come and 'eat'.",
      },
    ],
  },
  {
    id: "a1-20",
    title: "Help Wanted - Sign",
    level: "A1",
    content:
      "JOB: Waiter Needed\n\nWe need a waiter for our new restaurant. You must work on weekends. The pay is $15 per {{1}}. You get free {{2}}.\n\nYou must be friendly and fast. If you want the job, please call Tom. His number is 555-4321. Start next {{3}}. Good {{4}}!",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "hour", isCorrect: true },
          { option: "day", isCorrect: false },
          { option: "minute", isCorrect: false },
          { option: "second", isCorrect: false },
        ],
        explanationVi: "Pay per 'hour'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "food", isCorrect: true },
          { option: "car", isCorrect: false },
          { option: "house", isCorrect: false },
          { option: "dog", isCorrect: false },
        ],
        explanationVi: "Free 'food' (meal).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "week", isCorrect: true },
          { option: "weak", isCorrect: false },
          { option: "walk", isCorrect: false },
          { option: "wake", isCorrect: false },
        ],
        explanationVi: "Start next 'week'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "luck", isCorrect: true },
          { option: "duck", isCorrect: false },
          { option: "truck", isCorrect: false },
          { option: "muck", isCorrect: false },
        ],
        explanationVi: "Good 'luck'.",
      },
    ],
  },
  {
    id: "a1-21",
    title: "Weather - Report",
    level: "A1",
    content:
      "Tomorrow will be a rainy day. Please take your {{1}}. It will be cold in the morning. Wear a warm {{2}}.\n\nThe sun will come out at 3 PM. It will be nice in the evening. You can go to the {{3}}. Have a nice {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "umbrella", isCorrect: true },
          { option: "book", isCorrect: false },
          { option: "cat", isCorrect: false },
          { option: "pen", isCorrect: false },
        ],
        explanationVi: "Rainy, take 'umbrella'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "coat", isCorrect: true },
          { option: "boat", isCorrect: false },
          { option: "goat", isCorrect: false },
          { option: "moat", isCorrect: false },
        ],
        explanationVi: "Wear a warm 'coat'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "park", isCorrect: true },
          { option: "dark", isCorrect: false },
          { option: "bark", isCorrect: false },
          { option: "shark", isCorrect: false },
        ],
        explanationVi: "Go to the 'park'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "day", isCorrect: true },
          { option: "night", isCorrect: false },
          { option: "week", isCorrect: false },
          { option: "month", isCorrect: false },
        ],
        explanationVi: "Have a nice 'day'.",
      },
    ],
  },
  {
    id: "a1-22",
    title: "Running Late - Text",
    level: "A1",
    content:
      "To: Jane\nFrom: Kim\n\nI am sorry I am late. The traffic is very {{1}}. I will be there in 20 {{2}}. Please wait for me.\n\nI am on the bus now. Order a drink for yourself. I will pay for it. See you {{3}}. Sorry {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "bad", isCorrect: true },
          { option: "good", isCorrect: false },
          { option: "nice", isCorrect: false },
          { option: "happy", isCorrect: false },
        ],
        explanationVi: "Traffic is 'bad'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "minutes", isCorrect: true },
          { option: "hours", isCorrect: false },
          { option: "days", isCorrect: false },
          { option: "years", isCorrect: false },
        ],
        explanationVi: "In 20 'minutes'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "soon", isCorrect: true },
          { option: "moon", isCorrect: false },
          { option: "noon", isCorrect: false },
          { option: "room", isCorrect: false },
        ],
        explanationVi: "See you 'soon'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "again", isCorrect: true },
          { option: "then", isCorrect: false },
          { option: "when", isCorrect: false },
          { option: "pen", isCorrect: false },
        ],
        explanationVi: "Sorry 'again'.",
      },
    ],
  },
  {
    id: "a1-23",
    title: "Class Change - Note",
    level: "A1",
    content:
      "To: English Class\nFrom: Teacher\nSubject: Room Change\n\nToday our class is in a new room. Go to Room 102. It is on the first {{1}}. The old room is too {{2}}.\n\nPlease bring your books. We will read a story. Class starts at 9 {{3}}. Don't be {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "floor", isCorrect: true },
          { option: "door", isCorrect: false },
          { option: "roof", isCorrect: false },
          { option: "wall", isCorrect: false },
        ],
        explanationVi: "First 'floor'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "small", isCorrect: true },
          { option: "big", isCorrect: false },
          { option: "good", isCorrect: false },
          { option: "nice", isCorrect: false },
        ],
        explanationVi: "Room is too 'small'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "AM", isCorrect: true },
          { option: "PM", isCorrect: false },
          { option: "time", isCorrect: false },
          { option: "day", isCorrect: false },
        ],
        explanationVi: "Starts at 9 'AM'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "late", isCorrect: true },
          { option: "early", isCorrect: false },
          { option: "happy", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi: "Don't be 'late'.",
      },
    ],
  },
  {
    id: "a1-24",
    title: "Movie Invite - Email",
    level: "A1",
    content:
      "To: Paul\nFrom: Dave\nSubject: Movie?\n\nDo you want to see a movie tonight? There is a new Action {{1}}. It starts at 7 PM. The ticket is $10.\n\nWe can get popcorn. I love movie {{2}}. I can pick you up at 6:30. Let me {{3}}. Best {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "movie", isCorrect: true },
          { option: "book", isCorrect: false },
          { option: "song", isCorrect: false },
          { option: "game", isCorrect: false },
        ],
        explanationVi: "Action 'movie'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "snacks", isCorrect: true },
          { option: "books", isCorrect: false },
          { option: "cars", isCorrect: false },
          { option: "pens", isCorrect: false },
        ],
        explanationVi: "Movie 'snacks' (popcorn).",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "know", isCorrect: true },
          { option: "now", isCorrect: false },
          { option: "no", isCorrect: false },
          { option: "new", isCorrect: false },
        ],
        explanationVi: "Let me 'know'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "friend", isCorrect: true },
          { option: "enemy", isCorrect: false },
          { option: "boss", isCorrect: false },
          { option: "dog", isCorrect: false },
        ],
        explanationVi:
          "Best 'friend' (or regards, but friend works for casual).",
      },
    ],
  },
  {
    id: "a1-25",
    title: "Car Rental - Ad",
    level: "A1",
    content:
      "NEED A CAR?\n\nRent a car from us. We have small and big cars. The price is low. Only $30 a {{1}}. It is very {{2}}.\n\nWe are near the airport. Open 24 hours. Call us to book a car. We have red and blue {{3}}. Drive {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "day", isCorrect: true },
          { option: "year", isCorrect: false },
          { option: "month", isCorrect: false },
          { option: "minute", isCorrect: false },
        ],
        explanationVi: "$30 a 'day'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "easy", isCorrect: true },
          { option: "hard", isCorrect: false },
          { option: "sad", isCorrect: false },
          { option: "bad", isCorrect: false },
        ],
        explanationVi: "It is very 'easy'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "cars", isCorrect: true },
          { option: "cats", isCorrect: false },
          { option: "cups", isCorrect: false },
          { option: "caps", isCorrect: false },
        ],
        explanationVi: "Red and blue 'cars'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "safely", isCorrect: true },
          { option: "badly", isCorrect: false },
          { option: "sadly", isCorrect: false },
          { option: "madly", isCorrect: false },
        ],
        explanationVi: "Drive 'safely'.",
      },
    ],
  },
  {
    id: "a1-26",
    title: "Gym - Sign",
    level: "A1",
    content:
      "Be Fit Gym\n\nCome to our gym. We have new machines. We are open all day and all {{1}}. You can exercise anytime.\n\nA month costs $20. Bring a towel and water. We have showers too. Get strong and {{2}}. Join {{3}}. See {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "night", isCorrect: true },
          { option: "fight", isCorrect: false },
          { option: "light", isCorrect: false },
          { option: "sight", isCorrect: false },
        ],
        explanationVi: "All day and all 'night'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "healthy", isCorrect: true },
          { option: "sick", isCorrect: false },
          { option: "tired", isCorrect: false },
          { option: "lazy", isCorrect: false },
        ],
        explanationVi: "Strong and 'healthy'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "today", isCorrect: true },
          { option: "yesterday", isCorrect: false },
          { option: "never", isCorrect: false },
          { option: "late", isCorrect: false },
        ],
        explanationVi: "Join 'today'.",
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
        explanationVi: "See 'you'.",
      },
    ],
  },
  {
    id: "a1-27",
    title: "Music Festival - Poster",
    level: "A1",
    content:
      "Summer Music Festival\n\nCome to the park on Sunday. Hear live music. Many bands will {{1}}. There is also food and drinks.\n\nThe ticket is free. Bring your friends and {{2}}. It starts at 2 PM. It will be a {{3}} day. Don't {{4}} it.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "play", isCorrect: true },
          { option: "work", isCorrect: false },
          { option: "sleep", isCorrect: false },
          { option: "eat", isCorrect: false },
        ],
        explanationVi: "Bands will 'play'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "family", isCorrect: true },
          { option: "enemy", isCorrect: false },
          { option: "boss", isCorrect: false },
          { option: "car", isCorrect: false },
        ],
        explanationVi: "Friends and 'family'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "fun", isCorrect: true },
          { option: "sad", isCorrect: false },
          { option: "bad", isCorrect: false },
          { option: "mad", isCorrect: false },
        ],
        explanationVi: "A 'fun' day.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "miss", isCorrect: true },
          { option: "kiss", isCorrect: false },
          { option: "hiss", isCorrect: false },
          { option: "this", isCorrect: false },
        ],
        explanationVi: "Don't 'miss' it.",
      },
    ],
  },
  {
    id: "a1-28",
    title: "Restaurant Booking - Email",
    level: "A1",
    content:
      "To: Pizza Place\nFrom: John\nSubject: Table for 4\n\nI want to book a table for Saturday night. There are 4 people. We will come at 7 {{1}}. We like pizza and pasta.\n\nDo you have a table? Please email me back. My phone number is 123-4567. We are very {{2}}. check your {{3}}. Thank {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "PM", isCorrect: true },
          { option: "AM", isCorrect: false },
          { option: "day", isCorrect: false },
          { option: "week", isCorrect: false },
        ],
        explanationVi: "7 'PM'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "hungry", isCorrect: true },
          { option: "angry", isCorrect: false },
          { option: "full", isCorrect: false },
          { option: "sad", isCorrect: false },
        ],
        explanationVi: "We are 'hungry'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "schedule", isCorrect: true },
          { option: "school", isCorrect: false },
          { option: "shoe", isCorrect: false },
          { option: "sky", isCorrect: false },
        ],
        explanationVi: "Check your 'schedule' (bookings).",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "you", isCorrect: true },
          { option: "me", isCorrect: false },
          { option: "it", isCorrect: false },
          { option: "us", isCorrect: false },
        ],
        explanationVi: "Thank 'you'.",
      },
    ],
  },
  {
    id: "a1-29",
    title: "Room for Rent - Sign",
    level: "A1",
    content:
      "ROOMMATE WANTED\n\nI have a nice room in my house. It is big and sunny. You share the kitchen and {{1}}. The rent is $400 a month.\n\nI am quiet and clean. I look for a nice person. No pets allowed. Call me if {{2}}. Come and {{3}}. Good {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "bathroom", isCorrect: true },
          { option: "car", isCorrect: false },
          { option: "bed", isCorrect: false },
          { option: "roof", isCorrect: false },
        ],
        explanationVi: "Kitchen and 'bathroom'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "interested", isCorrect: true },
          { option: "bored", isCorrect: false },
          { option: "tired", isCorrect: false },
          { option: "sick", isCorrect: false },
        ],
        explanationVi: "If 'interested'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "visit", isCorrect: true },
          { option: "run", isCorrect: false },
          { option: "fly", isCorrect: false },
          { option: "swim", isCorrect: false },
        ],
        explanationVi: "Come and 'visit'.",
      },
      {
        id: "q4",
        placeholderIndex: 4,
        options: [
          { option: "location", isCorrect: true },
          { option: "station", isCorrect: false },
          { option: "nation", isCorrect: false },
          { option: "ration", isCorrect: false },
        ],
        explanationVi: "Good 'location'.",
      },
    ],
  },
  {
    id: "a1-30",
    title: "Taxi Request - Text",
    level: "A1",
    content:
      "To: Taxi Co.\nFrom: Mary\n\nI need a taxi now. I am at the train station. I want to go to the City {{1}}. Please come fast.\n\nI have two heavy bags. I have cash to pay. My coat is red. I will wait by the {{2}}. Thank you very {{3}}. See {{4}}.",
    questions: [
      {
        id: "q1",
        placeholderIndex: 1,
        options: [
          { option: "Hotel", isCorrect: true },
          { option: "Sky", isCorrect: false },
          { option: "Sea", isCorrect: false },
          { option: "Sun", isCorrect: false },
        ],
        explanationVi: "City 'Hotel'.",
      },
      {
        id: "q2",
        placeholderIndex: 2,
        options: [
          { option: "door", isCorrect: true },
          { option: "floor", isCorrect: false },
          { option: "roof", isCorrect: false },
          { option: "window", isCorrect: false },
        ],
        explanationVi: "Wait by the 'door'.",
      },
      {
        id: "q3",
        placeholderIndex: 3,
        options: [
          { option: "much", isCorrect: true },
          { option: "many", isCorrect: false },
          { option: "more", isCorrect: false },
          { option: "most", isCorrect: false },
        ],
        explanationVi: "Thank you very 'much'.",
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
        explanationVi: "See 'you'.",
      },
    ],
  },
];
