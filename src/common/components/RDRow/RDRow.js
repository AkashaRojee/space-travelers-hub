/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SplitPane from '../SplitPane/SplitPane';
import SplitPaneLayout from '../SplitPane/SplitPaneLayout';
import styles from './RDRow.module.scss';
import { reserve, cancel } from '../../../features/rockets/rocketSlice';

const RDRow = ({id, title, description, image, reserved}) => {

  const [ buttonText, setButtonText ] = useState(reserved ? 'Cancel' : 'Reserve');

  const dispatch = useDispatch();

  const handleClick = () => {
    if (reserved) {
      dispatch(cancel(id));
      setButtonText((state) => 'Reserve');
    } else {
      dispatch(reserve(id));
      setButtonText((state) => 'Cancel');
    }
  };

  const buttonStyle = reserved ? styles.cancel : styles.reserve;

  return (

    <div className={styles['rd-row']}>

      <div className={styles['rd-image']}>
        <img src={image} />
      </div>

      <div className={styles['rd-details']}>

        <div className={styles['rd-heading']}>
          {reserved && (<span>Reserved</span>)}
          <h2>{title}</h2>
        </div>

        <span>{description}</span>

        <div className={styles['rd-button']}>
          <button
            className={buttonStyle}
            type='button'
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>

      </div>
    </div>
  );

}

export default RDRow;