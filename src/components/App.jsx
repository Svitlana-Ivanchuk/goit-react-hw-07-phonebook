import { GlobalStyle } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Layout } from './Layuot';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <Layout>
      <ContactForm></ContactForm>

      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>

      <GlobalStyle />
    </Layout>
  );
};
