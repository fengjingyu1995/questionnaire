import FormControlLabel from '@mui/material/FormControlLabel';
import { QuestionProps } from './Question';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const CheckboxQuestion = ({
  question,
  updateFormData,
  value,
}: QuestionProps) => {
  const { id, options, required } = question;
  const checkboxValue = value && Array.isArray(value) ? value : [];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const checked = event.target.checked;
    if (!checkboxValue.includes(selectedValue) && checked) {
      updateFormData(id, [...checkboxValue, selectedValue]);
    }
    if (checkboxValue.includes(selectedValue) && !checked) {
      updateFormData(
        id,
        checkboxValue.filter(value => value !== selectedValue)
      );
    }
  };

  return (
    <FormGroup>
      {options?.map(option => (
        <FormControlLabel
          required={required && checkboxValue.length === 0}
          key={option}
          control={
            <Checkbox
              checked={checkboxValue.includes(option)}
              onChange={handleChange}
            />
          }
          label={option}
          value={option}
        />
      ))}
    </FormGroup>
  );
};

export default CheckboxQuestion;
