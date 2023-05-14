import TextField from '@mui/material/TextField';
import { QuestionProps } from './Question';

const TextFieldQuestion = ({ question }: QuestionProps) => {
  const { required } = question;
  return (
    <>
      <TextField required={required} />
    </>
  );
};

export default TextFieldQuestion;
