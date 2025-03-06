import * as yup from 'yup';
import { useState, useId, useEffect } from 'react'

import './App.css'

import initialContacts from './components/initialContacts.json'
import ContactList from './components/ContactList/ContactList'
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const contacts = window.localStorage.getItem("contacts");
    if (contacts !== null) {
      return JSON.parse(contacts);
    };

    return initialContacts;
  });
  const [searchContacts, setSearchContacts] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const searchID = useId();
  const formId = {
    nameID: useId(),
    numberID: useId()
  };

  const contactFormSchema = yup.object().shape({
    name: yup.string().min(2, "Too Short!").max(30, "Too Long!").required("Required"),
    number: yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format 111-11-11")
      .required("Required")
  });

  const filterContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchContacts.toLowerCase()));

  return (
    <>
      <ContactForm onAdd={addContact} id={formId} validationSchema={contactFormSchema} />
      <SearchBox value={searchContacts} onSearch={setSearchContacts} id={searchID} />
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
    </>
  );
}

export default App