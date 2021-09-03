import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDragons, reserve, cancel } from './dragonsSlice';

const RDRow = React.lazy(() => import('../../common/components/RDRow/RDRow'));

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (dragons.length === 0) dispatch(getDragons());
    },
    [],
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="rd-rows">
        {dragons.map(({
          id, title, type, image, reserved = false,
        }) => (
          <RDRow
            key={id}
            id={id}
            title={title}
            description={`Type: ${type}`}
            image={image}
            reserved={reserved}
            actions={{ reserve, cancel }}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Dragons;
