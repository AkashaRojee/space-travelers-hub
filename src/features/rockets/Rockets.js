import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../rockets/rocketSlice'
import RocketRow from './RocketRow';
import styles from './Rockets.module.scss';

const Rockets = () => {

  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (rockets.length === 0) dispatch(getRockets());
    },
    []
  );
  
  return (
    <div className={styles.rockets}>
      { rockets.map(({id, title, description, image, reserved = false}) => (
        <RocketRow
          key={id}
          id={id}
          title={title}
          description={description}
          image={image}
          reserved={reserved}
        />
      ))}
    </div>
  );
}


export default Rockets;