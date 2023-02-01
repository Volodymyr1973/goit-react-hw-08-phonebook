import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, changeContacts } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getContacts } from 'redux/contacts/selectors';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChangeContact = event => {
    console.log(event);
    const storageName = localStorage.getItem('name');
    const storageNumber = localStorage.getItem('number');
    const doubleContact = contacts.some(
      ({ name }) => name.toLowerCase() === storageName.toLowerCase()
    );
    if (doubleContact) {
      toast.error('Insert another name', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    } else if (storageName && storageNumber) {
      dispatch(changeContacts(contact.id));
    } else {
      toast.error('Insert name and number', {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    }

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
