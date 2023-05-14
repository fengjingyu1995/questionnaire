import FormControlLabel from '@mui/material/FormControlLabel';
import { QuestionProps } from './Question';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const CheckboxQuestion = ({ question }: QuestionProps) => {
  const { options } = question;
  return (
    <FormGroup>
      {options?.map(option => (
        <FormControlLabel key={option} control={<Checkbox />} label={option} />
      ))}
    </FormGroup>
  );
};

export default CheckboxQuestion;
