import { useState, useEffect } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import styles from './components/ContactForm/ContactForm.module.css'
    export default function App(){
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] =useState('');

  useEffect(() => {
    if (localStorage.getItem('contacts')) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(
    prevState => {
      if (contacts !== prevState) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }
    },
    [contacts],
  );
    const changeFilter = element => {
    setFilter(element.currentTarget.value);
  };
  const deleteContacts = contactId =>{
    setContacts(() =>(
    contacts.filter((contact)=>contact.id !==contactId)
    ));
  };
   const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
  const formSubmitHandler = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => [data, ...prevState]);
  };

  return (
    <div className={styles.phonebook}>
    <h1>Phonebook</h1>
    <ContactForm
    onSubmit={formSubmitHandler}
    />
    <h2>Contacts</h2>
  <Filter value={filter} onChange={changeFilter} />
  <ContactList
  contacts={visibleContacts}
  onChange={changeFilter}
  onDelete={deleteContacts} /> 
  </div>
  );
  }