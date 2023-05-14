export interface QuestionData {
  id: string;
  title: string;
  type: string;
  required: boolean;
  options?: string[];
}

export type QuestionValue = string | number | Array<string>;
