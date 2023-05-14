import Typography from '@mui/material/Typography';
import { QuestionData } from '../../api/questions.model';
import CheckboxQuestion from './CheckboxQuestion';
import Dropdown from './DropdownQuestion';
import RadioQuestion from './RadioQuestion';
import TextFieldQuestion from './TextFieldQuestion';
import TextareaQuestion from './TextareaQuestion';

export type QuestionProps = { question: QuestionData };
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
    <div>
      <Typography>{props.question.title}</Typography>
      {renderQuestion(props)}
    </div>
  );
};

export default Question;
