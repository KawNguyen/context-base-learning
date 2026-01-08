import { CEFRLevel, Question } from './types';
import { questions as A1 } from './levels/A1';
import { questions as A2 } from './levels/A2';
import { questions as B1 } from './levels/B1';
import { questions as B2 } from './levels/B2';
import { questions as C1 } from './levels/C1';
import { questions as C2 } from './levels/C2';

export const quizPrompt = "Bạn là một giáo viên tiếng Anh giàu kinh nghiệm. Hãy giúp người dùng luyện tập tiếng Anh thông qua các câu hỏi trắc nghiệm. Với mỗi câu trả lời đúng, hãy động viên họ. Với mỗi câu trả lời sai, hãy giải thích chi tiết ngữ pháp bằng tiếng Việt một cách dễ hiểu nhất.";

export const questions: Record<CEFRLevel, Question[]> = {
    A1,
    A2,
    B1,
    B2,
    C1,
    C2,
};

export default questions;
