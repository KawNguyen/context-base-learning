export interface ImageQuestion {
  id: number;
  imageUrl: string;
  options: {
    option: string;
    isCorrect: boolean;
  }[];
  explanationVi: string;
}

export const imageQuestions: ImageQuestion[] = [
  {
    id: 1,
    imageUrl: "/images/describe-picture/unified/1.png",
    options: [
      { option: "He is sleeping on the table.", isCorrect: false },
      { option: "He is eating a sandwich.", isCorrect: true },
      { option: "He is washing the floor.", isCorrect: false },
      { option: "He is fixing the light.", isCorrect: false },
    ],
    explanationVi:
      "Bức tranh cho thấy một người đang ngồi tại bàn và ăn bánh mì sandwich.",
  },
  {
    id: 2,
    imageUrl: "/images/describe-picture/unified/2.png",
    options: [
      { option: "He is at the hospital.", isCorrect: false },
      { option: "He is in the garden.", isCorrect: false },
      { option: "He is in the library.", isCorrect: true },
      { option: "He is at the swimming pool.", isCorrect: false },
    ],
    explanationVi:
      "Bối cảnh xung quanh là các giá sách, cho thấy người này đang ở trong thư viện.",
  },
  {
    id: 3,
    imageUrl: "/images/describe-picture/unified/3.png",
    options: [
      { option: "He is running a marathon.", isCorrect: false },
      { option: "He is walking his dog.", isCorrect: true },
      { option: "He is planting a tree.", isCorrect: false },
      { option: "He is playing football alone.", isCorrect: false },
    ],
    explanationVi:
      "Trong ảnh, người đàn ông đang dắt chó đi dạo trên lối đi trong công viên.",
  },
  {
    id: 4,
    imageUrl: "/images/describe-picture/unified/4.png",
    options: [
      { option: "A person is writing in a notebook.", isCorrect: false },
      { option: "A person is typing on a laptop.", isCorrect: true },
      { option: "A person is drawing a map.", isCorrect: false },
      { option: "A person is eating breakfast.", isCorrect: false },
    ],
    explanationVi:
      "Ảnh chụp cận cảnh đôi tay đang gõ phím trên một chiếc máy tính xách tay.",
  },
  {
    id: 5,
    imageUrl: "/images/describe-picture/unified/5.png",
    options: [
      { option: "She is watching television.", isCorrect: false },
      { option: "She is cooking in the kitchen.", isCorrect: true },
      { option: "She is taking a shower.", isCorrect: false },
      { option: "She is reading a newspaper.", isCorrect: false },
    ],
    explanationVi:
      "Người phụ nữ đang đứng bếp và dùng thìa gỗ khuấy thức ăn trong nồi.",
  },
  {
    id: 6,
    imageUrl: "/images/describe-picture/unified/6.png",
    options: [
      { option: "They are picking flowers.", isCorrect: false },
      { option: "They are watering the plants.", isCorrect: true },
      { option: "They are building a fence.", isCorrect: false },
      { option: "They are sitting on a bench.", isCorrect: false },
    ],
    explanationVi:
      "Người trong ảnh đang dùng bình tưới để tưới nước cho các chậu cây.",
  },
  {
    id: 7,
    imageUrl: "/images/describe-picture/unified/7.jpg",
    options: [
      { option: "He is playing in a park.", isCorrect: false },
      { option: "He is working in a warehouse.", isCorrect: true },
      { option: "He is swimming in a pool.", isCorrect: false },
      { option: "He is driving a bus.", isCorrect: false },
    ],
    explanationVi:
      "Ảnh cho thấy một thanh niên đang làm việc trong kho, sắp xếp các hộp trên kệ.",
  },
  {
    id: 8,
    imageUrl: "/images/describe-picture/unified/8.jpg",
    options: [
      { option: "The classroom is empty.", isCorrect: false },
      { option: "The teacher is talking to students.", isCorrect: true },
      { option: "The students are playing football.", isCorrect: false },
      { option: "The school is closed for the holiday.", isCorrect: false },
    ],
    explanationVi:
      "Trong ảnh, giáo viên đang đứng trước lớp và nói chuyện với các học sinh đang ngồi.",
  },
  {
    id: 9,
    imageUrl: "/images/describe-picture/unified/9.jpg",
    options: [
      { option: "They are eating lunch together.", isCorrect: false },
      { option: "They are reviewing building plans.", isCorrect: true },
      { option: "They are sleeping in the office.", isCorrect: false },
      { option: "They are watching a movie.", isCorrect: false },
    ],
    explanationVi:
      "Một nhóm người tập trung quanh bàn để xem xét bản vẽ thiết kế.",
  },
  {
    id: 10,
    imageUrl: "/images/describe-picture/unified/10.jpg",
    options: [
      { option: "A chef in a restaurant.", isCorrect: false },
      { option: "A security guard on duty.", isCorrect: true },
      { option: "A pilot at an airport.", isCorrect: false },
      { option: "A gardener in a park.", isCorrect: false },
    ],
    explanationVi:
      "Bức tranh cho thấy một nhân viên bảo vệ đang đứng gác tại một trạm kiểm soát hoặc lối vào.",
  },
  {
    id: 11,
    imageUrl: "/images/describe-picture/unified/11.jpg",
    options: [
      { option: "A hot bowl of soup.", isCorrect: false },
      { option: "An ice cream cone.", isCorrect: true },
      { option: "A cup of hot tea.", isCorrect: false },
      { option: "A plate of pasta.", isCorrect: false },
    ],
    explanationVi:
      "Bức ảnh cho thấy một người đang cầm hoặc phục vụ một cây kem ốc quế.",
  },
  {
    id: 12,
    imageUrl: "/images/describe-picture/unified/12.jpg",
    options: [
      { option: "A busy street in New York.", isCorrect: false },
      { option: "A canal with boats in Venice.", isCorrect: true },
      { option: "A desert with camels.", isCorrect: false },
      { option: "A snowy mountain top.", isCorrect: false },
    ],
    explanationVi:
      "Đây là cảnh tượng kênh đào đặc trưng của Venice với những chiếc thuyền gondola.",
  },
  {
    id: 13,
    imageUrl: "/images/describe-picture/unified/13.jpg",
    options: [
      { option: "The doctor is performing surgery.", isCorrect: false },
      {
        option: "The doctor is talking to an elderly patient.",
        isCorrect: true,
      },
      { option: "The patient is running a marathon.", isCorrect: false },
      { option: "The nurse is cleaning the windows.", isCorrect: false },
    ],
    explanationVi:
      "Ảnh cho thấy bác sĩ đang mỉm cười và trò chuyện với một bệnh nhân lớn tuổi.",
  },
  {
    id: 14,
    imageUrl: "/images/describe-picture/unified/14.jpg",
    options: [
      { option: "They are painting the chimney.", isCorrect: false },
      { option: "They are installing solar panels.", isCorrect: true },
      { option: "They are sleeping on the roof.", isCorrect: false },
      { option: "They are playing cards.", isCorrect: false },
    ],
    explanationVi:
      "Bức ảnh cho thấy các công nhân đang lắp đặt pin năng lượng mặt trời trên mái nhà.",
  },
  {
    id: 18,
    imageUrl: "/images/describe-picture/unified/18.jpg",
    options: [
      {
        option:
          "Tall modern buildings stand next to a wide road full of cars and buses.",
        isCorrect: false,
      },
      {
        option:
          "People are shopping in a crowded market street during the night.",
        isCorrect: false,
      },
      {
        option:
          "Colorful houses line both sides of a quiet canal, with small boats floating on the water.",
        isCorrect: true,
      },
      {
        option:
          "A large river flows through a forest with no buildings nearby.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Bức tranh cho thấy những ngôi nhà nhiều màu sắc nằm dọc hai bên kênh đào, với các chiếc thuyền nhỏ trên mặt nước. Các mô tả còn lại không phù hợp với bối cảnh trong hình.",
  },
  {
    id: 16,
    imageUrl: "/images/describe-picture/unified/16.jpg",
    options: [
      { option: "He is planting flowers by hand.", isCorrect: false },
      { option: "He is driving a tractor in the field.", isCorrect: true },
      { option: "He is selling vegetables at a market.", isCorrect: false },
      { option: "He is repairing a fence.", isCorrect: false },
    ],
    explanationVi:
      "Người nông dân đang lái máy kéo để làm việc trên cánh đồng.",
  },
  {
    id: 17,
    imageUrl: "/images/describe-picture/unified/17.jpg",
    options: [
      {
        option: "A family is walking together along the beach at sunset.",
        isCorrect: true,
      },
      {
        option: "A family is having a picnic in a park during the day.",
        isCorrect: false,
      },
      {
        option: "Two parents are watching their children swim in a pool.",
        isCorrect: false,
      },
      {
        option: "A group of tourists is taking photos near the mountains.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Bức ảnh mô tả một gia đình gồm bốn người đang cùng nhau đi bộ dọc theo bãi biển vào lúc hoàng hôn. Họ quay lưng về phía máy ảnh và nắm tay nhau, tạo cảm giác ấm áp và gắn kết. Ánh nắng vàng của buổi chiều tà phản chiếu trên mặt nước biển, cho thấy thời điểm trong ngày là gần tối. Không có dấu hiệu của việc dã ngoại, bơi lội hay du lịch leo núi trong hình, vì vậy chỉ có phương án nói về gia đình đi dạo trên bãi biển là đúng.",
  },
  {
    id: 19,
    imageUrl: "/images/describe-picture/unified/19.jpg",
    options: [
      {
        option:
          "A group of people are having a meeting and discussing work around a table.",
        isCorrect: true,
      },
      {
        option: "Students are taking an exam in a classroom.",
        isCorrect: false,
      },
      {
        option: "A family is having dinner together at home.",
        isCorrect: false,
      },
      {
        option: "People are exercising together in a gym.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Hình ảnh cho thấy một nhóm người đang ngồi quanh bàn làm việc, thảo luận và sử dụng laptop, phù hợp với bối cảnh một cuộc họp công việc.",
  },
  {
    id: 20,
    imageUrl: "/images/describe-picture/unified/20.jpg",
    options: [
      {
        option:
          "People are selling fresh vegetables at a traditional outdoor market.",
        isCorrect: true,
      },
      {
        option: "People are eating meals together in a restaurant.",
        isCorrect: false,
      },
      {
        option: "Workers are building houses at a construction site.",
        isCorrect: false,
      },
      {
        option: "Tourists are visiting a museum.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Hình ảnh cho thấy nhiều người đang ngồi bán rau củ tại một khu chợ truyền thống ngoài trời.",
  },
  {
    id: 21,
    imageUrl: "/images/describe-picture/unified/21.jpg",
    options: [
      {
        option:
          "Passengers are lining up at an airport check-in area with their luggage.",
        isCorrect: true,
      },
      {
        option: "People are waiting for a train at a railway station.",
        isCorrect: false,
      },
      {
        option: "Customers are shopping inside a large supermarket.",
        isCorrect: false,
      },
      {
        option: "Workers are cleaning an empty building.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Hình ảnh cho thấy nhiều hành khách đang xếp hàng làm thủ tục tại sân bay với vali và xe đẩy hành lý.",
  },
  {
    id: 22,
    imageUrl: "/images/describe-picture/unified/22.jpg",
    options: [
      {
        option:
          "A group of friends playing bowling at an entertainment center.",
        isCorrect: true,
      },
      {
        option: "A birthday party being held in a karaoke room.",
        isCorrect: false,
      },
      {
        option: "Professional bowlers competing in a tournament.",
        isCorrect: false,
      },
      {
        option: "A life skills class for teenagers.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Hình ảnh cho thấy bốn người trẻ đang vui vẻ tại một khu vực bowling. Một người phụ nữ đang tung quả bóng bowling màu xanh, trong khi ba người bạn của cô ấy đứng xung quanh, cổ vũ và cười đùa. Bối cảnh với các làn bowling, ghế ngồi và quả bóng trên sàn nhà đều cho thấy đây là một hoạt động giải trí, không phải một sự kiện chính thức hay lớp học.",
  },
  {
    id: 23,
    imageUrl: "/images/describe-picture/unified/23.jpg",
    options: [
      {
        option: "A woman is looking at several printed photographs.",
        isCorrect: true,
      },
      {
        option: "A photographer is taking pictures of a mountain landscape.",
        isCorrect: false,
      },
      {
        option: "A woman is organizing her digital photo gallery on a laptop.",
        isCorrect: false,
      },
      {
        option: "A group of people are posing for a professional photoshoot.",
        isCorrect: false,
      },
    ],
    explanationVi:
      "Hình ảnh mô tả một người phụ nữ nhìn từ góc độ trên cao xuống, cô đang cầm trên tay hai bức ảnh in và xung quanh có rất nhiều bức ảnh khác về các chủ đề như du lịch, phong cảnh và con người đang được trải rộng trên mặt bàn.",
  },
];
