import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              placeholder="Сontact name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="number"
              placeholder="Сontact number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
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
