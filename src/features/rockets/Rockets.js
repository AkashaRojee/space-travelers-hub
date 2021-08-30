import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../rockets/rocketSlice'
import RocketRow from './components/RocketRow';

const Rockets = () => {

  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(add());
    },
    []
  );

  console.log(rockets);
  
  return (
    <div>
      { rockets.map(({id, title, description, image}) => (
        <RocketRow
          key={id}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
}


export default Rockets;