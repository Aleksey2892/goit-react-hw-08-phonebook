import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import s from './ContactList.module.scss';
import animation from './fadeContacts.module.scss';

const ContactList = ({ isShowContacts, contacts, onRemoveContact }) => {
  return (
    <>
      <TransitionGroup
        in={isShowContacts.toString()}
        component="ul"
        className={s.ul}
      >
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={animation}>
            <li className={s.liItem}>
              <p>
                {name}: {number}
              </p>
              <button
                className={s.btnRemove}
                type="button"
                onClick={() => onRemoveContact(id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      {!isShowContacts && <p>No contacts in data :(</p>}
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,

  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
