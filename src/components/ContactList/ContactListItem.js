import React from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import s from '../../styled';

const ContactListItem = ({ name, number, onRemoveContact }) => (
  <s.liItem>
    {name}: {number}
    <s.BtnRemove type="button" onClick={onRemoveContact}>
      Delete
    </s.BtnRemove>
  </s.liItem>
);

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
