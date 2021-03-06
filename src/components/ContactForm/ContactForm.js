import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contactsOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

import toastr from '../assets/toastrConfig/toastrConfig';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import s from './ContactForm.module.scss';

const styles = {
  root: {
    marginBottom: '10px',
    width: '100%',
  },
};

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

    this.setState({ [name]: value.toUpperCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { name, number };

    if (name && number) {
      const isDuplicate = this.props.contacts.find(
        contact => contact.name === name,
      );

      if (isDuplicate) {
        return toastr['warning'](
          '',
          `'${name}' is already in contacts/'${name}' уже есть в контактах`,
        );
      }

      this.props.onSubmit(newContact);
      this.resetState();
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.contactForm} onSubmit={this.handleSubmit}>
        <label className={s.labelForm}>
          <TextField
            style={styles.root}
            size="small"
            id="contact name"
            label="contact name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <TextField
            style={styles.root}
            size="small"
            id="contact number"
            label="contact number"
            variant="outlined"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <div className={s.btnWrapper}>
          <Button
            style={{ backgroundColor: 'rgba(255, 68, 0, 0.493)' }}
            type="submit"
            variant="contained"
            color="primary"
            size="small"
          >
            Add contact
          </Button>
        </div>
      </form>
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
