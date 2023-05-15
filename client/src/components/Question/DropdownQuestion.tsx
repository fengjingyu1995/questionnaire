import Autocomplete from '@mui/material/Autocomplete';
import { QuestionProps } from './Question';
import { TextField } from '@mui/material';
import { QuestionValue } from '../../api/questions.model';

const Dropdown = ({ question, updateFormData, value }: QuestionProps) => {
  const { options, id } = question;
  const handleChange = (newValue: QuestionValue) => {
    updateFormData(id, newValue);
  };
  return (
    <Autocomplete
      options={options ?? []}
      renderInput={params => <TextField {...params} />}
      fullWidth
      value={(value as string) ?? null}
      onChange={(e, newValue) => handleChange(newValue as QuestionValue)}
    />
  );
};

export default Dropdown;
