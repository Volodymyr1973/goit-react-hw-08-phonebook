import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  console.log(contacts);
  console.log(name);
  console.log(number);

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target.name);
    console.log(event.target.number);

    switch (name) {
      case 'name':
        setName(value);
        localStorage.setItem('name', `${value}`);
        break;

      case 'number':
        setNumber(value);
        localStorage.setItem('number', `${value}`);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
    };
    const nameUser = name;
    const doubleContact = contacts.some(
      ({ name }) => name.toLowerCase() === nameUser.toLowerCase()
    );

    if (doubleContact) {
      // alert(`${name} is already in contacts`);
      toast.error(`${name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
      return;
    } else dispatch(addContacts(contact));
    localStorage.removeItem('name');
    localStorage.removeItem('number');
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.form__wrapper}>
      <h1 className={css.form__title}>Phonebook</h1>
      <form className={css.form__body} onSubmit={handleSubmit}>
        <label className={css.form__name}>
          Name
          <input
            className={css.input__name}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.form__number}>
          Number
          <input
            className={css.input__number}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form__button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
