import Radio from '@mui/material/Radio';
import { QuestionProps } from './Question';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';

const RadioQuestion = ({ question }: QuestionProps) => {
  const { options } = question;
  return (
    <FormGroup>
      <RadioGroup>
        {options?.map(option => (
          <FormControlLabel
            key={option}
            control={<Radio />}
            label={option}
            value={option}
          />
        ))}
      </RadioGroup>
    </FormGroup>
  );
};

export default RadioQuestion;
