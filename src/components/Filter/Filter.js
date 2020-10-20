import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.scss';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filterBox}>
      <p>Find contacts by name</p>
      <input
        className={s.inputFilter}
        type="text"
        placeholder="Filter"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
