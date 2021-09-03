import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserve, cancel } from './rocketsSlice';

const RDRow = React.lazy(() => import('../../common/components/RDRow/RDRow'));

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (rockets.length === 0) dispatch(getRockets());
    },
    [],
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="rd-rows">
        { rockets.map(({
          id, title, description, image, reserved = false,
        }) => (
          <RDRow
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            reserved={reserved}
            actions={{ reserve, cancel }}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Rockets;
