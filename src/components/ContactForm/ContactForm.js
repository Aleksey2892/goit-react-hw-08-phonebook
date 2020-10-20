import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';
import s from '../../styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = { ...INITIAL_STATE };

  resetState = () => {
    this.setState(INITIAL_STATE);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number };

    if (name && number) {
      const isDuplicate = this.props.contacts.find(
        contact => contact.name === name,
      );

      if (isDuplicate) return alert(`'${name}' is already in contacts`);

      this.props.onSubmit(newContact);
      this.resetState();
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <s.Form onSubmit={this.handleSubmit}>
          <s.Label>
            Name
            <s.Input
              type="text"
              placeholder="Сontact name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </s.Label>
          <s.Label>
            Number
            <s.Input
              type="number"
              placeholder="Сontact number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </s.Label>

          <s.Button type="submit">Add contact</s.Button>
        </s.Form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = {
  onSubmit: contactsOperations.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
