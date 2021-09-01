import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reserve, cancel } from '../../../features/rockets/rocketSlice';
import styles from './RDRow.module.scss';

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

  return (

    <div className={styles['rd-row']}>

      <div className={styles['rd-image']}>
        <img src={image} alt={title}/>
      </div>

      <div className={styles['rd-details']}>

        <div className={styles['rd-heading']}>
          {reserved && (<span>Reserved</span>)}
          <h2>{title}</h2>
        </div>

        <span>{description}</span>

        <div className={styles['rd-button']}>
          <button
            className={reserved && styles.cancel}
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