import TextField from '@mui/material/TextField';
import { QuestionProps } from './Question';

const TextFieldQuestion = ({
  question,
  updateFormData,
  value,
}: QuestionProps) => {
  const { required, id, type } = question;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateFormData(id, e.target.value);
  };
  return (
    <TextField
      required={required}
      onChange={e => handleChange(e)}
      value={value ?? ''}
      label={question.title}
      type={type}
      fullWidth
    />
  );
};

export default TextFieldQuestion;
