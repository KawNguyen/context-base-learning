import { LevelListeningData } from "../types";

export const A1_LISTENING: LevelListeningData = {
    dictations: [
        {
            id: "a1-dict-1",
            title: "Simple Greeting",
            level: "A1",
            content: "Hello, my name is Tom and I am ten years old.",
            answer: "Hello, my name is Tom and I am ten years old.",
        },
        {
            id: "a1-dict-2",
            title: "Family Member",
            level: "A1",
            content: "I have one sister, her name is Lucy.",
            answer: "I have one sister, her name is Lucy.",
        },
        {
            id: "a1-dict-3",
            title: "School Subject",
            level: "A1",
            content: "My favorite subject is Art because I love to draw pictures.",
            answer: "My favorite subject is Art because I love to draw pictures.",
        },
        {
            id: "a1-dict-4",
            title: "Morning Habit",
            level: "A1",
            content: "I brush my teeth and wash my face every morning.",
            answer: "I brush my teeth and wash my face every morning.",
        },
        {
            id: "a1-dict-5",
            title: "Weather Today",
            level: "A1",
            content: "Today is a beautiful day with a bright blue sky.",
            answer: "Today is a beautiful day with a bright blue sky.",
        },
        {
            id: "a1-dict-6",
            title: "Lunch Meal",
            level: "A1",
            content: "I usually have a cheese sandwich and an apple for lunch.",
            answer: "I usually have a cheese sandwich and an apple for lunch.",
        },
        {
            id: "a1-dict-7",
            title: "Reading Time",
            level: "A1",
            content: "My sister loves to read funny stories before she goes to sleep.",
            answer: "My sister loves to read funny stories before she goes to sleep.",
        },
        {
            id: "a1-dict-8",
            title: "Weekend Trip",
            level: "A1",
            content: "On Saturdays, we often go to the big park near our house.",
            answer: "On Saturdays, we often go to the big park near our house.",
        },
        {
            id: "a1-dict-9",
            title: "Pet Dog",
            level: "A1",
            content: "We have a very cute pet dog named Max. He is black and white.",
            answer: "We have a very cute pet dog named Max. He is black and white.",
        },
        {
            id: "a1-dict-10",
            title: "Living Place",
            level: "A1",
            content: "London is a very big and busy city in England.",
            answer: "London is a very big and busy city in England.",
        },
        {
            id: "a1-dict-11",
            title: "Favorite Color",
            level: "A1",
            content: "My favorite color is red because it is bright and happy.",
            answer: "My favorite color is red because it is bright and happy.",
        },
        {
            id: "a1-dict-12",
            title: "Grandparents",
            level: "A1",
            content: "Sometimes we visit my grandparents in the countryside.",
            answer: "Sometimes we visit my grandparents in the countryside.",
        },
        {
            id: "a1-dict-13",
            title: "Best Friend",
            level: "A1",
            content: "My best friend is Sarah, she is a very kind and cheerful person.",
            answer: "My best friend is Sarah, she is a very kind and cheerful person.",
        },
        {
            id: "a1-dict-14",
            title: "Sports Activity",
            level: "A1",
            content: "I like to play football with my friends after school.",
            answer: "I like to play football with my friends after school.",
        },
        {
            id: "a1-dict-15",
            title: "School Start",
            level: "A1",
            content: "My school starts at eight am and ends at four pm.",
            answer: "My school starts at eight am and ends at four pm.",
        },
        {
            id: "a1-dict-16",
            title: "Drawing Hobby",
            level: "A1",
            content: "I have a big sketchbook where I draw animals and cars.",
            answer: "I have a big sketchbook where I draw animals and cars.",
        },
        {
            id: "a1-dict-17",
            title: "Breakfast Drinks",
            level: "A1",
            content: "I usually have a tall glass of fresh orange juice for breakfast.",
            answer: "I usually have a tall glass of fresh orange juice for breakfast.",
        },
        {
            id: "a1-dict-18",
            title: "Library Day",
            level: "A1",
            content: "She goes to the local library every Friday to borrow books.",
            answer: "She goes to the local library every Friday to borrow books.",
        },
        {
            id: "a1-dict-19",
            title: "Garden Flowers",
            level: "A1",
            content: "There are many red roses and yellow daisies in the garden.",
            answer: "There are many red roses and yellow daisies in the garden.",
        },
        {
            id: "a1-dict-20",
            title: "Future Job",
            level: "A1",
            content: "I want to be a doctor when I grow up to help sick people.",
            answer: "I want to be a doctor when I grow up to help sick people.",
        },
    ],
    comprehensions: [
        {
            id: "a1-comp-1",
            title: "Tom's Daily Life",
            level: "A1",
            content: "Hello, I am Tom. I am ten years old. I live in London. My house is small but cozy. I have one sister, Lucy. She is eight. We go to school at 8 am. I like Art, and she likes Reading. We have a pet dog named Max. Max is black and white.",
            transcript: "Hello, I am Tom. I am ten years old. I live in London. My house is small but cozy. I have one sister, Lucy. She is eight. We go to school at 8 am. I like Art, and she likes Reading. We have a pet dog named Max. Max is black and white.",
            questions: [
                {
                    question: "How old is Tom?",
                    options: ["Eight", "Nine", "Ten", "Eleven"],
                    correct: 2,
                    explanation: "In the passage: 'I am ten years old.'",
                },
                {
                    question: "Where does Tom live?",
                    options: ["Paris", "London", "New York", "Tokyo"],
                    correct: 1,
                    explanation: "In the passage: 'I live in London.'",
                },
                {
                    question: "How old is Lucy?",
                    options: ["Seven", "Eight", "Nine", "Ten"],
                    correct: 1,
                    explanation: "In the passage: 'She is eight.'",
                },
                {
                    question: "What time do they go to school?",
                    options: ["7 am", "8 am", "9 am", "10 am"],
                    correct: 1,
                    explanation: "In the passage: 'We go to school at 8 am.'",
                },
                {
                    question: "What is Tom's favorite subject?",
                    options: ["Maths", "Science", "Art", "Reading"],
                    correct: 2,
                    explanation: "In the passage: 'I like Art.'",
                },
                {
                    question: "What color is Max the dog?",
                    options: ["Brown", "Black", "Black and white", "White"],
                    correct: 2,
                    explanation: "In the passage: 'Max is black and white.'",
                },
            ],
        },
        {
            id: "a1-comp-2",
            title: "My Family Weekend",
            level: "A1",
            content: "Every Saturday, my family goes to the park. My father is a doctor. My mother is a teacher. We play football together. On Sunday, we visit our grandparents. They live in the countryside. My grandma makes sweet cakes. I love my family very much.",
            transcript: "Every Saturday, my family goes to the park. My father is a doctor. My mother is a teacher. We play football together. On Sunday, we visit our grandparents. They live in the countryside. My grandma makes sweet cakes. I love my family very much.",
            questions: [
                {
                    question: "When do they go to the park?",
                    options: ["Monday", "Friday", "Saturday", "Sunday"],
                    correct: 2,
                    explanation: "In the passage: 'Every Saturday, my family goes to the park.'",
                },
                {
                    question: "What is the father's job?",
                    options: ["Teacher", "Doctor", "Driver", "Farmer"],
                    correct: 1,
                    explanation: "In the passage: 'My father is a doctor.'",
                },
                {
                    question: "What do they play together?",
                    options: ["Tennis", "Football", "Basketball", "Swimming"],
                    correct: 1,
                    explanation: "In the passage: 'We play football together.'",
                },
                {
                    question: "Who do they visit on Sunday?",
                    options: ["Friends", "Aunty", "Grandparents", "Neighbors"],
                    correct: 2,
                    explanation: "In the passage: 'On Sunday, we visit our grandparents.'",
                },
                {
                    question: "Where do the grandparents live?",
                    options: ["In the city", "In London", "In the countryside", "At the park"],
                    correct: 2,
                    explanation: "In the passage: 'They live in the countryside.'",
                },
                {
                    question: "What does grandma make?",
                    options: ["Pizza", "Cakes", "Soup", "Bread"],
                    correct: 1,
                    explanation: "In the passage: 'My grandma makes sweet cakes.'",
                },
            ],
        },
        {
            id: "a1-comp-3",
            title: "Sarah, My Best Friend",
            level: "A1",
            content: "Sarah is my best friend. She is tall and thin. She has blonde hair. She is very funny. We play tennis every Saturday morning. We also like chocolate ice cream. Sarah likes reading adventure stories. I am happy to have her as a friend.",
            transcript: "Sarah is my best friend. She is tall and thin. She has blonde hair. She is very funny. We play tennis every Saturday morning. We also like chocolate ice cream. Sarah likes reading adventure stories. I am happy to have her as a friend.",
            questions: [
                {
                    question: "Who is Sarah?",
                    options: ["A sister", "A mother", "A teacher", "A best friend"],
                    correct: 3,
                    explanation: "In the passage: 'Sarah is my best friend.'",
                },
                {
                    question: "What does Sarah look like?",
                    options: ["Short and fat", "Tall and thin", "Short and thin", "Tall and fat"],
                    correct: 1,
                    explanation: "In the passage: 'She is tall and thin.'",
                },
                {
                    question: "What color is her hair?",
                    options: ["Black", "Brown", "Blonde", "Red"],
                    correct: 2,
                    explanation: "In the passage: 'She has blonde hair.'",
                },
                {
                    question: "What sport do they play?",
                    options: ["Football", "Tennis", "Basketball", "Golf"],
                    correct: 1,
                    explanation: "In the passage: 'We play tennis every Saturday morning.'",
                },
                {
                    question: "What flavor of ice cream do they like?",
                    options: ["Vanilla", "Strawberry", "Chocolate", "Mango"],
                    correct: 2,
                    explanation: "In the passage: 'We also like chocolate ice cream.'",
                },
                {
                    question: "What kind of stories does Sarah like?",
                    options: ["Horror", "History", "Adventure", "Science"],
                    correct: 2,
                    explanation: "In the passage: 'Sarah likes reading adventure stories.'",
                },
            ],
        },
        {
            id: "a1-comp-4",
            title: "My Cozy House",
            level: "A1",
            content: "My house is white with a red roof. It has two bedrooms and one kitchen. My bedroom has a big window. I can see the garden from my window. The garden has red roses and yellow flowers. My mother loves to cook in the kitchen. I feel very safe in my house.",
            transcript: "My house is white with a red roof. It has two bedrooms and one kitchen. My bedroom has a big window. I can see the garden from my window. The garden has red roses and yellow flowers. My mother loves to cook in the kitchen. I feel very safe in my house.",
            questions: [
                {
                    question: "What color is the house?",
                    options: ["Yellow", "Red", "White", "Blue"],
                    correct: 2,
                    explanation: "In the passage: 'My house is white...'",
                },
                {
                    question: "What color is the roof?",
                    options: ["Red", "Black", "Green", "White"],
                    correct: 0,
                    explanation: "In the passage: '...with a red roof.'",
                },
                {
                    question: "How many bedrooms are there?",
                    options: ["One", "Two", "Three", "Four"],
                    correct: 1,
                    explanation: "In the passage: 'It has two bedrooms...'",
                },
                {
                    question: "What can the person see from the window?",
                    options: ["A car", "The street", "The garden", "A school"],
                    correct: 2,
                    explanation: "In the passage: 'I can see the garden from my window.'",
                },
                {
                    question: "What flowers are in the garden?",
                    options: ["Lilies", "Red roses", "Sunflowers", "Tulips"],
                    correct: 1,
                    explanation: "In the passage: 'The garden has red roses...' ",
                },
                {
                    question: "Who loves to cook in the kitchen?",
                    options: ["The father", "The writer", "The mother", "The sister"],
                    correct: 2,
                    explanation: "In the passage: 'My mother loves to cook in the kitchen.'",
                }
            ]
        },
        {
            id: "a1-comp-5",
            title: "Morning Routine",
            level: "A1",
            content: "The alarm rings at six-thirty. I get up and wash my face. I brush my teeth with minty toothpaste. Then I put on my blue shirt. At seven o'clock, I eat breakfast. I have toast and a glass of milk. At seven-thirty, I go to the bus stop.",
            transcript: "The alarm rings at six-thirty. I get up and wash my face. I brush my teeth with minty toothpaste. Then I put on my blue shirt. At seven o'clock, I eat breakfast. I have toast and a glass of milk. At seven-thirty, I go to the bus stop.",
            questions: [
                {
                    question: "What time does the alarm ring?",
                    options: ["6:00", "6:30", "7:00", "7:30"],
                    correct: 1,
                    explanation: "In the passage: 'The alarm rings at six-thirty.'",
                },
                {
                    question: "What does the person do first?",
                    options: ["Eat breakfast", "Put on a shirt", "Wash face", "Go to bus stop"],
                    correct: 2,
                    explanation: "In the passage: 'I get up and wash my face.'",
                },
                {
                    question: "What color is the shirt?",
                    options: ["Red", "White", "Blue", "Black"],
                    correct: 2,
                    explanation: "In the passage: 'Then I put on my blue shirt.'",
                },
                {
                    question: "What time is breakfast?",
                    options: ["6:30", "7:00", "7:30", "8:00"],
                    correct: 1,
                    explanation: "In the passage: 'At seven o'clock, I eat breakfast.'",
                },
                {
                    question: "What does the person have for breakfast?",
                    options: ["Eggs", "Cereal", "Soup", "Toast and milk"],
                    correct: 3,
                    explanation: "In the passage: 'I have toast and a glass of milk.'",
                },
                {
                    question: "When does the person go to the bus stop?",
                    options: ["7:00", "7:30", "8:00", "8:30"],
                    correct: 1,
                    explanation: "In the passage: 'At seven-thirty, I go to the bus stop.'",
                }
            ]
        },
        {
            id: "a1-comp-6",
            title: "Luna, The Cat",
            level: "A1",
            content: "Luna is a white cat. She is very fluffy. She has big green eyes. Luna is very quiet. She likes to sleep on the sofa. Sometimes she plays with a toy mouse. Luna drinks fresh milk every morning. She does not like baths because she hates water.",
            transcript: "Luna is a white cat. She is very fluffy. She has big green eyes. Luna is very quiet. She likes to sleep on the sofa. Sometimes she plays with a toy mouse. Luna drinks fresh milk every morning. She does not like baths because she hates water.",
            questions: [
                {
                    question: "What kind of animal is Luna?",
                    options: ["A dog", "A cat", "A rabbit", "A bird"],
                    correct: 1,
                    explanation: "In the passage: 'Luna is a white cat.'",
                },
                {
                    question: "What color is Luna?",
                    options: ["Black", "Brown", "White", "Grey"],
                    correct: 2,
                    explanation: "In the passage: 'Luna is a white cat.'",
                },
                {
                    question: "What color are her eyes?",
                    options: ["Blue", "Green", "Yellow", "Brown"],
                    correct: 1,
                    explanation: "In the passage: 'She has big green eyes.'",
                },
                {
                    question: "Where does she like to sleep?",
                    options: ["In a bed", "On the floor", "On the sofa", "In the garden"],
                    correct: 2,
                    explanation: "In the passage: 'She likes to sleep on the sofa.'",
                },
                {
                    question: "What does she play with?",
                    options: ["A ball", "A toy mouse", "A string", "A doll"],
                    correct: 1,
                    explanation: "In the passage: 'Sometimes she plays with a toy mouse.'",
                },
                {
                    question: "What does Luna hate?",
                    options: ["Milk", "Mice", "Sofas", "Water"],
                    correct: 3,
                    explanation: "In the passage: '...she hates water.'",
                }
            ]
        },
        {
            id: "a1-comp-7",
            title: "A Hobby: Drawing",
            level: "A1",
            content: "I have a hobby. It is drawing. I have a big sketchbook. I use pencils and crayons to draw. I like to draw animals. My favorite animal to draw is a lion. I also draw fast cars. I draw in my bedroom because it is very quiet there.",
            transcript: "I have a hobby. It is drawing. I have a big sketchbook. I use pencils and crayons to draw. I like to draw animals. My favorite animal to draw is a lion. I also draw fast cars. I draw in my bedroom because it is very quiet there.",
            questions: [
                {
                    question: "What is the hobby?",
                    options: ["Reading", "Drawing", "Singing", "Cooking"],
                    correct: 1,
                    explanation: "In the passage: 'It is drawing.'",
                },
                {
                    question: "What does the person draw in?",
                    options: ["A book", "A notebook", "A sketchbook", "On paper"],
                    correct: 2,
                    explanation: "In the passage: 'I have a big sketchbook.'",
                },
                {
                    question: "What tools does the person use?",
                    options: ["Paint", "Markers", "Pencils and crayons", "Pens"],
                    correct: 2,
                    explanation: "In the passage: 'I use pencils and crayons...'",
                },
                {
                    question: "What does the person like to draw?",
                    options: ["Houses", "Flowers", "Animals", "People"],
                    correct: 2,
                    explanation: "In the passage: 'I like to draw animals.'",
                },
                {
                    question: "What is the favorite animal to draw?",
                    options: ["Tiger", "Cat", "Lion", "Elephant"],
                    correct: 2,
                    explanation: "In the passage: 'My favorite animal to draw is a lion.'",
                },
                {
                    question: "Where does the person draw?",
                    options: ["In the living room", "At school", "In the garden", "In the bedroom"],
                    correct: 3,
                    explanation: "In the passage: 'I draw in my bedroom...'",
                }
            ]
        },
        {
            id: "a1-comp-8",
            title: "The Local Library",
            level: "A1",
            content: "I go to the library every Friday afternoon. The library is very big. There are many books on the shelves. I borrow three books every week. I like reading stories about magic. My friend Jack goes with me. We read quietly for one hour.",
            transcript: "I go to the library every Friday afternoon. The library is very big. There are many books on the shelves. I borrow three books every week. I like reading stories about magic. My friend Jack goes with me. We read quietly for one hour.",
            questions: [
                {
                    question: "When does the person go to the library?",
                    options: ["Monday", "Friday", "Saturday", "Sunday"],
                    correct: 1,
                    explanation: "In the passage: 'I go to the library every Friday afternoon.'",
                },
                {
                    question: "Is the library small?",
                    options: ["Yes, it is", "No, it is very big", "It is old", "It is new"],
                    correct: 1,
                    explanation: "In the passage: 'The library is very big.'",
                },
                {
                    question: "How many books does the person borrow?",
                    options: ["One", "Two", "Three", "Four"],
                    correct: 2,
                    explanation: "In the passage: 'I borrow three books every week.'",
                },
                {
                    question: "What kind of stories does the person like?",
                    options: ["History", "Magic", "Science", "War"],
                    correct: 1,
                    explanation: "In the passage: 'I like reading stories about magic.'",
                },
                {
                    question: "Who goes with the person?",
                    options: ["His mother", "His sister", "His friend Jack", "His teacher"],
                    correct: 2,
                    explanation: "In the passage: 'My friend Jack goes with me.'",
                },
                {
                    question: "How long do they stay there?",
                    options: ["30 minutes", "One hour", "Two hours", "All day"],
                    correct: 1,
                    explanation: "In the passage: 'We read quietly for one hour.'",
                }
            ]
        },
        {
            id: "a1-comp-9",
            title: "Playtime at the Park",
            level: "A1",
            content: "The park is my favorite place. I go there with my friends. We play on the slides and swings. I like the slides because they are fast. Some children play with a ball on the grass. People often walk their dogs there. It is a very happy and fun place.",
            transcript: "The park is my favorite place. I go there with my friends. We play on the slides and swings. I like the slides because they are fast. Some children play with a ball on the grass. People often walk their dogs there. It is a very happy and fun place.",
            questions: [
                {
                    question: "What is the person's favorite place?",
                    options: ["School", "Home", "Library", "Park"],
                    correct: 3,
                    explanation: "In the passage: 'The park is my favorite place.'",
                },
                {
                    question: "Who does the person go with?",
                    options: ["Family", "Friends", "Teacher", "Alone"],
                    correct: 1,
                    explanation: "In the passage: 'I go there with my friends.'",
                },
                {
                    question: "What do they play on?",
                    options: ["Bikes", "Computers", "Slides and swings", "Musical instruments"],
                    correct: 2,
                    explanation: "In the passage: 'We play on the slides and swings.'",
                },
                {
                    question: "Why does the person like the slides?",
                    options: ["They are big", "They are fast", "They are red", "They are new"],
                    correct: 1,
                    explanation: "In the passage: 'I like the slides because they are fast.'",
                },
                {
                    question: "Where do children play with a ball?",
                    options: ["In the street", "On the grass", "At school", "At home"],
                    correct: 1,
                    explanation: "In the passage: 'Some children play with a ball on the grass.'",
                },
                {
                    question: "What do people do with their dogs?",
                    options: ["Feed them", "Wash them", "Walk them", "Buy them"],
                    correct: 2,
                    explanation: "In the passage: 'People often walk their dogs there.'",
                }
            ]
        },
        {
            id: "a1-comp-10",
            title: "Future Dreams",
            level: "A1",
            content: "I want to be a doctor when I grow up. My father is a doctor too. He works at a big hospital. He helps many sick people every day. I want to learn many things at school. I want to make people feel better and happy. Helping others is important.",
            transcript: "I want to be a doctor when I grow up. My father is a doctor too. He works at a big hospital. He helps many sick people every day. I want to learn many things at school. I want to make people feel better and happy. Helping others is important.",
            questions: [
                {
                    question: "What does the person want to be?",
                    options: ["Teacher", "Doctor", "Driver", "Farmer"],
                    correct: 1,
                    explanation: "In the passage: 'I want to be a doctor...'",
                },
                {
                    question: "Who else is a doctor?",
                    options: ["The mother", "The father", "The grandfather", "The friend"],
                    correct: 1,
                    explanation: "In the passage: 'My father is a doctor too.'",
                },
                {
                    question: "Where does the father work?",
                    options: ["At a school", "At a big hospital", "In an office", "At home"],
                    correct: 1,
                    explanation: "In the passage: 'He works at a big hospital.'",
                },
                {
                    question: "Who does the father help?",
                    options: ["Animals", "Students", "Sick people", "Teachers"],
                    correct: 2,
                    explanation: "In the passage: 'He helps many sick people every day.'",
                },
                {
                    question: "What does the person want to do for people?",
                    options: ["Make them rich", "Make them feel better", "Give them books", "Take them to the park"],
                    correct: 1,
                    explanation: "In the passage: 'I want to make people feel better and happy.'",
                },
                {
                    question: "What is important to the person?",
                    options: ["Playing games", "Sleeping", "Helping others", "Watching TV"],
                    correct: 2,
                    explanation: "In the passage: 'Helping others is important.'",
                }
            ]
        }
    ],
};
