/* eslint-disable */
import React, { useState } from 'react';
import SplitPane from '../../../common/SplitPane/SplitPane';
import SplitPaneLayout from '../../../common/SplitPane/SplitPaneLayout';
import styles from './RocketRow.module.scss';
import { reserve, cancel } from '../rocketSlice';
import { useDispatch } from 'react-redux';

const RocketRow = ({id, title, description, image, reserved}) => {

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
    <SplitPane
      layout={
        new SplitPaneLayout('row', 'col', 'col', styles)
      }
      first={
        <>
          <img src={image} />
        </>
      }
      second={
        <>
          <div className={styles['row-heading']}>
            <span>{reserved && 'Reserved'}</span>
            <h2>{title}</h2>
          </div>
          <span>{description}</span>
          <div className={styles['row-button']}>
            <button
              className={buttonStyle}
              type='button'
              onClick={handleClick}
            >
              {buttonText}
            </button>
          </div>
        </>
      }
    />
  );

}

export default RocketRow;