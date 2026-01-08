import { Question } from '../types';

export const questions: Question[] = [
    {
        questionEn: "I ____ London since 1990.",
        questionVi: "Tôi ____ ở London từ năm 1990.",
        options: [
      { option: "have lived", isCorrect: true },
      { option: "lived", isCorrect: false },
      { option: "live", isCorrect: false },
      { option: "am living", isCorrect: false }
    ],
        explanationVi: "Hiện tại hoàn thành với 'since' + mốc thời gian.",
        category: "Present Perfect",
    },
    {
        questionEn: "By the time we got to the cinema, the movie ____.",
        questionVi: "Vào lúc chúng tôi đến rạp chiếu phim, bộ phim ____.",
        options: [
      { option: "started", isCorrect: false },
      { option: "starts", isCorrect: false },
      { option: "had started", isCorrect: true },
      { option: "has started", isCorrect: false }
    ],
        explanationVi:
            "Bộ phim đã bắt đầu TRƯỚC KHI chúng tôi đến (hành động quá khứ xảy ra trước 1 hành động khác) -> thì Quá khứ hoàn thành.",
        category: "Past Perfect",
    },
    {
        questionEn: "Don't call me at 8. I ____ dinner.",
        questionVi: "Đừng gọi cho tôi lúc 8 giờ. Tôi ____ bữa tối.",
        options: [
      { option: "will eat", isCorrect: false },
      { option: "am eating", isCorrect: false },
      { option: "will be eating", isCorrect: true },
      { option: "ate", isCorrect: false }
    ],
        explanationVi:
            "Hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai -> thì Tương lai tiếp diễn.",
        category: "Future Continuous",
    },
    {
        questionEn: "If you mix red and blue, you ____ purple.",
        questionVi: "Nếu bạn trộn màu đỏ và xanh dương, bạn ____ màu tím.",
        options: [
      { option: "get", isCorrect: true },
      { option: "got", isCorrect: false },
      { option: "will get", isCorrect: false },
      { option: "getting", isCorrect: false }
    ],
        explanationVi:
            "Sự thật hiển nhiên tương ứng với Câu điều kiện loại 0: thì Hiện tại đơn ở cả hai mệnh đề.",
        category: "Zero Conditional",
    },
    {
        questionEn: "If he ____, we will go without him.",
        questionVi: "Nếu anh ấy ____, chúng tôi sẽ đi mà không có anh ấy.",
        options: [
      { option: "don't come", isCorrect: false },
      { option: "doesn't come", isCorrect: true },
      { option: "didn't come", isCorrect: false },
      { option: "won't come", isCorrect: false }
    ],
        explanationVi:
            "Câu điều kiện loại 1: Mệnh đề If sử dụng thì Hiện tại đơn.",
        category: "First Conditional",
    },
    {
        questionEn: "English ____ in many countries.",
        questionVi: "Tiếng Anh ____ ở nhiều quốc gia.",
        options: [
      { option: "speak", isCorrect: false },
      { option: "speaks", isCorrect: false },
      { option: "is spoken", isCorrect: true },
      { option: "spoken", isCorrect: false }
    ],
        explanationVi: "Câu bị động: be + quá khứ phân từ (V3/ed).",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "She ____ written three books.",
        questionVi: "Cô ấy ____ viết được ba cuốn sách.",
        options: [
      { option: "has", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false }
    ],
        explanationVi: "Hiện tại hoàn thành: S + has + V3.",
        category: "Present Perfect",
    },
    {
        questionEn: "They ____ arrived by the time we got there.",
        questionVi: "Họ ____ đã đến vào lúc chúng tôi tới đó.",
        options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false }
    ],
        explanationVi:
            "Quá khứ hoàn thành diễn tả hành động xảy ra trước hành động khác trong quá khứ.",
        category: "Past Perfect",
    },
    {
        questionEn: "He said that he ____ the film before.",
        questionVi: "Anh ấy nói rằng anh ấy ____ đã xem bộ phim đó trước đây rồi.",
        options: [
      { option: "had seen", isCorrect: true },
      { option: "saw", isCorrect: false },
      { option: "has seen", isCorrect: false },
      { option: "sees", isCorrect: false }
    ],
        explanationVi: "Câu tường thuật lùi thì: QKĐ/HTHT -> QKHT.",
        category: "Other",
    },
    {
        questionEn: "If I ____ you, I would study harder.",
        questionVi: "Nếu tôi ____ là bạn, tôi sẽ học hành chăm chỉ hơn.",
        options: [
      { option: "were", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "be", isCorrect: false }
    ],
        explanationVi:
            "Câu điều kiện loại 2 (giả định trái ngược hiện tại): 'were' dùng cho mọi ngôi.",
        category: "Second Conditional",
    },
    {
        questionEn: "She asked me if I ____ swim.",
        questionVi: "Cô ấy hỏi tôi liệu tôi ____ có biết bơi không.",
        options: [
      { option: "could", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "may", isCorrect: false }
    ],
        explanationVi: "Tường thuật câu hỏi Yes/No: if + S + V(lùi thì).",
        category: "Other",
    },
    {
        questionEn: "The house ____ built in 1890.",
        questionVi: "Ngôi nhà ____ được xây dựng vào năm 1890.",
        options: [
      { option: "was", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "has been", isCorrect: false },
      { option: "had been", isCorrect: false }
    ],
        explanationVi: "Bị động quá khứ đơn (có thời gian xác định).",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "I have ____ finished my work.",
        questionVi: "Tôi ____ vừa mới hoàn thành công việc.",
        options: [
      { option: "just", isCorrect: true },
      { option: "yet", isCorrect: false },
      { option: "ever", isCorrect: false },
      { option: "fail", isCorrect: false }
    ],
        explanationVi: "Trạng từ 'just' (vừa mới) dùng trong thì hoàn thành.",
        category: "Present Perfect",
    },
    {
        questionEn: "Have you ____ eaten frogs?",
        questionVi: "Bạn đã ____ từng ăn thịt ếch chưa?",
        options: [
      { option: "ever", isCorrect: true },
      { option: "never", isCorrect: false },
      { option: "yet", isCorrect: false },
      { option: "always", isCorrect: false }
    ],
        explanationVi: "Dùng 'ever' trong câu hỏi trải nghiệm.",
        category: "Present Perfect",
    },
    {
        questionEn: "We ____ to the cinema twice this month.",
        questionVi: "Chúng tôi ____ đã đi xem phim hai lần trong tháng này.",
        options: [
      { option: "have been", isCorrect: true },
      { option: "went", isCorrect: false },
      { option: "go", isCorrect: false },
      { option: "are going", isCorrect: false }
    ],
        explanationVi:
            "Hành động lặp lại nhiều lần trong khoảng thời gian chưa kết thúc.",
        category: "Present Perfect",
    },
    {
        questionEn: "After he ____ his homework, he went to bed.",
        questionVi: "Sau khi anh ấy ____ làm xong bài tập về nhà, anh ấy đi ngủ.",
        options: [
      { option: "had finished", isCorrect: true },
      { option: "finished", isCorrect: false },
      { option: "has finished", isCorrect: false },
      { option: "finishes", isCorrect: false }
    ],
        explanationVi: "Hành động xảy ra xong (QKHT) trước hành động khác (QKĐ).",
        category: "Past Perfect",
    },
    {
        questionEn: "She told me she ____ help me the next day.",
        questionVi: "Cô ấy bảo tôi là cô ấy ____ sẽ giúp tôi vào ngày hôm sau.",
        options: [
      { option: "would", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "may", isCorrect: false }
    ],
        explanationVi: "Tường thuật: will -> would, tomorrow -> the next day.",
        category: "Other",
    },
    {
        questionEn: "When I arrived, the train ____.",
        questionVi: "Khi tôi đến, đoàn tàu ____ đã rời đi rồi.",
        options: [
      { option: "had left", isCorrect: true },
      { option: "left", isCorrect: false },
      { option: "has left", isCorrect: false },
      { option: "leaves", isCorrect: false }
    ],
        explanationVi: "Tàu rời đi trước khi tôi đến (QKHT).",
        category: "Past Perfect",
    },
    {
        questionEn: "He asked me where I ____.",
        questionVi: "Anh ấy hỏi tôi ____ đã sống ở đâu.",
        options: [
      { option: "lived", isCorrect: true },
      { option: "live", isCorrect: false },
      { option: "did live", isCorrect: false },
      { option: "lives", isCorrect: false }
    ],
        explanationVi: "Tường thuật câu hỏi Wh-: từ để hỏi + S + V(lùi thì).",
        category: "Other",
    },
    {
        questionEn: "Unless you ____ now, you will be late.",
        questionVi: "Trừ khi bạn ____ rời đi ngay bây giờ, nếu không bạn sẽ bị muộn.",
        options: [
      { option: "leave", isCorrect: true },
      { option: "don't leave", isCorrect: false },
      { option: "left", isCorrect: false },
      { option: "leaving", isCorrect: false }
    ],
        explanationVi: "Unless = If not, đi with khẳng định.",
        category: "Conditional Type 1",
    },
    {
        questionEn: "I wish I ____ a bigger house.",
        questionVi: "Tôi ước gì mình ____ có một ngôi nhà lớn hơn.",
        options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "having", isCorrect: false }
    ],
        explanationVi: "Ước cho hiện tại: S + wish + S + V(quá khứ).",
        category: "Other",
    },
    {
        questionEn: "The letter ____ by John.",
        questionVi: "Bức thư ____ đã được viết bởi John.",
        options: [
      { option: "was written", isCorrect: true },
      { option: "wrote", isCorrect: false },
      { option: "writes", isCorrect: false },
      { option: "writing", isCorrect: false }
    ],
        explanationVi: "Bị động: be + V3.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "I haven't seen her ____ 3 years.",
        questionVi: "Tôi đã không gặp cô ấy ____ khoảng 3 năm rồi.",
        options: [
      { option: "for", isCorrect: true },
      { option: "since", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "from", isCorrect: false }
    ],
        explanationVi: "'For' + khoảng thời gian.",
        category: "Present Perfect",
    },
    {
        questionEn: "They ____ married for 10 years.",
        questionVi: "Họ ____ đã kết hôn được 10 năm rồi.",
        options: [
      { option: "have been", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "had been", isCorrect: false }
    ],
        explanationVi: "Diễn tả trạng thái kéo dài từ quá khứ đến hiện tại.",
        category: "Present Perfect",
    },
    {
        questionEn: "She said she ____ to the party.",
        questionVi: "Cô ấy nói là cô ấy ____ không thể đi dự tiệc.",
        options: [
      { option: "couldn't go", isCorrect: true },
      { option: "can't go", isCorrect: false },
      { option: "won't go", isCorrect: false },
      { option: "not go", isCorrect: false }
    ],
        explanationVi: "Lùi thì: can't -> couldn't.",
        category: "Other",
    },
    {
        questionEn: "He wanted to know if I ____ play guitar.",
        questionVi: "Anh ấy muốn biết liệu tôi ____ có biết chơi guitar không.",
        options: [
      { option: "could", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "may", isCorrect: false }
    ],
        explanationVi: "Tường thuật câu hỏi nghi vấn.",
        category: "Other",
    },
    {
        questionEn: "If I had money, I ____ buy a car.",
        questionVi: "Nếu có tiền, tôi ____ sẽ mua một chiếc xe hơi.",
        options: [
      { option: "would", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "may", isCorrect: false }
    ],
        explanationVi: "Điều kiện loại 2: S + would + V.",
        category: "Second Conditional",
    },
    {
        questionEn: "The car ____ washed yet.",
        questionVi: "Chiếc xe ____ vẫn chưa được rửa.",
        options: [
      { option: "hasn't been", isCorrect: true },
      { option: "hasn't", isCorrect: false },
      { option: "didn't", isCorrect: false },
      { option: "wasn't", isCorrect: false }
    ],
        explanationVi: "Bị động thì HTHT phủ định: hasn't been V3.",
        category: "Passive Voice (Present Simple)",
    },
    {
        questionEn: "He ____ working here for 6 months.",
        questionVi: "Anh ấy ____ đã làm việc ở đây được 6 tháng rồi.",
        options: [
      { option: "has been", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "had been", isCorrect: false }
    ],
        explanationVi: "HTHT tiếp diễn nhấn mạnh tính liên tục.",
        category: "Present Perfect",
    },
    {
        questionEn: "I saw the man ____ house was on fire.",
        questionVi: "Tôi đã nhìn thấy người đàn ông ____ có ngôi nhà bị cháy.",
        options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false }
    ],
        explanationVi: "Đại từ quan hệ chỉ sở hữu.",
        category: "Relative Clauses",
    },
    {
        questionEn: "The reason ____ he left is unknown.",
        questionVi: "Lý do ____ anh ta rời đi vẫn chưa được biết.",
        options: [
      { option: "why", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "where", isCorrect: false }
    ],
        explanationVi: "Reason why.",
        category: "Relative Clauses",
    },
];

export default questions;
