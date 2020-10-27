import React from 'react';
import { connect } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import animation from './ContactListAnimation.module.scss';
import s from './ContactList.module.scss';

const listLoader = (
  <div className="loaderBase">
    <Loader
      type="ThreeDots"
      color="#ff4500"
      height={75}
      width={75}
      timeout={0}
    />
  </div>
);

const ContactList = ({ contacts, isLoader }) => {
  const isShowContacts = contacts.length > 0;

  return (
    <div className={s.contactItemsWrapper}>
      <h2 className={s.contactsTitle}>Contacts</h2>

      {isLoader && listLoader}

      <TransitionGroup in={isShowContacts} component="ul">
        {contacts.map(({ id }) => (
          <CSSTransition key={id} timeout={250} classNames={animation}>
            <ContactListItem key={id} id={id} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {!isShowContacts && !isLoader && <p>No contacts in data :(</p>}
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
  isLoader: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getWithFilterContacts(state),
  isLoader: contactsSelectors.getIsLoader(state),
});

export default connect(mapStateToProps)(ContactList);
