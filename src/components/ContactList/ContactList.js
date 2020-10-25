import React from 'react';
import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import s from './ContactList.module.scss';

const ContactList = ({ contacts }) => {
  const isShowContacts = contacts.length > 0;

  return (
    <div className={s.contactItemsWrapper}>
      <h2 className={s.contactsTitle}>Contacts</h2>
      {isShowContacts && (
        <ul>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      )}

      {!isShowContacts && <p>No contacts in data :(</p>}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getWithFilterContacts(state),
});

export default connect(mapStateToProps)(ContactList);
