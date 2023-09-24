import { useDispatch, useSelector } from 'react-redux';
import { StyledFilter, StyledInput, StyledTitle } from './Filter.styled';
import { filterByName } from 'redux/filterSlice';
import { selectCount, selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterName = evt => {
    const value = evt.target.value;
    dispatch(filterByName(value));
  };
  const count = useSelector(selectCount);
  return (
    <StyledFilter>
      <StyledTitle>Find contacts by name</StyledTitle>

      <StyledInput type="text" value={filter} onChange={handleFilterName} />
      <StyledTitle>Total contacts: {count} </StyledTitle>
    </StyledFilter>
  );
};
