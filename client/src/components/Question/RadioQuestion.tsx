import Radio from '@mui/material/Radio';
import { QuestionProps } from './Question';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';

const RadioQuestion = ({ question, updateFormData, value }: QuestionProps) => {
  const { required, id, options } = question;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(id, e.target.value);
  };

  return (
    <FormGroup>
      <RadioGroup value={value ?? null} onChange={handleChange}>
        {options?.map(option => (
          <FormControlLabel
            key={option}
            control={<Radio required={required} />}
            label={option}
            value={option}
          />
        ))}
      </RadioGroup>
    </FormGroup>
  );
};

export default RadioQuestion;
