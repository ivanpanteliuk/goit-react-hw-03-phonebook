import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Input, Label } from './FilterInput.styled';

const FilterInput = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Label htmlFor={filterInputId}>
      Find contacts by name
      <Input id={filterInputId} type="text" value={value} onChange={onChange} />
    </Label>
  );
};

FilterInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterInput;
