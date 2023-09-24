import { useDispatch } from 'react-redux';
import { TiUserDelete } from 'react-icons/ti';
import { deleteContact } from 'redux/operations';
import {
  StyledBtnDelete,
  StyledCheck,
  StyledContact,
  StyledImages,
} from './Contact.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <StyledImages src={contact.createdAt} alt={contact.name} width="45" />
      <StyledCheck
        type="checkbox"
        name="onLine"
        //defaultChecked={contact.onLine}
        checked={contact.onLine}
        readOnly={true}
      />
      <StyledContact>
        {contact.name} : {contact.number}
      </StyledContact>
      <StyledBtnDelete onClick={() => handleDelete(contact.id)}>
        <TiUserDelete></TiUserDelete>
      </StyledBtnDelete>
    </>
  );
};
