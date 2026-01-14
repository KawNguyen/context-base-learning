import { Question } from "../types";

export const questions: Question[] = [
  {
    id: "C2-0001",
    questionEn: "Had it not been for the alarm, I ____ slept.",
    questionVi:
      "Nếu không nhờ có tiếng chuông báo thức, tôi ____ đã ngủ quên rồi.",
    options: [
      { option: "would have", isCorrect: true },
      { option: "would", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "will have", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ câu điều kiện loại 3 (Had it not been for).",
    category: "Other",
  },
  {
    id: "C2-0002",
    questionEn: "So great ____ the demand that we sold out.",
    questionVi: "Nhu cầu ____ lớn đến nỗi chúng tôi đã bán sạch hàng.",
    options: [
      { option: "was", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với So + adj.",
    category: "Other",
  },
  {
    id: "C2-0003",
    questionEn: "Such ____ the noise that I couldn't hear.",
    questionVi: "Tiếng ồn ____ lớn đến nỗi tôi không thể nghe thấy gì cả.",
    options: [
      { option: "was", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Such + be + N.",
    category: "Other",
  },
  {
    id: "C2-0004",
    questionEn: "Rarely ____ visited by such a dignitary.",
    questionVi: "Hiếm khi ____ chúng ta được một vị chức sắc như vậy đến thăm.",
    options: [
      { option: "have we been", isCorrect: true },
      { option: "we have been", isCorrect: false },
      { option: "did we be", isCorrect: false },
      { option: "we were", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với Rarely (passive).",
    category: "Other",
  },
  {
    id: "C2-0005",
    questionEn: "Not for a moment ____ I suspect him.",
    questionVi: "Chưa một giây phút nào ____ tôi nghi ngờ anh ta.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "have", isCorrect: false },
      { option: "am", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ Not for a moment.",
    category: "Other",
  },
  {
    id: "C2-0006",
    questionEn: "Only when ____ the report did I understand.",
    questionVi: "Chỉ khi ____ đọc xong báo cáo, tôi mới hiểu ra vấn đề.",
    options: [
      { option: "I had read", isCorrect: true },
      { option: "I read", isCorrect: false },
      { option: "did I read", isCorrect: false },
      { option: "had I read", isCorrect: false },
    ],
    explanationVi: "Only when + clause (normal order) + auxiliary + S + V.",
    category: "Other",
  },
  {
    id: "C2-0007",
    questionEn: "____ I to accept the offer, I would move.",
    questionVi:
      "Nếu ____ tôi chấp nhận lời đề nghị đó, tôi sẽ chuyển đi nơi khác.",
    options: [
      { option: "Were", isCorrect: true },
      { option: "Was", isCorrect: false },
      { option: "If", isCorrect: false },
      { option: "Had", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ điều kiện loại 2: Were + S + to V.",
    category: "Other",
  },
  {
    id: "C2-0008",
    questionEn: "Should you ____ change your mind, let me know.",
    questionVi: "Nếu bạn ____ có thay đổi ý định, hãy cho tôi biết nhé.",
    options: [
      { option: "happen to", isCorrect: true },
      { option: "happened to", isCorrect: false },
      { option: "happens to", isCorrect: false },
      { option: "happening to", isCorrect: false },
    ],
    explanationVi: "Should you happen to V.",
    category: "Should / Ought to",
  },
  {
    id: "C2-0009",
    questionEn: "If I ____ to have known, I would have acted.",
    questionVi: "Nếu ____ tôi mà biết được chuyện đó, tôi đã hành động rồi.",
    options: [
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: true },
      { option: "am", isCorrect: false },
      { option: "had", isCorrect: false },
    ],
    explanationVi: "If I were to have known (hypothetical past).",
    category: "First Conditional",
  },
  {
    id: "C2-0010",
    questionEn: "Suppose he ____ you, what would you say?",
    questionVi: "Giả sử anh ta ____ hỏi bạn, bạn sẽ nói gì?",
    options: [
      { option: "asking", isCorrect: false },
      { option: "asked", isCorrect: true },
      { option: "ask", isCorrect: false },
      { option: "asks", isCorrect: false },
    ],
    explanationVi: "Suppose (that) he asked (hypothetical).",
    category: "First Conditional",
  },
  {
    id: "C2-0011",
    questionEn: "It is essential that he ____ immediately.",
    questionVi:
      "Việc anh ấy ____ phải được thông báo ngay lập tức là rất quan trọng.",
    options: [
      { option: "be informed", isCorrect: true },
      { option: "is informed", isCorrect: false },
      { option: "was informed", isCorrect: false },
      { option: "informed", isCorrect: false },
    ],
    explanationVi: "Subjunctive passive: be informed.",
    category: "Other",
  },
  {
    id: "C2-0012",
    questionEn: "I proposed that the meeting ____ postponed.",
    questionVi: "Tôi đề nghị rằng cuộc họp ____ cần được hoãn lại.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi: "Subjunctive passive.",
    category: "Other",
  },
  {
    id: "C2-0013",
    questionEn: "The building is reported ____ destroyed.",
    questionVi: "Tòa nhà được báo cáo là ____ đã bị phá hủy.",
    options: [
      { option: "to have been", isCorrect: true },
      { option: "to be", isCorrect: false },
      { option: "having been", isCorrect: false },
      { option: "being", isCorrect: false },
    ],
    explanationVi: "Passive infinitive perfect: to have been V3.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "C2-0014",
    questionEn: "He is said ____ working on a new book.",
    questionVi:
      "Người ta nói rằng anh ấy ____ đang thực hiện một cuốn sách mới.",
    options: [
      { option: "to be", isCorrect: true },
      { option: "to have been", isCorrect: false },
      { option: "being", isCorrect: false },
      { option: "having been", isCorrect: false },
    ],
    explanationVi: "Passive infinitive continuous.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "C2-0015",
    questionEn: "She is alleged ____ the money.",
    questionVi: "Cô ấy ____ bị cáo buộc là đã lấy trộm số tiền đó.",
    options: [
      { option: "to have stolen", isCorrect: true },
      { option: "staling", isCorrect: false },
      { option: "stolen", isCorrect: false },
      { option: "steal", isCorrect: false },
    ],
    explanationVi: "Passive infinitive perfect.",
    category: "Passive Voice (Present Simple)",
  },
  {
    id: "C2-0016",
    questionEn: "There is no ____ what will happen.",
    questionVi: "Không thể ____ biết được chuyện gì sẽ xảy ra.",
    options: [
      { option: "knowing", isCorrect: true },
      { option: "knowledge", isCorrect: false },
      { option: "know", isCorrect: false },
      { option: "known", isCorrect: false },
    ],
    explanationVi: "There is no knowing.",
    category: "Other",
  },
  {
    id: "C2-0017",
    questionEn: "It goes without ____ that health is wealth.",
    questionVi: "Không cần ____ phải nói cũng biết sức khỏe là vốn quý nhất.",
    options: [
      { option: "saying", isCorrect: true },
      { option: "say", isCorrect: false },
      { option: "said", isCorrect: false },
      { option: "to say", isCorrect: false },
    ],
    explanationVi: "It goes without saying.",
    category: "Other",
  },
  {
    id: "C2-0018",
    questionEn: "I can't help but ____.",
    questionVi: "Tôi không thể ____ không thắc mắc được.",
    options: [
      { option: "wonder", isCorrect: true },
      { option: "wondering", isCorrect: false },
      { option: "to wonder", isCorrect: false },
      { option: "wondered", isCorrect: false },
    ],
    explanationVi: "Can't help but + V (nguyên thể).",
    category: "Other",
  },
  {
    id: "C2-0019",
    questionEn: "I would rather you ____ yesterday.",
    questionVi: "Tôi muốn là bạn ____ đã không gọi cho tôi vào ngày hôm qua.",
    options: [
      { option: "hadn't called", isCorrect: true },
      { option: "didn't call", isCorrect: false },
      { option: "not call", isCorrect: false },
      { option: "don't call", isCorrect: false },
    ],
    explanationVi: "Would rather + S + QKHT (trái với quá khứ).",
    category: "Other",
  },
  {
    id: "C2-0020",
    questionEn: "It is time you ____ home.",
    questionVi: "Đã đến lúc bạn ____ phải về nhà rồi.",
    options: [
      { option: "went", isCorrect: true },
      { option: "go", isCorrect: false },
      { option: "gone", isCorrect: false },
      { option: "going", isCorrect: false },
    ],
    explanationVi: "It is time + past subjunctive.",
    category: "Other",
  },
  {
    id: "C2-0021",
    questionEn: "I prefer ____ rather than watch TV.",
    questionVi: "Tôi thích ____ đọc sách hơn là xem TV.",
    options: [
      { option: "to read", isCorrect: true },
      { option: "reading", isCorrect: false },
      { option: "read", isCorrect: false },
      { option: "reads", isCorrect: false },
    ],
    explanationVi: "Prefer to V rather than V.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0022",
    questionEn: "He objects to ____ like a child.",
    questionVi: "Anh ấy phản đối ____ việc bị đối xử như một đứa trẻ.",
    options: [
      { option: "being treated", isCorrect: true },
      { option: "treat", isCorrect: false },
      { option: "treating", isCorrect: false },
      { option: "be treated", isCorrect: false },
    ],
    explanationVi: "Object to + V-ing (passive).",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0023",
    questionEn: "I look forward to ____ acceptable.",
    questionVi: "Tôi mong ____ sẽ được xem xét là người phù hợp.",
    options: [
      { option: "being considered", isCorrect: true },
      { option: "consider", isCorrect: false },
      { option: "considering", isCorrect: false },
      { option: "be considered", isCorrect: false },
    ],
    explanationVi: "Look forward to being V3.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0024",
    questionEn: "Despite ____ elected, he resigned.",
    questionVi: "Mặc dù ____ đã đắc cử, ông ấy vẫn từ chức.",
    options: [
      { option: "having been", isCorrect: true },
      { option: "being", isCorrect: false },
      { option: "been", isCorrect: false },
      { option: "have been", isCorrect: false },
    ],
    explanationVi: "Perfect participle passive: Having been V3.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0025",
    questionEn: "____ warned, he persisted.",
    questionVi:
      "Mặc dù ____ đã được cảnh báo, anh ta vẫn khăng khăng làm theo ý mình.",
    options: [
      { option: "Having been", isCorrect: true },
      { option: "Being", isCorrect: false },
      { option: "Been", isCorrect: false },
      { option: "Have been", isCorrect: false },
    ],
    explanationVi: "Perfect participle passive.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0026",
    questionEn: "Buying a house involves ____ a mortgage.",
    questionVi: "Mua nhà ____ bao gồm cả việc phải gánh một khoản nợ thế chấp.",
    options: [
      { option: "getting", isCorrect: true },
      { option: "to get", isCorrect: false },
      { option: "get", isCorrect: false },
      { option: "got", isCorrect: false },
    ],
    explanationVi: "Involve + V-ing.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0027",
    questionEn: "It is no use ____ over spilt milk.",
    questionVi: "Thật vô ích khi ____ phải hối tiếc về những gì đã trôi qua.",
    options: [
      { option: "crying", isCorrect: true },
      { option: "cry", isCorrect: false },
      { option: "to cry", isCorrect: false },
      { option: "cried", isCorrect: false },
    ],
    explanationVi: "Idiom.",
    category: "Other",
  },
  {
    id: "C2-0028",
    questionEn: "There's no point ____ him.",
    questionVi: "Chẳng ích gì khi ____ hỏi anh ta cả.",
    options: [
      { option: "asking", isCorrect: true },
      { option: "ask", isCorrect: false },
      { option: "to ask", isCorrect: false },
      { option: "asked", isCorrect: false },
    ],
    explanationVi: "There is no point asking.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0029",
    questionEn: "It is worth ____ a try.",
    questionVi: "Rất đáng ____ để thử một lần.",
    options: [
      { option: "giving", isCorrect: true },
      { option: "give", isCorrect: false },
      { option: "to give", isCorrect: false },
      { option: "given", isCorrect: false },
    ],
    explanationVi: "Worth giving.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0030",
    questionEn: "I have trouble ____ my keys.",
    questionVi: "Tôi gặp rắc rối trong ____ việc tìm chìa khóa của mình.",
    options: [
      { option: "finding", isCorrect: true },
      { option: "find", isCorrect: false },
      { option: "to find", isCorrect: false },
      { option: "found", isCorrect: false },
    ],
    explanationVi: "Have trouble V-ing.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0031",
    questionEn: "She admitted ____ a mistake.",
    questionVi: "Cô ấy đã thừa nhận ____ là mình đã phạm sai lầm.",
    options: [
      { option: "having made", isCorrect: true },
      { option: "making", isCorrect: false },
      { option: "make", isCorrect: false },
      { option: "made", isCorrect: false },
    ],
    explanationVi: "Admit having V3 (emphasis on completeness).",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0032",
    questionEn: "He denied ____ the crime.",
    questionVi: "Anh ta đã phủ nhận ____ việc phạm tội.",
    options: [
      { option: "having committed", isCorrect: true },
      { option: "committing", isCorrect: false },
      { option: "commit", isCorrect: false },
      { option: "committed", isCorrect: false },
    ],
    explanationVi: "Deny having V3.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0033",
    questionEn: "I regret ____ your feelings.",
    questionVi: "Tôi hối hận vì ____ đã làm tổn thương cảm xúc của bạn.",
    options: [
      { option: "having hurt", isCorrect: true },
      { option: "hurting", isCorrect: false },
      { option: "hurt", isCorrect: false },
      { option: "to hurt", isCorrect: false },
    ],
    explanationVi: "Regret having V3.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0034",
    questionEn: "He was accused of ____ documents.",
    questionVi: "Anh ta đã bị cáo buộc là ____ làm giả giấy tờ.",
    options: [
      { option: "having forged", isCorrect: true },
      { option: "forging", isCorrect: false },
      { option: "forge", isCorrect: false },
      { option: "forged", isCorrect: false },
    ],
    explanationVi: "Accused of having V3.",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0035",
    questionEn: "____ the work, he rested.",
    questionVi: "Sau khi ____ làm xong việc, anh ấy đã nghỉ ngơi.",
    options: [
      { option: "Having done", isCorrect: true },
      { option: "Doing", isCorrect: false },
      { option: "Done", isCorrect: false },
      { option: "Do", isCorrect: false },
    ],
    explanationVi: "Having done (active).",
    category: "Gerunds & Infinitives",
  },
  {
    id: "C2-0036",
    questionEn: "The book, ____ in 1990, is a classic.",
    questionVi:
      "Cuốn sách ____ được viết vào năm 1990, là một tác phẩm kinh điển.",
    options: [
      { option: "written", isCorrect: true },
      { option: "writing", isCorrect: false },
      { option: "wrote", isCorrect: false },
      { option: "write", isCorrect: false },
    ],
    explanationVi: "Past participle phrase.",
    category: "Other",
  },
  {
    id: "C2-0037",
    questionEn: "The man ____ over there is my boss.",
    questionVi: "Người đàn ông ____ đang đứng ở đằng kia là sếp của tôi.",
    options: [
      { option: "standing", isCorrect: true },
      { option: "stood", isCorrect: false },
      { option: "stands", isCorrect: false },
      { option: "stand", isCorrect: false },
    ],
    explanationVi: "Present participle phrase.",
    category: "Other",
  },
  {
    id: "C2-0038",
    questionEn: "Strictly ____, spiders are not insects.",
    questionVi: "Nói ____ một cách chính xác thì nhện không phải là côn trùng.",
    options: [
      { option: "speaking", isCorrect: true },
      { option: "speak", isCorrect: false },
      { option: "spoken", isCorrect: false },
      { option: "spoke", isCorrect: false },
    ],
    explanationVi: "Strictly speaking.",
    category: "Other",
  },
  {
    id: "C2-0039",
    questionEn: "Granted that he is old, ____ he is strong.",
    questionVi: "Cứ cho là ông ấy đã già, ____ nhưng ông ấy vẫn rất khỏe.",
    options: [
      { option: "yet", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "but", isCorrect: false },
      { option: "and", isCorrect: false },
    ],
    explanationVi: "Granted that ... yet ...",
    category: "Other",
  },
  {
    id: "C2-0040",
    questionEn: "Seeing that you are here, ____ start.",
    questionVi: "Xét thấy bạn đang ở đây, chúng ta ____ hãy bắt đầu thôi.",
    options: [
      { option: "let's", isCorrect: true },
      { option: "we", isCorrect: false },
      { option: "shall", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi: "Seeing that (Considering that).",
    category: "Other",
  },
  {
    id: "C2-0041",
    questionEn: "Given the circumstances, we ____ wait.",
    questionVi: "Dựa trên hoàn cảnh này, chúng ta ____ nên chờ đợi.",
    options: [
      { option: "must", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "shall", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi: "Given the circumstances.",
    category: "Other",
  },
  {
    id: "C2-0042",
    questionEn: "____ for his help, I would have failed.",
    questionVi:
      "Nếu ____ không nhờ có sự giúp đỡ của anh ấy, tôi đã thất bại rồi.",
    options: [
      { option: "But", isCorrect: true },
      { option: "If", isCorrect: false },
      { option: "Only", isCorrect: false },
      { option: "Except", isCorrect: false },
    ],
    explanationVi: "But for.",
    category: "First Conditional",
  },
  {
    id: "C2-0043",
    questionEn: "____ I known, I would have come.",
    questionVi: "Phải ____ chi tôi biết chuyện, tôi đã đến rồi.",
    options: [
      { option: "Had", isCorrect: true },
      { option: "If", isCorrect: false },
      { option: "Did", isCorrect: false },
      { option: "Have", isCorrect: false },
    ],
    explanationVi: "Had I known.",
    category: "Other",
  },
  {
    id: "C2-0044",
    questionEn: "On no account ____ you tell him.",
    questionVi:
      "Dù trong bất kỳ hoàn cảnh nào, bạn ____ không được nói cho anh ta biết.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: false },
      { option: "do", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi: "On no account must you.",
    category: "Other",
  },
  {
    id: "C2-0045",
    questionEn: "Whatever the reason ____ be, I don't care.",
    questionVi:
      "Dù cho lý do ____ có là gì đi chăng nữa, tôi cũng không quan tâm.",
    options: [
      { option: "may", isCorrect: true },
      { option: "can", isCorrect: false },
      { option: "will", isCorrect: false },
      { option: "must", isCorrect: false },
    ],
    explanationVi: "Whatever the reason may be.",
    category: "Other",
  },
  {
    id: "C2-0046",
    questionEn: "Be that ____, I disagree.",
    questionVi: "Dù ____ có là như vậy đi nữa, tôi vẫn không đồng ý.",
    options: [
      { option: "as it may", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "if", isCorrect: false },
      { option: "when", isCorrect: false },
    ],
    explanationVi: "Be that as it may.",
    category: "Other",
  },
  {
    id: "C2-0047",
    questionEn: "Come ____ may, I'll stay.",
    questionVi: "Cho dù chuyện gì ____ có xảy ra đi nữa, tôi vẫn sẽ ở lại.",
    options: [
      { option: "what", isCorrect: true },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi: "Come what may.",
    category: "Who vs Which",
  },
  {
    id: "C2-0048",
    questionEn: "____ it to say, he failed.",
    questionVi: "Chỉ ____ cần nói là anh ta đã thất bại.",
    options: [
      { option: "Suffice", isCorrect: true },
      { option: "Suffices", isCorrect: false },
      { option: "Sufficed", isCorrect: false },
      { option: "Sufficing", isCorrect: false },
    ],
    explanationVi: "Suffice it to say.",
    category: "Other",
  },
  {
    id: "C2-0049",
    questionEn: "God ____ you!",
    questionVi: "Cầu Chúa ____ phù hộ cho bạn!",
    options: [
      { option: "bless", isCorrect: true },
      { option: "blesses", isCorrect: false },
      { option: "blessed", isCorrect: false },
      { option: "blessing", isCorrect: false },
    ],
    explanationVi: "God bless.",
    category: "Other",
  },
  {
    id: "C2-0050",
    questionEn: "Long ____ the King!",
    questionVi: "Đức vua ____ vạn tuế!",
    options: [
      { option: "live", isCorrect: true },
      { option: "lives", isCorrect: false },
      { option: "lived", isCorrect: false },
      { option: "living", isCorrect: false },
    ],
    explanationVi: "Long live.",
    category: "Other",
  },
  {
    id: "C2-0051",
    questionEn: "I suggest he ____ a doctor.",
    questionVi: "Tôi đề nghị anh ấy ____ nên đi khám bác sĩ.",
    options: [
      { option: "see", isCorrect: true },
      { option: "sees", isCorrect: false },
      { option: "seen", isCorrect: false },
      { option: "saw", isCorrect: false },
    ],
    explanationVi: "Suggest he see (subjunctive).",
    category: "Other",
  },
  {
    id: "C2-0052",
    questionEn: "If need ____, I'll go.",
    questionVi: "Nếu cần ____ thiết, tôi sẽ đi.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "If need be.",
    category: "Other",
  },
  {
    id: "C2-0053",
    questionEn: "As it ____, we are winning.",
    questionVi: "Cứ như ____ là vậy, chúng ta đang chiến thắng.",
    options: [
      { option: "were", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "be", isCorrect: false },
    ],
    explanationVi: "As it were (idiom: so to speak).",
    category: "Other",
  },
  {
    id: "C2-0054",
    questionEn: "If I were ____ fly, I would.",
    questionVi: "Nếu tôi ____ biết bay, tôi sẽ làm vậy.",
    options: [
      { option: "to", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
      { option: "at", isCorrect: false },
    ],
    explanationVi: "If I were to fly.",
    category: "First Conditional",
  },
  {
    id: "C2-0055",
    questionEn: "Suppose you ____ won, what then?",
    questionVi: "Giả sử bạn ____ đã thắng, thì sau đó thế nào?",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "has", isCorrect: false },
      { option: "did", isCorrect: false },
    ],
    explanationVi: "Suppose you had won (past hypothetical).",
    category: "First Conditional",
  },
  {
    id: "C2-0056",
    questionEn: "I wish I ____ born rich.",
    questionVi: "Tôi ước gì mình ____ đã sinh ra trong giàu sang.",
    options: [
      { option: "had been", isCorrect: true },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
      { option: "have been", isCorrect: false },
    ],
    explanationVi: "Wish had been.",
    category: "First Conditional",
  },
  {
    id: "C2-0057",
    questionEn: "If only I ____ listened.",
    questionVi: "Giá mà tôi ____ đã chịu lắng nghe.",
    options: [
      { option: "had", isCorrect: true },
      { option: "have", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi: "If only I had.",
    category: "First Conditional",
  },
  {
    id: "C2-0058",
    questionEn: "I prefer that he ____ nothing.",
    questionVi: "Tôi muốn anh ấy ____ đừng làm gì cả.",
    options: [
      { option: "do", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "did", isCorrect: false },
      { option: "done", isCorrect: false },
    ],
    explanationVi: "Prefer that he do (subjunctive).",
    category: "Other",
  },
  {
    id: "C2-0059",
    questionEn: "Request that she ____ allowed.",
    questionVi: "Yêu cầu cô ấy ____ phải được phép.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi: "Request that she be.",
    category: "Other",
  },
  {
    id: "C2-0060",
    questionEn: "It is vital that he ____ informed.",
    questionVi: "Điều quan trọng là anh ấy ____ phải được thông báo.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi: "Vital that he be.",
    category: "Other",
  },
  {
    id: "C2-0061",
    questionEn: "Lest he ____ forget, remind him.",
    questionVi:
      "Để phòng trường hợp anh ấy ____ quên, hãy nhắc nhở anh ấy nhé.",
    options: [
      { option: "should", isCorrect: true },
      { option: "would", isCorrect: false },
      { option: "could", isCorrect: false },
      { option: "might", isCorrect: false },
    ],
    explanationVi: "Lest he should.",
    category: "Other",
  },
  {
    id: "C2-0062",
    questionEn: "For fear that he ____ fall.",
    questionVi: "Vì sợ rằng anh ta ____ có thể bị ngã.",
    options: [
      { option: "might", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "may", isCorrect: false },
    ],
    explanationVi: "For fear that he might.",
    category: "Other",
  },
  {
    id: "C2-0063",
    questionEn: "Whether it ____ true or not, it's funny.",
    questionVi: "Dù điều đó ____ có là thật hay không, nó vẫn thật buồn cười.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Whether it be (subjunctive).",
    category: "Other",
  },
  {
    id: "C2-0064",
    questionEn: "Truth ____ told, I hate it.",
    questionVi: "Thú thực ____ là tôi ghét nó.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Truth be told.",
    category: "Other",
  },
  {
    id: "C2-0065",
    questionEn: "Far ____ it from me to criticize.",
    questionVi: "Tôi ____ không hề có ý định chỉ trích đâu.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi: "Far be it from me.",
    category: "Other",
  },
  {
    id: "C2-0066",
    questionEn: "____ it so.",
    questionVi: "Cứ ____ quyết định như vậy đi.",
    options: [
      { option: "So be", isCorrect: true },
      { option: "Be so", isCorrect: false },
      { option: "Is so", isCorrect: false },
      { option: "So is", isCorrect: false },
    ],
    explanationVi: "So be it.",
    category: "Other",
  },
  {
    id: "C2-0067",
    questionEn: "Manner ____, he is rude.",
    questionVi: "Gác chuyện thái ____ độ sang một bên, anh ta thật thô lỗ.",
    options: [
      { option: "aside", isCorrect: true },
      { option: "apart", isCorrect: false },
      { option: "away", isCorrect: false },
      { option: "off", isCorrect: false },
    ],
    explanationVi: "Manner aside (Gác chuyện thái độ sang một bên).",
    category: "Other",
  },
  {
    id: "C2-0068",
    questionEn: "Joking ____, be serious.",
    questionVi: "Gác chuyện đùa ____ cợt sang một bên, hãy nghiêm túc nào.",
    options: [
      { option: "apart", isCorrect: true },
      { option: "aside", isCorrect: false },
      { option: "away", isCorrect: false },
      { option: "off", isCorrect: false },
    ],
    explanationVi: "Joking apart/aside.",
    category: "Other",
  },
  {
    id: "C2-0069",
    questionEn: "All things ____, it's good.",
    questionVi: "Sau khi ____ cân nhắc mọi thứ, nó vẫn là tốt.",
    options: [
      { option: "considered", isCorrect: true },
      { option: "considering", isCorrect: false },
      { option: "consider", isCorrect: false },
      { option: "considers", isCorrect: false },
    ],
    explanationVi: "All things considered.",
    category: "Other",
  },
  {
    id: "C2-0070",
    questionEn: "That ____ said, I agree.",
    questionVi: "Nói ____ là vậy, nhưng tôi đồng ý.",
    options: [
      { option: "being", isCorrect: true },
      { option: "been", isCorrect: false },
      { option: "be", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi: "That being said.",
    category: "Other",
  },
  {
    id: "C2-0071",
    questionEn: "Weather ____, we'll go.",
    questionVi: "Nếu thời ____ tiết cho phép, chúng tôi sẽ đi.",
    options: [
      { option: "permitting", isCorrect: true },
      { option: "permits", isCorrect: false },
      { option: "permitted", isCorrect: false },
      { option: "permit", isCorrect: false },
    ],
    explanationVi: "Weather permitting.",
    category: "Other",
  },
  {
    id: "C2-0072",
    questionEn: "God ____, we will succeed.",
    questionVi: "Nếu ý ____ Chúa muốn, chúng ta sẽ thành công.",
    options: [
      { option: "willing", isCorrect: true },
      { option: "wills", isCorrect: false },
      { option: "willed", isCorrect: false },
      { option: "will", isCorrect: false },
    ],
    explanationVi: "God willing.",
    category: "Other",
  },
  {
    id: "C2-0073",
    questionEn: "Not ____ the point, but...",
    questionVi: "Không ____ muốn nói dông dài, nhưng...",
    options: [
      { option: "to labour", isCorrect: true },
      { option: "labouring", isCorrect: false },
      { option: "labour", isCorrect: false },
      { option: "laboured", isCorrect: false },
    ],
    explanationVi: "Not to labour the point.",
    category: "Other",
  },
  {
    id: "C2-0074",
    questionEn: "To ____ it mildly, it was bad.",
    questionVi: "Nói ____ một cách nhẹ nhàng thì nó thật tệ.",
    options: [
      { option: "put", isCorrect: true },
      { option: "say", isCorrect: false },
      { option: "tell", isCorrect: false },
      { option: "speak", isCorrect: false },
    ],
    explanationVi: "To put it mildly.",
    category: "Other",
  },
  {
    id: "C2-0075",
    questionEn: "Needless ____, he failed.",
    questionVi: "Không cần ____ phải nói, anh ta đã thất bại.",
    options: [
      { option: "to say", isCorrect: true },
      { option: "saying", isCorrect: false },
      { option: "say", isCorrect: false },
      { option: "said", isCorrect: false },
    ],
    explanationVi: "Needless to say.",
    category: "Other",
  },
  {
    id: "C2-0076",
    questionEn: "Whatever the cost ____ be, do it.",
    questionVi: "Dù ____ giá nào đi chăng nữa, hãy cứ làm đi.",
    options: [
      { option: "may", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "shall", isCorrect: false },
    ],
    explanationVi: "Whatever ... may be.",
    category: "Other",
  },
  {
    id: "C2-0077",
    questionEn: "However hard it ____ be, try.",
    questionVi: "Dù ____ cho có khó khăn đến thế nào, hãy cứ cố gắng.",
    options: [
      { option: "may", isCorrect: true },
      { option: "will", isCorrect: false },
      { option: "can", isCorrect: false },
      { option: "shall", isCorrect: false },
    ],
    explanationVi: "However ... may be.",
    category: "Other",
  },
  {
    id: "C2-0078",
    questionEn: "Strange ____ it sounds, it's true.",
    questionVi: "Nghe ____ có vẻ kỳ lạ, nhưng đó là sự thật.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "if", isCorrect: false },
    ],
    explanationVi: "Strange as it sounds.",
    category: "Other",
  },
  {
    id: "C2-0079",
    questionEn: "Hard ____ it was, we won.",
    questionVi: "Dù ____ cho có khó khăn, chúng tôi đã thắng.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "if", isCorrect: false },
    ],
    explanationVi: "Hard as it was.",
    category: "Other",
  },
  {
    id: "C2-0080",
    questionEn: "Try ____ I might, I failed.",
    questionVi: "Dù ____ tôi có cố gắng thế nào, tôi cũng đã thất bại.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "if", isCorrect: false },
    ],
    explanationVi: "Try as I might.",
    category: "Other",
  },
  {
    id: "C2-0081",
    questionEn: "Much ____ I like you, leaving.",
    questionVi: "Mặc ____ dù tôi rất thích bạn, nhưng tôi vẫn phải rời đi.",
    options: [
      { option: "as", isCorrect: true },
      { option: "so", isCorrect: false },
      { option: "though", isCorrect: false },
      { option: "if", isCorrect: false },
    ],
    explanationVi: "Much as I like you.",
    category: "Other",
  },
  {
    id: "C2-0082",
    questionEn: "____ that as it may.",
    questionVi: "Dù ____ có là như vậy đi chăng nữa.",
    options: [
      { option: "Be", isCorrect: true },
      { option: "Is", isCorrect: false },
      { option: "Was", isCorrect: false },
      { option: "Were", isCorrect: false },
    ],
    explanationVi: "Be that as it may.",
    category: "Other",
  },
  {
    id: "C2-0083",
    questionEn: "____ you require help, call.",
    questionVi: "Nếu ____ bạn cần giúp đỡ, hãy gọi nhé.",
    options: [
      { option: "Should", isCorrect: true },
      { option: "If", isCorrect: false },
      { option: "Do", isCorrect: false },
      { option: "have", isCorrect: false },
    ],
    explanationVi: "Should you.",
    category: "Should / Ought to",
  },
  {
    id: "C2-0084",
    questionEn: "____ I be of service?",
    questionVi: "Tôi ____ có thể giúp gì được cho bạn không?",
    options: [
      { option: "May", isCorrect: true },
      { option: "Can", isCorrect: false },
      { option: "Will", isCorrect: false },
      { option: "Shall", isCorrect: false },
    ],
    explanationVi: "May I be.",
    category: "May / Might",
  },
  {
    id: "C2-0085",
    questionEn: "If it ____ for him, I'd be dead.",
    questionVi: "Nếu ____ không nhờ có anh ấy, tôi đã chết rồi.",
    options: [
      { option: "weren't", isCorrect: true },
      { option: "wasn't", isCorrect: false },
      { option: "isn't", isCorrect: false },
      { option: "aren't", isCorrect: false },
    ],
    explanationVi: "If it weren't for.",
    category: "First Conditional",
  },
  {
    id: "C2-0086",
    questionEn: "If it ____ been for him...",
    questionVi: "Nếu ____ không nhờ có anh ấy...",
    options: [
      { option: "hadn't", isCorrect: true },
      { option: "hasn't", isCorrect: false },
      { option: "didn't", isCorrect: false },
      { option: "wouldn't", isCorrect: false },
    ],
    explanationVi: "If it hadn't been for.",
    category: "First Conditional",
  },
  {
    id: "C2-0087",
    questionEn: "I would have lost ____ but for his help.",
    questionVi:
      "Tôi ____ hẳn đã mất hết mọi thứ nếu không nhờ có sự giúp đỡ của anh ấy.",
    options: [
      { option: "everything", isCorrect: true },
      { option: "nothing", isCorrect: false },
      { option: "anything", isCorrect: false },
      { option: "something", isCorrect: false },
    ],
    explanationVi: "But for + Noun phrase (If it hadn't been for).",
    category: "First Conditional",
  },
  {
    id: "C2-0088",
    questionEn: "Let's assume ____ sake of argument.",
    questionVi: "Hãy cứ giả ____ định như vậy để tranh luận đi.",
    options: [
      { option: "for the", isCorrect: true },
      { option: "for", isCorrect: false },
      { option: "to the", isCorrect: false },
      { option: "with the", isCorrect: false },
    ],
    explanationVi: "For the sake of argument.",
    category: "Other",
  },
  {
    id: "C2-0089",
    questionEn: "By ____ of explanation, look here.",
    questionVi: "Để ____ giải thích thêm, hãy nhìn vào đây.",
    options: [
      { option: "way", isCorrect: true },
      { option: "means", isCorrect: false },
      { option: "virtue", isCorrect: false },
      { option: "reason", isCorrect: false },
    ],
    explanationVi: "By way of explanation.",
    category: "Other",
  },
  {
    id: "C2-0090",
    questionEn: "On ____ of his health, he quit.",
    questionVi: "Vì ____ lý do sức khỏe, anh ấy đã nghỉ việc.",
    options: [
      { option: "account", isCorrect: true },
      { option: "reason", isCorrect: false },
      { option: "sake", isCorrect: false },
      { option: "behalf", isCorrect: false },
    ],
    explanationVi: "On account of.",
    category: "Other",
  },
  {
    id: "C2-0091",
    questionEn: "With ____ to your letter, I reply.",
    questionVi: "Liên ____ quan đến lá thư của bạn, tôi xin được phản hồi.",
    options: [
      { option: "reference", isCorrect: true },
      { option: "regard", isCorrect: false },
      { option: "respect", isCorrect: false },
      { option: "relation", isCorrect: false },
    ],
    explanationVi: "With reference to.",
    category: "Other",
  },
  {
    id: "C2-0092",
    questionEn: "With ____ to costs, it's high.",
    questionVi: "Xét ____ về chi phí, nó khá là cao.",
    options: [
      { option: "regard", isCorrect: true },
      { option: "reference", isCorrect: false },
      { option: "respect", isCorrect: false },
      { option: "relation", isCorrect: false },
    ],
    explanationVi: "With regard to.",
    category: "Other",
  },
  {
    id: "C2-0093",
    questionEn: "In ____ of the law, he acted.",
    questionVi: "Dưới ____ góc độ pháp luật, anh ta đã hành động.",
    options: [
      { option: "view", isCorrect: true },
      { option: "light", isCorrect: false },
      { option: "sight", isCorrect: false },
      { option: "spite", isCorrect: false },
    ],
    explanationVi: "In view of.",
    category: "Other",
  },
  {
    id: "C2-0094",
    questionEn: "In ____ with the rules, do this.",
    questionVi: "Để ____ phù hợp với quy định, hãy làm việc này.",
    options: [
      { option: "accordance", isCorrect: true },
      { option: "accord", isCorrect: false },
      { option: "according", isCorrect: false },
      { option: "accords", isCorrect: false },
    ],
    explanationVi: "In accordance with.",
    category: "Other",
  },
  {
    id: "C2-0095",
    questionEn: "For the ____ of clarity, I repeat.",
    questionVi: "Để ____ cho rõ ràng, tôi xin nhắc lại.",
    options: [
      { option: "sake", isCorrect: true },
      { option: "good", isCorrect: false },
      { option: "benefit", isCorrect: false },
      { option: "reason", isCorrect: false },
    ],
    explanationVi: "For the sake of.",
    category: "Other",
  },
  {
    id: "C2-0096",
    questionEn: "At the ____ of his career, he died.",
    questionVi: "Ông ấy đã qua đời khi đang ở ____ đỉnh cao của sự nghiệp.",
    options: [
      { option: "height", isCorrect: true },
      { option: "top", isCorrect: false },
      { option: "peak", isCorrect: false },
      { option: "summit", isCorrect: false },
    ],
    explanationVi: "At the height of.",
    category: "Other",
  },
  {
    id: "C2-0097",
    questionEn: "He is at ____ with his neighbor.",
    questionVi: "Anh ấy đang có sự ____ bất hòa với người hàng xóm.",
    options: [
      { option: "odds", isCorrect: true },
      { option: "variance", isCorrect: false },
      { option: "difference", isCorrect: false },
      { option: "conflict", isCorrect: false },
    ],
    explanationVi: "At odds with.",
    category: "Other",
  },
  {
    id: "C2-0098",
    questionEn: "In the ____ of time, he'll see.",
    questionVi: "Rồi theo ____ thời gian, anh ấy sẽ nhận ra thôi.",
    options: [
      { option: "course", isCorrect: true },
      { option: "pass", isCorrect: false },
      { option: "flow", isCorrect: false },
      { option: "run", isCorrect: false },
    ],
    explanationVi: "In the course of time.",
    category: "Other",
  },
  {
    id: "C2-1001",
    topicId: "inversion-patterns",
    questionType: "structure",
    contextEn:
      "A CEO's emphatic denial regarding rumors of a hostile takeover.",
    contextVi:
      "Sự phủ nhận mạnh mẽ của một CEO liên quan đến tin đồn về một cuộc thâu tóm thù địch.",
    questionEn:
      "Not once ____ the CEO hint at the possibility of a merger during the three-hour press conference.",
    questionVi:
      "Không một lần nào ____ vị CEO gợi ý về khả năng sáp nhập trong cuộc họp báo kéo dài ba giờ.",
    options: [
      { option: "did", isCorrect: true },
      { option: "has", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "was", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Not once' đứng đầu câu: Not once + trợ động từ + S + V.",
    category: "Sentence Structure",
  },
  {
    id: "C2-1002",
    topicId: "complex-sentence-patterns",
    questionType: "structure",
    contextEn: "Legal discourse on contract enforcement.",
    contextVi: "Diễn ngôn pháp lý về việc thực thi hợp đồng.",
    questionEn:
      "Were the court ____ the contract invalid, the entire project would be thrown into chaos.",
    questionVi:
      "Nếu tòa án ____ tuyên bố hợp đồng vô hiệu, toàn bộ dự án sẽ rơi vào tình trạng hỗn loạn.",
    options: [
      { option: "deem", isCorrect: false },
      { option: "to deem", isCorrect: true },
      { option: "deeming", isCorrect: false },
      { option: "deemed", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện loại 2: Were + S + to-V. 'Deem' có nghĩa là cho rằng/tuyên bố.",
    category: "Sentence Structure",
  },
  {
    id: "C2-1003",
    topicId: "subordinating-conjunctions",
    questionType: "structure",
    contextEn: "Discussing the resilience of a startup in a volatile market.",
    contextVi:
      "Thảo luận về khả năng phục hồi của một công ty khởi nghiệp trong một thị trường biến động.",
    questionEn:
      "The startup managed to secure funding ____ the overwhelmingly negative economic forecasts.",
    questionVi:
      "Công ty khởi nghiệp đã xoay xở để đảm bảo nguồn vốn ____ những dự báo kinh tế cực kỳ tiêu cực.",
    options: [
      { option: "notwithstanding", isCorrect: true },
      { option: "provided that", isCorrect: false },
      { option: "consequently", isCorrect: false },
      { option: "whereas", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'notwithstanding' (bất chấp/mặc dù) làm giới từ trước một cụm danh từ.",
    category: "Conjunctions",
  },
  {
    id: "C2-1004",
    topicId: "relative-clauses-preposition",
    questionType: "structure",
    contextEn: "Formal correspondence regarding a high-stakes negotiation.",
    contextVi: "Thư từ chính thức liên quan đến một cuộc đàm phán mạo hiểm.",
    questionEn:
      "The terms ____ we ultimately agreed were far more favorable than we had initially anticipated.",
    questionVi:
      "Các điều khoản ____ mà cuối cùng chúng tôi đã đồng ý thuận lợi hơn nhiều so với dự tính ban đầu.",
    options: [
      { option: "to which", isCorrect: true },
      { option: "with whom", isCorrect: false },
      { option: "in which", isCorrect: false },
      { option: "by which", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc 'agree to something'. Trong mệnh đề quan hệ, giới từ 'to' có thể đứng trước đại từ quan hệ 'which'.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1005",
    topicId: "complex-sentence-patterns",
    questionType: "word-form",
    contextEn: "An academic analysis of corporate governance.",
    contextVi: "Một phân tích học thuật về quản trị doanh nghiệp.",
    questionEn:
      "The effectiveness of the new policy is ____ dependent on the cooperation of regional managers.",
    questionVi:
      "Hiệu quả của chính sách mới phụ thuộc một cách ____ vào sự hợp tác của các nhà quản lý khu vực.",
    options: [
      { option: "contingently", isCorrect: true },
      { option: "contingent", isCorrect: false },
      { option: "contingency", isCorrect: false },
      { option: "contingently on", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ (Adv) 'contingently' để bổ nghĩa cho tính từ 'dependent'. 'Contingently dependent' nghĩa là phụ thuộc vào điều kiện.",
    category: "Word Forms",
  },
  {
    id: "C2-1006",
    topicId: "inversion",
    questionType: "grammar",
    contextEn:
      "Emphasizing the rarity of an occurrence in a corporate setting.",
    contextVi:
      "Nhấn mạnh sự hiếm hoi của một lần xảy ra trong bối cảnh doanh nghiệp.",
    questionEn:
      "Not once ____ the CEO fail to acknowledge the contributions of the junior staff during the annual gala.",
    questionVi:
      "Không một lần nào ____ vị CEO quên ghi nhận sự đóng góp của các nhân viên cấp dưới trong buổi dạ tiệc hàng năm.",
    options: [
      { option: "did", isCorrect: true },
      { option: "does", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not once' (Không một lần nào).",
    category: "Inversion",
  },
  {
    id: "C2-1007",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing a formal requirement in a legal document.",
    contextVi: "Diễn đạt một yêu cầu chính thức trong văn bản pháp lý.",
    questionEn:
      "It is stipulated in the agreement that each partner ____ a detailed account of their expenses every quarter.",
    questionVi:
      "Trong thỏa thuận quy định rằng mỗi đối tác ____ một bản kê khai chi tiết các khoản chi tiêu của họ vào mỗi quý.",
    options: [
      { option: "render", isCorrect: true },
      { option: "renders", isCorrect: false },
      { option: "rendered", isCorrect: false },
      { option: "rendering", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ mang tính yêu cầu/quy định 'stipulate that'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1008",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing the result of a long process.",
    contextVi: "Mô tả kết quả của một quá trình dài.",
    questionEn:
      "____ for years on the cutting edge of biotechnology, the company finally announced a breakthrough in gene therapy.",
    questionVi:
      "____ trong nhiều năm ở vị trí tiên phong của công nghệ sinh học, công ty cuối cùng đã công bố một bước đột phá trong liệu pháp gen.",
    options: [
      { option: "Having worked", isCorrect: true },
      { option: "Working", isCorrect: false },
      { option: "Worked", isCorrect: false },
      { option: "To have worked", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng phân từ hoàn thành (Having + V3/ed) để chỉ một hành động đã hoàn thành trước hành động chính.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1009",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical past event with a lasting impact.",
    contextVi:
      "Thảo luận về một sự kiện giả định trong quá khứ có tác động lâu dài.",
    questionEn:
      "If the firm had not diversified into artificial intelligence a decade ago, it ____ the market leader it is today.",
    questionVi:
      "Nếu công ty không đa dạng hóa sang lĩnh vực trí tuệ nhân tạo một thập kỷ trước, họ ____ đã không trở thành người dẫn đầu thị trường như ngày nay.",
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
    id: "C2-1010",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Identifying the core reason for a success.",
    contextVi: "Xác định lý do cốt lõi của sự thành công.",
    questionEn:
      "It was his unwavering commitment to ethical practices ____ built the foundation for the company's long-term reputation.",
    questionVi:
      "Chính sự cam kết kiên định với các thực hành đạo đức của ông ấy ____ đã xây dựng nền tảng cho danh tiếng lâu dài của công ty.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "who", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh: It + be + N + that.",
    category: "Structure",
  },
  {
    id: "C2-1011",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Formal reference in a report.",
    contextVi: "Tham chiếu trang trọng trong một báo cáo.",
    questionEn:
      "The report outlines several strategies, the effectiveness of ____ remains to be seen in the coming fiscal year.",
    questionVi:
      "Báo cáo phác thảo một số chiến lược, hiệu quả của ____ vẫn còn phải chờ xem trong năm tài chính tới.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whose", isCorrect: false },
      { option: "them", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' sau giới từ/cụm danh từ trong mệnh đề quan hệ trang trọng để thay thế cho danh từ chỉ vật.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1012",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Reporting a common industry opinion.",
    contextVi: "Báo cáo một ý kiến chung trong ngành.",
    questionEn:
      "The upcoming merger ____ to be the most significant event in the telecommunications industry this decade.",
    questionVi:
      "Vụ sáp nhập sắp tới ____ được cho là sự kiện quan trọng nhất trong ngành viễn thông thập kỷ này.",
    options: [
      { option: "is widely considered", isCorrect: true },
      { option: "is widely considering", isCorrect: false },
      { option: "widely considers", isCorrect: false },
      { option: "has widely considered", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc bị động khách quan (It is considered that / S is considered to be...).",
    category: "Passive Voice",
  },
  {
    id: "C2-1013",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Describing a complex proportional relationship.",
    contextVi: "Mô tả một mối quan hệ tỷ lệ thuận phức tạp.",
    questionEn:
      "The more the R&D team pushed the boundaries of nanotechnology, ____ the potential applications for medical treatment became.",
    questionVi:
      "Nhóm R&D càng đẩy mạnh giới hạn của công nghệ nano, các ứng dụng tiềm năng cho điều trị y tế ____.",
    options: [
      { option: "the more multifaceted", isCorrect: true },
      { option: "multifaceteder", isCorrect: false },
      { option: "the most multifaceted", isCorrect: false },
      { option: "more multifaceted", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C2-1014",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Stating a condition for specialized access.",
    contextVi: "Nêu điều kiện để được truy cập chuyên biệt.",
    questionEn:
      "Access to the high-security server is strictly contingent ____ the submission of a valid security clearance certificate.",
    questionVi:
      "Việc truy cập vào máy chủ bảo mật cao phụ thuộc hoàn toàn ____ vào việc nộp chứng chỉ kiểm tra an ninh hợp lệ.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi:
      "Cụm tính từ đi với giới từ 'contingent on/upon' (tình huống tùy thuộc vào một yếu tố khác).",
    category: "Prepositions",
  },
  {
    id: "C2-1015",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Describing a person's exceptional trait.",
    contextVi: "Mô tả một đặc điểm xuất sắc của một người.",
    questionEn:
      "Her ____ and profound understanding of international trade laws made her an indispensable asset to the firm.",
    questionVi:
      "Sự thấu hiểu ____ và sâu sắc của bà ấy về luật thương mại quốc tế đã khiến bà trở thành một tài sản không thể thiếu của công ty.",
    options: [
      { option: "lucid", isCorrect: true },
      { option: "lucidly", isCorrect: false },
      { option: "lucidity", isCorrect: false },
      { option: "lucidness", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'understanding'.",
    category: "Word Forms",
  },
  {
    id: "C2-1016",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal policy.",
    contextVi: "Nhấn mạnh một hạn chế trong một chính sách trang trọng.",
    questionEn:
      "Under no circumstances ____ any employee be permitted to divulge proprietary source code to outside contractors.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một nhân viên nào ____ được phép tiết lộ mã nguồn độc quyền cho các nhà thầu bên ngoài.",
    options: [
      { option: "shall", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "must", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với cụm từ phủ định 'Under no circumstances' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1017",
    topicId: "participial-phrases",
    questionType: "grammar",
    contextEn: "Combining two complex actions.",
    contextVi: "Kết hợp hai hành động phức tạp.",
    questionEn:
      "____ to circumvent the increasing regulatory hurdles, the multinational corporation revamped its global tax strategy.",
    questionVi:
      "____ tìm cách lách qua các rào cản quản lý ngày càng tăng, tập đoàn đa quốc gia đã cải tổ chiến lược thuế toàn cầu của mình.",
    options: [
      { option: "Seeking", isCorrect: true },
      { option: "Sought", isCorrect: false },
      { option: "Having sought", isCorrect: true },
      { option: "To seek", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng hiện tại phân từ (V-ing) hoặc phân từ hoàn thành (Having + V3/ed) để bắt đầu một mệnh đề trạng ngữ.",
    category: "Participial Phrases",
  },
  {
    id: "C2-1018",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Hypothesizing about a past action and its current state.",
    contextVi:
      "Giả định về một hành động trong quá khứ và trạng thái hiện tại của nó.",
    questionEn:
      "Were it not for his visionary leadership two decades ago, the company ____ the global powerhouse it is today.",
    questionVi:
      "Nếu không có sự lãnh đạo có tầm nhìn của ông ấy cách đây hai thập kỷ, công ty ____ đã không trở thành cường quốc toàn cầu như ngày nay.",
    options: [
      { option: "would not be", isCorrect: true },
      { option: "would not have been", isCorrect: false },
      { option: "will not be", isCorrect: false },
      { option: "is not", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ câu điều kiện hỗn hợp (giả định hiện tại về một sự thật trong quá khứ dẫn đến kết quả hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1019",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Expressing a nuanced concession.",
    contextVi: "Diễn đạt một sự nhượng bộ tinh tế.",
    questionEn:
      "____ the recent economic downturn, our firm has managed to achieve record-breaking profits in the third quarter.",
    questionVi:
      "____ sự suy thoái kinh tế gần đây, công ty chúng tôi vẫn đạt được mức lợi nhuận kỷ lục trong quý thứ ba.",
    options: [
      { option: "Notwithstanding", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "However", isCorrect: false },
      { option: "Moreover", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'Notwithstanding' (bất chấp/mặc dù) làm giới từ đứng trước cụm danh từ.",
    category: "Conjunctions",
  },
  {
    id: "C2-1020",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an urgent recommendation from a board.",
    contextVi: "Báo cáo một khuyến nghị khẩn cấp từ ban lãnh đạo.",
    questionEn:
      "The board of directors suggested that the CEO ____ an emergency meeting to address the hostile takeover bid.",
    questionVi:
      "Ban giám đốc đề xuất rằng CEO ____ một cuộc họp khẩn cấp để giải quyết nỗ lực thâu tóm thù địch.",
    options: [
      { option: "convene", isCorrect: true },
      { option: "convenes", isCorrect: false },
      { option: "convened", isCorrect: false },
      { option: "convening", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'suggest that...'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1021",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Adding information with a complex relative clause.",
    contextVi: "Thêm thông tin bằng mệnh đề quan hệ phức tạp.",
    questionEn:
      "The treaty contains numerous complex provisions, several of ____ are expected to be challenged in the international court.",
    questionVi:
      "Hiệp ước bao gồm nhiều điều khoản phức tạp, một vài ____ trong số đó dự kiến sẽ bị thách thức tại tòa án quốc tế.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau cụm định lượng (several of) trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1022",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing immediate reaction to an event.",
    contextVi: "Nhấn mạnh phản ứng ngay lập tức đối với một sự kiện.",
    questionEn:
      "No sooner ____ the news of the merger broken than the company's share price skyrocketed by twenty percent.",
    questionVi:
      "Ngay khi tin tức về vụ sáp nhập vừa được tung ra ____ thì giá cổ phiếu của công ty đã tăng vọt hai mươi phần trăm.",
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
    id: "C2-1023",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a critical requirement for security.",
    contextVi: "Nêu một yêu cầu quan trọng đối với bảo mật.",
    questionEn:
      "It is imperative that every single transaction ____ meticulously documented to ensure full transparency.",
    questionVi:
      "Điều cấp thiết là mọi giao dịch đơn lẻ ____ được ghi chép lại một cách tỉ mỉ để đảm bảo sự minh bạch hoàn toàn.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "were", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau tính từ mang tính khẩn cấp/quan trọng 'imperative'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1024",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that influenced an outcome.",
    contextVi: "Mô tả một trạng thái ảnh hưởng đến kết quả.",
    questionEn:
      "____ by the sudden shift in consumer behavior, the marketing departement completely overhauled its annual strategy.",
    questionVi:
      "____ bởi sự thay đổi đột ngột trong hành vi người tiêu dùng, bộ phận tiếp thị đã cải tổ hoàn toàn chiến lược hàng năm của mình.",
    options: [
      { option: "Surprised", isCorrect: true },
      { option: "Surprising", isCorrect: false },
      { option: "Having surprised", isCorrect: false },
      { option: "To be surprised", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng quá khứ phân từ (V3/ed) làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1025",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Reflecting on a past opportunity with present consequences.",
    contextVi: "Suy ngẫm về một cơ hội quá khứ với các hệ quả hiện tại.",
    questionEn:
      "If we had secured that patent five years ago, we ____ millions of dollars in licensing fees every year now.",
    questionVi:
      "Nếu chúng ta đảm bảo được bằng sáng chế đó năm năm trước, chúng ta ____ hàng triệu đô la phí cấp phép mỗi năm vào lúc này.",
    options: [
      { option: "would be earning", isCorrect: true },
      { option: "would have earned", isCorrect: false },
      { option: "will be earning", isCorrect: false },
      { option: "are earning", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả đang diễn ra ở hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1026",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "On no account ____ any employee of this firm engage in insider trading or any other form of market manipulation.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một nhân viên nào của công ty này ____ được tham gia vào giao dịch nội gián hoặc bất kỳ hình thức thao túng thị trường nào khác.",
    options: [
      { option: "shall", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "must", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1027",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Discussing the complexity of a managerial task.",
    contextVi: "Thảo luận về sự phức tạp của một nhiệm vụ quản lý.",
    questionEn:
      "____ a balance between long-term growth and short-term profitability is the primary challenge for modern executives.",
    questionVi:
      "____ sự cân bằng giữa tăng trưởng dài hạn và lợi nhuận ngắn hạn là thách thức chính đối với các giám đốc điều hành hiện đại.",
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
    id: "C2-1028",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating with high certainty about a past event.",
    contextVi: "Dự đoán với độ chắc chắn cao về một sự kiện trong quá khứ.",
    questionEn:
      "The board ____ been aware of the impending financial crisis long before the public announcement was made.",
    questionVi:
      "Ban điều hành ____ chắc chắn đã biết về cuộc khủng hoảng tài chính sắp xảy ra từ lâu trước khi thông báo công khai được đưa ra.",
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
    id: "C2-1029",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Connecting a condition to an outcome in a formal context.",
    contextVi:
      "Kết nối một điều kiện với một kết quả trong bối cảnh trang trọng.",
    questionEn:
      "The proposed merger will proceed as planned, ____ any unforeseen legal challenges arise in the interim.",
    questionVi:
      "Vụ sáp nhập được đề xuất sẽ tiến hành như kế hoạch, ____ trừ khi có bất kỳ thách thức pháp lý không lường trước nào phát sinh trong thời gian tạm thời.",
    options: [
      { option: "unless", isCorrect: true },
      { option: "provided that", isCorrect: false },
      { option: "notwithstanding", isCorrect: false },
      { option: "whereas", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'unless' (trừ khi) để dẫn dắt một điều kiện phủ định.",
    category: "Conjunctions",
  },
  {
    id: "C2-1030",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Expressing an urgent requirement from a regulatory body.",
    contextVi: "Diễn đạt một yêu cầu khẩn cấp từ cơ quan quản lý.",
    questionEn:
      "It is vital that all personnel ____ the upcoming safety training session without exception.",
    questionVi:
      "Điều tối quan trọng là tất cả nhân viên ____ tham gia buổi đào tạo an toàn sắp tới mà không có ngoại lệ.",
    options: [
      { option: "attend", isCorrect: true },
      { option: "attends", isCorrect: false },
      { option: "attended", isCorrect: false },
      { option: "attending", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định (Subjunctive) sau tính từ 'vital'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1031",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal business contract.",
    contextVi: "Nhấn mạnh một hạn chế trong hợp đồng kinh doanh trang trọng.",
    questionEn:
      "Not until the arbitration process reached its final stage ____ the parties involved agree to a settlement.",
    questionVi:
      "Mãi cho đến khi quy trình trọng tài đạt đến giai đoạn cuối cùng ____ các bên liên quan mới đồng ý thỏa thuận.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not until' (Mãi cho đến khi... thì mới...).",
    category: "Inversion",
  },
  {
    id: "C2-1032",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn:
      "Reporting an advisory recommendation for corporate restructuring.",
    contextVi:
      "Báo cáo một khuyến nghị tư vấn cho việc tái cơ cấu doanh nghiệp.",
    questionEn:
      "The management consultant recommended that the company ____ its entire supply chain to mitigate geopolitical risks.",
    questionVi:
      "Cố vấn quản lý đã khuyến nghị rằng công ty ____ lại toàn bộ chuỗi cung ứng của mình để giảm thiểu rủi ro địa chính trị.",
    options: [
      { option: "overhaul", isCorrect: true },
      { option: "overhauls", isCorrect: false },
      { option: "overhauled", isCorrect: false },
      { option: "overhauling", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'recommend that'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1033",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a concurrent state with an action.",
    contextVi: "Mô tả một trạng thái đồng thời với một hành động.",
    questionEn:
      "____ for a significant increase in market share, the electronics firm launched a multi-million dollar advertising campaign.",
    questionVi:
      "____ mong sự gia tăng đáng kể về thị phần, công ty điện tử đã khởi động một chiến dịch quảng cáo trị giá hàng triệu đô la.",
    options: [
      { option: "Striving", isCorrect: true },
      { option: "Strived", isCorrect: false },
      { option: "To strive", isCorrect: false },
      { option: "Having strived", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng hiện tại phân từ (V-ing) để chỉ mục đích hoặc trạng thái đồng thời.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1034",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn:
      "Discussing a past decision with current financial repercussions.",
    contextVi:
      "Thảo luận về một quyết định quá khứ có hệ quả tài chính hiện tại.",
    questionEn:
      "If the government had not intervened with a bailout package, the national carrier ____ bankrupt by now.",
    questionVi:
      "Nếu chính phủ không can thiệp bằng một gói cứu trợ, hãng hàng không quốc gia ____ đã phá sản vào lúc này.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "would have been", isCorrect: false },
      { option: "will be", isCorrect: false },
      { option: "is", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1035",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn:
      "Focusing on the specific person responsible for an achievement.",
    contextVi:
      "Tập trung vào một người cụ thể chịu trách nhiệm cho một thành tựu.",
    questionEn:
      "It was through his meticulous attention to detail ____ the lead architect ensured the project's structural integrity.",
    questionVi:
      "Chính nhờ sự chú ý tỉ mỉ đến từng chi tiết của ông ấy ____ mà kiến trúc sư trưởng đã đảm bảo được tính toàn vẹn về cấu trúc của dự án.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh phương thức: It was through... that...",
    category: "Structure",
  },
  {
    id: "C2-1036",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn:
      "Adding information with a complex relative clause in a formal report.",
    contextVi:
      "Thêm thông tin bằng mệnh đề quan hệ phức tạp trong một báo cáo trang trọng.",
    questionEn:
      "The CEO addressed the shareholders, many of ____ expressed concerns regarding the company's environmental footprint.",
    questionVi:
      "CEO đã phát biểu trước các cổ đông, nhiều ____ trong số họ bày tỏ lo ngại về dấu chân môi trường của công ty.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whom' sau từ định lượng (many of) làm tân ngữ cho người trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1037",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a common perception in the business world.",
    contextVi: "Mô tả một nhận thức phổ biến trong giới kinh doanh.",
    questionEn:
      "Entrepreneurship ____ as a high-risk, high-reward endeavor by most financial analysts.",
    questionVi:
      "Khởi nghiệp ____ được coi là một nỗ lực có rủi ro cao, lợi nhuận cao bởi hầu hết các nhà phân tích tài chính.",
    options: [
      { option: "is widely viewed", isCorrect: true },
      { option: "is widely viewing", isCorrect: false },
      { option: "has widely viewed", isCorrect: false },
      { option: "widely views", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại đơn bị động (am/is/are + P2) với trạng từ chỉ mức độ phổ biến.",
    category: "Passive Voice",
  },
  {
    id: "C2-1038",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional efficiency in two different scenarios.",
    contextVi: "So sánh hiệu quả chuyên môn trong hai kịch bản khác nhau.",
    questionEn:
      "The new automation system works ____ more efficiently than the manual processes it replaced.",
    questionVi:
      "Hệ thống tự động hóa mới hoạt động ____ hiệu quả hơn nhiều so với các quy trình thủ công mà nó thay thế.",
    options: [
      { option: "infinitely", isCorrect: true },
      { option: "infinite", isCorrect: false },
      { option: "most infinite", isCorrect: false },
      { option: "so infinite", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ (Adv) để nhấn mạnh sự so sánh hơn của một trạng từ khác.",
    category: "Comparison",
  },
  {
    id: "C2-1039",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Expressing a condition for professional advancement.",
    contextVi: "Diễn đạt một điều kiện để thăng tiến nghề nghiệp.",
    questionEn:
      "Promotion to a senior management level is often dependent ____ a candidate's ability to demonstrate strategic vision.",
    questionVi:
      "Việc thăng tiến lên cấp quản lý cấp cao thường phụ thuộc ____ vào khả năng thể hiện tầm nhìn chiến lược của ứng viên.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Cụm tính từ đi với giới từ 'dependent on/upon'.",
    category: "Prepositions",
  },
  {
    id: "C2-1040",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a specific quality of a legal argument.",
    contextVi: "Xác định một chất lượng cụ thể của một lập luận pháp lý.",
    questionEn:
      "The legal counsel provided a highly ____ and persuasive argument in favor of the defendant.",
    questionVi:
      "Cố vấn pháp lý đã đưa ra một lập luận cực kỳ ____ và đầy thuyết phục có lợi cho bị cáo.",
    options: [
      { option: "coherent", isCorrect: true },
      { option: "coherence", isCorrect: false },
      { option: "coherently", isCorrect: false },
      { option: "cohereness", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'argument'.",
    category: "Word Forms",
  },
  {
    id: "C2-1041",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal company policy.",
    contextVi: "Nhấn mạnh một hạn chế trong chính sách công ty trang trọng.",
    questionEn:
      "Seldom ____ such a high level of cooperation between rival firms in the pharmaceutical industry.",
    questionVi:
      "Hiếm khi ____ thấy mức độ hợp tác cao như vậy giữa các công ty đối thủ trong ngành dược phẩm.",
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
    id: "C2-1042",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Identifying a complex task as a subject.",
    contextVi: "Xác định một nhiệm vụ phức tạp làm chủ ngữ.",
    questionEn:
      "____ an effective balance between professional obligations and personal well-being is a constant struggle for many executives.",
    questionVi:
      "____ sự cân bằng hiệu quả giữa các nghĩa vụ nghề nghiệp và hạnh phúc cá nhân là một cuộc đấu tranh không ngừng đối với nhiều giám đốc điều hành.",
    options: [
      { option: "Striking", isCorrect: true },
      { option: "To be struck", isCorrect: false },
      { option: "Having struck", isCorrect: false },
      { option: "Strike", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng danh động từ (Gerund) 'Striking a balance' làm chủ ngữ.",
    category: "Gerunds",
  },
  {
    id: "C2-1043",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Suggesting a past obligation that was not fulfilled.",
    contextVi: "Đề xuất một nghĩa vụ trong quá khứ đã không được thực hiện.",
    questionEn:
      "The company ____ conducted a more thorough market analysis before launching such a specialized product.",
    questionVi:
      "Công ty ____ lẽ ra nên thực hiện một phân tích thị trường kỹ lưỡng hơn trước khi tung ra một sản phẩm chuyên dụng như vậy.",
    options: [
      { option: "should have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "might have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'should have + V3/ed' để chỉ một hành động lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm.",
    category: "Modals",
  },
  {
    id: "C2-1044",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Showing a strong contrast between two corporate strategies.",
    contextVi:
      "Thể hiện sự tương phản mạnh mẽ giữa hai chiến lược của doanh nghiệp.",
    questionEn:
      "Company A focused on rapid expansion, ____ Company B prioritized long-term sustainability and organic growth.",
    questionVi:
      "Công ty A tập trung vào việc mở rộng nhanh chóng, ____ trong khi đó Công ty B ưu tiên sự bền vững lâu dài và tăng trưởng hữu cơ.",
    options: [
      { option: "whereas", isCorrect: true },
      { option: "consequently", isCorrect: false },
      { option: "moreover", isCorrect: false },
      { option: "nonetheless", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whereas' (trong khi đó) để thể hiện sự tương phản giữa hai sự việc.",
    category: "Conjunctions",
  },
  {
    id: "C2-1045",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a formal recommendation in a business meeting.",
    contextVi:
      "Báo cáo một khuyến nghị chính thức trong một cuộc họp kinh doanh.",
    questionEn:
      "The marketing director suggested that the team ____ a more targeted approach to reach high-net-worth individuals.",
    questionVi:
      "Giám đốc tiếp thị đề xuất rằng nhóm ____ một cách tiếp cận tập trung hơn để tiếp cận những cá nhân có giá trị tài sản ròng cao.",
    options: [
      { option: "adopt", isCorrect: true },
      { option: "adopts", isCorrect: false },
      { option: "adopted", isCorrect: false },
      { option: "adopting", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'suggest that + S + V (nguyên mẫu)'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1046",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Restricting information to a specific group.",
    contextVi: "Hạn chế thông tin cho một nhóm cụ thể.",
    questionEn:
      "Candidates ____ experience in emerging markets will be given preferential consideration for the international assignment.",
    questionVi:
      "Các ứng viên ____ có kinh nghiệm tại các thị trường mới nổi sẽ được ưu tiên xem xét cho nhiệm vụ quốc tế.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whose' để thay thế cho tính từ sở hữu trong mệnh đề quan hệ xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1047",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Stating a condition for specialized knowledge access.",
    contextVi: "Nêu điều kiện để tiếp cận kiến thức chuyên môn.",
    questionEn:
      "The details of the proprietary algorithm ____ to remain confidential for a period of ten years.",
    questionVi:
      "Các chi tiết của thuật toán độc quyền ____ được yêu cầu phải giữ bí mật trong thời gian mười năm.",
    options: [
      { option: "are required", isCorrect: true },
      { option: "are requiring", isCorrect: false },
      { option: "require", isCorrect: false },
      { option: "have required", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì hiện tại đơn (am/is/are + P2).",
    category: "Passive Voice",
  },
  {
    id: "C2-1048",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the complexity of two legal cases.",
    contextVi: "So sánh mức độ phức tạp của hai vụ án pháp lý.",
    questionEn:
      "The current antitrust case is significantly ____ more complex than the previous litigation against the same corporation.",
    questionVi:
      "Vụ kiện chống độc quyền hiện tại ____ phức tạp hơn đáng kể so với vụ kiện tụng trước đó đối với cùng một tập đoàn.",
    options: [
      { option: "far", isCorrect: true },
      { option: "very", isCorrect: false },
      { option: "more", isCorrect: false },
      { option: "most", isCorrect: false },
    ],
    explanationVi: "Dùng 'far' hoặc 'much' để nhấn mạnh sự so sánh hơn.",
    category: "Comparison",
  },
  {
    id: "C2-1049",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Exempting a group from a standard requirement.",
    contextVi: "Miễn cho một nhóm khỏi một yêu cầu tiêu chuẩn.",
    questionEn:
      "Employees with over twenty years of service are exempt ____ the mandatory annual training sessions.",
    questionVi:
      "Nhân viên có trên hai mươi năm công tác được miễn ____ các buổi đào tạo hàng năm bắt buộc.",
    options: [
      { option: "from", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi: "Cụm tính từ đi với giới từ 'exempt from'.",
    category: "Prepositions",
  },
  {
    id: "C2-1050",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a corporate culture.",
    contextVi: "Xác định tính chất của văn hóa doanh nghiệp.",
    questionEn:
      "The company fosters a highly ____ and innovative environment that encourages out-of-the-box thinking.",
    questionVi:
      "Công ty thúc đẩy một môi trường năng động và ____ sáng tạo cao, khuyến khích tư duy đột phá.",
    options: [
      { option: "collaborative", isCorrect: true },
      { option: "collaborate", isCorrect: false },
      { option: "collaboration", isCorrect: false },
      { option: "collaboratively", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'environment'.",
    category: "Word Forms",
  },
  {
    id: "C2-1051",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "On no account ____ any unauthorized personnel gain access to the secure data repository.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một nhân viên không có thẩm quyền nào ____ được quyền truy cập vào kho lưu trữ dữ liệu an toàn.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "shall", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1052",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Identifying an essential attribute for a leader.",
    contextVi: "Xác định một thuộc tính thiết yếu đối với một nhà lãnh đạo.",
    questionEn:
      "It is essential that a leader ____ a high degree of emotional intelligence to effectively manage a diverse team.",
    questionVi:
      "Điều thiết yếu là một nhà lãnh đạo ____ mức độ trí tuệ cảm xúc cao để quản lý hiệu quả một nhóm đa dạng.",
    options: [
      { option: "possess", isCorrect: true },
      { option: "possesses", isCorrect: false },
      { option: "possessed", isCorrect: false },
      { option: "possessing", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định (Subjunctive) sau tính từ 'essential'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1053",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to an action in business.",
    contextVi: "Mô tả một trạng thái dẫn đến một hành động trong kinh doanh.",
    questionEn:
      "____ by the lack of transparency in the financial reports, the investors withdrew their support for the merger.",
    questionVi:
      "____ bởi sự thiếu minh bạch trong các báo cáo tài chính, các nhà đầu tư đã rút lại sự ủng hộ của họ đối với vụ sáp nhập.",
    options: [
      { option: "Disheartened", isCorrect: true },
      { option: "Disheartening", isCorrect: false },
      { option: "To be disheartened", isCorrect: false },
      { option: "Having disheartened", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1054",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Analyzing a past failure's impact on the current situation.",
    contextVi:
      "Phân tích tác động của một thất bại trong quá khứ đối với tình hình hiện tại.",
    questionEn:
      "If we had invested more in digital transformation years ago, we ____ such a significant disadvantage today.",
    questionVi:
      "Nếu chúng ta đầu tư nhiều hơn vào chuyển đổi số từ nhiều năm trước, chúng ta ____ đã không ở trong tình thế bất lợi đáng kể như hiện nay.",
    options: [
      { option: "would not be at", isCorrect: true },
      { option: "would not have been at", isCorrect: false },
      { option: "will not be at", isCorrect: false },
      { option: "is not at", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1055",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Identifying the precise reason for a market shift.",
    contextVi: "Xác định lý do chính xác cho một sự thay đổi thị trường.",
    questionEn:
      "It was exactly this shift in consumer mentality ____ the marketing team failed to anticipate in their annual forecast.",
    questionVi:
      "Chính xác là sự thay đổi trong tâm lý người tiêu dùng này ____ mà nhóm tiếp thị đã không lường trước được trong dự báo hàng năm của họ.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh đối tượng: It was + N + that...",
    category: "Structure",
  },
  {
    id: "C2-1056",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a negative condition in a formal statement.",
    contextVi:
      "Nhấn mạnh một điều kiện phủ định trong một bản tuyên bố trang trọng.",
    questionEn:
      "Not until the external audit was thoroughly completed ____ the board of directors release the annual financial report.",
    questionVi:
      "Mãi cho đến khi cuộc kiểm toán bên ngoài được hoàn thành kỹ lưỡng ____ ban giám đốc mới công bố báo cáo tài chính hàng năm.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not until' (Mãi cho đến khi... thì mới...).",
    category: "Inversion",
  },
  {
    id: "C2-1057",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an advisory recommendation for corporate strategy.",
    contextVi: "Báo cáo một khuyến nghị tư vấn cho chiến lược doanh nghiệp.",
    questionEn:
      "The strategic consultant recommended that the firm ____ its entire marketing strategy to better align with digital trends.",
    questionVi:
      "Cố vấn chiến lược đã khuyến nghị rằng công ty ____ lại toàn bộ chiến lược tiếp thị của mình để phù hợp hơn với các xu hướng kỹ thuật số.",
    options: [
      { option: "overhaul", isCorrect: true },
      { option: "overhauls", isCorrect: false },
      { option: "overhauled", isCorrect: false },
      { option: "overhauling", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'recommend that'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1058",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing simultaneous actions in a research context.",
    contextVi: "Mô tả các hành động đồng thời trong bối cảnh nghiên cứu.",
    questionEn:
      "____ for a breakthrough in renewable energy technology, the research team worked tirelessly for several years.",
    questionVi:
      "____ mong tìm kiếm bước đột phá trong công nghệ năng lượng tái tạo, nhóm nghiên cứu đã làm việc không mệt mỏi trong vài năm.",
    options: [
      { option: "Striving", isCorrect: true },
      { option: "Strived", isCorrect: false },
      { option: "Having strived", isCorrect: false },
      { option: "To strive", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng hiện tại phân từ (V-ing) để chỉ một hành động xảy ra song song hoặc chỉ nguyên nhân.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1059",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a past decision with current legal implications.",
    contextVi:
      "Thảo luận về một quyết định quá khứ có hệ quả pháp lý hiện tại.",
    questionEn:
      "If the company had not ignored the initial warnings, it ____ such severe legal consequences today.",
    questionVi:
      "Nếu công ty không phớt lờ những cảnh báo ban đầu, họ ____ đã không phải đối mặt với những hệ quả pháp lý nghiêm trọng như hiện nay.",
    options: [
      { option: "would not be facing", isCorrect: true },
      { option: "would not have faced", isCorrect: false },
      { option: "will not face", isCorrect: false },
      { option: "is not facing", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả đang diễn ra ở hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1060",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Identifying the core reason for a successful expansion.",
    contextVi: "Xác định lý do cốt lõi của việc mở rộng thành công.",
    questionEn:
      "It was their exceptional ability to adapt to local customs ____ allowed the firm to succeed in the Middle Eastern market.",
    questionVi:
      "Chính khả năng thích nghi đặc biệt với các phong tục địa phương của họ ____ đã cho phép công ty thành công tại thị trường Trung Đông.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh nguyên nhân: It + be + N + that.",
    category: "Structure",
  },
  {
    id: "C2-1061",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Formal reference in a technical document.",
    contextVi: "Tham chiếu trang trọng trong một văn bản kỹ thuật.",
    questionEn:
      "The white paper discusses several emerging technologies, the long-term impact of ____ remains highly speculative.",
    questionVi:
      "Sách trắng thảo luận về một số công nghệ mới nổi, tác động dài hạn của ____ vẫn còn mang tính suy đoán cao.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whose", isCorrect: false },
      { option: "them", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'which' sau cụm danh từ trong mệnh đề quan hệ không xác định để thay thế cho vật.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1062",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a projected industry trend.",
    contextVi: "Mô tả một xu hướng dự kiến của ngành.",
    questionEn:
      "The demand for skilled cybersecurity professionals ____ to grow exponentially over the next decade.",
    questionVi:
      "Nhu cầu về các chuyên gia bảo mật mạng có tay nghề ____ dự kiến sẽ tăng theo cấp số nhân trong thập kỷ tới.",
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
    id: "C2-1063",
    topicId: "comparison",
    questionType: "grammar",
    contextEn:
      "Describing a proportional relationship between scale and efficiency.",
    contextVi: "Mô tả mối quan hệ tỷ lệ thuận giữa quy mô và hiệu quả.",
    questionEn:
      "The larger the economies of scale, ____ the per-unit cost of production becomes.",
    questionVi:
      "Lợi thế kinh tế theo quy mô càng lớn, chi phí sản xuất trên mỗi đơn vị ____.",
    options: [
      { option: "the lower", isCorrect: true },
      { option: "lower", isCorrect: false },
      { option: "the most low", isCorrect: false },
      { option: "more lowly", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc so sánh kép (The + comparative, the + comparative).",
    category: "Comparison",
  },
  {
    id: "C2-1064",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Stating a condition for eligibility for a grant.",
    contextVi: "Nêu điều kiện đủ tư cách nhận một khoản tài trợ.",
    questionEn:
      "Eligibility for the research grant is strictly contingent ____ providing a detailed breakdown of the proposed budget.",
    questionVi:
      "Việc đủ điều kiện nhận tài trợ nghiên cứu phụ thuộc hoàn toàn ____ vào việc cung cấp bản kê khai chi tiết ngân sách đề xuất.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "for", isCorrect: false },
      { option: "with", isCorrect: false },
    ],
    explanationVi: "Cụm tính từ đi với giới từ 'contingent on/upon'.",
    category: "Prepositions",
  },
  {
    id: "C2-1065",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a situation.",
    contextVi: "Xác định tính chất của một tình huống.",
    questionEn:
      "The current geopolitical climate is extremely ____ and requires a cautious approach to international investment.",
    questionVi:
      "Khí hậu địa chính trị hiện nay cực kỳ ____ và đòi hỏi một cách tiếp cận thận trọng đối với đầu tư quốc tế.",
    options: [
      { option: "volatile", isCorrect: true },
      { option: "volatility", isCorrect: false },
      { option: "volatilize", isCorrect: false },
      { option: "volatilization", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho chủ ngữ 'climate'.",
    category: "Word Forms",
  },
  {
    id: "C2-1066",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "Under no circumstances ____ any employee be allowed to share sensitive customer data with third-party vendors without prior authorization.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một nhân viên nào ____ được phép chia sẻ dữ liệu khách hàng nhạy cảm với các nhà cung cấp bên thứ ba mà không có sự cho phép trước.",
    options: [
      { option: "shall", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "must", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'Under no circumstances' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1067",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Discussing a challenge in management.",
    contextVi: "Thảo luận về một thách thức trong quản lý.",
    questionEn:
      "____ an effective balance between corporate social responsibility and profitability is a key priority for the new CEO.",
    questionVi:
      "____ sự cân bằng hiệu quả giữa trách nhiệm xã hội của doanh nghiệp và lợi nhuận là ưu tiên chính của vị CEO mới.",
    options: [
      { option: "Achieving", isCorrect: true },
      { option: "Achieve", isCorrect: false },
      { option: "To be achieved", isCorrect: false },
      { option: "Having achieved", isCorrect: false },
    ],
    explanationVi: "Sử dụng danh động từ (Gerund) làm chủ ngữ.",
    category: "Gerunds",
  },
  {
    id: "C2-1068",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Speculating with high certainty about a past situation.",
    contextVi: "Dự đoán với độ chắc chắn cao về một tình huống trong quá khứ.",
    questionEn:
      "The board ____ been aware of the potential risks long before the project was actually launched.",
    questionVi:
      "Ban điều hành ____ chắc chắn đã biết về những rủi ro tiềm ẩn từ lâu trước khi dự án thực sự được khởi xướng.",
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
    id: "C2-1069",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Expressing a nuanced concession in a business report.",
    contextVi: "Diễn đạt một sự nhượng bộ tinh tế trong báo cáo kinh doanh.",
    questionEn:
      "____ the recent market fluctuations, our firm has maintained a steady growth trajectory throughout the year.",
    questionVi:
      "____ những biến động thị trường gần đây, công ty chúng tôi vẫn duy trì quỹ đạo tăng trưởng ổn định trong suốt cả năm.",
    options: [
      { option: "Notwithstanding", isCorrect: true },
      { option: "Although", isCorrect: false },
      { option: "Despite of", isCorrect: false },
      { option: "However", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'Notwithstanding' (bất chấp/mặc dù) làm giới từ trước cụm danh từ.",
    category: "Conjunctions",
  },
  {
    id: "C2-1070",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an urgent requirement from a committee.",
    contextVi: "Báo cáo một yêu cầu khẩn cấp từ một ủy ban.",
    questionEn:
      "The steering committee recommended that the project ____ terminated immediately due to budget overruns.",
    questionVi:
      "Ủy ban điều hành đã khuyến nghị rằng dự án ____ dừng lại ngay lập tức do vượt quá ngân sách.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "been", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) ở dạng bị động : recommend that + S + be + P2.",
    category: "Subjunctive",
  },
  {
    id: "C2-1071",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Adding information with a complex relative clause.",
    contextVi: "Thêm thông tin bằng mệnh đề quan hệ phức tạp.",
    questionEn:
      "The merger involves several complex legal entities, many of ____ are based in offshore jurisdictions.",
    questionVi:
      "Vụ sáp nhập liên quan đến một số pháp nhân phức tạp, nhiều ____ trong số đó có trụ sở tại các khu vực pháp lý ngoài khơi.",
    options: [
      { option: "which", isCorrect: true },
      { option: "that", isCorrect: false },
      { option: "whom", isCorrect: false },
      { option: "what", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'which' sau từ định lượng (many of) để thay thế cho danh từ chỉ vật/pháp nhân trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1072",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing immediate reaction in a professional setting.",
    contextVi: "Nhấn mạnh phản ứng ngay lập tức trong bối cảnh chuyên nghiệp.",
    questionEn:
      "No sooner ____ the new CEO taken office than he initiated a series of radical organizational reforms.",
    questionVi:
      "Vị CEO mới vừa nhận chức ____ thì ông ấy đã bắt đầu một loạt các cuộc cải cách tổ chức triệt để.",
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
    id: "C2-1073",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Stating a critical requirement for a process.",
    contextVi: "Nêu một yêu cầu quan trọng cho một quy trình.",
    questionEn:
      "It is imperative that every proposal ____ carefully vetted by the legal department before being submitted to the board.",
    questionVi:
      "Điều cấp thiết là mọi đề xuất ____ được bộ phận pháp lý kiểm tra kỹ lưỡng trước khi trình ban giám đốc.",
    options: [
      { option: "be", isCorrect: true },
      { option: "is", isCorrect: false },
      { option: "was", isCorrect: false },
      { option: "being", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) ở dạng bị động sau tính từ 'imperative'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1074",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state leading to a choice.",
    contextVi: "Mô tả một trạng thái dẫn đến một sự lựa chọn.",
    questionEn:
      "____ by the ongoing volatility in the domestic market, the company decided to focus more on international expansion.",
    questionVi:
      "____ bởi sự biến động đang diễn ra ở thị trường trong nước, công ty đã quyết định tập trung nhiều hơn vào việc mở rộng quốc tế.",
    options: [
      { option: "Unsettled", isCorrect: true },
      { option: "Unsettling", isCorrect: false },
      { option: "To be unsettled", isCorrect: false },
      { option: "Having unsettled", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng quá khứ phân từ làm mệnh đề rút gọn chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1075",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical past event and its current impact.",
    contextVi:
      "Thảo luận về một sự kiện giả định trong quá khứ và tác động hiện tại của nó.",
    questionEn:
      "If the firm had not invested heavily in R&D, it ____ its current competitive edge in the global market.",
    questionVi:
      "Nếu công ty không đầu tư mạnh vào R&D, họ ____ đã không có được lợi thế cạnh tranh như hiện nay trên thị trường toàn cầu.",
    options: [
      { option: "would not possess", isCorrect: true },
      { option: "would not have possessed", isCorrect: false },
      { option: "will not possess", isCorrect: false },
      { option: "is not possessing", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1076",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Identifying the precise reason for a success.",
    contextVi: "Xác định lý do chính xác mang lại thành công.",
    questionEn:
      "It was exactly this innovative approach to customer service ____ set the startup apart from its established competitors.",
    questionVi:
      "Chính xác là cách tiếp cận sáng tạo trong dịch vụ khách hàng này ____ đã làm cho công ty khởi nghiệp khác biệt so với các đối thủ cạnh tranh lâu đời.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh nguyên nhân: It + be + N + that.",
    category: "Structure",
  },
  {
    id: "C2-1077",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "On no account ____ any unauthorized person gain access to the company's proprietary data repository.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một cá nhân không có thẩm quyền nào ____ được quyền truy cập vào kho dữ liệu độc quyền của công ty.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "shall", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1078",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting an essential requirement for a role.",
    contextVi: "Báo cáo một yêu cầu thiết yếu cho một vai trò.",
    questionEn:
      "It is essential that a successful candidate ____ outstanding communication and leadership skills.",
    questionVi:
      "Điều thiết yếu là một ứng viên thành công ____ các kỹ năng lãnh đạo và giao tiếp xuất sắc.",
    options: [
      { option: "possess", isCorrect: true },
      { option: "possesses", isCorrect: false },
      { option: "possessed", isCorrect: false },
      { option: "possessing", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định (Subjunctive) sau tính từ 'essential'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1079",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to a major decision.",
    contextVi: "Mô tả một trạng thái dẫn đến một quyết định lớn.",
    questionEn:
      "____ by the unexpected shift in consumer behavior, the marketing department decided to completely revamp its strategy.",
    questionVi:
      "____ bởi sự thay đổi bất ngờ trong hành vi người tiêu dùng, bộ phận tiếp thị đã quyết định cải tổ hoàn toàn chiến lược của mình.",
    options: [
      { option: "Surprised", isCorrect: true },
      { option: "Surprising", isCorrect: false },
      { option: "To be surprised", isCorrect: false },
      { option: "Having surprised", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng quá khứ phân từ làm mệnh đề rút gọn chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1080",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Discussing a hypothetical past event and its current impact.",
    contextVi:
      "Thảo luận về một sự kiện giả định trong quá khứ và tác động hiện tại của nó.",
    questionEn:
      "If the company had anticipated the decline in demand, it ____ such large amounts of unsold inventory today.",
    questionVi:
      "Nếu công ty lường trước được sự sụt giảm nhu cầu, họ ____ đã không phải nắm giữ lượng lớn hàng tồn kho chưa bán được như hiện nay.",
    options: [
      { option: "would not be holding", isCorrect: true },
      { option: "would not have held", isCorrect: false },
      { option: "will not hold", isCorrect: false },
      { option: "is not holding", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả đang diễn ra ở hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1081",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal business contract.",
    contextVi: "Nhấn mạnh một hạn chế trong hợp đồng kinh doanh trang trọng.",
    questionEn:
      "Not until the arbitration process reached its final stage ____ the parties involved agree to a settlement.",
    questionVi:
      "Mãi cho đến khi quy trình trọng tài đạt đến giai đoạn cuối cùng ____ các bên liên quan mới đồng ý thỏa thuận.",
    options: [
      { option: "did", isCorrect: true },
      { option: "do", isCorrect: false },
      { option: "had", isCorrect: false },
      { option: "has", isCorrect: false },
    ],
    explanationVi: "Đảo ngữ với 'Not until' (Mãi cho đến khi... thì mới...).",
    category: "Inversion",
  },
  {
    id: "C2-1082",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn:
      "Reporting an advisory recommendation for corporate restructuring.",
    contextVi:
      "Báo cáo một khuyến nghị tư vấn cho việc tái cơ cấu doanh nghiệp.",
    questionEn:
      "The management consultant recommended that the company ____ its entire supply chain to mitigate geopolitical risks.",
    questionVi:
      "Cố vấn quản lý đã khuyến nghị rằng công ty ____ lại toàn bộ chuỗi cung ứng của mình để giảm thiểu rủi ro địa chính trị.",
    options: [
      { option: "overhaul", isCorrect: true },
      { option: "overhauls", isCorrect: false },
      { option: "overhauled", isCorrect: false },
      { option: "overhauling", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'recommend that'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1083",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a concurrent state with an action.",
    contextVi: "Mô tả một trạng thái đồng thời với một hành động.",
    questionEn:
      "____ for a significant increase in market share, the electronics firm launched a multi-million dollar advertising campaign.",
    questionVi:
      "____ mong sự gia tăng đáng kể về thị phần, công ty điện tử đã khởi động một chiến dịch quảng cáo trị giá hàng triệu đô la.",
    options: [
      { option: "Striving", isCorrect: true },
      { option: "Strived", isCorrect: false },
      { option: "To strive", isCorrect: false },
      { option: "Having strived", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng hiện tại phân từ (V-ing) để chỉ mục đích hoặc trạng thái đồng thời.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1084",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn:
      "Discussing a past decision with current financial repercussions.",
    contextVi:
      "Thảo luận về một quyết định quá khứ có hệ quả tài chính hiện tại.",
    questionEn:
      "If the government had not intervened with a bailout package, the national carrier ____ bankrupt by now.",
    questionVi:
      "Nếu chính phủ không can thiệp bằng một gói cứu trợ, hãng hàng không quốc gia ____ đã phá sản vào lúc này.",
    options: [
      { option: "would be", isCorrect: true },
      { option: "would have been", isCorrect: false },
      { option: "will not be", isCorrect: false },
      { option: "is not", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (If + quá khứ hoàn thành, S + would/could + V-inf).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1085",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn:
      "Focusing on the specific person responsible for an achievement.",
    contextVi:
      "Tập trung vào một người cụ thể chịu trách nhiệm cho một thành tựu.",
    questionEn:
      "It was through his meticulous attention to detail ____ the lead architect ensured the project's structural integrity.",
    questionVi:
      "Chính nhờ sự chú ý tỉ mỉ đến từng chi tiết của ông ấy ____ mà kiến trúc sư trưởng đã đảm bảo được tính toàn vẹn về cấu trúc của dự án.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh phương thức: It was through... that...",
    category: "Structure",
  },
  {
    id: "C2-1086",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn:
      "Adding information with a complex relative clause in a formal report.",
    contextVi:
      "Thêm thông tin bằng mệnh đề quan hệ phức tạp trong một báo cáo trang trọng.",
    questionEn:
      "The CEO addressed the shareholders, many of ____ expressed concerns regarding the company's environmental footprint.",
    questionVi:
      "CEO đã phát biểu trước các cổ đông, nhiều ____ trong số họ bày tỏ lo ngại về dấu chân môi trường của công ty.",
    options: [
      { option: "whom", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "that", isCorrect: false },
      { option: "which", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whom' sau từ định lượng (many of) làm tân ngữ cho người trong mệnh đề quan hệ không xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1087",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Describing a common perception in the business world.",
    contextVi: "Mô tả một nhận thức phổ biến trong giới kinh doanh.",
    questionEn:
      "Entrepreneurship ____ as a high-risk, high-reward endeavor by most financial analysts.",
    questionVi:
      "Khởi nghiệp ____ được coi là một nỗ lực có rủi ro cao, lợi nhuận cao bởi hầu hết các nhà phân tích tài chính.",
    options: [
      { option: "is widely viewed", isCorrect: true },
      { option: "is widely viewing", isCorrect: false },
      { option: "has widely viewed", isCorrect: false },
      { option: "widely views", isCorrect: false },
    ],
    explanationVi:
      "Thì hiện tại đơn bị động (am/is/are + P2) với trạng từ chỉ mức độ phổ biến.",
    category: "Passive Voice",
  },
  {
    id: "C2-1088",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing professional efficiency in two different scenarios.",
    contextVi: "So sánh hiệu quả chuyên môn trong hai kịch bản khác nhau.",
    questionEn:
      "The new automation system works ____ more efficiently than the manual processes it replaced.",
    questionVi:
      "Hệ thống tự động hóa mới hoạt động ____ hiệu quả hơn nhiều so với các quy trình thủ công mà nó thay thế.",
    options: [
      { option: "infinitely", isCorrect: true },
      { option: "infinite", isCorrect: false },
      { option: "most infinite", isCorrect: false },
      { option: "so infinite", isCorrect: false },
    ],
    explanationVi:
      "Cần một trạng từ (Adv) để nhấn mạnh sự so sánh hơn của một trạng từ khác.",
    category: "Comparison",
  },
  {
    id: "C2-1089",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Expressing a condition for professional advancement.",
    contextVi: "Diễn đạt một điều kiện để thăng tiến nghề nghiệp.",
    questionEn:
      "Promotion to a senior management level is often dependent ____ a candidate's ability to demonstrate strategic vision.",
    questionVi:
      "Việc thăng tiến lên cấp quản lý cấp cao thường phụ thuộc ____ vào khả năng thể hiện tầm nhìn chiến lược của ứng viên.",
    options: [
      { option: "upon", isCorrect: true },
      { option: "to", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "for", isCorrect: false },
    ],
    explanationVi: "Cụm tính từ đi với giới từ 'dependent on/upon'.",
    category: "Prepositions",
  },
  {
    id: "C2-1090",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a specific quality of a legal argument.",
    contextVi: "Xác định một chất lượng cụ thể của một lập luận pháp lý.",
    questionEn:
      "The legal counsel provided a highly ____ and persuasive argument in favor of the defendant.",
    questionVi:
      "Cố vấn pháp lý đã đưa ra một lập luận cực kỳ ____ và đầy thuyết phục có lợi cho bị cáo.",
    options: [
      { option: "coherent", isCorrect: true },
      { option: "coherence", isCorrect: false },
      { option: "coherently", isCorrect: false },
      { option: "cohereness", isCorrect: false },
    ],
    explanationVi: "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'argument'.",
    category: "Word Forms",
  },
  {
    id: "C2-1091",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in a formal company policy.",
    contextVi: "Nhấn mạnh một hạn chế trong chính sách công ty trang trọng.",
    questionEn:
      "Seldom ____ such a high level of cooperation between rival firms in the pharmaceutical industry.",
    questionVi:
      "Hiếm khi ____ thấy mức độ hợp tác cao như vậy giữa các công ty đối thủ trong ngành dược phẩm.",
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
    id: "C2-1092",
    topicId: "gerunds",
    questionType: "grammar",
    contextEn: "Identifying a complex task as a subject.",
    contextVi: "Xác định một nhiệm vụ phức tạp làm chủ ngữ.",
    questionEn:
      "____ an effective balance between professional obligations and personal well-being is a constant struggle for many executives.",
    questionVi:
      "____ sự cân bằng hiệu quả giữa các nghĩa vụ nghề nghiệp và hạnh phúc cá nhân là một cuộc đấu tranh không ngừng đối với nhiều giám đốc điều hành.",
    options: [
      { option: "Striking", isCorrect: true },
      { option: "To be struck", isCorrect: false },
      { option: "Having struck", isCorrect: false },
      { option: "Strike", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng danh động từ (Gerund) 'Striking a balance' làm chủ ngữ.",
    category: "Gerunds",
  },
  {
    id: "C2-1093",
    topicId: "modals",
    questionType: "grammar",
    contextEn: "Suggesting a past obligation that was not fulfilled.",
    contextVi: "Đề xuất một nghĩa vụ trong quá khứ đã không được thực hiện.",
    questionEn:
      "The company ____ conducted a more thorough market analysis before launching such a specialized product.",
    questionVi:
      "Công ty ____ lẽ ra nên thực hiện một phân tích thị trường kỹ lưỡng hơn trước khi tung ra một sản phẩm chuyên dụng như vậy.",
    options: [
      { option: "should have", isCorrect: true },
      { option: "must have", isCorrect: false },
      { option: "could have", isCorrect: false },
      { option: "might have", isCorrect: false },
    ],
    explanationVi:
      "Dùng 'should have + V3/ed' để chỉ một hành động lẽ ra nên làm trong quá khứ nhưng thực tế đã không làm.",
    category: "Modals",
  },
  {
    id: "C2-1094",
    topicId: "conjunctions",
    questionType: "grammar",
    contextEn: "Showing a strong contrast between two corporate strategies.",
    contextVi:
      "Thể hiện sự tương phản mạnh mẽ giữa hai chiến lược của doanh nghiệp.",
    questionEn:
      "Company A focused on rapid expansion, ____ Company B prioritized long-term sustainability and organic growth.",
    questionVi:
      "Công ty A tập trung vào việc mở rộng nhanh chóng, ____ trong khi đó Công ty B ưu tiên sự bền vững lâu dài và tăng trưởng hữu cơ.",
    options: [
      { option: "whereas", isCorrect: true },
      { option: "consequently", isCorrect: false },
      { option: "moreover", isCorrect: false },
      { option: "nonetheless", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whereas' (trong khi đó) để thể hiện sự tương phản giữa hai sự việc.",
    category: "Conjunctions",
  },
  {
    id: "C2-1095",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Reporting a formal recommendation in a business meeting.",
    contextVi:
      "Báo cáo một khuyến nghị chính thức trong một cuộc họp kinh doanh.",
    questionEn:
      "The marketing director suggested that the team ____ a more targeted approach to reach high-net-worth individuals.",
    questionVi:
      "Giám đốc tiếp thị đề xuất rằng nhóm ____ một cách tiếp cận tập trung hơn để tiếp cận những cá nhân có giá trị tài sản ròng cao.",
    options: [
      { option: "adopt", isCorrect: true },
      { option: "adopts", isCorrect: false },
      { option: "adopted", isCorrect: false },
      { option: "adopting", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc giả định (Subjunctive) sau động từ 'suggest that + S + V (nguyên mẫu)'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1096",
    topicId: "relative-clauses",
    questionType: "grammar",
    contextEn: "Restricting information to a specific group.",
    contextVi: "Hạn chế thông tin cho một nhóm cụ thể.",
    questionEn:
      "Candidates ____ experience in emerging markets will be given preferential consideration for the international assignment.",
    questionVi:
      "Các ứng viên ____ có kinh nghiệm tại các thị trường mới nổi sẽ được ưu tiên xem xét cho nhiệm vụ quốc tế.",
    options: [
      { option: "whose", isCorrect: true },
      { option: "who", isCorrect: false },
      { option: "which", isCorrect: false },
      { option: "whom", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng 'whose' để thay thế cho tính từ sở hữu trong mệnh đề quan hệ xác định.",
    category: "Relative Clauses",
  },
  {
    id: "C2-1097",
    topicId: "passive-voice",
    questionType: "grammar",
    contextEn: "Stating a condition for specialized knowledge access.",
    contextVi: "Nêu điều kiện để tiếp cận kiến thức chuyên môn.",
    questionEn:
      "The details of the proprietary algorithm ____ to remain confidential for a period of ten years.",
    questionVi:
      "Các chi tiết của thuật toán độc quyền ____ được yêu cầu phải giữ bí mật trong thời gian mười năm.",
    options: [
      { option: "are required", isCorrect: true },
      { option: "are requiring", isCorrect: false },
      { option: "require", isCorrect: false },
      { option: "have required", isCorrect: false },
    ],
    explanationVi: "Câu bị động ở thì hiện tại đơn (am/is/are + P2).",
    category: "Passive Voice",
  },
  {
    id: "C2-1098",
    topicId: "comparison",
    questionType: "grammar",
    contextEn: "Comparing the complexity of two legal cases.",
    contextVi: "So sánh mức độ phức tạp của hai vụ án pháp lý.",
    questionEn:
      "The current antitrust case is significantly ____ more complex than the previous litigation against the same corporation.",
    questionVi:
      "Vụ kiện chống độc quyền hiện tại ____ phức tạp hơn đáng kể so với vụ kiện tụng trước đó đối với cùng một tập đoàn.",
    options: [
      { option: "far", isCorrect: true },
      { option: "very", isCorrect: false },
      { option: "more", isCorrect: false },
      { option: "most", isCorrect: false },
    ],
    explanationVi: "Dùng 'far' hoặc 'much' để nhấn mạnh sự so sánh hơn.",
    category: "Comparison",
  },
  {
    id: "C2-1099",
    topicId: "prepositions",
    questionType: "grammar",
    contextEn: "Exempting a group from a standard requirement.",
    contextVi: "Miễn cho một nhóm khỏi một yêu cầu tiêu chuẩn.",
    questionEn:
      "Employees with over twenty years of service are exempt ____ the mandatory annual training sessions.",
    questionVi:
      "Nhân viên có trên hai mươi năm công tác được miễn ____ các buổi đào tạo hàng năm bắt buộc.",
    options: [
      { option: "from", isCorrect: true },
      { option: "with", isCorrect: false },
      { option: "at", isCorrect: false },
      { option: "to", isCorrect: false },
    ],
    explanationVi: "Cụm tính từ đi với giới từ 'exempt from'.",
    category: "Prepositions",
  },
  {
    id: "C2-1100",
    topicId: "word-form",
    questionType: "structure",
    contextEn: "Identifying a quality of a corporate culture.",
    contextVi: "Xác định tính chất của văn hóa doanh nghiệp.",
    questionEn:
      "The company fosters a highly ____ and innovative environment that encourages out-of-the-box thinking.",
    questionVi:
      "Công ty thúc đẩy một môi trường năng động và ____ sáng tạo cao, khuyến khích tư duy đột phá.",
    options: [
      { option: "collaborative", isCorrect: true },
      { option: "collaborate", isCorrect: false },
      { option: "collaboration", isCorrect: false },
      { option: "collaboratively", isCorrect: false },
    ],
    explanationVi:
      "Cần một tính từ (Adj) để bổ nghĩa cho danh từ 'environment'.",
    category: "Word Forms",
  },
  {
    id: "C2-1101",
    topicId: "inversion",
    questionType: "grammar",
    contextEn: "Emphasizing a restriction in formal guidelines.",
    contextVi: "Nhấn mạnh một hạn chế trong hướng dẫn trang trọng.",
    questionEn:
      "On no account ____ any unauthorized personnel gain access to the secure data repository.",
    questionVi:
      "Trong bất kỳ hoàn cảnh nào, không một nhân viên không có thẩm quyền nào ____ được quyền truy cập vào kho lưu trữ dữ liệu an toàn.",
    options: [
      { option: "must", isCorrect: true },
      { option: "should", isCorrect: true },
      { option: "shall", isCorrect: true },
      { option: "will", isCorrect: false },
    ],
    explanationVi:
      "Đảo ngữ với 'On no account' (Trong bất kỳ hoàn cảnh nào cũng không).",
    category: "Inversion",
  },
  {
    id: "C2-1102",
    topicId: "subjunctive",
    questionType: "grammar",
    contextEn: "Identifying an essential attribute for a leader.",
    contextVi: "Xác định một thuộc tính thiết yếu đối với một nhà lãnh đạo.",
    questionEn:
      "It is essential that a leader ____ a high degree of emotional intelligence to effectively manage a diverse team.",
    questionVi:
      "Điều thiết yếu là một nhà lãnh đạo ____ mức độ trí tuệ cảm xúc cao để quản lý hiệu quả một nhóm đa dạng.",
    options: [
      { option: "possess", isCorrect: true },
      { option: "possesses", isCorrect: false },
      { option: "possessed", isCorrect: false },
      { option: "possessing", isCorrect: false },
    ],
    explanationVi: "Cấu trúc giả định (Subjunctive) sau tính từ 'essential'.",
    category: "Subjunctive",
  },
  {
    id: "C2-1103",
    topicId: "participle-clauses",
    questionType: "grammar",
    contextEn: "Describing a state that led to an action in business.",
    contextVi: "Mô tả một trạng thái dẫn đến một hành động trong kinh doanh.",
    questionEn:
      "____ by the lack of transparency in the financial reports, the investors withdrew their support for the merger.",
    questionVi:
      "____ bởi sự thiếu minh bạch trong các báo cáo tài chính, các nhà đầu tư đã rút lại sự ủng hộ của họ đối với vụ sáp nhập.",
    options: [
      { option: "Disheartened", isCorrect: true },
      { option: "Disheartening", isCorrect: false },
      { option: "To be disheartened", isCorrect: false },
      { option: "Having disheartened", isCorrect: false },
    ],
    explanationVi:
      "Sử dụng quá khứ phân từ làm mệnh đề rút gọn để chỉ nguyên nhân mang nghĩa bị động.",
    category: "Participle Clauses",
  },
  {
    id: "C2-1104",
    topicId: "mixed-conditionals",
    questionType: "grammar",
    contextEn: "Analyzing a past failure's impact on the current situation.",
    contextVi:
      "Phân tích tác động của một thất bại trong quá khứ đối với tình hình hiện tại.",
    questionEn:
      "If we had invested more in digital transformation years ago, we ____ such a significant disadvantage today.",
    questionVi:
      "Nếu chúng ta đầu tư nhiều hơn vào chuyển đổi số từ nhiều năm trước, chúng ta ____ đã không ở trong tình thế bất lợi đáng kể như hiện nay.",
    options: [
      { option: "would not be at", isCorrect: true },
      { option: "would not have been at", isCorrect: false },
      { option: "will not be at", isCorrect: false },
      { option: "is not at", isCorrect: false },
    ],
    explanationVi:
      "Câu điều kiện hỗn hợp (giả định quá khứ, kết quả hiện tại).",
    category: "Mixed Conditionals",
  },
  {
    id: "C2-1105",
    topicId: "cleft-sentences",
    questionType: "structure",
    contextEn: "Identifying the precise reason for a market shift.",
    contextVi: "Xác định lý do chính xác cho một sự thay đổi thị trường.",
    questionEn:
      "It was exactly this shift in consumer mentality ____ the marketing team failed to anticipate in their annual forecast.",
    questionVi:
      "Chính xác là sự thay đổi trong tâm lý người tiêu dùng này ____ mà nhóm tiếp thị đã không lường trước được trong dự báo hàng năm của họ.",
    options: [
      { option: "that", isCorrect: true },
      { option: "which", isCorrect: false },
      { option: "when", isCorrect: false },
      { option: "who", isCorrect: false },
    ],
    explanationVi:
      "Cấu trúc câu chẻ (Cleft sentence) nhấn mạnh đối tượng: It was + N + that...",
    category: "Structure",
  },
];

export default questions;
