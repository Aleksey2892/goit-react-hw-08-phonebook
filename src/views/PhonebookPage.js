import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import contactsOperations from '../redux/contacts/contactsOperations';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';

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
        <h1>Phonebook</h1>

        <ContactForm />

        <h2>Contacts</h2>

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
