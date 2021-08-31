import React from "react";
import styles from './ProfileColumn.module.scss'

const ProfileColumn = ({columnTitle, reservedItems}) => {

  return (
    <div className={styles['profile-column']}>
      <h2>{columnTitle}</h2>
      <ul>
        { reservedItems.map(({title}) => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );

};


export default ProfileColumn;