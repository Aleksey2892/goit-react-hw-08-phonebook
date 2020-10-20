import React, { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = INITIAL_STATE;

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

    if (name && number) {
      const NewContact = { name, number };

      this.props.onAddContact(NewContact);
      this.resetState();
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              placeholder="Сontact name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={s.label}>
            Number
            <input
              className={s.input}
              type="number"
              placeholder="Сontact number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}
