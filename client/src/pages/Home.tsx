import { useEffect, useState } from 'react';
import { fetchQuestions } from '../api/fetchQuestions';
import { QuestionData } from '../api/questions.model';
import Question from '../components/Question/Question';

const Home = () => {
  const [questions, setQuestions] = useState<QuestionData[] | null>(null);
  useEffect(() => {
    fetchQuestions().then(data => {
      setQuestions(data);
    });
  }, []);

  return (
    <div>
      {questions?.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Home;
