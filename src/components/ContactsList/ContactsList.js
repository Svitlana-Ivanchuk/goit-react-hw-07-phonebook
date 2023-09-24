import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectItems,
  selectFilter,
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { StyledContact, StyledList } from './ContactsList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactsList = () => {
  const filter = useSelector(selectFilter);
  const { items, isLoading, error } = useSelector(selectContacts);
  //const items = useSelector(selectItems);
  //const isLoading = useSelector(selectIsLoading);
  //const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const selectedName = items.filter(elem => {
    if (filter === '') {
      return items;
    }
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <StyledList>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {selectedName.map(contact => (
          <StyledContact key={contact.id}>
            <Contact contact={contact} />
          </StyledContact>
        ))}
      </StyledList>
    </>
  );
};
