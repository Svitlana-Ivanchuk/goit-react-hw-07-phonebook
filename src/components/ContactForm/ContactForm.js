import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledLabel,
  StyledField,
  StyledButton,
} from './ContactForm.styled';
import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('A Name is required'),
  number: Yup.number()
    .min(8, 'Too Short!')
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .required('A phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  return (
    <Section title="Phonebook">
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={schema}
        onSubmit={(newContact, actions) => {
          handleAddContact({ ...newContact, id: nanoid() });
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage component="div" name="name" />
          </StyledLabel>

          <StyledLabel>
            Number
            <StyledField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage component="div" name="number" />
          </StyledLabel>

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </Section>
  );
};
