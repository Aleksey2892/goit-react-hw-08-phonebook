import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../redux/contacts/contactsOperations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import s from './PhonebookPage.module.scss';

class PhonebookPage extends Component {
  static propTypes = {
    getContactsWithLoading: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getContactsWithLoading();
  }

  render() {
    return (
      <div>
        <h1 className={s.phonebook}>Phonebook</h1>

        <ContactForm />

        <Filter />

        <ContactList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getContactsWithLoading: contactsOperations.fetchContacts,
};

export default connect(null, mapDispatchToProps)(PhonebookPage);
