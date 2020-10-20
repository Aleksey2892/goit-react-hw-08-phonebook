import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

import s from './App.module.scss';
import './animation.scss';

const RESET_MESSAGE = {
  name: '',
  timerId: null,
  isShowMessage: false,
};

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    message: { name: '', timerId: null, isShowMessage: false },
  };

  componentDidMount() {
    const contactsData = localStorage.getItem('contacts');

    if (contactsData) {
      this.setState({ contacts: JSON.parse(contactsData) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isCheckDuplicate = contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase(),
    );

    const notAdd = () => {
      const timerId = setTimeout(
        () =>
          this.setState({
            message: { ...RESET_MESSAGE },
          }),
        5000,
      );

      this.setState({
        message: {
          name: name.toUpperCase(),
          timerId,
          isShowMessage: true,
        },
      });
    };
    const add = () =>
      this.setState(prevState => ({
        contacts: [{ name, number, id: uuidv4() }, ...prevState.contacts],
      }));

    !isCheckDuplicate ? add() : notAdd();
  };

  handleRemoveContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  handleFilter = ({ target }) => {
    const { value, name } = target;

    this.setState({ [name]: value });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  handleNotification = () => {
    const {
      message: { timerId },
    } = this.state;

    clearTimeout(timerId);

    this.setState({
      message: { ...RESET_MESSAGE },
    });
  };

  render() {
    const { contacts, filter, message } = this.state;

    const isShowFilter = contacts.length > 1;
    const isShowContacts = contacts.length > 0;
    const filterContacts = this.getFilterContacts();
    const { isShowMessage, name } = message;

    return (
      <div className={s.interfaceBox}>
        <CSSTransition in={true} appear timeout={500} classNames="title">
          <h1 className={s.titleApp}>Phonebook</h1>
        </CSSTransition>

        <CSSTransition
          in={isShowMessage}
          timeout={250}
          classNames="notification"
          unmountOnExit
        >
          <Notification contact={name} onClick={this.handleNotification} />
        </CSSTransition>

        <ContactForm onAddContact={this.handleAddContact} />

        <h2 className={s.titleContacts}>Contacts</h2>
        <CSSTransition
          in={isShowFilter}
          timeout={250}
          classNames="filter"
          unmountOnExit
        >
          <Filter filter={filter} onChange={this.handleFilter} />
        </CSSTransition>

        <ContactList
          isShowContacts={isShowContacts}
          contacts={filterContacts}
          onRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}
