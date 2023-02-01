import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading, getError } from "redux/contacts/selectors";
import { ContactForm } from "components/contactform/ContactForm";
import { Filter } from "components/filter/Filter";
import { ContactList } from "components/contactlist/ContactList";
import { ContactItem } from "components/contactitem/ContactItem";
import css from './Contacts.module.css'
// import css from './App.module.css';

export default function App() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <div className={css.wrapper}>
      <Helmet>
        <title>Your phonebook</title>
      </Helmet>

      <ContactForm/>
      <div>
        <h2 className={css.filter}>Filter</h2>
          <Filter/>
        <h2 className={css.contacts}>Contacts</h2>
       
        <ContactList>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactItem />
        </ContactList>
      </div>    
      
    </div>
  );
};
