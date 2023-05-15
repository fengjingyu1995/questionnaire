import { QuestionnaireData } from './questions.model';

// TODO: load it from .env
const SERVER_URL = 'http://localhost:3000';

export const fetchQuestionnaire = async (): Promise<QuestionnaireData> => {
  const res = await fetch(`${SERVER_URL}/questionnaire`);
  return await res.json();
};
