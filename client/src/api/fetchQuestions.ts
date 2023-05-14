import { QuestionData } from './questions.model';
import questions from './textQuestions.json';

export const fetchQuestions = (): Promise<Array<QuestionData>> => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(questions.questions as Array<QuestionData>);
    }, 1000)
  );
};
