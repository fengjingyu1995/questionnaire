import TextField from '@mui/material/TextField';
import { QuestionProps } from './Question';

const TextFieldQuestion = ({
  question,
  updateFormData,
  value,
}: QuestionProps) => {
  const { required, id } = question;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateFormData(id, e.target.value);
  };
  return (
    <>
      <TextField
        required={required}
        onChange={e => handleChange(e)}
        value={value ?? ''}
      />
    </>
  );
};

export default TextFieldQuestion;
