import { useEffect, useState } from 'react'
import initialContact from './userContactData.json'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import './App.css'

function App() {
  const [ contacts, setContact ] = useState(() => {
    const savedData = localStorage.getItem('contacts')
    return savedData ? JSON.parse(savedData) : (initialContact)
  })
  const [ filter, setFilter ] = useState("");

  const addContact = (newContact) => {
    setContact((prevContact) => {
      return [...prevContact, newContact]
    })
  };
  const deleteContact = (contactId) => {
    setContact((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId)
    })
  };
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);
  const visibleContacts = contacts.filter((cont) => cont.name.toLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <>
      <div className='container'>
  <h1 className='title'>Phonebook</h1>
  <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onFilter={setFilter} />
  <ContactList data={visibleContacts} onDelete={deleteContact}/>
</div>
    </>
  )
}

export default App;
