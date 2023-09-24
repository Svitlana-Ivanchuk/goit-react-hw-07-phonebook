import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { TiUserDelete } from 'react-icons/ti';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import {
  StyledBtnDelete,
  StyledContact,
  StyledImages,
  StyledList,
} from './Contacts.styled';

export const Contacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const selectedName = items.filter(elem => {
    if (filter === '') {
      return items;
    }
    return elem.name.toLowerCase().includes(filter.toLowerCase());
  });

  console.log(items);

  return (
    <>
      <StyledList>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {selectedName.map(contact => (
          <StyledContact key={contact.id}>
            <StyledImages
              src={contact.createdAt}
              alt={contact.name}
              width="45"
            />
            {contact.name} : {contact.number}
            <StyledBtnDelete onClick={() => handleDelete(contact.id)}>
              <TiUserDelete></TiUserDelete>
            </StyledBtnDelete>
          </StyledContact>
        ))}
      </StyledList>
    </>
  );
};
