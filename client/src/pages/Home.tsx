import { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/fetchQuestions';
import { QuestionData, QuestionValue } from '../api/questions.model';
import Question from '../components/Question/Question';
import Button from '@mui/material/Button';

type FormData = {
  [id: string]: QuestionValue;
};

const Home = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  const [formData, setFormData] = useState<FormData>({});

  useEffect(() => {
    fetchQuestions().then(data => {
      setQuestions(data);
    });
  }, []);
  const updateFormData = (questionId: string, value: QuestionValue) => {
    setFormData(prevFormData => {
      const newUserFormData = { ...prevFormData, [questionId]: value };
      return newUserFormData;
    });
  };

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={e => handleSubmitForm(e)}>
      {questions?.map(question => (
        <Question
          key={question.id}
          question={question}
          updateFormData={updateFormData}
          value={formData[question.id]}
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Home;
