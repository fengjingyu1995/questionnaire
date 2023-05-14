export interface QuestionData {
  id: number;
  title: string;
  type: string;
  required: boolean;
  options?: string[];
}
