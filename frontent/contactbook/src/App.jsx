import { useState, useEffect, use } from 'react'
import Header from './components/header'
import Form from './components/form'
import EmptyContact from './components/emptyContact'
import ContactCard from './components/contactCard'
import './App.css'

const App = () => {

  const [contacts, setContacts] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/contacts');
      const data = await response.json();
      console.log(data);
      setContacts(data);
    }
    fetchData().catch(console.error);

    return () => {}
  }, [])

   const deleteContact = async (id) => {
    const response = await fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      setContacts(contacts.filter((c) => c.id !== id));
    }
  };

  const updateForm = async (newContact) => {
    const response = await fetch('http://localhost:3000/contacts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    });

    if (response.ok) {
      const {contactId} = await response.json();
      setContacts([...contacts, {...newContact, id: contactId}]);
    }
  }

  
  return (
    <>
      <Header />
      <div className='app-container'>
        <Form updateForm={updateForm} />
        <div className='contacts-container'>
          {contacts.length === 0 ? <EmptyContact /> : contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} deleteContact={deleteContact}/>
        ))}
        </div>
        
      </div>

    </>
  )
}

export default App
