import { QuestionData } from '../../api/questions.model';
import Checkbox from './Checkbox';
import Dropdown from './Dropdown';
import Radio from './Radio';
import TextField from './TextField';
import Textarea from './Textarea';

const renderQuestion = (question: QuestionData) => {
  switch (question.type) {
    case 'text':
    case 'number':
      return <TextField question={question} />;
    case 'dropdown':
      return <Dropdown question={question} />;
    case 'checkbox':
      return <Checkbox question={question} />;
    case 'radio':
      return <Radio question={question} />;
    case 'textarea':
      return <Textarea question={question} />;

    default:
      throw new Error(`Unknown type ${question.type}`);
  }
};

type Props = { question: QuestionData };

const Question = ({ question }: Props) => {
  return <div>{renderQuestion(question)}</div>;
};

export default Question;
