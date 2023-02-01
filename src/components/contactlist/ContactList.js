import React from 'react';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { getFilter } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  // console.log(`contacts${visibleContacts}`)

  return (
    <>
      <ul className={css.contact__list}>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} />
        ))}
      </ul>
    </>
  );
};
