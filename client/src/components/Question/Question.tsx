import Typography from '@mui/material/Typography';
import { QuestionData, QuestionValue } from '../../api/questions.model';
import CheckboxQuestion from './CheckboxQuestion';
import Dropdown from './DropdownQuestion';
import RadioQuestion from './RadioQuestion';
import TextFieldQuestion from './TextFieldQuestion';
import TextareaQuestion from './TextareaQuestion';
import './Question.css';

export type QuestionProps = {
  question: QuestionData;
  updateFormData: (questionId: string, value: QuestionValue) => void;
  value?: QuestionValue;
};
const renderQuestion = (props: QuestionProps) => {
  const type = props.question.type;
  switch (type) {
    case 'text':
    case 'number':
      return <TextFieldQuestion {...props} />;
    case 'dropdown':
      return <Dropdown {...props} />;
    case 'checkbox':
      return <CheckboxQuestion {...props} />;
    case 'radio':
      return <RadioQuestion {...props} />;
    case 'textarea':
      return <TextareaQuestion {...props} />;

    default:
      throw new Error(`Unknown type:  ${type}`);
  }
};

const Question = (props: QuestionProps) => {
  return (
    <div className="question">
      <Typography variant="h4" component="h2">
        {props.question.title}
      </Typography>
      <div className="questionInput">{renderQuestion(props)}</div>
    </div>
  );
};

export default Question;
