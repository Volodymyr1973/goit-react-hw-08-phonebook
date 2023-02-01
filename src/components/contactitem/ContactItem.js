import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContacts, changeContacts } from 'redux/contacts/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleChangeContact = event => {
    console.log(event);
    const storageName = localStorage.getItem('name');
    const storageNumber = localStorage.getItem('number');

    if (storageName && storageNumber) {
      dispatch(changeContacts(contact.id));
    } else return;

    localStorage.removeItem('name');
    localStorage.removeItem('number');
  };

  return (
    <li className={css.contact__item} key={contact.id}>
      <span className={css.contact__name}>Name: {contact.name}</span>
      <span className={css.contact__number}>Tel: {contact.number}</span>
      <div className={css.contact_button_wrapper}>
        <button
          className={css.contact__button}
          type="button"
          onClick={() => dispatch(deleteContacts(contact.id))}
        >
          Delete
        </button>
        <button
          className={css.contact__button}
          type="button"
          onClick={handleChangeContact}
        >
          Change
        </button>
      </div>
    </li>
  );
};

ContactItem.propType = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
