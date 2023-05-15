import { QuestionnaireFormData } from '../pages/Home';
import { QuestionnaireData } from './questions.model';

// TODO: load it from .env
const SERVER_URL = 'http://localhost:3000';

export const fetchQuestionnaire = async (): Promise<QuestionnaireData> => {
  const res = await fetch(`${SERVER_URL}/questionnaire`);
  const json = await res.json();
  return json;
};

export const submitQuestionnaire = async (formData: QuestionnaireFormData) => {
  await fetch(`${SERVER_URL}/questionnaire/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
};
