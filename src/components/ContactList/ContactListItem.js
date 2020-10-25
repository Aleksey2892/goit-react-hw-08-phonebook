import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import s from './ContactListItem.module.scss';

const ContactListItem = ({ name, number, onRemoveContact }) => {
  return (
    <li className={s.contactItem}>
      <span>{name} </span> <span>{number}</span>
      <button
        type="button"
        className={s.btnRemoveItem}
        onClick={onRemoveContact}
      >
        <DeleteForeverIcon
          style={{ fontSize: '30px' }}
          fontSize="large"
          color="error"
        />
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ...contactsSelectors.getContactById(state, ownProps.id),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveContact: () => dispatch(contactsOperations.delContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
