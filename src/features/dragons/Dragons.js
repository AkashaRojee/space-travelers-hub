/* eslint-disable */
import React, { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadDragons, reserveDragon, unReserveDragon } from './store/dragonsSlice';

const RDRow = React.lazy(() => import('../../common/components/RDRow/RDRow'));

const Dragons = () => {
  const { list: dragonsList } = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDragons());
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="rd-rows">
        {dragonsList.map(({id, name, type, isReserved, imgSrc }) => (
          <RDRow
            key={id}
            id={id}
            title={name}
            description={`Type: ${type}`}
            image={imgSrc}
            reserved={isReserved}
            actions={{ reserve: reserveDragon, cancel: unReserveDragon }}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default Dragons;
