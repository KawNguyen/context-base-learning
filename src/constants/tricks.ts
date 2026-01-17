export type TrickCategory =
    | "Adjectives"
    | "Adverbs"
    | "Nouns"
    | "Verbs"
    | "Pronouns"
    | "Conjunctions"
    | "Prepositions"
    | "Sentence Structure"
    | "Parallel Structure"
    | "Confused Words"
    | "Common Patterns";

export interface Trick {
    id: string;
    category: TrickCategory;
    title: string;
    explanationVi: string;
    rules?: { title: string; contentVi: string }[];
    signs?: { sign: string; explanationVi: string }[];
    examples: { en: string; vi: string }[];
}

export const tricks: Trick[] = [
    {
        id: "adj-suffixes",
        category: "Adjectives",
        title: "Dấu hiệu nhận biết Tính từ (Suffixes)",
        explanationVi: "Hầu hết các tính từ trong tiếng Anh kết thúc bằng các hậu tố đặc trưng.",
        signs: [
            { sign: "-able / -ible", explanationVi: "comfortable, capable, possible, flexible" },
            { sign: "-al", explanationVi: "natural, central, local, musical" },
            { sign: "-ful", explanationVi: "beautiful, helpful, useful, careful" },
            { sign: "-ic", explanationVi: "economic, specific, historic, basic" },
            { sign: "-ive", explanationVi: "active, creative, positive, massive" },
            { sign: "-less", explanationVi: "careless, harmless, sleepless, useless" },
            { sign: "-ous", explanationVi: "famous, dangerous, nervous, continuous" },
            { sign: "-y", explanationVi: "happy, sunny, windy, rainy" },
            { sign: "-ent / -ant", explanationVi: "different, important, independent" },
        ],
        examples: [
            { en: "She is a beautiful girl.", vi: "Cô ấy là một cô gái xinh đẹp." },
            { en: "This task is impossible.", vi: "Nhiệm vụ này là không thể." },
        ],
    },
    {
        id: "adj-positions",
        category: "Adjectives",
        title: "Vị trí của Tính từ",
        explanationVi: "Tính từ thường đứng ở các vị trí cố định để bổ nghĩa cho danh từ hoặc sau động từ nối.",
        rules: [
            { title: "Before Nouns", contentVi: "Đứng trước danh từ để bổ nghĩa cho danh từ đó (Adj + N)." },
            { title: "After Linking Verbs", contentVi: "Đứng sau động từ tobe hoặc các động từ nối như: become, get, look, feel, taste, smell, seem..." },
            { title: "In special structures", contentVi: "Make/Keep/Find + O + Adj (Giữ cho/Làm cho/Thấy cái gì đó như thế nào)." },
        ],
        examples: [
            { en: "He is a professional doctor.", vi: "Anh ấy là một bác sĩ chuyên nghiệp. (Sau Adj là N)" },
            { en: "She looks tired.", vi: "Cô ấy trông có vẻ mệt mỏi. (Sau Linking Verb)" },
            { en: "He made me happy.", vi: "Anh ấy làm tôi hạnh phúc. (Make + O + Adj)" },
        ],
    },
    {
        id: "adj-order",
        category: "Adjectives",
        title: "Thứ tự của Tính từ (OSASCOMP)",
        explanationVi: "Khi có nhiều tính từ đứng trước một danh từ, chúng phải tuân theo một thứ tự nhất định.",
        rules: [
            { title: "Opinion", contentVi: "Quan điểm (beautiful, lovely, nice)." },
            { title: "Size", contentVi: "Kích thước (big, small, huge)." },
            { title: "Age", contentVi: "Độ tuổi (new, old, ancient)." },
            { title: "Shape", contentVi: "Hình dạng (round, square, flat)." },
            { title: "Color", contentVi: "Màu sắc (red, blue, black)." },
            { title: "Origin", contentVi: "Nguồn gốc (Vietnamese, French, American)." },
            { title: "Material", contentVi: "Chất liệu (wooden, plastic, silk)." },
            { title: "Purpose", contentVi: "Mục đích (sleeping bag, writing desk)." },
        ],
        examples: [
            { en: "A lovely large new round black French wooden writing desk.", vi: "Một chiếc bàn viết bằng gỗ của Pháp màu đen, tròn, mới, lớn, rất đẹp." },
            { en: "She bought a beautiful small Italian leather bag.", vi: "Cô ấy đã mua một chiếc túi da Ý nhỏ nhắn và xinh xắn." },
        ],
    },
    {
        id: "adv-suffixes",
        category: "Adverbs",
        title: "Dấu hiệu nhận biết Trạng từ",
        explanationVi: "Trạng từ thường được hình thành bằng cách thêm đuôi -ly vào tính từ.",
        signs: [
            { sign: "Adj + -ly", explanationVi: "quickly, beautifully, carefully, slowly" },
            { sign: "Irregular Adv", explanationVi: "hard, fast, early, late, well (tính từ là good)" },
            { sign: "-ly but Adj", explanationVi: "friendly, lovely, lonely, costly, silly (Đây là tính từ, không phải trạng từ!)" },
        ],
        examples: [
            { en: "He runs quickly.", vi: "Anh ấy chạy nhanh." },
            { en: "She sings beautifully.", vi: "Cô ấy hát hay." },
            { en: "He works hard.", vi: "Anh ấy làm việc chăm chỉ. (Hard vừa là Adj vừa là Adv)" },
        ],
    },
    {
        id: "adv-positions",
        category: "Adverbs",
        title: "Vị trí của Trạng từ",
        explanationVi: "Trạng từ có vị trí linh hoạt hơn tính từ, thường bổ nghĩa cho động từ, tính từ hoặc trạng từ khác.",
        rules: [
            { title: "Before/After Verbs", contentVi: "Bổ nghĩa cho động từ thường (V + Adv hoặc Adv + V)." },
            { title: "Before Adjectives", contentVi: "Bổ nghĩa cho tính từ (Adv + Adj)." },
            { title: "Before Adverbs", contentVi: "Bổ nghĩa cho trạng từ khác (Adv + Adv)." },
            { title: "Sentence Adverbs", contentVi: "Đứng ở đầu câu và ngăn cách bằng dấu phẩy để bổ nghĩa cho cả câu." },
        ],
        examples: [
            { en: "She speaks English fluently.", vi: "Cô ấy nói tiếng Anh lưu loát. (Bổ nghĩa cho Động từ)" },
            { en: "It is extremely cold today.", vi: "Hôm nay trời cực kỳ lạnh. (Bổ nghĩa cho Tính từ)" },
            { en: "Surprisingly, he passed the exam.", vi: "Thật ngạc nhiên, anh ấy đã đậu kỳ thi. (Bổ nghĩa cho cả câu)" },
        ],
    },
    {
        id: "noun-suffixes",
        category: "Nouns",
        title: "Dấu hiệu nhận biết Danh từ (Suffixes)",
        explanationVi: "Danh từ thường có các hậu tố đặc trưng giúp phân biệt với các từ loại khác.",
        signs: [
            { sign: "-tion / -sion", explanationVi: "information, decision, education, vision" },
            { sign: "-ment", explanationVi: "agreement, development, movement, payment" },
            { sign: "-ty / -ity", explanationVi: "ability, quality, city, activity" },
            { sign: "-ness", explanationVi: "happiness, kindness, weakness, darkness" },
            { sign: "-ance / -ence", explanationVi: "importance, difference, maintenance" },
            { sign: "-ship", explanationVi: "friendship, membership, leadership" },
            { sign: "-ism", explanationVi: "optimism, criticism, tourism" },
            { sign: "-ist / -er / -or", explanationVi: "artist, teacher, doctor (Chỉ người)" },
        ],
        examples: [
            { en: "The development of technology is fast.", vi: "Sự phát triển của công nghệ rất nhanh." },
            { en: "She has the ability to swim.", vi: "Cô ấy có khả năng bơi lội." },
        ],
    },
    {
        id: "noun-plurals",
        category: "Nouns",
        title: "Danh từ số nhiều bất quy tắc",
        explanationVi: "Nhiều danh từ không thêm -s hay -es khi chuyển sang số nhiều.",
        rules: [
            { title: "Vowel Change", contentVi: "Thay đổi nguyên âm bên trong (man -> men, tooth -> teeth, foot -> feet, goose -> geese)." },
            { title: "Different Ending", contentVi: "Thay đổi hẳn phần đuôi (child -> children, person -> people, ox -> oxen)." },
            { title: "Unchanged", contentVi: "Giữ nguyên hình thức (sheep -> sheep, deer -> deer, fish -> fish)." },
            { title: "-is to -es", contentVi: "Thay đổi đuôi -is thành -es (analysis -> analyses, crisis -> crises)." },
        ],
        examples: [
            { en: "Three children are playing in the park.", vi: "Ba đứa trẻ đang chơi trong công viên." },
            { en: "The research involves heavy data analysis.", vi: "Nghiên cứu này bao gồm việc phân tích dữ liệu nặng nề." },
        ],
    },
    {
        id: "verb-suffixes",
        category: "Verbs",
        title: "Dấu hiệu nhận biết Động từ (Suffixes)",
        explanationVi: "Một số động từ được hình thành từ danh từ hoặc tính từ thông qua các hậu tố.",
        signs: [
            { sign: "-ize / -ise", explanationVi: "organize, realize, modernize, industrialize" },
            { sign: "-en", explanationVi: "shorten, widen, brighten, sharpen" },
            { sign: "-ate", explanationVi: "create, participate, graduate, activate" },
            { sign: "-fy / -ify", explanationVi: "identify, clarify, simplify, satisfy" },
        ],
        examples: [
            { en: "We need to simplify the process.", vi: "Chúng ta cần đơn giản hóa quy trình." },
            { en: "They want to modernize the system.", vi: "Họ muốn hiện đại hóa hệ thống." },
        ],
    },
    {
        id: "verb-ing-to",
        category: "Verbs",
        title: "Gerund (V-ing) vs Infinitive (To V)",
        explanationVi: "Một số động từ theo sau bởi V-ing, một số thì To V, và một số thì đổi nghĩa.",
        rules: [
            { title: "Gerund After Preps", contentVi: "Luôn dùng V-ing sau giới từ (interested in, base on, looking forward to)." },
            { title: "Infinitive of Purpose", contentVi: "Dùng To V để chỉ mục đích (I went to the store to buy milk)." },
            { title: "Meaning Change", contentVi: "Remember to V (Nhớ phải làm) vs Remember V-ing (Nhớ đã làm)." },
            { title: "Meaning Change", contentVi: "Stop to V (Dừng lại để làm gì) vs Stop V-ing (Thôi không làm gì nữa)." },
        ],
        examples: [
            { en: "I stopped smoking.", vi: "Tôi đã bỏ thuốc lá. (Stop V-ing)" },
            { en: "I stopped to smoke.", vi: "Tôi dừng lại để hút thuốc. (Stop to V)" },
            { en: "I look forward to meeting you.", vi: "Tôi mong chờ được gặp bạn. (After prep 'to')" },
        ],
    },
    {
        id: "conjunctions-types",
        category: "Conjunctions",
        title: "Các loại Liên từ phổ biến",
        explanationVi: "Liên từ dùng để kết nối các từ, cụm từ hoặc mệnh đề một cách mạch lạc.",
        rules: [
            { title: "Coordinating Conjunctions", contentVi: "FANBOYS: For, And, Nor, But, Or, Yet, So (Nối các thành phần tương đương)." },
            { title: "Subordinating Conjunctions", contentVi: "Because, although, since, while, if... (Nối mệnh đề phụ vào mệnh đề chính)." },
            { title: "Subordinating vs Preposition", contentVi: "Because/Although + Clause vs. Because of/Despite + N/V-ing (Lưu ý sự khác biệt về cấu trúc theo sau)." },
            { title: "Correlative Conjunctions", contentVi: "Both...and, Either...or, Neither...nor, Not only...but also." },
        ],
        examples: [
            { en: "Although it rained, we went out.", vi: "Mặc dù trời mưa, chúng tôi vẫn đi chơi. (+ Clause)" },
            { en: "Despite the rain, we went out.", vi: "Mặc dù trời mưa, chúng tôi vẫn đi chơi. (+ Noun)" },
            { en: "Not only is she smart but also kind.", vi: "Cô ấy không những thông minh mà còn tốt bụng." },
        ],
    },
    {
        id: "conjunctions-transitions",
        category: "Conjunctions",
        title: "Từ nối (Transitions) mạnh mẽ",
        explanationVi: "Các trạng từ liên kết giúp kết nối hai câu độc lập.",
        rules: [
            { title: "Contrast", contentVi: "However, Nevertheless, On the other hand (Tuy nhiên, mặc dù vậy)." },
            { title: "Result", contentVi: "Therefore, Consequently, As a result, Thus (Vì vậy, kết quả là)." },
            { title: "Addition", contentVi: "Moreover, Furthermore, In addition (Hơn nữa, ngoài ra)." },
        ],
        examples: [
            { en: "It was raining. However, we went out.", vi: "Trời đang mưa. Tuy nhiên, chúng tôi vẫn đi chơi." },
            { en: "She is smart; moreover, she is hardworking.", vi: "Cô ấy thông minh; hơn nữa, cô ấy còn chăm chỉ." },
        ],
    },
    {
        id: "prepositions-time",
        category: "Prepositions",
        title: "Giới từ chỉ thời gian (In, On, At)",
        explanationVi: "Cách phân biệt In, On, At khi chỉ thời gian một cách chính xác.",
        signs: [
            { sign: "At", explanationVi: "Thời điểm cụ thể (at 7am, at noon, at night, at Christmas)." },
            { sign: "On", explanationVi: "Ngày trong tuần, ngày tháng (on Monday, on October 10th)." },
            { sign: "In", explanationVi: "Tháng, năm, mùa, thế kỷ, buổi trong ngày (in October, in 2024, in the morning)." },
        ],
        examples: [
            { en: "I will see you at 8 o'clock.", vi: "Tôi sẽ gặp bạn lúc 8 giờ." },
            { en: "The meeting is on Friday.", vi: "Cuộc họp diễn ra vào thứ Sáu." },
            { en: "I was born in 1995.", vi: "Tôi sinh năm 1995." },
        ],
    },
    {
        id: "prepositions-place",
        category: "Prepositions",
        title: "Giới từ chỉ nơi chốn (In, On, At)",
        explanationVi: "Cách phân biệt In, On, At khi chỉ địa điểm.",
        signs: [
            { sign: "At", explanationVi: "Địa điểm cụ thể, một điểm dừng (at the bus stop, at home, at the airport)." },
            { sign: "On", explanationVi: "Trên bề mặt, số tầng (on the table, on the 5th floor, on the street)." },
            { sign: "In", explanationVi: "Bên trong một không gian, thành phố, quốc gia (in the room, in Hanoi, in Vietnam)." },
        ],
        examples: [
            { en: "He is at the office.", vi: "Anh ấy đang ở văn phòng." },
            { en: "The book is on the desk.", vi: "Cuốn sách nằm trên bàn." },
            { en: "I live in a small apartment.", vi: "Tôi sống trong một căn hộ nhỏ." },
        ],
    },
    {
        id: "pronouns-traps",
        category: "Pronouns",
        title: "Các lỗi Đại từ thường gặp",
        explanationVi: "Cách sử dụng đúng đại từ làm chủ ngữ, tân ngữ và sở hữu.",
        rules: [
            { title: "Subject vs Object", contentVi: "I/He/She (Chủ ngữ) vs Me/Him/Her (Tân ngữ - đứng sau động từ/giới từ)." },
            { title: "Possessive Adj vs Pronoun", contentVi: "My/His/Her + Noun (Tính từ sở hữu) vs Mine/His/Hers (Đại từ sở hữu - không có Noun theo sau)." },
            { title: "Reflexive Pronouns", contentVi: "Myself, himself... (Đại từ phản thân) - dùng khi chủ ngữ và tân ngữ là một." },
        ],
        examples: [
            { en: "She finished the report by herself.", vi: "Cô ấy tự mình hoàn thành bản báo cáo." },
            { en: "This is my pen, and that one is yours.", vi: "Đây là bút của tôi, còn cái kia là của bạn (yours = your pen)." },
        ],
    },
    {
        id: "pronouns-relative",
        category: "Pronouns",
        title: "Đại từ Quan hệ (Relative Pronouns)",
        explanationVi: "Dùng để nối các mệnh đề và thay thế cho danh từ đứng trước.",
        rules: [
            { title: "Who", contentVi: "Thay cho người, làm chủ ngữ (The girl who is sitting there)." },
            { title: "Whom", contentVi: "Thay cho người, làm tân ngữ (The man whom I met yesterday)." },
            { title: "Which", contentVi: "Thay cho vật, làm chủ ngữ hoặc tân ngữ (The car which he bought)." },
            { title: "Whose", contentVi: "Chỉ sự sở hữu cho cả người và vật (The boy whose father is a doctor)." },
            { title: "That", contentVi: "Có thể thay cho Who, Whom, Which trong mệnh đề xác định." },
        ],
        examples: [
            { en: "The man who is standing there is my brother.", vi: "Người đàn ông đang đứng đằng kia là anh trai tôi." },
            { en: "I saw the house whose roof was damaged.", vi: "Tôi thấy ngôi nhà có mái bị hỏng." },
        ],
    },
    {
        id: "parallel-structure-basic",
        category: "Parallel Structure",
        title: "Cấu trúc Song hành (Parallelism)",
        explanationVi: "Dùng các hình thức ngữ pháp giống nhau cho các thành phần có cùng chức năng trong câu.",
        rules: [
            { title: "In Lists", contentVi: "Khi liệt kê, các từ phải cùng loại (V-ing, V-ing, and V-ing hoặc N, N, and N)." },
            { title: "With Conjunctions", contentVi: "Các từ nối như 'and', 'or', 'but' yêu cầu sự tương đồng về cấu trúc ở hai vế." },
        ],
        examples: [
            { en: "I like swimming, hiking, and reading.", vi: "Tôi thích bơi lội, đi bộ đường dài và đọc sách. (Đúng: cùng đuôi -ing)" },
            { en: "He is smart, helpful, and kind.", vi: "Anh ấy thông minh, hay giúp đỡ và tốt bụng. (Đúng: cùng là Tính từ)" },
        ],
    },
    {
        id: "confused-words-1",
        category: "Confused Words",
        title: "Cặp từ dễ gây nhầm lẫn (Phần 1)",
        explanationVi: "Phân biệt các cặp từ có cách viết hoặc phát âm gần giống nhau nhưng nghĩa khác nhau.",
        signs: [
            { sign: "Affect vs Effect", explanationVi: "Affect (Verb): tác động; Effect (Noun): kết quả/ảnh hưởng." },
            { sign: "Than vs Then", explanationVi: "Than: dùng trong so sánh; Then: chỉ thời gian/kết quả." },
            { sign: "Its vs It's", explanationVi: "Its: sở hữu của 'it'; It's: viết tắt của 'it is' hoặc 'it has'." },
        ],
        examples: [
            { en: "The rain affected our plans.", vi: "Cơn mưa đã tác động đến kế hoạch của chúng tôi." },
            { en: "The effect of the medicine was fast.", vi: "Tác dụng của thuốc rất nhanh." },
            { en: "I am taller than him.", vi: "Tôi cao hơn anh ấy." },
        ],
    },
    {
        id: "confused-words-2",
        category: "Confused Words",
        title: "Cặp từ dễ gây nhầm lẫn (Phần 2)",
        explanationVi: "Tiếp tục phân biệt các cặp từ thông dụng hay bị dùng sai.",
        signs: [
            { sign: "Fewer vs Less", explanationVi: "Fewer: dùng cho danh từ đếm được; Less: dùng cho danh từ không đếm được." },
            { sign: "Advice vs Advise", explanationVi: "Advice (Noun): lời khuyên; Advise (Verb): khuyên bảo." },
            { sign: "Lose vs Loose", explanationVi: "Lose (Verb): làm mất/thất bại; Loose (Adj): lỏng lẻo/rộng." },
        ],
        examples: [
            { en: "There are fewer students today.", vi: "Hôm nay có ít học sinh hơn." },
            { en: "I have less money than before.", vi: "Tôi có ít tiền hơn trước đây." },
            { en: "Please advise me on this matter.", vi: "Vui lòng cho tôi lời khuyên về vấn đề này." },
        ],
    },
    {
        id: "spelling-doubling",
        category: "Common Patterns",
        title: "Quy tắc gấp đôi phụ âm",
        explanationVi: "Khi nào cần gấp đôi phụ âm cuối trước khi thêm hậu tố (như -ing, -ed).",
        rules: [
            { title: "CVC Rule", contentVi: "Từ có 1 âm tiết, kết thúc bằng Phụ âm - Nguyên âm - Phụ âm (CVC) -> Gấp đôi phụ âm cuối." },
            { title: "Stressed Syllable", contentVi: "Từ có nhiều âm tiết, nếu trọng âm rơi vào âm tiết cuối kết thúc bằng CVC -> Gấp đôi phụ âm cuối." },
        ],
        examples: [
            { en: "Run -> Running", vi: "Chạy (Gấp đôi n vì là CVC 1 âm tiết)" },
            { en: "Begin -> Beginning", vi: "Bắt đầu (Gấp đôi n vì trọng âm rơi vào âm tiết cuối -gin)" },
            { en: "Visit -> Visiting", vi: "Thăm (Không gấp đôi vì trọng âm rơi vào âm tiết đầu vi-)" },
        ],
    },
    {
        id: "common-structures",
        category: "Sentence Structure",
        title: "Cấu trúc câu quan trọng",
        explanationVi: "Các cấu trúc ngữ pháp thông dụng giúp câu văn trở nên chuyên nghiệp hơn.",
        rules: [
            { title: "Too... to", contentVi: "S + be + too + adj + (for someone) + to-V (Quá... để làm gì)." },
            { title: "Enough", contentVi: "S + be + adj + enough + (for someone) + to-V (Đủ... để làm gì)." },
            { title: "So... that", contentVi: "S + be + so + adj + that + clause (Quá... đến nỗi mà)." },
            { title: "Such... that", contentVi: "S + V + such + (a/an) + adj + N + that + clause (Quá... đến nỗi mà)." },
            { title: "Used to", contentVi: "S + used to + V (Đã từng làm gì - thói quen trong quá khứ)." },
            { title: "Be/Get used to", contentVi: "S + be/get used to + V-ing (Quen với việc gì ở hiện tại)." },
        ],
        examples: [
            { en: "The box is too heavy to carry.", vi: "Cái hộp quá nặng để bê đi." },
            { en: "She is tall enough to reach the shelf.", vi: "Cô ấy đủ cao để chạm tới cái giá." },
            { en: "It was such a hot day that we stayed inside.", vi: "Trời nóng đến nỗi chúng tôi ở trong nhà." },
        ],
    },
    {
        id: "structure-inversion",
        category: "Sentence Structure",
        title: "Cấu trúc Đảo ngữ (Inversion)",
        explanationVi: "Đảo trợ động từ lên trước chủ ngữ để nhấn mạnh.",
        rules: [
            { title: "Negative Adverbs", contentVi: "Đảo ngữ sau các trạng từ phủ định (Never, Seldom, Rarely, Hardly...)." },
            { title: "Negative Expressions", contentVi: "Only when, Only after, Under no circumstances." },
            { title: "No sooner", contentVi: "No sooner + had + S + V3 + than + Clause." },
        ],
        examples: [
            { en: "Never have I seen such a beautiful place.", vi: "Chưa bao giờ tôi thấy một nơi đẹp đến thế." },
            { en: "Only when she left did I realize the truth.", vi: "Chỉ khi cô ấy rời đi tôi mới nhận ra sự thật." },
            { en: "No sooner had they arrived than the rain started.", vi: "Họ vừa mới đến thì trời bắt đầu mưa." },
        ],
    },
    {
        id: "sv-agreement",
        category: "Common Patterns",
        title: "Hòa hợp Chủ ngữ - Động từ (S-V Agreement)",
        explanationVi: "Quy tắc chia động từ phù hợp với chủ ngữ để đảm bảo tính chính xác.",
        rules: [
            { title: "Each/Every", contentVi: "Each/Every/Everyone/Something... luôn đi với động từ số ít." },
            { title: "Neither/Either", contentVi: "Neither A nor B / Either A or B -> Động từ chia theo B (chủ ngữ gần nhất)." },
            { title: "Along with/As well as", contentVi: "S1 along with/as well as S2 -> Động từ chia theo S1." },
            { title: "A number of vs The number of", contentVi: "A number of + N(plural) + V(plural) vs The number of + N(plural) + V(singular)." },
        ],
        examples: [
            { en: "Everyone has a secret.", vi: "Mọi người đều có một bí mật." },
            { en: "A number of students are absent today.", vi: "Nhiều học sinh vắng mặt hôm nay." },
            { en: "The number of students is 50.", vi: "Sĩ số học sinh là 50." },
        ],
    },
];
