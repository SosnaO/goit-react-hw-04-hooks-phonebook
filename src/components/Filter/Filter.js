import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css'

const Filter =({ value, onChange }) => (
    <label className={styles.filterLabel}>
        Find contacts by name 
      <input className={styles.filterInput} type="text"
      value={value}
      onChange={onChange}
      />
     </label>
);
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default Filter;