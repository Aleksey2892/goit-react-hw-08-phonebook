import React from 'react';
import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import s from '../../styled';

const ContactList = ({ contacts }) => {
  const isShowContacts = contacts.length > 0;

  return (
    <>
      {isShowContacts && (
        <s.Ul>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </s.Ul>
      )}

      {!isShowContacts && <p>No contacts in data :(</p>}
    </>
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
