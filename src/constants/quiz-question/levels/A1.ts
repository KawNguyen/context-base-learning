import { Question } from '../types';

export const questions: Question[] = [
    {
        questionEn: "She ____ to school every day.",
        questionVi: "Cô ấy ____ đến trường mỗi ngày.",
        options: [
      { option: "go", isCorrect: false },
      { option: "goes", isCorrect: true },
      { option: "going", isCorrect: false },
      { option: "gone", isCorrect: false }
    ],
        explanationVi:
            "Thì Hiện tại đơn với chủ ngữ ngôi thứ 3 số ít 'She': thêm 'es' vào sau 'go'.",
        category: "Present Simple",
    },
    {
        questionEn: "He usually ____ to work by bus.",
        questionVi: "Anh ấy thường ____ đi làm bằng xe buýt.",
        options: [
      { option: "go", isCorrect: false },
      { option: "goes", isCorrect: true },
      { option: "going", isCorrect: false },
      { option: "went", isCorrect: false }
    ],
        explanationVi:
            "Với chủ ngữ 'He' (ngôi thứ 3 số ít), chúng ta thêm 'es' vào sau 'go' -> 'goes'.",
        category: "Present Simple",
    },
    {
        questionEn: "I ____ a student.",
        questionVi: "Tôi ____ là một học sinh.",
        options: [
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "am", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "Động từ 'to be' đi with chủ ngữ 'I' là 'am'.",
        category: "Present Simple",
    },
    {
        questionEn: "They ____ playing football now.",
        questionVi: "Họ ____ đang chơi bóng đá bây giờ.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi:
            "Thì Hiện tại tiếp diễn: S + am/is/are + V-ing. 'They' đi with 'are'.",
        category: "Present Continuous",
    },
    {
        questionEn: "The book is ____ the table.",
        questionVi: "Cuốn sách đang ở ____ trên bàn.",
        options: [
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "to", isCorrect: false }
    ],
        explanationVi:
            "Giới từ chỉ vị trí: 'on' chỉ vật ở trên một bề mặt (trên bàn).",
        category: "Other",
    },
    {
        questionEn: "He ____ breakfast at 7 AM.",
        questionVi: "Anh ấy ____ ăn sáng lúc 7 giờ sáng.",
        options: [
      { option: "eat", isCorrect: false },
      { option: "eats", isCorrect: true },
      { option: "eating", isCorrect: false },
      { option: "ate", isCorrect: false }
    ],
        explanationVi:
            "Thì Hiện tại đơn cho thói quen hàng ngày. 'He' yêu cầu thêm 's' vào động từ.",
        category: "Present Simple",
    },
    {
        questionEn: "Listen! The bird ____.",
        questionVi: "Nghe kìa! Con chim ____.",
        options: [
      { option: "sing", isCorrect: false },
      { option: "sings", isCorrect: false },
      { option: "is singing", isCorrect: true },
      { option: "sang", isCorrect: false }
    ],
        explanationVi:
            "Dấu hiệu 'Listen!' cho thấy hành động đang diễn ra -> thì Hiện tại tiếp diễn.",
        category: "Present Continuous",
    },
    {
        questionEn: "Listen! Someone ____ the piano.",
        questionVi: "Nghe kìa! Ai đó ____ đàn piano.",
        options: [
      { option: "play", isCorrect: false },
      { option: "plays", isCorrect: false },
      { option: "is playing", isCorrect: true },
      { option: "played", isCorrect: false }
    ],
        explanationVi:
            "'Listen!' ngụ ý hành động đang xảy ra ngay bây giờ -> thì Hiện tại tiếp diễn.",
        category: "Present Continuous",
    },
    {
        questionEn: "We ____ from Vietnam.",
        questionVi: "Chúng tôi ____ đến từ Việt Nam.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "Động từ 'to be' đi with chủ ngữ số nhiều 'We' là 'are'.",
        category: "Present Simple",
    },
    {
        questionEn: "Do you ____ coffee?",
        questionVi: "Bạn có ____ cà phê không?",
        options: [
      { option: "like", isCorrect: true },
      { option: "likes", isCorrect: false },
      { option: "liking", isCorrect: false },
      { option: "liked", isCorrect: false }
    ],
        explanationVi: "Câu hỏi thì Hiện tại đơn: Do/Does + S + V nguyên thể.",
        category: "Present Simple",
    },
    {
        questionEn: "My father ____ a doctor.",
        questionVi: "Bố tôi ____ là một bác sĩ.",
        options: [
      { option: "is", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "'My father' là ngôi thứ 3 số ít, dùng 'is'.",
        category: "Present Simple",
    },
    {
        questionEn: "Where ____ she live?",
        questionVi: "Cô ấy sống ____ ở đâu?",
        options: [
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false }
    ],
        explanationVi:
            "Câu hỏi Wh- với động từ thường ở hiện tại đơn: Where + does + S + V?",
        category: "Present Simple",
    },
    {
        questionEn: "Look! It ____.",
        questionVi: "Nhìn kìa! Trời ____ đang mưa.",
        options: [
      { option: "rain", isCorrect: false },
      { option: "rains", isCorrect: false },
      { option: "is raining", isCorrect: true },
      { option: "rained", isCorrect: false }
    ],
        explanationVi: "Dấu hiệu 'Look!' dùng thì hiện tại tiếp diễn.",
        category: "Present Continuous",
    },
    {
        questionEn: "I usually ____ up at 6 o'clock.",
        questionVi: "Tôi thường ____ thức dậy lúc 6 giờ.",
        options: [
      { option: "get", isCorrect: true },
      { option: "gets", isCorrect: false },
      { option: "getting", isCorrect: false },
      { option: "got", isCorrect: false }
    ],
        explanationVi:
            "Trạng từ 'usually' dùng thì hiện tại đơn, 'I' + V nguyên thể.",
        category: "Present Simple",
    },
    {
        questionEn: "The cat is ____ the box.",
        questionVi: "Con mèo đang ở ____ trong hộp.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "to", isCorrect: false }
    ],
        explanationVi: "'in the box' (trong hộp).",
        category: "Other",
    },
    {
        questionEn: "They ____ not happy.",
        questionVi: "Họ ____ không vui.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "Phủ định to be: S + am/is/are + not.",
        category: "Present Simple",
    },
    {
        questionEn: "____ is your name?",
        questionVi: "Tên của bạn ____ là gì?",
        options: [
      { option: "What", isCorrect: true },
      { option: "Where", isCorrect: false },
      { option: "When", isCorrect: false },
      { option: "Who", isCorrect: false }
    ],
        explanationVi: "Hỏi tên dùng 'What'.",
        category: "Present Simple",
    },
    {
        questionEn: "There ____ two apples on the desk.",
        questionVi: "Có ____ hai quả táo ở trên bàn làm việc.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi:
            "Cấu trúc There is/There are. 'two apples' là số nhiều dùng 'are'.",
        category: "Present Simple",
    },
    {
        questionEn: "He ____ like apples.",
        questionVi: "Anh ấy ____ không thích táo.",
        options: [
      { option: "don't", isCorrect: false },
      { option: "doesn't", isCorrect: true },
      { option: "isn't", isCorrect: false },
      { option: "aren't", isCorrect: false }
    ],
        explanationVi:
            "Phủ định thì hiện tại đơn với động từ thường: S + don't/doesn't + V.",
        category: "Present Simple",
    },
    {
        questionEn: "She always ____ her homework.",
        questionVi: "Cô ấy luôn luôn ____ làm bài tập về nhà.",
        options: [
      { option: "do", isCorrect: false },
      { option: "does", isCorrect: true },
      { option: "doing", isCorrect: false },
      { option: "did", isCorrect: false }
    ],
        explanationVi: "Hiện tại đơn với 'always', 'She' đi with 'does'.",
        category: "Present Simple",
    },
    {
        questionEn: "I am ____ a letter.",
        questionVi: "Tôi đang ____ viết một lá thư.",
        options: [
      { option: "write", isCorrect: false },
      { option: "writes", isCorrect: false },
      { option: "writing", isCorrect: true },
      { option: "wrote", isCorrect: false }
    ],
        explanationVi: "Hiện tại tiếp diễn: S + am + V-ing.",
        category: "Present Continuous",
    },
    {
        questionEn: "Are you ____ TV?",
        questionVi: "Bạn có đang ____ xem TV không?",
        options: [
      { option: "watch", isCorrect: false },
      { option: "watches", isCorrect: false },
      { option: "watching", isCorrect: true },
      { option: "watched", isCorrect: false }
    ],
        explanationVi: "Câu hỏi hiện tại tiếp diễn: Are you + V-ing?",
        category: "Present Continuous",
    },
    {
        questionEn: "We go to school ____ bus.",
        questionVi: "Chúng tôi đi học ____ bằng xe buýt.",
        options: [
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "by", isCorrect: true },
      { option: "at", isCorrect: false }
    ],
        explanationVi: "Phương tiện đi lại dùng giới từ 'by'.",
        category: "Other",
    },
    {
        questionEn: "The picture is ____ the wall.",
        questionVi: "Bức tranh đang ở ____ trên tường.",
        options: [
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: true },
      { option: "at", isCorrect: false },
      { option: "under", isCorrect: false }
    ],
        explanationVi: "'on the wall' (trên tường).",
        category: "Other",
    },
    {
        questionEn: "____ old are you?",
        questionVi: "Bạn ____ bao nhiêu tuổi?",
        options: [
      { option: "What", isCorrect: false },
      { option: "How", isCorrect: true },
      { option: "Who", isCorrect: false },
      { option: "Where", isCorrect: false }
    ],
        explanationVi: "Hỏi tuổi dùng 'How old'.",
        category: "Present Simple",
    },
    {
        questionEn: "My brother ____ tall.",
        questionVi: "Anh trai tôi ____ cao.",
        options: [
      { option: "is", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "have", isCorrect: false }
    ],
        explanationVi: "Miêu tả đặc điểm dùng to be 'is'.",
        category: "Present Simple",
    },
    {
        questionEn: "They ____ English very well.",
        questionVi: "Họ ____ nói tiếng Anh rất tốt.",
        options: [
      { option: "speak", isCorrect: true },
      { option: "speaks", isCorrect: false },
      { option: "speaking", isCorrect: false },
      { option: "spoke", isCorrect: false }
    ],
        explanationVi: "Hiện tại đơn, 'They' + V nguyên thể.",
        category: "Present Simple",
    },
    {
        questionEn: "Is she ____ student?",
        questionVi: "Cô ấy có phải là ____ một học sinh không?",
        options: [
      { option: "a", isCorrect: true },
      { option: "an", isCorrect: false },
      { option: "the", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi:
            "Mạo từ 'a' trước danh từ đếm được số ít bắt đầu bằng phụ âm.",
        category: "Articles",
    },
    {
        questionEn: "Please ____ the door.",
        questionVi: "Làm ơn hãy ____ cửa.",
        options: [
      { option: "open", isCorrect: true },
      { option: "opens", isCorrect: false },
      { option: "opening", isCorrect: false },
      { option: "opened", isCorrect: false }
    ],
        explanationVi: "Câu mệnh lệnh bắt đầu bằng động từ nguyên thể.",
        category: "Imperatives",
    },
    {
        questionEn: "I have an apple ____ a banana.",
        questionVi: "Tôi có một quả táo ____ và một quả chuối.",
        options: [
      { option: "and", isCorrect: true },
      { option: "but", isCorrect: false },
      { option: "so", isCorrect: false },
      { option: "or", isCorrect: false }
    ],
        explanationVi: "Liên từ 'and' để nối hai danh từ tương đương.",
        category: "Other",
    },
    {
        questionEn: "She is ____ beautiful girl.",
        questionVi: "Cô ấy là ____ một cô gái đẹp.",
        options: [
      { option: "a", isCorrect: true },
      { option: "an", isCorrect: false },
      { option: "the", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi: "Cụm danh từ: a + adj + noun.",
        category: "Articles",
    },
    {
        questionEn: "What time ____ it?",
        questionVi: "Bây giờ là ____ mấy giờ?",
        options: [
      { option: "is", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: false },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "Hỏi giờ: What time is it?",
        category: "Present Simple",
    },
    {
        questionEn: "They are ____ the garden.",
        questionVi: "Họ đang ở ____ trong vườn.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "to", isCorrect: false }
    ],
        explanationVi: "'in the garden' (trong vườn).",
        category: "Other",
    },
    {
        questionEn: "He ____ play the guitar.",
        questionVi: "Anh ấy ____ có thể chơi đàn ghi-ta.",
        options: [
      { option: "can", isCorrect: true },
      { option: "cans", isCorrect: false },
      { option: "canning", isCorrect: false },
      { option: "to can", isCorrect: false }
    ],
        explanationVi: "Động từ khuyết thiếu 'can' + V nguyên thể.",
        category: "Modal Verbs (Can, Could, May, Might)",
    },
    {
        questionEn: "I ____ thirsty.",
        questionVi: "Tôi ____ khát.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: true },
      { option: "are", isCorrect: false },
      { option: "have", isCorrect: false }
    ],
        explanationVi: "Diễn tả cảm giác dùng to be, 'I' đi with 'am'.",
        category: "Present Simple",
    },
    {
        questionEn: "Do they ____ here?",
        questionVi: "Họ có ____ sống ở đây không?",
        options: [
      { option: "live", isCorrect: true },
      { option: "lives", isCorrect: false },
      { option: "living", isCorrect: false },
      { option: "lived", isCorrect: false }
    ],
        explanationVi: "Câu hỏi Do + S + V nguyên thể?",
        category: "Present Simple",
    },
    {
        questionEn: "This is ____ pen.",
        questionVi: "Đây là cái bút ____ của tôi.",
        options: [
      { option: "my", isCorrect: true },
      { option: "I", isCorrect: false },
      { option: "me", isCorrect: false },
      { option: "mine", isCorrect: false }
    ],
        explanationVi: "Tính từ sở hữu 'my' đứng trước danh từ.",
        category: "Possessive Adjectives",
    },
    {
        questionEn: "____ do you live?",
        questionVi: "Bạn sống ____ ở đâu?",
        options: [
      { option: "Where", isCorrect: true },
      { option: "What", isCorrect: false },
      { option: "Who", isCorrect: false },
      { option: "When", isCorrect: false }
    ],
        explanationVi: "Hỏi địa điểm dùng 'Where'.",
        category: "Present Simple",
    },
    {
        questionEn: "He is sitting ____ me.",
        questionVi: "Anh ấy đang ngồi ____ cạnh tôi.",
        options: [
      { option: "next to", isCorrect: true },
      { option: "next", isCorrect: false },
      { option: "between", isCorrect: false },
      { option: "in", isCorrect: false }
    ],
        explanationVi: "Giới từ 'next to' (bên cạnh).",
        category: "Other",
    },
    {
        questionEn: "My mother is a nurse. ____ is kind.",
        questionVi: "Mẹ tôi là một y tá. ____ rất tốt bụng.",
        options: [
      { option: "He", isCorrect: false },
      { option: "She", isCorrect: true },
      { option: "It", isCorrect: false },
      { option: "They", isCorrect: false }
    ],
        explanationVi: "Đại từ thay thế cho 'My mother' là 'She'.",
        category: "Other",
    },
    {
        questionEn: "There ____ many people in the room.",
        questionVi: "Có ____ nhiều người trong phòng.",
        options: [
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "'many people' là số nhiều, dùng 'are'.",
        category: "Present Simple",
    },
    {
        questionEn: "I ____ not like fast food.",
        questionVi: "Tôi ____ không thích đồ ăn nhanh.",
        options: [
      { option: "do", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false }
    ],
        explanationVi:
            "Phủ định hiện tại đơn with động từ thường, chủ ngữ 'I' dùng 'do not'.",
        category: "Present Simple",
    },
    {
        questionEn: "The sun ____ in the East.",
        questionVi: "Mặt trời ____ mọc ở đằng Đông.",
        options: [
      { option: "rise", isCorrect: false },
      { option: "rises", isCorrect: true },
      { option: "rising", isCorrect: false },
      { option: "rose", isCorrect: false }
    ],
        explanationVi:
            "Sự thật hiển nhiên: Mặt trời mọc ở đằng Đông, dùng thì hiện tại đơn.",
        category: "Present Simple",
    },
    {
        questionEn: "Can you ____ me?",
        questionVi: "Bạn có thể ____ tôi không?",
        options: [
      { option: "help", isCorrect: true },
      { option: "helps", isCorrect: false },
      { option: "helping", isCorrect: false },
      { option: "helped", isCorrect: false }
    ],
        explanationVi: "Sau 'Can' là động từ nguyên thể.",
        category: "Modal Verbs (Can, Could, May, Might)",
    },
    {
        questionEn: "We are ____ dinner.",
        questionVi: "Chúng tôi đang ____ ăn tối.",
        options: [
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "having", isCorrect: true },
      { option: "had", isCorrect: false }
    ],
        explanationVi: "Hiện tại tiếp diễn: We are having dinner.",
        category: "Present Continuous",
    },
    {
        questionEn: "____ is that man?",
        questionVi: "Người đàn ông đó ____ là ai?",
        options: [
      { option: "Who", isCorrect: true },
      { option: "What", isCorrect: false },
      { option: "Where", isCorrect: false },
      { option: "When", isCorrect: false }
    ],
        explanationVi: "Hỏi người dùng 'Who'.",
        category: "Present Simple",
    },
    {
        questionEn: "I go to work ____ 8 AM.",
        questionVi: "Tôi đi làm ____ vào lúc 8 giờ sáng.",
        options: [
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: true },
      { option: "to", isCorrect: false }
    ],
        explanationVi: "Giới từ chỉ giờ dùng 'at'.",
        category: "Other",
    },
    {
        questionEn: "She ____ got long hair.",
        questionVi: "Cô ấy ____ có mái tóc dài.",
        options: [
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'have/has got', 'She' dùng 'has'.",
        category: "Present Simple",
    },
    {
        questionEn: "The dog is sleeping ____ the table.",
        questionVi: "Con chó đang ngủ ____ ở dưới gầm bàn.",
        options: [
      { option: "under", isCorrect: true },
      { option: "in", isCorrect: false },
      { option: "on", isCorrect: false },
      { option: "between", isCorrect: false }
    ],
        explanationVi: "'under the table' (dưới gầm bàn).",
        category: "Other",
    },
    {
        questionEn: "How ____ rice do you want?",
        questionVi: "Bạn muốn ____ bao nhiêu gạo?",
        options: [
      { option: "much", isCorrect: true },
      { option: "many", isCorrect: false },
      { option: "some", isCorrect: false },
      { option: "any", isCorrect: false }
    ],
        explanationVi: "'Rice' là danh từ không đếm được, dùng 'How much'.",
        category: "Quantifiers",
    },
    {
        questionEn: "I ____ TV every evening.",
        questionVi: "Tôi ____ TV mỗi tối.",
        options: [
      { option: "watch", isCorrect: true },
      { option: "watches", isCorrect: false },
      { option: "watching", isCorrect: false },
      { option: "watched", isCorrect: false }
    ],
        explanationVi: "Thói quen hàng ngày, thì hiện tại đơn.",
        category: "Present Simple",
    },
    {
        questionEn: "This car is ____.",
        questionVi: "Chiếc xe này ____ màu xanh.",
        options: [
      { option: "blue", isCorrect: true },
      { option: "a blue", isCorrect: false },
      { option: "the blue", isCorrect: false },
      { option: "blues", isCorrect: false }
    ],
        explanationVi: "Tính từ chỉ màu sắc.",
        category: "Comparatives",
    },
    {
        questionEn: "____ cigarettes are bad for you.",
        questionVi: "____ Thuốc lá có hại cho bạn.",
        options: [
      { option: "The", isCorrect: false },
      { option: "A", isCorrect: false },
      { option: "An", isCorrect: false },
      { option: "-", isCorrect: true }
    ],
        explanationVi: "Danh từ số nhiều nói chung không cần mạo từ.",
        category: "Articles",
    },
    {
        questionEn: "He is ____ best student.",
        questionVi: "Anh ấy là học sinh ____ giỏi nhất.",
        options: [
      { option: "the", isCorrect: true },
      { option: "a", isCorrect: false },
      { option: "an", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi: "So sánh nhất dùng mạo từ 'the'.",
        category: "Superlatives",
    },
    {
        questionEn: "They ____ to the radio now.",
        questionVi: "Bây giờ họ ____ đang nghe đài.",
        options: [
      { option: "listen", isCorrect: false },
      { option: "listens", isCorrect: false },
      { option: "are listening", isCorrect: true },
      { option: "listening", isCorrect: false }
    ],
        explanationVi: "Dấu hiệu 'now' dùng thì hiện tại tiếp diễn.",
        category: "Present Continuous",
    },
    {
        questionEn: "My house is ____ the school.",
        questionVi: "Nhà của tôi ____ gần trường học.",
        options: [
      { option: "near", isCorrect: true },
      { option: "next", isCorrect: false },
      { option: "between", isCorrect: false },
      { option: "on", isCorrect: false }
    ],
        explanationVi: "Giới từ 'near' (gần).",
        category: "Other",
    },
    {
        questionEn: "I want ____ buy a new phone.",
        questionVi: "Tôi muốn ____ mua một chiếc điện thoại mới.",
        options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "in", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'want to V'.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "She ____ not at home yesterday.",
        questionVi: "Hôm qua cô ấy ____ không có ở nhà.",
        options: [
      { option: "was", isCorrect: true },
      { option: "were", isCorrect: false },
      { option: "is", isCorrect: false },
      { option: "are", isCorrect: false }
    ],
        explanationVi: "Quá khứ của to be with 'She' là 'was'.",
        category: "Past Simple",
    },
    {
        questionEn: "____ you speak English?",
        questionVi: "Bạn ____ có nói tiếng Anh không?",
        options: [
      { option: "Do", isCorrect: true },
      { option: "Does", isCorrect: false },
      { option: "Are", isCorrect: false },
      { option: "Is", isCorrect: false }
    ],
        explanationVi: "Câu hỏi khả năng/thói quen dùng 'Do'.",
        category: "Present Simple",
    },
    {
        questionEn: "The children ____ playing in the park.",
        questionVi: "Trẻ em ____ đang chơi trong công viên.",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "'The children' là số nhiều, dùng 'are'.",
        category: "Present Continuous",
    },
    {
        questionEn: "I often ____ my grandparents on Sundays.",
        questionVi: "Tôi thường ____ về thăm ông bà vào các ngày Chủ Nhật.",
        options: [
      { option: "visit", isCorrect: true },
      { option: "visits", isCorrect: false },
      { option: "visiting", isCorrect: false },
      { option: "visited", isCorrect: false }
    ],
        explanationVi: "Thói quen thường xuyên 'often', dùng hiện tại đơn.",
        category: "Present Simple",
    },
    {
        questionEn: "It is a ____ day.",
        questionVi: "Hôm nay là một ngày ____ đầy nắng.",
        options: [
      { option: "sun", isCorrect: false },
      { option: "sunny", isCorrect: true },
      { option: "sunshine", isCorrect: false },
      { option: "sunning", isCorrect: false }
    ],
        explanationVi: "Tính từ đứng trước danh từ: 'sunny day'.",
        category: "Comparatives",
    },
    {
        questionEn: "____ apple a day keeps the doctor away.",
        questionVi:
            "____ Ăn một quả táo mỗi ngày giúp bạn không phải gặp bác sĩ.",
        options: [
      { option: "A", isCorrect: false },
      { option: "An", isCorrect: true },
      { option: "The", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi: "'Apple' bắt đầu bằng nguyên âm, dùng 'An'.",
        category: "Articles",
    },
    {
        questionEn: "Where ____ your parents?",
        questionVi: "Bố mẹ bạn ____ ở đâu?",
        options: [
      { option: "is", isCorrect: false },
      { option: "am", isCorrect: false },
      { option: "are", isCorrect: true },
      { option: "be", isCorrect: false }
    ],
        explanationVi: "'Your parents' là số nhiều, dùng 'are'.",
        category: "Present Simple",
    },
    {
        questionEn: "He is ____ than me.",
        questionVi: "Anh ấy ____ cao hơn tôi.",
        options: [
      { option: "taller", isCorrect: true },
      { option: "tall", isCorrect: false },
      { option: "tallest", isCorrect: false },
      { option: "more tall", isCorrect: false }
    ],
        explanationVi: "So sánh hơn của tính từ ngắn 'tall' là 'taller'.",
        category: "Comparatives",
    },
    {
        questionEn: "Do you have ____ money?",
        questionVi: "Bạn có ____ tiền không?",
        options: [
      { option: "some", isCorrect: false },
      { option: "any", isCorrect: true },
      { option: "a", isCorrect: false },
      { option: "an", isCorrect: false }
    ],
        explanationVi: "Câu nghi vấn dùng 'any'.",
        category: "Quantifiers",
    },
    {
        questionEn: "I prefer tea ____ coffee.",
        questionVi: "Tôi thích trà ____ hơn cà phê.",
        options: [
      { option: "to", isCorrect: true },
      { option: "than", isCorrect: false },
      { option: "from", isCorrect: false },
      { option: "with", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'prefer ... to ...'.",
        category: "Other",
    },
    {
        questionEn: "She ____ works on Saturday.",
        questionVi: "Cô ấy ____ không bao giờ làm việc vào thứ Bảy.",
        options: [
      { option: "never", isCorrect: true },
      { option: "never doesn't", isCorrect: false },
      { option: "don't never", isCorrect: false },
      { option: "doesn't never", isCorrect: false }
    ],
        explanationVi: "Trạng từ tần suất 'never' đứng trước động từ thường.",
        category: "Present Simple",
    },
    {
        questionEn: "The film was ____.",
        questionVi: "Bộ phim ____ thật tẻ nhạt.",
        options: [
      { option: "bored", isCorrect: false },
      { option: "boring", isCorrect: true },
      { option: "bores", isCorrect: false },
      { option: "bore", isCorrect: false }
    ],
        explanationVi: "Tính từ đuôi -ing chỉ tính chất của sự vật/sự việc.",
        category: "Comparatives",
    },
    {
        questionEn: "I can't find my keys. I lost ____.",
        questionVi:
            "Tôi không thể tìm thấy chìa khóa của mình. Tôi đã làm mất ____ chúng rồi.",
        options: [
      { option: "they", isCorrect: false },
      { option: "their", isCorrect: false },
      { option: "them", isCorrect: true },
      { option: "it", isCorrect: false }
    ],
        explanationVi: "'Keys' số nhiều, tân ngữ là 'them'.",
        category: "Other",
    },
    {
        questionEn: "____ is the weather like?",
        questionVi: "Thời tiết ____ như thế nào?",
        options: [
      { option: "What", isCorrect: true },
      { option: "How", isCorrect: false },
      { option: "Why", isCorrect: false },
      { option: "Who", isCorrect: false }
    ],
        explanationVi: "Câu hỏi thời tiết: What is the weather like?",
        category: "Present Simple",
    },
    {
        questionEn: "We ____ dinner when he arrived.",
        questionVi: "Chúng tôi ____ đang ăn tối thì anh ấy đến.",
        options: [
      { option: "were having", isCorrect: true },
      { option: "had", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "are having", isCorrect: false }
    ],
        explanationVi:
            "Hành động đang xảy ra (quá khứ tiếp diễn) thì hành động khác xen vào.",
        category: "Past Continuous",
    },
    {
        questionEn: "They ____ arrived yet.",
        questionVi: "Họ ____ vẫn chưa đến.",
        options: [
      { option: "haven't", isCorrect: true },
      { option: "hasn't", isCorrect: false },
      { option: "didn't", isCorrect: false },
      { option: "don't", isCorrect: false }
    ],
        explanationVi: "Thì hiện tại hoàn thành with 'yet'.",
        category: "Present Perfect",
    },
    {
        questionEn: "I ____ this movie three times.",
        questionVi: "Tôi ____ bộ phim này ba lần rồi.",
        options: [
      { option: "see", isCorrect: false },
      { option: "saw", isCorrect: false },
      { option: "have seen", isCorrect: true },
      { option: "seeing", isCorrect: false }
    ],
        explanationVi:
            "Hành động lặp đi lặp lại tính đến thời điểm hiện tại sử dụng thì Hiện tại hoàn thành.",
        category: "Present Perfect",
    },
    {
        questionEn: "This is the ____ building in the city.",
        questionVi: "Đây là tòa nhà ____ nhất trong thành phố.",
        options: [
      { option: "oldest", isCorrect: true },
      { option: "older", isCorrect: false },
      { option: "old", isCorrect: false },
      { option: "more old", isCorrect: false }
    ],
        explanationVi: "So sánh nhất tính từ ngắn.",
        category: "Superlatives",
    },
    {
        questionEn: "I have known him ____ 2010.",
        questionVi: "Tôi đã biết anh ấy ____ từ năm 2010.",
        options: [
      { option: "since", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "in", isCorrect: false },
      { option: "at", isCorrect: false }
    ],
        explanationVi: "Mốc thời gian trong hiện tại hoàn thành dùng 'since'.",
        category: "Present Perfect",
    },
    {
        questionEn: "If it rains, I ____ at home.",
        questionVi: "Nếu trời mưa, tôi ____ sẽ ở nhà.",
        options: [
      { option: "will stay", isCorrect: true },
      { option: "stayed", isCorrect: false },
      { option: "would stay", isCorrect: false },
      { option: "stay", isCorrect: false }
    ],
        explanationVi: "Câu điều kiện loại 1: If + HTĐ, TLĐ.",
        category: "Conditional Type 1",
    },
    {
        questionEn: "He drives very ____.",
        questionVi: "Anh ấy lái xe rất ____.",
        options: [
      { option: "careful", isCorrect: false },
      { option: "carefully", isCorrect: true },
      { option: "care", isCorrect: false },
      { option: "caring", isCorrect: false }
    ],
        explanationVi: "Trạng từ bổ nghĩa cho động từ 'drives'.",
        category: "Adverbs",
    },
    {
        questionEn: "I ____ to London last year.",
        questionVi: "Tôi ____ đi London vào năm ngoái.",
        options: [
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: true },
      { option: "gone", isCorrect: false },
      { option: "going", isCorrect: false }
    ],
        explanationVi: "'last year' dùng thì quá khứ đơn.",
        category: "Past Simple",
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
        explanationVi: "Cấu trúc 'good at' (giỏi về).",
        category: "Other",
    },
    {
        questionEn: "____ you like a cup of tea?",
        questionVi: "Bạn ____ dùng một tách trà chứ?",
        options: [
      { option: "Do", isCorrect: false },
      { option: "Would", isCorrect: true },
      { option: "Are", isCorrect: false },
      { option: "Will", isCorrect: false }
    ],
        explanationVi: "Lời mời lịch sự 'Would you like...'.",
        category: "Modal Verbs (Can, Could, May, Might)",
    },
    {
        questionEn: "The baby is ____.",
        questionVi: "Em bé ____ đang khóc.",
        options: [
      { option: "crying", isCorrect: true },
      { option: "cry", isCorrect: false },
      { option: "cries", isCorrect: false },
      { option: "cried", isCorrect: false }
    ],
        explanationVi: "Hiện tại tiếp diễn: is crying.",
        category: "Present Continuous",
    },
    {
        questionEn: "I don't have ____ friends here.",
        questionVi: "Tôi không có ____ nhiều bạn ở đây.",
        options: [
      { option: "many", isCorrect: true },
      { option: "much", isCorrect: false },
      { option: "some", isCorrect: false },
      { option: "a", isCorrect: false }
    ],
        explanationVi: "'Friends' đếm được số nhiều, câu phủ định dùng 'many'.",
        category: "Quantifiers",
    },
    {
        questionEn: "He went to the shop ____ milk.",
        questionVi: "Anh ấy đã đến cửa hàng ____ mua sữa.",
        options: [
      { option: "to buy", isCorrect: true },
      { option: "for buy", isCorrect: false },
      { option: "buying", isCorrect: false },
      { option: "buy", isCorrect: false }
    ],
        explanationVi: "Chỉ mục đích: to + V.",
        category: "Infinitives (to V)",
    },
    {
        questionEn: "____ bag is this?",
        questionVi: "Cái túi này ____ của ai?",
        options: [
      { option: "Whose", isCorrect: true },
      { option: "Who", isCorrect: false },
      { option: "Whom", isCorrect: false },
      { option: "Who's", isCorrect: false }
    ],
        explanationVi: "Hỏi về sở hữu: Whose.",
        category: "Other",
    },
    {
        questionEn: "I am interested ____ music.",
        questionVi: "Tôi quan tâm ____ đến âm nhạc.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "with", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'interested in' (quan tâm đến).",
        category: "Other",
    },
    {
        questionEn: "That is ____ interesting book.",
        questionVi: "Đó là ____ một cuốn sách thú vị.",
        options: [
      { option: "an", isCorrect: true },
      { option: "a", isCorrect: false },
      { option: "the", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi: "'Interesting' bắt đầu bằng nguyên âm, dùng 'an'.",
        category: "Articles",
    },
    {
        questionEn: "They ____ football yesterday.",
        questionVi: "Họ ____ chơi bóng đá vào hôm qua.",
        options: [
      { option: "played", isCorrect: true },
      { option: "play", isCorrect: false },
      { option: "playing", isCorrect: false },
      { option: "plays", isCorrect: false }
    ],
        explanationVi: "'Yesterday' dùng quá khứ đơn.",
        category: "Past Simple",
    },
    {
        questionEn: "She runs ____ than me.",
        questionVi: "Cô ấy chạy ____ nhanh hơn tôi.",
        options: [
      { option: "faster", isCorrect: true },
      { option: "fast", isCorrect: false },
      { option: "fastest", isCorrect: false },
      { option: "more fast", isCorrect: false }
    ],
        explanationVi: "So sánh hơn của trạng từ/tính từ ngắn 'fast'.",
        category: "Comparatives",
    },
    {
        questionEn: "I ____ my homework already.",
        questionVi: "Tôi ____ đã làm xong bài tập về nhà rồi.",
        options: [
      { option: "have done", isCorrect: true },
      { option: "did", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "doing", isCorrect: false }
    ],
        explanationVi: "Hiện tại hoàn thành with 'already'.",
        category: "Present Perfect",
    },
    {
        questionEn: "____ go to the cinema tonight.",
        questionVi: "____ Hãy đi xem phim tối nay.",
        options: [
      { option: "Let's", isCorrect: true },
      { option: "How about", isCorrect: false },
      { option: "Why don't", isCorrect: false },
      { option: "Shall", isCorrect: false }
    ],
        explanationVi: "Lời rủ rê 'Let's + V'.",
        category: "Imperatives",
    },
    {
        questionEn: "He is ____ tired to work.",
        questionVi: "Anh ấy ____ quá mệt để làm việc.",
        options: [
      { option: "too", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "very", isCorrect: false },
      { option: "enough", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'too ... to' (quá ... để làm gì).",
        category: "Adverbs",
    },
    {
        questionEn: "This shirt is not big ____ for me.",
        questionVi: "Chiếc áo này không ____ đủ rộng đối với tôi.",
        options: [
      { option: "enough", isCorrect: true },
      { option: "too", isCorrect: false },
      { option: "so", isCorrect: false },
      { option: "very", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'adj + enough'.",
        category: "Adverbs",
    },
    {
        questionEn: "I saw him ____ the morning.",
        questionVi: "Tôi đã gặp anh ấy ____ vào buổi sáng.",
        options: [
      { option: "in", isCorrect: true },
      { option: "on", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "by", isCorrect: false }
    ],
        explanationVi: "Buổi trong ngày dùng 'in'.",
        category: "Other",
    },
    {
        questionEn: "____ Sunday, I stay home.",
        questionVi: "____ Vào Chủ Nhật, tôi ở nhà.",
        options: [
      { option: "On", isCorrect: true },
      { option: "In", isCorrect: false },
      { option: "At", isCorrect: false },
      { option: "By", isCorrect: false }
    ],
        explanationVi: "Thứ trong tuần dùng 'On'.",
        category: "Other",
    },
    {
        questionEn: "What are you ____?",
        questionVi: "Bạn đang ____ làm gì thế?",
        options: [
      { option: "doing", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "done", isCorrect: false }
    ],
        explanationVi: "Hiện tại tiếp diễn: What are you doing?",
        category: "Present Continuous",
    },
    {
        questionEn: "My sister is ____ than me.",
        questionVi: "Em gái tôi ____ trẻ hơn tôi.",
        options: [
      { option: "younger", isCorrect: true },
      { option: "young", isCorrect: false },
      { option: "youngest", isCorrect: false },
      { option: "more young", isCorrect: false }
    ],
        explanationVi: "So sánh hơn tính từ ngắn.",
        category: "Comparatives",
    },
    {
        questionEn: "We ____ to the beach next week.",
        questionVi: "Chúng tôi ____ sẽ đi biển vào tuần tới.",
        options: [
      { option: "are going", isCorrect: true },
      { option: "go", isCorrect: false },
      { option: "went", isCorrect: false },
      { option: "gone", isCorrect: false }
    ],
        explanationVi:
            "'Next week' dùng tương lai gần (be going to) hoặc HTTD diễn tả tương lai.",
        category: "Future Simple (Will)",
    },
    {
        questionEn: "He ____ up smoking last year.",
        questionVi: "Anh ấy ____ đã bỏ thuốc lá vào năm ngoái.",
        options: [
      { option: "gave", isCorrect: true },
      { option: "give", isCorrect: false },
      { option: "giving", isCorrect: false },
      { option: "given", isCorrect: false }
    ],
        explanationVi: "Cụm từ 'give up' (từ bỏ), quá khứ đơn.",
        category: "Past Simple",
    },
    {
        questionEn: "I look forward ____ you.",
        questionVi: "Tôi mong được ____ gặp bạn.",
        options: [
      { option: "to seeing", isCorrect: true },
      { option: "to see", isCorrect: false },
      { option: "seeing", isCorrect: false },
      { option: "see", isCorrect: false }
    ],
        explanationVi: "Cấu trúc 'look forward to V-ing'.",
        category: "Phrasal Verbs",
    },
    {
        questionEn: "This is the man ____ helped me.",
        questionVi: "Đây là người đàn ông ____ đã giúp đỡ tôi.",
        options: [
      { option: "who", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "whose", isCorrect: false }
    ],
        explanationVi: "Mệnh đề quan hệ chỉ người làm chủ ngữ dùng 'who'.",
        category: "Relative Clauses",
    },
    {
        questionEn: "I enjoy ____ books.",
        questionVi: "Tôi thích ____ việc đọc sách.",
        options: [
      { option: "reading", isCorrect: true },
      { option: "read", isCorrect: false },
      { option: "to read", isCorrect: false },
      { option: "reads", isCorrect: false }
    ],
        explanationVi: "Sau 'enjoy' là V-ing.",
        category: "Gerunds (V-ing)",
    },
    {
        questionEn: "It's ____ expensive car.",
        questionVi: "Đó là ____ một chiếc xe đắt tiền.",
        options: [
      { option: "an", isCorrect: true },
      { option: "a", isCorrect: false },
      { option: "the", isCorrect: false },
      { option: "-", isCorrect: false }
    ],
        explanationVi: "'Expensive' bắt đầu with nguyên âm.",
        category: "Comparatives",
    },
];

export default questions;
