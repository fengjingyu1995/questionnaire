import { QuestionnaireData } from './questions.model';
import questions from './questions.json';

export const fetchQuestions = (): Promise<QuestionnaireData> => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(questions as QuestionnaireData);
    }, 1000)
  );
};
