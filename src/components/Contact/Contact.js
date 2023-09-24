import { useDispatch } from 'react-redux';
import { TiUserDelete } from 'react-icons/ti';
import { deleteContact } from 'redux/operations';
import { StyledBtnDelete, StyledImages } from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <StyledImages src={contact.createdAt} alt={contact.name} width="45" />
      {contact.name} : {contact.number}
      <StyledBtnDelete onClick={handleDelete}>
        <TiUserDelete></TiUserDelete>
      </StyledBtnDelete>
    </>
  );
};
