import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileColumn.module.scss';

const ProfileColumn = ({ columnTitle, reservedItems }) => (
  <div className={styles['profile-column']}>
    <h2>{columnTitle}</h2>
    <ul>
      { reservedItems.map(({ title }) => (
        <li key={title}>{title}</li>
      ))}
    </ul>
  </div>
);

ProfileColumn.propTypes = {
  columnTitle: PropTypes.string.isRequired,
  reservedItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ProfileColumn;
