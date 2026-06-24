export enum Part7TypesEnum {
  Single = "single",
  Double = "double",
  Triple = "triple",
}

export type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

export type Question = {
  id: number;
  questionText: string;
  options: Option[];
};

export type Part7Types = {
  id: string;
  testSlug: string;
  type: Part7TypesEnum;
  image: string[] | string;
  questions: Question[];
};
