import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contactsActions';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';

import { TextField } from '@material-ui/core';

const Filter = ({ contacts, filterValue, onFilter }) => {
  const isShowFilter = contacts.length > 2;

  return (
    <>
      {isShowFilter && (
        <div>
          <p>Filter</p>
          <TextField
            size="small"
            id="Find contacts by name"
            label="Find contacts by name"
            variant="outlined"
            type="text"
            name="filter"
            value={filterValue}
            onChange={onFilter}
          />
        </div>
      )}
    </>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filterValue: contactsSelectors.getFilterValue(state),
});
const mapDispatchToProps = {
  onFilter: contactsActions.filterContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
