import Autocomplete from '@mui/material/Autocomplete';
import { QuestionProps } from './Question';
import { TextField } from '@mui/material';

const Dropdown = ({ question }: QuestionProps) => {
  const { options } = question;
  return (
    <Autocomplete
      options={options ?? []}
      renderInput={params => <TextField {...params} />}
    />
  );
};

export default Dropdown;
