import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './RDRow.module.scss';

const RDRow = ({
  id, title, description, image, reserved, actions: { reserve, cancel },
}) => {
  const [buttonText, setButtonText] = useState(reserved ? 'Cancel' : 'Reserve');

  const dispatch = useDispatch();

  const handleClick = () => {
    if (reserved) {
      dispatch(cancel(id));
      setButtonText('Reserve');
    } else {
      dispatch(reserve(id));
      setButtonText('Cancel');
    }
  };

  return (

    <div className={styles['rd-row']}>

      <div className={styles['rd-image']}>
        <img src={image} alt={title} />
      </div>

      <div className={styles['rd-details']}>

        <div className={styles['rd-heading']}>
          {reserved && (<span>Reserved</span>)}
          <h2>{title}</h2>
        </div>

        <span>{description}</span>

        <div className={styles['rd-button']}>
          <button
            className={reserved ? styles.cancel : undefined}
            type="button"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </div>

      </div>
    </div>
  );
};

RDRow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    reserve: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
  }).isRequired,
};

export default RDRow;
