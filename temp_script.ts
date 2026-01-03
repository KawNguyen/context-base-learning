import { L1 } from "./src/constants/vocabulary/data/L/l1";
import { L2 } from "./src/constants/vocabulary/data/L/l2";
import { VocabularyWord } from "./src/constants/vocabulary/types";
import * as fs from "fs";
import * as path from "path";

// Gộp tất cả
const allWords: VocabularyWord[] = [...L1, ...L2];

// Sắp xếp theo alphabet (word)
allWords.sort((a, b) => a.word.localeCompare(b.word));

// Loại bỏ duplicate theo word
const uniqueWords = allWords.filter(
  (word, index, arr) => index === arr.findIndex((w) => w.word === word.word)
);

console.log("Total words before dedup:", allWords.length);
console.log("Total words after dedup:", uniqueWords.length);

// Tách thành chunks 100
const chunkSize = 100;
const chunks: VocabularyWord[][] = [];
for (let i = 0; i < uniqueWords.length; i += chunkSize) {
  chunks.push(uniqueWords.slice(i, i + chunkSize));
}

console.log("Number of chunks:", chunks.length);
chunks.forEach((chunk, i) => {
  console.log(`Chunk ${i + 1}: ${chunk.length} items`);
  if (chunk.length > 0) {
    console.log(
      `First word: ${chunk[0].word}, Last word: ${chunk[chunk.length - 1].word}`
    );
  }
});

// Ghi lại vào files
const basePath = "./src/constants/vocabulary/data/L/";
const fileNames = ["l1.ts", "l2.ts"];

const objectToString = (obj: VocabularyWord) => {
  const escape = (str: string) => str.replace(/"/g, '\\"');
  return `  { id: "${obj.id}", word: "${obj.word}", slug: "${
    obj.slug
  }", phonetic: "${obj.phonetic}", partOfSpeech: "${
    obj.partOfSpeech
  }", meaningEn: "${escape(obj.meaningEn)}", meaningVi: "${escape(
    obj.meaningVi
  )}", exampleEn: "${escape(obj.exampleEn)}", exampleVi: "${escape(
    obj.exampleVi
  )}", categories: ${JSON.stringify(obj.categories)} },`;
};

chunks.forEach((chunk, index) => {
  if (index < fileNames.length) {
    const filePath = path.join(basePath, fileNames[index]);
    const content = `import { VocabularyWord } from "../../types";

export const L${index + 1}: VocabularyWord[] = [
${chunk.map(objectToString).join("\n")}
];
`;
    fs.writeFileSync(filePath, content);
    console.log(`Written to ${fileNames[index]}`);
  }
});

// Ghi l2 trống nếu không có chunk
if (chunks.length < fileNames.length) {
  const filePath = path.join(basePath, fileNames[fileNames.length - 1]);
  const content = `import { VocabularyWord } from "../../types";

export const L2: VocabularyWord[] = [
];
`;
  fs.writeFileSync(filePath, content);
  console.log(`Written empty to ${fileNames[fileNames.length - 1]}`);
}
