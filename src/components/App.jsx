import React, { useEffect, useState, useRef } from 'react';
import { nanoid } from 'nanoid';

import { Form } from './form/form';
import { List } from './list/list';
import { Filter } from './filter/filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  let filteredList = null;
  const didMount = useRef(false);

  useEffect(() => {
    // console.log('lololo');
    if (localStorage.getItem('contacts') === null) {
      localStorage.setItem(
        'contacts',
        JSON.stringify([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ])
      );
      setContacts(JSON.parse(localStorage.getItem('contacts')));
      return;
    }
    if (localStorage.getItem('contacts').length > 0) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
      // console.log(JSON.parse(localStorage.getItem('contacts')));
    }

    // setContacts(localStorage.getItem('contacts'));
  }, []);

  useEffect(() => {
    if (didMount.current) {
      // console.log(contacts);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else didMount.current = true;
    // console.log(contacts);
  }, [contacts]);

  const handleSubmit = (e, name, number) => {
    e.preventDefault();
    if (
      contacts.filter(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      ).length !== 0
    ) {
      alert(`${name} is already in your contacts`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, { name: name, number: number, id: nanoid() }];
    });
    setFilter('');
    e.target.reset();
  };

  const handleFilter = e => {
    setFilter(() => e.target.value.toLowerCase());
    if (e.target.value.toLowerCase() === '') {
      filteredList = null;
      return;
    }
    renderFilter();
  };

  const renderFilter = () => {
    // console.log(filter);
    filteredList = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    // console.log(filteredList);
    return filteredList;
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    // console.log(JSON.parse(localStorage.getItem('contacts')));
  };

  return (
    <div
      style={{
        paddingLeft: '20px',
      }}
    >
      <h1>Phonebook</h1>
      <Form handleSubmit={handleSubmit}></Form>
      <h2>Contacts</h2>
      <Filter handleFilter={handleFilter}></Filter>
      <List
        contacts={contacts && renderFilter()}
        deleteContact={deleteContact}
      ></List>
    </div>
  );
};
