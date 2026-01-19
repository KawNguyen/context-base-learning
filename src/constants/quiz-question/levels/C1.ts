import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "C1-0001",
    questionEn: "Little _____ realize the impact of his words.",
    questionVi:
      "Anh ta hầu như _____ chẳng nhận thức được tác động từ những lời nói của mình.",
    options: [
      { option: "did he realize", isCorrect: true },
      { option: "he realized", isCorrect: false },
      { option: "he did realize", isCorrect: false },
      { option: "realized he", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Little.",
    category: "Other",
  },
  {
    id: "C1-0002",
    questionEn: "Not only _____ late, but he also forgot his book.",
    questionVi: "Không chỉ _____ đến muộn, anh ta còn quên cả mang sách nữa.",
    options: [
      { option: "did he arrive", isCorrect: true },
      { option: "he arrived", isCorrect: false },
      { option: "arrived he", isCorrect: false },
      { option: "he did arrive", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Not only.",
    category: "Other",
  },
  {
    id: "C1-0003",
    questionEn: "Only after I asked him _____ the truth.",
    questionVi: "Chỉ sau khi tôi hỏi thì anh ta _____ mới nói ra sự thật.",
    options: [
      { option: "did he tell", isCorrect: true },
      { option: "told he", isCorrect: false },
      { option: "he told", isCorrect: false },
      { option: "he did tell", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Only after.",
    category: "Other",
  },
  {
    id: "C1-0004",
    questionEn: "Were it not for your help, I _____.",
    questionVi:
      "Nếu không nhờ có sự giúp đỡ của bạn, tôi _____ đã thất bại rồi.",
    options: [
      { option: "would have failed", isCorrect: true },
      { option: "failed", isCorrect: false },
      { option: "will fail", isCorrect: false },
      { option: "had failed", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện loại 3 đảo ngữ (Were it not for = If it hadn't been for).",
    category: "Other",
  },
  {
    id: "C1-0005",
    questionEn: "But for his advice, I _____ lost.",
    questionVi:
      "Nếu không nhờ có lời khuyên của anh ấy, tôi _____ đã bị lạc đường.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "will be", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "But for + Noun phrase (~ If clause).",
    category: "First Conditional",
  },
  {
    id: "C1-0006",
    questionEn: "Had I known you were coming, I _____ a cake.",
    questionVi: "Nếu biết bạn sẽ đến, tôi _____ đã nướng một chiếc bánh rồi.",
    options: [
      { option: "would have baked", isCorrect: true },
      { option: "baked", isCorrect: false },
      { option: "will bake", isCorrect: false },
      { option: "bake", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ loại 3.",
    category: "Other",
  },
  {
    id: "C1-0007",
    questionEn: "Should you need assistance, please _____ us.",
    questionVi:
      "Nếu bạn cần sự trợ giúp, làm ơn hãy _____ liên hệ với chúng tôi.",
    options: [
      { option: "contact", isCorrect: true },
      { option: "contacted", isCorrect: false },
      { option: "contacting", isCorrect: false },
      { option: "to contact", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ loại 1: Should + S + V.",
    category: "Should / Ought to",
  },
  {
    id: "C1-0008",
    questionEn: "Unless _____, I won't go.",
    questionVi: "Trừ khi _____ được mời, nếu không tôi sẽ không đi.",
    options: [
      { option: "invited", isCorrect: true },
      { option: "inviting", isCorrect: false },
      { option: "invite", isCorrect: false },
      { option: "invites", isCorrect: false },
    ],
    explanationVi: "Rút gọn mệnh đề: Unless (I am) invited.",
    category: "Other",
  },
  {
    id: "C1-0009",
    questionEn: "Hardly had I arrived _____ the trouble started.",
    questionVi: "Tôi vừa mới đến nơi _____ thì rắc rối ập đến.",
    options: [
      { option: "when", isCorrect: true },
      { option: "than", isCorrect: false },
      { option: "then", isCorrect: false },
      { option: "after", isCorrect: false },
    ],
    explanationVi: "Hardly ... when.",
    category: "Other",
  },
  {
    id: "C1-0010",
    questionEn: "No sooner had we left _____ it began to rain.",
    questionVi: "Chúng tôi vừa mới rời đi _____ thì trời bắt đầu mưa.",
    options: [
      { option: "than", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "then", isCorrect: false },
      { option: "after", isCorrect: false },
    ],
    explanationVi: "No sooner ... than.",
    category: "Other",
  },
  {
    id: "C1-0011",
    questionEn: "Scarcely had he spoken _____ she interrupted.",
    questionVi: "Anh ấy vừa mới kịp nói _____ thì cô ấy đã ngắt lời.",
    options: [
      { option: "when", isCorrect: true },
      { option: "than", isCorrect: false },
      { option: "then", isCorrect: false },
      { option: "after", isCorrect: false },
    ],
    explanationVi: "Scarcely ... when.",
    category: "Other",
  },
  {
    id: "C1-0012",
    questionEn: "It was not until midnight _____ he returned.",
    questionVi: "Phải mãi đến nửa đêm _____ anh ấy mới quay về.",
    options: [
      { option: "that", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "then", isCorrect: false },
      { option: "after", isCorrect: false },
    ],
    explanationVi: "Cấu trúc nhấn mạnh: It was not until ... that.",
    category: "Other",
  },
  {
    id: "C1-0013",
    questionEn: "Rarely _____ eaten such delicious food.",
    questionVi: "Hiếm khi _____ tôi được ăn món ăn nào ngon như thế này.",
    options: [
      { option: "have I", isCorrect: true },
      { option: "I have", isCorrect: false },
      { option: "did I", isCorrect: false },
      { option: "I did", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Rarely.",
    category: "Other",
  },
  {
    id: "C1-0014",
    questionEn: "Nowhere _____ find such kindness.",
    questionVi: "Không nơi nào _____ bạn có thể tìm thấy sự tử tế như vậy.",
    options: [
      { option: "will you", isCorrect: true },
      { option: "you will", isCorrect: false },
      { option: "did you", isCorrect: false },
      { option: "you did", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Nowhere.",
    category: "Other",
  },
  {
    id: "C1-0015",
    questionEn: "On no account _____ be disturbed.",
    questionVi:
      "Dù trong bất kỳ hoàn cảnh nào, quản lý _____ không được phép bị làm phiền.",
    options: [
      { option: "must the manager", isCorrect: true },
      { option: "the manager must", isCorrect: false },
      { option: "mustn't the manager", isCorrect: false },
      { option: "the manager mustn't", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với On no account.",
    category: "Other",
  },
  {
    id: "C1-0016",
    questionEn: "In no way _____ responsible for this.",
    questionVi:
      "Dù thế nào đi nữa, tôi _____ không phải chịu trách nhiệm về việc này.",
    options: [
      { option: "am I", isCorrect: true },
      { option: "I am", isCorrect: false },
      { option: "do I", isCorrect: false },
      { option: "I do", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với In no way.",
    category: "Other",
  },
  {
    id: "C1-0017",
    questionEn: "By no means _____ true.",
    questionVi: "Dù thế nào thì điều này _____ không thể là sự thật được.",
    options: [
      { option: "is this", isCorrect: true },
      { option: "this is", isCorrect: false },
      { option: "does this", isCorrect: false },
      { option: "this does", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với By no means.",
    category: "Other",
  },
  {
    id: "C1-0018",
    questionEn: "So angry _____ that he slammed the door.",
    questionVi: "Anh ta giận dữ _____ đến nỗi đã đóng sầm cửa lại.",
    options: [
      { option: "was he", isCorrect: true },
      { option: "he was", isCorrect: false },
      { option: "did he", isCorrect: false },
      { option: "he did", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với So + adj.",
    category: "Other",
  },
  {
    id: "C1-0019",
    questionEn: "Such _____ that we couldn't go out.",
    questionVi: "Cơn bão _____ mạnh đến nỗi chúng tôi không thể đi ra ngoài.",
    options: [
      { option: "was the storm", isCorrect: true },
      { option: "the storm was", isCorrect: false },
      { option: "did the storm", isCorrect: false },
      { option: "the storm did", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Such + be + N.",
    category: "Other",
  },
  {
    id: "C1-0020",
    questionEn: "Strange _____ it may seem, I like it.",
    questionVi: "Dù có vẻ _____ lạ lùng, nhưng tôi lại thích nó.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "although", isCorrect: false },
    ],
    explanationVi: "Adj + as + S + V.",
    category: "Other",
  },
  {
    id: "C1-0021",
    questionEn: "Try _____ he might, he couldn't lift it.",
    questionVi:
      "Dù anh ta có cố gắng _____ đến thế nào, anh ta cũng không thể nhấc nó lên.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "although", isCorrect: false },
    ],
    explanationVi: "Try as sbd might.",
    category: "Other",
  },
  {
    id: "C1-0022",
    questionEn: "Much _____ I respect him, I disagree.",
    questionVi: "Mặc dù _____ tôi rất tôn trọng anh ấy, nhưng tôi không đồng ý.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi: "Much as (Mặc dù).",
    category: "Other",
  },
  {
    id: "C1-0023",
    questionEn: "Never before _____ such a crisis.",
    questionVi:
      "Chưa bao giờ _____ chúng ta phải đối mặt với một cuộc khủng hoảng như vậy.",
    options: [
      { option: "have we faced", isCorrect: true },
      { option: "we have faced", isCorrect: false },
      { option: "did we face", isCorrect: false },
      { option: "we face", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ Never before.",
    category: "Other",
  },
  {
    id: "C1-0024",
    questionEn: "_____ what happens, stay calm.",
    questionVi: "_____ có chuyện gì xảy ra đi nữa, hãy cứ giữ bình tĩnh nhé.",
    options: [
      { option: "No matter", isCorrect: true },
      { option: "Whatever", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Even if", isCorrect: false },
    ],
    explanationVi: "No matter what.",
    category: "Other",
  },
  {
    id: "C1-0025",
    questionEn: "Be that _____ it may, I still refuse.",
    questionVi: "Dù _____ có là như vậy đi nữa, tôi vẫn từ chối.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "if", isCorrect: false },
      { option: "when", isCorrect: false },
    ],
    explanationVi: "Be that as it may (Dù vậy).",
    category: "Other",
  },
  {
    id: "C1-0026",
    questionEn: "Come what _____, I will support you.",
    questionVi: "Dù chuyện gì _____ có xảy ra đi nữa, tôi sẽ luôn ủng hộ bạn.",
    options: [
      { option: "may", isCorrect: true },
      { option: "might", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
    ],
    explanationVi: "Come what may (Dù chuyện gì xảy ra).",
    category: "Other",
  },
  {
    id: "C1-0027",
    questionEn: "Suffice it to _____, we won.",
    questionVi: "Chỉ _____ cần nói là chúng tôi đã thắng.",
    options: [
      { option: "say", isCorrect: true },
      { option: "tell", isCorrect: false },
      { option: "speak", isCorrect: false },
      { option: "talk", isCorrect: false },
    ],
    explanationVi: "Suffice it to say (Chỉ cần nói là).",
    category: "Other",
  },
  {
    id: "C1-0028",
    questionEn: "_____ told me, I would have come.",
    questionVi: "_____ bạn nói cho tôi biết, tôi đã đến rồi.",
    options: [
      { option: "Had you", isCorrect: true },
      { option: "If you", isCorrect: false },
      { option: "Did you", isCorrect: false },
      { option: "You had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ loại 3.",
    category: "Other",
  },
  {
    id: "C1-0029",
    questionEn: "Assuming that X _____ true, Y is false.",
    questionVi: "Giả sử rằng X _____ đúng, thì Y là sai.",
    options: [
      { option: "is", isCorrect: true },
      { option: "be", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Assuming that.",
    category: "Other",
  },
  {
    id: "C1-0030",
    questionEn: "Whatever you do, don't _____ up.",
    questionVi: "Dù bạn làm gì đi nữa, cũng đừng _____ bỏ cuộc nhé.",
    options: [
      { option: "give", isCorrect: true },
      { option: "giving", isCorrect: false },
      { option: "gave", isCorrect: false },
      { option: "given", isCorrect: false },
    ],
    explanationVi: "Mệnh lệnh.",
    category: "Other",
  },
  {
    id: "C1-0031",
    questionEn: "It is high time the government _____ action.",
    questionVi: "Đã đến lúc chính phủ _____ cần phải hành động rồi.",
    options: [
      { option: "took", isCorrect: true },
      { option: "take", isCorrect: false },
      { option: "taking", isCorrect: false },
      { option: "taken", isCorrect: false },
    ],
    explanationVi: "It is high time + S + V(past).",
    category: "Other",
  },
  {
    id: "C1-0032",
    questionEn: "If I _____ to win, I would be happy.",
    questionVi: "Nếu tôi _____ thắng, tôi sẽ thấy rất hạnh phúc.",
    options: [
      { option: "were", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "be", isCorrect: false },
    ],
    explanationVi: "If + S + to V (tương lai trong quá khứ/giả định).",
    category: "First Conditional",
  },
  {
    id: "C1-0033",
    questionEn: "Suppose you _____ job, what would you do?",
    questionVi: "Giả sử bạn _____ bị mất việc, bạn sẽ làm gì?",
    options: [
      { option: "lost", isCorrect: true },
      { option: "lose", isCorrect: false },
      { option: "losing", isCorrect: false },
      { option: "losed", isCorrect: false },
    ],
    explanationVi: "Suppose = If.",
    category: "First Conditional",
  },
  {
    id: "C1-0034",
    questionEn: "Even if it _____ rains, we will play.",
    questionVi: "Dù cho trời _____ có mưa đi nữa, chúng tôi vẫn sẽ chơi.",
    options: [
      { option: "", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi: "Even if + present.",
    category: "Other",
  },
  {
    id: "C1-0035",
    questionEn: "Whether he comes _____ not, we start.",
    questionVi: "Liệu anh ấy có đến _____ hay không, chúng ta vẫn sẽ bắt đầu.",
    options: [
      { option: "or", isCorrect: true },
      { option: "and", isCorrect: false },
      { option: "but", isCorrect: false },
      { option: "so", isCorrect: false },
    ],
    explanationVi: "Whether ... or not.",
    category: "Other",
  },
  {
    id: "C1-0036",
    questionEn: "Rich _____ he is, he is mean.",
    questionVi: "Dù anh ta _____ có giàu có, anh ta vẫn rất keo kiệt.",
    options: [
      { option: "as", isCorrect: true },
      { option: "though", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "but", isCorrect: false },
    ],
    explanationVi: "Adj + as + S + V.",
    category: "Other",
  },
  {
    id: "C1-0037",
    questionEn: "Loudly _____ he shouted, no one heard.",
    questionVi:
      "Dù anh ta _____ có hét to đến mức nào, cũng chẳng ai nghe thấy.",
    options: [
      { option: "though", isCorrect: true },
      { option: "as", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "even", isCorrect: false },
    ],
    explanationVi: "Adv + though + S + V.",
    category: "Other",
  },
  {
    id: "C1-0038",
    questionEn: "Naked _____ the eye, bacteria are invisible.",
    questionVi: "Bằng mắt _____ thường, vi khuẩn là vô hình.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi: "Naked to the eye (mắt thường).",
    category: "Other",
  },
  {
    id: "C1-0039",
    questionEn: "Dependent _____ charity, he survived.",
    questionVi: "Nhờ _____ vào sự từ thiện, anh ấy đã sống sót.",
    options: [
      { option: "on", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Dependent on.",
    category: "Other",
  },
  {
    id: "C1-0040",
    questionEn: "Irrespective _____ age, anyone can join.",
    questionVi: "Bất kể _____ độ tuổi, ai cũng có thể tham gia.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Irrespective of (bất kể).",
    category: "Other",
  },
  {
    id: "C1-0041",
    questionEn: "Regardless _____ the cost, I want it.",
    questionVi: "Bất kể _____ giá cả ra sao, tôi vẫn muốn nó.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Regardless of.",
    category: "Other",
  },
  {
    id: "C1-0042",
    questionEn: "Prior _____ the meeting, we ate.",
    questionVi: "Trước _____ khi cuộc họp diễn ra, chúng tôi đã ăn rồi.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Prior to.",
    category: "Other",
  },
  {
    id: "C1-0043",
    questionEn: "According _____ the report, sales differ.",
    questionVi: "Theo _____ như báo cáo, doanh số bán hàng có sự khác biệt.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "According to.",
    category: "Other",
  },
  {
    id: "C1-0044",
    questionEn: "Thanks _____ your help, we succeeded.",
    questionVi: "Nhờ _____ có sự giúp đỡ của bạn, chúng tôi đã thành công.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Thanks to.",
    category: "Other",
  },
  {
    id: "C1-0045",
    questionEn: "Due _____ the rain, we stopped.",
    questionVi: "Do _____ trời mưa, chúng tôi đã dừng lại.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Due to.",
    category: "Other",
  },
  {
    id: "C1-0046",
    questionEn: "Owing _____ his effort, he passed.",
    questionVi: "Nhờ _____ vào nỗ lực của mình, anh ấy đã thi đỗ.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Owing to.",
    category: "Other",
  },
  {
    id: "C1-0047",
    questionEn: "On behalf _____ the company, I welcome you.",
    questionVi: "Thay mặt _____ cho công ty, tôi chào đón bạn.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi: "On behalf of.",
    category: "Other",
  },
  {
    id: "C1-0048",
    questionEn: "In terms _____ quality, it is the best.",
    questionVi: "Xét về _____ khía cạnh chất lượng, nó là tốt nhất.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi: "In terms of.",
    category: "Other",
  },
  {
    id: "C1-0049",
    questionEn: "With a view _____ expanding, we hired more.",
    questionVi: "Với mục đích _____ là mở rộng, chúng tôi đã thuê thêm người.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "With a view to + V-ing/N.",
    category: "Other",
  },
  {
    id: "C1-0050",
    questionEn: "In addition _____ English, he speaks French.",
    questionVi: "Ngoài _____ tiếng Anh ra, anh ấy còn nói được tiếng Pháp.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "In addition to.",
    category: "Other",
  },
  {
    id: "C1-0051",
    questionEn: "Contrary _____ popular belief, pigs are smart.",
    questionVi:
      "Trái _____ ngược với quan niệm phổ biến, lợn là loài vật thông minh.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Contrary to.",
    category: "Other",
  },
  {
    id: "C1-0052",
    questionEn: "Apart _____ me, everyone went.",
    questionVi: "Ngoài _____ tôi ra, tất cả mọi người đều đã đi.",
    options: [
      { option: "from", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Apart from.",
    category: "Other",
  },
  {
    id: "C1-0053",
    questionEn: "As well _____ French, she speaks German.",
    questionVi: "Cũng như _____ nói tiếng Pháp, cô ấy còn có thể nói tiếng Đức.",
    options: [
      { option: "as", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "As well as.",
    category: "Other",
  },
  {
    id: "C1-0054",
    questionEn: "Instead _____ going out, we stayed home.",
    questionVi: "Thay _____ vì đi ra ngoài, chúng tôi đã ở nhà.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Instead of.",
    category: "Other",
  },
  {
    id: "C1-0055",
    questionEn: "In spite _____ his age, he runs fast.",
    questionVi: "Mặc _____ dù đã có tuổi, ông ấy vẫn chạy rất nhanh.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "In spite of.",
    category: "Other",
  },
  {
    id: "C1-0056",
    questionEn: "For fear _____ being late, he ran.",
    questionVi: "Vì sợ _____ bị muộn, anh ấy đã chạy bộ.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "For fear of.",
    category: "Other",
  },
  {
    id: "C1-0057",
    questionEn: "By virtue _____ his power, he decided.",
    questionVi: "Bằng _____ uy quyền của mình, ông ấy đã đưa ra quyết định.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "By virtue of.",
    category: "Other",
  },
  {
    id: "C1-0058",
    questionEn: "In the event _____ fire, use stairs.",
    questionVi:
      "Trong trường _____ hợp xảy ra hỏa hoạn, hãy sử dụng cầu thang bộ.",
    options: [
      { option: "of", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "In the event of.",
    category: "Other",
  },
  {
    id: "C1-0059",
    questionEn: "Not only _____ study, but he also works.",
    questionVi: "Không chỉ _____ học tập, anh ấy còn đi làm nữa.",
    options: [
      { option: "does he", isCorrect: true },
      { option: "he does", isCorrect: false },
      { option: "did he", isCorrect: false },
      { option: "he did", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ Not only.",
    category: "Other",
  },
  {
    id: "C1-0060",
    questionEn: "Neither _____ I nor my brother likes it.",
    questionVi: "Cả _____ tôi và anh trai tôi đều không thích nó.",
    options: [
      { option: "do", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi:
      "Neither ... nor (động từ theo chủ ngữ gần nhất 'my brother' - wait, 'brother' is singular, so 'likes' is fine. But inversion after Neither? No, 'Neither do I' is inversion. This structure is Subject).",
    category: "Other",
  },
  {
    id: "C1-0061",
    questionEn: "Not until the film ended _____ leave.",
    questionVi: "Mãi đến khi bộ phim kết thúc, chúng tôi _____ mới rời đi.",
    options: [
      { option: "did we", isCorrect: true },
      { option: "we did", isCorrect: false },
      { option: "we left", isCorrect: false },
      { option: "left we", isCorrect: false },
    ],
    explanationVi: "Not until.",
    category: "Other",
  },
  {
    id: "C1-0062",
    questionEn: "Only by working hard _____ succeed.",
    questionVi:
      "Chỉ bằng cách làm việc chăm chỉ, bạn _____ mới có thể thành công.",
    options: [
      { option: "will you", isCorrect: true },
      { option: "you will", isCorrect: false },
      { option: "did you", isCorrect: false },
      { option: "you did", isCorrect: false },
    ],
    explanationVi: "Only by + V-ing + aux + S.",
    category: "Other",
  },
  {
    id: "C1-0063",
    questionEn: "Only later _____ realize my mistake.",
    questionVi: "Mãi về sau tôi _____ mới nhận ra sai lầm của mình.",
    options: [
      { option: "did I", isCorrect: true },
      { option: "I did", isCorrect: false },
      { option: "I realized", isCorrect: false },
      { option: "realized I", isCorrect: false },
    ],
    explanationVi: "Only later + did + S.",
    category: "Other",
  },
  {
    id: "C1-0064",
    questionEn: "At no time _____ she aware of it.",
    questionVi: "Chưa một giây phút nào _____ cô ấy ý thức được điều đó.",
    options: [
      { option: "was", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "does", isCorrect: false },
    ],
    explanationVi: "At no time + aux.",
    category: "Other",
  },
  {
    id: "C1-0065",
    questionEn: "On no condition _____ you touch this.",
    questionVi:
      "Dù trong bất kỳ điều kiện nào, bạn _____ không được chạm vào cái này.",
    options: [
      { option: "should", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi: "On no condition.",
    category: "Other",
  },
  {
    id: "C1-0066",
    questionEn: "I prefer reading to _____.",
    questionVi: "Tôi thích đọc sách hơn là _____ xem TV.",
    options: [
      { option: "watching", isCorrect: true },
      { option: "watch", isCorrect: false },
      { option: "to watch", isCorrect: false },
      { option: "watched", isCorrect: false },
    ],
    explanationVi: "Prefer V-ing to V-ing.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C1-0067",
    questionEn: "It is no use _____ him.",
    questionVi: "Thật vô ích khi _____ hỏi anh ta.",
    options: [
      { option: "asking", isCorrect: true },
      { option: "ask", isCorrect: false },
      { option: "to ask", isCorrect: false },
      { option: "asked", isCorrect: false },
    ],
    explanationVi: "It is no use V-ing.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C1-0068",
    questionEn: "There is no point _____ worrying.",
    questionVi: "Chẳng ích gì khi _____ phải lo lắng cả.",
    options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "There is no point in.",
    category: "Other",
  },
  {
    id: "C1-0069",
    questionEn: "It won't be long _____ he arrives.",
    questionVi: "Sẽ không lâu nữa đâu _____ anh ấy sẽ đến.",
    options: [
      { option: "before", isCorrect: true },
      { option: "after", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "until", isCorrect: false },
    ],
    explanationVi: "It won't be long before.",
    category: "Other",
  },
  {
    id: "C1-0070",
    questionEn: "Hardly a day goes by _____ I don't think of her.",
    questionVi:
      "Hầu như không một ngày nào trôi qua _____ mà tôi không nghĩ về cô ấy.",
    options: [
      { option: "without", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "that", isCorrect: true },
      { option: "but", isCorrect: false },
    ],
    explanationVi: "Goes by that (mà).",
    category: "Other",
  },
  {
    id: "C1-0071",
    questionEn: "I have no intention _____ resigning.",
    questionVi: "Tôi không có ý định _____ từ chức.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Intention of.",
    category: "Other",
  },
  {
    id: "C1-0072",
    questionEn: "He has no chance _____ winning.",
    questionVi: "Anh ấy không có cơ hội _____ chiến thắng.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Chance of.",
    category: "Other",
  },
  {
    id: "C1-0073",
    questionEn: "There is no hope _____ success.",
    questionVi: "Không còn hy vọng _____ thành công nữa.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Hope of.",
    category: "Other",
  },
  {
    id: "C1-0074",
    questionEn: "He is bound _____ fail.",
    questionVi: "Anh ta chắc _____ chắn sẽ thất bại.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Bound to V (chắc chắn).",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0075",
    questionEn: "She is sure _____ pass.",
    questionVi: "Cô ấy chắc _____ chắn sẽ thi đỗ.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Sure to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0076",
    questionEn: "It is certain _____ rain.",
    questionVi: "Chắc chắn là trời _____ sẽ mưa.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Certain to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0077",
    questionEn: "He is likely _____ come.",
    questionVi: "Anh ấy _____ có khả năng sẽ đến.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Likely to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0078",
    questionEn: "The chances _____ winning are small.",
    questionVi: "Cơ hội _____ chiến thắng là rất nhỏ.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Chances of.",
    category: "Other",
  },
  {
    id: "C1-0079",
    questionEn: "I have a good mind _____ leave.",
    questionVi: "Tôi đang rất _____ muốn rời đi.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Have a good mind to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0080",
    questionEn: "I made up my mind _____ stay.",
    questionVi: "Tôi đã quyết định _____ sẽ ở lại.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Make up mind to V.",
    category: "Infinitives (to V)",
  },
  {
    id: "C1-0081",
    questionEn: "She set her heart _____ winning.",
    questionVi: "Cô ấy đã _____ hạ quyết tâm phải chiến thắng bằng được.",
    options: [
      { option: "on", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Set heart on V-ing.",
    category: "Other",
  },
  {
    id: "C1-0082",
    questionEn: "He put an end _____ the war.",
    questionVi: "Ông ấy đã _____ chấm dứt cuộc chiến tranh này.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Put an end to.",
    category: "Other",
  },
  {
    id: "C1-0083",
    questionEn: "She paid attention _____ the teacher.",
    questionVi: "Cô ấy đã _____ chú ý lắng nghe giáo viên.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Pay attention to.",
    category: "Other",
  },
  {
    id: "C1-0084",
    questionEn: "He took advantage _____ the situation.",
    questionVi: "Anh ta đã _____ tận dụng tình hình này.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Take advantage of.",
    category: "Other",
  },
  {
    id: "C1-0085",
    questionEn: "We caught sight _____ the ship.",
    questionVi: "Chúng tôi đã _____ thoáng nhìn thấy con tàu đó.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Catch sight of.",
    category: "Other",
  },
  {
    id: "C1-0086",
    questionEn: "He lost sight _____ his goal.",
    questionVi: "Anh ta đã _____ đánh mất đi mục tiêu của mình.",
    options: [
      { option: "of", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Lose sight of.",
    category: "Other",
  },
  {
    id: "C1-0087",
    questionEn: "Make room _____ the new sofa.",
    questionVi: "Hãy _____ dành chỗ cho chiếc sofa mới.",
    options: [
      { option: "for", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "of", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Make room for.",
    category: "Other",
  },
  {
    id: "C1-0088",
    questionEn: "Keep an eye _____ the baby.",
    questionVi: "Hãy _____ để mắt đến đứa bé nhé.",
    options: [
      { option: "on", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Keep an eye on.",
    category: "Other",
  },
  {
    id: "C1-0089",
    questionEn: "He lost his temper _____ me.",
    questionVi: "Anh ấy đã _____ mất bình tĩnh với tôi.",
    options: [
      { option: "with", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Lose temper with.",
    category: "Other",
  },
  {
    id: "C1-0090",
    questionEn: "She burst _____ tears.",
    questionVi: "Cô ấy đã _____ bật khóc nức nở.",
    options: [
      { option: "into", isCorrect: true },
      { option: "out", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
    ],
    explanationVi: "Burst into tears.",
    category: "Other",
  },
  {
    id: "C1-0091",
    questionEn: "He burst out _____.",
    questionVi: "Anh ấy đã _____ bật cười.",
    options: [
      { option: "laughing", isCorrect: true },
      { option: "to laugh", isCorrect: false },
      { option: "laugh", isCorrect: false },
      { option: "laughed", isCorrect: false },
    ],
    explanationVi: "Burst out V-ing.",
    category: "Gerunds (V-ing)",
  },
  {
    id: "C1-0092",
    questionEn: "She is prone _____ accidents.",
    questionVi: "Cô ấy _____ rất dễ gặp phải tai nạn.",
    options: [
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi: "Prone to.",
    category: "Other",
  },
  {
    id: "C1-0093",
    questionEn: "He is liable _____ tax.",
    questionVi: "Anh ấy _____ có nhiệm vụ phải nộp thuế.",
    options: [
      { option: "for", isCorrect: false },
      { option: "to", isCorrect: true },
      { option: "of", isCorrect: false },
      { option: "in", isCorrect: false },
    ],
    explanationVi:
      "Liable to (có khả năng bị) / Liable for (chịu trách nhiệm về).",
    category: "Other",
  },
  {
    id: "C1-0094",
    questionEn: "I am obligated _____ you.",
    questionVi: "Tôi _____ đã mang ơn bạn rất nhiều.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Obliged to.",
    category: "Other",
  },
  {
    id: "C1-0095",
    questionEn: "He is resigned _____ his fate.",
    questionVi: "Anh ấy đã _____ cam chịu số phận của mình.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Resigned to (chấp nhận).",
    category: "Other",
  },
  {
    id: "C1-0096",
    questionEn: "It resulted _____ a failure.",
    questionVi: "Nó đã _____ dẫn đến sự thất bại.",
    options: [
      { option: "in", isCorrect: true },
      { option: "from", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Result in.",
    category: "Other",
  },
  {
    id: "C1-0097",
    questionEn: "Poverty results _____ laziness.",
    questionVi: "Sự nghèo đói _____ bắt nguồn từ sự lười biếng.",
    options: [
      { option: "from", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "to", isCorrect: false },
      { option: "of", isCorrect: false },
    ],
    explanationVi: "Result from.",
    category: "Other",
  },
  {
    id: "C1-1001",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn:
      "Discussing an executive decision regarding a project's timeline.",
    contextVi: "Thảo luận về quyết định điều hành liên quan đến tiến độ dự án.",
    questionEn:
      "Not only _____ to accelerate the project, but the CEO also approved an additional budget.",
    questionVi:
      "Không những _____ đẩy nhanh dự án, mà CEO còn phê duyệt thêm ngân sách.",
    options: [
      { option: "he decided", isCorrect: false },
      { option: "did he decide", isCorrect: true },
      { option: "he has decided", isCorrect: false },
      { option: "was he deciding", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với 'Not only' đặt ở đầu câu: Not only + trợ động từ + S + V.",
    category: "Sentence Structure",
  },
  {
    id: "C1-1002",
    topicId: "subordinating-conjunctions",
    questionType: "structure",
    contextEn: "Legal requirements for a partnership.",
    contextVi: "Yêu cầu pháp lý cho việc hợp tác.",
    questionEn:
      "The agreement remains in effect _____ either party provides a written notice of termination.",
    questionVi:
      "Thỏa thuận vẫn có hiệu lực _____ cho đến khi một trong hai bên đưa ra thông báo chấm dứt bằng văn bản.",
    options: [
      { option: "until", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "while", isCorrect: false },
      { option: "as long as", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'until' để chỉ mốc thời gian hành động hiện tại chấm dứt.",
    category: "Conjunctions",
  },
  {
    id: "C1-1003",
    topicId: "adjectives-ed-ing",
    questionType: "word-form",
    contextEn: "Evaluating a complex technical manual.",
    contextVi: "Đánh giá một bản hướng dẫn kỹ thuật phức tạp.",
    questionEn:
      "The engineers found the technical specifications _____ but extremely comprehensive.",
    questionVi:
      "Các kỹ sư thấy các thông số kỹ thuật _____ nhưng cực kỳ toàn diện.",
    options: [
      { option: "exhausted", isCorrect: false },
      { option: "exhausting", isCorrect: true },
      { option: "exhaust", isCorrect: false },
      { option: "exhaustively", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc S-V-O-C: Find + Object + Adj. Dùng tính từ đuôi '-ing' (exhausting) để chỉ tính chất gây mệt mỏi của sự vật (thông số kỹ thuật).",
    category: "Word Forms",
  },
  {
    id: "C1-1004",
    topicId: "conditionals-mixed",
    questionType: "grammar",
    contextEn:
      "A senior executive reflecting on a past decision and its present impact.",
    contextVi:
      "Một giám đốc cấp cao đang suy ngẫm về một quyết định trong quá khứ và tác động hiện tại của nó.",
    questionEn:
      "If we had invested in the R&D department five years ago, we _____ the market leader today.",
    questionVi:
      "Nếu chúng ta đầu tư vào bộ phận R&D 5 năm trước, chúng ta _____ đã là người dẫn đầu thị trường hôm nay.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "would have been", isCorrect: false },
      { option: "will be", isCorrect: false },
      { option: "are", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (Mixed Conditional): Giả thiết ở quá khứ (Type 3) nhưng kết quả ở hiện tại (Type 2).",
    category: "Conditionals",
  },
  {
    id: "C1-1005",
    topicId: "inversion-patterns",
    questionType: "structure",
    contextEn: "Emphasizing the uniqueness of a professional achievement.",
    contextVi: "Nhấn mạnh tính độc đáo của một thành tựu chuyên môn.",
    questionEn:
      "Only by streamlining our logistics _____ we able to reduce costs by 20 percent.",
    questionVi:
      "Chỉ bằng cách tinh giản hoạt động hậu cần, chúng ta _____ mới có thể giảm 20% chi phí.",
    options: [
      { option: "were", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only by + V-ing' đứng đầu câu: Only by... + Auxiliary/Be + S.",
    category: "Sentence Structure",
  },
  {
    id: "C1-1006",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "Presenting the main reason for a strategy shift.",
    contextVi: "Trình bày lý do chính cho sự thay đổi chiến lược.",
    questionEn:
      "_____ most impressed the investors was the team's ability to adapt to sudden market fluctuations.",
    questionVi:
      "_____ điều làm các nhà đầu tư ấn tượng nhất là khả năng thích nghi của đội ngũ với những biến động thị trường đột ngột.",
    options: [
      { option: "That", isCorrect: false },
      { option: "What", isCorrect: true },
      { option: "Which", isCorrect: false },
      { option: "It", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) với 'What' làm chủ ngữ của mệnh đề danh từ: What + S + V + be + ...",
    category: "Sentence Structure",
  },
  {
    id: "C1-1007",
    topicId: "participial-adjectives",
    questionType: "structure",
    contextEn: "Describing a complex situation after an acquisition.",
    contextVi: "Mô tả một tình huống phức tạp sau một cuộc thâu tóm.",
    questionEn:
      "_____ by the sudden acquisition, many employees decided to resign immediately.",
    questionVi:
      "_____ bị sốc trước cuộc thâu tóm bất ngờ, nhiều nhân viên đã quyết định nghỉ việc ngay lập tức.",
    options: [
      { option: "Shocking", isCorrect: false },
      { option: "Shocked", isCorrect: true },
      { option: "Shock", isCorrect: false },
      { option: "Having shocked", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng phân từ quá khứ (V-ed) để rút gọn mệnh đề trạng ngữ chỉ nguyên nhân (Because they were shocked -> Shocked).",
    category: "Word Forms",
  },
  {
    id: "C1-1008",
    topicId: "modals-deduction-past",
    questionType: "grammar",
    contextEn: "Analyzing a past failure in a marketing campaign.",
    contextVi:
      "Phân tích một thất bại trong quá khứ của một chiến dịch tiếp thị.",
    questionEn:
      "The marketing campaign failed because we _____ the target audience more accurately.",
    questionVi:
      "Chiến dịch tiếp thị thất bại vì chúng ta _____ đã có thể xác định đối tượng khách hàng mục tiêu chính xác hơn.",
    options: [
      { option: "could identify", isCorrect: false },
      { option: "could have identified", isCorrect: true },
      { option: "must have identified", isCorrect: false },
      { option: "might identify", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'could have + V3' để chỉ một khả năng trong quá khứ mà thực tế đã không xảy ra.",
    category: "Modals",
  },
  {
    id: "C1-1335",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the strictness of a policy.",
    contextVi: "Nhấn mạnh sự nghiêm ngặt của một chính sách.",
    questionEn:
      "Under no circumstances _____ the company's internal software be used for personal purposes.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, phần mềm nội bộ của công ty _____ không được sử dụng cho mục đích cá nhân.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Under no circumstances' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1336",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing the consequences of a decision.",
    contextVi: "Mô tả hệ quả của một quyết định.",
    questionEn:
      "_____ the potential risks involved, the board decided to postpone the international expansion.",
    questionVi:
      "_____ những rủi ro tiềm ẩn liên quan, ban điều hành đã quyết định hoãn việc mở rộng quốc tế.",
    options: [
      { option: "Having considered", isCorrect: true },
      { option: "Considered", isCorrect: false },
      { option: "To consider", isCorrect: false },
      { option: "Being considered", isCorrect: false },
    ],
    explanationVi:
      "Dùng phân từ hoàn thành (Having + V3/ed) để chỉ một hành động đã hoàn thành trước hành động chính.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1337",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing the result of a past failure on current status.",
    contextVi:
      "Thảo luận về kết quả của một thất bại trong quá khứ đối với tình trạng hiện tại.",
    questionEn:
      "If the management had acted more decisively last year, the company _____ in such a precarious financial position now.",
    questionVi:
      "Nếu ban quản lý hành động quyết đoán hơn vào năm ngoái, công ty _____ không ở trong tình trạng tài chính bấp bênh như hiện nay.",
    options: [
      { option: "would not be", isCorrect: true },
      { option: "would not have been", isCorrect: false },
      { option: "will not be", isCorrect: false },
      { option: "is not", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1338",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Highlighting the main reason for success.",
    contextVi: "Nhấn mạnh lý do chính của sự thành công.",
    questionEn:
      "It was her exceptional leadership _____ during the crisis that ultimately saved the firm from bankruptcy.",
    questionVi:
      "Chính khả năng lãnh đạo xuất chúng của bà _____ trong cuộc khủng hoảng đã cứu công ty khỏi bờ vực phá sản.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh: It + be + N + that/who.",
    category: "Structure",
  },
  {
    id: "C1-1339",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a formal recommendation.",
    contextVi: "Nêu một khuyến nghị chính thức.",
    questionEn:
      "The advisory committee recommended that the CEO _____ and explain the situation to the stakeholders immediately.",
    questionVi:
      "Ủy ban cố vấn đề xuất rằng CEO _____ và giải thích tình hình cho các bên liên quan ngay lập tức.",
    options: [
      { option: "step forward", isCorrect: true },
      { option: "steps forward", isCorrect: false },
      { option: "stepped forward", isCorrect: false },
      { option: "stepping forward", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'recommend that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1340",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Specifying conditions of a legal agreement.",
    contextVi: "Nêu cụ thể các điều khoản của một thỏa thuận pháp lý.",
    questionEn:
      "The contract contains several clauses, the most important of _____ pertains to intellectual property rights.",
    questionVi:
      "Hợp đồng bao gồm nhiều điều khoản, trong đó điều khoản quan trọng nhất _____ liên quan đến quyền sở hữu trí tuệ.",
    options: [
      { option: "which", isCorrect: true },
      { option: "whom", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' sau giới từ trong mệnh đề quan hệ không xác định để thay thế cho danh từ chỉ vật phía trước.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1341",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a common industry perception.",
    contextVi: "Mô tả một nhận thức chung trong ngành.",
    questionEn:
      "The new technology _____ to revolutionize the way we approach sustainable manufacturing.",
    questionVi:
      "Công nghệ mới _____ sẽ cách mạng hóa cách chúng ta tiếp cận sản xuất bền vững.",
    options: [
      { option: "is widely thought", isCorrect: true },
      { option: "is widely thinking", isCorrect: false },
      { option: "widely thinks", isCorrect: false },
      { option: "was widely thought", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động với các động từ chỉ quan điểm, ý kiến (is thought to do something).",
    category: "Passive Voice",
  },
  {
    id: "C1-1342",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the effectiveness of two marketing strategies.",
    contextVi: "So sánh hiệu quả của hai chiến lược tiếp thị.",
    questionEn:
      "The more the marketing team analyzed the data, _____ the correlation between social media engagement and sales became.",
    questionVi:
      "Nhóm tiếp thị càng phân tích nhiều dữ liệu, mối tương quan giữa sự tương tác trên mạng xã hội và doanh số _____.",
    options: [
      { option: "the clearer", isCorrect: true },
      { option: "clearer", isCorrect: false },
      { option: "more clearly", isCorrect: false },
      { option: "the most clear", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C1-1343",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Describing professional conduct.",
    contextVi: "Mô tả hành vi chuyên nghiệp.",
    questionEn:
      "All employees are expected to act in accordance _____ the company's established code of ethics.",
    questionVi:
      "Tất cả nhân viên được kỳ vọng hành động phù hợp _____ bộ quy tắc đạo đức đã được thiết lập của công ty.",
    options: [
      { option: "with", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "by", isCorrect: false },
    ],
    explanationVi:
      "Cụm từ cố định 'in accordance with' (phù hợp với, tuân theo).",
    category: "Prepositions",
  },
  {
    id: "C1-1344",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a person's professional capability.",
    contextVi: "Xác định năng lực chuyên môn của một người.",
    questionEn:
      "Her _____ interpretation of the market trends allowed the company to pivot its strategy successfully.",
    questionVi:
      "Sự giải thích _____ của bà về các xu hướng thị trường đã cho phép công ty xoay trục chiến lược thành công.",
    options: [
      { option: "insightful", isCorrect: true },
      { option: "insight", isCorrect: false },
      { option: "insightfully", isCorrect: false },
      { option: "insightfulness", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'interpretation'.",
    category: "Word Forms",
  },
  {
    id: "C1-1345",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a negative condition.",
    contextVi: "Nhấn mạnh một điều kiện phủ định.",
    questionEn:
      "Not only _____ to reduce production costs, but the new process also significantly improved product quality.",
    questionVi:
      "Không những _____ đạt được việc giảm chi phí sản xuất, mà quy trình mới còn cải thiện đáng kể chất lượng sản phẩm.",
    options: [
      { option: "did we manage", isCorrect: true },
      { option: "we managed", isCorrect: false },
      { option: "we do manage", isCorrect: false },
      { option: "managed we", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not only' (Không những... mà còn...).",
    category: "Inversion",
  },
  {
    id: "C1-1346",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Discussing the difficulty of a task.",
    contextVi: "Thảo luận về sự khó khăn của một nhiệm vụ.",
    questionEn:
      "_____ a consensus among the stakeholders proved to be a more formidable task than initially anticipated.",
    questionVi:
      "_____ sự đồng thuận giữa các bên liên quan đã chứng tỏ là một nhiệm vụ khó khăn hơn nhiều so với dự kiến ban đầu.",
    options: [
      { option: "Reaching", isCorrect: true },
      { option: "Reach", isCorrect: false },
      { option: "To be reached", isCorrect: false },
      { option: "Having reached", isCorrect: false },
    ],
    explanationVi: "Danh động từ (Gerund) làm chủ ngữ trong câu.",
    category: "Gerunds",
  },
  {
    id: "C1-1347",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating with high certainty about a past event.",
    contextVi: "Dự đoán với độ chắc chắn cao về một sự kiện trong quá khứ.",
    questionEn:
      "The board _____ been aware of the financial discrepancies long before the official audit was announced.",
    questionVi:
      "Ban điều hành _____ chắc chắn đã biết về những sai lệch tài chính từ lâu trước khi cuộc kiểm toán chính thức được thông báo.",
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
    id: "C1-1348",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Connecting two contrasting ideas.",
    contextVi: "Kết nối hai ý tưởng tương phản.",
    questionEn:
      "_____ the overall economic downturn, our company managed to achieve record profits this year.",
    questionVi:
      "_____ sự suy thoái kinh tế nói chung, công ty chúng tôi vẫn đạt được mức lợi nhuận kỷ lục trong năm nay.",
    options: [
      { option: "Notwithstanding", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Moreover", isCorrect: false },
    ],
    explanationVi:
      "Dùng giới từ 'Notwithstanding' (bất chấp) để chỉ sự nhượng bộ, đứng trước cụm danh từ.",
    category: "Conjunctions",
  },
  {
    id: "C1-1349",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing an urgent requirement.",
    contextVi: "Diễn đạt một yêu cầu khẩn cấp.",
    questionEn:
      "It is imperative that the security protocols _____ updated to prevent any further unauthorized access.",
    questionVi:
      "Điều cấp thiết là các giao thức bảo mật _____ phải được cập nhật để ngăn chặn bất kỳ hành vi truy cập trái phép nào nữa.",
    options: [
      { option: "be", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định với 'It is imperative that + S + (should) be + V3/ed'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1350",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the conditions of success.",
    contextVi: "Nhấn mạnh các điều kiện để thành công.",
    questionEn:
      "Only by implementing a more flexible working model _____ the company attract the top talent in the industry.",
    questionVi:
      "Chỉ bằng cách triển khai một mô hình làm việc linh hoạt hơn _____ công ty mới có thể thu hút những tài năng hàng đầu trong ngành.",
    options: [
      { option: "can", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only by' (Chỉ bằng cách... thì mới có thể...).",
    category: "Inversion",
  },
  {
    id: "C1-1351",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to an action.",
    contextVi: "Mô tả một trạng thái dẫn đến một hành động.",
    questionEn:
      "_____ for his extensive experience in international trade, Mr. Dubois was appointed as the new CEO.",
    questionVi:
      "_____ vì kinh nghiệm sâu rộng trong thương mại quốc tế, ông Dubois đã được bổ nhiệm làm CEO mới.",
    options: [
      { option: "Renowned", isCorrect: true },
      { option: "To be renowned", isCorrect: false },
      { option: "Renowning", isCorrect: false },
      { option: "Having renowned", isCorrect: false },
    ],
    explanationVi:
      "Rút gọn mệnh đề quan hệ dạng bị động (V3/ed) đóng vai trò như mệnh đề trạng ngữ.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1352",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical past event with a current impact.",
    contextVi:
      "Thảo luận về một sự kiện giả định trong quá khứ có tác động hiện tại.",
    questionEn:
      "Were it not for the substantial investment from our partners, the project _____ still in its conceptual stage today.",
    questionVi:
      "Nếu không có khoản đầu tư lớn từ các đối tác, dự án _____ có lẽ vẫn còn đang ở giai đoạn khái niệm cho đến ngày nay.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "would have been", isCorrect: false },
      { option: "will be", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện hỗn hợp (giả định hiện tại nhưng kết quả kéo dài đến nay hoặc ngược lại - ở đây là giả định một sự thật hiển nhiên).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1353",
    topicId: "sentence-structure",
    questionType: "structure",
    contextEn: "Emphasizing the unique nature of an event.",
    contextVi: "Nhấn mạnh tính chất độc đáo của một sự kiện.",
    questionEn:
      "Seldom _____ such a high degree of collaboration between competing firms in the tech sector.",
    questionVi:
      "Hiếm khi _____ thấy mức độ hợp tác cao như vậy giữa các công ty đang cạnh tranh trong lĩnh vực công nghệ.",
    options: [
      { option: "do we witness", isCorrect: true },
      { option: "we witness", isCorrect: false },
      { option: "witnessed we", isCorrect: false },
      { option: "we do witness", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ với trạng từ phủ định 'Seldom' (Hiếm khi).",
    category: "Structure",
  },
  {
    id: "C1-1354",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a complex situation.",
    contextVi: "Mô tả một tình huống phức tạp.",
    questionEn:
      "The legal implications of the proposed merger are extremely _____ and require careful analysis.",
    questionVi:
      "Các hệ lụy pháp lý của việc sáp nhập được đề xuất là cực kỳ _____ và cần được phân tích cẩn thận.",
    options: [
      { option: "convoluted", isCorrect: true },
      { option: "convolution", isCorrect: false },
      { option: "convolutely", isCorrect: false },
      { option: "convolute", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ 'implications'.",
    category: "Word Forms",
  },
  {
    id: "C1-1355",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Using a formal relative clause to connect ideas.",
    contextVi: "Sử dụng mệnh đề quan hệ trang trọng để kết nối các ý tưởng.",
    questionEn:
      "The committee has proposed several reforms, many of _____ will be implemented in the next fiscal year.",
    questionVi:
      "Ủy ban đã đề xuất một số cải cách, nhiều _____ trong số đó sẽ được triển khai trong năm tài chính tới.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "those", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau cụm định lượng (many of) để thay thế cho danh từ 'reforms' trong mệnh đề quan hệ.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1356",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the immediate consequence of an action.",
    contextVi: "Nhấn mạnh hệ quả tức thì của một hành động.",
    questionEn:
      "No sooner _____ the new marketing campaign launched than the website experienced an unprecedented surge in traffic.",
    questionVi:
      "Ngay khi chiến dịch tiếp thị mới vừa được khởi động _____ thì trang web đã trải qua một sự gia tăng lưu lượng truy cập chưa từng có.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: No sooner + had + S + V3/ed + than + Clause.",
    category: "Inversion",
  },
  {
    id: "C1-1357",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Making a strong recommendation for change.",
    contextVi: "Đưa ra một khuyến nghị thay đổi mạnh mẽ.",
    questionEn:
      "The consultant suggested that the company _____ its entire supply chain to improve efficiency.",
    questionVi:
      "Cố vấn đề xuất rằng công ty _____ lại toàn bộ chuỗi cung ứng của mình để cải thiện hiệu quả.",
    options: [
      { option: "restructure", isCorrect: true },
      { option: "restructured", isCorrect: false },
      { option: "restructures", isCorrect: false },
      { option: "restructuring", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'suggest that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1358",
    topicId: "participial-phrases",
    questionType: "grammar",
    contextEn: "Combining two actions that happen simultaneously.",
    contextVi: "Kết hợp hai hành động xảy ra đồng thời.",
    questionEn:
      "_____ to expand into the Asian market, the corporation established a regional headquarters in Singapore.",
    questionVi:
      "_____ mở rộng sang thị trường Châu Á, tập đoàn đã thiết lập trụ sở khu vực tại Singapore.",
    options: [
      { option: "Seeking", isCorrect: true },
      { option: "Sought", isCorrect: false },
      { option: "To seek", isCorrect: false },
      { option: "Having sought", isCorrect: false },
    ],
    explanationVi:
      "Dùng hiện tại phân từ (V-ing) để chỉ hai hành động xảy ra đồng thời có cùng chủ ngữ.",
    category: "Participial Phrases",
  },
  {
    id: "C1-1359",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a past decision with present consequences.",
    contextVi:
      "Suy ngẫm về một quyết định trong quá khứ với các hệ quả hiện tại.",
    questionEn:
      "If the firm _____ more heavily in R&D five years ago, it would likely be the market leader today.",
    questionVi:
      "Nếu công ty _____ mạnh mẽ hơn vào R&D năm năm trước, có lẽ họ đã là người dẫn đầu thị trường hiện nay.",
    options: [
      { option: "had invested", isCorrect: true },
      { option: "invested", isCorrect: false },
      { option: "would have invested", isCorrect: false },
      { option: "has invested", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1360",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the importance of a step.",
    contextVi: "Nhấn mạnh tầm quan trọng của một bước.",
    questionEn:
      "Only when the results of the initial market research are analyzed _____ the board decide on a final budget.",
    questionVi:
      "Chỉ khi kết quả nghiên cứu thị trường ban đầu được phân tích _____ ban điều hành mới quyết định ngân sách cuối cùng.",
    options: [
      { option: "will", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Only when' (Chỉ khi... thì... mới...).",
    category: "Inversion",
  },
  {
    id: "C1-1361",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a sequence of events.",
    contextVi: "Mô tả một chuỗi các sự kiện.",
    questionEn:
      "_____ for its reliability and efficiency, our new production line has significantly reduced operational costs.",
    questionVi:
      "_____ về độ tin cậy và hiệu quả, dây chuyền sản xuất mới của chúng tôi đã giúp giảm đáng kể chi phí vận hành.",
    options: [
      { option: "Praised", isCorrect: true },
      { option: "Praising", isCorrect: false },
      { option: "To praise", isCorrect: false },
      { option: "Having praised", isCorrect: false },
    ],
    explanationVi:
      "Dùng quá khứ phân từ (V3/ed) để bắt đầu mệnh đề trạng ngữ chỉ lý do hoặc tính chất, mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1362",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past with a present effect.",
    contextVi:
      "Thảo luận về một kịch bản quá khứ thay thế có ảnh hưởng hiện tại.",
    questionEn:
      "If we had not diversified our portfolio three years ago, we _____ such resilience in the current market downturn.",
    questionVi:
      "Nếu chúng ta không đa dạng hóa danh mục đầu tư cách đây ba năm, chúng ta _____ không thể có sự phục hồi như vậy trong bối cảnh thị trường đang suy thoái hiện nay.",
    options: [
      { option: "would not be showing", isCorrect: true },
      { option: "would not show", isCorrect: false },
      { option: "will not show", isCorrect: false },
      { option: "would not have shown", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could be + V-ing).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1363",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Focusing on a specific point in time.",
    contextVi: "Tập trung vào một thời điểm cụ thể.",
    questionEn:
      "It was only after the internal audit was completed _____ the discrepancies in the bookkeeping were discovered.",
    questionVi:
      "Chỉ sau khi cuộc kiểm toán nội bộ hoàn tất _____ những sai sót trong khâu kế toán mới được phát hiện.",
    options: [
      { option: "that", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "since", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh thời gian: It was only after... that...",
    category: "Structure",
  },
  {
    id: "C1-1364",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a regulatory requirement.",
    contextVi: "Nêu một yêu cầu pháp lý.",
    questionEn:
      "The government mandates that all corporations _____ their environmental impact data annually.",
    questionVi:
      "Chính phủ yêu cầu tất cả các tổng công ty _____ dữ liệu về tác động môi trường của họ hàng năm.",
    options: [
      { option: "disclose", isCorrect: true },
      { option: "discloses", isCorrect: false },
      { option: "disclosed", isCorrect: false },
      { option: "disclosing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định sau động từ 'mandate that + S + V (nguyên mẫu)'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1365",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a large number of items.",
    contextVi: "Đề cập đến một số lượng lớn các mặt hàng.",
    questionEn:
      "We have reviewed sixty applications, none of _____ met the stringent criteria for the position.",
    questionVi:
      "Chúng tôi đã xem xét sáu mươi đơn ứng tuyển, không đơn nào trong số đó _____ đáp ứng được các tiêu chí khắt khe cho vị trí này.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau từ định lượng (none of) trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1366",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting an expected development.",
    contextVi: "Báo cáo một sự phát triển dự kiến.",
    questionEn:
      "The upcoming annual general meeting _____ to be the most consequential in the company's history.",
    questionVi:
      "Cuộc họp đại hội đồng cổ đông thường niên sắp tới _____ dự kiến sẽ là cuộc họp có tầm ảnh hưởng lớn nhất trong lịch sử công ty.",
    options: [
      { option: "is expected", isCorrect: true },
      { option: "is expecting", isCorrect: false },
      { option: "expects", isCorrect: false },
      { option: "has expected", isCorrect: false },
    ],
    explanationVi: "Câu bị động theo cấu trúc 'S + be + P2 + to-V'.",
    category: "Passive Voice",
  },
  {
    id: "C1-1367",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Describing a proportional relationship.",
    contextVi: "Mô tả một mối quan hệ tỷ lệ thuận.",
    questionEn:
      "_____ early the team finishes the project, the more time they will have to focus on the next initiative.",
    questionVi:
      "Nhóm càng hoàn thành dự án sớm _____, họ càng có nhiều thời gian để tập trung vào sáng kiến tiếp theo.",
    options: [
      { option: "The more", isCorrect: true },
      { option: "How", isCorrect: false },
      { option: "As", isCorrect: false },
      { option: "So", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The more + Adv/Adj, the more + S + V).",
    category: "Comparison",
  },
  {
    id: "C1-1368",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Stating a condition for partnership.",
    contextVi: "Nêu điều kiện hợp tác.",
    questionEn:
      "The success of the joint venture is contingent _____ both parties fulfilling their contractual obligations.",
    questionVi:
      "Sự thành công của liên doanh phụ thuộc _____ vào việc cả hai bên hoàn thành các nghĩa vụ hợp đồng.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi:
      "Cụm tính từ đi với giới từ 'contingent on/upon' (tùy thuộc vào, dựa trên).",
    category: "Prepositions",
  },
  {
    id: "C1-1369",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a decision.",
    contextVi: "Xác định tính chất của một quyết định.",
    questionEn:
      "The board's decision to liquidate the assets was highly _____ among the employees and stakeholders.",
    questionVi:
      "Quyết định thanh lý tài sản của ban điều hành đã gây ra rất nhiều _____ trong nội bộ nhân viên và các bên liên quan.",
    options: [
      { option: "controversial", isCorrect: true },
      { option: "controversy", isCorrect: false },
      { option: "controversially", isCorrect: false },
      { option: "controversiality", isCorrect: false },
    ],
    explanationVi:
      "Sau 'was highly' cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ 'decision'.",
    category: "Word Forms",
  },
  {
    id: "C1-1370",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal context.",
    contextVi: "Nhấn mạnh một hạn chế trong bối cảnh trang trọng.",
    questionEn:
      "Little _____ the management suspect that the competitor was planning a hostile takeover bid.",
    questionVi:
      "Ban quản lý ít _____ nghi ngờ rằng đối thủ cạnh tranh đang lên kế hoạch cho một vụ thâu tóm thù địch.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với trạng từ phủ định 'Little' (Ít khi/Hầu như không).",
    category: "Inversion",
  },
  {
    id: "C1-1371",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Discussing the difficulty of a task.",
    contextVi: "Thảo luận về sự khó khăn của một nhiệm vụ.",
    questionEn:
      "_____ a high level of technical competency is essential for anyone seeking a senior management role.",
    questionVi:
      "_____ trình độ chuyên môn kỹ thuật cao là điều thiết yếu đối với bất kỳ ai đang tìm kiếm một vai trò quản lý cấp cao.",
    options: [
      { option: "Maintaining", isCorrect: true },
      { option: "Maintain", isCorrect: false },
      { option: "To be maintained", isCorrect: false },
      { option: "Having maintained", isCorrect: false },
    ],
    explanationVi: "Sử dụng danh động từ (Gerund) làm chủ ngữ.",
    category: "Gerunds",
  },
  {
    id: "C1-1372",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating on why a strategy failed.",
    contextVi: "Dự đoán tại sao một chiến lược thất bại.",
    questionEn:
      "We _____ implemented the new software across all departments simultaneously; it was too much at once.",
    questionVi:
      "Lẽ ra chúng ta _____ không nên triển khai phần mềm mới đồng thời ở tất cả các phòng ban; làm như thế là quá tải.",
    options: [
      { option: "shouldn't have", isCorrect: true },
      { option: "mustn't have", isCorrect: false },
      { option: "couldn't have", isCorrect: false },
      { option: "mightn't have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'shouldn't have + V3/ed' để diễn tả một hành động đáng lẽ không nên làm trong quá khứ.",
    category: "Modals",
  },
  {
    id: "C1-1373",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Stating a condition for access in a formal way.",
    contextVi: "Nêu điều kiện để được truy cập bằng cách trang trọng.",
    questionEn:
      "Unauthorized personnel are strictly prohibited from entering the facility, _____ of their rank or position.",
    questionVi:
      "Nhân viên không được ủy quyền bị nghiêm cấm đi vào cơ sở, _____ cấp bậc hay vị trí của họ.",
    options: [
      { option: "irrespective", isCorrect: true },
      { option: "regardless", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
    ],
    explanationVi: "Cụm từ 'irrespective of' hoặc 'regardless of' (bất kể).",
    category: "Conjunctions",
  },
  {
    id: "C1-1374",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an advice from a legal counsel.",
    contextVi: "Báo cáo lời khuyên từ cố vấn pháp lý.",
    questionEn:
      "The legal counsel advised that the company _____ the contract immediately to avoid substantial penalties.",
    questionVi:
      "Cố vấn pháp lý đã khuyên công ty _____ hợp đồng ngay lập tức để tránh các khoản phạt lớn.",
    options: [
      { option: "terminate", isCorrect: true },
      { option: "terminated", isCorrect: false },
      { option: "terminates", isCorrect: false },
      { option: "terminating", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau động từ 'advise that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1375",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction on information sharing.",
    contextVi: "Nhấn mạnh sự hạn chế trong việc chia sẻ thông tin.",
    questionEn:
      "On no account _____ employees disclose sensitive company information to external third parties.",
    questionVi:
      "Trong bất kỳ trường hợp nào nhân viên cũng _____ không được tiết lộ thông tin nhạy cảm của công ty cho bên thứ ba.",
    options: [
      { option: "should", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "must", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ trường hợp nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1376",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to an action.",
    contextVi: "Mô tả một trạng thái dẫn đến một hành động.",
    questionEn:
      "_____ by the sudden increase in raw material costs, the management implemented a series of cost-cutting measures.",
    questionVi:
      "_____ bởi sự gia tăng đột ngột của chi phí nguyên liệu thô, ban quản lý đã thực hiện một loạt các biện pháp cắt giảm chi phí.",
    options: [
      { option: "Confronted", isCorrect: true },
      { option: "Confronting", isCorrect: false },
      { option: "To be confronted", isCorrect: false },
      { option: "Having confronted", isCorrect: false },
    ],
    explanationVi:
      "Dùng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân dạng bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1377",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a past error with current consequences.",
    contextVi: "Suy ngẫm về một sai lầm trong quá khứ với các hệ quả hiện tại.",
    questionEn:
      "If the company had anticipated the market shift, it _____ its current leading position.",
    questionVi:
      "Nếu công ty lường trước được sự thay đổi của thị trường, họ _____ đã không đánh mất vị trí dẫn đầu hiện nay.",
    options: [
      { option: "would not be losing", isCorrect: true },
      { option: "would not lose", isCorrect: false },
      { option: "will not lose", isCorrect: false },
      { option: "would not have lost", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp diễn tả một giả định quá khứ dẫn đến kết quả đang diễn ra ở hiện tại.",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1378",
    topicId: "sentence-structure",
    questionType: "structure",
    contextEn: "Focusing on the rarity of an achievement.",
    contextVi: "Tập trung vào sự hiếm hoi của một thành tựu.",
    questionEn:
      "Rarely _____ such a high level of team spirit been observed in such a competitive corporate environment.",
    questionVi:
      "Hiếm khi _____ thấy tinh thần đồng đội cao như vậy trong một môi trường doanh nghiệp cạnh tranh đến thế.",
    options: [
      { option: "has", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với trạng từ phủ định 'Rarely' (Hiếm khi).",
    category: "Structure",
  },
  {
    id: "C1-1379",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a person's behavior.",
    contextVi: "Xác định hành vi của một người.",
    questionEn:
      "Ms. Chen's _____ and proactive approach has been instrumental in securing the new multimillion-dollar contract.",
    questionVi:
      "Cách tiếp cận _____ và chủ động của bà Chen đã giúp ích rất nhiều trong việc giành được hợp đồng hàng triệu đô la mới.",
    options: [
      { option: "assiduous", isCorrect: true },
      { option: "assiduity", isCorrect: false },
      { option: "assiduously", isCorrect: false },
      { option: "assiduousness", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'approach'.",
    category: "Word Forms",
  },
  {
    id: "C1-1384",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Making a strong recommendation for a solution.",
    contextVi: "Đưa ra một khuyến nghị giải pháp mạnh mẽ.",
    questionEn:
      "It is essential that the Board of Directors _____ a more comprehensive long-term strategy.",
    questionVi:
      "Điều thiết yếu là Hội đồng quản trị _____ một chiến lược dài hạn toàn diện hơn.",
    options: [
      { option: "develop", isCorrect: true },
      { option: "develops", isCorrect: false },
      { option: "developed", isCorrect: false },
      { option: "developing", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau 'It is essential that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1385",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal writing.",
    contextVi: "Nhấn mạnh một hạn chế trong văn bản trang trọng.",
    questionEn:
      "Under no circumstances _____ the confidential client data be shared with external contractors without prior written consent.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, dữ liệu mật của khách hàng _____ không được chia sẻ với các nhà thầu bên ngoài mà không có sự đồng ý trước bằng văn bản.",
    options: [
      { option: "should", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "must", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Under no circumstances' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1386",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that influenced a decision.",
    contextVi: "Mô tả một trạng thái ảnh hưởng đến quyết định.",
    questionEn:
      "_____ by the recent surge in demand, the company decided to accelerate its production timeline.",
    questionVi:
      "_____ bởi sự gia tăng đột ngột của nhu cầu gần đây, công ty đã quyết định đẩy nhanh tiến độ sản xuất.",
    options: [
      { option: "Encouraged", isCorrect: true },
      { option: "Encouraging", isCorrect: false },
      { option: "To encourage", isCorrect: false },
      { option: "Having encouraged", isCorrect: false },
    ],
    explanationVi:
      "Dùng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1387",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing an alternative past with a current result.",
    contextVi: "Thảo luận về kịch bản quá khứ thay thế có kết quả ở hiện tại.",
    questionEn:
      "If the firm had not invested so heavily in renewable energy years ago, it _____ such a competitive advantage today.",
    questionVi:
      "Nếu công ty không đầu tư mạnh vào năng lượng tái tạo từ nhiều năm trước, họ _____ đã không thể có được lợi thế cạnh tranh như hiện nay.",
    options: [
      { option: "would not possess", isCorrect: true },
      { option: "would not have possessed", isCorrect: false },
      { option: "will not possess", isCorrect: false },
      { option: "is not possessing", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1388",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Highlighting the main cause of a delay.",
    contextVi: "Nhấn mạnh nguyên nhân chính của sự trì hoãn.",
    questionEn:
      "It was the unforeseen supply chain disruption _____ led to the three-month delay in the product launch.",
    questionVi:
      "Chính sự gián đoạn chuỗi cung ứng không lường trước được _____ đã dẫn đến sự trì hoãn ba tháng trong việc ra mắt sản phẩm.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh nguyên nhân: It was + N + that...",
    category: "Structure",
  },
  {
    id: "C1-1389",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a mandatory instruction.",
    contextVi: "Báo cáo một chỉ thị bắt buộc.",
    questionEn:
      "The regulatory body mandates that all financial institutions _____ their risk management protocols immediately.",
    questionVi:
      "Cơ quan quản lý yêu cầu tất cả các tổ chức tài chính _____ các giao thức quản lý rủi ro của họ ngay lập tức.",
    options: [
      { option: "review", isCorrect: true },
      { option: "reviews", isCorrect: false },
      { option: "reviewed", isCorrect: false },
      { option: "reviewing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định sau động từ 'mandate that + S + V (nguyên mẫu)'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1390",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Specifying conditions of a legal agreement.",
    contextVi: "Nêu cụ thể các điều kiện của một thỏa thuận pháp lý.",
    questionEn:
      "The contract contains several complex clauses, the most critical of _____ relates to the termination of the partnership.",
    questionVi:
      "Hợp đồng bao gồm nhiều điều khoản phức tạp, trong đó điều khoản quan trọng nhất _____ liên quan đến việc chấm dứt quan hệ đối tác.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' sau giới từ trong mệnh đề quan hệ không xác định để thay thế cho danh từ chỉ vật phía trước.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1391",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a widespread belief in the industry.",
    contextVi: "Mô tả một niềm tin phổ biến trong ngành.",
    questionEn:
      "The new CEO _____ to be a visionary leader who will guide the company through the digital transformation.",
    questionVi:
      "CEO mới _____ được tin là một nhà lãnh đạo có tầm nhìn, người sẽ dẫn dắt công ty vượt qua quá trình chuyển đổi số.",
    options: [
      { option: "is widely reputed", isCorrect: true },
      { option: "is widely reputing", isCorrect: false },
      { option: "widely reputes", isCorrect: false },
      { option: "was widely reputed", isCorrect: false },
    ],
    explanationVi: "Cấu trúc bị động khách quan (is reputed to be... ).",
    category: "Passive Voice",
  },
  {
    id: "C1-1392",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Describing a proportional relationship between two factors.",
    contextVi: "Mô tả mối quan hệ tỷ lệ thuận giữa hai yếu tố.",
    questionEn:
      "The more the R&D team experimented with new materials, _____ the potential for a breakthrough became.",
    questionVi:
      "Nhóm R&D càng thử nghiệm nhiều vật liệu mới, khả năng tạo ra bước đột phá _____.",
    options: [
      { option: "the greater", isCorrect: true },
      { option: "greater", isCorrect: false },
      { option: "more greatly", isCorrect: false },
      { option: "the most great", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C1-1393",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Describing a state of compliance.",
    contextVi: "Mô tả trạng thái tuân thủ.",
    questionEn:
      "All operational procedures must be in compliance _____ the newly enacted environmental regulations.",
    questionVi:
      "Tất cả các quy trình vận hành phải tuân thủ _____ các quy định về môi trường mới được ban hành.",
    options: [
      { option: "with", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "by", isCorrect: false },
    ],
    explanationVi:
      "Cụm danh từ đi với giới từ: 'in compliance with' (tuân thủ theo).",
    category: "Prepositions",
  },
  {
    id: "C1-1394",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a person's behavior.",
    contextVi: "Xác định hành vi của một người.",
    questionEn:
      "His _____ and detailed analysis of the market helped the company avoid several costly mistakes.",
    questionVi:
      "Bản phân tích _____ và chi tiết về thị trường của ông ấy đã giúp công ty tránh được một số sai lầm tốn kém.",
    options: [
      { option: "comprehensive", isCorrect: true },
      { option: "comprehend", isCorrect: false },
      { option: "comprehensively", isCorrect: false },
      { option: "comprehension", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'analysis'.",
    category: "Word Forms",
  },
  {
    id: "C1-1395",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing the immediate sequence of two events.",
    contextVi: "Nhấn mạnh chuỗi sự kiện tức thì của hai hành động.",
    questionEn:
      "No sooner _____ the board approved the budget than the marketing team began the new campaign.",
    questionVi:
      "Ngay khi ban điều hành phê duyệt ngân sách _____ thì nhóm tiếp thị đã bắt đầu chiến dịch mới.",
    options: [
      { option: "had", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc đảo ngữ: No sooner + had + S + V3/ed + than + Clause.",
    category: "Inversion",
  },
  {
    id: "C1-1396",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Stating a requirement for a high-level position.",
    contextVi: "Nêu yêu cầu đối với một vị trí cấp cao.",
    questionEn:
      "_____ a multicultural team requires not only managerial skills but also a high degree of emotional intelligence.",
    questionVi:
      "_____ một nhóm đa văn hóa không chỉ đòi hỏi kỹ năng quản lý mà còn cả trí thông minh cảm xúc cao.",
    options: [
      { option: "Leading", isCorrect: true },
      { option: "Lead", isCorrect: false },
      { option: "To be led", isCorrect: false },
      { option: "Having led", isCorrect: false },
    ],
    explanationVi: "Dùng danh động từ (Gerund) làm chủ ngữ trong câu.",
    category: "Gerunds",
  },
  {
    id: "C1-1397",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Expessing a past obligation that was not fulfilled.",
    contextVi: "Diễn tả một nghĩa vụ trong quá khứ đã không được thực hiện.",
    questionEn:
      "The project manager _____ informed the team about the revised deadlines much sooner.",
    questionVi:
      "Quản lý dự án lẽ ra _____ nên thông báo cho nhóm về các thời hạn sửa đổi sớm hơn nhiều.",
    options: [
      { option: "should have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "would have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'should have + V3/ed' để chỉ một việc đáng lẽ nên làm trong quá khứ nhưng đã không làm.",
    category: "Modals",
  },
  {
    id: "C1-1398",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Connecting a reason to an action in a formal way.",
    contextVi: "Kết nối lý do với hành động theo cách trang trọng.",
    questionEn:
      "Our company decided to withdraw from the project _____ the significant financial risks involved.",
    questionVi:
      "Công ty chúng tôi đã quyết định rút khỏi dự án _____ những rủi ro tài chính đáng kể liên quan.",
    options: [
      { option: "given", isCorrect: true },
      { option: "although", isCorrect: false },
      { option: "nevertheless", isCorrect: false },
      { option: "despite", isCorrect: true },
    ],
    explanationVi:
      "Cả 'given' (xét đến) và 'despite' (bất chấp) đều có thể dùng trước cụm danh từ để dẫn dắt lý do hoặc sự nhượng bộ.",
    category: "Conjunctions",
  },
  {
    id: "C1-1399",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expessing a formal recommendation.",
    contextVi: "Diễn tả một khuyến nghị chính thức.",
    questionEn:
      "The consultant suggested that the management _____ a more decentralized decision-making process.",
    questionVi:
      "Cố vấn đề xuất rằng ban quản lý _____ một quy trình ra quyết định phi tập trung hơn.",
    options: [
      { option: "adopt", isCorrect: true },
      { option: "adopts", isCorrect: false },
      { option: "adopted", isCorrect: false },
      { option: "adopting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau động từ 'suggest that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1400",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction.",
    contextVi: "Nhấn mạnh một hạn chế.",
    questionEn:
      "On no account _____ any employee use their personal devices to store sensitive company files.",
    questionVi:
      "Trong bất kỳ trường hợp nào, nhân viên _____ không được sử dụng thiết bị cá nhân để lưu trữ các tập tin nhạy cảm của công ty.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ trường hợp nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1401",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a result that followed an action.",
    contextVi: "Mô tả kết quả sau một hành động.",
    questionEn:
      "_____ that the initial strategy was ineffective, the company pivoted to a digital-first approach.",
    questionVi:
      "_____ thấy rằng chiến lược ban đầu không hiệu quả, công ty đã chuyển sang cách tiếp cận ưu tiên kỹ thuật số.",
    options: [
      { option: "Realizing", isCorrect: true },
      { option: "Realized", isCorrect: false },
      { option: "Having realized", isCorrect: true },
      { option: "To realize", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng hiện tại phân từ (V-ing) hoặc phân từ hoàn thành (Having + V3/ed) để chỉ nguyên nhân dẫn đến hành động chính.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1402",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a past condition with a current impact.",
    contextVi: "Suy ngẫm về một điều kiện quá khứ có tác động hiện tại.",
    questionEn:
      "If the management had listened to the experts' advice, we _____ these supply chain issues today.",
    questionVi:
      "Nếu ban quản lý nghe theo lời khuyên của các chuyên gia, chúng ta _____ đã không phải đối mặt với những vấn đề chuỗi cung ứng này hôm nay.",
    options: [
      { option: "would not be facing", isCorrect: true },
      { option: "would not have faced", isCorrect: false },
      { option: "will not face", isCorrect: false },
      { option: "do not face", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could be + V-ing).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1403",
    topicId: "sentence-structure",
    questionType: "structure",
    contextEn: "Emphasizing a rarity.",
    contextVi: "Nhấn mạnh sự hiếm có.",
    questionEn:
      "Seldom _____ such a profound transformation of an entire industry in such a short period of time.",
    questionVi:
      "Hiếm khi _____ thấy một sự chuyển đổi sâu sắc của toàn bộ một ngành công nghiệp trong một thời gian ngắn như vậy.",
    options: [
      { option: "do we witness", isCorrect: true },
      { option: "we witness", isCorrect: false },
      { option: "witnessed we", isCorrect: false },
      { option: "have we witnessed", isCorrect: true },
    ],
    explanationVi: "Đảo ngữ với trạng từ phủ định 'Seldom' (Hiếm khi).",
    category: "Structure",
  },
  {
    id: "C1-1404",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a person's behavior.",
    contextVi: "Xác định hành vi của một người.",
    questionEn:
      "Ms. Patel's _____ and proactive leadership has been instrumental in the company's recent success.",
    questionVi:
      "Sự lãnh đạo _____ và chủ động của bà Patel đã góp phần vào thành công gần đây của công ty.",
    options: [
      { option: "exemplary", isCorrect: true },
      { option: "exemplify", isCorrect: false },
      { option: "exemplarily", isCorrect: false },
      { option: "exemplification", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'leadership'.",
    category: "Word Forms",
  },
  {
    id: "C1-1405",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Using a formal relative clause with a quantifier.",
    contextVi: "Sử dụng mệnh đề quan hệ trang trọng với từ định lượng.",
    questionEn:
      "Our team has proposed several new initiatives, many of _____ are currently under review by the board.",
    questionVi:
      "Nhóm của chúng tôi đã đề xuất một vài sáng kiến mới, nhiều _____ trong số đó hiện đang được hội đồng quản trị xem xét.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "those", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau từ định lượng (many of) để thay thế cho danh từ 'initiatives'.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1406",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a condition of success.",
    contextVi: "Nhấn mạnh điều kiện để thành công.",
    questionEn:
      "Only through a more rigorous selection process _____ the firm ensure the quality of its senior executive hires.",
    questionVi:
      "Chỉ thông qua quy trình tuyển chọn nghiêm ngặt hơn _____ công ty mới có thể đảm bảo chất lượng của các nhân sự quản lý cấp cao dự định tuyển.",
    options: [
      { option: "can", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Only through' (Chỉ thông qua... thì mới có thể...).",
    category: "Inversion",
  },
  {
    id: "C1-1407",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expessing a mandatory instruction.",
    contextVi: "Diễn tả một chỉ thị bắt buộc.",
    questionEn:
      "It is essential that every project manager _____ a detailed risk assessment before any initiative begins.",
    questionVi:
      "Điều thiết yếu là mọi quản lý dự án _____ phải thực hiện đánh giá rủi ro chi tiết trước khi bất kỳ sáng kiến nào bắt đầu.",
    options: [
      { option: "conduct", isCorrect: true },
      { option: "conducts", isCorrect: false },
      { option: "conducted", isCorrect: false },
      { option: "conducting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau 'It is essential that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1408",
    topicId: "participial-phrases",
    questionType: "grammar",
    contextEn: "Combining two actions for focus.",
    contextVi: "Kết hợp hai hành động để nhấn mạnh.",
    questionEn:
      "_____ to capture a larger share of the emerging market, the company launched a series of low-cost products.",
    questionVi:
      "_____ chiếm lĩnh thị phần lớn hơn tại thị trường mới nổi, công ty đã tung ra một loạt sản phẩm giá rẻ.",
    options: [
      { option: "Aiming", isCorrect: true },
      { option: "Aimed", isCorrect: false },
      { option: "To aim", isCorrect: false },
      { option: "Having aimed", isCorrect: false },
    ],
    explanationVi:
      "Dùng hiện tại phân từ (V-ing) để chỉ mục đích hoặc nguyên nhân song song với hành động chính.",
    category: "Participial Phrases",
  },
  {
    id: "C1-1409",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a hypothetical scenario.",
    contextVi: "Suy ngẫm về kịch bản giả định.",
    questionEn:
      "If the company had not adapted to the digital age, it _____ obsolete in today's fast-paced market.",
    questionVi:
      "Nếu công ty đã không thích nghi với thời đại kỹ thuật số, họ _____ đã trở nên lỗi thời trong thị trường phát triển nhanh chóng hiện nay.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "would have been", isCorrect: false },
      { option: "will be", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would + Adj).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1410",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a negative condition in formal speech.",
    contextVi:
      "Nhấn mạnh một điều kiện phủ định trong bài phát biểu trang trọng.",
    questionEn:
      "Not until the merger was fully integrated _____ the company see a significant increase in its market share.",
    questionVi:
      "Mãi cho đến khi vụ sáp nhập được tích hợp hoàn toàn _____ công ty mới thấy thị phần của mình tăng trưởng đáng kể.",
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
    id: "C1-1411",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing simultaneous actions.",
    contextVi: "Mô tả các hành động xảy ra đồng thời.",
    questionEn:
      "_____ for a breakthrough in battery technology, the research team worked round the clock for months.",
    questionVi:
      "_____ mong tìm kiếm bước đột phá trong công nghệ pin, nhóm nghiên cứu đã làm việc ngày đêm trong nhiều tháng.",
    options: [
      { option: "Striving", isCorrect: true },
      { option: "Strived", isCorrect: false },
      { option: "To strive", isCorrect: false },
      { option: "Having strived", isCorrect: false },
    ],
    explanationVi:
      "Dùng hiện tại phân từ (V-ing) để chỉ hành động xảy ra song song hoặc nguyên nhân.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1412",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a past decision with a current result.",
    contextVi: "Thảo luận về một quyết định quá khứ có kết quả hiện tại.",
    questionEn:
      "If we had not diversified our product line last year, we _____ in such a strong financial position today.",
    questionVi:
      "Nếu chúng ta không đa dạng hóa dòng sản phẩm vào năm ngoái, chúng ta _____ đã không ở trong tình trạng tài chính mạnh mẽ như hiện nay.",
    options: [
      { option: "would not be", isCorrect: true },
      { option: "would not have been", isCorrect: false },
      { option: "will not be", isCorrect: false },
      { option: "is not", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1413",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Focusing on the main reason for an outcome.",
    contextVi: "Tập trung vào nguyên nhân chính mang lại kết quả.",
    questionEn:
      "It was her exceptional strategic thinking _____ allowed the startup to scale so rapidly in its first year.",
    questionVi:
      "Chính tư duy chiến lược xuất chúng của cô ấy _____ đã cho phép công ty khởi nghiệp mở rộng quy mô nhanh chóng trong năm đầu tiên.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh nguyên nhân: It was + N + that...",
    category: "Structure",
  },
  {
    id: "C1-1414",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an advice from a management consultant.",
    contextVi: "Báo cáo lời khuyên từ một cố vấn quản lý.",
    questionEn:
      "The consultant advised that the board _____ the existing organizational structure to improve communication.",
    questionVi:
      "Cố vấn đã khuyên ban lãnh đạo _____ lại cấu trúc tổ chức hiện có để cải thiện giao tiếp.",
    options: [
      { option: "overhaul", isCorrect: true },
      { option: "overhauls", isCorrect: false },
      { option: "overhauled", isCorrect: false },
      { option: "overhauling", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau động từ 'advise that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1415",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a large quantity of data.",
    contextVi: "Đề cập đến một lượng lớn dữ liệu.",
    questionEn:
      "The analyst compiled hundred of pages of data, much of _____ was irrelevant to the final report.",
    questionVi:
      "Chuyên viên phân tích đã biên soạn hàng trăm trang dữ liệu, nhiều _____ trong số đó không liên quan đến báo cáo cuối cùng.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "what", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau từ định lượng (much of) trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1416",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a projected industry trend.",
    contextVi: "Mô tả một xu hướng dự kiến của ngành.",
    questionEn:
      "The demand for electric vehicles _____ to surpass that of traditional combustion engine cars by the end of the decade.",
    questionVi:
      "Nhu cầu về xe điện _____ dự kiến sẽ vượt qua nhu cầu xe động cơ đốt trong truyền thống vào cuối thập kỷ này.",
    options: [
      { option: "is projected", isCorrect: true },
      { option: "is projecting", isCorrect: false },
      { option: "projects", isCorrect: false },
      { option: "has projected", isCorrect: false },
    ],
    explanationVi: "Câu bị động với cấu trúc 'S + be + P2 + to-V'.",
    category: "Passive Voice",
  },
  {
    id: "C1-1417",
    topicId: "comparison",
    questionType: "grammar",
    contextEn:
      "Describing a proportional relationship between scale and efficiency.",
    contextVi: "Mô tả mối quan hệ tỷ lệ thuận giữa quy mô và hiệu quả.",
    questionEn:
      "The larger the scale of production, _____ the per-unit cost of manufacturing becomes.",
    questionVi:
      "Quy mô sản xuất càng lớn, chi phí sản xuất trên mỗi đơn vị _____.",
    options: [
      { option: "the lower", isCorrect: true },
      { option: "lower", isCorrect: false },
      { option: "more lowly", isCorrect: false },
      { option: "the most low", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C1-1418",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Stating a condition for eligibility.",
    contextVi: "Nêu điều kiện đủ tư cách.",
    questionEn:
      "Admission to the executive leadership program is contingent _____ a minimum of ten years of industry experience.",
    questionVi:
      "Việc được nhận vào chương trình lãnh đạo điều hành phụ thuộc _____ vào việc có tối thiểu mười năm kinh nghiệm trong ngành.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi:
      "Cụm tính từ đi với giới từ 'contingent on/upon' (phụ thuộc vào, dựa trên).",
    category: "Prepositions",
  },
  {
    id: "C1-1419",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a situation.",
    contextVi: "Xác định tính chất của một tình huống.",
    questionEn:
      "The current geopolitical climate is extremely _____ and requires a very cautious approach to international investment.",
    questionVi:
      "Khí hậu địa chính trị hiện nay cực kỳ _____ và đòi hỏi một cách tiếp cận rất thận trọng đối với đầu tư quốc tế.",
    options: [
      { option: "volatile", isCorrect: true },
      { option: "volatility", isCorrect: false },
      { option: "volatilization", isCorrect: false },
      { option: "volatilize", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ 'climate'.",
    category: "Word Forms",
  },
  {
    id: "C1-1420",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction on information access.",
    contextVi: "Nhấn mạnh sự hạn chế trong việc truy cập thông tin.",
    questionEn:
      "Seldom _____ such a high level of transparency in the financial reports of a major multinational corporation.",
    questionVi:
      "Hiếm khi _____ thấy mức độ minh bạch cao như vậy trong các báo cáo tài chính của một tập đoàn đa quốc gia lớn.",
    options: [
      { option: "do we witness", isCorrect: true },
      { option: "we witness", isCorrect: false },
      { option: "witnessed we", isCorrect: false },
      { option: "we do witness", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với trạng từ phủ định 'Seldom' (Hiếm khi).",
    category: "Inversion",
  },
  {
    id: "C1-1421",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Discussing a difficult task.",
    contextVi: "Thảo luận về một nhiệm vụ khó khăn.",
    questionEn:
      "_____ an effective balance between professional and personal life is one of the biggest challenges for modern executives.",
    questionVi:
      "_____ sự cân bằng hiệu quả giữa cuộc sống nghề nghiệp và cá nhân là một trong những thách thức lớn nhất đối với các giám đốc điều hành hiện đại.",
    options: [
      { option: "Striking", isCorrect: true },
      { option: "Strike", isCorrect: false },
      { option: "To be struck", isCorrect: false },
      { option: "Having struck", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng danh động từ (Gerund) 'Striking a balance' làm chủ ngữ.",
    category: "Gerunds",
  },
  {
    id: "C1-1422",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating with high certainty about a past event.",
    contextVi: "Dự đoán với độ chắc chắn cao về một sự kiện trong quá khứ.",
    questionEn:
      "The board _____ been aware of the potential risks associated with the expansion long before they actually occurred.",
    questionVi:
      "Ban điều hành _____ chắc chắn đã biết về những rủi ro tiềm ẩn liên quan đến việc mở rộng từ lâu trước khi chúng thực sự xảy ra.",
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
    id: "C1-1423",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Connecting two ideas illustrating a challenge.",
    contextVi: "Kết nối hai ý tưởng minh họa một thách thức.",
    questionEn:
      "The company decided to delay the product launch _____ the logistical difficulties in the European market.",
    questionVi:
      "Công ty đã quyết định trì hoãn việc ra mắt sản phẩm _____ những khó khăn hậu cần tại thị trường Châu Âu.",
    options: [
      { option: "on account of", isCorrect: true },
      { option: "despite", isCorrect: false },
      { option: "although", isCorrect: false },
      { option: "nevertheless", isCorrect: false },
    ],
    explanationVi: "Cụm giới từ 'on account of' = 'because of' (vì, do).",
    category: "Conjunctions",
  },
  {
    id: "C1-1424",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expessing a formal recommendation from a committee.",
    contextVi: "Diễn tả một khuyến nghị chính thức từ một ủy ban.",
    questionEn:
      "The audit committee recommended that the CFO _____ a comprehensive review of the subsidiary's accounting practices.",
    questionVi:
      "Ủy ban kiểm toán đã khuyến nghị rằng CFO _____ soát xét toàn diện các hoạt động kế toán của công ty con.",
    options: [
      { option: "conduct", isCorrect: true },
      { option: "conducts", isCorrect: false },
      { option: "conducted", isCorrect: false },
      { option: "conducting", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định sau động từ 'recommend that...'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1425",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "On no account _____ employees divulge any proprietary algorithms to individuals outside of the research department.",
    questionVi:
      "Trong bất kỳ trường hợp nào, nhân viên _____ không được tiết lộ bất kỳ thuật toán độc quyền nào cho các cá nhân bên ngoài bộ phận nghiên cứu.",
    options: [
      { option: "should", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "must", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ trường hợp nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1426",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing the circumstances leading to an action.",
    contextVi: "Mô tả các tình huống dẫn đến một hành động.",
    questionEn:
      "_____ by the sudden shift in global consumer behavior, the marketing departement completely revamped its strategy.",
    questionVi:
      "_____ bởi sự thay đổi đột ngột trong hành vi người tiêu dùng toàn cầu, bộ phận tiếp thị đã cải tổ hoàn toàn chiến lược của mình.",
    options: [
      { option: "Surprised", isCorrect: true },
      { option: "Surprising", isCorrect: false },
      { option: "To be surprised", isCorrect: false },
      { option: "Having surprised", isCorrect: false },
    ],
    explanationVi:
      "Dùng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1427",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a past error with current impact.",
    contextVi: "Suy ngẫm về một sai lầm trong quá khứ có tác động hiện tại.",
    questionEn:
      "If the company had anticipated the decline in demand, it _____ such large amounts of unsold inventory today.",
    questionVi:
      "Nếu công ty lường trước được sự sụt giảm nhu cầu, họ _____ đã không phải nắm giữ lượng lớn hàng tồn kho chưa bán được như hiện nay.",
    options: [
      { option: "would not be holding", isCorrect: true },
      { option: "would not have held", isCorrect: false },
      { option: "will not hold", isCorrect: false },
      { option: "is not holding", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + be + V-ing).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1428",
    topicId: "sentence-structure",
    questionType: "structure",
    contextEn: "Focusing on a specific person's contribution.",
    contextVi: "Tập trung vào sự đóng góp của một người cụ thể.",
    questionEn:
      "It was through his tireless efforts and dedication _____ the charity foundation managed to raise over a million dollars.",
    questionVi:
      "Chính nhờ những nỗ lực và sự cống hiến không mệt mỏi của ông ấy _____ mà quỹ từ thiện đã gây quỹ được hơn một triệu đô la.",
    options: [
      { option: "that", isCorrect: true },
      { option: "while", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh phương thức: It was through... that...",
    category: "Structure",
  },
  {
    id: "C1-1429",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal agreement.",
    contextVi: "Nhấn mạnh một hạn chế trong một thỏa thuận trang trọng.",
    questionEn:
      "On no account _____ any member of the board discuss the ongoing litigation with members of the press.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một thành viên nào trong ban điều hành _____ được thảo luận về vụ kiện tụng đang diễn ra với giới báo chí.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C1-1430",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to an action.",
    contextVi: "Mô tả một trạng thái dẫn đến một hành động.",
    questionEn:
      "_____ by the lack of transparency, the shareholders demanded an independent audit of the company's finances.",
    questionVi:
      "_____ bởi sự thiếu minh bạch, các cổ đông đã yêu cầu một cuộc kiểm toán độc lập đối với tình hình tài chính của công ty.",
    options: [
      { option: "Concerned", isCorrect: true },
      { option: "Concerning", isCorrect: false },
      { option: "To be concerned", isCorrect: false },
      { option: "Having concerned", isCorrect: false },
    ],
    explanationVi:
      "Dùng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C1-1431",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a past event with current consequences.",
    contextVi: "Thảo luận về một sự kiện quá khứ có hệ quả hiện tại.",
    questionEn:
      "If the management had acted more decisively during the initial crisis, the firm _____ such a precarious state now.",
    questionVi:
      "Nếu ban quản lý hành động quyết đoán hơn trong cuộc khủng hoảng ban đầu, công ty _____ đã không ở trong tình trạng bấp bênh như hiện nay.",
    options: [
      { option: "would not be in", isCorrect: true },
      { option: "would not have been in", isCorrect: false },
      { option: "will not be in", isCorrect: false },
      { option: "is not in", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + Quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C1-1432",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Focusing on the primary reason for a failure.",
    contextVi: "Tập trung vào lý do chính dẫn đến sự thất bại.",
    questionEn:
      "It was the lack of clear communication between departments _____ ultimately led to the project's failure.",
    questionVi:
      "Chính sự thiếu giao tiếp rõ ràng giữa các bộ phận _____ cuối cùng đã dẫn đến sự thất bại của dự án.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh nguyên nhân: It was + N + that...",
    category: "Structure",
  },
  {
    id: "C1-1433",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a mandatory requirement.",
    contextVi: "Báo cáo một yêu cầu bắt buộc.",
    questionEn:
      "The regulatory authority mandates that all financial institutions _____ their internal control systems annually.",
    questionVi:
      "Cơ quan quản lý yêu cầu tất cả các tổ chức tài chính _____ hệ thống kiểm soát nội bộ của mình hàng năm.",
    options: [
      { option: "audit", isCorrect: true },
      { option: "audits", isCorrect: false },
      { option: "audited", isCorrect: false },
      { option: "auditing", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định sau động từ 'mandate that + S + V (nguyên mẫu)'.",
    category: "Subjunctive",
  },
  {
    id: "C1-1434",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Referring to a large quantity of research.",
    contextVi: "Đề cập đến một lượng lớn nghiên cứu.",
    questionEn:
      "The team conducted a series of market studies, most of _____ pointed towards a significant shift in consumer preferences.",
    questionVi:
      "Nhóm đã thực hiện một loạt các nghiên cứu thị trường, phần lớn _____ trong số đó chỉ ra một sự thay đổi đáng kể trong sở thích của người tiêu dùng.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "what", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau từ định lượng (most of) trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C1-1435",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a projected industry trend.",
    contextVi: "Mô tả một xu hướng dự kiến của ngành.",
    questionEn:
      "The demand for sustainable packaging solutions _____ to increase significantly over the next few years.",
    questionVi:
      "Nhu cầu về các giải pháp đóng gói bền vững _____ dự kiến sẽ tăng đáng kể trong vài năm tới.",
    options: [
      { option: "is expected", isCorrect: true },
      { option: "is expecting", isCorrect: false },
      { option: "expects", isCorrect: false },
      { option: "has expected", isCorrect: false },
    ],
    explanationVi: "Câu bị động theo cấu trúc 'S + be + P2 + to-V'.",
    category: "Passive Voice",
  },
  {
    id: "C1-1436",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Describing a proportional relationship between scale and cost.",
    contextVi: "Mô tả mối quan hệ tỷ lệ thuận giữa quy mô và chi phí.",
    questionEn:
      "The larger the volume of sales, _____ the per-unit distribution costs will be.",
    questionVi:
      "Khối lượng bán hàng càng lớn, chi phí phân phối trên mỗi đơn vị _____.",
    options: [
      { option: "the lower", isCorrect: true },
      { option: "lower", isCorrect: false },
      { option: "more lowly", isCorrect: false },
      { option: "the most low", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C1-1437",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Stating a condition for eligibility for a program.",
    contextVi: "Nêu điều kiện đủ tư cách tham gia một chương trình.",
    questionEn:
      "Eligibility for the executive leadership bonus is contingent _____ meeting all pre-defined performance targets.",
    questionVi:
      "Việc đủ điều kiện nhận thưởng lãnh đạo điều hành phụ thuộc _____ vào việc đáp ứng tất cả các mục tiêu hiệu quả công việc đã xác định trước.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi:
      "Cụm tính từ đi với giới từ 'contingent on/upon' (phụ thuộc vào, dựa trên).",
    category: "Prepositions",
  },
  {
    id: "C1-1438",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a situation.",
    contextVi: "Xác định tính chất của một tình huống.",
    questionEn:
      "The current market environment is highly _____ and requires a dynamic and flexible strategic approach.",
    questionVi:
      "Môi trường thị trường hiện nay là cực kỳ _____ và đòi hỏi một cách tiếp cận chiến lược linh hoạt và năng động.",
    options: [
      { option: "competitive", isCorrect: true },
      { option: "compete", isCorrect: false },
      { option: "competitively", isCorrect: false },
      { option: "competition", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ 'environment'.",
    category: "Word Forms",
  },
];

export default questions;
