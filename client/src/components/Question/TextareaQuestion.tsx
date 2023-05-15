import TextareaAutosize from '@mui/material/TextareaAutosize';
import { QuestionProps } from './Question';

const TextareaQuestion = ({ question, updateFormData }: QuestionProps) => {
  const { required, id } = question;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateFormData(id, e.target.value);
  };
  return (
    <TextareaAutosize
      minRows={5}
      style={{ width: '100%' }}
      required={required}
      onChange={e => handleChange(e)}
    />
  );
};

export default TextareaQuestion;
