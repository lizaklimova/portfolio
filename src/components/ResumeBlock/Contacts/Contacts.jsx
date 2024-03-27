import contactsData from "data/contacts.json";
import { ContactsList, ContactItem } from "./Contacts.styled";

const Contacts = () => {
  return (
    <ContactsList>
      {contactsData.map(({ id, text, link }) => (
        <ContactItem key={id}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default Contacts;
